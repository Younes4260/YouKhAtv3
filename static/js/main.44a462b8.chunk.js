(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{40:function(e,t,a){e.exports=a(52)},45:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a.n(n),c=a(35),r=a.n(c),o=(a(45),a(0)),i=a.n(o),s=a(1),u=a(14),m=a(2),b=a(3),d=a(22),v=a(11),E=a(12),h=(a(47),a(24)),g=(a(53),a(49),a(51),a(37)),p=a(38);h.a.initializeApp({apiKey:"AIzaSyCc56Iksic3DyqOSsKhF-8l1EXRh-cF8SY",authDomain:"youkhatvfour.firebaseapp.com",projectId:"youkhatvfour",storageBucket:"youkhatvfour.appspot.com",messagingSenderId:"1012311611964",appId:"1:1012311611964:web:16de4b315e4127e8dd0139",measurementId:"G-N5Z5SMPMY4"});var f=h.a.auth(),O=h.a.firestore();h.a.analytics();var x=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isOnPrototype:!1},n.toggleState=n.toggleState.bind(Object(d.a)(n)),n}return Object(b.a)(a,[{key:"toggleState",value:function(){this.setState({isOnPrototype:!this.state.isOnPrototype})}},{key:"render",value:function(){return this.state.isOnPrototype?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"BoutonToggle"},l.a.createElement("button",{onClick:this.toggleState},"YouKhAt")),l.a.createElement(S,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"BulleToggle"},l.a.createElement("div",{className:"bulle",onClick:this.toggleState},l.a.createElement("h1",null,"Clavardez!"))),l.a.createElement(y,null))}}]),a}(l.a.Component);function k(){return l.a.createElement("div",{id:"background-wrap"},l.a.createElement("div",{class:"bubble x1"}),l.a.createElement("div",{class:"bubble x2"}),l.a.createElement("div",{class:"bubble x3"}),l.a.createElement("div",{class:"bubble x4"}),l.a.createElement("div",{class:"bubble x5"}),l.a.createElement("div",{class:"bubble x6"}),l.a.createElement("div",{class:"bubble x7"}),l.a.createElement("div",{class:"bubble x8"}),l.a.createElement("div",{class:"bubble x9"}),l.a.createElement("div",{class:"bubble x10"}))}var y=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isOnLightbox:!1,NumberText:0},n.toggleState=n.toggleState.bind(Object(d.a)(n)),n}return Object(b.a)(a,[{key:"toggleState",value:function(){this.setState({isOnLightbox:!this.state.isOnLightbox})}},{key:"render",value:function(){var e=this,t=["Ce truc a \xe9t\xe9 fait avec React et c'est tr\xe8s cool","Firebase est trop fort utilisez-le!","CodeAcademy est nice aussi allez acheter!"][this.state.NumberText];return this.state.isOnLightbox?l.a.createElement("div",{className:"Intro"},l.a.createElement("div",{className:"backgroundlightbox"},l.a.createElement("div",{className:"lightbox"},l.a.createElement("div",{className:"Headerlightbox"},l.a.createElement("button",{onClick:this.toggleState},"shut the fuck up")),l.a.createElement("p",null,t))),l.a.createElement("section",null,l.a.createElement("div",{id:"bloc1",className:"bullesection"},l.a.createElement("h1",null,"Avec React.js")),l.a.createElement("div",{id:"bloc2",className:"bullesection"},l.a.createElement("h1",null,"Avec une base de donn\xe9es")),l.a.createElement("div",{id:"bloc3",className:"bullesection"},l.a.createElement("h1",null,"Appris sur codeacadamy")))):l.a.createElement("div",{className:"Intro"},l.a.createElement("section",null,l.a.createElement("div",{id:"bloc1",className:"bullesection",onClick:function(){e.toggleState(),e.setState({NumberText:0})}},l.a.createElement("h1",null,"Avec React.js")),l.a.createElement("div",{id:"bloc2",className:"bullesection",onClick:function(){e.toggleState(),e.setState({NumberText:1})}},l.a.createElement("h1",null,"Avec une base de donn\xe9es")),l.a.createElement("div",{id:"bloc3",className:"bullesection",onClick:function(){e.toggleState(),e.setState({NumberText:2})}},l.a.createElement("h1",null,"Appris sur codeacadamy"))))}}]),a}(l.a.Component);function S(){var e=Object(g.a)(f),t=Object(u.a)(e,1)[0];return l.a.createElement("div",{className:"Prototype"},l.a.createElement("header",null,l.a.createElement("h1",null,"YouKhAt"),l.a.createElement(j,null)),t?l.a.createElement(C,null):l.a.createElement(N,null))}function N(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement("button",{className:"sign-in",onClick:function(){var e=new h.a.auth.GoogleAuthProvider;f.signInWithPopup(e)}},"Connecter avec Google")))}function j(){return f.currentUser&&l.a.createElement("button",{className:"sign-out",onClick:function(){return f.signOut()}},"D\xe9connecter")}function C(){var e=Object(n.useRef)(),t=O.collection("messages"),a=t.orderBy("createdAt").limitToLast(50),c=Object(p.a)(a,{idField:"id"}),r=Object(u.a)(c,1)[0],o=Object(n.useState)(""),m=Object(u.a)(o,2),b=m[0],d=m[1],v=function(){var a=Object(s.a)(i.a.mark((function a(n){var l,c,r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),l=f.currentUser,c=l.uid,r=l.photoURL,a.next=4,t.add({text:b,createdAt:h.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:r});case 4:d(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return l.a.createElement("section",null,l.a.createElement("main",null,r&&r.map((function(e){return l.a.createElement(A,{key:e.id,message:e})})),l.a.createElement("span",{ref:e})),l.a.createElement("form",{onSubmit:v},l.a.createElement("input",{value:b,onChange:function(e){return d(e.target.value)},placeholder:"\xc9crire votre message"}),l.a.createElement("button",{type:"submit",disabled:!b},"Envoyer")))}function A(e){var t=e.message,a=t.text,n=t.uid,c=t.photoURL,r=n===f.currentUser.uid?"sent":"received";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"message ".concat(r)},l.a.createElement("button",null,"delete"),l.a.createElement("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),l.a.createElement("p",null,a)))}var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(x,null),l.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.44a462b8.chunk.js.map