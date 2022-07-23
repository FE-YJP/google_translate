(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"\u0698\u0628\u0627\u0693\u0644",1:"\u0693\u0646\u06ab\u0648\u0646\u0647",2:"\u062a\u0693\u0644",3:function(a){return"Google \u067e\u0647 \u0627\u062a\u0648\u0645\u0627\u062a \u0689\u0648\u0644 \u062f\u063a\u0647 \u067e\u0627\u06bc\u0647 "+(a+" \u062a\u0647 \u0698\u0628\u0627\u0693\u0644\u06d0 \u062f\u0647")},4:function(a){return"\u062a\u0647 \u0698\u0628\u0627\u0693\u0644\u06d0: "+a},5:"\u062a\u06cc\u0631\u0648\u062a\u0646\u0647: \u0633\u0631\u0648\u0631 \u0633\u062a\u0627\u0633\u0648 \u0648\u0693\u0627\u0646\u062f\u06cc\u0632 \u0646\u0647 \u0634\u064a \u0628\u0634\u067e\u0693\u0648\u0644\u06cc. \u0648\u0631\u0648\u0633\u062a\u0647 \u0628\u06cc\u0627 \u0647\u0685\u0647 \u0648\u06a9\u0693\u0626.",
6:"\u0646\u0648\u0631 \u0632\u062f\u0647 \u06a9\u0693\u0626",7:function(a){return"\u0637\u0631\u062d\u0647 \u0634\u0648\u06cc \u0644\u062e\u0648\u0627 \u062f: "+a},8:"\u0698\u0628\u0627\u0693\u0644",9:"\u0698\u0628\u0627\u0693\u0647 \u062f \u067e\u0631\u0645\u062e\u062a\u06ab \u067e\u0647 \u062d\u0627\u0644\u062a \u06a9\u06d0",10:function(a){return"\u0644\u0647 Google \u0698\u0628\u0627\u0693\u0648\u0646\u06a9\u064a \u0685\u062e\u0647 \u067e\u0647 \u06ab\u067c\u06d0 \u0627\u062e\u06cc\u0633\u062a\u0646\u06d0 \u0633\u0631\u0647 \u062f\u063a\u0647 \u067e\u0627\u06bc\u0647 "+
(a+" \u062a\u0647 \u0648\u0698\u0628\u0627\u0693\u0626\u061f")},11:function(a){return"\u062f\u063a\u0647 \u067e\u0627\u06bc\u0647 \u067e\u0647 "+(a+" \u06a9\u06d0 \u0648\u0648\u06cc\u0646\u0626")},12:"\u0627\u0635\u0644\u064a \u069a\u06a9\u0627\u0631\u0647 \u06a9\u0693\u0626",13:"\u0644\u0647 \u062e\u0648\u0646\u062f\u064a \u067e\u06cc\u0648\u0633\u062a\u0648\u0646 \u0685\u062e\u0647 \u067e\u0647 \u06ab\u067c\u06d0 \u0627\u062e\u06cc\u0633\u062a\u0646\u06d0 \u0633\u0631\u0647 \u0628\u0647 \u062f\u062f\u063a\u0647 \u0633\u06cc\u0645\u0647 \u06cc\u06cc\u0632 \u0641\u0627\u06cc\u0644 \u0645\u062d\u062a\u0648\u0627 \u062f \u0698\u0628\u0627\u0693\u06d0 \u0644\u067e\u0627\u0631\u0647 Google \u062a\u0647 \u0648\u0644\u06cc\u0696\u0644 \u0634\u064a.",
14:"\u0644\u0647 \u062e\u0648\u0646\u062f\u064a \u067e\u06cc\u0648\u0633\u062a\u0648\u0646 \u0685\u062e\u0647 \u067e\u0647 \u06ab\u067c\u06d0 \u0627\u062e\u06cc\u0633\u062a\u0646\u06d0 \u0633\u0631\u0647 \u0628\u0647 \u062f\u062f\u063a\u06d0 \u062e\u0648\u0646\u062f\u064a \u0645\u062d\u062a\u0648\u0627 \u062f \u0698\u0628\u0627\u0693\u06d0 \u0644\u067e\u0627\u0631\u0647 Google \u062a\u0647 \u0648\u0644\u06cc\u0696\u0644 \u0634\u064a.",15:"\u0644\u0647 \u062e\u0648\u0646\u062f\u064a \u067e\u06cc\u0648\u0633\u062a\u0648\u0646 \u0685\u062e\u0647 \u067e\u0647 \u06ab\u067c\u06d0 \u0627\u062e\u06cc\u0633\u062a\u0646\u06d0 \u0633\u0631\u0647 \u0628\u0647 \u062f\u062f\u063a\u0647 \u0627\u0646\u067c\u0631\u0627\u0646\u06cc\u067c \u067e\u0627\u06bc\u06d0 \u0645\u062d\u062a\u0648\u0627 \u062f \u0698\u0628\u0627\u0693\u06d0 \u0644\u067e\u0627\u0631\u0647 Google \u062a\u0647 \u0648\u0644\u06cc\u0696\u0644 \u0634\u064a.",
16:"\u0698\u0628\u0647 \u063a\u0648\u0631\u0647 \u06a9\u0693\u0626",17:function(a){return"\u062f "+(a+" \u0698\u0628\u0627\u0693\u0647 \u06ab\u0644 \u06a9\u0693\u0626")},18:function(a){return"\u06ab\u0644 \u0634\u0648\u06cc \u0644\u067e\u0627\u0631\u0647 \u062f: "+a},19:"\u062a\u0644 \u067e\u067c",20:"\u0627\u0635\u0644\u064a \u0645\u062a\u0646:",21:"\u062f \u069a\u06d0 \u0698\u0628\u0627\u0693\u06d0 \u067e\u0647 \u0628\u0631\u062e\u0647 \u06a9\u06d0 \u0645\u0631\u0633\u062a\u0647 \u0648\u06a9\u0693\u0626",
22:"\u0645\u0631\u0633\u062a\u0647",23:"\u067c\u0648\u0644 \u0648\u0698\u0628\u0627\u0693\u0626",24:"\u067c\u0648\u0644 \u0628\u06cc\u0627\u0632\u06cc\u0631\u0645\u0647 \u06a9\u0693\u0626",25:"\u067c\u0648\u0644 \u0693\u0646\u06ab \u06a9\u0693\u0626",26:"\u0632\u0645\u0627 \u062f \u0698\u0628\u06d0 \u0628\u0631\u062e\u06d0 \u0648\u0698\u0628\u0627\u0693\u0626",27:function(a){return"\u0647\u0631 \u0634\u06cc "+(a+" \u062a\u0647 \u0648\u0698\u0628\u0627\u0693\u0626")},28:"\u0627\u0635\u0644\u064a \u0698\u0628\u06d0 \u069a\u06a9\u0627\u0631\u0647 \u06a9\u0693\u0626",
29:"\u063a\u0648\u0631\u0647 \u062a\u0648\u0628\u0648\u0646\u0647",30:"\u062f\u062f\u063a\u06d0 \u0633\u0627\u06cc\u067c \u0644\u067e\u0627\u0631\u0647 \u0698\u0628\u0627\u0693\u0647 \u06ab\u0644 \u06a9\u0693\u0626",31:null,32:"\u0645\u062a\u0646\u0627\u0648\u0628\u06d0 \u0698\u0628\u0627\u0693\u06d0 \u069a\u06a9\u0627\u0631\u0647 \u06a9\u0693\u0626",33:"\u062f \u0645\u062a\u0646\u0627\u0648\u0628\u0648 \u0698\u0628\u0627\u0693\u0648 \u062a\u0631\u0644\u0627\u0633\u0647 \u06a9\u0648\u0644\u0648 \u0644\u067e\u0627\u0631\u0647 \u067e\u0647 \u067e\u0648\u0631\u062a\u0647 \u067c\u06a9\u0648 \u06a9\u0644\u06cc\u06a9 \u0648\u06a9\u0693\u0626",
34:"\u0627\u0633\u062a\u0639\u0645\u0627\u0644",35:"\u062f \u0628\u06cc\u0627 \u062a\u0646\u0638\u06cc\u0645 \u0644\u067e\u0627\u0631\u0647 \u06cc\u06d0 \u062f \u0634\u06cc\u0641\u067c \u06a9\u06cc\u0644\u06cd \u0633\u0631\u0647 \u0631\u0627\u06a9\u0634 \u06a9\u0693.",36:"\u062f \u0645\u062a\u0646\u0627\u0648\u0628\u0648 \u0698\u0628\u0627\u0693\u0648 \u0644\u067e\u0627\u0631\u0647 \u06a9\u0644\u06cc\u06a9 \u0648\u06a9\u0693\u0626",37:"\u062f \u0634\u06cc\u0641\u067c \u06a9\u06cc\u0644\u064a \u0648\u0646\u06cc\u0633\u0626\u060c \u06a9\u0644\u06cc\u06a9 \u0648\u06a9\u0693\u0626 \u0627\u0648 \u062f \u0628\u06cc\u0627 \u062a\u0646\u0638\u06cc\u0645 \u0644\u067e\u0627\u0631\u0647 \u067e\u0648\u0631\u062a\u0647 \u067c\u06a9\u064a \u0631\u0627\u06a9\u0634 \u06a9\u0693\u0626.",
38:"Google \u0698\u0628\u0627\u0693\u0648\u0646\u06a9\u064a \u062a\u0647 \u062f \u0698\u0628\u0627\u0693\u06d0 \u0648\u0693\u0627\u0646\u062f\u06cc\u0632 \u0645\u0631\u0633\u062a\u06d0 \u0685\u062e\u0647 \u0645\u0648 \u0645\u0646\u0646\u0647.",39:"\u062f\u062f\u063a\u0647 \u0633\u0627\u06cc\u067c \u0644\u067e\u0627\u0631\u0647 \u0698\u0628\u0627\u0693\u06d0 \u0627\u062f\u0627\u0631\u0647 \u06a9\u0693\u0626",40:"\u062f \u0645\u062a\u0646\u0627\u0628\u0648 \u0698\u0628\u0627\u0693\u0648 \u0644\u067e\u0627\u0631\u0647 \u067e\u0647 \u067c\u06a9\u064a \u06a9\u0644\u06cc\u06a9 \u0648\u06a9\u0693\u0626 \u06cc\u0627 \u067e\u0647 \u0645\u0633\u062a\u0642\u06cc\u0645 \u0689\u0648\u0644 \u062f \u0633\u0645\u0648\u0646 \u0644\u067e\u0627\u0631\u0647 \u062f\u0648\u0647 \u0681\u0644\u0647 \u06a9\u0644\u06cc\u06a9 \u0648\u06a9\u0693\u0626",
41:"\u0627\u0635\u0644\u064a \u0645\u062a\u0646",42:"\u0698\u0628\u0627\u0693\u0644",43:"\u0698\u0628\u0627\u0693\u0644",44:"\u0633\u062a\u0627\u0633\u0648 \u0627\u0635\u0644\u0627\u062d \u0648\u0633\u067e\u0627\u0631\u0644 \u0634\u0648\u0647.",45:"\u062a\u06cc\u0631\u0648\u062a\u0646\u0647: \u062f \u0648\u06cc\u0628 \u067e\u0627\u06bc\u06d0 \u0644\u0647 \u0698\u0628\u06d0 \u0685\u062e\u0647 \u062d\u0645\u0627\u06cc\u062a \u0646\u0647 \u06a9\u06cc\u0696\u064a.",46:"\u0698\u0628\u0647 \u0648\u0698\u0628\u0627\u0693\u0626 \u06a9\u0627\u0631\u0648\u0648\u0646\u06cc"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_ps.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(this.EDGE_TRANSLATE_URL + "google/element_main.js");else{var C=this.EDGE_TRANSLATE_URL + "google/element_main.js",D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=C;var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
