if(!self.define){let e,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=l,document.head.appendChild(e)}else e=n,importScripts(n),l()})).then((()=>{let e=l[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(l[a])return;let u={};const f=e=>n(e,a),c={module:{uri:a},exports:u,require:f};l[a]=Promise.all(i.map((e=>c[e]||f(e)))).then((e=>(r(...e),u)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0044c77e01929bb5c77d.png",revision:null},{url:"026a01bfbf3edf219eca.wav",revision:null},{url:"0bd5272e84d4c0e2bfe7.wav",revision:null},{url:"135f405f7c96978bbf6f.wav",revision:null},{url:"31b46e8edc0a213e5aea.stl",revision:null},{url:"31fafc6fee40279769ec.stl",revision:null},{url:"5fc945120f6d9bd5d795.wav",revision:null},{url:"6bca09fecfdb7e02c907.stl",revision:null},{url:"6dd40fb8df28bc1001b6.wav",revision:null},{url:"701ae7bff0dccfb68f44.wav",revision:null},{url:"7ba5af4d131f4450ae91.stl",revision:null},{url:"874359fb7a6fc18ce6e4.png",revision:null},{url:"8a732d61e7084e7b72b9.wav",revision:null},{url:"960898ce23885a8c839d.png",revision:null},{url:"960f30aa89c88f4db874.stl",revision:null},{url:"96f828630a7bb5aff84e.stl",revision:null},{url:"a57a1719bacb08e083a4.png",revision:null},{url:"bc64c5c02007aa4088fa.wav",revision:null},{url:"e82f0bfde2b255859a71.png",revision:null},{url:"ed1b2171930dead3b918.stl",revision:null},{url:"f3a0ba0920aeca31f66f.png",revision:null},{url:"favicon.png",revision:"9a5ebd44f9ad5a61d2c2aa9f62c18eb8"},{url:"icon192.png",revision:"2e81157b5c6524bd64b6b0edac0241e8"},{url:"icon512.png",revision:"a5d5f58420c44427ec55332ad6d98d25"},{url:"iconmaskable.png",revision:"2bbc138ec3f718b7ac60cb32aecca110"},{url:"index.html",revision:"d0695d7377144ea70f39efdb829d623e"},{url:"main.js",revision:"ef47df6cd0161fbfb064a4fdca169d65"},{url:"main.js.LICENSE.txt",revision:"f95a022eae0ad710baaa35924e8571aa"},{url:"manifest.json",revision:"337b48bc979c586a577202fb4cb87c8b"}],{})}));
