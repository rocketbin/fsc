(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{dcb0:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticStyle:{width:"100%",height:"78vh"}},[a("userInfoDialog"),a("avatarMenu"),a("div",{staticStyle:{display:"flex","flex-direction":"column",height:"100%",width:"100%"}},[a("transition",{staticStyle:{height:"100%"},attrs:{appear:"","enter-active-class":"animated slideInLeft"}},["messages"===e.template.center.load?a("div",{staticStyle:{height:"100%"}},[a("q-scroll-area",{ref:"scrollMessage",style:e.setBoardStyle()},[a("messages",{staticStyle:{height:"100%"},attrs:{setScrollBottom:e.scrollMessage,config:e.config}})],1)],1):e._e()]),a("transition",{staticStyle:{height:"100%"},attrs:{appear:"","enter-active-class":"animated slideInLeft"}},[e._v("\n-          "),"videos"===e.template.center.load?a("xcam",{staticStyle:{height:"100%"},attrs:{config:e.config}}):e._e()],1),a("transition",{staticStyle:{height:"100%"},attrs:{appear:"","enter-active-class":"animated slideInLeft"}},["streams"===e.template.center.load?a("streams"):e._e()],1),a("userInput",{staticStyle:{width:"100%","min-height":"10%"},attrs:{config:e.config}})],1)],1)},s=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("4db1")),i=a.n(n),c=a("c47a"),o=a.n(c),l=(a("bc3a"),a("2f62"));function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={props:["config"],computed:d({},Object(l["c"])(["template"]),{activeChamber:function(){return this.chamber},messages:function(){return i()(this.activeChamber.messages)}}),data:function(){return{user:{id:"",name:"",avatar:"https://tattooimages.biz/images/gallery/Upset_geometric_panda_in_profile_tattoo_design.png",abbr:!0},message:{text:""}}},methods:{scrollMessage:function(){var e=this.$refs.scrollMessage.scrollSize;this.$refs.scrollMessage.setScrollPosition(e,300)},setBoardStyle:function(){var e="height:100%;background-color:".concat(this.config.messagePanel.board.main.primary,";");return""===this.config.messagePanel.board.main.background&&null===this.config.messagePanel.board.main.background||"messages"===this.template.center.load&&(e+="background-repeat: no-repeat; background-size: cover;background-image: url(".concat(this.config.messagePanel.board.main.background,")")),e}},mounted:function(){this.setBoardStyle()}},p=u,f=a("2877"),h=Object(f["a"])(p,r,s,!1,null,null,null);t["default"]=h.exports}}]);