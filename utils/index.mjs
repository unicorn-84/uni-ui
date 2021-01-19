/**
 * @module utils
 */

import { strict as assert } from 'assert';

/**
 * @function unique - Creates a duplicate-free version of an array.
 * @example <caption>The example usage of unique.</caption>
 *  unique([1, 2, 3, 3])
 *  // returns [1, 2, 3]
 * @param {Array} arr - The array to inspect.
 * @returns {Array} - The duplicate free array.
 */

const unique = (arr) => [...new Set(arr)];
assert.deepStrictEqual(unique([1, 2, 3, 3]), [1, 2, 3], 'unique(): first assertion');

/**
 * @function intersection - Creates an array of unique values that are included in all given arrays.
 * @example <caption>The example usage of intersection.</caption>
 *  intersection([1, 2])
 *  // returns [1, 2]
 *  intersection([1, 2], [1])
 *  // returns [1]
 *  intersection([1, 2], [2], [1, 3])
 *  // returns []
 * @param {Array} arr - The array to inspect.
 * @param {...Array} arrs - The arrays to inspect.
 * @returns {Array} - The new array of intersecting values.
 */

const intersection = (arr, ...arrs) => {
  const firstArr = [...new Set(arr)];
  return firstArr.filter((item) => arrs.every((a) => a.includes(item)));
};

assert.deepEqual(intersection([1, 2]), [1, 2], 'intersection(): first assertion');
assert.deepEqual(intersection([1, 2], [1]), [1], 'intersection(): second assertion');
assert.deepEqual(intersection([1, 2], [2], [1, 3]), [], 'intersection(): third assertion');

/**
 * @function difference - Creates an array of array values not included in the other given arrays.
 * @example <caption>The example usage of difference.</caption>
 *  difference([1, 2])
 *  // returns [1, 2]
 *  difference([1, 2, 1], [2])
 *  // returns [2]
 *  difference([1, 3], [1, 2], [2, 3])
 *  // returns []
 * @param {Array} arr - The array to inspect.
 * @param {...Array} arrs - The values to exclude.
 * @returns {Array} - The new array of filtered values.
 */

const difference = (arr, ...arrs) => arr.filter((item) => arrs.every((a) => !a.includes(item)));
assert.deepEqual(difference([1, 2]), [1, 2], 'difference(): first assertion');
assert.deepEqual(difference([1, 2, 1], [2]), [1, 1], 'difference(): second assertion');
assert.deepEqual(difference([1, 3], [1, 2], [2, 3]), [], 'difference(): third assertion');

export {
  unique,
  intersection,
  difference,
};
