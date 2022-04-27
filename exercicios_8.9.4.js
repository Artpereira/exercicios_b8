const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  function getNamedBook(){
    const bookName = Object.values(expectedResult)
    bookName.forEach((item) => item.name.length === 26)
    
    return bookName;
  
  }
  console.log(getNamedBook());
