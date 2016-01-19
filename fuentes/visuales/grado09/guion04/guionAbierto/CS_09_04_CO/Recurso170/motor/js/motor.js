Motor = new function()
{
	this.fons = "";
	this.pagines = new Array();
	this.palabras= new Array();
	this.letras = new Array();

	this.contenedor= "";
	this.input= false;

	this.INITIAL_Y = 118;

	this.datosXML = "";
	this.solucion = false;
	
	this.currentPag = "";
	this.currentNumPag =0;
	this.separator
	
	this.crucigrama =false;
	
	// ESPAÑOL
	this.lang_es = 	"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	
	// CATALAN
	this.lang_val=  "ABCÇDEFGHIJKLMNOPQRSTUVWXYZ·";
	// GALLEGO
	// EUSKARA
	// INGLÉS
	this.lang_en =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	this.palabrasIndex = false;
	
	this.flip =0 ;
	this.rotation =0;
	this.resultado ="";
	
	this.ponerContenedor = function(contenedorMotor) {
	  //alert("!");
	};
	
	this.cargarDatos = function()
	{
		$.get(pppPreloader.from("data", "data/datos.xml" + "?time=" + new Date().getTime()), function (xml) {

			//debugger;
			Motor.datosXML = new datosMotor();
			Motor.datosXML.enunciado = $(xml).find('enunciado').text();
			Motor.datosXML.mostrarpalabras = $(xml).find('mostrarpalabras').text();
			Motor.datosXML.tamano = $(xml).find('tamano').text();
			
			$(xml).find('correctas').children('palabra').each(function(index) {
			  
				//debugger;
				this.plb = new palabra();
				//this.preg.explicacion = $(this).children('explicacion').text();
				this.plb.id = index;
				this.plb.palabra = $(this).attr('palabra');
				this.plb.fila = $(this).attr('fila');
				this.plb.columna = $(this).attr('columna');
				this.plb.direccion = $(this).attr('direccion');
				
			  	Motor.datosXML.correctas.push(this.plb);

			});
			
			$(xml).find('falsas').children('palabra').each(function(index) {
			  
				//debugger;
				this.plb = new palabra();
				//this.preg.explicacion = $(this).children('explicacion').text();
				this.plb.id = index;
				this.plb.palabra = $(this).attr('palabra');
				this.plb.fila = $(this).attr('fila');
				this.plb.columna = $(this).attr('columna');
				this.plb.direccion = $(this).attr('direccion');
				
			  	Motor.datosXML.falsas.push(this.plb);

			});
			
	       	Motor.inicializarEstructura();
			Contenedor.crearPaginacio();
		});
	}
	this.inicializarEstructura = function(estado) {
		
		if( Scorm.modo != Scorm.MODO_REVISAR && Scorm.modo != Scorm.MODO_REVISARALUMNO )
	 		this.init();
	};
	this.reinicializarEstructuraMotor = function()
	{
		Main.stage.removeChild(Motor.contenedor);
		Motor.cargarDatos();
	}
	this.estaCompletado = function(){
		//mirem si estan les creuades completades

		return true;
	};
	
	this.getEstado = function(){
		var estado = new Array();
		
		estado.push(Motor.flip);
		estado.push(Motor.rotation);
		
		var sopa = "";
		for( var index in Motor.crucigrama.lletresBox){
			sopa += Motor.crucigrama.lletresBox[index].lletra.text;
			sopa += (Motor.crucigrama.lletresBox[index].pressed)? "1" : "0";
		}
		estado.push(sopa);
		return estado.join("|");
	}
	
	this.revisar = function(){
		if(this.estado != "")
		{
			
			if( this.estado.indexOf("[")>=0 )
			{
				var datos = this.estado.substring(1, this.estado.length-1).split("][");
				Contenedor.timeRevision = datos[0];
				var estado = datos[1].split("|");
			}else{
				var estado = this.estado.split("|");
			}

			this.flip = estado[0];
			this.rotation = estado[1];
			this.resultado = estado[2];

			this.buildRevision();
			this.recoveryState();
		}
	}
	
	this.validar = function() {
		var total = 0;
		var NumPalabras = 0;
		//poso totes les lletres seleccionades com error
		this.crucigrama.corregir();
		
		//mirem les paraules completades
		for(key1 in this.palabrasIndex)
		{   
			var completat = true;
			for( key2 in this.palabrasIndex[ key1 ] )
			{
				if( !this.crucigrama.isPressed( this.palabrasIndex[ key1 ][ key2 ] ) )
				{
					completat = false;
				}	
			}
			if(completat)
			{
				total++;
				this.crucigrama.solucio( this.palabrasIndex[ key1 ], true );	
			}
		}
		return total.toString() +  "/" + this.palabrasIndex.length.toString();
	};

	this.hideDomObjects = function(){

	}
	this.showDomObjects = function(){

	}
	this.obtenerEstado = function(){

	  //alert("Hola, Soy" + this.primerNombre);
	};
	this.reiniciar = function() {
	  //alert("Estoy caminando!");
	};
	this.activar = function(){
		this.crucigrama.unblock();
	}
	this.desactivar = function() {
		this.crucigrama.block();
	};
	this.numPaginas = function(){
		return Motor.datosXML.numpreguntas;
	};
	this.ponerPagina = function(pag) {
	    this.contenedor.removeChild( this.currentPag.contenedor );
		this.currentNumPag = pag - 1;
	    this.currentPag = this.pagines[this.currentNumPag];
	    this.contenedor.addChild( this.currentPag.contenedor );
	};

	this.obtenerPaginaActual = function(pag){

	};
	this.verSolucion = function(conEfecto){
	  
	  	this.deseleccionar();
	  	this.solucionar();
		//this.desactivar();	
		
	};
	this.deseleccionar = function(){

	}
	this.solucionar = function(){
		this.solucion = false;
		
		this.crucigrama.clear();
		
	  	for(key1 in this.palabrasIndex)
		{   
			var completat = true;
			for( key2 in this.palabrasIndex[ key1 ] )
			{
				if( !this.crucigrama.isPressed( this.palabrasIndex[ key1 ][ key2 ] ) )
				{
					completat = false;
				}	
			}
			if(completat)
			{
				this.crucigrama.solucio( this.palabrasIndex[ key1 ], true );	
			}else{
				this.crucigrama.solucio( this.palabrasIndex[ key1 ],false );	
			}
		}
	}

	this.obtenerTipoEjercicio = function() {

	};
	this.obtenerVersion = function(){

	};
	
    this.init = function()
    {
    	this.contenedor = new createjs.Container();
    	this.contenedor.y = this.INITIAL_Y ;
    	
		this.drawBackground();
		//this.drawSeparator();
		
		if(Motor.datosXML.mostrarpalabras == 1)
		{
		    this.drawSeparator();
			this.drawPalabras();
		}
		
		this.configureLetras();
		
		this.crucigrama = new Crucigrama( this.letras );
		this.contenedor.addChild( this.crucigrama.contenedor );
	    
	    Main.stage.addChild( this.contenedor );
    }
    
    this.buildRevision = function(){
    	this.contenedor = new createjs.Container();
    	this.contenedor.y = this.INITIAL_Y ;
    	
		this.drawBackground();
		this.drawSeparator();
		
		if(Motor.datosXML.mostrarpalabras == 1)
		{
			this.drawPalabras();
		}
		
		this.recoveryLetras();
		
		this.crucigrama = new Crucigrama( this.letras );
		this.contenedor.addChild( this.crucigrama.contenedor );
	    
	    Main.stage.addChild( this.contenedor );
    }
    
    this.recoveryLetras = function()
    {
    	this.rotateFlip(parseInt(Motor.flip));
		this.rotateRotate(parseInt(Motor.rotation));
		
    	// Recuperamos el crucigrama guardado
    	this.letras = new Array();
		for (var i=0 ;i < Motor.resultado.length ; i+=2) {
			var letra =  Motor.resultado[i];
			this.letras.push(letra);
		}
		
		this.palabrasIndex = new Array();
		// Ahora ponemos las palabras
		for ( var i=0; i < Motor.datosXML.correctas.length; i++)
			 this.rellenarPalabraRevisa(i, Motor.datosXML.correctas[i]);
		// Ahora ponemos las palabras falsas
		for ( var i=0; i < Motor.datosXML.falsas.length; i++)
			 this.rellenarPalabraRevisa(-1, Motor.datosXML.falsas[i]); // -1 para que no tenga id de palabra
    	
    }
    
    this.recoveryState = function(){
    	//console.log(this.ahorcados);
    	for( var index in Motor.crucigrama.lletresBox ){
			var pressed = Motor.resultado[(index*2)+1];
			if(pressed == 1) Motor.crucigrama.lletresBox[index].pressHandler(null);

    	}
    }
    
    this.rellenarPalabraRevisa = function( idPalabra, palabra)
    {
		var incX = 1;
		var incY = 2;
		
		switch (palabra.direccion) // Ajusto los incrementos para ir colocando las palabras
		{
			case  '0':  incX =  0; incY = -1; break;
			case '45':  incX =  1; incY = -1; break;
			case '90':  incX =  1; incY =  0; break;
			case '135': incX =  1; incY =  1; break;
			case '180': incX =  0; incY =  1; break;
			case '225': incX = -1; incY =  1; break;
			case '270': incX = -1; incY =  0; break;
			case '315': incX = -1; incY = -1; break;
			default:  incX =  1; incY =  0; break; // de izquierda a derecha
		}
		// Pongo la palabra
		var j = 0;
		var posX = palabra.columna-1;
		var posY = palabra.fila-1;
		
		this.palabrasIndex[idPalabra] = new Array();
		//console.log(palabra.palabra);
		for (var j=0;j<palabra.palabra.length;j++)
		{
			var index = posY * Motor.datosXML.tamano  + posX;
			this.palabrasIndex[idPalabra].push(index);
			//this.letras[index] = palabra.palabra.charAt(j);
			posX += incX;
			posY += incY;
		}
    }
    
    this.configureLetras = function()
    {
    	this.rotateRandom();
    	
    	var charSample ="";
    	if(Contenedor.datosXML.plataforma.lang == "en" ) charSample = this.lang_en; 
    	else if(Contenedor.datosXML.plataforma.lang == "val" ) charSample = this.lang_val;  
    	else charSample = this.lang_es;
    	
    	// Creamos la base aleatoria
    	this.letras = new Array();
		for (var i=0 ;i < Motor.datosXML.tamano * Motor.datosXML.tamano ; i++) {
			var index = Math.floor( Math.random() * charSample.length);
			var letra = charSample[index];
			this.letras.push(letra);
		}
		
		this.palabrasIndex = new Array();
		// Ahora ponemos las palabras
		for ( var i=0; i < Motor.datosXML.correctas.length; i++)
			 this.rellenarPalabra(i, Motor.datosXML.correctas[i]);
		// Ahora ponemos las palabras falsas
		for ( var i=0; i < Motor.datosXML.falsas.length; i++)
			 this.rellenarPalabra(-1, Motor.datosXML.falsas[i]); // -1 para que no tenga id de palabra
    	
    }
    
    this.rellenarPalabra = function( idPalabra, palabra)
    {
		var incX = 1;
		var incY = 2;
		
		switch( palabra.direccion ) // Ajusto los incrementos para ir colocando las palabras
		{
			case  '0':  incX =  0; incY = -1; break;
			case '45':  incX =  1; incY = -1; break;
			case '90':  incX =  1; incY =  0; break;
			case '135': incX =  1; incY =  1; break;
			case '180': incX =  0; incY =  1; break;
			case '225': incX = -1; incY =  1; break;
			case '270': incX = -1; incY =  0; break;
			case '315': incX = -1; incY = -1; break;
			default:  incX =  1; incY =  0; break; // de izquierda a derecha
		}
		// Pongo la palabra
		var j = 0;
		var posX = palabra.columna-1;
		var posY = palabra.fila-1;
		
		this.palabrasIndex[idPalabra] = new Array();
		//console.log(palabra.palabra);
		for ( var j = 0; j < palabra.palabra.length; j++ )
		{
			var index = posY * Motor.datosXML.tamano  + posX;
			this.palabrasIndex[idPalabra].push(index);
			this.letras[index] = palabra.palabra.charAt(j);
			posX += incX;
			posY += incY;
		}
    }
    this.drawPalabras = function()
    {
    	// dibuixem les paraules que s'han de trobar
    	for( key in Motor.datosXML.correctas )
    	{
    		var palabra = new createjs.Text();
    		palabra.text = Motor.datosXML.correctas[key].palabra.toUpperCase();
		    palabra.font = (Contenedor.datosXML.plataforma.grado == 1)? "bold 18px Arial" : "bold 16px Arial";
			palabra.fontSize = (Contenedor.datosXML.plataforma.grado == 1)? 18 : 16;
			palabra.color = "#0D3158";
			palabra.x = 645;
			palabra.y = key * 35 + 50;
			
			this.contenedor.addChild( palabra );
    	}
    }
    
    this.drawBackground = function()
    {
    	//dibuixem les caixes blanques del fons.
    	if(Motor.datosXML.mostrarpalabras == 1){
        	var fonsParaules = new createjs.Shape();
        	fonsParaules.graphics.beginFill("#FFF").drawRect(614 , 25 , 260, 394);
        	this.contenedor.addChild( fonsParaules );
        	var fonsCrucigrama = new createjs.Shape();
            fonsCrucigrama.graphics.beginFill("#FFF").drawRect(70 , 25 , 434, 394);
            this.contenedor.addChild( fonsCrucigrama );
        }else{
            var fonsCrucigrama = new createjs.Shape();
            fonsCrucigrama.graphics.beginFill("#FFF").drawRect(250 , 25 , 434, 394);
            this.contenedor.addChild( fonsCrucigrama );
        }
    	
    	
    }
    this.drawSeparator = function()
    {
    	//dibuixem linia descontinua de separació.
    	this.separator =  new createjs.Shape();
    	this.separator.graphics.beginStroke("#0D3158").setStrokeStyle(2);
    	this.separator = Utils.dashedLineTo(this.separator, 561, 30, 561, 420, 3);
    	this.contenedor.addChild(this.separator);
    }
    
    	//-----------------------------------------------------------------------
	// RUTINAS PARA ROTAR Y HACER EFECTO ESPEJO CON LAS PALABRAS
	//-----------------------------------------------------------------------
	this.rotateFlipVert = function ( lista )
	{
		for (var i=0;i<lista.length;i++)
		{
			lista[i].fila = Motor.datosXML.tamano - lista[i].fila+1; // La fila queda igual
			lista[i].columna = lista[i].columna;
			switch (lista[i].direccion)
			{
				case '0': lista[i].direccion = '180'; break;
				case '45': lista[i].direccion = '135'; break;
				case '90': lista[i].direccion = '90'; break;
				case '135': lista[i].direccion = '45'; break;
				case '180': lista[i].direccion = '0'; break;
				case '225': lista[i].direccion = '315'; break;
				case '270': lista[i].direccion = '270'; break;
				case '315': lista[i].direccion = '225'; break;
			}
		}
	}
	
	this.rotateFlipHorz = function( lista )
	{
		for (var i=0;i<lista.length;i++)
		{
			lista[i].fila = lista[i].fila;
			lista[i].columna = Motor.datosXML.tamano-lista[i].columna+1; // La columna queda igual
			switch (lista[i].direccion)
			{
				case '0': lista[i].direccion = '0'; break;
				case '45': lista[i].direccion = '315'; break;
				case '90': lista[i].direccion = '270'; break;
				case '135': lista[i].direccion = '225'; break;
				case '180': lista[i].direccion = '180'; break;
				case '225': lista[i].direccion = '135'; break;
				case '270': lista[i].direccion = '90'; break;
				case '315': lista[i].direccion = '45'; break;
			}
		}
	}
	
	this.rotate90 = function(lista)
	{
		for (var i=0;i<lista.length;i++)
		{
			var f = lista[i].columna;
			var c = Motor.datosXML.tamano - lista[i].fila + 1;
			lista[i].fila = f;
			lista[i].columna = c;
			switch (lista[i].direccion)
			{
				case '0': lista[i].direccion = '90'; break;
				case '45': lista[i].direccion = '135'; break;
				case '90': lista[i].direccion = '180'; break;
				case '135': lista[i].direccion = '225'; break;
				case '180': lista[i].direccion = '270'; break;
				case '225': lista[i].direccion = '315'; break;
				case '270': lista[i].direccion = '0'; break;
				case '315': lista[i].direccion = '45'; break;
			}
		}
	}
	
	this.rotate180 = function(lista)
	{
		for (var i=0;i<lista.length;i++)
		{
			var f = Motor.datosXML.tamano - lista[i].fila + 1;
			var c = Motor.datosXML.tamano - lista[i].columna + 1;
			lista[i].fila = f;
			lista[i].columna = c;
			switch (lista[i].direccion)
			{
				case '0': lista[i].direccion = '180'; break;
				case '45': lista[i].direccion = '225'; break;
				case '90': lista[i].direccion = '270'; break;
				case '135': lista[i].direccion = '315'; break;
				case '180': lista[i].direccion = '0'; break;
				case '225': lista[i].direccion = '45'; break;
				case '270': lista[i].direccion = '90'; break;
				case '315': lista[i].direccion = '135'; break;
			}
		}
	}
	
	this.rotate270 = function(lista)
	{
		for (var i=0;i<lista.length;i++)
		{
			var f = Motor.datosXML.tamano - lista[i].columna + 1;
			var c = lista[i].fila;
			lista[i].fila = f;
			lista[i].columna = c;
			switch (lista[i].direccion)
			{
				case '0': lista[i].direccion = '270'; break;
				case '45': lista[i].direccion = '315'; break;
				case '90': lista[i].direccion = '0'; break;
				case '135': lista[i].direccion = '45'; break;
				case '180': lista[i].direccion = '90'; break;
				case '225': lista[i].direccion = '135'; break;
				case '270': lista[i].direccion = '180'; break;
				case '315': lista[i].direccion = '225'; break;
			}
		}
	}
	
	this.rotateFlip = function(val)
	{
		switch (val)
		{
			case 1:
				this.rotateFlipVert(Motor.datosXML.correctas);
				this.rotateFlipVert(Motor.datosXML.falsas);
				break;
			case 2:
				this.rotateFlipHorz(Motor.datosXML.correctas);
				this.rotateFlipHorz(Motor.datosXML.falsas);
				break;
		}
	}
	
	this.rotateRotate = function(val)
	{
		switch (val)
		{
			case 1: // 90 grados
				this.rotate90(Motor.datosXML.correctas);
				this.rotate90(Motor.datosXML.falsas);
				break;
			case 2: // 180 grados
				this.rotate180(Motor.datosXML.correctas);
				this.rotate180(Motor.datosXML.falsas);
				break;
			case 3: // 270 grados
				this.rotate270(Motor.datosXML.correctas);
				this.rotate270(Motor.datosXML.falsas);
				break;
		}
	}
	
	this.rotateRandom = function()
	{
		Motor.flip = Math.floor(Math.random()*3); // 0 = igual, 1 = Vertical, 2 = Horizontal
		this.rotateFlip(Motor.flip);
		Motor.rotation = Math.floor(Math.random()*4); // 0 = igual, 1 = 90 grados, 2 = 180 grados, 3 = 270 grados
		this.rotateRotate(Motor.rotation);
	}
}
