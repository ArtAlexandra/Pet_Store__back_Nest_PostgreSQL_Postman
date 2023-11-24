import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof User);
    findOne(filter: {
        where: {
            id?: string;
            name?: string;
            email?: string;
        };
    }): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User | {
        warningMessage: string;
    }>;
}
