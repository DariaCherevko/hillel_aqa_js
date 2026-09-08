console.log("'1'");
console.log("'2'");
console.log("'3'");

console.log("start");
setTimeout(() => {
    console.log("run code") // settime out helps to run code after a certain time, but the rest of the code will continue
}, 2000);
console.log("end");


// async is used with callback
function message() {
    console.log("Hello");
}
setTimeout(message(), 1000);


// to avoid the callback hell we can use promise, promise `promise` that the response will be returned

const promise = new Promise((resolve, reject) => { // parameter as good tone used resolve and reject
    const success = false;

    if (success) {
        resolve("OK")
    } else {
        reject("error")
    }
})

promise.then((result) => { // .then is used when the result is successful
    console.log(result)
})
    .catch((error) => {
        console.error(error) // .catch is used when  need to handle error
    })
    .finally(() => {
        console.log("Finally") // finally always run not depending what is returned, e.g. clear temporary data etc.
    })
// each .then, .catch, .finally return new promise. It means that the previous result is remembered

Promise.resolve(5) // ланцюжок промісив
    .then((result) => {
        return result * 2
    })
    .then((result) => {
        return result * 5
    })
    .then((result) => {
        console.log(result)
    })


// Promise api

const promise = Promise.resolve("Suscess result"); // exisitng method that return valid result

promise.then((result) => {
    console.log(result)
});


// async ... await  is more comfortable and modern syntax to use promise in playwright/cypress

getUser()
    .then((user) => {
        return getOrders(user.id);
    })
    .then((orders) => {
        return getOrderDetails(orders[0].id);
    })
    .then((details) => {
        console.log(details);
    })
    .catch((error){
        console.log(error);
    });

/////

async function showOrderDetails() {
    try {
        const user = await getUser();
        const orders = await getOrders(user.id);
        const details = await getOrderDetails(orders[0].id);

        console.log(details);
    }
    catch (error) {
        console.log(error);
    }
}

///

async function name(parameter) {
    return "hello"
}

const result = name();
console.log(result); // result is returned as promise 

//or
function name() {
    return Promise.resolve("Hello")
}
name().then((message) => { console.log(message) }) // but here the result is returned as a string

//with await
async function name(parameter) {
    const message = await name();
    console.log(message);
}

name();

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data retrieved");
        }, 4000);
    });

}

async function showData() {
    console.log("Start");
    try {
        const result = await getData();
        console.log(result);
    }
    catch (error) {
        console.log("error:", error)
    } finally {
        console.log("Finish");
    }
}
showData()

//fetch api

fetch("https://jsonplaceholder.typicode.com/users/1") // by defaul run get request

const result = fetch("https://jsonplaceholder.typicode.com/users/1")
console.log(result) // return pending as the requst is still run, to handle it properly need to use async..await

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/-1");

        if (!response.ok) {
            throw new Error(`Http error! status : ${response.status}`)
        } // is a good practice to add if with handling error with appropriate message to reuse them in catch

        const user = await response.json() // user is js object, it will return json body of the response
        //    console.log(response.ok);
        console.log(user);
    } catch (error) {
        console.log(error.message)
    }
}
getUser()

//post method in fetch api

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: "Daria",
                    age: 28,
                    email: "String@gmail.com"
                })

            });

        if (!response.ok) {
            throw new Error(`Http error! status : ${response.status}`)
        } // is a good practice to add if with handling error with appropriate message to reuse them in catch
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log(error.message)
    }
}
getUser()