(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
       	this.btn_05 = new lib.btn_01();
	this.btn_05.setTransform(825.8,482.6,1.006,1.294);
	new cjs.ButtonHelper(this.btn_05, 0, 1, 2, false, new lib.btn_01(), 3);

	this.btn_04 = new lib.btn_02();
	this.btn_04.setTransform(651.4,482.6,1.006,1.294);
	new cjs.ButtonHelper(this.btn_04, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_03 = new lib.btn_01();
	this.btn_03.setTransform(476.9,482.6,1.006,1.294);
	new cjs.ButtonHelper(this.btn_03, 0, 1, 2, false, new lib.btn_01(), 3);

	this.btn_02 = new lib.btn_02();
	this.btn_02.setTransform(302.4,482.6,1.006,1.294);
	new cjs.ButtonHelper(this.btn_02, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_01 = new lib.btn_01();
	this.btn_01.setTransform(127.3,482.6,1.006,1.294);
	new cjs.ButtonHelper(this.btn_01, 0, 1, 2, false, new lib.btn_01(), 3);

	this.p_01_hito_04 = new cjs.Text("1914\n\n\nAtentado de Sarajevo", "bold 14px Verdana");
	this.p_01_hito_04.textAlign = "right";
	this.p_01_hito_04.lineHeight = 12;
	this.p_01_hito_04.lineWidth = 89;
	this.p_01_hito_04.setTransform(730.1,249.5);
        var html = createDiv(txt['p_01_hito_04'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_04 = new cjs.DOMElement(html);
        this.p_01_hito_04.setTransform(730 - 130, 263 - 610);
        
	this.p_01_hito_05 = new cjs.Text("1918\n\n\n\nArmisticio", "bold 14px Verdana");
	this.p_01_hito_05.textAlign = "right";
	this.p_01_hito_05.lineHeight = 12;
	this.p_01_hito_05.lineWidth = 108;
	this.p_01_hito_05.setTransform(802.1,132.8);
        var html = createDiv(txt['p_01_hito_05'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_05 = new cjs.DOMElement(html);
        this.p_01_hito_05.setTransform(802 - 130, 160 - 610);

	this.p_01_hito_03 = new cjs.Text("1900\n\n\nRebelión de los bóxer", "bold 14px Verdana");
	this.p_01_hito_03.textAlign = "right";
	this.p_01_hito_03.lineHeight = 12;
	this.p_01_hito_03.lineWidth = 100;
	this.p_01_hito_03.setTransform(484.9,132.8);
        var html = createDiv(txt['p_01_hito_03'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_03 = new cjs.DOMElement(html);
        this.p_01_hito_03.setTransform(484 - 130, 145 - 610);

	this.p_01_hito_02 = new cjs.Text("1885\n\n\nConferencia de Berlín", "bold 14px Verdana");
	this.p_01_hito_02.lineHeight = 12;
	this.p_01_hito_02.lineWidth = 84;
	this.p_01_hito_02.setTransform(363.1,248.8);
        var html = createDiv(txt['p_01_hito_02'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.p_01_hito_02 = new cjs.DOMElement(html);
        this.p_01_hito_02.setTransform(363 , 262 - 610);

	this.p_01_hito_01 = new cjs.Text("1876\n\n\nVictoria I, emperatriz", "bold 14px Verdana");
	this.p_01_hito_01.textAlign = "right";
	this.p_01_hito_01.lineHeight = 12;
	this.p_01_hito_01.lineWidth = 81;
	this.p_01_hito_01.setTransform(128.3,248.2);
        var html = createDiv(txt['p_01_hito_01'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_01 = new cjs.DOMElement(html);
        this.p_01_hito_01.setTransform(128 - 130, 262 - 610);

	this.p_01_tabla_01 = new cjs.Text("Segunda revolución industrial", "bold 15px Arial");
	this.p_01_tabla_01.textAlign = "center";
	this.p_01_tabla_01.lineHeight = 17;
	this.p_01_tabla_01.lineWidth = 763;
	this.p_01_tabla_01.setTransform(425.6,388.1);

	this.p_01_tabla_03 = new cjs.Text("I\nGuerra\nMundial", "bold 15px Arial");
	this.p_01_tabla_03.textAlign = "center";
	this.p_01_tabla_03.lineHeight = 17;
	this.p_01_tabla_03.lineWidth = 69;
	this.p_01_tabla_03.setTransform(846.9,391.5);

	this.p_01_tabla_02 = new cjs.Text("Imperialismo", "bold 15px Arial");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 17;
	this.p_01_tabla_02.lineWidth = 763;
	this.p_01_tabla_02.setTransform(423.1,428.6);

	this.titol = new cjs.Text(txt['titol'], "31px Georgia");
	this.titol.textAlign = "center";
	this.titol.lineHeight = 33;
	this.titol.lineWidth = 783;
	this.titol.setTransform(473.9,47.1);

	this.txt_selecciona = new cjs.Text(txt['txt_selecciona'], "bold 16px Arial");
	this.txt_selecciona.textAlign = "center";
	this.txt_selecciona.lineHeight = 18;
	this.txt_selecciona.lineWidth = 363;
	this.txt_selecciona.setTransform(473.7,542.4);

	this.instance_1 = new lib.Mapadebits10();
	this.instance_1.setTransform(883.9,204.7);

	this.instance_2 = new lib.Mapadebits9();
	this.instance_2.setTransform(810.9,323.4);

	this.instance_3 = new lib.Mapadebits8();
	this.instance_3.setTransform(562.1,207.3);

	this.instance_4 = new lib.Mapadebits7();
	this.instance_4.setTransform(298.7,322.8);

	this.instance_5 = new lib.Mapadebits6();
	this.instance_5.setTransform(140.8,321.4);

	this.instance_6 = new lib.Mapadebits5();
	this.instance_6.setTransform(738.7,248.8);

	this.instance_7 = new lib.Mapadebits4();
	this.instance_7.setTransform(813.6,132.8);

	this.instance_8 = new lib.Mapadebits3();
	this.instance_8.setTransform(492.4,132.8);

	this.instance_9 = new lib.Mapadebits2();
	this.instance_9.setTransform(281.7,248.2);

	this.instance_10 = new lib.Mapadebits1();
	this.instance_10.setTransform(137.4,248.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D1CA").s("#000000").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape.setTransform(824.2,482.6,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D1CA").s("#000000").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape_1.setTransform(129,482.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_2.setTransform(650.2,482.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_3.setTransform(650.2,482.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_4.setTransform(476.4,482.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3D1CA").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_5.setTransform(476.4,482.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_6.setTransform(302.9,482.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AtlBdIAAi5IbLAAIAAC5g");
	this.shape_7.setTransform(302.9,482.6);

	this.text = new cjs.Text("1920", "bold 16px Arial");
	this.text.lineHeight = 18;
	this.text.lineWidth = 55;
	this.text.setTransform(884.3,500.4);

	this.text_1 = new cjs.Text("1910", "bold 16px Arial");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 55;
	this.text_1.setTransform(710.1,500.4);

	this.text_2 = new cjs.Text("1900", "bold 16px Arial");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 55;
	this.text_2.setTransform(538.3,500.4);

	this.text_3 = new cjs.Text("1890", "bold 16px Arial");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(364.3,500.4);

	this.text_4 = new cjs.Text("1880", "bold 16px Arial");
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(191,500.4);

	this.text_5 = new cjs.Text("1870", "bold 16px Arial");
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 55;
	this.text_5.setTransform(20.9,500.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_8.setTransform(812.3,417.7,1.047,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_9.setTransform(300.4,439.4,1.047,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_10.setTransform(141.8,439.4,1.047,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_11.setTransform(885.6,417.7,1.047,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E44E6D").s().p("AqhCRIAAkiIVDAAIAAEig");
	this.shape_12.setTransform(848.7,417.2,0.552,2.868);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_13.setTransform(563,437.9,1.047,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C398BF").s().p("AqhCRIAAkiIVDAAIAAEig");
	this.shape_14.setTransform(895.3,417.2,0.224,2.868,0,0,180,-0.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8BB1D8").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_15.setTransform(476,438.5,1,1.452);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_16.setTransform(475.9,396.6,1,1.507);



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

        this.addChild(this.logo, this.titulo, this.siguiente, this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.txt_selecciona,this.titol,this.p_01_tabla_02,this.p_01_tabla_03,this.p_01_tabla_01,this.p_01_hito_01,this.p_01_hito_02,this.p_01_hito_03,this.p_01_hito_05,this.p_01_hito_04,this.btn_01,this.btn_02,this.btn_03,this.btn_04,this.btn_05);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 1, 0, 0);
      	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,488.6,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.p_02_hito_03 = new cjs.Text("Victoria I, emperatriz", "bold 16px Arial");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 18;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(546.6,349.8);

	this.p_01_tabla_01 = new cjs.Text("Segunda revolución industrial", "bold 15px Arial");
	this.p_01_tabla_01.textAlign = "center";
	this.p_01_tabla_01.lineHeight = 17;
	this.p_01_tabla_01.lineWidth = 863;
	this.p_01_tabla_01.setTransform(472.9,460.1);

	this.p_01_tabla_02 = new cjs.Text("Imperialismo", "bold 15px Arial");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 17;
	this.p_01_tabla_02.lineWidth = 863;
	this.p_01_tabla_02.setTransform(473.6,501.9);

	this.p_02_hito_02 = new cjs.Text("Muerte de Livingstone", "bold 16px Arial");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 18;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(373.2,349.8);

	this.p_02_hito_01 = new cjs.Text("Stanley encuentra a Livingstone", "bold 16px Arial");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 15;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(139,349.8);

	
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Imperialismo("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Imperialismo();
        this.mc_boto_03.setTransform(548.6,367.3,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
        if (boton == 1)
            this.mc_boto_01 = new lib.mc_Imperialismo("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Imperialismo();
        this.mc_boto_01.setTransform(139.4,367.3,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Imperialismo("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Imperialismo();
        this.mc_boto_02.setTransform(375.2,367.3,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
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
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        if (boton != 1)
            this.mc_boto_01.on("click", function (evt) {
                putStage(new lib.frame2(1));
            });
        this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame2(2));
        });
        this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame2(3));
        });
        
	this.instance = new lib.Mapadebits23();
	this.instance.setTransform(105.9,433.4);

	this.instance_1 = new lib.Mapadebits22();
	this.instance_1.setTransform(548.6,433.4);

	this.instance_2 = new lib.Mapadebits21();
	this.instance_2.setTransform(375.2,433.4);

	this.instance_3 = new lib.Mapadebits13();
	this.instance_3.setTransform(548.1,390.3);

	this.instance_4 = new lib.Mapadebits12();
	this.instance_4.setTransform(374.7,390.3);

	this.instance_5 = new lib.Mapadebits11();
	this.instance_5.setTransform(105.4,390.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(549.6,510.3,1.047,1);

	this.text = new cjs.Text("1876", "bold 16px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(546.5,417.7);

	this.text_1 = new cjs.Text("1873", "bold 16px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(373.1,417.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(376.3,510.3,1.047,1);

	this.text_2 = new cjs.Text("1871", "bold 16px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(103.8,417.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(107,510.3,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_3.setTransform(475.2,445.2);

	this.text_3 = new cjs.Text("1880", "bold 18px Arial");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 58;
	this.text_3.setTransform(883.4,412.9);

	this.text_4 = new cjs.Text("1870", "bold 18px Arial");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(17.5,412.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8BB1D8").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_4.setTransform(475.1,510.7,1,1.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_5.setTransform(475.2,468.5,1,1.528);

        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_5,this.shape_4,this.text_4,this.text_3,this.shape_3,this.shape_2,this.text_2,this.shape_1,this.text_1,this.text,this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.mc_boto_02,this.mc_boto_01,this.mc_boto_03,this.p_02_hito_01,this.p_02_hito_02,this.p_01_tabla_02,this.p_01_tabla_01,this.p_02_hito_03,this.btn_next);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
   this.p_03_hito_04 = new cjs.Text("Submarino de Isaac Peral", "bold 16px Arial");
	this.p_03_hito_04.textAlign = "center";
	this.p_03_hito_04.lineHeight = 17;
	this.p_03_hito_04.lineWidth = 137;
	this.p_03_hito_04.setTransform(758.6,349.7);

	this.p_03_hito_03 = new cjs.Text("Leopoldo II, soberano del Congo", "bold 16px Arial");
	this.p_03_hito_03.textAlign = "center";
	this.p_03_hito_03.lineHeight = 15;
	this.p_03_hito_03.lineWidth = 137;
	this.p_03_hito_03.setTransform(557.3,344.3);

	this.p_03_hito_02 = new cjs.Text("Conferencia de Berlín", "bold 16px Arial");
	this.p_03_hito_02.textAlign = "center";
	this.p_03_hito_02.lineHeight = 18;
	this.p_03_hito_02.lineWidth = 120;
	this.p_03_hito_02.setTransform(385.7,349.9);

	this.p_03_hito_01 = new cjs.Text("Ocupación de Egipto", "bold 16px Arial");
	this.p_03_hito_01.textAlign = "center";
	this.p_03_hito_01.lineHeight = 18;
	this.p_03_hito_01.lineWidth = 118;
	this.p_03_hito_01.setTransform(157.2,349.9);

	this.p_01_tabla_01 = new cjs.Text("Segunda revolución industrial", "bold 15px Arial");
	this.p_01_tabla_01.textAlign = "center";
	this.p_01_tabla_01.lineHeight = 17;
	this.p_01_tabla_01.lineWidth = 862;
	this.p_01_tabla_01.setTransform(470.4,460.1);

	this.p_01_tabla_02 = new cjs.Text("Imperialismo", "bold 15px Arial");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 17;
	this.p_01_tabla_02.lineWidth = 863;
	this.p_01_tabla_02.setTransform(470.9,510.5);

	

if (boton == 1)
	this.mc_boto_01 = new lib.mc_Imperialismo("single", 1);
    else
	this.mc_boto_01 = new lib.mc_Imperialismo();
        
	this.mc_boto_01.setTransform(159.8,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
  if (boton == 2)
	this.mc_boto_02 = new lib.mc_Imperialismo("single", 1);
    else
	this.mc_boto_02 = new lib.mc_Imperialismo();
	this.mc_boto_02.setTransform(388.1,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
  if (boton == 3)
	this.mc_boto_03 = new lib.mc_Imperialismo("single", 1);
    else
	this.mc_boto_03 = new lib.mc_Imperialismo();
	this.mc_boto_03.setTransform(559.1,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
   if (boton == 4)
	this.mc_boto_04 = new lib.mc_Segunda("single", 1);
    else
	this.mc_boto_04 = new lib.mc_Segunda();
	this.mc_boto_04.setTransform(760.4,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Segunda(), 3);
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
	
        
	this.text = new cjs.Text("1888", "bold 16px Arial");
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(736.7,418.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjqBIIAAiPIHVAAIAACPg");
	this.shape.setTransform(762.3,427.1);

	this.instance = new lib.Mapadebits20();
	this.instance.setTransform(760.1,374.4);

	this.instance_1 = new lib.Mapadebits19();
	this.instance_1.setTransform(471.1,432.4);

	this.instance_2 = new lib.Mapadebits18();
	this.instance_2.setTransform(156.7,432.5);

	this.instance_3 = new lib.Mapadebits17();
	this.instance_3.setTransform(499.7,386.5);

	this.instance_4 = new lib.Mapadebits16();
	this.instance_4.setTransform(386.7,386.5);

	this.instance_5 = new lib.Mapadebits14();
	this.instance_5.setTransform(157.3,389.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(472.3,500.8,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(157.3,509.9,1.047,1);

	this.text_1 = new cjs.Text("1882", "bold 16px Arial");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(132.5,418.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(761.4,468.5,1.047,1);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(23.9,488.7,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(923.4,488.7,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.text_2 = new cjs.Text("1890", "bold 18px Arial");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 58;
	this.text_2.setTransform(881.4,413);

	this.text_3 = new cjs.Text("1885", "bold 16px Arial");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 49;
	this.text_3.setTransform(447.7,418.6);

	this.text_4 = new cjs.Text("1880", "bold 18px Arial");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(15.6,413);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8BB1D8").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_4.setTransform(473.1,510.7,1,1.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_5.setTransform(473.2,468.5,1,1.528);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_6.setTransform(473.9,445.2);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame2());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.shape_6,this.shape_5,this.shape_4,this.text_4,this.text_3,this.text_2,this.btn_next,this.btn_prev,this.shape_3,this.text_1,this.shape_2,this.shape_1,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape,this.text,this.mc_boto_02,this.mc_boto_01,this.mc_boto_03,this.mc_boto_04,this.p_01_tabla_02,this.p_01_tabla_01,this.p_03_hito_01,this.p_03_hito_02,this.p_03_hito_03,this.p_03_hito_04);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame4 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
    basicos(this, 1, 0, 0, 0, 0);
    this.instance = new lib.Mapadebits25();
	this.instance.setTransform(835.5,389.8);

	this.instance_1 = new lib.Mapadebits24();
	this.instance_1.setTransform(473.9,389.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(836.4,510.6,1.047,1);

	this.text = new cjs.Text("1899", "bold 16px Arial");
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(811.9,418.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(474.7,510.6,1.047,1);

	this.text_1 = new cjs.Text("1895", "bold 16px Arial");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(450.2,418.6);

	this.text_2 = new cjs.Text("1900", "bold 18px Arial");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 58;
	this.text_2.setTransform(882.4,413);

	this.text_3 = new cjs.Text("1890", "bold 18px Arial");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(14.4,413);

	this.p_04_hito_02 = new cjs.Text("II guerra \nanglo - bóer", "bold 16px Arial");
	this.p_04_hito_02.textAlign = "center";
	this.p_04_hito_02.lineHeight = 18;
	this.p_04_hito_02.lineWidth = 138;
	this.p_04_hito_02.setTransform(834.4,349.9);

	this.p_04_hito_01 = new cjs.Text("Guerra \nchino - japonesa", "bold 16px Arial");
	this.p_04_hito_01.textAlign = "center";
	this.p_04_hito_01.lineHeight = 18;
	this.p_04_hito_01.lineWidth = 138;
	this.p_04_hito_01.setTransform(472.7,349.9);

	this.p_01_tabla_01 = new cjs.Text("Segunda revolución industrial", "bold 15px Arial");
	this.p_01_tabla_01.textAlign = "center";
	this.p_01_tabla_01.lineHeight = 17;
	this.p_01_tabla_01.lineWidth = 863;
	this.p_01_tabla_01.setTransform(467,460.1);

	this.p_01_tabla_02 = new cjs.Text("Imperialismo", "bold 15px Arial");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 17;
	this.p_01_tabla_02.lineWidth = 341;
	this.p_01_tabla_02.setTransform(653.1,501.9);

	this.mc_boto_02 = new lib.mc_Imperialismo();
	this.mc_boto_02.setTransform(836.5,367.4,0.89,0.89);

	this.mc_boto_01 = new lib.mc_Imperialismo();
	this.mc_boto_01.setTransform(474.9,367.4,0.89,0.89);

if (boton == 1)
	this.mc_boto_01 = new lib.mc_Imperialismo("single", 1);
    else
	this.mc_boto_01 = new lib.mc_Imperialismo();
        
	this.mc_boto_01.setTransform(474.9,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
  if (boton == 2)
	this.mc_boto_02 = new lib.mc_Imperialismo("single", 1);
    else
	this.mc_boto_02 = new lib.mc_Imperialismo();
	this.mc_boto_02.setTransform(836.5,367.4,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
 
  if (boton == 1) {
            this.popup = new lib.popup_zona_3_01("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 2) {
            this.popup = new lib.popup_zona_3_02("single", 0);
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
      
	

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8BB1D8").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_2.setTransform(474.1,510.7,1,1.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_3.setTransform(474.2,468.5,1,1.528);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(24.9,488.7,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.4,488.7,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_4.setTransform(474.9,445.2);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.shape_4,this.btn_next,this.btn_prev,this.shape_3,this.shape_2,this.mc_boto_01,this.mc_boto_02,this.p_01_tabla_02,this.p_01_tabla_01,this.p_04_hito_01,this.p_04_hito_02,this.text_3,this.text_2,this.text_1,this.shape_1,this.text,this.shape,this.instance_1,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame5 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
      	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.9,488.7,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,488.7,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.p_05_hito_04 = new cjs.Text("Polo Norte", "bold 16px Arial");
	this.p_05_hito_04.textAlign = "center";
	this.p_05_hito_04.lineHeight = 18;
	this.p_05_hito_04.lineWidth = 138;
	this.p_05_hito_04.setTransform(808.6,358.3);

	this.p_05_hito_03 = new cjs.Text("Tratado de\nSan Petersburgo", "bold 16px Arial");
	this.p_05_hito_03.textAlign = "center";
	this.p_05_hito_03.lineHeight = 16;
	this.p_05_hito_03.lineWidth = 139;
	this.p_05_hito_03.setTransform(643,350.5);

	this.p_05_hito_02 = new cjs.Text("Guerra \nruso - japonesa", "bold 16px Arial");
	this.p_05_hito_02.textAlign = "center";
	this.p_05_hito_02.lineHeight = 18;
	this.p_05_hito_02.lineWidth = 126;
	this.p_05_hito_02.setTransform(473.6,349.5);

	this.p_05_hito_01 = new cjs.Text("Rebelión de los bóxers", "bold 16px Arial");
	this.p_05_hito_01.textAlign = "center";
	this.p_05_hito_01.lineHeight = 18;
	this.p_05_hito_01.lineWidth = 129;
	this.p_05_hito_01.setTransform(91.1,349.5);




if (boton == 1)
	this.mc_boto_01 = new lib.mc_Imperialismo("single", 1);
    else
	this.mc_boto_01 = new lib.mc_Imperialismo();
        
	this.mc_boto_01.setTransform(94.1,366.5,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
  if (boton == 2)
	this.mc_boto_02 = new lib.mc_Imperialismo("single", 1);
    else
	this.mc_boto_02 = new lib.mc_Imperialismo();
	this.mc_boto_02.setTransform(476.3,366.5,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
  if (boton == 3)
	this.mc_boto_03 = new lib.mc_Imperialismo("single", 1);
    else
	this.mc_boto_03 = new lib.mc_Imperialismo();
	this.mc_boto_03.setTransform(645.4,366.5,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
   if (boton == 4)
	this.mc_boto_04 = new lib.mc_Imperialismo("single", 1);
    else
	this.mc_boto_04 = new lib.mc_Imperialismo();
	this.mc_boto_04.setTransform(810.9,366.5,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Imperialismo(), 3);
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
	
 
 
	this.p_01_tabla_01 = new cjs.Text("Segunda revolución industrial", "bold 15px Arial");
	this.p_01_tabla_01.textAlign = "center";
	this.p_01_tabla_01.lineHeight = 17;
	this.p_01_tabla_01.lineWidth = 424;
	this.p_01_tabla_01.setTransform(253.4,460.1);

	this.p_01_tabla_02 = new cjs.Text("Imperialismo", "bold 15px Arial");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 17;
	this.p_01_tabla_02.lineWidth = 616;
	this.p_01_tabla_02.setTransform(348,501.9);
	
	this.instance = new lib.Mapadebits27();
	this.instance.setTransform(813.1,395.8);

	this.instance_1 = new lib.Mapadebits26();
	this.instance_1.setTransform(474.1,395.8);
	
	this.shape = new lib.Mapadebits26();
        
	//this.shape.graphics.f().s("#1A171B").ss(2,1,1).p("AAAl5IAALz");
	this.shape.setTransform(645.6,472.9-80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(645.6,510.9,1.047,1);

//	this.shape_2 = new cjs.Shape();
//	this.shape_2.graphics.f().s("#1A171B").ss(2,1,1).p("AAAhrIAADW"); 
//	this.shape_2.setTransform(645.8,407.6);

	this.text = new cjs.Text("1907", "bold 16px Arial");
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(621.5,418.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(475.2,510.9,1.047,1);

	this.text_1 = new cjs.Text("1905", "bold 16px Arial");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(451.1,418.6);

	this.shape_4 = new lib.Mapadebits26();
	//this.shape_4.graphics.f().s("#1A171B").ss(2,1,1).p("AAAl5IAALz");
	this.shape_4.setTransform(43.2,471.3-80,1,1.039);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_5.setTransform(43.2,510.9,1.047,1);

//	this.shape_6 = new cjs.Shape();
//	this.shape_6.graphics.f().s("#1A171B").ss(2,1,1).p("AAAhrIAADW");
//	this.shape_6.setTransform(43.4,401.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_7.setTransform(814.2,510.9,1.047,1);

	this.text_2 = new cjs.Text("1909", "bold 16px Arial");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(790.1,418.6);

	this.text_3 = new cjs.Text("1910", "bold 18px Arial");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 58;
	this.text_3.setTransform(883.4,413);

	this.text_4 = new cjs.Text("1900", "bold 18px Arial");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(15.4,413);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_8.setTransform(475.9,445.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8BB1D8").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_9.setTransform(475.1,510.7,1,1.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_10.setTransform(475.2,468.5,1,1.528);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame4());
        });
            this.btn_next.on("click", function (evt) {
            putStage(new lib.frame6());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_10,this.shape_9,this.shape_8,this.text_4,this.text_3,this.text_2,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.text_1,this.shape_3,this.text,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance,this.p_01_tabla_02,this.p_01_tabla_01,this.mc_boto_01,this.mc_boto_02,this.mc_boto_03,this.mc_boto_04,this.p_05_hito_01,this.p_05_hito_02,this.p_05_hito_03,this.p_05_hito_04,this.btn_next,this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    
    
 (lib.frame6 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
      	// Capa 1
	this.p_06_hito_04 = new cjs.Text("Conferencia de París", "bold 16px Arial");
	this.p_06_hito_04.textAlign = "center";
	this.p_06_hito_04.lineHeight = 18;
	this.p_06_hito_04.lineWidth = 127;
	this.p_06_hito_04.setTransform(848.3,349.3);

	this.p_06_hito_03 = new cjs.Text("Armisticio", "bold 16px Arial");
	this.p_06_hito_03.textAlign = "center";
	this.p_06_hito_03.lineHeight = 18;
	this.p_06_hito_03.lineWidth = 139;
	this.p_06_hito_03.setTransform(676.1,358.6);

	this.p_06_hito_02 = new cjs.Text("Batalla de Verdún", "bold 16px Arial");
	this.p_06_hito_02.textAlign = "center";
	this.p_06_hito_02.lineHeight = 18;
	this.p_06_hito_02.lineWidth = 126;
	this.p_06_hito_02.setTransform(500.7,349.5);

	this.p_06_hito_01 = new cjs.Text("Atentado de Sarajevo", "bold 16px Arial");
	this.p_06_hito_01.textAlign = "center";
	this.p_06_hito_01.lineHeight = 18;
	this.p_06_hito_01.lineWidth = 139;
	this.p_06_hito_01.setTransform(323.8,349.5);

	this.p_06_tabla_04 = new cjs.Text("Posguerra", "bold 15px Arial");
	this.p_06_tabla_04.textAlign = "center";
	this.p_06_tabla_04.lineHeight = 17;
	this.p_06_tabla_04.lineWidth = 144;
	this.p_06_tabla_04.setTransform(833,479.5);

	this.p_06_tabla_03 = new cjs.Text("Primera Guerra Mundial", "bold 15px Arial");
	this.p_06_tabla_03.textAlign = "center";
	this.p_06_tabla_03.lineHeight = 17;
	this.p_06_tabla_03.lineWidth = 343;
	this.p_06_tabla_03.setTransform(584.3,479.5);

	this.p_01_tabla_01 = new cjs.Text("Segunda revolución industrial", "bold 15px Arial");
	this.p_01_tabla_01.textAlign = "center";
	this.p_01_tabla_01.lineHeight = 17;
	this.p_01_tabla_01.lineWidth = 365;
	this.p_01_tabla_01.setTransform(223.9,460.1);

	this.p_01_tabla_02 = new cjs.Text("Imperialismo", "bold 15px Arial");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 17;
	this.p_01_tabla_02.lineWidth = 365;
	this.p_01_tabla_02.setTransform(222.7,501.9);

	this.instance = new lib.Mapadebits32();
	this.instance.setTransform(759.2,376.7);

	this.instance_1 = new lib.Mapadebits31();
	this.instance_1.setTransform(673.1,390.9);

	this.instance_2 = new lib.Mapadebits30();
	this.instance_2.setTransform(537.2,390.9);

	this.instance_3 = new lib.Mapadebits29();
	this.instance_3.setTransform(344.4,376.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(759.9,512.6,1.047,1);

	this.text = new cjs.Text("1919", "bold 16px Arial");
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(750,415);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(673.8,512.6,1.047,1);

	this.text_1 = new cjs.Text("1918", "bold 16px Arial");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(649.2,415);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(537.9,512.6,1.047,1);

	this.text_2 = new cjs.Text("1916", "bold 16px Arial");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(513.3,415);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(411.2,512.6,1.047,1);

	this.text_3 = new cjs.Text("1914", "bold 16px Arial");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 49;
	this.text_3.setTransform(386.7,415);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.9,488.7,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_4.setTransform(475.9,445.2);

	this.text_4 = new cjs.Text("1920", "bold 18px Arial");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 58;
	this.text_4.setTransform(875.4,413);

	this.text_5 = new cjs.Text("1910", "bold 18px Arial");
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 55;
	this.text_5.setTransform(15.4,413);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8BB1D8").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_5.setTransform(226.2,510.9,0.427,1.475,0,0,0,0,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_6.setTransform(226.3,468.5,0.427,1.528);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E44E6D").s().p("AqhCRIAAkiIVDAAIAAEig");
	this.shape_7.setTransform(585.9,489.2,2.588,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C398BF").s().p("AqhCRIAAkiIVDAAIAAEig");
	this.shape_8.setTransform(835.3,489.2,1.111,2.9,0,0,180);


	



if (boton == 1)
	this.mc_boto_01 = new lib.mc_primera("single", 1);
    else
	this.mc_boto_01 = new lib.mc_primera();
        
	this.mc_boto_01.setTransform(326.6,366.5,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_primera(), 3);
  if (boton == 2)
	this.mc_boto_02 = new lib.mc_primera("single", 1);
    else
	this.mc_boto_02 = new lib.mc_primera();
	this.mc_boto_02.setTransform(503.4,366.5,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_primera(), 3);
  if (boton == 3)
	this.mc_boto_03 = new lib.mc_primera("single", 1);
    else
	this.mc_boto_03 = new lib.mc_primera();
	this.mc_boto_03.setTransform(678.5,366.5,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_primera(), 3);
   if (boton == 4)
	this.mc_boto_04 = new lib.mc_primera("single", 1);
    else
	this.mc_boto_04 = new lib.mc_primera();
	this.mc_boto_04.setTransform(850.8,366.5,0.89,0.89);
 new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_primera(), 3);
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
	
 

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame5());
        });
         this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo,this.home,  this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.text_5,this.text_4,this.shape_4,this.btn_prev,this.text_3,this.shape_3,this.text_2,this.shape_2,this.text_1,this.shape_1,this.text,this.shape,this.instance_3,this.instance_2,this.instance_1,this.instance,this.p_01_tabla_02,this.p_01_tabla_01,this.p_06_tabla_03,this.p_06_tabla_04,this.mc_boto_01,this.mc_boto_02,this.mc_boto_03,this.mc_boto_04,this.p_06_hito_01,this.p_06_hito_02,this.p_06_hito_03,this.p_06_hito_04);
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
   
   (lib._0009FU01 = function() {
	this.initialize(img._0009FU01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib._0009FU01_1 = function() {
	this.initialize(img._0009FU01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,530);


(lib._0009V301 = function() {
	this.initialize(img._0009V301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib._0009V301_1 = function() {
	this.initialize(img._0009V301_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,530);


(lib._000A5A01 = function() {
	this.initialize(img._000A5A01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,533,530);


(lib._000FGR01 = function() {
	this.initialize(img._000FGR01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib._000FGR01_1 = function() {
	this.initialize(img._000FGR01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,484,530);


(lib._000GI301 = function() {
	this.initialize(img._000GI301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,680,530);


(lib._000HTK01 = function() {
	this.initialize(img._000HTK01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib._000HTK01_1 = function() {
	this.initialize(img._000HTK01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,364,530);


(lib._000ISU01 = function() {
	this.initialize(img._000ISU01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,661,530);


(lib._000K5Q01 = function() {
	this.initialize(img._000K5Q01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,716,530);


(lib._000K7P01 = function() {
	this.initialize(img._000K7P01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,530);


(lib._000LE601 = function() {
	this.initialize(img._000LE601);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,502,530);


(lib._000S1A01 = function() {
	this.initialize(img._000S1A01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,530);


(lib._000TT401 = function() {
	this.initialize(img._000TT401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,750);


(lib._0014H401 = function() {
	this.initialize(img._0014H401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,530);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.Mapadebits10 = function() {
	this.initialize(img.Mapadebits10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,212);


(lib.Mapadebits11 = function() {
	this.initialize(img.Mapadebits11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,28);


(lib.Mapadebits12 = function() {
	this.initialize(img.Mapadebits12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,28);


(lib.Mapadebits13 = function() {
	this.initialize(img.Mapadebits13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,28);


(lib.Mapadebits14 = function() {
	this.initialize(img.Mapadebits14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,26);


(lib.Mapadebits15 = function() {
	this.initialize(img.Mapadebits15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,41);


(lib.Mapadebits16 = function() {
	this.initialize(img.Mapadebits16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,42);


(lib.Mapadebits17 = function() {
	this.initialize(img.Mapadebits17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,42);


(lib.Mapadebits18 = function() {
	this.initialize(img.Mapadebits18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,80);


(lib.Mapadebits19 = function() {
	this.initialize(img.Mapadebits19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,71);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.Mapadebits20 = function() {
	this.initialize(img.Mapadebits20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,95);


(lib.Mapadebits21 = function() {
	this.initialize(img.Mapadebits21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,78);


(lib.Mapadebits22 = function() {
	this.initialize(img.Mapadebits22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,78);


(lib.Mapadebits23 = function() {
	this.initialize(img.Mapadebits23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,78);


(lib.Mapadebits24 = function() {
	this.initialize(img.Mapadebits24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,123);


(lib.Mapadebits25 = function() {
	this.initialize(img.Mapadebits25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,123);


(lib.Mapadebits26 = function() {
	this.initialize(img.Mapadebits26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,116);


(lib.Mapadebits27 = function() {
	this.initialize(img.Mapadebits27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,116);


(lib.Mapadebits28 = function() {
	this.initialize(img.Mapadebits28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,47);


(lib.Mapadebits29 = function() {
	this.initialize(img.Mapadebits29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,140);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.Mapadebits30 = function() {
	this.initialize(img.Mapadebits30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,125);


(lib.Mapadebits31 = function() {
	this.initialize(img.Mapadebits31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,125);


(lib.Mapadebits32 = function() {
	this.initialize(img.Mapadebits32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,140);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,79);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,119);


(lib.Mapadebits7 = function() {
	this.initialize(img.Mapadebits7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,117);


(lib.Mapadebits8 = function() {
	this.initialize(img.Mapadebits8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,230);


(lib.Mapadebits9 = function() {
	this.initialize(img.Mapadebits9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,94);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.shutterstock_21995257_Gran = function() {
	this.initialize(img.shutterstock_21995257_Gran);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,661);


(lib.shutterstock_21995257_Peq = function() {
	this.initialize(img.shutterstock_21995257_Peq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,400);


(lib.shutterstock_36878500 = function() {
	this.initialize(img.shutterstock_36878500);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,506,530);


(lib.shutterstock_53508787 = function() {
	this.initialize(img.shutterstock_53508787);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,750);


(lib.shutterstock_53508787_1 = function() {
	this.initialize(img.shutterstock_53508787_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,524,530);


(lib.shutterstock_82683946 = function() {
	this.initialize(img.shutterstock_82683946);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,530);


(lib.Thinkstock_92818735 = function() {
	this.initialize(img.Thinkstock_92818735);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,437,530);


(lib.Thinkstock_92831130 = function() {
	this.initialize(img.Thinkstock_92831130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,369,530);


(lib.Thinkstock_92831130_2 = function() {
	this.initialize(img.Thinkstock_92831130_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,543);


(lib.Thinkstock_92844453 = function() {
	this.initialize(img.Thinkstock_92844453);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,429,530);


(lib.Thinkstock_92844453_1 = function() {
	this.initialize(img.Thinkstock_92844453_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.MarcaAgua = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AipD2QhNg0gghTQgVg2AAg5QABgVACgWQARhuBThIQBUhKBwAAQBvAABUBKQBUBIASBuQADAYAAATQAAA4gXA3QggBThMA0QhMA2hdAAQhdAAhMg2gAhPDYQgRANgIAMQAyAWA2AAQA2AAAzgWQgHgNgTgMQgigZgtAAQgsAAgjAZgAgxBvQg8AFg4AXQgcALgPAKQAeAoApAZQANgRAYgTQAughA2AAQA7AAAuAhQAWARALARQApgaAcglQgPgKgagKQg2gYg9gFQgVgFgeAAQgcAAgVAFgAjuBvQAGAMAEAHQANgKAZgJQBXgpBngBQBnABBZApQAYAIAOAJIAIgRQAUguAFgwIoNAAQADAuAVAwgAEFgTQAAgPgDgJQgHgtgXgoQgYAPgnAOQhRAdhUAAQhTAAhSgcQgqgOgWgPQgXAogHAsIgDAYIILAAIAAAAgAjRidQATANAjANQBJAbBSAAQBSAABHgdQAjgNATgPQgZghgvgeQgKASgWAQQgsAig7AAQg7AAgtgiQgQgKgLgOIgIgKQgsAegaAlgAhqjvIAGAHQAHAJALAGQAjAZAvAAQAwgBAhgZQAPgLAHgOQgygSg1gBQg4AAgyAXg");
	this.shape.setTransform(30,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.mc_Segunda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2E6C3").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8FBF67").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_primera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7CAD3").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E44E6D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_Imperialismo = function(mode,startPosition,loop) {
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


(lib.popup_ampliar_16 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(4));
        });

	// Imatge
	this.text = new cjs.Text("La Galería de los Espejos, en el palacio de Versalles (Francia), acogió la firma del tratado que puso fin a la Primera Guerra Mundial (28 de junio de 1919).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 703;
	this.text.setTransform(108,544);

	this.instance = new lib.shutterstock_53508787();
	this.instance.setTransform(110.1,43.2,0.651,0.651);

	// Capa 1
	this.txt_popup_ampliar_16 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_16.lineHeight = 25;
	this.txt_popup_ampliar_16.lineWidth = 51;
	this.txt_popup_ampliar_16.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_16,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_ampliar_15 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(3));
        });

	// Imatge
	this.instance = new lib._000FGR01_1();
	this.instance.setTransform(248.8,39.2,0.933,0.933);

	// Capa 1
	this.text = new cjs.Text("Guillermo II, rey de Prusia y emperador de Alemania (1888-1918).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 366;
	this.text.setTransform(250,544);

	this.txt_popup_ampliar_15 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_15.lineHeight = 25;
	this.txt_popup_ampliar_15.lineWidth = 51;
	this.txt_popup_ampliar_15.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_15,this.text,this.instance,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_ampliar_14 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(2));
        });

	// Imatge
	this.text = new cjs.Text("Metralleta Saint-Étienne en posición de tiro en el campo de entrenamiento de Cambronne\n(2 de agosto de 1917).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 416;
	this.text.setTransform(281,521);

	this.instance = new lib._000K7P01();
	this.instance.setTransform(282,44.2,0.882,0.882);

	// Capa 1
	this.txt_popup_ampliar_14 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_14.lineHeight = 25;
	this.txt_popup_ampliar_14.lineWidth = 51;
	this.txt_popup_ampliar_14.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_14,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_ampliar_13 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(1));
        });

	// Imatge
	this.text = new cjs.Text("El asesinato en Sarajevo del archiduque Francisco Fernando (heredero al trono de Austria), desencadenó la Primera Guerra Mundial.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 640;
	this.text.setTransform(153,538);

	this.instance = new lib._0009FU01_1();
	this.instance.setTransform(273,39.2,0.922,0.922);

	// Capa 1
	this.txt_popup_ampliar_13 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_13.lineHeight = 25;
	this.txt_popup_ampliar_13.lineWidth = 51;
	this.txt_popup_ampliar_13.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_13,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_zona_5_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_06_hito_04 = new cjs.Text("Conferencia de París", "bold 16px Arial", "#FFFFFF");
	this.p_06_hito_04.textAlign = "center";
	this.p_06_hito_04.lineHeight = 18;
	this.p_06_hito_04.lineWidth = 127;
	this.p_06_hito_04.setTransform(847.9,349.3);

	this.btn_ampliar_16 = new lib.btn_ampliar();
	this.btn_ampliar_16.setTransform(365.1,40.9,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_16, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_16.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_16());
        });
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E44E6D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(850.4,366.5,0.89,0.89);

	this.instance = new lib.shutterstock_53508787_1();
	this.instance.setTransform(99.2,28.5,0.539,0.539);

	this.txt_popup_5_04 = new cjs.Text("1919\n\nEntre 1919 y 1920 se celebró la conferencia de París, en la que se sancionaron distintos tratados de paz entre los aliados y las potencias perdedoras de la Gran Guerra. El tratado de Versalles obligó a Alemania a asumir la responsabilidad del conflicto y a pagar importantes sanciones de guerra.", "bold 20px Verdana");
	this.txt_popup_5_04.lineHeight = 22;
	this.txt_popup_5_04.lineWidth = 434;
	this.txt_popup_5_04.setTransform(397.8,27.5);
 var html = createDiv(txt['txt_popup_5_04'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_5_04 = new cjs.DOMElement(html);
        this.txt_popup_5_04.setTransform(403, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_5_04},{t:this.instance},{t:this.shape},{t:this.btn_ampliar_16},{t:this.p_06_hito_04}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.2,27.5,822.5,366.8);


(lib.popup_zona_5_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_15 = new lib.btn_ampliarneg();
	this.btn_ampliar_15.setTransform(344,40.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_15, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
  this.btn_ampliar_15.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_15());
        });
	this.p_06_hito_03 = new cjs.Text("Armisticio", "bold 16px Arial", "#FFFFFF");
	this.p_06_hito_03.textAlign = "center";
	this.p_06_hito_03.lineHeight = 18;
	this.p_06_hito_03.lineWidth = 139;
	this.p_06_hito_03.setTransform(675.7,358.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E44E6D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(678.1,366.5,0.89,0.89);

	this.instance = new lib._000FGR01_1();
	this.instance.setTransform(100,28.5,0.539,0.539);

	this.txt_popup_5_03 = new cjs.Text("1918\n\nEl agotamiento militar y económico de Alemania y Austria y la intervención estadounidense llevó a los imperios centrales a pedir el armisticio mientras asistían a su disolución. La firma del armisticio alemán (11 de noviembre) representó la caída del II Reich y el fin de las hostilidades.", "bold 20px Verdana");
	this.txt_popup_5_03.lineHeight = 22;
	this.txt_popup_5_03.lineWidth = 376;
	this.txt_popup_5_03.setTransform(437,27.5);
var html = createDiv(txt['txt_popup_5_03'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_5_03 = new cjs.DOMElement(html);
        this.txt_popup_5_03.setTransform(380, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_5_03},{t:this.instance},{t:this.shape},{t:this.p_06_hito_03},{t:this.btn_ampliar_15}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.4,27.5,654.6,365.8);


(lib.popup_zona_5_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_14 = new lib.btn_ampliar();
	this.btn_ampliar_14.setTransform(318,40.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_14, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_14.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_14());
        });
	this.p_06_hito_02 = new cjs.Text("Batalla de Verdún", "bold 16px Arial", "#FFFFFF");
	this.p_06_hito_02.textAlign = "center";
	this.p_06_hito_02.lineHeight = 18;
	this.p_06_hito_02.lineWidth = 126;
	this.p_06_hito_02.setTransform(500.3,349.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E44E6D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(502.9,366.5,0.89,0.89);

	this.instance = new lib._000K7P01();
	this.instance.setTransform(100,28.5,0.539,0.539);

	this.txt_popup_5_02 = new cjs.Text("1916\n\nEntre 1916 y 1917 se produjo la batalla de Verdún, en la que se enfrentaron los ejércitos francés y alemán. La lucha se convirtió en un auténtico infierno en el que murieron casi dos millones de combatientes sin que se produjese un cambio sustancial en la línea del frente occidental.", "bold 20px Verdana");
	this.txt_popup_5_02.lineHeight = 22;
	this.txt_popup_5_02.lineWidth = 366;
	this.txt_popup_5_02.setTransform(425,27.5);
var html = createDiv(txt['txt_popup_5_02'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_5_02 = new cjs.DOMElement(html);
        this.txt_popup_5_02.setTransform(355, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_5_02},{t:this.instance},{t:this.shape},{t:this.p_06_hito_02},{t:this.btn_ampliar_14}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(174.4,27.5,620.6,366.9);


(lib.popup_zona_5_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_13 = new lib.btn_ampliarneg();
	this.btn_ampliar_13.setTransform(320,41.2,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_13, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
  this.btn_ampliar_13.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_13());
        });
	this.instance = new lib._0009FU01_1();
	this.instance.setTransform(100,28,0.543,0.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_13}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.p_06_hito_01 = new cjs.Text("Atentado de Sarajevo", "bold 16px Arial", "#FFFFFF");
	this.p_06_hito_01.textAlign = "center";
	this.p_06_hito_01.lineHeight = 18;
	this.p_06_hito_01.lineWidth = 139;
	this.p_06_hito_01.setTransform(323.4,349.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E44E6D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(326.1,366.5,0.89,0.89);

	this.txt_popup_5_01 = new cjs.Text("1914\n\nEl 28 de junio se produjo el asesinato del archiduque Francisco Fernando en Sarajevo. La muerte del heredero del Imperio austrohúngaro a manos de un patriota serbio desencadenó el estallido de la I Guerra Mundial.", "bold 20px Verdana");
	this.txt_popup_5_01.lineHeight = 22;
	this.txt_popup_5_01.lineWidth = 398;
	this.txt_popup_5_01.setTransform(412.3,28.4);
var html = createDiv(txt['txt_popup_5_01'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_5_01 = new cjs.DOMElement(html);
        this.txt_popup_5_01.setTransform(360, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_5_01},{t:this.shape},{t:this.p_06_hito_01}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(153.4,28,661.2,366.3);


(lib.popup_ampliar_12 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(4));
        });

	// Imatge
	/*this.text = new cjs.Text("Portada de Le Petit Journal en la que se presenta la disputa entre los exploradores Robert Edwin Peary y Albert Cook por la gloria de ser el primero en llegar al Polo Norte.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 800;
	this.text.setTransform(76,516);*/
	
	var html = createDiv(txt['pie_foto_01'], "Verdana", "18px", '700px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(180,-100);

	this.instance = new lib.Thinkstock_92831130();
	this.instance.setTransform(312.6,39.2,0.879,0.879);

	// Capa 1
	this.txt_popup_ampliar_12 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_12.lineHeight = 25;
	this.txt_popup_ampliar_12.lineWidth = 51;
	this.txt_popup_ampliar_12.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_12,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_ampliar_11 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(3));
        });

	// Imatge
	this.instance = new lib.shutterstock_36878500();
	this.instance.setTransform(239.3,39.2,0.933,0.933);

	// Capa 1
	this.text = new cjs.Text("Mezquita de Jamea, 1324-1365 (Yazd, Irán).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 479;
	this.text.setTransform(238,540);

	this.txt_popup_ampliar_11 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_11.lineHeight = 25;
	this.txt_popup_ampliar_11.lineWidth = 51;
	this.txt_popup_ampliar_11.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_11,this.text,this.instance,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_ampliar_10 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(2));
        });

	// Imatge
	this.text = new cjs.Text("La segunda armada japonesa desembarcando cerca de Pi-Tseu-Rio.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 479;
	this.text.setTransform(238,540);

	this.instance = new lib._000S1A01();
	this.instance.setTransform(238.3,39.2,0.933,0.933);

	// Capa 1
	this.txt_popup_ampliar_10 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_10.lineHeight = 25;
	this.txt_popup_ampliar_10.lineWidth = 51;
	this.txt_popup_ampliar_10.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_10,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_ampliar_09 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(1));
        });

	// Imatge
	this.instance = new lib._0009V301_1();
	this.instance.setTransform(196.3,39.2,0.933,0.933);

	// Capa 1
	this.text = new cjs.Text("Tropas del vicealmirante británico Edward Seymour enfrentándose a los bóxers en Pekín (1900).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 479;
	this.text.setTransform(195,544);

	this.txt_popup_ampliar_09 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_09.lineHeight = 25;
	this.txt_popup_ampliar_09.lineWidth = 51;
	this.txt_popup_ampliar_09.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_09,this.text,this.instance,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_zona_4_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_12 = new lib.btn_ampliar();
	this.btn_ampliar_12.setTransform(300,41.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_12, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_12.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_12());
        });
	this.p_05_hito_04 = new cjs.Text("Polo Norte", "bold 16px Arial", "#FFFFFF");
	this.p_05_hito_04.textAlign = "center";
	this.p_05_hito_04.lineHeight = 18;
	this.p_05_hito_04.lineWidth = 138;
	this.p_05_hito_04.setTransform(808.1,358.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(810.4,366.5,0.89,0.89);

	this.instance = new lib.Thinkstock_92831130_2();
	this.instance.setTransform(100,28.4,0.489,0.489);

	this.txt_popup_4_04 = new cjs.Text("1909\n\nTras haber explorado Groenlandia, el estadounidense Robert E. Peary se convirtió en el primer hombre en llegar al Polo Norte. Sin embargo, un antiguo compañero de expediciones, el cirujano Albert Cook, dijo haber llegado en abril de 1908, aunque no pudo demostrarlo.", "bold 20px Verdana");
	this.txt_popup_4_04.lineHeight = 22;
	this.txt_popup_4_04.lineWidth = 370;
	this.txt_popup_4_04.setTransform(411.2,28.2);
var html = createDiv(txt['txt_popup_4_04'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_4_04 = new cjs.DOMElement(html);
        this.txt_popup_4_04.setTransform(340, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_4_04},{t:this.instance},{t:this.shape},{t:this.p_05_hito_04},{t:this.btn_ampliar_12}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(178.1,28.2,703.6,365.1);


(lib.popup_zona_4_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_11 = new lib.btn_ampliar();
	this.btn_ampliar_11.setTransform(352.6,43.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_11, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_11.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_11());
        });
	this.p_05_hito_03 = new cjs.Text("Tratado de\nSan Petersburgo", "14px Arial", "#FFFFFF");
	this.p_05_hito_03.textAlign = "center";
	this.p_05_hito_03.lineHeight = 16;
	this.p_05_hito_03.lineWidth = 139;
	this.p_05_hito_03.setTransform(642.5,350.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(644.9,366.5,0.89,0.89);

	this.instance = new lib.shutterstock_36878500();
	this.instance.setTransform(100,28.4,0.54,0.54);

	this.txt_popup_4_03 = new cjs.Text("1907\n\nEn el contexto del Gran Juego, en 1907, británicos y rusos acordaron el reparto de las zonas de influencia en Asia. El tratado de San Petersburgo supuso el reparto virtual de Persia y la renuncia a la expansión en Afganistán y el Tibet.", "bold 20px Verdana");
	this.txt_popup_4_03.lineHeight = 22;
	this.txt_popup_4_03.lineWidth = 405;
	this.txt_popup_4_03.setTransform(422.7,28.2);
var html = createDiv(txt['txt_popup_4_03'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_4_03 = new cjs.DOMElement(html);
        this.txt_popup_4_03.setTransform(395, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_4_03},{t:this.instance},{t:this.shape},{t:this.p_05_hito_03},{t:this.btn_ampliar_11}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132.8,28.2,699.2,365.1);


(lib.popup_zona_4_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_10 = new lib.btn_ampliarneg();
	this.btn_ampliar_10.setTransform(355,41.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_10, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
  this.btn_ampliar_10.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_10());
        });
	this.p_05_hito_02 = new cjs.Text("Guerra ruso-japonesa", "bold 16px Arial", "#FFFFFF");
	this.p_05_hito_02.textAlign = "center";
	this.p_05_hito_02.lineHeight = 18;
	this.p_05_hito_02.lineWidth = 126;
	this.p_05_hito_02.setTransform(473.2,349.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(475.8,366.5,0.89,0.89);

	this.txt_popup_4_02 = new cjs.Text("1904\n\nEl 27 de mayo acabó la guerra ruso-japonesa, iniciada un año antes tras la ocupación japonesa de Port-Arthur. La victoria nipona obligó a los rusos a retirarse de Manchuria y a tener que repartir la isla de Sajalín con los japoneses.", "bold 20px Verdana");
	this.txt_popup_4_02.lineHeight = 22;
	this.txt_popup_4_02.lineWidth = 379;
	this.txt_popup_4_02.setTransform(440.3,28.1);
var html = createDiv(txt['txt_popup_4_02'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_4_02 = new cjs.DOMElement(html);
        this.txt_popup_4_02.setTransform(390, 27 - 610);

	this.instance = new lib._000S1A01();
	this.instance.setTransform(100,28.4,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup_4_02},{t:this.shape},{t:this.p_05_hito_02},{t:this.btn_ampliar_10}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(157.9,28.1,665.8,366.3);


(lib.popup_zona_4_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_09 = new lib.btn_ampliar();
	this.btn_ampliar_09.setTransform(400,41.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_09, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_09.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_09());
        });
	this.p_05_hito_01 = new cjs.Text("Rebelión de los bóxer", "bold 16px Arial", "#FFFFFF");
	this.p_05_hito_01.textAlign = "center";
	this.p_05_hito_01.lineHeight = 18;
	this.p_05_hito_01.lineWidth = 129;
	this.p_05_hito_01.setTransform(90.6,349.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(93.6,366.5,0.89,0.89);

	this.instance = new lib._0009V301_1();
	this.instance.setTransform(100,28.8,0.539,0.539);

	this.txt_popup_4_01 = new cjs.Text("1900\n\nSe produjo la rebelión de los bóxers, un grupo místico xenófobo que surgió en contestación a las injerencias imperialistas en China. Tras el asalto a las delegaciones extranjeras en Pekín, el movimiento  fue aplastado con contundencia por las tropas occidentales.", "bold 20px Verdana");
	this.txt_popup_4_01.lineHeight = 22;
	this.txt_popup_4_01.lineWidth = 382;
	this.txt_popup_4_01.setTransform(461.6,27.6);
var html = createDiv(txt['txt_popup_4_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_4_01 = new cjs.DOMElement(html);
        this.txt_popup_4_01.setTransform(445, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_4_01},{t:this.instance},{t:this.shape},{t:this.p_05_hito_01},{t:this.btn_ampliar_09}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.3,27.6,825,366.7);


(lib.popup_ampliar_08 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(2));
        });

	// Imatge
	this.instance = new lib._000A5A01();
	this.instance.setTransform(227.3,39.2,0.933,0.933);

	// Capa 1
	this.text = new cjs.Text("Combatientes bóers.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 197;
	this.text.setTransform(225,544);

	this.txt_popup_ampliar_08 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_08.lineHeight = 25;
	this.txt_popup_ampliar_08.lineWidth = 51;
	this.txt_popup_ampliar_08.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_08,this.text,this.instance,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_ampliar_07 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(1));
        });

	// Imatge
	this.instance = new lib._000ISU01();
	this.instance.setTransform(166.3,39.2,0.933,0.933);

	// Capa 1
	this.text = new cjs.Text("Ataque de Kinshou, en Corea, durante la guerra chino-japonesa.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 593;
	this.text.setTransform(165,544);

	this.txt_popup_ampliar_07 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_07.lineHeight = 25;
	this.txt_popup_ampliar_07.lineWidth = 51;
	this.txt_popup_ampliar_07.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_07,this.text,this.instance,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_zona_3_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_08 = new lib.btn_ampliar();
	this.btn_ampliar_08.setTransform(388.6,41.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_08, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_08.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_08());
        });
	this.p_04_hito_02 = new cjs.Text("II guerra anglo-bóer", "bold 16px Arial", "#FFFFFF");
	this.p_04_hito_02.textAlign = "center";
	this.p_04_hito_02.lineHeight = 18;
	this.p_04_hito_02.lineWidth = 138;
	this.p_04_hito_02.setTransform(834.9,349.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(837,367.3,0.89,0.89);

	this.instance = new lib._000A5A01();
	this.instance.setTransform(116.5,28.3,0.542,0.542);

	this.txt_popup_3_02 = new cjs.Text("1899\n\nTras un primer enfrentamiento entre los bóers (granjeros de origen neerlandés asentados en Sudáfrica) y los británicos (1880-1881), se produjo la II guerra anglo-bóer (1899-1902). El conflicto concluyó con la derrota de las dos repúblicas bóers (Transvaal y de Orange), que pasaron a manos británicas con la promesa de autonomía.", "bold 20px Verdana");
	this.txt_popup_3_02.lineHeight = 22;
	this.txt_popup_3_02.lineWidth = 434;
	this.txt_popup_3_02.setTransform(426.3,26);
var html = createDiv(txt['txt_popup_3_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_3_02 = new cjs.DOMElement(html);
        this.txt_popup_3_02.setTransform(426, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_3_02},{t:this.instance},{t:this.shape},{t:this.p_04_hito_02},{t:this.btn_ampliar_08}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.5,26,791.9,368.8);


(lib.popup_zona_3_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_07 = new lib.btn_ampliar();
	this.btn_ampliar_07.setTransform(429.6,41.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_07, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_07.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_07());
        });
	this.p_04_hito_01 = new cjs.Text("Guerra chino-japonesa", "bold 16px Arial", "#FFFFFF");
	this.p_04_hito_01.textAlign = "center";
	this.p_04_hito_01.lineHeight = 18;
	this.p_04_hito_01.lineWidth = 138;
	this.p_04_hito_01.setTransform(473.3,349.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(475.4,367.3,0.89,0.89);

	this.instance = new lib._000ISU01();
	this.instance.setTransform(88.9,28.3,0.542,0.542);

	this.txt_popup_3_01 = new cjs.Text("1895\n\nLa lucha entre China y Japón por convertirse en la potencia hegemónica de Extremo Oriente, llevó a la ocupación japonesa de la península de Corea. La superioridad de las fuerzas niponas culminó con la paz de Shimonoseki, por la que China hubo de otorgar la independencia a Corea y ceder Formosa y Port-Arthur a Japón. ", "bold 20px Verdana");
	this.txt_popup_3_01.lineHeight = 22;
	this.txt_popup_3_01.lineWidth = 412;
	this.txt_popup_3_01.setTransform(460.8,26);
var html = createDiv(txt['txt_popup_3_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_3_01 = new cjs.DOMElement(html);
        this.txt_popup_3_01.setTransform(460, 27 - 610);
        
        

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_3_01},{t:this.instance},{t:this.shape},{t:this.p_04_hito_01},{t:this.btn_ampliar_07}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88.9,26,788.4,368.8);


(lib.popup_ampliar_06_2 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame3(4));
        });

	// Imatge
	this.instance = new lib.shutterstock_21995257_Gran();
	this.instance.setTransform(107.3,44.2,0.732,0.732);

	// Capa 1
	this.text = new cjs.Text("El submarino de Isaac Peral fue el precedente del submarino Nerval, proyectado por Labeuf en 1899.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 728;
	this.text.setTransform(107,537);

	this.txt_popup_ampliar_06_2 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_06_2.lineHeight = 25;
	this.txt_popup_ampliar_06_2.lineWidth = 51;
	this.txt_popup_ampliar_06_2.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_06_2,this.text,this.instance,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_ampliar_06 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame3(3));
        });

	// Imatge
	this.text = new cjs.Text("Leopoldo II, rey de Bélgica (1865-1909) y soberano del estado independiente del Congo belga (1885-1909).", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 400;
	this.text.setTransform(473,516);

	this.instance = new lib.Thinkstock_92818735();
	this.instance.setTransform(282.3,39.2,0.881,0.881);

	// Capa 1
	this.txt_popup_ampliar_06 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_06.lineHeight = 25;
	this.txt_popup_ampliar_06.lineWidth = 51;
	this.txt_popup_ampliar_06.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_06,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


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
	this.instance = new lib.Thinkstock_92844453();
	this.instance.setTransform(275.3,39.2,0.933,0.933);

	// Capa 1
	this.text = new cjs.Text("Otto von Bismarck, estadista alemán.", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 344;
	this.text.setTransform(473,541);

	this.txt_popup_ampliar_05 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_05.lineHeight = 25;
	this.txt_popup_ampliar_05.lineWidth = 51;
	this.txt_popup_ampliar_05.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_05,this.text,this.instance,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


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
	this.instance = new lib._0014H401();
	this.instance.setTransform(165.3,39.2,0.933,0.933);

	// Capa 1
	this.text = new cjs.Text("La esfinge de Gizeh y la pirámide de Kefrén (El Cairo, Egipto).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 563;
	this.text.setTransform(165,544);

	this.txt_popup_ampliar_04 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_04.lineHeight = 25;
	this.txt_popup_ampliar_04.lineWidth = 51;
	this.txt_popup_ampliar_04.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_04,this.text,this.instance,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


(lib.popup_zona_2_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_03_hito_04 = new cjs.Text("Submarino de Isaac Peral", "15px Arial", "#FFFFFF");
	this.p_03_hito_04.textAlign = "center";
	this.p_03_hito_04.lineHeight = 17;
	this.p_03_hito_04.lineWidth = 137;
	this.p_03_hito_04.setTransform(760.1,349.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8FBF67").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(761.9,367.3,0.89,0.89);

	this.btn_ampliar_06_2 = new lib.btn_ampliar();
	this.btn_ampliar_06_2.setTransform(353.2,42.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_06_2, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_06_2.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_06_2());
        });
	this.instance = new lib.shutterstock_21995257_Peq();
	this.instance.setTransform(133.5,28.3,0.605,0.605);

	this.txt_popup_2_04 = new cjs.Text("1888\n\nSe botó el submarino militar de Isaac Peral. La nave contaba con dos motores y dos torpedos.  Se pensó utilizar el prototipo en la guerra hispano-norteamericana, pero el proyecto fue cancelado. De forma paralela, otros inventores trabajaban en sus propios modelos de submarino.", "bold 20px Verdana");
	this.txt_popup_2_04.lineHeight = 22;
	this.txt_popup_2_04.lineWidth = 446;
	this.txt_popup_2_04.setTransform(387.6,28.3);
var html = createDiv(txt['txt_popup_2_04'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_2_04 = new cjs.DOMElement(html);
        this.txt_popup_2_04.setTransform(400, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_2_04},{t:this.instance},{t:this.btn_ampliar_06_2},{t:this.shape},{t:this.p_03_hito_04}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.5,28.3,703.8,365.8);


(lib.popup_zona_2_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_06 = new lib.btn_ampliarneg();
	this.btn_ampliar_06.setTransform(361.6,42.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_06, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
  this.btn_ampliar_06.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_06());
        });
	this.p_03_hito_03 = new cjs.Text("Leopoldo II, soberano del Congo", "15px Arial", "#FFFFFF");
	this.p_03_hito_03.textAlign = "center";
	this.p_03_hito_03.lineHeight = 15;
	this.p_03_hito_03.lineWidth = 137;
	this.p_03_hito_03.setTransform(558.8,344.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(560.6,367.3,0.89,0.89);

	this.instance = new lib.Thinkstock_92818735();
	this.instance.setTransform(141.9,28.3,0.544,0.544);

	this.txt_popup_2_03 = new cjs.Text("1885\n\nEn el contexto de la conferencia de Berlín, el rey Leopoldo II de Bélgica adquirió el Congo como una posesión personal que legaría al país a su muerte. Antes había encargado a Henry Morton Stanley la exploración de la cuenca del río Congo (1879-1884).", "bold 20px Verdana");
	this.txt_popup_2_03.lineHeight = 22;
	this.txt_popup_2_03.lineWidth = 438;
	this.txt_popup_2_03.setTransform(396,28.3);
var html = createDiv(txt['txt_popup_2_03'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_2_03 = new cjs.DOMElement(html);
        this.txt_popup_2_03.setTransform(396, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_2_03},{t:this.instance},{t:this.shape},{t:this.p_03_hito_03},{t:this.btn_ampliar_06}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141.9,28.3,696.3,374.8);


(lib.popup_zona_2_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_05 = new lib.btn_ampliar();
	this.btn_ampliar_05.setTransform(355.6,41.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_05, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_05.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_05());
        });
	this.p_03_hito_02 = new cjs.Text("Conferencia de Berlín", "bold 16px Arial", "#FFFFFF");
	this.p_03_hito_02.textAlign = "center";
	this.p_03_hito_02.lineHeight = 18;
	this.p_03_hito_02.lineWidth = 120;
	this.p_03_hito_02.setTransform(387.2,349.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(389.6,367.3,0.89,0.89);

	this.instance = new lib.Thinkstock_92844453();
	this.instance.setTransform(140.4,27.8,0.543,0.543);

	this.txt_popup_2_02 = new cjs.Text("1885\n\nEntre 1884 y 1885 se celebró la conferencia de Berlín. Organizada por el canciller alemán Otto von Bismarck, reunió a las distintas potencias coloniales del momento para acordar un reparto de África. Las potencias europeas se comprometieron a limitar su derecho de soberanía a las zonas ocupadas.", "bold 20px Verdana");
	this.txt_popup_2_02.lineHeight = 22;
	this.txt_popup_2_02.lineWidth = 426;
	this.txt_popup_2_02.setTransform(403.2,28.6);
var html = createDiv(txt['txt_popup_2_02'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_2_02 = new cjs.DOMElement(html);
        this.txt_popup_2_02.setTransform(403, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_2_02},{t:this.instance},{t:this.shape},{t:this.p_03_hito_02},{t:this.btn_ampliar_05}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140.4,27.8,693.2,367);


(lib.popup_zona_2_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_04 = new lib.btn_ampliar();
	this.btn_ampliar_04.setTransform(412.6,42.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_04, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_04.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_04());
        });
	this.p_03_hito_01 = new cjs.Text("Ocupación de Egipto", "bold 16px Arial", "#FFFFFF");
	this.p_03_hito_01.textAlign = "center";
	this.p_03_hito_01.lineHeight = 18;
	this.p_03_hito_01.lineWidth = 118;
	this.p_03_hito_01.setTransform(158.7,349.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(161.3,367.3,0.89,0.89);

	this.instance = new lib._0014H401();
	this.instance.setTransform(100,28.6,0.538,0.538);

	this.txt_popup_2_01 = new cjs.Text("1882\n\nTras la adquisición de las acciones egipcias del canal de Suez (acabado en 1869), los británicos aprovecharon una insurrección nacionalista en Alejandría para ocupar Egipto (se convirtió en protectorado en 1914). Con ello se consolidaba el dominio británico del Mediterráneo y el control marítimo hacia Asia.", "bold 20px Verdana");
	this.txt_popup_2_01.lineHeight = 22;
	this.txt_popup_2_01.lineWidth = 443;
	this.txt_popup_2_01.setTransform(446.7,28.8);
var html = createDiv(txt['txt_popup_2_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_2_01 = new cjs.DOMElement(html);
        this.txt_popup_2_01.setTransform(450, 27 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_2_01},{t:this.instance},{t:this.shape},{t:this.p_03_hito_01},{t:this.btn_ampliar_04}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.9,28.6,819.3,366.2);


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
	this.text = new cjs.Text("Victoria I, reina del Reino Unido (1837-1901)\ny emperatriz de las Indias (1876-1901).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 413;
	this.text.setTransform(267,544);

	this.instance = new lib._000HTK01_1();
	this.instance.setTransform(306.3,39.2,0.933,0.933);

	// Capa 1
	this.txt_popup_ampliar_03 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_03.lineHeight = 25;
	this.txt_popup_ampliar_03.lineWidth = 51;
	this.txt_popup_ampliar_03.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_03,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


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
	this.text = new cjs.Text("David Livingstone, explorador y misionero británico.", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 474;
	this.text.setTransform(470,544);

	this.instance = new lib.shutterstock_82683946();
	this.instance.setTransform(274.2,39.2,0.933,0.933);

	// Capa 1
	this.txt_popup_ampliar_02 = new cjs.Text("", "23px Verdana");
	this.txt_popup_ampliar_02.lineHeight = 25;
	this.txt_popup_ampliar_02.lineWidth = 51;
	this.txt_popup_ampliar_02.setTransform(-0.9,87);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_02,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,951,608);


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
	this.instance = new lib._000LE601();
	this.instance.setTransform(243.1,43.9,0.922,0.922);

	// Capa 1
	this.text = new cjs.Text("El explorador británico Henry Morton Stanley encontró a David Livingstone en 1871, junto al lago Tanganyika.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 505;
	this.text.setTransform(225,543);

	this.txt_popup_ampliar_01 = new cjs.Text("", "bold 16px Arial");
	this.txt_popup_ampliar_01.textAlign = "center";
	this.txt_popup_ampliar_01.lineHeight = 18;
	this.txt_popup_ampliar_01.lineWidth = 88;
	this.txt_popup_ampliar_01.setTransform(72.7,140.1);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.txt_popup_ampliar_01,this.text,this.instance,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_1_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.p_02_hito_03 = new cjs.Text("Victoria I, emperatriz", "bold 16px Arial", "#FFFFFF");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 18;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(546.2,349.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(548.1,367.3,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.p_02_hito_03}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.btn_ampliar_03 = new lib.btn_ampliarneg();
	this.btn_ampliar_03.setTransform(310.6,41.9,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_03, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
  this.btn_ampliar_03.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_03());
        });
	this.txt_popup_1_03 = new cjs.Text("1876\n\nLa reina Victoria I fue proclamada emperatriz de las Indias tras la promulgación de una ley impulsada por el conservador B. Disraeli para tal efecto. La India, considerada la \"joya de la Corona\", era la posesión más importante del Imperio británico, cuyos dominios se extendían por los cinco continentes.", "bold 20px Verdana");
	this.txt_popup_1_03.lineHeight = 22;
	this.txt_popup_1_03.lineWidth = 503;
	this.txt_popup_1_03.setTransform(343.1,28.3);
var html = createDiv(txt['txt_popup_1_03'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_1_03 = new cjs.DOMElement(html);
        this.txt_popup_1_03.setTransform(343, 27 - 610);

	this.instance = new lib._000HTK01_1();
	this.instance.setTransform(131.2,29.1,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup_1_03},{t:this.btn_ampliar_03}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.2,28.3,719,366.5);


(lib.popup_zona_1_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.p_02_hito_02 = new cjs.Text("Muerte de Livingstone", "bold 16px Arial", "#FFFFFF");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 18;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(372.8,349.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(374.7,367.3,0.89,0.89);

	this.btn_ampliar_02 = new lib.btn_ampliar();
	this.btn_ampliar_02.setTransform(335.6,40.1,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_02, 0, 1, 2, false, new lib.btn_ampliar(), 3);
  this.btn_ampliar_02.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_02());
        });
	this.txt_popup_1_02 = new cjs.Text("1873\n\nEl 1 de mayo, David Livingstone encontró la muerte en Chitambo (Zambia). El explorador dejaba una vida en la que había hecho grandes descubrimientos, entre los que se contaban los del lago Ngami, el Zambeze, las cataratas Victoria, el lago Malawi y las orillas del lago Tanganyika.", "bold 20px Verdana");
	this.txt_popup_1_02.lineHeight = 22;
	this.txt_popup_1_02.lineWidth = 474;
	this.txt_popup_1_02.setTransform(367.1,28.3);
var html = createDiv(txt['txt_popup_1_02'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_1_02 = new cjs.DOMElement(html);
        this.txt_popup_1_02.setTransform(367, 27 - 610);

	this.instance = new lib.shutterstock_82683946();
	this.instance.setTransform(122.4,28.3,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup_1_02},{t:this.btn_ampliar_02},{t:this.shape},{t:this.p_02_hito_02}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.4,28.3,723,366.5);


(lib.popup_zona_1_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_01 = new lib.btn_ampliar();
	this.btn_ampliar_01.setTransform(374.5,41.6,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_01());
        });

	this.p_02_hito_01 = new cjs.Text("Stanley encuentra a Livingstone", "15px Arial", "#FFFFFF");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 15;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(137.3,345.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(138.9,367.3,0.89,0.89);

	this.txt_popup_1_01 = new cjs.Text("\n\nEl 10 de noviembre, Henry Morton Stanley, que había sido enviado a África ecuatorial con tal propósito, encontró al desaparecido David Livingstone en Ujiji, a orillas del lago Tanganyika. Al encontrarse pronunció las conocidas palabras: \"El señor Livingstone, supongo\".", "bold 20px Verdana");
	this.txt_popup_1_01.lineHeight = 22;
	this.txt_popup_1_01.lineWidth = 431;
	this.txt_popup_1_01.setTransform(406.8,28.4);
        var html = createDiv(txt['txt_popup_1_01'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup_1_01 = new cjs.DOMElement(html);
        this.txt_popup_1_01.setTransform(406, 28 - 610);

	this.instance = new lib._000LE601();
	this.instance.setTransform(117.7,28.5,0.545,0.545);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup_1_01},{t:this.shape},{t:this.p_02_hito_01},{t:this.btn_ampliar_01}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.7,28.4,773.7,365.7);

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