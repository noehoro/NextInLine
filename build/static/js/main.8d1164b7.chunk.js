(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),o=c(33),l=c.n(o),r=(c(42),c(43),c(12)),i=c(3),j=c.p+"./static/media/logo.c6274ba4.png",m=c(74),d=Object(i.g)((function(e){var t=e.history;return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"jumbotron bg-dark",children:Object(s.jsxs)("div",{className:"col-sm-8 mx-auto text-center",children:[Object(s.jsx)("img",{src:j,alt:"Logo"}),Object(s.jsx)("ul",{className:"list-group list-group-flush mt-4",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-2"}),Object(s.jsx)(m.a,{className:"col-sm-8",variant:"success",onClick:function(e){e.preventDefault(),t.push("/start")},children:"Start Line"}),Object(s.jsx)("div",{className:"col-sm-2"})]})})]})})})})),b=(c(49),c(18)),h=c.n(b),u=c(35),p=c(10),x=c(9),O=c.n(x),v=function(e){var t=e.history,c=Object(a.useState)(""),n=Object(p.a)(c,2),o=n[0],l=n[1],r=function(){var e=Object(u.a)(h.a.mark((function e(c){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),localStorage.setItem("lineName",o),O.a.post("hhttp://next-in-line-rpi.herokuapp.com/createline",{name:o}).then((function(e){localStorage.setItem("lineCode",e.data.code),t.push("/line")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("form",{noValidate:!0,onSubmit:r,className:"w-50",children:[Object(s.jsx)("h1",{className:"font-weight-normal mb-4",children:Object(s.jsx)("b",{children:"Please Enter Line Name"})}),Object(s.jsxs)("div",{className:"form-group mt-4 row",children:[Object(s.jsx)("div",{className:"col-sm-4"}),Object(s.jsx)("input",{type:"text",className:"form-control col-sm-4",name:"name",placeholder:"Name",value:o,onChange:function(e){l(e.target.value)}})]}),Object(s.jsx)("button",{type:"submit",className:"btn btn-lg btn-dark btn-block",children:"Create Line"})]})},N=c(36),f=c.n(N),g=function(e){var t=e.history,c=localStorage.getItem("lineCode");return Object(s.jsxs)("div",{className:"container w-50",children:[Object(s.jsxs)("div",{className:"mb-3",children:["Your line's name is ",localStorage.getItem("lineName")]}),Object(s.jsx)(f.a,{value:"http://next-in-line-rpi.herokuapp.com/#/join/"+localStorage.getItem("lineCode")}),Object(s.jsxs)("div",{className:"mb-5",children:["Your line's code is: ",c]}),Object(s.jsxs)("div",{className:"row mb-5",children:[Object(s.jsx)("div",{className:"col-sm-4"}),Object(s.jsx)(m.a,{className:"col-sm-4",variant:"success",onClick:function(){t.push("/seeline")},children:"See Line"})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-4"}),Object(s.jsx)(m.a,{className:"col-sm-4",variant:"success",onClick:function(){O.a.put("http://next-in-line-rpi.herokuapp.com/notifycustomer",{code:localStorage.getItem("lineCode")}).then((function(e){alert("Notified "+e.data.response_data.name)}))},children:"Ready for New Customer"})]})]})},k=function(e){var t=e.color,c=e.classes;return"black"===t?Object(s.jsx)("div",{className:c,children:Object(s.jsx)("div",{className:"spinner-grow text-dark",role:"status"})}):Object(s.jsx)("div",{className:c,children:Object(s.jsx)("div",{className:"spinner-grow text-warning",role:"status"})})},w=function(e){var t=e.history,c=Object(a.useState)(),n=Object(p.a)(c,2),o=n[0],l=n[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("lineCode");O.a.post("http://next-in-line-rpi.herokuapp.com/getline",{code:e}).then((function(e){console.log(e.data.response_data),l(e.data.response_data)}))}),[]),o?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"row mb-5",children:[Object(s.jsx)("div",{className:"col-sm-4"}),Object(s.jsx)(m.a,{className:"col-sm-8",variant:"success",onClick:function(){t.push("/line")},children:"Back"})]}),Object(s.jsxs)("table",{className:"table table-striped table-dark",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Rank"}),Object(s.jsx)("th",{scope:"col",children:"Name"})]})}),Object(s.jsx)("tbody",{children:o.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:t}),Object(s.jsx)("td",{children:e.name})]},t)}))})]})]}):Object(s.jsx)("div",{children:Object(s.jsx)(k,{color:"yellow"})})},C=function(){var e=Object(i.f)().linecode;console.log(e);var t=Object(a.useState)(e||""),c=Object(p.a)(t,2),n=c[0],o=c[1],l=Object(a.useState)(""),r=Object(p.a)(l,2),j=r[0],m=r[1],d=Object(a.useState)(""),b=Object(p.a)(d,2),h=b[0],u=b[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("form",{noValidate:!0,className:"w-50",children:[Object(s.jsx)("h1",{className:"font-weight-normal mb-4",children:Object(s.jsx)("b",{children:"Please Enter Line Code"})}),Object(s.jsxs)("div",{className:"form-group mt-4 row",children:[Object(s.jsx)("div",{className:"col-sm-4"}),Object(s.jsx)("input",{type:"text",className:"form-control col-sm-4",name:"code",placeholder:"Code",value:n,onChange:function(e){o(e.target.value)}})]}),Object(s.jsxs)("div",{className:"form-group mt-4 row",children:[Object(s.jsx)("div",{className:"col-sm-4"}),Object(s.jsx)("input",{type:"text",className:"form-control col-sm-4",name:"Name",placeholder:"Name",value:j,onChange:function(e){m(e.target.value)}})]}),Object(s.jsxs)("div",{className:"form-group mt-4 row",children:[Object(s.jsx)("div",{className:"col-sm-4"}),Object(s.jsx)("input",{type:"text",className:"form-control col-sm-4",name:"phone",placeholder:"Phone",value:h,onChange:function(e){u(e.target.value)}})]})]}),Object(s.jsx)("button",{className:"btn btn-lg btn-dark btn-block",onClick:function(){O.a.post("http://next-in-line-rpi.herokuapp.com/addUser",{code:n,name:j,phone:h}).then((function(e){alert("Signed up!")}))},children:"Join Line"})]})},S=function(){return Object(s.jsx)("div",{className:"App vw-100 vh-100 overflow-hidden text-dark bg-dark",children:Object(s.jsx)(r.a,{children:Object(s.jsx)("div",{className:"App-header",children:Object(s.jsxs)(i.c,{children:[Object(s.jsx)(i.a,{exact:!0,path:"/",component:d}),Object(s.jsx)(i.a,{exact:!0,path:"/start",component:v}),Object(s.jsx)(i.a,{exact:!0,path:"/line",component:g}),Object(s.jsx)(i.a,{exact:!0,path:"/seeline",component:w}),Object(s.jsx)(i.a,{exact:!0,path:"/join/:linecode?",component:C})]})})})})};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.8d1164b7.chunk.js.map