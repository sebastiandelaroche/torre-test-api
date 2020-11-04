import { HttpService, Injectable } from '@nestjs/common';
import * as R from 'ramda';
import { GatewayPersonBioResponseDto } from '../dtos/GatewayPersonBioResponseDto';

@Injectable()
export class TorreBioGateway {

  private readonly baseUrl = process.env.TORRE_BIO_URL;

  constructor(
    private readonly httpService: HttpService
  ) { }

  findPersonByUserName(username: string): Promise<GatewayPersonBioResponseDto> {
    const url = `${this.baseUrl}/api/bios/${username}`;

    return this.httpService
      .get(url)
      .toPromise()
      .then(R.prop('data'));
  }

}
