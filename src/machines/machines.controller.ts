import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Controller('machines')
export class MachinesController {
  constructor(private readonly machinesService: MachinesService) {}

  @Get()
  findAll() {
    return this.machinesService.findAll();
  }

  @Get(':id/status')
  getStatus(@Param('id') id: string) {
    return this.machinesService.getStatus(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machinesService.findOne(id);
  }

  @Post()
  create(@Body() createMachineDto: CreateMachineDto) {
    return this.machinesService.create(createMachineDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machinesService.update(id, updateMachineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machinesService.remove(id);
  }

  //Простаивают (станки)
  @Get('idle')
  getIdleMachines() {
    return this.machinesService.getIdleMachines();
  }

  @Get('idle/count')
  getIdleMachinesCount() {
    return this.machinesService.getIdleMachinesCount();
  }

  @Post('idle')
  addIdleMachine(@Body() createMachineDto: CreateMachineDto) {
    return this.machinesService.addIdleMachine(createMachineDto);
  }

  @Patch('idle/:id')
  updateIdleMachine(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machinesService.updateIdleMachine(id, updateMachineDto);
  }

  @Delete('idle/:id')
  removeIdleMachine(@Param('id') id: string) {
    return this.machinesService.removeIdleMachine(id);
  }

  //Аварийные станки
  @Get('errors')
  getErrorMachines() {
    return this.machinesService.getErrorMachines();
  }

  @Post('errors')
  addErrorMachine(@Body() CreateMachineDto: CreateMachineDto) {
    return this.machinesService.addErrorMachine(CreateMachineDto)
  }

  @Patch('errors/:id')
updateErrorMachine(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machinesService.updateErrorMachine(id, updateMachineDto);
}

  @Delete('errors/:id')
  removeErrorMachine(@Param('id') id: string) {
    return this.machinesService.removeErrorMachine(id);
  }
}
