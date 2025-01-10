// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// modelo 1
function inverterString(str) {
    // Converter a string em um array de caracteres
    let caracteres = str.split('');
    // Inicializar as variáveis de início e fim
    let inicio = 0;
    let fim = caracteres.length - 1;

    // Trocar os caracteres de início e fim até o meio da string
    while (inicio < fim) {
        let temp = caracteres[inicio];
        caracteres[inicio] = caracteres[fim];
        caracteres[fim] = temp;
        inicio++;
        fim--;
    }

    // Converter o array de caracteres de volta para uma string
    return caracteres.join('');
}

// String a ser invertida (você pode alterar esta string ou obter entrada do usuário)
let stringParaInverter = "Olá, Mundo!";
let stringInvertida = inverterString(stringParaInverter);

console.log("String original:", stringParaInverter);
console.log("String invertida:", stringInvertida);

console.log("--------------------------------------------------------------------------------------")

//modelo 2
function inverterString(str) {
    let stringInvertida2 = "";
    
    // Percorrer a string de trás para frente e construir a string invertida
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida2 += str[i];
    }

    return stringInvertida2;
}

// String a ser invertida (você pode alterar esta string ou obter entrada do usuário)
let stringParaInverter2 = "Olá, Mundo2!";
let resultado2 = inverterString(stringParaInverter2);

console.log("String original:", stringParaInverter2);
console.log("String invertida:", resultado2);
