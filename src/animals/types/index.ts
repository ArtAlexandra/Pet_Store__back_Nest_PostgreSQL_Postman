import { ApiProperty } from "@nestjs/swagger";



export class CreateAnimalRequest{
    @ApiProperty({example: "Кошка"})
    name:string;
}
export class CreateAnimalResponse{
    @ApiProperty({example:1})
    id_a:number;

    @ApiProperty({example: "Кошка"})
    name:string;
}
export class AllAnimalsResonse{
    @ApiProperty({example:1})
    id_a:number;

    @ApiProperty({example: "Кошка"})
    name:string;
}