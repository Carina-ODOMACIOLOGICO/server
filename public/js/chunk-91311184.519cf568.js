(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91311184"],{"0c6a":function(t,e,a){},"0fd9":function(t,e,a){"use strict";a("13d5"),a("14d9"),a("4b85");var i=a("2b0e"),s=a("d9f7"),o=a("80d2");const l=["sm","md","lg","xl"],n=["start","end","center"];function r(t,e){return l.reduce((a,i)=>(a[t+Object(o["E"])(i)]=e(),a),{})}const d=t=>[...n,"baseline","stretch"].includes(t),c=r("align",()=>({type:String,default:null,validator:d})),u=t=>[...n,"space-between","space-around"].includes(t),h=r("justify",()=>({type:String,default:null,validator:u})),p=t=>[...n,"space-between","space-around","stretch"].includes(t),f=r("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(c),justify:Object.keys(h),alignContent:Object.keys(f)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){let i=m[t];if(null!=a){if(e){const a=e.replace(t,"");i+="-"+a}return i+="-"+a,i.toLowerCase()}}const b=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...c,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:a,children:i}){let o="";for(const s in e)o+=String(e[s]);let l=b.get(o);if(!l){let t;for(t in l=[],g)g[t].forEach(a=>{const i=e[a],s=y(t,a,i);s&&l.push(s)});l.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(o,l)}return t(e.tag,Object(s["a"])(a,{staticClass:"row",class:l}),i)}})},1232:function(t,e,a){},2677:function(t,e,a){"use strict";var i=a("8654");e["a"]=i["a"]},5803:function(t,e,a){},"62ad":function(t,e,a){"use strict";a("13d5"),a("14d9"),a("4b85");var i=a("2b0e"),s=a("d9f7"),o=a("80d2");const l=["sm","md","lg","xl"],n=(()=>l.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),r=(()=>l.reduce((t,e)=>(t["offset"+Object(o["E"])(e)]={type:[String,Number],default:null},t),{}))(),d=(()=>l.reduce((t,e)=>(t["order"+Object(o["E"])(e)]={type:[String,Number],default:null},t),{}))(),c={col:Object.keys(n),offset:Object.keys(r),order:Object.keys(d)};function u(t,e,a){let i=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");i+="-"+a}return"col"!==t||""!==a&&!0!==a?(i+="-"+a,i.toLowerCase()):i.toLowerCase()}}const h=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...n,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:i,parent:o}){let l="";for(const s in e)l+=String(e[s]);let n=h.get(l);if(!n){let t;for(t in n=[],c)c[t].forEach(a=>{const i=e[a],s=u(t,a,i);s&&n.push(s)});const a=n.some(t=>t.startsWith("col-"));n.push({col:!a||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),h.set(l,n)}return t(e.tag,Object(s["a"])(a,{class:n}),i)}})},"64a0":function(t,e,a){"use strict";a("6739")},"65af":function(t,e,a){},6739:function(t,e,a){},"7ab9":function(t,e,a){},"7b6e":function(t,e,a){"use strict";a("7ab9")},"7b9e":function(t,e,a){"use strict";a("65af")},"8adc":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return r}));var i=a("b0af"),s=a("80d2");const o=Object(s["i"])("v-card__actions"),l=Object(s["i"])("v-card__subtitle"),n=Object(s["i"])("v-card__text"),r=Object(s["i"])("v-card__title");i["a"]},be41:function(t,e,a){"use strict";a.r(e);var i=a("a523"),s=function(){var t=this,e=t._self._c;return e(i["a"],["image"===t.type?e("div",[e("UploadImage",{attrs:{id_document:t.id_document}})],1):"csv"===t.type?e("div",[e("UploadCSV",{attrs:{id_document:t.id_document}})],1):t._e()])},o=[],l=a("8336"),n=a("b0af"),r=a("99d9"),d=a("62ad"),c=(a("13d5"),a("14d9"),a("5803"),a("2677")),u=a("cc20"),h=a("80d2"),p=a("d9bd"),f=a("d9f7"),g=c["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>Object(h["F"])(t).every(t=>null!=t&&"object"===typeof t)}},computed:{classes(){return{...c["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,{size:e=0})=>t+e,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(h["v"])(e,1024===this.base))},internalArrayValue(){return Object(h["F"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map(t=>{const{name:e="",size:a=0}=t,i=this.truncateText(e);return this.showSize?`${i} (${Object(h["v"])(a,1024===this.base)})`:i}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(p["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];Object(h["j"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(u["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genControl(){const t=c["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(f["c"])(t.data.style,{display:"none"})),t},genInput(){const t=c["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,a)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[a],file:e,index:a}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=c["a"].options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:t=>{t.target&&"LABEL"===t.target.nodeName||this.$refs.input.click()}},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}}),m=a("490a"),y=a("0fd9"),b=a("8654"),v=function(){var t=this,e=t._self._c;return e(i["a"],{attrs:{"grid-list-md":""}},[e(n["a"],{attrs:{elevation:"5"}},[e(r["c"],[e(y["a"],[e(d["a"],{attrs:{cols:"12",md:"12"}},[e(g,{attrs:{label:"File input",filled:"",multiple:"","prepend-icon":"mdi-camera",accept:"image/*"},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)],1),e(y["a"],[e(d["a"],{attrs:{cols:"12",md:"6"}},[e("CodeEditor",{key:"index",attrs:{width:"100%",read_only:!0,languages:[["json","json"]],theme:"androidstudio"},model:{value:t.data_source,callback:function(e){t.data_source=e},expression:"data_source"}})],1),e(d["a"],{attrs:{cols:"12",md:"6"}},[e(b["a"],{attrs:{label:"Nombre del modelo (en singular)"},model:{value:t.modelName,callback:function(e){t.modelName=e},expression:"modelName"}})],1),e(d["a"],{attrs:{cols:"12",md:"12"}},[e(l["a"],{attrs:{color:"primary"},on:{click:t.upload}},[t._v(" Subir imagenes ")])],1)],1),e(y["a"],[e(d["a"],{attrs:{cols:"12",md:"12"}},[t.isUploadFiles?e(y["a"],{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[e(d["a"],{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[t._v(" Cargando imágenes ")]),e(d["a"],{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[e(m["a"],{attrs:{size:70,width:7,color:"purple",indeterminate:""}})],1)],1):t._e(),e("EditorFields",{attrs:{z_index:"100",bdDataInfo:t.bdDataInfo,id_document:t.id_document,data_source:t.data_source,modelName:t.modelName}})],1)],1)],1)],1)],1)},_=[],x=a("bc3a"),S=a.n(x),w=a("0e8f"),C=a("132d"),k=a("adda"),V=a("a722"),$=function(){var t=this,e=t._self._c;return t.bdDataInfo.length>0?e(i["a"],{attrs:{fluid:"","grid-list-sm":""}},[e(V["a"],{attrs:{row:"",wrap:""}},[t._l(t.bdDataInfo,(function(a,i){return e(w["a"],{key:i,attrs:{xs12:"",sm12:""}},[e(n["a"],{attrs:{elevation:"1"}},[e(r["c"],[e(y["a"],[e(d["a"],{attrs:{cols:"5"}},[e(k["a"],{attrs:{src:`${t.URLServer}${t.uploads}${a.imagen}`,contain:"","max-height":"300","max-width":"500"}})],1),e(d["a"],{attrs:{cols:"7"}},[e(b["a"],{attrs:{label:"Code",required:""},model:{value:a.code,callback:function(e){t.$set(a,"code",e)},expression:"card.code"}}),e(b["a"],{attrs:{label:"Nombre",required:""},model:{value:a.nombre,callback:function(e){t.$set(a,"nombre",e)},expression:"card.nombre"}}),e(b["a"],{attrs:{label:"Nombre científico",required:""},model:{value:a.nombre_científico,callback:function(e){t.$set(a,"nombre_científico",e)},expression:"card.nombre_científico"}}),e(b["a"],{attrs:{label:"Imagen",required:""},model:{value:a.imagen,callback:function(e){t.$set(a,"imagen",e)},expression:"card.imagen"}})],1)],1)],1)],1)],1)})),e(w["a"],{attrs:{xs12:"",sm12:""}},[e(n["a"],{attrs:{elevation:"0"}},[e(r["c"],[0!=t.bdDataInfo.length?e(y["a"],{attrs:{align:"center",justify:"space-around"}},[e(l["a"],{attrs:{tile:"",color:"success"},on:{click:t.setAnimals}},[e(C["a"],{attrs:{left:""}},[t._v(" mdi-pencil ")]),t._v(" Guardar información ")],1)],1):t._e()],1)],1)],1)],2)],1):t._e()},j=[],O={name:"EditorFields",props:{bdDataInfo:{type:Array,default:function(){return[]}},id_document:String,data_source:{},modelName:String},components:{},data(){return{uploads:"/uploads/"}},methods:{setAnimals(){S.a.post(`${this.URLServer}/corpus/${this.id_document}/iterations/`,{iteracion:this.bdDataInfo,name:this.modelName,template:this.data_source}).then(t=>{this.$router.push({name:"Home"})})}},computed:{URLServer(){return this.$store.state.URLServer}}},B=O,z=(a("7b6e"),a("2877")),N=Object(z["a"])(B,$,j,!1,null,null,null),I=N.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"code_editor hljs",class:{hide_header:t.withoutHeader,scroll:t.canScroll,read_only:t.read_only,wrap_code:t.wrap_code,atom_one_dark:"dark"==t.theme,atom_one_light:"light"==t.theme},style:{width:t.width,height:t.height,borderRadius:t.border_radius,zIndex:t.z_index,maxWidth:t.max_width,minWidth:t.min_width,maxHeight:t.max_height,minHeight:t.min_height}},[1!=t.withoutHeader?e("div",{staticClass:"header"},[t.display_language?e("Dropdown",{attrs:{color:"dark"==t.theme?"#aaa":"#999",width:t.selector_width,mark:t.mark,disabled:0==t.language_selector,default_display:t.selector_displayed_by_default}},[e("ul",{staticClass:"lang_list",style:{height:t.selector_height}},t._l(t.languageList,(function(a,i){return e("li",{key:i,on:{click:function(e){return t.changeLang(a)}}},[t._v(" "+t._s(void 0===a[1]?a[0]:a[1])+" ")])})),0)]):t._e(),t.copy_code?e("CopyCode",{attrs:{width:"16px",height:"16px",color:"dark"==t.theme?"#aaa":"#999",content:t.content}}):t._e()],1):t._e(),e("div",{staticClass:"code_area",style:{borderBottomLeftRadius:t.border_radius,borderBottomRightRadius:t.border_radius,borderTopLeftRadius:1==t.withoutHeader?t.border_radius:0,borderTopRightRadius:1==t.withoutHeader?t.border_radius:0}},[1!=t.read_only&&void 0===t.modelValue?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.staticValue,expression:"staticValue"}],ref:"textarea",style:{fontSize:t.font_size},attrs:{autofocus:t.autofocus},domProps:{value:t.staticValue},on:{input:[function(e){e.target.composing||(t.staticValue=e.target.value)},t.calcContainerWidth],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.preventDefault(),e.stopPropagation(),t.tab.apply(null,arguments))},scroll:t.scroll}}):t._e(),1!=t.read_only&&void 0!==t.modelValue?e("textarea",{ref:"textarea",style:{fontSize:t.font_size},attrs:{autofocus:t.autofocus},domProps:{value:t.modelValue},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.preventDefault(),e.stopPropagation(),t.tab.apply(null,arguments))},scroll:t.scroll,input:function(e){t.$emit("update:modelValue",e.target.value),t.calcContainerWidth(e)}}}):t._e(),e("pre",{style:{width:0===t.containerWidth?"":t.containerWidth+"px"}},[t._v("      "),e("code",{directives:[{name:"highlight",rawName:"v-highlight",value:t.contentValue,expression:"contentValue"}],class:t.languageClass,style:{top:t.top+"px",left:t.left+"px",fontSize:t.font_size,borderBottomLeftRadius:1==t.read_only?t.border_radius:0,borderBottomRightRadius:1==t.read_only?t.border_radius:0}}),t._v("\n    ")])])])},L=[],E=a("1487"),R=a.n(E),F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown",class:{disabled:t.disabled},attrs:{tabindex:"0"},on:{click:t.toggleDropdown,focusout:t.hideDropdown}},[e("div",{staticClass:"mark"},[e("div",{style:{color:t.color}},[t._v(t._s(t.mark))]),t.showArrow?e("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:t.color,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("polyline",{attrs:{points:"6 9 12 15 18 9"}})]):t._e()]),e("transition",{attrs:{name:"fade"}},[t.show?e("div",{staticClass:"panel",style:{width:t.width,height:t.height}},[t._t("default")],2):t._e()])],1)},U=[],A={name:"Dropdown",props:{width:{type:String,default:"80px"},height:{type:String,default:"auto"},mark:{type:String,default:""},disabled:{type:Boolean,default:!1},color:{type:String,default:"#aaa"},default_display:{type:Boolean,default:!1}},data(){return{show:this.default_display}},computed:{showArrow(){return 1!=this.disabled}},methods:{toggleDropdown(){0==this.disabled&&(1==this.show?this.show=!1:this.show=!0)},hideDropdown(){this.show=!1}}},T=A,W=(a("7b9e"),Object(z["a"])(T,F,U,!1,null,"1e4e1632",null)),P=W.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"copy_code",style:{width:t.width,height:t.height},attrs:{tabindex:"0"},on:{click:t.copy,focusout:t.resetMessage}},[e("div",{staticClass:"tooltip"},[t._v(t._s(t.message))]),e("textarea",{ref:"textarea",attrs:{tabindex:"1",readonly:""},domProps:{value:t.content}}),e("svg",{staticClass:"feather feather-copy",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",stroke:t.color,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("rect",{attrs:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}}),e("path",{attrs:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}})])])},H=[],J={name:"CopyCode",props:{content:{type:String},width:{type:String,default:"20px"},height:{type:String,default:"20px"},color:{type:String,default:"#aaa"}},data(){return{message:"Copy code"}},methods:{selectContent(){let t=this.$refs.textarea;if(1==document.execCommand("copy")){let e,a;t.focus(),t.select(),e=document.createRange(),e.selectNodeContents(t),a=window.getSelection(),a.removeAllRanges(),a.addRange(e),t.setSelectionRange(0,t.value.length),document.execCommand("copy")}else navigator.clipboard.writeText(t.value)},copy(t){this.selectContent(),t.target.focus(),this.message="Copied!"},resetMessage(){this.message="Copy code"}}},M=J,q=(a("ef63"),Object(z["a"])(M,G,H,!1,null,"25463c94",null)),K=q.exports,Q={components:{Dropdown:P,CopyCode:K},name:"CodeEditor",props:{modelValue:{type:String},wrap_code:{type:Boolean,default:!1},read_only:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},hide_header:{type:Boolean,default:!1},value:{type:String,default:""},width:{type:String,default:"540px"},height:{type:String,default:"auto"},max_width:{type:String},min_width:{type:String},max_height:{type:String},min_height:{type:String},border_radius:{type:String,default:"12px"},language_selector:{type:Boolean,default:!1},languages:{type:Array,default:function(){return[["javascript","JS"],["cpp","C++"],["python","Python"]]}},selector_width:{type:String,default:"110px"},selector_height:{type:String,default:"auto"},selector_displayed_by_default:{type:Boolean,default:!1},display_language:{type:Boolean,default:!0},copy_code:{type:Boolean,default:!0},z_index:{type:String},font_size:{type:String,default:"17px"},theme:{type:String,default:"dark"}},directives:{highlight:{bind(t,e){t.textContent=e.value,R.a.highlightElement(t)},componentUpdated(t,e){t.textContent=e.value,R.a.highlightElement(t)},created(t,e){t.textContent=e.value,R.a.highlightElement(t)},updated(t,e){t.textContent=e.value,R.a.highlightElement(t)}}},data(){return{containerWidth:0,staticValue:this.value,top:0,left:0,languageClass:"hljs language-"+this.languages[0][0],mark:void 0===this.languages[0][1]?this.languages[0][0]:this.languages[0][1],languageList:this.languages,content:void 0===this.modelValue?this.staticValue:this.modelValue}},watch:{value(t){this.staticValue=t}},computed:{contentValue(){return this.read_only?this.value:void 0===this.modelValue?this.staticValue+"\n":this.modelValue+"\n"},canScroll(){return"auto"!=this.height},withoutHeader(){return 1==this.hide_header||0==this.display_language&&0==this.copy_code}},methods:{changeLang(t){this.mark=void 0===t[1]?t[0]:t[1],this.languageClass="language-"+t[0],this.$emit("lang",t[0])},calcContainerWidth(t){this.containerWidth=t.target.clientWidth},tab(){document.execCommand("insertText",!1,"    ")},scroll(t){this.top=-t.target.scrollTop,this.left=-t.target.scrollLeft},resize(){const t=new ResizeObserver(t=>{for(let e of t){const t=e.contentRect;this.containerWidth=t.width+40}});this.$refs.textarea&&t.observe(this.$refs.textarea)}},mounted(){this.$emit("lang",this.languages[0][0]),this.$emit("langs",this.languages),this.$nextTick((function(){this.content=void 0===this.modelValue?this.staticValue:this.modelValue})),this.resize()},updated(){this.$emit("input",this.staticValue),this.$nextTick((function(){this.content=void 0===this.modelValue?this.staticValue:this.modelValue}))}},X=Q,Y=(a("64a0"),a("ed93"),Object(z["a"])(X,D,L,!1,null,"6838a418",null)),Z=Y.exports,tt={name:"UploadImage",data:function(){return{file:null,files:[],template:'console.log("hi")',data_source:JSON.stringify({_id:"ObjectId",code:"textoAutogenerado",nombre:"textoVacio","nombre_científico":"textoVacio",imagen:"textoArchivo",descripcion:"arregloVacio"},null,2),bdDataInfo:[],isUploadFiles:!1,modelName:""}},props:["id_document"],components:{CodeEditor:Z,EditorFields:I},methods:{upload:function(){try{if(this.isUploadFiles=!0,this.files){let t=new FormData;for(let e of this.files)t.append("data",e,e.name);t.append("template",JSON.stringify(this.data_source)),S.a.post(this.URLServer+"/images",t).then(t=>{console.log("Success!"),console.log({response:t}),this.bdDataInfo=t.data.data,this.isUploadFiles=!1}).catch(t=>{console.log({error:t})})}else console.log("there are no files.")}catch(t){console.log(t)}}},computed:{URLServer(){return this.$store.state.URLServer}}},et=tt,at=Object(z["a"])(et,v,_,!1,null,null,null),it=at.exports,st=function(){var t=this,e=t._self._c;return e(i["a"],{attrs:{"grid-list-md":""}},[e(n["a"],{attrs:{elevation:"5"}},[e(r["c"],[e(y["a"],[e(d["a"],{attrs:{cols:"12",md:"12"}},[e(g,{attrs:{label:"File input",filled:"",multiple:"","prepend-icon":"mdi-file"},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)],1),e(y["a"],[e(d["a"],{attrs:{cols:"12",md:"6"}},[e("CodeEditor",{key:"index",attrs:{width:"100%",read_only:!0,languages:[["json","json"]],theme:"androidstudio"},model:{value:t.data_source,callback:function(e){t.data_source=e},expression:"data_source"}})],1),e(d["a"],{attrs:{cols:"12",md:"6"}},[e(b["a"],{attrs:{label:"Nombre del modelo (en singular)"},model:{value:t.modelName,callback:function(e){t.modelName=e},expression:"modelName"}})],1),e(d["a"],{attrs:{cols:"12",md:"12"}},[e(l["a"],{attrs:{color:"primary"},on:{click:t.upload}},[t._v(" Subir archivo CSV ")])],1)],1),e(y["a"],[e(d["a"],{attrs:{cols:"12",md:"12"}},[t.isUploadFiles?e(y["a"],{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[e(d["a"],{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[t._v(" Cargando archivo ")]),e(d["a"],{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[e(m["a"],{attrs:{size:70,width:7,color:"purple",indeterminate:""}})],1)],1):t._e(),e("EditorFields",{attrs:{z_index:"100",bdDataInfo:t.bdDataInfo,id_document:t.id_document,data_source:t.data_source,modelName:t.modelName}})],1)],1)],1)],1)],1)},ot=[],lt={name:"UploadCSV",data:function(){return{file:null,files:[],template:'console.log("hi")',data_source:JSON.stringify({_id:"ObjectId",code:"textoAutogenerado",embera:"textoVacio",espanol:"textoVacio"},null,2),bdDataInfo:[],isUploadFiles:!1,modelName:""}},props:["id_document"],components:{CodeEditor:Z,EditorFields:I},methods:{upload:function(){try{if(this.isUploadFiles=!0,this.files){let t=new FormData;for(let e of this.files)t.append("data",e,e.name);t.append("template",JSON.stringify(this.data_source)),S.a.post(this.URLServer+"/csv",t).then(t=>{console.log("Success!"),console.log({response:t}),this.bdDataInfo=t.data.data,this.isUploadFiles=!1}).catch(t=>{console.log({error:t})})}else console.log("there are no files.")}catch(t){console.log(t)}}},computed:{URLServer(){return this.$store.state.URLServer}}},nt=lt,rt=Object(z["a"])(nt,st,ot,!1,null,null,null),dt=rt.exports,ct={name:"UploadFile",props:["id_document","type"],components:{UploadImage:it,UploadCSV:dt}},ut=ct,ht=Object(z["a"])(ut,s,o,!1,null,null,null);e["default"]=ht.exports},cc20:function(t,e,a){"use strict";a("14d9"),a("8adc");var i=a("58df"),s=a("0789"),o=a("9d26"),l=a("a9ad"),n=a("4e82"),r=a("7560"),d=a("f2e7"),c=a("1c87"),u=a("af2b"),h=a("d9bd");e["a"]=Object(i["a"])(l["a"],u["a"],c["a"],r["a"],Object(n["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...c["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(c["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(h["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s["b"],t)},genClose(){return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:a,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const s=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(s,i),e)}})},ed93:function(t,e,a){"use strict";a("1232")},ef63:function(t,e,a){"use strict";a("0c6a")}}]);
//# sourceMappingURL=chunk-91311184.519cf568.js.map