import{_ as m}from"./GeoLearn-B0ofI_r8.js";import{_ as h,r as u,o as l,c as d,b as e,a as r,w as o,v as g,t as p}from"./index-yABFnbWc.js";const v={name:"Andrea García",userName:"andreaGarcia03",mail:"agarcia@gmail.com",password:"",newpassword:""},f=[{name:"Estudio 1",description:"Descripción de la tarea de estudio",startDate:"01/04/2024",timeSpent:"2 horas",averageScore:"80",progress:"20",type:"Estudio"},{name:"Estudio 2",description:"Descripción de la tarea de estudio",startDate:"05/04/2024",timeSpent:"3 horas",averageScore:"75",progress:"60",type:"Estudio"},{name:"Estudio 3",description:"Descripción de la tarea de estudio",startDate:"08/04/2024",timeSpent:"1 horas",averageScore:"100",progress:"100",type:"Estudio"},{name:"Test 1",description:"Descripción de la tarea de test",startDate:"10/04/2024",timeSpent:"1.5 horas",averageScore:"90",progress:"10",type:"Test"},{name:"Test 2",description:"Descripción de la tarea de test",startDate:"15/04/2024",timeSpent:"2 horas",averageScore:"85",progress:"10",type:"Test"},{name:"Test 3",description:"Descripción de la tarea de test",startDate:"20/04/2024",timeSpent:"1.5 horas",averageScore:"95",progress:"90",type:"Test"}],k="/assets/profile-DunlqE3k.png",S="/assets/question-mark-BEKAb6nJ.png",y={name:"HeaderApp",data(){return{mode:localStorage.getItem("mode")||"",user:v,tasks:f,progress:0}},computed:{progressStyle(){const s=2*Math.PI*20;return{strokeDasharray:`${this.progress/100*s} ${s}`}},totalProgress(){if(this.tasks.length===0)return 0;const s=this.tasks.reduce((t,i)=>t+parseInt(i.progress),0);return Math.round(s/this.tasks.length)}},methods:{setMode(s){this.mode=s,localStorage.setItem("mode",s),this.$emit("modeUpdated",s)}},created(){this.progress=this.totalProgress}},D={id:"navbar",class:"navbar navbar-light bg-light px-3 navbar-floating"},b={class:"right-side"},E={class:"d-flex align-items-center"},x=e("img",{src:m,alt:"GeoLearn Logo",style:{"max-height":"2.188em"},class:"me-1"},null,-1),w=e("a",{class:"navbar-brand fw-bold",href:"/"},"GeoLearn",-1),T={class:"nav nav-pills"},M={class:"nav-item"},P={class:"nav-item"},A={class:"nav nav-pills center"},B={class:"nav-item center"},$={class:"profile-container"},C={class:"circular-progress"},G={width:"50",height:"50",viewBox:"0 0 50 50"},I=e("circle",{class:"bg",cx:"25",cy:"25",r:"20"},null,-1),q=e("img",{src:k,alt:"Profile icon",class:"profile-icon"},null,-1),H={class:"profile-info"},L={class:"user-name"},N={class:"user-mail"},V={class:"nav-item"},z=e("img",{src:S,alt:"Question mark icon",class:"question-mark-icon"},null,-1);function J(s,t,i,K,c,n){const a=u("router-link");return l(),d("div",null,[e("header",null,[e("nav",D,[e("div",b,[e("div",E,[r(a,{to:"/",class:"nav-link"},{default:o(()=>[x,w]),_:1})]),e("div",T,[e("li",M,[r(a,{class:"nav-link",to:"selectMode"},{default:o(()=>[e("a",{class:"nav-link",href:"#",onClick:t[0]||(t[0]=_=>n.setMode("Estudio"))},"Estudio")]),_:1})]),e("li",P,[r(a,{class:"nav-link",to:"selectMode"},{default:o(()=>[e("a",{class:"nav-link",href:"#",onClick:t[1]||(t[1]=_=>n.setMode("Test"))},"Test")]),_:1})])])]),e("ul",A,[e("li",B,[r(a,{to:"/Perfil",class:"nav-link without-decoration"},{default:o(()=>[e("div",$,[e("div",C,[(l(),d("svg",G,[I,e("circle",{class:"fg",cx:"25",cy:"25",r:"20",style:g(n.progressStyle)},null,4)])),q]),e("div",H,[e("span",L,p(c.user.name),1),e("span",N,"Progreso: "+p(c.progress)+"% ",1)])])]),_:1})]),e("li",V,[r(a,{to:"contact",class:"nav-link"},{default:o(()=>[z]),_:1})])])])])])}const j=h(y,[["render",J]]);export{j as H,k as _,f as t,v as u};