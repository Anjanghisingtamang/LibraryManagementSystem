const moment = require("moment");
const Sequelize = require('sequelize');


export class Users {
    Users(context: any) {
        let users = this.UserModel(context);
        return users;
    }

    private UserModel(context: any) {
        return context.define('Users', {
            userid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            guid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            firstname: {
                type: Sequelize.STRING
            },
            middlename: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            salt: {
                type: Sequelize.STRING
            },
            emailaddress: {
                type: Sequelize.STRING
            },
            mobilenumber: {
                type: Sequelize.STRING
            },
            userstatus: {
                type: Sequelize.BOOLEAN
            },
            retrycount: {
                type: Sequelize.INTEGER
            },
            dateofbirth: {
                type: Sequelize.STRING
            },
            addressline: {
                type: Sequelize.STRING
            },
            postcode: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            loginsuspendedtime: {
                type: 'TIMESTAMP'
            },
            usertypeid: {
                type: Sequelize.INTEGER
            },
            datecreated: {
                type: 'TIMESTAMP',
                defaultValue: moment().format()
            },
            datemodified: {
                type: 'TIMESTAMP'
            },
            datedeleted: {
                type: 'TIMESTAMP'
            }
        },
            {
                tableName: 'users',
                timestamps: false
            });
    }
}