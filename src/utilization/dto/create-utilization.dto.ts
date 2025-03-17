import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateUtilizationDto {
  @IsNumber()
  readonly machineId: number;  // ID станка

  @IsNumber()
  readonly utilizationPercentage: number;  // Процент использования

  @IsString()
  @IsOptional()
  readonly date?: string;  // Дата загрузки (если необходимо)

  // Можно добавить другие поля по необходимости
}
