function datosContenedor() {
	
  	this.tipo = "";
  	this.classe = "";
	this.enunciado ="";
	this.temps = "";
	this.calc = "";
	this.sinaleatoriedad = "";
	this.respuestaunica ="";
	
	this.masinfo = new masInfo();
	this.plataforma = new plataforma();
	
 }
 
function plataforma()
{
  	this.grado = "";
  	this.titulo = "";
	this.lang ="";	

}
function masInfo()
{
  	this.inicio = "";
  	this.text = "";
}

function datosMotor() {
	
	this.enunciado = "";
	this.mostrarpalabras = "";
	this.tamano = "";
	this.correctas = new Array();
	this.falsas = new Array();
	
}

function palabra(){
	
	this.id ="";
	this.palabra = "";
	this.fila = "";
	this.columna = "";
	this.direccion = "";
}
 



