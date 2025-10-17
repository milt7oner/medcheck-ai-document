import {
  Injectable,
  UnauthorizedException,
  ConflictException,InternalServerErrorException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/user.service';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(email: string, password: string, role: Role) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      throw new ConflictException('El usuario ya existe');
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const NewUser = await this.userService.create({
        email,
        password: hashedPassword,
        role,
      });
      return NewUser;
    } catch (error) {}
    throw new InternalServerErrorException('Error al crear el usuario');
  }

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
