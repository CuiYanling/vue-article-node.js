import{n as u,y as i,H as p,j as o,ac as c,o as m,W as f,w as y,V as g,U as d,e as s,a3 as w,X as _,a4 as v,ab as b}from"./index.1bb11c7d.js";const R=Symbol("rowContextKey"),C=["start","center","end","space-around","space-between","space-evenly"],S=["top","middle","bottom"],h=u({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:C,default:"start"},align:{type:String,values:S,default:"top"}}),j={name:"ElRow"},k=i({...j,props:h,setup(n){const e=n,a=p("row"),r=o(()=>e.gutter);c(R,{gutter:r});const l=o(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t});return(t,x)=>(m(),f(_(t.tag),{class:d([s(a).b(),s(a).is(`justify-${e.justify}`,t.justify!=="start"),s(a).is(`align-${e.align}`,t.align!=="top")]),style:w(s(l))},{default:y(()=>[g(t.$slots,"default")]),_:3},8,["class","style"]))}});var $=v(k,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const z=b($);export{z as E,R as r};
