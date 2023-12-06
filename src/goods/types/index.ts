import { ApiProperty } from "@nestjs/swagger";
import { Animal } from "src/animals/animals.model";
import { Kind } from "src/kinds/kinds.model";



export class GetAllGoodsResponse{
    @ApiProperty({example: 1})
    id_g:number;

    @ApiProperty({example: "Сухой корм с индейкой для самых маленьких 1+"})
    title:string;

    @ApiProperty({example: 500})
    price:number;

    @ApiProperty({example: 1})
    animalId:number;

    @ApiProperty({example: {
        id_a:1,
        title:"Кошки"
    }})
    animal: Animal;

    @ApiProperty({example: 200})
    quantity:number;

    @ApiProperty({example: "Какое-то описание товара"})
    description:string;

    @ApiProperty({example: "Whiskas"})
    mark:string;

    @ApiProperty({example: 1})
    kindId:number;

    @ApiProperty({example: {
        id_k:1,
        title: "Сухой корм"
    }})
    kind: Kind;


    @ApiProperty({example: "Картинка"})
    image:Blob;


}
export class CreateGoodsRequest{


    @ApiProperty({example: "Сухой корм с индейкой для самых маленьких 1+"})
    title:string;

    @ApiProperty({example: 500})
    price:number;

    @ApiProperty({example: 1})
    animalId:number;


    @ApiProperty({example: 200})
    quantity:number;

    @ApiProperty({example: "Какое-то описание товара"})
    description:string;

    @ApiProperty({example: "Whiskas"})
    mark:string;

    @ApiProperty({example: 1})
    kindId:number;

}


export class CreateGoodsWithImageRequest{


    @ApiProperty({example: "Сухой корм с индейкой для самых маленьких 1+"})
    title:string;

    @ApiProperty({example: 500})
    price:number;

    @ApiProperty({example: 1})
    animalId:number;


    @ApiProperty({example: 200})
    quantity:number;

    @ApiProperty({example: "Какое-то описание товара"})
    description:string;

    @ApiProperty({example: "Whiskas"})
    mark:string;

    @ApiProperty({example: 1})
    kindId:number;

    @ApiProperty({example: "Картинка"})
    image:string;
}


export class SortGoodsPriceRequest{
    @ApiProperty({example: 100})
    p1:number;

    @ApiProperty({example: 500})
    p2:number;
}