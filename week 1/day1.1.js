//Arrow functions
const user = {
    username : "Pashma",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`)
        //console.log(this)
    }
}

user.welcomeMessage()
user.username = "Palwasha"
user.welcomeMessage()

console.log(this)

function chai(){
    let username = "Pashma"
    console.log(this.username)
}

chai()

// const chai = function () {
//     let username = "Pashma"
//     console.log(this.username)
//  }

//  chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
//  console.log(addTwo(3 , 4))

//  const addTwo = (num1, num2)=> (num1 + num2)

//  console.log(addTwo(3 , 4))

 const addTwo = (num1, num2)=> ({username : "Pashma"})

 console.log(addTwo(3 , 4))

 const myArray = [2,3,5,7,8]

//  myArray.forEach(()=>{

//  })

//  myArray.forEach(()=>())

 myArray.forEach(function () {})

//  function add (a,b) {
//       return a+b
//  }

//  console.log(add(4,5))

 const add = (a,b) => (a + b)
  console.log(add(4,5))

  const square = (a) => (a*a)
  console.log(square(4))

  const array = () => {
    return myArray[0]
  }

console.log(array())

const product = (a , b) => (a*b)
  console.log(product(4 , 5))

