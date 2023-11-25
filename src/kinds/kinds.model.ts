
import { Table,Model, Column, DataType } from "sequelize-typescript";


@Table
export class Kind extends Model{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id_k:number;

 
    @Column({type: DataType.STRING, allowNull: false})
    name:string;

}