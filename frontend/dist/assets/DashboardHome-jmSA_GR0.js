import{t as C,r as D,C as Be,W as ve,X as Ie,Y as oe,Z as De,_ as ie,i as J,j as q,k as me,d as B,h as a,v as be,$ as Oe,R as ne,s as Y,M as H,A as K,H as xe,I as Z,a0 as se,p as G,l as v,m as Ge,n as Me,G as R,q as z,a1 as ye,x as L,z as ee,a2 as je,B as Ee,a3 as Te,N as Ce,a4 as Se,a5 as $e,a6 as we,a7 as _e,y as le,c as j,o as O,a as P,b as N,w as I,u as w,e as We,a8 as ae,O as ce,a9 as de,T as Ae,aa as T}from"./index-CbXCqKD3.js";import{h as Ve,p as V,V as Le,i as Fe,j as qe,f as W,a as X,u as He,N as U,g as Xe}from"./request-z8cQBAtn.js";import{g as Ye}from"./get-slot-Bk_rJcZu.js";import{b as Ue,N as Qe}from"./Icon-2OaqK9uy.js";import{u as Ze}from"./use-locale-Bf7Nte8p.js";import{_ as Je}from"./_plugin-vue_export-helper-DlAUqK2U.js";function Ke(e){if(typeof e=="number")return{"":e.toString()};const r={};return e.split(/ +/).forEach(t=>{if(t==="")return;const[i,s]=t.split(":");s===void 0?r[""]=i:r[i]=s}),r}function A(e,r){var t;if(e==null)return;const i=Ke(e);if(r===void 0)return i[""];if(typeof r=="string")return(t=i[r])!==null&&t!==void 0?t:i[""];if(Array.isArray(r)){for(let s=r.length-1;s>=0;--s){const n=r[s];if(n in i)return i[n]}return i[""]}else{let s,n=-1;return Object.keys(i).forEach(o=>{const l=Number(o);!Number.isNaN(l)&&r>=l&&l>=n&&(n=l,s=i[o])}),s}}const er={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function rr(e){return`(min-width: ${e}px)`}const F={};function tr(e=er){if(!Ve)return C(()=>[]);if(typeof window.matchMedia!="function")return C(()=>[]);const r=D({}),t=Object.keys(e),i=(s,n)=>{s.matches?r.value[n]=!0:r.value[n]=!1};return t.forEach(s=>{const n=e[s];let o,l;F[n]===void 0?(o=window.matchMedia(rr(n)),o.addEventListener?o.addEventListener("change",f=>{l.forEach(d=>{d(f,s)})}):o.addListener&&o.addListener(f=>{l.forEach(d=>{d(f,s)})}),l=new Set,F[n]={mql:o,cbs:l}):(o=F[n].mql,l=F[n].cbs),l.add(i),o.matches&&l.forEach(f=>{f(o,s)})}),Be(()=>{t.forEach(s=>{const{cbs:n}=F[e[s]];n.has(i)&&n.delete(i)})}),C(()=>{const{value:s}=r;return t.filter(n=>s[n])})}function or(e){var r;const t=(r=e.dirs)===null||r===void 0?void 0:r.find(({dir:i})=>i===ve);return!!(t&&t.value===!1)}var ir=/\s/;function nr(e){for(var r=e.length;r--&&ir.test(e.charAt(r)););return r}var sr=/^\s+/;function lr(e){return e&&e.slice(0,nr(e)+1).replace(sr,"")}var ue=NaN,ar=/^[-+]0x[0-9a-f]+$/i,cr=/^0b[01]+$/i,dr=/^0o[0-7]+$/i,ur=parseInt;function Re(e){if(typeof e=="number")return e;if(Ie(e))return ue;if(oe(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=oe(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=lr(e);var t=cr.test(e);return t||dr.test(e)?ur(e.slice(2),t?2:8):ar.test(e)?ue:+e}var fe=1/0,fr=17976931348623157e292;function pr(e){if(!e)return e===0?e:0;if(e=Re(e),e===fe||e===-fe){var r=e<0?-1:1;return r*fr}return e===e?e:0}function gr(e){var r=pr(e),t=r%1;return r===r?t?r-t:r:0}var hr=De.isFinite,vr=Math.min;function mr(e){var r=Math[e];return function(t,i){if(t=Re(t),i=i==null?0:vr(gr(i),292),i&&hr(t)){var s=(ie(t)+"e").split("e"),n=r(s[0]+"e"+(+s[1]+i));return s=(ie(n)+"e").split("e"),+(s[0]+"e"+(+s[1]-i))}return r(t)}}var br=mr("round");function xr(e){const{textColor2:r,cardColor:t,modalColor:i,popoverColor:s,dividerColor:n,borderRadius:o,fontSize:l,hoverColor:f}=e;return{textColor:r,color:t,colorHover:f,colorModal:i,colorHoverModal:q(i,f),colorPopover:s,colorHoverPopover:q(s,f),borderColor:n,borderColorModal:q(i,n),borderColorPopover:q(s,n),borderRadius:o,fontSize:l}}const yr={common:J,self:xr};function Cr(e){const{infoColor:r,successColor:t,warningColor:i,errorColor:s,textColor2:n,progressRailColor:o,fontSize:l,fontWeight:f}=e;return{fontSize:l,fontSizeCircle:"28px",fontWeightCircle:f,railColor:o,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:r,iconColorInfo:r,iconColorSuccess:t,iconColorWarning:i,iconColorError:s,textColorCircle:n,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:n,fillColor:r,fillColorInfo:r,fillColorSuccess:t,fillColorWarning:i,fillColorError:s,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}}const Sr={common:J,self:Cr};function $r(e){const{textColor2:r,textColor3:t,fontSize:i,fontWeight:s}=e;return{labelFontSize:i,labelFontWeight:s,valueFontWeight:s,valueFontSize:"24px",labelTextColor:t,valuePrefixTextColor:r,valueSuffixTextColor:r,valueTextColor:r}}const wr={common:J,self:$r},pe=1,ke=me("n-grid"),Ne=1,_r={span:{type:[Number,String],default:Ne},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},Rr=B({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:_r,setup(){const{isSsrRef:e,xGapRef:r,itemStyleRef:t,overflowRef:i,layoutShiftDisabledRef:s}=be(ke),n=Oe();return{overflow:i,itemStyle:t,layoutShiftDisabled:s,mergedXGap:C(()=>V(r.value||0)),deriveStyle:()=>{e.value;const{privateSpan:o=Ne,privateShow:l=!0,privateColStart:f=void 0,privateOffset:d=0}=n.vnode.props,{value:m}=r,g=V(m||0);return{display:l?"":"none",gridColumn:`${f??`span ${o}`} / span ${o}`,marginLeft:d?`calc((100% - (${o} - 1) * ${g}) / ${o} * ${d} + ${g} * ${d})`:""}}}},render(){var e,r;if(this.layoutShiftDisabled){const{span:t,offset:i,mergedXGap:s}=this;return a("div",{style:{gridColumn:`span ${t} / span ${t}`,marginLeft:i?`calc((100% - (${t} - 1) * ${s}) / ${t} * ${i} + ${s} * ${i})`:""}},this.$slots)}return a("div",{style:[this.itemStyle,this.deriveStyle()]},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e,{overflow:this.overflow}))}}),kr={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},ze=24,Q="__ssr__",Nr={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:ze},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},zr=B({name:"Grid",inheritAttrs:!1,props:Nr,setup(e){const{mergedClsPrefixRef:r,mergedBreakpointsRef:t}=Y(e),i=/^\d+$/,s=D(void 0),n=tr((t==null?void 0:t.value)||kr),o=H(()=>!!(e.itemResponsive||!i.test(e.cols.toString())||!i.test(e.xGap.toString())||!i.test(e.yGap.toString()))),l=C(()=>{if(o.value)return e.responsive==="self"?s.value:n.value}),f=H(()=>{var x;return(x=Number(A(e.cols.toString(),l.value)))!==null&&x!==void 0?x:ze}),d=H(()=>A(e.xGap.toString(),l.value)),m=H(()=>A(e.yGap.toString(),l.value)),g=x=>{s.value=x.contentRect.width},c=x=>{Ue(g,x)},b=D(!1),h=C(()=>{if(e.responsive==="self")return c}),u=D(!1),y=D();return K(()=>{const{value:x}=y;x&&x.hasAttribute(Q)&&(x.removeAttribute(Q),u.value=!0)}),xe(ke,{layoutShiftDisabledRef:Z(e,"layoutShiftDisabled"),isSsrRef:u,itemStyleRef:Z(e,"itemStyle"),xGapRef:d,overflowRef:b}),{isSsr:!Fe,contentEl:y,mergedClsPrefix:r,style:C(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:V(e.xGap),rowGap:V(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${f.value}, minmax(0, 1fr))`,columnGap:V(d.value),rowGap:V(m.value)}),isResponsive:o,responsiveQuery:l,responsiveCols:f,handleResize:h,overflow:b}},render(){if(this.layoutShiftDisabled)return a("div",ne({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var r,t,i,s,n,o,l;this.overflow=!1;const f=qe(Ye(this)),d=[],{collapsed:m,collapsedRows:g,responsiveCols:c,responsiveQuery:b}=this;f.forEach(p=>{var S,$,_,k,M;if(((S=p==null?void 0:p.type)===null||S===void 0?void 0:S.__GRID_ITEM__)!==!0)return;if(or(p)){const E=se(p);E.props?E.props.privateShow=!1:E.props={privateShow:!1},d.push({child:E,rawChildSpan:0});return}p.dirs=(($=p.dirs)===null||$===void 0?void 0:$.filter(({dir:E})=>E!==ve))||null,((_=p.dirs)===null||_===void 0?void 0:_.length)===0&&(p.dirs=null);const re=se(p),te=Number((M=A((k=re.props)===null||k===void 0?void 0:k.span,b))!==null&&M!==void 0?M:pe);te!==0&&d.push({child:re,rawChildSpan:te})});let h=0;const u=(r=d[d.length-1])===null||r===void 0?void 0:r.child;if(u!=null&&u.props){const p=(t=u.props)===null||t===void 0?void 0:t.suffix;p!==void 0&&p!==!1&&(h=Number((s=A((i=u.props)===null||i===void 0?void 0:i.span,b))!==null&&s!==void 0?s:pe),u.props.privateSpan=h,u.props.privateColStart=c+1-h,u.props.privateShow=(n=u.props.privateShow)!==null&&n!==void 0?n:!0)}let y=0,x=!1;for(const{child:p,rawChildSpan:S}of d){if(x&&(this.overflow=!0),!x){const $=Number((l=A((o=p.props)===null||o===void 0?void 0:o.offset,b))!==null&&l!==void 0?l:0),_=Math.min(S+$,c);if(p.props?(p.props.privateSpan=_,p.props.privateOffset=$):p.props={privateSpan:_,privateOffset:$},m){const k=y%c;_+k>c&&(y+=c-k),_+y+h>g*c?x=!0:y+=_}}x&&(p.props?p.props.privateShow!==!0&&(p.props.privateShow=!1):p.props={privateShow:!1})}return a("div",ne({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[Q]:this.isSsr||void 0},this.$attrs),d.map(({child:p})=>p))};return this.isResponsive&&this.responsive==="self"?a(Le,{onResize:this.handleResize},{default:e}):e()}}),Pr=G([v("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[R("show-divider",[v("list-item",[G("&:not(:last-child)",[z("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),R("clickable",[v("list-item",`
 cursor: pointer;
 `)]),R("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),R("hoverable",[v("list-item",`
 border-radius: var(--n-border-radius);
 `,[G("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[z("divider",`
 background-color: transparent;
 `)])])]),R("bordered, hoverable",[v("list-item",`
 padding: 12px 20px;
 `),z("header, footer",`
 padding: 12px 20px;
 `)]),z("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[G("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),v("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[z("prefix",`
 margin-right: 20px;
 flex: 0;
 `),z("suffix",`
 margin-left: 20px;
 flex: 0;
 `),z("main",`
 flex: 1;
 `),z("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),Ge(v("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Me(v("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Br=Object.assign(Object.assign({},L.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),Pe=me("n-list"),Ir=B({name:"List",props:Br,slots:Object,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t,mergedRtlRef:i}=Y(e),s=ye("List",i,r),n=L("List","-list",Pr,yr,e,r);xe(Pe,{showDividerRef:Z(e,"showDivider"),mergedClsPrefixRef:r});const o=C(()=>{const{common:{cubicBezierEaseInOut:f},self:{fontSize:d,textColor:m,color:g,colorModal:c,colorPopover:b,borderColor:h,borderColorModal:u,borderColorPopover:y,borderRadius:x,colorHover:p,colorHoverModal:S,colorHoverPopover:$}}=n.value;return{"--n-font-size":d,"--n-bezier":f,"--n-text-color":m,"--n-color":g,"--n-border-radius":x,"--n-border-color":h,"--n-border-color-modal":u,"--n-border-color-popover":y,"--n-color-modal":c,"--n-color-popover":b,"--n-color-hover":p,"--n-color-hover-modal":S,"--n-color-hover-popover":$}}),l=t?ee("list",void 0,o,e):void 0;return{mergedClsPrefix:r,rtlEnabled:s,cssVars:t?void 0:o,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:t,onRender:i}=this;return i==null||i(),a("ul",{class:[`${t}-list`,this.rtlEnabled&&`${t}-list--rtl`,this.bordered&&`${t}-list--bordered`,this.showDivider&&`${t}-list--show-divider`,this.hoverable&&`${t}-list--hoverable`,this.clickable&&`${t}-list--clickable`,this.themeClass],style:this.cssVars},r.header?a("div",{class:`${t}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?a("div",{class:`${t}-list__footer`},r.footer()):null)}}),Dr=B({name:"ListItem",slots:Object,setup(){const e=be(Pe,null);return e||je("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return a("li",{class:`${r}-list-item`},e.prefix?a("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?a("div",{class:`${r}-list-item__main`},e):null,e.suffix?a("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&a("div",{class:`${r}-list-item__divider`}))}}),Or=e=>1-Math.pow(1-e,5);function Gr(e){const{from:r,to:t,duration:i,onUpdate:s,onFinish:n}=e,o=performance.now(),l=()=>{const f=performance.now(),d=Math.min(f-o,i),m=r+(t-r)*Or(d/i);if(d===i){n();return}s(m),requestAnimationFrame(l)};l()}const Mr={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},jr=B({name:"NumberAnimation",props:Mr,setup(e){const{localeRef:r}=Ze("name"),{duration:t}=e,i=D(e.from),s=C(()=>{const{locale:c}=e;return c!==void 0?c:r.value});let n=!1;const o=c=>{i.value=c},l=()=>{var c;i.value=e.to,n=!1,(c=e.onFinish)===null||c===void 0||c.call(e)},f=(c=e.from,b=e.to)=>{n=!0,i.value=e.from,c!==b&&Gr({from:c,to:b,duration:t,onUpdate:o,onFinish:l})},d=C(()=>{var c;const h=br(i.value,e.precision).toFixed(e.precision).split("."),u=new Intl.NumberFormat(s.value),y=(c=u.formatToParts(.5).find(S=>S.type==="decimal"))===null||c===void 0?void 0:c.value,x=e.showSeparator?u.format(Number(h[0])):h[0],p=h[1];return{integer:x,decimal:p,decimalSeparator:y}});function m(){n||f()}return K(()=>{Ee(()=>{e.active&&f()})}),Object.assign({formattedValue:d},{play:m})},render(){const{formattedValue:{integer:e,decimal:r,decimalSeparator:t}}=this;return[e,r?t:null,r]}}),Er={success:a(_e,null),error:a(we,null),warning:a($e,null),info:a(Se,null)},Tr=B({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:r}){const t=C(()=>{const n="gradient",{fillColor:o}=e;return typeof o=="object"?`${n}-${Te(JSON.stringify(o))}`:n});function i(n,o,l,f){const{gapDegree:d,viewBoxWidth:m,strokeWidth:g}=e,c=50,b=0,h=c,u=0,y=2*c,x=50+g/2,p=`M ${x},${x} m ${b},${h}
      a ${c},${c} 0 1 1 ${u},${-y}
      a ${c},${c} 0 1 1 ${-u},${y}`,S=Math.PI*2*c,$={stroke:f==="rail"?l:typeof e.fillColor=="object"?`url(#${t.value})`:l,strokeDasharray:`${Math.min(n,100)/100*(S-d)}px ${m*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:o?"center":void 0,transform:o?`rotate(${o}deg)`:void 0};return{pathString:p,pathStyle:$}}const s=()=>{const n=typeof e.fillColor=="object",o=n?e.fillColor.stops[0]:"",l=n?e.fillColor.stops[1]:"";return n&&a("defs",null,a("linearGradient",{id:t.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},a("stop",{offset:"0%","stop-color":o}),a("stop",{offset:"100%","stop-color":l})))};return()=>{const{fillColor:n,railColor:o,strokeWidth:l,offsetDegree:f,status:d,percentage:m,showIndicator:g,indicatorTextColor:c,unit:b,gapOffsetDegree:h,clsPrefix:u}=e,{pathString:y,pathStyle:x}=i(100,0,o,"rail"),{pathString:p,pathStyle:S}=i(m,f,n,"fill"),$=100+l;return a("div",{class:`${u}-progress-content`,role:"none"},a("div",{class:`${u}-progress-graph`,"aria-hidden":!0},a("div",{class:`${u}-progress-graph-circle`,style:{transform:h?`rotate(${h}deg)`:void 0}},a("svg",{viewBox:`0 0 ${$} ${$}`},s(),a("g",null,a("path",{class:`${u}-progress-graph-circle-rail`,d:y,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:x})),a("g",null,a("path",{class:[`${u}-progress-graph-circle-fill`,m===0&&`${u}-progress-graph-circle-fill--empty`],d:p,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:S}))))),g?a("div",null,r.default?a("div",{class:`${u}-progress-custom-content`,role:"none"},r.default()):d!=="default"?a("div",{class:`${u}-progress-icon`,"aria-hidden":!0},a(Ce,{clsPrefix:u},{default:()=>Er[d]})):a("div",{class:`${u}-progress-text`,style:{color:c},role:"none"},a("span",{class:`${u}-progress-text__percentage`},m),a("span",{class:`${u}-progress-text__unit`},b))):null)}}}),Wr={success:a(_e,null),error:a(we,null),warning:a($e,null),info:a(Se,null)},Ar=B({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:r}){const t=C(()=>W(e.height)),i=C(()=>{var o,l;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(o=e.fillColor)===null||o===void 0?void 0:o.stops[0]} , ${(l=e.fillColor)===null||l===void 0?void 0:l.stops[1]})`:e.fillColor}),s=C(()=>e.railBorderRadius!==void 0?W(e.railBorderRadius):e.height!==void 0?W(e.height,{c:.5}):""),n=C(()=>e.fillBorderRadius!==void 0?W(e.fillBorderRadius):e.railBorderRadius!==void 0?W(e.railBorderRadius):e.height!==void 0?W(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:o,railColor:l,railStyle:f,percentage:d,unit:m,indicatorTextColor:g,status:c,showIndicator:b,processing:h,clsPrefix:u}=e;return a("div",{class:`${u}-progress-content`,role:"none"},a("div",{class:`${u}-progress-graph`,"aria-hidden":!0},a("div",{class:[`${u}-progress-graph-line`,{[`${u}-progress-graph-line--indicator-${o}`]:!0}]},a("div",{class:`${u}-progress-graph-line-rail`,style:[{backgroundColor:l,height:t.value,borderRadius:s.value},f]},a("div",{class:[`${u}-progress-graph-line-fill`,h&&`${u}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:i.value,height:t.value,lineHeight:t.value,borderRadius:n.value}},o==="inside"?a("div",{class:`${u}-progress-graph-line-indicator`,style:{color:g}},r.default?r.default():`${d}${m}`):null)))),b&&o==="outside"?a("div",null,r.default?a("div",{class:`${u}-progress-custom-content`,style:{color:g},role:"none"},r.default()):c==="default"?a("div",{role:"none",class:`${u}-progress-icon ${u}-progress-icon--as-text`,style:{color:g}},d,m):a("div",{class:`${u}-progress-icon`,"aria-hidden":!0},a(Ce,{clsPrefix:u},{default:()=>Wr[c]}))):null)}}});function ge(e,r,t=100){return`m ${t/2} ${t/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Vr=B({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:r}){const t=C(()=>e.percentage.map((n,o)=>`${Math.PI*n/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*o)-e.circleGap*o)*2}, ${e.viewBoxWidth*8}`)),i=(s,n)=>{const o=e.fillColor[n],l=typeof o=="object"?o.stops[0]:"",f=typeof o=="object"?o.stops[1]:"";return typeof e.fillColor[n]=="object"&&a("linearGradient",{id:`gradient-${n}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},a("stop",{offset:"0%","stop-color":l}),a("stop",{offset:"100%","stop-color":f}))};return()=>{const{viewBoxWidth:s,strokeWidth:n,circleGap:o,showIndicator:l,fillColor:f,railColor:d,railStyle:m,percentage:g,clsPrefix:c}=e;return a("div",{class:`${c}-progress-content`,role:"none"},a("div",{class:`${c}-progress-graph`,"aria-hidden":!0},a("div",{class:`${c}-progress-graph-circle`},a("svg",{viewBox:`0 0 ${s} ${s}`},a("defs",null,g.map((b,h)=>i(b,h))),g.map((b,h)=>a("g",{key:h},a("path",{class:`${c}-progress-graph-circle-rail`,d:ge(s/2-n/2*(1+2*h)-o*h,n,s),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[h]},m[h]]}),a("path",{class:[`${c}-progress-graph-circle-fill`,b===0&&`${c}-progress-graph-circle-fill--empty`],d:ge(s/2-n/2*(1+2*h)-o*h,n,s),"stroke-width":n,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:t.value[h],strokeDashoffset:0,stroke:typeof f[h]=="object"?`url(#gradient-${h})`:f[h]}})))))),l&&r.default?a("div",null,a("div",{class:`${c}-progress-text`},r.default())):null)}}}),Lr=G([v("progress",{display:"inline-block"},[v("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),R("line",`
 width: 100%;
 display: block;
 `,[v("progress-content",`
 display: flex;
 align-items: center;
 `,[v("progress-graph",{flex:1})]),v("progress-custom-content",{marginLeft:"14px"}),v("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[R("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),R("circle, dashboard",{width:"120px"},[v("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),v("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),v("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),R("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[v("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),v("progress-content",{position:"relative"}),v("progress-graph",{position:"relative"},[v("progress-graph-circle",[G("svg",{verticalAlign:"bottom"}),v("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[R("empty",{opacity:0})]),v("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),v("progress-graph-line",[R("indicator-inside",[v("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[v("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),v("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),R("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[v("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),v("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),v("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[v("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[R("processing",[G("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),G("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Fr=Object.assign(Object.assign({},L.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),he=B({name:"Progress",props:Fr,setup(e){const r=C(()=>e.indicatorPlacement||e.indicatorPosition),t=C(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:i,inlineThemeDisabled:s}=Y(e),n=L("Progress","-progress",Lr,Sr,e,i),o=C(()=>{const{status:f}=e,{common:{cubicBezierEaseInOut:d},self:{fontSize:m,fontSizeCircle:g,railColor:c,railHeight:b,iconSizeCircle:h,iconSizeLine:u,textColorCircle:y,textColorLineInner:x,textColorLineOuter:p,lineBgProcessing:S,fontWeightCircle:$,[le("iconColor",f)]:_,[le("fillColor",f)]:k}}=n.value;return{"--n-bezier":d,"--n-fill-color":k,"--n-font-size":m,"--n-font-size-circle":g,"--n-font-weight-circle":$,"--n-icon-color":_,"--n-icon-size-circle":h,"--n-icon-size-line":u,"--n-line-bg-processing":S,"--n-rail-color":c,"--n-rail-height":b,"--n-text-color-circle":y,"--n-text-color-line-inner":x,"--n-text-color-line-outer":p}}),l=s?ee("progress",C(()=>e.status[0]),o,e):void 0;return{mergedClsPrefix:i,mergedIndicatorPlacement:r,gapDeg:t,cssVars:s?void 0:o,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{type:e,cssVars:r,indicatorTextColor:t,showIndicator:i,status:s,railColor:n,railStyle:o,color:l,percentage:f,viewBoxWidth:d,strokeWidth:m,mergedIndicatorPlacement:g,unit:c,borderRadius:b,fillBorderRadius:h,height:u,processing:y,circleGap:x,mergedClsPrefix:p,gapDeg:S,gapOffsetDegree:$,themeClass:_,$slots:k,onRender:M}=this;return M==null||M(),a("div",{class:[_,`${p}-progress`,`${p}-progress--${e}`,`${p}-progress--${s}`],style:r,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":f,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?a(Tr,{clsPrefix:p,status:s,showIndicator:i,indicatorTextColor:t,railColor:n,fillColor:l,railStyle:o,offsetDegree:this.offsetDegree,percentage:f,viewBoxWidth:d,strokeWidth:m,gapDegree:S===void 0?e==="dashboard"?75:0:S,gapOffsetDegree:$,unit:c},k):e==="line"?a(Ar,{clsPrefix:p,status:s,showIndicator:i,indicatorTextColor:t,railColor:n,fillColor:l,railStyle:o,percentage:f,processing:y,indicatorPlacement:g,unit:c,fillBorderRadius:h,railBorderRadius:b,height:u},k):e==="multiple-circle"?a(Vr,{clsPrefix:p,strokeWidth:m,railColor:n,fillColor:l,railStyle:o,viewBoxWidth:d,percentage:f,showIndicator:i,circleGap:x},k):null)}}),qr=v("statistic",[z("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),v("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[z("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[v("icon",{verticalAlign:"-0.125em"})]),z("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),z("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[v("icon",{verticalAlign:"-0.125em"})])])]),Hr=Object.assign(Object.assign({},L.props),{tabularNums:Boolean,label:String,value:[String,Number]}),Xr=B({name:"Statistic",props:Hr,slots:Object,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t,mergedRtlRef:i}=Y(e),s=L("Statistic","-statistic",qr,wr,e,r),n=ye("Statistic",i,r),o=C(()=>{const{self:{labelFontWeight:f,valueFontSize:d,valueFontWeight:m,valuePrefixTextColor:g,labelTextColor:c,valueSuffixTextColor:b,valueTextColor:h,labelFontSize:u},common:{cubicBezierEaseInOut:y}}=s.value;return{"--n-bezier":y,"--n-label-font-size":u,"--n-label-font-weight":f,"--n-label-text-color":c,"--n-value-font-weight":m,"--n-value-font-size":d,"--n-value-prefix-text-color":g,"--n-value-suffix-text-color":b,"--n-value-text-color":h}}),l=t?ee("statistic",void 0,o,e):void 0;return{rtlEnabled:n,mergedClsPrefix:r,cssVars:t?void 0:o,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:r,$slots:{default:t,label:i,prefix:s,suffix:n}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${r}-statistic`,this.themeClass,this.rtlEnabled&&`${r}-statistic--rtl`],style:this.cssVars},X(i,o=>a("div",{class:`${r}-statistic__label`},this.label||o)),a("div",{class:`${r}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},X(s,o=>o&&a("span",{class:`${r}-statistic-value__prefix`},o)),this.value!==void 0?a("span",{class:`${r}-statistic-value__content`},this.value):X(t,o=>o&&a("span",{class:`${r}-statistic-value__content`},o)),X(n,o=>o&&a("span",{class:`${r}-statistic-value__suffix`},o))))}}),Yr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ur=P("ellipse",{cx:"256",cy:"128",rx:"192",ry:"80",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Qr=P("path",{d:"M448 214c0 44.18-86 80-192 80S64 258.18 64 214",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Zr=P("path",{d:"M448 300c0 44.18-86 80-192 80S64 344.18 64 300",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Jr=P("path",{d:"M64 127.24v257.52C64 428.52 150 464 256 464s192-35.48 192-79.24V127.24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Kr=[Ur,Qr,Zr,Jr],et=B({name:"ServerOutline",render:function(r,t){return O(),j("svg",Yr,Kr)}}),rt={class:"space-y-6"},tt={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},ot={class:"mb-2 flex justify-between"},it={class:"text-gray-500 text-sm"},nt={key:0,class:"text-center text-gray-400 py-4"},st={class:"space-y-4"},lt=["onClick"],at={class:"w-24 text-right whitespace-nowrap"},ct={class:"flex-1"},dt={class:"w-16"},ut={key:0,class:"text-center text-gray-400 py-4"},ft=B({__name:"DashboardHome",setup(e){const r=We(),t=He(),i=D({deviceCount:0,ipUsage:[],ipBindingDist:[]}),s=D(!1),n=D([]),o=async()=>{s.value=!0;try{const d=await Xe.get("/dashboard/stats");i.value=d,n.value=d.ipBindingDist||[]}catch{t.error("获取仪表盘数据失败")}finally{s.value=!1}},l=d=>{const m=d.replace(/[xX]$/,"");r.push({path:"/device/list",query:{ipAddress:m}})},f=d=>{d.ipCount===">=4"||d.ipCount==="4+"?r.push({path:"/device/list",query:{minIpCount:4}}):r.push({path:"/device/list",query:{ipCount:d.ipCount}})};return K(()=>{o()}),(d,m)=>(O(),j("div",rt,[N(w(zr),{"x-gap":12,"y-gap":12,cols:"1 200:1 600:2 800:3"},{default:I(()=>[N(w(Rr),null,{default:I(()=>[N(w(U),{bordered:!1,class:"rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow",onClick:m[0]||(m[0]=g=>w(r).push("/device/list"))},{default:I(()=>[N(w(Xr),{label:"设备总量"},{prefix:I(()=>[N(w(Qe),{class:"text-primary"},{default:I(()=>[N(w(et))]),_:1})]),default:I(()=>[N(w(jr),{from:0,to:i.value.deviceCount},null,8,["to"])]),_:1})]),_:1})]),_:1})]),_:1}),P("div",tt,[N(w(U),{title:"IP 地址使用情况 (点击查看详情)",bordered:!1,class:"rounded-xl shadow-sm"},{default:I(()=>[N(w(Ir),null,{default:I(()=>[(O(!0),j(ce,null,de(i.value.ipUsage,(g,c)=>(O(),Ae(w(Dr),{key:c,class:"cursor-pointer hover:bg-gray-50 p-2 rounded",onClick:b=>l(g.subnet)},{default:I(()=>[P("div",ot,[P("span",null,T(g.subnet),1),P("span",it,"已用: "+T(g.used)+" / "+T(g.total)+" ("+T(g.usageRate)+"%)",1)]),N(w(he),{type:"line",percentage:Number(g.usageRate),color:Number(g.usageRate)>80?"#d03050":"#18a058",processing:""},null,8,["percentage","color"])]),_:2},1032,["onClick"]))),128)),i.value.ipUsage.length===0?(O(),j("div",nt,"暂无数据")):ae("",!0)]),_:1})]),_:1}),N(w(U),{title:"人员 IP 使用分布 (点击查看详情)",bordered:!1,class:"rounded-xl shadow-sm"},{default:I(()=>[P("div",st,[(O(!0),j(ce,null,de(n.value,(g,c)=>(O(),j("div",{key:c,class:"flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded",onClick:b=>f(g)},[P("div",at,"使用 "+T(g.ipCount)+" 个 IP",1),P("div",ct,[N(w(he),{type:"line",percentage:Math.min(g.deviceCount/i.value.deviceCount*100,100),"show-indicator":!1,color:"#2080f0"},null,8,["percentage"])]),P("div",dt,T(g.deviceCount)+" 人",1)],8,lt))),128)),n.value.length===0?(O(),j("div",ut,"暂无数据")):ae("",!0)])]),_:1})])]))}}),xt=Je(ft,[["__scopeId","data-v-56f0878b"]]);export{xt as default};
