import calculator from './calculator'

test('adding 2 + 3 equals 5', () => {
  expect(calculator.add(2, 3)).toBe(5)
})

test('multiplication is not possible with arguments that are not a number', () => {
  expect(calculator.add('2', 4)).toBe('Both arguments need to be valid numbers')
  expect(calculator.add('2', '5')).toBe('Both arguments need to be valid numbers')
  expect(calculator.add(8, '5')).toBe('Both arguments need to be valid numbers')
})

test('basic subtraction', () => {
  expect(calculator.subtract(20, 3)).toBe(17)
})

test('subtraction with negative result value', () => {
  expect(calculator.subtract(10, 14)).toBe(-4)
})

test('multiplication is not possible with arguments that are not a number', () => {
  expect(calculator.subtract('2', 4)).toBe('Both arguments need to be valid numbers')
  expect(calculator.subtract('2', '5')).toBe('Both arguments need to be valid numbers')
  expect(calculator.subtract(8, '5')).toBe('Both arguments need to be valid numbers')
})

test('divide 26 / 2', () => {
  expect(calculator.divide(26, 2)).toBe(13)
})

test('divide by 0 is not possible', () => {
  expect(calculator.divide(0, 0)).toBe('Not a Number')
  expect(calculator.divide(4, 0)).toBe('Not a Number')
})

test('divide 0 by a number equals 0', () => {
  expect(calculator.divide(0, 4)).toBe(0)
})

test('multiplication is not possible with arguments that are not a number', () => {
  expect(calculator.divide('2', 4)).toBe('Both arguments need to be valid numbers')
  expect(calculator.divide('2', '5')).toBe('Both arguments need to be valid numbers')
  expect(calculator.divide(8, '5')).toBe('Both arguments need to be valid numbers')
})

test('multiply 2 * 4 is 8', () => {
  expect(calculator.multiply(2, 4)).toBe(8)
})

test('multiply by negative number', () => {
  expect(calculator.multiply(2, -4)).toBe(-8)
})

test('multiplication is not possible with arguments that are not a number', () => {
  expect(calculator.multiply('2', 4)).toBe('Both arguments need to be valid numbers')
  expect(calculator.multiply('2', '5')).toBe('Both arguments need to be valid numbers')
  expect(calculator.multiply(8, '5')).toBe('Both arguments need to be valid numbers')
})