const students = [
    { name: "Ali", age: 20, grade: "A", city: "Lahore" },
    { name: "Sara", age: 22, grade: "B", city: "Karachi" },
    { name: "Ahmed", age: 19, grade: "A+", city: "Islamabad" },
    { name: "Fatima", age: 21, grade: "A", city: "Lahore" }
];
// 1. Arrow function use karein jo sirf Lahore ke students return kareconst 
const getLahoreStudents=(studentsArray) => {
    return studentsArray.filter(student => student.city === "Lahore")
}
    const lahoreStudent = getLahoreStudents(students)
    console.log("Lahore students : ", lahoreStudent)

// 2. Template literals use karein jo har student ka introduction print kare
const introduceStudent = (studentsArray) => {
    studentsArray.forEach((student) => {
        console.log(`Hello My name is ${student.name}, I am ${student.age} years old, I scored ${student.grade} grade, I am from ${student.city} .`)
    })
}
introduceStudent(students)
// 3. Destructuring use karein har student ki details nikalne ke liye
students.forEach((student) => {
    const {name, age, grade, city} = student
    console.log(`Name : ${name}, Age: ${age}, Grade: ${grade}, City: ${city}`)
})
// 4. Spread operator use karein ek naya student add karne ke liye
const newStudent = {name: "Bilal", age: 23, grade: "B+", city: "Karachi"}
const updateStudents = [...students, newStudent]

console.log(updateStudents)
console.log(students)