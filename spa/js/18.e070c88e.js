(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{b3ce:function(t,e,i){"use strict";i.r(e);i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d");var r=i("c47a"),a=i.n(r),n=i("682b"),s=(i("bc3a"),i("2f62")),c=i("5f02"),o=i("b3a4"),l=i("4de8");function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}var p={mixins:[c.a,n.a,l.a,o.a],computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){a()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(s.c)(["activeUser"]),{resentClass:function(){return this.resent}}),data:function(){return{resent:!1,loadState:!1}},methods:{resendverification:function(){var t=this;this.resent=!this.resent,this.loadState=!0,this.$axios.post("users/verification/resend").then((function(e){t.loadState=!1}))}},mounted:function(){this.assignParticleBg("particleElement2",{numval:220,animSpeed:1,opacity:1,densityArea:1280,polysides:8,stroke:1,lineWidth:1,lineOpacity:.4,moveSpeed:.2,moveBounce:!0,lineColor:"#555"})}},u=i("2877"),h=Object(u.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticStyle:{width:"100vw",height:"100vh"}},[i("div",{staticClass:"full-width flex flex-center"},[i("div",{staticClass:"full-width",staticStyle:{"background-image":"linear-gradient(to bottom right, white, grey)",height:"100vh","margin-top":"-50px","background-position":"center center","background-size":"cover"}},[i("div",{staticClass:"flex flex-center row no-wrap",staticStyle:{position:"relative",height:"100%",width:"100%"}},[i("div",{staticStyle:{height:"25%",width:"25%"},attrs:{id:"particleElement2"}})]),i("div",{staticClass:" flex flex-center absolute-top",staticStyle:{"align-items":"center",height:"100%"}},[i("div",{staticClass:"row no-wrap ",staticStyle:{display:"flex","align-items":"center",background:"rgba(90,90,90,0.1)","border-radius":"5px"}},[i("span",{staticClass:"text-h1 text-white ",staticStyle:{"margin-right":"13px","border-radius":"5px"}},[t.loadState?i("q-spinner-puff"):i("q-icon",{attrs:{name:"info"}})],1),i("div",{staticStyle:{"margin-right":"8px"}},[i("span",{class:"text-h4 "+(t.resentClass?"text-white":"text-grey-4")},[t._v("\n              please verify your email\n            ")]),i("br"),i("span",{class:t.resentClass?"text-white":"text-grey-4"},[i("b",[t._v("\n                click your email to resend verification\n                "),i("a",{staticStyle:{cursor:"pointer"},attrs:{disabled:t.resentClass},on:{click:t.resendverification}},[t._v("\n                  ["+t._s(t.activeUser.email)+"]\n                ")])]),i("br"),i("i",{staticStyle:{color:"#853950"}},[i("small",[i("b",[t._v("\n                please check also your spam folder\n                ")])])])])])])])])])])}),[],!1,null,null,null);e.default=h.exports}}]);