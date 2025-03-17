//добавлениe данных о браке
import { IsNumber, IsString } from 'class-validator';

export class CreateRejectDto {
  @IsNumber()
  readonly partId: number;  // ID детали

  @IsNumber()
  readonly quantity: number;  // Количество бракованных деталей

  @IsString()
  readonly reason: string;  // Причина брака
}
