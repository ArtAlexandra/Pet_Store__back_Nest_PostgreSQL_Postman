import { ApiProperty } from "@nestjs/swagger";



export class LoginUserRequest{
    @ApiProperty({example: "sandra.art.2@mail.ru"})
    email:string;

    @ApiProperty({example: "12345qwert"})
    password:string;
}

export class LoginUserResponse{

    @ApiProperty({example:{user:{
        "id": 1,
        "name": "Alexandra",
        "email": "sandra.art.2@mail.ru",
        "password": "$2b$10$w2Yu4L2FZ6qkIa/5SKRhUeBPzvP99yUP3S1m0/0bOGohPbRI543yC",
        "phone": "+79185466039",
        "balance": 15000
    }}})
    user:{
        id:number;
        name:string;
        email:string;
        password:string;
        phone:string;
        balance:number;
    }
    @ApiProperty({example: "Logged in"})
    msg:string;
}


export class LogoutUserResponse{
    @ApiProperty({example: "session has ended"})
    msg:string;
}

export class LogintCheckResponse{
    @ApiProperty({example: 1})
    id:number;

    @ApiProperty({example: "Alexandra"})
    name:string;

    @ApiProperty({example: "sandra.art.2@mail.ru"})
    email:string;

    @ApiProperty({example: "$2b$10$w2Yu4L2FZ6qkIa/5SKRhUeBPzvP99yUP3S1m0/0bOGohPbRI543yC"})
    password:string;

    @ApiProperty({example: "+79185466029"})
    phone:string;

    @ApiProperty({example: 15000})
    balance:number;
}

export class SignupResponse{
    @ApiProperty({example: 3})
    id:number;

    @ApiProperty({example: "Maxim"})
    name:string;

    @ApiProperty({example: "maxim@mail.ru"})
    email:string;

    @ApiProperty({example: "$2b$10$w2Yu4L2FZ6qkIa/5SKRhUeBPzvP99yUP3S1m0/0bOGohPbRI543yC"})
    password:string;

    @ApiProperty({example: "+79198467139"})
    phone:string;

    @ApiProperty({example: 1000})
    balance:number;

    @ApiProperty({example: "2023-11-24T08:44:15.880Z"})
    updatedAt:string;

    @ApiProperty({example: "2023-11-24T08:44:15.880Z"})
    createdAt:string;


}


export class SignupRequest{
  
    @ApiProperty({example: "Maxim"})
    name:string;

    @ApiProperty({example: "maxim@mail.ru"})
    email:string;

    @ApiProperty({example: "passwordmaxim"})
    password:string;

    @ApiProperty({example: "+79198467139"})
    phone:string;

    @ApiProperty({example: 1000})
    balance:number;

    @ApiProperty({example: false})
    admin:boolean;
}
