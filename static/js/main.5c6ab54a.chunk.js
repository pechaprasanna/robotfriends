(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=n(5),i=n(1),l=n(15),u=n(16),h={searchField:""},d={isPending:!1,robots:[],error:""},b=(n(28),n(3)),p=n(4),m=n(7),E=n(6),g=function(e){var t=e.name,n=e.id,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,r)))},f=function(e){var t=e.robots;return Object.keys(t).length>0?a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(g,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}))):a.a.createElement("h3",null,"No Results")},v=function(e){e.searchField;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},O=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},y=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops. Something went wrong!"):this.props.children}}]),n}(r.Component),R=(n(29),n(11)),S=n.n(R),j=n(17);function w(){return(w=Object(j.a)(S.a.mark((function e(t){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_ROBOTS_PENDING"}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.next=10,t({type:"REQUEST_ROBOTS_SUCCESS",payload:r});case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,t({type:"REQUEST_ROBOTS_FAILED",payload:e.t0});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var C=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h3",{className:"tc f2"},"Loading ... "):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(v,{searchChange:n}),a.a.createElement(O,null,a.a.createElement(y,null,a.a.createElement(f,{robots:c}))))}}]),n}(r.Component),_=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return function(e){return w.apply(this,arguments)}(e)}}}))(C);n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=Object(l.createLogger)(),N=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(i.d)(N,Object(i.a)(u.a,k));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:T},a.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5c6ab54a.chunk.js.map