/////////////RECURSION DSA /////////////////////////////////////

// function factorial(n) {

//   // BASE CASE
//   if (n === 1) {
//     return 1; // yahan recursion ruk jati hai
//   }

//   // RECURSIVE CASE
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

//////////////////////////////////////////////////////////

// function countdown(n){

//     if(n === 0){
//         return;
//     }

//     console.log(n);
//     countdown( n - 1 )
// }

// countdown(5)

///////////////////////////////////////////////////////////////

// function sum(n){

//     if(n === 0){
//         return 0;
//     }
    
//     console.log(n);
    
//     return n + sum(n - 1)
// }

// console.log(sum(5));


////////////////////////////////////////////////

// function reverse(str) {
//   if (str === "") return "";   // base case

//   return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse("abc")); // "cba"


////////////////////////////////////////////////

// function isEven(n){

//     if( n === 0 ) return true;
//     if( n === 1 ) return false;

//     return isEven( n - 2 );
// }

// console.log(isEven(10));
// console.log(isEven(7));


////////////////////////////////////////////////

// function M(n) {
//   if (n > 100) return n - 10;

//   return M(M(n + 11));
// }

// console.log(M(99)); // 91

/////////////RECURSION DSA /////////////////////////////////////