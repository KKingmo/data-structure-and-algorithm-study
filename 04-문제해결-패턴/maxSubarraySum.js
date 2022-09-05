const showReturn = (callback) => console.log(callback);

// O(n^2)
function maxSubarraySum1(arr, num) {
  if (num > arr.length) {
    return null;
  }
  // 배열이 모두 음수라면 가장 큰 합이 음수이기 결과의 초기값은 가장 작은 음수
  let max = -Infinity;
  // loop문이 i부터 연속된 num만큼의 요소를 더하기 때문에 loop는 배열의 마지막 인덱스 - num
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
showReturn(maxSubarraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Sliding Window approach concept O(n)
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
showReturn(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
