import{N as W,b5 as z,aC as I,aG as E,aM as N,aB as D,H as L,bl as $,a9 as A,b1 as C,K as U,b4 as V,b0 as j,bm as F,b2 as G,a1 as f,n as K,s as x,y as q,d as J,bn as v,V as k,b3 as Q}from"./index.1bb11c7d.js";import{g as Z}from"./scroll.292c786e.js";const se=(e,o,n)=>{let a={offsetX:0,offsetY:0};const s=l=>{const u=l.clientX,i=l.clientY,{offsetX:r,offsetY:m}=a,d=e.value.getBoundingClientRect(),p=d.left,y=d.top,S=d.width,Y=d.height,O=document.documentElement.clientWidth,T=document.documentElement.clientHeight,H=-p+r,B=-y+m,P=O-p-S+r,X=T-y-Y+m,b=g=>{const M=Math.min(Math.max(r+g.clientX-u,H),P),w=Math.min(Math.max(m+g.clientY-i,B),X);a={offsetX:M,offsetY:w},e.value.style.transform=`translate(${E(M)}, ${E(w)})`},h=()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",h)},c=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",s)},t=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",s)};W(()=>{z(()=>{n.value?c():t()})}),I(()=>{t()})},ae=e=>{N(e)||D("[useLockscreen]","You need to pass a ref param to this function");const o=L("popup"),n=$(()=>o.bm("parent","hidden"));if(!A||C(document.body,n.value))return;let a=0,s=!1,c="0";const t=()=>{G(document.body,n.value),s&&(document.body.style.width=c)};U(e,l=>{if(!l){t();return}s=!C(document.body,n.value),s&&(c=document.body.style.width),a=Z(o.namespace.value);const u=document.documentElement.clientHeight<document.body.scrollHeight,i=V(document.body,"overflowY");a>0&&(u||i==="scroll")&&s&&(document.body.style.width=`calc(100% - ${a}px)`),j(document.body,n.value)}),F(()=>t())},_=e=>{if(!e)return{onClick:f,onMousedown:f,onMouseup:f};let o=!1,n=!1;return{onClick:t=>{o&&n&&e(t),o=n=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{n=t.target===t.currentTarget}}},R=K({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:x([String,Array,Object])},zIndex:{type:x([String,Number])}}),ee={click:e=>e instanceof MouseEvent};var te=q({name:"ElOverlay",props:R,emits:ee,setup(e,{slots:o,emit:n}){const a=L("overlay"),s=u=>{n("click",u)},{onClick:c,onMousedown:t,onMouseup:l}=_(e.customMaskEvent?void 0:s);return()=>e.mask?J("div",{class:[a.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:t,onMouseup:l},[k(o,"default")],v.STYLE|v.CLASS|v.PROPS,["onClick","onMouseup","onMousedown"]):Q("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[k(o,"default")])}});const ce=te;export{ce as E,ae as a,_ as b,se as u};