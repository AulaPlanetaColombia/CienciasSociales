(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0,0,0,0,0,0);
        titulo1(this,txt['titulo']);

	this.instance = new lib.IMG4();
	this.instance.setTransform(722.3,421.4,1,1,0,0,0,139.3,87.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.IMG4(), 3);
 this.instance.on("click", function (evt) {
        putStage(new lib.frame1_2());
    });
	this.instance_1 = new lib.IMG3();
	this.instance_1.setTransform(261,415.4,1,1,0,0,0,140,81.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.IMG3(), 3);
this.instance_1.on("click", function (evt) {
        putStage(new lib.frame1_4());
    });

	this.instance_2 = new lib.IMG2();
	this.instance_2.setTransform(670.4,202.4,1,1,0,0,0,87.4,70.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.IMG2(), 3);
this.instance_2.on("click", function (evt) {
        putStage(new lib.frame1_3());
    });

	this.instance_3 = new lib.IMG1();
	this.instance_3.setTransform(246.4,260,1,1,0,0,0,125.4,128);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.IMG1(), 3);
this.instance_3.on("click", function (evt) {
        putStage(new lib.frame1_1());
    });

	this.text_1 = new cjs.Text(txt['img1'], "20px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 243;
	this.text_1.setTransform(703.5,496.6+incremento);

	this.text_2 = new cjs.Text(txt['img2'], "20px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 243;
	this.text_2.setTransform(703.5,294.6+incremento);

	this.text_3 = new cjs.Text(txt['img3'], "20px Verdana");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 243;
	this.text_3.setTransform(241.5,496.6+incremento);

	this.text_4 = new cjs.Text(txt['img4'], "20px Verdana");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 243;
	this.text_4.setTransform(241.5,294.6+incremento);

	this.text_5 = new cjs.Text(txt['selecciona'], "bold 16px Verdana");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 244;
	this.text_5.setTransform(472.2,547.1+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AzfCjIAAlFMAm/AAAIAAFFg");
	this.shape.setTransform(475,560.9);
        this.addChild(this.logo, this.titulo, this.shape,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame1_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        // Capa 1
	this.text = new cjs.Text(txt['como'], "23px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.setTransform(471.5,61.5);

	this.instance = new lib.IMG14();
	this.instance.setTransform(700.5,413.9,1,1,0,0,0,165.1,70.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.IMG14(), 3);
this.instance.on("click", function (evt) {
        putStage(new lib.frame1_1_4());
    });

	this.instance_1 = new lib.IMG13();
	this.instance_1.setTransform(241.7,458.9,1,1,0,0,0,162.3,115.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.IMG13(), 3);
this.instance_1.on("click", function (evt) {
        putStage(new lib.frame1_1_3());
    });

	this.instance_2 = new lib.IMG12();
	this.instance_2.setTransform(702.4,307.5,1,1,0,0,0,167,175);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.IMG12(), 3);
this.instance_2.on("click", function (evt) {
        putStage(new lib.frame1_1_2());
    });

	this.instance_3 = new lib.IMG11();
	this.instance_3.setTransform(236.7,278.5,1,1,0,0,0,157.3,146);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.IMG11(), 3);
this.instance_3.on("click", function (evt) {
        putStage(new lib.frame1_1_1());
    });
	this.text_1 = new cjs.Text(txt['selecciona'], "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 244;
	this.text_1.setTransform(470.7,547.1+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AzfCjIAAlFMAm/AAAIAAFFg");
	this.shape.setTransform(473.5,560.9);

        
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape,this.text_1,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame1_1_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
	this.instance = new lib._000A7Z01();
	this.instance.setTransform(106.4,-26.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_1());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame1_1_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
	this.instance = new lib._0026L801();
	this.instance.setTransform(241.3,-25.9,0.914,0.914);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);

this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_1());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame1_1_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
		this.instance = new lib._0007NH01();
	this.instance.setTransform(160.5,94.4,0.601,0.601);


	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475.4,300.1);
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_1());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
   (lib.frame1_1_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
	this.instance = new lib._116657492_HIGH();
	this.instance.setTransform(66.8,-24.9,0.912,0.912);


this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(474,300.7);     
        
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_1());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame1_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        // Capa 1
	this.text = new cjs.Text(txt['como'], "23px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.setTransform(471.5,61.5);
	this.instance = new lib.IMG24();
	this.instance.setTransform(715.3,463.9,1,1,0,0,0,178.3,120.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.IMG24(), 3);

	this.instance_1 = new lib.IMG23();
	this.instance_1.setTransform(254.3,436.9,1,1,0,0,0,173.3,93.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.IMG23(), 3);

	this.instance_2 = new lib.IMG22();
	this.instance_2.setTransform(700.3,229.9,1,1,0,0,0,163.3,97.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.IMG22(), 3);

	this.instance_3 = new lib.IMG21();
	this.instance_3.setTransform(266,224.9,1,1,0,0,0,185,92.4);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.IMG21(), 3);
this.instance.on("click", function (evt) {
        putStage(new lib.frame1_2_4());
    });


this.instance_1.on("click", function (evt) {
        putStage(new lib.frame1_2_3());
    });

	
this.instance_2.on("click", function (evt) {
        putStage(new lib.frame1_2_2());
    });

	
this.instance_3.on("click", function (evt) {
        putStage(new lib.frame1_2_1());
    });
	this.text_1 = new cjs.Text(txt['selecciona'], "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 244;
	this.text_1.setTransform(470.7,547.1+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AzfCjIAAlFMAm/AAAIAAFFg");
	this.shape.setTransform(473.5,560.9);

        
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape,this.text_1,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame1_2_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
	this.instance = new lib._000YEJ01();
	this.instance.setTransform(103.3,61.9,0.657,0.657);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame1_2_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
		this.instance = new lib._000M2901();
	this.instance.setTransform(136.3,80.7,0.589,0.589);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);

this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame1_2_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
	this.instance = new lib._000IAF01();
	this.instance.setTransform(153.2,75,0.576,0.576);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);
        
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
   (lib.frame1_2_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
this.instance = new lib._000IBK01();
	this.instance.setTransform(159.8,89.6,0.595,0.595);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);  
        
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_2());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
   (lib.frame1_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        // Capa 1
	this.text = new cjs.Text(txt['como'], "23px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.setTransform(471.5,61.5);
	this.instance = new lib.IMG34();
	this.instance.setTransform(681.3,445.8,1,1,0,0,0,144.3,102.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.IMG34(), 3);

	this.instance_1 = new lib.IMG33();
	this.instance_1.setTransform(245.3,423.8,1,1,0,0,0,164.3,80.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.IMG33(), 3);

	this.instance_2 = new lib.IMG32();
	this.instance_2.setTransform(705,232.9,1,1,0,0,0,168,100.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.IMG32(), 3);

	this.instance_3 = new lib.IMG31();
	this.instance_3.setTransform(246,213.9,1,1,0,0,0,165,81.4);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.IMG31(), 3);
this.instance.on("click", function (evt) {
        putStage(new lib.frame1_3_4());
    });


this.instance_1.on("click", function (evt) {
        putStage(new lib.frame1_3_3());
    });

	
this.instance_2.on("click", function (evt) {
        putStage(new lib.frame1_3_2());
    });

	
this.instance_3.on("click", function (evt) {
        putStage(new lib.frame1_3_1());
    });
	this.text_1 = new cjs.Text(txt['selecciona'], "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 244;
	this.text_1.setTransform(470.7,547.1+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AzfCjIAAlFMAm/AAAIAAFFg");
	this.shape.setTransform(473.5,560.9);

        
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape,this.text_1,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame1_3_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
	this.instance = new lib._96996179_High();
	this.instance.setTransform(160.9,87.3,0.535,0.535);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame1_3_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
			this.instance = new lib._104828872();
	this.instance.setTransform(118,71.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);

this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame1_3_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
	this.instance = new lib._92079671_OPT();
	this.instance.setTransform(163.3,89.7,1.053,1.053);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);
        
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
   (lib.frame1_3_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
    this.instance = new lib._001J2F01();
	this.instance.setTransform(-24.9,22,0.836,0.836);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwlAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(473.8,300.1);  
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_3());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 
   (lib.frame1_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        // Capa 1
	this.text = new cjs.Text(txt['como'], "23px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.setTransform(471.5,61.5);
	
        	this.instance = new lib.IMG44();
	this.instance.setTransform(701,429.9,1,1,0,0,0,164,86.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.IMG44(), 3);

	this.instance_1 = new lib.IMG43();
	this.instance_1.setTransform(246,481.4,1,1,0,0,0,165,137.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.IMG43(), 3);

	this.instance_2 = new lib.IMG42();
	this.instance_2.setTransform(709,224.9,1,1,0,0,0,172,92.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.IMG42(), 3);

	this.instance_3 = new lib.IMG41();
	this.instance_3.setTransform(245,230.9,1,1,0,0,0,164,98.4);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.IMG41(), 3);
        
this.instance.on("click", function (evt) {
        putStage(new lib.frame1_4_4());
    });


this.instance_1.on("click", function (evt) {
        putStage(new lib.frame1_4_3());
    });

	
this.instance_2.on("click", function (evt) {
        putStage(new lib.frame1_4_2());
    });

	
this.instance_3.on("click", function (evt) {
        putStage(new lib.frame1_4_1());
    });
	this.text_1 = new cjs.Text(txt['selecciona'], "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 244;
	this.text_1.setTransform(470.7,547.1+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AzfCjIAAlFMAm/AAAIAAFFg");
	this.shape.setTransform(473.5,560.9);

        
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape,this.text_1,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame1_4_1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
	this.instance = new lib._100883383_High();
	this.instance.setTransform(24.4,61.4,0.658,0.658);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_4());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame1_4_2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
			this.instance = new lib._000JS101();
	this.instance.setTransform(35.5,-4.9,0.76,0.76);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);


this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_4());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
  (lib.frame1_4_3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        
	this.instance = new lib._0006EH01();
	this.instance.setTransform(126.6,56,0.857,0.857);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);
        
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_4());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
   (lib.frame1_4_4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
      	this.instance = new lib._89791599_High();
	this.instance.setTransform(161,91.4,0.702,0.702);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwkAfPMAAAg+dMBhKAAAMAAAA+dg");
	this.shape.setTransform(475,300.1);
        
this.instance.mask=this.shape;
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame1_4());
        });

        this.addChild(this.logo, this.titulo, this.cerrar, this.anterior, this.instance);
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
   
   (lib._0006EH01 = function() {
	this.initialize(img._0006EH01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,772,768);


(lib._0006EH01_OPT = function() {
	this.initialize(img._0006EH01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,579,576);


(lib._0007NH01 = function() {
	this.initialize(img._0007NH01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1163,768);


(lib._0007NH01_OPT = function() {
	this.initialize(img._0007NH01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,606,400);


(lib._000A7Z01 = function() {
	this.initialize(img._000A7Z01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,776,768);


(lib._000A7Z01_1 = function() {
	this.initialize(img._000A7Z01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,776,768);


(lib._000IAF01 = function() {
	this.initialize(img._000IAF01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1130,768);


(lib._000IAF01_OPT = function() {
	this.initialize(img._000IAF01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,589,400);


(lib._000IBK01 = function() {
	this.initialize(img._000IBK01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1137,768);


(lib._000IBK01_OPT = function() {
	this.initialize(img._000IBK01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,592,400);


(lib._000JS101 = function() {
	this.initialize(img._000JS101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1164,768);


(lib._000JS101_OPT = function() {
	this.initialize(img._000JS101_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,606,400);


(lib._000M2901 = function() {
	this.initialize(img._000M2901);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1154,768);


(lib._000M2901_OPt = function() {
	this.initialize(img._000M2901_OPt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,400);


(lib._000UDL01_OPT = function() {
	this.initialize(img._000UDL01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,593,400);


(lib._000YEJ01 = function() {
	this.initialize(img._000YEJ01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1124,768);


(lib._000YEJ01_OPT = function() {
	this.initialize(img._000YEJ01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,585,400);


(lib._001J2F01 = function() {
	this.initialize(img._001J2F01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1132,768);


(lib._001J2F01_OPT = function() {
	this.initialize(img._001J2F01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,590,400);


(lib._0026L801 = function() {
	this.initialize(img._0026L801);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,768);


(lib._0026L801_OPT = function() {
	this.initialize(img._0026L801_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,576);


(lib._100883383 = function() {
	this.initialize(img._100883383);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1920);


(lib._100883383_High = function() {
	this.initialize(img._100883383_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,800);


(lib._100883383_OPT = function() {
	this.initialize(img._100883383_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib._104828872 = function() {
	this.initialize(img._104828872);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,744,470);


(lib._104828872_OPT = function() {
	this.initialize(img._104828872_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,633,400);


(lib._116657492_HIGH = function() {
	this.initialize(img._116657492_HIGH);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,841,600);


(lib._116657492_OPT = function() {
	this.initialize(img._116657492_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,561,400);


(lib._89791599 = function() {
	this.initialize(img._89791599);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3866,2577);


(lib._89791599_High = function() {
	this.initialize(img._89791599_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib._89791599_OPT = function() {
	this.initialize(img._89791599_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib._92079671 = function() {
	this.initialize(img._92079671);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3008,2000);


(lib._92079671_OPT = function() {
	this.initialize(img._92079671_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,400);


(lib._96996179_High = function() {
	this.initialize(img._96996179_High);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,800);


(lib._96996179_OPT = function() {
	this.initialize(img._96996179_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.Imagen44 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._89791599_OPT();
	this.instance.setTransform(-12.9,-31.6,0.59,0.59);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-31.6,354,236);


(lib.Imagen43 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._0006EH01_OPT();
	this.instance.setTransform(-7.9,-34.1,0.597,0.597);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-34.1,346,344.2);


(lib.Imagen42 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._000JS101_OPT();
	this.instance.setTransform(-40.6,-48,0.702,0.702);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-48,425.5,280.8);


(lib.Imagen41 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._100883383_OPT();
	this.instance.setTransform(-39.9,-37.6,0.68,0.68);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-37.6,408,272);


(lib.Imagen34 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._001J2F01_OPT();
	this.instance.setTransform(-100.6,-63.7,0.831,0.831);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.6,-63.7,490,332.2);


(lib.Imagen33 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._92079671_OPT();
	this.instance.setTransform(-3.8,-31.4,0.559,0.559);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.8,-31.4,336.5,223.6);


(lib.Imagen32 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._104828872_OPT();
	this.instance.setTransform(-7.1,-10.3,0.553,0.553);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.1,-10.3,350.4,221.4);


(lib.Imagen31 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._96996179_OPT();
	this.instance.setTransform(-4.4,-31.6,0.565,0.565);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-31.6,339,226);


(lib.Imagen24 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._000IBK01_OPT();
	this.instance.setTransform(-16.9,-11.6,0.66,0.66);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-11.6,390.7,264);


(lib.Imagen23 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._000IAF01_OPT();
	this.instance.setTransform(-10.1,-31.2,0.623,0.623);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.1,-31.2,367,249.3);


(lib.Imagen22 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._000M2901_OPt();
	this.instance.setTransform(-46.9,-42.6,0.7,0.7);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.9,-42.6,420.7,280);


(lib.Imagen21 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._000YEJ01_OPT();
	this.instance.setTransform(-17.4,-46,0.692,0.692);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,-46,405,276.9);


(lib.Imagen14 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._116657492_OPT();
	this.instance.setTransform(-4.6,-50.6,0.605,0.605);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.6,-50.6,339.4,242);


(lib.Imagen13 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._0007NH01_OPT();
	this.instance.setTransform(-16.2,-2.5,0.59,0.59);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.2,-2.5,357.3,235.9);


(lib.Imagen12 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._0026L801_OPT();
	this.instance.setTransform(-1.9,-78.4,0.88,0.88);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-78.4,338,507);


(lib.Imagen11 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A57OXIAA8uMAz3AAAIAAcug");
	mask.setTransform(166,92);

	// Capa 2
	this.instance = new lib._000A7Z01();
	this.instance.setTransform(-58.6,-67.7,0.557,0.557);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.6,-67.7,432,427.6);


(lib.imagen4 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzIMWIAA4rMAmQAAAIAAYrg");
	mask.setTransform(122.5,79);

	// Capa 2
	this.instance = new lib._000IBK01_OPT();
	this.instance.setTransform(-16.3,-17.8,0.526,0.526);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.3,-17.8,311.5,210.5);


(lib.imagen3 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzIMWIAA4rMAmQAAAIAAYrg");
	mask.setTransform(122.5,79);

	// Capa 2
	this.instance = new lib._000JS101_OPT();
	this.instance.setTransform(-49.3,-43.6,0.625,0.625);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.3,-43.6,378.8,250);


(lib.imagen2 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzIMWIAA4rMAmQAAAIAAYrg");
	mask.setTransform(122.5,79);

	// Capa 2
	this.instance = new lib._001J2F01_OPT();
	this.instance.setTransform(-104.3,-59.6,0.65,0.65);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.3,-59.6,383.5,260);


(lib.Imagen1 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzIMWIAA4rMAmQAAAIAAYrg");
	mask.setTransform(122.5,79);

	// Capa 2
	this.instance = new lib._000A7Z01();
	this.instance.setTransform(-58.6,-54,0.474,0.474);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.6,-54,368,364.2);


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


(lib.IMG44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen44();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen43();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen42();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen41();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen34();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen33();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen32();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen31();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen24();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen23();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen22();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen21();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen14();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen13();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen12();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen11();
	this.instance.setTransform(166,92,1,1,0,0,0,166,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A57OXIAA8uMAz3AAAIAAcug");
	this.shape.setTransform(166,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,184);


(lib.IMG4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.imagen4();
	this.instance.setTransform(122.5,79,1,1,0,0,0,122.5,79);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzIMWIAA4rMAmQAAAIAAYrg");
	this.shape.setTransform(122.5,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,158);


(lib.IMG3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.imagen3();
	this.instance.setTransform(122.5,79,1,1,0,0,0,122.5,79);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzIMWIAA4rMAmQAAAIAAYrg");
	this.shape.setTransform(122.5,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,158);


(lib.IMG2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.imagen2();
	this.instance.setTransform(122.5,79,1,1,0,0,0,122.5,79);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzIMWIAA4rMAmQAAAIAAYrg");
	this.shape.setTransform(122.5,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,158);


(lib.IMG1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Imagen1();
	this.instance.setTransform(122.5,79,1,1,0,0,0,122.5,79);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzIMWIAA4rMAmQAAAIAAYrg");
	this.shape.setTransform(122.5,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,158);


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