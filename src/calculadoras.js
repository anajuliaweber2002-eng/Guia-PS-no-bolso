/* Escores (SC), cálculos numéricos (NC) e telas especiais (FN): gasometria, drogas em infusão, intubação e doses pediátricas. */
const opts=(...o)=>o.map((x,i)=>Array.isArray(x)?x:[x,i]);
Object.assign(SC,{
heart:{g:'cv',t:'HEART (dor torácica)',code:'Six AJ 2008',kind:'q',q:[
 {q:'História',o:[['Pouco suspeita',0],['Moderadamente suspeita',1],['Muito suspeita',2]]},
 {q:'ECG',o:[['Normal',0],['Alteração inespecífica de repolarização (BRE, HVE, marca-passo, digital)',1],['Infra de ST significativo',2]]},
 {q:'Idade',o:[['< 45 anos',0],['45–64 anos',1],['≥ 65 anos',2]]},
 {q:'Fatores de risco (HAS, DM, dislipidemia, tabagismo, obesidade, história familiar)',o:[['Nenhum',0],['1 ou 2',1],['≥ 3 ou doença aterosclerótica conhecida',2]]},
 {q:'Troponina inicial',o:[['≤ limite normal',0],['1 a 3 vezes o limite',1],['> 3 vezes o limite',2]]}],
 lv:t=>t<=3?['ok','Baixo risco','MACE em 6 semanas ~1,7%. Com troponinas seriadas negativas: alta com seguimento ambulatorial.']:t<=6?['warn','Risco moderado','MACE ~12–17%. Observação, troponina seriada e investigação (teste funcional/angio-TC ou cateterismo).']:['bad','Alto risco','MACE ~50–65%. Estratégia invasiva precoce.'],
 note:'Não usar em IAM com supra de ST ou instabilidade (conduta imediata).'},
wells_tep:{g:'cv',t:'Wells para TEP',code:'Wells 2000',kind:'ck',ck:[['Sinais clínicos de TVP (edema e dor à palpação de veias profundas)',3],['TEP é o diagnóstico mais provável',3],['FC > 100 bpm',1.5],['Imobilização ≥ 3 dias ou cirurgia nas últimas 4 semanas',1.5],['TVP ou TEP prévios',1.5],['Hemoptise',1],['Câncer ativo (tratamento nos últimos 6 meses ou paliativo)',1]],
 lv:t=>t<=4?['ok','TEP improvável (≤ 4)','Baixa probabilidade (< 2): aplicar PERC. Improvável: D-dímero; negativo afasta.']:['bad','TEP provável (> 4)','Angio-TC de tórax. Considerar anticoagular enquanto aguarda, se baixo risco de sangramento.'],note:'Três níveis: < 2 baixa, 2–6 intermediária, > 6 alta probabilidade.'},
perc:{g:'cv',t:'PERC (afastar TEP)',code:'Kline 2004',kind:'ck',ck:[['Idade ≥ 50 anos',1],['FC ≥ 100 bpm',1],['SpO2 < 95% em ar ambiente',1],['Hemoptise',1],['Uso de estrogênio (ACO, TRH)',1],['TVP ou TEP prévios',1],['Edema unilateral de membro inferior',1],['Cirurgia ou trauma com internação nas últimas 4 semanas',1]],
 lv:t=>t===0?['ok','PERC negativo','Se a probabilidade clínica é BAIXA (< 15%), TEP está afastado sem exames.']:['warn','PERC positivo','Não afasta TEP: seguir com D-dímero ou imagem conforme Wells.'],note:'Só vale em pacientes de baixa probabilidade pré-teste.',unit:' critério(s)'},
wells_tvp:{g:'cv',t:'Wells para TVP',code:'Wells 2003',kind:'ck',ck:[['Câncer ativo',1],['Paralisia, paresia ou imobilização gessada recente de MMII',1],['Acamado > 3 dias ou cirurgia de grande porte nas últimas 12 semanas',1],['Dor à palpação no trajeto do sistema venoso profundo',1],['Edema de toda a perna',1],['Panturrilha > 3 cm maior que a outra (10 cm abaixo da tuberosidade tibial)',1],['Edema depressível só na perna sintomática',1],['Veias superficiais colaterais (não varicosas)',1],['TVP prévia documentada',1],['Diagnóstico alternativo tão ou mais provável',-2]],
 lv:t=>t>=2?['bad','TVP provável (≥ 2)','USG Doppler venoso.']:['ok','TVP improvável (< 2)','D-dímero; negativo afasta. Positivo: USG.']},
curb65:{g:'resp',t:'CURB-65 (pneumonia)',code:'BTS',kind:'ck',ck:[['Confusão mental (nova)',1],['Ureia > 50 mg/dL',1],['FR ≥ 30 irpm',1],['PAS < 90 ou PAD ≤ 60 mmHg',1],['Idade ≥ 65 anos',1]],
 lv:t=>t<=1?['ok','Baixo risco','Mortalidade < 3%. Tratamento ambulatorial (se sem hipoxemia, comorbidade descompensada ou problema social).']:t===2?['warn','Risco intermediário','Mortalidade ~9%. Internação ou observação.']:['bad','Grave','Mortalidade 15–40%. Internação; considerar UTI se 4–5.'],note:'Sem ureia: CRB-65 (0 ambulatorial; ≥ 1 avaliar internação). Hipoxemia (SpO2 < 92%) indica internação independentemente do escore.'},
qsofa:{g:'inf',t:'qSOFA',code:'Sepsis-3',kind:'ck',ck:[['FR ≥ 22 irpm',1],['PAS ≤ 100 mmHg',1],['Alteração do nível de consciência (Glasgow < 15)',1]],
 lv:t=>t>=2?['bad','qSOFA positivo','Maior risco de morte: investigar disfunção orgânica, lactato, abrir protocolo de sepse.']:['ok','qSOFA < 2','Não afasta sepse: use também SIRS, NEWS e julgamento clínico.']},
glasgow:{g:'neuro',t:'Escala de coma de Glasgow',code:'Glasgow-P (2018)',kind:'q',q:[
 {q:'Abertura ocular',o:[['Espontânea',4],['Ao som (chamado)',3],['À pressão',2],['Nenhuma',1]]},
 {q:'Resposta verbal',o:[['Orientado',5],['Confuso',4],['Palavras',3],['Sons',2],['Nenhuma',1]]},
 {q:'Resposta motora',o:[['Obedece a comandos',6],['Localiza estímulo',5],['Flexão normal (retirada)',4],['Flexão anormal (decorticação)',3],['Extensão (descerebração)',2],['Nenhuma',1]]},
 {q:'Reatividade pupilar (opcional, Glasgow-P)',o:[['Ambas reagem',0],['Uma não reage',-1],['Nenhuma reage',-2]]}],
 lv:t=>t>=13?['ok','TCE leve / alteração leve','13–15.']:t>=9?['warn','Moderado','9–12. TC de crânio, observação, neurocirurgia.']:['bad','Grave (≤ 8)','Proteger via aérea (IOT).'],note:'Glasgow-P = Glasgow − pontos de reatividade pupilar (vai de 1 a 15). Não pontuar resposta não testável (intubado: registrar "T").'},
nihss:{g:'neuro',t:'NIHSS',code:'NIH Stroke Scale',kind:'q',q:[
 {q:'1a. Nível de consciência',o:[['Alerta',0],['Sonolento (desperta com estímulo leve)',1],['Estupor (só com estímulo repetido/doloroso)',2],['Coma / só reflexos',3]]},
 {q:'1b. Perguntas (mês e idade)',o:[['Ambas corretas',0],['Uma correta',1],['Nenhuma',2]]},
 {q:'1c. Comandos (abrir e fechar olhos, apertar a mão)',o:[['Ambos corretos',0],['Um correto',1],['Nenhum',2]]},
 {q:'2. Olhar conjugado',o:[['Normal',0],['Paralisia parcial',1],['Desvio forçado',2]]},
 {q:'3. Campos visuais',o:[['Sem perda',0],['Hemianopsia parcial',1],['Hemianopsia completa',2],['Bilateral / cegueira',3]]},
 {q:'4. Paralisia facial',o:[['Normal',0],['Menor (apagamento do sulco)',1],['Parcial (face inferior)',2],['Completa',3]]},
 {q:'5a. Motor do braço esquerdo (90° sentado / 45° deitado, 10 s)',o:[['Sem queda',0],['Queda antes de 10 s, sem tocar a cama',1],['Algum esforço contra a gravidade',2],['Sem esforço contra a gravidade',3],['Nenhum movimento',4]]},
 {q:'5b. Motor do braço direito',o:[['Sem queda',0],['Queda antes de 10 s, sem tocar a cama',1],['Algum esforço contra a gravidade',2],['Sem esforço contra a gravidade',3],['Nenhum movimento',4]]},
 {q:'6a. Motor da perna esquerda (30°, 5 s)',o:[['Sem queda',0],['Queda antes de 5 s, sem tocar a cama',1],['Algum esforço contra a gravidade',2],['Sem esforço contra a gravidade',3],['Nenhum movimento',4]]},
 {q:'6b. Motor da perna direita',o:[['Sem queda',0],['Queda antes de 5 s, sem tocar a cama',1],['Algum esforço contra a gravidade',2],['Sem esforço contra a gravidade',3],['Nenhum movimento',4]]},
 {q:'7. Ataxia de membros',o:[['Ausente',0],['Em um membro',1],['Em dois membros',2]]},
 {q:'8. Sensibilidade',o:[['Normal',0],['Perda leve a moderada',1],['Perda grave ou total',2]]},
 {q:'9. Linguagem',o:[['Normal',0],['Afasia leve a moderada',1],['Afasia grave',2],['Mutismo / afasia global',3]]},
 {q:'10. Disartria',o:[['Normal',0],['Leve a moderada',1],['Grave / ininteligível',2]]},
 {q:'11. Extinção e negligência',o:[['Nenhuma',0],['Em uma modalidade',1],['Profunda / mais de uma modalidade',2]]}],
 lv:t=>t===0?['ok','Sem déficit mensurável','']:t<=4?['warn','AVC menor (1–4)','Trombólise se déficit incapacitante. Dupla antiagregação se não trombolisado (NIHSS ≤ 3).']:t<=15?['bad','AVC moderado (5–15)','Avaliar trombólise e oclusão de grande vaso.']:t<=20?['bad','Moderado a grave (16–20)','Alta chance de oclusão de grande vaso: angio-TC, trombectomia.']:['bad','Grave (21–42)','Alta chance de oclusão de grande vaso; risco de transformação hemorrágica.']},
cha2ds2:{g:'cv',t:'CHA2DS2-VASc',code:'FA não valvar',kind:'ck',ck:[['Insuficiência cardíaca / disfunção de VE',1],['Hipertensão',1],['Idade ≥ 75 anos',2],['Diabetes',1],['AVC, AIT ou tromboembolismo prévio',2],['Doença vascular (IAM, DAP, placa aórtica)',1],['Idade 65–74 anos',1],['Sexo feminino',1]],
 lv:t=>t<=1?['ok','Baixo','Homem 0 / mulher 1: sem anticoagulação. Homem 1: considerar.']:t===2?['warn','Intermediário','Homem 2: anticoagular. Mulher 2 (1 fator além do sexo): considerar.']:['bad','Alto','Anticoagulação oral indicada.'],note:'ESC 2024 propõe o CHA2DS2-VA (sem o sexo): anticoagular com ≥ 2, considerar com 1.'},
hasbled:{g:'cv',t:'HAS-BLED',code:'risco de sangramento',kind:'ck',ck:[['Hipertensão não controlada (PAS > 160)',1],['Função renal alterada (diálise, transplante, Cr ≥ 2,3)',1],['Função hepática alterada (cirrose ou bilirrubina > 2 × e TGO/TGP > 3 ×)',1],['AVC prévio',1],['Sangramento prévio ou predisposição',1],['INR lábil',1],['Idade > 65 anos',1],['Drogas (antiagregante, AINE)',1],['Álcool (≥ 8 doses/semana)',1]],
 lv:t=>t>=3?['warn','Alto risco de sangramento (≥ 3)','Não contraindica anticoagular: corrigir fatores modificáveis e seguir de perto.']:['ok','Risco baixo a moderado','']},
abcd2:{g:'neuro',t:'ABCD2 (AIT)',code:'Johnston 2007',kind:'q',q:[
 {q:'Idade ≥ 60 anos',o:[['Não',0],['Sim',1]]},
 {q:'PA ≥ 140x90 na avaliação',o:[['Não',0],['Sim',1]]},
 {q:'Clínica',o:[['Outros sintomas',0],['Distúrbio de fala sem fraqueza',1],['Fraqueza unilateral',2]]},
 {q:'Duração',o:[['< 10 min',0],['10–59 min',1],['≥ 60 min',2]]},
 {q:'Diabetes',o:[['Não',0],['Sim',1]]}],
 lv:t=>t<=3?['ok','Baixo risco','AVC em 2 dias ~1%. Investigação ambulatorial rápida (< 1 semana).']:t<=5?['warn','Risco moderado','AVC em 2 dias ~4%. Investigar em 24 h.']:['bad','Alto risco','AVC em 2 dias ~8%. Internar/investigar imediatamente.'],note:'Hoje se recomenda investigar todo AIT rapidamente, independente do escore.'},
ccthead:{g:'neuro',t:'Canadian CT Head Rule',code:'TCE leve (Glasgow 13–15)',kind:'ck',ck:[['ALTO RISCO: Glasgow < 15 duas horas após o trauma',10],['ALTO RISCO: suspeita de fratura aberta ou com afundamento',10],['ALTO RISCO: sinal de fratura de base (hemotímpano, olhos de guaxinim, Battle, fístula liquórica)',10],['ALTO RISCO: vômitos ≥ 2 episódios',10],['ALTO RISCO: idade ≥ 65 anos',10],['MÉDIO RISCO: amnésia retrógrada ≥ 30 min',1],['MÉDIO RISCO: mecanismo perigoso (atropelamento, ejeção, queda > 1 m ou 5 degraus)',1]],
 lv:t=>t>=10?['bad','Alto risco: TC indicada','Risco de intervenção neurocirúrgica.']:t>=1?['warn','Médio risco: TC indicada','Risco de lesão cerebral na TC.']:['ok','Sem critérios','TC não necessária pela regra (se aplicável).'],unit:'',note:'Aplicável a ≥ 16 anos com perda de consciência, amnésia ou desorientação presenciadas e Glasgow 13–15. NÃO se aplica a: anticoagulados, convulsão pós-trauma, trauma penetrante, déficit focal, gestante.'},
nexus:{g:'osteo',t:'NEXUS (coluna cervical)',code:'Hoffman 2000',kind:'ck',ck:[['Dor à palpação da linha média cervical posterior',1],['Déficit neurológico focal',1],['Alteração do nível de consciência',1],['Intoxicação (álcool/drogas)',1],['Lesão dolorosa que distrai',1]],
 lv:t=>t===0?['ok','Sem critérios NEXUS','Dispensa imagem da coluna cervical.']:['warn','Imagem indicada','TC de coluna cervical (preferida em adultos).'],unit:' critério(s)'},
alvarado:{g:'dig',t:'Alvarado (apendicite)',code:'Alvarado 1986',kind:'ck',ck:[['Dor migratória para FID',1],['Anorexia',1],['Náuseas ou vômitos',1],['Dor à palpação da FID',2],['Descompressão brusca positiva',1],['Febre ≥ 37,3 °C',1],['Leucocitose > 10.000',2],['Desvio à esquerda (neutrofilia > 75%)',1]],
 lv:t=>t<=4?['ok','Baixa probabilidade','Considerar outros diagnósticos; observar.']:t<=6?['warn','Intermediária','Imagem (USG ou TC) e avaliação cirúrgica.']:['bad','Alta probabilidade','Avaliação cirúrgica.']},
ciwa:{g:'mental',t:'CIWA-Ar (abstinência alcoólica)',code:'Sullivan 1989',kind:'q',q:[
 {q:'Náuseas e vômitos',o:opts(['Nenhum',0],['Náusea leve sem vômito',1],['Náusea intermitente com ânsia',4],['Náusea constante, vômitos frequentes',7])},
 {q:'Tremor (braços estendidos)',o:opts(['Nenhum',0],['Não visível, sentido nos dedos',1],['Moderado com braços estendidos',4],['Intenso mesmo sem estender',7])},
 {q:'Sudorese',o:opts(['Nenhuma',0],['Palmas úmidas',1],['Gotas na testa',4],['Sudorese profusa',7])},
 {q:'Ansiedade',o:opts(['Calmo',0],['Levemente ansioso',1],['Moderadamente ansioso, reservado',4],['Pânico, equivalente a delírio',7])},
 {q:'Agitação',o:opts(['Atividade normal',0],['Um pouco acima do normal',1],['Inquieto, mexendo-se',4],['Anda de um lado para outro',7])},
 {q:'Alterações táteis (coceira, formigamento, insetos)',o:opts(['Nenhuma',0],['Muito leve',1],['Moderada',3],['Alucinações graves a contínuas',6])},
 {q:'Alterações auditivas',o:opts(['Nenhuma',0],['Muito leve',1],['Moderada',3],['Alucinações graves a contínuas',6])},
 {q:'Alterações visuais (luz, cores)',o:opts(['Nenhuma',0],['Muito leve',1],['Moderada',3],['Alucinações graves a contínuas',6])},
 {q:'Cefaleia / cabeça pesada',o:opts(['Nenhuma',0],['Muito leve',1],['Moderada',3],['Muito intensa',6])},
 {q:'Orientação',o:opts(['Orientado',0],['Incerto da data',1],['Erra a data por ≤ 2 dias',2],['Erra a data por > 2 dias',3],['Desorientado no lugar ou pessoa',4])}],
 lv:t=>t<=9?['ok','Abstinência leve (< 10)','Sem necessidade de benzodiazepínico; reavaliar de 4/4 h.']:t<=18?['warn','Moderada (10–18)','Diazepam conforme sintoma; reavaliar de 1/1 h.']:['bad','Grave (≥ 19)','Diazepam em doses repetidas, considerar UTI.'],note:'Escala simplificada nas âncoras (0, 1, 4, 7). Pontuação máxima 67.'}
});

/* ---------- Cálculos numéricos ---------- */
const TBWF=(sx,age)=>sx==='F'?(age>=65?0.45:0.5):(age>=65?0.5:0.6);
Object.assign(NC,{
angap:{g:'renal',t:'Ânion gap e delta-delta',code:'AG = Na − (Cl + HCO3)',f:[{k:'na',l:'Na (mEq/L)',v:'138'},{k:'cl',l:'Cl (mEq/L)',v:'104'},{k:'hco3',l:'HCO3 (mEq/L)',v:'12'},{k:'alb',l:'Albumina (g/dL) — opcional',v:''}],
 calc:v=>{if(!(v.na>0&&v.cl>0&&v.hco3>0))return null;const ag=v.na-(v.cl+v.hco3),agc=v.alb>0?ag+2.5*(4-v.alb):ag,dd=v.hco3<24?(agc-12)/(24-v.hco3):null;
  const hi=agc>12;return {cls:hi?'warn':'ok',big:fmt(agc,1)+' <small>mEq/L'+(v.alb>0?' (corrigido)':'')+'</small>',sub:[hi?'<b>Ânion gap aumentado</b>: cetoacidose, lactato, IRA, intoxicações (metanol, etilenoglicol, salicilato).':'<b>Ânion gap normal</b>: se acidose, pensar em diarreia, ATR, excesso de SF 0,9%.',v.alb>0?'AG sem correção: '+fmt(ag,1):'Albumina baixa mascara AG alto: informe a albumina.',dd!=null&&hi?`Delta-delta: <b>${fmt(dd,2)}</b> — ${dd<1?'acidose de AG normal associada':dd<=2?'acidose de AG aumentado pura':'alcalose metabólica associada'}`:''].filter(Boolean),line:`Ânion gap ${fmt(agc,1)} mEq/L${v.alb>0?' (corrigido pela albumina)':''}${dd!=null&&hi?', delta-delta '+fmt(dd,2):''}.`}}},
nacorr:{g:'endo',t:'Sódio corrigido pela glicemia',code:'Katz / Hillier',f:[{k:'na',l:'Na medido (mEq/L)',v:'130'},{k:'gl',l:'Glicemia (mg/dL)',v:'600'}],
 calc:v=>{if(!(v.na>0&&v.gl>0))return null;const d=Math.max(0,v.gl-100)/100,k=v.na+1.6*d,h=v.na+2.4*d;return {cls:'',big:fmt(h,1)+' <small>mEq/L (Hillier, fator 2,4)</small>',sub:['Katz (fator 1,6): <b>'+fmt(k,1)+'</b> mEq/L','Na corrigido normal ou alto na CAD/EHH: hidratar com SF 0,45%; baixo: SF 0,9%.'],line:`Na corrigido: ${fmt(h,1)} mEq/L (Hillier) / ${fmt(k,1)} (Katz).`}}},
osm:{g:'renal',t:'Osmolaridade plasmática',code:'2 Na + glicose/18 + ureia/6',f:[{k:'na',l:'Na (mEq/L)',v:'140'},{k:'gl',l:'Glicemia (mg/dL)',v:'100'},{k:'ur',l:'Ureia (mg/dL)',v:'30'},{k:'om',l:'Osmolalidade medida (opcional)',v:''}],
 calc:v=>{if(!(v.na>0&&v.gl>0))return null;const ef=2*v.na+v.gl/18,tot=ef+(v.ur>0?v.ur/6:0),gap=v.om>0?v.om-tot:null;
  return {cls:ef>320?'bad':ef>295?'warn':'ok',big:fmt(tot,0)+' <small>mOsm/kg</small>',sub:['Efetiva (tonicidade): <b>'+fmt(ef,0)+'</b> mOsm/kg '+(ef>320?'— compatível com estado hiperosmolar':''),'Normal 275–295.',gap!=null?`Gap osmolar: <b>${fmt(gap,0)}</b> ${gap>10?'— aumentado: pensar em metanol, etilenoglicol, etanol, manitol':'(normal < 10)'}`:''].filter(Boolean),line:`Osmolaridade calculada ${fmt(tot,0)} mOsm/kg (efetiva ${fmt(ef,0)}).`}}},
nadef:{g:'renal',t:'Correção do sódio (Adrogué-Madias)',code:'variação do Na por litro infundido',f:[{k:'kg',l:'Peso (kg)',v:'70'},{k:'age',l:'Idade (anos)',v:'60'},{k:'sx',l:'Sexo',o:[['M','Masculino'],['F','Feminino']]},{k:'na',l:'Na atual (mEq/L)',v:'118'},{k:'sol',l:'Solução',o:[['513','NaCl 3% (513 mEq/L)'],['154','SF 0,9% (154)'],['130','Ringer lactato (130)'],['77','SF 0,45% (77)'],['0','SG 5% / água livre (0)']]},{k:'alvo',l:'Variação desejada em 24 h (mEq/L)',v:'8'}],
 calc:v=>{if(!(v.kg>0&&v.na>0))return null;const tbw=TBWF(v.sx,v.age||0)*v.kg,inf=+v.sol,dl=(inf-v.na)/(tbw+1);if(Math.abs(dl)<0.01)return {cls:'warn',big:'0 <small>mEq/L por litro</small>',sub:['Esta solução não altera o Na.'],line:''};
  const alvo=Math.abs(v.alvo||8),L=alvo/Math.abs(dl),ok=(dl>0&&v.na<135)||(dl<0&&v.na>145);
  return {cls:ok?'':'warn',big:(dl>0?'+':'')+fmt(dl,1)+' <small>mEq/L por litro</small>',sub:[`Água corporal total estimada: ${fmt(tbw,1)} L.`,`Para variar ${fmt(alvo,0)} mEq/L: <b>${fmt(L*1000,0)} mL</b> em 24 h (≈ ${fmt(L*1000/24,0)} mL/h).`,'Não inclui perdas (diurese, que pode acelerar a correção). Dosar Na a cada 2–4 h. Limite 8–10 mEq/L/24 h na hiponatremia; 10–12 na hipernatremia.'],line:`Adrogué-Madias: ${(dl>0?'+':'')}${fmt(dl,1)} mEq/L por litro; ${fmt(L*1000,0)} mL em 24 h para ${fmt(alvo,0)} mEq/L.`}}},
aguafree:{g:'renal',t:'Déficit de água livre',code:'hipernatremia',f:[{k:'kg',l:'Peso (kg)',v:'60'},{k:'age',l:'Idade (anos)',v:'80'},{k:'sx',l:'Sexo',o:[['F','Feminino'],['M','Masculino']]},{k:'na',l:'Na atual (mEq/L)',v:'160'}],
 calc:v=>{if(!(v.kg>0&&v.na>145))return v.na>0?{cls:'ok',big:'Sem déficit',sub:['Na ≤ 145 mEq/L.'],line:''}:null;const tbw=TBWF(v.sx,v.age||0)*v.kg,d=tbw*(v.na/140-1);
  return {cls:'warn',big:fmt(d,1)+' <small>litros</small>',sub:['Repor em 48–72 h (crônica) com SG 5% ou água via SNG, além das perdas diárias.','Reduzir o Na no máximo 10–12 mEq/L em 24 h. Use Adrogué-Madias para o ritmo.'],line:`Déficit de água livre: ${fmt(d,1)} L.`}}},
cg:{g:'renal',t:'Clearance de creatinina (Cockcroft-Gault)',code:'ajuste de doses',f:[{k:'age',l:'Idade (anos)',v:'70'},{k:'kg',l:'Peso (kg)',v:'70'},{k:'cr',l:'Creatinina (mg/dL)',v:'1,2'},{k:'sx',l:'Sexo',o:[['M','Masculino'],['F','Feminino']]}],
 calc:v=>{if(!(v.age>0&&v.kg>0&&v.cr>0))return null;const c=(140-v.age)*v.kg/(72*v.cr)*(v.sx==='F'?0.85:1);return {cls:c<30?'bad':c<60?'warn':'ok',big:fmt(c,0)+' <small>mL/min</small>',sub:[c<15?'Muito reduzido: evitar nefrotóxicos; ajustar todas as drogas.':c<30?'< 30: ajustar enoxaparina (1 mg/kg/dia), evitar nitrofurantoína, rivaroxabana com cautela.':c<60?'30–59: ajustar várias drogas (antibióticos, DOAC).':'Sem ajuste para a maioria das drogas.','Superestima em idosos sarcopênicos e não vale em IRA (creatinina não estável).'],line:`ClCr (Cockcroft-Gault): ${fmt(c,0)} mL/min.`}}},
cacorr:{g:'renal',t:'Cálcio corrigido pela albumina',code:'Ca + 0,8 × (4 − albumina)',f:[{k:'ca',l:'Cálcio total (mg/dL)',v:'7,8'},{k:'alb',l:'Albumina (g/dL)',v:'2,5'}],
 calc:v=>{if(!(v.ca>0&&v.alb>0))return null;const c=v.ca+0.8*(4-v.alb);return {cls:c<8.5||c>10.5?'warn':'ok',big:fmt(c,1)+' <small>mg/dL</small>',sub:['Normal 8,5–10,5 mg/dL. Prefira cálcio iônico quando disponível.',c>12?'Hipercalcemia moderada a grave: SF 0,9% 200–300 mL/h, zoledronato, calcitonina.':c<7.5?'Hipocalcemia importante: gluconato de cálcio EV se sintomas ou QT longo.':''].filter(Boolean),line:`Cálcio corrigido: ${fmt(c,1)} mg/dL.`}}},
parkland:{g:'osteo',t:'Parkland (queimados)',code:'4 mL × kg × %SCQ',f:[{k:'kg',l:'Peso (kg)',v:'70'},{k:'scq',l:'% de superfície corporal queimada (2º e 3º graus)',v:'30'},{k:'h',l:'Horas desde a queimadura',v:'1'}],
 calc:v=>{if(!(v.kg>0&&v.scq>0))return null;const tot=4*v.kg*v.scq,h1=tot/2,rest=Math.max(0.5,8-(v.h||0));return {cls:'',big:fmt(tot,0)+' <small>mL de Ringer lactato em 24 h</small>',sub:[`Metade (<b>${fmt(h1,0)} mL</b>) nas primeiras 8 h do momento da queimadura: faltam ${fmt(rest,1)} h → <b>${fmt(h1/rest,0)} mL/h</b>.`,`Restante (${fmt(h1,0)} mL) nas 16 h seguintes: <b>${fmt(h1/16,0)} mL/h</b>.`,'Titular pela diurese: 0,5 mL/kg/h no adulto (1 mL/kg/h na criança; 1–1,5 mL/kg/h na queimadura elétrica). Fórmula atual do ATLS: 2 mL/kg/% no adulto.'],line:`Parkland: ${fmt(tot,0)} mL de RL em 24 h (${fmt(h1,0)} mL nas primeiras 8 h).`}}},
qtc:{g:'cv',t:'QT corrigido',code:'Bazett e Fridericia',f:[{k:'qt',l:'QT medido (ms)',v:'400'},{k:'fc',l:'FC (bpm)',v:'90'}],
 calc:v=>{if(!(v.qt>0&&v.fc>0))return null;const rr=60/v.fc,b=v.qt/Math.sqrt(rr),f=v.qt/Math.cbrt(rr);return {cls:f>500||b>500?'bad':f>460?'warn':'ok',big:fmt(f,0)+' <small>ms (Fridericia)</small>',sub:['Bazett: <b>'+fmt(b,0)+'</b> ms (superestima com FC alta).','Normal < 450 ms (homem) e < 460 ms (mulher). > 500 ms: alto risco de torsades: suspender drogas que alargam QT, repor K e Mg.'],line:`QTc ${fmt(f,0)} ms (Fridericia) / ${fmt(b,0)} ms (Bazett).`}}},
gotas:{g:'geral',t:'Gotejamento',code:'macro e microgotas',f:[{k:'v',l:'Volume (mL)',v:'500'},{k:'h',l:'Tempo (horas)',v:'6'}],
 calc:v=>{if(!(v.v>0&&v.h>0))return null;const mlh=v.v/v.h;return {cls:'',big:fmt(mlh,0)+' <small>mL/h</small>',sub:[`Macrogotas: <b>${fmt(v.v/(3*v.h),0)}</b> gotas/min (20 gotas = 1 mL)`,`Microgotas: <b>${fmt(mlh,0)}</b> microgotas/min (60 = 1 mL)`],line:`${fmt(v.v,0)} mL em ${fmt(v.h,1)} h: ${fmt(mlh,0)} mL/h = ${fmt(v.v/(3*v.h),0)} gotas/min.`}}},
gbs:{g:'dig',t:'Glasgow-Blatchford (HDA)',code:'Blatchford 2000',f:[{k:'ur',l:'Ureia (mg/dL)',v:'40'},{k:'hb',l:'Hemoglobina (g/dL)',v:'12'},{k:'sx',l:'Sexo',o:[['M','Masculino'],['F','Feminino']]},{k:'pas',l:'PAS (mmHg)',v:'110'},{k:'fc',l:'FC ≥ 100 bpm',o:[['0','Não'],['1','Sim']]},{k:'mel',l:'Melena',o:[['0','Não'],['1','Sim']]},{k:'sin',l:'Síncope',o:[['0','Não'],['2','Sim']]},{k:'hep',l:'Hepatopatia',o:[['0','Não'],['2','Sim']]},{k:'ic',l:'Insuficiência cardíaca',o:[['0','Não'],['2','Sim']]}],
 calc:v=>{if(!(v.ur>0&&v.hb>0&&v.pas>0))return null;let s=0;const u=v.ur;s+=u>=150?6:u>=60?4:u>=48?3:u>=39?2:0;
  s+=v.sx==='M'?(v.hb<10?6:v.hb<12?3:v.hb<13?1:0):(v.hb<10?6:v.hb<12?1:0);s+=v.pas<90?3:v.pas<100?2:v.pas<110?1:0;s+=+v.fc+ +v.mel+ +v.sin+ +v.hep+ +v.ic;
  return {cls:s<=1?'ok':s<=7?'warn':'bad',big:s+' <small>pontos</small>',sub:[s<=1?'<b>Baixo risco</b>: pode ser manejado ambulatorialmente com EDA eletiva.':s<=7?'Risco intermediário: internação e EDA em 24 h.':'Alto risco: necessidade provável de intervenção (transfusão, endoscopia terapêutica).'],line:`Glasgow-Blatchford: ${s} pontos.`}}}
});

/* ---------- Telas especiais ---------- */
function fieldsHTML(f,pre){return `<div class="grid2">${f.map(x=>x.o?`<div class="field"><label for="${pre}-${x.k}">${esc(x.l)}</label><select id="${pre}-${x.k}">${x.o.map(o=>`<option value="${o[0]}"${o[0]===x.v?' selected':''}>${esc(o[1])}</option>`).join('')}</select></div>`:`<div class="field"><label for="${pre}-${x.k}">${esc(x.l)}</label><input id="${pre}-${x.k}" inputmode="decimal" value="${x.v||''}"></div>`).join('')}</div>`}
function readF(f,pre){const v={};f.forEach(x=>{const e=$('#'+pre+'-'+x.k);v[x.k]=x.o?e.value:num(e.value)});return v}

/* Gasometria: interpretador */
FN.gasocalc={g:'renal',t:'Interpretador de gasometria',code:'arterial',k:'gasometria interpretar acidose alcalose winter',render(m){
  const F=[{k:'ph',l:'pH',v:'7,25'},{k:'pco2',l:'pCO2 (mmHg)',v:'28'},{k:'hco3',l:'HCO3 (mEq/L)',v:'12'},{k:'na',l:'Na (mEq/L)',v:'138'},{k:'cl',l:'Cl (mEq/L)',v:'104'},{k:'alb',l:'Albumina (g/dL) — opcional',v:''},{k:'po2',l:'pO2 (mmHg) — opcional',v:''},{k:'fio2',l:'FiO2 (%) — opcional',v:'21'}];
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Interpretador de gasometria</h2><span class="code">passo a passo automático</span></div>
   <div class="card">${fieldsHTML(F,'gs')}<p class="ex">Exemplo: substitua pelos dados do paciente</p></div>${resultBox('gs-r')}${copyBtn()}
   <p class="note">Ferramenta de apoio: confira com a clínica. Distúrbios triplos podem não ser identificados.</p></section>`;
  let line='';const upd=()=>{const v=readF(F,'gs'),r=$('#gs-r');if(!(v.ph>6.5&&v.ph<8&&v.pco2>0&&v.hco3>0)){r.className='result';r.innerHTML='<div class="sub">Preencha pH, pCO2 e HCO3.</div>';line='';return}
   const L=[];let prim='',cls='warn';const ac=v.ph<7.35,al=v.ph>7.45;
   if(ac){const me=v.hco3<22,re=v.pco2>45;prim=me&&re?'misto_ac':me?'met_ac':re?'resp_ac':'ind'}
   else if(al){const me=v.hco3>26,re=v.pco2<35;prim=me&&re?'misto_al':me?'met_al':re?'resp_al':'ind'}
   else{prim=(v.pco2<35&&v.hco3<22)||(v.pco2>45&&v.hco3>26)?'misto_n':'normal'}
   const N={met_ac:'Acidose metabólica',resp_ac:'Acidose respiratória',misto_ac:'Acidose mista (metabólica + respiratória)',met_al:'Alcalose metabólica',resp_al:'Alcalose respiratória',misto_al:'Alcalose mista (metabólica + respiratória)',misto_n:'pH normal com pCO2 e HCO3 alterados: distúrbio misto compensando-se',normal:'Gasometria sem distúrbio ácido-base',ind:'Valores incoerentes: confira pH, pCO2 e HCO3'};
   if(prim==='normal')cls='ok';if(/misto|ac/.test(prim)&&v.ph<7.2)cls='bad';
   if(prim==='met_ac'){const e=1.5*v.hco3+8;L.push(`Compensação (Winter): pCO2 esperada <b>${fmt(e-2,0)}–${fmt(e+2,0)}</b> mmHg → ${v.pco2>e+2?'<b>acidose respiratória associada</b>':v.pco2<e-2?'<b>alcalose respiratória associada</b>':'compensação adequada'}.`)}
   if(prim==='met_al'){const e=0.7*v.hco3+21;L.push(`pCO2 esperada <b>${fmt(e-2,0)}–${fmt(e+2,0)}</b> mmHg → ${v.pco2>e+2?'acidose respiratória associada':v.pco2<e-2?'alcalose respiratória associada':'compensação adequada'}.`)}
   if(prim==='resp_ac'){const d=(v.pco2-40)/10;L.push(`HCO3 esperado: aguda <b>${fmt(24+d,0)}</b>, crônica <b>${fmt(24+3.5*d,0)}</b> mEq/L → ${v.hco3<24+d-2?'acidose metabólica associada':v.hco3>24+4*d+2?'alcalose metabólica associada':v.hco3<24+2*d?'padrão de distúrbio agudo':'padrão de distúrbio crônico'}.`)}
   if(prim==='resp_al'){const d=(40-v.pco2)/10;L.push(`HCO3 esperado: aguda <b>${fmt(24-2*d,0)}</b>, crônica <b>${fmt(24-4.5*d,0)}</b> mEq/L → ${v.hco3<24-5*d-2?'acidose metabólica associada':v.hco3>24-2*d+2?'alcalose metabólica associada':v.hco3>24-3*d?'padrão agudo':'padrão crônico'}.`)}
   if(v.na>0&&v.cl>0){const ag=v.na-(v.cl+v.hco3),agc=v.alb>0?ag+2.5*(4-v.alb):ag;L.push(`Ânion gap${v.alb>0?' corrigido':''}: <b>${fmt(agc,1)}</b> ${agc>12?'(aumentado)':'(normal)'}`);
    if(agc>12&&v.hco3<24){const dd=(agc-12)/(24-v.hco3);L.push(`Delta-delta: <b>${fmt(dd,2)}</b> → ${dd<1?'acidose de AG normal associada':dd<=2?'acidose de AG aumentado pura':'alcalose metabólica associada'}`)}
    else if(agc>12&&!/met_ac|misto_ac/.test(prim))L.push('AG aumentado mesmo sem acidemia: há acidose metabólica oculta.');
    if(/met_ac|misto_ac/.test(prim))L.push(agc>12?'Causas de AG alto: cetoacidose, lactato, IRA, metanol, etilenoglicol, salicilato.':'AG normal: diarreia, ATR, excesso de SF 0,9%.')}
   if(v.po2>0&&v.fio2>0){const fi=v.fio2/100,pf=v.po2/fi,aa=fi*713-v.pco2/0.8-v.po2;L.push(`P/F: <b>${fmt(pf,0)}</b> ${pf<100?'(grave)':pf<200?'(moderada)':pf<300?'(leve)':'(normal)'} · gradiente A-a: <b>${fmt(aa,0)}</b> mmHg`)}
   r.className='result '+cls;r.innerHTML=`<div class="big" style="font-size:1.15rem">${N[prim]}</div>${L.map(x=>`<div class="sub">${x}</div>`).join('')}`;
   line=`Gasometria: pH ${fmt(v.ph,2)}, pCO2 ${fmt(v.pco2,0)}, HCO3 ${fmt(v.hco3,1)}. ${N[prim]}. `+L.map(x=>strip(x)).join(' ')};
  m.querySelectorAll('input,select').forEach(e=>{e.oninput=upd;e.onchange=upd});upd();bindCopy(()=>line)}};

/* Drogas em infusão contínua */
const DRG=[
 {id:'nora',n:'Noradrenalina',dil:'4 ampolas (4 mg/4 mL cada = 16 mg) + SG 5% 234 mL = 250 mL',c:64,cu:'mcg',u:'mcg/kg/min',min:0.05,max:1,ini:0.1,note:'Vasopressor de 1ª escolha no choque. Pode iniciar em veia periférica calibrosa por curto período, vigiando extravasamento.'},
 {id:'adre',n:'Adrenalina',dil:'4 ampolas (1 mg/mL) + SG 5% 246 mL = 250 mL',c:16,cu:'mcg',u:'mcg/kg/min',min:0.05,max:1,ini:0.05,note:'Choque refratário, anafilaxia refratária, bradicardia (2–10 mcg/min).'},
 {id:'dobu',n:'Dobutamina',dil:'1 ampola (250 mg/20 mL) + SF 0,9% 230 mL = 250 mL',c:1000,cu:'mcg',u:'mcg/kg/min',min:2.5,max:20,ini:5,note:'Choque cardiogênico/baixo débito. Pode causar taquicardia, arritmia e hipotensão.'},
 {id:'vaso',n:'Vasopressina',dil:'1 ampola (20 UI/mL) + SF 0,9% 99 mL = 100 mL',c:0.2,cu:'UI',u:'UI/min',min:0.01,max:0.04,ini:0.03,fixed:1,note:'Dose fixa 0,03 UI/min (associada à noradrenalina).'},
 {id:'ntg',n:'Nitroglicerina',dil:'50 mg (10 mL) + SG 5% 240 mL = 250 mL',c:200,cu:'mcg',u:'mcg/min',min:5,max:200,ini:10,fixed:1,note:'SCA, EAP, crise hipertensiva. Frasco de vidro / equipo sem PVC.'},
 {id:'nipride',n:'Nitroprussiato de sódio',dil:'50 mg (2 mL) + SG 5% 248 mL = 250 mL (fotoproteger)',c:200,cu:'mcg',u:'mcg/kg/min',min:0.3,max:10,ini:0.3,note:'Emergência hipertensiva. Toxicidade por cianeto em uso prolongado ou doses altas.'},
 {id:'amio',n:'Amiodarona (manutenção)',dil:'900 mg (6 ampolas) + SG 5% 500 mL',c:1.8,cu:'mg',u:'mg/min',min:0.5,max:1,ini:1,fixed:1,note:'1 mg/min por 6 h, depois 0,5 mg/min por 18 h.'},
 {id:'mida',n:'Midazolam',dil:'150 mg (3 ampolas de 50 mg/10 mL) + SF 0,9% 120 mL = 150 mL',c:1,cu:'mg',u:'mg/kg/h',min:0.02,max:0.2,ini:0.05,note:'Sedação contínua. Acumula em DRC, idosos e obesos.'},
 {id:'fenta',n:'Fentanil',dil:'Puro: 50 mcg/mL (ampolas de 10 mL)',c:50,cu:'mcg',u:'mcg/kg/h',min:0.5,max:5,ini:1,note:'Analgesia contínua (analgossedação).'},
 {id:'propo',n:'Propofol 1%',dil:'Puro: 10 mg/mL',c:10,cu:'mg',u:'mg/kg/h',min:0.3,max:4,ini:1,note:'Hipotensão; síndrome de infusão do propofol em doses > 4 mg/kg/h por > 48 h. Trocar equipo a cada 12 h.'},
 {id:'ceta',n:'Cetamina',dil:'500 mg (10 mL) + SF 0,9% 90 mL = 100 mL',c:5,cu:'mg',u:'mg/kg/h',min:0.1,max:2,ini:0.3,note:'Analgesia (0,1–0,3 mg/kg/h) ou sedação (até 1–2 mg/kg/h). Mantém PA e broncodilata.'},
 {id:'dex',n:'Dexmedetomidina',dil:'2 ampolas (200 mcg/2 mL) + SF 0,9% 96 mL = 100 mL',c:4,cu:'mcg',u:'mcg/kg/h',min:0.2,max:1.4,ini:0.4,note:'Sedação leve, delirium agitado. Bradicardia e hipotensão.'},
 {id:'insu',n:'Insulina regular',dil:'100 UI + SF 0,9% 100 mL',c:1,cu:'UI',u:'UI/kg/h',min:0.02,max:0.14,ini:0.1,note:'CAD/EHH. HGT de 1/1 h.'},
 {id:'hep',n:'Heparina não fracionada',dil:'25.000 UI (5 mL) + SF 0,9% 245 mL = 250 mL',c:100,cu:'UI',u:'UI/kg/h',min:10,max:30,ini:18,note:'Ajustar pelo TTPa (1,5–2,5 × controle).'}];
FN.drogas={g:'cv',t:'Drogas vasoativas e sedação contínua',code:'diluição padrão e mL/h',k:'droga vasoativa noradrenalina adrenalina dobutamina vasopressina nitroglicerina nitroprussiato midazolam fentanil propofol cetamina dexmedetomidina insulina heparina bomba infusao ml/h',render(m){
  const st={kg:store.get('kitps:kg')||'70'};
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Drogas vasoativas e sedação contínua</h2><span class="code">diluição padrão → mL/h</span></div>
   <div class="card"><div class="grid2"><div class="field"><label for="dg-kg">Peso (kg)</label><input id="dg-kg" inputmode="decimal" value="${esc(st.kg)}"></div></div></div>
   <div id="dg-l"></div>
   <p class="note">Diluições comuns no Brasil; confira o padrão da sua instituição e a concentração da ampola disponível. Dose → mL/h = dose × peso (se por kg) × 60 (se por minuto) ÷ concentração.</p></section>`;
  const draw=()=>{const kg=num($('#dg-kg').value);store.set('kitps:kg',$('#dg-kg').value);
   $('#dg-l').innerHTML=DRG.map(d=>{const per=d.u.includes('/kg'),min=d.u.endsWith('/min');const ml=x=>x*(per?kg:1)*(min?60:1)/d.c;const dose=y=>y*d.c/((per?kg:1)*(min?60:1));
    const rows=[d.min,d.ini,d.max].filter((x,i,a)=>a.indexOf(x)===i).sort((a,b)=>a-b);
    return `<article class="card rxcard" id="dg-${d.id}"><h3>${esc(d.n)}</h3><p class="note" style="color:var(--fg)">${esc(d.dil)} → <b>${String(d.c).replace('.',',')} ${d.cu}/mL</b></p>
     ${per&&!(kg>0)?'<p class="note">Informe o peso.</p>':`<table class="scale"><tbody>${rows.map(x=>`<tr><td>${String(x).replace('.',',')} ${d.u}${x===d.ini?' (início)':x===d.min?' (mínima)':' (máxima usual)'}</td><td><b>${fmt(ml(x),1)} mL/h</b></td></tr>`).join('')}</tbody></table>
     <div class="grid2" style="margin-top:8px"><div class="field"><label for="dg-${d.id}-d">Dose (${d.u})</label><input id="dg-${d.id}-d" data-d="${d.id}" inputmode="decimal" placeholder="ex.: ${String(d.ini).replace('.',',')}"></div><div class="field"><label for="dg-${d.id}-m">ou vazão (mL/h)</label><input id="dg-${d.id}-m" data-m="${d.id}" inputmode="decimal"></div></div><div class="sub" id="dg-${d.id}-o"></div>`}
     <p class="note">${esc(d.note)}</p></article>`}).join('');
   m.querySelectorAll('[data-d]').forEach(i=>i.oninput=()=>{const d=DRG.find(x=>x.id===i.dataset.d),per=d.u.includes('/kg'),mi=d.u.endsWith('/min'),x=num(i.value),o=$('#dg-'+d.id+'-o');if(!(x>0)){o.textContent='';return}const v=x*(per?kg:1)*(mi?60:1)/d.c;$('#dg-'+d.id+'-m').value='';o.innerHTML=`→ <b>${fmt(v,1)} mL/h</b>${x>d.max?' · acima da dose máxima usual':''}`});
   m.querySelectorAll('[data-m]').forEach(i=>i.oninput=()=>{const d=DRG.find(x=>x.id===i.dataset.m),per=d.u.includes('/kg'),mi=d.u.endsWith('/min'),x=num(i.value),o=$('#dg-'+d.id+'-o');if(!(x>0)){o.textContent='';return}const v=x*d.c/((per?kg:1)*(mi?60:1));$('#dg-'+d.id+'-d').value='';o.innerHTML=`→ <b>${fmt(v,v<1?3:2)} ${d.u}</b>`});
  };$('#dg-kg').oninput=draw;draw()}};

/* Intubação em sequência rápida */
FN.iot={g:'resp',t:'Intubação em sequência rápida',code:'doses por peso',k:'iot intubacao sequencia rapida etomidato cetamina propofol succinilcolina rocuronio fentanil ventilacao mecanica peso predito',render(m){
  const F=[{k:'kg',l:'Peso real (kg)',v:store.get('kitps:kg')||'70'},{k:'alt',l:'Altura (cm)',v:'170'},{k:'sx',l:'Sexo',o:[['M','Masculino'],['F','Feminino']]}];
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Intubação em sequência rápida</h2><span class="code">doses por peso</span></div>
   <div class="card">${fieldsHTML(F,'io')}</div><div id="io-o"></div>
   <div class="card gd"><div class="lbl">Os 7 Ps</div><ul class="gl"><li><b>Preparação</b>: material (laringoscópio, tubos 7,0–8,0, bougie, aspirador, máscara laríngea), monitor, acesso venoso, drogas aspiradas, plano B e C</li><li><b>Pré-oxigenação</b>: O2 a 100% por 3–5 min (máscara com reservatório ou VNI); cateter nasal 15 L/min durante a laringoscopia (oxigenação apneica)</li><li><b>Pré-tratamento / otimização</b>: corrigir hipotensão antes (volume, noradrenalina); fentanil se HIC ou dissecção</li><li><b>Paralisia com indução</b>: indutor seguido imediatamente do bloqueador</li><li><b>Posicionamento</b>: rampa (orelha na altura do esterno); sem ventilar com bolsa, salvo SpO2 &lt; 93%</li><li><b>Passagem do tubo</b>: confirmar com capnografia (padrão-ouro) e ausculta</li><li><b>Pós-intubação</b>: fixar, RX de tórax, analgesia e sedação contínua, ventilação protetora</li></ul></div>
   <p class="note">Contraindicações da succinilcolina: hipercalemia ou risco (DRC com K alto, queimado/trauma/imobilização > 24–72 h, rabdomiólise), doença neuromuscular, história de hipertermia maligna. Nesses casos usar rocurônio.</p></section>`;
  const D=[['Fentanil (opcional, 3 min antes)',1,3,'mcg',50,'50 mcg/mL','HIC, dissecção de aorta, SCA. Evitar no choque.'],
   ['Etomidato',0.3,0.3,'mg',2,'2 mg/mL','Estabilidade hemodinâmica. Supressão adrenal transitória.'],
   ['Cetamina',1,2,'mg',50,'50 mg/mL','Choque (usar 0,5–1 mg/kg), asma. Broncodilatador, mantém PA.'],
   ['Propofol',1,2,'mg',10,'10 mg/mL','Hipotensão: evitar no instável; idoso 0,5–1 mg/kg.'],
   ['Midazolam (alternativa)',0.1,0.3,'mg',5,'5 mg/mL','Início lento, hipotensão; evitar como 1ª escolha.'],
   ['Succinilcolina',1.5,1.5,'mg',10,'100 mg diluída em 10 mL = 10 mg/mL','Início 45–60 s, duração 6–10 min.'],
   ['Rocurônio',1.2,1.2,'mg',10,'10 mg/mL','Início 60 s, duração 45–70 min. Reversão: sugamadex 16 mg/kg.']];
  const upd=()=>{const v=readF(F,'io');if(!(v.kg>0)){$('#io-o').innerHTML='';return}store.set('kitps:kg',String(v.kg).replace('.',','));
   const pp=v.alt>0?(v.sx==='F'?45.5:50)+0.91*(v.alt-152.4):null;
   $('#io-o').innerHTML=`<table class="scale pdt"><tbody>${D.map(d=>{const a=d[1]*v.kg,b=d[2]*v.kg;const mg=a===b?fmt(a,0):fmt(a,0)+'–'+fmt(b,0),ml=a===b?fmt(a/d[4],1):fmt(a/d[4],1)+'–'+fmt(b/d[4],1);return `<tr><td><b>${d[0]}</b><br><small>${String(d[1]).replace('.',',')}${d[1]!==d[2]?'–'+String(d[2]).replace('.',','):''} ${d[3]}/kg · ${d[5]}</small></td><td><b>${mg} ${d[3]}</b> = ${ml} mL<br><small>${d[6]}</small></td></tr>`}).join('')}</tbody></table>
    ${pp?`<div class="result"><div class="big">${fmt(pp*6,0)} <small>mL de volume corrente (6 mL/kg de peso predito)</small></div><div class="sub">Peso predito: <b>${fmt(pp,1)} kg</b>. Ajuste inicial: VC 6–8 mL/kg, FR 16–20 (asma/DPOC 10–12), PEEP 5, FiO2 100% e reduzir para SpO2 92–96%, pressão de platô &lt; 30 cmH2O. Gasometria em 30 min.</div></div>`:''}`};
  m.querySelectorAll('input,select').forEach(e=>{e.oninput=upd;e.onchange=upd});upd()}};

/* Doses pediátricas */
const PD=[
 ['Dipirona',15,25,'mg/kg/dose de 6/6 h',1000,[['500 mg/mL (gotas)',500],['50 mg/mL (solução)',50]],'Máx. 1 g/dose.'],
 ['Paracetamol',10,15,'mg/kg/dose de 6/6 h',750,[['200 mg/mL (gotas)',200],['32 mg/mL (suspensão)',32]],'Máx. 75 mg/kg/dia.'],
 ['Ibuprofeno',5,10,'mg/kg/dose de 6/6–8/8 h',400,[['50 mg/mL (gotas)',50],['100 mg/mL (gotas)',100]],'Acima de 6 meses. Evitar na dengue e desidratação.'],
 ['Amoxicilina',25,30,'mg/kg/dose de 8/8 h (75–90 mg/kg/dia na OMA/pneumonia)',1000,[['250 mg/5 mL',50],['400 mg/5 mL',80]],'Máx. 1 g/dose.'],
 ['Amoxicilina + clavulanato',22.5,45,'mg/kg/dose de 12/12 h (de amoxicilina)',875,[['400+57 mg/5 mL',80],['250+62,5 mg/5 mL (8/8 h)',50]],'Diarreia é comum.'],
 ['Azitromicina',10,10,'mg/kg/dose 1 vez ao dia por 3–5 dias',500,[['200 mg/5 mL',40]],'Máx. 500 mg/dia.'],
 ['Cefalexina',12.5,25,'mg/kg/dose de 6/6 h',1000,[['250 mg/5 mL',50]],'50–100 mg/kg/dia.'],
 ['Prednisolona',1,2,'mg/kg/dia 1 vez ao dia',40,[['3 mg/mL',3],['1 mg/mL',1]],'Asma: 3–5 dias.'],
 ['Dexametasona (laringite)',0.15,0.6,'mg/kg dose única (VO/IM/EV)',10,[['4 mg/mL (injetável)',4],['0,1 mg/mL (elixir)',0.1]],'Laringite viral: 0,15–0,6 mg/kg.'],
 ['Ondansetrona',0.15,0.15,'mg/kg/dose de 8/8 h',8,[['2 mg/mL (injetável)',2],['4 mg/5 mL (solução)',0.8]],'Acima de 6 meses.'],
 ['Diazepam (crise convulsiva)',0.3,0.5,'mg/kg (EV 0,2–0,3; retal 0,5)',10,[['5 mg/mL',5]],'Máx. 10 mg.'],
 ['Midazolam (crise, IM/intranasal)',0.2,0.2,'mg/kg',10,[['5 mg/mL',5]],'Máx. 10 mg.'],
 ['Adrenalina (anafilaxia IM)',0.01,0.01,'mg/kg IM',0.5,[['1 mg/mL',1]],'Máx. 0,3 mg (< 30 kg) / 0,5 mg.'],
 ['Salbutamol spray 100 mcg',0.5,0.5,'jato/kg (1 jato a cada 2 kg) a cada 20 min',10,[],'Mínimo 4, máximo 10 jatos, com espaçador.'],
 ['SF 0,9% (expansão)',20,20,'mL/kg em 10–20 min',1000,[],'Reavaliar após cada bolus.'],
 ['Glicose 10% (hipoglicemia)',2,5,'mL/kg EV',250,[],'Equivale a 0,2–0,5 g/kg.']];
FN.pedi={g:'crianca',t:'Doses pediátricas',code:'por peso',k:'pediatria crianca dose peso dipirona paracetamol ibuprofeno amoxicilina azitromicina prednisolona ondansetrona',render(m){
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Doses pediátricas</h2><span class="code">por peso</span></div>
   <div class="card"><div class="grid2"><div class="field"><label for="pd-kg">Peso (kg)</label><input id="pd-kg" inputmode="decimal" value="${esc(store.get('kitps:pkg')||'15')}"></div></div></div><div id="pd-o"></div>
   <p class="note">Confira sempre a concentração do produto disponível. O número de gotas por mL varia entre fabricantes: prefira prescrever em mL ou conferir a bula.</p></section>`;
  const upd=()=>{const kg=num($('#pd-kg').value);store.set('kitps:pkg',$('#pd-kg').value);if(!(kg>0)){$('#pd-o').innerHTML='';return}
   $('#pd-o').innerHTML=`<table class="scale pdt"><tbody>${PD.map(p=>{let a=p[1]*kg,b=p[2]*kg;const cap=x=>Math.min(x,p[4]);a=cap(a);b=cap(b);const u=/mL\/kg/.test(p[3])?'mL':/jato/.test(p[3])?'jatos':'mg';
    let ds=a===b?fmt(a,a<10?1:0):fmt(a,a<10?1:0)+'–'+fmt(b,b<10?1:0);if(u==='jatos'){const j=Math.max(4,Math.min(10,Math.round(a)));ds=String(j)}
    return `<tr><td><b>${p[0]}</b><br><small>${String(p[1]).replace('.',',')}${p[1]!==p[2]?'–'+String(p[2]).replace('.',','):''} ${p[3]}</small></td><td><b>${ds} ${u}</b>${p[5].map(c=>`<br><small>${c[0]}: ${a===b?fmt(a/c[1],1):fmt(a/c[1],1)+'–'+fmt(b/c[1],1)} mL</small>`).join('')}<br><small>${p[6]}</small></td></tr>`}).join('')}</tbody></table>`};
  $('#pd-kg').oninput=upd;upd()}};
