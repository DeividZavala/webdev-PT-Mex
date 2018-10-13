
function getPokeData(e){
    axios.get(e.target.dataset.pokeurl)
        .then(res => {
            document.getElementById("name").innerHTML = res.data.name;
            document.getElementsByTagName("img")[0].src = res.data.sprites.front_default;
        })
}



axios.get("https://pokeapi.co/api/v2/pokemon/")
.then(res => {
    console.log(res.data);
    let list = document.getElementById("list")
    res.data.results.forEach(pokemon => {
        let li = document.createElement("li");
        li.dataset.pokeurl = pokemon.url;
        li.innerHTML = pokemon.name;
        li.onclick = getPokeData;
        list.appendChild(li);
    })
})


axios.get(`https://api.iextrading.com/1.0/stock/amzn/chart`)
    .then(function (response) {
      printTheChart(response.data);
    })
    .catch(function (error) {
      console.log(error);
  });

let printTheChart = ((stockData) => {
  let stockLabels = stockData.map( element => element.date);
  let stockPrice = stockData.map( element => element.close);
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
        label: "Stock Chart",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(155, 99, 112)',
        data: stockPrice,
      }]
    }
  });
});




/** Aqui empiza lo bueno del post y patch **/

var characters = [];

// me traigo todos los characters de inicio
axios.get("https://ih-crud-api.herokuapp.com/characters/")
.then(characters => {
    characters = characters.data;
    drawCharacters(characters);
})

// escucho si hay un submit
document.addEventListener("submit", handleSubmit);


// dibujo los personajes
function drawCharacters(arr){
    let list = document.getElementById("char");
    arr.forEach(character => {
        let li = document.createElement("li");
        li.innerHTML = character.name
        list.appendChild(li);
    })
}


// manejo la peticion
function handleSubmit(e) {
    e.preventDefault();
    let inputs = document.getElementsByTagName("input");
    let select = document.getElementsByTagName("select")

    let obj = {};
    
    // armo el objeto a mandar
    for(let i = 0; i < inputs.length; i++){
        obj[inputs[i].name] = inputs[i].value;
    }

    obj.debt = select[0].value;

    // mando los datos
    console.log(e.target.dataset.action);
    if(e.target.dataset.action == "update"){
        // actualizando datos
        /*axios.patch(`https://ih-crud-api.herokuapp.com/characters/${obj.id}`, obj)
        .then(res => {
            console.log("actualizado",res.data)
        })*/
    }else{
        axios.post("https://ih-crud-api.herokuapp.com/characters/", obj)
        .then(res => {
            characters.push(res.data)
            drawCharacters(characters);
        })
    }


}