(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{5498:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"Users",data:e.users,columns:e.columns,"row-key":"_id",loading:e.loadTable,dark:"",color:"amber",pagination:e.initialPagination}})],1)},r=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),l=a.n(i),o=a("2f62");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={computed:c({},Object(o["c"])(["activeUser"])),data:function(){return{users:[],loadTable:!1,initialPagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:20},columns:[{name:"email",required:!0,align:"left",field:"email",label:"email",sortable:!0},{name:"name",required:!0,field:"name",align:"left",label:"name",sortable:!0},{name:"alias",required:!0,align:"left",field:"alias",label:"alias",sortable:!0},{name:"accountStatus",required:!0,align:"left",field:"accountStatus",label:"accountStatus",sortable:!0},{name:"rooms",required:!0,align:"left",field:function(e){return e.connections.length},label:"rooms",sortable:!0}]}},methods:{getUsers:function(){var e=this;this.loadTable=!0,this.$axios.post("admin/users").then((function(t){Object.keys(t.data).map((function(a){e.users.push(t.data[a])})),e.loadTable=!1}))}},mounted:function(){this.getUsers(),console.log(this.activeUser)}},d=u,b=a("2877"),f=Object(b["a"])(d,n,r,!1,null,null,null);t["default"]=f.exports}}]);