import{d as _,k as p,t as u,v as f,r as n,o as s,c as a,a as t,G as o,$ as m,i as x}from"./vendor.2777dd0c.js";var c=_({name:"DataItem",props:{dataModel:{type:Object,default:()=>({})}},setup(){const e=p(!0);return setTimeout(()=>{e.value=!1},1e3),{loading:e}}});const d=x();u("data-v-0c1c7c91");const h={key:1,class:"flex items-center justify-between"},v={class:"text-sm text-bold"},y={key:1,style:{height:"130px"},class:"flex flex-col justify-between"},g={class:"flex flex-col justify-center"},k={class:"text-xxl"},I={class:"flex flex-col justify-center flex-1"},S=t("div",{class:"divide"},null,-1),j={class:"flex items-center justify-between"},M={class:"text-sm text-grey"},b={class:"text-sm text-grey"};f();const w=d((e,$,C,D,B,T)=>{const l=n("n-skeleton"),i=n("SvgIcon"),r=n("n-card");return s(),a(r,{"content-style":{padding:"10px"},"header-style":{padding:"5px"},segmented:!0},{header:d(()=>[e.loading?(s(),a(l,{key:0,text:"",width:"60%"})):(s(),a("div",h,[t("span",v,o(e.dataModel.title),1),t(i,{style:{"font-size":"26px"},name:e.dataModel.iconClass},null,8,["name"])]))]),default:d(()=>[e.loading?(s(),a(l,{key:0,text:"",repeat:6})):(s(),a("div",y,[t("div",g,[t("span",k,o(e.dataModel.data),1)]),t("div",I,[m(e.$slots,"extra",{extra:e.dataModel.extra},void 0,!0)]),S,t("div",j,[t("span",M,o(e.dataModel.bottomTitle),1),t("span",b,o(e.dataModel.totalSum),1)])]))]),_:3})});c.render=w;c.__scopeId="data-v-0c1c7c91";export{c as default};
