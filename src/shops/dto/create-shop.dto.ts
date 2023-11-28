import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";



export class CreateShopDto{

    @ApiProperty({example: 1})
    @IsNotEmpty()
    readonly id_s:number;

 
    @ApiProperty({example: "Зоомир"})
    @IsNotEmpty()
    readonly name:string;

    @ApiProperty({example: "г. Таганрог, ул.Дзержинского, 86/3"})
    @IsNotEmpty()
    readonly address:string;


    @ApiProperty({example: "8-(8634)-23-49-70"})
    @IsNotEmpty()
    readonly phone:string;

    @ApiProperty({example: "zoomir@mail.ru"})
    @IsNotEmpty()
    readonly email:string;

    @ApiProperty({example: "40817810099910004312"})
    @IsNotEmpty()
    readonly account:string;

    @ApiProperty({example: "Какие-то подробности"})
    @IsNotEmpty()
    readonly descriptions:string;

    @ApiProperty({example: "пн-пт: 09:00-19:00, сб-вс: 10:00-19:00"})
    @IsNotEmpty()
    readonly time_work:string;

}