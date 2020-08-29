Array.prototype.myMap = function (callback) {
  const newMapedArray = [];
  for (let index = 0; index <= this.length - 1; index++) {
    const result = callback(this[index], index);
    newMapedArray.push(result);
  }

  return newMapedArray;
};
