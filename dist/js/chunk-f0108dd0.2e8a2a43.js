(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0108dd0"],{"14c1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return s})),r.d(t,"g",(function(){return u})),r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return p})),r.d(t,"f",(function(){return m})),r.d(t,"h",(function(){return d}));r("99af");var n=r("b775"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/addAreaByAlarm",e)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/addAreaByDangerWork",e)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/deleteAreaByAlarm/".concat(e.areaId,"/").concat(e.status),e)},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/deleteAreaByDangerWork/".concat(e.areaId,"/").concat(e.status),e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/queryAreaByAlarm",e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/queryAreaByDangerWork",e)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/updateAreaByAlarm",e)},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/updateAreaByDangerWork",e)},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/queryAreaByAlarmDetail/".concat(e.areaId),e)},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/alarmArea/queryAreaByDangerWorkDetail/".concat(e.areaId),e)}},3859:function(e,t,r){"use strict";r.r(t);var n,a,o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"operation"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"bg-purple operation_left"},[r("h3",[e._v("基本信息")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px","label-position":"left",disabled:e.DISABLED}},[r("el-form-item",{attrs:{label:"区域名称",prop:"areaName"}},[r("el-input",{model:{value:e.ruleForm.areaName,callback:function(t){e.$set(e.ruleForm,"areaName",t)},expression:"ruleForm.areaName"}})],1),r("el-form-item",{attrs:{label:"区域类型",prop:"areaType"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.areaType,callback:function(t){e.$set(e.ruleForm,"areaType",t)},expression:"ruleForm.areaType"}},e._l(e.getAreaTypeList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"人员上限",prop:"personTopLimit"}},[r("el-input",{model:{value:e.ruleForm.personTopLimit,callback:function(t){e.$set(e.ruleForm,"personTopLimit",t)},expression:"ruleForm.personTopLimit"}})],1),r("el-form-item",{attrs:{label:"人员下限",prop:"personLowerLimit"}},[r("el-input",{model:{value:e.ruleForm.personLowerLimit,callback:function(t){e.$set(e.ruleForm,"personLowerLimit",t)},expression:"ruleForm.personLowerLimit"}})],1),r("el-form-item",{attrs:{label:"人员范围",prop:"allowPerson"}},[r("el-select",{attrs:{multiple:"",placeholder:"请选择",filterable:""},model:{value:e.ruleForm.allowPerson,callback:function(t){e.$set(e.ruleForm,"allowPerson",t)},expression:"ruleForm.allowPerson"}},e._l(e.onlinePersonList,(function(e){return r("el-option",{key:e.personId,attrs:{label:e.name,value:e.personId}})})),1)],1),r("el-form-item",{attrs:{label:"车辆上限",prop:"carTopLimit"}},[r("el-input",{model:{value:e.ruleForm.carTopLimit,callback:function(t){e.$set(e.ruleForm,"carTopLimit",t)},expression:"ruleForm.carTopLimit"}})],1),r("el-form-item",{attrs:{label:"车辆下限",prop:"carLowerLimit"}},[r("el-input",{model:{value:e.ruleForm.carLowerLimit,callback:function(t){e.$set(e.ruleForm,"carLowerLimit",t)},expression:"ruleForm.carLowerLimit"}})],1),r("el-form-item",{attrs:{label:"在岗时间段"}},[r("el-time-picker",{attrs:{"is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围","value-format":e.DATE_TIME_FMT},on:{change:e.timeline},model:{value:e.ruleForm.time,callback:function(t){e.$set(e.ruleForm,"time",t)},expression:"ruleForm.time"}})],1),r("el-form-item",{attrs:{label:"开放状态",prop:"openStatus"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.openStatus,callback:function(t){e.$set(e.ruleForm,"openStatus",t)},expression:"ruleForm.openStatus"}},e._l(e.openStatusList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"责任人",prop:"dutyPerson"}},[r("el-select",{attrs:{placeholder:"请选择",filterable:""},model:{value:e.ruleForm.dutyPerson,callback:function(t){e.$set(e.ruleForm,"dutyPerson",t)},expression:"ruleForm.dutyPerson"}},e._l(e.onlinePersonList,(function(e){return r("el-option",{key:e.personId,attrs:{label:e.name,value:e.personId}})})),1)],1),r("div",{staticClass:"bottom"},[r("el-button",{attrs:{size:e.SIZE},on:{click:e.cancel}},[e._v(" 取消 ")]),r("el-button",{attrs:{type:"primary",size:e.SIZE},on:{click:function(t){return e.preservation("ruleForm")}}},[e._v(" 确定 ")])],1)],1)],1)]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"bg-purple operation_map"},[r("div",{staticClass:"operation_map_button"},[r("el-button",{attrs:{type:"primary",disabled:e.DISABLED||this.regionPg&&this.regionPg.startRegion},on:{click:e.drawRegion}},[e._v(" 开始绘制区域 ")]),r("el-button",{attrs:{type:"primary",disabled:e.DISABLED||this.regionPg&&!1===this.regionPg.startRegion},on:{click:e.endDrawRegion}},[e._v(" 结束绘制区域 ")]),r("el-button",{attrs:{type:"primary",disabled:e.DISABLED},on:{click:e.removeDrawRegion}},[e._v(" 清楚区域 ")]),r("el-button",{attrs:{type:"primary",disabled:e.DISABLED},on:{click:e.startEdit}},[e._v(" 开始编辑 ")]),r("el-button",{attrs:{type:"primary",disabled:e.DISABLED},on:{click:e.endEdit}},[e._v(" 结束编辑 ")])],1),r("div",{staticClass:"trackPlaybackMap"},[null!==e.mapId&&void 0!==e.mapId?r("map-component",{ref:"pcMapView",staticStyle:{height:"100%",width:"100%"},attrs:{"map-id":e.mapId,"init-params":e.initParams},on:{startLoadingEve:e.startLoadingEve,endLoadingEve:e.endLoadingEve}}):e._e()],1)])])],1)],1)},i=[],l=(r("7db0"),r("a15b"),r("e439"),r("b64b"),r("d3b7"),r("ac1f"),r("1276"),r("96cf"),r("1da1")),s=r("5530"),u=r("63ae"),c=r("73c1"),p=r("14c1"),m=r("9a36"),d=r("5880"),f=r("0962"),b=r("3cfe"),h=r("9c88"),g=r("c9b7"),v={name:"Operation",data:function(){return{ruleForm:{areaName:"",areaType:"",personTopLimit:"",personLowerLimit:"",allowPerson:"",carTopLimit:"",carLowerLimit:"",dutyPerson:"",time:[new Date,new Date],openStatus:null},rules:{areaName:[{required:!0,message:"请输入区域名称",trigger:"blur"}],areaType:[{required:!0,message:"请选择区域类型",trigger:"chage"}],allowPerson:[{required:!0,message:"请输入人员范围",trigger:"chage"}],time:[{required:!0,message:"请输入在岗时间段",trigger:"chage"}],openStatus:[{required:!0,message:"请选择开放状态",trigger:"chage"}],dutyPerson:[{required:!0,message:"请选择责任人",trigger:"chage"}]},SIZE:m["a"].SIZE,type:null,areaId:null,DISABLED:!1,weekList:f["h"].getWeekList(),DATE_TIME_FMT:"yyyy-MM-dd HH:mm:ss",onlinePersonList:[],getAreaTypeList:f["b"].getAreaTypeList(),statusCodeList:f["b"].statusCodeList(),openStatusList:f["b"].openStatusList(),mapId:"psop-yzhq",initParams:{cameraAt:{x:0,y:160,z:80}},mapInfo:null,qyMapGroup:null,regionPg:null}},methods:(n=Object(c["b"])(1e3,{leading:!0}),a={cancel:function(){var e=this.$router.currentRoute.fullPath,t=this.visitedViews.find((function(t){return t.fullPath==e}));this.$EventBus.$emit("closeSelectedTag",Object(s["a"])({},t))},preservation:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;delete t.ruleForm.time,delete t.ruleForm.updateUser,delete t.ruleForm.updateTime,delete t.ruleForm.areaPath;var r=Object(s["a"])({},t.ruleForm);r.points=Object(g["a"])(t.regionPg.regionData),r.allowPerson=r.allowPerson.join(","),"bj"==t.type?Promise.resolve(t.setInfoVehicle.call(t,r)).then((function(){t.cancel()})).catch((function(e){})):"xz"==t.type&&(r.statusCode=1,r.points=Object(g["a"])(t.regionPg.regionData),r.version=1,Promise.resolve(t.addInfoVehicle.call(t,r)).then((function(){t.cancel()})).catch((function(e){})))}))},addInfoVehicle:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){Object(p["a"])(e).then((function(){t()})).catch((function(e){r(e)}))})));case 1:case"end":return t.stop()}}),t)})))()},setInfoVehicle:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){Object(p["i"])(e).then((function(){t()})).catch((function(e){r(e)}))})));case 1:case"end":return t.stop()}}),t)})))()},getInfoCamera:function(e){var t=this;Object(p["f"])({areaId:e}).then((function(e){var r=e.data[0];if(r&&Object.keys(r).length>0){for(var n in r){if("allowPerson"===n&&r[n]){var a=r[n].split(",");r[n]=a}t.$set(t.ruleForm,n,r[n])}t.showRegion()}})).catch((function(e){}))},timeline:function(e){this.$set(this.ruleForm,"effectStart",e[0]),this.$set(this.ruleForm,"effectEnd",e[1])},queryPersonAllList:function(){var e=this;Object(b["d"])().then((function(t){e.onlinePersonList=t.data})).catch((function(e){}))},startLoadingEve:function(){if(!this.mapId)return!1;this.mapInfo=null,this.qyMapGroup=null},endLoadingEve:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t&&r){e.next=2;break}return e.abrupt("return",!1);case 2:this.mapInfo=t,this.qyMapGroup=r;case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),drawRegion:function(){this.regionPg=this.qyMapGroup.startDrawRegion(this.$refs.pcMapView)},endDrawRegion:function(){this.regionPg.endDrawRegion()},removeDrawRegion:function(){this.regionPg.removeRegion()},showRegion:function(){var e=Object(g["b"])({points:this.ruleForm.areaPath.points,zLoc:this.ruleForm.zLoc});this.regionPg=this.qyMapGroup.showRegion(this.$refs.pcMapView,e)},startEdit:function(){this.regionPg.startEdit()},endEdit:function(){this.regionPg.endEdit()}},Object(u["a"])(a,"preservation",[n],Object.getOwnPropertyDescriptor(a,"preservation"),a),a),mounted:function(){if(this.type=this.$route.params.type,this.areaId=this.$route.params.areaId,"xz"===this.type){for(var e in this.ruleForm)this.$set(this.ruleForm,e,"");this.$set(this.ruleForm,"statusCode",1)}else"bj"===this.type?this.getInfoCamera(this.areaId):"ck"===this.type&&(this.DISABLED=!0,this.getInfoCamera(this.areaId))},computed:Object(s["a"])({},Object(d["mapState"])({visitedViews:function(e){return e.tagsView.visitedViews}})),created:function(){this.queryPersonAllList()},components:{mapComponent:h["default"]}},y=v,L=(r("e0e4"),r("2877")),w=Object(L["a"])(y,o,i,!1,null,"3195cbc4",null);t["default"]=w.exports},"3cfe":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"f",(function(){return l})),r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return u}));r("99af");var n=r("b775"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/person/addPerson",e)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/person/deletePerson/".concat(e.personId,"/").concat(e.status),e)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/person/queryPerson",e)},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["b"])("/person/updatePerson",e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])("/person/queryPersonByAddJob",e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n["a"])("/person/queryPersonAll",e)}},"453b":function(e,t,r){},e0e4:function(e,t,r){"use strict";var n=r("453b"),a=r.n(n);a.a}}]);