import{i as $,w as x,r as I,o as F,n as S,c as i,d as A,g as N,a as j,m as y,b,u as E}from"./index-CzKxMe-f.js";import{i as M,n as U,w as z,a as G,u as Y,c as V,t as _,b as P,m as D,d as L,g as W,B as Z,e as k,f as q,r as J,h as Q,j as X,k as K,I as ee,l as te}from"./index-RDCkewVz.js";function ae(e,{args:o=[],done:a,canceled:n,error:t}){if(e){const c=e.apply(null,o);M(c)?c.then(d=>{d?a():n&&n()}).catch(t||U):c?a():n&&n()}else a()}const ne=Symbol();function oe(e){const o=$(ne,null);o&&x(o,a=>{a&&e()})}const re=(e,o)=>{const a=I(),n=()=>{a.value=Y(e).height};return F(()=>{S(n);for(let t=1;t<=3;t++)setTimeout(n,100*t)}),oe(()=>S(n)),x([z,G],n),a};function se(e,o){const a=re(e);return n=>i("div",{class:o("placeholder"),style:{height:a.value?`${a.value}px`:void 0}},[n()])}const[O,w]=V("tabbar"),ie={route:Boolean,fixed:_,border:_,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:D(0),safeAreaInsetBottom:{type:Boolean,default:null}},R=Symbol(O);var ce=A({name:O,props:ie,emits:["change","update:modelValue"],setup(e,{emit:o,slots:a}){const n=I(),{linkChildren:t}=L(R),c=se(n,w),d=()=>{var r;return(r=e.safeAreaInsetBottom)!=null?r:e.fixed},l=()=>{var r;const{fixed:s,zIndex:u,border:f}=e;return i("div",{ref:n,role:"tablist",style:W(u),class:[w({fixed:s}),{[Z]:f,"van-safe-area-bottom":d()}]},[(r=a.default)==null?void 0:r.call(a)])};return t({props:e,setActive:(r,s)=>{ae(e.beforeChange,{args:[r],done(){o("update:modelValue",r),o("change",r),s()}})}}),()=>e.fixed&&e.placeholder?c(l):l()}});const le=k(ce),[ue,p]=V("tabbar-item"),de=q({},J,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String});var me=A({name:ue,props:de,emits:["click"],setup(e,{emit:o,slots:a}){const n=Q(),t=N().proxy,{parent:c,index:d}=X(R);if(!c)return;const l=j(()=>{var s;const{route:u,modelValue:f}=c.props;if(u&&"$route"in t){const{$route:v}=t,{to:h}=e,m=te(h)?h:{path:h};return!!v.matched.find(C=>{const T="path"in m&&m.path===C.path,H="name"in m&&m.name===C.name;return T||H})}return((s=e.name)!=null?s:d.value)===f}),B=s=>{var u;l.value||c.setActive((u=e.name)!=null?u:d.value,n),o("click",s)},r=()=>{if(a.icon)return a.icon({active:l.value});if(e.icon)return i(ee,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var s;const{dot:u,badge:f}=e,{activeColor:v,inactiveColor:h}=c.props,m=l.value?v:h;return i("div",{role:"tab",class:p({active:l.value}),style:{color:m},tabindex:0,"aria-selected":l.value,onClick:B},[i(K,y({dot:u,class:p("icon"),content:f},e.badgeProps),{default:r}),i("div",{class:p("text")},[(s=a.default)==null?void 0:s.call(a,{active:l.value})])])}}});const g=k(me),ve=A({setup(){let e=function(t){return t[t.Home=0]="Home",t[t.Friends=1]="Friends",t[t.Airdrop=2]="Airdrop",t}({});const o={[e.Home]:"home",[e.Friends]:"friends",[e.Airdrop]:"airdrop"},a=E(),n=I(e.Home);return x(n,t=>{a.push({name:o[t]})},{immediate:!0}),()=>i("div",null,[i(le,{modelValue:n.value,"onUpdate:modelValue":t=>n.value=t},{default:()=>[i(g,{icon:"home-o"},{default:()=>[b("SeeUSoon")]}),i(g,{icon:"friends-o"},{default:()=>[b("Friends")]}),i(g,{icon:"search"},{default:()=>[b("Airdrop")]})]})])}});export{ve as default};