//добавлениe данных о выпущенных деталях
import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateOutputDto {
  @IsNumber()
  readonly partId: number;  // ID детали

  @IsNumber()
  readonly quantity: number;  // Количество выпущенных деталей

  @IsString()
  @IsOptional()
  readonly date?: string;  // Дата выпуска
}
