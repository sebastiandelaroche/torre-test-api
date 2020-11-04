import * as R from 'ramda';

const transformCompensation = R.applySpec({
  currency: R.prop('currency'),
  minAmount: R.prop('minAmount'),
  maxAmount: R.prop('maxAmount'),
  periodicity: R.prop('periodicity'),
});

export const transformOpportunities = R.applySpec({
  objective: R.prop('objective'),
  type: R.prop('type'),
  organizations: R.compose(
    R.map(R.prop('name')),
    R.prop('organizations')
  ),
  locations: R.prop('locations'),
  remote: R.prop('remote'),
  external: R.prop('external'),
  status: R.prop('status'),
  compensation: R.compose(
    transformCompensation,
    R.path(['compensation', 'data'])
  ),
  skills: R.compose(
    R.map(R.prop('name')),
    R.prop('organizations')
  ),
});
