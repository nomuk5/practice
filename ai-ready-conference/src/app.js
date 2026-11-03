(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var SP=window.SPEAKERS, PG=window.PROGRAM, BIOS=window.BIOS||{};
var byId={}; SP.forEach(function(s){var b=BIOS[s.id]||{};if(b.role)s.role=b.role;s.hl=b.hl||'';s.bio=b.bio||[];byId[s.id]=s});

/* ---------- deterministic generated portrait (used until real photos are supplied) ---------- */
function hash(str){var h=2166136261;for(var i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function portrait(id){
  var h=hash(id), r=function(n){h=Math.imul(h^(h>>>15),2246822519)>>>0;return (h%1000)/1000*n};
  var a=Math.round(r(60)+110), cx=48+r(10), hy=34+r(5), hr=15+r(3), sw=70+r(14);
  var c1=['#2B43FF','#1E35F2','#2A3CF5','#1830E8'][Math.floor(r(4))], c2=['#0B1AA8','#0A1690','#101FB8'][Math.floor(r(3))];
  var g='g'+id, lines='';
  for(var i=0;i<9;i++){lines+='<line x1="'+(-10+i*14)+'" y1="130" x2="'+(40+i*14)+'" y2="-10" stroke="#fff" stroke-opacity=".05" stroke-width="3"/>'}
  return '<svg viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" role="img" aria-label="写真準備中"><defs><linearGradient id="'+g+'" gradientTransform="rotate('+a+' .5 .5)"><stop offset="0" stop-color="'+c1+'"/><stop offset="1" stop-color="'+c2+'"/></linearGradient></defs><rect width="100" height="125" fill="url(#'+g+')"/>'+lines+
    '<path d="M'+(cx-sw/2)+' 125 C'+(cx-sw/2)+' 92 '+(cx-16)+' 80 '+cx+' 80 C'+(cx+16)+' 80 '+(cx+sw/2)+' 92 '+(cx+sw/2)+' 125Z" fill="#fff" fill-opacity=".22"/>'+
    '<ellipse cx="'+cx+'" cy="'+(hy+14)+'" rx="'+(hr*.9)+'" ry="'+hr+'" fill="#fff" fill-opacity=".34"/></svg>';
}
function photoHTML(s){
  if(s.photo){return '<img src="'+s.photo+'" alt="'+s.name+'" onerror="this.parentNode.classList.remove(\'real\');this.outerHTML=window.__portrait(\''+s.id+'\')">'}
  return portrait(s.id);
}
window.__portrait=portrait;

/* ---------- session lookup ---------- */
var sessions={};
PG.forEach(function(p){ if(p.id)sessions[p.id]=p; if(p.ent)sessions[p.ent.id]=p.ent; if(p.smb)sessions[p.smb.id]=p.smb; });
function timeOf(id){
  for(var i=0;i<PG.length;i++){var p=PG[i]; if(p.id===id||(p.ent&&p.ent.id===id)||(p.smb&&p.smb.id===id))return p.t+'–'+p.e}
  return '';
}

/* ---------- speakers ---------- */
(function(){
  var html='', soon='';
  SP.forEach(function(s,idx){
    if(idx===SP.length-1)html+='@@SOON@@';
    var ses=s.session&&sessions[s.session];
    var badge=s.status==='confirmed'?'<span class="badge mono">Confirmed</span>':'<span class="badge exp mono">Tentative</span>';
    html+='<article class="card" tabindex="0" role="button" data-sp="'+s.id+'" aria-label="'+s.name+' のプロフィールを開く">'+badge+'<div class="ph'+(s.photo?' real':'')+'">'+photoHTML(s)+'</div><div class="meta">'+
      '<span class="org">'+s.org+'</span>'+
      '<h3 class="nm jp">'+s.name+(s.alias?'<small>'+s.alias+'</small>':'')+'</h3>'+
      '<span class="rl">'+(s.role||'&nbsp;')+'</span>'+(s.hl?'<span class="hl">'+s.hl+'</span>':'')+
      '<div class="ss">'+(ses?'<span class="mono">'+timeOf(s.session)+'</span><a href="#'+s.session+'" data-go="'+s.session+'">'+ses.title+'</a>':'<span class="mono">Session</span>登壇セッション調整中')+'</div><span class="more mono">Profile +</span></div></article>';
  });
  soon='<article class="card soon"><span class="mono" style="color:var(--cobalt)">Special Keynote</span><div class="disp">COMING<br>SOON</div><p>午前の基調講演に、AIの未来と経営を語る有識者をお迎えする予定です。決定次第お知らせします。</p></article>';
  $('#spGrid').innerHTML=html.replace('@@SOON@@',soon);
})();

/* ---------- program ---------- */
(function(){
  function whoHTML(list){
    var out=[];
    list.forEach(function(k,i){
      if(k==='special'){out.push('<span class="w tbd"><span class="av"></span><span><b>Special Keynote</b><span class="t">登壇者調整中</span></span></span>');return}
      if(k.indexOf('tbd:')===0){out.push('<span class="w tbd"><span class="av"></span><span><b>Speaker TBA</b><span class="t">'+k.slice(4)+'</span></span></span>');return}
      var s=byId[k];
      out.push('<span class="w"><span class="av">'+photoHTML(s)+'</span><span><b>'+s.name+'</b><span class="t">'+s.org+'</span></span></span>');
    });
    return out.join('<span class="x">×</span>');
  }
  function ses(x,cls){
    return '<div class="ses '+(cls||'')+'" id="'+x.id+'"><span class="mono">'+x.tag+'</span><h4 class="jp">'+x.title+'</h4>'+(x.who&&x.who.length?'<div class="who">'+whoHTML(x.who)+'</div>':'')+'</div>';
  }
  var h='';
  PG.forEach(function(p){
    if(p.type==='break'){
      h+='<div class="row"><div class="tm b">'+p.t+'</div><div class="brk mono">'+p.title+'　'+p.t+'–'+p.e+'</div></div>';return;
    }
    h+='<div class="row"><div class="tm">'+p.t+'<span>'+p.e+'</span></div>';
    if(p.type==='tracks'){
      h+='<div class="cell">'+ses(p.ent,'ent')+'</div><div class="cell">'+ses(p.smb,'')+'</div>';
    }else{
      var key=/KEYNOTE|CLOSING SESSION|COMMON/.test(p.tag);
      h+='<div class="cell full">'+ses(p,key?'key':'')+'</div>';
    }
    h+='</div>';
  });
  $('#pg').innerHTML=h;
  $$('[data-go]').forEach(function(a){a.addEventListener('click',function(e){
    var el=document.getElementById(a.getAttribute('data-go')); if(!el)return;
    e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'center'});
    el.classList.add('hl'); setTimeout(function(){el.classList.remove('hl')},2200);
  })});
})();


/* ---------- speaker profile dialog ---------- */
(function(){
  var dlg=$('#spDlg'), box=$('#spDlgIn'); if(!dlg)return;
  function open(id){
    var s=byId[id]; if(!s)return;
    var ses=s.session&&sessions[s.session];
    box.innerHTML='<div class="dlg-ph ph'+(s.photo?' real':'')+'">'+photoHTML(s)+'</div><div class="dlg-tx">'+
      '<span class="mono st">'+(s.status==='confirmed'?'Confirmed':'Tentative')+'</span>'+
      '<span class="org">'+s.org+'</span><h3 class="nm jp">'+s.name+(s.alias?'<small>'+s.alias+'</small>':'')+'</h3>'+
      '<span class="en mono">'+s.en+'</span><p class="rl">'+(s.role||'')+'</p>'+
      (s.bio.length?'<p class="mono lbl">Profile</p><ul>'+s.bio.map(function(b){return '<li>'+b+'</li>'}).join('')+'</ul>':'')+
      '<div class="dsess"><span class="mono">'+(ses?timeOf(s.session):'Session')+'</span>'+(ses?ses.title:'登壇セッション調整中')+'</div></div>';
    if(dlg.showModal)dlg.showModal(); else dlg.setAttribute('open','');
  }
  $$('#spGrid .card[data-sp]').forEach(function(c){
    c.addEventListener('click',function(e){ if(e.target.closest('a'))return; open(c.getAttribute('data-sp')); });
    c.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();open(c.getAttribute('data-sp'))} });
  });
  $('.dlg-x',dlg).addEventListener('click',function(){dlg.close()});
  dlg.addEventListener('click',function(e){ if(e.target===dlg)dlg.close(); });
})();

/* ---------- header / nav ---------- */
(function(){
  var hd=$('#hd'), root=document.documentElement;
  function on(){var s=window.scrollY>40; hd.classList.toggle('solid',s&&!$('#drawer').classList.contains('open')); root.style.setProperty('--hdbg',s?'#fff':'#1E35F2')}
  window.addEventListener('scroll',on,{passive:true}); on();
  var m=$('#menu'), d=$('#drawer');
  function close(){d.classList.remove('open');m.setAttribute('aria-expanded','false');on()}
  m.addEventListener('click',function(){var o=!d.classList.contains('open');d.classList.toggle('open',o);m.setAttribute('aria-expanded',String(o));hd.classList.toggle('solid',!o&&window.scrollY>40)});
  $$('#drawer a').forEach(function(a){a.addEventListener('click',close)});
  var links=$$('.nav a'), secs=links.map(function(a){return $(a.getAttribute('href'))});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
    secs.forEach(function(s){s&&io.observe(s)});
  }
})();

/* ---------- form (sample only) ---------- */
$('#form').addEventListener('submit',function(e){
  e.preventDefault();
  var ok=true; $$('#form [required]').forEach(function(i){var v=i.type==='checkbox'?i.checked:i.value.trim(); if(!v){ok=false;i.style.borderColor='#d11'}else{i.style.borderColor=''}});
  var d=$('#done'); d.classList.add('show'); d.textContent=ok?'サンプルサイトのため、送信は行われていません。実運用では、ここで申込完了ページへ遷移します。':'必須項目をご入力ください。';
});

/* ---------- key visual: readiness bars ---------- */
(function(){
  var cv=$('#kv'); if(!cv)return; var ctx=cv.getContext('2d');
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W,H,dpr,N,mx=-1,t0=performance.now(),raf;
  function size(){var r=cv.getBoundingClientRect();dpr=Math.min(window.devicePixelRatio||1,2);W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);N=W<640?44:W<1100?84:128}
  function ease(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3)}
  function draw(now){
    var t=(now-t0), intro=reduce?1:null;
    ctx.clearRect(0,0,W,H);
    var step=W/N, bw=Math.max(1.5,step*.46);
    for(var i=0;i<N;i++){
      var x=(i+.5)/N, p=Math.pow(x,1.55);
      var wave=.5+.5*Math.sin(x*11-(reduce?0:t*.00045)+Math.sin(x*3.1)*1.6);
      var ripple=mx>=0?Math.exp(-Math.pow((x-mx)*9,2))*.14:0;
      var lvl=.07+.86*p*(.62+.38*wave)+ripple*p;
      var k=intro===null?ease((t-i*9)/1100):1;
      var h=H*lvl*k;
      var a=.16+.84*Math.pow(x,1.35);
      var cx=i*step+(step-bw)/2;
      var lit=i>=N-2;
      ctx.fillStyle=lit?'#fff':'rgba(255,255,255,'+a.toFixed(3)+')';
      ctx.fillRect(cx,H-h,bw,h);
      ctx.fillStyle='rgba(255,255,255,'+Math.min(1,a+.2).toFixed(3)+')';
      ctx.fillRect(cx,H-h,bw,Math.max(2,bw*.5));
    }
    if(!reduce)raf=requestAnimationFrame(draw);
  }
  size(); draw(performance.now());
  window.addEventListener('resize',function(){size();if(reduce)draw(0)});
  if(!reduce){
    cv.parentNode.addEventListener('pointermove',function(e){var r=cv.getBoundingClientRect();mx=(e.clientX-r.left)/r.width});
    cv.parentNode.addEventListener('pointerleave',function(){mx=-1});
    document.addEventListener('visibilitychange',function(){if(document.hidden)cancelAnimationFrame(raf);else raf=requestAnimationFrame(draw)});
  }
})();
})();
