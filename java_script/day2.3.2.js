const sayDate = function (str) {
    console.log(str, Date.now())
}
const intervalId = setInterval(sayDate, 1000, "hii")

clearInterval(intervalId)

//generate random color.
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        color+=hex[(Math.floor(Math.random()*16))]
    }
    return color
}
// console.log(randomColor())
let intervalId1
const startChangingColor = function () {
    if(!intervalId1){
        intervalId1 = setInterval(changeBgColor, 1000)
    }
    function changeBgColor(){
        document.body.style.background = randomColor()
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId1)
    intervalId1 = null
}

document.querySelector('#start').
addEventListener("click", startChangingColor)

document.querySelector('#stop').
addEventListener("click", stopChangingColor)