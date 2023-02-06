"use strict";
/**=====================================
             explicit types
   =====================================*/
// normal variable
let a;
let b;
a = "sumit";
a = 54; // error
b = 34;
b = "sumit"; // error
// array
let c = [];
c.push("sumit");
c.push(34); // error
// object
let g;
g = {
    name: "sumit",
    age: 34,
    adult: false, // err
};
g = [1, 2, "sumit"]; // err
/**=====================================
             union types
   =====================================*/
// normal variable
let d;
d = "sumit" + 23;
// array
let e = [];
e.push(34);
// object
let f;
f = {
    name: "sumit",
    age: 34,
    adult: true,
};
f = [1, 2, "sumit"]; // in js => array is a servent type of object
