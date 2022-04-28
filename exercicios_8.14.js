// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


const getEven = (number) => number % 2 === 0;
// confere se o valor que for passado para o parâmetro number é divisível por 2

const sumPair = (valorAtual, valorFinal) => valorAtual + valorFinal;
// faz uma soma de dois parâmetros que serão passados como valorAtual e valorFinal

const sumNumbers = (item) => item.filter(getEven).reduce(sumPair)
// armazena na função as execuções das funções passadas acima 

console.log(sumNumbers(numbers));
// sumNumbers recebe o array como parâmetro para todas as outras funções