import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString } from 'class-validator';

class Link {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  address: string;
}

class Strength {
  @IsNumber()
  @ApiProperty()
  code: number;

  @IsString()
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  weight: number;

  @IsNumber()
  @ApiProperty()
  recommendations: number;
}

class Experience {
  @IsString()
  @ApiProperty()
  category: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsArray()
  @ApiProperty({ isArray: true, type: 'string' })
  organizations: string[];

  @IsString()
  @ApiProperty()
  fromMonth: string;

  @IsString()
  @ApiProperty()
  fromYear: string;

  @IsString()
  @ApiProperty()
  additionalInfo: string;
}

export class PersonBioDto {
  @IsString()
  @ApiProperty()
  professionalHeadline: string;

  @IsString()
  @ApiProperty()
  picture: string;

  @IsString()
  @ApiProperty()
  pictureThumbnail: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  publicId: string;

  @Type(() => Link)
  @IsArray()
  @ApiProperty({ isArray: true, type: Link })
  links: Link[];

  @IsString()
  @ApiProperty()
  locationName: string;

  @Type(() => Strength)
  @IsArray()
  @ApiProperty({ isArray: true, type: Strength })
  strengths: Strength[];

  @IsArray()
  @ApiProperty({ isArray: true, type: 'string' })
  interests: string[];

  @Type(() => Experience)
  @IsArray()
  @ApiProperty({ isArray: true, type: Experience })
  experiences: Experience[];

  @IsArray()
  @ApiProperty({ isArray: true, type: 'string' })
  languages: string[];
}
