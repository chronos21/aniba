(this.webpackJsonpaniba_react=this.webpackJsonpaniba_react||[]).push([[0],{35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),s=a(1),i=(a(40),a(3)),o=a(11),u=a(2),m=a.n(u),d=a(12),p=a(5),f=a(15),E=a.n(f),v=function(e){return e.data.img||e.data.Show?c.a.createElement("div",{className:"grid-item"},c.a.createElement(i.b,{className:"jumper",to:e.data.href}),e.data.releasedAt&&c.a.createElement("div",{className:"time"},c.a.createElement("p",null,E()(e.data.releasedAt).fromNow())),c.a.createElement("div",{className:"ui placeholder"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:e.data.img,alt:e.data.parentId||e.data.title}))),c.a.createElement("div",{className:"pl-5 mt-5"},c.a.createElement("p",{className:"f-bold ellipsis"},e.data.parentId||e.data.title),c.a.createElement("p",{className:"fs-0 ellipsis"},e.data.episodes||e.data.title))):c.a.createElement("div",null)},h=function(){return c.a.createElement("div",{className:"text-center pt-30"},c.a.createElement("div",{className:"lds-ring"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))},b=function(e){var t=c.a.createRef();function a(e){"right"===e?t.current.scrollLeft+=1e3:t.current.scrollLeft-=1e3}return c.a.createElement("div",{className:"grid-list"},c.a.createElement("div",{className:"float-right control hide-xs"},c.a.createElement("span",{onClick:function(){return a("left")}},"\u2039"),c.a.createElement("span",{onClick:function(){return a("right")}},"\u203a")),c.a.createElement("h3",{className:"title"},e.title),e.data&&0!==e.data.length?c.a.createElement("div",{className:"grid-container",ref:t},e.data.map((function(e){return c.a.createElement(v,{key:e.id||e._id||e.title,data:e})})),c.a.createElement("div",{className:"grid-spacer"},c.a.createElement("img",{src:"ic_launcher48.png",alt:"spacer"}))):c.a.createElement("div",{className:"pt-20"},c.a.createElement(h,null)))},g=a(9),N=a.n(g),O="https://anibaniba.herokuapp.com";function j(e){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(O,"/api/home?json=true&").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(){return(w=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(O,"/api/stats/home/new"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("userId"),e.next=4,N.a.get("".concat(O,"/api/user/").concat(t,"/followed"));case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function x(){return(x=Object(p.a)(m.a.mark((function e(t){var a,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(a=localStorage.getItem("userId")).includes("__")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,N.a.post("".concat(O,"/api/user/").concat(a,"/followed/").concat(t));case 6:return n=e.sent,c=n.data,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function k(){return(k=Object(p.a)(m.a.mark((function e(t,a){var n,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(O,"/api/stats/home/new"),"login"!==a&&"register"!==a||(n="".concat(O,"/api/auth/").concat(a)),e.next=5,N.a.post(n,t);case 5:return c=e.sent,r=c.data,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function I(){return(I=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(O,"/api/episodes/").concat(t,"?json=true"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function _(){return(_=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(O,"/api/search?json=true&q=").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function C(){return(C=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(O,"/api/series/").concat(t,"?json=true"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function A(){return(A=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(O,"/api/stats/").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function R(){return(R=Object(p.a)(m.a.mark((function e(t,a){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("".concat(O,"/api/stats/").concat(t,"?").concat(a));case 3:return n=e.sent,c=n.data,e.abrupt("return",c.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function H(){return(H=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(O,"/api/comments/").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.comments);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function D(){return(D=Object(p.a)(m.a.mark((function e(t,a){var n,c,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem("userId"))||(n=localStorage.setItem("userId",Date.now())),c={authorId:n,parentId:t,text:a},e.prev=3,e.next=6,N.a.post("".concat(O,"/api/comments/").concat(t),c);case 6:return r=e.sent,l=r.data,e.abrupt("return",l.comment);case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var F=a(16),J=function(e){var t=e.data,a=e.active,n=e.handleClick;return c.a.createElement("div",{onClick:function(){return n(t.href)},className:"tab-item ".concat(a===t.label?"tab-active":"")},c.a.createElement("p",{className:"tab-icon"},t.icon),c.a.createElement("p",{className:"tab-label"},t.label))},L=function(e){var t=e.active,a=Object(F.useHistory)(),n=function(e){a.replace(e)};return c.a.createElement("div",{className:"hide-lg"},c.a.createElement("div",{className:"tab-container"},[{label:"Home",icon:"Ho",href:"/"},{label:"Search",icon:"Se",href:"/search"},{label:"Followed",icon:"Fw",href:"/followed"}].map((function(e){return c.a.createElement(J,{data:e,handleClick:n,key:e.icon,active:t})}))))},q=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){u(!0);var e=[],t=!1,a=sessionStorage.getItem("homeData");a&&(a=JSON.parse(a),r(a),t=!0,u(!1));var n=function(){var a=Object(p.a)(m.a.mark((function a(){var n,l,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j("type=new_releases");case 2:n=a.sent,l=n.data,s=n.total,t||r(l),e=Object(d.a)(l),u(!1),c(s);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),c=function(){var a=Object(p.a)(m.a.mark((function a(n){var c,l;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=m.a.mark((function a(n){var c,l;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t||u(!0),a.next=3,j("type=browse&limit=1&skip=".concat(n));case 3:c=a.sent,l=c.data,t||r((function(e){return[].concat(Object(d.a)(e),Object(d.a)(l))})),e=[].concat(Object(d.a)(e),Object(d.a)(l)),u(!1);case 8:case"end":return a.stop()}}),a)})),l=0;case 2:if(!(l<n)){a.next=7;break}return a.delegateYield(c(l),"t0",4);case 4:l++,a.next=2;break;case 7:r(e),sessionStorage.setItem("homeData",JSON.stringify(e));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();n()}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"mb-40 pt-sm-20 mb-sm-70 page-fade-in"},c.a.createElement("div",{className:"grid-scroll-blocker"}),a.map((function(e){return c.a.createElement(b,{data:e.content,title:e.title,key:e._id})})),o&&c.a.createElement(h,null)),c.a.createElement(L,{active:"Home"}))},P=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(o.useHistory)();return c.a.createElement("div",{id:"app-bar"},c.a.createElement("div",{className:"ui container small secondary menu"},e.showHome&&c.a.createElement("span",{className:"item active cursor-pointer",onClick:function(){return i.replace("/")}},"H"),c.a.createElement("div",{className:"item",id:"search-bar"},c.a.createElement("form",{action:"/search/",method:"GET",className:"ui icon input",onSubmit:function(e){return function(e){e.preventDefault(),i.push("/search/".concat(r))}(e)}},c.a.createElement("input",{autoFocus:e.autoFocus,type:"text",name:"q",placeholder:"Search anime titles...",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("i",{className:"search link icon"}))),e.auth&&c.a.createElement(F.Link,{className:"item active cursor-pointer",to:"/auth/login"},"AU")))};var U=function(e){return c.a.createElement("div",{className:"comment"},c.a.createElement("span",{className:"avatar"},c.a.createElement("img",{src:"/avatar.jpg",alt:"avatar"})),c.a.createElement("div",{className:"content"},c.a.createElement("span",{className:"author"},t=(t=e.data.authorId).includes("__")?t.split("__")[1]:"Anon ["+t.substring(9)+"]"),c.a.createElement("div",{className:"metadata"},c.a.createElement("span",{className:"date"},E()(e.data.createdAt).fromNow())),c.a.createElement("div",{className:"text"},e.data.text)));var t},K=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),u=o[0],m=o[1],p=Object(n.useState)(""),f=Object(s.a)(p,2),E=f[0],v=f[1],b=Object(n.useState)(!1),g=Object(s.a)(b,2),N=g[0],O=g[1],j=Object(n.useState)("hide"),y=Object(s.a)(j,2),w=y[0],S=y[1],x=Object(n.useRef)();Object(n.useEffect)((function(){function t(){(function(e){return H.apply(this,arguments)})(e.parentId).then((function(e){l(e),m(!1)})).catch((function(e){m(!1),console.log(e)}))}m(!0),t();var a=setInterval((function(){return t()}),45e3);return function(){return clearInterval(a)}}),[e.parentId]);var k=function(t){N||(O(!0),t.preventDefault(),function(e,t){return D.apply(this,arguments)}(e.parentId,E).then((function(e){e?(l([].concat(Object(d.a)(r),[e])),v(""),O(!1),"hide"!==w&&(x.current.scrollIntoView({behavior:"smooth"}),I(!1))):O(!1)})))},I=function(e){e?(S("opacity-0"),setTimeout((function(){return S("opacity-1")}),0)):(S("opacity-0"),v(""),setTimeout((function(){return S("hide")}),300))};return u?c.a.createElement(h,null):c.a.createElement("div",{className:"mb-40 pt-10"},c.a.createElement("h3",{className:"ui dividing header ellipsis pb-10"},e.title),r&&0!==r.length?c.a.createElement("div",{className:"ui comments"},r.map((function(e){return c.a.createElement(U,{data:e,key:e._id})}))):c.a.createElement("p",{className:"pb-20"},"There's no comment"),c.a.createElement("form",{className:"ui reply form hide-xs",id:"comment-form",onSubmit:function(e){return k(e)}},c.a.createElement("div",{className:"field"},c.a.createElement("textarea",{id:"comment-box",rows:"3\t",onChange:function(e){return v(e.target.value)},value:E})),c.a.createElement("button",{className:"ui blue labeled ".concat(N?"loading":""," submit icon button")},c.a.createElement("i",{className:"icon edit"})," Add Reply")),c.a.createElement("div",{className:"my-1 hide-lg",ref:x},c.a.createElement("button",{className:"fluid ui blue button",onClick:function(){return I(!0)}},"Add Reply")),"hide"!==w&&c.a.createElement("div",{className:"fixed-form ".concat(w)},c.a.createElement("div",{className:"dummy-space",onClick:function(){return I(!1)}}),c.a.createElement("form",{className:"ui reply form",onSubmit:function(e){return k(e)}},c.a.createElement("div",{className:"field"},c.a.createElement("textarea",{autoFocus:!0,rows:"3",onChange:function(e){return v(e.target.value)},value:E})),c.a.createElement("button",{className:"ui blue ".concat(N?"loading":""," button")},"Submit"),c.a.createElement("button",{className:"ui button",type:"button",onClick:function(){return I(!1)}},"Cancel"))))},T=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),u=Object(s.a)(l,2),m=u[0],d=u[1],p=Object(o.useParams)().episodeId;return Object(n.useEffect)((function(){d(!0);var e=localStorage.getItem(p);return e?(e=JSON.parse(e),r(e),d(!1)):function(e){return I.apply(this,arguments)}(p).then((function(t){r(t),d(!1),e=t,document.title="Watch ".concat(t.title," for free")})).catch((function(e){d(!1)})),function(){e&&localStorage.setItem(p,JSON.stringify(e))}}),[p]),m?c.a.createElement(h,null):m||a.title?c.a.createElement("div",{className:"page-fade-in"},c.a.createElement("div",{className:"hide-lg"},c.a.createElement(P,{showHome:!0}),c.a.createElement("div",{className:"spacer"})),c.a.createElement("div",{className:"ui container"},c.a.createElement("div",{className:"full fixed-video"},c.a.createElement("div",{className:"video-container"},a.video&&c.a.createElement("video",{src:"".concat(O,"/api/video?url=").concat(a.video,"&embed=").concat(a.embed),width:"100%",height:"100%",controls:!0})),c.a.createElement("div",{className:"ui my-10 expanded-y mx-10"},c.a.createElement(i.b,{to:a.prev},"\u2039 Prev"),c.a.createElement(i.b,{to:a.all},"All Episodes"),c.a.createElement(i.b,{to:a.next},"Next \u203a")),c.a.createElement("div",{className:"comment-section"},p&&!m&&c.a.createElement(K,{parentId:p,title:a.title}))))):c.a.createElement(o.Redirect,{to:"/"})},Y=function(e){return c.a.createElement("div",{className:"ui relaxed selection list"},e.data.map((function(e){return c.a.createElement("div",{className:"item",key:e.href},c.a.createElement("div",{className:"content"},c.a.createElement(i.b,{className:"header",to:e.href},e.title),c.a.createElement("div",{className:"description"},e.subtitle)))})))},B=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),f=p[0],E=p[1],v=Object(o.useParams)().seriesId;Object(n.useEffect)((function(){m(!0),function(e){return C.apply(this,arguments)}(v).then((function(e){if(r(e),e.followedBy&&e.followedBy.length>0){var t=localStorage.getItem("userId");t.includes("__")&&(t=t.split("__")[0],e.followedBy.includes(t)&&E(!0))}document.title="Watch ".concat(e.title," for free without ads"),m(!1)})).catch((function(e){console.log(e)}))}),[v]);var b=function(){(function(e){return x.apply(this,arguments)})(v).then((function(e){e&&("FOLLOWED"===e.note?E(!0):"UNFOLLOWED"===e.note&&E(!1))}))};return u||a.title?u?c.a.createElement(h,null):c.a.createElement("div",{className:"page-fade-in"},c.a.createElement("div",{className:"hide-lg"},c.a.createElement(P,{showHome:!0}),c.a.createElement("div",{className:"spacer"})),c.a.createElement("div",{className:"ui container mb-40"},c.a.createElement("div",{className:"ui grid"},c.a.createElement("div",{className:"large screen only four wide column"},c.a.createElement("img",{className:"series-img",src:a.img,alt:"cover"}),c.a.createElement("div",{className:"hide-sm"},c.a.createElement("button",{className:"fluid ui ".concat(f?"red":"blue"," button"),onClick:b},f?"Unfollow":"Follow"))),c.a.createElement("div",{className:"large screen only twelve wide column"},c.a.createElement("h1",null,a.title),c.a.createElement("p",null,a.status),c.a.createElement("p",null,a.desc)),c.a.createElement("div",{className:"mobile only sixteen wide column"},c.a.createElement("div",{className:"series-img-m ui placeholder"},c.a.createElement("div",{className:"ui image"},c.a.createElement("img",{width:"100%",height:"200",src:a.img,alt:"cover"}))),c.a.createElement("h1",null,a.title),c.a.createElement("p",null,a.status),c.a.createElement("p",null,a.desc),c.a.createElement("div",{className:"mt-15 text-center px-20"},c.a.createElement("button",{className:"fluid ui ".concat(f?"red":"blue"," button"),onClick:b},f?"Unfollow":"Follow")))),a&&a.episodes&&c.a.createElement(Y,{data:a.episodes}))):c.a.createElement(o.Redirect,{to:"/"})},W=function(e){return c.a.createElement("div",{className:"wrap-item"},c.a.createElement("div",{className:"ui placeholder h-100"},c.a.createElement("div",{className:"image h-100"},c.a.createElement("img",{src:e.data.img,alt:e.data.title,height:"300"}))),c.a.createElement(i.b,{className:"wrap-info",to:e.data.href},c.a.createElement("div",null,c.a.createElement("p",{className:"f-bold ellipsis"},e.data.title),c.a.createElement("p",{className:"ellipsis"},e.data.episodes),c.a.createElement("p",{className:"ellipsis"},e.data.status.replace("Status : ","")))))},z=function(e){return c.a.createElement("div",{className:"grid-wrap"},e.data&&e.data.map((function(e){return c.a.createElement(W,{data:e,key:e.href})})))},G=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(),p=Object(s.a)(d,2),f=p[0],E=p[1],v=Object(o.useParams)().searchKey;return Object(n.useEffect)((function(){var e=sessionStorage.getItem("searchKey");E(e&&!v?e:v)}),[v]),Object(n.useEffect)((function(){if(f){var e=sessionStorage.getItem("searchKey"),t=JSON.parse(sessionStorage.getItem("searchData"));m(!0),e&&Array.isArray(t)&&f===e?(r(t),document.title="results for: "+f,m(!1)):f&&f.trim().length>0&&(m(!0),console.log("triggered"),sessionStorage.setItem("searchKey",f),function(e){return _.apply(this,arguments)}(f).then((function(e){r(e),sessionStorage.setItem("searchData",JSON.stringify(e)),m(!1),document.title="results for: "+f})).catch((function(e){console.log(e),m(!1)})))}}),[f]),c.a.createElement("div",null,c.a.createElement("div",{className:"page-fade-in"},c.a.createElement("div",{className:"hide-lg"},c.a.createElement(P,{autoFocus:!0}),c.a.createElement("div",{className:"spacer"})),f&&f.trim().length>0&&c.a.createElement("div",null,c.a.createElement("div",{className:"ui container  pb-10"},c.a.createElement("h3",null,"results for: ",f)),!u&&a&&0===a.length&&c.a.createElement("p",{className:"text-center pt-10"},"There's no result"),u?c.a.createElement(h,null):c.a.createElement("div",{className:"mb-40"},c.a.createElement(z,{data:a})))),c.a.createElement(L,{active:"Search"}))},V=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),u=Object(s.a)(l,2),m=u[0],d=u[1],p=Object(o.useParams)().type,f=Object(n.useState)(!1),v=Object(s.a)(f,2),b=v[0],g=v[1];if(Object(n.useEffect)((function(){d(!0),function(e){return A.apply(this,arguments)}(p).then((function(e){r(e.data),d(!1)})).catch((function(e){console.log(e),d(!1)}))}),[p]),!m&!a)return c.a.createElement(o.Redirect,{to:"/"});function N(e,t,n){g(!0),function(e,t){return R.apply(this,arguments)}(e,"".concat(t,"=").concat(n)).then((function(e){e.deletedCount>0&&r(a.filter((function(e){return e._id!==n}))),g(!1)})).catch((function(){return g(!1)}))}return c.a.createElement("div",{className:"ui container mb-40"},b&&c.a.createElement("p",{className:"fixed-right"},"(processing...)"),c.a.createElement("div",{className:"five ui buttons pb-20"},c.a.createElement(i.b,{to:"log",className:"ui button"},"Log"),c.a.createElement(i.b,{to:"comment",className:"ui button"},"Comment"),c.a.createElement(i.b,{to:"episode",className:"ui button"},"Episode"),c.a.createElement(i.b,{to:"series",className:"ui button"},"Seires"),c.a.createElement(i.b,{to:"home",className:"ui button"},"Home")),m?c.a.createElement(h,null):a&&c.a.createElement("div",null,c.a.createElement("h3",null,"stats: ",p),c.a.createElement("ol",{className:"ui list"},a.map((function(e){return c.a.createElement("li",{key:e._id},e._id,c.a.createElement("span",{onClick:function(){return N(p,"_id",e._id)},className:"float-right cursor-pointer"},"del"),c.a.createElement("ol",null,Object.keys(e).map((function(t,a){return"_id"!==t?t.includes("At")?c.a.createElement("li",{key:a},t,": ",E()(e[t]).fromNow()):c.a.createElement("li",{key:a},t,": ",JSON.stringify(e[t])):c.a.createElement("span",{key:a})}))))})))))},M=a(18),Q=a(34),X=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),u=o[0],m=o[1],d=Object(n.useState)([]),p=Object(s.a)(d,2),f=p[0],E=p[1],v=Object(n.useState)(!1),b=Object(s.a)(v,2),g=b[0],N=b[1],O=Object(n.useState)(""),j=Object(s.a)(O,2),y=j[0],w=j[1];Object(n.useEffect)((function(){m(!0),E(e.fields),m(!1)}),[e.fields]);var S=function(e){var t=e.target,a=t.name,n=t.value;l(Object(Q.a)({},r,Object(M.a)({},a,n)))};function x(t){N(!0),t.preventDefault();var a=e.type;if(a&&!g){var n={};(function(e,t){return k.apply(this,arguments)})(r,a).then((function(t){t?(e.clear&&(l(n),N(!1)),e.onSuccess&&e.onSuccess(t)):(w("Something wrong with your input"),e.onError&&e.onError(),N(!1))}))}}return u?c.a.createElement(h,null):c.a.createElement("div",{className:"ui container mb-40"},c.a.createElement("h3",{className:"ui dividing header"},e.title||"Add a new home content"),c.a.createElement("form",{className:"ui form error",onSubmit:function(e){return x(e)}},f&&f.map((function(e){return c.a.createElement("div",{key:e.name||e,className:"field"},c.a.createElement("label",{className:"capitalize"},e.name||e),e.type?c.a.createElement("input",{type:e.type,value:r[e.name]||"",name:e.name,rows:"3",required:e.required,onChange:function(e){return S(e)}}):c.a.createElement("textarea",{value:r[e]||"",name:e,rows:"3",onChange:function(e){return S(e)}}))})),y&&c.a.createElement("p",{className:"color-red"},y),c.a.createElement("button",{className:"ui ".concat(g?"loading":""," button"),type:"submit"},"Submit")))},Z=function(){var e=Object(n.useState)({title:"",inputs:[]}),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){return w.apply(this,arguments)})().then((function(e){console.log(e),r({title:"Add a new content to Home section",inputs:e.data})}))}),[]),c.a.createElement(X,{type:"home",title:a.title,fields:a.inputs,clear:!0})},$={title:"Authorize Yourself",inputs:[{name:"username",type:"text",required:!0},{name:"password",type:"password",required:!0}]},ee={title:"Register",inputs:[{name:"username",type:"text",required:!0},{name:"password",type:"password",required:!0}]},te=function(e){var t=Object(n.useState)({title:"",inputs:[]}),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(o.useHistory)(),u=Object(o.useParams)().type;Object(n.useEffect)((function(){e.user.authenticated&&i.replace("/followed");var t=[];"login"===u?t=$:"register"===u&&(t=ee),l(t)}),[u,i,e.user]);return!r||r.inputs.length<1?c.a.createElement("div",null):c.a.createElement("div",{id:"auth",className:"page-fade-in"},c.a.createElement("span",{className:"fixed-right"},"login"===u?c.a.createElement("span",{onClick:function(){return i.replace("register")},className:"cursor-pointer f-bold"},"Register"):c.a.createElement("span",{onClick:function(){return i.replace("login")},className:"cursor-pointer f-bold"},"Login"),c.a.createElement("span",null,"  |  "),c.a.createElement("span",{onClick:function(){return i.replace("/")},className:" cursor-pointer f-bold"},"Skip")),c.a.createElement(X,{type:u,title:r.title,fields:r.inputs,onSuccess:function(t){localStorage.setItem("userId",t.data._id+"__"+t.data.username),i.replace("/"),e.setUser({id:t.data._id,name:t.data.username,authenticated:!0})},className:" cursor-pointer f-bold"}))},ae=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),i=Object(s.a)(l,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){u(!0),document.title="aniba - Your followed animes";var e=sessionStorage.getItem("followedData");e&&(e=JSON.parse(e)),Array.isArray(e)&&e.length>0&&(r(e),u(!1)),function(){return S.apply(this,arguments)}().then((function(e){e&&e.data&&(r(e.data),sessionStorage.setItem("followedData",JSON.stringify(e.data))),u(!1)})).catch((function(e){console.log(e),u(!1)}))}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"page-fade-in"},c.a.createElement("div",{className:"pt-sm-20"},c.a.createElement("div",{className:"ui container pb-10"},c.a.createElement("h3",null,"Your Animes")),!o&&a&&0===a.length&&c.a.createElement("div",{className:"centered"},localStorage.getItem("userId")?c.a.createElement("p",{className:"text-center pt-10"},"You have nothing. Open a series and click follow!"):c.a.createElement(F.Link,{to:"/auth/register",className:"my-1 fluid ui blue button"},"Authorize")),o?c.a.createElement(h,null):c.a.createElement("div",{className:"mb-40"},c.a.createElement(z,{data:a})))),c.a.createElement(L,{active:"Followed"}))},ne=function(){var e=Object(n.useState)({id:"",name:"",authenticated:!1}),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("userId");e&&(e=e.split("__"))[0]&&e[1]&&r({id:e[0],name:e[1],authenticated:!0})}),[]),Object(n.useEffect)((function(){var e=window.OneSignal||[];a.authenticated&&e.push((function(){e.setExternalUserId(a.id),e.showSlidedownPrompt()}))}),[a]),c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement("div",{className:"hide-xs"},c.a.createElement(P,{showHome:!0,auth:!0}),c.a.createElement("div",{className:"spacer"})),c.a.createElement(o.Switch,null,c.a.createElement(o.Route,{path:"/auth/:type"},c.a.createElement(te,{user:a,setUser:r})),c.a.createElement(o.Route,{path:"/stats/home/new"},c.a.createElement(Z,null)),c.a.createElement(o.Route,{path:"/stats/:type"},c.a.createElement(V,null)),c.a.createElement(o.Route,{path:"/series/:seriesId"},c.a.createElement(B,null)),c.a.createElement(o.Route,{path:"/search/:searchKey"},c.a.createElement(G,null)),c.a.createElement(o.Route,{path:"/search"},c.a.createElement(G,null)),c.a.createElement(o.Route,{path:"/followed"},c.a.createElement(ae,null)),c.a.createElement(o.Route,{path:"/:episodeId"},c.a.createElement(T,null)),c.a.createElement(o.Route,{path:"/"},c.a.createElement(q,null)))))};l.a.render(c.a.createElement(ne,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2fcf6963.chunk.js.map