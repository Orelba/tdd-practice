const calculator = (() => {
  const add = (a, b) => {
    if (!_validateParameters(a, b)) return 'Both arguments need to be valid numbers'
    return a + b
  }

  const subtract = (a, b) => {
    if (!_validateParameters(a, b)) return 'Both arguments need to be valid numbers'
    return a - b
  }

  const divide = (a, b) => {
    if (!_validateParameters(a, b)) return 'Both arguments need to be valid numbers'
    const divided = a / b 
    return (!isNaN(divided) && divided !== Infinity) ? divided : 'Not a Number'
  }

  const multiply = (a, b) => {
    if (!_validateParameters(a, b)) return 'Both arguments need to be valid numbers'
    return a * b
  }

  const _validateParameters = (a, b) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') return false
    return true
  }

  return {
    add,
    subtract,
    divide,
    multiply,
  }
})()

export default calculator