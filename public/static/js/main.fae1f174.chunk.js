(this.webpackJsonpaniba_react=this.webpackJsonpaniba_react||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},37:function(e,t,a){},38:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(37),a(38),a(1)),s=a(9),i=a(3),u=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(s.f)();return r.a.createElement("div",{className:"ui container small secondary menu pt-10"},r.a.createElement(i.b,{className:"item active",to:"/"},"Home"),r.a.createElement("div",{className:"right menu"},r.a.createElement("div",{className:"item"},r.a.createElement("form",{action:"/search/",method:"GET",className:"ui icon input",onSubmit:function(e){return function(e){e.preventDefault(),c(""),l.push("/search/".concat(a))}(e)}},r.a.createElement("input",{type:"text",name:"q",placeholder:"Search...",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("i",{className:"search link icon"})))))},m=a(14),d=a.n(m),p=function(e){return r.a.createElement("div",{className:"grid-item"},r.a.createElement(i.b,{className:"jumper",to:e.data.href?e.data.href:"/"+e.data.Episode.uri}),e.data.createdAt&&r.a.createElement("div",{className:"time"},r.a.createElement("p",null,d()(e.data.createdAt).fromNow())),r.a.createElement("div",{className:"ui placeholder"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:e.data.img||e.data.Show.thumbnailUrl,alt:"grid-cover"}))),r.a.createElement("div",{className:"pl-5 mt-5"},r.a.createElement("p",{className:"f-bold ellipsis"},e.data.title||e.data.Show.title),r.a.createElement("p",{className:"fs-0 ellipsis"},e.data.episodes||e.data.Episode.title)))},f=function(){return r.a.createElement("div",{className:"text-center pt-20"},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},E=function(e){var t=r.a.createRef();function a(e){"right"===e?t.current.scrollLeft+=400:t.current.scrollLeft-=400}return r.a.createElement("div",{className:"grid-list"},r.a.createElement("div",{className:"float-right control"},r.a.createElement("span",{onClick:function(){return a("left")}},"\u2039"),r.a.createElement("span",{onClick:function(){return a("right")}},"\u203a")),r.a.createElement("h3",{className:"title"},e.title),e.data&&0!==e.data.length?r.a.createElement("div",{className:"grid-container",ref:t},e.data.map((function(e){return r.a.createElement(p,{key:e.id||e.title,data:e})}))):r.a.createElement("div",{className:"pt-20"},r.a.createElement(f,null)))},v=a(4),h=a.n(v),g=a(10),b=a(11),N=a.n(b);function w(){return(w=Object(g.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat("","/api/home?json=true"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=Object(g.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post("".concat("","/api/browse"),{key:t});case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function S(){return(S=Object(g.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat("","/api/episodes/").concat(t,"?json=true"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function y(){return(y=Object(g.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat("","/api/search?json=true&q=").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function x(){return(x=Object(g.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat("","/api/series/").concat(t,"?json=true"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function I(){return(I=Object(g.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat("","/api/comments/").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.comments);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(){return(k=Object(g.a)(h.a.mark((function e(t,a){var n,r,c,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem("authorId"))||(n=localStorage.setItem("authorId",Date.now())),r={authorId:n,parentId:t,text:a},e.prev=3,e.next=6,N.a.post("".concat("","/api/comments/").concat(t),r);case 6:return c=e.sent,l=c.data,e.abrupt("return",l.comment);case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var A=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)([]),d=Object(o.a)(m,2),p=d[0],f=d[1];return Object(n.useEffect)((function(){document.title="aniba - Watch free anime without ads!";var e=localStorage.getItem("home"),t=localStorage.getItem("homeExp");return(Date.now()-t)/1e3<=360&&e?(e=JSON.parse(e),c(e)):function(){return w.apply(this,arguments)}().then((function(t){c(t),e=t})),function(){localStorage.setItem("home",JSON.stringify(e)),localStorage.setItem("homeExp",Date.now())}}),[]),Object(n.useEffect)((function(){var e=localStorage.getItem("featured"),t=localStorage.getItem("featuredExp");return(Date.now()-t)/1e3<=360&&e?(e=JSON.parse(e),u(e)):O("sortBy=createdAt&sortDirection=DESC").then((function(t){u(t),e=t})),function(){localStorage.setItem("featured",JSON.stringify(e)),localStorage.setItem("featuredExp",Date.now())}}),[]),Object(n.useEffect)((function(){var e=localStorage.getItem("popular"),t=localStorage.getItem("popularExp");return(Date.now()-t)/1e3<=360&&e?(e=JSON.parse(e),f(e)):O("ongoing=true").then((function(t){f(t),e=t})),function(){localStorage.setItem("popular",JSON.stringify(e)),localStorage.setItem("popularExp",Date.now())}}),[]),r.a.createElement("div",{className:"mb-40"},r.a.createElement(E,{data:a,title:"New Releases"}),r.a.createElement(E,{data:i,title:"Ongoing Animes"}),r.a.createElement(E,{data:p,title:"Popular Animes"}))},D=a(31),W=function(e){return r.a.createElement("div",{className:"comment"},r.a.createElement("span",{className:"avatar"},r.a.createElement("img",{src:"/avatar.jpg",alt:"avatar"})),r.a.createElement("div",{className:"content"},r.a.createElement("span",{className:"author"},"Anonymous")," [",e.data.authorId.substring(8),"]",r.a.createElement("div",{className:"metadata"},r.a.createElement("span",{className:"date"},d()(e.data.createdAt).fromNow())),r.a.createElement("div",{className:"text"},e.data.text)))},J=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)(""),p=Object(o.a)(d,2),E=p[0],v=p[1];function h(t){t.preventDefault(),function(e,t){return k.apply(this,arguments)}(e.parentId,E).then((function(e){l([].concat(Object(D.a)(c),[e])),v("")}))}return Object(n.useEffect)((function(){function t(){(function(e){return I.apply(this,arguments)})(e.parentId).then((function(e){l(e),m(!1)})).catch((function(e){m(!1),console.log(e)}))}m(!0),t();var a=setInterval((function(){return t()}),45e3);return function(){return clearInterval(a)}}),[e.parentId]),u?r.a.createElement(f,null):r.a.createElement("div",{className:"mb-40"},r.a.createElement("h3",{className:"ui dividing header"},"Comments"),c&&0!==c.length?r.a.createElement("div",{className:"ui comments"},c.map((function(e){return r.a.createElement(W,{data:e,key:e._id})}))):r.a.createElement("p",{className:"pb-20"},"There's no comment"),r.a.createElement("form",{className:"ui reply form",id:"comment-form",onSubmit:function(e){return h(e)}},r.a.createElement("div",{className:"field"},r.a.createElement("textarea",{id:"comment-box",rows:"5",onChange:function(e){return v(e.target.value)},value:E})),r.a.createElement("button",{className:"ui blue labeled submit icon button"},r.a.createElement("i",{className:"icon edit"})," Add Reply")))},C=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!0),m=Object(o.a)(u,2),d=m[0],p=m[1],E=Object(s.g)().episodeId;return Object(n.useEffect)((function(){p(!0);var e=localStorage.getItem(E);return e?(e=JSON.parse(e),l(e),p(!1)):function(e){return S.apply(this,arguments)}(E).then((function(t){l(t),p(!1),e=t,document.title="Watch ".concat(t.title," for free")})).catch((function(e){return console.log(e)})),function(){localStorage.setItem(E,JSON.stringify(e))}}),[E]),d?r.a.createElement(f,null):r.a.createElement("div",null,r.a.createElement("div",{className:"ui container"},r.a.createElement("div",null,r.a.createElement(i.b,{to:c.all},"All Episodes"),r.a.createElement("span",null," | "),r.a.createElement(i.b,{to:c.prev},"Previous"),r.a.createElement("span",null," | "),r.a.createElement(i.b,{to:c.next},"Next")),r.a.createElement("h3",{className:"ui header mb-4"},c.title),r.a.createElement("div",{className:"video-container"},c.video&&r.a.createElement("video",{src:"".concat("","/api/video?url=").concat(c.video,"&embed=").concat(c.embed),width:"100%",height:"100%",controls:!0})),E&&!d&&r.a.createElement(J,{parentId:E})))},R=function(e){return r.a.createElement("div",{className:"ui relaxed selection list"},e.data.map((function(e){return r.a.createElement("div",{className:"item",key:e.subtitle},r.a.createElement("div",{className:"content"},r.a.createElement(i.b,{className:"header",to:e.href},e.title),r.a.createElement("div",{className:"description"},e.subtitle)))})))},T=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(o.a)(l,2),u=i[0],m=i[1],d=Object(s.g)().seriesId;return Object(n.useEffect)((function(){m(!0),function(e){return x.apply(this,arguments)}(d).then((function(e){c(e),document.title="Watch ".concat(e.title," for free without ads"),m(!1)})).catch((function(e){console.log(e)}))}),[d]),u?r.a.createElement(f,null):r.a.createElement("div",null,r.a.createElement("img",{className:"img-back",src:a.img,alt:"cover"}),r.a.createElement("div",{className:"ui container mb-40"},r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"large screen only four wide column"},r.a.createElement("img",{className:"series-img",src:a.img,alt:"cover"})),r.a.createElement("div",{className:"large screen only twelve wide column"},r.a.createElement("h1",null,a.title),r.a.createElement("p",null,a.status),r.a.createElement("p",null,a.desc)),r.a.createElement("div",{className:"mobile only sixteen wide column"},r.a.createElement("h1",null,a.title),r.a.createElement("p",null,a.status),r.a.createElement("p",null,a.desc))),a&&a.episodes&&r.a.createElement(R,{data:a.episodes})))},L=function(e){return r.a.createElement("div",{className:"wrap-item"},r.a.createElement("div",{className:"ui placeholder h-100"},r.a.createElement("div",{className:"image h-100"},r.a.createElement("img",{src:e.data.img,alt:"cover",height:"300"}))),r.a.createElement(i.b,{className:"wrap-info",to:e.data.href},r.a.createElement("div",null,r.a.createElement("p",{className:"f-bold ellipsis"},e.data.title),r.a.createElement("p",{className:"ellipsis"},e.data.episodes),r.a.createElement("p",{className:"ellipsis"},e.data.status.replace("Status : ","")))))},P=function(e){return r.a.createElement("div",{className:"grid-wrap"},e.data&&e.data.map((function(e){return r.a.createElement(L,{data:e,key:e.href})})))},U=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(o.a)(l,2),u=i[0],m=i[1],d=Object(s.g)().searchKey;return Object(n.useEffect)((function(){m(!0),function(e){return y.apply(this,arguments)}(d).then((function(e){c(e),m(!1),document.title="results for: "+d})).catch((function(e){console.log(e),m(!1)}))}),[d]),r.a.createElement("div",null,r.a.createElement("div",{className:"ui container pb-10"},r.a.createElement("h3",null,"results for: ",d)),!u&&!a&&r.a.createElement("p",{className:"text-center pt-10"},"There's no result"),u?r.a.createElement(f,null):r.a.createElement(P,{data:a}))};var B=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/series/:seriesId"},r.a.createElement(T,null)),r.a.createElement(s.a,{path:"/search/:searchKey"},r.a.createElement(U,null)),r.a.createElement(s.a,{path:"/:episodeId"},r.a.createElement(C,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(A,null)))))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.fae1f174.chunk.js.map