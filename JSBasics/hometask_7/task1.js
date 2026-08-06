function handleEven(num) {
    console.log(`${num} number is even`);
}

function handleOdd(num) {
    console.log(`${num} number is odd`);
};

function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven(num);
    } else {
        handleOdd(num);
    }
}

handleNum(4, handleEven, handleOdd);
handleNum(7, handleEven, handleOdd);
