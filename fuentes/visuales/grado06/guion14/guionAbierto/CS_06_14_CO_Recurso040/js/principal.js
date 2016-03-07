(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
      basicos(this, 0,0,0,0,0,0);
    this.instance = new lib.boton2("Éfeso");
	this.instance.setTransform(939,338);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.boton2(), 3);

	this.instance_1 = new lib.boton2("Thera");
	this.instance_1.setTransform(715.5,473);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.boton2(), 3);

	this.instance_2 = new lib.boton2("Atenas");
	this.instance_2.setTransform(581.9,396);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.boton2(), 3);

	this.instance_3 = new lib.boton2("Corinto");
	this.instance_3.setTransform(564.5,338);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.boton2(), 3);

	this.instance_4 = new lib.boton2("Delfos");
	this.instance_4.setTransform(493.9,280);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.boton2(), 3);

	this.instance_5 = new lib.boton2("Argos");
	this.instance_5.setTransform(438,380);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.boton2(), 3);

	this.instance_6 = new lib.boton();
	this.instance_6.setTransform(229.9,579);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.boton(), 3);

	this.instance_7 = new lib.boton2("Esparta");
	this.instance_7.setTransform(425.8,460.1);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.boton2(), 3);

	this.instance_8 = new lib.image25016();
	this.instance_8.setTransform(0,0,0.5,0.5);
     this.instance_6.on("click", function (evt) {
            putStage(new lib.frame2b(new lib.popup1()));
        });
   this.instance_7.on("click", function (evt) {
            putStage(new lib.frame2(new lib.popup2()));
        });
   this.instance_5.on("click", function (evt) {
            putStage(new lib.frame2(new lib.popup3()));
        });
        this.instance_4.on("click", function (evt) {
            putStage(new lib.frame3(new lib.popup4()));
        });
         this.instance_3.on("click", function (evt) {
            putStage(new lib.frame2(new lib.popup5()));
        });
           this.instance_2.on("click", function (evt) {
            putStage(new lib.frame2(new lib.popup6()));
        });
         this.instance_1.on("click", function (evt) {
            putStage(new lib.frame2(new lib.popup7()));
        });
         this.instance.on("click", function (evt) {
            putStage(new lib.frame2(new lib.popup8()));
        });
        this.addChild(this.logo, this.titulo, this.siguiente, this.anterior,this.home,this.informacion,this.cerrar,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

     (lib.frame2 = function(popup,mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// PopUp
	this.CdP_Lagos = popup
	this.CdP_Lagos.setTransform(0,-300);
        this.CdP_Lagos.shape.on("click", function (evt) {
        putStage(new lib.frame1());
    });
	this.timeline.addTween(cjs.Tween.get(this.CdP_Lagos).wait(1).to({y:0},30).wait(1));

	// Imatge
	this.instance = new lib.image25016();
this.instance.setTransform(0,0,0.5,0.5);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-487.9,950,1096);
  (lib.frame2b = function(popup,mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// PopUp
	this.CdP_Lagos = popup
	this.CdP_Lagos.setTransform(0,-600);
        this.CdP_Lagos.shape.on("click", function (evt) {
        putStage(new lib.frame1());
    });
	this.timeline.addTween(cjs.Tween.get(this.CdP_Lagos).wait(1).to({y:0},40).wait(1));

	// Imatge
	this.instance = new lib.image25016();
this.instance.setTransform(0,0,0.5,0.5);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-487.9,950,1096);

     (lib.frame3 = function(popup,mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// PopUp
	this.CdP_Lagos = popup
	this.CdP_Lagos.setTransform(400,0);
        this.CdP_Lagos.shape.on("click", function (evt) {
        putStage(new lib.frame1());
    });
	this.timeline.addTween(cjs.Tween.get(this.CdP_Lagos).wait(1).to({x:0},20).wait(1));

	// Imatge
	this.instance = new lib.image25016();
this.instance.setTransform(0,0,0.5,0.5);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-487.9,950,1096);

    (lib.frame4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['titulo']);

        this.anterior.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame5 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 1, 0, 0, 0);
        titulo2(this, txt['titulo']);

        this.anterior.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);


// symbols:

    function titulo1(escena, texto) {
        var html = createDiv(texto, "Georgia", "31px", '770px', '100px', "20px", "185px", "center");
        escena.titulo = new cjs.DOMElement(html);
        escena.titulo.setTransform(90, -588);
    }
    function titulo2(escena, texto, size) {
        size = size || '25px';
        var html = createDiv(texto, "Verdana", size, '770px', '100px', "20px", "185px", "left");
        escena.titulo = new cjs.DOMElement(html);
        escena.titulo.setTransform(90, -588);
    }
    function texto(escena, texto, side, ancho,top) {
        width = 730 - ancho;
        top=top || -482;
        var html = createDiv(texto, "Verdana", "20px", width + 'px', '400px', "20px", "185px", "left");
        escena.texto = new cjs.DOMElement(html);
        if (side == 0)
            escena.texto.setTransform(90, top);
        else
            escena.texto.setTransform(130 + ancho, top);
    }

    function imagen(escena, side, scX, scY) {
        var theBounds = escena.imagen.getBounds();

        if (side == 0)
            escena.imagen.setTransform(90, 130, scX, scY);
        else {
            escena.imagen.setTransform(860 - theBounds.width * scX, 130, scX, scY);
        }
        return theBounds.width * scX;
    }

   function basicos(escena, home, anterior, siguiente, informacion, cerrar,audio) {
        escena.logo = new lib.gris();
        escena.logo.setTransform(45, 45, 1, 1, 0, 0, 0, 30, 30);
        escena.logo.alpha = 0.301;
        if (home == 1) {
            escena.home = new lib.btn_inicio();
            escena.home.setTransform(60, 568,1.15,1.15);
            new cjs.ButtonHelper(escena.home, 0, 1, 2, false, new lib.btn_inicio(), 3);
        }
        if (home == 2) {
            escena.home = new lib.btn_inicioneg();
            escena.home.setTransform(60, 568,1.15,1.15);
            new cjs.ButtonHelper(escena.home, 0, 1, 2, false, new lib.btn_inicio(), 3);
        }
        if (anterior == 1) {
            escena.anterior = new lib.btn_anterior();
            escena.anterior.setTransform(125, 568,1.15,1.15);
            new cjs.ButtonHelper(escena.anterior, 0, 1, 2, false, new lib.btn_anterior(), 3);
        }
         if (anterior == 2) {
            escena.anterior = new lib.btn_anteriorneg();
            escena.anterior.setTransform(125, 568,1.15,1.15);
            new cjs.ButtonHelper(escena.anterior, 0, 1, 2, false, new lib.btn_anterior(), 3);
        }
        if (siguiente == 1) {
            escena.siguiente = new lib.btn_siguiente();
            escena.siguiente.setTransform(170, 568,1.15,1.15);
            new cjs.ButtonHelper(escena.siguiente, 0, 1, 2, false, new lib.btn_siguiente(), 3);
        }
          if (siguiente == 2) {
            escena.siguiente = new lib.btn_siguienteneg();
            escena.siguiente.setTransform(170, 568,1.15,1.15);
            new cjs.ButtonHelper(escena.siguiente, 0, 1, 2, false, new lib.btn_siguiente(), 3);
        }
        
      if (informacion == 1) {
            escena.informacion = new lib.btn_info();
            if (audio==1)
            escena.informacion.setTransform(280, 550,1.15,1.15);
        else
            escena.informacion.setTransform(217, 550,1.15,1.15);
            new cjs.ButtonHelper(escena.informacion, 0, 1, 2, false, new lib.btn_info(), 3);
        }
      if (informacion == 2) {
            escena.informacion = new lib.btn_infoneg();
            if (audio==1)
            escena.informacion.setTransform(280, 550,1.15,1.15);
        else
            escena.informacion.setTransform(217, 550,1.15,1.15);
            new cjs.ButtonHelper(escena.informacion, 0, 1, 2, false, new lib.btn_info(), 3);
        }
        if (cerrar == 1) {
            escena.cerrar = new lib.btn_cerrar();
            escena.cerrar.setTransform(908, 35, 1.15, 1.15);
            new cjs.ButtonHelper(escena.cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        }
         if (cerrar == 2) {
            escena.cerrar = new lib.btn_cerrarneg();
            escena.cerrar.setTransform(908, 35, 1.15, 1.15);
            new cjs.ButtonHelper(escena.cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        }
        if (audio == 1) {
            escena.audioplay = new lib.btn_AudioPlay_ok();
            escena.audioplay.setTransform(232, 568, 1.6, 1.6);
            new cjs.ButtonHelper(escena.audioplay, 0, 1, 2, false, new lib.btn_AudioPlay_ok(), 3);
            escena.audiopause = new lib.btn_AudioPause_ok();
            escena.audiopause.setTransform(267, 568, 1.54, 1.54);
            new cjs.ButtonHelper(escena.audiopause, 0, 1, 2, false, new lib.btn_AudioPause_ok(), 3);
            escena.audiopause.visible = false;
        }
    }
  
   //Simbolillos
   
    (lib.popup1 = function() {
	this.initialize();

	// Capa 1
        this.instance = new lib.helade();
	this.instance.setTransform(81.8,365.5);

	this.text = new cjs.Text("Las primeras polis griegas", "20px Verdana");
	this.text.lineHeight = 20;
	this.text.setTransform(81.8,129.9);
  var html = createDiv(txt['text1'], "Verdana", "20px", '740px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(82, 130-608);
	this.text_1 = new cjs.Text(txt['titulo'], "bold 30px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(81.8,69.9);

	this.shape = new lib.btn_cerrar();
	
	this.shape.setTransform(880,57);
  new cjs.ButtonHelper(this.shape, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhD3AmCMAAAhMDMCDGAAAICqAAIB/AAMAAABMDgEA/PgjXICqAAIAAiqIAACqIiqAAIAAiqIAACqg");
	this.shape_1.setTransform(475.5,281.5);
        
	

	this.addChild(this.shape_1,this.shape,this.text_1,this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(152,20,644,570);
   (lib.popup2 = function() {
	this.initialize();

	// Capa 1
       	this.instance = new lib.image25245();
	this.instance.setTransform(63.3,86.3,0.931,0.931);

	this.text = new cjs.Text("Las primeras polis griegas", "20px Verdana");
	this.text.lineHeight = 20;
	this.text.setTransform(461.9,129.9);
  var html = createDiv(txt['text2'], "Verdana", "20px", '440px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(440, 100-608);
	this.text_1 = new cjs.Text("Esparta", "bold 30px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(457.9,71.9);

	this.shape = new lib.btn_cerrar();
	
	this.shape.setTransform(880,57);
  new cjs.ButtonHelper(this.shape, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhD3ARLMAAAgiVMCDGAAAIAAAAICqAAIAAAAIB/AAMAAAAiVg");
	this.shape_1.setTransform(475.5,147.9);

	this.addChild(this.shape_1,this.shape,this.text_1,this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(152,20,644,570);
(lib.popup3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.image25094();
	this.instance.setTransform(166.9,52.3,0.575,0.575);


var html = createDiv(txt['text3'], "Verdana", "20px", '440px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(350, 100-608);
	this.text_1 = new cjs.Text("Argos", "bold 30px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(373.9,71.9);

	this.shape = new lib.btn_cerrar();
	
	this.shape.setTransform(780,57);
  new cjs.ButtonHelper(this.shape, 0, 1, 2, false, new lib.btn_cerrar(), 3);

		this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egz3AWRMAAAgshMBnvAAAMAAAAshg");
	this.shape_1.setTransform(475.1,180.5);


	this.addChild(this.shape_1,this.shape,this.text_1,this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(41,38,869,285.2);

(lib.popup4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.image25103();
	this.instance.setTransform(604.3,230.8,0.653,0.653);

	this.text = new cjs.Text("Las primeras polis griegas", "20px Verdana");
	this.text.lineHeight = 20;
	this.text.setTransform(485.9,119.9);
  var html = createDiv(txt['text4'], "Verdana", "20px", '420px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(486, 90-608);
	this.text_1 = new cjs.Text("Delfos", "bold 30px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(494,71.9);

	this.shape = new lib.btn_cerrar();
	
	this.shape.setTransform(880,57);
  new cjs.ButtonHelper(this.shape, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egi1AmwMAAAhNfMBFrAAAMAAABNfg");
	this.shape_1.setTransform(683.2,286.1);

	this.addChild(this.shape_1,this.shape,this.text_1,this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(460.1,38,446.1,496.2);

(lib.popup5 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.image25076();
	this.instance.setTransform(83.4,62.4,0.675,0.675);

	this.text = new cjs.Text("Las primeras polis griegas", "20px Verdana");
	this.text.lineHeight = 20;
	this.text.setTransform(399.9,119.9);
  var html = createDiv(txt['text5'], "Verdana", "20px", '440px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(400, 100-608);
	this.text_1 = new cjs.Text("Corinto", "bold 30px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(403,68.9);
this.shape = new lib.btn_cerrar();
	
	this.shape.setTransform(880,57);
  new cjs.ButtonHelper(this.shape, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.shapeb = new cjs.Shape();
	this.shapeb.graphics.f("#FFFFFF").s().p("EhB7AUUMAAAgonMCD4AAAMAAAAong");
	this.shapeb.setTransform(484.1,168);

	this.addChild(this.shapeb,this.shape,this.text_1,this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(62,38,844.2,260.2);
(lib.popup6 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.image25058();
	this.instance.setTransform(73.8,61.1,0.884,0.884);

	this.text = new cjs.Text("Las primeras polis griegas", "20px Verdana");
	this.text.lineHeight = 20;
	this.text.setTransform(463.9,119.9);
  var html = createDiv(txt['text6'], "Verdana", "20px", '440px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(464, 100-608);
	this.text_1 = new cjs.Text("Atenas", "bold 30px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(467,67.9);
this.shape = new lib.btn_cerrar();
	
	this.shape.setTransform(880,57);
  new cjs.ButtonHelper(this.shape, 0, 1, 2, false, new lib.btn_cerrar(), 3);


	this.shapeb = new cjs.Shape();
	this.shapeb.graphics.f("#FFFFFF").s().p("EhB7AUUMAAAgonMCD4AAAMAAAAong");
	this.shapeb.setTransform(484.1,182.5,1,1.111);

	this.addChild(this.shapeb,this.text_1,this.text,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(62,38,844.2,289.2);
(lib.popup7= function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.image25085();
	this.instance.setTransform(73.8,61.1,0.884,0.884);

	this.text = new cjs.Text("Las primeras polis griegas", "20px Verdana");
	this.text.lineHeight = 20;
	this.text.setTransform(463.9,119.9);
  var html = createDiv(txt['text7'], "Verdana", "20px", '420px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(464, 100-608);
	this.text_1 = new cjs.Text("Thera", "bold 30px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(467,67.9);
this.shape = new lib.btn_cerrar();
	
	this.shape.setTransform(880,57);
  new cjs.ButtonHelper(this.shape, 0, 1, 2, false, new lib.btn_cerrar(), 3);


	this.shapeb = new cjs.Shape();
	this.shapeb.graphics.f("#FFFFFF").s().p("EhB7AUUMAAAgonMCD4AAAMAAAAong");
	this.shapeb.setTransform(484.1,182.5,1,1.111);

	this.addChild(this.shapeb,this.text_1,this.text,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(62,38,844.2,289.2);
(lib.popup8= function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.image25067();
	this.instance.setTransform(73.8,61.1,0.884,0.884);

	this.text = new cjs.Text("Las primeras polis griegas", "20px Verdana");
	this.text.lineHeight = 20;
	this.text.setTransform(463.9,119.9);
  var html = createDiv(txt['text8'], "Verdana", "20px", '420px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(464, 100-608);
	this.text_1 = new cjs.Text("Éfeso", "bold 30px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(467,67.9);
this.shape = new lib.btn_cerrar();
	
	this.shape.setTransform(880,57);
  new cjs.ButtonHelper(this.shape, 0, 1, 2, false, new lib.btn_cerrar(), 3);


	this.shapeb = new cjs.Shape();
	this.shapeb.graphics.f("#FFFFFF").s().p("EhB7AUUMAAAgonMCD4AAAMAAAAong");
	this.shapeb.setTransform(484.1,182.5,1,1.111);

	this.addChild(this.shapeb,this.text_1,this.text,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(62,38,844.2,289.2);

   (lib.image25016 = function() {
	this.initialize(img.image25016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1980,1270);

 (lib.helade = function() {
	this.initialize(img.helade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,128);


(lib.image25058 = function() {
	this.initialize(img.image25058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,276);


(lib.image25067 = function() {
	this.initialize(img.image25067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,265);


(lib.image25076 = function() {
	this.initialize(img.image25076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,314);


(lib.image25085 = function() {
	this.initialize(img.image25085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,273);


(lib.image25094 = function() {
	this.initialize(img.image25094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,428);


(lib.image25103 = function() {
	this.initialize(img.image25103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,434);


(lib.image25143 = function() {
	this.initialize(img.image25143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,276);


(lib.image25182 = function() {
	this.initialize(img.image25182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,428);


(lib.image25220 = function() {
	this.initialize(img.image25220);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,434);


(lib.image25245 = function() {
	this.initialize(img.image25245);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,157);


(lib.image25287 = function() {
	this.initialize(img.image25287);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,265);


(lib.image25337 = function() {
	this.initialize(img.image25337);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,314);


(lib.image25377 = function() {
	this.initialize(img.image25377);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1852,1264);




(lib.boton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("¿Qué era la Hélade?", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 259;
	this.text.setTransform(-81.4,-26.3+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape.setTransform(-79.9,-15,1.4,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_1.setTransform(-79.9,-14.9,1.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_2.setTransform(-79.9,-14.9,1.4,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-15}},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape,p:{y:-14.9}},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-30,263,30);


(lib.boton2 = function(texto,mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text(texto, "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 84;
	this.text.setTransform(-81.9,-26.3+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape.setTransform(-79.9,-15,0.55,1);

	
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_1.setTransform(-79.9,-14.9,0.55,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_2.setTransform(-79.9,-14.9,0.55,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-15}},{t:this.text,p:{x:-81.9,lineWidth:84,color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{x:-82.4,lineWidth:85,color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{x:-81.9,lineWidth:86,color:"#FFFFFF"}}]},1).to({state:[{t:this.shape,p:{y:-14.9}},{t:this.text,p:{x:-82.4,lineWidth:85,color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.9,-30,88.1,30);

      (lib.btn_AudioPlay_ok = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // FlashAICB
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").p("AgUhxQAWAZALApQAXBQg4BT");
        this.shape.setTransform(6.8, 0, 0.697, 0.697);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FFFFFF").p("AgLhEIAIAKQAGAOAFAQQAOAvghAz");
        this.shape_1.setTransform(4.5, 0, 0.697, 0.697);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#FFFFFF").p("AgGglIAKAWQAIAZgSAc");
        this.shape_2.setTransform(2.5, 0.1, 0.697, 0.697);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#FFFFFF").p("AAchWIAACuIg3gwIAAhIg");
        this.shape_3.setTransform(-2.2, -0.1, 0.697, 0.697);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#1D1D1B").s().p("AgbAoIAAhJIA3g1IAACtg");
        this.shape_4.setTransform(-2.2, 0, 0.697, 0.697);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#FFFFFF").p("AgZgmQgGAAAAAIIAAA9QAAAIAGAAIA0AAQAFAAAAgIIAAg9QAAgDgBgDQgCgCgCAAg");
        this.shape_5.setTransform(-6.5, 0, 0.697, 0.697);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#1D1D1B").s().p("AgZAnQgGAAAAgIIAAg9QAAgIAGAAIA0AAQAAAAABAAQABAAAAABQAAAAABAAQAAABABAAQABADAAADIAAA9QAAAIgFAAg");
        this.shape_6.setTransform(-6.5, 0, 0.697, 0.697);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#1D1D1B").p("ACWiBIAAEDQAAAJgGAFQgFAGgIAAIkFAAQgIAAgFgGQgGgGAAgIIAAkDQAAgIAGgGQAFgGAIAAIEFAAQAIAAAFAGQAGAGAAAIg");
        this.shape_7.setTransform(0, 0, 0.697, 0.697);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#1D1D1B").s().p("AiCCWQgHgBgGgFQgGgGABgIIAAkDQgBgIAGgGQAGgGAHABIEFAAQAIgBAFAGQAFAGABAIIAAEDQgBAIgFAGQgFAFgIABg");
        this.shape_8.setTransform(0, 0, 0.697, 0.697);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_8, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_7, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_6, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_5, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_4, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2, y: 0}}, {t: this.shape_3, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2}}, {t: this.shape_2, p: {scaleX: 0.697, scaleY: 0.697, x: 2.5, y: 0.1}}, {t: this.shape_1, p: {scaleX: 0.697, scaleY: 0.697, x: 4.5}}, {t: this.shape, p: {scaleX: 0.697, scaleY: 0.697, x: 6.8}}]}).to({state: [{t: this.shape_8, p: {scaleX: 0.766, scaleY: 0.766}}, {t: this.shape_7, p: {scaleX: 0.766, scaleY: 0.766}}, {t: this.shape_6, p: {scaleX: 0.766, scaleY: 0.766, x: -7.2}}, {t: this.shape_5, p: {scaleX: 0.766, scaleY: 0.766, x: -7.2}}, {t: this.shape_4, p: {scaleX: 0.766, scaleY: 0.766, x: -2.5, y: -0.1}}, {t: this.shape_3, p: {scaleX: 0.766, scaleY: 0.766, x: -2.5}}, {t: this.shape_2, p: {scaleX: 0.766, scaleY: 0.766, x: 2.8, y: 0}}, {t: this.shape_1, p: {scaleX: 0.766, scaleY: 0.766, x: 5}}, {t: this.shape, p: {scaleX: 0.766, scaleY: 0.766, x: 7.5}}]}, 1).to({state: [{t: this.shape_8, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_7, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_6, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_5, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_4, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2, y: 0}}, {t: this.shape_3, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2}}, {t: this.shape_2, p: {scaleX: 0.697, scaleY: 0.697, x: 2.5, y: 0.1}}, {t: this.shape_1, p: {scaleX: 0.697, scaleY: 0.697, x: 4.5}}, {t: this.shape, p: {scaleX: 0.697, scaleY: 0.697, x: 6.8}}]}, 1).to({state: [{t: this.shape_8, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_7, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_6, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_5, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_4, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2, y: 0}}, {t: this.shape_3, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2}}, {t: this.shape_2, p: {scaleX: 0.697, scaleY: 0.697, x: 2.5, y: 0.1}}, {t: this.shape_1, p: {scaleX: 0.697, scaleY: 0.697, x: 4.5}}, {t: this.shape, p: {scaleX: 0.697, scaleY: 0.697, x: 6.8}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 30, 30);


    (lib.btn_AudioPause_ok = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // FlashAICB
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#1D1D1B").p("AAbA8QAAALgIAIQgIAIgLAAQgKAAgIgIQgIgIAAgLIAAh3QAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALg");
        this.shape.setTransform(3, 0, 0.7, 0.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgSBPQgIgIAAgMIAAh1QAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMIAAB1QAAAMgIAIQgIAIgLAAQgKAAgIgIg");
        this.shape_1.setTransform(3, 0, 0.7, 0.7);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#1D1D1B").p("AAbg7IAAB3QAAALgIAIQgIAIgLAAQgKAAgIgIQgIgIAAgLIAAh3QAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALg");
        this.shape_2.setTransform(-3.2, 0, 0.7, 0.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgSBPQgIgIAAgMIAAh1QAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMIAAB1QAAAMgIAIQgIAIgLAAQgKAAgIgIg");
        this.shape_3.setTransform(-3.2, 0, 0.7, 0.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#1D1D1B").p("ACWiCIAAEEQAAAIgGAGQgFAGgIAAIkFAAQgIAAgFgGQgGgGAAgIIAAkEQAAgIAGgFQAFgGAIAAIEFAAQAIAAAFAGQAGAFAAAIg");
        this.shape_4.setTransform(0, 0, 0.7, 0.7);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#1D1D1B").s().p("AiCCWQgIAAgFgHQgGgFABgIIAAkDQgBgJAGgFQAFgGAIABIEFAAQAHgBAGAGQAFAFABAJIAAEDQgBAIgFAFQgGAHgHAAg");
        this.shape_5.setTransform(0, 0, 0.7, 0.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_5, p: {scaleX: 0.7, scaleY: 0.7}}, {t: this.shape_4, p: {scaleX: 0.7, scaleY: 0.7}}, {t: this.shape_3, p: {scaleX: 0.7, scaleY: 0.7, x: -3.2, y: 0}}, {t: this.shape_2, p: {scaleX: 0.7, scaleY: 0.7, x: -3.2, y: 0}}, {t: this.shape_1, p: {scaleX: 0.7, scaleY: 0.7, x: 3, y: 0}}, {t: this.shape, p: {scaleX: 0.7, scaleY: 0.7, x: 3, y: 0}}]}).to({state: [{t: this.shape_5, p: {scaleX: 0.77, scaleY: 0.77}}, {t: this.shape_4, p: {scaleX: 0.77, scaleY: 0.77}}, {t: this.shape_3, p: {scaleX: 0.77, scaleY: 0.77, x: -3.6, y: -0.1}}, {t: this.shape_2, p: {scaleX: 0.77, scaleY: 0.77, x: -3.6, y: -0.1}}, {t: this.shape_1, p: {scaleX: 0.77, scaleY: 0.77, x: 3.2, y: -0.1}}, {t: this.shape, p: {scaleX: 0.77, scaleY: 0.77, x: 3.2, y: -0.1}}]}, 1).to({state: [{t: this.shape_5, p: {scaleX: 0.7, scaleY: 0.7}}, {t: this.shape_4, p: {scaleX: 0.7, scaleY: 0.7}}, {t: this.shape_3, p: {scaleX: 0.7, scaleY: 0.7, x: -3.2, y: 0}}, {t: this.shape_2, p: {scaleX: 0.7, scaleY: 0.7, x: -3.2, y: 0}}, {t: this.shape_1, p: {scaleX: 0.7, scaleY: 0.7, x: 3, y: 0}}, {t: this.shape, p: {scaleX: 0.7, scaleY: 0.7, x: 3, y: 0}}]}, 1).to({state: [{t: this.shape_5, p: {scaleX: 0.7, scaleY: 0.7}}, {t: this.shape_4, p: {scaleX: 0.7, scaleY: 0.7}}, {t: this.shape_3, p: {scaleX: 0.7, scaleY: 0.7, x: -3.2, y: 0}}, {t: this.shape_2, p: {scaleX: 0.7, scaleY: 0.7, x: -3.2, y: 0}}, {t: this.shape_1, p: {scaleX: 0.7, scaleY: 0.7, x: 3, y: 0}}, {t: this.shape, p: {scaleX: 0.7, scaleY: 0.7, x: 3, y: 0}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.5, -10.4, 21, 21);


    (lib.btn_ampliar = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FEFEFE").s().p("AgPBcIAAhNIhMAAIAAgeIBMAAIAAhMIAfAAIAABMIBMAAIAAAeIhMAAIAABNg");
        this.shape.setTransform(0, 5.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADNDNQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYIAAFFQAAAZgSARg");
        this.shape_1.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
        this.shape_2.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
        this.shape_3.setTransform(-0.4, 5.3, 0.74, 0.74);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1}, {t: this.shape, p: {x: 0, y: 5.4}}]}).to({state: [{t: this.shape_2, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape_3, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape, p: {x: -0.3, y: 5.4}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {x: 0.1, y: 5.6}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {x: 0.1, y: 5.6}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.4, -9.8, 30, 30);
(lib.btn_ampliarneg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1E120D").s().p("AgPBcIAAhNIhMAAIAAgeIBMAAIAAhMIAfAAIAABMIBMAAIAAAeIhMAAIAABNg");
        this.shape.setTransform(0, 5.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("ADNDNQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYIAAFFQAAAZgSARg");
        this.shape_1.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
        this.shape_2.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
        this.shape_3.setTransform(-0.4, 5.3, 0.74, 0.74);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1}, {t: this.shape, p: {x: 0, y: 5.4}}]}).to({state: [{t: this.shape_2, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape_3, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape, p: {x: -0.3, y: 5.4}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {x: 0.1, y: 5.6}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {x: 0.1, y: 5.6}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.4, -9.8, 30, 30);

    (lib.btn_cerrar = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FEFEFE").s().p("AAcBCIgcgoIgcAoIgwAAIA0hCIg0hBIAyAAIAaAnIAcgnIAxAAIg0BBIA0BCg");
        this.shape.setTransform(-0.4, 4.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
        this.shape_1.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
        this.shape_2.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: -0.4, y: 4.5}}]}).to({state: [{t: this.shape_2, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape_1, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape, p: {scaleX: 1.177, scaleY: 1.177, x: 0.1, y: 5.2}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: -0.9, y: 4.5}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: -0.4, y: 4.8}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.5, -16.7, 38.7, 40.9);


    (lib.gris = function () {
        this.initialize();

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#666666").s().p("AipD2QhNg0gghTQgVg2AAg5QABgVACgWQARhuBThIQBUhKBwAAQBvAABUBKQBUBIASBuQADAYAAATQAAA4gXA3QggBThMA0QhMA2hdAAQhdAAhMg2gAhPDYQgRANgIAMQAyAWA2AAQA2AAAzgWQgHgNgTgMQgigZgtAAQgsAAgjAZgAgxBvQg8AFg4AXQgcALgPAKQAeAoApAZQANgRAYgTQAughA2AAQA7AAAuAhQAWARALARQApgaAcglQgPgKgagKQg2gYg9gFQgVgFgeAAQgcAAgVAFgAjuBvQAGAMAEAHQANgKAZgJQBXgpBngBQBnABBZApQAYAIAOAJIAIgRQAUguAFgwIoNAAQADAuAVAwgAEFgTQAAgPgDgJQgHgtgXgoQgYAPgnAOQhRAdhUAAQhTAAhSgcQgqgOgWgPQgXAogHAsIgDAYIILAAIAAAAgAjRidQATANAjANQBJAbBSAAQBSAABHgdQAjgNATgPQgZghgvgeQgKASgWAQQgsAig7AAQg7AAgtgiQgQgKgLgOIgIgKQgsAegaAlgAhqjvIAGAHQAHAJALAGQAjAZAvAAQAwgBAhgZQAPgLAHgOQgygSg1gBQg4AAgyAXg");
        this.shape.setTransform(30, 30);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 60, 60);



    (lib.btn_inicio = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // FlashAICB
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ah9CQIAAioIg3ABIC0h4IC1B4Ig1gBIAACnIhPAAIAAiZIhgAAIAACag");
        this.shape.setTransform(0, 0, 0.673, 0.673);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
        this.shape_1.setTransform(0, 0, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
        this.shape_2.setTransform(0, 0, 0.673, 0.673);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673}}]}).to({state: [{t: this.shape_2, p: {scaleX: 0.74, scaleY: 0.74}}, {t: this.shape_1, p: {scaleX: 0.74, scaleY: 0.74}}, {t: this.shape, p: {scaleX: 0.74, scaleY: 0.74}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.9, -14.9, 30, 30);
  (lib.btn_inicioneg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // FlashAICB
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1E120D").s().p("Ah9CQIAAioIg3ABIC0h4IC1B4Ig1gBIAACnIhPAAIAAiZIhgAAIAACag");
        this.shape.setTransform(0, 0, 0.673, 0.673);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
        this.shape_1.setTransform(0, 0, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
        this.shape_2.setTransform(0, 0, 0.673, 0.673);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673}}]}).to({state: [{t: this.shape_2, p: {scaleX: 0.74, scaleY: 0.74}}, {t: this.shape_1, p: {scaleX: 0.74, scaleY: 0.74}}, {t: this.shape, p: {scaleX: 0.74, scaleY: 0.74}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.9, -14.9, 30, 30);


    (lib.btn_anterior = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhviXIDfCXIjfCYg");
        this.shape.setTransform(-3.5, 0, 0.673, 0.673, 180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgvBWIAAirIBgAAIAACrg");
        this.shape_1.setTransform(6.5, 0.1, 0.673, 0.673, 180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADeCiQAAAZgRASQgSARgZAAIlDAAQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZg");
        this.shape_2.setTransform(0, 0, 0.673, 0.673, 180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#1E120D").s().p("AihDeQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZIAAFDQAAAZgRASQgSARgZAAg");
        this.shape_3.setTransform(0, 0, 0.673, 0.673, 180);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: 6.5}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: -3.5}}]}).to({state: [{t: this.shape_3, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_2, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_1, p: {scaleX: 0.741, scaleY: 0.741, x: 7.2}}, {t: this.shape, p: {scaleX: 0.741, scaleY: 0.741, x: -3.8}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: 6.5}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: -3.5}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: 6.5}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: -3.5}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.9, -14.9, 30, 30);
  (lib.btn_anteriorneg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1E120D").s().p("AhviXIDfCXIjfCYg");
        this.shape.setTransform(-3.5, 0, 0.673, 0.673, 180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#1E120D").s().p("AgvBWIAAirIBgAAIAACrg");
        this.shape_1.setTransform(6.5, 0.1, 0.673, 0.673, 180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("ADeCiQAAAZgRASQgSARgZAAIlDAAQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZg");
        this.shape_2.setTransform(0, 0, 0.673, 0.673, 180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AihDeQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZIAAFDQAAAZgRASQgSARgZAAg");
        this.shape_3.setTransform(0, 0, 0.673, 0.673, 180);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: 6.5}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: -3.5}}]}).to({state: [{t: this.shape_3, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_2, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_1, p: {scaleX: 0.741, scaleY: 0.741, x: 7.2}}, {t: this.shape, p: {scaleX: 0.741, scaleY: 0.741, x: -3.8}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: 6.5}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: -3.5}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: 6.5}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: -3.5}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.9, -14.9, 30, 30);


    (lib.btn_siguiente = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhviXIDfCXIjfCYg");
        this.shape.setTransform(3.6, 0, 0.673, 0.673);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgvBWIAAirIBgAAIAACrg");
        this.shape_1.setTransform(-6.4, 0, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADeCiQAAAZgRASQgSARgZAAIlDAAQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZg");
        this.shape_2.setTransform(0, 0, 0.673, 0.673);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#1E120D").s().p("AihDeQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZIAAFDQAAAZgRASQgSARgZAAg");
        this.shape_3.setTransform(0, 0, 0.673, 0.673);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: -6.4}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: 3.6}}]}).to({state: [{t: this.shape_3, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_2, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_1, p: {scaleX: 0.741, scaleY: 0.741, x: -7.1}}, {t: this.shape, p: {scaleX: 0.741, scaleY: 0.741, x: 3.9}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: -6.4}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: 3.6}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: -6.4}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: 3.6}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.9, -14.9, 30, 30);
  (lib.btn_siguienteneg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1E120D").s().p("AhviXIDfCXIjfCYg");
        this.shape.setTransform(3.6, 0, 0.673, 0.673);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#1E120D").s().p("AgvBWIAAirIBgAAIAACrg");
        this.shape_1.setTransform(-6.4, 0, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("ADeCiQAAAZgRASQgSARgZAAIlDAAQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZg");
        this.shape_2.setTransform(0, 0, 0.673, 0.673);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AihDeQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZIAAFDQAAAZgRASQgSARgZAAg");
        this.shape_3.setTransform(0, 0, 0.673, 0.673);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: -6.4}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: 3.6}}]}).to({state: [{t: this.shape_3, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_2, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_1, p: {scaleX: 0.741, scaleY: 0.741, x: -7.1}}, {t: this.shape, p: {scaleX: 0.741, scaleY: 0.741, x: 3.9}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: -6.4}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: 3.6}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, x: -6.4}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: 3.6}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.9, -14.9, 30, 30);

    (lib.btn_info = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FEFEFE").s().p("AgUBbIAAiCIApAAIAACCgAgVg6IAAggIArAAIAAAgg");
        this.shape.setTransform(15.3, 16);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADeCiQAAAZgRASQgSARgZAAIlDAAQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZg");
        this.shape_1.setTransform(15, 15.9, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#1E120D").s().p("AihDeQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZIAAFDQAAAZgRASQgSARgZAAg");
        this.shape_2.setTransform(15, 15.9, 0.673, 0.673);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 15.3, y: 16}}]}).to({state: [{t: this.shape_2, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_1, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape, p: {scaleX: 1.225, scaleY: 1.054, x: 15.4, y: 15.8}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 15.3, y: 16}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 15.3, y: 16}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 30, 30);
 (lib.btn_infoneg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1E120D").s().p("AgUBbIAAiCIApAAIAACCgAgVg6IAAggIArAAIAAAgg");
        this.shape.setTransform(15.3, 16);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FEFEFE").ss(1, 0, 1).p("ADeCiQAAAZgRASQgSARgZAAIlDAAQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZg");
        this.shape_1.setTransform(15, 15.9, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FEFEFE").s().p("AihDeQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZIAAFDQAAAZgRASQgSARgZAAg");
        this.shape_2.setTransform(15, 15.9, 0.673, 0.673);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 15.3, y: 16}}]}).to({state: [{t: this.shape_2, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape_1, p: {scaleX: 0.741, scaleY: 0.741}}, {t: this.shape, p: {scaleX: 1.225, scaleY: 1.054, x: 15.4, y: 15.8}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 15.3, y: 16}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: 15.3, y: 16}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15, -15, 30, 30);

    (lib.btn_cerrar = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FEFEFE").s().p("AAcBCIgcgoIgcAoIgwAAIA0hCIg0hBIAyAAIAaAnIAcgnIAxAAIg0BBIA0BCg");
        this.shape.setTransform(-0.4, 4.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
        this.shape_1.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
        this.shape_2.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: -0.4, y: 4.5}}]}).to({state: [{t: this.shape_2, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape_1, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape, p: {scaleX: 1.177, scaleY: 1.177, x: 0.1, y: 5.2}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: -0.9, y: 4.5}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: -0.4, y: 4.8}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.5, -16.7, 38.7, 40.9);
  (lib.btn_cerrarneg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1E120D").s().p("AAcBCIgcgoIgcAoIgwAAIA0hCIg0hBIAyAAIAaAnIAcgnIAxAAIg0BBIA0BCg");
        this.shape.setTransform(-0.4, 4.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#FEFEFE").ss(1, 0, 1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
        this.shape_1.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FEFEFE").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
        this.shape_2.setTransform(-0.4, 5.1, 0.673, 0.673);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: -0.4, y: 4.5}}]}).to({state: [{t: this.shape_2, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape_1, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape, p: {scaleX: 1.177, scaleY: 1.177, x: 0.1, y: 5.2}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: -0.9, y: 4.5}}]}, 1).to({state: [{t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape, p: {scaleX: 1, scaleY: 1, x: -0.4, y: 4.8}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.5, -16.7, 38.7, 40.9);

    (lib.btn_practica = function (texto, mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.text = new cjs.Text(texto, "bold 16px Verdana");
        this.text.textAlign = "center";
        this.text.lineHeight = 18;
        this.text.lineWidth = 149;
        this.text.setTransform(74.5, 10);

        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(1, 1, 1).p("AK4imI1vAAQhGAAAABDIAADHQAABDBGAAIVvAAQBGAAAAhDIAAjHQAAhDhGAAg");
        this.shape.setTransform(76.7, 16.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("Aq3CnQhGAAAAhDIAAjHQAAhDBGAAIVvAAQBGAAAABDIAADHQAABDhGAAg");
        this.shape_1.setTransform(76.7, 16.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#CCCCCC").s().p("Aq3CnQhGAAAAhDIAAjHQAAhDBGAAIVvAAQBGAAAABDIAADHQAABDhGAAg");
        this.shape_2.setTransform(76.7, 16.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#666666").s().p("Aq3CnQhGAAAAhDIAAjHQAAhDBGAAIVvAAQBGAAAABDIAADHQAABDhGAAg");
        this.shape_3.setTransform(76.7, 16.8);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s("#000000").ss(1, 1, 1).rr(-65, -15, 130, 30, 6);
        this.shape_4.setTransform(76.7, 16.8, 1.18, 1.118);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}, {t: this.text, p: {color: "#000000"}}]}).to({state: [{t: this.shape_2}, {t: this.shape}, {t: this.text, p: {color: "#000000"}}]}, 1).to({state: [{t: this.shape_3}, {t: this.text, p: {color: "#FFFFFF"}}]}, 1).to({state: [{t: this.shape_4}, {t: this.text, p: {color: "#000000"}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 153.4, 33.6);

    (lib.fadeText = function (textohtml, espera, delay, mode, startPosition, loop) {
        espera = espera || 0;
        delay = delay || 20;
        this.initialize(mode, startPosition, loop, {});
        this.texto = new cjs.DOMElement(textohtml);
        this.texto.alpha = 0;
        this.timeline.addTween(cjs.Tween.get(this.texto).wait(espera).to({alpha: 1}, delay).wait(100000));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 950, 608);
    (lib.fadeElement = function (elemento, espera, delay, mode, startPosition, loop) {
        espera = espera || 0;
        delay = delay || 20;
        this.initialize(mode, startPosition, loop, {});
        elemento.alpha = 0;
        this.timeline.addTween(cjs.Tween.get(elemento).wait(espera).to({alpha: 1}, delay).wait(100000));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 950, 608);
(lib.crossFadeElement = function (elemento1,elemento2, espera, delay, mode, startPosition, loop) {
        espera = espera || 0;
        delay = delay || 20;
        this.initialize(mode, startPosition, false, {});
        elemento1.alpha = 1;
        elemento2.alpha=0;
        this.timeline.addTween(cjs.Tween.get(elemento1).wait(espera).to({alpha: 0}, delay).wait(1));
        this.timeline.addTween(cjs.Tween.get(elemento2).wait(espera).to({alpha: 1}, delay).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 950, 608);
})(lib = lib || {}, images = images || {}, createjs = createjs || {}, textos = textos || {});
var lib, images, createjs, textos;


function clearTexts() {
    var childNodes = document.body.childNodes;
    for (var i = childNodes.length - 1; i >= 0; i--) {
       if (childNodes[i].nodeType == 1 && (childNodes[i].nodeName == 'DIV' || childNodes[i].nodeName == 'IMG')){
            var child = childNodes[i];
            if (child != null)
                child.parentNode.removeChild(child);
        }
    }

}
function createDiv(texto, family, size, width, height, top, left, align, id) {

    var html = document.createElement('div');
    html.id = id;
    html.innerHTML = texto;

    html.style.textAlign = align;
    html.style.visibility = "hidden";
    html.style.fontFamily = family;
    html.style.fontSize = size;
    html.style.backgroundColor = "transparent";
    html.style.width = width;
    html.style.height = height;
    html.style.position = "absolute";

    document.body.appendChild(html);
    return html;
}

