// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Arthur', 'da Silva', 'Pereira'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));