(this.webpackJsonpwebmusic=this.webpackJsonpwebmusic||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),i=c(13),a=c.n(i),o=(c(18),c(3)),s=(c(19),c(0)),l=function(e){var t=e.Song,c=e.setOpenLibary,n=e.openLibary;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"wawes",children:[Object(s.jsx)("h2",{children:"Wawes"}),Object(s.jsx)("button",{onClick:function(){c(!n)},children:"Libary"})]}),Object(s.jsxs)("div",{className:"songContainer",children:[Object(s.jsx)("img",{src:t.cover}),Object(s.jsx)("h2",{children:t.name}),Object(s.jsx)("h3",{children:t.artist})]})]})},p=c(10),u=(c(21),c(7)),j=c(6),d=function(e){var t=e.currentSong,c=e.isPlaying,r=e.setIsplaying,i=e.setCurrentSong,a=e.songArray,l=Object(n.useState)({current:0,duration:0}),d=Object(o.a)(l,2),b=d[0],h=d[1],m=Object(n.useRef)(""),O=Object(n.useRef)("");function f(){var e=m.current.currentTime,t=m.current.duration;h(Object(p.a)(Object(p.a)({},b),{},{current:e,duration:t}))}function v(e){Math.floor(e/3600).toString().padStart(2,"0");return Math.floor(e%3600/60).toString().padStart(2,"0")+":"+Math.floor(e%60).toString().padStart(2,"0")}function g(e){var c=a.findIndex((function(e){return e.id===t.id}));"prew"===e?(i(a[c-1]),0===c&&i(a[a.length])):i(a[c+1])}return Object(s.jsxs)("div",{className:"player",children:[Object(s.jsxs)("div",{className:"time-control",children:[Object(s.jsx)("p",{children:v(b.current)}),Object(s.jsx)("input",{onChange:function(e){m.current.currentTime=e.target.value},ref:O,min:b.current.currentTime,max:b.current.duration,value:b.current,type:"range"}),Object(s.jsx)("p",{children:v(b.duration)})]}),Object(s.jsxs)("div",{className:"controller",children:[Object(s.jsx)(u.a,{onClick:function(){return g("prew")},size:"2x",icon:j.a}),Object(s.jsx)(u.a,{onClick:function(){r(!c),c?m.current.pause():m.current.play()},size:"2x",icon:c?j.c:j.d}),Object(s.jsx)(u.a,{onClick:function(){return g("next")},size:"2x",icon:j.b})]}),Object(s.jsx)("audio",{onLoadedData:f,onTimeUpdate:f,ref:m,src:t.audio})]})},b=(c(27),function(e){var t=e.el,c=e.setCurrentSong,n=e.setIsplaying;return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{onClick:function(){c(t),n(t)},className:"bar",children:[Object(s.jsx)("div",{className:"image",children:Object(s.jsx)("img",{className:"img",src:t.cover})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{children:t.artist})]})]})})}),h=(c(28),function(e){var t=e.songArray,c=e.setCurrentSong,n=e.setIsplaying,r=e.openLibary;return Object(s.jsxs)("div",{className:"container ".concat(!0===r?"":"toggle"),children:[Object(s.jsx)("h1",{children:"Libary"}),t.map((function(e){return Object(s.jsx)(b,{setIsplaying:n,setCurrentSong:c,el:e})}))]})}),m=(c(29),c(4));var O=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(m.v4)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(m.v4)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(m.v4)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(m.v4)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(m.v4)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(m.v4)(),active:!1}]};var f=function(){var e=Object(n.useState)(O()),t=Object(o.a)(e,2),c=t[0],r=(t[1],Object(n.useState)(c[0])),i=Object(o.a)(r,2),a=i[0],p=i[1],u=Object(n.useState)(!1),j=Object(o.a)(u,2),b=j[0],m=j[1],f=Object(n.useState)(!1),v=Object(o.a)(f,2),g=v[0],x=v[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{openLibary:g,setOpenLibary:x,Song:a}),Object(s.jsx)(d,{currentSong:a,isPlaying:b,setIsplaying:m,setCurrentSong:p,songArray:c}),Object(s.jsx)(h,{openLibary:g,setIsplaying:m,setCurrentSong:p,songArray:c})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.629b474c.chunk.js.map