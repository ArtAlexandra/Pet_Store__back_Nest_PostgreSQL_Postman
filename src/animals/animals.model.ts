
import { Table,Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Goods } from "src/goods/goods.model";


@Table
export class Animal extends Model{
   // @ForeignKey(()=>Goods)
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id_a:number;

 
    @Column({type: DataType.STRING, allowNull: false})
    name:string;

}