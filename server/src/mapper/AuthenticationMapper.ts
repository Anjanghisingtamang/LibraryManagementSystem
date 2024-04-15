
export class AuthenticationMapper{
    
    protected context:any;

    constructor(context:any)
    {
        this.context = context;
    }

    public async Map(users:any, authKey: string,userType:any)
    {

        let userTypeDetails = {
            UserTypeId: userType?.guid,
            UserTypeName: userType?.usertypename,
            DateCreate : userType?.datecreated

        }

        let obj = {
            AuthenticationKey : authKey,
            UserId : users[0].guid,
            UserName : users[0].username,
            UserType : userTypeDetails,
        }

       return obj;
    }
}