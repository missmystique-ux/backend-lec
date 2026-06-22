//filter

// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })
// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num > 4)
const newNums = myNums.filter((num) => {
   return num > 4
})
console.log(newNums)

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]

//   const userBooks = books.filter((bk) => {
//     return bk.genre === 'History'
//   })
const userBooks = books.filter((bk) => {
    return bk.publish >=1995 && bk.genre === 'History'
  })
  console.log(userBooks)

  //map

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbers = myNumbers.map((nums) => {
  return nums + 10
})
console.log(newNumbers)

//chaining

const newNumbers1 = myNumbers
.map((nums) => {
  return nums * 10
})
.map((nums) => {
  return nums +1
})
.filter((nums) => {
  return nums >=40
})
console.log(newNumbers1)

//reduce

const myNums1 = [1,2,3]
const myTotal = myNums1.reduce(function (acc, currVal) {
  console.log(`acc: ${acc} and currVal: ${currVal}`)
  return acc + currVal
}, 0)
console.log(myTotal)

const shoppngCart = [
  {
    itemName : "JS",
    price: 2999
  },
  {
    itemName : "py course",
    price: 999
  },
  {
    itemName : "mobile dev courseS",
    price: 5999
  },
  {
    itemName : "data science course",
    price: 12999
  }
]

const priceToPay = shoppngCart.reduce((acc, item) => {
  return acc + item.price
}, 0)
console.log(priceToPay)