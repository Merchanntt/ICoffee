export function FormatedPrice(price: string) {
  const splitIndex = price.split('').length - 2;

    const formatedPrice = price.substring(0, splitIndex) + ',' + price.substring(splitIndex)
  
  return formatedPrice
}