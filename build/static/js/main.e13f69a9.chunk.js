(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(14),c=t.n(r),a=t(3),o=t(2),u=t(4),i=t.n(u),s="/api/persons",d={getAll:function(){return i.a.get(s).then((function(e){return e.data}))},create:function(e){return i.a.post(s,e).then((function(e){return e.data}))},remove:function(e){return i.a.delete("".concat(s,"/").concat(e))},update:function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))}},l=t(0),f=function(e){var n=e.search,t=e.handleSearchChange;return Object(l.jsxs)("div",{children:["filter shown with ",Object(l.jsx)("input",{value:n,onChange:t})]})},h=function(e){var n=e.addPerson,t=e.newName,r=e.newNumber,c=e.handleNameChange,a=e.handleNumberChange;return Object(l.jsxs)("form",{onSubmit:n,children:[Object(l.jsxs)("div",{children:["name: ",Object(l.jsx)("input",{value:t,onChange:c})]}),Object(l.jsxs)("div",{children:["number: ",Object(l.jsx)("input",{value:r,onChange:a})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})},b=function(e){var n=e.name,t=e.number,r=e.deletePerson;return Object(l.jsxs)("div",{children:[n," ",t," ",Object(l.jsx)("button",{onClick:r,children:"delete"})]})},j=function(e){var n=e.filteredPeople,t=e.deletePerson;return Object(l.jsx)(l.Fragment,{children:n.map((function(e){return Object(l.jsx)(b,{name:e.name,number:e.number,deletePerson:function(){return t(e.id)}},e.name)}))})},m=function(e){var n=e.message,t=e.styleName;return null==n?null:Object(l.jsx)("div",{className:t,children:n})},O=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),u=Object(a.a)(c,2),i=u[0],s=u[1],b=Object(o.useState)(""),O=Object(a.a)(b,2),v=O[0],p=O[1],x=Object(o.useState)(""),g=Object(a.a)(x,2),w=g[0],C=g[1],N=Object(o.useState)(null),P=Object(a.a)(N,2),S=P[0],k=P[1],y=Object(o.useState)(""),T=Object(a.a)(y,2),A=T[0],I=T[1];Object(o.useEffect)((function(){d.getAll().then((function(e){r(e)}))}),[]);var D=0===w.length?t:t.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(m,{message:S,styleName:A}),Object(l.jsx)(f,{search:w,handleSearchChange:function(e){C(e.target.value)}}),Object(l.jsx)("h3",{children:"add a new"}),Object(l.jsx)(h,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===i})),c={name:i,number:v};if(n)return window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))&&d.update(n.id,c).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e})))})).catch((function(e){I("error"),k("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){return k(null)}),5e3)})),s(""),void p("");d.create(c).then((function(e){r(t.concat(e)),I("notification"),k("Added ".concat(e.name)),setTimeout((function(){return k(null)}),5e3),s(""),p("")})).catch((function(e){I("error"),k(e.response.data.error),setTimeout((function(){return k(null)}),5e3)}))},newName:i,newNumber:v,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){p(e.target.value)}}),Object(l.jsx)("h3",{children:"Numbers"}),Object(l.jsx)(j,{filteredPeople:D,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&d.remove(e).then((function(n){r(t.filter((function(n){return n.id!==e})))})).catch((function(c){I("error"),k("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){return k(null)}),5e3),r(t.filter((function(n){return n.id!==e})))}))}})]})};t(38);c.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e13f69a9.chunk.js.map