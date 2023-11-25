import { ApiProperty } from "@nestjs/swagger";



export class CreateKindRequest{
    @ApiProperty({example: "Сухой корм"})
    name:string;
}
export class CreateKindResponse{
    @ApiProperty({example:1})
    id_k:number;

    @ApiProperty({example: "Сухой корм"})
    name:string;
}
export class AllKindsResonse{
    @ApiProperty({example:1})
    id_k:number;

    @ApiProperty({example: "Сухой корм"})
    name:string;
}