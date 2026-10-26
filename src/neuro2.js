/* Neuro e ambiente (out/2026): AVC hemorrágico, HSA, Guillain-Barré, crise miastênica, síndrome serotoninérgica,
   síndrome neuroléptica maligna, angioedema por IECA/bradicinina, hipotermia, insolação. */

/* ---------- Anamneses ---------- */
Object.assign(AN,{
an_hsa:{g:'neuro',t:'Cefaleia súbita (HSA)',code:'I60 · R51',rel:[['cd_hsa','Conduta HSA'],['ottawahsa','Ottawa HSA'],['rx_hsa','Prescrição']],body:an('Pior dor de cabeça da vida',
`Paciente com cefaleia de início [súbito, atingindo intensidade máxima em __ (segundos/minutos) / gradual], há [ ] h, [durante esforço / relação sexual / evacuação / em repouso], intensidade [ ]/10, "a pior da vida": [sim/não]. Localização [ ].
Sintomas associados: [perda de consciência transitória, vômitos, rigidez de nuca, fotofobia, convulsão, diplopia, déficit focal, confusão].
Cefaleia sentinela nas últimas semanas: [ ]. Padrão diferente das cefaleias habituais: [ ].
Fatores de risco: [HAS, tabagismo, etilismo, cocaína/anfetamina, história familiar de aneurisma/HSA, rins policísticos, Marfan/Ehlers-Danlos, aneurisma conhecido].
Uso de anticoagulante/antiagregante: [ ]. Trauma: [ ].`,
`${EF_CV}
${EF_AR}
NEURO: Glasgow [ ]; pupilas [isocóricas e fotorreagentes / midríase __ (III par)]; força [ ]; sensibilidade [ ]; pares cranianos [ ]; rigidez de nuca [ausente / presente]; limitação da flexão do pescoço [ ]; fundo de olho [ ].
Hunt-Hess: [ ]. WFNS: [ ].
Ottawa HSA: [critérios presentes: __ / nenhum].`,
`1. Cefaleia súbita (thunderclap) a esclarecer: HSA [suspeita / confirmada, Hunt-Hess __, Fisher __]
2. [Outras: síndrome de vasoconstrição cerebral reversível, dissecção arterial, trombose venosa cerebral, apoplexia hipofisária]`,
`- TC de crânio sem contraste [em até 6 h do início]
- [Punção lombar se TC normal e > 6 h (xantocromia, hemácias)]
- [AngioTC de crânio]
- Analgesia, antiemético, repouso, cabeceira a 30°
- [PAS < 160 mmHg]
- [Nimodipino 60 mg 4/4 h se HSA confirmada]
- Avaliação da neurocirurgia`)},

an_fraq:{g:'neuro',t:'Fraqueza aguda (Guillain-Barré, miastenia)',code:'G61.0 · G70.0',rel:[['cd_gbs','Guillain-Barré'],['cd_miast','Crise miastênica'],['rx_neurom','Prescrição']],body:an('Fraqueza nas pernas',
`Paciente com fraqueza [ascendente, iniciada em membros inferiores / proximal / flutuante, piora ao fim do dia] há [ ] dias, progressiva. Dificuldade para [andar, subir escadas, levantar os braços, pentear o cabelo].
Parestesias / dor lombar ou em membros: [ ]. Sintomas bulbares: [disfagia, engasgos, voz anasalada, disartria, dificuldade para mastigar]. Ptose, diplopia: [ ]. Dispneia, ortopneia, tosse fraca: [ ]. Retenção urinária ou constipação: [ ].
Infecção nas últimas 4 semanas: [diarreia, IVAS, zika/dengue/chikungunya, COVID], vacinação recente: [ ].
Miastenia conhecida: [ ], medicações [piridostigmina __ mg, prednisona __, azatioprina], mudança recente de dose: [ ]. Medicamentos novos (aminoglicosídeo, fluoroquinolona, macrolídeo, magnésio, betabloqueador): [ ]. Timoma: [ ].`,
`${EF_CV} Sinais de disautonomia: [arritmia, PA lábil].
AR: [ ]. FR [ ]. Uso de musculatura acessória / respiração paradoxal: [ ]. Contagem em uma respiração (de 1 até __): [ ]. Tosse: [eficaz / fraca].
NEURO: Glasgow [ ]. Força: MMSS [ ]/5 proximal e [ ]/5 distal; MMII [ ]/5 proximal e [ ]/5 distal. Reflexos [abolidos / hipoativos / normais]. Sensibilidade [ ]. Pares cranianos: [ptose, diplopia, paresia facial bilateral, disfagia]. Fatigabilidade (olhar para cima por 60 s, abdução dos braços): [ ].
Capacidade vital: [ ] mL/kg. PImax: [ ]. PEmax: [ ].`,
`1. [Síndrome de Guillain-Barré / crise miastênica / exacerbação de miastenia]
2. [Insuficiência respiratória neuromuscular: risco]`,
`- Monitorizar CV, PImax e PEmax de 4/4 a 6/6 h (regra 20/30/40)
- [UTI se CV < 20 mL/kg, PImax > −30, PEmax < 40, disfagia ou disautonomia]
- [Imunoglobulina EV 0,4 g/kg/dia por 5 dias / plasmaférese]
- [Punção lombar, ENMG, eletrólitos (K, Mg, P), CPK, TSH, sorologias]
- Profilaxia de TVP; fisioterapia; avaliação da deglutição antes de liberar dieta`)},

an_hipot:{g:'geral',t:'Hipotermia e insolação',code:'T68 · T67.0',rel:[['cd_hipot','Hipotermia'],['cd_calor','Insolação'],['rx_term','Prescrição']],body:an('Encontrado no frio / passou mal no calor',
`Paciente [encontrado em via pública / em casa / após exposição ao frio ou à água fria / após atividade física intensa no calor / em ambiente quente sem ventilação] há [ ] h. Tempo estimado de exposição: [ ].
Sintomas: [tremores, confusão, sonolência, fala arrastada / cefaleia, náuseas, vômitos, cãibras, fraqueza, síncope, convulsão, agitação, cessou a sudorese].
Temperatura medida no local: [ ] °C. Medidas pré-hospitalares: [ ].
Fatores: [idoso, criança, situação de rua, álcool/drogas, desnutrição, hipotireoidismo, sepse, lesão medular, AVC; uso de anticolinérgico, antipsicótico, diurético, betabloqueador; atividade física extenuante, roupa inadequada].`,
`Temperatura CENTRAL [retal / esofágica / vesical]: [ ] °C.
${EF_CV} Ritmo [ ].
${EF_AR}
${EF_ABD}
NEURO: Glasgow [ ], pupilas [ ], tremor [presente / ausente], [ataxia, convulsão].
Pele: [fria e pálida / quente e seca / quente e sudoreica]. Lesões por frio (geladura): [ ]. Sinais de trauma: [ ].
ECG: [bradicardia sinusal, onda J de Osborn, FA, QT longo / taquicardia sinusal].`,
`1. [Hipotermia acidental leve (32–35 °C) / moderada (28–32 °C) / grave (< 28 °C)]
   ou [Insolação (heat stroke) clássica / por esforço / Exaustão pelo calor]
2. [Rabdomiólise / LRA / hepatite / CIVD]`,
`- Monitorização cardíaca contínua; manipulação gentil
- [Aquecimento passivo / ativo externo / ativo interno] ou [Resfriamento imediato por imersão em água gelada / evaporativo, meta < 39 °C em 30 min]
- [Fluidos aquecidos a 38–42 °C / cristaloide frio]
- [Glicemia, gasometria, eletrólitos, CPK, função renal e hepática, coagulograma, hemograma, ECG, TSH]`)}
});

/* ---------- Prescrições ---------- */
Object.assign(RX,{
rx_avch:{tipo:'h',g:'neuro',t:'AVC hemorrágico',rec:RH,rel:[['cd_avch','Conduta AVC hemorrágico'],['ichscore','ICH score']],items:[
 {t:'Hemorragia intraparenquimatosa',rx:`1. Dieta zero até avaliação da deglutição; cabeceira a 30°
2. PA: se PAS 150–220 mmHg, meta PAS ≈ 140 mmHg (faixa 130–150), redução suave em 1 h; não baixar < 130
   Metoprolol 5 mg/5 mL — 5 mg EV em 2–5 min, repetir a cada 10 min (máx. 15 mg)
   ou Nitroprussiato de sódio 50 mg + 250 mL de SG 5% (200 mcg/mL): iniciar 0,3 mcg/kg/min, titular a cada 5 min (70 kg: 6 mL/h)
   ou Esmolol 500 mcg/kg em 1 min, depois 50–200 mcg/kg/min
3. Reverter anticoagulação (ver item abaixo)
4. Glicemia capilar de 4/4 h; meta 140–180 mg/dL
5. Dipirona 1 g EV de 6/6 h se T > 37,5 °C ou dor (manter normotermia)
6. Ondansetrona 8 mg EV de 8/8 h se náusea
7. Profilaxia de TVP: compressão pneumática intermitente (heparina profilática só após 24–48 h e estabilidade do hematoma)
8. Anticonvulsivante só se crise clínica ou eletrográfica: Levetiracetam 500–1.000 mg EV de 12/12 h
9. TC de crânio de controle em 6–24 h ou se piora`,n:'Neurocirurgia: hematoma cerebelar > 3 cm com deterioração, compressão de tronco ou hidrocefalia; hidrocefalia sintomática (DVE). Não transfundir plaquetas em quem usa antiagregante e não vai operar.'},
 {t:'Reversão de anticoagulante',rx:`Varfarina (INR ≥ 1,4):
1. Complexo protrombínico (4 fatores) 25–50 UI/kg EV (INR 2–4: 25; 4–6: 35; > 6: 50 UI/kg)
   ou Plasma fresco congelado 10–15 mL/kg se sem CCP
2. Vitamina K 10 mg EV lento em 30 min (em 100 mL de SF 0,9%)

Dabigatrana: Idarucizumabe 5 g EV (2 frascos de 2,5 g em bolus)
Rivaroxabana/apixabana/edoxabana: Andexanete alfa (se disponível) ou Complexo protrombínico 50 UI/kg EV
Heparina não fracionada: Protamina 1 mg para cada 100 UI de heparina das últimas 2–3 h (máx. 50 mg), EV lento em 10 min
Enoxaparina (< 8 h): Protamina 1 mg para cada 1 mg de enoxaparina (máx. 50 mg)
Trombolítico (< 24 h): Crioprecipitado 10 U + Ácido tranexâmico 1 g EV em 10 min`,n:'Se ingestão de DOAC < 2 h: carvão ativado 50 g VO.'}]},

rx_hsa:{tipo:'h',g:'neuro',t:'Hemorragia subaracnóidea',rec:RH,rel:[['cd_hsa','Conduta HSA']],items:[
 {t:'HSA aneurismática (até o tratamento do aneurisma)',rx:`1. Dieta zero inicialmente; cabeceira a 30°; repouso; ambiente calmo
2. Nimodipino 30 mg — 2 comprimidos (60 mg) VO/SNG de 4/4 h por 21 dias
   (se hipotensão: 30 mg de 2/2 h)
3. PA: manter PAS < 160 mmHg até o tratamento do aneurisma
   Metoprolol 5 mg EV ou nitroprussiato em BIC (titular)
4. SF 0,9% 1.500–2.000 mL/24 h EV (euvolemia; evitar hipovolemia e hiponatremia)
5. Analgesia: Dipirona 1 g EV de 6/6 h + Morfina 2–4 mg EV de 4/4 h se dor intensa (evitar AINE)
6. Ondansetrona 8 mg EV de 8/8 h
7. Laxativo: Lactulose 15 mL VO de 12/12 h (evitar Valsalva)
8. Glicemia capilar de 6/6 h; Na diário
9. Compressão pneumática intermitente para TVP
10. Neurocirurgia/neurorradiologia: tratamento do aneurisma (clipagem ou embolização) em até 24 h`,n:'Anticonvulsivante só se crise. Hidrocefalia aguda (rebaixamento, ventrículos aumentados): DVE. Vasoespasmo (dias 3–14): déficit novo, piora do nível de consciência.'}]},

rx_neurom:{tipo:'h',g:'neuro',t:'Guillain-Barré e crise miastênica',rec:RH,rel:[['cd_gbs','Guillain-Barré'],['cd_miast','Crise miastênica']],items:[
 {t:'Síndrome de Guillain-Barré',rx:`1. Dieta pastosa após avaliação da deglutição (SNE se disfagia)
2. Imunoglobulina humana EV 0,4 g/kg/dia por 5 dias (total 2 g/kg)
   (70 kg: 28 g/dia; iniciar a 0,5 mL/kg/h por 30 min e aumentar se tolerado)
   ou Plasmaférese 5 sessões em 1–2 semanas
3. CV, PImax, PEmax de 6/6 h (de 4/4 h se piora)
4. Monitorização cardíaca (disautonomia); evitar quedas bruscas de PA
5. Enoxaparina 40 mg SC 1x/dia
6. Dor neuropática: Gabapentina 300 mg VO de 8/8 h (titular) ± Dipirona 1 g de 6/6 h
7. Fisioterapia motora e respiratória; mudança de decúbito de 2/2 h`,n:'Corticoide não tem benefício. Notificação compulsória de paralisia flácida aguda em menores de 15 anos.'},
 {t:'Crise miastênica',rx:`1. UTI; dieta zero se disfagia; cabeceira elevada
2. VNI (BiPAP) precoce se hipercapnia ainda sem fadiga extrema; IOT se CV < 15–20 mL/kg, PImax > −20 a −30, fadiga, disfagia com aspiração
   IOT: Rocurônio dose reduzida (0,5 mg/kg); evitar succinilcolina (resistência/resposta imprevisível)
3. Imunoglobulina humana EV 0,4 g/kg/dia por 5 dias ou Plasmaférese (5 sessões)
4. Prednisona 20 mg VO, aumentar até 1 mg/kg/dia (iniciar junto ou após a imunoterapia: pode piorar nos primeiros dias)
5. Piridostigmina: suspender temporariamente se intubado (aumenta secreções); reintroduzir 30–60 mg VO de 6/6 h na melhora
6. Suspender medicações que pioram: aminoglicosídeo, fluoroquinolona, macrolídeo, magnésio EV, betabloqueador, bloqueador neuromuscular
7. Tratar o desencadeante (infecção: preferir ceftriaxona/beta-lactâmicos)`,n:'Crise colinérgica (excesso de piridostigmina: miose, sialorreia, fasciculações, bradicardia) é rara; na dúvida, suspender a piridostigmina e garantir via aérea.'}]},

rx_serot:{tipo:'h',g:'mental',t:'Síndrome serotoninérgica e neuroléptica maligna',rec:RH,rel:[['cd_serot','Conduta']],items:[
 {t:'Síndrome serotoninérgica',rx:`1. Suspender todos os serotoninérgicos (ISRS, IRSN, tramadol, ondansetrona, metoclopramida, linezolida, triptanos, MDMA, lítio, fentanil, meperidina)
2. Diazepam 10 mg EV lento (ou Midazolam 2–5 mg EV), repetir para controlar agitação, tremor e rigidez
3. Ciproeptadina 4 mg — 12 mg VO/SNG de ataque (3 comprimidos macerados), depois 2 mg de 2/2 h até melhora; manutenção 8 mg de 6/6 h
4. SF 0,9% EV para hidratação (meta diurese 1 mL/kg/h); monitorizar CPK
5. Resfriamento externo se hipertermia (antitérmico não ajuda)
6. T > 41 °C: sedação profunda + IOT + bloqueador neuromuscular não despolarizante (rocurônio); UTI`,n:'Evitar contenção física (piora a hipertermia e a acidose). Não usar succinilcolina, haloperidol nem clorpromazina.'},
 {t:'Síndrome neuroléptica maligna',rx:`1. Suspender o antipsicótico (e metoclopramida/prometazina); se suspensão de levodopa/antiparkinsoniano, reiniciar
2. Resfriamento externo; SF 0,9% vigoroso (rabdomiólise)
3. Lorazepam 1–2 mg EV ou Diazepam 10 mg EV de 6/6 a 8/8 h (agitação, catatonia)
4. Formas moderadas/graves: Bromocriptina 2,5 mg VO/SNG de 8/8 h (aumentar até 45 mg/dia)
5. Rigidez grave e hipertermia: Dantroleno 1–2,5 mg/kg EV, repetir até 10 mg/kg/dia
6. CPK, função renal, eletrólitos, gasometria, coagulograma de 12/12 h; UTI
7. Profilaxia de TVP`,n:'Não reintroduzir antipsicótico por pelo menos 2 semanas após a resolução; depois preferir atípico em dose baixa.'}]},

rx_angio:{tipo:'h',g:'resp',t:'Angioedema por IECA / bradicinina',rec:RH,rel:[['cd_angio','Conduta angioedema'],['cd_anaf','Anafilaxia']],items:[
 {t:'Angioedema sem urticária (IECA, hereditário)',rx:`1. Avaliação imediata da via aérea; cabeceira elevada; O2 se necessário
   Língua, assoalho da boca, voz alterada, estridor, disfagia: chamar o profissional de via aérea mais experiente; IOT por fibroscopia acordado; preparar cricotireoidostomia
2. Suspender IECA (definitivamente; também alisquireno, gliptinas e sacubitril)
3. Se dúvida com anafilaxia (urticária, broncoespasmo, hipotensão): Adrenalina 0,5 mg IM (pode ser dada sem prejuízo)
4. Icatibanto 30 mg SC (dose única; repetir em 6 h se necessário) — se disponível
   ou Concentrado de inibidor de C1 esterase 20 UI/kg EV (angioedema hereditário)
   ou Plasma fresco congelado 2 unidades (≈ 10 mL/kg) EV se nada disponível
5. Observação mínima: 6–12 h; UTI se acometimento de língua/laringe`,n:'Anti-histamínico e corticoide não funcionam no angioedema por bradicinina. Pode ocorrer anos após o início do IECA. BRA: risco pequeno de recorrência (usar com cautela).'}]},

rx_term:{tipo:'h',g:'geral',t:'Hipotermia e insolação',rec:RH,rel:[['cd_hipot','Hipotermia'],['cd_calor','Insolação']],items:[
 {t:'Hipotermia moderada a grave',rx:`1. Monitorização contínua; manipulação gentil e horizontal (risco de FV)
2. Retirar roupas molhadas; isolar do chão; cobertores
3. Aquecimento ativo externo: manta de ar forçado aquecido / bolsas aquecidas no tronco (não nos membros)
4. SF 0,9% aquecido a 38–42 °C — 500 mL EV em bolus (criança 20 mL/kg), repetir conforme PA
5. O2 aquecido e umidificado
6. Glicemia capilar; se < 70: Glicose 50% 40 mL EV
7. Tiamina 100 mg EV se etilista/desnutrido
8. Temperatura central contínua (esofágica/retal); meta de aquecimento 1–2 °C/h
9. Gasometria, eletrólitos (K), CPK, coagulograma, TSH, ECG`,n:'Grave (< 28 °C) ou instável: aquecimento interno (lavagem pleural/peritoneal com SF a 40–42 °C) ou ECMO/circulação extracorpórea. Não tratar bradicardia sinusal da hipotermia com atropina/marca-passo.'},
 {t:'Insolação (heat stroke)',rx:`1. Resfriar IMEDIATAMENTE: imersão em água gelada (melhor) ou borrifar água + ventilador + bolsas de gelo em pescoço, axilas e virilhas
   Meta: < 39 °C em 30 min; parar ao chegar em 38,5–39 °C
2. Temperatura central (retal) contínua
3. SF 0,9% 1.000 mL EV em 30 min (frio, se disponível); depois conforme PA e diurese (cuidado com edema pulmonar no idoso)
4. Diazepam 5–10 mg EV se tremores, agitação ou convulsão
5. Glicemia capilar; tratar hipoglicemia
6. Hemograma, eletrólitos, CPK, ureia, creatinina, TGO/TGP, coagulograma, gasometria, lactato, ECG
7. Sonda vesical; diurese horária`,n:'Dipirona e paracetamol não funcionam (não é febre) e podem piorar o fígado. Dantroleno não tem benefício. Complicações: rabdomiólise, LRA, CIVD, insuficiência hepática.'}]}
});

/* ---------- Condutas ---------- */
Object.assign(CD,{
cd_avch:{g:'neuro',t:'AVC hemorrágico',src:'AHA/ASA 2022 (hemorragia intracerebral) · SBDCV',k:'avc hemorragico hemorragia intraparenquimatosa hematoma cerebral reversao anticoagulante ich score pa intensiva neurocirurgia',rel:[['rx_avch','Prescrição'],['ichscore','ICH score'],['cd_avc','AVC isquêmico'],['cd_hsa','HSA'],['glasgow','Glasgow']],sec:[
 {h:'Suspeitar e confirmar',li:['Déficit focal súbito com cefaleia, vômitos, rebaixamento, PA muito elevada: não dá para distinguir de isquêmico sem imagem','TC de crânio sem contraste imediata','AngioTC se < 70 anos, sem HAS, localização lobar ou atípica, HIV/HSA associada (malformação, aneurisma)','Volume do hematoma (ABC/2): maior diâmetro × perpendicular × número de cortes × espessura ÷ 2']},
 {h:'Medidas principais (primeiras horas)',li:['ABC; IOT se Glasgow ≤ 8 ou sem proteção de via aérea','PA: se PAS 150–220, baixar para ~140 (faixa 130–150) em 1 h, de forma suave e mantida; evitar < 130','Reverter anticoagulação o mais rápido possível','Glicemia 140–180, normotermia, cabeceira 30°, Na normal','Sem anticonvulsivante profilático','Profilaxia de TVP mecânica; heparina profilática após 24–48 h se hematoma estável']},
 {h:'Neurocirurgia',li:['Hematoma cerebelar > 3 cm, compressão de tronco ou hidrocefalia → cirurgia','Hidrocefalia com rebaixamento → DVE','Hematoma lobar supratentorial volumoso com deterioração: considerar cirurgia/minimamente invasiva','HIC: cabeceira 30°, sedação, analgesia, salina hipertônica/manitol como ponte']},
 {h:'Prognóstico (ICH score)',rows:[['0','Mortalidade em 30 dias ≈ 0%'],['1','≈ 13%'],['2','≈ 26%'],['3','≈ 72%'],['4','≈ 97%'],['5–6','≈ 100%']]},
 {h:'Ligação',li:['Não limitar suporte nas primeiras 24 h só com base em escore (profecia autorrealizável)']}]},

cd_hsa:{g:'neuro',t:'Hemorragia subaracnóidea',src:'AHA/ASA 2023 (HSA aneurismática) · Ottawa SAH Rule (Perry 2013)',k:'hsa hemorragia subaracnoidea aneurisma cefaleia subita thunderclap pior cefaleia da vida nimodipino xantocromia hunt hess fisher vasoespasmo',rel:[['rx_hsa','Prescrição'],['an_hsa','Anamnese'],['ottawahsa','Ottawa HSA'],['cd_cef','Cefaleia'],['ex_lcr','Líquor']],sec:[
 {h:'Investigação',li:['Ottawa HSA (cefaleia que atinge o máximo em ≤ 1 h, paciente alerta, sem déficit novo, ≥ 15 anos): qualquer critério = investigar','TC sem contraste em até 6 h do início (laudo experiente, aparelho moderno): sensibilidade ≈ 100%; normal → HSA afastada','TC normal após 6 h: punção lombar (hemácias que não diminuem do 1º ao 4º tubo, xantocromia após 12 h) ou angioTC','HSA confirmada: angioTC de crânio (aneurisma)']},
 {h:'Hunt-Hess',rows:[['1','Assintomático ou cefaleia leve, rigidez de nuca leve'],['2','Cefaleia moderada a grave, rigidez de nuca, só déficit de nervo craniano'],['3','Sonolência, confusão, déficit focal leve'],['4','Torpor, hemiparesia moderada a grave'],['5','Coma, descerebração']]},
 {h:'Fisher modificada (risco de vasoespasmo)',rows:[['0','Sem HSA nem hemoventrículo'],['1','HSA fina, sem hemoventrículo'],['2','HSA fina com hemoventrículo'],['3','HSA espessa, sem hemoventrículo'],['4','HSA espessa com hemoventrículo (maior risco)']]},
 {h:'Tratamento',li:['Neurocirurgia/neurorradiologia: excluir o aneurisma (embolização ou clipagem) o mais cedo possível (< 24 h)','PAS < 160 até o tratamento do aneurisma','Nimodipino 60 mg VO 4/4 h por 21 dias (melhora desfecho)','Reverter anticoagulação; analgesia; antiemético; euvolemia; normotermia; glicemia','Hidrocefalia aguda: DVE','Complicações: ressangramento (primeiras 24 h), hidrocefalia, vasoespasmo/isquemia tardia (dias 3–14), hiponatremia (SIADH ou cerebral perdedora de sal), crises']}]},

cd_gbs:{g:'neuro',t:'Síndrome de Guillain-Barré',src:'Diretriz europeia EAN/PNS 2023 · MS',k:'guillain barre polirradiculoneurite fraqueza ascendente arreflexia imunoglobulina plasmaferese dissociacao albumino citologica',rel:[['rx_neurom','Prescrição'],['an_fraq','Anamnese'],['cd_miast','Crise miastênica']],sec:[
 {h:'Quadro',li:['Fraqueza progressiva bilateral, em geral ascendente, com reflexos diminuídos ou abolidos','Pico em até 4 semanas (geralmente 2)','Parestesias, dor lombar/radicular, paresia facial bilateral, disfagia, oftalmoparesia (Miller Fisher: oftalmoplegia, ataxia, arreflexia)','Infecção 1–4 semanas antes (Campylobacter, CMV, EBV, zika, COVID)','Alertas contra o diagnóstico: nível sensitivo, disfunção esfincteriana importante desde o início, assimetria marcada, febre no início → pensar em mielopatia (RM)']},
 {h:'Exames',li:['LCR: proteína alta com celularidade normal (< 50 céls) — pode ser normal na 1ª semana','ENMG','Eletrólitos (K, P, Mg), CPK, glicemia, TSH, HIV, sorologias; RM de coluna se dúvida']},
 {h:'Risco respiratório (regra 20/30/40)',li:['CV < 20 mL/kg, PImax pior que −30 cmH2O, PEmax < 40 cmH2O → UTI e considerar IOT eletiva','Também: progressão rápida, disfagia, tosse ineficaz, disautonomia','Não usar oximetria para decidir: a hipoxemia é tardia']},
 {h:'Tratamento',li:['Imunoglobulina EV 2 g/kg em 5 dias OU plasmaférese, nas primeiras 2 (até 4) semanas em quem não anda sem apoio','Não associar IgIV e plasmaférese; corticoide não ajuda','Suporte: profilaxia de TVP, dor neuropática, disautonomia (monitorização), fisioterapia, prevenção de úlceras']}]},

cd_miast:{g:'neuro',t:'Crise miastênica',src:'MGFA International Consensus 2020 · AAN',k:'miastenia gravis crise miastenica fraqueza bulbar ptose diplopia piridostigmina imunoglobulina plasmaferese insuficiencia respiratoria',rel:[['rx_neurom','Prescrição'],['an_fraq','Anamnese'],['cd_gbs','Guillain-Barré']],sec:[
 {h:'Reconhecer',li:['Insuficiência respiratória ou disfagia grave em paciente com miastenia (ou primeira manifestação)','Fraqueza flutuante que piora com esforço; ptose, diplopia, disfagia, disartria, fraqueza cervical e proximal','Sinais de alerta: voz anasalada, não consegue contar até 20 em uma respiração, tosse fraca, respiração paradoxal','Monitorizar CV, PImax e PEmax (regra 20/30/40)']},
 {h:'Desencadeantes',li:['Infecção (o mais comum), cirurgia, gestação/puerpério','Redução de imunossupressor ou piridostigmina','Medicamentos: aminoglicosídeo, fluoroquinolona, macrolídeo, magnésio, betabloqueador, bloqueador de canal de cálcio, bloqueador neuromuscular, contraste iodado, imunoterapia oncológica (checkpoint)']},
 {h:'Tratamento',li:['UTI; VNI precoce ou IOT (rocurônio em dose menor; evitar succinilcolina)','IgIV 2 g/kg em 2–5 dias ou plasmaférese (mais rápida)','Corticoide (prednisona até 1 mg/kg) em seguida/junto: piora transitória nos primeiros dias','Suspender piridostigmina se intubado; reintroduzir na recuperação','Tratar infecção com antibiótico seguro (beta-lactâmicos)']}]},

cd_serot:{g:'mental',t:'Síndrome serotoninérgica e neuroléptica maligna',src:'Critérios de Hunter (Dunkley 2003) · Boyer & Shannon NEJM 2005 · UpToDate',k:'sindrome serotoninergica neuroleptica maligna hipertermia rigidez clonus hiperreflexia ciproeptadina bromocriptina dantroleno antipsicotico isrs tramadol',rel:[['rx_serot','Prescrição'],['cd_intox','Intoxicações']],sec:[
 {h:'Comparação',rows:[['Início','Serotoninérgica: horas (< 24 h) após dose nova/aumento. Neuroléptica maligna: dias a semanas após início/aumento do antipsicótico'],['Neuromuscular','Serotoninérgica: CLÔNUS (induzível, espontâneo, ocular), hiperreflexia, tremor, mais nos MMII. NMS: rigidez em "cano de chumbo", bradirreflexia'],['Mental','Agitação (SS); rebaixamento, mutismo, catatonia (NMS)'],['Outros','SS: midríase, diarreia, hiperperistaltismo, diaforese. NMS: sialorreia, disautonomia, CPK muito alta, leucocitose'],['Resolução','SS: < 24 h após suspensão. NMS: 1–2 semanas']]},
 {h:'Critérios de Hunter (serotoninérgica)',intro:'Uso de agente serotoninérgico + um dos seguintes:',li:['Clônus espontâneo','Clônus induzível + agitação ou diaforese','Clônus ocular + agitação ou diaforese','Tremor + hiperreflexia','Hipertonia + temperatura > 38 °C + clônus ocular ou induzível']},
 {h:'Diagnóstico diferencial',rows:[['Anticolinérgica','Pele seca e quente, mucosas secas, rubor, retenção urinária, íleo, reflexos normais'],['Hipertermia maligna','Durante anestesia (halogenados, succinilcolina): rigidez, hipercapnia → dantroleno'],['Simpaticomimética','Cocaína/anfetamina: sudorese, midríase, HAS, taquicardia, sem clônus importante'],['Outros','Meningite/encefalite, insolação, tireotoxicose, abstinência alcoólica, catatonia maligna']]},
 {h:'Tratamento',li:['Suspender o agente; suporte; resfriamento; hidratação','Benzodiazepínico para agitação, tremor e rigidez','Serotoninérgica: ciproeptadina; T > 41 °C → sedação, IOT e paralisia não despolarizante','NMS: bromocriptina e/ou dantroleno nas formas moderadas a graves','Antitérmicos não funcionam; evitar contenção física, haloperidol e succinilcolina']}]},

cd_angio:{g:'resp',t:'Angioedema',src:'WAO/EAACI 2021 · AAAAI · UpToDate',k:'angioedema ieca enalapril captopril bradicinina hereditario icatibanto c1 inibidor plasma edema de lingua labio via aerea',rel:[['rx_angio','Prescrição'],['cd_anaf','Anafilaxia'],['rx_anaf','Prescrição anafilaxia']],sec:[
 {h:'Distinguir o mecanismo',rows:[['Histaminérgico (alérgico)','Com urticária/prurido, início em minutos, pode ter broncoespasmo e hipotensão (anafilaxia) → adrenalina, anti-histamínico, corticoide'],['Bradicinina (IECA, hereditário, adquirido)','SEM urticária nem prurido, instalação em horas, dura 2–5 dias; lábios, língua, face, laringe, alças intestinais (dor abdominal) → NÃO responde a adrenalina/anti-histamínico/corticoide']]},
 {h:'Gravidade e destino (localização)',rows:[['Face, lábios','Observação no PS e alta se estável após 6–12 h'],['Palato mole','Observação prolongada / internação'],['Língua, assoalho da boca','UTI; via aérea pode piorar'],['Laringe (rouquidão, estridor, disfagia, sialorreia)','Via aérea definitiva precoce: fibroscopia acordado; preparar cricotireoidostomia']]},
 {h:'Tratamento (bradicinina)',li:['Suspender IECA definitivamente (e gliptinas, sacubitril, alisquireno); contraindicar em alergia no prontuário','Icatibanto 30 mg SC; concentrado de C1-INH 20 UI/kg no hereditário; plasma fresco 2 U se nada disponível','Adrenalina pode ser tentada se dúvida de alergia','Avaliação com nasofibroscopia quando disponível']}]},

cd_hipot:{g:'geral',t:'Hipotermia acidental',src:'ERC 2021 (circunstâncias especiais) · AHA 2020 · Wilderness Medical Society 2019',k:'hipotermia frio temperatura baixa aquecimento osborn onda j pcr hipotermica ecmo geladura',rel:[['rx_term','Prescrição'],['an_hipot','Anamnese'],['cd_afog','Afogamento'],['acls','ACLS']],sec:[
 {h:'Estágios (temperatura central)',rows:[['Leve 32–35 °C','Consciente, tremendo, taquicardia, taquipneia'],['Moderada 28–32 °C','Rebaixamento, para de tremer, bradicardia, FA'],['Grave < 28 °C','Inconsciente, risco alto de FV/assistolia, pupilas podem estar fixas'],['< 24 °C','Alto risco de PCR; ainda pode ser revertida']]},
 {h:'Conduta',li:['Medir temperatura central (esofágica, retal, vesical); termômetro de baixa leitura','Manipular com cuidado e na horizontal (risco de FV)','Leve: aquecimento passivo (retirar roupa molhada, cobertores), bebidas quentes se consciente','Moderada: aquecimento ativo externo (ar forçado) + fluidos aquecidos 38–42 °C','Grave ou instável: aquecimento ativo interno; ECMO/CEC se PCR ou instabilidade','Procurar causa: sepse, hipoglicemia, hipotireoidismo, insuficiência adrenal, intoxicação, TCE, AVC']},
 {h:'PCR na hipotermia',li:['RCP padrão; checar pulso por até 1 min','< 30 °C: até 3 choques; drogas suspensas até > 30 °C','30–35 °C: drogas com o dobro do intervalo','"Ninguém está morto até estar quente e morto": continuar RCP até reaquecer, salvo lesão incompatível com vida','K > 12 mEq/L sugere PCR antes do resfriamento (asfixia): mau prognóstico','Transferir para centro com ECMO quando possível']}]},

cd_calor:{g:'geral',t:'Insolação e doenças pelo calor',src:'Wilderness Medical Society 2019 · ACSM 2023',k:'insolacao heat stroke intermacao exaustao pelo calor hipertermia resfriamento imersao agua gelada caibra calor',rel:[['rx_term','Prescrição'],['an_hipot','Anamnese'],['cd_serot','Síndromes hipertérmicas por drogas']],sec:[
 {h:'Espectro',rows:[['Cãibras e síncope pelo calor','Repouso em local fresco, hidratação oral com eletrólitos'],['Exaustão pelo calor','T < 40 °C, fraqueza, cefaleia, náuseas, taquicardia, SEM disfunção neurológica → repouso, resfriamento, hidratação oral ou EV'],['Insolação (heat stroke)','T central > 40 °C + disfunção do SNC (confusão, convulsão, coma). Clássica (idoso, onda de calor, pele seca) ou por esforço (atleta, militar, trabalhador; pele pode estar suada)']]},
 {h:'Insolação: tratamento',li:['"Resfriar primeiro, transportar depois": cada minuto conta','Imersão em água gelada (2–15 °C): resfria 0,15–0,35 °C/min; melhor método na insolação por esforço','Sem imersão: borrifar água + ventilador; gelo em pescoço, axilas, virilhas; lençóis molhados frios','Parar em 38,5–39 °C (evitar hipotermia de rebote)','Antitérmicos não funcionam; dantroleno sem benefício','Benzodiazepínico para tremor/convulsão; IOT se necessário']},
 {h:'Complicações',li:['Rabdomiólise, LRA, hipercalemia','Insuficiência hepática (TGO/TGP sobem em 24–72 h)','CIVD, hipoglicemia, edema cerebral, SDRA','Internar todos com insolação']}]}
});

/* ---------- Escores ---------- */
Object.assign(SC,{
ottawahsa:{g:'neuro',t:'Ottawa HSA (cefaleia súbita)',code:'Perry 2013',kind:'ck',ck:[
 ['Idade ≥ 40 anos',1],['Dor ou rigidez cervical (queixa)',1],['Perda de consciência testemunhada',1],['Início durante esforço',1],['Cefaleia "em trovoada": pico instantâneo',1],['Limitação da flexão do pescoço ao exame',1]],
 lv:t=>t===0?['ok','Nenhum critério','HSA afastada pela regra (sensibilidade ≈ 100%), se aplicável: ≥ 15 anos, alerta, sem déficit novo, cefaleia que atinge o máximo em ≤ 1 h.']:['bad',`${t} critério(s)`,'Investigar HSA: TC sem contraste (até 6 h: normal afasta); após 6 h, punção lombar ou angioTC.'],unit:' critério(s)',note:'Não se aplica a: déficit neurológico novo, aneurisma/HSA/tumor prévio, cefaleias recorrentes semelhantes (≥ 3 episódios em 6 meses), trauma.'},
ichscore:{g:'neuro',t:'ICH score (AVC hemorrágico)',code:'Hemphill 2001',kind:'q',q:[
 {q:'Glasgow',o:[['13–15',0],['5–12',1],['3–4',2]]},
 {q:'Volume do hematoma (ABC/2)',o:[['< 30 mL',0],['≥ 30 mL',1]]},
 {q:'Inundação ventricular',o:[['Não',0],['Sim',1]]},
 {q:'Origem infratentorial',o:[['Não',0],['Sim',1]]},
 {q:'Idade',o:[['< 80 anos',0],['≥ 80 anos',1]]}],
 lv:t=>{const m=['≈ 0%','≈ 13%','≈ 26%','≈ 72%','≈ 97%','≈ 100%','≈ 100%'][t];return [t<=1?'ok':t<=2?'warn':'bad',`ICH score ${t}`,`Mortalidade em 30 dias ${m}. Não usar isoladamente para limitar suporte nas primeiras 24 h.`]}}
});
