
import { CreateGoodsDto } from './dto/create-goods.dto';
import { GoodsService } from './goods.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Controller, Header, HttpCode, HttpStatus, Body, Post, Get, Param, UseInterceptors, Request, UploadedFile, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { CreateGoodsRequest, CreateGoodsWithImageRequest, GetAllGoodsResponse, SortGoodsPriceRequest } from './types';
import { diskStorage } from 'multer';
import path = require('path');
import { v4 as uuidv4 } from 'uuid';
import { Goods } from './goods.model';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export const storage = {
    storage: diskStorage({
        destination: './uploads/profileimages',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })

}

@Controller('goods')
export class GoodsController {

    constructor(private readonly goodsService: GoodsService){}

    @ApiBody({type:CreateGoodsRequest})
    @ApiOkResponse({type: GetAllGoodsResponse})
    @Post('/create-goods')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    createGoods(@Body() createGoodsDto :CreateGoodsDto){
        
        return this.goodsService.create(createGoodsDto);
    }


    @ApiBody({type:CreateGoodsWithImageRequest})
    @ApiOkResponse({type: GetAllGoodsResponse})
    @Post('/create-goodsi')
    @UseInterceptors(FileInterceptor('file', storage))
    createGoodsImage(@Body() createGoodsDto :CreateGoodsDto,@UploadedFile() file){
        console.log(file)
        return this.goodsService.createImage(createGoodsDto, file.originalname);
    }

    @ApiBody({type: SortGoodsPriceRequest})
    @ApiOkResponse({type: [GetAllGoodsResponse]})
    @Post("/sort-price/:p1/:p2")
    sortPrice(@Param('p1') p1:number, @Param('p2') p2:number){   
        return this.goodsService.sortPrice(p1, p2);
    }

    @Get('/sort-animal/:animal')
    sortAnimal(@Param('animal') animal:number){
        return this.goodsService.sortAnimal(animal);
    }

    @Get('/sort-kind/:kind')
    sortKind(@Param('kind') kind:number){
        return this.goodsService.sortKind(kind);
    }

    @Delete('/delete/:id')
    removeOne(@Param('id') id:number){
        return this.goodsService.remove(id);
    }
   
    @ApiOkResponse({type: [GetAllGoodsResponse]})
    @Get(`/getall-goods`)
    getAllGoods() {
      return this.goodsService.findAll()
    }

   
    @Post('/upload-goods')
    @UseInterceptors(FileInterceptor('file', storage))
    addImage( @UploadedFile() file, @Request() req): Promise<Goods|string>{
        const goods: Goods = req.body;
        goods.image = req.file.originalname;
        console.log(req.file)
        return this.goodsService.addImage(goods.id_g, goods);
     
    }

    @Post('/add-quantity')
    addQuantity(@Body() createGoodsDto :CreateGoodsDto){
        return this.goodsService.addQuantity(createGoodsDto);
    }
}
