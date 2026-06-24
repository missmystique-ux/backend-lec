const fs = require("fs")
// const fs = require("fs/promises")

console.log(fs)

console.log("Starting")
// fs.writeFileSync("Pashma.txt", "Pashma is a good Girl")
fs.writeFile("Pashma2.txt", "Pashma is a good Girl2", () => {
    console.log("done")
    fs.readFile("Pashma2.txt",(error, data) => {
        console.log(error,data.toString())
    })
})

fs.appendFile("Pashma.txt", "Pashmarobo", (e, d) => {
    console.log(d)
})
console.log("Ending")