if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const f=e=>s(e,o),t={module:{uri:o},exports:c,require:f};i[o]=Promise.all(n.map((e=>t[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/about-JEV-06jA.js",revision:null},{url:"assets/contact-fVk7e7Cu.js",revision:null},{url:"assets/index-6h0OGAgS.js",revision:null},{url:"assets/index-SSZoRBjh.css",revision:null},{url:"index.html",revision:"0766fd0008f0f1a88efc436493aea67f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"f2413d192135c1f5194f5e7016a8a4d0"},{url:"pwa-64x64.png",revision:"349705ff2e4cfb54bb5f9959fac93091"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"maskable-icon-512x512.png",revision:"833fff5b4eec6c465ab04ccd3f704220"},{url:"manifest.webmanifest",revision:"d51fda1c2b97193099caa315ea185736"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
