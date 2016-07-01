(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
      this.initialize();
      clearTexts();
      
      // Capa 1
      basicos(this, 0, 0, 1, 0, 0);
      titulo1(this, txt['titulo']);

      this.imagen = new lib.pag01();
      this.imagen.setTransform(82.7,152.4,0.714,0.714);
      
      this.entrar = new lib.BtnFalse();
      this.entrar.setTransform(475,340.1,1.297,1.187,0,0,0,309.9,163.5);
      new cjs.ButtonHelper(this.entrar, 0, 1, 2, false, new lib.BtnFalse(), 3);
      this.entrar.on("click", function (evt) {
        putStage(new lib.frame2());
      });

      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame2());
      });

      this.addChild(this.titulo, this.siguiente, this.imagen, this.entrar, this.instance, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
    (lib.frame2 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,0,1,0,0);

      var html = createDiv(txt['pantalla1'], "Verdana", '28px', '600px', '100px', "500px", "485px", "center");
      this.titulo = new cjs.DOMElement(html);
      this.titulo.setTransform(90, -588,1,1,0,0,0,-100,-230);
     
      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame3());
      });

      this.addChild(this.titulo,this.pantalla1,this.home,this.siguiente, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);
      
      // Capa 1
      this.instance_1 = new lib.animacion01();
      this.instance_1.setTransform(470,303,1,1,0,0,0,379.4,289.4);
      
      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame2());
      });
      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame4());
      });

      this.addChild(this.instance_1,this.anterior,this.home,this.siguiente,this.instance, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame4 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);
      
      this.instance_1 = new lib.Symbol16();
      this.instance_1.setTransform(476.5,340.5,1,1,0,0,0,394.7,188.7);
      
      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame3());
      });
      this.siguiente.on("click", function (evt) {
         putStage(new lib.frame5());
     });

      this.addChild(this.instance_1,this.anterior,this.home,this.siguiente,this.instance, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame5 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);
      
      titulo2(this,txt['pantalla4_1']);
      
      this.instance_1 = new lib.pag05();
      this.instance_1.setTransform(83.9,151.8,0.715,0.715);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame4());
      });
      this.siguiente.on("click", function (evt) {
         putStage(new lib.frame6());
     });

      this.addChild(this.instance_1,this.anterior,this.home,this.siguiente,this.titulo, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
    (lib.frame6 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);
      
      titulo2(this,txt['pantalla4_1']);
      
      this.instance_1 = new lib.pag03();
      this.instance_1.setTransform(83.9,151.8,0.715,0.715);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame5());
      });
      this.siguiente.on("click", function (evt) {
         putStage(new lib.frame7());
     });

      this.addChild(this.instance_1,this.anterior,this.home,this.siguiente,this.titulo, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame7 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);

      this.pantalla5_2 = new cjs.Text(txt["pantalla5_2"], "25px Verdana");
      this.pantalla5_2.textAlign = "center";
      this.pantalla5_2.lineHeight = 27;
      this.pantalla5_2.lineWidth = 373;
      this.pantalla5_2.setTransform(672.1,129.2);

      this.pantalla5_1 = new cjs.Text(txt["pantalla5_1"], "25px Verdana");
      this.pantalla5_1.textAlign = "center";
      this.pantalla5_1.lineHeight = 27;
      this.pantalla5_1.lineWidth = 373;
      this.pantalla5_1.setTransform(268.9,129.2);

      this.instance_1 = new lib.pag03();
      this.instance_1.setTransform(482.2,176.6,0.352,0.352);

      this.instance_2 = new lib.pag05();
      this.instance_2.setTransform(82.6,176.6,0.345,0.345);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame6());
      });
      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame8());
      });

      this.addChild(this.pantalla5_2, this.pantalla5_1, this.instance_1, this. instance_2, this.anterior,this.home,this.siguiente,this.titulo,this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
            
    (lib.frame8 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);
            
      this.pantalla5_2 = new cjs.Text(txt["pantalla5_2"], "25px Verdana");
      this.pantalla5_2.textAlign = "center";
      this.pantalla5_2.lineHeight = 27;
      this.pantalla5_2.lineWidth = 373;
      this.pantalla5_2.setTransform(672.1,129.2);

      this.pantalla5_1 = new cjs.Text(txt["pantalla5_1"], "25px Verdana");
      this.pantalla5_1.textAlign = "center";
      this.pantalla5_1.lineHeight = 27;
      this.pantalla5_1.lineWidth = 373;
      this.pantalla5_1.setTransform(268.9,129.2);

      this.instance_1 = new lib.pag03();
      this.instance_1.setTransform(482.2,176.6,0.352,0.352);

      this.instance_2 = new lib.pag05();
      this.instance_2.setTransform(82.6,176.6,0.345,0.345);

      this.instance_3 = new lib.Symbol20();
      this.instance_3.setTransform(476,462.8,1,1,0,0,0,395.9,87.2);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame7());
      });
      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame9());
      });

      this.addChild(this.instance_1, this.instance_2, this.instance_3, this.anterior,this.home,this.siguiente,this.pantalla5_1,this.pantalla5_2, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame9 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);

      titulo2(this,txt['pantalla7_1']);

      this.instance_1 = new lib.pag04();
      this.instance_1.setTransform(81.6,153.4,0.715,0.715);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame8());
      });
      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame10());
      });

      this.addChild(this.instance_1,this.anterior,this.home,this.siguiente,this.titulo,this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame10 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);

      /*this.pantalla8_1 = new cjs.Text(txt["pantalla8_1"], "20px Verdana");
      this.pantalla8_1.lineHeight = 22;
      this.pantalla8_1.lineWidth = 785;
      this.pantalla8_1.setTransform(82.9,153.2);*/
      
      parrafo(this,txt["pantalla8_1"], "20px", 82.9, -480);

      this.instance_1 = new lib.pag06();
      this.instance_1.setTransform(290.4,241.9,0.53,0.53);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame9());
      });
      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame11());
      });

      this.addChild(this.instance_1, this.texto, this.anterior,this.home,this.siguiente,this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame11 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);
      
      titulo2(this,txt['pantalla9_1']);

      this.instance_1 = new lib.Symbol23();
      this.instance_1.setTransform(459.1,338.1,1,1,0,0,0,376.2,186.7);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame10());
      });
      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame12());
      });

      this.addChild(this.titulo,this.instance_1,this.anterior,this.home,this.siguiente,this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    
    (lib.frame12 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);

      titulo2(this,txt['pantalla9_1']);

      this.instance_1 = new lib.Symbol25();
      this.instance_1.setTransform(459.1,338.1,1,1,0,0,0,376.2,186.7);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame11());
      });
      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame13());
      });

      this.addChild(this.titulo,this.instance_1,this.anterior,this.home,this.siguiente,this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame13 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,1,0,0);

      titulo2(this,txt['pantalla10_1']);

      this.instance_1 = new lib.Symbol27();
      this.instance_1.setTransform(459.1,338.1,1,1,0,0,0,376.2,186.7);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame12());
      });
      this.siguiente.on("click", function (evt) {
        putStage(new lib.frame14());
      });

      this.addChild(this.titulo,this.instance_1,this.anterior,this.home,this.siguiente,this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame14 = function () {
      this.initialize();
      clearTexts();
      basicos(this,1,1,0,0,0);

      titulo2(this,txt['pantalla10_1']);

      this.instance_1 = new lib.Symbol29();
      this.instance_1.setTransform(459.1,338.1,1,1,0,0,0,376.2,186.7);

      this.home.on("click", function (evt) {
        putStage(new lib.frame1());
      });
      this.anterior.on("click", function (evt) {
        putStage(new lib.frame13());
      });

      this.addChild(this.titulo,this.instance_1,this.anterior,this.home,this.logo);
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
    function titulo3(escena, texto) {
        var html = createDiv(texto, "Verdana", '25px', '770px', '100px', "20px", "312px", "center");
        escena.titulo = new cjs.DOMElement(html);
        escena.titulo.setTransform(5, -588);
    }
    function texto(escena, texto, side, ancho) {
      width = 730 - ancho;
      var html = createDiv(texto, "Verdana", "20px", width + 'px', '400px', "20px", "185px", "left");
      escena.texto = new cjs.DOMElement(html);
      if (side == 0)
          escena.texto.setTransform(90, -482);
      else
          escena.texto.setTransform(130+ancho, -482);
    }
    function parrafo(escena, texto, size, left, top) {
      var html = createDiv(texto, "Verdana", size, '730px', '400px', "22px", "185px", "left");
      html.style.lineHeight = "1.5em";
      escena.texto = new cjs.DOMElement(html);
      //escena.texto.setTransform(0,-620);
      escena.texto.setTransform(left,top);
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
    
    (lib.pag01 = function() {
      this.initialize(img.pag01);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1100,526);
    
    (lib.pag02 = function() {
      this.initialize(img.pag02);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1100,526);
    
    (lib.pag03 = function() {
      this.initialize(img.pag03);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1100,526);
    
    (lib.pag04 = function() {
      this.initialize(img.pag04);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1100,526);

    (lib.pag05 = function() {
      this.initialize(img.pag05);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1100,526);

    (lib.pag06 = function() {
      this.initialize(img.pag06);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,700,550);

  (lib.fot01a = function() {
      this.initialize(img.fot01);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,700,550);
(lib.fot02a = function() {
      this.initialize(img.fot02);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,700,550);
(lib.fot03a = function() {
      this.initialize(img.fot03);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,700,550);
(lib.fot04 = function() {
      this.initialize(img.fot04);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,700,550);
(lib.fot05 = function() {
      this.initialize(img.fot05);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,700,550);
(lib.fot06 = function() {
      this.initialize(img.fot06);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,700,550);


    (lib.BtnFalse = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Capa 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("EgwaAZiMAAAgzDMBg1AAAMAAAAzDg");
      this.shape.setTransform(310,163.5);

      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#000000").s().p("EgwaAZiMAAAgzDMBg1AAAMAAAAzDg");
      this.shape_1.setTransform(310,163.5);

      this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,0,0);

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

    (lib.gris = function() {
      this.initialize();

      // Capa 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#666666").s().p("AipD2QhNg0gghTQgVg2AAg5QABgVACgWQARhuBThIQBUhKBwAAQBvAABUBKQBUBIASBuQADAYAAATQAAA4gXA3QggBThMA0QhMA2hdAAQhdAAhMg2gAhPDYQgRANgIAMQAyAWA2AAQA2AAAzgWQgHgNgTgMQgigZgtAAQgsAAgjAZgAgxBvQg8AFg4AXQgcALgPAKQAeAoApAZQANgRAYgTQAughA2AAQA7AAAuAhQAWARALARQApgaAcglQgPgKgagKQg2gYg9gFQgVgFgeAAQgcAAgVAFgAjuBvQAGAMAEAHQANgKAZgJQBXgpBngBQBnABBZApQAYAIAOAJIAIgRQAUguAFgwIoNAAQADAuAVAwgAEFgTQAAgPgDgJQgHgtgXgoQgYAPgnAOQhRAdhUAAQhTAAhSgcQgqgOgWgPQgXAogHAsIgDAYIILAAIAAAAgAjRidQATANAjANQBJAbBSAAQBSAABHgdQAjgNATgPQgZghgvgeQgKASgWAQQgsAig7AAQg7AAgtgiQgQgKgLgOIgIgKQgsAegaAlgAhqjvIAGAHQAHAJALAGQAjAZAvAAQAwgBAhgZQAPgLAHgOQgygSg1gBQg4AAgyAXg");
      this.shape.setTransform(30,30);

      this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,60,60);



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

(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.caja02 = new cjs.Text(txt["caja02"], "16px Arial");
	this.caja02.textAlign = "center";
	this.caja02.lineHeight = 18;
	this.caja02.lineWidth = 199;
	this.caja02.setTransform(99.5,46.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#214F87").ss(1,1,1).p("AP3EfI/tAAIAAo9IftAAg");
	this.shape.setTransform(101.5,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558ED5").s().p("Av2EfIAAo9IftAAIAAI9g");
	this.shape_1.setTransform(101.5,53.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#214F87").ss(1,1,1).p("ATPmaIAAI7Im2D7IAAo8IACgBI/pAAIGzj6IfoAAImxD5IgBAB");
	this.shape_2.setTransform(123.1,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7BA8DF").s().p("AzNB8IGyj3IfpAAImyD2IAAABg");
	this.shape_3.setTransform(123,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D69B3").s().p("AjZigIACgBIAAgBIGwj5IABgBIAAACIAAI8ImzD7g");
	this.shape_4.setTransform(224.3,41.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,246.2,82.6);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.caja01 = new cjs.Text(txt["caja01"], "16px Arial");
	this.caja01.textAlign = "center";
	this.caja01.lineHeight = 18;
	this.caja01.lineWidth = 199;
	this.caja01.setTransform(99.4,45.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9D561C").ss(1,1,1).p("AP3EfI/tAAIAAo9IftAAg");
	this.shape.setTransform(101.5,53.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E46C0B").s().p("Av2EfIAAo9IftAAIAAI9g");
	this.shape_1.setTransform(101.5,53.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9D561C").ss(1,1,1).p("AMbihIgCABIAAI8IG2j7IAAo7ATNmbImxD5IgBABI/pAAIGzj6g");
	this.shape_2.setTransform(123.4,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD9441").s().p("AzOB8IGyj3IfoAAImxD2IgBABgATOh7IABAAIgBABg");
	this.shape_3.setTransform(123.4,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB5909").s().p("AjZigIACgBIAAgBIGwj5IABgBIAAABIAAABIAAI8ImzD7g");
	this.shape_4.setTransform(224.6,41.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,246.7,82.6);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.caja03 = new cjs.Text(txt["caja03"], "16px Arial");
	this.caja03.textAlign = "center";
	this.caja03.lineHeight = 18;
	this.caja03.lineWidth = 210;
	this.caja03.setTransform(104.9,35.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#295A12").ss(1,1,1).p("AQyEIMghjAAAIAAoPMAhjAAAg");
	this.shape.setTransform(107.5,51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82DE55").s().p("AwxEIIAAoPMAhjAAAIAAIPg");
	this.shape_1.setTransform(107.5,51.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#295A12").ss(1,1,1).p("AUMl+IAAIHIAAACANWGGIAAgCIAAoOIACgBI/oAAA0LiLIG1j5MAhgAAAAUMmEIgCAAAUMCJIm2D7ANZiLIGzj5");
	this.shape_2.setTransform(129.2,39.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D861A").s().p("AjZiJIACgBIAAAAIGxj6IAAAHIAAIHImzD7g");
	this.shape_3.setTransform(236.6,39);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D69B3").s().p("AjZGEIGzj7IAAACImzD7gADZmEIABgBIAAABg");
	this.shape_4.setTransform(236.6,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0E77E").s().p("ANYB8I/oAAIh7AAIG1j3MAhgAAAIACAAImzD3g");
	this.shape_5.setTransform(129.2,12.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,258.5,84);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.caja04 = new cjs.Text(txt["caja04"], "16px Arial");
	this.caja04.textAlign = "center";
	this.caja04.lineHeight = 18;
	this.caja04.lineWidth = 117;
	this.caja04.setTransform(57.5,40.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#692C96").ss(1,1,1).p("AJYD6IyvAAIAAnzISvAAg");
	this.shape.setTransform(60,50.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B684DB").s().p("ApXD6IAAnzISuAAIAAHzg");
	this.shape_1.setTransform(60,50.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#692C96").ss(1,1,1).p("AMyl0IAAHwIm2D7IAAnyIADgBIywAAIGyj5ISvAAImxD4IAAAB");
	this.shape_2.setTransform(81.9,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B1E9").s().p("AswB8IGyj3ISvAAImxD2IgBABg");
	this.shape_3.setTransform(81.8,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9C59CE").s().p("AjZh7IACgBIAAgBIGwj4IABgBIAAACIAAHwImzD7g");
	this.shape_4.setTransform(141.9,37.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja04);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,0,164.7,75.2);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.caja05 = new cjs.Text(txt["caja05"], "16px Arial");
	this.caja05.textAlign = "center";
	this.caja05.lineHeight = 18;
	this.caja05.lineWidth = 213;
	this.caja05.setTransform(14.7,145.2,1,1,-89.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#295A12").ss(1,1,1).p("ADmw2MAAAAhtInLAAMAAAghtg");
	this.shape.setTransform(23,132.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82DE55").s().p("AjlQ3MAAAghtIHLAAMAAAAhtg");
	this.shape_1.setTransform(23,132.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#295A12").ss(1,1,1).p("AG+yzImzD6AALu5IgDABMAADAhsIG2j7MgADghlAG+yzInJAAIm1D6IHLAA");
	this.shape_2.setTransform(44.9,120.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0E77E").s().p("AAMB8InKAAIG0j3IHJAAImzD3g");
	this.shape_3.setTransform(44.8,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3D861A").s().p("Ajau4IABgBIABAAIGxj6IAAAHMAADAhlIm0D7g");
	this.shape_4.setTransform(67.8,120.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja05);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89.8,241.2);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.caja08 = new cjs.Text(txt["caja08"], "16px Arial");
	this.caja08.textAlign = "center";
	this.caja08.lineHeight = 18;
	this.caja08.lineWidth = 140;
	this.caja08.setTransform(69.6,38.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1C416F").ss(1,1,1).p("ALLDXI2VAAIAAmtIWVAAg");
	this.shape.setTransform(71.5,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8EB4E3").s().p("ArKDXIAAmtIWVAAIAAGtg");
	this.shape_1.setTransform(71.5,46.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1C416F").ss(1,1,1).p("AOllSIAAGrIm2D7IAAmtIACAAI2VAAIGyj6IWVAAImxD4IgBAC");
	this.shape_2.setTransform(93.5,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3CCEC").s().p("AujB8IGyj3IWVAAImyD2IAAABg");
	this.shape_3.setTransform(93.4,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5891D6").s().p("AjZhYIACgBIAAgBIGwj5IABgBIAAACIAAGsImzD7g");
	this.shape_4.setTransform(164.9,34.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja08);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,0,187.4,68.2);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.caja07 = new cjs.Text(txt["caja07"], "16px Arial");
	this.caja07.textAlign = "center";
	this.caja07.lineHeight = 18;
	this.caja07.lineWidth = 123;
	this.caja07.setTransform(61.4,43.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#664D00").ss(1,1,1).p("AJ2D1IzrAAIAAnpITrAAg");
	this.shape.setTransform(63.1,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC000").s().p("Ap0D1IAAnpITqAAIAAHpg");
	this.shape_1.setTransform(63.1,49.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#664D00").ss(1,1,1).p("ANPlvIAAHlIm1D7IAAnmIACgBIzqAAIGyj6ITqAAImyD5IAAAB");
	this.shape_2.setTransform(84.8,37.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD553").s().p("AtOB8IGyj3ITqAAImxD2IAAABg");
	this.shape_3.setTransform(84.7,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C19200").s().p("AjZh1IACgBIAAgBIGwj5IABgBIAAACIAAHlImzD7g");
	this.shape_4.setTransform(147.7,37);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja07);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169.6,74);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.caja13 = new cjs.Text(txt["caja13"], "16px Arial");
	this.caja13.textAlign = "center";
	this.caja13.lineHeight = 18;
	this.caja13.lineWidth = 145;
	this.caja13.setTransform(72.4,42.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#295A12").ss(1,1,1).p("ALpD6I3RAAIAAnzIXRAAg");
	this.shape.setTransform(74.5,50.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82DE55").s().p("AroD6IAAnzIXRAAIAAHzg");
	this.shape_1.setTransform(74.5,50.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#295A12").ss(1,1,1).p("APEl0IAAHwIm2D7IAAnyIACgBI3TAAIGyj5IXTAAImxD4IgBAB");
	this.shape_2.setTransform(96.4,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9EE67B").s().p("AvCB8IGyj3IXTAAImyD2IAAABg");
	this.shape_3.setTransform(96.3,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#53B623").s().p("AjZh7IACgBIAAgBIGwj4IABgBIAAACIAAHwImzD7g");
	this.shape_4.setTransform(170.9,37.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192.8,75.2);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.caja06 = new cjs.Text(txt["caja06"], "16px Arial");
	this.caja06.textAlign = "center";
	this.caja06.lineHeight = 18;
	this.caja06.lineWidth = 162;
	this.caja06.setTransform(17,110.7,1,1,-89.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1C416F").ss(1,1,1).p("ADrs7IAAZ3InVAAIAA53g");
	this.shape.setTransform(23.8,107.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8EB4E3").s().p("AjqM8IAA53IHVAAIAAZ3g");
	this.shape_1.setTransform(23.8,107.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1C416F").ss(1,1,1).p("AHEu4ImyD5IAAABIgCABIAAZ2IG2j7IAA50AASq+InXAAIGyj6IHXAA");
	this.shape_2.setTransform(45.4,95.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ABC8EB").s().p("AnEB8IGyj3IHXAAImyD2IAAABg");
	this.shape_3.setTransform(45.3,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#508BD3").s().p("AjZq9IACgBIAAgBIGwj4IABgBIAAACIAAZ0ImzD7g");
	this.shape_4.setTransform(68.9,95.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja06);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90.8,190.7);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.caja10 = new cjs.Text(txt["caja10"], "16px Arial");
	this.caja10.textAlign = "center";
	this.caja10.lineHeight = 18;
	this.caja10.lineWidth = 245;
	this.caja10.setTransform(122.1,30.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6D3201").ss(1,1,1).p("ATdCDMgm5AAAIAAkFMAm5AAAg");
	this.shape.setTransform(124.6,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD9441").s().p("AzcCDIAAkFMAm5AAAIAAEFg");
	this.shape_1.setTransform(124.6,38.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D3201").ss(1,1,1).p("AQEgFIgCAAIAAEFIG2j7IAAkDAW2j/ImxD4IgBACMgm7AAAIGyj5g");
	this.shape_2.setTransform(146.4,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD9441").s().p("AwEh7MAm7gABImxD3IgBABMgm7AABg");
	this.shape_3.setTransform(146.4,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB5909").s().p("AjZgEIACgBIAAgBIGwj5IABgBIAAACIAAEDImzD7g");
	this.shape_4.setTransform(271,25.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,0,293.4,54.8);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#664D00").ss(1,1,1).p("ADcqBIAAUDIm3AAIAA0Dg");
	this.shape.setTransform(22,89.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC000").s().p("AjbKCIAA0DIG3AAIAAUDg");
	this.shape_1.setTransform(22,89.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#664D00").ss(1,1,1).p("AG1r/ImyD5IAAABIgCABIAAUEIG1j7IAA0CAADoFIm4ABIGyj5IG4gC");
	this.shape_2.setTransform(43.9,76.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD553").s().p("AgDh7IG4gBImxD3IgBABIm4ABg");
	this.shape_3.setTransform(43.8,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C19200").s().p("AjZoEIACgBIAAgBIGwj4IABgBIAAACIAAUCImzD7g");
	this.shape_4.setTransform(65.9,76.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.8,153.7);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.caja11 = new cjs.Text(txt["caja11"], "16px Arial");
	this.caja11.textAlign = "center";
	this.caja11.lineHeight = 18;
	this.caja11.lineWidth = 90;
	this.caja11.setTransform(45,85.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#692C96").ss(1,1,1).p("AnVsfIOrAAIAAY/IurAAg");
	this.shape.setTransform(47,105.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B684DB").s().p("AnVMfIAA4+IOrAAIAAY+g");
	this.shape_1.setTransform(47,105.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#692C96").ss(1,1,1).p("AKxubIAAY9Im2D7IAA4+IACgBIutABIGyj6IOtgBImyD5IAAAB");
	this.shape_2.setTransform(68.9,92.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B1E9").s().p("Aj9h7IOtgBImyD3IAAABIutABg");
	this.shape_3.setTransform(68.8,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9C59CE").s().p("AjZqhIACgBIAAgBIGwj4IABgBIAAACIAAY8ImzD7g");
	this.shape_4.setTransform(115.9,92.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.8,185.2);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.caja12 = new cjs.Text(txt["caja12"], "16px Arial");
	this.caja12.textAlign = "center";
	this.caja12.lineHeight = 18;
	this.caja12.lineWidth = 195;
	this.caja12.setTransform(97.4,39.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#664D00").ss(1,1,1).p("APjDrI/FAAIAAnVIfFAAg");
	this.shape.setTransform(99.5,48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC000").s().p("AviDrIAAnVIfFAAIAAHVg");
	this.shape_1.setTransform(99.5,48.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#664D00").ss(1,1,1).p("AS+lmIAAHTIm2D7IAAnVIACAAI/HAAIGyj5IfHgBImxD4IgBAC");
	this.shape_2.setTransform(121.4,36.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD553").s().p("AsKh7IfHgBImyD3IAAABI/HABg");
	this.shape_3.setTransform(121.3,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C19200").s().p("AjZhsIACgBIAAgBIGwj5IABgBIAAACIAAHTImzD7g");
	this.shape_4.setTransform(220.9,36.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.caja12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,242.8,72.2);
(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.caja09 = new cjs.Text(txt["caja09"], "16px Arial");
	this.caja09.textAlign = "center";
	this.caja09.lineHeight = 18;
	this.caja09.lineWidth = 150;
	this.caja09.setTransform(16.9,78.7,1,1,-89.9);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(43.9,62.2,1,1.192,0,0,0,43.9,76.9);

	this.addChild(this.instance,this.caja09);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-29.4,87.8,183.2);


(lib.animacion01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 17
  titulo3(this,txt['pantalla2_1']);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.titulo}]},168).wait(1));

	// Layer 3
	this.instance = new lib.Symbol11();
	this.instance.setTransform(537.4,427.5,1,1,0,0,0,0,240.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128).to({_off:false},0).to({y:507.5,alpha:1},19).to({rotation:-6.7},12).wait(10));

	// Layer 4
	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(509.8,237.1,1,1,0,0,0,43.9,76.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118).to({_off:false},0).to({y:307.1,alpha:1},19).wait(32));

	// Layer 5
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(420.3,172.4,1,1,0,0,0,68.9,92.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(108).to({_off:false},0).to({y:242.4,alpha:1},19).wait(42));

	// Layer 6
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(242.3,128.9,1,1,0,0,0,121.4,36.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).to({y:198.9,alpha:1},19).wait(52));

	// Layer 7
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(226.5,174.8,1,1,0,0,0,146.4,25.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(88).to({_off:false},0).to({y:244.8,alpha:1},19).wait(62));

	// Layer 8
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(284.6,220,1,1,0,0,0,96.4,37.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(78).to({_off:false},0).to({y:290,alpha:1},19).wait(72));

	// Layer 9
	this.instance_6 = new lib.Symbol9();
	this.instance_6.setTransform(406.6,279.8,1,1,0,0,0,93.4,34.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(68).to({_off:false},0).to({y:349.8,alpha:1},19).wait(82));

	// Layer 10
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(264.3,277.1,1,1,0,0,0,84.8,37.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({y:347.1,alpha:1},19).wait(92));

	// Layer 11
	this.instance_8 = new lib.Symbol12();
	this.instance_8.setTransform(480.3,335.4,1,1,0,0,0,81.9,37.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48).to({_off:false},0).to({y:405.4,alpha:1},19).wait(102));

	// Layer 12
	this.instance_9 = new lib.Symbol13();
	this.instance_9.setTransform(299.4,334.1,1,1,0,0,0,129.2,39.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({y:404.1,alpha:1},19).wait(111));

	// Layer 13
	this.instance_10 = new lib.Symbol6();
	this.instance_10.setTransform(160.4,277.6,1,1,0,0,0,45.4,95.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).to({y:347.6,alpha:1},19).wait(121));

	// Layer 14
	this.instance_11 = new lib.Symbol15();
	this.instance_11.setTransform(443.1,396.3,1,1,0,0,0,123.1,41.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({y:466.3,alpha:1},19).wait(140));

	// Layer 15
	this.instance_12 = new lib.Symbol14();
	this.instance_12.setTransform(229.2,396.4,1,1,0,0,0,123.2,41.4);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:466.4,alpha:1},19).wait(15000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105.9,355,246.7,82.6);


(lib.Symbol19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.fot06();
	//this.shape.graphics.bf(img.fot06).s().p("AwWSwMAAAglfMAgtAAAMAAAAlfg");
	this.shape.setTransform(0,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,209.5,240);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.fot05();
	//this.shape.graphics.bf(img.fot05).s().p("A2KOUIAA8nMAsVAAAIAAcng");
	this.shape.setTransform(0,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,284,183.2);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.fot04();
	//this.shape.graphics.bf(img.fot04).s().p("A1xOUIAA8nMArjAAAIAAcng");
	this.shape.setTransform(0,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,278.8,183.2);

(lib.fot03 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.fot03a();
	this.shape.setTransform(0,0);
	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,212.1,130.9);


(lib.fot02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.fot02a();
	this.shape.setTransform(0,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,281.3,187.7);


(lib.fot01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.fot01a();
	this.shape.setTransform(0,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,277.5,183.7);

(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 2
	this.pantalla3_1 = new cjs.Text(txt["pantalla3_1"], "25px Verdana");
	this.pantalla3_1.lineHeight = 27;
	this.pantalla3_1.lineWidth = 784;
	this.pantalla3_1.setTransform(8,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.pantalla3_1}]},93).wait(1));

	// Symbol 19
	this.instance = new lib.Symbol19();
	this.instance.setTransform(684.7,257.5,0.098,0.098,0,0,0,104.6,120);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({regX:104.7,scaleX:1,scaleY:1,alpha:1},24).wait(1));

	// Symbol 18
	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(427.4,285.9,0.078,0.078,0,0,0,141.9,91.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({regX:142,scaleX:1,scaleY:1,alpha:1},24).wait(14));

	// Symbol 17
	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(139.4,285.9,0.106,0.106,0,0,0,139.3,91.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({regX:139.4,scaleX:1,scaleY:1,alpha:1},24).wait(31));

	// fot03
	this.instance_3 = new lib.fot03();
	this.instance_3.setTransform(683.4,65.4,0.112,0.112,0,0,0,106.2,65.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({regX:106.1,scaleX:1,scaleY:1,alpha:1},24).wait(45));

	// fot02
	this.instance_4 = new lib.fot02();
	this.instance_4.setTransform(428.7,93.8,0.099,0.099,0,0,0,140.5,93.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({regX:140.7,scaleX:1,scaleY:1,x:428.8,alpha:1},24).wait(58));

	// fot01
	this.instance_5 = new lib.fot01();
	this.instance_5.setTransform(138.8,91.9,0.138,0.138,0,0,0,138.7,91.9);
	this.instance_5.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:138.8,scaleX:1,scaleY:1,alpha:1},24).wait(700000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.7,79.2,38.2,25.3);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_1 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_2 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_3 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_4 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_5 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_6 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_7 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_8 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_9 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_10 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_11 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_12 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_13 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_14 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_15 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_16 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_17 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_18 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_19 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_20 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_21 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_22 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_23 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_24 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_25 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_26 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_27 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_28 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_29 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_30 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_31 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_32 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_33 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_34 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_35 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_36 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_37 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_38 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_39 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_40 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_41 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_42 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_43 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_44 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_45 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_46 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_47 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_48 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_49 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_50 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_51 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_52 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_53 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_54 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_55 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_56 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_57 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_58 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_59 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_60 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_61 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_62 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_63 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_64 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_65 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_66 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_67 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_68 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_69 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_70 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_71 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_72 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_73 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_74 = new cjs.Graphics().p("EhAfAPwIAA/fMCA/AAAIAAffg");
	var mask_graphics_75 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_76 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_77 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_78 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");
	var mask_graphics_79 = new cjs.Graphics().p("EhAeAPwIAA/fMCA9AAAIAAffg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-440,y:83.6}).wait(1).to({graphics:mask_graphics_1,x:-429.3,y:83.6}).wait(1).to({graphics:mask_graphics_2,x:-418.6,y:83.6}).wait(1).to({graphics:mask_graphics_3,x:-407.9,y:83.6}).wait(1).to({graphics:mask_graphics_4,x:-397.2,y:83.6}).wait(1).to({graphics:mask_graphics_5,x:-386.5,y:83.6}).wait(1).to({graphics:mask_graphics_6,x:-375.8,y:83.6}).wait(1).to({graphics:mask_graphics_7,x:-365.1,y:83.6}).wait(1).to({graphics:mask_graphics_8,x:-354.4,y:83.6}).wait(1).to({graphics:mask_graphics_9,x:-343.7,y:83.6}).wait(1).to({graphics:mask_graphics_10,x:-333,y:83.6}).wait(1).to({graphics:mask_graphics_11,x:-322.3,y:83.6}).wait(1).to({graphics:mask_graphics_12,x:-311.6,y:83.6}).wait(1).to({graphics:mask_graphics_13,x:-300.9,y:83.6}).wait(1).to({graphics:mask_graphics_14,x:-290.2,y:83.6}).wait(1).to({graphics:mask_graphics_15,x:-279.5,y:83.6}).wait(1).to({graphics:mask_graphics_16,x:-268.9,y:83.6}).wait(1).to({graphics:mask_graphics_17,x:-258.2,y:83.6}).wait(1).to({graphics:mask_graphics_18,x:-247.5,y:83.6}).wait(1).to({graphics:mask_graphics_19,x:-236.8,y:83.6}).wait(1).to({graphics:mask_graphics_20,x:-226.1,y:83.6}).wait(1).to({graphics:mask_graphics_21,x:-215.4,y:83.6}).wait(1).to({graphics:mask_graphics_22,x:-204.7,y:83.6}).wait(1).to({graphics:mask_graphics_23,x:-194,y:83.6}).wait(1).to({graphics:mask_graphics_24,x:-183.3,y:83.6}).wait(1).to({graphics:mask_graphics_25,x:-172.6,y:83.6}).wait(1).to({graphics:mask_graphics_26,x:-161.9,y:83.6}).wait(1).to({graphics:mask_graphics_27,x:-151.2,y:83.6}).wait(1).to({graphics:mask_graphics_28,x:-140.5,y:83.6}).wait(1).to({graphics:mask_graphics_29,x:-129.8,y:83.6}).wait(1).to({graphics:mask_graphics_30,x:-119.1,y:83.6}).wait(1).to({graphics:mask_graphics_31,x:-108.4,y:83.6}).wait(1).to({graphics:mask_graphics_32,x:-97.8,y:83.6}).wait(1).to({graphics:mask_graphics_33,x:-87.1,y:83.6}).wait(1).to({graphics:mask_graphics_34,x:-76.4,y:83.6}).wait(1).to({graphics:mask_graphics_35,x:-65.7,y:83.6}).wait(1).to({graphics:mask_graphics_36,x:-55,y:83.6}).wait(1).to({graphics:mask_graphics_37,x:-44.3,y:83.6}).wait(1).to({graphics:mask_graphics_38,x:-33.6,y:83.6}).wait(1).to({graphics:mask_graphics_39,x:-22.9,y:83.6}).wait(1).to({graphics:mask_graphics_40,x:-12.2,y:83.6}).wait(1).to({graphics:mask_graphics_41,x:-1.5,y:83.6}).wait(1).to({graphics:mask_graphics_42,x:9.1,y:83.6}).wait(1).to({graphics:mask_graphics_43,x:19.8,y:83.6}).wait(1).to({graphics:mask_graphics_44,x:30.5,y:83.6}).wait(1).to({graphics:mask_graphics_45,x:41.2,y:83.6}).wait(1).to({graphics:mask_graphics_46,x:51.9,y:83.6}).wait(1).to({graphics:mask_graphics_47,x:62.6,y:83.6}).wait(1).to({graphics:mask_graphics_48,x:73.2,y:83.6}).wait(1).to({graphics:mask_graphics_49,x:83.9,y:83.6}).wait(1).to({graphics:mask_graphics_50,x:94.6,y:83.6}).wait(1).to({graphics:mask_graphics_51,x:105.3,y:83.6}).wait(1).to({graphics:mask_graphics_52,x:116,y:83.6}).wait(1).to({graphics:mask_graphics_53,x:126.7,y:83.6}).wait(1).to({graphics:mask_graphics_54,x:137.4,y:83.6}).wait(1).to({graphics:mask_graphics_55,x:148.1,y:83.6}).wait(1).to({graphics:mask_graphics_56,x:158.8,y:83.6}).wait(1).to({graphics:mask_graphics_57,x:169.5,y:83.6}).wait(1).to({graphics:mask_graphics_58,x:180.2,y:83.6}).wait(1).to({graphics:mask_graphics_59,x:190.9,y:83.6}).wait(1).to({graphics:mask_graphics_60,x:201.6,y:83.6}).wait(1).to({graphics:mask_graphics_61,x:212.3,y:83.6}).wait(1).to({graphics:mask_graphics_62,x:223,y:83.6}).wait(1).to({graphics:mask_graphics_63,x:233.7,y:83.6}).wait(1).to({graphics:mask_graphics_64,x:244.3,y:83.6}).wait(1).to({graphics:mask_graphics_65,x:255,y:83.6}).wait(1).to({graphics:mask_graphics_66,x:265.7,y:83.6}).wait(1).to({graphics:mask_graphics_67,x:276.4,y:83.6}).wait(1).to({graphics:mask_graphics_68,x:287.1,y:83.6}).wait(1).to({graphics:mask_graphics_69,x:297.8,y:83.6}).wait(1).to({graphics:mask_graphics_70,x:308.5,y:83.6}).wait(1).to({graphics:mask_graphics_71,x:319.2,y:83.6}).wait(1).to({graphics:mask_graphics_72,x:329.9,y:83.6}).wait(1).to({graphics:mask_graphics_73,x:340.6,y:83.6}).wait(1).to({graphics:mask_graphics_74,x:351.3,y:83.6}).wait(1).to({graphics:mask_graphics_75,x:362,y:83.6}).wait(1).to({graphics:mask_graphics_76,x:372.7,y:83.6}).wait(1).to({graphics:mask_graphics_77,x:383.4,y:83.6}).wait(1).to({graphics:mask_graphics_78,x:394.1,y:83.6}).wait(1).to({graphics:mask_graphics_79,x:404.8,y:83.6}).wait(1));

	// Layer 1
	this.pantalla6_2 = new cjs.Text(txt["pantalla6_2"], "25px Verdana");
	this.pantalla6_2.textAlign = "center";
	this.pantalla6_2.lineHeight = 27;
	this.pantalla6_2.lineWidth = 373;
	this.pantalla6_2.setTransform(592.1,0);

	this.pantalla6_1 = new cjs.Text(txt["pantalla6_1"], "25px Verdana");
	this.pantalla6_1.textAlign = "center";
	this.pantalla6_1.lineHeight = 27;
	this.pantalla6_1.lineWidth = 373;
	this.pantalla6_1.setTransform(188.9,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#597DA1").ss(4,1,1).p("Eg9iADDMA6fAAAQB1jSB/hyQCBhxCBgEQCFgEB3BtQB8ByCzE0QCzE4EKADQEMACC3k0QA8hlBmjrQBXjLAjgmQBhhsBtAAQBrAABoBsQAKAKBJBsQBMBvBDBIQDfD3D1AAQELAADVkBQC2jZB8l+");
	this.shape.setTransform(394,112.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BE514A").ss(4,1,1).p("Eg9jgDCMA57AAAQB1DSCBByQCCBxCDAEQCFAEB4htQB+hyC1k0QC0k4ENgDQEOgCC4E0QA9BlBnDrQBYDLAjAmQBiBsBuAAQBsAABphsQAKgKBKhsQBNhvBEhIQDgj3D4AAQENgBDWECQC4DZB+F+");
	this.shape_1.setTransform(397.8,106.6);

	this.pantalla6_2.mask = this.pantalla6_1.mask = this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.pantalla6_1},{t:this.pantalla6_2}]}).wait(80000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,791.8,172.4);

(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(376.2,186.7,1,1,0,0,0,376.2,186.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).wait(100000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,752.3,373.4);

(lib.Symbol24 = function() {
	this.initialize();

	// Layer 1
	/*this.pantalla9_2 = new cjs.Text(txt["pantalla9_2"], "22px Verdana");
	this.pantalla9_2.lineHeight = 34;
	this.pantalla9_2.lineWidth = 748;*/

  parrafo(this, txt["pantalla9_2"],"22px",0,-620);

	this.addChild(this.texto);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,752.3,373.4);

(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.setTransform(376.2,186.7,1,1,0,0,0,376.2,186.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).wait(10000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,752.3,373.4);

(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	/*this.pantalla9_3 = new cjs.Text(txt["pantalla9_3"], "22px Verdana");
	this.pantalla9_3.lineHeight = 34;
	this.pantalla9_3.lineWidth = 748;*/
  
  parrafo(this, txt["pantalla9_3"],"22px",0,-620);


	this.addChild(this.texto);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,752.3,373.4);

(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.setTransform(376.2,186.7,1,1,0,0,0,376.2,186.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).wait(100000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,752.3,373.4);

(lib.Symbol28 = function() {
	this.initialize();

	// Layer 1
	/*this.pantalla10_2 = new cjs.Text("aa", "22px Verdana");
	this.pantalla10_2.lineHeight = 34;
	this.pantalla10_2.lineWidth = 748;*/
  parrafo(this, txt["pantalla10_2"],"22px",0,-620);

	this.addChild(this.texto);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,752.3,373.4);

(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.setTransform(376.2,186.7,1,1,0,0,0,376.2,186.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).wait(10000));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,752.3,373.4);

(lib.Symbol30 = function() {
	this.initialize();

	// Layer 1
	/*this.pantalla10_3 = new cjs.Text("aa", "22px Verdana");
	this.pantalla10_3.lineHeight = 34;
	this.pantalla10_3.lineWidth = 748;*/
  parrafo(this, txt["pantalla10_3"],"22px",0,-620);

	this.addChild(this.texto);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,752.3,373.4);


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