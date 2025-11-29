//simple function example

function name(){
    // console.log("Hello from function");
}

name();


// function with parameters

function greetUser(username) {
    // console.log("Hello:" + username);
    
}

greetUser("Hamza");


//normal function vrs arrow function

//normal function

function add(a,b){
    return a+b;
}

// console.log(add(5,10));

//arrow function

const sum = (a,b) => {
    return a+b;
}

// console.log(sum(15,25));



//simple function

function sayhi(){
    // console.log("Hi there!");
}

sayhi();


//arrow function

const sayhello = () =>{
    // console.log("Hello there!");
}

// scope of functions

// Global Scope

let globalVar = "I am global";

function checkscope(){
    console.log(globalVar);
    
}

checkscope();


// Function Scope

function functionScope(){
    let functionVar = "I am local to function";
    console.log(functionVar);
}
functionScope();


// Lexical Scope


function outer() {
  let name = "Hamza";

  function inner() {
    console.log(name); // 👍 can access
  }

  inner();
}

outer();



function outer2() {
    let name = "Hamza";

    function inner2() {
        console.log(name);
        

    }
}

outer2();




// reset operator in function
//after adding this operation all prinited values will be in array form

function CalculateCartPrice(val1, val2, ...number){
    return number;
}

console.log(CalculateCartPrice(100, 200, 300, 400));


function CalculateCartPrice2(...number){
    return number;
}


//console.log(CalculateCartPrice2(200,300,400));


//Modern Arrow  Funtions syntax


const adding = (a, b) => a+b;
console.log(add(10, 20));


const myname = () => "Hamza";


// Arrow function syntax

let myage = () =>{
   // return 25;  //optional
}


// short form arrow function

let age = (a, b) => a+b;

age(10, 15);


setTimeout(function() {
  //console.log("Hello after 5 seconds");
}, 5000);


const greeting = () =>{
    console.log("Hello after 3 seconds");
}
//setTimeout(greeting, 3000);



let numbers = (a, b) =>{
    return a+b;
}
//console.log(numbers(10, 15));


//react map

let nums = [1,2,3,4,5,6,7,8,9];

nums.map( n=> n*2 );

console.log(nums);


function multiply(a, b){
    return a*b;
}

console.log(multiply(5, 10));


let agemy = () => {
    return 30;
}