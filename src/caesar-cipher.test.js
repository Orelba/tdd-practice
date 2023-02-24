import caesarCipher from './caesar-cipher'

test('Cipher a lowercase string', () => {
  expect(caesarCipher.cipher('hello', 1)).toBe('ifmmp')
  expect(caesarCipher.cipher('it is me', 6)).toBe('oz oy sk')
})

test('Cipher a uppercase string', () => {
  expect(caesarCipher.cipher('HEY EVERYONE', 1)).toBe('IFZ FWFSZPOF')
  expect(caesarCipher.cipher('FRIENDS', 3)).toBe('IULHQGV')
})

test('Cipher a mixed string', () => {
  expect(caesarCipher.cipher(`Hello World!! (Yo) It's Me MaRiO @ :)`, 7)).toBe(`Olssv Dvysk!! (Fv) Pa'z Tl ThYpV @ :)`)
})

test('Cipher a string with special chars', () => {
  expect(caesarCipher.cipher('email@mail.com', 3)).toBe('hpdlo@pdlo.frp')
})

test('Wrapping from z to a', () => {
  expect(caesarCipher.cipher('z', 1)).toBe('a')
})