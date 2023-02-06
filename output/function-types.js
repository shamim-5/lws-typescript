"use strict";
//  function
let myFunc;
myFunc = () => {
    console.log("Hello");
};
myFunc = 5; // err
//===set function parameter types====================================================
const myFunc2 = (a, b) => {
    console.log(`Hello ${a} ${b}`);
};
myFunc2("World", 23);
//===function optional parameter====================================================
const myFunc3 = (a, b, c) => {
    console.log(c); // undefined
    console.log(`Hello ${a} ${b}`);
};
myFunc3("World", 23); // c is optional
//===function optional parameter set default value====================================================
const myFunc4 = (a, b, c = "default value") => {
    console.log(c); // default value
    console.log(`Hello ${a} ${b}`);
};
myFunc4("World", 23); // c is optional also has default value
//===undefined vs void====================================================
/**
 * in js function return __undefined__ by default.
 *             ==> undefined means it's not defined but it's a value
 * in ts function return __void__ by default.
 *             ==> void means compleately absence the value. nothing have.
 *
 */
//===defineing return type====================================================
const myFunc5 = (a, b, c = "true") => {
    return a + b; // err 
};
myFunc5(25, 23);
//=======================================================
//=======================================================
