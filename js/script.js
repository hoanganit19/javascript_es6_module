/*
export default
export named

import default
import named
*/
// import getB, { a as _a, getA, Home as HomePage } from "./modules/home.js";
import * as home from "./modules/home.js";
// console.log(a);
// console.log(getA());
// console.log(new Home().render());
// console.log(_a);
// console.log(new HomePage().render());
// console.log(getB());
let { Home, a, getA, default: getB, getProducts } = home;
console.log(new Home().render());
console.log(getA());
console.log(a);
console.log(getB());
console.log(getProducts());
