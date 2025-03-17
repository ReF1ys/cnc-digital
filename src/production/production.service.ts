import { Injectable } from '@nestjs/common';
import { CreateOutputDto } from './dto/create-output.dto';
import { CreateRejectDto } from './dto/create-reject.dto';

@Injectable()
export class ProductionService {
  private outputData: any[] = [];  // Массив для хранения данных о выпуске
  private rejectData: any[] = [];  // Массив для хранения данных о браке

  // Получить статистику по выпущенным деталям
  getOutputStatistics() {
    return this.outputData;
  }

  // Добавить данные о выпуске деталей
  addOutputData(createOutputDto: CreateOutputDto) {
    const newOutput = { id: this.outputData.length + 1, ...createOutputDto };
    this.outputData.push(newOutput);
    return newOutput;
  }

  // Получить процент брака
  getRejectsPercentage() {
    if (this.outputData.length === 0) {
      return { message: 'Нет данных о выпущенных деталях.' };
    }
    const total = this.outputData.length;
    const rejects = this.rejectData.length;
    const rejectPercentage = (rejects / total) * 100;
    return { rejectPercentage };
  }

  // Добавить информацию о браке
  addRejectData(createRejectDto: CreateRejectDto) {
    const newReject = { id: this.rejectData.length + 1, ...createRejectDto };
    this.rejectData.push(newReject);
    return newReject;
  }
}
