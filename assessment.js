// Write a function that takes in a string and returns it when reversed
// let food = “eating”


function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  let food = "eating";
  let reversedFood = reverseString(food);
  
  console.log(reversedFood); 

//   Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23

function findTarget(num, target) {
    if (num.includes(target)) {
      console.log(target);
    } else {
      console.log(null);
    }
 }
  let num=[2,8,0,23,5,45,76];
  target=23;
  console.log(findTarget(num,target))

//   Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for (let i = 2000; i <= 2023; i++) {
  if (i % 2 === 0 ) {
    console.log(i + " is a leap year");
  } else {
    console.log(i+ " is not a leap year");
  }
}


  

// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function multiplyByFour(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 4);
  }

  return result;
}

const numArray = [12, 87, 45, 75, 23, 64, 73];
const multipliedArray = multiplyByFour(numArray);
console.log(multipliedArray);

// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]



function stringTonumber(arr){
  let result=[];
  for(let i=0;i<arr.length;i++){
    
  result.push(arr[i]*1);      
  //  change by implicit coerasion

  }
  return result;
}
const nums=["10","24","45","56","67"];
const turnedArray=stringTonumber(nums)
console.log(turnedArray)