"use strict";
// function signature
let myFunc11; // return void
let add; // return number
add = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, "minus"));
let userDetail;
userDetail = (id, user) => {
    console.log(user.age);
};
userDetail(5, { name: "sumit", age: 34 });
