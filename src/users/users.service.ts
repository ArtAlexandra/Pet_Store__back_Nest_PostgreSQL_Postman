import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(
      @InjectModel(User)
      private userModel : typeof User,
    ){}


    findOne(filter: {
        where: { id?: string; name?: string; email?: string };
      }): Promise<User> {
        return this.userModel.findOne({ ...filter });
      }
    

    async create(
        createUserDto: CreateUserDto
    ): Promise<User| {warningMessage:string}>{
        const user = new User();
        const existingUserByName = await this.findOne({
            where: {name : createUserDto.name}
        });

        const existingUserByEmail = await this.findOne({
            where: {email : createUserDto.email}
        });
        if(existingUserByName){
            return {
                warningMessage : 'Пользователь с таким именем уже существует'
            };
        }
        if(existingUserByEmail){
            return {
                warningMessage : 'Пользователь с таким email уже существует'
            };
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        user.name = createUserDto.name;
        user.email = createUserDto.email;
        user.password = hashedPassword;
        user.phone = createUserDto.phone;
        user.balance = createUserDto.balance;

        return user.save();
        

    }
}