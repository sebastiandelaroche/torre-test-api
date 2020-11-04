import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class FindAllPaginationParamsDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ default: 50 })
  limit?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ default: 1 })
  page?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ default: 'ASC' })
  order?: 'ASC' | 'DESC';

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ default: null })
  orderBy?: string;
}
