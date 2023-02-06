/**=====================================
             explicit types 
   =====================================*/
// normal variable
let a: string;
let b: number;

a = "sumit";
a = 54; // error

b = 34;
b = "sumit"; // error

// array
let c: string[] = [];

c.push("sumit");
c.push(34); // error

// object
let g: {
  name: string;
  age: number;
  adult: true;
};
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
let d: string | number;
d = "sumit" + 23;

// array
let e: (string | number)[] = [];
e.push(34);

// object
let f: object;
f = {
  name: "sumit",
  age: 34,
  adult: true,
};
f = [1, 2, "sumit"]; // in js => array is a servent type of object


