"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[743],{743:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a,r,o,s=t(861),i=t(885),u=t(757),c=t.n(u),d=t(562),l=t(791),p=t(168),m=t(444),f=m.ZP.div(a||(a=(0,p.Z)(["\npadding: 20px;\n"]))),h=m.ZP.label(r||(r=(0,p.Z)(["\ndisplay: block;\nmargin-bottom: 20px;\n\nfont-size: 14px;\nfont-weight: 600;\n"]))),x=m.ZP.input(o||(o=(0,p.Z)(["\ndisplay: flex;\nmargin-top: 6px;\npadding: 6px;\nwidth: 200px;\n\nborder: 1px solid var(--accent-color);\nborder-radius: 4px;\n\noutline: none;\n\n&:focus {\n    border: 1px solid var(--hover-border-color);\n}\n"]))),b=t(184),v=function(e){var n=e.onSubmit,t=(0,l.useState)(""),a=(0,i.Z)(t,2),r=a[0],o=a[1],s=(0,l.useState)(""),u=(0,i.Z)(s,2),c=u[0],d=u[1],p=function(e){var n=e.target,t=n.name,a=n.value;"name"===t?o(a):d(a)};return(0,b.jsx)(f,{children:(0,b.jsxs)("form",{onSubmit:function(e){n(e)&&(o(""),d(""))},children:[(0,b.jsxs)(h,{children:["Name",(0,b.jsx)(x,{type:"text",name:"name",onChange:p,value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)(h,{children:["Number",(0,b.jsx)(x,{value:c,onChange:p,type:"number",name:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)("button",{type:"submit",children:"Add contact"})]})})},g=t(411),Z=function(){var e=(0,g.Tn)(),n=(0,i.Z)(e,1)[0],t=(0,g.pG)().data,a=function(e){return 0!==t.filter((function(n){return n.name===e})).length},r=function(){var e=(0,s.Z)(c().mark((function e(t){var r,o,s,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=t.target,o=r.name,s=r.tel,i={id:o.value,name:o.value,number:s.value},!a(o.value)){e.next=6;break}return d.Notify.warning("".concat(o.value," is already in contacts")),e.abrupt("return",!1);case 6:return e.prev=6,e.next=9,n(i);case 9:d.Notify.success("Contact added"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(6),d.Notify.failure("Error adding contact"),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsx)(v,{onSubmit:r})}}}]);
//# sourceMappingURL=743.b8b9eb31.chunk.js.map