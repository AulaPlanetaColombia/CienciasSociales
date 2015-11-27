(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 1, 0, 0);
        titulo1(this, txt['titulo']);

        this.entrar = new lib.BtnFalse();
        this.entrar.setTransform(476, 364.9, 0.8, 1.071, 0, 0, 0, 309.9, 163.4);
        new cjs.ButtonHelper(this.entrar, 0, 1, 2, false, new lib.BtnFalse(), 3);

        this.instance = new lib.Symbol2();
        this.instance.setTransform(473.2, 365.1, 1, 1, 0, 0, 0, 245.6, 164.9);

        this.entrar.on("click", function () {
            putStage(new lib.frame2());
        });

        this.siguiente.on("click", function () {
            putStage(new lib.frame2());
        });
        this.addChild(this.logo, this.entrar, this.titulo, this.siguiente, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 1, 0, 0);

        this.mc_pantalla2 = new lib.mc_pantalla2();
        this.mc_pantalla2.setTransform(477.5, 189.8, 1, 1, 0, 0, 0, 395.5, 145.7);

        this.siguiente.on("click", function () {
            putStage(new lib.frame3());
        });

        this.home.on("click", function () {
            putStage(new lib.frame1());
        });
        this.addChild(this.logo, this.home, this.titulo, this.siguiente, this.instance, this.mc_pantalla2);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['pantalla2_1']);

        this.imagen = new lib.Bitmap45();
        var ancho = imagen(this, 1, 0.68, 0.68);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['txt_p2'], 0, ancho);

        var html = createDiv(txt['txt_p2_2'], "Verdana", "20px",  '780px', '100px', "20px", "185px", "left");
        this.textopie = new cjs.DOMElement(html);
        this.textopie.setTransform(90, -142);

        this.anterior.on("click", function (evt) {
            evt.target.removeAllEventListeners();
            this.removeAllEventListeners();
            putStage(new lib.frame2());
        });
        this.siguiente.on("click", function (evt) {
            evt.target.removeAllEventListeners();
            this.removeAllEventListeners();
            putStage(new lib.frame4());
        });
        this.home.on("click", function (evt) {

            evt.target.removeAllEventListeners();
            this.removeAllEventListeners();
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo,this.textopie);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
     (lib.frame4 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['pantalla3_1']);

        this.imagen = new lib.Bitmap45();
        var ancho = imagen(this, 1, 0.68, 0.68);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['txt_p3'], 0, ancho);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
     (lib.frame5 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['pantalla4_1']);

        this.imagen = new lib.Bitmap43();
        var ancho = imagen(this, 1, 0.68, 0.68);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['txt_p4'], 0, ancho);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame6());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

(lib.frame6 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['pantalla5_1']);

        this.imagen = new lib.Bitmap47();
        var ancho = imagen(this, 1, 0.75, 0.75);
                console.log(ancho);
        
        texto(this, txt['txt_p6'], 0, ancho);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame8());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
    /*(lib.frame7 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 1, 0, 0);
        titulo2(this, txt['pantalla5_1']);

        this.imagen = new lib.Bitmap47();
        var ancho = imagen(this, 1, 0.75, 0.75);
                console.log(ancho);

        texto(this, txt['txt_p6'], 0, ancho);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame6());
        });
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame8());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior, this.siguiente, this.titulo, this.texto, this.logo);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);*/
    
    (lib.frame8 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 1, 0, 0, 0);
        titulo2(this, txt['pantalla7_1']);

        this.imagen = new lib.Bitmap48();
        var ancho = imagen(this, 1, 0.68, 0.68);
        //this.instance_1.setTransform(180.5, 299.5, 1, 1, 0, 0, 0, 151.5, 187.5);
        texto(this, txt['txt_p7'], 0, ancho);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame6());
        });
     
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });


        this.addChild(this.imagen, this.home, this.anterior,  this.titulo, this.texto, this.logo);
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
    function texto(escena, texto, side, ancho) {
        width = 760 - ancho;
        var html = createDiv(texto, "Verdana", "20px", width + 'px', '400px', "20px", "185px", "left");
        escena.texto = new cjs.DOMElement(html);
        if (side == 0)
            escena.texto.setTransform(90, -502);
        else
            escena.texto.setTransform(130 + ancho, -502);
    }

    function imagen(escena, side, scX, scY) {
        var theBounds = escena.imagen.getBounds();

        if (side == 0)
            escena.imagen.setTransform(90, 115, scX, scY);
        else {
            escena.imagen.setTransform(860 - theBounds.width * scX, 115, scX, scY);
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



    (lib.mc_pantalla2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 3
        this.b14 = new cjs.Text(txt['pantalla1_14'], "20px Verdana", "#0000CC");
        this.b14.textAlign = "center";
        this.b14.lineHeight = 20;
        this.b14.lineWidth = 259;
        this.b14.alpha = 0;
        this.b14.setTransform(144.3, 199);

        this.b13 = new cjs.Text(txt['pantalla1_13'], "20px Verdana", "#336600");
        this.b13.textAlign = "center";
        this.b13.lineHeight = 20;
        this.b13.lineWidth = 259;
        this.b13.alpha = 0;
        this.b13.setTransform(610.6, 408.8);

        this.b12 = new cjs.Text(txt['pantalla1_12'], "20px Verdana", "#3366CC");
        this.b12.textAlign = "center";
        this.b12.lineHeight = 20;
        this.b12.lineWidth = 259;
        this.b12.alpha = 0;
        this.b12.setTransform(189.8, 324.9);

        this.b11 = new cjs.Text(txt['pantalla1_11'], "20px Verdana", "#FF3300");
        this.b11.textAlign = "center";
        this.b11.lineHeight = 20;
        this.b11.lineWidth = 259;
        this.b11.alpha = 0;
        this.b11.setTransform(399.6, 450.8);

        this.b10 = new cjs.Text(txt['pantalla1_10'], "20px Verdana", "#FF00FF");
        this.b10.textAlign = "center";
        this.b10.lineHeight = 20;
        this.b10.lineWidth = 259;
        this.b10.alpha = 0;
        this.b10.setTransform(399.6, 366.8);

        this.b9 = new cjs.Text(txt['pantalla1_9'], "20px Verdana", "#336600");
        this.b9.textAlign = "center";
        this.b9.lineHeight = 20;
        this.b9.lineWidth = 259;
        this.b9.alpha = 0;
        this.b9.setTransform(264.1, 241);

        this.b8 = new cjs.Text(txt['pantalla1_8'], "20px Verdana", "#990000");
        this.b8.textAlign = "center";
        this.b8.lineHeight = 20;
        this.b8.lineWidth = 259;
        this.b8.alpha = 0;
        this.b8.setTransform(399.6, 115.1);

        this.b7 = new cjs.Text(txt['pantalla1_7'], "20px Verdana", "#FF3300");
        this.b7.textAlign = "center";
        this.b7.lineHeight = 20;
        this.b7.lineWidth = 259;
        this.b7.alpha = 0;
        this.b7.setTransform(539.7, 157.1);

        this.b6 = new cjs.Text(txt['pantalla1_6'], "20px Verdana", "#663399");
        this.b6.textAlign = "center";
        this.b6.lineHeight = 20;
        this.b6.lineWidth = 259;
        this.b6.alpha = 0;
        this.b6.setTransform(180.1, 408.8);

        this.b5 = new cjs.Text(txt['pantalla1_5'], "20px Verdana", "#666600");
        this.b5.textAlign = "center";
        this.b5.lineHeight = 20;
        this.b5.lineWidth = 259;
        this.b5.alpha = 0;
        this.b5.setTransform(545, 241);

        this.b4 = new cjs.Text(txt['pantalla1_4'], "20px Verdana", "#333333");
        this.b4.textAlign = "center";
        this.b4.lineHeight = 20;
        this.b4.lineWidth = 259;
        this.b4.alpha = 0;
        this.b4.setTransform(399.6, 282.9);

        this.b3 = new cjs.Text(txt['pantalla1_3'], "20px Verdana", "#993300");
        this.b3.textAlign = "center";
        this.b3.lineHeight = 20;
        this.b3.lineWidth = 259;
        this.b3.alpha = 0;
        this.b3.setTransform(643.9, 199);

        this.b2 = new cjs.Text(txt['pantalla1_2'], "20px Verdana", "#336600");
        this.b2.textAlign = "center";
        this.b2.lineHeight = 20;
        this.b2.lineWidth = 259;
        this.b2.alpha = 0;
        this.b2.setTransform(260.8, 157.1);

        this.b1 = new cjs.Text(txt['pantalla1_1'], "20px Verdana", "#6666FF");
        this.b1.textAlign = "center";
        this.b1.lineHeight = 20;
        this.b1.lineWidth = 259;
        this.b1.alpha = 0;
        this.b1.setTransform(623.8, 324.9);
        this.timeline.addTween(cjs.Tween.get(this.b1).to({alpha: 1}, 10).wait(9999).to({state: [{t: this.b2, p: {alpha: 1}}]}, 10)).wait(99999);
        this.timeline.addTween(cjs.Tween.get(this.b2).wait(10).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b3).wait(20).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b4).wait(30).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b5).wait(40).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b6).wait(50).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b7).wait(60).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b8).wait(70).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b9).wait(80).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b10).wait(90).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b11).wait(100).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b12).wait(110).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b13).wait(120).to({alpha: 1}, 8));
        this.timeline.addTween(cjs.Tween.get(this.b14).wait(130).to({alpha: 1}, 8));

        // this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.b1,p:{alpha:1}}]},10).to({state: [{t: this.b2}, {t: this.b3}, {t: this.b4}, {t: this.b5}, {t: this.b6}, {t: this.b7}, {t: this.b8}, {t: this.b9}, {t: this.b10}, {t: this.b11}, {t: this.b12}, {t: this.b13}, {t: this.b14}]},5).wait(13800));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(14.8, 115.1, 762.7, 364);

    (lib.Symbol2 = function () {
        this.initialize();

        // Layer 3 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AywMcIAA43MAlhAAAIAAY3g");
        mask.setTransform(125.8, 79.7);

        // Layer 2
        this.instance = new lib.Bitmap41();
        this.instance.setTransform(-44.9, -2.2, 0.606, 0.605);

        this.instance.mask = mask;

        // Layer 1
        this.instance_1 = new lib.Bitmap44();
        this.instance_1.setTransform(251, 164.3, 0.481, 0.48);

        this.instance_2 = new lib.Bitmap43();
        this.instance_2.setTransform(5.7, 164.3, 0.48, 0.48);

        this.shape = new cjs.Shape();
        this.shape.graphics.bf(img.Bitmap42).s().p("AyvMdIAA45MAlfAAAIAAY5g");
        this.shape.setTransform(371, 79.7);

        this.addChild(this.shape, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-44.9, -2.2, 536.2, 332.1);

    (lib.BtnFalse = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("EgwaAZiMAAAgzDMBg1AAAMAAAAzDg");
        this.shape.setTransform(310, 163.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("EgwaAZiMAAAgzDMBg1AAAMAAAAzDg");
        this.shape_1.setTransform(310, 163.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape}]}, 1).to({state: []}, 1).to({state: [{t: this.shape_1}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);

    (lib.Bitmap41 = function () {
        this.initialize(img.Bitmap41);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 500, 270);


    (lib.Bitmap42copy = function () {
        this.initialize(img.Bitmap42copy);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 900, 625);


    (lib.Bitmap42 = function () {
        this.initialize(img.Bitmap42);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 500, 332);


    (lib.Bitmap43 = function () {
        this.initialize(img.Bitmap43);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 500, 345);


    (lib.Bitmap44 = function () {
        this.initialize(img.Bitmap44);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 500, 344);


    (lib.Bitmap45 = function () {
        this.initialize(img.Bitmap45);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 500, 373);


    (lib.Bitmap46 = function () {
        this.initialize(img.Bitmap46);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 575, 486);


    (lib.Bitmap47 = function () {
        this.initialize(img.Bitmap47);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 500, 349);


    (lib.Bitmap48 = function () {
        this.initialize(img.Bitmap48);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 500, 612);


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