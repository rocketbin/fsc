(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8b24":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"flex flex-center",staticStyle:{height:"120vh",width:"100%","background-image":"linear-gradient(to bottom right, white, grey)","margin-top":"-50px"}},[i("login",{attrs:{cb:t.emitRoom,exist:t.changeExist,stay:!1}}),i("div",{staticClass:"flex flex-center",staticStyle:{"flex-direction":"column","z-index":"1",position:"relative"}},[i("div",{staticStyle:{height:"150%",width:"150%"},attrs:{id:"particleElement"}}),i("index-notification"),i("div",{staticClass:"flex flex-center",staticStyle:{"flex-direction":"column",margin:"30px"}},[i("div",{staticClass:"flex flex-center ",staticStyle:{width:"520px","margin-bottom":"10px","flex-direction":"column"}},[i("div",{staticClass:"flex ",staticStyle:{"flex-direction":"row"}},[i("div",{staticStyle:{width:"85px",height:"63px"}},[t.onLoad?i("q-spinner-puff",{attrs:{color:"grey-8",size:"4.5em",thickness:"1"}}):t._e()],1),i("div",{staticClass:"gt-sm  absolute-center inline",staticStyle:{width:"320px"}},[i("q-input",{ref:"inputFocus",staticStyle:{"font-family":"'Quicksand Light Oblique Regular'"},attrs:{"input-style":{"font-size":"300%"},disable:t.onLoad,filled:"",borderless:""},on:{focus:t.inputFocus,blur:t.outFocus},model:{value:t.room,callback:function(e){t.room=e},expression:"room"}})],1),i("div",{staticClass:"lt-md  absolute-center inline",staticStyle:{width:"240px"}},[i("q-input",{ref:"inputFocus",staticStyle:{"font-family":"'Quicksand Light Oblique Regular'"},attrs:{"input-style":{"font-size":"140%"},disable:t.onLoad,filled:"",borderless:""},on:{focus:t.inputFocus,blur:t.outFocus},model:{value:t.room,callback:function(e){t.room=e},expression:"room"}})],1)])]),i("div",{staticClass:"full-width flex",staticStyle:{"justify-content":"center","margin-top":"30px"}},[i("q-btn",{ref:"buttonFocus",attrs:{flat:!t.inputActivated,outline:t.inputActivated,label:"join|create",align:"end",color:"blue-grey-8"},on:{click:t.createRoom}})],1)])],1)],1)},n=[],c=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("a481"),i("3b2b"),i("7f7f"),i("c47a")),r=i.n(c),a=i("682b"),s=i("bc3a"),l=i.n(s),u=i("2f62"),f=i("5f02");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m={computed:d({},Object(u["c"])(["rooms","roomCollections","active","activeUser"])),methods:d({},Object(u["b"])(["_notifications"])),mounted:function(){var t=this;this.$axios.get("notifications").then((function(e){t._notifications(e.data.notifications)}))}},b=i("4de8");function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var y={name:"PageIndex",mixins:[f["a"],a["a"],b["a"],m],computed:g({},Object(u["c"])(["rooms","roomCollections","notifications"])),data:function(){return{inputActivated:!1,room:"create a room.",onLoad:!1}},methods:g({},Object(u["b"])(["_collectRoom","_toggle","_auth","_pushNotification"]),{changeExist:function(){this.$existence=!0},createRoom:function(){this.authenticated?this.emitRoom():this._toggle("login")},emitRoom:function(){this._auth(!0),l.a.post(this.$hosted+"rooms/create",{name:this.filterString(this.room),type:"public",config:this.beta}).then((function(t){window.open("/chamber/".concat(t.data.name),"_blank")}))},inputFocus:function(){this.inputActivated=!0},outFocus:function(){this.inputActivated=!1},filterString:function(t){var e=new RegExp(/[^\w\s]/gi);return t.replace(e,"").replace(/\s/g,"")}}),sockets:{NewRoom:function(t){t.s?window.open("/room/".concat(t.d[0].name),"_new"):console.log(t.d)},newNotification:function(t){this._pushNotification(t),console.log(t,"received a new notif")},onJoin:function(t){window.open("/room/".concat(t.name),"_new")}},mounted:function(){var t=this;l.a.get(this.$hosted+"rooms").then((function(e){e.data.map((function(e){return t._collectRoom(e)}))}));var e={numval:320,animSpeed:1,opacity:1,densityArea:1280,polysides:8,stroke:1,lineWidth:1,lineOpacity:.4,moveSpeed:.2,moveBounce:!0,lineColor:"#555"};this.assignParticleBg("particleElement",e)}},O=y,v=i("2877"),w=Object(v["a"])(O,o,n,!1,null,null,null);e["default"]=w.exports}}]);