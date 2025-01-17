// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


function fibonacci(maxValue) {
    let fibSequence = [0, 1];
    let nextValue = fibSequence[0] + fibSequence[1];
    
    while (nextValue <= maxValue) {
        fibSequence.push(nextValue);
        nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    }
    
    return fibSequence;
}


function isFibonacci(num) {
    let fibSequence = fibonacci(num);
    return fibSequence.includes(num);
}


let numberToCheck = 21;


if (isFibonacci(numberToCheck)) {
    console.log(`O número ${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numberToCheck} não pertence à sequência de Fibonacci.`);
}
