
import {
  IsEmail,
  IsOptional,
  IsEnum,
  IsString,
  Length,
  IsBoolean
} from 'class-validator';
import { Role } from '@prisma/client';
export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
    @Length(2, 100)
  name?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  password?: string;
}
