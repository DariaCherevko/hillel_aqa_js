function checkOrder(available, ordered) {
    if (ordered <= 0 || isNaN(ordered)) {
        console.log("Your order is empty");
        return;
    }

    if (available < ordered) {
        console.log("Your order is too large, we don't have enough goods.");
        return;
    }

    console.log("Your order is accepted");
}

checkOrder(100, 101);
checkOrder(100, 15);
checkOrder(100, "test");
checkOrder(100, 0);