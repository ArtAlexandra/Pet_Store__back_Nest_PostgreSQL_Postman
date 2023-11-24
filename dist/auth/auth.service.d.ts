import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string;
        balance: number;
    }>;
}
