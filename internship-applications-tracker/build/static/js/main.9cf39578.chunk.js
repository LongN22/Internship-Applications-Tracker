(this["webpackJsonpinternship-applications-tracker"]=this["webpackJsonpinternship-applications-tracker"]||[]).push([[0],{54:function(t,e,n){},60:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),a=n(19),r=n.n(a),o=(n(54),n(37)),s=n(85),p=n(86),d=n(91),l=n(14);var j=function(t){return Object(l.jsx)(s.a,{children:Object(l.jsx)(p.a,{children:Object(l.jsx)(d.a,{primary:t.text})})})},u=n(87),b=n(90),f=n(89),h=n(88),O=(n(60),n(33));n(38).config();var m=O.a.initializeApp({apiKey:"AIzaSyDTtPPCyatcyoDEXEtN5mOvqMVLEOLqic0",authDomain:"intern-app-tracker.firebaseapp.com",projectId:"intern-app-tracker",storageBucket:"intern-app-tracker.appspot.com",messagingSenderId:"945202938147",appId:"1:945202938147:web:aa3b61394cd60903d00c96"}).firestore();n(38).config({path:"/.env"});var g=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(""),r=Object(o.a)(a,2),s=r[0],p=r[1];return console.log(s),Object(c.useEffect)((function(){m.collection("jobList").orderBy("timestamp").onSnapshot((function(t){console.log(t.docs.map((function(t){return t.data().position}))),i(t.docs.map((function(t){return t.data().position})))}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Internship Applications Tracker"}),Object(l.jsxs)(u.a,{children:[Object(l.jsx)(b.a,{children:"Position"}),Object(l.jsx)(f.a,{value:s,onChange:function(t){return p(t.target.value)}})]}),Object(l.jsx)(h.a,{disabled:!s,onClick:function(t){console.log("added"),m.collection("jobList").add({position:s,timestamp:O.a.firestore.FieldValue.serverTimestamp()}),p("")},variant:"contained",color:"primary",children:"Add"}),Object(l.jsx)("ul",{children:n.map((function(t){return Object(l.jsx)(j,{text:t})}))})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),x()}},[[69,1,2]]]);
//# sourceMappingURL=main.9cf39578.chunk.js.map