(this["webpackJsonpgabriel-diaz-developer"]=this["webpackJsonpgabriel-diaz-developer"]||[]).push([[0],{10:function(e,t,a){"use strict";t.a={home:"[haveBeenVisited] home",contact:"[haveBeenVisited] contact",portfolio:"[haveBeenVisited] portfolio"}},15:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(2),c=a(1),o=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),a=t[0],o=t[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){return o("section-show")}),150);return function(){return clearTimeout(e)}}),[]),a}},20:function(e,t,a){"use strict";var n=a(11);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.trim(),t?Object(n.a)(document.querySelectorAll(e)):document.querySelector(e)}},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(2),c=a(1),o=a(4),r=a(28),s=new(a(61))("Bienaventurados los pobres de esp\xedritu, porque de ellos es el Reino de los Cielos."),i=a(5),l=a(10),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a.home:return Object(i.a)(Object(i.a)({},e),{},{home:!1});case l.a.portfolio:return Object(i.a)(Object(i.a)({},e),{},{portfolio:!1});case l.a.contact:return Object(i.a)(Object(i.a)({},e),{},{contact:!1});default:return e}},d={home:!0,portfolio:!0,contact:!0},b=function(){if(null!==localStorage.getItem("tourState")){var e=function(e){var t=s.decrypt(s.base64Decode(e));return s.trimZeros(t)}(localStorage.getItem("tourState"));return JSON.parse(e)}return d},m=function(){var e=Object(c.useReducer)(u,{},b),t=Object(n.a)(e,2),a=t[0],o=t[1];return Object(c.useEffect)((function(){var e=function(e){var t=s.encrypt(e);return s.base64Encode(t)}(JSON.stringify(a));localStorage.setItem("tourState",e)}),[a]),[function(e){o({type:e})},function(e){switch(e){case l.a.home:return a.home;case l.a.portfolio:return a.portfolio;case l.a.contact:return a.contact;default:return a}}]},h=a(0),j=function(e){var t=e.useModalOverlay,a=e.type,o=Object(c.useContext)(r.b);Object(c.useEffect)((function(){o.options.useModalOverlay=t}),[o,t]);var s=m(),i=Object(n.a)(s,2),l=i[0],u=i[1];return["close","cancel","complete","hide"].forEach((function(e){return o.on(e,(function(){return l(a)}))})),o.on("start",(function(){setTimeout((function(){return!u(a)&&o.hide()}),10)})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"btnRemoveOverlay",onClick:function(){return o.options.useModalOverlay=!1},style:{display:"none"},children:"Remove Overlay"}),Object(h.jsx)("button",{className:"button-dark",onClick:o.start,style:{display:"none"},children:"Start Tour"})]})},p=[{action:function(){return this.back()},classes:"button button-small",text:'<i class="bi bi-caret-left-fill"></i>'},{action:function(){return this.next()},classes:"button button-small",text:'<i class="bi bi-caret-right-fill"></i>'}],f={defaultStepOptions:{arrow:!1,cancelIcon:{enabled:!0},classes:"react-tour",highlightClass:"highlight",modalOverlayOpeningPadding:10,when:{show:function(){var e=document.createElement("h4"),t=document.createElement("span");t.classList.add("position-absolute","top-100","start-50","translate-middle","badge","rounded-pill","bg-success"),t.innerText="".concat(this.tour.steps.indexOf(this.tour.currentStep)+1,"/").concat(this.tour.steps.length);var a=this.tour.currentStep.el,n=a.querySelector(".shepherd-header");e.insertAdjacentElement("afterBegin",t),n.insertBefore(e,a.querySelector(".shepherd-cancel-icon"))}}},exitOnEsc:!1,keyboardNavigation:!1},v={defaultTour:{contact:[{attachTo:{element:"#formContact",on:"top"},buttons:[p[1]],text:"You can use this form to send me an email."}]},computerTour:{home:[{advanceOn:{selector:".btn-handle-toogle",event:"click"},attachTo:{element:".btn-handle-toogle",on:"bottom"},text:"Use this button to change the language of the web page."}],portfolio:[{attachTo:{element:"#portfolio-flters",on:"bottom"},buttons:p,text:"Click on any of the filters to get the projects of that classification."},{advanceOn:{selector:".portfolio-wrap",event:"mouseover"},attachTo:{element:".portfolio-wrap",on:"bottom"},buttons:p,text:"Place your mouse in the center of the project image."},{advanceOn:{selector:".btn-portfolio",event:"click"},attachTo:{element:".btn-portfolio",on:"bottom"},buttons:[p[0],{action:function(){document.querySelector(".btn-portfolio").click()},classes:"button button-small",text:'<i class="bi bi-caret-right-fill"></i>'}],text:"Click on this button to see the project details."},{advanceOn:{selector:".arrow-left",event:"click"},attachTo:{element:".arrow-left",on:"right"},beforeShowPromise:function(){return new Promise((function(e){document.querySelector(".btnRemoveOverlay").click(),e()}))},buttons:[p[1]],text:"Use this button to change to the previous project"},{advanceOn:{selector:".arrow-right",event:"click"},attachTo:{element:".arrow-right",on:"left"},buttons:p,text:"Use this button to change to the next project."},{advanceOn:{selector:".carousel-control-prev",event:"click"},attachTo:{element:".carousel-control-prev",on:"right"},buttons:p,text:"Click on this part to see the previous image"},{advanceOn:{selector:".carousel-control-next",event:"click"},attachTo:{element:".carousel-control-next",on:"left"},buttons:p,text:"Click on this part to see the next image."}]},phoneTour:{home:[{advanceOn:{selector:".mobile-nav-toggle",event:"click"},attachTo:{element:".mobile-nav-toggle",on:"bottom"},text:"Click on hamburger menu."},{advanceOn:{selector:".btn-handle-toogle",event:"click"},attachTo:{element:".btn-handle-toogle"},text:"Use this button to change the language of the web page."}],portfolio:[{attachTo:{element:"#portfolio-flters",on:"bottom"},buttons:p,text:"Click on any of the filters to get the projects of that classification."},{advanceOn:{selector:".btn-portfolio",event:"click"},attachTo:{element:".portfolio-wrap",on:"top"},buttons:[p[0],{action:function(){document.querySelector(".btn-portfolio").click()},classes:"button button-small",text:'<i class="bi bi-caret-right-fill"></i>'}],text:"Touch the pictura and then touch the chain icon to view the project details."},{advanceOn:{selector:".modal-body",event:"click"},attachTo:{element:".modal-body"},beforeShowPromise:function(){return new Promise((function(e){document.querySelector(".btnRemoveOverlay").click(),e()}))},buttons:[p[1]],classes:"sherpherdTo75Percent",text:"Click on the buttons at the every side of the window, or if the buttons aren't visible, click on every side of the window to change of project."},{advanceOn:{selector:".carousel-control-prev",event:"click"},attachTo:{element:".carousel-control-prev",on:"right"},buttons:p,classes:"sherpherdTo75Percent",text:"Click on this part to see the previous image."},{advanceOn:{selector:".carousel-control-next",event:"click"},attachTo:{element:".carousel-control-next",on:"left"},buttons:p,classes:"sherpherdTo75Percent",text:"Click on this part to see the next image."}]}},O={defaultTour:{contact:[{attachTo:{element:"#formContact",on:"top"},buttons:[p[1]],text:"Puedes usar este formulario para enviarme un correo electr\xf3nico."}]},computerTour:{home:[{advanceOn:{selector:".btn-handle-toogle",event:"click"},attachTo:{element:".btn-handle-toogle",on:"bottom"},text:"Utiliza este bot\xf3n para cambiar el idioma de la p\xe1gina web."}],portfolio:[{attachTo:{element:"#portfolio-flters",on:"bottom"},buttons:p,text:"Da click en cualquiera de los filtros para obtener los proyectos de esa clasificaci\xf3n."},{advanceOn:{selector:".portfolio-wrap",event:"mouseover"},attachTo:{element:".portfolio-wrap",on:"bottom"},buttons:p,text:"Posiciona tu rat\xf3n al centro de la imagen del proyecto."},{advanceOn:{selector:".btn-portfolio",event:"click"},attachTo:{element:".btn-portfolio",on:"bottom"},buttons:[p[0],{action:function(){document.querySelector(".btn-portfolio").click()},classes:"button button-small",text:'<i class="bi bi-caret-right-fill"></i>'}],text:"Da click en este bot\xf3n para ver los detalles del proyecto."},{advanceOn:{selector:".arrow-left",event:"click"},attachTo:{element:".arrow-left",on:"right"},beforeShowPromise:function(){return new Promise((function(e){document.querySelector(".btnRemoveOverlay").click(),e()}))},buttons:[p[1]],text:"Usa este bot\xf3n para ver el portafolio anterior a este."},{advanceOn:{selector:".arrow-right",event:"click"},attachTo:{element:".arrow-right",on:"left"},buttons:p,text:"Usa este bot\xf3n para ver el portafolio siguiente a este."},{advanceOn:{selector:".carousel-control-prev",event:"click"},attachTo:{element:".carousel-control-prev",on:"right"},buttons:p,text:"Click en esta parte para ver la imagen anterior."},{advanceOn:{selector:".carousel-control-next",event:"click"},attachTo:{element:".carousel-control-next",on:"left"},buttons:p,text:"Click en esta parte para ver la imagen siguiente."}]},phoneTour:{home:[{advanceOn:{selector:".mobile-nav-toggle",event:"click"},attachTo:{element:".mobile-nav-toggle",on:"bottom"},text:"Da click en el men\xfa hamburguesa."},{advanceOn:{selector:".btn-handle-toogle",event:"click"},attachTo:{element:".btn-handle-toogle"},text:"Utiliza este bot\xf3n para cambiar el idioma de la p\xe1gina web."}],portfolio:[{attachTo:{element:"#portfolio-flters",on:"bottom"},buttons:p,text:"Da click en cualquiera de los filtros para obtener los proyectos de esa clasificaci\xf3n."},{advanceOn:{selector:".btn-portfolio",event:"click"},attachTo:{element:".portfolio-wrap",on:"top"},buttons:[p[0],{action:function(){document.querySelector(".btn-portfolio").click()},classes:"button button-small",text:'<i class="bi bi-caret-right-fill"></i>'}],text:"Toca la imagen y despu\xe9s toca el \xedcono de cadena para ver los detalles de los proyectos."},{advanceOn:{selector:".modal-body",event:"click"},attachTo:{element:".modal-body"},beforeShowPromise:function(){return new Promise((function(e){document.querySelector(".btnRemoveOverlay").click(),e()}))},buttons:[p[1]],classes:"sherpherdTo75Percent",text:"Da click en los botones extremos de la ventana, o si no est\xe1n visibles los botones, da click en los extremos de la ventana para cambiar de proyecto."},{advanceOn:{selector:".carousel-control-prev",event:"click"},attachTo:{element:".carousel-control-prev",on:"right"},buttons:p,classes:"sherpherdTo75Percent",text:"Click en esta parte para ver la imagen anterior."},{advanceOn:{selector:".carousel-control-next",event:"click"},attachTo:{element:".carousel-control-next",on:"left"},buttons:p,classes:"sherpherdTo75Percent",text:"Click en esta parte para ver la imagen siguiente."}]}},x=function(e){var t=e.useModalOverlay,a=e.pageName,s=e.type,i=Object(o.a)(),l=Object(n.a)(i,3)[2];return Object(c.useEffect)((function(){document.querySelector(".button-dark").click()}),[]),Object(h.jsx)(r.a,{tourOptions:f,steps:function(){var e="en"===l?v:O;return void 0!==e.defaultTour[a]?e.defaultTour[a]:(window.innerWidth>992?e.computerTour:e.phoneTour)[a]}(),children:Object(h.jsx)(j,{useModalOverlay:t,type:s})})};x.defaultProps={useModalOverlay:!0}},4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(2),c=a(73),o=function(){var e=Object(c.a)(["global"]),t=Object(n.a)(e,2),a=t[0],o=t[1];return[a,function(){var e="en"===o.language?"es":"en";o.changeLanguage(e),document.querySelector("#navbar").classList.contains("navbar-mobile")&&document.querySelector(".bi").click()},o.language]}},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(32),r=a.n(o),s=a(16),i=a(3),l=a(2),u=a(4),d=a(23),b=a(0),m=function(){var e=function(){var e=Object(u.a)(),t=Object(l.a)(e,1)[0],a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],r=c[1];return Object(n.useEffect)((function(){var e=[t("words-cursor.web-developer"),t("words-cursor.front-end-dev"),t("words-cursor.back-end-dev")],a=!1,n="",c=0,o=setInterval((function(){n.length>0&&!a?(n=n.slice(0,-1),r(n)):a=!0,a&&(n.length<e[c].length?(n=e[c].slice(0,n.length+1),r(n)):(c<e.length&&c++,a=!1)),c===e.length&&(c=0)}),100);return function(){return clearInterval(o)}}),[t]),o}();return Object(b.jsxs)("span",{children:[e,Object(b.jsx)("span",{className:"cursor",children:"|"})]})},h=a(5),j=a(20),p=function(e){var t=e.path,a=e.name,n=Object(u.a)(),c=Object(l.a)(n,1)[0];return Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{className:"nav-link",activeClassName:"active",to:t,onClick:function(){var e=Object(j.a)("#navbar");if(e.classList.contains("navbar-mobile")){e.classList.remove("navbar-mobile");var t=Object(j.a)(".mobile-nav-toggle");t.classList.toggle("bi-list"),t.classList.toggle("bi-x")}},children:c(a)})})},f=[{path:"/home",name:"header.home"},{path:"/about",name:"header.about"},{path:"/resume",name:"header.resume"},{path:"/services",name:"header.services"},{path:"/portfolio",name:"header.portfolio"},{path:"/contact",name:"header.contact"}],v=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(u.a)(),c=Object(l.a)(a,2),o=c[0],r=c[1];return Object(b.jsxs)("nav",{id:"navbar",className:"navbar",ref:e,children:[Object(b.jsxs)("ul",{children:[f.map((function(e){return Object(b.jsx)(p,Object(h.a)({},e),e.path)})),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:"btn link btn-handle-toogle",onClick:r,children:o("header.lang")})})]}),Object(b.jsx)("i",{className:"bi bi-list mobile-nav-toggle",onClick:function(){e.current.classList.toggle("navbar-mobile"),t.current.classList.toggle("bi-list"),t.current.classList.toggle("bi-x")},ref:t})]})},O=function(e){var t=e.icon,a=e.url;return Object(b.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:t})})},x=[{icon:"bi bi-whatsapp",url:"https://api.whatsapp.com/send?phone=522222520342&text=Hola%20Gabriel.%20Vengo%20de%20tu%20p%C3%A1gina%20web%20y%20quisiera%20platicar%20contigo%20para%20una%20idea%20de%20un%20sitio%20web."},{icon:"bi bi-linkedin",url:"https://www.linkedin.com/in/gabriel-diaz-amador/"},{icon:"bi bi-facebook",url:"https://www.facebook.com/gabriel.diazamador"},{icon:"bi bi-instagram",url:"https://www.instagram.com/gda1998/"},{icon:"ri-spotify-fill",url:"https://open.spotify.com/user/w1m781a1w6w5isk893j2ktu0m"}],g=function(e){var t=e.displayBlock;return Object(b.jsx)("div",{className:"social-links",style:t,children:x.map((function(e){return Object(b.jsx)(O,Object(h.a)({},e),e.icon)}))})},y=a.p+"static/media/Gabriel_Diaz_Resume.af3588cb.pdf",k=a.p+"static/media/Curriculum_Gabriel_Diaz.0fd119b7.pdf",w=function(){var e=Object(u.a)(),t=Object(l.a)(e,3),a=t[0],n=t[2];return Object(b.jsx)("a",{className:"button",href:"en"===n?y:k,id:"CV_Gabriel_Diaz",download:"CV_Gabriel_Diaz",children:a("header.download-cv")})},N=a(10),S=function(e){var t=e.isHome,a=void 0!==t&&t,n=Object(u.a)(),c=Object(l.a)(n,1)[0];return Object(b.jsxs)("header",{id:"header",className:a?"":"header-top",children:[a&&Object(b.jsx)(d.a,{useModalOverlay:!1,pageName:"home",type:N.a.home}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{children:[" ",Object(b.jsx)(s.b,{to:"/home",children:"Gabriel D\xedaz"})," "]}),Object(b.jsxs)("h2",{children:[Object(b.jsx)("small",{style:{fontSize:"24px"},dangerouslySetInnerHTML:{__html:c("header.welcome-message",{name:"Gabriel D\xedaz"})}}),Object(b.jsxs)("small",{style:{fontSize:"24px"},children:[" ",Object(b.jsx)(m,{})," "]})]}),Object(b.jsx)(v,{}),Object(b.jsx)(g,{}),Object(b.jsx)(w,{})]})]})},T=a(15),C=function(e){var t=e.title,a=e.dates,n=e.place,c=e.text;return Object(b.jsxs)("div",{className:"resume-item",children:[Object(b.jsx)("h4",{children:t}),Object(b.jsx)("h5",{children:a}),Object(b.jsx)("p",{children:Object(b.jsxs)("em",{children:[n," ","Puebla, M\xe9xico"]})}),c&&Object(b.jsx)("p",{style:{textAlign:"justify"},children:c})]})},P=[{id:"tsu-degree",title:"Engineering in Information and Comunication Technologies",dates:"2018 - 2020",place:"Technological University of Puebla,"},{id:"engineer-degree",title:"University Technician in Computer Systems",dates:"2016 - 2018",place:"Technological University of Puebla,"}],z=[{id:"tsu-degree",title:"Ingenier\xeda en Tecnolog\xedas de la Informaci\xf3n y Comunicaci\xf3n",dates:"2018 - 2020",place:"Universidad Tecnol\xf3gica de Puebla,"},{id:"engineer-degree",title:"T\xe9cnico Superior Universitario en Sistemas Inform\xe1ticos",dates:"2016 - 2018",place:"Universidad Tecnol\xf3gica de Puebla,"}],q=function(){var e=Object(u.a)(),t="en"===Object(l.a)(e,3)[2]?P:z;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(C,Object(h.a)({},e),e.id)}))})},A=[{id:"eks-practices",title:"Web Developer (Training)",dates:"05/13/2021 - Today",place:"EKS Solutions,",text:"I\u2019m helping to carry out detections and corrections of problems of the systems of a client of the company EKS Solutions, using Oracle tools."},{id:"humanly-job",title:"Web Developer",dates:"07/16/2020 - 09/15/2020",place:"Humanly Software,",text:"I helped on the maintenance and migration to a more recent version of one of their systems focused on employees managing, like their salaries, working days, among others."},{id:"tsystems-second-practices",title:"Web Developer (Professional Practices)",dates:"01/17/2020 - 05/24/2020",place:"T - Systems M\xe9xico S.A de C.V.,",text:"Develop the bases of a web system focused on the automatic assigment of activities in one of the areas of the company."},{id:"utp-ss",title:"Instructor (Social Service)",dates:"09/13/2019 - 12/13/2019",place:"Technological University of Puebla,",text:"I taught to one teacher at my university to use technologies like AJAX and JavaScript, so that she could replicate that knowledge to her students."},{id:"tsystems-first-practices",title:"Web Developer (Professional Practices)",dates:"14/05/2018 - 24/08/2018",place:"T - Systems M\xe9xico S.A de C.V.,",text:"I made a web site for one of the areas of the company in wich its mainly functionality was have control of the inventory of the materials that their used to work in that area."}],D=[{id:"eks-practices",title:"Desarrollador Web (Entrenamiento)",dates:"13/05/2021 - Actualmente",place:"EKS Solutions,",text:"Apoyo en la detecci\xf3n y correcci\xf3n de problemas de los sistemas de uno de los clientes de la empresa EKS Solutions, utilizando herramientas de Oracle."},{id:"humanly-job",title:"Desarrollador Web",dates:"16/07/2020 - 15/09/2020",place:"Humanly Software,",text:"Apoyo en el mantenimiento y migraci\xf3n a una versi\xf3n m\xe1s reciente de uno de sus sistemas enfocado a la gesti\xf3n del personal, como sus sueldos, jornadas laborales, entre otros."},{id:"tsystems-second-practices",title:"Desarrollador Web (Pr\xe1cticas)",dates:"17/01/2020 - 24/05/2020",place:"T - Systems M\xe9xico S.A de C.V.,",text:"Desarrollar las bases de un sistema web enfocado a la asignaci\xf3n autom\xe1tica de actividades de una de las \xe1reas de la empresa."},{id:"utp-ss",title:"Instructor (S. Social)",dates:"13/09/2019 - 13/12/2019",place:"Universidad Tecnol\xf3gica de Puebla,",text:"Le ense\xf1\xe9 a una docente de dicha universidad a utilizar tecnolog\xedas como AJAX y JavaScript, esto con el fin de que ella pudiera replicar esos conocimientos a sus alumnos."},{id:"tsystems-first-practices",title:"Desarrollador Web (Pr\xe1cticas)",dates:"14/05/2018 - 24/08/2018",place:"T - Systems M\xe9xico S.A de C.V.,",text:"Desarroll\xe9 un sitio web para una de las \xe1reas de la empresa en cual su funci\xf3n principal fue el de llevar el control del inventario de los materiales que utilizaban para trabajar en dicha \xe1rea."}],_=function(){var e=Object(u.a)(),t="en"===Object(l.a)(e,3)[2]?A:D;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(C,Object(h.a)({},e),e.id)}))})},E=function(){var e=Object(T.a)(),t=Object(u.a)(),a=Object(l.a)(t,1)[0];return Object(b.jsx)("section",{id:"resume",className:"resume ".concat(e),children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"section-title",children:[Object(b.jsx)("h2",{children:a("header.resume")}),Object(b.jsx)("p",{children:a("resume.check-resume")})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-lg-6",children:[Object(b.jsx)("h3",{className:"resume-title",children:a("resume.sumary")}),Object(b.jsxs)("div",{className:"resume-item pb-0",children:[Object(b.jsx)("h4",{children:a("resume.introduction")}),Object(b.jsx)("p",{style:{textAlign:"justify"},children:Object(b.jsx)("em",{dangerouslySetInnerHTML:{__html:a("resume.sumary-text",{web_tools:"PHP, Laravel, JavaScript, AJAX, React,"})}})})]}),Object(b.jsx)("h3",{className:"resume-title",children:a("resume.education")}),Object(b.jsx)(q,{})]}),Object(b.jsxs)("div",{className:"col-lg-6",children:[Object(b.jsx)("h3",{className:"resume-title",children:a("resume.experience")}),Object(b.jsx)(_,{})]})]})]})})},L=function(e){var t=e.title,a=e.text,n=e.icon,c=e.className,o=Object(u.a)(),r=Object(l.a)(o,1)[0];return Object(b.jsx)("div",{className:"col-md-6 ".concat(c||""),children:Object(b.jsxs)("div",{className:"icon-box",children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)("i",{className:n})}),Object(b.jsx)("h4",{children:r(t)}),Object(b.jsx)("p",{children:r(a)})]})})},I=[{id:"service.back-end",title:"services.back-end",text:"services.back-end-text",icon:"bx bx-server"},{id:"service.front-end",title:"services.front-end",text:"services.front-end-text",icon:"bx bx-desktop",className:"mt-4 mt-md-0"}],U=function(){var e=Object(T.a)(),t=Object(u.a)(),a=Object(l.a)(t,1)[0];return Object(b.jsx)("section",{id:"services",className:"services ".concat(e),children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"section-title",children:[Object(b.jsx)("h2",{children:a("header.services")}),Object(b.jsx)("p",{children:a("services.my-services")})]}),Object(b.jsx)("div",{className:"row",children:I.map((function(e){return Object(b.jsx)(L,Object(h.a)({},e),e.id)}))})]})})},M=function(e){var t=e.className,a=e.icon,n=e.title,c=e.text,o=e.fontSize,r=Object(u.a)(),s=Object(l.a)(r,1)[0];return Object(b.jsx)("div",{className:"".concat(t," d-flex align-items-stretch"),children:Object(b.jsxs)("div",{className:"info-box",children:[Object(b.jsx)("i",{className:a}),Object(b.jsx)("h3",{children:s(n)}),c?Object(b.jsx)("p",{style:{fontSize:o},children:c.includes("contact.")?s(c):c}):Object(b.jsx)(g,{displayBlock:{display:"block"}})]})})};M.defaultProps={fontSize:"auto"};var R=[{id:"contact-header",className:"col-md-12",icon:"bx bx-chat",title:"contact.get-in-touch",text:"contact.header-text",fontSize:"1rem"},{id:"contact-social-profiles",className:"col-md-4 mt-4",icon:"bx bx-share-alt",title:"contact.social-profiles"},{id:"contact-email",className:"col-md-4 mt-4",icon:"bx bx-envelope",title:"contact.email-me",text:["gabriel",".diaz",".amador",".num",".13","@","gmail.com"].join(""),fontSize:"0.75rem"},{id:"contact-phone",className:"col-md-4 mt-4",icon:"bx bx-phone-call",title:"contact.call-me",text:["+52 ","22 ","22 ","52 ","03 ","42"].join("")}],V=function(){return Object(b.jsx)("div",{className:"row mt-2",children:R.map((function(e){return Object(b.jsx)(M,Object(h.a)({},e),e.id)}))})},B=a(35),H=a.n(B),J=a(41),W=a(42),Z=a.n(W),F=a(50),G=a(19),K=function(e,t,a){var n=e.required,c=e.value;return!1!==n&&(null===c||0===c.length||/^\s+$/.test(c))},X=a(43),Y=a.n(X),$=a(44),Q=a.n($),ee=(a(70),function(e,t,a){Q()(Y.a).fire({icon:e,title:t,toast:!0,position:a,showConfirmButton:!1,timer:5e3,timerProgressBar:!0})}),te=function(){window.recaptchaOptions={useRecaptchaNet:!0};var e=Object(u.a)(),t=Object(l.a)(e,1)[0],a=Object(n.useRef)(),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(l.a)(t,2),c=a[0],o=a[1];return[c,function(e){var t=e.target;o(Object(h.a)(Object(h.a)({},c),{},Object(G.a)({},t.name,t.value)))},function(){return o(e)},function(e){var t=!0;return e.map((function(e){return K(e)?(e.classList.add("is-invalid"),t=!1):e.classList.remove("is-invalid"),t})),t}]}({name:"",email:"",subject:"",message:""}),o=Object(l.a)(c,4),r=o[0],s=o[1],i=o[2],d=o[3],m=r.name,p=r.email,f=r.subject,v=r.message,O=function(){var e=Object(J.a)(H.a.mark((function e(n){var c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c=Object(j.a)("#formContact input, #formContact textarea",!0),d(c)){e.next=5;break}return a.current.reset(),e.abrupt("return",!1);case 5:return e.next=7,a.current.executeAsync();case 7:if("string"===typeof e.sent){e.next=12;break}return a.current.reset(),ee("error",t("errors.recaptcha-token-invalid"),"bottom-end"),e.abrupt("return",!1);case 12:Z.a.sendForm("service_ue20u7k","template_udquiaf",n.target,"user_5mpFv6mmg2y2NuNaoHL0w").then((function(){i(),a.current.reset(),ee("success",t("messages.email-sent-text"),"bottom-end")}),(function(e){return ee("error",e.text,"bottom-end")}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{id:"formContact",className:"php-email-form mt-4 row g-3",onSubmit:O,children:[Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("input",{className:"form-control",required:!0,type:"text",name:"name",placeholder:t("form.your-name"),value:m,onChange:s,pattern:"[a-zA-Z\xc0-\xff\\u00f1\\u00d1]+(\\s*[a-zA-Z\xc0-\xff\\u00f1\\u00d1]*)*",title:t("form.only-alphabetic")}),Object(b.jsx)("div",{className:"invalid-feedback",children:t("form.field-requied")})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("input",{className:"form-control",required:!0,type:"email",name:"email",placeholder:t("form.your-email"),value:p,onChange:s,pattern:"[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}",title:"ej. example@email.com"}),Object(b.jsx)("div",{className:"invalid-feedback",children:t("form.field-requied")})]}),Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("input",{className:"form-control",required:!0,type:"text",name:"subject",placeholder:t("form.subject"),value:f,onChange:s}),Object(b.jsx)("div",{className:"invalid-feedback",children:t("form.field-requied")})]}),Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("textarea",{className:"form-control",required:!0,name:"message",placeholder:t("form.message"),rows:"5",value:v,onChange:s}),Object(b.jsx)("div",{className:"invalid-feedback",children:t("form.field-requied")})]}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("button",{type:"submit",className:"button",children:t("form.send")})}),Object(b.jsx)(F.a,{onErrored:function(){return console.error("Error Catpcha.")},ref:a,theme:"dark",sitekey:"6LehFckaAAAAANu-UZkwlX_cYNHoko69VdVDMl0q",size:"invisible"})]})},ae=function(){var e=Object(T.a)(),t=Object(u.a)(),a=Object(l.a)(t,1)[0];return Object(b.jsxs)("section",{id:"contact",className:"contact ".concat(e),children:[Object(b.jsx)(d.a,{pageName:"contact",type:N.a.contact}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"section-title",children:[Object(b.jsx)("h2",{children:a("header.contact")}),Object(b.jsx)("p",{children:a("contact.contact-me")})]}),Object(b.jsx)(V,{}),Object(b.jsx)(te,{})]})]})},ne=function(){var e=Object(u.a)(),t=Object(l.a)(e,1)[0],a=Object(T.a)(),n=Object(i.g)().replace;return Object(b.jsx)("section",{className:a||"",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"error-container",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h1",{children:"404"})}),Object(b.jsx)("h2",{children:"Not Found"}),Object(b.jsx)("p",{children:t("errors.not-found-text")}),Object(b.jsx)("button",{className:"mt-1 button",onClick:function(){return n("/home")},children:t("header.back-home")})]})})})},ce=c.a.lazy((function(){return Promise.all([a.e(3),a.e(5)]).then(a.bind(null,93))})),oe=c.a.lazy((function(){return Promise.all([a.e(6),a.e(4)]).then(a.bind(null,92))})),re=function(){var e=Object(i.h)().pathname;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{isHome:"/home"===e}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/home"}),Object(b.jsx)(i.b,{exact:!0,path:"/about",component:ce}),Object(b.jsx)(i.b,{exact:!0,path:"/resume",component:E}),Object(b.jsx)(i.b,{exact:!0,path:"/services",component:U}),Object(b.jsx)(i.b,{exact:!0,path:"/portfolio",component:oe}),Object(b.jsx)(i.b,{exact:!0,path:"/contact",component:ae}),"/"===e?Object(b.jsx)(i.a,{to:"/home"}):Object(b.jsx)(i.b,{component:ne})]})]})},se=function(){var e=Object(T.a)();return Object(b.jsx)("section",{className:e,children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h1",{children:"Loading..."}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"spinner-border",role:"status"})]})})})},ie=a(49),le=a(46),ue=a(22),de=a(48);ie.a.use(le.a).use(de.a).use(ue.e).init({fallbackLng:"en"});a(71);var be=function(){return Object(b.jsx)(s.a,{children:Object(b.jsx)("div",{children:Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(se,{}),children:Object(b.jsx)(i.d,{children:Object(b.jsx)(i.b,{path:"/",component:re})})})})})};r.a.render(Object(b.jsx)(be,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.d7cc2eb4.chunk.js.map