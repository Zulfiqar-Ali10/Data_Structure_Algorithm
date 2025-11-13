//////////////////////////DSA ///////////////////////////////////////////

// function palindrome (str) {
//        let reversed = "";

//        for(let i = str.length - 1; i >= 0; i--) {
//           reversed += str[i];
//        }

//        if(str === reversed){
//         console.log("Str Is Palindrome");
//        }else{
//         console.log("Str is Not Palindrome");
        
//        }
// }

// palindrome("madam")
// palindrome("hello")

////////////Second Way /////////////////////////////////////////////////////

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome("level"));
// console.log(isPalindrome("world")); 

////////////Second Way /////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////

// const prompt = require("prompt-sync")();

// let input = prompt("Enter palindrome Word, ");
// input = input.toLowerCase().replaceAll(" ", "");

// function palindrome(input){
//   let reversed = "";

//   for(let i = input.length - 1; i >= 0; i--){
//     reversed += input[i];
//   }

//   if(input === reversed){
//     console.log("Palindrome");
//   }else{
//     console.log("Not Palindrome");
//   }

// }

// palindrome("")

/////////////////////////////////////////////////////////////


// function charFrequency(str) {
//   let freq = {}; // empty object for counting

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (freq[char]) {      
//       freq[char]++; // agar pehle se hai to +1
//     } else {
//       freq[char] = 1; // agar nahi hai to 1 se start
//     }
//   }

//   console.log(freq);
// }

// charFrequency("helloh");





//////////////////////////DSA ///////////////////////////////////////////