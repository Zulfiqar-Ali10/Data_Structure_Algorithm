///////////////////Stack // Concept (LIFO) //////////////////

// class Stack {
//   constructor() {
//     this.items = []; // stack storage
//   }

//   // Add element (top par)
//   push(value) {
//     this.items.push(value);
//   }

//   // Remove last added element
//   pop() {
//     if (this.items.length === 0) {
//       return null; 
//     }
//     return this.items.pop();
//   }

//   // Return top element
//   peek() {
//     if (this.items.length === 0) {
//       return null;
//     }
//     return this.items[this.items.length - 1];
//   }

//   // Check empty
//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// // Test
// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.pop());  // 30
// console.log(stack.peek()); // 20


///////////////////////////////////////////////////////


// function isValidParenthesis(str) {
//   let stack = [];
//   let map = {
//     ")" : "(",
//     "]" : "[",
//     "}" : "{"
//   };

//   for (let char of str) {
//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char); // opening bracket → push
//     } else {
//       if (stack.pop() !== map[char]) {
//         return false; // mismatch
//       }
//     }
//   }

//   return stack.length === 0; // agar kuch bacha nahi, valid
// }

// console.log(isValidParenthesis("{[()]}"));  // true
// console.log(isValidParenthesis("{[(])}"));  // false


///////////////////Stack // Concept (LIFO) //////////////////