
// var
function hola(){

	var a = 20;
	

	if(true){
		var a = 30;
		console.log(a);
	}

console.log(a)

}


// let
function hola(){

	let a = 20;
	

	if(true){
		let a = 30;
		console.log(a);
	}

console.log(a)

}


// template interpolation
console.log(`Hola ${name}!!`)

// decontruction
var obj = {name: "David", edadd:21, casado: false}
let {edadd, name} = obj;


// spread operator
arr = ["gus", "lucas", ...arr];
var arr = ["david", "Diego", "oscar", "manuel"]

// map
let foods = ["tacos", "pozole", "bisteck", "gordas"];
let capsFoods = foods.map(singleFood => singleFood.toUpperCase());

// filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evens = numbers.filter(function(singleNumber) {
  return singleNumber % 2 === 0;
});