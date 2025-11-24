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


console.log(CalculateCartPrice2(200,300,400));
