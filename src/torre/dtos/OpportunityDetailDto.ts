import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString } from 'class-validator';

class Detail {
  @IsString()
  @ApiProperty()
  code: string;

  @IsString()
  @ApiProperty()
  content: string;
}

class Owner {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  professionalHeadline: string;

  @IsString()
  @ApiProperty()
  picture: string;

  @IsString()
  @ApiProperty()
  pictureThumbnail: string;
}

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

export class OpportunityDetailDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  objective: string;

  @IsString()
  @ApiProperty()
  review: string;

  @IsString()
  @ApiProperty()
  status: string;

  @Type(() => Detail)
  @IsArray()
  @ApiProperty({ isArray: true, type: Detail })
  details: Detail[];

  @Type(() => Owner)
  @IsArray()
  @ApiProperty({ type: Owner })
  owner: Owner;

  @IsString()
  @ApiProperty({ isArray: true, type: 'string' })
  languages: string[];

  @IsString()
  @ApiProperty({ isArray: true, type: 'string' })
  strengths: string[];

  @Type(() => Compensation)
  @IsArray()
  @ApiProperty({ type: Compensation })
  compensation: Compensation;
}
