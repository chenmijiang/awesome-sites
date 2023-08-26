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
