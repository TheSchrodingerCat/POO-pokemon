//constructor de pokemones

function Pokemon(nombre,color,poderDeAtaque,nivelDeAmistad,vida){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = nivelDeAmistad;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return "Hola, soy: " + this.nombre + " y soy de color: " + this.color;
	};
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
		return this.nivelDeAmistad;
	};
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		var resultado;
		if (pokemon.vida <= 0){
			resultado = 0;
		} else {
			resultado = pokemon.vida;
		}
		return resultado;
	}
}

//cambiamos "const" por "var" porque los metodos aumentarAmistad() y atacar() se reasignan, lo cual genera conflictos con "const"
var pikachu = new Pokemon("Pikachu","amarillo",20,0,200);
var charmander = new Pokemon("Charmander","rojo",200,0,100);
var squirtle = new Pokemon("Squirtle","azul",150,0,50);
var bulbasaur = new Pokemon("Bulbasaur","verde",190,0,110);

var poke1 = document.getElementById("select1");
var poke2 = document.getElementById("select2");


function pelear(){
	var pokemon1 = poke1.options[poke1.selectedIndex].value;
	var pokemon2 = poke2.options[poke2.selectedIndex].value;

	var peleador1 = new Pokemon(pokemon1,pokemon1.color,50,pokemon1.nivelDeAmistad,200);
	var peleador2 = new Pokemon(pokemon2,pokemon2.color,70,pokemon2.nivelDeAmistad,150);
	
	if (peleador1.nombre == peleador2.nombre){
		alert("El pokemon no puede atacarse a sí mismo. Elige otro pokemon.");
	} else {
		peleador1.atacar(peleador2);

		var cuadrilatero = document.getElementById("ring");
		cuadrilatero.innerHTML = peleador1.nombre + " ataca a " + peleador2.nombre + " y su nivel de vida queda en " + peleador2.vida;
	}
}














/*var poke = document.getElementById("pokemon");
poke.innerHTML = pikachu.mostrarPokemon() + "<br \>" + "Nivel de amistad: " + pikachu.nivelDeAmistad + "<br \>" + 
	"Vida: " + pikachu.vida + "<br \>" + "Poder de ataque: " + pikachu.poderDeAtaque + "<br \>" + 
	"Nuevo nivel de amistad: " + pikachu.aumentarAmistad(30) + "<br \>" + 
	"Pikachu ataca a Charmander.<br \>Nivel de vida final: " + pikachu.atacar(charmander);*/
