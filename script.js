const P=[
{n:'和栗のモンブラン',en:'Marron Mont-Blanc',tag:'ひと粒の栗が、秋をまとう。',d:'細く絞った和栗クリームの下に、しっとりのサブレ生地。頂上には渋皮煮と生クリームをのせました。',price:720,bg:'#ecd3b4',ac:'#6b3414',img:'images/chestnut_01_mont_blanc.webp',t:[4,4,5],chips:['和栗','渋皮煮','生クリーム'],ing:'和栗ペースト、渋皮煮、生クリーム、バター、小麦粉、卵、砂糖、ラム酒',eat:'フォークを縦に入れて、クリームと生地を一緒にどうぞ。渋皮煮は最後のお楽しみ。'},
{n:'かぼちゃのモンブランタルト',en:'Pumpkin Tart',tag:'黄金色の、焼きかぼちゃ。',d:'ローストしたかぼちゃのクリームを、アーモンド香るタルトに。パンプキンシードとセージを飾りました。',price:680,bg:'#f6c26b',ac:'#b0500a',img:'images/pumpkin_01_mont_blanc_tart.webp',t:[4,3,4],chips:['かぼちゃ','パンプキンシード','ピスタチオ'],ing:'かぼちゃ、アーモンドプードル、バター、生クリーム、ピスタチオ、パンプキンシード、シナモン、砂糖',eat:'温かい紅茶と一緒に。タルトの縁から崩すと、サクッとした食感が際立ちます。'},
{n:'紫芋のチーズケーキ',en:'Purple Yam Cheesecake',tag:'深い紫は、芋そのままの色。',d:'なめらかなクリームチーズに紫芋を練り込みました。ざくざくの生地と、パリッと焼いた紫芋チップで食感に変化を。',price:640,bg:'#d9b8ef',ac:'#5b2a86',img:'images/sweet_potato_02_cheesecake.webp',t:[3,5,3],chips:['紫芋','クリームチーズ','芋チップ'],ing:'紫芋、クリームチーズ、生クリーム、卵、ビスケット、バター、砂糖、レモン果汁',eat:'先端から少しずつ。ホイップと芋チップを一緒にすくうと、甘さと塩気が重なります。'},
{n:'栗のプロフィットロール',en:'Marron Profiteroles',tag:'三つ重ねの、栗づくし。',d:'さっくり焼いたシュー生地に、栗クリームをたっぷり。ビターチョコとお飾りの金箔が上品に香ります。',price:780,bg:'#e8c9a0',ac:'#5a3017',img:'images/chestnut_03_profiteroles.webp',t:[3,5,4],chips:['栗クリーム','シュー','ビターチョコ'],ing:'栗ペースト、小麦粉、バター、卵、牛乳、生クリーム、チョコレート、金箔、砂糖',eat:'3個入りです。手でそのまま持ち、チョコが割れる音を聞きながらかぶりついてください。'},
{n:'かぼちゃのブリュレプリン',en:'Pumpkin Crème Brûlée',tag:'焦がしキャラメルの、秋の甘さ。',d:'かぼちゃの濃厚なプリンに、ほろ苦いキャラメルをとろり。シナモンをふったホイップをのせました。',price:520,bg:'#f9d9a0',ac:'#a2470a',img:'images/sweet_potato_01_brulee.webp',t:[4,4,3],chips:['かぼちゃ','キャラメル','シナモン'],ing:'かぼちゃ、卵、牛乳、生クリーム、砂糖、シナモン、バニラ',eat:'スプーンでキャラメルを割り、底までまっすぐすくって。冷たいままがおすすめです。'},
{n:'紫芋の大福',en:'Purple Yam Daifuku',tag:'もちもちの中に、ほくほく芋。',d:'ほんのり紫色のお餅で、紫芋あんと蜜漬けのさつまいもを包みました。ひと口で秋の食感が楽しめます。',price:380,bg:'#e6d4f2',ac:'#6d3f8f',img:'images/sweet_potato_03_daifuku.webp',t:[3,3,5],chips:['紫芋あん','さつまいも','白玉粉'],ing:'紫芋あん、さつまいも、白玉粉、砂糖、片栗粉、水あめ',eat:'お茶と一緒に、半分に割ってどうぞ。断面の芋がごろっと出てきます。'}];
const $=s=>document.querySelector(s),yen=n=>'¥'+n.toLocaleString();
let cur=0,cart={},mi=0,mq=1;
const R=()=>Math.random();
function setP(i,first){cur=i;const p=P[i],r=document.documentElement.style;r.setProperty('--bg',p.bg);r.setProperty('--ac',p.ac);
$('#en').textContent=p.en;$('#bgt').textContent=p.en.split(' ')[0];
$('#nm').innerHTML=[...p.n].map((c,k)=>`<span class="ch" style="--i:${k};--dx:${(R()-.5)*600}px;--dy:${(R()-.5)*500-100}px;--r:${(R()-.5)*180}deg">${c}</span>`).join('');
['tg','ds','pr'].forEach(k=>{const e=$('#'+k);e.classList.remove('fade');void e.offsetWidth;e.classList.add('fade')});
$('#tg').textContent=p.tag;$('#ds').textContent=p.d;$('#pr').innerHTML=yen(p.price)+'<small>税込</small>';
const im=$('#himg');im.classList.remove('in');void im.offsetWidth;im.src=p.img;im.alt=p.n;im.classList.add('in');
$('#chips').innerHTML=p.chips.map((c,k)=>{const pos=[['8%','14%'],['4%','58%'],['74%','74%']][k],s=k==2?1:-1;return `<span class="chip" style="--i:${k};--fx:${s*-200}px;left:${pos[0]};top:${pos[1]}">${c}</span>`}).join('');
document.querySelectorAll('.sb').forEach((b,k)=>{b.classList.toggle('on',k==i);b.setAttribute('aria-selected',k==i)})}
$('#sel').innerHTML=P.map((p,i)=>`<button class="sb" role="tab" aria-label="${p.n}" data-i="${i}"><img src="${p.img}" alt=""></button>`).join('');
$('#sel').onclick=e=>{const b=e.target.closest('.sb');if(b)setP(+b.dataset.i)};
$('#grid').innerHTML=P.map((p,i)=>`<div class="card rv" tabindex="0" role="button" aria-label="${p.n}の詳細" data-i="${i}" style="--cb:${p.bg};--ca:${p.ac};transition-delay:${(i%3)*.1}s"><div class="im"><img src="${p.img}" alt="${p.n}" loading="lazy"></div><h3>${p.n}</h3><div class="pr"><span>${yen(p.price)}</span><button class="add" data-a="${i}" aria-label="${p.n}をカートに入れる">+</button></div></div>`).join('');
$('#grid').onclick=e=>{const a=e.target.closest('[data-a]');if(a){addC(+a.dataset.a,1);return}const c=e.target.closest('.card');if(c)openM(+c.dataset.i)};
$('#grid').onkeydown=e=>{if(e.key=='Enter'&&e.target.classList.contains('card'))openM(+e.target.dataset.i)};
$('#hadd').onclick=()=>addC(cur,1);$('#hdt').onclick=()=>openM(cur);
function openM(i){mi=i;mq=1;const p=P[i];const m=$('#md');m.style.cssText=`--mb:${p.bg};--ma:${p.ac}`;
m.innerHTML=`<button class="x" id="mx" aria-label="閉じる">×</button><div class="mv"><img src="${p.img}" alt="${p.n}"></div><div class="mb"><p style="font-size:13px;opacity:.7">${p.en}</p><h3>${p.n}</h3><p style="margin:6px 0;font-weight:800">${p.tag}</p><p>${p.d}</p>
<h4>味の特徴</h4><div class="meter">${['甘み','コク','香り'].map((l,k)=>`<span>${l}</span><i style="--w:${p.t[k]*20}%"></i>`).join('')}</div>
<h4>原材料</h4><p>${p.ing}</p><h4>おすすめの食べ方</h4><p>${p.eat}</p>
<div class="buy"><b style="font-size:26px;color:var(--ma)">${yen(p.price)}</b><div class="qty"><button id="mm" aria-label="減らす">−</button><span id="mqv">1</span><button id="mp" aria-label="増やす">+</button></div><button class="btn fill" id="ma" style="--ac:${p.ac}">カートに入れる</button></div><p style="font-size:12px;margin-top:8px;opacity:.7" id="mt">小計 ${yen(p.price)}</p></div>`;
const up=()=>{$('#mqv').textContent=mq;$('#mt').textContent='小計 '+yen(p.price*mq)};
$('#mm').onclick=()=>{mq=Math.max(1,mq-1);up()};$('#mp').onclick=()=>{mq=Math.min(20,mq+1);up()};
$('#ma').onclick=()=>{addC(i,mq);closeAll()};$('#mx').onclick=closeAll;m.classList.add('on');$('#ov').classList.add('on')}
function closeAll(){['#md','#dr','#ov'].forEach(s=>$(s).classList.remove('on'))}
$('#ov').onclick=closeAll;$('#dx').onclick=closeAll;document.onkeydown=e=>{if(e.key=='Escape')closeAll()};
function openC(){$('#dr').classList.add('on');$('#ov').classList.add('on')}$('#cb').onclick=openC;$('#cb2').onclick=openC;
function toast(t){const e=$('#ts');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),1800)}
function addC(i,q){cart[i]=Math.min(20,(cart[i]||0)+q);toast(`${P[i].n}を${q}個、カートに入れました`);renderC();['#cb','#cb2'].forEach(s=>{const b=$(s);b.classList.remove('bump');void b.offsetWidth;b.classList.add('bump')})}
function renderC(){const ids=Object.keys(cart).filter(k=>cart[k]>0);let sub=0,n=0;
$('#items').innerHTML=ids.length?ids.map(k=>{const p=P[k],q=cart[k];sub+=p.price*q;n+=q;return `<div class="it" style="--cb:${p.bg}"><img src="${p.img}" alt=""><div><h5>${p.n}</h5><small>${yen(p.price)}</small><div class="qty"><button data-d="${k}" data-v="-1" aria-label="減らす">−</button><span>${q}</span><button data-d="${k}" data-v="1" aria-label="増やす">+</button></div></div><div style="text-align:right"><b>${yen(p.price*q)}</b><br><button class="rm" data-d="${k}" data-v="0">削除</button></div></div>`}).join(''):'<p class="empty">カートは空です。気になるお菓子を選んでください。</p>';
const ship=sub==0?0:sub>=3000?0:500;
$('#sum').innerHTML=ids.length?`<div><span>小計</span><span>${yen(sub)}</span></div><div><span>送料</span><span>${ship?yen(ship):'無料'}</span></div>${ship?`<small>あと${yen(3000-sub)}で送料無料</small>`:''}<div class="t"><span>合計(税込)</span><span>${yen(sub+ship)}</span></div><button class="btn fill" style="width:100%" id="co">注文に進む</button>`:'';
$('#cnt').textContent=$('#cnt2').textContent=n;const co=$('#co');if(co)co.onclick=()=>{cart={};renderC();closeAll();toast('ご注文ありがとうございます(デモ)')}}
$('#items').onclick=e=>{const b=e.target.closest('[data-d]');if(!b)return;const k=b.dataset.d,v=+b.dataset.v;cart[k]=v==0?0:Math.max(0,Math.min(20,cart[k]+v));renderC()};
function lv(){const e=document.createElement('div');e.className='leaf';e.textContent=['🍂','🍁','🌰'][Math.floor(R()*3)];e.style.cssText=`left:${R()*100}vw;--w:${(R()-.5)*200}px;animation-duration:${9+R()*8}s;font-size:${14+R()*16}px`;document.body.appendChild(e);setTimeout(()=>e.remove(),18000)}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){setInterval(lv,1400)}
let tk=0;addEventListener('scroll',()=>{if(tk)return;tk=1;requestAnimationFrame(()=>{const y=scrollY,h=document.documentElement;h.style.setProperty('--sy',Math.min(y,3000));h.style.setProperty('--hy',Math.max(0,Math.min(y-$('#top').offsetTop,1400)));h.style.setProperty('--p',y/(h.scrollHeight-innerHeight));tk=0})},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.15});document.querySelectorAll('.rv').forEach(e=>io.observe(e));
$('#top').addEventListener('pointermove',e=>{const r=$('#tilt').getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;$('#tilt').style.transform=`perspective(900px) rotateY(${x*14}deg) rotateX(${-y*14}deg)`});
$('#top').addEventListener('pointerleave',()=>$('#tilt').style.transform='');
if(innerWidth<=700){$('#cb').style.display='none';$('#cb2').style.display=''}

function fly(el,txt){el.innerHTML=[...txt].map((c,k)=>`<span class="ch" style="--i:${k};--dx:${(R()-.5)*700}px;--dy:${(R()-.5)*600}px;--r:${(R()-.5)*240}deg">${c}</span>`).join('')}
fly($('#it'),'実りの菓子');fly($('#is'),'MINORI');$('#is').querySelectorAll('.ch').forEach(e=>e.style.setProperty('--i',+e.style.getPropertyValue('--i')+6));
$('#ifl').innerHTML=[[0,'6%','18%',.12,-300],[1,'78%','12%',.2,300],[2,'8%','66%',.28,-300],[5,'76%','64%',.16,300]].map(([i,l,t,s,ox],k)=>`<img class="ifl" src="${P[i].img}" alt="" style="--k:${k};left:${l};top:${t};--s:${-s*2};--ox:${ox}px">`).join('');

let sa=0;function goTo(y){cancelAnimationFrame(sa);const s=scrollY,d=y-s;if(!d)return;if(matchMedia('(prefers-reduced-motion:reduce)').matches){scrollTo({top:y,behavior:'instant'});return}
const t=Math.min(1600,Math.max(700,Math.abs(d)*.55)),t0=performance.now(),ez=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
const st=n=>{const k=Math.min(1,(n-t0)/t);scrollTo({top:s+d*ez(k),behavior:'instant'});if(k<1)sa=requestAnimationFrame(st)};sa=requestAnimationFrame(st)}
addEventListener('wheel',()=>cancelAnimationFrame(sa),{passive:true});addEventListener('touchstart',()=>cancelAnimationFrame(sa),{passive:true});
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const id=a.getAttribute('href').slice(1),el=id&&document.getElementById(id);if(!el)return;e.preventDefault();closeAll();goTo(id=='intro'?0:el.getBoundingClientRect().top+scrollY)});
$('#igo').onclick=()=>goTo($('#top').offsetTop);
let seen=0;new IntersectionObserver(es=>{if(es[0].isIntersecting&&!seen){seen=1;setP(cur)}},{threshold:.35}).observe($('#top'));
setP(0);renderC();
