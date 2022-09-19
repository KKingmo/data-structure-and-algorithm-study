function MergeSort(arr, leftIndex, rightIndex) {
  if (leftIndex < rightIndex) {
    // 배열을 반으로 나눠 왼쪽 인덱스, 중간 인덱스, 오른쪽 인덱스로 구분한다.
    let midIndex = parseInt((leftIndex + rightIndex) / 2);
    // 왼쪽 인덱스 부터 중간 인덱스까지 정렬한다.
    MergeSort(arr, leftIndex, midIndex);
    // 중간 인덱스 + 1 부터 오른쪽 인덱스까지 정렬한다.
    MergeSort(arr, midIndex + 1, rightIndex);
    Merge(arr, leftIndex, midIndex, rightIndex);
  }
}

function Merge(arr, leftIndex, midIndex, rightIndex) {
  // 왼쪽 영역에서 몇 번째 까지 정렬되었는지 참조할 수 있는 변수
  let leftAreaIndex = leftIndex;
  // 오른쪽 영역에서 몇 번째 까지 정렬되었는지 참조할 수 있는 변수
  let rightAreaIndex = midIndex + 1;

  let tempArr = [];
  tempArr.length = rightIndex + 1;
  tempArr.fill(0, 0, rightIndex + 1);

  let tempArrIndex = leftIndex;
  while (leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
    if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
      // tempArr[tempArrIndex] = arr[leftAreaIndex++] >> arr[leftAreaIndex]를 삽입하고 leftAreaIndex += 1
      tempArr[tempArrIndex] = arr[leftAreaIndex++];
    } else {
      tempArr[tempArrIndex] = arr[rightAreaIndex++];
    }
    tempArrIndex++;
  }

  if (leftAreaIndex > midIndex) {
    for (let i = rightAreaIndex; i <= rightIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  } else {
    for (let i = leftAreaIndex; i <= midIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  }

  for (let i = leftIndex; i <= rightIndex; i++) {
    arr[i] = tempArr[i];
  }
}

let arr = [3, 5, 2, 4, 1, 7, 8, 6];

console.log("===== 정렬 전 =====");
console.log(arr);

MergeSort(arr, 0, arr.length - 1);

console.log("===== 정렬 후 =====");
console.log(arr);
