(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){},20:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(6),r=t.n(c),m=(t(18),t(1)),o=t(4),s=(t(20),t(25)),i=t(8),u=function(e){var a=e.totalCalories,t=e.goal,l=e.setGoal,c=e.cookieKey,r=e.cookies,m=e.items;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h1",null,"Calories"),n.a.createElement("h2",null,a)),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h1",null,"Goal"),n.a.createElement("input",{className:"marginSmall goalNumberWidth",type:"number",value:t,onChange:function(e){var a=parseInt(e.target.value)?parseInt(e.target.value):0;l(a),r.set(c,{items:Object(o.a)(m),goal:a},{path:"/"})}}))))};var g=function(){var e=Object(l.useState)(0),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)([]),g=Object(m.a)(r,2),d=g[0],v=g[1],E=Object(l.useState)("Bagel"),p=Object(m.a)(E,2),b=p[0],f=p[1],h=Object(l.useState)(100),S=Object(m.a)(h,2),j=S[0],O=S[1],N=Object(l.useState)(0),w=Object(m.a)(N,2),C=w[0],k=w[1],y=function(e){var a=0;e&&(a+=e.calories),d.forEach(function(e){a+=e.calories}),k(a)},I=new i.a,A="myCalorieCount",G=I.get(A);return!G||d&&0!==d.length||(G.items.length&&(v(G.items),y()),G.goal&&0===t&&c(G.goal)),n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",null,n.a.createElement(u,{totalCalories:C,goal:t,setGoal:c,cookieKey:A,cookies:I,items:d}),n.a.createElement("div",{class:"container marginTop"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-sm-4 marginSmall"},"Food"),n.a.createElement("div",{class:"col-sm-2 marginSmall"},"Calories"),n.a.createElement("div",{class:"col-sm-2 marginSmall"})),n.a.createElement("div",{className:"row"},n.a.createElement("input",{className:"col-sm-4 marginSmall",type:"text",value:b,onChange:function(e){f(e.target.value)}}),n.a.createElement("input",{className:"col-sm-2 marginSmall",type:"number",value:j,onChange:function(e){O(parseInt(e.target.value)?parseInt(e.target.value):0)}}),n.a.createElement(s.a,{className:"col-sm-2 marginSmall btn btn-primary",onClick:function(){var e={food:b,calories:j,id:(new Date).getTime()};v([].concat(Object(o.a)(d),[e])),f(""),O(0),y(e),I.set(A,{items:[].concat(Object(o.a)(d),[e]),goal:t},{path:"/"})}},"Add")),d.map(function(e){return n.a.createElement("li",null,n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-sm-4 marginSmall item"},e.food),n.a.createElement("div",{class:"col-sm-2 marginSmall item"},e.calories),n.a.createElement(s.a,{className:"col-sm-2 marginSmall btn btn-danger",onClick:function(){var a=Object(o.a)(d.filter(function(a){return a.id!==e.id}));a||(a=[]),v(a),y(),I.set(A,{items:a,goal:t},{path:"/"})}},"Delete")))})))))};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)))},9:function(e,a,t){e.exports=t(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.b4218cfb.chunk.js.map