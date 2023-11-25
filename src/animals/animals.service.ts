import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Animal } from './animals.model';
import { CreateAnimaldDto } from './dto/create-animal.dto';



@Injectable()
export class AnimalsService {

    constructor(
        @InjectModel(Animal)
        private animalModel : typeof Animal,
      ){}
  
    findOne(filter: {
        where: { id?: string; name?: string };
      }): Promise<Animal> {
        return this.animalModel.findOne({...filter});
      }
      
      findAll(): Promise<Animal[]> {
        return this.animalModel.findAll();
      }
      

    async create(
        createAnimalDto: CreateAnimaldDto
    ): Promise<Animal| {warningMessage:string}>{
        const animal = new Animal();
        const existingAnimalByName = await this.findOne({
            where: {name : createAnimalDto.name}
        });
        if(existingAnimalByName){
            return {
                warningMessage : 'Животное с таким именем уже существует'
            };
        }
        animal.name = createAnimalDto.name;
        return animal.save();



    }
}
