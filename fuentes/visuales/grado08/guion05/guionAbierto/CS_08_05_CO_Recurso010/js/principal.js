(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
        titulo1(this,txt['titol']);

	this.btn_05 = new lib.btn_05();
	this.btn_05.setTransform(825,482.5,1,1,0,0,0,87.5,9.3);
	new cjs.ButtonHelper(this.btn_05, 0, 1, 2, false, new lib.btn_05(), 3);

	this.btn_04 = new lib.btn_02();
	this.btn_04.setTransform(650.8,482.5,1,1,0,0,0,87.5,9.3);
	new cjs.ButtonHelper(this.btn_04, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_03 = new lib.btn_03();
	this.btn_03.setTransform(476.7,482.5,1,1,0,0,0,87.5,9.3);
	new cjs.ButtonHelper(this.btn_03, 0, 1, 2, false, new lib.btn_03(), 3);

	this.btn_02 = new lib.btn_02();
	this.btn_02.setTransform(302.7,482.5,1,1,0,0,0,87.5,9.3);
	new cjs.ButtonHelper(this.btn_02, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_01 = new lib.btn_01();
	this.btn_01.setTransform(129,482.5,1,1,0,0,0,87.5,9.3);
	new cjs.ButtonHelper(this.btn_01, 0, 1, 2, false, new lib.btn_01(), 3);

	this.text = new cjs.Text("1910", "bold 16px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 55;
	this.text.setTransform(884.3,500.4);

	this.text_1 = new cjs.Text("1880", "bold 16px Verdana");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 55;
	this.text_1.setTransform(710.1,500.4);

	this.text_2 = new cjs.Text("1850", "bold 16px Verdana");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 55;
	this.text_2.setTransform(538.3,500.4);

	this.text_3 = new cjs.Text("1820", "bold 16px Verdana");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(364.3,500.4);

	this.text_4 = new cjs.Text("1790", "bold 16px Verdana");
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(191,500.4);

	this.text_5 = new cjs.Text("1760", "bold 16px Verdana");
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 55;
	this.text_5.setTransform(20.9,500.4);

	this.txt_selecciona = new cjs.Text(txt['txt_selecciona'], "bold 16px Verdana");
	this.txt_selecciona.textAlign = "center";
	this.txt_selecciona.lineHeight = 18;
	this.txt_selecciona.lineWidth = 363;
	this.txt_selecciona.setTransform(473.7,542.4);

	this.p_01_tabla_02 = new cjs.Text("Segunda Revolución \nIndustrial", "bold 15px Verdana");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 17;
	this.p_01_tabla_02.lineWidth = 231;
	this.p_01_tabla_02.setTransform(791.9,407.2);

	this.p_01_tabla_01 = new cjs.Text("Primera Revolucion Industrial", "bold 15px Verdana");
	this.p_01_tabla_01.textAlign = "center";
	this.p_01_tabla_01.lineHeight = 17;
	this.p_01_tabla_01.lineWidth = 347;
	this.p_01_tabla_01.setTransform(329.2,414.8);

	this.p_01_hito_05 = new cjs.Text("A\n\n\nFord T", "bold 14px Verdana");
	this.p_01_hito_05.textAlign = "right";
	this.p_01_hito_05.lineHeight = 16;
	this.p_01_hito_05.lineWidth = 118;
	this.p_01_hito_05.setTransform(838.1,274.3);
 var html = createDiv(txt['p_01_hito_05'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_05 = new cjs.DOMElement(html);
        this.p_01_hito_05.setTransform(835 - 135, 284 - 610);
	this.p_01_hito_04 = new cjs.Text("AA\n\nProducción de electricidad", "bold 14px Verdana");
	this.p_01_hito_04.lineHeight = 16;
	this.p_01_hito_04.lineWidth = 120;
	this.p_01_hito_04.setTransform(723.3,171);
var html = createDiv(txt['p_01_hito_04'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.p_01_hito_04 = new cjs.DOMElement(html);
        this.p_01_hito_04.setTransform(728 , 181 - 610);
	this.p_01_hito_02 = new cjs.Text("A\n\nLa riqueza de las naciones", "bold 14px Verdana");
	this.p_01_hito_02.lineHeight = 16;
	this.p_01_hito_02.lineWidth = 113;
	this.p_01_hito_02.setTransform(178.7,275);
var html = createDiv(txt['p_01_hito_02'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.p_01_hito_02 = new cjs.DOMElement(html);
        this.p_01_hito_02.setTransform(187 , 288 - 610);
	this.p_01_hito_03 = new cjs.Text("AA\n\nLocomotora de Stephenson", "bold 14px Verdana");
	this.p_01_hito_03.lineHeight = 16;
	this.p_01_hito_03.lineWidth = 142;
	this.p_01_hito_03.setTransform(493.8,270);
 var html = createDiv(txt['p_01_hito_03'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.p_01_hito_03 = new cjs.DOMElement(html);
        this.p_01_hito_03.setTransform(500 , 280 - 610);
	this.titol = new cjs.Text("", "31px Georgia");
	this.titol.textAlign = "center";
	this.titol.lineHeight = 33;
	this.titol.lineWidth = 783;
	this.titol.setTransform(473.9,66);

	this.p_01_hito_01 = new cjs.Text("a\n\nMáquina de vapor", "bold 14px Verdana");
	this.p_01_hito_01.lineHeight = 16;
	this.p_01_hito_01.lineWidth = 157;
	this.p_01_hito_01.setTransform(129.6,164);
 var html = createDiv(txt['p_01_hito_01'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.p_01_hito_01 = new cjs.DOMElement(html);
        this.p_01_hito_01.setTransform(139 , 175 - 610);
	this.instance_1 = new lib.Mapadebits5();
	this.instance_1.setTransform(846.3,274.4);

	this.instance_2 = new lib.Mapadebits4();
	this.instance_2.setTransform(637.8,170.4);

	this.instance_3 = new lib.Mapadebits3();
	this.instance_3.setTransform(380.5,269.4);

	this.instance_4 = new lib.Mapadebits2();
	this.instance_4.setTransform(116.4,275.4);

	this.instance_5 = new lib.Mapadebits1();
	this.instance_5.setTransform(42.3,165.4);

	this.instance_6 = new lib.Mapadebits10();
	this.instance_6.setTransform(78.6,238.7);

	this.instance_7 = new lib.Mapadebits9();
	this.instance_7.setTransform(145.6,347.4);

	this.instance_8 = new lib.Mapadebits8();
	this.instance_8.setTransform(477.5,339.5);

	this.instance_9 = new lib.Mapadebits7();
	this.instance_9.setTransform(674.7,242.3);

	this.instance_10 = new lib.Mapadebits6();
	this.instance_10.setTransform(897.8,310.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(898.9,425.1,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(675.4,425.1,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(478.4,425.1,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(146.7,425.1,1.047,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(79.6,425.1,1.047,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8BB1D8").s().p("EgxQAEaIAAozMBihAAAIAAIzg");
	this.shape_5.setTransform(360.1,423.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9754A").s().p("AyfEaIAAozMAk/AAAIAAIzg");
	this.shape_6.setTransform(793.8,423.9);

        this.btn_01.on("click", function (evt) {
            putStage(new lib.frame2());
        });
 this.btn_02.on("click", function (evt) {
            putStage(new lib.frame3());
        });
         this.btn_03.on("click", function (evt) {
            putStage(new lib.frame4());
        });
         this.btn_04.on("click", function (evt) {
            putStage(new lib.frame5());
        });
         this.btn_05.on("click", function (evt) {
            putStage(new lib.frame6());
        });

        this.addChild(this.logo, this.titulo, this.siguiente, this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.p_01_hito_01,this.titol,this.p_01_hito_03,this.p_01_hito_02,this.p_01_hito_04,this.p_01_hito_05,this.p_01_tabla_01,this.p_01_tabla_02,this.txt_selecciona,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.btn_01,this.btn_02,this.btn_03,this.btn_04,this.btn_05);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
     	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,465.7,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.p_02_tabla_01 = new cjs.Text("Primera Revolución      Industrial", "bold 15px Verdana");
	this.p_02_tabla_01.textAlign = "center";
	this.p_02_tabla_01.lineHeight = 17;
	this.p_02_tabla_01.lineWidth = 848;
	this.p_02_tabla_01.setTransform(485,457.3+incremento);

	this.p_02_hito_03 = new cjs.Text("Telar mecánico", "bold 16px Verdana");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 18;
	this.p_02_hito_03.lineWidth = 130;
	this.p_02_hito_03.setTransform(785.6,344+incremento);

	this.p_02_hito_02 = new cjs.Text("La riqueza de las naciones", "italic bold 16px Verdana");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 18;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(561,343.7+incremento);

	this.p_02_hito_01 = new cjs.Text("Máquina de vapor", "bold 16px Verdana");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 18;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(279.1,344.5+incremento);

 if (boton == 1)
	this.mc_boto_01 = new lib.mc_01_Primera("single", 1);
    else
	this.mc_boto_01 = new lib.mc_01_Primera();
        
	this.mc_boto_01.setTransform(280.6,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 2)
	this.mc_boto_02 = new lib.mc_01_Primera("single", 1);
    else
	this.mc_boto_02 = new lib.mc_01_Primera();
	this.mc_boto_02.setTransform(563.2,366.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 3)
	this.mc_boto_03 = new lib.mc_01_Primera("single", 1);
    else
	this.mc_boto_03 = new lib.mc_01_Primera();
	this.mc_boto_03.setTransform(787.4,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 1) {
            this.popup = new lib.popup_zona_1_01("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 2) {
            this.popup = new lib.popup_zona_1_02("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 3) {
            this.popup = new lib.popup_zona_1_03("single", 0);
            this.addChild(this.popup);
        }
 
  if (boton != 1)
            this.mc_boto_01.on("click", function (evt) {
                putStage(new lib.frame2(1));
            });
          if (boton != 2)
            this.mc_boto_02.on("click", function (evt) {
                putStage(new lib.frame2(2));
            });
          if (boton != 3)
            this.mc_boto_03.on("click", function (evt) {
                putStage(new lib.frame2(3));
            });
	this.text = new cjs.Text("1785", "bold 16px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(756.9,413.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape.setTransform(781.3,420.1);

	this.text_1 = new cjs.Text("1776", "bold 16px Verdana");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(494.2,413.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_1.setTransform(518.6,420.1);

	this.text_2 = new cjs.Text("1769", "bold 16px Verdana");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(261.2,413.3);

	this.text_3 = new cjs.Text("1790", "bold 18px Verdana");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 58;
	this.text_3.setTransform(883.4,406.3);

	this.text_4 = new cjs.Text("1760", "bold 18px Verdana");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(15.4,406.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(781.9,468.3,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(518,483.2,1.047,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(285.5,468.3,1.047,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_5.setTransform(285.6,420.1);

	this.instance_1 = new lib.Mapadebits13();
	this.instance_1.setTransform(780.4,393);

	this.instance_2 = new lib.Mapadebits12();
	this.instance_2.setTransform(517.2,391.6);

	this.instance_3 = new lib.Mapadebits11();
	this.instance_3.setTransform(285,393);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8BB1D8").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_6.setTransform(476.1,467.1,2.184,1.828);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_7.setTransform(476.1,436.8);

        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.siguiente,this.shape_7,this.shape_6,this.instance_3,this.instance_2,this.instance_1,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.text_4,this.text_3,this.text_2,this.shape_1,this.text_1,this.shape,this.text,this.mc_boto_03,this.mc_boto_02,this.mc_boto_01,this.btn_inicio,this.p_02_hito_01,this.p_02_hito_02,this.p_02_hito_03,this.p_02_tabla_01,this.btn_next);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
      this.text = new cjs.Text("1807", "bold 16px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(597.8,413.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape.setTransform(622.1,423.1);

	this.text_1 = new cjs.Text("1798", "bold 16px Verdana");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(261.2,413.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_1.setTransform(285.6,421.2,1,1.131);

	

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.9,465.7,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,465.7,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.p_03_tabla_01 = new cjs.Text("Primera Revolución Industrial", "bold 15px Verdana");
	this.p_03_tabla_01.textAlign = "center";
	this.p_03_tabla_01.lineHeight = 17;
	this.p_03_tabla_01.lineWidth = 861;
	this.p_03_tabla_01.setTransform(473.7,457.3);

	this.p_03_hito_02 = new cjs.Text("Barco\nde vapor", "bold 16px Verdana");
	this.p_03_hito_02.textAlign = "center";
	this.p_03_hito_02.lineHeight = 18;
	this.p_03_hito_02.lineWidth = 129;
	this.p_03_hito_02.setTransform(624.5,343.4+incremento);

	this.p_03_hito_01 = new cjs.Text("Robert Malthus", "bold 16px Verdana");
	this.p_03_hito_01.textAlign = "center";
	this.p_03_hito_01.lineHeight = 18;
	this.p_03_hito_01.lineWidth = 106;
	this.p_03_hito_01.setTransform(286.4,343.9+incremento);


	

if (boton == 1)
	this.mc_boto_01 = new lib.mc_01_Primera("single", 1);
    else
	this.mc_boto_01 = new lib.mc_01_Primera();
        
	this.mc_boto_01.setTransform(289.1,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 2)
	this.mc_boto_02 = new lib.mc_01_Primera("single", 1);
    else
	this.mc_boto_02 = new lib.mc_01_Primera();
	this.mc_boto_02.setTransform(626.9,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  
  if (boton == 1) {
            this.popup = new lib.popup_zona_2_01("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 2) {
            this.popup = new lib.popup_zona_2_02("single", 0);
            this.addChild(this.popup);
        }
       
 
  if (boton != 1)
            this.mc_boto_01.on("click", function (evt) {
                putStage(new lib.frame3(1));
            });
          if (boton != 2)
            this.mc_boto_02.on("click", function (evt) {
                putStage(new lib.frame3(2));
            });
         
        
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(623.4,468.2,1.047,1);

	this.instance_1 = new lib.Mapadebits15();
	this.instance_1.setTransform(621.8,393.7);

	this.instance_2 = new lib.Mapadebits14();
	this.instance_2.setTransform(287.6,393.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(288.6,468.2,1.047,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8BB1D8").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_4.setTransform(476.1,467.1,2.184,1.828);

	this.text_2 = new cjs.Text("1820", "bold 18px Verdana");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 58;
	this.text_2.setTransform(883.4,406);

	this.text_3 = new cjs.Text("1790", "bold 18px Verdana");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(15.4,406);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_5.setTransform(476.1,436.8);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame2());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_5,this.text_3,this.text_2,this.shape_4,this.shape_3,this.instance_2,this.instance_1,this.shape_2,this.mc_boto_02,this.mc_boto_01,this.btn_inicio,this.p_03_hito_01,this.p_03_hito_02,this.p_03_tabla_01,this.btn_next,this.btn_prev,this.instance,this.shape_1,this.text_1,this.shape,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame4 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0,0, 0, 0);
       // Capa 1
	this.text = new cjs.Text("1845", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(758.9,413.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkeBRIAAihII8AAIAAChg");
	this.shape.setTransform(761.2,419.9,1,1,0,0,0,-0.2,0);

	this.text_1 = new cjs.Text("1830", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(348.8,413.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkeBRIAAihII8AAIAAChg");
	this.shape_1.setTransform(351.1,419.9,1,1,0,0,0,-0.2,0);

	this.text_2 = new cjs.Text("1825", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(171.9,413.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_2.setTransform(174.2,419.9,1.09,0.914,0,0,0,-0.1,0);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.9,465.7,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,465.7,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.p_04_hito_03 = new cjs.Text("Enclosure \nActs", "italic bold 16px Verdana");
	this.p_04_hito_03.textAlign = "center";
	this.p_04_hito_03.lineHeight = 18;
	this.p_04_hito_03.lineWidth = 127;
	this.p_04_hito_03.setTransform(760,342.5+incremento);

	this.p_04_tabla_01 = new cjs.Text("Primera Revolución Industrial", "bold 16px Verdana");
	this.p_04_tabla_01.textAlign = "center";
	this.p_04_tabla_01.lineHeight = 18;
	this.p_04_tabla_01.lineWidth = 797;
	this.p_04_tabla_01.setTransform(506,457.3);

	this.p_04_hito_02 = new cjs.Text("Primer tren de pasajeros", "bold 16px Verdana");
	this.p_04_hito_02.textAlign = "center";
	this.p_04_hito_02.lineHeight = 20;
	this.p_04_hito_02.lineWidth = 130;
	this.p_04_hito_02.setTransform(349.8,347.8);

	this.p_04_hito_01 = new cjs.Text("Locomotora de Stephenson", "bold 16px Verdana");
	this.p_04_hito_01.textAlign = "center";
	this.p_04_hito_01.lineHeight = 20;
	this.p_04_hito_01.lineWidth = 141;
	this.p_04_hito_01.setTransform(172.9,347.7);
if (boton == 1)
	this.mc_boto_01 = new lib.mc_01_Primera("single", 1);
    else
	this.mc_boto_01 = new lib.mc_01_Primera();
        
	this.mc_boto_01.setTransform(175.1,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 2)
	this.mc_boto_02 = new lib.mc_01_Primera("single", 1);
    else
	this.mc_boto_02 = new lib.mc_01_Primera();
	this.mc_boto_02.setTransform(352.3,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 3)
	this.mc_boto_03 = new lib.mc_01_Primera("single", 1);
    else
	this.mc_boto_03 = new lib.mc_01_Primera();
	this.mc_boto_03.setTransform(762.4,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 1) {
            this.popup = new lib.popup_zona_3_01("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 2) {
            this.popup = new lib.popup_zona_3_02("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 3) {
            this.popup = new lib.popup_zona_3_03("single", 0);
            this.addChild(this.popup);
        }
 
  if (boton != 1)
            this.mc_boto_01.on("click", function (evt) {
                putStage(new lib.frame4(1));
            });
          if (boton != 2)
            this.mc_boto_02.on("click", function (evt) {
                putStage(new lib.frame4(2));
            });
          if (boton != 3)
            this.mc_boto_03.on("click", function (evt) {
                putStage(new lib.frame4(3));
            });
	

	this.instance = new lib.Mapadebits18();
	this.instance.setTransform(762,383.9);

	this.instance_1 = new lib.Mapadebits17();
	this.instance_1.setTransform(351.9,383.9);

	this.instance_2 = new lib.Mapadebits16();
	this.instance_2.setTransform(173.7,383.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(762.7,468.7,1.047,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(352.5,468.7,1.047,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_5.setTransform(174.4,468.7,1.047,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8BB1D8").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_6.setTransform(475.6,467.1,2.18,1.828);

	this.text_3 = new cjs.Text("1850", "bold 18px Verdana");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 58;
	this.text_3.setTransform(883.4,406);

	this.text_4 = new cjs.Text("1820", "bold 18px Verdana");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(15.4,406);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_7.setTransform(476.3,436.8);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente,this.shape_7,this.text_4,this.text_3,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance_2,this.instance_1,this.instance,this.mc_boto_01,this.mc_boto_02,this.mc_boto_03,this.p_04_hito_01,this.p_04_hito_02,this.p_04_tabla_01,this.p_04_hito_03,this.btn_next,this.btn_prev,this.shape_2,this.text_2,this.shape_1,this.text_1,this.shape,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame5 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
       // Capa 1
this.text = new cjs.Text("1879", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(829.8,413.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape.setTransform(832.2,421,1.09,1.034,0,0,0,-0.1,0);

	this.text_1 = new cjs.Text("1876", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(706.1,413.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_1.setTransform(708.5,421,1.09,1.034,0,0,0,-0.1,0);

	this.text_2 = new cjs.Text("1869", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(604.2,413.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_2.setTransform(606.5,421,1.09,1.034,0,0,0,-0.1,0);

	this.text_3 = new cjs.Text("1854", "bold 16px Verdana");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 49;
	this.text_3.setTransform(170.9,413.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_3.setTransform(173.2,421,1.09,1.034,0,0,0,-0.1,0);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(24.9,465.7,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.4,465.7,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.p_05_tabla_02 = new cjs.Text("Segunda Revolución Industrial", "bold 15px Verdana");
	this.p_05_tabla_02.textAlign = "center";
	this.p_05_tabla_02.lineHeight = 17;
	this.p_05_tabla_02.lineWidth = 298;
	this.p_05_tabla_02.setTransform(756.5,458.4);

	this.p_05_tabla_01 = new cjs.Text("Primera Revolución Industrial", "bold 15px Verdana");
	this.p_05_tabla_01.textAlign = "center";
	this.p_05_tabla_01.lineHeight = 17;
	this.p_05_tabla_01.lineWidth = 559;
	this.p_05_tabla_01.setTransform(320.8,458.2);

	this.p_05_hito_04 = new cjs.Text("Bombilla \neléctrica", "bold 16px Verdana");
	this.p_05_hito_04.textAlign = "center";
	this.p_05_hito_04.lineHeight = 20;
	this.p_05_hito_04.lineWidth = 140;
	this.p_05_hito_04.setTransform(853.9,348.7);

	this.p_05_hito_03 = new cjs.Text("Teléfono", "bold 16px Verdana");
	this.p_05_hito_03.textAlign = "center";
	this.p_05_hito_03.lineHeight = 16;
	this.p_05_hito_03.lineWidth = 139;
	this.p_05_hito_03.setTransform(702.3,358.4);

	this.p_05_hito_02 = new cjs.Text("Producción de electricidad", "bold 16px Verdana");
	this.p_05_hito_02.textAlign = "center";
	this.p_05_hito_02.lineHeight = 20;
	this.p_05_hito_02.lineWidth = 140;
	this.p_05_hito_02.setTransform(553.9,348.7);

	this.p_05_hito_01 = new cjs.Text("Convertidor Bessemer", "bold 16px Verdana");
	this.p_05_hito_01.textAlign = "center";
	this.p_05_hito_01.lineHeight = 20;
	this.p_05_hito_01.lineWidth = 140;
	this.p_05_hito_01.setTransform(173.4,348.7);

if (boton == 1)
	this.mc_boto_01 = new lib.mc_01_Primera("single", 1);
    else
	this.mc_boto_01 = new lib.mc_01_Primera();
        
	this.mc_boto_01.setTransform(175.7,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 2)
	this.mc_boto_02 = new lib.mc_01_segunda("single", 1);
    else
	this.mc_boto_02 = new lib.mc_01_segunda();
	this.mc_boto_02.setTransform(556.3,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 3)
	this.mc_boto_03 = new lib.mc_01_segunda("single", 1);
    else
	this.mc_boto_03 = new lib.mc_01_segunda();
	this.mc_boto_03.setTransform(705.2,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
   if (boton == 4)
	this.mc_boto_04 = new lib.mc_01_segunda("single", 1);
    else
	this.mc_boto_04 = new lib.mc_01_segunda();
	this.mc_boto_04.setTransform(856.3,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 1) {
            this.popup = new lib.popup_zona_4_01("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 2) {
            this.popup = new lib.popup_zona_4_02("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 3) {
            this.popup = new lib.popup_zona_4_03("single", 0);
            this.addChild(this.popup);
        }
   if (boton == 4) {
            this.popup = new lib.popup_zona_4_04("single", 0);
            this.addChild(this.popup);
        }
  if (boton != 1)
            this.mc_boto_01.on("click", function (evt) {
                putStage(new lib.frame5(1));
            });
          if (boton != 2)
            this.mc_boto_02.on("click", function (evt) {
                putStage(new lib.frame5(2));
            });
          if (boton != 3)
            this.mc_boto_03.on("click", function (evt) {
                putStage(new lib.frame5(3));
            });
          if (boton != 4)
            this.mc_boto_04.on("click", function (evt) {
                putStage(new lib.frame5(4));
            });
	

	this.instance = new lib.Mapadebits22();
	this.instance.setTransform(832.2,384.5);

	this.instance_1 = new lib.Mapadebits21();
	this.instance_1.setTransform(709,384.5);

	this.instance_2 = new lib.Mapadebits20();
	this.instance_2.setTransform(606.2,381.1);

	this.instance_3 = new lib.Mapadebits19();
	this.instance_3.setTransform(172.9,381.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(833.1,485.3,1.047,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_5.setTransform(709.9,485.3,1.047,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_6.setTransform(606.9,470.5,1.047,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_7.setTransform(173.6,470.5,1.047,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9754A").s().p("A3kEaIAAo0MAvJAAAIAAI0g");
	this.shape_8.setTransform(758.2,467.1,1.002,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8BB1D8").s().p("EgsJAEaIAAo0MBYUAAAIAAI0g");
	this.shape_9.setTransform(323.8,467.1,1.002,1);

	this.text_4 = new cjs.Text("1880", "bold 18px Verdana");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 58;
	this.text_4.setTransform(882.4,406);

	this.text_5 = new cjs.Text("1850", "bold 18px Verdana");
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 55;
	this.text_5.setTransform(14.4,406);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_10.setTransform(475,436.8);


        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame6());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente,this.shape_10,this.text_5,this.text_4,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.mc_boto_02,this.mc_boto_03,this.mc_boto_01,this.mc_boto_04,this.p_05_hito_01,this.p_05_hito_02,this.p_05_hito_03,this.p_05_hito_04,this.p_05_tabla_01,this.p_05_tabla_02,this.btn_next,this.btn_prev,this.shape_3,this.text_3,this.shape_2,this.text_2,this.shape_1,this.text_1,this.shape,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
   (lib.frame6 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
       // Capa 1
this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.9,465.7,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.p_06_tabla_01 = new cjs.Text("Segunda Revolución Industrial", "bold 15px Verdana");
	this.p_06_tabla_01.textAlign = "center";
	this.p_06_tabla_01.lineHeight = 17;
	this.p_06_tabla_01.lineWidth = 302;
	this.p_06_tabla_01.setTransform(358.5,456.8);

	this.p_06_hito_04 = new cjs.Text("Ford T", "italic bold 16px Verdana");
	this.p_06_hito_04.textAlign = "center";
	this.p_06_hito_04.lineHeight = 16;
	this.p_06_hito_04.lineWidth = 139;
	this.p_06_hito_04.setTransform(833.8,355);

	this.p_06_hito_03 = new cjs.Text("Primer vuelo", "bold 16px Verdana");
	this.p_06_hito_03.textAlign = "center";
	this.p_06_hito_03.lineHeight = 16;
	this.p_06_hito_03.lineWidth = 140;
	this.p_06_hito_03.setTransform(675.4,357.1);

	this.p_06_hito_02 = new cjs.Text("Telégrafo \nsin hilos", "bold 16px Verdana");
	this.p_06_hito_02.textAlign = "center";
	this.p_06_hito_02.lineHeight = 20;
	this.p_06_hito_02.lineWidth = 140;
	this.p_06_hito_02.setTransform(518.5,349);

	this.p_06_hito_01 = new cjs.Text("Automóvil", "bold 16px Verdana");
	this.p_06_hito_01.textAlign = "center";
	this.p_06_hito_01.lineHeight = 16;
	this.p_06_hito_01.lineWidth = 140;
	this.p_06_hito_01.setTransform(200.3,357.1);

	

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(802.8,470.5,1.047,1);

	this.text = new cjs.Text("1908", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(800,413.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_1.setTransform(802.4,421,1.09,1.034,0,0,0,-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(632.3,470.5,1.047,1);

	this.text_1 = new cjs.Text("1903", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(629.6,413.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_3.setTransform(631.9,421,1.09,1.034,0,0,0,-0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(521.4,470.5,1.047,1);

	this.text_2 = new cjs.Text("1896", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(518.6,413.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_5.setTransform(521,421,1.09,1.034,0,0,0,-0.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_6.setTransform(198.5,470.5,1.047,1);

	this.text_3 = new cjs.Text("1885", "bold 16px Verdana");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 49;
	this.text_3.setTransform(195.8,413.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkGBZIAAixIINAAIAACxg");
	this.shape_7.setTransform(198.1,421,1.09,1.034,0,0,0,-0.1,0);

	this.instance = new lib.Mapadebits26();
	this.instance.setTransform(802.1,381.1);

	this.instance_1 = new lib.Mapadebits25();
	this.instance_1.setTransform(631.6,381.1);

	this.instance_2 = new lib.Mapadebits24();
	this.instance_2.setTransform(520.7,381.1);

	this.instance_3 = new lib.Mapadebits23();
	this.instance_3.setTransform(197.8,381.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9754A").s().p("EhDyAEkIAApHMCHlAAAIAAJHg");
	this.shape_8.setTransform(476.4,466.5,1.001,1,0,0,0,0,-0.1);

	this.text_4 = new cjs.Text("1910", "bold 18px Verdana");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 58;
	this.text_4.setTransform(883.4,406);

	this.text_5 = new cjs.Text("1880", "bold 18px Verdana");
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 55;
	this.text_5.setTransform(15.4,406);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_9.setTransform(476.4,436.8);

if (boton == 1)
	this.mc_boto_01 = new lib.mc_01_segunda("single", 1);
    else
	this.mc_boto_01 = new lib.mc_01_segunda();
        
	this.mc_boto_01.setTransform(175.7,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 2)
	this.mc_boto_02 = new lib.mc_01_segunda("single", 1);
    else
	this.mc_boto_02 = new lib.mc_01_segunda();
	this.mc_boto_02.setTransform(556.3,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 3)
	this.mc_boto_03 = new lib.mc_01_segunda("single", 1);
    else
	this.mc_boto_03 = new lib.mc_01_segunda();
	this.mc_boto_03.setTransform(705.2,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
   if (boton == 4)
	this.mc_boto_04 = new lib.mc_01_segunda("single", 1);
    else
	this.mc_boto_04 = new lib.mc_01_segunda();
	this.mc_boto_04.setTransform(856.3,366.5,0.9,0.9);
 new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_01_Primera(), 3);
  if (boton == 1) {
            this.popup = new lib.popup_zona_5_01("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 2) {
            this.popup = new lib.popup_zona_5_02("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 3) {
            this.popup = new lib.popup_zona_5_03("single", 0);
            this.addChild(this.popup);
        }
   if (boton == 4) {
            this.popup = new lib.popup_zona_5_04("single", 0);
            this.addChild(this.popup);
        }
  if (boton != 1)
            this.mc_boto_01.on("click", function (evt) {
                putStage(new lib.frame6(1));
            });
          if (boton != 2)
            this.mc_boto_02.on("click", function (evt) {
                putStage(new lib.frame6(2));
            });
          if (boton != 3)
            this.mc_boto_03.on("click", function (evt) {
                putStage(new lib.frame6(3));
            });
          if (boton != 4)
            this.mc_boto_04.on("click", function (evt) {
                putStage(new lib.frame6(4));
            });
	

		this.mc_boto_04.setTransform(836,366.5,0.9,0.9);

	
	this.mc_boto_03.setTransform(677.7,366.5,0.9,0.9);

	
	this.mc_boto_02.setTransform(520.8,366.5,0.9,0.9);

	
	this.mc_boto_01.setTransform(202.6,366.5,0.9,0.9);


        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame5());
        });
     
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home,this.shape_9,this.text_5,this.text_4,this.shape_8,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_7,this.text_3,this.shape_6,this.shape_5,this.text_2,this.shape_4,this.shape_3,this.text_1,this.shape_2,this.shape_1,this.text,this.shape,this.mc_boto_01,this.mc_boto_02,this.mc_boto_03,this.mc_boto_04,this.p_06_hito_01,this.p_06_hito_02,this.p_06_hito_03,this.p_06_hito_04,this.p_06_tabla_01,this.btn_prev);
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

   
   //Simbolillos
   
   (lib._0005R101 = function() {
	this.initialize(img._0005R101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1129,750);


(lib._0005R101_OPT = function() {
	this.initialize(img._0005R101_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,400);


(lib._0007OM01 = function() {
	this.initialize(img._0007OM01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,750);


(lib._0007OM01_OPT = function() {
	this.initialize(img._0007OM01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,400);


(lib._0007OM01_OPT_Min02 = function() {
	this.initialize(img._0007OM01_OPT_Min02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,80);


(lib._0009HI01 = function() {
	this.initialize(img._0009HI01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,597,750);


(lib._0009HI01_OPT = function() {
	this.initialize(img._0009HI01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,400);


(lib._0009MC01 = function() {
	this.initialize(img._0009MC01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1035,669);


(lib._0009MC01_OPT = function() {
	this.initialize(img._0009MC01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,356);


(lib._0009MC01_OPT_Min03 = function() {
	this.initialize(img._0009MC01_OPT_Min03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,80);


(lib._0009PE01 = function() {
	this.initialize(img._0009PE01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,568,750);


(lib._0009PE01_OPT = function() {
	this.initialize(img._0009PE01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,400);


(lib._000EJX01 = function() {
	this.initialize(img._000EJX01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1026,750);


(lib._000EJX01_OPT = function() {
	this.initialize(img._000EJX01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,547,400);


(lib._000F8101 = function() {
	this.initialize(img._000F8101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,555,750);


(lib._000F8101_OPT = function() {
	this.initialize(img._000F8101_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,400);


(lib._000F8101_OPT_Min05 = function() {
	this.initialize(img._000F8101_OPT_Min05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,80);


(lib._000K5O01 = function() {
	this.initialize(img._000K5O01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,750);


(lib._000K5O01_OPT = function() {
	this.initialize(img._000K5O01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,400);


(lib._000K5O01_OPT_Min01 = function() {
	this.initialize(img._000K5O01_OPT_Min01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,80);


(lib._000TT401 = function() {
	this.initialize(img._000TT401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,750);


(lib._000TWE01 = function() {
	this.initialize(img._000TWE01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1292,750);


(lib._000TWE01_OPT = function() {
	this.initialize(img._000TWE01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,530,400);


(lib._0017WS01 = function() {
	this.initialize(img._0017WS01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1090,750);


(lib._0017WS01_OPT = function() {
	this.initialize(img._0017WS01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,581,400);


(lib._001ACK01 = function() {
	this.initialize(img._001ACK01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1112,750);


(lib._001ACK01_OPT = function() {
	this.initialize(img._001ACK01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,593,400);


(lib._001ODK01_ok = function() {
	this.initialize(img._001ODK01_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,726);


(lib._1_Shutterstock_568492226 = function() {
	this.initialize(img._1_Shutterstock_568492226);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,597,750);


(lib._1_shutterstock_69287791 = function() {
	this.initialize(img._1_shutterstock_69287791);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,750);


(lib._1_shutterstock_69287791_OPT = function() {
	this.initialize(img._1_shutterstock_69287791_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib._1_shutterstock_69287791_OPT_Min04 = function() {
	this.initialize(img._1_shutterstock_69287791_OPT_Min04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib._2_98143287 = function() {
	this.initialize(img._2_98143287);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1385,750);


(lib._2_98143287_OPT = function() {
	this.initialize(img._2_98143287_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,739,400);


(lib._3_shutterstock_85905289 = function() {
	this.initialize(img._3_shutterstock_85905289);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,750);


(lib._3_shutterstock_85905289_OPT = function() {
	this.initialize(img._3_shutterstock_85905289_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,80);


(lib.Mapadebits10 = function() {
	this.initialize(img.Mapadebits10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,188);


(lib.Mapadebits11 = function() {
	this.initialize(img.Mapadebits11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,78);


(lib.Mapadebits12 = function() {
	this.initialize(img.Mapadebits12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,95);


(lib.Mapadebits13 = function() {
	this.initialize(img.Mapadebits13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,78);


(lib.Mapadebits14 = function() {
	this.initialize(img.Mapadebits14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,76);


(lib.Mapadebits15 = function() {
	this.initialize(img.Mapadebits15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,74);


(lib.Mapadebits16 = function() {
	this.initialize(img.Mapadebits16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,86);


(lib.Mapadebits17 = function() {
	this.initialize(img.Mapadebits17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,86);


(lib.Mapadebits18 = function() {
	this.initialize(img.Mapadebits18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,86);


(lib.Mapadebits19 = function() {
	this.initialize(img.Mapadebits19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,93);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,80);


(lib.Mapadebits20 = function() {
	this.initialize(img.Mapadebits20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,93);


(lib.Mapadebits21 = function() {
	this.initialize(img.Mapadebits21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,102);


(lib.Mapadebits22 = function() {
	this.initialize(img.Mapadebits22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,102);


(lib.Mapadebits23 = function() {
	this.initialize(img.Mapadebits23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,93);


(lib.Mapadebits24 = function() {
	this.initialize(img.Mapadebits24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,93);


(lib.Mapadebits25 = function() {
	this.initialize(img.Mapadebits25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,93);


(lib.Mapadebits26 = function() {
	this.initialize(img.Mapadebits26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,93);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,80);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,80);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,118);


(lib.Mapadebits7 = function() {
	this.initialize(img.Mapadebits7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,185);


(lib.Mapadebits8 = function() {
	this.initialize(img.Mapadebits8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,88);


(lib.Mapadebits9 = function() {
	this.initialize(img.Mapadebits9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,79);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.MarcaAgua = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AipD2QhNg0gghTQgVg2AAg5QABgVACgWQARhuBThIQBUhKBwAAQBvAABUBKQBUBIASBuQADAYAAATQAAA4gXA3QggBThMA0QhMA2hdAAQhdAAhMg2gAhPDYQgRANgIAMQAyAWA2AAQA2AAAzgWQgHgNgTgMQgigZgtAAQgsAAgjAZgAgxBvQg8AFg4AXQgcALgPAKQAeAoApAZQANgRAYgTQAughA2AAQA7AAAuAhQAWARALARQApgaAcglQgPgKgagKQg2gYg9gFQgVgFgeAAQgcAAgVAFgAjuBvQAGAMAEAHQANgKAZgJQBXgpBngBQBnABBZApQAYAIAOAJIAIgRQAUguAFgwIoNAAQADAuAVAwgAEFgTQAAgPgDgJQgHgtgXgoQgYAPgnAOQhRAdhUAAQhTAAhSgcQgqgOgWgPQgXAogHAsIgDAYIILAAIAAAAgAjRidQATANAjANQBJAbBSAAQBSAABHgdQAjgNATgPQgZghgvgeQgKASgWAQQgsAig7AAQg7AAgtgiQgQgKgLgOIgIgKQgsAegaAlgAhqjvIAGAHQAHAJALAGQAjAZAvAAQAwgBAhgZQAPgLAHgOQgygSg1gBQg4AAgyAXg");
	this.shape.setTransform(30,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.IMG_p5_04 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000F8101_OPT();
	this.instance.setTransform(0.4,-26.8,0.831,0.831);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,-26.8,246,332.5);


(lib.IMG_p5_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4X0IMAwvAAAMAAAAoRMgwvAAAg");
	mask.setTransform(156,128.9);

	// Capa 2
	this.instance = new lib._000TWE01_OPT();
	this.instance.setTransform(-26.6,-4.4,0.664,0.664);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.6,-4.4,352,265.7);


(lib.IMG_p5_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5N0IMAycAAAMAAAAoRMgycAAAg");
	mask.setTransform(161.5,128.9);

	// Capa 2
	this.instance = new lib._000EJX01_OPT();
	this.instance.setTransform(-24.2,-25.4,0.814,0.814);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.2,-25.4,445.3,325.6);


(lib.IMG_p5_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2j0IMAtHAAAMAAAAoRMgtHAAAg");
	mask.setTransform(144.5,128.9);

	// Capa 2
	this.instance = new lib._3_shutterstock_85905289_OPT();
	this.instance.setTransform(-28.9,-0.9,0.647,0.647);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.9,-0.9,388,258.7);


(lib.IMG_p4_04 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2Q0IMAshAAAMAAAAoRMgshAAAg");
	mask.setTransform(142.5,128.9);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.IMG_p4_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6U0IMA0pAAAMAAAAoRMg0pAAAg");
	mask.setTransform(168.5,128.9);

	// Capa 2
	this.instance = new lib._2_98143287_OPT();
	this.instance.setTransform(-57.1,-2.3,0.654,0.654);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.1,-2.3,483,261.5);


(lib.IMG_p4_02 = function() {
	this.initialize();

	// Capa 2
	this.instance = new lib._1_shutterstock_69287791_OPT();
	this.instance.setTransform(-47.6,-1.6,0.665,0.665);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.6,-1.6,266,266);


(lib.IMG_p4_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az10IMAnrAAAMAAAAoRMgnrAAAg");
	mask.setTransform(83,128.9);

	// Capa 2
	this.instance = new lib._0009HI01_OPT();
	this.instance.setTransform(-45.9,-42.9,0.811,0.811);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.9,-42.9,258,324.6);


(lib.IMG_p3_03copia = function() {
	this.initialize();

	// Capa 2
	this.instance = new lib._1_Shutterstock_568492226();
	this.instance.setTransform(27.9,-6.9,0.364,0.364);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(27.9,-6.9,217.4,273.1);


(lib.IMG_p3_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7p0IMA3TAAAMAAAAoRMg3TAAAg");
	mask.setTransform(133,128.9);

	// Capa 2
	this.instance = new lib._0017WS01_OPT();
	this.instance.setTransform(-60.1,-13.9,0.731,0.731);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.1,-13.9,425,292.6);


(lib.IMG_p3_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0009MC01_OPT();
	this.instance.setTransform(-33.9,-7.6,0.757,0.757);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.9,-7.6,418,269.6);


(lib.IMG_p2_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0005R101_OPT();
	this.instance.setTransform(-34.6,0.5,0.645,0.645);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.6,0.5,388.1,257.9);


(lib.IMG_p2_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0009PE01_OPT();
	this.instance.setTransform(-34.4,-22.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.4,-22.6,303,400);


(lib.IMG_p1_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._001ACK01_OPT();
	this.instance.setTransform(-24.1,-6.9,0.697,0.697);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-6.9,413.1,278.7);


(lib.IMG_p1_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0007OM01_OPT();
	this.instance.setTransform(-2.5,-17.6,0.845,0.845);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-17.6,251.9,338.1);


(lib.IMG_p1_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000K5O01_OPT();
	this.instance.setTransform(-18.6,-3.6,0.655,0.655);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.6,-3.6,277.2,262.2);


(lib.mc_Fundido_Int = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhJ/AvPMAAAhedMCT/AAAMAAABedg");
	this.shape.setTransform(475,304,1.003,1.005);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


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
	this.shape.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
	this.shape.setTransform(-0.4,5.1,0.673,0.673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1E120D").ss(1,0,1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
	this.shape_1.setTransform(-0.4,5.1,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]}).to({state:[{t:this.shape,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.text,p:{scaleX:1.1,scaleY:1.1,x:-4.2,y:-14.4}}]},1).to({state:[{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).to({state:[{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape_1},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-12.8,31,33.1);


(lib.btn_ampliarneg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("+", "bold 22px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 27;
	this.text.setTransform(-2.7,-12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,1).p("ADNDNQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYIAAFFQAAAZgSARg");
	this.shape.setTransform(-0.4,5.1,0.673,0.673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
	this.shape_1.setTransform(-0.4,5.1,0.673,0.673);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
	this.shape_2.setTransform(-0.4,5.1,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]}).to({state:[{t:this.shape_2,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.shape_1,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.shape,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.text,p:{scaleX:1.1,scaleY:1.1,x:-4.2,y:-14.4}}]},1).to({state:[{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).to({state:[{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-12.8,31,33.1);


(lib.btn_ampliar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("+", "bold 22px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 27;
	this.text.setTransform(-2.7,-12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1E120D").ss(1,0,1).p("ADNDNQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYIAAFFQAAAZgSARg");
	this.shape.setTransform(-0.4,5.1,0.673,0.673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
	this.shape_1.setTransform(-0.4,5.1,0.673,0.673);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1E120D").ss(1,0,1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
	this.shape_2.setTransform(-0.4,5.3,0.74,0.74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]}).to({state:[{t:this.shape_1,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.shape_2,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.text,p:{scaleX:1.1,scaleY:1.1,x:-4.2,y:-14.4}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape_2,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-12.8,31,33.1);


(lib.Boto_Navegacio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer: Arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhviXIDfCXIjfCYg");
	this.shape.setTransform(3.8,0.6,0.673,0.673,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfA6IAAhzIA/AAIAABzg");
	this.shape_1.setTransform(-6.2,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiPCpIAAlSIEfAAIAAFSg");
	this.shape_2.setTransform(4.3,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:-6.2}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,x:3.8}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.2,scaleY:1.2,x:-7.6}},{t:this.shape,p:{scaleX:0.808,scaleY:0.808,x:4.4}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:-6.2}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,x:3.8}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:-6.2}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,x:3.8}},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.6,20.9,20.6);


(lib.mc_01_segunda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6C8B7").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_01_Primera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1E0F0").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.btn_p01_Fals = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E19481").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(0,0,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.btn_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D1CA").s("#000000").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape.setTransform(87.5,9.4,1.006,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,209,202,0.502)").s("rgba(0,0,0,0.498)").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape_1.setTransform(87.5,9.4,1.006,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.1,18.7);


(lib.btn_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape.setTransform(87.5,9.4,1.006,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D1CA").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_1.setTransform(87.5,9.4,1.006,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(26,23,27,0.498)").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_2.setTransform(87.5,9.4,1.006,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,209,202,0.502)").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_3.setTransform(87.5,9.4,1.006,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.1,18.7);


(lib.btn_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape.setTransform(87.5,9.4,1.006,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AtlBdIAAi5IbLAAIAAC5g");
	this.shape_1.setTransform(87.5,9.4,1.006,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(26,23,27,0.498)").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_2.setTransform(87.5,9.4,1.006,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,209,202,0.502)").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_3.setTransform(87.5,9.4,1.006,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_4.setTransform(87.5,9.4,1.006,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_5.setTransform(87.5,9.4,1.006,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.1,18.7);


(lib.btn_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D1CA").s("#000000").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape.setTransform(87.5,9.4,1.006,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,209,202,0.498)").s("rgba(0,0,0,0.502)").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape_1.setTransform(87.5,9.4,1.006,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.1,18.7);


(lib.mc_fundido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.mc_Fundido_Int();
	this.instance.setTransform(475,304,1,1,0,0,0,475,304);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_15 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(4));
        });
	// Imatge
	this.text = new cjs.Text("Henry Ford en su primer automóvil, 1896.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 387;
	this.text.setTransform(283,523);

	this.instance = new lib._000F8101();
	this.instance.setTransform(300.5,44.3,0.626,0.626);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_14 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(3));
        });
	// Imatge
	this.text = new cjs.Text("Multiplano de los hermanos Wright, 1908.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 670;
	this.text.setTransform(80,511);

	this.instance = new lib._000TWE01();
	this.instance.setTransform(81.4,44,0.609,0.609);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_13 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(2));
        });
	// Imatge
	/*this.text = new cjs.Text("Guglielmo Marconi, inventor de la telegrafía sin hilos, en un dibujo publicado en L'Illustration en 1897.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 670;
	this.text.setTransform(178,511);*/
	
	var html = createDiv(txt['pie_foto_5'], "Verdana", "18px", '650px', '40px',"20px", "0px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(180, -105);

	this.instance = new lib._000EJX01();
	this.instance.setTransform(158.4,38.2,0.615,0.615);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_12 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(1));
        });
	// Imatge
	this.text = new cjs.Text("Coche del primer modelo fabricado por la marca Mercedes-Benz, 1886.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 670;
	this.text.setTransform(134,507);

	this.instance = new lib._3_shutterstock_85905289();
	this.instance.setTransform(135,44.3,0.604,0.604);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_5_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_06_hito_04 = new cjs.Text("Ford T", "italic bold 16px Verdana", "#FFFFFF");
	this.p_06_hito_04.textAlign = "center";
	this.p_06_hito_04.lineHeight = 16;
	this.p_06_hito_04.lineWidth = 139;
	this.p_06_hito_04.setTransform(833.3,355);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(835.5,366.5,0.9,0.9);

	this.btn_ampliar_15 = new lib.btn_ampliarneg();
	this.btn_ampliar_15.setTransform(310.6,53.5,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_15, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
this.btn_ampliar_15.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_15());
        });
	this.instance = new lib.IMG_p5_04();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.txt_popup_5_04 = new cjs.Text("\n1945 (abril-mayo)\n\nEl 29 de abril Goering y Himmler fueron expulsados del partido. Al día siguiente, y ante la proximidad de las tropas aliadas, Hitler se suicidó junto a Eva Braun y Goebbels. El 2 de mayo Berlín se rindió y los aliados entraron en la ciudad.  ", "20px Verdana");
	this.txt_popup_5_04.lineHeight = 22;
	this.txt_popup_5_04.lineWidth = 540;
	this.txt_popup_5_04.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_5_04'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_5_04 = new cjs.DOMElement(html);
        this.txt_popup_5_04.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_5_04},{t:this.instance},{t:this.btn_ampliar_15},{t:this.shape},{t:this.p_06_hito_04}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82.4,39.8,825.2,353.8);


(lib.popup_zona_5_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_06_hito_03 = new cjs.Text("Primer vuelo", "16px Verdana", "#FFFFFF");
	this.p_06_hito_03.textAlign = "center";
	this.p_06_hito_03.lineHeight = 16;
	this.p_06_hito_03.lineWidth = 140;
	this.p_06_hito_03.setTransform(675,357.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(677.2,366.5,0.9,0.9);

	this.btn_ampliar_14 = new lib.btn_ampliar();
	this.btn_ampliar_14.setTransform(374.8,54.7,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_14, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_14.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_14());
        });
	this.instance = new lib.IMG_p5_03();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.txt_popup_5_03 = new cjs.Text("\n1945 (abril-mayo)\n\nEl 29 de abril Goering y Himmler fueron expulsados del partido. Al día siguiente, y ante la proximidad de las tropas aliadas, Hitler se suicidó junto a Eva Braun y Goebbels. El 2 de mayo Berlín se rindió y los aliados entraron en la ciudad.  ", "20px Verdana");
	this.txt_popup_5_03.lineHeight = 22;
	this.txt_popup_5_03.lineWidth = 478;
	this.txt_popup_5_03.setTransform(422.6,39.8);
var html = createDiv(txt['txt_popup_5_03'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_5_03 = new cjs.DOMElement(html);
        this.txt_popup_5_03.setTransform(422, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_5_03},{t:this.instance},{t:this.btn_ampliar_14},{t:this.shape},{t:this.p_06_hito_03}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,823,353.8);


(lib.popup_zona_5_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_13 = new lib.btn_ampliar();
	this.btn_ampliar_13.setTransform(386.7,54.7,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_13, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_13.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_13());
        });
	this.instance = new lib.IMG_p5_02();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_13}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.p_06_hito_02 = new cjs.Text("Telégrafo \nsin hilos", "16px Verdana", "#FFFFFF");
	this.p_06_hito_02.textAlign = "center";
	this.p_06_hito_02.lineHeight = 20;
	this.p_06_hito_02.lineWidth = 140;
	this.p_06_hito_02.setTransform(518.1,349);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(520.3,366.5,0.9,0.9);

	this.txt_popup_5_02 = new cjs.Text("", "20px Verdana");
	this.txt_popup_5_02.lineHeight = 22;
	this.txt_popup_5_02.lineWidth = 441;
	this.txt_popup_5_02.setTransform(432,39.8);
var html = createDiv(txt['txt_popup_5_02'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_5_02 = new cjs.DOMElement(html);
        this.txt_popup_5_02.setTransform(432, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_5_02},{t:this.shape},{t:this.p_06_hito_02}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,795,356.2);


(lib.popup_zona_5_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_06_hito_01 = new cjs.Text("Automovil", "16px Verdana", "#FFFFFF");
	this.p_06_hito_01.textAlign = "center";
	this.p_06_hito_01.lineHeight = 16;
	this.p_06_hito_01.lineWidth = 140;
	this.p_06_hito_01.setTransform(199.9,357.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(202.1,366.5,0.9,0.9);

	this.btn_ampliar_12 = new lib.btn_ampliar();
	this.btn_ampliar_12.setTransform(352.4,54.7,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_12, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_12.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_12());
        });
	this.instance = new lib.IMG_p5_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.txt_popup_5_01 = new cjs.Text("", "20px Verdana");
	this.txt_popup_5_01.lineHeight = 22;
	this.txt_popup_5_01.lineWidth = 471;
	this.txt_popup_5_01.setTransform(396,39.8);
var html = createDiv(txt['txt_popup_5_01'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_5_01 = new cjs.DOMElement(html);
        this.txt_popup_5_01.setTransform(396, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_5_01},{t:this.instance},{t:this.btn_ampliar_12},{t:this.shape},{t:this.p_06_hito_01}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,789,353.8);


(lib.popup_ampliar_11 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(4));
        });
	// Imatge
	this.text = new cjs.Text("Thomas Alva Edison, inventor e industrial estadounidense.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 352;
	this.text.setTransform(324,521);

	this.instance = new lib._001ODK01_ok();
	this.instance.setTransform(323.8,44.5,0.642,0.642);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_10 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(3));
        });
	// Imatge
	this.text = new cjs.Text("Uso de los primeros teléfonos, ca. 1879.", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 720;
	this.text.setTransform(473,454);

	this.instance = new lib._2_98143287();
	this.instance.setTransform(87.4,44,0.56,0.56);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_09 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(2));
        });
	// Imatge
	this.text = new cjs.Text("Voltímetro.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 402;
	this.text.setTransform(242,519);

	this.instance = new lib._1_shutterstock_69287791();
	this.instance.setTransform(242.2,44.3,0.62,0.62);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_08 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(1));
        });
	// Imatge
	/*this.text = new cjs.Text("La fundición, de François Bonhomme, 1851.", "italic 18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 402;
	this.text.setTransform(287,519);*/
	
	var html = createDiv(txt['pie_foto_4'], "Verdana", "18px", '740px', '40px',"20px", "0px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(285, -95);

	this.instance = new lib._0009HI01();
	this.instance.setTransform(288.2,44.3,0.62,0.62);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_4_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_05_hito_04 = new cjs.Text("Bombilla eléctrica", "16px Verdana", "#FFFFFF");
	this.p_05_hito_04.textAlign = "center";
	this.p_05_hito_04.lineHeight = 20;
	this.p_05_hito_04.lineWidth = 140;
	this.p_05_hito_04.setTransform(854.5,348.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(856.8,366.5,0.9,0.9);

	this.btn_ampliar_11 = new lib.btn_ampliarneg();
	this.btn_ampliar_11.setTransform(299.8,49.7,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_11, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
this.btn_ampliar_11.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_11());
        });
	this.instance = new lib.IMG_p4_04();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.txt_popup_4_04 = new cjs.Text("1944 (octubre-febrero)\n\nEn el área del Pacífico, entre octubre y febrero, japoneses y estadounidenses lucharon durante cuatro meses por el control de Filipinas, ocupadas por Japón dos años antes. Al final, los norteamericanos arrebataron el control del archipiélago a l", "20px Verdana");
	this.txt_popup_4_04.lineHeight = 22;
	this.txt_popup_4_04.lineWidth = 492;
	this.txt_popup_4_04.setTransform(335.5,39.8);
var html = createDiv(txt['txt_popup_4_04'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_4_04 = new cjs.DOMElement(html);
        this.txt_popup_4_04.setTransform(362, 40 - 610);

	this.instance_1 = new lib._001ODK01_ok();
	this.instance_1.setTransform(143.3,38,0.369,0.369);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.txt_popup_4_04},{t:this.instance},{t:this.btn_ampliar_11},{t:this.shape},{t:this.p_05_hito_04}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(143.3,38,785.6,357.5);


(lib.popup_zona_4_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_05_hito_03 = new cjs.Text("Teléfono", "16px Verdana", "#FFFFFF");
	this.p_05_hito_03.textAlign = "center";
	this.p_05_hito_03.lineHeight = 16;
	this.p_05_hito_03.lineWidth = 139;
	this.p_05_hito_03.setTransform(702.9,358.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(705.8,366.5,0.9,0.9);

	this.btn_ampliar_10 = new lib.btn_ampliar();
	this.btn_ampliar_10.setTransform(402.3,54.7,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_10, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_10.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_10());
        });
	this.instance = new lib.IMG_p4_03();
	this.instance.setTransform(205,158.9,1,1,0,0,0,123,128.9);

	this.txt_popup_4_03 = new cjs.Text("", "20px Verdana");
	this.txt_popup_4_03.lineHeight = 22;
	this.txt_popup_4_03.lineWidth = 423;
	this.txt_popup_4_03.setTransform(432.6,39.8);
var html = createDiv(txt['txt_popup_4_03'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_4_03 = new cjs.DOMElement(html);
        this.txt_popup_4_03.setTransform(432, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_4_03},{t:this.instance},{t:this.btn_ampliar_10},{t:this.shape},{t:this.p_05_hito_03}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,30,778,363.5);


(lib.popup_zona_4_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_05_hito_02 = new cjs.Text("Producción de electricidad", "16px Verdana", "#FFFFFF");
	this.p_05_hito_02.textAlign = "center";
	this.p_05_hito_02.lineHeight = 20;
	this.p_05_hito_02.lineWidth = 140;
	this.p_05_hito_02.setTransform(554.5,348.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(556.8,366.5,0.9,0.9);

	this.btn_ampliar_09 = new lib.btn_ampliarneg();
	this.btn_ampliar_09.setTransform(319.9,51.6,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_09, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
this.btn_ampliar_09.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_09());
        });
	this.txt_popup_4_02 = new cjs.Text("1944 (junio)\n\nEl 6 de junio, conocido como el día D, comenzó la operación Overlord. Las tropas aliadas, bajo el mando del general Eisenhower, desembarcaron en las costas francesas de Normandía. Con ello se abría un segundo frente a los alemanes.", "20px Verdana");
	this.txt_popup_4_02.lineHeight = 22;
	this.txt_popup_4_02.lineWidth = 528;
	this.txt_popup_4_02.setTransform(361,39.8);
var html = createDiv(txt['txt_popup_4_02'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_4_02 = new cjs.DOMElement(html);
        this.txt_popup_4_02.setTransform(362, 40 - 610);

	this.instance = new lib.IMG_p4_02();
	this.instance.setTransform(242,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup_4_02},{t:this.btn_ampliar_09},{t:this.shape},{t:this.p_05_hito_02}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.4,38.4,821.6,357.2);


(lib.popup_zona_4_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_05_hito_01 = new cjs.Text("Convertidor Bessemer", "16px Verdana", "#FFFFFF");
	this.p_05_hito_01.textAlign = "center";
	this.p_05_hito_01.lineHeight = 20;
	this.p_05_hito_01.lineWidth = 140;
	this.p_05_hito_01.setTransform(174,348.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(176.2,366.5,0.9,0.9);

	this.btn_ampliar_08 = new lib.btn_ampliarneg();
	this.btn_ampliar_08.setTransform(318.7,54.7,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_08, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
this.btn_ampliar_08.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_08());
        });
	this.txt_popup_4_01 = new cjs.Text("1944 (junio)\n\nEl 6 de junio, conocido como el día D, comenzó la operación Overlord. Las tropas aliadas, bajo el mando del general Eisenhower, desembarcaron en las costas francesas de Normandía. Con ello se abría un segundo frente a los alemanes.", "20px Verdana");
	this.txt_popup_4_01.lineHeight = 22;
	this.txt_popup_4_01.lineWidth = 427;
	this.txt_popup_4_01.setTransform(365,39.8);
var html = createDiv(txt['txt_popup_4_01'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_4_01 = new cjs.DOMElement(html);
        this.txt_popup_4_01.setTransform(362, 40 - 610);

	this.instance = new lib.IMG_p4_01();
	this.instance.setTransform(126,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup_4_01},{t:this.btn_ampliar_08},{t:this.shape},{t:this.p_05_hito_01}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,714,355.8);


(lib.popup_ampliar_07_2 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(3));
        });
	// Imatge
	/*this.text = new cjs.Text("Las actas de cercamiento (Enclosure Acts) provocaron la transferencia de los terrenos comunales a manos de los terratenientes.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 400;
	this.text.setTransform(282,516);*/
	
	var html = createDiv(txt['pie_foto_3'], "Verdana", "18px", '390px', '40px',"20px", "0px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(285, -95);

	this.instance = new lib._1_Shutterstock_568492226();
	this.instance.setTransform(285.9,43.1,0.627,0.627);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_07 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(2));
        });
	// Imatge
	/*this.text = new cjs.Text("Vagón de tercera clase, s. XIX, de Honoré Daumier (Walters Art Museum, Baltimore, Estados Unidos).", "italic 18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 676;
	this.text.setTransform(137,516);*/
	
	var html = createDiv(txt['pie_foto_2'], "Verdana", "18px", '740px', '40px',"20px", "0px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(135, -100);

	this.instance = new lib._0017WS01();
	this.instance.setTransform(139.1,44.4,0.616,0.616);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_06 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(1));
        });
	// Imatge
	this.text = new cjs.Text("Inauguración de la línea férrea Londres-Brighton, 1840 (Reino Unido).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 676;
	this.text.setTransform(111,522);

	this.instance = new lib._0009MC01();
	this.instance.setTransform(112.6,44.2,0.699,0.699);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_3_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.p_04_hito_03 = new cjs.Text("Enclosure Acts", "italic bold 16px Verdana", "#FFFFFF");
	this.p_04_hito_03.textAlign = "center";
	this.p_04_hito_03.lineHeight = 18;
	this.p_04_hito_03.lineWidth = 127;
	this.p_04_hito_03.setTransform(759.6,342.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(761.9,366.5,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.p_04_hito_03}]}).to({state:[]},1).wait(1));

	// PopUp
	this.btn_ampliar_07_2 = new lib.btn_ampliar();
	this.btn_ampliar_07_2.setTransform(300,47.6,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_07_2, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_07_2.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_07_2());
        });
	this.instance = new lib.IMG_p3_03copia();
	this.instance.setTransform(198,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_07_2}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.txt_popup_3_03 = new cjs.Text("1845\n\nLa promulgación de las Enclosure Acts acabó con los antiguos derechos de explotación de las tierras comunales. Los campos se cercaron y las nuevas parcelas pasaron a ser de propiedad privada. Con ello se logró mejorar la productividad de los campos británicos.", "bold 20px Verdana");
	this.txt_popup_3_03.lineHeight = 22;
	this.txt_popup_3_03.lineWidth = 428;
	this.txt_popup_3_03.setTransform(373.3,33);
var html = createDiv(txt['txt_popup_3_03'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_3_03 = new cjs.DOMElement(html);
        this.txt_popup_3_03.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_3_03}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.2,33,691.9,360.5);


(lib.popup_zona_3_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_04_hito_02 = new cjs.Text("Primer tren de pasajeros", "bold 16px Verdana", "#FFFFFF");
	this.p_04_hito_02.textAlign = "center";
	this.p_04_hito_02.lineHeight = 20;
	this.p_04_hito_02.lineWidth = 127;
	this.p_04_hito_02.setTransform(349.5,347.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(351.8,366.5,0.9,0.9);

	this.btn_ampliar_07 = new lib.btn_ampliarneg();
	this.btn_ampliar_07.setTransform(417.9,54.1,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_07, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
this.btn_ampliar_07.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_07());
        });
	this.instance = new lib.IMG_p3_02();
	this.instance.setTransform(249,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_07},{t:this.shape},{t:this.p_04_hito_02}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.txt_popup_3_02 = new cjs.Text("1943 (noviembre-diciembre)\n\nEntre el 28 de noviembre y el 1 de diciembre tuvo lugar la conferencia de Teherán. Churchill, Stalin y Roosevelt acordaron realizar un desembarco aliado en el norte de Francia y continuar con la presión soviética en el este. ", "20px Verdana");
	this.txt_popup_3_02.lineHeight = 22;
	this.txt_popup_3_02.lineWidth = 463;
	this.txt_popup_3_02.setTransform(460,39.8);
var html = createDiv(txt['txt_popup_3_02'], "Verdana", "20px", '460px', '10px', "20px", "185px", "left");
        this.txt_popup_3_02 = new cjs.DOMElement(html);
        this.txt_popup_3_02.setTransform(460, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_3_02}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,844.9,354.9);


(lib.popup_zona_3_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_06 = new lib.btn_ampliar();
	this.btn_ampliar_06.setTransform(310.6,53.5,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_06, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_06.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_06());
        });
	this.instance = new lib.IMG_p3_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_06}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.p_04_hito_01 = new cjs.Text("Locomotora de Stephenson", "bold 16px Verdana", "#FFFFFF");
	this.p_04_hito_01.textAlign = "center";
	this.p_04_hito_01.lineHeight = 20;
	this.p_04_hito_01.lineWidth = 141;
	this.p_04_hito_01.setTransform(172.5,347.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(174.7,366.5,0.9,0.9);

	this.txt_popup_3_01 = new cjs.Text("1942-1943\n\nEn el invierno de 1942-1943, las tropas alemanas quedaron cercadas en Stalingrado (actual Volgogrado) por las tropas soviéticas. Los alemanes, incapaces de romper el cerco, fueron derrotados en febrero. La batalla de Stalingrado marcó un punto de inflexión en el avance aliado hacia la victoria.", "20px Verdana");
	this.txt_popup_3_01.lineHeight = 22;
	this.txt_popup_3_01.lineWidth = 487;
	this.txt_popup_3_01.setTransform(367,39.8);
var html = createDiv(txt['txt_popup_3_01'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_3_01 = new cjs.DOMElement(html);
        this.txt_popup_3_01.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_3_01},{t:this.shape},{t:this.p_04_hito_01}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,776,354.8);


(lib.popup_ampliar_05 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame3(2));
        });
	// Imatge
	/*this.text = new cjs.Text("Barco Delta Queen en el río Mississippi (Estados Unidos).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 552;
	this.text.setTransform(133,508);*/
	
	var html = createDiv(txt['pie_foto_1'], "Verdana", "18px", '770px', '40px',"20px", "0px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(135, -105);

	this.instance = new lib._0005R101();
	this.instance.setTransform(133.8,44.5,0.605,0.605);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_04 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame3(1));
        });
	// Imatge
	this.text = new cjs.Text("Thomas Robert Malthus, economista británico.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 424;
	this.text.setTransform(263,522);

	this.instance = new lib._0009PE01();
	this.instance.setTransform(296.5,44.5,0.623,0.623);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_2_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.p_03_hito_02 = new cjs.Text("Barco\nde vapor", "bold 16px Verdana", "#FFFFFF");
	this.p_03_hito_02.textAlign = "center";
	this.p_03_hito_02.lineHeight = 18;
	this.p_03_hito_02.lineWidth = 129;
	this.p_03_hito_02.setTransform(624.1,343.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(626.5,367.3,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.p_03_hito_02}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.btn_ampliar_05 = new lib.btn_ampliar();
	this.btn_ampliar_05.setTransform(310.6,54.1,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_05, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_05.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_05());
        });
	this.txt_popup_2_02 = new cjs.Text("1941 (diciembre)\n\nEl 7 de diciembre, submarinos y aviones nipones destruyeron el grueso de la flota norteamericana concentrada en la base naval de Pearl Habor (Hawai). En respuesta, el Congreso de EUA declaró la guerra a Japón y, poco después, a Alemania e Italia.", "20px Verdana");
	this.txt_popup_2_02.lineHeight = 22;
	this.txt_popup_2_02.lineWidth = 484;
	this.txt_popup_2_02.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_2_02'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_2_02 = new cjs.DOMElement(html);
        this.txt_popup_2_02.setTransform(362, 40 - 610);

	this.instance = new lib.IMG_p2_02();
	this.instance.setTransform(206,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup_2_02},{t:this.btn_ampliar_05}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83,39.8,768,354.3);


(lib.popup_zona_2_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_04 = new lib.btn_ampliar();
	this.btn_ampliar_04.setTransform(311.2,53.5,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_04, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_04.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_04());
        });
	this.instance = new lib.IMG_p2_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_04}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.p_03_hito_01 = new cjs.Text("Robert Malthus", "bold 16px Verdana", "#FFFFFF");
	this.p_03_hito_01.textAlign = "center";
	this.p_03_hito_01.lineHeight = 18;
	this.p_03_hito_01.lineWidth = 106;
	this.p_03_hito_01.setTransform(286,343.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(288.6,367.3,0.89,0.89);

	this.txt_popup_2_01 = new cjs.Text("1941 (junio)\n\nEl 22 de junio Alemania puso en marcha la Operación Barbarroja. Sin declaración de guerra previa, e incumpliendo el pacto Ribbentrop-Mólotov (1939), Hitler ordenó la invasión de la URSS.", "20px Verdana");
	this.txt_popup_2_01.lineHeight = 22;
	this.txt_popup_2_01.lineWidth = 472;
	this.txt_popup_2_01.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_2_01'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_2_01 = new cjs.DOMElement(html);
        this.txt_popup_2_01.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_2_01},{t:this.shape},{t:this.p_03_hito_01}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,757,355.3);


(lib.popup_ampliar_03 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame2(3));
        });
	// Imatge
	this.text = new cjs.Text("Planta de patronaje del interior de una fábrica textil italiana de mediados del siglo XIX.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 681;
	this.text.setTransform(129,517);

	this.instance = new lib._001ACK01();
	this.instance.setTransform(130.6,44.2,0.617,0.617);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_02 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame2(2));
        });
	// Imatge
	this.text = new cjs.Text("Adam Smith, economista británico. Se le considera el padre del liberalismo económico.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 362;
	this.text.setTransform(298,524);

	this.instance = new lib._0007OM01();
	this.instance.setTransform(299.6,44.2,0.627,0.627);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_01 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame2(1));
        });
	// Imatge
	this.text = new cjs.Text("James Watt mejoró la máquina de vapor incorporándole un sistema de condensación del vapor separado del cilindro.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 518;
	this.text.setTransform(222,528);

	this.instance = new lib._000K5O01();
	this.instance.setTransform(223.5,44.5,0.632,0.632);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_1_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.p_02_hito_03 = new cjs.Text("Telar mecánico", "bold 16px Verdana", "#FFFFFF");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 18;
	this.p_02_hito_03.lineWidth = 130;
	this.p_02_hito_03.setTransform(785.2,344);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(786.9,367.3,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.p_02_hito_03}]}).to({state:[]},1).wait(1));

	// PopUp
	this.btn_ampliar_03 = new lib.btn_ampliar();
	this.btn_ampliar_03.setTransform(310.6,52.8,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_03, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_03.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_03());
        });
	this.instance = new lib.IMG_p1_03();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_03}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.txt_popup_1_03 = new cjs.Text("\n1940 (agosto-octubre)\n\nEntre agosto y octubre de 1940 tuvo lugar la batalla de Inglaterra. Las fuerzas aéreas de la RAF británica y la Luftwaffe alemana se enfrentaron en los cielos del Reino Unido. A pesar de los continuos ataques alemanes, los británicos lograron resistir. ", "20px Verdana");
	this.txt_popup_1_03.lineHeight = 22;
	this.txt_popup_1_03.lineWidth = 477;
	this.txt_popup_1_03.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_1_03'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_1_03 = new cjs.DOMElement(html);
        this.txt_popup_1_03.setTransform(362, 40 - 610);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_1_03}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,776.3,354.3);


(lib.popup_zona_1_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.p_02_hito_02 = new cjs.Text("La riqueza de las naciones", "italic bold 16px Verdana", "#FFFFFF");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 18;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(560.5,343.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(562.7,366.3,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.p_02_hito_02}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.btn_ampliar_02 = new lib.btn_ampliar();
	this.btn_ampliar_02.setTransform(310.7,54.6,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_02, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_02.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_02());
        });
	this.txt_popup_1_02 = new cjs.Text("\n1940 (mayo-junio)\n\nEntre el 10 de mayo y el 24 de junio, los ejércitos alemanes emprendieron la conquista de Europa occidental. En mayo cayeron los Países Bajos y Bélgica y en junio Francia, que quedó dividida en una zona ocupada (norte) y otra bajo el régimen fascista de Vichy.", "20px Verdana");
	this.txt_popup_1_02.lineHeight = 22;
	this.txt_popup_1_02.lineWidth = 491;
	this.txt_popup_1_02.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_1_02'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_1_02 = new cjs.DOMElement(html);
        this.txt_popup_1_02.setTransform(362, 40 - 610);
	this.instance = new lib.IMG_p1_02();
	this.instance.setTransform(82,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup_1_02},{t:this.btn_ampliar_02}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,776,353.3);


(lib.popup_zona_1_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_01 = new lib.btn_ampliar();
	this.btn_ampliar_01.setTransform(310.8,51.6,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_01());
        });
	this.instance = new lib.IMG_p1_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_01}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.p_02_hito_01 = new cjs.Text("Maquina de vapor", "bold 16px Verdana", "#FFFFFF");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 18;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(278.6,344.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(280.2,367.3,0.89,0.89);

	this.txt_popup_1_01 = new cjs.Text("1902\n\nFinalizó la construcción del Flatiron Building, un rascacielos diseñado por el arquitecto Daniel H. Burnham (Escuela de Chicago). El edificio neoyorquino surgió en el contexto del gran crecimiento urbano, ligado al crecimiento económico, de principios del siglo XX.", "20px Verdana");
	this.txt_popup_1_01.lineHeight = 22;
	this.txt_popup_1_01.lineWidth = 540;
	this.txt_popup_1_01.setTransform(362.6,39.8);
        var html = createDiv(txt['txt_popup_1_01'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_1_01 = new cjs.DOMElement(html);
        this.txt_popup_1_01.setTransform(362, 40 - 610);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_1_01},{t:this.shape},{t:this.p_02_hito_01}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,824.7,354.3);

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