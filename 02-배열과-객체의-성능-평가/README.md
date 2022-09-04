# 배열과 객체의 성능 평가

- ## 1. 객체의 빅오

  객체는 다음과 같이 key, value 짝을 갖고 저장되어있다.

  ```js
  let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4],
  };
  ```

  여기서

  - `Object.keys(instructor)` 메서드를 실행하면
    ["firstName", "isInstructor", "favoriteNumbers"]
    를 return 하는데 이는 n개의 key값 만큼
    접근해서 배열에 추가하기 때문에 O(n)의 시간이 든다.

  - `instructor.hasOwnProperty("firstName")` 메서드를 실행하면
    위 와 달리 key의 갯수만큼 접근 할 필요없이 key값에 firstName이 있는지만
    찾으면 되기 때문에 O(1)의 시간이든다.

  - 첫번째 메서드의 경우 key의 갯수만큼 순회하기 때문에 O(n)의 시간이들고, 두번째 메서드의 경우 순회를 하지 않기 때문에 O(1)의 시간이 든다.

  > - 객체의 특징
  >   - 객체는 정렬할 필요가 없다.
  >   - 객체는 접근, 삽입, 제거하는 시간이 빠르다.

  > - 객체의 빅오
  >   - 삽입 - O(1)
  >   - 제거 - O(1)
  >   - 검색 - O(n)
  >   - 접근 - O(1)

  > - 객체 메서드의 빅오
  >   - Object.keys - O(n)
  >   - Object.values - O(n)
  >   - object.entries - O(n)
  >   - hasOwnProperty - O(1)

  ***

- ## 2. 배열의 빅오

  배열의 중요한 점은 정렬이 되어 있다는 것이다.
  그냥 한 덩어리로 있는 객체와는 다르다.
  정렬이 필요한 상황에서는 유용하지만, 연산하는데에는 시간이 더 걸린다.

  때문에 정렬이 필요하지 않는 상황에서는 배열을 사용하지 않는 것이 좋다.

  ```js
  let name = ["Michael", "Melissa", "Andrea"];
  ```

  위 배열에서 "Andrea"데이터에 접근하는데는 O(1)의 시간이든다.
  배열의 요소가 몇 개던 상관없이 "Andrea"의 index라는 지름길로 한 번에 접근할 수 있기 때문이다.

  배열에서의 요소 삽입은 어디에 삽입하는 지에 따라 드는 시간이 다르다.
  이는 배열은 요소마다 index가 붙어있는데 요소를 추가하고 index를 다시 배정하는 작업이 필요하냐에 따라 좌우된다.

  위 배열에 "Raj"라는 요소를 추가한다고하자.

  배열의 마지막에 추가한다면 이 작업은 배열의 끝에 추가하고, index를 주면 되기 때문에
  객체에 추가하는 것과 다를게 없는 O(1)의 시간이 든다.

  하지만 n개의 의 끝이 아닌 위치에 "Raj"를 추가한다면 index를 다시 배정하는 작업이 필요하기 때문에 O(n)의 시간이 든다.

  위와 마찬가지로 배열에서의 요소 제거도 제거하고나서 index를 다시 배정하느냐에 따라 시간이 다르게 든다.

  따라서 비어있는 배열일 때는 제외하고 `push`, `pop`하는 작업이 `shift`, `unshift`하는 작업보다 빠르다.

  > - 배열의 빅오
  >   - 삽입 - 상황에 따라 다르다
  >   - 제거 - 상황에 따라 다르다
  >   - 검색 - O(n)
  >   - 접근 - O(1)

  > - 배열 메서드의 빅오
  >   - push - O(1)
  >   - pop - O(1)
  >   - shift - O(n)
  >   - unshift - O(n)
  >   - concat - O(n)
  >   - slice - O(n)
  >   - splice - O(n)
  >   - sort - O(nlog n)
  >   - forEach/map/filter/reduce/etc - O(n)

  sort에 O(nlog n)의 시간이 드는 이유는 정렬하기 위해서는 n개의 요소만큼 한 작업을 수행하는 것이 아니라 요소들을 비교하고, 이동하는 것과 같은 여러 작업을 수행하기 때문이다.

  ***
