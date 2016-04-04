/* VERSION : 15.12.22.1 */ 
var pppUI;(function(a){(function(i){function h(n,p,o,m,r){if(typeof r==="undefined"){r=true}var q=new a.UIObject(n);q.addClass(o);if(r&&TLF.isTLF(p)){q.addClass("tlfText");q.setContent(TLF.toHTML(p,function(s){if(window.hasOwnProperty("pppPreloader")){return pppPreloader.from("data",FUtils.realResourcePath(s))}else{return FUtils.realResourcePath(s)}}))}else{if(window.hasOwnProperty("pppPreloader")){p=FUtils.patchHTMLForPreloader(p)}q.setContent(p)}q.position=m;return q}i.createTextBox=h;function g(n,s,q,m,p,r){var o=new a.UIButton(n,q,p,s);o.command=r;o.position=m;return o}i.createEventButton=g;function l(u,q,v,m,t,n,s){if(typeof s==="undefined"){s=a.UIButton.BUTTON}var o;var r=new Array();for(o=0;o<t.length;o++){var p=new a.UIButton(t[o].id,t[o].className,s,t[o].content);if(m){p.x=q.x;p.y=q.y+o*v}else{p.x=q.x+o*v;p.y=q.y}p.width=q.width;p.height=q.height;p.visible=t[o].visible;p.command=n;u.addChild(p);r.push(p)}return r}i.createButtonList=l;function f(p,s,r,q){if(typeof q==="undefined"){q=a.UIButton.BUTTON}var o;var n=new Array();for(o=0;o<s.length;o++){var m=new a.UIButton(s[o].id,s[o].className,q,s[o].content);m.position=s[o].position;m.visible=s[o].visible;m.command=r;p.addChild(m);n.push(m)}return n}i.createButtonListVarPos=f;function e(r,m,n,t,s){var q;var p=new Array();for(q=0;q<t.length;q++){var o=new a.UIButton(t[q].id,t[q].className,a.UIButton.BUTTON,t[q].content);o.x=m.x;o.y=m.y+q*n;o.width=m.width;o.height=m.height;o.visible=t[q].visible;o.command=s;r.addChild(o);p.push(o)}return p}i.createButtonColumn2=e;function d(v,r,n,m,u,w,o){var p;var s=r.y;var t=new Array();for(p=0;p<u.length&&p<w;p++){var q=new a.UIButton(u[p].id,u[p].className,2,u[p].content);q.x=(p<u.length/2)?r.x:r.x+n;q.y=s+Math.floor(p%(u.length/2))*m;q.width=r.width;q.height=r.height;q.visible=u[p].visible;q.command=o;v.addChild(q);t.push(q)}return t}i.createButton2Columns=d;function j(v,q,x,n,u,o,p,t,r,w){if(typeof r==="undefined"){r="slideContainer"}if(typeof w==="undefined"){w=""}var m=new a.UISlider(r);m.addClass(w);m.position=t;v.addChild(m);var s=l(v,q,x,n,u,o,p);s.push(m);return s}i.createButtonsTabs=j;function c(n,m){if(n==null||n.DOMItem==null){return}var o=n.DOMItem;if(n instanceof a.UIRichText){o=n.$DOMItem.find("#realContent")[0];if(o==null){return}}if((o.scrollHeight-o.clientHeight)>3){var p=new a.UIImage("scrollMarker","","motor/images/scrollmarkertrans.png",a.UIImage.ADJUSTMODE_NONE,39,39);p.x=n.x+n.width-39-((m)?10:20);p.y=n.y+n.height-39-10;p.visible=false;n.parent.addChild(p);p.fadeIn(600);setTimeout(function(){if(p.DOMItem){p.fadeOut(500,function(){if(p.DOMItem){p.remove()}})}},2000)}}function k(o,n){var m=(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Touch/i)!=null);var p=(navigator.userAgent.match(/Trident/i)!=null)&&(navigator.userAgent.match(/Touch/i)!=null);if(n==true&&m==false||p){return}setTimeout(function(){c(o,m)},500)}i.showScrollMarker=k})(a.Utils||(a.Utils={}));var b=a.Utils})(pppUI||(pppUI={}));var FUtils;(function(b){function d(h){if((h.indexOf("data/imagenes/")==0)||(h.indexOf("data/sonidos/")==0)||(h.indexOf("data/videos/")==0)||(h.indexOf("data/recursos/")==0)||(h.indexOf("data/actividades/")==0)||(h=="data/datos.xml")){return h}if(h.indexOf("medias/")==0){h=h.substring("medias/".length)}var g=h.substr(h.lastIndexOf(".")+1).toLowerCase();switch(g){case"jpg":case"jpeg":case"gif":case"png":case"svg":case"bmp":return"data/imagenes/"+h;case"swf":return"data/imagenes/"+h.replace(/\.swf/i,".png");case"mp4":return"data/videos/"+h;case"flv":return"data/videos/"+h.replace(/\.flv/i,".mp4");case"mp3":case"wav":return"data/sonidos/"+h;case"zip":return"data/actividades/"+h.replace(/\.zip/,"_zip")+"/Principal.html";case"xml":return"data/"+h;default:return"data/imagenes/"+h}}b.realResourcePath=d;var f={blocks:[{type:"img",files:[]}],spinner:"no",waitForDocumentReady:false,onEndLoading:null};function e(j,h){if(j==null||j==undefined||h==null||h==undefined||j==""||h==""){return}for(var g=0;g<f.blocks[0].files.length;g++){if(f.blocks[0].files[g].from==j&&f.blocks[0].files[g].file==h){return}}f.blocks[0].files.push({from:j,file:h})}b.addImageToPreloader=e;function a(g){if(f.blocks[0].files.length==0){g(f)}else{f.onEndLoading=g;pppPreloader.loadManifest(f)}}b.preloadImages=a;function c(i){var h='src="'+pppPreloader.from("data","data/imagenes/");var g="src='"+pppPreloader.from("data","data/imagenes/");i=i.replace(/src="data\/imagenes\//g,h);i=i.replace(/src='data\/imagenes\//g,g);return i}b.patchHTMLForPreloader=c})(FUtils||(FUtils={}));var MAIN_BOTONES_POS={x:40,y:146,width:220,height:42};var MAIN_BOTONES_SEPY=102;var TOOLBAR_BUT_POS={x:22,y:554,width:37,height:37};var TOOLBAR_BUT_SEPX=43;var PRESENT_BUT_POS={x:83,y:550,width:163,height:38};var PRESENT_BUT_SEPX=170;var SELECT_MAX_BUTTONS=12;var SELECT_BUT_POS={x:30,y:182,width:160,height:38};var SELECT_BUT_SEPX=177;var SELECT_BUT_SEPY=49;var SELECT_TEXT_POS={x:SELECT_BUT_POS.x+2*SELECT_BUT_SEPX,y:SELECT_BUT_POS.y-2,width:540,height:379};var INFO_BUT_POS={x:203,y:554,width:37,height:37};var PRACTICA_PRACTICABTN_POS={x:778,y:555,width:133,height:31};var PRACTICA_CONTENT_POS={x:113,y:41,width:733,height:490};var PRACTICA_CLOSEBTN_POS={x:876,y:44,width:37,height:37};var PRACTICA_PREVBTN_POS={x:88,y:554,width:37,height:37};var PRACTICA_NEXTBTN_POS={x:145,y:554,width:37,height:37};var WATERMARK_POS={x:20,y:20,width:62,height:62};var conte;function createPresentationType(p,h,l,w,c,a,n,f){var e=new pppUI.UISlide("sl_"+a);e.x=0;e.y=0;e.width=p.width;e.height=p.height;if(f!=null&&f!=""){e.addClass(f)}l.addSlide(e);var u=pppUI.Utils.createTextBox("title_"+a.substring(0,3),n,"presentacion_titulo",{x:80,y:0,width:795,height:105});e.addChild(u);var s=new pppUI.UISlider("slr_"+a);s.x=90;s.y=130;s.transMode=pppUI.UISlider.TRANS_NONE;s.width=p.width-90*2;s.height=p.height-130;e.addChild(s);for(var r=0;r<w.length;r++){var d="sl_"+a+"_"+r;var b=new pppUI.UISlide(d);s.addSlide(b);var m="txt_"+a.substring(0,3);var v=pppUI.Utils.createTextBox(m,w[r].def,"presentacion_texto",{x:0,y:0,width:s.width,height:415},false);b.addChild(v);(function(x,i){x.onShown=function(y){setTimeout(function(){if(y!=null){var z=y.getChildById(i);if(z){z.DOMItem.scrollTop=0}pppUI.Utils.showScrollMarker(z,true)}},1)}})(b,m)}if(c){var k=pppUI.Utils.createEventButton("home_"+a,"","sliderhomebutton",TOOLBAR_BUT_POS,pppUI.UIButton.BUTTON,function(i,x){l.transMode=pppUI.UISlider.TRANS_NONE;l.current=0});e.addChild(k);var g;g=new Array();for(var r=0;r<w.length;r++){var j={id:"und_btn_"+r,className:"roundtextbutton",content:w[r].title,visible:true};g.push(j)}var o=pppUI.Utils.createButtonList(e,PRESENT_BUT_POS,PRESENT_BUT_SEPX,false,g,function(x,z){var i=z.id.substring(4,z.id.length);var y=parseInt(z.id.substring(8));s.current=y},99)}else{var q;q=[{id:"home_"+a,className:"sliderhomebutton",content:"",visible:true,position:{x:TOOLBAR_BUT_POS.x,y:TOOLBAR_BUT_POS.y,width:37,height:37}},{id:"prev_"+a,className:"sliderprevbutton",content:"",visible:false,position:{x:TOOLBAR_BUT_POS.x+37+30,y:TOOLBAR_BUT_POS.y,width:37,height:37}},{id:"next_"+a,className:"slidernextbutton",content:"",visible:(s.count>1?true:false),position:{x:TOOLBAR_BUT_POS.x+37+30+37+20,y:TOOLBAR_BUT_POS.y,width:37,height:37}}];var o=pppUI.Utils.createButtonListVarPos(e,q,function(x,y){var i=y.id.substring(4,y.id.length);switch(y.id.substring(0,4)){case"home":l.transMode=pppUI.UISlider.TRANS_NONE;l.current=0;y.parent.getChildById("prev"+i).visible=false;y.parent.getChildById("next"+i).visible=(s.count>1?true:false);break;case"prev":s.prev();if(s.current==0){y.parent.getChildById("prev"+i).visible=false}y.parent.getChildById("next"+i).visible=true;break;case"next":s.next();if(s.current==(s.count-1)){y.parent.getChildById("next"+i).visible=false}y.parent.getChildById("prev"+i).visible=true;break}});if($(h).children("masinfo").length>0){var t=$(h).children("masinfo")[0];fillInInfo(l,e,t,"black")}}e.onPrepare=function(i){var y=i.getChildById("slr_"+a);if(y.count>0){y.current=0}if(c){var x=i.getChildById("und_btn_0");x.pushed=true}e.getChildById("home_"+a).visible=true;if(!c){e.getChildById("prev_"+a).visible=false;e.getChildById("next_"+a).visible=(s.count>1)}}}function createSelectionType(o,c,g,l,a,n,b){var k=new pppUI.UISlide("sl_"+a);k.x=0;k.y=0;k.width=o.width;k.height=o.height;if(b!=null&&b!=""){k.addClass(b)}g.addSlide(k);var f=pppUI.Utils.createEventButton("home_"+a,"","sliderhomebutton",TOOLBAR_BUT_POS,pppUI.UIButton.BUTTON,function(i,t){g.transMode=pppUI.UISlider.TRANS_NONE;g.current=0});k.addChild(f);var h=pppUI.Utils.createTextBox("title_"+a.substring(0,3),n,"seleccion_titulo",{x:100,y:0,width:795,height:105});k.addChild(h);var j=new pppUI.UISlider("sliderText_"+a);j.position=SELECT_TEXT_POS;j.transMode=pppUI.UISlider.TRANS_NONE;k.addChild(j);var d=new Array();var q=0;for(q=0;q<l.length;q++){var s={id:"but_"+a.substring(0,3)+"_"+q,className:"roundtextbutton gridbutton",content:l[q].title,visible:true};d.push(s);var e=new pppUI.UISlide("slideT_"+a.substring(0,3)+"_"+q);var p=pppUI.Utils.createTextBox("txt_"+a.substring(0,3)+"_"+q,l[q].def,"seleccion_texto",{x:0,y:0,width:SELECT_TEXT_POS.width-10,height:SELECT_TEXT_POS.height},false);e.addChild(p);e.onPrepare=function(i){var t="txt_"+a.substring(0,3)+"_0";setTimeout(function(){if(i!=null){var u=i.getChildById(t);if(u){u.DOMItem.scrollTop=0}pppUI.Utils.showScrollMarker(u,true)}},1)};j.addSlide(e)}var m=pppUI.Utils.createButton2Columns(k,SELECT_BUT_POS,SELECT_BUT_SEPX,SELECT_BUT_SEPY,d,SELECT_MAX_BUTTONS,function(u,w){var t=parseInt(w.id.substring(8,w.id.length));var v=l[t].def;if(TLF.isTLF(v)){v=TLF.toHTML(v,function(x){pppPreloader.from("data",FUtils.realResourcePath(x));FUtils.addImageToPreloader("data",FUtils.realResourcePath(x))})}var i=parseInt(w.id.substring(8,w.id.length));j.current=i});if($(c).children("masinfo").length>0){var r=$(c).children("masinfo")[0];fillInInfo(g,k,r,"black")}k.onPrepare=function(i){var u=this.getChildById("sliderText_"+a);if(u.count>0){u.current=0;var t=i.getChildById("but_"+a.substring(0,3)+"_0");t.pushed=true}}}function createActivityType(f,h,b,i,c){var g=new pppUI.UISlide("sl_"+i);g.x=0;g.y=0;g.width=f.width;g.height=f.height;g.addClass("slide"+i.charAt(0).toUpperCase()+i.slice(1));b.addSlide(g);var d=pppUI.Utils.createEventButton("home_"+i,"","sliderhomebutton",TOOLBAR_BUT_POS,pppUI.UIButton.BUTTON,function(k,l){b.transMode=pppUI.UISlider.TRANS_NONE;b.current=0;var j;var m=l.parent;while(m!=null){m=m.parent;if(m!=null){j=m}}j.getChildById("watermark").visible=true});g.addChild(d);var e=new pppUI.UIIframe("uiiframe_"+i,pppPreloader.from("data",FUtils.realResourcePath(c)),true);e.x=60;e.y=16;e.width=832;e.height=534;g.addChild(e);if($(h).children("masinfo").length>0){var a=$(h).children("masinfo")[0];fillInInfo(b,g,a,"black")}}function fillInInfo(m,i,b,f){var l=b.getAttribute("boton2")||"";var d="";if($(b).children("pantalla1").length>0){d=$($(b).children("pantalla1")[0]).text()}var a="";if($(b).children("pantalla2").length>0){a=$($(b).children("pantalla2")[0]).text()}if(d!=""){var h;var e;var c=(f=="white")?"infoButton_white":"infoButton";var g=new pppUI.UIButton("info_btn",c,pppUI.UIButton.BUTTON,"");g.position=INFO_BUT_POS;var k=m.count;g.command=function(n,o){m.transMode=pppUI.UISlider.TRANS_NONE;m.current=k};i.addChild(g);h=new pppUI.UISlide("info_1");m.addSlide(h);g=new pppUI.UIButton("cerrar_btn","popupCloseButton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_CLOSEBTN_POS;g.command=function(n,o){m.transMode=pppUI.UISlider.TRANS_NONE;m.current=i.index};h.addChild(g);e=pppUI.Utils.createTextBox("text",d,"info_default",PRACTICA_CONTENT_POS);h.addChild(e);h.onPrepare=function(o){var n=o.getChildById("text");pppUI.Utils.showScrollMarker(n,true)};if(a.trim()!=""){g=new pppUI.UIButton("practica_btn","slidernextbutton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_NEXTBTN_POS;var j=m.count;g.command=function(n,o){m.transMode=pppUI.UISlider.TRANS_NONE;m.current=j};h.addChild(g);h=new pppUI.UISlide("info_2");m.addSlide(h);g=new pppUI.UIButton("cerrar_btn","popupCloseButton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_CLOSEBTN_POS;g.command=function(n,o){m.transMode=pppUI.UISlider.TRANS_NONE;m.current=i.index};h.addChild(g);g=new pppUI.UIButton("prev_btn","sliderprevbutton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_PREVBTN_POS;g.command=function(n,o){m.transMode=pppUI.UISlider.TRANS_NONE;m.current=m.current-1};h.addChild(g);e=pppUI.Utils.createTextBox("text",a,"info_default",PRACTICA_CONTENT_POS);h.addChild(e);h.onPrepare=function(o){var n=o.getChildById("text");pppUI.Utils.showScrollMarker(n,true)}}}}function loadSlidesFromXML(b){var a=new Array();$(b).children("definition").each(function(){var d=new Object();var e=$(this).children("title");var c=$(this).children("def");d.title=$.trim($(e[0]).text());d.def=$.trim($(c[0]).text());if(d.title.length>0||d.def.length>0){a.push(d)}});return a}function main(b){var a=true;if(window.hasOwnProperty("pppUIScaled")){a=window.pppUIScaled}conte=new pppUI.UIStage("__stage","diaporama_container",a,false,function(p){var v=$(b).children("engine")[0];var f=$(v).children("main")[0];var m=f.getAttribute("title");var d=($(f).children("tf").length>0)?$.trim($($(f).children("tf")[0]).text()):"";var c=($(f).children("audio").length>0)?$.trim($($(f).children("audio")[0]).text()):"";var k=($(f).children("audio").length>0)?$.trim($(f).children("audio")[0].getAttribute("path")):"";var i=($(f).children("video").length>0)?$.trim($($(f).children("video")[0]).text()):"";var l=new pppUI.UISlider("mainslider");l.addClass("slidePrincipal");l.x=0;l.y=0;l.width=p.width;l.height=p.height;p.addChild(l);var t=new pppUI.UISlide("sl_principal");t.addClass("slidePrincipal");l.addSlide(t);var s=pppUI.Utils.createTextBox("title_pri",m,"principal_titulo",{x:100,y:0,width:795,height:105});t.addChild(s);if(d.length>0){var j=pppUI.Utils.createTextBox("txt_pri",d,"principal_texto",{x:300,y:142,width:600,height:388},false);t.addChild(j);pppUI.Utils.showScrollMarker(j,true)}else{if(c.length>0){var q=new pppUI.UIMediaAudio("aud_pri","",pppPreloader.from("data",FUtils.realResourcePath(k)),pppPreloader.from("data",FUtils.realResourcePath(c)),pppUI.UIImage.ADJUSTMODE_STRETCH);FUtils.addImageToPreloader("data",FUtils.realResourcePath(k));q.position={x:323,y:122,width:500,height:426};t.addChild(q);t.onLeave=function(x){q.pause()}}else{if(i.length>0){var e=new pppUI.UIMediaVideo("vid_pri","",pppPreloader.from("data",FUtils.realResourcePath(i)),585,383-50);e.position={x:329,y:91,width:553,height:499};t.addChild(e);t.onLeave=function(x){e.pause()}}}}var o;var w=MAIN_BOTONES_POS;var h=MAIN_BOTONES_SEPY;var n=$(v).children().length-1;if(n>4){var u=388;u-=n*MAIN_BOTONES_POS.height;if(n>1){h=MAIN_BOTONES_POS.height+Math.floor(u/(n-1))}}$(v).children().each(function(x,y){var z=l.count;if(y.tagName!="main"){switch(y.tagName){case"presentation":var A=pppUI.Utils.createEventButton("but_pri_comprension",y.getAttribute("title2"),"roundtextbutton",w,pppUI.UIButton.BUTTON,function(B,C){l.transMode=pppUI.UISlider.TRANS_FADE;l.current=z;p.getChildById("watermark").visible=true});t.addChild(A);w.y+=h;createPresentationType(p,y,l,loadSlidesFromXML(y),(y.getAttribute("buttons")=="true"),"comprension",y.getAttribute("title"),y.getAttribute("bkclass"));break;case"selection":var A=pppUI.Utils.createEventButton("but_pri_comprension",y.getAttribute("title2"),"roundtextbutton",w,pppUI.UIButton.BUTTON,function(B,C){l.transMode=pppUI.UISlider.TRANS_FADE;l.current=z;p.getChildById("watermark").visible=true});t.addChild(A);w.y+=h;createSelectionType(p,y,l,loadSlidesFromXML(y),"lexico",y.getAttribute("title"),y.getAttribute("bkclass"));break;case"activity":var A=pppUI.Utils.createEventButton("but_pri_comprension",y.getAttribute("title2"),"roundtextbutton",w,pppUI.UIButton.BUTTON,function(B,C){l.transMode=pppUI.UISlider.TRANS_NONE;l.current=z;p.getChildById("watermark").visible=false});t.addChild(A);w.y+=h;createActivityType(p,y,l,"actividad",y.getAttribute("path"));break}}});if($(v).children("masinfo").length>0){var r=$(v).children("masinfo")[0];fillInInfo(l,t,r,"black")}var g=new pppUI.UIObject("watermark");g.addClass("watermark");g.position=WATERMARK_POS;p.addChild(g);if(window.hasOwnProperty("MathJax")){MathJax.Hub.Queue(["Typeset",MathJax.Hub])}FUtils.preloadImages(function(x){pppSpinner.hide()})})};