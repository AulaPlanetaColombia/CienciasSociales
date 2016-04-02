/* VERSION : 15.12.22.1 */ 
var pppUI;(function(a){(function(i){function h(n,p,o,m,r){if(typeof r==="undefined"){r=true}var q=new a.UIObject(n);q.addClass(o);if(r&&TLF.isTLF(p)){q.addClass("tlfText");q.setContent(TLF.toHTML(p,function(s){if(window.hasOwnProperty("pppPreloader")){return pppPreloader.from("data",FUtils.realResourcePath(s))}else{return FUtils.realResourcePath(s)}}))}else{if(window.hasOwnProperty("pppPreloader")){p=FUtils.patchHTMLForPreloader(p)}q.setContent(p)}q.position=m;return q}i.createTextBox=h;function g(n,s,q,m,p,r){var o=new a.UIButton(n,q,p,s);o.command=r;o.position=m;return o}i.createEventButton=g;function l(u,q,v,m,t,n,s){if(typeof s==="undefined"){s=a.UIButton.BUTTON}var o;var r=new Array();for(o=0;o<t.length;o++){var p=new a.UIButton(t[o].id,t[o].className,s,t[o].content);if(m){p.x=q.x;p.y=q.y+o*v}else{p.x=q.x+o*v;p.y=q.y}p.width=q.width;p.height=q.height;p.visible=t[o].visible;p.command=n;u.addChild(p);r.push(p)}return r}i.createButtonList=l;function f(p,s,r,q){if(typeof q==="undefined"){q=a.UIButton.BUTTON}var o;var n=new Array();for(o=0;o<s.length;o++){var m=new a.UIButton(s[o].id,s[o].className,q,s[o].content);m.position=s[o].position;m.visible=s[o].visible;m.command=r;p.addChild(m);n.push(m)}return n}i.createButtonListVarPos=f;function e(r,m,n,t,s){var q;var p=new Array();for(q=0;q<t.length;q++){var o=new a.UIButton(t[q].id,t[q].className,a.UIButton.BUTTON,t[q].content);o.x=m.x;o.y=m.y+q*n;o.width=m.width;o.height=m.height;o.visible=t[q].visible;o.command=s;r.addChild(o);p.push(o)}return p}i.createButtonColumn2=e;function d(v,r,n,m,u,w,o){var p;var s=r.y;var t=new Array();for(p=0;p<u.length&&p<w;p++){var q=new a.UIButton(u[p].id,u[p].className,2,u[p].content);q.x=(p<u.length/2)?r.x:r.x+n;q.y=s+Math.floor(p%(u.length/2))*m;q.width=r.width;q.height=r.height;q.visible=u[p].visible;q.command=o;v.addChild(q);t.push(q)}return t}i.createButton2Columns=d;function j(v,q,x,n,u,o,p,t,r,w){if(typeof r==="undefined"){r="slideContainer"}if(typeof w==="undefined"){w=""}var m=new a.UISlider(r);m.addClass(w);m.position=t;v.addChild(m);var s=l(v,q,x,n,u,o,p);s.push(m);return s}i.createButtonsTabs=j;function c(n,m){if(n==null||n.DOMItem==null){return}var o=n.DOMItem;if(n instanceof a.UIRichText){o=n.$DOMItem.find("#realContent")[0];if(o==null){return}}if((o.scrollHeight-o.clientHeight)>3){var p=new a.UIImage("scrollMarker","","motor/images/scrollmarkertrans.png",a.UIImage.ADJUSTMODE_NONE,39,39);p.x=n.x+n.width-39-((m)?10:20);p.y=n.y+n.height-39-10;p.visible=false;n.parent.addChild(p);p.fadeIn(600);setTimeout(function(){if(p.DOMItem){p.fadeOut(500,function(){if(p.DOMItem){p.remove()}})}},2000)}}function k(o,n){var m=(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Touch/i)!=null);var p=(navigator.userAgent.match(/Trident/i)!=null)&&(navigator.userAgent.match(/Touch/i)!=null);if(n==true&&m==false||p){return}setTimeout(function(){c(o,m)},500)}i.showScrollMarker=k})(a.Utils||(a.Utils={}));var b=a.Utils})(pppUI||(pppUI={}));var FUtils;(function(b){function d(h){if((h.indexOf("data/imagenes/")==0)||(h.indexOf("data/sonidos/")==0)||(h.indexOf("data/videos/")==0)||(h.indexOf("data/recursos/")==0)||(h.indexOf("data/actividades/")==0)||(h=="data/datos.xml")){return h}if(h.indexOf("medias/")==0){h=h.substring("medias/".length)}var g=h.substr(h.lastIndexOf(".")+1).toLowerCase();switch(g){case"jpg":case"jpeg":case"gif":case"png":case"svg":case"bmp":return"data/imagenes/"+h;case"swf":return"data/imagenes/"+h.replace(/\.swf/i,".png");case"mp4":return"data/videos/"+h;case"flv":return"data/videos/"+h.replace(/\.flv/i,".mp4");case"mp3":case"wav":return"data/sonidos/"+h;case"zip":return"data/actividades/"+h.replace(/\.zip/,"_zip")+"/Principal.html";case"xml":return"data/"+h;default:return"data/imagenes/"+h}}b.realResourcePath=d;var f={blocks:[{type:"img",files:[]}],spinner:"no",waitForDocumentReady:false,onEndLoading:null};function e(j,h){if(j==null||j==undefined||h==null||h==undefined||j==""||h==""){return}for(var g=0;g<f.blocks[0].files.length;g++){if(f.blocks[0].files[g].from==j&&f.blocks[0].files[g].file==h){return}}f.blocks[0].files.push({from:j,file:h})}b.addImageToPreloader=e;function a(g){if(f.blocks[0].files.length==0){g(f)}else{f.onEndLoading=g;pppPreloader.loadManifest(f)}}b.preloadImages=a;function c(i){var h='src="'+pppPreloader.from("data","data/imagenes/");var g="src='"+pppPreloader.from("data","data/imagenes/");i=i.replace(/src="data\/imagenes\//g,h);i=i.replace(/src='data\/imagenes\//g,g);return i}b.patchHTMLForPreloader=c})(FUtils||(FUtils={}));var MAIN_BOTONES_POS={x:40,y:146,width:220,height:42};var MAIN_BOTONES_SEPY=102;var TOOLBAR_BUT_POS={x:22,y:554,width:37,height:37};var TOOLBAR_BUT_SEPX=43;var UNDER_BUT_POS={x:83,y:550,width:163,height:38};var UNDER_BUT_SEPX=170;var MAX_NUM_BUTTONS=12;var LEX_BUT_POS={x:30,y:182,width:160,height:38};var LEX_BUT_SEPX=177;var LEX_BUT_SEPY=49;var LEX_TEXT_POS={x:LEX_BUT_POS.x+2*LEX_BUT_SEPX,y:LEX_BUT_POS.y-2,width:540,height:379};var WATERMARK_POS={x:20,y:20,width:62,height:62};var conte;var watermark;function stripTags(a){return a.replace(/(<([^>]+)>)/ig,"")}var NEEDS_TITLE=1;var NEEDS_BODY=2;function loadSlidesFromXML(c,a){var b=new Array();$(c).children("definition").each(function(){var f=new Object();var g=$(this).children("title");var e=$(this).children("def");f.title=$.trim($(g[0]).text());f.def=$.trim($(e[0]).text());var d=true;if((a&NEEDS_TITLE)&&f.title==""){d=false}if((a&NEEDS_BODY)&&stripTags(f.def).trim()==""&&f.def.indexOf("<img ")==-1){d=false}if(d){b.push(f)}});return b}function createUnderstandingType(n,h,t,c,a,l){var e=new pppUI.UISlide("sl_"+a);e.x=0;e.y=0;e.width=n.width;e.height=n.height;e.addClass("slide"+a.charAt(0).toUpperCase()+a.slice(1));h.addSlide(e);var r=pppUI.Utils.createTextBox("title_"+a.substring(0,3),l,a.substring(0,3)+"_titulo",{x:80,y:0,width:795,height:105});e.addChild(r);var q=new pppUI.UISlider("slr_"+a);q.x=90;q.y=130;q.transMode=pppUI.UISlider.TRANS_NONE;q.width=n.width-90*2;q.height=n.height-130;e.addChild(q);for(var p=0;p<t.length;p++){var d="sl_"+a+"_"+p;var b=new pppUI.UISlide(d);q.addSlide(b);var k="txt_"+a.substring(0,3);var s=pppUI.Utils.createTextBox(k,t[p].def,a+"_texto",{x:0,y:0,width:q.width,height:415});b.addChild(s);(function(u,i){u.onShown=function(v){setTimeout(function(){if(v!=null){var w=v.getChildById(i);if(w){w.DOMItem.scrollTop=0}pppUI.Utils.showScrollMarker(w,true)}},1)}})(b,k)}if(c){var g=pppUI.Utils.createEventButton("home_"+a,"","sliderhomebutton",TOOLBAR_BUT_POS,pppUI.UIButton.BUTTON,function(i,u){h.transMode=pppUI.UISlider.TRANS_NONE;h.current=0});e.addChild(g);var f=new Array();for(var p=0;p<t.length;p++){var j={id:"und_btn_"+p,className:"roundtextbutton",content:t[p].title,visible:true};f.push(j)}var m=pppUI.Utils.createButtonList(e,UNDER_BUT_POS,UNDER_BUT_SEPX,false,f,function(u,w){var i=w.id.substring(4,w.id.length);var v=parseInt(w.id.substring(8));q.current=v},99)}else{var o;o=[{id:"home_"+a,className:"sliderhomebutton",content:"",visible:true,position:{x:TOOLBAR_BUT_POS.x,y:TOOLBAR_BUT_POS.y,width:37,height:37}},{id:"prev_"+a,className:"sliderprevbutton",content:"",visible:false,position:{x:TOOLBAR_BUT_POS.x+37+30,y:TOOLBAR_BUT_POS.y,width:37,height:37}},{id:"next_"+a,className:"slidernextbutton",content:"",visible:(q.count>1?true:false),position:{x:TOOLBAR_BUT_POS.x+37+30+37+20,y:TOOLBAR_BUT_POS.y,width:37,height:37}}];var m=pppUI.Utils.createButtonListVarPos(e,o,function(u,v){var i=v.id.substring(4,v.id.length);switch(v.id.substring(0,4)){case"home":h.transMode=pppUI.UISlider.TRANS_NONE;h.current=0;v.parent.getChildById("prev"+i).visible=false;v.parent.getChildById("next"+i).visible=(q.count>1?true:false);break;case"prev":q.prev();if(q.current==0){v.parent.getChildById("prev"+i).visible=false}v.parent.getChildById("next"+i).visible=true;break;case"next":q.next();if(q.current==(q.count-1)){v.parent.getChildById("next"+i).visible=false}v.parent.getChildById("prev"+i).visible=true;break}})}e.onPrepare=function(i){var v=i.getChildById("slr_"+a);if(v.count>0){v.current=0}if(c){var u=i.getChildById("und_btn_0");u.pushed=true}}}function createDefinitionsType(k,b,d,p,n){var c=new pppUI.UISlide("sl_"+p);c.x=0;c.y=0;c.width=k.width;c.height=k.height;c.addClass("slide"+p.charAt(0).toUpperCase()+p.slice(1));b.addSlide(c);var h=pppUI.Utils.createEventButton("home_"+p,"","sliderhomebutton",TOOLBAR_BUT_POS,pppUI.UIButton.BUTTON,function(i,q){b.transMode=pppUI.UISlider.TRANS_NONE;b.current=0});c.addChild(h);var o=pppUI.Utils.createTextBox("title_"+p.substring(0,3),n,p.substring(0,3)+"_titulo",{x:100,y:0,width:795,height:105});c.addChild(o);var j=new pppUI.UISlider("sliderText_"+p);j.position=LEX_TEXT_POS;j.transMode=pppUI.UISlider.TRANS_NONE;c.addChild(j);var m=new Array();var f=0;for(f=0;f<d.length;f++){var a={id:"but_"+p.substring(0,3)+"_"+f,className:"roundtextbutton gridbutton",content:d[f].title,visible:true};m.push(a);var e=new pppUI.UISlide("slideT_"+p.substring(0,3)+"_"+f);var g=pppUI.Utils.createTextBox("txt_"+p.substring(0,3)+"_"+f,d[f].def,p+"_texto",{x:0,y:0,width:LEX_TEXT_POS.width-10,height:LEX_TEXT_POS.height});g.$DOMItem.addClass("uirichtext");e.addChild(g);e.onPrepare=function(i){var q="txt_"+p.substring(0,3)+"_0";setTimeout(function(){if(i!=null){var r=i.getChildById(q);if(r){r.DOMItem.scrollTop=0}pppUI.Utils.showScrollMarker(r,true)}},1)};j.addSlide(e)}var l=pppUI.Utils.createButton2Columns(c,LEX_BUT_POS,LEX_BUT_SEPX,LEX_BUT_SEPY,m,MAX_NUM_BUTTONS,function(r,t){var q=parseInt(t.id.substring(8,t.id.length));var s=d[q].def;if(TLF.isTLF(s)){s=TLF.toHTML(s,function(u){pppPreloader.from("data",FUtils.realResourcePath(u));FUtils.addImageToPreloader("data",FUtils.realResourcePath(u))})}var i=parseInt(t.id.substring(8,t.id.length));j.current=i});c.onPrepare=function(i){var r=this.getChildById("sliderText_"+p);if(r.count>0){r.current=0;var q=i.getChildById("but_"+p.substring(0,3)+"_0");q.pushed=true}}}function createActivityType(a,d,g,f){var c=new pppUI.UISlide("sl_"+g);c.x=0;c.y=0;c.width=a.width;c.height=a.height;c.addClass("slide"+g.charAt(0).toUpperCase()+g.slice(1));d.addSlide(c);var e=pppUI.Utils.createEventButton("home_"+g,"","sliderhomebutton",TOOLBAR_BUT_POS,pppUI.UIButton.BUTTON,function(i,j){d.transMode=pppUI.UISlider.TRANS_NONE;d.current=0;var h;var k=j.parent;while(k!=null){k=k.parent;if(k!=null){h=k}}watermark.visible=true});c.addChild(e);var b=new pppUI.UIIframe("uiiframe_"+g,pppPreloader.from("data",FUtils.realResourcePath(f)),true);b.x=60;b.y=16;b.width=832;b.height=534;c.addChild(b)}function main(b){var a=true;if(window.hasOwnProperty("pppUIScaled")){a=window.pppUIScaled}conte=new pppUI.UIStage("__stage","diaporama_container",a,false,function(k){var r=$(b).children("engine")[0];var i=$(r).children("main")[0];var K=$(r).children("understanding")[0];var J=$(r).children("reaserch")[0];var q=$(r).children("definitions")[0];var m=$(r).children("activity")[0];var l=i.getAttribute("title");var f=($(i).children("tf").length>0)?$.trim($($(i).children("tf")[0]).text()):"";var D=($(i).children("audio").length>0)?$.trim($($(i).children("audio")[0]).text()):"";var v=($(i).children("audio").length>0)?$.trim($(i).children("audio")[0].getAttribute("path")):"";var u=($(i).children("audio2").length>0)?$.trim($($(i).children("audio2")[0]).text()):"";var z=($(i).children("audio2").length>0)?$.trim($(i).children("audio2")[0].getAttribute("path")):"";var p=($(i).children("video").length>0)?$.trim($($(i).children("video")[0]).text()):"";var n=K.getAttribute("visible");var Q=K.getAttribute("title2");var A=K.getAttribute("title");var o=K.getAttribute("buttons");var h=loadSlidesFromXML(K,NEEDS_BODY);if(Q==null||Q==""){Q="Comprensión"}var V=q.getAttribute("visible");var H=q.getAttribute("title2");var j=q.getAttribute("title");var T=loadSlidesFromXML(q,NEEDS_TITLE|NEEDS_BODY);if(H==null||H==""){H="Léxico"}var B=J.getAttribute("visible");var W=J.getAttribute("title2");var G=J.getAttribute("title");var C=J.getAttribute("buttons");var y=loadSlidesFromXML(J,NEEDS_BODY);if(W==null||W==""){W="Investiga"}var U=m.getAttribute("visible");var F=m.getAttribute("title2");var g=m.getAttribute("title");var t=m.getAttribute("path");if(F==null||F==""){F="Actividad"}var M=new pppUI.UISlider("mainslider");M.addClass("slidePrincipal");M.x=0;M.y=0;M.width=k.width;M.height=k.height;k.addChild(M);var d=new pppUI.UISlide("sl_principal");d.addClass("slidePrincipal");M.addSlide(d);var x=MAIN_BOTONES_POS;if(n=="true"){var c=M.count;createUnderstandingType(k,M,h,(o=="true"),"comprension",A);var L=pppUI.Utils.createEventButton("but_pri_comprension",Q,"roundtextbutton",x,pppUI.UIButton.BUTTON,function(Y,Z){M.transMode=pppUI.UISlider.TRANS_FADE;M.current=c;watermark.visible=true});d.addChild(L);x.y+=MAIN_BOTONES_SEPY}if(V=="true"){var P=M.count;createDefinitionsType(k,M,T,"lexico",j);var S=pppUI.Utils.createEventButton("but_pri_lexico",H,"roundtextbutton",x,pppUI.UIButton.BUTTON,function(Y,Z){M.transMode=pppUI.UISlider.TRANS_FADE;M.current=P;watermark.visible=true});d.addChild(S);x.y+=MAIN_BOTONES_SEPY}if(B=="true"){var s=M.count;createUnderstandingType(k,M,y,(C=="true"),"investiga",G);var w=pppUI.Utils.createEventButton("but_pri_investiga",W,"roundtextbutton",x,pppUI.UIButton.BUTTON,function(Y,Z){M.transMode=pppUI.UISlider.TRANS_FADE;M.current=s;watermark.visible=true});d.addChild(w);x.y+=MAIN_BOTONES_SEPY}if(U=="true"){var N=M.count;createActivityType(k,M,"actividad",t);var R=pppUI.Utils.createEventButton("but_pri_actividad",F,"roundtextbutton",x,pppUI.UIButton.BUTTON,function(Y,Z){M.transMode=pppUI.UISlider.TRANS_NONE;M.current=N;watermark.visible=false});d.addChild(R)}var O=new pppUI.UISimpleText("title_pri","pri_titulo",l);O.alignMode=pppUI.UISimpleText.ALIGN_CENTER|pppUI.UISimpleText.ALIGN_MIDDLE;O.position={x:100,y:0,width:795,height:105};d.addChild(O);if(f.length>0){var X=pppUI.Utils.createTextBox("txt_pri",f,"pri_texto",{x:300,y:142,width:600,height:388});X.$DOMItem.addClass("uirichtext");d.addChild(X);pppUI.Utils.showScrollMarker(X,true)}else{if(D.length>0){if(u.length>0){var e=new pppUI.UIMediaAudio("aud_pri","",pppPreloader.from("data",FUtils.realResourcePath(v)),pppPreloader.from("data",FUtils.realResourcePath(D)),pppUI.UIImage.ADJUSTMODE_STRETCH);FUtils.addImageToPreloader("data",FUtils.realResourcePath(v));e.position={x:323,y:220,width:241,height:230};d.addChild(e);var I=new pppUI.UIMediaAudio("aud2_pri","",pppPreloader.from("data",FUtils.realResourcePath(z)),pppPreloader.from("data",FUtils.realResourcePath(u)),pppUI.UIImage.ADJUSTMODE_STRETCH);FUtils.addImageToPreloader("data",FUtils.realResourcePath(z));I.position={x:618,y:220,width:241,height:230};d.addChild(I);d.onLeave=function(Y){e.pause();I.pause()}}else{var e=new pppUI.UIMediaAudio("aud_pri","",pppPreloader.from("data",FUtils.realResourcePath(v)),pppPreloader.from("data",FUtils.realResourcePath(D)),pppUI.UIImage.ADJUSTMODE_STRETCH);FUtils.addImageToPreloader("data",FUtils.realResourcePath(v));e.position={x:323,y:122,width:500,height:426};d.addChild(e);d.onLeave=function(Y){e.pause()}}}else{if(p.length>0){var E=new pppUI.UIMediaVideo("vid_pri","",pppPreloader.from("data",FUtils.realResourcePath(p)),585,383-50);E.position={x:329,y:91,width:553,height:499};d.addChild(E);d.onLeave=function(Y){E.pause()}}}}watermark=new pppUI.UIObject("watermark");watermark.addClass("watermark");watermark.position=WATERMARK_POS;k.addChild(watermark);if(window.hasOwnProperty("MathJax")){MathJax.Hub.Queue(["Typeset",MathJax.Hub])}FUtils.preloadImages(function(Y){pppSpinner.hide()})})};