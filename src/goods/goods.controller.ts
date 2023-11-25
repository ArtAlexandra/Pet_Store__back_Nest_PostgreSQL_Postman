
import { CreateGoodsDto } from './dto/create-goods.dto';
import { GoodsService } from './goods.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Controller, Header, HttpCode, HttpStatus, Body, Post, Get, Param, UseInterceptors, UploadedFiles, UploadedFile, Delete } from '@nestjs/common';


@Controller('goods')
export class GoodsController {

    constructor(private readonly goodsService: GoodsService){}


    @Post('/create-goods')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    createGoods(@Body() createGoodsDto :CreateGoodsDto){
        
        return this.goodsService.create(createGoodsDto);
    }

    @Post('/create-goodsi')
    @UseInterceptors(FileInterceptor('image'))
    createGoodsImage(@Body() createGoodsDto :CreateGoodsDto, @UploadedFile() image){
        
        return this.goodsService.createImage(createGoodsDto, image);
    }

    
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
   
    @Get(`/getall-goods`)
    getAllGoods() {
      return this.goodsService.findAll()
    }

    
    @Post('/upload-goods/:id_g')
   @UseInterceptors(FileInterceptor('file'))
    addImage(@Param('id_g') id_g:string, @UploadedFile() file){
        return this.goodsService.addImage(id_g, file);
    }
}