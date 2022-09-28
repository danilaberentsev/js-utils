export function removeEmptyFields(obj) {
  const isEmptyValue = val => [null, undefined, ''].indexOf(val) >= 0;
  const newObj = { ...obj };

  Object.keys(newObj).forEach((key) => {
    if (isEmptyValue(newObj[key])) {
      delete newObj[key];
    } else if (typeof newObj[key] === 'object' && !Array.isArray(newObj[key])) {
      newObj[key] = removeEmptyFields(newObj[key]);
    }
  });

  return newObj;
}
