(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0e78":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=this,e=s.$createElement,i=s._self._c||e;return i("q-page",{attrs:{padding:""}},[i("header",{staticClass:"bottom-border"},[i("div",{staticClass:"text-h5 q-pb-sm"},[s._v("\n      "+s._s(this.$t("advancedSettings"))+"\n    ")])]),i("article",{staticClass:"q-pb-lg"},[i("div",[i("div",{staticClass:"configuration-variable q-pt-sm row "},[i("div",{staticClass:"col-4 m-t-4 "},[i("span",{staticClass:"label-name"},[s._v(s._s(this.$t("autoUpdate")))])]),i("div",{staticClass:"col-8 row"},[i("div",{staticClass:"col-12"},[i("q-checkbox",{staticClass:"rox-font",attrs:{size:"xs",label:this.$t("autoCheckUpdate")},model:{value:s.settings.autoCheckUpdate,callback:function(t){s.$set(s.settings,"autoCheckUpdate",t)},expression:"settings.autoCheckUpdate"}})],1),i("div",{staticClass:"col-12 text-grey"},[i("small",[s._v(s._s(s.$t("last_check_at"))+": "+s._s(s.lastUpdateCheckTimeString))])])]),i("div",{staticClass:"col-4 q-mt-sm"},[i("span",{staticClass:"label-name"},[s._v(s._s(s.$t("update_channel")))])]),i("div",{staticClass:"col-8 row q-mt-xs"},[i("q-select",{attrs:{options:s.availableVersions,outlined:"",dense:"",autocomplete:"stable","emit-value":""},model:{value:s.settings.versionChannel,callback:function(t){s.$set(s.settings,"versionChannel",t)},expression:"settings.versionChannel"}})],1)]),i("div",{staticClass:"configuration-variable q-pt-sm row"}),i("div",{staticClass:"configuration-variable q-bt-sm row"},[i("div",{staticClass:"col-4 m-t-8"},[i("span",{staticClass:"label-name col"},[s._v(s._s(this.$t("trackerService")))])]),i("div",{staticClass:"col-8 row"},[i("div",{staticClass:"col-10 m-b-8 m-l-10"},[i("q-select",{attrs:{outlined:"","use-input":"","use-chips":"",multiple:"","input-debounce":"0",options:s.trackerSourceOptions[0].options,dense:""},model:{value:s.settings.trackerSource,callback:function(t){s.$set(s.settings,"trackerSource",t)},expression:"settings.trackerSource"}})],1),i("div",{staticClass:"col-10 m-l-10 m-t-8 trackerArea"},[i("q-input",{attrs:{rows:"3","auto-complete":"off",placeholder:"Tracker Sources",outlined:"",type:"textarea"},model:{value:s.settings.trackerBt,callback:function(t){s.$set(s.settings,"trackerBt",t)},expression:"settings.trackerBt"}})],1),i("div",{staticClass:"col-12 m-l-10 row m-b-8 lookUp"},[i("div",{staticClass:"col-5 m-t-4 checkOutGroup"},[i("span",{staticClass:"wd"},[s._v(s._s(this.$t("recommendUse"))+"：")]),i("a",{staticClass:"checkDocument m-l-10",attrs:{target:"_blank",href:"https://github.com/ngosang/trackerslist"}},[s._v("ngosang/trackerslist\n                "),i("q-icon",{attrs:{size:"12",name:"flag"}})],1),i("a",{staticClass:"checkDocument m-l-10",attrs:{target:"_blank",href:"https://github.com/XIU2/TrackersListCollection"}},[s._v("XIU2/TrackersListCollection\n                "),i("q-icon",{attrs:{size:"12",name:"flag"}})],1)])]),i("div",{staticClass:"col-12 m-b-8"},[i("q-checkbox",{staticClass:"rox-font",attrs:{size:"xs",label:this.$t("autoUpdateTrackerServiceList")},model:{value:s.settings.autoUpdateTrackerServiceList,callback:function(t){s.$set(s.settings,"autoUpdateTrackerServiceList",t)},expression:"settings.autoUpdateTrackerServiceList"}})],1),i("div",{staticClass:"col-12 m-l-10 manual-update"},[i("q-btn",{attrs:{color:"primary",label:s.$t("manualUpdateTracker"),loading:s.updatingTracker,disable:s.updatingTracker},on:{click:s.updateTracker}})],1),i("div",{staticClass:"col-12 m-t-10 m-l-10 updatedate"},[s._v("\n            "+s._s(s.$t("last_check_at"))+": "+s._s(s.lastTrackerUpdateTime)+"\n          ")])])]),i("div",{staticClass:"configuration-variable q-pt-sm row",attrs:{id:"bind-ports"}},[i("div",{staticClass:"col-4 m-t-8"},[i("span",{staticClass:"label-name col"},[s._v(s._s(this.$t("listenPort")))])]),i("div",{staticClass:"col-8 row"},[i("div",{staticClass:"col-12 m-b-4 m-l-10"},[s._v("\n            "+s._s(this.$t("BTlistenPort"))+"\n          ")]),i("div",{staticClass:"col-6 m-b-8 m-l-10"},[i("div",[i("q-input",{attrs:{outlined:"",dense:!0},model:{value:s.settings.BTlistenPort,callback:function(t){s.$set(s.settings,"BTlistenPort",s._n(t))},expression:"settings.BTlistenPort"}})],1)]),i("div",{staticClass:"server_box"},[i("q-icon",{staticClass:"serverIcon",attrs:{size:"sm",color:"#909399","text-color":"#dcdfe6",outline:"",name:"casino"},on:{click:function(){return t.settings.BTlistenPort=t.randomPort()}}})],1),i("div",{staticClass:"col-12 m-b-4 m-l-10"},[s._v("\n            "+s._s(this.$t("DHTlistenPort"))+"\n          ")]),i("div",{staticClass:"col-6 m-b-8 m-l-10"},[i("div",[i("q-input",{attrs:{outlined:"",dense:!0},model:{value:s.settings.DHTlistenPort,callback:function(t){s.$set(s.settings,"DHTlistenPort",s._n(t))},expression:"settings.DHTlistenPort"}})],1)]),i("div",{staticClass:"server_box"},[i("q-icon",{staticClass:"serverIcon",attrs:{size:"sm",color:"#909399","text-color":"#dcdfe6",outline:"",name:"casino"},on:{click:function(){return t.settings.DHTlistenPort=t.randomPort()}}})],1)])]),i("div",{staticClass:"configuration-variable q-pt-sm row",attrs:{id:"associations"}},[i("div",{staticClass:"col-4 m-b-8"},[i("span",{staticClass:"label-name col"},[s._v(s._s(this.$t("downloadAgreement")))])]),i("div",{staticClass:"col-8 row"},[i("div",{staticClass:"col-12 m-b-4"},[s._v("\n            "+s._s(this.$t("setDefaultClientForFollowingProtocols"))+"\n          ")]),i("div",{staticClass:"col-12 "},[i("q-toggle",{attrs:{label:this.$t("magnetUrl")+"[ magnet:// ]"},model:{value:s.settings.bindMagnetUrl,callback:function(t){s.$set(s.settings,"bindMagnetUrl",t)},expression:"settings.bindMagnetUrl"}})],1),s.isWindows?[i("div",{staticClass:"col-12"},[i("q-toggle",{attrs:{label:this.$t("torrent_file")+"[ .torrent ]"},model:{value:s.settings.bindTorrentFile,callback:function(t){s.$set(s.settings,"bindTorrentFile",t)},expression:"settings.bindTorrentFile"}})],1),i("div",{staticClass:"col-12"},[i("q-toggle",{attrs:{label:this.$t("video_file")+"[ .mkv .avi ... ]"},model:{value:s.settings.bindVideoFile,callback:function(t){s.$set(s.settings,"bindVideoFile",t)},expression:"settings.bindVideoFile"}})],1),i("div",{staticClass:"col-12"},[i("q-toggle",{attrs:{label:this.$t("audio_file")+"[ .mp3 .wav ... ]"},model:{value:s.settings.bindAudioFile,callback:function(t){s.$set(s.settings,"bindAudioFile",t)},expression:"settings.bindAudioFile"}})],1)]:s._e()],2)])])]),i("q-footer",{staticClass:"q-pa-md",staticStyle:{background:"unset","backdrop-filter":"blur(5px)"}},[i("div",{staticClass:"row"},[i("q-btn",{staticClass:"submit",attrs:{loading:s.loading,label:this.$t("submit")},on:{click:s.submit}}),i("q-btn",{staticClass:"bg-white text-black",attrs:{loading:s.loading,label:this.$t("discard")},on:{click:s.discard}}),i("q-space"),i("q-btn",{attrs:{color:"red",label:s.$t("reset")},on:{click:s.resetSettings}})],1)])],1)},a=[],n=(e("a79d"),e("0c6d"));const l={aria2:"aria2/1.35.0",transmission:"Transmission/2.94",chrome:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",du:"netdisk;6.0.0.12;PC;PC-Windows;10.0.16299;WindowsBaiduYunGuanJia"},o="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt",r="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best_ip.txt",c="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt",d="https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_ip.txt",g="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best.txt",u="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_best_ip.txt",h="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all.txt",b="https://cdn.jsdelivr.net/gh/ngosang/trackerslist/trackers_all_ip.txt",p="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/best.txt",m="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/all.txt",v="https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/http.txt",k="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/best.txt",_="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/all.txt",C="https://cdn.jsdelivr.net/gh/XIU2/TrackersListCollection/http.txt",f=[{label:"ngosang/trackerslist",options:[{value:o,label:"ngosang_best",cdn:!1},{value:r,label:"ngosang_best_ip",cdn:!1},{value:c,label:"ngosang_all",cdn:!1},{value:d,label:"ngosang_all_ip",cdn:!1},{value:g,label:"ngosang_best",cdn:!0},{value:u,label:"ngosang_best_ip",cdn:!0},{value:h,label:"ngosang_all",cdn:!0},{value:b,label:"ngosang_all_ip",cdn:!0}]},{label:"XIU2/TrackersListCollection",options:[{value:p,label:"xiu2_best",cdn:!1},{value:m,label:"xiu2_all",cdn:!1},{value:v,label:"xiu2_http",cdn:!1},{value:k,label:"xiu2_best",cdn:!0},{value:_,label:"xiu2_all",cdn:!0},{value:C,label:"xiu2_http",cdn:!0}]}];var $=e("2ef0"),T=e("849b");const x=t=>{const{autoCheckUpdate:s,useProxyService:e,trackerSource:i,trackerBt:a,autoUpdateTrackerServiceList:n,listenPort:l,BTlistenPort:o,DHTlistenPort:r,bindMagnetUrl:c,bindTorrentFile:d,bindVideoFile:g,bindAudioFile:u,userAgent:h,RPCauthorizationkey:b,downloadDirectory:p,versionChannel:m}=t,v={autoCheckUpdate:s,useProxyService:e,trackerSource:i,trackerBt:a,autoUpdateTrackerServiceList:n,listenPort:l,BTlistenPort:o,DHTlistenPort:r,bindMagnetUrl:c,bindTorrentFile:d,bindVideoFile:g,bindAudioFile:u,userAgent:h,RPCauthorizationkey:b,downloadDirectory:p,versionChannel:m};return v};var w={name:"Settings",data(){const t=x(this.$store.state.setting.settings),s=Object($["cloneDeep"])(t);return{isWindows:navigator.userAgent.includes("Windows NT"),settings:t,settingsOriginal:s,trackerSourceOptions:f,isPwd:!0,updatingTracker:!1,availableVersions:["stable","nightly"],loading:!1}},computed:{lastUpdateCheckTimeString(){return new Date(this.$store.getters.getSettings.lastUpdateCheckTime).toLocaleString(this.$i18n.locale)},lastTrackerUpdateTime(){return new Date(this.$store.getters.getSettings.trackerLastUpdateTime).toLocaleString(this.$i18n.locale)}},methods:{async clear_select_directory(){await Object(n["a"])("set_setting",this.settings)},async select_directory(){const t=await Object(n["a"])("select_directory");t.filePaths.length>1?this.$q.notify(this.$t("not_length")):this.settings.downloadDirectory=t.filePaths[0]},selectUserAgent(t){const s=l[t];s&&(this.settings.userAgent=s)},syncSettingsConfig(){this.$store.dispatch("fetchSettings",this.settings).then((t=>{this.settings=x(t),this.settingsOriginal=Object($["cloneDeep"])(this.settings)}))},async submit(){this.loading=!0,this.$store.dispatch("set",this.settings).then((()=>{this.syncSettingsConfig(),this.$q.notify({message:this.$t("preferences_set_successfully"),position:"bottom-right",type:"positive",timeout:3e3})})).catch((()=>{this.$q.notify({message:this.$t("preferences_set_fail"),position:"bottom-right",type:"negative",timeout:3e3})})).finally((()=>{T["a"].emit("update_torrent_settings",{dhtPort:this.settings.DHTlistenPort,torrentPort:this.settings.BTlistenPort}),this.loading=!1}))},async updateTracker(){this.updatingTracker=!0;const t=await Object(n["a"])("update_tracker",this.settings.trackerSource);t&&t.data&&(t.data.length&&(this.settings.trackerBt=t.data.join("\n")),t.failure.length?this.$q.notify({message:this.$t("manualUpdateFail"),caption:t.failure.join("\n")}):this.$q.notify({message:this.$t("manualUpdateSuccess")}),t.success.length&&(this.updateTime=t.time)),this.updatingTracker=!1},discard(){this.syncSettingsConfig()},resetSettings(){this.$q.dialog({title:this.$t("reset"),message:this.$t("reset_all_settings"),ok:{textColor:"red",color:"unset",flat:!0,label:this.$t("reset")},cancel:{textColor:"unset",color:"unset",flat:!0,label:this.$t("not_now")}}).onOk((()=>{this.$store.dispatch("resetSettings").then((t=>{this.$i18n.locale=t.language,this.$q.notify({message:this.$t("preferences_resetted"),position:"bottom-right",type:"positive",timeout:3e3})}))}))},randomPort(){const t=[this.settings.BTlistenPort,this.settings.DHTlistenPort];let s=t[0];while(t.includes(s))s=Math.floor(5e3*Math.random())+17e3;return s},simulateProgress(t){this[`loading${t}`]=!0,setTimeout((()=>{this[`loading${t}`]=!1}),3e3)}},destroyed(){this.discard()},mounted(){if(this.syncSettingsConfig(),this.$router.currentRoute.hash){const t=document.querySelector(this.$router.currentRoute.hash);t&&t.scrollIntoView()}}},S=w,q=(e("74be"),e("2877")),U=e("9989"),P=e("8f8e"),y=e("ddd8"),F=e("9564"),D=e("9c40"),L=e("05c0"),B=e("27f9"),j=e("0016"),I=e("e7a9"),A=e("7ff0"),O=e("2c91"),Q=e("8572"),M=e("eebe"),H=e.n(M),X=Object(q["a"])(S,i,a,!1,null,"1a8eb030",null);s["default"]=X.exports;H()(X,"components",{QPage:U["a"],QCheckbox:P["a"],QSelect:y["a"],QToggle:F["a"],QBtn:D["a"],QTooltip:L["a"],QInput:B["a"],QIcon:j["a"],QBtnGroup:I["a"],QFooter:A["a"],QSpace:O["a"],QField:Q["a"]})},"3c13":function(t,s,e){},"74be":function(t,s,e){"use strict";e("3c13")}}]);