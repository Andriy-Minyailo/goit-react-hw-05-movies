"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(861),c=n(439),r=n(757),i=n.n(r),o="CastList_img__53y+T",u=n(184),s=function(e){var t=e.cast;return(0,u.jsx)(u.Fragment,{children:t.map((function(e){var t=e.id,n=e.character,a=e.name,c=e.profile_path;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{className:o,src:c?"https://image.tmdb.org/t/p/w200".concat(c):"https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_150.jpg",alt:a}),(0,u.jsx)("p",{children:a}),(0,u.jsxs)("p",{children:["Character: ",n]})]},t)}))})},l=n(791),v=n(689),p=new(n(790).q),d=function(){var e=(0,v.UO)().movieId,t=(0,l.useState)([]),n=(0,c.Z)(t,2),r=n[0],o=n[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.movieCast(e);case 3:n=t.sent,a=n.data.cast,o(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,u.jsx)(u.Fragment,{children:r.length?(0,u.jsx)("ul",{children:(0,u.jsx)(s,{cast:r})}):(0,u.jsx)("p",{children:"We don't have any acteurs for this movie"})})}},790:function(e,t,n){n.d(t,{q:function(){return i}});var a=n(671),c=n(144),r=n(243),i=function(){function e(){(0,a.Z)(this,e)}return(0,c.Z)(e,[{key:"trendingDay",value:function(){return r.Z.get("".concat(e.url,"trending/movie/day?api_key=").concat(e.key))}},{key:"searchMovies",value:function(t){return r.Z.get("".concat(e.url,"search/movie?api_key=").concat(e.key,"&language=en-US&query=").concat(t))}},{key:"movieDetails",value:function(t){return r.Z.get("".concat(e.url,"movie/").concat(t,"?api_key=").concat(e.key,"&language=en-US"))}},{key:"movieReviews",value:function(t){return r.Z.get("".concat(e.url,"movie/").concat(t,"/reviews?api_key=").concat(e.key,"&language=en-US"))}},{key:"movieCast",value:function(t){return r.Z.get("".concat(e.url,"movie/").concat(t,"/credits?api_key=").concat(e.key,"&language=en-US"))}}]),e}();i.url="https://api.themoviedb.org/3/",i.key="ce77ddb03ebd0577ea6b19d0dd53be3c"}}]);
//# sourceMappingURL=736.af5d2ab2.chunk.js.map