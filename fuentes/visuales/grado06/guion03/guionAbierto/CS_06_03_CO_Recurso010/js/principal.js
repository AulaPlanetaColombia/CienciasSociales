(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
     this.instance = new lib.tit1();
	this.instance.setTransform(475.3,303.4);

        this.addChild(this.logo, this.titulo, this.siguiente, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,1, 0, 0, 0, 0);
     this.instance = new lib.t2();
	this.instance.setTransform(475.3,303.4);

       
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame2_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,0, 0, 0, 0, 1);
       this.instance = new lib.p2();
	this.instance.setTransform(475.3,303.4);

        this.instance.frizo.btn1.on("click", function (evt) {
        putStage(new lib.frame2_1b(1));
    });
        this.instance.frizo.btn2.on("click", function (evt) {
        putStage(new lib.frame2_1b(2));
    });
        this.instance.frizo.btn3.on("click", function (evt) {
        putStage(new lib.frame2_1b(3));
    });
        this.instance.frizo.btn4.on("click", function (evt) {
        putStage(new lib.frame2_1b(4));
    });
        this.instance.frizo.btn5.on("click", function (evt) {
        putStage(new lib.frame2_1b(5));
    });
        this.instance.frizo.btn6.on("click", function (evt) {
        putStage(new lib.frame2_1b(6));
    });
       
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.home, this.instance,this.cerrar);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame2_1b = function (res) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,0, 0, 0, 0, 1);
       this.frizo = new lib.frizo(res);
	this.frizo.setTransform(475.2,175.7,1,1,0,0,0,434.8,25.8);

        if (res==2){
            	this.ventana = new lib.ventana_2("single",0);
	this.ventana.setTransform(476,406);
        }
        else{
            	this.ventana = new lib.ventana_2("single",1);
	this.ventana.setTransform(476,406);
        }
       this.ventana.cierre.on("click", function (evt) {
            putStage(new lib.frame2_1());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.home, this.frizo,this.cerrar,this.ventana);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

     (lib.frame3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,1, 0, 0, 0, 0);
     this.instance = new lib.t3();
	this.instance.setTransform(475.3,303.4);

       
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame3_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,0, 0, 0, 0, 1);
       this.instance = new lib.p2();
	this.instance.setTransform(475.3,303.4);

        this.instance.frizo.btn1.on("click", function (evt) {
        putStage(new lib.frame3_1b(1));
    });
        this.instance.frizo.btn2.on("click", function (evt) {
        putStage(new lib.frame3_1b(2));
    });
        this.instance.frizo.btn3.on("click", function (evt) {
        putStage(new lib.frame3_1b(3));
    });
        this.instance.frizo.btn4.on("click", function (evt) {
        putStage(new lib.frame3_1b(4));
    });
        this.instance.frizo.btn5.on("click", function (evt) {
        putStage(new lib.frame3_1b(5));
    });
        this.instance.frizo.btn6.on("click", function (evt) {
        putStage(new lib.frame3_1b(6));
    });
       
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo, this.home, this.instance,this.cerrar);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame3_1b = function (res) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,0, 0, 0, 0, 1);
       this.frizo = new lib.frizo(res);
	this.frizo.setTransform(475.2,175.7,1,1,0,0,0,434.8,25.8);

        if (res==3){
            	this.ventana = new lib.ventana_3("single",0);
	this.ventana.setTransform(476,406);
        }
        else{
            	this.ventana = new lib.ventana_3("single",1);
	this.ventana.setTransform(476,406);
        }
       this.ventana.cierre.on("click", function (evt) {
            putStage(new lib.frame3_1());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo, this.home, this.frizo,this.cerrar,this.ventana);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
   p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    (lib.frame4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,1, 0, 0, 0, 0);
     this.instance = new lib.t4();
	this.instance.setTransform(475.3,303.4);

       
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame4_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,0, 0, 0, 0, 1);
       this.instance = new lib.p2();
	this.instance.setTransform(475.3,303.4);

        this.instance.frizo.btn1.on("click", function (evt) {
        putStage(new lib.frame4_1b(1));
    });
        this.instance.frizo.btn2.on("click", function (evt) {
        putStage(new lib.frame4_1b(2));
    });
        this.instance.frizo.btn3.on("click", function (evt) {
        putStage(new lib.frame4_1b(3));
    });
        this.instance.frizo.btn4.on("click", function (evt) {
        putStage(new lib.frame4_1b(4));
    });
        this.instance.frizo.btn5.on("click", function (evt) {
        putStage(new lib.frame4_1b(5));
    });
        this.instance.frizo.btn6.on("click", function (evt) {
        putStage(new lib.frame4_1b(6));
    });
       
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.addChild(this.logo, this.titulo, this.home, this.instance,this.cerrar);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame4_1b = function (res) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,0, 0, 0, 0, 1);
       this.frizo = new lib.frizo(res);
	this.frizo.setTransform(475.2,175.7,1,1,0,0,0,434.8,25.8);

        if (res==4){
            	this.ventana = new lib.ventana_4("single",0);
	this.ventana.setTransform(476,406);
        }
        else{
            	this.ventana = new lib.ventana_4("single",1);
	this.ventana.setTransform(476,406);
        }
       this.ventana.cierre.on("click", function (evt) {
            putStage(new lib.frame4_1());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.addChild(this.logo, this.titulo, this.home, this.frizo,this.cerrar,this.ventana);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
   p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    (lib.frame5 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,1, 0, 0, 0, 0);
     this.instance = new lib.t5();
	this.instance.setTransform(475.3,303.4);

       
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame5_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,0, 0, 0, 0, 1);
       this.instance = new lib.p2();
	this.instance.setTransform(475.3,303.4);

        this.instance.frizo.btn1.on("click", function (evt) {
        putStage(new lib.frame5_1b(1));
    });
        this.instance.frizo.btn2.on("click", function (evt) {
        putStage(new lib.frame5_1b(2));
    });
        this.instance.frizo.btn3.on("click", function (evt) {
        putStage(new lib.frame5_1b(3));
    });
        this.instance.frizo.btn4.on("click", function (evt) {
        putStage(new lib.frame5_1b(4));
    });
        this.instance.frizo.btn5.on("click", function (evt) {
        putStage(new lib.frame5_1b(5));
    });
        this.instance.frizo.btn6.on("click", function (evt) {
        putStage(new lib.frame5_1b(6));
    });
       
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame5());
        });

        this.addChild(this.logo, this.titulo, this.home, this.instance,this.cerrar);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame5_1b = function (res) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this,0, 0, 0, 0, 1);
       this.frizo = new lib.frizo(res);
	this.frizo.setTransform(475.2,175.7,1,1,0,0,0,434.8,25.8);

        if (res==5){
            	this.ventana = new lib.ventana_5("single",0);
	this.ventana.setTransform(476,406);
        }
        else{
            	this.ventana = new lib.ventana_5("single",1);
	this.ventana.setTransform(476,406);
        }
       this.ventana.cierre.on("click", function (evt) {
            putStage(new lib.frame5_1());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame5());
        });

        this.addChild(this.logo, this.titulo, this.home, this.frizo,this.cerrar,this.ventana);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
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
   (lib._0001GY01 = function() {
	this.initialize(img._0001GY01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,263);
   (lib.puntos = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,27);


(lib._0001GY01_btn = function() {
	this.initialize(img._0001GY01_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib._0009IC01 = function() {
	this.initialize(img._0009IC01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,380);


(lib._0009IC01_btn = function() {
	this.initialize(img._0009IC01_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib._000J1001 = function() {
	this.initialize(img._000J1001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,373);


(lib._000J1001_btn = function() {
	this.initialize(img._000J1001_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib._000JKK01 = function() {
	this.initialize(img._000JKK01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,281);


(lib._000JKK01_btn = function() {
	this.initialize(img._000JKK01_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib._000KJ201 = function() {
	this.initialize(img._000KJ201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,287);


(lib._000KJ201_btn = function() {
	this.initialize(img._000KJ201_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib._000T9001 = function() {
	this.initialize(img._000T9001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,311);


(lib._000T9001_btn = function() {
	this.initialize(img._000T9001_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.entrada_egipto = function() {
	this.initialize(img.entrada_egipto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,311);


(lib.entrada_egipto_btn = function() {
	this.initialize(img.entrada_egipto_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.titulo = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text(txt['titulo'], "31px Georgia");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.setTransform(81.2,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-173.7,0,513.9,39.3);


(lib.proteccion_practica = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhKNAvgMAAAhe/MCUbAAAMAAABe/g");
	this.shape.setTransform(475,304);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.proteccion_actividad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAnIgUIMhOPAAAQh8AAhYBYQhYBYAAB8IAAe5QAAB8BYBYQBYBYB8AAMBOPAAAQB8AABYhYQBYhYAAh8IAA+5QAAh8hYhYQhYhYh8AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgnHAUJQh8AAhYhYQhYhYAAh8IAA+5QAAh8BYhYQBYhYB8AAMBOPAAAQB8AABYBYQBYBYAAB8IAAe5QAAB8hYBYQhYBYh8AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_loader_barra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FFFFFF"],[0.894,1],21.4,17.1,-2.9,-25.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape.setTransform(9,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#FFFFFF"],[0.885,0.996],21.5,16.9,-3.1,-24.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_1.setTransform(9,27.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#FFFFFF"],[0.876,0.992],21.5,16.7,-3.3,-24.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_2.setTransform(9,27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#FFFFFF"],[0.867,0.988],21.6,16.4,-3.4,-24.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_3.setTransform(9,27.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#FFFFFF"],[0.858,0.984],21.7,16.2,-3.6,-24.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_4.setTransform(9,27.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#FFFFFF"],[0.849,0.98],21.8,15.9,-3.7,-24.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_5.setTransform(9,27.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#FFFFFF"],[0.84,0.976],21.9,15.7,-3.9,-24).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_6.setTransform(9,27.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#FFFFFF"],[0.832,0.971],21.9,15.4,-4.1,-23.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_7.setTransform(9,27.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#FFFFFF"],[0.823,0.967],22.1,15.2,-4.2,-23.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_8.setTransform(9,27.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","#FFFFFF"],[0.814,0.963],22.1,14.9,-4.4,-23.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_9.setTransform(9,27.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#000000","#FFFFFF"],[0.805,0.959],22.2,14.7,-4.5,-23.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_10.setTransform(9,27.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#000000","#FFFFFF"],[0.796,0.955],22.3,14.5,-4.7,-23.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_11.setTransform(9,27.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#000000","#FFFFFF"],[0.787,0.951],22.4,14.2,-4.8,-22.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_12.setTransform(9,27.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#000000","#FFFFFF"],[0.778,0.947],22.5,13.9,-5,-22.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_13.setTransform(9,27.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#000000","#FFFFFF"],[0.769,0.943],22.5,13.7,-5.2,-22.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_14.setTransform(9,27.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#000000","#FFFFFF"],[0.76,0.939],22.6,13.5,-5.4,-22.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_15.setTransform(9,27.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#000000","#FFFFFF"],[0.751,0.935],22.7,13.2,-5.5,-22.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_16.setTransform(9,27.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#000000","#FFFFFF"],[0.742,0.931],22.8,12.9,-5.7,-22.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_17.setTransform(9,27.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#000000","#FFFFFF"],[0.733,0.927],22.9,12.7,-5.8,-21.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_18.setTransform(9,27.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#000000","#FFFFFF"],[0.724,0.923],23,12.5,-6,-21.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_19.setTransform(9,27.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#000000","#FFFFFF"],[0.715,0.918],23.1,12.2,-6.1,-21.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_20.setTransform(9,27.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#000000","#FFFFFF"],[0.706,0.914],23.2,11.9,-6.3,-21.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_21.setTransform(9,27.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#000000","#FFFFFF"],[0.697,0.91],23.2,11.7,-6.5,-21.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_22.setTransform(9,27.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#000000","#FFFFFF"],[0.688,0.906],23.3,11.5,-6.6,-21).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_23.setTransform(9,27.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#000000","#FFFFFF"],[0.68,0.902],23.4,11.2,-6.8,-20.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_24.setTransform(9,27.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#000000","#FFFFFF"],[0.671,0.898],23.5,10.9,-6.9,-20.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_25.setTransform(9,27.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#000000","#FFFFFF"],[0.662,0.894],23.6,10.7,-7.1,-20.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_26.setTransform(9,27.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#000000","#FFFFFF"],[0.653,0.89],23.6,10.5,-7.3,-20.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_27.setTransform(9,27.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#000000","#FFFFFF"],[0.644,0.886],23.8,10.2,-7.4,-20.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_28.setTransform(9,27.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#000000","#FFFFFF"],[0.635,0.882],23.8,10,-7.6,-19.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_29.setTransform(9,27.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#000000","#FFFFFF"],[0.626,0.878],23.9,9.7,-7.7,-19.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_30.setTransform(9,27.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#000000","#FFFFFF"],[0.617,0.874],24,9.5,-7.9,-19.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_31.setTransform(9,27.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#000000","#FFFFFF"],[0.608,0.869],24.1,9.2,-8,-19.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_32.setTransform(9,27.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#000000","#FFFFFF"],[0.599,0.865],24.2,9,-8.2,-19.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_33.setTransform(9,27.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#000000","#FFFFFF"],[0.59,0.861],24.2,8.7,-8.4,-19.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_34.setTransform(9,27.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#000000","#FFFFFF"],[0.581,0.857],24.3,8.5,-8.5,-18.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_35.setTransform(9,27.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#000000","#FFFFFF"],[0.572,0.853],24.4,8.3,-8.7,-18.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_36.setTransform(9,27.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#000000","#FFFFFF"],[0.563,0.849],24.5,8,-8.8,-18.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_37.setTransform(9,27.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#000000","#FFFFFF"],[0.554,0.845],24.6,7.7,-9,-18.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_38.setTransform(9,27.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#000000","#FFFFFF"],[0.545,0.841],24.7,7.5,-9.2,-18.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_39.setTransform(9,27.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#000000","#FFFFFF"],[0.536,0.837],24.8,7.3,-9.3,-18).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_40.setTransform(9,27.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#000000","#FFFFFF"],[0.528,0.833],24.8,7,-9.5,-17.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_41.setTransform(9,27.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#000000","#FFFFFF"],[0.519,0.829],24.9,6.7,-9.7,-17.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_42.setTransform(9,27.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#000000","#FFFFFF"],[0.51,0.825],25,6.5,-9.8,-17.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_43.setTransform(9,27.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#000000","#FFFFFF"],[0.501,0.821],25.1,6.3,-9.9,-17.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_44.setTransform(9,27.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#000000","#FFFFFF"],[0.492,0.816],25.2,6,-10.1,-17.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_45.setTransform(9,27.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#000000","#FFFFFF"],[0.483,0.812],25.3,5.8,-10.3,-17).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_46.setTransform(9,27.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#000000","#FFFFFF"],[0.474,0.808],25.3,5.5,-10.5,-16.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_47.setTransform(9,27.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#000000","#FFFFFF"],[0.465,0.804],25.4,5.3,-10.6,-16.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_48.setTransform(9,27.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#000000","#FFFFFF"],[0.456,0.8],25.5,5,-10.8,-16.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_49.setTransform(9,27.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#000000","#FFFFFF"],[0.447,0.796],25.6,4.8,-10.9,-16.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_50.setTransform(9,27.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#000000","#FFFFFF"],[0.438,0.792],25.7,4.5,-11.1,-16.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_51.setTransform(9,27.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#000000","#FFFFFF"],[0.429,0.788],25.8,4.3,-11.2,-15.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_52.setTransform(9,27.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#000000","#FFFFFF"],[0.42,0.784],25.9,4,-11.4,-15.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_53.setTransform(9,27.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#000000","#FFFFFF"],[0.411,0.78],25.9,3.8,-11.6,-15.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_54.setTransform(9,27.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#000000","#FFFFFF"],[0.402,0.776],26,3.5,-11.7,-15.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_55.setTransform(9,27.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#000000","#FFFFFF"],[0.393,0.772],26.1,3.3,-11.9,-15.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_56.setTransform(9,27.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#000000","#FFFFFF"],[0.384,0.768],26.2,3,-12,-15.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_57.setTransform(9,27.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#000000","#FFFFFF"],[0.376,0.763],26.3,2.8,-12.2,-14.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_58.setTransform(9,27.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#000000","#FFFFFF"],[0.367,0.759],26.3,2.6,-12.4,-14.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_59.setTransform(9,27.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#000000","#FFFFFF"],[0.358,0.755],26.5,2.3,-12.5,-14.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_60.setTransform(9,27.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#000000","#FFFFFF"],[0.349,0.751],26.5,2.1,-12.7,-14.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_61.setTransform(9,27.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#000000","#FFFFFF"],[0.34,0.747],26.6,1.8,-12.8,-14.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_62.setTransform(9,27.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#000000","#FFFFFF"],[0.331,0.743],26.7,1.6,-13,-14).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_63.setTransform(9,27.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#000000","#FFFFFF"],[0.322,0.739],26.8,1.3,-13.1,-13.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_64.setTransform(9,27.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#000000","#FFFFFF"],[0.313,0.735],26.9,1.1,-13.3,-13.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_65.setTransform(9,27.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#000000","#FFFFFF"],[0.304,0.731],26.9,0.8,-13.5,-13.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_66.setTransform(9,27.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#000000","#FFFFFF"],[0.295,0.727],27,0.6,-13.7,-13.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_67.setTransform(9,27.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#000000","#FFFFFF"],[0.286,0.723],27.1,0.3,-13.8,-13.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_68.setTransform(9,27.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#000000","#FFFFFF"],[0.277,0.719],27.2,0.1,-14,-12.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_69.setTransform(9,27.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#000000","#FFFFFF"],[0.268,0.715],27.3,-0.1,-14.1,-12.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_70.setTransform(9,27.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#000000","#FFFFFF"],[0.259,0.71],27.4,-0.3,-14.3,-12.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_71.setTransform(9,27.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#000000","#FFFFFF"],[0.25,0.706],27.5,-0.5,-14.4,-12.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_72.setTransform(9,27.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#000000","#FFFFFF"],[0.241,0.702],27.6,-0.8,-14.6,-12.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_73.setTransform(9,27.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#000000","#FFFFFF"],[0.232,0.698],27.6,-1.1,-14.8,-12.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_74.setTransform(9,27.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#000000","#FFFFFF"],[0.224,0.694],27.7,-1.3,-14.9,-11.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_75.setTransform(9,27.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#000000","#FFFFFF"],[0.215,0.69],27.8,-1.5,-15.1,-11.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_76.setTransform(9,27.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#000000","#FFFFFF"],[0.206,0.686],27.9,-1.8,-15.2,-11.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_77.setTransform(9,27.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#000000","#FFFFFF"],[0.197,0.682],28,-2.1,-15.4,-11.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_78.setTransform(9,27.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#000000","#FFFFFF"],[0.188,0.678],28,-2.3,-15.6,-11.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_79.setTransform(9,27.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#000000","#FFFFFF"],[0.179,0.674],28.2,-2.5,-15.7,-11).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_80.setTransform(9,27.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#000000","#FFFFFF"],[0.17,0.67],28.2,-2.8,-15.9,-10.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_81.setTransform(9,27.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#000000","#FFFFFF"],[0.161,0.666],28.3,-3.1,-16,-10.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_82.setTransform(9,27.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#000000","#FFFFFF"],[0.152,0.661],28.4,-3.3,-16.2,-10.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_83.setTransform(9,27.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#000000","#FFFFFF"],[0.143,0.657],28.5,-3.5,-16.3,-10.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_84.setTransform(9,27.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#000000","#FFFFFF"],[0.134,0.653],28.6,-3.8,-16.5,-10.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_85.setTransform(9,27.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#000000","#FFFFFF"],[0.125,0.649],28.6,-4,-16.7,-9.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_86.setTransform(9,27.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#000000","#FFFFFF"],[0.116,0.645],28.7,-4.3,-16.8,-9.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_87.setTransform(9,27.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#000000","#FFFFFF"],[0.107,0.641],28.8,-4.5,-17,-9.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_88.setTransform(9,27.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#000000","#FFFFFF"],[0.098,0.637],28.9,-4.8,-17.1,-9.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_89.setTransform(9,27.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#000000","#FFFFFF"],[0.089,0.633],29,-5,-17.3,-9.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_90.setTransform(9,27.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#000000","#FFFFFF"],[0.08,0.629],29.1,-5.3,-17.5,-9.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_91.setTransform(9,27.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#000000","#FFFFFF"],[0.072,0.625],29.2,-5.5,-17.6,-8.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_92.setTransform(9,27.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#000000","#FFFFFF"],[0.063,0.621],29.2,-5.7,-17.8,-8.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_93.setTransform(9,27.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#000000","#FFFFFF"],[0.054,0.617],29.3,-6,-18,-8.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_94.setTransform(9,27.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#000000","#FFFFFF"],[0.045,0.613],29.4,-6.3,-18.1,-8.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_95.setTransform(9,27.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#000000","#FFFFFF"],[0.036,0.608],29.5,-6.5,-18.2,-8.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_96.setTransform(9,27.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#000000","#FFFFFF"],[0.027,0.604],29.6,-6.7,-18.4,-8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_97.setTransform(9,27.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#000000","#FFFFFF"],[0.018,0.6],29.7,-7,-18.6,-7.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_98.setTransform(9,27.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#000000","#FFFFFF"],[0.009,0.596],29.7,-7.3,-18.8,-7.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_99.setTransform(9,27.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#000000","#FFFFFF"],[0,0.592],29.8,-7.5,-18.9,-7.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_100.setTransform(9,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).wait(101));

	// Capa 2
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#000000","#FFFFFF"],[0.894,1],-21.2,-17,3.1,25.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_101.setTransform(18.2,18.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#000000","#FFFFFF"],[0.885,0.996],-21.3,-16.8,3.3,25).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_102.setTransform(18.2,18.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#000000","#FFFFFF"],[0.876,0.992],-21.4,-16.5,3.4,24.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_103.setTransform(18.2,18.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#000000","#FFFFFF"],[0.867,0.988],-21.4,-16.2,3.6,24.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_104.setTransform(18.2,18.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#000000","#FFFFFF"],[0.858,0.984],-21.6,-16,3.7,24.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_105.setTransform(18.2,18.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#000000","#FFFFFF"],[0.849,0.98],-21.6,-15.8,3.9,24.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_106.setTransform(18.2,18.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#000000","#FFFFFF"],[0.84,0.976],-21.7,-15.5,4.1,24.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_107.setTransform(18.2,18.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#000000","#FFFFFF"],[0.832,0.971],-21.8,-15.2,4.2,24).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_108.setTransform(18.2,18.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#000000","#FFFFFF"],[0.823,0.967],-21.9,-15,4.4,23.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_109.setTransform(18.2,18.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#000000","#FFFFFF"],[0.814,0.963],-22,-14.8,4.5,23.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_110.setTransform(18.2,18.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#000000","#FFFFFF"],[0.805,0.959],-22,-14.5,4.7,23.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_111.setTransform(18.2,18.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#000000","#FFFFFF"],[0.796,0.955],-22.1,-14.3,4.9,23.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_112.setTransform(18.2,18.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#000000","#FFFFFF"],[0.787,0.951],-22.2,-14,5,23.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_113.setTransform(18.2,18.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#000000","#FFFFFF"],[0.778,0.947],-22.3,-13.8,5.2,22.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_114.setTransform(18.2,18.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#000000","#FFFFFF"],[0.769,0.943],-22.4,-13.5,5.3,22.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_115.setTransform(18.2,18.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#000000","#FFFFFF"],[0.76,0.939],-22.5,-13.3,5.5,22.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_116.setTransform(18.2,18.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#000000","#FFFFFF"],[0.751,0.935],-22.6,-13,5.6,22.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_117.setTransform(18.2,18.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#000000","#FFFFFF"],[0.742,0.931],-22.7,-12.8,5.8,22.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_118.setTransform(18.2,18.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#000000","#FFFFFF"],[0.733,0.927],-22.7,-12.6,6,22).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_119.setTransform(18.2,18.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#000000","#FFFFFF"],[0.724,0.923],-22.8,-12.3,6.2,21.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_120.setTransform(18.2,18.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#000000","#FFFFFF"],[0.715,0.918],-22.9,-12,6.3,21.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_121.setTransform(18.2,18.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#000000","#FFFFFF"],[0.706,0.914],-23,-11.8,6.5,21.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_122.setTransform(18.2,18.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#000000","#FFFFFF"],[0.697,0.91],-23.1,-11.6,6.6,21.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_123.setTransform(18.2,18.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#000000","#FFFFFF"],[0.688,0.906],-23.1,-11.3,6.8,21.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_124.setTransform(18.2,18.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#000000","#FFFFFF"],[0.68,0.902],-23.3,-11,6.9,21).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_125.setTransform(18.2,18.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#000000","#FFFFFF"],[0.671,0.898],-23.3,-10.8,7.1,20.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_126.setTransform(18.2,18.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#000000","#FFFFFF"],[0.662,0.894],-23.4,-10.6,7.3,20.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_127.setTransform(18.2,18.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#000000","#FFFFFF"],[0.653,0.89],-23.5,-10.3,7.4,20.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_128.setTransform(18.2,18.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#000000","#FFFFFF"],[0.644,0.886],-23.6,-10,7.6,20.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_129.setTransform(18.2,18.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#000000","#FFFFFF"],[0.635,0.882],-23.7,-9.8,7.7,20.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_130.setTransform(18.2,18.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#000000","#FFFFFF"],[0.626,0.878],-23.7,-9.6,7.9,19.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_131.setTransform(18.2,18.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#000000","#FFFFFF"],[0.617,0.874],-23.8,-9.3,8.1,19.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_132.setTransform(18.2,18.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#000000","#FFFFFF"],[0.608,0.869],-23.9,-9.1,8.2,19.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_133.setTransform(18.2,18.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#000000","#FFFFFF"],[0.599,0.865],-24,-8.8,8.4,19.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_134.setTransform(18.2,18.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#000000","#FFFFFF"],[0.59,0.861],-24.1,-8.6,8.5,19.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_135.setTransform(18.2,18.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#000000","#FFFFFF"],[0.581,0.857],-24.1,-8.3,8.7,19.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_136.setTransform(18.2,18.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#000000","#FFFFFF"],[0.572,0.853],-24.3,-8.1,8.8,18.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_137.setTransform(18.2,18.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#000000","#FFFFFF"],[0.563,0.849],-24.3,-7.8,9,18.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_138.setTransform(18.2,18.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#000000","#FFFFFF"],[0.554,0.845],-24.4,-7.6,9.2,18.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_139.setTransform(18.2,18.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#000000","#FFFFFF"],[0.545,0.841],-24.5,-7.3,9.4,18.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_140.setTransform(18.2,18.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#000000","#FFFFFF"],[0.536,0.837],-24.6,-7.1,9.5,18.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_141.setTransform(18.2,18.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#000000","#FFFFFF"],[0.528,0.833],-24.7,-6.8,9.6,18).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_142.setTransform(18.2,18.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#000000","#FFFFFF"],[0.519,0.829],-24.8,-6.6,9.8,17.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_143.setTransform(18.2,18.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#000000","#FFFFFF"],[0.51,0.825],-24.8,-6.4,10,17.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_144.setTransform(18.2,18.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#000000","#FFFFFF"],[0.501,0.821],-24.9,-6.1,10.1,17.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_145.setTransform(18.2,18.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#000000","#FFFFFF"],[0.492,0.816],-25,-5.9,10.3,17.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_146.setTransform(18.2,18.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#000000","#FFFFFF"],[0.483,0.812],-25.1,-5.6,10.5,17.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_147.setTransform(18.2,18.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#000000","#FFFFFF"],[0.474,0.808],-25.2,-5.4,10.6,16.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_148.setTransform(18.2,18.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#000000","#FFFFFF"],[0.465,0.804],-25.3,-5.1,10.7,16.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_149.setTransform(18.2,18.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#000000","#FFFFFF"],[0.456,0.8],-25.4,-4.9,10.9,16.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_150.setTransform(18.2,18.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#000000","#FFFFFF"],[0.447,0.796],-25.4,-4.6,11.1,16.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_151.setTransform(18.2,18.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#000000","#FFFFFF"],[0.438,0.792],-25.5,-4.4,11.3,16.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_152.setTransform(18.2,18.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#000000","#FFFFFF"],[0.429,0.788],-25.6,-4.1,11.4,16.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_153.setTransform(18.2,18.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#000000","#FFFFFF"],[0.42,0.784],-25.7,-3.9,11.6,15.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_154.setTransform(18.2,18.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#000000","#FFFFFF"],[0.411,0.78],-25.8,-3.6,11.7,15.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_155.setTransform(18.2,18.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#000000","#FFFFFF"],[0.402,0.776],-25.8,-3.4,11.9,15.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_156.setTransform(18.2,18.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#000000","#FFFFFF"],[0.393,0.772],-26,-3.1,12,15.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_157.setTransform(18.2,18.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#000000","#FFFFFF"],[0.384,0.768],-26,-2.9,12.2,15.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_158.setTransform(18.2,18.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#000000","#FFFFFF"],[0.376,0.763],-26.1,-2.7,12.4,15).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_159.setTransform(18.2,18.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#000000","#FFFFFF"],[0.367,0.759],-26.2,-2.4,12.5,14.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_160.setTransform(18.2,18.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#000000","#FFFFFF"],[0.358,0.755],-26.3,-2.1,12.7,14.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_161.setTransform(18.2,18.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#000000","#FFFFFF"],[0.349,0.751],-26.4,-1.9,12.8,14.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_162.setTransform(18.2,18.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#000000","#FFFFFF"],[0.34,0.747],-26.4,-1.7,13,14.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_163.setTransform(18.2,18.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#000000","#FFFFFF"],[0.331,0.743],-26.5,-1.4,13.2,14.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_164.setTransform(18.2,18.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#000000","#FFFFFF"],[0.322,0.739],-26.6,-1.1,13.3,14).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_165.setTransform(18.2,18.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#000000","#FFFFFF"],[0.313,0.735],-26.7,-0.9,13.5,13.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_166.setTransform(18.2,18.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#000000","#FFFFFF"],[0.304,0.731],-26.8,-0.7,13.6,13.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_167.setTransform(18.2,18.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#000000","#FFFFFF"],[0.295,0.727],-26.9,-0.4,13.8,13.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_168.setTransform(18.2,18.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#000000","#FFFFFF"],[0.286,0.723],-27,-0.2,13.9,13.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_169.setTransform(18.2,18.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#000000","#FFFFFF"],[0.277,0.719],-27.1,0,14.1,13.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_170.setTransform(18.2,18.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#000000","#FFFFFF"],[0.268,0.715],-27.1,0.2,14.3,12.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_171.setTransform(18.2,18.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#000000","#FFFFFF"],[0.259,0.71],-27.2,0.5,14.5,12.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_172.setTransform(18.2,18.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#000000","#FFFFFF"],[0.25,0.706],-27.3,0.7,14.6,12.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_173.setTransform(18.2,18.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#000000","#FFFFFF"],[0.241,0.702],-27.4,1,14.8,12.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_174.setTransform(18.2,18.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#000000","#FFFFFF"],[0.232,0.698],-27.5,1.2,14.9,12.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_175.setTransform(18.2,18.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#000000","#FFFFFF"],[0.224,0.694],-27.5,1.5,15.1,12.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_176.setTransform(18.2,18.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#000000","#FFFFFF"],[0.215,0.69],-27.7,1.7,15.2,11.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_177.setTransform(18.2,18.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#000000","#FFFFFF"],[0.206,0.686],-27.7,2,15.4,11.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_178.setTransform(18.2,18.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#000000","#FFFFFF"],[0.197,0.682],-27.8,2.2,15.6,11.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_179.setTransform(18.2,18.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#000000","#FFFFFF"],[0.188,0.678],-27.9,2.4,15.7,11.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_180.setTransform(18.2,18.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#000000","#FFFFFF"],[0.179,0.674],-28,2.7,15.9,11.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_181.setTransform(18.2,18.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#000000","#FFFFFF"],[0.17,0.67],-28.1,3,16,11).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_182.setTransform(18.2,18.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#000000","#FFFFFF"],[0.161,0.666],-28.1,3.2,16.2,10.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_183.setTransform(18.2,18.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#000000","#FFFFFF"],[0.152,0.661],-28.2,3.4,16.4,10.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_184.setTransform(18.2,18.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#000000","#FFFFFF"],[0.143,0.657],-28.3,3.7,16.5,10.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_185.setTransform(18.2,18.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#000000","#FFFFFF"],[0.134,0.653],-28.4,4,16.7,10.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_186.setTransform(18.2,18.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#000000","#FFFFFF"],[0.125,0.649],-28.5,4.2,16.8,10.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_187.setTransform(18.2,18.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#000000","#FFFFFF"],[0.116,0.645],-28.5,4.4,17,9.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_188.setTransform(18.2,18.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#000000","#FFFFFF"],[0.107,0.641],-28.7,4.7,17.1,9.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_189.setTransform(18.2,18.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#000000","#FFFFFF"],[0.098,0.637],-28.7,5,17.3,9.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_190.setTransform(18.2,18.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#000000","#FFFFFF"],[0.089,0.633],-28.8,5.2,17.5,9.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_191.setTransform(18.2,18.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#000000","#FFFFFF"],[0.08,0.629],-28.9,5.4,17.7,9.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_192.setTransform(18.2,18.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#000000","#FFFFFF"],[0.072,0.625],-29,5.7,17.8,9.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_193.setTransform(18.2,18.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#000000","#FFFFFF"],[0.063,0.621],-29.1,5.9,17.9,8.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_194.setTransform(18.2,18.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#000000","#FFFFFF"],[0.054,0.617],-29.2,6.2,18.1,8.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_195.setTransform(18.2,18.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#000000","#FFFFFF"],[0.045,0.613],-29.2,6.4,18.3,8.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_196.setTransform(18.2,18.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#000000","#FFFFFF"],[0.036,0.608],-29.3,6.7,18.4,8.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_197.setTransform(18.2,18.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#000000","#FFFFFF"],[0.027,0.604],-29.4,6.9,18.6,8.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_198.setTransform(18.2,18.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#000000","#FFFFFF"],[0.018,0.6],-29.5,7.2,18.8,8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_199.setTransform(18.2,18.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#000000","#FFFFFF"],[0.009,0.596],-29.6,7.4,18.9,7.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_200.setTransform(18.2,18.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#000000","#FFFFFF"],[0,0.592],-29.7,7.7,19,7.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_201.setTransform(18.2,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101}]}).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[]},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,0,45.7,45.6);


(lib.fnd_loader = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhKNAu4MAAAhdvMCUbAAAMAAABdvg");
	this.shape.setTransform(475,304.1,1,1.014);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608.1);


(lib.instruccion = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text(txt['btnselec'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 229;
	this.text.setTransform(-1.9,-11.6+incremento);

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AyWCuIAAlbMAktAAAIAAFbg");

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.4,-17.4,235,35);


(lib.incorrecto = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F09122","#DF081F"],[0,1],22.6,52.5,-22,-52.8).s().p("AEVG3IlKlxIjbFxQg1gdgvglQhehKAhglIECkIIjbjkQARhAAZg6QAzh1AmAdIDYFRIEWkqIBGAlQBBArgbAfIkXEXIF/EWQgbA4gjAxQg0BLghAAQgKAAgJgIg");
	this.shape.setTransform(0.8,-0.2,1,1,0,0,0,0.8,-0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.3,-44.6,88.7,89.5);


(lib.imagen_5 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000J1001();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,380,373);


(lib.imagen_4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000JKK01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,380,281);


(lib.imagen_3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.entrada_egipto();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,380,311);


(lib.imagen_2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._0009IC01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,316,380);


(lib.fadein = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhJ5AvgQgTAAgBgdMAAAheFQABgcATgBMCTzAAAQATABABAcMAAABeFQgBAdgTAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);


(lib.f_btn6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.text = new cjs.Text(txt['f_btn6'], "14px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(-1.9,-10.4+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ALVkrIAAJXI2pAAIAApXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ALVEsI2pAAIAApXIWpAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ArUkrIWpAAIAAJXI2pAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ArUErIAApVIWpAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-29.9,145,60);


(lib.f_btn5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.text = new cjs.Text(txt['f_btn5'], "14px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(-1.9,-10.4+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ALVkrIAAJXI2pAAIAApXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ALVEsI2pAAIAApXIWpAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ArUkrIWpAAIAAJXI2pAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ArUErIAApVIWpAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-29.9,145,60);


(lib.f_btn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.text = new cjs.Text(txt['f_btn4'], "14px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(-1.9,-10.4+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ALVEsI2pAAIAApXIWpAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ALVkrIAAJXI2pAAIAApXg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ArUkrIWpAAIAAJXI2pAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ArUErIAApVIWpAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-29.9,145,60);


(lib.f_btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.text = new cjs.Text(txt['f_btn3'], "14px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(-1.9,-10.4+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ALVEsI2pAAIAApXIWpAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ALVkrIAAJXI2pAAIAApXg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ArUkrIWpAAIAAJXI2pAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ArUErIAApVIWpAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-29.9,145,60);


(lib.f_btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.text = new cjs.Text(txt['f_btn2'], "14px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(-1.9,-10.4+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ALVEsI2pAAIAApXIWpAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ALVkrIAAJXI2pAAIAApXg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ArUkrIWpAAIAAJXI2pAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ArUErIAApVIWpAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-29.9,145,60);


(lib.f_btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.text = new cjs.Text(txt['f_btn1'], "14px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(-0.9,-20+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ALVEsI2pAAIAApXIWpAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ALVkrIAAJXI2pAAIAApXg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("ArUErIAApVIWpAAIAAJVg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ArUkrIWpAAIAAJXI2pAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ArUErIAApVIWpAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-29.9,145,60);


(lib.correcto = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0B6635","#95C030"],[0,1],34.5,77.7,-16.7,-68.8).s().p("ApNImQhWg8hWgzIhFgnIg/kOIAKAAQCVAUD6CeQB9BPBfBLQAhogGXnoQCAiZCWiAQBLhBAyghIE7E3QpsF1kSKEQhVDKgpDNQgVBmgDA+QiljQkSjAg");
	this.shape.setTransform(97.9,103.7,0.5,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(53.3,56.2,89.4,95.1);


(lib.btn5_gr = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000J1001_btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.btn4_gr = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000JKK01_btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.btn3_gr = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.entrada_egipto_btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.btn2_gr = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._0009IC01_btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.btn_cuando = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 2
	this.text = new cjs.Text(txt['btnpregunta'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.setTransform(6.6,-15.8+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APjiVI/FAAQhkAAAABkIAABiQAABlBkAAIfFAAQBkAAAAhlIAAhiQAAhkhkAAg");
	this.shape.setTransform(8.6,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AviCWQhjAAAAhlIAAhiQAAhjBjgBIfEAAQBlABgBBjIAABiQABBlhlAAg");
	this.shape_1.setTransform(8.6,-4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AviCWQhjAAAAhlIAAhiQAAhjBjgBIfEAAQBlABgBBjIAABiQABBlhlAAg");
	this.shape_2.setTransform(8.6,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AviCWQhjAAAAhlIAAhiQAAhjBjgBIfEAAQBlABgBBjIAABiQABBlhlAAg");
	this.shape_3.setTransform(8.6,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-19.1,219,30);


(lib.btn_inicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTBhIAAhxIgmABIB5hRIB6BRIgkgBIAABwIg1AAIAAhmIhAAAIAABng");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E120D").s().p("AhsCVQgRAAgMgMQgMgLAAgRIAAjaQAAgQAMgMQAMgMARAAIDZAAQARAAALAMQANAMAAAQIAADaQAAARgNALQgLAMgRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1}},{t:this.shape,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.1,scaleY:1.1}},{t:this.shape,p:{scaleX:1.1,scaleY:1.1}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1}},{t:this.shape,p:{scaleX:1,scaleY:1}}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,30,30);


(lib.btn_cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.text = new cjs.Text("x", "bold 22px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 27;
	this.text.setTransform(-6,-16.6,1.247,1.197);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhcidQg6AAAAA8IAADDQAAA8A6AAIC6AAQA5AAAAg8IAAjDQAAg8g5AAg");
	this.shape.setTransform(0,5.2,1.247,1.197);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhcCeQg5AAgBg8IAAjDQABg8A5AAIC5AAQA5AAABA8IAADDQgBA8g5AAg");
	this.shape_1.setTransform(0,5.2,1.247,1.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.247,scaleY:1.197,y:5.2}},{t:this.shape,p:{scaleX:1.247,scaleY:1.197,y:5.2}},{t:this.text,p:{scaleX:1.247,scaleY:1.197,x:-6,y:-16.6}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.412,scaleY:1.356,y:5.3}},{t:this.shape,p:{scaleX:1.412,scaleY:1.356,y:5.3}},{t:this.text,p:{scaleX:1.412,scaleY:1.356,x:-8.5,y:-19.4}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.247,scaleY:1.197,y:5.2}},{t:this.shape,p:{scaleX:1.247,scaleY:1.197,y:5.2}},{t:this.text,p:{scaleX:1.247,scaleY:1.197,x:-6,y:-16.6}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.247,scaleY:1.197,y:5.2}},{t:this.shape,p:{scaleX:1.247,scaleY:1.197,y:5.2}},{t:this.text,p:{scaleX:1.247,scaleY:1.197,x:-6,y:-16.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-16.7,38.7,40.9);


(lib.ventana_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// cierre
	this.cierre = new lib.btn_cerrar();
	this.cierre.setTransform(236.3,-147.3,0.775,0.733);
	new cjs.ButtonHelper(this.cierre, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cierre}]}).wait(2));

	// icono
	this.instance = new lib.correcto();
	this.instance.setTransform(21.6,-134.7,0.503,0.503,0,0,0,98,103.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.706)",7,7,15);

	this.instance_1 = new lib.incorrecto();
	this.instance_1.setTransform(115.9,-61.3,0.6,0.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.706)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// titulo
	this.text = new cjs.Text(txt['popuprta_cor'], "bold 16px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 187;
	this.text.setTransform(-195.9,-148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:-195.9,y:-148,text:"Respuesta correcta. ",lineWidth:187}}]}).to({state:[{t:this.text,p:{x:-110.9,y:-75,text:"Respuesta incorrecta. ",lineWidth:202}}]},1).wait(1));

	// texto
	this.text_1 = new cjs.Text(txt['popuprta_cor1'], "16px Verdana");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 366;
	this.text_1.setTransform(-195.8,-77.4);
var html = createDiv(txt['popuprta_cor1'], "Verdana", "16px", '400px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(-195, -87-608);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1}]}).to({state:[]},1).wait(1));

	// fondo_blanco
	this.proteccion = new lib.proteccion_actividad();
	this.proteccion.setTransform(-9.9,-45.9);
	new cjs.ButtonHelper(this.proteccion, 0, 1, 2, false, new lib.proteccion_actividad(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.proteccion}]}).wait(2));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAqcgSwQhYhYh8AAMhOPAAAQh8AAhYBYQhYBYAAB8IAAe5QAAB8BYBYQBYBYB8AAMBOPAAAQB8AABYhYQBYhYAAh8IAA+5QAAh8hYhYg");
	this.shape.setTransform(-10.8,-44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgnHAUJQh8AAhYhYQhYhYAAh8IAA+5QAAh8BYhYQBYhYB8AAMBOPAAAQB8AABYBYQBYBYAAB8IAAe5QAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(-10.8,-44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.3,-174.9,561.9,259);


(lib.ventana_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// cierre
	this.cierre = new lib.btn_cerrar();
	this.cierre.setTransform(236.3,-147.3,0.775,0.733);
	new cjs.ButtonHelper(this.cierre, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cierre}]}).wait(2));

	// icono
	this.instance = new lib.correcto();
	this.instance.setTransform(21.6,-134.7,0.503,0.503,0,0,0,98,103.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.706)",7,7,15);

	this.instance_1 = new lib.incorrecto();
	this.instance_1.setTransform(115.9,-61.3,0.6,0.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.706)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// titulo
	this.text = new cjs.Text(txt['popuprta_cor'], "bold 16px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 187;
	this.text.setTransform(-195.9,-148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:-195.9,y:-148,text:"Respuesta correcta. ",lineWidth:187}}]}).to({state:[{t:this.text,p:{x:-110.9,y:-75,text:"Respuesta incorrecta. ",lineWidth:202}}]},1).wait(1));

	// texto
	this.text_1 = new cjs.Text(txt['popuprta_cor2'], "16px Verdana");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 396;
	this.text_1.setTransform(-195.8,-87.4);
var html = createDiv(txt['popuprta_cor2'], "Verdana", "16px", '400px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(-195, -87-608);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1}]}).to({state:[]},1).wait(1));

	// fondo_blanco
	this.proteccion = new lib.proteccion_actividad();
	this.proteccion.setTransform(-9.9,-45.9);
	new cjs.ButtonHelper(this.proteccion, 0, 1, 2, false, new lib.proteccion_actividad(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.proteccion}]}).wait(2));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAqcgSwQhYhYh8AAMhOPAAAQh8AAhYBYQhYBYAAB8IAAe5QAAB8BYBYQBYBYB8AAMBOPAAAQB8AABYhYQBYhYAAh8IAA+5QAAh8hYhYg");
	this.shape.setTransform(-10.8,-44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgnHAUJQh8AAhYhYQhYhYAAh8IAA+5QAAh8BYhYQBYhYB8AAMBOPAAAQB8AABYBYQBYBYAAB8IAAe5QAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(-10.8,-44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.3,-174.9,561.9,259);


(lib.ventana_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// cierre
	this.cierre = new lib.btn_cerrar();
	this.cierre.setTransform(236.3,-147.3,0.775,0.733);
	new cjs.ButtonHelper(this.cierre, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cierre}]}).wait(2));

	// icono
	this.instance = new lib.correcto();
	this.instance.setTransform(21.6,-134.7,0.503,0.503,0,0,0,98,103.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.706)",7,7,15);

	this.instance_1 = new lib.incorrecto();
	this.instance_1.setTransform(115.9,-61.3,0.6,0.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.706)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// titulo
	this.text = new cjs.Text(txt['popuprta_cor'], "bold 16px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 187;
	this.text.setTransform(-195.9,-148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:-195.9,y:-148,text:"Respuesta correcta. ",lineWidth:187}}]}).to({state:[{t:this.text,p:{x:-110.9,y:-75,text:"Respuesta incorrecta. ",lineWidth:202}}]},1).wait(1));

	// texto
	this.text_1 = new cjs.Text(txt['popuprta_cor3'], "16px Verdana");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 396;
	this.text_1.setTransform(-195.8,-87.4);
   var html = createDiv(txt['popuprta_cor3'], "Verdana", "16px", '400px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(-195, -87-608);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1}]}).to({state:[]},1).wait(1));

	// fondo_blanco
	this.proteccion = new lib.proteccion_actividad();
	this.proteccion.setTransform(-9.9,-45.9);
	new cjs.ButtonHelper(this.proteccion, 0, 1, 2, false, new lib.proteccion_actividad(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.proteccion}]}).wait(2));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAqcgSwQhYhYh8AAMhOPAAAQh8AAhYBYQhYBYAAB8IAAe5QAAB8BYBYQBYBYB8AAMBOPAAAQB8AABYhYQBYhYAAh8IAA+5QAAh8hYhYg");
	this.shape.setTransform(-10.8,-44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgnHAUJQh8AAhYhYQhYhYAAh8IAA+5QAAh8BYhYQBYhYB8AAMBOPAAAQB8AABYBYQBYBYAAB8IAAe5QAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(-10.8,-44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.3,-174.9,561.9,259);


(lib.ventana_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// cierre
	this.cierre = new lib.btn_cerrar();
	this.cierre.setTransform(236.3,-147.3,0.775,0.733);
	new cjs.ButtonHelper(this.cierre, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cierre}]}).wait(2));

	// icono
	this.instance = new lib.correcto();
	this.instance.setTransform(21.6,-134.7,0.503,0.503,0,0,0,98,103.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.706)",7,7,15);

	this.instance_1 = new lib.incorrecto();
	this.instance_1.setTransform(115.9,-61.3,0.6,0.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.706)",7,7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// titulo
	this.text = new cjs.Text(txt['popuprta_cor'], "bold 16px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 187;
	this.text.setTransform(-195.9,-148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:-195.9,y:-148,text:"Respuesta correcta. ",lineWidth:187}}]}).to({state:[{t:this.text,p:{x:-110.9,y:-75,text:"Respuesta incorrecta. ",lineWidth:202}}]},1).wait(1));

	// texto
	this.text_1 = new cjs.Text(txt['popuprta_cor4'], "16px Verdana");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 396;
	this.text_1.setTransform(-195.8,-51.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1}]}).to({state:[]},1).wait(1));

	// fondo_blanco
	this.proteccion = new lib.proteccion_actividad();
	this.proteccion.setTransform(-9.9,-45.9);
	new cjs.ButtonHelper(this.proteccion, 0, 1, 2, false, new lib.proteccion_actividad(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.proteccion}]}).wait(2));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAqcgSwQhYhYh8AAMhOPAAAQh8AAhYBYQhYBYAAB8IAAe5QAAB8BYBYQBYBYB8AAMBOPAAAQB8AABYhYQBYhYAAh8IAA+5QAAh8hYhYg");
	this.shape.setTransform(-10.8,-44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgnHAUJQh8AAhYhYQhYhYAAh8IAA+5QAAh8BYhYQBYhYB8AAMBOPAAAQB8AABYBYQBYBYAAB8IAAe5QAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(-10.8,-44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.3,-174.9,561.9,259);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// fadein
	this.instance = new lib.fadein("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(1));

	// btn
	this.instance_1 = new lib.btn_cuando();
	this.instance_1.setTransform(340.9,261.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_cuando(), 3);
this.instance_1.on("click", function (evt) {
        putStage(new lib.frame5_1());
    });
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(10));

	// img
	this.instance_2 = new lib.imagen_5("synched",0);
	this.instance_2.setTransform(-268.4,49.4,1,1,0,0,0,166.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(10));

	// subtitulo
	this.text = new cjs.Text(txt['tit_roma'], "23px Verdana");
	this.text.lineHeight = 25;
	this.text.setTransform(-434.9,-203.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(10));

	// texto
	this.text_1 = new cjs.Text("", "20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.setTransform(-28,-70.3);

	this.text_2 = new cjs.Text(txt['text_roma'], "20px Verdana");
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 456;
	this.text_2.setTransform(-13.9,-70.2);
var html = createDiv(txt['text_roma'], "Verdana", "20px", '470px', '40px', "20px", "185px", "left");
    this.text_2 = new cjs.DOMElement(html);
    this.text_2.setTransform(-14-30, -70-648);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// fadein
	this.instance = new lib.fadein("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(1));

	// btn
	this.instance_1 = new lib.btn_cuando();
	this.instance_1.setTransform(340.9,261.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_cuando(), 3);
this.instance_1.on("click", function (evt) {
        putStage(new lib.frame4_1());
    });
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(10));

	// img
	this.instance_2 = new lib.imagen_4("synched",0);
	this.instance_2.setTransform(-268.4,96.4,1,1,0,0,0,166.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(10));

	// subtitulo
	this.text = new cjs.Text(txt['tit_grecia'], "23px Verdana");
	this.text.lineHeight = 25;
	this.text.setTransform(-434.9,-203.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(10));

	// texto
	this.text_1 = new cjs.Text("", "20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.setTransform(-24,-94.9);

	this.text_2 = new cjs.Text(txt['text_grecia'], "20px Verdana");
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 418;
	this.text_2.setTransform(-9.9,-95.6);
var html = createDiv(txt['text_grecia'], "Verdana", "20px", '470px', '40px', "20px", "185px", "left");
    this.text_2 = new cjs.DOMElement(html);
    this.text_2.setTransform(-10-30, -95-648);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// fadein
	this.instance = new lib.fadein("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(1));

	// btn
	this.instance_1 = new lib.btn_cuando();
	this.instance_1.setTransform(340.9,261.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_cuando(), 3);
this.instance_1.on("click", function (evt) {
        putStage(new lib.frame3_1());
    });

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(10));

	// img
	this.instance_2 = new lib.imagen_3("synched",0);
	this.instance_2.setTransform(-268.4,76.4,1,1,0,0,0,166.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(10));

	// subtitulo
	this.text = new cjs.Text(txt['tit_egipto'], "23px Verdana");
	this.text.lineHeight = 25;
	this.text.setTransform(-434.9,-203.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(10));

	// texto
	this.text_1 = new cjs.Text("", "20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.setTransform(-11,-60.7);

	this.text_2 = new cjs.Text(txt['text_egipto'],"20px Verdana");
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 424;
	this.text_2.setTransform(3,-61.1);
 var html = createDiv(txt['text_egipto'], "Verdana", "20px", '470px', '40px', "20px", "185px", "left");
    this.text_2 = new cjs.DOMElement(html);
    this.text_2.setTransform(-3-30, -61-648);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// fadein
	this.instance = new lib.fadein("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(1));

	// btn
	this.instance_1 = new lib.btn_cuando();
	this.instance_1.setTransform(340.9,261.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_cuando(), 3);
 this.instance_1.on("click", function (evt) {
        putStage(new lib.frame2_1());
    });
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(10));

	// img
	this.instance_2 = new lib.imagen_2("synched",0);
	this.instance_2.setTransform(-268.4,46.4,1,1,0,0,0,166.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(10));

	// subtitulo
	this.text = new cjs.Text(txt['tit_meso'], "23px Verdana");
	this.text.lineHeight = 25;
	this.text.setTransform(-434.9,-203.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(10));

	

	this.text_2 = new cjs.Text(txt['text_meso'], "20px Verdana");
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 443;
	this.text_2.setTransform(-35.9,-82.9);
 var html = createDiv(txt['text_meso'], "Verdana", "20px", '470px', '40px', "20px", "185px", "left");
    this.text_2 = new cjs.DOMElement(html);
    this.text_2.setTransform(-36-30, -82-648);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);


(lib.mc_loader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.mc_barras = new lib.mc_loader_barra();
	this.mc_barras.setTransform(22.9,30.1,1,1,0,0,0,13.6,22.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_barras).wait(1).to({rotation:4.6},0).wait(1).to({rotation:9.1,y:30},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:22.8},0).wait(1).to({rotation:27.3,y:30.1},0).wait(1).to({rotation:31.9},0).wait(1).to({rotation:36.5},0).wait(1).to({rotation:41,y:30},0).wait(1).to({rotation:45.6},0).wait(1).to({rotation:50.1},0).wait(1).to({rotation:54.7,y:30.1},0).wait(1).to({rotation:59.2},0).wait(1).to({rotation:63.8,y:30},0).wait(1).to({rotation:68.4},0).wait(1).to({rotation:72.9,y:30.1},0).wait(1).to({rotation:77.5},0).wait(1).to({rotation:82,y:30},0).wait(1).to({rotation:86.6,y:30.1},0).wait(1).to({rotation:91.1},0).wait(1).to({rotation:95.7},0).wait(1).to({rotation:100.3},0).wait(1).to({rotation:104.8,y:30},0).wait(1).to({rotation:109.4,y:30.1},0).wait(1).to({rotation:113.9},0).wait(1).to({rotation:118.5},0).wait(1).to({rotation:123,y:30},0).wait(1).to({rotation:127.6,y:30.1},0).wait(1).to({rotation:132.2},0).wait(1).to({rotation:136.7},0).wait(1).to({rotation:141.3,y:30},0).wait(1).to({rotation:145.8,y:30.1},0).wait(1).to({rotation:150.4,y:30},0).wait(1).to({rotation:154.9},0).wait(1).to({rotation:159.5},0).wait(1).to({rotation:164.1,y:30.1},0).wait(1).to({rotation:168.6},0).wait(1).to({rotation:173.2,y:30},0).wait(1).to({rotation:177.7},0).wait(1).to({rotation:182.4},0).wait(1).to({rotation:186.9,y:30.1},0).wait(1).to({rotation:191.5,y:30},0).wait(1).to({rotation:196,y:30.1},0).wait(1).to({rotation:200.6},0).wait(1).to({rotation:205.2},0).wait(1).to({rotation:209.7},0).wait(1).to({rotation:214.3},0).wait(1).to({rotation:218.8,y:30},0).wait(1).to({rotation:223.4},0).wait(1).to({rotation:227.9},0).wait(1).to({rotation:232.5},0).wait(1).to({rotation:237.1},0).wait(1).to({rotation:241.6,y:30.1},0).wait(1).to({rotation:246.2,y:30},0).wait(1).to({rotation:250.7},0).wait(1).to({rotation:255.3},0).wait(1).to({rotation:259.8},0).wait(1).to({rotation:264.4},0).wait(1).to({rotation:269,y:30.1},0).wait(1).to({rotation:273.5,y:30},0).wait(1).to({rotation:278.1,x:23,y:30.1},0).wait(1).to({rotation:282.6,x:22.9,y:30},0).wait(1).to({rotation:287.2,x:23},0).wait(1).to({rotation:291.7,x:22.9},0).wait(1).to({rotation:296.3},0).wait(1).to({rotation:300.9,x:23},0).wait(1).to({rotation:305.4,x:22.9,y:30.1},0).wait(1).to({rotation:310,y:30},0).wait(1).to({rotation:314.5,y:30.1},0).wait(1).to({rotation:319.1},0).wait(1).to({rotation:323.6,x:23,y:30},0).wait(1).to({rotation:328.2},0).wait(1).to({rotation:332.8,x:22.9},0).wait(1).to({rotation:337.3},0).wait(1).to({rotation:341.9},0).wait(1).to({rotation:346.4,y:30.1},0).wait(1).to({rotation:351,y:30},0).wait(1).to({rotation:355.5,y:30.1},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,7.3,45.7,45.6);


(lib.frizo = function(boton) {
    boton=boton||0;
	this.initialize();

	// Capa 2
	this.text = new cjs.Text(txt['f_btn7'], "14px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 200;
	this.text.setTransform(723,-41+incremento);

	this.text_1 = new cjs.Text(txt['f_btn8'], "14px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 200;
	this.text_1.setTransform(143,-41+incremento);

	this.shape = new lib.puntos();
	this.shape.setTransform(143.5,-26);
this.shapeb = new lib.puntos();
	this.shapeb.setTransform(724,-26);

	// Capa 1
        if (boton==6)
	this.btn6 = new lib.f_btn6("single",2);
    else
	this.btn6 = new lib.f_btn6();
	this.btn6.setTransform(797.1,30);
        new cjs.ButtonHelper(this.btn6, 0, 1, 2, false, new lib.f_btn6(), 3);
        if (boton==5)
	this.btn5 = new lib.f_btn5("single",2);
    else
	this.btn5 = new lib.f_btn5();
	this.btn5.setTransform(652.1,30.1);
        new cjs.ButtonHelper(this.btn5, 0, 1, 2, false, new lib.f_btn5(), 3);

        if (boton==4)
	this.btn4 = new lib.f_btn4("single",2);
    else
	this.btn4 = new lib.f_btn4();
	this.btn4.setTransform(507.5,30.1);
        new cjs.ButtonHelper(this.btn4, 0, 1, 2, false, new lib.f_btn4(), 3);

        if (boton==3)
	this.btn3 = new lib.f_btn3("single",2);
    else
	this.btn3 = new lib.f_btn3();
	this.btn3.setTransform(362.5,30);
        new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.f_btn3(), 3);

        if (boton==2)
	this.btn2 = new lib.f_btn2("single",2);
    else
	this.btn2 = new lib.f_btn2();
	this.btn2.setTransform(217.5,30.1);
        new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.f_btn2(), 3);
        if (boton==1)
	this.btn1 = new lib.f_btn1("single",2);
    else
	this.btn1 = new lib.f_btn1();
        
	this.btn1.setTransform(72.5,30);
        new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.f_btn1(), 3);

	this.addChild(this.btn1,this.btn2,this.btn3,this.btn4,this.btn5,this.btn6,this.shape,this.shapeb,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-41,869.6,101.2);


(lib.btn5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.btn5_gr("synched",0);
	this.instance.setTransform(105,80,1,1,0,0,0,105,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.btn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.btn4_gr("synched",0);
	this.instance.setTransform(105,80,1,1,0,0,0,105,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.btn3_gr("synched",0);
	this.instance.setTransform(105,80,1,1,0,0,0,105,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.btn2_gr("synched",0);
	this.instance.setTransform(105,80,1,1,0,0,0,105,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,160);


(lib.tit1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// fadein
	this.instance = new lib.fadein("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(1));

	// txt
	this.instance_1 = new lib.instruccion("synched",0);
	this.instance_1.setTransform(0,260.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(10));

	// btn5
	this.instance_2 = new lib.btn5();
	this.instance_2.setTransform(220,126.3,1,1,0,0,0,105,80);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.btn5(), 3);
  this.instance_2.on("click", function (evt) {
        putStage(new lib.frame5());
    });

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(10));

	// btn4
	this.instance_3 = new lib.btn4();
	this.instance_3.setTransform(-219.4,126.3,1,1,0,0,0,105,80);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.btn4(), 3);
  this.instance_3.on("click", function (evt) {
        putStage(new lib.frame4());
    });

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(10));

	// btn3
	this.instance_4 = new lib.btn3();
	this.instance_4.setTransform(220,-94,1,1,0,0,0,105,80);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.btn3(), 3);
  this.instance_4.on("click", function (evt) {
        putStage(new lib.frame3());
    });

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(10));

	// btn2
	this.instance_5 = new lib.btn2();
	this.instance_5.setTransform(-219.9,-94,1,1,0,0,0,105,80);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.btn2(), 3);
  this.instance_5.on("click", function (evt) {
        putStage(new lib.frame2());
    });
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(10));

	// titulo
	this.instance_6 = new lib.titulo("synched",0);
	this.instance_6.setTransform(0.1,-244.3,1,1,0,0,0,83.2,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// ventana
	this.ventana = new lib.ventana_5();
	this.ventana.setTransform(1,102);
	this.ventana._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ventana).wait(9).to({_off:false},0).wait(1));

	// fadein
	this.instance = new lib.fadein("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(1));

	// frizo
	this.frizo = new lib.frizo();
	this.frizo.setTransform(0.2,-148.2,1,1,0,0,0,434.8,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frizo}]}).wait(10));

	// cierre
	this.cierre = new lib.btn_cerrar();
	this.cierre.setTransform(421.3,-252.3,0.775,0.733);
	new cjs.ButtonHelper(this.cierre, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cierre}]}).wait(10));

	// fondo
	this.instance_1 = new lib.proteccion_practica();
	this.instance_1.setTransform(0,0,1,1,0,0,0,475,304);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// ventana
	this.ventana = new lib.ventana_4();
	this.ventana.setTransform(1,102);
	this.ventana._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ventana).wait(9).to({_off:false},0).wait(1));

	// fadein
	this.instance = new lib.fadein("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(1));

	// frizo
	this.frizo = new lib.frizo();
	this.frizo.setTransform(0.2,-148.2,1,1,0,0,0,434.8,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frizo}]}).wait(10));

	// cierre
	this.cierre = new lib.btn_cerrar();
	this.cierre.setTransform(421.3,-252.3,0.775,0.733);
	new cjs.ButtonHelper(this.cierre, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cierre}]}).wait(10));

	// fondo
	this.instance_1 = new lib.proteccion_practica();
	this.instance_1.setTransform(0,0,1,1,0,0,0,475,304);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// ventana
	this.ventana = new lib.ventana_3();
	this.ventana.setTransform(1,102);
	this.ventana._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ventana).wait(9).to({_off:false},0).wait(1));

	// fadein
	this.instance = new lib.fadein("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(1));

	// frizo
	this.frizo = new lib.frizo();
	this.frizo.setTransform(0.2,-148.2,1,1,0,0,0,434.8,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frizo}]}).wait(10));

	// cierre
	this.cierre = new lib.btn_cerrar();
	this.cierre.setTransform(421.3,-252.3,0.775,0.733);
	new cjs.ButtonHelper(this.cierre, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cierre}]}).wait(10));

	// fondo
	this.instance_1 = new lib.proteccion_practica();
	this.instance_1.setTransform(0,0,1,1,0,0,0,475,304);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	
	// frizo
	this.frizo = new lib.frizo();
	this.frizo.setTransform(0.2,-128.2,1,1,0,0,0,434.8,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frizo}]}).wait(10));

	

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-303.9,950,608);

   

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