(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e095aacc"],{"70c9":function(e,r,t){},"84ed":function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return c})),t.d(r,"e",(function(){return i})),t.d(r,"d",(function(){return u}));t("99af");var a=t("b775"),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])("/camera/addCamera",e)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])("/camera/deleteCamera/".concat(e.caremaId,"/").concat(e.status),e)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])("/camera/queryCamera",e)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["b"])("/camera/updateCamera",e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a["a"])("/camera/queryCameraDetail/".concat(e.caremaId),e)}},a5c0:function(e,r,t){"use strict";t.r(r);var a,n,o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"operation"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"bg-purple operation_left"},[t("h3",[e._v("基本信息")]),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px","label-position":"left",disabled:e.DISABLED}},[t("el-form-item",{attrs:{label:"摄像头名称",prop:"cameraName"}},[t("el-input",{model:{value:e.ruleForm.cameraName,callback:function(r){e.$set(e.ruleForm,"cameraName",r)},expression:"ruleForm.cameraName"}})],1),t("el-form-item",{attrs:{label:"摄像头编号",prop:"cameraId"}},[t("el-input",{model:{value:e.ruleForm.cameraId,callback:function(r){e.$set(e.ruleForm,"cameraId",r)},expression:"ruleForm.cameraId"}})],1),t("el-form-item",{attrs:{label:"类型",prop:"cameraType"}},[t("el-input",{model:{value:e.ruleForm.cameraType,callback:function(r){e.$set(e.ruleForm,"cameraType",r)},expression:"ruleForm.cameraType"}})],1),t("el-form-item",{attrs:{label:"参数",prop:"config"}},[t("el-input",{model:{value:e.ruleForm.config,callback:function(r){e.$set(e.ruleForm,"config",r)},expression:"ruleForm.config"}})],1),t("el-form-item",{attrs:{label:"说明",prop:"remark"}},[t("el-input",{model:{value:e.ruleForm.remark,callback:function(r){e.$set(e.ruleForm,"remark",r)},expression:"ruleForm.remark"}})],1),t("el-form-item",{attrs:{label:"状态",prop:"status"}},[t("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.ruleForm.status,callback:function(r){e.$set(e.ruleForm,"status",r)},expression:"ruleForm.status"}},[t("el-option",{attrs:{label:"启用",value:1}}),t("el-option",{attrs:{label:"停用",value:0}})],1)],1)],1),t("div",{staticClass:"bottom"},[t("el-button",{attrs:{size:e.SIZE},on:{click:e.cancel}},[e._v(" 取消 ")]),t("el-button",{attrs:{type:"primary",size:e.SIZE},on:{click:function(r){return e.preservation("ruleForm")}}},[e._v(" 确定 ")])],1)],1)]),t("el-col",{attrs:{span:12}},[t("div",{staticClass:"bg-purple operation_map"},[e._v(" 模型图 ")])])],1)],1)},c=[],i=(t("7db0"),t("e439"),t("b64b"),t("d3b7"),t("96cf"),t("1da1")),u=t("5530"),l=t("63ae"),s=t("73c1"),m=t("84ed"),f=t("9a36"),p=t("5880"),d={name:"Operation",data:function(){return{ruleForm:{cameraName:"",cameraId:"",cameraType:"",config:"",remark:"",status:""},rules:{cameraName:[{required:!0,message:"请输入摄像头名称",trigger:"blur"}],cameraId:[{required:!0,message:"请输入摄像头编号",trigger:"blur"}],cameraType:[{required:!0,message:"请输入类型",trigger:"blur"}],config:[{required:!0,message:"请输入参数",trigger:"blur"}],remark:[{required:!0,message:"请输入说明",trigger:"blur"}],status:[{required:!0,message:"请输选择状态",trigger:"chage"}]},SIZE:f["a"].SIZE,type:null,caremaId:null,DISABLED:!1}},methods:(a=Object(s["b"])(1e3,{leading:!0}),n={cancel:function(){var e=this.$router.currentRoute.fullPath,r=this.visitedViews.find((function(r){return r.fullPath==e}));this.$EventBus.$emit("closeSelectedTag",Object(u["a"])({},r))},preservation:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return!1;"bj"==r.type?Promise.resolve(r.setInfoVehicle.call(r,r.ruleForm)).then((function(){r.cancel()})).catch((function(e){})):"xz"==r.type&&(r.ruleForm.locX=1,r.ruleForm.locY=2,r.ruleForm.locZ=3,r.ruleForm.shootX=1,r.ruleForm.shootY=2,r.ruleForm.shootZ=3,Promise.resolve(r.addInfoVehicle.call(r,r.ruleForm)).then((function(){r.cancel()})).catch((function(e){})))}))},addInfoVehicle:function(e){return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r,t){Object(m["a"])(e).then((function(){r()})).catch((function(e){t(e)}))})));case 1:case"end":return r.stop()}}),r)})))()},setInfoVehicle:function(e){return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r,t){Object(m["e"])(e).then((function(){r()})).catch((function(e){t(e)}))})));case 1:case"end":return r.stop()}}),r)})))()},getInfoCamera:function(e){var r=this;Object(m["d"])({caremaId:e}).then((function(e){var t=e.data[0];if(t&&Object.keys(t).length>0)for(var a in t)r.$set(r.ruleForm,a,t[a])})).catch((function(e){}))}},Object(l["a"])(n,"preservation",[a],Object.getOwnPropertyDescriptor(n,"preservation"),n),n),mounted:function(){if(this.type=this.$route.params.type,this.caremaId=this.$route.params.caremaId,"xz"===this.type){for(var e in this.ruleForm)this.$set(this.ruleForm,e,"");this.$set(this.ruleForm,"status",1)}else"bj"===this.type?this.getInfoCamera(this.caremaId):"ck"===this.type&&(this.DISABLED=!0,this.getInfoCamera(this.caremaId))},computed:Object(u["a"])({},Object(p["mapState"])({visitedViews:function(e){return e.tagsView.visitedViews}}))},b=d,h=(t("f832"),t("2877")),v=Object(h["a"])(b,o,c,!1,null,"558166aa",null);r["default"]=v.exports},f832:function(e,r,t){"use strict";var a=t("70c9"),n=t.n(a);n.a}}]);