import fs from "fs/promises"

// let a = await fs.readFile("harry.txt")
// console.log(a.toString());

let b = await fs.appendFile("harry.txt","JAI HIND\n")

let a = await fs.readFile("harry.txt")
console.log(a.toString());

let c = await fs.access("harry2.txt");
console.log(c);

