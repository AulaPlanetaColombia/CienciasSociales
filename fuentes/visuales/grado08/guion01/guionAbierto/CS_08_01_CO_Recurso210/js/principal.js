(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 0, 0, 0, 0, 0);
        titulo1(this, txt['titol']);
        this.p_01_tabla_09 = new cjs.Text(txt['p_01_tabla_09'], "bold 13px Verdana");
        this.p_01_tabla_09.textAlign = "center";
        this.p_01_tabla_09.lineHeight = 15;
        this.p_01_tabla_09.lineWidth = 31;
        this.p_01_tabla_09.setTransform(891.6, 358.2 + incremento);
        this.p_01_tabla_08 = new cjs.Text(txt['p_01_tabla_08'], "bold 14px Verdana");
        this.p_01_tabla_08.textAlign = "center";
        this.p_01_tabla_08.lineHeight = 16;
        this.p_01_tabla_08.lineWidth = 62;
        this.p_01_tabla_08.setTransform(836.4, 358.2);
        this.p_01_hito_04 = new cjs.Text("1789\n\nRevolución francesa", "bold 14px Verdana");
        this.p_01_hito_04.textAlign = "right";
        this.p_01_hito_04.lineHeight = 11;
        this.p_01_hito_04.lineWidth = 119;
        this.p_01_hito_04.setTransform(719.7, 167.8);
        var html = createDiv(txt['p_01_hito_04'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_04 = new cjs.DOMElement(html);
        this.p_01_hito_04.setTransform(719 - 130, 167 - 610);
        this.p_01_hito_05 = new cjs.Text("1799\n\n18 de brumario", "bold 14px Verdana");
        this.p_01_hito_05.textAlign = "right";
        this.p_01_hito_05.lineHeight = 11;
        this.p_01_hito_05.lineWidth = 89;
        this.p_01_hito_05.setTransform(793.9, 94);
        var html = createDiv(txt['p_01_hito_05'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_05 = new cjs.DOMElement(html);
        this.p_01_hito_05.setTransform(793 - 130, 94 - 610);
        this.p_01_hito_03 = new cjs.Text("1776\n\nCrack de Nueva York", "bold 14px Verdana");
        this.p_01_hito_03.textAlign = "right";
        this.p_01_hito_03.lineHeight = 11;
        this.p_01_hito_03.lineWidth = 123;
        this.p_01_hito_03.setTransform(625.6, 237.7);
        var html = createDiv(txt['p_01_hito_03'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_03 = new cjs.DOMElement(html);
        this.p_01_hito_03.setTransform(625 - 130, 237 - 610);
        this.p_01_hito_02 = new cjs.Text("1748\n\nab", "italic 14px Verdana");
        this.p_01_hito_02.textAlign = "right";
        this.p_01_hito_02.lineHeight = 11;
        this.p_01_hito_02.lineWidth = 104;
        this.p_01_hito_02.setTransform(387.5, 237.7);
        var html = createDiv(txt['p_01_hito_02'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_02 = new cjs.DOMElement(html);
        this.p_01_hito_02.setTransform(387 - 130, 237 - 610);
        this.p_01_hito_01 = new cjs.Text("1715\n\nTratado de Versalles", "bold 14px Verdana");
        this.p_01_hito_01.textAlign = "right";
        this.p_01_hito_01.lineHeight = 11;
        this.p_01_hito_01.lineWidth = 102;
        this.p_01_hito_01.setTransform(167.6, 237.7);
        var html = createDiv(txt['p_01_hito_01'], "Verdana", "14px", '135px', '10px', "20px", "185px", "right");
        html.style.lineHeight = "110%";
        this.p_01_hito_01 = new cjs.DOMElement(html);
        this.p_01_hito_01.setTransform(167 - 130, 237 - 610);
        this.p_01_tabla_04 = new cjs.Text(txt['p_01_tabla_04'], "bold 14px Verdana");
        this.p_01_tabla_04.textAlign = "center";
        this.p_01_tabla_04.lineHeight = 16;
        this.p_01_tabla_04.lineWidth = 202;
        this.p_01_tabla_04.setTransform(803.5, 407.9 + incremento);
        this.p_01_tabla_01 = new cjs.Text(txt['p_01_tabla_01'], "bold 14px Verdana");
        this.p_01_tabla_01.textAlign = "center";
        this.p_01_tabla_01.lineHeight = 16;
        this.p_01_tabla_01.lineWidth = 863;
        this.p_01_tabla_01.setTransform(473.9, 333.1 + incremento);
        this.p_01_tabla_05 = new cjs.Text(txt['p_01_tabla_05'], "bold 14px Verdana");
        this.p_01_tabla_05.textAlign = "center";
        this.p_01_tabla_05.lineHeight = 16;
        this.p_01_tabla_05.lineWidth = 860;
        this.p_01_tabla_05.setTransform(474.3, 419.8 + incremento);
        this.p_01_tabla_03 = new cjs.Text(txt['p_01_tabla_03'], "bold 14px Verdana");
        this.p_01_tabla_03.textAlign = "center";
        this.p_01_tabla_03.lineHeight = 16;
        this.p_01_tabla_03.lineWidth = 858;
        this.p_01_tabla_03.setTransform(474.1, 383.5 + incremento);
        this.p_01_tabla_02 = new cjs.Text(txt['p_01_tabla_02'], "bold 14px Verdana");
        this.p_01_tabla_02.textAlign = "center";
        this.p_01_tabla_02.lineHeight = 16;
        this.p_01_tabla_02.lineWidth = 726;
        this.p_01_tabla_02.setTransform(408.6, 358.2 + incremento);
        this.txt_selecciona = new cjs.Text(txt['txt_selecciona'], "bold 16px Arial");
        this.txt_selecciona.textAlign = "center";
        this.txt_selecciona.lineHeight = 18;
        this.txt_selecciona.lineWidth = 335;
        this.txt_selecciona.setTransform(474.3, 550.6);
        this.instance_1 = new lib.Mapadebits5();
        this.instance_1.setTransform(803.3, 94);
        this.instance_2 = new lib.Mapadebits4();
        this.instance_2.setTransform(727.8, 167.8);
        this.instance_3 = new lib.Mapadebits3();
        this.instance_3.setTransform(633.1, 237.7);
        this.instance_4 = new lib.Mapadebits2();
        this.instance_4.setTransform(397.1, 237.7);
        this.instance_5 = new lib.Mapadebits1();
        this.instance_5.setTransform(176.6, 237.7);
        this.instance_6 = new lib.Mapadebits10();
        this.instance_6.setTransform(240, 297.9);
        this.instance_7 = new lib.Mapadebits9();
        this.instance_7.setTransform(467.5, 294.9);
        this.instance_8 = new lib.Mapadebits8();
        this.instance_8.setTransform(701.5, 292.8);
        this.instance_9 = new lib.Mapadebits7();
        this.instance_9.setTransform(800.9, 217.9);
        this.instance_10 = new lib.Mapadebits6();
        this.instance_10.setTransform(873, 152.4);
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape.setTransform(240.9, 344.2, 1.047, 1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_1.setTransform(874, 368.8, 1.046, 1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_2.setTransform(801.9, 369, 1.047, 1);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_3.setTransform(702.5, 418.9, 1.047, 1);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_4.setTransform(468.5, 370.2, 1.047, 1);
        this.btn_05 = new lib.btn_05();
        this.btn_05.setTransform(825, 482.5, 1, 1, 0, 0, 0, 87.5, 9.3);
        new cjs.ButtonHelper(this.btn_05, 0, 1, 2, false, new lib.btn_05(), 3);
        this.btn_04 = new lib.btn_02();
        this.btn_04.setTransform(650.8, 482.5, 1, 1, 0, 0, 0, 87.5, 9.3);
        new cjs.ButtonHelper(this.btn_04, 0, 1, 2, false, new lib.btn_02(), 3);
        this.btn_03 = new lib.btn_03();
        this.btn_03.setTransform(476.7, 482.5, 1, 1, 0, 0, 0, 87.5, 9.3);
        new cjs.ButtonHelper(this.btn_03, 0, 1, 2, false, new lib.btn_03(), 3);
        this.btn_02 = new lib.btn_02();
        this.btn_02.setTransform(302.7, 482.5, 1, 1, 0, 0, 0, 87.5, 9.3);
        new cjs.ButtonHelper(this.btn_02, 0, 1, 2, false, new lib.btn_02(), 3);
        this.btn_01 = new lib.btn_01();
        this.btn_01.setTransform(129, 482.5, 1, 1, 0, 0, 0, 87.5, 9.3);
        new cjs.ButtonHelper(this.btn_01, 0, 1, 2, false, new lib.btn_01(), 3);
        this.text = new cjs.Text("1804", "bold 16px Arial");
        this.text.lineHeight = 18;
        this.text.lineWidth = 55;
        this.text.setTransform(884.3, 500.4);
        this.text_1 = new cjs.Text("1780", "bold 16px Arial");
        this.text_1.lineHeight = 18;
        this.text_1.lineWidth = 55;
        this.text_1.setTransform(710.1, 500.4);
        this.text_2 = new cjs.Text("1760", "bold 16px Arial");
        this.text_2.lineHeight = 18;
        this.text_2.lineWidth = 55;
        this.text_2.setTransform(538.3, 500.4);
        this.text_3 = new cjs.Text("1740", "bold 16px Arial");
        this.text_3.lineHeight = 18;
        this.text_3.lineWidth = 55;
        this.text_3.setTransform(364.3, 500.4);
        this.text_4 = new cjs.Text("1720", "bold 16px Arial");
        this.text_4.lineHeight = 18;
        this.text_4.lineWidth = 55;
        this.text_4.setTransform(191, 500.4);
        this.text_5 = new cjs.Text("1689", "bold 16px Arial");
        this.text_5.lineHeight = 18;
        this.text_5.lineWidth = 55;
        this.text_5.setTransform(20.9, 500.4);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#E44E6D").s().p("EgznAB8IAAj3MBnPAAAIAAD3g");
        this.shape_5.setTransform(372.3, 419);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#C0D36D").s().p("Ai1B9IAAj5IFrAAIAAD5g");
        this.shape_6.setTransform(892.5, 369);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#C398BF").s().p("AloB9IAAj5ILRAAIAAD5g");
        this.shape_7.setTransform(838.1, 369);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#F4B06D").s().p("AwPB8IAAj3MAgeAAAIAAD3g");
        this.shape_8.setTransform(806.8, 419);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#8BB1D8").s().p("Eg7XAB9IAAj5MB2vAAAIAAD5g");
        this.shape_9.setTransform(421.9, 369);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#E44E6D").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_10.setTransform(476.3, 444, 1, 0.983);
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_11.setTransform(476.3, 393.9, 1, 0.883);
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#E9754A").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_12.setTransform(476.3, 344.3, 1, 0.883);
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
        this.addChild(this.logo, this.titulo, this.shape_12, this.shape_11, this.shape_10, this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.text_5, this.text_4, this.text_3, this.text_2, this.text_1, this.text, this.btn_01, this.btn_02, this.btn_03, this.btn_04, this.btn_05, this.shape_4, this.shape_3, this.shape_2, this.shape_1, this.shape, this.instance_10, this.instance_9, this.instance_8, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.txt_selecciona, this.titol, this.p_01_tabla_02, this.p_01_tabla_03, this.p_01_tabla_05, this.p_01_tabla_01, this.p_01_tabla_04, this.p_01_hito_01, this.p_01_hito_02, this.p_01_hito_03, this.p_01_hito_05, this.p_01_hito_04, this.p_01_tabla_08, this.p_01_tabla_09);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    (lib.frame2 = function (boton) {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ah/DJIAAmRID/AAIAAGRg");
        this.shape.setTransform(22.6, 468.8);
        this.btn_prev = new lib.Boto_Navegacio();
        this.btn_prev.setTransform(25.4, 469.5, 0.862, 1.395, 0, 0, 180);
        new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);
        this.btn_next = new lib.Boto_Navegacio();
        this.btn_next.setTransform(924.9, 469.5, 0.862, 1.395);
        new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);
        this.texta = new cjs.Text(txt['p_02_hito_03'], "bold 15px Verdana");
        this.texta.textAlign = "center";
        this.texta.lineHeight = 16;
        this.texta.lineWidth = 100;
        this.texta.setTransform(767.9, 333.7-incremento);
        this.text_1a = new cjs.Text(txt['p_02_hito_02'], "bold 15px Verdana");
        this.text_1a.textAlign = "center";
        this.text_1a.lineHeight = 16;
        this.text_1a.lineWidth = 100;
        this.text_1a.setTransform(582, 332.9-incremento);
        this.text_2a = new cjs.Text(txt['p_02_hito_01'], "italic bold 15px Verdana");
        this.text_2a.textAlign = "center";
        this.text_2a.lineHeight = 16;
        this.text_2a.lineWidth = 100;
        this.text_2a.setTransform(139.3, 333.7-incremento);
        this.p_01_tabla_01 = new cjs.Text("Absolutismo", "bold 14px Verdana");
        this.p_01_tabla_01.textAlign = "center";
        this.p_01_tabla_01.lineHeight = 16;
        this.p_01_tabla_01.lineWidth = 863;
        this.p_01_tabla_01.setTransform(473.1, 412.4+incremento);
        this.p_01_tabla_04 = new cjs.Text("América colonial", "bold 14px Verdana");
        this.p_01_tabla_04.textAlign = "center";
        this.p_01_tabla_04.lineHeight = 16;
        this.p_01_tabla_04.lineWidth = 857;
        this.p_01_tabla_04.setTransform(473.3, 495.6+incremento);
        this.p_01_tabla_03 = new cjs.Text("Parlamentarismo", "bold 14px Verdana");
        this.p_01_tabla_03.textAlign = "center";
        this.p_01_tabla_03.lineHeight = 16;
        this.p_01_tabla_03.lineWidth = 857;
        this.p_01_tabla_03.setTransform(473.3, 460.8+incremento);
        this.p_01_tabla_02 = new cjs.Text("Ilustración", "bold 14px Verdana");
        this.p_01_tabla_02.textAlign = "center";
        this.p_01_tabla_02.lineHeight = 16;
        this.p_01_tabla_02.lineWidth = 857;
        this.p_01_tabla_02.setTransform(473.3, 436+incremento);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_absolutismo("single", 1);
        else
            this.mc_boto_03 = new lib.mc_absolutismo();
        this.mc_boto_03.setTransform(768.8, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_absolutismo(), 3);
        if (boton == 1)
            this.mc_boto_01 = new lib.mc_parlamentarismo("single", 1);
        else
            this.mc_boto_01 = new lib.mc_parlamentarismo();
        this.mc_boto_01.setTransform(141.3, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_parlamentarismo(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_absolutismo("single", 1);
        else
            this.mc_boto_02 = new lib.mc_absolutismo();
        this.mc_boto_02.setTransform(584.8, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_absolutismo(), 3);
        this.instance_1 = new lib.Mapadebits14();
        this.instance_1.setTransform(46.9, 399.5);
        this.instance_2 = new lib.Mapadebits13();
        this.instance_2.setTransform(64.6, 345.9);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_1.setTransform(769, 424.6, 1.047, 1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_2.setTransform(713.4, 424.6, 1.047, 1);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_3.setTransform(47.9, 472.5, 1.047, 1);
        this.text = new cjs.Text("1715", "bold 16px Verdana");
        this.text.textAlign = "center";
        this.text.lineHeight = 18;
        this.text.lineWidth = 49;
        this.text.setTransform(766.4, 379);
        this.instance_3 = new lib.Symbol1("synched", 0);
        this.instance_3.setTransform(769.5, 390.1, 1, 1, 0, 0, 0, 24.3, 11.3);
        this.text_1 = new cjs.Text("1720", "bold 18px Verdana");
        this.text_1.lineHeight = 20;
        this.text_1.lineWidth = 58;
        this.text_1.setTransform(884, 376.5);
        this.text_2 = new cjs.Text("1713", "bold 16px Verdana");
        this.text_2.textAlign = "center";
        this.text_2.lineHeight = 18;
        this.text_2.lineWidth = 49;
        this.text_2.setTransform(648.5, 379);
        this.instance_4 = new lib.Symbol1("synched", 0);
        this.instance_4.setTransform(650.5, 390.5, 1, 1, 0, 0, 0, 24.3, 11.3);
        this.text_3 = new cjs.Text("1689", "bold 18px Verdana");
        this.text_3.lineHeight = 20;
        this.text_3.lineWidth = 55;
        this.text_3.setTransform(15, 376.5);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
        this.shape_4.setTransform(475.5, 409.1);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#E44E6D").s().p("EhLHAB4IAAjvMCWPAAAIAADvg");
        this.shape_5.setTransform(475, 495.6, 0.903, 1.079);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#C0D36D").s().p("AkIB8IAAj3IIRAAIAAD3g");
        this.shape_6.setTransform(1278.8, 447);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#8BB1D8").s().p("EhWYAB8IAAj3MCsxAAAIAAD3g");
        this.shape_7.setTransform(475, 447.5, 0.785, 1.044);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#E44E6D").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_8.setTransform(475, 519.7, 0.999, 0.852);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_9.setTransform(475, 472.5, 0.999, 0.919);
        this.instance_5 = new lib.Mapadebits11();
        this.instance_5.setTransform(583.1, 362.8);
        this.instance_6 = new lib.Mapadebits12();
        this.instance_6.setTransform(767.9, 362.5);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#E9754A").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_10.setTransform(475, 422.5, 0.999, 0.852);
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("EhD3AJeIAAy7MCHvAAAIAAS7g");
        this.shape_11.setTransform(475.5, 471.1);
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
        this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame2(2));
        });
        this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame2(3));
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
   
        this.addChild(this.logo, this.titulo, this.home, this.siguiente, this.shape_11, this.shape_10, this.instance_6, this.instance_5, this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4, this.text_3, this.instance_4, this.text_2, this.text_1, this.instance_3, this.text, this.shape_3, this.shape_2, this.shape_1, this.instance_2, this.instance_1, this.mc_boto_02, this.mc_boto_01, this.mc_boto_03, this.btn_inicio, this.p_02_hito_01, this.p_02_hito_02, this.p_02_hito_03, this.p_01_tabla_02, this.p_01_tabla_03, this.p_01_tabla_04, this.p_01_tabla_01, this.btn_next, this.text_2a, this.text_1a, this.texta);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    (lib.frame3 = function (boton) {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        this.btn_prev = new lib.Boto_Navegacio();
        this.btn_prev.setTransform(25.4, 469.5, 0.862, 1.395, 0, 0, 180);
        new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);
        this.btn_next = new lib.Boto_Navegacio();
        this.btn_next.setTransform(924.9, 469.5, 0.862, 1.395);
        new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);
        this.p_01_tabla_02 = new cjs.Text("Ilustración", "bold 14px Verdana");
        this.p_01_tabla_02.textAlign = "center";
        this.p_01_tabla_02.lineHeight = 16;
        this.p_01_tabla_02.lineWidth = 857;
        this.p_01_tabla_02.setTransform(473.3, 436+incremento);
        this.p_01_tabla_01 = new cjs.Text("Absolutismo", "bold 14px Verdana");
        this.p_01_tabla_01.textAlign = "center";
        this.p_01_tabla_01.lineHeight = 16;
        this.p_01_tabla_01.lineWidth = 863;
        this.p_01_tabla_01.setTransform(473.1, 412.3+incremento);
        this.p_02_hito_00 = new cjs.Text(txt['p_02_hito_00'], "italic bold 15px Verdana");
        this.p_02_hito_00.textAlign = "center";
        this.p_02_hito_00.lineHeight = 17;
        this.p_02_hito_00.lineWidth = 137;
        this.p_02_hito_00.setTransform(118.6, 333.6+incremento);
        this.p_02_hito_01 = new cjs.Text("Federico II, rey de Prusia",  "bold 15px Verdana");
        this.p_02_hito_01.textAlign = "center";
        this.p_02_hito_01.lineHeight = 17;
        this.p_02_hito_01.lineWidth = 138;
        this.p_02_hito_01.setTransform(836.3, 322.6+incremento);
        this.p_01_tabla_04 = new cjs.Text("América colonial", "bold 14px Verdana");
        this.p_01_tabla_04.textAlign = "center";
        this.p_01_tabla_04.lineHeight = 16;
        this.p_01_tabla_04.lineWidth = 857;
        this.p_01_tabla_04.setTransform(473.3, 495.6+incremento);
        this.p_01_tabla_03 = new cjs.Text("Parlamentarismo", "bold 14px Verdana");
        this.p_01_tabla_03.textAlign = "center";
        this.p_01_tabla_03.lineHeight = 16;
        this.p_01_tabla_03.lineWidth = 857;
        this.p_01_tabla_03.setTransform(473.3, 460.7+incremento);
        this.p_02_hito_02 = new cjs.Text("Cartas inglesas", "italic bold 15px Verdana");
        this.p_02_hito_02.textAlign = "center";
        this.p_02_hito_02.lineHeight = 17;
        this.p_02_hito_02.lineWidth = 137;
        this.p_02_hito_02.setTransform(647.2, 331.6);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_absolutismo("single", 1);
        else
            this.mc_boto_03 = new lib.mc_absolutismo();
        this.mc_boto_03.setTransform(838, 344.1, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_absolutismo(), 3);
        if (boton == 1)
            this.mc_boto_01 = new lib.mc_ilustracion("single", 1);
        else
            this.mc_boto_01 = new lib.mc_ilustracion();
        this.mc_boto_01.setTransform(120.5, 344.1, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_ilustracion(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_ilustracion("single", 1);
        else
            this.mc_boto_02 = new lib.mc_ilustracion();
        this.mc_boto_02.setTransform(649.2, 344.1, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_absolutismo(), 3);
        this.mc_boto_01.on("click", function (evt) {
            putStage(new lib.frame3(1));
        });
        this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame3(2));
        });
        this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame3(3));
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
            this.popup = new lib.popup_zona_3_01("single", 0);
            this.addChild(this.popup);
        }

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape.setTransform(120.5, 448.6, 1.047, 1);
        this.text = new cjs.Text("1721", "bold 16px Verdana");
        this.text.textAlign = "center";
        this.text.lineHeight = 18;
        this.text.lineWidth = 49;
        this.text.setTransform(118.6, 378.9);
        this.instance_1 = new lib.Symbol1("synched", 0);
        this.instance_1.setTransform(120.7, 392.1, 1, 0.916, 0, 0, 0, 24.3, 11.3);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_1.setTransform(905.8, 423.4, 1.047, 1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_2.setTransform(649.2, 448.6, 1.047, 1);
        this.text_1 = new cjs.Text("1740", "bold 18px Verdana");
        this.text_1.lineHeight = 20;
        this.text_1.lineWidth = 58;
        this.text_1.setTransform(876.7, 376.5);
        this.text_2 = new cjs.Text("1734", "bold 16px Verdana");
        this.text_2.textAlign = "center";
        this.text_2.lineHeight = 18;
        this.text_2.lineWidth = 49;
        this.text_2.setTransform(647.2, 378.9);
        this.instance_2 = new lib.Symbol1("synched", 0);
        this.instance_2.setTransform(649.3, 392.1, 1, 0.916, 0, 0, 0, 24.3, 11.3);
        this.text_3 = new cjs.Text("1720", "bold 18px Verdana");
        this.text_3.lineHeight = 20;
        this.text_3.lineWidth = 55;
        this.text_3.setTransform(14.9, 376.5);
        this.instance_3 = new lib.Symbol1("synched", 0);
        this.instance_3.setTransform(904.4, 388.7, 1, 0.775, 0, 0, 0, 24.3, 11.3);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
        this.shape_3.setTransform(475.5, 409);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#E44E6D").s().p("EhLHAB4IAAjvMCWPAAAIAADvg");
        this.shape_4.setTransform(475, 496.5, 0.903, 1.079);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#8BB1D8").s().p("EhWYAB8IAAj3MCsxAAAIAAD3g");
        this.shape_5.setTransform(475, 447.5, 0.785, 1.044);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#E44E6D").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_6.setTransform(475, 519.6, 0.999, 0.852);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_7.setTransform(475, 472.4, 0.999, 0.919);
        this.instance_4 = new lib.Mapadebits15();
        this.instance_4.setTransform(119.6, 350.6);
        this.instance_5 = new lib.Mapadebits17();
        this.instance_5.setTransform(904.8, 365.3);
        this.instance_6 = new lib.Mapadebits16();
        this.instance_6.setTransform(648.2, 350.6);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#E9754A").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_8.setTransform(475, 423.4, 0.999, 0.919);
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame2());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.shape_8, this.instance_6, this.instance_5, this.instance_4, this.shape_7, this.shape_6, this.shape_5, this.shape_4, this.shape_3, this.instance_3, this.text_3, this.instance_2, this.text_2, this.text_1, this.shape_2, this.shape_1, this.instance_1, this.text, this.shape, this.mc_boto_02, this.mc_boto_03, this.mc_boto_01, this.btn_inicio, this.p_02_hito_02, this.p_01_tabla_03, this.p_01_tabla_04, this.p_02_hito_01, this.p_02_hito_00, this.p_01_tabla_01, this.p_01_tabla_02, this.btn_zona_2_02, this.btn_zona_3_01, this.btn_zona_2_01, this.btn_next, this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    (lib.frame4 = function (boton) {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        this.btn_prev = new lib.Boto_Navegacio();
        this.btn_prev.setTransform(25.4, 469.5, 0.862, 1.395, 0, 0, 180);
        
        new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);
        this.btn_next = new lib.Boto_Navegacio();
        
        this.btn_next.setTransform(924.9, 469.5, 0.862, 1.395);
        new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);
        
        this.p_01_tabla_02 = new cjs.Text("Ilustración", "bold 14px Verdana");
        this.p_01_tabla_02.textAlign = "center";
        this.p_01_tabla_02.lineHeight = 16;
        this.p_01_tabla_02.lineWidth = 857;
        this.p_01_tabla_02.setTransform(473.3, 436+incremento);
        
        this.p_01_tabla_01 = new cjs.Text("Absolutismo", "bold 14px Verdana");
        this.p_01_tabla_01.textAlign = "center";
        this.p_01_tabla_01.lineHeight = 16;
        this.p_01_tabla_01.lineWidth = 863;
        this.p_01_tabla_01.setTransform(473.1, 412.4+incremento);
        
        this.p_02_hito_05 = new cjs.Text(txt['p_04_hito_05'], "bold 15px Verdana");
        this.p_02_hito_05.textAlign = "center";
        this.p_02_hito_05.lineHeight = 17;
        this.p_02_hito_05.lineWidth = 137;
        this.p_02_hito_05.setTransform(795.9, 322.7+incremento);
        
        this.p_02_hito_04 = new cjs.Text(txt['p_04_hito_04'], "italic bold 15px Verdana");
        this.p_02_hito_04.textAlign = "center";
        this.p_02_hito_04.lineHeight = 17;
        this.p_02_hito_04.lineWidth = 137;
        this.p_02_hito_04.setTransform(632.4, 333.2+incremento);
        
        this.p_01_tabla_04 = new cjs.Text("América colonial", "bold 14px Verdana");
        this.p_01_tabla_04.textAlign = "center";
        this.p_01_tabla_04.lineHeight = 16;
        this.p_01_tabla_04.lineWidth = 857;
        this.p_01_tabla_04.setTransform(473.3, 495.6+incremento);
        
        this.p_01_tabla_03 = new cjs.Text("Parlamentarismo", "bold 14px Verdana");
        this.p_01_tabla_03.textAlign = "center";
        this.p_01_tabla_03.lineHeight = 16;
        this.p_01_tabla_03.lineWidth = 857;
        this.p_01_tabla_03.setTransform(473.3, 460.8+incremento);
        
        this.p_02_hito_03 = new cjs.Text(txt['p_04_hito_03'], "italic bold 15px Verdana");
        this.p_02_hito_03.textAlign = "center";
        this.p_02_hito_03.lineHeight = 17;
        this.p_02_hito_03.lineWidth = 137;
        this.p_02_hito_03.setTransform(467.4, 322.7+incremento);
        
        this.p_02_hito_02 = new cjs.Text(txt['p_04_hito_02'], "bold 13px Verdana");
        this.p_02_hito_02.textAlign = "center";
        this.p_02_hito_02.lineHeight = 15;
        this.p_02_hito_02.lineWidth = 139;
        this.p_02_hito_02.setTransform(205, 324.1+incremento);
        if (boton == 4)
            this.mc_boto_05 = new lib.mc_parlamentarismo("single", 1);
        else
            this.mc_boto_05 = new lib.mc_parlamentarismo();
        this.mc_boto_05.setTransform(797.9, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_05, 0, 1, 2, false, new lib.mc_parlamentarismo(), 3);
        if (boton == 3)
            this.mc_boto_04 = new lib.mc_ilustracion("single", 1);
        else
            this.mc_boto_04 = new lib.mc_ilustracion();
        this.mc_boto_04.setTransform(634.4, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_ilustracion(), 3);
        if (boton == 2)
            this.mc_boto_03 = new lib.mc_ilustracion("single", 1);
        else
            this.mc_boto_03 = new lib.mc_ilustracion();
        this.mc_boto_03.setTransform(469.4, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_ilustracion(), 3);
        if (boton == 1)
            this.mc_boto_02 = new lib.mc_absolutismo("single", 1);
        else
            this.mc_boto_02 = new lib.mc_absolutismo();
        this.mc_boto_02.setTransform(206, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_absolutismo(), 3);
        
        this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame4(1));
        });
        
        this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame4(2));
        });
        
        this.mc_boto_04.on("click", function (evt) {
            putStage(new lib.frame4(3));
        });
        
        this.mc_boto_05.on("click", function (evt) {
            putStage(new lib.frame4(4));
        });
        
        if (boton == 1) {
            this.popup = new lib.popup_zona_3_02("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 2) {
            this.popup = new lib.popup_zona_3_03("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 3) {
            this.popup = new lib.popup_zona_3_04("single", 0);
            this.addChild(this.popup);
        }
        if (boton == 4) {
            this.popup = new lib.popup_zona_3_05("single", 0);
            this.addChild(this.popup);
        }
        
        this.instance_1 = new lib.Mapadebits18();
        this.instance_1.setTransform(43.8, 348);
        
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape.setTransform(735.9, 472.8, 1.047, 1);
        
        this.shape_1 = new cjs.Shape();
        
        this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_1.setTransform(531.7, 448.2, 1.047, 1);
        this.shape_2 = new cjs.Shape();
        
        this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_2.setTransform(388.6, 448.2, 1.047, 1);
        this.shape_3 = new cjs.Shape();
        
        this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_3.setTransform(44.8, 424.1, 1.047, 1);
        
        
        this.text = new cjs.Text("1756", "bold 16px Verdana");
        this.text.textAlign = "center";
        this.text.lineHeight = 18;
        this.text.lineWidth = 49;
        this.text.setTransform(763.9, 379);
        
        this.instance_2 = new lib.Symbol1("synched", 0);
        this.instance_2.setTransform(765.9, 390.9, 1, 1, 0, 0, 0, 24.3, 11.3);
        
        this.text_1 = new cjs.Text("1751", "bold 16px Verdana");
        this.text_1.textAlign = "center";
        this.text_1.lineHeight = 18;
        this.text_1.lineWidth = 49;
        this.text_1.setTransform(573.1, 379);
        
        this.instance_3 = new lib.Symbol1("synched", 0);
        this.instance_3.setTransform(575.2, 390.9, 1, 1, 0, 0, 0, 24.3, 11.3);
        this.text_2 = new cjs.Text("1748", "bold 16px Verdana");
        this.text_2.textAlign = "center";
        this.text_2.lineHeight = 18;
        this.text_2.lineWidth = 49;
        this.text_2.setTransform(427.5, 379);
        
        this.instance_4 = new lib.Symbol1("synched", 0);
        this.instance_4.setTransform(430.3, 390.9, 1, 1, 0, 0, 0, 24.3, 11.3);
        this.text_3 = new cjs.Text("1760", "bold 18px Verdana");
        this.text_3.lineHeight = 20;
        this.text_3.lineWidth = 58;
        this.text_3.setTransform(883, 376.5);
        
        this.text_4 = new cjs.Text("1740", "bold 18px Verdana");
        this.text_4.lineHeight = 20;
        this.text_4.lineWidth = 55;
        this.text_4.setTransform(14.9, 376.5);
        
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
        this.shape_4.setTransform(475.5, 409.1);
        this.shape_5 = new cjs.Shape();
        
        this.shape_5.graphics.f("#E44E6D").s().p("EhLHAB4IAAjvMCWPAAAIAADvg");
        this.shape_5.setTransform(475, 496.6, 0.903, 1.079);
        
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#8BB1D8").s().p("EhWYAB8IAAj3MCsxAAAIAAD3g");
        this.shape_6.setTransform(475, 447.5, 0.785, 1.044);
        
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#E44E6D").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_7.setTransform(475, 520.6, 0.999, 0.919);
        
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_8.setTransform(475, 472.5, 0.999, 0.919);
        
        this.instance_5 = new lib.Mapadebits21();
        this.instance_5.setTransform(735, 354.1);
        this.instance_6 = new lib.Mapadebits20();
        this.instance_6.setTransform(530.7, 357.2);
        this.instance_7 = new lib.Mapadebits19();
        this.instance_7.setTransform(387.7, 357.2);
        
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#E9754A").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_9.setTransform(475, 423.5, 0.999, 0.919);
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame3());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.shape_9, this.instance_7, this.instance_6, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4, this.text_4, this.text_3, this.instance_4, this.text_2, this.instance_3, this.text_1, this.instance_2, this.text, this.shape_3, this.shape_2, this.shape_1, this.shape, this.instance_1,  this.instance_5, this.mc_boto_02, this.mc_boto_03, this.mc_boto_04, this.mc_boto_05, this.btn_inicio, this.p_02_hito_02, this.p_02_hito_03, this.p_01_tabla_03, this.p_01_tabla_04, this.p_02_hito_04, this.p_02_hito_05, this.p_01_tabla_01, this.p_01_tabla_02, this.btn_zona_3_02, this.btn_zona_3_03, this.btn_zona_3_04, this.btn_zona_3_05, this.btn_next, this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    (lib.frame5 = function (boton) {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        this.btn_prev = new lib.Boto_Navegacio();
        this.btn_prev.setTransform(25.9, 469.5, 0.862, 1.395, 0, 0, 180);
        new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);
        this.btn_next = new lib.Boto_Navegacio();
        this.btn_next.setTransform(925.4, 469.5, 0.862, 1.395);
        new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);
        this.p_01_tabla_02 = new cjs.Text("Ilustración", "bold 14px Verdana");
        this.p_01_tabla_02.textAlign = "center";
        this.p_01_tabla_02.lineHeight = 16;
        this.p_01_tabla_02.lineWidth = 857;
        this.p_01_tabla_02.setTransform(473.8, 436+incremento);
        this.p_01_tabla_01 = new cjs.Text("Absolutismo", "bold 14px Verdana");
        this.p_01_tabla_01.textAlign = "center";
        this.p_01_tabla_01.lineHeight = 16;
        this.p_01_tabla_01.lineWidth = 863;
        this.p_01_tabla_01.setTransform(473.6, 412.4+incremento);
        this.p_01_tabla_05 = new cjs.Text("Estados Unidos", "bold 14px Verdana");
        this.p_01_tabla_05.textAlign = "center";
        this.p_01_tabla_05.lineHeight = 16;
        this.p_01_tabla_05.lineWidth = 165;
        this.p_01_tabla_05.setTransform(821.3, 484.5+incremento);
        this.p_01_tabla_04 = new cjs.Text("América colonial", "bold 14px Verdana");
        this.p_01_tabla_04.textAlign = "center";
        this.p_01_tabla_04.lineHeight = 16;
        this.p_01_tabla_04.lineWidth = 857;
        this.p_01_tabla_04.setTransform(473.8, 495.6+incremento);
        this.p_01_tabla_03 = new cjs.Text("Parlamentarismo", "bold 14px Verdana");
        this.p_01_tabla_03.textAlign = "center";
        this.p_01_tabla_03.lineHeight = 16;
        this.p_01_tabla_03.lineWidth = 857;
        this.p_01_tabla_03.setTransform(473.8, 460.8+incremento);
        this.p_02_hito_03 = new cjs.Text(txt['p_05_hito_03'], "bold 15px Verdana");
        this.p_02_hito_03.textAlign = "center";
        this.p_02_hito_03.lineHeight = 17;
        this.p_02_hito_03.lineWidth = 137;
        this.p_02_hito_03.setTransform(734.2, 322.7+incremento);
        this.p_02_hito_02 = new cjs.Text(txt['p_05_hito_02'], "bold 12px Verdana");
        this.p_02_hito_02.textAlign = "center";
        this.p_02_hito_02.lineHeight = 14;
        this.p_02_hito_02.lineWidth = 137;
        this.p_02_hito_02.setTransform(393.9, 325.2+incremento);
        this.p_02_hito_01 = new cjs.Text(txt['p_05_hito_01'], "italic bold 15px Verdana");
        this.p_02_hito_01.textAlign = "center";
        this.p_02_hito_01.lineHeight = 17;
        this.p_02_hito_01.lineWidth = 151;
        this.p_02_hito_01.setTransform(126.9, 330.7+incremento);
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_EEUU("single", 1);
        else
            this.mc_boto_03 = new lib.mc_EEUU();
        this.mc_boto_03.setTransform(736.2, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_EEUU(), 3);
        if (boton == 1)
            this.mc_boto_01 = new lib.mc_ilustracion("single", 1);
        else
            this.mc_boto_01 = new lib.mc_ilustracion();
        this.mc_boto_01.setTransform(128.9, 344.2, 0.967, 0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_ilustracion(), 3);
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_absolutismo("single", 1);
        else
            this.mc_boto_02 = new lib.mc_absolutismo();
        this.mc_boto_02.setTransform(395.9, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_absolutismo(), 3);
        this.mc_boto_01.on("click", function (evt) {
            putStage(new lib.frame5(1));
        });
        this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame5(2));
        });
        this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame5(3));
        });
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



        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape.setTransform(146.2, 424.1, 1.047, 1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_1.setTransform(736.3, 496.1, 1.047, 1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_2.setTransform(128.7, 448.6, 1.047, 1);
        this.text = new cjs.Text("1776", "bold 16px Verdana");
        this.text.textAlign = "center";
        this.text.lineHeight = 18;
        this.text.lineWidth = 49;
        this.text.setTransform(734.3, 379);
        this.instance_1 = new lib.Symbol1("synched", 0);
        this.instance_1.setTransform(736.8, 390.9, 1, 1, 0, 0, 0, 24.3, 11.3);
        this.text_1 = new cjs.Text("1762", "bold 16px Verdana");
        this.text_1.textAlign = "center";
        this.text_1.lineHeight = 18;
        this.text_1.lineWidth = 49;
        this.text_1.setTransform(126.8, 379);
        this.instance_2 = new lib.Symbol1("synched", 0);
        this.instance_2.setTransform(128.8, 391.7, 1, 0.862, 0, 0, 0, 24.3, 11.3);
        this.text_2 = new cjs.Text("1780", "bold 18px Verdana");
        this.text_2.lineHeight = 20;
        this.text_2.lineWidth = 58;
        this.text_2.setTransform(883.4, 376.5);
        this.text_3 = new cjs.Text("1760", "bold 18px Verdana");
        this.text_3.lineHeight = 20;
        this.text_3.lineWidth = 55;
        this.text_3.setTransform(15.4, 376.5);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
        this.shape_3.setTransform(475.9, 409.1);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#8BB1D8").s().p("Eh+gAB8IAAj3MD9BAAAIAAD3g");
        this.shape_4.setTransform(476, 446.1, 0.536, 1.044);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#F4B06D").s().p("EgimAB4IAAjvMBFNAAAIAADvg");
        this.shape_5.setTransform(822.9, 496.6, 0.39, 1.079);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#E44E6D").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_6.setTransform(476, 519.2, 0.999, 0.919);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_7.setTransform(476, 471.1, 0.999, 0.919);
        
        
        this.instance_3 = new lib.Mapadebits24();
        this.instance_3.setTransform(127.8, 349.5);
        this.instance_4 = new lib.Mapadebits23();
        this.instance_4.setTransform(145.2, 354.9);
        this.instance_5 = new lib.Mapadebits22();
        this.instance_5.setTransform(735.3, 363.4);
        
        
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#E9754A").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_8.setTransform(476, 422.1, 0.999, 0.919);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#E44E6D").s().p("EhuAAB4IAAjvMDcBAAAIAADvg");
        this.shape_9.setTransform(476, 495.2, 0.616, 1.079);
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame4());
        });
        this.btn_next.on("click", function (evt) {
            putStage(new lib.frame6());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.shape_9, this.shape_8,  this.instance_4, this.instance_3, this.shape_7, this.shape_6, this.shape_5, this.shape_4, this.shape_3, this.text_3, this.text_2, this.instance_2, this.text_1, this.instance_1, this.text, this.shape_2, this.shape_1, this.shape, this.mc_boto_02, this.instance_5,this.mc_boto_01, this.mc_boto_03, this.btn_inicio, this.p_02_hito_01, this.p_02_hito_02, this.p_02_hito_03, this.p_01_tabla_03, this.p_01_tabla_04, this.p_01_tabla_05, this.p_01_tabla_01, this.p_01_tabla_02, this.btn_zona_4_01, this.btn_zona_4_02, this.btn_zona_4_03, this.btn_next, this.btn_prev);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
    (lib.frame6 = function (boton) {
        this.initialize();
        clearTexts();
        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
        this.btn_prev = new lib.Boto_Navegacio();
        this.btn_prev.setTransform(25.4, 469.5, 0.862, 1.395, 0, 0, 180);
        new cjs.ButtonHelper(this.btn_prev, 0, 1, 2, false, new lib.Boto_Navegacio(), 3);
          this.p_01_tabla_07 = new cjs.Text("Napoleon B.", "bold 14px Verdana");
        this.p_01_tabla_07.textAlign = "center";
        this.p_01_tabla_07.lineHeight = 14;
        this.p_01_tabla_07.lineWidth = 172;
        this.p_01_tabla_07.setTransform(816.1, 436+incremento);
        
        this.p_01_tabla_06 = new cjs.Text("Revolución        francesa", "bold 14px Verdana");
        this.p_01_tabla_06.textAlign = "center";
        this.p_01_tabla_06.lineHeight = 14;
        this.p_01_tabla_06.lineWidth = 253;
        this.p_01_tabla_06.setTransform(498.3, 436+incremento);
        
        this.p_01_tabla_05 = new cjs.Text("Estados Unidos", "bold 14px Verdana");
        this.p_01_tabla_05.textAlign = "center";
        this.p_01_tabla_05.lineHeight = 16;
        this.p_01_tabla_05.lineWidth = 859;
        this.p_01_tabla_05.setTransform(473.9, 483.9+incremento);
        
        this.p_02_hito_05 = new cjs.Text(txt['p_06_hito_05'], "bold 15px Verdana");
        this.p_02_hito_05.textAlign = "center";
        this.p_02_hito_05.lineHeight = 17;
        this.p_02_hito_05.lineWidth = 137;
        this.p_02_hito_05.setTransform(795.9, 322.7+incremento);
        
        this.p_02_hito_04 = new cjs.Text(txt['p_06_hito_04'], "bold 15px Verdana");
        this.p_02_hito_04.textAlign = "center";
        this.p_02_hito_04.lineHeight = 17;
        this.p_02_hito_04.lineWidth = 137;
        this.p_02_hito_04.setTransform(632.4, 332.7+incremento);
        this.p_01_tabla_04 = new cjs.Text("América colonial", "bold 14px Verdana");
        this.p_01_tabla_04.textAlign = "center";
        this.p_01_tabla_04.lineHeight = 16;
        this.p_01_tabla_04.lineWidth = 857;
        this.p_01_tabla_04.setTransform(473.3, 509.2+incremento);
        
        this.p_01_tabla_03 = new cjs.Text("Parlamentarismo", "bold 14px Verdana");
        this.p_01_tabla_03.textAlign = "center";
        this.p_01_tabla_03.lineHeight = 16;
        this.p_01_tabla_03.lineWidth = 857;
        this.p_01_tabla_03.setTransform(473.3, 460.8+incremento);
        
        this.p_01_tabla_02 = new cjs.Text("Ilustración", "bold 14px Verdana");
        this.p_01_tabla_02.textAlign = "center";
        this.p_01_tabla_02.lineHeight = 16;
        this.p_01_tabla_02.lineWidth = 314;
        this.p_01_tabla_02.setTransform(202, 436+incremento);
        
        this.p_02_hito_03 = new cjs.Text(txt['p_06_hito_03'], "bold 15px Verdana");
        this.p_02_hito_03.textAlign = "center";
        this.p_02_hito_03.lineHeight = 17;
        this.p_02_hito_03.lineWidth = 137;
        this.p_02_hito_03.setTransform(467.4, 322.7+incremento);
        
        this.p_01_tabla_01 = new cjs.Text("Absolutismo", "bold 14px Verdana");
        this.p_01_tabla_01.textAlign = "center";
        this.p_01_tabla_01.lineHeight = 16;
        this.p_01_tabla_01.lineWidth = 863;
        this.p_01_tabla_01.setTransform(473.1, 412.4+incremento);
        
        this.p_02_hito_02 = new cjs.Text(txt['p_06_hito_02'], "bold 15px Verdana");
        this.p_02_hito_02.textAlign = "center";
        this.p_02_hito_02.lineHeight = 17;
        this.p_02_hito_02.lineWidth = 137;
        this.p_02_hito_02.setTransform(303.2, 322.7);
        
        this.p_02_hito_01 = new cjs.Text(txt['p_06_hito_01'], "bold 15px Verdana");
        this.p_02_hito_01.textAlign = "center";
        this.p_02_hito_01.lineHeight = 17;
        this.p_02_hito_01.lineWidth = 138;
        this.p_02_hito_01.setTransform(138.4, 322.7);
        
        if (boton == 5)
            this.mc_boto_05 = new lib.mc_Napoleon("single", 1);
        else
            this.mc_boto_05 = new lib.mc_Napoleon();
        this.mc_boto_05.setTransform(797.9, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_05, 0, 1, 2, false, new lib.mc_Napoleon(), 3);
        
        if (boton == 4)
            this.mc_boto_04 = new lib.mc_Napoleon("single", 1);
        else
            this.mc_boto_04 = new lib.mc_Napoleon();
        this.mc_boto_04.setTransform(634.4, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_Napoleon(), 3);
        
        if (boton == 3)
            this.mc_boto_03 = new lib.mc_Revolucion("single", 1);
        else
            this.mc_boto_03 = new lib.mc_Revolucion();
        this.mc_boto_03.setTransform(469.4, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_Revolucion(), 3);
        
        if (boton == 1)
            this.mc_boto_01 = new lib.mc_EEUU("single", 1);
        else
            this.mc_boto_01 = new lib.mc_EEUU();
        this.mc_boto_01.setTransform(140.1, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_EEUU(), 3);
        
        if (boton == 2)
            this.mc_boto_02 = new lib.mc_Revolucion("single", 1);
        else
            this.mc_boto_02 = new lib.mc_Revolucion();
        this.mc_boto_02.setTransform(305.2, 344.2, 0.89, 0.89);
        new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_Revolucion(), 3);
        
        this.mc_boto_01.on("click", function (evt) {
            putStage(new lib.frame6(1));
        });
        this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame6(2));
        });
        this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame6(3));
        });
        this.mc_boto_04.on("click", function (evt) {
            putStage(new lib.frame6(4));
        });
        this.mc_boto_05.on("click", function (evt) {
            putStage(new lib.frame6(5));
        });
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
            if (boton == 5) {
            this.popup = new lib.popup_zona_5_05("single", 0);
            this.addChild(this.popup);
        }
       
        
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_1.setTransform(895, 448.3, 1.047, 1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_2.setTransform(728.2, 448.3, 1.047, 1);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_3.setTransform(511.6, 447.7, 1.047, 1);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_4.setTransform(366.9, 447.7, 1.047, 1);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#000000").s().p("AgdAfQgMgNAAgSQAAgRAMgOQAMgNARABQASgBAMANQAMAOAAARQAAASgMANQgMAOgSAAQgRAAgMgOg");
        this.shape_5.setTransform(294.7, 497.1, 1.047, 1);
        
        
        this.text = new cjs.Text("1799", "bold 16px Verdana");
        this.text.textAlign = "center";
        this.text.lineHeight = 18;
        this.text.lineWidth = 49;
        this.text.setTransform(682.8, 379);
        
        this.instance_2 = new lib.Symbol1("synched", 0);
        this.instance_2.setTransform(684.8, 390.3, 1, 1, 0, 0, 0, 24.3, 11.3);
        this.text_1 = new cjs.Text("1789", "bold 16px Verdana");
        this.text_1.textAlign = "center";
        this.text_1.lineHeight = 18;
        this.text_1.lineWidth = 49;
        this.text_1.setTransform(333.2, 379);
        
        this.instance_3 = new lib.Symbol1("synched", 0);
        this.instance_3.setTransform(335.3, 390.3, 1, 1, 0, 0, 0, 24.3, 11.3);
        
       
        this.text_2 = new cjs.Text("1787", "bold 16px Verdana");
        this.text_2.textAlign = "center";
        this.text_2.lineHeight = 18;
        this.text_2.lineWidth = 49;
        this.text_2.setTransform(212.7, 379);
        this.instance_4 = new lib.Symbol1("synched", 0);
        this.instance_4.setTransform(214.8, 390.3, 1, 1, 0, 0, 0, 24.3, 11.3);
        this.text_3 = new cjs.Text("1804", "bold 18px Verdana");
        this.text_3.lineHeight = 20;
        this.text_3.lineWidth = 58;
        this.text_3.setTransform(880.2, 376.5);
        this.text_4 = new cjs.Text("1793", "bold 16px Verdana");
        this.text_4.textAlign = "center";
        this.text_4.lineHeight = 18;
        this.text_4.lineWidth = 49;
        this.text_4.setTransform(509.6, 379);
        this.text_5 = new cjs.Text("1780", "bold 18px Verdana");
        this.text_5.lineHeight = 20;
        this.text_5.lineWidth = 55;
        this.text_5.setTransform(14.9, 376.5);
        
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f().s("#1D1D1B").ss(4).p("EhD1AAAMCHrAAA");
        this.shape_7.setTransform(475.5, 409.1);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#C0D36D").s().p("AuLB8IAAj3IcXAAIAAD3g");
        this.shape_8.setTransform(818.8, 447);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#C398BF").s().p("A8LB8IAAj3MA4XAAAIAAD3g");
        this.shape_9.setTransform(547.5, 447);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#8BB1D8").s().p("Ekn6AB8IAAj3MJP1AAAIAAD3g");
        this.shape_10.setTransform(474, 447.5, 0.229, 1.044);
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#F4B06D").s().p("EhQ9AB4IAAjvMCh8AAAIAADvg");
        this.shape_11.setTransform(474, 496.6, 0.837, 1.079);
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#E44E6D").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_12.setTransform(474, 520.6, 0.999, 0.919);
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#8FBF67").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_13.setTransform(474, 472.5, 0.999, 0.919);
        
        this.instance_1 = new lib.Mapadebits28();
        this.instance_1.setTransform(800, 354);
        
        
        this.instance_5 = new lib.Mapadebits28();
        this.instance_5.setTransform(634.9, 354);
        
        
        this.instance_6 = new lib.Mapadebits27();
        this.instance_6.setTransform(469.7, 354);
        
        this.instance_7 = new lib.Mapadebits26();
        this.instance_7.setTransform(302.3, 350.1);
        
        this.instance_8 = new lib.Mapadebits25();
        this.instance_8.setTransform(139.5, 346.9);
        
        
        
        
         /*this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#1A171B").ss(2, 1, 1).p("AAAklIAAJL");
        this.shape_6.setTransform(906.3, 425.4, 1, 0.857);*/
        
        
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#E9754A").s().p("EhD3ACNIAAkZMCHvAAAIAAEZg");
        this.shape_14.setTransform(474, 423.5, 0.999, 0.919);
        this.btn_prev.on("click", function (evt) {
            putStage(new lib.frame5());
        });
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });
        this.addChild(this.logo, this.titulo, this.home, this.anterior, this.siguiente, this.shape_16, this.shape_15, this.shape_14, this.shape_13, this.shape_12, this.shape_11, this.shape_10, this.shape_9, this.shape_8, this.shape_7, this.text_5, this.text_4, this.text_3, this.instance_4, this.text_2,  this.instance_9 , this.instance_3, this.text_1, this.instance_2, this.text, this.shape_5, this.shape_4, this.shape_3, this.shape_2, this.shape_1, this.instance_1,this.instance_8, this.instance_7, this.instance_6, this.instance_5, this.mc_boto_02, this.mc_boto_01, this.mc_boto_03, this.mc_boto_04, this.mc_boto_05, this.btn_inicio, this.p_02_hito_01, this.p_02_hito_02, this.p_01_tabla_01, this.p_02_hito_03, this.p_01_tabla_02, this.p_01_tabla_03, this.p_01_tabla_04, this.p_02_hito_04, this.p_02_hito_05, this.p_01_tabla_05, this.p_01_tabla_06, this.p_01_tabla_07, this.btn_zona_5_01, this.btn_zona_5_02, this.btn_zona_5_03, this.btn_zona_5_04, this.btn_zona_5_05, this.btn_next, this.btn_prev);
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
    function texto(escena, texto, side, ancho, top) {
        width = 730 - ancho;
        top = top || -482;
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
    (lib.Bitmap16 = function () {
        this.initialize(img.Bitmap16);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 667, 1000);
    (lib.Bitmap17 = function () {
        this.initialize(img.Bitmap17);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 600, 743);
    (lib.Bitmap18 = function () {
        this.initialize(img.Bitmap18);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 600, 450);
    (lib.Bitmap19copy = function () {
        this.initialize(img.Bitmap19copy);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 500, 753);
    (lib.Bitmap19 = function () {
        this.initialize(img.Bitmap19);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 445, 576);
    (lib.Bitmap20 = function () {
        this.initialize(img.Bitmap20);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 900, 601);
    (lib.Bitmap20copy = function () {
        this.initialize(img.Bitmap20copy);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 500, 334);
    (lib.Bitmap21 = function () {
        this.initialize(img.Bitmap21);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 900, 579);
    (lib.Bitmap22 = function () {
        this.initialize(img.Bitmap22);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 632, 768);
    (lib.Bitmap23 = function () {
        this.initialize(img.Bitmap23);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 593, 768);
    (lib.Bitmap24 = function () {
        this.initialize(img.Bitmap24);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 617, 768);
    (lib.Bitmap25 = function () {
        this.initialize(img.Bitmap25);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 616, 768);
    (lib.Bitmap26 = function () {
        this.initialize(img.Bitmap26);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 614, 768);
    (lib.Bitmap27 = function () {
        this.initialize(img.Bitmap27);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 611, 768);
    (lib.Bitmap28 = function () {
        this.initialize(img.Bitmap28);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 600, 448);
    (lib.Bitmap29 = function () {
        this.initialize(img.Bitmap29);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 534, 768);
    (lib.Bitmap30 = function () {
        this.initialize(img.Bitmap30);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 571, 768);
    (lib.Bitmap31 = function () {
        this.initialize(img.Bitmap31);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 900, 623);
    (lib.Bitmap32 = function () {
        this.initialize(img.Bitmap32);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 470, 768);
    (lib.Mapadebits1 = function () {
        this.initialize(img.Mapadebits1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 79, 64);
    (lib.Mapadebits10 = function () {
        this.initialize(img.Mapadebits10);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 46);
    (lib.Mapadebits11 = function () {
        this.initialize(img.Mapadebits11);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 131, 64);
    (lib.Mapadebits12 = function () {
        this.initialize(img.Mapadebits12);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 66);
    (lib.Mapadebits13 = function () {
        this.initialize(img.Mapadebits13);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 80, 42);
    (lib.Mapadebits14 = function () {
        this.initialize(img.Mapadebits14);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 73);
    (lib.Mapadebits15 = function () {
        this.initialize(img.Mapadebits15);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 103);
    (lib.Mapadebits16 = function () {
        this.initialize(img.Mapadebits16);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 103);
    (lib.Mapadebits17 = function () {
        this.initialize(img.Mapadebits17);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 60);
    (lib.Mapadebits18 = function () {
        this.initialize(img.Mapadebits18);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 167, 79);
    (lib.Mapadebits19 = function () {
        this.initialize(img.Mapadebits19);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 83, 95);
    (lib.Mapadebits2 = function () {
        this.initialize(img.Mapadebits2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 79, 64);
    (lib.Mapadebits20 = function () {
        this.initialize(img.Mapadebits20);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 104, 95);
    (lib.Mapadebits21 = function () {
        this.initialize(img.Mapadebits21);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 63, 122);
    (lib.Mapadebits22 = function () {
        this.initialize(img.Mapadebits22);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 135);
    (lib.Mapadebits23 = function () {
        this.initialize(img.Mapadebits23);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 253, 70);
    (lib.Mapadebits24 = function () {
        this.initialize(img.Mapadebits24);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 103);
    (lib.Mapadebits25 = function () {
        this.initialize(img.Mapadebits25);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 156, 155);
    (lib.Mapadebits26 = function () {
        this.initialize(img.Mapadebits26);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 66, 101);
    (lib.Mapadebits27 = function () {
        this.initialize(img.Mapadebits27);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 43, 99);
    (lib.Mapadebits28 = function () {
        this.initialize(img.Mapadebits28);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 95, 98);
    (lib.Mapadebits29 = function () {
        this.initialize(img.Mapadebits29);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 85, 38);
    (lib.Mapadebits3 = function () {
        this.initialize(img.Mapadebits3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 79, 64);
    (lib.Mapadebits4 = function () {
        this.initialize(img.Mapadebits4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 79, 64);
    (lib.Mapadebits5 = function () {
        this.initialize(img.Mapadebits5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 79, 64);
    (lib.Mapadebits6 = function () {
        this.initialize(img.Mapadebits6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 217);
    (lib.Mapadebits7 = function () {
        this.initialize(img.Mapadebits7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 152);
    (lib.Mapadebits8 = function () {
        this.initialize(img.Mapadebits8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 128);
    (lib.Mapadebits9 = function () {
        this.initialize(img.Mapadebits9);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 2, 78);
    (lib.montesquieu_Gran = function () {
        this.initialize(img.montesquieu_Gran);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 625, 750);
    (lib.montesquieu_ok = function () {
        this.initialize(img.montesquieu_ok);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 487, 750);
    (lib.pautas950x608nuevosarreglos = function () {
        this.initialize(img.pautas950x608nuevosarreglos);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 950, 608);
    (lib.MarcaAgua = function () {
        this.initialize();
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#666666").s().p("AipD2QhNg0gghTQgVg2AAg5QABgVACgWQARhuBThIQBUhKBwAAQBvAABUBKQBUBIASBuQADAYAAATQAAA4gXA3QggBThMA0QhMA2hdAAQhdAAhMg2gAhPDYQgRANgIAMQAyAWA2AAQA2AAAzgWQgHgNgTgMQgigZgtAAQgsAAgjAZgAgxBvQg8AFg4AXQgcALgPAKQAeAoApAZQANgRAYgTQAughA2AAQA7AAAuAhQAWARALARQApgaAcglQgPgKgagKQg2gYg9gFQgVgFgeAAQgcAAgVAFgAjuBvQAGAMAEAHQANgKAZgJQBXgpBngBQBnABBZApQAYAIAOAJIAIgRQAUguAFgwIoNAAQADAuAVAwgAEFgTQAAgPgDgJQgHgtgXgoQgYAPgnAOQhRAdhUAAQhTAAhSgcQgqgOgWgPQgXAogHAsIgDAYIILAAIAAAAgAjRidQATANAjANQBJAbBSAAQBSAABHgdQAjgNATgPQgZghgvgeQgKASgWAQQgsAig7AAQg7AAgtgiQgQgKgLgOIgIgKQgsAegaAlgAhqjvIAGAHQAHAJALAGQAjAZAvAAQAwgBAhgZQAPgLAHgOQgygSg1gBQg4AAgyAXg");
        this.shape.setTransform(30, 30);
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 60, 60);
    (lib.Symbol2 = function () {
        this.initialize();
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("EhKNAvgMAAAhe/MCUbAAAMAAABe/g");
        this.shape.setTransform(475, 304);
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 950.1, 608);
    (lib.Symbol1 = function () {
        this.initialize();
        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AjxBwIAAjfIHjAAIAADfg");
        this.shape.setTransform(24.3, 11.3);
        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 48.5, 22.5);
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
    (lib.btn_cerrar = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.text = new cjs.Text("x", "bold 22px Verdana", "#FFFFFF");
        this.text.textAlign = "center";
        this.text.lineHeight = 24;
        this.text.lineWidth = 27;
        this.text.setTransform(-2.7, -12.8);
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
        this.shape.setTransform(-0.4, 5.1, 0.673, 0.673);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
        this.shape_1.setTransform(-0.4, 5.1, 0.673, 0.673);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.text, p: {scaleX: 1, scaleY: 1, x: -2.7, y: -12.8}}]}).to({state: [{t: this.shape, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.text, p: {scaleX: 1.1, scaleY: 1.1, x: -4.2, y: -14.4}}]}, 1).to({state: [{t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.text, p: {scaleX: 1, scaleY: 1, x: -2.7, y: -12.8}}]}, 1).to({state: [{t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_1}, {t: this.text, p: {scaleX: 1, scaleY: 1, x: -2.7, y: -12.8}}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16.2, -12.8, 31, 33.1);
    (lib.btn_ampliar = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.text = new cjs.Text("+", "bold 22px Verdana", "#FFFFFF");
        this.text.textAlign = "center";
        this.text.lineHeight = 24;
        this.text.lineWidth = 27;
        this.text.setTransform(-2.7, -12.8);
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADNDNQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYIAAFFQAAAZgSARg");
        this.shape.setTransform(-0.4, 5.1, 0.673, 0.673);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
        this.shape_1.setTransform(-0.4, 5.1, 0.673, 0.673);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#1E120D").ss(1, 0, 1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
        this.shape_2.setTransform(-0.4, 5.3, 0.74, 0.74);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape}, {t: this.text, p: {scaleX: 1, scaleY: 1, x: -2.7, y: -12.8}}]}).to({state: [{t: this.shape_1, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.shape_2, p: {scaleX: 0.74, scaleY: 0.74, y: 5.3}}, {t: this.text, p: {scaleX: 1.1, scaleY: 1.1, x: -4.2, y: -14.4}}]}, 1).to({state: [{t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.text, p: {scaleX: 1, scaleY: 1, x: -2.7, y: -12.8}}]}, 1).to({state: [{t: this.shape_1, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.shape_2, p: {scaleX: 0.673, scaleY: 0.673, y: 5.1}}, {t: this.text, p: {scaleX: 1, scaleY: 1, x: -2.7, y: -12.8}}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16.2, -12.8, 31, 33.1);
    (lib.Boto_Navegacio = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer: Arrow
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AhviXIDfCXIjfCYg");
        this.shape.setTransform(3.8, 0.6, 0.673, 0.673, 0, 180, 0);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgfA6IAAhzIA/AAIAABzg");
        this.shape_1.setTransform(-6.2, 0.7);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#000000").s().p("AiPCpIAAlSIEfAAIAAFSg");
        this.shape_2.setTransform(4.3, 1.1);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1, p: {scaleX: 1, scaleY: 1, x: -6.2}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: 3.8}}]}).to({state: [{t: this.shape_1, p: {scaleX: 1.2, scaleY: 1.2, x: -7.6}}, {t: this.shape, p: {scaleX: 0.808, scaleY: 0.808, x: 4.4}}]}, 1).to({state: [{t: this.shape_1, p: {scaleX: 1, scaleY: 1, x: -6.2}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: 3.8}}]}, 1).to({state: [{t: this.shape_1, p: {scaleX: 1, scaleY: 1, x: -6.2}}, {t: this.shape, p: {scaleX: 0.673, scaleY: 0.673, x: 3.8}}, {t: this.shape_2}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9.5, -9.6, 20.9, 20.6);
    (lib.btn_p01_Fals = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E19481").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape.setTransform(0, 0, 0.89, 0.89);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape}]}, 3).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);
    (lib.btn_05 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D3D1CA").s("#000000").ss(1, 1, 1).rc(-87, -9.35, 174, 18.7, 6, 0, 0, 6);
        this.shape.setTransform(87.5, 9.4, 1.006, 1, 0, 0, 180);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(211,209,202,0.502)").s("rgba(0,0,0,0.498)").ss(1, 1, 1).rc(-87, -9.35, 174, 18.7, 6, 0, 0, 6);
        this.shape_1.setTransform(87.5, 9.4, 1.006, 1, 0, 0, 180);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape}]}, 1).to({state: [{t: this.shape}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 175.1, 18.7);
    (lib.btn_03 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
        this.shape.setTransform(87.5, 9.4, 1.006, 1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D3D1CA").s().p("AtkBdIAAi5IbJAAIAAC5g");
        this.shape_1.setTransform(87.5, 9.4, 1.006, 1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("rgba(26,23,27,0.498)").p("ANmBdI7LAAIAAi5IbLAAg");
        this.shape_2.setTransform(87.5, 9.4, 1.006, 1);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(211,209,202,0.502)").s().p("AtkBdIAAi5IbJAAIAAC5g");
        this.shape_3.setTransform(87.5, 9.4, 1.006, 1);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).to({state: [{t: this.shape_3}, {t: this.shape_2}]}, 1).to({state: [{t: this.shape_1}, {t: this.shape}]}, 1).to({state: [{t: this.shape_1}, {t: this.shape}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 175.1, 18.7);
    (lib.btn_02 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#1A171B").p("ANmBdI7LAAIAAi5IbLAAg");
        this.shape.setTransform(87.5, 9.4, 1.006, 1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AtlBdIAAi5IbLAAIAAC5g");
        this.shape_1.setTransform(87.5, 9.4, 1.006, 1);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("rgba(26,23,27,0.498)").p("ANmBdI7LAAIAAi5IbLAAg");
        this.shape_2.setTransform(87.5, 9.4, 1.006, 1);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(211,209,202,0.502)").s().p("AtkBdIAAi5IbJAAIAAC5g");
        this.shape_3.setTransform(87.5, 9.4, 1.006, 1);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#FFFFFF").p("ANmBdI7LAAIAAi5IbLAAg");
        this.shape_4.setTransform(87.5, 9.4, 1.006, 1);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AtkBdIAAi5IbJAAIAAC5g");
        this.shape_5.setTransform(87.5, 9.4, 1.006, 1);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).to({state: [{t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}]}, 1).to({state: [{t: this.shape_1}, {t: this.shape}]}, 1).to({state: [{t: this.shape_1}, {t: this.shape}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 175.1, 18.7);
    (lib.btn_01 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D3D1CA").s("#000000").ss(1, 1, 1).rc(-87, -9.35, 174, 18.7, 6, 0, 0, 6);
        this.shape.setTransform(87.5, 9.4, 1.006, 1);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(211,209,202,0.498)").s("rgba(0,0,0,0.502)").ss(1, 1, 1).rc(-87, -9.35, 174, 18.7, 6, 0, 0, 6);
        this.shape_1.setTransform(87.5, 9.4, 1.006, 1);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape}]}, 1).to({state: [{t: this.shape}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 175.1, 18.7);
    (lib.mc_Revolucion = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CEBDD2").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#C398BF").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape_2}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-80, -29.9, 160.3, 60);
    (lib.mc_parlamentarismo = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D2E6C3").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#8FBF67").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape_2}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-80, -29.9, 160.3, 60);
    (lib.mc_Napoleon = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E6EEC5").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#C0D36D").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape_2}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-80, -29.9, 160.3, 60);
    (lib.mc_ilustracion = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D1E0F0").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#8BB1D8").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape_2}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-80, -29.9, 160.3, 60);
    (lib.mc_EEUU = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FBE0C5").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F4B06D").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape_2}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-80, -29.9, 160.3, 60);
    (lib.mc_absolutismo = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F6C8B7").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E9754A").s("#1D1D1B").rr(-80.15, -30, 160.3, 60, 6);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape_2}]}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-80, -29.9, 160.3, 60);
    (lib.popup_zona_5_05 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Napoleón Bonaparte, emperador de Francia (1804-1814).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 312;
        this.pie_foto.setTransform(324.9, 549.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame6(5));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap32();
        this.instance_1.setTransform(324.9, 43.7, 0.637, 0.638);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_05 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_05.textAlign = "center";
        this.p_02_hito_05.lineHeight = 17;
        this.p_02_hito_05.lineWidth = 137;
        this.p_02_hito_05.setTransform(795.9, 322.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_5_05("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_05}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap32();
        this.instance_3.setTransform(77.9, -20.1, 0.749, 0.75);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 418;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_5_05'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(77.9, -20.1, 790.6, 576.4);
    (lib.popup_zona_5_04 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Napoleón Bonaparte, cónsul de Francia (1799-1804).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 429;
        this.pie_foto.setTransform(291.7, 553.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame6(4));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap17();
        this.instance_1.setTransform(274.4, 14.3, 0.728, 0.729);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_04 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_04.textAlign = "center";
        this.p_02_hito_04.lineHeight = 17;
        this.p_02_hito_04.lineWidth = 137;
        this.p_02_hito_04.setTransform(632.4, 332.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_5_04("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_04}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap17();
        this.instance_3.setTransform(145.9, 38.1, 0.373, 0.374);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 474;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_5_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(145.9, 38.1, 777.3, 339.4);
    (lib.popup_zona_5_03 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Aplicación de la pena capital a Luis XVI, rey de Francia (1774-1792).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 659;
        this.pie_foto.setTransform(145.3, 516.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame6(3));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap31();
        this.instance_1.setTransform(145.3, 44.8, 0.733, 0.733);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_03.textAlign = "center";
        this.p_02_hito_03.lineHeight = 17;
        this.p_02_hito_03.lineWidth = 137;
        this.p_02_hito_03.setTransform(467.4, 322.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_5_03("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_03}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap31();
        this.instance_3.setTransform(61.3, 38.3, 0.439, 0.439);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 418;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_5_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(61.3, 38.3, 806.2, 329.2);
    (lib.popup_zona_5_02 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("La Asamblea Nacional, reunida en el Jeu de Paume (1789).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 485;
        this.pie_foto.setTransform(122.7, 512.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame6(2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap21();
        this.instance_1.setTransform(122.7, 43.4, 0.783, 0.783);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_02 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_02.textAlign = "center";
        this.p_02_hito_02.lineHeight = 17;
        this.p_02_hito_02.lineWidth = 137;
        this.p_02_hito_02.setTransform(303.2, 322.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_5_02("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_02}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap21();
        this.instance_3.setTransform(51.6, 40.1, 0.467, 0.467);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "18px Verdana");
        this.txt_popup.lineHeight = 20;
        this.txt_popup.lineWidth = 437;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_5_02'], "Verdana", "18px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(51.6, 40.1, 834.4, 327.3);
    (lib.popup_zona_5_01 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Constitución de los Estados Unidos de América, redactada durante la convención de Filadelfia (1787).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 638;
        this.pie_foto.setTransform(154.3, 487.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame6(1));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap20copy();
        this.instance_1.setTransform(154.3, 45.6, 1.283, 1.278);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_01 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_01.textAlign = "center";
        this.p_02_hito_01.lineHeight = 17;
        this.p_02_hito_01.lineWidth = 138;
        this.p_02_hito_01.setTransform(138.4, 322.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_5_01("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_01}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap20copy();
        this.instance_3.setTransform(80, 39.3, 0.699, 0.696);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 418;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_5_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(69.2, 39.3, 798.2, 328.7);
    (lib.popup_zona_4_03 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("T. Jefferson, R. Sherman, B. Franklin, R. Livingston y J. Adams firmando la Declaración de Independencia de los Estados Unidos (4 de julio de 1776).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 677;
        this.pie_foto.setTransform(154.5, 502.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame5(3));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap20();
        this.instance_1.setTransform(154.5, 44.3, 0.737, 0.736);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_03.textAlign = "center";
        this.p_02_hito_03.lineHeight = 17;
        this.p_02_hito_03.lineWidth = 137;
        this.p_02_hito_03.setTransform(733.8, 322.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_4_03("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_03}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap20();
        this.instance_3.setTransform(38.1, 39.1, 0.457, 0.456);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 441;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_4_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(38.1, 39.1, 851.9, 328.3);
    (lib.popup_zona_4_02 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Catalina II, emperatriz de Rusia (1762-1796).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(298.9, 542.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame5(2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap30();
        this.instance_1.setTransform(298.9, 44, 0.625, 0.626);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_02 = new cjs.Text("", "12px Verdana", "#FFFFFF");
        this.p_02_hito_02.textAlign = "center";
        this.p_02_hito_02.lineHeight = 14;
        this.p_02_hito_02.lineWidth = 137;
        this.p_02_hito_02.setTransform(393.4, 325.2);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_4_02("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_02}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap30();
        this.instance_3.setTransform(79.9, -10.4, 0.61, 0.61);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 418;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_4_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(79.9, -10.4, 787.6, 468.7);
    (lib.popup_zona_4_01 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Jean-Jacques Rousseau, filósofo y pedagogo suizo.", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 343;
        this.pie_foto.setTransform(301.4, 543.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame5(1));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap29();
        this.instance_1.setTransform(301.4, 28, 0.65, 0.651);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_01 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_01.textAlign = "center";
        this.p_02_hito_01.lineHeight = 17;
        this.p_02_hito_01.lineWidth = 151;
        this.p_02_hito_01.setTransform(126.4, 332.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_4_01("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_01}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap29();
        this.instance_3.setTransform(81.9, -16.8, 0.65, 0.651);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 476;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_4_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(51.1, -16.8, 873.9, 500);
    (lib.popup_zona_3_05 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Fuegos artificiales ante el ayuntamiento de París por la proclamación de la paz en Francia en 1763.", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 626;
        this.pie_foto.setTransform(164.6, 521.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame4(4));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap28();
        this.instance_1.setTransform(164.6, 43.6, 1.035, 1.033);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_05 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_05.textAlign = "center";
        this.p_02_hito_05.lineHeight = 17;
        this.p_02_hito_05.lineWidth = 137;
        this.p_02_hito_05.setTransform(795.9, 322.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_3_05("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_05}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap28();
        this.instance_3.setTransform(75.8, 40.7, 0.602, 0.601);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 489;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_3_05'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(75.8, 40.7, 862.2, 326.8);
    (lib.popup_zona_3_04 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Denis Diderot, escritor y filósofo francés.", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(281.2, 542.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame4(3));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap25();
        this.instance_1.setTransform(281.2, 44.3, 0.628, 0.628);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_04 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_04.textAlign = "center";
        this.p_02_hito_04.lineHeight = 17;
        this.p_02_hito_04.lineWidth = 137;
        this.p_02_hito_04.setTransform(632.4, 333.2);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_3_04("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_04}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap25();
        this.instance_3.setTransform(78.2, 3.3, 0.571, 0.571);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 418;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_3_04'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(78.2, 3.3, 789.3, 438.4);
    (lib.popup_zona_3_03 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Montesquieu, escritor y filósofo francés.", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(311.5, 551.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame4(2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap16();
        this.instance_1.setTransform(311.5, 43.1, 0.493, 0.493);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_03.textAlign = "center";
        this.p_02_hito_03.lineHeight = 17;
        this.p_02_hito_03.lineWidth = 137;
        this.p_02_hito_03.setTransform(467.4, 322.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_3_03("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_03}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap16();
        this.instance_3.setTransform(70.3, -1.8, 0.55, 0.55);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 487;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_3_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(70.3, -1.8, 865.7, 549.7);
    (lib.popup_zona_3_02 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("María Teresa, archiduquesa y emperatriz de Austria (1740-1780).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(278.8, 544.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame4(1));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap26();
        this.instance_1.setTransform(281.8, 45.1, 0.635, 0.635);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_02 = new cjs.Text("Guerra de Sucesión austriaca", "bold 13px Verdana", "#FFFFFF");
        this.p_02_hito_02.textAlign = "center";
        this.p_02_hito_02.lineHeight = 15;
        this.p_02_hito_02.lineWidth = 139;
        this.p_02_hito_02.setTransform(203.6, 324.1);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_3_02("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_02}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap26();
        this.instance_3.setTransform(80.3, 7.8, 0.567, 0.568);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 418;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_3_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(80.3, 7.8, 787.2, 436.4);
    (lib.popup_zona_3_01 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Federico II, rey de Prusia (1740-1786).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(284.1, 538.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame3(3));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap27();
        this.instance_1.setTransform(284.1, 43.2, 0.624, 0.625);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_01 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_01.textAlign = "center";
        this.p_02_hito_01.lineHeight = 17;
        this.p_02_hito_01.lineWidth = 138;
        this.p_02_hito_01.setTransform(836.3, 322.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_3_01("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_01}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap27();
        this.instance_3.setTransform(77.1, 42.2, 0.576, 0.576);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 487;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_3_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(77.1, 42.2, 858.9, 442.5);
    (lib.popup_zona_2_03 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Peñón de Gibraltar.", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(314.3, 531.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame3(3));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap19copy();
        this.instance_1.setTransform(314.3, 27.4, 0.65, 0.65);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_03.textAlign = "center";
        this.p_02_hito_03.lineHeight = 17;
        this.p_02_hito_03.lineWidth = 157;
        this.p_02_hito_03.setTransform(822.8, 322.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_2_03("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_03}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap19copy();
        this.instance_3.setTransform(68.2, -152.8, 0.739, 0.739);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 467;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_2_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(68.2, -152.8, 847.8, 556.7);
    (lib.popup_zona_2_02 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Voltaire, escritor y filósofo francés.", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(284.1, 557.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame3(2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap24();
        this.instance_1.setTransform(284.1, 66, 0.619, 0.62);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_02 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_02.textAlign = "center";
        this.p_02_hito_02.lineHeight = 17;
        this.p_02_hito_02.lineWidth = 137;
        this.p_02_hito_02.setTransform(647.2, 333.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_2_02("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_02}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap24();
        this.instance_3.setTransform(81.5, 4.8, 0.567, 0.568);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 465;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_2_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(81.5, 4.8, 832.5, 436.4);
    (lib.popup_zona_2_01 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Montesquieu, escritor y filósofo francés.", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(272.3, 545.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame3(1));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.montesquieu_Gran();
        this.instance_1.setTransform(272.3, 43.9, 0.649, 0.649);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.p_02_hito_00 = new cjs.Text("Montesquieu", "bold 15px Verdana", "#FFFFFF");
        this.p_02_hito_00.textAlign = "center";
        this.p_02_hito_00.lineHeight = 17;
        this.p_02_hito_00.lineWidth = 137;
        this.p_02_hito_00.setTransform(118.6, 333.7);
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_2_01("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}, {t: this.p_02_hito_00}]}).to({state: []}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.montesquieu_ok();
        this.instance_3.setTransform(134.7, 29.9, 0.615, 0.615);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 418;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_2_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(50.1, 29.9, 817.4, 461.6);
    (lib.popup_zona_1_03 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        // Layer 5
        this.pie_foto = new cjs.Text("Luis XIV, rey de Francia (1643-1715).", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(290.2, 540.5);
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame2(3));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 6
        this.instance_1 = new lib.Bitmap19();
        this.instance_1.setTransform(290.2, 44.9, 0.833, 0.833);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 7
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
        // Layer 8
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_1_03("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_01).to({_off: true}, 1).wait(2));
        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("A6iUtMAAAgpZMA1GAAAMAAAApZg");
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 255, y: 176.1}).wait(1).to({graphics: null, x: 0, y: 0}).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap19();
        this.instance_3.setTransform(85, 30.6, 0.769, 0.769);
        this.instance_3.mask = mask;
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.p_02_hito_03 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_03.textAlign = "center";
        this.p_02_hito_03.lineHeight = 17;
        this.p_02_hito_03.lineWidth = 137;
        this.p_02_hito_03.setTransform(766.9, 322.7);
        this.txt_popup = new cjs.Text("", "20px Verdana");
        this.txt_popup.lineHeight = 22;
        this.txt_popup.lineWidth = 470;
        this.txt_popup.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_1_03'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup = new cjs.DOMElement(html);
        this.txt_popup.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup}, {t: this.p_02_hito_03}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(85, 30.6, 834, 443.1);
    (lib.popup_zona_1_02 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame2(2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}]}, 2).wait(1));
        // Layer 5
        this.instance_1 = new lib.Bitmap18();
        this.instance_1.setTransform(210.7, 106.1, 0.881, 0.88);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}]}, 2).wait(1));
        // Layer 6
        this.pie_foto = new cjs.Text("Peñón de Gibraltar.", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(210.7, 516.5);
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_2}, {t: this.pie_foto}]}, 2).wait(1));
        // Layer 7
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_1_02("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get(this.btn_ampliar_01).to({_off: true}, 1).wait(2));
        // PopUp
        this.instance_3 = new lib.Bitmap18();
        this.instance_3.setTransform(85, 43.6, 0.567, 0.566);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.p_02_hito_02 = new cjs.Text("", "15px Verdana", "#FFFFFF");
        this.p_02_hito_02.textAlign = "center";
        this.p_02_hito_02.lineHeight = 17;
        this.p_02_hito_02.lineWidth = 137;
        this.p_02_hito_02.setTransform(582.8, 322.7);
        this.txt_popup_1_02 = new cjs.Text("abi", "20px Verdana");
        this.txt_popup_1_02.lineHeight = 22;
        this.txt_popup_1_02.lineWidth = 491;
        this.txt_popup_1_02.setTransform(443, 44.3);
        var html = createDiv(txt['txt_popup_1_02'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_1_02 = new cjs.DOMElement(html);
        this.txt_popup_1_02.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup_1_02}, {t: this.p_02_hito_02}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(85, 43.6, 853, 323.8);
    (lib.popup_zona_1_01 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.btn_cerrar = new lib.btn_cerrar();
        this.btn_cerrar.setTransform(892.9, 53.9);
        new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar(), 3);
        this.btn_cerrar.on("click", function (evt) {
            putStage(new lib.frame2(1));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.btn_cerrar}]}, 2).wait(1));
        // Layer 11
        this.pie_foto = new cjs.Text("John Locke, filósofo inglés.", "15px Verdana");
        this.pie_foto.lineHeight = 17;
        this.pie_foto.lineWidth = 398;
        this.pie_foto.setTransform(274.3, 547);
        this.instance_1 = new lib.Bitmap22();
        this.instance_1.setTransform(274.2, 43.6, 0.636, 0.636);
        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance_1}, {t: this.pie_foto}]}, 2).wait(1));
        this.btn_ampliar_01 = new lib.btn_ampliar();
        this.btn_ampliar_01.setTransform(404.9, 60.9);
        new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);
        this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
            putStage(new lib.popup_zona_1_01("single", 2));
        });
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.btn_ampliar_01}]}).to({state: []}, 1).wait(2));
        // PopUp
        var mask = new cjs.Shape();
        mask.graphics.drawRect(90, 40, 340, 265);
        this.shape = new lib.Bitmap22();
        this.shape.mask = mask;
        this.shape.setTransform(90, 40, 0.53, .53);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // MapaFons
        this.txt_popup_1_01 = new cjs.Text("", "20px Verdana");
        this.txt_popup_1_01.lineHeight = 22;
        this.txt_popup_1_01.lineWidth = 475;
        this.txt_popup_1_01.setTransform(445.2, 44.4);
        var html = createDiv(txt['txt_popup_1_01'], "Verdana", "20px", '450px', '10px', "20px", "185px", "left");
        this.txt_popup_1_01 = new cjs.DOMElement(html);
        this.txt_popup_1_01.setTransform(445, 44 - 610);
        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.txt_popup_1_01}]}).to({state: []}, 1).to({state: []}, 1).wait(1));
        // Layer 12
        this.instance_2 = new lib.Symbol2("synched", 0);
        this.instance_2.setTransform(475, 304, 1, 1, 0, 0, 0, 475, 304);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition: 0, _off: false}, 0).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(70.4, 43.6, 853.6, 329.7);
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