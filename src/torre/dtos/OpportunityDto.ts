import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';

class Compensation {
  @IsString()
  @ApiProperty()
  currency: string;

  @IsNumber()
  @ApiProperty()
  minAmount: number;

  @IsNumber()
  @ApiProperty()
  maxAmount: number;

  @IsString()
  @ApiProperty()
  periodicity: string;
}

export class OpportunityDto {
  @IsString()
  @ApiProperty()
  objective: string;

  @IsString()
  @ApiProperty()
  type: string;

  @IsArray()
  @ApiProperty({ isArray: true, type: 'string' })
  organizations: string[];

  @IsArray()
  @ApiProperty({ isArray: true, type: 'string' })
  locations: string[];

  @IsBoolean()
  @ApiProperty()
  remote: boolean;

  @IsBoolean()
  @ApiProperty()
  external: boolean;

  @IsString()
  @ApiProperty()
  status: string;

  @Type(() => Compensation)
  @IsArray()
  @ApiProperty({ isArray: true, type: Compensation })
  compensation: Compensation;

  @IsArray()
  @ApiProperty({ isArray: true, type: 'string' })
  skills: string[];
}
