(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{2290:function(t,s,e){"use strict";e("c52f")},"9cb2":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{attrs:{padding:""}},[e("header",{staticClass:"bottom-border"},[e("div",{staticClass:"text-h5 q-pb-sm"},[t._v("\n      "+t._s(this.$t("basic_setting"))+"\n    ")])]),e("article",[e("div",[e("div",{staticClass:"configuration-variable q-pt-sm row"},[e("div",{staticClass:"col-4 m-t-4"},[e("span",{staticClass:"label-name"},[t._v(t._s(this.$t("appearence")))])]),e("div",{staticClass:"col-8 row"},[e("div",{staticClass:"col-12 m-b-8"},[e("q-checkbox",{staticClass:"rox-font",attrs:{size:"xs",label:this.$t("hideMenu")},model:{value:t.settings.hideMenu,callback:function(s){t.$set(t.settings,"hideMenu",s)},expression:"settings.hideMenu"}})],1),e("div",{staticClass:"col-12 m-b-8"},[e("q-checkbox",{staticClass:"rox-font",attrs:{size:"xs",label:this.$t("autoHide")},model:{value:t.settings.autoHide,callback:function(s){t.$set(t.settings,"autoHide",s)},expression:"settings.autoHide"}})],1)])]),e("div",{staticClass:"configuration-variable q-pt-sm row"},[e("div",{staticClass:"col-4 m-t-8"},[e("span",{staticClass:"label-name"},[t._v(t._s(this.$t("language")))])]),e("div",{staticClass:"select-item col-8 row"},[e("div",{staticClass:"col-12"},[e("q-select",{staticClass:"select-direct",attrs:{outlined:"",size:"xs",dense:!0,options:t.language,"data-cy":"select-direct"},on:{input:t.selectLocaleLanguage},model:{value:t.currentLanguage,callback:function(s){t.currentLanguage=s},expression:"currentLanguage"}})],1)])]),e("div",{staticClass:"configuration-variable q-pt-sm row"},[e("div",{staticClass:"col-4 m-t-4"},[e("span",{staticClass:"label-name"},[t._v(t._s(this.$t("start")))])]),e("div",{staticClass:"col-8 row"},[e("div",{staticClass:"col-12 m-b-8"},[e("q-checkbox",{staticClass:"rox-font",attrs:{color:"#606266",label:this.$t("autoStart"),size:"xs"},model:{value:t.settings.autoStart,callback:function(s){t.$set(t.settings,"autoStart",s)},expression:"settings.autoStart"}})],1),e("div",{staticClass:"col-12 m-b-8"},[e("q-checkbox",{staticClass:"rox-font",attrs:{size:"xs",label:this.$t("restore")},model:{value:t.settings.restore,callback:function(s){t.$set(t.settings,"restore",s)},expression:"settings.restore"}})],1),e("div",{staticClass:"col-12 m-b-8"},[e("q-checkbox",{staticClass:"rox-font",attrs:{size:"xs",label:this.$t("autoStartUnfinished")},model:{value:t.settings.autoStartUnfinished,callback:function(s){t.$set(t.settings,"autoStartUnfinished",s)},expression:"settings.autoStartUnfinished"}})],1)])]),e("div",{staticClass:"configuration-variable q-pt-sm row"},[e("div",{staticClass:"col-4 download_label"},[e("span",{staticClass:"label-name"},[t._v(t._s(this.$t("download_directory")))])]),e("div",{staticClass:"col-8 row"},[e("div",{staticClass:"col-12 "},[e("q-input",{staticClass:"directory-wd",attrs:{outlined:"",suffix:""},on:{click:function(s){return t.select_directory(!1)},clear:t.clear_select_directory},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"folder"}})]},proxy:!0}]),model:{value:t.settings.downloadDirectory,callback:function(s){t.$set(t.settings,"downloadDirectory",s)},expression:"settings.downloadDirectory"}})],1)])]),e("div",{staticClass:"configuration-variable row"},[e("div",{staticClass:"col-4 auto-upload"},[e("div",{staticClass:"label-name"},[t._v(t._s(t.$t("upload_directory")))])]),e("div",{staticClass:"col-8 row"},[e("div",{staticClass:"select-item col-12 m-b-8 select_label"},[e("q-input",{staticClass:"directory-wd",attrs:{outlined:"",dense:""},on:{click:function(s){return t.select_directory(!0)},clear:t.clear_select_directory},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"folder"}})]},proxy:!0}]),model:{value:t.settings.uploadDirectory,callback:function(s){t.$set(t.settings,"uploadDirectory",s)},expression:"settings.uploadDirectory"}}),e("q-checkbox",{staticClass:"q-mb-xs",model:{value:t.settings.autoUpload,callback:function(s){t.$set(t.settings,"autoUpload",s)},expression:"settings.autoUpload"}},[e("q-tooltip",[t._v("Enable")])],1)],1),e("q-checkbox",{attrs:{label:t.$t("unlimit_upload_amount")},model:{value:t.settings.unlimitUploadAmount,callback:function(s){t.$set(t.settings,"unlimitUploadAmount",s)},expression:"settings.unlimitUploadAmount"}},[e("q-tooltip",[t._v(t._s(t.$t("unlimit_upload_warning")))])],1)],1)]),e("div",{staticClass:"configuration-variable q-pt-sm row"},[e("div",{staticClass:"col-4 m-t-10"},[e("span",{staticClass:"label-name"},[t._v(t._s(this.$t("transport_setting")))])]),e("div",{staticClass:"col-8 row"},[e("div",{staticClass:"select-item col-12 m-b-8 select_label"},[e("q-checkbox",{staticStyle:{"margin-bottom":"16px"},model:{value:t.uploadLimit,callback:function(s){t.uploadLimit=s},expression:"uploadLimit"}}),e("q-input",{attrs:{disable:!t.uploadLimit,label:t.$t("upload_limit"),"bottom-slots":"",type:"number",outlined:"",dense:!0,rules:[t.positiveNumber]},scopedSlots:t._u([{key:"hint",fn:function(){return[e("div",{staticStyle:{"text-align":"right"}},[t._v("KB/s")])]},proxy:!0}]),model:{value:t.uploadSpeed,callback:function(s){t.uploadSpeed=t._n(s)},expression:"uploadSpeed"}})],1),e("div",{staticClass:"select-item col-12 m-b-8 select_label",staticStyle:{"line-height":"36px","vertical-align":"middle"}},[e("q-checkbox",{staticStyle:{"margin-bottom":"16px"},model:{value:t.downloadLimit,callback:function(s){t.downloadLimit=s},expression:"downloadLimit"}}),e("q-input",{attrs:{disable:!t.downloadLimit,label:t.$t("download_limit"),"bottom-slots":"",type:"number",outlined:"",dense:!0,rules:[t.positiveNumber],"stack-label":""},scopedSlots:t._u([{key:"hint",fn:function(){return[e("div",{staticStyle:{"text-align":"right"}},[t._v("KB/s")])]},proxy:!0}]),model:{value:t.downloadSpeed,callback:function(s){t.downloadSpeed=t._n(s)},expression:"downloadSpeed"}})],1)]),e("div",{staticClass:"col-4 q-mt-lg"},[e("div",{staticClass:"text text-right q-mr-md"},[t._v(t._s(t.$t("payed_user_share_rate")))])]),e("div",{staticClass:"col-6 q-mt-md"},[e("q-slider",{staticClass:"q-ml-xs",attrs:{min:50,max:100,step:5,label:"","label-always":"","label-value":t.payedUserShareRadix+"%"},model:{value:t.payedUserShareRadix,callback:function(s){t.payedUserShareRadix=s},expression:"payedUserShareRadix"}})],1)]),e("div",{staticClass:"configuration-variable q-pt-sm row"},[e("div",{staticClass:"col-4 m-t-4"},[e("span",{staticClass:"label-name col"},[t._v(t._s(this.$t("BT_setting")))])]),e("div",{staticClass:"col-8 row"},[e("div",{staticClass:"col-12 m-b-8"},[e("q-checkbox",{staticClass:"m-b-8",attrs:{size:"xs",label:this.$t("saveLinkSeed")},model:{value:t.settings.saveLinkSeed,callback:function(s){t.$set(t.settings,"saveLinkSeed",s)},expression:"settings.saveLinkSeed"}})],1),e("div",{staticClass:"col-12 m-b-8"},[e("q-checkbox",{staticClass:"m-b-8",attrs:{size:"xs",label:this.$t("autoDownload")},model:{value:t.settings.autoDownload,callback:function(s){t.$set(t.settings,"autoDownload",s)},expression:"settings.autoDownload"}})],1),e("div",{staticClass:"col-12 m-b-8"},[e("q-toggle",{staticClass:"m-b-8",attrs:{label:this.$t("continuousSeeding")},model:{value:t.settings.continuousSeeding,callback:function(s){t.$set(t.settings,"continuousSeeding",s)},expression:"settings.continuousSeeding"}})],1),!0!==this.settings.continuousSeeding?e("div",{staticClass:"select-item col-12 m-b-8"},[e("div",{staticClass:"select-item-label select-label"},[e("span",{},[t._v(t._s(this.$t("seedSharingRate")))])]),e("q-input",{attrs:{type:"number",dense:!0,outlined:""},model:{value:t.settings.seedSharingRate,callback:function(s){t.$set(t.settings,"seedSharingRate",t._n(s))},expression:"settings.seedSharingRate"}})],1):t._e(),!0!==this.settings.continuousSeeding?e("div",{staticClass:"select-item col-12 m-b-8"},[e("div",{staticClass:"select-item-label select-label"},[e("span",{},[t._v(t._s(this.$t("seedTime")))])]),e("q-input",{attrs:{type:"number",dense:!0,outlined:""},model:{value:t.settings.seedTime,callback:function(s){t.$set(t.settings,"seedTime",t._n(s))},expression:"settings.seedTime"}})],1):t._e()])]),e("div",{staticClass:"configuration-variable q-pt-sm row"},[e("div",{staticClass:"col-4 m-t-10"},[e("span",{staticClass:"label-name"},[t._v(t._s(this.$t("task_manage")))])]),e("div",{staticClass:"col-8 row"},[e("div",{staticClass:"select-item  col-12 m-b-8 select_label"},[e("div",{staticClass:"select-item-label select-label  "},[e("span",{},[t._v(t._s(this.$t("maximumDownloadNum")))])]),e("q-input",{attrs:{type:"number",dense:!0,outlined:""},model:{value:t.settings.maximumDownloadNum,callback:function(s){t.$set(t.settings,"maximumDownloadNum",t._n(s))},expression:"settings.maximumDownloadNum"}})],1),e("div",{staticClass:"select-item col-12 m-b-8 select_label"},[e("div",{staticClass:"select-item-label select-label"},[e("span",{},[t._v(t._s(this.$t("maximumConnectionsNum")))])]),e("q-input",{attrs:{size:"xs",outlined:"",type:"number",dense:!0},model:{value:t.settings.maximumConnectionsNum,callback:function(s){t.$set(t.settings,"maximumConnectionsNum",t._n(s))},expression:"settings.maximumConnectionsNum"}})],1),e("div",{staticClass:" col-12 m-b-8"},[e("q-checkbox",{staticClass:"m-b-8",attrs:{size:"xs",label:this.$t("breakpointContinuation"),color:"#5b5bfa"},model:{value:t.settings.breakpointContinuation,callback:function(s){t.$set(t.settings,"breakpointContinuation",s)},expression:"settings.breakpointContinuation"}})],1),e("div",{staticClass:" col-12 m-b-8"},[e("q-checkbox",{staticClass:"m-b-8",attrs:{size:"xs",label:this.$t("automaticSkip")},model:{value:t.settings.automaticSkip,callback:function(s){t.$set(t.settings,"automaticSkip",s)},expression:"settings.automaticSkip"}})],1),e("div",{staticClass:"col-12 m-b-8"},[e("q-checkbox",{staticClass:"m-b-8",attrs:{size:"xs",label:this.$t("afterNotification")},model:{value:t.settings.afterNotification,callback:function(s){t.$set(t.settings,"afterNotification",s)},expression:"settings.afterNotification"}})],1),e("div",{staticClass:"col-12 m-b-8"},[e("q-checkbox",{staticClass:"m-b-8",attrs:{size:"xs",label:this.$t("deleteConfirm")},model:{value:t.settings.deleteConfirm,callback:function(s){t.$set(t.settings,"deleteConfirm",s)},expression:"settings.deleteConfirm"}})],1)])])])]),e("q-footer",{staticClass:"q-pa-md",staticStyle:{background:"unset","backdrop-filter":"blur(5px)"}},[e("div",{staticClass:"row"},[e("q-btn",{staticClass:"submit",attrs:{loading:t.loading1,label:t.$t("submit")},on:{click:t.submit}}),e("q-btn",{staticClass:"bg-white text-black",attrs:{loading:t.loading2,label:t.$t("discard")},on:{click:t.discard}}),e("q-space"),e("q-btn",{attrs:{color:"red",label:t.$t("reset")},on:{click:t.resetSettings}})],1)])],1)},a=[],l=(e("ddb0"),e("a79d"),e("0c6d")),n=e("16ed"),o=e("2ef0");const c=t=>({...t});var d={name:"Settings",data(){const t=c(this.$store.state.setting.settings),s=Object(o["cloneDeep"])(t);return{settings:t,settingsOriginal:s,loading1:!1,loading2:!1,downloadLimit:t.downloadSpeed>0,uploadLimit:t.uploadSpeed>0,language:n["b"]}},computed:{currentLanguage:{get(){for(const t of this.language)if(t.value===this.$i18n.locale)return t.label;return"English"},set(t){this.$i18n.locale=t,this.settings.language=t}},downloadSpeed:{set(t){this.settings.downloadSpeed=1024*t},get(){return parseInt(this.settings.downloadSpeed/1024)||0}},uploadSpeed:{set(t){this.settings.uploadSpeed=1024*t},get(){return parseInt(this.settings.uploadSpeed/1024)||0}},payedUserShareRadix:{set(t){let s=t/100||.7;s<.5?s=.5:s>1&&(s=1),this.settings.payedUserShareRadix=s},get(){return parseInt(100*this.settings.payedUserShareRadix)}}},watch:{downloadLimit(t){t||(this.settings.downloadSpeed=-1)},uploadLimit(t){t||(this.settings.uploadSpeed=-1)}},methods:{async clear_select_directory(){await Object(l["a"])("set_setting",this.settings)},async select_directory(t){const s=await Object(l["a"])("select_directory");s.filePaths.length>1?this.$q.notify(this.$t("not_length")):t?this.settings.uploadDirectory=s.filePaths[0]:this.settings.downloadDirectory=s.filePaths[0]},syncSettingsConfig(){this.$store.dispatch("fetchSettings",this.settings).then((t=>{this.settings=c(t),this.settingsOriginal=Object(o["cloneDeep"])(this.settings)})).catch((t=>console.log(t)))},async submit(){return this.loading1=!0,this.$store.dispatch("set",this.settings).then((()=>{this.syncSettingsConfig(),this.$q.notify({message:this.$t("preferences_set_successfully"),position:"bottom-right",type:"positive",timeout:3e3})})).catch((()=>{this.$q.notify({message:this.$t("preferences_set_fail"),position:"bottom-right",type:"negative",timeout:3e3})})).finally((()=>{this.loading1=!1})),Object(l["a"])("update_torrent_settings",{uploadLimit:this.settings.uploadSpeed,downloadLimit:this.settings.downloadSpeed,maximumDownloadNum:this.settings.maximumDownloadNum,maximumConnectionsNum:this.settings.maximumConnectionsNum,highLevelRadix:this.settings.payedUserShareRadix})},discard(){if(void 0===this.settings.language||void 0===this.settingsOriginal.language)return;const t=this.settings.language.value,s=this.settingsOriginal.language.value;t!==s&&(this.$i18n.locale=s),this.syncSettingsConfig()},resetSettings(){this.$q.dialog({title:"Reset",message:"Reset all settings?",ok:{textColor:"red",color:"unset",flat:!0,label:"RESET"},cancel:{textColor:"unset",color:"unset",flat:!0,label:"Not now"}}).onOk((()=>{this.$store.dispatch("resetSettings").then((t=>{this.$i18n.locale=t.language,this.$q.notify({message:"Preferences resetted",position:"bottom-right",type:"positive",timeout:3e3})}))}))},selectLocaleLanguage(t){if(!t)return;console.log(this.$i18n.locale);const s=Object(n["a"])(t.value);s&&(console.log("Select:"+s),this.$i18n.locale=s)},positiveNumber(t){const s=this.$t("limit_input_error");return isNaN(t)?s:t>0||s}},destroyed(){this.discard()},created(){this.syncSettingsConfig()}},r=d,u=(e("2290"),e("2877")),m=e("9989"),g=e("8f8e"),p=e("ddd8"),b=e("27f9"),h=e("0016"),v=e("05c0"),f=e("c1d0"),C=e("9564"),x=e("7ff0"),_=e("9c40"),S=e("2c91"),$=e("eebe"),k=e.n($),y=Object(u["a"])(r,i,a,!1,null,"cb2b7736",null);s["default"]=y.exports;k()(y,"components",{QPage:m["a"],QCheckbox:g["a"],QSelect:p["a"],QInput:b["a"],QIcon:h["a"],QTooltip:v["a"],QSlider:f["a"],QToggle:C["a"],QFooter:x["a"],QBtn:_["a"],QSpace:S["a"]})},c52f:function(t,s,e){}}]);