// enums
enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponseStatus<T> {
  status: number;
  type: RType;
  data: T;
}

const res1: APIResponseStatus<object> = {
  status: 200,
  type: RType.UNAUTHENTICATED, // type: 2 
  data: {
    name: "Test",
    something: "300",
  },
};
const res2: APIResponseStatus<string> = {
  status: 200,
  type: RType.SUCCESS, // type: 0 [which was success index come from enum]
  data: "test",
};

console.log(res1);
console.log(res2);
