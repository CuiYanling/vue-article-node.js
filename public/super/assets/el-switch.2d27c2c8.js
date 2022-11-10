import{n as R,t as U,s as Z,aw as C,x as S,m as V,y as $,C as x,F as ee,H as ae,bL as ie,j as v,D as te,G as se,a as T,K as E,M as ne,N as oe,o as s,c as u,i as N,e as a,U as c,bh as le,W as d,w as h,X as w,Y as m,S as l,a2 as k,T as F,d as re,b8 as ce,a3 as K,a0 as ue,a4 as de,aG as ve,L as fe,bO as A,aB as pe,l as he,ab as me}from"./index.1bb11c7d.js";import{i as ye}from"./validator.0d104d86.js";import{U as B,C as P,I as D}from"./el-input.424f7e03.js";const be=R({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:U},inactiveIcon:{type:U},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:Z(Function)},size:{type:String,validator:ye},tabindex:{type:[String,Number]}}),ge={[B]:o=>C(o)||S(o)||V(o),[P]:o=>C(o)||S(o)||V(o),[D]:o=>C(o)||S(o)||V(o)},we=["onClick"],ke=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Ce=["aria-hidden"],Ie=["aria-hidden"],Se=["aria-hidden"],Ve=["aria-hidden"],Te={name:"ElSwitch"},Ee=$({...Te,props:be,emits:ge,setup(o,{expose:G,emit:f}){const t=o,_="ElSwitch",L=he(),{formItem:y}=x(),H=ee(),i=ae("switch");ie({from:'"value"',replacement:'"model-value" or "v-model"',scope:_,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},v(()=>{var e;return!!((e=L.vnode.props)!=null&&e.value)}));const{inputId:W}=te(t,{formItemContext:y}),b=se(v(()=>t.loading)),I=T(t.modelValue!==!1),p=T(),j=T(),X=v(()=>[i.b(),i.m(H.value),i.is("disabled",b.value),i.is("checked",n.value)]),Y=v(()=>({width:ve(t.width)}));E(()=>t.modelValue,()=>{I.value=!0}),E(()=>t.value,()=>{I.value=!1});const z=v(()=>I.value?t.modelValue:t.value),n=v(()=>z.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(z.value)||(f(B,t.inactiveValue),f(P,t.inactiveValue),f(D,t.inactiveValue)),E(n,e=>{var r;p.value.checked=e,t.validateEvent&&((r=y==null?void 0:y.validate)==null||r.call(y,"change").catch(Q=>ne()))});const g=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(B,e),f(P,e),f(D,e),fe(()=>{p.value.checked=n.value})},M=()=>{if(b.value)return;const{beforeChange:e}=t;if(!e){g();return}const r=e();[A(r),C(r)].includes(!0)||pe(_,"beforeChange must return type `Promise<boolean>` or `boolean`"),A(r)?r.then(O=>{O&&g()}).catch(O=>{}):r&&g()},q=v(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),J=()=>{var e,r;(r=(e=p.value)==null?void 0:e.focus)==null||r.call(e)};return oe(()=>{p.value.checked=n.value}),G({focus:J,checked:n}),(e,r)=>(s(),u("div",{class:c(a(X)),style:K(a(q)),onClick:ue(M,["prevent"])},[N("input",{id:a(W),ref_key:"input",ref:p,class:c(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(b),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(b),tabindex:e.tabindex,onChange:g,onKeydown:le(M,["enter"])},null,42,ke),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(s(),u("span",{key:0,class:c([a(i).e("label"),a(i).em("label","left"),a(i).is("active",!a(n))])},[e.inactiveIcon?(s(),d(a(m),{key:0},{default:h(()=>[(s(),d(w(e.inactiveIcon)))]),_:1})):l("v-if",!0),!e.inactiveIcon&&e.inactiveText?(s(),u("span",{key:1,"aria-hidden":a(n)},k(e.inactiveText),9,Ce)):l("v-if",!0)],2)):l("v-if",!0),N("span",{ref_key:"core",ref:j,class:c(a(i).e("core")),style:K(a(Y))},[e.inlinePrompt?(s(),u("div",{key:0,class:c(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(s(),u(F,{key:0},[e.activeIcon?(s(),d(a(m),{key:0,class:c([a(i).is("icon"),a(n)?a(i).is("show"):a(i).is("hide")])},{default:h(()=>[(s(),d(w(e.activeIcon)))]),_:1},8,["class"])):l("v-if",!0),e.inactiveIcon?(s(),d(a(m),{key:1,class:c([a(i).is("icon"),a(n)?a(i).is("hide"):a(i).is("show")])},{default:h(()=>[(s(),d(w(e.inactiveIcon)))]),_:1},8,["class"])):l("v-if",!0)],64)):e.activeText||e.inactiveIcon?(s(),u(F,{key:1},[e.activeText?(s(),u("span",{key:0,class:c([a(i).is("text"),a(n)?a(i).is("show"):a(i).is("hide")]),"aria-hidden":!a(n)},k(e.activeText.substring(0,3)),11,Ie)):l("v-if",!0),e.inactiveText?(s(),u("span",{key:1,class:c([a(i).is("text"),a(n)?a(i).is("hide"):a(i).is("show")]),"aria-hidden":a(n)},k(e.inactiveText.substring(0,3)),11,Se)):l("v-if",!0)],64)):l("v-if",!0)],2)):l("v-if",!0),N("div",{class:c(a(i).e("action"))},[e.loading?(s(),d(a(m),{key:0,class:c(a(i).is("loading"))},{default:h(()=>[re(a(ce))]),_:1},8,["class"])):l("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(s(),u("span",{key:1,class:c([a(i).e("label"),a(i).em("label","right"),a(i).is("active",a(n))])},[e.activeIcon?(s(),d(a(m),{key:0},{default:h(()=>[(s(),d(w(e.activeIcon)))]),_:1})):l("v-if",!0),!e.activeIcon&&e.activeText?(s(),u("span",{key:1,"aria-hidden":!a(n)},k(e.activeText),9,Ve)):l("v-if",!0)],2)):l("v-if",!0)],14,we))}});var Ne=de(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const _e=me(Ne);export{_e as E};