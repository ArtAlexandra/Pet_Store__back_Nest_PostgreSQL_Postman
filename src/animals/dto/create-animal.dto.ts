import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";



export class CreateAnimaldDto{
    @ApiProperty({example: "Кошки"})
    @IsNotEmpty()
    readonly name:string;

}