const showReturn = (callback) => console.log("callback", callback);

// O(n^2) solution
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

showReturn(sumZero1([-4, -3, -2, -1, 0, 1, 2, 5]));

// O(n) solution
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  // 0+0을 수행하지 않기 위해 left < right
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

showReturn(sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
