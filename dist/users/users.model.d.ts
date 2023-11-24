import { Model } from "sequelize-typescript";
export declare class User extends Model {
    id: number;
    email: string;
    password: string;
    name: string;
    phone: string;
    balance: number;
}
