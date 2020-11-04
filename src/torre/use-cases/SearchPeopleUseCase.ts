import { Injectable } from '@nestjs/common';
import * as R from 'ramda';
import { UseCase } from '@core/UseCase';
import { SearchPeopleFiltersDto } from '../dtos/SearchPeopleFiltersDto';
import { PeopleDto } from '../dtos/PeopleDto';
import { TorreSearchGateway } from '../gateways/TorreSearchGateway';

@Injectable()
export class SearchPeopleUseCase implements UseCase<SearchPeopleFiltersDto, Promise<PeopleDto[]>> {

  constructor(
    private readonly torreSearchGateway: TorreSearchGateway
  ) { }

  async execute(data?: SearchPeopleFiltersDto): Promise<PeopleDto[]> {
    return await this.torreSearchGateway
      .searchPeople(this.defaultQueryValues(data))
      .then(R.compose(R.map(this.transformPeople), R.prop('results')));
  }

  private defaultQueryValues = R.applySpec({
    offset: R.compose(R.defaultTo(0), R.prop('offset')),
    size: R.compose(R.defaultTo(50), R.prop('size')),
    aggregate: R.compose(R.defaultTo(false), R.prop('aggregate')),
    role: R.prop('role'),
    experience: R.compose(R.defaultTo('1-plus-year'), R.prop('experience')),
  });

  private transformPeople = R.applySpec({
    name: R.prop('name'),
    username: R.prop('username'),
    locationName: R.prop('locationName'),
    openTo: R.prop('openTo'),
    picture: R.prop('picture'),
    professionalHeadline: R.prop('professionalHeadline'),
    skills: R.compose(
      R.map(R.prop('name')),
      R.defaultTo([]),
      R.prop('skills')
    ),
  });

}
