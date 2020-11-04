import * as R from 'ramda';
import { Class } from '@utils/types';
import {
  HttpException,
  NotFoundException,
  InternalServerErrorException,
  ConflictException
} from '@nestjs/common';
import {
  Exception, DoesExistException,
  DoesNotExistException, InvalidInputDataException
} from '@core/exceptions';

export const transformException = (httpException: Class<HttpException>) =>
  (exception: Exception) => new httpException(exception.message);

export const handleException = R.cond([
  [R.is(DoesExistException), transformException(ConflictException)],
  [R.is(DoesNotExistException), transformException(NotFoundException)],
  [R.is(InvalidInputDataException), transformException(ConflictException)],
  [R.is(HttpException), R.identity],
  [R.T, transformException(InternalServerErrorException)],
]);
