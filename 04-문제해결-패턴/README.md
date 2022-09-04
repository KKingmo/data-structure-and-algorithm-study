# 문제 해결 패턴

- [문제 해결 패턴](#문제-해결-패턴)
  - [2. Frequency counter(빈도 카운터)](#2-frequency-counter빈도-카운터)
  - [3. Multiple Pointers(다중 포인터)](#3-multiple-pointers다중-포인터)

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
