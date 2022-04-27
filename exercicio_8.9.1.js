const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (name, arr) => 
arr.some((nome) => nome === name)

console.log(hasName('Ana', names))