(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f325"],{"1AaR":function(t,e,n){},"1zBe":function(t,e,n){"use strict";var i=n("84d3");n.n(i).a},"84d3":function(t,e,n){},BGl4:function(t,e,n){"use strict";var i=n("lEg2"),r=n("JDVc"),o=n("P2sY"),a=n.n(o),s=n("VrN/"),c=n.n(s),u=(n("p77/"),window.CodeMirror||c.a);u.extendMode("javascript",{commentStart:"/*",commentEnd:"*/",newlineAfterToken:function(t,e,n,i){return this.jsonMode?/^[\[,{]$/.test(e)||/^}/.test(n):(";"!=e||!i.lexical||")"!=i.lexical.type)&&(/^[;{}]$/.test(e)&&!/^;/.test(n))}}),u.defineExtension("autoFormatRange",function(t,e){var n=this,i=n.getMode(),r=n.getRange(t,e).split("\n"),o=u.copyState(i,n.getTokenAt(t).state),a=n.getOption("tabSize"),s="",c=0,l=0==t.ch;function m(){s+="\n",l=!0,++c}for(var p=0;p<r.length;++p){for(var h=new u.StringStream(r[p],a);!h.eol();){var d=u.innerMode(i,o),f=i.token(h,o),g=h.current();h.start=h.pos,l&&!/\S/.test(g)||(s+=g,l=!1),!l&&d.mode.newlineAfterToken&&d.mode.newlineAfterToken(f,g,h.string.slice(h.pos)||r[p+1]||"",d.state)&&m()}!h.pos&&i.blankLine&&i.blankLine(o),l||m()}n.operation(function(){n.replaceRange(s,t,e);for(var i=t.line+1,r=t.line+c;i<=r;++i)n.indentLine(i,"smart");n.setSelection(t,n.getCursor(!1))})});var l={name:"CodeMirror",data:function(){return{content:"",codemirror:null,cminstance:null}},props:{code:String,value:String,marker:Function,unseenLines:Array,name:{type:String,default:"codemirror"},placeholder:{type:String,default:""},merge:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{}}},globalEvents:{type:Array,default:function(){return[]}}},watch:{options:{deep:!0,handler:function(t){for(var e in t)this.cminstance.setOption(e,t[e])}},merge:function(){this.$nextTick(this.switchMerge)},code:function(t){this.handerCodeChange(t)},value:function(t){this.handerCodeChange(t)}},methods:{initialize:function(){var t=this,e=a()({},this.globalOptions,this.options);this.merge?(this.codemirror=u.MergeView(this.$refs.mergeview,e),this.cminstance=this.codemirror.edit):(this.codemirror=u.fromTextArea(this.$refs.textarea,e),this.cminstance=this.codemirror,this.cminstance.setValue(this.code||this.value||this.content)),this.cminstance.on("change",function(e){t.content=e.getValue(),t.$emit&&t.$emit("input",t.content)});var n={};["scroll","changes","beforeChange","cursorActivity","keyHandled","inputRead","electricInput","beforeSelectionChange","viewportChange","swapDoc","gutterClick","gutterContextMenu","focus","blur","refresh","optionChange","scrollCursorIntoView","update"].concat(this.events).concat(this.globalEvents).filter(function(t){return!n[t]&&(n[t]=!0)}).forEach(function(e){t.cminstance.on(e,function(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];t.$emit.apply(t,[e].concat(i));var o=e.replace(/([A-Z])/g,"-$1").toLowerCase();o!==e&&t.$emit.apply(t,[o].concat(i))})});this.$emit("ready",this.codemirror),this.unseenLineMarkers(),this.refresh()},refresh:function(){var t=this;this.$nextTick(function(){t.cminstance.refresh()})},destroy:function(){var t=this.cminstance.doc.cm.getWrapperElement();t&&t.remove&&t.remove()},handerCodeChange:function(t){if(t!==this.cminstance.getValue()){var e=this.cminstance.getScrollInfo();this.cminstance.setValue(t),this.content=t,this.cminstance.scrollTo(e.left,e.top)}this.unseenLineMarkers()},unseenLineMarkers:function(){var t=this;void 0!==this.unseenLines&&void 0!==this.marker&&this.unseenLines.forEach(function(e){var n=t.cminstance.lineInfo(e);t.cminstance.setGutterMarker(e,"breakpoints",n.gutterMarkers?null:t.marker())})},switchMerge:function(){var t=this.cminstance.doc.history,e=this.cminstance.doc.cleanGeneration;this.options.value=this.cminstance.getValue(),this.destroy(),this.initialize(),this.cminstance.doc.history=t,this.cminstance.doc.cleanGeneration=e}},mounted:function(){this.initialize()},beforeDestroy:function(){this.destroy()}},m=(n("Ju04"),n("KHd+")),p=Object(m.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-codemirror",class:{merge:this.merge}},[this.merge?e("div",{ref:"mergeview"}):e("textarea",{ref:"textarea",attrs:{name:this.name,placeholder:this.placeholder}})])},[],!1,null,null,null);p.options.__file="index.vue";var h=p.exports,d=n("7Qib");n("+dQi"),n("enqM"),n("McUL"),n("mUiM"),n("uTOq"),n("m3Q/"),n("9rZZ"),n("PJhV"),n("nHt3"),n("cV09"),n("I96o"),n("S6bl"),n("jDMi"),n("cokd"),n("Ku0u"),n("1y8p"),n("C2zF"),n("mki7"),n("aX69"),n("rt3J"),n("FkuW"),n("SJVZ"),n("y8iW"),n("jXCp"),n("nwns"),n("osHv");var f={name:"PluginForm",props:{showType:{type:String,default:r.d.create},editItem:{type:Object}},data:function(){return{loading:!0,submitting:!1,rules:{name:[{required:!0,message:"请填写名称",trigger:"change"}],version:[{required:!0,message:"请填写版本",trigger:"change"}],content:[{required:!0,message:"请填写版本",trigger:"change"}]},tempItem:{id:void 0,name:"",author:"",email:"",updateAt:void 0,version:void 0,type:r.m.javaScript,content:"",cfg:""},pluginTypeConstant:r.l,cmJSOption:{mode:"text/javascript",tabSize:4,styleActiveLine:!1,lineNumbers:!0,styleSelectedText:!1,line:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],highlightSelectionMatches:{showToken:/\w/,annotateScrollbar:!0},hintOptions:{tables:{users:["name","score","birthDate"],countries:["name","population","size"]}},keyMap:"sublime",matchBrackets:!0,showCursorWhenSelecting:!0,theme:"monokai",extraKeys:{Ctrl:"autocomplete"},readOnly:""}}},components:{CodeMirror:h},watch:{editItem:function(t,e){var n=t;n.content=Object(d.b)(n.content||""),n.cfg=Object(d.b)(n.cfg||""),this.tempItem=Object(d.e)(this.tempItem,Object(d.a)(n)),this.loading=!1,this.submitting=!1}},computed:{isShow:function(){return this._isShow()},isCreate:function(){return this._isCreate()},isUpdate:function(){return this._isUpdate()}},created:function(){this.init()},methods:{init:function(){this._isShow()?(this.rules={},this.cmJSOption.readOnly="nocursor"):this._isCreate()&&(this.loading=!1)},goList:function(){this.$router.replace({path:"/plugin"}),this.$destroy()},goEdit:function(){this.$router.push({path:"/plugin/edit",query:{id:this.tempItem.id}})},createItem:function(t){var e=this;this.submitting||this.$refs[t].validate(function(t){if(!t)return!1;e._doCreateItem()})},_doCreateItem:function(){var t=this,e=Object(d.a)(this.tempItem);e.content=Object(d.c)(e.content||""),e.cfg=Object(d.c)(e.cfg||""),this.submitting=!0,i.f(e).then(function(){t.$message({type:"success",message:"创建成功!"}),setTimeout(function(){t.goList()},2e3)}).catch(function(){t.submitting=!1})},updateItem:function(t){var e=this;this.submitting||this.$refs[t].validate(function(t){if(!t)return!1;e._doUpdateItem()})},_doUpdateItem:function(){var t=this,e=Object(d.a)(this.tempItem);this.submitting=!0,e.content=Object(d.c)(e.content||""),e.cfg=Object(d.c)(e.cfg||""),i.f(e).then(function(){t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.goList()},2e3)}).catch(function(){t.submitting=!1})},handleSelectFile:function(){this.$refs.fileInput.value=null,this.$refs.fileInput.click()},handleFileChange:function(t){var e=t.target.files;if(e&&0!==e.length){var n=this,i=e[0];if(!["text/javascript","text/plain"].includes(i.type))return n._showMessage("暂不支持解析该类型的文件"),!1;Object(d.f)(i).then(function(t){n.$set(n.tempItem,"content",t)}).catch(function(t){n._showMessage(t||"无法读取文件内容")})}},formatContent:function(){var t=this.$refs.codeMirror.$data.codemirror;t.execCommand("selectAll"),this.$nextTick(function(){t&&t.autoFormatRange&&t.autoFormatRange(t.getCursor(!0),t.getCursor(!1))})},_showMessage:function(t){this.$message({type:"warning",message:t})},_isUpdate:function(){return this.showType===r.d.update},_isShow:function(){return this.showType===r.d.show},_isCreate:function(){return this.showType===r.d.create}}},g=(n("IC3Y"),Object(m.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dataForm",attrs:{rules:t.rules,model:t.tempItem,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"名称",prop:"name"}},[t.isShow?n("span",[t._v(t._s(t.tempItem.name))]):n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"插件名称"},model:{value:t.tempItem.name,callback:function(e){t.$set(t.tempItem,"name",e)},expression:"tempItem.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"版本",prop:"version"}},[t.isShow?n("span",[t._v(t._s(t.tempItem.version))]):n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"插件版本号"},model:{value:t.tempItem.version,callback:function(e){t.$set(t.tempItem,"version",t._n(e))},expression:"tempItem.version"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"作者",prop:"author"}},[t.isShow?n("span",[t._v(t._s(t.tempItem.author))]):n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"作者"},model:{value:t.tempItem.author,callback:function(e){t.$set(t.tempItem,"author",e)},expression:"tempItem.author"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"email",prop:"email"}},[t.isShow?n("span",[t._v(t._s(t.tempItem.email))]):n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"email"},model:{value:t.tempItem.email,callback:function(e){t.$set(t.tempItem,"email",e)},expression:"tempItem.email"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"类型",prop:"type"}},[t.isShow?n("span",[t._v(t._s(t._f("pluginTypeFilter")(t.tempItem.type)))]):[n("el-select",{attrs:{placeholder:"类型"},model:{value:t.tempItem.type,callback:function(e){t.$set(t.tempItem,"type",e)},expression:"tempItem.type"}},t._l(t.pluginTypeConstant,function(t,e){return n("el-option",{key:t.value,attrs:{label:t.title,value:t.value}})}),1)]],2),t._v(" "),n("el-form-item",{attrs:{label:"内容",prop:"content"}},[t.isShow?t._e():n("div",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleSelectFile}},[t._v("导入JS文件"),n("i",{staticClass:"el-icon-upload el-icon--right"})]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.formatContent}},[t._v("格式化代码")]),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("支持直接.js或者.txt文件导入，支持在线编写和修改")]),t._v(" "),n("i",{staticClass:"el-icon-info",staticStyle:{"margin-left":"10px",color:"#909399"}})]),t._v(" "),n("input",{ref:"fileInput",staticClass:"el-upload__input",attrs:{type:"file"},on:{change:t.handleFileChange}})],1),t._v(" "),n("div",{staticStyle:{width:"800px",height:"500px"}},[n("code-mirror",{ref:"codeMirror",attrs:{options:t.cmJSOption},model:{value:t.tempItem.content,callback:function(e){t.$set(t.tempItem,"content",e)},expression:"tempItem.content"}})],1)]),t._v(" "),n("el-form-item",{attrs:{label:"配置信息"}},[t.isShow?n("span",[t._v(t._s(t.tempItem.cfg))]):n("el-input",{staticStyle:{width:"800px"},attrs:{type:"textarea",rows:3},model:{value:t.tempItem.cfg,callback:function(e){t.$set(t.tempItem,"cfg",e)},expression:"tempItem.cfg"}})],1),t._v(" "),n("div",{staticStyle:{"margin-left":"70px"}},[n("el-button",{on:{click:t.goList}},[t._v("返回")]),t._v(" "),t.isShow?n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.goEdit()}}},[t._v("编辑")]):t._e(),t._v(" "),t.isCreate?n("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:function(e){t.createItem("dataForm")}}},[t._v("提交\n            ")]):t.isUpdate?n("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:function(e){t.updateItem("dataForm")}}},[t._v("提交\n            ")]):t._e()],1)],1)],1)},[],!1,null,"10a11246",null));g.options.__file="PluginForm.vue";e.a=g.exports},IC3Y:function(t,e,n){"use strict";var i=n("1AaR");n.n(i).a},Ju04:function(t,e,n){"use strict";var i=n("ap2y");n.n(i).a},ap2y:function(t,e,n){},lEg2:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"a",function(){return m}),n.d(e,"c",function(){return p}),n.d(e,"e",function(){return h});var i=n("4d7F"),r=n.n(i),o=n("t3Un"),a=n("JDVc"),s="/plugins";function c(){return new r.a(function(t,e){var n=[],i="",r=a.c;!function a(c){(function(t){return Object(o.a)({url:s,method:"GET",params:t})})(c).then(function(e){var o=(e=e||[]).length;o>0?(n=n.concat(e),(i=e[o-1]||{}).id&&a({after:i.id,limit:r})):t(n)}).catch(function(){e()})}({after:"",limit:r})})}function u(t){return Object(o.a)({url:s+"/"+t,method:"GET"})}function l(t){return Object(o.a)({url:s,method:"PUT",data:t})}function m(t){return Object(o.a)({url:s+"/"+t,method:"DELETE"})}function p(){return Object(o.a)({url:s+"/apply",method:"GET"})}function h(t){return Object(o.a)({url:s+"/apply",method:"PUT",data:t})}},t3Un:function(t,e,n){"use strict";var i=n("4d7F"),r=n.n(i),o=n("vDqi"),a=n.n(o),s=n("XJYT"),c=a.a.create({baseURL:"/v1",timeout:6e4});c.interceptors.request.use(function(t){return t},function(t){console.error(t),r.a.reject(t)}),c.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(s.Message)({message:e.data,type:"error",duration:5e3}),r.a.reject("error"))},function(t){return Object(s.Message)({message:t.response&&t.response.data&&t.response.data.data||"网络异常",type:"error",duration:5e3}),r.a.reject(t)}),e.a=c},trwT:function(t,e,n){"use strict";n.r(e);var i=n("BGl4"),r=n("lEg2"),o={name:"pluginShow",data:function(){return{item:{}}},watch:{$route:function(t,e){"pluginShow"!=t.name&&this.$destroy()}},components:{PluginForm:i.a},created:function(){this.init()},methods:{init:function(){var t=this;this.id=this.$route.query.id;var e=this.id;e&&r.d(e).then(function(e){e=e||{},t.item=e})}}},a=(n("1zBe"),n("KHd+")),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("plugin-form",{attrs:{"show-type":"show",editItem:t.item},on:{"update:editItem":function(e){t.item=e}}})],1)},[],!1,null,"4830980d",null);s.options.__file="show.vue";e.default=s.exports}}]);