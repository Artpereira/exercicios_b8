// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points);
// [ 1, 5, 10, 25, 40, 100 ]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => b - a);
// console.log(points);
// [ 100, 40, 25, 10, 5, 1 ]


// Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people.sort((a, b) => a.age - b.age);
  
  console.log(people);