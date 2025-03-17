import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  readonly customerName: string;  // Имя заказчика

  @IsNumber()
  readonly quantity: number;  // Количество заказанных товаров

  @IsString()
  readonly status: string;  // Статус заказа (например, 'в обработке', 'отправлен', 'доставлен')

  @IsDate()
  readonly orderDate: Date;  // Дата заказа

  @IsOptional()
  @IsString()
  readonly deliveryDate?: string;  // Дата доставки (опционально)
}
