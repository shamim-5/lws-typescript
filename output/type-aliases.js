"use strict";
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
userDetails(23, { name: "sumit", age: 34 });
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name} `);
};
sayHello({ name: "sumit", age: 34 });
