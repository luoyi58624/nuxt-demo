import{g as p,h as d,o as t,c as a,a as l,F as m,j as f,i as h,b as o,w as r,e as x,t as g,d as i,k as C}from"./entry.2ad33118.js";import{u as N}from"./fetch.322d64c9.js";const k=l("h1",null,"列表页",-1),B=p({__name:"list",async setup(v){let e,s;const u=C(),{data:_}=([e,s]=d(()=>N("/app-version",{baseURL:u.public.serverApi},"$SLvGQDW3Iq")),e=await e,s(),e);return(w,L)=>{const n=x;return t(),a("div",null,[k,l("ul",null,[(t(!0),a(m,null,f(h(_).data,c=>(t(),a("li",null,g(c.appName),1))),256))]),o(n,{to:"/"},{default:r(()=>[i("首页")]),_:1}),o(n,{to:"/list_detail"},{default:r(()=>[i("list detail page")]),_:1})])}}});export{B as default};
