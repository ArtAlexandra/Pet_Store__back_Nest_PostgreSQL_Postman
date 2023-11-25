import { Injectable } from '@nestjs/common';
import { Kind } from './kinds.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateKindDto } from './dto/create-kind.dto';


@Injectable()
export class KindsService {

    constructor(
        @InjectModel(Kind)
        private kindModel : typeof Kind,
      ){}
  
    findOne(filter: {
        where: { id?: string; name?: string };
      }): Promise<Kind> {
        return this.kindModel.findOne({...filter});
      }
      
      findAll(): Promise<Kind[]> {
        return this.kindModel.findAll();
      }
      

    async create(
        createKindDto: CreateKindDto
    ): Promise<Kind| {warningMessage:string}>{
        const kind = new Kind();
        const existingKindByName = await this.findOne({
            where: {name : createKindDto.name}
        });
        if(existingKindByName){
            return {
                warningMessage : 'Категория с таким именем уже существует'
            };
        }
        kind.name = createKindDto.name;
        return kind.save();



    }
}
