import Q from"./BmQbtJAU.js";import{q as V,s as ee,v as te,_ as G,e as D,o as p,i as T,x as se,y as ae,r as k,g as L,z as oe,c as g,A as re,n as R,a as e,t as d,m as A,d as w,F as Y,h as H,b as U,w as B}from"./DL-Y438X.js";import{a as le}from"./upsvKRUO.js";import{P as ie}from"./CKcvWXm_.js";function ne(v){const{effect:o,swiper:s,on:l,setTranslate:t,setTransition:f,overwriteParams:n,perspective:u,recreateShadows:c,getEffectParams:_}=v;l("beforeInit",()=>{if(s.params.effect!==o)return;s.classNames.push(`${s.params.containerModifierClass}${o}`),u&&u()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const r=n?n():{};Object.assign(s.params,r),Object.assign(s.originalParams,r)}),l("setTranslate",()=>{s.params.effect===o&&t()}),l("setTransition",(r,a)=>{s.params.effect===o&&f(a)}),l("transitionEnd",()=>{if(s.params.effect===o&&c){if(!_||!_().slideShadows)return;s.slides.forEach(r=>{r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(a=>a.remove())}),c()}});let i;l("virtualUpdate",()=>{s.params.effect===o&&(s.slides.length||(i=!0),requestAnimationFrame(()=>{i&&s.slides&&s.slides.length&&(t(),i=!1)}))})}function ce(v,o){const s=V(o);return s!==o&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function X(v,o,s){const l=`swiper-slide-shadow${s?`-${s}`:""}${` swiper-slide-shadow-${v}`}`,t=V(o);let f=t.querySelector(`.${l.split(" ").join(".")}`);return f||(f=ee("div",l.split(" ")),t.append(f)),f}function de(v){let{swiper:o,extendParams:s,on:l}=v;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ne({effect:"coverflow",swiper:o,on:l,setTranslate:()=>{const{width:n,height:u,slides:c,slidesSizesGrid:_}=o,i=o.params.coverflowEffect,r=o.isHorizontal(),a=o.translate,b=r?-a+n/2:-a+u/2,$=r?i.rotate:-i.rotate,P=i.depth,E=te(o);for(let y=0,x=c.length;y<x;y+=1){const h=c[y],q=_[y],W=h.swiperSlideOffset,J=(b-W-q/2)/q,m=typeof i.modifier=="function"?i.modifier(J):J*i.modifier;let O=r?$*m:0,C=r?0:$*m,F=-P*Math.abs(m),S=i.stretch;typeof S=="string"&&S.indexOf("%")!==-1&&(S=parseFloat(i.stretch)/100*q);let N=r?0:S*m,z=r?S*m:0,j=1-(1-i.scale)*Math.abs(m);Math.abs(z)<.001&&(z=0),Math.abs(N)<.001&&(N=0),Math.abs(F)<.001&&(F=0),Math.abs(O)<.001&&(O=0),Math.abs(C)<.001&&(C=0),Math.abs(j)<.001&&(j=0);const Z=`translate3d(${z}px,${N}px,${F}px)  rotateX(${E(C)}deg) rotateY(${E(O)}deg) scale(${j})`,K=ce(i,h);if(K.style.transform=Z,h.style.zIndex=-Math.abs(Math.round(m))+1,i.slideShadows){let M=r?h.querySelector(".swiper-slide-shadow-left"):h.querySelector(".swiper-slide-shadow-top"),I=r?h.querySelector(".swiper-slide-shadow-right"):h.querySelector(".swiper-slide-shadow-bottom");M||(M=X("coverflow",h,r?"left":"top")),I||(I=X("coverflow",h,r?"right":"bottom")),M&&(M.style.opacity=m>0?m:0),I&&(I.style.opacity=-m>0?-m:0)}}},setTransition:n=>{o.slides.map(c=>V(c)).forEach(c=>{c.style.transitionDuration=`${n}ms`,c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(_=>{_.style.transitionDuration=`${n}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const fe=D({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function ue(v,o,s,l,t,f){const n=Q;return p(),T(n,se(ae(v.$props)),null,16)}const pe=G(fe,[["render",ue]]),me=Symbol.for("nuxt:client-only"),ve=D({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(v,{slots:o,attrs:s}){const l=k(!1);return L(()=>{l.value=!0}),oe(me,!0),t=>{var c;if(l.value)return(c=o.default)==null?void 0:c.call(o);const f=o.fallback||o.placeholder;if(f)return f();const n=t.fallback||t.placeholder||"",u=t.fallbackTag||t.placeholderTag||"span";return g(u,s,n)}}}),he={class:"p-4 bg-gray-500"},we={key:0,class:"text-center text-gray-500 mt-48"},ge={key:1,class:"max-w-4xl mx-auto"},_e={class:"flex flex-col sm:flex-row rounded-lg shadow-lg overflow-hidden"},ye={class:"text-3xl font-semibold text-white text-center py-2",style:{"font-family":"monospace"}},be=["src"],xe={class:"items-center w-full z-50"},Se=["src"],ke={class:"flex rtl mt-4 justify-between"},$e={class:"text-yellow-500 ml-8 text-end"},Ee={class:"text-sm"},Me={class:"p-6 text-white z-50"},Ie={class:"mt-4"},Te={class:"mt-4"},Pe={class:"mt-6"},qe={class:"mt-6"},Oe={id:"swiper-custom"},Ce=["src"],Fe={key:2,class:"text-center text-gray-500"},Ne={key:3,class:"text-center text-red-500 mt-4"},ze=D({__name:"[id]",setup(v){const o=[de,ie],l=re().params.id,t=k(null),f=k(!0),n=k(null),u=k(!1),c=async()=>{try{const r=await le.get(`http://moviesapi.ir/api/v1/movies/${l}`);t.value=r.data}catch(r){n.value="خطا در دریافت اطلاعات فیلم",console.error(r)}finally{f.value=!1}},_=()=>{const r=JSON.parse(localStorage.getItem("favorites")||"[]");u.value=r.includes(l)},i=()=>{const r=JSON.parse(localStorage.getItem("favorites")||"[]");if(u.value){const a=r.filter(b=>b!==l);localStorage.setItem("favorites",JSON.stringify(a)),localStorage.removeItem(l)}else r.push(l),localStorage.setItem("favorites",JSON.stringify(r)),localStorage.setItem(l,JSON.stringify(t.value));u.value=!u.value};return L(async()=>{await c(),_()}),(r,a)=>{const b=pe,$=R("swiper-slide"),P=R("swiper"),E=ve;return p(),g("div",he,[f.value?(p(),g("div",we,"Loading...")):t.value?(p(),g("div",ge,[e("div",_e,[e("div",null,[e("h1",ye,d(t.value.title),1)]),e("img",{src:t.value.poster,alt:"Poster",class:"fixed top-9 left-0 h-full opacity-5 justify-self-center w-full shadow-lg object-cover"},null,8,be),e("div",xe,[e("img",{src:t.value.poster,alt:"Poster",class:"w-3/4 justify-self-center rounded-2xl h-1/2 shadow-lg object-cover"},null,8,Se)]),e("div",ke,[e("div",{class:"rtl mr-8",onClick:i},[u.value?A("",!0):(p(),T(b,{key:0,name:"material-symbols:favorite-outline",class:"w-10 h-10",alt:"Favorite Icon"})),u.value?(p(),T(b,{key:1,name:"material-symbols:favorite",class:"w-10 h-10",alt:"Favorite Icon"})):A("",!0)]),e("div",$e,[e("p",null,[a[0]||(a[0]=e("strong",null,"IMDB:",-1)),w(" "+d(t.value.imdb_rating)+" ("+d(t.value.imdb_votes)+" votes)",1)]),e("p",Ee,"Year: "+d(t.value.year)+" | Rated: "+d(t.value.rated),1)])]),e("div",Me,[e("p",null,[a[1]||(a[1]=e("strong",null,"Genres:",-1)),a[2]||(a[2]=w()),(p(!0),g(Y,null,H(t.value.genres,(y,x)=>(p(),g("span",{key:x},d(y)+d(x<t.value.genres.length-1?", ":""),1))),128))]),e("div",Ie,[a[3]||(a[3]=e("span",{class:"font-bold"},[w(" discription:"),e("br")],-1)),e("span",null,d(t.value.plot),1)]),e("div",Te,[e("p",null,[a[4]||(a[4]=e("strong",null,"Director:",-1)),w(" "+d(t.value.director),1)]),e("p",null,[a[5]||(a[5]=e("strong",null,"Writer:",-1)),w(" "+d(t.value.writer),1)]),e("p",null,[a[6]||(a[6]=e("strong",null,"Actors:",-1)),w(" "+d(t.value.actors),1)]),e("p",null,[a[7]||(a[7]=e("strong",null,"Country:",-1)),w(" "+d(t.value.country),1)]),e("p",null,[a[8]||(a[8]=e("strong",null,"Awards:",-1)),w(" "+d(t.value.awards),1)]),e("p",null,[a[9]||(a[9]=e("strong",null,"Metascore:",-1)),w(" "+d(t.value.metascore),1)])])])]),e("div",Pe,[e("div",qe,[e("div",Oe,[U(E,null,{default:B(()=>[U(P,{slidesPerView:2,spaceBetween:20,loop:!0,pagination:{clickable:!0},navigation:!0,modules:o,class:"mySwiper rounded-xl"},{default:B(()=>[(p(!0),g(Y,null,H(t.value.images,(y,x)=>(p(),T($,{key:x,class:""},{default:B(()=>[e("img",{src:y,alt:"Movie Image",class:"w-full rounded-xl shadow-md"},null,8,Ce)]),_:2},1024))),128))]),_:1})]),_:1})])])])])):(p(),g("div",Fe,"فیلمی یافت نشد")),n.value?(p(),g("div",Ne,d(n.value),1)):A("",!0)])}}}),De=G(ze,[["__scopeId","data-v-b2eeda5f"]]);export{De as default};