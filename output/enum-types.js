"use strict";
// enums
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const res1 = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: {
        name: "Test",
        something: "300",
    },
};
const res2 = {
    status: 200,
    type: RType.SUCCESS,
    data: "test",
};
console.log(res1);
console.log(res2);
