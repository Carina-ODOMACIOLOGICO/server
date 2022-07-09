(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5427a45e"],{"06e4":function(e,t,n){"use strict";var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function a(e){return"string"===typeof e&&r.test(e)}t["a"]=a},"0fd9":function(e,t,n){"use strict";n("13d5"),n("caad"),n("4b85");var r=n("2b0e"),a=n("d9f7"),s=n("80d2");const o=["sm","md","lg","xl"],i=["start","end","center"];function l(e,t){return o.reduce((n,r)=>(n[e+Object(s["F"])(r)]=t(),n),{})}const c=e=>[...i,"baseline","stretch"].includes(e),d=l("align",()=>({type:String,default:null,validator:c})),u=e=>[...i,"space-between","space-around"].includes(e),f=l("justify",()=>({type:String,default:null,validator:u})),p=e=>[...i,"space-between","space-around","stretch"].includes(e),h=l("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(h)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(e,t,n){let r=v[e];if(null!=n){if(t){const n=t.replace(e,"");r+="-"+n}return r+="-"+n,r.toLowerCase()}}const b=new Map;t["a"]=r["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:p},...h},render(e,{props:t,data:n,children:r}){let s="";for(const a in t)s+=String(t[a]);let o=b.get(s);if(!o){let e;for(e in o=[],g)g[e].forEach(n=>{const r=t[n],a=m(e,n,r);a&&o.push(a)});o.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),b.set(s,o)}return e(t.tag,Object(a["a"])(n,{staticClass:"row",class:o}),r)}})},1071:function(e,t,n){"use strict";n.r(t);var r,a,s=n("8336"),o=n("a609"),i=n("b0af"),l=n("99d9"),c=n("62ad"),d=n("a523"),u=n("0e8f"),f=n("4bd4"),p=n("132d"),h=n("a722"),g=n("da13"),v=n("5d23"),m=n("0fd9"),b=n("b974"),y=n("8654"),k=function(){var e=this,t=e._self._c;return t(d["a"],{attrs:{fluid:"","grid-list-md":""}},[t(h["a"],{attrs:{row:"",wrap:""}},[t(u["a"],{attrs:{xs12:"",sm12:""}},[t(i["a"],{staticClass:"mx-auto",attrs:{elevation:"0"}},[t(d["a"],[t(o["a"],{attrs:{borderless:""},model:{value:e.card,callback:function(t){e.card=t},expression:"card"}},[t(s["a"],{attrs:{value:"links"}},[t("span",{staticClass:"hidden-sm-and-down"},[e._v("Enlaces")]),t(p["a"],{attrs:{dense:"",right:""}},[e._v(" mdi-link ")])],1),t(s["a"],{attrs:{value:"new"}},[t("span",{staticClass:"hidden-sm-and-down"},[e._v("Nuevo enlace")]),t(p["a"],{attrs:{dense:"",right:""}},[e._v(" mdi-link-plus ")])],1)],1)],1)],1)],1)],1),t(h["a"],{attrs:{row:"",wrap:""}},[t(u["a"],{attrs:{xs12:"",sm12:""}},[t(i["a"],{attrs:{elevation:"2"}},[t(l["c"],[t(m["a"],["links"==e.card?t(c["a"],{attrs:{cols:"12",md:"12"}},[t(l["d"],[e._v("Listado de links")]),t(l["c"],[e._v(" Lins para carga de datos, permiten alimentar los dataset dependiendo de los campos seleccionados")]),e._l(e.links,(function(n){return t(g["a"],{key:n._id,attrs:{"tree-line":""}},[t(v["a"],[t(v["c"],[e._v(e._s(n.nombre))]),t(v["b"],[t("router-link",{attrs:{to:""+n.url}},[e._v("URL: "+e._s(e.URLServer)+e._s(n.url))])],1),t(v["b"],[e._v(" [Rango: "+e._s(n.rango)+" - Orden: "+e._s(n.orden)+" ] ")])],1)],1)}))],2):e._e(),"new"==e.card?t(c["a"],{attrs:{cols:"12",md:"12"}},[t(l["d"],[e._v("Crear nuevo link")]),t(l["c"],[e._v("Cree un nuevo link para carga de datos. Configure cuantos registros se cargaran y en que modo se presentaran a los usuarios(random, ascendente, descendente, etc.) ")]),t(f["a"],{ref:"form",attrs:{"lazy-validation":""}},[t(y["a"],{attrs:{label:"Nombre",required:"",dense:"",outlined:"",messages:"Escriba un nombre relacionado con el público que lo accederá"},model:{value:e.link.nombre,callback:function(t){e.$set(e.link,"nombre",t)},expression:"link.nombre"}}),t(y["a"],{attrs:{label:"Descripción de la actividad",required:"",dense:"",outlined:""},model:{value:e.link.descripcion,callback:function(t){e.$set(e.link,"descripcion",t)},expression:"link.descripcion"}}),t(y["a"],{attrs:{label:"Enlace",readonly:"",required:"",dense:"",outlined:""},model:{value:e.link.url,callback:function(t){e.$set(e.link,"url",t)},expression:"link.url"}}),t(y["a"],{attrs:{label:"Rango",required:"",dense:"",outlined:"",messages:"Escriba la cantidad de elementos que desea alimentar, -1"},model:{value:e.link.rango,callback:function(t){e.$set(e.link,"rango",t)},expression:"link.rango"}}),t(b["a"],{attrs:{items:["random","ascendente","descendente"],label:"Orden de presentación",required:"",dense:"",outlined:""},model:{value:e.link.orden,callback:function(t){e.$set(e.link,"orden",t)},expression:"link.orden"}}),t(s["a"],{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.saveLink}},[e._v(" Guardar ")])],1)],1):e._e()],1)],1)],1)],1)],1)],1)},w=[],_=n("bc3a"),C=n.n(_),j=n("d8f8"),O=n("58cf"),S=0,B=0;function $(e,t,n){var s=t&&n||0,o=t||new Array(16);e=e||{};var i=e.node||r,l=void 0!==e.clockseq?e.clockseq:a;if(null==i||null==l){var c=e.random||(e.rng||j["a"])();null==i&&(i=r=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==l&&(l=a=16383&(c[6]<<8|c[7]))}var d=void 0!==e.msecs?e.msecs:Date.now(),u=void 0!==e.nsecs?e.nsecs:B+1,f=d-S+(u-B)/1e4;if(f<0&&void 0===e.clockseq&&(l=l+1&16383),(f<0||d>S)&&void 0===e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");S=d,B=u,a=l,d+=122192928e5;var p=(1e4*(268435455&d)+u)%4294967296;o[s++]=p>>>24&255,o[s++]=p>>>16&255,o[s++]=p>>>8&255,o[s++]=255&p;var h=d/4294967296*1e4&268435455;o[s++]=h>>>8&255,o[s++]=255&h,o[s++]=h>>>24&15|16,o[s++]=h>>>16&255,o[s++]=l>>>8|128,o[s++]=255&l;for(var g=0;g<6;++g)o[s+g]=i[g];return t||Object(O["a"])(o)}var U=$,x=n("06e4");function A(e){if(!Object(x["a"])(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n}var E=A;function I(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}var R="6ba7b810-9dad-11d1-80b4-00c04fd430c8",L="6ba7b811-9dad-11d1-80b4-00c04fd430c8",D=function(e,t,n){function r(e,r,a,s){if("string"===typeof e&&(e=I(e)),"string"===typeof r&&(r=E(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var o=new Uint8Array(16+e.length);if(o.set(r),o.set(e,r.length),o=n(o),o[6]=15&o[6]|t,o[8]=63&o[8]|128,a){s=s||0;for(var i=0;i<16;++i)a[s+i]=o[i];return a}return Object(O["a"])(o)}try{r.name=e}catch(a){}return r.DNS=R,r.URL=L,r};function V(e){if("string"===typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return q(M(T(e),8*e.length))}function q(e){for(var t=[],n=32*e.length,r="0123456789abcdef",a=0;a<n;a+=8){var s=e[a>>5]>>>a%32&255,o=parseInt(r.charAt(s>>>4&15)+r.charAt(15&s),16);t.push(o)}return t}function N(e){return 14+(e+64>>>9<<4)+1}function M(e,t){e[t>>5]|=128<<t%32,e[N(t)-1]=t;for(var n=1732584193,r=-271733879,a=-1732584194,s=271733878,o=0;o<e.length;o+=16){var i=n,l=r,c=a,d=s;n=J(n,r,a,s,e[o],7,-680876936),s=J(s,n,r,a,e[o+1],12,-389564586),a=J(a,s,n,r,e[o+2],17,606105819),r=J(r,a,s,n,e[o+3],22,-1044525330),n=J(n,r,a,s,e[o+4],7,-176418897),s=J(s,n,r,a,e[o+5],12,1200080426),a=J(a,s,n,r,e[o+6],17,-1473231341),r=J(r,a,s,n,e[o+7],22,-45705983),n=J(n,r,a,s,e[o+8],7,1770035416),s=J(s,n,r,a,e[o+9],12,-1958414417),a=J(a,s,n,r,e[o+10],17,-42063),r=J(r,a,s,n,e[o+11],22,-1990404162),n=J(n,r,a,s,e[o+12],7,1804603682),s=J(s,n,r,a,e[o+13],12,-40341101),a=J(a,s,n,r,e[o+14],17,-1502002290),r=J(r,a,s,n,e[o+15],22,1236535329),n=P(n,r,a,s,e[o+1],5,-165796510),s=P(s,n,r,a,e[o+6],9,-1069501632),a=P(a,s,n,r,e[o+11],14,643717713),r=P(r,a,s,n,e[o],20,-373897302),n=P(n,r,a,s,e[o+5],5,-701558691),s=P(s,n,r,a,e[o+10],9,38016083),a=P(a,s,n,r,e[o+15],14,-660478335),r=P(r,a,s,n,e[o+4],20,-405537848),n=P(n,r,a,s,e[o+9],5,568446438),s=P(s,n,r,a,e[o+14],9,-1019803690),a=P(a,s,n,r,e[o+3],14,-187363961),r=P(r,a,s,n,e[o+8],20,1163531501),n=P(n,r,a,s,e[o+13],5,-1444681467),s=P(s,n,r,a,e[o+2],9,-51403784),a=P(a,s,n,r,e[o+7],14,1735328473),r=P(r,a,s,n,e[o+12],20,-1926607734),n=W(n,r,a,s,e[o+5],4,-378558),s=W(s,n,r,a,e[o+8],11,-2022574463),a=W(a,s,n,r,e[o+11],16,1839030562),r=W(r,a,s,n,e[o+14],23,-35309556),n=W(n,r,a,s,e[o+1],4,-1530992060),s=W(s,n,r,a,e[o+4],11,1272893353),a=W(a,s,n,r,e[o+7],16,-155497632),r=W(r,a,s,n,e[o+10],23,-1094730640),n=W(n,r,a,s,e[o+13],4,681279174),s=W(s,n,r,a,e[o],11,-358537222),a=W(a,s,n,r,e[o+3],16,-722521979),r=W(r,a,s,n,e[o+6],23,76029189),n=W(n,r,a,s,e[o+9],4,-640364487),s=W(s,n,r,a,e[o+12],11,-421815835),a=W(a,s,n,r,e[o+15],16,530742520),r=W(r,a,s,n,e[o+2],23,-995338651),n=H(n,r,a,s,e[o],6,-198630844),s=H(s,n,r,a,e[o+7],10,1126891415),a=H(a,s,n,r,e[o+14],15,-1416354905),r=H(r,a,s,n,e[o+5],21,-57434055),n=H(n,r,a,s,e[o+12],6,1700485571),s=H(s,n,r,a,e[o+3],10,-1894986606),a=H(a,s,n,r,e[o+10],15,-1051523),r=H(r,a,s,n,e[o+1],21,-2054922799),n=H(n,r,a,s,e[o+8],6,1873313359),s=H(s,n,r,a,e[o+15],10,-30611744),a=H(a,s,n,r,e[o+6],15,-1560198380),r=H(r,a,s,n,e[o+13],21,1309151649),n=H(n,r,a,s,e[o+4],6,-145523070),s=H(s,n,r,a,e[o+11],10,-1120210379),a=H(a,s,n,r,e[o+2],15,718787259),r=H(r,a,s,n,e[o+9],21,-343485551),n=z(n,i),r=z(r,l),a=z(a,c),s=z(s,d)}return[n,r,a,s]}function T(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(N(t)),r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}function z(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function F(e,t){return e<<t|e>>>32-t}function G(e,t,n,r,a,s){return z(F(z(z(t,e),z(r,s)),a),n)}function J(e,t,n,r,a,s,o){return G(t&n|~t&r,e,t,a,s,o)}function P(e,t,n,r,a,s,o){return G(t&r|n&~r,e,t,a,s,o)}function W(e,t,n,r,a,s,o){return G(t^n^r,e,t,a,s,o)}function H(e,t,n,r,a,s,o){return G(n^(t|~r),e,t,a,s,o)}var K=V,Q=D("v3",48,K),X=Q,Y=n("ec26");function Z(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function ee(e,t){return e<<t|e>>>32-t}function te(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"===typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var a=0;a<r.length;++a)e.push(r.charCodeAt(a))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var s=e.length/4+2,o=Math.ceil(s/16),i=new Array(o),l=0;l<o;++l){for(var c=new Uint32Array(16),d=0;d<16;++d)c[d]=e[64*l+4*d]<<24|e[64*l+4*d+1]<<16|e[64*l+4*d+2]<<8|e[64*l+4*d+3];i[l]=c}i[o-1][14]=8*(e.length-1)/Math.pow(2,32),i[o-1][14]=Math.floor(i[o-1][14]),i[o-1][15]=8*(e.length-1)&4294967295;for(var u=0;u<o;++u){for(var f=new Uint32Array(80),p=0;p<16;++p)f[p]=i[u][p];for(var h=16;h<80;++h)f[h]=ee(f[h-3]^f[h-8]^f[h-14]^f[h-16],1);for(var g=n[0],v=n[1],m=n[2],b=n[3],y=n[4],k=0;k<80;++k){var w=Math.floor(k/20),_=ee(g,5)+Z(w,v,m,b)+y+t[w]+f[k]>>>0;y=b,b=m,m=ee(v,30)>>>0,v=g,g=_}n[0]=n[0]+g>>>0,n[1]=n[1]+v>>>0,n[2]=n[2]+m>>>0,n[3]=n[3]+b>>>0,n[4]=n[4]+y>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}var ne=te,re=D("v5",80,ne),ae=re,se={v1:U,v3:X,v4:Y["a"],v5:ae};var oe={name:"Config",props:["id_document","schema"],data:()=>({link:{url:"/fill_data/"+se.v4(),nombre:"",rango:"100",orden:"random",descripcion:""},corpus:{iteraciones:[]},card:"links",links:[]}),components:{},methods:{getDocumentById(){C.a.get(`${this.URLServer}/getCorpusOfDocument/${this.id_document}/${this.schema}`).then(e=>{this.corpus=e.data.corpus,this.link.url=`/filldata/${this.id_document}/${se.v4()}`,this.links=this.corpus.links}).catch(e=>{console.log(e)})},saveLink(){C.a.post(`${this.URLServer}/setLinksOfDocument/${this.id_document}`,{link:this.link}).then(e=>{this.getDocumentById(),this.card="links"})}},computed:{URLServer(){return this.$store.state.URLServer}},mounted(){this.getDocumentById()}},ie=oe,le=n("0c7c"),ce=Object(le["a"])(ie,k,w,!1,null,null,null);t["default"]=ce.exports},3860:function(e,t,n){"use strict";var r=n("604c");t["a"]=r["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return r["a"].options.computed.classes.call(this)}},methods:{genData:r["a"].options.methods.genData}})},"4bd4":function(e,t,n){"use strict";n("caad");var r=n("58df"),a=n("7e2b"),s=n("3206");t["a"]=Object(r["a"])(a["a"],Object(s["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),n={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=e.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(e._uid)||(n.valid=t(e)))}):n.valid=t(e),n},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const n=this.watchers.find(e=>e._uid===t._uid);n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"58cf":function(e,t,n){"use strict";for(var r=n("06e4"),a=[],s=0;s<256;++s)a.push((s+256).toString(16).substr(1));function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!Object(r["a"])(n))throw TypeError("Stringified UUID is invalid");return n}t["a"]=o},"62ad":function(e,t,n){"use strict";n("13d5"),n("caad"),n("4b85");var r=n("2b0e"),a=n("d9f7"),s=n("80d2");const o=["sm","md","lg","xl"],i=(()=>o.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),l=(()=>o.reduce((e,t)=>(e["offset"+Object(s["F"])(t)]={type:[String,Number],default:null},e),{}))(),c=(()=>o.reduce((e,t)=>(e["order"+Object(s["F"])(t)]={type:[String,Number],default:null},e),{}))(),d={col:Object.keys(i),offset:Object.keys(l),order:Object.keys(c)};function u(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+="-"+n}return"col"!==e||""!==n&&!0!==n?(r+="-"+n,r.toLowerCase()):r.toLowerCase()}}const f=new Map;t["a"]=r["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:r,parent:s}){let o="";for(const a in t)o+=String(t[a]);let i=f.get(o);if(!i){let e;for(e in i=[],d)d[e].forEach(n=>{const r=t[n],a=u(e,n,r);a&&i.push(a)});const n=i.some(e=>e.startsWith("col-"));i.push({col:!n||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),f.set(o,i)}return e(t.tag,Object(a["a"])(n,{class:i}),r)}})},"7e58":function(e,t,n){},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l}));var r=n("b0af"),a=n("80d2");const s=Object(a["i"])("v-card__actions"),o=Object(a["i"])("v-card__subtitle"),i=Object(a["i"])("v-card__text"),l=Object(a["i"])("v-card__title");r["a"]},a609:function(e,t,n){"use strict";n("7e58");var r=n("3860"),a=n("a9ad"),s=n("58df");t["a"]=Object(s["a"])(r["a"],a["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...r["a"].options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const e=this.setTextColor(this.color,{...r["a"].options.methods.genData.call(this)});return this.group?e:this.setBackgroundColor(this.backgroundColor,e)}}})},d8f8:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return s}));var a=new Uint8Array(16);function s(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}},ec26:function(e,t,n){"use strict";var r=n("d8f8"),a=n("58cf");function s(e,t,n){e=e||{};var s=e.random||(e.rng||r["a"])();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=s[o];return t}return Object(a["a"])(s)}t["a"]=s}}]);
//# sourceMappingURL=chunk-5427a45e.4f1128da.js.map