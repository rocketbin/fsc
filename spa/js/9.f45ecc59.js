(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"22f7":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticStyle:{width:"100%",height:"100vh"}},[i("div",{staticClass:"full-width flex flex-center"},[i("div",{staticClass:"full-width",staticStyle:{"background-image":"linear-gradient(to bottom right, white, grey)",height:"100vh","margin-top":"-50px","background-position":"center center","background-size":"cover"}},[i("div",{staticClass:"flex flex-center row no-wrap",staticStyle:{position:"relative",height:"100%",width:"100%"}},[i("div",{staticStyle:{height:"25%",width:"25%"},attrs:{id:"particleElement2"}})]),i("div",{staticClass:" flex flex-center absolute-top",staticStyle:{"align-items":"center",height:"100%"}},[i("div",{staticClass:"row no-wrap ",staticStyle:{display:"flex","align-items":"center",background:"rgba(90,90,90,0.1)","border-radius":"5px"}},[i("span",{staticClass:"text-h1 text-white ",staticStyle:{"margin-right":"13px","border-radius":"5px"}},[t.loadState?i("q-spinner-puff"):i("q-icon",{attrs:{name:t.icon}})],1),i("div",{staticStyle:{"margin-right":"8px"}},[i("span",{class:"text-h4 "+(t.resentClass?"text-white":"text-grey-4")},[t._v("\n              "+t._s(t.label)+"\n            ")]),i("br"),i("span",{class:t.resentClass?"text-white":"text-grey-4"},[i("b",[t._v("\n                "+t._s(t.sublabel)+"\n              ")])])])])])])])])},s=[],n=i("682b"),o=(i("bc3a"),i("2f62"),i("5f02")),l=i("b3a4"),r=i("4de8"),c={mixins:[o["a"],n["a"],r["a"],l["a"]],computed:{resentClass:function(){return this.resent}},data:function(){return{verify:!1,loadState:!1,icon:"info",label:"processing...",sublabel:"please wait, while we verify your account"}},methods:{resendverification:function(){var t=this;this.resent=!this.resent,this.loadState=!0,this.$axios.post("users/verification/resend").then((function(e){t.loadState=!1}))},verifyToken:function(t){var e=this;this.loadState=!0,this.$axios.post("users/verify",{token:t}).then((function(t){e.loadState=!1,e.label="success",e.sublabel="your account has now been validated",e.icon="check",e.loginData(t)})).catch((function(t){e.loadState=!1,e.label="invalid",e.icon="block",e.sublabel="token is no longer valid, please request a new one"}))},loginData:function(t){this.$_s.authenticate(this,t),this.createSession(t.data.user),this._auth(!0),setTimeout((function(){window.location.href="/"}),3e3)}},mounted:function(){var t={numval:220,animSpeed:1,opacity:1,densityArea:1280,polysides:8,stroke:1,lineWidth:1,lineOpacity:.4,moveSpeed:.2,moveBounce:!0,lineColor:"#555"};this.assignParticleBg("particleElement2",t),this.verifyToken(this.$route.params.token)}},h=c,u=i("2877"),d=Object(u["a"])(h,a,s,!1,null,null,null);e["default"]=d.exports}}]);