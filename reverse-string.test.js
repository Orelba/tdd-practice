import reverseString from './reverse-string'

test('String is reversed', () => {
  expect(reverseString('yummy')).toBe('ymmuy')
})