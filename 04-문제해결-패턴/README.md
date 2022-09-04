# 문제 해결 패턴

- ## 1. 패턴 소개

  - Frequency counter
  - Multiple Pointers
  - Sliding Window
  - Divide and Conquer
  - Dynamic Programming
  - Greedy Algorithms
  - Backtracking
  - **Many more...**

  ***

- ## 2. Frequency counter

  - 이 패턴이 Frequency counter라 불리는 이유는 보통 자바스크립트의 객체를 사용해서 다양한 값과 빈도를 수집하는 패턴이기 때문이다.
  - 이 패턴은 여러 데이터와 입력값이 서로 비슷한 값으로 구성되어 있는지, 서로 간의 아나그램인지, 값이 다른 값에 포함되는지 여부를 비교하거나, 데이터를 입력값이나 두 개 또는 특정하게 발생하는 빈도와 비교할 떄 유용하다.
  - 아나그램이란 두 문자열이 알파벳의 나열 순서는 다르지만 알파벳 구성이 일치하면 두 단어는 아나그램이라고 한다. ex. 가나 > 나가, 국왕 > 왕국, TAR > RAT, ARC > CAR
  - 또한 중첩 루프나 배열이나 문자열에서의 O(n^2)연산을 피할 수 있다.

  > Challenge
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

  - Challenge without Frequency counter

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

  - Challenge using Frequency counter

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
      return false;
    }
    ```

    - 핵심은 중첩 loop가 일어나던 작업을 O(n)의 loop 여러개로 처리하는 데에 있다.
    - O(n^2) 작업을 3개의 O(n) loop로 처리 했으니 훨씬 빠르다.
