let price = 100
let tax = 0.18

let totalprice = price + (price * tax)

let total = price + tax


// console.log("totalprice:", totalprice);
// console.log("total:", total);


let productPrice = 1500;
let shipping = 200;
let finalPrice = productPrice + shipping;

// console.log("Your total is:", finalPrice);


//Comparison Operators


let age = 18

// console.log(age>17);

// if(age == 18){
//     console.log("User can inter to our site");
// } else{
//     console.log("User can not inter to our site");
// }



let userAge = 16;

if (userAge >= 18) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}


//Logical Operators

let loggedIn = true
let role = "admin"


if (loggedIn && role === "admin") {
    console.log("Welcome Admin");
}else{
    console.log("Access Denied");
}


let isloggedIn = false

if(!isloggedIn){
    console.log("User is not logged in");
}
