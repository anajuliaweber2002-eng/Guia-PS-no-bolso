/* Clínica e cardio (out/2026): IRA, rabdomiólise, doença falciforme, insuficiência adrenal, coma mixedematoso, hipercalcemia,
   cirrose descompensada/encefalopatia hepática, delirium, abstinência alcoólica/Wernicke, sedação paliativa, bradiarritmias, pericardite/tamponamento. */

/* ---------- Anamneses ---------- */
Object.assign(AN,{
an_ira:{g:'renal',t:'Lesão renal aguda',code:'N17',rel:[['cd_ira','Conduta LRA'],['rx_ira','Prescrição'],['ex_ira','Função renal']],body:an('Está urinando pouco',
`Paciente [encaminhado / trazido] por [redução do volume urinário há __ dias / creatinina elevada em exame (__ mg/dL; basal __ mg/dL em __) / edema / dispneia / náuseas e vômitos / confusão].
Diurese: [ ] mL/dia ou [ ] vezes ao dia; urina [escura / espumosa / com sangue]. Sede, tontura ao levantar: [ ].
Perdas: [vômitos, diarreia, febre, baixa ingesta, sangramento]. Infecção recente: [ ].
Medicações e exposições: [AINE, IECA/BRA, diurético, metformina, aminoglicosídeo, vancomicina, contraste iodado há __ dias, outros nefrotóxicos].
Obstrução: [jato fraco, gotejamento, dor suprapúbica, cólica renal, HPB, neoplasia pélvica].
Trauma muscular, exercício extenuante, imobilização prolongada, convulsão, uso de drogas: [ ] (rabdomiólise). Sintomas urêmicos (prurido, soluço, sonolência, dor torácica): [ ].`,
`ESTADO GERAL: [hidratado / desidratado __+/4+], [eupneico / dispneico]. Peso: [ ] kg.
${EF_CV} Turgência jugular [ ]. Atrito pericárdico [ ].
AR: [MV+ bilateralmente, sem RA / crepitações em bases].
ABD: [ ]. Globo vesical: [ausente / presente]. Punho-percussão lombar [ ].
MMII: edema [ ]/4+. Massas musculares: [dor, edema].
NEURO: [ ]. Asterixis: [ ].`,
`1. Lesão renal aguda KDIGO [1/2/3], provavelmente [pré-renal / renal (NTA, nefrite intersticial, glomerular) / pós-renal]
2. [Rabdomiólise / hipercalemia / acidose metabólica / hipervolemia]`,
`- [Sondagem vesical de alívio para afastar obstrução / USG de rins e vias urinárias]
- [Expansão volêmica com __ / furosemida __]
- Suspender nefrotóxicos [ ]; ajustar doses ao clearance
- [Ureia, creatinina, Na, K, gasometria, EAS, Na e creatinina urinários (FeNa), CPK, hemograma]
- Balanço hídrico e diurese horária; peso diário
- [Avaliação da nefrologia: indicação de diálise __]`)},

an_falc:{g:'geral',t:'Doença falciforme em crise',code:'D57.0',rel:[['cd_falc','Conduta falciforme'],['rx_falc','Prescrição']],body:an('Crise de dor',
`Paciente com doença falciforme [HbSS / HbSC / Sβ-talassemia], com dor em [membros / coluna / tórax / abdome] há [ ] h, intensidade [ ]/10, [semelhante / diferente] das crises habituais. Analgesia em casa: [ ] às [ ] h, sem melhora.
Fatores desencadeantes: [frio, desidratação, infecção, esforço, estresse].
Febre: [ ]. Tosse, dispneia, dor torácica: [ ] (síndrome torácica aguda). Palidez, cansaço, aumento do baço: [ ] (sequestro / crise aplásica).
Sinais neurológicos (fraqueza, fala, convulsão, cefaleia intensa): [ ]. Priapismo: [ ] (há __ h).
Hb basal: [ ] g/dL. Uso de hidroxiureia: [ ]. Transfusões prévias e aloimunização: [ ]. Última internação: [ ]. Vacinas e penicilina profilática (criança): [ ].`,
`${EF_CV}
${EF_AR} SpO2 [ ]% em ar ambiente.
ABD: [ ]. Baço: [não palpável / palpável a __ cm do RCE]. Fígado [ ].
Mucosas [coradas / hipocoradas __+/4+], [anictéricas / ictéricas __+/4+].
MMII: [úlceras maleolares: ]. Articulações: [ ].
${EF_NEU}`,
`1. Doença falciforme em crise [vaso-oclusiva / síndrome torácica aguda / sequestro esplênico / crise aplásica / AVC]
2. [Febre em paciente com asplenia funcional]`,
`- Analgesia em até 30–60 min da chegada (morfina) e reavaliação a cada 30 min
- [Hidratação: __]
- [O2 se SpO2 < 95%]
- [Hemograma com reticulócitos, LDH, bilirrubinas, hemocultura, RX de tórax, tipagem]
- [Ceftriaxona __ se febre]
- [Espirometria de incentivo]`)},

an_hepat:{g:'dig',t:'Cirrose descompensada',code:'K72.9 · K74.6 · K65.2',rel:[['cd_hepat','Conduta cirrose descompensada'],['rx_hepat','Prescrição']],body:an('Está confuso / barriga inchada',
`Paciente com cirrose hepática por [álcool / hepatite B / C / esteatose / __], Child-Pugh [ ], com [confusão mental / sonolência / inversão do sono / aumento do volume abdominal / icterícia / febre / dor abdominal / redução da diurese / sangramento] há [ ] dias.
Precipitantes: [infecção, sangramento digestivo (melena, hematêmese), constipação (última evacuação __), uso de diurético, desidratação, benzodiazepínico/opioide, abuso de álcool recente, não adesão à lactulose].
Medicações: [propranolol, espironolactona, furosemida, lactulose, rifaximina, norfloxacino].
Último consumo de álcool: [ ]. Paracenteses prévias: [ ]. Episódios prévios de encefalopatia, PBE, HDA varicosa: [ ].`,
`ESTADO GERAL: [ ], [ictérico __+/4+], [hidratado / desidratado].
Estigmas: [aranhas vasculares, eritema palmar, ginecomastia, circulação colateral].
${EF_CV}
${EF_AR}
ABD: [globoso, ascite (piparote __ / macicez móvel)], [doloroso / indolor], [sem sinais de irritação peritoneal]. Hérnia umbilical [ ].
NEURO: Glasgow [ ]; orientação [ ]; asterixis [presente / ausente]. Encefalopatia West Haven grau [ ].
Toque retal: [fezes __, sem melena].`,
`1. Cirrose hepática [etiologia] descompensada por [encefalopatia hepática grau __ / ascite / PBE / síndrome hepatorrenal / HDA]
2. Fator precipitante: [ ]`,
`- [Lactulose __]
- [Paracentese diagnóstica (celularidade, albumina, cultura em frasco de hemocultura) / de alívio com albumina]
- [Ceftriaxona 2 g/dia se PBE ou HDA]
- Suspender diurético [se LRA, hiponatremia grave ou encefalopatia]; evitar benzodiazepínico
- [Hemograma, TAP/INR, albumina, bilirrubinas, Na, K, ureia, creatinina, glicemia, EAS, urocultura, hemocultura, RX de tórax]`)},

an_delir:{g:'neuro',t:'Delirium / confusão aguda',code:'F05',rel:[['cd_delir','Conduta delirium'],['rx_delir','Prescrição'],['qat4','4AT']],body:an('Está confuso',
`Paciente [idoso], trazido por [familiar __] por [confusão mental / agitação / sonolência / fala desconexa / alucinações] de início [agudo, há __ h/dias], com [flutuação ao longo do dia / piora à noite].
Estado cognitivo basal: [independente / demência __ (CDR/estágio)]; funcionalidade habitual: [ ].
Possíveis causas: febre, tosse, disúria, dor, constipação (última evacuação __), retenção urinária, queda/trauma, pouca ingesta, perda de peso.
Medicações novas ou alteradas: [benzodiazepínico, anticolinérgico, opioide, antidepressivo, antiparkinsoniano, corticoide, anti-histamínico]. Álcool e abstinência: [ ].
Óculos/aparelho auditivo: [ ]. Mudança de ambiente/internação recente: [ ].`,
`${EF_CV}
${EF_AR}
${EF_ABD} Globo vesical: [ ].
Toque retal: [fecaloma ausente].
NEURO: Glasgow [ ]; nível de consciência [alerta / sonolento / hiperalerta]; atenção (meses de trás para frente) [ ]; orientação [ ]; sinais focais [ausentes]; rigidez de nuca [ ].
Pele: [desidratação, lesões por pressão].
4AT: [ ] pontos.`,
`1. Delirium [hiperativo / hipoativo / misto]
2. Provável causa: [ITU / pneumonia / medicamento __ / retenção urinária / constipação / distúrbio hidroeletrolítico / dor]`,
`- Tratar a causa; revisar e suspender medicações deletérias
- Medidas não farmacológicas: acompanhante, orientação, óculos e aparelho auditivo, luz de dia, sono à noite, evitar contenção e sondas desnecessárias
- [Haloperidol 0,5–1 mg só se agitação com risco]
- [Hemograma, eletrólitos (Na, Ca), glicemia, ureia, creatinina, EAS, urocultura, RX de tórax, ECG, gasometria; TC de crânio se trauma, anticoagulação ou sinal focal]`)},

an_etil:{g:'mental',t:'Abstinência alcoólica',code:'F10.3 · F10.4 · E51.2',rel:[['cd_etil','Conduta abstinência'],['rx_etil','Prescrição'],['ciwa','CIWA-Ar']],body:an('Parou de beber',
`Paciente etilista há [ ] anos, consumo de [__ doses/dia de cachaça/cerveja/__], última dose há [ ] h.
Sintomas: [tremor, sudorese, ansiedade, insônia, náuseas/vômitos, palpitação, alucinações visuais/táteis/auditivas, confusão, desorientação, convulsão (há __ h, número __)].
Abstinências prévias: [ ]; delirium tremens prévio: [ ]; convulsões prévias: [ ].
Uso de outras substâncias: [benzodiazepínico, cocaína/crack, tabaco]. Trauma/queda recente: [ ].
Sintomas de Wernicke: [confusão, ataxia, diplopia/alteração da movimentação ocular]. Alimentação: [ ].
Comorbidades: [cirrose, pancreatite, HDA, epilepsia].`,
`ESTADO GERAL: [ ], [hidratado / desidratado], [sudoreico], tremor [ausente / leve / grosseiro].
${EF_CV}
${EF_AR}
ABD: [ ]. Estigmas de hepatopatia [ ].
NEURO: Glasgow [ ]; orientação [ ]; alucinações [ ]; nistagmo/oftalmoparesia [ ]; marcha/ataxia [ ]; sinais focais [ ]. Sinais de trauma craniano [ ].
CIWA-Ar: [ ] pontos.`,
`1. Síndrome de abstinência alcoólica [leve / moderada / grave / delirium tremens / com convulsão]
2. [Encefalopatia de Wernicke: suspeita]
3. [Distúrbio hidroeletrolítico / hepatopatia]`,
`- Tiamina antes de qualquer glicose
- [Diazepam conforme CIWA-Ar]
- Hidratação; reposição de Mg, K, P; glicemia capilar
- [Hemograma, eletrólitos com Mg e P, glicemia, função hepática, TAP, lipase, ureia, creatinina, CPK; TC de crânio se trauma, convulsão nova/focal ou rebaixamento]`)},

an_bradi:{g:'cv',t:'Bradicardia sintomática',code:'R00.1 · I44.2',rel:[['cd_bradi','Conduta bradiarritmias'],['rx_bradi','Prescrição'],['ecg_bradi','ECG: bradiarritmias']],body:an('Coração lento / desmaio',
`Paciente com [tontura / pré-síncope / síncope / dispneia / dor torácica / fadiga / confusão] há [ ] h/dias. FC aferida em casa: [ ].
Medicações: [betabloqueador, verapamil/diltiazem, digoxina, amiodarona, ivabradina, clonidina, donepezila] (dose, mudança recente).
Sintomas de IAM: [ ]. Hipotireoidismo: [ ]. Doença renal (hipercalemia): [ ]. Intoxicação: [ ]. Doença de Chagas: [ ]. Apneia do sono, atleta: [ ].
Marca-passo/CDI prévio: [ ].`,
`${EF_CV} FC [ ] bpm, [regular / irregular]. Sinais de baixo débito: [hipotensão, alteração mental, extremidades frias, TEC > 3 s].
${EF_AR}
${EF_ABD}
${EF_NEU}
ECG: [bradicardia sinusal / BAV 1º grau / BAV 2º grau Mobitz I / Mobitz II / BAV 2:1 / BAVT com escape de QRS __ / FA de baixa resposta / ritmo juncional], FC [ ], QRS [ ] ms.`,
`1. Bradicardia [ ] [com / sem] instabilidade
2. Causa: [medicamentosa __ / hipercalemia / IAM inferior / degenerativa / Chagas / hipotireoidismo]`,
`- Monitorização, O2 se SpO2 < 94%, acesso venoso, pás de marca-passo posicionadas
- [Atropina 1 mg EV / marca-passo transcutâneo / dopamina ou adrenalina em BIC]
- [K, Mg, Ca, ureia, creatinina, troponina, TSH, nível de digoxina]
- [Avaliação da cardiologia para marca-passo transvenoso/definitivo]`)},

an_peric:{g:'cv',t:'Pericardite / derrame pericárdico',code:'I30 · I31.4',rel:[['cd_peric','Conduta pericardite'],['rx_peric','Prescrição']],body:an('Dor no peito',
`Paciente com dor torácica há [ ] dias, [ventilatório-dependente / em pontada], que [melhora ao inclinar o tronco para frente e piora deitado], irradiada para [trapézio / ombro]. Febre: [ ]. Quadro viral prévio (há __ semanas): [ ].
Dispneia, ortopneia, tontura, síncope: [ ] (tamponamento). Palpitação: [ ].
Causas: [IAM recente / cirurgia cardíaca / doença renal (uremia) / neoplasia / tuberculose / doença autoimune / trauma / uso de anticoagulante]. Episódios prévios: [ ].`,
`${EF_CV} Atrito pericárdico: [ ]. Bulhas: [normo/hipofonéticas]. Turgência jugular: [ ]. Pulso paradoxal (queda da PAS > 10 mmHg na inspiração): [ ].
${EF_AR}
${EF_ABD}
${EF_MMII}
ECG: [supra de ST difuso côncavo + infra de PR / baixa voltagem / alternância elétrica].
POCUS: [derrame pericárdico __ / colapso diastólico do VD / VCI pletórica].`,
`1. Pericardite aguda [viral/idiopática / __] [com / sem] derrame pericárdico
2. [Tamponamento cardíaco]`,
`- [Ibuprofeno + colchicina]
- [Hemograma, PCR, troponina, ureia, creatinina, RX de tórax, ecocardiograma]
- [Internação se alto risco: febre > 38 °C, derrame volumoso, tamponamento, troponina elevada, anticoagulado, imunossuprimido, trauma, sem melhora com AINE em 1 semana]
- [Pericardiocentese de urgência se tamponamento]`)}
});

/* ---------- Prescrições ---------- */
Object.assign(RX,{
rx_ira:{tipo:'h',g:'renal',t:'Lesão renal aguda e rabdomiólise',rec:RH,rel:[['cd_ira','Conduta LRA']],items:[
 {t:'LRA pré-renal (hipovolemia)',rx:`1. Dieta conforme aceitação; [restringir K se hipercalemia]
2. SF 0,9% ou Ringer lactato 500 mL EV em 30 min; reavaliar (PA, FC, diurese, congestão pulmonar) e repetir se necessário
3. Manutenção: Ringer lactato [__] mL/h conforme diurese e volemia
4. Suspender: AINE, IECA/BRA, diuréticos, metformina, outros nefrotóxicos
5. Ajustar doses de antibióticos e outros medicamentos ao clearance
6. Balanço hídrico rigoroso; diurese de 2/2 h; peso diário
7. Ureia, creatinina, Na, K e gasometria diários`,n:'Evitar contraste iodado se possível. Sonda vesical só se obstrução ou necessidade de diurese horária.'},
 {t:'LRA com hipervolemia (congesto)',rx:`1. Restrição hídrica [1.000 mL/dia] e de sal
2. Furosemida 20 mg/2 mL — 1 mg/kg EV (1,5 mg/kg se já usava diurético); avaliar diurese em 2 h
   Diurese < 200 mL em 2 h após a dose: baixa resposta → discutir diálise
3. Manter furosemida 40–80 mg EV de 8/8 a 12/12 h conforme resposta
4. Balanço hídrico rigoroso; peso diário`,n:'Indicações de diálise (AEIOU): acidose grave refratária, eletrólitos (K ≥ 6,5 refratário), intoxicação dialisável, overload (congestão refratária), uremia (encefalopatia, pericardite, sangramento).'},
 {t:'Rabdomiólise',rx:`1. SF 0,9% 1.000 mL EV na 1ª hora (sem sinais de congestão)
2. Depois SF 0,9% ou Ringer lactato 200–300 mL/h, meta de diurese 200–300 mL/h (≈ 3 mL/kg/h) até CPK < 5.000 U/L e urina clara
3. Sonda vesical de demora; diurese horária
4. CPK, K, Ca, P, ureia, creatinina de 12/12 h; ECG se K alterado
5. Suspender estatinas e outros miotóxicos
6. Analgesia sem AINE: Dipirona 1 g EV de 6/6 h`,n:'Bicarbonato e manitol sem benefício comprovado de rotina. Hipocalcemia assintomática não deve ser corrigida (rebote de hipercalcemia na recuperação). Avaliar síndrome compartimental.'}]},

rx_falc:{tipo:'h',g:'geral',t:'Doença falciforme',rec:RH,rel:[['cd_falc','Conduta falciforme']],items:[
 {t:'Crise vaso-oclusiva (adulto)',rx:`1. Dieta livre; estimular ingesta hídrica
2. Morfina 10 mg/mL — 1 mL + 9 mL de AD (1 mg/mL): 0,1 mg/kg EV (máx. 10 mg) em até 30–60 min da chegada
   Reavaliar em 15–30 min; repetir 0,05 mg/kg (máx. 5 mg) a cada 20–30 min até controle da dor
   Depois: morfina fixa de 4/4 h ou analgesia controlada pelo paciente
3. Dipirona 1 g EV de 6/6 h (associada)
4. Ondansetrona 4 mg EV de 8/8 h se náuseas
5. SF 0,9% 500 mL EV em 1 h se desidratado; depois hidratação total (VO + EV) ≈ 1,5 × a manutenção (evitar hiperidratação)
6. O2 se SpO2 < 95% (ou 3% abaixo do basal)
7. Espirometria de incentivo 10 vezes a cada 2 h acordado
8. Enoxaparina 40 mg SC 1x/dia (internados adultos)
9. Hemograma com reticulócitos, LDH, bilirrubinas, ureia, creatinina, RX de tórax se sintomas respiratórios`,n:'Não usar meperidina. Criança: morfina 0,1 mg/kg EV (máx. 5–10 mg) e dipirona 15–25 mg/kg. Não transfundir crise vaso-oclusiva não complicada.'},
 {t:'Febre em doente falciforme',rx:`1. Hemograma, reticulócitos, hemocultura, EAS, urocultura, RX de tórax
2. Ceftriaxona 1 g — 2 g EV 1x/dia (criança 75 mg/kg, máx. 2 g) logo após a hemocultura
3. Se síndrome torácica aguda: + Azitromicina 500 mg VO/EV 1x/dia (criança 10 mg/kg)
4. Se sinais de sepse ou meningite: Vancomicina 15 mg/kg EV de 12/12 h (criança 15 mg/kg 6/6 h)
5. Dipirona 1 g EV de 6/6 h se febre`,n:'Asplenia funcional: risco de sepse fulminante por pneumococo. Febre ≥ 38,5 °C = antibiótico em até 1 h.'},
 {t:'Síndrome torácica aguda',rx:`1. O2 para SpO2 ≥ 95%; VNI se desconforto
2. Ceftriaxona 2 g EV 1x/dia + Azitromicina 500 mg VO/EV 1x/dia
3. Analgesia como na crise vaso-oclusiva (dor torácica limita a ventilação)
4. Espirometria de incentivo de 2/2 h
5. Transfusão simples de concentrado de hemácias se Hb < 9 g/dL (meta Hb ≈ 10 g/dL, não passar de 11)
6. Hipoxemia progressiva, Hb já ≥ 9 ou piora rápida: exsanguineotransfusão (hematologia); UTI
7. Broncodilatador se sibilância`,n:'Diagnóstico: infiltrado novo no RX + febre e/ou sintomas respiratórios ou dor torácica.'}]},

rx_adren:{tipo:'h',g:'endo',t:'Insuficiência adrenal e coma mixedematoso',rec:RH,rel:[['cd_adren','Conduta insuficiência adrenal'],['cd_mixed','Conduta coma mixedematoso']],items:[
 {t:'Crise adrenal',rx:`1. Colher cortisol e ACTH antes (sem atrasar o tratamento)
2. Hidrocortisona 100 mg — 100 mg EV em bolus
   Depois 50 mg EV de 6/6 h (ou 200 mg/24 h em infusão contínua)
   Criança: 50–100 mg/m² EV (≈ 2 mg/kg, máx. 100 mg), depois 50–100 mg/m²/dia de 6/6 h
3. SF 0,9% 1.000 mL EV na 1ª hora; depois conforme volemia (≈ 3–4 L nas primeiras 24 h, cuidado em cardiopatas)
4. Se hipoglicemia: Glicose 50% 40 mL EV (criança SG 10% 2–5 mL/kg) e SG 5% na manutenção
5. Tratar o fator desencadeante (infecção, cirurgia, suspensão abrupta do corticoide)
6. Glicemia capilar de 2/2 h; Na e K de 6/6 h`,n:'Sem hidrocortisona: dexametasona 4 mg EV (não trata a deficiência mineralocorticoide) ou metilprednisolona 40 mg. Reduzir para dose de manutenção em 1–3 dias se estável.'},
 {t:'Coma mixedematoso',rx:`1. UTI; suporte ventilatório (hipercapnia é comum)
2. Hidrocortisona 100 mg EV de 8/8 h ANTES/junto do hormônio tireoidiano (até afastar insuficiência adrenal)
3. Levotiroxina: ataque 200–400 mcg EV (ou 300–500 mcg VO/SNG se não houver EV)
   Depois 1,6 mcg/kg/dia (EV: 75% da dose oral)
   Idoso, coronariopata, baixo peso: ataque menor (100–200 mcg)
4. Aquecimento passivo (cobertores); evitar aquecimento ativo (vasodilatação e choque)
5. Hiponatremia: restrição hídrica; SF 3% se Na < 120 com sintomas
6. Glicemia capilar de 2/2 h; SG 5% se hipoglicemia
7. Tratar desencadeante (infecção, frio, sedativos, suspensão da levotiroxina)`,n:'Colher TSH, T4L e cortisol antes. Liotiroxina (T3) EV pode ser associada onde disponível.'}]},

rx_hcal:{tipo:'h',g:'endo',t:'Hipercalcemia',rec:RH,rel:[['cd_hcal','Conduta hipercalcemia'],['cacorr','Cálcio corrigido']],items:[
 {t:'Hipercalcemia moderada ou grave (Ca corrigido ≥ 12–14 mg/dL ou sintomas)',rx:`1. SF 0,9% 1.000–2.000 mL EV nas primeiras 2 h; depois 200–300 mL/h para diurese de 100–150 mL/h
   (reduzir em cardiopatas e renais)
2. Ácido zoledrônico 4 mg em 100 mL de SF 0,9% EV em ≥ 15 min, dose única
   (ClCr < 30: evitar ou usar denosumabe 120 mg SC)
   ou Pamidronato 60–90 mg EV em 2–4 h
3. Calcitonina de salmão 4 UI/kg SC ou IM de 12/12 h por 48 h (efeito em horas, ponte até o bisfosfonato)
4. Furosemida 20–40 mg EV só se hipervolemia após hidratação
5. Suspender: tiazídico, lítio, cálcio, vitamina D
6. Ca iônico/total, albumina, P, Mg, ureia, creatinina de 12/12 h; ECG (QT curto)`,n:'Linfoma, granulomatose ou intoxicação por vitamina D: prednisona 40–60 mg/dia. Ca > 18 mg/dL com sintomas neurológicos ou insuficiência renal: hemodiálise.'}]},

rx_hepat:{tipo:'h',g:'dig',t:'Cirrose descompensada',rec:RH,rel:[['cd_hepat','Conduta cirrose']],items:[
 {t:'Encefalopatia hepática',rx:`1. Dieta oral normoproteica (1,2–1,5 g/kg/dia) se consciente; SNE se rebaixado e sem proteção de via aérea (IOT se grau 3–4)
2. Lactulose 667 mg/mL — 30 mL VO/SNE de 1/1 h a 2/2 h até a primeira evacuação
   Depois 20–30 mL de 8/8 a 12/12 h, meta 2–3 evacuações pastosas/dia
   Sem VO: enema com 300 mL de lactulose + 700 mL de água, retido por 30–60 min, de 6/6 a 8/8 h
3. Rifaximina 550 mg VO de 12/12 h (recorrência ou associada à lactulose)
4. Corrigir hipocalemia e desidratação; suspender diuréticos se distúrbio eletrolítico ou LRA
5. Evitar benzodiazepínicos e opioides
6. Pesquisar e tratar o precipitante (infecção, HDA, constipação, eletrólitos)`,n:'Se agitação perigosa: haloperidol 0,5–1 mg é preferível a benzodiazepínico.'},
 {t:'Peritonite bacteriana espontânea (PMN ≥ 250/mm³)',rx:`1. Ceftriaxona 1 g — 2 g EV 1x/dia por 5–7 dias
   (infecção hospitalar ou uso recente de antibiótico: piperacilina-tazobactam 4,5 g EV 6/6 h ou meropeném)
2. Albumina 20% — 1,5 g/kg EV no D1 (em até 6 h) e 1 g/kg no D3 (máx. 100 g/dose)
   (ex.: 70 kg: 105 g → 100 g = 10 frascos de 50 mL no D1)
3. Suspender diuréticos e betabloqueador se hipotensão ou LRA
4. Após: profilaxia secundária com norfloxacino 400 mg VO 1x/dia`,n:'Paracentese diagnóstica em todo cirrótico com ascite que interna: celularidade, albumina (GASA), proteína total, cultura em frasco de hemocultura à beira do leito.'},
 {t:'Paracentese de alívio e síndrome hepatorrenal',rx:`Paracentese de alívio:
1. Retirar até a drenagem cessar; se > 5 L, Albumina 20% 6–8 g por litro retirado EV
   (ex.: 8 L → 48–64 g = 5 a 6 frascos de 50 mL)

Síndrome hepatorrenal (LRA sem resposta a volume):
1. Suspender diuréticos, AINE, betabloqueador
2. Albumina 20% 1 g/kg/dia EV (máx. 100 g) por 2 dias
3. Sem melhora: Terlipressina 1 mg EV de 4/4 a 6/6 h (ou 2 mg/24 h em infusão), aumentar até 2 mg 4/4 h se Cr não cair 25% em 3 dias
   + Albumina 20–40 g/dia EV
   (sem terlipressina: noradrenalina 0,5–3 mg/h em UTI)`,n:'Terlipressina: risco de isquemia e sobrecarga pulmonar; evitar se SpO2 < 90%, coronariopatia ou doença vascular grave.'}]},

rx_delir:{tipo:'h',g:'neuro',t:'Delirium',rec:RH,rel:[['cd_delir','Conduta delirium'],['qat4','4AT']],items:[
 {t:'Delirium no idoso',rx:`1. Acompanhante 24 h; luz natural de dia e escuro à noite; óculos e aparelho auditivo
2. Reorientação frequente (relógio, calendário); evitar contenção física, sondas e acessos desnecessários
3. Mobilização precoce; hidratação e dieta com auxílio
4. Suspender: benzodiazepínicos (exceto abstinência), anticolinérgicos (prometazina, hidroxizina, amitriptilina, escopolamina), dimenidrinato
5. Analgesia regular (dor é causa comum): Paracetamol 750 mg VO de 6/6 h
6. Se agitação com risco para si ou para outros:
   Haloperidol 5 mg/mL — 0,5–1 mg (0,1–0,2 mL) IM ou EV, ou 0,5–1 mg VO; repetir em 30–60 min se necessário (máx. ≈ 3–5 mg/dia no idoso)
   ou Quetiapina 25 mg — 12,5–25 mg VO à noite ou de 12/12 h
7. ECG (QTc) antes/depois do antipsicótico`,n:'Parkinson ou demência por corpos de Lewy: evitar haloperidol; quetiapina em dose baixa. Delirium hipoativo: não sedar, só tratar a causa.'}]},

rx_etil:{tipo:'h',g:'mental',t:'Abstinência alcoólica e Wernicke',rec:RH,rel:[['cd_etil','Conduta abstinência'],['ciwa','CIWA-Ar']],items:[
 {t:'Abstinência alcoólica',rx:`1. Tiamina 100 mg/mL — 100–300 mg EV/IM antes de qualquer glicose; manter 100–300 mg/dia
2. Diazepam 10 mg — 10–20 mg VO (ou EV lento) a cada 1 h se CIWA-Ar ≥ 10 (dose guiada por sintomas)
   Reavaliar CIWA-Ar de 1/1 h enquanto ≥ 10; depois de 4/4 h
   Hepatopatia grave ou idoso: Lorazepam 1–2 mg VO a cada 1–2 h
3. SF 0,9% ou Ringer lactato conforme hidratação; SG 5% só depois da tiamina
4. Sulfato de magnésio 10% — 2 g (20 mL) EV em 1 h se Mg baixo
5. Repor K e P conforme exames
6. Ácido fólico 5 mg VO 1x/dia; Complexo B
7. Glicemia capilar de 6/6 h`,n:'Não usar haloperidol isolado (baixa o limiar convulsivo). Convulsão por abstinência: diazepam 10 mg EV; fenitoína não previne.'},
 {t:'Delirium tremens',rx:`1. UTI/sala de emergência; monitorização; leito com grades
2. Diazepam 10 mg EV a cada 5–10 min (até 20 mg por dose) até sedação leve (paciente calmo, desperto ao chamado)
   Midazolam 5 mg EV se diazepam indisponível
3. Refratário (> 200 mg de diazepam em poucas horas): Fenobarbital 10 mg/kg EV em 30 min, ou propofol/dexmedetomidina com IOT
4. Tiamina 500 mg EV de 8/8 h
5. Hidratação vigorosa (perdas por febre, sudorese); eletrólitos; glicemia`,n:'Mortalidade sem tratamento de até 5–15%. Procurar infecção, TCE, pancreatite, HDA.'},
 {t:'Encefalopatia de Wernicke (suspeita)',rx:`1. Tiamina 500 mg em 100 mL de SF 0,9% EV em 30 min de 8/8 h por 3 dias
2. Depois 250 mg EV/IM 1x/dia por mais 3–5 dias, e manter VO 100 mg/dia
3. Sulfato de magnésio se Mg baixo (a tiamina não age sem Mg)`,n:'Tríade clássica (confusão, ataxia, oftalmoparesia) aparece em poucos casos: tratar com 1 sinal em etilista, desnutrido, pós-bariátrica ou hiperêmese.'}]},

rx_paliat:{tipo:'h',g:'geral',t:'Fim de vida e sedação paliativa',rec:RH,rel:[['cd_paliat','Conduta cuidados de fim de vida']],items:[
 {t:'Controle de sintomas no fim de vida',rx:`1. Suspender medicações sem benefício de conforto (estatina, anti-hipertensivo, hipoglicemiante, vitaminas); suspender dieta forçada e exames
2. Dor/dispneia: Morfina 10 mg/mL — 1 mL + 9 mL de AD (1 mg/mL)
   Sem uso prévio de opioide: 2–3 mg SC/EV de 4/4 h + 2 mg de resgate até de 1/1 h
   Em infusão: 10–20 mg/24 h SC/EV (titular pelos resgates)
3. Secreção em vias aéreas (ronco terminal): Butilbrometo de escopolamina 20 mg/mL — 20 mg SC/EV de 6/6 h; mudança de decúbito; evitar aspiração frequente
4. Delirium/agitação: Haloperidol 5 mg/mL — 1–2,5 mg SC/EV de 8/8 h + resgates
5. Náuseas: Haloperidol 0,5–1 mg SC/EV ou Metoclopramida 10 mg SC/EV de 8/8 h
6. Febre/desconforto: Dipirona 1 g SC/EV de 6/6 h se necessário
7. Cuidados de boca (umedecer lábios e mucosa); hidratação por hipodermóclise só se trouxer conforto`,n:'Via subcutânea (hipodermóclise) é a preferida quando não há acesso venoso. Registrar no prontuário a decisão compartilhada com a família.'},
 {t:'Sedação paliativa (sintoma refratário)',rx:`1. Midazolam 5 mg/mL — 2,5–5 mg SC/EV em bolus (idoso/frágil: 1–2,5 mg); repetir a cada 15–30 min até conforto
2. Infusão contínua: Midazolam 50 mg (10 mL) + 40 mL de SF 0,9% (1 mg/mL): iniciar 0,5–1 mg/h SC/EV
   Ajustar 30–50% conforme conforto (faixa usual 1–5 mg/h; até 20 mg/h)
3. Manter opioide se havia dor ou dispneia (não substituir)
4. Refratário ou delirium agitado: Levomepromazina 12,5–25 mg SC/EV ou Fenobarbital (especialista)
5. Avaliar conforto (RASS, expressão facial, respiração) de 1/1 h até estabilizar, depois de 4/4 h`,n:'Indicação: sintoma refratário (dispneia, delirium, dor, sangramento maciço) em paciente com doença em fase final, com consentimento do paciente ou da família. Objetivo é o alívio, não a abreviação da vida.'}]},

rx_bradi:{tipo:'h',g:'cv',t:'Bradicardia sintomática',rec:RH,rel:[['cd_bradi','Conduta bradiarritmias'],['drogas','Drogas vasoativas']],items:[
 {t:'Bradicardia instável (ACLS)',rx:`1. Monitorização; O2 se SpO2 < 94%; acesso venoso; ECG de 12 derivações
2. Atropina 0,5 mg/mL — 1 mg (2 mL) EV em bolus; repetir a cada 3–5 min (máx. 3 mg)
3. Sem resposta: marca-passo transcutâneo e/ou
   Dopamina 50 mg/10 mL — 5 ampolas (250 mg) + 200 mL de SG 5% (1.000 mcg/mL): 5–20 mcg/kg/min
   (70 kg: 5 mcg/kg/min = 21 mL/h)
   ou Adrenalina 1 mg/mL — 4 mL + 246 mL de SF 0,9% (16 mcg/mL): 2–10 mcg/min = 7,5–37,5 mL/h
4. Analgesia/sedação para o marca-passo: Fentanil 50 mcg EV ± Midazolam 1–2 mg EV
5. Tratar causa: hipercalemia (gluconato de cálcio 10% 30 mL EV), intoxicação por betabloqueador/BCC (glucagon, cálcio, insulina em alta dose), digital (anticorpo antidigoxina)
6. Cardiologia: marca-passo transvenoso`,n:'Atropina pouco eficaz em BAV 2º grau Mobitz II e BAVT com QRS largo e em transplantado cardíaco: ir direto para marca-passo/drogas.'}]},

rx_peric:{tipo:'h',g:'cv',t:'Pericardite aguda',rec:RH,rel:[['cd_peric','Conduta pericardite']],items:[
 {t:'Pericardite aguda (baixo risco, alta)',rx:`USO ORAL
1. Ibuprofeno 600 mg ———— 1 comprimido de 8/8 h por 1–2 semanas (depois reduzir 200–400 mg por semana)
   ou AAS 500 mg — 2 comprimidos (1 g) de 8/8 h (preferir no pós-IAM)
2. Colchicina 0,5 mg ———— 1 comprimido de 12/12 h por 3 meses (1x/dia se < 70 kg)
3. Omeprazol 20 mg ———— 1 cápsula em jejum enquanto usar o AINE

ORIENTAÇÕES
- Evitar atividade física intensa até remissão (atleta: no mínimo 3 meses)
- Retornar se febre, falta de ar, desmaio ou piora da dor
- Reavaliação com PCR em 1–2 semanas`,n:'Corticoide só se contraindicação a AINE, doença autoimune ou falha (aumenta recorrência). Colchicina reduz recorrência pela metade.'}]}
});

/* ---------- Condutas ---------- */
Object.assign(CD,{
cd_ira:{g:'renal',t:'Lesão renal aguda e rabdomiólise',src:'KDIGO 2012 · KDIGO 2024 (consenso) · UpToDate',k:'ira lra lesao renal aguda insuficiencia renal creatinina oliguria anuria fena dialise rabdomiolise cpk mioglobina nefrotoxico contraste',rel:[['rx_ira','Prescrição'],['an_ira','Anamnese'],['ex_ira','Função renal'],['cd_k','Potássio'],['cg','Cockcroft-Gault']],sec:[
 {h:'Definição e estágios (KDIGO)',rows:[['Definição','Cr ↑ ≥ 0,3 mg/dL em 48 h, ou ≥ 1,5 × o basal em 7 dias, ou diurese < 0,5 mL/kg/h por 6 h'],['Estágio 1','Cr 1,5–1,9 × basal ou ↑ ≥ 0,3; diurese < 0,5 mL/kg/h por 6–12 h'],['Estágio 2','Cr 2,0–2,9 × basal; diurese < 0,5 mL/kg/h por ≥ 12 h'],['Estágio 3','Cr ≥ 3 × basal ou ≥ 4 mg/dL ou terapia dialítica; diurese < 0,3 mL/kg/h por ≥ 24 h ou anúria ≥ 12 h']]},
 {h:'Causas',rows:[['Pré-renal','Hipovolemia, choque, IC, cirrose, AINE/IECA/BRA. Ureia/Cr > 40, FeNa < 1%, FeUreia < 35% (se em uso de diurético), urina concentrada, sedimento normal'],['Renal','NTA (isquemia, sepse, contraste, aminoglicosídeo, rabdomiólise): FeNa > 2%, cilindros granulosos. Nefrite intersticial (beta-lactâmico, IBP, AINE): leucocitúria, eosinofilia. Glomerulonefrite: hematúria dismórfica, proteinúria, HAS'],['Pós-renal','HPB, neoplasia pélvica, cálculo bilateral/rim único, sonda obstruída. USG com hidronefrose; globo vesical']]},
 {h:'Conduta',li:['Afastar obstrução (sondagem de alívio, USG)','Avaliar volemia: expandir se hipovolêmico; diurético se congesto (não acelera a recuperação, só trata a sobrecarga)','Suspender nefrotóxicos e ajustar todas as doses pelo clearance estimado','Monitorizar K, bicarbonato, Na, ureia e diurese','Evitar contraste iodado se possível; se necessário, hidratação com SF 0,9% antes e depois em pacientes de risco','Não usar dopamina "renal" nem manitol']},
 {h:'Indicações de diálise de urgência (AEIOU)',rows:[['A: acidose','pH < 7,1–7,15 refratário'],['E: eletrólitos','K ≥ 6,5 mEq/L ou com ECG alterado refratário ao tratamento clínico'],['I: intoxicação','Lítio, metanol, etilenoglicol, salicilato, ácido valproico, metformina com acidose grave'],['O: overload','Congestão/EAP refratários a diurético'],['U: uremia','Encefalopatia, pericardite, sangramento urêmico']]},
 {h:'Rabdomiólise',li:['CPK > 5 × o normal (em geral > 1.000 U/L); risco de LRA maior se > 5.000–15.000','Causas: trauma/esmagamento, imobilização, convulsão, exercício extenuante, calor, drogas (cocaína, álcool), estatina, infecção, hipocalemia','Mioglobinúria: urina escura, fita com sangue e sedimento sem hemácias','Hidratação agressiva precoce com cristaloide (meta de diurese 200–300 mL/h) até CPK < 5.000','Vigiar hipercalemia, hiperfosfatemia, hipocalcemia (não corrigir se assintomática), síndrome compartimental']}]},

cd_falc:{g:'geral',t:'Doença falciforme: emergências',src:'MS Doença falciforme: condutas básicas 2012 · ASH 2020',k:'anemia falciforme doenca falciforme crise vaso oclusiva dor sindrome toracica aguda sequestro esplenico crise aplasica priapismo hbss',rel:[['rx_falc','Prescrição'],['an_falc','Anamnese']],sec:[
 {h:'Crise vaso-oclusiva (dor)',li:['Analgesia em até 30–60 min da chegada; acreditar na dor relatada','Opioide EV (morfina) para dor moderada a grave; reavaliar a cada 15–30 min','Hidratação moderada (VO de preferência); evitar hiperidratação (risco de síndrome torácica)','O2 só se hipoxemia; espirometria de incentivo','Não transfundir crise não complicada']},
 {h:'Complicações graves',rows:[['Febre ≥ 38,5 °C','Asplenia funcional: hemocultura e ceftriaxona em até 1 h'],['Síndrome torácica aguda','Infiltrado novo + febre, tosse, dispneia ou dor torácica. O2, ceftriaxona + azitromicina, analgesia, transfusão simples (Hb < 9) ou exsanguineotransfusão (grave)'],['Sequestro esplênico','Queda da Hb ≥ 2 g/dL + aumento do baço, choque hipovolêmico (criança). Transfusão em alíquotas de 5 mL/kg (meta Hb ≈ basal, risco de hiperviscosidade)'],['Crise aplásica','Queda da Hb com reticulócitos baixos (parvovírus B19). Transfusão'],['AVC','Déficit focal, convulsão, cefaleia intensa. TC/RM; exsanguineotransfusão urgente (meta HbS < 30%)'],['Priapismo','> 2–4 h: hidratação, analgesia, urologia (aspiração e irrigação com fenilefrina)']]},
 {h:'Transfusão',li:['Não elevar a Hb acima de 10–11 g/dL (hiperviscosidade)','Concentrado de hemácias fenotipado e leucorreduzido','Investigar aloanticorpos (muitos transfundidos)']}]},

cd_adren:{g:'endo',t:'Insuficiência adrenal aguda',src:'Endocrine Society 2016 · SBEM',k:'insuficiencia adrenal crise adrenal addison hidrocortisona choque refratario hiponatremia hipercalemia corticoide suspensao',rel:[['rx_adren','Prescrição'],['cd_na','Sódio'],['cd_k','Potássio']],sec:[
 {h:'Suspeitar',li:['Choque refratário a volume e vasopressor sem outra causa','Náuseas, vômitos, dor abdominal, fraqueza, confusão, febre','Hiponatremia, hipercalemia (na primária), hipoglicemia, eosinofilia','Hiperpigmentação (Addison)','Uso crônico de corticoide (≥ 5 mg/dia de prednisona por > 3–4 semanas) suspenso ou com estresse agudo (infecção, cirurgia, trauma)']},
 {h:'Conduta',li:['Não atrasar: hidrocortisona 100 mg EV imediata (colher cortisol e ACTH antes, se possível)','Manter 200 mg/24 h (50 mg 6/6 h ou infusão contínua)','SF 0,9% vigoroso; glicose se hipoglicemia','Tratar desencadeante','Após estabilizar: reduzir em 1–3 dias para dose oral; fludrocortisona na primária quando hidrocortisona < 50 mg/dia']},
 {h:'Dose de estresse em quem usa corticoide',rows:[['Doença leve (febre, gripe)','Dobrar ou triplicar a dose habitual por 2–3 dias'],['Vômitos/sem VO','Hidrocortisona 100 mg IM/EV e procurar o PS'],['Cirurgia grande, sepse, trauma','Hidrocortisona 100 mg EV na indução/admissão + 200 mg/24 h']]}]},

cd_mixed:{g:'endo',t:'Coma mixedematoso',src:'ATA 2014 · SBEM',k:'coma mixedematoso hipotireoidismo grave levotiroxina hipotermia hiponatremia hipercapnia',rel:[['rx_adren','Prescrição'],['cd_tireo','Tempestade tireoidiana']],sec:[
 {h:'Quadro',li:['Rebaixamento ou alteração do estado mental','Hipotermia, bradicardia, hipotensão, hipoventilação com hipercapnia','Hiponatremia, hipoglicemia, CPK elevada','Edema não depressível, pele seca, macroglossia, reflexos lentificados','Desencadeantes: infecção, frio, AVC, IAM, sedativos/opioides, suspensão da levotiroxina, amiodarona, lítio']},
 {h:'Conduta',li:['UTI; via aérea e ventilação (IOT se hipercapnia/rebaixamento)','Hidrocortisona 100 mg EV 8/8 h antes da levotiroxina','Levotiroxina 200–400 mcg EV de ataque (VO/SNG 300–500 mcg se não houver EV), depois 1,6 mcg/kg/dia; dose menor em idoso/coronariopata','Aquecimento passivo','Corrigir hiponatremia e hipoglicemia; volume com cautela','Tratar o desencadeante; mortalidade de 25–50%']}]},

cd_hcal:{g:'endo',t:'Hipercalcemia',src:'Endocrine Society · UpToDate',k:'hipercalcemia calcio alto hiperparatireoidismo neoplasia pthrp zoledronato calcitonina bisfosfonato',rel:[['rx_hcal','Prescrição'],['cacorr','Cálcio corrigido']],sec:[
 {h:'Gravidade (Ca total corrigido)',rows:[['Leve','< 12 mg/dL: em geral assintomática'],['Moderada','12–14 mg/dL'],['Grave','> 14 mg/dL ou sintomas (confusão, poliúria, desidratação, vômitos, arritmia, QT curto, LRA)']]},
 {h:'Causas',li:['90%: hiperparatireoidismo primário (ambulatorial, leve) e neoplasia (PTHrP, metástase óssea, mieloma; em geral grave e de início rápido)','Outras: vitamina D, granulomatoses, tiazídico, lítio, imobilização, tireotoxicose','Dosar PTH: alto/normal = hiperparatireoidismo; suprimido = neoplasia ou outra']},
 {h:'Tratamento',rows:[['Hidratação','SF 0,9% vigoroso (o paciente está desidratado pela poliúria); meta diurese 100–150 mL/h'],['Calcitonina','4 UI/kg SC/IM 12/12 h; age em 4–6 h, taquifilaxia em 48 h'],['Bisfosfonato','Zoledronato 4 mg EV (age em 2–4 dias, efeito por semanas). Ajustar/evitar se ClCr < 30'],['Denosumabe','120 mg SC; opção na insuficiência renal'],['Corticoide','Linfoma, granulomatose, vitamina D'],['Diálise','Ca > 18 mg/dL com sintomas neurológicos ou LRA/IC que impeçam hidratação'],['Furosemida','Só após correção da volemia e se sobrecarga']]}]},

cd_hepat:{g:'dig',t:'Cirrose descompensada',src:'EASL 2018 · AASLD 2021 · SBH',k:'cirrose encefalopatia hepatica lactulose ascite paracentese peritonite bacteriana espontanea pbe albumina sindrome hepatorrenal terlipressina asterixis west haven',rel:[['rx_hepat','Prescrição'],['an_hepat','Anamnese'],['cd_hda','HDA']],sec:[
 {h:'Encefalopatia hepática (West Haven)',rows:[['Grau 1','Alteração leve de atenção, euforia/ansiedade, inversão do sono'],['Grau 2','Letargia, desorientação no tempo, comportamento inadequado, asterixis'],['Grau 3','Sonolência mas responde a estímulos, confusão grosseira, desorientação total'],['Grau 4','Coma']]},
 {h:'Encefalopatia: conduta',li:['Diagnóstico clínico; amônia não é necessária (normal fala contra)','Afastar outras causas: hipoglicemia, TCE (coagulopatia), infecção do SNC, intoxicações, Wernicke','Procurar precipitante: infecção (inclusive PBE), HDA, constipação, hipocalemia, desidratação, diurético, sedativos','Lactulose até 2–3 evacuações pastosas/dia; enema se sem VO','Rifaximina associada se recorrente','Grau 3–4: proteger via aérea']},
 {h:'Ascite e PBE',li:['Paracentese diagnóstica em todo cirrótico com ascite internado, febre, dor abdominal, encefalopatia, LRA ou HDA','PBE: PMN ≥ 250/mm³ → ceftriaxona + albumina 1,5 g/kg D1 e 1 g/kg D3 (reduz LRA e mortalidade)','GASA ≥ 1,1 = hipertensão portal','Paracentese de alívio > 5 L: albumina 6–8 g/L retirado','Dieta com 2 g de sódio; espironolactona 100 mg + furosemida 40 mg (proporção 100:40)']},
 {h:'Síndrome hepatorrenal (SHR-LRA)',li:['Cirrose com ascite + LRA (KDIGO) sem resposta a 2 dias de suspensão de diuréticos e albumina 1 g/kg, sem choque, sem nefrotóxicos, sem doença renal estrutural','Tratamento: terlipressina + albumina (ou noradrenalina + albumina em UTI)','Avaliar transplante hepático']},
 {h:'HDA no cirrótico',li:['Ver HDA: octreotide/terlipressina, ceftriaxona 1 g/dia por 7 dias, EDA em até 12 h, transfusão restritiva (Hb 7–8)']}]},

cd_delir:{g:'neuro',t:'Delirium',src:'NICE CG103 2023 · AGS · SCCM PADIS 2018',k:'delirium confusao aguda idoso agitacao haloperidol quetiapina cam 4at hipoativo',rel:[['rx_delir','Prescrição'],['an_delir','Anamnese'],['qat4','4AT'],['cd_agit','Agitação']],sec:[
 {h:'Reconhecer',li:['Início agudo e curso flutuante','Desatenção (não consegue dizer os meses de trás para frente)','Pensamento desorganizado ou alteração do nível de consciência','Hipoativo (sonolento, quieto) é o mais comum e o mais esquecido','Ferramentas: 4AT (≥ 4 = provável delirium) ou CAM']},
 {h:'Causas (procurar sempre)',rows:[['Infecção','ITU, pneumonia, pele, sepse'],['Medicamentos','Benzodiazepínico, opioide, anticolinérgico, anti-histamínico, corticoide, antiparkinsoniano, polifarmácia'],['Metabólico','Na, Ca, glicose, uremia, hipóxia, hipercapnia, desidratação'],['Retenção','Urinária (globo vesical) e fecal (fecaloma)'],['Dor','Fraturas, úlceras, abdome agudo'],['SNC','AVC, TCE/hematoma subdural, convulsão não convulsiva'],['Abstinência','Álcool, benzodiazepínico']]},
 {h:'Tratamento',li:['Tratar a causa','Medidas não farmacológicas (primeira linha): acompanhante, reorientação, óculos/aparelho auditivo, sono, mobilização, hidratação, evitar contenção','Antipsicótico só se agitação com risco ou sofrimento intenso: haloperidol 0,5–1 mg ou quetiapina 12,5–25 mg, menor dose pelo menor tempo','Benzodiazepínico só na abstinência alcoólica/benzodiazepínica','Delirium é emergência médica: aumenta mortalidade']}]},

cd_etil:{g:'mental',t:'Abstinência alcoólica e Wernicke',src:'ASAM 2020 · RCP/NICE · ABEAD',k:'abstinencia alcoolica alcool etilista delirium tremens ciwa diazepam tiamina wernicke korsakoff convulsao',rel:[['rx_etil','Prescrição'],['an_etil','Anamnese'],['ciwa','CIWA-Ar']],sec:[
 {h:'Cronologia',rows:[['6–24 h','Tremor, ansiedade, sudorese, taquicardia, náuseas, insônia'],['12–48 h','Alucinose alcoólica (alucinações com sensório claro); convulsões tônico-clônicas'],['48–96 h','Delirium tremens: confusão, agitação, alucinações, febre, hipertensão, taquicardia, sudorese profusa']]},
 {h:'Tratamento',li:['CIWA-Ar < 10: sintomático, sem benzodiazepínico obrigatório','CIWA-Ar ≥ 10: diazepam guiado por sintomas (10–20 mg a cada 1 h até CIWA < 10)','Lorazepam (ou oxazepam) se hepatopatia grave ou idoso','Delirium tremens: diazepam EV em bolus repetidos até sedação leve; refratário: fenobarbital, propofol/IOT','Tiamina SEMPRE antes de glicose; repor Mg, K, P','Internar: CIWA ≥ 20, DT ou convulsão, comorbidade grave, abstinência complicada prévia, sem suporte']},
 {h:'Encefalopatia de Wernicke',li:['Confusão, ataxia, oftalmoplegia/nistagmo (tríade completa em < 20%)','Tratar com qualquer sinal em população de risco: tiamina 500 mg EV 8/8 h por 3 dias, depois 250 mg/dia por 3–5 dias','Sem tratamento evolui para Korsakoff (amnésia anterógrada, confabulação)']},
 {h:'Na alta',li:['Oferecer tratamento para dependência (CAPS AD)','Naltrexona, acamprosato ou dissulfiram no seguimento ambulatorial','Não prescrever benzodiazepínico para casa sem supervisão']}]},

cd_paliat:{g:'geral',t:'Cuidados de fim de vida e sedação paliativa',src:'ANCP Manual de Cuidados Paliativos 2012 · EAPC 2009 · CFM Res. 1.805/2006',k:'paliativo fim de vida sedacao paliativa morfina midazolam ronco terminal dispneia terminal hipodermoclise conforto',rel:[['rx_paliat','Prescrição']],sec:[
 {h:'Reconhecer a fase final',li:['Doença avançada e progressiva com declínio rápido','Sinais de últimos dias: rebaixamento, ingesta mínima, respiração irregular/apneias, ronco terminal, extremidades frias, oligúria','Conversar com paciente/família: prognóstico, objetivos de cuidado, desejos; registrar no prontuário (diretivas antecipadas, não reanimação se decidido)']},
 {h:'Controle de sintomas',rows:[['Dor e dispneia','Morfina (SC/EV); ventilador/ar no rosto; O2 só se traz conforto'],['Ronco terminal','Escopolamina (butilbrometo), decúbito lateral; evitar aspiração'],['Delirium/agitação','Haloperidol; levomepromazina; midazolam se refratário'],['Náuseas','Haloperidol, metoclopramida'],['Boca seca','Umedecer mucosa e lábios']]},
 {h:'Sedação paliativa',li:['Indicação: sintoma refratário a tratamento adequado, em doença terminal, com consentimento','Midazolam é a 1ª escolha (bolus + infusão SC/EV), titulado até o alívio','Proporcional: o mínimo de sedação que controla o sintoma','Não é eutanásia: a intenção é aliviar sofrimento; não abrevia a sobrevida quando bem feita','Manter cuidados de higiene, conforto e presença da família']}]},

cd_bradi:{g:'cv',t:'Bradiarritmias e marca-passo transcutâneo',src:'AHA ACLS 2020 · ACC/AHA/HRS 2018',k:'bradicardia bradiarritmia bav bloqueio atrioventricular total mobitz atropina marca passo transcutaneo dopamina adrenalina',rel:[['rx_bradi','Prescrição'],['an_bradi','Anamnese'],['ecg_bradi','ECG: bradiarritmias'],['acls','PCR e arritmias']],sec:[
 {h:'Instabilidade (qualquer um)',li:['Hipotensão / choque','Alteração aguda do estado mental','Dor torácica isquêmica','Insuficiência cardíaca aguda','Síncope']},
 {h:'Sequência (ACLS)',li:['Atropina 1 mg EV a cada 3–5 min (máx. 3 mg)','Sem resposta: marca-passo transcutâneo OU dopamina 5–20 mcg/kg/min OU adrenalina 2–10 mcg/min','Preparar marca-passo transvenoso (cardiologia)','Estável: monitorizar, procurar causa, ECG e cardiologia']},
 {h:'Marca-passo transcutâneo: passo a passo',li:['Pás adesivas: anteroposterior (esterno/precórdio + entre as escápulas) ou anterolateral','Ligar o modo marca-passo (demanda); frequência 60–80 bpm','Começar com corrente baixa e aumentar até captura elétrica (espícula seguida de QRS largo e onda T)','Confirmar captura mecânica pelo pulso FEMORAL (o pulso carotídeo confunde com contração muscular) ou POCUS','Ajustar a corrente 10% acima do limiar','Analgesia e sedação: fentanil ± midazolam','É uma ponte: solicitar transvenoso']},
 {h:'Causas reversíveis',rows:[['Medicamentos','Betabloqueador, verapamil/diltiazem, digoxina, amiodarona, clonidina'],['Hipercalemia','Gluconato de cálcio, insulina + glicose'],['IAM inferior','BAV geralmente transitório, responde à atropina'],['Outras','Hipotireoidismo, hipotermia, hipóxia, HIC (Cushing), Chagas, Lyme']]}]},

cd_peric:{g:'cv',t:'Pericardite e tamponamento',src:'ESC 2015 (doenças do pericárdio) · ESC 2025',k:'pericardite derrame pericardico tamponamento beck pulso paradoxal pericardiocentese colchicina atrito',rel:[['rx_peric','Prescrição'],['an_peric','Anamnese'],['ecg_padroes','ECG: padrões']],sec:[
 {h:'Diagnóstico (≥ 2 de 4)',li:['Dor torácica pleurítica que melhora ao inclinar para frente','Atrito pericárdico','ECG: supra de ST difuso côncavo + infra de PR (sem imagem em espelho, exceto aVR e V1)','Derrame pericárdico novo ou que aumenta','Apoio: PCR/VHS elevados, troponina (miopericardite)']},
 {h:'Alto risco: internar',li:['Febre > 38 °C','Início subagudo (dias a semanas)','Derrame volumoso (> 20 mm) ou tamponamento','Sem resposta ao AINE em 1 semana','Miopericardite (troponina elevada)','Imunossupressão, trauma, anticoagulação oral']},
 {h:'Tratamento',li:['AINE em dose alta (ibuprofeno 600 mg 8/8 h ou AAS 1 g 8/8 h) por 1–2 semanas + IBP','Colchicina 0,5 mg 12/12 h (1x/dia se < 70 kg) por 3 meses','Corticoide só em situações específicas','Restrição de esforço até remissão']},
 {h:'Tamponamento cardíaco',li:['Tríade de Beck: hipotensão, turgência jugular, bulhas abafadas','Pulso paradoxal > 10 mmHg; taquicardia; ECG com baixa voltagem/alternância elétrica','POCUS: derrame + colapso diastólico de AD/VD + VCI pletórica sem variação','Conduta: pericardiocentese de urgência guiada por USG (ou drenagem cirúrgica no trauma)','Ponte: volume (500 mL de cristaloide); evitar diurético, vasodilatador e, se possível, ventilação com pressão positiva','Pericardiocentese subxifoide: agulha entre o apêndice xifoide e o rebordo costal esquerdo, 30–45° com a pele, apontando para o ombro esquerdo, aspirando']}]}
});

/* ---------- Escore ---------- */
Object.assign(SC,{
qat4:{g:'neuro',t:'4AT (delirium)',code:'MacLullich 2014',kind:'q',q:[
 {q:'Alerta: o paciente está sonolento ou agitado/hiperativo?',o:[['Normal (totalmente alerta, sem agitação)',0],['Sonolência leve < 10 s após acordar, depois normal',0],['Claramente anormal',4]]},
 {q:'AMT4: idade, data de nascimento, local atual, ano atual',o:[['Nenhum erro',0],['1 erro',1],['2 ou mais erros, ou não testável',2]]},
 {q:'Atenção: "diga os meses do ano de trás para frente, começando por dezembro"',o:[['Diz 7 ou mais meses corretamente',0],['Começa mas acerta < 7, ou recusa',1],['Não testável (sonolento, desatento)',2]]},
 {q:'Mudança aguda ou curso flutuante (atenção, cognição, nas últimas 2 semanas e ainda presente nas últimas 24 h)',o:[['Não',0],['Sim',4]]}],
 lv:t=>t>=4?['bad','Provável delirium (≥ 4)','Procurar e tratar a causa; medidas não farmacológicas.']:t>=1?['warn','Possível comprometimento cognitivo (1–3)','Pode haver demência ou delirium; avaliação mais detalhada.']:['ok','Delirium ou comprometimento cognitivo grave improvável (0)','Repetir se o quadro mudar.']}
});
