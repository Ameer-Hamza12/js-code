let users = [
  { id: 1, name: "Hamza" },
  { id: 2, name: "Ali" },
];


let user = users.find((user) => user.id ===1)
console.log(user);



let fruits = ["Apple", "Banana", "Cherry", "Date"]


//filter data from an array


let result = fruits.filter( (fruit) => fruit.startsWith("A"))
console.log(result);


let number = [10, 25, 30, 45, 50, 60, 75, 80]

let res = number.filter((num) => num > 50)
 console.log(res);
 
