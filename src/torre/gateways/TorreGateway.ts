import { HttpService, Injectable } from '@nestjs/common';
import * as R from 'ramda';
import { GatewayOpportunityResponseDto } from '../dtos/GatewayOpportunityResponseDto';

@Injectable()
export class TorreGateway {

  private readonly baseUrl = process.env.TORRE_URL;

  constructor(
    private readonly httpService: HttpService
  ) { }

  findOpportunityById(id: string): Promise<GatewayOpportunityResponseDto> {
    const url = `${this.baseUrl}/api/opportunities/${id}`;

    return this.httpService
      .get(url)
      .toPromise()
      .then(R.prop('data'));
  }

}
