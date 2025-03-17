import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsString()
  @IsOptional()
  readonly status?: string;  // Новый статус заказа

  @IsNumber()
  @IsOptional()
  readonly quantity?: number;  // Обновлённое количество товаров

  @IsString()
  @IsOptional()
  readonly deliveryDate?: string;  // Новая дата доставки (если обновляется)
}
