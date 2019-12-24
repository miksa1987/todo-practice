export const capitalizeFirstLetter = (str) => {
  const firstLetterCapitalized = str.charAt(0).toUpperCase()
  const restOfString = str.substring(1)

  return `${firstLetterCapitalized}${restOfString}`
}