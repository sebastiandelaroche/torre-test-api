import * as R from 'ramda';
import { wrapInArray } from '@utils/utils';

export const getMessage = R.compose(
  R.flatten, wrapInArray, R.path(['response', 'message']))

export const transformErrorOutput = (code: string) => R.applySpec({
  statusCode: R.path(['response', 'statusCode']),
  title: R.path(['response', 'error']),
  messages: getMessage,
  code: R.always(code)
});
