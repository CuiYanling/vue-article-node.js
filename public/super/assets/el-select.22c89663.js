import{ar as zl,at as fl,bA as Fl,an as cl,ak as pl,bB as Kl,ad as Le,j as S,aK as Ie,aU as q,K as z,e as il,l as ol,y as Ae,H as ae,r as Pe,ax as al,aC as Wl,L as P,a4 as $e,Q as ve,R as rl,o as w,c as M,V as oe,i as B,a2 as J,U as T,a0 as Y,a as W,N as sl,J as Pl,a3 as ie,I as vl,C as Nl,F as Hl,M as Gl,bC as ce,a9 as Ql,bD as el,aa as ml,bd as Ul,aV as kl,Y as jl,bE as Xl,$ as Yl,aX as Jl,ac as $l,aP as ne,aY as Zl,d as pe,w as A,W as K,T as ll,aZ as gl,S as R,aF as _l,bh as V,bF as xl,bz as en,X as bl,ab as ln,aI as Ml}from"./index.1bb11c7d.js";import{U as Z,i as nn,C as Dl,E as tn}from"./el-input.424f7e03.js";import{d as hl,E as on,C as an}from"./el-scrollbar.1f62721a.js";import{E as rn,t as sn}from"./index.8a409503.js";import{u as ul}from"./index.08af8a2a.js";import{s as un}from"./scroll.292c786e.js";import{U as yl,g as Cl,b as Sl,i as Ol,S as nl,c as dn}from"./el-form-item.18bec942.js";import{i as fn}from"./validator.0d104d86.js";var cn="__lodash_hash_undefined__";function pn(e){return this.__data__.set(e,cn),this}function vn(e){return this.__data__.has(e)}function Ee(e){var l=-1,t=e==null?0:e.length;for(this.__data__=new zl;++l<t;)this.add(e[l])}Ee.prototype.add=Ee.prototype.push=pn;Ee.prototype.has=vn;function mn(e,l){for(var t=-1,s=e==null?0:e.length;++t<s;)if(l(e[t],t,e))return!0;return!1}function gn(e,l){return e.has(l)}var bn=1,hn=2;function Bl(e,l,t,s,v,a){var r=t&bn,d=e.length,g=l.length;if(d!=g&&!(r&&g>d))return!1;var h=a.get(e),c=a.get(l);if(h&&c)return h==l&&c==e;var y=-1,m=!0,O=t&hn?new Ee:void 0;for(a.set(e,l),a.set(l,e);++y<d;){var o=e[y],f=l[y];if(s)var b=r?s(f,o,y,l,e,a):s(o,f,y,e,l,a);if(b!==void 0){if(b)continue;m=!1;break}if(O){if(!mn(l,function(C,L){if(!gn(O,L)&&(o===C||v(o,C,t,s,a)))return O.push(L)})){m=!1;break}}else if(!(o===f||v(o,f,t,s,a))){m=!1;break}}return a.delete(e),a.delete(l),m}function yn(e){var l=-1,t=Array(e.size);return e.forEach(function(s,v){t[++l]=[v,s]}),t}function Cn(e){var l=-1,t=Array(e.size);return e.forEach(function(s){t[++l]=s}),t}var Sn=1,On=2,wn="[object Boolean]",Tn="[object Date]",Ln="[object Error]",In="[object Map]",En="[object Number]",An="[object RegExp]",Pn="[object Set]",$n="[object String]",Mn="[object Symbol]",Dn="[object ArrayBuffer]",Bn="[object DataView]",wl=fl?fl.prototype:void 0,tl=wl?wl.valueOf:void 0;function Rn(e,l,t,s,v,a,r){switch(t){case Bn:if(e.byteLength!=l.byteLength||e.byteOffset!=l.byteOffset)return!1;e=e.buffer,l=l.buffer;case Dn:return!(e.byteLength!=l.byteLength||!a(new yl(e),new yl(l)));case wn:case Tn:case En:return Fl(+e,+l);case Ln:return e.name==l.name&&e.message==l.message;case An:case $n:return e==l+"";case In:var d=yn;case Pn:var g=s&Sn;if(d||(d=Cn),e.size!=l.size&&!g)return!1;var h=r.get(e);if(h)return h==l;s|=On,r.set(e,l);var c=Bl(d(e),d(l),s,v,a,r);return r.delete(e),c;case Mn:if(tl)return tl.call(e)==tl.call(l)}return!1}var Vn=1,qn=Object.prototype,zn=qn.hasOwnProperty;function Fn(e,l,t,s,v,a){var r=t&Vn,d=Cl(e),g=d.length,h=Cl(l),c=h.length;if(g!=c&&!r)return!1;for(var y=g;y--;){var m=d[y];if(!(r?m in l:zn.call(l,m)))return!1}var O=a.get(e),o=a.get(l);if(O&&o)return O==l&&o==e;var f=!0;a.set(e,l),a.set(l,e);for(var b=r;++y<g;){m=d[y];var C=e[m],L=l[m];if(s)var G=r?s(L,C,m,l,e,a):s(C,L,m,e,l,a);if(!(G===void 0?C===L||v(C,L,t,s,a):G)){f=!1;break}b||(b=m=="constructor")}if(f&&!b){var Q=e.constructor,N=l.constructor;Q!=N&&"constructor"in e&&"constructor"in l&&!(typeof Q=="function"&&Q instanceof Q&&typeof N=="function"&&N instanceof N)&&(f=!1)}return a.delete(e),a.delete(l),f}var Kn=1,Tl="[object Arguments]",Ll="[object Array]",Te="[object Object]",Wn=Object.prototype,Il=Wn.hasOwnProperty;function Nn(e,l,t,s,v,a){var r=cl(e),d=cl(l),g=r?Ll:Sl(e),h=d?Ll:Sl(l);g=g==Tl?Te:g,h=h==Tl?Te:h;var c=g==Te,y=h==Te,m=g==h;if(m&&Ol(e)){if(!Ol(l))return!1;r=!0,c=!1}if(m&&!c)return a||(a=new nl),r||dn(e)?Bl(e,l,t,s,v,a):Rn(e,l,g,t,s,v,a);if(!(t&Kn)){var O=c&&Il.call(e,"__wrapped__"),o=y&&Il.call(l,"__wrapped__");if(O||o){var f=O?e.value():e,b=o?l.value():l;return a||(a=new nl),v(f,b,t,s,a)}}return m?(a||(a=new nl),Fn(e,l,t,s,v,a)):!1}function Rl(e,l,t,s,v){return e===l?!0:e==null||l==null||!pl(e)&&!pl(l)?e!==e&&l!==l:Nn(e,l,t,s,Rl,v)}function El(e,l){return Rl(e,l)}const Hn=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Gn=e=>Kl[e||"default"],Qn=e=>({focus:()=>{var l,t;(t=(l=e.value)==null?void 0:l.focus)==null||t.call(l)}}),Vl="ElSelectGroup",Me="ElSelect";function Un(e,l){const t=Le(Me),s=Le(Vl,{disabled:!1}),v=S(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),a=S(()=>t.props.multiple?y(t.props.modelValue,e.value):m(e.value,t.props.modelValue)),r=S(()=>{if(t.props.multiple){const f=t.props.modelValue||[];return!a.value&&f.length>=t.props.multipleLimit&&t.props.multipleLimit>0}else return!1}),d=S(()=>e.label||(v.value?"":e.value)),g=S(()=>e.value||e.label||""),h=S(()=>e.disabled||l.groupDisabled||r.value),c=ol(),y=(f=[],b)=>{if(v.value){const C=t.props.valueKey;return f&&f.some(L=>Ie(q(L,C))===q(b,C))}else return f&&f.includes(b)},m=(f,b)=>{if(v.value){const{valueKey:C}=t.props;return q(f,C)===q(b,C)}else return f===b},O=()=>{!e.disabled&&!s.disabled&&(t.hoverIndex=t.optionsArray.indexOf(c.proxy))};z(()=>d.value,()=>{!e.created&&!t.props.remote&&t.setSelected()}),z(()=>e.value,(f,b)=>{const{remote:C,valueKey:L}=t.props;if(Object.is(f,b)||(t.onOptionDestroy(b,c.proxy),t.onOptionCreate(c.proxy)),!e.created&&!C){if(L&&typeof f=="object"&&typeof b=="object"&&f[L]===b[L])return;t.setSelected()}}),z(()=>s.disabled,()=>{l.groupDisabled=s.disabled},{immediate:!0});const{queryChange:o}=Ie(t);return z(o,f=>{const{query:b}=il(f),C=new RegExp(Hn(b),"i");l.visible=C.test(d.value)||e.created,l.visible||t.filteredOptionsCount--}),{select:t,currentLabel:d,currentValue:g,itemSelected:a,isDisabled:h,hoverItem:O}}const kn=Ae({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ae("select"),t=Pe({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:s,itemSelected:v,isDisabled:a,select:r,hoverItem:d}=Un(e,t),{visible:g,hover:h}=al(t),c=ol().proxy;r.onOptionCreate(c),Wl(()=>{const m=c.value,{selected:O}=r,f=(r.props.multiple?O:[O]).some(b=>b.value===c.value);P(()=>{r.cachedOptions.get(m)===c&&!f&&r.cachedOptions.delete(m)}),r.onOptionDestroy(m,c)});function y(){e.disabled!==!0&&t.groupDisabled!==!0&&r.handleOptionSelect(c,!0)}return{ns:l,currentLabel:s,itemSelected:v,isDisabled:a,select:r,hoverItem:d,visible:g,hover:h,selectOptionClick:y,states:t}}});function jn(e,l,t,s,v,a){return ve((w(),M("li",{class:T([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...r)=>e.hoverItem&&e.hoverItem(...r)),onClick:l[1]||(l[1]=Y((...r)=>e.selectOptionClick&&e.selectOptionClick(...r),["stop"]))},[oe(e.$slots,"default",{},()=>[B("span",null,J(e.currentLabel),1)])],34)),[[rl,e.visible]])}var dl=$e(kn,[["render",jn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Xn=Ae({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Le(Me),l=ae("select"),t=S(()=>e.props.popperClass),s=S(()=>e.props.multiple),v=S(()=>e.props.fitInputWidth),a=W("");function r(){var d;a.value=`${(d=e.selectWrapper)==null?void 0:d.offsetWidth}px`}return sl(()=>{r(),Pl(e.selectWrapper,r)}),{ns:l,minWidth:a,popperClass:t,isMultiple:s,isFitInputWidth:v}}});function Yn(e,l,t,s,v,a){return w(),M("div",{class:T([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ie({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[oe(e.$slots,"default")],6)}var Jn=$e(Xn,[["render",Yn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function Zn(e){const{t:l}=ul();return Pe({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1})}const _n=(e,l,t)=>{const{t:s}=ul(),v=ae("select"),a=W(null),r=W(null),d=W(null),g=W(null),h=W(null),c=W(null),y=W(-1),m=vl({query:""}),O=vl(""),{form:o,formItem:f}=Nl(),b=S(()=>!e.filterable||e.multiple||!l.visible),C=S(()=>e.disabled||(o==null?void 0:o.disabled)),L=S(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!C.value&&l.inputHovering&&n}),G=S(()=>e.remote&&e.filterable?"":e.suffixIcon),Q=S(()=>v.is("reverse",G.value&&l.visible)),N=S(()=>e.remote?300:0),re=S(()=>e.loading?e.loadingText||s("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||s("el.select.noMatch"):l.options.size===0?e.noDataText||s("el.select.noData"):null),E=S(()=>Array.from(l.options.values())),De=S(()=>Array.from(l.cachedOptions.values())),Be=S(()=>{const n=E.value.filter(i=>!i.created).some(i=>i.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),te=Hl(),Re=S(()=>["small"].includes(te.value)?"small":"default"),Ve=S({get(){return l.visible&&re.value!==!1},set(n){l.visible=n}});z([()=>C.value,()=>te.value,()=>o==null?void 0:o.size],()=>{P(()=>{F()})}),z(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),z(()=>e.modelValue,(n,i)=>{e.multiple&&(F(),n&&n.length>0||r.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",U(l.query))),se(),e.filterable&&!e.multiple&&(l.inputLength=20),!El(n,i)&&e.validateEvent&&(f==null||f.validate("change").catch(u=>Gl()))},{flush:"post",deep:!0}),z(()=>l.visible,n=>{var i,u,p;n?((u=(i=d.value)==null?void 0:i.updatePopper)==null||u.call(i),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(p=r.value)==null||p.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),U(l.query),!e.multiple&&!e.remote&&(m.value.query="",ce(m),ce(O)))):(r.value&&r.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,qe(),P(()=>{r.value&&r.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),t.emit("visible-change",n)}),z(()=>l.options.entries(),()=>{var n,i,u;if(!Ql)return;(i=(n=d.value)==null?void 0:n.updatePopper)==null||i.call(n),e.multiple&&F();const p=((u=h.value)==null?void 0:u.querySelectorAll("input"))||[];Array.from(p).includes(document.activeElement)||se(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&ge()},{flush:"post"}),z(()=>l.hoverIndex,n=>{typeof n=="number"&&n>-1&&(y.value=E.value[n]||{}),E.value.forEach(i=>{i.hover=y.value===i})});const F=()=>{e.collapseTags&&!e.filterable||P(()=>{var n,i;if(!a.value)return;const u=a.value.$el.querySelector("input"),p=g.value,I=Gn(te.value||(o==null?void 0:o.size));u.style.height=`${(l.selected.length===0?I:Math.max(p?p.clientHeight+(p.clientHeight>I?6:0):0,I))-2}px`,l.tagInMultiLine=Number.parseFloat(u.style.height)>=I,l.visible&&re.value!==!1&&((i=(n=d.value)==null?void 0:n.updatePopper)==null||i.call(n))})},U=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(typeof e.filterMethod=="function"||typeof e.remoteMethod=="function")){l.previousQuery=n;return}l.previousQuery=n,P(()=>{var i,u;l.visible&&((u=(i=d.value)==null?void 0:i.updatePopper)==null||u.call(i))}),l.hoverIndex=-1,e.multiple&&e.filterable&&P(()=>{const i=r.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,i):i,me(),F()}),e.remote&&typeof e.remoteMethod=="function"?(l.hoverIndex=-1,e.remoteMethod(n)):typeof e.filterMethod=="function"?(e.filterMethod(n),ce(O)):(l.filteredOptionsCount=l.optionsCount,m.value.query=n,ce(m),ce(O)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await P(),ge())}},me=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=r.value.value?"":l.cachedPlaceHolder)},ge=()=>{const n=E.value.filter(p=>p.visible&&!p.disabled&&!p.states.groupDisabled),i=n.find(p=>p.created),u=n[0];l.hoverIndex=ue(E.value,i||u)},se=()=>{var n;if(e.multiple)l.selectedLabel="";else{const u=be(e.modelValue);(n=u.props)!=null&&n.created?(l.createdLabel=u.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=u.currentLabel,l.selected=u,e.filterable&&(l.query=l.selectedLabel);return}const i=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(u=>{i.push(be(u))}),l.selected=i,P(()=>{F()})},be=n=>{let i;const u=el(n).toLowerCase()==="object",p=el(n).toLowerCase()==="null",I=el(n).toLowerCase()==="undefined";for(let H=l.cachedOptions.size-1;H>=0;H--){const D=De.value[H];if(u?q(D.value,e.valueKey)===q(n,e.valueKey):D.value===n){i={value:n,currentLabel:D.currentLabel,isDisabled:D.isDisabled};break}}if(i)return i;const j=u?n.label:!p&&!I?n:"",X={value:n,currentLabel:j};return e.multiple&&(X.hitState=!1),X},qe=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(i=>E.value.findIndex(u=>q(u,n)===q(i,n)))):l.hoverIndex=-1:l.hoverIndex=E.value.findIndex(i=>ee(i)===ee(l.selected))},300)},ze=()=>{var n,i;Fe(),(i=(n=d.value)==null?void 0:n.updatePopper)==null||i.call(n),e.multiple&&!e.filterable&&F()},Fe=()=>{var n;l.inputWidth=(n=a.value)==null?void 0:n.$el.getBoundingClientRect().width},Ke=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,U(l.query))},We=hl(()=>{Ke()},N.value),Ne=hl(n=>{U(n.target.value)},N.value),_=n=>{El(e.modelValue,n)||t.emit(Dl,n)},He=n=>{if(n.target.value.length<=0&&!de()){const i=e.modelValue.slice();i.pop(),t.emit(Z,i),_(i)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},Ge=(n,i)=>{const u=l.selected.indexOf(i);if(u>-1&&!C.value){const p=e.modelValue.slice();p.splice(u,1),t.emit(Z,p),_(p),t.emit("remove-tag",i.value)}n.stopPropagation()},x=n=>{n.stopPropagation();const i=e.multiple?[]:"";if(typeof i!="string")for(const u of l.selected)u.isDisabled&&i.push(u.value);t.emit(Z,i),_(i),l.visible=!1,t.emit("clear")},he=(n,i)=>{var u;if(e.multiple){const p=(e.modelValue||[]).slice(),I=ue(p,n.value);I>-1?p.splice(I,1):(e.multipleLimit<=0||p.length<e.multipleLimit)&&p.push(n.value),t.emit(Z,p),_(p),n.created&&(l.query="",U(""),l.inputLength=20),e.filterable&&((u=r.value)==null||u.focus())}else t.emit(Z,n.value),_(n.value),l.visible=!1;l.isSilentBlur=i,Qe(),!l.visible&&P(()=>{k(n)})},ue=(n=[],i)=>{if(!ml(i))return n.indexOf(i);const u=e.valueKey;let p=-1;return n.some((I,j)=>Ie(q(I,u))===q(i,u)?(p=j,!0):!1),p},Qe=()=>{l.softFocus=!0;const n=r.value||a.value;n&&(n==null||n.focus())},k=n=>{var i,u,p,I,j;const X=Array.isArray(n)?n[0]:n;let H=null;if(X!=null&&X.value){const D=E.value.filter($=>$.value===X.value);D.length>0&&(H=D[0].$el)}if(d.value&&H){const D=(I=(p=(u=(i=d.value)==null?void 0:i.popperRef)==null?void 0:u.contentRef)==null?void 0:p.querySelector)==null?void 0:I.call(p,`.${v.be("dropdown","wrap")}`);D&&un(D,H)}(j=c.value)==null||j.handleScroll()},Ue=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},ke=(n,i)=>{l.options.get(n)===i&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},je=n=>{n.code!==Ul.backspace&&de(!1),l.inputLength=r.value.value.length*15+20,F()},de=n=>{if(!Array.isArray(l.selected))return;const i=l.selected[l.selected.length-1];if(!!i)return n===!0||n===!1?(i.hitState=n,n):(i.hitState=!i.hitState,i.hitState)},fe=n=>{const i=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,P(()=>U(i));else{const u=i[i.length-1]||"";l.isOnComposition=!nn(u)}},ye=()=>{P(()=>k(l.selected))},Xe=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),t.emit("focus",n))},Ce=()=>{var n;l.visible=!1,(n=a.value)==null||n.blur()},Ye=n=>{P(()=>{l.isSilentBlur?l.isSilentBlur=!1:t.emit("blur",n)}),l.softFocus=!1},Je=n=>{x(n)},Ze=()=>{l.visible=!1},Se=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Oe=()=>{var n;C.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:l.visible=!l.visible,l.visible&&((n=r.value||a.value)==null||n.focus()))},_e=()=>{l.visible?E.value[l.hoverIndex]&&he(E.value[l.hoverIndex],void 0):Oe()},ee=n=>ml(n.value)?q(n.value,e.valueKey):n.value,xe=S(()=>E.value.filter(n=>n.visible).every(n=>n.disabled)),we=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!xe.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const i=E.value[l.hoverIndex];(i.disabled===!0||i.states.groupDisabled===!0||!i.visible)&&we(n),P(()=>k(y.value))}};return{optionsArray:E,selectSize:te,handleResize:ze,debouncedOnInputChange:We,debouncedQueryChange:Ne,deletePrevTag:He,deleteTag:Ge,deleteSelected:x,handleOptionSelect:he,scrollToOption:k,readonly:b,resetInputHeight:F,showClose:L,iconComponent:G,iconReverse:Q,showNewOption:Be,collapseTagSize:Re,setSelected:se,managePlaceholder:me,selectDisabled:C,emptyText:re,toggleLastOptionHitState:de,resetInputState:je,handleComposition:fe,onOptionCreate:Ue,onOptionDestroy:ke,handleMenuEnter:ye,handleFocus:Xe,blur:Ce,handleBlur:Ye,handleClearClick:Je,handleClose:Ze,handleKeydownEscape:Se,toggleMenu:Oe,selectOption:_e,getValueKey:ee,navigateOptions:we,dropMenuVisible:Ve,queryChange:m,groupQueryChange:O,reference:a,input:r,tooltipRef:d,tags:g,selectWrapper:h,scrollbar:c}},Al="ElSelect",xn=Ae({name:Al,componentName:Al,components:{ElInput:tn,ElSelectMenu:Jn,ElOption:dl,ElTag:rn,ElScrollbar:on,ElTooltip:kl,ElIcon:jl},directives:{ClickOutside:an},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:fn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Xl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:[String,Object],default:Yl},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:[String,Object],default:Jl},tagType:{...sn.type,default:"info"},validateEvent:{type:Boolean,default:!0}},emits:[Z,Dl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const t=ae("select"),s=ae("input"),{t:v}=ul(),a=Zn(e),{optionsArray:r,selectSize:d,readonly:g,handleResize:h,collapseTagSize:c,debouncedOnInputChange:y,debouncedQueryChange:m,deletePrevTag:O,deleteTag:o,deleteSelected:f,handleOptionSelect:b,scrollToOption:C,setSelected:L,resetInputHeight:G,managePlaceholder:Q,showClose:N,selectDisabled:re,iconComponent:E,iconReverse:De,showNewOption:Be,emptyText:te,toggleLastOptionHitState:Re,resetInputState:Ve,handleComposition:F,onOptionCreate:U,onOptionDestroy:me,handleMenuEnter:ge,handleFocus:se,blur:be,handleBlur:qe,handleClearClick:ze,handleClose:Fe,handleKeydownEscape:Ke,toggleMenu:We,selectOption:Ne,getValueKey:_,navigateOptions:He,dropMenuVisible:Ge,reference:x,input:he,tooltipRef:ue,tags:Qe,selectWrapper:k,scrollbar:Ue,queryChange:ke,groupQueryChange:je}=_n(e,a,l),{focus:de}=Qn(x),{inputWidth:fe,selected:ye,inputLength:Xe,filteredOptionsCount:Ce,visible:Ye,softFocus:Je,selectedLabel:Ze,hoverIndex:Se,query:Oe,inputHovering:_e,currentPlaceholder:ee,menuVisibleOnFocus:xe,isOnComposition:we,isSilentBlur:n,options:i,cachedOptions:u,optionsCount:p,prefixWidth:I,tagInMultiLine:j}=al(a),X=S(()=>{const $=[t.b()],le=il(d);return le&&$.push(t.m(le)),e.disabled&&$.push(t.m("disabled")),$}),H=S(()=>({maxWidth:`${il(fe)-32}px`,width:"100%"}));$l(Me,Pe({props:e,options:i,optionsArray:r,cachedOptions:u,optionsCount:p,filteredOptionsCount:Ce,hoverIndex:Se,handleOptionSelect:b,onOptionCreate:U,onOptionDestroy:me,selectWrapper:k,selected:ye,setSelected:L,queryChange:ke,groupQueryChange:je})),sl(()=>{a.cachedPlaceHolder=ee.value=e.placeholder||v("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(ee.value=""),Pl(k,h),e.remote&&e.multiple&&G(),P(()=>{const $=x.value&&x.value.$el;if(!!$&&(fe.value=$.getBoundingClientRect().width,l.slots.prefix)){const le=$.querySelector(`.${s.e("prefix")}`);I.value=Math.max(le.getBoundingClientRect().width+5,30)}}),L()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(Z,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(Z,"");const D=S(()=>{var $,le;return(le=($=ue.value)==null?void 0:$.popperRef)==null?void 0:le.contentRef});return{tagInMultiLine:j,prefixWidth:I,selectSize:d,readonly:g,handleResize:h,collapseTagSize:c,debouncedOnInputChange:y,debouncedQueryChange:m,deletePrevTag:O,deleteTag:o,deleteSelected:f,handleOptionSelect:b,scrollToOption:C,inputWidth:fe,selected:ye,inputLength:Xe,filteredOptionsCount:Ce,visible:Ye,softFocus:Je,selectedLabel:Ze,hoverIndex:Se,query:Oe,inputHovering:_e,currentPlaceholder:ee,menuVisibleOnFocus:xe,isOnComposition:we,isSilentBlur:n,options:i,resetInputHeight:G,managePlaceholder:Q,showClose:N,selectDisabled:re,iconComponent:E,iconReverse:De,showNewOption:Be,emptyText:te,toggleLastOptionHitState:Re,resetInputState:Ve,handleComposition:F,handleMenuEnter:ge,handleFocus:se,blur:be,handleBlur:qe,handleClearClick:ze,handleClose:Fe,handleKeydownEscape:Ke,toggleMenu:We,selectOption:Ne,getValueKey:_,navigateOptions:He,dropMenuVisible:Ge,focus:de,reference:x,input:he,tooltipRef:ue,popperPaneRef:D,tags:Qe,selectWrapper:k,scrollbar:Ue,wrapperKls:X,selectTagsStyle:H,nsSelect:t}}}),et={class:"select-trigger"},lt=["disabled","autocomplete"],nt={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function tt(e,l,t,s,v,a){const r=ne("el-tag"),d=ne("el-tooltip"),g=ne("el-icon"),h=ne("el-input"),c=ne("el-option"),y=ne("el-scrollbar"),m=ne("el-select-menu"),O=Zl("click-outside");return ve((w(),M("div",{ref:"selectWrapper",class:T(e.wrapperKls),onClick:l[22]||(l[22]=Y((...o)=>e.toggleMenu&&e.toggleMenu(...o),["stop"]))},[pe(d,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:"bottom-start",teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:A(()=>[B("div",et,[e.multiple?(w(),M("div",{key:0,ref:"tags",class:T(e.nsSelect.e("tags")),style:ie(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(w(),M("span",{key:0,class:T([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[pe(r,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=o=>e.deleteTag(o,e.selected[0]))},{default:A(()=>[B("span",{class:T(e.nsSelect.e("tags-text")),style:ie({maxWidth:e.inputWidth-123+"px"})},J(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(w(),K(r,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:A(()=>[e.collapseTagsTooltip?(w(),K(d,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:A(()=>[B("span",{class:T(e.nsSelect.e("tags-text"))},"+ "+J(e.selected.length-1),3)]),content:A(()=>[B("div",{class:T(e.nsSelect.e("collapse-tags"))},[(w(!0),M(ll,null,gl(e.selected.slice(1),(o,f)=>(w(),M("div",{key:f,class:T(e.nsSelect.e("collapse-tag"))},[(w(),K(r,{key:e.getValueKey(o),class:"in-tooltip",closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,hit:o.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:b=>e.deleteTag(b,o)},{default:A(()=>[B("span",{class:T(e.nsSelect.e("tags-text")),style:ie({maxWidth:e.inputWidth-75+"px"})},J(o.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(w(),M("span",{key:1,class:T(e.nsSelect.e("tags-text"))},"+ "+J(e.selected.length-1),3))]),_:1},8,["size","type"])):R("v-if",!0)],2)):R("v-if",!0),R(" <div> "),e.collapseTags?R("v-if",!0):(w(),K(_l,{key:1,onAfterLeave:e.resetInputHeight},{default:A(()=>[B("span",{class:T([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(w(!0),M(ll,null,gl(e.selected,o=>(w(),K(r,{key:e.getValueKey(o),closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,hit:o.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,o)},{default:A(()=>[B("span",{class:T(e.nsSelect.e("tags-text")),style:ie({maxWidth:e.inputWidth-75+"px"})},J(o.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),R(" </div> "),e.filterable?ve((w(),M("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=o=>e.query=o),type:"text",class:T([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ie({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:l[3]||(l[3]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onKeyup:l[4]||(l[4]=(...o)=>e.managePlaceholder&&e.managePlaceholder(...o)),onKeydown:[l[5]||(l[5]=(...o)=>e.resetInputState&&e.resetInputState(...o)),l[6]||(l[6]=V(Y(o=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=V(Y(o=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=V((...o)=>e.handleKeydownEscape&&e.handleKeydownEscape(...o),["esc"])),l[9]||(l[9]=V(Y((...o)=>e.selectOption&&e.selectOption(...o),["stop","prevent"]),["enter"])),l[10]||(l[10]=V((...o)=>e.deletePrevTag&&e.deletePrevTag(...o),["delete"])),l[11]||(l[11]=V(o=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionupdate:l[13]||(l[13]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionend:l[14]||(l[14]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onInput:l[15]||(l[15]=(...o)=>e.debouncedQueryChange&&e.debouncedQueryChange(...o))},null,46,lt)),[[xl,e.query]]):R("v-if",!0)],6)):R("v-if",!0),pe(h,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=o=>e.selectedLabel=o),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:T([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=V(Y(o=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=V(Y(o=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),V(Y(e.selectOption,["stop","prevent"]),["enter"]),V(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=V(o=>e.visible=!1,["tab"]))],onMouseenter:l[20]||(l[20]=o=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=o=>e.inputHovering=!1)},en({suffix:A(()=>[e.iconComponent&&!e.showClose?(w(),K(g,{key:0,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:A(()=>[(w(),K(bl(e.iconComponent)))]),_:1},8,["class"])):R("v-if",!0),e.showClose&&e.clearIcon?(w(),K(g,{key:1,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:A(()=>[(w(),K(bl(e.clearIcon)))]),_:1},8,["class","onClick"])):R("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:A(()=>[B("div",nt,[oe(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])])]),content:A(()=>[pe(m,null,{default:A(()=>[ve(pe(y,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:T([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:A(()=>[e.showNewOption?(w(),K(c,{key:0,value:e.query,created:!0},null,8,["value"])):R("v-if",!0),oe(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[rl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(w(),M(ll,{key:0},[e.$slots.empty?oe(e.$slots,"empty",{key:0}):(w(),M("p",{key:1,class:T(e.nsSelect.be("dropdown","empty"))},J(e.emptyText),3))],64)):R("v-if",!0)]),_:3})]),_:3},8,["visible","teleported","popper-class","effect","transition","persistent","onShow"])],2)),[[O,e.handleClose,e.popperPaneRef]])}var it=$e(xn,[["render",tt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const ot=Ae({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ae("select"),t=W(!0),s=ol(),v=W([]);$l(Vl,Pe({...al(e)}));const a=Le(Me);sl(()=>{v.value=r(s.subTree)});const r=g=>{const h=[];return Array.isArray(g.children)&&g.children.forEach(c=>{var y;c.type&&c.type.name==="ElOption"&&c.component&&c.component.proxy?h.push(c.component.proxy):(y=c.children)!=null&&y.length&&h.push(...r(c))}),h},{groupQueryChange:d}=Ie(a);return z(d,()=>{t.value=v.value.some(g=>g.visible===!0)}),{visible:t,ns:l}}});function at(e,l,t,s,v,a){return ve((w(),M("ul",{class:T(e.ns.be("group","wrap"))},[B("li",{class:T(e.ns.be("group","title"))},J(e.label),3),B("li",null,[B("ul",{class:T(e.ns.b("group"))},[oe(e.$slots,"default")],2)])],2)),[[rl,e.visible]])}var ql=$e(ot,[["render",at],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const mt=ln(it,{Option:dl,OptionGroup:ql}),gt=Ml(dl);Ml(ql);export{gt as E,mt as a};
