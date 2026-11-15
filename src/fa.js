/* Fibrilação atrial no PS: fluxograma, doses, tabelas de CHA2DS2-VASc / CHA2DS2-VA / HAS-BLED.
   Substitui CD.cd_fa e os escores cha2ds2 e hasbled de calculadoras.js; acrescenta SC.cha2ds2va.
   Fontes: ESC 2024 (AF-CARE), Diretrizes Brasileiras de FA (SBC 2016, atualização 2025 em andamento), AHA/ACC/HRS 2023. */

const FAFLOW=(()=>{
  const n=(c,h)=>`<div class="${c}">${h}</div>`,ar='<div class="fxa" aria-hidden="true"></div>';
  const br=(a,b)=>`<div class="fxb">${a}${b}</div>`,
    side=(cls,lab,h)=>`<div class="fxs ${cls}"><b class="fxl">${lab}</b>${h}</div>`;
  return `<div class="fx" role="list" aria-label="Fluxograma de fibrilação atrial no PS">
${n('fxn','<span class="fxk">1</span><b>FA ou flutter no ECG</b>: RR irregularmente irregular, sem onda P (flutter: ondas F em serra, FC fixa perto de 150). Monitor, acesso venoso, ECG de 12 derivações, PA, SpO2, glicemia.')}
${ar}${n('fxq','<span class="fxk">2</span>Instabilidade <u>causada pela FA</u>? Hipotensão ou choque, EAP / IC aguda, dor isquêmica, rebaixamento.')}
${br(side('bad','Sim','<b>Cardioversão elétrica sincronizada</b> 120–200 J bifásico (flutter 50–100 J), com sedação. Heparina antes, sem atrasar o choque.'),side('ok','Não','Seguir para o passo 3.'))}
<p class="fxt">FC &lt; 150 raramente explica instabilidade: procure outra causa (sepse, hipovolemia, sangramento, TEP).</p>
${n('fxq','<span class="fxk">3</span>Pré-excitação? QRS largo, irregular e muito rápido (FC &gt; 200–250), WPW conhecido.')}
${br(side('bad','Sim','<b>Não usar</b> betabloqueador, diltiazem/verapamil, digoxina, adenosina nem amiodarona EV. CVE sincronizada (procainamida EV se disponível).'),side('ok','Não','Seguir para o passo 4.'))}
${ar}${n('fxn','<span class="fxk">4</span><b>Tratar o gatilho</b>: sepse, febre, dor, hipovolemia, hipóxia, TEP, tireotoxicose, álcool, pós-operatório, K e Mg baixos. Taquicardia compensatória não se trata baixando a FC.')}
${ar}${n('fxq','<span class="fxk">5</span>Ritmo ou frequência? FA com início claro <b>&lt; 24 h</b> (SBC aceita &lt; 48 h no baixo risco), ou anticoagulado ≥ 3 semanas, ou ETE sem trombo?')}
${br(side('ok','Sim','<b>Controle de ritmo</b> é opção: CVE eletiva ou química (amiodarona; propafenona se coração estruturalmente normal). Ou controlar FC e esperar reversão espontânea em até 48 h. Anticoagular antes.'),side('warn','Não ou não sabe','<b>Controle de frequência</b>. Anticoagular ≥ 3 semanas antes de cardioverter, ou ETE sem trombo. Ritmo precoce depois, com o cardiologista.'))}
${ar}${n('fxq','<span class="fxk">6</span>Controle de frequência: meta inicial &lt; 110 bpm em repouso. Qual a FEVE?')}
${br(side('ok','FEVE &gt; 40%','Metoprolol EV ou diltiazem EV (verapamil é alternativa). Depois VO.'),side('warn','FEVE ≤ 40% ou IC','Betabloqueador com cautela, deslanosídeo/digoxina ou amiodarona. <b>Evitar</b> diltiazem e verapamil.'))}
${ar}${n('fxq','<span class="fxk">7</span>Anticoagulação: é FA valvar (prótese mecânica ou estenose mitral moderada a grave)?')}
${br(side('warn','Sim','<b>Varfarina</b> (INR 2–3; prótese mitral 2,5–3,5). DOAC não.'),side('ok','Não','<b>CHA2DS2-VA</b> ≥ 2: anticoagular (DOAC preferido). 1: considerar. 0: não. HAS-BLED ≥ 3 não contraindica: corrige fatores.'))}
<p class="fxt">Cardioversão (elétrica ou química): anticoagular por ≥ 4 semanas depois, qualquer que seja o escore (opcional só se FA &lt; 24 h e CHA2DS2-VA 0). Depois segue o escore.</p>
${n('fxn','<span class="fxk">8</span><b>Destino</b>')}
${br(side('ok','Alta','FC controlada, sintomas resolvidos, gatilho tratável em casa, anticoagulação iniciada, ECO e cardiologia agendados.'),side('bad','Internar','Instabilidade, IC, isquemia, gatilho grave, FC sem controle, pré-excitação, antiarrítmico que exige monitor.'))}
</div>`})();

CD.cd_fa={g:'cv',t:'Fibrilação atrial no PS (fluxograma)',src:'ESC 2024 · SBC (Diretriz de FA) · AHA/ACC/HRS 2023',
 k:'fa fibrilacao atrial flutter fluxograma algoritmo resposta ventricular alta cardioversao anticoagulacao controle de frequencia ritmo cha2ds2 vasc va has bled doac apixabana rivaroxabana dabigatrana edoxabana varfarina',
 rel:[['rx_fa','Prescrição FA'],['cha2ds2va','CHA2DS2-VA'],['cha2ds2','CHA2DS2-VASc'],['hasbled','HAS-BLED'],['cardiov','Cardioversão elétrica'],['ecg_taqui','ECG: taquiarritmias'],['acls','PCR e arritmias']],
 sec:[
 {h:'Fluxograma',svg:FAFLOW},
 {h:'Avaliação inicial',li:['ECG de 12 derivações: confirma FA/flutter, procura isquemia, pré-excitação, QT, sobrecarga','Hora de início dos sintomas (decide cardioversão); episódios prévios; anticoagulante em uso e adesão (últimas 3 semanas)','Exames: hemograma, eletrólitos com Mg, função renal (dose do DOAC), TSH, coagulograma se anticoagulado; troponina e BNP só se a clínica pedir','POCUS/ECO: FEVE (escolhe a droga), valvopatia, derrame pericárdico, volemia','Anotar CHA2DS2-VA e HAS-BLED no prontuário']},
 {h:'Doses: controle de frequência',rows:[
  ['Metoprolol','5 mg EV em 2–5 min; repetir a cada 5 min (máx. 15 mg). VO: tartarato 25–100 mg de 12/12 h'],
  ['Diltiazem','0,25 mg/kg EV em 2 min (70 kg ≈ 17,5 mg); se preciso, 0,35 mg/kg após 15 min. Infusão 5–15 mg/h. VO 30–60 mg de 6/6 a 8/8 h. Não usar se FEVE ≤ 40%, hipotensão ou pré-excitação'],
  ['Verapamil','2,5–5 mg EV em 2 min; repetir 5–10 mg a cada 15–30 min (máx. 20 mg). Mesmas restrições do diltiazem'],
  ['Deslanosídeo (digitálico EV)','0,4 mg EV lento; pode repetir 0,2–0,4 mg em 2–4 h (máx. ~1,2 mg/24 h). Início lento (horas): bom na IC e na hipotensão; associar a betabloqueador. Depois digoxina 0,125–0,25 mg/dia VO; reduzir se idoso ou DRC'],
  ['Amiodarona','150 mg EV em 10–20 min, depois 1 mg/min por 6 h e 0,5 mg/min por 18 h. Para IC/hipotensão. Pode reverter para sinusal: anticoagular como se fosse cardioversão'],
  ['Sulfato de magnésio','2 g EV em 15–20 min como adjuvante, sobretudo se Mg baixo']]},
 {h:'Doses: controle de ritmo',rows:[
  ['CVE eletiva','Sincronizada, 120–200 J bifásico (flutter 50–100 J), pás anteroposteriores; sedação (etomidato, propofol ou midazolam + fentanil). Se falhar, aumentar a carga e trocar posição das pás'],
  ['Amiodarona','5–7 mg/kg EV em 1–2 h (300 mg em SG 5%), depois 50 mg/h. Reversão em horas. Escolha se cardiopatia estrutural, IC ou DAC'],
  ['Propafenona','450 mg (&lt; 70 kg) ou 600 mg VO, dose única ("pílula no bolso"). Só sem cardiopatia estrutural, isquemia ou IC. Dar betabloqueador ou BCC antes (risco de flutter 1:1)'],
  ['Quando cardioverter','FA &lt; 24 h (SBC: &lt; 48 h no baixo risco), anticoagulado ≥ 3 semanas ou ETE sem trombo. Iniciar heparina ou DOAC antes do procedimento']]},
 {h:'Anticoagulação: quem',rows:[
  ['FA valvar','Prótese mecânica ou estenose mitral moderada a grave: varfarina. DOAC contraindicado'],
  ['ESC 2024 (CHA2DS2-VA)','≥ 2: anticoagular (classe I) · 1: considerar (IIa) · 0: não anticoagular'],
  ['CHA2DS2-VASc (SBC / ESC 2020)','Homem ≥ 2 ou mulher ≥ 3: anticoagular · homem 1 ou mulher 2: considerar · homem 0 ou mulher 1: não'],
  ['Flutter atrial','Mesmos critérios da FA'],
  ['Após cardioversão','≥ 4 semanas para todos; depois conforme o escore'],
  ['Sangramento','HAS-BLED ≥ 3 não contraindica: corrigir PA, suspender AINE/antiagregante sem indicação, álcool, INR lábil, rever em 1 mês'],
  ['Antiagregante','AAS ou clopidogrel não substituem o anticoagulante na prevenção de AVC']]},
 {h:'Tabela CHA2DS2-VASc',intro:'Some os pontos. O CHA2DS2-VA (ESC 2024) é a mesma tabela sem o item sexo feminino (máximo 8).',rows:[
  ['C · IC / disfunção de VE','1'],['H · Hipertensão','1'],['A2 · Idade ≥ 75 anos','2'],['D · Diabetes','1'],['S2 · AVC, AIT ou tromboembolismo prévio','2'],['V · Doença vascular (IAM prévio, DAP, placa aórtica)','1'],['A · Idade 65–74 anos','1'],['Sc · Sexo feminino','1'],['Máximo','9 pontos']]},
 {h:'Risco anual de AVC sem anticoagulação (CHA2DS2-VASc)',intro:'Taxa ajustada de AVC por ano (Lip 2010, usada nas diretrizes). Serve para conversar com o paciente; a decisão segue os cortes acima.',rows:[
  ['0','0%'],['1','1,3%'],['2','2,2%'],['3','3,2%'],['4','4,0%'],['5','6,7%'],['6','9,8%'],['7','9,6%'],['8','6,7%'],['9','15,2%']]},
 {h:'Tabela HAS-BLED',intro:'Risco de sangramento maior em 1 ano com anticoagulante. Use para achar e corrigir fatores modificáveis, não para negar anticoagulação.',rows:[
  ['H · Hipertensão não controlada (PAS &gt; 160)','1'],['A · Função renal alterada (diálise, transplante, Cr ≥ 2,3)','1'],['A · Função hepática alterada (cirrose, ou bilirrubina &gt; 2× e TGO/TGP &gt; 3×)','1'],['S · AVC prévio','1'],['B · Sangramento prévio ou predisposição (anemia, plaquetopenia)','1'],['L · INR lábil (tempo na faixa &lt; 60%)','1'],['E · Idade &gt; 65 anos','1'],['D · Drogas: antiagregante ou AINE','1'],['D · Álcool ≥ 8 doses/semana','1'],['Máximo','9 pontos']]},
 {h:'Sangramento maior por ano (HAS-BLED)',intro:'Pisters 2010, por 100 pacientes-ano.',rows:[
  ['0','1,1'],['1','1,0'],['2','1,9'],['3','3,7: alto risco'],['4','8,7'],['5','12,5'],['≥ 6','Poucos dados; risco muito alto']]},
 {h:'Anticoagulantes: doses na FA',rows:[
  ['Apixabana','5 mg de 12/12 h. 2,5 mg de 12/12 h se ≥ 2 de: idade ≥ 80, peso ≤ 60 kg, Cr ≥ 1,5. Evitar se ClCr &lt; 15'],
  ['Rivaroxabana','20 mg 1×/dia com a refeição. 15 mg se ClCr 15–49. Evitar se ClCr &lt; 15'],
  ['Dabigatrana','150 mg de 12/12 h. 110 mg se ≥ 80 anos, uso de verapamil ou alto risco de sangramento. Contraindicada se ClCr &lt; 30'],
  ['Edoxabana','60 mg 1×/dia. 30 mg se ClCr 15–50, peso ≤ 60 kg ou inibidor potente de P-gp'],
  ['Varfarina','Valvar, ClCr &lt; 15 ou sem acesso a DOAC. Iniciar 5 mg/dia com enoxaparina até INR 2–3 por 2 dias seguidos'],
  ['Enoxaparina (no PS)','1 mg/kg SC de 12/12 h (ClCr &lt; 30: 1 mg/kg 1×/dia) até iniciar o anticoagulante oral, ou como ponte para varfarina']]},
 {h:'Armadilhas',li:['FA com FC &lt; 110, assintomática e estável não precisa de droga EV: anticoagular, iniciar VO e encaminhar','Flutter: controle de FC difícil; cardioversão com carga baixa costuma resolver','Não associar betabloqueador EV e diltiazem/verapamil EV em sequência rápida (bradicardia e hipotensão)','Idoso com FA nova: procurar infecção, hipertireoidismo, TEP, IAM e distúrbio eletrolítico antes de culpar só a arritmia','Calcular o ClCr (Cockcroft-Gault) antes de escolher a dose do DOAC']}]};

/* Escores */
const FA_AVC=['0%','1,3%','2,2%','3,2%','4,0%','6,7%','9,8%','9,6%','6,7%','15,2%'];
const FA_HB=['1,1','1,0','1,9','3,7','8,7','12,5'];
const FA_CK=[['Insuficiência cardíaca / disfunção de VE',1],['Hipertensão',1],['Idade ≥ 75 anos',2],['Diabetes',1],['AVC, AIT ou tromboembolismo prévio',2],['Doença vascular (IAM prévio, DAP, placa aórtica)',1],['Idade 65–74 anos',1]];

SC.cha2ds2={g:'cv',t:'CHA2DS2-VASc',code:'FA não valvar · Lip 2010',kind:'ck',ck:[...FA_CK,['Sexo feminino',1]],
 lv:t=>{const r=`Risco anual de AVC sem anticoagulação ≈ ${FA_AVC[t]}.`;
  return t===0?['ok','Baixo','Homem 0: não anticoagular. '+r]
   :t===1?['ok','Baixo','Homem 1: considerar anticoagulação. Mulher 1 (só o sexo): não anticoagular. '+r]
   :t===2?['warn','Intermediário','Homem 2: anticoagular. Mulher 2: considerar. '+r]
   :['bad','Alto','Anticoagulação oral indicada (DOAC preferido). '+r]},
 tbl:{h:'Risco anual de AVC por pontuação',rows:FA_AVC.map((x,i)=>[String(i),x,i,i])},
 rel:[['cd_fa','Fluxograma FA'],['cha2ds2va','CHA2DS2-VA'],['hasbled','HAS-BLED']],
 note:'Anticoagular: homem ≥ 2 ou mulher ≥ 3 (considerar: homem 1, mulher 2). A ESC 2024 recomenda o CHA2DS2-VA, sem o sexo. Não vale para prótese mecânica ou estenose mitral moderada a grave (varfarina).'};

SC.cha2ds2va={g:'cv',t:'CHA2DS2-VA',code:'ESC 2024 · FA não valvar',kind:'ck',ck:FA_CK,
 lv:t=>t===0?['ok','Baixo (0)','Não anticoagular. Reavaliar o escore a cada consulta.']
  :t===1?['warn','Intermediário (1)','Considerar anticoagulação (ESC 2024 IIa), decidindo com o paciente.']
  :['bad','Alto (≥ 2)','Anticoagulação oral indicada (ESC 2024 classe I); DOAC preferido.'],
 rel:[['cd_fa','Fluxograma FA'],['cha2ds2','CHA2DS2-VASc'],['hasbled','HAS-BLED']],
 note:'Igual ao CHA2DS2-VASc sem o item sexo feminino. Não vale para prótese mecânica ou estenose mitral moderada a grave (varfarina). Após cardioversão, anticoagular por ≥ 4 semanas qualquer que seja o escore.'};

SC.hasbled={g:'cv',t:'HAS-BLED',code:'risco de sangramento · Pisters 2010',kind:'ck',ck:[['Hipertensão não controlada (PAS > 160)',1],['Função renal alterada (diálise, transplante, Cr ≥ 2,3)',1],['Função hepática alterada (cirrose, ou bilirrubina > 2× e TGO/TGP > 3×)',1],['AVC prévio',1],['Sangramento prévio ou predisposição (anemia, plaquetopenia)',1],['INR lábil (tempo na faixa < 60%)',1],['Idade > 65 anos',1],['Drogas: antiagregante ou AINE',1],['Álcool (≥ 8 doses/semana)',1]],
 lv:t=>{const r=t<FA_HB.length?` Sangramento maior ≈ ${FA_HB[t]} por 100 pacientes-ano.`:' Risco muito alto (poucos dados).';
  return t>=3?['warn','Alto risco de sangramento (≥ 3)','Não contraindica anticoagular: corrigir fatores modificáveis (PA, AINE/antiagregante, álcool, INR) e rever em 1 mês.'+r]:['ok','Risco baixo a moderado (0–2)',r.trim()]},
 tbl:{h:'Sangramento maior por pontuação (por 100 pacientes-ano)',rows:[...FA_HB.map((x,i)=>[String(i),x,i,i]),['≥ 6','Poucos dados',6,99]]},
 rel:[['cd_fa','Fluxograma FA'],['cha2ds2va','CHA2DS2-VA'],['cha2ds2','CHA2DS2-VASc']],
 note:'Serve para achar e corrigir o que aumenta o sangramento, não para deixar de anticoagular. Modificáveis: PA, INR lábil, AINE/antiagregante, álcool.'};
