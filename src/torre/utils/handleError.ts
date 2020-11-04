import * as R from 'ramda';
import { DoesNotExistException } from '@core/exceptions';

export const handleError = (error: Error): void | any => {
  const getStatus = R.path(['response', 'status']);
  const getMessage = R.path(['response', 'data', 'message']);

  if (getStatus(error) === 404) {
    throw new DoesNotExistException(getMessage(error));
  }

  throw error;
}
