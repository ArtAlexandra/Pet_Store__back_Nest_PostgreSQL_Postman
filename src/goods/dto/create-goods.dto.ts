


import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateGoodsDto{

    @ApiProperty({example: 1})
    @IsNotEmpty()
    readonly id_g:number;

    @ApiProperty({example: "Whiskas с лососем от 1 года"})
    @IsNotEmpty()
    readonly title:string;

    @ApiProperty({example: 600})
    @IsNotEmpty()
    readonly price:number;

    @ApiProperty({example: 2})
    @IsNotEmpty()
    readonly animalId:number;

    @ApiProperty({example: 100})
    @IsNotEmpty()
    readonly quantity:number;


    @ApiProperty({example: "Большое описание товара"})
    @IsNotEmpty()
    readonly description:string;

    
    
    @ApiProperty({example: "Whiskas"})
    @IsNotEmpty()
    readonly mark:string;

    @ApiProperty({example: 2})
    @IsNotEmpty()
    readonly kindId:number;

    @ApiProperty({example: "image"})
    @IsNotEmpty()
    readonly image:Blob;
}