/* Kit PS: utilidades e registros. Os arquivos de conteúdo (anamneses.js, prescricoes.js, condutas.js, exames.js, calculadoras.js) preenchem os registros abaixo. */
"use strict";
const $=s=>document.querySelector(s);
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
const fmt=(n,d=1)=>n.toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});
const nf=(n,d=0)=>n.toLocaleString('pt-BR',{maximumFractionDigits:d});
const num=v=>{if(v==null)return NaN;v=String(v).trim().replace(',','.');return v===''?NaN:Number(v)};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const strip=s=>String(s).replace(/<[^>]+>/g,'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');

function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),1600)}
function copy(text,ta){
  const done=()=>toast('Copiado');
  const fallback=()=>{const el=ta||Object.assign(document.createElement('textarea'),{value:text});if(!ta){el.style.position='fixed';el.style.opacity='0';document.body.appendChild(el)}el.focus();el.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}if(!ta)el.remove();toast(ok?'Copiado':'Não consegui copiar: selecione e copie')};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done,fallback)}else fallback();
}
function confirm2(btn,fn){if(btn.dataset.c){delete btn.dataset.c;btn.textContent=btn.dataset.l;fn()}else{btn.dataset.l=btn.textContent;btn.dataset.c=1;btn.textContent='Toque de novo para confirmar';setTimeout(()=>{if(btn.isConnected&&btn.dataset.c){delete btn.dataset.c;btn.textContent=btn.dataset.l}},3000)}}

/* Registros de conteúdo */
const AN={};   // anamneses: {t, code, g, body, rel}
const RX={};   // prescrições: {t, g, tipo:'h'|'a', rec, items:[{t, rx, n}], rel}
const CD={};   // condutas: {t, g, src, k, sec:[{h, intro, li, rows, alert}], rel}
const EX={};   // interpretação de exames: mesmo formato das condutas, ou {render}
const SC={};   // escores: {t, code, g, kind:'ck'|'q', ck|q, lv(t,v), note}
const NC={};   // cálculos numéricos: {t, code, g, f:[...], calc(v), note, tbl}
const FN={};   // telas especiais: {t, g, render(m)}

/* Grupos por sistema (cor da etiqueta) */
const GRP={cv:['Cardio','Cardiovascular'],resp:['Resp.','Respiratório'],neuro:['Neuro','Neurológico'],dig:['Digest.','Digestivo'],renal:['Renal','Renal, eletrólitos e ácido-base'],endo:['Endócrino','Endócrino e metabólico'],inf:['Infecção','Infecções e sepse'],osteo:['Trauma','Trauma, dor e pele'],mental:['Psiq./Tox.','Psiquiatria e intoxicações'],mulher:['Obstetrícia','Gestação e saúde da mulher'],crianca:['Pediatria','Pediatria'],geral:['Geral','Geral']};
const GORD=Object.keys(GRP);
