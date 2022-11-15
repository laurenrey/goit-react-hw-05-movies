"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[770],{770:function(A,t,r){r.r(t),r.d(t,{default:function(){return j}});var n,e,c=r(885),a=r(791),u=r(689),i=r(390),s=r(168),o=r(444),f=o.ZP.li(n||(n=(0,s.Z)(["\n  margin-bottom: 32px;\n  width: 200px;\n"]))),y=o.ZP.p(e||(e=(0,s.Z)(["\n  margin-top: 8px;\n  font-size: 16px;\n"]))),d=r(188),p=r(184),j=function(){var A=(0,a.useState)([]),t=(0,c.Z)(A,2),r=t[0],n=t[1],e=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,i.M1)(e).then(n).catch((function(A){return console.log(A)}))}),[e]),0===r.length?"We don't have any cast information on this movie.":(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:r.map((function(A){var t=A.profile_path,r=A.name,n=A.character,e=A.id;return(0,p.jsxs)(f,{children:[(0,p.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w200").concat(t):d,alt:"",width:"200"}),(0,p.jsx)(y,{children:r}),(0,p.jsxs)(y,{children:["Character: ",n]})]},e)}))})})}},390:function(A,t,r){r.d(t,{M1:function(){return o},TP:function(){return s},qF:function(){return i},rj:function(){return u},tx:function(){return f}});var n=r(861),e=r(757),c=r.n(e),a=r(44);a.ZP.defaults.baseURL="https://api.themoviedb.org/3",a.ZP.defaults.params={api_key:"5bf2301def796bd57cd8c3257ce93f54",language:"en-US"};var u=function(){var A=(0,n.Z)(c().mark((function A(){var t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.ZP.get("/trending/movie/day");case 2:return t=A.sent,A.abrupt("return",t.data.results);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),i=function(){var A=(0,n.Z)(c().mark((function A(t){var r;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.ZP.get("/search/movie?query=".concat(t));case 2:return r=A.sent,A.abrupt("return",r.data.results);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),s=function(){var A=(0,n.Z)(c().mark((function A(t){var r;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.ZP.get("/movie/".concat(t));case 2:return r=A.sent,A.abrupt("return",r.data);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),o=function(){var A=(0,n.Z)(c().mark((function A(t){var r;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.ZP.get("/movie/".concat(t,"/credits"));case 2:return r=A.sent,A.abrupt("return",r.data.cast);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),f=function(){var A=(0,n.Z)(c().mark((function A(t){var r;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.ZP.get("/movie/".concat(t,"/reviews"));case 2:return r=A.sent,A.abrupt("return",r.data.results);case 4:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}()},188:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=770.ab6de0e5.chunk.js.map