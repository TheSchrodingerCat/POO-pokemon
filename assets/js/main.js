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
			resultado = 0 + " (pokemon atacado muerto)";
		} else {
			resultado = pokemon.vida + " (pokemon atacado listo para nuevo ataque)"
		}
		return resultado;
	}
}

//cambiamos "const" por "var" porque los metodos aumentarAmistad() y atacar() se reasignan, lo cual genera conflictos con "const"
var pikachu = new Pokemon("Pikachu","amarillo",200,0,200);
var charmander = new Pokemon("Charmander","rojo",20,0,100);


/*var poke = document.getElementById("pokemon");
poke.innerHTML = pikachu.mostrarPokemon() + "<br \>" + "Nivel de amistad: " + pikachu.nivelDeAmistad + "<br \>" + 
	"Vida: " + pikachu.vida + "<br \>" + "Poder de ataque: " + pikachu.poderDeAtaque + "<br \>" + 
	"Nuevo nivel de amistad: " + pikachu.aumentarAmistad(30) + "<br \>" + 
	"Pikachu ataca a Charmander.<br \>Nivel de vida final: " + pikachu.atacar(charmander);*/
