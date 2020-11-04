import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional } from 'class-validator';

class Meta {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ default: 50 })
  limit?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ default: 1 })
  page?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ default: 'ASC' })
  order?: 'ASC' | 'DESC';

  @IsString()
  @IsOptional()
  @ApiProperty({ default: null })
  orderBy?: string;
}

export class FindAllPaginationResponseDto {
  meta: Meta;
}
