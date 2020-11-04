import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';
import { OpportunityDetailDto } from '../dtos/OpportunityDetailDto';
import { TorreGateway } from '../gateways/TorreGateway';
import { transformOpportunityDetail } from '../utils/transforms/transformOpportunityDetail';
import { handleError } from '../utils/handleError';

@Injectable()
export class FindOpportunityByIdUseCase implements UseCase<string, Promise<OpportunityDetailDto>> {

  constructor(
    private readonly torreGateway: TorreGateway
  ) { }

  execute(id?: string): Promise<OpportunityDetailDto> {
    return this.torreGateway
      .findOpportunityById(id)
      .then(transformOpportunityDetail)
      .catch(handleError);
  }

}
