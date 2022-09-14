// 연결리스트는 데이터를 담은 노드를 서로 연결하는 구조이다.
// 이를 위해서 가장 먼저 Node 생성.
class Node {
  // 클래스를 인스턴스화 했을 때 자동으로 호출되는 생성자를 만든다. constructor
  // 생성자의 매개변수로 data와 next를 만든다.
  // next의 기본값을 null로 하여 입력하지않으면 null로 할당한다.
  constructor(data, next = null) {
    // 매개변수들을 초기화해준다.
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // head : 연결리스트의 시작 노드를 가리킨다.
    this.head = null;
    // count : 총 저장된 노드의 수
    this.count = 0;
  }

  // 노드의 시작부터 끝까지 나아가며 콘솔출력한다.
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  // 모든 데이터 제거
  // head가 null을 가르키게 해서 참조하는 것을 없게만들어주고 count를 0으로 비워준다..
  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    // 존재하지 않는 인덱스에 삽입하는 경우 예외처리
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let newNode = new Node(data);

    // 리스트에서 가장 앞부분에 삽입하는 경우와 그렇지 않은 경우
    if (index == 0) {
      // newNode는 시작노드를 가르키게하고, 시작노드를 newNode로 한다.
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 입력받은 index-1 노드가 newNode를 가리키고 newNode는 이전의 노드의 next를 가르키게한다.
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  // 마지막 삽입
  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다.");
    }

    let currentNode = this.head;

    if (index == 0) {
      let deleteNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deleteNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

// 다른 파일에서 참조할 수 있도록 export
export { Node, LinkedList };
