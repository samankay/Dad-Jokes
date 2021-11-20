const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")
jokeBtn.addEventListener("click", genereteJoke)
genereteJoke()

function genereteJoke(){
  fetch("https://icanhazdadjoke.com", {
    headers: {
      "accept": "application/json"
    }
  }).then(res => res.json())
  .then((data) => {
    jokeEl.innerHTML = data.joke
  })
}
