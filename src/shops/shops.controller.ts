
import { Controller, Header, HttpCode, HttpStatus, Body, Post,Get } from '@nestjs/common';

import { KindsService } from '../kinds/kinds.service';

import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { CreateShopDto } from './dto/create-shop.dto';
import { ShopsService } from './shops.service';


@Controller('shops')
export class ShopsController {

    constructor(private readonly shopService: ShopsService){}

  
    @Post('/create-shop')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    createShop(@Body() createShopDto :CreateShopDto){
        return this.shopService.create(createShopDto);
    }



    @Get('/getall-shop')
    getAllShops() {
      return this.shopService.findAll()
    }
}
