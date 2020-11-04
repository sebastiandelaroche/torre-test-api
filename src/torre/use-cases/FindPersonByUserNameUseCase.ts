import { Injectable } from '@nestjs/common';
import { UseCase } from '@core/UseCase';
import { PersonBioDto } from '../dtos/PersonBioDto';
import { TorreGateway } from '../gateways/TorreGateway';
import { transformPersonBio } from '../utils/transforms/transformPersonBio';
import { handleError } from '../utils/handleError';

@Injectable()
export class FindPersonByUserNameUseCase implements UseCase<string, Promise<PersonBioDto>> {

  constructor(
    private readonly torreGateway: TorreGateway
  ) { }

  execute(username?: string): Promise<PersonBioDto> {
    return this.torreGateway
      .findPersonByUserName(username)
      .then(transformPersonBio)
      .catch(handleError);
  }

}
