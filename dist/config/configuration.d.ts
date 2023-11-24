export declare const databaseConfig: (() => {
    sql: {
        dialect: import("sequelize").Dialect;
        logging: boolean;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
        autoLoadEntities: boolean;
        synchrenize: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    sql: {
        dialect: import("sequelize").Dialect;
        logging: boolean;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
        autoLoadEntities: boolean;
        synchrenize: boolean;
    };
}>;
