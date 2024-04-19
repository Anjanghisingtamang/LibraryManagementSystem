import { Saltkey } from "../AppConfig";
const common = require("../common/CommonHelper");
export class BookMapper{
    async ModeltoDTO(models:any): Promise<any>
    {
        let dtos: any = models.map(m=>{
            let dto:any = {
            BookId: m?.guid,
            Title: m?.title,
            Author: m?.author,
            ISBN: m?.isbn,
            Publisher: m?.publisher,
            PublicationDate: m?.publicationdate,
            Genre: m?.genre,
            Avaibality: m.avaibality?'true':'false',
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
            BookId: model?.guid,
            Title: model?.title,
            Author: model?.author,
            ISBN: model?.isbn,
            Publisher: model?.publisher,
            PublicationDate: model?.publicationdate,
            Genre: model?.genre,
            Avaibality: model.avaibality?'true':'false',
            DateCreated: model?.datecreated ? model.datecreated: null,
            DateModified: model?.datemodified ? model.datemodified: null,
            // UserTypeId:userTypes.guid
        }
        return dto;
    }

    async DTOtoModel(dto:any,context:any){
        let model: any ={
                Title: dto.title? dto.title : null,
                Author: dto.author? dto.author: null,
                ISBN: dto.isbn? dto.ISisbnBN: null,
                Publisher: dto.publisher? dto.publisher: null,
                PublicationDate: dto.publisher? dto.publisher: null,
                Genre: dto.genre? dto.genre: null,
                Avaibality: dto.avaibality?true: false
        }

        return model;
    }
}