const getMap = (data) => {
  let map = {};
  for (d of data) map[d] = map[d] + 1 || 1;
  return map;
};

const getTotalPairs = (data) => {
  let total = 0;
  const map = getMap(data);
  for (type in map) {
    if (map[type] >= 2) {
      total += Math.floor(map[type] / 2);
    }
  }
  return total;
};

const testSocks = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];
const socks1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const socks2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const socks3 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log('No 1.');
console.log(`test. input: ${testSocks}\noutput: ${getTotalPairs(testSocks)}`);
console.log(`a. input: ${socks1}\noutput: ${getTotalPairs(socks1)}`);
console.log(`b. input: ${socks2}\noutput: ${getTotalPairs(socks2)}`);
console.log(`c. input: ${socks3}\noutput: ${getTotalPairs(socks3)}`);
