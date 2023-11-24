import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';

import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';


@Module({
  
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`
    }),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST, //'localhost'
        port:Number(process.env.POSTGRES_PORT),//  5432
        username: process.env.POSTGRES_USER,// 'postgres'
        password: process.env.POSTGRES_PASSWORD,// 'root'
        database: process.env.POSTGRES_DB,// 'Test2'
        models: [User],
       autoLoadModels: true,
      
     //  synchronize:true,
      
      
      }),
    
    UsersModule,
    
    AuthModule,
  ],

})
export class AppModule {}
