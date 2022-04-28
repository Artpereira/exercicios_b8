let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const newArray = [comida = 'arroz', animal = 'gato',  bebida = 'água'];
console.log(newArray);

const [item1 = 'arroz', item2 = 'gato', item3 = 'água'] = newArray



console.log(item1, item2, item3); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo