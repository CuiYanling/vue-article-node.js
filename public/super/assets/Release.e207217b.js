import{u as x,I as k,r as _,aC as N,a as w,E as R,o as B,W as U,w as l,d as t,i as m,e as i,f as F,g as c}from"./index.1bb11c7d.js";import{E as I,a as q}from"./el-input.424f7e03.js";import{E as M,a as O}from"./el-form-item.18bec942.js";import{E as T}from"./el-switch.2d27c2c8.js";import{N as S}from"./notice.58bf0b82.js";import{T as $,E as z}from"./index.esm.c27fbbc9.js";import"./validator.0d104d86.js";const A=m("div",{class:"card-header"},[m("span",null,"\u516C\u544A\u5217\u8868")],-1),W={style:{border:"1px solid #ccc"}},j=F("\u53D1\u5E03\u516C\u544A"),X={__name:"Release",setup(D){let g=x();const d=k(),o=_({title:"",is_sticky:"0",content:""}),v={},p={placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9...",MENU_CONF:{}};p.MENU_CONF.uploadImage={fieldName:"file",server:"http://localhost:3001/upload/editor/",headers:{Authorization:`Bearer ${sessionStorage.token}`}},N(()=>{const r=d.value;r!=null&&r.destroy()});const E=r=>{d.value=r},f=w(),h=_({content:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9\uFF01",trigger:"blur"}],title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898!",trigger:"blur"},{min:1,max:50,message:"\u6807\u9898\u957F\u5EA6\u8981\u6C42\u57281-50\u4E4B\u95F4\uFF01",trigger:"blur"}],is_sticky:[{required:!0}]});let y=r=>{r.validate(async(e,u)=>{if(e){const{status:s,msg:n}=await S.release({...o});s?(c.success(n),g.push("/notice/list")):c.error(n)}else console.log("\u6821\u9A8C\u5931\u8D25(\u5B57\u6BB5)",u),c.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u53D1\u5E03\u516C\u544A\u5931\u8D25\uFF01")})};return(r,e)=>{const u=I,s=M,n=T,b=R,C=O,V=q;return B(),U(V,null,{header:l(()=>[A]),default:l(()=>[t(C,{ref_key:"formRef",ref:f,rules:h,model:o},{default:l(()=>[t(s,{label:"\u6807\u9898",prop:"title"},{default:l(()=>[t(u,{modelValue:o.title,"onUpdate:modelValue":e[0]||(e[0]=a=>o.title=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"\u7F6E\u9876",prop:"is_sticky"},{default:l(()=>[t(n,{modelValue:o.is_sticky,"onUpdate:modelValue":e[1]||(e[1]=a=>o.is_sticky=a),width:"50px","active-value":"1","inactive-value":"0","inline-prompt":"","active-text":"\u7F6E\u9876","inactive-text":"\u6B63\u5E38"},null,8,["modelValue"])]),_:1}),t(s,{label:"\u5185\u5BB9",prop:"content"},{default:l(()=>[m("div",W,[t(i($),{style:{"border-bottom":"1px solid #ccc"},editor:i(d),defaultConfig:v},null,8,["editor"]),t(i(z),{style:{height:"500px","overflow-y":"hidden"},modelValue:o.content,"onUpdate:modelValue":e[2]||(e[2]=a=>o.content=a),defaultConfig:p,onOnCreated:E},null,8,["modelValue"])])]),_:1}),t(s,null,{default:l(()=>[t(b,{type:"primary",onClick:e[3]||(e[3]=a=>i(y)(f.value))},{default:l(()=>[j]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})}}};export{X as default};