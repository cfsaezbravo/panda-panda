var panda = ['assets/img/panda1.jpg', 'assets/img/panda2.jpg', 'assets/img/panda3.jpg', 'assets/img/panda4.jpg'];

var fotos= document.getElementById("fotos-panda");

function impimirFotos(){
	panda.forEach(function(el){
	var contFotos = document.createElement("img");
	var span = document.createElement("span");
	var spanX = document.createTextNode("X");
	span.appendChild(spanX);
	contFotos.setAttribute("src", el);
	contFotos.setAttribute("class", "image");
	fotos.appendChild(contFotos)
	fotos.appendChild(span);
	})	
}

impimirFotos()

var erase = Array.from(document.getElementsByTagName("span"));
var imagen = Array.from(document.getElementsByClassName("image"));
erase.forEach(function(e,i){	
	e.addEventListener("click", function(){

	var seccionFoto = document.getElementById("fotos-panda");
	seccionFoto.removeChild(this)
	seccionFoto.removeChild(imagen[i]);
	})
});

var restaurar = document.getElementById("restaurar");
restaurar.addEventListener("click", impimirFotos);
var extincion = document.getElementById("extincion");
var origen = document.getElementById("origen");
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

extincion.addEventListener("click", function(){
	texto1.classList.toggle("on")
})

origen.addEventListener("click", function(){
	texto1.classList.toggle("off")
})