(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/product-image-1.34366440.jpg"},16:function(e,t,n){e.exports=n.p+"static/media/product-image-2.a1c47fdf.jpg"},17:function(e,t,n){e.exports=n.p+"static/media/product-image-3.ab416b5c.jpg"},18:function(e,t,n){e.exports=n.p+"static/media/product-image-4.57aad098.jpg"},19:function(e,t,n){e.exports=n.p+"static/media/product-image-5.6a833da0.jpg"},22:function(e,t,n){e.exports=n(46)},28:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(20),c=n.n(r),o=n(1),s=n(2),l=n(4),u=n(3),d=n(5),m=(n(28),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{id:"heading"},"Eames Plastic Side Chair"),i.a.createElement("h4",{id:"subheading"},"von Charles und Ray Eames"))}}]),t}(i.a.Component)),p=n(21),h=n(8),b=n.n(h),f=(n(14),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).items=[n(15),n(16),n(17),n(18),n(19)],a.state={currentIndex:0,responsive:{750:{items:1},1024:{items:3}},galleryItems:a.galleryItems()},a.slideTo=function(e){return a.setState({currentIndex:e})},a.onSlideChanged=function(e){return a.setState({currentIndex:e.item})},a.slideNext=function(){return a.setState({currentIndex:a.state.currentIndex+1})},a.slidePrev=function(){return a.setState({currentIndex:a.state.currentIndex-1})},a.thumbItem=function(e,t){return i.a.createElement("span",{onClick:function(){return a.slideTo(t)}},i.a.createElement("img",{src:e,alt:"productimage+i",id:"responsive-thumbnail-image"}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"galleryItems",value:function(){return this.items.map(function(e){return i.a.createElement("img",{key:e,src:e,alt:"productimage+i",id:"responsive-gallery-image"})})}},{key:"render",value:function(){var e=this.state,t=e.galleryItems,n=e.responsive,a=e.currentIndex;return i.a.createElement("div",null,i.a.createElement(b.a,Object(p.a)({dotsDisabled:!1,buttonsDisabled:!0,items:t,responsive:n,slideToIndex:a,onSlideChanged:this.onSlideChanged,infinite:!1,keysControlDisabled:!1,playButtonEnabled:!1,autoPlay:!1,showSlideIndex:!0,preventEventOnTouchMove:!1},"buttonsDisabled",!0)),i.a.createElement("ul",null,this.items.map(this.thumbItem)))}}]),t}(i.a.Component)),g=(i.a.Component,i.a.Component,function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={todos:[{id:1,title:"Take out the trash",completed:!1},{id:2,title:"Dinner with wife",completed:!1},{id:3,title:"Meeting with boss",completed:!1}]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.state.todos),i.a.createElement("div",{className:"App"},i.a.createElement(m,null),i.a.createElement(f,null))}}]),t}(a.Component));c.a.render(i.a.createElement(g,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e207dcaf.chunk.js.map