(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"Oversett",1:"Avbryt",2:"Lukk",3:function(a){return"Google har oversatt denne siden til "+(a+" automatisk")},4:function(a){return"Oversatt til: "+a},5:"Feil: Tjeneren kunne ikke fullf\u00f8re foresp\u00f8rselen. Pr\u00f8v p\u00e5 nytt senere.",6:"Les mer",7:function(a){return"Drevet av "+a},8:"Oversetter",9:"Oversettelse p\u00e5g\u00e5r",10:function(a){return"Vil du oversette denne siden til "+(a+" med Google Oversetter?")},11:function(a){return"Vis denne siden p\u00e5: "+a},12:"Vis original",
13:"Innholdet p\u00e5 denne lokale filen sendes til Google via en sikker tilkobling for \u00e5 bli oversatt.",14:"Innholdet p\u00e5 denne sikre siden sendes til Google via en sikker tilkobling for \u00e5 bli oversatt.",15:"Innholdet p\u00e5 denne intranettsiden sendes til Google via en sikker tilkobling for \u00e5 bli oversatt.",16:"Velg spr\u00e5k",17:function(a){return"Sl\u00e5 av oversettelse til "+a},18:function(a){return"Deaktiver for: "+a},19:"Skjul alltid",20:"Originaltekst:",21:"Bidra med en bedre oversettelse",
22:"Bidra",23:"Oversett alt",24:"Gjenopprett alt",25:"Avbryt alt",26:"Oversett delene til mitt spr\u00e5k",27:function(a){return"Oversett alt til "+a},28:"Vis opprinnelige spr\u00e5k",29:"Alternativer",30:"Sl\u00e5 av oversettelse for dette nettstedet",31:null,32:"Vis alternative oversettelser",33:"Klikk p\u00e5 ord ovenfor for \u00e5 f\u00e5 alternative oversettelser",34:"Bruk",35:"Dra med Shift-tast for \u00e5 endre rekkef\u00f8lge",36:"Klikk for \u00e5 se alternative oversettelser",37:"Hold nede Shift-tasten, klikk, og dra deretter ordene ovenfor for \u00e5 endre p\u00e5 rekkef\u00f8lgen.",
38:"Takk for at du bidrar med oversettelsesforslaget ditt til Google Oversetter.",39:"Administrer oversetting for dette nettstedet",40:"Klikk p\u00e5 et ord for \u00e5 se alternative oversettelser, eller dobbeltklikk for \u00e5 redigere direkte",41:"Opprinnelig tekst",42:"Oversetter",43:"Oversett",44:"Rettingen din er sendt inn.",45:"Feil: Spr\u00e5ket til nettsiden st\u00f8ttes ikke.",46:"Modul for spr\u00e5koversetting"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_no.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(this.EDGE_TRANSLATE_URL + "google/element_main.js");else{var C=this.EDGE_TRANSLATE_URL + "google/element_main.js",D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=C;var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
