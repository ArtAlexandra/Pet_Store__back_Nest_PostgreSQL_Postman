
import { Table,Model, Column, DataType } from "sequelize-typescript";


@Table
export class User extends Model{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;

    @Column({type: DataType.STRING, allowNull: false, unique:true})
    email:string;

    @Column({type: DataType.STRING, allowNull: false})
    password:string;

    @Column({type: DataType.STRING, allowNull: false})
    name:string;

    @Column({type: DataType.STRING, allowNull: false})
    phone:string;

    @Column({type: DataType.INTEGER, defaultValue: 0})
    balance:number;


}