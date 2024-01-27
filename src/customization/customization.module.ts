import { Module } from '@nestjs/common';
import { CustomizationService } from './customization.service';
import { CustomizationController } from './customization.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CustomizationController],
  providers: [CustomizationService, PrismaService],
})
export class CustomizationModule {}
