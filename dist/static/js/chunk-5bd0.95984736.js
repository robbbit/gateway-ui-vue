(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5bd0"],{"/Bnt":function(t,e,n){"use strict";var a=n("Ie/q");n.n(a).a},"Ie/q":function(t,e,n){},TsPW:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return d});var a=n("4d7F"),i=n.n(a),s=n("t3Un"),l=n("JDVc"),r="/apis";function o(){return new i.a(function(t,e){var n=[],a="",i=l.c;!function l(o){(function(t){return Object(s.a)({url:r,method:"GET",params:t})})(o).then(function(e){var s=(e=e||[]).length;s>0?(n=n.concat(e),(a=e[s-1]||{}).id&&l({after:a.id,limit:i})):t(n)}).catch(function(){e()})}({after:"",limit:i})})}function c(t){return Object(s.a)({url:r+"/"+t,method:"GET"})}function u(t){return Object(s.a)({url:r,method:"PUT",data:t})}function d(t){return Object(s.a)({url:r+"/"+t,method:"DELETE"})}},ZySA:function(t,e,n){"use strict";var a=n("P2sY"),i=n.n(a),s=(n("jUE0"),{bind:function(t,e){t.addEventListener("click",function(n){var a=i()({},e.value),s=i()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=s.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var r=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":((o=document.createElement("span")).className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",l.appendChild(o)),s.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=n.pageY-r.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=n.pageX-r.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=s.color,o.className="waves-ripple z-active",!1}},!1)}}),l=function(t){t.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(l)),s.install=l;e.a=s},jUE0:function(t,e,n){},lze6:function(t,e,n){"use strict";n.r(e);var a=n("ZySA"),i=n("TsPW"),s=n("7Qib"),l=n("JDVc"),r={name:"apiIndex",directives:{waves:a.a},data:function(){return{listLoading:!0,dataList:[],showList:[],listQuery:{name:"",tag:"",domain:"",matchRule:-1,page:1,size:10},pageInfo:{totalSize:void 0},matchRuleConstant:l.i}},created:function(){this.getList()},watch:{$route:function(t,e){"apiIndex"!=t.name&&this.$destroy()},"listQuery.name":function(){this.handleFilter()},"listQuery.domain":function(){this.handleFilter()},"listQuery.tag":function(){this.handleFilter()},"listQuery.matchRule":function(){this.handleFilter()}},computed:{},methods:{getList:function(){var t=this;this.listLoading=!0,i.b().then(function(e){t.updateList(e)}).catch(function(){t.listLoading=!1})},updateList:function(t){this.dataList=t||[],this.pageInfo.totalSize=this.dataList.length,this.listLoading=!1,this.updateShowList()},handleFilter:function(){this.listQuery.page=1,this.updateShowList()},updateShowList:function(){var t=this,e=[],n=[];this.dataList.forEach(function(n,a){var i=t.listQuery.name,l=t.listQuery.domain,r=t.listQuery.tag,o=t.listQuery.matchRule,c=!0;if(i&&(c=Object(s.g)(n.name,i)),c&&l&&(c=Object(s.g)(n.domain,l)),c&&r&&n.tags&&n.tags.length>0)for(var u=0,d=n.tags.length;u<d;u++){var h=n.tags[u]||{};c=Object(s.g)(h.name,r)||Object(s.g)(h.value,r)}c&&-1!==o&&(c=n.matchRule===o),c&&e.push(n)}),e.forEach(function(e,a){e=e||{};var i=t.listQuery.page,s=t.listQuery.size,l=i*s;a>=l-s&&a<l&&n.push(e)}),this.showList=n,this.pageInfo.totalSize=e.length},handleSizeChange:function(t){this.listQuery.size=t,this.listQuery.page=1,this.updateShowList()},handleCurrentChange:function(t){this.listQuery.page=t,this.updateShowList()},handleCreate:function(){this.$router.push({path:"/api/new"})},handleShow:function(t){this.$router.push({path:"/api/show",query:{id:t.id}})},handleUpdate:function(t){this.$router.push({path:"/api/edit",query:{id:t.id}})},handleDelete:function(t){var e=this,n=t.id;this.$confirm("是否删除该API？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e._doDeleteItem(n)})},_doDeleteItem:function(t){var e=this;t&&i.a(t).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getList()})}}},o=(n("/Bnt"),n("KHd+")),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"接口名称",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"标签(name/value)",clearable:""},model:{value:t.listQuery.tag,callback:function(e){t.$set(t.listQuery,"tag",e)},expression:"listQuery.tag"}}),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"匹配规则"},model:{value:t.listQuery.matchRule,callback:function(e){t.$set(t.listQuery,"matchRule",e)},expression:"listQuery.matchRule"}},t._l(t.matchRuleConstant,function(t){return n("el-option",{key:t.value,attrs:{value:t.value,label:t.title}})}),1),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-search",placeholder:"接口请求域名",clearable:""},model:{value:t.listQuery.domain,callback:function(e){t.$set(t.listQuery,"domain",e)},expression:"listQuery.domain"}}),t._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{loading:t.listLoading,type:"primary"},on:{click:t.getList}},[t._v("刷新\n        ")]),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"danger",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加\n        ")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.showList,"element-loading-text":"加载中...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"接口名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"URL匹配模式"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.urlPattern))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"匹配规则",width:"110px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("matchRuleFilter")(e.row.matchRule)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"接口请求域名"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.domain))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"请求类型",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.method?n("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.method))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"开关状态",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status?n("el-tag",{attrs:{type:"danger"}},[t._v("关闭中")]):n("el-tag",[t._v("正常")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.handleShow(e.row)}}},[t._v("查看")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.totalSize},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,"049f9e1a",null);c.options.__file="index.vue";e.default=c.exports},t3Un:function(t,e,n){"use strict";var a=n("4d7F"),i=n.n(a),s=n("vDqi"),l=n.n(s),r=n("XJYT"),o=l.a.create({baseURL:"/v1",timeout:6e4});o.interceptors.request.use(function(t){return t},function(t){console.error(t),i.a.reject(t)}),o.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(r.Message)({message:e.data,type:"error",duration:5e3}),i.a.reject("error"))},function(t){return Object(r.Message)({message:t.data||"网络异常",type:"error",duration:5e3}),i.a.reject(t)}),e.a=o}}]);