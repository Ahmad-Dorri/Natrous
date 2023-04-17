"use strict";
const concories = new Map([
  ["GB", "pound"],
  ["$", "dollar"],
  ["rial", "toman"],
]);

concories.forEach(function (value, key, map) {
  console.log(`${value} = ${key}`);
});

const myArr = ["hi", "hello", "bye"];
myArr.forEach(function (value, index, arr) {
  console.log(`${index} = ${value}`);
});

for (const [key, value] of myArr.entries()) {
  console.log(`${key} == ${value}`);
}
