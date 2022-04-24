(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{3042:function(e,t,n){"use strict";n("55d8")},"55d8":function(e,t,n){},"65c5":function(e,t,n){},a180:function(e,t,n){"use strict";n("65c5")},b006:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[n("q-card-section",{staticClass:"panel"},e._l([{color:"positive",icon:"bug_report",label:"Open WebTorrent DevTools",handleClick:e.openWebtorrentDevTools},{color:"negative",icon:"delete_forever",label:"Clear Application Config",handleClick:e.delete_config},{color:"general",icon:"translate",label:"Get User Language",handleClick:e.getUsersLanguage},{color:"general",icon:"language",label:"Get Vue Locale",handleClick:e.getVueLocale},{color:"general",icon:"flag",label:"Get Quasar Locale",handleClick:e.getLocale}],(function(e,t){return n("alphabiz-button",{key:t,attrs:{color:e.color,icon:e.icon,label:e.label},on:{click:e.handleClick}})})),1)],1),n("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[n("q-tabs",{attrs:{align:"left","no-caps":"","narrow-indicator":""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},e._l([{name:"accountInfo",icon:"account_circle",label:"Account Info"},{name:"amplify",icon:"developer_board",label:"Amplify"},{name:"devInfo",icon:"info",label:"Dev Info"},{name:"urlConvert",icon:"link",label:"Alphabiz URL Convert"}],(function(t){return n("q-tab",e._b({key:t.name},"q-tab",t,!1))})),1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[n("q-tab-panel",{attrs:{name:"accountInfo"}},[n("account-tab-panel")],1),n("q-tab-panel",{attrs:{name:"amplify"}},[n("amplify-tab-panel")],1),n("q-tab-panel",{attrs:{name:"devInfo"}},[n("dev-info-tab-panel")],1),n("q-tab-panel",{attrs:{name:"urlConvert"}},[n("url-convert")],1)],1)],1)],1)},s=[],o=n("ed08"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"q-ma-sm"},[n("q-checkbox",{attrs:{label:"isTestEnv"},model:{value:e.isTest,callback:function(t){e.isTest=t},expression:"isTest"}})],1),n("h4",[e._v(e._s(e.$store.state.account.authState))]),"signedIn"===e.$store.state.account.authState?n("div",{staticClass:"row",staticStyle:{margin:"-4px"}},[e._l(e.$store.getters.accountUserInfo,(function(t,a){return[Array.isArray(t)?[n("div",{key:a,staticClass:"col-12 col-lg-6 q-pa-xs"},[n("q-card",{staticClass:"overflow-hidden",attrs:{flat:"",bordered:""}},[Array.isArray(t)?n("q-expansion-item",{attrs:{"content-inset-level":.4,label:a}},e._l(t,(function(t,a){return n("div",{key:a},[e._v(e._s(t)+"\n              ")])})),0):e._e()],1)],1)]:[n("div",{key:a,staticClass:"col-6 col-sm-3 col-lg-2 q-pa-xs"},[n("q-card",{staticClass:"overflow-hidden q-px-md q-py-sm",staticStyle:{"min-height":"66px"},attrs:{flat:"",bordered:""}},[n("div",{staticClass:"text-capitalize",staticStyle:{"font-size":"0.8rem",opacity:"0.8"}},[e._v(e._s(a)+"\n            ")]),n("div",{staticClass:"text-weight-bold text-no-wrap ellipsis"},[e._v(e._s(t))])])],1)]]}))],2):e._e(),"signedIn"===e.$store.state.account.authState?[n("q-separator",{staticStyle:{margin:"16px -16px"}}),n("div",{staticClass:"q-mb-sm"},[n("q-input",{staticStyle:{"max-width":"300px"},attrs:{label:"TestToken",dense:"",outlined:""},nativeOn:{paste:function(e){e.stopPropagation()}},model:{value:e.testToken,callback:function(t){e.testToken=t},expression:"testToken"}})],1),n("div",[n("alphabiz-button",{attrs:{label:"Add Credits 100","on-click":e.addCredits}})],1)]:e._e()],2)},r=[],l=n("3eaf");const c=new l["a"].Rest("ABDevRest");var d={name:"AccountTabPanel",inject:["isTestEnv"],data(){return{testToken:""}},computed:{isTest:{get(){return this.isTestEnv.getValue()},set(e){this.isTestEnv.setValue(e)}}},methods:{async addCredits(){try{const e=await c.post("/development/addCredits",{testToken:this.testToken});console.log(e)}catch(e){this.$q.notify({message:e.message,type:"negative",position:"bottom-right",timeout:5e3})}}}},u=d,b=n("2877"),v=n("8f8e"),f=n("f09f"),p=n("3b73"),m=n("eb85"),h=n("27f9"),g=n("eebe"),_=n.n(g),C=Object(b["a"])(u,i,r,!1,null,"5a400cb1",null),y=C.exports;_()(C,"components",{QCheckbox:v["a"],QCard:f["a"],QExpansionItem:p["a"],QSeparator:m["a"],QInput:h["a"]});var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"q-my-xs"},e._l(e.$amplify.amplifyTest,(function(e,t){return n("amplify-button",{key:t,staticClass:"q-ma-xs",attrs:{label:t,"on-click":function(){return e()}}})})),1),n("div",[n("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"testAPI","on-click":e.testAPI}}),n("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"toFinish","on-click":e.toFinish}})],1),n("div",[n("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"enableUserListener","on-click":e.enableUserListener}}),n("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"disableUserListener","on-click":e.disableUserListener}}),n("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"enablePublicListener","on-click":e.enablePublicListener}}),n("amplify-button",{staticClass:"q-ma-xs",attrs:{label:"disablePublicListener","on-click":e.disablePublicListener}})],1)])},k=[];const I=new l["a"].Rest("ABDevRest");var T={name:"AmplifyTabPanel",mounted(){},methods:{async enableUserListener(){await l["a"].GQL.enableUserListener(this.$store.state.account.sub),l["a"].GQL.addUserListener("hooks",(e=>{console.log("user:hooks",e)}))},async disableUserListener(){l["a"].GQL.disableUserListener()},async enablePublicListener(){await l["a"].GQL.enablePublicListener(),l["a"].GQL.addPublicListener("hooks",(e=>{console.log("pub:hooks",e)}))},async disablePublicListener(){l["a"].GQL.disablePublicListener()},async testAPI(){const e=await I.post("/test/transaction",{subA:"8df7f303-89e2-4231-b58e-c276b44ab19e",subB:"44b650d2-69a7-4faf-a900-38019dcc2cde",amount:1e3});console.log(e)},async toFinish(){const e=await this.$store.dispatch("CREDIT_PAY_DATA_FINISH",{transactionId:"d615d886-de57-4e5e-8d5c-e17c0e8bca30"});console.log(e)}}},L=T,x=Object(b["a"])(L,q,k,!1,null,"78db9fc0",null),S=x.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.devInfo.torrentStore?n("div",{staticClass:"full-width"},[e._v("Torrent Config Store:\n    "),n("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.torrentStore)}}}),n("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetTorrent}}),n("pre",[e._v(e._s(e.devInfo.torrentStore))])],1):e._e(),e.devInfo.settingStore?n("div",{staticClass:"full-width"},[e._v("Setting Config Store:\n    "),n("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.settingStore)}}}),n("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetSetting}}),n("pre",[e._v(e._s(e.devInfo.settingStore))])],1):e._e(),e._v("\n  We are using\n  "),e.devInfo.electronVer?n("div",{staticClass:"full-width"},[e._v("Electron "+e._s(e.devInfo.electronVer)+"\n  ")]):e._e(),e.devInfo.chromeVer?n("div",{staticClass:"full-width"},[e._v("Chrome "+e._s(e.devInfo.chromeVer)+"\n  ")]):e._e(),e.devInfo.nodeVer?n("div",{staticClass:"full-width"},[e._v("Node "+e._s(e.devInfo.nodeVer)+"\n  ")]):e._e(),n("div",[e._v("Quasar "+e._s(e.$q.version))]),n("div",[e._v("Vue "+e._s(e.vueVersion))]),n("div",[e._v(" "+e._s(e.$q.platform))]),e.devInfo.processArgv?n("div",{staticClass:"full-width"},[e._v("Process Argv "+e._s(e.devInfo.processArgv))]):e._e()])},A=[],P=n("2b0e");const $=n("ed08").isElectron(),Q=$?n("bdb9").ipcRenderer:null;var V={name:"DevInfoTabPanel",inject:["io"],data(){return{devInfo:{torrentStore:"",settingStore:""}}},methods:{open(e){this.io.emit("show_torrent_file",e)},resetTorrent(){$&&Q.send("reset-torrent")},resetSetting(){this.$store.dispatch("resetSettings").then((e=>{this.$i18n.locale=e.language,this.$q.notify("Reset success")}))}},mounted(){$&&(Q.on("dev-info",((e,t)=>{t.torrentStore&&(this.devInfo.torrentStore=t.torrentStore),t.settingStore&&(this.devInfo.settingStore=t.settingStore),t.electronVer&&(this.devInfo.electronVer=t.electronVer),t.chromeVer&&(this.devInfo.chromeVer=t.chromeVer),t.nodeVer&&(this.devInfo.nodeVer=t.nodeVer),t.argv&&(this.devInfo.processArgv=t.argv)})),Q.send("dev-info")),this.io.off("notify",this.notify),this.io.on("notify",this.notify)},computed:{vueVersion(){return P["a"].version}}},U=V,E=(n("3042"),Object(b["a"])(U,w,A,!1,null,"5f269e2f",null)),R=E.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  Alphabiz URL Convert\n  "),n("q-input",{staticClass:"q-my-md",attrs:{type:"text",label:"source url"},nativeOn:{paste:function(e){e.stopPropagation()}},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),n("q-btn",{attrs:{color:"primary",icon:"check",label:"Convert"},on:{click:e.convert}})],1)},z=[];const O=n("ed08").isElectron(),G=O?n("bdb9").ipcRenderer:null;var j={name:"DevInfoTabPanel",inject:["io"],data(){return{url:""}},methods:{convert(){this.url&&O&&(G.once("convert-url",((e,t)=>{this.url=t})),G.send("convert-url",this.url))}}},B=j,F=n("9c40"),W=Object(b["a"])(B,D,z,!1,null,"4cb3b9fe",null),J=W.exports;_()(W,"components",{QInput:h["a"],QBtn:F["a"]});const N=n("ed08").isElectron();var H={name:"Development",components:{AccountTabPanel:y,AmplifyTabPanel:S,DevInfoTabPanel:R,UrlConvert:J},data(){return{currentTab:"accountInfo"}},methods:{delete_config(){this.$q.electron.ipcRenderer.invoke("deleteConfig").then((e=>{this.$q.notify(e)}))},getLocale(){this.$q.notify(this.$q.lang.getLocale())},getVueLocale(){this.$q.notify(this.$i18n.locale)},getUsersLanguage(){o["localConfigs"].getSettingsItem("language").then((e=>{this.$q.notify({message:e,position:"bottom-right",type:"positive",timeout:3e3})})).catch((()=>{this.$q.notify({message:"未获取到数据项",position:"bottom-right",type:"negative",timeout:3e3})}))},openWebtorrentDevTools(){if(N)return n("bdb9").ipcRenderer.send("open-webtorrent-devtools")}}},Y=H,K=(n("a180"),n("9989")),M=n("a370"),X=n("429b"),Z=n("7460"),ee=n("adad"),te=n("823b"),ne=Object(b["a"])(Y,a,s,!1,null,"1c1567da",null);t["default"]=ne.exports;_()(ne,"components",{QPage:K["a"],QCard:f["a"],QCardSection:M["a"],QTabs:X["a"],QTab:Z["a"],QSeparator:m["a"],QTabPanels:ee["a"],QTabPanel:te["a"]})}}]);