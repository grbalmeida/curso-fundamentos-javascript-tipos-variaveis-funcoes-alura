// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false); // true
console.log("" == false); // true
console.log(null == false); // false
console.log(undefined == false); // false
console.log(1 == true); // true

let minhaVar;
let varNull = null;

console.log(minhaVar); // undefined
console.log(varNull); // null
console.log(minhaVar == undefined); // true

let numero = 3;
let texto = "Alura";

console.log(typeof minhaVar); // undefined
console.log(typeof varNull); // object
console.log(typeof numero); // number
console.log(typeof texto); // string