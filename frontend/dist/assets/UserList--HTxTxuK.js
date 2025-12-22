import{t as X,a as $,v as ye,p as Y,w as k,d as G,u as xe,B as T,N as ke,q as Se,g as W}from"./request-z8cQBAtn.js";import{i as Ce,F as Ne,l as oe,q as o,p as J,G as S,J as le,ag as ie,d as ne,h as u,ah as Be,ai as Re,s as $e,x as se,r as R,I as Ve,t as L,y as V,z as ze,ae as _e,A as Fe,c as We,a as Z,b as d,w as b,u as n,o as Q,g as ee,T as re}from"./index-CbXCqKD3.js";import{u as Me}from"./get-BcCGBBAx.js";import{c as Ue,b as Te,N as De}from"./TreeSelect-DYzefwqB.js";import{N as je,a as z,b as M}from"./FormItem-D5rdCrTa.js";import"./Dropdown-BgUe0Bn8.js";import"./Icon-2OaqK9uy.js";import"./get-slot-Bk_rJcZu.js";import"./use-locale-Bf7Nte8p.js";const He={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};function Ie(e){const{primaryColor:c,opacityDisabled:p,borderRadius:f,textColor3:h}=e;return Object.assign(Object.assign({},He),{iconColor:h,textColor:"white",loadingColor:c,opacityDisabled:p,railColor:"rgba(0, 0, 0, .14)",railColorActive:c,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:f,railBorderRadiusMedium:f,railBorderRadiusLarge:f,buttonBorderRadiusSmall:f,buttonBorderRadiusMedium:f,buttonBorderRadiusLarge:f,boxShadowFocus:`0 0 0 2px ${Ne(c,{alpha:.2})}`})}const Le={common:Ce,self:Ie},Oe=oe("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[o("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),o("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),o("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),oe("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[ie({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),o("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),o("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),o("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),J("&:focus",[o("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),S("round",[o("rail","border-radius: calc(var(--n-rail-height) / 2);",[o("button","border-radius: calc(var(--n-button-height) / 2);")])]),le("disabled",[le("icon",[S("rubber-band",[S("pressed",[o("rail",[o("button","max-width: var(--n-button-width-pressed);")])]),o("rail",[J("&:active",[o("button","max-width: var(--n-button-width-pressed);")])]),S("active",[S("pressed",[o("rail",[o("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),o("rail",[J("&:active",[o("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),S("active",[o("rail",[o("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),o("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[o("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[ie()]),o("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),S("active",[o("rail","background-color: var(--n-rail-color-active);")]),S("loading",[o("rail",`
 cursor: wait;
 `)]),S("disabled",[o("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Pe=Object.assign(Object.assign({},se.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let D;const Ae=ne({name:"Switch",props:Pe,slots:Object,setup(e){D===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?D=CSS.supports("width","max(1px)"):D=!1:D=!0);const{mergedClsPrefixRef:c,inlineThemeDisabled:p}=$e(e),f=se("Switch","-switch",Oe,Le,e,c),h=ye(e),{mergedSizeRef:w,mergedDisabledRef:v}=h,t=R(e.defaultValue),_=Ve(e,"value"),y=Me(_,t),x=L(()=>y.value===e.checkedValue),C=R(!1),s=R(!1),m=L(()=>{const{railStyle:i}=e;if(i)return i({focused:s.value,checked:x.value})});function g(i){const{"onUpdate:value":j,onChange:H,onUpdateValue:I}=e,{nTriggerFormInput:P,nTriggerFormChange:A}=h;j&&G(j,i),I&&G(I,i),H&&G(H,i),t.value=i,P(),A()}function O(){const{nTriggerFormFocus:i}=h;i()}function l(){const{nTriggerFormBlur:i}=h;i()}function a(){e.loading||v.value||(y.value!==e.checkedValue?g(e.checkedValue):g(e.uncheckedValue))}function r(){s.value=!0,O()}function te(){s.value=!1,l(),C.value=!1}function de(i){e.loading||v.value||i.key===" "&&(y.value!==e.checkedValue?g(e.checkedValue):g(e.uncheckedValue),C.value=!1)}function ue(i){e.loading||v.value||i.key===" "&&(i.preventDefault(),C.value=!0)}const ae=L(()=>{const{value:i}=w,{self:{opacityDisabled:j,railColor:H,railColorActive:I,buttonBoxShadow:P,buttonColor:A,boxShadowFocus:ce,loadingColor:he,textColor:be,iconColor:fe,[V("buttonHeight",i)]:N,[V("buttonWidth",i)]:pe,[V("buttonWidthPressed",i)]:ve,[V("railHeight",i)]:B,[V("railWidth",i)]:U,[V("railBorderRadius",i)]:me,[V("buttonBorderRadius",i)]:ge},common:{cubicBezierEaseInOut:we}}=f.value;let K,E,q;return D?(K=`calc((${B} - ${N}) / 2)`,E=`max(${B}, ${N})`,q=`max(${U}, calc(${U} + ${N} - ${B}))`):(K=Y((k(B)-k(N))/2),E=Y(Math.max(k(B),k(N))),q=k(B)>k(N)?U:Y(k(U)+k(N)-k(B))),{"--n-bezier":we,"--n-button-border-radius":ge,"--n-button-box-shadow":P,"--n-button-color":A,"--n-button-width":pe,"--n-button-width-pressed":ve,"--n-button-height":N,"--n-height":E,"--n-offset":K,"--n-opacity-disabled":j,"--n-rail-border-radius":me,"--n-rail-color":H,"--n-rail-color-active":I,"--n-rail-height":B,"--n-rail-width":U,"--n-width":q,"--n-box-shadow-focus":ce,"--n-loading-color":he,"--n-text-color":be,"--n-icon-color":fe}}),F=p?ze("switch",L(()=>w.value[0]),ae,e):void 0;return{handleClick:a,handleBlur:te,handleFocus:r,handleKeyup:de,handleKeydown:ue,mergedRailStyle:m,pressed:C,mergedClsPrefix:c,mergedValue:y,checked:x,mergedDisabled:v,cssVars:p?void 0:ae,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:c,checked:p,mergedRailStyle:f,onRender:h,$slots:w}=this;h==null||h();const{checked:v,unchecked:t,icon:_,"checked-icon":y,"unchecked-icon":x}=w,C=!(X(_)&&X(y)&&X(x));return u("div",{role:"switch","aria-checked":p,class:[`${e}-switch`,this.themeClass,C&&`${e}-switch--icon`,p&&`${e}-switch--active`,c&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},u("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:f},$(v,s=>$(t,m=>s||m?u("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},u("div",{class:`${e}-switch__rail-placeholder`},u("div",{class:`${e}-switch__button-placeholder`}),s),u("div",{class:`${e}-switch__rail-placeholder`},u("div",{class:`${e}-switch__button-placeholder`}),m)):null)),u("div",{class:`${e}-switch__button`},$(_,s=>$(y,m=>$(x,g=>u(Be,null,{default:()=>this.loading?u(Re,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(m||s)?u("div",{class:`${e}-switch__button-icon`,key:m?"checked-icon":"icon"},m||s):!this.checked&&(g||s)?u("div",{class:`${e}-switch__button-icon`,key:g?"unchecked-icon":"icon"},g||s):null})))),$(v,s=>s&&u("div",{key:"checked",class:`${e}-switch__checked`},s)),$(t,s=>s&&u("div",{key:"unchecked",class:`${e}-switch__unchecked`},s)))))}}),Ke={class:"space-y-4"},Ee={class:"flex justify-between items-center"},qe={class:"flex justify-end gap-2"},ot=ne({__name:"UserList",setup(e){const c=xe(),p=R(!1),f=R([]),h=R(!1),w=R(!1),v=R([]),t=_e({id:void 0,userName:"",nickName:"",deptId:null,phonenumber:"",password:"",remark:"",status:"0"}),_=[{title:"用户账号",key:"userName"},{title:"用户姓名",key:"nickName"},{title:"所属部门",key:"dept",render(l){var a;return((a=l.dept)==null?void 0:a.deptName)||"-"}},{title:"手机号码",key:"phonenumber"},{title:"状态",key:"status",render(l){return u(Ae,{value:l.status==="0",onUpdateValue:a=>C(l,a)})}},{title:"备注",key:"remark"},{title:"创建时间",key:"createTime"},{title:"操作",key:"actions",render(l){return u(De,null,{default:()=>[u(T,{size:"small",type:"primary",onClick:()=>m(l)},{default:()=>"编辑"}),u(T,{size:"small",type:"error",onClick:()=>g(l)},{default:()=>"删除"})]})}}],y=async()=>{try{const l=await W.get("/system/dept/tree");v.value=l}catch{}},x=async()=>{p.value=!0;try{const l=await W.get("/system/user/list",{params:{pageNum:1,pageSize:100}});f.value=l.records}catch{c.error("获取用户列表失败")}finally{p.value=!1}},C=async(l,a)=>{const r=a?"0":"1";try{await W.put("/system/user",{...l,status:r}),l.status=r,c.success(a?"已启用":"已禁用")}catch{c.error("状态修改失败")}},s=()=>{t.id=void 0,t.userName="",t.nickName="",t.deptId=null,t.phonenumber="",t.password="123456",t.remark="",t.status="0",h.value=!0},m=l=>{Object.assign(t,l),t.password="",h.value=!0},g=async l=>{try{await W.delete(`/system/user/${l.id}`),c.success("删除成功"),x()}catch{}},O=async()=>{if(!t.userName||!t.nickName){c.warning("请填写必填项");return}if(!/^[a-zA-Z0-9]+$/.test(t.userName)){c.warning("用户账号只能包含英文和数字");return}if(!/^[\u4e00-\u9fa50-9]+$/.test(t.nickName)){c.warning("用户姓名只能包含中文和数字");return}w.value=!0;try{t.id?await W.put("/system/user",t):await W.post("/system/user",t),c.success(t.id?"修改成功":"新增成功"),h.value=!1,x()}finally{w.value=!1}};return Fe(()=>{y(),x()}),(l,a)=>(Q(),We("div",Ke,[Z("div",Ee,[a[10]||(a[10]=Z("div",{class:"font-bold text-lg"},"用户管理",-1)),d(n(T),{type:"primary",onClick:s},{default:b(()=>[...a[9]||(a[9]=[ee("新增用户",-1)])]),_:1})]),d(n(ke),{bordered:!1,class:"shadow-sm rounded-xl"},{default:b(()=>[d(n(Ue),{columns:_,data:f.value,loading:p.value},null,8,["data","loading"])]),_:1}),d(n(Se),{show:h.value,"onUpdate:show":a[8]||(a[8]=r=>h.value=r),preset:"card",title:t.id?"编辑用户":"新增用户",class:"max-w-md"},{footer:b(()=>[Z("div",qe,[d(n(T),{onClick:a[7]||(a[7]=r=>h.value=!1)},{default:b(()=>[...a[11]||(a[11]=[ee("取消",-1)])]),_:1}),d(n(T),{type:"primary",loading:w.value,onClick:O},{default:b(()=>[...a[12]||(a[12]=[ee("确定",-1)])]),_:1},8,["loading"])])]),default:b(()=>[d(n(je),{"label-placement":"left","label-width":"80"},{default:b(()=>[d(n(z),{label:"用户账号",required:""},{default:b(()=>[d(n(M),{value:t.userName,"onUpdate:value":a[0]||(a[0]=r=>t.userName=r),placeholder:"英文+数字",disabled:!!t.id},null,8,["value","disabled"])]),_:1}),d(n(z),{label:"用户姓名",required:""},{default:b(()=>[d(n(M),{value:t.nickName,"onUpdate:value":a[1]||(a[1]=r=>t.nickName=r),placeholder:"中文+数字",disabled:!!t.id},null,8,["value","disabled"])]),_:1}),d(n(z),{label:"所属部门"},{default:b(()=>[d(n(Te),{value:t.deptId,"onUpdate:value":a[2]||(a[2]=r=>t.deptId=r),options:v.value,"key-field":"id","label-field":"deptName",placeholder:"选择部门",clearable:""},null,8,["value","options"])]),_:1}),d(n(z),{label:"手机号码"},{default:b(()=>[d(n(M),{value:t.phonenumber,"onUpdate:value":a[3]||(a[3]=r=>t.phonenumber=r),placeholder:"请输入手机号"},null,8,["value"])]),_:1}),t.id?(Q(),re(n(z),{key:1,label:"重置密码"},{default:b(()=>[d(n(M),{value:t.password,"onUpdate:value":a[5]||(a[5]=r=>t.password=r),type:"password",placeholder:"留空则不修改"},null,8,["value"])]),_:1})):(Q(),re(n(z),{key:0,label:"密码"},{default:b(()=>[d(n(M),{value:t.password,"onUpdate:value":a[4]||(a[4]=r=>t.password=r),type:"password",placeholder:"默认 123456"},null,8,["value"])]),_:1})),d(n(z),{label:"备注"},{default:b(()=>[d(n(M),{value:t.remark,"onUpdate:value":a[6]||(a[6]=r=>t.remark=r),type:"textarea",placeholder:"请输入备注"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["show","title"])]))}});export{ot as default};
