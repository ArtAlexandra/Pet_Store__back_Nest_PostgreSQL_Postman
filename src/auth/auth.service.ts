import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsersService){}

    async validateUser(email:string, password:string ){
    console.log("TYT5");

        const user = await this.usersService.findOne({ where: { email } });
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        const passwordValid = await bcrypt.compare(password, user.password);

        if(!passwordValid){
            throw new UnauthorizedException('Invalid credentials');

        }

        if(user&&passwordValid){
            return{
                id: user.id,
                name: user.name,
                email:user.email,
                password: user.password,
                phone: user.phone,
                balance: user.balance
            };
        }
        return null;
    }

}
