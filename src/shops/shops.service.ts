import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Shop } from './shops.model';
import { CreateShopDto } from './dto/create-shop.dto';



@Injectable()
export class ShopsService {

    constructor(
        @InjectModel(Shop)
        private shopModel : typeof Shop,
      ){}
  
    findOne(filter: {
        where: { id?: string; name?: string };
      }): Promise<Shop> {
        return this.shopModel.findOne({...filter});
      }
      
      findAll(): Promise<Shop[]> {
        return this.shopModel.findAll();
      }
      

    async create(
        createShopDto: CreateShopDto
    ): Promise<Shop| {warningMessage:string}>{
        const shop = new Shop();
        const existingShopByName = await this.findOne({
            where: {name : createShopDto.name}
        });
        if(existingShopByName){
            return {
                warningMessage : 'Магазин с таким именем уже существует'
            };
        }
        shop.name = createShopDto.name;
        return shop.save();



    }
}
