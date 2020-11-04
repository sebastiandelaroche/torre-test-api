import * as R from 'ramda';

const transformDetail = R.applySpec({
  code: R.prop('code'),
  content: R.prop('content'),
});

const transformOwner = R.applySpec({
  id: R.prop('id'),
  username: R.prop('username'),
  name: R.prop('name'),
  professionalHeadline: R.prop('professionalHeadline'),
  picture: R.prop('picture'),
  pictureThumbnail: R.prop('pictureThumbnail'),
});

const transformCompensation = R.applySpec({
  currency: R.prop('currency'),
  minAmount: R.prop('minAmount'),
  maxAmount: R.prop('maxAmount'),
  periodicity: R.prop('periodicity'),
});

export const transformOpportunityDetail = R.applySpec({
  id: R.prop('id'),
  objective: R.prop('objective'),
  review: R.prop('review'),
  status: R.prop('status'),
  details: R.compose(
    R.map(transformDetail),
    R.prop('details')
  ),
  owner: R.compose(
    transformOwner,
    R.prop('owner')
  ),
  languages: R.compose(
    R.map(R.path(['language', 'name'])),
    R.prop('languages')
  ),
  strengths: R.compose(
    R.map(R.prop('name')),
    R.prop('strengths')
  ),
  compensation: R.compose(
    transformCompensation,
    R.prop('compensation')
  ),
});
