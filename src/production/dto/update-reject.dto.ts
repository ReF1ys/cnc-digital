import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRejectDto {
  @IsNumber()
  @IsOptional()
  readonly partId?: number;  // ID детали (если нужно обновить)

  @IsNumber()
  @IsOptional()
  readonly quantity?: number;  // Количество бракованных деталей (если нужно обновить)

  @IsString()
  @IsOptional()
  readonly reason?: string;  // Причина брака (если нужно обновить)
}
