(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"HHh Lpr lFf"}},[i("q-header",{attrs:{bordered:""}},[t.showAppBar?i("div",{staticStyle:{height:"32px"}}):t._e(),i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),i("q-toolbar-title",{staticClass:"toolbar-title",attrs:{shrink:""}},[t._v("\n        "+t._s(t.applicationTitle)+"\n      ")]),i("q-space"),i("q-badge",{staticClass:"q-mx-xs q-px-sm q-py-xs cursor-pointer non-selectable",attrs:{id:"version",label:"v"+t.appVersion,color:"secondary","text-color":"secondary"},on:{click:t.showAboutDialog}}),i("q-badge",{staticClass:"q-mx-xs q-px-sm q-py-xs cursor-pointer non-selectable",attrs:{id:"commit",label:t.appCommit,color:"secondary","text-color":"secondary"},on:{click:t.showAboutDialog}})],1)],1),i("left-drawer",{ref:"leftDrawer",model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}}),i("q-page-container",{staticClass:"bg-page text-page"},[i("keep-alive",{attrs:{include:"Player,Index"}},[i("router-view")],1)],1)],1)},a=[],s=i("eb32"),o=i("ebd6"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-drawer",{ref:"qDrawer",staticClass:"bg-page text-page",attrs:{value:t.value,side:"left",bordered:"desktop"===t.currentBehavior,"show-if-above":"",breakpoint:t.breakpoint},on:{input:function(e){return t.$emit("input",e)}}},["mobile"===t.currentBehavior?i("div",{staticStyle:{height:"32px"}}):t._e(),i("q-list",{staticClass:"non-selectable bg-page text-page q-pt-md"},t._l(t.essentialLinks,(function(e){return i("EssentialLink",t._b({key:e.id||e.title},"EssentialLink",e,!1))})),1),i("corner")],1)},c=[],l=(i("ddb0"),i("ddc3")),u=i.n(l),d=i("9224"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.children&&0!==t.children.length?t.children.length>0?i("div",[i("q-expansion-item",{attrs:{"expand-separator":"",icon:t.icon,label:t.titleString,caption:t.captionString,"default-opened":""}},t._l(t.children,(function(e){return i("EssentialLink",t._b({key:e.id||e.title,attrs:{level:.5}},"EssentialLink",e,!1))})),1)],1):t._e():i("div",[i("q-item",{staticClass:"bg-page text-page",attrs:{clickable:"","inset-level":t.level,active:t.isActive},on:{click:t.handleClick}},[t.icon?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.icon}})],1):t._e(),i("q-item-section",[i("q-item-label",[t._v(t._s(t.titleString))]),i("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.captionString))])],1)],1)],1)},h=[],m={name:"EssentialLink",props:{title:{type:[String,Function],required:!0},caption:{type:[String,Function],default:void 0},icon:{type:String,default:""},link:{type:String,default:"#"},query:{type:Object,default:void 0},level:{type:Number,default:0},children:{type:Array,default(){return[]}}},data(){return{isActive:!1}},computed:{titleString(){return"string"===typeof this.title?this.title:this.title()},captionString(){if(this.caption)return"string"===typeof this.caption?this.caption:this.caption()}},mounted(){this.updateIsActive(this.$route)},watch:{$route(t){this.updateIsActive(t)}},methods:{updateIsActive(t){const e=t.path;let i=e===this.link;if(i&&this.query){const e=t.query;i=Object.entries(this.query).findIndex((([t,i])=>e[t]!==i))<0}this.isActive=i},handleClick(){this.query?this.$router.push({path:this.link,query:this.query}):this.$router.push(this.link)}}},g=m,v=i("2877"),b=i("66e5"),f=i("4074"),_=i("0016"),$=i("0170"),w=i("3b73"),k=i("eebe"),q=i.n(k),y=Object(v["a"])(g,p,h,!1,null,null,null),S=y.exports;q()(y,"components",{QItem:b["a"],QItemSection:f["a"],QIcon:_["a"],QItemLabel:$["a"],QExpansionItem:w["a"]});var x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"corner absolute-bottom non-selectable",on:{click:t.handleClick}},["signedIn"===t.$store.state.account.authState?i("corner-menu",{on:{signOut:t.signOut,invite:t.invite}}):t._e(),i("q-item",{staticStyle:{height:"65px"},attrs:{clickable:"",exact:!0}},[t.$store.state.account.authState?[i("q-item-section",{staticClass:"corner-avatar",attrs:{avatar:""}},[i("q-icon",{staticStyle:{opacity:"0.8"},attrs:{size:"36px",name:"account_circle"}})],1),i("q-item-section",[i("q-item-label",[t._v(t._s(t.title))]),i("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.caption))])],1)]:[i("q-item-section",{staticClass:"corner-avatar",attrs:{avatar:""}},[i("q-spinner",{attrs:{size:"32px"}})],1),i("q-item-section",[i("span",{staticClass:"q-pr-lg"},[t._v(t._s(t.$t("account_loading")))])])]],2)],1)},C=[],I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-menu",{attrs:{"auto-close":"","touch-position":"","transition-show":"jump-up","transition-hide":"jump-down"}},[i("q-list",{staticClass:"corner-menu__list",staticStyle:{"min-width":"160px"}},[i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$router.push("/account/settings")}}},[i("q-item-section",{attrs:{"data-cy":"account-settings-btn"}},[t._v("\n        "+t._s(t.$t("account_account_setting"))+"\n      ")])],1),i("q-separator"),t.showInvite?i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("invite")}}},[i("q-item-section",{attrs:{"data-cy":"invite-btn"}},[t._v(t._s(t.$t("account_invitation")))])],1):t._e(),i("q-separator"),i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("signOut")}}},[i("q-item-section",{attrs:{"data-cy":"sign-out-btn"}},[t._v(t._s(t.$t("account_sign_out"))+"\n      ")])],1)],1)],1)},L=[],Q={name:"CornerMenu",computed:{showInvite(){return this.$store.state.account.invitationCode&&this.$store.state.account.invitationCode.findIndex((t=>0===t.invitation_state))>=0}}},O=Q,D=i("4e73"),B=i("1c1c"),A=i("eb85"),E=Object(v["a"])(O,I,L,!1,null,null,null),T=E.exports;q()(E,"components",{QMenu:D["a"],QList:B["a"],QItem:b["a"],QItemSection:f["a"],QSeparator:A["a"]});var z=i("48f4"),j={name:"Corner",components:{CornerMenu:T},computed:{info(){return"signedIn"===this.$store.state.account.authState?this.$store.getters.accountUserInfo:null},title(){return this.info?this.info.nickname?this.info.nickname:this.info.emailVerified?this.info.email.split("@")[0]:this.info.phoneNumberVerified?this.info.phoneNumber:"???":this.$t("account_want_to_join")},caption(){return this.info?`Lv. ${this.info.accountLevel}`:this.$t("account_sign_up_now")}},methods:{handleClick(){const t=this.$store.state.account.authState;t&&"signedIn"!==t&&this.$amplify.showSignedOutDialog()},signOut(){z["b"].showPositive("signed_out"),z["a"].updateState("signedOut"),(this.$route.path.startsWith("/account")||this.$route.path.startsWith("/credits"))&&this.$router.push("/"),z["a"].signOut().catch((()=>{}))},invite(){this.$router.push({path:"/account/settings",query:{call:"invite"}})}}},N=j,M=(i("fd61"),i("0d59")),W=Object(v["a"])(N,x,C,!1,null,"2e57ea3c",null),F=W.exports;q()(W,"components",{QItem:b["a"],QItemSection:f["a"],QIcon:_["a"],QItemLabel:$["a"],QSpinner:M["a"]});var J=i("0613");const P=!u.a.prerelease(d["a"]);var V={name:"LeftDrawer",components:{EssentialLink:S,Corner:F},props:{value:Boolean,currentTab:String},data(){return{breakpoint:1080,currentBehavior:null,resizeListener:null}},computed:{indexItem(){const t=t=>{const e=J["a"].getters[`get${t[0].toUpperCase()+t.slice(1)}TaskCount`];return`${this.$t(t)} (${e})`},e={id:"downloading",title:()=>t("downloading"),icon:"file_download",link:"/",query:{currentTab:"downloading"}},i={id:"uploading",title:()=>t("uploading"),caption:()=>J["a"].getters.isUploadingLoading?this.$t("loading"):null,icon:"file_upload",link:"/",query:{currentTab:"uploading"}},n={id:"downloaded",title:()=>t("downloaded"),icon:"done",link:"/",query:{currentTab:"downloaded"}};return{title:this.$t("home"),caption:this.$t("home_caption"),icon:"home",children:[e,i,n]}},accountSettingItem(){const t=[];return"signedIn"===this.$store.state.account.authState&&t.push({title:this.$t("account_account_setting"),icon:"account_circle",link:"/account/settings",caption:this.$t("account_setting_caption")}),t},developmentItem(){const t=[];try{P&&t.push({title:this.$t("development"),caption:this.$t("development_caption"),icon:"developer_mode",link:"/development"})}catch(e){}return t},essentialLinks(){const t={title:this.$t("player"),caption:this.$t("player_caption"),icon:"play_circle_filled",link:"/player"},e={title:this.$t("credits"),caption:this.$t("credits_caption"),icon:"savings",link:"/credits"},i={title:this.$t("basic_setting"),icon:"assignment",link:"/settings",caption:this.$t("basic_caption")},n={title:this.$t("advanced"),icon:"build",link:"/advancedSettings",caption:this.$t("advanced")},a={title:this.$t("settings"),caption:this.$t("settings_caption"),icon:"settings",children:[...this.accountSettingItem,i,n]};return[this.indexItem,t,e,a,...this.developmentItem]}},methods:{onWindowResize(){this.updateCurrentBehavior()},updateCurrentBehavior(){const t=window.innerWidth<=this.breakpoint-8?"mobile":"desktop";t!==this.currentBehavior&&(this.currentBehavior=t)}},created(){this.updateCurrentBehavior(),this.resizeListener=t=>this.onWindowResize(t),window.addEventListener("resize",this.resizeListener)},beforeDestroy(){window.removeEventListener("resize",this.resizeListener)}},H=V,U=i("9404"),R=Object(v["a"])(H,r,c,!1,null,null,null),G=R.exports;q()(R,"components",{QDrawer:U["a"],QList:B["a"]});var K=i("7f32");const X=i("ed08").isElectron();var Y={name:"MainLayout",components:{ApplicationBar:K["a"],LeftDrawer:G},data(){return{showAppBar:X,currentTab:"downloading",leftDrawerOpen:!1,appVersion:s["a"],appCommit:o["a"]}},computed:{leftDrawerBehavior(){return this.$refs.leftDrawer.currentBehavior},taskList(){return[{title:this.$t("downloading")+` (${this.taskNum.downloading})`,icon:"file_download",link:"/",trigger:"downloading"},{title:this.$t("uploading")+` (${this.taskNum.uploading})`,icon:"file_upload",link:"/",trigger:"uploading",loading:this.loadingStatus.uploading},{title:this.$t("downloaded")+` (${this.taskNum.downloaded})`,icon:"done",link:"/",trigger:"downloaded"}]},applicationTitle(){const t={Index:this.$route.query.currentTab,Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSettings:"basic_setting",AdvancedSettings:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):"Alphabiz"}},methods:{showAboutDialog(){const t=this.$root.$children[0];t.$refs.about.about_visible()}}},Z=Y,tt=(i("89d3"),i("4d5a")),et=i("e359"),it=i("65c6"),nt=i("9c40"),at=i("6ac5"),st=i("2c91"),ot=i("58a81"),rt=i("09e3"),ct=i("7ff0"),lt=Object(v["a"])(Z,n,a,!1,null,null,null);e["default"]=lt.exports;q()(lt,"components",{QLayout:tt["a"],QHeader:et["a"],QToolbar:it["a"],QBtn:nt["a"],QToolbarTitle:at["a"],QSpace:st["a"],QBadge:ot["a"],QPageContainer:rt["a"],QFooter:ct["a"],QDrawer:U["a"]})},"89d3":function(t,e,i){"use strict";i("e87e")},d410:function(t,e,i){},e87e:function(t,e,i){},eb32:function(t){t.exports=JSON.parse('{"a":"0.1.0-internal-202203011833-b0d7f71"}')},ebd6:function(t){t.exports=JSON.parse('{"a":"a18ddbc"}')},fd61:function(t,e,i){"use strict";i("d410")}}]);