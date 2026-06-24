import fs from "fs/promises"

let a = await fs.readFile("Pashma.txt")

let b = await fs.appendFile("Pashma.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)