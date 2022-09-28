/* global FormData, File */
export const createFormData = (data = {}, formData, parentKey = '') => {
  let result = formData instanceof FormData ? formData : new FormData();

  Object.keys(data).forEach((key) => {
    const newKey = parentKey ? `${parentKey}[${key}]` : key;

    if (data[key] instanceof File || ['string', 'number', 'boolean'].indexOf(typeof data[key]) >= 0) {
      return result.append(newKey, data[key]);
    }

    if (data[key] === null) {
      return result.append(newKey, '');
    }


    if (typeof data[key] === 'object') {
      result = createFormData(data[key], result, newKey);
    }
  });

  return result;
};
