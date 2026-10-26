/* Ferramentas do plantão (out/2026): cronômetro de PCR, lista do plantão com passagem (SBAR), atestados e encaminhamentos,
   conversores de opioides e corticoides, ventilação mecânica inicial; condutas de ajuste renal de antibióticos e hemotransfusão. */

/* ---------- Cronômetro de PCR ---------- */
let PCRS=null;try{PCRS=JSON.parse(sessionStorage.getItem('kitps:pcr')||'null')}catch(e){PCRS=null}
let PCRT=null,PCRM=null,PCRAC=null,PCRLOCK=null;
const pcrSave=()=>{try{sessionStorage.setItem('kitps:pcr',JSON.stringify(PCRS))}catch(e){}};
const mmss=ms=>{const s=Math.max(0,Math.floor(ms/1000));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
const hhmm=t=>{const d=new Date(t);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0')};
function beep(f,d){try{PCRAC=PCRAC||new (window.AudioContext||window.webkitAudioContext)();const o=PCRAC.createOscillator(),g=PCRAC.createGain();o.frequency.value=f;g.gain.value=.15;o.connect(g);g.connect(PCRAC.destination);o.start();o.stop(PCRAC.currentTime+d)}catch(e){}}
function metro(on){clearInterval(PCRM);PCRM=null;if(on)PCRM=setInterval(()=>beep(880,.04),60000/110)}
FN.pcr={g:'cv',t:'Cronômetro de PCR',code:'ciclos, drogas e registro',k:'cronometro pcr parada cardiaca rcp reanimacao ciclo 2 minutos adrenalina amiodarona choque metronomo registro acls',render(m){
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Cronômetro de PCR</h2><span class="code">ACLS 2020</span></div>
   <div class="card pcrbox"><div class="pcrgrid"><div><div class="lbl">Tempo total</div><div class="pcrbig" id="pc-tot">00:00</div></div>
     <div><div class="lbl">Ciclo (2 min)</div><div class="pcrbig" id="pc-cyc">02:00</div></div>
     <div><div class="lbl">Última adrenalina</div><div class="pcrbig" id="pc-adr">—</div></div></div>
     <p class="note" id="pc-msg">Toque em Iniciar quando a PCR for constatada.</p></div>
   <div class="bar"><button class="btn primary" id="pc-go" type="button">Iniciar PCR</button><button class="btn" id="pc-met" type="button" aria-pressed="false">Metrônomo 110/min</button></div>
   <div class="pcrbtns">
     <button class="btn" data-ev="cyc" type="button">Checar ritmo / novo ciclo</button>
     <button class="btn" data-ev="choque" type="button">Choque</button>
     <button class="btn" data-ev="adr" type="button">Adrenalina 1 mg</button>
     <button class="btn" data-ev="amio" type="button">Amiodarona</button>
     <button class="btn" data-ev="lido" type="button">Lidocaína</button>
     <button class="btn" data-ev="iot" type="button">Via aérea avançada</button>
     <button class="btn" data-ev="acesso" type="button">Acesso (EV/IO)</button>
     <button class="btn" data-ev="nota" type="button">+ Anotação</button>
     <button class="btn primary" data-ev="rce" type="button">RCE</button>
     <button class="btn danger" data-ev="fim" type="button">Encerrar</button></div>
   <article class="card"><h3>Registro</h3><pre class="rx" id="pc-log"></pre>
     <div class="bar"><button class="btn primary small" id="pc-cp" type="button">Copiar registro</button><button class="btn small" id="pc-clr" type="button">Apagar</button></div></article>
   <details class="card"><summary class="lbl" style="cursor:pointer">Lembretes: 5 Hs e 5 Ts</summary><p class="note" style="margin-top:8px">Hipovolemia · Hipóxia · H+ (acidose) · Hipo/hipercalemia · Hipotermia · Tensão no tórax (pneumotórax) · Tamponamento · Toxinas · Trombose pulmonar · Trombose coronária. Compressões 100–120/min, 5–6 cm, retorno total, trocar quem comprime a cada 2 min, interrupções &lt; 10 s. Chocáveis: 200 J bifásico (ou máximo do aparelho). Amiodarona 300 mg, depois 150 mg; lidocaína 1–1,5 mg/kg, depois 0,5–0,75 mg/kg.</p></details>
   <p class="note">O registro fica só nesta aba do navegador. Mantenha a tela ligada durante o atendimento.</p></section>`;
  const st=()=>PCRS||(PCRS={t0:0,ev:[],adr:0,cyc:0,amio:0,end:0});
  const add=(txt,t)=>{const s=st();t=t||Date.now();s.ev.push({t,txt});pcrSave();draw()};
  const draw=()=>{const s=st();$('#pc-log').textContent=s.ev.length?s.ev.map(e=>`${hhmm(e.t)} (${s.t0?mmss(e.t-s.t0):'00:00'}) ${e.txt}`).join('\n'):'Nenhum evento.';$('#pc-go').textContent=s.t0&&!s.end?'PCR em andamento':'Iniciar PCR'};
  const tick=()=>{if(!document.getElementById('pc-tot')){clearInterval(PCRT);PCRT=null;metro(false);return}const s=st(),now=s.end||Date.now();
    if(!s.t0)return;$('#pc-tot').textContent=mmss(now-s.t0);
    const left=120000-(now-(s.cyc||s.t0));const c=$('#pc-cyc');c.textContent=left>0?mmss(left):'TROCA';c.classList.toggle('alert',left<=15000);
    if(!s.end&&left<=0&&!s.warned){s.warned=1;beep(440,.5);$('#pc-msg').textContent='Fim do ciclo: checar ritmo e trocar quem comprime.'}
    const a=$('#pc-adr');if(s.adr){const da=now-s.adr;a.textContent=mmss(da);a.classList.toggle('alert',da>=180000)}else a.textContent='—'};
  $('#pc-go').onclick=()=>{const s=st();if(s.t0&&!s.end)return;PCRS={t0:Date.now(),ev:[],adr:0,cyc:Date.now(),amio:0,end:0};add('Início da PCR / RCP');$('#pc-msg').textContent='RCP: compressões 100–120/min. Pás e monitor.';try{navigator.wakeLock&&navigator.wakeLock.request('screen').then(l=>PCRLOCK=l).catch(()=>{})}catch(e){}};
  $('#pc-met').onclick=e=>{const on=e.currentTarget.getAttribute('aria-pressed')!=='true';e.currentTarget.setAttribute('aria-pressed',on);e.currentTarget.classList.toggle('primary',on);metro(on)};
  m.querySelectorAll('[data-ev]').forEach(b=>b.onclick=()=>{const s=st(),k=b.dataset.ev;if(!s.t0&&k!=='nota'){toast('Toque em Iniciar PCR primeiro');return}
    if(k==='cyc'){const r=prompt('Ritmo encontrado (FV, TVSP, AESP, assistolia, organizado):','');s.cyc=Date.now();s.warned=0;add('Checagem de ritmo'+(r?': '+r:'')+' — novo ciclo')}
    else if(k==='choque'){const j=prompt('Energia (J):','200');add('Choque'+(j?' '+j+' J':''))}
    else if(k==='adr'){s.adr=Date.now();add('Adrenalina 1 mg EV/IO');$('#pc-msg').textContent='Próxima adrenalina em 3–5 min.'}
    else if(k==='amio'){s.amio=(s.amio||0)+1;add(s.amio===1?'Amiodarona 300 mg EV/IO':'Amiodarona 150 mg EV/IO')}
    else if(k==='lido'){add('Lidocaína '+(prompt('Dose (mg):','100')||'')+' mg EV/IO')}
    else if(k==='iot'){add('Via aérea avançada ('+(prompt('Qual (IOT, supraglótico):','IOT')||'')+')')}
    else if(k==='acesso'){add('Acesso '+(prompt('Tipo (EV periférico, IO):','EV periférico')||''))}
    else if(k==='nota'){const n=prompt('Anotação:','');if(n)add(n)}
    else if(k==='rce'){add('Retorno da circulação espontânea (RCE)');$('#pc-msg').textContent='Pós-RCE: SpO2 92–98%, PAS ≥ 90 / PAM ≥ 65, ECG 12 derivações, glicemia, controle de temperatura.'}
    else if(k==='fim'){confirm2(b,()=>{s.end=Date.now();add('Encerramento: '+(prompt('Desfecho (óbito às __ / transferido / RCE sustentado):','')||''),s.end);metro(false);try{PCRLOCK&&PCRLOCK.release()}catch(e){}})}});
  $('#pc-cp').onclick=()=>{const s=st();if(!s.ev.length){toast('Registro vazio');return}copy('REGISTRO DE PCR\n'+$('#pc-log').textContent)};
  $('#pc-clr').onclick=e=>confirm2(e.currentTarget,()=>{PCRS=null;pcrSave();clearInterval(PCRT);FN.pcr.render(m)});
  draw();clearInterval(PCRT);PCRT=setInterval(tick,250);tick()}};

/* ---------- Lista do plantão e passagem (SBAR) ---------- */
let PL=[];try{PL=JSON.parse(store.get('kitps:plantao')||'[]')}catch(e){PL=[]}
const plSave=()=>store.set('kitps:plantao',JSON.stringify(PL));
const PLF=[['leito','Leito'],['pac','Paciente (iniciais), idade'],['s','S — Situação (diagnóstico, motivo)'],['b','B — Breve histórico (comorbidades, o que foi feito)'],['a','A — Avaliação (estado atual, sinais vitais, exames)'],['r','R — Recomendações e pendências']];
function plText(){return 'PASSAGEM DE PLANTÃO — '+new Date().toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'})+'\n\n'+PL.map((p,i)=>`${i+1}. LEITO ${p.leito||'—'} · ${p.pac||''}\nS: ${p.s||''}\nB: ${p.b||''}\nA: ${p.a||''}\nR: ${p.r||''}`).join('\n\n')}
FN.plantao={g:'geral',t:'Lista do plantão e passagem',code:'SBAR',k:'lista de pacientes plantao passagem de plantao sbar pendencias leitos evolucao handover',render(m){
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Lista do plantão e passagem</h2><span class="code" id="pl-n">${PL.length} paciente(s)</span></div>
   <p class="note">Anote os pacientes no formato SBAR e gere o texto da passagem de plantão. Fica salvo só neste aparelho: use iniciais e apague ao fim do plantão.</p>
   <div id="pl-list"></div>
   <div class="bar"><button class="btn primary" id="pl-add" type="button">+ Paciente</button></div>
   <div class="bar sticky-bar"><button class="btn primary" id="pl-cp" type="button">Copiar passagem</button><button class="btn" id="pl-wa" type="button">WhatsApp</button><button class="btn" id="pl-clr" type="button">Apagar tudo</button></div></section>`;
  const draw=()=>{$('#pl-n').textContent=PL.length+' paciente(s)';const box=$('#pl-list');
    box.innerHTML=PL.length?PL.map((p,i)=>`<article class="card"><div class="grid2">${PLF.slice(0,2).map(([k,l])=>`<div class="field"><label for="pl-${i}-${k}">${l}</label><input id="pl-${i}-${k}" data-i="${i}" data-k="${k}" value="${esc(p[k]||'')}" autocomplete="off"></div>`).join('')}</div>
      ${PLF.slice(2).map(([k,l])=>`<div class="field" style="margin-top:8px"><label for="pl-${i}-${k}">${l}</label><textarea class="soap rxta" id="pl-${i}-${k}" data-i="${i}" data-k="${k}" rows="2">${esc(p[k]||'')}</textarea></div>`).join('')}
      <div class="bar" style="margin-top:8px"><button class="btn small" data-up="${i}" type="button" aria-label="Subir">↑</button><button class="btn small" data-dn="${i}" type="button" aria-label="Descer">↓</button><button class="btn small danger" data-rm="${i}" type="button">Remover</button></div></article>`).join(''):'<div class="card"><p class="note">Nenhum paciente ainda.</p></div>';
    box.querySelectorAll('[data-k]').forEach(e=>{if(e.tagName==='TEXTAREA')fit(e);e.oninput=()=>{if(e.tagName==='TEXTAREA')fit(e);PL[+e.dataset.i][e.dataset.k]=e.value;plSave()}});
    const mv=(i,d)=>{const j=i+d;if(j<0||j>=PL.length)return;[PL[i],PL[j]]=[PL[j],PL[i]];plSave();draw()};
    box.querySelectorAll('[data-up]').forEach(b=>b.onclick=()=>mv(+b.dataset.up,-1));box.querySelectorAll('[data-dn]').forEach(b=>b.onclick=()=>mv(+b.dataset.dn,1));
    box.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>confirm2(b,()=>{PL.splice(+b.dataset.rm,1);plSave();draw()}))};
  $('#pl-add').onclick=()=>{PL.push({});plSave();draw();const f=$('#pl-'+(PL.length-1)+'-leito');if(f)f.focus()};
  $('#pl-cp').onclick=()=>{if(!PL.length){toast('Lista vazia');return}copy(plText())};
  $('#pl-wa').onclick=()=>{if(!PL.length){toast('Lista vazia');return}waSend(plText())};
  $('#pl-clr').onclick=e=>confirm2(e.currentTarget,()=>{PL=[];plSave();draw()});
  draw()}};

/* ---------- WhatsApp ---------- */
function waSend(txt){try{window.open('https://wa.me/?text='+encodeURIComponent(txt),'_blank','noopener')}catch(e){copy(txt)}}

/* ---------- Atestados, declarações e encaminhamento ---------- */
const ATT={
 at:{t:'Atestado médico',f:['dias','cid'],txt:v=>`Atesto, para os devidos fins, que ${v.nome||'__________'}${v.doc?', '+v.doc:''}, foi atendido(a) nesta unidade em ${v.data}, necessitando de afastamento de suas atividades por ${v.dias||'__'} (${extenso(v.dias)}) dia(s), a partir desta data${v.cid?', por motivo de doença (CID-10: '+v.cid+'), informado com autorização do(a) paciente':''}.`},
 cp:{t:'Declaração de comparecimento',f:['hi','hf'],txt:v=>`Declaro, para os devidos fins, que ${v.nome||'__________'}${v.doc?', '+v.doc:''}, esteve nesta unidade em ${v.data}, das ${v.hi||'__:__'} às ${v.hf||'__:__'}, para atendimento médico.`},
 ac:{t:'Declaração de acompanhante',f:['acomp','hi','hf'],txt:v=>`Declaro, para os devidos fins, que ${v.acomp||'__________'} esteve nesta unidade em ${v.data}, das ${v.hi||'__:__'} às ${v.hf||'__:__'}, acompanhando ${v.nome||'__________'} durante atendimento médico.`},
 en:{t:'Encaminhamento',f:['esp','mot'],txt:v=>`Encaminho ${v.nome||'__________'}${v.doc?', '+v.doc:''}, ao serviço de ${v.esp||'__________'}.\n\n${v.mot||'Motivo / resumo clínico: __________'}\n\nAgradeço a atenção.`}};
function extenso(n){n=parseInt(n,10);const u=['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove','dez','onze','doze','treze','catorze','quinze'];return n>=0&&n<u.length?u[n]:String(n||'__')}
FN.atestado={g:'geral',t:'Atestados e encaminhamento',code:'imprimir ou copiar',k:'atestado medico declaracao de comparecimento acompanhante encaminhamento afastamento dias cid imprimir',render(m){
  const today=new Date().toLocaleDateString('pt-BR');
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Atestados e encaminhamento</h2><span class="code">documentos</span></div>
   <div class="card"><div class="field"><label for="at-tp">Documento</label><select id="at-tp">${Object.entries(ATT).map(([k,x])=>`<option value="${k}">${esc(x.t)}</option>`).join('')}</select></div>
    <div class="grid2" style="margin-top:10px"><div class="field"><label for="at-nome">Nome do paciente</label><input id="at-nome" autocomplete="off"></div><div class="field"><label for="at-doc">Documento (CPF/RG/CNS, opcional)</label><input id="at-doc" autocomplete="off"></div><div class="field"><label for="at-data">Data</label><input id="at-data" value="${today}"></div></div>
    <div class="grid2" style="margin-top:10px" id="at-x"></div></div>
   <article class="card"><h3>Texto</h3><textarea class="soap rxta" id="at-txt" rows="5" spellcheck="false"></textarea>
    <div class="bar" style="margin-top:8px"><button class="btn primary small" id="at-cp" type="button">Copiar</button><button class="btn small" id="at-pr" type="button">Imprimir</button></div></article>
   <p class="note">CID no atestado só com autorização expressa do paciente (CFM Res. 1.658/2002). Seus dados de médico(a) e unidade vêm de “Minhas edições e dados”.</p>
   <div id="sheet" class="card atsheet rxsheet"></div></section>`;
  const XF={dias:['Dias de afastamento','1'],cid:['CID-10 (só com autorização)',''],hi:['Hora de chegada',''],hf:['Hora de saída',new Date().toTimeString().slice(0,5)],acomp:['Nome do acompanhante',''],esp:['Especialidade / serviço',''],mot:['Motivo e resumo clínico','']};
  const rd=()=>{const v={nome:$('#at-nome').value.trim(),doc:$('#at-doc').value.trim(),data:$('#at-data').value.trim()};m.querySelectorAll('[data-x]').forEach(e=>v[e.dataset.x]=e.value.trim());return v};
  const upd=()=>{$('#at-txt').value=ATT[$('#at-tp').value].txt(rd());fit($('#at-txt'))};
  const fx=()=>{const d=ATT[$('#at-tp').value];$('#at-x').innerHTML=d.f.map(k=>`<div class="field"${k==='mot'?' style="grid-column:1/-1"':''}><label for="at-${k}">${XF[k][0]}</label>${k==='mot'?`<textarea class="soap" id="at-${k}" data-x="${k}" rows="3"></textarea>`:`<input id="at-${k}" data-x="${k}" value="${esc(XF[k][1])}" autocomplete="off"${k==='dias'?' inputmode="numeric"':''}>`}</div>`).join('');m.querySelectorAll('[data-x]').forEach(e=>e.oninput=upd);upd()};
  $('#at-tp').onchange=fx;['at-nome','at-doc','at-data'].forEach(k=>$('#'+k).oninput=upd);fx();
  $('#at-cp').onclick=()=>copy($('#at-txt').value);
  $('#at-pr').onclick=()=>{const p=profGet(),tp=ATT[$('#at-tp').value];$('#sheet').innerHTML=`<div class="ath">${esc(p.unidade||'Pronto Socorro')}</div><div class="att">${esc(tp.t.toUpperCase())}</div><div class="atb" style="white-space:pre-wrap">${esc($('#at-txt').value)}</div><div class="atf">${esc(p.cidade||'________________')}, ${esc($('#at-data').value)}.<br><br>_______________________________________<br>${esc(p.medico||'Médico(a)')}${p.crm?' · CRM '+esc(p.crm):''}</div>`;setTimeout(()=>{try{window.print()}catch(e){toast('Impressão indisponível aqui')}},50)}}};

/* ---------- Conversores ---------- */
/* Fatores para morfina oral equivalente (mg/dia). */
const OPI=[['morvo','Morfina VO (mg/dia)',1],['morev','Morfina EV/SC (mg/dia)',3],['oxi','Oxicodona VO (mg/dia)',1.5],['trama','Tramadol VO (mg/dia)',0.2],['cod','Codeína VO (mg/dia)',0.15],['hidro','Hidromorfona VO (mg/dia)',4],['fentev','Fentanil EV (mcg/h, infusão)',2.4],['fentd','Fentanil transdérmico (mcg/h)',2.4]];
const COR=[['hc','Hidrocortisona',20],['pred','Prednisona',5],['predl','Prednisolona',5],['mp','Metilprednisolona',4],['dexa','Dexametasona',0.75],['beta','Betametasona',0.6],['defl','Deflazacorte',6]];
FN.conv={g:'geral',t:'Conversores: opioides e corticoides',code:'equianalgesia e equivalência',k:'conversao opioide morfina oxicodona tramadol codeina fentanil equianalgesia rotacao corticoide equivalencia prednisona dexametasona hidrocortisona metilprednisolona',render(m){
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Conversores</h2><span class="code">opioides e corticoides</span></div>
   <article class="card"><h3>Opioides (morfina oral equivalente)</h3>
    <div class="grid2"><div class="field"><label for="op-de">Opioide atual</label><select id="op-de">${OPI.map(o=>`<option value="${o[0]}">${esc(o[1])}</option>`).join('')}</select></div><div class="field"><label for="op-d">Dose total em 24 h (ou mcg/h)</label><input id="op-d" inputmode="decimal" value="60"></div>
    <div class="field"><label for="op-pa">Converter para</label><select id="op-pa">${OPI.map((o,i)=>`<option value="${o[0]}"${i===1?' selected':''}>${esc(o[1])}</option>`).join('')}</select></div><div class="field"><label for="op-r">Redução por tolerância cruzada</label><select id="op-r"><option value="0">Nenhuma</option><option value="25" selected>25%</option><option value="50">50%</option></select></div></div>
    <div class="result" id="op-out"></div>
    <p class="note">Valores aproximados. Ao trocar de opioide, reduzir 25–50% e titular com resgates (10–15% da dose diária). Metadona e buprenorfina não entram nesta conversão (não lineares): especialista. Fentanil transdérmico 25 mcg/h ≈ 60 mg/dia de morfina VO.</p></article>
   <article class="card"><h3>Corticoides (equivalência anti-inflamatória)</h3>
    <div class="grid2"><div class="field"><label for="co-de">Corticoide</label><select id="co-de">${COR.map(o=>`<option value="${o[0]}"${o[0]==='pred'?' selected':''}>${esc(o[1])}</option>`).join('')}</select></div><div class="field"><label for="co-d">Dose (mg)</label><input id="co-d" inputmode="decimal" value="40"></div></div>
    <div class="result" id="co-out"></div>
    <p class="note">Hidrocortisona tem ação mineralocorticoide importante; dexametasona e betametasona, nenhuma. Duração: curta (hidrocortisona), intermediária (prednisona, prednisolona, metilprednisolona), longa (dexametasona, betametasona).</p></article></section>`;
  const upO=()=>{const a=OPI.find(o=>o[0]===$('#op-de').value),b=OPI.find(o=>o[0]===$('#op-pa').value),d=num($('#op-d').value),r=+$('#op-r').value;const out=$('#op-out');if(!(d>0)){out.innerHTML='';return}
    const mme=d*a[2],eq=mme/b[2],fin=eq*(1-r/100);out.className='result';out.innerHTML=`<div class="big">${fmt(fin,b[0].startsWith('fent')?0:1)} <small>${esc(b[1].replace(/ \(.*/,''))} ${b[0].startsWith('fent')?'mcg/h':'mg/dia'}</small></div><div class="sub">Morfina oral equivalente: <b>${fmt(mme,0)} mg/dia</b>. Equivalente sem redução: ${fmt(eq,1)}${r?`; com redução de ${r}%: ${fmt(fin,1)}`:''}.</div>${b[0]==='trama'&&fin>400?'<div class="sub"><b>Acima da dose máxima de tramadol (400 mg/dia).</b></div>':''}${b[0]==='cod'&&fin>360?'<div class="sub"><b>Acima da dose máxima de codeína (360 mg/dia).</b></div>':''}`};
  const upC=()=>{const a=COR.find(o=>o[0]===$('#co-de').value),d=num($('#co-d').value),out=$('#co-out');if(!(d>0)){out.innerHTML='';return}const u=d/a[2];
    out.className='result';out.innerHTML=`<div class="sub">${COR.map(o=>`${esc(o[1])}: <b>${fmt(u*o[2],o[2]<1?2:1)} mg</b>`).join('<br>')}</div>`};
  ['op-de','op-pa','op-r','co-de'].forEach(k=>$('#'+k).onchange=k.startsWith('op')?upO:upC);$('#op-d').oninput=upO;$('#co-d').oninput=upC;upO();upC()}};

/* ---------- Ventilação mecânica inicial ---------- */
NC.vm={g:'resp',t:'Ventilação mecânica inicial',code:'peso predito e parâmetros',f:[{k:'alt',l:'Altura (cm)',v:'170'},{k:'sx',l:'Sexo',o:[['M','Masculino'],['F','Feminino']],v:'M'},{k:'cond',l:'Situação',o:[['g','Geral / proteção pulmonar'],['sdra','SDRA'],['obs','DPOC ou asma (obstrutivo)'],['acid','Acidose metabólica grave'],['hic','TCE / hipertensão intracraniana']],v:'g'}],
 calc:v=>{if(!(v.alt>100))return null;const pp=(v.sx==='F'?45.5:50)+0.91*(v.alt-152.4),vc6=6*pp,vc8=8*pp;
  const S={g:['VC 6–8 mL/kg de peso predito','FR 14–18 irpm','PEEP 5–8 cmH2O','FiO2 inicial 100% → reduzir para SpO2 92–96%','Platô ≤ 30 cmH2O e driving pressure (platô − PEEP) ≤ 15'],
   sdra:['VC 4–6 mL/kg de peso predito','FR 20–30 irpm (até 35) para pH ≥ 7,25','PEEP pela tabela PEEP/FiO2 (geralmente 10–14 ou mais)','Platô ≤ 30, driving ≤ 15; prona 16 h/dia se P/F < 150','Hipercapnia permissiva (pH ≥ 7,20–7,25)'],
   obs:['VC 6–8 mL/kg de peso predito','FR baixa: 10–12 irpm (asma: 8–10)','Fluxo alto (60–80 L/min) e tempo expiratório longo (I:E 1:3 a 1:5)','PEEP 5 (DPOC: até 80% do auto-PEEP)','Checar auto-PEEP e platô; hipercapnia permissiva; se hipotensão após IOT: desconectar e deixar expirar'],
   acid:['Manter o volume minuto PRÉ-intubação (o paciente compensava com hiperventilação)','FR 25–30 irpm, VC 6–8 mL/kg','Gasometria 20–30 min após; risco de piora grave da acidose na IOT'],
   hic:['VC 6–8 mL/kg','PaCO2 35–40 (hiperventilação 30–35 só como ponte na herniação)','PEEP 5–8 (cabeceira 30°)','SpO2 ≥ 94%; evitar hipotensão']}[v.cond]||[];
  return {cls:'',big:fmt(pp,1)+' <small>kg de peso predito</small>',sub:[`VC 6 mL/kg = <b>${fmt(vc6,0)} mL</b> · 8 mL/kg = <b>${fmt(vc8,0)} mL</b> · 4 mL/kg = ${fmt(4*pp,0)} mL`,...S.map(x=>'• '+x),'Gasometria 20–30 min após o início; ajustar FR pela PaCO2 e FiO2/PEEP pela oxigenação.'],line:`VM: peso predito ${fmt(pp,1)} kg; VC ${fmt(vc6,0)}–${fmt(vc8,0)} mL (6–8 mL/kg).`}}};

/* ---------- Condutas: antibióticos na função renal e hemotransfusão ---------- */
Object.assign(CD,{
cd_atbrenal:{g:'inf',t:'Ajuste de antibióticos pela função renal',src:'Sanford Guide 2024 · Bulas · UpToDate',k:'ajuste renal antibiotico clearance creatinina dose insuficiencia renal cefepima meropenem piperacilina vancomicina gentamicina ciprofloxacino levofloxacino aciclovir fluconazol oseltamivir enoxaparina',rel:[['cg','Cockcroft-Gault'],['cd_ira','LRA'],['cd_sepse','Sepse']],sec:[
 {h:'Como usar',li:['Calcule o ClCr (Cockcroft-Gault) e use a linha correspondente','Primeira dose (ataque) SEMPRE integral; ajuste a partir da manutenção','Na sepse, nas primeiras 24–48 h prefira não reduzir beta-lactâmicos (LRA muitas vezes transitória)','Hemodiálise: dar a dose após a sessão nos dias de diálise']},
 {h:'Não precisam de ajuste',li:['Ceftriaxona, azitromicina, clindamicina, doxiciclina, metronidazol, linezolida, oxacilina (ajuste só se ClCr < 10)']},
 {h:'Beta-lactâmicos',rows:[['Amoxicilina 500 mg 8/8 h','ClCr 10–30: 500 mg 12/12 h · < 10: 500 mg 24/24 h'],['Amoxicilina-clavulanato 875/125 12/12 h','ClCr < 30: não usar 875; 500/125 12/12 h (10–30) ou 24/24 h (< 10)'],['Cefalexina 500 mg 6/6 h','ClCr 10–50: 500 mg 8/8 a 12/12 h · < 10: 500 mg 12/12 a 24/24 h'],['Cefepima 2 g 8/8 h','ClCr 30–60: 2 g 12/12 h · 11–29: 2 g 24/24 h · ≤ 10: 1 g 24/24 h (neurotoxicidade se não ajustar)'],['Piperacilina-tazobactam 4,5 g 6/6 h','ClCr 20–40: 3,375 g 6/6 h · < 20: 2,25 g 6/6 h'],['Meropeném 1 g 8/8 h','ClCr 26–50: 1 g 12/12 h · 10–25: 500 mg 12/12 h · < 10: 500 mg 24/24 h'],['Ampicilina 2 g 4/4 h','ClCr 10–50: 2 g 6/6 a 8/8 h · < 10: 2 g 12/12 h']]},
 {h:'Outros antimicrobianos',rows:[['Ciprofloxacino 400 mg EV 12/12 h / 500 mg VO 12/12 h','ClCr < 30: 400 mg EV 24/24 h / 500 mg VO 24/24 h'],['Levofloxacino 750 mg 24/24 h','ClCr 20–49: 750 mg 48/48 h · < 20: 750 mg e depois 500 mg 48/48 h'],['SMX-TMP 800/160 12/12 h','ClCr 15–30: metade da dose · < 15: evitar'],['Nitrofurantoína','Evitar se ClCr < 30'],['Vancomicina','Ataque 25–30 mg/kg integral; manutenção pelo nível (vale 15–20) ou AUC; intervalos maiores na DRC'],['Gentamicina 5–7 mg/kg (intervalo estendido)','ClCr ≥ 60: 24/24 h · 40–59: 36/36 h · 20–39: 48/48 h · < 20: pelo nível sérico'],['Amicacina 15 mg/kg','Mesmos intervalos da gentamicina'],['Aciclovir EV 10 mg/kg 8/8 h','ClCr 25–50: 12/12 h · 10–25: 24/24 h · < 10: 5 mg/kg 24/24 h. Hidratar (nefrotoxicidade)'],['Aciclovir VO 800 mg 5x/dia','ClCr 10–25: 800 mg 8/8 h · < 10: 800 mg 12/12 h'],['Fluconazol','Ataque integral; ClCr ≤ 50: metade da dose de manutenção'],['Oseltamivir 75 mg 12/12 h','ClCr 30–60: 30 mg 12/12 h · 10–30: 30 mg 24/24 h · HD: 30 mg após cada sessão']]},
 {h:'Outros do PS',rows:[['Enoxaparina','ClCr < 30: profilaxia 20 mg/dia (ou 30 mg); tratamento 1 mg/kg 24/24 h; diálise: preferir heparina não fracionada'],['Metformina','ClCr 30–45: não iniciar (máx. 1 g/dia) · < 30: suspender'],['Gabapentina / pregabalina','Reduzir conforme ClCr (risco de sedação e queda)'],['Morfina / tramadol','Evitar morfina na DRC grave (metabólitos); tramadol máx. 200 mg/dia se ClCr < 30'],['Rivaroxabana / apixabana','Ver bula: ajustes por ClCr e indicação; evitar rivaroxabana se < 15']]}]},

cd_transf:{g:'geral',t:'Hemotransfusão',src:'MS Guia para uso de hemocomponentes 2015 · AABB 2023 · ATLS 10ª ed.',k:'transfusao hemotransfusao concentrado de hemacias plaquetas plasma crioprecipitado reacao transfusional transfusao macica acido tranexamico hemoglobina gatilho',rel:[['rx_transf','Prescrição'],['cd_hda','HDA'],['cd_trauma','Trauma']],sec:[
 {h:'Concentrado de hemácias (CH)',rows:[['Hb < 7 g/dL','Maioria dos estáveis, inclusive UTI e HDA'],['Hb < 8 g/dL','Cardiopatia, cirurgia ortopédica/cardíaca, SCA (alguns usam < 8–10 na SCA)'],['Sangramento ativo / choque','Transfundir pela clínica, não pela Hb'],['Efeito esperado','1 U eleva Hb ≈ 1 g/dL (adulto); criança 10–15 mL/kg eleva ≈ 2–3 g/dL']]},
 {h:'Plaquetas, plasma e crioprecipitado',rows:[['Plaquetas','< 10.000 profilático; < 20.000 com febre/infecção; < 50.000 com sangramento ou procedimento invasivo; < 100.000 neurocirurgia/SNC. Dose: 1 U/10 kg ou 1 aférese'],['Plasma fresco congelado','Sangramento com INR/TTPa > 1,5 × normal; transfusão maciça; reversão de varfarina se sem complexo protrombínico. Dose 10–20 mL/kg'],['Crioprecipitado','Fibrinogênio < 150–200 mg/dL com sangramento. Dose 1 U/10 kg (ou 1–1,5 U/10 kg)']]},
 {h:'Transfusão maciça (trauma, hemorragia grave)',li:['Acionar protocolo: CH : plasma : plaquetas ≈ 1 : 1 : 1','Ácido tranexâmico 1 g EV em 10 min + 1 g em 8 h (até 3 h do trauma/início)','Cálcio: gluconato de cálcio 10% 30 mL (ou cloreto 10 mL) a cada 4 U; manter Ca iônico > 1,1','Evitar hipotermia (aquecedor de fluidos) e acidose','Metas: Hb 7–9, plaquetas > 50.000, INR < 1,5, fibrinogênio > 150–200','Hipotensão permissiva (PAS 80–90) no trauma penetrante sem TCE']},
 {h:'Reações transfusionais (PARE a transfusão)',rows:[['Febril não hemolítica','Febre/calafrio sem outros sinais: antitérmico; excluir hemólise e contaminação'],['Alérgica leve','Urticária: anti-histamínico; pode reiniciar se só urticária'],['Anafilática','Adrenalina IM; não reiniciar (pensar em deficiência de IgA)'],['Hemolítica aguda (ABO)','Febre, dor lombar, hipotensão, hemoglobinúria: parar, hidratar (diurese > 1 mL/kg/h), checar identificação, Coombs, LDH, bilirrubina, haptoglobina; avisar o banco de sangue'],['TACO (sobrecarga)','Dispneia, HAS, turgência, edema pulmonar: diurético, O2, transfundir mais devagar'],['TRALI','Hipoxemia e infiltrado bilateral em até 6 h, sem sobrecarga: suporte ventilatório, sem diurético; notificar'],['Contaminação bacteriana','Febre alta, choque: hemoculturas (paciente e bolsa), antibiótico amplo']]},
 {h:'Lembretes',li:['Consentimento quando possível; dupla checagem à beira do leito','Testemunhas de Jeová: respeitar a recusa documentada do adulto capaz; risco iminente de morte em criança: transfundir e comunicar','Notificar toda reação (hemovigilância)']}]}
});

Object.assign(RX,{
rx_transf:{tipo:'h',g:'geral',t:'Hemocomponentes',rec:RH,rel:[['cd_transf','Conduta hemotransfusão']],items:[
 {t:'Prescrição de hemocomponentes',rx:`1. Tipagem ABO/Rh e prova cruzada (urgência extrema: O negativo/O positivo em homem e mulher > 45 anos)
2. Concentrado de hemácias — __ unidade(s) EV, cada uma em 1–2 h (máx. 4 h); cardiopata/idoso: 1 U por vez, reavaliar
   (criança: 10–15 mL/kg em 2–4 h)
3. Concentrado de plaquetas — 1 U para cada 10 kg (ou 1 aférese) EV em 30 min
4. Plasma fresco congelado — 10–20 mL/kg EV em 30–60 min (ex.: 70 kg: 3–5 U de ≈ 250 mL)
5. Crioprecipitado — 1 U para cada 10 kg EV em 30 min
6. Sinais vitais antes, 15 min após o início e ao final de cada unidade
7. Hb/hematócrito (ou plaquetas/coagulograma) 1 h após o término`,n:'Furosemida entre as bolsas só se risco de sobrecarga (não de rotina). Irradiados/filtrados conforme indicação (imunossuprimidos, transplantados, neonatos).'}]}
});
