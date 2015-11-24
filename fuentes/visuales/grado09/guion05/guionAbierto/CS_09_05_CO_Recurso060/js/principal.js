(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();
        
        // Capa 1
        basicos(this, 0,0,0,0,0);
        titulo1(this, txt['titolintro']);
	
	// text_botons
	this.textbtn2 = new cjs.Text(txt['textbtn2'], "bold 16px Verdana");
	this.textbtn2.textAlign = "center";
	this.textbtn2.lineHeight = 17;
	this.textbtn2.lineWidth = 174;
	this.textbtn2.setTransform(213.4,358.7);

	this.textbtn1 = new cjs.Text(txt['textbtn1'], "bold 16px Verdana");
	this.textbtn1.textAlign = "center";
	this.textbtn1.lineHeight = 17;
	this.textbtn1.lineWidth = 163;
	this.textbtn1.setTransform(212.6,254.2);

	// mc_botons
	this.mc_botons2 = new lib.mc_botons();
	this.mc_botons2.setTransform(209.2,369.4,1,1,0,0,0,105.4,22.6);
new cjs.ButtonHelper(this.mc_botons2, 0, 1, 2, false, new lib.mc_botons (), 3);
	this.mc_botons1 = new lib.mc_botons();
	this.mc_botons1.setTransform(209.2,263.9,1,1,0,0,0,105.4,22.6);
new cjs.ButtonHelper(this.mc_botons1, 0, 1, 2, false, new lib.mc_botons (), 3);

	this.mc_botons1.on("click", function (evt) {
            putStage(new lib.frame1_1());
        });
        this.mc_botons2.on("click", function (evt) {
            putStage(new lib.frame2_1());
        });

	// filet
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("EAlHAe7MhKNAAAMAAAg91MBKNAAAg");
	this.shape.setTransform(629.5,329);

	// mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMVAp3MAAAhAzMBROAAAMAAABAzg");
	mask.setTransform(441,267.9);

	// Imatge
	this.instance_1 = new lib.shutterstock_13421593();
	this.instance_1.setTransform(392.3,130.9,0.5,0.5);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.shape,this.titulo,this.mc_botons1,this.mc_botons2,this.textbtn1,this.textbtn2,this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

 (lib.frame1_1 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 0, 1, 0, 0);
        titulo2(this, txt['titol1']);

      this.instance_4 = new lib.Nazi();
	this.instance_4.setTransform(102,112.1,0.497,0.497);


	this.instance_6 = new lib.Italia();
	this.instance_6.setTransform(471.2,112.1,0.497,0.497);


	this.instance_8 = new lib.Japon();
	this.instance_8.setTransform(291.2,322.6,0.497,0.497);

        
        this.siguiente.on("click", function (evt) {
            
            
            putStage(new lib.frame1_2());
        });
        this.home.on("click", function (evt) {

            
            
            putStage(new lib.frame1());
        });


        this.addChild(this.instance_4, this.instance_6,this.instance_8,this.home, this.siguiente, this.titulo, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
     (lib.frame1_2 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['p1']);

        this.imagen = new lib.Nazi();
        var ancho = imagen(this, 0, 0.45, 0.45);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto1'], 1, ancho);

        this.anterior.on("click", function (evt) {
            
            
            putStage(new lib.frame1_1());
        });
        this.siguiente.on("click", function (evt) {
            
            
            putStage(new lib.frame1_3());
        });
        this.home.on("click", function (evt) {

            
            
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
     (lib.frame1_3 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['p2']);

        this.imagen = new lib._000G8001();
        var ancho = imagen(this, 0, 0.35, 0.35);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto2'], 1, ancho);

        this.anterior.on("click", function (evt) {
            
            
            putStage(new lib.frame1_2());
        });
        this.siguiente.on("click", function (evt) {
            
            
            putStage(new lib.frame1_4());
        });
        this.home.on("click", function (evt) {

            
            
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
     (lib.frame1_4 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['p3']);

        this.imagen = new lib.Italia();
        var ancho = imagen(this, 0, 0.45, 0.45);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto3'], 1, ancho);

        this.anterior.on("click", function (evt) {
            
            
            putStage(new lib.frame1_3());
        });
        this.siguiente.on("click", function (evt) {
            
            
            putStage(new lib.frame1_5());
        });
        this.home.on("click", function (evt) {

            
            
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
      (lib.frame1_5 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['p4']);

        this.imagen = new lib._002C8501();
        var ancho = imagen(this, 0, 0.35, 0.35);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto4'], 1, ancho);

        this.anterior.on("click", function (evt) {
            
            
            putStage(new lib.frame1_4());
        });
        this.siguiente.on("click", function (evt) {
            
            
            putStage(new lib.frame1_6());
        });
        this.home.on("click", function (evt) {

            
            
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
     (lib.frame1_6 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['p5']);

        this.imagen = new lib.Japon();
        var ancho = imagen(this, 0, 0.45, 0.45);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto5'], 1, ancho);

        this.anterior.on("click", function (evt) {
            
            
            putStage(new lib.frame1_5());
        });
        this.siguiente.on("click", function (evt) {
            
            
            putStage(new lib.frame1_7());
        });
        this.home.on("click", function (evt) {

            
            
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
      (lib.frame1_7 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 0, 0, 0);
        titulo2(this, txt['p6']);

        this.imagen = new lib._002C7X01();
        var ancho = imagen(this, 0, 0.5, 0.5);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto6'], 1, ancho);

        this.anterior.on("click", function (evt) {
            
            
            putStage(new lib.frame1_6());
        });
      
        this.home.on("click", function (evt) {

            
            
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
    (lib.frame2_1 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 0, 1, 0, 0);
        titulo2(this, txt['titol2_1']);

    this.instance_1 = new lib.URRS();
	this.instance_1.setTransform(467.9,320.6,0.5,0.5);

	this.instance_2 = new lib.GB();
	this.instance_2.setTransform(95.8,116.4,0.5,0.5);

	this.instance_3 = new lib.EEUU();
	this.instance_3.setTransform(96.2,320.6,0.5,0.5);

	this.instance_4 = new lib.FR();
	this.instance_4.setTransform(467.9,116.4,0.5,0.5);

        
        this.siguiente.on("click", function (evt) {
            
            
            putStage(new lib.frame2_2());
        });
        this.home.on("click", function (evt) {

            
            
            putStage(new lib.frame1());
        });


        this.addChild(this.instance_4, this.instance_3,this.instance_2,this.instance_1,this.home, this.siguiente, this.titulo, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
    (lib.frame2_2 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['p7']);

        this.imagen = new lib._002C6101();
        var ancho = imagen(this, 0, 0.35, 0.35);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto2_1'], 1, ancho);

        this.anterior.on("click", function (evt) {
            
            
            putStage(new lib.frame2_1());
        });
        this.siguiente.on("click", function (evt) {
            
            
            putStage(new lib.frame2_3());
        });
        this.home.on("click", function (evt) {

            
            
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
     (lib.frame2_3 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);

        this.imagen = new lib.mctexto2_2copia();
        this.imagen.setTransform(100,100);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_2());
        });
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_4());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
      (lib.frame2_4 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['p8']);

       this.instance_1 = new lib._002C3001();
	this.instance_1.setTransform(112.4,318.6,0.276,0.276);

	this.instance_2 = new lib._0009C701();
	this.instance_2.setTransform(112.4,119.4,0.276,0.276);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto2_3'], 1, 350);

        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_3());
        });
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.instance_1,this.instance_2, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
     (lib.frame2_5 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['p9']);

      	this.instance_1 = new lib._000K8Y01();
	this.instance_1.setTransform(66,132.2,0.27,0.269);

	this.instance_2 = new lib._002C6G01();
	this.instance_2.setTransform(134.7,316.5,0.27,0.28);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto2_4'], 1, 350);

        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_4());
        });
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_6());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.instance_1,this.instance_2, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
     (lib.frame2_6 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['p10']);

  this.instance_1 = new lib._0009XI01();
	this.instance_1.setTransform(112.4,113,0.267,0.267);

	this.instance_2 = new lib._000K8T01();
	this.instance_2.setTransform(112.4,324.4,0.267,0.267);
        
        texto(this, txt['texto2_5'], 1, 350);

        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_5());
        });
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_7());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.instance_1,this.instance_2, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
      (lib.frame2_7 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 0, 0, 0);
        titulo2(this, txt['p11']);

        this.imagen = new lib.URRS();
        var ancho = imagen(this, 0, 0.5, 0.5);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['texto2_6'], 1, ancho);

        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_6());
        });
      
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
// symbols:

    function titulo1(escena, texto) {
        var html = createDiv(texto, "Georgia", "31px", '770px', '100px', "20px", "185px", "center");
        escena.titulo = new cjs.DOMElement(html);
        escena.titulo.setTransform(90, -588);
    }
    function titulo2(escena, texto,size) {
        size=size||'25px';
        var html = createDiv(texto, "Verdana", size, '770px', '100px', "20px", "185px", "left");
        escena.titulo = new cjs.DOMElement(html);
        escena.titulo.setTransform(90, -588);
    }
    function texto(escena, texto, side, ancho) {
        width = 780 - ancho;
        var html = createDiv(texto, "Verdana", "20px", width + 'px', '400px', "20px", "185px", "left");
        escena.texto = new cjs.DOMElement(html);
        if (side == 0)
            escena.texto.setTransform(90, -502);
        else
            escena.texto.setTransform(100+ancho, -502);
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

    /*function basicos(escena, home, anterior, siguiente, informacion, cerrar) {
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
            escena.informacion.setTransform(217, 560,1.15,1.15);
            new cjs.ButtonHelper(escena.informacion, 0, 1, 2, false, new lib.btn_info(), 3);
        }
      if (informacion == 2) {
            escena.informacion = new lib.btn_infoneg();
            if (audio==1)
            escena.informacion.setTransform(280, 560,1.15,1.15);
        else
            escena.informacion.setTransform(217, 560,1.15,1.15);
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
    

(lib._1945 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("761", "bold 20px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 109;
	this.text.setTransform(54.5,3.2+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape.setTransform(56.8,17.6,0.143,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_1.setTransform(56.8,17.6,0.143,1);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,113.6,38.2);


(lib._1944 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("9.151", "bold 20px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 110;
	this.text.setTransform(54.3,3.2+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape.setTransform(56.8,17.6,0.143,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_1.setTransform(56.8,17.6,0.143,1);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,0,114.4,38.2);


(lib._1943 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("2.298", "bold 20px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 110;
	this.text.setTransform(54.3,3.2+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape.setTransform(56.8,17.6,0.143,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_1.setTransform(56.8,17.6,0.143,1);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,0,114.4,38.2);


(lib._1942 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("3.260", "bold 20px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 110;
	this.text.setTransform(54.3,3.2+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape.setTransform(56.8,17.6,0.143,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_1.setTransform(56.8,17.6,0.143,1);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0,114.4,38.2);


(lib._1941 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("21.858", "bold 20px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 109;
	this.text.setTransform(54.5,3.2+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AI3CwIxtAAIAAlfIRtAAg");
	this.shape.setTransform(56.8,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ao2CvIAAleIRtAAIAAFeg");
	this.shape_1.setTransform(56.8,17.6);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,113.6,38.2);


(lib._1940 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("36.844", "bold 20px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 110;
	this.text.setTransform(54.5,3.2+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape.setTransform(56.8,17.6,0.143,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_1.setTransform(56.8,17.6,0.143,1);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,0,114,38.2);

    (lib.mctexto2_2copia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anys
	this.instance = new lib._1940();
	this.instance.setTransform(81.2,318.8,1,1,0,0,0,56.8,18.8);

	this.instance_1 = new lib._1941();
	this.instance_1.setTransform(209.2,318.8,1,1,0,0,0,56.8,18.8);

	this.instance_2 = new lib._1942();
	this.instance_2.setTransform(337.2,318.8,1,1,0,0,0,56.8,18.8);

	this.instance_3 = new lib._1943();
	this.instance_3.setTransform(462.2,318.8,1,1,0,0,0,56.8,18.8);

	this.instance_4 = new lib._1944();
	this.instance_4.setTransform(588.2,318.8,1,1,0,0,0,56.8,18.8);

	this.instance_5 = new lib._1945();
	this.instance_5.setTransform(714.2,318.8,1,1,0,0,0,56.8,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},63).to({state:[{t:this.instance},{t:this.instance_1}]},51).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2}]},51).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3}]},49).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4}]},50).to({state:[{t:this.instance_5},{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4}]},55).wait(1));

	// text
	this.text = new cjs.Text("     1940           1941           1942          1943          1944          1945        ", "bold 20px Verdana");
	this.text.lineHeight = 21;
	this.text.lineWidth = 767;
	this.text.setTransform(9.5,56.2+incremento*2);

	this.text = new cjs.Shape();
	this.text.graphics.f("#000000").s().p("EA0sABJQgMgDgIgEIAAggIAEAAQAJAGAKADQALAEAJAAIAOgCQAHgBAEgEIAGgGQABgDAAgHQAAgFgCgDQgCgEgEgCQgFgEgIgBIgOgBQgIAAgIACIgOADIgFAAIAAhQIBoAAIAAAcIhFAAIAAAXIAJAAIAIAAQAMAAAJACQAJADAIAEQAIAFAFAHQAFAJAAANQAAALgEAKQgEAKgJAHQgIAHgMAEQgMADgPAAQgRAAgMgCgEAwNABKIgLgBIAAgdIAEAAIAJADQAEACAKAAQAIAAAHgCQAHgCAGgEQAFgFAEgGQAEgHABgJQgJAFgGACQgIADgLAAQgIAAgHgCQgIgCgGgEQgIgGgFgKQgFgHAAgOQAAgYAQgOQAQgPAbAAQANAAALADQAKAEAIAHQAJAJAFANQAEANAAASQAAARgEAPQgFAQgKALQgKALgPAGQgQAGgUAAIgQgBgEAwpgAwQgDABgDADQgDAEgCAFQgCAFAAAHQAAAHACAEQACAFADADQAEACAFABIAKABIAJgBIAIgCIAAgDIAAgGQAAgMgCgIQgCgHgEgFQgCgDgEgBIgIgBIgIABgAcoBKIgLgBIAAgdIAEAAIAJADQAEACAKAAQAHAAAIgCQAHgCAFgEQAHgFADgGQAEgHABgJQgIAFgIACQgHADgLAAQgIAAgHgCQgIgCgGgEQgIgGgFgKQgFgHAAgOQAAgYARgOQAPgPAbAAQANAAALADQALAEAHAHQAJAJAFANQAEANAAASQAAARgEAPQgGAQgJALQgKALgQAGQgPAGgVAAIgPgBgAdFgwQgEABgDADQgDAEgCAFQgCAFAAAHQAAAHACAEQACAFADADQAEACAFABIAKABIAJgBIAIgCIAAgDIAAgGQAAgMgBgIQgDgHgEgFQgDgDgEgBIgHgBIgHABgANhBIQgNgCgIgEIAAggIADAAQAJAFALAEQAMAEAKAAIAMgBQAHgBAEgDQAEgDACgDQACgEAAgGQAAgHgDgDQgDgEgFgBQgEgCgHAAIgNAAIgHAAIAAgYIAIAAIAOAAQAFgBAEgCQAEgBADgDQACgEAAgGQAAgEgCgDQgCgCgEgCQgEgCgFAAIgJgBQgJAAgLADQgLAEgJAGIgEAAIAAggIAWgGQAOgDAOAAQAOAAAJACQALADAHAEQAIAEAEAHQADAHAAAJQAAAMgHAKQgIAJgMADIAAABIALADQAGAAAEAEQAFAEACAGQADAFABAJQgBAKgEAJQgDAJgJAHQgJAGgKADQgLADgQAAQgTAAgMgDgAJDBKIgLgBIAAgdIAEAAIAJADQAEACAKAAQAHAAAIgCQAIgCAEgEQAGgFAEgGQAEgHABgJQgIAFgIACQgHADgLAAQgIAAgIgCQgHgCgGgEQgIgGgFgKQgFgHAAgOQAAgYARgOQAQgPAaAAQAOAAAKADQAKAEAIAHQAJAJAFANQAEANAAASQAAARgEAPQgGAQgJALQgKALgQAGQgPAGgVAAIgPgBgAJggwQgEABgDADQgDAEgCAFQgCAFAAAHQAAAHACAEQACAFAEADQADACAFABIAKABIAKgBIAIgCIAAgDIAAgGQAAgMgCgIQgDgHgEgFQgDgDgEgBIgHgBIgHABgAqgBKIgLgBIAAgdIAEAAIAIADQAGACAJAAQAIAAAHgCQAIgCAEgEQAGgFAEgGQAEgHABgJQgJAFgGACQgIADgLAAQgIAAgIgCQgHgCgGgEQgIgGgFgKQgFgHAAgOQAAgYAQgOQARgPAaAAQAOAAAKADQALAEAHAHQAJAJAEANQAFANAAASQAAARgFAPQgEAQgKALQgKALgPAGQgQAGgUAAIgQgBgAqEgwQgDABgDADQgDAEgCAFQgCAFAAAHQAAAHACAEQACAFAEADQADACAFABIAKABIAKgBIAIgCIAAgDIAAgGQAAgMgDgIQgCgHgEgFQgDgDgEgBIgHgBIgIABgA/KBKIgLgBIAAgdIAFAAIAIADQAFACAJAAQAIAAAIgCQAHgCAFgEQAGgFADgGQAEgHACgJQgJAFgHACQgHADgMAAQgIAAgHgCQgIgCgFgEQgIgGgGgKQgEgHAAgOQAAgYAQgOQAQgPAaAAQAOAAAKADQALAEAHAHQAKAJAEANQAEANABASQgBARgEAPQgFAQgJALQgLALgPAGQgQAGgUAAIgQgBgA+tgwQgDABgDADQgDAEgDAFQgCAFAAAHQAAAHACAEQACAFAEADQAEACAFABIAKABIAJgBIAIgCIAAgDIAAgGQAAgMgCgIQgDgHgDgFQgDgDgEgBIgIgBIgHABgEgvNABGQgLgEgIgKQgGgKgEgOQgDgOAAgSQAAgRADgOQADgOAIgKQAHgKALgEQAMgFAQAAQARAAALAFQAMAFAGAJQAIAKADAOQADAOAAARQAAASgDAOQgDAPgIAJQgGAKgMAEQgMAFgQAAQgQAAgMgFgEgvCgAkQgGALABAZQgBAaAGALQAFALAMAAQAMAAAFgLQAFgLABgaQAAgZgGgLQgFgLgMAAQgMAAgFALgEgzzABKIgLgBIAAgdIAEAAIAJADQAEACAKAAQAHAAAIgCQAIgCAEgEQAHgFADgGQAEgHABgJQgIAFgIACQgHADgLAAQgIAAgIgCQgHgCgGgEQgIgGgFgKQgFgHAAgOQAAgYARgOQAPgPAbAAQANAAALADQAKAEAIAHQAJAJAFANQAEANAAASQAAARgEAPQgGAQgJALQgKALgQAGQgPAGgVAAIgPgBgEgzWgAwQgEABgDADQgDAEgCAFQgCAFAAAHQAAAHACAEQACAFADADQAEACAFABIAKABIAJgBIAIgCIAAgDIAAgGQAAgMgBgIQgDgHgEgFQgDgDgEgBIgHgBIgHABgEAzJABJIAAgiIhHAAIAAgcIBEhSIAnAAIAABTIAUAAIAAAbIgUAAIAAAigEAyeAAMIArAAIAAgygEAhxABJIAAgiIhGAAIAAgcIBFhSIAlAAIAABTIAUAAIAAAbIgUAAIAAAigEAhHAAMIAqAAIAAgygAfjBJIAAgiIhGAAIAAgcIBEhSIAmAAIAABTIAVAAIAAAbIgVAAIAAAigAe5AMIAqAAIAAgygAL+BJIAAgiIhGAAIAAgcIBFhSIAlAAIAABTIAUAAIAAAbIgUAAIAAAigALUAMIAqAAIAAgygAnlBJIAAgiIhGAAIAAgcIBFhSIAlAAIAABTIAUAAIAAAbIgUAAIAAAigAoPAMIAqAAIAAgygA8OBJIAAgiIhHAAIAAgcIBFhSIAmAAIAABTIAUAAIAAAbIgUAAIAAAigA85AMIArAAIAAgygEgw4ABJIAAgiIhGAAIAAgcIBEhSIAmAAIAABTIAVAAIAAAbIgVAAIAAAigEgxiAAMIAqAAIAAgygEAt4ABIIAAgZIAfAAIAAhLIgfAAIAAgYIAOgBQAGAAAEgCQAGgDACgEQACgEAAgGIAhAAIAAB3IAeAAIAAAZgAaTBIIAAgZIAeAAIAAhLIgeAAIAAgYIAOgBQAGAAAEgCQAGgDACgEQACgEABgGIAgAAIAAB3IAeAAIAAAZgAGuBIIAAgZIAeAAIAAhLIgeAAIAAgYIANgBQAHAAAEgCQAFgDADgEQADgEAAgGIAgAAIAAB3IAeAAIAAAZgAmTBIIAAgYIAagUIAVgSQAMgKAFgIQAFgJAAgIQAAgKgGgFQgHgGgMAAQgJAAgJAEQgLAEgIAFIgDAAIAAggQAHgDAOgDQANgDAOAAQAbAAAOAMQAOALAAAVQABAOgIAMQgGALgOANIgSAPIgNAJIBBAAIAAAcgAs1BIIAAgZIAeAAIAAhLIgeAAIAAgYIANgBQAHAAAEgCQAFgDADgEQACgEAAgGIAhAAIAAB3IAeAAIAAAZgA61BIIAAgZIAfAAIAAhLIgfAAIAAgYIAOgBQAGAAAFgCQAFgDADgEQACgEAAgGIAhAAIAAB3IAeAAIAAAZgEgheABIIAAgZIAeAAIAAhLIgeAAIAAgYIANgBQAGAAAEgCQAGgDACgEQADgEAAgGIAgAAIAAB3IAfAAIAAAZgEg2IABIIAAgZIAeAAIAAhLIgeAAIAAgYIANgBQAHAAAEgCQAGgDACgEQACgEABgGIAgAAIAAB3IAeAAIAAAZg");
	this.text.setTransform(394.9,71);


	this.textanimacio = new cjs.Text(txt['textanimacio'], "bold 23px Verdana");
	this.textanimacio.textAlign = "center";
	this.textanimacio.lineHeight = 24;
	this.textanimacio.lineWidth = 339;
	this.textanimacio.setTransform(617.6,361.1+incremento*2);

	this.titolanimacio = new cjs.Text(txt['titolanimacio'], "bold 23px Verdana");
	this.titolanimacio.textAlign = "center";
	this.titolanimacio.lineHeight = 24;
	this.titolanimacio.lineWidth = 786;
	this.titolanimacio.setTransform(394.2,0.3+incremento*2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.titolanimacio},{t:this.textanimacio},{t:this.text}]}).wait(320));

	// rebaixat
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape.setTransform(619.4,377.7,0.435,1.291);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_1.setTransform(619.4,377.7,0.435,1.291);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape_2.setTransform(714.9,71.5,0.143,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_3.setTransform(714.9,71.5,0.143,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape_4.setTransform(587.3,71.5,0.143,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_5.setTransform(587.3,71.5,0.143,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape_6.setTransform(461.9,71.5,0.143,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_7.setTransform(461.9,71.5,0.143,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape_8.setTransform(336.6,71.5,0.143,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_9.setTransform(336.6,71.5,0.143,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape_10.setTransform(205.9,71.5,0.143,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_11.setTransform(205.9,71.5,0.143,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("EA90AKbMh7nAAAIAA01MB7nAAAg");
	this.shape_12.setTransform(400.8,17.8,0.544,0.264);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Eg9zAKbIAA00MB7nAAAIAAU0g");
	this.shape_13.setTransform(400.8,17.8,0.544,0.264);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("EA90ACvMh7nAAAIAAleMB7nAAAg");
	this.shape_14.setTransform(75.1,71.5,0.143,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Eg9zACvIAAleMB7nAAAIAAFeg");
	this.shape_15.setTransform(75.1,71.5,0.143,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(320));

	// explosions
	this.instance_6 = new lib.explosio();
	this.instance_6.setTransform(77.7,321.2,1,1,0,0,0,68.8,21.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).wait(1).to({regX:68.9,regY:21.1,x:77.8,y:321.1,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(36).to({regX:68.8,regY:21.2,x:205.5,y:321.2,alpha:0,_off:false},0).wait(1).to({regX:68.9,regY:21.1,x:205.6,y:321.1,alpha:0.058},0).wait(1).to({alpha:0.115},0).wait(1).to({alpha:0.173},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.288},0).wait(1).to({alpha:0.346},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.577},0).wait(1).to({alpha:0.635},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.75},0).wait(1).to({_off:true},1).wait(35).to({regX:68.8,regY:21.2,x:339.8,y:321.2,alpha:0,_off:false},0).wait(1).to({regX:68.9,regY:21.1,x:339.9,y:321.1,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(1).to({regX:68.8,regY:21.2,x:339.8,y:321.2},0).to({_off:true},1).wait(34).to({x:459.6,alpha:0,_off:false},0).wait(1).to({regX:68.9,regY:21.1,x:459.7,y:321.1,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(35).to({regX:68.8,regY:21.2,x:583.2,y:321.2,alpha:0,_off:false},0).wait(1).to({regX:68.9,regY:21.1,x:583.3,y:321.1,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(1).to({regX:68.8,regY:21.2,x:583.2,y:321.2},0).to({_off:true},1).wait(35).to({x:710.3,alpha:0,_off:false},0).wait(1).to({regX:68.9,regY:21.1,x:710.4,y:321.1,alpha:0.056},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(1));

	// fletxa6
	this.instance_7 = new lib.combi_fletxa();
	this.instance_7.setTransform(715.8,131,0.85,0.85,0,0,0,27.7,43.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(250).to({_off:false},0).to({regY:43.3,scaleX:0.85,scaleY:0.85,rotation:25.8,x:715.7,y:333.3},50).to({_off:true},1).wait(19));

	// fletxa5
	this.instance_8 = new lib.combi_fletxa();
	this.instance_8.setTransform(589.1,131,0.85,0.85,0,0,0,27.6,43.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200).to({_off:false},0).to({regY:43.3,scaleX:0.85,scaleY:0.85,rotation:25.8,y:328.2},50).to({_off:true},1).wait(69));

	// fletxa4
	this.instance_9 = new lib.combi_fletxa();
	this.instance_9.setTransform(460.8,130.9,0.85,0.85,0,0,0,27.7,43.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150).to({_off:false},0).to({regY:43.4,scaleX:0.85,scaleY:0.85,rotation:26,y:329.8},50).to({_off:true},1).wait(119));

	// fletxa3
	this.instance_10 = new lib.combi_fletxa();
	this.instance_10.setTransform(335.8,130.9,0.85,0.85,0,0,0,27.7,43.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,rotation:26,y:332.3},50).to({_off:true},1).wait(169));

	// fletxa2
	this.instance_11 = new lib.combi_fletxa();
	this.instance_11.setTransform(203.2,130.9,0.85,0.85,0,0,0,27.7,43.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,rotation:25.8,y:320.5},51).to({_off:true},1).wait(219));

	// fletxa1
	this.instance_12 = new lib.combi_fletxa();
	this.instance_12.setTransform(70.6,130.9,0.85,0.85,0,0,0,27.7,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:0.85,scaleY:0.85,rotation:25.8,y:317.9},49).to({_off:true},1).wait(270));

	// fletxes
	this.instance_13 = new lib.combi_fletxa();
	this.instance_13.setTransform(715.8,131,0.85,0.85,0,0,0,27.7,43.4);

	this.instance_14 = new lib.combi_fletxa();
	this.instance_14.setTransform(589.1,131,0.85,0.85,0,0,0,27.6,43.4);

	this.instance_15 = new lib.combi_fletxa();
	this.instance_15.setTransform(460.8,130.9,0.85,0.85,0,0,0,27.7,43.3);

	this.instance_16 = new lib.combi_fletxa();
	this.instance_16.setTransform(335.8,130.9,0.85,0.85,0,0,0,27.7,43.3);

	this.instance_17 = new lib.combi_fletxa();
	this.instance_17.setTransform(203.2,130.9,0.85,0.85,0,0,0,27.7,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},49).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},51).to({state:[{t:this.instance_14},{t:this.instance_13}]},50).to({state:[{t:this.instance_13}]},50).to({state:[]},50).to({state:[]},69).wait(1));

	// fons
        var mask=new cjs.Shape();
        mask.graphics.dr(0,0,791,400);
	this.shape_16 = new lib._000G7J01();
	this.shape_16.setTransform(0,-50,0.85,0.85    );
        this.shape_16.mask=mask;
        
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_16}]},319).wait(100000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,791.4,400.7);

(lib.combi_fletxa = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13839").s().p("AgMA1IAZgbIgNgNIgZAbIgpgoIAOgMIAbAZIANgNIgbgaIAngoIANANIgZAbIAMAOIAbgbIAoAnIgNANIgbgZIgOAMIAbAaIgoApg");
	this.shape.setTransform(36.8,57.8,1.159,1.159);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAVgVAcAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgcAAgVgVg");
	this.shape_1.setTransform(36.8,57.8,1.159,1.159);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsAIQAPgMAWgLQAugWAaAHQgdgBgpAVQgqATgRAYQAEgMAQgNg");
	this.shape_2.setTransform(28.7,41.2,1.159,1.159);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsAIQAPgMAWgLQAUgKAUgEQAVgEAMADQgdgBgpAVQgsATgRAYQAFgMAQgNg");
	this.shape_3.setTransform(47.8,80.4,1.159,1.159);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2D2C2E").ss(1,0,0,4).p("AgVAYIADgBQAbgOAKgbIgDABQgcAOgJAbg");
	this.shape_4.setTransform(52.2,81.6,1.159,1.159);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARgTIADgCQgJAcgcAOIgCABQAJgbAbgOg");
	this.shape_5.setTransform(52,81.9,1.159,1.159);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E13839").s().p("AgqhBIARgJIBECNIgRAIg");
	this.shape_6.setTransform(16.5,16.6,1.159,1.159);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E13839").s().p("AhWAAICLhEIAiBEIiKBFg");
	this.shape_7.setTransform(14.9,13.6,1.159,1.159);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E13839").s().p("AAGBbQgegXAHgBQALgCADgWIg8h5IAzgjIBMCcIgZBHIghgXg");
	this.shape_8.setTransform(24.5,16.1,1.159,1.159);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E13839").s().p("AACBMIhMicIA8gTIA6B5QATALAIgIQAFgEgBAnIgCAog");
	this.shape_9.setTransform(10.3,22.7,1.159,1.159);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E13839").s().p("AAwEeQgigMgOggIiOkgQgKgUACgYIgBAAIgMjJICWCGIAAAAQARANAKAVICNEgQAQAggLAjQgMAighAQQgSAKgUAAQgOAAgPgGg");
	this.shape_10.setTransform(37.1,53.2,1.159,1.159);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.6,2.8,54.6,84.2);
(lib.explosio = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2B2E").ss(2).p("AA6BzIi2ApIlWA6IEBiMImPAMIFbh5ImqhRIG6gSICTgLIB8AFIIOhGIkXBSIG6CKInKAMIESCuIkshAg");
	this.shape.setTransform(68.9,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC0A32","#F8ED34","#DC0A32"],[0.231,0.459,0.769],-70.1,0,70.2,0).s().p("AjeBJImQALIFbh4ImqhSIG6gRICTgMIB9AGIINhGIkWBSIG6CJInKAMIERCvIkrhAIiugSIi2ApIlWA6g");
	this.shape_1.setTransform(70.2,21.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140.5,42.6);

(lib.mc_botons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fons
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AuhkWQg8AAAAA8IAAG1QAAA8A8AAIdDAAQA8AAAAg8IAAm1QAAg8g8AAg");
	this.shape.setTransform(114.7,21.2,1,0.895);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuhEXQg8AAAAg8IAAm1QAAg8A8AAIdDAAQA8AAAAA8IAAG1QAAA8g8AAg");
	this.shape_1.setTransform(114.7,21.2,1,0.895);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AuhEXQg8AAAAg8IAAm1QAAg8A8AAIdDAAQA8AAAAA8IAAG1QAAA8g8AAg");
	this.shape_2.setTransform(114.7,21.2,1,0.895);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(1,1,1).p("AuhkWQg8AAAAA8IAAG1QAAA8A8AAIdDAAQA8AAAAg8IAAm1QAAg8g8AAg");
	this.shape_3.setTransform(114.7,21.2,1,0.895);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AuhEXQg8AAAAg8IAAm1QAAg8A8AAIdDAAQA8AAAAA8IAAG1QAAA8g8AAg");
	this.shape_4.setTransform(114.7,21.2,1,0.895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.6,-3.7,198.2,50);
   (lib._0009C701 = function() {
	this.initialize(img._0009C701);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,680);


(lib._0009XI01 = function() {
	this.initialize(img._0009XI01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,745);


(lib._000G7J01 = function() {
	this.initialize(img._000G7J01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,718);


(lib._000G8001 = function() {
	this.initialize(img._000G8001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,700);


(lib._000K8T01 = function() {
	this.initialize(img._000K8T01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,711);


(lib._000K8Y01 = function() {
	this.initialize(img._000K8Y01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,735);


(lib._000UCU01 = function() {
	this.initialize(img._000UCU01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,724);


(lib._002C3001 = function() {
	this.initialize(img._002C3001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,700);


(lib._002C6101 = function() {
	this.initialize(img._002C6101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,721);


(lib._002C6G01 = function() {
	this.initialize(img._002C6G01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,708);


(lib._002C7X01 = function() {
	this.initialize(img._002C7X01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,588,768);


(lib._002C8501 = function() {
	this.initialize(img._002C8501);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,659);


(lib.Bomba = function() {
	this.initialize(img.Bomba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,106);


(lib.Diapositiva1 = function() {
	this.initialize(img.Diapositiva1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,540);


(lib.EEUU = function() {
	this.initialize(img.EEUU);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,696,363);


(lib.esvastica_negre = function() {
	this.initialize(img.esvastica_negre);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.FlashAICBActivos = function() {
	this.initialize(img.FlashAICBActivos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,108);


(lib.FR = function() {
	this.initialize(img.FR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,693,362);


(lib.GB = function() {
	this.initialize(img.GB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,693,361);


(lib.Italia = function() {
	this.initialize(img.Italia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,701,368);


(lib.Japon = function() {
	this.initialize(img.Japon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,701,369);


(lib.Japon_1 = function() {
	this.initialize(img.Japon_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,701,369);


(lib.Mapadebits24 = function() {
	this.initialize(img.Mapadebits24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,81);


(lib.Nazi = function() {
	this.initialize(img.Nazi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,701,368);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.shutterstock_13421593 = function() {
	this.initialize(img.shutterstock_13421593);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,792);


(lib.URRS = function() {
	this.initialize(img.URRS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,694,362);

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

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, textos = textos || {});
var lib, images, createjs, textos;


function clearTexts() {
    var childNodes = document.body.childNodes;
    for (var i = childNodes.length - 1; i >= 0; i--) {
        if (childNodes[i].nodeType == 1 && childNodes[i].nodeName == 'DIV') {
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