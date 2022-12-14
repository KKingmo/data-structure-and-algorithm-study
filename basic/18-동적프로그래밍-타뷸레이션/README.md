## 동적프로그래밍 - 타뷸레이션

- 메모이제이션 vs 타뷸레이션
  - 메모이제이션
    - 재귀덕분에 하향식 계산 방식으로 어려운 문제를 간단하게 해결할 수 있음
    - 중복 계산을 하지 않아서 속도가 빠름
  - 타뷸레이션
    - 상향식 계산 방식으로 계산에 필요한 모든 값을 전부 계산 후 테이블에 저장해둠
- 재귀함수로 구현한 피보나치 수열에 타뷸레이션 적용 후 성능비교
  - [Code Link](../dev/fibonacci_tabulation.mjs)
  - 위 `Code Link`에서 fibonacci2는 여러 번의 함수 호출로 메모리 공간에 스택을 차지하고  
    메모이제이션을 위한 해시 테이블 공간까지 차지하기 때문에 메모리를 더 많이 사용한다.  
    반면 fibonacci3는 적은 메모리 사용인데도 불구하고 빠른 시간을 보인다.
- 동적프로그래밍이 필요한 분할 정복 문제를 풀 때 메모이제이션과 타뷸레이션 중 어떤 것이 더 좋은 접근 방식일까?  
  분할 정복 문제를 해결할 때 재귀가 더 직관적이라면 메모이제이션을 이용하는 것이 유리하다.  
  하지만 어떤 문제는 재귀가 더 직관적이기 않을 수도 있다.  
  그럴 때는 상향식 접근인 타뷸레이션을 이용하면 메모리도 절약하고 속도도 빠르게 해결할 수 있다.
