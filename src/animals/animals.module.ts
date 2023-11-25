import { Module } from '@nestjs/common';

import { AnimalsService } from './animals.service';
import { Animal } from './animals.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnimalsController } from './animals.controller';


@Module({
  imports: [SequelizeModule.forFeature([Animal])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
  exports: [AnimalsService]
})
export class AnimalsModule {}

