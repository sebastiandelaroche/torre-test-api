import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';
import { PersonBioDto } from '../dtos/PersonBioDto';
import { TorreBioGateway } from '../gateways/TorreBioGateway';
import { transformPersonBio } from '../utils/transforms/transformPersonBio';
import { handleError } from '../utils/handleError';

@Injectable()
export class FindPersonByUserNameUseCase implements UseCase<string, Promise<PersonBioDto>> {

  constructor(
    private readonly torreBioGateway: TorreBioGateway
  ) { }

  execute(username?: string): Promise<PersonBioDto> {
    return this.torreBioGateway
      .findPersonByUserName(username)
      .then(transformPersonBio)
      .catch(handleError);
  }

}
