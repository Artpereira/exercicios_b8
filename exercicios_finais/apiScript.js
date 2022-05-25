// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const body = document.body

function append(piada) {
  const creatDiv = document.createElement('div')
  creatDiv.innerText = piada
  body.appendChild(creatDiv)


}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const date = data.joke
      append(date);
    });
};

window.onload = () => fetchJoke();