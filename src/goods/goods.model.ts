
import { Table,Model, Column, DataType, HasMany,BelongsTo, ForeignKey } from "sequelize-typescript";
import { Animal } from "src/animals/animals.model";
import { Kind } from "src/kinds/kinds.model";


@Table
export class Goods extends Model{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id_g:number;

 
    @Column({type: DataType.STRING, allowNull: false})
    title:string;

    @Column({type: DataType.INTEGER, allowNull: false})
    price:number;

    @ForeignKey(()=>Animal)
    @Column({type: DataType.INTEGER, allowNull: false})
    animalId:number;

    @BelongsTo(()=>Animal)
    animal: Animal;

    @Column({type: DataType.INTEGER, allowNull: false})
    quantity:number;

    @Column({type: DataType.STRING, allowNull: false})
    description:string;

    @Column({type: DataType.STRING, allowNull: false})
    mark:string;

    @ForeignKey(()=>Kind)
    @Column({type: DataType.INTEGER, allowNull: false})
    kindId:number;

    @BelongsTo(()=>Kind)
    kind: Kind;


    @Column({type: DataType.BLOB})
    image:Blob;
};
