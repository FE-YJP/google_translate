(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"Traduci",1:"Annulla",2:"Chiudi",3:function(a){return"Google ha tradotto automaticamente questa pagina in: "+a},4:function(a){return"Tradotta in: "+a},5:"Errore. Impossibile completare la richiesta nel server. Riprova pi\u00f9 tardi.",6:"Ulteriori informazioni",7:function(a){return"Powered by "+a},8:"Traduttore",9:"Traduzione in corso",10:function(a){return"Tradurre questa pagina in "+(a+" utilizzando Google Traduttore?")},11:function(a){return"Visualizza questa pagina in: "+a},12:"Mostra originale",
13:"I contenuti di questo file locale saranno inviati a Google per essere tradotti utilizzando una connessione protetta.",14:"I contenuti di questa pagina sicura saranno inviati a Google per essere tradotti utilizzando una connessione protetta.",15:"I contenuti di questa pagina intranet saranno inviati a Google per essere tradotti utilizzando una connessione protetta.",16:"Seleziona lingua",17:function(a){return"Disattiva traduzione di "+a},18:function(a){return"Disattiva per: "+a},19:"Nascondi sempre",
20:"Testo originale:",21:"Contribuisci a una traduzione migliore",22:"Contribuisci",23:"Traduci tutto",24:"Ripristina tutto",25:"Annulla tutto",26:"Traduci le sezioni nella mia lingua",27:function(a){return"Traduci tutto in "+a},28:"Mostra lingue originali",29:"Opzioni",30:"Disattiva la traduzione per questo sito",31:null,32:"Mostra traduzioni alternative",33:"Fai clic sulle parole riportate sopra per ottenere traduzioni alternative",34:"Utilizza",35:"Trascina tenendo premuto MAIUSC per riordinare.",
36:"Fai clic per visualizzare le traduzioni alternative",37:"Tieni premuto il tasto MAIUSC, fai clic e trascina le parole riportate sopra per riordinarle.",38:"Grazie per aver contribuito a Google Traduttore con la traduzione che hai suggerito.",39:"Gestisci la traduzione per questo sito",40:"Fai clic su una parola per visualizzare le traduzioni alternative oppure fai doppio clic per apportare direttamente le modifiche",41:"Testo originale",42:"Traduttore",43:"Traduci",44:"La correzione \u00e8 stata inviata.",
45:"Errore: la lingua della pagina web non \u00e8 supportata.",46:"Widget di traduzione della lingua"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_it.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(this.EDGE_TRANSLATE_URL + "google/element_main.js");else{var C=this.EDGE_TRANSLATE_URL + "google/element_main.js",D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=C;var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
