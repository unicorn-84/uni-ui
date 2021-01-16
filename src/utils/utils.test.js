import calcTypoValues from '.';

describe('utils', () => {
  describe('calcValues', () => {
    test('should return object with typo units', () => {
      expect(calcTypoValues(1.625, [1, 2, 1])).toStrictEqual({
        lineHeight: '1.625rem',
        marginTop: '3.25rem',
        marginBottom: '1.625rem',
      });
    });
  });
});
