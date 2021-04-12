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
  let res = 0;
  const number = n.toString().split('');
  const { length } = number;
  for (let i = length - 1; i >= 0; i--) {
    const arr = number.slice();
    arr.splice(i, 1);
    const temp = Number(arr.join(''));
    if (res < temp) {
      res = temp;
    }
  }
  return res;
}

module.exports = deleteDigit;
