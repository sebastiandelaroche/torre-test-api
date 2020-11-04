import { Injectable, HttpService } from '@nestjs/common';

// FIXME: this is not the best approach, looking for a best one.
@Injectable()
export class Http {

  private static httpService: HttpService;

  constructor(
    private readonly httpService: HttpService
  ) {
    if (!Http.httpService) {
      Http.httpService = this.httpService;
    }
  }

  public static getHttpService(): HttpService {
    return Http.httpService;
  }

}
