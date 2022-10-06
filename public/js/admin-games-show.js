(self.webpackChunk=self.webpackChunk||[]).push([[102],{1692:(e,s,r)=>{"use strict";r.d(s,{Z:()=>t});const t={props:["id","small"]}},70306:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});var t=r(87757),o=r.n(t),a=r(9669),n=r.n(a);function c(e,s,r,t,o,a,n){try{var c=e[a](n),i=c.value}catch(e){return void r(e)}c.done?s(i):Promise.resolve(i).then(t,o)}const i={props:{id:{type:[Number,String],required:!0}},data:function(){return{gamePackageId:null}},computed:{component:function(){var e=this;return this.gamePackageId?function(){return r(99593)("./".concat(e.gamePackageId,"/resources/js/pages/show"))}:null}},created:function(){var e,s=this;return(e=o().mark((function e(){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().get("/api/history/games/".concat(s.id,"/package"));case 2:r=e.sent,t=r.data,s.gamePackageId=t.id;case 5:case"end":return e.stop()}}),e)})),function(){var s=this,r=arguments;return new Promise((function(t,o){var a=e.apply(s,r);function n(e){c(a,t,o,n,i,"next",e)}function i(e){c(a,t,o,n,i,"throw",e)}n(void 0)}))})()}}},69516:(e,s,r)=>{"use strict";r.d(s,{s:()=>t,x:()=>o});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(s){var t=s.on;return[r("v-btn",e._g({attrs:{icon:""}},t),[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),r("v-list",[r("v-list-item",{attrs:{to:{name:"admin.games.show",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-eye")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("View")))])],1)],1)],1)],1)},o=[]},60401:(e,s,r)=>{"use strict";r.d(s,{s:()=>t,x:()=>o});var t=function(){var e=this,s=e.$createElement;return(e._self._c||s)(e.component,{tag:"component",attrs:{id:e.id}})},o=[]},90820:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>j});var t=r(95231);const o={components:{GameMenu:r(7710).Z,GameDetail:t.Z},middleware:["auth","verified","2fa_passed","admin"],props:{id:{type:[Number,String],required:!0}},metaInfo:function(){return{title:this.$t("Game {0}",[this.id])}}};var a=r(51900),n=r(43453),c=r.n(n),i=r(4330),u=r(43776),l=r(5255),d=r(17024),p=r(66530),v=r(6571),m=r(57894),h=r(22515),g=r(40961),w=r(73845),f=(0,a.Z)(o,(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",lg:"8"}},[r("v-card",[r("v-toolbar",[r("v-btn",{attrs:{icon:""},on:{click:function(s){return e.$router.go(-1)}}},[r("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),r("v-toolbar-title",[e._v("\n            "+e._s(e.$t("Game {0}",[e.id]))+"\n          ")]),e._v(" "),r("v-spacer"),e._v(" "),r("game-menu",{attrs:{id:e.id}})],1),e._v(" "),r("v-card-text",[r("game-detail",{attrs:{id:e.id}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);const j=f.exports;c()(f,{VBtn:i.Z,VCard:u.Z,VCardText:l.ZB,VCol:d.Z,VContainer:p.Z,VIcon:v.Z,VRow:m.Z,VSpacer:h.Z,VToolbar:g.Z,VToolbarTitle:w.qW})},99593:(e,s,r)=>{var t={"./american-roulette/resources/js/pages/show":[56387,6065,160,2922],"./baccarat/resources/js/pages/show":[16522,6065,160,576],"./blackjack/resources/js/pages/show":[88841,6065,160,7096],"./caribbean-poker/resources/js/pages/show":[21416,6065,160,9072],"./casino-holdem/resources/js/pages/show":[56185,6065,160,4330],"./crash/resources/js/pages/show":[96097,6065,160,7295],"./crypto-prediction/resources/js/pages/show":[6089,6065,160,3031],"./dice-3d/resources/js/pages/show":[12923,6065,160,3621],"./dice/resources/js/pages/show":[6251,6065,160,6856],"./european-roulette/resources/js/pages/show":[30618,6065,160,6e3],"./game-providers/resources/js/pages/show":[78322,6065,160,2695],"./heads-or-tails/resources/js/pages/show":[62149,6065,160,4196],"./horse-racing/resources/js/pages/show":[19671,6065,160,9236],"./keno/resources/js/pages/show":[76870,6065,160,6982],"./lucky-wheel/resources/js/pages/show":[55029,6065,160,7829],"./multiplayer-blackjack/resources/js/pages/show":[13915,6065,160,7946],"./multiplayer-roulette/resources/js/pages/show":[28991,6065,160,6],"./plinko/resources/js/pages/show":[60288,6065,160,6883],"./sic-bo/resources/js/pages/show":[6483,6065,160,6389],"./slots-3d/resources/js/pages/show":[5689,6065,160,2781],"./slots/resources/js/pages/show":[7282,6065,160,2607],"./video-poker/resources/js/pages/show":[92111,6065,160,3234]};function o(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=t[e],o=s[0];return Promise.all(s.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(t),o.id=99593,e.exports=o}}]);
//# sourceMappingURL=admin-games-show.js.map