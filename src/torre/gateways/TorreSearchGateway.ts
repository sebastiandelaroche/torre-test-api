import { HttpService, Injectable } from '@nestjs/common';
import * as R from 'ramda';
import { GatewaySearchPeopleResponseDto } from '../dtos/GatewaySearchPeopleResponseDto';
import { SearchPeopleFiltersDto } from '../dtos/SearchPeopleFiltersDto';
import { SearchOpportunitiesFiltersDto } from '../dtos/SearchOpportunitiesFiltersDto';
import { GatewaySearchOpportunitiesResponseDto } from '../dtos/GatewaySearchOpportunitiesResponseDto';

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

  searchOpportunities(filters: SearchOpportunitiesFiltersDto): Promise<GatewaySearchOpportunitiesResponseDto> {
    const url = `${this.baseUrl}/opportunities/_search/?offset=${filters.offset}&size=${filters.size}&aggregate=${filters.aggregate.toString()}`;
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
