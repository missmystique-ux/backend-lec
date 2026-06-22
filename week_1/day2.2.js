//callbacks practise.
//  Simple Callback Function
function fetchData(callback) {
    console.log("Data fetch ho raha hai...");
    setTimeout(() => {
        const data = { id: 1, name: "Ayesha" };
        callback(data);
    }, 2000);
}

fetchData((user) => {
    console.log("User data:", user);
});

//  Async/Await practise
async function fetchUser() {
    try {
        const user = await getUser(); // Promise ka wait karega
        console.log("User fetched:", user);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchUser();

//  API Call Simulation (Important for AI APIs)
async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("API Data"), 2000);
    });
}

async function main() {
    console.log("Start");
    const data = await getData();
    console.log(data);
    console.log("End");
}

main(); // Start → (2 sec wait) → API Data → End