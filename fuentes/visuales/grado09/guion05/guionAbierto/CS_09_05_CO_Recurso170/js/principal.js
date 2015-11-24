(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
   (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
        titulo1(this, txt['titol']);

this.btn_05 = new lib.btn_01();
	this.btn_05.setTransform(857.9,482.6,0.638,1.294);
	new cjs.ButtonHelper(this.btn_05, 0, 1, 2, false, new lib.btn_01(), 3);

	this.btn_04 = new lib.btn_02();
	this.btn_04.setTransform(747.6,482.6,0.63,1.294);
	new cjs.ButtonHelper(this.btn_04, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_03 = new lib.btn_01();
	this.btn_03.setTransform(556.9,482.6,1.556,1.294);
	new cjs.ButtonHelper(this.btn_03, 0, 1, 2, false, new lib.btn_01(), 3);

	this.btn_02 = new lib.btn_02();
	this.btn_02.setTransform(365.6,482.6,0.632,1.294);
	new cjs.ButtonHelper(this.btn_02, 0, 1, 2, false, new lib.btn_02(), 3);

	this.btn_01 = new lib.btn_01();
	this.btn_01.setTransform(174.8,482.6,1.552,1.294);
	new cjs.ButtonHelper(this.btn_01, 0, 1, 2, false, new lib.btn_01(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D1CA").s("#000000").ss(1,1,1).rc(-43.5,-9.35,87,18.7,6,0,0,6);
	this.shape.setTransform(856.7,482.6,1.247,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3D1CA").s("#000000").ss(1,1,1).rc(-87,-9.35,174,18.7,6,0,0,6);
	this.shape_1.setTransform(176,482.6,1.539,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_2.setTransform(747.4,482.6,0.628,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_3.setTransform(747.4,482.6,0.628,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_4.setTransform(556.6,482.6,1.556,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3D1CA").s().p("AtkBdIAAi5IbJAAIAAC5g");
	this.shape_5.setTransform(556.6,482.6,1.556,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
	this.shape_6.setTransform(365.5,482.6,0.63,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AtlBdIAAi5IbLAAIAAC5g");
	this.shape_7.setTransform(365.5,482.6,0.63,1);

	this.text = new cjs.Text("1945", "bold 16px Arial");
	this.text.lineHeight = 18;
	this.text.lineWidth = 55;
	this.text.setTransform(777,495.6);

	this.text_1 = new cjs.Text("1946", "bold 16px Arial");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 55;
	this.text_1.setTransform(883.1,495.6);

	this.text_2 = new cjs.Text("1944", "bold 16px Arial");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 55;
	this.text_2.setTransform(665.8,495.6);

	this.text_3 = new cjs.Text("1942", "bold 16px Arial");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(395.9,495.6);

	this.text_4 = new cjs.Text("1941", "bold 16px Arial");
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(283.2,495.6);

	this.text_5 = new cjs.Text("1939", "bold 16px Arial");
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 55;
	this.text_5.setTransform(17.9,495.6);

	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(679.8,252.4);

	this.instance_1 = new lib.Mapadebits4();
	this.instance_1.setTransform(603.4,132.4);

	this.instance_2 = new lib.Mapadebits3();
	this.instance_2.setTransform(288.3,259.4);

	this.instance_3 = new lib.Mapadebits2();
	this.instance_3.setTransform(286.8,134.4);

	this.instance_4 = new lib.Mapadebits1();
	this.instance_4.setTransform(37.3,254.4);

	this.text_6 = new cjs.Text("1945\n\nRendición de Berlín", "bold 14px Verdana");
	this.text_6.lineHeight = 10;
	this.text_6.lineWidth = 129;
	this.text_6.setTransform(806.6,263);
        var html = createDiv(txt['p_01_hito_05'], "Verdana", "14px", '125px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_6= new cjs.DOMElement(html);
        this.text_6.setTransform(806 , 263 - 605);

	this.text_7 = new cjs.Text("1944\n\nDesembarco de Normandía", "bold 14px Verdana");
	this.text_7.lineHeight = 10;
	this.text_7.lineWidth = 129;
	this.text_7.setTransform(714.6,146);
        var html = createDiv(txt['p_01_hito_04'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_7= new cjs.DOMElement(html);
        this.text_7.setTransform(714 , 146 - 609);

	this.text_8 = new cjs.Text("1941\n\n\nPearl Harbor", "bold 14px Verdana");
	this.text_8.lineHeight = 10;
	this.text_8.lineWidth = 129;
	this.text_8.setTransform(400.6,267);
        var html = createDiv(txt['p_01_hito_03'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_8= new cjs.DOMElement(html);
        this.text_8.setTransform(400 , 267 - 605);

	this.text_9 = new cjs.Text("1941\n\n\nInvasión nazi de la URSS", "bold 14px Verdana");
	this.text_9.lineHeight = 10;
	this.text_9.lineWidth = 129;
	this.text_9.setTransform(407.6,139);
        var html = createDiv(txt['p_01_hito_02'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_9= new cjs.DOMElement(html);
        this.text_9.setTransform(407 , 139 - 615);

	this.text_10 = new cjs.Text("", "14px VerBo");
	this.text_10.textAlign = "right";
	this.text_10.lineHeight = 10;
	this.text_10.lineWidth = 118;
	this.text_10.setTransform(788.1,262.3);

	this.text_11 = new cjs.Text("", "14px VerBo");
	this.text_11.lineHeight = 10;
	this.text_11.lineWidth = 113;
	this.text_11.setTransform(436.4,273.3);

	this.text_12 = new cjs.Text("1939\n\n\nInicio de la Segunda \nGuerra Mundial", "bold 14px Verdana");
	this.text_12.lineHeight = 10;
	this.text_12.lineWidth = 129;
	this.text_12.setTransform(155.6,251);
        var html = createDiv(txt['p_01_hito_01'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.text_12= new cjs.DOMElement(html);
        this.text_12.setTransform(155 , 251 - 624);

	this.text_13 = new cjs.Text("Victorias del Eje", "bold 14px Arial");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 16;
	this.text_13.lineWidth = 453;
	this.text_13.setTransform(271.4,418.6);

	this.text_14 = new cjs.Text("", "14px VerBo");
	this.text_14.lineHeight = 10;
	this.text_14.lineWidth = 113;
	this.text_14.setTransform(710.3,144);

	this.text_15 = new cjs.Text("Ofensiva y victoria final aliada", "bold 14px Arial");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 16;
	this.text_15.lineWidth = 297;
	this.text_15.setTransform(758.4,418.6);

	this.text_16 = new cjs.Text("Contraofensiva aliada", "bold 14px Arial");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 14;
	this.text_16.lineWidth = 120;
	this.text_16.setTransform(554.5,412.4);

	this.instance_5 = new lib.Mapadebits9();
	this.instance_5.setTransform(785.8,290.8);

	this.instance_6 = new lib.Mapadebits8();
	this.instance_6.setTransform(664.3,197);

	this.instance_7 = new lib.Mapadebits7();
	this.instance_7.setTransform(296.3,197);

	this.instance_8 = new lib.Mapadebits6();
	this.instance_8.setTransform(50.4,294.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_8.setTransform(789.2,412.5,1.047,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_9.setTransform(665.2,412.5,1.047,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_10.setTransform(297.2,412.8,1.047,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_11.setTransform(53.8,412.8,1.047,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#56A381").s().p("AkWCdIAAk5IIsAAIAAE5g");
	this.shape_12.setTransform(556.4,428.1,2.237,1.767);

	this.text_17 = new cjs.Text("Selecciona en la línea de la cronología un periodo de tiempo", "bold 16px Arial");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 18;
	this.text_17.lineWidth = 372;
	this.text_17.setTransform(473.5,542);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EF542E").s().p("A3jCdIAAk5MAvHAAAIAAE5g");
	this.shape_13.setTransform(761,428.1,1.002,1.767);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9F846B").s().p("A/ECdIAAk5MA+JAAAIAAE5g");
	this.shape_14.setTransform(273.8,428.1,1.151,1.767);

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


        this.addChild(this.logo, this.titulo,this.shape_14,this.shape_13,this.text_17,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.text_16,this.text_15,this.text_14,this.text_13,this.text_12,this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.btn_01,this.btn_02,this.btn_03,this.btn_04,this.btn_05);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.4,472,0.862,1.49);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.text = new cjs.Text("Victorias del Eje", "bold 16px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 863;
	this.text.setTransform(473.3,464.9);

	this.text_1 = new cjs.Text("Pacto Tripartito", "bold 16px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 138;
	this.text_1.setTransform(837.5,348.7);

	this.text_2 = new cjs.Text("Batalla de Inglaterra", "bold 16px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 138;
	this.text_2.setTransform(681.1,348.7);

	this.text_3 = new cjs.Text("Invasión de Francia", "bold 16px Arial");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 137;
	this.text_3.setTransform(524.8,347.7);

	this.text_4 = new cjs.Text("Inicio de la Segunda \nGuerra Mundial", "bold 16px Arial");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 202;
	this.text_4.setTransform(261.8,349.5);

	

  if (boton == 1)
            this.mc_boto_01 = new lib.mc_Marron("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Marron();

        this.mc_boto_01.setTransform(264.9,367.4,1.244,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Marron(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Marron("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Marron();
        this.mc_boto_02.setTransform(526.8,366.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Marron(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Marron("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Marron();
        this.mc_boto_03.setTransform(683.4,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Marron(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Marron("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Marron();
        this.mc_boto_04.setTransform(839.3,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Marron(), 3);
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


	this.text_5 = new cjs.Text("Septiembre", "bold 13px Verdana");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 16;
	this.text_5.setTransform(790.4,411.2);

	this.text_6 = new cjs.Text("Agosto", "bold 13px Verdana");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 16;
	this.text_6.setTransform(681.2,411.2);

	this.text_7 = new cjs.Text("Junio", "bold 13px Verdana");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 16;
	this.text_7.setTransform(573.4,411.2);

	this.text_8 = new cjs.Text("Septiembre", "bold 13px Verdana");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 16;
	this.text_8.setTransform(262.6,411.2);

	this.instance = new lib.Mapadebits13();
	this.instance.setTransform(792.6,393.7);

	this.instance_1 = new lib.Mapadebits12();
	this.instance_1.setTransform(682.4,393.7);

	this.instance_2 = new lib.Mapadebits11();
	this.instance_2.setTransform(575.1,393.7);

	this.instance_3 = new lib.Mapadebits10();
	this.instance_3.setTransform(264.7,393.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(793.4,463.8,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(683.1,463.8,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(575.9,463.8,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(265.4,463.8,1.047,1);

	this.text_9 = new cjs.Text("1941", "bold 18px Arial");
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 58;
	this.text_9.setTransform(882.4,410.2);

	this.text_10 = new cjs.Text("1940", "bold 16px Arial");
	this.text_10.lineHeight = 18;
	this.text_10.lineWidth = 49;
	this.text_10.setTransform(450.4,415);

	this.text_11 = new cjs.Text("1939", "bold 18px Arial");
	this.text_11.lineHeight = 20;
	this.text_11.lineWidth = 55;
	this.text_11.setTransform(14.4,410.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_4.setTransform(475.3,436.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F846B").s().p("EhD3AC1IAAlpMCHvAAAIAAFpg");
	this.shape_5.setTransform(475.4,473,1,2.045);

        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_5,this.shape_4,this.text_11,this.text_10,this.text_9,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text_8,this.text_7,this.text_6,this.text_5,this.mc_boto_03,this.mc_boto_02,this.mc_boto_01,this.mc_boto_04,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.btn_zona_1_01,this.btn_zona_1_02,this.btn_zona_1_03,this.btn_zona_1_04,this.btn_next);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);

this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(24.9,472.7,0.862,1.207,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.4,472.7,0.862,1.207);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);



	this.text = new cjs.Text("Victorias del Eje", "bold 16px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 864;
	this.text.setTransform(473.9,464.2);

	this.text_1 = new cjs.Text("Ataque japonés \na Pearl Harbor", "bold 16px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 167;
	this.text_1.setTransform(818.2,349.1);

	this.text_2 = new cjs.Text("Invasión nazi \nde la URSS", "bold 16px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 138;
	this.text_2.setTransform(468.1,349.1);

	

 if (boton == 1)
            this.mc_boto_01 = new lib.mc_Marron("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Marron();
        this.mc_boto_01.setTransform(469.8,367.4,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Marron(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Marron("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Marron();
        this.mc_boto_02.setTransform(820.3,367.4,1.068,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Marron(), 3);
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
        
	this.text_3 = new cjs.Text("Junio", "bold 13px Verdana");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 16;
	this.text_3.setTransform(469.6,410.9);

	this.text_4 = new cjs.Text("Diciembre", "bold 13px Verdana");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 16;
	this.text_4.setTransform(827.1,410.9);

	this.instance = new lib.Mapadebits15();
	this.instance.setTransform(472.2,393.7);

	this.instance_1 = new lib.Mapadebits14();
	this.instance_1.setTransform(830.4,393.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(831.2,454.2,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(472.9,454.2,1.047,1);

	this.text_5 = new cjs.Text("1942", "bold 18px Arial");
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 58;
	this.text_5.setTransform(882.4,410.9);

	this.text_6 = new cjs.Text("1941", "bold 18px Arial");
	this.text_6.lineHeight = 20;
	this.text_6.lineWidth = 55;
	this.text_6.setTransform(14.4,410.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_2.setTransform(475.3,436.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F846B").s().p("EhD3AC1IAAlpMCHvAAAIAAFpg");
	this.shape_3.setTransform(475.4,473.9,1,2.01,0,0,0,0,0.2);
        
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame2());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior,this.instance_1,this.instance,this.shape_3,this.shape_2,this.text_6,this.text_5,this.shape_1,this.shape,this.text_4,this.text_3,this.mc_boto_02,this.mc_boto_01,this.text_2,this.text_1,this.text,this.btn_zona_2_01,this.btn_zona_2_02,this.btn_next,this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame4 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        // Capa 1
	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(24.9,472.7,0.862,1.207,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.4,472.7,0.862,1.207);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	
	this.text = new cjs.Text("Ofensiva y victoria final aliada", "bold 14px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 177;
	this.text.setTransform(805.9,458.2);

	this.text_1 = new cjs.Text("Conferencia de Teherán", "bold 15px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 138;
	this.text_1.setTransform(792,350);

	this.text_2 = new cjs.Text("Batalla de Stalingrado", "bold 15px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 140;
	this.text_2.setTransform(372.8,349.7);

	this.text_3 = new cjs.Text("Contraofensiva aliada", "bold 14px Arial");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 400;
	this.text_3.setTransform(478.6,465.8);

	this.text_4 = new cjs.Text("Victorias del Eje", "bold 14px Arial");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 16;
	this.text_4.lineWidth = 143;
	this.text_4.setTransform(144.1,465.8);

	
 if (boton == 1)
            this.mc_boto_01 = new lib.mc_Verde("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Verde();
        this.mc_boto_01.setTransform(375,366.5,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Verde(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Naranja("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Naranja();
        this.mc_boto_02.setTransform(794.3,366.5,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Naranja(), 3);
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
	this.text_5 = new cjs.Text("Noviembre-diciembre", "bold 13px Verdana");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 16;
	this.text_5.setTransform(796.7,414.4);

	this.text_6 = new cjs.Text("Invierno 1942-1943", "bold 13px Verdana");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 16;
	this.text_6.setTransform(382,414.4);

	this.instance = new lib.Mapadebits17();
	this.instance.setTransform(798,383.7);

	this.instance_1 = new lib.Mapadebits16();
	this.instance_1.setTransform(373.3,381.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(799.2,453.8,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(374.1,453.8,1.047,1);

	this.text_7 = new cjs.Text("1944", "bold 18px Arial");
	this.text_7.lineHeight = 20;
	this.text_7.lineWidth = 58;
	this.text_7.setTransform(882.4,410.9);

	this.text_8 = new cjs.Text("1943", "bold 16px Arial");
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 49;
	this.text_8.setTransform(465,412.2);

	this.text_9 = new cjs.Text("1942", "bold 18px Arial");
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 55;
	this.text_9.setTransform(14.4,410.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_2.setTransform(475.3,436.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56A381").s().p("EhD3AC1IAAlpMCHvAAAIAAFpg");
	this.shape_3.setTransform(483.7,473.5,0.512,2.011);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F846B").s().p("EhD3AC1IAAlpMCHvAAAIAAFpg");
	this.shape_4.setTransform(151,473.5,0.253,2.011);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF542E").s().p("EhD3AC1IAAlpMCHvAAAIAAFpg");
	this.shape_5.setTransform(805.8,473.5,0.236,2.011,0,0,0,-0.1,0);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.text_9,this.text_8,this.text_7,this.shape_1,this.shape,this.instance_1,this.instance,this.text_6,this.text_5,this.mc_boto_01,this.mc_boto_02,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.btn_zona_3_01,this.btn_zona_3_02,this.btn_next,this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame5 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);

this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.9,472.7,0.862,1.207,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925.4,472.7,0.862,1.207);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(713.8,454.8,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(475,454.8,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(600,454.8,1.047,1);

	this.text = new cjs.Text("Ofensiva y victoria final aliada", "bold 14px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 864;
	this.text.setTransform(474.7,464.3);

	this.text_1 = new cjs.Text("Batalla de\nFilipinas", "bold 15px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 142;
	this.text_1.setTransform(763,350.2);

	this.text_2 = new cjs.Text("Liberación de\nParís", "bold 15px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 140;
	this.text_2.setTransform(596.8,350.2);

	this.text_3 = new cjs.Text("Desembarco de Normandía", "bold 15px Arial");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 140;
	this.text_3.setTransform(412.4,350.2);

	this.text_4 = new cjs.Text("Octubre", "bold 13px Verdana");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 16;
	this.text_4.setTransform(711.9,415.8);

	this.text_5 = new cjs.Text("Agosto", "bold 13px Verdana");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 16;
	this.text_5.setTransform(597.5,415.8);

	this.text_6 = new cjs.Text("Junio", "bold 13px Verdana");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 16;
	this.text_6.setTransform(472.3,415.8);

	this.instance = new lib.Mapadebits20();
	this.instance.setTransform(713,390.7);

	this.instance_1 = new lib.Mapadebits19();
	this.instance_1.setTransform(599.3,393.7);

	this.instance_2 = new lib.Mapadebits18();
	this.instance_2.setTransform(474.2,393.7);

	
  if (boton == 1)
            this.mc_boto_01 = new lib.mc_Naranja("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Naranja();

        this.mc_boto_01.setTransform(415.6,366.5,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Naranja(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Naranja("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Naranja();
        this.mc_boto_02.setTransform(599.1,366.5,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Naranja(), 3);

        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Naranja("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Naranja();
        this.mc_boto_03.setTransform(764.6,366.5,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Naranja(), 3);


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
        
	this.text_7 = new cjs.Text("1945", "bold 18px Arial");
	this.text_7.lineHeight = 20;
	this.text_7.lineWidth = 58;
	this.text_7.setTransform(883.4,410.9);

	this.text_8 = new cjs.Text("1944", "bold 18px Arial");
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 55;
	this.text_8.setTransform(15.4,410.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_3.setTransform(476.3,436.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF542E").s().p("EhD3AC1IAAlpMCHvAAAIAAFpg");
	this.shape_4.setTransform(476.3,473.5,1,2.01,0,0,0,-0.1,0);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame6());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_4,this.shape_3,this.text_8,this.text_7,this.mc_boto_01,this.mc_boto_02,this.mc_boto_03,this.instance_2,this.instance_1,this.instance,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.shape_2,this.shape_1,this.shape,this.btn_zona_4_01,this.btn_zona_4_02,this.btn_zona_4_03,this.btn_next,this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame6 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.4,472.7,0.862,1.207,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	
	this.text = new cjs.Text("Ofensiva y victoria final aliada", "bold 14px Arial");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 864;
	this.text.setTransform(474.2,464.3);

	this.text_1 = new cjs.Text("Bomba atómica sobre Hiroshima y Nagasaki", "bold 15px Arial");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 195;
	this.text_1.setTransform(576.4,349.1);

	this.text_2 = new cjs.Text("Rendición de Berlín", "bold 15px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 140;
	this.text_2.setTransform(367.9,350.1);

	this.text_3 = new cjs.Text("Creación de la ONU", "bold 15px Arial");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 140;
	this.text_3.setTransform(778.9,350.1);

	this.text_4 = new cjs.Text("Conferencia de Yalta", "bold 15px Arial");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 17;
	this.text_4.lineWidth = 140;
	this.text_4.setTransform(187.9,350.1);

	

  if (boton == 1)
            this.mc_boto_01 = new lib.mc_Naranja("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Naranja();

        this.mc_boto_01.setTransform(191.1,366.5,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Naranja(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Naranja("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Naranja();
        this.mc_boto_02.setTransform(781.1,366.5,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Naranja(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Naranja("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Naranja();
        this.mc_boto_03.setTransform(370.1,366.5,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Naranja(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Naranja("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Naranja();
        this.mc_boto_04.setTransform(578.3,366.5,1.374,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Naranja(), 3);
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


	this.text_5 = new cjs.Text("Octubre", "bold 13px Verdana");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 16;
	this.text_5.setTransform(733.5,415);

	this.text_6 = new cjs.Text("Agosto", "bold 13px Verdana");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 16;
	this.text_6.setTransform(580.3,415);

	this.text_7 = new cjs.Text("Mayo", "bold 13px Verdana");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 16;
	this.text_7.setTransform(369.2,415);

	this.text_8 = new cjs.Text("Febrero", "bold 13px Verdana");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 16;
	this.text_8.setTransform(189.7,415);

	this.instance = new lib.Mapadebits24();
	this.instance.setTransform(734.4,393.6);

	this.instance_1 = new lib.Mapadebits23();
	this.instance_1.setTransform(582,393.6);

	this.instance_2 = new lib.Mapadebits22();
	this.instance_2.setTransform(371,393.6);

	this.instance_3 = new lib.Mapadebits21();
	this.instance_3.setTransform(191,393.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(735.1,454.8,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(582.7,454.8,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(371.7,454.8,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(191.7,454.8,1.047,1);

	this.text_9 = new cjs.Text("1946", "bold 18px Arial");
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 58;
	this.text_9.setTransform(883,410.8);

	this.text_10 = new cjs.Text("1945", "bold 18px Arial");
	this.text_10.lineHeight = 20;
	this.text_10.lineWidth = 55;
	this.text_10.setTransform(14.9,410.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_4.setTransform(475.8,436.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF542E").s().p("EhD3AC1IAAlpMCHvAAAIAAFpg");
	this.shape_5.setTransform(475.6,473.4,1,2.011,0,0,0,-0.1,0);
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame5());
        });

   this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.logo, this.titulo, this.home, this.shape_5,this.shape_4,this.text_10,this.text_9,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text_8,this.text_7,this.text_6,this.text_5,this.mc_boto_01,this.mc_boto_02,this.mc_boto_03,this.mc_boto_04,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.btn_zona_5_01,this.btn_zona_5_02,this.btn_zona_5_03,this.btn_zona_5_04,this.btn_prev);
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
   
   (lib._0001F001 = function() {
	this.initialize(img._0001F001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,128);


(lib._0001F001_1 = function() {
	this.initialize(img._0001F001_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,530);


(lib._0008ZP01_OPT = function() {
	this.initialize(img._0008ZP01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,741,500);


(lib._0009C701_OPT = function() {
	this.initialize(img._0009C701_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,699,500);


(lib._0009DZ01_Min = function() {
	this.initialize(img._0009DZ01_Min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,80);


(lib._0009DZ01_OPT = function() {
	this.initialize(img._0009DZ01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,500);


(lib._0009TD01 = function() {
	this.initialize(img._0009TD01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,589,768);


(lib._0009XI01_Min = function() {
	this.initialize(img._0009XI01_Min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,80);


(lib._0009XI01_OPT = function() {
	this.initialize(img._0009XI01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,500);


(lib._000F5O01_OPT = function() {
	this.initialize(img._000F5O01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,500);


(lib._000G8001_Min = function() {
	this.initialize(img._000G8001_Min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,80);


(lib._000G8001_OPT = function() {
	this.initialize(img._000G8001_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,679,500);


(lib._000G8H01 = function() {
	this.initialize(img._000G8H01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,565,768);


(lib._000IVK01_OPT = function() {
	this.initialize(img._000IVK01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,779,500);


(lib._000K8O01_Min = function() {
	this.initialize(img._000K8O01_Min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,80);


(lib._000K8O01_OPT = function() {
	this.initialize(img._000K8O01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,500);


(lib._000LBV01_OPT = function() {
	this.initialize(img._000LBV01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,500);


(lib._000YH801 = function() {
	this.initialize(img._000YH801);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,128);


(lib._000YH801_1 = function() {
	this.initialize(img._000YH801_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,752,530);


(lib._0016X201 = function() {
	this.initialize(img._0016X201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,712,479);


(lib._0016X201_ok = function() {
	this.initialize(img._0016X201_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,696,461);


(lib._0016XK01 = function() {
	this.initialize(img._0016XK01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,413,530);


(lib._0016YT01 = function() {
	this.initialize(img._0016YT01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,453,530);


(lib._0017FB01 = function() {
	this.initialize(img._0017FB01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,140);


(lib._0019NT01_OPT = function() {
	this.initialize(img._0019NT01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,661,500);


(lib._001CJP01 = function() {
	this.initialize(img._001CJP01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,769,530);


(lib._001OWQ01 = function() {
	this.initialize(img._001OWQ01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,707,530);


(lib._001RJT01 = function() {
	this.initialize(img._001RJT01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,128);


(lib._001RJT01_1 = function() {
	this.initialize(img._001RJT01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,721,530);


(lib._002C3K01_OPT = function() {
	this.initialize(img._002C3K01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,693,500);


(lib._002C6101_OPT = function() {
	this.initialize(img._002C6101_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,659,500);


(lib._002C6801_Min = function() {
	this.initialize(img._002C6801_Min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,80);


(lib._002C6801_OPT = function() {
	this.initialize(img._002C6801_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,703,500);


(lib._002C6G01_OPT = function() {
	this.initialize(img._002C6G01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,671,500);


(lib._002C7X01_OPT = function() {
	this.initialize(img._002C7X01_OPT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,500);


(lib._002F4U01 = function() {
	this.initialize(img._002F4U01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,530);


(lib.constituci_n002 = function() {
	this.initialize(img.constituci_n002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,128);


(lib.CS_10_10_081 = function() {
	this.initialize(img.CS_10_10_081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,931,531);


(lib.CS_10_10_081_1 = function() {
	this.initialize(img.CS_10_10_081_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,931,531);


(lib.CS_10_10_082 = function() {
	this.initialize(img.CS_10_10_082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,806,530);


(lib.CS_10_10_082_1 = function() {
	this.initialize(img.CS_10_10_082_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,806,530);


(lib.CS_10_10_083 = function() {
	this.initialize(img.CS_10_10_083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,848,530);


(lib.CS_10_10_083_1 = function() {
	this.initialize(img.CS_10_10_083_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,848,530);


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
p.nominalBounds = new cjs.Rectangle(0,0,109,80);


(lib.Mapadebits10 = function() {
	this.initialize(img.Mapadebits10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,73);


(lib.Mapadebits11 = function() {
	this.initialize(img.Mapadebits11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,63);


(lib.Mapadebits12 = function() {
	this.initialize(img.Mapadebits12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,63);


(lib.Mapadebits13 = function() {
	this.initialize(img.Mapadebits13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,63);


(lib.Mapadebits14 = function() {
	this.initialize(img.Mapadebits14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,64);


(lib.Mapadebits15 = function() {
	this.initialize(img.Mapadebits15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,64);


(lib.Mapadebits16 = function() {
	this.initialize(img.Mapadebits16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,76);


(lib.Mapadebits17 = function() {
	this.initialize(img.Mapadebits17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,71);


(lib.Mapadebits18 = function() {
	this.initialize(img.Mapadebits18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,62);


(lib.Mapadebits19 = function() {
	this.initialize(img.Mapadebits19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,63);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,80);


(lib.Mapadebits20 = function() {
	this.initialize(img.Mapadebits20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,67);


(lib.Mapadebits21 = function() {
	this.initialize(img.Mapadebits21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,62);


(lib.Mapadebits22 = function() {
	this.initialize(img.Mapadebits22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,63);


(lib.Mapadebits23 = function() {
	this.initialize(img.Mapadebits23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,63);


(lib.Mapadebits24 = function() {
	this.initialize(img.Mapadebits24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,62);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,80);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,80);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,80);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,122);


(lib.Mapadebits7 = function() {
	this.initialize(img.Mapadebits7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,219);


(lib.Mapadebits8 = function() {
	this.initialize(img.Mapadebits8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,220);


(lib.Mapadebits9 = function() {
	this.initialize(img.Mapadebits9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,126);


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


(lib.ONU = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._0016X201_ok();
	this.instance.setTransform(0,0,0.396,0.396);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,275.9,182.7);


(lib.IMG_p5_04 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000LBV01_OPT();
	this.instance.setTransform(-10.5,-1.6,0.664,0.664);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-1.6,257,332);


(lib.IMG_p5_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0009DZ01_OPT();
	this.instance.setTransform(-30.2,-2.4,0.523,0.523);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-2.4,387.2,261.6);


(lib.IMG_p5_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0009TD01();
	this.instance.setTransform(-22.1,-19.5,0.47,0.47);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.1,-19.5,277,361.2);


(lib.IMG_p4_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._002C7X01_OPT();
	this.instance.setTransform(-0.7,-59.2,0.653,0.653);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-59.2,250.1,326.5);


(lib.IMG_p4_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7p0IMA3TAAAMAAAAoRMg3TAAAg");
	mask.setTransform(133,128.9);

	// Capa 2
	this.instance = new lib._002C3K01_OPT();
	this.instance.setTransform(-36.1,-11.8,0.583,0.583);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.1,-11.8,404.3,291.7);


(lib.IMG_p4_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7p0IMA3TAAAMAAAAoRMg3TAAAg");
	mask.setTransform(133,128.9);

	// Capa 2
	this.instance = new lib._0009XI01_OPT();
	this.instance.setTransform(-46.1,-14.8,0.583,0.583);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.1,-14.8,371.6,291.7);


(lib.IMG_p3_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7p0IMA3TAAAMAAAAoRMg3TAAAg");
	mask.setTransform(133,128.9);

	// Capa 2
	this.instance = new lib._000F5O01_OPT();
	this.instance.setTransform(-74.8,-7.3,0.553,0.553);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.8,-7.3,409.4,276.6);


(lib.IMG_p3_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000G8H01();
	this.instance.setTransform(-29.6,-5,0.513,0.513);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.6,-5,290,394.2);


(lib.IMG_p2_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000K8O01_OPT();
	this.instance.setTransform(-54.8,-7.3,0.553,0.553);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.8,-7.3,357.4,276.6);


(lib.IMG_p2_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._002C6801_OPT();
	this.instance.setTransform(-4.8,-7.3,0.553,0.553);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.8,-7.3,388.9,276.6);


(lib.IMG_p1_03 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._002C6101_OPT();
	this.instance.setTransform(-84.8,-7.3,0.553,0.553);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.8,-7.3,364.6,276.6);


(lib.IMG_p1_02 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._0009C701_OPT();
	this.instance.setTransform(-84.8,-7.3,0.553,0.553);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.8,-7.3,386.7,276.6);


(lib.IMG_p1_01 = function() {
	this.initialize();

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzN0IMAmbAAAMAAAAoRMgmbAAAg");
	mask.setTransform(123,128.9);

	// Capa 2
	this.instance = new lib._000G8001_OPT();
	this.instance.setTransform(-142.4,-72.2,0.673,0.673);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-142.4,-72.2,456.8,336.4);


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


(lib.Banderas_MC = function() {
	this.initialize();

	// Nazi Germany
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0500").s().p("AiXJiIEwkxIiZiZIkwEyInKnKICYiXIEyEvICZiYIkykwIHJnKICZCZIkwExICXCZIExkyIHKHJIiYCYIkykvIiYCXIExExInKHKg");
	this.shape.setTransform(-17.3,-262.3,0.899,0.899);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak6LqQiRg9hxhwQhwhxg9iRQhAiXAAikQAAijBAiXQA9iRBwhwQBxhwCRg+QCXg/CjgBQCkABCXA/QCRA+BxBwQBwBwA9CRQA/CXABCjQgBCkg/CXQg9CRhwBxQhxBwiRA9QiXA/ikABQijgBiXg/g");
	this.shape_1.setTransform(-17.3,-262.3,0.899,0.899);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AcIQ4Mg4PAAAMAAAghvMA4PAAAg");
	this.shape_2.setTransform(-17.3,-262.3,0.899,0.899);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0040B").s().p("A8HQ4MAAAghvMA4PAAAMAAAAhvg");
	this.shape_3.setTransform(-17.3,-262.3,0.899,0.899);

	// Fascist Italy
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNGgQgUgPgZgCIAAljIksAAIAAhoIEsAAIAAlyIB1AAIAAFyIEsAAIAABoIksAAIAAFjQgZACgUAPQgKAIgEAHQgDgHgKgIg");
	this.shape_4.setTransform(-17.4,-31.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CB0912").s().p("AkXGfQhOAAgBhWIAArnILNAAIAALnQgBBWhOAAg");
	this.shape_5.setTransform(-17.4,-33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#001881").s().p("AgKINQgUgZgkAAIjkAAQhFAAgxgsQg1gxAAhQIAAryQAAgygXgoIgYgfIQBAAIgYAfQgXAoAAAyIAALyQAABQg1AxQgxAshFAAIjkAAQgkAAgUAZQgJAMgCAMQgBgMgJgMg");
	this.shape_6.setTransform(-17.4,-30.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CB0912").s().p("AobQ3MAAAghtIQ3AAMAAAAhtg");
	this.shape_7.setTransform(90.5,-30.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00913E").s().p("AobQ3MAAAghtIQ3AAMAAAAhtg");
	this.shape_8.setTransform(-125.4,-30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").p("AZUQ3MgynAAAMAAAghtMAynAAAg");
	this.shape_9.setTransform(-17.4,-30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A5TQ3MAAAghtMAynAAAMAAAAhtg");
	this.shape_10.setTransform(-17.4,-30.8);

	// Imperial Japan - Naval Ensign
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("AZTQ4MgylAAAMAAAghvMAylAAAg");
	this.shape_11.setTransform(-17.4,221.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CB0912").s().p("AIeQ4IocqRQgnAigxAaIE9JVIj3AAIiporQgzAPg3AFIA1IXIjUAAIAzoXQg1gEg0gQIinIrIj6AAIE9pUQgtgYgsgkIoYKQImFAAIAAghINRq7QgigpgagxIsVGnIAAkmILsjkQgQgygGg3IrWBIIAAj4ILWBGQAGg1APg0IrrjiIAAknIMUGlQAagwAigpItQq3IAAglIGAAAIIcKPQApghAwgaIk/pUID5AAICqIqQAygPA3gGIg1oVIDVAAIg0IVQA1AFA1APICnopID4AAIk8JTQAuAYAqAjIIYqOIGtAAIt5LbQAhApAbAwIXLsaIAAHGI2iG4QAQAxAFA4IWNiNIAAGBI2NiLQgFA1gQA1IWiG0IAAHGI3LsXQgXAuglAsIN/Ldg");
	this.shape_12.setTransform(-17.4,221.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A5TQ4MAAAghuMAynAAAMAAAAhug");
	this.shape_13.setTransform(-17.4,221.2);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-179.4,-359.5,324,688.7);


(lib.mc_Verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9EBFB1").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56A381").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_Naranja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCAEA2").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF542E").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_Marron = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6A798").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9F846B").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

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


(lib.popup_zona_5_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_15 = new lib.btn_ampliar();
	this.btn_ampliar_15.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_15, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_15.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_15());
        });
	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_15).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Bomba atómica sobre Hiroshima y Nagasaki", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 195;
	this.text.setTransform(576.4,349.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF542E").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(578.3,366.5,1.374,0.89);

	this.instance = new lib.IMG_p5_04();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.text_1 = new cjs.Text("1945 (agosto)\n\nEn la ofensiva final de Estados Unidos sobre Japón, los norteamericanos lanzaron sobre las ciudades de Hiroshima (6 de agosto) y Nagasaki (9 de agosto) sendas bombas nucleares que acabaron con la vida de decenas de miles de personas. Japón no tuvo más salida que la rendición.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 540;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_5_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(578.3,366.5,1.384,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.instance},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,824.7,354.3);


(lib.popup_zona_5_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_14 = new lib.btn_ampliar();
	this.btn_ampliar_14.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_14, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_14.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_14());
        });
	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_14).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Rendición de Berlín", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 140;
	this.text.setTransform(367.9,350.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF542E").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(370.1,366.5,0.89,0.89);

	this.instance = new lib.IMG_p5_03();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.text_1 = new cjs.Text("1945 (abril-mayo)\n\nEl 30 de abril, y ante la proximidad de las tropas aliadas, Hitler se suicidó junto a Eva Braun en el búnker de la cancillería. El 2 de mayo Berlín se rindió y los aliados entraron en la ciudad.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 540;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_5_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(370.1,366.5,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.instance},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,824.7,354.8);


(lib.popup_zona_5_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_13 = new lib.btn_ampliar();
	this.btn_ampliar_13.setTransform(341.6,51.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_13, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_13.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_13());
        });
	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_13).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Creación de la ONU", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 140;
	this.text.setTransform(778.9,350.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF542E").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(781.1,366.5,0.89,0.89);

	this.instance = new lib.ONU();
	this.instance.setTransform(223.5,133.8,1,1,0,0,0,141.1,94.9);

	this.text_1 = new cjs.Text("1945 (octubre)\n\nEl día 24 entró en vigor la Carta de las Naciones Unidas. La Organización de las Naciones Unidas (ONU) fue creada durante la conferencia de San Francisco (abril-junio) para resolver conflictos internacionales y mantener la paz y la seguridad mundial.    ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 525;
	this.text_1.setTransform(384,39.8);
var html = createDiv(txt['txt_popup_5_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(384, 40 - 610);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(781.1,366.5,0.936,0.936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.instance},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82.4,38.9,830.4,355.7);


(lib.popup_zona_5_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_12 = new lib.btn_ampliar();
	this.btn_ampliar_12.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_12, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_12.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_12());
        });
	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_12).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Conferencia de Yalta", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 140;
	this.text.setTransform(187.9,350.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF542E").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(191.1,366.5,0.89,0.89);

	this.instance = new lib.IMG_p5_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.text_1 = new cjs.Text("1945 (febrero)\n\nEntre el 4 y el 11 de febrero, Roosevelt, Churchill y Stalin acordaron en Yalta la división de Alemania en cuatro áreas bajo control aliado.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 510;
	this.text_1.setTransform(366,39.8);
var html = createDiv(txt['txt_popup_5_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(366, 40 - 610);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(191.1,366.5,0.932,0.932);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.instance},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,798,354.7);


(lib.popup_zona_4_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_11 = new lib.btn_ampliar();
	this.btn_ampliar_11.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_11, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_11.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_11());
        });
	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_11).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Batalla de Filipinas", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 142;
	this.text.setTransform(762.6,350.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF542E").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(764.1,366.5,0.89,0.89);

	this.instance = new lib.IMG_p4_03();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.text_1 = new cjs.Text("1944 (octubre-febrero)\n\nEn el área del Pacífico, entre octubre y febrero, japoneses y estadounidenses lucharon durante cuatro meses por el control de Filipinas, ocupadas por Japón dos años antes. Al final, los norteamericanos arrebataron el control del archipiélago a los japoneses. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 507;
	this.text_1.setTransform(362.6,39.8);
var html = createDiv(txt['txt_popup_4_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(764.1,366.5,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.instance},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,792,354.6);


(lib.popup_zona_4_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_10 = new lib.btn_ampliar();
	this.btn_ampliar_10.setTransform(406.6,55.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_10, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_10.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_10());
        });
	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_10).to({_off:true},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Liberación de París", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 140;
	this.text.setTransform(596.3,350.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF542E").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(598.7,366.5,0.89,0.89);

	this.text_1 = new cjs.Text("1944 (agosto)\n\nLos grupos de la resistencia francesa, aprovechando el avance aliado y las derrotas alemanas, se levantan contra los nazis en París el 19 de agosto. El 25 de agosto, De Gaulle y las tropas aliadas entraron en París y Francia quedó liberada. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 411;
	this.text_1.setTransform(466,39.8);
var html = createDiv(txt['txt_popup_4_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(466, 40 - 610);

	this.instance = new lib.IMG_p4_02();
	this.instance.setTransform(242,168.9,1,1,0,0,0,123,128.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(598.7,366.5,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.text_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82.9,39.8,797.6,354.8);


(lib.popup_zona_4_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.text = new cjs.Text("Desembarco de Normandía", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 140;
	this.text.setTransform(411.9,350.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF542E").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(415.2,366.5,0.89,0.89);

	this.btn_ampliar_09 = new lib.btn_ampliar();
	this.btn_ampliar_09.setTransform(413.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_09, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_09.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_09());
        });
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(415.2,366.5,0.918,0.918);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.btn_ampliar_09},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.txt_popup_4_01 = new cjs.Text("1944 (junio)\n\nEl 6 de junio, conocido como el día D, comenzó la operación Overlord. Las tropas aliadas, bajo el mando del general Eisenhower, desembarcaron en las costas francesas de Normandía. Con ello se abría un segundo frente a los alemanes.", "bold 20px Verdana");
	this.txt_popup_4_01.lineHeight = 22;
	this.txt_popup_4_01.lineWidth = 386;
	this.txt_popup_4_01.setTransform(473,39.8);
  var html = createDiv(txt['txt_popup_4_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_4_01 = new cjs.DOMElement(html);
        this.txt_popup_4_01.setTransform(473, 40 - 610);

	this.instance = new lib.IMG_p4_01();
	this.instance.setTransform(249,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup_4_01}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,781,354.3);


(lib.popup_zona_3_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_08 = new lib.btn_ampliar();
	this.btn_ampliar_08.setTransform(415.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_08, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_08.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_08());
        });
	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_08).to({_off:true},1).wait(1));

	// FonsBlanc
	this.text = new cjs.Text("1943 (noviembre-diciembre)\n\nEntre el 28 de noviembre y el 1 de diciembre tuvo lugar la conferencia de Teherán. Churchill, Stalin y Roosevelt acordaron realizar un desembarco aliado en el norte de Francia y continuar con la presión soviética en el este. ", "bold 20px Verdana");
	this.text.lineHeight = 22;
	this.text.lineWidth = 394;
	this.text.setTransform(473,39.8);
  var html = createDiv(txt['txt_popup_3_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text = new cjs.DOMElement(html);
        this.text.setTransform(473, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("Conferencia de Teherán", "15px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 138;
	this.text_1.setTransform(792.6,350);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF542E").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(794.8,366.5,0.89,0.89);

	this.instance = new lib.IMG_p3_02();
	this.instance.setTransform(249,168.9,1,1,0,0,0,123,128.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(794.8,366.5,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,789,354.4);


(lib.popup_zona_3_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_07 = new lib.btn_ampliar();
	this.btn_ampliar_07.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_07, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_07.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_07());
        });
	this.instance = new lib.IMG_p3_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_07}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Batalla de Stalingrado", "15px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 140;
	this.text.setTransform(373.3,349.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56A381").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(375.6,366.5,0.89,0.89);

	this.text_1 = new cjs.Text("1942-1943\n\nEn el invierno de 1942-1943, las tropas alemanas quedaron cercadas en Stalingrado (actual Volgogrado) por las tropas soviéticas. Los alemanes, incapaces de romper el cerco, fueron derrotados en febrero. La batalla de Stalingrado marcó un punto de inflexión en el avance aliado hacia la victoria.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 534;
	this.text_1.setTransform(367,39.8);
  var html = createDiv(txt['txt_popup_3_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(367, 40 - 610);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(375.6,366.5,0.927,0.927);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,823,354.6);


(lib.popup_zona_2_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.text = new cjs.Text("Ataque japonés a Pearl Harbor", "16px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 167;
	this.text.setTransform(818.7,349.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F846B").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(820.9,367.3,1.068,0.89);

	this.btn_ampliar_06 = new lib.btn_ampliar();
	this.btn_ampliar_06.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_06, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_06.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_06());
        });
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(820.9,367.3,1.11,0.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.btn_ampliar_06},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("1941 (diciembre)\n\nEl 7 de diciembre, submarinos y aviones nipones destruyeron el grueso de la flota norteamericana concentrada en la base naval de Pearl Harbor (Hawai). En respuesta, el Congreso de EUA declaró la guerra a Japón y, poco después, a Alemania e Italia.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 477;
	this.text_1.setTransform(362.6,39.8);
  var html = createDiv(txt['txt_popup_2_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.instance = new lib.IMG_p2_02();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,827.8,355.4);


(lib.popup_zona_2_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.btn_ampliar_05 = new lib.btn_ampliar();
	this.btn_ampliar_05.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_05, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_05.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_05());
        });
	this.instance = new lib.IMG_p2_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_05}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text = new cjs.Text("Invasión nazi \nde la URSS", "16px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 138;
	this.text.setTransform(468.7,349.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F846B").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(470.3,367.3,0.89,0.89);

	this.text_1 = new cjs.Text("1941 (junio)\n\nEl 22 de junio, Alemania puso en marcha la Operación Barbarroja. Sin declaración de guerra previa, e incumpliendo el pacto germano-soviético (1939), Hitler ordenó la invasión de la URSS.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 477;
	this.text_1.setTransform(362.6,39.8);
  var html = createDiv(txt['txt_popup_2_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(470.4,367.4,0.932,0.932);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,761.5,355.6);


(lib.popup_zona_1_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.text = new cjs.Text("Pacto Tripartito", "16px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 138;
	this.text.setTransform(838,348.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F846B").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(839.8,367.3,0.89,0.89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(839.9,367.4,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

	// PopUp
	this.btn_ampliar_04 = new lib.btn_ampliar();
	this.btn_ampliar_04.setTransform(247.6,50.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_04, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_04.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_04());
        });
	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_04).to({_off:true},1).wait(1));

	// MapaFons
	this.instance = new lib.Banderas_MC();
	this.instance.setTransform(174.5,169,0.358,0.358,0,0,0,0.7,0.3);

	this.text_1 = new cjs.Text("1940 (septiembre)\n\nEl 27 de septiembre de 1940, Alemania, Italia y Japón firmaron un pacto de ayuda mutua con el objetivo de conseguir un nuevo orden en Europa y Asia oriental.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 596;
	this.text_1.setTransform(289,39.8);
  var html = createDiv(txt['txt_popup_1_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(289, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110,39.8,803.8,355.3);


(lib.popup_zona_1_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.text = new cjs.Text("Batalla de Inglaterra", "16px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 138;
	this.text.setTransform(681.7,348.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F846B").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(683.9,367.3,0.89,0.89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(683.9,367.3,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

	// PopUp
	this.btn_ampliar_03 = new lib.btn_ampliar();
	this.btn_ampliar_03.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_03, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_03.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_03());
        });
	this.instance = new lib.IMG_p1_03();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_ampliar_03}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("1940 (agosto-octubre)\n\nEntre agosto y octubre de 1940 tuvo lugar la batalla de Inglaterra. Las fuerzas aéreas de la RAF británica y la Luftwaffe alemana se enfrentaron en los cielos del Reino Unido. A pesar de los continuos ataques alemanes, los británicos lograron resistir. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 510;
	this.text_1.setTransform(362.6,39.8);
  var html = createDiv(txt['txt_popup_1_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,795,355.3);


(lib.popup_zona_1_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// As3
	this.text = new cjs.Text("Invasión de Francia", "16px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 137;
	this.text.setTransform(525.4,347.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F846B").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(527.3,366.3,0.89,0.89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(527.3,366.3,0.936,0.936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

	// PopUp
	this.btn_ampliar_02 = new lib.btn_ampliar();
	this.btn_ampliar_02.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_02, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_02.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_02());
        });
	this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_02).to({_off:true},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("1940 (mayo-junio)\n\nEntre el 10 de mayo y el 24 de junio, los ejércitos alemanes emprendieron la conquista de Europa occidental. En mayo cayeron los Países Bajos y Bélgica, y en junio, Francia, que quedó dividida en una zona ocupada (norte) y otra bajo el régimen fascista de Vichy.", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 540;
	this.text_1.setTransform(362.6,39.8);
  var html = createDiv(txt['txt_popup_1_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.instance = new lib.IMG_p1_02();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,824.7,354.7);


(lib.popup_zona_1_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PopUp
	this.text = new cjs.Text("Inicio de la Segunda Guerra Mundial", "16px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 202;
	this.text.setTransform(262.4,349.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F846B").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);
	this.shape.setTransform(265.5,367.3,1.244,0.89);

	this.btn_ampliar_01 = new lib.btn_ampliar();
	this.btn_ampliar_01.setTransform(305.6,59.3,0.8,0.8);
	new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
 this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_01());
        });
	this.instance = new lib.IMG_p1_01();
	this.instance.setTransform(205,168.9,1,1,0,0,0,123,128.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").rr(-80.15,-30,160.3,60,6);
	this.shape_1.setTransform(265.5,367.3,1.267,0.907);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.btn_ampliar_01},{t:this.shape},{t:this.text}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.text_1 = new cjs.Text("1939 (septiembre)\n\nEl 3 de septiembre de 1939, tras la entrada de las tropas alemanas en Polonia, el Reino Unido y Francia declararon la guerra al III Reich. Había comenzado la Segunda Guerra Mundial. ", "bold 20px Verdana");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 540;
	this.text_1.setTransform(362.6,39.8);
  var html = createDiv(txt['txt_popup_1_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.text_1 = new cjs.DOMElement(html);
        this.text_1.setTransform(362, 40 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,39.8,824.7,354.8);


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
	this.text = new cjs.Text("Bomba de Hiroshima.", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 236;
	this.text.setTransform(288,536);

	this.instance = new lib._000LBV01_OPT();
	this.instance.setTransform(290.5,45.4,0.961,0.961);

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
            putStage(new lib.frame6(3));
        });

	// Imatge
	this.text = new cjs.Text("Un soldado ruso izando la bandera soviética en el Reichstag (Berlín, abril de 1945).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 548;
	this.text.setTransform(122,530);

	this.instance = new lib._0009DZ01_OPT();
	this.instance.setTransform(123.3,44.4,0.95,0.95);

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
            putStage(new lib.frame6(2));
        });

	// Imatge
	this.text = new cjs.Text("Bandera de la ONU.", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 690;
	this.text.setTransform(475,517);

	this.instance = new lib._0016X201_ok();
	this.instance.setTransform(129.2,45.3);

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
            putStage(new lib.frame6(1));
        });

	// Imatge
	this.text = new cjs.Text("Churchill, Roosevelt y Stalin durante la conferencia de Yalta (1945).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 348;
	this.text.setTransform(288.5,539);

	this.instance = new lib._0009TD01();
	this.instance.setTransform(289.8,44.6,0.635,0.635);

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
            putStage(new lib.frame5(3));
        });

	// Imatge
	this.text = new cjs.Text("Soldados japoneses celebrando la captura de las islas Batan (Filipinas, 31 de diciembre de 1942).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 447;
	this.text.setTransform(288.5,539);

	this.instance = new lib._002C7X01_OPT();
	this.instance.setTransform(289.8,44.4,0.971,0.971);

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
            putStage(new lib.frame5(2));
        });

	// Imatge
	this.text = new cjs.Text("Charles De Gaulle en el arco del triunfo durante la celebración de la victoria de Francia y de los aliados sobre la Alemania nazi (París, 8 de mayo de 1945).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 716;
	this.text.setTransform(152.5,521);

	this.instance = new lib._002C3K01_OPT();
	this.instance.setTransform(152.5,44.4,0.934,0.934);

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
            putStage(new lib.frame5(1));
        });

	// Imatge
	this.text = new cjs.Text("Divisiones americanas desembarcando en las playas de Normandía (6 de junio de 1944).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 624;
	this.text.setTransform(163.8,543);

	this.instance = new lib._0009XI01_OPT();
	this.instance.setTransform(165.8,44.4,0.976,0.976);

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
            putStage(new lib.frame4(2));
        });

	// Imatge
	this.text = new cjs.Text("Stalin, Roosevelt y Churchill (de izquierda a derecha), durante la conferencia de Teherán (28 de noviembre de 1943).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 708;
	this.text.setTransform(116.3,543);

	this.instance = new lib._000F5O01_OPT();
	this.instance.setTransform(116.3,44.4,0.972,0.972);

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
            putStage(new lib.frame4(1));
        });

	// Imatge
	this.text = new cjs.Text("El general alemán Hermann Hoth en el frente de Stalingrado.", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.setTransform(475.4,562);

	this.instance = new lib._000G8H01();
	this.instance.setTransform(290.8,44.5,0.66,0.66);

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
	this.text = new cjs.Text("Ataque japonés a la base estadounidense de Pearl Harbor (1941).", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.setTransform(452.4,555);

	this.instance = new lib._000K8O01_OPT();
	this.instance.setTransform(153.3,44.4);

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
	this.text = new cjs.Text("Soldados alemanes marchando a través del lodo en la URSS.", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.setTransform(399.1,551);

	this.instance = new lib._002C6801_OPT();
	this.instance.setTransform(124.8,44.4);

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
	this.text = new cjs.Text("Banderas de Alemania, Italia y Japón durante la Segunda Guerra Mundial.", "18px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 676;
	this.text.setTransform(472.9,544);

	this.instance = new lib.Banderas_MC();
	this.instance.setTransform(476.1,289.1,0.71,0.71,0,0,0,-17.3,-15.1);

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
	this.text = new cjs.Text("Catedral de San Pablo durante los bombardeos de Londres (1940).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 614;
	this.text.setTransform(136.8,554);

	this.instance = new lib._002C6101_OPT();
	this.instance.setTransform(136.8,44.4);

	this.instance_1 = new lib.MarcaAgua();
	this.instance_1.setTransform(39,39,0.8,0.8,0,0,0,30,30);

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
	this.text = new cjs.Text("Tropas alemanas en París (junio de 1940).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 552;
	this.text.setTransform(130.5,554);

	this.instance = new lib._0009C701_OPT();
	this.instance.setTransform(130.5,44.4);

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
	this.text = new cjs.Text("Ocupación de Varsovia por las tropas alemanas (1939).", "18px Verdana");
	this.text.lineHeight = 20;
	this.text.lineWidth = 552;
	this.text.setTransform(122.9,554);

	this.instance = new lib._000G8001_OPT();
	this.instance.setTransform(122.9,44.4);

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