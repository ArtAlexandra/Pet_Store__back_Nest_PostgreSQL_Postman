


import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Goods } from "src/goods/goods.model";
import { User } from "src/users/users.model";

export class CreateBasketDto{


    @ApiProperty({example: 1})
    @IsNotEmpty()
    readonly id_b:number;

    @ApiProperty({example: 1})
    @IsNotEmpty()
    readonly userId:number;
    @ApiProperty({example: "user"})
    @IsNotEmpty()
    readonly user: User;

    @ApiProperty({example: "goods"})
    @IsNotEmpty()
    readonly goods: Goods;
  
    @ApiProperty({example: 2})
    @IsNotEmpty()
    readonly goodsId:number;


    @ApiProperty({example: 4})
    @IsNotEmpty()  
    readonly quantity:number;


    @ApiProperty({example: "Какой-то комментарий покупателя"})
    @IsNotEmpty()
    readonly description:string;

    @ApiProperty({example: false})
    @IsNotEmpty()
    readonly payment:boolean;
    
    @ApiProperty({example: 15})
    @IsNotEmpty()
    readonly discount: number;

   
}