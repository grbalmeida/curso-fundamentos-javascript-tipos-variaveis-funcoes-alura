// var

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

// let

let forma = 'retângulo';
let alturaLet = 5;
let comprimentoLet = 7;
let areaLet;

if (forma === 'retângulo') {
    areaLet = altura * comprimento;
} else {
    areaLet = (altura * comprimento) / 2;
}

console.log(areaLet);
// let areaLet; // Cannot access 'areaLet' before initialization

// const

const formaConst = 'triângulo';
const alturaConst = 5;
const comprimentoConst = 7;
let areaConst;

if (formaConst === 'quadrado') {
    areaConst = altura * comprimento;
} else {
    areaConst = (altura * comprimento) / 2;
}

console.log(areaConst)