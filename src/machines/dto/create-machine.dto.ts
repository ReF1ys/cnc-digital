// import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

// export class CreateMachineDto {
//   @IsString()
//   @IsNotEmpty()
//   name: string;

//   @IsString()
//   @IsOptional()
//   status?: string;
// }

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateMachineDto {
  @ApiProperty({ description: 'Name of the machine' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Serial number of the machine' })
  @IsString()
  serialNumber: string;  // Убедитесь, что поле serialNumber указано

  @ApiProperty({ description: 'Power consumption in watts' })
  @IsNumber()
  power: number;  // Убедитесь, что поле power указано
}
