import { IsString, IsOptional } from 'class-validator';

export class UpdateMachineDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  status?: string;
}