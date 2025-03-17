import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUtilizationDto {
  @IsNumber()
  @IsOptional()
  readonly utilizationPercentage?: number;  // Процент использования (для обновления)

  @IsString()
  @IsOptional()
  readonly date?: string;  // Дата, если необходимо для обновления
}
