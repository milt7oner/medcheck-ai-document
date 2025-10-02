import {
  IsEmail,
  IsOptional,
  IsEnum,
  IsString,
  Length,
} from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(2, 100)
  name?: string;

  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsString()
  password?: string;
}
