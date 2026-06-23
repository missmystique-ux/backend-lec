//spread and rest(array and objects).
//array rest
function addNum(a,b,c,...other){
    // console.log(other)
    console.log(other[2])

    return a+b+c
}
console.log((addNum(2,3,4,6,7,8,9)))

//array spread
var names = ["hadi", "asad","ayyan"]

function getNames(name1,name2,name3){
    console.log(name1,name2,name3)
}

// getNames(names[0],names[1],names[2])
getNames(...names)
// getNames(names)

//object rest
var student = {
    name:"pashma",
    age:20,
    hobbies:["editing", "coding"]
}
// const age = student.age
// console.log(age)
// const {age} = student
// const {age,...rest} = student
const {...rest} = student
console.log(rest)

//spread
var newStudent = {
    ...student,
    age : 23
}
console.log(newStudent)