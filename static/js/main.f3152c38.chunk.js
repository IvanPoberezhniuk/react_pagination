(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t){},135:function(e,t){},179:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(79),s=n.n(c),o=n(41),i=n.n(o),l=n(80),u=n(81),p=n(82),g=n(84),m=n(83),P=n(85),f=(n(92),function(){return r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),h=n(43),d=function(e){var t,n=e.prevPage,a=e.nextPage,c=e.pagesCount,s=e.changePage,o=e.currentPage,i=(t=o,c<6?new Array(c).fill("").map(function(e,t){return t+1}):t<4?[1,2,3,4,5,"...",c]:t>=4&&t<c-4?[1,"...",t,t+1,t+2,"...",c]:[1,"...",c-4,c-3,c-2,c-1,c]);return r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"pagination__button",onClick:n},"\xab"),i.map(function(e,t){return r.a.createElement("li",{className:"pagination__button ".concat(o+1===e?"pagination__button--active":null),key:h.generate(5),onClick:parseInt(e,10)?function(){return s(e-1)}:null},e)}),r.a.createElement("li",{className:"pagination__button",onClick:a},"\xbb"))},v="https://jsonplaceholder.typicode.com",E=n(43),b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(g.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],isLoaded:!1,currentPage:0,postsPerPage:10,pagesCount:""},n.changePage=function(e){n.setState({currentPage:e})},n.changePostsPerPage=function(e){var t=e.target.value;n.setState(function(e){return{postsPerPage:t,pagesCount:Math.ceil(e.posts.length/t)}})},n.spliceList=function(){var e=n.state,t=e.posts,a=e.currentPage,r=e.postsPerPage;return t.slice(a*r,(a+1)*r)},n.nextPage=function(){n.setState(function(e){return{currentPage:Math.min(e.currentPage+1,e.pagesCount-1)}})},n.prevPage=function(){n.setState(function(e){return{currentPage:Math.max(e.currentPage-1,0)}})},n}return Object(P.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(Object(l.a)(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v,"/posts")).then(function(e){return e.json()});case 2:n=t.sent;try{e.setState(function(e){return{posts:n,pagesCount:n.length/e.postsPerPage,isLoaded:!0}})}catch(a){e.setState({error:a})}case 4:case"end":return t.stop()}},t)})),1e3)}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.pagesCount,a=e.currentPage,c=e.postsPerPage,s=this.spliceList();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"myApp"},r.a.createElement("h1",null,"Simple List"),r.a.createElement("label",{htmlFor:"postsPerPage",className:"postsPerPage"},"Per page:",r.a.createElement("select",{defaultValue:"10",name:"postsPerPage",onChange:this.changePostsPerPage},r.a.createElement("option",{name:"3",id:""},"3"),r.a.createElement("option",{name:"5",id:""},"5"),r.a.createElement("option",{name:"10",id:""},"10"),r.a.createElement("option",{name:"20",id:""},"20"))),r.a.createElement("ul",{className:"list"},t?s.map(function(e){return r.a.createElement("li",{className:"list__item",key:E.generate(5)},"".concat(e.id,"."),r.a.createElement("span",{className:"list__item--title"},e.title))}):r.a.createElement(f,null)),r.a.createElement(d,{currentPage:a,changePage:this.changePage,nextPage:this.nextPage,prevPage:this.prevPage,pagesCount:n,postsPerPage:c})))}}]),t}(r.a.Component);s.a.render(r.a.createElement(b,null),document.getElementById("root"))},86:function(e,t,n){e.exports=n(179)},92:function(e,t,n){},97:function(e,t){},99:function(e,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.f3152c38.chunk.js.map