import { Saltkey } from "../AppConfig";
import { UserTypeService } from "../services/UserTypeService";
const common = require("../common/CommonHelper");
export class UserMapper{
    async ModeltoDTO(models:any): Promise<any>
    {
        let dtos: any = models.map(m=>{
            let dto:any = {
            UserId: m?.guid,
            UserName: m?.emailaddress,
            FirstName: m?.firstname,
            MiddleName: m?.middlename,
            LastName: m?.lastname,
            EmailAddress: m?.emailaddress,
            PhoneNumber: m?.mobilenumber,
            RetryCount: m?.retrycount,
            UserStatus: m?.userstatus,
            DateOfBirth: m?.dateofbirth,
            AddressLine: m?.addressline,
            Country: m?.country,
            DateCreated: m?.datecreated ? m.datecreated: null,
            DateModified: m?.datemodified ? m.datemodified: null,
            };
            return dto;
        });
        return dtos;
    }

    async ModeltoDTOSingle(model: any, context:any):Promise<any>
    {

    //    let userTypeService = new UserTypeService(context)
    //    var userTypes:any = await userTypeService.loadById(model?.usertypeid, 'usertypeid')

        let dto = {
            UserId: model?.guid,
            UserName: model?.emailaddress,
            FirstName: model?.firstname,
            MiddleName: model?.middlename,
            LastName: model?.lastname,
            EmailAddress: model?.emailaddress,
            PhoneNumber: model?.mobilenumber,
            RetryCount: model?.retrycount,
            UserStatus: model?.userstatus,
            DateOfBirth: model?.dateofbirth,
            AddressLine: model?.addressline,
            Country: model?.country,
            DateCreated: model?.datecreated ? model.datecreated: null,
            DateModified: model?.datemodified ? model.datemodified: null,
            // UserTypeId:userTypes.guid
        }
        return dto;
    }

    async DTOtoModel(dto:any,context:any){
        let userTypeService = new UserTypeService(context);
        // let userType = null;

        // if(dto.UserTypeId){
        //     userType = await userTypeService.loadByGuid(dto.UserTypeId)
        // }
        let model: any ={
            username: dto.EmailAddress? dto.EmailAddress : null,
            firstname: dto.FirstName? dto.FirstName: null,
            middlename: dto.MiddleName? dto.MiddleName: null,
            lastname: dto.LastName? dto.LastName: null,
            emailaddress: dto.EmailAddress? dto.EmailAddress: null,
            mobilenumber: dto.PhoneNumber? dto.PhoneNumber: null,
            userstatus: dto.UserStatus? dto.UserStatus: true,
            dateofbirth: dto.DateOfBirth? dto.DateOfBirth: null,
            addressline: dto.AddressLine? dto.AddressLine: null,
            postcode: dto.Postcode? dto.Postcode: null,
            country: dto.Country? dto.Country: true,
            password: null,
            salt: null,
            usertypeid:1,
        }

        if(dto.Password != null)
        {
            let saltKey: string = Saltkey;
            let hashedPassword: string = common.HashPassword(saltKey, dto.Password);
            model.password = hashedPassword;
            model.salt = saltKey;
        }

        return model;
    }

    // async ResetPasswordMapper(dto:any)
    // {
    //     if(dto.NewPassword === dto.ConfirmPassword && dto.IsDefaultPassword)
    //     {
    //         let model:any = {};
    //         let saltKey:string = Saltkey;
    //         let hashedPassword:string = common.HashPassword(saltKey, dto.NewPassword);

    //         model.password = hashedPassword;
    //         model.salt = saltKey;
    //         model.isdefaultpassword = '0';

    //         return model;
    //     }
    // }
//{"FirstName":"","MiddleName":"","LastName":"","MobileNumber":"","EmailAddress":"","UserName":"","Password":"admin12","RoleId":"c87dfb05-5020-4dd4-8357-6ffaae1b316d","UserTypeId":"9e9cca25-a83f-4726-9ac9-41f7441b04e2"}
    async DTOtoModels(dto:any,context:any){

        let model: any ={}

        if(dto.FirstName!=''){
            model.firstname  = dto.FirstName
        }
        if(dto.MiddleName!=''){
            model.middlename  = dto.MiddleName
        }
        if(dto.LastName!=''){
            model.lastname  = dto.LastName
        }
        if(dto.PhoneNumber!=''){
            model.mobilenumber  = dto.PhoneNumber
        }
        if(dto.EmailAddress!=''){
            model.emailaddress  = dto.EmailAddress
        }
        if(dto.UserName!=''){
            model.username  = dto.UserName
        }
        if(dto.Password != '')
        {
            let saltKey: string = Saltkey;
            let hashedPassword: string = common.HashPassword(saltKey, dto.password);
            model.password = hashedPassword;
            model.salt = saltKey;
            return model;
        }
    }
}