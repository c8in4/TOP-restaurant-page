(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),a=t.n(r),o=t(314),i=t.n(o),c=t(417),d=t.n(c),u=new URL(t(109),t.b),s=i()(a()),m=d()(u);s.push([e.id,`:root {\n  --primary-bg-clr: #ffffffce;\n  --button-hover-clr: #ffffff;\n  --main-width: clamp(65ch, 70dvw, 100ch);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  background-image: url(${m});\n  background-size: cover;\n  background-repeat: repeat repeat;\n  background-position: top center;\n  opacity: 0.5;\n}\n\nbody {\n  position: relative;\n  min-height: 100dvh;\n  width: 100dvw;\n  overflow-x: hidden;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  text-align: center;\n}\n\nheader {\n  background-color: var(--primary-bg-clr);\n  width: var(--main-width);\n\n  margin: 0 auto 2rem auto;\n}\n\nh1 {\n  margin-top: 2rem;\n}\n\nh2 {\n  margin: 1rem;\n}\n\nheader nav {\n  display: flex;\n  justify-content: center;\n  width: var(--main-width);\n  margin: 2rem auto 0 auto;\n}\n\nheader nav button {\n  flex: 1;\n  border: none;\n  padding: 1rem 2rem;\n  background: none;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\nheader nav button:hover {\n  background: var(--button-hover-clr);\n  cursor: pointer;\n}\n\nmain {}\n\nmain div {\n  background: var(--primary-bg-clr);\n  width: var(--main-width);\n  margin: 0 auto 2rem auto;\n  padding: 1rem 0;\n}\n\nmain div img {\n  margin: 2rem auto;\n  width: 50%;\n  border-radius: 0.5rem;\n  outline: 0.5rem solid #ffffff;\n  box-shadow: 3px 3px 10px 10px rgb(100, 100, 100);\n}\n\nmain div h1 {\n  padding-top: 1rem;\n}\n\nmain div p {\n  padding-bottom: 1rem;\n  margin: 1rem auto;\n  text-align: center;\n  width: clamp(40ch, 65ch, 80%);\n}\n\ndiv.contact {\n  margin: 0 auto;\n  background: none;\n  width: fit-content;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\ndiv.menu {\n  width: clamp(40ch, 65ch, 80%);\n  margin: 1rem auto;\n  border: 5px;\n  border-style: ridge;\n  border-radius: 0.5rem;\n  outline: 0.3rem solid #ffffff;\n  box-shadow: 3px 3px 10px 10px rgb(100, 100, 100);\n}\n\ndiv.menu h3 {\n  text-transform: uppercase;\n}\n\nmain .contact {\n  margin: 1rem auto;\n  padding: 1rem;\n  border: 5px;\n  border-style: ridge;\n  border-radius: 0.5rem;\n  outline: 0.3rem solid #ffffff;\n  box-shadow: 3px 3px 5px 5px rgb(100, 100, 100);\n}\n\nmain .contact p {\n  padding: 0;\n  margin: 0;\n  width: fit-content;\n}\n\nfooter {\n  padding: 1rem;\n  margin: 0 auto;\n  background: var(--primary-bg-clr);\n  width: var(--main-width);\n}`,""]);const p=s},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],u=r.base?d[0]+r.base:d[0],s=o[u]||0,m="".concat(u," ").concat(s);o[u]=s+1;var p=t(m),l={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(l);else{var f=a(l,r);r.byIndex=c,n.splice(c,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),u=0;u<o.length;u++){var s=t(o[u]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},109:(e,n,t)=>{e.exports=t.p+"79d1889ca72fa179167d.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(109);const a=()=>{const e=document.createElement("div"),n=new Image,t=document.createElement("h2"),a=document.createElement("p");return n.src=r,t.textContent="Pizza",a.innerText="Our pizzas are Hand Stretched with Premium Traditional 'Italian oo' Flour.\nWood fired to prefection, Nothing can compare.\nSquisito - Deliziosa!",e.append(n,t,a),e},o=[{namePrice:"Garlic Pizza Bread $18",description:"Wild Rosemary and Garlic infused Olive oil - Parmesan Cheese and Homemade Hummus"},{namePrice:"Margarita Magic $22",description:"Buffalo Mozzarella - Basil leaves - Hand Crushed 'Roma' Tomato Sauce"},{namePrice:"BBQ Chicken and Bacon $26",description:"Chicken Breast - Streaky Bacon - Korean BBQ Sauce - Hand Crushed 'Roma' Tomato Sauce"},{namePrice:"Classic Pepperoni $26",description:"Italian Pepperoni - Buffalo Mozzarella - Hand Crushed 'Roma' Tomato Sauce"},{namePrice:"King Carnivore $28",description:"Chorizo - Italian Salami - Manuka Smoked Ham - Red Onion - Capsicum - Hand Crushed 'Roma' Tomato Sauce"},{namePrice:"Garlic and Chilli Prawn $28",description:"Buffalo Mozzarella - Capers - Wild Rocket - Hand Crushed 'Roma' Tomato Sauce"},{namePrice:"Vegie Delight $26",description:"Honey Roasted Pumpkin - Mushrooms - Baby Spinach - Sundried Tomatoes - Fire Roasted peppers - Basil pesto - Hand Crushed 'Roma' Tomato Sauce"},{namePrice:"Hawaiian Hero $24",description:"Classic Ham - Pineapple - Hand Crushed 'Roma' Tomato Sauce"}];var i=t(72),c=t.n(i),d=t(825),u=t.n(d),s=t(659),m=t.n(s),p=t(56),l=t.n(p),f=t(540),h=t.n(f),g=t(113),v=t.n(g),b=t(208),x={};x.styleTagTransform=v(),x.setAttributes=l(),x.insert=m().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=h(),c()(b.A,x),b.A&&b.A.locals&&b.A.locals;const y=document.querySelector("main"),w=[document.querySelector("#homeButton"),document.querySelector("#menuButton"),document.querySelector("#contactButton")];let C=a();y.appendChild(C),w.forEach((e=>{e.addEventListener("click",(e=>function(e){switch(y.innerHTML="",e){case"homeButton":C=a();break;case"menuButton":C=(()=>{const e=document.createElement("div"),n=document.createElement("h2"),t=document.createElement("div");return t.classList.add("menu"),n.textContent="Menu",o.forEach((e=>{const n=document.createElement("h3"),r=document.createElement("p");n.textContent=e.namePrice,r.textContent=e.description,t.append(n,r)})),e.append(n,t),e})();break;case"contactButton":C=(()=>{const e=document.createElement("div"),n=document.createElement("h2"),t=document.createElement("div");t.classList.add("contact");const r=document.createElement("h3"),a=document.createElement("p"),o=document.createElement("p"),i=document.createElement("p"),c=document.createElement("p");return n.textContent="Contact",r.textContent="Pizza Place",a.textContent="Phone:",o.textContent="0123456789",i.textContent="E-Mail:",c.textContent="info@pizza.com",t.append(a,o,i,c),e.append(n,r,t),e})()}y.appendChild(C)}(e.target.id)))}))})();