(this["webpackJsonpgabriel-diaz-developer"]=this["webpackJsonpgabriel-diaz-developer"]||[]).push([[5],{93:function(e,a,i){"use strict";i.r(a);var s=i(2),t=i(1),n=i.n(t),l=i(15),r=i(4),c=i(0),m=n.a.memo((function(){return Object(c.jsx)("div",{className:"col-lg-4 profile-img","data-aos":"fade-right",children:Object(c.jsx)("img",{loading:"lazy",src:"assets/img/me.jpg",className:"img-fluid",alt:"Profile"})})})),o=i(5),u=function(e){var a=e.name,i=e.value,t=Object(r.a)(),n=Object(s.a)(t,1)[0];return Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"bi bi-chevron-right"}),Object(c.jsxs)("strong",{children:[n(a),":"]}),Object(c.jsx)("span",{children:i.includes("about.")?n(i):i})]})},d=i(11),j=function(e,a){for(var i=[],s=0;s<e.length;s+=a){var t=e.slice(s,s+a);i=[].concat(Object(d.a)(i),[t])}return i},b=[{name:"about.birthday",value:"8 Mar 1998"},{name:"about.age",value:"23"},{name:"about.phone",value:["+52 ","22 ","22 ","52 ","03 ","42"].join("")},{name:"about.email",value:["gabriel",".diaz",".amador",".num",".13","@","gmail.com"].join("")},{name:"about.city",value:"Puebla, M\xe9xico"},{name:"about.freelance",value:"about.avaible"},{name:"about.degree",value:"about.engineering"}],p=function(){var e=j(b,4);return Object(c.jsx)("div",{className:"row",children:e.map((function(e,a){return Object(c.jsx)("div",{className:"col-lg-6",children:Object(c.jsx)("ul",{children:e.map((function(e){return Object(c.jsx)(u,Object(o.a)({},e),e.name)}))})},"divPersonalInfo".concat(a))}))})},g=i(79),h=i(80),x=function(e){var a=e.counterBoxInfo,i=e.showCounter,t=Object(r.a)(),n=Object(s.a)(t,1)[0],l=a.icon,m=a.numberTo,o=a.name,u=a.className;return Object(c.jsx)("div",{className:u,children:Object(c.jsxs)("div",{className:"count-box",children:[Object(c.jsx)("i",{className:l}),i&&Object(c.jsx)(h.a,{delay:300,startNumber:0,to:m}),Object(c.jsx)("p",{children:n(o)})]})})},O=[{icon:"bi bi-journal-richtext",numberTo:8,name:"counters-box.projects",className:"col-lg-4 col-md-6"},{icon:"bi bi-headset",numberTo:1463,name:"counters-box.hours_support",className:"col-lg-4 col-md-6 mt-5 mt-md-0"},{icon:"bi bi-award",numberTo:3,name:"counters-box.awards",className:"col-lg-4 col-md-6 mt-5 mt-lg-0"}],v=n.a.memo((function(){var e=Object(t.useState)(!1),a=Object(s.a)(e,2),i=a[0],n=a[1];return Object(c.jsx)("div",{className:"counts container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(g.a,{onEnter:function(){return n(!0)}}),O.map((function(e){return Object(c.jsx)(x,{counterBoxInfo:e,showCounter:i},e.name)}))]})})})),f=function(e){var a=e.data,i=e.showPercent,t=Object(r.a)(),n=Object(s.a)(t,1)[0],l=a.name,m=a.percent;return Object(c.jsxs)("div",{className:"progress",children:[Object(c.jsxs)("span",{className:"skill",children:[n(l)!==l?n(l):l,Object(c.jsxs)("i",{className:"val",children:[i&&Object(c.jsx)(h.a,{startNumber:0,to:m}),"%"]})]}),Object(c.jsx)("div",{className:"progress-bar-wrap",children:Object(c.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":m,"aria-valuemin":"0","aria-valuemax":"100"})})]})},N=i(20),q=n.a.memo((function(e){var a=e.numColumns,i=e.numRows,n=e.data,l=j(n,i),r=Object(t.useState)(!1),m=Object(s.a)(r,2),o=m[0],u=m[1];return Object(c.jsxs)("div",{className:"row skills-content",children:[Object(c.jsx)(g.a,{onEnter:function(){Object(N.a)(".progress .progress-bar",!0).forEach((function(e){e.style.width=e.getAttribute("aria-valuenow")+"%"})),u(!0)}}),l.map((function(e,i){return Object(c.jsx)("div",{className:"col-lg-".concat(12/a),children:e.map((function(e){return Object(c.jsx)(f,{data:e,showPercent:o},"skill".concat(e.name))}))},"colSkill".concat(i))}))]})})),w=[{name:"interests.programming",icon:"ri-terminal-box-fill",color:"#29cc61",className:"col-lg-3 col-md-4"},{name:"interests.learn",icon:"fas fa-brain",color:"#5578ff",className:"col-lg-3 col-md-4 mt-4 mt-md-0"},{name:"interests.read",icon:"ri-book-read-line",color:"#e80368",className:"col-lg-3 col-md-4 mt-4 mt-md-0"},{name:"interests.drive",icon:"ri-roadster-fill",color:"#e361ff",className:"col-lg-3 col-md-4 mt-4 mt-lg-0"},{name:"interests.explore",icon:"ri-road-map-line",color:"#47aeff",className:"col-lg-3 col-md-4 mt-4"},{name:"interests.talk-friend",icon:"ri-phone-fill",color:"#ffa76e",className:"col-lg-3 col-md-4 mt-4"},{name:"interests.drink-beer",icon:"fas fa-beer",color:"#ffbb2c",className:"col-lg-3 col-md-4 mt-4"},{name:"interests.netflix",icon:"ri-netflix-fill",color:"#db0000",className:"col-lg-3 col-md-4 mt-4"},{name:"interests.videogames",icon:"ri-gamepad-fill",color:"#4233ff",className:"col-lg-3 col-md-4 mt-4"},{name:"interests.social-media",icon:"ri-smartphone-line",color:"#ff5828",className:"col-lg-3 col-md-4 mt-4"}],P=function(e){var a=e.className,i=e.icon,t=e.color,n=e.name,l=Object(r.a)(),m=Object(s.a)(l,1)[0];return Object(c.jsx)("div",{className:a,children:Object(c.jsxs)("div",{className:"icon-box",children:[Object(c.jsx)("i",{className:i,style:{color:t}}),Object(c.jsx)("h3",{children:m(n)})]})})},k=n.a.memo((function(){return Object(c.jsx)("div",{className:"row",children:w.map((function(e){return Object(c.jsx)(P,Object(o.a)({},e),e.name)}))})})),S=i(91),J=i(87),y=i(88),A=i(89),E=i(94),C=i(90),M=function(e){var a=e.testimonial,i=e.imgPath,s=e.name,t=e.position;return Object(c.jsx)("div",{className:"swiper-slide",children:Object(c.jsxs)("div",{className:"testimonial-item",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("i",{className:"bx bxs-quote-alt-left quote-icon-left"}),a,Object(c.jsx)("i",{className:"bx bxs-quote-alt-right quote-icon-right"})]}),Object(c.jsx)("img",{loading:"lazy",src:i,className:"testimonial-img",alt:s}),Object(c.jsx)("h3",{children:s}),Object(c.jsx)("h4",{children:t})]})})},z=[{id:"saul-goodman",testimonial:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",imgPath:"assets/img/testimonials/testimonials-1.jpg",name:"Saul Goodman",position:"Ceo & Founder"},{id:"sara-wilsson",testimonial:"Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",imgPath:"assets/img/testimonials/testimonials-2.jpg",name:"Sara Wilsson",position:"Designer"},{id:"jena-karlis",testimonial:"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",imgPath:"assets/img/testimonials/testimonials-3.jpg",name:"Jena Karlis",position:"Store Owner"},{id:"matt-brandon",testimonial:"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",imgPath:"assets/img/testimonials/testimonials-4.jpg",name:"Matt Brandon",position:"Freelancer"},{id:"john-larson",testimonial:"Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",imgPath:"assets/img/testimonials/testimonials-5.jpg",name:"John Larson",position:"Entrepreneur"}],F=[{id:"saul-goodman",testimonial:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",imgPath:"assets/img/testimonials/testimonials-1.jpg",name:"Saul Goodman",position:"Fundador & Director"},{id:"sara-wilsson",testimonial:"Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",imgPath:"assets/img/testimonials/testimonials-2.jpg",name:"Sara Wilsson",position:"Dise\xf1adora"},{id:"jena-karlis",testimonial:"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",imgPath:"assets/img/testimonials/testimonials-3.jpg",name:"Jena Karlis",position:"Due\xf1o de tienda"},{id:"matt-brandon",testimonial:"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",imgPath:"assets/img/testimonials/testimonials-4.jpg",name:"Matt Brandon",position:"Freelancer"},{id:"john-larson",testimonial:"Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",imgPath:"assets/img/testimonials/testimonials-5.jpg",name:"John Larson",position:"Empresario"}];S.a.use([J.a,y.a,A.a]);var L=n.a.memo((function(){var e=Object(r.a)(),a="en"===Object(s.a)(e,3)[2]?z:F;return Object(c.jsx)("div",{className:"testimonials-slider swiper-container",children:Object(c.jsx)("div",{className:"swiper-wrapper",children:Object(c.jsxs)(E.a,{loop:!0,mousewheel:!0,pagination:{clickable:!0},autoplay:!0,grabCursor:!0,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:2},768:{slidesPerView:3}},children:[a.map((function(e){return Object(c.jsx)(C.a,{children:Object(c.jsx)(M,Object(o.a)({},e))},e.id)})),"..."]})})})})),B=[{name:"HTML",percent:95},{name:"CSS",percent:45},{name:"JavaScript",percent:80},{name:"JQuery",percent:75},{name:"AJAX",percent:80},{name:"React JS",percent:60},{name:"JSON",percent:70},{name:"PHP",percent:80},{name:"Laravel",percent:75},{name:"SQL",percent:85},{name:"Oracle",percent:60},{name:"Bootstrap",percent:80},{name:"Git",percent:35},{name:"WebSockets",percent:35},{name:"Arduino",percent:40}],D=[{name:"languages.es",percent:80},{name:"languages.en",percent:25}];a.default=function(){var e=Object(l.a)(),a=Object(r.a)(),i=Object(s.a)(a,1)[0];return Object(c.jsxs)("section",{id:"about",className:"about ".concat(e),children:[Object(c.jsxs)("div",{className:"about-me container",children:[Object(c.jsxs)("div",{className:"section-title",children:[Object(c.jsx)("h2",{children:i("header.about")}),Object(c.jsx)("p",{children:i("about.learn")})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(m,{}),Object(c.jsxs)("div",{className:"col-lg-8 pt-4 pt-lg-0 content","data-aos":"fade-left",children:[Object(c.jsxs)("h3",{children:[i("words-cursor.web-developer")," Jr."]}),Object(c.jsx)("p",{className:"fst-italic",style:{textAlign:"justify"},children:i("about.message",{name:"Gabriel D\xedaz Amador",web_tools:"PHP, Laravel, JavaScript, AJAX, React,"})}),Object(c.jsx)(p,{})]})]})]}),Object(c.jsx)(v,{}),Object(c.jsxs)("div",{className:"skills container",children:[Object(c.jsx)("div",{className:"section-title",children:Object(c.jsx)("h2",{children:i("about.skills")})}),Object(c.jsx)(q,{numColumns:3,numRows:5,data:B})]}),Object(c.jsxs)("div",{className:"skills container",children:[Object(c.jsx)("div",{className:"section-title",children:Object(c.jsx)("h2",{children:i("about.languages")})}),Object(c.jsx)(q,{numColumns:2,numRows:1,data:D})]}),Object(c.jsxs)("div",{className:"interests container",children:[Object(c.jsx)("div",{className:"section-title",children:Object(c.jsx)("h2",{children:i("about.interests")})}),Object(c.jsx)(k,{})]}),Object(c.jsxs)("div",{className:"testimonials container",children:[Object(c.jsx)("div",{className:"section-title",children:Object(c.jsx)("h2",{children:i("about.testimonials")})}),Object(c.jsx)(L,{})]})]})}}}]);
//# sourceMappingURL=5.e61e3846.chunk.js.map