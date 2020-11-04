import { SerializerInterceptor } from '@core/interceptors';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchPeopleFiltersDto } from '../dtos/SearchPeopleFiltersDto';
import { PeopleDto } from '../dtos/PeopleDto';
import { SearchPeopleUseCase } from '../use-cases/SearchPeopleUseCase';
import { PersonBioDto } from '../dtos/PersonBioDto';
import { FindPersonByUserNameUseCase } from '../use-cases/FindPersonByUserNameUseCase';

@ApiTags('People')
@Controller('people')
export class PeopleController {

  constructor(
    private readonly searchPeopleUseCase: SearchPeopleUseCase,
    private readonly findPersonByUserNameUseCase: FindPersonByUserNameUseCase,
  ) { }

  @Get('/search')
  @ApiResponse({ status: 200, type: PeopleDto, isArray: true })
  @UseInterceptors(new SerializerInterceptor(PeopleDto))
  search(@Query() query: SearchPeopleFiltersDto): Promise<PeopleDto[]> {
    return this.searchPeopleUseCase.execute(query);
  }

  @Get('/:username/bio')
  @ApiResponse({ status: 200, type: PersonBioDto })
  @UseInterceptors(new SerializerInterceptor(PersonBioDto))
  findOneByUserName(@Param('username') username: string): Promise<PersonBioDto> {
    return this.findPersonByUserNameUseCase.execute(username);
  }

}
