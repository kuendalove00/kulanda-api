import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomizationService } from './customization.service';
import { CreateCustomizationDto } from './dto/create-customization.dto';
import { UpdateCustomizationDto } from './dto/update-customization.dto';

@Controller('customization')
export class CustomizationController {
  constructor(private readonly customizationService: CustomizationService) {}

  @Post()
  create(@Body() data: CreateCustomizationDto) {
    return this.customizationService.create(data);
  }

  @Get()
  findAll() {
    return this.customizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customizationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCustomizationDto) {
    return this.customizationService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customizationService.remove(+id);
  }
}
