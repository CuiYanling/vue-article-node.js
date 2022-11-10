import{_ as O,a as g,ad as Z,b as M,b5 as T,r as K,u as W,aP as Y,Y as D,E as H,o as m,c as v,d as a,w as s,e as r,T as Q,aZ as X,W as h,f as E,g as d,A as c,p as ee,h as ae,i as x}from"./index.1bb11c7d.js";import{E as le,a as te}from"./el-input.424f7e03.js";import{E as oe,a as re}from"./el-form-item.18bec942.js";import{E as se}from"./el-progress.c46f28de.js";/* empty css                */import{E as ne,a as ue}from"./el-radio.892a4d3a.js";import"./el-scrollbar.1f62721a.js";import{E as de,a as ie}from"./el-select.22c89663.js";import"./index.08af8a2a.js";import"./index.8a409503.js";import"./scroll.292c786e.js";import"./validator.0d104d86.js";const me=p=>(ee("data-v-2d968a9d"),p=p(),ae(),p),pe={class:"bg"},_e=me(()=>x("div",{class:"card-header"},[x("span",null,"\u7F16\u8F91\u7BA1\u7406\u5458")],-1)),ce=E("\u7537"),fe=E("\u5973"),ge=["src"],ve=E("\u4FDD\u5B58\u4FEE\u6539"),Ee={__name:"ListEdit",setup(p){let l=g({}),w=Z("host"),f=g([]);async function k(){let{status:n,msg:e,data:t,total:o}=await c.plist();if(n)return f.value=t,t;d.error(e)}let U=M(),b="",S=async n=>{let{status:e,data:t}=await c.info({id:n});if(b=t.username,e)return t};T(async()=>{try{f.value=await k(),l.value=await S(U.params.id)}catch(n){console.log(n)}});let z={Authorization:`Bearer ${sessionStorage.token}`},I={type:"avatar"};const P=n=>{if(/^image\/(jpeg|png|jpg)$/.test(n.type)){if(n.size/1024/1024>2)return d.error("\u5934\u50CF\u4F53\u79EF\u4E0D\u5141\u8BB8\u8D85\u8FC72MB!"),!1}else return d.error("\u5934\u50CF\u5FC5\u987B\u662FJPG/PNG/JPEG\u683C\u5F0F!"),!1;return!0},q=({status:n,msg:e,src:t},o)=>{n?(l.value.avatar=t,d.success(e)):d.error(e)},B=(n,e)=>{let{status:t,msg:o}=JSON.parse(n.message);d.error(o)},V=g(),N=K({username:[{validator:async(n,e,t)=>{if(e===""){t(new Error("\u8BF7\u8F93\u5165\u7528\u6237\u540D!!!"));return}let{status:o}=await c.checkusername({username:l.value.username});if(b===l.value.username&&t(),!o){t(new Error("\u7528\u6237\u5DF2\u88AB\u6CE8\u518C!"));return}t()},trigger:"blur"},{min:3,max:20,required:!0,message:"\u8D26\u6237\u957F\u5EA6\u8981\u6C42\u57283-20\u4E4B\u95F4",trigger:"blur"}],fullname:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D!",trigger:"blur"},{min:1,max:10,message:"\u59D3\u540D\u957F\u5EA6\u8981\u6C42\u57281-10\u4E4B\u95F4",trigger:"blur"}],role:[{required:!0}],sex:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B!",trigger:"change"}],tel:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801!",trigger:"blur"},{pattern:/^1(34[0-8]|705|(3[5-9]|5[0127-9]|8[23478]|78)\d)\d{7}$/,message:"\u624B\u673A\u53F7\u7801\u4E0D\u7B26\u5408\u89C4\u5219\uFF01",trigger:"blur"}],email:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u53F7!",trigger:"blur"},{pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740\uFF01",trigger:"blur"}],avatar:[{required:!0}]});let A=W();function L(n){n.validate(async(e,t)=>{let o=JSON.parse(JSON.stringify({...l.value}));if(delete o.role_name,console.log(o),e){console.log(o);const{status:_,msg:i}=await c.keep(o);console.log(_,i),_?(d.success(i),A.push("/admin/list")):d.error(i)}else console.log("\u6821\u9A8C\u5931\u8D25(\u5B57\u6BB5)",t),d.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u4FDD\u5B58\u4FEE\u6539\u5931\u8D25\uFF01")})}return(n,e)=>{const t=le,o=oe,_=de,i=ie,y=ne,R=ue,$=Y("Plus"),j=D,J=se,C=H,F=re,G=te;return m(),v("div",pe,[a(G,{class:"form-card"},{header:s(()=>[_e]),default:s(()=>[a(F,{ref_key:"formRef",ref:V,model:r(l),rules:N,"label-width":"80px"},{default:s(()=>[a(o,{label:"\u7528\u6237\u540D",prop:"username"},{default:s(()=>[a(t,{modelValue:r(l).username,"onUpdate:modelValue":e[0]||(e[0]=u=>r(l).username=u)},null,8,["modelValue"])]),_:1}),a(o,{label:"\u59D3\u540D",prop:"fullname"},{default:s(()=>[a(t,{modelValue:r(l).fullname,"onUpdate:modelValue":e[1]||(e[1]=u=>r(l).fullname=u)},null,8,["modelValue"])]),_:1}),a(o,{label:"\u89D2\u8272",prop:"role"},{default:s(()=>[a(i,{modelValue:r(l).role,"onUpdate:modelValue":e[2]||(e[2]=u=>r(l).role=u),class:"m-2",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",size:"large"},{default:s(()=>[(m(!0),v(Q,null,X(r(f),u=>(m(),h(_,{key:u.id,label:u.name,value:u.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(o,{label:"\u6027\u522B",prop:"sex"},{default:s(()=>[a(R,{modelValue:r(l).sex,"onUpdate:modelValue":e[3]||(e[3]=u=>r(l).sex=u),class:"ml-4"},{default:s(()=>[a(y,{label:"\u7537",size:"large"},{default:s(()=>[ce]),_:1}),a(y,{label:"\u5973",size:"large"},{default:s(()=>[fe]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(o,{label:"\u624B\u673A",prop:"tel"},{default:s(()=>[a(t,{modelValue:r(l).tel,"onUpdate:modelValue":e[4]||(e[4]=u=>r(l).tel=u)},null,8,["modelValue"])]),_:1}),a(o,{label:"\u90AE\u7BB1",prop:"email"},{default:s(()=>[a(t,{modelValue:r(l).email,"onUpdate:modelValue":e[5]||(e[5]=u=>r(l).email=u)},null,8,["modelValue"])]),_:1}),a(o,{label:"\u5934\u50CF",prop:"avatar"},{default:s(()=>[a(J,{class:"avatar-uploader",action:`${r(w)}/upload/common/`,headers:r(z),data:r(I),"show-file-list":!1,accept:".png,.jpg,.jpeg","on-success":q,"on-error":B,"before-upload":P},{default:s(()=>[r(l).avatar?(m(),v("img",{key:0,src:r(l).avatar,class:"avatar"},null,8,ge)):(m(),h(j,{key:1,class:"avatar-uploader-icon"},{default:s(()=>[a($)]),_:1}))]),_:1},8,["action","headers","data"])]),_:1}),a(o,null,{default:s(()=>[a(C,{type:"primary",onClick:e[6]||(e[6]=u=>L(V.value))},{default:s(()=>[ve]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}},Ne=O(Ee,[["__scopeId","data-v-2d968a9d"]]);export{Ne as default};
