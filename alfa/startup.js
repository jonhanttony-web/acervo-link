(()=>{
 const root=document.getElementById('app-content'),screen=document.getElementById('startup'),text=document.getElementById('startup-text'),spinner=document.getElementById('startup-spinner'),retry=document.getElementById('startup-retry');
 let timer;
 function fail(message){clearTimeout(timer);text.textContent=message||'A preparação está demorando mais que o esperado. Confira a conexão e tente novamente.';spinner.hidden=true;retry.hidden=false;screen.setAttribute('aria-busy','false')}
 function begin(){clearTimeout(timer);root.inert=true;root.setAttribute('aria-hidden','true');screen.hidden=false;document.body.classList.add('startup-pending');screen.setAttribute('aria-busy','true');text.textContent='Preparando seu acervo…';spinner.hidden=false;retry.hidden=true;timer=setTimeout(()=>fail(),30000)}
 function ready(){clearTimeout(timer);root.inert=false;root.removeAttribute('aria-hidden');screen.hidden=true;screen.setAttribute('aria-busy','false');document.body.classList.remove('startup-pending')}
 retry.onclick=()=>location.reload();
 window.acervoStartup={begin,ready,fail};
 window.addEventListener('error',event=>{if(event.target?.tagName==='SCRIPT')fail('Não foi possível carregar o aplicativo. Confira a conexão e tente novamente.')},true);
 begin();
})();
