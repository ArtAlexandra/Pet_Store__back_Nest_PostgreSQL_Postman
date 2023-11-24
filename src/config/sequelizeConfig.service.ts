import { ConfigService } from "@nestjs/config";
import { SequelizeModuleOptions, SequelizeOptionsFactory } from "@nestjs/sequelize";
import { User } from "src/users/users.model";




export class SequelizeConfigService implements SequelizeOptionsFactory{
    constructor(private readonly configService:ConfigService){}

    createSequelizeOptions():SequelizeModuleOptions{
        const{
            sql:{dialect, logging, host, port, username, password, database}
        }=this.configService.get('MyPetStore');

        return{
            dialect, logging, host, port, username, password, database, models: [User],
            autoLoadModels:true, synchronize:true, 
            define: {
                charset: 'utf8',
                collate: 'utf8_general_cli'
            }
        }
    }
}