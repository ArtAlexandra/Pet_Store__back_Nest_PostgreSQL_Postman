import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<import("./users.model").User | {
        warningMessage: string;
    }>;
    login(req: any): {
        user: any;
        msg: string;
    };
}
