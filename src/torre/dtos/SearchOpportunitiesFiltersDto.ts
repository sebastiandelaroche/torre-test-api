import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDefined, IsOptional, IsString } from 'class-validator';

export class SearchOpportunitiesFiltersDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ default: 0 })
  offset?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ default: 50 })
  size?: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ default: false })
  aggregate?: boolean;

  @IsDefined()
  @IsString()
  @ApiProperty()
  role: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ default: '1-plus-year' })
  experience?: string;
}
