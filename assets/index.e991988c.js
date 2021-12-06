import{d as B,o as c,c as g,a as s,p as O,b as A,e as k,r as C,f as N,g as G,h as E,i as W,j as h,k as _,w as v,l as y,m as S,T as z,n as M,q as V,s as J,t as R,u as m,F as T,v as I,x as p,y as H,z as P,A as U,B as b,C as w,D as j,E as q,G as D,H as F}from"./vendor.e3ee6b5b.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};X();var K="/assets/icon.838fc2a6.png";var f=(o,e)=>{for(const[t,a]of e)o[t]=a;return o};const Q=B({name:"AppBar",methods:{closeWindow(){window.current.close("gpvp-app")},minimizeWindow(){window.current.minimize("gpvp-app")},maximizeWindow(){window.current.maximize("gpvp-app")}}}),x=o=>(O("data-v-6fd575ed"),o=o(),A(),o),Z={id:"appbar",class:"w-full bg-true-gray-900 flex select-none"},Y=x(()=>s("div",{class:"flex h-8 items-center text-light-100"},[s("img",{src:K,class:"w-4 ml-2",alt:"App Logo"}),s("div",{class:"font-normal text-sm ml-2"},[k("Simple"),s("span",{class:"font-semibold"},"MMO")])],-1)),ee={class:"ml-auto flex items-center"},te=x(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"bi bi-dash-lg w-5 h-5 fill-current",viewBox:"0 0 16 16"},[s("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1)),se=[te],oe=x(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"bi bi-square w-3 h-3 fill-current",viewBox:"0 0 16 16"},[s("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"})],-1)),ne=[oe],ie=x(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"bi bi-x w-6 h-6 fill-current",viewBox:"0 0 16 16"},[s("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)),re=[ie];function ae(o,e,t,a,n,i){return c(),g("div",Z,[Y,s("div",ee,[s("button",{onClick:e[0]||(e[0]=(...l)=>o.minimizeWindow&&o.minimizeWindow(...l))},se),s("button",{onClick:e[1]||(e[1]=(...l)=>o.maximizeWindow&&o.maximizeWindow(...l))},ne),s("button",{onClick:e[2]||(e[2]=(...l)=>o.closeWindow&&o.closeWindow(...l)),id:"closeBtn"},re)])])}var le=f(Q,[["render",ae],["__scopeId","data-v-6fd575ed"]]);const ce={name:"Sidenav",components:{PaperAirplaneIcon:C,BriefcaseIcon:N,GlobeIcon:G,AdjustmentsIcon:E,UserRemoveIcon:W},props:{apps:Array},methods:{},created(){}},de={class:"h-full border-r dark:border-dark-700 p-4 flex flex-col gap-4"};function ue(o,e,t,a,n,i){const l=h("PaperAirplaneIcon"),r=h("router-link"),d=h("BriefcaseIcon"),u=h("GlobeIcon"),$=h("UserRemoveIcon"),L=h("AdjustmentsIcon");return c(),g("nav",de,[_(r,{to:{name:"targets"}},{default:v(()=>[_(l)]),_:1}),_(r,{to:{name:"home"}},{default:v(()=>[_(d)]),_:1}),_(r,{to:{name:"guilds"}},{default:v(()=>[_(u)]),_:1}),_(r,{to:{name:"blocked"}},{default:v(()=>[_($)]),_:1}),_(r,{class:"mt-auto",to:{name:"settings"}},{default:v(()=>[_(L)]),_:1})])}var ge=f(ce,[["render",ue]]);const _e={components:{AppBar:le,Navigation:ge},data(){return{player:JSON.parse(window.background.getPlayer()),tokens:{main:{string:window.background.getPublicToken(),status:!0,rateLimited:!1},second:{string:"",status:!0,rateLimited:!1},third:{string:"",status:!0,rateLimited:!1}},settings:{level:{minimum:1,maximum:0}},guilds:{automatic:[],manual:[]},targets:[],target:0,blacklist:[],inQueue:!1,rateLimited:!1,usedToken:null,updateRequired:!1}},methods:{removeBlackList(o){console.log(o);const e=this.blacklist.indexOf(o);e>-1&&(console.log("FOUND"),this.blacklist.splice(e,1),this.saveSettings())},blackList(o,e){if(e>-1)return this.targets.splice(e,1),this.blacklist.includes(o)||(this.blacklist.push(o),console.log("Adding to blacklist")),this.saveSettings()},fixTargets(o){var e=[...o].filter(t=>!this.blacklist.includes(t.user_id));return console.log(e),e},loadSettings(){localStorage.level!=null&&(this.settings.level=JSON.parse(localStorage.level)),localStorage.blacklist!=null&&(this.blacklist=JSON.parse(localStorage.blacklist)),localStorage.guilds!=null&&(this.guilds=JSON.parse(localStorage.guilds)),localStorage.targets!=null&&(this.targets=this.fixTargets(JSON.parse(localStorage.targets))),localStorage.target!=null&&(this.target=localStorage.target),localStorage.tokens!=null&&(this.tokens=JSON.parse(localStorage.tokens))},saveSettings(){console.log("SAVED"),localStorage.level=JSON.stringify(this.settings.level),localStorage.blacklist=JSON.stringify(this.blacklist),localStorage.guilds=JSON.stringify(this.guilds),localStorage.targets=JSON.stringify(this.targets),localStorage.target=this.target,localStorage.tokens=JSON.stringify(this.tokens)},async fetchTargets(o=!1){var e=this;if(e.targets=[],e.target=0,localStorage.target=this.target,e.rateLimited=!1,e.tokens.main.rateLimited=!1,e.tokens.second.rateLimited=!1,e.tokens.third.rateLimited=!1,o){var t=0;for(e.tokens.main.string!=""&&e.tokens.main.status&&(e.usedToken="main"),e.tokens.second.string!=""&&e.tokens.second.status&&(e.usedToken="second"),e.tokens.third.string!=""&&e.tokens.third.status&&(e.usedToken="third");t<5&&!e.rateLimited;){const a=e.guilds.automatic[t];await e.fetchByToken(e.tokens[e.usedToken].string,a.id).then(n=>{t++}).catch(n=>{console.log("98:"+n)})}this.$router.push({name:"targets"})}},filterTargets(o){console.warn(o);var e=this,t=e.settings.level.maximum,a=e.settings.level.minimum;t==0&&(t=parseInt(e.player.level)),console.log(a,t);var n=[...o].filter(i=>i.level>=a&&i.level<=t&&i.current_hp/i.max_hp*100>=50&&!e.blacklist.includes(i.user_id)&&i.safe_mode!=1);console.log(n),this.targets=this.targets.concat([...n]),e.saveSettings()},async fetchByToken(o,e){var t=this,a=[];return await fetch(`https://api.simple-mmo.com/v1/guilds/members/${e}?api_key=${o}`,{method:"POST"}).then(n=>n.json()).then(n=>{if(n.error=="unauthenticated"){if(t.tokens[t.usedToken].status=!1,t.usedToken=="third")return t.usedToken="second";if(t.usedToken=="second")return t.usedToken="main";throw Error(t.usedToken+" key is not valid")}t.filterTargets(n),a=n}).catch(n=>{if(console.log("117: "+n),t.tokens[t.usedToken].rateLimited=!0,t.usedToken=="third")return t.usedToken="second";if(t.usedToken=="second")return t.usedToken="main";if(t.usedToken=="main")return t.rateLimited=!0}),a}},beforeMount(){this.player.guild==null&&(this.updateRequired=!0,this.$router.push({name:"update"})),this.loadSettings(),console.log(this.player),console.log(this.tokens),console.log(this.blacklist),console.log(this.guilds),console.log(this.targets)}},he={class:"flex flex-col h-screen overflow-hidden w-sreen"},me={class:"h-[calc(100vh-2rem)] flex flex-shrink-0"};function fe(o,e,t,a,n,i){const l=h("AppBar"),r=h("Navigation"),d=h("router-view");return c(),g("div",he,[_(l),s("div",me,[n.updateRequired?S("",!0):(c(),y(r,{key:0})),_(d,{onRemoveBlackList:e[0]||(e[0]=u=>i.removeBlackList(u)),blacklist:n.blacklist,onBlackList:e[1]||(e[1]=u=>i.blackList(u[0],u[1])),targets:n.targets,target:n.target,onFetchTargets:e[2]||(e[2]=u=>i.fetchTargets(u)),onSaveSettings:i.saveSettings,tokens:n.tokens,guilds:n.guilds,settings:n.settings,player:n.player,class:"w-full h-full p-4 overflow-y-auto"},{default:v(({Component:u})=>[_(z,{name:"fade",mode:"out-in"},{default:v(()=>[(c(),y(M(u),{key:"a"+o.$route.params.id}))]),_:2},1024)]),_:1},8,["blacklist","targets","target","onSaveSettings","tokens","guilds","settings","player"])])])}var ve=f(_e,[["render",fe]]);const pe={components:{RefreshIcon:V,Popper:J,BadgeCheckIcon:R},data(){return{clicked:!1}},methods:{async fetchByToken(o){var e=this,t=[];return await fetch(`https://api.simple-mmo.com/v1/guilds/wars/${e.player.guild.id}/1?api_key=${o}`,{method:"POST"}).then(a=>a.json()).then(a=>{t=a}).catch(a=>console.log(a)),t},fetchGuild(){this.guilds.automatic=[];var o=this,e=this.tokens.main.string;this.tokens.third.string!=""&&this.tokens.third.status?(e=this.tokens.third.string,this.fetchByToken(e).then(t=>{if(console.log(t),t.error=="unauthenticated")throw o.tokens.third.status=!1,o.$emit("saveSettings"),Error("Third key is not valid");o.filterGuilds(t)}).catch(t=>{console.log(t),setTimeout(()=>{o.fetchGuild()},150)})):this.tokens.second.string!=""&&this.tokens.second.status?(e=this.tokens.second.string,this.fetchByToken(e).then(t=>{if(console.log(t),t.error=="unauthenticated")throw o.tokens.second.status=!1,o.$emit("saveSettings"),Error("Second key is not valid");o.filterGuilds(t)}).catch(t=>{console.log(t),setTimeout(()=>{o.fetchGuild()},150)})):this.fetchByToken(e).then(t=>{if(console.log(t),t.error)throw Error(t);o.filterGuilds(t)}).catch(t=>console.log(t))},filterGuilds(o){var e=this;for(let t=0;t<o.length;t++){const a=o[t];for(const n in a)n!="status"&&a[n].id!=e.player.guild.id&&(a[n].tag="",a[n].cleared=!1,this.guilds.automatic.push(a[n]))}e.$emit("saveSettings")}},props:{player:{type:Object},tokens:Object,guilds:Object},mounted(){this.guilds.automatic.length==0&&this.fetchGuild()}},ke={id:"guildWars",class:""},ye={class:"flex items-center"},be=s("div",{class:"title"},"Guild Wars",-1),we=s("div",{class:"ml-2 text-xs text-yellow-200"},"(Always saved from the latest refresh)",-1),xe={class:"ml-auto flex gap-2 items-center"},$e=["disabled"],Se={class:"bg-green-200 text-green-800 border border-green-500 px-1 rounded"},Te={class:"fixed_content flex flex-col"},Ie={class:"border border-true-gray-600 overflow-y-auto overflow-x-hidden"},Le=s("div",{class:"ml-auto flex items-center"},null,-1);function Be(o,e,t,a,n,i){const l=h("RefreshIcon");return c(),g("div",ke,[s("div",ye,[be,we,s("div",xe,[s("button",{disabled:n.clicked,onClick:e[0]||(e[0]=r=>{n.clicked=!0,o.$emit("fetchTargets",!0)}),class:"classicBtn"}," Generate targets ",8,$e),s("button",{class:"svgBtn",onClick:e[1]||(e[1]=(...r)=>i.fetchGuild&&i.fetchGuild(...r))},[_(l)]),s("div",Se,m(t.guilds.automatic.length),1)])]),s("div",Te,[s("div",Ie,[(c(!0),g(T,null,I(t.guilds.automatic,(r,d)=>(c(),g("div",{class:p([{"bg-true-gray-900":d%2==0,"bg-true-gray-800":d%2==1},"w-full text-true-gray-400 flex border-b border-true-gray-500 p-1 gap-2 items-center"]),key:r.id},[s("div",null,m(r.id),1),s("div",null,m(r.name),1),Le],2))),128))])])])}var Oe=f(pe,[["render",Be]]);const Ae={components:{EyeIcon:H,XIcon:P},data(){},props:{blacklist:Array},methods:{removeBlackList(o,e){console.log(this.blacklist),this.$emit("removeBlackList",o),console.log(document.querySelector(`#target-${e}`))},openInClient(o){var e=`https://simple-mmo.com/user/view/${o}?new_page=true`;window.background.openLink(e),console.log(e)}}},Ce={id:"targets",class:""},Ne={class:"flex items-center"},Ge=s("div",{class:"title"},"Blacklist",-1),Ee=s("div",{class:"ml-2 text-xs text-yellow-200"},null,-1),We={class:"flex items-center gap-2 ml-auto"},ze={class:"px-1 text-green-800 bg-green-200 border border-green-500 rounded"},Me={class:"flex flex-col fixed_content"},Ve={class:"overflow-x-hidden overflow-y-auto border border-true-gray-600"},Je=["id"],Re={class:"text-xs"},He={class:"ml-auto"},Pe=["onClick"],Ue=["onClick"];function je(o,e,t,a,n,i){const l=h("EyeIcon"),r=h("XIcon");return c(),g("div",Ce,[s("div",Ne,[Ge,Ee,s("div",We,[s("div",ze,m(t.blacklist.length),1)])]),s("div",Me,[s("div",Ve,[(c(!0),g(T,null,I(t.blacklist,(d,u)=>(c(),g("div",{id:"target-"+u,class:p([{"bg-true-gray-900 text-true-gray-400":u%2==0,"bg-true-gray-800 text-true-gray-400":u%2==1,"bg-red-300 text-true-gray-800":this.newTarget>u,"bg-yellow-200 text-true-gray-900":this.newTarget==u},"grid items-center w-full grid-cols-2 gap-2 p-1 text-sm border-b border-true-gray-500"]),key:d.user_id},[s("div",Re,m(d),1),s("div",He,[s("button",{onClick:$=>i.openInClient(d),class:"mr-1 text-current transition-opacity duration-200 hover:opacity-70"},[_(l)],8,Pe),s("button",{onClick:$=>i.removeBlackList(d,u),class:"text-current transition-opacity duration-200 hover:opacity-70"},[_(r)],8,Ue)])],10,Je))),128))])])])}var qe=f(Ae,[["render",je]]);const De={components:{ShieldExclamationIcon:U},props:{settings:Object,tokens:Object},methods:{},created(){}},Fe={class:""},Xe=s("div",{class:"title"},"Settings",-1),Ke={class:"fixed_content"},Qe={class:"border-b border-true-gray-800 pb-2"},Ze=s("div",{class:"sub_title"},"Filter",-1),Ye={class:"grid grid-cols-2 gap-2 w-full"},et={class:"grid grid-cols-2 gap-2 items-center"},tt=s("span",{class:"desc"},"Minimum level",-1),st={class:"grid grid-cols-2 gap-2 items-center place-content-end"},ot=s("span",{class:"desc"},"Maximum level",-1),nt={class:"border-b border-true-gray-800 pb-1 mt-2"},it=s("div",{class:"sub_title"},[k("Api keys "),s("span",{class:"text-xs text-true-gray-500"},"(first is set by logged account)")],-1),rt={class:"grid grid-rows-3 gap-1 w-full"},at={class:"flex gap-2 items-center"},lt={class:"desc"},ct=k("Second key "),dt={class:"flex gap-2 items-center place-content-end"},ut={class:"desc"},gt=k("Third key "),_t=s("div",{class:"text-xs text-green-300 flex items-center justify-center"},[s("span",{class:""},"Additional keys are prioritised to avoid rate limit")],-1);function ht(o,e,t,a,n,i){const l=h("ShieldExclamationIcon");return c(),g("div",Fe,[Xe,s("div",Ke,[s("div",Qe,[Ze,s("div",Ye,[s("div",et,[tt,b(s("input",{onBlur:e[0]||(e[0]=r=>o.$emit("saveSettings")),type:"number",min:"1",name:"",id:"","onUpdate:modelValue":e[1]||(e[1]=r=>t.settings.level.minimum=r)},null,544),[[w,t.settings.level.minimum]])]),s("div",st,[ot,b(s("input",{onBlur:e[2]||(e[2]=r=>o.$emit("saveSettings")),type:"number",placeholder:"0 to your level",min:"0",name:"",id:"","onUpdate:modelValue":e[3]||(e[3]=r=>t.settings.level.maximum=r)},null,544),[[w,t.settings.level.maximum]])])])]),s("div",nt,[it,s("div",rt,[s("div",at,[s("span",lt,[ct,t.tokens.second.status?S("",!0):(c(),y(l,{key:0}))]),b(s("input",{class:p({error:!t.tokens.second.status}),onBlur:e[4]||(e[4]=r=>{t.tokens.second.status=!0,o.$emit("saveSettings")}),"onUpdate:modelValue":e[5]||(e[5]=r=>t.tokens.second.string=r),type:"text",name:"",id:"",value:""},null,34),[[w,t.tokens.second.string]])]),s("div",dt,[s("span",ut,[gt,t.tokens.third.status?S("",!0):(c(),y(l,{key:0}))]),b(s("input",{class:p({error:!t.tokens.third.status}),onBlur:e[6]||(e[6]=r=>{t.tokens.third.status=!0,o.$emit("saveSettings")}),"onUpdate:modelValue":e[7]||(e[7]=r=>t.tokens.third.string=r),type:"text",name:"",id:"",value:""},null,34),[[w,t.tokens.third.string]])]),_t])])])])}var mt=f(De,[["render",ht]]);const ft={components:{EyeOffIcon:j},data(){return{newTarget:parseInt(localStorage.target)}},props:{targets:Array},methods:{blackList(o,e){this.$emit("blackList",[o,e]),e<this.newTarget&&this.newTarget--,localStorage.target=this.newTarget},getHealth(o,e){var t=Math.floor(o/e*100);return t>100&&(t=100),t},openInClient(o){var e=`https://simple-mmo.com/user/attack/${o}?new_page=true`;window.background.openLink(e),console.log(e)},attackTarget(){this.openInClient(this.targets[this.newTarget].user_id),this.newTarget==this.targets.length&&document.querySelector(`#target-${this.newTarget+1}`).scrollIntoView(!0),this.newTarget<this.targets.length&&this.newTarget++,localStorage.target=this.newTarget}}},vt={id:"targets",class:""},pt={class:"flex items-center"},kt=s("div",{class:"title"},"Targets",-1),yt=s("div",{class:"ml-2 text-xs text-yellow-200"},"(Always saved from the last generating)",-1),bt={class:"flex items-center gap-2 ml-auto"},wt={key:0,class:"px-1 text-green-800 bg-green-200 border border-green-500 rounded"},xt={key:1,class:"px-1 text-green-800 bg-green-200 border border-green-500 rounded"},$t=["disabled"],St={class:"flex flex-col fixed_content"},Tt={class:"overflow-x-hidden overflow-y-auto border border-true-gray-600"},It=["id"],Lt={class:"text-xs"},Bt={class:"w-24 col-span-2 overflow-hidden whitespace-nowrap overflow-ellipsis"},Ot={class:"text-xs"},At={class:"text-xs"},Ct={class:"ml-auto"},Nt=["onClick"];function Gt(o,e,t,a,n,i){const l=h("EyeOffIcon");return c(),g("div",vt,[s("div",pt,[kt,yt,s("div",bt,[n.newTarget<=t.targets.length-1?(c(),g("div",wt,m(n.newTarget+1)+"/"+m(t.targets.length),1)):(c(),g("div",xt,"Cleared")),s("button",{disabled:n.newTarget>=t.targets.length,onClick:e[0]||(e[0]=(...r)=>i.attackTarget&&i.attackTarget(...r)),class:"classicBtn"}," Attack ",8,$t)])]),s("div",St,[s("div",Tt,[(c(!0),g(T,null,I(t.targets,(r,d)=>(c(),g("div",{id:"target-"+d,class:p([{"bg-true-gray-900 text-true-gray-400":d%2==0,"bg-true-gray-800 text-true-gray-400":d%2==1,"bg-red-300 text-true-gray-800":this.newTarget>d,"bg-yellow-200 text-true-gray-900":this.newTarget==d},"grid items-center w-full grid-cols-6 gap-2 p-1 text-sm border-b border-true-gray-500"]),key:r.user_id},[s("div",Lt,m(r.user_id),1),s("div",Bt,m(r.name),1),s("div",Ot,"Level "+m(r.level),1),s("div",At,"Health "+m(i.getHealth(r.current_hp,r.max_hp))+"%",1),s("div",Ct,[s("button",{onClick:u=>i.blackList(r.user_id,d),class:"text-current transition-opacity duration-200 hover:opacity-70"},[_(l)],8,Nt)])],10,It))),128))])])])}var Et=f(ft,[["render",Gt]]);const Wt={methods:{}},zt={class:""},Mt=s("div",{class:"title"},"Guilds",-1),Vt=s("div",{class:"fixed_content text-white"}," TODO ",-1),Jt=[Mt,Vt];function Rt(o,e,t,a,n,i){return c(),g("div",zt,Jt)}var Ht=f(Wt,[["render",Rt]]);const Pt={},Ut={class:"w-full h-full text-true-gray-300 font-medium text-lg flex items-center justify-center"},jt=s("div",{class:"mb-16"},"Update of App Hub is required",-1),qt=[jt];function Dt(o,e,t,a,n,i){return c(),g("div",Ut,qt)}var Ft=f(Pt,[["render",Dt]]),Xt=q({history:D(),routes:[{path:"/",name:"home",component:Oe},{path:"/blocked",name:"blocked",component:qe},{path:"/settings",name:"settings",component:mt},{path:"/targets",name:"targets",component:Et},{path:"/guilds",name:"guilds",component:Ht},{path:"/update",name:"update",component:Ft}]});const Kt=F(ve);Kt.use(Xt).mount("#app");
