const moment = require("moment");
const Sequelize = require('sequelize');


export class ReservedBooks {
    Books(context: any) {
        let users = this.ReservedBookModel(context);
        return users;
    }

    private ReservedBookModel(context: any) {
        return context.define('Users', {
            reservationid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            guid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            reservedbyuserid: {
                type: Sequelize.INTEGER,
            },
            reservationdate: {
                type: Sequelize.STRING
            },
            returndate: {
                type: Sequelize.STRING
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
                tableName: 'reservedbook',
                timestamps: false
            });
    }
}