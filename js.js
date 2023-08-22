function mostrar(param) {
	div = document.getElementById("Apagada");
	div.style.display = "none";
	div = document.getElementById("Encendida");
	div.style.display = "none";
	div = document.getElementById(param);
	div.style.display = "flex";
}
