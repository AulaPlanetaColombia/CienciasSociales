(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
      this.instance = new lib.image25019();
	this.instance.setTransform(504,97.4);

	this.instance_1 = new lib.boton1("Cantar de Mío Cid");
	this.instance_1.setTransform(231.4,480);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.boton1(), 3);

	this.instance_2 = new lib.boton1("El castillo");
	this.instance_2.setTransform(231.4,429);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.boton1(), 3);

	this.instance_3 = new lib.boton1("Caballeros");
	this.instance_3.setTransform(231.4,380);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.boton1(), 3);

	//this.text = new cjs.Text("guerreros y trovadores", "48px Georgia");//
	//this.text.textAlign = "center";//
	//this.text.lineHeight = 48;//
	//this.text.setTransform(283.5,176);//

	this.text_1 = new cjs.Text("La nobleza", "74px Georgia");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 74;
	this.text_1.setTransform(231.1,92);

	this.instance_4 = new lib.boton1("Sociedad en guerra");
	this.instance_4.setTransform(231.4,329.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.boton1(), 3);



        this.instance_4.on("click", function (evt) {
            putStage(new lib.frame2());
        });
 this.instance_3.on("click", function (evt) {
            putStage(new lib.frame3());
        });
         this.instance_2.on("click", function (evt) {
            putStage(new lib.frame4());
        });
         this.instance_1.on("click", function (evt) {
            putStage(new lib.frame5());
        });

        this.addChild(this.logo, this.titulo, this.siguiente, this.imagen,this.instance_4,this.text_1,this.text,this.instance_3,this.instance_2,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 2, 0, 0, 0, 0,2);
         this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").dr(0,0,950,608);
	this.shape.setTransform(0,0);
this.video = document.createElement('video');
this.video.src = 'videos/video1_.mp4';
//this.video.setAttribute("controls", "true");

if (isbq){
    
    this.audioplay.visible=true;
    this.audiopause.visible=false;
     this.video.style.position = "absolute";
     this.video.style.width = "750px";
     this.video.style.height = "450px";
     this.video.style.top = "30px";
     this.video.style.left = "80px";
   // this.video.setAttribute("controls", "true");
    document.body.appendChild(this.video);
}
else{

 //document.body.appendChild(this.video);
this.videoBitmap = new cjs.Bitmap(this.video);
this.video.autoplay = true;

this.videoBitmap.setTransform(100,0,1.7,1.7);
this.video.play();
//reproductor = cjs.Sound.play("sound0");
    }
 this.audioplay.on("click", function (evt) {
//            if (window.reproductor === undefined)
//                reproductor = cjs.Sound.play("misonido");
//            else
//                reproductor.resume();
            this.visible = false;
            this.parent.audiopause.visible = true;
            
                        this.parent.video.play();

        });

        this.audiopause.on("click", function (evt) {
         //   reproductor.pause();
            this.visible = false;
            this.parent.audioplay.visible = true;
            this.parent.video.pause();
        });

        this.home.on("click", function (evt) {
//              window.reproductor.stop();
//        window.reproductor=null;
this.parent.video.pause();
            putStage(new lib.frame1());
        });

        this.addChild(this.shape,this.logo, this.titulo, this.home, this.siguiente,this.audioplay,this.audiopause,this.lItem,this.videoBitmap);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 2, 0, 0, 0,0, 2);
       this.intro = new lib.intro();
         this.audioplay.visible=true;
    this.audiopause.visible=false;
  
  //     reproductor = cjs.Sound.play("sound3");
 this.audioplay.on("click", function (evt) {
            if (window.reproductor === undefined || window.reproductor === null)
                reproductor = cjs.Sound.play("sound3");
            else
                reproductor.paused=false;
            this.visible = false;
            this.parent.audiopause.visible = true;
                        

        });

        this.audiopause.on("click", function (evt) {
            reproductor.paused=true;
            this.visible = false;
            this.parent.audioplay.visible = true;
            
        });
        this.home.on("click", function (evt) {
           if (window.reproductor !== undefined && window.reproductor !== null){
        window.reproductor.stop();
        window.reproductor=null;
    }
            putStage(new lib.frame1());
        });

        this.addChild(this.intro,this.logo, this.titulo, this.home, this.anterior, this.siguiente,this.audioplay,this.audiopause);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

   (lib.frame4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 2, 0, 0, 0, 0,2);
        this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").dr(0,0,950,608);
	this.shape.setTransform(0,0);
        
this.video = document.createElement('video');
this.video.src = 'videos/video2_.mp4';
if (isbq){
    
    this.audioplay.visible=true;
    this.audiopause.visible=false;
     this.video.style.position = "absolute";
     this.video.style.width = "750px";
     this.video.style.height = "450px";
     this.video.style.top = "30px";
     this.video.style.left = "80px";
   // this.video.setAttribute("controls", "true");
    document.body.appendChild(this.video);
}
else{

 //document.body.appendChild(this.video);
this.videoBitmap = new cjs.Bitmap(this.video);
this.video.autoplay = true;

this.videoBitmap.setTransform(100,0,1.7,1.7);
this.video.play();
//reproductor = cjs.Sound.play("sound1");
    }
 this.audioplay.on("click", function (evt) {
//            if (window.reproductor === undefined)
//                reproductor = cjs.Sound.play("misonido");
//            else
//                reproductor.resume();
            this.visible = false;
            this.parent.audiopause.visible = true;
                        this.parent.video.play();

        });

        this.audiopause.on("click", function (evt) {
//            reproductor.pause();
            this.visible = false;
            this.parent.audioplay.visible = true;
            this.parent.video.pause();
        });

        this.home.on("click", function (evt) {
//              window.reproductor.stop();
//        window.reproductor=null;
this.parent.video.pause();
            putStage(new lib.frame1());
        });

        this.addChild( this.shape,this.logo, this.titulo, this.home, this.siguiente,this.audioplay,this.audiopause,this.lItem,this.videoBitmap);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

     (lib.frame5 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 2, 0, 0, 0,0, 2);
           this.instance_3 = new lib.image27090();
           this.instance_3.setTransform(0,0);
             this.text = new cjs.Text(txt['titulo'], "20px Verdana","#FFFFFF");
        this.text.textAlign = "center";
        this.text.lineHeight = 28;
        this.text.lineWidth = 849;
        this.text.setTransform(475, 470);
    this.audioplay.visible=true;
    this.audiopause.visible=false;
       
 this.audioplay.on("click", function (evt) {
            if (window.reproductor === undefined || window.reproductor === null)
                reproductor = cjs.Sound.play("sound2");
            else
                reproductor.paused=false;
            this.visible = false;
            this.parent.audiopause.visible = true;
                        

        });

        this.audiopause.on("click", function (evt) {
            reproductor.paused=true;
            this.visible = false;
            this.parent.audioplay.visible = true;
            
        });
        this.home.on("click", function (evt) {
       if (window.reproductor !== undefined && window.reproductor !== null){
        window.reproductor.stop();
        window.reproductor=null;
    }
            putStage(new lib.frame1());
        });

        this.addChild(this.instance_3,this.logo, this.titulo, this.home, this.anterior, this.siguiente,this.audioplay,this.audiopause, this.text);
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
        width = 730 - ancho;
        var html = createDiv(texto, "Verdana", "20px", width + 'px', '400px', "20px", "185px", "left");
        escena.texto = new cjs.DOMElement(html);
        if (side == 0)
            escena.texto.setTransform(90, -482);
        else
            escena.texto.setTransform(130 + ancho, -482);
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
            escena.audioplay.setTransform(125, 568, 1.6, 1.6);
            new cjs.ButtonHelper(escena.audioplay, 0, 1, 2, false, new lib.btn_AudioPlay_ok(), 3);
            escena.audiopause = new lib.btn_AudioPause_ok();
            escena.audiopause.setTransform(125, 568, 1.54, 1.54);
            new cjs.ButtonHelper(escena.audiopause, 0, 1, 2, false, new lib.btn_AudioPause_ok(), 3);
            escena.audioplay.visible = false;
        }
        if (audio == 2) {
            escena.audioplay = new lib.btn_siguienteneg();
            escena.audioplay.setTransform(125, 568, 1.6, 1.6);
            new cjs.ButtonHelper(escena.audioplay, 0, 1, 2, false, new lib.btn_AudioPlay_ok(), 3);
            escena.audiopause = new lib.btn_AudioPause_okneg();
            escena.audiopause.setTransform(125, 568, 1.54, 1.54);
            new cjs.ButtonHelper(escena.audiopause, 0, 1, 2, false, new lib.btn_AudioPause_ok(), 3);
            escena.audioplay.visible = false;
        }
    }
   (lib.btn_siguienteneg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1E120D").s().p("AhviXIDfCXIjfCYg");
        this.shape.setTransform(0, 0, 0.5, 0.5);

        this.shape_1 = new cjs.Shape();
      //  this.shape_1.graphics.f("#1E120D").s().p("AgvBWIAAirIBgAAIAACrg");
        this.shape_1.setTransform(-6.4, 0, 0.5, 0.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#FFFFFF").ss(1, 0, 1).p("ADeCiQAAAZgRASQgSARgZAAIlDAAQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZg");
        this.shape_2.setTransform(0, 0, 0.5, 0.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AihDeQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZIAAFDQAAAZgRASQgSARgZAAg");
        this.shape_3.setTransform(0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3, p: {scaleX: 0.5, scaleY: 0.5}}, {t: this.shape_2, p: {scaleX: 0.5, scaleY: 0.5}}, {t: this.shape_1, p: {scaleX: 0.5, scaleY: 0.5, x: -6.4}}, {t: this.shape, p: {scaleX: 0.5, scaleY: 0.5, x: 0}}]}).to({state: [{t: this.shape_3, p: {scaleX: 0.6, scaleY: 0.6}}, {t: this.shape_2, p: {scaleX: 0.6, scaleY: 0.6}}, {t: this.shape_1, p: {scaleX: 0.6, scaleY: 0.6, x: -7.1}}, {t: this.shape, p: {scaleX: 0.6, scaleY: 0.6, x: 0}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.5, scaleY: 0.5}}, {t: this.shape_2, p: {scaleX: 0.5, scaleY: 0.5}}, {t: this.shape_1, p: {scaleX: 0.5, scaleY: 0.5, x: -6.4}}, {t: this.shape, p: {scaleX: 0.5, scaleY: 0.5, x: 0}}]}, 1).to({state: [{t: this.shape_3, p: {scaleX: 0.5, scaleY: 0.5}}, {t: this.shape_2, p: {scaleX: 0.5, scaleY: 0.5}}, {t: this.shape_1, p: {scaleX: 0.5, scaleY: 0.5, x: -6.4}}, {t: this.shape, p: {scaleX: 0.5, scaleY: 0.5, x: 0}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.9, -14.9, 30, 30);

  
  //Simbolillos
  (lib.intro = function (mode, startPosition, loop) {

        this.initialize(mode, startPosition, false, {});
        this.instance = new lib.image27090();
        

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({alpha: 0}, 10).wait(800).to({alpha: 1}, 10));

        this.instance_2 = new lib.image27468();
        
        this.instance_2.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({alpha: 1}, 10).wait(100).to({alpha: 0}, 10).wait(700));


     
        this.instance_3 = new lib.image27509();
        
        this.instance_3.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200).to({alpha: 1}, 10).wait(100).to({alpha: 0}, 10).wait(600));
        
        this.instance_4 = new lib.image27550();
        this.instance_4.alpha = 0;
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(300).to({alpha: 1}, 10).wait(100).to({alpha: 0}, 10).wait(500));
        
        this.instance_5 = new lib.image27591();
        this.instance_5.alpha = 0;
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(400).to({alpha: 1}, 10).wait(100).to({alpha: 0}, 10).wait(400));
       
       this.instance_6 = new lib.image27632();
        this.instance_6.alpha = 0;
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(500).to({alpha: 1}, 10).wait(100).to({alpha: 0}, 10).wait(300));
         this.instance_7 = new lib.image27673();
        this.instance_7.alpha = 0;
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(600).to({alpha: 1}, 10).wait(100).to({alpha: 0}, 10).wait(200));
   this.instance_8 = new lib.image27714();
        this.instance_8.alpha = 0;
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(700).to({alpha: 1}, 10).wait(100).to({alpha: 0}, 10).wait(100));
   
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 950, 608);


(lib.image25019 = function() {
	this.initialize(img.image25019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,446,608);


(lib.image27090 = function() {
	this.initialize(img.image27090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.image27468 = function() {
	this.initialize(img.image27468);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.image27509 = function() {
	this.initialize(img.image27509);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.image27550 = function() {
	this.initialize(img.image27550);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.image27591 = function() {
	this.initialize(img.image27591);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.image27632 = function() {
	this.initialize(img.image27632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.image27673 = function() {
	this.initialize(img.image27673);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.image27714 = function() {
	this.initialize(img.image27714);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);



(lib.boton1 = function(texto,mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text(texto, "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 222;
	this.text.setTransform(-81.9,-26.4+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape.setTransform(-80,-15,1.25,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_1.setTransform(-79.7,-14.9,1.25,1,0,0,0,0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-80,-15,160,30,6);
	this.shape_2.setTransform(-79.7,-14.9,1.25,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{regX:0,x:-80,y:-15}},{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape,p:{regX:0.2,x:-79.7,y:-14.9}},{t:this.text,p:{color:"#000000"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.9,-30,226,30);


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

 (lib.btn_AudioPlay_okneg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // FlashAICB
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").p("AgUhxQAWAZALApQAXBQg4BT");
        this.shape.setTransform(6.8, 0, 0.697, 0.697);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#000000").p("AgLhEIAIAKQAGAOAFAQQAOAvghAz");
        this.shape_1.setTransform(4.5, 0, 0.697, 0.697);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#000000").p("AgGglIAKAWQAIAZgSAc");
        this.shape_2.setTransform(2.5, 0.1, 0.697, 0.697);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#000000").p("AAchWIAACuIg3gwIAAhIg");
        this.shape_3.setTransform(-2.2, -0.1, 0.697, 0.697);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgbAoIAAhJIA3g1IAACtg");
        this.shape_4.setTransform(-2.2, 0, 0.697, 0.697);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#000000").p("AgZgmQgGAAAAAIIAAA9QAAAIAGAAIA0AAQAFAAAAgIIAAg9QAAgDgBgDQgCgCgCAAg");
        this.shape_5.setTransform(-6.5, 0, 0.697, 0.697);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgZAnQgGAAAAgIIAAg9QAAgIAGAAIA0AAQAAAAABAAQABAAAAABQAAAAABAAQAAABABAAQABADAAADIAAA9QAAAIgFAAg");
        this.shape_6.setTransform(-6.5, 0, 0.697, 0.697);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#FFFFFF").p("ACWiBIAAEDQAAAJgGAFQgFAGgIAAIkFAAQgIAAgFgGQgGgGAAgIIAAkDQAAgIAGgGQAFgGAIAAIEFAAQAIAAAFAGQAGAGAAAIg");
        this.shape_7.setTransform(0, 0, 0.697, 0.697);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AiCCWQgHgBgGgFQgGgGABgIIAAkDQgBgIAGgGQAGgGAHABIEFAAQAIgBAFAGQAFAGABAIIAAEDQgBAIgFAGQgFAFgIABg");
        this.shape_8.setTransform(0, 0, 0.697, 0.697);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_8, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_7, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_6, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_5, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_4, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2, y: 0}}, {t: this.shape_3, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2}}, {t: this.shape_2, p: {scaleX: 0.697, scaleY: 0.697, x: 2.5, y: 0.1}}, {t: this.shape_1, p: {scaleX: 0.697, scaleY: 0.697, x: 4.5}}, {t: this.shape, p: {scaleX: 0.697, scaleY: 0.697, x: 6.8}}]}).to({state: [{t: this.shape_8, p: {scaleX: 0.766, scaleY: 0.766}}, {t: this.shape_7, p: {scaleX: 0.766, scaleY: 0.766}}, {t: this.shape_6, p: {scaleX: 0.766, scaleY: 0.766, x: -7.2}}, {t: this.shape_5, p: {scaleX: 0.766, scaleY: 0.766, x: -7.2}}, {t: this.shape_4, p: {scaleX: 0.766, scaleY: 0.766, x: -2.5, y: -0.1}}, {t: this.shape_3, p: {scaleX: 0.766, scaleY: 0.766, x: -2.5}}, {t: this.shape_2, p: {scaleX: 0.766, scaleY: 0.766, x: 2.8, y: 0}}, {t: this.shape_1, p: {scaleX: 0.766, scaleY: 0.766, x: 5}}, {t: this.shape, p: {scaleX: 0.766, scaleY: 0.766, x: 7.5}}]}, 1).to({state: [{t: this.shape_8, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_7, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_6, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_5, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_4, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2, y: 0}}, {t: this.shape_3, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2}}, {t: this.shape_2, p: {scaleX: 0.697, scaleY: 0.697, x: 2.5, y: 0.1}}, {t: this.shape_1, p: {scaleX: 0.697, scaleY: 0.697, x: 4.5}}, {t: this.shape, p: {scaleX: 0.697, scaleY: 0.697, x: 6.8}}]}, 1).to({state: [{t: this.shape_8, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_7, p: {scaleX: 0.697, scaleY: 0.697}}, {t: this.shape_6, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_5, p: {scaleX: 0.697, scaleY: 0.697, x: -6.5}}, {t: this.shape_4, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2, y: 0}}, {t: this.shape_3, p: {scaleX: 0.697, scaleY: 0.697, x: -2.2}}, {t: this.shape_2, p: {scaleX: 0.697, scaleY: 0.697, x: 2.5, y: 0.1}}, {t: this.shape_1, p: {scaleX: 0.697, scaleY: 0.697, x: 4.5}}, {t: this.shape, p: {scaleX: 0.697, scaleY: 0.697, x: 6.8}}]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 30, 30);


    (lib.btn_AudioPause_okneg = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // FlashAICB
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").p("AAbA8QAAALgIAIQgIAIgLAAQgKAAgIgIQgIgIAAgLIAAh3QAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALg");
        this.shape.setTransform(3, 0, 0.7, 0.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgSBPQgIgIAAgMIAAh1QAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMIAAB1QAAAMgIAIQgIAIgLAAQgKAAgIgIg");
        this.shape_1.setTransform(3, 0, 0.7, 0.7);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#FFFFFF").p("AAbg7IAAB3QAAALgIAIQgIAIgLAAQgKAAgIgIQgIgIAAgLIAAh3QAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALg");
        this.shape_2.setTransform(-3.2, 0, 0.7, 0.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgSBPQgIgIAAgMIAAh1QAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMIAAB1QAAAMgIAIQgIAIgLAAQgKAAgIgIg");
        this.shape_3.setTransform(-3.2, 0, 0.7, 0.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#FFFFFF").p("ACWiCIAAEEQAAAIgGAGQgFAGgIAAIkFAAQgIAAgFgGQgGgGAAgIIAAkEQAAgIAGgFQAFgGAIAAIEFAAQAIAAAFAGQAGAFAAAIg");
        this.shape_4.setTransform(0, 0, 0.7, 0.7);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AiCCWQgIAAgFgHQgGgFABgIIAAkDQgBgJAGgFQAFgGAIABIEFAAQAHgBAGAGQAFAFABAJIAAEDQgBAIgFAFQgGAHgHAAg");
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
        if (childNodes[i].nodeType == 1 && (childNodes[i].nodeName == 'DIV' || childNodes[i].nodeName == 'VIDEO')) {
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
    //Imagen+texto
    this.imagen = new lib.Bitmap45copy();
    var ancho = imagen(this, 1, 0.471, 0.471);
    texto(this, txt['pantalla2_2'], 0, ancho);

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

    //Audio
         this.audioplay.on("click", function (evt) {
            reproductor = cjs.Sound.play("misonido");
            this.visible = false;
            this.parent.audiopause.visible = true;
        });

        this.audiopause.on("click", function (evt) {
            reproductor.stop();
            this.visible = false;
            this.parent.audioplay.visible = true;
        });
}