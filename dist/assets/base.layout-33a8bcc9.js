import{r as G,h as Re,d as E,i as c,j as se,k as U,l as I,p as Q,m as le,T as Ko,n as no,q as X,s as Ho,F as ro,t as y,v as P,x as ae,y as A,z as g,A as q,B as ce,C as Z,D as $o,E as re,G as ue,N as Ae,H as Eo,I as Lo,J as je,K as Mo,L as Bo,M as Fo,o as ee,O as Oe,b as oe,P as jo,Q as io,R as Do,u as L,S as Vo,U as Go,V as lo,c as de,w as V,e as Y,f as me,W as Uo,X as Wo,Y as De,Z as qo,_ as Yo,$ as Qo}from"./index-fdd3cc02.js";import{N as Te}from"./Icon-d9e2fce6.js";import{X as Xo,u as be,c as W,a as Zo,b as Jo,k as Ke,N as ve}from"./Button-5d9ace55.js";import{p as ao,l as so,a as co,b as et,N as fe}from"./Layout-e63e74a1.js";import{p as uo,V as ot,a as tt,b as nt,m as rt,d as it,r as lt,k as ge,N as at,c as ho,f as Ce,e as dt,u as st}from"./Tooltip-886ae6d6.js";import{h as Ve,f as ct,u as ut}from"./fade-in-scale-up.cssr-4284a6db.js";function ht(e){return o=>{o?e.value=o.$el:e.value=null}}function vt(e,o,t){if(!o)return e;const n=G(e.value);let r=null;return Re(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}const vo=E({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ft=E({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),pt=E({name:"ArrowBack",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},c("path",{d:"M0 0h24v24H0V0z",fill:"none"}),c("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}))}});function Ge(e){return Array.isArray(e)?e:[e]}const ke={STOP:"STOP"};function fo(e,o){const t=o(e);e.children!==void 0&&t!==ke.STOP&&e.children.forEach(n=>fo(n,o))}function mt(e,o={}){const{preserveGroup:t=!1}=o,n=[],r=t?l=>{l.isLeaf||(n.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||n.push(l.key),i(l.children))};function i(l){l.forEach(r)}return i(e),n}function gt(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function bt(e){return e.children}function yt(e){return e.key}function xt(){return!1}function wt(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function Ct(e){return e.disabled===!0}function St(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function Se(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function ze(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function zt(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)||t.add(n)}),Array.from(t)}function It(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)&&t.delete(n)}),Array.from(t)}function kt(e){return(e==null?void 0:e.type)==="group"}class Pt extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Nt(e,o,t,n){return ye(o.concat(e),t,n,!1)}function _t(e,o){const t=new Set;return e.forEach(n=>{const r=o.treeNodeMap.get(n);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function Rt(e,o,t,n){const r=ye(o,t,n,!1),i=ye(e,t,n,!0),l=_t(e,t),s=[];return r.forEach(d=>{(i.has(d)||l.has(d))&&s.push(d)}),s.forEach(d=>r.delete(d)),r}function Ie(e,o){const{checkedKeys:t,keysToCheck:n,keysToUncheck:r,indeterminateKeys:i,cascade:l,leafOnly:s,checkStrategy:d,allowNotLoaded:h}=e;if(!l)return n!==void 0?{checkedKeys:zt(t,n),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:It(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:p}=o;let v;r!==void 0?v=Rt(r,t,o,h):n!==void 0?v=Nt(n,t,o,h):v=ye(t,o,h,!1);const b=d==="parent",N=d==="child"||s,k=v,T=new Set,R=Math.max.apply(null,Array.from(p.keys()));for(let K=R;K>=0;K-=1){const D=K===0,M=p.get(K);for(const m of M){if(m.isLeaf)continue;const{key:f,shallowLoaded:z}=m;if(N&&z&&m.children.forEach(a=>{!a.disabled&&!a.isLeaf&&a.shallowLoaded&&k.has(a.key)&&k.delete(a.key)}),m.disabled||!z)continue;let _=!0,C=!1,S=!0;for(const a of m.children){const w=a.key;if(!a.disabled){if(S&&(S=!1),k.has(w))C=!0;else if(T.has(w)){C=!0,_=!1;break}else if(_=!1,C)break}}_&&!S?(b&&m.children.forEach(a=>{!a.disabled&&k.has(a.key)&&k.delete(a.key)}),k.add(f)):C&&T.add(f),D&&N&&k.has(f)&&k.delete(f)}}return{checkedKeys:Array.from(k),indeterminateKeys:Array.from(T)}}function ye(e,o,t,n){const{treeNodeMap:r,getChildren:i}=o,l=new Set,s=new Set(e);return e.forEach(d=>{const h=r.get(d);h!==void 0&&fo(h,p=>{if(p.disabled)return ke.STOP;const{key:v}=p;if(!l.has(v)&&(l.add(v),s.add(v),St(p.rawNode,i))){if(n)return ke.STOP;if(!t)throw new Pt}})}),s}function At(e,{includeGroup:o=!1,includeSelf:t=!0},n){var r;const i=n.treeNodeMap;let l=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return s.treeNode=null,s;for(;l;)!l.ignored&&(o||!l.isGroup)&&s.treeNodePath.push(l),l=l.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(d=>d.key),s}function Ot(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function Tt(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r+1)%n]:r===t.length-1?null:t[r+1]}function Ue(e,o,{loop:t=!1,includeDisabled:n=!1}={}){const r=o==="prev"?Kt:Tt,i={reverse:o==="prev"};let l=!1,s=null;function d(h){if(h!==null){if(h===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!h.disabled||n)&&!h.ignored&&!h.isGroup){s=h;return}if(h.isGroup){const p=He(h,i);p!==null?s=p:d(r(h,t))}else{const p=r(h,!1);if(p!==null)d(p);else{const v=Ht(h);v!=null&&v.isGroup?d(r(v,t)):t&&d(r(h,!0))}}}}return d(e),s}function Kt(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r-1+n)%n]:r===0?null:t[r-1]}function Ht(e){return e.parent}function He(e,o={}){const{reverse:t=!1}=o,{children:n}=e;if(n){const{length:r}=n,i=t?r-1:0,l=t?-1:r,s=t?-1:1;for(let d=i;d!==l;d+=s){const h=n[d];if(!h.disabled&&!h.ignored)if(h.isGroup){const p=He(h,o);if(p!==null)return p}else return h}}return null}const $t={getChild(){return this.ignored?null:He(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Ue(this,"next",e)},getPrev(e={}){return Ue(this,"prev",e)}};function Et(e,o){const t=o?new Set(o):void 0,n=[];function r(i){i.forEach(l=>{n.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||t===void 0||t.has(l.key))&&r(l.children)})}return r(e),n}function Lt(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function po(e,o,t,n,r,i=null,l=0){const s=[];return e.forEach((d,h)=>{var p;const v=Object.create(n);if(v.rawNode=d,v.siblings=s,v.level=l,v.index=h,v.isFirstChild=h===0,v.isLastChild=h+1===e.length,v.parent=i,!v.ignored){const b=r(d);Array.isArray(b)&&(v.children=po(b,o,t,n,r,v,l+1))}s.push(v),o.set(v.key,v),t.has(l)||t.set(l,[]),(p=t.get(l))===null||p===void 0||p.push(v)}),s}function mo(e,o={}){var t;const n=new Map,r=new Map,{getDisabled:i=Ct,getIgnored:l=xt,getIsGroup:s=kt,getKey:d=yt}=o,h=(t=o.getChildren)!==null&&t!==void 0?t:bt,p=o.ignoreEmptyChildren?m=>{const f=h(m);return Array.isArray(f)?f.length?f:null:f}:h,v=Object.assign({get key(){return d(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return gt(this.rawNode,p)},get shallowLoaded(){return wt(this.rawNode,p)},get ignored(){return l(this.rawNode)},contains(m){return Lt(this,m)}},$t),b=po(e,n,r,v,p);function N(m){if(m==null)return null;const f=n.get(m);return f&&!f.isGroup&&!f.ignored?f:null}function k(m){if(m==null)return null;const f=n.get(m);return f&&!f.ignored?f:null}function T(m,f){const z=k(m);return z?z.getPrev(f):null}function R(m,f){const z=k(m);return z?z.getNext(f):null}function K(m){const f=k(m);return f?f.getParent():null}function D(m){const f=k(m);return f?f.getChild():null}const M={treeNodes:b,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:p,getFlattenedNodes(m){return Et(b,m)},getNode:N,getPrev:T,getNext:R,getParent:K,getChild:D,getFirstAvailableNode(){return Ot(b)},getPath(m,f={}){return At(m,f,M)},getCheckedKeys(m,f={}){const{cascade:z=!0,leafOnly:_=!1,checkStrategy:C="all",allowNotLoaded:S=!1}=f;return Ie({checkedKeys:Se(m),indeterminateKeys:ze(m),cascade:z,leafOnly:_,checkStrategy:C,allowNotLoaded:S},M)},check(m,f,z={}){const{cascade:_=!0,leafOnly:C=!1,checkStrategy:S="all",allowNotLoaded:a=!1}=z;return Ie({checkedKeys:Se(f),indeterminateKeys:ze(f),keysToCheck:m==null?[]:Ge(m),cascade:_,leafOnly:C,checkStrategy:S,allowNotLoaded:a},M)},uncheck(m,f,z={}){const{cascade:_=!0,leafOnly:C=!1,checkStrategy:S="all",allowNotLoaded:a=!1}=z;return Ie({checkedKeys:Se(f),indeterminateKeys:ze(f),keysToUncheck:m==null?[]:Ge(m),cascade:_,leafOnly:C,checkStrategy:S,allowNotLoaded:a},M)},getNonLeafKeys(m={}){return mt(b,m)}};return M}const go=E({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),$e=se("n-dropdown-menu"),xe=se("n-dropdown"),We=se("n-dropdown-option");function Pe(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function Mt(e){return e.type==="group"}function bo(e){return e.type==="divider"}function Bt(e){return e.type==="render"}const yo=E({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=U(xe),{hoverKeyRef:t,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:s,mergedShowRef:d,renderLabelRef:h,renderIconRef:p,labelFieldRef:v,childrenFieldRef:b,renderOptionRef:N,nodePropsRef:k,menuPropsRef:T}=o,R=U(We,null),K=U($e),D=U(uo),M=I(()=>e.tmNode.rawNode),m=I(()=>{const{value:O}=b;return Pe(e.tmNode.rawNode,O)}),f=I(()=>{const{disabled:O}=e.tmNode;return O}),z=I(()=>{if(!m.value)return!1;const{key:O,disabled:j}=e.tmNode;if(j)return!1;const{value:J}=t,{value:te}=n,{value:we}=r,{value:ne}=i;return J!==null?ne.includes(O):te!==null?ne.includes(O)&&ne[ne.length-1]!==O:we!==null?ne.includes(O):!1}),_=I(()=>n.value===null&&!s.value),C=vt(z,300,_),S=I(()=>!!(R!=null&&R.enteringSubmenuRef.value)),a=G(!1);Q(We,{enteringSubmenuRef:a});function w(){a.value=!0}function x(){a.value=!1}function B(){const{parentKey:O,tmNode:j}=e;j.disabled||d.value&&(r.value=O,n.value=null,t.value=j.key)}function $(){const{tmNode:O}=e;O.disabled||d.value&&t.value!==O.key&&B()}function H(O){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:j}=O;j&&!Ve({target:j},"dropdownOption")&&!Ve({target:j},"scrollbarRail")&&(t.value=null)}function u(){const{value:O}=m,{tmNode:j}=e;d.value&&!O&&!j.disabled&&(o.doSelect(j.key,j.rawNode),o.doUpdateShow(!1))}return{labelField:v,renderLabel:h,renderIcon:p,siblingHasIcon:K.showIconRef,siblingHasSubmenu:K.hasSubmenuRef,menuProps:T,popoverBody:D,animated:s,mergedShowSubmenu:I(()=>C.value&&!S.value),rawNode:M,hasSubmenu:m,pending:le(()=>{const{value:O}=i,{key:j}=e.tmNode;return O.includes(j)}),childActive:le(()=>{const{value:O}=l,{key:j}=e.tmNode,J=O.findIndex(te=>j===te);return J===-1?!1:J<O.length-1}),active:le(()=>{const{value:O}=l,{key:j}=e.tmNode,J=O.findIndex(te=>j===te);return J===-1?!1:J===O.length-1}),mergedDisabled:f,renderOption:N,nodeProps:k,handleClick:u,handleMouseMove:$,handleMouseEnter:B,handleMouseLeave:H,handleSubmenuBeforeEnter:w,handleSubmenuAfterEnter:x}},render(){var e,o;const{animated:t,rawNode:n,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:s,renderLabel:d,renderIcon:h,renderOption:p,nodeProps:v,props:b,scrollable:N}=this;let k=null;if(r){const D=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);k=c(xo,Object.assign({},D,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const T={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},R=v==null?void 0:v(n),K=c("div",Object.assign({class:[`${i}-dropdown-option`,R==null?void 0:R.class],"data-dropdown-option":!0},R),c("div",no(T,b),[c("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[h?h(n):X(n.icon)]),c("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},d?d(n):X((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),c("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c(Te,null,{default:()=>c(vo,null)}):null)]),this.hasSubmenu?c(ot,null,{default:()=>[c(tt,null,{default:()=>c("div",{class:`${i}-dropdown-offset-container`},c(nt,{show:this.mergedShowSubmenu,placement:this.placement,to:N&&this.popoverBody||void 0,teleportDisabled:!N},{default:()=>c("div",{class:`${i}-dropdown-menu-wrapper`},t?c(Ko,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>k}):k)}))})]}):null);return p?p({node:K,option:n}):K}}),Ft=E({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=U($e),{renderLabelRef:t,labelFieldRef:n,nodePropsRef:r,renderOptionRef:i}=U(xe);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:l}=this,{rawNode:s}=this.tmNode,d=c("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(s)),c("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},X(s.icon)),c("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):X((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),c("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:d,option:s}):d}}),jt=E({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:n}=e;return c(ro,null,c(Ft,{clsPrefix:t,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:i}=r;return i.show===!1?null:bo(i)?c(go,{clsPrefix:t,key:r.key}):r.isGroup?(Ho("dropdown","`group` node is not allowed to be put in `group` node."),null):c(yo,{clsPrefix:t,tmNode:r,parentKey:o,key:r.key})}))}}),Dt=E({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return c("div",o,[e==null?void 0:e()])}}),xo=E({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=U(xe);Q($e,{showIconRef:I(()=>{const r=o.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:d})=>r?r(d):d.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:I(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:d})=>Pe(d,r));const{rawNode:s}=i;return Pe(s,r)})})});const n=G(null);return Q(rt,null),Q(it,null),Q(uo,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,n=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Bt(i)?c(Dt,{tmNode:r,key:r.key}):bo(i)?c(go,{clsPrefix:o,key:r.key}):Mt(i)?c(jt,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):c(yo,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return c("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?c(Xo,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?lt({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),Vt=y("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ct(),y("dropdown-option",`
 position: relative;
 `,[P("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[P("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),y("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[P("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ae("disabled",[A("pending",`
 color: var(--n-option-text-color-hover);
 `,[g("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),P("&::before","background-color: var(--n-option-color-hover);")]),A("active",`
 color: var(--n-option-text-color-active);
 `,[g("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),P("&::before","background-color: var(--n-option-color-active);")]),A("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[g("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),A("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),A("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[g("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[A("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),g("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[A("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),y("icon",`
 font-size: var(--n-option-icon-size);
 `)]),g("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),g("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[A("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),y("icon",`
 font-size: var(--n-option-icon-size);
 `)]),y("dropdown-menu","pointer-events: all;")]),y("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),y("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),y("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),P(">",[y("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("scrollable",`
 padding: var(--n-padding);
 `),A("scrollable",[g("content",`
 padding: var(--n-padding);
 `)])]),Gt={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ut=Object.keys(ho),Wt=Object.assign(Object.assign(Object.assign({},ho),Gt),Z.props),qt=E({name:"Dropdown",inheritAttrs:!1,props:Wt,setup(e){const o=G(!1),t=be(q(e,"show"),o),n=I(()=>{const{keyField:x,childrenField:B}=e;return mo(e.options,{getKey($){return $[x]},getDisabled($){return $.disabled===!0},getIgnored($){return $.type==="divider"||$.type==="render"},getChildren($){return $[B]}})}),r=I(()=>n.value.treeNodes),i=G(null),l=G(null),s=G(null),d=I(()=>{var x,B,$;return($=(B=(x=i.value)!==null&&x!==void 0?x:l.value)!==null&&B!==void 0?B:s.value)!==null&&$!==void 0?$:null}),h=I(()=>n.value.getPath(d.value).keyPath),p=I(()=>n.value.getPath(e.value).keyPath),v=le(()=>e.keyboard&&t.value);ut({keydown:{ArrowUp:{prevent:!0,handler:f},ArrowRight:{prevent:!0,handler:m},ArrowDown:{prevent:!0,handler:z},ArrowLeft:{prevent:!0,handler:M},Enter:{prevent:!0,handler:_},Escape:D}},v);const{mergedClsPrefixRef:b,inlineThemeDisabled:N}=ce(e),k=Z("Dropdown","-dropdown",Vt,$o,e,b);Q(xe,{labelFieldRef:q(e,"labelField"),childrenFieldRef:q(e,"childrenField"),renderLabelRef:q(e,"renderLabel"),renderIconRef:q(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:h,activeKeyPathRef:p,animatedRef:q(e,"animated"),mergedShowRef:t,nodePropsRef:q(e,"nodeProps"),renderOptionRef:q(e,"renderOption"),menuPropsRef:q(e,"menuProps"),doSelect:T,doUpdateShow:R}),Re(t,x=>{!e.animated&&!x&&K()});function T(x,B){const{onSelect:$}=e;$&&W($,x,B)}function R(x){const{"onUpdate:show":B,onUpdateShow:$}=e;B&&W(B,x),$&&W($,x),o.value=x}function K(){i.value=null,l.value=null,s.value=null}function D(){R(!1)}function M(){S("left")}function m(){S("right")}function f(){S("up")}function z(){S("down")}function _(){const x=C();x!=null&&x.isLeaf&&t.value&&(T(x.key,x.rawNode),R(!1))}function C(){var x;const{value:B}=n,{value:$}=d;return!B||$===null?null:(x=B.getNode($))!==null&&x!==void 0?x:null}function S(x){const{value:B}=d,{value:{getFirstAvailableNode:$}}=n;let H=null;if(B===null){const u=$();u!==null&&(H=u.key)}else{const u=C();if(u){let O;switch(x){case"down":O=u.getNext();break;case"up":O=u.getPrev();break;case"right":O=u.getChild();break;case"left":O=u.getParent();break}O&&(H=O.key)}}H!==null&&(i.value=null,l.value=H)}const a=I(()=>{const{size:x,inverted:B}=e,{common:{cubicBezierEaseInOut:$},self:H}=k.value,{padding:u,dividerColor:O,borderRadius:j,optionOpacityDisabled:J,[re("optionIconSuffixWidth",x)]:te,[re("optionSuffixWidth",x)]:we,[re("optionIconPrefixWidth",x)]:ne,[re("optionPrefixWidth",x)]:Ro,[re("fontSize",x)]:Ao,[re("optionHeight",x)]:Oo,[re("optionIconSize",x)]:To}=H,F={"--n-bezier":$,"--n-font-size":Ao,"--n-padding":u,"--n-border-radius":j,"--n-option-height":Oo,"--n-option-prefix-width":Ro,"--n-option-icon-prefix-width":ne,"--n-option-suffix-width":we,"--n-option-icon-suffix-width":te,"--n-option-icon-size":To,"--n-divider-color":O,"--n-option-opacity-disabled":J};return B?(F["--n-color"]=H.colorInverted,F["--n-option-color-hover"]=H.optionColorHoverInverted,F["--n-option-color-active"]=H.optionColorActiveInverted,F["--n-option-text-color"]=H.optionTextColorInverted,F["--n-option-text-color-hover"]=H.optionTextColorHoverInverted,F["--n-option-text-color-active"]=H.optionTextColorActiveInverted,F["--n-option-text-color-child-active"]=H.optionTextColorChildActiveInverted,F["--n-prefix-color"]=H.prefixColorInverted,F["--n-suffix-color"]=H.suffixColorInverted,F["--n-group-header-text-color"]=H.groupHeaderTextColorInverted):(F["--n-color"]=H.color,F["--n-option-color-hover"]=H.optionColorHover,F["--n-option-color-active"]=H.optionColorActive,F["--n-option-text-color"]=H.optionTextColor,F["--n-option-text-color-hover"]=H.optionTextColorHover,F["--n-option-text-color-active"]=H.optionTextColorActive,F["--n-option-text-color-child-active"]=H.optionTextColorChildActive,F["--n-prefix-color"]=H.prefixColor,F["--n-suffix-color"]=H.suffixColor,F["--n-group-header-text-color"]=H.groupHeaderTextColor),F}),w=N?ue("dropdown",I(()=>`${e.size[0]}${e.inverted?"i":""}`),a,e):void 0;return{mergedClsPrefix:b,mergedTheme:k,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&K()},doUpdateShow:R,cssVars:N?void 0:a,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const e=(n,r,i,l,s)=>{var d;const{mergedClsPrefix:h,menuProps:p}=this;(d=this.onRender)===null||d===void 0||d.call(this);const v=(p==null?void 0:p(void 0,this.tmNodes.map(N=>N.rawNode)))||{},b={ref:ht(r),class:[n,`${h}-dropdown`,this.themeClass],clsPrefix:h,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:s};return c(xo,no(this.$attrs,b,v))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(at,Object.assign({},ge(this.$props,Ut),t),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Yt=y("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[A("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),A("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Qt={position:ao,inverted:Boolean,bordered:{type:Boolean,default:!1}},Xt=E({name:"LayoutHeader",props:Object.assign(Object.assign({},Z.props),Qt),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ce(e),n=Z("Layout","-layout-header",Yt,so,e,o),r=I(()=>{const{common:{cubicBezierEaseInOut:l},self:s}=n.value,d={"--n-bezier":l};return e.inverted?(d["--n-color"]=s.headerColorInverted,d["--n-text-color"]=s.textColorInverted,d["--n-border-color"]=s.headerBorderColorInverted):(d["--n-color"]=s.headerColor,d["--n-text-color"]=s.textColor,d["--n-border-color"]=s.headerBorderColor),d}),i=t?ue("layout-header",I(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Zt=y("layout-sider",`
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
`,[A("bordered",[g("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),g("left-placement",[A("bordered",[g("border",`
 right: 0;
 `)])]),A("right-placement",`
 justify-content: flex-start;
 `,[A("bordered",[g("border",`
 left: 0;
 `)]),A("collapsed",[y("layout-toggle-button",[y("base-icon",`
 transform: rotate(180deg);
 `)]),y("layout-toggle-bar",[P("&:hover",[g("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),y("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[y("base-icon",`
 transform: rotate(0);
 `)]),y("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[P("&:hover",[g("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),A("collapsed",[y("layout-toggle-bar",[P("&:hover",[g("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),y("layout-toggle-button",[y("base-icon",`
 transform: rotate(0);
 `)])]),y("layout-toggle-button",`
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
 `,[y("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),y("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[g("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),g("bottom",`
 position: absolute;
 top: 34px;
 `),P("&:hover",[g("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),g("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),P("&:hover",[g("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),g("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),y("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),A("show-content",[y("layout-sider-scroll-container",{opacity:1})]),A("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Jt=E({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(Ae,{clsPrefix:e},{default:()=>c(vo,null)}))}}),en=E({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),on={position:ao,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},tn=E({name:"LayoutSider",props:Object.assign(Object.assign({},Z.props),on),setup(e){const o=U(et),t=G(null),n=G(null),r=I(()=>Ce(d.value?e.collapsedWidth:e.width)),i=I(()=>e.collapseMode!=="transform"?{}:{minWidth:Ce(e.width)}),l=I(()=>o?o.siderPlacement:"left"),s=G(e.defaultCollapsed),d=be(q(e,"collapsed"),s);function h(f,z){if(e.nativeScrollbar){const{value:_}=t;_&&(z===void 0?_.scrollTo(f):_.scrollTo(f,z))}else{const{value:_}=n;_&&_.scrollTo(f,z)}}function p(){const{"onUpdate:collapsed":f,onUpdateCollapsed:z,onExpand:_,onCollapse:C}=e,{value:S}=d;z&&W(z,!S),f&&W(f,!S),s.value=!S,S?_&&W(_):C&&W(C)}let v=0,b=0;const N=f=>{var z;const _=f.target;v=_.scrollLeft,b=_.scrollTop,(z=e.onScroll)===null||z===void 0||z.call(e,f)};Zo(()=>{if(e.nativeScrollbar){const f=t.value;f&&(f.scrollTop=b,f.scrollLeft=v)}}),Q(co,{collapsedRef:d,collapseModeRef:q(e,"collapseMode")});const{mergedClsPrefixRef:k,inlineThemeDisabled:T}=ce(e),R=Z("Layout","-layout-sider",Zt,so,e,k);function K(f){var z,_;f.propertyName==="max-width"&&(d.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(_=e.onAfterEnter)===null||_===void 0||_.call(e))}const D={scrollTo:h},M=I(()=>{const{common:{cubicBezierEaseInOut:f},self:z}=R.value,{siderToggleButtonColor:_,siderToggleButtonBorder:C,siderToggleBarColor:S,siderToggleBarColorHover:a}=z,w={"--n-bezier":f,"--n-toggle-button-color":_,"--n-toggle-button-border":C,"--n-toggle-bar-color":S,"--n-toggle-bar-color-hover":a};return e.inverted?(w["--n-color"]=z.siderColorInverted,w["--n-text-color"]=z.textColorInverted,w["--n-border-color"]=z.siderBorderColorInverted,w["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,w.__invertScrollbar=z.__invertScrollbar):(w["--n-color"]=z.siderColor,w["--n-text-color"]=z.textColor,w["--n-border-color"]=z.siderBorderColor,w["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),w}),m=T?ue("layout-sider",I(()=>e.inverted?"a":"b"),M,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:n,mergedClsPrefix:k,mergedTheme:R,styleMaxWidth:r,mergedCollapsed:d,scrollContainerStyle:i,siderPlacement:l,handleNativeElScroll:N,handleTransitionend:K,handleTriggerClick:p,inlineThemeDisabled:T,cssVars:M,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender},D)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Ce(this.width)}]},this.nativeScrollbar?c("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(Jo,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?c(en,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(Jt,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}}),he=se("n-menu"),Ee=se("n-submenu"),Le=se("n-menu-item-group"),pe=8;function Me(e){const o=U(he),{props:t,mergedCollapsedRef:n}=o,r=U(Ee,null),i=U(Le,null),l=I(()=>t.mode==="horizontal"),s=I(()=>l.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=I(()=>{var b;return Math.max((b=t.collapsedIconSize)!==null&&b!==void 0?b:t.iconSize,t.iconSize)}),h=I(()=>{var b;return!l.value&&e.root&&n.value&&(b=t.collapsedIconSize)!==null&&b!==void 0?b:t.iconSize}),p=I(()=>{if(l.value)return;const{collapsedWidth:b,indent:N,rootIndent:k}=t,{root:T,isGroup:R}=e,K=k===void 0?N:k;if(T)return n.value?b/2-d.value/2:K;if(i)return N/2+i.paddingLeftRef.value;if(r)return(R?N/2:N)+r.paddingLeftRef.value}),v=I(()=>{const{collapsedWidth:b,indent:N,rootIndent:k}=t,{value:T}=d,{root:R}=e;return l.value||!R||!n.value?pe:(k===void 0?N:k)+T+pe-(b+T)/2});return{dropdownPlacement:s,activeIconSize:h,maxIconSize:d,paddingLeft:p,iconMarginRight:v,NMenu:o,NSubmenu:r}}const Be={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},wo=Object.assign(Object.assign({},Be),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),nn=E({name:"MenuOptionGroup",props:wo,setup(e){Q(Ee,null);const o=Me(e);Q(Le,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:n}=U(he);return function(){const{value:r}=t,i=o.paddingLeft.value,{nodeProps:l}=n,s=l==null?void 0:l(e.tmNode.rawNode);return c("div",{class:`${r}-menu-item-group`,role:"group"},c("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),X(e.title),e.extra?c(ro,null," ",X(e.extra)):null),c("div",null,e.tmNodes.map(d=>Fe(d,n))))}}}),Co=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=U(he);return{menuProps:o,style:I(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:I(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:n,renderExtra:r,expandIcon:i}}=this,l=t?t(o.rawNode):X(this.icon);return c("div",{onClick:s=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},l&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[l]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(o.rawNode):X(this.title),this.extra||r?c("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(o.rawNode):X(this.extra)):null),this.showArrow?c(Ae,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):c(ft,null)}):null)}}),So=Object.assign(Object.assign({},Be),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),rn=E({name:"Submenu",props:So,setup(e){const o=Me(e),{NMenu:t,NSubmenu:n}=o,{props:r,mergedCollapsedRef:i,mergedThemeRef:l}=t,s=I(()=>{const{disabled:b}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:b}),d=G(!1);Q(Ee,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:s}),Q(Le,null);function h(){const{onClick:b}=e;b&&b()}function p(){s.value||(i.value||t.toggleExpand(e.internalKey),h())}function v(b){d.value=b}return{menuProps:r,mergedTheme:l,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:d,paddingLeft:o.paddingLeft,mergedDisabled:s,mergedValue:t.mergedValueRef,childActive:le(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:I(()=>r.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!s.value&&(r.mode==="horizontal"||i.value)),handlePopoverShowChange:v,handleClick:p}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{const{isHorizontal:l,paddingLeft:s,collapsed:d,mergedDisabled:h,maxIconSize:p,activeIconSize:v,title:b,childActive:N,icon:k,handleClick:T,menuProps:{nodeProps:R},dropdownShow:K,iconMarginRight:D,tmNode:M,mergedClsPrefix:m}=this,f=R==null?void 0:R(M.rawNode);return c("div",Object.assign({},f,{class:[`${m}-menu-item`,f==null?void 0:f.class],role:"menuitem"}),c(Co,{tmNode:M,paddingLeft:s,collapsed:d,disabled:h,iconMarginRight:D,maxIconSize:p,activeIconSize:v,title:b,extra:this.extra,showArrow:!l,childActive:N,clsPrefix:m,icon:k,hover:K,onClick:T}))},i=()=>c(Eo,null,{default:()=>{const{tmNodes:l,collapsed:s}=this;return s?null:c("div",{class:`${o}-submenu-children`,role:"menu"},l.map(d=>Fe(d,this.menuProps)))}});return this.root?c(qt,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>c("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:i())}):c("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),i())}}),zo=Object.assign(Object.assign({},Be),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ln=E({name:"MenuOption",props:zo,setup(e){const o=Me(e),{NSubmenu:t,NMenu:n}=o,{props:r,mergedClsPrefixRef:i,mergedCollapsedRef:l}=n,s=t?t.mergedDisabledRef:{value:!1},d=I(()=>s.value||e.disabled);function h(v){const{onClick:b}=e;b&&b(v)}function p(v){d.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),h(v))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:le(()=>e.root&&l.value&&r.mode!=="horizontal"&&!d.value),selected:le(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:p}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:n,nodeProps:r}}=this,i=r==null?void 0:r(t.rawNode);return c("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),c(dt,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):X(this.title),trigger:()=>c(Co,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),an=E({name:"MenuDivider",setup(){const e=U(he),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:c("div",{class:`${o.value}-menu-divider`})}}),dn=Ke(wo),sn=Ke(zo),cn=Ke(So);function Io(e){return e.type==="divider"||e.type==="render"}function un(e){return e.type==="divider"}function Fe(e,o){const{rawNode:t}=e,{show:n}=t;if(n===!1)return null;if(Io(t))return un(t)?c(an,Object.assign({key:e.key},t.props)):null;const{labelField:r}=o,{key:i,level:l,isGroup:s}=e,d=Object.assign(Object.assign({},t),{title:t.title||t[r],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:l,root:l===0,isGroup:s});return e.children?e.isGroup?c(nn,ge(d,dn,{tmNode:e,tmNodes:e.children,key:i})):c(rn,ge(d,cn,{key:i,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):c(ln,ge(d,sn,{key:i,tmNode:e}))}const qe=[P("&::before","background-color: var(--n-item-color-hover);"),g("arrow",`
 color: var(--n-arrow-color-hover);
 `),g("icon",`
 color: var(--n-item-icon-color-hover);
 `),y("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[P("a",`
 color: var(--n-item-text-color-hover);
 `),g("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ye=[g("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),y("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[P("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),g("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],hn=P([y("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[A("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[y("submenu","margin: 0;"),y("menu-item","margin: 0;"),y("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[P("&::before","display: none;"),A("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),y("menu-item-content",[A("selected",[g("icon","color: var(--n-item-icon-color-active-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[P("a","color: var(--n-item-text-color-active-horizontal);"),g("extra","color: var(--n-item-text-color-active-horizontal);")])]),A("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[P("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),g("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),g("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ae("disabled",[ae("selected, child-active",[P("&:focus-within",Ye)]),A("selected",[ie(null,[g("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[P("a","color: var(--n-item-text-color-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),A("child-active",[ie(null,[g("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[P("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ie("border-bottom: 2px solid var(--n-border-color-horizontal);",Ye)]),y("menu-item-content-header",[P("a","color: var(--n-item-text-color-horizontal);")])])]),A("collapsed",[y("menu-item-content",[A("selected",[P("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),y("menu-item-content-header","opacity: 0;"),g("arrow","opacity: 0;"),g("icon","color: var(--n-item-icon-color-collapsed);")])]),y("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),y("menu-item-content",`
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
 `,[P("> *","z-index: 1;"),P("&::before",`
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
 `),A("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),A("collapsed",[g("arrow","transform: rotate(0);")]),A("selected",[P("&::before","background-color: var(--n-item-color-active);"),g("arrow","color: var(--n-arrow-color-active);"),g("icon","color: var(--n-item-icon-color-active);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[P("a","color: var(--n-item-text-color-active);"),g("extra","color: var(--n-item-text-color-active);")])]),A("child-active",[y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[P("a",`
 color: var(--n-item-text-color-child-active);
 `),g("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),g("arrow",`
 color: var(--n-arrow-color-child-active);
 `),g("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ae("disabled",[ae("selected, child-active",[P("&:focus-within",qe)]),A("selected",[ie(null,[g("arrow","color: var(--n-arrow-color-active-hover);"),g("icon","color: var(--n-item-icon-color-active-hover);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[P("a","color: var(--n-item-text-color-active-hover);"),g("extra","color: var(--n-item-text-color-active-hover);")])])]),A("child-active",[ie(null,[g("arrow","color: var(--n-arrow-color-child-active-hover);"),g("icon","color: var(--n-item-icon-color-child-active-hover);"),y("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[P("a","color: var(--n-item-text-color-child-active-hover);"),g("extra","color: var(--n-item-text-color-child-active-hover);")])])]),A("selected",[ie(null,[P("&::before","background-color: var(--n-item-color-active-hover);")])]),ie(null,qe)]),g("icon",`
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
 `),g("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),y("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[P("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[P("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),g("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),y("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[y("menu-item-content",`
 height: var(--n-item-height);
 `),y("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Lo({duration:".2s"})])]),y("menu-item-group",[y("menu-item-group-title",`
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
 `)])]),y("menu-tooltip",[P("a",`
 color: inherit;
 text-decoration: none;
 `)]),y("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ie(e,o){return[A("hover",e,o),P("&:hover",e,o)]}const vn=Object.assign(Object.assign({},Z.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Qe=E({name:"Menu",props:vn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ce(e),n=Z("Menu","-menu",hn,Mo,e,o),r=U(co,null),i=I(()=>{var C;const{collapsed:S}=e;if(S!==void 0)return S;if(r){const{collapseModeRef:a,collapsedRef:w}=r;if(a.value==="width")return(C=w.value)!==null&&C!==void 0?C:!1}return!1}),l=I(()=>{const{keyField:C,childrenField:S,disabledField:a}=e;return mo(e.items||e.options,{getIgnored(w){return Io(w)},getChildren(w){return w[S]},getDisabled(w){return w[a]},getKey(w){var x;return(x=w[C])!==null&&x!==void 0?x:w.name}})}),s=I(()=>new Set(l.value.treeNodes.map(C=>C.key))),{watchProps:d}=e,h=G(null);d!=null&&d.includes("defaultValue")?je(()=>{h.value=e.defaultValue}):h.value=e.defaultValue;const p=q(e,"value"),v=be(p,h),b=G([]),N=()=>{b.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(v.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?je(N):N();const k=st(e,["expandedNames","expandedKeys"]),T=be(k,b),R=I(()=>l.value.treeNodes),K=I(()=>l.value.getPath(v.value).keyPath);Q(he,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:v,mergedExpandedKeysRef:T,activePathRef:K,mergedClsPrefixRef:o,isHorizontalRef:I(()=>e.mode==="horizontal"),invertedRef:q(e,"inverted"),doSelect:D,toggleExpand:m});function D(C,S){const{"onUpdate:value":a,onUpdateValue:w,onSelect:x}=e;w&&W(w,C,S),a&&W(a,C,S),x&&W(x,C,S),h.value=C}function M(C){const{"onUpdate:expandedKeys":S,onUpdateExpandedKeys:a,onExpandedNamesChange:w,onOpenNamesChange:x}=e;S&&W(S,C),a&&W(a,C),w&&W(w,C),x&&W(x,C),b.value=C}function m(C){const S=Array.from(T.value),a=S.findIndex(w=>w===C);if(~a)S.splice(a,1);else{if(e.accordion&&s.value.has(C)){const w=S.findIndex(x=>s.value.has(x));w>-1&&S.splice(w,1)}S.push(C)}M(S)}const f=C=>{const S=l.value.getPath(C??v.value,{includeSelf:!1}).keyPath;if(!S.length)return;const a=Array.from(T.value),w=new Set([...a,...S]);e.accordion&&s.value.forEach(x=>{w.has(x)&&!S.includes(x)&&w.delete(x)}),M(Array.from(w))},z=I(()=>{const{inverted:C}=e,{common:{cubicBezierEaseInOut:S},self:a}=n.value,{borderRadius:w,borderColorHorizontal:x,fontSize:B,itemHeight:$,dividerColor:H}=a,u={"--n-divider-color":H,"--n-bezier":S,"--n-font-size":B,"--n-border-color-horizontal":x,"--n-border-radius":w,"--n-item-height":$};return C?(u["--n-group-text-color"]=a.groupTextColorInverted,u["--n-color"]=a.colorInverted,u["--n-item-text-color"]=a.itemTextColorInverted,u["--n-item-text-color-hover"]=a.itemTextColorHoverInverted,u["--n-item-text-color-active"]=a.itemTextColorActiveInverted,u["--n-item-text-color-child-active"]=a.itemTextColorChildActiveInverted,u["--n-item-text-color-child-active-hover"]=a.itemTextColorChildActiveInverted,u["--n-item-text-color-active-hover"]=a.itemTextColorActiveHoverInverted,u["--n-item-icon-color"]=a.itemIconColorInverted,u["--n-item-icon-color-hover"]=a.itemIconColorHoverInverted,u["--n-item-icon-color-active"]=a.itemIconColorActiveInverted,u["--n-item-icon-color-active-hover"]=a.itemIconColorActiveHoverInverted,u["--n-item-icon-color-child-active"]=a.itemIconColorChildActiveInverted,u["--n-item-icon-color-child-active-hover"]=a.itemIconColorChildActiveHoverInverted,u["--n-item-icon-color-collapsed"]=a.itemIconColorCollapsedInverted,u["--n-item-text-color-horizontal"]=a.itemTextColorHorizontalInverted,u["--n-item-text-color-hover-horizontal"]=a.itemTextColorHoverHorizontalInverted,u["--n-item-text-color-active-horizontal"]=a.itemTextColorActiveHorizontalInverted,u["--n-item-text-color-child-active-horizontal"]=a.itemTextColorChildActiveHorizontalInverted,u["--n-item-text-color-child-active-hover-horizontal"]=a.itemTextColorChildActiveHoverHorizontalInverted,u["--n-item-text-color-active-hover-horizontal"]=a.itemTextColorActiveHoverHorizontalInverted,u["--n-item-icon-color-horizontal"]=a.itemIconColorHorizontalInverted,u["--n-item-icon-color-hover-horizontal"]=a.itemIconColorHoverHorizontalInverted,u["--n-item-icon-color-active-horizontal"]=a.itemIconColorActiveHorizontalInverted,u["--n-item-icon-color-active-hover-horizontal"]=a.itemIconColorActiveHoverHorizontalInverted,u["--n-item-icon-color-child-active-horizontal"]=a.itemIconColorChildActiveHorizontalInverted,u["--n-item-icon-color-child-active-hover-horizontal"]=a.itemIconColorChildActiveHoverHorizontalInverted,u["--n-arrow-color"]=a.arrowColorInverted,u["--n-arrow-color-hover"]=a.arrowColorHoverInverted,u["--n-arrow-color-active"]=a.arrowColorActiveInverted,u["--n-arrow-color-active-hover"]=a.arrowColorActiveHoverInverted,u["--n-arrow-color-child-active"]=a.arrowColorChildActiveInverted,u["--n-arrow-color-child-active-hover"]=a.arrowColorChildActiveHoverInverted,u["--n-item-color-hover"]=a.itemColorHoverInverted,u["--n-item-color-active"]=a.itemColorActiveInverted,u["--n-item-color-active-hover"]=a.itemColorActiveHoverInverted,u["--n-item-color-active-collapsed"]=a.itemColorActiveCollapsedInverted):(u["--n-group-text-color"]=a.groupTextColor,u["--n-color"]=a.color,u["--n-item-text-color"]=a.itemTextColor,u["--n-item-text-color-hover"]=a.itemTextColorHover,u["--n-item-text-color-active"]=a.itemTextColorActive,u["--n-item-text-color-child-active"]=a.itemTextColorChildActive,u["--n-item-text-color-child-active-hover"]=a.itemTextColorChildActiveHover,u["--n-item-text-color-active-hover"]=a.itemTextColorActiveHover,u["--n-item-icon-color"]=a.itemIconColor,u["--n-item-icon-color-hover"]=a.itemIconColorHover,u["--n-item-icon-color-active"]=a.itemIconColorActive,u["--n-item-icon-color-active-hover"]=a.itemIconColorActiveHover,u["--n-item-icon-color-child-active"]=a.itemIconColorChildActive,u["--n-item-icon-color-child-active-hover"]=a.itemIconColorChildActiveHover,u["--n-item-icon-color-collapsed"]=a.itemIconColorCollapsed,u["--n-item-text-color-horizontal"]=a.itemTextColorHorizontal,u["--n-item-text-color-hover-horizontal"]=a.itemTextColorHoverHorizontal,u["--n-item-text-color-active-horizontal"]=a.itemTextColorActiveHorizontal,u["--n-item-text-color-child-active-horizontal"]=a.itemTextColorChildActiveHorizontal,u["--n-item-text-color-child-active-hover-horizontal"]=a.itemTextColorChildActiveHoverHorizontal,u["--n-item-text-color-active-hover-horizontal"]=a.itemTextColorActiveHoverHorizontal,u["--n-item-icon-color-horizontal"]=a.itemIconColorHorizontal,u["--n-item-icon-color-hover-horizontal"]=a.itemIconColorHoverHorizontal,u["--n-item-icon-color-active-horizontal"]=a.itemIconColorActiveHorizontal,u["--n-item-icon-color-active-hover-horizontal"]=a.itemIconColorActiveHoverHorizontal,u["--n-item-icon-color-child-active-horizontal"]=a.itemIconColorChildActiveHorizontal,u["--n-item-icon-color-child-active-hover-horizontal"]=a.itemIconColorChildActiveHoverHorizontal,u["--n-arrow-color"]=a.arrowColor,u["--n-arrow-color-hover"]=a.arrowColorHover,u["--n-arrow-color-active"]=a.arrowColorActive,u["--n-arrow-color-active-hover"]=a.arrowColorActiveHover,u["--n-arrow-color-child-active"]=a.arrowColorChildActive,u["--n-arrow-color-child-active-hover"]=a.arrowColorChildActiveHover,u["--n-item-color-hover"]=a.itemColorHover,u["--n-item-color-active"]=a.itemColorActive,u["--n-item-color-active-hover"]=a.itemColorActiveHover,u["--n-item-color-active-collapsed"]=a.itemColorActiveCollapsed),u}),_=t?ue("menu",I(()=>e.inverted?"a":"b"),z,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:k,uncontrolledExpanededKeys:b,mergedExpandedKeys:T,uncontrolledValue:h,mergedValue:v,activePath:K,tmNodes:R,mergedTheme:n,mergedCollapsed:i,cssVars:t?void 0:z,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender,showOption:f}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:n}=this;return n==null||n(),c("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>Fe(r,this.$props)))}}),fn=P([y("page-header-header",`
 margin-bottom: 20px;
 `),y("page-header",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[g("main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 `),g("back",`
 display: flex;
 margin-right: 16px;
 font-size: var(--n-back-size);
 cursor: pointer;
 color: var(--n-back-color);
 transition: color .3s var(--n-bezier);
 `,[P("&:hover","color: var(--n-back-color-hover);"),P("&:active","color: var(--n-back-color-pressed);")]),g("avatar",`
 display: flex;
 margin-right: 12px
 `),g("title",`
 margin-right: 16px;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),g("subtitle",`
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 color: var(--n-subtitle-text-color);
 `)]),y("page-header-content",`
 font-size: var(--n-font-size);
 `,[P("&:not(:first-child)","margin-top: 20px;")]),y("page-header-footer",`
 font-size: var(--n-font-size);
 `,[P("&:not(:first-child)","margin-top: 20px;")])]),pn=Object.assign(Object.assign({},Z.props),{title:String,subtitle:String,extra:String,onBack:Function}),Xe=E({name:"PageHeader",props:pn,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t,inlineThemeDisabled:n}=ce(e),r=Z("PageHeader","-page-header",fn,Fo,e,o),i=Bo("PageHeader",t,o),l=I(()=>{const{self:{titleTextColor:d,subtitleTextColor:h,backColor:p,fontSize:v,titleFontSize:b,backSize:N,titleFontWeight:k,backColorHover:T,backColorPressed:R},common:{cubicBezierEaseInOut:K}}=r.value;return{"--n-title-text-color":d,"--n-title-font-size":b,"--n-title-font-weight":k,"--n-font-size":v,"--n-back-size":N,"--n-subtitle-text-color":h,"--n-back-color":p,"--n-back-color-hover":T,"--n-back-color-pressed":R,"--n-bezier":K}}),s=n?ue("page-header",void 0,l,e):void 0;return{rtlEnabled:i,mergedClsPrefix:o,cssVars:n?void 0:l,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{onBack:o,title:t,subtitle:n,extra:r,mergedClsPrefix:i,cssVars:l,$slots:s}=this;(e=this.onRender)===null||e===void 0||e.call(this);const{title:d,subtitle:h,extra:p,default:v,header:b,avatar:N,footer:k,back:T}=s,R=o,K=t||d,D=n||h,M=r||p;return c("div",{style:l,class:[`${i}-page-header-wrapper`,this.themeClass,this.rtlEnabled&&`${i}-page-header-wrapper--rtl`]},b?c("div",{class:`${i}-page-header-header`,key:"breadcrumb"},b()):null,(R||N||K||D||M)&&c("div",{class:`${i}-page-header`,key:"header"},c("div",{class:`${i}-page-header__main`,key:"back"},R?c("div",{class:`${i}-page-header__back`,onClick:o},T?T():c(Ae,{clsPrefix:i},{default:()=>c(pt,null)})):null,N?c("div",{class:`${i}-page-header__avatar`},N()):null,K?c("div",{class:`${i}-page-header__title`,key:"title"},t||d()):null,D?c("div",{class:`${i}-page-header__subtitle`,key:"subtitle"},n||h()):null),M?c("div",{class:`${i}-page-header__extra`},r||p()):null),v?c("div",{class:`${i}-page-header-content`,key:"content"},v()):null,k?c("div",{class:`${i}-page-header-footer`,key:"footer"},k()):null)}}),mn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},gn=oe("path",{d:"M25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7zM18 4.4l5.6 5.6H18V4.4zM24 28H8V4h8v6c0 1.1.9 2 2 2h6v16z",fill:"currentColor"},null,-1),bn=oe("path",{d:"M10 22h12v2H10z",fill:"currentColor"},null,-1),yn=oe("path",{d:"M10 16h12v2H10z",fill:"currentColor"},null,-1),xn=[gn,bn,yn],wn=E({name:"Document",render:function(o,t){return ee(),Oe("svg",mn,xn)}}),Cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},Sn=oe("path",{d:"M6 30h12a2.002 2.002 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2.002 2.002 0 0 0-2-2H6a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2z",fill:"currentColor"},null,-1),zn=oe("path",{d:"M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6l-1.414-1.414z",fill:"currentColor"},null,-1),In=[Sn,zn],kn=E({name:"Logout",render:function(o,t){return ee(),Oe("svg",Cn,In)}}),Pn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},Nn=oe("path",{d:"M4 6h24v2H4z",fill:"currentColor"},null,-1),_n=oe("path",{d:"M4 24h24v2H4z",fill:"currentColor"},null,-1),Rn=oe("path",{d:"M4 12h24v2H4z",fill:"currentColor"},null,-1),An=oe("path",{d:"M4 18h24v2H4z",fill:"currentColor"},null,-1),On=[Nn,_n,Rn,An],Tn=E({name:"Menu",render:function(o,t){return ee(),Oe("svg",Pn,On)}});var Ze;const ko=typeof window<"u",Kn=e=>typeof e=="string",Hn=()=>{};ko&&((Ze=window==null?void 0:window.navigator)!=null&&Ze.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Po(e){return typeof e=="function"?e():L(e)}function $n(e){return e}function En(e){return Vo()?(Go(e),!0):!1}function Ln(e,o=!0){jo()?io(e):o?e():Do(e)}function Mn(e){var o;const t=Po(e);return(o=t==null?void 0:t.$el)!=null?o:t}const No=ko?window:void 0;function Je(...e){let o,t,n,r;if(Kn(e[0])||Array.isArray(e[0])?([t,n,r]=e,o=No):[o,t,n,r]=e,!o)return Hn;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const i=[],l=()=>{i.forEach(p=>p()),i.length=0},s=(p,v,b,N)=>(p.addEventListener(v,b,N),()=>p.removeEventListener(v,b,N)),d=Re(()=>[Mn(o),Po(r)],([p,v])=>{l(),p&&i.push(...t.flatMap(b=>n.map(N=>s(p,b,N,v))))},{immediate:!0,flush:"post"}),h=()=>{d(),l()};return En(h),h}const Ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_e="__vueuse_ssr_handlers__";Ne[_e]=Ne[_e]||{};Ne[_e];var eo;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(eo||(eo={}));var Bn=Object.defineProperty,oo=Object.getOwnPropertySymbols,Fn=Object.prototype.hasOwnProperty,jn=Object.prototype.propertyIsEnumerable,to=(e,o,t)=>o in e?Bn(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Dn=(e,o)=>{for(var t in o||(o={}))Fn.call(o,t)&&to(e,t,o[t]);if(oo)for(var t of oo(o))jn.call(o,t)&&to(e,t,o[t]);return e};const Vn={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Dn({linear:$n},Vn);function _o(e={}){const{window:o=No,initialWidth:t=1/0,initialHeight:n=1/0,listenOrientation:r=!0,includeScrollbar:i=!0}=e,l=G(t),s=G(n),d=()=>{o&&(i?(l.value=o.innerWidth,s.value=o.innerHeight):(l.value=o.document.documentElement.clientWidth,s.value=o.document.documentElement.clientHeight))};return d(),Ln(d),Je("resize",d,{passive:!0}),r&&Je("orientationchange",d,{passive:!0}),{width:l,height:s}}const Gn=E({__name:"header.layout",setup(e){const{toggleMenu:o}=lo(),t=I(()=>_o().width.value<980),n=()=>{localStorage.clear(),window.location.href="/login"};return(r,i)=>L(t)?(ee(),de(L(Xe),{key:1},{title:V(()=>[Y(L(ve),{text:"",size:"large"},{default:V(()=>[me("Podpolye")]),_:1})]),extra:V(()=>[Y(L(ve),{quaternary:"",onClick:L(o)},{default:V(()=>[Y(L(Te),{size:"24"},{default:V(()=>[Y(L(Tn))]),_:1})]),_:1},8,["onClick"])]),_:1})):(ee(),de(L(Xe),{key:0},{title:V(()=>[Y(L(ve),{text:"",size:"large"},{default:V(()=>[me("Podpolye")]),_:1})]),extra:V(()=>[Y(L(ve),{quaternary:"",type:"error",onClick:n},{default:V(()=>[me("Logout")]),_:1})]),_:1}))}});const Un=(e,o)=>{const t=e.__vccOpts||e;for(const[n,r]of o)t[n]=r;return t},Wn=Un(Gn,[["__scopeId","data-v-58082de8"]]),er=E({__name:"base.layout",setup(e){const o=I(()=>lo().getIsOpen),t=G(64);io(()=>{const h=document.getElementById("layoutHeader");t.value=h.clientHeight+1});const n=I(()=>_o().width.value<980),r=Uo().name;function i(h,p){return()=>c(Qo,{to:{name:p}},{default:()=>h})}function l(h){return()=>c(Te,null,{default:()=>c(h)})}const s=[{label:i("Posts","posts"),key:"posts",icon:l(wn)}],d=[...s,{label:i("Logout","login"),key:"login",icon:l(kn)}];return(h,p)=>{const v=Wo("RouterView");return ee(),de(L(fe),{style:{height:"100svh"}},{default:V(()=>[Y(L(Xt),{bordered:"",id:"layoutHeader",style:{padding:"12px 24px"}},{default:V(()=>[Y(Wn)]),_:1}),Y(L(fe),{position:"absolute",style:Yo(`top: ${t.value}px; bottom: 0;`),"has-sider":!L(n)},{default:V(()=>[L(n)?De("",!0):(ee(),de(L(tn),{key:0,bordered:"","content-style":"padding: 12px;","native-scrollbar":!1},{default:V(()=>[Y(L(Qe),{options:s,"default-value":L(r)},null,8,["default-value"])]),_:1})),Y(L(fe),{"content-style":"padding: 24px 48px;","native-scrollbar":!1},{default:V(()=>[(ee(),de(qo,null,{fallback:V(()=>[me(" Loading... ")]),default:V(()=>[Y(v)]),_:1}))]),_:1}),L(n)&&L(o)?(ee(),de(L(fe),{key:1,position:"absolute",style:"top: 0; bottom: 0;","content-style":"padding: 24px 48px;","native-scrollbar":!1},{default:V(()=>[Y(L(Qe),{options:d,"default-value":L(r)},null,8,["default-value"])]),_:1})):De("",!0)]),_:1},8,["style","has-sider"])]),_:1})}}});export{er as default};
