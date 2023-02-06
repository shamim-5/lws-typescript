// generics

const addID = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "Mashrafi",
  age: 40,
  country: "Bangladesh",
});

let person = "Musfiq";
addID(person); // err

// generics with interface
interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: "good",
  data: {
    name: "Test",
    something: "300",
  },
};
const response2: APIResponse<string> = {
  status: 200,
  type: "good",
  data: "test",
};
