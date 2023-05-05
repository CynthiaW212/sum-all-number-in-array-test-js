const sumItems = function(array) {
  // Sum all the numbers in the array
  let num = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // sum the result of sumItems to num
      num += sumItems(item);
    } else {
      // sum up item to num
      num += item;
    }
  });
  return num;
};

//Testcases
const array = [[1, 2, [[3], 4]], 5, [6],[]];
const array1 = [[[[[[[[[[[[[1]]]]]]]]]]]]];
console.log(sumItems(array));
console.log(sumItems(array1));

module.exports = sumItems;