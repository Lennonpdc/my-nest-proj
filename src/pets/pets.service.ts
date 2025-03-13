import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PetsService {
  constructor(
    private prisma: PrismaService,
  ) { }

  async create(createPetDto: CreatePetDto) {
    return await this.prisma.pets.create({
      data: createPetDto
    });
  }

  async findAll() {
    return await this.prisma.pets.findMany();
  }

  async findOne(id: number) {
    const pet = await this.prisma.pets.findFirst({
      where: { id }
    });
    if (!pet) {
      throw new NotFoundException('pet not found!')
    }
    return pet;
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    const pet = await this.findOne(id);
    return await this.prisma.pets.update({
      where: { id: pet.id },
      data: updatePetDto
    });
  }

  async remove(id: number) {
    const pet = await this.findOne(id);
    //with simple return
    // return await this.prisma.pets.delete({
    //   where: { id: pet.id }
    // })

    const result = await this.prisma.pets.delete({
      where: { id: pet.id }
    })
    return { message: `${result.name} has been deleted!` }
  }
}
