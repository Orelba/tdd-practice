const analyzeArray = arr => {
  const average = arr.reduce(
    (prevNum, currentNum) => prevNum + currentNum
  ) / 4

  return {
    average: average,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}

export default analyzeArray