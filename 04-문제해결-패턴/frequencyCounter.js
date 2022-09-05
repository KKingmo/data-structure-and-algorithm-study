const showReturn = (callback) => console.log(callback);

// 강의를 듣지 않고 challenge
const same1 = (arr1, arr2) => {
  let arr1Table = {};
  let arr2Table = {};
  for (let value of arr1) {
    arr1Table[value] = ++arr1Table[value] || 1;
  }
  for (let value of arr2) {
    arr2Table[value] = ++arr2Table[value] || 1;
  }
  for (let key in arr1Table) {
    if (arr1Table[key] !== arr2Table[key ** 2]) return false;
  }
  return true;
};
showReturn(same1([1, 2, 3, 2], [9, 1, 4, 4]));

// challenge without frequency counter
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
showReturn(same2([1, 2, 3, 2], [9, 1, 4, 4]));

// Challenge using Frequency counter
function same3(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
showReturn(same3([1, 2, 3, 2], [9, 1, 4, 4]));
