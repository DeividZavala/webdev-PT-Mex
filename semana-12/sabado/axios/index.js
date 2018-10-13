
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