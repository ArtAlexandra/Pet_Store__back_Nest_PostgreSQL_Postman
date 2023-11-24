"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeConfigService = void 0;
const users_model_1 = require("../users/users.model");
class SequelizeConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createSequelizeOptions() {
        const { sql: { dialect, logging, host, port, username, password, database } } = this.configService.get('MyPetStore');
        return {
            dialect, logging, host, port, username, password, database, models: [users_model_1.User],
            autoLoadModels: true, synchronize: true,
            define: {
                charset: 'utf8',
                collate: 'utf8_general_cli'
            }
        };
    }
}
exports.SequelizeConfigService = SequelizeConfigService;
//# sourceMappingURL=sequelizeConfig.service.js.map