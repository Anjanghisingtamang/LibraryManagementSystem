import { Connect } from "../connect/Connect";
import { BookMapper } from "../mapper/BookMapper";
import { BookService } from "../services/BookService";
import { AuthenticationHeader, LoginSourceHeader, SecurityKeyHeader } from "../AppConfig";

const common = require("../common/CommonHelper");

export class BookController {

    async GetBooks(req, res) {
        const context = await Connect();
        let search = req.query.search;
        let orderBy = req.query.orderBy ? req.query.orderBy : "title";
        let orderDir = req.query.orderDir ? req.query.orderDir : "ASC";
        let page: number = req.query.page ? parseInt(req.query.page) : 1;
        let pageSize: number = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
        let modified = req.query.modified;
        let offset: number = pageSize * (page - 1);

        try {
            let bookService = new BookService(context);
            let results: any = await bookService.Load(search, orderBy, orderDir, offset, pageSize, modified);
            results.splice(results.length - 1, 1);

            let mapper = new BookMapper();
            let dtos: any = await mapper.ModeltoDTO(results);

            return res.status(200).send(dtos);
        }
        catch (error) {
            console.log(`url : ${req.url}, error : ${error.message} :: stacktrace : ${error.stack}`, "Error GetSettings", req.UserId)
            let errorMessage = await common.GetErrorMessage(500, 'Internal server error');
            return res.status(500).send({ message: errorMessage });
        }

    }
    async GetBook(req, res) {
        const context = await Connect();
        var bookId = req.params.bookId;

        try {
            let bookService = new BookService(context);

            // if (!common.isGuid(userId)) {
            //     console.log("Invalid, UserId : " + userId, "GetUser" + req.UserId);
            //     var errorMessage = await common.GetErrorMessage(400, 'User Invalid');
            //     return res.status(400).send({ message: errorMessage });
            // }

            var result: any = await bookService.loadByGuid(bookId)

            if (!result) {
                var errorMessage = await common.GetErrorMessage(404, 'Book Not found');
                return res.status(404).send({ message: errorMessage });
            }

            let mapper = new BookMapper();
            var dto = await mapper.ModeltoDTOSingle(result, context);

            return res.status(200).send(dto);

        }
        catch (error) {
            console.log("url : " + req.url + ", error : " + error.message + " :: stacktrace : " + error.stack, "Error GetUser")
            var errorMessage = await common.GetErrorMessage(500, 'Internal server error');
            return res.status(500).send({ message: errorMessage });
        }

    }

    async AddBook(req, res) {
        const context = await Connect();
        let book = req.body;
        let authKey = req.get(SecurityKeyHeader);
        let errorMessage: string;

        try {
            // if (!common.isGuid(authKey)) {
            //     console.log(`Invalid authkey passed ${authKey}`, "Unauthorized", 0);
            //     errorMessage = await common.GetErrorMessage(401, 'Invalid authkey passed');
            //     return res.status(401).send({ message: errorMessage });
            // }

            let bookService = new BookService(context);
            let mapper = new BookMapper();


            let model = await mapper.DTOtoModel(book, context);
            let result = await bookService.UpsertBook(model);

            if (!result) {
                errorMessage = await common.GetErrorMessage(403, 'error on adding user');
                return res.status(403).send({ message: errorMessage });
            }


            return res.status(200).send({ id: result.guid })


        } catch (error) {
            console.log(`url : ${req.url}, error : ${error.message} :: stacktrace : ${error.stack}`, "Error AddUser");
            errorMessage = await common.GetErrorMessage(500, 'backend error cannot add user');
            return res.status(500).send({ message: errorMessage });
        }
    }




    async DeleteBook(req, res) {
        const context = await Connect();
        var bookId = req.params.userId;

        try {
            let bookService = new BookService(context);


            var result: any = await bookService.loadByGuid(bookId)

            if (!result) {
                var errorMessage = await common.GetErrorMessage(404, 'User Not found');
                return res.status(404).send({ message: errorMessage });
            }

            await bookService.Delete({ bookid: result.bookId })

            return res.status(200).send('');

        }
        catch (error) {
            console.log("url : " + req.url + ", error : " + error.message + " :: stacktrace : " + error.stack, "Error GetUser")
            var errorMessage = await common.GetErrorMessage(500, 'Internal server error');
            return res.status(500).send({ message: errorMessage });
        }
    }

}