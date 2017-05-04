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
			resultado = 0 + " (pokemon muerto)"
		} else {
			resultado = pokemon.vida
		}
		return resultado;
	}
}

//cambiamos "const" por "var" porque los metodos aumentarAmistad() y atacar()
var pikachu = new Pokemon("Pikachu","amarillo",200,0,200);
var charmander = new Pokemon("Charmander","rojo",20,0,100);

//console.log("pikachu ataca a charmander: " + Pikachu.atacar(Charmander));
//console.log("vida de charmander " + Charmander.vida);

console.log(pikachu.mostrarPokemon() + "Nivel de amistad: " + pikachu.nivelDeAmistad + "\n" + 
	pikachu.vida + "\n" + pikachu.poderDeAtaque + "\n" + "\n" + 
	pikachu.aumentarAmistad(30) + "\n" + pikachu.atacar(charmander));