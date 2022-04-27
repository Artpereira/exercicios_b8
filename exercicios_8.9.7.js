const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateArray = (arr1, arr2) => arr1.map((item, index) => (
    {[item]: arr2[index]}
 ))
// updatArray recebe os arrays como parâmetro e executa a função map em products 
// que cria um novo objeto contendo o [item] (valor do item do primeiro array) e junto adiciona o arr2[index] (valor do item do index correspondente)


const arrayClean = updateArray(products, prices);
console.log(arrayClean);