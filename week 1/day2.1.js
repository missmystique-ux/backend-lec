//promises.
// fetch('http://something.com').then().catch().finally()
const promiseOne = new Promise(function(resolve, reject){

    setTimeout(function () {
        console.log("Async task is complete")
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log("Promise is consumed")
})

new Promise(function(resolve, reject) {

    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function () {
    console.log("Async is resolved")
})

const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(function () {
        resolve({username: "pashma" , email: "123@gmail.com"})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {

    setTimeout(function () {
        let error = true
        if(!error){
            resolve({username: "pashma" , pass: "123"})
        }
        else
        {
            reject('error: something went wrong')
        }
    },1000)
})

const username = promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})
// console.log(username)

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function () {
        let error = true
        // let error = false
        if(!error){
            resolve({username: "javascript" , pass: "123"})
        }
        else
        {
            reject('error: JS went wrong ')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response)
}
 catch (error) {
        console.log(error)
    }
}
    
consumePromiseFive()

async function getAllUsers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data =await response.json()
   console.log(data)
// console.log(response)
   } catch (error) {
    console.log(error)
   }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

//  Promise — Success (Resolve)
const myPromise = new Promise((resolve, reject) => {
    const success = true; // false karke error check karein
    if (success) {
        resolve("Data mil gaya!");
    } else {
        reject("Error aaya!");
    }
});

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Promise with setTimeout
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Ali" });
        }, 2000);
    });
}

getUser().then((user) => console.log(user));