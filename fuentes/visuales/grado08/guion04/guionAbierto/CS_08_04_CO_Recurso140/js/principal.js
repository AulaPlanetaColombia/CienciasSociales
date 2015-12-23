
(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
        titulo1(this, txt['titol']);

	this.btn_04 = new lib.btn_02();
	this.btn_04.setTransform(810,482.6,1.167,1.294);
	new cjs.ButtonHelper(this.btn_04, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_03 = new lib.btn_01();
	this.btn_03.setTransform(592.4,482.6,1.318,1.294);
	new cjs.ButtonHelper(this.btn_03, 0, 1, 2, false, new lib.btn_01(), 3);

	this.btn_02 = new lib.btn_02();
	this.btn_02.setTransform(361.6,482.6,1.332,1.294);
	new cjs.ButtonHelper(this.btn_02, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_01 = new lib.btn_01();
	this.btn_01.setTransform(142.5,482.6,1.187,1.294);
	new cjs.ButtonHelper(this.btn_01, 0, 1, 2, false, new lib.btn_01(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#000000").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape.setTransform(809.6,482.6,1.162,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D1CA").s("#000000").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape_1.setTransform(143.1,482.6,1.167,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_2.setTransform(592.4,482.6,1.319,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3D1CA").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_3.setTransform(592.4,482.6,1.319,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_4.setTransform(361.1,482.6,1.325,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AtlBdIAAi5IbLAAIAAC5g");
	this.shape_5.setTransform(361.1,482.6,1.325,1);

	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(826.4,274.1);

	this.text = new cjs.Text("", "bold 14px Verdana");
	this.text.textAlign = "right";
	this.text.lineHeight = 14;
	this.text.lineWidth = 102;
	this.text.setTransform(816.7,279.6);
var html = createDiv(txt['p_01_hito_05'], "Verdana", "14px", '115px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.text= new cjs.DOMElement(html);
        this.text.setTransform(816-115 , 291 - 610);
        
	this.text_1 = new cjs.Text("", "bold 14px Verdana");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 111;
	this.text_1.setTransform(670.7,120.6);
var html = createDiv(txt['p_01_hito_04'], "Verdana", "14px", '115px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_1= new cjs.DOMElement(html);
        this.text_1.setTransform(670 , 133 - 610);
        
	this.text_2 = new cjs.Text("", "bold 14px Verdana");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 107;
	this.text_2.setTransform(437.5,295.5);
var html = createDiv(txt['p_01_hito_03'], "Verdana", "14px", '115px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_2= new cjs.DOMElement(html);
        this.text_2.setTransform(437 , 307 - 610);
        
	this.text_3 = new cjs.Text("", "bold 14px Verdana");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 12;
	this.text_3.lineWidth = 160;
	this.text_3.setTransform(211,142.5);
var html = createDiv(txt['p_01_hito_02'], "Verdana", "14px", '115px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.text_3= new cjs.DOMElement(html);
        this.text_3.setTransform(211-115 , 149 - 610);


	this.text_4 = new cjs.Text("", "bold 14px Verdana");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 14;
	this.text_4.lineWidth = 80;
	this.text_4.setTransform(108.3,293.9);
 var html = createDiv(txt['p_01_hito_01'], "Verdana", "14px", '115px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.text_4= new cjs.DOMElement(html);
        this.text_4.setTransform(108-115 , 307 - 610);

	
	this.text_6 = new cjs.Text("Selecciona en la línea de la cronología un período de tiempo", "16px Arial");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 372;
	this.text_6.setTransform(473,542);

	this.instance_1 = new lib.Mapadebits10();
	this.instance_1.setTransform(202.4,294.4);

	this.instance_2 = new lib.Mapadebits9();
	this.instance_2.setTransform(242.6,196.4);

	this.instance_3 = new lib.Mapadebits8();
	this.instance_3.setTransform(367.4,294.4);

	this.instance_4 = new lib.Mapadebits7();
	this.instance_4.setTransform(574.6,168.5);

	this.instance_5 = new lib.Mapadebits6();
	this.instance_5.setTransform(866.8,346.4);

	this.instance_6 = new lib.Mapadebits4();
	this.instance_6.setTransform(558,115.8);

	this.instance_7 = new lib.Mapadebits3();
	this.instance_7.setTransform(361.7,291.5);

	this.instance_8 = new lib.Mapadebits2();
	this.instance_8.setTransform(117.8,289.4);

	this.instance_9 = new lib.Mapadebits1();
	this.instance_9.setTransform(221.2,138.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_6.setTransform(370.7,422.8,1.047,1);

	this.text_7 = new cjs.Text("Revoluciones liberales", "bold 14px Arial");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 16;
	this.text_7.lineWidth = 223;
	this.text_7.setTransform(473.7,416);

	this.text_8 = new cjs.Text("Unificaciones nacionales", "bold 14px Arial");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 16;
	this.text_8.lineWidth = 317;
	this.text_8.setTransform(747.1,416.7);

	this.text_9 = new cjs.Text("Restauración", "bold 14px Arial");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 16;
	this.text_9.lineWidth = 115;
	this.text_9.setTransform(300,404.5);

	this.text_10 = new cjs.Text("Imperio napoleónico", "bold 14px Arial");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 16;
	this.text_10.lineWidth = 141;
	this.text_10.setTransform(119.5,405.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_7.setTransform(575.5,423.2,1.047,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_8.setTransform(867.7,423.2,1.047,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_9.setTransform(244.3,412.9,1.047,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_10.setTransform(205.7,422.8,1.047,1);

	this.text_11 = new cjs.Text("1875", "bold 16px Arial");
	this.text_11.lineHeight = 18;
	this.text_11.lineWidth = 55;
	this.text_11.setTransform(882.7,495.6);

	this.text_12 = new cjs.Text("1860", "bold 16px Arial");
	this.text_12.lineHeight = 18;
	this.text_12.lineWidth = 55;
	this.text_12.setTransform(682.2,495.6);

	this.text_13 = new cjs.Text("1840", "bold 16px Arial");
	this.text_13.lineHeight = 18;
	this.text_13.lineWidth = 55;
	this.text_13.setTransform(451.5,495.6);

	this.text_14 = new cjs.Text("1820", "bold 16px Arial");
	this.text_14.lineHeight = 18;
	this.text_14.lineWidth = 55;
	this.text_14.setTransform(217.8,495.6);

	this.text_15 = new cjs.Text("1804", "bold 16px Arial");
	this.text_15.lineHeight = 18;
	this.text_15.lineWidth = 55;
	this.text_15.setTransform(17.5,495.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4B06D").s().p("A3jCdIAAk5MAvHAAAIAAE5g");
	this.shape_11.setTransform(749.9,425.7,1.06,1.727);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E9754A").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_12.setTransform(124.8,425.9,0.414,1.727);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C398BF").s().p("A98EPIAAodMA75AAAIAAIdg");
	this.shape_13.setTransform(304.1,439.3,0.302,0.5,0,0,0,0.2,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8FBF67").s().p("A98EPIAAodMA75AAAIAAIdg");
	this.shape_14.setTransform(284.3,425.7,0.405,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C398BF").s().p("A98EPIAAodMA75AAAIAAIdg");
	this.shape_15.setTransform(476.2,425.8,0.596,1,0,0,0,0.1,0.2);
        

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
       


        this.addChild(this.logo, this.titulo,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.text_15,this.text_14,this.text_13,this.text_12,this.text_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.text_10,this.text_9,this.text_8,this.text_7,this.shape_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.instance,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.btn_01,this.btn_02,this.btn_03,this.btn_04,this.instance_9,this.instance_8,this.instance_7,this.instance_6);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,465,0.862,1.49);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	

	this.text = new cjs.Text("Batalla de Waterloo", "bold 16px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 121;
	this.text.setTransform(628.2,349.1);

	this.text_1 = new cjs.Text("Congreso de Viena", "bold 16px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 121;
	this.text_1.setTransform(848.2,349.1);

	this.text_2 = new cjs.Text("Batalla de Trafalgar", "bold 16px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 121;
	this.text_2.setTransform(255.2,349.1);

	this.text_3 = new cjs.Text("Napoleón, emperador", "bold 16px Arial");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 121;
	this.text_3.setTransform(99.2,349.1);

	
  if (boton == 1)
            this.mc_boto_01 = new lib.mc_naranja("single", 1);
        else
            this.mc_boto_01 = new lib.mc_naranja();

        this.mc_boto_01.setTransform(101.5,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_naranja(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_naranja("single", 1);
        else
            this.mc_boto_02 = new lib.mc_naranja();
        this.mc_boto_02.setTransform(256.8,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_naranja(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_verde("single", 1);
        else
            this.mc_boto_03 = new lib.mc_verde();
        this.mc_boto_03.setTransform(849.3,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_verde(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_verde("single", 1);
        else
            this.mc_boto_04 = new lib.mc_verde();
        this.mc_boto_04.setTransform(629.1,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_verde(), 3);
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
        if (boton == 4) {
            this.popup = new lib.popup_zona_1_04("single", 0);
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
        if (boton != 4)
            this.mc_boto_04.on("click", function (evt) {
                putStage(new lib.frame2(4));
            });


	this.instance = new lib.Mapadebits13();
	this.instance.setTransform(633,383.2);

	this.text_4 = new cjs.Text("Restauración ", "bold 14px Arial");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 16;
	this.text_4.lineWidth = 195;
	this.text_4.setTransform(778.3,455.7);

	this.text_5 = new cjs.Text("Imperio napoleónico", "bold 14px Arial");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 16;
	this.text_5.lineWidth = 265;
	this.text_5.setTransform(339.5,454.9);

	this.text_6 = new cjs.Text("1815", "bold 16px Arial");
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 49;
	this.text_6.setTransform(605.9,415);

	this.text_7 = new cjs.Text("1805", "bold  16px Arial");
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 49;
	this.text_7.setTransform(74.9,415);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape.setTransform(476.3,436.8);

	this.text_8 = new cjs.Text("1820", "bold 18px Arial");
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 58;
	this.text_8.setTransform(883.4,413);

	this.text_9 = new cjs.Text("1804", "bold  18px Arial");
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 55;
	this.text_9.setTransform(15.1,413);

	this.instance_1 = new lib.Mapadebits12();
	this.instance_1.setTransform(85.9,386.5);

	this.instance_2 = new lib.Mapadebits11();
	this.instance_2.setTransform(44,383.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(634,467.2,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(86.8,467.2,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(45,467.2,1.047,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8FBF67").s().p("AkWCdIAAk5IIsAAIAAE5g");
	this.shape_4.setTransform(771.7,465.7,4.929,1.727);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9754A").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_5.setTransform(338.8,465.9,1.487,1.727);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EAoeAB2IAAjoIINAAIAADogEgwqABmIAAjbIM7AAIAADbg");
	this.shape_6.setTransform(346.8,426.6);

        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.instance_2,this.instance_1,this.text_9,this.text_8,this.shape,this.text_7,this.text_6,this.text_5,this.text_4,this.instance,this.mc_boto_03,this.mc_boto_02,this.mc_boto_01,this.mc_boto_04,this.text_3,this.text_2,this.text_1,this.text,this.btn_zona_1_01,this.btn_zona_1_02,this.btn_zona_1_03,this.btn_zona_1_04,this.btn_next);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);

this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.4,466,0.862,1.49);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(24.9,465.1,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.text = new cjs.Text("Revoluciones liberales", " bold 14px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 861;
	this.text.setTransform(473.2,471.5);

	this.text_1 = new cjs.Text("Restauración", " bold 14px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 448;
	this.text_1.setTransform(265.3,445.5);

	this.text_2 = new cjs.Text("Independencia de Bélgica", "bold 16px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 141;
	this.text_2.setTransform(621.4,344.9+incremento);

	this.text_3 = new cjs.Text("Revolución francesa de 1830", "bold 16px Arial");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 159;
	this.text_3.setTransform(447,344.9+incremento);

	this.text_4 = new cjs.Text("Independencia de Grecia", "bold 16px Arial");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 121;
	this.text_4.setTransform(158,345.9+incremento);

	this.text_5 = new cjs.Text("Zollverein", "bold 16px Arial");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 115;
	this.text_5.setTransform(783.2,357);

	


  if (boton == 1)
            this.mc_boto_01 = new lib.mc_Lila("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Lila();

        this.mc_boto_01.setTransform(158.7,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Lila(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Lila("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Lila();
        this.mc_boto_02.setTransform(448,367.4,1.05,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Lila(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Lila("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Lila();
        this.mc_boto_03.setTransform(623.6,367.4,1,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Lila(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Lila("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Lila();
        this.mc_boto_04.setTransform(786.6,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Lila(), 3);
        if (boton == 1) {
            this.popup = new lib.popup_zona_2_01("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 2) {
            this.popup = new lib.popup_zona_2_02("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 3) {
            this.popup = new lib.popup_zona_2_03("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 4) {
            this.popup = new lib.popup_zona_2_04("single", 0);
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
        if (boton != 3)
            this.mc_boto_03.on("click", function (evt) {
                putStage(new lib.frame3(3));
            });
        if (boton != 4)
            this.mc_boto_04.on("click", function (evt) {
                putStage(new lib.frame3(4));
            });


	this.text_6 = new cjs.Text("1831", "bold 16px Arial");
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 49;
	this.text_6.setTransform(518.2,415);

	this.text_7 = new cjs.Text("1834", "bold 16px Arial");
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 49;
	this.text_7.setTransform(639.6,414.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape.setTransform(475.4,436.8,1,1,0,0,180);

	this.text_8 = new cjs.Text("1840", "bold 18px Arial");
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 58;
	this.text_8.setTransform(882.4,413);

	this.text_9 = new cjs.Text("1830", "bold 16px Arial");
	this.text_9.lineHeight = 18;
	this.text_9.lineWidth = 49;
	this.text_9.setTransform(469.2,415);

	this.text_10 = new cjs.Text("1822", "bold 16px Arial");
	this.text_10.lineHeight = 18;
	this.text_10.lineWidth = 49;
	this.text_10.setTransform(132.5,415);

	this.text_11 = new cjs.Text("1820", "bold 18px Arial");
	this.text_11.lineHeight = 20;
	this.text_11.lineWidth = 55;
	this.text_11.setTransform(14.4,413);

	this.instance = new lib.Mapadebits17();
	this.instance.setTransform(663.2,389.2);

	this.instance_1 = new lib.Mapadebits16();
	this.instance_1.setTransform(535.5,380);

	this.instance_2 = new lib.Mapadebits15();
	this.instance_2.setTransform(494.6,369.4);

	this.instance_3 = new lib.Mapadebits14();
	this.instance_3.setTransform(156,391);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(666.7,466,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(536.7,464.9,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(496.7,454.4,1.047,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(157,479.8,1.047,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C398BF").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_5.setTransform(273.6,479.6,1.165,0.858);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C398BF").s().p("AkWCdIAAk5IIsAAIAAE5g");
	this.shape_6.setTransform(702.5,465.7,7.377,1.727);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8FBF67").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_7.setTransform(269.3,465.9,1.143,1.727);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AHlBuIAAjRMAlgAAAIAADRgEgtEABuIAAjbII8AAIAADbg");
	this.shape_8.setTransform(414.7,425.8);
        
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame2());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text_11,this.text_10,this.text_9,this.text_8,this.shape,this.text_7,this.text_6,this.mc_boto_02,this.mc_boto_01,this.mc_boto_03,this.mc_boto_04,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.btn_zona_2_01,this.btn_zona_2_02,this.btn_zona_2_03,this.btn_zona_2_04,this.btn_prev,this.btn_next);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame4 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        // Capa 1
this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.4,467,0.862,1.49);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(24.9,466.1,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);



	this.text = new cjs.Text("Unificaciones nacionales", "bold 14px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 429;
	this.text.setTransform(689.1,457.2);

	this.text_1 = new cjs.Text("Revoluciones liberales", "bold 14px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 428;
	this.text_1.setTransform(255.6,457.2);

	this.text_2 = new cjs.Text("Napoleón III", "bold 16px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 137;
	this.text_2.setTransform(722.2,353.8);


	this.text_3 = new cjs.Text("Fin de la revolución húngara", "bold 16px Arial");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 175;
	this.text_3.setTransform(516.8,348.2);


	this.text_4 = new cjs.Text("Primavera de los pueblos", "bold 16px Arial");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 137;
	this.text_4.setTransform(333,344.8+incremento);

	

  if (boton == 1)
            this.mc_boto_01 = new lib.mc_Lila("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Lila();

        this.mc_boto_01.setTransform(332.2,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Lila(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Lila("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Lila();
        this.mc_boto_02.setTransform(518.9,367.4,1.2,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Lila(), 3);

        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Crema("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Crema();
        this.mc_boto_03.setTransform(724.1,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Crema(), 3);


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
        
	this.text_5 = new cjs.Text("1852", "bold 16px Arial");
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 49;
	this.text_5.setTransform(543.9,415);

	this.text_6 = new cjs.Text("1849", "bold 16px Arial");
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 49;
	this.text_6.setTransform(413.9,415);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape.setTransform(475.4,436.8,1,1,0,0,180);

	this.text_7 = new cjs.Text("1860", "bold 18px Arial");
	this.text_7.lineHeight = 20;
	this.text_7.lineWidth = 58;
	this.text_7.setTransform(882.4,413);

	this.text_8 = new cjs.Text("1848", "bold 16px Arial");
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 49;
	this.text_8.setTransform(363.9,415);

	this.text_9 = new cjs.Text("1840", "bold 18px Arial");
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 55;
	this.text_9.setTransform(14.4,413);

	this.instance = new lib.Mapadebits20();
	this.instance.setTransform(567,393.1);

	this.instance_1 = new lib.Mapadebits19();
	this.instance_1.setTransform(439,345.5);

	this.instance_2 = new lib.Mapadebits18();
	this.instance_2.setTransform(389,345.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAfQgOgNAAgSIABgIQADgNAKgKQANgNARABQASgBAOANQAJAKACANIABAIQAAASgMANQgOAOgSAAQgRAAgNgOg");
	this.shape_1.setTransform(569.9,464.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(439.9,464.7,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(389.9,464.7,1.047,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4B06D").s().p("AkWCdIAAk5IIsAAIAAE5g");
	this.shape_4.setTransform(691.3,465.7,7.777,1.727);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C398BF").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_5.setTransform(258.2,465.9,1.087,1.727);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AJ9B1IAAjpIINAAIAADpgAyJB1IAAjpIQBAAIAADpg");
	this.shape_6.setTransform(480.1,426.7);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.instance_2,this.instance_1,this.instance,this.text_9,this.text_8,this.text_7,this.shape,this.text_6,this.text_5,this.mc_boto_01,this.text_4,this.mc_boto_02,this.text_3,this.mc_boto_03,this.text_2,this.text_1,this.text,this.btn_zona_3_01,this.btn_zona_3_02,this.btn_zona_3_03,this.btn_prev,this.btn_next,this.shape_10);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

 

    (lib.frame5 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(24.9,467.1,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	

	this.text = new cjs.Text("Unificaciones nacionales", "bold 14px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 811;
	this.text.setTransform(498.1,457.6);

	this.text_1 = new cjs.Text("Guerra de Secesión ", "bold 14px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 275;
	this.text_1.setTransform(231,444.3);
	
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8FBF67").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_7.setTransform(269.3,465.9,1.143,1.727);

	this.text_2 = new cjs.Text("Unificación alemana", "bold 16px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 132;
	this.text_2.setTransform(708.8,348.1);

	this.text_3 = new cjs.Text("Unificación italiana", "bold 16px Arial");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 142;
	this.text_3.setTransform(553.2,348.1);

	this.text_4 = new cjs.Text("Víctor Manuel II, rey de Italia", "bold 16px Arial");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 163;
	this.text_4.setTransform(282.8,348.1);

	this.text_5 = new cjs.Text("Guerra de Secesión", "bold 16px Arial");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 140;
	this.text_5.setTransform(111.4,348.1);

	

 if (boton == 1)
            this.mc_boto_01 = new lib.mc_Rosa("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Rosa();

        this.mc_boto_01.setTransform(113.7,366.5,0.9,0.9);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Rosa(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Crema("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Crema();
        this.mc_boto_02.setTransform(282.7,366.5,1.066,0.9);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Crema(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Crema("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Crema();
        this.mc_boto_03.setTransform(555.3,366.5,0.9,0.9);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Crema(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Crema("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Crema();
        this.mc_boto_04.setTransform(711.3,366.5,0.9,0.9);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Crema(), 3);
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
        
	this.text_6 = new cjs.Text("1870", "bold 16px Arial");
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 49;
	this.text_6.setTransform(581.2,415);

	this.text_7 = new cjs.Text("1871", "bold 16px Arial");
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 49;
	this.text_7.setTransform(631.2,415);

	this.text_8 = new cjs.Text("1861", "bold 16px Arial");
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 49;
	this.text_8.setTransform(67.2,415);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape.setTransform(475.4,436.8,1,1,0,0,180);

	this.text_9 = new cjs.Text("1875", "bold 18px Arial");
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 58;
	this.text_9.setTransform(882.4,413);

	this.text_10 = new cjs.Text("1860", "bold 18px Arial");
	this.text_10.lineHeight = 20;
	this.text_10.lineWidth = 55;
	this.text_10.setTransform(10.4,413);

	this.instance = new lib.Mapadebits23();
	this.instance.setTransform(657.3,384.3);

	this.instance_1 = new lib.Mapadebits22();
	this.instance_1.setTransform(607.6,386.9);

	this.instance_2 = new lib.Mapadebits21();
	this.instance_2.setTransform(91.5,384.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(93.2,480.5,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(608.2,466,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(658.2,466,1.047,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(93.2,453.5,1.047,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4B06D").s().p("AkWCdIAAk5IIsAAIAAE5g");
	this.shape_5.setTransform(691.3,465.7,7.77,1.727);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4B06D").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_6.setTransform(258.2,465.9,1.097,1.727);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E44E6D").s().p("A12CFIAAkJMArtAAAIAAEJg");
	this.shape_7.setTransform(233.4,451.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EguqABtIAAi8IFvAAIAAC8gEAhRABCIAAiuINaAAIAACug");
	this.shape_8.setTransform(375.9,425.9);
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.logo, this.titulo, this.home, this.shape_8,this.shape_6,this.shape_5,this.shape_7,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.instance_2,this.instance_1,this.instance,this.text_10,this.text_9,this.shape,this.text_8,this.text_7,this.text_6,this.mc_boto_01,this.mc_boto_04,this.mc_boto_02,this.mc_boto_03,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.btn_zona_4_01,this.btn_zona_4_02,this.btn_zona_4_04,this.btn_zona_4_03,this.btn_prev);
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
   
   (lib._0000NV01 = function() {
	this.initialize(img._0000NV01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,127);


(lib._0000NV01_1 = function() {
	this.initialize(img._0000NV01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,594);


(lib._0000S501 = function() {
	this.initialize(img._0000S501);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,560);


(lib._0007W901 = function() {
	this.initialize(img._0007W901);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,110);


(lib._0007W901_1 = function() {
	this.initialize(img._0007W901_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,537);


(lib._00088T01 = function() {
	this.initialize(img._00088T01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,655);


(lib._0008P701 = function() {
	this.initialize(img._0008P701);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,119);


(lib._0008P701_1 = function() {
	this.initialize(img._0008P701_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,623);


(lib._00093T01 = function() {
	this.initialize(img._00093T01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,566);


(lib._00096001 = function() {
	this.initialize(img._00096001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,570);


(lib._00096A01_OPT = function() {
	this.initialize(img._00096A01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,717,500);


(lib._00098R01_OPT = function() {
	this.initialize(img._00098R01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,510,400);


(lib._0009FB01 = function() {
	this.initialize(img._0009FB01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,521);


(lib._0009HK01_OPT = function() {
	this.initialize(img._0009HK01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,734,500);


(lib._0009VS01_Cara = function() {
	this.initialize(img._0009VS01_Cara);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,312);


(lib._0009VS01_OPT = function() {
	this.initialize(img._0009VS01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,382,500);


(lib._0009VS01_OPT_MIN_05 = function() {
	this.initialize(img._0009VS01_OPT_MIN_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,81);


(lib._000A0S01_OPT = function() {
	this.initialize(img._000A0S01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,500);


(lib._000A0T01 = function() {
	this.initialize(img._000A0T01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,768);


(lib._000AGI01_OPT = function() {
	this.initialize(img._000AGI01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,732,500);


(lib._000AGI01_OPT_MIN_01 = function() {
	this.initialize(img._000AGI01_OPT_MIN_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,81);


(lib._000ESP01 = function() {
	this.initialize(img._000ESP01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,129);


(lib._000ESP01_1 = function() {
	this.initialize(img._000ESP01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,564);


(lib._000S3201_OPT = function() {
	this.initialize(img._000S3201_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,500);


(lib._000S3201_OPT_MIN_04 = function() {
	this.initialize(img._000S3201_OPT_MIN_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,81);


(lib._000S3V01_OPT = function() {
	this.initialize(img._000S3V01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,500);


(lib._000S3V01_OPT_MIN_03 = function() {
	this.initialize(img._000S3V01_OPT_MIN_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,81);


(lib._000U2E01_OPT = function() {
	this.initialize(img._000U2E01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,766,500);


(lib._001AEX01 = function() {
	this.initialize(img._001AEX01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,568);


(lib._001ELN01 = function() {
	this.initialize(img._001ELN01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,123);


(lib._001OWQ01 = function() {
	this.initialize(img._001OWQ01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,707,530);


(lib._00221P01 = function() {
	this.initialize(img._00221P01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,509);


(lib._00221P01_OPT = function() {
	this.initialize(img._00221P01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,467);


(lib._00221P01_OPT_MIN_02 = function() {
	this.initialize(img._00221P01_OPT_MIN_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,75);


(lib._002F4U01 = function() {
	this.initialize(img._002F4U01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,530);


(lib._2_shutterstock_86443309_OPT = function() {
	this.initialize(img._2_shutterstock_86443309_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,500);


(lib._3_120660288_OPT = function() {
	this.initialize(img._3_120660288_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,371,500);


(lib._4_92837012_OPT = function() {
	this.initialize(img._4_92837012_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,374,500);


(lib._5_shutterstock_11894839_OPT = function() {
	this.initialize(img._5_shutterstock_11894839_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,500);


(lib.CS_10_10_084 = function() {
	this.initialize(img.CS_10_10_084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,799,530);


(lib.CS_10_10_084_1 = function() {
	this.initialize(img.CS_10_10_084_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,799,530);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,75);


(lib.Mapadebits10 = function() {
	this.initialize(img.Mapadebits10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,131);


(lib.Mapadebits11 = function() {
	this.initialize(img.Mapadebits11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,89);


(lib.Mapadebits12 = function() {
	this.initialize(img.Mapadebits12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,85);


(lib.Mapadebits13 = function() {
	this.initialize(img.Mapadebits13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,89);


(lib.Mapadebits14 = function() {
	this.initialize(img.Mapadebits14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,90);


(lib.Mapadebits15 = function() {
	this.initialize(img.Mapadebits15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,85);


(lib.Mapadebits16 = function() {
	this.initialize(img.Mapadebits16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,78);


(lib.Mapadebits17 = function() {
	this.initialize(img.Mapadebits17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,68);


(lib.Mapadebits18 = function() {
	this.initialize(img.Mapadebits18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,113);


(lib.Mapadebits19 = function() {
	this.initialize(img.Mapadebits19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,113);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,81);


(lib.Mapadebits20 = function() {
	this.initialize(img.Mapadebits20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,65);


(lib.Mapadebits21 = function() {
	this.initialize(img.Mapadebits21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,96);


(lib.Mapadebits22 = function() {
	this.initialize(img.Mapadebits22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,77);


(lib.Mapadebits23 = function() {
	this.initialize(img.Mapadebits23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,77);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,81);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,81);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,81);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,82);


(lib.Mapadebits7 = function() {
	this.initialize(img.Mapadebits7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,256);


(lib.Mapadebits8 = function() {
	this.initialize(img.Mapadebits8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,131);


(lib.Mapadebits9 = function() {
	this.initialize(img.Mapadebits9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,221);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.PUENTE_BROOKLYN = function() {
	this.initialize(img.PUENTE_BROOKLYN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,560);


(lib.shutterstock_72493108_OPT = function() {
	this.initialize(img.shutterstock_72493108_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,500);


(lib.Verdi = function() {
	this.initialize(img.Verdi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,786);


(lib.MarcaAgua = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	
	this.shape.setTransform(30,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.mc_verdecopia = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8FBF67").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEECD1").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8FBF67").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_Rosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4B9C5").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E44E6D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_naranja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9D6C9").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_Musica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE0C5").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_Lila = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1ACC6").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83588D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_Crema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCE7D3").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.IMG_04_03 = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A89V+MAAAgr7MA57AAAMAAAAr7g");
	mask.setTransform(234.5,139.3);

	// Capa 1
	this.instance = new lib._5_shutterstock_11894839_OPT();
	this.instance.setTransform(0,0,0.56,0.56);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,420,280);


(lib.IMG_03_01 = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4cV+MAAAgr7MAw5AAAMAAAAr7g");
	mask.setTransform(209.6,139.3);

	// Capa 1
	this.instance = new lib._000S3201_OPT();
	this.instance.setTransform(0,0,0.56,0.56);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,366.2,280);


(lib.IMG_02_04 = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A92VvMAAAgrdMA7tAAAMAAAArdg");
	mask.setTransform(237.8,140.8);

	// Capa 1
	this.instance = new lib._000U2E01_OPT();
	this.instance.setTransform(0,0,0.56,0.56);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,429,280);


(lib.IMG_01_04 = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9EV5MAAAgrxMA6JAAAMAAAArxg");
	mask.setTransform(224.9,139.8);

	// Capa 1
	this.instance = new lib._0009HK01_OPT();
	this.instance.setTransform(0,0,0.56,0.56);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,411,280);


(lib.IMG_01_03 = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+NV0MAAAgrnMA8bAAAMAAAArng");
	mask.setTransform(216.5,140.3);

	// Capa 1
	this.instance = new lib._000AGI01_OPT();
	this.instance.setTransform(0,0,0.56,0.56);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,409.9,280);


(lib.IMG_01_01 = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7FV0MAAAgrnMA2LAAAMAAAArng");
	mask.setTransform(228,140.3);

	// Capa 1
	this.instance = new lib._00096A01_OPT();
	this.instance.setTransform(0,0,0.56,0.56);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,401.5,280);


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


(lib.btn_p01_Fals = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E19481").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(0,0,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.btn_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AtkBdIAAi5IbJAAIAAC5g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A171B").p("ANlBdI7JAAIAAi5IbJAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F8AB2").s().p("AtkBdIAAi5IbJAAIAAC5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.btn_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.502)").s().p("AtkBdIAAi5IbJAAIAAC5g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A171B").p("ANlBdI7JAAIAAi5IbJAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F8AB2").s().p("AtkBdIAAi5IbJAAIAAC5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_fundido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.instance = new lib.mc_Fundido_Int();
	this.instance.setTransform(475,304,1,1,0,0,0,475,304);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_18 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(4));
        });

	// Imatge
	this.text = new cjs.Text("Otto von Bismarck, estadista alemán.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 352;
	this.text.setTransform(295.1,528.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._0009VS01_OPT();
	this.instance_1.setTransform(296.3,44.5,0.948,0.948);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_17 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(3));
        });

	// Imatge
	this.text = new cjs.Text("La unificación italiana redujo los Estados Pontificios al Vaticano, un Estado situado dentro de los límites de Roma.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 708;
	this.text.setTransform(121.1,528.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._5_shutterstock_11894839_OPT();
	this.instance_1.setTransform(121.5,44.4,0.948,0.948);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_16 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(2));
        });

	// Imatge
	this.text = new cjs.Text("Víctor Manuel II, rey de Italia (1861-1878).", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 399;
	this.text.setTransform(475.5,526.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._4_92837012_OPT();
	this.instance_1.setTransform(299.8,44.4,0.944,0.944);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_15 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(1));
        });

	// Imatge
	this.text = new cjs.Text("Abraham Lincoln, político estadounidense.", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 385;
	this.text.setTransform(476.5,526.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._000A0S01_OPT();
	this.instance_1.setTransform(301.8,44,0.946,0.946);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_4_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Unificación alemana", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 142;
	this.text.setTransform(709.3,348.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(711.9,366.5,0.9,0.9);

	this.btn_ampliar_18 = new lib.btn_ampliarneg();
	this.btn_ampliar_18.setTransform(359.1,44,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_18, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
 this.btn_ampliar_18.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_18());
        });
	this.instance_1 = new lib._0009VS01_Cara();
	this.instance_1.setTransform(162.8,29.4,0.828,0.828);

	this.txt_popup_5_04 = new cjs.Text("1871\n\nTras la victoria prusiana en la guerra franco-prusiana (1870-1871), el canciller Otto von Bismarck proclamó el II Reich alemán y Guillermo I se convirtió en Káiser de Alemania (18 de enero). ", "bold 20px Verdana");
	this.txt_popup_5_04.lineHeight = 22;
	this.txt_popup_5_04.lineWidth = 404;
	this.txt_popup_5_04.setTransform(397.3,28.2);
var html = createDiv(txt['txt_popup_4_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_5_04 = new cjs.DOMElement(html);
        this.txt_popup_5_04.setTransform(397, 28 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_5_04},{t:this.instance_1},{t:this.btn_ampliar_18},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,790.3,378.5);


(lib.popup_zona_4_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Unificación italiana", "16px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 142;
	this.text.setTransform(553.8,348.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(555.9,366.5,0.9,0.9);

	this.btn_ampliar_17 = new lib.btn_ampliar();
	this.btn_ampliar_17.setTransform(430,46.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_17, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_17.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_17());
        });
	this.text_1 = new cjs.Text("1870\n\nAnexionado el Véneto (1866), los Estados Pontificios eran el último reducto que quedaba por ocupar. En septiembre de 1870, las tropas italianas ocuparon los territorios papales y completaron la unificación italiana. Roma se convirtió en la capital del nuevo Estado.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 401;
	this.text_1.setTransform(472.5,28.2);
var html = createDiv(txt['txt_popup_4_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(472, 28 - 610);

	this.instance_1 = new lib.IMG_04_03();
	this.instance_1.setTransform(243,169.4,1,1,0,0,0,210,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1},{t:this.btn_ampliar_17},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,863,380);


(lib.popup_zona_4_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.btn_ampliar_16 = new lib.btn_ampliar();
	this.btn_ampliar_16.setTransform(273.1,45.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_16, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_16.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_16());
        });
	this.instance_1 = new lib._4_92837012_OPT();
	this.instance_1.setTransform(83.4,29.4,0.56,0.56);

	this.text = new cjs.Text("1861\n\nEn marzo, y en el contexto del proceso de unificación italiana, Víctor Manuel II, rey de Piamonte-Cerdeña y duque de Saboya, fue proclamado rey de Italia por el primer parlamento italiano.", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 500;
	this.text.setTransform(312.1,28.2);
var html = createDiv(txt['txt_popup_4_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(312, 28 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_1},{t:this.btn_ampliar_16}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.text_1 = new cjs.Text("Víctor Manuel II, rey de Italia", "16px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 163;
	this.text_1.setTransform(283.4,348.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(283.3,366.5,1.066,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,801,380);


(lib.popup_zona_4_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.btn_ampliar_15 = new lib.btn_ampliarneg();
	this.btn_ampliar_15.setTransform(289.3,46.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_15, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
 this.btn_ampliar_15.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_15());
        });
	this.instance_1 = new lib._000A0S01_OPT();
	this.instance_1.setTransform(104.6,29.4,0.56,0.56);

	this.text = new cjs.Text("1861\n\nEntre 1861 y 1865 tuvo lugar la guerra de Secesión estadounidense. El conflicto enfrentó a la Unión (estados antiesclavistas del Norte) con la Confederación (estados esclavistas del Sur). La decisiva batalla de Gettysburg supuso la derrota de las tropas confederadas.", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 527;
	this.text.setTransform(330,28.2);
var html = createDiv(txt['txt_popup_4_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(330, 28 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_1},{t:this.btn_ampliar_15}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.text_1 = new cjs.Text("Guerra de Secesión", "16px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 140;
	this.text_1.setTransform(112,348.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E44E6D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(114.2,366.5,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,845.7,380);


(lib.popup_ampliar_10 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(3));
        });

	// Imatge
	this.text = new cjs.Text("Napoleón III, emperador de Francia (1852-1870).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 345;
	this.text.setTransform(301.1,525.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._3_120660288_OPT();
	this.instance_1.setTransform(300.8,44.2,0.941,0.941);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_09 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(2));
        });

	// Imatge
	this.text = new cjs.Text("Lajos Kossuth, estadista húngaro.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 316;
	this.text.setTransform(312.1,523.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._2_shutterstock_86443309_OPT();
	this.instance_1.setTransform(313,44.2,0.937,0.937);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_08 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(1));
        });

	// Imatge
	this.text = new cjs.Text("Incendio del Palacio Real de París durante el estallido revolucionario de 1848.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 625;
	this.text.setTransform(165.1,528.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._000S3201_OPT();
	this.instance_1.setTransform(166,44.4,0.948,0.948);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_3_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.btn_ampliar_10 = new lib.btn_ampliar();
	this.btn_ampliar_10.setTransform(280,41.4,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_10, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_10.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_10());
        });
	this.instance_1 = new lib._3_120660288_OPT();
	this.instance_1.setTransform(90.5,28.4,0.56,0.56);

	this.text = new cjs.Text("Napoleón III", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 137;
	this.text.setTransform(722.7,353.8);

	this.instance_2 = new lib.mc_Musica("single",2);
	this.instance_2.setTransform(724.7,367.4,0.89,0.89);

	this.text_1 = new cjs.Text("1853\n\nEn diciembre, Napoleón III fue proclamado “Emperador de los franceses”. Impuso un régimen autoritario, impulsó obras públicas para reactivar la economía y promovió campañas en el exterior (expedición militar a México y guerra franco-prusiana) que provocaron su caída en 1870.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 557;
	this.text_1.setTransform(317.8,28.3);
var html = createDiv(txt['txt_popup_3_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(317, 28 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance_2},{t:this.text},{t:this.instance_1},{t:this.btn_ampliar_10}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,863.6,379);


(lib.popup_zona_3_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.btn_ampliar_09 = new lib.btn_ampliar();
	this.btn_ampliar_09.setTransform(260,43.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_09, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_09.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_09());
        });
	this.text = new cjs.Text("1849\n\nEn abril, el Reino de Hungría, que no había reconocido al emperador austriaco Francisco José I, se convirtió en una república con un régimen parlamentario y democrático. Austria pidió ayuda a la Rusia zarista, que acabó con la insurrección húngara. Siguieron la represión y el intento de germanización del país. ", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 571;
	this.text.setTransform(296,28.2);
var html = createDiv(txt['txt_popup_3_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(296, 28 - 610);

	this.instance_1 = new lib._2_shutterstock_86443309_OPT();
	this.instance_1.setTransform(82,28.4,0.56,0.56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.btn_ampliar_09}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.text_1 = new cjs.Text("Fin de la revolución húngara", "16px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 175;
	this.text_1.setTransform(517.4,348.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C398BF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(519.5,367.3,1.2,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,856,379);


(lib.popup_zona_3_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.btn_ampliar_08 = new lib.btn_ampliar();
	this.btn_ampliar_08.setTransform(379.6,42.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_08, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_08.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_08());
        });
	this.text = new cjs.Text("1848\n\nEl 23 de febrero estalló en París una revolución encabezada por la burguesía liberal y apoyada por el proletariado que llevó a la proclamación de la II República. En poco tiempo, también estallaron revoluciones en otros lugares de Europa, lo que permitió hablar de la primavera de los pueblos. ", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 444;
	this.text.setTransform(416.6,28.2);
var html = createDiv(txt['txt_popup_3_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(416, 28 - 610);

	this.instance_1 = new lib.IMG_03_01();
	this.instance_1.setTransform(213.1,169.4,1,1,0,0,0,183.1,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.btn_ampliar_08},{t:this.instance}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.text_1 = new cjs.Text("Primavera de los pueblos", "bold 16px Verdana", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 137;
	this.text_1.setTransform(330.6,344.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C398BF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(332.7,367.3,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,849.9,379);


(lib.popup_ampliar_07bis = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame3(3));
        });

	// Imatge
	this.text = new cjs.Text("Palacio Real (Bruselas, Bélgica).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 413;
	this.text.setTransform(120.1,526.4);

	this.instance = new lib.shutterstock_72493108_OPT();
	this.instance.setTransform(121,44.4,0.944,0.944);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_07 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame3(4));
        });

	// Imatge
	this.text = new cjs.Text("La unión aduanera fue la base de la unificación política de Alemania. Bamberg (Baviera, Alemania).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 688;
	this.text.setTransform(111.1,530.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._000U2E01_OPT();
	this.instance_1.setTransform(111.4,44.4,0.952,0.952);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_06 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame3(2));
        });

	// Imatge
	this.text = new cjs.Text("Ataque al Ayuntamiento y al puente de Arcole en París (28 de julio de 1830).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 413;
	this.text.setTransform(277.1,531.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._000S3V01_OPT();
	this.instance_1.setTransform(277.5,44.4,0.954,0.954);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_05 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame3(1));
        });

	// Imatge
	this.text = new cjs.Text("La matanza de Quíos, por Eugène Delacroix, 1824 (Museo del Louvre, París, Francia).", "italic 18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 413;
	this.text.setTransform(277.1,531.4);
	

	var html = createDiv(txt['txt_pie_foto_1'], "Verdana","18px","445px","10px","","","left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(281, 520 -600);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._00221P01();
	this.instance_1.setTransform(278.6,44.2,0.932,0.932);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_2_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.text = new cjs.Text("Zollverein", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 115;
	this.text.setTransform(783.8,355.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C398BF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(787.1,367.3,0.89,0.89);

	this.btn_ampliar_07 = new lib.btn_ampliarneg();
	this.btn_ampliar_07.setTransform(446.4,41.9,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_07, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
 this.btn_ampliar_07.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_07());
        });
	this.text_1 = new cjs.Text("1834\n\nEl 1 de enero entró en vigor la Deutscher Zollverein. Se trataba de la unión aduanera alemana, liderada por Prusia. El proceso de unificación económica iniciado en 1818 culminó en 1888. Además, la Zollverein sentó las bases para la unificación política alemana. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 431;
	this.text_1.setTransform(484.3,28.8);
var html = createDiv(txt['txt_popup_2_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(484, 28 - 610);

	this.instance_1 = new lib.IMG_02_04();
	this.instance_1.setTransform(249.8,168.4,1,1,0,0,0,214.5,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1},{t:this.btn_ampliar_07},{t:this.shape},{t:this.text},{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,903.9,379);


(lib.popup_zona_2_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_07bis = new lib.btn_ampliar();
	this.btn_ampliar_07bis.setTransform(421,41.9,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_07bis, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_07bis.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_07bis());
        });
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.text = new cjs.Text("Independencia de Bélgica", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 141;
	this.text.setTransform(622,344.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C398BF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(624.2,367.3,1,0.89);

	this.text_1 = new cjs.Text("1831\n\nBélgica, que desde 1815 formaba parte del Reino de los Países Bajos, se alzó contra el gobierno neerlandés en 1830. Católicos y liberales proclamaron su independencia con el apoyo de Francia y Reino Unido. En 1831 se instauró una monarquía constitucional. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 380;
	this.text_1.setTransform(480,28.8);
var html = createDiv(txt['txt_popup_2_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(460, 28 - 610);

	this.instance_1 = new lib.shutterstock_72493108_OPT();
	this.instance_1.setTransform(82,28.4,0.56,0.56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1},{t:this.shape},{t:this.text},{t:this.instance},{t:this.btn_ampliar_07bis}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,890,379);


(lib.popup_zona_2_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.btn_ampliar_06 = new lib.btn_ampliar();
	this.btn_ampliar_06.setTransform(299,41.9,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_06, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_06.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_06());
        });

	this.instance_1 = new lib._000S3V01_OPT();
	this.instance_1.setTransform(82.5,28.4,0.56,0.56);

	this.text = new cjs.Text("1830\n\nEn julio estalló una revolución liberal que forzó la abdicación de Carlos X de Francia (absolutista). La burguesía liberal, más fuerte que los republicanos, pudo entronizar a Luis Felipe de Orleans (liberal). Se inauguraba la monarquía de julio (1830-1848).", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 511;
	this.text.setTransform(335.1,28.8);
var html = createDiv(txt['txt_popup_2_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(335, 28 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_1},{t:this.btn_ampliar_06}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.text_1 = new cjs.Text("Revolución francesa de 1830", "bold 16px Verdana", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 159;
	this.text_1.setTransform(446.5,344.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C398BF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(448.6,367.3,1.05,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,835,379);


(lib.popup_zona_2_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.btn_ampliar_05 = new lib.btn_ampliar();
	this.btn_ampliar_05.setTransform(313.1,42.9,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_05, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_05.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_05());
        });
	this.instance_1 = new lib._00221P01();
	this.instance_1.setTransform(101.7,30.7,0.537,0.537);

	this.text = new cjs.Text("1822\n\nEntre 1821 y 1829 tuvo lugar la guerra de liberación griega. En enero de 1822 se celebró el congreso de Epidauro, en el que se proclamó la independencia de Grecia del Imperio otomano. Reino Unido, Francia y Rusia intervinieron a favor de los revolucionarios griegos. ", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 508;
	this.text.setTransform(345.6,28.8);
var html = createDiv(txt['txt_popup_2_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(350, 28 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_1},{t:this.btn_ampliar_05}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.text_1 = new cjs.Text("Independecia de Grecia", "bold 16px Verdana", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 139;
	this.text_1.setTransform(157.4,345.9+incremento);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C398BF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(159.2,367.3,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,843,379);


(lib.popup_ampliar_04 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame2(4));
        });

	// Imatge
	this.text = new cjs.Text("Derrota de Napoleón en la batalla de Waterloo (18 de junio de 1815).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 694;
	this.text.setTransform(126.1,529.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._0009HK01_OPT();
	this.instance_1.setTransform(127.3,44.4,0.95,0.95);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


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
	this.text = new cjs.Text("Los integrantes de la Santa Alianza (Alejandro I de Rusia, Francisco II de Austria y Federico Guillermo III de Prusia) junto a Luis XVIII de Francia.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 694;
	this.text.setTransform(127.1,530.4);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._000AGI01_OPT();
	this.instance_1.setTransform(129,44.4,0.952,0.952);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
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
	this.text = new cjs.Text("La batalla naval de Trafalgar enfrentó a la armada británica, al mando del almirante Nelson, con la flota francoespañola, en las aguas nororientales del estrecho de Gibraltar\n(21 de octubre de 1805).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 552;
	this.text.setTransform(204.1,479.5);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._00098R01_OPT();
	this.instance_1.setTransform(205,44.4,1.063,1.063);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
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
	this.text = new cjs.Text("Napoleón Bonaparte, emperador de Francia (1804-1814).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.setTransform(134.2,528);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.instance_1 = new lib._00096A01_OPT();
	this.instance_1.setTransform(135.5,44.4,0.948,0.948);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_1_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.btn_ampliar_04 = new lib.btn_ampliar();
	this.btn_ampliar_04.setTransform(431.3,45.4,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_04, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_04.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_04());
        });
	this.text = new cjs.Text("1815\n\nEl 18 de junio las tropas napoleónicas fueron derrotadas por las tropas angloprusianas del general Wellington en las proximidades de Waterloo. La decisiva batalla significó el fin de Napoleón, que fue desterrado a la isla de Santa Elena, donde murió en 1821.", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 426;
	this.text.setTransform(473.6,28.7);
var html = createDiv(txt['txt_popup_1_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(473, 28 - 610);

	this.instance_1 = new lib.IMG_01_04();
	this.instance_1.setTransform(248.8,168.4,1,1,0,0,0,205.5,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.btn_ampliar_04}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.text_1 = new cjs.Text("Batalla de Waterloo", "16px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 121;
	this.text_1.setTransform(627.7,349.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8FBF67").s("#000000").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(628.6,367.3,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,888.6,379);


(lib.popup_zona_1_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.btn_ampliar_03 = new lib.btn_ampliar();
	this.btn_ampliar_03.setTransform(443.3,47.4,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_03, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_03.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_03());
        });
	this.text = new cjs.Text("1814-1815\n\nTras la derrota de Napoleón, Reino Unido, Prusia, el Imperio austriaco y Rusia, reunidos en el congreso de Viena, acordaron con Francia los términos de la paz, trazar las nuevas fronteras europeas, restaurar el absolutismo y crear la Santa Alianza.", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 419;
	this.text.setTransform(487.6,28.7);
var html = createDiv(txt['txt_popup_1_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(487, 28 - 610);

	this.instance_1 = new lib.IMG_01_03();
	this.instance_1.setTransform(262,167.4,1,1,0,0,0,205,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.btn_ampliar_03}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.text_1 = new cjs.Text("Congreso de Viena", "16px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 121;
	this.text_1.setTransform(847.7,349.1);

	this.mc_boto_03 = new lib.mc_verdecopia();
	this.mc_boto_03.setTransform(848.9,367.4,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_boto_03},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,905.2,379);


(lib.popup_zona_1_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.text = new cjs.Text("Batalla de Trafalgar", "16px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 121;
	this.text.setTransform(254.7,349.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(256.3,367.3,0.89,0.89);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.btn_ampliar_02 = new lib.btn_ampliar();
	this.btn_ampliar_02.setTransform(416,48.4,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_02, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_02.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_02());
        });
	this.text_1 = new cjs.Text("1805\n\nEl 21 de octubre tuvo lugar la batalla naval de Trafalgar, en la que se enfrentaron las flotas británica (capitaneada por el almirante Nelson) y francoespañola. Sirvió para asegurar el poderío marítimo inglés y dar al traste con el Bloqueo continental francés.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 431;
	this.text_1.setTransform(456.6,30.7);
var html = createDiv(txt['txt_popup_1_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(456, 28 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.btn_ampliar_02}]}).to({state:[]},1).wait(1));

	// FonsBlanc
	this.instance_1 = new lib._00098R01_OPT();
	this.instance_1.setTransform(79,31.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,876.9,379);


(lib.popup_zona_1_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("+", "bold 16px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 121;
	this.text.setTransform(98.7,349.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(101,367.3,0.89,0.89);

	this.btn_ampliar_01 = new lib.btn_ampliarneg();
	this.btn_ampliar_01.setTransform(409.6,45.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
 this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_01());
        });
	this.text_1 = new cjs.Text("1804\n\nTras proclamarse emperador, Napoleón Bonaparte inició la conquista de Europa. El Imperio se anexionó nuevos territorios y se crearon Estados afines por los que se extendieron las ideas liberales. 1812 supuso el momento de máxima extensión del Imperio napoleónico.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 453;
	this.text_1.setTransform(449.8,28.7);
var html = createDiv(txt['txt_popup_1_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(449, 28 - 610);

	this.instance_1 = new lib.IMG_01_01();
	this.instance_1.setTransform(228.3,168.4,1,1,0,0,0,200.8,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1},{t:this.btn_ampliar_01},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15,892,379);

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