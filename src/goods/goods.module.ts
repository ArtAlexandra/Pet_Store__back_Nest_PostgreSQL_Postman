import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Goods } from './goods.model';

@Module({
  imports: [SequelizeModule.forFeature([Goods])],
  controllers: [GoodsController],
  providers: [GoodsService],
  exports: [GoodsService]
})
export class GoodsModule {}
