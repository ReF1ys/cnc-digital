import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Injectable()
export class MachinesService {
  private machines: any[] = [];
  private idleMachines: any[] = [];
  private errorMachines: any[] = [];

  findAll() {
    return this.machines;
  }

  getStatus(id: string) {
    return this.machines.find(machine => machine.id === id)?.status;
  }

  findOne(id: string) {
    return this.machines.find(machine => machine.id === id);
  }

  create(createMachineDto: CreateMachineDto) {
    const newMachine = { id: Date.now().toString(), ...createMachineDto };
    this.machines.push(newMachine);
    return newMachine;
  }

  update(id: string, updateMachineDto: UpdateMachineDto) {
    const index = this.machines.findIndex(machine => machine.id === id);
    if (index === -1) return null;
    this.machines[index] = { ...this.machines[index], ...updateMachineDto };
    return this.machines[index];
  }

  remove(id: string) {
    this.machines = this.machines.filter(machine => machine.id !== id);
    return { message: 'Machine removed' };
  }

  // Простои станков
  getIdleMachines() {
    return this.idleMachines;
  }

  getIdleMachinesCount() {
    return { count: this.idleMachines.length };
  }

  addIdleMachine(createMachineDto: CreateMachineDto) {
    const newIdle = { id: Date.now().toString(), ...createMachineDto };
    this.idleMachines.push(newIdle);
    return newIdle;
  }

  updateIdleMachine(id: string, updateMachineDto: UpdateMachineDto) {
    const index = this.idleMachines.findIndex(machine => machine.id === id);
    if (index === -1) return null;
    this.idleMachines[index] = { ...this.idleMachines[index], ...updateMachineDto };
    return this.idleMachines[index];
  }

  removeIdleMachine(id: string) {
    this.idleMachines = this.idleMachines.filter(machine => machine.id !== id);
    return { message: 'Idle machine removed' };
  }

  // Аварийные станки
  getErrorMachines() {
    return this.errorMachines;
  }

  addErrorMachine(createMachineDto: CreateMachineDto) {
    const newError = { id: Date.now().toString(), ...createMachineDto };
    this.errorMachines.push(newError);
    return newError;
  }

  updateErrorMachine(id: string, updateMachineDto: UpdateMachineDto) {
    const index = this.errorMachines.findIndex(machine => machine.id === id);
    if (index === -1) return null;
    this.errorMachines[index] = { ...this.errorMachines[index], ...updateMachineDto };
    return this.errorMachines[index];
}

  removeErrorMachine(id: string) {
    this.errorMachines = this.errorMachines.filter(machine => machine.id !== id);
    return { message: 'Error machine removed' };
  }
}
