(function(e){function t(t){for(var c,i,o=t[0],r=t[1],l=t[2],d=0,j=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&j.push(s[i][0]),s[i]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);b&&b(t);while(j.length)j.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,o=1;o<a.length;o++){var r=a[o];0!==s[r]&&(c=!1)}c&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var c={},s={app:0},n=[];function i(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=c,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(a,c,function(t){return e[t]}.bind(null,c));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/profile/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var b=r;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"08f9":function(e,t,a){"use strict";a("17b5")},1503:function(e,t,a){"use strict";a("1aac")},"17b5":function(e,t,a){},"1aac":function(e,t,a){},"1d3c":function(e,t,a){"use strict";a("2702")},2702:function(e,t,a){},2986:function(e,t,a){"use strict";a("4fa0")},"2a12":function(e,t,a){"use strict";a("3106")},3106:function(e,t,a){},3273:function(e,t,a){"use strict";a("7560")},"337d":function(e,t,a){},"35bd":function(e,t,a){},"43e9":function(e,t,a){},"45fa":function(e,t,a){"use strict";a("8414")},4678:function(e,t,a){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=n,e.exports=s,s.id="4678"},4811:function(e,t,a){"use strict";a("a61c")},"486b":function(e,t,a){"use strict";a("43e9")},"4e53":function(e,t,a){"use strict";a("5855")},"4fa0":function(e,t,a){},"51bc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var c=a("7a23");function s(e,t,a,s,n,i){const o=Object(c["B"])("router-view"),r=Object(c["B"])("Footer");return Object(c["u"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(o,{class:"page-content"},{default:Object(c["H"])(({Component:e})=>[Object(c["j"])(c["b"],{name:"route",mode:"out-in"},{default:Object(c["H"])(()=>[(Object(c["u"])(),Object(c["e"])(Object(c["C"])(e)))]),_:2},1024)]),_:1}),Object(c["j"])(r)],64)}const n=e=>(Object(c["x"])("data-v-7302587e"),e=e(),Object(c["v"])(),e),i={class:"footer"},o=n(()=>Object(c["h"])("div",{class:"footer-banner"},[Object(c["h"])("small",null,[Object(c["i"])(" This profile is coded using "),Object(c["h"])("span",{class:"highlight"},"Vue"),Object(c["i"])(" and designed by "),Object(c["h"])("span",{class:"highlight"},"Olzzonne Quah "),Object(c["h"])("i",{class:"fas fa-heart"}),Object(c["i"])(" | 2023 ")])],-1));function r(e,t,a,s,n,r){const l=Object(c["B"])("NavigationBar");return Object(c["u"])(),Object(c["g"])("div",i,[Object(c["j"])(l),o])}const l={class:"footer-list-group"},b=["href"];function d(e,t,a,s,n,i){return Object(c["u"])(),Object(c["g"])("ul",l,[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(n.navs,(e,t)=>(Object(c["u"])(),Object(c["g"])("li",{class:"footer-list-item",key:t},[Object(c["h"])("a",{href:e.route},Object(c["E"])(e.name),9,b)]))),128))])}var j={props:[],components:[],data(){return{navs:[{name:"Profile",route:""},{name:"Experiences",route:"#experience"},{name:"Quotes",route:"#quotes"},{name:"Skill Proficiency",route:"#skill"},{name:"Programming Skills",route:"#programming"},{name:"Interest & Hobby",route:"#interest"},{name:"Languages",route:"#language"}]}}},u=(a("2986"),a("6b0d")),g=a.n(u);const m=g()(j,[["render",d],["__scopeId","data-v-05c3cb7b"]]);var p=m,h={components:{NavigationBar:p}};a("4e53");const O=g()(h,[["render",r],["__scopeId","data-v-7302587e"]]);var f=O,v={components:{Footer:f}};a("8b5b");const k=g()(v,[["render",s]]);var w=k,y=a("6605"),_=a("b855"),x=a.n(_);const T={class:"home"},E={class:"row introduction"},S={class:"col-12 col-md-6"},I=Object(c["h"])("div",{class:"title"},[Object(c["h"])("h1",null,[Object(c["i"])(" He "),Object(c["h"])("br"),Object(c["i"])(" llo "),Object(c["h"])("span",{class:"dot"}),Object(c["h"])("span",{class:"divider"})])],-1),z=Object(c["h"])("div",{class:"subtitle"},[Object(c["h"])("p",null,[Object(c["i"])("My name is "),Object(c["h"])("span",{class:"highlight"},"Olzzonne Quah"),Object(c["i"])(",")]),Object(c["h"])("p",null,[Object(c["i"])("I'm a "),Object(c["h"])("span",{class:"highlight"},"Full Stack Developer"),Object(c["i"])(",")]),Object(c["h"])("p",null,[Object(c["i"])(" who preferable on "),Object(c["h"])("span",{class:"highlight"},"frontend development"),Object(c["i"])(", ")]),Object(c["h"])("p",null,[Object(c["i"])(" currently doing my "),Object(c["h"])("span",{class:"highlight"},"master in research"),Object(c["i"])(" in UM, ")]),Object(c["h"])("p",null,[Object(c["i"])(" and "),Object(c["h"])("span",{class:"highlight"},"Sport Enthusiast"),Object(c["i"])(" located at Penang, Malaysia. ")])],-1),B=Object(c["h"])("div",{class:"col-12 col-md-6 profile-picture vertical-center"},[Object(c["h"])("img",{src:x.a,alt:"My Profile",title:"My Profile"})],-1),H={class:"row"},A=Object(c["h"])("div",{class:"col-0 col-md-4"},null,-1),P={class:"bg-grey"},C={class:"quotes-wrapper",id:"quotes"},W={class:"skill-wrapper",id:"skill"};function M(e,t,a,s,n,i){const o=Object(c["B"])("SocialMedia"),r=Object(c["B"])("NavigationBar"),l=Object(c["B"])("WorkingHourCounter"),b=Object(c["B"])("QuoteWrapper"),d=Object(c["B"])("SkillWrapper"),j=Object(c["B"])("About");return Object(c["u"])(),Object(c["g"])("div",T,[Object(c["j"])(o,{class:"justify-content-end"}),Object(c["h"])("div",E,[Object(c["h"])("div",S,[I,Object(c["j"])(c["b"],{name:"fade",appear:""},{default:Object(c["H"])(()=>[z]),_:1})]),Object(c["j"])(c["b"],{name:"float-down",appear:""},{default:Object(c["H"])(()=>[B]),_:1})]),Object(c["h"])("div",H,[Object(c["j"])(r),A]),Object(c["h"])("div",P,[Object(c["j"])(l)]),Object(c["h"])("div",C,[Object(c["j"])(b)]),Object(c["h"])("div",W,[Object(c["j"])(d)]),Object(c["j"])(j)])}const q={class:"row working-timer",id:"experience"},L={class:"col-12 col-md-6 divider"},D=Object(c["h"])("div",{class:"title"},"Working Experience",-1),N={class:"row"},F={class:"col-6 col-md-6 fw-bold job-title"},Q={class:"col-6 col-md-6 fw-bold text-end"},R={class:"row"},V={class:"col-6 col-md-6"},G={class:"col-6 col-md-6 text-end"},J={class:"col-12 col-md-6 counter-wrapper"},K=Object(c["h"])("h6",{class:"title"},"Total Working Hour",-1),U={class:"row"},X={class:"col"},Z={class:"row"},Y={class:"col-12 time"},$=Object(c["h"])("div",{class:"col-12 unit"},"Years",-1),ee={class:"col"},te={class:"row"},ae={class:"col-12 time"},ce=Object(c["h"])("div",{class:"col-12 unit"},"Months",-1),se={class:"col"},ne={class:"row"},ie={class:"col-12 time"},oe=Object(c["h"])("div",{class:"col-12 unit"},"Days",-1),re=Object(c["h"])("div",{class:"col-12 breakline"},null,-1),le={class:"col"},be={class:"row"},de={class:"col-12 time"},je=Object(c["h"])("div",{class:"col-12 unit"},"Hours",-1),ue={class:"col"},ge={class:"row"},me={class:"col-12 time"},pe=Object(c["h"])("div",{class:"col-12 unit"},"Minutes",-1),he={class:"col"},Oe={class:"row"},fe={class:"col-12 time"},ve=Object(c["h"])("div",{class:"col-12 unit"},"Seconds",-1),ke=Object(c["h"])("p",{class:"company-name"},"at Sinegy Dax Sdn Bhd",-1),we=Object(c["h"])("p",{class:"position-name"},"as Software Developer",-1);function ye(e,t,a,s,n,i){return Object(c["u"])(),Object(c["g"])("div",q,[Object(c["h"])("div",L,[D,(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(e.jobs,e=>(Object(c["u"])(),Object(c["g"])("div",{class:"working-list",key:e.id},[Object(c["h"])("div",N,[Object(c["h"])("div",F,Object(c["E"])(e.title),1),Object(c["h"])("div",Q,Object(c["E"])(e.date),1)]),Object(c["h"])("div",R,[Object(c["h"])("div",V,Object(c["E"])(e.company),1),Object(c["h"])("div",G,Object(c["E"])(e.duration),1)])]))),128))]),Object(c["h"])("div",J,[K,Object(c["h"])("div",U,[Object(c["h"])("div",X,[Object(c["h"])("div",Z,[Object(c["h"])("div",Y,Object(c["E"])(i.getTotalWorkingHour.year),1),$])]),Object(c["h"])("div",ee,[Object(c["h"])("div",te,[Object(c["h"])("div",ae,Object(c["E"])(i.getTotalWorkingHour.month),1),ce])]),Object(c["h"])("div",se,[Object(c["h"])("div",ne,[Object(c["h"])("div",ie,Object(c["E"])(i.getTotalWorkingHour.day),1),oe])]),re,Object(c["h"])("div",le,[Object(c["h"])("div",be,[Object(c["h"])("div",de,Object(c["E"])(i.getTotalWorkingHour.hour),1),je])]),Object(c["i"])(" : "),Object(c["h"])("div",ue,[Object(c["h"])("div",ge,[Object(c["h"])("div",me,Object(c["E"])(i.getTotalWorkingHour.minute),1),pe])]),Object(c["i"])(" : "),Object(c["h"])("div",he,[Object(c["h"])("div",Oe,[Object(c["h"])("div",fe,Object(c["E"])(i.getTotalWorkingHour.second),1),ve])])]),ke,we])])}var _e=a("c1df"),xe=a.n(_e),Te={data:()=>({jobs:[{id:1,title:"Software Intern",company:"Keysight Technologies",date:"Aug 2019 - Jan 2020",duration:"6 months",isPresent:!1},{id:2,title:"Frontend Intern",company:"Lazy Technologies (Hong Kong)",date:"July 2020 - October 2020",duration:"4 months",isPresent:!1},{id:3,title:"Software Developer",company:"Sinegy Dax",date:"Feb 2021 - Present",duration:"",isPresent:!0}],working_hour:{year:0,month:0,day:0,hour:0,minute:0,second:0}}),created:function(){this.setTotalWorkingHour()},computed:{getTotalWorkingHour:function(){return this.working_hour}},mounted(){setInterval(()=>{this.setTotalWorkingHour()},1e3)},methods:{setTotalWorkingHour:function(){const e=2021,t=1,a=15,c=9,s=0,n=0;let i=xe()([e,t,a,c,s,n]),o=xe()();this.working_hour.year=o.diff(i,"years"),i.add(this.working_hour.year,"years"),this.working_hour.month=o.diff(i,"months"),i.add(this.working_hour.month,"months"),this.working_hour.day=o.diff(i,"days"),i.add(this.working_hour.day,"days"),this.working_hour.hour=o.diff(i,"hours"),i.add(this.working_hour.hour,"hours"),this.working_hour.minute=o.diff(i,"minutes"),i.add(this.working_hour.minute,"minutes"),this.working_hour.second=o.diff(i,"seconds")}}};a("3273");const Ee=g()(Te,[["render",ye]]);var Se=Ee;const Ie=e=>(Object(c["x"])("data-v-9cd95bc4"),e=e(),Object(c["v"])(),e),ze={class:"social-media-wrapper"},Be=Ie(()=>Object(c["h"])("i",{class:"fab fa-instagram",title:"Instagram"},null,-1)),He=[Be],Ae=Ie(()=>Object(c["h"])("i",{class:"fab fa-linkedin-in",title:"Linked In"},null,-1)),Pe=[Ae],Ce=Ie(()=>Object(c["h"])("i",{class:"fab fa-github",title:"GitHub"},null,-1)),We=[Ce];function Me(e,t,a,s,n,i){return Object(c["u"])(),Object(c["g"])("div",ze,[Object(c["j"])(c["b"],{appear:"",name:"float-up-2"},{default:Object(c["H"])(()=>[Object(c["h"])("span",{class:"social-media-icon",onClick:t[0]||(t[0]=(...e)=>i.navigateToInstagram&&i.navigateToInstagram(...e))},He)]),_:1}),Object(c["j"])(c["b"],{appear:"",name:"float-up-3"},{default:Object(c["H"])(()=>[Object(c["h"])("span",{class:"social-media-icon",onClick:t[1]||(t[1]=(...e)=>i.navigateToLinkedIn&&i.navigateToLinkedIn(...e))},Pe)]),_:1}),Object(c["j"])(c["b"],{appear:"",name:"float-up-4"},{default:Object(c["H"])(()=>[Object(c["h"])("span",{class:"social-media-icon",onClick:t[2]||(t[2]=(...e)=>i.navigateToGitHub&&i.navigateToGitHub(...e))},We)]),_:1})])}var qe={data(){return{facebook:"",instagram:"https://www.instagram.com/olzzonne_quah/",linkedin:"https://www.linkedin.com/in/jia-kai-quah-434180173",github:"https://github.com/JKQuah/"}},methods:{navigateToFacebook:function(){window.open(this.facebook,"_blank")},navigateToInstagram:function(){window.open(this.instagram,"_blank")},navigateToLinkedIn:function(){window.open(this.linkedin,"_blank")},navigateToGitHub:function(){window.open(this.github,"_blank")},beforeEnter:e=>{},enter:e=>{}}};a("1d3c");const Le=g()(qe,[["render",Me],["__scopeId","data-v-9cd95bc4"]]);var De=Le;const Ne=e=>(Object(c["x"])("data-v-7b270c67"),e=e(),Object(c["v"])(),e),Fe={class:"row"},Qe={class:"card-quote"},Re=Ne(()=>Object(c["h"])("span",{class:"quote-icon-left"},[Object(c["h"])("i",{class:"fas fa-quote-left"})],-1)),Ve={class:"blockquote mb-0"},Ge={key:0,class:"blockquote-footer"},Je=["title"],Ke={key:1,class:"blockquote-footer"},Ue=Ne(()=>Object(c["h"])("span",{class:"quote-icon-right"},[Object(c["h"])("i",{class:"fas fa-quote-right"})],-1));function Xe(e,t,a,s,n,i){const o=Object(c["B"])("Titles");return Object(c["u"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(o,{title:"Quotes",subtitle:"Always remember them for inspiration and motivation"}),Object(c["h"])("div",Fe,[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(n.quotes,e=>(Object(c["u"])(),Object(c["g"])("div",{class:"col-12 col-md-6",key:e.id},[Object(c["h"])("div",Qe,[Re,Object(c["h"])("blockquote",Ve,[Object(c["h"])("p",null,Object(c["E"])(e.sentence),1),e.source?(Object(c["u"])(),Object(c["g"])("footer",Ge,[Object(c["i"])(Object(c["E"])(e.author)+" famous in ",1),Object(c["h"])("cite",{title:e.source},Object(c["E"])(e.source),9,Je)])):(Object(c["u"])(),Object(c["g"])("footer",Ke,Object(c["E"])(e.author),1))]),Ue])]))),128))])],64)}const Ze={class:"title"},Ye={class:"subtitle"};function $e(e,t,a,s,n,i){return Object(c["u"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("p",Ze,Object(c["E"])(a.title),1),Object(c["h"])("p",Ye,Object(c["E"])(a.subtitle),1)],64)}var et={props:["title","subtitle"],data(){return{}}};a("4811");const tt=g()(et,[["render",$e],["__scopeId","data-v-d464aaee"]]);var at=tt,ct={data(){return{quotes:[{id:1,sentence:"The more you know, the more you realize you don't know.",author:"Aristotle",source:"Dunning-Kruger Effect"},{id:2,sentence:"I have no special talent. I am only passionately curious.",author:"Albert Einstein ",source:""},{id:3,sentence:"Once in your life, try something. Work hard at something. Try to change. Nothing bad can happen.",author:"Jack Ma",source:""},{id:4,sentence:"People don't care about what you say, they care about what you build.",author:"Mark Zuckerberg",source:""}]}},components:{Titles:at}};a("d1b0");const st=g()(ct,[["render",Xe],["__scopeId","data-v-7b270c67"]]);var nt=st;const it=e=>(Object(c["x"])("data-v-8210169a"),e=e(),Object(c["v"])(),e),ot={class:"row"},rt=it(()=>Object(c["h"])("small",{class:"remarks"}," *All rating are based on my knowledge scope and rated accordingly. ",-1)),lt={class:"icon-holder"},bt=["src","alt"],dt={class:"skill-title"},jt={key:0,class:"recommended"},ut=it(()=>Object(c["h"])("i",{class:"fas fa-thumbs-up"},null,-1)),gt=[ut],mt={key:1,class:"recommended"},pt=it(()=>Object(c["h"])("i",{class:"fas fa-star"},null,-1)),ht=[pt],Ot={class:"skill-content"},ft={class:"skill-footer"},vt={class:"skill-project"},kt=it(()=>Object(c["h"])("span",null,"Number of projects: ",-1)),wt={class:"text-end"},yt={class:"skill-updated"},_t=it(()=>Object(c["h"])("small",{class:"mt-2"},[Object(c["h"])("i",{class:"fas fa-thumbs-up pe-1"}),Object(c["i"])(" indicates good proficiency | Keen to learn ")],-1)),xt=it(()=>Object(c["h"])("small",{class:"mb-5"},[Object(c["h"])("i",{class:"fas fa-star pe-1"}),Object(c["i"])(" indicates learning in process | Keen to learn ")],-1));function Tt(e,t,a,s,n,i){const o=Object(c["B"])("Titles");return Object(c["u"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(o,{title:"Skill Proficiency",subtitle:"Favourite programming languages and frameworks"}),Object(c["h"])("div",ot,[rt,(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(n.skills,e=>(Object(c["u"])(),Object(c["g"])("div",{class:"col-6 col-md-3 my-4",key:e.id},[Object(c["h"])("div",lt,[Object(c["h"])("img",{src:e.image,class:Object(c["p"])(["card-img-top",e.imagealt]),alt:e.imagealt},null,10,bt)]),Object(c["h"])("h6",dt,[Object(c["i"])(Object(c["E"])(e.name)+" ",1),3==e.id?(Object(c["u"])(),Object(c["g"])("span",jt,gt)):Object(c["f"])("",!0),4==e.id||7==e.id?(Object(c["u"])(),Object(c["g"])("span",mt,ht)):Object(c["f"])("",!0)]),Object(c["h"])("div",Ot,[Object(c["h"])("div",{style:Object(c["q"])({width:e.rating+"%"}),class:Object(c["p"])([e.rating>=80?"green":"yellow","bar bar-striped"])},Object(c["E"])(e.rating)+" % ",7)]),Object(c["h"])("div",ft,[Object(c["h"])("small",vt,[kt,Object(c["h"])("span",wt,Object(c["E"])(e.project_count),1)]),Object(c["h"])("small",yt," Last project at "+Object(c["E"])(e.updated_at),1)])]))),128)),_t,xt])],64)}var Et={data(){return{skills:[{id:1,name:"Vue",image:"https://vuejs.org/images/logo.png",imagealt:"vue",rating:80,project_count:5,updated_at:"recently"},{id:2,name:"React",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",imagealt:"react",rating:65,project_count:2,updated_at:"recently"},{id:3,name:"Laravel",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",imagealt:"laravel",rating:75,project_count:5,updated_at:"recently"},{id:4,name:"Python",image:"https://files.realpython.com/media/python-logo.8eb72ea6927b.png",imagealt:"python",rating:55,project_count:2,updated_at:"May 2021"},{id:6,name:"Nodejs",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",imagealt:"node",rating:70,project_count:2,updated_at:"May 2021"},{id:7,name:"Flutter",image:"https://miro.medium.com/max/1000/1*ilC2Aqp5sZd1wi0CopD1Hw.png",imagealt:"flutter",rating:50,project_count:1,updated_at:"Feb 2021"},{id:8,name:"Adobe",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31f642uvQY5kzRK8xpxEDfDdQE_QRJtuHVNzCAG_sv6xSWZKOPJtHmLfVO3eckwRhh84&usqp=CAU",imagealt:"adobe",rating:85,project_count:"-",updated_at:"Mar 2021"}]}},components:{Titles:at}};a("45fa");const St=g()(Et,[["render",Tt],["__scopeId","data-v-8210169a"]]);var It=St;const zt={id:"about"},Bt={id:"programming"},Ht={id:"interest"},At={id:"language"};function Pt(e,t,a,s,n,i){const o=Object(c["B"])("Titles"),r=Object(c["B"])("SkillDetailWrapper"),l=Object(c["B"])("InterestWrapper"),b=Object(c["B"])("LanguageWrapper"),d=Object(c["B"])("SocialMedia");return Object(c["u"])(),Object(c["g"])("div",zt,[Object(c["h"])("div",Bt,[Object(c["j"])(o,{title:"Programming Skills",subtitle:"Fullstack programming languages and frameworks I expertized"}),Object(c["j"])(r)]),Object(c["h"])("div",Ht,[Object(c["j"])(o,{title:"Interest & Hobby",subtitle:"Sit back and relax during off working hours"}),Object(c["j"])(l)]),Object(c["h"])("div",At,[Object(c["j"])(o,{title:"Languages",subtitle:"Break the barrier between you and me"}),Object(c["j"])(b)]),Object(c["j"])(o,{title:"Follow Me",subtitle:"Reach out anytime. I am just an inbox message away!"}),Object(c["j"])(d)])}const Ct={class:"interest-wrapper mb-5"},Wt=["src","alt","title"],Mt={class:"subtitle"};function qt(e,t,a,s,n,i){return Object(c["u"])(),Object(c["g"])("div",Ct,[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(n.hobbies,e=>(Object(c["u"])(),Object(c["g"])("div",{class:"interest-items",key:e.id},[Object(c["h"])("img",{src:n.currentUrl+e.image,alt:e.alternate,title:e.alternate},null,8,Wt),Object(c["h"])("span",Mt,Object(c["E"])(e.name),1)]))),128))])}var Lt={created(){this.currentUrl=window.location.href},data(){return{currentUrl:"",hobbies:[{id:1,name:"Basketball",alternate:"basketball",image:"/assets/hobby-icon/basketball.png"},{id:2,name:"Badminton",alternate:"badminton",image:"/assets/hobby-icon/badminton.png"},{id:3,name:"Gym",alternate:"gym",image:"/assets/hobby-icon/strength.png"},{id:4,name:"Reading",alternate:"reading",image:"/assets/hobby-icon/reading.png"},{id:5,name:"Travelling",alternate:"travelling",image:"/assets/hobby-icon/travelling.png"},{id:6,name:"Netflix",alternate:"netflix",image:"/assets/hobby-icon/netflix.png"}]}}};a("1503");const Dt=g()(Lt,[["render",qt],["__scopeId","data-v-e89059d6"]]);var Nt=Dt;const Ft={class:"text-center"},Qt={class:"row mb-5"},Rt={class:"fw-bold mb-3"},Vt={class:"d-flex justify-content-center"},Gt=["src"],Jt={class:"mt-3"};function Kt(e,t,a,s,n,i){return Object(c["u"])(),Object(c["g"])("div",Ft,[Object(c["h"])("div",Qt,[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(n.skills,e=>(Object(c["u"])(),Object(c["g"])("div",{class:"col-sm-12 col-md-4 mt-3 skills",key:e.id},[Object(c["h"])("h6",Rt,Object(c["E"])(e.name),1),Object(c["h"])("div",Vt,[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(e.stacks,e=>(Object(c["u"])(),Object(c["g"])("div",{class:"d-flex flex-column align-items-center w-25",key:e.id},[Object(c["h"])("img",{src:e.image,alt:"",height:"25"},null,8,Gt),Object(c["h"])("p",Jt,Object(c["E"])(e.name),1)]))),128))])]))),128))])])}var Ut={data(){return{skills:[{id:1,name:"Frontend Stack",stacks:[{id:1,name:"Vue",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png"},{id:2,name:"React",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"},{id:3,name:"Typescript",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"},{id:4,name:"Next.js",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"}]},{id:2,name:"Styling Stack",stacks:[{id:1,name:"Vuetify",image:"https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png"},{id:2,name:"Bootstrap",image:"https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"},{id:3,name:"Material UI",image:"https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"},{id:4,name:"Sass",image:"https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"}]},{id:3,name:"Backend Stack",stacks:[{id:1,name:"Laravel",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"},{id:2,name:"Nodejs",image:"https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"},{id:3,name:"Apollo GraphQL",image:"https://global.discourse-cdn.com/business5/uploads/apollographql/original/1X/25bd5104d61020fe4dc0777a5919cd009bca633e.png"},{id:4,name:"Prisma",image:"https://www.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png"}]},{id:4,name:"Interface Design Tool",stacks:[{id:1,name:"Adobe Photoshop",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png"},{id:2,name:"Adobe Illustrator",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png"},{id:3,name:"Adobe XD",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png"},{id:4,name:"Figma",image:"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"}]},{id:5,name:"Version Control",stacks:[{id:1,name:"Github",image:"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"},{id:2,name:"Bitbucket",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bitbucket-blue-logomark-only.svg/1200px-Bitbucket-blue-logomark-only.svg.png"}]},{id:5,name:"Database",stacks:[{id:1,name:"MariaDB",image:"https://cdn.cdnlogo.com/logos/m/6/mariadb.svg"},{id:2,name:"MySQL",image:"https://cdn-icons-png.flaticon.com/512/5968/5968313.png"},{id:3,name:"PostgreSQL",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"}]}]}}};a("a5e4");const Xt=g()(Ut,[["render",Kt],["__scopeId","data-v-2401d442"]]);var Zt=Xt;const Yt=e=>(Object(c["x"])("data-v-6ac2d8de"),e=e(),Object(c["v"])(),e),$t={class:"language-row mb-5"},ea={class:"language"},ta=Yt(()=>Object(c["h"])("div",{class:"dot"},null,-1)),aa=Yt(()=>Object(c["h"])("div",{class:"dot"},null,-1)),ca={class:"rating"},sa=Yt(()=>Object(c["h"])("span",null,"Reading:",-1)),na={class:"rating"},ia=Yt(()=>Object(c["h"])("span",null,"Writing:",-1)),oa={class:"rating"},ra=Yt(()=>Object(c["h"])("span",null,"Speaking:",-1));function la(e,t,a,s,n,i){return Object(c["u"])(),Object(c["g"])("div",$t,[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(n.languages,e=>(Object(c["u"])(),Object(c["g"])("div",{class:"language-wrapper",key:e.id},[Object(c["h"])("h1",ea,[Object(c["i"])(Object(c["E"])(e.id)+" ",1),ta,aa]),Object(c["h"])("div",ca,[sa,Object(c["h"])("span",{class:Object(c["p"])([e.reading>7?"green":"","fw-bold"])},Object(c["E"])(e.reading)+"/10",3)]),Object(c["h"])("div",na,[ia,Object(c["h"])("span",{class:Object(c["p"])([e.writing>7?"green":"","fw-bold"])},Object(c["E"])(e.writing)+"/10",3)]),Object(c["h"])("div",oa,[ra,Object(c["h"])("span",{class:Object(c["p"])([e.speaking>7?"green":"","fw-bold"])},Object(c["E"])(e.speaking)+"/10",3)])]))),128))])}var ba={data(){return{languages:[{id:"EN",reading:8,writing:7,speaking:8},{id:"华",reading:9.5,writing:8,speaking:10},{id:"BM",reading:6,writing:5,speaking:6}]}}};a("7df2");const da=g()(ba,[["render",la],["__scopeId","data-v-6ac2d8de"]]);var ja=da;const ua={class:"text-center"};function ga(e,t,a,s,n,i){return Object(c["u"])(),Object(c["g"])("div",ua," --- Coming Soon --- ")}var ma={};const pa=g()(ma,[["render",ga]]);var ha=pa,Oa={components:{SocialMedia:De,InterestWrapper:Nt,SkillDetailWrapper:Zt,LanguageWrapper:ja,AwardWrapper:ha,Titles:at}};a("08f9");const fa=g()(Oa,[["render",Pt],["__scopeId","data-v-18fdb3d1"]]);var va=fa,ka={name:"Home",components:{WorkingHourCounter:Se,SocialMedia:De,QuoteWrapper:nt,SkillWrapper:It,About:va,NavigationBar:p}};a("2a12");const wa=g()(ka,[["render",M]]);var ya=wa,_a=a("a6e8"),xa=a.n(_a);const Ta=e=>(Object(c["x"])("data-v-eb5a950e"),e=e(),Object(c["v"])(),e),Ea={class:"container"},Sa={class:"row",id:"not-found"},Ia=Ta(()=>Object(c["h"])("div",{class:"col-12 col-md-6 image-wrapper"},[Object(c["h"])("img",{src:xa.a,alt:""})],-1)),za={class:"col-12 col-md-6 text-wrapper"},Ba=Ta(()=>Object(c["h"])("h1",{class:"title"},"404",-1)),Ha=Ta(()=>Object(c["h"])("h4",{class:"subtitle"},"Whoops... Page not found",-1)),Aa={class:"text-center"};function Pa(e,t,a,s,n,i){return Object(c["u"])(),Object(c["g"])("div",Ea,[Object(c["h"])("div",Sa,[Ia,Object(c["h"])("div",za,[Ba,Ha,Object(c["h"])("p",Aa,[Object(c["j"])(c["b"],{name:"button",appear:""})])])])])}var Ca={components:{}};a("486b");const Wa=g()(Ca,[["render",Pa],["__scopeId","data-v-eb5a950e"]]);var Ma=Wa;const qa=[{path:"/",name:"Home",component:ya},{path:"/page-not-found",name:"PageNotFound",component:Ma},{path:"/:catchAll(.*)",redirect:"/page-not-found"}],La=Object(y["a"])({history:Object(y["b"])("/profile/"),routes:qa});var Da=La;Object(c["d"])(w).use(Da).mount("#app")},5855:function(e,t,a){},7560:function(e,t,a){},"7df2":function(e,t,a){"use strict";a("337d")},8414:function(e,t,a){},"8b5b":function(e,t,a){"use strict";a("35bd")},a5e4:function(e,t,a){"use strict";a("51bc")},a61c:function(e,t,a){},a6e8:function(e,t,a){e.exports=a.p+"img/feeling_sad.dde1fcb4.svg"},b855:function(e,t,a){e.exports=a.p+"img/profile.d395a991.svg"},d1b0:function(e,t,a){"use strict";a("f5f9")},f5f9:function(e,t,a){}});
//# sourceMappingURL=app.43f88859.js.map