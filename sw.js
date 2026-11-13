'use strict';
const OFFLINE='<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Acesso desativado</title><body><h1>Este acesso foi desativado.</h1><p>Solicite ao responsável o acesso ao aplicativo atual.</p></body></html>';
function oldPath(url){const scope=new URL(self.registration.scope),relative=url.pathname.slice(scope.pathname.length);return url.origin===scope.origin&&url.pathname.startsWith(scope.pathname)&&!['app','alfa'].some(p=>relative===p||relative.startsWith(p+'/'))}
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{
 for(const name of await caches.keys())if(name.startsWith('ecovix-acervo-shell-')||name==='ecovix-acervo-objects-v2')await caches.delete(name);
 // Apenas o banco legado. Bases acervo-prod e acervo-alpha permanecem intactas.
 indexedDB.deleteDatabase('ecovix-acervo-local');
 await self.clients.claim();
 for(const c of await self.clients.matchAll({type:'window'}))if(oldPath(new URL(c.url)))await c.navigate(self.registration.scope).catch(()=>{});
})()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||!oldPath(new URL(e.request.url)))return;
 if(e.request.mode==='navigate'){e.respondWith(fetch(new URL('index.html',self.registration.scope),{cache:'no-store'}).catch(()=>new Response(OFFLINE,{headers:{'Content-Type':'text/html;charset=utf-8'}})));return}
 const relative=new URL(e.request.url).pathname.slice(new URL(self.registration.scope).pathname.length);
 if(relative==='sw.js')return;
 e.respondWith(new Response('Acesso desativado',{status:410,headers:{'Cache-Control':'no-store','Content-Type':'text/plain;charset=utf-8'}}));
});
