# 문제 해결 패턴

- [문제 해결 패턴](#문제-해결-패턴)

  - [2. Frequency counter(빈도 카운터)](#2-frequency-counter빈도-카운터)
  - [3. Multiple Pointers(다중 포인터)](#3-multiple-pointers다중-포인터)

  - Sliding Window
  - Divide and Conquer
  - Dynamic Programming
  - Greedy Algorithms
  - Backtracking

---

## 2. Frequency counter(빈도 카운터)

- 이 패턴이 Frequency counter라 불리는 이유는 보통 자바스크립트의 객체를 사용해서 다양한 값과 빈도를 수집하는 패턴이기 때문이다.
- 이 패턴은 여러 데이터와 입력값이 서로 비슷한 값으로 구성되어 있는지, 서로 간의 아나그램인지, 값이 다른 값에 포함되는지 여부를 비교하거나, 데이터를 입력값이나 두 개 또는 특정하게 발생하는 빈도와 비교할 떄 유용하다.
- 아나그램이란 두 문자열이 알파벳의 나열 순서는 다르지만 알파벳 구성이 일치하면 두 단어는 아나그램이라고 한다. ex. 가나 > 나가, 국왕 > 왕국, TAR > RAT, ARC > CAR
- 또한 중첩 루프나 배열이나 문자열에서의 O(n^2)연산을 피할 수 있다.

> Challenge : Frequency counter
>
> - 2개의 배열을 인자로 받는 `same`이라는 함수를 작성하라.
> - 첫 번째 배열의 모든 원소들의 제곱에 해당하는 값들이 두 번째 배열에 속해 있다면, true를 반환해야 한다.
> - 배열의 값들이 갖는 빈도는 같아야 한다. 예를 들면
>
>   - `same([1,2,3], [4,1,9]) // true`
>   - `same([1,2,3], [1,9]) // false`
>   - `same([1,2,1], [4,4,1]) // false(2가 하나니 4는 하나만 있어야한다, 그리고 1은 두 개 있어야한다.)`
>
> - [My Challenge Code Link](./frequencyCounter.js)

- ### Challenge : without Frequency counter

  ```js
  function same(arr1, arr2) {
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
  same([1, 2, 3, 2], [9, 1, 4, 4]);
  ```

  - 여기서 indexOf는 최악의 경우O(n)만큼의 시간복잡도를 가지기 때문에
  - for문은 잠재적으로 중첩 loop가 된다.
  - 따라서 이 접근법의 시간복잡도는 O(n^2), 좋은 알고리즘은 아니다...

  <br />

- ### Challenge : using Frequency counter

  ```js
  function same2(arr1, arr2) {
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
  ```

  - 핵심은 중첩 loop가 일어나던 작업을 O(n)의 loop 여러개로 처리하는 데에 있다.
  - O(n^2) 작업을 3개의 O(n) loop로 처리 했으니 훨씬 빠르다.

  <br />

- ### Challenge : Frequency Counter - validAnagram

  > Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

  ```js
  Examples: validAnagram("", ""); // true

  validAnagram("aaz", "zza"); // false

  validAnagram("anagram", "nagaram"); // true

  validAnagram("rat", "car"); // false) // false

  validAnagram("awesome", "awesom"); // false

  validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false

  validAnagram("qwerty", "qeywrt"); // true

  validAnagram("texttwisttime", "timetwisttext"); // true
  ```

  > Note: You may assume the string contains only lowercase alphabets.
  >
  > Time Complexity - O(n)

  - Challenge code

    ```js
    function validAnagram(first, second) {
      if (first.length !== second.length) {
        return false;
      }
      const lookup = {};
      for (let val of first) {
        lookup[val] ? (lookup[val] += 1) : (lookup[val] = 1);
      }
      for (let val of second) {
        if (!lookup[val]) {
          return false;
        } else {
          lookup[val] -= 1;
        }
      }
      return true;
    }

    validAnagram("anagrams", "naaragms");
    ```

---

## 3. Multiple Pointers(다중 포인터)

- 이 패턴의 개념은 인덱스나 위치에 해당하는 포인터나 값을 만든 다음
- 특정 조건에 따라 처음 or 끝 or 중간 지점을 향해 이동시키는 것이다.
- 배열이나 문자열과 같은 일종의 선형 구조, 이중 연결리스트, 단일 연결 리스트를 만들 수 있다.
- 쉽게 한 쌍의 값이나 조검을 충족시키는 무언가를 찾는다고 생각하면된다.

- ### Challenge : Multiple Pointers

  > - 정렬된 배열(오름차순)을 인자로 받는 sumZero함수를 만든다.
  > - 이 함수는 한 숫자를 가져와 다른 숫자에 더하면 0이 되는 쌍을 찾는다.
  > - 더하면 0이 되는 쌍이 없다면 undefined를 반환한다.
  > - 예시
  >   - `sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]`
  >   - `sumZero([-2,0,1,3]) // undefined`
  >   - `sumZero([1,2,3]) // undefined`
  > - [Challenge Code Link](./multiplePointers.js)

  <br />

- ### Challenge : countUniqueValues

  > - countUniqueValues함수를 만든다.
  > - 배열을 오름차순으로 정렬하고, 고유한 값의 개수를 반환한다.
  > - 음수가 포함될 수 있지만 항상 오름차순으로 정렬되어 있어야 한다.
  > - 예시
  >   - `countUniqueValues([1,1,1,1,1,2]) // 2`
  >   - `countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7`
  >   - `countUniqueValues([]) // 0`
  >   - `countUniqueValues([-2,-1,-1,0,1]) // 4`
  > - [Challenge Code Link](./countUniqueValues.js)

  - Challenge Code 설명

    ```js
    function countUniqueValues(arr) {
      if (arr.length === 0) return 0;
      let i = 0;
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j];
        }
      }
      return i + 1;
    }
    countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]);
    ```

    ```js
    i
    [1,1,2,3,3,4,5,6,6,7]
      j -> move right
    만약 i와 j가 다르다면 i의 index에 j를 넣고
    i+1위치에서 다시 검사
      i
    [1,2,2,3,3,4,5,6,6,7]
        j -> move right
        i
    [1,2,3,3,3,4,5,6,6,7]
          j -> move right
    ...loop
    반복문이 끝날때는 아래와 같이 된다.
                i
    [1,2,3,4,5,6,7,6,6,7]
                      j
    i index의 위치까지 중복되지 않는 배열이기 때문에
    고유한 값의 갯수는 i + 1이다.

    경계조건 : 빈배열을 받았을 때 1을 return하게 되므로, 0을 return 하도록 예외처리한다.
    ```

---

## 4. Sliding Window

- 이 패턴은 배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우에 유용하다.
- 예를들면 `"hellothere"`의 가장 긴 연속하는 문자를 찾는 것과 같은 경우에 유용하다.

- ### Challenge : maxSubarraySum

  > - 배열과 숫자(n)를 인자로 받는 maxSubarraySum함수를 만든다.
  > - 이 함수는 배열의 연속된 n개의 숫자들의 합 중에 가장 큰 수를 반환한다.
  > - 예시
  >   - `maxSubarraySum([1,2,5,2,8,1,5],2) // 10`
  >   - `maxSubarraySum([1,2,5,2,8,1,5],4) // 17`
  >   - `maxSubarraySum([4,2,1,6],1) // 6`
  >   - `maxSubarraySum([4,2,1,6,2],4) // 13`
  >   - `maxSubarraySum([],4) // null`
  > - [Challenge Code Link](./maxSubarraySum.js)

  - Challenge code 설명

    ```js
    const showReturn = (callback) => console.log(callback);

    // 첫번째 방법 - O(n^2)
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

    // 두번째 방법(Sliding Window approach concept) - O(n)
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
    ```

    ```js
    두번째 방법(Sliding Window 접근법)은 index를 1씩 올려가며 연속된 3개의 합을 계산하고 비교하는
    첫번째 방법에서 중복된 계산을 수행하지 않게 개선한 방법이다.

    maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) 함수는
    첫번째 loop 에서 0번 인덱스의 연속된 3개 요소들의 합 2 + 6 + 9를 계산한 후 maxSum에 저장한다.

    두번째 loop로 넘어가 1번 인덱스부터 마지막 인덱스까지 연속된 3개 요소들의 합을 구할 때,
    첫 번째 방법은
    1번 인덱스의 연속된 3개요소들의 합을 구하기 위해 순수하게 더해서 6 + 9 + 2를 계산하였지만

    Sliding Window 접근법은 maxSum에 저장된 2 + 6 + 9의 값에서
    맨 앞의 0번 인덱스 2를 빼고, 3번 인덱스 2를 더하여 연속된 3개요소들의 합 6 + 9 + 2를 구한다.

    여기서 만약 연속된 3개의 수가 아닌 10,000개의 수의 합을 구한다고 했을 때

    처음 0번 인덱스에서 연속된 10,000개 요소들의 합만을 구하고,
    다음 1번 부터 마지막 인덱스까지는
    합을 구하는 범위가 아닌 인덱스는 빼주고, 구해야 하는 범위인 인덱스는 더해주는
    O(1)의 작업을 두 번만하여 계속해서 구할 수 있기 때문에 매우 효율적이다.
    이말을 짧게 정리하자면 두 번째 방법은 합을 구할 때마다 O(1)의 작업이 2번 발생한다.

    이에 비해 첫 번째 방법은 합을 구할 때마다 O(n)의 작업을 수행하기 때문에
    이 상황에서는 계속해서 매 인덱스 마다 O(1)의 작업이 10,000번 발생한다.
    ```
