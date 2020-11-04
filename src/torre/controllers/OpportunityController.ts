import { SerializerInterceptor } from '@core/interceptors';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchOpportunitiesFiltersDto } from '../dtos/SearchOpportunitiesFiltersDto';
import { OpportunityDto } from '../dtos/OpportunityDto';
import { SearchOpportunitiesUseCase } from '../use-cases/SearchOpportunitiesUseCase';
import { OpportunityDetailDto } from '../dtos/OpportunityDetailDto';
import { FindOpportunityByIdUseCase } from '../use-cases/FindOpportunityByIdUseCase';

@ApiTags('Opportunity')
@Controller('opportunities')
export class OpportunityController {

  constructor(
    private readonly searchOpportunitiesUseCase: SearchOpportunitiesUseCase,
    private readonly findOpportunityByIdUseCase: FindOpportunityByIdUseCase
  ) { }

  @Get('/search')
  @ApiResponse({ status: 200, type: OpportunityDto, isArray: true })
  @UseInterceptors(new SerializerInterceptor(OpportunityDto))
  search(@Query() query: SearchOpportunitiesFiltersDto): Promise<OpportunityDto[]> {
    return this.searchOpportunitiesUseCase.execute(query);
  }

  @Get('/:id')
  @ApiResponse({ status: 200, type: OpportunityDetailDto })
  @UseInterceptors(new SerializerInterceptor(OpportunityDetailDto))
  findOneByUserName(@Param('id') id: string): Promise<OpportunityDetailDto> {
    return this.findOpportunityByIdUseCase.execute(id);
  }

}
