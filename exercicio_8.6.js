const numbers = [19, 21, 11, 5, 45, 22, 15];

const findDivisibleBy3And5 = () => {
item = numbers.find((nums) => nums % 3 === 0 && nums % 5 === 0); 
// console.log(item);
return item;
}

console.log(findDivisibleBy3And5())
