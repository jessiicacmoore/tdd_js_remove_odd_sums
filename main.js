function removeOddSum(arrays, aKey, bKey) {
  return arrays.filter(obj => (obj[aKey] + obj[bKey]) % 2 === 0);
}

module.exports = removeOddSum;
