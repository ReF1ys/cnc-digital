import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';  // Используем DTO для создания заказа
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // Получить список всех заказов
  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  // Получить информацию о конкретном заказе
  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(id);
  }

  // Создать заказ
  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {  // Используем CreateOrderDto для тела запроса
    return this.ordersService.createOrder(createOrderDto);
  }

  // Обновить данные о заказе
  @Patch(':id')
  updateOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.updateOrder(id, updateOrderDto);
  }

  // Удалить заказ
  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.ordersService.deleteOrder(id);
  }
}
