import { Exception } from './Exception';

export class InvalidInputDataException extends Exception {
  constructor(message?: string, domain?: string) {
    super(message || 'The data seems to be wrong', domain);
  }
}
