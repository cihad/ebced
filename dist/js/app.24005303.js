(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col"},[n("section",[n("h1",{staticClass:"h5 pb-2"},[t._v("EBCED HESAP MAKİNESİ")]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"position-relative"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control the-input",attrs:{dir:"rtl",rows:"2"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t.text.length?t._e():n("div",{staticClass:"help-text text-muted position-absolute w-100 text-right p-4"},[t._v(" Lütfen Arapca metni giriniz. ")])]),n("small",{staticClass:"form-text text-muted"},[t._v(" Hesaplamak istediğiniz Arapca metini üstteki kutucuğa giriniz. Giriş yaptıkça otomatik hesaplayacaktır. ("),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showExample()}}},[t._v("Misal")]),t._v(") ")])])]),n("section",{staticClass:"mb-5"},[n("div",{staticClass:"pb-2 border-bottom d-flex mb-3"},[n("h2",{staticClass:"h5 pb-0 mb-0"},[t._v("Hesap Tablosu ("),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showInfo()}}},[t._v("?")]),t._v(")")]),n("span",{staticClass:"ml-auto text-muted"},[t._v("Manuel Hesaplama")])]),t.groups.length?t._e():n("div",{staticClass:"alert alert-warning"},[t._v(" Hesaplanacak metini henüz girmediniz. ")]),n("div",{staticClass:"ebced-presenter"},t._l(t.groups,(function(t,e){return n("EbcedGroup",{key:e,attrs:{group:t}})})),1),n("div",{staticClass:"d-flex mt-2 pt-2 border-top"},[n("span",{staticClass:"ml-auto"},[t._v("Toplam: "+t._s(t.total))])])]),n("section",{staticClass:"mb-5"},[n("h2",{staticClass:"h5 pb-2 border-bottom"},[t._v("Özet Tablo")]),n("table",{staticClass:"table table-bordered"},[n("tbody",[n("tr",[n("td",[t._v("Manuel hesaplama")]),n("td",[t._v(t._s(t.total))])]),n("tr",[n("td",[t._v("Hepsi sayılırsa (Harfler+Harekesiz harfler+Sedde+Tenvin)")]),n("td",[t._v(t._s(t.totalEverything))])]),n("tr",[n("td",[t._v("Tenvinler sayılmazsa (Harfler+Harekesiz harfler+Sedde)")]),n("td",[t._v(t._s(t.totalTenvinNotCounted))])]),n("tr",[n("td",[t._v("Seddeler sayılmazsa (Harfler+Harekesiz harfler)")]),n("td",[t._v(t._s(t.totalSeddeNotCounted))])]),n("tr",[n("td",[t._v("Harekesiz harfler sayılmazsa (Sadece Harfler)")]),n("td",[t._v(t._s(t.totalMutedNotCounted))])])])])])]),n("nav",{staticClass:"navbar fixed-bottom navbar-dark bg-success"},[n("span",{staticClass:"ml-auto navbar-brand"},[t._v("Yekûn: "+t._s(t.total))])])])},i=[],o=(n("4160"),n("13d5"),n("a434"),n("ac1f"),n("1276"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"char-group",class:{sedde:t.isSedde,space:t.isSpace,tenvin:t.isTenvin,muted:t.isMuted},attrs:{tabindex:"0"},on:{click:t.changeValue}},[n("div",{staticClass:"chars"},[t._v(t._s(t.group.chars.join("")))]),n("div",{staticClass:"value"},[t._v(t._s(t.presentValue))])])}),s=[],u=(n("99af"),n("a623"),n("45fc"),"ّ"),c=" ",l=50,d="ً",h="ٍ",f=function(t){return t===d||t===h},p={"ا":1,"ﺍ":1,"ﺎ":1,"ب":2,"ﺏ":2,"ﺐ":2,"ﺒ":2,"ﺑ":2,"ت":400,"ﺕ":400,"ﺖ":400,"ﺘ":400,"ﺗ":400,"ث":500,"ﺙ":500,"ﺚ":500,"ﺜ":500,"ﺛ":500,"ج":3,"ﺝ":3,"ﺞ":3,"ﺠ":3,"ﺟ":3,"ح":8,"ﺡ":8,"ﺢ":8,"ﺤ":8,"ﺣ":8,"خ":600,"ﺥ":600,"ﺦ":600,"ﺨ":600,"ﺧ":600,"د":4,"ﺩ":4,"ﺪ":4,"ذ":700,"ﺫ":700,"ﺬ":700,"ر":200,"ﺭ":200,"ﺮ":200,"ز":7,"ﺯ":7,"ﺰ":7,"س":60,"ﺱ":60,"ﺲ":60,"ﺴ":60,"ﺳ":60,"ش":300,"ﺵ":300,"ﺶ":300,"ﺸ":300,"ﺷ":300,"ص":90,"ﺹ":90,"ﺺ":90,"ﺼ":90,"ﺻ":90,"ض":800,"ﺽ":800,"ﺾ":800,"ﻀ":800,"ﺿ":800,"ط":9,"ﻁ":9,"ﻂ":9,"ﻄ":9,"ﻃ":9,"ظ":900,"ﻅ":900,"ﻆ":900,"ﻈ":900,"ﻇ":900,"ع":70,"ﻉ":70,"ﻊ":70,"ﻌ":70,"ﻋ":70,"غ":1e3,"ﻍ":1e3,"ﻎ":1e3,"ﻐ":1e3,"ﻏ":1e3,"ف":80,"ﻑ":80,"ﻒ":80,"ﻔ":80,"ﻓ":80,"ق":100,"ﻕ":100,"ﻖ":100,"ﻘ":100,"ﻗ":100,"ك":20,"ﻙ":20,"ﻚ":20,"ﻜ":20,"ﻛ":20,"ل":30,"ﻝ":30,"ﻞ":30,"ﻠ":30,"ﻟ":30,"م":40,"ﻡ":40,"ﻢ":40,"ﻤ":40,"ﻣ":40,"ن":50,"ﻥ":50,"ﻦ":50,"ﻨ":50,"ﻧ":50,"ه":5,"ﻩ":5,"ﻪ":5,"ﻬ":5,"ﻫ":5,"و":6,"ﻭ":6,"ﻮ":6,"ي":10,"ﻱ":10,"ﻲ":10,"ﻴ":10,"ﻳ":10,"ى":10,"ﻯ":10,"ﻰ":10,"ة":400,"ﺓ":400,"ﺔ":400},v={props:{group:Object},data:function(){return{countSedde:!0,countTenvin:!0,countMuted:!0}},mounted:function(){this.calculate()},updated:function(){this.calculate()},computed:{isMuted:function(){return this.group.chars.every((function(t){return t in p}))},isTenvin:function(){return this.group.chars.some((function(t){return f(t)}))},isSedde:function(){return this.group.chars.some((function(t){return t===u}))},isSpace:function(){return this.group.chars[0]===c},baseValue:function(){return p[this.group.chars[0]]},presentValue:function(){return this.isSedde?"".concat(this.countSedde?"2X":"1X").concat(this.baseValue):this.isTenvin?"".concat(this.baseValue,"+").concat(this.countTenvin?l:0):this.isMuted?"".concat(this.countMuted?this.baseValue:0):""+this.group.value}},methods:{changeValue:function(){this.isSedde&&(this.countSedde=!this.countSedde),this.isTenvin&&(this.countTenvin=!this.countTenvin),this.isMuted&&(this.countMuted=!this.countMuted),this.calculate()},calculate:function(){var t=0;this.group.chars[0]in p&&(t=p[this.group.chars[0]]),this.isSedde&&this.countSedde&&(t*=2),this.isTenvin&&(t+=this.countTenvin?l:0),this.isMuted&&(t=this.countMuted?p[this.group.chars[0]]:0),this.group.value=t}}},b=v,g=(n("7908"),n("2877")),m=Object(g["a"])(b,o,s,!1,null,"55efe993",null),_=m.exports,y=function(t){return t.every((function(t){return t in p}))},C=function(t){return t.some((function(t){return t===u}))},k=function(t){return t.some((function(t){return f(t)}))},x=function(t){var e=0;return t.chars[0]===c||y(t.chars)||(e+=p[t.chars[0]]),e},w=function(t){var e=0;return e+=x(t),y(t.chars)&&(e+=p[t.chars[0]]),e},S=function(t){var e=0;return e+=w(t),C(t.chars)&&(e*=2),e},T=function(t){var e=0;return e+=S(t),k(t.chars)&&(e+=l),e},M=T,z={name:"App",components:{EbcedGroup:_},data:function(){return{text:"",groups:[],total:0,totalEverything:0,totalTenvinNotCounted:0,totalSeddeNotCounted:0,totalMutedNotCounted:0}},watch:{groups:{deep:!0,handler:function(){console.log("DEGISTI"),this.total=this.groups.reduce((function(t,e){return t+e.value}),0)}},text:function(){this.calculate()}},methods:{calculate:function(){var t=null;this.groups.splice(0,this.groups.length);var e=[];this.text.split("").forEach((function(n){if(n in p||n===c){var r={chars:[n],value:0};t=r,e.push(r)}else t.chars.push(n)})),this.totalEverything=e.reduce((function(t,e){return t+M(e)}),0),this.totalTenvinNotCounted=e.reduce((function(t,e){return t+S(e)}),0),this.totalSeddeNotCounted=e.reduce((function(t,e){return t+w(e)}),0),this.totalMutedNotCounted=e.reduce((function(t,e){return t+x(e)}),0),this.groups=e},reset:function(){this.text="",this.groups=[]},showExample:function(){this.text="بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ"},showInfo:function(){alert("Aşağıdaki tabloda;\n\n● tenvinli harfler 📕 kırmızı,\n● şeddeli harfler 📘 mavi,\n● harekesiz harfler 📗 yeşil\n\nolarak gösterilmiştir. Bu renkli kutuların üzerine tıklayarak\nhesaba dahil et/etme olarak ayarlayabilirsiniz.")}}},E=z,j=(n("5b54"),Object(g["a"])(E,a,i,!1,null,"4a5787ff",null)),O=j.exports,H=n("9483");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"5b54":function(t,e,n){"use strict";var r=n("9b0a"),a=n.n(r);a.a},"77e4":function(t,e,n){},7908:function(t,e,n){"use strict";var r=n("77e4"),a=n.n(r);a.a},"9b0a":function(t,e,n){}});
//# sourceMappingURL=app.24005303.js.map