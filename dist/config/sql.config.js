"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConfig = void 0;
const config_1 = require("@nestjs/config");
exports.sqlConfig = (0, config_1.registerAs)('MyPetStore', () => ({
    dialect: process.env.POSTGRES_DIALECT || 'postgres',
    logging: process.env.POSTGRES_LOGGING === 'true' ? true : false,
    host: process.env.POSTGRES_HOST,
    port: process.env.PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadEntities: true,
    synchrenize: true
}));
//# sourceMappingURL=sql.config.js.map