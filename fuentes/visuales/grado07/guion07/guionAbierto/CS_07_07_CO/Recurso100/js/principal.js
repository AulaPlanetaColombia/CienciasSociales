(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:


    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
        titulo1(this,txt['titulo']);

	this.btn_peninsules = new lib.peninsules();
	this.btn_peninsules.setTransform(182.4,441.7,1,1,0,0,0,65.5,26.6);
	new cjs.ButtonHelper(this.btn_peninsules, 0, 1, 2, false, new lib.peninsules(), 3);

	this.btn_llanures = new lib.llanures();
	this.btn_llanures.setTransform(182.1,349.3,1,1,0,0,0,65.2,35.6);
	new cjs.ButtonHelper(this.btn_llanures, 0, 1, 2, false, new lib.llanures(), 3);

	this.btn_montanyes = new lib.montanyes();
	this.btn_montanyes.setTransform(181.9,255.4,1,1,0,0,0,65,25);
	new cjs.ButtonHelper(this.btn_montanyes, 0, 1, 2, false, new lib.montanyes(), 3);

    this.btn_montanyes.on("click", function (evt) {
            putStage(new lib.frame2());
        });

 this.btn_llanures.on("click", function (evt) {
            putStage(new lib.frame3());
        }); 
        this.btn_peninsules.on("click", function (evt) {
            putStage(new lib.frame4());
        });
	this.instance = new lib.mapa_mudo_ok();
	this.instance.setTransform(420,102);
        
        this.addChild(this.logo, this.titulo, this.siguiente,this.instance,this.btn_montanyes,this.btn_llanures,this.btn_peninsules);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);


    (lib.frame2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        titulo1(this, txt['titulo']);
        this.btn_peninsules = new lib.peninsules();
	this.btn_peninsules.setTransform(182.4,441.7,1,1,0,0,0,65.5,26.6);
	new cjs.ButtonHelper(this.btn_peninsules, 0, 1, 2, false, new lib.peninsules(), 3);

	this.btn_llanures = new lib.llanures();
	this.btn_llanures.setTransform(182.1,349.3,1,1,0,0,0,65.2,35.6);
	new cjs.ButtonHelper(this.btn_llanures, 0, 1, 2, false, new lib.llanures(), 3);

	this.btn_montanyes = new lib.montanyes("single",2);
	this.btn_montanyes.setTransform(181.9,255.4,1,1,0,0,0,65,25);

 this.btn_llanures.on("click", function (evt) {
            putStage(new lib.frame3());
        }); 
        this.btn_peninsules.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        
        this.btn_fuji = new lib.fujiyama_1();
	this.btn_fuji.setTransform(780.9,334.6,1,1,0,0,0,65.8,17.1);
	new cjs.ButtonHelper(this.btn_fuji, 0, 1, 2, false, new lib.fujiyama_1(), 3);

	this.btn_tibet = new lib.tibet_1();
	this.btn_tibet.setTransform(677.9,375.3,1,1,0,0,0,65.8,17.1);
	new cjs.ButtonHelper(this.btn_tibet, 0, 1, 2, false, new lib.tibet_1(), 3);

	this.btn_himalaya = new lib.himalaya_1();
	this.btn_himalaya.setTransform(631.9,412.9,1,1,0,0,0,65.8,17.1);
	new cjs.ButtonHelper(this.btn_himalaya, 0, 1, 2, false, new lib.himalaya_1(), 3);

    this.btn_fuji.on("click", function (evt) {
            putStage(new lib.frame2_1());
        });
    this.btn_tibet.on("click", function (evt) {
            putStage(new lib.frame2_2());
        });

    this.btn_himalaya.on("click", function (evt) {
            putStage(new lib.frame2_3());
        });



	this.instance = new lib.montanas_ok();
	this.instance.setTransform(420,102);
        
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
   
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.btn_montanyes,this.btn_llanures,this.btn_peninsules,this.btn_himalaya,this.btn_tibet,this.btn_fuji);
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
    
        this.instance = new lib.fujiyama_();
        
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
    
        this.instance = new lib.tibet_();
        
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
    
        this.instance = new lib.himalaya_();
        
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
        this.btn_peninsules = new lib.peninsules();
	this.btn_peninsules.setTransform(182.4,441.7,1,1,0,0,0,65.5,26.6);
	new cjs.ButtonHelper(this.btn_peninsules, 0, 1, 2, false, new lib.peninsules(), 3);

	this.btn_llanures = new lib.llanures("single",2);
	this.btn_llanures.setTransform(182.1,349.3,1,1,0,0,0,65.2,35.6);

	this.btn_montanyes = new lib.montanyes();
	this.btn_montanyes.setTransform(181.9,255.4,1,1,0,0,0,65,25);
	new cjs.ButtonHelper(this.btn_montanyes, 0, 1, 2, false, new lib.montanyes(), 3);

    this.btn_montanyes.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.btn_peninsules.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        
        	this.btn_siberia = new lib.siberia_1();
	this.btn_siberia.setTransform(619.8,258.3,1,1,0,0,0,65.8,37.1);
	new cjs.ButtonHelper(this.btn_siberia, 0, 1, 2, false, new lib.siberia_1(), 3);

	this.btn_mongolia = new lib.mongolia_1();
	this.btn_mongolia.setTransform(693.2,317,1,1,0,0,0,65.8,17.1);
	new cjs.ButtonHelper(this.btn_mongolia, 0, 1, 2, false, new lib.mongolia_1(), 3);
 this.btn_siberia.on("click", function (evt) {
            putStage(new lib.frame3_1());
        }); 

 this.btn_mongolia.on("click", function (evt) {
            putStage(new lib.frame3_2());
        }); 

	this.instance = new lib.llanuras_ok();
	this.instance.setTransform(421,102);
        
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
   
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.btn_montanyes,this.btn_llanures,this.btn_peninsules,this.btn_mongolia,this.btn_siberia);
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
    
        this.instance = new lib.siberia_();
        
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
    
        this.instance = new lib.mongolia_();
        
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
        this.btn_peninsules = new lib.peninsules("single",2);
	this.btn_peninsules.setTransform(182.4,441.7,1,1,0,0,0,65.5,26.6);
	
	this.btn_llanures = new lib.llanures();
	this.btn_llanures.setTransform(182.1,349.3,1,1,0,0,0,65.2,35.6);
	new cjs.ButtonHelper(this.btn_llanures, 0, 1, 2, false, new lib.llanures(), 3);

	this.btn_montanyes = new lib.montanyes();
	this.btn_montanyes.setTransform(181.9,255.4,1,1,0,0,0,65,25);
new cjs.ButtonHelper(this.btn_montanyes, 0, 1, 2, false, new lib.montanyes(), 3);
	
    this.btn_montanyes.on("click", function (evt) {
            putStage(new lib.frame2());
        });

 this.btn_llanures.on("click", function (evt) {
            putStage(new lib.frame3());
        }); 
        
        	this.btn_java = new lib.java_2();
	this.btn_java.setTransform(782,568.6,1,1,0,0,0,65.8,17.1);
	new cjs.ButtonHelper(this.btn_java, 0, 1, 2, false, new lib.java_2(), 3);

	this.btn_arabia = new lib.btn_arabia();
	this.btn_arabia.setTransform(490.8,425.8,1,1,0,0,0,65,25);
	new cjs.ButtonHelper(this.btn_arabia, 0, 1, 2, false, new lib.btn_arabia(), 3);
        this.btn_arabia.on("click", function (evt) {
            putStage(new lib.frame4_1());
        });
        this.btn_java.on("click", function (evt) {
            putStage(new lib.frame4_2());
        });

	this.instance = new lib.peninsulas_ok();
	this.instance.setTransform(419,102);
        
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
   
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.btn_montanyes,this.btn_llanures,this.btn_peninsules,this.btn_arabia,this.btn_java);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);


    (lib.frame4_1 = function () {
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
    
        this.instance = new lib.arabia_();
        
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });
  
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.informacion, this.cerrar,this.instance,this.texto,this.texto2);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
  
    (lib.frame4_2 = function () {
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
    
        this.instance = new lib.java_();
        
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

(lib.himalaya_= function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// imatge ok
	this.instance = new lib.mc_himalaya();
	this.instance.setTransform(346.7,339.2,1,1,0,0,0,282.5,189);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.7,x:190.9,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.1,150.2,565,378);

(lib.tibet_= function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// imatge ok
	this.instance = new lib.mc_tibet();
	this.instance.setTransform(346.7,339.2,1,1,0,0,0,282.5,189);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.7,x:190.9,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.1,150.2,565,378);
(lib.fujiyama_= function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// imatge ok
	this.instance = new lib.mc_fujiyama();
	this.instance.setTransform(346.7,339.2,1,1,0,0,0,282.5,189);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.7,x:190.9,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.1,150.2,565,378);
(lib.mongolia_= function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// imatge ok
	this.instance = new lib.mc_mongolia();
	this.instance.setTransform(346.7,339.2,1,1,0,0,0,282.5,189);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.7,x:190.9,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.1,150.2,565,378);
(lib.siberia_= function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// imatge ok
	this.instance = new lib.mc_siberia();
	this.instance.setTransform(346.7,339.2,1,1,0,0,0,282.5,189);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.7,x:190.9,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.1,150.2,565,378);
(lib.arabia_= function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// imatge ok
	this.instance = new lib.mc_arabia();
	this.instance.setTransform(346.7,339.2,1,1,0,0,0,282.5,189);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.7,x:190.9,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.1,150.2,565,378);
(lib.java_= function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhdeMAAAg66MAnDAAAMAAAA66g");
	mask.setTransform(190,339);

	// imatge ok
	this.instance = new lib.mc_JAVAcopia();
	this.instance.setTransform(346.7,339.2,1,1,0,0,0,282.5,189);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.7,x:190.9,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.1,150.2,565,378);

(lib._00056K01 = function() {
	this.initialize(img._00056K01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,582,376);


(lib._0006R901 = function() {
	this.initialize(img._0006R901);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,376);


(lib._000M4J01 = function() {
	this.initialize(img._000M4J01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,568,376);


(lib._000RP101 = function() {
	this.initialize(img._000RP101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,376);


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


(lib.Arabia = function() {
	this.initialize(img.Arabia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,567,378);


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


(lib.fujiyama = function() {
	this.initialize(img.fujiyama);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,473,378);


(lib.himalaya = function() {
	this.initialize(img.himalaya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,565,378);


(lib.java = function() {
	this.initialize(img.java);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,383);


(lib.java_1 = function() {
	this.initialize(img.java_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,383);


(lib.JAVA2 = function() {
	this.initialize(img.JAVA2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,501,768);


(lib.llanuras_ok = function() {
	this.initialize(img.llanuras_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,484);


(lib.mapa_mudo_ok = function() {
	this.initialize(img.mapa_mudo_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,484);


(lib.mapa_mudo_okjpgcopia = function() {
	this.initialize(img.mapa_mudo_okjpgcopia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,484);


(lib.mongolia = function() {
	this.initialize(img.mongolia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,378);


(lib.montanas_ok = function() {
	this.initialize(img.montanas_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,484);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.peninsulas_ok = function() {
	this.initialize(img.peninsulas_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,484);


(lib.siberia = function() {
	this.initialize(img.siberia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,557,378);


(lib.tibet = function() {
	this.initialize(img.tibet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,548,378);


(lib.mc_arabiadentro = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Arabia();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,567,378);


(lib.Javacopia = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.java();
	this.instance.setTransform(0,0,0.988,0.99);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,247,379);


(lib.java_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Java", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 126;
	this.text.setTransform(64.3,3.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AKSBuIAAjbQAAg8g8AAIyrAAQg8AAAAA8IAADbQAAA8A8AAISrAAQA8AAAAg8g");
	this.shape.setTransform(65.8,15.9,1,0.933);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_1.setTransform(65.8,15.9,1,0.933);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ApVieQg8AAAAA4IAADNQAAA4A8AAISrAAQA8AAAAg4IAAjNQAAg4g8AAg");
	this.shape_2.setTransform(65.8,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ApVCfQg8AAAAg4IAAjNQAAg4A8AAISrAAQA8AAAAA4IAADNQAAA4g8AAg");
	this.shape_3.setTransform(65.8,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("ApVCfQg8AAAAg4IAAjNQAAg4A8AAISrAAQA8AAAAA4IAADNQAAA4g8AAg");
	this.shape_4.setTransform(65.8,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_4},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.7,31.9);


(lib.btn_arabia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Península\nde Arabia", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 126;
	this.text.setTransform(63,2.1+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-65,-25,130,50,6);
	this.shape.setTransform(65,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AJOj5IybAAQg8AAAAA8IAAF7QAAA8A8AAISbAAQA8AAAAg8IAAl7QAAg8g8AAg");
	this.shape_1.setTransform(65,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ApMD6Qg9gBAAg7IAAl6QAAg9A9AAISaAAQA7AAAAA9IAAF6QAAA7g7ABg");
	this.shape_2.setTransform(65,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ApMD6Qg9gBAAg7IAAl6QAAg9A9AAISaAAQA7AAAAA9IAAF6QAAA7g7ABg");
	this.shape_3.setTransform(65,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,50);


(lib.tibet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Tíbet", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 126;
	this.text.setTransform(64.3,3.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AKSBuIAAjbQAAg8g8AAIyrAAQg8AAAAA8IAADbQAAA8A8AAISrAAQA8AAAAg8g");
	this.shape.setTransform(65.8,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_1.setTransform(65.8,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_2.setTransform(65.8,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_3.setTransform(65.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.7,34.2);


(lib.mc_tibetdentro = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.tibet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,548,378);


(lib.mc_himalayadentro = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.himalaya();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,565,378);


(lib.mc_fujidentro = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.fujiyama();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,473,378);


(lib.MC_JAVA = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.JAVA2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,501,768);


(lib.siberia_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Llanura de\nSiberia\noccidental", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 126;
	this.text.setTransform(64.8,3.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AqRk1IAAJrQAAA8A8AAISrAAQA8AAAAg8IAAprQAAg8g8AAIyrAAQg8AAAAA8g");
	this.shape.setTransform(65.8,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApVFyQg8AAAAg8IAAprQAAg8A8AAISrAAQA8AAAAA8IAAJrQAAA8g8AAg");
	this.shape_1.setTransform(65.8,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AJWlxIyrAAQg8AAAAA8IAAJrQAAA8A8AAISrAAQA8AAAAg8IAAprQAAg8g8AAg");
	this.shape_2.setTransform(65.8,37.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ApVFyQg8AAAAg8IAAprQAAg8A8AAISrAAQA8AAAAA8IAAJrQAAA8g8AAg");
	this.shape_3.setTransform(65.8,37.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("ApVFyQg8AAAAg8IAAprQAAg8A8AAISrAAQA8AAAAA8IAAJrQAAA8g8AAg");
	this.shape_4.setTransform(65.8,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_4},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.7,74.2);


(lib.mongolia_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Mongolia", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 126;
	this.text.setTransform(64.3,3.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AKSBuIAAjbQAAg8g8AAIyrAAQg8AAAAA8IAADbQAAA8A8AAISrAAQA8AAAAg8g");
	this.shape.setTransform(65.8,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_1.setTransform(65.8,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_2.setTransform(65.8,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_3.setTransform(65.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_3},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.7,34.2);


(lib.mc_siberiadentro = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.siberia();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,557,378);


(lib.mc_mongoliadentro = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.mongolia();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,566,378);


(lib.peninsules = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Penínsulas e islas", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 232;
	this.text.setTransform(116.9,5.2+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AxkipQg8AAAAA9IAADaQAAA8A8AAMAjJAAAQA8AAAAg8IAAjaQAAg9g8AAg");
	this.shape.setTransform(118.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxkCqQg7gBAAg8IAAjZQAAg9A7ABMAjIAAAQA9gBAAA9IAADZQAAA8g9ABg");
	this.shape_1.setTransform(118.6,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AxkCqQg7gBAAg8IAAjZQAAg9A7ABMAjIAAAQA9gBAAA9IAADZQAAA8g9ABg");
	this.shape_2.setTransform(118.6,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AxkCqQg7gBAAg8IAAjZQAAg9A7ABMAjIAAAQA9gBAAA9IAADZQAAA8g9ABg");
	this.shape_3.setTransform(118.6,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,237,34);


(lib.montanyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Montañas y altiplanos", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 234;
	this.text.setTransform(117.1,3.1+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AxpikQg8AAAAA8IAADRQAAA8A8AAMAjTAAAQA8AAAAg8IAAjRQAAg8g8AAg");
	this.shape.setTransform(119.1,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxpCkQg7AAAAg7IAAjRQAAg7A7AAMAjSAAAQA9AAAAA7IAADRQAAA7g9AAg");
	this.shape_1.setTransform(119.1,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AxpCkQg7AAAAg7IAAjRQAAg7A7AAMAjSAAAQA9AAAAA7IAADRQAAA7g9AAg");
	this.shape_2.setTransform(119.1,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AxpCkQg7AAAAg7IAAjRQAAg7A7AAMAjSAAAQA9AAAAA7IAADRQAAA7g9AAg");
	this.shape_3.setTransform(119.1,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.3,238,33);


(lib.llanures = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Llanuras, estepas\ny desiertos", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 233;
	this.text.setTransform(116.8,2.5+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AxpkCQg8AAAAA8IAAGNQAAA8A8AAMAjTAAAQA8AAAAg8IAAmNQAAg8g8AAg");
	this.shape.setTransform(119.1,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxpEDQg7AAAAg8IAAmNQAAg8A7AAMAjSAAAQA9AAAAA8IAAGNQAAA8g9AAg");
	this.shape_1.setTransform(119.1,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AxpEDQg7AAAAg8IAAmNQAAg8A7AAMAjSAAAQA9AAAAA8IAAGNQAAA8g9AAg");
	this.shape_2.setTransform(119.1,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AxpEDQg7AAAAg8IAAmNQAAg8A7AAMAjSAAAQA9AAAAA8IAAGNQAAA8g9AAg");
	this.shape_3.setTransform(119.1,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.3,238,52);


(lib.himalaya_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Himalaya", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 126;
	this.text.setTransform(64.3,3.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AKSBuIAAjbQAAg8g8AAIyrAAQg8AAAAA8IAADbQAAA8A8AAISrAAQA8AAAAg8g");
	this.shape.setTransform(65.8,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_1.setTransform(65.8,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_2.setTransform(65.8,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_3.setTransform(65.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.7,34.2);


(lib.fujiyama_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Fuji-Yama", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 126;
	this.text.setTransform(64.3,3.7+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AKSBuIAAjbQAAg8g8AAIyrAAQg8AAAAA8IAADbQAAA8A8AAISrAAQA8AAAAg8g");
	this.shape.setTransform(65.8,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_1.setTransform(65.8,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_2.setTransform(65.8,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ApVCqQg8AAAAg8IAAjbQAAg8A8AAISrAAQA8AAAAA8IAADbQAAA8g8AAg");
	this.shape_3.setTransform(65.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.7,34.2);


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


(lib.mc_arabia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.mc_arabiadentro();
	this.instance.setTransform(283.5,189,1,1,0,0,0,283.5,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).wait(1).to({x:279.3},0).wait(1).to({x:275},0).wait(1).to({x:270.8},0).wait(1).to({x:266.5},0).wait(1).to({x:262.3},0).wait(1).to({x:258},0).wait(1).to({x:253.7},0).wait(1).to({x:249.5},0).wait(1).to({x:245.2},0).wait(1).to({x:241},0).wait(1).to({x:236.7},0).wait(1).to({x:232.4},0).wait(1).to({x:228.2},0).wait(1).to({x:223.9},0).wait(1).to({x:219.7},0).wait(1).to({x:215.4},0).wait(1).to({x:211.1},0).wait(1).to({x:206.9},0).wait(1).to({x:202.6},0).wait(1).to({x:198.4},0).wait(1).to({x:194.1},0).wait(1).to({x:189.8},0).wait(1).to({x:185.6},0).wait(1).to({x:181.3},0).wait(1).to({x:177.1},0).wait(1).to({x:172.8},0).wait(1).to({x:168.5},0).wait(1).to({x:164.3},0).wait(1).to({x:160},0).wait(1).to({x:155.8},0).wait(1).to({x:151.5},0).wait(1).to({x:147.2},0).wait(1).to({x:143},0).wait(1).to({x:138.7},0).wait(1).to({x:134.5},0).wait(1).to({x:130.2},0).wait(1).to({x:125.9},0).wait(1).to({x:121.7},0).wait(1).to({x:117.4},0).wait(1).to({x:113.2},0).wait(1).to({x:108.9},0).wait(1).to({x:104.7},0).wait(1).to({x:100.4},0).wait(1).to({x:96.1},0).wait(1).to({x:91.9},0).wait(1).to({x:87.6},0).wait(1).to({x:83.4},0).wait(1).to({x:79.1},0).wait(1).to({x:74.8},0).wait(1).to({x:70.6},0).wait(1).to({x:66.3},0).wait(1).to({x:62.1},0).wait(1).to({x:57.8},0).wait(1).to({x:53.5},0).wait(1).to({x:49.3},0).wait(1).to({x:45},0).wait(1).to({x:40.8},0).wait(1).to({x:36.5},0).wait(1).to({x:32.2},0).wait(1).to({x:28},0).wait(1).to({x:23.7},0).wait(1).to({x:19.5},0).wait(1).to({x:15.2},0).wait(1).to({x:10.9},0).wait(1).to({x:6.7},0).wait(1).to({x:2.4},0).wait(1).to({x:-1.6},0).wait(1).to({x:-5.9},0).wait(1).to({x:-10.2},0).wait(1).to({x:-14.4},0).wait(1).to({x:-18.7},0).wait(1).to({x:-22.9},0).wait(1).to({x:-27.2},0).wait(1).to({x:-31.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,567,378);


(lib.mc_tibet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.mc_tibetdentro();
	this.instance.setTransform(274,189,1,1,0,0,0,274,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).wait(1).to({x:270.1},0).wait(1).to({x:266.1},0).wait(1).to({x:262.1},0).wait(1).to({x:258.1},0).wait(1).to({x:254.1},0).wait(1).to({x:250.1},0).wait(1).to({x:246.1},0).wait(1).to({x:242.1},0).wait(1).to({x:238.1},0).wait(1).to({x:234.1},0).wait(1).to({x:230.1},0).wait(1).to({x:226.1},0).wait(1).to({x:222.1},0).wait(1).to({x:218.1},0).wait(1).to({x:214.1},0).wait(1).to({x:210.1},0).wait(1).to({x:206.1},0).wait(1).to({x:202.1},0).wait(1).to({x:198.1},0).wait(1).to({x:194.1},0).wait(1).to({x:190.1},0).wait(1).to({x:186.1},0).wait(1).to({x:182.1},0).wait(1).to({x:178.1},0).wait(1).to({x:174.1},0).wait(1).to({x:170.1},0).wait(1).to({x:166.1},0).wait(1).to({x:162.1},0).wait(1).to({x:158.1},0).wait(1).to({x:154.1},0).wait(1).to({x:150.1},0).wait(1).to({x:146.1},0).wait(1).to({x:142.1},0).wait(1).to({x:138.1},0).wait(1).to({x:134.1},0).wait(1).to({x:130.1},0).wait(1).to({x:126.1},0).wait(1).to({x:122.1},0).wait(1).to({x:118.1},0).wait(1).to({x:114.1},0).wait(1).to({x:110.1},0).wait(1).to({x:106.1},0).wait(1).to({x:102.1},0).wait(1).to({x:98.1},0).wait(1).to({x:94.1},0).wait(1).to({x:90.1},0).wait(1).to({x:86.1},0).wait(1).to({x:82.1},0).wait(1).to({x:78.1},0).wait(1).to({x:74.2},0).wait(1).to({x:70.2},0).wait(1).to({x:66.2},0).wait(1).to({x:62.2},0).wait(1).to({x:58.2},0).wait(1).to({x:54.2},0).wait(1).to({x:50.2},0).wait(1).to({x:46.2},0).wait(1).to({x:42.2},0).wait(1).to({x:38.2},0).wait(1).to({x:34.2},0).wait(1).to({x:30.2},0).wait(1).to({x:26.2},0).wait(1).to({x:22.2},0).wait(1).to({x:18.2},0).wait(1).to({x:14.2},0).wait(1).to({x:10.2},0).wait(1).to({x:6.2},0).wait(1).to({x:2.2},0).wait(1).to({x:-1.6},0).wait(1).to({x:-5.6},0).wait(1).to({x:-9.6},0).wait(1).to({x:-13.6},0).wait(1).to({x:-17.6},0).wait(1).to({x:-21.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,548,378);


(lib.mc_himalaya = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.mc_himalayadentro();
	this.instance.setTransform(283.4,189,1,1,0,0,0,282.5,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:283.3},0).wait(1).to({x:283.2},0).wait(1).wait(1).to({x:283.1},0).wait(1).wait(1).to({x:283},0).wait(1).wait(1).to({x:282.9},0).wait(1).to({x:282.8},0).wait(1).wait(1).to({x:282.7},0).wait(1).wait(1).to({x:282.6},0).wait(1).wait(1).to({x:282.5},0).wait(1).to({x:278.3},0).wait(1).to({x:274.1},0).wait(1).to({x:269.9},0).wait(1).to({x:265.7},0).wait(1).to({x:261.4},0).wait(1).to({x:257.2},0).wait(1).to({x:253},0).wait(1).to({x:248.8},0).wait(1).to({x:244.5},0).wait(1).to({x:240.3},0).wait(1).to({x:236.1},0).wait(1).to({x:231.9},0).wait(1).to({x:227.7},0).wait(1).to({x:223.4},0).wait(1).to({x:219.2},0).wait(1).to({x:215},0).wait(1).to({x:210.8},0).wait(1).to({x:206.5},0).wait(1).to({x:202.3},0).wait(1).to({x:198.1},0).wait(1).to({x:193.9},0).wait(1).to({x:189.6},0).wait(1).to({x:185.4},0).wait(1).to({x:181.2},0).wait(1).to({x:177},0).wait(1).to({x:172.8},0).wait(1).to({x:168.5},0).wait(1).to({x:164.3},0).wait(1).to({x:160.1},0).wait(1).to({x:155.9},0).wait(1).to({x:151.6},0).wait(1).to({x:147.4},0).wait(1).to({x:143.2},0).wait(1).to({x:139},0).wait(1).to({x:134.7},0).wait(1).to({x:130.5},0).wait(1).to({x:126.3},0).wait(1).to({x:122.1},0).wait(1).to({x:117.9},0).wait(1).to({x:113.6},0).wait(1).to({x:109.4},0).wait(1).to({x:105.2},0).wait(1).to({x:101},0).wait(1).to({x:96.7},0).wait(1).to({x:92.5},0).wait(1).to({x:88.3},0).wait(1).to({x:84.1},0).wait(1).to({x:79.8},0).wait(1).to({x:75.6},0).wait(1).to({x:71.4},0).wait(1).to({x:67.2},0).wait(1).to({x:63},0).wait(1).to({x:58.7},0).wait(1).to({x:54.5},0).wait(1).to({x:50.3},0).wait(1).to({x:46.1},0).wait(1).to({x:41.8},0).wait(1).to({x:37.6},0).wait(1).to({x:33.4},0).wait(1).to({x:29.2},0).wait(1).to({x:24.9},0).wait(1).to({x:20.7},0).wait(1).to({x:16.5},0).wait(1).to({x:12.3},0).wait(1).to({x:8.1},0).wait(1).to({x:3.8},0).wait(1).to({x:-0.2},0).wait(1).to({x:-4.4},0).wait(1).to({x:-8.6},0).wait(1).to({x:-12.9},0).wait(1).to({x:-17.1},0).wait(1).to({x:-21.3},0).wait(1).to({x:-25.5},0).wait(1).to({x:-29.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0,565,378);


(lib.mc_fujiyama = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.mc_fujidentro();
	this.instance.setTransform(236.5,189,1,1,0,0,0,236.5,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).wait(1).to({x:232.4},0).wait(1).to({x:228.3},0).wait(1).to({x:224.2},0).wait(1).to({x:220.1},0).wait(1).to({x:215.9},0).wait(1).to({x:211.8},0).wait(1).to({x:207.7},0).wait(1).to({x:203.6},0).wait(1).to({x:199.5},0).wait(1).to({x:195.3},0).wait(1).to({x:191.2},0).wait(1).to({x:187.1},0).wait(1).to({x:183},0).wait(1).to({x:178.9},0).wait(1).to({x:174.7},0).wait(1).to({x:170.6},0).wait(1).to({x:166.5},0).wait(1).to({x:162.4},0).wait(1).to({x:158.3},0).wait(1).to({x:154.1},0).wait(1).to({x:150},0).wait(1).to({x:145.9},0).wait(1).to({x:141.8},0).wait(1).to({x:137.7},0).wait(1).to({x:133.5},0).wait(1).to({x:129.4},0).wait(1).to({x:125.3},0).wait(1).to({x:121.2},0).wait(1).to({x:117.1},0).wait(1).to({x:112.9},0).wait(1).to({x:108.8},0).wait(1).to({x:104.7},0).wait(1).to({x:100.6},0).wait(1).to({x:96.5},0).wait(1).to({x:92.3},0).wait(1).to({x:88.2},0).wait(1).to({x:84.1},0).wait(1).to({x:80},0).wait(1).to({x:75.9},0).wait(1).to({x:71.7},0).wait(1).to({x:67.6},0).wait(1).to({x:63.5},0).wait(1).to({x:59.4},0).wait(1).to({x:55.3},0).wait(1).to({x:51.1},0).wait(1).to({x:47},0).wait(1).to({x:42.9},0).wait(1).to({x:38.8},0).wait(1).to({x:34.7},0).wait(1).to({x:30.5},0).wait(1).to({x:26.4},0).wait(1).to({x:22.3},0).wait(1).to({x:18.2},0).wait(1).to({x:14},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473,378);


(lib.mc_JAVAcopia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.MC_JAVA();
	this.instance.setTransform(283,189,1,1,0,0,0,283,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:250.5,regY:384,x:247.1,y:384},0).wait(1).to({x:243.6},0).wait(1).to({x:240.2},0).wait(1).to({x:236.7},0).wait(1).to({x:233.3},0).wait(1).to({x:229.8},0).wait(1).to({x:226.4},0).wait(1).to({x:222.9},0).wait(1).to({x:219.5},0).wait(1).to({x:216},0).wait(1).to({x:212.6},0).wait(1).to({x:209.1},0).wait(1).to({x:205.7},0).wait(1).to({x:202.2},0).wait(1).to({x:198.8},0).wait(1).to({x:195.3},0).wait(1).to({x:191.9},0).wait(1).to({x:188.4},0).wait(1).to({x:185},0).wait(1).to({x:181.5},0).wait(1).to({x:178.2},0).wait(1).to({x:174.9},0).wait(1).to({x:171.5},0).wait(1).to({x:168.2},0).wait(1).to({x:164.8},0).wait(1).to({x:161.5},0).wait(1).to({x:158.2},0).wait(1).to({x:154.8},0).wait(1).to({x:151.5},0).wait(1).to({x:148.1},0).wait(1).to({x:144.8},0).wait(1).to({x:141.5},0).wait(1).to({x:138.1},0).wait(1).to({x:134.8},0).wait(1).to({x:131.4},0).wait(1).to({x:128.1},0).wait(1).to({x:124.8},0).wait(1).to({x:121.4},0).wait(1).to({x:118.1},0).wait(1).to({x:114.7},0).wait(1).to({x:111.4},0).wait(1).to({x:108},0).wait(1).to({x:104.7},0).wait(1).to({x:101.4},0).wait(1).to({x:98},0).wait(1).to({x:94.7},0).wait(1).to({x:91.3},0).wait(1).to({x:88},0).wait(1).to({x:84.7},0).wait(1).to({x:81.3},0).wait(1).to({x:78},0).wait(1).to({x:74.6},0).wait(1).to({x:71.3},0).wait(1).to({x:68},0).wait(1).to({x:64.6},0).wait(1).to({x:61.3},0).wait(1).to({x:57.9},0).wait(1).to({x:54.6},0).wait(1).to({x:51.3},0).wait(1).to({x:47.9},0).wait(1).to({x:44.6},0).wait(1).to({x:41.2},0).wait(1).to({x:37.9},0).wait(1).to({x:34.5},0).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,501,768);


(lib.mc_siberia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.mc_siberiadentro();
	this.instance.setTransform(278.5,189,1,1,0,0,0,278.5,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).wait(1).to({x:274.4},0).wait(1).to({x:270.3},0).wait(1).to({x:266.1},0).wait(1).to({x:262},0).wait(1).to({x:257.9},0).wait(1).to({x:253.7},0).wait(1).to({x:249.6},0).wait(1).to({x:245.5},0).wait(1).to({x:241.3},0).wait(1).to({x:237.2},0).wait(1).to({x:233.1},0).wait(1).to({x:228.9},0).wait(1).to({x:224.8},0).wait(1).to({x:220.7},0).wait(1).to({x:216.5},0).wait(1).to({x:212.4},0).wait(1).to({x:208.3},0).wait(1).to({x:204.1},0).wait(1).to({x:200},0).wait(1).to({x:195.9},0).wait(1).to({x:191.7},0).wait(1).to({x:187.6},0).wait(1).to({x:183.5},0).wait(1).to({x:179.3},0).wait(1).to({x:175.2},0).wait(1).to({x:171.1},0).wait(1).to({x:166.9},0).wait(1).to({x:162.8},0).wait(1).to({x:158.7},0).wait(1).to({x:154.5},0).wait(1).to({x:150.4},0).wait(1).to({x:146.3},0).wait(1).to({x:142.1},0).wait(1).to({x:138},0).wait(1).to({x:133.9},0).wait(1).to({x:129.7},0).wait(1).to({x:125.6},0).wait(1).to({x:121.5},0).wait(1).to({x:117.3},0).wait(1).to({x:113.2},0).wait(1).to({x:109.1},0).wait(1).to({x:104.9},0).wait(1).to({x:100.8},0).wait(1).to({x:96.7},0).wait(1).to({x:92.5},0).wait(1).to({x:88.4},0).wait(1).to({x:84.3},0).wait(1).to({x:80.1},0).wait(1).to({x:76},0).wait(1).to({x:71.9},0).wait(1).to({x:67.7},0).wait(1).to({x:63.6},0).wait(1).to({x:59.5},0).wait(1).to({x:55.3},0).wait(1).to({x:51.2},0).wait(1).to({x:47.1},0).wait(1).to({x:42.9},0).wait(1).to({x:38.8},0).wait(1).to({x:34.7},0).wait(1).to({x:30.5},0).wait(1).to({x:26.4},0).wait(1).to({x:22.3},0).wait(1).to({x:18.1},0).wait(1).to({x:14},0).wait(1).to({x:9.9},0).wait(1).to({x:5.7},0).wait(1).to({x:1.6},0).wait(1).to({x:-2.3},0).wait(1).to({x:-6.5},0).wait(1).to({x:-10.6},0).wait(1).to({x:-14.7},0).wait(1).to({x:-18.9},0).wait(1).to({x:-23},0).wait(1).to({x:-27.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,557,378);


(lib.mc_mongolia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.mc_mongoliadentro();
	this.instance.setTransform(283,189,1,1,0,0,0,283,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).wait(1).to({x:278.8},0).wait(1).to({x:274.5},0).wait(1).to({x:270.3},0).wait(1).to({x:266},0).wait(1).to({x:261.8},0).wait(1).to({x:257.5},0).wait(1).to({x:253.3},0).wait(1).to({x:249},0).wait(1).to({x:244.7},0).wait(1).to({x:240.5},0).wait(1).to({x:236.2},0).wait(1).to({x:232},0).wait(1).to({x:227.7},0).wait(1).to({x:223.5},0).wait(1).to({x:219.2},0).wait(1).to({x:214.9},0).wait(1).to({x:210.7},0).wait(1).to({x:206.4},0).wait(1).to({x:202.2},0).wait(1).to({x:197.9},0).wait(1).to({x:193.7},0).wait(1).to({x:189.4},0).wait(1).to({x:185.1},0).wait(1).to({x:180.9},0).wait(1).to({x:176.6},0).wait(1).to({x:172.4},0).wait(1).to({x:168.1},0).wait(1).to({x:163.9},0).wait(1).to({x:159.6},0).wait(1).to({x:155.3},0).wait(1).to({x:151.1},0).wait(1).to({x:146.8},0).wait(1).to({x:142.6},0).wait(1).to({x:138.3},0).wait(1).to({x:134.1},0).wait(1).to({x:129.8},0).wait(1).to({x:125.5},0).wait(1).to({x:121.3},0).wait(1).to({x:117},0).wait(1).to({x:112.8},0).wait(1).to({x:108.5},0).wait(1).to({x:104.3},0).wait(1).to({x:100},0).wait(1).to({x:95.8},0).wait(1).to({x:91.5},0).wait(1).to({x:87.2},0).wait(1).to({x:83},0).wait(1).to({x:78.7},0).wait(1).to({x:74.5},0).wait(1).to({x:70.2},0).wait(1).to({x:66},0).wait(1).to({x:61.7},0).wait(1).to({x:57.4},0).wait(1).to({x:53.2},0).wait(1).to({x:48.9},0).wait(1).to({x:44.7},0).wait(1).to({x:40.4},0).wait(1).to({x:36.2},0).wait(1).to({x:31.9},0).wait(1).to({x:27.6},0).wait(1).to({x:23.4},0).wait(1).to({x:19.1},0).wait(1).to({x:14.9},0).wait(1).to({x:10.6},0).wait(1).to({x:6.4},0).wait(1).to({x:2.1},0).wait(1).to({x:-2},0).wait(1).to({x:-6.2},0).wait(1).to({x:-10.5},0).wait(1).to({x:-14.7},0).wait(1).to({x:-19},0).wait(1).to({x:-23.2},0).wait(1).to({x:-27.5},0).wait(1).to({x:-31.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,378);


(lib.MC_JAVA2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.mc_JAVAcopia();
	this.instance.setTransform(250.5,384,1,1,0,0,0,250.5,384);

	this.instance_1 = new lib.Javacopia();
	this.instance_1.setTransform(129.9,406.7,1.016,1.016,0,0,0,123.5,190.5);
	this.instance_1.alpha = 0;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,501,768);  



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