const moment = require("moment");
const Sequelize = require('sequelize');


export class Books {
    Books(context: any) {
        let users = this.BookModel(context);
        return users;
    }

    private BookModel(context: any) {
        return context.define('Users', {
            bookid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            guid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            title: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },
            author: {
                type: Sequelize.STRING
            },
            isbn: {
                type: Sequelize.STRING
            },
            publisher: {
                type: Sequelize.STRING
            },
            publicationdate: {
                type: Sequelize.STRING
            },
            genre: {
                type: Sequelize.STRING
            },
            avaibality: {
                type: Sequelize.BOOLEAN
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
                tableName: 'books',
                timestamps: false
            });
    }
}