// function signature
let myFunc11: (x: string, y: string) => void; // return void

let add: (x: number, y: number) => number; // return number
add = (a: number, b: number) => {
  return a + b;
};

let calculation: (x: number, y: number, z: string) => number;
calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};
console.log(calculation(5, 6, "minus"));

let userDetail: (id: number | string, userInfo: { name: string; age: number }) => void;
userDetail = (id: number | string, user: { name: string; age: number }) => {
  console.log(user.age);
};
userDetail(5, { name: "sumit", age: 34 });
