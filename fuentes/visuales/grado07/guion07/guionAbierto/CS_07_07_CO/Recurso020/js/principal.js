(function (lib, img, cjs, txt) {

    var p; // shortcut to reference prototypes

// stage content:
    (lib.frame1 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0,0,0,0,0,0);
        titulo1(this,txt['titol']);

	this.txt_boto_03 = new cjs.Text(txt['txt_boto_03'], "bold 16px Verdana");
	this.txt_boto_03.textAlign = "center";
	this.txt_boto_03.lineHeight = 18;
	this.txt_boto_03.lineWidth = 130;
	this.txt_boto_03.setTransform(778.4,412.8);

	this.txt_boto_02 = new cjs.Text(txt['txt_boto_02'], "bold 16px Verdana");
	this.txt_boto_02.textAlign = "center";
	this.txt_boto_02.lineHeight = 18;
	this.txt_boto_02.lineWidth = 175;
	this.txt_boto_02.setTransform(778.8,318.7);

	this.txt_boto_01 = new cjs.Text(txt['txt_boto_01'], "bold 16px Verdana");
	this.txt_boto_01.textAlign = "center";
	this.txt_boto_01.lineHeight = 18;
	this.txt_boto_01.lineWidth = 102;
	this.txt_boto_01.setTransform(779.3,224.6);

	this.mc_boto_01 = new lib.mc_01();
	this.mc_boto_01.setTransform(755,232.6,1,1,0,0,0,95,15);
	new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_01(), 3);
  this.mc_boto_01.on("click", function (evt) {
        putStage(new lib.frame2());
    });
	this.mc_boto_03 = new lib.mc_01();
	this.mc_boto_03.setTransform(755,420.8,1,1,0,0,0,95,15);
	new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_01(), 3);
 this.mc_boto_03.on("click", function (evt) {
        putStage(new lib.frame4());
    });
	this.mc_boto_02 = new lib.mc_01();
	this.mc_boto_02.setTransform(755,326.7,1,1,0,0,0,95,15);
	new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_01(), 3);
 this.mc_boto_02.on("click", function (evt) {
        putStage(new lib.frame3());
    });
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("EhKGAvUMAAAheoMCUNAAAMAAABeog");
	this.shape.setTransform(475.4,304,1.001,1.004);

	this.instance = new lib.europa_ok();
	this.instance.setTransform(0.5,0,0.653,0.626);
        this.addChild(this.instance,this.logo, this.titulo, this.shape,this.mc_boto_02,this.mc_boto_03,this.mc_boto_01,this.txt_boto_01,this.txt_boto_02,this.txt_boto_03,this.btn_01,this.btn_02,this.btn_03);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame2 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 1, 0, 0);
      // Capa 1
	this.relieve_12 = new cjs.Text(txt['relieve_12'], "bold 16px Verdana");
	this.relieve_12.textAlign = "center";
	this.relieve_12.lineHeight = 18;
	this.relieve_12.lineWidth = 137;
	this.relieve_12.setTransform(264.2,453.6);

	this.relieve_11 = new cjs.Text(txt['relieve_11'], "bold 16px Verdana");
	this.relieve_11.textAlign = "center";
	this.relieve_11.lineHeight = 18;
	this.relieve_11.lineWidth = 136;
	this.relieve_11.setTransform(304.6,246.6);

	this.relieve_10 = new cjs.Text(txt['relieve_10'], "bold 16px Verdana");
	this.relieve_10.textAlign = "center";
	this.relieve_10.lineHeight = 18;
	this.relieve_10.lineWidth = 136;
	this.relieve_10.setTransform(857.5,145.8);

	this.relieve_09 = new cjs.Text(txt['relieve_09'], "bold 16px Verdana");
	this.relieve_09.textAlign = "center";
	this.relieve_09.lineHeight = 18;
	this.relieve_09.lineWidth = 114;
	this.relieve_09.setTransform(275.5,395.2);

	this.relieve_08 = new cjs.Text(txt['relieve_08'], "bold 16px Verdana");
	this.relieve_08.textAlign = "center";
	this.relieve_08.lineHeight = 18;
	this.relieve_08.lineWidth = 137;
	this.relieve_08.setTransform(692.4,262.1);

	this.relieve_07 = new cjs.Text(txt['relieve_07'], "bold 16px Verdana");
	this.relieve_07.textAlign = "center";
	this.relieve_07.lineHeight = 18;
	this.relieve_07.lineWidth = 137;
	this.relieve_07.setTransform(823.6,426.4);

	this.relieve_06 = new cjs.Text(txt['relieve_06'], "bold 16px Verdana");
	this.relieve_06.textAlign = "center";
	this.relieve_06.lineHeight = 18;
	this.relieve_06.lineWidth = 137;
	this.relieve_06.setTransform(593.4,381.3);

	this.relieve_05 = new cjs.Text(txt['relieve_05'], "bold 16px Verdana");
	this.relieve_05.textAlign = "center";
	this.relieve_05.lineHeight = 18;
	this.relieve_05.lineWidth = 136;
	this.relieve_05.setTransform(596.9,475.6);

	this.relieve_04 = new cjs.Text(txt['relieve_04'], "bold 16px Verdana");
	this.relieve_04.textAlign = "center";
	this.relieve_04.lineHeight = 18;
	this.relieve_04.lineWidth = 136;
	this.relieve_04.setTransform(434.1,482.4);

	this.relieve_03 = new cjs.Text(txt['relieve_03'], "bold 16px Verdana");
	this.relieve_03.textAlign = "center";
	this.relieve_03.lineHeight = 18;
	this.relieve_03.lineWidth = 136;
	this.relieve_03.setTransform(471.8,107.2);

	this.relieve_02 = new cjs.Text(txt['relieve_02'], "bold 16px Verdana");
	this.relieve_02.textAlign = "center";
	this.relieve_02.lineHeight = 18;
	this.relieve_02.lineWidth = 137;
	this.relieve_02.setTransform(489.9,421.1);

	this.relieve_01 = new cjs.Text(txt['relieve_01'], "bold 16px Verdana");
	this.relieve_01.textAlign = "center";
	this.relieve_01.lineHeight = 18;
	this.relieve_01.lineWidth = 135;
	this.relieve_01.setTransform(421.7,375.3);

	this.mc_boto_12 = new lib.mc_boto();
	this.mc_boto_12.setTransform(265.9,462.8,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_12, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_11 = new lib.mc_boto();
	this.mc_boto_11.setTransform(306.8,263.3,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_11, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_10 = new lib.mc_boto();
	this.mc_boto_10.setTransform(859.8,153.4,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_10, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_09 = new lib.mc_boto();
	this.mc_boto_09.setTransform(277.8,411.7,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_09, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_08 = new lib.mc_boto();
	this.mc_boto_08.setTransform(695,279.9,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_08, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_07 = new lib.mc_boto();
	this.mc_boto_07.setTransform(825.6,434,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_07, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_06 = new lib.mc_boto();
	this.mc_boto_06.setTransform(595.7,390.1,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_06, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_05 = new lib.mc_boto();
	this.mc_boto_05.setTransform(599.2,493.2,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_05, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_04 = new lib.mc_boto();
	this.mc_boto_04.setTransform(436.2,491.4,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_02 = new lib.mc_boto();
	this.mc_boto_02.setTransform(492.1,438.3,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_03 = new lib.mc_boto();
	this.mc_boto_03.setTransform(473.9,124.7,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_boto(), 3);

	this.mc_boto_01 = new lib.mc_boto();
	this.mc_boto_01.setTransform(424.3,382.7,1,1,0,0,0,70.5,21.4);
	new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_boto(), 3);
 this.mc_boto_01.on("click", function (evt) {
            putStage(new lib.frame2p(1));
        });
 this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame2p(2));
        });
this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame2p(3));
        });
this.mc_boto_04.on("click", function (evt) {
            putStage(new lib.frame2p(4));
        });
this.mc_boto_05.on("click", function (evt) {
            putStage(new lib.frame2p(5));
        });
this.mc_boto_06.on("click", function (evt) {
            putStage(new lib.frame2p(6));
        });
this.mc_boto_07.on("click", function (evt) {
            putStage(new lib.frame2p(7));
        });
this.mc_boto_08.on("click", function (evt) {
            putStage(new lib.frame2p(8));
        });
this.mc_boto_09.on("click", function (evt) {
            putStage(new lib.frame2p(9));
        });
this.mc_boto_10.on("click", function (evt) {
            putStage(new lib.frame2p(10));
        });
this.mc_boto_11.on("click", function (evt) {
            putStage(new lib.frame2p(11));
        });
this.mc_boto_12.on("click", function (evt) {
            putStage(new lib.frame2p(12));
        });
	this.instance = new lib.europa_ok();
	this.instance.setTransform(-0.5,0,0.653,0.626);
        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.instance,this.logo, this.titulo, this.home, this.mc_boto_01,this.mc_boto_03,this.mc_boto_02,this.mc_boto_04,this.mc_boto_05,this.mc_boto_06,this.mc_boto_07,this.mc_boto_08,this.mc_boto_09,this.mc_boto_10,this.mc_boto_11,this.mc_boto_12,this.relieve_01,this.relieve_02,this.relieve_03,this.relieve_04,this.relieve_05,this.relieve_06,this.relieve_07,this.relieve_08,this.relieve_09,this.relieve_10,this.relieve_11,this.relieve_12);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
 (lib.frame2p = function (popup) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        if (popup==1)
        this.popup=new lib.popup_relieve_01();
    if (popup==2)
        this.popup=new lib.popup_relieve_02();
    if (popup==3)
        this.popup=new lib.popup_relieve_03();
    if (popup==4)
        this.popup=new lib.popup_relieve_04();
    if (popup==5)
        this.popup=new lib.popup_relieve_05();
    if (popup==6)
        this.popup=new lib.popup_relieve_06();
    if (popup==7)
        this.popup=new lib.popup_relieve_07();
    if (popup==8)
        this.popup=new lib.popup_relieve_08();
    if (popup==9)
        this.popup=new lib.popup_relieve_09();
    if (popup==10)
        this.popup=new lib.popup_relieve_10();
    if (popup==11)
        this.popup=new lib.popup_relieve_11();
    if (popup==12)
        this.popup=new lib.popup_relieve_12();

       
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame2());
        });

        this.addChild(this.popup,this.logo, this.titulo, this.cerrar );
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

    (lib.frame3 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
      // Capa 1
	this.mares_12 = new cjs.Text(txt['mares_12'], "bold 16px Verdana");
	this.mares_12.textAlign = "center";
	this.mares_12.lineHeight = 18;
	this.mares_12.lineWidth = 137;
	this.mares_12.setTransform(334.2,547.3+incremento);

	this.mares_11 = new cjs.Text(txt['mares_11'], "bold 16px Verdana");
	this.mares_11.textAlign = "center";
	this.mares_11.lineHeight = 18;
	this.mares_11.lineWidth = 136;
	this.mares_11.setTransform(417.3,358.6+incremento);

	this.mares_10 = new cjs.Text(txt['mares_10'], "bold 16px Verdana");
	this.mares_10.textAlign = "center";
	this.mares_10.lineHeight = 18;
	this.mares_10.lineWidth = 136;
	this.mares_10.setTransform(78.7,403.8+incremento);

	this.mares_09 = new cjs.Text(txt['mares_09'], "bold 16px Verdana");
	this.mares_09.textAlign = "center";
	this.mares_09.lineHeight = 18;
	this.mares_09.lineWidth = 114;
	this.mares_09.setTransform(458.3,145.8+incremento);

	this.mares_08 = new cjs.Text(txt['mares_08'], "bold 16px Verdana");
	this.mares_08.textAlign = "center";
	this.mares_08.lineHeight = 18;
	this.mares_08.lineWidth = 137;
	this.mares_08.setTransform(547.9,424.6+incremento);

	this.mares_07 = new cjs.Text(txt['mares_07'], "bold 16px Verdana");
	this.mares_07.textAlign = "center";
	this.mares_07.lineHeight = 18;
	this.mares_07.lineWidth = 137;
	this.mares_07.setTransform(703.8,452.5+incremento);

	this.mares_06 = new cjs.Text(txt['mares_06'], "bold 16px Verdana");
	this.mares_06.textAlign = "center";
	this.mares_06.lineHeight = 18;
	this.mares_06.lineWidth = 137;
	this.mares_06.setTransform(630.3,512.5+incremento);

	this.mares_05 = new cjs.Text(txt['mares_05'], "bold 16px Verdana");
	this.mares_05.textAlign = "center";
	this.mares_05.lineHeight = 18;
	this.mares_05.lineWidth = 136;
	this.mares_05.setTransform(365.6,229.9+incremento);

	this.mares_04 = new cjs.Text(txt['mares_04'], "bold 16px Verdana");
	this.mares_04.textAlign = "center";
	this.mares_04.lineHeight = 18;
	this.mares_04.lineWidth = 136;
	this.mares_04.setTransform(516.1,250.5+incremento);

	this.mares_03 = new cjs.Text(txt['mares_03'], "bold 16px Verdana");
	this.mares_03.textAlign = "center";
	this.mares_03.lineHeight = 18;
	this.mares_03.lineWidth = 136;
	this.mares_03.setTransform(240.4,278.3+incremento);

	this.mares_02 = new cjs.Text(txt['mares_02'], "bold 16px Verdana");
	this.mares_02.textAlign = "center";
	this.mares_02.lineHeight = 18;
	this.mares_02.lineWidth = 137;
	this.mares_02.setTransform(258.6,88.1+incremento);

	this.mares_01 = new cjs.Text(txt['mares_01'], "bold 16px Verdana");
	this.mares_01.textAlign = "center";
	this.mares_01.lineHeight = 18;
	this.mares_01.lineWidth = 135;
	this.mares_01.setTransform(277.2,476.6+incremento);

	this.mc_boto_12 = new lib.mc_boto();
	this.mc_boto_12.setTransform(336,555.7,1,1,0,0,0,70.5,21.4);

	this.mc_boto_11 = new lib.mc_boto();
	this.mc_boto_11.setTransform(419.6,375.3,1,1,0,0,0,70.5,21.4);

	this.mc_boto_10 = new lib.mc_boto();
	this.mc_boto_10.setTransform(81,421.9,1,1,0,0,0,70.5,21.4);

	this.mc_boto_09 = new lib.mc_boto();
	this.mc_boto_09.setTransform(460.5,163.2,1,1,0,0,0,70.5,21.4);

	this.mc_boto_08 = new lib.mc_boto();
	this.mc_boto_08.setTransform(550.4,442.4,1,1,0,0,0,70.5,21.4);

	this.mc_boto_07 = new lib.mc_boto();
	this.mc_boto_07.setTransform(705.8,460.1,1,1,0,0,0,70.5,21.4);

	this.mc_boto_06 = new lib.mc_boto();
	this.mc_boto_06.setTransform(632.6,530.3,1,1,0,0,0,70.5,21.4);

	this.mc_boto_05 = new lib.mc_boto();
	this.mc_boto_05.setTransform(367.9,239.2,1,1,0,0,0,70.5,21.4);

	this.mc_boto_04 = new lib.mc_boto();
	this.mc_boto_04.setTransform(518.1,259.5,1,1,0,0,0,70.5,21.4);

	this.mc_boto_02 = new lib.mc_boto();
	this.mc_boto_02.setTransform(260.8,96.4,1,1,0,0,0,70.5,21.4);

	this.mc_boto_03 = new lib.mc_boto();
	this.mc_boto_03.setTransform(242.5,295.9,1,1,0,0,0,70.5,21.4);

	this.mc_boto_01 = new lib.mc_boto();
	this.mc_boto_01.setTransform(279.7,494,1,1,0,0,0,70.5,21.4);

new cjs.ButtonHelper(this.mc_boto_12, 0, 1, 2, false, new lib.mc_boto(), 3);

	new cjs.ButtonHelper(this.mc_boto_11, 0, 1, 2, false, new lib.mc_boto(), 3);

	new cjs.ButtonHelper(this.mc_boto_10, 0, 1, 2, false, new lib.mc_boto(), 3);

	new cjs.ButtonHelper(this.mc_boto_09, 0, 1, 2, false, new lib.mc_boto(), 3);

	new cjs.ButtonHelper(this.mc_boto_08, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_07, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_06, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_05, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_boto(), 3);
 this.mc_boto_01.on("click", function (evt) {
            putStage(new lib.frame3p(1));
        });
 this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame3p(2));
        });
this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame3p(3));
        });
this.mc_boto_04.on("click", function (evt) {
            putStage(new lib.frame3p(4));
        });
this.mc_boto_05.on("click", function (evt) {
            putStage(new lib.frame3p(5));
        });
this.mc_boto_06.on("click", function (evt) {
            putStage(new lib.frame3p(6));
        });
this.mc_boto_07.on("click", function (evt) {
            putStage(new lib.frame3p(7));
        });
this.mc_boto_08.on("click", function (evt) {
            putStage(new lib.frame3p(8));
        });
this.mc_boto_09.on("click", function (evt) {
            putStage(new lib.frame3p(9));
        });
this.mc_boto_10.on("click", function (evt) {
            putStage(new lib.frame3p(10));
        });
this.mc_boto_11.on("click", function (evt) {
            putStage(new lib.frame3p(11));
        });
this.mc_boto_12.on("click", function (evt) {
            putStage(new lib.frame3p(12));
        });
        
	this.instance = new lib.europa_ok();
	this.instance.setTransform(0,0,0.653,0.626);
this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EggKgIpIHMAAAWfJSIJsAAAdXiaIAAI4AJXstIAAKnAHzMuIFAAA");
	this.shape.setTransform(356.4,478.5);

        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.instance,this.logo, this.titulo, this.home, this.mc_boto_01,this.mc_boto_03,this.mc_boto_02,this.mc_boto_04,this.mc_boto_05,this.mc_boto_06,this.mc_boto_07,this.mc_boto_08,this.mc_boto_09,this.mc_boto_10,this.mc_boto_11,this.mc_boto_12,this.mares_01,this.mares_02,this.mares_03,this.mares_04,this.mares_05,this.mares_06,this.mares_07,this.mares_08,this.mares_09,this.mares_10,this.mares_11,this.mares_12,this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame3p = function (popup) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        if (popup==1)
        this.popup=new lib.popup_mares_01();
    if (popup==2)
        this.popup=new lib.popup_mares_02();
    if (popup==3)
        this.popup=new lib.popup_mares_03();
    if (popup==4)
        this.popup=new lib.popup_mares_04();
    if (popup==5)
        this.popup=new lib.popup_mares_05();
    if (popup==6)
        this.popup=new lib.popup_mares_06();
    if (popup==7)
        this.popup=new lib.popup_mares_07();
    if (popup==8)
        this.popup=new lib.popup_mares_08();
    if (popup==9)
        this.popup=new lib.popup_mares_09();
    if (popup==10)
        this.popup=new lib.popup_mares_10();
    if (popup==11)
        this.popup=new lib.popup_mares_11();
    if (popup==12)
        this.popup=new lib.popup_mares_12();

       
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame3());
        });

        this.addChild(this.popup,this.logo, this.titulo, this.cerrar );
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

     (lib.frame4 = function () {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 1, 0, 0, 0, 0);
      // Capa 1
	this.vertiente_05 = new cjs.Text(txt['vertiente_05'], "bold 16px Verdana");
	this.vertiente_05.textAlign = "center";
	this.vertiente_05.lineHeight = 18;
	this.vertiente_05.lineWidth = 136;
	this.vertiente_05.setTransform(873.5,395.8);

	this.vertiente_04 = new cjs.Text(txt['vertiente_04'], "bold 16px Verdana");
	this.vertiente_04.textAlign = "center";
	this.vertiente_04.lineHeight = 18;
	this.vertiente_04.lineWidth = 136;
	this.vertiente_04.setTransform(701.1,438.5);

	this.vertiente_03 = new cjs.Text(txt['vertiente_03'], "bold 16px Verdana");
	this.vertiente_03.textAlign = "center";
	this.vertiente_03.lineHeight = 18;
	this.vertiente_03.lineWidth = 136;
	this.vertiente_03.setTransform(337.4,499.3);

	this.vertiente_02 = new cjs.Text(txt['vertiente_02'], "bold 16px Verdana");
	this.vertiente_02.textAlign = "center";
	this.vertiente_02.lineHeight = 18;
	this.vertiente_02.lineWidth = 137;
	this.vertiente_02.setTransform(165.6,350.4);

	this.vertiente_01 = new cjs.Text(txt['vertiente_01'], "bold 16px Verdana");
	this.vertiente_01.textAlign = "center";
	this.vertiente_01.lineHeight = 18;
	this.vertiente_01.lineWidth = 135;
	this.vertiente_01.setTransform(642.6,13.8);

	this.mc_boto_05 = new lib.mc_botocaspio();
	this.mc_boto_05.setTransform(875.8,414.2,1,1,0,0,0,70.5,21.4);

	this.mc_boto_04 = new lib.mc_botonegro();
	this.mc_boto_04.setTransform(703.1,456.5,1,1,0,0,0,70.5,21.4);

	this.mc_boto_02 = new lib.mc_botoatlantica();
	this.mc_boto_02.setTransform(167.8,367.3,1,1,0,0,0,70.5,21.4);

	this.mc_boto_03 = new lib.mc_botomediterranea();
	this.mc_boto_03.setTransform(339.5,516.9,1,1,0,0,0,70.5,21.4);

	this.mc_boto_01 = new lib.mc_botoatrica();
	this.mc_boto_01.setTransform(645.1,31.2,1,1,0,0,0,70.5,21.4);

	this.instance = new lib.MS_3C_04_10_europa_vertientes();
	this.instance.setTransform(0,0,0.653,0.626);
new cjs.ButtonHelper(this.mc_boto_05, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_04, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_02, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_03, 0, 1, 2, false, new lib.mc_boto(), 3);
	new cjs.ButtonHelper(this.mc_boto_01, 0, 1, 2, false, new lib.mc_boto(), 3);
 this.mc_boto_01.on("click", function (evt) {
            putStage(new lib.frame4p(1));
        });
 this.mc_boto_02.on("click", function (evt) {
            putStage(new lib.frame4p(2));
        });
this.mc_boto_03.on("click", function (evt) {
            putStage(new lib.frame4p(3));
        });
this.mc_boto_04.on("click", function (evt) {
            putStage(new lib.frame4p(4));
        });
this.mc_boto_05.on("click", function (evt) {
            putStage(new lib.frame4p(5));
        });

        
	this.instance = new lib.MS_3C_04_10_europa_vertientes();
	this.instance.setTransform(0,0,0.653,0.626);

        this.home.on("click", function (evt) {
            putStage(new lib.frame1());
        });

        this.addChild(this.instance,this.logo, this.titulo, this.home,this.mc_boto_01,this.mc_boto_03,this.mc_boto_02,this.mc_boto_04,this.mc_boto_05,this.vertiente_01,this.vertiente_02,this.vertiente_03,this.vertiente_04,this.vertiente_05);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);
(lib.frame4p = function (popup) {
        this.initialize();
        clearTexts();

        // Capa 1
        basicos(this, 0, 0, 0, 0, 1);
        if (popup==1)
        this.popup=new lib.popup_vertiente_01();
    if (popup==2)
        this.popup=new lib.popup_vertiente_02();
    if (popup==3)
        this.popup=new lib.popup_vertiente_03();
    if (popup==4)
        this.popup=new lib.popup_vertiente_04();
    if (popup==5)
        this.popup=new lib.popup_vertiente_05();
       
        this.cerrar.on("click", function (evt) {
            putStage(new lib.frame4());
        });

        this.addChild(this.popup,this.logo, this.titulo, this.cerrar );
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 849, 548.3);

  
// symbols:

    function titulo1(escena, texto) {
        var html = createDiv(texto, "Georgia", "31px", '770px', '100px', "20px", "185px", "center");
        escena.titulo = new cjs.DOMElement(html);
        escena.titulo.setTransform(90, -538);
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
   (lib._00078J01 = function() {
	this.initialize(img._00078J01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,612);


(lib._0007LY01 = function() {
	this.initialize(img._0007LY01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,976,750);


(lib._000IRA01 = function() {
	this.initialize(img._000IRA01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1127,750);


(lib._000S5201 = function() {
	this.initialize(img._000S5201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,627);


(lib._001VZN01 = function() {
	this.initialize(img._001VZN01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,633);


(lib._002DWF01 = function() {
	this.initialize(img._002DWF01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1079,750);


(lib._1_100143753 = function() {
	this.initialize(img._1_100143753);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,750);


(lib._10_shutterstock_77575597 = function() {
	this.initialize(img._10_shutterstock_77575597);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,996,750);


(lib._11_shutterstock_82774045 = function() {
	this.initialize(img._11_shutterstock_82774045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1172,750);


(lib._12_shutterstock_79465246 = function() {
	this.initialize(img._12_shutterstock_79465246);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,750);


(lib._13_shutterstock_32779318 = function() {
	this.initialize(img._13_shutterstock_32779318);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,750);


(lib._14_shutterstock_54486355 = function() {
	this.initialize(img._14_shutterstock_54486355);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,750);


(lib._15_shutterstock_84830866 = function() {
	this.initialize(img._15_shutterstock_84830866);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1165,750);


(lib._16_shutterstock_45328417 = function() {
	this.initialize(img._16_shutterstock_45328417);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1129,750);


(lib._17_92017012 = function() {
	this.initialize(img._17_92017012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1129,750);


(lib._18_96698258 = function() {
	this.initialize(img._18_96698258);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1121,750);


(lib._19_131720342 = function() {
	this.initialize(img._19_131720342);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,750);


(lib._2_120904700 = function() {
	this.initialize(img._2_120904700);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1132,750);


(lib._20_99142043 = function() {
	this.initialize(img._20_99142043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4142,750);


(lib._21_shutterstock_34938238 = function() {
	this.initialize(img._21_shutterstock_34938238);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,750);


(lib._22_shutterstock_73532797 = function() {
	this.initialize(img._22_shutterstock_73532797);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,1093);


(lib._23_91567502 = function() {
	this.initialize(img._23_91567502);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,630);


(lib._3_121321568 = function() {
	this.initialize(img._3_121321568);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,618,750);


(lib._4_shutterstock_51939379 = function() {
	this.initialize(img._4_shutterstock_51939379);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1893,750);


(lib._5_shutterstock_84095437 = function() {
	this.initialize(img._5_shutterstock_84095437);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,750);


(lib._6_shutterstock_61768660 = function() {
	this.initialize(img._6_shutterstock_61768660);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,861,750);


(lib._7_shutterstock_28939924 = function() {
	this.initialize(img._7_shutterstock_28939924);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1128,750);


(lib._8_shutterstock_60080284 = function() {
	this.initialize(img._8_shutterstock_60080284);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1121,750);


(lib._9_shutterstock_81227809 = function() {
	this.initialize(img._9_shutterstock_81227809);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,750);


(lib.artic = function() {
	this.initialize(img.artic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1454,972);


(lib.atlantic = function() {
	this.initialize(img.atlantic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1454,972);


(lib.Caspio = function() {
	this.initialize(img.Caspio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1454,972);


(lib.europa_ok = function() {
	this.initialize(img.europa_ok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1454,972);


(lib.mediterr = function() {
	this.initialize(img.mediterr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1454,972);


(lib.MS_3C_04_10_europa_vertientes = function() {
	this.initialize(img.MS_3C_04_10_europa_vertientes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1454,972);


(lib.negro = function() {
	this.initialize(img.negro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1454,972);


(lib.pautas950x608nuevosarreglos = function() {
	this.initialize(img.pautas950x608nuevosarreglos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.rios_limpio = function() {
	this.initialize(img.rios_limpio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1454,972);


(lib.mc_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-89.4,-23.8,178.8,47.6,6);
	this.shape.setTransform(120.6,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-89.4,-23.8,178.8,47.6,6);
	this.shape_1.setTransform(120.6,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-89.4,-23.8,178.8,47.6,6);
	this.shape_2.setTransform(120.6,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.3,1.1,178.8,47.6);


(lib.gris = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AipD2QhNg0gghTQgVg2AAg5QABgVACgWQARhuBThIQBUhKBwAAQBvAABUBKQBUBIASBuQADAYAAATQAAA4gXA3QggBThMA0QhMA2hdAAQhdAAhMg2gAhPDYQgRANgIAMQAyAWA2AAQA2AAAzgWQgHgNgTgMQgigZgtAAQgsAAgjAZgAgxBvQg8AFg4AXQgcALgPAKQAeAoApAZQANgRAYgTQAughA2AAQA7AAAuAhQAWARALARQApgaAcglQgPgKgagKQg2gYg9gFQgVgFgeAAQgcAAgVAFgAjuBvQAGAMAEAHQANgKAZgJQBXgpBngBQBnABBZApQAYAIAOAJIAIgRQAUguAFgwIoNAAQADAuAVAwgAEFgTQAAgPgDgJQgHgtgXgoQgYAPgnAOQhRAdhUAAQhTAAhSgcQgqgOgWgPQgXAogHAsIgDAYIILAAIAAAAgAjRidQATANAjANQBJAbBSAAQBSAABHgdQAjgNATgPQgZghgvgeQgKASgWAQQgsAig7AAQg7AAgtgiQgQgKgLgOIgIgKQgsAegaAlgAhqjvIAGAHQAHAJALAGQAjAZAvAAQAwgBAhgZQAPgLAHgOQgygSg1gBQg4AAgyAXg");
	this.shape.setTransform(30,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.mc_imatge_vertiente_05_int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._23_91567502();
	this.instance.setTransform(0,0,0.722,0.722);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,686,455);


(lib.mc_imatge_vertiente_04_int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._00078J01();
	this.instance.setTransform(0,0,0.673,0.673);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,639.6,412);


(lib.mc_imatge_vertiente_03_int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._001VZN01();
	this.instance.setTransform(0,0,0.618,0.618);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,586.8,391);


(lib.mc_imatge_vertiente_2_int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000S5201();
	this.instance.setTransform(0,0,0.643,0.643);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,610.6,403);


(lib.mc_imatge_vertiente_01_int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._22_shutterstock_73532797();
	this.instance.setTransform(0,0,0.398,0.398);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,378,434.9);


(lib.mc_FonsBlanc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhE9AutMAAAhdZMCJ7AAAMAAABdZg");
	this.shape.setTransform(475,304,1.076,1.017);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.mc_imatge_12_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._002DWF01();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,539.5,375);


(lib.mc_imatge_11_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._9_shutterstock_81227809();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.mc_imatge_10_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._8_shutterstock_60080284();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,560.5,375);


(lib.mc_imatge_09_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._7_shutterstock_28939924();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,564,375);


(lib.mc_imatge_08_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._6_shutterstock_61768660();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,430.5,375);


(lib.mc_imatge_07_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._000IRA01();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563.5,375);


(lib.mc_imatge_06_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._5_shutterstock_84095437();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,375);


(lib.mc_imatge_05_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._4_shutterstock_51939379();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,946.5,375);


(lib.mc_imatge_04_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._0007LY01();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,488,375);


(lib.mc_imatge_03_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._3_121321568();
	this.instance.setTransform(-5.9,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,0,309,375);


(lib.mc_imatge_02_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._2_120904700();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,566,375);


(lib.mc_imatge_01_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._1_100143753();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.btn_boto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape.setTransform(70.5,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_imatge_mares_12_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._21_shutterstock_34938238();
	this.instance.setTransform(1508.9,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1508.9,0,562.5,375);


(lib.mc_imatge_mares_11_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._20_99142043();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2071,375);


(lib.mc_imatge_mares_10_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._19_131720342();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.mc_imatge_mares_09_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._18_96698258();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,560.5,375);


(lib.mc_imatge_mares_08_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._17_92017012();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,564.5,375);


(lib.mc_imatge_mares_07_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._16_shutterstock_45328417();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,564.5,375);


(lib.mc_imatge_mares_06_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._15_shutterstock_84830866();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,582.5,375);


(lib.mc_imatge_mares_05_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._14_shutterstock_54486355();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.mc_imatge_mares_04_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._13_shutterstock_32779318();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.mc_imatge_mares_03_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._12_shutterstock_79465246();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.mc_imatge_mares_02_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._11_shutterstock_82774045();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,586,375);


(lib.mc_imatge_mares_01_Int = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._10_shutterstock_77575597();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,498,375);


(lib.mc_loader_barra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FFFFFF"],[0.894,1],21.4,17.1,-2.9,-25.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape.setTransform(9,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#FFFFFF"],[0.885,0.996],21.5,16.9,-3.1,-24.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_1.setTransform(9,27.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#FFFFFF"],[0.876,0.992],21.5,16.7,-3.3,-24.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_2.setTransform(9,27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#FFFFFF"],[0.867,0.988],21.6,16.4,-3.4,-24.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_3.setTransform(9,27.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#FFFFFF"],[0.858,0.984],21.7,16.2,-3.6,-24.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_4.setTransform(9,27.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#FFFFFF"],[0.849,0.98],21.8,15.9,-3.7,-24.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_5.setTransform(9,27.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#FFFFFF"],[0.84,0.976],21.9,15.7,-3.9,-24).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_6.setTransform(9,27.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#FFFFFF"],[0.832,0.971],21.9,15.4,-4.1,-23.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_7.setTransform(9,27.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#FFFFFF"],[0.823,0.967],22.1,15.2,-4.2,-23.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_8.setTransform(9,27.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","#FFFFFF"],[0.814,0.963],22.1,14.9,-4.4,-23.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_9.setTransform(9,27.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#000000","#FFFFFF"],[0.805,0.959],22.2,14.7,-4.5,-23.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_10.setTransform(9,27.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#000000","#FFFFFF"],[0.796,0.955],22.3,14.5,-4.7,-23.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_11.setTransform(9,27.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#000000","#FFFFFF"],[0.787,0.951],22.4,14.2,-4.8,-22.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_12.setTransform(9,27.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#000000","#FFFFFF"],[0.778,0.947],22.5,13.9,-5,-22.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_13.setTransform(9,27.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#000000","#FFFFFF"],[0.769,0.943],22.5,13.7,-5.2,-22.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_14.setTransform(9,27.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#000000","#FFFFFF"],[0.76,0.939],22.6,13.5,-5.4,-22.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_15.setTransform(9,27.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#000000","#FFFFFF"],[0.751,0.935],22.7,13.2,-5.5,-22.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_16.setTransform(9,27.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#000000","#FFFFFF"],[0.742,0.931],22.8,12.9,-5.7,-22.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_17.setTransform(9,27.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#000000","#FFFFFF"],[0.733,0.927],22.9,12.7,-5.8,-21.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_18.setTransform(9,27.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#000000","#FFFFFF"],[0.724,0.923],23,12.5,-6,-21.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_19.setTransform(9,27.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#000000","#FFFFFF"],[0.715,0.918],23.1,12.2,-6.1,-21.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_20.setTransform(9,27.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#000000","#FFFFFF"],[0.706,0.914],23.2,11.9,-6.3,-21.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_21.setTransform(9,27.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#000000","#FFFFFF"],[0.697,0.91],23.2,11.7,-6.5,-21.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_22.setTransform(9,27.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#000000","#FFFFFF"],[0.688,0.906],23.3,11.5,-6.6,-21).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_23.setTransform(9,27.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#000000","#FFFFFF"],[0.68,0.902],23.4,11.2,-6.8,-20.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_24.setTransform(9,27.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#000000","#FFFFFF"],[0.671,0.898],23.5,10.9,-6.9,-20.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_25.setTransform(9,27.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#000000","#FFFFFF"],[0.662,0.894],23.6,10.7,-7.1,-20.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_26.setTransform(9,27.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#000000","#FFFFFF"],[0.653,0.89],23.6,10.5,-7.3,-20.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_27.setTransform(9,27.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#000000","#FFFFFF"],[0.644,0.886],23.8,10.2,-7.4,-20.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_28.setTransform(9,27.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#000000","#FFFFFF"],[0.635,0.882],23.8,10,-7.6,-19.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_29.setTransform(9,27.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#000000","#FFFFFF"],[0.626,0.878],23.9,9.7,-7.7,-19.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_30.setTransform(9,27.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#000000","#FFFFFF"],[0.617,0.874],24,9.5,-7.9,-19.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_31.setTransform(9,27.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#000000","#FFFFFF"],[0.608,0.869],24.1,9.2,-8,-19.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_32.setTransform(9,27.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#000000","#FFFFFF"],[0.599,0.865],24.2,9,-8.2,-19.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_33.setTransform(9,27.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#000000","#FFFFFF"],[0.59,0.861],24.2,8.7,-8.4,-19.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_34.setTransform(9,27.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#000000","#FFFFFF"],[0.581,0.857],24.3,8.5,-8.5,-18.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_35.setTransform(9,27.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#000000","#FFFFFF"],[0.572,0.853],24.4,8.3,-8.7,-18.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_36.setTransform(9,27.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#000000","#FFFFFF"],[0.563,0.849],24.5,8,-8.8,-18.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_37.setTransform(9,27.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#000000","#FFFFFF"],[0.554,0.845],24.6,7.7,-9,-18.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_38.setTransform(9,27.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#000000","#FFFFFF"],[0.545,0.841],24.7,7.5,-9.2,-18.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_39.setTransform(9,27.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#000000","#FFFFFF"],[0.536,0.837],24.8,7.3,-9.3,-18).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_40.setTransform(9,27.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#000000","#FFFFFF"],[0.528,0.833],24.8,7,-9.5,-17.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_41.setTransform(9,27.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#000000","#FFFFFF"],[0.519,0.829],24.9,6.7,-9.7,-17.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_42.setTransform(9,27.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#000000","#FFFFFF"],[0.51,0.825],25,6.5,-9.8,-17.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_43.setTransform(9,27.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#000000","#FFFFFF"],[0.501,0.821],25.1,6.3,-9.9,-17.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_44.setTransform(9,27.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#000000","#FFFFFF"],[0.492,0.816],25.2,6,-10.1,-17.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_45.setTransform(9,27.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#000000","#FFFFFF"],[0.483,0.812],25.3,5.8,-10.3,-17).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_46.setTransform(9,27.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#000000","#FFFFFF"],[0.474,0.808],25.3,5.5,-10.5,-16.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_47.setTransform(9,27.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#000000","#FFFFFF"],[0.465,0.804],25.4,5.3,-10.6,-16.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_48.setTransform(9,27.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#000000","#FFFFFF"],[0.456,0.8],25.5,5,-10.8,-16.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_49.setTransform(9,27.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#000000","#FFFFFF"],[0.447,0.796],25.6,4.8,-10.9,-16.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_50.setTransform(9,27.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#000000","#FFFFFF"],[0.438,0.792],25.7,4.5,-11.1,-16.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_51.setTransform(9,27.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#000000","#FFFFFF"],[0.429,0.788],25.8,4.3,-11.2,-15.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_52.setTransform(9,27.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#000000","#FFFFFF"],[0.42,0.784],25.9,4,-11.4,-15.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_53.setTransform(9,27.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#000000","#FFFFFF"],[0.411,0.78],25.9,3.8,-11.6,-15.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_54.setTransform(9,27.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#000000","#FFFFFF"],[0.402,0.776],26,3.5,-11.7,-15.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_55.setTransform(9,27.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#000000","#FFFFFF"],[0.393,0.772],26.1,3.3,-11.9,-15.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_56.setTransform(9,27.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#000000","#FFFFFF"],[0.384,0.768],26.2,3,-12,-15.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_57.setTransform(9,27.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#000000","#FFFFFF"],[0.376,0.763],26.3,2.8,-12.2,-14.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_58.setTransform(9,27.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#000000","#FFFFFF"],[0.367,0.759],26.3,2.6,-12.4,-14.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_59.setTransform(9,27.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#000000","#FFFFFF"],[0.358,0.755],26.5,2.3,-12.5,-14.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_60.setTransform(9,27.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#000000","#FFFFFF"],[0.349,0.751],26.5,2.1,-12.7,-14.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_61.setTransform(9,27.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#000000","#FFFFFF"],[0.34,0.747],26.6,1.8,-12.8,-14.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_62.setTransform(9,27.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#000000","#FFFFFF"],[0.331,0.743],26.7,1.6,-13,-14).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_63.setTransform(9,27.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#000000","#FFFFFF"],[0.322,0.739],26.8,1.3,-13.1,-13.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_64.setTransform(9,27.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#000000","#FFFFFF"],[0.313,0.735],26.9,1.1,-13.3,-13.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_65.setTransform(9,27.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#000000","#FFFFFF"],[0.304,0.731],26.9,0.8,-13.5,-13.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_66.setTransform(9,27.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#000000","#FFFFFF"],[0.295,0.727],27,0.6,-13.7,-13.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_67.setTransform(9,27.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#000000","#FFFFFF"],[0.286,0.723],27.1,0.3,-13.8,-13.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_68.setTransform(9,27.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#000000","#FFFFFF"],[0.277,0.719],27.2,0.1,-14,-12.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_69.setTransform(9,27.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#000000","#FFFFFF"],[0.268,0.715],27.3,-0.1,-14.1,-12.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_70.setTransform(9,27.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#000000","#FFFFFF"],[0.259,0.71],27.4,-0.3,-14.3,-12.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_71.setTransform(9,27.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#000000","#FFFFFF"],[0.25,0.706],27.5,-0.5,-14.4,-12.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_72.setTransform(9,27.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#000000","#FFFFFF"],[0.241,0.702],27.6,-0.8,-14.6,-12.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_73.setTransform(9,27.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#000000","#FFFFFF"],[0.232,0.698],27.6,-1.1,-14.8,-12.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_74.setTransform(9,27.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#000000","#FFFFFF"],[0.224,0.694],27.7,-1.3,-14.9,-11.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_75.setTransform(9,27.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#000000","#FFFFFF"],[0.215,0.69],27.8,-1.5,-15.1,-11.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_76.setTransform(9,27.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#000000","#FFFFFF"],[0.206,0.686],27.9,-1.8,-15.2,-11.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_77.setTransform(9,27.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#000000","#FFFFFF"],[0.197,0.682],28,-2.1,-15.4,-11.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_78.setTransform(9,27.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#000000","#FFFFFF"],[0.188,0.678],28,-2.3,-15.6,-11.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_79.setTransform(9,27.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#000000","#FFFFFF"],[0.179,0.674],28.2,-2.5,-15.7,-11).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_80.setTransform(9,27.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#000000","#FFFFFF"],[0.17,0.67],28.2,-2.8,-15.9,-10.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_81.setTransform(9,27.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#000000","#FFFFFF"],[0.161,0.666],28.3,-3.1,-16,-10.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_82.setTransform(9,27.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#000000","#FFFFFF"],[0.152,0.661],28.4,-3.3,-16.2,-10.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_83.setTransform(9,27.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#000000","#FFFFFF"],[0.143,0.657],28.5,-3.5,-16.3,-10.3).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_84.setTransform(9,27.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#000000","#FFFFFF"],[0.134,0.653],28.6,-3.8,-16.5,-10.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_85.setTransform(9,27.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#000000","#FFFFFF"],[0.125,0.649],28.6,-4,-16.7,-9.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_86.setTransform(9,27.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#000000","#FFFFFF"],[0.116,0.645],28.7,-4.3,-16.8,-9.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_87.setTransform(9,27.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#000000","#FFFFFF"],[0.107,0.641],28.8,-4.5,-17,-9.6).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_88.setTransform(9,27.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#000000","#FFFFFF"],[0.098,0.637],28.9,-4.8,-17.1,-9.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_89.setTransform(9,27.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#000000","#FFFFFF"],[0.089,0.633],29,-5,-17.3,-9.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_90.setTransform(9,27.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#000000","#FFFFFF"],[0.08,0.629],29.1,-5.3,-17.5,-9.1).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_91.setTransform(9,27.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#000000","#FFFFFF"],[0.072,0.625],29.2,-5.5,-17.6,-8.9).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_92.setTransform(9,27.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#000000","#FFFFFF"],[0.063,0.621],29.2,-5.7,-17.8,-8.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_93.setTransform(9,27.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#000000","#FFFFFF"],[0.054,0.617],29.3,-6,-18,-8.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_94.setTransform(9,27.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#000000","#FFFFFF"],[0.045,0.613],29.4,-6.3,-18.1,-8.4).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_95.setTransform(9,27.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#000000","#FFFFFF"],[0.036,0.608],29.5,-6.5,-18.2,-8.2).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_96.setTransform(9,27.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#000000","#FFFFFF"],[0.027,0.604],29.6,-6.7,-18.4,-8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_97.setTransform(9,27.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#000000","#FFFFFF"],[0.018,0.6],29.7,-7,-18.6,-7.8).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_98.setTransform(9,27.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#000000","#FFFFFF"],[0.009,0.596],29.7,-7.3,-18.8,-7.7).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_99.setTransform(9,27.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#000000","#FFFFFF"],[0,0.592],29.8,-7.5,-18.9,-7.5).s().p("AhwBxQhEhEgBhdQAAhIAqg9IAjAjQgcAtAAA1QAABJA2A2QA1A2BKgBQA1AAAtgcIAjAkQg9AqhIAAQheAAhDhFg");
	this.shape_100.setTransform(9,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).wait(101));

	// Capa 2
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#000000","#FFFFFF"],[0.894,1],-21.2,-17,3.1,25.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_101.setTransform(18.2,18.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#000000","#FFFFFF"],[0.885,0.996],-21.3,-16.8,3.3,25).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_102.setTransform(18.2,18.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#000000","#FFFFFF"],[0.876,0.992],-21.4,-16.5,3.4,24.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_103.setTransform(18.2,18.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#000000","#FFFFFF"],[0.867,0.988],-21.4,-16.2,3.6,24.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_104.setTransform(18.2,18.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#000000","#FFFFFF"],[0.858,0.984],-21.6,-16,3.7,24.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_105.setTransform(18.2,18.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#000000","#FFFFFF"],[0.849,0.98],-21.6,-15.8,3.9,24.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_106.setTransform(18.2,18.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#000000","#FFFFFF"],[0.84,0.976],-21.7,-15.5,4.1,24.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_107.setTransform(18.2,18.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#000000","#FFFFFF"],[0.832,0.971],-21.8,-15.2,4.2,24).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_108.setTransform(18.2,18.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#000000","#FFFFFF"],[0.823,0.967],-21.9,-15,4.4,23.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_109.setTransform(18.2,18.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#000000","#FFFFFF"],[0.814,0.963],-22,-14.8,4.5,23.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_110.setTransform(18.2,18.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#000000","#FFFFFF"],[0.805,0.959],-22,-14.5,4.7,23.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_111.setTransform(18.2,18.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#000000","#FFFFFF"],[0.796,0.955],-22.1,-14.3,4.9,23.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_112.setTransform(18.2,18.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#000000","#FFFFFF"],[0.787,0.951],-22.2,-14,5,23.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_113.setTransform(18.2,18.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#000000","#FFFFFF"],[0.778,0.947],-22.3,-13.8,5.2,22.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_114.setTransform(18.2,18.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#000000","#FFFFFF"],[0.769,0.943],-22.4,-13.5,5.3,22.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_115.setTransform(18.2,18.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#000000","#FFFFFF"],[0.76,0.939],-22.5,-13.3,5.5,22.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_116.setTransform(18.2,18.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#000000","#FFFFFF"],[0.751,0.935],-22.6,-13,5.6,22.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_117.setTransform(18.2,18.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#000000","#FFFFFF"],[0.742,0.931],-22.7,-12.8,5.8,22.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_118.setTransform(18.2,18.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#000000","#FFFFFF"],[0.733,0.927],-22.7,-12.6,6,22).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_119.setTransform(18.2,18.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#000000","#FFFFFF"],[0.724,0.923],-22.8,-12.3,6.2,21.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_120.setTransform(18.2,18.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#000000","#FFFFFF"],[0.715,0.918],-22.9,-12,6.3,21.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_121.setTransform(18.2,18.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#000000","#FFFFFF"],[0.706,0.914],-23,-11.8,6.5,21.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_122.setTransform(18.2,18.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#000000","#FFFFFF"],[0.697,0.91],-23.1,-11.6,6.6,21.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_123.setTransform(18.2,18.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#000000","#FFFFFF"],[0.688,0.906],-23.1,-11.3,6.8,21.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_124.setTransform(18.2,18.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#000000","#FFFFFF"],[0.68,0.902],-23.3,-11,6.9,21).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_125.setTransform(18.2,18.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#000000","#FFFFFF"],[0.671,0.898],-23.3,-10.8,7.1,20.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_126.setTransform(18.2,18.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#000000","#FFFFFF"],[0.662,0.894],-23.4,-10.6,7.3,20.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_127.setTransform(18.2,18.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#000000","#FFFFFF"],[0.653,0.89],-23.5,-10.3,7.4,20.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_128.setTransform(18.2,18.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#000000","#FFFFFF"],[0.644,0.886],-23.6,-10,7.6,20.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_129.setTransform(18.2,18.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#000000","#FFFFFF"],[0.635,0.882],-23.7,-9.8,7.7,20.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_130.setTransform(18.2,18.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#000000","#FFFFFF"],[0.626,0.878],-23.7,-9.6,7.9,19.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_131.setTransform(18.2,18.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#000000","#FFFFFF"],[0.617,0.874],-23.8,-9.3,8.1,19.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_132.setTransform(18.2,18.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#000000","#FFFFFF"],[0.608,0.869],-23.9,-9.1,8.2,19.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_133.setTransform(18.2,18.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#000000","#FFFFFF"],[0.599,0.865],-24,-8.8,8.4,19.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_134.setTransform(18.2,18.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#000000","#FFFFFF"],[0.59,0.861],-24.1,-8.6,8.5,19.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_135.setTransform(18.2,18.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#000000","#FFFFFF"],[0.581,0.857],-24.1,-8.3,8.7,19.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_136.setTransform(18.2,18.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#000000","#FFFFFF"],[0.572,0.853],-24.3,-8.1,8.8,18.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_137.setTransform(18.2,18.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#000000","#FFFFFF"],[0.563,0.849],-24.3,-7.8,9,18.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_138.setTransform(18.2,18.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#000000","#FFFFFF"],[0.554,0.845],-24.4,-7.6,9.2,18.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_139.setTransform(18.2,18.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#000000","#FFFFFF"],[0.545,0.841],-24.5,-7.3,9.4,18.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_140.setTransform(18.2,18.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#000000","#FFFFFF"],[0.536,0.837],-24.6,-7.1,9.5,18.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_141.setTransform(18.2,18.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#000000","#FFFFFF"],[0.528,0.833],-24.7,-6.8,9.6,18).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_142.setTransform(18.2,18.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#000000","#FFFFFF"],[0.519,0.829],-24.8,-6.6,9.8,17.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_143.setTransform(18.2,18.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#000000","#FFFFFF"],[0.51,0.825],-24.8,-6.4,10,17.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_144.setTransform(18.2,18.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#000000","#FFFFFF"],[0.501,0.821],-24.9,-6.1,10.1,17.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_145.setTransform(18.2,18.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#000000","#FFFFFF"],[0.492,0.816],-25,-5.9,10.3,17.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_146.setTransform(18.2,18.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#000000","#FFFFFF"],[0.483,0.812],-25.1,-5.6,10.5,17.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_147.setTransform(18.2,18.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#000000","#FFFFFF"],[0.474,0.808],-25.2,-5.4,10.6,16.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_148.setTransform(18.2,18.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#000000","#FFFFFF"],[0.465,0.804],-25.3,-5.1,10.7,16.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_149.setTransform(18.2,18.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#000000","#FFFFFF"],[0.456,0.8],-25.4,-4.9,10.9,16.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_150.setTransform(18.2,18.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#000000","#FFFFFF"],[0.447,0.796],-25.4,-4.6,11.1,16.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_151.setTransform(18.2,18.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#000000","#FFFFFF"],[0.438,0.792],-25.5,-4.4,11.3,16.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_152.setTransform(18.2,18.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#000000","#FFFFFF"],[0.429,0.788],-25.6,-4.1,11.4,16.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_153.setTransform(18.2,18.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#000000","#FFFFFF"],[0.42,0.784],-25.7,-3.9,11.6,15.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_154.setTransform(18.2,18.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#000000","#FFFFFF"],[0.411,0.78],-25.8,-3.6,11.7,15.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_155.setTransform(18.2,18.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#000000","#FFFFFF"],[0.402,0.776],-25.8,-3.4,11.9,15.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_156.setTransform(18.2,18.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#000000","#FFFFFF"],[0.393,0.772],-26,-3.1,12,15.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_157.setTransform(18.2,18.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#000000","#FFFFFF"],[0.384,0.768],-26,-2.9,12.2,15.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_158.setTransform(18.2,18.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#000000","#FFFFFF"],[0.376,0.763],-26.1,-2.7,12.4,15).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_159.setTransform(18.2,18.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#000000","#FFFFFF"],[0.367,0.759],-26.2,-2.4,12.5,14.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_160.setTransform(18.2,18.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#000000","#FFFFFF"],[0.358,0.755],-26.3,-2.1,12.7,14.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_161.setTransform(18.2,18.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#000000","#FFFFFF"],[0.349,0.751],-26.4,-1.9,12.8,14.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_162.setTransform(18.2,18.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#000000","#FFFFFF"],[0.34,0.747],-26.4,-1.7,13,14.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_163.setTransform(18.2,18.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#000000","#FFFFFF"],[0.331,0.743],-26.5,-1.4,13.2,14.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_164.setTransform(18.2,18.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#000000","#FFFFFF"],[0.322,0.739],-26.6,-1.1,13.3,14).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_165.setTransform(18.2,18.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#000000","#FFFFFF"],[0.313,0.735],-26.7,-0.9,13.5,13.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_166.setTransform(18.2,18.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#000000","#FFFFFF"],[0.304,0.731],-26.8,-0.7,13.6,13.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_167.setTransform(18.2,18.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#000000","#FFFFFF"],[0.295,0.727],-26.9,-0.4,13.8,13.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_168.setTransform(18.2,18.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#000000","#FFFFFF"],[0.286,0.723],-27,-0.2,13.9,13.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_169.setTransform(18.2,18.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#000000","#FFFFFF"],[0.277,0.719],-27.1,0,14.1,13.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_170.setTransform(18.2,18.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#000000","#FFFFFF"],[0.268,0.715],-27.1,0.2,14.3,12.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_171.setTransform(18.2,18.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#000000","#FFFFFF"],[0.259,0.71],-27.2,0.5,14.5,12.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_172.setTransform(18.2,18.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#000000","#FFFFFF"],[0.25,0.706],-27.3,0.7,14.6,12.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_173.setTransform(18.2,18.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#000000","#FFFFFF"],[0.241,0.702],-27.4,1,14.8,12.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_174.setTransform(18.2,18.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#000000","#FFFFFF"],[0.232,0.698],-27.5,1.2,14.9,12.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_175.setTransform(18.2,18.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#000000","#FFFFFF"],[0.224,0.694],-27.5,1.5,15.1,12.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_176.setTransform(18.2,18.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#000000","#FFFFFF"],[0.215,0.69],-27.7,1.7,15.2,11.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_177.setTransform(18.2,18.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#000000","#FFFFFF"],[0.206,0.686],-27.7,2,15.4,11.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_178.setTransform(18.2,18.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#000000","#FFFFFF"],[0.197,0.682],-27.8,2.2,15.6,11.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_179.setTransform(18.2,18.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#000000","#FFFFFF"],[0.188,0.678],-27.9,2.4,15.7,11.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_180.setTransform(18.2,18.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#000000","#FFFFFF"],[0.179,0.674],-28,2.7,15.9,11.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_181.setTransform(18.2,18.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#000000","#FFFFFF"],[0.17,0.67],-28.1,3,16,11).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_182.setTransform(18.2,18.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#000000","#FFFFFF"],[0.161,0.666],-28.1,3.2,16.2,10.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_183.setTransform(18.2,18.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#000000","#FFFFFF"],[0.152,0.661],-28.2,3.4,16.4,10.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_184.setTransform(18.2,18.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#000000","#FFFFFF"],[0.143,0.657],-28.3,3.7,16.5,10.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_185.setTransform(18.2,18.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#000000","#FFFFFF"],[0.134,0.653],-28.4,4,16.7,10.3).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_186.setTransform(18.2,18.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#000000","#FFFFFF"],[0.125,0.649],-28.5,4.2,16.8,10.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_187.setTransform(18.2,18.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#000000","#FFFFFF"],[0.116,0.645],-28.5,4.4,17,9.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_188.setTransform(18.2,18.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#000000","#FFFFFF"],[0.107,0.641],-28.7,4.7,17.1,9.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_189.setTransform(18.2,18.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#000000","#FFFFFF"],[0.098,0.637],-28.7,5,17.3,9.6).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_190.setTransform(18.2,18.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#000000","#FFFFFF"],[0.089,0.633],-28.8,5.2,17.5,9.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_191.setTransform(18.2,18.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#000000","#FFFFFF"],[0.08,0.629],-28.9,5.4,17.7,9.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_192.setTransform(18.2,18.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#000000","#FFFFFF"],[0.072,0.625],-29,5.7,17.8,9.1).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_193.setTransform(18.2,18.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#000000","#FFFFFF"],[0.063,0.621],-29.1,5.9,17.9,8.9).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_194.setTransform(18.2,18.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#000000","#FFFFFF"],[0.054,0.617],-29.2,6.2,18.1,8.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_195.setTransform(18.2,18.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#000000","#FFFFFF"],[0.045,0.613],-29.2,6.4,18.3,8.5).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_196.setTransform(18.2,18.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#000000","#FFFFFF"],[0.036,0.608],-29.3,6.7,18.4,8.4).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_197.setTransform(18.2,18.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#000000","#FFFFFF"],[0.027,0.604],-29.4,6.9,18.6,8.2).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_198.setTransform(18.2,18.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#000000","#FFFFFF"],[0.018,0.6],-29.5,7.2,18.8,8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_199.setTransform(18.2,18.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#000000","#FFFFFF"],[0.009,0.596],-29.6,7.4,18.9,7.8).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_200.setTransform(18.2,18.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#000000","#FFFFFF"],[0,0.592],-29.7,7.7,19,7.7).s().p("ABpCTQAcguAAgzQAAhKg2g2Qg1g2hKAAQg1AAgsAdIgkgkQA8gqBJAAQBdABBFBEQBDBEAABeQAABHgpA8g");
	this.shape_201.setTransform(18.2,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101}]}).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[]},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,0,45.7,45.6);


(lib.fnd_loader = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhKNAu4MAAAhdvMCUbAAAMAAABdvg");
	this.shape.setTransform(475,304.1,1,1.014);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608.1);


(lib.btn_inicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

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
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.text = new cjs.Text("x", "bold 22px Verdana", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 27;
	this.text.setTransform(-2.7,-12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1E120D").ss(1,0,1).p("ADfCjQAAAZgSARQgRASgZAAIlFAAQgYAAgSgSQgSgRAAgZIAAlFQAAgYASgSQASgSAYAAIFFAAQAZAAARASQASASAAAYg");
	this.shape.setTransform(-0.4,5.1,0.673,0.673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E120D").s().p("AiiDeQgYAAgSgRQgRgSAAgZIAAlEQAAgYARgSQASgRAYAAIFEAAQAZAAASARQARASAAAYIAAFEQAAAZgRASQgSARgZAAg");
	this.shape_1.setTransform(-0.4,5.1,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]}).to({state:[{t:this.shape_1,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.shape,p:{scaleX:0.74,scaleY:0.74,y:5.3}},{t:this.text,p:{scaleX:1.1,scaleY:1.1,x:-4.2,y:-14.4}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.shape,p:{scaleX:0.673,scaleY:0.673,y:5.1}},{t:this.text,p:{scaleX:1,scaleY:1,x:-2.7,y:-12.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-12.8,31,33.1);


(lib.btn_ampliar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

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


(lib.btn_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-95,-15,190,30,6);
	this.shape.setTransform(120.3,24.9,0.937,1.571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_botonegro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape.setTransform(70.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_1.setTransform(70.5,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_2.setTransform(70.5,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,42.7);


(lib.mc_botomediterranea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape.setTransform(70.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_1.setTransform(70.5,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_2.setTransform(70.5,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,42.7);


(lib.mc_botocaspio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape.setTransform(70.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_1.setTransform(70.5,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_2.setTransform(70.5,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,42.7);


(lib.mc_botoatrica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape.setTransform(70.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_1.setTransform(70.5,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_2.setTransform(70.5,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,42.7);


(lib.mc_botoatlantica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape.setTransform(70.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_1.setTransform(70.5,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_2.setTransform(70.5,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,42.7);


(lib.mc_boto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape.setTransform(70.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_1.setTransform(70.5,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s("#666666").ss(1,1,1).rr(-70.5,-21.35,141,42.7,6);
	this.shape_2.setTransform(70.5,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,42.7);


(lib.popup_ampliar_vertiente_05 = function() {
	this.initialize();

	// marcaAgua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// nova
	this.txt_popup_ampliar_vertiente_05 = new cjs.Text("Barcaza en el Volga (Rusia).", "18px Verdana");
	this.txt_popup_ampliar_vertiente_05.lineHeight = 20;
	this.txt_popup_ampliar_vertiente_05.lineWidth = 501;
	this.txt_popup_ampliar_vertiente_05.setTransform(222.3,533.6);

	this.shape = new lib.Mapadebits3();
	this.shape.setTransform(222,43.6);

	// boto
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.6,54.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame4p(5));
        });

	// fons_blanc
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhDcAmjMAAAhNFMCG5AAAMAAABNFg");
	this.shape_1.setTransform(475,325,1.1,1.317);

	this.addChild(this.shape_1,this.btn_salir,this.shape,this.txt_popup_ampliar_vertiente_05,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,650);


(lib.popup_ampliar_vertiente_04 = function() {
	this.initialize();

	// marcaAgua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// imatge
	this.instance_1 = new lib._00078J01();
	this.instance_1.setTransform(114.8,44,0.76,0.76);

	this.txt_popup_ampliar_vertiente_04 = new cjs.Text("Tramo del río Dniéper y el puente Paton, a su paso por Kiev (Ucrania).", "18px Verdana");
	this.txt_popup_ampliar_vertiente_04.lineHeight = 20;
	this.txt_popup_ampliar_vertiente_04.lineWidth = 718;
	this.txt_popup_ampliar_vertiente_04.setTransform(115.4,514.5);

	// boto
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.6,54.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame4p(4));
        });

	// fons_blanc
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhDcAmjMAAAhNFMCG5AAAMAAABNFg");
	this.shape.setTransform(475,325,1.1,1.317);

	this.addChild(this.shape,this.btn_salir,this.txt_popup_ampliar_vertiente_04,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,650);


(lib.popup_ampliar_vertiente_03 = function() {
	this.initialize();

	// marcaAgua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// nova
	this.instance_1 = new lib._001VZN01();
	this.instance_1.setTransform(125.8,44.2,0.738,0.738);

	this.txt_popup_ampliar_vertiente_03 = new cjs.Text("El río Tíber a su paso por Roma (Italia).", "18px Verdana");
	this.txt_popup_ampliar_vertiente_03.lineHeight = 20;
	this.txt_popup_ampliar_vertiente_03.lineWidth = 696;
	this.txt_popup_ampliar_vertiente_03.setTransform(125.9,516.2);

	// boto
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.6,54.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame4p(3));
        });

	// fons_blanc
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhDcAmjMAAAhNFMCG5AAAMAAABNFg");
	this.shape.setTransform(475,325,1.1,1.317);

	this.addChild(this.shape,this.btn_salir,this.txt_popup_ampliar_vertiente_03,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,650);


(lib.popup_ampliar_vertiente_02 = function() {
	this.initialize();

	// marcaAgua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// nova
	this.txt_popup_ampliar_vertiente_02 = new cjs.Text("El río Rin a su paso por la localidad de Oberwesel en el valle del Rin (Renania-Palatinado, Alemania).", "18px Verdana");
	this.txt_popup_ampliar_vertiente_02.lineHeight = 20;
	this.txt_popup_ampliar_vertiente_02.lineWidth = 510;
	this.txt_popup_ampliar_vertiente_02.setTransform(222.3,531.8);

	// nova
	this.shape = new lib.Mapadebits2();
	this.shape.setTransform(222.6,44.3);

	// boto
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.6,54.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame4p(2));
        });

	// fons_blanc
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhDcAmjMAAAhNFMCG5AAAMAAABNFg");
	this.shape_1.setTransform(475,325,1.1,1.317);

	this.addChild(this.shape_1,this.btn_salir,this.shape,this.txt_popup_ampliar_vertiente_02,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,650);


(lib.popup_ampliar_vertiente_01 = function() {
	this.initialize();

	// marcaAgua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// Capa 1
	this.txt_popup_ampliar_vertiente_01 = new cjs.Text("El río Pechora a su paso por la República Autónoma de los Komi (Rusia).", "18px Verdana");
	this.txt_popup_ampliar_vertiente_01.lineHeight = 20;
	this.txt_popup_ampliar_vertiente_01.lineWidth = 531;
	this.txt_popup_ampliar_vertiente_01.setTransform(221.5,532.7);

	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.6,54.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame4p(1));
        });

	this.shape = new lib.Mapadebits1();
	this.shape.setTransform(221.7,44.4);

	// fons_blanc
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhDcAmjMAAAhNFMCG5AAAMAAABNFg");
	this.shape_1.setTransform(475,325,1.1,1.317);

	this.addChild(this.shape_1,this.shape,this.btn_salir,this.txt_popup_ampliar_vertiente_01,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,650);


(lib.mc_imatge_vertiente_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdTMAAAg6lMAtzAAAMAAAA6lg");
	mask.setTransform(147.8,187.5);

	// Imatge
	this.instance = new lib.mc_imatge_vertiente_05_int();
	this.instance.setTransform(211,179.1,1,1,0,0,0,343,227.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:202.9},0).wait(1).to({x:194.7},0).wait(1).to({x:186.5},0).wait(1).to({x:178.3},0).wait(1).to({x:170.1},0).wait(1).to({x:162},0).wait(1).to({x:153.8},0).wait(1).to({x:145.6},0).wait(1).to({x:137.4},0).wait(1).to({x:129.2},0).wait(1).to({x:121},0).wait(1).to({x:112.9},0).wait(1).to({x:104.7},0).wait(1).to({x:96.5},0).wait(1).to({x:88.3},0).wait(1).to({x:80.1},0).wait(1).to({x:72},0).wait(1).to({x:63.8},0).wait(1).to({x:55.6},0).wait(1).to({x:47.4},0).wait(1).to({x:39.2},0).wait(1).to({x:31},0).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.9,-48.4,686,455);


(lib.mc_imatge_vertiente_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdTMAAAg6lMAtzAAAMAAAA6lg");
	mask.setTransform(147.8,187.5);

	// Imatge
	this.instance = new lib.mc_imatge_vertiente_04_int();
	this.instance.setTransform(263.1,190,1,1,0,0,0,319.8,206);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:256.5},0).wait(1).to({x:249.9},0).wait(1).to({x:243.4},0).wait(1).to({x:236.8},0).wait(1).to({x:230.2},0).wait(1).to({x:223.6},0).wait(1).to({x:217.1},0).wait(1).to({x:210.5},0).wait(1).to({x:203.9},0).wait(1).to({x:197.3},0).wait(1).to({x:190.8},0).wait(1).to({x:184.2},0).wait(1).to({x:177.6},0).wait(1).to({x:171},0).wait(1).to({x:164.5},0).wait(1).to({x:157.9},0).wait(1).to({x:151.3},0).wait(1).to({x:144.7},0).wait(1).to({x:138.1},0).wait(1).to({x:131.6},0).wait(1).to({x:125},0).wait(1).to({x:118.4},0).wait(1).to({x:111.8},0).wait(1).to({x:105.3},0).wait(1).to({x:98.7},0).wait(1).to({x:92.1},0).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-16,639.6,412);


(lib.mc_imatge_vertiente_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdTMAAAg6lMAtzAAAMAAAA6lg");
	mask.setTransform(147.8,187.5);

	// Imatge
	this.instance = new lib.mc_imatge_vertiente_03_int();
	this.instance.setTransform(235,188,1,1,0,0,0,293.4,195.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:230.5},0).wait(1).to({x:226},0).wait(1).to({x:221.5},0).wait(1).to({x:217},0).wait(1).to({x:212.5},0).wait(1).to({x:208},0).wait(1).to({x:203.5},0).wait(1).to({x:199},0).wait(1).to({x:194.5},0).wait(1).to({x:190},0).wait(1).to({x:185.5},0).wait(1).to({x:181},0).wait(1).to({x:176.5},0).wait(1).to({x:172},0).wait(1).to({x:167.5},0).wait(1).to({x:163},0).wait(1).to({x:158.5},0).wait(1).to({x:154},0).wait(1).to({x:149.5},0).wait(1).to({x:145},0).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.3,-7.5,586.8,391);


(lib.mc_imatge_vertiente_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdTMAAAg6lMAtzAAAMAAAA6lg");
	mask.setTransform(147.8,187.5);

	// Imatge
	this.instance = new lib.mc_imatge_vertiente_2_int();
	this.instance.setTransform(213,189,1,1,0,0,0,305.3,201.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:209.1},0).wait(1).to({x:205.2},0).wait(1).to({x:201.3},0).wait(1).to({x:197.4},0).wait(1).to({x:193.5},0).wait(1).to({x:189.6},0).wait(1).to({x:185.6},0).wait(1).to({x:181.7},0).wait(1).to({x:177.8},0).wait(1).to({x:173.9},0).wait(1).to({x:170},0).wait(1).to({x:166.1},0).wait(1).to({x:162.2},0).wait(1).to({x:158.2},0).wait(1).to({x:154.3},0).wait(1).to({x:150.4},0).wait(1).to({x:146.5},0).wait(1).to({x:142.6},0).wait(1).to({x:138.7},0).wait(1).to({x:134.8},0).wait(1).to({x:130.9},0).wait(1).to({x:126.9},0).wait(1).to({x:123},0).wait(1).to({x:119.1},0).wait(1).to({x:115.2},0).wait(1).to({x:111.3},0).wait(1).to({x:107.4},0).wait(1).to({x:103.4},0).wait(1).to({x:99.5},0).wait(1).to({x:95.6},0).wait(1).to({x:91.7},0).wait(1).to({x:87.8},0).wait(1).to({x:83.9},0).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.2,-12.5,610.6,403);


(lib.mc_imatge_vertiente_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdTMAAAg6lMAtzAAAMAAAA6lg");
	mask.setTransform(147.8,187.5);

	// Imatge
	this.instance = new lib.mc_imatge_vertiente_01_int();
	this.instance.setTransform(183,190,1,1,0,0,0,189,217.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:217.4,x:180.4,y:189.9},0).wait(1).to({x:177.8},0).wait(1).to({x:175.2},0).wait(1).to({x:172.6},0).wait(1).to({x:170},0).wait(1).to({x:167.4},0).wait(1).to({x:164.9},0).wait(1).to({x:162.3},0).wait(1).to({x:159.7},0).wait(1).to({x:157.1},0).wait(1).to({x:154.5},0).wait(1).to({x:151.9},0).wait(1).to({x:149.3},0).wait(1).to({x:146.7},0).wait(1).to({x:144.1},0).wait(1).to({x:141.5},0).wait(1).to({x:138.9},0).wait(1).to({x:136.3},0).wait(1).to({x:133.7},0).wait(1).to({x:131.1},0).wait(1).to({x:128.6},0).wait(1).to({x:126},0).wait(1).to({x:123.4},0).wait(1).to({x:120.8},0).wait(1).to({x:118.2},0).wait(1).to({x:115.6},0).wait(1).to({x:113},0).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-27.4,378,434.9);


(lib.popup_ampliar_12 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_12 = new cjs.Text("Valle de Pineta, en el Parque Nacional de Ordesa y Monte Perdido (Huesca, España)", "18px Verdana");
	this.txt_popup_ampliar_12.lineHeight = 20;
	this.txt_popup_ampliar_12.lineWidth = 609;
	this.txt_popup_ampliar_12.setTransform(124.7,537.5);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(12));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._002DWF01();
	this.instance_1.setTransform(125.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_11 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_11 = new cjs.Text("Isla de Skye, en la región de las Highlands (Reino Unido).", "18px Verdana");
	this.txt_popup_ampliar_11.lineHeight = 20;
	this.txt_popup_ampliar_11.lineWidth = 655;
	this.txt_popup_ampliar_11.setTransform(110,537.5);

	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(11));
        });
	// ClipImatge
	this.instance_1 = new lib._9_shutterstock_81227809();
	this.instance_1.setTransform(110.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.btn_salir,this.instance,this.txt_popup_ampliar_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);

(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,524,484);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,524,484);
(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,524,484);


(lib.popup_ampliar_10 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_10 = new cjs.Text("Urales (Rusia).", "18px Verdana");
	this.txt_popup_ampliar_10.lineHeight = 20;
	this.txt_popup_ampliar_10.lineWidth = 616;
	this.txt_popup_ampliar_10.setTransform(112.6,536.6);

	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(10));
        });
	// ClipImatge
	this.instance_1 = new lib._8_shutterstock_60080284();
	this.instance_1.setTransform(112.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.btn_salir,this.instance,this.txt_popup_ampliar_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_09 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_09 = new cjs.Text("Puy-de-Dôme, en el macizo Central (Francia).", "18px Verdana");
	this.txt_popup_ampliar_09.lineHeight = 20;
	this.txt_popup_ampliar_09.lineWidth = 629;
	this.txt_popup_ampliar_09.setTransform(108.2,536.6);

	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(9));
        });
	// ClipImatge
	this.instance_1 = new lib._7_shutterstock_28939924();
	this.instance_1.setTransform(109.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.btn_salir,this.instance,this.txt_popup_ampliar_09);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_08 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_08 = new cjs.Text("Gran Llanura Europea (Alemania).", "18px Verdana");
	this.txt_popup_ampliar_08.lineHeight = 20;
	this.txt_popup_ampliar_08.lineWidth = 535;
	this.txt_popup_ampliar_08.setTransform(195.1,537.5);

	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(8));
        });
	// ClipImatge
	this.instance_1 = new lib._6_shutterstock_61768660();
	this.instance_1.setTransform(195.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.btn_salir,this.instance,this.txt_popup_ampliar_08);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_07 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_07 = new cjs.Text("Cordillera del Cáucaso (República Autónoma de Daguestán, Rusia).", "18px Verdana");
	this.txt_popup_ampliar_07.lineHeight = 20;
	this.txt_popup_ampliar_07.lineWidth = 624;
	this.txt_popup_ampliar_07.setTransform(109.1,537.5);

	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(7));
        });
	// ClipImatge
	this.instance_1 = new lib._000IRA01();
	this.instance_1.setTransform(109.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.btn_salir,this.instance,this.txt_popup_ampliar_07);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_06 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_06 = new cjs.Text("Gerlachovský štít (Eslovaquia).", "18px Verdana");
	this.txt_popup_ampliar_06.lineHeight = 20;
	this.txt_popup_ampliar_06.lineWidth = 588;
	this.txt_popup_ampliar_06.setTransform(150.8,536.6);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(6));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._5_shutterstock_84095437();
	this.instance_1.setTransform(150.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_06);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_05 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_05 = new cjs.Text("Montes Balcanes (Bulgaria).", "18px Verdana");
	this.txt_popup_ampliar_05.lineHeight = 20;
	this.txt_popup_ampliar_05.lineWidth = 667;
	this.txt_popup_ampliar_05.setTransform(80.4,536.6);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(5));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg3OAptMAAAhMrMB7GAAAMAAABMrg");
	mask.setTransform(434.5,267);

	// ClipImatge
	this.instance_1 = new lib._4_shutterstock_51939379();
	this.instance_1.setTransform(-259.6,44.6,0.649,0.649);

	this.instance_1.mask = mask;

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_05);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-259.6,0,1229.1,608);


(lib.popup_ampliar_04 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_04 = new cjs.Text("Macizo del Gran Sasso, en los Apeninos (Italia).", "18px Verdana");
	this.txt_popup_ampliar_04.lineHeight = 20;
	this.txt_popup_ampliar_04.lineWidth = 622;
	this.txt_popup_ampliar_04.setTransform(158.6,535.7);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(4));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._0007LY01();
	this.instance_1.setTransform(158.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_04);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_03 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_03 = new cjs.Text("Valle glacial (Noruega).", "18px Verdana");
	this.txt_popup_ampliar_03.lineHeight = 20;
	this.txt_popup_ampliar_03.lineWidth = 394;
	this.txt_popup_ampliar_03.setTransform(275.1,537.5);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(3));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._3_121321568();
	this.instance_1.setTransform(275.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_02 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_02 = new cjs.Text("Alpes Albaneses (Montenegro).", "18px Verdana");
	this.txt_popup_ampliar_02.lineHeight = 20;
	this.txt_popup_ampliar_02.lineWidth = 715;
	this.txt_popup_ampliar_02.setTransform(110.8,536.6);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(2));
        });
	// Agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._2_120904700();
	this.instance_1.setTransform(110.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_01 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_01 = new cjs.Text("Alpes austriacos.", "18px Verdana");
	this.txt_popup_ampliar_01.lineHeight = 20;
	this.txt_popup_ampliar_01.lineWidth = 687;
	this.txt_popup_ampliar_01.setTransform(109.1,536.6);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
  this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame2p(1));
        });
	// marca
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._1_100143753();
	this.instance_1.setTransform(110.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.mc_imatge_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_12_Int();
	this.instance.setTransform(282.1,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:269.8,x:270.6},0).wait(22).wait(1).to({x:266.3},0).wait(1).to({x:262},0).wait(1).to({x:257.7},0).wait(1).to({x:253.3},0).wait(1).to({x:249},0).wait(1).to({x:244.7},0).wait(1).to({x:240.4},0).wait(1).to({x:236},0).wait(1).to({x:231.7},0).wait(1).to({x:227.4},0).wait(1).to({x:223},0).wait(1).to({x:218.7},0).wait(1).to({x:214.4},0).wait(1).to({x:210.1},0).wait(1).to({x:205.7},0).wait(1).to({x:201.4},0).wait(1).to({x:197.1},0).wait(1).to({x:192.8},0).wait(1).to({x:188.4},0).wait(1).to({x:184.1},0).wait(1).to({x:179.8},0).wait(1).to({x:175.4},0).wait(1).to({x:171.1},0).wait(1).to({x:166.8},0).wait(1).to({x:162.5},0).wait(1).to({x:158.1},0).wait(1).to({x:153.8},0).wait(1).to({x:149.5},0).wait(1).to({x:145.1},0).wait(1).to({x:140.8},0).wait(1).to({x:136.5},0).wait(1).to({x:132.2},0).wait(1).to({x:127.8},0).wait(1).to({x:123.5},0).wait(1).to({x:119.2},0).wait(1).to({x:114.9},0).wait(1).to({x:110.5},0).wait(1).to({x:106.2},0).wait(1).to({x:101.9},0).wait(1).to({x:97.5},0).wait(1).to({x:93.2},0).wait(1).to({x:88.9},0).wait(1).to({x:84.6},0).wait(1).to({x:80.2},0).wait(1).to({x:75.9},0).wait(1).to({x:71.6},0).wait(1).to({x:67.2},0).wait(1).to({x:62.9},0).wait(1).to({x:58.6},0).wait(1).to({x:54.3},0).wait(1).to({x:49.9},0).wait(1).to({x:45.6},0).wait(1).to({x:41.3},0).wait(1).to({x:37},0).wait(1).to({x:32.6},0).wait(1).to({x:28.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,0,539.5,375);


(lib.mc_imatge_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_11_Int();
	this.instance.setTransform(282.1,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).wait(1).to({x:277.4},0).wait(1).to({x:272.7},0).wait(1).to({x:268},0).wait(1).to({x:263.3},0).wait(1).to({x:258.5},0).wait(1).to({x:253.8},0).wait(1).to({x:249.1},0).wait(1).to({x:244.4},0).wait(1).to({x:239.6},0).wait(1).to({x:234.9},0).wait(1).to({x:230.2},0).wait(1).to({x:225.5},0).wait(1).to({x:220.7},0).wait(1).to({x:216},0).wait(1).to({x:211.3},0).wait(1).to({x:206.6},0).wait(1).to({x:201.9},0).wait(1).to({x:197.1},0).wait(1).to({x:192.4},0).wait(1).to({x:187.7},0).wait(1).to({x:183},0).wait(1).to({x:178.2},0).wait(1).to({x:173.5},0).wait(1).to({x:168.8},0).wait(1).to({x:164.1},0).wait(1).to({x:159.3},0).wait(1).to({x:154.6},0).wait(1).to({x:149.9},0).wait(1).to({x:145.2},0).wait(1).to({x:140.5},0).wait(1).to({x:135.7},0).wait(1).to({x:131},0).wait(1).to({x:126.3},0).wait(1).to({x:121.6},0).wait(1).to({x:116.8},0).wait(1).to({x:112.1},0).wait(1).to({x:107.4},0).wait(1).to({x:102.7},0).wait(1).to({x:97.9},0).wait(1).to({x:93.2},0).wait(1).to({x:88.5},0).wait(1).to({x:83.8},0).wait(1).to({x:79.1},0).wait(1).to({x:74.3},0).wait(1).to({x:69.6},0).wait(1).to({x:64.9},0).wait(1).to({x:60.2},0).wait(1).to({x:55.4},0).wait(1).to({x:50.7},0).wait(1).to({x:46},0).wait(1).to({x:41.3},0).wait(1).to({x:36.5},0).wait(1).to({x:31.8},0).wait(1).to({x:27.1},0).wait(1).to({x:22.4},0).wait(1).to({x:17.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,0,562.5,375);


(lib.mc_imatge_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_10_Int();
	this.instance.setTransform(282.1,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:280.3,x:281.1},0).wait(22).wait(1).to({x:276.4},0).wait(1).to({x:271.7},0).wait(1).to({x:267},0).wait(1).to({x:262.3},0).wait(1).to({x:257.5},0).wait(1).to({x:252.8},0).wait(1).to({x:248.1},0).wait(1).to({x:243.4},0).wait(1).to({x:238.6},0).wait(1).to({x:233.9},0).wait(1).to({x:229.2},0).wait(1).to({x:224.5},0).wait(1).to({x:219.7},0).wait(1).to({x:215},0).wait(1).to({x:210.3},0).wait(1).to({x:205.6},0).wait(1).to({x:200.9},0).wait(1).to({x:196.1},0).wait(1).to({x:191.4},0).wait(1).to({x:186.7},0).wait(1).to({x:182},0).wait(1).to({x:177.2},0).wait(1).to({x:172.5},0).wait(1).to({x:167.8},0).wait(1).to({x:163.1},0).wait(1).to({x:158.3},0).wait(1).to({x:153.6},0).wait(1).to({x:148.9},0).wait(1).to({x:144.2},0).wait(1).to({x:139.5},0).wait(1).to({x:134.7},0).wait(1).to({x:130},0).wait(1).to({x:125.3},0).wait(1).to({x:120.6},0).wait(1).to({x:115.8},0).wait(1).to({x:111.1},0).wait(1).to({x:106.4},0).wait(1).to({x:101.7},0).wait(1).to({x:96.9},0).wait(1).to({x:92.2},0).wait(1).to({x:87.5},0).wait(1).to({x:82.8},0).wait(1).to({x:78.1},0).wait(1).to({x:73.3},0).wait(1).to({x:68.6},0).wait(1).to({x:63.9},0).wait(1).to({x:59.2},0).wait(1).to({x:54.4},0).wait(1).to({x:49.7},0).wait(1).to({x:45},0).wait(1).to({x:40.3},0).wait(1).to({x:35.5},0).wait(1).to({x:30.8},0).wait(1).to({x:26.1},0).wait(1).to({x:21.4},0).wait(1).to({x:16.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,0,560.5,375);


(lib.mc_imatge_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_09_Int();
	this.instance.setTransform(282.1,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:282,x:282.8},0).wait(22).wait(1).to({x:280},0).wait(1).to({x:277.2},0).wait(1).to({x:274.3},0).wait(1).to({x:271.5},0).wait(1).to({x:268.6},0).wait(1).to({x:265.8},0).wait(1).to({x:262.9},0).wait(1).to({x:260.1},0).wait(1).to({x:257.2},0).wait(1).to({x:254.4},0).wait(1).to({x:251.6},0).wait(1).to({x:248.7},0).wait(1).to({x:245.9},0).wait(1).to({x:243},0).wait(1).to({x:240.2},0).wait(1).to({x:237.3},0).wait(1).to({x:234.5},0).wait(1).to({x:231.6},0).wait(1).to({x:228.8},0).wait(1).to({x:226},0).wait(1).to({x:223.1},0).wait(1).to({x:220.3},0).wait(1).to({x:217.4},0).wait(1).to({x:214.6},0).wait(1).to({x:211.7},0).wait(1).to({x:208.9},0).wait(1).to({x:206},0).wait(1).to({x:203.2},0).wait(1).to({x:200.4},0).wait(1).to({x:197.5},0).wait(1).to({x:194.7},0).wait(1).to({x:191.8},0).wait(1).to({x:189},0).wait(1).to({x:186.1},0).wait(1).to({x:183.3},0).wait(1).to({x:180.4},0).wait(1).to({x:177.6},0).wait(1).to({x:174.8},0).wait(1).to({x:171.9},0).wait(1).to({x:169.1},0).wait(1).to({x:166.2},0).wait(1).to({x:163.4},0).wait(1).to({x:160.5},0).wait(1).to({x:157.7},0).wait(1).to({x:154.8},0).wait(1).to({x:152},0).wait(1).to({x:149.2},0).wait(1).to({x:146.3},0).wait(1).to({x:143.5},0).wait(1).to({x:140.6},0).wait(1).to({x:137.8},0).wait(1).to({x:134.9},0).wait(1).to({x:132.1},0).wait(1).to({x:129.2},0).wait(1).to({x:126.4},0).wait(1).to({x:123.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,0,564,375);


(lib.mc_imatge_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_08_Int();
	this.instance.setTransform(147.8,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:215.3,x:81.8},0).wait(22).wait(1).to({x:84.2},0).wait(1).to({x:86.6},0).wait(1).to({x:89},0).wait(1).to({x:91.4},0).wait(1).to({x:93.7},0).wait(1).to({x:96.1},0).wait(1).to({x:98.5},0).wait(1).to({x:100.9},0).wait(1).to({x:103.3},0).wait(1).to({x:105.7},0).wait(1).to({x:108.1},0).wait(1).to({x:110.5},0).wait(1).to({x:112.8},0).wait(1).to({x:115.2},0).wait(1).to({x:117.6},0).wait(1).to({x:120},0).wait(1).to({x:122.4},0).wait(1).to({x:124.8},0).wait(1).to({x:127.2},0).wait(1).to({x:129.6},0).wait(1).to({x:132},0).wait(1).to({x:134.3},0).wait(1).to({x:136.7},0).wait(1).to({x:139.1},0).wait(1).to({x:141.5},0).wait(1).to({x:143.9},0).wait(1).to({x:146.3},0).wait(1).to({x:148.7},0).wait(1).to({x:151.1},0).wait(1).to({x:153.5},0).wait(1).to({x:155.8},0).wait(1).to({x:158.2},0).wait(1).to({x:160.6},0).wait(1).to({x:163},0).wait(1).to({x:165.4},0).wait(1).to({x:167.8},0).wait(1).to({x:170.2},0).wait(1).to({x:172.6},0).wait(1).to({x:174.9},0).wait(1).to({x:177.3},0).wait(1).to({x:179.7},0).wait(1).to({x:182.1},0).wait(1).to({x:184.5},0).wait(1).to({x:186.9},0).wait(1).to({x:189.3},0).wait(1).to({x:191.7},0).wait(1).to({x:194.1},0).wait(1).to({x:196.4},0).wait(1).to({x:198.8},0).wait(1).to({x:201.2},0).wait(1).to({x:203.6},0).wait(1).to({x:206},0).wait(1).to({x:208.4},0).wait(1).to({x:210.8},0).wait(1).to({x:213.2},0).wait(1).to({x:215.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,0,430.5,375);


(lib.mc_imatge_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_07_Int();
	this.instance.setTransform(280.6,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:281.8,x:281.1},0).wait(22).wait(1).to({x:277},0).wait(1).to({x:272.9},0).wait(1).to({x:268.8},0).wait(1).to({x:264.7},0).wait(1).to({x:260.6},0).wait(1).to({x:256.5},0).wait(1).to({x:252.4},0).wait(1).to({x:248.3},0).wait(1).to({x:244.2},0).wait(1).to({x:240.1},0).wait(1).to({x:235.9},0).wait(1).to({x:231.8},0).wait(1).to({x:227.7},0).wait(1).to({x:223.6},0).wait(1).to({x:219.5},0).wait(1).to({x:215.4},0).wait(1).to({x:211.3},0).wait(1).to({x:207.2},0).wait(1).to({x:203.1},0).wait(1).to({x:199},0).wait(1).to({x:194.8},0).wait(1).to({x:190.7},0).wait(1).to({x:186.6},0).wait(1).to({x:182.5},0).wait(1).to({x:178.4},0).wait(1).to({x:174.3},0).wait(1).to({x:170.2},0).wait(1).to({x:166.1},0).wait(1).to({x:162},0).wait(1).to({x:157.9},0).wait(1).to({x:153.7},0).wait(1).to({x:149.6},0).wait(1).to({x:145.5},0).wait(1).to({x:141.4},0).wait(1).to({x:137.3},0).wait(1).to({x:133.2},0).wait(1).to({x:129.1},0).wait(1).to({x:125},0).wait(1).to({x:120.9},0).wait(1).to({x:116.8},0).wait(1).to({x:112.6},0).wait(1).to({x:108.5},0).wait(1).to({x:104.4},0).wait(1).to({x:100.3},0).wait(1).to({x:96.2},0).wait(1).to({x:92.1},0).wait(1).to({x:88},0).wait(1).to({x:83.9},0).wait(1).to({x:79.8},0).wait(1).to({x:75.7},0).wait(1).to({x:71.5},0).wait(1).to({x:67.4},0).wait(1).to({x:63.3},0).wait(1).to({x:59.2},0).wait(1).to({x:55.1},0).wait(1).to({x:51},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,0,563.5,375);


(lib.mc_imatge_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_06_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:250,x:250},0).wait(22).wait(1).to({x:246.4},0).wait(1).to({x:242.8},0).wait(1).to({x:239.2},0).wait(1).to({x:235.6},0).wait(1).to({x:231.9},0).wait(1).to({x:228.3},0).wait(1).to({x:224.7},0).wait(1).to({x:221.1},0).wait(1).to({x:217.5},0).wait(1).to({x:213.8},0).wait(1).to({x:210.2},0).wait(1).to({x:206.6},0).wait(1).to({x:203},0).wait(1).to({x:199.3},0).wait(1).to({x:195.7},0).wait(1).to({x:192.1},0).wait(1).to({x:188.5},0).wait(1).to({x:184.9},0).wait(1).to({x:181.2},0).wait(1).to({x:177.6},0).wait(1).to({x:174},0).wait(1).to({x:170.4},0).wait(1).to({x:166.8},0).wait(1).to({x:163.1},0).wait(1).to({x:159.5},0).wait(1).to({x:155.9},0).wait(1).to({x:152.3},0).wait(1).to({x:148.6},0).wait(1).to({x:145},0).wait(1).to({x:141.4},0).wait(1).to({x:137.8},0).wait(1).to({x:134.2},0).wait(1).to({x:130.5},0).wait(1).to({x:126.9},0).wait(1).to({x:123.3},0).wait(1).to({x:119.7},0).wait(1).to({x:116.1},0).wait(1).to({x:112.4},0).wait(1).to({x:108.8},0).wait(1).to({x:105.2},0).wait(1).to({x:101.6},0).wait(1).to({x:97.9},0).wait(1).to({x:94.3},0).wait(1).to({x:90.7},0).wait(1).to({x:87.1},0).wait(1).to({x:83.5},0).wait(1).to({x:79.8},0).wait(1).to({x:76.2},0).wait(1).to({x:72.6},0).wait(1).to({x:69},0).wait(1).to({x:65.4},0).wait(1).to({x:61.7},0).wait(1).to({x:58.1},0).wait(1).to({x:54.5},0).wait(1).to({x:50.9},0).wait(1).to({x:47.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,375);


(lib.mc_imatge_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_05_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:473.3,x:473.3},0).wait(22).wait(1).to({x:465.9},0).wait(1).to({x:458.5},0).wait(1).to({x:451.1},0).wait(1).to({x:443.6},0).wait(1).to({x:436.2},0).wait(1).to({x:428.8},0).wait(1).to({x:421.3},0).wait(1).to({x:413.9},0).wait(1).to({x:406.5},0).wait(1).to({x:399.1},0).wait(1).to({x:391.6},0).wait(1).to({x:384.2},0).wait(1).to({x:376.8},0).wait(1).to({x:369.3},0).wait(1).to({x:361.9},0).wait(1).to({x:354.5},0).wait(1).to({x:347.1},0).wait(1).to({x:339.6},0).wait(1).to({x:332.2},0).wait(1).to({x:324.8},0).wait(1).to({x:317.3},0).wait(1).to({x:309.9},0).wait(1).to({x:302.5},0).wait(1).to({x:295.1},0).wait(1).to({x:287.6},0).wait(1).to({x:280.2},0).wait(1).to({x:272.8},0).wait(1).to({x:265.3},0).wait(1).to({x:257.9},0).wait(1).to({x:250.5},0).wait(1).to({x:243.1},0).wait(1).to({x:235.6},0).wait(1).to({x:228.2},0).wait(1).to({x:220.8},0).wait(1).to({x:213.3},0).wait(1).to({x:205.9},0).wait(1).to({x:198.5},0).wait(1).to({x:191.1},0).wait(1).to({x:183.6},0).wait(1).to({x:176.2},0).wait(1).to({x:168.8},0).wait(1).to({x:161.3},0).wait(1).to({x:153.9},0).wait(1).to({x:146.5},0).wait(1).to({x:139.1},0).wait(1).to({x:131.6},0).wait(1).to({x:124.2},0).wait(1).to({x:116.8},0).wait(1).to({x:109.3},0).wait(1).to({x:101.9},0).wait(1).to({x:94.5},0).wait(1).to({x:87.1},0).wait(1).to({x:79.6},0).wait(1).to({x:72.2},0).wait(1).to({x:64.8},0).wait(1).to({x:57.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,946.5,375);


(lib.mc_imatge_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_04_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:244,x:244},0).wait(22).wait(1).to({x:240.6},0).wait(1).to({x:237.2},0).wait(1).to({x:233.8},0).wait(1).to({x:230.4},0).wait(1).to({x:227},0).wait(1).to({x:223.6},0).wait(1).to({x:220.2},0).wait(1).to({x:216.8},0).wait(1).to({x:213.4},0).wait(1).to({x:210},0).wait(1).to({x:206.6},0).wait(1).to({x:203.2},0).wait(1).to({x:199.8},0).wait(1).to({x:196.4},0).wait(1).to({x:193},0).wait(1).to({x:189.6},0).wait(1).to({x:186.2},0).wait(1).to({x:182.8},0).wait(1).to({x:179.4},0).wait(1).to({x:176},0).wait(1).to({x:172.6},0).wait(1).to({x:169.2},0).wait(1).to({x:165.8},0).wait(1).to({x:162.4},0).wait(1).to({x:159},0).wait(1).to({x:155.6},0).wait(1).to({x:152.2},0).wait(1).to({x:148.8},0).wait(1).to({x:145.4},0).wait(1).to({x:142},0).wait(1).to({x:138.6},0).wait(1).to({x:135.2},0).wait(1).to({x:131.8},0).wait(1).to({x:128.4},0).wait(1).to({x:125},0).wait(1).to({x:121.6},0).wait(1).to({x:118.2},0).wait(1).to({x:114.8},0).wait(1).to({x:111.4},0).wait(1).to({x:108},0).wait(1).to({x:104.6},0).wait(1).to({x:101.2},0).wait(1).to({x:97.8},0).wait(1).to({x:94.4},0).wait(1).to({x:91},0).wait(1).to({x:87.6},0).wait(1).to({x:84.2},0).wait(1).to({x:80.8},0).wait(1).to({x:77.4},0).wait(1).to({x:74},0).wait(1).to({x:70.6},0).wait(1).to({x:67.2},0).wait(1).to({x:63.8},0).wait(1).to({x:60.4},0).wait(1).to({x:57},0).wait(1).to({x:53.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,488,375);


(lib.mc_imatge_03 = function() {
	this.initialize();

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_03_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,0,309,375);


(lib.mc_imatge_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_02_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:283,x:283},0).wait(22).wait(1).to({x:278.2},0).wait(1).to({x:273.4},0).wait(1).to({x:268.6},0).wait(1).to({x:263.8},0).wait(1).to({x:259},0).wait(1).to({x:254.2},0).wait(1).to({x:249.4},0).wait(1).to({x:244.6},0).wait(1).to({x:239.8},0).wait(1).to({x:235},0).wait(1).to({x:230.2},0).wait(1).to({x:225.4},0).wait(1).to({x:220.6},0).wait(1).to({x:215.8},0).wait(1).to({x:211},0).wait(1).to({x:206.2},0).wait(1).to({x:201.4},0).wait(1).to({x:196.6},0).wait(1).to({x:191.7},0).wait(1).to({x:186.9},0).wait(1).to({x:182.1},0).wait(1).to({x:177.3},0).wait(1).to({x:172.5},0).wait(1).to({x:167.7},0).wait(1).to({x:162.9},0).wait(1).to({x:158.1},0).wait(1).to({x:153.3},0).wait(1).to({x:148.5},0).wait(1).to({x:143.7},0).wait(1).to({x:138.9},0).wait(1).to({x:134.1},0).wait(1).to({x:129.3},0).wait(1).to({x:124.5},0).wait(1).to({x:119.7},0).wait(1).to({x:114.9},0).wait(1).to({x:110.1},0).wait(1).to({x:105.3},0).wait(1).to({x:100.4},0).wait(1).to({x:95.6},0).wait(1).to({x:90.8},0).wait(1).to({x:86},0).wait(1).to({x:81.2},0).wait(1).to({x:76.4},0).wait(1).to({x:71.6},0).wait(1).to({x:66.8},0).wait(1).to({x:62},0).wait(1).to({x:57.2},0).wait(1).to({x:52.4},0).wait(1).to({x:47.6},0).wait(1).to({x:42.8},0).wait(1).to({x:38},0).wait(1).to({x:33.2},0).wait(1).to({x:28.4},0).wait(1).to({x:23.6},0).wait(1).to({x:18.8},0).wait(1).to({x:13.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,375);


(lib.mc_imatge_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_01_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).wait(1).to({x:276.6},0).wait(1).to({x:271.9},0).wait(1).to({x:267.2},0).wait(1).to({x:262.4},0).wait(1).to({x:257.7},0).wait(1).to({x:253},0).wait(1).to({x:248.2},0).wait(1).to({x:243.5},0).wait(1).to({x:238.8},0).wait(1).to({x:234.1},0).wait(1).to({x:229.3},0).wait(1).to({x:224.6},0).wait(1).to({x:219.9},0).wait(1).to({x:215.1},0).wait(1).to({x:210.4},0).wait(1).to({x:205.7},0).wait(1).to({x:200.9},0).wait(1).to({x:196.2},0).wait(1).to({x:191.5},0).wait(1).to({x:186.8},0).wait(1).to({x:182},0).wait(1).to({x:177.3},0).wait(1).to({x:172.6},0).wait(1).to({x:167.8},0).wait(1).to({x:163.1},0).wait(1).to({x:158.4},0).wait(1).to({x:153.7},0).wait(1).to({x:148.9},0).wait(1).to({x:144.2},0).wait(1).to({x:139.5},0).wait(1).to({x:134.7},0).wait(1).to({x:130},0).wait(1).to({x:125.3},0).wait(1).to({x:120.5},0).wait(1).to({x:115.8},0).wait(1).to({x:111.1},0).wait(1).to({x:106.4},0).wait(1).to({x:101.6},0).wait(1).to({x:96.9},0).wait(1).to({x:92.2},0).wait(1).to({x:87.4},0).wait(1).to({x:82.7},0).wait(1).to({x:78},0).wait(1).to({x:73.3},0).wait(1).to({x:68.5},0).wait(1).to({x:63.8},0).wait(1).to({x:59.1},0).wait(1).to({x:54.3},0).wait(1).to({x:49.6},0).wait(1).to({x:44.9},0).wait(1).to({x:40.1},0).wait(1).to({x:35.4},0).wait(1).to({x:30.7},0).wait(1).to({x:26},0).wait(1).to({x:21.2},0).wait(1).to({x:16.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.popup_ampliar_mares_12 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_12 = new cjs.Text("Reserva Natural del Zingaro, en Sicilia (Italia).", "18px Verdana");
	this.txt_popup_ampliar_mares_12.lineHeight = 20;
	this.txt_popup_ampliar_mares_12.lineWidth = 503;
	this.txt_popup_ampliar_mares_12.setTransform(109.1,533.2);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(12));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._21_shutterstock_34938238();
	this.instance_1.setTransform(110.7,41.5,0.65,0.65);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_10 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_10 = new cjs.Text("Cabo de Creus (Girona, España).", "18px Verdana");
	this.txt_popup_ampliar_mares_10.lineHeight = 20;
	this.txt_popup_ampliar_mares_10.lineWidth = 518;
	this.txt_popup_ampliar_mares_10.setTransform(108.2,537.5);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(10));
        });
	// marca
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._19_131720342();
	this.instance_1.setTransform(110.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_09 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_09 = new cjs.Text("Fiordo (Noruega).", "18px Verdana");
	this.txt_popup_ampliar_mares_09.lineHeight = 20;
	this.txt_popup_ampliar_mares_09.lineWidth = 337;
	this.txt_popup_ampliar_mares_09.setTransform(110.8,536.6);

	// marca
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(9));
        });
	// ClipImatge
	this.instance_1 = new lib._18_96698258();
	this.instance_1.setTransform(112.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.btn_salir,this.instance,this.txt_popup_ampliar_mares_09);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_08 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_08 = new cjs.Text("Cefalonia (Grecia).", "18px Verdana");
	this.txt_popup_ampliar_mares_08.lineHeight = 20;
	this.txt_popup_ampliar_mares_08.lineWidth = 716;
	this.txt_popup_ampliar_mares_08.setTransform(107.4,536.6);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(8));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._17_92017012();
	this.instance_1.setTransform(108.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_08);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_07 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_07 = new cjs.Text("Costa del mar Negro (Ucrania).", "18px Verdana");
	this.txt_popup_ampliar_mares_07.lineHeight = 20;
	this.txt_popup_ampliar_mares_07.lineWidth = 703;
	this.txt_popup_ampliar_mares_07.setTransform(108.2,538.4);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(7));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._16_shutterstock_45328417();
	this.instance_1.setTransform(108.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_07);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_06 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_06 = new cjs.Text("Cabo Formentor, en Mallorca (Islas Baleares, España).", "18px Verdana");
	this.txt_popup_ampliar_mares_06.lineHeight = 20;
	this.txt_popup_ampliar_mares_06.lineWidth = 684;
	this.txt_popup_ampliar_mares_06.setTransform(96.9,536.6);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(6));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._15_shutterstock_84830866();
	this.instance_1.setTransform(96.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_06);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_05 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_05 = new cjs.Text("Costa del mar del Norte (Países Bajos).", "18px Verdana");
	this.txt_popup_ampliar_mares_05.lineHeight = 20;
	this.txt_popup_ampliar_mares_05.lineWidth = 702;
	this.txt_popup_ampliar_mares_05.setTransform(108.2,538.4);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(5));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._14_shutterstock_54486355();
	this.instance_1.setTransform(109.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_05);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_04 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_04 = new cjs.Text("Costa del mar Báltico (Alemania).", "18px Verdana");
	this.txt_popup_ampliar_mares_04.lineHeight = 20;
	this.txt_popup_ampliar_mares_04.lineWidth = 724;
	this.txt_popup_ampliar_mares_04.setTransform(109.9,537.5);

	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(4));
        });
	// ClipImatge
	this.instance_1 = new lib._13_shutterstock_32779318();
	this.instance_1.setTransform(109.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.btn_salir,this.instance,this.txt_popup_ampliar_mares_04);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_03 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_03 = new cjs.Text("Parque Nacional Costero de Pembrokeshire (Reino Unido).", "18px Verdana");
	this.txt_popup_ampliar_mares_03.lineHeight = 20;
	this.txt_popup_ampliar_mares_03.lineWidth = 726;
	this.txt_popup_ampliar_mares_03.setTransform(109.1,536.6);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(3));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._12_shutterstock_79465246();
	this.instance_1.setTransform(109.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_02 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_02 = new cjs.Text("Djúpivogur (Islandia).", "18px Verdana");
	this.txt_popup_ampliar_mares_02.lineHeight = 20;
	this.txt_popup_ampliar_mares_02.lineWidth = 722;
	this.txt_popup_ampliar_mares_02.setTransform(94.8,536.7);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(2));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._11_shutterstock_82774045();
	this.instance_1.setTransform(94.3,44.6,0.649,0.649);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_ampliar_mares_01 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_01 = new cjs.Text("Bonifacio, en Córcega (Francia).", "18px Verdana");
	this.txt_popup_ampliar_mares_01.lineHeight = 20;
	this.txt_popup_ampliar_mares_01.lineWidth = 618;
	this.txt_popup_ampliar_mares_01.setTransform(164.2,521);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(1));
        });

	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib._10_shutterstock_77575597();
	this.instance_1.setTransform(163.2,44.6,0.628,0.628);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.mc_imatge_mares_11copia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg9aAlsMAAAhLXMB61AAAMAAABLXg");
	mask.setTransform(38.5,189.9);

	// Imatge
	this.instance = new lib.mc_imatge_mares_11_Int();
	this.instance.setTransform(-1889.9,189.7,1.299,1.299,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1035.5,x:-909.8},0).wait(17).wait(1).to({x:-901.7},0).wait(1).to({x:-893.7},0).wait(1).to({x:-885.6},0).wait(1).to({x:-877.5},0).wait(1).to({x:-869.4},0).wait(1).to({x:-861.4},0).wait(1).to({x:-853.3},0).wait(1).to({x:-845.2},0).wait(1).to({x:-837.1},0).wait(1).to({x:-829.1},0).wait(1).to({x:-821},0).wait(1).to({x:-812.9},0).wait(1).to({x:-804.8},0).wait(1).to({x:-796.8},0).wait(1).to({x:-788.7},0).wait(1).to({x:-780.6},0).wait(1).to({x:-772.5},0).wait(1).to({x:-764.5},0).wait(1).to({x:-756.4},0).wait(1).to({x:-748.3},0).wait(1).to({x:-740.3},0).wait(1).to({x:-732.2},0).wait(1).to({x:-724.1},0).wait(1).to({x:-716},0).wait(1).to({x:-708},0).wait(1).to({x:-699.9},0).wait(1).to({x:-691.8},0).wait(1).to({x:-683.7},0).wait(1).to({x:-675.7},0).wait(1).to({x:-667.6},0).wait(1).to({x:-659.5},0).wait(1).to({x:-651.4},0).wait(1).to({x:-643.4},0).wait(1).to({x:-635.3},0).wait(1).to({x:-627.2},0).wait(1).to({x:-619.1},0).wait(1).to({x:-611.1},0).wait(1).to({x:-603},0).wait(1).to({x:-594.9},0).wait(1).to({x:-586.8},0).wait(1).to({x:-578.8},0).wait(1).to({x:-570.7},0).wait(1).to({x:-562.6},0).wait(1).to({x:-554.6},0).wait(1).to({x:-546.5},0).wait(1).to({x:-538.4},0).wait(1).to({x:-530.3},0).wait(1).to({x:-522.3},0).wait(1).to({x:-514.2},0).wait(1).to({x:-506.1},0).wait(1).to({x:-498},0).wait(1).to({x:-490},0).wait(1).to({x:-481.9},0).wait(1).to({x:-473.8},0).wait(1).to({x:-465.7},0).wait(1).to({x:-457.7},0).wait(1).to({x:-449.6},0).wait(1).to({x:-441.5},0).wait(1).to({x:-433.5},0).wait(1).to({x:-425.4},0).wait(1).to({x:-417.3},0).wait(1).to({x:-409.2},0).wait(1).to({x:-401.2},0).wait(1).to({x:-393.1},0).wait(1).to({x:-385},0).wait(1).to({x:-376.9},0).wait(1).to({x:-368.9},0).wait(1).to({x:-360.8},0).wait(1).to({x:-352.7},0).wait(1).to({x:-344.6},0).wait(1).to({x:-336.6},0).wait(1).to({x:-328.5},0).wait(1).to({x:-320.4},0).wait(1).to({x:-312.3},0).wait(1).to({x:-304.3},0).wait(1).to({x:-296.2},0).wait(1).to({x:-288.1},0).wait(1).to({x:-280},0).wait(1).to({x:-272},0).wait(1).to({x:-263.9},0).wait(1).to({x:-255.8},0).wait(1).to({x:-247.7},0).wait(1).to({x:-239.7},0).wait(1).to({x:-231.6},0).wait(1).to({x:-223.5},0).wait(1).to({x:-215.5},0).wait(1).to({x:-207.4},0).wait(1).to({x:-199.3},0).wait(1).to({x:-191.2},0).wait(1).to({x:-183.2},0).wait(1).to({x:-175.1},0).wait(1).to({x:-167},0).wait(1).to({x:-158.9},0).wait(1).to({x:-150.9},0).wait(1).to({x:-142.8},0).wait(1).to({x:-134.7},0).wait(1).to({x:-126.7},0).wait(1).to({x:-118.6},0).wait(1).to({x:-110.5},0).wait(1).to({x:-102.4},0).wait(1).to({x:-94.3},0).wait(1).to({x:-86.3},0).wait(1).to({x:-78.2},0).wait(1).to({x:-70.1},0).wait(1).to({x:-62.1},0).wait(1).to({x:-54},0).wait(1).to({x:-45.9},0).wait(1).to({x:-37.8},0).wait(1).to({x:-29.8},0).wait(1).to({x:-21.7},0).wait(1).to({x:-13.6},0).wait(1).to({x:-5.5},0).wait(1).to({x:2.3},0).wait(1).to({x:10.4},0).wait(1).to({x:18.5},0).wait(1).to({x:26.6},0).wait(1).to({x:34.6},0).wait(1).to({x:42.7},0).wait(1).to({x:50.8},0).wait(1).to({x:58.9},0).wait(1).to({x:66.9},0).wait(1).to({x:75},0).wait(1).to({x:83.1},0).wait(1).to({x:91.2},0).wait(1).to({x:99.2},0).wait(1).to({x:107.3},0).wait(1).to({x:115.4},0).wait(1).to({x:123.4},0).wait(1).to({x:131.5},0).wait(1).to({x:139.6},0).wait(1).to({x:147.7},0).wait(1).to({x:155.7},0).wait(1).to({x:163.8},0).wait(1).to({x:171.9},0).wait(1).to({x:180},0).wait(1).to({x:188},0).wait(1).to({x:196.1},0).wait(1).to({x:204.2},0).wait(1).to({x:212.3},0).wait(1).to({x:220.3},0).wait(1).to({x:228.4},0).wait(1).to({x:236.5},0).wait(1).to({x:244.6},0).wait(1).to({x:252.6},0).wait(1).to({x:260.7},0).wait(1).to({x:268.8},0).wait(1).to({x:276.8},0).wait(1).to({x:284.9},0).wait(1).to({x:293},0).wait(1).to({x:301.1},0).wait(1).to({x:309.1},0).wait(1).to({x:317.2},0).wait(1).to({x:325.3},0).wait(1).to({x:333.4},0).wait(1).to({x:341.4},0).wait(1).to({x:349.5},0).wait(1).to({x:357.6},0).wait(1).to({x:365.7},0).wait(1).to({x:373.7},0).wait(1).to({x:381.8},0).wait(1).to({x:389.9},0).wait(1).to({x:397.9},0).wait(1).to({x:406},0).wait(1).to({x:414.1},0).wait(1).to({x:422.2},0).wait(1).to({x:430.2},0).wait(1).to({x:438.3},0).wait(1).to({x:446.4},0).wait(1).to({x:454.5},0).wait(1).to({x:462.5},0).wait(1).to({x:470.6},0).wait(1).to({x:478.7},0).wait(1).to({x:486.8},0).wait(1).to({x:494.8},0).wait(1).to({x:502.9},0).wait(1).to({x:511},0).wait(1).to({x:519.1},0).wait(1).to({x:527.1},0).wait(1).to({x:535.2},0).wait(1).to({x:543.3},0).wait(1).to({x:551.4},0).wait(1).to({x:559.4},0).wait(1).to({x:567.5},0).wait(1).to({x:575.6},0).wait(1).to({x:583.7},0).wait(1).to({x:591.7},0).wait(1).to({x:599.8},0).wait(1).to({x:607.9},0).wait(1).to({x:615.9},0).wait(1).to({x:624},0).wait(1).to({x:632.1},0).wait(1).to({x:640.2},0).wait(1).to({x:648.2},0).wait(1).to({x:656.3},0).wait(1).to({x:664.4},0).wait(1).to({x:672.5},0).wait(1).to({x:680.5},0).wait(1).to({x:688.6},0).wait(1).to({x:696.7},0).wait(1).to({x:704.8},0).wait(1).to({x:712.8},0).wait(1).to({x:720.9},0).wait(1).to({x:729},0).wait(1).to({x:737.1},0).wait(1).to({x:745.1},0).wait(1).to({x:753.2},0).wait(1).to({x:761.3},0).wait(1).to({x:769.3},0).wait(1).to({x:777.4},0).wait(1).to({x:785.5},0).wait(1).to({x:793.6},0).wait(1).to({x:801.6},0).wait(1).to({x:809.7},0).wait(1).to({x:817.8},0).wait(1).to({x:825.9},0).wait(1).to({x:833.9},0).wait(1).to({x:842},0).wait(1).to({x:850.1},0).wait(1).to({x:858.2},0).wait(1).to({x:866.2},0).wait(1).to({x:874.3},0).wait(1).to({x:882.4},0).wait(1).to({x:890.5},0).wait(1).to({x:898.5},0).wait(1).to({x:906.6},0).wait(1).to({x:914.7},0).wait(1).to({x:922.7},0).wait(1).to({x:930.8},0).wait(1).to({x:938.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2255.4,-53.8,2691,487.3);


(lib.mc_imatge_mares_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_12_Int();
	this.instance.setTransform(-1493.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1790.2,x:15.5},0).wait(22).wait(1).to({x:19.5},0).wait(1).to({x:23.4},0).wait(1).to({x:27.4},0).wait(1).to({x:31.3},0).wait(1).to({x:35.3},0).wait(1).to({x:39.2},0).wait(1).to({x:43.2},0).wait(1).to({x:47.1},0).wait(1).to({x:51.1},0).wait(1).to({x:55.1},0).wait(1).to({x:59},0).wait(1).to({x:63},0).wait(1).to({x:66.9},0).wait(1).to({x:70.9},0).wait(1).to({x:74.8},0).wait(1).to({x:78.8},0).wait(1).to({x:82.8},0).wait(1).to({x:86.7},0).wait(1).to({x:90.7},0).wait(1).to({x:94.6},0).wait(1).to({x:98.6},0).wait(1).to({x:102.5},0).wait(1).to({x:106.5},0).wait(1).to({x:110.4},0).wait(1).to({x:114.4},0).wait(1).to({x:118.4},0).wait(1).to({x:122.3},0).wait(1).to({x:126.3},0).wait(1).to({x:130.2},0).wait(1).to({x:134.2},0).wait(1).to({x:138.1},0).wait(1).to({x:142.1},0).wait(1).to({x:146},0).wait(1).to({x:150},0).wait(1).to({x:154},0).wait(1).to({x:157.9},0).wait(1).to({x:161.9},0).wait(1).to({x:165.8},0).wait(1).to({x:169.8},0).wait(1).to({x:173.7},0).wait(1).to({x:177.7},0).wait(1).to({x:181.7},0).wait(1).to({x:185.6},0).wait(1).to({x:189.6},0).wait(1).to({x:193.5},0).wait(1).to({x:197.5},0).wait(1).to({x:201.4},0).wait(1).to({x:205.4},0).wait(1).to({x:209.3},0).wait(1).to({x:213.3},0).wait(1).to({x:217.3},0).wait(1).to({x:221.2},0).wait(1).to({x:225.2},0).wait(1).to({x:229.1},0).wait(1).to({x:233.1},0).wait(1).to({x:237},0).wait(1).to({x:241},0).wait(1).to({x:244.9},0).wait(1).to({x:248.9},0).wait(1).to({x:252.9},0).wait(1).to({x:256.8},0).wait(1).to({x:260.8},0).wait(1).to({x:264.7},0).wait(1).to({x:268.7},0).wait(1).to({x:272.6},0).wait(1).to({x:276.6},0).wait(1).to({x:280.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.8,0,562.5,375);


(lib.mc_imatge_mares_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_11_Int();
	this.instance.setTransform(-1488.1,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1035.5,x:-733.8},0).wait(22).wait(1).to({x:-727.1},0).wait(1).to({x:-720.5},0).wait(1).to({x:-713.9},0).wait(1).to({x:-707.3},0).wait(1).to({x:-700.7},0).wait(1).to({x:-694},0).wait(1).to({x:-687.4},0).wait(1).to({x:-680.8},0).wait(1).to({x:-674.2},0).wait(1).to({x:-667.6},0).wait(1).to({x:-660.9},0).wait(1).to({x:-654.3},0).wait(1).to({x:-647.7},0).wait(1).to({x:-641.1},0).wait(1).to({x:-634.5},0).wait(1).to({x:-627.9},0).wait(1).to({x:-621.2},0).wait(1).to({x:-614.6},0).wait(1).to({x:-608},0).wait(1).to({x:-601.4},0).wait(1).to({x:-594.8},0).wait(1).to({x:-588.1},0).wait(1).to({x:-581.5},0).wait(1).to({x:-574.9},0).wait(1).to({x:-568.3},0).wait(1).to({x:-561.7},0).wait(1).to({x:-555},0).wait(1).to({x:-548.4},0).wait(1).to({x:-541.8},0).wait(1).to({x:-535.2},0).wait(1).to({x:-528.6},0).wait(1).to({x:-522},0).wait(1).to({x:-515.3},0).wait(1).to({x:-508.7},0).wait(1).to({x:-502.1},0).wait(1).to({x:-495.5},0).wait(1).to({x:-488.9},0).wait(1).to({x:-482.2},0).wait(1).to({x:-475.6},0).wait(1).to({x:-469},0).wait(1).to({x:-462.4},0).wait(1).to({x:-455.8},0).wait(1).to({x:-449.1},0).wait(1).to({x:-442.5},0).wait(1).to({x:-435.9},0).wait(1).to({x:-429.3},0).wait(1).to({x:-422.7},0).wait(1).to({x:-416.1},0).wait(1).to({x:-409.4},0).wait(1).to({x:-402.8},0).wait(1).to({x:-396.2},0).wait(1).to({x:-389.6},0).wait(1).to({x:-383},0).wait(1).to({x:-376.3},0).wait(1).to({x:-369.7},0).wait(1).to({x:-363.1},0).wait(1).to({x:-356.5},0).wait(1).to({x:-349.9},0).wait(1).to({x:-343.2},0).wait(1).to({x:-336.6},0).wait(1).to({x:-330},0).wait(1).to({x:-323.4},0).wait(1).to({x:-316.8},0).wait(1).to({x:-310.2},0).wait(1).to({x:-303.5},0).wait(1).to({x:-296.9},0).wait(1).to({x:-290.3},0).wait(1).to({x:-283.7},0).wait(1).to({x:-277.1},0).wait(1).to({x:-270.4},0).wait(1).to({x:-263.8},0).wait(1).to({x:-257.2},0).wait(1).to({x:-250.6},0).wait(1).to({x:-244},0).wait(1).to({x:-237.3},0).wait(1).to({x:-230.7},0).wait(1).to({x:-224.1},0).wait(1).to({x:-217.5},0).wait(1).to({x:-210.9},0).wait(1).to({x:-204.3},0).wait(1).to({x:-197.6},0).wait(1).to({x:-191},0).wait(1).to({x:-184.4},0).wait(1).to({x:-177.8},0).wait(1).to({x:-171.2},0).wait(1).to({x:-164.5},0).wait(1).to({x:-157.9},0).wait(1).to({x:-151.3},0).wait(1).to({x:-144.7},0).wait(1).to({x:-138.1},0).wait(1).to({x:-131.4},0).wait(1).to({x:-124.8},0).wait(1).to({x:-118.2},0).wait(1).to({x:-111.6},0).wait(1).to({x:-105},0).wait(1).to({x:-98.4},0).wait(1).to({x:-91.7},0).wait(1).to({x:-85.1},0).wait(1).to({x:-78.5},0).wait(1).to({x:-71.9},0).wait(1).to({x:-65.3},0).wait(1).to({x:-58.6},0).wait(1).to({x:-52},0).wait(1).to({x:-45.4},0).wait(1).to({x:-38.8},0).wait(1).to({x:-32.2},0).wait(1).to({x:-25.5},0).wait(1).to({x:-18.9},0).wait(1).to({x:-12.3},0).wait(1).to({x:-5.7},0).wait(1).to({x:0.7},0).wait(1).to({x:7.3},0).wait(1).to({x:14},0).wait(1).to({x:20.6},0).wait(1).to({x:27.2},0).wait(1).to({x:33.8},0).wait(1).to({x:40.4},0).wait(1).to({x:47.1},0).wait(1).to({x:53.7},0).wait(1).to({x:60.3},0).wait(1).to({x:66.9},0).wait(1).to({x:73.5},0).wait(1).to({x:80.2},0).wait(1).to({x:86.8},0).wait(1).to({x:93.4},0).wait(1).to({x:100},0).wait(1).to({x:106.6},0).wait(1).to({x:113.2},0).wait(1).to({x:119.9},0).wait(1).to({x:126.5},0).wait(1).to({x:133.1},0).wait(1).to({x:139.7},0).wait(1).to({x:146.3},0).wait(1).to({x:153},0).wait(1).to({x:159.6},0).wait(1).to({x:166.2},0).wait(1).to({x:172.8},0).wait(1).to({x:179.4},0).wait(1).to({x:186.1},0).wait(1).to({x:192.7},0).wait(1).to({x:199.3},0).wait(1).to({x:205.9},0).wait(1).to({x:212.5},0).wait(1).to({x:219.1},0).wait(1).to({x:225.8},0).wait(1).to({x:232.4},0).wait(1).to({x:239},0).wait(1).to({x:245.6},0).wait(1).to({x:252.2},0).wait(1).to({x:258.9},0).wait(1).to({x:265.5},0).wait(1).to({x:272.1},0).wait(1).to({x:278.7},0).wait(1).to({x:285.3},0).wait(1).to({x:292},0).wait(1).to({x:298.6},0).wait(1).to({x:305.2},0).wait(1).to({x:311.8},0).wait(1).to({x:318.4},0).wait(1).to({x:325},0).wait(1).to({x:331.7},0).wait(1).to({x:338.3},0).wait(1).to({x:344.9},0).wait(1).to({x:351.5},0).wait(1).to({x:358.1},0).wait(1).to({x:364.8},0).wait(1).to({x:371.4},0).wait(1).to({x:378},0).wait(1).to({x:384.6},0).wait(1).to({x:391.2},0).wait(1).to({x:397.9},0).wait(1).to({x:404.5},0).wait(1).to({x:411.1},0).wait(1).to({x:417.7},0).wait(1).to({x:424.3},0).wait(1).to({x:430.9},0).wait(1).to({x:437.6},0).wait(1).to({x:444.2},0).wait(1).to({x:450.8},0).wait(1).to({x:457.4},0).wait(1).to({x:464},0).wait(1).to({x:470.7},0).wait(1).to({x:477.3},0).wait(1).to({x:483.9},0).wait(1).to({x:490.5},0).wait(1).to({x:497.1},0).wait(1).to({x:503.8},0).wait(1).to({x:510.4},0).wait(1).to({x:517},0).wait(1).to({x:523.6},0).wait(1).to({x:530.2},0).wait(1).to({x:536.8},0).wait(1).to({x:543.5},0).wait(1).to({x:550.1},0).wait(1).to({x:556.7},0).wait(1).to({x:563.3},0).wait(1).to({x:569.9},0).wait(1).to({x:576.6},0).wait(1).to({x:583.2},0).wait(1).to({x:589.8},0).wait(1).to({x:596.4},0).wait(1).to({x:603},0).wait(1).to({x:609.7},0).wait(1).to({x:616.3},0).wait(1).to({x:622.9},0).wait(1).to({x:629.5},0).wait(1).to({x:636.1},0).wait(1).to({x:642.7},0).wait(1).to({x:649.4},0).wait(1).to({x:656},0).wait(1).to({x:662.6},0).wait(1).to({x:669.2},0).wait(1).to({x:675.8},0).wait(1).to({x:682.5},0).wait(1).to({x:689.1},0).wait(1).to({x:695.7},0).wait(1).to({x:702.3},0).wait(1).to({x:708.9},0).wait(1).to({x:715.6},0).wait(1).to({x:722.2},0).wait(1).to({x:728.8},0).wait(1).to({x:735.4},0).wait(1).to({x:742},0).wait(1).to({x:748.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1769.4,0,2071,375);


(lib.mc_imatge_mares_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_10_Int();
	this.instance.setTransform(278.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).wait(1).to({x:273.7},0).wait(1).to({x:269},0).wait(1).to({x:264.4},0).wait(1).to({x:259.7},0).wait(1).to({x:255.1},0).wait(1).to({x:250.5},0).wait(1).to({x:245.8},0).wait(1).to({x:241.2},0).wait(1).to({x:236.5},0).wait(1).to({x:231.9},0).wait(1).to({x:227.3},0).wait(1).to({x:222.6},0).wait(1).to({x:218},0).wait(1).to({x:213.3},0).wait(1).to({x:208.7},0).wait(1).to({x:204.1},0).wait(1).to({x:199.4},0).wait(1).to({x:194.8},0).wait(1).to({x:190.2},0).wait(1).to({x:185.5},0).wait(1).to({x:180.9},0).wait(1).to({x:176.2},0).wait(1).to({x:171.6},0).wait(1).to({x:167},0).wait(1).to({x:162.3},0).wait(1).to({x:157.7},0).wait(1).to({x:153},0).wait(1).to({x:148.4},0).wait(1).to({x:143.8},0).wait(1).to({x:139.1},0).wait(1).to({x:134.5},0).wait(1).to({x:129.8},0).wait(1).to({x:125.2},0).wait(1).to({x:120.6},0).wait(1).to({x:115.9},0).wait(1).to({x:111.3},0).wait(1).to({x:106.6},0).wait(1).to({x:102},0).wait(1).to({x:97.4},0).wait(1).to({x:92.7},0).wait(1).to({x:88.1},0).wait(1).to({x:83.4},0).wait(1).to({x:78.8},0).wait(1).to({x:74.2},0).wait(1).to({x:69.5},0).wait(1).to({x:64.9},0).wait(1).to({x:60.3},0).wait(1).to({x:55.6},0).wait(1).to({x:51},0).wait(1).to({x:46.3},0).wait(1).to({x:41.7},0).wait(1).to({x:37.1},0).wait(1).to({x:32.4},0).wait(1).to({x:27.8},0).wait(1).to({x:23.1},0).wait(1).to({x:18.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,562.5,375);


(lib.mc_imatge_mares_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_09_Int();
	this.instance.setTransform(278.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:280.3,x:277.3},0).wait(22).wait(1).to({x:272.7},0).wait(1).to({x:268},0).wait(1).to({x:263.4},0).wait(1).to({x:258.7},0).wait(1).to({x:254.1},0).wait(1).to({x:249.5},0).wait(1).to({x:244.8},0).wait(1).to({x:240.2},0).wait(1).to({x:235.5},0).wait(1).to({x:230.9},0).wait(1).to({x:226.3},0).wait(1).to({x:221.6},0).wait(1).to({x:217},0).wait(1).to({x:212.3},0).wait(1).to({x:207.7},0).wait(1).to({x:203.1},0).wait(1).to({x:198.4},0).wait(1).to({x:193.8},0).wait(1).to({x:189.2},0).wait(1).to({x:184.5},0).wait(1).to({x:179.9},0).wait(1).to({x:175.2},0).wait(1).to({x:170.6},0).wait(1).to({x:166},0).wait(1).to({x:161.3},0).wait(1).to({x:156.7},0).wait(1).to({x:152},0).wait(1).to({x:147.4},0).wait(1).to({x:142.8},0).wait(1).to({x:138.1},0).wait(1).to({x:133.5},0).wait(1).to({x:128.8},0).wait(1).to({x:124.2},0).wait(1).to({x:119.6},0).wait(1).to({x:114.9},0).wait(1).to({x:110.3},0).wait(1).to({x:105.6},0).wait(1).to({x:101},0).wait(1).to({x:96.4},0).wait(1).to({x:91.7},0).wait(1).to({x:87.1},0).wait(1).to({x:82.4},0).wait(1).to({x:77.8},0).wait(1).to({x:73.2},0).wait(1).to({x:68.5},0).wait(1).to({x:63.9},0).wait(1).to({x:59.3},0).wait(1).to({x:54.6},0).wait(1).to({x:50},0).wait(1).to({x:45.3},0).wait(1).to({x:40.7},0).wait(1).to({x:36.1},0).wait(1).to({x:31.4},0).wait(1).to({x:26.8},0).wait(1).to({x:22.1},0).wait(1).to({x:17.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,560.5,375);


(lib.mc_imatge_mares_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_08_Int();
	this.instance.setTransform(278.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:282.3,x:279.3},0).wait(22).wait(1).to({x:274.6},0).wait(1).to({x:269.8},0).wait(1).to({x:265.1},0).wait(1).to({x:260.4},0).wait(1).to({x:255.6},0).wait(1).to({x:250.9},0).wait(1).to({x:246.2},0).wait(1).to({x:241.4},0).wait(1).to({x:236.7},0).wait(1).to({x:232},0).wait(1).to({x:227.2},0).wait(1).to({x:222.5},0).wait(1).to({x:217.8},0).wait(1).to({x:213},0).wait(1).to({x:208.3},0).wait(1).to({x:203.6},0).wait(1).to({x:198.9},0).wait(1).to({x:194.1},0).wait(1).to({x:189.4},0).wait(1).to({x:184.7},0).wait(1).to({x:179.9},0).wait(1).to({x:175.2},0).wait(1).to({x:170.5},0).wait(1).to({x:165.7},0).wait(1).to({x:161},0).wait(1).to({x:156.3},0).wait(1).to({x:151.5},0).wait(1).to({x:146.8},0).wait(1).to({x:142.1},0).wait(1).to({x:137.3},0).wait(1).to({x:132.6},0).wait(1).to({x:127.9},0).wait(1).to({x:123.1},0).wait(1).to({x:118.4},0).wait(1).to({x:113.7},0).wait(1).to({x:108.9},0).wait(1).to({x:104.2},0).wait(1).to({x:99.5},0).wait(1).to({x:94.7},0).wait(1).to({x:90},0).wait(1).to({x:85.3},0).wait(1).to({x:80.5},0).wait(1).to({x:75.8},0).wait(1).to({x:71.1},0).wait(1).to({x:66.4},0).wait(1).to({x:61.6},0).wait(1).to({x:56.9},0).wait(1).to({x:52.2},0).wait(1).to({x:47.4},0).wait(1).to({x:42.7},0).wait(1).to({x:38},0).wait(1).to({x:33.2},0).wait(1).to({x:28.5},0).wait(1).to({x:23.8},0).wait(1).to({x:19},0).wait(1).to({x:14.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,564.5,375);


(lib.mc_imatge_mares_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_07_Int();
	this.instance.setTransform(14.5,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:282.3,x:15.5},0).wait(22).wait(1).to({x:20.3},0).wait(1).to({x:25},0).wait(1).to({x:29.7},0).wait(1).to({x:34.4},0).wait(1).to({x:39.1},0).wait(1).to({x:43.8},0).wait(1).to({x:48.5},0).wait(1).to({x:53.2},0).wait(1).to({x:57.9},0).wait(1).to({x:62.6},0).wait(1).to({x:67.4},0).wait(1).to({x:72.1},0).wait(1).to({x:76.8},0).wait(1).to({x:81.5},0).wait(1).to({x:86.2},0).wait(1).to({x:90.9},0).wait(1).to({x:95.6},0).wait(1).to({x:100.3},0).wait(1).to({x:105},0).wait(1).to({x:109.7},0).wait(1).to({x:114.5},0).wait(1).to({x:119.2},0).wait(1).to({x:123.9},0).wait(1).to({x:128.6},0).wait(1).to({x:133.3},0).wait(1).to({x:138},0).wait(1).to({x:142.7},0).wait(1).to({x:147.4},0).wait(1).to({x:152.1},0).wait(1).to({x:156.8},0).wait(1).to({x:161.6},0).wait(1).to({x:166.3},0).wait(1).to({x:171},0).wait(1).to({x:175.7},0).wait(1).to({x:180.4},0).wait(1).to({x:185.1},0).wait(1).to({x:189.8},0).wait(1).to({x:194.5},0).wait(1).to({x:199.2},0).wait(1).to({x:203.9},0).wait(1).to({x:208.7},0).wait(1).to({x:213.4},0).wait(1).to({x:218.1},0).wait(1).to({x:222.8},0).wait(1).to({x:227.5},0).wait(1).to({x:232.2},0).wait(1).to({x:236.9},0).wait(1).to({x:241.6},0).wait(1).to({x:246.3},0).wait(1).to({x:251},0).wait(1).to({x:255.8},0).wait(1).to({x:260.5},0).wait(1).to({x:265.2},0).wait(1).to({x:269.9},0).wait(1).to({x:274.6},0).wait(1).to({x:279.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.7,0,564.5,375);


(lib.mc_imatge_mares_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_06_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:291.3,x:291.3},0).wait(22).wait(1).to({x:286.3},0).wait(1).to({x:281.2},0).wait(1).to({x:276.1},0).wait(1).to({x:271},0).wait(1).to({x:265.9},0).wait(1).to({x:260.8},0).wait(1).to({x:255.8},0).wait(1).to({x:250.7},0).wait(1).to({x:245.6},0).wait(1).to({x:240.5},0).wait(1).to({x:235.4},0).wait(1).to({x:230.3},0).wait(1).to({x:225.3},0).wait(1).to({x:220.2},0).wait(1).to({x:215.1},0).wait(1).to({x:210},0).wait(1).to({x:204.9},0).wait(1).to({x:199.8},0).wait(1).to({x:194.8},0).wait(1).to({x:189.7},0).wait(1).to({x:184.6},0).wait(1).to({x:179.5},0).wait(1).to({x:174.4},0).wait(1).to({x:169.3},0).wait(1).to({x:164.3},0).wait(1).to({x:159.2},0).wait(1).to({x:154.1},0).wait(1).to({x:149},0).wait(1).to({x:143.9},0).wait(1).to({x:138.8},0).wait(1).to({x:133.7},0).wait(1).to({x:128.7},0).wait(1).to({x:123.6},0).wait(1).to({x:118.5},0).wait(1).to({x:113.4},0).wait(1).to({x:108.3},0).wait(1).to({x:103.2},0).wait(1).to({x:98.2},0).wait(1).to({x:93.1},0).wait(1).to({x:88},0).wait(1).to({x:82.9},0).wait(1).to({x:77.8},0).wait(1).to({x:72.7},0).wait(1).to({x:67.7},0).wait(1).to({x:62.6},0).wait(1).to({x:57.5},0).wait(1).to({x:52.4},0).wait(1).to({x:47.3},0).wait(1).to({x:42.2},0).wait(1).to({x:37.2},0).wait(1).to({x:32.1},0).wait(1).to({x:27},0).wait(1).to({x:21.9},0).wait(1).to({x:16.8},0).wait(1).to({x:11.7},0).wait(1).to({x:6.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,582.5,375);


(lib.mc_imatge_mares_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_05_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).wait(1).to({x:276.6},0).wait(1).to({x:271.9},0).wait(1).to({x:267.1},0).wait(1).to({x:262.4},0).wait(1).to({x:257.6},0).wait(1).to({x:252.9},0).wait(1).to({x:248.1},0).wait(1).to({x:243.4},0).wait(1).to({x:238.6},0).wait(1).to({x:233.9},0).wait(1).to({x:229.1},0).wait(1).to({x:224.4},0).wait(1).to({x:219.6},0).wait(1).to({x:214.9},0).wait(1).to({x:210.1},0).wait(1).to({x:205.4},0).wait(1).to({x:200.6},0).wait(1).to({x:195.9},0).wait(1).to({x:191.1},0).wait(1).to({x:186.4},0).wait(1).to({x:181.6},0).wait(1).to({x:176.9},0).wait(1).to({x:172.1},0).wait(1).to({x:167.4},0).wait(1).to({x:162.6},0).wait(1).to({x:157.9},0).wait(1).to({x:153.1},0).wait(1).to({x:148.4},0).wait(1).to({x:143.7},0).wait(1).to({x:138.9},0).wait(1).to({x:134.2},0).wait(1).to({x:129.4},0).wait(1).to({x:124.7},0).wait(1).to({x:119.9},0).wait(1).to({x:115.2},0).wait(1).to({x:110.4},0).wait(1).to({x:105.7},0).wait(1).to({x:100.9},0).wait(1).to({x:96.2},0).wait(1).to({x:91.4},0).wait(1).to({x:86.7},0).wait(1).to({x:81.9},0).wait(1).to({x:77.2},0).wait(1).to({x:72.4},0).wait(1).to({x:67.7},0).wait(1).to({x:62.9},0).wait(1).to({x:58.2},0).wait(1).to({x:53.4},0).wait(1).to({x:48.7},0).wait(1).to({x:43.9},0).wait(1).to({x:39.2},0).wait(1).to({x:34.4},0).wait(1).to({x:29.7},0).wait(1).to({x:24.9},0).wait(1).to({x:20.2},0).wait(1).to({x:15.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.mc_imatge_mares_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_04_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).wait(1).to({x:276.6},0).wait(1).to({x:271.9},0).wait(1).to({x:267.1},0).wait(1).to({x:262.4},0).wait(1).to({x:257.6},0).wait(1).to({x:252.9},0).wait(1).to({x:248.1},0).wait(1).to({x:243.4},0).wait(1).to({x:238.6},0).wait(1).to({x:233.9},0).wait(1).to({x:229.1},0).wait(1).to({x:224.4},0).wait(1).to({x:219.6},0).wait(1).to({x:214.9},0).wait(1).to({x:210.1},0).wait(1).to({x:205.4},0).wait(1).to({x:200.6},0).wait(1).to({x:195.9},0).wait(1).to({x:191.1},0).wait(1).to({x:186.4},0).wait(1).to({x:181.6},0).wait(1).to({x:176.9},0).wait(1).to({x:172.1},0).wait(1).to({x:167.4},0).wait(1).to({x:162.6},0).wait(1).to({x:157.9},0).wait(1).to({x:153.1},0).wait(1).to({x:148.4},0).wait(1).to({x:143.7},0).wait(1).to({x:138.9},0).wait(1).to({x:134.2},0).wait(1).to({x:129.4},0).wait(1).to({x:124.7},0).wait(1).to({x:119.9},0).wait(1).to({x:115.2},0).wait(1).to({x:110.4},0).wait(1).to({x:105.7},0).wait(1).to({x:100.9},0).wait(1).to({x:96.2},0).wait(1).to({x:91.4},0).wait(1).to({x:86.7},0).wait(1).to({x:81.9},0).wait(1).to({x:77.2},0).wait(1).to({x:72.4},0).wait(1).to({x:67.7},0).wait(1).to({x:62.9},0).wait(1).to({x:58.2},0).wait(1).to({x:53.4},0).wait(1).to({x:48.7},0).wait(1).to({x:43.9},0).wait(1).to({x:39.2},0).wait(1).to({x:34.4},0).wait(1).to({x:29.7},0).wait(1).to({x:24.9},0).wait(1).to({x:20.2},0).wait(1).to({x:15.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.mc_imatge_mares_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_03_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).wait(1).to({x:276.6},0).wait(1).to({x:271.9},0).wait(1).to({x:267.1},0).wait(1).to({x:262.4},0).wait(1).to({x:257.6},0).wait(1).to({x:252.9},0).wait(1).to({x:248.1},0).wait(1).to({x:243.4},0).wait(1).to({x:238.6},0).wait(1).to({x:233.9},0).wait(1).to({x:229.1},0).wait(1).to({x:224.4},0).wait(1).to({x:219.6},0).wait(1).to({x:214.9},0).wait(1).to({x:210.1},0).wait(1).to({x:205.4},0).wait(1).to({x:200.6},0).wait(1).to({x:195.9},0).wait(1).to({x:191.1},0).wait(1).to({x:186.4},0).wait(1).to({x:181.6},0).wait(1).to({x:176.9},0).wait(1).to({x:172.1},0).wait(1).to({x:167.4},0).wait(1).to({x:162.6},0).wait(1).to({x:157.9},0).wait(1).to({x:153.1},0).wait(1).to({x:148.4},0).wait(1).to({x:143.7},0).wait(1).to({x:138.9},0).wait(1).to({x:134.2},0).wait(1).to({x:129.4},0).wait(1).to({x:124.7},0).wait(1).to({x:119.9},0).wait(1).to({x:115.2},0).wait(1).to({x:110.4},0).wait(1).to({x:105.7},0).wait(1).to({x:100.9},0).wait(1).to({x:96.2},0).wait(1).to({x:91.4},0).wait(1).to({x:86.7},0).wait(1).to({x:81.9},0).wait(1).to({x:77.2},0).wait(1).to({x:72.4},0).wait(1).to({x:67.7},0).wait(1).to({x:62.9},0).wait(1).to({x:58.2},0).wait(1).to({x:53.4},0).wait(1).to({x:48.7},0).wait(1).to({x:43.9},0).wait(1).to({x:39.2},0).wait(1).to({x:34.4},0).wait(1).to({x:29.7},0).wait(1).to({x:24.9},0).wait(1).to({x:20.2},0).wait(1).to({x:15.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,562.5,375);


(lib.mc_imatge_mares_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_02_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:293,x:293},0).wait(22).wait(1).to({x:287.9},0).wait(1).to({x:282.8},0).wait(1).to({x:277.6},0).wait(1).to({x:272.5},0).wait(1).to({x:267.3},0).wait(1).to({x:262.2},0).wait(1).to({x:257},0).wait(1).to({x:251.9},0).wait(1).to({x:246.8},0).wait(1).to({x:241.6},0).wait(1).to({x:236.5},0).wait(1).to({x:231.3},0).wait(1).to({x:226.2},0).wait(1).to({x:221},0).wait(1).to({x:215.9},0).wait(1).to({x:210.7},0).wait(1).to({x:205.6},0).wait(1).to({x:200.5},0).wait(1).to({x:195.3},0).wait(1).to({x:190.2},0).wait(1).to({x:185},0).wait(1).to({x:179.9},0).wait(1).to({x:174.7},0).wait(1).to({x:169.6},0).wait(1).to({x:164.5},0).wait(1).to({x:159.3},0).wait(1).to({x:154.2},0).wait(1).to({x:149},0).wait(1).to({x:143.9},0).wait(1).to({x:138.7},0).wait(1).to({x:133.6},0).wait(1).to({x:128.4},0).wait(1).to({x:123.3},0).wait(1).to({x:118.2},0).wait(1).to({x:113},0).wait(1).to({x:107.9},0).wait(1).to({x:102.7},0).wait(1).to({x:97.6},0).wait(1).to({x:92.4},0).wait(1).to({x:87.3},0).wait(1).to({x:82.2},0).wait(1).to({x:77},0).wait(1).to({x:71.9},0).wait(1).to({x:66.7},0).wait(1).to({x:61.6},0).wait(1).to({x:56.4},0).wait(1).to({x:51.3},0).wait(1).to({x:46.1},0).wait(1).to({x:41},0).wait(1).to({x:35.9},0).wait(1).to({x:30.7},0).wait(1).to({x:25.6},0).wait(1).to({x:20.4},0).wait(1).to({x:15.3},0).wait(1).to({x:10.1},0).wait(1).to({x:5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,586,375);


(lib.mc_imatge_mares_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2tdkMAAAg7HMAtzAAAMAAAA7Hg");
	mask.setTransform(147.8,187.8);

	// Imatge
	this.instance = new lib.mc_imatge_mares_01_Int();
	this.instance.setTransform(281.3,187.5,1,1,0,0,0,281.3,187.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:249,x:249},0).wait(22).wait(1).to({x:245.5},0).wait(1).to({x:241.9},0).wait(1).to({x:238.3},0).wait(1).to({x:234.7},0).wait(1).to({x:231.1},0).wait(1).to({x:227.5},0).wait(1).to({x:223.9},0).wait(1).to({x:220.4},0).wait(1).to({x:216.8},0).wait(1).to({x:213.2},0).wait(1).to({x:209.6},0).wait(1).to({x:206},0).wait(1).to({x:202.4},0).wait(1).to({x:198.8},0).wait(1).to({x:195.3},0).wait(1).to({x:191.7},0).wait(1).to({x:188.1},0).wait(1).to({x:184.5},0).wait(1).to({x:180.9},0).wait(1).to({x:177.3},0).wait(1).to({x:173.7},0).wait(1).to({x:170.2},0).wait(1).to({x:166.6},0).wait(1).to({x:163},0).wait(1).to({x:159.4},0).wait(1).to({x:155.8},0).wait(1).to({x:152.2},0).wait(1).to({x:148.6},0).wait(1).to({x:145.1},0).wait(1).to({x:141.5},0).wait(1).to({x:137.9},0).wait(1).to({x:134.3},0).wait(1).to({x:130.7},0).wait(1).to({x:127.1},0).wait(1).to({x:123.5},0).wait(1).to({x:120},0).wait(1).to({x:116.4},0).wait(1).to({x:112.8},0).wait(1).to({x:109.2},0).wait(1).to({x:105.6},0).wait(1).to({x:102},0).wait(1).to({x:98.4},0).wait(1).to({x:94.9},0).wait(1).to({x:91.3},0).wait(1).to({x:87.7},0).wait(1).to({x:84.1},0).wait(1).to({x:80.5},0).wait(1).to({x:76.9},0).wait(1).to({x:73.3},0).wait(1).to({x:69.8},0).wait(1).to({x:66.2},0).wait(1).to({x:62.6},0).wait(1).to({x:59},0).wait(1).to({x:55.4},0).wait(1).to({x:51.8},0).wait(1).to({x:48.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,498,375);


(lib.mc_loader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Capa 1
	this.mc_barras = new lib.mc_loader_barra();
	this.mc_barras.setTransform(22.9,30.1,1,1,0,0,0,13.6,22.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_barras).wait(1).to({rotation:4.6},0).wait(1).to({rotation:9.1,y:30},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:22.8},0).wait(1).to({rotation:27.3,y:30.1},0).wait(1).to({rotation:31.9},0).wait(1).to({rotation:36.5},0).wait(1).to({rotation:41,y:30},0).wait(1).to({rotation:45.6},0).wait(1).to({rotation:50.1},0).wait(1).to({rotation:54.7,y:30.1},0).wait(1).to({rotation:59.2},0).wait(1).to({rotation:63.8,y:30},0).wait(1).to({rotation:68.4},0).wait(1).to({rotation:72.9,y:30.1},0).wait(1).to({rotation:77.5},0).wait(1).to({rotation:82,y:30},0).wait(1).to({rotation:86.6,y:30.1},0).wait(1).to({rotation:91.1},0).wait(1).to({rotation:95.7},0).wait(1).to({rotation:100.3},0).wait(1).to({rotation:104.8,y:30},0).wait(1).to({rotation:109.4,y:30.1},0).wait(1).to({rotation:113.9},0).wait(1).to({rotation:118.5},0).wait(1).to({rotation:123,y:30},0).wait(1).to({rotation:127.6,y:30.1},0).wait(1).to({rotation:132.2},0).wait(1).to({rotation:136.7},0).wait(1).to({rotation:141.3,y:30},0).wait(1).to({rotation:145.8,y:30.1},0).wait(1).to({rotation:150.4,y:30},0).wait(1).to({rotation:154.9},0).wait(1).to({rotation:159.5},0).wait(1).to({rotation:164.1,y:30.1},0).wait(1).to({rotation:168.6},0).wait(1).to({rotation:173.2,y:30},0).wait(1).to({rotation:177.7},0).wait(1).to({rotation:182.4},0).wait(1).to({rotation:186.9,y:30.1},0).wait(1).to({rotation:191.5,y:30},0).wait(1).to({rotation:196,y:30.1},0).wait(1).to({rotation:200.6},0).wait(1).to({rotation:205.2},0).wait(1).to({rotation:209.7},0).wait(1).to({rotation:214.3},0).wait(1).to({rotation:218.8,y:30},0).wait(1).to({rotation:223.4},0).wait(1).to({rotation:227.9},0).wait(1).to({rotation:232.5},0).wait(1).to({rotation:237.1},0).wait(1).to({rotation:241.6,y:30.1},0).wait(1).to({rotation:246.2,y:30},0).wait(1).to({rotation:250.7},0).wait(1).to({rotation:255.3},0).wait(1).to({rotation:259.8},0).wait(1).to({rotation:264.4},0).wait(1).to({rotation:269,y:30.1},0).wait(1).to({rotation:273.5,y:30},0).wait(1).to({rotation:278.1,x:23,y:30.1},0).wait(1).to({rotation:282.6,x:22.9,y:30},0).wait(1).to({rotation:287.2,x:23},0).wait(1).to({rotation:291.7,x:22.9},0).wait(1).to({rotation:296.3},0).wait(1).to({rotation:300.9,x:23},0).wait(1).to({rotation:305.4,x:22.9,y:30.1},0).wait(1).to({rotation:310,y:30},0).wait(1).to({rotation:314.5,y:30.1},0).wait(1).to({rotation:319.1},0).wait(1).to({rotation:323.6,x:23,y:30},0).wait(1).to({rotation:328.2},0).wait(1).to({rotation:332.8,x:22.9},0).wait(1).to({rotation:337.3},0).wait(1).to({rotation:341.9},0).wait(1).to({rotation:346.4,y:30.1},0).wait(1).to({rotation:351,y:30},0).wait(1).to({rotation:355.5,y:30.1},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,7.3,45.7,45.6);


(lib.popup_vertiente_05 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_vertiente_05 = new lib.btn_ampliar();
	this.btn_ampliar_vertiente_05.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_vertiente_05, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_vertiente_05 = new cjs.Text("", "22px Verdana");
	this.txt_popup_vertiente_05.lineHeight = 24;
	this.txt_popup_vertiente_05.lineWidth = 457;
	this.txt_popup_vertiente_05.setTransform(410.6,214.4);
this.btn_ampliar_vertiente_05.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_vertiente_05());
        });
 var html = createDiv(txt['txt_popup_vertiente_05'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_vertiente_05 = new cjs.DOMElement(html);
    this.txt_popup_vertiente_05.setTransform(410, 204-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_vertiente_05();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C78089").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_vertiente_05,this.instance,this.btn_salir,this.btn_ampliar_vertiente_05);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_vertiente_04 = function() {
	this.initialize();

	
	// Botons
	this.btn_ampliar_vertiente_04 = new lib.btn_ampliar();
	this.btn_ampliar_vertiente_04.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_vertiente_04, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	
	// Txt
	this.txt_popup_vertiente_04 = new cjs.Text("", "22px Verdana");
	this.txt_popup_vertiente_04.lineHeight = 24;
	this.txt_popup_vertiente_04.lineWidth = 506;
	this.txt_popup_vertiente_04.setTransform(410.6,169.4);
this.btn_ampliar_vertiente_04.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_vertiente_04());
        });
 var html = createDiv(txt['txt_popup_vertiente_04'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_vertiente_04 = new cjs.DOMElement(html);
    this.txt_popup_vertiente_04.setTransform(410, 204-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_vertiente_04();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F846B").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_vertiente_04,this.btn_salir,this.btn_ampliar_vertiente_04,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_vertiente_03 = function() {
	this.initialize();


	// Botons
	this.btn_ampliar_vertiente_03 = new lib.btn_ampliar();
	this.btn_ampliar_vertiente_03.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_vertiente_03, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	// Txt
	this.txt_popup_vertiente_03 = new cjs.Text("", "22px Verdana");
	this.txt_popup_vertiente_03.lineHeight = 24;
	this.txt_popup_vertiente_03.lineWidth = 506;
	this.txt_popup_vertiente_03.setTransform(410.6,169.4);
this.btn_ampliar_vertiente_03.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_vertiente_03());
        });
 var html = createDiv(txt['txt_popup_vertiente_03'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_vertiente_03 = new cjs.DOMElement(html);
    this.txt_popup_vertiente_03.setTransform(410, 204-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_vertiente_03();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7AB199").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_vertiente_03,this.btn_salir,this.btn_ampliar_vertiente_03,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_vertiente_02 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_vertiente_02 = new lib.btn_ampliar();
	this.btn_ampliar_vertiente_02.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_vertiente_02, 0, 1, 2, false, new lib.btn_ampliar(), 3);

// txt2
	this.txt_popup_vertiente_02_2 = new cjs.Text("• \n• \n• \n• \n• ", "18px Verdana");
	this.txt_popup_vertiente_02_2.lineHeight = 20;
	this.txt_popup_vertiente_02_2.lineWidth = 273;
	this.txt_popup_vertiente_02_2.setTransform(709,289);
var html = createDiv(txt['txt_popup_vertiente_02_2'], "Verdana", "18px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_vertiente_02_2 = new cjs.DOMElement(html);
    this.txt_popup_vertiente_02_2.setTransform(709, 259-608);

	// Txt
	this.txt_popup_vertiente_02 = new cjs.Text("", "18px Verdana");
	this.txt_popup_vertiente_02.lineHeight = 20;
	this.txt_popup_vertiente_02.lineWidth = 506;
	this.txt_popup_vertiente_02.setTransform(410.6,168.4);
this.btn_ampliar_vertiente_02.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_vertiente_02());
        });
 var html = createDiv(txt['txt_popup_vertiente_02'], "Verdana", "18px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_vertiente_02 = new cjs.DOMElement(html);
    this.txt_popup_vertiente_02.setTransform(410, 168-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_vertiente_02();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2BEC9").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhLwAwbMAAAhg1MCXhAAAMAAABg1g");
	this.shape_1.setTransform(475,325,0.979,1.048);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_vertiente_02,this.txt_popup_vertiente_02_2,this.instance,this.btn_salir,this.btn_ampliar_vertiente_02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,986,650);


(lib.popup_vertiente_01 = function() {
	this.initialize();

	
	// Botons
	this.btn_ampliar_vertiente_01 = new lib.btn_ampliar();
	this.btn_ampliar_vertiente_01.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_vertiente_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	
	// Txt
	this.txt_popup_vertiente_01 = new cjs.Text("", "22px Verdana");
	this.txt_popup_vertiente_01.lineHeight = 24;
	this.txt_popup_vertiente_01.lineWidth = 457;
	this.txt_popup_vertiente_01.setTransform(410.6,204.4);


 this.btn_ampliar_vertiente_01.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_vertiente_01());
        });
 var html = createDiv(txt['txt_popup_vertiente_01'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_vertiente_01 = new cjs.DOMElement(html);
    this.txt_popup_vertiente_01.setTransform(410, 204-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_vertiente_01();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6A798").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhLwAwbMAAAhg1MCXhAAAMAAABg1g");
	this.shape_1.setTransform(475,325,0.979,1.048);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_vertiente_01,this.btn_salir,this.btn_ampliar_vertiente_01,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,650);


(lib.popup_relieve_12 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_12 = new lib.btn_ampliar();
	this.btn_ampliar_12.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_12, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_relieve_12 = new cjs.Text("Los Pirineos son una cordillera alpina que une la península Ibérica con el continente europeo. Se extienden, a lo largo de 400 km entre el golfo de Vizcaya y el golfo de León. Alcanzan su máxima altitud en la zona central, donde se localiza el pico Aneto (3.404 m).", "22px Verdana");
	this.txt_popup_relieve_12.lineHeight = 24;
	this.txt_popup_relieve_12.lineWidth = 488;
	this.txt_popup_relieve_12.setTransform(410.6,233.5);
 this.btn_ampliar_12.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_12());
        });
 var html = createDiv(txt['txt_popup_relieve_12'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_12 = new cjs.DOMElement(html);
    this.txt_popup_relieve_12.setTransform(410, 248-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_12();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFA192").s().p("EhKNAdTMAAAg6kMCUbAAAMAAAA6kg");
	this.shape.setTransform(475,339.5);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_12,this.instance,this.btn_salir,this.btn_ampliar_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_11 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_11 = new lib.btn_ampliar();
	this.btn_ampliar_11.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_11, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_relieve_11 = new cjs.Text("Los Peninos son una cordillera de altitud media que recorre la parte central de la isla de Gran Bretaña. Al norte de esta unidad se localizan las Highlands, un territorio montañoso y agreste.", "22px Verdana");
	this.txt_popup_relieve_11.lineHeight = 24;
	this.txt_popup_relieve_11.lineWidth = 488;
	this.txt_popup_relieve_11.setTransform(410.6,264.6);

	// ClipImatge
	this.instance_1 = new lib.mc_imatge_11();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);
 this.btn_ampliar_11.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_11());
        });
 var html = createDiv(txt['txt_popup_relieve_11'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_11 = new cjs.DOMElement(html);
    this.txt_popup_relieve_11.setTransform(410, 248-608);
	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B286B1").s().p("EhKNAdTMAAAg6kMCUbAAAMAAAA6kg");
	this.shape.setTransform(475,339.5);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_11,this.instance,this.btn_salir,this.btn_ampliar_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_10 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_10 = new lib.btn_ampliar();
	this.btn_ampliar_10.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_10, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	// Txt
	this.txt_popup_relieve_10 = new cjs.Text("Los Urales forman una cordillera que se extiende de norte a sur y separa las tierras de la Rusia europea de Siberia. Estos relieves se consideran uno de los más antiguos del planeta y albergan importantes yacimientos minerales. El punto más elevado es la cima del Naródnaia Gora (1.894 m).", "22px Verdana");
	this.txt_popup_relieve_10.lineHeight = 24;
	this.txt_popup_relieve_10.lineWidth = 509;
	this.txt_popup_relieve_10.setTransform(410.6,232);
 this.btn_ampliar_10.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_10());
        });
 var html = createDiv(txt['txt_popup_relieve_10'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_10 = new cjs.DOMElement(html);
    this.txt_popup_relieve_10.setTransform(410, 232-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_10();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D58992").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_10,this.instance,this.btn_salir,this.btn_ampliar_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_09 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_09 = new lib.btn_ampliar();
	this.btn_ampliar_09.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_09, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	
	// Txt
	this.txt_popup_relieve_09 = new cjs.Text("El macizo Central configura una región elevada de Francia formada por montañas y mesetas. Alberga un gran número de conos volcánicos extintos. El macizo está separado de los Alpes por el valle del Ródano.", "22px Verdana");
	this.txt_popup_relieve_09.lineHeight = 24;
	this.txt_popup_relieve_09.lineWidth = 496;
	this.txt_popup_relieve_09.setTransform(410.6,261.2);
 this.btn_ampliar_09.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_09());
        });
 var html = createDiv(txt['txt_popup_relieve_09'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_09 = new cjs.DOMElement(html);
    this.txt_popup_relieve_09.setTransform(410, 248-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_09();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E93B5").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_09,this.instance,this.btn_salir,this.btn_ampliar_09);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_08 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_08 = new lib.btn_ampliar();
	this.btn_ampliar_08.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_08, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	// Txt
	this.txt_popup_relieve_08 = new cjs.Text("La Gran Llanura Europea se extiende entre las estribaciones de los Urales y el océano Atlántico. Pequeños cerros rompen la monotonía del paisaje por donde discurren los principales ríos europeos.", "22px Verdana");
	this.txt_popup_relieve_08.lineHeight = 24;
	this.txt_popup_relieve_08.lineWidth = 479;
	this.txt_popup_relieve_08.setTransform(410.6,263.4);
 this.btn_ampliar_08.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_08());
        });
 var html = createDiv(txt['txt_popup_relieve_08'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_08 = new cjs.DOMElement(html);
    this.txt_popup_relieve_08.setTransform(410, 263-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_08();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#949DDF").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_08,this.instance,this.btn_salir,this.btn_ampliar_08);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_07 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_07 = new lib.btn_ampliar();
	this.btn_ampliar_07.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_07, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_relieve_07 = new cjs.Text("La cordillera del Cáucaso se extiende entre el mar Negro y el mar Caspio y forma un istmo entre Europa y Asia. Este sistema montañoso está formado por las cordilleras del Pequeño Cáucaso y del Gran Cáucaso, donde se sitúa el Elbrús (5.642 m), la cumbre más elevada del continente.", "22px Verdana");
	this.txt_popup_relieve_07.lineHeight = 24;
	this.txt_popup_relieve_07.lineWidth = 494;
	this.txt_popup_relieve_07.setTransform(410.6,233.3);
 this.btn_ampliar_07.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_07());
        });
 var html = createDiv(txt['txt_popup_relieve_07'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_07 = new cjs.DOMElement(html);
    this.txt_popup_relieve_07.setTransform(410, 233-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_07();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C78089").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_07,this.instance,this.btn_salir,this.btn_ampliar_07);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_06 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_06 = new lib.btn_ampliar();
	this.btn_ampliar_06.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_06, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_relieve_06 = new cjs.Text("La cordillera de los Cárpatos es un extenso sistema montañoso de la Europa central. Se extiende por tierras de Eslovaquia, Polonia, Ucrania y Rumania formando un gran arco delimitado por el curso del Danubio. La cumbre más elevada es el pico Gerlach (2.655 m), situado en el macizo Tatras.", "22px Verdana");
	this.txt_popup_relieve_06.lineHeight = 24;
	this.txt_popup_relieve_06.lineWidth = 519;
	this.txt_popup_relieve_06.setTransform(410.6,228.7);
 this.btn_ampliar_06.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_06());
        });
 var html = createDiv(txt['txt_popup_relieve_06'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_06 = new cjs.DOMElement(html);
    this.txt_popup_relieve_06.setTransform(410, 228-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_06();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#89B28A").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_06,this.instance,this.btn_salir,this.btn_ampliar_06);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_05 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_05 = new lib.btn_ampliar();
	this.btn_ampliar_05.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_05, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_relieve_05 = new cjs.Text("Los montes Balcanes forman una cordillera que se extiende desde las estribaciones interiores de los Alpes Dináricos hasta el mar Negro. Destaca la cima del pico Botev (2.376).", "22px Verdana");
	this.txt_popup_relieve_05.lineHeight = 24;
	this.txt_popup_relieve_05.lineWidth = 438;
	this.txt_popup_relieve_05.setTransform(410.6,259);
 this.btn_ampliar_05.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_05());
        });
 var html = createDiv(txt['txt_popup_relieve_05'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_05 = new cjs.DOMElement(html);
    this.txt_popup_relieve_05.setTransform(410, 259-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_05();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CB8A5").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_05,this.instance,this.btn_salir,this.btn_ampliar_05);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_04 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_04 = new lib.btn_ampliar();
	this.btn_ampliar_04.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_04, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_relieve_04 = new cjs.Text("Los Apeninos son una cordillera que recorre de norte a sur la península Itálica desde la costa ligur hasta la península de Calabria y Sicilia. La cordillera comprende tres sectores: los Apeninos septentrionales, los Apeninos centrales, donde destaca el Gran Sasso d’Italia (2.912 m), y los Apeninos meridionales, que incluyen el Etna (3.323 m), un volcán activo situado en Sicilia.", "22px Verdana");
	this.txt_popup_relieve_04.lineHeight = 24;
	this.txt_popup_relieve_04.lineWidth = 520;
	this.txt_popup_relieve_04.setTransform(410.6,202.4);

	// marcaAgua
 this.btn_ampliar_04.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_04());
        });
 var html = createDiv(txt['txt_popup_relieve_04'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_04 = new cjs.DOMElement(html);
    this.txt_popup_relieve_04.setTransform(410, 202-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_04();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF98D5").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance,this.txt_popup_relieve_04,this.btn_salir,this.btn_ampliar_04);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_03 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_03 = new lib.btn_ampliar();
	this.btn_ampliar_03.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_03, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_relieve_03 = new cjs.Text("Los Alpes Escandinavos son restos de la antigua cordillera que existió hace cuatrocientos millones de años. Se considera uno de los relieves más antiguos que existen en el mundo. Se extiende de noreste a sudoeste por el sector más occidental de la península Escandinava. Forma profundos fiordos en la costa noruega. Su pico más elevado es el Galdhøpiggen (2.470 m).", "22px Verdana");
	this.txt_popup_relieve_03.lineHeight = 24;
	this.txt_popup_relieve_03.lineWidth = 506;
	this.txt_popup_relieve_03.setTransform(410.6,205.3);
 this.btn_ampliar_03.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_03());
        });
 var html = createDiv(txt['txt_popup_relieve_03'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_03 = new cjs.DOMElement(html);
    this.txt_popup_relieve_03.setTransform(410, 205-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_03();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91B7C6").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_03,this.instance,this.btn_salir,this.btn_ampliar_03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_02 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_02 = new lib.btn_ampliar();
	this.btn_ampliar_02.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_02, 0, 1, 2, false, new lib.btn_ampliar(), 3);
this.btn_ampliar_02.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_02());
        });
	

	// Txt
	this.txt_popup_relieve_02 = new cjs.Text("Los Alpes Dináricos forman una cordillera que se extiende paralela a lo largo de la costa adriática. Este relieve se caracteriza por importantes áreas donde predomina el modelado de tipo kárstico. La cima más elevada es el Maja Jezercë (2.694 m).", "22px Verdana");
	this.txt_popup_relieve_02.lineHeight = 24;
	this.txt_popup_relieve_02.lineWidth = 506;
	this.txt_popup_relieve_02.setTransform(410.6,248.4);
     
 var html = createDiv(txt['txt_popup_relieve_02'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_02 = new cjs.DOMElement(html);
    this.txt_popup_relieve_02.setTransform(410, 248-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_02();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFA192").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_02,this.instance,this.btn_salir,this.btn_ampliar_02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_relieve_01 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_01 = new lib.btn_ampliar();
	this.btn_ampliar_01.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	this.btn_ampliar_01.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_01());
        });
	// Txt
	this.txt_popup_relieve_01 = new cjs.Text("Los Alpes son una cordillera situada en Europa occidental. A nivel geológico, se subdivide en tres grandes sectores: los Alpes Occidentales, que incluyen los Alpes Marítimos y el macizo del Mont-Blanc (4.810 m); los Alpes Centrales, que encierran los macizos del Monte Rosa y el Oberland; y los Alpes Orientales, donde sobresalen los relieves de la región del Tirol.", "22px Verdana");
	this.txt_popup_relieve_01.lineHeight = 24;
	this.txt_popup_relieve_01.lineWidth = 506;
	this.txt_popup_relieve_01.setTransform(410.6,204.4);
 var html = createDiv(txt['txt_popup_relieve_01'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_relieve_01 = new cjs.DOMElement(html);
    this.txt_popup_relieve_01.setTransform(410, 205-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_01();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6A798").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_relieve_01,this.instance,this.btn_salir,this.btn_ampliar_01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_ampliar_mares_11 = function() {
	this.initialize();

	// As3
	this.txt_popup_ampliar_mares_11 = new cjs.Text("Golfo de Nápoles (Italia).", "18px Verdana");
	this.txt_popup_ampliar_mares_11.lineHeight = 20;
	this.txt_popup_ampliar_mares_11.lineWidth = 736;
	this.txt_popup_ampliar_mares_11.setTransform(79.6,532.3);

	// Botons
	this.btn_salir = new lib.btn_cerrar();
	this.btn_salir.setTransform(892.8,53.3);
	new cjs.ButtonHelper(this.btn_salir, 0, 1, 2, false, new lib.btn_cerrar(), 3);
 this.btn_salir.on("click", function (evt) {
           putStage(new lib.frame3p(11));
        });
	// agua
	this.instance = new lib.gris();
	this.instance.setTransform(50,50,1,1,0,0,0,30,30);
	this.instance.alpha = 0.301;

	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_11copia();
	this.instance_1.setTransform(-297.8,283.3,1,1,0,0,0,-733.9,187.8);

	// Capa 1
	this.instance_2 = new lib.mc_FonsBlanc();
	this.instance_2.setTransform(475,304,1,1,0,0,0,475,304);

	this.addChild(this.instance_2,this.instance_1,this.instance,this.btn_salir,this.txt_popup_ampliar_mares_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,608);


(lib.popup_mares_12 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_12 = new lib.btn_ampliar();
	this.btn_ampliar_mares_12.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_12, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	

	// Txt
	this.txt_popup_mares_12 = new cjs.Text("Sicilia está separada de la península de Italia por el estrecho de Messina. Las zonas más montañosas y elevadas de la isla se localizan en el sector septentrional. El punto culminante es el volcán Etna (3.323 m).", "bold 22px Verdana");
	this.txt_popup_mares_12.lineHeight = 24;
	this.txt_popup_mares_12.lineWidth = 491;
	this.txt_popup_mares_12.setTransform(410.6,260);
 this.btn_ampliar_mares_12.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_12());
        });
 var html = createDiv(txt['txt_popup_mares_12'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_12 = new cjs.DOMElement(html);
    this.txt_popup_mares_12.setTransform(410, 260-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_12();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B286B1").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_12,this.instance,this.btn_salir,this.btn_ampliar_mares_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_11 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_11 = new lib.btn_ampliar();
	this.btn_ampliar_mares_11.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_11, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_mares_11 = new cjs.Text("La península Itálica se localiza en el centro de la cuenca mediterránea. Separa el mar de Liguria y el mar Tirreno del mar Adriático. La península se une al continente por el istmo de los Alpes, al pie del cual se abre la depresión del Po. El eje central de la península lo constituyen los Apeninos. La costa presenta numerosas áreas de acantilados.", "22px Verdana");
	this.txt_popup_mares_11.lineHeight = 24;
	this.txt_popup_mares_11.lineWidth = 458;
	this.txt_popup_mares_11.setTransform(410.6,204.6);
 this.btn_ampliar_mares_11.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_11());
        });
 var html = createDiv(txt['txt_popup_mares_11'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_11 = new cjs.DOMElement(html);
    this.txt_popup_mares_11.setTransform(410, 204-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_11();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D58992").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_11,this.instance,this.btn_salir,this.btn_ampliar_mares_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_10 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_10 = new lib.btn_ampliar();
	this.btn_ampliar_mares_10.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_10, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_mares_10 = new cjs.Text("La península Ibérica encierra la cuenca mediterránea por el sector occidental y está separada de África por el estrecho de Gibraltar. Es la península mediterránea más extensa y se une al continente por el istmo de los Pirineos. Su costa es rectilínea, aunque por lo general accidentada.", "22px Verdana");
	this.txt_popup_mares_10.lineHeight = 24;
	this.txt_popup_mares_10.lineWidth = 491;
	this.txt_popup_mares_10.setTransform(410.6,231.5);
 this.btn_ampliar_mares_10.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_10());
        });
 var html = createDiv(txt['txt_popup_mares_10'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_10 = new cjs.DOMElement(html);
    this.txt_popup_mares_10.setTransform(410, 231-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_10();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D58992").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_10,this.instance,this.btn_salir,this.btn_ampliar_mares_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_09 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_09 = new lib.btn_ampliar();
	this.btn_ampliar_mares_09.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_09, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_mares_09 = new cjs.Text("En el norte del continente destaca la península Escandinava, delimitada por las aguas del océano Glacial Ártico, el mar de Noruega, el mar del Norte y el mar Báltico. Las costas noruegas son recortadas y se distinguen por sus profundos fiordos. Las costas suecas son, por lo general, bajas y arenosas.", "22px Verdana");
	this.txt_popup_mares_09.lineHeight = 24;
	this.txt_popup_mares_09.lineWidth = 491;
	this.txt_popup_mares_09.setTransform(410.6,220.2);
 this.btn_ampliar_mares_09.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_09());
        });
 var html = createDiv(txt['txt_popup_mares_09'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_09 = new cjs.DOMElement(html);
    this.txt_popup_mares_09.setTransform(410, 220-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_09();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E93B5").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_09,this.instance,this.btn_salir,this.btn_ampliar_mares_09);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_08 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_08 = new lib.btn_ampliar();
	this.btn_ampliar_mares_08.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_08, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_mares_08 = new cjs.Text("La península Balcánica se sitúa en el extremo oriental de la cuenca mediterránea y está delimitada por las aguas del mar Egeo, el mar Jónico y el mar Adriático.", "22px Verdana");
	this.txt_popup_mares_08.lineHeight = 24;
	this.txt_popup_mares_08.lineWidth = 494;
	this.txt_popup_mares_08.setTransform(410.6,275.5);
 this.btn_ampliar_mares_08.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_08());
        });
 var html = createDiv(txt['txt_popup_mares_08'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_08 = new cjs.DOMElement(html);
    this.txt_popup_mares_08.setTransform(410, 275-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_08();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#949DDF").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_08,this.instance,this.btn_salir,this.btn_ampliar_mares_08);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_07 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_07 = new lib.btn_ampliar();
	this.btn_ampliar_mares_07.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_07, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_mares_07 = new cjs.Text("El mar Negro es un mar interior conectado con el mar Mediterráneo por el estrecho del Bósforo. Constituye uno de los límites físicos entre Europa y Asia. Sus aguas bañan, entre otros territorios, la península Crimea. En su interior se encuentra el mar de Azov.", "22px Verdana");
	this.txt_popup_mares_07.lineHeight = 24;
	this.txt_popup_mares_07.lineWidth = 494;
	this.txt_popup_mares_07.setTransform(410.6,233.8);
 this.btn_ampliar_mares_07.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_07());
        });
 var html = createDiv(txt['txt_popup_mares_07'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_07 = new cjs.DOMElement(html);
    this.txt_popup_mares_07.setTransform(410, 233-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_07();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C78089").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_07,this.instance,this.btn_salir,this.btn_ampliar_mares_07);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_06 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_06 = new lib.btn_ampliar();
	this.btn_ampliar_mares_06.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_06, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_mares_06 = new cjs.Text("El mar Mediterráneo forma una extensa cuenca intercontinental situada al sur de Europa. Se comunica con el océano Atlántico a través del estrecho de Gibraltar y con el mar Negro por el estrecho del Bósforo. En su interior se distinguen distintos sectores: mar Tirreno, mar Jónico, mar Adriático o mar Egeo. Sus costas son recortadas y alternan playas y los acantilados.", "22px Verdana");
	this.txt_popup_mares_06.lineHeight = 24;
	this.txt_popup_mares_06.lineWidth = 486;
	this.txt_popup_mares_06.setTransform(410.6,192.1);
 this.btn_ampliar_mares_06.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_06());
        });
 var html = createDiv(txt['txt_popup_mares_06'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_06 = new cjs.DOMElement(html);
    this.txt_popup_mares_06.setTransform(410, 192-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_06();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#89B28A").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_06,this.instance,this.btn_salir,this.btn_ampliar_mares_06);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_05 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_05 = new lib.btn_ampliar();
	this.btn_ampliar_mares_05.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_05, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	
	// Txt
	this.txt_popup_mares_05 = new cjs.Text("El mar del Norte es un sector del océano Atlántico que baña las costas de Noruega, Dinamarca, Alemania, Países Bajos, Bélgica y la isla de Gran Bretaña. Los estrechos de Skagerrak y Kattegat lo conectan con el mar Báltico y el canal de la Mancha con el océano. Las costas continentales son, por lo general, bajas y arenosas.", "22px Verdana");
	this.txt_popup_mares_05.lineHeight = 24;
	this.txt_popup_mares_05.lineWidth = 504;
	this.txt_popup_mares_05.setTransform(410.6,217.2);
 this.btn_ampliar_mares_05.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_05());
        });
 var html = createDiv(txt['txt_popup_mares_05'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_05 = new cjs.DOMElement(html);
    this.txt_popup_mares_05.setTransform(410, 217-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_05();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CB8A5").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_05,this.instance,this.btn_salir,this.btn_ampliar_mares_05);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_04 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_04 = new lib.btn_ampliar();
	this.btn_ampliar_mares_04.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_04, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_mares_04 = new cjs.Text("El mar Báltico es un mar interior del norte del continente y conectado con el mar del Norte por los estrechos de Skagerrak y Kattegat. Baña el litoral de  Suecia, Finlandia, Rusia, las repúblicas bálticas, Polonia, Alemania y Dinamarca. Las costas son, en general, bajas y arenosas y destacan tres grandes golfos: Botnia, Finlandia y Riga.", "22px Verdana");
	this.txt_popup_mares_04.lineHeight = 24;
	this.txt_popup_mares_04.lineWidth = 504;
	this.txt_popup_mares_04.setTransform(410.6,218);
 this.btn_ampliar_mares_04.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_04());
        });
 var html = createDiv(txt['txt_popup_mares_04'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_04 = new cjs.DOMElement(html);
    this.txt_popup_mares_04.setTransform(410, 218-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_04();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF98D5").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_04,this.instance,this.btn_salir,this.btn_ampliar_mares_04);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_03 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_03 = new lib.btn_ampliar();
	this.btn_ampliar_mares_03.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_03, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_mares_03 = new cjs.Text("El archipiélago de las Islas Británicas está formado por dos islas mayores, Gran Bretaña e Irlanda. La isla de la Gran Bretaña está separada del continente por el canal de la Mancha. Las costas de ambas presentan numerosas zonas de acantilados.", "22px Verdana");
	this.txt_popup_mares_03.lineHeight = 24;
	this.txt_popup_mares_03.lineWidth = 506;
	this.txt_popup_mares_03.setTransform(410.6,249.8);
 this.btn_ampliar_mares_03.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_03());
        });
 var html = createDiv(txt['txt_popup_mares_03'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_03 = new cjs.DOMElement(html);
    this.txt_popup_mares_03.setTransform(410, 248-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_03();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91B7C6").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_03,this.instance,this.btn_salir,this.btn_ampliar_mares_03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_02 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_02 = new lib.btn_ampliar();
	this.btn_ampliar_mares_02.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_02, 0, 1, 2, false, new lib.btn_ampliar(), 3);


	// Txt
	this.txt_popup_mares_02 = new cjs.Text("Islandia es una gran isla situada en aguas del océano Atlántico. Es una plataforma emergida de la dorsal medioatlántica, de ahí su intensa actividad sísmica y volcánica. La costa está, en general, recortada por profundos fiordos.", "bold 22px Verdana");
	this.txt_popup_mares_02.lineHeight = 24;
	this.txt_popup_mares_02.lineWidth = 506;
	this.txt_popup_mares_02.setTransform(410.6,248.3);
 this.btn_ampliar_mares_02.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_02());
        });
 var html = createDiv(txt['txt_popup_mares_02'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_02 = new cjs.DOMElement(html);
    this.txt_popup_mares_02.setTransform(410, 248-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_02();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFA192").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_02,this.instance,this.btn_salir,this.btn_ampliar_mares_02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);


(lib.popup_mares_01 = function() {
	this.initialize();

	// Botons
	this.btn_ampliar_mares_01 = new lib.btn_ampliar();
	this.btn_ampliar_mares_01.setTransform(356.1,167.3);
	new cjs.ButtonHelper(this.btn_ampliar_mares_01, 0, 1, 2, false, new lib.btn_ampliar(), 3);

	

	// Txt
	this.txt_popup_mares_01 = new cjs.Text("Las islas de Córcega y Cerdeña se localizan en el Mediterráneo occidental. La isla de Córcega pertenece a Francia, mientras que la de Cerdeña es italiana. Las costas de ambas son recortadas y con importantes acantilados y playas de arena.", "22px Verdana");
	this.txt_popup_mares_01.lineHeight = 24;
	this.txt_popup_mares_01.lineWidth = 506;
	this.txt_popup_mares_01.setTransform(410.6,248.3);
 this.btn_ampliar_mares_01.on("click", function (evt) {
            clearTexts();
           putStage(new lib.popup_ampliar_mares_01());
        });
 var html = createDiv(txt['txt_popup_mares_01'], "Verdana", "20px", '510px', '40px', "20px", "185px", "left");
    this.txt_popup_mares_01 = new cjs.DOMElement(html);
    this.txt_popup_mares_01.setTransform(410, 248-608);
	// ClipImatge
	this.instance_1 = new lib.mc_imatge_mares_01();
	this.instance_1.setTransform(361.3,339.5,1,1,0,0,0,281.3,187.5);

	// Pastilla
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6A798").s().p("EhKCAdWMAAAg6rMCUEAAAMAAAA6rg");
	this.shape.setTransform(475,339.5,1.002,0.998);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhH7Ar6MAAAhXzMCP3AAAMAAABXzg");
	this.shape_1.setTransform(475,304,1.032,1.082);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.txt_popup_mares_01,this.instance,this.btn_salir,this.btn_ampliar_mares_01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950.1,608);
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