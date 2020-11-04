import { SerializerInterceptor } from '@core/interceptors';
import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchOpportunitiesFiltersDto } from '../dtos/SearchOpportunitiesFiltersDto';
import { OpportunityDto } from '../dtos/OpportunityDto';
import { SearchOpportunitiesUseCase } from '../use-cases/SearchOpportunitiesUseCase';

@ApiTags('Opportunity')
@Controller('opportunities')
export class OpportunityController {

  constructor(
    private readonly searchOpportunitiesUseCase: SearchOpportunitiesUseCase
  ) { }

  @Get('/search')
  @ApiResponse({ status: 200, type: OpportunityDto, isArray: true })
  @UseInterceptors(new SerializerInterceptor(OpportunityDto))
  search(@Query() query: SearchOpportunitiesFiltersDto): Promise<OpportunityDto[]> {
    return this.searchOpportunitiesUseCase.execute(query);
  }

}
