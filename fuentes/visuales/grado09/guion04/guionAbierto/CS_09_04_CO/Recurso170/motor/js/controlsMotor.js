
function Crucigrama( lletres )
{
	//console.log(palabra);
	this.contenedor = new createjs.Container();
	this.lletresBox = new Array();
	this.rects = new Array();
	
	for( var i = 0; i < Motor.datosXML.tamano; i++)
	{
		for( var j = 0; j < Motor.datosXML.tamano; j++)
		{
			var id = i*Motor.datosXML.tamano + j;
			var lletra = new LletraBox( id, lletres[id] );
			if(Motor.datosXML.mostrarpalabras == 1){
			     lletra.contenedor.x = j * 30 + 70 + (434-Motor.datosXML.tamano*30)/2 ;
			     lletra.contenedor.y = i * 30 + 25 + (394-Motor.datosXML.tamano*30)/2;
			 }else{
			     lletra.contenedor.x = j * 30 + 70 + (804-Motor.datosXML.tamano*30)/2 ;
                 lletra.contenedor.y = i * 30 + 25 + (394-Motor.datosXML.tamano*30)/2;
			 }
			this.contenedor.addChild( lletra.contenedor );
			this.lletresBox.push(lletra);	
		}
	}
}

Crucigrama.prototype.unblock = function( lletra ){

	for( var key2 in this.lletresBox)
	{
		this.lletresBox[key2].unblock();
	}
}

Crucigrama.prototype.block = function( lletra ){

	for( var key2 in this.lletresBox)
	{
		this.lletresBox[key2].block();
	}
}

Crucigrama.prototype.clear = function( lletra ){

	for( var key2 in this.lletresBox)
	{
		this.lletresBox[key2].clear();
	}
	for( var key3 in this.rects ){
		this.contenedor.removeChild( this.rects[key3] );
	}
	this.rects= new Array();

}

Crucigrama.prototype.corregir = function(){
	var result=true;
	for( var key3 in this.lletresBox)
	{
		if(this.lletresBox[key3].pressed)
				this.lletresBox[key3].error();
	}
	return result;
}
Crucigrama.prototype.solucio = function( indexs, tipus)
{
	//Agafem coordenades de la primera lletra de la paraula
	var lletraIni = false;
	for(key3 in this.lletresBox)
	{
		if( this.lletresBox[key3].id == indexs[0] )
			lletraIni =  this.lletresBox[key3];
		if(indexs.indexOf( this.lletresBox[key3].id )>=0)
		{
			// treiem errors de les paraules correctes
			this.lletresBox[key3].clear();
		}
	}
	var xini = lletraIni.contenedor.x;
	var yini = lletraIni.contenedor.y;
	
	//Agafem coordenades de la ultima lletra de la paraula
	var lletraFi = false;
	for(key3 in this.lletresBox)
	{
		if( this.lletresBox[key3].id == indexs[indexs.length-1] )
			lletraFi =  this.lletresBox[key3];
	}
	var xfi = lletraFi.contenedor.x;
	var yfi = lletraFi.contenedor.y;
	
	// creem les boxes d'error o encert
	var rect = new createjs.Shape();
	var color = (tipus)? "#41A62A" : "#E1001A"; 
	this.drawWordsBound(rect, indexs, xini, xfi, yini, yfi, color);
	
	this.rects.push(rect);
	this.contenedor.addChild( rect );
}
Crucigrama.prototype.drawWordsBound = function(rect, indexs, xini, xfi, yini, yfi, color)
{
	if( xfi > xini  && yfi == yini ) rect.graphics.beginStroke(color).setStrokeStyle(4).drawRoundRect( xini, yini, Math.abs( xfi-xini)+24, 24, 6);
	else if( xfi < xini && yfi == yini )rect.graphics.beginStroke(color).setStrokeStyle(4).drawRoundRect( xfi, yfi, Math.abs( xini-xfi)+24, 24, 6);
	else if( xfi == xini && yfi > yini ) rect.graphics.beginStroke(color).setStrokeStyle(4).drawRoundRect( xini, yini, 24, Math.abs( yfi-yini)+24, 6);
	else if( xfi == xini && yfi < yini ) rect.graphics.beginStroke(color).setStrokeStyle(4).drawRoundRect( xfi, yfi, 24, Math.abs( yini-yfi)+24,  6);
	else if( xfi > xini && yfi > yini){
		rect.graphics.beginStroke(color).setStrokeStyle(4).drawRoundRect( 0, 0, indexs.length*41, 28,  6);
		rect.x = xini+10;
		rect.y = yini-10;
		rect.regX = 0;
		rect.regY = 0;
		rect.rotation = 45;
	}
	else if( xfi > xini && yfi < yini){
		rect.graphics.beginStroke(color).setStrokeStyle(4).drawRoundRect( 0, 0, indexs.length*41, 28,  6);
		rect.x = xini-10;
		rect.y = yini+13;
		rect.regX = 0;
		rect.regY = 0;
		rect.rotation = -45;
	}
	else if( xfi < xini && yfi < yini){
		rect.graphics.beginStroke(color).setStrokeStyle(4).drawRoundRect( 0, 0, indexs.length*41, 28,  6);
		rect.x = xfi+10;
		rect.y = yfi-10;
		rect.regX = 0;
		rect.regY = 0;
		rect.rotation = 45;
	}
	else if( xfi < xini && yfi > yini){
		rect.graphics.beginStroke(color).setStrokeStyle(4).drawRoundRect( 0, 0, indexs.length*41, 28,  6);
		rect.x = xfi-10;
		rect.y = yfi+13;
		rect.regX = 0;
		rect.regY = 0;
		rect.rotation = -45;
	}
}
Crucigrama.prototype.isPressed = function(id)
{
	for(key3 in this.lletresBox)
	{
		if( this.lletresBox[key3].id == id )
			return this.lletresBox[key3].pressed;
	}
	return false;
}

Crucigrama.prototype.solucionar = function(){
	for(key3 in this.lletresBox)
	{
		this.lletresBox[key3].lletra.text = this.lletresBox[key3].lletraCorrecte.toUpperCase();

	}
	this.pagina.teclat.block();
}

function LletraBox( index, lletra)
{

	this.contenedor = new createjs.Container();
//	console.log(index);
	this.id  = index;
	this.correcte = false;
	this.pressed = false;

	//debugger;
	this.lletra = new createjs.Text();
    this.lletra.font = (Contenedor.datosXML.plataforma.grado == 1)? "bold 18px Arial" : "bold 16px Arial";
	this.lletra.fontSize = (Contenedor.datosXML.plataforma.grado == 1)? 18 : 16;
	this.lletra.color = "#000"; //"#0D3158";
	this.lletra.x = (Contenedor.datosXML.plataforma.grado == 1)? 5 : 6;
	this.lletra.y = (Contenedor.datosXML.plataforma.grado == 1)? 2 : 3;
	this.lletra.lineWidth = 285;
	this.lletra.lineHeight = 22;
	this.lletra.mouseEnabled = false;
	
	this.setLletra(lletra);
	
	this.area = new createjs.Container();
	
	this.fons = new createjs.Shape();
	this.fons.graphics.beginFill("#FFF").drawRoundRect(0, 0, 24, 24, 4);
	
	this.marc = new createjs.Shape();
	this.marc.graphics.beginStroke("#F8B334").setStrokeStyle(2).drawRoundRect(0, 0, 24, 24, 4);
	
	this.area.addChild( this.fons );
	this.area.addChild( this.marc );
	
	this.contenedor.addChild( this.area );
	this.contenedor.addChild( this.lletra );

	this.contenedor.on("mousedown", this.pressHandler, this);
	this.contenedor.on("mouseover", function(evt){ document.body.style.cursor='pointer'; });
	this.contenedor.on("mouseout", function(evt){ document.body.style.cursor='default'; });
	//this.desactivar();

}
LletraBox.prototype.pressHandler = function(evt){
	if( evt == null || evt.primary ){

		if(!this.pressed)
		{
			this.fons.graphics.clear();
			this.fons.graphics.beginFill("#F8B334").drawRoundRect(0, 0, 24, 24, 4);
		}else{
			this.fons.graphics.clear();
			this.fons.graphics.beginFill("#FFF").drawRoundRect(0, 0, 24, 24, 4);
		}
		this.pressed = !this.pressed;
	}

}

LletraBox.prototype.unblock = function(){
	this.contenedor.on("mousedown", this.pressHandler, this);
	this.contenedor.on("mouseover", function(evt){ document.body.style.cursor='pointer'; });
	this.contenedor.on("mouseout", function(evt){ document.body.style.cursor='default'; });
}

LletraBox.prototype.block = function(){
	this.contenedor.removeAllEventListeners();
}

LletraBox.prototype.setLletra = function(_lletra){
	this.lletra.text = _lletra.toUpperCase();
	
	//coloquem la i al centre
	if(_lletra.toUpperCase() == "I") this.lletra.x = 9;
	else if( _lletra.toUpperCase() == "W" ) (Contenedor.datosXML.plataforma.grado == 1)? 3 : 4;
	else this.lletra.x = (Contenedor.datosXML.plataforma.grado == 1)? 5 : 6;
	
}

LletraBox.prototype.clear = function(){
	this.marc.graphics.clear();
	this.marc.graphics.beginStroke("#F8B334").setStrokeStyle(2).drawRoundRect(0, 0, 24, 24, 4);
	this.fons.graphics.clear();
}
LletraBox.prototype.error = function(){
	this.marc.graphics.clear();
	this.marc.graphics.beginStroke("#E1001A").setStrokeStyle(4).drawRoundRect(0, 0, 24, 24, 4);
	this.correcte = false;
}


