import{_ as m}from"./nuxt-link.e1e75430.js";import{f as _,g as d,u as f,r as v,o as x,c as b,a as e,t as s,h as n,b as u,w as c,d as i}from"./entry.256eeee3.js";import{_ as k}from"./button.54dadf77.js";/* empty css                   */const C=_("app",{state:()=>({count:0})});const N=e("h1",null,"首页",-1),B=e("div",{class:"i-ph-anchor-simple-thin"},null,-1),w=d({__name:"index",setup(S){f({title:"Nuxt-首页",meta:[{name:"description",content:"Nuxt Demo首屏页面"}]});const a=C(),o=v(0);return(h,t)=>{const p=k,l=m;return x(),b("div",null,[N,B,e("button",{class:"btn m-1",onClick:t[0]||(t[0]=r=>o.value++)},"count: "+s(n(o)),1),e("button",{class:"btn m-1",onClick:t[1]||(t[1]=r=>n(a).count++)},"store count: "+s(n(a).count),1),u(p,{type:"primary",onClick:t[2]||(t[2]=r=>o.value++)},{default:c(()=>[i("count: "+s(n(o)),1)]),_:1}),u(l,{to:"/list"},{default:c(()=>[i("list page")]),_:1})])}}});export{w as default};
