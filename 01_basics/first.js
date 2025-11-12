console.log("hello there");


// Basic console methods

// Simple logging
console.log("Basic message");
console.info("Info message");
console.warn("Warning message");
console.error("Error message");
console.log("Here is updated code in this file");


// Logging with multiple values
console.log("Name:", "John", "Age:", 25);

// Logging with variables
const user = {name: "John", age: 25};
console.log("User object:", user);

// Table format
const users = [
    {name: "John", age: 25},
    {name: "Jane", age: 23}
];
console.table(users);

// Time tracking
console.time("Timer");
// Some code here
console.timeEnd("Timer");

// Count
console.count("Click");
console.count("Click");

// Clear console
//console.clear();