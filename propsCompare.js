/* eslint no-console: 0 */
export function propsCompare(prev, next) {
  Object.keys(prev).forEach((key) => {
    const isEqual = prev[key] === next[key];

    console.log(key, isEqual);
    if (!isEqual) console.log(prev[key], next[key]);
  });

  console.log('all', prev === next);
  return prev === next;
}

export function arePropsEqual(prev, next) {
  let areEqual = true;

  Object.keys(prev).forEach((key) => {
    if (prev[key] !== next[key]) areEqual = false;
  });

  return areEqual;
}
