import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductionService } from './production.service';
import { CreateOutputDto } from './dto/create-output.dto';
import { CreateRejectDto } from './dto/create-reject.dto';

@Controller('production')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  // Получить статистику по выпущенным деталям
  @Get('output')
  getOutputStatistics() {
    return this.productionService.getOutputStatistics();
  }

  // Добавить данные о выпуске деталей
  @Post('output')
  addOutputData(@Body() createOutputDto: CreateOutputDto) {
    return this.productionService.addOutputData(createOutputDto);
  }

  // Получить процент брака
  @Get('rejects')
  getRejectsPercentage() {
    return this.productionService.getRejectsPercentage();
  }

  // Добавить информацию о браке
  @Post('rejects')
  addRejectData(@Body() createRejectDto: CreateRejectDto) {
    return this.productionService.addRejectData(createRejectDto);
  }
}
