import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";



export class CreateKindDto{
    @ApiProperty({example: "Сухой корм"})
    @IsNotEmpty()
    readonly name:string;

}