(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,function(t,e,r){},function(t,e,r){},function(t,e,r){},,function(t,e,r){},function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),c=r(4),i=r.n(c),u=(r(9),r(2)),d=(r(10),[{id:"add",text:"+",type:"operator"},{id:"subtract",text:"-",type:"operator"},{id:"multiply",text:"\xd7",type:"operator"},{id:"divide",text:"\xf7",type:"operator"},{id:"seven",text:"7",type:"number"},{id:"eight",text:"8",type:"number"},{id:"nine",text:"9",type:"number"},{id:"four",text:"4",type:"number"},{id:"five",text:"5",type:"number"},{id:"six",text:"6",type:"number"},{id:"one",text:"1",type:"number"},{id:"two",text:"2",type:"number"},{id:"three",text:"3",type:"number"},{id:"zero",text:"0",type:"number"},{id:"decimal",text:".",type:"decimal"},{id:"clear",text:"AC",type:"clear"},{id:"equals",text:"=",type:"equals"}]),s=(r(11),r(1)),o=function(t){return Object(s.jsx)("div",{id:"buttons",children:d.map((function(e,r){return Object(s.jsx)("button",{id:e.id,className:e.type,"data-type":e.type,onClick:function(e){return t.handleButtonPress(e)},children:e.text},r)}))})},p=(r(13),function(t){return Object(s.jsx)("div",{id:"display",children:t.display})}),b=function(){var t=Object(a.useState)("0"),e=Object(u.a)(t,2),r=e[0],n=e[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),d=i[0],b=i[1],l=Object(a.useState)(""),j=Object(u.a)(l,2),x=j[0],y=j[1],O=Object(a.useState)(0),m=Object(u.a)(O,2),f=m[0],h=m[1],v=Object(a.useState)(""),S=Object(u.a)(v,2),g=S[0],q=S[1],B=Object(a.useState)(0),E=Object(u.a)(B,2),k=E[0],w=E[1],C=Object(a.useState)(0),F=Object(u.a)(C,2),I=F[0],J=F[1];Object(a.useEffect)((function(){g||h(parseFloat(r)),g&&"equals"!==x&&w(parseFloat(r))}),[g,r,x]),Object(a.useEffect)((function(){"add"===g&&J(f+k),"subtract"===g&&J(f-k),"multiply"===g&&J(f*k),"divide"===g&&J(f/k)}),[f,g,k]);return Object(s.jsxs)("div",{id:"calculator",children:[Object(s.jsx)(p,{display:r}),Object(s.jsx)(o,{handleButtonPress:function(t){var e=t.target.id,a=t.target.textContent,c=t.target.dataset.type;"operator"===x&&document.getElementById(d).classList.remove("depressed"),"number"===c&&n("0"===r||"equals"===x||"operator"===x&&"-"!==r?a:r+a),"decimal"===c&&(r.includes(".")||n(r+a),"operator"!==x&&"equals"!==x||n("0.")),"operator"===c&&(g&&"operator"!==x&&"equals"!==x&&(n(I.toString()),h(I)),"subtract"===e&&"operator"===x?n("-"):"-"===r?(n(f),q(e)):q(e),t.target.classList.add("depressed")),"equals"===c&&(n(I.toString()),h(I)),"clear"===c&&(h(0),w(0),q(""),J(0),n("0")),b(e),y(c)}})]})};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.c05c3d9f.chunk.js.map