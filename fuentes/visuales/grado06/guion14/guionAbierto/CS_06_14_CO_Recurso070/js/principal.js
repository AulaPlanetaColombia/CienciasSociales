(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
      basicos(this, 0,0,0,0,0,0);
      this.instance = new lib.boton("Sistemas políticos de\nla Grecia clásica");
	this.instance.setTransform(304.9,325.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.boton(), 3);

	this.instance_1 = new lib.boton("Organización de la\nsociedad ateniense");
	this.instance_1.setTransform(304.9,247.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.boton(), 3);
 this.instance_1.on("click", function (evt) {
            putStage(new lib.frame2());
        });
    this.instance.on("click", function (evt) {
            putStage(new lib.frame3());
        });
	this.instance_2 = new lib.image25016();
	this.instance_2.setTransform(0,0);

	 this.practica = new lib.btn_practica(txt['btnpractica']);
        this.practica.setTransform(120, 565, 1, 1, 0, 0, 0, 65, 15);
        new cjs.ButtonHelper(this.practica, 0, 1, 2, false, new lib.btn_practica(), 3);
        this.practica.on("click", function (evt) {
        putStage(new lib.frame5());
    });

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhKTAvqIAAgoMAAAherMCUnAAAMAAABfTg");
	this.shape_1.setTransform(478,304.1);
        
    
        this.addChild(this.logo, this.titulo, this.siguiente, this.anterior,this.home,this.informacion,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance,this.practica);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
       this.text = new cjs.Text(txt['titulo'], "46px Georgia");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(474.5,76.9);

	this.instance = new lib.image25077();
	this.instance.setTransform(709.6,258.4,0.4,0.4);
  this.instance = new lib.fadeElement(this.instance, 25);
  
	this.instance_1 = new lib.image25068();
	this.instance_1.setTransform(534.5,258.4,0.4,0.4);
this.instance_1 = new lib.fadeElement(this.instance_1, 15);
  
	this.instance_2 = new lib.image25059();
	this.instance_2.setTransform(361.5,258.4,0.4,0.4);
this.instance_2 = new lib.fadeElement(this.instance_2, 15);
  
	this.instance_3 = new lib.boton2("¿Tenían las mujeres\nlos mismos derechos\nque los ciudadanos?");
	this.instance_3.setTransform(269.1,471.2);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.boton(), 3);

	this.instance_4 = new lib.boton("¿Quiénes eran\nlos metecos?");
	this.instance_4.setTransform(269.1,389.2);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.boton(), 3);

	this.instance_5 = new lib.boton("¿Quiénes eran\nlos esclavos?");
	this.instance_5.setTransform(271.9,310.2);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.boton(), 3);

	this.instance_6 = new lib.boton("¿Quiénes eran\nlos ciudadanos?");
	this.instance_6.setTransform(271.9,230.1);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.boton(), 3);

        this.instance_6.on("click", function (evt) {
            putStage(new lib.frame2_1());
        });
         this.instance_5.on("click", function (evt) {
            putStage(new lib.frame2_2());
        });
         this.instance_4.on("click", function (evt) {
            putStage(new lib.frame2_3());
        });
         this.instance_3.on("click", function (evt) {
            putStage(new lib.frame2_4());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.siguiente,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
   (lib.frame2_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
     this.cerrar = new lib.btn_cerrarneg();
	
	this.cerrar.setTransform(880,57);
  new cjs.ButtonHelper(this.cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);

this.text = new cjs.Text("REFLEXIONA", "bold 20px Verdana", "#FF741F");
	this.text.lineHeight = 20;
	this.text.setTransform(82.4,389);

	this.text_1 = new cjs.Text(txt['text3'], "20px Verdana");
	this.text_1.lineHeight = 20;
	this.text_1.setTransform(79.4,418);
this.text_1.lineWidth = 270;
	this.text_2 = new cjs.Text("Hijos", "20px Verdana");
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(74,150.9);
  var html = createDiv(txt['text2'], "Verdana", "20px", '330px', '40px', "20px", "185px", "left");
    this.text_2 = new cjs.DOMElement(html);
    this.text_2.setTransform(54, 151-608);
	this.text_3 = new cjs.Text("Los ciudadanos", "bold 30px Verdana");
	this.text_3.lineHeight = 30;
        
	this.text_3.setTransform(81.7,90.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#666666").ss(1,1,1).dr(-448.6,-284.1,897.2,568.2);
	this.shape.setTransform(474.8,288.6,0.974,0.868);

	this.instance = new lib.image25145();
	this.instance.setTransform(390.2,42.5,0.87,0.87);
  
         this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.instance,this.shape,this.text_3,this.text_2,this.text_1,this.text,this.titulo, this.instance,this.text, this.cerrar);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame2_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
     this.cerrar = new lib.btn_cerrarneg();
	
	this.cerrar.setTransform(880,57);
  new cjs.ButtonHelper(this.cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);

this.text = new cjs.Text("REFLEXIONA", "bold 20px Verdana", "#FF741F");
	this.text.lineHeight = 20;
	this.text.setTransform(82.4,389);

	this.text_1 = new cjs.Text(txt['text5'], "20px Verdana");
	this.text_1.lineHeight = 20;
	this.text_1.setTransform(79.4,418);
this.text_1.lineWidth = 470;
	this.text_2 = new cjs.Text("Hijos", "20px Verdana");
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(74,150.9);
  var html = createDiv(txt['text4'], "Verdana", "20px", '430px', '40px', "20px", "185px", "left");
    this.text_2 = new cjs.DOMElement(html);
    this.text_2.setTransform(54, 151-608);
	this.text_3 = new cjs.Text("Los esclavos", "bold 30px Verdana");
	this.text_3.lineHeight = 30;
        
	this.text_3.setTransform(81.7,90.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#666666").ss(1,1,1).dr(-448.6,-284.1,897.2,568.2);
	this.shape.setTransform(474.8,288.6,0.974,0.868);

	this.instance = new lib.image25217();
	this.instance.setTransform(622.4,42.6,0.81,0.81);

         this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.instance,this.shape,this.text_3,this.text_2,this.text_1,this.text,this.titulo, this.instance,this.text, this.cerrar);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame2_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
     this.cerrar = new lib.btn_cerrarneg();
	
	this.cerrar.setTransform(880,57);
  new cjs.ButtonHelper(this.cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);

this.text = new cjs.Text("REFLEXIONA", "bold 20px Verdana", "#FF741F");
	this.text.lineHeight = 20;
	this.text.setTransform(82.4,389);

	this.text_1 = new cjs.Text(txt['text7'], "20px Verdana");
	this.text_1.lineHeight = 20;
	this.text_1.setTransform(79.4,418);
this.text_1.lineWidth = 300;
	this.text_2 = new cjs.Text("Hijos", "20px Verdana");
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(74,150.9);
  var html = createDiv(txt['text6'], "Verdana", "20px", '350px', '40px', "20px", "185px", "left");
    this.text_2 = new cjs.DOMElement(html);
    this.text_2.setTransform(54, 151-608);
	this.text_3 = new cjs.Text("Los metecos", "bold 30px Verdana");
	this.text_3.lineHeight = 30;
        
	this.text_3.setTransform(81.7,90.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#666666").ss(1,1,1).dr(-448.6,-284.1,897.2,568.2);
	this.shape.setTransform(474.8,288.6,0.974,0.868);

this.instance = new lib.image25307();
	this.instance.setTransform(388,43,1.15,1.15);

         this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.instance,this.shape,this.text_3,this.text_2,this.text_1,this.text,this.titulo, this.instance,this.text, this.cerrar);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame2_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
     this.cerrar = new lib.btn_cerrarneg();
	
	this.cerrar.setTransform(880,57);
  new cjs.ButtonHelper(this.cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);

this.text = new cjs.Text("REFLEXIONA", "bold 20px Verdana", "#FF741F");
	this.text.lineHeight = 20;
	this.text.setTransform(82.4,389);

	this.text_1 = new cjs.Text(txt['text9'], "20px Verdana");
	this.text_1.lineHeight = 20;
	this.text_1.setTransform(79.4,418);
this.text_1.lineWidth = 420;
	this.text_2 = new cjs.Text("Hijos", "20px Verdana");
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(74,150.9);
  var html = createDiv(txt['text8'], "Verdana", "20px", '420px', '40px', "20px", "185px", "left");
    this.text_2 = new cjs.DOMElement(html);
    this.text_2.setTransform(54, 151-608);
	this.text_3 = new cjs.Text("Las mujeres", "bold 30px Verdana");
	this.text_3.lineHeight = 30;
        
	this.text_3.setTransform(81.7,90.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#666666").ss(1,1,1).dr(-448.6,-284.1,897.2,568.2);
	this.shape.setTransform(474.8,288.6,0.974,0.868);

	this.instance = new lib.image25380();
	this.instance.setTransform(525,41.7,0.65,0.65);


         this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.instance,this.shape,this.text_3,this.text_2,this.text_1,this.text,this.titulo, this.instance,this.text, this.cerrar);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
            this.text = new cjs.Text(txt['tit1'], "46px Georgia");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(474.5,76.9);

this.instance = new lib.image25402();
	this.instance.setTransform(214,147.7,0.49,0.49);
   this.instance = new lib.fadeElement(this.instance, 5);
 
	this.instance_1 = new lib.boton3("Esparta");
	this.instance_1.setTransform(216.5,298.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.boton2(), 3);

	this.instance_2 = new lib.boton3("Atenas","single",2);
	this.instance_2.setTransform(214.4,218.1);
//	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.boton2(), 3);
        
        this.instance_1.on("click", function (evt) {
            putStage(new lib.frame4());
        });
      
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente,this.instance_2,this.instance_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

     (lib.frame4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
            this.text = new cjs.Text(txt['tit1'], "46px Georgia");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.setTransform(474.5,76.9);

this.instance = new lib.image25431();
	this.instance.setTransform(214,147.7,0.49,0.49);
   this.instance = new lib.fadeElement(this.instance, 5);
 
	this.instance_1 = new lib.boton3("Esparta","single",2);
	this.instance_1.setTransform(216.5,298.2);
//	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.boton2(), 3);

	this.instance_2 = new lib.boton3("Atenas");
	this.instance_2.setTransform(214.4,218.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.boton2(), 3);
        
      
        this.instance_2.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente,this.instance_2,this.instance_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame5 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
      this.text = new cjs.Text("Busca", "20px Verdana");
	this.text.lineHeight = 20;
	this.text.setTransform(83,152.9);
 var html = createDiv(txt['text1'], "Verdana", "20px", '770px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(90, 153-608);
      this.text = new lib.fadeElement(this.text, 15);
  
	this.instance = new lib.image25477();
	this.instance.setTransform(628.6,-10.3);
  this.instance = new lib.fadeElement(this.instance, 0);
  
         this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.instance,this.text);
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
   
   (lib.image25016 = function() {
	this.initialize(img.image25016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.image25059 = function() {
	this.initialize(img.image25059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.image25068 = function() {
	this.initialize(img.image25068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.image25077 = function() {
	this.initialize(img.image25077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.image25145 = function() {
	this.initialize(img.image25145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,567);


(lib.image25217 = function() {
	this.initialize(img.image25217);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,608);


(lib.image25307 = function() {
	this.initialize(img.image25307);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,455,428);


(lib.image25380 = function() {
	this.initialize(img.image25380);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,761);


(lib.image25402 = function() {
	this.initialize(img.image25402);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1446,920);


(lib.image25431 = function() {
	this.initialize(img.image25431);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1405,921);


(lib.image25477 = function() {
	this.initialize(img.image25477);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,561);



(lib.boton = function(texto,mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text(texto, "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 259;
	this.text.setTransform(-81.4,-40+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape.setTransform(-79.9,-15,1.4,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_1.setTransform(-79.9,-14.9,1.4,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_2.setTransform(-79.9,-14.9,1.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-15}},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape,p:{y:-14.9}},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-45,263,60);
(lib.boton2 = function(texto,mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text(texto, "bold 15px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 259;
	this.text.setTransform(-81.4,-44+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape.setTransform(-79.9,-15,1.4,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_1.setTransform(-79.9,-14.9,1.4,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_2.setTransform(-79.9,-14.9,1.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-15}},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape,p:{y:-14.9}},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-45,263,60);
(lib.boton3 = function(texto,mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-15}},{t:this.text,p:{x:-81.9,lineWidth:84,color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{x:-82.4,lineWidth:85,color:"#000000"}},{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{x:-81.9,lineWidth:86,color:"#FFFFFF"}}]},1).to({state:[{t:this.shape,p:{y:-14.9}},{t:this.text,p:{x:-82.4,lineWidth:85,color:"#000000"}}]},1).wait(1));

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

