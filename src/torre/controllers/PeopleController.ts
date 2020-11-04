import { SerializerInterceptor } from '@core/interceptors';
import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchPeopleFiltersDto } from '../dtos/SearchPeopleFiltersDto';
import { PeopleDto } from '../dtos/PeopleDto';
import { SearchPeopleUseCase } from '../use-cases/SearchPeopleUseCase';

@ApiTags('People')
@Controller('people')
export class PeopleController {

  constructor(
    private readonly searchPeopleUseCase: SearchPeopleUseCase
  ) { }

  @Get('/search')
  @ApiResponse({ status: 200, type: PeopleDto, isArray: true })
  @UseInterceptors(new SerializerInterceptor(PeopleDto))
  search(@Query() query: SearchPeopleFiltersDto): Promise<PeopleDto[]> {
    return this.searchPeopleUseCase.execute(query);
  }

}
