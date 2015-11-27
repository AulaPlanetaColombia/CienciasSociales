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
	this.btn_04.setTransform(810.4,482.6,1.167,1.294);
	new cjs.ButtonHelper(this.btn_04, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_03 = new lib.btn_01();
	this.btn_03.setTransform(592.8,482.6,1.318,1.294);
	new cjs.ButtonHelper(this.btn_03, 0, 1, 2, false, new lib.btn_01(), 3);

	this.btn_02 = new lib.btn_02();
	this.btn_02.setTransform(361.7,482.6,1.336,1.294);
	new cjs.ButtonHelper(this.btn_02, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_01 = new lib.btn_01();
	this.btn_01.setTransform(143,482.6,1.187,1.294);
	new cjs.ButtonHelper(this.btn_01, 0, 1, 2, false, new lib.btn_01(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#000000").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape.setTransform(809.7,482.6,1.166,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D1CA").s("#000000").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape_1.setTransform(143.6,482.6,1.167,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_2.setTransform(592.9,482.6,1.319,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3D1CA").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_3.setTransform(592.9,482.6,1.319,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_4.setTransform(361.7,482.6,1.332,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AtlBdIAAi5IbLAAIAAC5g");
	this.shape_5.setTransform(361.7,482.6,1.332,1);

	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(784.4,271.4);

	this.instance_1 = new lib.Mapadebits4();
	this.instance_1.setTransform(495.8,158.4);

	this.instance_2 = new lib.Mapadebits2();
	this.instance_2.setTransform(255.3,161.4);

	this.instance_3 = new lib.Mapadebits1();
	this.instance_3.setTransform(35.3,272.4);

	this.text = new cjs.Text("Selecciona en la línea de la cronología un período de tiempo", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 372;
	this.text.setTransform(473.5,542);

	this.text_1 = new cjs.Text("IGM", "bold 14px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 44;
	this.text_1.setTransform(884.3,441.2);

	this.text_2 = new cjs.Text("Imperialismo", "bold 14px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 302;
	this.text_2.setTransform(705.4,439.5);

	this.text_3 = new cjs.Text("Colonialismo", "bold 14px Verdana");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 500;
	this.text_3.setTransform(296.2,439.5);

	this.text_4 = new cjs.Text("Segunda Revolución Industrial", "bold 14px Verdana");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 16;
	this.text_4.lineWidth = 302;
	this.text_4.setTransform(708.4,405.6);

	this.text_5 = new cjs.Text("Primera Revolución Industrial", "bold 14px Verdana");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 16;
	this.text_5.lineWidth = 496;
	this.text_5.setTransform(293.5,409.2);

	this.text_6 = new cjs.Text("1917\n\nRevolución de Octubre", "bold 14px Verdana");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 16;
	this.text_6.lineWidth = 118;
	this.text_6.setTransform(776.1,275.3);
        var html = createDiv(txt['p_01_hito_05'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.text_6 = new cjs.DOMElement(html);
        this.text_6.setTransform(776.3-135, 288 - 610);

	this.text_7 = new cjs.Text("1864\n\nPrimera\nInternacional", "bold 14px Verdana");
	this.text_7.lineHeight = 16;
	this.text_7.lineWidth = 184;
	this.text_7.setTransform(557.3,163);
        var html = createDiv(txt['p_01_hito_04'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_7 = new cjs.DOMElement(html);
        this.text_7.setTransform(557.3, 175 - 610);

	this.text_8 = new cjs.Text("1834\n\nGreat Trade Union", "italic bold 14px Verdana");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 16;
	this.text_8.lineWidth = 113;
	this.text_8.setTransform(246.2,166);
        var html = createDiv(txt['p_01_hito_03'], "Verdana", "14px", '85px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.text_8 = new cjs.DOMElement(html);
        this.text_8.setTransform(246-85, 178 - 610);

	this.text_9 = new cjs.Text("1848\n\nManifiesto comunista", "bold 14px Verdana");
	this.text_9.lineHeight = 16;
	this.text_9.lineWidth = 98;
	this.text_9.setTransform(409.4,278);
        var html = createDiv(txt['p_01_hito_02'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_9 = new cjs.DOMElement(html);
        this.text_9.setTransform(409.3, 290 - 610);

	this.text_10 = new cjs.Text("1811\n \n\nLudismo", "bold 14px Verdana");
	this.text_10.lineHeight = 16;
	this.text_10.lineWidth = 102;
	this.text_10.setTransform(147.6,277);
        var html = createDiv(txt['p_01_hito_01'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_10 = new cjs.DOMElement(html);
        this.text_10.setTransform(147.3, 290 - 610);


	this.instance_4 = new lib.Mapadebits10();
	this.instance_4.setTransform(881.4,334);

	this.instance_5 = new lib.Mapadebits9();
	this.instance_5.setTransform(517.1,219.5);

	this.instance_6 = new lib.Mapadebits8();
	this.instance_6.setTransform(399.5,341);

	this.instance_7 = new lib.Mapadebits7();
	this.instance_7.setTransform(295.4,229);

	this.instance_8 = new lib.Mapadebits6();
	this.instance_8.setTransform(115.4,274);

	this.instance_9 = new lib.Mapadebits3();
	this.instance_9.setTransform(340.3,274.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_6.setTransform(518.2,407,1.047,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_7.setTransform(401.2,407,1.047,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_8.setTransform(296.2,407,1.047,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_9.setTransform(883.2,433.8,1.047,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_10.setTransform(116.2,407,1.047,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8BB1D8").s().p("AjMGyIAAtjIGZAAIAANjg");
	this.shape_11.setTransform(886.4,431.8,1.218,0.779);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4B06D").s().p("A4vDRIAAmhMAxfAAAIAAGhg");
	this.shape_12.setTransform(703.7,415.7,1,0.845);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C398BF").s().p("A4vDRIAAmhMAxfAAAIAAGhg");
	this.shape_13.setTransform(707.4,449.5,0.972,0.764);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8FBF67").s().p("EgnvADmIAAnKMBPfAAAIAAHKg");
	this.shape_14.setTransform(298.9,449.7,1,0.705);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E9754A").s().p("EgnvADmIAAnKMBPfAAAIAAHKg");
	this.shape_15.setTransform(295.4,415.7,0.986,0.773);

	this.text_11 = new cjs.Text("1920", "bold 16px Verdana");
	this.text_11.lineHeight = 18;
	this.text_11.lineWidth = 55;
	this.text_11.setTransform(883.6,499.1);

	this.text_12 = new cjs.Text("1890", "bold 16px Verdana");
	this.text_12.lineHeight = 18;
	this.text_12.lineWidth = 55;
	this.text_12.setTransform(682,499.1);

	this.text_13 = new cjs.Text("1860", "bold 16px Verdana");
	this.text_13.lineHeight = 18;
	this.text_13.lineWidth = 55;
	this.text_13.setTransform(450.3,499.1);

	this.text_14 = new cjs.Text("1830", "bold 16px Verdana");
	this.text_14.lineHeight = 18;
	this.text_14.lineWidth = 55;
	this.text_14.setTransform(218.6,499.1);

	this.text_15 = new cjs.Text("1800", "bold 16px Verdana");
	this.text_15.lineHeight = 18;
	this.text_15.lineWidth = 55;
	this.text_15.setTransform(14.9,499.1);

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
      


        this.addChild(this.logo, this.titulo,this.text_15,this.text_14,this.text_13,this.text_12,this.text_11,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.btn_01,this.btn_02,this.btn_03,this.btn_04);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,474,0.862,1.49);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(876.8,457.2,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(760.8,457.2,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(365.8,457.2,1.047,1);

	this.text = new cjs.Text("Primera Revolución Industrial", "bold 14px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 847;
	this.text.setTransform(488.7,444.6);

	this.text_1 = new cjs.Text("Colonialismo", "bold 14px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 850;
	this.text_1.setTransform(488,481);

	this.text_2 = new cjs.Text("Robert Owen", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 138;
	this.text_2.setTransform(849.3,355.9);

	this.text_3 = new cjs.Text("Saint-Simon", "bold 16px Verdana");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 138;
	this.text_3.setTransform(691.2,355.9);

	this.text_4 = new cjs.Text("Primeros sindicatos", "bold 16px Verdana");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 137;
	this.text_4.setTransform(531.5,344.9);

	this.text_5 = new cjs.Text("Ludismo", "bold 16px Verdana");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 138;
	this.text_5.setTransform(363.4,354.6);

	


        if (boton == 1)
            this.mc_boto_01 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Naranja_01();

        this.mc_boto_01.setTransform(367.1,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Naranja_01();
        this.mc_boto_02.setTransform(533.5,366.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Naranja_01();
        this.mc_boto_03.setTransform(693.4,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Naranja_01();
        this.mc_boto_04.setTransform(851.1,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
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


	this.text_6 = new cjs.Text("1829", "bold 16px Verdana");
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 49;
	this.text_6.setTransform(835.9,415);

	this.text_7 = new cjs.Text("1825", "bold 16px Verdana");
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 49;
	this.text_7.setTransform(728.9,415);

	this.text_8 = new cjs.Text("1811", "bold 16px Verdana");
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 49;
	this.text_8.setTransform(337.9,415);

	this.text_9 = new cjs.Text("1830", "bold 18px Verdana");
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 58;
	this.text_9.setTransform(883.4,413);

	this.text_10 = new cjs.Text("1800", "bold 18px Verdana");
	this.text_10.lineHeight = 20;
	this.text_10.lineWidth = 55;
	this.text_10.setTransform(15.4,413);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkMBeIAAi8IIaAAIAAC8g");
	this.shape_3.setTransform(363.4,425.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkXBZIAAiyIIuAAIAACyg");
	this.shape_4.setTransform(754.4,426);

	this.instance = new lib.Mapadebits13();
	this.instance.setTransform(875.4,393.5);

	this.instance_1 = new lib.Mapadebits12();
	this.instance_1.setTransform(535.4,390);

	this.instance_2 = new lib.Mapadebits11();
	this.instance_2.setTransform(365.4,381.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8FBF67").s().p("EgnvADmIAAnKMBPfAAAIAAHKg");
	this.shape_5.setTransform(476.2,492.1,1.707,0.737);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9754A").s().p("EgnvADmIAAnKMBPfAAAIAAHKg");
	this.shape_6.setTransform(476.2,456.5,1.707,0.807);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_7.setTransform(476.3,436.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AldBeIAAi8IK7AAIAAC8g");
	this.shape_8.setTransform(904.4,425.5);
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.instance_2,this.instance_1,this.instance,this.shape_4,this.shape_3,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.mc_boto_03,this.mc_boto_02,this.mc_boto_01,this.mc_boto_04,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.shape_2,this.shape_1,this.shape,this.btn_zona_1_01,this.btn_zona_1_02,this.btn_zona_1_03,this.btn_zona_1_04,this.btn_next);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.9,474.7,0.862,1.4,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,474.7,0.862,1.4);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);


	this.text = new cjs.Text("Plan Cerdá", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 138;
	this.text.setTransform(841,355.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(537.8,449.2,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(355.8,449.2,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(264.8,449.2,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(168.8,449.2,1.047,1);

	this.text_1 = new cjs.Text("Manifiesto comunista", "italic bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 141;
	this.text_1.setTransform(556.9,344.9);

	this.text_2 = new cjs.Text("Proudhon", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 140;
	this.text_2.setTransform(407.4,354.9);

	this.text_3 = new cjs.Text("Primera Revolución Industrial", "bold 14px Verdana");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 864;
	this.text_3.setTransform(474.1,450.6);

	this.text_4 = new cjs.Text("Cartismo", "bold 16px Verdana");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 139;
	this.text_4.setTransform(256.9,354.9);

	this.text_5 = new cjs.Text("Colonialismo", "bold 14px Verdana");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 16;
	this.text_5.lineWidth = 864;
	this.text_5.setTransform(473.3,480.6);

	this.text_6 = new cjs.Text("Great Trade \nUnion", "italic bold 16px Verdana");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 138;
	this.text_6.setTransform(108.4,345.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(909.5,449.2,1.047,1);

	this.mc_boto_01 = new lib.mc_Naranja_01();
	this.mc_boto_01.setTransform(110.1,367.4,0.89,0.89);

	this.mc_boto_02 = new lib.mc_Naranja_01();
	this.mc_boto_02.setTransform(259.3,367.4,0.89,0.89);
        
	this.mc_boto_05 = new lib.mc_Naranja_01();
	this.mc_boto_05.setTransform(842.8,367.4,0.89,0.89);

	this.mc_boto_04 = new lib.mc_Naranja_01();
	this.mc_boto_04.setTransform(559.3,367.4,0.89,0.89);

	this.mc_boto_03 = new lib.mc_Naranja_01();
	this.mc_boto_03.setTransform(409.3,367.4,0.89,0.89);

  if (boton == 1)
            this.mc_boto_01 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Naranja_01();
        this.mc_boto_01.setTransform(110.1,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
        
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Naranja_01();
        this.mc_boto_02.setTransform(259.3,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
        
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Naranja_01();
        this.mc_boto_03.setTransform(409.3,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
        
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Naranja_01();
        this.mc_boto_04.setTransform(559.3,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
       
       if (boton == 5)
            this.mc_boto_05 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_05 = new lib.mc_Naranja_01();
        this.mc_boto_05.setTransform(842.8,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_05, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
        
                this.mc_boto_01.on("click", function (evt) {
            putStage(new lib.frame3(1));
        });
        this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame3(2));
        });
        this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame3(3));
        });
        this.mc_boto_04.on("click", function (evt) {
            putStage(new lib.frame3(4));
        });
        this.mc_boto_05.on("click", function (evt) {
            putStage(new lib.frame3(5));
        });
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
        if (boton == 5) {
            this.popup = new lib.popup_zona_2_05("single", 0);
            this.addChild(this.popup);
        }
        
	this.text_7 = new cjs.Text("1848", "bold 16px Verdana");
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 55;
	this.text_7.setTransform(508.8,415);

	this.text_8 = new cjs.Text("1840", "bold 16px Verdana");
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 55;
	this.text_8.setTransform(328.8,415);

	this.text_9 = new cjs.Text("1837", "bold 16px Verdana");
	this.text_9.lineHeight = 18;
	this.text_9.lineWidth = 55;
	this.text_9.setTransform(238.8,415);

	this.text_10 = new cjs.Text("1834", "bold 16px Verdana");
	this.text_10.lineHeight = 18;
	this.text_10.lineWidth = 55;
	this.text_10.setTransform(141.8,415);



	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkMBeIAAi8IIZAAIAAC8g");
	this.shape_5.setTransform(165.4,425.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A6YBZIAAiyMA0xAAAIAACyg");
	this.shape_6.setTransform(405.4,425);

	this.instance = new lib.Mapadebits17();
	this.instance.setTransform(537.1,372.7);

	this.instance_1 = new lib.Mapadebits16();
	this.instance_1.setTransform(354.4,384.7);

	this.instance_2 = new lib.Mapadebits15();
	this.instance_2.setTransform(263.4,382.7);

	this.instance_3 = new lib.Mapadebits14();
	this.instance_3.setTransform(168.1,393.7);

	this.instance_4 = new lib.Mapadebits18();
	this.instance_4.setTransform(908.9,372.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8FBF67").s().p("EgnvADmIAAnKMBPfAAAIAAHKg");
	this.shape_7.setTransform(476.2,492.1,1.707,0.737);

	this.text_11 = new cjs.Text("1860", "bold 18px Verdana");
	this.text_11.lineHeight = 20;
	this.text_11.lineWidth = 58;
	this.text_11.setTransform(883.4,413);

	this.text_12 = new cjs.Text("1830", "bold 18px Verdana");
	this.text_12.lineHeight = 20;
	this.text_12.lineWidth = 55;
	this.text_12.setTransform(15.4,413);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_8.setTransform(476.3,436.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A6YBZIAAiyMA0xAAAIAACyg");
	this.shape_9.setTransform(911.9,425,0.175,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9754A").s().p("EgnvADmIAAnKMBPfAAAIAAHKg");
	this.shape_10.setTransform(476.2,456.5,1.707,0.807);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame2());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior,this.shape_10,this.shape_9,this.shape_8,this.text_12,this.text_11,this.shape_7,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_6,this.shape_5,this.mc_boto_02,this.mc_boto_01,this.text_10,this.text_9,this.text_8,this.text_7,this.mc_boto_03,this.mc_boto_04,this.mc_boto_05,this.shape_4,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text,this.btn_zona_2_01,this.btn_zona_2_02,this.btn_zona_2_03,this.btn_zona_2_04,this.btn_zona_2_05,this.btn_next,this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame4 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        // Capa 1

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.9,474.9,0.862,1.4,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,474.9,0.862,1.4);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	

	this.text = new cjs.Text("Fundación del PSOE", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 139;
	this.text.setTransform(649,345.7);

	this.text_1 = new cjs.Text("Segunda Internacional", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 139;
	this.text_1.setTransform(823.9,345.7);

	this.text_2 = new cjs.Text("Bakunin", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 140;
	this.text_2.setTransform(474.9,354.8);

	this.text_3 = new cjs.Text("Comuna de París", "bold 16px Verdana");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 119;
	this.text_3.setTransform(305,344.8);

	this.text_4 = new cjs.Text("Primera\nInternacional", "bold 16px Verdana");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 139;
	this.text_4.setTransform(134.4,344.8);



  if (boton == 1)
            this.mc_boto_01 = new lib.mc_Naranja_01("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Naranja_01();
        this.mc_boto_01.setTransform(137.6,366.5);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Naranja_01(), 3);
        
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Naranja_02("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Naranja_02();
        this.mc_boto_02.setTransform(307.5,366.5);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Naranja_02(), 3);
        
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Naranja_02("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Naranja_02();
        this.mc_boto_03.setTransform(477.3,366.5);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Naranja_02(), 3);
        
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Naranja_02("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Naranja_02();
        this.mc_boto_04.setTransform(826.3,366.5);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Naranja_02(), 3);
       
       if (boton == 5)
            this.mc_boto_05 = new lib.mc_Naranja_02("single", 1);
        else
            this.mc_boto_05 = new lib.mc_Naranja_02();
        this.mc_boto_05.setTransform(651.4,366.5);
        new cjs.ButtonHelper(this.mc_boto_05, 0, 1, 2, false, new lib.mc_Naranja_02(), 3);
        
                this.mc_boto_01.on("click", function (evt) {
            putStage(new lib.frame4(1));
        });
        this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame4(2));
        });
        this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame4(3));
        });
        this.mc_boto_04.on("click", function (evt) {
            putStage(new lib.frame4(4));
        });
        this.mc_boto_05.on("click", function (evt) {
            putStage(new lib.frame4(5));
        });
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
        if (boton == 4) {
            this.popup = new lib.popup_zona_3_04("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 5) {
            this.popup = new lib.popup_zona_3_05("single", 0);
            this.addChild(this.popup);
        }
        
        
	this.instance = new lib.Mapadebits22();
	this.instance.setTransform(646.8,390.8);

	this.text_5 = new cjs.Text("1888", "bold 16px Verdana");
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 49;
	this.text_5.setTransform(776.4,415);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape.setTransform(476.3,436.8);

	this.text_6 = new cjs.Text("1872", "bold 16px Verdana");
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 49;
	this.text_6.setTransform(390.5,415);

	this.text_7 = new cjs.Text("1871", "bold 16px Verdana");
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 49;
	this.text_7.setTransform(340.5,415);

	this.text_8 = new cjs.Text("1864", "bold 16px Verdana");
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 49;
	this.text_8.setTransform(113.5,415);

	this.text_9 = new cjs.Text("1889", "bold 16px Verdana");
	this.text_9.lineHeight = 18;
	this.text_9.lineWidth = 49;
	this.text_9.setTransform(833.5,415);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg8cABeIAAi8MB45AAAIAAC8g");
	this.shape_1.setTransform(499.4,426.5);

	this.instance_1 = new lib.Mapadebits23();
	this.instance_1.setTransform(872.2,377.4);

	this.instance_2 = new lib.Mapadebits21();
	this.instance_2.setTransform(404.4,376.7);

	this.instance_3 = new lib.Mapadebits20();
	this.instance_3.setTransform(379.4,376.7);

	this.instance_4 = new lib.Mapadebits19();
	this.instance_4.setTransform(135.9,377.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AJ4AAIzwAA");
	this.shape_2.setTransform(713.4,427.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AAAB2IAAjr");
	this.shape_3.setTransform(802,439.5,1,0.878);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(801.9,449.2,1.047,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_5.setTransform(872.8,449.2,1.047,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_6.setTransform(405.8,449.2,1.047,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_7.setTransform(380.8,449.2,1.047,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_8.setTransform(136.8,449.2,1.047,1);

	this.text_10 = new cjs.Text("1872", "bold 16px Verdana");
	this.text_10.lineHeight = 18;
	this.text_10.lineWidth = 49;
	this.text_10.setTransform(390.5,415);

	this.text_11 = new cjs.Text("1871", "bold 16px Verdana");
	this.text_11.lineHeight = 18;
	this.text_11.lineWidth = 49;
	this.text_11.setTransform(340.5,415);

	this.text_12 = new cjs.Text("1864", "bold 16px Verdana");
	this.text_12.lineHeight = 18;
	this.text_12.lineWidth = 49;
	this.text_12.setTransform(113.5,415);

	this.text_13 = new cjs.Text("Segunda Revolución Industrial", "bold 14px Verdana");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 16;
	this.text_13.lineWidth = 318;
	this.text_13.setTransform(627.5,445.6);

	this.text_14 = new cjs.Text("Imperialismo", "bold 14px Verdana");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 16;
	this.text_14.lineWidth = 318;
	this.text_14.setTransform(633.5,481.6);

	this.text_15 = new cjs.Text("Primera Revolución Industrial", "bold 14px Verdana");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 16;
	this.text_15.lineWidth = 318;
	this.text_15.setTransform(199.5,451.6);

	this.text_16 = new cjs.Text("Colonialismo", "bold 14px Verdana");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 16;
	this.text_16.lineWidth = 318;
	this.text_16.setTransform(193.5,480.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4B06D").s().p("A4vDRIAAmhMAxfAAAIAAGhg");
	this.shape_9.setTransform(631.8,456.8,1.753,0.873,0,1.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C398BF").s().p("A4vDRIAAmhMAxfAAAIAAGhg");
	this.shape_10.setTransform(630.9,491.9,1.752,0.829,0,1.3,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8FBF67").s().p("EgnvADmIAAnKMBPfAAAIAAHKg");
	this.shape_11.setTransform(197.8,492,0.613,0.735,0,1.3,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E9754A").s().p("EgnvADmIAAnKMBPfAAAIAAHKg");
	this.shape_12.setTransform(198.4,461,0.613,1);

	this.text_17 = new cjs.Text("1890", "bold 18px Verdana");
	this.text_17.lineHeight = 20;
	this.text_17.lineWidth = 58;
	this.text_17.setTransform(883.4,413);

	this.text_18 = new cjs.Text("1889", "bold 16px Verdana");
	this.text_18.lineHeight = 18;
	this.text_18.lineWidth = 49;
	this.text_18.setTransform(833.5,415);

	this.text_19 = new cjs.Text("1860", "bold 18px Verdana");
	this.text_19.lineHeight = 20;
	this.text_19.lineWidth = 55;
	this.text_19.setTransform(15.4,413);
        
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.text_19,this.text_18,this.text_17,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.text_16,this.text_15,this.text_14,this.text_13,this.text_12,this.text_11,this.text_10,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.shape_1,this.text_9,this.text_8,this.text_7,this.text_6,this.shape,this.text_5,this.instance,this.mc_boto_01,this.mc_boto_02,this.mc_boto_03,this.mc_boto_04,this.mc_boto_05,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.btn_zona_3_01,this.btn_zona_3_02,this.btn_zona_3_03,this.btn_zona_3_04,this.btn_zona_3_05,this.btn_next,this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

 

    (lib.frame5 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.9,474.9,0.862,1.4,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.text = new cjs.Text("Revolución de Octubre", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 142;
	this.text.setTransform(824.7,345.8);

	this.text_1 = new cjs.Text("Sufragismo", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 140;
	this.text_1.setTransform(324.1,355);

	this.text_2 = new cjs.Text("Revolución Rusa de 1905", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 140;
	this.text_2.setTransform(510.4,345.4);

	this.text_3 = new cjs.Text("1917", "bold 16px Verdana");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(809.8,415);

	this.text_4 = new cjs.Text("1903", "bold 16px Verdana");
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(349.6,415);

	this.text_5 = new cjs.Text("1905", "bold 16px Verdana");
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 55;
	this.text_5.setTransform(445.8,415);

	

  if (boton == 1)
            this.mc_boto_01 = new lib.mc_Naranja_02("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Naranja_02();

        this.mc_boto_01.setTransform(512.6,366.5);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Naranja_02(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Naranja_02("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Naranja_02();
        this.mc_boto_02.setTransform(325.5,366.5);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Naranja_02(), 3);

        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Azul("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Azul();
        this.mc_boto_03.setTransform(826.2,366.5);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Azul(), 3);


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
        
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EghfABeIAAi8MBC/AAAIAAC8g");
	this.shape.setTransform(607.3,424.5,1.231,1);

	this.instance = new lib.Mapadebits26();
	this.instance.setTransform(831.4,393.7);

	this.instance_1 = new lib.Mapadebits25();
	this.instance_1.setTransform(470.4,383.7);

	this.instance_2 = new lib.Mapadebits24();
	this.instance_2.setTransform(377.2,384.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(832.8,457.2,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(378.5,445.3,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(471.8,445.3,1.047,1);

	this.text_6 = new cjs.Text("Primera Guerra Mundial", "bold 14px Verdana");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 16;
	this.text_6.lineWidth = 139;
	this.text_6.setTransform(843.9,464.8);

	this.text_7 = new cjs.Text("Segunda Revolución Industrial", "bold 14px Verdana");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 16;
	this.text_7.lineWidth = 734;
	this.text_7.setTransform(410.4,450);

	this.text_8 = new cjs.Text("Imperialismo", "bold 14px Verdana");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 16;
	this.text_8.lineWidth = 733;
	this.text_8.setTransform(410.5,480.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8BB1D8").s().p("AjMGyIAAtjIGZAAIAANjg");
	this.shape_4.setTransform(846.9,473,3.142,0.804);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4B06D").s().p("A4vDRIAAmhMAxfAAAIAAGhg");
	this.shape_5.setTransform(413.3,456.6,2.34,0.864);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C398BF").s().p("A4vDRIAAmhMAxfAAAIAAGhg");
	this.shape_6.setTransform(412.5,491.4,2.335,0.789);

	this.text_9 = new cjs.Text("1920", "bold 18px Verdana");
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 58;
	this.text_9.setTransform(883.4,413);

	this.text_10 = new cjs.Text("1890", "bold 18px Verdana");
	this.text_10.lineHeight = 20;
	this.text_10.lineWidth = 55;
	this.text_10.setTransform(15.4,413);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_7.setTransform(476.3,436.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AAAgTIAAAn");
	this.shape_8.setTransform(461.7,383.7);
        
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.logo, this.titulo, this.home, this.shape_8,this.shape_7,this.text_10,this.text_9,this.shape_6,this.shape_5,this.shape_4,this.text_8,this.text_7,this.text_6,this.shape_3,this.shape_2,this.shape_1,this.instance_2,this.instance_1,this.instance,this.shape,this.mc_boto_01,this.mc_boto_02,this.mc_boto_03,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.btn_zona_4_01,this.btn_zona_4_02,this.btn_zona_4_03,this.btn_prev);
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
   
   (lib._0006ZI01_OPT = function() {
	this.initialize(img._0006ZI01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,400);


(lib._0008JU01_OPT = function() {
	this.initialize(img._0008JU01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,400);


(lib._0008LI01_OPT = function() {
	this.initialize(img._0008LI01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,400);


(lib._00096A01_OPT = function() {
	this.initialize(img._00096A01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,717,500);


(lib._00098R01_OPT = function() {
	this.initialize(img._00098R01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,510,400);


(lib._0009B701_OPT = function() {
	this.initialize(img._0009B701_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,400);


(lib._0009HK01_OPT = function() {
	this.initialize(img._0009HK01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,734,500);


(lib._000A8J01_OPT = function() {
	this.initialize(img._000A8J01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,573,400);


(lib._000A8J01_OPT_Min02 = function() {
	this.initialize(img._000A8J01_OPT_Min02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,80);


(lib._000AGI01_OPT = function() {
	this.initialize(img._000AGI01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,732,500);


(lib._000FOB01_ok = function() {
	this.initialize(img._000FOB01_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,650);


(lib._000FP501_OPT = function() {
	this.initialize(img._000FP501_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,585,400);


(lib._000GI301_OPT = function() {
	this.initialize(img._000GI301_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,688,400);


(lib._000GI301_OPT_Min_05 = function() {
	this.initialize(img._000GI301_OPT_Min_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,80);


(lib._000IB301_OPT = function() {
	this.initialize(img._000IB301_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,606,400);


(lib._0017WI01_OPT = function() {
	this.initialize(img._0017WI01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,400);


(lib._0017WI01_OPT_min03 = function() {
	this.initialize(img._0017WI01_OPT_min03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,80);


(lib._001D0N01_OPT = function() {
	this.initialize(img._001D0N01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,521,400);


(lib._001OGJ01_OPT = function() {
	this.initialize(img._001OGJ01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,356);


(lib._001OGJ01_OPT_Min01 = function() {
	this.initialize(img._001OGJ01_OPT_Min01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,71);


(lib._001P8E01_2 = function() {
	this.initialize(img._001P8E01_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,400);


(lib._001P8E01_3 = function() {
	this.initialize(img._001P8E01_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1051,682);


(lib._001YRW01_OPT = function() {
	this.initialize(img._001YRW01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,384);


(lib._1_92825619_OPT = function() {
	this.initialize(img._1_92825619_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,400);


(lib._2_shutterstock_88036291_OPT = function() {
	this.initialize(img._2_shutterstock_88036291_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,400);


(lib._3_shutterstock_88588882_OPT = function() {
	this.initialize(img._3_shutterstock_88588882_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,400);


(lib._4_92822663_OPT = function() {
	this.initialize(img._4_92822663_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,400);


(lib._4_92822663_OPT_Min_04 = function() {
	this.initialize(img._4_92822663_OPT_Min_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,80);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,82);


(lib.Mapadebits10 = function() {
	this.initialize(img.Mapadebits10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,99);


(lib.Mapadebits11 = function() {
	this.initialize(img.Mapadebits11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,77);


(lib.Mapadebits12 = function() {
	this.initialize(img.Mapadebits12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,67);


(lib.Mapadebits13 = function() {
	this.initialize(img.Mapadebits13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,67);


(lib.Mapadebits14 = function() {
	this.initialize(img.Mapadebits14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,55);


(lib.Mapadebits15 = function() {
	this.initialize(img.Mapadebits15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,66);


(lib.Mapadebits16 = function() {
	this.initialize(img.Mapadebits16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,65);


(lib.Mapadebits17 = function() {
	this.initialize(img.Mapadebits17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,78);


(lib.Mapadebits18 = function() {
	this.initialize(img.Mapadebits18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,78);


(lib.Mapadebits19 = function() {
	this.initialize(img.Mapadebits19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,72);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,80);


(lib.Mapadebits20 = function() {
	this.initialize(img.Mapadebits20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,75);


(lib.Mapadebits21 = function() {
	this.initialize(img.Mapadebits21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,74);


(lib.Mapadebits22 = function() {
	this.initialize(img.Mapadebits22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,38);


(lib.Mapadebits23 = function() {
	this.initialize(img.Mapadebits23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,73);


(lib.Mapadebits24 = function() {
	this.initialize(img.Mapadebits24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,65);


(lib.Mapadebits25 = function() {
	this.initialize(img.Mapadebits25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,66);


(lib.Mapadebits26 = function() {
	this.initialize(img.Mapadebits26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,65);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,80);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,80);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,80);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,137);


(lib.Mapadebits7 = function() {
	this.initialize(img.Mapadebits7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,181);


(lib.Mapadebits8 = function() {
	this.initialize(img.Mapadebits8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,67);


(lib.Mapadebits9 = function() {
	this.initialize(img.Mapadebits9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,192);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.pautas950x608nuevosarreglospngcopia = function() {
	this.initialize(img.pautas950x608nuevosarreglospngcopia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.MarcaAgua = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1D1D1").s().p("AipD2QhNg0gghTQgVg2AAg5QABgVACgWQARhuBThIQBUhKBwAAQBvAABUBKQBUBIASBuQADAYAAATQAAA4gXA3QggBThMA0QhMA2hdAAQhdAAhMg2gAhPDYQgRANgIAMQAyAWA2AAQA2AAAzgWQgHgNgTgMQgigZgtAAQgsAAgjAZgAgxBvQg8AFg4AXQgcALgPAKQAeAoApAZQANgRAYgTQAughA2AAQA7AAAuAhQAWARALARQApgaAcglQgPgKgagKQg2gYg9gFQgVgFgeAAQgcAAgVAFgAjuBvQAGAMAEAHQANgKAZgJQBXgpBngBQBnABBZApQAYAIAOAJIAIgRQAUguAFgwIoNAAQADAuAVAwgAEFgTQAAgPgDgJQgHgtgXgoQgYAPgnAOQhRAdhUAAQhTAAhSgcQgqgOgWgPQgXAogHAsIgDAYIILAAIAAAAgAjRidQATANAjANQBJAbBSAAQBSAABHgdQAjgNATgPQgZghgvgeQgKASgWAQQgsAig7AAQg7AAgtgiQgQgKgLgOIgIgKQgsAegaAlgAhqjvIAGAHQAHAJALAGQAjAZAvAAQAwgBAhgZQAPgLAHgOQgygSg1gBQg4AAgyAXg");
	this.shape.setTransform(30,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.IMG_p4_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000FP501_OPT();
	this.instance.setTransform(-86.4,-4.7,0.685,0.685);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.4,-4.7,401,274.2);


(lib.IMG_p4_02 = function() {
	this.initialize();

	// Capa 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az10IMAnrAAAMAAAAoRMgnrAAAg");
	mask.setTransform(83,128.9);

	// Capa 2
	this.instance = new lib._001D0N01_OPT();
	this.instance.setTransform(-51.1,-12.3,0.724,0.724);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.1,-12.3,377.1,289.5);


(lib.IMG_p4_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az10IMAnrAAAMAAAAoRMgnrAAAg");
	mask.setTransform(83,128.9);

	// Capa 2
	this.instance = new lib._0008JU01_OPT();
	this.instance.setTransform(-2.4,-21.2,0.848,0.848);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-21.2,257,339.3);


(lib.IMG_p3_05 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000FOB01_ok();
	this.instance.setTransform(-11.1,-2,0.403,0.403);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.1,-2,262,262);


(lib.IMG_p3_04 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0009B701_OPT();
	this.instance.setTransform(-46.6,-98.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.6,-98.6,310,400);


(lib.IMG_p3_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0008LI01_OPT();
	this.instance.setTransform(-49.6,-27.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.6,-27.6,304,400);


(lib.IMG_p3_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000IB301_OPT();
	this.instance.setTransform(-58,-5.9,0.667,0.667);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58,-5.9,404.1,266.7);


(lib.IMG_p3_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._4_92822663_OPT();
	this.instance.setTransform(-3.6,-7.4,0.914,0.914);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.6,-7.4,256,365.7);


(lib.IMG_p2_05 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._001P8E01_2();
	this.instance.setTransform(-23.1,0,0.772,0.772);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.1,0,303.5,308.9);


(lib.IMG_p2_04 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0017WI01_OPT();
	this.instance.setTransform(-3.1,-6,0.772,0.772);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-6,251,308.9);


(lib.IMG_p2_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._3_shutterstock_88588882_OPT();
	this.instance.setTransform(-12.1,-19.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.1,-19.6,269,400);


(lib.IMG_p2_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._2_shutterstock_88036291_OPT();
	this.instance.setTransform(-18,-9,0.697,0.697);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(1,1,1).p("AZx4NMAAAAwbMgzhAAAMAAAgwbg");
	this.shape.setTransform(135,129);

	this.instance.mask = this.shape.mask = mask;

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.9,-25.9,468,310);


(lib.IMG_p2_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000A8J01_OPT();
	this.instance.setTransform(-75.5,-11.2,0.693,0.693);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-11.2,397.1,277.2);


(lib.IMG_p1_04 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0006ZI01_OPT();
	this.instance.setTransform(-13.1,-48.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.1,-48.6,271,400);


(lib.IMG_p1_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._001YRW01_OPT();
	this.instance.setTransform(-44.9,-13.8,0.696,0.696);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-13.8,316.1,267.3);


(lib.IMG_p1_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._1_92825619_OPT();
	this.instance.setTransform(-8.1,-7.3,0.694,0.694);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,-7.3,417,277.6);


(lib.IMG_p1_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._001OGJ01_OPT();
	this.instance.setTransform(-56,-4,0.751,0.751);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-4,346.9,267.3);


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


(lib.mc_Naranja_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD8B6").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_Naranja_01 = function(mode,startPosition,loop) {
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


(lib.mc_Azul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5D8EC").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

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


(lib.popup_zona_4_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_15 = new lib.btn_ampliar();
	this.btn_ampliar_15.setTransform(322.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_15, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_15.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_15());
        });

	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_15).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Revolución de Octubre", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 142;
	this.text.setTransform(824.2,345.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(825.8,366.5);

	this.instance = new lib.IMG_p4_03();
	this.instance.setTransform(219,168.9,1,1,0,0,0,123,128.9);

	this.text_1 = new cjs.Text("1917\n\nEn febrero la revolución hizo caer la monarquía zarista. Un mes después Lenin regresó a Rusia, donde no tardó en reclamar “todo el poder para los soviets” (Las tesis de abril). En octubre, lideró la revolución bolchevique que hizo posible la creación del primer Estado comunista de la historia.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 461;
	this.text_1.setTransform(376.6,39.8);
var html = createDiv(txt['txt_popup_4_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(376, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96,39.8,809.9,356.8);


(lib.popup_zona_4_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_13 = new lib.btn_ampliar();
	this.btn_ampliar_13.setTransform(317.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_13, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_13.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_13());
        });

	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_13).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Sufragismo", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 140;
	this.text.setTransform(323.7,355);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(325,366.5);

	this.text_1 = new cjs.Text("1903\n\nA finales del siglo XIX se produjo el nacimiento del sufragismo, un movimiento político que reclamaba el derecho femenino al voto. En 1903 Emmeline Pankhurst creó en el Reino Unido la Unión Social y Política Mundial de las Mujeres, cuyo ejemplo fue seguido en otros países. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 450;
	this.text_1.setTransform(365,39.8);
var html = createDiv(txt['txt_popup_4_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(365, 40 - 610);

	this.instance = new lib.IMG_p4_01();
	this.instance.setTransform(249,168.9,1,1,0,0,0,123,128.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AAAgCIAAAF");
	this.shape_1.setTransform(377.7,386.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.text_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.5,39.8,695.5,356.8);


(lib.popup_zona_4_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_14 = new lib.btn_ampliar();
	this.btn_ampliar_14.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_14, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_14.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_14());
        });

	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_14).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Revolución Rusa de 1905", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 140;
	this.text.setTransform(509.9,345.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(512.2,366.5);

	this.text_1 = new cjs.Text("1905\n\nEn un contexto de profundas tensiones, se produjo el estallido de una revolución burguesa contra la autocracia de los Románov. Los bolcheviques rusos apoyaron el levantamiento con el objetivo de reconducir la situación hacia la revolución socialista. Surgieron entonces los primeros soviets obreros.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 515;
	this.text_1.setTransform(361,39.8);
var html = createDiv(txt['txt_popup_4_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.instance = new lib.IMG_p4_02();
	this.instance.setTransform(242,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75,39.8,805.5,356.8);


(lib.popup_zona_3_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_11_2 = new lib.btn_ampliarneg();
	this.btn_ampliar_11_2.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_11_2, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
        this.btn_ampliar_11_2.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_11_2());
        });

	this.instance = new lib.IMG_p3_05();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_11_2}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Fundación del PSOE", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 139;
	this.text.setTransform(648.5,345.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(650.9,366.5);

	this.text_1 = new cjs.Text("1888\n\nPablo Iglesias impulsó la fundación del Partido Socialista Obrero Español (PSOE), un partido proletario que perseguía la acción política independiente del resto de agrupaciones políticas. Al mismo tiempo fundó la Unión General de Trabajadores (UGT), el sindicato propio del PSOE. Iglesias también había sido fundador del periódico El Socialista (1886).", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 501;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_3_05'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,786,356.8);


(lib.popup_zona_3_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_12 = new lib.btn_ampliar();
	this.btn_ampliar_12.setTransform(310,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_12, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_12.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_12());
        });

	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_12).to({_off:true},1).wait(1));

	// FonsBlanc

	var html = createDiv(txt['txt_popup_3_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(370, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("Segunda Internacional", "15px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 139;
	this.text_1.setTransform(823.5,345.7);

	this.instance = new lib.mc_Naranja_02("single",2);
	this.instance.setTransform(825.9,366.5);

	this.instance_1 = new lib.IMG_p3_04();
	this.instance_1.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65,39.8,843,356.8);


(lib.popup_zona_3_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_11 = new lib.btn_ampliar();
	this.btn_ampliar_11.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_11, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_11.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_11());
        });

	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_11).to({_off:true},1).wait(1));

	// FonsBlanc
	this.text = new cjs.Text("1872\n\nLas profundas desavenencias con Marx llevaron a la expulsión de Mijáil Bakunin y de sus seguidores de la AIT. Esto representó la primera gran escisión del movimiento obrero entre socialistas y anarquistas. Al año siguiente, Bakunin creó la Internacional Antiautoritaria, pero desapareció en 1881.  ", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 498;
	this.text.setTransform(359,39.8);
var html = createDiv(txt['txt_popup_3_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(359, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("Bakunin", "bold 16px Verdana", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 140;
	this.text_1.setTransform(474.5,354.8);

	this.instance = new lib.mc_Naranja_02("single",2);
	this.instance.setTransform(476.8,366.5);

	this.instance_1 = new lib.IMG_p3_03();
	this.instance_1.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,778.9,356.8);


(lib.popup_zona_3_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_10 = new lib.btn_ampliar();
	this.btn_ampliar_10.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_10, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_10.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_10());
        });

	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_10).to({_off:true},1).wait(1));

	// FonsBlanc
	this.text = new cjs.Text("1871\n\nLa derrota francesa en la guerra franco-prusiana desencadenó el estallido de una insurrección proletario-socialista el 18 de marzo. Tras unas elecciones por sufragio universal, se constituyó la Comuna de París. Esta gobernó la ciudad hasta que las tropas gubernamentales acabaron con ella a finales de mayo.  ", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 496;
	this.text.setTransform(360,39.8);
var html = createDiv(txt['txt_popup_3_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(360, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("Comuna de París", "bold 16px Verdana", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 119;
	this.text_1.setTransform(304.6,344.8);

	this.instance = new lib.mc_Naranja_02("single",2);
	this.instance.setTransform(307.1,366.5);

	this.instance_1 = new lib.IMG_p3_02();
	this.instance_1.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,777.9,356.8);


(lib.popup_zona_3_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_09 = new lib.btn_ampliar();
	this.btn_ampliar_09.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_09, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_09.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_09());
        });

	this.instance = new lib.IMG_p3_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_09}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Primera\nInternacional", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 139;
	this.text.setTransform(134,344.8);

	this.instance_1 = new lib.mc_Naranja_01("single",2);
	this.instance_1.setTransform(137.2,366.5);

	this.text_1 = new cjs.Text("1864\n\nSe fundó en Londres la Asociación Internacional de Trabajadores (AIT), más conocida como I Internacional. Influida por las ideas marxistas, nació con el objetivo de coordinar y fomentar la solidaridad entre los trabajadores del mundo. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 483;
	this.text_1.setTransform(360,39.8);
var html = createDiv(txt['txt_popup_3_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance_1},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.1,39.8,789.9,356.8);


(lib.popup_zona_2_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_08_2 = new lib.btn_ampliar();
	this.btn_ampliar_08_2.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_08_2, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_08_2.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_08_2());
        });

	this.instance = new lib.IMG_p2_05();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_08_2}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Plan Cerdá", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 138;
	this.text.setTransform(840.5,355.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(842.4,367.3,0.89,0.89);

	this.text_1 = new cjs.Text("1860\n\nEn junio se aprobó el proyecto para el ensanche y reforma de Barcelona, más conocido como plan Cerdá. Su artífice fue el ingeniero y urbanista Ildefonso Cerdá, quien propuso un modelo de ciudad-jardín definido por su trazado ortogonal. Sin embargo, su proyecto se vio desvirtuado por las presiones de los propietarios barceloneses.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 477;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_2_05'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,831.7,354.3);


(lib.popup_zona_2_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_08 = new lib.btn_ampliar();
	this.btn_ampliar_08.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_08, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_08.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_08());
        });

	this.instance = new lib.IMG_p2_04();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_08}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Manifiesto comunista", "italic bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 141;
	this.text.setTransform(556.5,344.9);

	this.instance_1 = new lib.mc_Naranja_01("single",2);
	this.instance_1.setTransform(558.9,367.4,0.89,0.89);

	this.text_1 = new cjs.Text("1848\n\nTras recibir el encargo de la alemana Liga Comunista, Karl Marx y Friedrich Engels publicaron el Manifiesto comunista. Se trataba de un breve documento en que se sintetizaban los principios fundamentales del socialismo y el comunismo, cuyo fin último es una sociedad sin clases.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 477;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_2_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance_1},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,761.5,354.3);


(lib.popup_zona_2_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_07 = new lib.btn_ampliar();
	this.btn_ampliar_07.setTransform(306.6,56.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_07, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_07.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_07());
        });

	this.instance = new lib.IMG_p2_03();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_07}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Proudhon", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 140;
	this.text.setTransform(407,354.9);

	this.instance_1 = new lib.mc_Naranja_01("single",2);
	this.instance_1.setTransform(408.9,367.4,0.89,0.89);

	this.text_1 = new cjs.Text("1840\n\nSe publicó ¿Qué es la propiedad?, del pensador Pierre-Joseph Proudhon. Considerado uno de los padres del anarquismo, rechazaba la existencia del Estado y cualquier tipo de autoridad, así como los partidos políticos. Defendía la sustitución de la propiedad privada por la propiedad colectiva (mutualismo).", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 516;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_2_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance_1},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,800.9,354.3);


(lib.popup_zona_2_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.text = new cjs.Text("Cartismo", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 139;
	this.text.setTransform(256.5,354.9);

	this.instance = new lib.mc_Naranja_01("single",2);
	this.instance.setTransform(258.9,367.4,0.89,0.89);

	this.btn_ampliar_06 = new lib.btn_ampliar();
	this.btn_ampliar_06.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_06, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_06.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_06());
        });

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_ampliar_06},{t:this.instance},{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("1837\n\nEntre 1837 y 1848 se desarrolló en Reino Unido el primer movimiento de masas: el cartismo. En la People’s Charter (1838), los cartistas reclamaron el pago a los parlamentarios, el voto secreto y los parlamentos anuales, así como incorporaron reivindicaciones políticas del movimiento obrero como el sufragio universal masculino y la reducción de la jornada laboral.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 516;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_2_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.instance_1 = new lib.IMG_p2_02();
	this.instance_1.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,800.9,354.3);


(lib.popup_zona_2_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_05 = new lib.btn_ampliar();
	this.btn_ampliar_05.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_05, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_05.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_05());
        });

	this.instance = new lib.IMG_p2_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_05}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Great Trade\n Union", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 138;
	this.text.setTransform(107.9,345.9);

	this.instance_1 = new lib.mc_Naranja_01("single",2);
	this.instance_1.setTransform(109.6,367.4,0.89,0.89);

	this.text_1 = new cjs.Text("1834\n\nBajo la dirección de Robert Owen, en 1934 se produjo la fusión de distintos sindicatos de oficio. El resultado fue el nacimiento de la Great Trade Union, que llegó a agrupar a más de un millón de afiliados.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 493;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_2_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance_1},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.3,39.8,821.7,354.3);


(lib.popup_zona_1_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.text = new cjs.Text("Robert Owen", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 138;
	this.text.setTransform(848.8,355.9);

	this.instance = new lib.mc_Naranja_01("single",2);
	this.instance.setTransform(850.7,367.4,0.89,0.89);

	this.btn_ampliar_04 = new lib.btn_ampliar();
	this.btn_ampliar_04.setTransform(308.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_04, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_04.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_04());
        });

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_ampliar_04},{t:this.instance},{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.instance_1 = new lib.IMG_p1_04();
	this.instance_1.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.text_1 = new cjs.Text("1829\n\nTras el fracaso de la New Harmony, una comuna agraria que había organizado en EUA, el socialista utópico Robert Owen regresó a Europa. Sus conexiones con el sindicalismo inglés le llevaron a plantear una alternativa al capitalismo: el cooperativismo. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 524;
	this.text_1.setTransform(361,39.8);
var html = createDiv(txt['txt_popup_1_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,840,354.3);


(lib.popup_zona_1_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FonsBlanc
	this.btn_ampliar_03 = new lib.btn_ampliar();
	this.btn_ampliar_03.setTransform(310.6,54.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_03, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_03.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_03());
        });

	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_03).to({_off:true},1).wait(1));

	// As3
	this.text = new cjs.Text("Saint-Simon", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 138;
	this.text.setTransform(690.7,355.9);

	this.instance = new lib.mc_Naranja_01("single",2);
	this.instance.setTransform(693,367.4,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[]},1).wait(1));

	// PopUp
	this.instance_1 = new lib.IMG_p1_03();
	this.instance_1.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("1825\n\nSe publicó El nuevo cristianismo, de Saint-Simon.  Este noble francés, que apostaba por una “pobreza evangélica”, defendía una sociedad industrial distinta a la capitalista. Dicha sociedad habría de estar dirigida por los productores: industriales, trabajadores y campesinos.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 543;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_1_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,828,354.3);


(lib.popup_zona_1_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.text = new cjs.Text("Primeros sindicatos", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 137;
	this.text.setTransform(531.1,344.9);

	this.instance = new lib.mc_Naranja_01("single",2);
	this.instance.setTransform(533,366.4,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[]},1).wait(1));

	// PopUp
	this.btn_ampliar_02 = new lib.btn_ampliar();
	this.btn_ampliar_02.setTransform(309.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_02, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_02.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_02());
        });

	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_02).to({_off:true},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("1825\n\nLa derogación, un año antes, de la prohibición de agrupaciones obreras, permitió el nacimiento en Reino Unido de las trade unions, formadas por trabajadores muy cualificados. Poco después, comenzaron a aceptar la integración de los trabajadores fabriles y sus reivindicaciones.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 491;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_1_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.instance_1 = new lib.IMG_p1_02();
	this.instance_1.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,776,353.3);


(lib.popup_zona_1_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_01 = new lib.btn_ampliar();
	this.btn_ampliar_01.setTransform(310.6,56.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_01());
        });

	this.instance = new lib.IMG_p1_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_01}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Ludismo", "bold 16px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 138;
	this.text.setTransform(363,354.6);

	this.instance_1 = new lib.mc_Naranja_01("single",2);
	this.instance_1.setTransform(366.6,367.4,0.89,0.89);

	this.text_1 = new cjs.Text("1811\n\nEntre 1811 y 1816, en algunas regiones industriales de Inglaterra, grupos de artesanos perjudicados por las nuevas industrias, atacaron y destruyeron fábricas y máquinas, a las que culpaban de sus bajos salarios. Los ataques se atribuyeron a Ned Ludd. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 540;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_1_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance_1},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,824.7,354.3);


(lib.popup_ampliar_15 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
       this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(3));
        });

	// Imatge
	this.text = new cjs.Text("Lenin, político y estadista ruso, charlando con los obreros de la fábrica Putilov en Smolny.", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 581;
	this.text.setTransform(173.7,512.6);

	this.instance = new lib._000FP501_OPT();
	this.instance.setTransform(176.5,102.3);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_14 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
       this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(1));
        });

	// Imatge
	this.text = new cjs.Text("La clase obrera, descontenta, se manifiesta en las calles tras el desastre de la guerra ruso-japonesa, durante la revolución Rusa de 1905 (Museo de las Dos Guerras Mundiales, París, Francia).", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 523;
	this.text.setTransform(213.7,487.6);

	this.instance = new lib._001D0N01_OPT();
	this.instance.setTransform(216.8,78.2);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_13 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
       this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(2));
        });

	// Imatge
	this.text = new cjs.Text("Sufragistas francesas irrumpen en una sección electoral y se apoderan de la urna, mayo de 1908.", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 330;
	this.text.setTransform(321.7,488.6);

	this.instance = new lib._0008JU01_OPT();
	this.instance.setTransform(325.8,78.2);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_12 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
       this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(4));
        });

	// Imatge
	this.text = new cjs.Text("Organización de una sesión de la Cámara del Trabajo en Milán (1902).", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 341;
	this.text.setTransform(321.5,509.4);

	this.instance = new lib._0009B701_OPT();
	this.instance.setTransform(322.3,99.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_11_2 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
       this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(5));
        });

	// Imatge
	this.text = new cjs.Text("Pablo Iglesias, político y dirigente obrero español.", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 452;
	this.text.setTransform(248.8,514.8);

	this.instance = new lib._000FOB01_ok();
	this.instance.setTransform(247.3,44.4,0.708,0.708);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_11 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
       this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(3));
        });

	// Imatge
	this.text = new cjs.Text("Mijáil Alexándrovich Bakunin, político ruso.", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 291;
	this.text.setTransform(322.2,504.8);

	this.instance = new lib._0008LI01_OPT();
	this.instance.setTransform(324.3,93.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_10 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
       this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame4(2));
        });

	// Imatge
	/*this.text = new cjs.Text("Incendios y barricadas en la calle Rivoli de París durante la Comuna de 1871 (Museo Carnavalet, París, Francia).", "italic 18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 620;
	this.text.setTransform(174.3,501.4);*/
	
	var html = createDiv(txt['pie_foto_04'], "Verdana", "18px", '580px', '40px',"20px", "0px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(173, -115);

	this.instance = new lib._000IB301_OPT();
	this.instance.setTransform(174,90.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

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
            putStage(new lib.frame4(1));
        });

	// Imatge
	this.text = new cjs.Text("Karl Marx, filósofo alemán.", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 256;
	this.text.setTransform(335,513.3);

	this.instance = new lib._4_92822663_OPT();
	this.instance.setTransform(336.3,103.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_08_2 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
       this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame3(5));
        });

	// Imatge
	this.text = new cjs.Text("Plan original para el ensanche y reforma de Barcelona de Ildefonso Cerdá.", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 718;
	this.text.setTransform(113.6,521.9);

	this.instance = new lib._001P8E01_3();
	this.instance.setTransform(115.9,45.5,0.684,0.684);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

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
            putStage(new lib.frame3(4));
        });

	// Imatge
	this.text = new cjs.Text("Karl Marx y Friedrich Engels, filósofos alemanes.", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 335;
	this.text.setTransform(311.4,512);

	this.instance = new lib._0017WI01_OPT();
	this.instance.setTransform(312.8,102.4);

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
            putStage(new lib.frame3(3));
        });

	// Imatge
	this.text = new cjs.Text("Pierre-Joseph Proudhon, pensador y político francés.", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 297;
	this.text.setTransform(342.4,517);

	this.instance = new lib._3_shutterstock_88588882_OPT();
	this.instance.setTransform(342.8,106.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

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
	this.text = new cjs.Text("Vista antigua del palacio de Westminster, 1844 (Londres, Reino Unido).", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 655;
	this.text.setTransform(149.4,502);

	this.instance = new lib._2_shutterstock_88036291_OPT();
	this.instance.setTransform(149,92.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

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
	this.text = new cjs.Text("El trabajo, 1852-1863, de Ford Madox Brown (Galería de Arte de la Ciudad, Manchester, Reino Unido).", "italic 18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 569;
	this.text.setTransform(201.4,503);

	this.instance = new lib._000A8J01_OPT();
	this.instance.setTransform(201.5,93.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


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
	this.text = new cjs.Text("Robert Owen, socialista utópico británico.", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 296;
	this.text.setTransform(340.4,489);

	this.instance = new lib._0006ZI01_OPT();
	this.instance.setTransform(340.8,79.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

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
	this.text = new cjs.Text("", "14px Verdana-Bold");
	this.text.lineHeight = 16;
	this.text.setTransform(636,223);

	/*this.text_1 = new cjs.Text("El ángelus, 1858-1859, de Jean-François Millet (Museo del Louvre, París, Francia).", "italic 18px Verdana");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 467;
	this.text_1.setTransform(237.4,490);*/
	
	var html = createDiv(txt['pie_foto_03'], "Verdana", "18px", '480px', '40px',"20px", "0px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(263, -135);

	this.instance = new lib.MarcaAgua();
	this.instance.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	this.shape = new lib._001YRW01_OPT();
	
	this.shape.setTransform(262.5,79);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.shape,this.instance,this.text_1,this.text,this.btn_salir);
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
	/*this.text = new cjs.Text("Huelga, 1895, de Mihály Munkácsy.", "italic 18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 605;
	this.text.setTransform(167.4,489);*/
	
	var html = createDiv(txt['pie_foto_02'], "Verdana", "18px", '480px', '40px',"20px", "0px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(165, -125);
	
	

	this.instance = new lib._1_92825619_OPT();
	this.instance.setTransform(167.8,79.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

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
	/*this.text = new cjs.Text("Un trabajador junto a un telar, ilustración de la Enciclopedia o Diccionario razonado de las ciencias, las artes y los oficios (1751-1780).", "18px Verdana");
	this.text.lineHeight = 18;
	this.text.lineWidth = 476;
	this.text.setTransform(244.4,450);*/
	
	var html = createDiv(txt['pie_foto_01'], "Verdana", "18px", '480px', '40px',"20px", "0px", "left");
    this.text = new cjs.DOMElement(html);
    this.text.setTransform(250, -160);

	this.instance = new lib._001OGJ01_OPT();
	this.instance.setTransform(245,84.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

	// Capa 1
	this.instance_2 = new lib.mc_fundido();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.text,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);

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