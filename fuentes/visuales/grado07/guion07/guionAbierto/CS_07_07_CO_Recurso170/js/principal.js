(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:


    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
        titulo1(this,txt['titulo']);
        this.btn_meridional = new lib.btn_meridional();
	this.btn_meridional.setTransform(194.8,479.8,1,1,0,0,0,-69.9,-24.9);
	new cjs.ButtonHelper(this.btn_meridional, 0, 1, 2, false, new lib.btn_meridional(), 3);

	this.btn_central = new lib.btn_central();
	this.btn_central.setTransform(194.8,345.1,1,1,0,0,0,-69.9,-24.9);
	new cjs.ButtonHelper(this.btn_central, 0, 1, 2, false, new lib.btn_central(), 3);

	this.btn_septentrional = new lib.btn_septentrional();
	this.btn_septentrional.setTransform(194.8,211.1,1,1,0,0,0,-69.9,-24.9);
	new cjs.ButtonHelper(this.btn_septentrional, 0, 1, 2, false, new lib.btn_septentrional(), 3);

	this.instance = new lib.mapa_mudo_bueno_ok();
	this.instance.setTransform(329.5,103);
        this.btn_septentrional.on("click", function (evt) {
            putStage(new lib.frame2());
        });
 this.btn_central.on("click", function (evt) {
            putStage(new lib.frame3());
        });
         this.btn_meridional.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.addChild(this.logo, this.titulo, this.siguiente, this.instance,this.btn_septentrional,this.btn_central,this.btn_meridional);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);


    (lib.frame2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        titulo1(this, txt['titulo']);
     	this.btn_niger = new lib.btn_niger();
	this.btn_niger.setTransform(381.5,370.9,1,1,0,0,0,-51.2,-14.9);
	new cjs.ButtonHelper(this.btn_niger, 0, 1, 2, false, new lib.btn_niger(), 3);

	this.btn_ahaggar = new lib.btn_ahaggar();
	this.btn_ahaggar.setTransform(550.4,292.2,1,1,0,0,0,-50.9,-14.9);
	new cjs.ButtonHelper(this.btn_ahaggar, 0, 1, 2, false, new lib.btn_ahaggar(), 3);

	this.btn_sahara = new lib.btn_sahara();
	this.btn_sahara.setTransform(500.9,250,1,1,0,0,0,-51.5,-14.9);
	new cjs.ButtonHelper(this.btn_sahara, 0, 1, 2, false, new lib.btn_sahara(), 3);
  this.btn_sahara.on("click", function (evt) {
            putStage(new lib.frame2_1());
        });
this.btn_ahaggar.on("click", function (evt) {
            putStage(new lib.frame2_2());
        });
        this.btn_niger.on("click", function (evt) {
            putStage(new lib.frame2_3());
        });
        this.btn_meridional = new lib.btn_meridional();
	this.btn_meridional.setTransform(194.8,479.8,1,1,0,0,0,-69.9,-24.9);
	new cjs.ButtonHelper(this.btn_meridional, 0, 1, 2, false, new lib.btn_meridional(), 3);

      	this.btn_central = new lib.btn_central();
	this.btn_central.setTransform(194.8,345.1,1,1,0,0,0,-69.9,-24.9);
	new cjs.ButtonHelper(this.btn_central, 0, 1, 2, false, new lib.btn_central(), 3);

	this.btn_septentrional = new lib.btn_septentrional("single",2);
	this.btn_septentrional.setTransform(194.8,211.1,1,1,0,0,0,-69.9,-24.9);

	this.instance = new lib.mapa_mudo_bueno_ok();
	this.instance.setTransform(329.5,103);
 this.btn_central.on("click", function (evt) {
            putStage(new lib.frame3());
        });
         this.btn_meridional.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAl1AeFMhLoAAAMAAAg8JMBLoAAAg");
	this.shape.setTransform(593.5,333.6,1.171,1.127);

	this.instance = new lib.tercionorte_okk();
	this.instance.setTransform(309.5,116);   
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
   
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.shape,this.btn_sahara,this.btn_ahaggar,this.btn_niger,this.btn_septentrional,this.btn_central,this.btn_meridional);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);


    (lib.frame2_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
         var html = createDiv(txt['titulo1'], "Verdana", "25px", '530px', '40px', "20px", "185px", "left");
    this.texto = new cjs.DOMElement(html);
    this.texto.setTransform(360, -408);
    
    html = createDiv(txt['texto1a'], "Verdana", "20px", '530px', '40px', "20px", "185px", "left");
    this.texto2 = new cjs.DOMElement(html);
    this.texto2.setTransform(360, -348);
    
        this.instance = new lib.sahara();
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });
  
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.texto,this.texto2);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);


    (lib.frame2_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
          var html = createDiv(txt['titulo2'], "Verdana", "25px", '530px', '40px', "20px", "185px", "left");
    this.texto = new cjs.DOMElement(html);
    this.texto.setTransform(360, -408);
    
    html = createDiv(txt['texto2a'], "Verdana", "20px", '530px', '40px', "20px", "185px", "left");
    this.texto2 = new cjs.DOMElement(html);
    this.texto2.setTransform(360, -348);
    
        this.instance = new lib.ahaggar();
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });
  
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.texto,this.texto2);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
  
    (lib.frame2_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        var html = createDiv(txt['titulo3'], "Verdana", "25px", '530px', '40px', "20px", "185px", "left");
    this.texto = new cjs.DOMElement(html);
    this.texto.setTransform(360, -408);
    
    html = createDiv(txt['texto3a'], "Verdana", "20px", '530px', '40px', "20px", "185px", "left");
    this.texto2 = new cjs.DOMElement(html);
    this.texto2.setTransform(360, -348);
    
        this.instance = new lib.niger();  
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });
  
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.texto,this.texto2);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 

    (lib.frame3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        titulo1(this, txt['titulo']);
        
           this.btn_meridional = new lib.btn_meridional();
	this.btn_meridional.setTransform(194.8,479.8,1,1,0,0,0,-69.9,-24.9);
	new cjs.ButtonHelper(this.btn_meridional, 0, 1, 2, false, new lib.btn_meridional(), 3);

	this.btn_central = new lib.btn_central("single",2);
	this.btn_central.setTransform(194.8,345.1,1,1,0,0,0,-69.9,-24.9);

	this.btn_septentrional = new lib.btn_septentrional();
	this.btn_septentrional.setTransform(194.8,211.1,1,1,0,0,0,-69.9,-24.9);
	new cjs.ButtonHelper(this.btn_septentrional, 0, 1, 2, false, new lib.btn_septentrional(), 3);

        this.btn_septentrional.on("click", function (evt) {
            putStage(new lib.frame2());
        });
          this.btn_meridional.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        
        
    this.btn_seychelles = new lib.btn_seychelles();
	this.btn_seychelles.setTransform(812.8,495.9,1,1,0,0,0,-60.4,-14.9);
	new cjs.ButtonHelper(this.btn_seychelles, 0, 1, 2, false, new lib.btn_seychelles(), 3);


	this.btn_rift = new lib.btn_rift();
	this.btn_rift.setTransform(719.5,335.2,1,1,0,0,0,-57.4,-14.9);
	new cjs.ButtonHelper(this.btn_rift, 0, 1, 2, false, new lib.btn_rift(), 3);

	this.btn_kilimanjaro = new lib.btn_kilimanjaro();
	this.btn_kilimanjaro.setTransform(675.9,467.5,1,1,0,0,0,-87.4,-14.9);
	new cjs.ButtonHelper(this.btn_kilimanjaro, 0, 1, 2, false, new lib.btn_kilimanjaro(), 3);

this.btn_rift.on("click", function (evt) {
            putStage(new lib.frame3_1());
        });
this.btn_kilimanjaro.on("click", function (evt) {
            putStage(new lib.frame3_2());
        });
this.btn_seychelles.on("click", function (evt) {
            putStage(new lib.frame3_3());
        });


	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAl1AeFMhLoAAAMAAAg8JMBLoAAAg");
	this.shape.setTransform(593.5,333.6,1.171,1.127);

	this.instance = new lib.Mapadebits1();
	this.instance.setTransform(310,115.6);    
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
   
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.shape,this.btn_kilimanjaro,this.btn_rift,this.btn_niger2,this.btn_seychelles,this.btn_septentrional,this.btn_central,this.btn_meridional);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);


    (lib.frame3_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
          var html = createDiv(txt['titulo4'], "Verdana", "25px", '530px', '40px', "20px", "185px", "left");
    this.texto = new cjs.DOMElement(html);
    this.texto.setTransform(360, -408);
    
    html = createDiv(txt['texto4a'], "Verdana", "20px", '530px', '40px', "20px", "185px", "left");
    this.texto2 = new cjs.DOMElement(html);
    this.texto2.setTransform(360, -348);
    
        this.instance = new lib.rift();
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });
  
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.texto,this.texto2);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
  
    (lib.frame3_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
           var html = createDiv(txt['titulo5'], "Verdana", "25px", '530px', '40px', "20px", "185px", "left");
    this.texto = new cjs.DOMElement(html);
    this.texto.setTransform(360, -408);
    
    html = createDiv(txt['texto5a'], "Verdana", "20px", '530px', '40px', "20px", "185px", "left");
    this.texto2 = new cjs.DOMElement(html);
    this.texto2.setTransform(360, -348);
    
        this.instance = new lib.kilimanjaro();
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });
  
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.texto,this.texto2);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 

    (lib.frame3_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
          var html = createDiv(txt['titulo6'], "Verdana", "25px", '530px', '40px', "20px", "185px", "left");
    this.texto = new cjs.DOMElement(html);
    this.texto.setTransform(360, -408);
    
    html = createDiv(txt['texto6a'], "Verdana", "20px", '530px', '40px', "20px", "185px", "left");
    this.texto2 = new cjs.DOMElement(html);
    this.texto2.setTransform(360, -348);
    
        this.instance = new lib.seychelles();
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });
  
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.texto,this.texto2);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);


    (lib.frame4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        titulo1(this, txt['titulo']);
        
                  this.btn_meridional = new lib.btn_meridional("single",2);
	this.btn_meridional.setTransform(194.8,479.8,1,1,0,0,0,-69.9,-24.9);

	this.btn_central = new lib.btn_central();
	this.btn_central.setTransform(194.8,345.1,1,1,0,0,0,-69.9,-24.9);
	new cjs.ButtonHelper(this.btn_central, 0, 1, 2, false, new lib.btn_central(), 3);

	this.btn_septentrional = new lib.btn_septentrional();
	this.btn_septentrional.setTransform(194.8,211.1,1,1,0,0,0,-69.9,-24.9);
	new cjs.ButtonHelper(this.btn_septentrional, 0, 1, 2, false, new lib.btn_septentrional(), 3);

        this.btn_septentrional.on("click", function (evt) {
            putStage(new lib.frame2());
        });
 this.btn_central.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        
        this.btn_kalahari = new lib.btn_kalahari();
	this.btn_kalahari.setTransform(601.7,405.4,1,1,0,0,0,-60.4,-24.9);
	new cjs.ButtonHelper(this.btn_kalahari, 0, 1, 2, false, new lib.btn_kalahari(), 3);
         this.btn_kalahari.on("click", function (evt) {
            putStage(new lib.frame4_1());
        });

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAl1AeFMhLoAAAMAAAg8JMBLoAAAg");
	this.shape.setTransform(593.5,333.6,1.171,1.127);

	this.instance = new lib.terciosur_okk();
	this.instance.setTransform(309.6,116,1.004,1);


        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
   
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.btn_septentrional,this.btn_central,this.btn_meridional,this.instance,this.shape,this.btn_kalahari);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);


    (lib.frame4_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
          var html = createDiv(txt['titulo7'], "Verdana", "25px", '530px', '40px', "20px", "185px", "left");
    this.texto = new cjs.DOMElement(html);
    this.texto.setTransform(360, -408);
    
    html = createDiv(txt['texto7a'], "Verdana", "20px", '530px', '40px', "20px", "185px", "left");
    this.texto2 = new cjs.DOMElement(html);
    this.texto2.setTransform(360, -348);
    
        this.instance = new lib.kalahari();
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });
  
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.texto,this.texto2);
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

     /* function basicos(escena, home, anterior, siguiente, informacion, cerrar) {
        escena.logo = new lib.gris();
        escena.logo.setTransform(45, 45, 1, 1, 0, 0, 0, 30, 30);
        escena.logo.alpha = 0.301;
        if (home == 1) {
            escena.home = new lib.btn_inicio();
            escena.home.setTransform(30, 578);
            new cjs.ButtonHelper(escena.home, 0, 1, 2, false, new lib.btn_inicio(), 3);
        }
        if (anterior == 1) {
            escena.anterior = new lib.btn_anterior();
            escena.anterior.setTransform(83, 578);
            new cjs.ButtonHelper(escena.anterior, 0, 1, 2, false, new lib.btn_anterior(), 3);
        }
        if (siguiente == 1) {
            escena.siguiente = new lib.btn_siguiente();
            escena.siguiente.setTransform(126, 578);
            new cjs.ButtonHelper(escena.siguiente, 0, 1, 2, false, new lib.btn_siguiente(), 3);
        }
        if (informacion == 1) {
            escena.informacion = new lib.btn_info();
            escena.informacion.setTransform(158.6, 562);
            new cjs.ButtonHelper(escena.informacion, 0, 1, 2, false, new lib.btn_info(), 3);
        }
        if (cerrar == 1) {
            escena.cerrar = new lib.btn_cerrar();
            escena.cerrar.setTransform(920, 25, 0.775, 0.733);
            new cjs.ButtonHelper(escena.cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        }
    }*/
    
    function basicos(escena, home, anterior, siguiente, informacion, cerrar, audio) {
        escena.logo = new lib.gris();
        escena.logo.setTransform(45, 45, 1, 1, 0, 0, 0, 30, 30);
        escena.logo.alpha = 0.301;
        if (home == 1) {
            escena.home = new lib.btn_inicio();
            escena.home.setTransform(60, 578,1.15,1.15);
            new cjs.ButtonHelper(escena.home, 0, 1, 2, false, new lib.btn_inicio(), 3);
        }
        if (home == 2) {
            escena.home = new lib.btn_inicioneg();
            escena.home.setTransform(60, 57,1.15,1.15);
            new cjs.ButtonHelper(escena.home, 0, 1, 2, false, new lib.btn_inicio(), 3);
        }
        if (anterior == 1) {
            escena.anterior = new lib.btn_anterior();
            escena.anterior.setTransform(125, 578,1.15,1.15);
            new cjs.ButtonHelper(escena.anterior, 0, 1, 2, false, new lib.btn_anterior(), 3);
        }
         if (anterior == 2) {
            escena.anterior = new lib.btn_anteriorneg();
            escena.anterior.setTransform(125, 578,1.15,1.15);
            new cjs.ButtonHelper(escena.anterior, 0, 1, 2, false, new lib.btn_anterior(), 3);
        }
        if (siguiente == 1) {
            escena.siguiente = new lib.btn_siguiente();
            escena.siguiente.setTransform(170, 578,1.15,1.15);
            new cjs.ButtonHelper(escena.siguiente, 0, 1, 2, false, new lib.btn_siguiente(), 3);
        }
          if (siguiente == 2) {
            escena.siguiente = new lib.btn_siguienteNeg();
            escena.siguiente.setTransform(170, 578,1.15,1.15);
            new cjs.ButtonHelper(escena.siguiente, 0, 1, 2, false, new lib.btn_siguiente(), 3);
        }
        
      if (informacion == 1) {
            escena.informacion = new lib.btn_info();
            if (audio==1)
            escena.informacion.setTransform(280, 560,1.15,1.15);
        else
            escena.informacion.setTransform(105, 560,1.15,1.15);
            new cjs.ButtonHelper(escena.informacion, 0, 1, 2, false, new lib.btn_info(), 3);
        }
      if (informacion == 2) {
            escena.informacion = new lib.btn_infoneg();
            if (audio==1)
            escena.informacion.setTransform(280, 560,1.15,1.15);
        else
            escena.informacion.setTransform(150, 560,1.15,1.15);
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
(lib.sahara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// ImatgeMapa
	this.instance = new lib.CdP_Sahara1();
	this.instance.setTransform(190.3,339.3,0.996,1);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:-1,x:190.6,y:338.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.2,150.1,385.6,376);

(lib.niger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// ImatgeMapa
	this.instance = new lib.CdP_Niger1();
	this.instance.setTransform(190.3,339.3,0.996,1);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:-1,x:190.6,y:338.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.2,150.1,385.6,376);
(lib.ahaggar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// ImatgeMapa
	this.instance = new lib.CdP_Ahaggar1();
	this.instance.setTransform(190.3,339.3,0.996,1);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:-1,x:190.6,y:338.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.2,150.1,385.6,376);
(lib.kalahari = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// ImatgeMapa
	this.instance = new lib.CdP_Kalahari1();
	this.instance.setTransform(190.3,339.3,0.996,1);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:-1,x:190.6,y:338.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.2,150.1,385.6,376);
(lib.seychelles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// ImatgeMapa
	this.instance = new lib.CdP_Seychelles1();
	this.instance.setTransform(190.3,339.3,0.996,1);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:-1,x:190.6,y:338.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.2,150.1,385.6,376);
(lib.rift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// ImatgeMapa
	this.instance = new lib.CdP_Rift1();
	this.instance.setTransform(190.3,339.3,0.996,1);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:-1,x:190.6,y:338.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.2,150.1,385.6,376);
(lib.kilimanjaro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// ImatgeMapa
	this.instance = new lib.CdP_Kilimanjaro1();
	this.instance.setTransform(190.3,339.3,0.996,1);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:-1,x:190.6,y:338.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.2,150.1,385.6,376);

 (lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,436);

(lib._00056K01 = function() {
	this.initialize(img._00056K01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,582,376);


(lib._0006BU01 = function() {
	this.initialize(img._0006BU01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,379,376);


(lib._0006R901 = function() {
	this.initialize(img._0006R901);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,376);


(lib._000HOP01 = function() {
	this.initialize(img._000HOP01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,376);


(lib._000HZ501 = function() {
	this.initialize(img._000HZ501);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,376);


(lib._000M4J01 = function() {
	this.initialize(img._000M4J01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,568,376);


(lib._000OOO01 = function() {
	this.initialize(img._000OOO01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,376);


(lib._000RP101 = function() {
	this.initialize(img._000RP101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,376);


(lib._000T8701 = function() {
	this.initialize(img._000T8701);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,376);


(lib._000THR01 = function() {
	this.initialize(img._000THR01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,563,376);


(lib._000TJY01 = function() {
	this.initialize(img._000TJY01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,906,376);


(lib._00149C01 = function() {
	this.initialize(img._00149C01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,518,376);


(lib._002AF401 = function() {
	this.initialize(img._002AF401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,569,376);


(lib._002DKT01 = function() {
	this.initialize(img._002DKT01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,501,376);


(lib.europa = function() {
	this.initialize(img.europa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,484);


(lib.europa_Llanuras = function() {
	this.initialize(img.europa_Llanuras);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,484);


(lib.europa_Montanyas = function() {
	this.initialize(img.europa_Montanyas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,484);


(lib.europa_Peninsulas = function() {
	this.initialize(img.europa_Peninsulas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,484);


(lib.mapa_mudo_bueno_ok = function() {
	this.initialize(img.mapa_mudo_bueno_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,484);


(lib.mapa_mudo_ok = function() {
	this.initialize(img.mapa_mudo_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,484);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.terciocentro_okk = function() {
	this.initialize(img.terciocentro_okk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,565,440);


(lib.tercionorte_okk = function() {
	this.initialize(img.tercionorte_okk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,434);


(lib.terciosur_okk = function() {
	this.initialize(img.terciosur_okk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,564,434);


(lib.CdP_Sahara2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000OOO01();
	this.instance.setTransform(-581.9,-373.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581.9,-373.7,387,376);


(lib.CdP_Niger2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._0006BU01();
	this.instance.setTransform(-581.9,-373.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581.9,-373.7,379,376);


(lib.CdP_Ahaggar2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000HOP01();
	this.instance.setTransform(-581.9,-373.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581.9,-373.7,573,376);


(lib.CdP_Kalahari2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._002AF401();
	this.instance.setTransform(-581.9,-373.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581.9,-373.7,569,376);


(lib.CdP_Seychelles2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000T8701();
	this.instance.setTransform(-581.9,-373.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581.9,-373.7,566,376);


(lib.CdP_Rift2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000HZ501();
	this.instance.setTransform(-581.9,-373.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581.9,-373.7,566,376);


(lib.CdP_Kilimanjaro2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._002DKT01();
	this.instance.setTransform(-581.9,-373.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581.9,-373.7,501,376);


(lib.btn_seychelles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Seychelles", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 115;
	this.text.setTransform(-62.4,-27.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-60.5,-15,121,30,6);
	this.shape.setTransform(-60.4,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-60.5,-15,121,30,6);
	this.shape_1.setTransform(-60.4,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-60.5,-15,121,30,6);
	this.shape_2.setTransform(-60.4,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.9,-29.9,121,30);


(lib.btn_septentrional = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("África\nseptentrional", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 134;
	this.text.setTransform(-72.1,-46.9+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70,-25,140,50,6);
	this.shape.setTransform(-69.9,-24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-70,-25,140,50,6);
	this.shape_1.setTransform(-69.9,-24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-70,-25,140,50,6);
	this.shape_2.setTransform(-69.9,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.9,-49.9,140,50);


(lib.btn_sahara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Desierto del Sahara", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 199;
	this.text.setTransform(-2.4,-24.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AP3htQAAg8g8AAI91AAQg8AAAAA8IAADaQAAA9A8AAId1AAQA8AAAAg9g");
	this.shape.setTransform(-0.8,-11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Au5CqQg9gBAAg8IAAjZQAAg9A9ABIdzAAQA9gBAAA9IAADZQAAA8g9ABg");
	this.shape_1.setTransform(-0.8,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("Au5CqQg9gBAAg8IAAjZQAAg9A9ABIdzAAQA9gBAAA9IAADZQAAA8g9ABg");
	this.shape_2.setTransform(-0.8,-11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Au5CqQg9gBAAg8IAAjZQAAg9A9ABIdzAAQA9gBAAA9IAADZQAAA8g9ABg");
	this.shape_3.setTransform(-0.8,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.3,-28.8,203.4,34);


(lib.btn_rift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Valle del Rift ", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 135;
	this.text.setTransform(-46.7,-26.9+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("ALPBSIAAijQAAg8g8AAI0lAAQg8AAAAA8IAACjQAAA8A8AAIUlAAQA8AAAAg8g");
	this.shape.setTransform(-43.2,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqSCOQg8AAAAg8IAAijQAAg8A8AAIUlAAQA8AAAAA8IAACjQAAA8g8AAg");
	this.shape_1.setTransform(-43.2,-14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AqSCOQg8AAAAg8IAAijQAAg8A8AAIUlAAQA8AAAAA8IAACjQAAA8g8AAg");
	this.shape_2.setTransform(-43.2,-14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").p("ALPBSIAAijQAAg8g8AAI0lAAQg8AAAAA8IAACjQAAA8A8AAIUlAAQA8AAAAg8g");
	this.shape_3.setTransform(-43.2,-14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AqSCOQg8AAAAg8IAAijQAAg8A8AAIUlAAQA8AAAAA8IAACjQAAA8g8AAg");
	this.shape_4.setTransform(-43.2,-14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.2,-29.1,144,28.5);


(lib.btn_niger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Níger", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 98;
	this.text.setTransform(-52.8,-27.2+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-51,-15,102,30,6);
	this.shape.setTransform(-51.2,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-51,-15,102,30,6);
	this.shape_1.setTransform(-51.2,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-51,-15,102,30,6);
	this.shape_2.setTransform(-51.2,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.2,-29.9,102.3,30);


(lib.btn_meridional = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("África\nmeridional", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 132;
	this.text.setTransform(-72.3,-46.6+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70,-25,140,50,6);
	this.shape.setTransform(-69.9,-24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-70,-25,140,50,6);
	this.shape_1.setTransform(-69.9,-24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-70,-25,140,50,6);
	this.shape_2.setTransform(-69.9,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.9,-49.9,140,50);


(lib.btn_kilimanjaro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Kilimanjaro", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 122;
	this.text.setTransform(-93.4,-24.6+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-63.5,-15,127,30,6);
	this.shape.setTransform(-91.5,-11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-63.5,-15,127,30,6);
	this.shape_1.setTransform(-91.5,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-63.5,-15,127,30,6);
	this.shape_2.setTransform(-91.5,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-26.9,127,30);


(lib.btn_kalahari = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Desierto de\nKalahari", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 116;
	this.text.setTransform(-62.6,-47.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-60.5,-25,121,50,6);
	this.shape.setTransform(-60.4,-24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-60.5,-25,121,50,6);
	this.shape_1.setTransform(-60.4,-24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-60.5,-25,121,50,6);
	this.shape_2.setTransform(-60.4,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.9,-49.9,121,50);


(lib.btn_inicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah9CQIAAioIg3ABIC0h4IC1B4Ig1gBIAACnIhPAAIAAiZIhgAAIAACag");
	this.shape.setTransform(0,0,0.673,0.673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1E120D").ss(1,0,1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
	this.shape_1.setTransform(0,0,0.673,0.673);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
	this.shape_2.setTransform(0,0,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673}}]}).to({state:[{t:this.shape_2,p:{scaleX:0.74,scaleY:0.74}},{t:this.shape_1,p:{scaleX:0.74,scaleY:0.74}},{t:this.shape,p:{scaleX:0.74,scaleY:0.74}}]},1).to({state:[{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673}}]},1).to({state:[{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,30,30);


(lib.btn_cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("x", "bold 22px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 27;
	this.text.setTransform(-2.7,-12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1E120D").ss(1,0,1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
	this.shape.setTransform(-0.4,5.1,0.673,0.673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
	this.shape_1.setTransform(-0.4,5.1,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]}).to({state:[{t:this.shape_1,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.shape,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.text,p:{scaleX:1.1,scaleY:1.1,x:-4.2,y:-14.4}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-12.8,31,33.1);


(lib.btn_central = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("África central", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 133;
	this.text.setTransform(-72,-36.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70,-25,140,50,6);
	this.shape.setTransform(-69.9,-24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-70,-25,140,50,6);
	this.shape_1.setTransform(-69.9,-24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-70,-25,140,50,6);
	this.shape_2.setTransform(-69.9,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.9,-49.9,140,50);


(lib.btn_ahaggar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Ahaggar", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 97;
	this.text.setTransform(-52.9,-27.5+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-51,-15,102,30,6);
	this.shape.setTransform(-50.9,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-51,-15,102,30,6);
	this.shape_1.setTransform(-50.9,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-51,-15,102,30,6);
	this.shape_2.setTransform(-50.9,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-29.9,102,30);


(lib.CdP_Sahara1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.CdP_Sahara2();
	this.instance.setTransform(165.6,-1.8,1,1,0,0,0,-290.9,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-388.3,regY:-185.6,x:68.1,y:-0.9},0).wait(14).wait(1).to({x:66.3},0).wait(1).to({x:64.4},0).wait(1).to({x:62.6},0).wait(1).to({x:60.8},0).wait(1).to({x:59},0).wait(1).to({x:57.1},0).wait(1).to({x:55.3},0).wait(1).to({x:53.5},0).wait(1).to({x:51.6},0).wait(1).to({x:49.8},0).wait(1).to({x:48},0).wait(1).to({x:46.2},0).wait(1).to({x:44.3},0).wait(1).to({x:42.5},0).wait(1).to({x:40.7},0).wait(1).to({x:38.8},0).wait(1).to({x:37},0).wait(1).to({x:35.2},0).wait(1).to({x:33.4},0).wait(1).to({x:31.5},0).wait(1).to({x:29.7},0).wait(1).to({x:27.9},0).wait(1).to({x:26},0).wait(1).to({x:24.2},0).wait(1).to({x:22.4},0).wait(1).to({x:20.6},0).wait(1).to({x:18.7},0).wait(1).to({x:16.9},0).wait(1).to({x:15.1},0).wait(1).to({x:13.2},0).wait(1).to({x:11.4},0).wait(1).to({x:9.6},0).wait(1).to({x:7.8},0).wait(1).to({x:5.9},0).wait(1).to({x:4.1},0).wait(1).to({x:2.3},0).wait(1).to({x:0.5},0).wait(1).to({x:-1.2},0).wait(1).to({x:-3},0).wait(1).to({x:-4.8},0).wait(1).to({x:-6.7},0).wait(1).to({x:-8.5},0).wait(1).to({x:-10.3},0).wait(1).to({x:-12.1},0).wait(1).to({x:-14},0).wait(1).to({x:-15.8},0).wait(1).to({x:-17.6},0).wait(1).to({x:-19.5},0).wait(1).to({x:-21.3},0).wait(1).to({x:-23.1},0).wait(1).to({x:-24.9},0).wait(1).to({x:-26.8},0).wait(1).to({x:-28.6},0).wait(1).to({x:-30.4},0).wait(1).to({x:-32.3},0).wait(1).to({x:-34.1},0).wait(1).to({x:-35.9},0).wait(1).to({x:-37.7},0).wait(1).to({x:-39.6},0).wait(1).to({x:-41.4},0).wait(1).to({x:-43.2},0).wait(1).to({x:-45.1},0).wait(1).to({x:-46.9},0).wait(1).to({x:-48.7},0).wait(1).to({x:-50.5},0).wait(1).to({x:-52.4},0).wait(1).to({x:-54.2},0).wait(1).to({x:-56},0).wait(1).to({x:-57.9},0).wait(1).to({x:-59.7},0).wait(1).to({x:-61.5},0).wait(1).to({x:-63.3},0).wait(1).to({x:-65.2},0).wait(1).to({x:-67},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-189.1,387,376);


(lib.CdP_Niger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.CdP_Niger2();
	this.instance.setTransform(165.6,-1.8,1,1,0,0,0,-290.9,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-392.3,regY:-185.6,x:64.1,y:-0.9},0).wait(14).wait(1).to({x:62.4},0).wait(1).to({x:60.7},0).wait(1).to({x:58.9},0).wait(1).to({x:57.2},0).wait(1).to({x:55.5},0).wait(1).to({x:53.8},0).wait(1).to({x:52.1},0).wait(1).to({x:50.3},0).wait(1).to({x:48.6},0).wait(1).to({x:46.9},0).wait(1).to({x:45.2},0).wait(1).to({x:43.5},0).wait(1).to({x:41.7},0).wait(1).to({x:40},0).wait(1).to({x:38.3},0).wait(1).to({x:36.6},0).wait(1).to({x:34.9},0).wait(1).to({x:33.1},0).wait(1).to({x:31.4},0).wait(1).to({x:29.7},0).wait(1).to({x:28},0).wait(1).to({x:26.3},0).wait(1).to({x:24.5},0).wait(1).to({x:22.8},0).wait(1).to({x:21.1},0).wait(1).to({x:19.4},0).wait(1).to({x:17.7},0).wait(1).to({x:15.9},0).wait(1).to({x:14.2},0).wait(1).to({x:12.5},0).wait(1).to({x:10.8},0).wait(1).to({x:9.1},0).wait(1).to({x:7.3},0).wait(1).to({x:5.6},0).wait(1).to({x:3.9},0).wait(1).to({x:2.2},0).wait(1).to({x:0.5},0).wait(1).to({x:-1.1},0).wait(1).to({x:-2.8},0).wait(1).to({x:-4.5},0).wait(1).to({x:-6.2},0).wait(1).to({x:-8},0).wait(1).to({x:-9.7},0).wait(1).to({x:-11.4},0).wait(1).to({x:-13.1},0).wait(1).to({x:-14.8},0).wait(1).to({x:-16.6},0).wait(1).to({x:-18.3},0).wait(1).to({x:-20},0).wait(1).to({x:-21.7},0).wait(1).to({x:-23.4},0).wait(1).to({x:-25.2},0).wait(1).to({x:-26.9},0).wait(1).to({x:-28.6},0).wait(1).to({x:-30.3},0).wait(1).to({x:-32},0).wait(1).to({x:-33.8},0).wait(1).to({x:-35.5},0).wait(1).to({x:-37.2},0).wait(1).to({x:-38.9},0).wait(1).to({x:-40.6},0).wait(1).to({x:-42.4},0).wait(1).to({x:-44.1},0).wait(1).to({x:-45.8},0).wait(1).to({x:-47.5},0).wait(1).to({x:-49.2},0).wait(1).to({x:-51},0).wait(1).to({x:-52.7},0).wait(1).to({x:-54.4},0).wait(1).to({x:-56.1},0).wait(1).to({x:-57.8},0).wait(1).to({x:-59.6},0).wait(1).to({x:-61.3},0).wait(1).to({x:-63},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-189.1,379,376);


(lib.CdP_Ahaggar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.CdP_Ahaggar2();
	this.instance.setTransform(165.6,-1.8,1,1,0,0,0,-290.9,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-295.3,regY:-185.6,x:161.1,y:-0.9},0).wait(14).wait(1).to({x:156.8},0).wait(1).to({x:152.4},0).wait(1).to({x:148.1},0).wait(1).to({x:143.7},0).wait(1).to({x:139.4},0).wait(1).to({x:135.1},0).wait(1).to({x:130.7},0).wait(1).to({x:126.4},0).wait(1).to({x:122},0).wait(1).to({x:117.7},0).wait(1).to({x:113.3},0).wait(1).to({x:109},0).wait(1).to({x:104.7},0).wait(1).to({x:100.3},0).wait(1).to({x:96},0).wait(1).to({x:91.6},0).wait(1).to({x:87.3},0).wait(1).to({x:83},0).wait(1).to({x:78.6},0).wait(1).to({x:74.3},0).wait(1).to({x:69.9},0).wait(1).to({x:65.6},0).wait(1).to({x:61.3},0).wait(1).to({x:56.9},0).wait(1).to({x:52.6},0).wait(1).to({x:48.2},0).wait(1).to({x:43.9},0).wait(1).to({x:39.5},0).wait(1).to({x:35.2},0).wait(1).to({x:30.9},0).wait(1).to({x:26.5},0).wait(1).to({x:22.2},0).wait(1).to({x:17.8},0).wait(1).to({x:13.5},0).wait(1).to({x:9.2},0).wait(1).to({x:4.8},0).wait(1).to({x:0.5},0).wait(1).to({x:-3.7},0).wait(1).to({x:-8},0).wait(1).to({x:-12.3},0).wait(1).to({x:-16.7},0).wait(1).to({x:-21},0).wait(1).to({x:-25.4},0).wait(1).to({x:-29.7},0).wait(1).to({x:-34.1},0).wait(1).to({x:-38.4},0).wait(1).to({x:-42.7},0).wait(1).to({x:-47.1},0).wait(1).to({x:-51.4},0).wait(1).to({x:-55.8},0).wait(1).to({x:-60.1},0).wait(1).to({x:-64.4},0).wait(1).to({x:-68.8},0).wait(1).to({x:-73.1},0).wait(1).to({x:-77.5},0).wait(1).to({x:-81.8},0).wait(1).to({x:-86.1},0).wait(1).to({x:-90.5},0).wait(1).to({x:-94.8},0).wait(1).to({x:-99.2},0).wait(1).to({x:-103.5},0).wait(1).to({x:-107.9},0).wait(1).to({x:-112.2},0).wait(1).to({x:-116.5},0).wait(1).to({x:-120.9},0).wait(1).to({x:-125.2},0).wait(1).to({x:-129.6},0).wait(1).to({x:-133.9},0).wait(1).to({x:-138.2},0).wait(1).to({x:-142.6},0).wait(1).to({x:-146.9},0).wait(1).to({x:-151.3},0).wait(1).to({x:-155.6},0).wait(1).to({x:-159.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-189.1,573,376);


(lib.CdP_Kalahari1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.CdP_Kalahari2();
	this.instance.setTransform(165.6,-1.8,1,1,0,0,0,-290.9,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-297.3,regY:-185.6,x:159.1,y:-0.9},0).wait(14).wait(1).to({x:157.3},0).wait(1).to({x:155.4},0).wait(1).to({x:153.6},0).wait(1).to({x:151.8},0).wait(1).to({x:149.9},0).wait(1).to({x:148.1},0).wait(1).to({x:146.3},0).wait(1).to({x:144.4},0).wait(1).to({x:142.6},0).wait(1).to({x:140.8},0).wait(1).to({x:138.9},0).wait(1).to({x:137.1},0).wait(1).to({x:135.3},0).wait(1).to({x:133.4},0).wait(1).to({x:131.6},0).wait(1).to({x:129.8},0).wait(1).to({x:127.9},0).wait(1).to({x:126.1},0).wait(1).to({x:124.3},0).wait(1).to({x:122.4},0).wait(1).to({x:120.6},0).wait(1).to({x:118.8},0).wait(1).to({x:116.9},0).wait(1).to({x:115.1},0).wait(1).to({x:113.3},0).wait(1).to({x:111.4},0).wait(1).to({x:109.6},0).wait(1).to({x:107.8},0).wait(1).to({x:105.9},0).wait(1).to({x:104.1},0).wait(1).to({x:102.3},0).wait(1).to({x:100.4},0).wait(1).to({x:98.6},0).wait(1).to({x:96.8},0).wait(1).to({x:94.9},0).wait(1).to({x:93.1},0).wait(1).to({x:91.3},0).wait(1).to({x:89.4},0).wait(1).to({x:87.6},0).wait(1).to({x:85.8},0).wait(1).to({x:83.9},0).wait(1).to({x:82.1},0).wait(1).to({x:80.3},0).wait(1).to({x:78.4},0).wait(1).to({x:76.6},0).wait(1).to({x:74.8},0).wait(1).to({x:72.9},0).wait(1).to({x:71.1},0).wait(1).to({x:69.3},0).wait(1).to({x:67.4},0).wait(1).to({x:65.6},0).wait(1).to({x:63.8},0).wait(1).to({x:61.9},0).wait(1).to({x:60.1},0).wait(1).to({x:58.3},0).wait(1).to({x:56.4},0).wait(1).to({x:54.6},0).wait(1).to({x:52.8},0).wait(1).to({x:50.9},0).wait(1).to({x:49.1},0).wait(1).to({x:47.3},0).wait(1).to({x:45.4},0).wait(1).to({x:43.6},0).wait(1).to({x:41.8},0).wait(1).to({x:39.9},0).wait(1).to({x:38.1},0).wait(1).to({x:36.3},0).wait(1).to({x:34.4},0).wait(1).to({x:32.6},0).wait(1).to({x:30.8},0).wait(1).to({x:28.9},0).wait(1).to({x:27.1},0).wait(1).to({x:25.3},0).wait(1).to({x:23.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-189.1,569,376);


(lib.CdP_Seychelles1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.CdP_Seychelles2();
	this.instance.setTransform(165.6,-1.8,1,1,0,0,0,-290.9,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-298.8,regY:-185.6,x:157.6,y:-0.9},0).wait(14).wait(1).to({x:153.4},0).wait(1).to({x:149.2},0).wait(1).to({x:145},0).wait(1).to({x:140.7},0).wait(1).to({x:136.5},0).wait(1).to({x:132.3},0).wait(1).to({x:128.1},0).wait(1).to({x:123.9},0).wait(1).to({x:119.7},0).wait(1).to({x:115.4},0).wait(1).to({x:111.2},0).wait(1).to({x:107},0).wait(1).to({x:102.8},0).wait(1).to({x:98.6},0).wait(1).to({x:94.4},0).wait(1).to({x:90.2},0).wait(1).to({x:85.9},0).wait(1).to({x:81.7},0).wait(1).to({x:77.5},0).wait(1).to({x:73.3},0).wait(1).to({x:69.1},0).wait(1).to({x:64.9},0).wait(1).to({x:60.6},0).wait(1).to({x:56.4},0).wait(1).to({x:52.2},0).wait(1).to({x:48},0).wait(1).to({x:43.8},0).wait(1).to({x:39.6},0).wait(1).to({x:35.3},0).wait(1).to({x:31.1},0).wait(1).to({x:26.9},0).wait(1).to({x:22.7},0).wait(1).to({x:18.5},0).wait(1).to({x:14.3},0).wait(1).to({x:10.1},0).wait(1).to({x:5.8},0).wait(1).to({x:1.6},0).wait(1).to({x:-2.4},0).wait(1).to({x:-6.6},0).wait(1).to({x:-10.8},0).wait(1).to({x:-15},0).wait(1).to({x:-19.3},0).wait(1).to({x:-23.5},0).wait(1).to({x:-27.7},0).wait(1).to({x:-31.9},0).wait(1).to({x:-36.1},0).wait(1).to({x:-40.3},0).wait(1).to({x:-44.5},0).wait(1).to({x:-48.8},0).wait(1).to({x:-53},0).wait(1).to({x:-57.2},0).wait(1).to({x:-61.4},0).wait(1).to({x:-65.6},0).wait(1).to({x:-69.8},0).wait(1).to({x:-74.1},0).wait(1).to({x:-78.3},0).wait(1).to({x:-82.5},0).wait(1).to({x:-86.7},0).wait(1).to({x:-90.9},0).wait(1).to({x:-95.1},0).wait(1).to({x:-99.3},0).wait(1).to({x:-103.6},0).wait(1).to({x:-107.8},0).wait(1).to({x:-112},0).wait(1).to({x:-116.2},0).wait(1).to({x:-120.4},0).wait(1).to({x:-124.6},0).wait(1).to({x:-128.9},0).wait(1).to({x:-133.1},0).wait(1).to({x:-137.3},0).wait(1).to({x:-141.5},0).wait(1).to({x:-145.7},0).wait(1).to({x:-149.9},0).wait(1).to({x:-154.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-189.1,566,376);


(lib.CdP_Rift1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.CdP_Rift2();
	this.instance.setTransform(165.6,-1.8,1,1,0,0,0,-290.9,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-298.8,regY:-185.6,x:157.6,y:-0.9},0).wait(14).wait(1).to({x:153.4},0).wait(1).to({x:149.2},0).wait(1).to({x:145},0).wait(1).to({x:140.7},0).wait(1).to({x:136.5},0).wait(1).to({x:132.3},0).wait(1).to({x:128.1},0).wait(1).to({x:123.9},0).wait(1).to({x:119.7},0).wait(1).to({x:115.4},0).wait(1).to({x:111.2},0).wait(1).to({x:107},0).wait(1).to({x:102.8},0).wait(1).to({x:98.6},0).wait(1).to({x:94.4},0).wait(1).to({x:90.2},0).wait(1).to({x:85.9},0).wait(1).to({x:81.7},0).wait(1).to({x:77.5},0).wait(1).to({x:73.3},0).wait(1).to({x:69.1},0).wait(1).to({x:64.9},0).wait(1).to({x:60.6},0).wait(1).to({x:56.4},0).wait(1).to({x:52.2},0).wait(1).to({x:48},0).wait(1).to({x:43.8},0).wait(1).to({x:39.6},0).wait(1).to({x:35.3},0).wait(1).to({x:31.1},0).wait(1).to({x:26.9},0).wait(1).to({x:22.7},0).wait(1).to({x:18.5},0).wait(1).to({x:14.3},0).wait(1).to({x:10.1},0).wait(1).to({x:5.8},0).wait(1).to({x:1.6},0).wait(1).to({x:-2.4},0).wait(1).to({x:-6.6},0).wait(1).to({x:-10.8},0).wait(1).to({x:-15},0).wait(1).to({x:-19.3},0).wait(1).to({x:-23.5},0).wait(1).to({x:-27.7},0).wait(1).to({x:-31.9},0).wait(1).to({x:-36.1},0).wait(1).to({x:-40.3},0).wait(1).to({x:-44.5},0).wait(1).to({x:-48.8},0).wait(1).to({x:-53},0).wait(1).to({x:-57.2},0).wait(1).to({x:-61.4},0).wait(1).to({x:-65.6},0).wait(1).to({x:-69.8},0).wait(1).to({x:-74.1},0).wait(1).to({x:-78.3},0).wait(1).to({x:-82.5},0).wait(1).to({x:-86.7},0).wait(1).to({x:-90.9},0).wait(1).to({x:-95.1},0).wait(1).to({x:-99.3},0).wait(1).to({x:-103.6},0).wait(1).to({x:-107.8},0).wait(1).to({x:-112},0).wait(1).to({x:-116.2},0).wait(1).to({x:-120.4},0).wait(1).to({x:-124.6},0).wait(1).to({x:-128.9},0).wait(1).to({x:-133.1},0).wait(1).to({x:-137.3},0).wait(1).to({x:-141.5},0).wait(1).to({x:-145.7},0).wait(1).to({x:-149.9},0).wait(1).to({x:-154.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-189.1,566,376);


(lib.CdP_Kilimanjaro1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.CdP_Kilimanjaro2();
	this.instance.setTransform(165.6,-1.8,1,1,0,0,0,-290.9,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-331.3,regY:-185.6,x:125.1,y:-0.9},0).wait(14).wait(1).to({x:123.8},0).wait(1).to({x:122.5},0).wait(1).to({x:121.2},0).wait(1).to({x:119.8},0).wait(1).to({x:118.5},0).wait(1).to({x:117.2},0).wait(1).to({x:115.9},0).wait(1).to({x:114.6},0).wait(1).to({x:113.3},0).wait(1).to({x:112},0).wait(1).to({x:110.6},0).wait(1).to({x:109.3},0).wait(1).to({x:108},0).wait(1).to({x:106.7},0).wait(1).to({x:105.4},0).wait(1).to({x:104.1},0).wait(1).to({x:102.8},0).wait(1).to({x:101.4},0).wait(1).to({x:100.1},0).wait(1).to({x:98.8},0).wait(1).to({x:97.5},0).wait(1).to({x:96.2},0).wait(1).to({x:94.9},0).wait(1).to({x:93.6},0).wait(1).to({x:92.2},0).wait(1).to({x:90.9},0).wait(1).to({x:89.6},0).wait(1).to({x:88.3},0).wait(1).to({x:87},0).wait(1).to({x:85.7},0).wait(1).to({x:84.4},0).wait(1).to({x:83},0).wait(1).to({x:81.7},0).wait(1).to({x:80.4},0).wait(1).to({x:79.1},0).wait(1).to({x:77.8},0).wait(1).to({x:76.5},0).wait(1).to({x:75.2},0).wait(1).to({x:73.8},0).wait(1).to({x:72.5},0).wait(1).to({x:71.2},0).wait(1).to({x:69.9},0).wait(1).to({x:68.6},0).wait(1).to({x:67.3},0).wait(1).to({x:66},0).wait(1).to({x:64.6},0).wait(1).to({x:63.3},0).wait(1).to({x:62},0).wait(1).to({x:60.7},0).wait(1).to({x:59.4},0).wait(1).to({x:58.1},0).wait(1).to({x:56.8},0).wait(1).to({x:55.4},0).wait(1).to({x:54.1},0).wait(1).to({x:52.8},0).wait(1).to({x:51.5},0).wait(1).to({x:50.2},0).wait(1).to({x:48.9},0).wait(1).to({x:47.6},0).wait(1).to({x:46.2},0).wait(1).to({x:44.9},0).wait(1).to({x:43.6},0).wait(1).to({x:42.3},0).wait(1).to({x:41},0).wait(1).to({x:39.7},0).wait(1).to({x:38.4},0).wait(1).to({x:37},0).wait(1).to({x:35.7},0).wait(1).to({x:34.4},0).wait(1).to({x:33.1},0).wait(1).to({x:31.8},0).wait(1).to({x:30.5},0).wait(1).to({x:29.2},0).wait(1).to({x:27.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.4,-189.1,501,376);

    

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

function chuleta() {
    //Esqueletos popup; BG_09_07_08
    //Cajas con animaciones: FQ_09_08_04 FQ_10_11_01
    //Textos pinchar y popups respuestas: LC_10_10_05
    //gif: MTB_10_02_06
    //Imagen+texto
    this.imagen = new lib.Bitmap45copy();
    var ancho = imagen(this, 1, 0.471, 0.471);
    texto(this, txt['pantalla2_2'], 0, ancho);

//Texto simple
    var html = createDiv(texto, "Verdana", "20px", '770px', '10px', "20px", "185px", "left");
    this.texto = new cjs.DOMElement(html);
    this.texto.setTransform(90, -482);
    //Botón ampliar
    this.ampliar = new lib.btn_ampliar();
    this.ampliar.setTransform(376.7, 178);
    new cjs.ButtonHelper(this.ampliar, 0, 1, 2, false, new lib.btn_ampliar(), 3);

    this.ampliar.on("click", function (evt) {
        putStage(new lib.frame1_1b());
    });

    //Fade text y element
    var html = createDiv(txt['txt_01_01'], "Verdana", "20px", '800px', '100px', "20px", "185px", "left");
    this.texto1 = new lib.fadeText(html, 0);
    this.texto1.setTransform(100, -520);
    var flecha = new lib.flecha();
    this.flechaA = new lib.fadeElement(flecha, 25);
    this.flechaA.setTransform(300.1, 193.2, 1, 1, 0, 0, 0, 5.7, 36.8);
    
    //Botón práctiva
    this.practica = new lib.btn_practica(txt['textbtnpractica']);
        this.practica.setTransform(837, 575, 1, 1, 0, 0, 0, 65, 15);
        new cjs.ButtonHelper(this.practica, 0, 1, 2, false, new lib.btn_practica(), 3);

}