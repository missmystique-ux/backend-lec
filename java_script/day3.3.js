//array methods 2

const marvel_heroes = ["Batman", "Spiderman", "Ironman"]

const dc_heroes = ["superman", "flash", "thor"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

//concat

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

//spread


const all_new_heros = [...marvel_heroes,...dc_heroes]
// const all_new_heros = [...marvel_heroes,...dc_heroes,..something more_add]
console.log(all_new_heros)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr = anotherArr.flat(Infinity)
console.log(real_another_arr)

console.log(Array.isArray("pashma"))

console.log(Array.from("pashma"))

console.log(Array.from({name: "pashma"})) 


let score_1 = 100
let score_2 = 200
let score_3 = 300

console.log(Array.of(score_1,score_2,score_3))



