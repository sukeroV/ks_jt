import{d as te,r as t,o as le,a as oe,c as y,w as re,b as ne,e as $,u as ue,f as ie,g as N,E as C,h as K,i as ce,j as f,k as l,n as G,t as _,l as V,m as O,p as Q,q as U,F as ve,s as pe,v as me,_ as de}from"./index-Bdwnile6.js";const fe={class:"practice-detail"},_e={class:"card-header"},we={class:"practice-content"},ge={key:0,class:"statistics-bar"},he={class:"stat-item"},ye={class:"stat-item"},Te={class:"stat-item"},Ie={class:"action-buttons"},Se={class:"expressions-list"},be={class:"expression-content"},$e={class:"expression-number"},Ce={class:"expression-text"},De={key:1,class:"submit-section"},ke=te({__name:"PracticeDetail",setup(Ee){const w=ue(),F=ie(),A=t(!0),T=t(!1),r=t(0),c=t(null),p=t([]),m=t([]),R=t([]);t(!1);const I=t({}),v=t({}),d=t({}),x=t(0),M=t(0),D=t(null),n=t(!1),k=t([]),Y=e=>{const s=Math.floor(e/60),a=Math.floor(e%60);return`${s}:${a.toString().padStart(2,"0")}`},P=e=>`practice_${e}_`,E=()=>{const e=w.params.id,s={answers:m.value,remainingTime:r.value,startTimes:v.value,pauseTimes:d.value,answerTimes:I.value,isCompleted:n.value};localStorage.setItem(P(e),JSON.stringify(s))},H=()=>{const e=w.params.id,s=localStorage.getItem(P(e));if(s)try{const a=JSON.parse(s);m.value=a.answers||[],r.value=parseInt(a.remainingTime)||0,v.value=a.startTimes||{},d.value=a.pauseTimes||{},I.value=a.answerTimes||{},n.value=a.isCompleted||!1}catch(a){console.error("加载保存的进度失败:",a)}},W=()=>{const e=w.params.id;localStorage.removeItem(P(e))},X=async()=>{try{A.value=!0;const e=await N.get(`/api/exercise-set/${w.params.id}`);D.value=e.data;const s=await N.get(`/api/exercise-set/${w.params.id}/expressions`);p.value=s.data,m.value.length||(m.value=new Array(p.value.length).fill("")),H(),r.value===0&&D.value.time_limit>0&&(r.value=D.value.time_limit*60),r.value>0&&!n.value&&J()}catch(e){console.error("获取练习数据失败:",e),C.error("获取练习数据失败"),F.push("/practice")}finally{A.value=!1}},J=()=>{c.value&&clearInterval(c.value),c.value=setInterval(()=>{if(r.value<=0){clearInterval(c.value),se();return}r.value--,E()},1e3)},Z=e=>{var s;e<p.value.length-1&&((s=R.value[e+1])==null||s.focus())},ee=e=>{const s=Date.now();if(!v.value[e])v.value[e]=s;else if(d.value[e]){const a=s-d.value[e];v.value[e]=v.value[e]+a}d.value[e]=0},L=e=>{if(v.value[e]&&!d.value[e]){const s=Date.now(),a=(s-v.value[e])/1e3;I.value[e]=(I.value[e]||0)+a,d.value[e]=s}},se=async()=>{n.value||(C.warning("时间到，练习已自动提交！"),await j(!0))},j=async(e=!1)=>{var s;if(!T.value)try{T.value=!0,c.value&&(clearInterval(c.value),c.value=null),p.value.forEach((u,i)=>{v.value[i]&&!d.value[i]&&L(i)});const a=p.value.map((u,i)=>{const g=Math.round(I.value[i]||0);return{expression_id:u.expression_id,user_answer:m.value[i]||0,answer_time:g}});if(!e){const u=a.findIndex((i,g)=>!m.value[g]);if(u!==-1){C.warning(`请完成第 ${u+1} 题`),(s=R.value[u])==null||s.focus(),T.value=!1,r.value>0&&J();return}}const B=(await N.post("/api/answer-records/batch",{answers:a})).data.results;let S=0;k.value=B,B.forEach(u=>{u.is_correct&&S++});const b=JSON.parse(localStorage.getItem("user")||"{}"),o=D.value.time_limit*60-r.value;await N.post(`/api/exercise-set/${w.params.id}/complete`,{user_id:b.user_id,duration:o,is_timeout:e}),n.value=!0,x.value=S,M.value=p.value.length,r.value=0,C.success(`练习完成！正确率: ${(S/p.value.length*100).toFixed(1)}%`),W()}catch(a){console.error("提交答案失败:",a),C.error("提交答案失败")}finally{T.value=!1}};let z=null;const ae=()=>{z=setInterval(()=>{n.value||E()},1e3)};return le(()=>{X(),ae()}),oe(()=>{c.value&&clearInterval(c.value),z&&clearInterval(z),n.value||E()}),window.addEventListener("beforeunload",()=>{n.value||E()}),(e,s)=>{const a=K("el-button"),q=K("el-input"),B=K("el-card"),S=ce("loading");return f(),y("div",fe,[re((f(),ne(B,{class:"practice-card"},{header:$(()=>[l("div",_e,[s[2]||(s[2]=l("h2",null,"口算练习",-1)),l("div",{class:G(["timer",{warning:r.value<=30}])}," 剩余时间: "+_(Y(r.value)),3)])]),default:$(()=>[l("div",we,[n.value?(f(),y("div",ge,[l("div",he,[l("span",null,"总题数："+_(M.value),1)]),l("div",ye,[l("span",null,"正确题数："+_(x.value),1)]),l("div",Te,[l("span",null,"正确率："+_((x.value/M.value*100).toFixed(1))+"%",1)]),l("div",Ie,[V(a,{type:"primary",size:"small",onClick:s[0]||(s[0]=b=>Q(F).push("/history"))},{default:$(()=>s[3]||(s[3]=[O(" 查看练习历史 ")])),_:1}),V(a,{size:"small",onClick:s[1]||(s[1]=b=>Q(F).push("/practice"))},{default:$(()=>s[4]||(s[4]=[O(" 继续练习 ")])),_:1})])])):U("",!0),l("div",Se,[(f(!0),y(ve,null,pe(p.value,(b,o)=>{var u,i,g;return f(),y("div",{key:o,class:"expression-item"},[l("div",be,[l("span",$e,_(o+1)+".",1),l("span",Ce,_(b.expression_text)+" = ",1),V(q,{modelValue:m.value[o],"onUpdate:modelValue":h=>m.value[o]=h,type:"number",placeholder:"请输入答案",class:"answer-input",ref_for:!0,ref:h=>R.value[o]=h,onFocus:h=>ee(o),onBlur:h=>L(o),onKeyup:me(h=>Z(o),["enter"]),disabled:n.value},null,8,["modelValue","onUpdate:modelValue","onFocus","onBlur","onKeyup","disabled"]),n.value?(f(),y("span",{key:0,class:G(["result-text",{wrong:!((u=k.value[o])!=null&&u.is_correct),correct:(i=k.value[o])==null?void 0:i.is_correct}])}," 正确答案: "+_((g=k.value[o])==null?void 0:g.correct_answer),3)):U("",!0)])])}),128))]),n.value?U("",!0):(f(),y("div",De,[V(a,{type:"primary",onClick:j,loading:T.value,size:"large"},{default:$(()=>s[5]||(s[5]=[O(" 提交答案 ")])),_:1},8,["loading"])]))])]),_:1})),[[S,A.value]])])}}}),Ne=de(ke,[["__scopeId","data-v-475acfcd"]]);export{Ne as default};