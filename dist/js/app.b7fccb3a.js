(function(e){function t(t){for(var r,i,c=t[0],u=t[1],a=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3b30":function(e,t,n){"use strict";var r=n("e1c0"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row mt-2"},[n("div",{staticClass:"col"},[n("h1",{staticClass:"h4"},[e._v("Ebced Hesapla")]),n("div",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"form-control text-input",attrs:{dir:"rtl",rows:"2",placeholder:"Ebced hesabı yapılacak arapça metin"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),n("div",{staticClass:"ebced-presenter"},e._l(e.groups,(function(e,t){return n("EbcedGroup",{key:t,attrs:{group:e}})})),1)]),n("nav",{staticClass:"navbar fixed-bottom navbar-dark bg-success"},[n("span",{staticClass:"ml-auto navbar-brand"},[e._v("Yekûn: "+e._s(e.total))])])])},s=[],i=(n("4160"),n("13d5"),n("a434"),n("ac1f"),n("1276"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"char-group",class:{sedde:e.isSedde,space:e.isSpace,tenvin:e.isTenvin,muted:e.isMuted},attrs:{tabindex:"0"},on:{click:e.changeValue}},[n("div",{staticClass:"chars"},[e._v(e._s(e.group.chars.join("")))]),n("div",{staticClass:"value"},[e._v(e._s(e.presentValue))])])}),c=[],u=(n("99af"),n("a623"),n("45fc"),"ّ"),a=" ",l=50,d="ً",p="ٍ",h=function(e){return e===d||e===p},f={"ا":1,"ﺍ":1,"ﺎ":1,"ب":2,"ﺏ":2,"ﺐ":2,"ﺒ":2,"ﺑ":2,"ت":400,"ﺕ":400,"ﺖ":400,"ﺘ":400,"ﺗ":400,"ث":500,"ﺙ":500,"ﺚ":500,"ﺜ":500,"ﺛ":500,"ج":3,"ﺝ":3,"ﺞ":3,"ﺠ":3,"ﺟ":3,"ح":8,"ﺡ":8,"ﺢ":8,"ﺤ":8,"ﺣ":8,"خ":600,"ﺥ":600,"ﺦ":600,"ﺨ":600,"ﺧ":600,"د":4,"ﺩ":4,"ﺪ":4,"ذ":700,"ﺫ":700,"ﺬ":700,"ر":200,"ﺭ":200,"ﺮ":200,"ز":7,"ﺯ":7,"ﺰ":7,"س":60,"ﺱ":60,"ﺲ":60,"ﺴ":60,"ﺳ":60,"ش":300,"ﺵ":300,"ﺶ":300,"ﺸ":300,"ﺷ":300,"ص":90,"ﺹ":90,"ﺺ":90,"ﺼ":90,"ﺻ":90,"ض":800,"ﺽ":800,"ﺾ":800,"ﻀ":800,"ﺿ":800,"ط":9,"ﻁ":9,"ﻂ":9,"ﻄ":9,"ﻃ":9,"ظ":900,"ﻅ":900,"ﻆ":900,"ﻈ":900,"ﻇ":900,"ع":70,"ﻉ":70,"ﻊ":70,"ﻌ":70,"ﻋ":70,"غ":1e3,"ﻍ":1e3,"ﻎ":1e3,"ﻐ":1e3,"ﻏ":1e3,"ف":80,"ﻑ":80,"ﻒ":80,"ﻔ":80,"ﻓ":80,"ق":100,"ﻕ":100,"ﻖ":100,"ﻘ":100,"ﻗ":100,"ك":20,"ﻙ":20,"ﻚ":20,"ﻜ":20,"ﻛ":20,"ل":30,"ﻝ":30,"ﻞ":30,"ﻠ":30,"ﻟ":30,"م":40,"ﻡ":40,"ﻢ":40,"ﻤ":40,"ﻣ":40,"ن":50,"ﻥ":50,"ﻦ":50,"ﻨ":50,"ﻧ":50,"ه":5,"ﻩ":5,"ﻪ":5,"ﻬ":5,"ﻫ":5,"و":6,"ﻭ":6,"ﻮ":6,"ي":10,"ﻱ":10,"ﻲ":10,"ﻴ":10,"ﻳ":10,"ى":10,"ﻯ":10,"ﻰ":10,"ة":400,"ﺓ":400,"ﺔ":400},v={props:{group:Object},data:function(){return{countSedde:!0,countTenvin:!0,countMuted:!0}},mounted:function(){this.calculate()},updated:function(){this.calculate()},computed:{isMuted:function(){return this.group.chars.every((function(e){return e in f}))},isTenvin:function(){return this.group.chars.some((function(e){return h(e)}))},isSedde:function(){return this.group.chars.some((function(e){return e===u}))},isSpace:function(){return this.group.chars[0]===a},baseValue:function(){return f[this.group.chars[0]]},presentValue:function(){return this.isSedde?"".concat(this.countSedde?"2X":"1X").concat(this.baseValue):this.isTenvin?"".concat(this.baseValue,"+").concat(this.countTenvin?l:0):this.isMuted?"".concat(this.countMuted?this.baseValue:0):""+this.group.value}},methods:{changeValue:function(){this.isSedde&&(this.countSedde=!this.countSedde),this.isTenvin&&(this.countTenvin=!this.countTenvin),this.isMuted&&(this.countMuted=!this.countMuted),this.calculate()},calculate:function(){var e=0;this.group.chars[0]in f&&(e=f[this.group.chars[0]]),this.isSedde&&this.countSedde&&(e*=2),this.isTenvin&&(e+=this.countTenvin?l:0),this.isMuted&&(e=this.countMuted?f[this.group.chars[0]]:0),this.group.value=e}}},g=v,b=(n("7908"),n("2877")),m=Object(b["a"])(g,i,c,!1,null,"55efe993",null),w=m.exports,y={name:"App",components:{EbcedGroup:w},data:function(){return{text:"",groups:[],total:0}},watch:{groups:{deep:!0,handler:function(){console.log("DEGISTI"),this.total=this.groups.reduce((function(e,t){return e+t.value}),0)}},text:function(){this.calculate()}},methods:{calculate:function(){var e=null;this.groups.splice(0,this.groups.length);var t=[];this.text.split("").forEach((function(n){if(n in f||n===a){var r={chars:[n],value:0};e=r,t.push(r)}else e.chars.push(n)})),this.groups=t},reset:function(){this.text="",this.groups=[]}}},x=y,S=(n("3b30"),Object(b["a"])(x,o,s,!1,null,"7387bd4a",null)),_=S.exports,j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")},"77e4":function(e,t,n){},7908:function(e,t,n){"use strict";var r=n("77e4"),o=n.n(r);o.a},e1c0:function(e,t,n){}});
//# sourceMappingURL=app.b7fccb3a.js.map