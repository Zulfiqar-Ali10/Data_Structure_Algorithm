// Queue //////////////////////////////////// Concept (FIFO)

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   // Add (rear)
//   enqueue(value) {
//     this.items.push(value);
//   }

//   // Remove (front)
//   dequeue() {
//     return this.items.shift();
//   }

//   front() {
//     return this.items[0];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

// let q = new Queue();

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);

// console.log(q.dequeue()); // 10
// console.log(q.front());   // 20



////////////////////////////////////////////////////////////////////


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.front = null; // first
//     this.rear = null;  // last
//   }

//   enqueue(value) {
//     let newNode = new Node(value);

//     if (this.rear === null) {
//       this.front = this.rear = newNode;
//       return;
//     }

//     this.rear.next = newNode;
//     this.rear = newNode;
//   }

//   dequeue() {
//     if (this.front === null) return null;

//     let removed = this.front;
//     this.front = this.front.next;

//     if (this.front === null) {
//       this.rear = null;
//     }

//     return removed.value;
//   }
// }


//////////////////////////////////////////////////////////////////


// // Customer ko represent karne ke liye ek class
// class Customer {
//   constructor(name) {
//     this.name = name;   // customer ka naam store hoga
//   }
// }

// // Queue class (Bank queue)
// class BankQueue {
//   constructor() {
//     this.line = [];   // yahan customers ki list (queue) store hogi
//   }

//   // Customer ko queue me add karna (rear se)
//   joinQueue(customer) {
//     this.line.push(customer);  // push end me add karta hai
//     console.log(customer.name + " ne line join ki.");
//   }

//   // Queue se customer ko nikalna (front se)
//   serveCustomer() {
//     if (this.line.length === 0) {
//       console.log("Koi customer nahi hai line me.");
//       return;
//     }

//     let served = this.line.shift();  // shift() front se element nikalta hai
//     console.log(served.name + " ko service dedee gayi.");
//   }

//   // Line me konse customer hain wo dekhna
//   showQueue() {
//     console.log("Current Queue:");
//     console.log(this.line.map(c => c.name)); // names print
//   }
// }


// // -----------------------
// // REAL LIFE WORKING
// // -----------------------

// let bank = new BankQueue();

// // 3 log bank me aate hain
// bank.joinQueue(new Customer("Ali"));
// bank.joinQueue(new Customer("Ahmed"));
// bank.joinQueue(new Customer("Sara"));

// bank.showQueue(); // queue dikhate hain

// // Bank teller pehla customer ko serve karta hai
// bank.serveCustomer();  // Ali

// bank.showQueue();

// // Doosra customer service leta hai
// bank.serveCustomer();  // Ahmed

// bank.showQueue();


// Queue //////////////////////////////////// Concept (FIFO)