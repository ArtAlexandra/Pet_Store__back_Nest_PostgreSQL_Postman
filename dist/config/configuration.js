"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const config_1 = require("@nestjs/config");
const sql_config_1 = require("./sql.config");
exports.databaseConfig = (0, config_1.registerAs)('MyPetStore', () => ({
    sql: {
        ...(0, sql_config_1.sqlConfig)(),
    },
}));
//# sourceMappingURL=configuration.js.map