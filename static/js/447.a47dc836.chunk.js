"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[447],{447:function(t,n,r){r.r(n),r.d(n,{default:function(){return m}});var e,u,a,c=r(885),i=r(791),s=r(689),o=r(390),f=r(168),p=r(444),h=p.ZP.li(e||(e=(0,f.Z)(["\n  margin-bottom: 32px;\n"]))),v=p.ZP.p(u||(u=(0,f.Z)(["\n  margin-top: 8px;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),d=p.ZP.p(a||(a=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n"]))),l=r(184),m=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),r=n[0],e=n[1],u=(0,s.UO)().movieId;return(0,i.useEffect)((function(){(0,o.tx)(u).then(e).catch((function(t){return console.log(t)}))}),[u]),0===r.length?"There are no reviews for this film yet":(0,l.jsx)("ul",{children:r.map((function(t){var n=t.id,r=t.author,e=t.content;return(0,l.jsxs)(h,{children:[(0,l.jsxs)(d,{children:["Author: ",r]}),(0,l.jsx)(v,{children:e})]},n)}))})}},390:function(t,n,r){r.d(n,{M1:function(){return f},TP:function(){return o},qF:function(){return s},rj:function(){return i},tx:function(){return p}});var e=r(861),u=r(757),a=r.n(u),c=r(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3",c.ZP.defaults.params={api_key:"5bf2301def796bd57cd8c3257ce93f54",language:"en-US"};var i=function(){var t=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/search/movie?query=".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=447.a47dc836.chunk.js.map