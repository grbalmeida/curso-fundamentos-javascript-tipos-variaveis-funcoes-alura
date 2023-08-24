function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

console.log(apresentar("Ju")); // Meu nome é Ju
console.log(apresentarArrow("Ju")); // Meu nome é Ju

console.log(soma(2, 2)); // 4

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'Somente números de 1 a 9';
    } else {
        return num1 + num2;
    }
};

console.log(somaNumerosPequenos(12, 9)); // Somente números de 1 a 9
console.log(somaNumerosPequenos(9, 12)); // Somente números de 1 a 9
console.log(somaNumerosPequenos(2, 3)); // 5