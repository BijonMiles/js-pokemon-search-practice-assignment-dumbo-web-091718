document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  let i = 3;

  fetch('http://localhost:3000/pokemon')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json)

    json.forEach((attribute) => {
      let pContainer = document.querySelector('#pokemon-container');
      pContainer.innerHTML += `<img src='${attribute["sprites"]["front"]}' id="${attribute['id']}" />`;
       // console.log(pContainer.innerHTML);
      // console.log(attribute["sprites"]["front"])
      // id.setAttribute('id', `num-${counter++}`);
      // pContainer.children[i].id = `${attribute['id']}`;
      // i++

      // debugger
      // let findImage = document.getElementById(`${attribute['id']}`)
      // console.log(findImage);


        // debugger
          // if (document.getElementById(i).src === event.target) {
            // pContainer.children[i]
            // event.target.remove()
            // debugger
            // document.getElementById(i).src = `<img src='${attribute["sprites"]["back"]}'/>`;
            // event.target.innerHTML += `<img src='${attribute["sprites"]["back"]}'/>`;
          // }

          // }




        // alert("I was clicked!")

      })
      document.addEventListener('click', (event) => {
        if (event.target.tagName === "IMG") {
        // event.preventDefault();
        // debugger
        console.log('click');

        // debugger
        let foundPoke = json.find(pokemon => {
          return pokemon.id === parseInt(event.target.id)
        })

        if (event.target.src === foundPoke.sprites.front){
          // change src to back
          event.target.src = foundPoke.sprites.back
        } else {
          // change src to front
          event.target.src = foundPoke.sprites.front
        }
      }
    })
  })
})
