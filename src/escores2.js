/* Escores (out/2026): NEWS2, SOFA, sPESI, PESI, BISAP, Child-Pugh, MELD-Na, San Francisco, RASS, CAM. */

Object.assign(SC,{
news2:{g:'geral',t:'NEWS2 (deterioração clínica)',code:'Royal College of Physicians 2017',kind:'q',q:[
 {q:'Frequência respiratória (irpm)',o:[['≤ 8',3],['9–11',1],['12–20',0],['21–24',2],['≥ 25',3]]},
 {q:'SpO2 (escala 1)',o:[['≤ 91%',3],['92–93%',2],['94–95%',1],['≥ 96%',0]]},
 {q:'Oxigênio suplementar',o:[['Ar ambiente',0],['Em uso de O2',2]]},
 {q:'PA sistólica (mmHg)',o:[['≤ 90',3],['91–100',2],['101–110',1],['111–219',0],['≥ 220',3]]},
 {q:'Frequência cardíaca (bpm)',o:[['≤ 40',3],['41–50',1],['51–90',0],['91–110',1],['111–130',2],['≥ 131',3]]},
 {q:'Consciência',o:[['Alerta',0],['Confusão nova, responde à voz, à dor ou não responde',3]]},
 {q:'Temperatura (°C)',o:[['≤ 35,0',3],['35,1–36,0',1],['36,1–38,0',0],['38,1–39,0',1],['≥ 39,1',2]]}],
 lv:(t,v)=>t>=7?['bad','Risco alto (≥ 7)','Avaliação médica de emergência imediata; considerar UTI; monitorização contínua.']:t>=5?['warn','Risco médio (5–6)','Avaliação médica urgente; sinais vitais no mínimo de 1/1 h; pensar em sepse.']:v.includes(3)?['warn','Risco baixo-médio (parâmetro isolado = 3)','Avaliação médica urgente do parâmetro alterado; sinais vitais de 1/1 h.']:['ok','Risco baixo (0–4)','Sinais vitais de 4/4 a 12/12 h conforme pontuação.'],note:'Escala 2 de SpO2 (alvo 88–92%) para hipercápnicos crônicos não está incluída aqui.'},

sofa:{g:'inf',t:'SOFA',code:'Vincent 1996 · Sepsis-3',kind:'q',q:[
 {q:'Respiratório: PaO2/FiO2',o:[['≥ 400',0],['< 400',1],['< 300',2],['< 200 com suporte ventilatório',3],['< 100 com suporte ventilatório',4]]},
 {q:'Coagulação: plaquetas (×10³/mm³)',o:[['≥ 150',0],['< 150',1],['< 100',2],['< 50',3],['< 20',4]]},
 {q:'Fígado: bilirrubina (mg/dL)',o:[['< 1,2',0],['1,2–1,9',1],['2,0–5,9',2],['6,0–11,9',3],['≥ 12',4]]},
 {q:'Cardiovascular',o:[['PAM ≥ 70 mmHg',0],['PAM < 70 mmHg',1],['Dopamina ≤ 5 ou dobutamina (qualquer dose)',2],['Dopamina > 5 ou nora/adrenalina ≤ 0,1 mcg/kg/min',3],['Dopamina > 15 ou nora/adrenalina > 0,1 mcg/kg/min',4]]},
 {q:'Neurológico: Glasgow',o:[['15',0],['13–14',1],['10–12',2],['6–9',3],['< 6',4]]},
 {q:'Renal: creatinina (mg/dL) ou diurese',o:[['< 1,2',0],['1,2–1,9',1],['2,0–3,4',2],['3,5–4,9 ou diurese < 500 mL/dia',3],['≥ 5,0 ou diurese < 200 mL/dia',4]]}],
 lv:t=>t>=11?['bad',`SOFA ${t}`,'Mortalidade hospitalar muito alta (> 40–50%).']:t>=2?['warn',`SOFA ${t}`,'Aumento ≥ 2 pontos do basal com infecção = sepse (Sepsis-3); mortalidade ≈ 10% ou mais.']:['ok',`SOFA ${t}`,'Sem disfunção orgânica significativa (considerar o basal do paciente).'],note:'Use o pior valor das últimas 24 h. Basal presumido 0 se sem doença prévia conhecida.'},

spesi:{g:'resp',t:'sPESI (TEP simplificado)',code:'Jiménez 2010',kind:'ck',ck:[['Idade > 80 anos',1],['Câncer',1],['Insuficiência cardíaca ou doença pulmonar crônica',1],['FC ≥ 110 bpm',1],['PAS < 100 mmHg',1],['SpO2 < 90%',1]],
 lv:t=>t===0?['ok','sPESI 0: baixo risco','Mortalidade em 30 dias ≈ 1%. Candidato a tratamento ambulatorial (com critérios Hestia/condições sociais) se sem disfunção de VD.']:['bad',`sPESI ${t}: não baixo risco`,'Mortalidade em 30 dias ≈ 10%. Internar; avaliar VD (ECO/angioTC) e troponina para estratificar (intermediário-alto x intermediário-baixo).'],unit:' ponto(s)'},

bisap:{g:'dig',t:'BISAP (pancreatite)',code:'Wu 2008',kind:'ck',ck:[['Ureia > 53 mg/dL (BUN > 25)',1],['Alteração do estado mental (Glasgow < 15)',1],['SIRS (≥ 2 critérios)',1],['Idade > 60 anos',1],['Derrame pleural na imagem',1]],
 lv:t=>t>=3?['bad',`BISAP ${t}`,'Alto risco de mortalidade (5–20%) e de pancreatite grave: considerar UTI.']:['ok',`BISAP ${t}`,'Baixo risco (mortalidade < 2%).'],unit:' ponto(s)',note:'Calcular nas primeiras 24 h.'},

childpugh:{g:'dig',t:'Child-Pugh',code:'cirrose',kind:'q',q:[
 {q:'Bilirrubina total (mg/dL)',o:[['< 2',1],['2–3',2],['> 3',3]]},
 {q:'Albumina (g/dL)',o:[['> 3,5',1],['2,8–3,5',2],['< 2,8',3]]},
 {q:'INR',o:[['< 1,7',1],['1,7–2,3',2],['> 2,3',3]]},
 {q:'Ascite',o:[['Ausente',1],['Leve (controlada com diurético)',2],['Moderada a grave (refratária)',3]]},
 {q:'Encefalopatia',o:[['Ausente',1],['Grau 1–2 (ou controlada)',2],['Grau 3–4 (ou refratária)',3]]}],
 lv:t=>t<=6?['ok','Child A (5–6)','Sobrevida em 1 ano ≈ 100%; 2 anos ≈ 85%.']:t<=9?['warn','Child B (7–9)','Sobrevida em 1 ano ≈ 80%; 2 anos ≈ 60%. Avaliar transplante.']:['bad','Child C (10–15)','Sobrevida em 1 ano ≈ 45%; 2 anos ≈ 35%. Avaliar transplante.']},

sfsr:{g:'cv',t:'San Francisco (síncope)',code:'Quinn 2004 · CHESS',kind:'ck',np:true,ck:[['C: história de insuficiência cardíaca congestiva',1],['H: hematócrito < 30%',1],['E: ECG anormal (ritmo não sinusal ou alteração nova)',1],['S: dispneia (shortness of breath)',1],['S: PAS < 90 mmHg na triagem',1]],
 lv:t=>t?['bad','Alto risco','Risco de evento grave em 7 dias: monitorização, investigação e considerar internação.']:['ok','Baixo risco','Sem critérios: candidato a alta com investigação ambulatorial (sensibilidade variável, usar com o julgamento clínico).'],unit:''},

rass:{g:'neuro',t:'RASS (agitação e sedação)',code:'Sessler 2002',kind:'q',q:[
 {q:'Observe o paciente; se não estiver alerta, chame pelo nome; se não responder, estímulo físico',o:[['+4 Combativo, violento, perigo para a equipe',4],['+3 Muito agitado, puxa tubos e cateteres, agressivo',3],['+2 Agitado, movimentos sem propósito, briga com o ventilador',2],['+1 Inquieto, ansioso, sem movimentos agressivos',1],['0 Alerta e calmo',0],['−1 Sonolento: desperta à voz e mantém olhos abertos > 10 s',-1],['−2 Sedação leve: desperta à voz, contato visual < 10 s',-2],['−3 Sedação moderada: movimento ou abertura ocular à voz, sem contato visual',-3],['−4 Sedação profunda: sem resposta à voz, movimento ao estímulo físico',-4],['−5 Não desperta: sem resposta à voz nem ao estímulo físico',-5]]}],
 lv:t=>t>=2?['bad',`RASS ${t>0?'+':''}${t}`,'Agitação: procurar dor, delirium, abstinência, hipóxia, retenção urinária; tratar a causa.']:t>=-2?['ok',`RASS ${t>0?'+':''}${t}`,'Alvo usual de sedação na UTI: 0 a −2 (sedação leve). Se RASS ≥ −3, avaliar delirium (CAM).']:t===-3?['warn','RASS −3','Sedação moderada: acima do alvo usual (0 a −2); reduzir sedação se não houver indicação de sedação mais profunda. Avaliar delirium (CAM).']:['warn',`RASS ${t}`,'Sedação profunda: indicada só em situações específicas (SDRA grave, HIC, bloqueio neuromuscular); senão, reduzir sedação.'],unit:''},

cam:{g:'neuro',t:'CAM (delirium)',code:'Inouye 1990',kind:'ck',np:true,ck:[
 ['1. Início agudo e curso flutuante (mudança do estado mental basal que oscila ao longo do dia)',10],
 ['2. Desatenção (distrai-se fácil, não acompanha a conversa, erra os meses de trás para frente)',10],
 ['3. Pensamento desorganizado (incoerente, ilógico, muda de assunto)',1],
 ['4. Nível de consciência alterado (hiperalerta, sonolento, torporoso)',1]],
 lv:t=>t>=21?['bad','CAM positivo: delirium','Critérios 1 + 2 + (3 ou 4). Procurar e tratar a causa.']:['ok','CAM negativo','Não preenche critérios (1 e 2 obrigatórios + 3 ou 4). Reavaliar se o quadro mudar.'],unit:''}
});

NC.pesi={g:'resp',t:'PESI (TEP)',code:'Aujesky 2005',f:[{k:'age',l:'Idade (anos)',v:'60'},
 {k:'sx',l:'Sexo masculino',o:[['0','Não'],['10','Sim']],v:'0'},{k:'ca',l:'Câncer',o:[['0','Não'],['30','Sim']],v:'0'},{k:'ic',l:'Insuficiência cardíaca',o:[['0','Não'],['10','Sim']],v:'0'},{k:'pulm',l:'Doença pulmonar crônica',o:[['0','Não'],['10','Sim']],v:'0'},
 {k:'fc',l:'FC ≥ 110 bpm',o:[['0','Não'],['20','Sim']],v:'0'},{k:'pas',l:'PAS < 100 mmHg',o:[['0','Não'],['30','Sim']],v:'0'},{k:'fr',l:'FR ≥ 30 irpm',o:[['0','Não'],['20','Sim']],v:'0'},{k:'t',l:'Temperatura < 36 °C',o:[['0','Não'],['20','Sim']],v:'0'},
 {k:'ment',l:'Alteração do estado mental',o:[['0','Não'],['60','Sim']],v:'0'},{k:'sat',l:'SpO2 < 90%',o:[['0','Não'],['20','Sim']],v:'0'}],
 calc:v=>{if(!(v.age>0))return null;const s=v.age+['sx','ca','ic','pulm','fc','pas','fr','t','ment','sat'].reduce((a,k)=>a+(+v[k]||0),0);
  const c=s<=65?['I','muito baixo','0–1,6%','ok']:s<=85?['II','baixo','1,7–3,5%','ok']:s<=105?['III','intermediário','3,2–7,1%','']:s<=125?['IV','alto','4,0–11,4%','bad']:['V','muito alto','10–24,5%','bad'];
  return {cls:c[3],big:fmt(s,0)+' <small>pontos</small>',sub:[`Classe <b>${c[0]}</b> (risco ${c[1]}): mortalidade em 30 dias ${c[2]}.`,s<=85?'Classes I–II: candidato a alta precoce/tratamento ambulatorial se sem disfunção de VD e com condições sociais.':'Classes III–V: internar; estratificar com VD (ECO/angioTC) e troponina.'],line:`PESI ${fmt(s,0)} pontos: classe ${c[0]} (${c[1]}).`}}};

NC.meld={g:'dig',t:'MELD-Na',code:'cirrose · UNOS 2016',f:[{k:'bil',l:'Bilirrubina total (mg/dL)',v:'2'},{k:'inr',l:'INR',v:'1,5'},{k:'cr',l:'Creatinina (mg/dL)',v:'1,2'},{k:'na',l:'Sódio (mEq/L)',v:'132'},{k:'hd',l:'Diálise ≥ 2x na última semana',o:[['0','Não'],['1','Sim']],v:'0'}],
 calc:v=>{if(!(v.bil>0&&v.inr>0&&v.cr>0))return null;const b=Math.max(1,v.bil),i=Math.max(1,v.inr),c=+v.hd?4:Math.min(4,Math.max(1,v.cr));
  let m=Math.round((0.957*Math.log(c)+0.378*Math.log(b)+1.120*Math.log(i)+0.643)*10);
  let mn=m;if(m>11&&v.na>0){const na=Math.min(137,Math.max(125,v.na));mn=Math.round(m+1.32*(137-na)-0.033*m*(137-na))}
  mn=Math.min(40,Math.max(6,mn));const mort=mn<10?'≈ 2%':mn<20?'≈ 6%':mn<30?'≈ 20%':mn<40?'≈ 53%':'≈ 71%';
  return {cls:mn>=20?'bad':mn>=15?'':'ok',big:fmt(mn,0)+' <small>MELD-Na</small>',sub:[`MELD (sem sódio): ${fmt(Math.min(40,Math.max(6,m)),0)}.`,`Mortalidade em 90 dias ${mort}.`,'MELD ≥ 15: encaminhar para avaliação de transplante.'],line:`MELD-Na ${fmt(mn,0)} (MELD ${fmt(m,0)}); mortalidade em 90 dias ${mort}.`}}};
