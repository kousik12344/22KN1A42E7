export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidShortcode = (code) => /^[a-zA-Z0-9]{6,10}$/.test(code);

export const isValidMinutes = (min) => Number.isInteger(min) && min > 0;
