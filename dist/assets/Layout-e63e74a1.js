import{a0 as I,a1 as L,a2 as R,a3 as m,j as x,t as C,y as j,d as O,C as y,r as g,B as $,p as z,l as S,G as E,i as f}from"./index-fdd3cc02.js";import{a as P,b as w}from"./Button-5d9ace55.js";const N=u=>{const{baseColor:e,textColor2:o,bodyColor:a,cardColor:i,dividerColor:t,actionColor:d,scrollbarColor:b,scrollbarColorHover:h,invertedColor:s}=u;return{textColor:o,textColorInverted:"#FFF",color:a,colorEmbedded:d,headerColor:i,headerColorInverted:s,footerColor:d,footerColorInverted:s,headerBorderColor:t,headerBorderColorInverted:s,footerBorderColor:t,footerBorderColorInverted:s,siderBorderColor:t,siderBorderColorInverted:s,siderColor:i,siderColorInverted:s,siderToggleButtonBorder:`1px solid ${t}`,siderToggleButtonColor:e,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:m(a,b),siderToggleBarColorHover:m(a,h),__invertScrollbar:"true"}},F=I({name:"Layout",common:L,peers:{Scrollbar:R},self:N}),_=F,W=x("n-layout-sider"),H={type:String,default:"static"},K=C("layout",`
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
`,[C("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),j("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),V={embedded:Boolean,position:H,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},k=x("n-layout");function D(u){return O({name:u?"LayoutContent":"Layout",props:Object.assign(Object.assign({},y.props),V),setup(e){const o=g(null),a=g(null),{mergedClsPrefixRef:i,inlineThemeDisabled:t}=$(e),d=y("Layout","-layout",K,_,e,i);function b(r,l){if(e.nativeScrollbar){const{value:n}=o;n&&(l===void 0?n.scrollTo(r):n.scrollTo(r,l))}else{const{value:n}=a;n&&n.scrollTo(r,l)}}z(k,e);let h=0,s=0;const p=r=>{var l;const n=r.target;h=n.scrollLeft,s=n.scrollTop,(l=e.onScroll)===null||l===void 0||l.call(e,r)};P(()=>{if(e.nativeScrollbar){const r=o.value;r&&(r.scrollTop=s,r.scrollLeft=h)}});const B={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},T={scrollTo:b},v=S(()=>{const{common:{cubicBezierEaseInOut:r},self:l}=d.value;return{"--n-bezier":r,"--n-color":e.embedded?l.colorEmbedded:l.color,"--n-text-color":l.textColor}}),c=t?E("layout",S(()=>e.embedded?"e":""),v,e):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:o,scrollbarInstRef:a,hasSiderStyle:B,mergedTheme:d,handleNativeElScroll:p,cssVars:t?void 0:v,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender},T)},render(){var e;const{mergedClsPrefix:o,hasSider:a}=this;(e=this.onRender)===null||e===void 0||e.call(this);const i=a?this.hasSiderStyle:void 0,t=[this.themeClass,u&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return f("div",{class:t,style:this.cssVars},this.nativeScrollbar?f("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):f(w,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const X=D(!1);export{X as N,W as a,k as b,_ as l,H as p};
