
import { Table,Model, Column, DataType } from "sequelize-typescript";


@Table
export class Shop extends Model{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id_s:number;

 
    @Column({type: DataType.STRING, allowNull: false})
    name:string;

    @Column({type: DataType.STRING, allowNull: false})
    address:string;

    @Column({type: DataType.STRING, allowNull: false})
    phone:string;

    @Column({type: DataType.STRING, allowNull: false})
    email:string;

    @Column({type: DataType.STRING, allowNull: false})
    account:string;

    @Column({type: DataType.STRING, allowNull: false})
    descriptions:string;

    @Column({type: DataType.STRING, allowNull: false})
    time_work:string;

}