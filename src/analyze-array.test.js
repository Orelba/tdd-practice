import analyzeArray from './analyze-array'

test('Average of all numbers in an array is correct', () => {
  const expected = { average: 4 }
  expect(analyzeArray([5, 2, 6, 3])).toMatchObject(expected)
})

test('Min number from array is correct', () => {
  const expected = { min: 2 }
  expect(analyzeArray([5, 2, 13])).toMatchObject(expected)
})

test('Max number from array is correct', () => {
  const expected = { max: 8 }
  expect(analyzeArray([5, 2, 8, 1])).toMatchObject(expected)
})

test('Array length is correct', () => {
  const expected = { length: 6 }
  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toMatchObject(expected)
})
