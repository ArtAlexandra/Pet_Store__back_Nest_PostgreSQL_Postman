import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Goods } from './goods.model';
import { CreateGoodsDto } from './dto/create-goods.dto';

import { switchMap, map, catchError} from 'rxjs/operators';
import { Observable, from, throwError } from 'rxjs';

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
       const goodsSort = (await goods).filter((g)=>g.kindId == kind);
       return goodsSort;
      }
      async sortAnimal(animal:number):Promise<Goods[]>{
        const goods =  this.goodsModel.findAll();
       const goodsSort = (await goods).filter((g)=>g.animalId == animal);
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
        goods.animalId = createGoodsDto.animalId;
        goods.description = createGoodsDto.description;
        goods.kindId = createGoodsDto.kindId;
        goods.mark = createGoodsDto.mark;
        goods.image = createGoodsDto.image;

        return goods.save();



    }

    
    async createImage(
        createGoodsDto: CreateGoodsDto,  image: string
    ): Promise<Goods| {warningMessage:string}>{
        
        console.log(image);
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
        goods.animalId = createGoodsDto.animalId;
        goods.description = createGoodsDto.description;
        goods.kindId = createGoodsDto.kindId;
        goods.mark = createGoodsDto.mark;
        goods.image = image;

        return goods.save();



    }

    async addImage(
        id_g:number,
        createGoodsDto: CreateGoodsDto
    ): Promise<Goods|string>{
        const goods = await this.goodsModel.findOne({where: {title: createGoodsDto.title}});
        if(!goods){
            return 'Такой товар не найден';
        }
  
       const image = createGoodsDto.image;
       await  this.goodsModel.update({image}, {where: {title: createGoodsDto.title}});
       return goods;
      //  return from(this.goodsModel.update({goods}, {where: {title: goods.title}} ))//.pipe(
          //  switchMap(() => this.findOne({where: {id_g: id_g2}}))
        
        
    }

    async addQuantity(createGoodsDto: CreateGoodsDto): Promise<string>{
        const goods = await this.goodsModel.findOne({where: {title: createGoodsDto.title}});
        if(!goods){
            return 'Такой товар не найден';
        }

        if(createGoodsDto.quantity<=0){
            return 'Ошибка! Можно добавить только положительное число товаров!';
        }
        const quantity = goods.quantity + createGoodsDto.quantity;
        await this.goodsModel.update({quantity}, {where: {title: createGoodsDto.title}});
        
        return `Товар успено поплнен на ${createGoodsDto.quantity} штук`;
      
    }


}
