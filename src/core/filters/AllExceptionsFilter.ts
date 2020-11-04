import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import * as R from 'ramda';
import { Response } from 'express';
import { Exception } from '@core/exceptions';
import { handleException } from './utils/handleException';
import { transformErrorOutput } from './utils/transformErrorOutput';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {

  catch(exception: Exception, host: ArgumentsHost) {
    console.debug('exception', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // TODO: pending to define system error codes
    const getError = R.compose(transformErrorOutput('00000'), handleException);
    const error = getError(exception);
    response
      .status(error.statusCode)
      .json(error);
  }

}
