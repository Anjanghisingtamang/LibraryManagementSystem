import { QueryTypes } from "sequelize";
import { RetryCount, SuspendedTime } from "../AppConfig";
import { Users } from "../model/Users";
import { Repository } from "../repository/Repository";
import { GenericService } from "./GenericService";
import * as moment from "moment";

export class UserService<T> extends GenericService<T>{
    protected dbContext: any;
    protected user: any;

    constructor(context: any) {
        let users = new Users();
        let user = users.Users(context);
        super(new Repository(user));
        this.user = user;
        this.dbContext = context;
    }

    async Load(search:string, orderBy:string, orderDir:string, offset:number, pageSize:number, modified:string)
    {

        let whereClause: any = {
            datedeleted: null,
        };

        if(search)
        {
            search = "%" + search + "%";
            whereClause.$or =[{
                                firstname: {$iLike : search}
                            },
                            {     
                                lastname: {$iLike : search}
                            },{     
                                username: {$iLike : search}
                            }];
        }
        
        let results  = await this.loadAllOffset(offset, pageSize, orderBy, orderDir, modified, whereClause, null);
        return results;
    }

    async getUserDetail(emailAddress: string) {
        let whereClause = {
            where: {
                emailaddress: { $iLike: emailAddress },
                datedeleted: null
            },
        };
        return await this.loadInclude(whereClause);
    }

    async update(updateClause: any, whereClause: any, userId: number) {
        let result: any = {};

        result = await this.repository.update(updateClause, whereClause, userId);
        return result[0];
    }

    async UpsertUser(model: any) {
        let results;
        await this.add(model, null).then(async function (result: any) {
            results = result;
        });
        return results;
    }


    async CheckSuspended(userId: number) {
        let result = await this.dbContext.query("select * From public.is_user_suspended(:userid)", {
            replacements: { userid: userId }, type: QueryTypes.SELECT
        });

        return result[0];
    }

    // async UpsertUsersCheck(userId:number, password:string)
    // {
    //     let result = await this.dbContext.query('SELECT * FROM public.user_checkadmin(:userid, :password);',{
    //         replacements:{ userid: userId, password:password}, type:QueryTypes.SELECT
    //     });
    //     return result[0].user_checkadmin;
    // }

    async UpdateFailedLogin(user: any) {
        let udpateClause: any = { retrycount: (user.retrycount + 1) };

        if ((user.retrycount + 1) >= 5) {
            udpateClause.loginsuspendedtime = moment().format();
        }

        await this.update(udpateClause, { userid: user.userid, datedeleted: null }, user.userid);
    }

    // async RetryCountReset(guid:string, userId:number)
    // {
    //     let result = await this.dbContext.query('SELECT * FROM public.users_reset_loginretrycount(:guid, :currentuserid)',{
    //         replacements: { guid: guid, currentuserid: userId}, types: QueryTypes.SELECT
    //     });

    //     return result[0][0].users_reset_loginretrycount;
    // }
}