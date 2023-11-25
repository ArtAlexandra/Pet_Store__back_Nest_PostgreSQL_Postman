
import { Controller, Header, HttpCode, HttpStatus, Body, Post,Get } from '@nestjs/common';
import { CreateKindDto } from './dto/create-kind.dto';
import { KindsService } from '../kinds/kinds.service';
import { AllKindsResonse, CreateKindRequest, CreateKindResponse } from './types';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';


@Controller('kinds')
export class KindsController {

    constructor(private readonly kindService: KindsService){}

    @ApiBody({type:CreateKindRequest})
    @ApiOkResponse({type: CreateKindResponse})
    @Post('/create-kind')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    createKind(@Body() createKindDto :CreateKindDto){
        return this.kindService.create(createKindDto);
    }



    @ApiOkResponse({type: [AllKindsResonse]})
    @Get('/getall-kind')
    getAllKinds() {
      return this.kindService.findAll()
    }
}
