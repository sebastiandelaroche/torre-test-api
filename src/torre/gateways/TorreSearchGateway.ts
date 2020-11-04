import { HttpService, Injectable } from '@nestjs/common';
import * as R from 'ramda';
import { GatewaySearchPeopleResponseDto } from '../dtos/GatewaySearchPeopleResponseDto';
import { SearchPeopleFiltersDto } from '../dtos/SearchPeopleFiltersDto';

@Injectable()
export class TorreSearchGateway {

  private readonly baseUrl = process.env.TORRE_SEARCH_URL;

  constructor(
    private readonly httpService: HttpService
  ) { }

  searchPeople(filters: SearchPeopleFiltersDto): Promise<GatewaySearchPeopleResponseDto> {
    const url = `${this.baseUrl}/people/_search/?offset=${filters.offset}&size=${filters.size}&aggregate=${filters.aggregate.toString()}`;
    const data: any = {};

    if (filters.role) {
      data['skill/role'] = {
        text: filters.role,
        experience: filters.experience
      };
    }

    return this.httpService
      .post(url, data, {
        headers: { 'Content-Type': 'application/json' }
      })
      .toPromise()
      .then(R.prop('data'));
  }

}
