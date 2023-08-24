function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("param");

// expressão de função

const soma = function(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 1));

// diferença principal

console.log(apresentar()); // olá (permite invocação antes de inicialização) - HOISTING

function apresentar() {
    return "olá";
}

console.log(somaAntesInicializar(1, 1)); // Cannot access 'somaAntesInicializar' before initialization

const somaAntesInicializar = function(num1, num2) {
    return num1 + num2;
}