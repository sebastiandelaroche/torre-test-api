import { plainToClass, ClassTransformOptions } from 'class-transformer';
import * as R from 'ramda'
import { Class } from './types';

const skipUnneededFields = R.omit(['uncommittedEvents', 'entity']);

export function mapper<T, V>(
  cls: Class<T>,
  plain: V | V[],
  options: ClassTransformOptions = {},
): T {
  return skipUnneededFields(
    plainToClass(cls, plain, options)
  );
}
