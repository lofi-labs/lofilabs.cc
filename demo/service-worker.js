if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let c={};const o=e=>i(e,s),d={module:{uri:s},exports:c,require:o};n[s]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(l(...e),c)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0044c77e01929bb5c77d.png",revision:null},{url:"2b22ffdc1ddd14a64d9b.stl",revision:null},{url:"31b46e8edc0a213e5aea.stl",revision:null},{url:"3f106edcb6c5ac1e11a8.stl",revision:null},{url:"874359fb7a6fc18ce6e4.png",revision:null},{url:"a57a1719bacb08e083a4.png",revision:null},{url:"cffe37d18d5d31ab0356.stl",revision:null},{url:"e82f0bfde2b255859a71.png",revision:null},{url:"favicon.png",revision:"06cdee006ab71d421dc09aecfc31d115"},{url:"icon192.png",revision:"090b35c545a0e676f1a1eb2d570ad050"},{url:"icon512.png",revision:"fe8b82618cec38793b10a700e98d675c"},{url:"iconmaskable.png",revision:"f794a7737a1524f7de3e0e13d76dea97"},{url:"index.html",revision:"68edec7ad28d5d80d9c381ec7f83fd70"},{url:"main.js",revision:"f281e6e7fc9abb10952ef5de47239502"},{url:"main.js.LICENSE.txt",revision:"f95a022eae0ad710baaa35924e8571aa"},{url:"manifest.json",revision:"3fa2c906ecd7e57ae0099c405e69b7f6"}],{})}));
