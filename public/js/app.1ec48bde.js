(function(e){function n(n){for(var t,c,u=n[0],d=n[1],i=n[2],h=0,l=[];h<u.length;h++)c=u[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);s&&s(n);while(l.length)l.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,n=0;n<o.length;n++){for(var a=o[n],t=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(t=!1)}t&&(o.splice(n--,1),e=d(d.s=a[0]))}return e}var t={},c={app:0},r={app:0},o=[];function u(e){return d.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d2796b13","chunk-19fb2aac":"ba90160e","chunk-0d104a72":"46483fb7","chunk-579e1ea3":"eb728a29","chunk-1bf44a66":"e3731128","chunk-5427a45e":"4f1128da","chunk-7b24e422":"40fc1a39","chunk-dea58d3c":"5e199199","chunk-f65fd0f8":"962bf9e4","chunk-7b93724e":"3886f40a","chunk-7c9dd132":"3f4ed16a","chunk-59d74ba0":"eed26a39","chunk-36263758":"6c6d90f9","chunk-2d0b9823":"5a63f9fc","chunk-00bed564":"c2c9f757","chunk-2d0cb760":"32356cda"}[e]+".js"}function d(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var n=[],a={"chunk-19fb2aac":1,"chunk-579e1ea3":1,"chunk-1bf44a66":1,"chunk-5427a45e":1,"chunk-7b24e422":1,"chunk-dea58d3c":1,"chunk-f65fd0f8":1,"chunk-7b93724e":1,"chunk-7c9dd132":1,"chunk-00bed564":1};c[e]?n.push(c[e]):0!==c[e]&&a[e]&&n.push(c[e]=new Promise((function(n,a){for(var t="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-19fb2aac":"a168d65e","chunk-0d104a72":"31d6cfe0","chunk-579e1ea3":"76be7905","chunk-1bf44a66":"5dd1c551","chunk-5427a45e":"8e3e5459","chunk-7b24e422":"61ed1550","chunk-dea58d3c":"41cf962f","chunk-f65fd0f8":"dd7748ec","chunk-7b93724e":"e76310af","chunk-7c9dd132":"6d0b8e10","chunk-59d74ba0":"31d6cfe0","chunk-36263758":"31d6cfe0","chunk-2d0b9823":"31d6cfe0","chunk-00bed564":"6cd500e0","chunk-2d0cb760":"31d6cfe0"}[e]+".css",r=d.p+t,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===t||h===r))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],h=i.getAttribute("data-href");if(h===t||h===r)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var t=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete c[e],s.parentNode.removeChild(s),a(o)},s.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(s)})).then((function(){c[e]=0})));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=o);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=u(e);var l=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(s);var a=r[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+t+": "+c+")",l.name="ChunkLoadError",l.type=t,l.request=c,a[1](l)}r[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},d.m=e,d.c=t,d.d=function(e,n,a){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)d.d(a,t,function(n){return e[n]}.bind(null,t));return a},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var s=h;o.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},4360:function(e,n,a){"use strict";var t=a("2b0e"),c=a("2f62");t["a"].use(c["a"]),n["a"]=new c["a"].Store({state:{URLServer:"http://localhost:5000"},mutations:{},actions:{},getters:{},modules:{}})},"56d7":function(e,n,a){"use strict";a.r(n);var t=a("2b0e"),c=a("7496"),r=a("40dc"),o=a("5bc1"),u=a("8860"),d=a("da13"),i=a("1baa"),h=a("5d23"),l=a("f6c4"),s=a("f774"),f=a("2fa4"),p=a("2a7f"),b=function(){var e=this,n=e._self._c;return n(c["a"],[n(r["a"],{attrs:{app:"",color:"primary",dark:""}},[n(o["a"],{on:{click:function(n){e.drawer=!e.drawer}}}),n(p["b"],[e._v("Diccionario Onomaciológico")]),n(f["a"]),void 0],2),n(l["a"],[n(s["a"],{attrs:{absolute:"",left:"",temporary:""},model:{value:e.drawer,callback:function(n){e.drawer=n},expression:"drawer"}},[n(u["a"],{attrs:{nav:"",dense:""}},[n(i["a"],{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:e.group,callback:function(n){e.group=n},expression:"group"}},[n(d["a"],{attrs:{to:"/",link:""}},[n(h["c"],[e._v(" Inicio ")])],1),n(d["a"],{attrs:{to:"/documents"}},[n(h["c"],[e._v(" Documentos ")])],1)],1)],1)],1),n("router-view")],1)],1)},k=[],m=a("6c23"),v={name:"App",data:()=>({drawer:!1,group:null,conected:!1,server:{name:"",version:""}}),watch:{group(){this.drawer=!1}},created(){m["a"].connect(),m["a"].on("connect",()=>{this.conected=!0}),m["a"].emit("getVersion",{}),m["a"].on("onVersion",e=>{this.server.name=e.name,this.server.version=e.version,e&&(this.conected=!0)}),m["a"].on("disconnect",e=>{this.conected=!1})}},g=v,y=a("0c7c"),w=Object(y["a"])(g,b,k,!1,null,null,null),_=w.exports,P=a("8c4f");t["a"].use(P["a"]);const O=[{path:"/",name:"Home",component:()=>Promise.all([a.e("chunk-19fb2aac"),a.e("chunk-0d104a72"),a.e("chunk-59d74ba0")]).then(a.bind(null,"bb51"))},{path:"/upload_file/:type/:id_document",name:"UploadFile",props:!0,component:()=>Promise.all([a.e("chunk-19fb2aac"),a.e("chunk-0d104a72"),a.e("chunk-579e1ea3"),a.e("chunk-7b93724e")]).then(a.bind(null,"be41"))},{path:"/upload_file/:type/:id_document",name:"UploadCSV",props:!0,component:()=>Promise.all([a.e("chunk-19fb2aac"),a.e("chunk-0d104a72"),a.e("chunk-579e1ea3"),a.e("chunk-7b93724e")]).then(a.bind(null,"be41"))},{path:"/documents",name:"Documents",component:()=>Promise.all([a.e("chunk-19fb2aac"),a.e("chunk-0d104a72"),a.e("chunk-579e1ea3"),a.e("chunk-1bf44a66"),a.e("chunk-7b24e422")]).then(a.bind(null,"fb2d"))},{path:"/config/:id_document/:schema",name:"Config",props:!0,component:()=>Promise.all([a.e("chunk-19fb2aac"),a.e("chunk-0d104a72"),a.e("chunk-579e1ea3"),a.e("chunk-1bf44a66"),a.e("chunk-5427a45e")]).then(a.bind(null,"1071"))},{path:"/filldata/:id_document/:id_link",name:"Filldata",props:!0,component:()=>Promise.all([a.e("chunk-19fb2aac"),a.e("chunk-0d104a72"),a.e("chunk-579e1ea3"),a.e("chunk-7c9dd132")]).then(a.bind(null,"a1af"))},{path:"/auth",name:"Auth",component:()=>Promise.all([a.e("chunk-19fb2aac"),a.e("chunk-579e1ea3"),a.e("chunk-36263758")]).then(a.bind(null,"2fef"))},{path:"/train/:id_document/:schema",name:"Train",props:!0,component:()=>Promise.all([a.e("chunk-19fb2aac"),a.e("chunk-0d104a72"),a.e("chunk-579e1ea3"),a.e("chunk-1bf44a66"),a.e("chunk-dea58d3c")]).then(a.bind(null,"198f"))},{path:"/dataset/:id_document/:schema",name:"Dataset",props:!0,component:()=>Promise.all([a.e("chunk-19fb2aac"),a.e("chunk-0d104a72"),a.e("chunk-579e1ea3"),a.e("chunk-1bf44a66"),a.e("chunk-f65fd0f8")]).then(a.bind(null,"a564"))},{path:"/about",name:"About",component:()=>a.e("about").then(a.bind(null,"f820"))}],j=new P["a"]({mode:"history",base:"/",routes:O});var S=j,x=a("4360"),A=a("f309");t["a"].use(A["a"]);var C=new A["a"]({}),E=a("998c"),T=a.n(E);a("8da8");t["a"].use(T.a),t["a"].config.productionTip=!1,new t["a"]({router:S,store:x["a"],vuetify:C,render:e=>e(_)}).$mount("#app")},"6c23":function(e,n,a){"use strict";var t=a("daa8"),c=a("4360");const r=Object(t["a"])(c["a"].state.URLServer,{autoConnect:!1});r.onAny((e,...n)=>{}),n["a"]=r}});
//# sourceMappingURL=app.1ec48bde.js.map