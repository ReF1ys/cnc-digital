import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  private orders: any[] = [];  // Массив для хранения заказов (в реальном проекте будет работать с БД)
    createOrder: any;

  // Получить список всех заказов
  getAllOrders() {
    return this.orders;
  }

  // Получить информацию о конкретном заказе
  getOrderById(id: string) {
    return this.orders.find(order => order.id === id);
  }

  // Обновить данные о заказе
  updateOrder(id: string, updateOrderDto: UpdateOrderDto) {
    const orderIndex = this.orders.findIndex(order => order.id === id);
    if (orderIndex === -1) {
      return { message: 'Заказ не найден' };
    }
    this.orders[orderIndex] = { ...this.orders[orderIndex], ...updateOrderDto };
    return this.orders[orderIndex];
  }

  // Удалить заказ
  deleteOrder(id: string) {
    const orderIndex = this.orders.findIndex(order => order.id === id);
    if (orderIndex === -1) {
      return { message: 'Заказ не найден' };
    }
    const deletedOrder = this.orders.splice(orderIndex, 1);
    return deletedOrder;
  }
}
