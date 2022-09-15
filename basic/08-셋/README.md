## 셋(Set)

- 데이터의 중복을 허용하지 않는 자료구조
- Set은 해시 테이블을 이용하기 때문에 쉽게 구현할 수 있다.  
  또한 해시 테이블을 사용한다고 해서 해시 셋이라고도 불린다.
- 셋은 해시 테이블의 value 값은 사용하지 않고 key만 사용해서 구현한다.  
  key가 key임과 동시에 데이터로 쓰이는 것.

---

## Set의 추상자료형

- add(data) - 데이터 삽입
- isContain(data) - 데이터 체크
- remove(data) - 데이터 제거
- clear() - 셋 비우기
- isEmpty() - 셋이 비었는지 체크
- printAll() - 모든 데이터 출력

---

## Set의 구현

- [Set 구현 Code Link](../dev/HashSet.mjs)
- [구현 Test Code Link](../dev/test_set.mjs)
