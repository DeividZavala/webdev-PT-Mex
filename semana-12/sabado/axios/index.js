
axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
.then(res => {
    console.log(res.data);
    document.getElementById("name").innerHTML = res.data.name;
    document.getElementsByTagName("img")[0].src = res.data.sprites.front_default;
})