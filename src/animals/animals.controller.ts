
import { Controller, Header, HttpCode, HttpStatus, Body, Post, UseGuards, Request,Get } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimaldDto } from './dto/create-animal.dto';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { CreateAnimalRequest, CreateAnimalResponse } from './types';


@Controller('animals')
export class AnimalsController {

    constructor(private readonly animalService: AnimalsService){}

    @ApiBody({type:CreateAnimalRequest})
    @ApiOkResponse({type: CreateAnimalResponse})
    @Post('/create-animal')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    createAnimal(@Body() createAnimaldDto :CreateAnimaldDto){
        return this.animalService.create(createAnimaldDto);
    }



    @ApiOkResponse({type: [CreateAnimalResponse]})  
    @Get('/getall-animal')
    getAllAnimals() {
      return this.animalService.findAll()
    }
}
