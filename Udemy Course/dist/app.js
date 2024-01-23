"use strict";
const names = [];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done');
    }, 1000);
});
promise.then(data => {
    console.log(data);
});
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObj = merge({ name: 'pepe', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.name);
