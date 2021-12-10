export function calculateDiscount(price, percent) {
  if (typeof price !== 'number' || typeof percent !== 'number') {
    const error = new TypeError('Аргументы должны быть числами')
    throw error;
  }
  return (price / 100) * percent;
}

export function getMarketingPrice(product) {
  const productObject = JSON.parse(product);
  return productObject.hasOwnProperty('prices') ? productObject.prices.marketingPrice : null
}

// Функция имитирует неудачный запрос за картинкой
function fetchAvatarImage(userId) {
  return new Promise((resolve, reject) => {
    reject(new Error(`Error while fetching image for user with id ${userId}`));
  });
}

export async function getAvatarUrl(userId) {
  try {
    const image = await fetchAvatarImage(userId);
    return image.url;
  } catch (error) {
    const defaultUserImg = '/images/default.jpg'
    return defaultUserImg;
  }

}
