import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class PeopleDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  locationName: string;

  @IsArray()
  @ApiProperty({ isArray: true, type: 'string' })
  openTo: string[];

  @IsString()
  @ApiProperty()
  picture: string;

  @IsString()
  @ApiProperty()
  professionalHeadline: string;

  @IsArray()
  @ApiProperty({ isArray: true, type: 'string' })
  skills: string[];
}
