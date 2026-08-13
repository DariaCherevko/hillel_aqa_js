const car1 = {
    brand: "Hyundai",
    model: "Tucson",
    year: 2018
};

const car2 = {
    brand: "Hyundai",
    model: "Tucson",
    owner: 2013
};

const car3 = { ...car1, ...car2 };
console.log(car3);