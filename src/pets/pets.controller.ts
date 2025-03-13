import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return await this.petsService.create(createPetDto);
  }

  @Get()
  async findAll() {
    return await this.petsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.petsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return await this.petsService.update(+id, updatePetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.petsService.remove(+id);
  }
}
