(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d="Tradui",e=this||self;function f(a,w){a=a.split(".");var b=e;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===w?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=w};var g={0:d,1:"Anile",2:"F\u00e8men",3:function(a){return" Google tradui paj sa a otomatikman   "+a},4:function(a){return a+"Tradwi pou"},5:"Er\u00e8. S\u00e8v\u00e8 a pa ka konplete demand ou an. Eseye ank\u00f2 pita.",6:"Aprann piplis",7:function(a){return"Elekrisite founi pa "+a},8:d,9:"Pwogr\u00e8 nan Tradiksyon an",10:function(a){return"Tradui k\u00f2mant\u00e8 otomatikman pou: "+(a+" Itilize Google Translate?")},11:function(a){return"  Gade nan paj sa-a:  "+(a+" ")},12:"Montre Orijinal",13:"N ap itilize yon koneksyon ki gen sekirite pou n voye kontni dosye local sa a bay Google pou tradiksyon",
14:"Kontni paj an sekirite a pral jwenn Google pou tradiksyon av\u00e8k itilizasyon yon koneksyon ki gen sekirite",15:"Na pral itilize yon koneksyon ki gen sekirite pou n voye kontni paj intranet sa a bay Google pou tradiksyon. ",16:"Select Langaj",17:function(a){return"F\u00e8men "+(a+" tradiksyon")},18:function(a){return a+" F\u00e8men pou"},19:"Toujou kache ",20:"T\u00e8ks orijinal",21:"Kontribye yon mey\u00e8 tradiksyon",22:"Kontribye",23:"Tradui tout ",24:"Retabli tout",25:"Anile tout",26:"Tradui seksyon yo nan lang mwen ",
27:function(a){return"Tradui tout bagay nan "+a},28:"Montre lang orijinal yo",29:"Chwa",30:"F\u00e8men tradiksyon pou sit sa a",31:null,32:"Montre tradiksyon alt\u00e8natif yo",33:"Klike sou mo anwo yo pou ka jwenn tradiksyon alt\u00e8natif",34:"Itilize",35:"Trennen ak kle chanjman an pou re\u00f2ganize",36:"Klike pou chwazi l\u00f2t tradiksyon",37:"Kenbe anba kle bouton chanjman an, klike, epi trennen mo yo anwo pou w re\u00f2ganize",38:"M\u00e8si pou sigjesyon kons\u00e8nan tradiksyon ou kontribye nan Google translate ",
39:"administre tradiksyon pou plas sa a",40:"Klike sou yon mo pou chwazi l\u00f2t tradiksyon yo, oswa klike de fwa sou li pou korije l dir\u00e8kteman",41:"T\u00e8ks Orijinal la",42:d,43:d,44:"Nou rem\u00e8t koreksyon w la.",45:"Er\u00e8: Nou pa sip\u00f2te lang ki sou Paj Web la .",46:"Widget Lang Translate la"};var h=window.google&&google.translate&&google.translate._const;
if(h){var k;a:{for(var l=[],m=[""],n=0;n<m.length;++n){var p=m[n].split(","),q=p[0];if(q){var r=Number(p[1]);if(!(!r||.1<r||0>r)){var t=Number(p[2]),u=new Date,v=1E4*u.getFullYear()+100*(u.getMonth()+1)+u.getDate();!t||t<v||l.push({version:q,ratio:r,a:t})}}}var x=0,y=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),z=Number(y&&y[1])||Math.random();for(n=0;n<l.length;++n){var A=l[n];x+=A.ratio;if(1<=x)break;if(z<x){k=A.version;break a}}k="TE_20200210_00"}var B="/element/%s/e/js/element/element_main.js".replace("%s",
k);if("0"==k){var C=" element %s e js element element_main.js".split(" ");C[C.length-1]="main_ht.js";B=C.join("/").replace("%s",k)}if(h._cjlc)h._cjlc(this.EDGE_TRANSLATE_URL + "google/element_main.js");else{var D=this.EDGE_TRANSLATE_URL + "google/element_main.js",E=document.createElement("script");E.type="text/javascript";E.charset="UTF-8";E.src=D;var F=document.getElementsByTagName("head")[0];F||(F=document.body.parentNode.appendChild(document.createElement("head")));F.appendChild(E)}f("google.translate.m",g);f("google.translate.v",k)};}).call(window)
