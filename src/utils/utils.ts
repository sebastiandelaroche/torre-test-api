import * as R from 'ramda';
import { Exception } from '@core/exceptions';
import { Class } from './types';

export const throwErrorWithMessage = R.curry((exception: Class<Exception>, message: string) => {
  throw new exception(message);
});

export const throwError = (exception: Exception) => () => {
  throw exception;
};

export const throwErrorIfEmptyOrNil = (exception: Exception) =>
  R.ifElse(R.isEmptyOrNil, throwError(exception), R.identity);

export const throwErrorIfNotEmptyOrNil = (exception: Exception) =>
  R.ifElse(R.isNotEmptyOrNil, throwError(exception), R.identity);

export const getEnumValues = <T>(_enum: T): string[] => Object
  .entries(_enum)
  .map(([, value]) => value);


export const wrapInArray = <T>(data: T): T[] => [data];

export const hashBasicAuth = (username: string, password: string): string =>
  Buffer.from(username + ':' + password).toString('base64');
