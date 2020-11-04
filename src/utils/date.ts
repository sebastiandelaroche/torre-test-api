import * as moment from 'moment';
import * as R from 'ramda';

const defaultFormatDate = 'YYYY-MM-DD';

export const getFirstDayCurrentMonth = (format: string = defaultFormatDate) =>
  moment().startOf('month').format(format);

export const getLastDayCurrentMonth = (format: string = defaultFormatDate) =>
  moment().endOf('month').format(format);

export const getYear = (date: Date, format = defaultFormatDate) =>
  moment(date, format).format('YYYY');

export const getMonth = (date: Date, format = defaultFormatDate) =>
  moment(date, format).format('MM');

export const getDay = (date: Date, format = defaultFormatDate) =>
  moment(date, format).format('DD');

export const format = (date: Date, format = defaultFormatDate) =>
  moment(date, format);

export const formatCurry = R.curry((format, date: Date) =>
  moment(date, 'DD/MM/YYYY', true).format(format));
