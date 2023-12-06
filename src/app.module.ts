import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';

import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { GoodsModule } from './goods/goods.module';
import { KindsModule } from './kinds/kinds.module';
import { AnimalsModule } from './animals/animals.module';
import { BasketsModule } from './baskets/baskets.module';
import { ShopsModule } from './shops/shops.module';
import { ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  
  imports: [
    /*
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './', 'front'),
    }),
    ConfigModule.forRoot({isGlobal: true}),*/
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
    
    GoodsModule,
    
    KindsModule,
    
    AnimalsModule,
    
    BasketsModule,
    
    ShopsModule,
    
  ],

})
export class AppModule {}
