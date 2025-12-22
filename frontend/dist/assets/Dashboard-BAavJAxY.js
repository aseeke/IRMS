import{d as B,h as v,i as we,j as re,k as Q,l as f,m as no,n as io,p as I,q as m,s as ne,r as E,t as x,v as U,x as G,y as lo,z as ie,A as ao,B as be,C as so,D as co,E as Ne,F as ue,G as P,H as J,N as $e,I as de,J as te,K as uo,L as X,M as Ce,O as vo,P as ho,Q as mo,R as fo,c as Z,o as Y,S as po,a as $,T as go,w as W,u as V,b as D,e as bo,U as Co}from"./index-CbXCqKD3.js";import{u as xo}from"./user-BwHbnFWF.js";import{i as yo,r as zo,a as wo,V as Be,c as Io,s as So,S as Ee,b as Le,f as ve,d as K,k as Ie,e as he,u as ko}from"./request-z8cQBAtn.js";import{t as Ho,d as _o,a as Ro,C as Ao,N as Po,b as je,c as me,u as Oo,V as To}from"./Dropdown-BgUe0Bn8.js";import{u as xe}from"./get-BcCGBBAx.js";import{N as Pe}from"./Icon-2OaqK9uy.js";import{_ as Mo}from"./_plugin-vue_export-helper-DlAUqK2U.js";const No=B({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),$o=yo&&"loading"in document.createElement("img");function Bo(e={}){var t;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}}const fe=new WeakMap,pe=new WeakMap,ge=new WeakMap,Eo=(e,t,o)=>{if(!e)return()=>{};const r=Bo(t),{root:l}=r.options;let i;const c=fe.get(l);c?i=c:(i=new Map,fe.set(l,i));let u,s;i.has(r.hash)?(s=i.get(r.hash),s[1].has(e)||(u=s[0],s[1].add(e),u.observe(e))):(u=new IntersectionObserver(H=>{H.forEach(h=>{if(h.isIntersecting){const R=pe.get(h.target),O=ge.get(h.target);R&&R(),O&&(O.value=!0)}})},r.options),u.observe(e),s=[u,new Set([e])],i.set(r.hash,s));let d=!1;const y=()=>{d||(pe.delete(e),ge.delete(e),d=!0,s[1].has(e)&&(s[0].unobserve(e),s[1].delete(e)),s[1].size<=0&&i.delete(r.hash),i.size||fe.delete(l))};return pe.set(e,y),ge.set(e,o),y};function Lo(e){const{borderRadius:t,avatarColor:o,cardColor:r,fontSize:l,heightTiny:i,heightSmall:c,heightMedium:u,heightLarge:s,heightHuge:d,modalColor:y,popoverColor:H}=e;return{borderRadius:t,fontSize:l,border:`2px solid ${r}`,heightTiny:i,heightSmall:c,heightMedium:u,heightLarge:s,heightHuge:d,color:re(r,o),colorModal:re(y,o),colorPopover:re(H,o)}}const jo={common:we,self:Lo},Fo=Q("n-avatar-group"),Ko=f("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[no(I("&","--n-merged-color: var(--n-color-modal);")),io(I("&","--n-merged-color: var(--n-color-popover);")),I("img",`
 width: 100%;
 height: 100%;
 `),m("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),f("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),m("text","line-height: 1.25")]),Vo=Object.assign(Object.assign({},G.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),Do=B({name:"Avatar",props:Vo,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ne(e),r=E(!1);let l=null;const i=E(null),c=E(null),u=()=>{const{value:p}=i;if(p&&(l===null||l!==p.innerHTML)){l=p.innerHTML;const{value:k}=c;if(k){const{offsetWidth:T,offsetHeight:_}=k,{offsetWidth:b,offsetHeight:w}=p,j=.9,F=Math.min(T/b*j,_/w*j,1);p.style.transform=`translateX(-50%) translateY(-50%) scale(${F})`}}},s=U(Fo,null),d=x(()=>{const{size:p}=e;if(p)return p;const{size:k}=s||{};return k||"medium"}),y=G("Avatar","-avatar",Ko,jo,e,t),H=U(Ho,null),h=x(()=>{if(s)return!0;const{round:p,circle:k}=e;return p!==void 0||k!==void 0?p||k:H?H.roundRef.value:!1}),R=x(()=>s?!0:e.bordered||!1),O=x(()=>{const p=d.value,k=h.value,T=R.value,{color:_}=e,{self:{borderRadius:b,fontSize:w,color:j,border:F,colorModal:ee,colorPopover:L},common:{cubicBezierEaseInOut:ae}}=y.value;let oe;return typeof p=="number"?oe=`${p}px`:oe=y.value.self[lo("height",p)],{"--n-font-size":w,"--n-border":T?F:"none","--n-border-radius":k?"50%":b,"--n-color":_||j,"--n-color-modal":_||ee,"--n-color-popover":_||L,"--n-bezier":ae,"--n-merged-size":`var(--n-avatar-size-override, ${oe})`}}),z=o?ie("avatar",x(()=>{const p=d.value,k=h.value,T=R.value,{color:_}=e;let b="";return p&&(typeof p=="number"?b+=`a${p}`:b+=p[0]),k&&(b+="b"),T&&(b+="c"),_&&(b+=Io(_)),b}),O,e):void 0,A=E(!e.lazy);ao(()=>{if(e.lazy&&e.intersectionObserverOptions){let p;const k=be(()=>{p==null||p(),p=void 0,e.lazy&&(p=Eo(c.value,e.intersectionObserverOptions,A))});so(()=>{k(),p==null||p()})}}),co(()=>{var p;return e.src||((p=e.imgProps)===null||p===void 0?void 0:p.src)},()=>{r.value=!1});const M=E(!e.lazy);return{textRef:i,selfRef:c,mergedRoundRef:h,mergedClsPrefix:t,fitTextTransform:u,cssVars:o?void 0:O,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,hasLoadError:r,shouldStartLoading:A,loaded:M,mergedOnError:p=>{if(!A.value)return;r.value=!0;const{onError:k,imgProps:{onError:T}={}}=e;k==null||k(p),T==null||T(p)},mergedOnLoad:p=>{const{onLoad:k,imgProps:{onLoad:T}={}}=e;k==null||k(p),T==null||T(p),M.value=!0}}},render(){var e,t;const{$slots:o,src:r,mergedClsPrefix:l,lazy:i,onRender:c,loaded:u,hasLoadError:s,imgProps:d={}}=this;c==null||c();let y;const H=!u&&!s&&(this.renderPlaceholder?this.renderPlaceholder():(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e));return this.hasLoadError?y=this.renderFallback?this.renderFallback():zo(o.fallback,()=>[v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):y=wo(o.default,h=>{if(h)return v(Be,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${l}-avatar__text`},h)});if(r||d.src){const R=this.src||d.src;return v("img",Object.assign(Object.assign({},d),{loading:$o&&!this.intersectionObserverOptions&&i?"lazy":"eager",src:i&&this.intersectionObserverOptions?this.shouldStartLoading?R:void 0:R,"data-image-src":R,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[d.style||"",{objectFit:this.objectFit},H?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),v("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},y,i&&H)}});function Uo(e){const{baseColor:t,textColor2:o,bodyColor:r,cardColor:l,dividerColor:i,actionColor:c,scrollbarColor:u,scrollbarColorHover:s,invertedColor:d}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:c,headerColor:l,headerColorInverted:d,footerColor:c,footerColorInverted:d,headerBorderColor:i,headerBorderColorInverted:d,footerBorderColor:i,footerBorderColorInverted:d,siderBorderColor:i,siderBorderColorInverted:d,siderColor:l,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:re(r,u),siderToggleBarColorHover:re(r,s),__invertScrollbar:"true"}}const Se=Ne({name:"Layout",common:we,peers:{Scrollbar:So},self:Uo});function Go(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}function Wo(e){const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:l,textColor1:i,fontSize:c,dividerColor:u,hoverColor:s,primaryColorHover:d}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:s,itemColorActive:ue(r,{alpha:.1}),itemColorActiveHover:ue(r,{alpha:.1}),itemColorActiveCollapsed:ue(r,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:d,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:d,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:c,dividerColor:u},Go("#BBB",r,"#FFF","#AAA"))}const qo=Ne({name:"Menu",common:we,peers:{Tooltip:Ro,Dropdown:_o},self:Wo}),Fe=Q("n-layout-sider"),ke={type:String,default:"static"},Yo=f("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[f("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),P("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Xo={embedded:Boolean,position:ke,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ke=Q("n-layout");function Ve(e){return B({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},G.props),Xo),setup(t){const o=E(null),r=E(null),{mergedClsPrefixRef:l,inlineThemeDisabled:i}=ne(t),c=G("Layout","-layout",Yo,Se,t,l);function u(z,A){if(t.nativeScrollbar){const{value:M}=o;M&&(A===void 0?M.scrollTo(z):M.scrollTo(z,A))}else{const{value:M}=r;M&&M.scrollTo(z,A)}}J(Ke,t);let s=0,d=0;const y=z=>{var A;const M=z.target;s=M.scrollLeft,d=M.scrollTop,(A=t.onScroll)===null||A===void 0||A.call(t,z)};Le(()=>{if(t.nativeScrollbar){const z=o.value;z&&(z.scrollTop=d,z.scrollLeft=s)}});const H={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:u},R=x(()=>{const{common:{cubicBezierEaseInOut:z},self:A}=c.value;return{"--n-bezier":z,"--n-color":t.embedded?A.colorEmbedded:A.color,"--n-text-color":A.textColor}}),O=i?ie("layout",x(()=>t.embedded?"e":""),R,t):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:H,mergedTheme:c,handleNativeElScroll:y,cssVars:i?void 0:R,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender},h)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const l=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return v("div",{class:i,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):v(Ee,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const Oe=Ve(!1),Jo=Ve(!0),Qo=f("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[P("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),P("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Zo={position:ke,inverted:Boolean,bordered:{type:Boolean,default:!1}},et=B({name:"LayoutHeader",props:Object.assign(Object.assign({},G.props),Zo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ne(e),r=G("Layout","-layout-header",Qo,Se,e,t),l=x(()=>{const{common:{cubicBezierEaseInOut:c},self:u}=r.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=u.headerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.headerBorderColorInverted):(s["--n-color"]=u.headerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.headerBorderColor),s}),i=o?ie("layout-header",x(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),ot=f("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[P("bordered",[m("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),m("left-placement",[P("bordered",[m("border",`
 right: 0;
 `)])]),P("right-placement",`
 justify-content: flex-start;
 `,[P("bordered",[m("border",`
 left: 0;
 `)]),P("collapsed",[f("layout-toggle-button",[f("base-icon",`
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",[I("&:hover",[m("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),f("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[f("base-icon",`
 transform: rotate(0);
 `)]),f("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[I("&:hover",[m("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),P("collapsed",[f("layout-toggle-bar",[I("&:hover",[m("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),f("layout-toggle-button",[f("base-icon",`
 transform: rotate(0);
 `)])]),f("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[f("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[m("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),m("bottom",`
 position: absolute;
 top: 34px;
 `),I("&:hover",[m("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),m("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),I("&:hover",[m("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),m("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),f("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),P("show-content",[f("layout-sider-scroll-container",{opacity:1})]),P("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),tt=B({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},v("div",{class:`${e}-layout-toggle-bar__top`}),v("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),rt=B({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},v($e,{clsPrefix:e},{default:()=>v(Ao,null)}))}}),nt={position:ke,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},it=B({name:"LayoutSider",props:Object.assign(Object.assign({},G.props),nt),setup(e){const t=U(Ke),o=E(null),r=E(null),l=E(e.defaultCollapsed),i=xe(de(e,"collapsed"),l),c=x(()=>ve(i.value?e.collapsedWidth:e.width)),u=x(()=>e.collapseMode!=="transform"?{}:{minWidth:ve(e.width)}),s=x(()=>t?t.siderPlacement:"left");function d(_,b){if(e.nativeScrollbar){const{value:w}=o;w&&(b===void 0?w.scrollTo(_):w.scrollTo(_,b))}else{const{value:w}=r;w&&w.scrollTo(_,b)}}function y(){const{"onUpdate:collapsed":_,onUpdateCollapsed:b,onExpand:w,onCollapse:j}=e,{value:F}=i;b&&K(b,!F),_&&K(_,!F),l.value=!F,F?w&&K(w):j&&K(j)}let H=0,h=0;const R=_=>{var b;const w=_.target;H=w.scrollLeft,h=w.scrollTop,(b=e.onScroll)===null||b===void 0||b.call(e,_)};Le(()=>{if(e.nativeScrollbar){const _=o.value;_&&(_.scrollTop=h,_.scrollLeft=H)}}),J(Fe,{collapsedRef:i,collapseModeRef:de(e,"collapseMode")});const{mergedClsPrefixRef:O,inlineThemeDisabled:z}=ne(e),A=G("Layout","-layout-sider",ot,Se,e,O);function M(_){var b,w;_.propertyName==="max-width"&&(i.value?(b=e.onAfterLeave)===null||b===void 0||b.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const p={scrollTo:d},k=x(()=>{const{common:{cubicBezierEaseInOut:_},self:b}=A.value,{siderToggleButtonColor:w,siderToggleButtonBorder:j,siderToggleBarColor:F,siderToggleBarColorHover:ee}=b,L={"--n-bezier":_,"--n-toggle-button-color":w,"--n-toggle-button-border":j,"--n-toggle-bar-color":F,"--n-toggle-bar-color-hover":ee};return e.inverted?(L["--n-color"]=b.siderColorInverted,L["--n-text-color"]=b.textColorInverted,L["--n-border-color"]=b.siderBorderColorInverted,L["--n-toggle-button-icon-color"]=b.siderToggleButtonIconColorInverted,L.__invertScrollbar=b.__invertScrollbar):(L["--n-color"]=b.siderColor,L["--n-text-color"]=b.textColor,L["--n-border-color"]=b.siderBorderColor,L["--n-toggle-button-icon-color"]=b.siderToggleButtonIconColor),L}),T=z?ie("layout-sider",x(()=>e.inverted?"a":"b"),k,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:O,mergedTheme:A,styleMaxWidth:c,mergedCollapsed:i,scrollContainerStyle:u,siderPlacement:s,handleNativeElScroll:R,handleTransitionend:M,handleTriggerClick:y,inlineThemeDisabled:z,cssVars:k,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},p)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ve(this.width)}]},this.nativeScrollbar?v("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):v(Ee,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?v(tt,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):v(rt,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?v("div",{class:`${t}-layout-sider__border`}):null)}}),le=Q("n-menu"),De=Q("n-submenu"),He=Q("n-menu-item-group"),Te=[I("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[I("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Me=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[I("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],lt=I([f("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[P("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[f("submenu","margin: 0;"),f("menu-item","margin: 0;"),f("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[I("&::before","display: none;"),P("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),f("menu-item-content",[P("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[I("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),P("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[I("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),te("disabled",[te("selected, child-active",[I("&:focus-within",Me)]),P("selected",[q(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[I("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),P("child-active",[q(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[I("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),q("border-bottom: 2px solid var(--n-border-color-horizontal);",Me)]),f("menu-item-content-header",[I("a","color: var(--n-item-text-color-horizontal);")])])]),te("responsive",[f("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),P("collapsed",[f("menu-item-content",[P("selected",[I("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),f("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),f("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),f("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[I("> *","z-index: 1;"),I("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),P("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),P("collapsed",[m("arrow","transform: rotate(0);")]),P("selected",[I("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[I("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),P("child-active",[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[I("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),te("disabled",[te("selected, child-active",[I("&:focus-within",Te)]),P("selected",[q(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[I("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),P("child-active",[q(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[I("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),P("selected",[q(null,[I("&::before","background-color: var(--n-item-color-active-hover);")])]),q(null,Te)]),m("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),m("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),f("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[I("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[I("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),f("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[f("menu-item-content",`
 height: var(--n-item-height);
 `),f("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[uo({duration:".2s"})])]),f("menu-item-group",[f("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),f("menu-tooltip",[I("a",`
 color: inherit;
 text-decoration: none;
 `)]),f("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function q(e,t){return[P("hover",e,t),I("&:hover",e,t)]}const Ue=B({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=U(le);return{menuProps:t,style:x(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:x(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:l,expandIcon:i}}=this,c=o?o(t.rawNode):X(this.icon);return v("div",{onClick:u=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):X(this.title),this.extra||l?v("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(t.rawNode):X(this.extra)):null),this.showArrow?v($e,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):v(No,null)}):null)}}),ce=8;function _e(e){const t=U(le),{props:o,mergedCollapsedRef:r}=t,l=U(De,null),i=U(He,null),c=x(()=>o.mode==="horizontal"),u=x(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=x(()=>{var h;return Math.max((h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize,o.iconSize)}),d=x(()=>{var h;return!c.value&&e.root&&r.value&&(h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize}),y=x(()=>{if(c.value)return;const{collapsedWidth:h,indent:R,rootIndent:O}=o,{root:z,isGroup:A}=e,M=O===void 0?R:O;return z?r.value?h/2-s.value/2:M:i&&typeof i.paddingLeftRef.value=="number"?R/2+i.paddingLeftRef.value:l&&typeof l.paddingLeftRef.value=="number"?(A?R/2:R)+l.paddingLeftRef.value:0}),H=x(()=>{const{collapsedWidth:h,indent:R,rootIndent:O}=o,{value:z}=s,{root:A}=e;return c.value||!A||!r.value?ce:(O===void 0?R:O)+z+ce-(h+z)/2});return{dropdownPlacement:u,activeIconSize:d,maxIconSize:s,paddingLeft:y,iconMarginRight:H,NMenu:t,NSubmenu:l,NMenuOptionGroup:i}}const Re={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},at=B({name:"MenuDivider",setup(){const e=U(le),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:v("div",{class:`${t.value}-menu-divider`})}}),Ge=Object.assign(Object.assign({},Re),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),st=Ie(Ge),ct=B({name:"MenuOption",props:Ge,setup(e){const t=_e(e),{NSubmenu:o,NMenu:r,NMenuOptionGroup:l}=t,{props:i,mergedClsPrefixRef:c,mergedCollapsedRef:u}=r,s=o?o.mergedDisabledRef:l?l.mergedDisabledRef:{value:!1},d=x(()=>s.value||e.disabled);function y(h){const{onClick:R}=e;R&&R(h)}function H(h){d.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),y(h))}return{mergedClsPrefix:c,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:i,dropdownEnabled:Ce(()=>e.root&&u.value&&i.mode!=="horizontal"&&!d.value),selected:Ce(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:H}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:l}}=this,i=l==null?void 0:l(o.rawNode);return v("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),v(Po,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):X(this.title),trigger:()=>v(Ue,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),We=Object.assign(Object.assign({},Re),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),dt=Ie(We),ut=B({name:"MenuOptionGroup",props:We,setup(e){const t=_e(e),{NSubmenu:o}=t,r=x(()=>o!=null&&o.mergedDisabledRef.value?!0:e.tmNode.disabled);J(He,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:r});const{mergedClsPrefixRef:l,props:i}=U(le);return function(){const{value:c}=l,u=t.paddingLeft.value,{nodeProps:s}=i,d=s==null?void 0:s(e.tmNode.rawNode);return v("div",{class:`${c}-menu-item-group`,role:"group"},v("div",Object.assign({},d,{class:[`${c}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",u!==void 0?`padding-left: ${u}px;`:""]}),X(e.title),e.extra?v(vo,null," ",X(e.extra)):null),v("div",null,e.tmNodes.map(y=>Ae(y,i))))}}});function ye(e){return e.type==="divider"||e.type==="render"}function vt(e){return e.type==="divider"}function Ae(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(ye(o))return vt(o)?v(at,Object.assign({key:e.key},o.props)):null;const{labelField:l}=t,{key:i,level:c,isGroup:u}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[l],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:c,root:c===0,isGroup:u});return e.children?e.isGroup?v(ut,he(s,dt,{tmNode:e,tmNodes:e.children,key:i})):v(ze,he(s,ht,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):v(ct,he(s,st,{key:i,tmNode:e}))}const qe=Object.assign(Object.assign({},Re),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),ht=Ie(qe),ze=B({name:"Submenu",props:qe,setup(e){const t=_e(e),{NMenu:o,NSubmenu:r}=t,{props:l,mergedCollapsedRef:i,mergedThemeRef:c}=o,u=x(()=>{const{disabled:h}=e;return r!=null&&r.mergedDisabledRef.value||l.disabled?!0:h}),s=E(!1);J(De,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:u}),J(He,null);function d(){const{onClick:h}=e;h&&h()}function y(){u.value||(i.value||o.toggleExpand(e.internalKey),d())}function H(h){s.value=h}return{menuProps:l,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:u,mergedValue:o.mergedValueRef,childActive:Ce(()=>{var h;return(h=e.virtualChildActive)!==null&&h!==void 0?h:o.activePathRef.value.includes(e.internalKey)}),collapsed:x(()=>l.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:x(()=>!u.value&&(l.mode==="horizontal"||i.value)),handlePopoverShowChange:H,handleClick:y}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,l=()=>{const{isHorizontal:c,paddingLeft:u,collapsed:s,mergedDisabled:d,maxIconSize:y,activeIconSize:H,title:h,childActive:R,icon:O,handleClick:z,menuProps:{nodeProps:A},dropdownShow:M,iconMarginRight:p,tmNode:k,mergedClsPrefix:T,isEllipsisPlaceholder:_,extra:b}=this,w=A==null?void 0:A(k.rawNode);return v("div",Object.assign({},w,{class:[`${T}-menu-item`,w==null?void 0:w.class],role:"menuitem"}),v(Ue,{tmNode:k,paddingLeft:u,collapsed:s,disabled:d,iconMarginRight:p,maxIconSize:y,activeIconSize:H,title:h,extra:b,showArrow:!c,childActive:R,clsPrefix:T,icon:O,hover:M,onClick:z,isEllipsisPlaceholder:_}))},i=()=>v(ho,null,{default:()=>{const{tmNodes:c,collapsed:u}=this;return u?null:v("div",{class:`${t}-submenu-children`,role:"menu"},c.map(s=>Ae(s,this.menuProps)))}});return this.root?v(je,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>v("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},l(),this.isHorizontal?null:i())}):v("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},l(),i())}}),mt=Object.assign(Object.assign({},G.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),ft=B({name:"Menu",inheritAttrs:!1,props:mt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ne(e),r=G("Menu","-menu",lt,qo,e,t),l=U(Fe,null),i=x(()=>{var g;const{collapsed:S}=e;if(S!==void 0)return S;if(l){const{collapseModeRef:n,collapsedRef:C}=l;if(n.value==="width")return(g=C.value)!==null&&g!==void 0?g:!1}return!1}),c=x(()=>{const{keyField:g,childrenField:S,disabledField:n}=e;return me(e.items||e.options,{getIgnored(C){return ye(C)},getChildren(C){return C[S]},getDisabled(C){return C[n]},getKey(C){var N;return(N=C[g])!==null&&N!==void 0?N:C.name}})}),u=x(()=>new Set(c.value.treeNodes.map(g=>g.key))),{watchProps:s}=e,d=E(null);s!=null&&s.includes("defaultValue")?be(()=>{d.value=e.defaultValue}):d.value=e.defaultValue;const y=de(e,"value"),H=xe(y,d),h=E([]),R=()=>{h.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(H.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?be(R):R();const O=Oo(e,["expandedNames","expandedKeys"]),z=xe(O,h),A=x(()=>c.value.treeNodes),M=x(()=>c.value.getPath(H.value).keyPath);J(le,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:H,mergedExpandedKeysRef:z,activePathRef:M,mergedClsPrefixRef:t,isHorizontalRef:x(()=>e.mode==="horizontal"),invertedRef:de(e,"inverted"),doSelect:p,toggleExpand:T});function p(g,S){const{"onUpdate:value":n,onUpdateValue:C,onSelect:N}=e;C&&K(C,g,S),n&&K(n,g,S),N&&K(N,g,S),d.value=g}function k(g){const{"onUpdate:expandedKeys":S,onUpdateExpandedKeys:n,onExpandedNamesChange:C,onOpenNamesChange:N}=e;S&&K(S,g),n&&K(n,g),C&&K(C,g),N&&K(N,g),h.value=g}function T(g){const S=Array.from(z.value),n=S.findIndex(C=>C===g);if(~n)S.splice(n,1);else{if(e.accordion&&u.value.has(g)){const C=S.findIndex(N=>u.value.has(N));C>-1&&S.splice(C,1)}S.push(g)}k(S)}const _=g=>{const S=c.value.getPath(g??H.value,{includeSelf:!1}).keyPath;if(!S.length)return;const n=Array.from(z.value),C=new Set([...n,...S]);e.accordion&&u.value.forEach(N=>{C.has(N)&&!S.includes(N)&&C.delete(N)}),k(Array.from(C))},b=x(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:S},self:n}=r.value,{borderRadius:C,borderColorHorizontal:N,fontSize:oo,itemHeight:to,dividerColor:ro}=n,a={"--n-divider-color":ro,"--n-bezier":S,"--n-font-size":oo,"--n-border-color-horizontal":N,"--n-border-radius":C,"--n-item-height":to};return g?(a["--n-group-text-color"]=n.groupTextColorInverted,a["--n-color"]=n.colorInverted,a["--n-item-text-color"]=n.itemTextColorInverted,a["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,a["--n-item-text-color-active"]=n.itemTextColorActiveInverted,a["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,a["--n-item-icon-color"]=n.itemIconColorInverted,a["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,a["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,a["--n-arrow-color"]=n.arrowColorInverted,a["--n-arrow-color-hover"]=n.arrowColorHoverInverted,a["--n-arrow-color-active"]=n.arrowColorActiveInverted,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,a["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,a["--n-item-color-hover"]=n.itemColorHoverInverted,a["--n-item-color-active"]=n.itemColorActiveInverted,a["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(a["--n-group-text-color"]=n.groupTextColor,a["--n-color"]=n.color,a["--n-item-text-color"]=n.itemTextColor,a["--n-item-text-color-hover"]=n.itemTextColorHover,a["--n-item-text-color-active"]=n.itemTextColorActive,a["--n-item-text-color-child-active"]=n.itemTextColorChildActive,a["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,a["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,a["--n-item-icon-color"]=n.itemIconColor,a["--n-item-icon-color-hover"]=n.itemIconColorHover,a["--n-item-icon-color-active"]=n.itemIconColorActive,a["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,a["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,a["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,a["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,a["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,a["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,a["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,a["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,a["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,a["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,a["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,a["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,a["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,a["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,a["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,a["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,a["--n-arrow-color"]=n.arrowColor,a["--n-arrow-color-hover"]=n.arrowColorHover,a["--n-arrow-color-active"]=n.arrowColorActive,a["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,a["--n-arrow-color-child-active"]=n.arrowColorChildActive,a["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,a["--n-item-color-hover"]=n.itemColorHover,a["--n-item-color-active"]=n.itemColorActive,a["--n-item-color-active-hover"]=n.itemColorActiveHover,a["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),a}),w=o?ie("menu",x(()=>e.inverted?"a":"b"),b,e):void 0,j=mo(),F=E(null),ee=E(null);let L=!0;const ae=()=>{var g;L?L=!1:(g=F.value)===null||g===void 0||g.sync({showAllItemsBeforeCalculate:!0})};function oe(){return document.getElementById(j)}const se=E(-1);function Ye(g){se.value=e.options.length-g}function Xe(g){g||(se.value=-1)}const Je=x(()=>{const g=se.value;return{children:g===-1?[]:e.options.slice(g)}}),Qe=x(()=>{const{childrenField:g,disabledField:S,keyField:n}=e;return me([Je.value],{getIgnored(C){return ye(C)},getChildren(C){return C[g]},getDisabled(C){return C[S]},getKey(C){var N;return(N=C[n])!==null&&N!==void 0?N:C.name}})}),Ze=x(()=>me([{}]).treeNodes[0]);function eo(){var g;if(se.value===-1)return v(ze,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ze.value,domId:j,isEllipsisPlaceholder:!0});const S=Qe.value.treeNodes[0],n=M.value,C=!!(!((g=S.children)===null||g===void 0)&&g.some(N=>n.includes(N.key)));return v(ze,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:C,tmNode:S,domId:j,rawNodes:S.rawNode.children||[],tmNodes:S.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:O,uncontrolledExpanededKeys:h,mergedExpandedKeys:z,uncontrolledValue:d,mergedValue:H,activePath:M,tmNodes:A,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:b,themeClass:w==null?void 0:w.themeClass,overflowRef:F,counterRef:ee,updateCounter:()=>{},onResize:ae,onUpdateOverflow:Xe,onUpdateCount:Ye,renderCounter:eo,getCounter:oe,onRender:w==null?void 0:w.onRender,showOption:_,deriveResponsiveState:ae}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;r==null||r();const l=()=>this.tmNodes.map(s=>Ae(s,this.$props)),c=t==="horizontal"&&this.responsive,u=()=>v("div",fo(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,c&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),c?v(To,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:l,counter:this.renderCounter}):l());return c?v(Be,{onResize:this.onResize},{default:u}):u()}}),pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},gt=po('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 416v64"></path><path d="M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M320 192h112a32 32 0 0 1 32 32v256h0h-160h0V208a16 16 0 0 1 16-16z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M98.08 351.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M98.08 271.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M98.08 191.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M98.08 111.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M178.08 351.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M178.08 271.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M178.08 191.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M178.08 111.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M258.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M258.08 351.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M258.08 271.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><ellipse cx="256" cy="176" rx="15.95" ry="16.03" transform="rotate(-45 255.99 175.996)" fill="currentColor"></ellipse><path d="M258.08 111.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79z" fill="currentColor"></path><path d="M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16z" fill="currentColor"></path><path d="M400 320a16 16 0 1 0 16 16a16 16 0 0 0-16-16z" fill="currentColor"></path><path d="M400 240a16 16 0 1 0 16 16a16 16 0 0 0-16-16z" fill="currentColor"></path><path d="M336 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16z" fill="currentColor"></path><path d="M336 320a16 16 0 1 0 16 16a16 16 0 0 0-16-16z" fill="currentColor"></path><path d="M336 240a16 16 0 1 0 16 16a16 16 0 0 0-16-16z" fill="currentColor"></path>',23),bt=[gt],Ct=B({name:"BusinessOutline",render:function(t,o){return Y(),Z("svg",pt,bt)}}),xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},yt=$("rect",{x:"32",y:"64",width:"448",height:"320",rx:"32",ry:"32",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),zt=$("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M304 448l-8-64h-80l-8 64h96z",fill:"currentColor"},null,-1),wt=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 448H144"},null,-1),It=$("path",{d:"M32 304v48a32.09 32.09 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32v-48zm224 64a16 16 0 1 1 16-16a16 16 0 0 1-16 16z",fill:"currentColor"},null,-1),St=[yt,zt,wt,It],kt=B({name:"DesktopOutline",render:function(t,o){return Y(),Z("svg",xt,St)}}),Ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_t=$("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Rt=$("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),At=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1),Pt=[_t,Rt,At],Ot=B({name:"HomeOutline",render:function(t,o){return Y(),Z("svg",Ht,Pt)}}),Tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Mt=$("path",{d:"M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Nt=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 336l80-80l-80-80"},null,-1),$t=$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 256h256"},null,-1),Bt=[Mt,Nt,$t],Et=B({name:"LogOutOutline",render:function(t,o){return Y(),Z("svg",Tt,Bt)}}),Lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},jt=$("path",{d:"M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ft=$("path",{d:"M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Kt=$("path",{d:"M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Vt=$("path",{d:"M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Dt=[jt,Ft,Kt,Vt],Ut=B({name:"PeopleOutline",render:function(t,o){return Y(),Z("svg",Lt,Dt)}}),Gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Wt=$("path",{d:"M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),qt=$("path",{d:"M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Yt=[Wt,qt],Xt=B({name:"PersonOutline",render:function(t,o){return Y(),Z("svg",Gt,Yt)}}),Jt={class:"flex items-center gap-4"},Qt={class:"flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"},Zt=B({__name:"Dashboard",setup(e){const t=bo(),o=xo(),r=ko();function l(d){return()=>v(Pe,null,{default:()=>v(d)})}const i=[{label:"仪表盘",key:"dashboard",icon:l(Ot),onClick:()=>t.push("/")},{label:"设备管理",key:"device-list",icon:l(kt),onClick:()=>t.push("/device/list")},{label:"用户管理",key:"user-list",icon:l(Ut),onClick:()=>t.push("/system/user")},{label:"部门管理",key:"dept-list",icon:l(Ct),onClick:()=>t.push("/system/dept")}],c=[{label:"退出登录",key:"logout",icon:l(Et)}],u=d=>{d==="logout"&&(o.logout(),r.success("已退出登录"),t.push("/login"))},s=E("dashboard");return(d,y)=>{const H=Co("router-view");return Y(),go(V(Oe),{"has-sider":"",class:"h-screen"},{default:W(()=>[D(V(it),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,"native-scrollbar":!1,class:"bg-gray-50 dark:bg-gray-900"},{default:W(()=>[y[1]||(y[1]=$("div",{class:"h-16 flex items-center justify-center font-bold text-xl text-primary"}," IRMS ",-1)),D(V(ft),{value:s.value,"onUpdate:value":y[0]||(y[0]=h=>s.value=h),"collapsed-width":64,"collapsed-icon-size":22,options:i},null,8,["value"])]),_:1}),D(V(Oe),null,{default:W(()=>[D(V(et),{bordered:"",class:"h-16 flex items-center justify-between px-6 bg-white dark:bg-gray-800"},{default:W(()=>[y[3]||(y[3]=$("div",{class:"text-lg font-medium"},"内部资源管理系统",-1)),$("div",Jt,[D(V(je),{options:c,onSelect:u},{default:W(()=>[$("div",Qt,[D(V(Do),{round:"",size:"small"},{default:W(()=>[D(V(Pe),null,{default:W(()=>[D(V(Xt))]),_:1})]),_:1}),y[2]||(y[2]=$("span",null,"Admin",-1))])]),_:1})])]),_:1}),D(V(Jo),{"content-style":"padding: 24px;",class:"bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-64px)]"},{default:W(()=>[D(H)]),_:1})]),_:1})]),_:1})}}}),ar=Mo(Zt,[["__scopeId","data-v-2fd406a9"]]);export{ar as default};
