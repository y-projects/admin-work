import{d as U,k as h,A as V,t as A,v as E,r as o,o as O,c as q,a as e,i as D,D as u}from"./vendor.2777dd0c.js";var j=U({name:"AdvanceForm",setup(){const a=h(null),n=h({name:null,isOnLine:null,joinType:null,address:null,remark:null}),g={name:{required:!0,message:"\u8BF7\u8F93\u5165\u5B66\u6821\u540D\u79F0",trigger:"blur"},isOnLine:{required:!0,message:"\u8BF7\u9009\u62E9\u7EBF\u4E0A\u7EBF\u4E0B",trigger:"change"},joinType:{required:!0,message:"\u8BF7\u9009\u62E9\u52A0\u76DF\u65B9\u5F0F",trigger:"change"},address:{required:!0,message:"\u8BF7\u8F93\u5165\u5B66\u6821\u5730\u5740",trigger:"blur"}},f=V();function y(){var _;(_=a.value)==null||_.validate(d=>{d?f.error("\u9A8C\u8BC1\u5931\u8D25"):f.success("\u9A8C\u8BC1\u6210\u529F")})}const I=h(2);return{verifyForm:a,baseInfoModel:n,rules:g,onVerifyForm:y,cols:I}}});const l=D();A("data-v-5cd787fb");const $={class:"main-container"},z=u("\u9A8C\u8BC1"),S=u("\u7EBF\u4E0B"),N=u("\u7EBF\u4E0A"),G=u("\u666E\u901A"),H=u("\u72EC\u5BB6"),J=u("\u4EE3\u7406"),K=u("\u666E\u901A"),P=u("\u72EC\u5BB6"),Q=u("\u4EE3\u7406"),R={class:"mt-2"},W=u("\u7EBF\u4E0B"),X=u("\u7EBF\u4E0A"),Y=u("\u666E\u901A"),Z=u("\u72EC\u5BB6"),x=u("\u4EE3\u7406");E();const ee=l((a,n,g,f,y,I)=>{const _=o("n-button"),d=o("n-input"),s=o("n-form-item"),p=o("n-radio"),m=o("n-radio-group"),c=o("n-radio-button"),b=o("n-form"),v=o("n-card"),w=o("n-input-number"),F=o("n-select"),r=o("n-form-item-gi"),i=o("n-checkbox"),k=o("n-space"),M=o("n-checkbox-group"),B=o("n-date-picker"),T=o("n-time-picker"),C=o("n-switch"),L=o("n-grid");return O(),q("div",$,[e("div",null,[e(v,{title:"\u8868\u5355\u9A8C\u8BC1","header-style":{padding:"10px"},segmented:!0},{"header-extra":l(()=>[e(_,{size:"small",type:"primary",onClick:a.onVerifyForm},{default:l(()=>[z]),_:1},8,["onClick"])]),default:l(()=>[e(b,{ref:"verifyForm",model:a.baseInfoModel,rules:a.rules,"label-width":"80px",class:"form-wrapper","label-align":"left"},{default:l(()=>[e(s,{label:"\u5B66\u6821\u540D\u79F0",path:"name"},{default:l(()=>[e(d,{value:a.baseInfoModel.name,"onUpdate:value":n[1]||(n[1]=t=>a.baseInfoModel.name=t),placeholder:"\u8BF7\u8F93\u5165\u5B66\u6821\u540D\u79F0"},null,8,["value"])]),_:1}),e(s,{label:"\u5728\u7EBF\u72B6\u6001",path:"isOnLine"},{default:l(()=>[e(m,{value:a.baseInfoModel.isOnLine,"onUpdate:value":n[2]||(n[2]=t=>a.baseInfoModel.isOnLine=t),name:"isOnLine"},{default:l(()=>[e(p,{value:"onLine"},{default:l(()=>[S]),_:1}),e(p,{value:"offLine"},{default:l(()=>[N]),_:1})]),_:1},8,["value"])]),_:1}),e(s,{label:"\u52A0\u76DF\u65B9\u5F0F",path:"joinType"},{default:l(()=>[e(m,{value:a.baseInfoModel.joinType,"onUpdate:value":n[3]||(n[3]=t=>a.baseInfoModel.joinType=t),name:"joinType"},{default:l(()=>[e(c,{value:"normal"},{default:l(()=>[G]),_:1}),e(c,{value:"single"},{default:l(()=>[H]),_:1}),e(c,{value:"proxy"},{default:l(()=>[J]),_:1})]),_:1},8,["value"])]),_:1}),e(s,{label:"\u5B66\u6821\u5730\u5740",path:"address"},{default:l(()=>[e(d,{value:a.baseInfoModel.address,"onUpdate:value":n[4]||(n[4]=t=>a.baseInfoModel.address=t),placeholder:"\u8BF7\u8F93\u5165\u5B66\u6821\u5730\u5740"},null,8,["value"])]),_:1}),e(s,{label:"\u5B66\u6821\u5907\u6CE8",path:"remark"},{default:l(()=>[e(d,{value:a.baseInfoModel.remark,"onUpdate:value":n[5]||(n[5]=t=>a.baseInfoModel.remark=t),placeholder:"\u8BF7\u8F93\u5165\u5B66\u6821\u5907\u6CE8",type:"textarea",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),e(v,{title:"\u6805\u683C\u5316\u8868\u5355"+a.cols+"\u5217","header-style":{padding:"10px"},class:"mt-2",segmented:!0},{"header-extra":l(()=>[e(w,{value:a.cols,"onUpdate:value":n[6]||(n[6]=t=>a.cols=t),max:4,min:2},null,8,["value"])]),default:l(()=>[e(b,{"label-width":"80",size:"small","label-placement":"left"},{default:l(()=>[e(L,{cols:a.cols,"x-gap":"20","y-gap":"10"},{default:l(()=>[e(r,{label:"\u4E0B\u62C9\u9009\u62E9"},{default:l(()=>[e(F,{placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u5427",options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3},{label:"\u9009\u9879\u56DB",value:4}]})]),_:1}),e(r,{label:"\u52A0\u51CF\u6570\u91CF"},{default:l(()=>[e(w,{style:{width:"100%"}})]),_:1}),e(r,{label:"\u8F93\u5165\u6846"},{default:l(()=>[e(d)]),_:1}),e(r,{label:"\u590D\u9009\u6846"},{default:l(()=>[e(M,null,{default:l(()=>[e(k,null,{default:l(()=>[e(i,{value:"1"},{default:l(()=>[K]),_:1}),e(i,{value:"2"},{default:l(()=>[P]),_:1}),e(i,{value:"3"},{default:l(()=>[Q]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{label:"\u9009\u62E9\u65E5\u671F"},{default:l(()=>[e(B,{style:{width:"100%"}})]),_:1}),e(r,{label:"\u65E5\u671F\u8303\u56F4"},{default:l(()=>[e(B,{type:"daterange",style:{width:"100%"}})]),_:1}),e(r,{label:"\u9009\u62E9\u65F6\u95F4"},{default:l(()=>[e(T,{style:{width:"100%"}})]),_:1}),e(r,{label:"\u5F00\u5173\u6309\u94AE"},{default:l(()=>[e(C)]),_:1})]),_:1},8,["cols"])]),_:1})]),_:1},8,["title"]),e("div",R,[e(v,{title:"\u884C\u5185\u8868\u5355","header-style":{padding:"10px"},segmented:!0},{default:l(()=>[e(b,{inline:"","label-width":"80",size:"small","label-align":"left"},{default:l(()=>[e(s,{label:"\u8F93\u5165\u6846",style:{width:"20%"}},{default:l(()=>[e(d,{value:a.baseInfoModel.name,"onUpdate:value":n[7]||(n[7]=t=>a.baseInfoModel.name=t),placeholder:"\u8BF7\u8F93\u5165\u4E00\u5B9A\u5185\u5BB9"},null,8,["value"])]),_:1}),e(s,{label:"\u5355\u9009\u7EC4",style:{width:"20%"}},{default:l(()=>[e(m,null,{default:l(()=>[e(p,{label:0},{default:l(()=>[W]),_:1}),e(p,{label:1},{default:l(()=>[X]),_:1})]),_:1})]),_:1}),e(s,{label:"\u4E0B\u62C9\u9009\u62E9",style:{width:"20%"}},{default:l(()=>[e(F,{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}]})]),_:1}),e(s,{label:"\u591A\u9009\u7EC4",style:{width:"20%"}},{default:l(()=>[e(M,{modelValue:a.baseInfoModel.joinType,"onUpdate:modelValue":n[8]||(n[8]=t=>a.baseInfoModel.joinType=t)},{default:l(()=>[e(k,null,{default:l(()=>[e(i,{value:"1"},{default:l(()=>[Y]),_:1}),e(i,{value:"2"},{default:l(()=>[Z]),_:1}),e(i,{value:"3"},{default:l(()=>[x]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u591A\u884C\u8F93\u5165",style:{width:"20%"}},{default:l(()=>[e(d,{placeholder:"\u8BF7\u8F93\u5165\u591A\u884C\u8F93\u5165",type:"textarea",rows:3})]),_:1})]),_:1})]),_:1})])])});j.render=ee;j.__scopeId="data-v-5cd787fb";export{j as default};
