import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { UtilizationService } from './utilization.service';
import { CreateUtilizationDto } from './dto/create-utilization.dto';
import { UpdateUtilizationDto } from './dto/update-utilization.dto';

@Controller('machines/utilization')
export class UtilizationController {
  constructor(private readonly utilizationService: UtilizationService) {}

  // Получить текущий процент использования станков
  @Get('percentage')
  getUtilizationPercentage() {
    return this.utilizationService.getUtilizationPercentage();
  }

  // Получить историю изменения процента использования по дням/месяцам
  @Get('history')
  getUtilizationHistory() {
    return this.utilizationService.getUtilizationHistory();
  }

  // Добавить данные о загрузке станков
  @Post()
  addUtilization(@Body() createUtilizationDto: CreateUtilizationDto) {
    return this.utilizationService.addUtilization(createUtilizationDto);
  }

  // Обновить данные о загрузке конкретного станка
  @Patch(':id')
  updateUtilization(@Param('id') id: string, @Body() updateUtilizationDto: UpdateUtilizationDto) {
    return this.utilizationService.updateUtilization(id, updateUtilizationDto);
  }

  // Удалить запись о загрузке станка
  @Delete(':id')
  removeUtilization(@Param('id') id: string) {
    return this.utilizationService.removeUtilization(id);
  }
}
