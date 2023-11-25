import { Module } from '@nestjs/common';
import { KindsController } from './kinds.controller';
import { KindsService } from './kinds.service';
import { Kind } from './kinds.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Kind])],
  controllers: [KindsController],
  providers: [KindsService],
  exports: [KindsService]
})
export class KindsModule {}
