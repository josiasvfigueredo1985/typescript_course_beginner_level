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
function add(n1: number, n2: number): number {// Number return
    return n1 + n2;
}

function hello(name: string): string {// String return
    return `Hello ${name}`;
}

function voidReturn(age: number, name: string): void {// Void return
    console.log(`${name} and ${age}`);
}
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
let item: unknown
let itemName: string

item = 10
item = "Apple"
if (item === 'string') {
    itemName = item
}

//Never
function generateError(message: string, code: number): never {
    throw { message: message, code: code }
}
//generateError("App crashed unexpectedly", 500)
console.log(generateError("App crashed unexpectedly", 500))
//The "never" type in TypeScript is used to represent situations where a value never occurs, either as a return type of a function or as a type in a union to indicate that there are no additional valid values.