/* global localStorage */
/* eslint no-console: 0 */
export function getStorageData(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export function saveStorageData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
