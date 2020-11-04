import * as R from 'ramda';

const transformLink = R.applySpec({
  name: R.prop('name'),
  address: R.prop('address')
});

const transformStrength = R.applySpec({
  code: R.prop('code'),
  name: R.prop('name'),
  weight: R.prop('weight'),
  recommendations: R.prop('recommendations'),
});

const transformExperience = R.applySpec({
  category: R.prop('category'),
  name: R.prop('name'),
  organizations: R.compose(
    R.map(R.prop('name')),
    R.prop('organizations')
  ),
  fromMonth: R.prop('fromMonth'),
  fromYear: R.prop('fromYear'),
  additionalInfo: R.prop('additionalInfo'),
});

export const transformPersonBio = R.applySpec({
  professionalHeadline: R.path(['person', 'professionalHeadline']),
  picture: R.path(['person', 'picture']),
  pictureThumbnail: R.path(['person', 'pictureThumbnail']),
  name: R.path(['person', 'name']),
  publicId: R.path(['person', 'publicId']),
  locationName: R.path(['person', 'location', 'name']),
  links: R.compose(
    R.map(transformLink),
    R.path(['person', 'links'])
  ),
  strengths: R.compose(
    R.map(transformStrength),
    R.prop('strengths')
  ),
  interests: R.compose(
    R.map(R.prop('name')),
    R.prop('interests')
  ),
  experiences: R.compose(
    R.map(transformExperience),
    R.prop('experiences')
  ),
  languages: R.compose(
    R.map(R.prop('language')),
    R.prop('languages')
  )
});

