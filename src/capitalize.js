const capitalize = string => {
  const capitalizedFirstChar = string.charAt(0).toUpperCase()
  const restOfString = string.slice(1)
  return capitalizedFirstChar + restOfString
}

export default capitalize