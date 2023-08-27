const bingUrl = process.env.BING_IMAGE;

export const fetchBingImg = async () => {
  try {
    const response = await fetch(bingUrl!);
    const data = await response.json();

    const bingImage = `https://cn.bing.com${data.images[0].url}`;
    return bingImage;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === 'object';
export const isFunction = (value: unknown): value is (...args: any) => any =>
  typeof value === 'function';

export const isString = (value: unknown): value is string => typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isUndef = (value: unknown): value is undefined => typeof value === 'undefined';
