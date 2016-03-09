(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
        titulo1(this,txt['titulo']);

this.instance = new lib.IMG2();
	this.instance.setTransform(343,219);

	this.instance_1 = new lib.IMG3();
	this.instance_1.setTransform(643,219);

	this.instance_2 = new lib.IMG1();
	this.instance_2.setTransform(43,219);

	this.instance_3 = new lib.R3();
	this.instance_3.setTransform(777.2,490.4);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.R3(), 3);

	this.instance_4 = new lib.R2();
	this.instance_4.setTransform(476.2,490.4);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.R2(), 3);

	this.instance_5 = new lib.R1();
	this.instance_5.setTransform(172.2,490.4);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.R1(), 3);

        this.instance_5.on("click", function (evt) {
            putStage(new lib.frame2());
        });
   this.instance_4.on("click", function (evt) {
            putStage(new lib.frame3());
        });
           this.instance_3.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.addChild(this.logo, this.titulo, this.siguiente, this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        titulo2(this, txt['titgeol']);
this.instance = new lib.tsunamiMC2();
	this.instance.setTransform(666.4,330,1,1,0,0,0,241,198);

	
	this.instance_1 = new lib.B12();
	this.instance_1.setTransform(189.3,333);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.B12(), 3);

	this.instance_2 = new lib.B11();
	this.instance_2.setTransform(189.3,243);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.B11(), 3);

	this.instance_3 = new lib.B13();
	this.instance_3.setTransform(189.3,433);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.B13(), 3);
        this.instance_1.on("click", function (evt) {
            putStage(new lib.frame2_2_1());
        });
        this.instance_2.on("click", function (evt) {
            putStage(new lib.frame2_1_1());
        });
        this.instance_3.on("click", function (evt) {
            putStage(new lib.frame2_3_1());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame2_1_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0,1, 0, 1);
        titulo2(this, txt['titerre']);

	
	this.instance = new lib.terremoto2MC();
	this.instance.setTransform(699.5,329,1,1,0,0,0,169.5,152);

	this.instance_1 = new lib.terremoto1MC();
	this.instance_1.setTransform(250.5,329,1,1,0,0,0,169.5,152);
        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_1_2());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame2_1_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['titmap']);

	
	this.instance = new lib.terremotos_Final();
	this.instance.setTransform(104.2,64,0.45,0.45);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_1_1());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_1_3());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame2_1_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['titescala']);

	this.instance = new lib.escala_High();
	this.instance.setTransform(0,153.9);
        
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_1_2());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_1_4());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame2_1_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,0, 0, 1);
        titulo2(this, txt['titgrandest']);

	this.text_1 = new cjs.Text("Ecuador, 8,8 (1906).\nKamchatka, URSS 9 (1952).\nChile, 9,5 (1960).\nAlaska, EEUU, 9,2 (1964).\nAlaska, EEUU, 8,7 (1965).\nIndonesia, 9 (2004).\nIndonesia, 8,7 (2005).\nChile, 8,8 (2010).\nJapón, 9 (2011).", "20px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 303;
	this.text_1.setTransform(521.5,184.9);
  var html = createDiv(txt['lista_grandest'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
    this.text_1.setTransform(471, 105-608);
	this.instance = new lib.grandesTerremotosMC();
	this.instance.setTransform(237.4,330,1,1,0,0,0,241,198);
        
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_1_3());
        });
     
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance,this.instance,this.text_1);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame2_2_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0,1, 0, 1);
        titulo2(this, txt['titsun']);
this.text_1 = new cjs.Text("Tsu: puerto o bahía.\nNami: ola.", "20px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 234;
	this.text_1.setTransform(519,296.9);

  var html = createDiv(txt['textsun_1'], "Verdana", "20px", '300px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
    this.text_1.setTransform(480, 290-608);
    	this.instance = new lib.tsunamisMC();
	this.instance.setTransform(236,330,1,1,0,0,0,241,198);


        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_2_2());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.siguiente,this.instance,this.text_1,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame2_2_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['titsun']);


  var html = createDiv(txt['textsun_2'], "Verdana", "20px", '300px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
    this.text_1.setTransform(480, 190-608);
    	this.instance = new lib.tsunamis2MCç();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);

      this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_2_1());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_2_3());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior,this.text_1, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame2_2_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['titsun']);
var html = createDiv(txt['textsun_3'], "Verdana", "20px", '300px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
    this.text_1.setTransform(480, 210-608);
  
		this.instance = new lib.tsunamis3MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);
   
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_2_2());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_2_4());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior,this.text_1, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame2_2_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,0, 0, 1);
        titulo2(this, txt['titgrantsun']);

	this.text_1 = new cjs.Text("Ecuador, 8,8 (1906).\nKamchatka, URSS 9 (1952).\nChile, 9,5 (1960).\nAlaska, EEUU, 9,2 (1964).\nAlaska, EEUU, 8,7 (1965).\nIndonesia, 9 (2004).\nIndonesia, 8,7 (2005).\nChile, 8,8 (2010).\nJapón, 9 (2011).", "20px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 303;
	this.text_1.setTransform(521.5,184.9);
  var html = createDiv(txt['listgrantsun'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
    this.text_1.setTransform(451, 105-608);
this.instance = new lib.tsunamis4MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);
       
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_2_3());
        });
     
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance,this.instance,this.text_1);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame2_3_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0,1, 0, 1);
        titulo2(this, txt['titvolc']);

	
	this.instance = new lib.volcanes();
	this.instance.setTransform(436,330,1,1,0,0,0,241,198);
  this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_3_2());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame2_3_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['titvolc']);

 var html = createDiv(txt['textvol'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
    this.text_1.setTransform(501, 265-608);
	this.instance = new lib.volcanes2MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);
          this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_3_1());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_3_3());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.text_1,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame2_3_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['titvolc']);

	var html = createDiv(txt['textvol2'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
    this.text_1.setTransform(501, 265-608);
	this.instance = new lib.volcanes3MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);
        
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_3_2());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame2_3_4());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.text_1,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame2_3_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,0, 0, 1);
        titulo2(this, txt['titerupc']);

	this.text_1 = new cjs.Text("Ecuador, 8,8 (1906).\nKamchatka, URSS 9 (1952).\nChile, 9,5 (1960).\nAlaska, EEUU, 9,2 (1964).\nAlaska, EEUU, 8,7 (1965).\nIndonesia, 9 (2004).\nIndonesia, 8,7 (2005).\nChile, 8,8 (2010).\nJapón, 9 (2011).", "20px Verdana");
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 303;
	this.text_1.setTransform(521.5,184.9);
  var html = createDiv(txt['listvol'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text_1 = new cjs.DOMElement(html);
    this.text_1.setTransform(471, 105-608);
	this.instance = new lib.volcanes4MCa();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198); 
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame2_3_3());
        });
     
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance,this.instance,this.text_1);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        titulo2(this, txt['titclimat']);
	this.instance = new lib.tsunamiMC();
	this.instance.setTransform(666,330,1,1,0,0,0,241,198);

	this.instance_1 = new lib.B22();
	this.instance_1.setTransform(188.9,383);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.B22(), 3);

	this.instance_2 = new lib.B21();
	this.instance_2.setTransform(188.9,293);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.B21(), 3);
        this.instance_2.on("click", function (evt) {
            putStage(new lib.frame3_1_1());
        });
        this.instance_1.on("click", function (evt) {
            putStage(new lib.frame3_2_1());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente,this.instance_2,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame3_1_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0,1, 0, 1);
        titulo2(this, txt['tithura']);

	
		this.instance = new lib.ciclones1MC();
	this.instance.setTransform(436,330,1,1,0,0,0,241,198);

    this.siguiente.on("click", function (evt) {
            putStage(new lib.frame3_1_2());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame3_1_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['tithuracanes']);

	
	this.instance = new lib.ciclones2MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);

	this.text = new cjs.Text("América Central.", "20px Verdana");
	this.text.lineHeight = 30;
	this.text.lineWidth = 380;
	this.text.setTransform(519,306.9);   
         var html = createDiv(txt['texthura'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(511, 305-608);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame3_1_1());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame3_1_2b());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.text,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame3_1_2b = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['tithuradest']);

	
	this.instance = new lib.ciclones3MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);

	this.text = new cjs.Text("América Central.", "20px Verdana");
	this.text.lineHeight = 30;
	this.text.lineWidth = 380;
	this.text.setTransform(519,306.9);   
         var html = createDiv(txt['listahuradest'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(511, 205-608);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame3_1_2());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame3_1_3());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.text,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame3_1_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['titifones']);
this.instance = new lib.tifones1MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);

	
         var html = createDiv(txt['textifones'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(511, 305-608);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame3_1_2b());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame3_1_4());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo,this.text, this.cerrar,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame3_1_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,0, 0, 1);
        titulo2(this, txt['titciclones']);
this.instance = new lib.ciclones4MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);

	
         var html = createDiv(txt['texciclones'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(511, 305-608);
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame3_1_3());
        });
     
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance,this.instance,this.text_1);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame3_2_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0,1, 0, 1);
        titulo2(this, txt['titseq']);
  var html = createDiv(txt['texseq'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(511, 245-608);
    	this.instance = new lib.sequia1MC();
	this.instance.setTransform(236,330,1,1,0,0,0,241,198);


        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame3_2_2());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.siguiente,this.instance,this.text_1,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame3_2_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['titseq']);


  var html = createDiv(txt['texseq2'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(511, 245-608);
   	this.instance = new lib.sequia2MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);

      this.anterior.on("click", function (evt) {
            putStage(new lib.frame3_2_1());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame3_2_3());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior,this.text_1, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 
 (lib.frame3_2_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,0, 0, 1);
        titulo2(this, txt['titseq']);

	 var html = createDiv(txt['texseq3'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(511, 245-608);

this.instance = new lib.sequia3MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);
       
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame3_2_2());
        });
     
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance,this.instance,this.text_1);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        titulo2(this, txt['titgeoclimat']);
this.instance = new lib.inundacionMC();
	this.instance.setTransform(666,330,1,1,0,0,0,241,198);

	this.instance_1 = new lib.B32();
	this.instance_1.setTransform(188.9,383);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.B32(), 3);

	this.instance_2 = new lib.B31();
	this.instance_2.setTransform(188.9,293);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.B31(), 3);
        this.instance_2.on("click", function (evt) {
            putStage(new lib.frame4_1_1());
        });
        this.instance_1.on("click", function (evt) {
            putStage(new lib.frame4_2_1());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente,this.instance_2,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame4_1_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0,1, 0, 1);
        titulo2(this, txt['titinun']);
  var html = createDiv(txt['texinun'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(451, 245-608);
    	this.instance = new lib.inundaciones2MC();
	this.instance.setTransform(236,330,1,1,0,0,0,241,198);


        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame4_1_2());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.siguiente,this.instance,this.text_1,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame4_1_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,0, 0, 1);
        titulo2(this, txt['titcamb']);


  var html = createDiv(txt['texcamb'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(451, 245-608);
   	this.instance = new lib.inundaciones3MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);

      this.anterior.on("click", function (evt) {
            putStage(new lib.frame4_1_1());
        });
      
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior,this.text_1, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 
 (lib.frame4_2_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0,1, 0, 1);
        titulo2(this, txt['titincen']);
  var html = createDiv(txt['texincen'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(481, 225-608);
    	this.instance = new lib.incendios1MC();
	this.instance.setTransform(236,330,1,1,0,0,0,241,198);


        this.siguiente.on("click", function (evt) {
            putStage(new lib.frame4_2_2());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.siguiente,this.instance,this.text_1,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame4_2_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,1, 0, 1);
        titulo2(this, txt['titincen']);


  var html = createDiv(txt['texincen2'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(481, 225-608);
   	this.instance = new lib.incendios2MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);

      this.anterior.on("click", function (evt) {
            putStage(new lib.frame4_2_1());
        });
         this.siguiente.on("click", function (evt) {
            putStage(new lib.frame4_2_3());
        });
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior,this.text_1, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 
 (lib.frame4_2_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 1,0, 0, 1);
        titulo2(this, txt['titincen']);

	 var html = createDiv(txt['texincen3'], "Verdana", "20px", '410px', '40px', "20px", "185px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(481, 225-608);

this.instance = new lib.incendios3MC();
	this.instance.setTransform(237,330,1,1,0,0,0,241,198);
       
        this.anterior.on("click", function (evt) {
            putStage(new lib.frame4_2_2());
        });
     
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.addChild(this.logo, this.titulo, this.cerrar,this.anterior, this.siguiente,this.instance_3,this.instance_2,this.instance_1,this.text,this.instance,this.instance,this.text_1);
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
    
    function basicos(escena, home, anterior, siguiente, informacion, cerrar,audio) {
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
            escena.siguiente = new lib.btn_siguienteneg();
            escena.siguiente.setTransform(170, 578,1.15,1.15);
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
   
   (lib._0008G601_OPT = function() {
	this.initialize(img._0008G601_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,596,600);


(lib._000HQX01_OPT = function() {
	this.initialize(img._000HQX01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,400);


(lib._000MM801_OPT = function() {
	this.initialize(img._000MM801_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,562);


(lib._0018OD01_OPT = function() {
	this.initialize(img._0018OD01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,609,400);


(lib._0018ON01_OPT = function() {
	this.initialize(img._0018ON01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,624,400);


(lib._0018OO01_OPT = function() {
	this.initialize(img._0018OO01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,603,400);


(lib._001GEN01_OPT = function() {
	this.initialize(img._001GEN01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,564,400);


(lib._001JI401_OPT = function() {
	this.initialize(img._001JI401_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,250);


(lib._001KV801_OPT = function() {
	this.initialize(img._001KV801_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,616,400);


(lib._001KVA01_OPT = function() {
	this.initialize(img._001KVA01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,613,400);


(lib._002ABK01_OPT = function() {
	this.initialize(img._002ABK01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,606,400);


(lib._002DRZ01_OPT = function() {
	this.initialize(img._002DRZ01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,400);


(lib._100633919_OPT = function() {
	this.initialize(img._100633919_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,400);


(lib._100924415_OPT = function() {
	this.initialize(img._100924415_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib._104784490_High = function() {
	this.initialize(img._104784490_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,903,600);


(lib._104784490_OPT = function() {
	this.initialize(img._104784490_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,400);


(lib._106397756_OPT = function() {
	this.initialize(img._106397756_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,400);


(lib._90835337_OPT = function() {
	this.initialize(img._90835337_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,623,600);


(lib._91056951_OPT = function() {
	this.initialize(img._91056951_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,400);


(lib._92503681_High = function() {
	this.initialize(img._92503681_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1203,800);


(lib._92503681_OPT = function() {
	this.initialize(img._92503681_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,400);


(lib._92825999_OPT = function() {
	this.initialize(img._92825999_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,400);


(lib._92889531_OPT = function() {
	this.initialize(img._92889531_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib._93282463_OPT = function() {
	this.initialize(img._93282463_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,622,600);


(lib._97849862_OPT = function() {
	this.initialize(img._97849862_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib.caballo_OPT = function() {
	this.initialize(img.caballo_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,748);


(lib.dv118085_High = function() {
	this.initialize(img.dv118085_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,907,600);


(lib.dv118085_OPT = function() {
	this.initialize(img.dv118085_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,605,400);


(lib.escala = function() {
	this.initialize(img.escala);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2429,903);


(lib.escala_High = function() {
	this.initialize(img.escala_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,353);


(lib.huracan_High = function() {
	this.initialize(img.huracan_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,907,600);


(lib.huracan_OPT = function() {
	this.initialize(img.huracan_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,400);


(lib.inundacion_OPT = function() {
	this.initialize(img.inundacion_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,400);


(lib.Maleta_Opt = function() {
	this.initialize(img.Maleta_Opt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.terremotos = function() {
	this.initialize(img.terremotos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1645,1184);


(lib.terremotos_Final = function() {
	this.initialize(img.terremotos_Final);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1645,1066);


(lib.terremotos_High = function() {
	this.initialize(img.terremotos_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,883,600);


(lib.terremotos_ok = function() {
	this.initialize(img.terremotos_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1645,1066);


(lib.tifon_OPT = function() {
	this.initialize(img.tifon_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib.tsunami_High = function() {
	this.initialize(img.tsunami_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1161,600);


(lib.tsunami_OPT = function() {
	this.initialize(img.tsunami_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,774,400);


(lib.tsunami2_High = function() {
	this.initialize(img.tsunami2_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.tsunami2_OPT = function() {
	this.initialize(img.tsunami2_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,533,400);


(lib.volcan_High = function() {
	this.initialize(img.volcan_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib.volcan_High2 = function() {
	this.initialize(img.volcan_High2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1000);


(lib.volcan_OPT = function() {
	this.initialize(img.volcan_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib.zorro_OPT = function() {
	this.initialize(img.zorro_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,500);


(lib.volcanes4MCa = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib.volcan_High();
	this.instance.setTransform(-53,-59,0.8,0.8);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53,-59,720,480);


(lib.volcanes3MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._0008G601_OPT();
	this.instance.setTransform(-78.6,-7.6,0.822,0.822);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.6,-7.6,490,493.3);


(lib.volcanes2MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._001KV801_OPT();
	this.instance.setTransform(30.3,-0.9);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(30.3,-0.9,616,400);


(lib.volcanes = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguoAe7MAAAg91MBdRAAAMAAAA91g");
	mask.setTransform(265.5,198);

	// Capa 2
	this.instance = new lib.volcan_High2();
	this.instance.setTransform(-105,-46.2,0.511,0.511);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105,-46.2,766.1,510.7);


(lib.tsunamisMC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._92825999_OPT();
	this.instance.setTransform(23.6,51.9,0.74,0.74);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(23.6,51.9,423.4,296.1);


(lib.tsunamis4MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib.tsunami2_High();
	this.instance.setTransform(-1.9,-30.2,0.781,0.781);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-30.2,624.6,468.5);


(lib.tsunamis3MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._91056951_OPT();
	this.instance.setTransform(46.4,-3.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(46.4,-3.6,602,400);


(lib.tsunamis2MCç = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._100924415_OPT();
	this.instance.setTransform(-16,-1.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-1.6,600,400);


(lib.tsunamiMC2 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglpAe7MAAAg91MBLTAAAMAAAA91g");
	mask.setTransform(241,198);

	// Capa 2
	this.instance = new lib.tsunami_High();
	this.instance.setTransform(-60.9,-44.4,0.751,0.751);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-44.4,872.5,450.9);


(lib.tsunamiMC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglpAe7MAAAg91MBLTAAAMAAAA91g");
	mask.setTransform(241,198);

	// Capa 2
	this.instance = new lib._000HQX01_OPT();
	this.instance.setTransform(-64.6,-0.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.6,-0.6,604,400);


(lib.tifones1MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib.tifon_OPT();
	this.instance.setTransform(-126.9,-2.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.9,-2.6,600,400);


(lib.terremoto2MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6dXvMAAAgvdMA07AAAMAAAAvdg");
	mask.setTransform(169.5,152);

	// Capa 2
	this.instance = new lib._001GEN01_OPT();
	this.instance.setTransform(-23.5,-3.6,0.8,0.8);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.5,-3.6,451.2,320);


(lib.terremoto1MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6dXvMAAAgvdMA07AAAMAAAAvdg");
	mask.setTransform(169.5,152);

	// Capa 2
	this.instance = new lib._0018OD01_OPT();
	this.instance.setTransform(-64.5,-3.5,0.78,0.78);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.5,-3.5,475,312);


(lib.sequia3MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._106397756_OPT();
	this.instance.setTransform(-49.1,-2);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.1,-2,601,400);


(lib.sequia2MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._97849862_OPT();
	this.instance.setTransform(-31.9,-2);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.9,-2,600,400);


(lib.sequia1MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._104784490_High();
	this.instance.setTransform(-152.5,-22.9);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152.5,-22.9,903,600);


(lib.inundacionMC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglpAe7MAAAg91MBLTAAAMAAAA91g");
	mask.setTransform(241,198);

	// Capa 2
	this.instance = new lib.inundacion_OPT();
	this.instance.setTransform(-72.9,-2);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.9,-2,612,400);


(lib.inundaciones3MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._0018ON01_OPT();
	this.instance.setTransform(-109.9,-0.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109.9,-0.5,624,400);


(lib.inundaciones2MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._0018OO01_OPT();
	this.instance.setTransform(-54.4,-1.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.4,-1.6,603,400);


(lib.incendios3MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._92503681_High();
	this.instance.setTransform(10.5,-30.6,0.648,0.648);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.5,-30.6,779,518);


(lib.incendios2MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._001KVA01_OPT();
	this.instance.setTransform(-67.1,-1.9);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.1,-1.9,613,400);


(lib.incendios1MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._90835337_OPT();
	this.instance.setTransform(-69.4,-197.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.4,-197.5,623,600);


(lib.IMG3 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0mT1MAAAgnpMApNAAAMAAAAnpg");
	mask.setTransform(132,90);

	// Capa 2
	this.instance = new lib._0018OO01_OPT();
	this.instance.setTransform(-81.5,-67.6,0.735,0.735);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.5,-67.6,443.2,294);


(lib.IMG2 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0mT1MAAAgnpMApNAAAMAAAAnpg");
	mask.setTransform(132,90);

	// Capa 2
	this.instance = new lib._000HQX01_OPT();
	this.instance.setTransform(-76.5,-66.6,0.725,0.725);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.5,-66.6,437.9,290);


(lib.IMG1 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0mT1MAAAgnpMApNAAAMAAAAnpg");
	mask.setTransform(132,90);

	// Capa 2
	this.instance = new lib._001KV801_OPT();
	this.instance.setTransform(-32.6,-55.4,0.714,0.714);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.6,-55.4,440,285.7);


(lib.grandesTerremotosMC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._93282463_OPT();
	this.instance.setTransform(-4.3,-49.9,0.797,0.797);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.3,-49.9,495.5,478);


(lib.ciclones4MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib.dv118085_High();
	this.instance.setTransform(-180.1,-69,0.804,0.804);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-180.1,-69,729,482.3);


(lib.ciclones3MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib.huracan_High();
	this.instance.setTransform(-134.1,-23.9,0.837,0.837);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134.1,-23.9,759,502.1);


(lib.ciclones2MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8He7MAAAg91MA4OAAAMAAAA91g");
	mask.setTransform(229,198);

	// Capa 2
	this.instance = new lib._92889531_OPT();
	this.instance.setTransform(-17.9,-1.9);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-1.9,600,400);


(lib.ciclones1MC = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguoAe7MAAAg91MBdRAAAMAAAA91g");
	mask.setTransform(265.5,198);

	// Capa 2
	this.instance = new lib._002ABK01_OPT();
	this.instance.setTransform(-35.9,-0.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.9,-0.6,606,400);


(lib.R3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btngeocli'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,30);


(lib.R2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btnclimat'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{text:"¿Qué es para ti?",color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,30);


(lib.R1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btngeol'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,30);


(lib.btn_siguiente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhviXIDfCXIjfCYg");
	this.shape.setTransform(3.6,0,0.673,0.673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBWIAAirIBgAAIAACrg");
	this.shape_1.setTransform(-6.4,0,0.673,0.673);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1E120D").ss(1,0,1).p("ADeCiQAAAZgRASQgSARgZAAIlDAAQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZg");
	this.shape_2.setTransform(0,0,0.673,0.673);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E120D").s().p("AihDeQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZIAAFDQAAAZgRASQgSARgZAAg");
	this.shape_3.setTransform(0,0,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,x:-6.4}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,x:3.6}}]}).to({state:[{t:this.shape_3,p:{scaleX:0.741,scaleY:0.741}},{t:this.shape_2,p:{scaleX:0.741,scaleY:0.741}},{t:this.shape_1,p:{scaleX:0.741,scaleY:0.741,x:-7.1}},{t:this.shape,p:{scaleX:0.741,scaleY:0.741,x:3.9}}]},1).to({state:[{t:this.shape_3,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,x:-6.4}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,x:3.6}}]},1).to({state:[{t:this.shape_3,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,x:-6.4}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,x:3.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,30,30);


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


(lib.btn_anterior = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhviXIDfCXIjfCYg");
	this.shape.setTransform(-3.5,0,0.673,0.673,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBWIAAirIBgAAIAACrg");
	this.shape_1.setTransform(6.5,0.1,0.673,0.673,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1E120D").ss(1,0,1).p("ADeCiQAAAZgRASQgSARgZAAIlDAAQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZg");
	this.shape_2.setTransform(0,0,0.673,0.673,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E120D").s().p("AihDeQgZAAgSgRQgRgSAAgZIAAlDQAAgZARgSQASgRAZAAIFDAAQAZAAASARQARASAAAZIAAFDQAAAZgRASQgSARgZAAg");
	this.shape_3.setTransform(0,0,0.673,0.673,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,x:6.5}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,x:-3.5}}]}).to({state:[{t:this.shape_3,p:{scaleX:0.741,scaleY:0.741}},{t:this.shape_2,p:{scaleX:0.741,scaleY:0.741}},{t:this.shape_1,p:{scaleX:0.741,scaleY:0.741,x:7.2}},{t:this.shape,p:{scaleX:0.741,scaleY:0.741,x:-3.8}}]},1).to({state:[{t:this.shape_3,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,x:6.5}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,x:-3.5}}]},1).to({state:[{t:this.shape_3,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,x:6.5}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,x:-3.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,30,30);


(lib.B32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btnincen'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,30);


(lib.B31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btninun'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,30);


(lib.B22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btnsequia'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,30);


(lib.B21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btnhur'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,29.5,1.2,1.667,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,29.5,1.2,1.667,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,29.5,1.2,1.667,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,50);


(lib.B13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btnvolca'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,30);


(lib.B12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btntsu'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,30);


(lib.B11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.text = new cjs.Text(txt['btnterre'], "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 215;
	this.text.setTransform(-1.4,-12.3+incremento);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#FFFFFF"}}]},2).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_1.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#000000").ss(1,1,1).rr(-91.7,-15,183.4,30,6);
	this.shape_2.setTransform(-32.9,11.7,1.2,1,0,0,0,-28.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-14.9,220.2,30);


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