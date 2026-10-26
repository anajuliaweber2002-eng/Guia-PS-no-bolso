/* Receita montada (como no Kit APS): junta remédios das receitas de alta e do preenchedor, agrupa por via,
   numera e separa por tipo de receituário. Fica só nesta aba do navegador (é dado de paciente). */
let RXB=[];try{RXB=JSON.parse(sessionStorage.getItem('kitps:rxb')||'[]')}catch(e){RXB=[]}
let RXP='';try{RXP=sessionStorage.getItem('kitps:rxb-pac')||''}catch(e){}
function saveRxb(){try{sessionStorage.setItem('kitps:rxb',JSON.stringify(RXB))}catch(e){}}
const VIAS=['Uso oral','Uso sublingual','Uso tópico','Uso vaginal','Uso oftálmico','Uso otológico','Uso nasal','Uso inalatório','Uso retal','Uso intramuscular','Uso subcutâneo'];
function viaOf(t){const n=norm(t);return VIAS.find(v=>n.startsWith(norm(v)))||'Uso oral'}
function rxParse(txt){const out=[];let via='Uso oral',cur=null;
  String(txt).split('\n').forEach(l=>{const t=l.trim();if(!t){cur=null;return}
    if(/^uso\s/i.test(t)){via=viaOf(t);cur=null;return}
    if(/^(orienta[cç][oõ]es|observa[cç][oõ]es)\b/i.test(t)){via=null;cur=null;return}
    if(!via||/^- /.test(t)&&!cur)return;
    const m=t.match(/^\d+[.)]\s*(.*)$/);
    if(m){cur={via,txt:m[1]};out.push(cur);return}
    if(cur)cur.txt+='\n'+t;else{cur={via,txt:t};out.push(cur)}});
  return out}
const RXK={A:['Notificação de Receita A (amarela)','Talão oficial; esta folha acompanha.'],B:['Notificação de Receita B (azul)','Talão oficial; esta folha acompanha.'],C:['Receita de Controle Especial em 2 vias','Lista C1: antidepressivos, antipsicóticos, anticonvulsivantes, opioides fracos (tramadol, codeína).'],R:['Receita simples em 2 vias (antimicrobiano: retenção)','Validade de 10 dias.'],S:['Receita simples','']};
function rxKind(t){const n=norm(t.split('\n')[0]);
  if(/metilfenidato|lisdexanfetamina|morfina|metadona|oxicodona|fentanil/.test(n))return 'A';
  if(/clonazepam|diazepam|alprazolam|bromazepam|lorazepam|midazolam|zolpidem|clobazam/.test(n))return 'B';
  if(/fluoxetina|sertralina|escitalopram|citalopram|paroxetina|amitriptilina|nortriptilina|bupropiona|venlafaxina|duloxetina|mirtazapina|trazodona|quetiapina|risperidona|olanzapina|haloperidol|clorpromazina|levomepromazina|carbamazepina|valpro|lamotrigina|topiramato|gabapentina|pregabalina|fenobarbital|fenitoina|litio|biperideno|tramadol|codeina|ciclobenzaprina/.test(n))return n.includes('ciclobenzaprina')?'S':'C';
  if(/colirio|otologic|pomada|creme|gel vaginal/.test(n))return 'S';
  if(/amoxicilina|azitromicina|claritromicina|cefalexina|cefuroxima|cefadroxila|ciprofloxacino|levofloxacino|doxiciclina|clindamicina|nitrofurantoina|sulfametoxazol|metronidazol|secnidazol|fosfomicina|fluconazol|aciclovir|valaciclovir|oseltamivir|penicilina/.test(n))return 'R';
  return 'S'}
function rxbAdd(txt,quiet){const L=rxParse(txt);if(!L.length){toast('Não consegui ler esta receita');return 0}
  let n=0;L.forEach(x=>{if(!RXB.some(y=>y.txt===x.txt)){RXB.push(x);n++}});saveRxb();
  if(!quiet)toast(n?`Na receita montada: ${RXB.length} remédio(s)`:'Já está na receita');return n}
function rxbGroups(){const g={};RXB.forEach((x,i)=>{const k=rxKind(x.txt);(g[k]=g[k]||[]).push(i)});return 'ARCBS'.split('').filter(k=>g[k]).map(k=>[k,g[k]])}
function rxbText(idx){const g=[];idx.forEach(i=>{const x=RXB[i];let e=g.find(y=>y.v===x.via);if(!e)g.push(e={v:x.via,i:[]});e.i.push(x)});let n=0;
  return g.map(e=>e.v.toUpperCase()+'\n'+e.i.map(x=>{n++;const [a,...r]=x.txt.split('\n');return n+'. '+a+(r.length?'\n'+r.map(l=>'   '+l).join('\n'):'')}).join('\n\n')).join('\n\n')}
function rxbAll(){const G=rxbGroups();return G.map(([k,idx])=>(G.length>1?'['+RXK[k][0]+']\n':'')+rxbText(idx)).join('\n\n\n')}

/* Preenchedor: remédios comuns na alta do PS. f: forma [singular, plural]; d: dose por tomada; i: intervalo (h; 'u' dose única, 'sn' se necessário);
   dd: dias (0 = uso contínuo); o: complemento; pk: embalagem quando não dá para contar unidades. */
const MEDS=[
 ['Analgesia e anti-inflamatórios',[
  {n:'Dipirona 500 mg',f:['comprimido','comprimidos'],d:'1 a 2',i:'6',dd:5,o:'se dor ou febre'},
  {n:'Dipirona 500 mg/mL gotas',f:['gota','gotas'],d:'40',i:'6',dd:5,o:'se dor ou febre',pk:'1 frasco'},
  {n:'Paracetamol 750 mg',f:['comprimido','comprimidos'],d:'1',i:'6',dd:5,o:'se dor ou febre (máx. 4 comprimidos/dia)'},
  {n:'Paracetamol 200 mg/mL gotas',f:['gota','gotas'],d:'1 gota/kg (máx. 35)',i:'6',dd:5,o:'se dor ou febre',pk:'1 frasco'},
  {n:'Ibuprofeno 600 mg',f:['comprimido','comprimidos'],d:'1',i:'8',dd:5,o:'após as refeições'},
  {n:'Ibuprofeno 50 mg/mL gotas',f:['gota','gotas'],d:'1 gota/kg (máx. 40)',i:'8',dd:3,o:'se febre ou dor, após alimentação',pk:'1 frasco'},
  {n:'Naproxeno 500 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:5,o:'após as refeições'},
  {n:'Diclofenaco de potássio 50 mg',f:['comprimido','comprimidos'],d:'1',i:'8',dd:5,o:'após as refeições'},
  {n:'Nimesulida 100 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:5,o:'após as refeições'},
  {n:'Tramadol 50 mg',f:['cápsula','cápsulas'],d:'1',i:'8',dd:5,o:'se dor intensa'},
  {n:'Paracetamol 500 mg + codeína 30 mg',f:['comprimido','comprimidos'],d:'1',i:'6',dd:5,o:'se dor intensa'},
  {n:'Ciclobenzaprina 5 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:7,o:'à noite'},
  {n:'Butilbrometo de escopolamina 10 mg + dipirona 250 mg',f:['comprimido','comprimidos'],d:'1 a 2',i:'8',dd:3,o:'se cólica'},
  {n:'Sumatriptano 50 mg',f:['comprimido','comprimidos'],d:'1',i:'u',dd:1,o:'no início da crise de enxaqueca; pode repetir após 2 h (máx. 4 comprimidos/dia)'}]],
 ['Digestivo',[
  {n:'Ondansetrona 4 mg (orodispersível)',f:['comprimido','comprimidos'],d:'1',i:'8',dd:3,o:'sobre a língua, se náusea ou vômito'},
  {n:'Metoclopramida 10 mg',f:['comprimido','comprimidos'],d:'1',i:'8',dd:3,o:'30 min antes das refeições, se náusea'},
  {n:'Bromoprida 10 mg',f:['cápsula','cápsulas'],d:'1',i:'8',dd:3,o:'se náusea'},
  {n:'Omeprazol 20 mg',f:['cápsula','cápsulas'],d:'1',i:'24',dd:30,o:'em jejum, 30 min antes do café'},
  {n:'Pantoprazol 40 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:30,o:'em jejum'},
  {n:'Hidróxido de alumínio + magnésio suspensão',f:['mL','mL'],d:'10',i:'8',dd:7,o:'1 h após as refeições, se queimação',pk:'1 frasco'},
  {n:'Simeticona 40 mg',f:['comprimido','comprimidos'],d:'1',i:'8',dd:5,o:'se gases'},
  {n:'Sais para reidratação oral',f:['envelope','envelopes'],d:'1 envelope diluído em 1 L de água filtrada',i:'sn',dd:3,o:'beber aos poucos ao longo do dia e após cada evacuação líquida',pk:'10 envelopes'},
  {n:'Racecadotrila 100 mg',f:['cápsula','cápsulas'],d:'1',i:'8',dd:3,o:'até parar a diarreia'},
  {n:'Lactulose 667 mg/mL',f:['mL','mL'],d:'15',i:'12',dd:7,o:'ajustar para 1 a 2 evacuações pastosas por dia',pk:'1 frasco'}]],
 ['Alergia e respiratório',[
  {n:'Loratadina 10 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:5,o:''},
  {n:'Dexclorfeniramina 2 mg',f:['comprimido','comprimidos'],d:'1',i:'8',dd:5,o:'pode dar sono'},
  {n:'Hidroxizina 25 mg',f:['comprimido','comprimidos'],d:'1',i:'8',dd:5,o:'se coceira; pode dar sono'},
  {n:'Prednisona 20 mg',f:['comprimido','comprimidos'],d:'2',i:'24',dd:5,o:'pela manhã, após o café'},
  {n:'Prednisolona 3 mg/mL solução oral',f:['mL','mL'],d:'1 mg/kg = __',i:'24',dd:3,o:'pela manhã (máx. 40 mg = 13 mL)',pk:'1 frasco'},
  {n:'Salbutamol 100 mcg/jato aerossol',f:['jato','jatos'],d:'4',i:'4',dd:5,o:'com espaçador, se falta de ar ou chiado; depois espaçar para 6/6 h',pk:'1 frasco',v:'Uso inalatório'},
  {n:'Cloreto de sódio 0,9% spray nasal',f:['jato','jatos'],d:'2 em cada narina',i:'sn',dd:7,o:'várias vezes ao dia',pk:'1 frasco',v:'Uso nasal'},
  {n:'Oseltamivir 75 mg',f:['cápsula','cápsulas'],d:'1',i:'12',dd:5,o:''}]],
 ['Antibióticos e antifúngicos',[
  {n:'Amoxicilina 500 mg',f:['cápsula','cápsulas'],d:'1',i:'8',dd:7,o:''},
  {n:'Amoxicilina 875 mg + clavulanato 125 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:7,o:'no início das refeições'},
  {n:'Amoxicilina 250 mg/5 mL suspensão',f:['mL','mL'],d:'50 mg/kg/dia ÷ 3 = __',i:'8',dd:10,o:'',pk:'__ frasco(s) de 150 mL'},
  {n:'Amoxicilina 400 mg + clavulanato 57 mg/5 mL suspensão',f:['mL','mL'],d:'45 mg/kg/dia ÷ 2 = __',i:'12',dd:10,o:'',pk:'__ frasco(s) de 70 mL'},
  {n:'Azitromicina 500 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:3,o:''},
  {n:'Azitromicina 200 mg/5 mL suspensão',f:['mL','mL'],d:'10 mg/kg = __',i:'24',dd:3,o:'',pk:'1 frasco'},
  {n:'Cefalexina 500 mg',f:['cápsula','cápsulas'],d:'1',i:'6',dd:7,o:''},
  {n:'Ciprofloxacino 500 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:7,o:''},
  {n:'Levofloxacino 750 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:5,o:''},
  {n:'Sulfametoxazol 800 mg + trimetoprima 160 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:7,o:''},
  {n:'Nitrofurantoína 100 mg',f:['cápsula','cápsulas'],d:'1',i:'6',dd:5,o:'com alimentos'},
  {n:'Fosfomicina trometamol 3 g',f:['envelope','envelopes'],d:'1 envelope diluído em água',i:'u',dd:1,o:'à noite, de bexiga vazia',pk:'1 envelope'},
  {n:'Metronidazol 400 mg',f:['comprimido','comprimidos'],d:'1',i:'8',dd:7,o:'não ingerir bebida alcoólica durante e até 3 dias após'},
  {n:'Doxiciclina 100 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:7,o:'com bastante água, sem deitar em seguida'},
  {n:'Clindamicina 300 mg',f:['cápsula','cápsulas'],d:'1',i:'6',dd:7,o:''},
  {n:'Fluconazol 150 mg',f:['cápsula','cápsulas'],d:'1',i:'u',dd:1,o:''},
  {n:'Aciclovir 400 mg',f:['comprimido','comprimidos'],d:'2',i:'5x',dd:7,o:'(herpes-zóster: 800 mg 5 vezes ao dia por 7 dias)'}]],
 ['Cardiovascular e anticoagulação',[
  {n:'AAS 100 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:0,o:'após o almoço'},
  {n:'Clopidogrel 75 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:0,o:''},
  {n:'Rivaroxabana 15 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:21,o:'com alimento; depois 20 mg 1 vez ao dia'},
  {n:'Rivaroxabana 20 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:0,o:'com o jantar'},
  {n:'Apixabana 5 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:0,o:'(TEV: 2 comprimidos de 12/12 h nos primeiros 7 dias)'},
  {n:'Losartana 50 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:0,o:''},
  {n:'Anlodipino 5 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:0,o:''},
  {n:'Hidroclorotiazida 25 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:0,o:'pela manhã'},
  {n:'Furosemida 40 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:0,o:'pela manhã'},
  {n:'Propranolol 40 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:0,o:''},
  {n:'Atorvastatina 40 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:0,o:'à noite'}]],
 ['Neuro, tontura e urologia',[
  {n:'Dimenidrinato 50 mg + piridoxina 10 mg',f:['comprimido','comprimidos'],d:'1',i:'6',dd:3,o:'se tontura ou enjoo; pode dar sono'},
  {n:'Betaistina 24 mg',f:['comprimido','comprimidos'],d:'1',i:'12',dd:15,o:''},
  {n:'Diazepam 10 mg',f:['comprimido','comprimidos'],d:'1',i:'24',dd:5,o:'à noite'},
  {n:'Tansulosina 0,4 mg',f:['cápsula','cápsulas'],d:'1',i:'24',dd:14,o:'à noite (ajuda a eliminar o cálculo)'},
  {n:'Fenazopiridina 200 mg',f:['comprimido','comprimidos'],d:'1',i:'8',dd:2,o:'a urina fica alaranjada'}]],
 ['Pele, olhos, ouvido e ginecologia',[
  {n:'Mupirocina 2% pomada',f:['aplicação','aplicações'],d:'camada fina',i:'8',dd:7,o:'na lesão, após lavar com água e sabão',pk:'1 bisnaga',v:'Uso tópico'},
  {n:'Sulfadiazina de prata 1% creme',f:['aplicação','aplicações'],d:'camada fina',i:'24',dd:7,o:'após limpar a ferida; cobrir com gaze',pk:'1 bisnaga',v:'Uso tópico'},
  {n:'Cetoconazol 2% creme',f:['aplicação','aplicações'],d:'camada fina',i:'12',dd:21,o:'na lesão e 2 cm ao redor',pk:'1 bisnaga',v:'Uso tópico'},
  {n:'Permetrina 5% loção',f:['aplicação','aplicações'],d:'em todo o corpo, do pescoço para baixo',i:'u',dd:1,o:'à noite, enxaguar após 8–12 h; repetir em 7 dias',pk:'1 frasco',v:'Uso tópico'},
  {n:'Ivermectina 6 mg',f:['comprimido','comprimidos'],d:'200 mcg/kg = __',i:'u',dd:1,o:'em jejum; repetir em 7 dias',pk:'__ comprimidos'},
  {n:'Tobramicina 0,3% colírio',f:['gota','gotas'],d:'1',i:'4',dd:7,o:'no(s) olho(s) afetado(s)',pk:'1 frasco',v:'Uso oftálmico'},
  {n:'Lubrificante ocular (carmelose 0,5%) colírio',f:['gota','gotas'],d:'1',i:'sn',dd:15,o:'no(s) olho(s), várias vezes ao dia',pk:'1 frasco',v:'Uso oftálmico'},
  {n:'Ciprofloxacino 0,2% + hidrocortisona 1% solução otológica',f:['gota','gotas'],d:'3',i:'12',dd:7,o:'no ouvido afetado',pk:'1 frasco',v:'Uso otológico'},
  {n:'Levonorgestrel 1,5 mg',f:['comprimido','comprimidos'],d:'1',i:'u',dd:1,o:'o quanto antes, até 5 dias após a relação',pk:'1 comprimido'},
  {n:'Metronidazol 100 mg/g gel vaginal',f:['aplicador','aplicadores'],d:'1',i:'24',dd:7,o:'à noite, ao deitar',pk:'1 bisnaga',v:'Uso vaginal'}]]];
const MEDL=MEDS.flatMap(([g,L])=>L.map(x=>Object.assign({g},x)));
const IVL={'24':['1 vez ao dia',1],'12':['de 12/12 h',2],'8':['de 8/8 h',3],'6':['de 6/6 h',4],'4':['de 4/4 h',6],'5x':['5 vezes ao dia',5],'sn':['se necessário',4],'u':['em dose única',1]};
const VERB={'Uso tópico':'Aplicar','Uso vaginal':'Aplicar','Uso oftálmico':'Pingar','Uso otológico':'Pingar','Uso nasal':'Aplicar','Uso inalatório':'Inalar'};
function rxbBuild(v){const x=MEDL[+v.med];if(!x)return null;const via=x.v||'Uso oral',iv=IVL[v.iv]||IVL['8'],dn=parseFloat(String(v.d).replace(',','.'));
  const cont=v.iv!=='u'&&!(v.dd>0),dias=v.iv==='u'?1:(v.dd>0?v.dd:30);
  const un=/^\d+([.,]\d+)?$/.test(String(v.d).trim())&&dn>0;
  const forma=un?(dn===1?x.f[0]:x.f[1]):'';
  let qt=x.pk||'';
  if(!x.pk&&un){const n=Math.ceil(dn*iv[1]*dias);qt=n+' '+(n===1?x.f[0]:x.f[1])}
  if(!qt&&/^1 a 2$/.test(v.d)){const n=Math.ceil(2*iv[1]*dias);qt=n+' '+x.f[1]}
  const dose=un?String(v.d)+' '+forma:String(v.d)+(/^\d+ a \d+$/.test(v.d)?' '+x.f[1]:'');
  const quando=v.iv==='u'?'em dose única':iv[0]+(cont?', uso contínuo':' por '+dias+' dia'+(dias>1?'s':''));
  const obs=v.o.trim();
  return {via,txt:`${x.n} ———— ${qt||'__'}\n${VERB[via]||'Tomar'} ${dose} ${quando}${obs?', '+obs:''}.`}}

FN.receita={g:'geral',t:'Receita montada',code:'preencher e juntar remédios',k:'receita montada preencher receita receituario prescricao de alta montar receita juntar remedios imprimir controle especial antibiotico',render(m){
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Receita montada</h2><span class="code" id="rxb-c">${RXB.length} remédio(s)</span></div>
    <p class="note">Escolha o remédio, ajuste dose, intervalo e dias: a quantidade é calculada. Também dá para trazer receitas prontas com “+ Receita” nas Receitas de alta. Os remédios ficam numerados, agrupados por via e separados por tipo de receituário. Fica só nesta aba do navegador.</p>
    <article class="card"><h3>Preencher remédio</h3>
      <div class="field"><label for="rb-med">Remédio</label><select id="rb-med">${MEDS.map(([g,L])=>`<optgroup label="${esc(g)}">${L.map(x=>`<option value="${MEDL.findIndex(y=>y.n===x.n)}">${esc(x.n)}</option>`).join('')}</optgroup>`).join('')}</select></div>
      <div class="grid2" style="margin-top:10px"><div class="field"><label for="rb-d">Dose por vez</label><input id="rb-d"></div>
      <div class="field"><label for="rb-iv">Intervalo</label><select id="rb-iv">${Object.entries(IVL).map(([k,v])=>`<option value="${k}">${esc(v[0])}</option>`).join('')}</select></div>
      <div class="field"><label for="rb-dd">Dias (0 = uso contínuo)</label><input id="rb-dd" inputmode="numeric"></div></div>
      <div class="field" style="margin-top:10px"><label for="rb-o">Complemento</label><input id="rb-o"></div>
      <pre class="rx" id="rb-pv" style="margin-top:10px"></pre>
      <div class="bar"><button class="btn primary small" id="rb-add" type="button">+ Adicionar à receita</button></div></article>
    <div class="card"><div class="field"><label for="rb-pac">Nome do paciente (vai na impressão)</label><input id="rb-pac" autocomplete="off" value="${esc(RXP)}"></div></div>
    <div id="rxb-list"></div>
    <details class="card"><summary class="lbl" style="cursor:pointer">+ Digitar em texto livre</summary><div class="field" style="margin-top:8px"><label for="rxb-free">Nome, dose e quantidade na 1ª linha; como tomar embaixo</label><textarea id="rxb-free" class="soap" rows="3" placeholder="Losartana 50 mg ———— 60 comprimidos&#10;Tomar 1 comprimido de 12/12 h, uso contínuo."></textarea></div>
      <div class="bar"><select id="rxb-via" aria-label="Via" style="width:auto">${VIAS.map(v=>`<option>${v}</option>`).join('')}</select><button class="btn small" id="rxb-add" type="button">Adicionar</button></div></details>
    <div class="bar sticky-bar"><button class="btn primary" id="rxb-cp" type="button">Copiar</button><button class="btn" id="rxb-pr" type="button">Imprimir</button><button class="btn" id="rxb-wa" type="button">WhatsApp</button><button class="btn" id="rxb-clr" type="button">Limpar</button></div>
    <p class="note">Confira alergias, função renal, gestação e interações. Doses pediátricas por peso aparecem com “__” para você completar.</p>
    <div id="sheet" class="card atsheet rxsheet"></div></section>`;
  const F=()=>({med:$('#rb-med').value,d:$('#rb-d').value,iv:$('#rb-iv').value,dd:num($('#rb-dd').value),o:$('#rb-o').value});
  const pv=()=>{const r=rxbBuild(F());$('#rb-pv').textContent=r?r.via.toUpperCase()+'\n'+r.txt:''};
  const load=()=>{const x=MEDL[+$('#rb-med').value];$('#rb-d').value=x.d;$('#rb-iv').value=x.i;$('#rb-dd').value=x.dd;$('#rb-o').value=x.o;pv()};
  $('#rb-med').onchange=load;['rb-d','rb-dd','rb-o'].forEach(k=>$('#'+k).oninput=pv);$('#rb-iv').onchange=pv;load();
  $('#rb-add').onclick=()=>{const r=rxbBuild(F());if(!r)return;if(RXB.some(y=>y.txt===r.txt)){toast('Já está na receita');return}RXB.push(r);saveRxb();draw();toast('Adicionado')};
  $('#rb-pac').oninput=e=>{RXP=e.target.value;try{sessionStorage.setItem('kitps:rxb-pac',RXP)}catch(_){}};
  const draw=()=>{const G=rxbGroups(),box=$('#rxb-list');$('#rxb-c').textContent=RXB.length+' remédio(s)';
    if(!RXB.length){box.innerHTML='<div class="card"><p class="note">Nenhum remédio ainda.</p></div>';return}
    box.innerHTML=G.map(([k,idx])=>{let n=0;const vs=[...new Set(idx.map(i=>RXB[i].via))];
      return `<article class="card rxcard"><h3>${esc(RXK[k][0])}</h3>${RXK[k][1]?`<p class="note">${esc(RXK[k][1])}</p>`:''}`+vs.map(v=>`<div class="lbl">${esc(v.toUpperCase())}</div>`+idx.filter(i=>RXB[i].via===v).map(i=>{n++;return `<div class="rxbi"><b>${n}.</b><textarea class="soap rxta" data-rt="${i}" spellcheck="false" aria-label="Remédio ${n}">${esc(RXB[i].txt)}</textarea><div class="rxbb"><button class="btn small" data-up="${i}" type="button" aria-label="Subir">↑</button><button class="btn small" data-dn="${i}" type="button" aria-label="Descer">↓</button><button class="btn small" data-rm="${i}" type="button" aria-label="Tirar">✕</button></div></div>`}).join('')).join('')+`</article>`}).join('');
    box.querySelectorAll('[data-rt]').forEach(t=>{fit(t);t.oninput=()=>{fit(t);RXB[+t.dataset.rt].txt=t.value;saveRxb()};t.onchange=draw});
    const mv=(i,d)=>{const j=i+d;if(j<0||j>=RXB.length)return;[RXB[i],RXB[j]]=[RXB[j],RXB[i]];saveRxb();draw()};
    box.querySelectorAll('[data-up]').forEach(b=>b.onclick=()=>mv(+b.dataset.up,-1));box.querySelectorAll('[data-dn]').forEach(b=>b.onclick=()=>mv(+b.dataset.dn,1));
    box.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{RXB.splice(+b.dataset.rm,1);saveRxb();draw()})};
  draw();
  $('#rxb-add').onclick=()=>{const t=$('#rxb-free').value.trim();if(!t)return;RXB.push({via:$('#rxb-via').value,txt:t.replace(/^\d+[.)]\s*/,'')});saveRxb();$('#rxb-free').value='';draw()};
  $('#rxb-cp').onclick=()=>{if(!RXB.length){toast('Receita vazia');return}copy(rxbAll())};
  $('#rxb-wa').onclick=()=>{if(!RXB.length){toast('Receita vazia');return}waSend(rxbAll())};
  $('#rxb-clr').onclick=e=>confirm2(e.currentTarget,()=>{RXB=[];saveRxb();draw()});
  $('#rxb-pr').onclick=()=>{if(!RXB.length){toast('Receita vazia');return}const p=profGet(),d=new Date(),mes=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    $('#sheet').innerHTML=rxbGroups().map(([k,idx])=>`<div class="rxpg"><div class="ath">${esc(p.unidade||'Pronto Socorro')}</div><div class="att">${k==='C'?'RECEITUÁRIO DE CONTROLE ESPECIAL':'RECEITUÁRIO'}</div><div class="rxpac"><b>Paciente:</b>${RXP?` ${esc(RXP)}`:'<span></span>'}</div><pre class="rxp">${esc(rxbText(idx))}</pre><div class="atf">${esc(p.cidade||'________________')}, ${d.getDate()} de ${mes[d.getMonth()]} de ${d.getFullYear()}.<br><br>_______________________________________<br>${esc(p.medico||'Médico(a)')}${p.crm?' · CRM '+esc(p.crm):''}</div></div>`).join('');
    setTimeout(()=>{try{window.print()}catch(e){toast('Impressão indisponível aqui')}},50)}}};
