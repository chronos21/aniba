(this.webpackJsonpaniba_react=this.webpackJsonpaniba_react||[]).push([[0],{39:function(e,t,a){e.exports=a(70)},44:function(e,t,a){},45:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),s=(a(44),a(45),a(2)),o=a(11),i=a(3),u=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.g)();return r.a.createElement("div",{id:"app-bar"},r.a.createElement("div",{className:"ui container small secondary menu"},r.a.createElement(i.b,{className:"item active",to:"/"},"H"),r.a.createElement("div",{className:"item",id:"search-bar"},r.a.createElement("form",{action:"/search/",method:"GET",className:"ui icon input",onSubmit:function(e){return function(e){e.preventDefault(),c(""),l.push("/search/".concat(a))}(e)}},r.a.createElement("input",{type:"text",name:"q",placeholder:"Search anime titles...",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("i",{className:"search link icon"})))))},m=a(1),d=a.n(m),p=a(14),f=a(5),h=a(33),E=a(34),v=a(37),b=a(35),g=a(38),N=a(13),w=a.n(N),j=function(e){return e.data.img||e.data.Show?r.a.createElement("div",{className:"grid-item"},r.a.createElement(i.b,{className:"jumper",to:e.data.href?e.data.href:"/"+e.data.Episode.uri}),e.data.releasedAt&&r.a.createElement("div",{className:"time"},r.a.createElement("p",null,w()(e.data.releasedAt).fromNow())),r.a.createElement("div",{className:"ui placeholder"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:e.data.img||e.data.Show.thumbnailUrl,alt:"grid-cover"}))),r.a.createElement("div",{className:"pl-5 mt-5"},r.a.createElement("p",{className:"f-bold ellipsis"},e.data.parentId||e.data.title),r.a.createElement("p",{className:"fs-0 ellipsis"},e.data.episodes||e.data.title))):r.a.createElement("div",null)},O=function(){return r.a.createElement("div",{className:"text-center pt-20"},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},y=function(e){var t=r.a.createRef();function a(e){"right"===e?t.current.scrollLeft+=400:t.current.scrollLeft-=400}return r.a.createElement("div",{className:"grid-list"},r.a.createElement("div",{className:"float-right control hide-xs"},r.a.createElement("span",{onClick:function(){return a("left")}},"\u2039"),r.a.createElement("span",{onClick:function(){return a("right")}},"\u203a")),r.a.createElement("h3",{className:"title"},e.title),e.data&&0!==e.data.length?r.a.createElement("div",{className:"grid-container",ref:t},e.data.map((function(e){return r.a.createElement(j,{key:e.id||e._id||e.title,data:e})})),r.a.createElement("div",{className:"grid-spacer"},r.a.createElement("img",{src:"ic_launcher48.png",alt:"spacer"}))):r.a.createElement("div",{className:"pt-20"},r.a.createElement(O,null)))},S=a(9),x=a.n(S);function k(e){return I.apply(this,arguments)}function I(){return(I=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("","/api/home?json=true&").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function A(){return(A=Object(f.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("","/api/stats/home/new"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function _(){return(_=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("".concat("","/api/stats/home/new"),t);case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function C(){return(C=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("","/api/episodes/").concat(t,"?json=true"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function L(){return(L=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("","/api/search?json=true&q=").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function R(){return(R=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("","/api/series/").concat(t,"?json=true"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function T(){return(T=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("","/api/stats/").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function W(){return(W=Object(f.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("".concat("","/api/stats/").concat(t,"?").concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function D(){return(D=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("","/api/comments/").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.comments);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function J(){return(J=Object(f.a)(d.a.mark((function e(t,a){var n,r,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem("authorId"))||(n=localStorage.setItem("authorId",Date.now())),r={authorId:n,parentId:t,text:a},e.prev=3,e.next=6,x.a.post("".concat("","/api/comments/").concat(t),r);case 6:return c=e.sent,l=c.data,e.abrupt("return",l.comment);case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var U=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={newReleases:[],featured:[],isLoading:!1,featuredTotal:0},a.fecthNewReleases=Object(f.a)(d.a.mark((function e(){var t,n,r,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setState({isLoading:!0}),t=localStorage.getItem("home"),n=localStorage.getItem("homeExp"),!((Date.now()-n)/1e3<=360&&t)){e.next=7;break}t=JSON.parse(t),e.next=15;break;case 7:return e.next=9,k("type=new_releases");case 9:r=e.sent,c=r.data,l=r.total,t=c,a.setState({featuredTotal:l}),localStorage.setItem("homeExp",Date.now());case 15:a.setState({newReleases:Object(p.a)(t),isLoading:!1});case 16:case"end":return e.stop()}}),e)}))),a.fetchFeatured=Object(f.a)(d.a.mark((function e(){var t,n,r,c,l,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("featured")),n=localStorage.getItem("featuredExp"),r=localStorage.getItem("featuredTotal"),r=Math.max(a.state.featuredTotal,Number(r)),isNaN(Number(r))&&(r=4),!((Date.now()-n)/24e4<=1&&t&&t.length===Number(r))){e.next=9;break}a.setState({featured:t,isLoading:!1}),e.next=21;break;case 9:c=0;case 10:if(!(c<r)){e.next=21;break}return a.setState({isLoading:!0}),e.next=14,k("type=browse&limit=1&skip=".concat(c));case 14:l=e.sent,s=l.data,a.setState({featured:[].concat(Object(p.a)(a.state.featured),Object(p.a)(s)),isLoading:!1}),localStorage.setItem("featuredExp",Date.now());case 18:c++,e.next=10;break;case 21:a.setState({featuredTotal:r});case 22:case"end":return e.stop()}}),e)}))),a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="aniba - Watch free anime without ads!",e.next=3,this.fecthNewReleases();case 3:return e.next=5,this.fetchFeatured();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){localStorage.setItem("featuredTotal",this.state.featuredTotal),this.state.newReleases.length>0&&localStorage.setItem("home",JSON.stringify(this.state.newReleases)),this.state.featured.length>0&&localStorage.setItem("featured",JSON.stringify(this.state.featured))}},{key:"render",value:function(){return r.a.createElement("div",{className:"mb-40 pt-10"},this.state.newReleases.map((function(e){return r.a.createElement(y,{data:e.content,title:e.title,key:e._id})})),this.state.featured.map((function(e){return r.a.createElement(y,{data:e.content,title:e.title,key:e._id})})),this.state.isLoading&&r.a.createElement(O,null))}}]),t}(n.Component),P=function(e){return r.a.createElement("div",{className:"comment"},r.a.createElement("span",{className:"avatar"},r.a.createElement("img",{src:"/avatar.jpg",alt:"avatar"})),r.a.createElement("div",{className:"content"},r.a.createElement("span",{className:"author"},"Anonymous")," [",e.data.authorId.substring(8),"]",r.a.createElement("div",{className:"metadata"},r.a.createElement("span",{className:"date"},w()(e.data.createdAt).fromNow())),r.a.createElement("div",{className:"text"},e.data.text)))},q=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),h=f[0],E=f[1],v=Object(n.useState)(!1),b=Object(s.a)(v,2),g=b[0],N=b[1];function w(t){g||(N(!0),t.preventDefault(),function(e,t){return J.apply(this,arguments)}(e.parentId,h).then((function(e){l([].concat(Object(p.a)(c),[e])),E(""),N(!1)})))}return Object(n.useEffect)((function(){function t(){(function(e){return D.apply(this,arguments)})(e.parentId).then((function(e){l(e),m(!1)})).catch((function(e){m(!1),console.log(e)}))}m(!0),t();var a=setInterval((function(){return t()}),45e3);return function(){return clearInterval(a)}}),[e.parentId]),u?r.a.createElement(O,null):r.a.createElement("div",{className:"mb-40"},r.a.createElement("h3",{className:"ui dividing header"},"Comments"),c&&0!==c.length?r.a.createElement("div",{className:"ui comments"},c.map((function(e){return r.a.createElement(P,{data:e,key:e._id})}))):r.a.createElement("p",{className:"pb-20"},"There's no comment"),r.a.createElement("form",{className:"ui reply form",id:"comment-form",onSubmit:function(e){return w(e)}},r.a.createElement("div",{className:"field"},r.a.createElement("textarea",{id:"comment-box",rows:"5",onChange:function(e){return E(e.target.value)},value:h})),r.a.createElement("button",{className:"ui blue labeled submit icon button"},r.a.createElement("i",{className:"icon edit"})," Add Reply"),g&&r.a.createElement("span",null," Processing")))},B=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),u=Object(s.a)(l,2),m=u[0],d=u[1],p=Object(o.h)().episodeId;return Object(n.useEffect)((function(){d(!0);var e=localStorage.getItem(p);return e?(e=JSON.parse(e),c(e),d(!1)):function(e){return C.apply(this,arguments)}(p).then((function(t){c(t),d(!1),console.log(t),e=t,document.title="Watch ".concat(t.title," for free")})).catch((function(e){d(!1),console.log(e)})),function(){e&&localStorage.setItem(p,JSON.stringify(e))}}),[p]),m?r.a.createElement(O,null):m||a.title?r.a.createElement("div",null,r.a.createElement("div",{className:"ui container"},r.a.createElement("div",null,r.a.createElement(i.b,{to:a.all},"All Episodes"),r.a.createElement("span",null," | "),r.a.createElement(i.b,{to:a.prev},"Previous"),r.a.createElement("span",null," | "),r.a.createElement(i.b,{to:a.next},"Next")),r.a.createElement("h3",{className:"ui header mb-4"},a.title),r.a.createElement("div",{className:"video-container"},a.video&&r.a.createElement("video",{src:"".concat("","/api/video?url=").concat(a.video,"&embed=").concat(a.embed),width:"100%",height:"100%",controls:!0})),p&&!m&&r.a.createElement(q,{parentId:p}))):r.a.createElement(o.a,{to:"/"})},F=function(e){return r.a.createElement("div",{className:"ui relaxed selection list"},e.data.map((function(e){return r.a.createElement("div",{className:"item",key:e.subtitle},r.a.createElement("div",{className:"content"},r.a.createElement(i.b,{className:"header",to:e.href},e.title),r.a.createElement("div",{className:"description"},e.subtitle)))})))},H=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Object(o.h)().seriesId;return Object(n.useEffect)((function(){m(!0),function(e){return R.apply(this,arguments)}(d).then((function(e){c(e),document.title="Watch ".concat(e.title," for free without ads"),m(!1)})).catch((function(e){console.log(e)}))}),[d]),u||a.title?u?r.a.createElement(O,null):r.a.createElement("div",null,r.a.createElement("img",{className:"img-back",src:a.img,alt:"cover"}),r.a.createElement("div",{className:"ui container mb-40"},r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"large screen only four wide column"},r.a.createElement("img",{className:"series-img",src:a.img,alt:"cover"})),r.a.createElement("div",{className:"large screen only twelve wide column"},r.a.createElement("h1",null,a.title),r.a.createElement("p",null,a.status),r.a.createElement("p",null,a.desc)),r.a.createElement("div",{className:"mobile only sixteen wide column"},r.a.createElement("h1",null,a.title),r.a.createElement("p",null,a.status),r.a.createElement("p",null,a.desc))),a&&a.episodes&&r.a.createElement(F,{data:a.episodes}))):r.a.createElement(o.a,{to:"/"})},K=function(e){return r.a.createElement("div",{className:"wrap-item"},r.a.createElement("div",{className:"ui placeholder h-100"},r.a.createElement("div",{className:"image h-100"},r.a.createElement("img",{src:e.data.img,alt:"cover",height:"300"}))),r.a.createElement(i.b,{className:"wrap-info",to:e.data.href},r.a.createElement("div",null,r.a.createElement("p",{className:"f-bold ellipsis"},e.data.title),r.a.createElement("p",{className:"ellipsis"},e.data.episodes),r.a.createElement("p",{className:"ellipsis"},e.data.status.replace("Status : ","")))))},M=function(e){return r.a.createElement("div",{className:"grid-wrap"},e.data&&e.data.map((function(e){return r.a.createElement(K,{data:e,key:e.href})})))},z=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Object(o.h)().searchKey;return Object(n.useEffect)((function(){m(!0),function(e){return L.apply(this,arguments)}(d).then((function(e){c(e),m(!1),document.title="results for: "+d})).catch((function(e){console.log(e),m(!1)}))}),[d]),r.a.createElement("div",null,r.a.createElement("div",{className:"ui container pb-10"},r.a.createElement("h3",null,"results for: ",d)),!u&&!a&&r.a.createElement("p",{className:"text-center pt-10"},"There's no result"),u?r.a.createElement(O,null):r.a.createElement(M,{data:a}))},G=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),u=Object(s.a)(l,2),m=u[0],d=u[1],p=Object(o.h)().type,f=Object(n.useState)(!1),h=Object(s.a)(f,2),E=h[0],v=h[1];if(Object(n.useEffect)((function(){d(!0),function(e){return T.apply(this,arguments)}(p).then((function(e){c(e.data),d(!1)})).catch((function(e){console.log(e),d(!1)}))}),[p]),!m&!a)return r.a.createElement(o.a,{to:"/"});function b(e,t,n){v(!0),function(e,t){return W.apply(this,arguments)}(e,"".concat(t,"=").concat(n)).then((function(e){e.deletedCount>0&&c(a.filter((function(e){return e._id!==n}))),v(!1)})).catch((function(){return v(!1)}))}return r.a.createElement("div",{className:"ui container mb-40"},E&&r.a.createElement("p",{className:"fixed-right"},"(processing...)"),r.a.createElement("div",{className:"five ui buttons pb-20"},r.a.createElement(i.b,{to:"log",className:"ui button"},"Log"),r.a.createElement(i.b,{to:"comment",className:"ui button"},"Comment"),r.a.createElement(i.b,{to:"episode",className:"ui button"},"Episode"),r.a.createElement(i.b,{to:"series",className:"ui button"},"Seires"),r.a.createElement(i.b,{to:"home",className:"ui button"},"Home")),m?r.a.createElement(O,null):a&&r.a.createElement("div",null,r.a.createElement("h3",null,"stats: ",p),r.a.createElement("ol",{className:"ui list"},a.map((function(e){return r.a.createElement("li",{key:e._id},e._id,r.a.createElement("span",{onClick:function(){return b(p,"_id",e._id)},className:"float-right cursor-pointer"},"del"),r.a.createElement("ol",null,Object.keys(e).map((function(t,a){return"_id"!==t?t.includes("At")?r.a.createElement("li",{key:a},t,": ",w()(e[t]).fromNow()):r.a.createElement("li",{key:a},t,": ",JSON.stringify(e[t])):r.a.createElement("span",{key:a})}))))})))))},$=a(16),Q=a(36),V=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)([]),d=Object(s.a)(m,2),p=d[0],f=d[1],h=Object(n.useState)(!1),E=Object(s.a)(h,2),v=E[0],b=E[1];Object(n.useEffect)((function(){u(!0),function(){return A.apply(this,arguments)}().then((function(e){f(e.data),u(!1)}))}),[]);function g(e){if(b(!0),e.preventDefault(),!v){var t={};console.log(a),function(e){return _.apply(this,arguments)}(a).then((function(e){e&&c(t),b(!1)}))}}return i?r.a.createElement(O,null):r.a.createElement("div",{className:"ui container mb-40"},v&&r.a.createElement("p",{className:"fixed-right"},"(processing...)"),r.a.createElement("h3",{className:"ui dividing header"},"Add a new home content"),r.a.createElement("form",{className:"ui form",onSubmit:function(e){return g(e)}},p&&p.map((function(e){return r.a.createElement("div",{key:e,className:"field"},r.a.createElement("label",{className:"capitalize"},e),r.a.createElement("textarea",{type:"text",value:a[e]||"",name:e,rows:"3",onChange:function(e){return function(e){var t=e.target,n=t.name,r=t.value;c(Object(Q.a)({},a,Object($.a)({},n,r)))}(e)}}))})),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit")))};var X=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("div",{className:"spacer"}),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/stats/home/new"},r.a.createElement(V,null)),r.a.createElement(o.b,{path:"/stats/:type"},r.a.createElement(G,null)),r.a.createElement(o.b,{path:"/series/:seriesId"},r.a.createElement(H,null)),r.a.createElement(o.b,{path:"/search/:searchKey"},r.a.createElement(z,null)),r.a.createElement(o.b,{path:"/:episodeId"},r.a.createElement(B,null)),r.a.createElement(o.b,{path:"/"},r.a.createElement(U,null)))))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(X,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(t,e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.1bbb7d3e.chunk.js.map