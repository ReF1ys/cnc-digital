import { Injectable } from '@nestjs/common';
import { CreateUtilizationDto } from './dto/create-utilization.dto';
import { UpdateUtilizationDto } from './dto/update-utilization.dto';

@Injectable()
export class UtilizationService {
  private utilizationData: any[] = []; // Это временная структура для хранения данных

  // Получить текущий процент использования станков
  getUtilizationPercentage() {
    if (this.utilizationData.length === 0) {
      return { message: 'Нет данных о загрузке станков.' };
    }
    const totalUtilization = this.utilizationData.reduce((sum, data) => sum + data.utilizationPercentage, 0);
    const averageUtilization = totalUtilization / this.utilizationData.length;
    return { percentage: averageUtilization };
  }

  // Получить историю изменения процента использования по дням/месяцам
  getUtilizationHistory() {
    return this.utilizationData; // Можно адаптировать, чтобы возвращать историю за определенный период
  }

  // Добавить данные о загрузке станков
  addUtilization(createUtilizationDto: CreateUtilizationDto) {
    const newUtilization = {
      id: this.utilizationData.length + 1,
      ...createUtilizationDto,
      date: new Date().toISOString(), // Добавляем текущую дату
    };
    this.utilizationData.push(newUtilization);
    return newUtilization;
  }

  // Обновить данные о загрузке конкретного станка
  updateUtilization(id: string, updateUtilizationDto: UpdateUtilizationDto) {
    const index = this.utilizationData.findIndex((data) => data.id === +id);
    if (index === -1) {
      return { message: 'Запись о загрузке не найдена.' };
    }
    this.utilizationData[index] = { ...this.utilizationData[index], ...updateUtilizationDto };
    return this.utilizationData[index];
  }

  // Удалить запись о загрузке станка
  removeUtilization(id: string) {
    const index = this.utilizationData.findIndex((data) => data.id === +id);
    if (index === -1) {
      return { message: 'Запись о загрузке не найдена.' };
    }
    this.utilizationData.splice(index, 1);
    return { message: 'Запись о загрузке удалена.' };
  }
}
