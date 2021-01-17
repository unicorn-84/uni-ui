import calcTypoValues from '.';

describe('utils', () => {
  describe('calcTypoValues', () => {
    test('should return object of css properies', () => {
      expect(calcTypoValues(1.625, [1, 2, 1])).toStrictEqual({
        lineHeight: '1.625rem',
        marginTop: '3.25rem',
        marginBottom: '1.625rem',
      });
    });
  });
});
