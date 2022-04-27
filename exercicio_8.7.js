const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const count = names.find((item) => item.length === 5)
  console.log(count);
  return count;
  
}

console.log(findNameWithFiveLetters());