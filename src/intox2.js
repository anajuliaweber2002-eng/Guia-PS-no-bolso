/* Intoxicações específicas (out/2026): paracetamol, organofosforado/carbamato (chumbinho), benzodiazepínico, opioide,
   tricíclico, cocaína/estimulantes, lítio. Complementa cd_intox e rx_antid. */

Object.assign(RX,{
rx_intox2:{tipo:'h',g:'mental',t:'Intoxicações específicas',rec:RH,rel:[['cd_intox','Abordagem'],['rx_antid','Antídotos'],['nac','Acetilcisteína (calculadora)']],items:[
 {t:'Paracetamol: acetilcisteína EV (esquema de 21 h)',rx:`Acetilcisteína 100 mg/mL (ampola 3 mL = 300 mg) — peso máximo para cálculo: 100 kg
1ª bolsa: 150 mg/kg em 200 mL de SG 5% EV em 60 min
2ª bolsa: 50 mg/kg em 500 mL de SG 5% EV em 4 h
3ª bolsa: 100 mg/kg em 1.000 mL de SG 5% EV em 16 h
(ex.: 70 kg: 10,5 g = 105 mL; depois 3,5 g = 35 mL; depois 7 g = 70 mL)
Criança < 40 kg: reduzir o volume de diluente (3 mL/kg, 7 mL/kg e 14 mL/kg)

Exames: paracetamol sérico com ≥ 4 h da ingestão, TGO/TGP, INR, creatinina, glicemia, gasometria com lactato
Ao fim das 21 h: repetir TGO/TGP, INR e paracetamol; manter 100 mg/kg/16 h se TGO/TGP subindo, INR > 2 ou paracetamol detectável`,n:'Iniciar sem esperar o nível se: dose ≥ 150 mg/kg (ou ≥ 7,5–10 g), hora desconhecida, apresentação > 8 h, ou TGO/TGP alteradas. Reação anafilactoide (rubor, broncoespasmo): parar, anti-histamínico, reiniciar mais devagar. VO (se EV indisponível): 140 mg/kg, depois 70 mg/kg de 4/4 h por 17 doses.'},
 {t:'Organofosforado / carbamato (chumbinho)',rx:`1. Equipe com luvas e avental; retirar roupas e lavar a pele com água e sabão
2. O2; aspirar secreções; IOT se insuficiência respiratória (evitar succinilcolina: usar rocurônio)
3. Atropina 0,5 mg/mL — 1–3 mg EV (2–6 mL) em bolus
   Dobrar a dose a cada 5 min até ATROPINIZAÇÃO: pulmões limpos (sem broncorreia), FC > 80, PAS > 80, pupilas não puntiformes, pele seca
   Manutenção: 10–20% da dose total de ataque por hora em BIC; reduzir se delirium, febre, íleo (excesso)
   Criança: 0,02–0,05 mg/kg, dobrando
4. Organofosforado (não no carbamato isolado): Pralidoxima 30 mg/kg EV em 30 min, depois 8 mg/kg/h (onde disponível)
5. Convulsão ou agitação: Diazepam 10 mg EV (criança 0,3 mg/kg)
6. Carvão ativado 1 g/kg VO/SNG se ingestão < 1 h e via aérea protegida
7. Dosar colinesterase plasmática/eritrocitária; monitorar QTc; observar 24–48 h (síndrome intermediária)`,n:'Taquicardia NÃO contraindica atropina: o alvo é secar o pulmão. "Chumbinho" vendido ilegalmente costuma ser aldicarbe (carbamato).'},
 {t:'Tricíclico (amitriptilina, nortriptilina, imipramina)',rx:`1. Monitorização; ECG seriado; acesso venoso
2. QRS > 100 ms, arritmia ventricular ou hipotensão:
   Bicarbonato de sódio 8,4% (1 mEq/mL) — 1–2 mEq/kg EV em bolus (70 kg: 100 mL), repetir a cada 3–5 min até QRS < 100 ms
   Depois: 150 mEq (150 mL de NaHCO3 8,4%) + 850 mL de SG 5% EV a 150–250 mL/h; meta pH 7,45–7,55
3. Hipotensão: SF 0,9% 20 mL/kg; Noradrenalina se refratária
4. Convulsão: Diazepam 10 mg EV ou Midazolam 5–10 mg; NÃO usar fenitoína
5. Carvão ativado 1 g/kg (máx. 50 g) se < 2 h e via aérea protegida
6. IOT se rebaixamento (hiperventilar: evitar acidose)
7. Arritmia refratária: Lidocaína 1–1,5 mg/kg EV; emulsão lipídica 20% 1,5 mL/kg em PCR/instabilidade refratária`,n:'Evitar: flumazenil, fisostigmina, amiodarona, antiarrítmicos classe IA/IC, betabloqueador. Observar no mínimo 6 h com ECG normal antes de liberar.'},
 {t:'Cocaína / estimulantes',rx:`1. Ambiente calmo; monitorização; ECG; temperatura
2. Agitação, taquicardia, HAS, dor torácica: Diazepam 10 mg EV a cada 5–10 min (ou Midazolam 5 mg EV/IM) até controle
3. HAS persistente após benzodiazepínico: Nitroglicerina EV ou Nitroprussiato; Fentolamina se disponível
   Evitar betabloqueador puro na fase aguda
4. Dor torácica: AAS 300 mg mastigado + Nitrato SL + benzodiazepínico; ECG e troponina seriados; cateterismo se IAM com supra
5. Hipertermia: resfriamento externo agressivo; sedação; IOT + paralisia se > 41 °C
6. QRS > 120 ms: Bicarbonato de sódio 8,4% 1–2 mEq/kg EV
7. CPK, eletrólitos, creatinina (rabdomiólise); hidratação`,n:'Body packer assintomático: irrigação intestinal total e cirurgia se sintomas/obstrução. Investigar coingestão (álcool → cocaetileno).'},
 {t:'Lítio',rx:`1. Suspender o lítio; litemia, creatinina, Na, TSH, ECG; repetir litemia de 4/4 a 6/6 h (pode subir por absorção tardia)
2. SF 0,9% 1–2 mL/kg/h (≈ 150–200 mL/h no adulto) para diurese 1–3 mL/kg/h, se sem congestão
3. Comprimidos de liberação prolongada (ingestão aguda): irrigação intestinal total com polietilenoglicol 1–2 L/h via SNG até efluente claro
   Carvão ativado NÃO adsorve lítio
4. Hemodiálise (nefrologia) se:
   - Litemia > 4,0 mEq/L com função renal alterada
   - Rebaixamento, convulsão ou arritmia grave (qualquer nível)
   - Litemia > 5,0 mEq/L, confusão, ou tempo previsto para < 1,0 mEq/L > 36 h
5. Suspender diurético tiazídico, IECA/BRA, AINE`,n:'Intoxicação crônica é mais grave com níveis mais baixos (lítio já no tecido nervoso). Sintomas: tremor grosseiro, ataxia, disartria, confusão, mioclonias, vômitos, diarreia; diabetes insípido nefrogênico.'}]}
});

Object.assign(CD,{
cd_paracet:{g:'mental',t:'Intoxicação por paracetamol',src:'Rumack-Matthew · Consenso EUA/Canadá 2023 · CIATox',k:'paracetamol acetaminofeno tylenol intoxicacao nomograma rumack acetilcisteina nac hepatotoxicidade',rel:[['rx_intox2','Prescrição (NAC)'],['nac','Acetilcisteína (calculadora)'],['cd_intox','Abordagem']],sec:[
 {h:'Dose tóxica',li:['≥ 150 mg/kg ou ≥ 7,5–10 g em adulto (ingestão aguda única)','Risco maior: etilismo crônico, desnutrição, jejum, uso de indutores enzimáticos (carbamazepina, fenitoína, rifampicina, isoniazida)','Fases: 0–24 h assintomático ou náuseas; 24–72 h elevação de TGO/TGP; 72–96 h pico: insuficiência hepática, LRA, encefalopatia']},
 {h:'Nomograma (ingestão aguda única, hora conhecida)',li:['Dosar paracetamol a partir de 4 h da ingestão','Linha de tratamento: 150 mcg/mL em 4 h, caindo pela metade a cada 4 h (75 em 8 h, 37,5 em 12 h, ≈ 19 em 16 h, ≈ 9 em 20 h)','Acima ou sobre a linha → acetilcisteína','Não se aplica a: ingestão repetida/escalonada, hora desconhecida, liberação prolongada, > 24 h → tratar se nível detectável ou TGO/TGP alterada']},
 {h:'Tratamento',li:['Carvão ativado 1 g/kg (máx. 50 g) se < 1–2 h da ingestão','Acetilcisteína (NAC): idealmente em até 8 h (proteção quase total); iniciar mesmo tardiamente','Critérios de transplante (King\'s College): pH < 7,3 após ressuscitação; ou INR > 6,5 + creatinina > 3,4 + encefalopatia grau 3–4','Avaliação psiquiátrica e notificação']}]},

cd_organo:{g:'mental',t:'Organofosforados e carbamatos (chumbinho)',src:'OMS · CIATox · Eddleston Lancet 2008',k:'organofosforado carbamato chumbinho aldicarbe agrotoxico inseticida colinergica atropina pralidoxima miose broncorreia',rel:[['rx_intox2','Prescrição'],['cd_intox','Abordagem']],sec:[
 {h:'Síndrome colinérgica',rows:[['Muscarínica','Miose, sialorreia, lacrimejamento, broncorreia, broncoespasmo, bradicardia, vômitos, diarreia, incontinência urinária, sudorese'],['Nicotínica','Fasciculações, fraqueza, paralisia (inclusive respiratória), taquicardia, HAS, midríase'],['SNC','Agitação, confusão, convulsão, coma']]},
 {h:'Conduta',li:['Descontaminação com proteção da equipe','Atropina em doses crescentes até atropinização (o alvo é secar a broncorreia)','Pralidoxima no organofosforado (se disponível e precoce)','Benzodiazepínico para convulsão','IOT com rocurônio (succinilcolina prolonga o bloqueio)','Síndrome intermediária (24–96 h): fraqueza proximal, de pescoço e respiratória → observar'],},
 {h:'Lembretes',li:['Carbamato (aldicarbe/"chumbinho"): quadro mais curto, oxima em geral não necessária','Notificação compulsória (intoxicação exógena); avaliar tentativa de suicídio','Colinesterase baixa confirma, mas não deve atrasar o tratamento']}]},

cd_tricic:{g:'mental',t:'Antidepressivo tricíclico',src:'CIATox · Goldfrank · AHA 2023 (toxicologia)',k:'triciclico amitriptilina nortriptilina imipramina clomipramina qrs largo bicarbonato intoxicacao antidepressivo',rel:[['rx_intox2','Prescrição'],['cd_intox','Abordagem'],['ecg_ps','ECG']],sec:[
 {h:'Quadro',li:['Anticolinérgico (taquicardia, midríase, pele seca, retenção urinária, íleo, delirium)','Cardiotóxico: QRS > 100 ms (risco de convulsão), > 160 ms (risco de arritmia ventricular); R terminal em aVR > 3 mm; hipotensão','Convulsões, rebaixamento rápido','Dose > 10 mg/kg potencialmente grave']},
 {h:'Conduta',li:['ECG precoce e seriado','Bicarbonato de sódio se QRS > 100 ms, arritmia ou hipotensão; meta pH 7,45–7,55','Benzodiazepínico para convulsão','Hipotensão: volume e noradrenalina','IOT e hiperventilação se rebaixamento','Carvão ativado se via aérea protegida','Evitar flumazenil, fisostigmina, fenitoína, antiarrítmicos IA/IC, amiodarona']}]},

cd_cocaina:{g:'mental',t:'Cocaína e estimulantes',src:'AHA 2008/2023 · Goldfrank',k:'cocaina crack anfetamina ecstasy mdma estimulante simpaticomimetica dor toracica hipertermia agitacao benzodiazepinico',rel:[['rx_intox2','Prescrição'],['cd_agit','Agitação'],['cd_sca','SCA']],sec:[
 {h:'Quadro',li:['Síndrome simpaticomimética: agitação, taquicardia, HAS, midríase, sudorese, hipertermia','Dor torácica (vasoespasmo/IAM), dissecção de aorta, AVC (isquêmico ou hemorrágico), convulsão','Rabdomiólise, LRA, arritmias, QRS largo','MDMA: hiponatremia, síndrome serotoninérgica']},
 {h:'Conduta',li:['Benzodiazepínico é a base do tratamento (agitação, HAS, taquicardia, dor torácica)','Resfriamento agressivo se hipertermia','HAS refratária: nitroglicerina, nitroprussiato, fentolamina; evitar betabloqueador puro na fase aguda','Dor torácica: AAS, nitrato, benzodiazepínico, ECG/troponina seriados','QRS largo: bicarbonato','Pesquisar trauma, AVC, dissecção']}]},

cd_sedat:{g:'mental',t:'Benzodiazepínicos e opioides',src:'CIATox · AHA 2023 (emergências por opioides)',k:'benzodiazepinico clonazepam diazepam opioide morfina tramadol fentanil heroina naloxona flumazenil overdose depressao respiratoria miose',rel:[['rx_antid','Antídotos'],['cd_intox','Abordagem']],sec:[
 {h:'Benzodiazepínico',li:['Sonolência, ataxia, fala arrastada; depressão respiratória grave é rara isoladamente (pior com álcool, opioide, idoso)','Tratamento: suporte (via aérea, ventilação); observação','Flumazenil 0,2 mg EV, repetir 0,2 mg/min até 1 mg: SÓ em intoxicação pura em quem não usa benzodiazepínico cronicamente (ex.: criança, sedação em procedimento)','Contraindicado se uso crônico, epilepsia, coingestão de tricíclico ou pró-convulsivante (precipita convulsão refratária)']},
 {h:'Opioide',li:['Tríade: rebaixamento, bradipneia (FR < 12) e miose','Ventilar com bolsa-válvula-máscara primeiro; depois naloxona','Naloxona 0,4 mg EV (0,04–0,1 mg em dependentes, para evitar abstinência grave) ou 2 mg intranasal/IM; repetir a cada 2–3 min (máx. 10 mg)','Meta: FR ≥ 12 e via aérea protegida, não acordar totalmente','Duração da naloxona 30–90 min: observar 4–6 h (12–24 h com metadona ou liberação prolongada); infusão de 2/3 da dose eficaz por hora se recorrência','Tramadol: pode convulsionar (benzodiazepínico) e causar síndrome serotoninérgica']}]},

cd_litio:{g:'mental',t:'Intoxicação por lítio',src:'EXTRIP 2015 · CIATox',k:'litio carbonato de litio litemia intoxicacao hemodialise tremor ataxia diabetes insipido',rel:[['rx_intox2','Prescrição'],['cd_ira','LRA']],sec:[
 {h:'Tipos',rows:[['Aguda','Sem uso prévio: predomínio GI (vômitos, diarreia); neurotoxicidade tardia; tolera níveis maiores'],['Crônica','Uso regular com desidratação, LRA, IECA/BRA, tiazídico, AINE: neurotoxicidade com níveis pouco elevados (1,5–2,5)'],['Agudo sobre crônico','Mais grave']]},
 {h:'Quadro',li:['Tremor grosseiro, ataxia, disartria, confusão, mioclonias, hiperreflexia, convulsão, coma','Bradicardia, QT longo, alteração de onda T','Poliúria (diabetes insípido nefrogênico), hipotireoidismo, hipercalcemia']},
 {h:'Conduta',li:['Suspender; SF 0,9% para restaurar a volemia e a TFG','Carvão não adsorve; irrigação intestinal total se liberação prolongada','Hemodiálise conforme EXTRIP (nível, função renal, neurotoxicidade)','Litemia seriada (rebote após diálise)','SILENT: sequela neurológica persistente (cerebelar) possível']}]}
});

/* Calculadora de acetilcisteína */
NC.nac={g:'mental',t:'Acetilcisteína (intoxicação por paracetamol)',code:'esquema EV de 21 h + nomograma',f:[{k:'kg',l:'Peso (kg)',v:'70'},{k:'mg',l:'Dose ingerida (mg, opcional)',v:''},{k:'lv',l:'Paracetamol sérico (mcg/mL, opcional)',v:''},{k:'h',l:'Horas desde a ingestão (para o nível)',v:''}],
 calc:v=>{if(!(v.kg>0))return null;const kg=Math.min(v.kg,100),b1=150*kg,b2=50*kg,b3=100*kg,ml=x=>fmt(x/100,1);
  const sub=[`1ª bolsa: <b>${fmt(b1,0)} mg = ${ml(b1)} mL</b> em 200 mL de SG 5% em 60 min (${fmt(200/1,0)} mL/h)`,`2ª bolsa: <b>${fmt(b2,0)} mg = ${ml(b2)} mL</b> em 500 mL de SG 5% em 4 h (${fmt(500/4,0)} mL/h)`,`3ª bolsa: <b>${fmt(b3,0)} mg = ${ml(b3)} mL</b> em 1.000 mL de SG 5% em 16 h (${fmt(1000/16,1)} mL/h)`];
  if(v.kg<40)sub.push('Criança < 40 kg: diluir em 3 mL/kg, 7 mL/kg e 14 mL/kg de SG 5%, respectivamente.');
  if(v.kg>100)sub.push('Peso limitado a 100 kg para o cálculo.');
  let cls='',big=fmt(b1+b2+b3,0)+' <small>mg de NAC em 21 h</small>';
  if(v.mg>0){const d=v.mg/v.kg;sub.unshift(`Dose ingerida: <b>${fmt(d,0)} mg/kg</b> — ${d>=150?'potencialmente tóxica (≥ 150 mg/kg): tratar':'abaixo de 150 mg/kg'}.`);if(d>=150)cls='bad'}
  if(v.lv>0&&v.h>=4&&v.h<=24){const lim=150*Math.pow(2,-(v.h-4)/4),ac=v.lv>=lim;sub.unshift(`Nomograma: linha de tratamento em ${fmt(v.h,1)} h = <b>${fmt(lim,1)} mcg/mL</b>. Nível ${fmt(v.lv,1)} → <b>${ac?'ACIMA: iniciar/manter NAC':'abaixo da linha'}</b>.`);cls=ac?'bad':cls||'ok'}
  else if(v.lv>0)sub.unshift('Nomograma só vale entre 4 e 24 h de ingestão aguda única com hora conhecida.');
  return {cls,big,sub,line:`NAC EV ${fmt(kg,0)} kg: ${fmt(b1,0)} mg em 1 h, ${fmt(b2,0)} mg em 4 h, ${fmt(b3,0)} mg em 16 h.`}}};
