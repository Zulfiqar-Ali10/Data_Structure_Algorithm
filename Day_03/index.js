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



//////////////////////////////////////////////////

// function reversedStr(str){
//     let reversed = "";

//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i];
//     }

//     return reversed
// }

// console.log(reversedStr("Hello"));


// function reversed(str){
//     return str.split("").reverse().join();
// }

// console.log(reversed("Madam"));

///////////////////////////////////////////////////////

// function subString(str, sub){
//     return str.includes(sub);

// }


// console.log(subString("hello world", "world"));

///////////////////////////////////////////////////////////

// function reverseWords(str){
//    let words = str.split(" ");
//     console.log(words);
   
//    let reverse = words.reverse();
//    console.log(reverse);

//    let join = reverse.join();
   
    
//     return join;
// }

// console.log(reverseWords("I Love Javascript"));


///////////////////////////////////////////////////////////////////

// function countSubString(str, sub) {
//   let count = 0;       // substring kitni baar mili uska counter
//   let position = 0;    // kaha se search start karna hai

//   while (true) {
//     // indexOf(sub, start) substring ko dhoondhta hai aur uska index return karta hai
//     position = str.indexOf(sub, position);

//     // agar nahi mila (indexOf -1 deta hai) to loop se bahar nikal jao
//     if (position === -1) {
//       break;
//     }

//     // mil gaya to count badha do
//     count++;

//     // next search ke liye ek step aage se dhoondhna start karo
//     position = position + 1;
//   }

//   return count; // total baar milne ki ginti return karo
// }

// console.log(countSubString("lolol", "lo")); // Output: 2
// console.log(countSubString("aaaaa", "aa")); // Output: 4
// console.log(countSubString("abaaa", "ab")); // Output: 
// console.log(countSubString("ababaa", "ab")); // Output: 




//////////////////////////DSA ///////////////////////////////////////////