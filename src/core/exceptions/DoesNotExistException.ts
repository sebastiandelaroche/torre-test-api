import { Exception } from './Exception';

export class DoesNotExistException extends Exception {
  constructor(message?: string, domain?: string) {
    super(message || 'The element does not exist', domain);
  }
}
