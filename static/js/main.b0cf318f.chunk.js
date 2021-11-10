(this["webpackJsonpgoit-react-hw-06-phonebook-vanila-redux"]=this["webpackJsonpgoit-react-hw-06-phonebook-vanila-redux"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"ContactForm_form__33FPg",btnContactForm:"ContactForm_btnContactForm__3V6sk",inputContactForm:"ContactForm_inputContactForm__96jPb",contactFormLabel:"ContactForm_contactFormLabel__96Xo8"}},,,,function(e,t,n){e.exports={item:"ContactList_item___aw3G",buttonDelete:"ContactList_buttonDelete__14wwI"}},,,function(e,t,n){e.exports={name:"Contact_name__7t_og",number:"Contact_number__2Qova"}},function(e,t,n){e.exports={textFilter:"Filter_textFilter__27yp9",inputFilter:"Filter_inputFilter__3l002"}},,function(e,t,n){e.exports={container:"Container_container__5Z3AZ"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(19),n(14)),s=n(3),u=n(12),l=n.n(u),m=n(0);function b(e){var t=e.children;return Object(m.jsx)("div",{className:l.a.container,children:t})}var j=n(25),d=n(2),p=n.n(d);var f=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),l=u[0],b=u[1],d=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}},f=function(){o(""),b("")};return Object(m.jsxs)("form",{className:p.a.form,onSubmit:function(e){e.preventDefault();var n={id:Object(j.a)(),name:r,number:l};t(n),f()},children:[Object(m.jsxs)("label",{className:p.a.contactFormLabel,children:["Name",Object(m.jsx)("input",{onChange:d,className:p.a.inputContactForm,value:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:p.a.contactFormLabel,children:["Number",Object(m.jsx)("input",{onChange:d,className:p.a.inputContactForm,value:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",className:p.a.btnContactForm,children:"Add contact"})]})},O=n(13),x=n(6),h=n.n(x),_=n(8),C=n.n(_),v=n(9),F=n.n(v);function N(e){var t=e.name,n=e.number;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:F.a.name,children:t}),Object(m.jsx)("p",{className:F.a.number,children:n})]})}function g(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{className:h.a.list,children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(m.jsxs)("li",{className:h.a.item,children:[Object(m.jsx)(N,{name:t,number:a}),Object(m.jsx)("button",{className:h.a.buttonDelete,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})}N.propType={name:C.a.string,number:C.a.number};var w=n(10),L=n.n(w);function S(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:L.a.textFilter,children:["Find Contact by name",Object(m.jsx)("input",{className:L.a.inputFilter,type:"text",value:t,onChange:n})]})}var y=function(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:O})),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(m.jsxs)(b,{children:[Object(m.jsx)("h1",{className:"title",children:"PhoneBook"}),Object(m.jsx)(f,{onSubmit:function(e){if(n.some((function(t){return t.name.toLocaleLowerCase()===e.name.toLocaleLowerCase()})))return alert("We have this contact");c([].concat(Object(i.a)(n),[e]))}}),Object(m.jsx)(S,{value:u,onChange:function(e){l(e.target.value)}}),Object(m.jsx)("h2",{className:"contactTitle",children:"Contacts"}),Object(m.jsx)(g,{contacts:function(){var e=u.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}(),onDeleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}})]})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.b0cf318f.chunk.js.map