
import { Table,Model, Column, DataType } from "sequelize-typescript";


@Table
export class Goods extends Model{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id_g:number;

 
    @Column({type: DataType.STRING, allowNull: false})
    title:string;

    @Column({type: DataType.INTEGER, allowNull: false})
    price:number;

    @Column({type: DataType.INTEGER, allowNull: false})
    animal:number;

    @Column({type: DataType.INTEGER, allowNull: false})
    quantity:number;

    @Column({type: DataType.STRING, allowNull: false})
    description:string;

    @Column({type: DataType.STRING, allowNull: false})
    mark:string;

    @Column({type: DataType.INTEGER, allowNull: false})
    kind:number;


    @Column({type: DataType.BLOB})
    image:Blob;
}