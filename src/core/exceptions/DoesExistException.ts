import { Exception } from './Exception';

export class DoesExistException extends Exception {
  constructor(message?: string, domain?: string) {
    super(message || 'The element already exist', domain);
  }
}
