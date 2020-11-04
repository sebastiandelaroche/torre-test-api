import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class TorreGateway {

  private readonly baseUrl = process.env.TORRE_URL;

  constructor(
    private readonly httpService: HttpService
  ) { }

}
