(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{cffc:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticStyle:{height:"inherit"}},[s("media-modal"),s("media-accept"),s("userInfoDialog"),s("avatarMenu"),s("div",{staticClass:"flex flex-center ",staticStyle:{height:"80vh"}},[s("peers",{attrs:{room:e.room,user:e.user}}),e.onCall?e._e():s("div",{key:"flagcon",staticClass:"flex manual-animate",staticStyle:{"align-items":"center","min-height":"10%",width:"100%",margin:"5px"}}),s("transition-group",{staticClass:"flex flex-center",staticStyle:{width:"100vw",height:"80vh"},attrs:{appear:"","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[e.onCall?s("div",{key:"videoCon",staticClass:"bg-dark",staticStyle:{height:"70%",width:"100%"}},[s("video-board")],1):e._e(),s("div",{key:"DataCon",ref:"messageBoardClass",staticClass:"message-board  manual-animate "},[s("message-board",{attrs:{room:e.room,user:e.user}})],1)]),s("div",{staticClass:"flex flex-center",staticStyle:{height:"15vh",width:"100%",position:"relative"}},[s("div",{staticStyle:{width:"60%",position:"absolute",bottom:"8px","z-index":"50"}},[e.typestatus.status?s("div",{staticClass:"flex flex-center"},[s("span",{staticClass:"text-grey"},[s("q-spinner-dots",{attrs:{color:"grey",size:"2em"}}),e._v("\n              "+e._s(e.typestatus.message)+"\n            ")],1)]):e._e()])]),s("div",{staticClass:"particleClass",attrs:{id:"particleElementDialog"}})],1),s("q-footer",{staticClass:"bg-grey-4 ",staticStyle:{padding:"10px 40px"}},[s("q-input",{staticStyle:{"padding-bottom":"0"},attrs:{"bottom-slots":"",label:"say something...",filled:"",autogrow:"",autofocus:"",type:"textarea"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.pushLineBreak(t))}},scopedSlots:e._u([{key:"before",fn:function(){return[s("div",{staticClass:"flex flex-center bg-grey-5",staticStyle:{"flex-direction":"column",padding:"8px","border-radius":"5px","min-width":"60px"}},[s("q-avatar",{staticClass:"shadow-3"},[s("img",{attrs:{src:e.user.avatar}})]),s("small",{staticClass:"text-white",staticStyle:{padding:"3px",margin:"-10px 3px","font-size":"60%"}},[e._v("\n                "+e._s(e.user.name)+"\n              ")])],1)]},proxy:!0},{key:"after",fn:function(){return[s("q-btn",{attrs:{size:"sm",dense:"",flat:"",icon:"send"},on:{click:e.sendMessage}})]},proxy:!0}]),model:{value:e.message.text,callback:function(t){e.$set(e.message,"text",t)},expression:"message.text"}})],1)],1)},i=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("7f7f"),s("c47a")),r=s.n(n),o=s("2f62"),l=s("682b"),c=s("a215");function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(Object(s),!0).forEach((function(t){r()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var p={mixins:[l["a"],c["a"]],watch:{user:{handler:function(e){this.user.abbr||this._dialogs({userInfo:{open:!0,cb:this.saveUser}})},deep:!0},onCall:function(e){e?this.$refs.messageBoardClass.classList.add("intend"):this.$refs.messageBoardClass.classList.remove("intend"),console.log(this.$refs.messageBoardClass.classList)},inputText:function(e){e.length>0?this.roomTyping(!0):this.roomTyping(!1)}},computed:u({},Object(o["c"])(["rooms","dialogs"]),{onCall:function(){return this.dialogs.media.accept.open},inputText:function(){return this.message.text}}),data:function(){return{room:"",user:{id:"",name:"",avatar:"https://tattooimages.biz/images/gallery/Upset_geometric_panda_in_profile_tattoo_design.png",abbr:!0},message:{text:""}}},methods:u({},Object(o["b"])(["_dialogs"]),{revampOnVideo:function(){return this.onCall?"width:100%; height:20vh":"width:100%; height:inherit"},pushLineBreak:function(){this.message.text+="\n"},sendMessage:function(){this.roomMessage(this.message.text),this.message.text=""},saveUser:function(e,t){this.user.name=e,this.user.avatar=t,this.user.abbr=!0,this.joinRoom(),this.createSession(this.user)}}),mounted:function(){this.assignParticleBg("particleElementDialog")}},g=p,h=s("2877"),f=Object(h["a"])(g,a,i,!1,null,null,null);t["default"]=f.exports}}]);