import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './baskets.model';
import { CreateBasketDto } from './dto/create-basket.dto';
import { User } from 'src/users/users.model';
import { Goods } from 'src/goods/goods.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class BasketsService {

    constructor(
        @InjectModel(Basket)
        private basketModel : typeof Basket,

        @InjectModel(User)
        private userModel : typeof User,

        @InjectModel(Goods)
        private goodsModel : typeof Goods,
      ){}
  
    findOne(filter: {
        where: { id_b?: number|string;  goodsId?: number|string };
      }): Promise<Basket> {
        return this.basketModel.findOne({...filter},);
      }
      
      findAll(): Promise<Basket[]> {
        return this.basketModel.findAll({include: [User, Goods]});
      }
      
      async buyGoods(id:number):Promise<string>{
       
            
            const goods = await this.basketModel.findOne({ 
                where:{id_b:id},
               include: [{model: User}, {model: Goods}]
               
            });
        
            if(!goods){
                return "Такой товар не найден";
            }
            if(goods.payment){
                return 'Этот товар уже оплачен'
            }
    
            if(!goods.quantity){
                return "Добавьте необходимое количество товара!";
            }

            if(goods.user.balance<goods.quantity * goods.goods.price){
                return "Средств на счету не хватает для покупки товара. Пожалуйста, пополните баланс.";
            }
        
            if(goods.quantity> goods.goods.quantity){
                return "К сожалению, сейчас на складе нет такого количества товара.";
            }

           

            const balance = goods.user.balance - goods.quantity * goods.goods.price;
            let quantity = 0;
            const payment = true;
            await this.basketModel.update({ quantity, payment}, {where: {id_b:id}});
            quantity = goods.goods.quantity - goods.quantity;
            await this.goodsModel.update({quantity}, {where: {id_g: goods.goods.id_g}});
            await this.userModel.update({balance},{where: {id: goods.user.id}});
            return `Товар успешно куплен`;
      }
     
    




    async remove(id:number):Promise<void>{
        const goodsDelete = await this.basketModel.findOne({
            where: {id_b: id}
        });
       await goodsDelete.destroy();
    }

    async create(
        createBasketDto: CreateBasketDto
    ): Promise<Basket| {warningMessage:string}>{
        
        
        const existingGoodsByGoodsId = await this.findOne({
            where: { goodsId: createBasketDto.goodsId}
        });
        if(existingGoodsByGoodsId){
            return {
                warningMessage : 'Товар с таким названием уже существует'
            };
        }
        const basket = new Basket();
       
        basket.goodsId = createBasketDto.goodsId;
        basket.userId = createBasketDto.userId;
        basket.payment = createBasketDto.payment;
        basket.description = createBasketDto.description;
        basket.discount = createBasketDto.discount;
        basket.quantity = createBasketDto.quantity;


        return basket.save();



    }

    
    

  

}
