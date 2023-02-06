"use strict";
// interfaces
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
drawRectangle({
    width: 30,
    length: 20,
    height: 45, // err
});
let threeDOptions = {
    width: 30,
    length: 20,
    height: 45,
};
drawRectangle(threeDOptions);
