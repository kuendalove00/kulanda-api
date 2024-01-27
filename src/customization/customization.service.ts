import { Injectable } from '@nestjs/common';
import { CreateCustomizationDto } from './dto/create-customization.dto';
import { UpdateCustomizationDto } from './dto/update-customization.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomizationService {
  constructor(private prisma: PrismaService){}

  async create(data : CreateCustomizationDto) {
    const customization = await this.prisma.customization.create({ data });
    return customization;
  }

  async findAll() {
    const customization = await this.prisma.customization.findMany();
    return customization;
  }

  async findOne(id: number) {
    const customization = await this.prisma.customization.findUnique({
      where: {
        id: id
      }
    });

    return customization;
  }

  async update(id: number, data: UpdateCustomizationDto) {
    const customization = await this.prisma.customization.update({
      where: {
        id:id
      },
      data
    });

    return customization;
  }

  async remove(id: number) {
    const customization = await this.prisma.customization.delete({
      where: {
        id: id
      }
    });

    return customization;
  }
}
