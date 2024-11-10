export const urlToBase64 = (url: string) => Buffer.from(url).toString("base64");

export const base64ToUrl = (base64: string) =>
  Buffer.from(base64, "base64").toString("utf-8");

export const logoPath = (name: string) => `/images/logo/${name}`;
