// String()

let telefone = 12341234;
console.log("O telefone é " + String(telefone));
console.log("O telefone é " + telefone.toString());

let usuarioConectado = false;
console.log(String(usuarioConectado)); // false
usuarioConectado = true;
console.log(String(usuarioConectado)); // true

// Number()

let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // 50

console.log(+largura * +altura); // 50

let meuNome = "leonardo";
console.log(Number(meuNome)); // NaN
console.log(+meuNome); // NaN

usuarioConectado = false;
console.log(Number(usuarioConectado)); // 0
usuarioConectado = true;
console.log(Number(usuarioConectado)); // 1