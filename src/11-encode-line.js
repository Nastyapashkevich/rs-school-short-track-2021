/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const { length } = str;
  let counter = 1;
  let result = '';
  const str2 = str;

  for (let i = 0; i < length; i++) {
    if (str2[i] === str2[i + 1]) {
      counter++;
    } else if (counter > 1) {
      result += counter + str2[i];
      counter = 1;
    } else {
      result += str2[i];
    }
  }

  return result;
}

module.exports = encodeLine;
