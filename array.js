export const objectFromArray = (arr, by = 'id') => arr.reduce((acc, item) => {
  acc[`${item[by]}`] = item;
  return acc;
}, {});

export const sortStrings = (a, b, order) => {
  if (a < b) return order === 'down' ? -1 : 1;
  if (a > b) return order === 'down' ? 1 : -1;
  return 0;
};
