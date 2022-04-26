const rightAnswer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswer = ['A', 'C', 'N.A', 'D', 'A', 'A', 'D', 'N.A', 'D', 'C'];
let somaPontos = 0;





rightAnswer.forEach((respostaValida, index) => {
    if (rightAnswer[index] === studentAnswer[index]) {
        somaPontos += 1
    } else {
        somaPontos = somaPontos - 0.5;
    }
    })

console.log(somaPontos);

