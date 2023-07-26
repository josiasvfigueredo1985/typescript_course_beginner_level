// Types in TypeScript
// let price = 40
// let item = "apple"
// let inStore = true
// let value
// value = 10
// value = "apple"

//Arrays
// let values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(values);
// let fruit: string[] = ["apple", "orange", "banana"]
// console.log(fruits);

//Tuples
// let tuple: [number, string] = [1, "apple"]// Tuples helps to define the order and types of tuples
// let pet: [string, number, boolean] = ['Tom', 2, true]
// console.log(tuple)
// console.log(pet)

//Enum
// enum UserRole {
//     adm = 1, read = 2, backup = 0
// }

// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     gender: "Male",
//     // role: "Admin" // User attribute can be replaced with an enum value
//     role: UserRole.adm
// }
// console.log(user);

//Return types
// function add(n1: number, n2: number): number {// Number return
//     return n1 + n2;
// }

// function hello(name: string): string {// String return
//     return `Hello ${name}`;
// }

// function voidReturn(age: number, name: string): void {// Void return
//     console.log(`${name} and ${age}`);
// }
// voidReturn(17, 'Tom');

//Objects
// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     gender: "Male",
//     role: "Admin"
// }

// console.log(user.age);

//Unknown
// let item: unknown
// let itemName: string
/*
Unknown type represents values that are of an unknown type at compile-time. Variables of type unknown can hold any value, similar to any, but with stricter type-checking rules.
*/
// item = 10
// item = "Apple"
// if (item === 'string') {
//     itemName = item
// }

//Never
// function generateError(message: string, code: number): never {
//     throw { message: message, code: code }
// }
//generateError("App crashed unexpectedly", 500)
//console.log(generateError("App crashed unexpectedly", 500))
//The "never" type in TypeScript is used to represent situations where a value never occurs, either as a return type of a function or as a type in a union to indicate that there are no additional valid values.

var arr = [
  [1, 2, 3],
  ["a", "b", "c"],
];

// for (let index = 0; index <= arr.length; index++) {
//     const element = arr[0][index];
//     console.log(element);
//     console.log(arr[1][index]);
// }

// Alias
type Users = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  role: string;
};
const user: Users = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "Male",
  role: "Admin",
};
// console.log(user)

//Union
//Enable the possibility of multiple returns from this function
// function add(input1: string | number, input2: string | number): string | number {
//     if (typeof input1 === 'string' && typeof input2 === 'string') {
//         return `${input1} ${input2}`;
//     } else if (typeof input1 === 'number' && typeof input2 === 'number') {
//         return input1 + input2;
//     } else {
//         throw new Error('Invalid input');
//     }
// }
// console.log(add(1, 3));
// console.log(add("Hello world", '!'));

//Literals
// Specify a range of values to a variable
let price: number; //Normal way to use a variable
let prices: 10 | 20 | 30;
prices = 10;
prices = 20;
prices = 30;
// prices = 12 //Error
//Also can be used to strings
let roles: "Admin" | "Dev" | "QA";
roles = "Admin";
roles = "Dev";
roles = "QA";
//roles = 'Tester'//Error

//Intersection
// Is possible to intersect 2 objects
type User = {
  firstName: string;
  age: number;
  role: string;
};

type JobRole = {
  title: string;
  salary: number;
};

type Employee = User & JobRole;

const employee: Employee = {
  firstName: "John",
  age: 30,
  role: "Admin",
  title: "Software Engineer",
  salary: 1000,
};

// console.log(employee);
