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
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['hola', 'Cra']));
function extractAndConvert(obj, key) {
    return `${String(key)}: ${obj[key]}`;
}
console.log(extractAndConvert({ name: 'Juan', age: 30 }, 'name'));
