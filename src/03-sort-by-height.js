/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = arr;
  let temp;
  const { length } = arr2;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr2[i] < arr2[j]) {
        if (arr2[i] === -1) break;
        temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
      }
    }
  }
  return arr2;
}

module.exports = sortByHeight;
