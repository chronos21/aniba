(this.webpackJsonpaniba_react=this.webpackJsonpaniba_react||[]).push([[0],{40:function(e,t,a){e.exports=a(70)},45:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),s=a.n(c),l=a(1),i=(a(45),a(3)),o=a(11),u=a(2),m=a.n(u),d=a(16),p=a(5),f=a(32),E=a(33),h=a(38),v=a(34),b=a(39),g=a(14),N=a.n(g),O=function(e){return e.data.img||e.data.Show?r.a.createElement("div",{className:"grid-item"},r.a.createElement(i.b,{className:"jumper",to:e.data.href}),e.data.releasedAt&&r.a.createElement("div",{className:"time"},r.a.createElement("p",null,N()(e.data.releasedAt).fromNow())),r.a.createElement("div",{className:"ui placeholder"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:e.data.img,alt:e.data.parentId||e.data.title}))),r.a.createElement("div",{className:"pl-5 mt-5"},r.a.createElement("p",{className:"f-bold ellipsis"},e.data.parentId||e.data.title),r.a.createElement("p",{className:"fs-0 ellipsis"},e.data.episodes||e.data.title))):r.a.createElement("div",null)},j=function(){return r.a.createElement("div",{className:"text-center pt-30"},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},w=function(e){var t=r.a.createRef();function a(e){"right"===e?t.current.scrollLeft+=1e3:t.current.scrollLeft-=1e3}return r.a.createElement("div",{className:"grid-list"},r.a.createElement("div",{className:"float-right control hide-xs"},r.a.createElement("span",{onClick:function(){return a("left")}},"\u2039"),r.a.createElement("span",{onClick:function(){return a("right")}},"\u203a")),r.a.createElement("h3",{className:"title"},e.title),e.data&&0!==e.data.length?r.a.createElement("div",{className:"grid-container",ref:t},e.data.map((function(e){return r.a.createElement(O,{key:e.id||e._id||e.title,data:e})})),r.a.createElement("div",{className:"grid-spacer"},r.a.createElement("img",{src:"ic_launcher48.png",alt:"spacer"}))):r.a.createElement("div",{className:"pt-20"},r.a.createElement(j,null)))},y=a(9),S=a.n(y),x="https://anibaniba.herokuapp.com";function k(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(x,"/api/home?json=true&").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function _(){return(_=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(x,"/api/stats/home/new"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function R(){return(R=Object(p.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("userId"),e.next=4,S.a.get("".concat(x,"/api/user/").concat(t,"/followed"));case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function C(){return(C=Object(p.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(a=localStorage.getItem("userId")).includes("__")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,S.a.post("".concat(x,"/api/user/").concat(a,"/followed/").concat(t));case 6:return n=e.sent,r=n.data,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function A(){return(A=Object(p.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(x,"/api/stats/home/new"),"login"!==a&&"register"!==a||(n="".concat(x,"/api/auth/").concat(a)),e.next=5,S.a.post(n,t);case 5:return r=e.sent,c=r.data,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function L(){return(L=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(x,"/api/episodes/").concat(t,"?json=true"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function D(){return(D=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(x,"/api/search?json=true&q=").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function F(){return(F=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(x,"/api/series/").concat(t,"?json=true"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function H(){return(H=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(x,"/api/stats/").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function J(){return(J=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.delete("".concat(x,"/api/stats/").concat(t,"?").concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function T(){return(T=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(x,"/api/comments/").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.comments);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function q(){return(q=Object(p.a)(m.a.mark((function e(t,a){var n,r,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem("userId"))||(n=localStorage.setItem("userId",Date.now())),r={authorId:n,parentId:t,text:a},e.prev=3,e.next=6,S.a.post("".concat(x,"/api/comments/").concat(t),r);case 6:return c=e.sent,s=c.data,e.abrupt("return",s.comment);case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var U=a(15),P=function(e){var t=e.data,a=e.active,n=e.handleClick;return r.a.createElement("div",{onClick:function(){return n(t.href)},className:"tab-item ".concat(a===t.label?"tab-active":"")},r.a.createElement("p",{className:"tab-icon"},t.icon),r.a.createElement("p",{className:"tab-label"},t.label))},W=function(e){var t=e.active,a=Object(U.useHistory)(),n=function(e){a.replace(e)};return r.a.createElement("div",{className:"hide-lg"},r.a.createElement("div",{className:"tab-container"},[{label:"Home",icon:"Ho",href:"/"},{label:"Search",icon:"Se",href:"/search"},{label:"Followed",icon:"Fw",href:"/followed"}].map((function(e){return r.a.createElement(P,{data:e,handleClick:n,key:e.icon,active:t})}))))},K=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={newReleases:[],featured:[],isLoading:!1,featuredTotal:0},a.fecthNewReleases=Object(p.a)(m.a.mark((function e(){var t,n,r,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setState({isLoading:!0}),t=sessionStorage.getItem("home"),n=sessionStorage.getItem("homeExp"),!((Date.now()-n)/1e3<=360&&t)){e.next=7;break}t=JSON.parse(t),e.next=15;break;case 7:return e.next=9,k("type=new_releases");case 9:r=e.sent,c=r.data,s=r.total,t=c,a.setState({featuredTotal:s}),sessionStorage.setItem("homeExp",Date.now());case 15:a.setState({newReleases:Object(d.a)(t),isLoading:!1});case 16:case"end":return e.stop()}}),e)}))),a.fetchFeatured=Object(p.a)(m.a.mark((function e(){var t,n,r,c,s,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(sessionStorage.getItem("featured")),n=sessionStorage.getItem("featuredExp"),r=sessionStorage.getItem("featuredTotal"),r=Math.max(a.state.featuredTotal,Number(r),4),a.setState({isLoading:!0}),!((Date.now()-n)/24e4<=1&&t&&t.length===Number(r))){e.next=9;break}a.setState({featured:t,isLoading:!1}),e.next=21;break;case 9:c=0;case 10:if(!(c<r)){e.next=21;break}return a.setState({isLoading:!0}),e.next=14,k("type=browse&limit=1&skip=".concat(c));case 14:s=e.sent,l=s.data,a.setState({featured:[].concat(Object(d.a)(a.state.featured),Object(d.a)(l)),isLoading:!1}),sessionStorage.setItem("featuredExp",Date.now());case 18:c++,e.next=10;break;case 21:a.setState({featuredTotal:r});case 22:case"end":return e.stop()}}),e)}))),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="aniba - Watch free anime without ads!",e.next=3,this.fecthNewReleases();case 3:return e.next=5,this.fetchFeatured();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){sessionStorage.setItem("featuredTotal",this.state.featuredTotal),this.state.newReleases.length>0&&sessionStorage.setItem("home",JSON.stringify(this.state.newReleases)),this.state.featured.length>0&&sessionStorage.setItem("featured",JSON.stringify(this.state.featured))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mb-40 pt-sm-20 mb-sm-70 page-fade-in"},r.a.createElement("div",{className:"grid-scroll-blocker"}),this.state.newReleases.map((function(e){return r.a.createElement(w,{data:e.content,title:e.title,key:e._id})})),this.state.featured.map((function(e){return r.a.createElement(w,{data:e.content,title:e.title,key:e._id})})),this.state.isLoading&&r.a.createElement(j,null)),r.a.createElement(W,{active:"Home"}))}}]),t}(n.Component),B=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(o.useHistory)();return r.a.createElement("div",{id:"app-bar"},r.a.createElement("div",{className:"ui container small secondary menu"},e.showHome&&r.a.createElement("span",{className:"item active cursor-pointer",onClick:function(){return i.replace("/")}},"H"),r.a.createElement("div",{className:"item",id:"search-bar"},r.a.createElement("form",{action:"/search/",method:"GET",className:"ui icon input",onSubmit:function(e){return function(e){e.preventDefault(),i.push("/search/".concat(c))}(e)}},r.a.createElement("input",{autoFocus:e.autoFocus,type:"text",name:"q",placeholder:"Search anime titles...",value:c,onChange:function(e){return s(e.target.value)}}),r.a.createElement("i",{className:"search link icon"}))),e.auth&&r.a.createElement(U.Link,{className:"item active cursor-pointer",to:"/auth/login"},"AU")))};var Y=function(e){return r.a.createElement("div",{className:"comment"},r.a.createElement("span",{className:"avatar"},r.a.createElement("img",{src:"/avatar.jpg",alt:"avatar"})),r.a.createElement("div",{className:"content"},r.a.createElement("span",{className:"author"},t=(t=e.data.authorId).includes("__")?t.split("__")[1]:"Anon ["+t.substring(9)+"]"),r.a.createElement("div",{className:"metadata"},r.a.createElement("span",{className:"date"},N()(e.data.createdAt).fromNow())),r.a.createElement("div",{className:"text"},e.data.text)));var t},z=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),u=o[0],m=o[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),E=f[0],h=f[1],v=Object(n.useState)(!1),b=Object(l.a)(v,2),g=b[0],N=b[1],O=Object(n.useState)("hide"),w=Object(l.a)(O,2),y=w[0],S=w[1],x=Object(n.useRef)();Object(n.useEffect)((function(){function t(){(function(e){return T.apply(this,arguments)})(e.parentId).then((function(e){s(e),m(!1)})).catch((function(e){m(!1),console.log(e)}))}m(!0),t();var a=setInterval((function(){return t()}),45e3);return function(){return clearInterval(a)}}),[e.parentId]);var k=function(t){g||(N(!0),t.preventDefault(),function(e,t){return q.apply(this,arguments)}(e.parentId,E).then((function(e){e?(s([].concat(Object(d.a)(c),[e])),h(""),N(!1),"hide"!==y&&(x.current.scrollIntoView({behavior:"smooth"}),I(!1))):N(!1)})))},I=function(e){e?(S("opacity-0"),setTimeout((function(){return S("opacity-1")}),0)):(S("opacity-0"),h(""),setTimeout((function(){return S("hide")}),300))};return u?r.a.createElement(j,null):r.a.createElement("div",{className:"mb-40 pt-10"},r.a.createElement("h3",{className:"ui dividing header ellipsis pb-10"},e.title),c&&0!==c.length?r.a.createElement("div",{className:"ui comments"},c.map((function(e){return r.a.createElement(Y,{data:e,key:e._id})}))):r.a.createElement("p",{className:"pb-20"},"There's no comment"),r.a.createElement("form",{className:"ui reply form hide-xs",id:"comment-form",onSubmit:function(e){return k(e)}},r.a.createElement("div",{className:"field"},r.a.createElement("textarea",{id:"comment-box",rows:"3\t",onChange:function(e){return h(e.target.value)},value:E})),r.a.createElement("button",{className:"ui blue labeled ".concat(g?"loading":""," submit icon button")},r.a.createElement("i",{className:"icon edit"})," Add Reply")),r.a.createElement("div",{className:"my-1 hide-lg",ref:x},r.a.createElement("button",{className:"fluid ui blue button",onClick:function(){return I(!0)}},"Add Reply")),"hide"!==y&&r.a.createElement("div",{className:"fixed-form ".concat(y)},r.a.createElement("div",{className:"dummy-space",onClick:function(){return I(!1)}}),r.a.createElement("form",{className:"ui reply form",onSubmit:function(e){return k(e)}},r.a.createElement("div",{className:"field"},r.a.createElement("textarea",{autoFocus:!0,rows:"3",onChange:function(e){return h(e.target.value)},value:E})),r.a.createElement("button",{className:"ui blue ".concat(g?"loading":""," button")},"Submit"),r.a.createElement("button",{className:"ui button",type:"button",onClick:function(){return I(!1)}},"Cancel"))))},M=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(o.useParams)().episodeId;return Object(n.useEffect)((function(){d(!0);var e=localStorage.getItem(p);return e?(e=JSON.parse(e),c(e),d(!1)):function(e){return L.apply(this,arguments)}(p).then((function(t){c(t),d(!1),e=t,document.title="Watch ".concat(t.title," for free")})).catch((function(e){d(!1)})),function(){e&&localStorage.setItem(p,JSON.stringify(e))}}),[p]),m?r.a.createElement(j,null):m||a.title?r.a.createElement("div",{className:"page-fade-in"},r.a.createElement("div",{className:"hide-lg"},r.a.createElement(B,{showHome:!0}),r.a.createElement("div",{className:"spacer"})),r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"full fixed-video"},r.a.createElement("div",{className:"video-container"},a.video&&r.a.createElement("video",{src:"".concat(x,"/api/video?url=").concat(a.video,"&embed=").concat(a.embed),width:"100%",height:"100%",controls:!0})),r.a.createElement("div",{className:"ui my-10 expanded-y mx-10"},r.a.createElement(i.b,{to:a.prev},"\u2039 Prev"),r.a.createElement(i.b,{to:a.all},"All Episodes"),r.a.createElement(i.b,{to:a.next},"Next \u203a")),r.a.createElement("div",{className:"comment-section"},p&&!m&&r.a.createElement(z,{parentId:p,title:a.title}))))):r.a.createElement(o.Redirect,{to:"/"})},G=function(e){return r.a.createElement("div",{className:"ui relaxed selection list"},e.data.map((function(e){return r.a.createElement("div",{className:"item",key:e.href},r.a.createElement("div",{className:"content"},r.a.createElement(i.b,{className:"header",to:e.href},e.title),r.a.createElement("div",{className:"description"},e.subtitle)))})))},V=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),i=Object(l.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),f=p[0],E=p[1],h=Object(o.useParams)().seriesId;Object(n.useEffect)((function(){m(!0),function(e){return F.apply(this,arguments)}(h).then((function(e){if(c(e),e.followedBy&&e.followedBy.length>0){var t=localStorage.getItem("userId").split("__")[0];e.followedBy.includes(t)&&E(!0)}document.title="Watch ".concat(e.title," for free without ads"),m(!1)})).catch((function(e){console.log(e)}))}),[h]);var v=function(){(function(e){return C.apply(this,arguments)})(h).then((function(e){e&&("FOLLOWED"===e.note?E(!0):"UNFOLLOWED"===e.note&&E(!1))}))};return u||a.title?u?r.a.createElement(j,null):r.a.createElement("div",{className:"page-fade-in"},r.a.createElement("div",{className:"hide-lg"},r.a.createElement(B,{showHome:!0}),r.a.createElement("div",{className:"spacer"})),r.a.createElement("div",{className:"ui container mb-40"},r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"large screen only four wide column"},r.a.createElement("img",{className:"series-img",src:a.img,alt:"cover"}),r.a.createElement("div",{className:"hide-sm"},r.a.createElement("button",{className:"fluid ui ".concat(f?"red":"blue"," button"),onClick:v},f?"Unfollow":"Follow"))),r.a.createElement("div",{className:"large screen only twelve wide column"},r.a.createElement("h1",null,a.title),r.a.createElement("p",null,a.status),r.a.createElement("p",null,a.desc)),r.a.createElement("div",{className:"mobile only sixteen wide column"},r.a.createElement("div",{className:"series-img-m ui placeholder"},r.a.createElement("div",{className:"ui image"},r.a.createElement("img",{width:"100%",height:"200",src:a.img,alt:"cover"}))),r.a.createElement("h1",null,a.title),r.a.createElement("p",null,a.status),r.a.createElement("p",null,a.desc),r.a.createElement("div",{className:"mt-15 text-center px-20"},r.a.createElement("button",{className:"fluid ui ".concat(f?"red":"blue"," button"),onClick:v},f?"Unfollow":"Follow")))),a&&a.episodes&&r.a.createElement(G,{data:a.episodes}))):r.a.createElement(o.Redirect,{to:"/"})},Q=function(e){return r.a.createElement("div",{className:"wrap-item"},r.a.createElement("div",{className:"ui placeholder h-100"},r.a.createElement("div",{className:"image h-100"},r.a.createElement("img",{src:e.data.img,alt:e.data.title,height:"300"}))),r.a.createElement(i.b,{className:"wrap-info",to:e.data.href},r.a.createElement("div",null,r.a.createElement("p",{className:"f-bold ellipsis"},e.data.title),r.a.createElement("p",{className:"ellipsis"},e.data.episodes),r.a.createElement("p",{className:"ellipsis"},e.data.status.replace("Status : ","")))))},X=function(e){return r.a.createElement("div",{className:"grid-wrap"},e.data&&e.data.map((function(e){return r.a.createElement(Q,{data:e,key:e.href})})))},Z=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),i=Object(l.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)(),p=Object(l.a)(d,2),f=p[0],E=p[1],h=Object(o.useParams)().searchKey;return Object(n.useEffect)((function(){var e=sessionStorage.getItem("searchKey");E(e&&!h?e:h)}),[h]),Object(n.useEffect)((function(){if(f){var e=sessionStorage.getItem("searchKey"),t=JSON.parse(sessionStorage.getItem("searchData"));m(!0),e&&Array.isArray(t)&&f===e?(c(t),document.title="results for: "+f,m(!1)):f&&f.trim().length>0&&(m(!0),console.log("triggered"),sessionStorage.setItem("searchKey",f),function(e){return D.apply(this,arguments)}(f).then((function(e){c(e),sessionStorage.setItem("searchData",JSON.stringify(e)),m(!1),document.title="results for: "+f})).catch((function(e){console.log(e),m(!1)})))}}),[f]),r.a.createElement("div",null,r.a.createElement("div",{className:"page-fade-in"},r.a.createElement("div",{className:"hide-lg"},r.a.createElement(B,{autoFocus:!0}),r.a.createElement("div",{className:"spacer"})),f&&f.trim().length>0&&r.a.createElement("div",null,r.a.createElement("div",{className:"ui container  pb-10"},r.a.createElement("h3",null,"results for: ",f)),!u&&a&&0===a.length&&r.a.createElement("p",{className:"text-center pt-10"},"There's no result"),u?r.a.createElement(j,null):r.a.createElement("div",{className:"mb-40"},r.a.createElement(X,{data:a})))),r.a.createElement(W,{active:"Search"}))},$=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(o.useParams)().type,f=Object(n.useState)(!1),E=Object(l.a)(f,2),h=E[0],v=E[1];if(Object(n.useEffect)((function(){d(!0),function(e){return H.apply(this,arguments)}(p).then((function(e){c(e.data),d(!1)})).catch((function(e){console.log(e),d(!1)}))}),[p]),!m&!a)return r.a.createElement(o.Redirect,{to:"/"});function b(e,t,n){v(!0),function(e,t){return J.apply(this,arguments)}(e,"".concat(t,"=").concat(n)).then((function(e){e.deletedCount>0&&c(a.filter((function(e){return e._id!==n}))),v(!1)})).catch((function(){return v(!1)}))}return r.a.createElement("div",{className:"ui container mb-40"},h&&r.a.createElement("p",{className:"fixed-right"},"(processing...)"),r.a.createElement("div",{className:"five ui buttons pb-20"},r.a.createElement(i.b,{to:"log",className:"ui button"},"Log"),r.a.createElement(i.b,{to:"comment",className:"ui button"},"Comment"),r.a.createElement(i.b,{to:"episode",className:"ui button"},"Episode"),r.a.createElement(i.b,{to:"series",className:"ui button"},"Seires"),r.a.createElement(i.b,{to:"home",className:"ui button"},"Home")),m?r.a.createElement(j,null):a&&r.a.createElement("div",null,r.a.createElement("h3",null,"stats: ",p),r.a.createElement("ol",{className:"ui list"},a.map((function(e){return r.a.createElement("li",{key:e._id},e._id,r.a.createElement("span",{onClick:function(){return b(p,"_id",e._id)},className:"float-right cursor-pointer"},"del"),r.a.createElement("ol",null,Object.keys(e).map((function(t,a){return"_id"!==t?t.includes("At")?r.a.createElement("li",{key:a},t,": ",N()(e[t]).fromNow()):r.a.createElement("li",{key:a},t,": ",JSON.stringify(e[t])):r.a.createElement("span",{key:a})}))))})))))},ee=a(18),te=a(37),ae=function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),u=o[0],m=o[1],d=Object(n.useState)([]),p=Object(l.a)(d,2),f=p[0],E=p[1],h=Object(n.useState)(!1),v=Object(l.a)(h,2),b=v[0],g=v[1],N=Object(n.useState)(""),O=Object(l.a)(N,2),w=O[0],y=O[1];Object(n.useEffect)((function(){m(!0),E(e.fields),m(!1)}),[e.fields]);var S=function(e){var t=e.target,a=t.name,n=t.value;s(Object(te.a)({},c,Object(ee.a)({},a,n)))};function x(t){g(!0),t.preventDefault();var a=e.type;if(a&&!b){var n={};(function(e,t){return A.apply(this,arguments)})(c,a).then((function(t){t?(e.clear&&(s(n),g(!1)),e.onSuccess&&e.onSuccess(t)):(y("Something wrong with your input"),e.onError&&e.onError(),g(!1))}))}}return u?r.a.createElement(j,null):r.a.createElement("div",{className:"ui container mb-40"},r.a.createElement("h3",{className:"ui dividing header"},e.title||"Add a new home content"),r.a.createElement("form",{className:"ui form error",onSubmit:function(e){return x(e)}},f&&f.map((function(e){return r.a.createElement("div",{key:e.name||e,className:"field"},r.a.createElement("label",{className:"capitalize"},e.name||e),e.type?r.a.createElement("input",{type:e.type,value:c[e.name]||"",name:e.name,rows:"3",required:e.required,onChange:function(e){return S(e)}}):r.a.createElement("textarea",{value:c[e]||"",name:e,rows:"3",onChange:function(e){return S(e)}}))})),w&&r.a.createElement("p",{className:"color-red"},w),r.a.createElement("button",{className:"ui ".concat(b?"loading":""," button"),type:"submit"},"Submit")))},ne=function(){var e=Object(n.useState)({title:"",inputs:[]}),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){return _.apply(this,arguments)})().then((function(e){console.log(e),c({title:"Add a new content to Home section",inputs:e.data})}))}),[]),r.a.createElement(ae,{type:"home",title:a.title,fields:a.inputs,clear:!0})},re={title:"Authorize Yourself",inputs:[{name:"username",type:"text",required:!0},{name:"password",type:"password",required:!0}]},ce={title:"Register",inputs:[{name:"username",type:"text",required:!0},{name:"password",type:"password",required:!0}]},se=function(e){var t=Object(n.useState)({title:"",inputs:[]}),a=Object(l.a)(t,2),c=a[0],s=a[1],i=Object(o.useHistory)(),u=Object(o.useParams)().type;Object(n.useEffect)((function(){e.user.authenticated&&i.replace("/followed");var t=[];"login"===u?t=re:"register"===u&&(t=ce),s(t)}),[u,i,e.user]);return!c||c.inputs.length<1?r.a.createElement("div",null):r.a.createElement("div",{id:"auth",className:"page-fade-in"},r.a.createElement("span",{className:"fixed-right"},"login"===u?r.a.createElement("span",{onClick:function(){return i.replace("register")},className:"cursor-pointer f-bold"},"Register"):r.a.createElement("span",{onClick:function(){return i.replace("login")},className:"cursor-pointer f-bold"},"Login"),r.a.createElement("span",null,"  |  "),r.a.createElement("span",{onClick:function(){return i.replace("/")},className:" cursor-pointer f-bold"},"Skip")),r.a.createElement(ae,{type:u,title:c.title,fields:c.inputs,onSuccess:function(t){localStorage.setItem("userId",t.data._id+"__"+t.data.username),e.setUser({id:t.data._id,name:t.data.username,authenticated:!0}),i.replace("/")},className:" cursor-pointer f-bold"}))},le=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),i=Object(l.a)(s,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){u(!0),document.title="aniba - Your followed animes";var e=sessionStorage.getItem("followedData");e&&(e=JSON.parse(e)),Array.isArray(e)&&e.length>0&&(c(e),u(!1)),function(){return R.apply(this,arguments)}().then((function(e){e&&e.data&&(c(e.data),sessionStorage.setItem("followedData",JSON.stringify(e.data))),u(!1)})).catch((function(e){console.log(e),u(!1)}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"page-fade-in"},r.a.createElement("div",{className:"pt-sm-20"},r.a.createElement("div",{className:"ui container pb-10"},r.a.createElement("h3",null,"Your Animes")),!o&&a&&0===a.length&&r.a.createElement("div",{className:"centered"},localStorage.getItem("userId")?r.a.createElement("p",{className:"text-center pt-10"},"You have nothing. Open a series and click follow!"):r.a.createElement(U.Link,{to:"/auth/register",className:"my-1 fluid ui blue button"},"Authorize")),o?r.a.createElement(j,null):r.a.createElement("div",{className:"mb-40"},r.a.createElement(X,{data:a})))),r.a.createElement(W,{active:"Followed"}))},ie=function(){var e=Object(n.useState)({id:"",name:"",authenticated:!1}),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("userId");e&&(e=e.split("__"))[0]&&e[1]&&c({id:e[0],name:e[1],authenticated:!0})}),[]),Object(n.useEffect)((function(){var e=window.OneSignal||[];a.authenticated&&e.push((function(){e.setExternalUserId(a.id),e.showSlidedownPrompt()}))}),[a]),r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"hide-xs"},r.a.createElement(B,{showHome:!0,auth:!0}),r.a.createElement("div",{className:"spacer"})),r.a.createElement(o.Switch,null,r.a.createElement(o.Route,{path:"/auth/:type"},r.a.createElement(se,{user:a,setUser:c})),r.a.createElement(o.Route,{path:"/stats/home/new"},r.a.createElement(ne,null)),r.a.createElement(o.Route,{path:"/stats/:type"},r.a.createElement($,null)),r.a.createElement(o.Route,{path:"/series/:seriesId"},r.a.createElement(V,null)),r.a.createElement(o.Route,{path:"/search/:searchKey"},r.a.createElement(Z,null)),r.a.createElement(o.Route,{path:"/search"},r.a.createElement(Z,null)),r.a.createElement(o.Route,{path:"/followed"},r.a.createElement(le,null)),r.a.createElement(o.Route,{path:"/:episodeId"},r.a.createElement(M,null)),r.a.createElement(o.Route,{path:"/"},r.a.createElement(K,null)))))};s.a.render(r.a.createElement(ie,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.db2e24c5.chunk.js.map