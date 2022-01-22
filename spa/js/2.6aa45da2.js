(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0cf9":function(t,e,a){"use strict";a("762d")},"156a":function(t,e,a){"use strict";a("a71e")},"15ce":function(t,e,a){"use strict";a("e8f1")},"18a0":function(t,e,a){},"19bf":function(t,e,a){"use strict";a("d226")},"25b4":function(t,e,a){"use strict";a("53ef")},"29ed":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("header",{staticClass:"text-h5 q-pb-sm",staticStyle:{"border-bottom":"1px solid #bbb"}},[t._v("\n    "+t._s(this.$t("account_account_setting"))+"\n  ")]),a("article",[a("optional-information",{attrs:{loading:t.loading},on:{setLoading:t.setLoading}}),a("verification-fields",{attrs:{loading:t.loading},on:{setLoading:t.setLoading}}),a("OAuthManager",{ref:"oauthManager",attrs:{loading:t.loading},on:{setLoading:t.setLoading}}),a("security"),a("invitation",{ref:"invitation",attrs:{loading:t.loading},on:{setLoading:t.setLoading}})],1)])},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-form",{on:{submit:t.submit,reset:t.fetchUser}},[a("setting-fragment",{attrs:{label:t.$t("account_personal_information")}},[a("div",{staticClass:"account-setting__information"},[t._l(t.vm.items,(function(e,i){return["select"===e.type?a("alphabiz-select",{key:i,attrs:{readonly:t.loading,options:e.data.options},model:{value:t.vm.items[i].model,callback:function(e){t.$set(t.vm.items[i],"model",e)},expression:"vm.items[key].model"}}):"input"===e.type?a("alphabiz-input",{key:i,attrs:{readonly:t.loading,type:e.data.type,icon:e.data.icon,title:e.data.title,label:e.data.label,rules:e.data.rules},model:{value:t.vm.items[i].model,callback:function(e){t.$set(t.vm.items[i],"model",e)},expression:"vm.items[key].model"}}):t._e()]}))],2)]),a("setting-actions",{attrs:{loading:t.changing,"reset-label":t.$t("account_reset"),"submit-label":t.$t("account_submit")}})],1)},n=[],l=(a("a79d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-actions"},[a("q-btn",{staticClass:"bg-primary text-white",attrs:{size:"md",type:"submit",align:"around","no-wrap":"",label:t.submitLabel,flat:"",loading:t.loading,disable:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[a("q-spinner",{attrs:{color:"white"}})]},proxy:!0}])}),a("q-btn",{staticClass:"setting-btn",attrs:{size:"md",type:"reset",align:"around","no-wrap":"",label:t.resetLabel,flat:"",disable:t.loading}})],1)}),c=[],r={name:"SettingActions",props:{submitLabel:String,resetLabel:String,loading:Boolean}},d=r,u=(a("0cf9"),a("2877")),h=a("9c40"),m=a("0d59"),p=a("eebe"),g=a.n(p),f=Object(u["a"])(d,l,c,!1,null,"73a67682",null),b=f.exports;g()(f,"components",{QBtn:h["a"],QSpinner:m["a"]});var v=a("48f4"),_=a("ed08"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["setting-fragment"].concat(t.fragClz)},[a("div",{class:["setting-fragment__label"].concat(t.fragLabelClz)},[t._v(t._s(t.label))]),a("div",{class:["setting-fragment__content"].concat(t.fragContentClz)},[t._t("default")],2)])},y=[],C={name:"SettingFragment",props:{label:String},data(){return{fragClz:[],fragLabelClz:[],fragContentClz:[]}}},$=C,M=(a("19bf"),Object(u["a"])($,w,y,!1,null,null,null)),S=M.exports,D=a("8e4e"),V=a("2cb1"),x={name:"OptionalInformation",components:{SettingFragment:S,AlphabizInput:D["c"],AlphabizSelect:V["b"],SettingActions:b},props:{loading:Boolean},data(){return{vm:null,changing:!1}},created(){this.vm=new v["j"],this.fetchUser()},methods:{fetchUser(){this.vm.updateModel(Object(_["deepClone"])(this.$store.getters.accountUserOptionalInfo))},submit(){this.$emit("setLoading",!0),this.changing=!0,v["d"].changeAttributes(this.vm.formData).then((()=>v["g"].showPositive("changed"))).catch((t=>v["g"].showNegative(t.message))).finally((()=>{this.$emit("setLoading",!1),this.changing=!1}))}},watch:{"$store.getters.accountUserOptionalInfo"(t){this.fetchUser()}}},q=x,k=(a("5be0"),a("0378")),N=Object(u["a"])(q,s,n,!1,null,null,null),A=N.exports;g()(N,"components",{QForm:k["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("setting-fragment",{attrs:{label:t.$t("account_contact_information")}},[a("q-list",{staticClass:"account-setting__verification",attrs:{bordered:"",separator:""}},t._l(t.items,(function(e,i){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple",value:!t.loading,expression:"!loading"}],key:i,attrs:{clickable:!t.loading,readonly:t.loading},on:{click:e.handleClick}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticStyle:{opacity:"0.7"},attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.field||t.$t("account_not_set")))])],1),a("q-item-section",{attrs:{side:""}},[e.field&&e.verifiedLabel?a("q-badge",{attrs:{color:e.color,label:e.verifiedLabel}}):t._e()],1),a("q-tooltip",{attrs:{anchor:"center middle",self:"center middle","transition-show":"scale","transition-hide":"scale"}},[t._v("\n        "+t._s(e.verifiedLabel?t.$t("account_change"):t.$t("account_setting"))+"\n      ")])],1)})),1),a("setting-dialog",{attrs:{title:t.dialogVM.title},on:{submit:t.handleSubmit},scopedSlots:t._u([{key:"description",fn:function(){return[a("div",{staticClass:"q-pb-md",staticStyle:{"max-width":"284px"}},[t._v("\n        "+t._s(t.dialogVM.tip)+"\n      ")])]},proxy:!0}]),model:{value:t.dialogVM.show,callback:function(e){t.$set(t.dialogVM,"show",e)},expression:"dialogVM.show"}},[t.formVM?t._l(t.formVM.items,(function(e,i,o){return a("alphabiz-input",{directives:[{name:"show",rawName:"v-show",value:o===t.dialogVM.step,expression:"index === dialogVM.step"}],key:i,staticStyle:{width:"309px"},attrs:{required:o===t.dialogVM.step,autofocus:o===t.dialogVM.step,readonly:t.waiting,type:e.data.type,icon:e.data.icon,label:e.data.label,rules:e.data.rules},model:{value:t.formVM.items[i].model,callback:function(e){t.$set(t.formVM.items[i],"model",e)},expression:"formVM.items[key].model"}})})):t._e()],2)],1)},O=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{value:t.value,persistent:""},on:{input:t.handleInput}},[a("q-card",{staticStyle:{"min-width":"342px"}},[a("q-card-section",{staticClass:"q-px-lg q-pt-lg q-pb-sm"},[a("div",{staticClass:"text-h5 text-weight-bold q-pb-md"},[t._v(t._s(t.title))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$slots.description,expression:"$slots.description"}],staticStyle:{width:"100%",overflow:"hidden"}},[t._t("description")],2)]),a("q-form",{on:{submit:t.handleSubmit}},[a("q-card-section",{staticClass:"q-px-lg q-pt-none q-pb-lg q-gutter-y-lg"},[t._t("default")],2),a("q-separator",{staticClass:"q-mx-none"}),a("q-card-actions",{staticClass:"q-px-lg q-py-md",attrs:{align:"stretch",vertical:""}},[a("q-btn",{staticClass:"bg-primary text-white q-mb-xs",attrs:{flat:"",label:t.$t("account_submit"),size:"md",type:"submit",loading:t.loading,"data-cy":"submit-btn"},scopedSlots:t._u([{key:"loading",fn:function(){return[a("q-spinner",{attrs:{color:"white"}})]},proxy:!0}])}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("account_cancel"),size:"md",disable:t.loading,"data-cy":"cancel-btn"}})],1)],1)],1)],1)},F=[],Q={name:"SettingDialog",props:{value:Boolean,title:String},data(){return{loading:!1}},methods:{handleInput(t){this.$emit("input",t)},handleSubmit(){this.loading=!0,this.$emit("submit",null,(()=>{this.loading=!1}))}}},I=Q,L=(a("156a"),a("24e8")),z=a("f09f"),j=a("a370"),E=a("eb85"),R=a("4b7e"),B=a("7f67"),U=Object(u["a"])(I,P,F,!1,null,"0c58e531",null),W=U.exports;g()(U,"components",{QDialog:L["a"],QCard:z["a"],QCardSection:j["a"],QForm:k["a"],QSeparator:E["a"],QCardActions:R["a"],QBtn:h["a"],QSpinner:m["a"]}),g()(U,"directives",{ClosePopup:B["a"]});var G={name:"VerificationFields",components:{SettingFragment:S,SettingDialog:W,AlphabizInput:D["c"]},props:{loading:Boolean},data(){return{dialogVM:{show:!1,step:0,title:"title",tip:"tip"},handleSubmit:()=>null,formVM:null,waiting:!1}},computed:{items(){const t=t=>t?"green":"red",e=t=>t?this.$t("account_verified"):this.$t("account_unverified"),a={title:this.$t("account_email"),icon:"email",field:this.$store.state.account.email,color:t(this.$store.state.account.emailVerified),verifiedLabel:e(this.$store.state.account.emailVerified),handleClick:this.showEmailDialog},i={title:this.$t("account_phone_number"),icon:"phone",field:this.$store.state.account.phoneNumber,color:t(this.$store.state.account.phoneNumberVerified),verifiedLabel:e(this.$store.state.account.phoneNumberVerified),handleClick:this.showPhoneNumberDialog};return[a,i]}},methods:{showEmailDialog(){"NOMFA"===this.$store.state.account.preferredMFA?this.$store.state.account.phoneNumberVerified?(this.formVM=new v["a"],this.$store.state.account.email&&!this.$store.state.account.emailVerified&&this.formVM.updateModel({email:this.$store.state.account.email}),this.dialogVM.title=this.$t("account_change_email"),this.dialogVM.tip="",this.dialogVM.step=0,this.handleSubmit=(t,e)=>{this.waiting=!0;const a=()=>{e(),this.waiting=!1,this.formVM.clearData()};0===this.dialogVM.step?this.emailSend(a):this.emailSubmit(a)},this.dialogVM.show=!0):v["g"].showNegative("can_not_change_email"):v["g"].showNegative("can_not_change_email_phone_with_mfa_enabled")},emailSend(t){const e=this.formVM.formData;if(e.email===this.$store.state.account.email&&this.$store.state.account.emailVerified)return v["g"].showNegative("error_same_email"),void t();v["d"].changeEmailSend(e.email).then((()=>this.dialogVM.step+=1)).catch((({message:t})=>v["g"].showNegative(t))).finally(t)},emailSubmit(t){v["d"].changeEmailSubmit(this.formVM.formData.code).then((()=>{this.dialogVM.show=!1,v["g"].showPositive("changed")})).catch((t=>v["g"].showNegative(t.message))).finally(t)},showPhoneNumberDialog(){"NOMFA"===this.$store.state.account.preferredMFA?this.$store.state.account.emailVerified?(this.formVM=(new v["c"]).setDefaultValue(),this.$store.state.account.phoneNumber&&!this.$store.state.account.phoneNumberVerified&&this.formVM.updateModel({phoneNumber:this.$store.state.account.phoneNumber,phoneNumberCountryCode:this.$store.state.account.phoneNumberCountryCode}),this.dialogVM.title=this.$t("account_change_phone_number"),this.dialogVM.tip="",this.dialogVM.step=0,this.handleSubmit=(t,e)=>{this.waiting=!0;const a=()=>{e(),this.waiting=!1,this.formVM.clearData()};(0===this.dialogVM.step?this.phoneNumberSend:this.phoneNumberSubmit)(a)},this.dialogVM.show=!0):v["g"].showNegative("can_not_change_phone"):v["g"].showNegative("can_not_change_email_phone_with_mfa_enabled")},phoneNumberSend(t){const e=this.formVM.formData;if(e.phoneNumber===this.$store.state.account.phoneNumber&&this.$store.state.account.phoneNumberVerified)return v["g"].showNegative("error_same_phone"),void t();v["d"].changePhoneNumberSend(e).then((()=>this.dialogVM.step+=1)).catch((({message:t})=>v["g"].showNegative(t))).finally(t)},phoneNumberSubmit(t){v["d"].changePhoneNumberSubmit(this.formVM.formData.code).then((()=>{this.dialogVM.show=!1,v["g"].showPositive("changed")})).finally(t)}}},J=G,K=(a("6ea8"),a("1c1c")),Y=a("66e5"),H=a("4074"),X=a("0016"),Z=a("0170"),tt=a("58a81"),et=a("05c0"),at=a("714f"),it=Object(u["a"])(J,T,O,!1,null,null,null),ot=it.exports;g()(it,"components",{QList:K["a"],QItem:Y["a"],QItemSection:H["a"],QIcon:X["a"],QItemLabel:Z["a"],QBadge:tt["a"],QTooltip:et["a"]}),g()(it,"directives",{Ripple:at["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("setting-fragment",{attrs:{label:t.$t("account_security")}},[a("security-change-password"),a("security-m-f-a"),a("security-delete-account")],1)},nt=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-btn",{staticClass:"normal-grey q-mt-xs q-mr-sm",staticStyle:{"min-width":"120px"},attrs:{padding:"8px",flat:"",label:t.$t("account_change_password")},on:{click:function(e){t.showChangePasswordDialog=!t.showChangePasswordDialog}}},[a("setting-dialog",{attrs:{title:t.$t("account_change_password")},on:{submit:t.changePassword},scopedSlots:t._u([{key:"default",fn:function(){return t._l(t.vm.items,(function(e,i,o){return a("alphabiz-input",{key:i,staticStyle:{width:"309px"},attrs:{autofocus:0===o,required:!0,readonly:t.loading,type:e.data.type,icon:e.data.icon,label:e.data.label,rules:e.data.rules},model:{value:t.vm.items[i].model,callback:function(e){t.$set(t.vm.items[i],"model",e)},expression:"vm.items[key].model"}})}))},proxy:!0}]),model:{value:t.showChangePasswordDialog,callback:function(e){t.showChangePasswordDialog=e},expression:"showChangePasswordDialog"}})],1)},ct=[],rt={name:"SecurityChangePassword",components:{SettingDialog:W,AlphabizInput:D["c"]},data(){return{loading:!1,showChangePasswordDialog:!1,vm:new v["b"]}},watch:{showChangePasswordDialog(t){this.loading=!t,t||this.vm.clearData()}},methods:{changePassword(t,e){this.loading=!0;const a=()=>{e(),this.loading=!1},{currentPassword:i,newPassword:o}=this.vm.formData;v["d"].changePassword(i,o).then((()=>{this.showChangePasswordDialog=!1,v["g"].showPositive("password_has_been_reset")})).catch((t=>{const e="Incorrect username or password."===t.message?"incorrect_original_password":t.message;v["g"].showNegative(e)})).finally(a)}}},dt=rt,ut=(a("d98f"),Object(u["a"])(dt,lt,ct,!1,null,"b11c8f1a",null)),ht=ut.exports;g()(ut,"components",{QBtn:h["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-btn",{staticClass:"normal-grey q-mt-xs q-mr-sm",staticStyle:{"min-width":"120px"},attrs:{padding:"8px",flat:"",label:t.$t("account_set_mfa_type")},on:{click:t.handleClick}},[a("setting-dialog",{attrs:{title:t.$t("account_set_mfa_type")},on:{submit:t.setMfaType},model:{value:t.showSetMfaTypeDialog,callback:function(e){t.showSetMfaTypeDialog=e},expression:"showSetMfaTypeDialog"}},[a("template",{slot:"description"},[a("div",{staticStyle:{width:"309px"}},[t._v("\n        "+t._s(t.$t("account_tip_config_mfa"))+"\n      ")]),a("div",{staticClass:"q-pt-sm q-gutter-xs",staticStyle:{width:"309px"}},[t.mfaTypeOptions[0].disable?a("div",{staticClass:"normal-grey rounded-borders q-pa-md"},[t._v(t._s(t.$t("account_tip_can_not_enable_totp_mfa"))+"\n        ")]):t._e(),t.mfaTypeOptions[1].disable?a("div",{staticClass:"normal-grey rounded-borders q-pa-md"},[t._v(t._s(t.$t("account_tip_can_not_enable_sms_mfa"))+"\n        ")]):t._e()])]),a("template",{slot:"default"},[a("q-option-group",{attrs:{disable:t.loading,options:t.mfaTypeOptions,type:"radio"},model:{value:t.mfaType,callback:function(e){t.mfaType=e},expression:"mfaType"}})],1)],2),a("setting-dialog",{attrs:{title:t.$t("account_disable_mfa")},on:{submit:t.setNoMfa},model:{value:t.showNoMfaDialog,callback:function(e){t.showNoMfaDialog=e},expression:"showNoMfaDialog"}},[a("template",{slot:"description"},["SMS_MFA"===t.$store.state.account.preferredMFA?a("div",{staticStyle:{width:"309px"}},[t._v("\n        "+t._s(t.$t("account_phone_sent_tip"))+"\n        "),a("div",{staticClass:"inline-block normal-grey q-py-xs q-px-md rounded-borders"},[t._v("\n          "+t._s(t.$store.state.account.phoneNumber)+"\n        ")])]):a("div",{staticStyle:{width:"309px"}},[t._v(t._s(t.$t("account_tip_verify_totp")))])]),a("template",{slot:"default"},["SMS_MFA"===t.$store.state.account.preferredMFA?a("alphabiz-input",{attrs:{autofocus:"",required:"",type:"number",readonly:t.loading,label:t.$t(t.smsVerifyCodeVM.label),icon:t.smsVerifyCodeVM.icon},model:{value:t.smsVerifyCodeVM.value,callback:function(e){t.$set(t.smsVerifyCodeVM,"value",e)},expression:"smsVerifyCodeVM.value"}}):a("alphabiz-input",{attrs:{autofocus:"",required:"",type:"number",readonly:t.loading,label:t.$t(t.totpVerifyCodeVM.label),icon:t.totpVerifyCodeVM.icon},model:{value:t.totpVerifyCodeVM.value,callback:function(e){t.$set(t.totpVerifyCodeVM,"value",e)},expression:"totpVerifyCodeVM.value"}})],1)],2),a("setting-dialog",{attrs:{title:t.$t("account_sms_mfa")},on:{submit:t.setSmsMfa},model:{value:t.showSmsDialog,callback:function(e){t.showSmsDialog=e},expression:"showSmsDialog"}},[a("template",{slot:"description"},[a("div",{staticStyle:{width:"309px"}},[t._v("\n        "+t._s(t.$t("account_phone_sent_tip"))+"\n        "),a("div",{staticClass:"inline-block normal-grey q-py-xs q-px-md rounded-borders"},[t._v("\n          "+t._s(t.$store.state.account.phoneNumber)+"\n        ")])])]),a("template",{slot:"default"},[a("alphabiz-input",{attrs:{autofocus:"",required:"",type:"number",readonly:t.loading,label:t.$t(t.smsVerifyCodeVM.label),icon:t.smsVerifyCodeVM.icon},model:{value:t.smsVerifyCodeVM.value,callback:function(e){t.$set(t.smsVerifyCodeVM,"value",e)},expression:"smsVerifyCodeVM.value"}})],1)],2),a("setting-dialog",{attrs:{title:t.$t("account_totp_mfa")},on:{submit:t.setTotpMfa},model:{value:t.showTotpDialog,callback:function(e){t.showTotpDialog=e},expression:"showTotpDialog"}},[a("template",{slot:"description"},[a("ol",{staticClass:"q-ma-none q-pl-md",staticStyle:{"max-width":"324px",overflow:"hidden"}},[a("li",{directives:[{name:"show",rawName:"v-show",value:""!==t.totpSecretCode,expression:"totpSecretCode!==''"}]},[t._v(t._s(t.$t("account_tip_setup_totp")))]),a("li",[t._v(t._s(t.$t("account_tip_verify_totp")))])])]),a("template",{slot:"default"},[a("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.totpSecretCode,expression:"totpSecretCode!==''"}]},[a("div",{staticClass:"qrcode q-mx-auto",on:{click:t.copyCode}},[a("canvas",{ref:"qrcode",staticClass:"full-width full-height"}),a("div",[t._v(t._s(t.$t("account_copy_code")))])])]),a("alphabiz-input",{attrs:{autofocus:"",required:"",type:"number",readonly:t.loading,label:t.$t(t.totpVerifyCodeVM.label),icon:t.totpVerifyCodeVM.icon},model:{value:t.totpVerifyCodeVM.value,callback:function(e){t.$set(t.totpVerifyCodeVM,"value",e)},expression:"totpVerifyCodeVM.value"}}),a("p",{directives:[{name:"show",rawName:"v-show",value:""===t.totpSecretCode,expression:"totpSecretCode===''"}],staticClass:"q-mb-none"},[t._v(t._s(t.$t("account_no_totp"))+"\n        "),a("a",{staticClass:"text-primary cursor-pointer hover-underline",attrs:{disable:t.loading},on:{click:t.setupTotp}},[t._v("\n        "+t._s(t.$t("account_setup_totp"))+"\n        ")])])],1)],2)],1)},pt=[],gt=(a("5319"),a("d055")),ft=a.n(gt),bt=a("5723"),vt={name:"SecurityMFA",components:{SettingDialog:W,AlphabizInput:D["c"]},data(){return{loading:!1,mfaType:this.$store.state.account.preferredMFA,showSetMfaTypeDialog:!1,showNoMfaDialog:!1,showSmsDialog:!1,smsVerifyCodeVM:{value:"",label:"account_verification_code",icon:"shield"},showTotpDialog:!1,totpSecretCode:"",totpVerifyCodeVM:{value:"",label:"account_totp",icon:"shield"}}},computed:{mfaTypeOptions(){const t=!this.$store.state.account.email||!this.$store.state.account.phoneNumber||!this.$store.state.account.emailVerified||!this.$store.state.account.phoneNumberVerified,e=t;return[{label:this.$t("account_totp_mfa"),value:"SOFTWARE_TOKEN_MFA",disable:e},{label:`${this.$t("account_sms_mfa")} (${this.$t("account_not_recommend")})`,value:"SMS_MFA",disable:t},{label:this.$t("account_disable_mfa"),value:"NOMFA"}]}},watch:{showSetMfaTypeDialog(t){this.loading=!t,t||(this.mfaType=this.$store.state.account.preferredMFA)},showNoMfaDialog(t){t||(this.totpSecretCode="",this.totpVerifyCodeVM.value="",this.smsVerifyCodeVM.value="")},showSmsDialog(t){t||(this.smsVerifyCodeVM.value="")},showTotpDialog(t){t||(this.totpSecretCode="",this.totpVerifyCodeVM.value="")}},methods:{handleClick(){const t=!this.$store.state.account.email||!this.$store.state.account.phoneNumber||!this.$store.state.account.emailVerified||!this.$store.state.account.phoneNumberVerified;t?v["g"].showNegative("error_can_not_enable_mfa"):this.showSetMfaTypeDialog=!this.showSetMfaTypeDialog},async setMfaType(t,e){if(this.mfaType===this.$store.state.account.preferredMFA)return e(),void(this.showSetMfaTypeDialog=!1);const a=()=>{e(),this.loading=!1};try{this.loading=!0,"NOMFA"===this.mfaType?("SMS_MFA"===this.$store.state.account.preferredMFA&&await Object(bt["s"])("phone_number"),this.showNoMfaDialog=!0):"SMS_MFA"===this.mfaType?(await Object(bt["s"])("phone_number"),this.showSmsDialog=!0):"SOFTWARE_TOKEN_MFA"===this.mfaType&&(this.showTotpDialog=!0)}catch({message:i}){v["g"].showNegative(i)}finally{a()}},async setNoMfa(t,e){try{this.loading=!0,"SMS_MFA"===this.$store.state.account.preferredMFA?await Object(bt["u"])("phone_number",this.smsVerifyCodeVM.value):await Object(bt["q"])(this.totpVerifyCodeVM.value),await v["d"].setMfaType(this.mfaType),v["g"].showPositive("changed"),this.showNoMfaDialog=!1,this.showSetMfaTypeDialog=!1}catch({message:a}){v["g"].showNegative(a)}finally{e(),this.loading=!1}},async setSmsMfa(t,e){try{this.loading=!0,await Object(bt["u"])("phone_number",this.smsVerifyCodeVM.value),await v["d"].setMfaType(this.mfaType),v["g"].showPositive("changed"),this.showSmsDialog=!1,this.showSetMfaTypeDialog=!1}catch({message:a}){v["g"].showNegative(a)}finally{e(),this.loading=!1}},async setTotpMfa(t,e){try{this.loading=!0,await Object(bt["q"])(this.totpVerifyCodeVM.value),await v["d"].setMfaType(this.mfaType),v["g"].showPositive("changed"),this.showTotpDialog=!1,this.showSetMfaTypeDialog=!1}catch({message:a}){v["g"].showNegative(a)}finally{e(),this.loading=!1}},async setupTotp(){this.loading=!0,this.totpSecretCode=await Object(bt["p"])(),this.$nextTick(this.renderQRCode),this.loading=!1},async copyCode(){await navigator.clipboard.writeText(this.totpSecretCode),v["g"].showPositive("clipboard_with_code")},renderQRCode(){if(!this.totpSecretCode)return;const t=this.$refs.qrcode;if(!t)return;let e="Alphabiz Account Services",a=this.$store.state.account.emailVerified?this.$store.state.account.email:e;e=encodeURIComponent(e),a=encodeURIComponent(a).replace(".","%2E");const i=encodeURIComponent(this.totpSecretCode),o=`otpauth://totp/${e}:${a}?secret=${i}&issuer=${e}`;ft.a.toCanvas(t,o,(t=>{if(t)throw t}))}}},_t=vt,wt=(a("4c49"),a("9f0a")),yt=Object(u["a"])(_t,mt,pt,!1,null,"1a1edb70",null),Ct=yt.exports;g()(yt,"components",{QBtn:h["a"],QOptionGroup:wt["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-btn",{staticClass:"normal-grey q-mt-xs q-mr-sm text-red",staticStyle:{"min-width":"120px"},attrs:{padding:"8px",flat:"",label:t.$t("account_delete_account")},on:{click:function(e){t.showDeleteAccountDialog=!t.showDeleteAccountDialog}}},[a("setting-dialog",{attrs:{title:t.$t("account_delete_account")},on:{submit:t.deleteAccount},model:{value:t.showDeleteAccountDialog,callback:function(e){t.showDeleteAccountDialog=e},expression:"showDeleteAccountDialog"}},[a("template",{slot:"description"},[a("div",{staticStyle:{width:"309px"}},[t._v("\n        "+t._s(t.$t("account_tip_confirm_delete_account"))+"\n      ")])]),a("template",{slot:"default"},[a("alphabiz-input",{staticClass:"q-pt-md",attrs:{autofocus:"",required:"",type:"password",readonly:t.loading,label:t.$t(t.verifyPasswordVM.label),icon:t.verifyPasswordVM.icon},model:{value:t.verifyPasswordVM.value,callback:function(e){t.$set(t.verifyPasswordVM,"value",e)},expression:"verifyPasswordVM.value"}})],1)],2)],1)},Mt=[],St={name:"SecurityDeleteAccount",components:{SettingDialog:W,AlphabizInput:D["c"]},data(){return{loading:!1,showDeleteAccountDialog:!1,verifyPasswordVM:{value:"",label:"account_password",icon:"lock"}}},watch:{showDeleteAccountDialog(t){this.loading=!t,t||(this.verifyPasswordVM.value="")}},methods:{deleteAccount(t,e){this.loading=!0;const a=()=>{e(),this.loading=!1};v["d"].deleteUser(this.verifyPasswordVM.value).then((()=>{this.showDeleteAccountDialog=!1,v["g"].showPositive("deleted")})).then((()=>this.$router.push("/account"))).catch((({message:t})=>{v["g"].showNegative(t)})).finally(a)}}},Dt=St,Vt=(a("15ce"),Object(u["a"])(Dt,$t,Mt,!1,null,"18a37a36",null)),xt=Vt.exports;g()(Vt,"components",{QBtn:h["a"]});var qt={name:"Security",components:{SettingFragment:S,SecurityChangePassword:ht,SecurityMFA:Ct,SecurityDeleteAccount:xt}},kt=qt,Nt=Object(u["a"])(kt,st,nt,!1,null,null,null),At=Nt.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$store.state.account.invitationCode&&this.$store.state.account.invitationCode.length>0?a("setting-fragment",{attrs:{label:t.$t("account_invitation")}},[a("div",{staticClass:"account-setting__invitation"},[a("q-list",{staticClass:"account-setting__invitation-code-container",attrs:{bordered:"",separator:""}},[t._l(t.code,(function(e,i){return[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple",value:!t.loading&&2!==e.state,expression:"!loading && item.state!==2"}],key:i,staticClass:"account-setting__invitation-code-item q-px-lg",attrs:{readonly:t.loading,clickable:!t.loading&&2!==e.state},on:{click:function(){return t.handleCodeClick(e)}}},[a("q-item-section",[a("q-item-label",{staticClass:"text-weight-bold",attrs:{overline:""}},[t._v(t._s(e.code))]),1===e.state?a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.phone))]):t._e(),1===e.state?a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.email))]):t._e()],1),a("q-item-section",{attrs:{side:""}},[a("q-badge",{attrs:{color:["green","blue","grey"][e.state],label:t.$t(["account_available","account_invited","account_used"][e.state])}})],1)],1)]}))],2)],1),a("setting-dialog",{attrs:{title:t.$t("account_invitation")},on:{submit:t.handleInvite},scopedSlots:t._u([{key:"description",fn:function(){return[a("div",{staticClass:"q-pb-md",staticStyle:{"max-width":"284px"}},[t._v("\n        "+t._s(t.$t("account_invitation_code_dialog_tip"))),a("span",{staticClass:"text-weight-bold"},[a("div",{staticClass:"target-code-field inline-block q-py-xs rounded-borders"},[t._v("  "+t._s(t.targetCode)+"  ")])])])]},proxy:!0},{key:"default",fn:function(){return t._l(t.vm.items,(function(e,i,o){return a("alphabiz-input",{key:i,staticStyle:{width:"309px"},attrs:{autofocus:0===o,readonly:t.inviting,type:e.data.type,icon:e.data.icon,label:e.data.label,rules:e.data.rules},model:{value:t.vm.items[i].model,callback:function(e){t.$set(t.vm.items[i],"model",e)},expression:"vm.items[key].model"}})}))},proxy:!0}],null,!1,3497061616),model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1):t._e()},Ot=[];class Pt{constructor(t){this.code=t.invitation_code,this.state=t.invitation_state,this.date=new Date(t.production_date).toISOString(),this.phone=t.contact_phone,this.email=t.contact_email}}var Ft={name:"Invitation",components:{SettingFragment:S,SettingDialog:W,AlphabizInput:D["c"]},props:{loading:Boolean},data(){return{inviting:!1,showDialog:!1,targetCode:"",vm:(new v["f"]).setDefaultValue(),resolveCallback:null}},computed:{code(){const t=this.$store.state.account.invitationCode;return t?t.map((t=>new Pt(t))):[]}},watch:{showDialog(t){t||(this.vm.clearData().setDefaultValue(),this.resolveCallback&&this.resolveCallback())}},methods:{invite(){return new Promise(((t,e)=>{const a=this.code.find((t=>0===t.state));a?(this.targetCode=a.code,this.showDialog=!0,this.resolveCallback=()=>{t()}):e("invitation_no_code")}))},handleCodeClick(t){this.loading||(1===t.state?navigator.clipboard.writeText(t.code).then((()=>v["g"].showPositive("clipboard_with_invitation_code"))):(this.targetCode=t.code,this.showDialog=!0))},handleInvite(t,e){this.inviting=!0;const a=()=>{e(),this.inviting=!1},i=this.vm.formData;i.code=this.targetCode,i.contact_phone||i.contact_email?v["d"].inviteCode(i.code,i.contact_email,i.contact_phone).then((()=>{v["g"].showPositive("invitation_code_sent"),this.showDialog=!1})).catch((t=>v["g"].showNegative(t.message))).finally(a):(v["g"].showNegative("invitation_channel_required"),a())}}},Qt=Ft,It=(a("25b4"),Object(u["a"])(Qt,Tt,Ot,!1,null,"f24f2658",null)),Lt=It.exports;g()(It,"components",{QList:K["a"],QItem:Y["a"],QItemSection:H["a"],QItemLabel:Z["a"],QBadge:tt["a"]}),g()(It,"directives",{Ripple:at["a"]});var zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("setting-fragment",{attrs:{label:"OAuth"}},[a("q-list",{staticClass:"account-setting__oauth-manager",attrs:{bordered:"",separator:""}},t._l(t.oauthItems,(function(e){return a("q-item",{key:e.providerName},[a("q-item-section",{attrs:{top:"",avatar:""}},[a("q-item-label",{staticClass:"q-mt-sm"},[t._v(t._s(e.providerName))])],1),a("q-item-section",[a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.caption))])],1),a("q-item-section",{attrs:{top:"",side:""}},[e.linked?a("div",[a("q-btn",{attrs:{size:"12px",flat:"",round:"",icon:"delete"},on:{click:e.deleteFn}})],1):a("div",[a("q-btn",{attrs:{size:"12px",flat:"",round:"",icon:"add"},on:{click:e.addFn}})],1)])],1)})),1),t.oauthDialogData?a("alphabiz-dialog",{attrs:{"max-width":"360px",title:t.oauthDialogData.title,"on-submit":t.oauthDialogData.onSubmit,"on-clear":t.oauthDialogData.onClear},scopedSlots:t._u([{key:"description",fn:function(){return[a("div",[t._v(t._s(t.oauthDialogData.description))])]},proxy:!0}],null,!1,2784951085),model:{value:t.showOAuthDialog,callback:function(e){t.showOAuthDialog=e},expression:"showOAuthDialog"}}):t._e()],1)},jt=[],Et=(a("e01a"),a("8927")),Rt=a("bf82"),Bt={name:"OAuthManager",components:{SettingFragment:S,AlphabizDialog:Et["a"]},props:{loading:Boolean},data(){return{oauthProviders:["Facebook","Google","Github"],showOAuthDialog:!1,oauthDialogData:null}},computed:{oauthItems(){const t=this.oauthProviders.reduce(((t,e)=>{const a=()=>this.handleAddClick(e);return t[e]={linked:!1,providerName:e,caption:"none",addFn:a},t}),{});if(this.$store.state.account.identities){const e=this.$store.state.account.identities.reduce(((t,e)=>{const a=()=>this.handleDeleteClick(e.providerName);return t[e.providerName]={linked:!0,providerName:e.providerName,caption:e.userId,deleteFn:a},t}),{});return{...t,...e}}return t}},methods:{async handleDeleteClick(t){const e=async()=>{try{this.oauthDialogData.description="unlinking...",await v["d"].unlinkOAuth(t),v["g"].showRaw(`Unlinked provider: ${t}`)}catch(e){v["g"].showNegative(e.message)}return!0};this.oauthDialogData={type:"unlink",title:"Unlink Your Social Account",description:`do you want to unlink your ${t} account?`,onClear:()=>this.oauthDialogData=null,onSubmit:e},this.showOAuthDialog=!0},async handleAddClick(t){const e=async()=>(this.oauthDialogData.description="linking...",await Rt["a"].launchOAuth("signedIn",{provider:t}),this.oauthDialogData.linkResult=null,await this.waitForLinkResult(),!0);this.oauthDialogData={type:"link",title:"Link Your Social Account",description:`do you want to link your ${t} account?`,linkResult:null,onClear:()=>this.oauthDialogData=null,onSubmit:e},this.showOAuthDialog=!0},async waitForLinkResult(){let t;await new Promise((e=>{t=setInterval((()=>{null===this.oauthDialogData.linkResult||e()}),1e3)})).finally((()=>{t&&clearInterval(t)}))},async handleLinkResult(t){t.verify&&t.verify(this.$store.state.account.email),t.error?v["g"].showNegative(t.error):(await v["d"].redirectToIndex(),v["g"].showRaw("Linked")),this.oauthDialogData.linkResult=t}}},Ut=Bt,Wt=(a("2d0e"),Object(u["a"])(Ut,zt,jt,!1,null,null,null)),Gt=Wt.exports;g()(Wt,"components",{QList:K["a"],QItem:Y["a"],QItemSection:H["a"],QItemLabel:Z["a"],QBtn:h["a"]});var Jt={name:"AccountSettings.vue",components:{OptionalInformation:A,VerificationFields:ot,OAuthManager:Gt,Security:At,Invitation:Lt},data(){return{loading:!1}},mounted(){this.$route.query.call&&this.invite()},watch:{"$route.query.call"(t){t&&this.invite()}},methods:{setLoading(t){this.loading=t},invite(){if(this.loading)return;const t=this.$refs.invitation;t.invite().then((()=>{this.$router.push({path:this.$route.path,query:{}})}))}}},Kt=Jt,Yt=(a("a404"),a("9989")),Ht=Object(u["a"])(Kt,i,o,!1,null,null,null);e["default"]=Ht.exports;g()(Ht,"components",{QPage:Yt["a"]})},"2d0e":function(t,e,a){"use strict";a("ec18")},"464b":function(t,e,a){},"4c49":function(t,e,a){"use strict";a("18a0")},"53ef":function(t,e,a){},"5be0":function(t,e,a){"use strict";a("80d5")},"6ea8":function(t,e,a){"use strict";a("8dec")},"762d":function(t,e,a){},"80d5":function(t,e,a){},8927:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{value:t.value,persistent:""},on:{input:function(e){return t.$emit("input",e)}}},[a("q-card",{staticClass:"alphabiz-dialog column",style:Object.assign({},{minWidth:"342px"},t.maxWidth?{maxWidth:t.maxWidth}:{})},[a("q-card-section",{staticClass:"q-px-lg q-pt-lg q-pb-sm"},[a("div",{staticClass:"text-h5 text-weight-bold q-pb-md"},[t._v(t._s(t.title))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$slots.description,expression:"$slots.description"}],staticStyle:{width:"100%",overflow:"hidden"}},[t._t("description",null,{loading:t.loading,disable:t.disable})],2)]),a("q-form",{staticClass:"col-grow column",on:{submit:t.handleSubmit}},[a("q-card-section",{staticClass:"col-grow q-px-lg q-pt-none q-pb-lg q-gutter-y-lg"},[t._t("default",null,{disable:t.disable})],2),a("q-separator",{staticClass:"q-mx-none"}),a("q-card-actions",{staticClass:"q-px-lg q-py-md",attrs:{align:"stretch",vertical:""}},[t.onSubmit?a("q-btn",{staticClass:"bg-primary text-white q-mb-xs",attrs:{flat:"",size:"md",type:"submit",label:t.submitLabel,percentage:t.percentage,disable:t.disable||t.loading,loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[a("q-spinner",{attrs:{color:"white"}})]},proxy:!0}],null,!1,2648522201)}):t._e(),t.cancel?a("q-btn",{staticClass:"normal-button",attrs:{flat:"",label:t.cancelLabel,size:"md",disable:t.disable},on:{click:t.handleCancel}}):t._e()],1)],1)],1)],1)},o=[],s=(a("a79d"),a("ddb0"),{name:"AlphabizDialog",props:{value:Boolean,title:{type:String,default:"Title"},maxWidth:{type:String,default:""},cancel:{type:Boolean,default:!0},submitLabel:{type:String,default(){return this.$t("account_submit")}},cancelLabel:{type:String,default(){return this.$t("account_cancel")}},timeout:{type:Object,default:null},onSubmit:{type:Function,default:null},onCancel:{type:Function,default:null},onClear:{type:Function,default:null}},data(){return{percentage:100,interval:null,disable:!1,loading:!1}},watch:{value(t){!t&&this.onClear&&setTimeout((()=>this.onClear()),400)}},methods:{async handleSubmit(){try{const t=this.timeout?this.timerWrapper(this.onSubmit,this.timeout.onTimeout,this.timeout.duration):this.onSubmit;this.disable=!0,this.loading=!0;const e=await t();e&&this.$emit("input",!1)}finally{this.loading=!1,this.disable=!1}},async handleCancel(){if(this.onCancel)try{this.disable=!0;const t=await this.onCancel();t&&this.$emit("input",!1)}finally{this.disable=!1}else this.$emit("input",!1)},timerWrapper(t,e,a){const i=100,o=Math.max(100,a/100),s=Math.max(1,Math.floor(o)/a*i);this.percentage=0;let n=!1;const l=()=>new Promise(((t,e)=>{this.interval=setInterval((()=>{this.percentage=Math.max(0,Math.min(100,this.percentage+s)),this.percentage>=100&&(clearInterval(this.interval),setTimeout((()=>{n?t():e(new Error("Timeout"))}),1e3))}),o)})),c=()=>new Promise((t=>{this.percentage<100&&(n=!0,clearInterval(this.interval),this.percentage=100,setTimeout(t,1e3))}));return async function(...a){let i;return await Promise.race([l(),t.apply(this,a)]).then((t=>{i=t})).catch((t=>{if("Timeout"!==t.message)throw t;e()})).finally((()=>{c()})),i}}},beforeDestroy(){clearInterval(this.interval)}}),n=s,l=(a("ba79"),a("2877")),c=a("24e8"),r=a("f09f"),d=a("a370"),u=a("0378"),h=a("eb85"),m=a("4b7e"),p=a("9c40"),g=a("0d59"),f=a("eebe"),b=a.n(f),v=Object(l["a"])(n,i,o,!1,null,null,null);e["a"]=v.exports;b()(v,"components",{QDialog:c["a"],QCard:r["a"],QCardSection:d["a"],QForm:u["a"],QSeparator:h["a"],QCardActions:m["a"],QBtn:p["a"],QSpinner:g["a"]})},"8dde":function(t,e,a){},"8dec":function(t,e,a){},a404:function(t,e,a){"use strict";a("464b")},a71e:function(t,e,a){},ba79:function(t,e,a){"use strict";a("8dde")},bc783:function(t,e,a){},d226:function(t,e,a){},d98f:function(t,e,a){"use strict";a("bc783")},e8f1:function(t,e,a){},ec18:function(t,e,a){}}]);