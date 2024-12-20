import { IsString, IsOptional, IsBoolean, IsArray } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  ownerId?: string;

  @IsOptional()
  @IsArray()
  assignedUsers?: string[];

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
