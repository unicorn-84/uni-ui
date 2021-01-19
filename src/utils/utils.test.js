import calcTypoValues from '.';

describe('utils', () => {
  describe('calcTypoValues', () => {
    test('should return an object for styling react component', () => {
      expect(
        calcTypoValues(
          26,
          {
            lineHeightRatio: 1,
            marginTopRatio: 2,
            marginBottomRatio: 1,
          },
        ),
      ).toStrictEqual(
        {
          lineHeight: '26rem',
          marginTop: '52rem',
          marginBottom: '26rem',
        },
      );
    });
  });
});
