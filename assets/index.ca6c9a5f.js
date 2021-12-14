import{d as L,o as u,c as g,a as n,p as A,b as C,e as b,r as O,f as N,g as E,h as G,i as F,j as f,k as h,w as p,s as R,l as w,m as y,T as J,n as M,q as W,t as z,u as U,v as m,F as S,x as B,y as v,z as H,A as V,B as j,C as x,D as $,E as D,G as q,H as P,I as X,J as K}from"./vendor.9c5af351.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}};Q();var Z="/assets/icon.838fc2a6.png";var _=(s,t)=>{for(const[e,i]of t)s[e]=i;return s};const Y=L({name:"AppBar",methods:{closeWindow(){window.current.close("gpvp-app")},minimizeWindow(){window.current.minimize("gpvp-app")},maximizeWindow(){window.current.maximize("gpvp-app")}}}),T=s=>(A("data-v-6fd575ed"),s=s(),C(),s),ee={id:"appbar",class:"w-full bg-true-gray-900 flex select-none"},te=T(()=>n("div",{class:"flex h-8 items-center text-light-100"},[n("img",{src:Z,class:"w-4 ml-2",alt:"App Logo"}),n("div",{class:"font-normal text-sm ml-2"},[b("Simple"),n("span",{class:"font-semibold"},"MMO")])],-1)),se={class:"ml-auto flex items-center"},ne=T(()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"bi bi-dash-lg w-5 h-5 fill-current",viewBox:"0 0 16 16"},[n("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1)),oe=[ne],ie=T(()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"bi bi-square w-3 h-3 fill-current",viewBox:"0 0 16 16"},[n("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"})],-1)),re=[ie],ae=T(()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"bi bi-x w-6 h-6 fill-current",viewBox:"0 0 16 16"},[n("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)),le=[ae];function ce(s,t,e,i,o,r){return u(),g("div",ee,[te,n("div",se,[n("button",{onClick:t[0]||(t[0]=(...d)=>s.minimizeWindow&&s.minimizeWindow(...d))},oe),n("button",{onClick:t[1]||(t[1]=(...d)=>s.maximizeWindow&&s.maximizeWindow(...d))},re),n("button",{onClick:t[2]||(t[2]=(...d)=>s.closeWindow&&s.closeWindow(...d)),id:"closeBtn"},le)])])}var de=_(Y,[["render",ce],["__scopeId","data-v-6fd575ed"]]);const ue={name:"Sidenav",components:{PaperAirplaneIcon:O,BriefcaseIcon:N,GlobeIcon:E,AdjustmentsIcon:G,UserRemoveIcon:F},props:{apps:Array},methods:{},created(){}},ge={class:"h-full border-r dark:border-dark-700 p-4 flex flex-col gap-4"};function he(s,t,e,i,o,r){const d=f("PaperAirplaneIcon"),a=f("router-link"),l=f("BriefcaseIcon"),c=f("GlobeIcon"),k=f("UserRemoveIcon"),I=f("AdjustmentsIcon");return u(),g("nav",ge,[h(a,{to:{name:"targets"}},{default:p(()=>[h(d)]),_:1}),h(a,{to:{name:"home"}},{default:p(()=>[h(l)]),_:1}),h(a,{to:{name:"guilds"}},{default:p(()=>[h(c)]),_:1}),h(a,{to:{name:"blocked"}},{default:p(()=>[h(k)]),_:1}),h(a,{class:"mt-auto",to:{name:"settings"}},{default:p(()=>[h(I)]),_:1})])}var fe=_(ue,[["render",he]]);const me={components:{AppBar:de,Navigation:fe},data(){return{player:JSON.parse(window.background.getPlayer()),tokens:{main:{string:window.background.getPublicToken(),status:!0,rateLimited:!1},second:{string:"",status:!0,rateLimited:!1},third:{string:"",status:!0,rateLimited:!1}},settings:{level:{minimum:1,maximum:0}},guilds:{automatic:[],manual:[],shuffled:[]},targets:[],target:0,blacklist:[],inQueue:!1,rateLimited:!1,usedToken:null,updateRequired:!1}},methods:{importFile(s){var t=this,e=JSON.parse(s);console.log(e);for(let i=0;i<e.length;i++){const o=e[i];console.log(o),t.blackList(JSON.stringify(o),-1,!0)}},removeBlackList(s){console.log(s);const t=this.blacklist.findIndex(e=>e.user_id==s);t>-1&&(this.blacklist.splice(t,1),this.saveSettings())},blackList(s,t=-1,e=!1){var i=JSON.parse(s);let o=this.blacklist[this.blacklist.findIndex(r=>r.user_id==i.user_id)];if(o!=null)return console.error(o);t!=-1&&this.targets.splice(t,1),t!=-1&&(i.isBanned=e),this.blacklist.push(i),this.saveSettings()},fixTargets(s){var t=[...s].filter(e=>!this.blacklist.includes(e.user_id));return console.log(t),t},loadSettings(){localStorage.level!=null&&(this.settings.level=JSON.parse(localStorage.level)),localStorage.improvedBlacklist!=null&&(this.blacklist=JSON.parse(localStorage.improvedBlacklist)),localStorage.guilds!=null&&(this.guilds=JSON.parse(localStorage.guilds)),localStorage.targets!=null&&(this.targets=this.fixTargets(JSON.parse(localStorage.targets))),localStorage.target!=null&&(this.target=localStorage.target),localStorage.tokens!=null&&(this.tokens=JSON.parse(localStorage.tokens))},saveSettings(){console.log("SAVED"),localStorage.level=JSON.stringify(this.settings.level),localStorage.improvedBlacklist=JSON.stringify(this.blacklist),localStorage.guilds=JSON.stringify(this.guilds),localStorage.targets=JSON.stringify(this.targets),localStorage.tokens=JSON.stringify(this.tokens)},async fetchTargets(s=!1,t=!1){var e=this;if(t||(e.targets=[]),t||(e.target=0),t||(localStorage.fetchAgain=!0),t||(localStorage.target=this.target),e.rateLimited=!1,e.tokens.main.rateLimited=!1,e.tokens.second.rateLimited=!1,e.tokens.third.rateLimited=!1,t||(e.guilds.shuffled=[]),s){t||(e.guilds.shuffled=e.shuffle([...e.guilds.automatic]));var i=0,o=41;if(o>e.guilds.shuffled.length&&(o=e.guilds.shuffled.length),t&&(i=40),i>e.guilds.shuffled.length)return console.warn("CANNOT DO THAT!");for(t&&(o=e.guilds.shuffled.length),e.tokens.main.string!=""&&e.tokens.main.status&&(e.usedToken="main"),e.tokens.second.string!=""&&e.tokens.second.status&&(e.usedToken="second"),e.tokens.third.string!=""&&e.tokens.third.status&&(e.usedToken="third"),console.log(i,o);i<o&&!e.rateLimited;){const r=e.guilds.shuffled[i];await e.fetchByToken(e.tokens[e.usedToken].string,r.id).then(d=>{i++}).catch(d=>{console.log("98:"+d)})}console.log(i,o),e.rateLimited&&console.error("RATE LIMITED"),this.saveSettings(),this.$router.push({name:"targets"})}},async oldFetchTargets(s=!1){var t=this;t.targets=[],t.target=0,localStorage.target=this.target,t.rateLimited=!1,t.tokens.main.rateLimited=!1,t.tokens.second.rateLimited=!1,t.tokens.third.rateLimited=!1;var e=[];if(s){e=t.shuffle([...t.guilds.automatic]);var i=0;for(t.tokens.main.string!=""&&t.tokens.main.status&&(t.usedToken="main"),t.tokens.second.string!=""&&t.tokens.second.status&&(t.usedToken="second"),t.tokens.third.string!=""&&t.tokens.third.status&&(t.usedToken="third");i<e.length&&!t.rateLimited&&i<40;){const o=e[i];await t.fetchByToken(t.tokens[t.usedToken].string,o.id).then(r=>{i++}).catch(r=>{console.log("98:"+r)})}t.rateLimited&&console.error("RATE LIMITED"),this.saveSettings(),this.$router.push({name:"targets"})}},shuffle(s){let t=s.length,e;for(;t!=0;)e=Math.floor(Math.random()*t),t--,[s[t],s[e]]=[s[e],s[t]];return s},filterTargets(s){var t=this,e=t.settings.level.maximum,i=t.settings.level.minimum;e==0&&(e=parseInt(t.player.level));var o=[...s].filter(r=>r.level>=i&&r.level<=e&&r.current_hp/r.max_hp*100>=50&&!t.blacklist.includes(r.user_id)&&r.safe_mode!=1);this.targets=[...this.targets].concat([...o])},async fetchByToken(s,t){var e=this,i=[];return await fetch(`https://api.simple-mmo.com/v1/guilds/members/${t}?api_key=${s}`,{method:"POST"}).then(o=>o.json()).then(o=>{if(o.error=="unauthenticated"){if(e.tokens[e.usedToken].status=!1,e.usedToken=="third")return e.usedToken="second";if(e.usedToken=="second")return e.usedToken="main";throw Error(e.usedToken+" key is not valid")}e.filterTargets(o),i=o}).catch(o=>{if(console.log("117: "+o),e.tokens[e.usedToken].rateLimited=!0,e.usedToken=="third")return e.usedToken="second";if(e.usedToken=="second")return e.usedToken="main";if(e.usedToken=="main")return e.rateLimited=!0}),i},isUpdateRequied(){R.exports.compare(window.background.version(),"0.0.9-21.12.7")==-1&&(this.updateRequired=!0,this.$router.push({name:"update"}))}},beforeMount(){this.isUpdateRequied(),this.loadSettings(),console.log(this.player),console.log(this.tokens),console.log(this.blacklist),console.log(this.guilds),console.log(this.targets)}},_e={class:"flex flex-col h-screen overflow-hidden w-sreen"},pe={class:"h-[calc(100vh-2rem)] flex flex-shrink-0"};function ve(s,t,e,i,o,r){const d=f("AppBar"),a=f("Navigation"),l=f("router-view");return u(),g("div",_e,[h(d),n("div",pe,[o.updateRequired?y("",!0):(u(),w(a,{key:0})),h(l,{onImportFile:r.importFile,onRemoveBlackList:t[0]||(t[0]=c=>r.removeBlackList(c)),blacklist:o.blacklist,onBlackList:t[1]||(t[1]=c=>r.blackList(c[0],c[1],c[2])),targets:o.targets,target:o.target,onFetchTargets:t[2]||(t[2]=c=>r.fetchTargets(c[0],c[1])),onSaveSettings:r.saveSettings,tokens:o.tokens,guilds:o.guilds,settings:o.settings,player:o.player,class:"w-full h-full p-4 overflow-y-auto"},{default:p(({Component:c})=>[h(J,{name:"fade",mode:"out-in"},{default:p(()=>[(u(),w(M(c),{key:"a"+s.$route.params.id}))]),_:2},1024)]),_:1},8,["onImportFile","blacklist","targets","target","onSaveSettings","tokens","guilds","settings","player"])])])}var ke=_(me,[["render",ve]]);const be={components:{RefreshIcon:W,Popper:z,BadgeCheckIcon:U},data(){return{clicked:!1}},methods:{async fetchByToken(s){var t=this,e=[];return await fetch(`https://api.simple-mmo.com/v1/guilds/wars/${t.player.guild.id}/1?api_key=${s}`,{method:"POST"}).then(i=>i.json()).then(i=>{e=i}).catch(i=>console.log(i)),e},fetchGuild(){this.guilds.automatic=[];var s=this,t=this.tokens.main.string;this.tokens.third.string!=""&&this.tokens.third.status?(t=this.tokens.third.string,this.fetchByToken(t).then(e=>{if(console.log(e),e.error=="unauthenticated")throw s.tokens.third.status=!1,s.$emit("saveSettings"),Error("Third key is not valid");s.filterGuilds(e)}).catch(e=>{console.log(e),setTimeout(()=>{s.fetchGuild()},150)})):this.tokens.second.string!=""&&this.tokens.second.status?(t=this.tokens.second.string,this.fetchByToken(t).then(e=>{if(console.log(e),e.error=="unauthenticated")throw s.tokens.second.status=!1,s.$emit("saveSettings"),Error("Second key is not valid");s.filterGuilds(e)}).catch(e=>{console.log(e),setTimeout(()=>{s.fetchGuild()},150)})):this.fetchByToken(t).then(e=>{if(console.log(e),e.error)throw Error(e);s.filterGuilds(e)}).catch(e=>console.log(e))},filterGuilds(s){var t=this;for(let e=0;e<s.length;e++){const i=s[e];for(const o in i)o!="status"&&i[o].id!=t.player.guild.id&&(i[o].tag="",i[o].cleared=!1,this.guilds.automatic.push(i[o]))}t.$emit("saveSettings")}},props:{player:{type:Object},tokens:Object,guilds:Object},mounted(){this.guilds.automatic.length==0&&this.fetchGuild()}},we={id:"guildWars",class:""},ye={class:"flex items-center"},xe=n("div",{class:"title"},"Guild Wars",-1),$e=n("div",{class:"ml-2 text-xs text-yellow-200"},"(Always saved from the latest refresh)",-1),Te={class:"ml-auto flex gap-2 items-center"},Se=["disabled"],Be={class:"bg-green-200 text-green-800 border border-green-500 px-1 rounded"},Ie={class:"fixed_content flex flex-col"},Le={class:"border border-true-gray-600 overflow-y-auto overflow-x-hidden"},Ae=n("div",{class:"ml-auto flex items-center"},null,-1);function Ce(s,t,e,i,o,r){const d=f("RefreshIcon");return u(),g("div",we,[n("div",ye,[xe,$e,n("div",Te,[n("button",{disabled:o.clicked,onClick:t[0]||(t[0]=a=>{o.clicked=!0,s.$emit("fetchTargets",[!0,!1])}),class:"classicBtn"}," Generate targets ",8,Se),n("button",{class:"svgBtn",onClick:t[1]||(t[1]=(...a)=>r.fetchGuild&&r.fetchGuild(...a))},[h(d)]),n("div",Be,m(e.guilds.automatic.length),1)])]),n("div",Ie,[n("div",Le,[(u(!0),g(S,null,B(e.guilds.automatic,(a,l)=>(u(),g("div",{class:v([{"bg-true-gray-900":l%2==0,"bg-true-gray-800":l%2==1},"w-full text-true-gray-400 flex border-b border-true-gray-500 p-1 gap-2 items-center"]),key:a.id},[n("div",null,m(a.id),1),n("div",null,m(a.name),1),Ae],2))),128))])])])}var Oe=_(be,[["render",Ce]]);const Ne={components:{EyeIcon:H,XIcon:V},data(){return{file:""}},props:{blacklist:Array},methods:{removeBlackList(s,t){this.$emit("removeBlackList",s)},openInClient(s){var t=`https://simple-mmo.com/user/view/${s}?new_page=true`;window.background.openLink(t),console.log(t)},exportFile(){var s=this.blacklist.filter(e=>e.isBanned),t=document.createElement("a");t.href=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"text/plain"})),t.download="gpvp_banned_users.txt",t.click()},importFile(s){var t=this;console.log(s);const e=s.files[0];if(s.value="",console.log(e),e){var i=new FileReader;i.onload=function(o){t.$emit("importFile",o.target.result)},i.onerror=function(o){console.error(o)},i.readAsText(e)}}}},Ee={id:"targets",class:""},Ge={class:"flex items-center"},Fe=n("div",{class:"title"},"Blacklist",-1),Re=n("div",{class:"ml-2 text-xs text-yellow-200"},null,-1),Je={class:"flex items-center gap-2 ml-auto"},Me={class:"px-1 text-green-800 bg-green-200 border border-green-500 rounded"},We=["disabled"],ze={class:"classicBtn cursor-pointer"},Ue=n("span",{class:""},"Import Banned",-1),He={class:"flex flex-col fixed_content"},Ve={class:"overflow-x-hidden overflow-y-auto border border-true-gray-600"},je=["id"],De={class:"text-xs"},qe={key:0,class:"text-xs"},Pe={class:"ml-auto"},Xe=["onClick"],Ke=["onClick"];function Qe(s,t,e,i,o,r){const d=f("EyeIcon"),a=f("XIcon");return u(),g("div",Ee,[n("div",Ge,[Fe,Re,n("div",Je,[n("div",Me,m(e.blacklist.length),1),n("button",{disabled:e.blacklist.length==0,onClick:t[0]||(t[0]=(...l)=>r.exportFile&&r.exportFile(...l)),class:"classicBtn"}," Export Banned ",8,We),n("label",ze,[Ue,n("input",{id:"fileInput",type:"file",onInput:t[1]||(t[1]=l=>r.importFile(l.srcElement)),class:"hidden"},null,32)])])]),n("div",He,[n("div",Ve,[(u(!0),g(S,null,B(e.blacklist,(l,c)=>(u(),g("div",{id:"target-"+c,class:v([{"bg-true-gray-900 text-true-gray-400":c%2==0,"bg-true-gray-800 text-true-gray-400":c%2==1,"bg-red-300 text-true-gray-800":this.newTarget>c,"bg-yellow-200 text-true-gray-900":this.newTarget==c},"grid items-center w-full grid-cols-4 gap-2 p-1 text-sm border-b border-true-gray-500"]),key:l.user_id},[n("div",De,m(l.user_id),1),n("div",{class:v([{"col-span-2":!l.isBanned},"text-xs"])},m(l.name),3),l.isBanned?(u(),g("div",qe,"Banned")):y("",!0),n("div",Pe,[n("button",{onClick:k=>r.openInClient(l.user_id),class:"mr-1 text-current transition-opacity duration-200 hover:opacity-70"},[h(d)],8,Xe),n("button",{onClick:k=>r.removeBlackList(l.user_id,c),class:"text-current transition-opacity duration-200 hover:opacity-70"},[h(a)],8,Ke)])],10,je))),128))])])])}var Ze=_(Ne,[["render",Qe]]);const Ye={components:{ShieldExclamationIcon:j},props:{settings:Object,tokens:Object},methods:{},created(){}},et={class:""},tt=n("div",{class:"title"},"Settings",-1),st={class:"fixed_content"},nt={class:"border-b border-true-gray-800 pb-2"},ot=n("div",{class:"sub_title"},"Filter",-1),it={class:"grid grid-cols-2 gap-2 w-full"},rt={class:"grid grid-cols-2 gap-2 items-center"},at=n("span",{class:"desc"},"Minimum level",-1),lt={class:"grid grid-cols-2 gap-2 items-center place-content-end"},ct=n("span",{class:"desc"},"Maximum level",-1),dt={class:"border-b border-true-gray-800 pb-1 mt-2"},ut=n("div",{class:"sub_title"},[b("Api keys "),n("span",{class:"text-xs text-true-gray-500"},"(first is set by logged account)")],-1),gt={class:"grid grid-rows-3 gap-1 w-full"},ht={class:"flex gap-2 items-center"},ft={class:"desc"},mt=b("Second key "),_t={class:"flex gap-2 items-center place-content-end"},pt={class:"desc"},vt=b("Third key "),kt=n("div",{class:"text-xs text-green-300 flex items-center justify-center"},[n("span",{class:""},"Additional keys are prioritised to avoid rate limit")],-1);function bt(s,t,e,i,o,r){const d=f("ShieldExclamationIcon");return u(),g("div",et,[tt,n("div",st,[n("div",nt,[ot,n("div",it,[n("div",rt,[at,x(n("input",{onBlur:t[0]||(t[0]=a=>s.$emit("saveSettings")),type:"number",min:"1",name:"",id:"","onUpdate:modelValue":t[1]||(t[1]=a=>e.settings.level.minimum=a)},null,544),[[$,e.settings.level.minimum]])]),n("div",lt,[ct,x(n("input",{onBlur:t[2]||(t[2]=a=>s.$emit("saveSettings")),type:"number",placeholder:"0 to your level",min:"0",name:"",id:"","onUpdate:modelValue":t[3]||(t[3]=a=>e.settings.level.maximum=a)},null,544),[[$,e.settings.level.maximum]])])])]),n("div",dt,[ut,n("div",gt,[n("div",ht,[n("span",ft,[mt,e.tokens.second.status?y("",!0):(u(),w(d,{key:0}))]),x(n("input",{class:v({error:!e.tokens.second.status}),onBlur:t[4]||(t[4]=a=>{e.tokens.second.status=!0,s.$emit("saveSettings")}),"onUpdate:modelValue":t[5]||(t[5]=a=>e.tokens.second.string=a),type:"text",name:"",id:"",value:""},null,34),[[$,e.tokens.second.string]])]),n("div",_t,[n("span",pt,[vt,e.tokens.third.status?y("",!0):(u(),w(d,{key:0}))]),x(n("input",{class:v({error:!e.tokens.third.status}),onBlur:t[6]||(t[6]=a=>{e.tokens.third.status=!0,s.$emit("saveSettings")}),"onUpdate:modelValue":t[7]||(t[7]=a=>e.tokens.third.string=a),type:"text",name:"",id:"",value:""},null,34),[[$,e.tokens.third.string]])]),kt])])])])}var wt=_(Ye,[["render",bt]]);const yt={components:{EyeOffIcon:D,BanIcon:q},data(){return{newTarget:parseInt(localStorage.target),onCooldown:!1,fetchAgain:localStorage.fetchAgain}},props:{targets:Array},created(){console.log(this.fetchAgain)},updated(){console.log(this.fetchAgain)},methods:{blackList(s,t,e=!1){this.$emit("blackList",[JSON.stringify(s),t,e]),t<this.newTarget&&this.newTarget--,localStorage.target=this.newTarget},getHealth(s,t){var e=Math.floor(s/t*100);return e>100&&(e=100),e},openInClient(s){var t=`https://simple-mmo.com/user/attack/${s}?new_page=true`;window.background.openBattleLink(t),console.log(t)},attackTarget(){this.onCooldown=!0,this.openInClient(this.targets[this.newTarget].user_id),console.log(this.targets.length/2==this.newTarget&&this.fetchAgain),this.targets.length/2<=this.newTarget&&this.fetchAgain&&(this.$emit("fetchTargets",[!0,!0]),this.fetchAgain=!1,localStorage.fetchAgain=!1,console.warn("CALLED SECOND FETCH!")),this.newTarget<this.targets.length-1&&document.querySelector(`#target-${this.newTarget+1}`).scrollIntoView(!0),this.newTarget<this.targets.length&&this.newTarget++,localStorage.target=this.newTarget,setTimeout(()=>{this.onCooldown=!1},400)}}},xt={id:"targets",class:""},$t={class:"flex items-center"},Tt=n("div",{class:"title"},"Targets",-1),St=n("div",{class:"ml-2 text-xs text-yellow-200"},"(Always saved from the last generating)",-1),Bt={class:"flex items-center gap-2 ml-auto"},It={key:0,class:"px-1 text-green-800 bg-green-200 border border-green-500 rounded"},Lt={key:1,class:"px-1 text-green-800 bg-green-200 border border-green-500 rounded"},At=["disabled"],Ct={class:"flex flex-col fixed_content"},Ot={class:"overflow-x-hidden overflow-y-auto border border-true-gray-600"},Nt=["id"],Et={class:"text-xs"},Gt={class:"w-24 col-span-2 overflow-hidden whitespace-nowrap overflow-ellipsis"},Ft={class:"text-xs"},Rt={class:"text-xs"},Jt={class:"ml-auto"},Mt=["onClick"],Wt=["onClick"];function zt(s,t,e,i,o,r){const d=f("BanIcon"),a=f("EyeOffIcon");return u(),g("div",xt,[n("div",$t,[Tt,St,n("div",Bt,[o.newTarget<=e.targets.length-1?(u(),g("div",It,m(o.newTarget+1)+"/"+m(e.targets.length),1)):(u(),g("div",Lt,"Cleared")),n("button",{disabled:o.newTarget>=e.targets.length||o.onCooldown,onClick:t[0]||(t[0]=(...l)=>r.attackTarget&&r.attackTarget(...l)),class:"classicBtn"}," Attack ",8,At)])]),n("div",Ct,[n("div",Ot,[(u(!0),g(S,null,B(e.targets,(l,c)=>(u(),g("div",{id:"target-"+c,class:v([{"bg-true-gray-900 text-true-gray-400":c%2==0,"bg-true-gray-800 text-true-gray-400":c%2==1,"bg-red-300 text-true-gray-800":this.newTarget>c,"bg-yellow-200 text-true-gray-900":this.newTarget==c},"grid items-center w-full grid-cols-6 gap-2 p-1 text-sm border-b border-true-gray-500"]),key:l.user_id},[n("div",Et,m(l.user_id),1),n("div",Gt,m(l.name),1),n("div",Ft,"Level "+m(l.level),1),n("div",Rt,"Health "+m(r.getHealth(l.current_hp,l.max_hp))+"%",1),n("div",Jt,[n("button",{onClick:k=>r.blackList(l,c,!0),class:"mr-1 text-current transition-opacity duration-200 hover:opacity-70"},[h(d)],8,Mt),n("button",{onClick:k=>r.blackList(l,c,!1),class:"text-current transition-opacity duration-200 hover:opacity-70"},[h(a)],8,Wt)])],10,Nt))),128))])])])}var Ut=_(yt,[["render",zt]]);const Ht={methods:{}},Vt={class:""},jt=n("div",{class:"title"},"Guilds",-1),Dt=n("div",{class:"fixed_content text-white"}," TODO ",-1),qt=[jt,Dt];function Pt(s,t,e,i,o,r){return u(),g("div",Vt,qt)}var Xt=_(Ht,[["render",Pt]]);const Kt={},Qt={class:"w-full h-full text-true-gray-300 font-medium text-lg flex items-center justify-center"},Zt=n("div",{class:"mb-16"},"Update of App Hub is required",-1),Yt=[Zt];function es(s,t,e,i,o,r){return u(),g("div",Qt,Yt)}var ts=_(Kt,[["render",es]]),ss=P({history:X(),routes:[{path:"/",name:"home",component:Oe},{path:"/blocked",name:"blocked",component:Ze},{path:"/settings",name:"settings",component:wt},{path:"/targets",name:"targets",component:Ut},{path:"/guilds",name:"guilds",component:Xt},{path:"/update",name:"update",component:ts}]});const ns=K(ke);ns.use(ss).mount("#app");
