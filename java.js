// 1. Sum of all digits of a number. For example, 123 -> 1+2+3=6

// const num = prompt("enter a numbers");
//     let sum = 0;
  
//     for (let i = 0; i < num.length; i++) {
//       sum += parseInt(num[i]);
//     }
//     console.log(sum);

// 2. Sum of the range of 2 numbers. For example, num1=2, num2=5 -> 2+3+4+5=14

//      let num1 = 2;
//      let num2 = 5;
//     let sum = 0;
  
//     for (let i = num1; i <= num2; i++) {
//       sum += i;
//     }
//   console.log(sum)

// 3. Calculate the average of numbers given in an array.

// let num = [10,20,30];
// let sum = 0;
// for(let i = 0; i < num.length; i++){
//     sum = sum + num[i];

// }
// let average = sum / num.length;
// console.log(average);

// 4. Compare strings by count of characters. For example, car and bat are equal. car and care are not.

// const str1 = prompt("Enter a first string");
// const str2 = prompt("Enter a secand string");
// if(str1 === str2){
//     console.log("the string characters are equal");
// }
// else{
//     console.log("the string characters are not equal");
// }
  


// 5. Swap the string's first and last character. For example, name -> eamn

// let str = "name";

// if (str.length < 1) {
//   console.log(str);
// } else {
//   let firstChar = str[0];
//   let lastChar = str[str.length - 1];
//   let newStr = str.slice(1, -1);
//   newStr = lastChar + newStr + firstChar;
//   console.log(newStr);
// }