import{_ as i}from"./Bu8UK_ev.js";import{o as a,i as c,w as n,a as e,J as m,t as o}from"./DL-Y438X.js";const l=["src"],d={class:"text-sm text-gray-500"},u={class:"text-sm text-gray-500"},g={__name:"movie",props:{movie:{type:Object,required:!0},color:{type:String,required:!0}},setup(t){const s=t;return(_,v)=>{const r=i;return a(),c(r,{to:`/movies/${t.movie.id}`,class:"shadow-md rounded-lg py-4 text-center hover:bg-blue-100 transition cursor-pointer"},{default:n(()=>[e("img",{src:t.movie.poster,alt:"Movie Poster",class:"h-40 w-full object-cover rounded-md mb-2"},null,8,l),e("p",{class:m(["text-lg font-semibold",s.color])},o(t.movie.title),3),e("p",d,"IMDB: "+o(t.movie.imdb_rating),1),e("p",u,"Year: "+o(t.movie.year),1)]),_:1},8,["to"])}}};export{g as _};