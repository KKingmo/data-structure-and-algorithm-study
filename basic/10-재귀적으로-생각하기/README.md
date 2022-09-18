## 재귀적으로 생각하기

## 패턴 1

- 단순 loop를 재귀함수로 구현하면 반복문으로 구현했을 때보다 크게 이점이 되는 부분이 없다.
- 오해려 콜스택의 공간을 많이 차지해 성능은 for문보다 좋지 않다.

  ```js
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
  ```

  ```js
  function myFunction(number) {
    if (number > 10) return;
    console.log(number);
    myFunction(number + 1);
  }
  myFunction(1);
  ```

---

## 패턴 2

- 하위 문제의 결과를 기반으로 현재 문제를 계산하기
- 이를 하향식 계산이라한다.

  ```js
  return number * factorial(number - 1);
  ```

- 이는 for문으로도 아래와 같이 구현가능하다.
- 이를 상향식 계산이라한다.

  ```js
  function factorial(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
      sum *= i;
    }
    return sum;
  }
  ```

- 아래는 재귀를 이용한 상향식 계산이다.

  ```js
  function factorial2(number, i = 1, sum = 1) {
    if (i > number) return sum;
    return factorial2(number, i + 1, sum * i);
  }
  ```

- 재귀함수의 진정한 위력은 하향식 계산에서 발휘된다.
- 위의 상향식 계산을 하는 재귀함수는 for문으로 구현한 보다 못한 성능을 가지고 있다.
- 재귀함수는 하향식 계산에서만 사용하는 것이 좋다.

---

## 하향식 계산하기

- 하향식 계산을 하기 위해서는 하위 문제의 결과를 기반으로 현재 문제를 계산해야 한다.
- 만약 `[1,2,3,4,5]`이 배열의 합을 구한다고 했을 때 여기서 하위 문제가 무엇일까?
- 여기서 하위 문제는 1부터 4까지 들어있는 배열의 합을 구하는 문제이다.
- 그럼 이 하위 문제에 5만 더하게 되면 문제는 해결된다.

---

## 하향식 구현

- 배열의 합
  - [Code Link](../dev/sum_of_array.mjs)
- 배열의 길이
  - [Code Link](../dev/length_of_str.mjs)
- 지수함수
  - [Code Link](../dev/power.mjs)
