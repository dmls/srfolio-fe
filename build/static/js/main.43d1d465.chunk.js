(this["webpackJsonpsrfolio-fe"]=this["webpackJsonpsrfolio-fe"]||[]).push([[0],{106:function(e,t,a){e.exports=a(233)},112:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(98),c=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(111),a(112);var i=a(99),o=a(14),s=a(15),u=a(115),m=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"getNavLinks",value:function(){return new Promise((function(e){u.get(window.cms_url+"/nav-links").then((function(t){e(t.data)}))}))}},{key:"getPage",value:function(e){return new Promise((function(t){e=""===e||"/"===e?"":e,u.get(window.cms_url+"/pages?UID="+e).then((function(e){t(e.data[0])}))}))}}]),e}(),v=a(18),f=a(17),d=a(102),p=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={active:!1},n}return Object(s.a)(a,[{key:"getItemElements",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.items.map((function(e,t){return r.a.createElement("a",{href:e.url||"/",className:"fpsNavItem",key:t},r.a.createElement("div",{className:"fpsNavItem-textContainer center-vertical"},r.a.createElement("div",{className:"fpsNavItem-text center-vertical"},e.label)))})))}},{key:"render",value:function(){var e=this.getItemElements();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fpsNav fpsNav-desktop"+(this.props.active?" active":"")},e),r.a.createElement("div",{className:"fpsNav fpsNav-mobile"+(this.props.active?" active":"")},e))}}]),a}(r.a.Component),h=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={navActive:!1,navItems:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.initNavItems()}},{key:"initNavItems",value:function(){var e=this;(new m).getNavLinks().then((function(t){e.setState({navItems:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{items:this.state.navItems,active:this.state.navActive}),r.a.createElement("div",{className:"fpsHeader"},r.a.createElement(d.Slider,{className:"float-right",color:"#fff",active:this.state.navActive,onClick:function(){e.setState({navActive:!e.state.navActive})}})))}}]),a}(r.a.Component),E=a(103),g=a(105),b=a(234),w=a(235),y=a(236),j=a(239),N=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(b.a,{className:"banner text-center text-white",fluid:!0,style:e.Darken?{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+window.cms_url+e.Image.url+") no-repeat center center fixed"}:{background:'url("'+window.cms_url+e.Image.url+'")'}},r.a.createElement(w.a,{className:"center-vertical"},r.a.createElement(y.a,null,r.a.createElement(w.a,null,r.a.createElement("h1",null,e.Heading),r.a.createElement("h4",null,e.Subheading||""))),null!==e.CTA_Label&&r.a.createElement(y.a,{className:"my-4"},r.a.createElement(w.a,null,r.a.createElement(j.a,{href:e.CTA_URL||"",target:e.CTA_Newtab?"_blank":""},e.CTA_Label)))),e.Arrow&&r.a.createElement(E.a,{className:"bannerArrow",icon:g.a,size:"4x"}))}}]),a}(r.a.Component),O=a(50),k=a.n(O),_=a(238),I=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data,t=12/e.Columns;return r.a.createElement(b.a,{className:"my-5"},r.a.createElement(y.a,null,e.Cardsingle.map((function(e,a){return r.a.createElement(w.a,{key:a,className:"mb-5 col-12 col-md-"+t},r.a.createElement(_.a,null,r.a.createElement(_.a.Img,{src:window.cms_url+e.Img.url}),r.a.createElement(_.a.Body,null,r.a.createElement(_.a.Title,null,e.Heading),r.a.createElement(_.a.Text,{dangerouslySetInnerHTML:{__html:k()(e.Text)}}))))}))))}}]),a}(r.a.Component),C=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(b.a,{fluid:"full_width"===e.Size,className:"py-5 my-5 text-"+(null!==e.Align?e.Align:"left")},r.a.createElement(y.a,null,r.a.createElement(w.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:k()(e.Content)}}))))}}]),a}(r.a.Component),A=a(237),T={General_Banner:N,General_Cardgallery:I,General_Textarea:C,General_Widecard:function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(b.a,{className:"my-5"},r.a.createElement(y.a,null,"right"!==e.Image_Position&&r.a.createElement(w.a,{className:"col-12 col-sm-4"},r.a.createElement(A.a,{fluid:!0,src:window.cms_url+e.Image.url})),r.a.createElement(w.a,{className:"col-12 col-sm-8 my-4"},r.a.createElement("div",{className:"center-vertical"},r.a.createElement(y.a,null,r.a.createElement(w.a,null,r.a.createElement("h1",null,e.Title))),r.a.createElement(y.a,null,r.a.createElement(w.a,null,e.Text)))),"right"===e.Image_Position&&r.a.createElement(w.a,{className:"col-12 col-sm-4"},r.a.createElement(A.a,{fluid:!0,src:window.cms_url+e.Image.url}))))}}]),a}(r.a.Component)},x=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=void 0!==this.props.data.Components?this.props.data.Components:[];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(r.a.Fragment,null,e.map((function(e,t){var a=e.__component.replace(/\./g," ");a=a.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join("_");var n=T[a];return r.a.createElement(n,{data:e,key:t})}))))}}]),a}(r.a.Component);window.cms_url="http://localhost:1337";var L=new Promise((function(e){var t=new m,a=window.location.pathname.substr(1);t.getPage(a).then((function(a){void 0!==a&&e(a),L=t.getPage("404").then((function(t){e(t)}))}))}));L.then((function(e){c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement("title",null,e.Title)),r.a.createElement(x,{data:e})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.43d1d465.chunk.js.map