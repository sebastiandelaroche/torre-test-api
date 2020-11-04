import { Injectable } from '@nestjs/common';
import * as R from 'ramda';
import { UseCase } from '@core/UseCase';
import { SearchOpportunitiesFiltersDto } from '../dtos/SearchOpportunitiesFiltersDto';
import { OpportunityDto } from '../dtos/OpportunityDto';
import { TorreSearchGateway } from '../gateways/TorreSearchGateway';
import { transformOpportunities } from '../utils/transforms/transformOpportunity';

@Injectable()
export class SearchOpportunitiesUseCase implements UseCase<SearchOpportunitiesFiltersDto, Promise<OpportunityDto[]>> {

  constructor(
    private readonly torreSearchGateway: TorreSearchGateway
  ) { }

  async execute(data?: SearchOpportunitiesFiltersDto): Promise<OpportunityDto[]> {
    return await this.torreSearchGateway
      .searchOpportunities(this.defaultQueryValues(data))
      .then(R.compose(R.map(transformOpportunities), R.prop('results')));
  }

  private defaultQueryValues = R.applySpec({
    offset: R.compose(R.defaultTo(0), R.prop('offset')),
    size: R.compose(R.defaultTo(50), R.prop('size')),
    aggregate: R.compose(R.defaultTo(false), R.prop('aggregate')),
    role: R.prop('role'),
    experience: R.compose(R.defaultTo('1-plus-year'), R.prop('experience')),
  });

}
