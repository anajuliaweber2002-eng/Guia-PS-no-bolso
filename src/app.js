/* Kit PS: navegação, telas e busca. Usa os registros de core.js preenchidos pelos arquivos de conteúdo. */
const secOf=id=>id==='inicio'?'ini':id==='meu'?'meu':AN[id]?'an':RX[id]?'rx':CD[id]?'cd':EX[id]?'ex':SC[id]?'sc':NC[id]?'nc':FN[id]?'fn':null;
const item=id=>AN[id]||RX[id]||CD[id]||EX[id]||SC[id]||NC[id]||FN[id];
const known=id=>!!secOf(id);
const gOf=id=>{const x=item(id);return x&&x.g||'geral'};
function chipLabel(id){if(id==='inicio')return 'Início';if(id==='meu')return 'Minhas edições';const x=item(id);return x?x.t:id}

const SICON={
 box:'M4 7l8-4 8 4v10l-8 4-8-4z M4 7l8 4 8-4 M12 11v10',
 soap:'M6 3h9l4 4v14H6z M15 3v4h4 M9 12h7 M9 16h5',
 presc:'M10.5 3.5a5 5 0 0 1 7 7l-7 7a5 5 0 0 1-7-7z M7 10l7 7',
 alta:'M6 3h9l4 4v14H6z M15 3v4h4 M9 14l2 2 4-4',
 fx:'M5 3h6v5H5z M13 16h6v5h-6z M8 8v4h8v4 M16 3l3 3-3 3',
 urg:'M12 3l9.5 16.5h-19z M12 10v4 M12 17h.01',
 calc:'M6 3h12v18H6z M9 7h6 M9 12h.01 M12 12h.01 M15 12h.01 M9 16h.01 M12 16h.01 M15 16h.01',
 esc:'M9 3h6v3H9z M7 4.5H5V21h14V4.5h-2 M8.5 12l2 2 4-4 M9 17.5h6',
 exames:'M9 3h6 M10 3v12.5a2 2 0 0 0 4 0V3 M10 10h4 M16 8h4 M18 6v4',
 ecg:'M2 12h4l2-5 3 10 3-14 2 9h6',
 drip:'M8 3h8v6a4 4 0 0 1-8 0z M12 13v3 M12 16c-2 2.5-3 4-3 5a3 3 0 0 0 6 0c0-1-1-2.5-3-5z',
 pedi:'M9 2h6 M10 2v3 M14 2v3 M8 9a4 4 0 0 1 8 0v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z M8 13h3 M8 17h3',
 edit:'M4 20h4L19 9l-4-4L4 16z M13.5 6.5l4 4',
 airway:'M12 3v6 M8 9h8l-1 12H9z M5 13h3 M16 13h3',
 steth:'M6 3v6a5 5 0 0 0 10 0V3 M5 3h2 M15 3h2 M11 14v1.5a5 5 0 0 0 10 0V13 M21 11a2 2 0 1 0 0 .01',
 pill:'M10.5 20.5a5 5 0 0 1-7-7l6-6a5 5 0 0 1 7 7z M7.5 10.5l6 6',
 timer:'M9 2h6 M12 5v2 M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M12 10v4l2.5 2.5',
 rxt:'M12 3v7 M12 8l-3 3 M12 8l3 3 M8.5 6.5C5.5 7 4 11 4 16c0 3 1 4.5 3 4.5s3-1.5 3-3.5v-6 M15.5 6.5C18.5 7 20 11 20 16c0 3-1 4.5-3 4.5s-3-1.5-3-3.5v-6'
};
const icon=(k,sz=20)=>`<svg width="${sz}" height="${sz}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${SICON[k]||SICON.box}"/></svg>`;

const byTipo=t=>Object.keys(RX).filter(k=>RX[k].tipo===t);
const SECTIONS=[
 {g:'Atendimento',k:'ini',t:'Início',ic:'box',ids:['inicio']},
 {g:'Atendimento',k:'an',t:'Anamneses',ic:'soap',ids:Object.keys(AN)},
 {g:'Atendimento',k:'rx',t:'Prescrições no PS',ic:'presc',ids:byTipo('h')},
 {g:'Atendimento',k:'alta',t:'Receitas de alta',ic:'alta',ids:byTipo('a')},
 {g:'Atendimento',k:'rxb',t:'Receita montada',ic:'edit',ids:['receita']},
 {g:'Atendimento',k:'cd',t:'Condutas padrão',ic:'urg',ids:Object.keys(CD)},
 {g:'Atendimento',k:'ef',t:'Exame físico',ic:'steth',ids:EF_IDS.filter(k=>EX[k])},
 {g:'Ferramentas',k:'bul',t:'Bulário do PS',ic:'pill',ids:Object.keys(EX).filter(k=>/^med_/.test(k))},
 {g:'Ferramentas',k:'ex',t:'Interpretação de exames',ic:'exames',ids:['gasocalc',...Object.keys(EX).filter(k=>!/^(ef_|efp_|ecg_|rxt_|med_)/.test(k))]},
 {g:'Ferramentas',k:'ecg',t:'Interpretação de ECG',ic:'ecg',ids:['ecg_ps','ecg_passo','ecg_taqui','ecg_bradi','ecg_eixo','ecg_sobrec','ecg_bloq','ecg_isq','ecg_qt','ecg_padroes','fcecg','eixo','qtc','sve']},
 {g:'Ferramentas',k:'rxt',t:'Interpretação de RX de tórax',ic:'rxt',ids:['rxt_passo','rxt_pad','rxt_ex']},
 {g:'Ferramentas',k:'calc',t:'Calculadoras e escores',ic:'calc',ids:[...Object.keys(SC),...Object.keys(NC).filter(k=>!['fcecg','eixo','qtc','sve','vm'].includes(k))]},
 {g:'Ferramentas',k:'inf',t:'Infusões, IOT e pediatria',ic:'drip',ids:['drogas','iot','pedi']},
 {g:'Ferramentas',k:'plant',t:'Ferramentas do plantão',ic:'timer',ids:['pcr','plantao','atestado','conv','vm']},
 {g:'Meu kit',k:'meu',t:'Minhas edições e dados',ic:'edit',ids:['meu']}
];
const SECM=Object.fromEntries(SECTIONS.map(s=>[s.k,s]));
const SECTAG={an:'Anamnese',rx:'Rx',cd:'Conduta',ex:'Exame',sc:'Escore',nc:'Cálculo',fn:'Ferramenta'};

let cur={id:'inicio'};
let CURS=SECM[store.get('kitps:sec')]?store.get('kitps:sec'):'ini';
let FAV=[];try{FAV=JSON.parse(store.get('kitps:favs')||'[]').filter(known)}catch(e){FAV=[]}
const saveFav=()=>store.set('kitps:favs',JSON.stringify(FAV));

/* ---------- Componentes ---------- */
function resultBox(id){return `<div class="result" id="${id}"></div>`}
function copyBtn(){return `<div class="bar"><button class="btn primary small" id="cpres" type="button">Copiar resultado</button></div>`}
function bindCopy(get){$('#cpres').onclick=()=>{const t=get();if(t)copy(t);else toast('Preencha os campos primeiro')}}
const tocHTML=L=>L.length<4?'':`<nav class="card toc" aria-label="Nesta página"><div class="lbl">Nesta página</div><div class="tocl">${L.map(([id,t])=>`<button class="chip" type="button" data-toc="${id}">${t}</button>`).join('')}</div></nav>`;
function focusCard(sel){const el=$(sel);if(!el)return;const top=el.getBoundingClientRect().top+window.scrollY-($('header').offsetHeight+12);window.scrollTo(0,top);el.style.outline='3px solid var(--accent)';setTimeout(()=>el.style.outline='',1600)}
function bindToc(m){m.querySelectorAll('[data-toc]').forEach(b=>b.onclick=()=>focusCard('#'+b.dataset.toc))}
function relHTML(rel){const L=(rel||[]).filter(x=>known(x[0]));return L.length?`<div class="lbl">Relacionados</div><div class="bar">${L.map(x=>`<button class="chip" data-go="${x[0]}" type="button">${esc(x[1])}</button>`).join('')}</div>`:''}
function bindGo(m){m.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go))}
const fit=t=>{t.style.height='auto';t.style.height=(t.scrollHeight+4)+'px'};

/* ---------- Telas ---------- */
function renderINI(m){
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Kit PS de bolso</h2><span class="code">pronto socorro</span></div>
   <div class="inig">${SECTIONS.filter(s=>s.k!=='ini').map(s=>`<button class="init" type="button" data-sk="${s.k}"><span class="inii">${icon(s.ic,28)}</span><b>${esc(s.t)}</b><small>${s.ids.length>1?s.ids.length+' itens':''}</small></button>`).join('')}</div>
   <div class="lbl">Acesso rápido</div><div class="bar">${['acls','cd_sepse','cd_sca','cd_avc','cd_anaf','drogas','iot','gasocalc'].map(id=>`<button class="chip" type="button" data-go="${id}">${esc(chipLabel(id))}</button>`).join('')}</div>
   ${FAV.length?`<div class="lbl">Favoritos</div><div class="bar">${FAV.map(id=>`<button class="chip" type="button" data-go="${id}">${esc(chipLabel(id))}</button>`).join('')}</div>`:''}
   <p class="note">Material de apoio para profissionais de saúde. Confira doses, alergias, função renal, gestação e o protocolo da sua instituição antes de prescrever. Tudo o que você edita fica salvo só neste aparelho.</p></section>`;
  m.querySelectorAll('[data-sk]').forEach(b=>b.onclick=()=>openSection(b.dataset.sk));bindGo(m)}

function renderAN(m,id){
  const t=AN[id],key='kitps:an:'+id,saved=store.get(key);
  m.innerHTML=`<section class="panel"><div class="ph"><h2>${esc(t.t)}</h2><span class="code">${esc(t.code)}</span></div>
    <p class="note">Edite direto no campo. O que você mudar fica salvo só neste aparelho${saved!=null?' (versão editada carregada)':''}.</p>
    <textarea class="soap" id="ta" spellcheck="false" aria-label="Anamnese ${esc(t.t)}"></textarea>
    <div class="bar sticky-bar"><button class="btn primary" id="cp" type="button">Copiar</button><button class="btn" id="cpf" type="button" title="Copia sem as linhas que ficaram com campos vazios entre colchetes">Copiar sem campos vazios</button><button class="btn" id="rs" type="button">Restaurar modelo</button></div>
    ${relHTML(t.rel)}</section>`;
  const ta=$('#ta');ta.value=saved!=null?saved:t.body;
  ta.oninput=()=>{if(ta.value===t.body)store.del(key);else store.set(key,ta.value)};
  $('#cp').onclick=()=>copy(ta.value,ta);
  $('#cpf').onclick=()=>copy(ta.value.split('\n').filter(l=>!/\[\s*\]/.test(l)).join('\n'));
  $('#rs').onclick=()=>confirm2($('#rs'),()=>{ta.value=t.body;store.del(key);toast('Modelo restaurado')});
  bindGo(m)}

const rxKey=(id,i)=>'kitps:rx:'+id+':'+i;
const rxGet=(id,i)=>{const s=store.get(rxKey(id,i));return s!=null?s:RX[id].items[i].rx};
function profGet(){return {medico:store.get('kitps:medico')||'',crm:store.get('kitps:crm')||'',unidade:store.get('kitps:unidade')||'',cidade:store.get('kitps:cidade')||''}}
function printRx(txt,rec){const p=profGet(),d=new Date(),mes=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const sh=$('#sheet');sh.innerHTML=`<div class="ath">${esc(p.unidade||'Pronto Socorro')}</div><div class="att">${/Controle Especial/.test(rec||'')?'RECEITUÁRIO DE CONTROLE ESPECIAL':'RECEITUÁRIO'}</div>
   <div class="rxpac"><b>Paciente:</b><span></span></div><pre class="rxp">${esc(txt)}</pre>
   <div class="atf">${esc(p.cidade||'________________')}, ${d.getDate()} de ${mes[d.getMonth()]} de ${d.getFullYear()}.<br><br>_______________________________________<br>${esc(p.medico||'Médico(a)')}${p.crm?' · CRM '+esc(p.crm):''}</div>`;
  setTimeout(()=>{try{window.print()}catch(e){toast('Impressão indisponível aqui')}},50)}
function renderRX(m,id){
  const c=RX[id],alta=c.tipo==='a';
  m.innerHTML=`<section class="panel"><div class="ph"><h2>${esc(c.t)}</h2><span class="code">${alta?'receita de alta':'prescrição no PS'}</span></div>
    <div class="rec"><b>${alta?'Receituário':'Tipo'}:</b> ${esc(c.rec)}.</div>
    ${tocHTML(c.items.map((it,i)=>['rxa-'+i,esc(it.t)]))}
    ${c.items.map((it,i)=>`<article class="card rxcard" id="rxa-${i}"><h3>${esc(it.t)}${store.get(rxKey(id,i))!=null?' <span class="edtag">editada</span>':''}</h3><pre class="rx" id="rx-${i}">${esc(rxGet(id,i))}</pre>
      <div class="bar"><button class="btn primary small" data-c="${i}" type="button">Copiar</button>${alta?`<button class="btn small" data-p="${i}" type="button">Imprimir receita</button><button class="btn small" data-rb="${i}" type="button">+ Receita</button>`:''}<button class="btn small" data-wa="${i}" type="button">WhatsApp</button><button class="btn small" data-e="${i}" type="button">${icon('edit',14)} Editar</button></div>
      <div class="edf" id="ed-${i}" hidden><textarea class="soap rxta" spellcheck="false" aria-label="Editar ${esc(it.t)}"></textarea><div class="bar"><button class="btn primary small" data-sv="${i}" type="button">Salvar</button><button class="btn small" data-x="${i}" type="button">Cancelar</button><button class="btn small danger" data-rs="${i}" type="button">Restaurar original</button></div></div>
      ${it.n?`<p class="note">${esc(it.n)}</p>`:''}${it.rec?`<p class="note"><b>Receituário:</b> ${esc(it.rec)}</p>`:''}</article>`).join('')}
    ${relHTML(c.rel)}
    <p class="note">Doses para adultos com função renal e hepática normais, salvo indicação. Confira alergias, gestação, interações e a padronização da sua instituição. Use Editar para adaptar ao seu protocolo: fica salvo neste aparelho.</p>
    <div id="sheet" class="card atsheet rxsheet"></div></section>`;
  m.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>copy(rxGet(id,+b.dataset.c)));
  m.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{const i=+b.dataset.p;printRx(rxGet(id,i),c.items[i].rec||c.rec)});
  m.querySelectorAll('[data-wa]').forEach(b=>b.onclick=()=>waSend(rxGet(id,+b.dataset.wa)));
  m.querySelectorAll('[data-rb]').forEach(b=>b.onclick=()=>rxbAdd(rxGet(id,+b.dataset.rb)));
  m.querySelectorAll('[data-e]').forEach(b=>b.onclick=()=>{const i=+b.dataset.e,f=$('#ed-'+i),t=f.querySelector('textarea');f.hidden=false;t.value=rxGet(id,i);fit(t);t.oninput=()=>fit(t);t.focus()});
  m.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>{$('#ed-'+b.dataset.x).hidden=true});
  m.querySelectorAll('[data-sv]').forEach(b=>b.onclick=()=>{const i=+b.dataset.sv,v=$('#ed-'+i).querySelector('textarea').value;if(v.trim()&&v!==c.items[i].rx)store.set(rxKey(id,i),v);else store.del(rxKey(id,i));toast('Salvo neste aparelho');renderRX(m,id);addHead();addStar();focusCard('#rxa-'+i)});
  m.querySelectorAll('[data-rs]').forEach(b=>b.onclick=()=>confirm2(b,()=>{const i=+b.dataset.rs;store.del(rxKey(id,i));toast('Original restaurado');renderRX(m,id);addHead();addStar()}));
  bindToc(m);bindGo(m)}

function gdText(x){return strip(x.h)+'\n'+(x.intro?strip(x.intro)+'\n':'')+(x.li||[]).map(l=>'- '+strip(l)).join('\n')+(x.rows||[]).map(r=>'- '+strip(r[0])+': '+strip(r[1])).join('\n')}
function renderGD(m,id){
  const g=CD[id]||EX[id];
  m.innerHTML=`<section class="panel"><div class="ph"><h2>${esc(g.t)}</h2><span class="code">${esc(g.src)}</span></div>
    ${tocHTML(g.sec.map((x,i)=>['gd-'+i,x.h]))}
    ${g.sec.map((x,i)=>`<div class="card gd" id="gd-${i}"><div class="lbl lbl-row"><span>${x.h}</span><button class="btn small" data-c="${i}" type="button">Copiar</button></div>
      ${x.intro?`<p class="note" style="color:var(--fg)">${x.intro}</p>`:''}
      ${x.svg?`<div class="gsvg">${x.svg}</div>`:''}
      ${x.li?`<ul class="gl">${x.li.map(l=>`<li>${l}</li>`).join('')}</ul>`:''}
      ${x.rows?`<table class="scale pdt"><tbody>${x.rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</tbody></table>`:''}
      ${x.normal?`<div class="lbl">Texto para copiar (editável)</div><textarea class="soap efn" data-en="${i}" spellcheck="false" aria-label="${esc(strip(x.h))}: texto editável"></textarea><div class="bar"><button class="btn small" data-er="${i}" type="button">Restaurar texto</button></div>`:''}</div>`).join('')}
    ${relHTML(g.rel)}
    <p class="note">Resumo para consulta rápida. Confira o protocolo vigente da sua instituição.</p></section>`;
  const ek=i=>'kitps:efn:'+id+':'+i,eg=i=>{const v=store.get(ek(i));return v!=null?v:g.sec[i].normal};
  m.querySelectorAll('[data-en]').forEach(t=>{const i=+t.dataset.en;t.value=eg(i);fit(t);t.oninput=()=>{fit(t);if(t.value.trim()&&t.value!==g.sec[i].normal)store.set(ek(i),t.value);else store.del(ek(i))}});
  m.querySelectorAll('[data-er]').forEach(b=>b.onclick=()=>confirm2(b,()=>{const i=+b.dataset.er,t=m.querySelector(`[data-en="${i}"]`);store.del(ek(i));t.value=g.sec[i].normal;fit(t);toast('Texto restaurado')}));
  m.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{const i=+b.dataset.c,x=g.sec[i];copy(x.normal?eg(i):gdText(x))});bindToc(m);bindGo(m)}

function renderSC(m,id){
  const s=SC[id];
  const body=s.kind==='ck'
    ?`<div class="card"><div class="opts" style="grid-template-columns:1fr">${s.ck.map((c,i)=>`<label class="opt"><input type="checkbox" id="sc-${i}"><span>${s.np?'':`<i>${c[1]>0?'+':''}${String(c[1]).replace('.',',')}</i>`}${esc(c[0])}</span></label>`).join('')}</div></div>`
    :s.q.map((q,i)=>`<fieldset class="q"><legend><b>${i+1}.</b> ${esc(q.q)}</legend><div class="opts"${q.o.some(o=>o[0].length>28)?' style="grid-template-columns:1fr"':''}>${q.o.map((o,j)=>`<label class="opt"><input type="radio" name="sc-${i}" value="${j}"><span><i>${o[1]}</i>${esc(o[0])}</span></label>`).join('')}</div></fieldset>`).join('');
  m.innerHTML=`<section class="panel"><div class="ph"><h2>${esc(s.t)}</h2><span class="code">${esc(s.code)}</span></div>
    ${resultBox('sc-r')}${body}${copyBtn()}<div class="bar"><button class="btn small" id="clr" type="button">Limpar respostas</button></div>
    ${s.note?`<p class="note">${esc(s.note)}</p>`:''}</section>`;
  let line='';
  const upd=()=>{let t=0,ans=0;const v=[],pos=[];
    if(s.kind==='ck')s.ck.forEach((c,i)=>{if($('#sc-'+i).checked){t+=c[1];pos.push(c[0])}});
    else s.q.forEach((q,i)=>{const r=m.querySelector(`input[name="sc-${i}"]:checked`);if(!r){v.push(null);return}ans++;const o=q.o[+r.value];v.push(o[1]);t+=o[1];if(o[1])pos.push(q.q.replace(/\?$/,'')+': '+o[0])});
    const r=$('#sc-r'),n=s.kind==='q'?s.q.length:0;
    if(s.kind==='q'&&!ans){r.className='result';r.innerHTML='<div class="sub">Marque as respostas.</div>';line='';return}
    t=Math.round(t*10)/10;const [cls,tit,txt]=s.lv(t,v),u=s.unit!=null?s.unit:(Math.abs(t)===1?' ponto':' pontos'),tt=String(t).replace('.',',');
    r.className='result '+cls;r.innerHTML=`<div class="big">${s.unit===''?'':tt}<small>${esc(u)}</small></div><div class="sub"><b>${esc(tit)}</b>${n&&ans<n?` · faltam ${n-ans} de ${n} respostas`:''}</div>${txt?`<div class="sub">${esc(txt)}</div>`:''}`;
    line=`${s.t}: ${s.unit===''?'':tt+u+' '}(${tit}).${pos.length?' Itens: '+pos.join('; ')+'.':''}`};
  m.querySelectorAll('input').forEach(i=>i.onchange=upd);upd();bindCopy(()=>line);
  $('#clr').onclick=()=>{m.querySelectorAll('input').forEach(i=>i.checked=false);upd()}}

function renderNC(m,id){
  const o=NC[id];
  m.innerHTML=`<section class="panel"><div class="ph"><h2>${esc(o.t)}</h2><span class="code">${esc(o.code)}</span></div>
    <div class="card">${fieldsHTML(o.f,'nc')}<p class="ex">Exemplo: substitua pelos dados do paciente</p></div>
    ${resultBox('nc-r')}${copyBtn()}${o.note?`<p class="note">${o.note}</p>`:''}</section>`;
  let line='';
  const upd=()=>{const v=readF(o.f,'nc'),r=$('#nc-r'),res=o.calc(v);
    if(!res){r.className='result';r.innerHTML='<div class="sub">Preencha os campos.</div>';line='';return}
    r.className='result '+(res.cls||'');r.innerHTML=`<div class="big">${res.big}</div>${res.sub.map(x=>`<div class="sub">${x}</div>`).join('')}`;line=res.line};
  m.querySelectorAll('input,select').forEach(e=>{e.oninput=upd;e.onchange=upd});upd();bindCopy(()=>line)}

function renderMEU(m){
  const p=profGet(),ks=(()=>{try{return Object.keys(localStorage).filter(k=>/^kitps:(an|rx|efn):/.test(k)).sort()}catch(e){return []}})();
  const th=store.get('kitps:theme')||'auto';
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Minhas edições e dados</h2><span class="code">salvo neste aparelho</span></div>
    <div class="card"><div class="lbl">Dados para a receita impressa</div><div class="grid2">
     <div class="field"><label for="pf-medico">Nome do(a) médico(a)</label><input id="pf-medico" value="${esc(p.medico)}"></div>
     <div class="field"><label for="pf-crm">CRM</label><input id="pf-crm" value="${esc(p.crm)}"></div>
     <div class="field"><label for="pf-unidade">Serviço / unidade</label><input id="pf-unidade" value="${esc(p.unidade)}"></div>
     <div class="field"><label for="pf-cidade">Cidade</label><input id="pf-cidade" value="${esc(p.cidade)}"></div></div></div>
    <div class="card"><div class="lbl">Aparência</div><div class="seg" role="tablist" aria-label="Tema">${[['auto','Automático'],['light','Claro'],['dark','Escuro']].map(([k,l])=>`<button type="button" role="tab" data-th="${k}" aria-selected="${th===k}">${l}</button>`).join('')}</div></div>
    <div class="card"><div class="lbl">Modelos que você editou (${ks.length})</div>
     ${ks.length?`<div class="edlist">${ks.map(k=>{const [,tp,id,i]=k.split(':');const nm=tp==='an'?(AN[id]&&AN[id].t):tp==='efn'?(EX[id]&&EX[id].t):(RX[id]&&RX[id].items[+i]&&RX[id].items[+i].t);return nm?`<div class="edrow"><button class="lnk" type="button" data-go="${id}">${esc(strip(nm))}</button><span class="edtag">${tp==='an'?'Anamnese':tp==='efn'?'Texto':'Prescrição'}</span></div>`:''}).join('')}</div>
     <div class="bar"><button class="btn small" id="exp" type="button">Copiar backup</button><button class="btn small danger" id="clr" type="button">Apagar todas as edições</button></div>`:'<p class="note">Nada ainda. Edite anamneses e prescrições: elas aparecem aqui.</p>'}
     <details><summary>Restaurar backup</summary><textarea class="soap" id="imp" rows="4" placeholder="Cole aqui o backup copiado"></textarea><div class="bar"><button class="btn small" id="impb" type="button">Restaurar</button></div></details></div></section>`;
  ['medico','crm','unidade','cidade'].forEach(k=>$('#pf-'+k).oninput=e=>store.set('kitps:'+k,e.target.value));
  m.querySelectorAll('[data-th]').forEach(b=>b.onclick=()=>{store.set('kitps:theme',b.dataset.th);applyTheme();renderMEU(m);addHead()});
  bindGo(m);
  const ex=$('#exp');if(ex)ex.onclick=()=>{const o={};ks.forEach(k=>o[k]=store.get(k));copy(JSON.stringify(o))};
  const cl=$('#clr');if(cl)cl.onclick=()=>confirm2(cl,()=>{ks.forEach(k=>store.del(k));toast('Edições apagadas');renderMEU(m);addHead()});
  $('#impb').onclick=()=>{try{const o=JSON.parse($('#imp').value);let n=0;Object.entries(o).forEach(([k,v])=>{if(/^kitps:(an|rx|efn):/.test(k)&&typeof v==='string'){store.set(k,v);n++}});toast(n+' edição(ões) restaurada(s)');renderMEU(m);addHead()}catch(e){toast('Backup inválido')}}}
function applyTheme(){const t=store.get('kitps:theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;else delete document.documentElement.dataset.theme}

function render(){
  const m=$('#main'),s=secOf(cur.id);
  if(s==='ini')return renderINI(m);if(s==='meu')return renderMEU(m);
  if(s==='an')return renderAN(m,cur.id);if(s==='rx')return renderRX(m,cur.id);
  if(s==='cd'||s==='ex')return renderGD(m,cur.id);if(s==='sc')return renderSC(m,cur.id);
  if(s==='nc')return renderNC(m,cur.id);if(s==='fn')return FN[cur.id].render(m)}

/* ---------- Navegação ---------- */
let MOPEN=new Set();try{MOPEN=new Set(JSON.parse(store.get('kitps:mopen')||'[]'))}catch(e){}
const secList=s=>s.ids.length<2?s.ids.slice():s.ids.map((id,i)=>[id,i]).sort((a,b)=>GORD.indexOf(gOf(a[0]))-GORD.indexOf(gOf(b[0]))||a[1]-b[1]).map(x=>x[0]);
const grouped=s=>new Set(s.ids.map(gOf)).size>1;
function renderMenu(){
  const nav=$('#menu-list');let g='',h='';
  SECTIONS.forEach(s=>{if(s.g!==g){g=s.g;h+=`<div class="mg">${esc(g)}</div>`}
    const mi=`<button class="mi" data-s="${s.k}" aria-current="${s.k===CURS}"><span class="mic">${icon(s.ic)}</span><span>${esc(s.t)}</span><span class="mn">${s.ids.length>1?s.ids.length:''}</span></button>`;
    if(s.ids.length<2){h+=mi;return}
    const op=MOPEN.has(s.k);let lg='';
    h+=`<div class="mrow">${mi}<button class="mx" type="button" data-x="${s.k}" aria-expanded="${op}" aria-controls="ms-${s.k}" aria-label="Mostrar a lista de ${esc(s.t)}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button></div>
     <div class="msub" id="ms-${s.k}"${op?'':' hidden'}>${secList(s).map(id=>{const gg=gOf(id),hd=grouped(s)&&gg!==lg?`<div class="sgh" data-g="${gg}">${esc(GRP[gg][1])}</div>`:'';lg=gg;return hd+`<button class="msi" type="button" data-s="${s.k}" data-id="${id}" data-g="${gg}" aria-current="${s.k===CURS&&id===cur.id}">${esc(chipLabel(id))}</button>`}).join('')}</div>`});
  nav.innerHTML=h;
  nav.querySelectorAll('.mi[data-s]').forEach(b=>b.onclick=()=>{openSection(b.dataset.s);closeMenu()});
  nav.querySelectorAll('.msi').forEach(b=>b.onclick=()=>{go(b.dataset.id,b.dataset.s);closeMenu()});
  nav.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>{const k=b.dataset.x,op=!MOPEN.has(k);op?MOPEN.add(k):MOPEN.delete(k);store.set('kitps:mopen',JSON.stringify([...MOPEN]));b.setAttribute('aria-expanded',op);$('#ms-'+k).hidden=!op});
  $('#sec-name').innerHTML=icon(SECM[CURS].ic,18)+'<span>'+esc(SECM[CURS].t)+'</span>'}
function openSection(k){const s=SECM[k];CURS=k;store.set('kitps:sec',k);const last=store.get('kitps:lasts-'+k);go(last&&s.ids.includes(last)?last:secList(s)[0],k)}
function openMenu(){document.body.classList.add('menu-open');$('#menu-btn').setAttribute('aria-expanded','true')}
function closeMenu(){document.body.classList.remove('menu-open');$('#menu-btn').setAttribute('aria-expanded','false')}
function renderFavs(){const f=$('#favs');f.hidden=!FAV.length;
  f.innerHTML=FAV.length?'<span class="favlbl" aria-hidden="true">★</span>'+FAV.map(id=>`<button class="chip fav" data-id="${id}" aria-selected="${id===cur.id}">${esc(chipLabel(id))}</button>`).join(''):'';
  f.querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>go(b.dataset.id))}
function renderChips(){
  const c=$('#chips');c.innerHTML='';const s=SECM[CURS],list=secList(s),gr=grouped(s);let lg='';
  c.hidden=list.length<2;
  if(list.length>=6){const sel=document.createElement('select');sel.className='chip pick';sel.setAttribute('aria-label','Escolher na lista de '+s.t);
    sel.innerHTML=`<option value="">☰ Lista (${list.length})</option>`+(gr?GORD.filter(g=>list.some(id=>gOf(id)===g)).map(g=>`<optgroup label="${esc(GRP[g][1])}">${list.filter(id=>gOf(id)===g).map(id=>`<option value="${id}">${esc(chipLabel(id))}</option>`).join('')}</optgroup>`).join(''):list.map(id=>`<option value="${id}">${esc(chipLabel(id))}</option>`).join(''));
    sel.onchange=()=>{if(sel.value)go(sel.value,CURS)};c.appendChild(sel)}
  list.forEach(id=>{const g=gOf(id);if(gr&&g!==lg){const l=document.createElement('span');l.className='cgl';l.dataset.g=g;l.setAttribute('aria-hidden','true');l.textContent=GRP[g][0];c.appendChild(l)}lg=g;
    const b=document.createElement('button');b.className='chip';b.id='chip-'+id;b.setAttribute('role','tab');b.dataset.g=g;b.textContent=chipLabel(id);
    b.setAttribute('aria-selected',id===cur.id);b.onclick=()=>go(id,CURS);c.appendChild(b)});
  const sd=$('#side'),show=list.length>=4;document.body.classList.toggle('hasside',show);let sg='';
  sd.innerHTML=show?`<div class="sdh">${esc(s.t)}</div>`+list.map(id=>{const g=gOf(id),hd=gr&&g!==sg?`<div class="sgh" data-g="${g}">${esc(GRP[g][1])}</div>`:'';sg=g;return hd+`<button class="msi" type="button" data-id="${id}" data-g="${g}" aria-current="${id===cur.id}">${esc(chipLabel(id))}</button>`}).join(''):'';
  sd.querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>go(b.dataset.id,CURS));
  renderMenu();renderFavs()}
function addHead(){const h=$('#main .ph h2');if(h&&!h.querySelector('.hic')){const g=gOf(cur.id);h.insertAdjacentHTML('afterbegin',`<span class="hic">${icon(SECM[CURS].ic,18)}</span>`);
  if(g!=='geral'&&!['ini','meu'].includes(secOf(cur.id))){h.parentElement.dataset.g=g;h.insertAdjacentHTML('afterend',`<span class="gtag" data-g="${g}">${esc(GRP[g][1])}</span>`)}}}
function addStar(){const ph=$('#main .ph');if(!ph||['ini','meu'].includes(secOf(cur.id)))return;const id=cur.id,on=FAV.includes(id);
  const b=document.createElement('button');b.className='star';b.type='button';b.setAttribute('aria-pressed',on);b.title=on?'Tirar dos favoritos':'Fixar nos favoritos';
  b.innerHTML=on?'★ <span>Favorito</span>':'☆ <span>Fixar</span>';
  b.onclick=()=>{const i=FAV.indexOf(id);if(i>=0)FAV.splice(i,1);else FAV.push(id);saveFav();toast(i>=0?'Removido dos favoritos':'Fixado nos favoritos');renderFavs();b.remove();addStar()};ph.appendChild(b)}
function setHH(){const h=$('header');if(h)document.documentElement.style.setProperty('--hh',h.offsetHeight+'px')}
function go(id,sk){
  if(!known(id))id='inicio';cur={id};
  if(sk&&SECM[sk]&&SECM[sk].ids.includes(id))CURS=sk;
  else if(!SECM[CURS].ids.includes(id)){const s=SECTIONS.find(s=>s.ids.includes(id));if(s)CURS=s.k}
  store.set('kitps:sec',CURS);store.set('kitps:lasts-'+CURS,id);
  try{history.replaceState(null,'','#'+id)}catch(e){}
  renderChips();render();addHead();addStar();setHH();
  const ch=document.getElementById('chip-'+id);if(ch&&ch.scrollIntoView)ch.scrollIntoView({block:'nearest',inline:'nearest'});
  window.scrollTo(0,0)}

/* ---------- Busca ---------- */
let IDX=null;
function buildIdx(){const L=[];
  SECTIONS.forEach(s=>s.ids.forEach(id=>{if(L.some(e=>e.id===id&&e.i==null))return;const x=item(id);if(!x)return;
    const body=x.body||(x.sec?x.sec.map(gdText).join(' '):'')+(x.items?x.items.map(it=>it.t).join(' '):'')+(x.k||'')+(x.code||'');
    L.push({id,lab:x.t,sec:s.t,sub:x.code||x.src||'',key:norm(x.t+' '+body+' '+s.t)});
    if(x.items)x.items.forEach((it,i)=>L.push({id,i,lab:it.t,sec:x.tipo==='a'?'Receita de alta':'Prescrição',sub:x.t,key:norm(it.t+' '+it.rx+' '+x.t+' '+(it.n||''))}))}));
  return L}
function searchKit(q){IDX=IDX||buildIdx();const toks=norm(q).split(/\s+/).filter(Boolean);if(!toks.length)return [];
  return IDX.map(e=>{if(!toks.every(t=>e.key.includes(t)))return null;const l=norm(e.lab);let sc=0;toks.forEach(t=>{if(l.startsWith(t))sc+=4;else if(l.includes(t))sc+=2});if(e.i==null)sc+=1;return [sc,e]}).filter(Boolean).sort((a,b)=>b[0]-a[0]).slice(0,14).map(x=>x[1])}
function openResult(e){$('#q').value='';$('#qres').hidden=true;$('#q').blur();go(e.id);if(e.i!=null)focusCard('#rxa-'+e.i)}

/* ---------- Início ---------- */
(function(){
  applyTheme();
  $('#menu-btn').onclick=()=>document.body.classList.contains('menu-open')?closeMenu():openMenu();
  $('#menu-bg').onclick=closeMenu;
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
  {const tt=$('#totop');let raf=0;const chk=()=>{raf=0;tt.hidden=window.scrollY<500};addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(chk)},{passive:true});tt.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});chk()}
  const q=$('#q'),box=$('#qres');let res=[];
  const draw=()=>{res=searchKit(q.value);if(!q.value.trim()){box.hidden=true;return}
    box.innerHTML=res.length?res.map((e,k)=>`<button class="qr" data-k="${k}" role="option"><span class="qs">${esc(e.sec)}</span><span class="ql">${esc(e.lab)}</span>${e.sub?`<span class="qd">${esc(e.sub)}</span>`:''}</button>`).join(''):'<div class="qr none">Nada encontrado. Tente outro termo (ex.: noradrenalina, sepse, potássio).</div>';
    box.hidden=false;box.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>openResult(res[+b.dataset.k]))};
  q.addEventListener('input',draw);q.addEventListener('focus',()=>{if(q.value.trim())draw()});
  q.addEventListener('keydown',e=>{if(e.key==='Enter'&&res[0]){e.preventDefault();openResult(res[0])}if(e.key==='Escape'){q.value='';box.hidden=true}});
  document.addEventListener('click',e=>{if(!e.target.closest('.search'))box.hidden=true});
  document.addEventListener('wheel',e=>{const c=e.target.closest&&e.target.closest('.chips');if(c&&c.scrollWidth>c.clientWidth+2&&Math.abs(e.deltaY)>Math.abs(e.deltaX)){c.scrollLeft+=e.deltaY;e.preventDefault()}},{passive:false});
  addEventListener('resize',setHH);
  const h=decodeURIComponent(location.hash.slice(1));go(known(h)?h:'inicio');
  window.__test={go,searchKit,SECTIONS,AN,RX,CD,EX,SC,NC,FN};
})();
