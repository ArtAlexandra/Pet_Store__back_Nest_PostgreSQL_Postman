import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";



export class CreateUserDto{
    @ApiProperty({example: "Alexandra"})
    @IsNotEmpty()
    readonly name:string;

    @ApiProperty({example:"sandra.art.2@mail.ru"})
    @IsNotEmpty()
    readonly email:string;

    @ApiProperty({example: "12345qwert"})
    @IsNotEmpty()
    readonly password:string;

    @ApiProperty({example: "+79185466029"})
    readonly phone:string;

    @ApiProperty({example: 15000})
    readonly balance:number;

    @ApiProperty({example: false})
    readonly admin:boolean;
}