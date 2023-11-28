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
        where: { id?: number|string; name?: string; email?: string };
      }): Promise<User> {
        return this.userModel.findOne({ ...filter });
      }
    
      findAll(): Promise<User[]> {
        return this.userModel.findAll();
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
        user.admin = createUserDto.admin;

        return user.save();
        

    }

    async addBalance(id:number,  createUserDto: CreateUserDto):Promise<string>{
        const user = await this.findOne({where:{id}});
        if(!user){
            return "Такой пользователь не найден";
        }
        if(createUserDto.balance<=0){
            return "Ошибка! Пополнить баланс можно только на положительную сумму!";
        }
        const balance:number =  user.balance + createUserDto.balance;
        await this.userModel.update({balance}, {where: {id}});
      
        return `Баланс пополнен на ${createUserDto.balance} рублей. Всего на счету ${balance} рублей`;
    }


    async gazeUser(id:number):Promise<CreateUserDto|string>{
        const user = await this.findOne({where:{id}});
        if(!user){
            return "Такой пользователь не найден";
        }
        return user;
    }
}
