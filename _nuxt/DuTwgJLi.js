import{_ as M}from"./2pqzDwV_.js";import{_ as b}from"./CTKFH9H8.js";import{a as k}from"./upsvKRUO.js";import{e as E,j as N,r as n,g as H,k as j,c as l,a as t,t as C,l as s,F as P,h as V,m as B,b as h,w as v,o as a,i as $}from"./Wq7QxZVT.js";const F={class:"min-h-screen"},G={class:"fixed w-full bg-gray-800 h-14 top-0 flex items-center text-white text-2xl"},I={class:"ml-4",style:{"font-family":"fantasy"}},S={class:"p-4 pt-20 pb-20"},T={key:0,class:"text-red-500"},z={key:1,class:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"},D={key:2,class:"text-center text-gray-500 mt-20"},R={key:3,class:"text-center text-white mt-4"},U={class:"fixed w-full bg-gray-800 h-14 bottom-0 flex justify-between px-8 pt-1"},Q=E({__name:"[id]",setup(Y){const f=N().params.id,m=n([]),p=n(""),i=n(""),c=n(!0),u=n(!1),w=n(1),g=n(!1),L=async()=>{try{const r=(await k.get("https://moviesapi.ir/api/v1/genres")).data.find(d=>d.id===parseInt(f));if(r)p.value=r.name;else throw new Error("ژانر یافت نشد")}catch(o){i.value="خطا در دریافت اطلاعات ژانر",console.error(o)}},_=async()=>{if(!(u.value||g.value)){c.value=!0;try{u.value=!0;const o=await k.get(`https://moviesapi.ir/api/v1/genres/${f}/movies?page=${w.value}`),{data:e}=o.data;e&&e.length>0?(m.value.push(...e),w.value++):g.value=!0}catch(o){i.value="خطا در دریافت اطلاعات فیلم‌ها",console.error(o)}finally{u.value=!1,c.value=!1,console.log(c)}}},x=()=>{const o=document.documentElement.scrollHeight,e=window.scrollY||document.documentElement.scrollTop,r=window.innerHeight;e+r>=o-50&&_()};return H(async()=>{await L(),await _(),window.addEventListener("scroll",x)}),j(()=>{window.removeEventListener("scroll",x)}),(o,e)=>{const r=M,d=b;return a(),l("div",F,[t("div",G,[t("span",I,"Movies in "+C(s(p)),1)]),t("div",S,[s(i)?(a(),l("div",T,C(s(i)),1)):s(m).length?(a(),l("div",z,[(a(!0),l(P,null,V(s(m),y=>(a(),$(r,{key:y.id,movie:y,color:"text-gray-200"},null,8,["movie"]))),128))])):!s(c)&&!s(i)&&s(m).length===0&&s(g)?(a(),l("div",D," اطلاعاتی یافت نشد ")):B("",!0),s(c)?(a(),l("div",R,"loading...")):B("",!0)]),t("div",U,[h(d,{to:"/search",class:"items-center"},{default:v(()=>e[0]||(e[0]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",viewBox:"0 0 32 32"},[t("path",{fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0"})],-1)])),_:1}),h(d,{to:"/",class:""},{default:v(()=>e[1]||(e[1]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",viewBox:"0 0 24 24"},[t("path",{fill:"#fff",d:"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"})],-1)])),_:1}),h(d,{to:"/favorite",class:""},{default:v(()=>e[2]||(e[2]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",viewBox:"0 0 24 24"},[t("path",{fill:"#fff",d:"m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"})],-1)])),_:1})])])}}});export{Q as default};
