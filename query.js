import qs from 'qs';

export const parseQry = query => qs.parse(query, { ignoreQueryPrefix: true, depth: 4 });
export const stringifyQry = object => qs.stringify(object, { arrayFormat: 'brackets', encode: false });
