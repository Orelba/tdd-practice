const caesarCipher = (() => {
  const cipher = (string, shiftFactor) => {
    const specialChars = new RegExp(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
    let newString = ''

    for (let i = 0; i < string.length; i++) {
      const char = string.charAt(i)
      if (char === ' ' || specialChars.test(char)) {
        newString += char
      } else {
        newString += _getShifted(char, shiftFactor)
      }
    }

    return newString
  }

  const _getShifted = (letter, shiftFactor) => {
    const letters = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
      'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    const letterIndex = letters.indexOf(letter.toLowerCase())
    const shiftedIndex = letterIndex + shiftFactor
    const shiftedLetter = (letters.array <= shiftedIndex) ? letters[shiftedIndex] : letters[shiftedIndex % letters.length]

    return (_isUpperCase(letter)) ? shiftedLetter.toUpperCase() : shiftedLetter
  }

  const _isUpperCase = (letter) => {
    if (letter === letter.toUpperCase()) return true
  }

  return {
    cipher
  }
})()

export default caesarCipher