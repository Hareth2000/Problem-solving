function reverseArray(arr) {
    let stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); 

/////////////////////////////////////////////Q2

class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop() || "Queue is empty";
    }

    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1] || "Queue is empty";
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

const q = new QueueUsingStacks();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue()); 
console.log(q.peek());    
console.log(q.dequeue()); 
console.log(q.dequeue()); 
console.log(q.isEmpty()); 
///////////////////////////////////////Q3

function sumArray(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5])); 

//////////////////////////////////////Q4
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

printList(head); 
head = reverseLinkedList(head);
printList(head); 

/////////////////////////////////////////Q5

function deleteMiddleNode(head) {
    if (!head || !head.next) return null; 

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (prev !== null) {
        prev.next = slow.next; 
    }

    return head;
}

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

printList(head2); 
head2 = deleteMiddleNode(head2);
printList(head2); 
