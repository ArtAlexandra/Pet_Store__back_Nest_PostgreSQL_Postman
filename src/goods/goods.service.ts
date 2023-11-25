import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Goods } from './goods.model';
import { CreateGoodsDto } from './dto/create-goods.dto';


@Injectable()
export class GoodsService {

    constructor(
        @InjectModel(Goods)
        private goodsModel : typeof Goods,
      ){}
  
    findOne(filter: {
        where: { id_g?: number|string; title?: string };
      }): Promise<Goods> {
        return this.goodsModel.findOne({...filter});
      }
      
      findAll(): Promise<Goods[]> {
        return this.goodsModel.findAll();
      }
     
      async sortPrice(p1: number, p2:number):Promise<Goods[]>{
       const goods =  this.goodsModel.findAll();
      console.log(p1)
       const goodsSort = (await goods).filter((g)=>g.price>=p1 && g.price<=p2 );
       return goodsSort; 
      
      }
      async sortKind(kind:number):Promise<Goods[]>{
        const goods =  this.goodsModel.findAll();
       const goodsSort = (await goods).filter((g)=>g.kind == kind);
       return goodsSort;
      }
      async sortAnimal(animal:number):Promise<Goods[]>{
        const goods =  this.goodsModel.findAll();
       const goodsSort = (await goods).filter((g)=>g.animal == animal);
       return goodsSort;
      }




    async remove(id:number):Promise<void>{
        const goodsDelete = await this.goodsModel.findOne({
            where: {id_g: id}
        });
       await goodsDelete.destroy();
    }

    async create(
        createGoodsDto: CreateGoodsDto
    ): Promise<Goods| {warningMessage:string}>{
        
        
        const existingGoodsByTitle = await this.findOne({
            where: { title: createGoodsDto.title}
        });
        if(existingGoodsByTitle){
            return {
                warningMessage : 'Товар с таким названием уже существует'
            };
        }
        const goods = new Goods();
        goods.title = createGoodsDto.title;
        goods.price = createGoodsDto.price;
        goods.quantity = createGoodsDto.quantity;
        goods.animal = createGoodsDto.animal;
        goods.description = createGoodsDto.description;
        goods.kind = createGoodsDto.kind;
        goods.mark = createGoodsDto.mark;
        goods.image = createGoodsDto.image;

        return goods.save();



    }

    
    async createImage(
        createGoodsDto: CreateGoodsDto,  image: Blob
    ): Promise<Goods| {warningMessage:string}>{
        
        
        const existingGoodsByTitle = await this.findOne({
            where: { title: createGoodsDto.title}
        });
        if(existingGoodsByTitle){
            return {
                warningMessage : 'Товар с таким названием уже существует'
            };
        }
        
        const goods = new Goods();
        goods.title = createGoodsDto.title;
        goods.price = createGoodsDto.price;
        goods.quantity = createGoodsDto.quantity;
        goods.animal = createGoodsDto.animal;
        goods.description = createGoodsDto.description;
        goods.kind = createGoodsDto.kind;
        goods.mark = createGoodsDto.mark;
        goods.image =image;

        return goods.save();



    }

    async addImage(
        id_g:string,
       image: Blob
    ): Promise<Goods| {warningMessage:string}>{
       
        
        const id_g2: number = Number(id_g);
        
        const goodsOld = await this.findOne({
            where: {id_g : id_g2}
        });
       
        if(!goodsOld){
            return {
                warningMessage : 'Товар с таким названием не существует'
            };
            
        }
    
       await this.goodsModel.update({image}, {where: {id_g}});
        return this.findOne({where: {id_g: id_g2}})
        
    }



}
