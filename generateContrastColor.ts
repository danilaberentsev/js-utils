export function padZero(str: string, length = 3): string {
  return str.length < length ? `0${str}` : padZero(str, length);
}

export function generateContrastColor(hex: string, blackAndWhite = true) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  if (hex.length === 3) {
    // convert 3-digit hex to 6-digits.
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  const rbgRed = parseInt(hex.slice(0, 2), 16);
  const rgbGreen = parseInt(hex.slice(2, 4), 16);
  const rgbBlue = parseInt(hex.slice(4, 6), 16);

  if (blackAndWhite) {
    // https://stackoverflow.com/a/3943023/112731
    const colorIntensity = rbgRed * 0.299 + rgbGreen * 0.587 + rgbBlue * 0.114;
    const THRESHOLD = 186;

    return colorIntensity > THRESHOLD ? '#000000' : '#FFFFFF';
  }

  // invert color components and pad zeros
  const hexRed = padZero((255 - rbgRed).toString(16));
  const hexGreen = padZero((255 - rgbGreen).toString(16));
  const hexBlue = padZero((255 - rgbBlue).toString(16));

  return `#${hexRed}${hexGreen}${hexBlue}`;
}
