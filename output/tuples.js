"use strict";
// normal behaviour
let y = [3, "hello", { p: 3 }];
y[0] = "world";
y[1] = 5;
y[2] = { p: 2 };
y[2] = false; // err cause of theres is n't any boolean value exist in this array
// tuples
let z = [4, "world", { t: 1 }];
