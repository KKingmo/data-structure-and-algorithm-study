## 큐

- First In First Out(FIFO)으로 먼저 들어간 데이터가 먼저 나오는 규칙이 있다.
- 큐가 적용된 상황 :

  - 마트 계산대에서 줄을 서서 계산할 때 먼저 줄선 손님이 먼저 계산하고 나간다.
  - 운영체제가 프로세스의 작업요청을 들어온 순서대로 큐에넣고, CPU가 들어온 순서대로 작업을 처리한다.  
    이를 FIFO스케쥴링이라 한다.

- 단방향 연결리스트로 큐를 구현하면 마지막 노드를 참조할 때 O(n)의 작업이 필요하기 때문에,  
  이중 연결리스트를 사용하면 성능을 향상할 수 있다.

---

## 큐의 구현

- 큐의 추상자료형
  - enqueue : 데이터 삽입
  - dequeue : 데이터 제거
  - front : 데이터 참조
  - isEmpty : 비었는지 확인
- 구현
  - [이중 연결리스트 구현 Code Link](../dev/DoublyLinkedList.mjs)
  - [큐 구현 Code Link](../dev/Queue.mjs)
  - [구현 Test Code Link](../dev/test_queue.mjs)
