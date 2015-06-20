function Pagina( pregunta, _numpagina) {
  
    this.numpagina  = _numpagina;
	//debugger;
    this.enunciat = new createjs.RichText();
    this.enunciat.text = pregunta.enunciado;
    this.idPregunta = pregunta.id;
   
  	if( pregunta.sonido != "" ){
	    this.audio = new BotoAudio(pregunta.id);
		this.audio.bt.x = 210;
		this.audio.bt.y = 175;
		this.audio.bt.on("mouseover", function(evt){ document.body.style.cursor='pointer'; });
		this.audio.bt.on("mouseout", function(evt){ document.body.style.cursor='default'; });
	}
	  
    this.enunciat.font = (Contenedor.datosXML.plataforma.grado == 1)? "19px Arial" : "17px Arial" ;
	this.enunciat.fontSize = (Contenedor.datosXML.plataforma.grado == 1)? 19 : 17 ;
	this.enunciat.color = "#0D3158";
	this.enunciat.x = 15;
	this.enunciat.y = 10 ;
	this.enunciat.lineWidth = 900;
	this.enunciat.lineHeight = 22;
	this.enunciat.mask = new createjs.Shape();
	this.enunciat.mask.graphics.beginFill("#fff").drawRect(0,0,900, 45);
	this.enunciat.mask.y = 10;
	this.enunciat.mask.x = 15;
	this.enunciat.mouseEnabled = false;
	
	this.explicacion = new createjs.RichText();
    this.explicacion.text = pregunta.explicacion;
    this.explicacion.font = (Contenedor.datosXML.plataforma.grado == 1)? "16px Arial" : "14px Arial" ;
	this.explicacion.fontSize = (Contenedor.datosXML.plataforma.grado == 1)? 16 : 14 ;
	this.explicacion.color = "#0D3158";
	this.explicacion.x = 350;
	this.explicacion.y = 370 ;
	this.explicacion.lineWidth = 500;
	this.explicacion.lineHeight = 22;
	this.explicacion.mask = new createjs.Shape();
	this.explicacion.mask.graphics.beginFill("#fff").drawRect(0,0,500, 66);
	this.explicacion.mask.y = 370;
	this.explicacion.mask.x = 350;
	this.explicacion.mouseEnabled = false;
	this.explicacion.visible = false;
	
	this.validacio = true;
	this.respostes = new Array();
  
    this.contenedor = new createjs.Container();
    this.contenedor.addChild( this.enunciat );
    this.contenedor.addChild( this.audio.bt );
    this.contenedor.addChild( this.explicacion );
    

    var num_respuestas =  pregunta.respuestas.length;
    for(var i=0; i < num_respuestas; i++)
	{
    	var index = 0;
		if(Contenedor.datosXML.sinaleatoriedad == 0 && Scorm.modo != Scorm.MODO_REVISAR && Scorm.modo != Scorm.MODO_REVISARALUMNO )
		{
			index = Math.floor( Math.random()*pregunta.respuestas.length);
		} 
		var resp = pregunta.respuestas[ index ]; 
		pregunta.respuestas.splice(index,1);
		
		var cb = new CheckBox( resp, this, i);
    	cb.contenedor.y = 95 + (280 / num_respuestas) * i;
    	cb.contenedor.x = 350;
    	this.contenedor.addChild(cb.contenedor);
    	
    	this.respostes.push(cb);
    }	

}
Pagina.prototype.explicar= function(){
	this.explicacion.visible= true;
}
Pagina.prototype.stopSound = function(){
	try{
		$('#audio'+this.idPregunta)[0].pause(); 
		$('#audio'+this.idPregunta)[0].currentTime = 0;
		this.audio.bt.gotoAndStop("normal");
	}catch(err){ 
		console.log( err ); 
	}
}
function CheckBox(resposta, pagina, index)
{
	this.correcte = resposta.correcte;
	this.checked= false;
	this.repostaUnica = Contenedor.datosXML.respuestaunica;
	this.paginaPare = pagina;
	this.contenedor = new createjs.Container();
	this.id = index;
	this.idResposta = resposta.id;
	//debugger;
	this.texte = new createjs.RichText();
    this.texte.text = resposta.text;
    this.texte.font = (Contenedor.datosXML.plataforma.grado == 1)? "18px Arial" : "16px Arial" ;
	this.texte.fontSize = (Contenedor.datosXML.plataforma.grado == 1)? 18 : 16 ;
	this.texte.color = "#0D3158";
	this.texte.x = 45;
	this.texte.y = 2 ;
	this.texte.lineWidth = 480;
	this.texte.lineHeight = 22;
	this.texte.mask = new createjs.Shape();
	this.texte.mask.graphics.beginFill("#fff").drawRect(0,0,480, 45);
	this.texte.mask.y = 2;
	this.texte.mask.x = 45;
	this.texte.mouseEnabled = false;
	
	this.fonsText = new createjs.Shape();
	this.fonsText.graphics.beginFill("#fff").drawRoundRect(0, 0, 480, this.texte.getMeasuredHeight() + 12, 3);
	
	this.marcText = new createjs.Shape();
	this.marcText.graphics.beginStroke("#F8B334").setStrokeStyle(1).drawRoundRect(0, 0, 480, this.texte.getMeasuredHeight() + 12, 3);
	
	this.areaText = new createjs.Container();
	this.areaText.x = 40;
	this.areaText.y = -3;

	this.areaText.addChild( this.fonsText );
	this.areaText.addChild( this.marcText );
	this.areaText.alpha = 0.01;
	
	this.area = new createjs.Container();
	
	this.fons = new createjs.Shape();
	this.fons.graphics.beginFill("#fff").drawRoundRect(0, 0, 30, 30, 3);
	
	this.marc = new createjs.Shape();
	this.marc.graphics.beginStroke("#F8B334").setStrokeStyle(1).drawRoundRect(0, 0, 30, 30, 3);
	
	this.ok = new createjs.Bitmap(pppPreloader.from("module", 'motor/images/check_ok.png'));
	this.ko = new createjs.Bitmap(pppPreloader.from("module", 'motor/images/check_ko.png'));
	this.ko.x = 2;
	this.ko.y = 0;
	this.chk = new createjs.Bitmap(pppPreloader.from("module", 'motor/images/check_base.png'));
	this.buit = new createjs.DisplayObject();
	
	this.base = new createjs.Container();
	this.base.x = 5;
	this.base.y = 8;
	
	this.area.addChild( this.fons );
	this.area.addChild( this.marc );
	this.area.addChild( this.base );
	
	this.contenedor.addChild( this.areaText );
	this.contenedor.addChild( this.texte );
	this.contenedor.addChild( this.area );
	
	this.area.on("mousedown", this.pressHandler, this);
	this.areaText.on("mousedown", this.pressHandler, this);
	this.contenedor.on("mouseover", function(evt){ document.body.style.cursor='pointer'; });
	this.contenedor.on("mouseout", function(evt){ document.body.style.cursor='default'; });
	//this.desactivar();

}
CheckBox.prototype.pressHandler = function(){
	//deseleccionem en cas de resposta unica
	if(this.repostaUnica == 1)
	{
		for(key in this.paginaPare.respostes)
	    {
	    	if(this.paginaPare.respostes[key].id != this.id)
	    	{
	    		this.paginaPare.respostes[key].base.removeAllChildren();
	    		this.paginaPare.respostes[key].areaText.alpha = 0.01;
	    		this.paginaPare.respostes[key].checked= false;
	    	
	    	}
	    }
	}
	
	//seleccionem o deseleccionem
	if(this.checked) {
		this.base.removeAllChildren();
		this.areaText.alpha = 0.01;
	}
	else 
	{
		this.base.addChild(this.chk);
		this.areaText.alpha = 1;
	}
	
	this.checked = !this.checked;
	
	Contenedor.checkPagina();
	
}
CheckBox.prototype.desactivar = function(){
	this.area.removeAllEventListeners();
	this.areaText.removeAllEventListeners();
	this.contenedor.removeAllEventListeners();
}
CheckBox.prototype.activar = function(){
	if( !this.area.hasEventListener("mousedown") )
	{
	   this.area.on("mousedown", this.pressHandler, this);
	   this.areaText.on("mousedown", this.pressHandler, this);
	   this.contenedor.on("mouseover", function(evt){ document.body.style.cursor='pointer'; });
	   this.contenedor.on("mouseout", function(evt){ document.body.style.cursor='default'; });
	}
}

CheckBox.prototype.clear = function(){
	this.base.removeAllChildren();
	//this.areaText.alpha = 0.01;
	this.marc.graphics.clear();
	this.marc.graphics.beginStroke("#F8B334").setStrokeStyle(1).drawRoundRect(0, 0, 30, 30, 3);
	this.checked= false;
}
CheckBox.prototype.error = function(){
	this.base.removeAllChildren();
	this.base.addChild(this.ko);
	this.marc.graphics.beginStroke("#E1001A").setStrokeStyle(2).drawRoundRect(0, 0, 30, 30, 5);
}

CheckBox.prototype.correct = function(){
	this.base.removeAllChildren();
	this.base.addChild(this.ok);
	this.marc.graphics.beginStroke("#41A62A").setStrokeStyle(2).drawRoundRect(0, 0, 30, 30, 5);
}

function BotoAudio( index) {
	
  	this.width = 58;
  	this.height = 58;
  	this.index = index;

	var _imgLoaded = new Image(); 
	_imgLoaded.src = pppPreloader.from("module", 'motor/images/btnAudio.png');
//	_imgLoaded.name = 'tancar';

	var data = {
	    images: [_imgLoaded],
	    frames: { width: 58, height: 58},
	    animations: { normal: [0], hover: [2], play:{ frames: [2,3,4,5,6,7,8,9] , next: "play", speed: 0.5}}
	};
	var spriteSheet = new createjs.SpriteSheet(data);
	this.bt = new createjs.Sprite(spriteSheet);
	//this.bt.scaleX = 0.5;
	//this.bt.scaleY = 0.5;
	
	// the code block in this helper.addEventListener (It works with button.addEventListener)
	this.bt.on("mouseover", function(evt){ if( $('#audio'+this.index)[0].paused)  this.bt.gotoAndStop("hover");},this);
	this.bt.on("mouseout", function(evt){ if($('#audio'+this.index)[0].paused) this.bt.gotoAndStop("normal");},this);
	this.bt.on("mousedown", this.pressHandler, this);
	
	this.bt.x = 0;
	this.bt.y = 0;
	this.bt.gotoAndStop("normal");
 }
 BotoAudio.prototype.pressHandler = function(){
	//console.log($('#audio'+this.index)[0]);
	//$('#audio'+this.id)[0].trigger("click");
	if( $('#audio'+this.index)[0].paused ) 
	{
		for( key in Motor.audios)
		{
			if( !$('#audio'+Motor.audios[key].index)[0].paused )
			{
				Motor.audios[key].bt.gotoAndStop("normal");
				$('#audio'+Motor.audios[key].index)[0].pause();
				$('#audio'+Motor.audios[key].index)[0].currentTime = 0;
			}
		}
		
		//$('#audio'+this.index)[0].load(); 
		$('#audio'+this.index)[0].play(); 
		this.bt.gotoAndPlay("play");
		$('#audio'+this.index)[0].addEventListener("ended",this.final);
	}
	else 
	{
		$('#audio'+this.index)[0].pause(); 
		$('#audio'+this.index)[0].currentTime = 0;
		this.bt.gotoAndStop("normal");
	}
	 
}
BotoAudio.prototype.final= function(){
	for( key in Motor.audios)
	{
		Motor.audios[Motor.audios[key].index].bt.gotoAndStop("normal");
		this.currentTime = 0;
	}
}
 