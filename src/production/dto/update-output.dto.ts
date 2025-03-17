import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOutputDto {
  @IsNumber()
  @IsOptional()
  readonly partId?: number;  // ID детали (если нужно обновить)

  @IsNumber()
  @IsOptional()
  readonly quantity?: number;  // Количество выпущенных деталей (если нужно обновить)

  @IsString()
  @IsOptional()
  readonly date?: string;  // Дата выпуска (если нужно обновить)
}
