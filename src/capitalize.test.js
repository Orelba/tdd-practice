import capitalize from './capitalize'

test('first letter is capitalized', () => {
  expect(capitalize('some string')).toBe('Some string')
})