const ScoreFunctions = require('../controllers/score')

describe('Store words and it score if they are palindrome', () => {
    it('Should return that it is true', () => {
      expect(ScoreFunctions.isPalindrome('aba')).toBe(true)
    })
    it('Should return that it is 5', () => {
        expect(ScoreFunctions.calculateScore('ababa')).toBe(5)
      })
  })
  