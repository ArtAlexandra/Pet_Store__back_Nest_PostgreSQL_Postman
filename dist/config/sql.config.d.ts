import { Dialect } from "sequelize";
export declare const sqlConfig: (() => {
    dialect: Dialect;
    logging: boolean;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    synchrenize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    dialect: Dialect;
    logging: boolean;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    synchrenize: boolean;
}>;
