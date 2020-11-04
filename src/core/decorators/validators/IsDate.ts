import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import * as moment from 'moment';

export function IsDate(format: string, validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isDate',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return moment(value, format, true).isValid();
        },
        defaultMessage(args: ValidationArguments) {
          return '$property has an invalid format date';
        }
      },
    });
  };
}
