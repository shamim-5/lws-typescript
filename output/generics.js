"use strict";
// generics
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mashrafi",
    age: 40,
    country: "Bangladesh",
});
let person = "Musfiq";
addID(person); // err
const response1 = {
    status: 200,
    type: "good",
    data: {
        name: "Test",
        something: "300",
    },
};
const response2 = {
    status: 200,
    type: "good",
    data: "test",
};
