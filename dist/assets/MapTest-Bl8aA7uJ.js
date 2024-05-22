import{g as n,_ as G,o as m,c as p,b as s,t as O,n as F,h as U,p as V,i as H,f as x,d as R,j as A,k as J,r as _,a as r,u as d,F as I,e as W,w as S,S as K,l as Y,m as q,T as Q}from"./index-CDl4_P6P.js";import{u as k}from"./modeState-3y__tmJk.js";import{H as X}from"./HeaderApp-BmnOMJnL.js";import{u as f}from"./testState-CJWTkUe1.js";import"./GeoLearn-B0ofI_r8.js";const $=[10,50],ee=4,te=[150,-30],oe=4,se=[50,35],ne=3,ce=[-60,-15],ie=2,le=[15,0],re=2.5,ae=n("EPSG:4326"),de=n("/countries.json"),ue=()=>{const e=k();let o=n(1),c=n([0,0]);switch(console.log(e.options.continent),e.options.continent){case"Europa":o=n(ee),c=n($);break;case"Asia":o=n(ne),c=n(se);break;case"America":o=n(ie),c=n(ce);break;case"Africa":o=n(re),c=n(le);break;case"Oceania":o=n(oe),c=n(te);break}return console.log(c,o),{center:c,projection:ae,zoom:o,url:de}},_e="/assets/cross-CpOKZD7N.png",me="/assets/tick-CYMZ4feC.png",pe={props:{isOpen:Boolean},methods:{handleClose(){window.location.href="#/selectMode"},getErrors(){return f().getErrors()},getPercentage(e){const o=100-e;return o<0?0:o},getColor(e){return e>=80?"green":e>=50?"yellow":"red"}}},N=e=>(V("data-v-7c9cb6a9"),e=e(),H(),e),fe={key:0,class:"modal"},ge={class:"modal-content"},ve={class:"modal-body"},he={key:0},Ce=x('<div class="row" data-v-7c9cb6a9><p class="bigger-text text-center" data-v-7c9cb6a9>NO SUPERADO</p></div><div class="row d-flex justify-content-center align-items-center" data-v-7c9cb6a9><div class="col-md-6" data-v-7c9cb6a9><img src="'+_e+'" alt="Cross Icon" class="img-fluid" data-v-7c9cb6a9></div></div>',2),Se=[Ce],be={key:1},Ee=x('<div class="row" data-v-7c9cb6a9><p class="bigger-text text-center" data-v-7c9cb6a9>SUPERADO</p></div><div class="row d-flex justify-content-center align-items-center" data-v-7c9cb6a9><div class="col-md-6" data-v-7c9cb6a9><img src="'+me+'" alt="Tick Icon" class="img-fluid" data-v-7c9cb6a9></div></div>',2),Oe=[Ee],ke={class:"row"},we={class:"col-md-6 d-flex flex-column align-items-center"},ye=N(()=>s("p",{class:"label"},"Errores",-1)),Ae={class:"col-md-6 d-flex flex-column align-items-center"},Ie=N(()=>s("p",{class:"label"},"Puntuación",-1)),Fe={class:"modal-footer"};function xe(e,o,c,u,g,i){return c.isOpen?(m(),p("div",fe,[s("div",ge,[s("div",ve,[i.getPercentage(i.getErrors())<50?(m(),p("div",he,Se)):(m(),p("div",be,Oe)),s("div",ke,[s("div",we,[ye,s("p",null,O(i.getErrors()),1)]),s("div",Ae,[Ie,s("span",{class:F(i.getColor(i.getPercentage(i.getErrors())))},O(i.getPercentage(i.getErrors()))+"%",3)])])]),s("div",Fe,[s("button",{type:"button",class:"btn btn-save",onClick:o[0]||(o[0]=(...b)=>i.handleClose&&i.handleClose(...b))},"Finalizar Test")])])])):U("",!0)}const Re=G(pe,[["render",xe],["__scopeId","data-v-7c9cb6a9"]]),Ne={id:"list",class:"container-fluid full-height"},Me={class:"row full-height"},Te={class:"col-md-3",id:"list"},Pe={class:"clickable-list full-height",style:{"overflow-y":"auto"},multiple:""},je=["onClick"],ze={class:"col full-height",id:"map"},Ze=()=>{const e=f(),o=k(),c=[];for(let u=0;u<e.options.allCountries.length;u++){const g=e.options.allCountries[u];g.continent==o.options.continent&&c.push(g.country)}return c},Be=R({data(){return{filteredCountries:[]}},name:"MapTest",methods:{isInSelectedList(e){return f().getGuessedCountries.has(e)}},mounted(){const e=f();e.reset(),e.getAllCountries().then(()=>this.filteredCountries=Ze())}}),We=R({...Be,setup(e){const{center:o,projection:c,zoom:u,url:g}=ue(),i=A("ol-format"),b=new i.GeoJSON,l=f(),E=k(),M=A("ol-selectconditions").click;let w=!1;n(J({}));function y(t){const v=t.values_.continent==E.options.continent,a=l.getGuessedCountries.has(t.values_.name);return new K({fill:new Y({color:a?t.get("COLOR_BIO"):v?"#79828d":"#c7c8cb"}),stroke:new q({color:"#FFFFFF"}),text:new Q({text:a?t.get("name"):""})})}const T=()=>{const t=f(),v=[];for(let a=0;a<t.options.allCountries.length;a++){const h=t.options.allCountries[a];h.continent==E.options.continent&&v.push(h.country)}return v},P=t=>{l.options.guessedCountries=l.options.guessedCountries.add(t.selected[0].values_.name),l.options.guessedCountries.size===T().length&&(w=!0,l.reset())},j=t=>t.values_.name==null||l.options.guessedCountries.has(t.values_.name)?!1:t.values_.name!=l.options.countrySelection?(l.incrementErrors(),t.values_.continent==E.options.continent&&alert("Selección incorrecta!"),!1):!0,z=t=>{l.setCountrySelection(t)};return(t,v)=>{const a=_("ol-view"),h=_("ol-style"),Z=_("ol-source-vector"),B=_("ol-vector-layer"),L=_("ol-interaction-select"),D=_("ol-map");return m(),p(I,null,[r(X),r(Re,{"is-open":d(w)},null,8,["is-open"]),s("div",Ne,[s("div",Me,[s("div",Te,[s("select",Pe,[(m(!0),p(I,null,W(t.filteredCountries,C=>(m(),p("option",{key:C,onClick:De=>z(C),class:F({"special-style":t.isInSelectedList(C),"clickable-list":!t.isInSelectedList(C)})},O(C),11,je))),128))])]),s("div",ze,[r(D,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,class:"full-height"},{default:S(()=>[r(a,{ref:"view",center:d(o),zoom:d(u),projection:d(c)},null,8,["center","zoom","projection"]),r(B,{background:"white",ref:"vectorSourceRef"},{default:S(()=>[r(Z,{url:d(g),format:d(b)},{default:S(()=>[r(h,{overrideStyleFunction:y})]),_:1},8,["url","format"])]),_:1},512),r(L,{onSelect:P,condition:d(M),filter:j},{default:S(()=>[r(h,{overrideStyleFunction:y})]),_:1},8,["condition"])]),_:1})])])])],64)}}});export{We as default};