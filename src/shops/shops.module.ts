import { Module } from '@nestjs/common';
import { ShopsController } from './shops.controller';
import { ShopsService } from './shops.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shop } from './shops.model';

@Module({
  imports: [SequelizeModule.forFeature([Shop])],
  controllers: [ShopsController],
  providers: [ShopsService],
  exports: [ShopsService]
})
export class ShopsModule {}
