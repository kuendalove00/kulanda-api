import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OwnerService {

  constructor(private prisma: PrismaService) {}

  async create(data: CreateOwnerDto) {
    const owner = await this.prisma.owners.create({ data });
    return owner;
  }

  async findAll() {
    const owners = await this.prisma.owners.findMany();
    return owners;
  }

  async findOne(id: number) {
    const owner = await this.prisma.owners.findMany({
      where : {
        id: id
      }
    });
    return owner;
  }

  async update(id: number, data: UpdateOwnerDto) {
    const owner = await this.prisma.owners.update({
      where:{
        id: id
      }, data
    });
    return owner;
  }

  async remove(id: number) {
    const owner = await this.prisma.owners.delete({
      where: {
        id: id
      }
    });
    return owner;
  }
}
