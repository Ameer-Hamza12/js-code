// Object destructuring

// Destructuring is a short way to pull values out of objects or arrays into named variables.

const user = {
    name:"Hamza",
    age: 25,
    email: "hamza@example.com"
}

// Destructuring assignment

const {name, age, email} = user;

console.log(name); // Hamza
console.log(age);  // 25
console.log(email); //



//Rest Opeator with destructuring an object

const userdata = {
    name: "Hamza",
    age: 27,
    email: "Hamza@gmail.com",
    city: "GRW",
    country: "Pakistan"
}

const {...rest} = userdata;
console.log(rest);


