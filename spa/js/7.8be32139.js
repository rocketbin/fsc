(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{dcb0:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticStyle:{width:"100%",height:"78vh"}},[n("userInfoDialog"),n("invite-member"),n("avatarMenu"),n("div",{staticStyle:{display:"flex","flex-direction":"column",height:"100%",width:"100%"}},[n("transition",{staticStyle:{height:"100%"},attrs:{appear:"","enter-active-class":"animated slideInLeft"}},["messages"===e.template.center.load?n("div",{staticStyle:{height:"100%"}},[n("q-scroll-area",{ref:"scrollMessage",style:e.setBoardStyle()},[n("messages",{staticStyle:{height:"100%"},attrs:{setScrollBottom:e.scrollMessage,config:e.config}})],1)],1):e._e()]),n("transition",{staticStyle:{height:"100%"},attrs:{appear:"","enter-active-class":"animated slideInLeft"}},["videos"===e.template.center.load?n("xcam",{style:"height:100%;"+e.setBoardStyle(),attrs:{config:e.config}}):e._e()],1),n("transition",{staticStyle:{height:"100%"},attrs:{appear:"","enter-active-class":"animated slideInLeft"}},["streams"===e.template.center.load?n("streams",{style:"height:100%;"+e.setBoardStyle()}):e._e()],1),n("userInput",{staticStyle:{width:"100%","min-height":"12%",height:"12%"},attrs:{config:e.config}})],1)],1)},c=[],i=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("4db1")),o=n.n(i),a=n("c47a"),s=n.n(a),l=(n("bc3a"),n("2f62")),f=(n("7514"),n("3840"));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={mixins:[f["b"]],computed:d({},Object(l["c"])(["conference","rooms"])),methods:d({},Object(l["b"])(["_conference"])),sockets:{incomingConversationRequest:function(e){e._id!==this.conference._id&&0!==this.conference._id||(this._conference(e),e.initiator===this.user._id&&this.initiateCallRequest(e))},pullIncomingRelay:function(e){e._id!==this.conference._id&&0!==this.conference._id||this._conference(e),e.pending.length>0&&this.relayPendingConference(e)},conferenceRequest:function(e){e._s._id===this.conference._id&&this._conference(e._s),this.initiateCallResponse(e)},iceCandidateRegistry:function(e){this.registerIcePeering(e)},onGestures:function(e){e.user=this.rooms.members.find((function(t){return t._id===e.authorization})),e.displayed=!1,this.conference.data.gestures.push(e)},acceptIncomingConverse:function(e){e._s._id===this.conference._id&&this._conference(e._s),this.linkPeerSdp(e.data)}}},p=n("5f02"),g=n("1a84"),h=n("e439");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={computed:O({},Object(l["c"])(["configuration"])),methods:O({},Object(l["b"])(["_connections","_myStream","_dropConnection","_streamTracks","_resetParams","_resetConference"]),{RtcCreateFrom:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n&&console.log("implement renegotiation"),e.stream.rtc||(e.stream.rtc=new RTCPeerConnection(this.configuration.connection)),e.stream.emitCallTrack=function(e){t.$socket.emit("callTrack",e)},this.setEvents(e),this.attachStream(e),e},attachStream:function(e){var t=this;this.getMediaStream().then((function(n){e.stream.tracks=[],e.stream.data=n,e.stream.gain=0,t._streamTracks(n),t._myStream({active:!0,stream:n}),t.offer(e),t.setTracks(e,n)})).catch((function(e){console.log(e)}))},setTracks:function(e,t){t.getTracks().forEach((function(n){e.stream.rtc.addTrack(n,t)}))},setEvents:function(e){var t=this,n=!1;e.stream.rtc.onicecandidate=function(n){n.candidate&&t.$socket.emit("iceDistribution",{peer:e,candidate:n.candidate,authorization:t.user})},e.stream.rtc.addEventListener("icegatheringstatechange",(function(e){}),!1),e.stream.rtc.onnegotiationneeded=function(r){n||"stable"!=e.stream.rtc.signalingState||(n=!0,e.stream.sdp||(console.log("renego"),t.RtcCreateFrom(e,!0)))},e.stream.rtc.addEventListener("connectionstatechange",(function(n){e.stream.rtc.connectionState,"disconnected"!==e.stream.rtc.connectionState&&"closed"!==e.stream.rtc.connectionState||t._dropConnection(e)})),e.stream.rtc.ontrack=function(n){t._connections({data:e,gain:0,stream:n.streams[0]})}}})};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={mixins:[y],computed:v({},Object(l["c"])(["configuration","conference"]),{pending:function(){return this.configuration.pending}}),methods:v({},Object(l["b"])(["_streamTracks","_myStream"]),{RtcAnswerFrom:function(e){var t=this,n=this.pending.find((function(t){return t._id===e._id}));n||this.pending.push(e),e.qcandidates?n=e:e.qcandidates=[],e.stream.rtc=new RTCPeerConnection(this.configuration.connection),e.stream.emitCallTrack=function(e){t.$socket.emit("callTrack",e)},this.onAnswer(e)},onAnswer:function(e){var t=this;this.setEvents(e),this.getMediaStream().then((function(n){e.stream.tracks=[],t._streamTracks(n);try{t._myStream({active:!0,stream:n}),t.setTracks(e,n),t.answer(e)}catch(r){console.log(r)}}))},answer:function(e){var t=this;e.stream.rtc.setRemoteDescription(new RTCSessionDescription(e.stream.sdp)).then((function(){return e.qcandidates.map((function(t){e.stream.rtc.addIceCandidate(new RTCIceCandidate(t)).catch((function(e){console.log("@@ICE ERROR",e.message)}))})),e.stream.rtc.createAnswer()})).catch((function(e){console.log("eee",e.message)})).then((function(t){return e.stream.rtc.setLocalDescription(t)})).then((function(){e.stream.emitData={conference:t.conference._id,peer:e._id,init:"answer",authorization:t.user._id,sdp:e.stream.rtc.localDescription},t.template.center.load="videos"})).catch((function(t){console.log("".concat(t," from ").concat(e.email))}))}})};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={mixins:[g["a"],h["a"],_,y],computed:P({},Object(l["c"])(["configuration"])),methods:P({},Object(l["b"])(["_streamTracks","_myStream"]),{offer:function(e){var t=this;e.stream.rtc.createOffer().then((function(t){return e.stream.rtc.setLocalDescription(new RTCSessionDescription(t))})).then((function(){e.stream.emitCallTrack({conference:t.conference._id,peer:e._id,init:"call",authorization:t.user._id,sdp:e.stream.rtc.localDescription}),t.template.center.load="videos"})).catch((function(e){console.log(e)}))}})};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={mixins:[m,p["a"],S],props:["config"],watch:{pageLoad:{handler:function(e){"videos"===e.center.load?this.playBack.play():(this.playBack.pause(),this.playBack.currentTime=0)},deep:!0}},computed:D({},Object(l["c"])(["template"]),{activeChamber:function(){return this.chamber},pageLoad:function(){return this.template},messages:function(){return o()(this.activeChamber.messages)}}),data:function(){return{ringTone:"statics/swinging.ogg",playBack:null,firstLoad:!0,user:{id:"",name:"",avatar:"https://tattooimages.biz/images/gallery/Upset_geometric_panda_in_profile_tattoo_design.png",abbr:!0},message:{text:""}}},methods:{scrollMessage:function(){var e=this.$refs.scrollMessage.scrollSize,t=this.$refs.scrollMessage.getScrollPosition(),n=.3*e;this.firstLoad&&(n=0,e+=9999,this.firstLoad=!1),(t>n||20===this.$refs.scrollMessage.scrollSize)&&this.$refs.scrollMessage.setScrollPosition(1001*e,300)},onLoad:function(e,t){setTimeout((function(){console.log("loading messages!!!",e),t()}),2e3)},setBoardStyle:function(){var e="height:100%;background-color:".concat(this.config.messagePanel.board.main.primary,";");return""===this.config.messagePanel.board.main.background&&null===this.config.messagePanel.board.main.background||"messages"===this.template.center.load&&(e+="background-repeat: no-repeat; background-size: cover;background-image: url(".concat(this.config.messagePanel.board.main.background,")")),e}},mounted:function(){this.playBack=new Audio(this.ringTone),this.setBoardStyle()}},T=C,E=n("2877"),R=Object(E["a"])(T,r,c,!1,null,null,null);t["default"]=R.exports}}]);