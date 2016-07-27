(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
  (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
        titulo1(this, txt['titol']);

        
	this.txt_selecciona = new cjs.Text(txt['txt_selecciona'], "bold 16px Arial");
	this.txt_selecciona.textAlign = "center";
	this.txt_selecciona.lineHeight = 18;
	this.txt_selecciona.lineWidth = 363;
	this.txt_selecciona.setTransform(473.7,542.4);

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

	this.text = new cjs.Text("2012", "bold 16px Arial");
	this.text.lineHeight = 18;
	this.text.lineWidth = 55;
	this.text.setTransform(884.3,500.4);

	this.text_1 = new cjs.Text("2009", "bold 16px Arial");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 55;
	this.text_1.setTransform(710.1,500.4);

	this.text_2 = new cjs.Text("2004", "bold 16px Arial");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 55;
	this.text_2.setTransform(538.3,500.4);

	this.text_3 = new cjs.Text("1999", "bold 16px Arial");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(364.3,500.4);

	this.text_4 = new cjs.Text("1994", "bold 16px Arial");
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(191,500.4);

	this.text_5 = new cjs.Text("1989", "bold 16px Arial");
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 55;
	this.text_5.setTransform(20.9,500.4);

	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(889.9,215);

	this.p_01_tabla_02 = new cjs.Text("Unipolaridad", "bold 14px Verdana");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 16;
	this.p_01_tabla_02.lineWidth = 364;
	this.p_01_tabla_02.setTransform(304.5,378.8);

	this.p_01_hito_04 = new cjs.Text(txt['p_01_hito_04'], "bold 14px Verdana");
	this.p_01_hito_04.textAlign = "right";
	this.p_01_hito_04.lineHeight = 11;
	this.p_01_hito_04.lineWidth = 119;
	this.p_01_hito_04.setTransform(694.1,283.4);
        var html = createDiv(txt['p_p_hito_04'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_04= new cjs.DOMElement(html);
        this.p_01_hito_04.setTransform(694 -135, 283 - 615);


	this.p_01_hito_05 = new cjs.Text(txt['p_01_hito_04'], "bold 14px Verdana");
	this.p_01_hito_05.textAlign = "right";
	this.p_01_hito_05.lineHeight = 11;
	this.p_01_hito_05.lineWidth = 89;
	this.p_01_hito_05.setTransform(802.4,158);
        var html = createDiv(txt['p_p_hito_05'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_05= new cjs.DOMElement(html);
        this.p_01_hito_05.setTransform(802-135 , 158 - 615);


	this.p_01_hito_03 = new cjs.Text(txt['p_01_hito_04'], "bold 14px Verdana");
	this.p_01_hito_03.textAlign = "right";
	this.p_01_hito_03.lineHeight = 11;
	this.p_01_hito_03.lineWidth = 123;
	this.p_01_hito_03.setTransform(445,286.6);
        var html = createDiv(txt['p_p_hito_03'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_03= new cjs.DOMElement(html);
        this.p_01_hito_03.setTransform(445-135 , 286 - 600);


	this.p_01_hito_02 = new cjs.Text(txt['p_01_hito_04'], "bold 14px Verdana");
	this.p_01_hito_02.lineHeight = 11;
	this.p_01_hito_02.lineWidth = 84;
	this.p_01_hito_02.setTransform(177.5,283.4);
        var html = createDiv(txt['p_p_hito_02'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.p_01_hito_02= new cjs.DOMElement(html);
        this.p_01_hito_02.setTransform(177 , 283 - 610);


	this.p_01_hito_01 = new cjs.Text(txt['p_01_hito_04'], "bold 14px Verdana");
	this.p_01_hito_01.lineHeight = 11;
	this.p_01_hito_01.lineWidth = 102;
	this.p_01_hito_01.setTransform(132,159.8);
        var html = createDiv(txt['p_p_hito_01'], "Verdana", "14px", '135px', '10px', "20px", "185px", "left");
        html.style.lineHeight = "110%";
        this.p_01_hito_01= new cjs.DOMElement(html);
        this.p_01_hito_01.setTransform(132 , 159 - 610);


	this.p_01_tabla_04 = new cjs.Text("Crisis global", "bold 14px Verdana");
	this.p_01_tabla_04.textAlign = "center";
	this.p_01_tabla_04.lineHeight = 16;
	this.p_01_tabla_04.lineWidth = 145;
	this.p_01_tabla_04.setTransform(832,396.6);

	this.p_01_tabla_01 = new cjs.Text("Fin de\n\n la G. F.", "bold 14px Verdana");
	this.p_01_tabla_01.textAlign = "center";
	this.p_01_tabla_01.lineHeight = 13;
	this.p_01_tabla_01.lineWidth = 66;
	this.p_01_tabla_01.setTransform(77.5,380.7);

	this.p_01_tabla_05 = new cjs.Text("Globalización", "bold 14px Verdana");
	this.p_01_tabla_05.textAlign = "center";
	this.p_01_tabla_05.lineHeight = 16;
	this.p_01_tabla_05.lineWidth = 637;
	this.p_01_tabla_05.setTransform(434.8,414.8);

	this.p_01_tabla_03 = new cjs.Text("Multipolaridad", "bold 14px Verdana");
	this.p_01_tabla_03.textAlign = "center";
	this.p_01_tabla_03.lineHeight = 16;
	this.p_01_tabla_03.lineWidth = 162;
	this.p_01_tabla_03.setTransform(653.1,378.8);
        var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EAkgAO2IAAqAIMWAAIAAKAgAiXO2IAAqAIMUAAIAAKAgEg7JAO2IAAqAIMWAAIAAKAgEhCRgEcIAAqAIMWAAIAAKAgEA18gE1IAAqAIMWAAIAAKAg");
	mask_1.setTransform(469.7,252.3);

	// Layer 5
	this.instance_1 = new lib.Bitmap36();
	this.instance_1.setTransform(811.2,156.2,0.208,0.208);

	this.instance_2 = new lib.Bitmap33();
	this.instance_2.setTransform(700.9,279.6,0.14,0.139);

	this.instance_3 = new lib.Bitmap28copy();
	this.instance_3.setTransform(452.1,266.3,0.138,0.138);

	this.instance_4 = new lib.Bitmap22copy();
	this.instance_4.setTransform(89,274.8,0.157,0.158);

	this.instance_5 = new lib.Bitmap21copy();
	this.instance_5.setTransform(44.1,144.6,0.208,0.208);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask_1;


	this.instance_6 = new lib.Mapadebits4();
	this.instance_6.setTransform(757.4,336.9);

	this.instance_7 = new lib.Mapadebits3();
	this.instance_7.setTransform(492.7,325.1);

	this.instance_8 = new lib.Mapadebits2();
	this.instance_8.setTransform(106.9,318.6);

	this.instance_9 = new lib.Mapadebits1();
	this.instance_9.setTransform(50.2,195.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(890.8,431.8,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(758.5,431.8,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(493.9,385.4,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(51.2,384.3,1.047,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_4.setTransform(107.8,384.3,1.047,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C398BF").s().p("AlFCRImzAAIAAkhIXxAAIAAEhg");
	this.shape_5.setTransform(834.6,407.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8FBF67").s().p("EgghACNIAAkZMBBDAAAIAAEZg");
	this.shape_6.setTransform(702.5,389.1,1,1.269);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8BB1D8").s().p("A9bCNIAAkZMA63AAAIAAEZg");
	this.shape_7.setTransform(305.9,389.1,1,1.269);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E44E6D").s().p("Al5EfIAAo9ILzAAIAAI9g");
	this.shape_8.setTransform(79.6,407.4,1,1.257);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9754A").s().p("EhD3ACNIAAkZMBv8AAAIGzAAIRAAAIAAEZg");
	this.shape_9.setTransform(476.3,420.5,1,1.63);

	
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


        this.addChild(this.logo, this.titulo,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.p_01_tabla_03,this.p_01_tabla_05,this.p_01_tabla_01,this.p_01_tabla_04,this.p_01_hito_01,this.p_01_hito_02,this.p_01_hito_03,this.p_01_hito_05,this.p_01_hito_04,this.p_01_tabla_02,this.instance,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.btn_01,this.btn_02,this.btn_03,this.btn_04,this.btn_05,this.txt_selecciona,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);

	this.text = new cjs.Text("1990", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(314.3,422.3);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(316.3,431.7,1,1,0,0,0,24.3,11.3);

	this.instance_1 = new lib.Mapadebits8();
	this.instance_1.setTransform(303,396.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AimEFIAAoJIFNAAIAAIJg");
	this.shape.setTransform(19.4,488.7,1.072,1);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.4,491.5,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.9,491.5,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	

	this.p_02_hito_04 = new cjs.Text(txt['p_01_hito_04'], "bold 15px Verdana");
	this.p_02_hito_04.textAlign = "center";
	this.p_02_hito_04.lineHeight = 17;
	this.p_02_hito_04.lineWidth = 137;
	this.p_02_hito_04.setTransform(794.9,354.7+incremento);

	this.p_01_tabla_05 = new cjs.Text("Globalización", "bold 14px Verdana");
	this.p_01_tabla_05.textAlign = "center";
	this.p_01_tabla_05.lineHeight = 14;
	this.p_01_tabla_05.lineWidth = 515;
	this.p_01_tabla_05.setTransform(647.9,503.2+incremento);

	this.p_01_tabla_02 = new cjs.Text("Unipolaridad", "bold 14px Verdana");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 14;
	this.p_01_tabla_02.lineWidth = 509;
	this.p_01_tabla_02.setTransform(647.4,463.6+incremento);

	this.p_02_hito_03 = new cjs.Text(txt['p_01_hito_03'], "bold 15px Verdana");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(574.9,354.7+incremento);

	this.p_01_tabla_01 = new cjs.Text("Fin de la Guerra Fría", "bold 14px Verdana");
	this.p_01_tabla_01.textAlign = "center";
	this.p_01_tabla_01.lineHeight = 14;
	this.p_01_tabla_01.lineWidth = 328;
	this.p_01_tabla_01.setTransform(213.7,483.9);

	this.p_02_hito_02 = new cjs.Text("Acuerdos de \nDayton", "bold 15px Verdana");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(358.8,354.7+incremento);

	this.p_02_hito_01 = new cjs.Text("Caída del muro de Berlín", "bold 15px Verdana");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(139.6,355.4+incremento);

	

 if (boton == 1)
            this.mc_boto_01 = new lib.mc_Fin("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Fin();

        this.mc_boto_01.setTransform(141.3,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Fin(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Fin("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Fin();
        this.mc_boto_02.setTransform(360.8,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Fin(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Fin("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Fin();
        this.mc_boto_03.setTransform(576.8,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Fin(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Fin("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Fin();
        this.mc_boto_04.setTransform(796.8,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Fin(), 3);
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


	this.instance_2 = new lib.Mapadebits6();
	this.instance_2.setTransform(46,391.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(390,482.7,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(316.1,482.7,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(46.6,482.7,1.047,1);

	this.text_1 = new cjs.Text("1991", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(475.7,422.3);

	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(477.7,431.7,1,1,0,0,0,24.3,11.3);

	this.instance_4 = new lib.Mapadebits9();
	this.instance_4.setTransform(389,396.5);

	this.text_2 = new cjs.Text("1994", "bold 18px Verdana");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 58;
	this.text_2.setTransform(884,419.9);

	this.text_3 = new cjs.Text("1989", "bold 18px Verdana");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(12.9,419.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_4.setTransform(475.5,456.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E44E6D").s().p("A7NFtIgDAAIAArZMA2hAAAIAAFsIgDAAIAAFtg");
	this.shape_5.setTransform(215.2,494);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8BB1D8").s().p("EAolAFtIAAhrIAAgFIAAiBIACAAIAADxgEAolAABMhRLAAAIAAltMBRNAAAIAAD9IAAAEIAABsg");
	this.shape_6.setTransform(649.8,494);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9754A").s().p("EgonAC3IAAgCIAAlrIAEAAMBRLAAAIAAB8IAAB/IAAAEIAABsIAAACg");
	this.shape_7.setTransform(649.5,512.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("EBDzAAAIAAAAIADAAIACAAIAAAAgEhD3AAAIAAAAMA2cAAAIAAAAg");
	this.shape_8.setTransform(475.5,530.7);
        
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.text_3,this.text_2,this.instance_4,this.instance_3,this.text_1,this.shape_3,this.shape_2,this.shape_1,this.instance_2,this.mc_boto_02,this.mc_boto_01,this.mc_boto_03,this.mc_boto_04,this.p_02_hito_01,this.p_02_hito_02,this.p_01_tabla_01,this.p_02_hito_03,this.p_01_tabla_02,this.p_01_tabla_05,this.p_02_hito_04,this.btn_zona_1_01,this.btn_zona_1_02,this.btn_zona_1_03,this.btn_zona_1_04,this.btn_next,this.btn_prev,this.shape,this.instance_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.4,491.5,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.9,491.5,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.p_02_hito_04 = new cjs.Text(txt['p_02_hito_04'], "bold 15px Verdana");
	this.p_02_hito_04.textAlign = "center";
	this.p_02_hito_04.lineHeight = 17;
	this.p_02_hito_04.lineWidth = 137;
	this.p_02_hito_04.setTransform(734.2,354.7+incremento);

	this.p_01_tabla_05 = new cjs.Text("Globalización", "bold 14px Verdana");
	this.p_01_tabla_05.textAlign = "center";
	this.p_01_tabla_05.lineHeight = 14;
	this.p_01_tabla_05.lineWidth = 857;
	this.p_01_tabla_05.setTransform(473.3,502.9+incremento);

	this.p_01_tabla_02 = new cjs.Text("Unipolaridad", "bold 14px Verdana");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 14;
	this.p_01_tabla_02.lineWidth = 858;
	this.p_01_tabla_02.setTransform(472.8,466.4+incremento);

	this.p_02_hito_03 = new cjs.Text(txt['p_02_hito_03'], "bold 15px Verdana");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(524.6,354.7+incremento);

	this.p_02_hito_02 = new cjs.Text('Acuerdos de \nDayton', "bold 15px Verdana");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(319.8,354.7+incremento);

	this.p_02_hito_01 = new cjs.Text("Nelson Mandela", "bold 15px Verdana");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(114.5,364.7+incremento);

	

 if (boton == 1)
            this.mc_boto_01 = new lib.mc_Uni("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Uni();

        this.mc_boto_01.setTransform(116.5,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Uni(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Uni("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Uni();
        this.mc_boto_02.setTransform(321.8,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Uni(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Uni("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Uni();
        this.mc_boto_03.setTransform(526.6,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Uni(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Uni("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Uni();
        this.mc_boto_04.setTransform(736.2,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Uni(), 3);
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


	this.instance = new lib.Mapadebits13();
	this.instance.setTransform(735.2,393.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(736.5,470.5,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(388.1,470.5,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(214.4,470.5,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_3.setTransform(55.5,470.5,1.047,1);

	this.text = new cjs.Text("1996", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(461.1,422.3);

	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(463.2,431.7,1,1,0,0,0,24.3,11.3);

	this.text_1 = new cjs.Text("1995", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(267.9,422.3);

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(270,431.7,1,1,0,0,0,24.3,11.3);

	this.text_2 = new cjs.Text("1998", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(733.7,422.3);

	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(735.7,433.8,1,0.818,0,0,0,24.3,11.3);

	this.text_3 = new cjs.Text("1999", "bold 18px Verdana");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 58;
	this.text_3.setTransform(883,419.9);

	this.text_4 = new cjs.Text("1994", "bold 18px Verdana");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(14.9,419.9);

	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(43.3,431.7,1.096,1,0,0,0,24.3,11.3);

	this.instance_5 = new lib.Mapadebits12();
	this.instance_5.setTransform(387.8,396.5);

	this.instance_6 = new lib.Mapadebits11();
	this.instance_6.setTransform(214.1,396.5);

	this.instance_7 = new lib.Mapadebits10();
	this.instance_7.setTransform(40.2,396.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_4.setTransform(475.5,456.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8BB1D8").s().p("EhD+AFwIAAlvIAFAAIAAlrIALAAIAALagEhDnAACIgFAAIAAi4IAFAAIAAi0IAAgFMCHmAAAIAACAIAAACIAAA4IgGAAIAAB/IAAACIAAAMIAAAqg");
	this.shape_5.setTransform(474.6,493.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8FBF67").s().p("EiWHAC3IAAhuIAAgEIAAj7MC+aAAAIABAAMBt0AAAIAADvIgBAAMhtzAAAIAAAAIAAB+g");
	this.shape_6.setTransform(2497.8,475.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C398BF").s().p("A3jB8I/VAAIAAj3MBtxAAAIAAD3g");
	this.shape_7.setTransform(3107.2,494);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9754A").s().p("EhD1AC5IAAgEIAAi1IAFAAIAAi4MCHhAAAIAFAAIAACAIAAACIAAA2IgFAAIAABPIAAAyIAAAMIAAAZIAAAPIAAAEg");
	this.shape_8.setTransform(475.5,512.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("EBDxAFuIAAgPIAAgaIAAgLIAAgyIAHAAIAABmgEhD3AFuIAAgBIAAraIAHAAIAAC0IgFAAIAAC5IAAC4IAAC2g");
	this.shape_9.setTransform(475.5,494.1);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame2());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.anterior,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.text_4,this.text_3,this.instance_3,this.text_2,this.instance_2,this.text_1,this.instance_1,this.text,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance,this.mc_boto_02,this.mc_boto_01,this.mc_boto_03,this.mc_boto_04,this.p_02_hito_01,this.p_02_hito_02,this.p_02_hito_03,this.p_01_tabla_02,this.p_01_tabla_05,this.p_02_hito_04,this.btn_zona_2_01,this.btn_zona_2_02,this.btn_zona_2_03,this.btn_zona_2_04,this.btn_next,this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame4 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        // Capa 1
this.text = new cjs.Text("2003", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(733.2,422.3);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(735.3,433.9,1,0.804,0,0,0,24.3,11.3);

	this.text_1 = new cjs.Text("2000", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(212.3,422.3);

	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(214.4,433.9,1,0.804,0,0,0,24.3,11.3);

	this.text_2 = new cjs.Text("2001", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(386,422.3);

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(388.1,433.9,1,0.804,0,0,0,24.3,11.3);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(24.5,491.5,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924,491.5,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	

	this.p_01_tabla_02 = new cjs.Text("Unipolaridad", "bold 14px Verdana");
	this.p_01_tabla_02.textAlign = "center";
	this.p_01_tabla_02.lineHeight = 14;
	this.p_01_tabla_02.lineWidth = 167;
	this.p_01_tabla_02.setTransform(126.3,465.6+incremento);

	this.p_02_hito_04 = new cjs.Text(txt['p_03_hito_04'], "bold 15px Verdana");
	this.p_02_hito_04.textAlign = "center";
	this.p_02_hito_04.lineHeight = 17;
	this.p_02_hito_04.lineWidth = 137;
	this.p_02_hito_04.setTransform(733.1,366.7+incremento);

	this.p_01_tabla_05 = new cjs.Text("Globalización", "bold 14px Verdana");
	this.p_01_tabla_05.textAlign = "center";
	this.p_01_tabla_05.lineHeight = 14;
	this.p_01_tabla_05.lineWidth = 857;
	this.p_01_tabla_05.setTransform(472.4,502.6+incremento);

	this.p_01_tabla_03 = new cjs.Text("Multipolaridad", "bold 14px Verdana");
	this.p_01_tabla_03.textAlign = "center";
	this.p_01_tabla_03.lineHeight = 16;
	this.p_01_tabla_03.lineWidth = 510;
	this.p_01_tabla_03.setTransform(646,465.6+incremento);

	this.p_02_hito_03 = new cjs.Text(txt['p_03_hito_03'], "bold 15px Verdana");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(559.3,354.7+incremento);

	this.p_02_hito_02 = new cjs.Text(txt['p_03_hito_02'], "bold 15px Verdana");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(385.9,366.7+incremento);

	this.p_02_hito_01 = new cjs.Text('Segunda \nintifada', "bold 15px Verdana");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(213.1,354.7+incremento);

	this.mc_boto_04 = new lib.mc_Globalizacion();
	this.mc_boto_04.setTransform(735.1,376.2,0.89,0.89);

	this.mc_boto_03 = new lib.mc_Globalizacion();
	this.mc_boto_03.setTransform(561.3,376.2,0.89,0.89);

	this.mc_boto_01 = new lib.mc_Uni();
	this.mc_boto_01.setTransform(214.8,376.2,0.89,0.89);

	this.mc_boto_02 = new lib.mc_Globalizacion();
	this.mc_boto_02.setTransform(387.9,376.2,0.89,0.89);

 if (boton == 1)
            this.mc_boto_01 = new lib.mc_Uni("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Uni();

        this.mc_boto_01.setTransform(214.8,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Uni(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Globalizacion("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Globalizacion();
        this.mc_boto_02.setTransform(387.9,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Globalizacion(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Globalizacion("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Globalizacion();
        this.mc_boto_03.setTransform(561.3,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Globalizacion(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Globalizacion("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Globalizacion();
        this.mc_boto_04.setTransform(735.1,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Globalizacion(), 3);
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
        if (boton != 4)
            this.mc_boto_04.on("click", function (evt) {
                putStage(new lib.frame4(4));
            });

	this.instance_3 = new lib.Mapadebits16();
	this.instance_3.setTransform(734.3,398);

	this.instance_4 = new lib.Mapadebits15();
	this.instance_4.setTransform(387,396.5);

	this.instance_5 = new lib.Mapadebits14();
	this.instance_5.setTransform(213.3,394);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(388.5,520,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(214.3,470.9,1.047,1);

	this.text_3 = new cjs.Text("2004", "bold 18px Verdana");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 58;
	this.text_3.setTransform(882.1,419.9);

	this.text_4 = new cjs.Text("1999", "bold 18px Verdana");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(14,419.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(735.6,520,1.047,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_3.setTransform(474.6,456.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8BB1D8").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_4.setTransform(290,475.8,0.575,1.295);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8FBF67").s().p("EhfNAC3IAAltMC+bAAAIAAFtg");
	this.shape_5.setTransform(648.1,475.8,0.427,1,0,0,0,-0.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8FBF67").s().p("Eg25AB4IAAjvMBtzAAAIAADvg");
	this.shape_6.setTransform(1958.3,469.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C398BF").s().p("Eg24AB8IAAj3MBtxAAAIAAD3g");
	this.shape_7.setTransform(1958.3,494);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9754A").s().p("EkR/AB8IAAj3MIj/AAAIAAD3g");
	this.shape_8.setTransform(474.7,512.1,0.247,1.486);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("EhD3AFuIAArbMCHvAAAIAALbg");
	this.shape_9.setTransform(474.6,494.1);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.text_4,this.text_3,this.shape_1,this.shape,this.instance_5,this.instance_4,this.instance_3,this.mc_boto_02,this.mc_boto_01,this.mc_boto_03,this.mc_boto_04,this.p_02_hito_01,this.p_02_hito_02,this.p_02_hito_03,this.p_01_tabla_03,this.p_01_tabla_05,this.p_02_hito_04,this.p_01_tabla_02,this.btn_zona_3_01,this.btn_zona_3_02,this.btn_zona_3_03,this.btn_zona_3_04,this.btn_next,this.btn_prev,this.instance_2,this.text_2,this.instance_1,this.text_1,this.instance,this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame5 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.5,491.5,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(925,491.5,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);



	this.p_02_hito_03 = new cjs.Text(txt['p_04_hito_03'], "bold 15px Verdana");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(638.2,354.7+incremento);

	this.p_01_tabla_04 = new cjs.Text("Crisis global", "bold 14px Verdana");
	this.p_01_tabla_04.textAlign = "center";
	this.p_01_tabla_04.lineHeight = 14;
	this.p_01_tabla_04.lineWidth = 165;
	this.p_01_tabla_04.setTransform(820.9,483.7+incremento);

	this.p_01_tabla_05 = new cjs.Text("Globalización", "bold 14px Verdana");
	this.p_01_tabla_05.textAlign = "center";
	this.p_01_tabla_05.lineHeight = 14;
	this.p_01_tabla_05.lineWidth = 857;
	this.p_01_tabla_05.setTransform(473.4,502.5+incremento);

	this.p_01_tabla_03 = new cjs.Text("Multipolaridad", "bold 14px Verdana");
	this.p_01_tabla_03.textAlign = "center";
	this.p_01_tabla_03.lineHeight = 16;
	this.p_01_tabla_03.lineWidth = 857;
	this.p_01_tabla_03.setTransform(473.4,465.6+incremento);

	this.p_02_hito_04 = new cjs.Text(txt['p_04_hito_04'], "bold 15px Verdana");
	this.p_02_hito_04.textAlign = "center";
	this.p_02_hito_04.lineHeight = 17;
	this.p_02_hito_04.lineWidth = 137;
	this.p_02_hito_04.setTransform(840.6,354.7+incremento);

	this.p_02_hito_02 = new cjs.Text("Sarkozy, \npresidente", "bold 15px Verdana");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(424.3,355.6+incremento);

	this.p_02_hito_01 = new cjs.Text(txt['p_04_hito_01'], "bold 15px Verdana");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 151;
	this.p_02_hito_01.setTransform(213.5,354.3+incremento);

	

 if (boton == 1)
            this.mc_boto_01 = new lib.mc_Multi("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Multi();

        this.mc_boto_01.setTransform(215.5,376.2,0.967,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Multi(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Multi("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Multi();
        this.mc_boto_02.setTransform(426.3,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Multi(), 3);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Globalizacion("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Globalizacion();
        this.mc_boto_03.setTransform(640.2,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Globalizacion(), 3);
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Globalizacion("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Globalizacion();
        this.mc_boto_04.setTransform(842.6,376.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Globalizacion(), 3);
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

	this.text = new cjs.Text("2007", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(560.3,422.3);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(562.4,431.7,1,1,0,0,0,24.3,11.3);

	this.instance_1 = new lib.Mapadebits18();
	this.instance_1.setTransform(428.9,397.6);

	this.text_1 = new cjs.Text("2005", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(213.5,422.3);

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(215.6,434.1,1,0.789,0,0,0,24.3,11.3);

	this.instance_3 = new lib.Mapadebits17();
	this.instance_3.setTransform(214.5,392.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape.setTransform(736.4,519.2,1.047,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(562.5,469.2,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(215.2,470.3,1.047,1);

	this.text_2 = new cjs.Text("2008", "bold 16px Verdana");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 49;
	this.text_2.setTransform(733.8,422.3);

	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(735.9,431.7,1,1,0,0,0,24.3,11.3);

	this.instance_5 = new lib.Mapadebits19();
	this.instance_5.setTransform(639.7,397.6);

	this.text_3 = new cjs.Text("2009", "bold 18px Verdana");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 58;
	this.text_3.setTransform(883,419.9);

	this.text_4 = new cjs.Text("2004", "bold 18px Verdana");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 55;
	this.text_4.setTransform(15,419.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_3.setTransform(475.5,456.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C398BF").s().p("Eg24AB8IAAj3MBtxAAAIAAD3g");
	this.shape_4.setTransform(822.5,494,0.246,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8FBF67").s().p("EhfNAC3IAAltMC+bAAAIAAFtg");
	this.shape_5.setTransform(475,475.8,0.712,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9754A").s().p("Ek5PAB4IAAjvMJyeAAAIAADvg");
	this.shape_6.setTransform(475,512.3,0.216,1.515);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1A171B").ss(2,1,1).p("ANkgpIAABTAtkAqIAAhG");
	this.shape_7.setTransform(649.2,430);

        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame6());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.logo, this.titulo, this.home, this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.text_4,this.text_3,this.instance_5,this.instance_4,this.text_2,this.shape_2,this.shape_1,this.shape,this.instance_3,this.instance_2,this.text_1,this.instance_1,this.instance,this.text,this.mc_boto_02,this.mc_boto_01,this.mc_boto_04,this.mc_boto_03,this.p_02_hito_01,this.p_02_hito_02,this.p_02_hito_04,this.p_01_tabla_03,this.p_01_tabla_05,this.p_01_tabla_04,this.p_02_hito_03,this.btn_zona_4_01,this.btn_zona_4_02,this.btn_zona_4_04,this.btn_zona_4_03,this.btn_next,this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame6 = function (boton) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);

this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AimEFIAAoJIFNAAIAAIJg");
	this.shape.setTransform(931.8,468.7,1.072,1);

	this.btn_prev = new lib.Boto_Navegacio();
	this.btn_prev.setTransform(25.4,468.7,0.862,1.395,0,0,180);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);

	this.btn_next = new lib.Boto_Navegacio();
	this.btn_next.setTransform(924.9,468.7,0.862,1.395);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);


	this.p_01_tabla_04 = new cjs.Text("Crisis global", "bold 14px Verdana");
	this.p_01_tabla_04.textAlign = "center";
	this.p_01_tabla_04.lineHeight = 14;
	this.p_01_tabla_04.lineWidth = 859;
	this.p_01_tabla_04.setTransform(473.9,463.9+incremento);

	this.p_01_tabla_05 = new cjs.Text("Globalización", "bold 14px Verdana");
	this.p_01_tabla_05.textAlign = "center";
	this.p_01_tabla_05.lineHeight = 14;
	this.p_01_tabla_05.lineWidth = 857;
	this.p_01_tabla_05.setTransform(473.3,489.2+incremento);

	this.p_01_tabla_03 = new cjs.Text("Multipolaridad", "bold 14px Verdana");
	this.p_01_tabla_03.textAlign = "center";
	this.p_01_tabla_03.lineHeight = 16;
	this.p_01_tabla_03.lineWidth = 857;
	this.p_01_tabla_03.setTransform(473.3,438.8+incremento);

	this.p_02_hito_03 = new cjs.Text('Muerte de \nOsama Bin \nLaden', "bold 15px Verdana");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(717.6,329.7+incremento);

	this.p_02_hito_02 = new cjs.Text('Acuerdos de \nDayton', "bold 15px Verdana");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(519.5,334.7+incremento);

	this.p_02_hito_01 = new cjs.Text(txt['p_05_hito_01'], "bold 15px Verdana");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(328.8,334.7+incremento);


    if (boton == 1)
            this.mc_boto_01 = new lib.mc_Crisis("single", 1);
        else
            this.mc_boto_01 = new lib.mc_Crisis();

        this.mc_boto_01.setTransform(330.5,356.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_Crisis(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Globalizacion("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Globalizacion();
        this.mc_boto_02.setTransform(521.4,356.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Globalizacion(), 3);

        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Globalizacion("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Globalizacion();
        this.mc_boto_03.setTransform(719.6,356.2,0.89,0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Globalizacion(), 3);


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
        
	this.text = new cjs.Text("2010", "bold 16px Verdana");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 49;
	this.text.setTransform(328.1,402.3);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(330.1,411.7,1,1,0,0,0,24.3,11.3);

	this.instance_1 = new lib.Mapadebits20();
	this.instance_1.setTransform(329.9,335.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_1.setTransform(620.7,499.9,1.047,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
	this.shape_2.setTransform(330.5,475.4,1.047,1);

	this.text_1 = new cjs.Text("2011", "bold 16px Verdana");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 49;
	this.text_1.setTransform(618.6,402.3);

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(620.6,411.7,1,1,0,0,0,24.3,11.3);

	this.instance_3 = new lib.Mapadebits21();
	this.instance_3.setTransform(517.1,372.7);

	this.text_2 = new cjs.Text("2012", "bold 18px Verdana");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 58;
	this.text_2.setTransform(883,399.9);

	this.text_3 = new cjs.Text("2009", "bold 18px Verdana");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(14.9,399.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
	this.shape_3.setTransform(475.5,436.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C398BF").s().p("EhDzAB8IAAj3MCHnAAAIAAD3g");
	this.shape_4.setTransform(475,474);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8FBF67").s().p("EhDyAB4IAAjvMCHlAAAIAADvg");
	this.shape_5.setTransform(475,449.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9754A").s().p("EhDzAB4IAAjvMCHnAAAIAADvg");
	this.shape_6.setTransform(475,498.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1A171B").ss(2,1,1).p("AAAgvIAABf");
	this.shape_7.setTransform(620.7,409);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("EhD3AFuIAArbMCHvAAAIAALbg");
	this.shape_8.setTransform(475.5,474.1);
        
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });


        this.addChild(this.logo, this.titulo, this.home, this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.text_3,this.text_2,this.instance_3,this.instance_2,this.text_1,this.shape_2,this.shape_1,this.instance_1,this.instance,this.text,this.mc_boto_02,this.mc_boto_01,this.mc_boto_03,this.p_02_hito_01,this.p_02_hito_02,this.p_02_hito_03,this.p_01_tabla_03,this.p_01_tabla_05,this.p_01_tabla_04,this.btn_zona_5_01,this.btn_zona_5_02,this.btn_zona_5_03,this.btn_next,this.btn_prev,this.shape);
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
   
   (lib._0000TT401 = function() {
	this.initialize(img._0000TT401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,750);


(lib._000E9M01 = function() {
	this.initialize(img._000E9M01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1134,750);


(lib._000E9M01_ParaAudio = function() {
	this.initialize(img._000E9M01_ParaAudio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,864);


(lib._000XD401 = function() {
	this.initialize(img._000XD401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,953,750);


(lib._0012RG01 = function() {
	this.initialize(img._0012RG01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1038,734);


(lib._0017O101 = function() {
	this.initialize(img._0017O101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,750);


(lib._00189A01 = function() {
	this.initialize(img._00189A01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,555,750);


(lib._001EPS01 = function() {
	this.initialize(img._001EPS01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,514,750);


(lib._001FXA01 = function() {
	this.initialize(img._001FXA01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1061,750);


(lib._001Q7501 = function() {
	this.initialize(img._001Q7501);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1121,750);


(lib._001TC801_Pop = function() {
	this.initialize(img._001TC801_Pop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,531,768);


(lib._1_shutterstock_83242105 = function() {
	this.initialize(img._1_shutterstock_83242105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,750);


(lib._2_shutterstock_72263485 = function() {
	this.initialize(img._2_shutterstock_72263485);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,750);


(lib._3_shutterstock_84357535 = function() {
	this.initialize(img._3_shutterstock_84357535);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1078,750);


(lib._4_DaytonAgreementSENSECOPYRIGHT = function() {
	this.initialize(img._4_DaytonAgreementSENSECOPYRIGHT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1131,750);


(lib._5_shutterstock_779873 = function() {
	this.initialize(img._5_shutterstock_779873);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1218,750);


(lib._6_shutterstock_4234144 = function() {
	this.initialize(img._6_shutterstock_4234144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,521,750);


(lib._7_shutterstock_6505642 = function() {
	this.initialize(img._7_shutterstock_6505642);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,626,750);


(lib._8_shutterstock_25243708 = function() {
	this.initialize(img._8_shutterstock_25243708);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1143,750);


(lib._9_shutterstock_61734760 = function() {
	this.initialize(img._9_shutterstock_61734760);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1091,750);


(lib.Bitmap21copy = function() {
	this.initialize(img.Bitmap21copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,398,389);


(lib.Bitmap22copy = function() {
	this.initialize(img.Bitmap22copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,526,768);


(lib.Bitmap23copy = function() {
	this.initialize(img.Bitmap23copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,718);


(lib.Bitmap24copy = function() {
	this.initialize(img.Bitmap24copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,495);


(lib.Bitmap25copy = function() {
	this.initialize(img.Bitmap25copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,397);


(lib.Bitmap26copy = function() {
	this.initialize(img.Bitmap26copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,472);


(lib.Bitmap27copy = function() {
	this.initialize(img.Bitmap27copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,427);


(lib.Bitmap28copy = function() {
	this.initialize(img.Bitmap28copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,921);


(lib.Bitmap29copy = function() {
	this.initialize(img.Bitmap29copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,528,768);


(lib.Bitmap30copy = function() {
	this.initialize(img.Bitmap30copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,401);


(lib.Bitmap31copy = function() {
	this.initialize(img.Bitmap31copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,864);


(lib.Bitmap32copy = function() {
	this.initialize(img.Bitmap32copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,719);


(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,900);


(lib.Bitmap35 = function() {
	this.initialize(img.Bitmap35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,412);


(lib.Bitmap36 = function() {
	this.initialize(img.Bitmap36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,417);


(lib.Bitmap37 = function() {
	this.initialize(img.Bitmap37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,568,768);


(lib.Bitmap38 = function() {
	this.initialize(img.Bitmap38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,398);


(lib.Bitmap39 = function() {
	this.initialize(img.Bitmap39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,369);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,193);


(lib.Mapadebits10 = function() {
	this.initialize(img.Mapadebits10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,76);


(lib.Mapadebits11 = function() {
	this.initialize(img.Mapadebits11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,76);


(lib.Mapadebits12 = function() {
	this.initialize(img.Mapadebits12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,76);


(lib.Mapadebits13 = function() {
	this.initialize(img.Mapadebits13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,80);


(lib.Mapadebits14 = function() {
	this.initialize(img.Mapadebits14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,79);


(lib.Mapadebits15 = function() {
	this.initialize(img.Mapadebits15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,126);


(lib.Mapadebits16 = function() {
	this.initialize(img.Mapadebits16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,125);


(lib.Mapadebits17 = function() {
	this.initialize(img.Mapadebits17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,80);


(lib.Mapadebits18 = function() {
	this.initialize(img.Mapadebits18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,78);


(lib.Mapadebits19 = function() {
	this.initialize(img.Mapadebits19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,126);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,71);


(lib.Mapadebits20 = function() {
	this.initialize(img.Mapadebits20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,141);


(lib.Mapadebits21 = function() {
	this.initialize(img.Mapadebits21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,129);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,62);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,99);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,221);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.Mapadebits7 = function() {
	this.initialize(img.Mapadebits7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,55);


(lib.Mapadebits8 = function() {
	this.initialize(img.Mapadebits8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,91);


(lib.Mapadebits9 = function() {
	this.initialize(img.Mapadebits9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,411,90);


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


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjxBwIAAjfIHjAAIAADfg");
	this.shape.setTransform(24.3,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,22.5);


(lib.lineatiempo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E44E6D").s().p("Al5EfIAAo9ILzAAIAAI9g");
	this.shape.setTransform(37.8,42.9,1,1.494);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C398BF").s().p("Ar4CSIAAkjIXxAAIAAEjg");
	this.shape_1.setTransform(792.8,42.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8FBF67").s().p("EgghACNIAAkZMBBDAAAIAAEZg");
	this.shape_2.setTransform(660.7,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9754A").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_3.setTransform(434.5,71.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9754A").s().p("Eg7XACSIAAkjMB2vAAAIAAEjg");
	this.shape_4.setTransform(380.1,42.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8BB1D8").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
	this.shape_5.setTransform(434.5,14.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,869,85.9);


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


(lib.mc_Uni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCE8F3").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_Multi = function(mode,startPosition,loop) {
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


(lib.mc_Globalizacion = function(mode,startPosition,loop) {
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


(lib.mc_Fin = function(mode,startPosition,loop) {
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


(lib.mc_Crisis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7D6E6").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C398BF").s("#1D1D1B").rr(-80.15,-30,160.3,60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-29.9,160.3,60);


(lib.mc_fundido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.mc_Fundido_Int();
	this.instance.setTransform(475,304,1,1,0,0,0,475,304);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_zona_5_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.txt_popup = new cjs.Text("2011\n\nEl 2 de mayo, un comando de las fuerzas especiales estadounidenses asaltó la casa en las proximidades de la capital pakistaní en la que se escondía Osama Bin Landen. Los restos del líder de Al-Qaeda, a quién se llevaba persiguiendo desde los atentados del 11 de septiembre de 2001, se en algún punto indeterminado del océano.", "bold 20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 464;
	this.txt_popup.setTransform(433.3,44.4);
  var html = createDiv(txt['txt_popup_5_03'], "Verdana", "20px", '500px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.btn_ampliar_19 = new lib.btn_ampliarneg();
	this.btn_ampliar_19.setTransform(395.9,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_19, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
      this.btn_ampliar_19.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_19());
        });

	this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(717.6,354.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p_02_hito_03},{t:this.btn_ampliar_19},{t:this.txt_popup}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1FAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:243.1,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap37();
	this.instance.setTransform(72.2,-31.5,0.612,0.612);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.2,-31.5,828.8,470.4);


(lib.popup_zona_5_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_18 = new lib.btn_ampliar();
	this.btn_ampliar_18.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_18, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_18.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_18());
        });

	this.p_02_hito_02 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(519.5,354.7);

	this.txt_popup = new cjs.Text("", "20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 418;
	this.txt_popup.setTransform(445.2,44.4);
 var html = createDiv(txt['txt_popup_5_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_02},{t:this.btn_ampliar_18}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap36();
	this.instance.setTransform(48.9,39.2,0.637,0.638);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.9,39.2,826.1,360.8);


(lib.popup_zona_5_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_17 = new lib.btn_ampliarneg();
	this.btn_ampliar_17.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_17, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
      this.btn_ampliar_17.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_17());
        });

	this.p_02_hito_01 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(328.8,354.7);

	this.txt_popup = new cjs.Text("2010-2011\n\nEn el contexto de la crisis económica internacional, Grecia fue uno de los países más afectados. La crisis de confianza en la deuda griega puso en riesgo la estabilidad de la Eurozona, que tuvo que acudir en ayuda de la economía griega. A cambio, el gobierno heleno tuvo que poner en marcha un drástico plan de ajuste.", "20px Verdana");
	this.txt_popup.lineHeight = 20;
	this.txt_popup.lineWidth = 411;
	this.txt_popup.setTransform(445.2,42.3);
 var html = createDiv(txt['txt_popup_5_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_01},{t:this.btn_ampliar_17}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap35();
	this.instance.setTransform(51.2,40,0.66,0.659);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.2,40,808.6,360);


(lib.popup_zona_4_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_16 = new lib.btn_ampliarneg();
	this.btn_ampliar_16.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_16, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
      this.btn_ampliar_16.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_16());
        });

	this.p_02_hito_04 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_04.textAlign = "center";
	this.p_02_hito_04.lineHeight = 17;
	this.p_02_hito_04.lineWidth = 137;
	this.p_02_hito_04.setTransform(840.6,354.7);

	this.txt_popup = new cjs.Text("2008 (noviembre)\n\nEl 4 de noviembre, el candidato demócrata Barack Obama se impuso con una amplia mayoría en las elecciones presidenciales. Obama fue el primer presidente afroamericano de Estados Unidos y alcanzó la victoria gracias a un mensaje de cambio resumido en su lema de campaña: “Yes, we can!”.", "bold 20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 425;
	this.txt_popup.setTransform(445.2,44.4);
 var html = createDiv(txt['txt_popup_4_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_04},{t:this.btn_ampliar_16}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap34();
	this.instance.setTransform(79.8,-11.7,0.582,0.581);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.8,-11.7,833.4,523);


(lib.popup_zona_4_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.txt_popup = new cjs.Text("2008 (septiembre-octubre)\n\nLos créditos de alto riesgo y el estallido de la burbuja inmobiliaria arrastraron a las bolsas y los grandes bancos a una grave recesión mundial. La quiebra del banco de inversión Lehman Brothers (Estados Unidos) en septiembre de 2008, hizo tambalear la economía global, que se vio sumida en una crisis financiera global sin precedentes.", "bold 20px Verdana");
	this.txt_popup.lineHeight = 20;
	this.txt_popup.lineWidth = 448;
	this.txt_popup.setTransform(445.2,41.6);
 var html = createDiv(txt['txt_popup_4_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.btn_ampliar_15 = new lib.btn_ampliarneg();
	this.btn_ampliar_15.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_15, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
      this.btn_ampliar_15.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_15());
        });

	this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(638.2,354.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p_02_hito_03},{t:this.btn_ampliar_15},{t:this.txt_popup}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap33();
	this.instance.setTransform(78.7,14.4,0.587,0.586);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.7,14.4,818.3,385.1);


(lib.popup_zona_4_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_14 = new lib.btn_ampliar();
	this.btn_ampliar_14.setTransform(394.5,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_14, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_14.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_14());
        });

	this.p_02_hito_02 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(424.3,355.6);

	this.txt_popup = new cjs.Text("2007\n\nEl 6 de mayo, en la segunda vuelta de las elecciones presidenciales francesas, Nicolas Sarkozy (centroderecha) se impuso a la socialista, Ségolène Royal. Con un programa basado en el liberalismo económico y un fuerte nacionalismo francés, el 53 % de los votos le convirtieron en presidente de la República francesa.", "bold 20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 456;
	this.txt_popup.setTransform(431.9,44.4);
 var html = createDiv(txt['txt_popup_4_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_02},{t:this.btn_ampliar_14}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6jUtMAAAgpZMA1HAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:241.7,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap32copy();
	this.instance.setTransform(64,13.2,0.587,0.587);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64,13.2,827.8,422.4);


(lib.popup_zona_4_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_13 = new lib.btn_ampliarneg();
	this.btn_ampliar_13.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_13, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
      this.btn_ampliar_13.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_13());
        });

	this.p_02_hito_01 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 151;
	this.p_02_hito_01.setTransform(213.5,354.3);

	this.txt_popup = new cjs.Text("2005\n\nEl 18 de diciembre de 2005, el dirigente indigenista Evo Morales lideró movilizaciones populares que forzaron la convocatoria de elecciones anticipadas.\nA finales de año, su partido fue el más votado. Una vez elegido presidente de Bolivia, llevó a cabo una política de acercamiento a los gobiernos de Cuba y Venezuela.", "bold 20px Verdana");
	this.txt_popup.lineHeight = 20;
	this.txt_popup.lineWidth = 413;
	this.txt_popup.setTransform(445.2,44.4);
 var html = createDiv(txt['txt_popup_4_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_01},{t:this.btn_ampliar_13}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap31copy();
	this.instance.setTransform(79.7,-74.8,0.584,0.585);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.7,-74.8,782.3,505.6);


(lib.popup_zona_3_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_12 = new lib.btn_ampliar();
	this.btn_ampliar_12.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_12, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_12.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_12());
        });

	this.p_02_hito_04 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_04.textAlign = "center";
	this.p_02_hito_04.lineHeight = 17;
	this.p_02_hito_04.lineWidth = 137;
	this.p_02_hito_04.setTransform(734,366.7);

	this.txt_popup = new cjs.Text("", "20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 418;
	this.txt_popup.setTransform(445.2,44.4);
 var html = createDiv(txt['txt_popup_3_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_04},{t:this.btn_ampliar_12}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap30copy();
	this.instance.setTransform(50.5,39.9,0.679,0.678);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.5,39.9,816.9,371.6);


(lib.popup_zona_3_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_11 = new lib.btn_ampliar();
	this.btn_ampliar_11.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_11, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_11.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_11());
        });

	this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(560.2,354.7);

	this.txt_popup = new cjs.Text("", "20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 418;
	this.txt_popup.setTransform(445.2,44.4);
 var html = createDiv(txt['txt_popup_3_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_03},{t:this.btn_ampliar_11}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap29copy();
	this.instance.setTransform(79.9,-22.3,0.661,0.661);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.9,-22.3,787.6,508);


(lib.popup_zona_3_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_10 = new lib.btn_ampliar();
	this.btn_ampliar_10.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_10, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_10.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_10());
        });

	this.p_02_hito_02 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(386.8,366.7);

	this.txt_popup = new cjs.Text("2001 (septiembre)\n\nEl 11 de septiembre se produjeron una serie de ataques terroristas en EUA. Activistas de Al-Qaeda secuestraron cuatro aviones que estrellaron contra las Torres Gemelas (Nueva York) y el Pentágono (Washington). El cuarto avión fue derribado por el ejército de EUA. Aquella mañana murieron más de 3.000 personas.", "bold 20px Verdana");
	this.txt_popup.lineHeight = 20;
	this.txt_popup.lineWidth = 441;
	this.txt_popup.setTransform(445.2,44.4);
 var html = createDiv(txt['txt_popup_3_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_02},{t:this.btn_ampliar_10}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap28copy();
	this.instance.setTransform(80.3,9.1,0.584,0.583);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.3,9.1,809.7,536.8);


(lib.popup_zona_3_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_09 = new lib.btn_ampliar();
	this.btn_ampliar_09.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_09, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_09.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_09());
        });

	this.p_02_hito_01 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(214,354.7);

	this.txt_popup = new cjs.Text("2000\n\nEl 28 de septiembre Ariel Sharon, del partido conservador judío Likud, visitó la Explanada de las Mezquitas en Jerusalén. La acción, considerada una provocación por los palestinos, desencadenó el inicio de la segunda intifada contra la ocupación israelí de Gaza y Cisjordania.", "bold 20px Verdana");
	this.txt_popup.lineHeight = 21;
	this.txt_popup.lineWidth = 426;
	this.txt_popup.setTransform(445.2,44.4);
 var html = createDiv(txt['txt_popup_3_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_01},{t:this.btn_ampliar_09}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap27copy();
	this.instance.setTransform(48.9,39.2,0.637,0.638);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.9,39.2,826.1,360.8);


(lib.popup_zona_2_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.txt_popup = new cjs.Text("1998\n\nEl 10 de abril se firmaron en Stormont (Belfast, Reino Unido), los acuerdos de Viernes Santo para la pacificación de Irlanda del Norte. Entre las medidas acordadas, se estableció la creación de la Asamblea de Irlanda del Norte, el desarme de los grupos armados y la retirada de los efectivos del ejército británico.", "bold 20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 441;
	this.txt_popup.setTransform(436.1,44.4);
 var html = createDiv(txt['txt_popup_2_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(438, 44 - 610);

	this.p_02_hito_04 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_04.textAlign = "center";
	this.p_02_hito_04.lineHeight = 17;
	this.p_02_hito_04.lineWidth = 137;
	this.p_02_hito_04.setTransform(734.2,354.7);

	this.btn_ampliar_08 = new lib.btn_ampliar();
	this.btn_ampliar_08.setTransform(398.7,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_08, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_08.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_08());
        });

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_ampliar_08},{t:this.p_02_hito_04},{t:this.txt_popup}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:245.9,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap26copy();
	this.instance.setTransform(70,37.7,0.584,0.583);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70,37.7,810.7,361.8);


(lib.popup_zona_2_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_07 = new lib.btn_ampliarneg();
	this.btn_ampliar_07.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_07, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
      this.btn_ampliar_07.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_07());
        });

	this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(524.6,354.7);

	this.txt_popup = new cjs.Text("", "20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 418;
	this.txt_popup.setTransform(445.2,44.4);
 var html = createDiv(txt['txt_popup_2_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_03},{t:this.btn_ampliar_07}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap39();
	this.instance.setTransform(32,40,0.735,0.737);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32,40,835.5,359.5);


(lib.popup_zona_2_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_06 = new lib.btn_ampliarneg();
	this.btn_ampliar_06.setTransform(390.3,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_06, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
      this.btn_ampliar_06.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_06());
        });

	this.p_02_hito_02 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(319.8,354.7);

	this.txt_popup = new cjs.Text("1995\n\nEl 21 de noviembre se firmaron los acuerdos de Dayton (EUA), por los cuales se ponía fin a la guerra de Bosnia-Herzegovina (1992-1995). Serbios, bosnios y croatas reconocieron la soberanía de los distintos territorios y se aceptó la definición de Bosnia-Herzegovina como un solo Estado formado por la Federación de Bosnia y la República Serbia de Bosnia (Srpska).", "bold 20px Verdana");
	this.txt_popup.lineHeight = 20;
	this.txt_popup.lineWidth = 466;
	this.txt_popup.setTransform(427.7,44.4);
 var html = createDiv(txt['txt_popup_2_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(431, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_02},{t:this.btn_ampliar_06}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6jUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:237.5,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap38();
	this.instance.setTransform(-2.6,39.1,0.685,0.683);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,39.1,900,360.3);


(lib.popup_zona_2_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_05 = new lib.btn_ampliar();
	this.btn_ampliar_05.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_05, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_05.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_05());
        });

	this.p_02_hito_01 = new cjs.Text("Nelson Mandela", "bold 15px Verdana", "#FFFFFF");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(114.5,364.7);

	this.txt_popup = new cjs.Text("", "20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 418;
	this.txt_popup.setTransform(441.2,44.4);
 var html = createDiv(txt['txt_popup_2_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.instance = new lib._000E9M01_ParaAudio();
	this.instance.setTransform(103.8,41.5,0.297,0.28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt_popup},{t:this.p_02_hito_01},{t:this.btn_ampliar_05}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.3,41.5,818.2,348.1);


(lib.popup_zona_1_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.btn_ampliar_04 = new lib.btn_ampliarneg();
	this.btn_ampliar_04.setTransform(407.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_04, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
      this.btn_ampliar_04.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_04());
        });

	this.p_02_hito_04 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_04.textAlign = "center";
	this.p_02_hito_04.lineHeight = 17;
	this.p_02_hito_04.lineWidth = 137;
	this.p_02_hito_04.setTransform(794.9,354.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p_02_hito_04},{t:this.btn_ampliar_04}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap22copy();
	this.instance.setTransform(79,5,0.666,0.667);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.txt_popup = new cjs.Text("", "20px Verdana");
	this.txt_popup.lineHeight = 22;
	this.txt_popup.lineWidth = 418;
	this.txt_popup.setTransform(445.2,44.4);
 var html = createDiv(txt['txt_popup_1_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79,5,788.5,512);


(lib.popup_zona_1_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_03 = new lib.btn_ampliar();
	this.btn_ampliar_03.setTransform(407.8,41.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_03, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_03.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_03());
        });

	this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_03.textAlign = "center";
	this.p_02_hito_03.lineHeight = 17;
	this.p_02_hito_03.lineWidth = 137;
	this.p_02_hito_03.setTransform(574.9,354.7);

	this.txt_popup = new cjs.Text("1991 (junio)\n\nLa declaración de independencia de Eslovenia y Croacia en junio de 1991 llevó a la intervención del ejército yugoslavo en la primera y al estallido de las guerras civiles entre serbios y croatas en Croacia (hasta 1995). La independencia de Bosnia-Herzegovina desencadenó la guerra civil entre musulmanes, croatas y serbobosnios (1992).", "bold 20px Verdana");
	this.txt_popup.lineHeight = 20;
	this.txt_popup.lineWidth = 445;
	this.txt_popup.setTransform(445.2,28.4);
 var html = createDiv(txt['txt_popup_1_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(451, 28 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup},{t:this.p_02_hito_03},{t:this.btn_ampliar_03}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUsMAAAgpXMA1GAAAMAAAApXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:255,y:160.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap24copy();
	this.instance.setTransform(53.5,13.7,0.619,0.619);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.5,13.7,840.5,385.8);


(lib.popup_zona_1_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MapaFons
	this.btn_ampliar_02 = new lib.btn_ampliarneg();
	this.btn_ampliar_02.setTransform(398.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_02, 0, 1, 2, false, new lib.btn_ampliarneg(), 3);
      this.btn_ampliar_02.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_02());
        });

	this.p_02_hito_02 = new cjs.Text("", "15px Verdana", "#FFFFFF");
	this.p_02_hito_02.textAlign = "center";
	this.p_02_hito_02.lineHeight = 17;
	this.p_02_hito_02.lineWidth = 137;
	this.p_02_hito_02.setTransform(358.8,354.7);

	this.txt_popup_1_02 = new cjs.Text("1990\n\nEl 1 de febrero se produjo la reunificación de Alemania. El 2 de diciembre se celebraron las primeras elecciones a la Dieta Federal de la Alemania reunificada. La victoria fue para el partido del canciller Helmut Kohl, la CDU/CSU, con 319 escaños. La segunda fuerza política fue el SPD, con 239.", "bold 20px Verdana");
	this.txt_popup_1_02.lineHeight = 22;
	this.txt_popup_1_02.lineWidth = 478;
	this.txt_popup_1_02.setTransform(429.2,44.3,0.985,1);
 var html = createDiv(txt['txt_popup_1_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_1_02 = new cjs.DOMElement(html);
        this.txt_popup_1_02.setTransform(451, 44 - 610);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_1_02},{t:this.p_02_hito_02},{t:this.btn_ampliar_02}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:246,y:176.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap21copy();
	this.instance.setTransform(73.3,-23.4,0.869,0.869);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.3,-23.4,830.7,423);


(lib.popup_zona_1_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.btn_ampliar_01 = new lib.btn_ampliar();
	this.btn_ampliar_01.setTransform(413.8,57.9,0.9,0.9);
	new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
      this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_ampliar_01());
        });

	this.p_02_hito_01 = new cjs.Text("Caida del muro de Berlin", "bold 15px Verdana", "#FFFFFF");
	this.p_02_hito_01.textAlign = "center";
	this.p_02_hito_01.lineHeight = 17;
	this.p_02_hito_01.lineWidth = 138;
	this.p_02_hito_01.setTransform(139.6,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p_02_hito_01},{t:this.btn_ampliar_01}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AzcYHMAAAgpZMA1GAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:215.5,y:154.3}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// PopUp
	this.instance = new lib.Bitmap23copy();
	this.instance.setTransform(88,-60.6,0.721,0.721);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).wait(1));

	// MapaFons
	this.txt_popup_1_01 = new cjs.Text("1989\n\nEl 9 de noviembre, las autoridades de la RDA, ordenaron la apertura del muro de Berlín. Antes, se había producido la victoria del primer gobierno no comunista en Polonia (septiembre) y habían caído los regímenes búlgaro, checoslovaco (noviembre) y rumano (diciembre). La Guerra Fría había acabado.", "bold 20px Verdana");
	this.txt_popup_1_01.lineHeight = 22;
	this.txt_popup_1_01.lineWidth = 426;
	this.txt_popup_1_01.setTransform(451.2,44.4);
  var html = createDiv(txt['txt_popup_1_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_1_01 = new cjs.DOMElement(html);
        this.txt_popup_1_01.setTransform(451, 44 - 610);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_popup_1_01}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70.4,-60.6,810.6,517.4);


(lib.popup_ampliar_19 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(3));
        });

	// Imatge
	this.pie_19 = new cjs.Text("Osama Bin Laden, activista islámico saudí.", "18px Verdana");
	this.pie_19.lineHeight = 20;
	this.pie_19.lineWidth = 387;
	this.pie_19.setTransform(299.9,522.7);

	this.instance = new lib._00189A01();
	this.instance.setTransform(300.1,43.3,0.624,0.624);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_19,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_18 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(2));
        });

	// Imatge
	this.pie_18 = new cjs.Text("Plaza Tahrir de El Cairo (Egipto).", "18px Verdana");
	this.pie_18.lineHeight = 20;
	this.pie_18.lineWidth = 311;
	this.pie_18.setTransform(126,539.8);

	this.instance = new lib._3_shutterstock_84357535();
	this.instance.setTransform(127.6,44.2,0.647,0.647);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_18,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_17 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame6(1));
        });

	// Imatge
	this.pie_17 = new cjs.Text("Manifestantes griegos protestando ante el Parlamento griego por los recortes impuestos por la UE y el FMI (Atenas, Grecia, 9 de mayo de 2010).", "18px Verdana");
	this.pie_17.lineHeight = 20;
	this.pie_17.lineWidth = 698;
	this.pie_17.setTransform(133.3,520.3);

	this.instance = new lib._9_shutterstock_61734760();
	this.instance.setTransform(134.6,44,0.622,0.622);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_17,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_16 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(4));
        });

	// Imatge
	this.pie_16 = new cjs.Text("Barack Obama, político estadounidense.", "18px Verdana");
	this.pie_16.lineHeight = 20;
	this.pie_16.lineWidth = 375;
	this.pie_16.setTransform(103.2,539.8);

	this.instance = new lib._8_shutterstock_25243708();
	this.instance.setTransform(105.6,44.2,0.647,0.647);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_16,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


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
	this.pie_15 = new cjs.Text("Cotizaciones en bolsa.", "18px Verdana");
	this.pie_15.lineHeight = 20;
	this.pie_15.lineWidth = 281;
	this.pie_15.setTransform(227.6,542.2);

	this.instance = new lib._2_shutterstock_72263485();
	this.instance.setTransform(228.6,39.2,0.656,0.656);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_15,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_14 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(2));
        });

	// Imatge
	this.pie_14 = new cjs.Text("Nicolas Sarkozy, político francés.", "18px Verdana");
	this.pie_14.lineHeight = 20;
	this.pie_14.lineWidth = 312;
	this.pie_14.setTransform(274.8,531.6);

	this.instance = new lib._7_shutterstock_6505642();
	this.instance.setTransform(275.1,44,0.635,0.635);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_14,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_13 = function() {
	this.initialize();

	// btn_salir
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.5);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
            putStage(new lib.frame5(1));
        });

	// Imatge
	this.pie_13 = new cjs.Text("Evo Morales, político boliviano.", "18px Verdana");
	this.pie_13.lineHeight = 20;
	this.pie_13.lineWidth = 288;
	this.pie_13.setTransform(304.8,542.2);

	this.instance = new lib._6_shutterstock_4234144();
	this.instance.setTransform(305.6,39.2,0.656,0.656);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_13,this.btn_salir);
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
	this.pie_12 = new cjs.Text("Incendios en Bagdad durante la guerra de Iraq (abril de 2003).", "18px Verdana");
	this.pie_12.lineHeight = 20;
	this.pie_12.lineWidth = 684;
	this.pie_12.setTransform(108.9,543);

	this.instance = new lib._001Q7501();
	this.instance.setTransform(107.6,39.2,0.656,0.656);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_12,this.btn_salir);
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
	this.pie_11 = new cjs.Text("Guerrilleros afganos (2001).", "18px Verdana");
	this.pie_11.lineHeight = 20;
	this.pie_11.lineWidth = 273;
	this.pie_11.setTransform(312.9,520.3);

	this.instance = new lib._0017O101();
	this.instance.setTransform(313.9,44.2,0.621,0.621);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_11,this.btn_salir);
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
	this.pie_10 = new cjs.Text("Atentado al World Trade Center de Nueva York el 11 de septiembre de 2001.", "18px Verdana");
	this.pie_10.lineHeight = 20;
	this.pie_10.lineWidth = 311;
	this.pie_10.setTransform(321,512.4);

	this.instance = new lib._1_shutterstock_83242105();
	this.instance.setTransform(321.3,34.3,0.623,0.623);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_10,this.btn_salir);
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
	this.pie_09 = new cjs.Text("Enfrentamientos entre miembros de la Intifada y la policía israelí en el barrio antiguo de Jerusalén, cerca de la Puerta de los Leones (octubre de 2000).", "18px Verdana");
	this.pie_09.lineHeight = 20;
	this.pie_09.lineWidth = 660;
	this.pie_09.setTransform(143.8,522.7);

	this.instance = new lib._0012RG01();
	this.instance.setTransform(144.6,44.2,0.637,0.637);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_09,this.btn_salir);
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
	this.pie_08 = new cjs.Text("Gerry Adams (derecha), líder del Sinn Féin junto a Martin McGuiness, miembro del mismo partido, durante los acuerdos de paz de Stormont (Irlanda del Norte, Reino Unido, 10 de abril de 1998).", "18px Verdana");
	this.pie_08.lineHeight = 20;
	this.pie_08.lineWidth = 638;
	this.pie_08.setTransform(178,520.3);

	this.instance = new lib._000XD401();
	this.instance.setTransform(177.8,44.1,0.621,0.621);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_08,this.btn_salir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,618.3);


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
	this.pie_07 = new cjs.Text("Ancianos afganos.", "18px Verdana");
	this.pie_07.lineHeight = 20;
	this.pie_07.lineWidth = 684;
	this.pie_07.setTransform(85.3,535.7);

	this.instance = new lib._5_shutterstock_779873();
	this.instance.setTransform(85.6,44.2,0.641,0.641);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_07,this.btn_salir);
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
	this.pie_06 = new cjs.Text("Firma de los acuerdos de Dayton (Ohio, Estados Unidos, 21 de noviembre de 1995).", "18px Verdana");
	this.pie_06.lineHeight = 20;
	this.pie_06.lineWidth = 772;
	this.pie_06.setTransform(98.5,538.7);

	this.instance = new lib._4_DaytonAgreementSENSECOPYRIGHT();
	this.instance.setTransform(103.6,39.2,0.656,0.656);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_06,this.btn_salir);
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
	this.pie_05 = new cjs.Text("Nelson Mandela, político sudafricano.", "18px Verdana");
	this.pie_05.lineHeight = 20;
	this.pie_05.lineWidth = 684;
	this.pie_05.setTransform(102.4,543.8);

	this.instance = new lib._000E9M01();
	this.instance.setTransform(102.6,39.2,0.656,0.656);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_05,this.btn_salir);
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
	this.pie_04 = new cjs.Text("Mijaíl Gorbachov, político ruso.", "18px Verdana");
	this.pie_04.lineHeight = 20;
	this.pie_04.lineWidth = 324;
	this.pie_04.setTransform(306.4,542.3);

	this.instance = new lib._001EPS01();
	this.instance.setTransform(306.6,39.2,0.656,0.656);

	// Capa 1
	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.instance,this.pie_04,this.btn_salir);
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
	this.instance = new lib._001FXA01();
	this.instance.setTransform(132.5,44,0.647,0.647);

	// Capa 1
	this.pie_03 = new cjs.Text("Un casco azul en Mostar enarbolando la bandera de la ONU durante la guerra de Yugoslavia (Mostar, Bosnia-Herzegovina).", "18px Verdana");
	this.pie_03.lineHeight = 20;
	this.pie_03.lineWidth = 684;
	this.pie_03.setTransform(130,538.7);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.pie_03,this.instance,this.btn_salir);
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
	this.instance = new lib._001TC801_Pop();
	this.instance.setTransform(309.5,44,0.632,0.632);

	// Capa 1
	this.pie_02 = new cjs.Text("Helmut Kohl, político alemán.", "18px Verdana");
	this.pie_02.lineHeight = 20;
	this.pie_02.lineWidth = 328;
	this.pie_02.setTransform(308.9,538.5);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.pie_02,this.instance,this.btn_salir);
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
	this.instance = new lib.Bitmap23copy();
	this.instance.setTransform(312.6,45.2,0.671,0.67);

	// Capa 1
	this.pie_01 = new cjs.Text("Graffiti satírico en el muro de Berlín (1989).", "18px Verdana");
	this.pie_01.lineHeight = 20;
	this.pie_01.lineWidth = 328;
	this.pie_01.setTransform(310.5,535.7);

	this.instance_1 = new lib.mc_fundido();
	this.instance_1.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_1,this.pie_01,this.instance,this.btn_salir);
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