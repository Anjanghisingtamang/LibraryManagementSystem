import { QueryTypes } from "sequelize";
import { RetryCount, SuspendedTime } from "../AppConfig";
import { Books } from "../model/Books";
import { Repository } from "../repository/Repository";
import { GenericService } from "./GenericService";
import * as moment from "moment";

export class BookService<T> extends GenericService<T>{
    protected dbContext: any;
    protected book: any;

    constructor(context: any) {
        let books = new Books();
        let book = books.Books(context);
        super(new Repository(book));
        this.book = book;
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
                                title: {$iLike : search}
                            },
                            {     
                                isbn: {$iLike : search}
                            },{     
                                Publisher: {$iLike : search}
                            }];
        }
        
        let results  = await this.loadAllOffset(offset, pageSize, orderBy, orderDir, modified, whereClause, null);
        return results;
    }

   

    async update(updateClause: any, whereClause: any, userId: number) {
        let result: any = {};

        result = await this.repository.update(updateClause, whereClause, userId);
        return result[0];
    }

    async UpsertBook(model: any) {
        let results;
        await this.add(model, null).then(async function (result: any) {
            results = result;
        });
        return results;
    }

}