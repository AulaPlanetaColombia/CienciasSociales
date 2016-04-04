/* VERSION : 15.12.22.1 */ 
var pppUI;(function(a){(function(i){function h(n,p,o,m,r){if(typeof r==="undefined"){r=true}var q=new a.UIObject(n);q.addClass(o);if(r&&TLF.isTLF(p)){q.addClass("tlfText");q.setContent(TLF.toHTML(p,function(s){if(window.hasOwnProperty("pppPreloader")){return pppPreloader.from("data",FUtils.realResourcePath(s))}else{return FUtils.realResourcePath(s)}}))}else{if(window.hasOwnProperty("pppPreloader")){p=FUtils.patchHTMLForPreloader(p)}q.setContent(p)}q.position=m;return q}i.createTextBox=h;function g(n,s,q,m,p,r){var o=new a.UIButton(n,q,p,s);o.command=r;o.position=m;return o}i.createEventButton=g;function l(u,q,v,m,t,n,s){if(typeof s==="undefined"){s=a.UIButton.BUTTON}var o;var r=new Array();for(o=0;o<t.length;o++){var p=new a.UIButton(t[o].id,t[o].className,s,t[o].content);if(m){p.x=q.x;p.y=q.y+o*v}else{p.x=q.x+o*v;p.y=q.y}p.width=q.width;p.height=q.height;p.visible=t[o].visible;p.command=n;u.addChild(p);r.push(p)}return r}i.createButtonList=l;function f(p,s,r,q){if(typeof q==="undefined"){q=a.UIButton.BUTTON}var o;var n=new Array();for(o=0;o<s.length;o++){var m=new a.UIButton(s[o].id,s[o].className,q,s[o].content);m.position=s[o].position;m.visible=s[o].visible;m.command=r;p.addChild(m);n.push(m)}return n}i.createButtonListVarPos=f;function e(r,m,n,t,s){var q;var p=new Array();for(q=0;q<t.length;q++){var o=new a.UIButton(t[q].id,t[q].className,a.UIButton.BUTTON,t[q].content);o.x=m.x;o.y=m.y+q*n;o.width=m.width;o.height=m.height;o.visible=t[q].visible;o.command=s;r.addChild(o);p.push(o)}return p}i.createButtonColumn2=e;function d(v,r,n,m,u,w,o){var p;var s=r.y;var t=new Array();for(p=0;p<u.length&&p<w;p++){var q=new a.UIButton(u[p].id,u[p].className,2,u[p].content);q.x=(p<u.length/2)?r.x:r.x+n;q.y=s+Math.floor(p%(u.length/2))*m;q.width=r.width;q.height=r.height;q.visible=u[p].visible;q.command=o;v.addChild(q);t.push(q)}return t}i.createButton2Columns=d;function j(v,q,x,n,u,o,p,t,r,w){if(typeof r==="undefined"){r="slideContainer"}if(typeof w==="undefined"){w=""}var m=new a.UISlider(r);m.addClass(w);m.position=t;v.addChild(m);var s=l(v,q,x,n,u,o,p);s.push(m);return s}i.createButtonsTabs=j;function c(n,m){if(n==null||n.DOMItem==null){return}var o=n.DOMItem;if(n instanceof a.UIRichText){o=n.$DOMItem.find("#realContent")[0];if(o==null){return}}if((o.scrollHeight-o.clientHeight)>3){var p=new a.UIImage("scrollMarker","","motor/images/scrollmarkertrans.png",a.UIImage.ADJUSTMODE_NONE,39,39);p.x=n.x+n.width-39-((m)?10:20);p.y=n.y+n.height-39-10;p.visible=false;n.parent.addChild(p);p.fadeIn(600);setTimeout(function(){if(p.DOMItem){p.fadeOut(500,function(){if(p.DOMItem){p.remove()}})}},2000)}}function k(o,n){var m=(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Touch/i)!=null);var p=(navigator.userAgent.match(/Trident/i)!=null)&&(navigator.userAgent.match(/Touch/i)!=null);if(n==true&&m==false||p){return}setTimeout(function(){c(o,m)},500)}i.showScrollMarker=k})(a.Utils||(a.Utils={}));var b=a.Utils})(pppUI||(pppUI={}));var FUtils;(function(b){function d(h){if((h.indexOf("data/imagenes/")==0)||(h.indexOf("data/sonidos/")==0)||(h.indexOf("data/videos/")==0)||(h.indexOf("data/recursos/")==0)||(h.indexOf("data/actividades/")==0)||(h=="data/datos.xml")){return h}if(h.indexOf("medias/")==0){h=h.substring("medias/".length)}var g=h.substr(h.lastIndexOf(".")+1).toLowerCase();switch(g){case"jpg":case"jpeg":case"gif":case"png":case"svg":case"bmp":return"data/imagenes/"+h;case"swf":return"data/imagenes/"+h.replace(/\.swf/i,".png");case"mp4":return"data/videos/"+h;case"flv":return"data/videos/"+h.replace(/\.flv/i,".mp4");case"mp3":case"wav":return"data/sonidos/"+h;case"zip":return"data/actividades/"+h.replace(/\.zip/,"_zip")+"/Principal.html";case"xml":return"data/"+h;default:return"data/imagenes/"+h}}b.realResourcePath=d;var f={blocks:[{type:"img",files:[]}],spinner:"no",waitForDocumentReady:false,onEndLoading:null};function e(j,h){if(j==null||j==undefined||h==null||h==undefined||j==""||h==""){return}for(var g=0;g<f.blocks[0].files.length;g++){if(f.blocks[0].files[g].from==j&&f.blocks[0].files[g].file==h){return}}f.blocks[0].files.push({from:j,file:h})}b.addImageToPreloader=e;function a(g){if(f.blocks[0].files.length==0){g(f)}else{f.onEndLoading=g;pppPreloader.loadManifest(f)}}b.preloadImages=a;function c(i){var h='src="'+pppPreloader.from("data","data/imagenes/");var g="src='"+pppPreloader.from("data","data/imagenes/");i=i.replace(/src="data\/imagenes\//g,h);i=i.replace(/src='data\/imagenes\//g,g);return i}b.patchHTMLForPreloader=c})(FUtils||(FUtils={}));var MAIN_TITLE_POS={x:100,y:0,width:795,height:105};var MAIN_BOTONES_POS={x:40,y:146,width:220,height:42};var MAIN_BOTONES_SEPY=102;var HOME_BUT_POS={x:40,y:552,width:37,height:37};var INFO_BUT_POS={x:107,y:552,width:37,height:37};var PRACTICA_PRACTICABTN_POS={x:778,y:555,width:133,height:31};var PRACTICA_CONTENT_POS={x:113,y:41,width:733,height:490};var PRACTICA_ACTIVITY_POS={x:76,y:82,width:800,height:512};var PRACTICA_CLOSEBTN_POS={x:876,y:44,width:37,height:37};var PRACTICA_PREVBTN_POS={x:88,y:554,width:37,height:37};var PRACTICA_NEXTBTN_POS={x:145,y:554,width:37,height:37};var WATERMARK_POS={x:20,y:20,width:62,height:62};var conte;function fillInPractica(n,i,b){var d=b.getAttribute("boton")||"";var m=b.getAttribute("boton2")||"";var f=b.getAttribute("actividad")||"";var c="";if($(b).children("pantalla1").length>0){c=$($(b).children("pantalla1")[0]).text()}var a="";if($(b).children("pantalla2").length>0){a=$($(b).children("pantalla2")[0]).text()}if(d!=""){var h;var e;var g=new pppUI.UIButton("practica_btn","roundtextbutton",pppUI.UIButton.BUTTON,d);g.position=PRACTICA_PRACTICABTN_POS;var l=n.count;g.command=function(o,p){n.current=l};if(f.trim()!=""){i.addChild(g);h=new pppUI.UISlide("practica_1");n.addSlide(h);g=new pppUI.UIButton("cerrar_btn","popupCloseButton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_CLOSEBTN_POS;g.command=function(o,p){n.current=0};h.addChild(g);var j=new pppUI.UIIframe("practica_uiiframe",pppPreloader.from("data",FUtils.realResourcePath(f)),true);j.position=PRACTICA_ACTIVITY_POS;h.addChild(j)}else{if(c.trim()!=""){i.addChild(g);h=new pppUI.UISlide("practica_1");n.addSlide(h);g=new pppUI.UIButton("cerrar_btn","popupCloseButton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_CLOSEBTN_POS;g.command=function(o,p){n.current=0};h.addChild(g);e=pppUI.Utils.createTextBox("text",c,"slide_default",PRACTICA_CONTENT_POS);h.addChild(e);h.onPrepare=function(p){var o=p.getChildById("text");pppUI.Utils.showScrollMarker(o,true)};if(m!=""&&a.trim()!=""){g=new pppUI.UIButton("practica_btn","roundtextbutton",pppUI.UIButton.BUTTON,m);g.position=PRACTICA_PRACTICABTN_POS;var k=n.count;g.command=function(o,p){n.current=k};h.addChild(g);h=new pppUI.UISlide("practica_2");n.addSlide(h);g=new pppUI.UIButton("cerrar_btn","popupCloseButton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_CLOSEBTN_POS;g.command=function(o,p){n.current=0};h.addChild(g);g=new pppUI.UIButton("prev_btn","sliderprevbutton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_PREVBTN_POS;g.command=function(o,p){n.current=n.current-1};h.addChild(g);e=pppUI.Utils.createTextBox("text",a,"slide_default",PRACTICA_CONTENT_POS);h.addChild(e);h.onPrepare=function(p){var o=p.getChildById("text");pppUI.Utils.showScrollMarker(o,true)}}}}}}function fillInInfo(m,i,b,f){var l=b.getAttribute("boton2")||"";var d="";if($(b).children("pantalla1").length>0){d=$($(b).children("pantalla1")[0]).text()}var a="";if($(b).children("pantalla2").length>0){a=$($(b).children("pantalla2")[0]).text()}if(d!=""){var h;var e;var c=(f=="white")?"infoButton_white":"infoButton";var g=new pppUI.UIButton("info_btn",c,pppUI.UIButton.BUTTON,"");g.position=INFO_BUT_POS;var k=m.count;g.command=function(n,o){m.current=k};i.addChild(g);h=new pppUI.UISlide("info_1");m.addSlide(h);g=new pppUI.UIButton("cerrar_btn","popupCloseButton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_CLOSEBTN_POS;g.command=function(n,o){m.current=0};h.addChild(g);e=pppUI.Utils.createTextBox("text",d,"slide_default",PRACTICA_CONTENT_POS);h.addChild(e);h.onPrepare=function(o){var n=o.getChildById("text");pppUI.Utils.showScrollMarker(n,true)};if(a.trim()!=""){g=new pppUI.UIButton("practica_btn","slidernextbutton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_NEXTBTN_POS;var j=m.count;g.command=function(n,o){m.current=j};h.addChild(g);h=new pppUI.UISlide("info_2");m.addSlide(h);g=new pppUI.UIButton("cerrar_btn","popupCloseButton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_CLOSEBTN_POS;g.command=function(n,o){m.current=0};h.addChild(g);g=new pppUI.UIButton("prev_btn","sliderprevbutton",pppUI.UIButton.BUTTON,"");g.position=PRACTICA_PREVBTN_POS;g.command=function(n,o){m.current=m.current-1};h.addChild(g);e=pppUI.Utils.createTextBox("text",a,"slide_default",PRACTICA_CONTENT_POS);h.addChild(e);h.onPrepare=function(o){var n=o.getChildById("text");pppUI.Utils.showScrollMarker(n,true)}}}}function createSlide(d,a,m,l,j){var i=null;var c=$(a).children("img")[0];if(c!=null&&c!=undefined){var e=c.getAttribute("x");if(e==null||e==""){e=$(m).children()[0].getAttribute("x")||l}var n=c.getAttribute("y");if(n==null||n==""){n=$(m).children()[0].getAttribute("y")||j}var q=c.getAttribute("path")||"";var b=parseInt(c.getAttribute("width")||"-1");if(b==0){b=-1}var p=parseInt(c.getAttribute("height")||"-1");if(p==0){p=-1}var f=new pppUI.UIImage("img","",pppPreloader.from("data",FUtils.realResourcePath(q)),pppUI.UIImage.ADJUSTMODE_TAG,b,p);f.x=parseInt(e);f.y=parseInt(n);i=new pppUI.UISlide("slide");i.addChild(f);var k=false;var o=false;FUtils.addImageToPreloader("data",FUtils.realResourcePath(q));var g=c.getAttribute("anim")||"";if(g!=""){f.extra.path=q;f.extra.anim=g;o=true}c=$(a).children("audio")[0];if(c!=null&&c!=undefined){var h=new pppUI.UIMediaAudioClip("audio",pppPreloader.from("data",FUtils.realResourcePath(c.getAttribute("path"))));i.addChild(h);k=true}if(k||o){i.onPrepare=function(r){if(o){f.img.src=pppPreloader.from("data",FUtils.realResourcePath(f.extra.path))}};i.onShown=function(r){setTimeout(function(){if(o){f.img.src=pppPreloader.from("data",FUtils.realResourcePath(f.extra.anim))}if(k){var s=i.getChildById("audio");if(s!=null){s.play()}}},10)};i.onLeave=function(s){if(k){var r=i.getChildById("audio");if(r!=null){r.pause();r.rewind()}}}}}return i}function main(b){var a=true;if(window.hasOwnProperty("pppUIScaled")){a=window.pppUIScaled}conte=new pppUI.UIStage("__stage","diaporama_container",a,false,function(q){var B=$(b).children("engine")[0];var g=$(B).children("main")[0];var z=g.getAttribute("theme")||"black";var f=g.getAttribute("trans")||"";var n=g.getAttribute("title");var k=new pppUI.UISlider("mainslider");k.transMode=pppUI.UISlider.TRANS_NONE;k.addClass("slidePrincipal");k.x=0;k.y=0;k.width=q.width;k.height=q.height;q.addChild(k);var x=new pppUI.UISlide("sl_principal");x.addClass("slidePrincipal");var s=g.getAttribute("bkColor")||"#FFFFFF";x.$DOMItem.css("background-color",s);x.onPrepare=function(E){var F=E.getChildById("home_btn");if(F!=null){F.visible=false}var H=E.getChildById("imagenes");if(H!=null){H.current=0}var G=0;while(x.getChildById("but_"+G)!=null){var D=x.getChildById("but_"+G);if(D.pushed==true){D.pushed=false}G++}};k.addSlide(x);var e=new pppUI.UISlider("imagenes");if(f=="fade"){e.transMode=pppUI.UISlider.TRANS_FADE}else{e.transMode=pppUI.UISlider.TRANS_NONE}e.position={x:0,y:0,width:q.width,height:q.height};x.addChild(e);var r=g.getAttribute("titleColor")||"#000000";var w=pppUI.Utils.createTextBox("title_pri",n,"principal_titulo",MAIN_TITLE_POS);w.$DOMItem.css("color",r);x.addChild(w);var u=(z=="white")?"sliderhomebutton_white":"sliderhomebutton";var j=new pppUI.UIButton("home_btn",u,pppUI.UIButton.BUTTON,"");j.position=HOME_BUT_POS;j.command=function(D,E){k.current=0};j.visible=false;x.addChild(j);var y=parseInt(g.getAttribute("buttonsWidth")||"200");var c=parseInt(g.getAttribute("buttonsHeight")||"42");var t=$(g).children("buttons")[0];var p;var C=MAIN_BOTONES_POS;C.width=y;C.height=c;var i=MAIN_BOTONES_SEPY;var o=$(t).children().length;if(o>4){var A=388;A-=o*MAIN_BOTONES_POS.height;if(o>1){i=MAIN_BOTONES_POS.height+Math.floor(A/(o-1))}}var d=$(g).children("default")[0];var l=createSlide(e,d,d,MAIN_BOTONES_POS.x+y+50,MAIN_BOTONES_POS.y);if(l!=null){e.addSlide(l)}$(t).children().each(function(D,E){var F=new pppUI.UITextButton("but_"+D,"roundtextbutton",10,E.getAttribute("title")||"");F.position=C;F.command=function(G,H){e.current=D+1;j.visible=true};C.y+=i;x.addChild(F);l=createSlide(e,E,d,MAIN_BOTONES_POS.x+y+50,MAIN_BOTONES_POS.y);if(l!=null){e.addSlide(l)}});if($(B).children("practica").length>0){var m=$(B).children("practica")[0];fillInPractica(k,x,m)}if($(B).children("masinfo").length>0){var v=$(B).children("masinfo")[0];fillInInfo(k,x,v,z)}var h=new pppUI.UIObject("watermark");h.addClass("watermark");h.position=WATERMARK_POS;q.addChild(h);if(window.hasOwnProperty("MathJax")){MathJax.Hub.Queue(["Typeset",MathJax.Hub])}FUtils.preloadImages(function(D){pppSpinner.hide()})})};