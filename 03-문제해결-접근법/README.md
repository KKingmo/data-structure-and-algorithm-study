# 문제 해결 접근법

- ## 1. 문제의 이해

  - 많은 사람들은 시간적 제약이 있는 상황에서 즉시 문제를 해결해야 한다는 생각에 문제를 제대로 이해하지 않고 진행하곤 한다.
    그저 코드 몇 줄을 빨리 입력하여 짧은 시간 내에 무언가 진행한다는 느낌은 들 수 있겠지만 여기서 한 걸음 물러서서 직면한 과제를 확실히 이해하는 것이 정말 중요하다.

    > 문제이해를 위한 체크 사항
    >
    > 1. 문제를 내 방식대로 다시 생각할 수 있나?.
    >
    >    ex. `덧셈을 구현해라`
    >
    > 2. 입력값이 어떻게 되는가? 어떤 형태인가?
    >
    >    ex. `int?`,`floats?`,`큰 숫자의 경우 문자열을 반환하도록 할 것인가?`
    >
    > 3. 문제의 solution에서 나올 출력값은 어떻게 되는가? 어떤 형태인가?
    >
    >    ex. `int?`,`float?`,`string?`
    >
    > 4. 입력값이 출력값을 결정할 수 있는가?(문제를 해결할 충분한 정보가 주어졌는가?)
    >
    > 5. 문제에서 정말 중요한 것이 무엇인가?
    >
    >    복잡한 문제일수록 단계별로 생각하는 것이 중요하다.

  ***

- ## 2. 구체적인 예를 살펴보는 단계

  > 1. 문제를 맞닥뜨리면 우선 해야할 일은 간단한 예시로 시작하는 것이다.
  >
  >    입력값에 따른 출력값의 예시
  >
  > 2. 더 복잡한 예시로 나아가기
  >
  >    경계해야할 조건에 대한 예시. 빈 입력값, 유효하지 않은 입력값이 주어진 상황해서 문제를 어떻게 해결해야 할지에 대한 능력을 갖추기 위함. 사용자가 유효하지 않은 값을 입력하면 어떻게 될지를 항상 생각할 수 있어야한다.

  - 경계 조건에 대해 생각하기.

    ```js
    // Write a function which takes in a string and returns counts of each character in the string.
    charCount("aaaa"); // {a:4}
    // 여기서 할 수 있는 생각.
    // 여기서 전달한 문자만 반환 할 것인가?,
    // {a:4, b:0, c:0}과 같이 전달되지 않은 문자는 0으로 미리 설정해 놓을 것인가?
    // 모든 문자를 미리 0으로 설정해놓으면 작업을 간단히 진행할 수 있다.
    // a와 b와 같은 문자를 추가할 필요없이 그저 증가만 시키면 되기 때문이다.
    charCount("hello"); // {h:1, e:1, l:2, o:1}
    charCount("my phone number is 182763");
    // 만약 이것이 입력 값 일떄 어떻게 반환되도록 해야할까?
    // 공백도 고려해야하는가? 숫자도 포함해야 하는가?
    charCount("Hello hi");
    // 이와 같을 때는 객체에 대문자 H 하나와 소문자 h 하나가 출력되도록 하려면 어떻게 해야할까?
    charCount("");
    // 이럴 때는 어떻게 반환해야할까? null, false, undefined나 에러를 반환하도록 할 수 있을까?
    ```

  ***

- ## 3. 문제 세분화

  문제 세분화란 문제에 대한 단계들을 실제로 수행하면서 작성하는 것이다.
  문제를 풀 때 밟아야할 단계들 명확하게 작성해 보는 것이 좋다.
  아주 세세하게 작성할 필요도, 모든 라인마다 작성할 필요도 없다.
  그저 해결책의 기본적인 구성 요소만 작성하면 된다.
  이렇게 함으로써 코드를 실제로 입력하기 전에 한 번 생각해 볼 수 있다.
  자유분방하게 코드를 대충 떠오르는대로 입력하는 게 아니라 감이 잡히지 않거나,
  이해되지 않는 부분들을 파악하거나 이해할 수 있게 해준다.

  - 문제 세분화 예시

    ```js
    // Write a function which takes in a string and returns counts of each character in the string.
    charCount("aaaa");
    /* {
      a: 4
    } */
    charCount("hello");
    /* {
      h: 1,
      e: 1,
      l: 2,
      o: 1
    } */
    charCount("Your PIN number is 1234!");
    /* {
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      b: 1,
      e: 1,
      i: 2,
      m: 1,
      n: 2,
      o: 1,
      p: 1,
      r: 2,
      s: 1,
      u: 2,
      y: 1
    } */
    function charCount(str) {
      // do something
      // return an object with keys that are lowercase alphanumeric characters in the string; values sould be the number
    }
    function charCount(str) {
      // 마지막에 반환할 객체를 만들자.
      // str의 각 글자에 대해 loop 수행.
      //   만약 글자가 숫자 또는 글자 이고 result의 key에 존재한다면 value + 1
      //   만약 글자가 숫자 또는 글자 이고 result의 key에 존재하지 않는다면, 생성 후 value 1
      //   만약 글자가 공백이나 "."이면 pass.
      // 객체 반환
    }
    ```

  - 이러한 pseudo-code 작성은 문제를 풀지 못하였을 때, 자신이 어떻게 문제 접근하였는지 나타낼 수 있는 방법이기도 하다.

  ***

- ## 4. 해결 방법 단순화

  문제를 풀다 어려워 혼란에 빠지게 된다면
  잠깐 동안 어려운 부분을 무시하고 단순한 해결책을 작성한 다음 다시 어려운 부분에 대해 생각하자.

  예를들면 위의 예시 코드에서 아래와 같이 작업을 할 때
  공백이나 "."일 때의 예외처리 코드작성이 힘들다면 pass하는 정도와
  loop돌리는 게 어렵다면 일단 하드코딩으로 일일이 객체에 삽입하는 코드를 작성한 후
  어떻게 반복문을 돌릴지 실마리를 찾는 정도가 해결 방법 단순화라 보면된다.

  ```js
  // ...

  function charCount(str) {
    // 마지막에 반환할 객체를 만들자.
    let result = {};
    // str의 각 글자에 대해 loop 수행.
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      // 만약 문자가 숫자 또는 글자 이고 result의 key에 존재한다면 value + 1
      if (result[char] > 0) {
        result[char]++;
      }
      // 만약 문자가 숫자 또는 글자 이고 result의 key에 존재하지 않는다면, 생성 후 value 1
      else {
        result[char] = 1;
      }
      //   만약 글자가 공백이나 "."이면 pass.
    }
    // 객체 반환
    return result;
  }
  ```

  ***

- ## 5. Look Back and Refactor

  - 리팩토링을 위한 질문들
    - 결과를 확인할 수 있는지?
    - 결과를 다른 방식으로 도출할 수 있는지?
    - 한 눈에 보고 이해할 수 있는지?
    - 결과나 방법을 다른 문제에도 적용할 수 있는지?
      - 이전에 접했던 다른 문제와의 유사점이 있는지 자문해보는 것이 좋다.
    - 해결책의 성능을 향상시킬 수 있는지?
    - 어떻게 더 나은 성능을 이끌어낼 수 있는지?
      - loop가 많이 중첩된 경우와 같이 성능 저하를 일으키는 부분 개선.
    - 회사의 지침에 따라 코드를 작성하는지?
  - 위의 예시 코드를 리팩토링 해보자.

    ```js
    // 문자가 소문자 a-z,혹은 0-9에 해당하는지 검사하는 정규식을 통해
    // 문자가 공백, "."와 같은 경계조건일 때를 검사
    function charCount(str) {
      let obj = {};
      for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
          if (obj[char] > 0) {
            obj[char]++;
          } else {
            obj[char] = 1;
          }
        }
      }
      return obj;
    }

    // for-of 루프를 적용하면 숫자를 받아 개별 문자로 바꾸는 불필요한 단계를 거치지 않아도 된다.
    // if else 문을 논리연산자를 사용해 단순화.
    function charCount(str) {
      let obj = {};
      for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
          obj[char] = ++obj[char] || 1;
        }
      }
      return obj;
    }
    ```

  - 여기서 더 나아가 정규식은 수행 중인 작업과 사용 중인 브라우저에 따라 성능이 달라질 수 있기에
    charCodeAt을 사용하면 성능을 향상할 수 있다.

    ```js
    function charCount(str) {
      let obj = {};
      for (let char of str) {
        if (isAlphaNumeric(char)) {
          obj[char] = ++obj[char] || 1;
        }
      }
      return obj;
    }

    function isAlphaNumeric(str) {
      let code = char.charCodeAt(0);
      if (
        !(code > 47 && code < 58) && // 0-9
        !(code > 64 && code < 91) && // A-Z
        !(code > 96 && code < 123) // a-z
      ) {
        return false;
      }
      return true;
    }
    ```
