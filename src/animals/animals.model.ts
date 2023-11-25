
import { Table,Model, Column, DataType } from "sequelize-typescript";


@Table
export class Animal extends Model{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id_a:number;

 
    @Column({type: DataType.STRING, allowNull: false})
    name:string;

}