// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); // true
console.log(numero === numeroString); // false

console.log(numero + numeroString); // 456456

// conversão explícita
console.log(numero + Number(numeroString)); // 912

const numeroStringNaN = Number("456a");

console.log(numeroStringNaN); // NaN