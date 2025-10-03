import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/CreateUserDTo';
import { UpdateUserDto } from './dto/UpdateUserDto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    return this.prisma.user.create({ data: dto });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  async update(id: string, dto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}