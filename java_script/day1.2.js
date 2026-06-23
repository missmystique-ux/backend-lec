//template literals.
const name = "Pashma"
const repoCount = 50

// console.log(name + repoCount + "Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Pashma')
console.log(gameName[3])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('m'))

// const newString = gameName.substring( 0, 3)
// console.log(newString)

const newString = gameName.substring( -6, 3)
console.log(newString)

// const otherString = gameName.slice(1, 3)
// console.log(otherString)

const otherString = gameName.slice(-6, 3)
console.log(otherString)

const newStringOne = "  pashma  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "http://pashma.com/pashma%20palwasha"
console.log(url.replace('%20','-'))

console.log(url.includes('pashma'))
console.log(url.includes('pushpa'))

const gameName1 = new String('pashma-pc-com')
console.log(gameName1.split('-'))

