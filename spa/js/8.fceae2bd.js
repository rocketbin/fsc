(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"494b":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{staticClass:"rounded-borders",staticStyle:{"max-height":"100vh",overflow:"hidden"},attrs:{view:"HHr lpr lfr"}},[i("login",{attrs:{cb:t.check,exist:t.changeExist,stay:!0}}),i("room-password"),i("room-invites-only"),t.header?i("q-header",{style:"z-index: 5;height:55px;background-color:"+t.beta.primary+";color:"+t.beta.text,attrs:{"height-hint":"98"}},[i("q-toolbar",[i("q-btn",{staticClass:"lt-md",staticStyle:{"`self-justify":"flex-start",color:"${beta.text}`"},attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:t.toggleDrawerLeft}}),t.beta.messagePanel.board.input.text.dark?i("img",{staticStyle:{height:"27px",width:"auto","margin-right":"10px"},attrs:{src:"statics/casmonLogo128-light.png"},on:{click:function(e){return t.goBack()}}}):i("img",{staticStyle:{height:"27px",width:"auto","margin-right":"10px"},attrs:{src:"statics/casmonLogo128.png"},on:{click:function(e){return t.goBack()}}}),i("q-separator",{attrs:{vertical:"",inset:""}}),i("q-toolbar-title",[i("div",{staticClass:"flex",staticStyle:{"flex-direction":"column"}})]),i("q-space"),i("nav-menu")],1)],1):t._e(),i("q-page-container",{staticStyle:{height:"100%",width:"100%",position:"fixed","padding-bottom":"0px"}},[i("router-view",{attrs:{config:t.beta}})],1),t.authenticated?i("q-drawer",{attrs:{onminimode:t.mini,side:"right",width:300},model:{value:t.rightDrawerOpen,callback:function(e){t.rightDrawerOpen=e},expression:"rightDrawerOpen"}},[i("right-drawer",{attrs:{config:t.beta}})],1):t._e(),t.authenticated?i("q-drawer",{staticClass:"bg-primary",attrs:{mini:t.miniLeft,"show-if-above":"",width:300},on:{"!click":function(e){return t.drawerClick(e)}},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("left-drawer",{style:"background-color:"+t.beta.secondary+";color:"+t.beta.text,attrs:{ministate:t.toggleMiniLeft,onminimode:t.miniLeft,config:t.beta}}),i("div",{staticClass:"q-mini-drawer-hide absolute",staticStyle:{top:"15px",right:"-17px"}},[i("q-btn",{style:"background-color:"+t.beta.primary+";color:"+t.beta.text,attrs:{dense:"",icon:"chevron_left"},on:{click:function(e){t.miniLeft=!0}}})],1)],1):t._e(),t.footer?i("q-footer",{style:"z-index: 5;height:55px;background-color:"+t.beta.primary+";color:"+t.beta.text},[i("q-toolbar",[i("q-toolbar-title",[t._v("Footer")])],1)],1):t._e()],1)},a=[],n=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("c47a")),o=i.n(n),s=i("2f62"),c=i("4de8"),l=i("7548"),h=i("5f02"),f=i("682b"),d=i("a215");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){o()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p={name:"chamber",mixins:[c["a"],l["a"],h["a"],f["a"],d["a"]],watch:{auth:function(t){this.drawers=t},onXcam:function(t){"videos"===t&&(this.miniLeft=!0,this.mini=!1)},chambers:{handler:function(t){this.templateLoaded||(this.beta=JSON.parse(JSON.stringify(t.config)),this.templateLoaded=!0)},deep:!0}},computed:g({},Object(s["c"])(["flags","active","template"]),{header:function(){return"streams"!==this.template.center.load&&"videos"!==this.template.center.load},footer:function(){return!1},auth:function(){return this.active.authenticated},onXcam:function(){return this.template.center.load}}),data:function(){return{drawers:!1,leftDrawerOpen:!0,rightDrawerOpen:!0,overlay:!0,mini:!1,miniLeft:!1,templateLoaded:!1}},methods:g({},Object(s["b"])(["_auth","_seemless","_displaySettings","_toggle"]),{goBack:function(){window.location.href=""},drawerClick:function(t){this.miniLeft&&(this.miniLeft=!1,t.stopPropagation())},changeExist:function(){},check:function(){this.getRoomData(this.$route.params.chamber),this.loadSession()},toggleMiniLeft:function(){this.miniLeft=!0},toggleDrawer:function(){this.rightDrawerOpen=!this.rightDrawerOpen},toggleDrawerLeft:function(){this.leftDrawerOpen=!this.leftDrawerOpen}}),mounted:function(){this.drawers=this.authenticated,this.authenticated?this.check():this._toggle("login")},sockets:{updateDisplaySettings:function(t){this._displaySettings(JSON.parse(JSON.stringify(t.config))),this.beta=JSON.parse(JSON.stringify(t.config)),this._seemless(JSON.parse(JSON.stringify(t.config)))}}},m=p,b=i("2877"),w=Object(b["a"])(m,r,a,!1,null,null,null);e["default"]=w.exports}}]);