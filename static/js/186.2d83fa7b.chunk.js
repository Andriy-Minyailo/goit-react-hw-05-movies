"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var c=t(861),a=t(439),r=t(757),i=t.n(r),o=t(184),u=function(e){var n=e.reviews;return(0,o.jsx)(o.Fragment,{children:n.map((function(e){var n=e.id,t=e.author,c=e.content;return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:t}),(0,o.jsx)("p",{children:c})]},n)}))})},v=t(791),l=t(689),s=new(t(790).q),g=function(){var e=(0,l.UO)().movieId,n=(0,v.useState)([]),t=(0,a.Z)(n,2),r=t[0],g=t[1];return(0,v.useEffect)((function(){var n=function(){var n=(0,c.Z)(i().mark((function n(){var t,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.movieReviews(e);case 3:t=n.sent,c=t.data.results,g(c),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,o.jsx)(o.Fragment,{children:r.length?(0,o.jsx)("ul",{children:(0,o.jsx)(u,{reviews:r})}):(0,o.jsx)("p",{children:"We don't have any reviews for this movie"})})}},790:function(e,n,t){t.d(n,{q:function(){return i}});var c=t(671),a=t(144),r=t(243),i=function(){function e(){(0,c.Z)(this,e)}return(0,a.Z)(e,[{key:"trendingDay",value:function(){return r.Z.get("".concat(e.url,"trending/movie/day?api_key=").concat(e.key))}},{key:"trendingWeek",value:function(){return r.Z.get("".concat(e.url,"trending/movie/week?api_key=").concat(e.key))}},{key:"newFilms",value:function(){return r.Z.get("".concat(e.url,"movie/upcoming?api_key=").concat(e.key,"&language=en-US&page=1"))}},{key:"searchMovies",value:function(n){return r.Z.get("".concat(e.url,"search/movie?api_key=").concat(e.key,"&language=en-US&query=").concat(n))}},{key:"movieDetails",value:function(n){return r.Z.get("".concat(e.url,"movie/").concat(n,"?api_key=").concat(e.key,"&language=en-US"))}},{key:"movieVideos",value:function(n){return r.Z.get("".concat(e.url,"movie/").concat(n,"/videos?api_key=").concat(e.key,"&language=en-US"))}},{key:"movieGenre",value:function(){return r.Z.get("".concat(e.url,"genre/movie/list?api_key=").concat(e.key,"&language=en-US"))}},{key:"movieCountries",value:function(){return r.Z.get("".concat(e.url,"configuration/countries?api_key=").concat(e.key))}},{key:"movieTrailer",value:function(n){return r.Z.get("".concat(e.url,"movie/").concat(n,"/videos?api_key=").concat(e.key,"&language=en-US"))}},{key:"movieImage",value:function(e){return r.Z.get("https://image.tmdb.org/t/p/original/".concat(e))}},{key:"movieReviews",value:function(n){return r.Z.get("".concat(e.url,"movie/").concat(n,"/reviews?api_key=").concat(e.key,"&language=en-US"))}},{key:"movieCast",value:function(n){return r.Z.get("".concat(e.url,"movie/").concat(n,"/credits?api_key=").concat(e.key,"&language=en-US"))}}]),e}();i.url="https://api.themoviedb.org/3/",i.key="ce77ddb03ebd0577ea6b19d0dd53be3c"}}]);
//# sourceMappingURL=186.2d83fa7b.chunk.js.map