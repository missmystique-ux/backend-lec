let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not Allowed.")
}

let num1 = parseInt(a)
let num2 = parseInt(b)

let sum = parseInt(a) + parseInt(b)

function main() {
    let x = 1
    try {
        console.log("The sum is ", sum * x)
        return false
    }
    catch (error) {
        console.log("error agya hy!")
        return true
    }
    finally
        {
            console.log("files are closed")
        }
        
    }

let c = main()
