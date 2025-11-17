///////////////////////////DSA///////////////////////////////////

// ## Step 1: Node banta hai

// ```js

// class Node {
//   constructor(value) {
//     this.value = value;  // data
//     this.next = null;    // next pointer
//   }
// }

// // Step 2: LinkedList banti hai

// class LinkedList {
//   constructor() {
//     this.head = null; // starting node
//   }
// }


// // Step 3: Insert at end

// insert(value) {
//   let newNode = new Node(value);

//   if (this.head === null) {
//     this.head = newNode; // list empty thi
//     return;
//   }

//   let temp = this.head; // first node
//   while (temp.next !== null) { // jab tak last node nahi
//     temp = temp.next;
//   }

//   temp.next = newNode; // last node ka next = new node
// }


// // Step 4: Print the list

// print() {
//   let temp = this.head;

//   while (temp !== null) {
//     console.log(temp.value);
//     temp = temp.next;
//   }
// }

////////////////////////////////////////////////////////////////

// class Node {
//   constructor(value) {
//     this.value = value;   // data store karega
//     this.next = null;     // next node ka pointer
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null; // list ka start (first node)
//   }

//   // Insert at end
//   insert(value) {
//     let newNode = new Node(value);

//     if (this.head === null) {
//       this.head = newNode;   // agar list empty ho
//       return;
//     }

//     let temp = this.head;
//     while (temp.next !== null) {
//       temp = temp.next;
//     }

//     temp.next = newNode;
//   }

//   // ⭐ Tumhara Task: FIND function ⭐
//   find(value) {
//     let temp = this.head;

//     while (temp !== null) {
//       if (temp.value === value) {
//         return true; // agar mil gaya
//       }
//       temp = temp.next; // next node par jao
//     }

//     return false; // end tak nahi mila
//   }
// }


// let list = new LinkedList();

// list.insert(10);
// list.insert(20);
// list.insert(30);

// console.log(list.find(20)); // true
// console.log(list.find(50)); // false


//////////////////////////////////////////////////////////////////


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);
//     if (this.head === null) {
//       this.head = newNode;
//       return;
//     }
//     let temp = this.head;
//     while (temp.next !== null) {
//       temp = temp.next;
//     }
//     temp.next = newNode;
//   }

//   // Reverse the linked list in-place
//   reverse() {
//     let prev = null;           // previous node pointer (initially null)
//     let current = this.head;   // current node pointer starts at head

//     while (current !== null) {
//       let nextNode = current.next; // 1) store next node
//       current.next = prev;         // 2) reverse the link: current points to previous
//       prev = current;              // 3) move prev one step forward
//       current = nextNode;          // 4) move current one step forward (using stored next)
//     }

//     this.head = prev; // finally head becomes prev (which is the original last node)
//   }

//   // helper to print list as array for easy view
//   toArray() {
//     let res = [];
//     let temp = this.head;
//     while (temp !== null) {
//       res.push(temp.value);
//       temp = temp.next;
//     }
//     return res;
//   }
// }

// // Test reverse
// let list = new LinkedList();
// list.insert(10);
// list.insert(20);
// list.insert(30);
// console.log("Before:", list.toArray()); // [10,20,30]

// list.reverse();

// console.log("After:", list.toArray()); // [30,20,10]


///////////////////////////DSA///////////////////////////////////