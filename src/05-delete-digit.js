/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = (n.toString()).split('');
  const min = Math.min.apply(null, nArr);
  nArr.splice(nArr.indexOf(min.toString()), 1);
  return Number(nArr.join(''));
}

module.exports = deleteDigit;
