/* Lesões ambientais (out/2026): queimaduras, afogamento e lesão elétrica (inclui raio). */

/* ---------- Anamneses ---------- */
Object.assign(AN,{
an_queim:{g:'osteo',t:'Queimadura',code:'T20–T32 · X00–X19',rel:[['cd_queim','Conduta queimaduras'],['rx_queim','Prescrição'],['parkland','Hidratação do queimado']],body:an('Se queimou',
`Paciente [trazido por __] com queimadura por [chama / líquido quente (escaldadura) / contato com superfície quente / química (agente: __) / elétrica / explosão] há [ ] h, ocorrida em [ambiente fechado / aberto].
Mecanismo: [ ]. Roupas incendiadas: [ ]. Tempo de exposição: [ ]. Medidas antes da chegada: [resfriamento com água por __ min / pasta de dente, manteiga, pó de café (não recomendados) / nenhuma].
Inalação: [ambiente fechado, perda de consciência, rouquidão, tosse com escarro escuro, dispneia, estridor: nega / __].
Trauma associado (queda, explosão, fuga): [ ]. Dor [ ]/10.
Peso: [ ] kg. Vacina antitetânica: [ ]. Em criança/idoso/vulnerável: história compatível com o padrão da lesão? [ ] (pensar em maus-tratos).`,
`${EF_CV}
${EF_AR}
${EF_ABD}
${EF_NEU}
VIA AÉREA: [sem queimadura de face, vibrissas preservadas, sem fuligem em orofaringe, voz normal, sem estridor].
QUEIMADURAS: [descrever local, profundidade e extensão]
- 1º grau (eritema): [locais], não entra no cálculo
- 2º grau superficial (bolhas, leito rosado e doloroso): [locais]
- 2º grau profundo (leito pálido, menos doloroso): [locais]
- 3º grau (branco/carbonizado, indolor): [locais]
SCQ (2º e 3º graus): [ ]% pela [regra dos nove / Lund-Browder / palma da mão]. Circunferencial: [não / membro __, tórax]. Áreas especiais (face, mãos, pés, genitais/períneo, grandes articulações): [ ].
Perfusão distal das extremidades queimadas: [preservada].`,
`1. Queimadura de [2º/3º] grau por [agente], [ ]% SCQ, acometendo [ ]
2. [Lesão inalatória / intoxicação por CO: suspeita]
3. [Pequeno / médio / grande queimado]`,
`- [O2 100% em máscara não reinalante se suspeita de inalação/CO]
- [Acesso venoso calibroso em pele íntegra; Ringer lactato pela fórmula (meta de diurese __ mL/h)]
- [Sonda vesical de demora para controle de diurese]
- Analgesia; profilaxia antitetânica [conforme cartão]
- [Limpeza e curativo com sulfadiazina de prata 1%]
- [Exames: hemograma, eletrólitos, função renal, gasometria com lactato, carboxi-hemoglobina, CPK, ECG]
- [Contato com centro de queimados / regulação]`)},

an_afog:{g:'resp',t:'Afogamento',code:'T75.1 · W65–W74',rel:[['cd_afog','Conduta afogamento'],['rx_afog','Prescrição']],body:an('Se afogou',
`Paciente [trazido por __] após afogamento em [piscina / mar / rio / lago / banheira / balde] há [ ] min/h. Tempo estimado de submersão: [ ] min. Água [doce / salgada], temperatura [fria / ambiente].
Resgate por [ ]; ao resgate: [consciente / inconsciente], [respirava / não respirava], [tinha pulso / PCR]. RCP no local: [não / sim, por __ min, com retorno da circulação em __ min]. Vômitos: [ ].
Sintomas atuais: [tosse, espuma em boca/nariz, dispneia, dor torácica, confusão, sonolência, convulsão].
Circunstância: [mergulho em água rasa (risco de trauma raquimedular) / uso de álcool ou drogas / convulsão, síncope ou arritmia prévia (pode ter causado o afogamento) / tentativa de autoextermínio / criança sem supervisão].`,
`AR: [MV+ bilateralmente, sem RA / estertores em __ campos / espuma em vias aéreas], FR [ ] irpm, SpO2 [ ]%, esforço respiratório [ ].
${EF_CV}
${EF_ABD}
NEURO: Glasgow [ ], pupilas [ ]. [Sem déficits focais].
Temperatura central/axilar: [ ] °C ([normotermia / hipotermia leve 32–35 °C / moderada 28–32 °C / grave < 28 °C]).
Coluna cervical: [sem dor ou déficit (não há indicação de imobilização se não houve mergulho ou trauma)].
Classificação de Szpilman: grau [resgate / 1 / 2 / 3 / 4 / 5 / 6].`,
`1. Afogamento grau [ ] de Szpilman
2. [Hipotermia __]
3. [Pneumonite aspirativa / SDRA]`,
`- [O2 por __ (meta SpO2 ≥ 92%) / VNI / IOT com PEEP]
- [Aquecimento: retirar roupas molhadas, cobertores, fluidos aquecidos]
- [Gasometria arterial, lactato, eletrólitos, glicemia, função renal, CPK, hemograma, RX de tórax, ECG]
- [Observação por no mínimo 6–8 h / internação / UTI]`)},

an_eletr:{g:'osteo',t:'Choque elétrico e raio',code:'T75.0 · T75.4 · W85–W87 · X33',rel:[['cd_eletr','Conduta lesão elétrica'],['rx_eletr','Prescrição']],body:an('Levou choque',
`Paciente [trazido por __] após choque elétrico há [ ] h, por [rede doméstica 127/220 V (baixa voltagem) / rede de alta tensão ≥ 1.000 V / raio], corrente [alternada / contínua], ao [ ].
Mecanismo: [contato com fio / tomada / equipamento / arco voltaico / raio direto ou indireto]. Tempo de contato: [ ]. Ficou "preso" à fonte (tetania): [ ]. Arremessado ou queda: [não / sim, altura __ m].
Perda de consciência: [ ]. PCR/RCP no local: [ ]. Sintomas: [palpitação, dor torácica, dispneia, dor muscular, fraqueza, parestesias, urina escura, alteração visual ou auditiva].
Gestante: [não / sim, __ semanas: avaliar o feto].`,
`${EF_CV} Ritmo [regular].
${EF_AR}
${EF_ABD}
NEURO: Glasgow [ ], pupilas [ ], força e sensibilidade [ ] (pesquisar déficits periféricos e medulares).
LESÕES: ponto de entrada em [ ] e de saída em [ ], [ ]% SCQ. Queimaduras por arco/chama: [ ]. Figuras de Lichtenberg (raio): [ ].
Compartimentos dos membros: [flácidos / tensos, dor à extensão passiva]. Pulsos distais: [ ].
Otoscopia (raio/explosão): [membranas timpânicas íntegras]. Olhos: [ ].
Coluna e trauma associado: [ ].
ECG: [ritmo sinusal, sem alterações / __].`,
`1. Lesão elétrica por [baixa / alta voltagem / raio]
2. [Queimadura de __ grau em pontos de entrada/saída]
3. [Rabdomiólise / arritmia / síndrome compartimental: suspeita]`,
`- ECG [e monitorização cardíaca por 24 h, se indicada]
- [CPK, mioglobina/EAS (sangue no fita sem hemácias), eletrólitos, função renal, troponina]
- [Hidratação com Ringer lactato para diurese 1–1,5 mL/kg/h se rabdomiólise ou alta voltagem]
- [Avaliação da cirurgia/ortopedia se síndrome compartimental]
- Profilaxia antitetânica [conforme cartão]`)}
});

/* ---------- Prescrições ---------- */
Object.assign(RX,{
rx_queim:{tipo:'h',g:'osteo',t:'Queimaduras',rec:RH,rel:[['cd_queim','Conduta queimaduras'],['parkland','Hidratação do queimado']],items:[
 {t:'Grande queimado adulto: hidratação (ATLS)',rx:`1. Dieta zero; cabeceira a 30°
2. O2 conforme SpO2 (100% em máscara não reinalante se suspeita de inalação/CO)
3. Ringer lactato — 2 mL × peso (kg) × %SCQ (2º e 3º graus) nas primeiras 24 h, EV
   Metade nas primeiras 8 h contadas do momento da queimadura; metade nas 16 h seguintes
   (ex.: 70 kg e 30%: 4.200 mL/24 h → 262 mL/h nas 8 primeiras horas e 131 mL/h nas 16 seguintes)
4. Sonda vesical de demora; diurese horária. Meta: 0,5 mL/kg/h (30–50 mL/h no adulto)
   Diurese abaixo da meta: aumentar a infusão em 1/3; acima de 1 mL/kg/h: reduzir 1/3
5. Morfina 10 mg/mL — 1 mL + 9 mL de AD (1 mg/mL): 2 a 4 mL EV a cada 5–10 min até controle da dor
6. Dipirona 1 g — 1 ampola EV de 6/6 h
7. Omeprazol 40 mg EV 1x/dia (profilaxia de úlcera de estresse)
8. Profilaxia antitetânica conforme esquema vacinal
9. Aquecer o ambiente; cobrir com lençóis limpos e secos`,n:'Fórmula de Parkland clássica usa 4 mL/kg/%; o ATLS 10ª ed. recomenda iniciar com 2 mL e titular pela diurese. Não usar antibiótico profilático sistêmico nem corticoide.'},
 {t:'Criança queimada (≥ 10% SCQ): hidratação',rx:`1. Ringer lactato — 3 mL × peso (kg) × %SCQ nas primeiras 24 h, EV
   Metade nas primeiras 8 h; metade nas 16 h seguintes
   (ex.: 20 kg e 20%: 1.200 mL/24 h → 75 mL/h nas 8 primeiras horas e 38 mL/h depois)
2. MAIS soro de manutenção com glicose 5% (Holliday-Segar) se < 30 kg
   (ex.: 20 kg = 1.500 mL/dia ≈ 62 mL/h)
3. Glicemia capilar de 4/4 h
4. Sonda vesical; meta de diurese 1 mL/kg/h
5. Morfina 0,05–0,1 mg/kg EV lento (dose máx. inicial 4 mg), repetir conforme dor
6. Dipirona 15–25 mg/kg EV de 6/6 h`,n:'Hidratação venosa no adulto se SCQ ≥ 20%, na criança se ≥ 10% (MS). Pesar a criança.'},
 {t:'Pequeno queimado: analgesia e curativo no PS',rx:`1. Dipirona 1 g — 1 ampola EV ou Tramadol 50 mg EV em 100 mL de SF 0,9% se dor intensa
   (criança: dipirona 15–25 mg/kg)
2. Resfriar com água corrente em temperatura ambiente por até 20 min (se < 3 h da queimadura); não usar gelo
3. Limpeza com água e clorexidina degermante 2% ou sabão neutro; enxaguar com SF 0,9%
4. Bolhas: manter íntegras as pequenas; desbridar as rotas ou grandes e tensas
5. Sulfadiazina de prata 1% creme em camada fina + gaze + atadura (não usar na face)
   Face: vaselina sólida ou hidratante, sem oclusão
6. Profilaxia antitetânica conforme esquema vacinal`,n:'Sulfadiazina evitada em gestante a termo, RN < 2 meses e alergia a sulfa: usar curativo com hidrocoloide, alginato ou vaselina.'},
 {t:'Inalação de fumaça, monóxido de carbono e cianeto',rx:`1. O2 100% em máscara não reinalante 15 L/min (ou via IOT) até carboxi-hemoglobina < 3–5% e sem sintomas
2. IOT precoce se: estridor, rouquidão progressiva, queimadura de face extensa, fuligem em orofaringe com desconforto, Glasgow ≤ 8
   Usar tubo calibroso (≥ 8,0 no adulto)
3. Suspeita de cianeto (incêndio em local fechado + lactato > 8 mmol/L, coma, choque):
   Hidroxocobalamina 5 g EV em 15 min (criança 70 mg/kg); pode repetir 5 g
4. Gasometria arterial com lactato e carboxi-hemoglobina; ECG; troponina`,n:'A oximetria de pulso é falsamente normal na intoxicação por CO. Considerar câmara hiperbárica: COHb > 25% (> 15% na gestante), perda de consciência, déficit neurológico, isquemia miocárdica.'}]},

rx_alta_queim:{tipo:'a',g:'osteo',t:'Queimadura (alta)',rec:RS,rel:[['cd_queim','Conduta queimaduras']],items:[
 {t:'Pequeno queimado: curativo domiciliar',rx:`USO TÓPICO
1. Sulfadiazina de prata 1% creme ———— 1 bisnaga
   Lavar a ferida com água corrente e sabão neutro, secar com cuidado e aplicar camada fina 1 vez ao dia. Cobrir com gaze e atadura.

USO ORAL
2. Dipirona 500 mg ———— 1 caixa
   Tomar 1 a 2 comprimidos de 6/6 h se dor.
3. Paracetamol 750 mg ———— 1 caixa
   Tomar 1 comprimido de 6/6 h se dor persistente, intercalando com a dipirona.

ORIENTAÇÕES
- Não estourar bolhas; não usar pasta de dente, manteiga, pó de café ou gelo
- Manter o membro elevado
- Retornar à unidade em 24–48 h para troca do curativo
- Retornar antes se febre, secreção purulenta, vermelhidão que se espalha ou piora da dor
- Após cicatrizar: hidratante e protetor solar na área por 6 a 12 meses`,n:'Face: vaselina ou hidratante em vez de sulfadiazina. Criança: dipirona 15–25 mg/kg e paracetamol 10–15 mg/kg/dose.'}]},

rx_afog:{tipo:'h',g:'resp',t:'Afogamento',rec:RH,rel:[['cd_afog','Conduta afogamento']],items:[
 {t:'Grau 2 (pouca espuma, estertores em alguns campos)',rx:`1. Dieta oral após melhora
2. O2 por cateter nasal 5 L/min; meta SpO2 ≥ 92%
3. Aquecimento: retirar roupas molhadas, cobertores
4. Monitorização: SpO2, FC, FR, PA
5. RX de tórax, gasometria arterial
6. Observação por 6 a 24 h; alta se assintomático, SpO2 normal em ar ambiente e exame normal`,n:'Graus resgate e 1 (tosse sem espuma, ausculta normal) podem ser liberados após avaliação, sem necessidade de O2.'},
 {t:'Graus 3 e 4 (edema pulmonar ± hipotensão)',rx:`1. Dieta zero; cabeceira a 30°
2. O2 15 L/min em máscara não reinalante; VNI (CPAP/BiPAP) se consciente e colaborativo
3. IOT se SpO2 < 92% com O2, Glasgow ≤ 8 ou esforço importante. VM protetora:
   VC 6 mL/kg de peso predito, PEEP inicial 5–10 cmH2O (titular), platô ≤ 30
4. Hipotensão (grau 4): Ringer lactato ou SF 0,9% 500 mL EV (criança 10–20 mL/kg) aquecido; reavaliar
   Persistindo: Noradrenalina 4 mg/4 mL — 4 ampolas + 234 mL de SG 5% (64 mcg/mL), iniciar 0,05–0,1 mcg/kg/min
5. Sonda nasogástrica aberta (distensão gástrica por água deglutida)
6. Aquecimento ativo se hipotermia (fluidos aquecidos a 38–42 °C, manta térmica)
7. Exames: gasometria com lactato, eletrólitos, glicemia, função renal, CPK, hemograma, RX de tórax, ECG
8. Internação em UTI`,n:'Não usar diurético para o edema pulmonar, nem corticoide. Antibiótico só se pneumonia (febre persistente, infiltrado novo após 48 h) ou água muito contaminada. Não é preciso tratar diferente água doce e salgada.'}]},

rx_eletr:{tipo:'h',g:'osteo',t:'Lesão elétrica',rec:RH,rel:[['cd_eletr','Conduta lesão elétrica']],items:[
 {t:'Alta voltagem ou rabdomiólise',rx:`1. Monitorização cardíaca contínua por 24 h
2. Ringer lactato — 4 mL × peso (kg) × %SCQ nas primeiras 24 h (metade nas primeiras 8 h)
   Se pigmentúria (urina escura): aumentar até diurese de 1–1,5 mL/kg/h (≈ 100 mL/h no adulto) até a urina clarear
3. Sonda vesical de demora; diurese horária
4. Morfina 10 mg/mL — 1 mL + 9 mL de AD (1 mg/mL): 2 a 4 mL EV a cada 5–10 min se dor
5. Dipirona 1 g — 1 ampola EV de 6/6 h
6. Profilaxia antitetânica conforme esquema vacinal
7. Curativo das queimaduras de entrada e saída com sulfadiazina de prata 1%
8. Exames: ECG seriado, CPK de 6/6–12/12 h, eletrólitos (K), função renal, EAS, troponina se alteração no ECG ou dor torácica, gasometria
9. Avaliar compartimentos dos membros de 2/2 h (dor, tensão, parestesia)`,n:'A extensão da queimadura cutânea subestima a lesão muscular profunda: guiar a hidratação pela diurese. Fasciotomia/escarotomia pela cirurgia se síndrome compartimental.'},
 {t:'Baixa voltagem, assintomático',rx:`1. ECG de 12 derivações
2. Exame das lesões de entrada e saída; curativo se necessário
3. Profilaxia antitetânica conforme esquema vacinal
4. Alta se ECG normal, sem perda de consciência, sem queimaduras significativas e sem outras lesões`,n:'Não precisa de monitorização nem enzimas se assintomático com ECG normal após choque doméstico (< 1.000 V).'}]}
});

/* ---------- Condutas ---------- */
Object.assign(CD,{
cd_queim:{g:'osteo',t:'Queimaduras',src:'ATLS 10ª ed. · MS Cartilha para tratamento de emergência das queimaduras 2012 · ABA',k:'queimadura queimado parkland superficie corporal regra dos nove lund browder hidratacao inalacao monoxido carbono cianeto escarotomia quimica escaldadura',rel:[['parkland','Hidratação do queimado'],['rx_queim','Prescrição'],['rx_alta_queim','Receita de alta'],['an_queim','Anamnese'],['cd_eletr','Lesão elétrica']],sec:[
 {h:'Atendimento inicial (XABCDE)',li:['Interromper a queimadura: retirar roupas e adornos; resfriar com água corrente em temperatura ambiente por até 20 min (não gelo; cuidado com hipotermia em grandes áreas e crianças)','A: via aérea. IOT precoce se estridor, rouquidão progressiva, queimadura profunda de face/pescoço, fuligem em orofaringe com sintomas, SCQ > 40–50%, Glasgow ≤ 8. O edema piora nas primeiras 24 h','B: O2 100% se suspeita de inalação ou CO. Queimadura circunferencial de tórax restringindo a ventilação: escarotomia','C: 2 acessos calibrosos (de preferência em pele íntegra). Hipotensão precoce não é da queimadura: procurar trauma associado','D: rebaixamento sugere CO, cianeto, TCE ou hipóxia','E: estimar profundidade e % SCQ; manter aquecido']},
 {h:'Profundidade',rows:[['1º grau','Eritema, dor, sem bolhas. Não entra no cálculo de SCQ'],['2º grau superficial','Bolhas, leito rosado e úmido, muito doloroso. Cicatriza em 2–3 semanas'],['2º grau profundo','Leito pálido ou mosqueado, menos doloroso. Pode precisar de enxerto'],['3º grau','Branco nacarado ou carbonizado, seco, endurecido, indolor. Precisa de enxerto']]},
 {h:'Extensão (% SCQ)',rows:[['Adulto: regra dos nove','Cabeça e pescoço 9% · cada MS 9% · tronco anterior 18% · tronco posterior 18% · cada MI 18% · períneo 1%'],['Lactente (< 1 ano)','Cabeça 18% · cada MS 9% · tronco anterior 18% · posterior 18% · cada MI 14%'],['Criança > 1 ano','A cada ano, cabeça −1% e cada MI +0,5%, até chegar ao adulto (≈ 10 anos). Mais preciso: tabela de Lund-Browder'],['Queimaduras pequenas ou esparsas','Palma da mão do paciente (com os dedos) ≈ 1%']]},
 {h:'Hidratação',li:['Indicada se SCQ (2º e 3º graus) ≥ 20% no adulto ou ≥ 10% na criança','Ringer lactato. ATLS: 2 mL/kg/% no adulto, 3 mL/kg/% na criança, 4 mL/kg/% na lesão elétrica (Parkland clássica: 4 mL/kg/%)','Metade nas primeiras 8 h contadas da hora da queimadura (não da chegada); metade nas 16 h seguintes','Criança < 30 kg: acrescentar soro de manutenção com glicose','A fórmula é só o ponto de partida: titular pela diurese. Meta 0,5 mL/kg/h no adulto, 1 mL/kg/h na criança < 30 kg, 1–1,5 mL/kg/h na lesão elétrica com pigmentúria','Evitar hiperidratação (síndrome compartimental abdominal, edema pulmonar)']},
 {h:'Inalação, CO e cianeto',li:['Suspeitar: incêndio em ambiente fechado, queimadura de face, vibrissas queimadas, escarro carbonáceo, rouquidão','CO: cefaleia, náuseas, confusão, coma. SpO2 falsamente normal: dosar carboxi-hemoglobina na gasometria. O2 100% reduz a meia-vida do CO de ~4–5 h para ~1 h','Câmara hiperbárica (se disponível): COHb > 25% (> 15% em gestante), perda de consciência, déficit neurológico, isquemia miocárdica','Cianeto: lactato > 8 mmol/L, acidose grave, choque ou coma após incêndio fechado → hidroxocobalamina 5 g EV em 15 min (criança 70 mg/kg)']},
 {h:'Cuidados com a ferida',li:['Limpeza com água e clorexidina degermante 2% ou sabão neutro','Bolhas pequenas íntegras podem ser mantidas; desbridar bolhas rotas, grandes ou tensas','Sulfadiazina de prata 1% (exceto face, gestante a termo, RN < 2 meses, alergia a sulfa). Face: vaselina, sem oclusão','Escarotomia se queimadura circunferencial de membro com perda de pulso/perfusão ou de tórax restringindo a ventilação','Profilaxia antitetânica. Sem antibiótico profilático sistêmico']},
 {h:'Queimadura química',li:['Retirar roupas contaminadas e escovar o pó seco antes de molhar','Irrigação abundante com água corrente por 20–30 min ou mais (álcalis: até normalizar o pH da pele)','Não tentar neutralizar com ácido ou base (reação exotérmica)','Olhos: irrigar com SF 0,9% por no mínimo 30 min (álcalis: até 1–2 h), checar pH, avaliação oftalmológica','Ácido fluorídrico: gluconato de cálcio gel 2,5% tópico; risco de hipocalcemia grave']},
 {h:'Grande queimado e transferência (MS)',li:['Grande queimado: 2º grau > 20% SCQ no adulto (> 10% em < 12 anos) ou 3º grau > 10% no adulto (> 5% em < 12 anos)','Também: queimadura de face, mãos, pés, períneo/genitais, grandes articulações; circunferencial; elétrica; química; inalatória; politrauma ou comorbidade grave associada','Encaminhar a centro de referência em queimados pela regulação, após estabilização (via aérea, acessos, hidratação iniciada, SVD, analgesia)','Criança ou idoso com lesão incompatível com a história: notificar suspeita de maus-tratos']}]},

cd_afog:{g:'resp',t:'Afogamento',src:'Szpilman 1997 · SOBRASAM · AHA 2020/ERC 2021 (afogamento)',k:'afogamento submersao szpilman espuma hipotermia rcp piscina mar agua',rel:[['rx_afog','Prescrição'],['an_afog','Anamnese']],sec:[
 {h:'Classificação de Szpilman',rows:[['Resgate','Sem tosse nem espuma. Avaliar e liberar no local'],['Grau 1','Tosse sem espuma; ausculta normal. Repouso, aquecimento, sem O2. Liberar'],['Grau 2','Pouca espuma em boca/nariz; estertores em alguns campos. O2 5 L/min por cateter; observar 6–24 h'],['Grau 3','Muita espuma; edema pulmonar agudo; pulso radial presente, sem hipotensão. O2 15 L/min em máscara, VNI ou IOT; UTI'],['Grau 4','Edema pulmonar agudo com hipotensão. O2/VM, volume, vasopressor se necessário; UTI'],['Grau 5','Parada respiratória com pulso. Ventilar até respirar; depois tratar como grau 4'],['Grau 6','PCR. RCP começando pelas ventilações; ACLS']]},
 {h:'PCR por afogamento',li:['A causa é hipóxia: começar com 5 ventilações de resgate (ERC) e manter ventilação de boa qualidade com O2 (ABC)','IOT precoce; aspirar espuma só o necessário, sem interromper ventilação','Não fazer manobra de Heimlich nem tentar "drenar" a água','Ritmo mais comum: assistolia/AESP','Iniciar RCP se submersão < 1 h (ou duração desconhecida); não iniciar se rigidez cadavérica ou decomposição','Hipotermia grave: manter RCP prolongada e aquecer ativamente ("ninguém está morto até estar quente e morto"); se < 30 °C, adiar drogas e espaçar desfibrilação conforme ACLS']},
 {h:'Após o resgate',li:['Coluna cervical: imobilizar só se mergulho em água rasa, trauma evidente ou mecanismo de alto impacto','Hipotermia: retirar roupas molhadas, aquecimento passivo/ativo, fluidos aquecidos','VM protetora com PEEP (o edema é por lesão do surfactante, não por sobrecarga)','Não usar diurético, corticoide ou antibiótico profilático','Água doce x salgada: na prática não muda a conduta','Pesquisar a causa do afogamento: convulsão, síncope, arritmia (QT longo), IAM, trauma, álcool/drogas, autoextermínio, negligência infantil']},
 {h:'Exames',li:['Graus 2 a 6: gasometria arterial com lactato, RX de tórax, eletrólitos, glicemia, função renal, CPK, hemograma, ECG','TC de crânio/coluna se trauma ou rebaixamento sem causa clara','Alcoolemia e toxicológico conforme história']},
 {h:'Alta',li:['Resgate e grau 1: alta após avaliação','Grau 2: observar 6–24 h; alta se assintomático, SpO2 normal em ar ambiente e ausculta normal','Orientar sinais de piora em 24 h (dispneia, tosse persistente, febre)']}]},

cd_eletr:{g:'osteo',t:'Lesão elétrica e raio',src:'ATLS 10ª ed. · AHA 2020 (situações especiais) · MS',k:'choque eletrico queimadura eletrica alta voltagem raio fulguracao rabdomiolise arritmia mioglobinuria sindrome compartimental lichtenberg',rel:[['rx_eletr','Prescrição'],['an_eletr','Anamnese'],['cd_queim','Queimaduras']],sec:[
 {h:'Classificação',rows:[['Baixa voltagem (< 1.000 V)','Rede doméstica. Lesões em geral leves; risco de FV com corrente alternada'],['Alta voltagem (≥ 1.000 V)','Rede de transmissão. Lesão profunda grave (músculo, nervo, vaso) com pele pouco lesada, rabdomiólise, síndrome compartimental, trauma por queda/arremesso'],['Raio','Corrente contínua de altíssima voltagem e curta duração: assistolia/parada respiratória, queimaduras superficiais, figuras de Lichtenberg, rotura timpânica, queratoparalisia']]},
 {h:'Avaliação',li:['Garantir que a fonte foi desligada antes de tocar no paciente','XABCDE; tratar como politrauma (queda, arremesso, contrações tetânicas: fraturas e luxações, inclusive luxação posterior do ombro)','ECG em todos','Procurar pontos de entrada e saída; examinar compartimentos e pulsos distais','A % SCQ subestima a lesão interna']},
 {h:'Monitorização cardíaca por 24 h se',li:['Alta voltagem ou raio','Perda de consciência','ECG inicial alterado ou arritmia','Dor torácica ou troponina elevada','Doença cardíaca prévia','Baixa voltagem, assintomático e ECG normal: alta sem monitorização nem enzimas']},
 {h:'Rabdomiólise e rim',li:['Dosar CPK, K, Cr, EAS (sangue na fita sem hemácias = mioglobina)','Ringer lactato 4 mL/kg/% SCQ como ponto de partida','Se pigmentúria: diurese 1–1,5 mL/kg/h (≈ 100 mL/h no adulto) até a urina clarear','Alcalinização com bicarbonato e manitol: sem benefício comprovado, só conforme protocolo local','Vigiar hipercalemia']},
 {h:'Síndrome compartimental',li:['Dor desproporcional, dor à extensão passiva, tensão do compartimento, parestesia; pulso ausente é sinal tardio','Medir pressão compartimental se disponível','Fasciotomia de urgência pela cirurgia; escarotomia se queimadura circunferencial']},
 {h:'Raio: particularidades',li:['Triagem reversa em múltiplas vítimas: priorizar as que estão em PCR (parada respiratória prolongada após retorno do ritmo é comum)','RCP e ventilação prolongadas; pupilas fixas e dilatadas não indicam morte','Otoscopia e avaliação oftalmológica; seguimento para catarata tardia']},
 {h:'Situações especiais',li:['Gestante: avaliar vitalidade fetal (CTG/USG) mesmo com choque de baixa voltagem','Criança que mordeu fio: queimadura de comissura labial; risco de sangramento da artéria labial em 5–14 dias (orientar compressão e retorno)','Sequelas tardias: neuropatia, catarata, alterações cognitivas']}]}
});

/* ---------- Calculadora: hidratação do queimado (substitui a Parkland fixa em 4 mL) ---------- */
NC.parkland={g:'osteo',t:'Hidratação do queimado (Parkland/ATLS)',code:'mL × kg × %SCQ',f:[{k:'tp',l:'Paciente',o:[['a','Adulto: 2 mL/kg/% (ATLS)'],['a4','Adulto: 4 mL/kg/% (Parkland clássica)'],['c','Criança: 3 mL/kg/% (ATLS)'],['e','Lesão elétrica: 4 mL/kg/%']],v:'a'},{k:'kg',l:'Peso (kg)',v:'70'},{k:'scq',l:'% de superfície corporal queimada (2º e 3º graus)',v:'30'},{k:'h',l:'Horas desde a queimadura',v:'1'}],
 calc:v=>{if(!(v.kg>0&&v.scq>0))return null;const ml={a:2,a4:4,c:3,e:4}[v.tp]||2,tot=ml*v.kg*v.scq,h1=tot/2,rest=Math.max(0.5,8-(v.h||0)),kid=v.tp==='c';
  const meta=kid?'1 mL/kg/h':v.tp==='e'?'1–1,5 mL/kg/h se pigmentúria (até a urina clarear)':'0,5 mL/kg/h';
  const hs=v.kg<=10?v.kg*100:v.kg<=20?1000+(v.kg-10)*50:1500+(v.kg-20)*20;
  const sub=[`Metade (<b>${fmt(h1,0)} mL</b>) nas primeiras 8 h contadas da queimadura: faltam ${fmt(rest,1)} h → <b>${fmt(h1/rest,0)} mL/h</b>.`,`Restante (${fmt(h1,0)} mL) nas 16 h seguintes: <b>${fmt(h1/16,0)} mL/h</b>.`,`Titular pela diurese: meta <b>${meta}</b> (${fmt((kid?1:0.5)*v.kg,0)} mL/h para ${fmt(v.kg,0)} kg).`];
  if(kid&&v.kg<30)sub.push(`Criança < 30 kg: somar soro de manutenção com glicose 5% (Holliday-Segar): <b>${fmt(hs/24,0)} mL/h</b> (${fmt(hs,0)} mL/dia).`);
  if(!kid&&v.scq<20||kid&&v.scq<10)sub.push('SCQ abaixo do limiar de hidratação venosa formal (≥ 20% no adulto, ≥ 10% na criança).');
  return {cls:'',big:fmt(tot,0)+' <small>mL de Ringer lactato em 24 h</small>',sub,line:`Hidratação do queimado (${ml} mL/kg/%): ${fmt(tot,0)} mL de RL em 24 h (${fmt(h1,0)} mL nas primeiras 8 h).`}}};
