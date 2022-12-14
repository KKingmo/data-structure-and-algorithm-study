## 스택

- 스택은 아주 단순한 규칙을 가지고 있는 리스트이다.
- First In Last Out(FILO)으로 먼저 들어간 데이터가 나중에 나오는 규칙이 있다.
- 연결리스트에서의 스택 : 삽입과 삭제시 첫 번째 인덱스에만 삽입하고, 첫 번째 인덱스만 삭제한다.
- 스택이 적용된 상황 :
  - 포토샵이나 그림판으로 그림을 그릴 때 "ctrl+z"로 되돌리곤 하는데 되돌릴 때마다 가장 최근에 삽입한 데이터를 꺼내오는 방식이 사용된다.
  - 자바스크립트에서 중괄호, 소괄호를 검사할 때 사용된다. `{`, `(`를 스택을 넣은 후 `)`, `}`를 만났을 때 대응하는 괄호가 스택의 처음에 있는지 검사하는 방식

---

## 스택의 구현

- 스택의 추상자료형
  - push : 데이터 삽입
  - pop : 데이터 제거
  - peek : 데이터 참조
  - isEmpty : 비었는지 체크
- 구현
  - [연결리스트 구현 Code Link](../dev/LinkedList.mjs)
  - [스택 구현 Code Link](../dev/stack.mjs)
  - [구현 Test Code Link](../dev/test_stack.mjs)
