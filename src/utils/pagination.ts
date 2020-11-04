import { FindAllPaginationParamsDto } from '@core/dtos';
import * as R from 'ramda';

const isLessThanCero = (n: number) => n < 0;

const isEqToCero = (n: number) => n == 0;

const toNumber = (n: number | string) => +n;

const calculatePageInput = R.compose(
  R.ifElse(isLessThanCero, R.always(0), R.identity),
  R.subtract(-1),
  toNumber,
  R.defaultTo(0)
);

const calculatePageOutput = R.ifElse(isEqToCero, R.add(1), R.identity);

export const defaultPaginationOptions = R.compose(
  R.removeUndefined,
  R.applySpec({
    limit: R.prop('limit'),
    page: R.compose(calculatePageInput, R.prop('page')),
    order: R.compose(R.defaultTo('ASC'), R.prop('order')),
    orderBy: R.compose(R.defaultTo('id'), R.prop('orderBy'))
  })
);

export const toPaginationResponse = (options: FindAllPaginationParamsDto) => R.applySpec({
  data: R.nth(0),
  meta: R.applySpec({
    count: R.nth(1),
    limit: R.always(options.limit),
    page: R.compose(calculatePageOutput, R.always(options.page))
  })
});

export const removePaginationFields = R.omit([
  'limit', 'page', 'order', 'orderBy'
]);
