const ScoreFunctions = require('../controllers/score')

describe('They are palindrome', () => {
    it('Should be a palyndrome', () => {
      expect(ScoreFunctions.isPalindrome('aba')).toBe(true)
      expect(ScoreFunctions.isPalindrome('abas')).toBe(false)
    })
    it('Should return 5', () => {
        expect(ScoreFunctions.calculateScore('ababa')).toBe(5)
    })
  })
  