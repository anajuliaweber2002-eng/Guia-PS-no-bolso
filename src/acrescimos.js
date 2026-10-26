/* Acréscimos (out/2026): meningite, abdome agudo, IVAS, faringoamigdalite, bronquiolite, crupe, tempestade tireoidiana,
   peçonhentos, TCE e subtipos, dissecção de aorta, emergências ginecológicas e obstétricas, trauma completo. */

/* ---------- Anamneses ---------- */
Object.assign(AN,{
an_trauma:{g:'osteo',t:'Trauma (ATLS)',code:'T07 · V89 · W19',rel:[['cd_trauma','Conduta trauma'],['cd_tce','TCE'],['glasgow','Glasgow'],['ccthead','Canadian CT Head'],['nexus','NEXUS'],['parkland','Parkland'],['rx_tetano','Tétano']],body:`${AN_ID}

PASSAGEM DO PRÉ-HOSPITALAR (MIST): Mecanismo [ ] | Injúrias identificadas [ ] | Sinais vitais na cena [ ] | Tratamento realizado [colar, prancha, O2, acesso, volume __, torniquete às __].

QP: "[ ]"

CINEMÁTICA DO TRAUMA: [colisão automóvel x __ / motocicleta x __ / atropelamento / queda de __ m / queda da própria altura / agressão física / FAB (arma branca) / FAF (arma de fogo) / queimadura / afogamento] há [ ] min/h.
[Veículo: posição no veículo __, cinto __, airbag __, deformação/intrusão __, ejeção __, capotamento __, óbito no mesmo veículo __, velocidade estimada __, capacete __.]
[Queda: altura __, superfície __, parte do corpo que bateu primeiro __.]
[Penetrante: local de entrada __ e saída __, tipo de arma __, número de lesões __.]
Perda de consciência: [ ] (duração __). Amnésia: [ ]. Vômitos: [ ]. Convulsão: [ ]. Dor em: [ ].

AMPLE
A — Alergias: [nega]
M — Medicações: [ ] (anticoagulante/antiagregante: [nega / __, última dose __])
P — Passado médico / gestação: [ ] [DUM __]
L — Líquidos e última refeição: [ ]
E — Eventos / ambiente: [uso de álcool ou drogas __, hipotermia __, local fechado/fumaça __]

AVALIAÇÃO PRIMÁRIA (XABCDE)
X: hemorragia exsanguinante [ausente / controlada com compressão / torniquete em __ às __]
A: via aérea [pérvia, fala normal / ruídos, sangue, corpo estranho, fraturas de face], coluna cervical [protegida com colar e imobilização]. [IOT às __ por __.]
B: FR [ ] irpm, SpO2 [ ]% em [ ], tórax [simétrico], expansibilidade [simétrica], traqueia [centrada], MV [+ bilateral sem RA / abolido em __], percussão [ ], enfisema subcutâneo [ ], tórax instável [ ], ferimento aspirativo [ ]. [Intervenção: descompressão / drenagem torácica / curativo de 3 pontas __.]
C: PA [ ]x[ ] mmHg, FC [ ] bpm, TEC [ ] s, pele [corada, quente / pálida, fria, sudoreica], pulsos [ ], sangramento externo [ ], pelve [estável à compressão única / instável → cinta pélvica], e-FAST [negativo / líquido livre em __ / pneumotórax __ / derrame pericárdico __]. Acessos: [2 periféricos calibrosos / intraósseo]. Volume: [ ]. Hemoderivados: [ ]. Ácido tranexâmico: [ ].
D: Glasgow [ ] (AO [ ] RV [ ] RM [ ]), pupilas [isocóricas e fotorreagentes / anisocoria __], movimenta os 4 membros [sim / déficit __], HGT [ ] mg/dL.
E: [despido, aquecido, manta térmica], temperatura [ ] °C. Lesões à exposição: [ ].

AVALIAÇÃO SECUNDÁRIA (CABEÇA AOS PÉS)
Cabeça: [ferimentos, hematoma subgaleal, afundamento __]; sinais de fratura de base [Battle, olhos de guaxinim, hemotímpano, oto/rinorreia: ausentes]
Face: [estabilidade do terço médio, má oclusão, lesões oculares, acuidade visual]
Pescoço: [dor à palpação da linha média __], [enfisema, hematoma em expansão, desvio de traqueia, estase jugular]
Tórax: [escoriações, marca do cinto, dor à palpação de arcos costais __, crepitação]
Abdome: [marca do cinto, distensão, dor/defesa em __, sinais de irritação peritoneal]
Pelve e períneo: [estável], [sangue no meato uretral, hematoma perineal/escrotal]. [Toque retal/vaginal se indicado: __]
Dorso (rolamento em bloco): [dor/degrau em processos espinhosos __, ferimentos]
Extremidades: [deformidades __, fraturas expostas __, pulsos distais __, perfusão, sinais de síndrome compartimental]
Neurológico: [força e sensibilidade por segmento __, nível sensitivo __, priapismo __]

EXAMES
Laboratório: [tipagem e prova cruzada, hemograma, coagulograma, fibrinogênio, gasometria, lactato, BE, Ur, Cr, eletrólitos, CPK, beta-hCG, álcool/toxicológico]
Imagem: [RX de tórax e pelve na sala / TC de crânio __ / TC de coluna cervical __ / TC de tórax, abdome e pelve com contraste __ / RX de __]

LESÕES IDENTIFICADAS
1. [ ]
2. [ ]

HIPÓTESES DIAGNÓSTICAS
1. Politrauma / trauma [contuso / penetrante] por [ ]
2. [Choque hemorrágico classe __] [TCE __] [Fratura de __] [Pneumotórax / hemotórax __]

CONDUTA
- Monitorização, O2, 2 acessos calibrosos, aquecimento, colar cervical até liberação clínica ou por imagem
- [Ácido tranexâmico 1 g EV em 10 min + 1 g em 8 h (até 3 h do trauma)]
- [Hemoderivados / protocolo de transfusão maciça]
- Analgesia: [ ]
- Profilaxia antitetânica: [ ]. [Antibiótico em fratura exposta: cefazolina 2 g EV ± __]
- Avaliação de [cirurgia geral / ortopedia / neurocirurgia / cirurgia vascular / buco-maxilo]
- Reavaliação primária a cada mudança do quadro
${AN_FIM}`},

an_tce:{g:'neuro',t:'TCE',code:'S06',rel:[['cd_tce','Conduta TCE'],['cd_tce_sub','Subtipos de TCE'],['ccthead','Canadian CT Head'],['glasgow','Glasgow']],body:an('Bateu a cabeça',
`Paciente [trazido por __] após [queda da própria altura / queda de __ m / colisão __ / agressão / atropelamento] há [ ] [min/h], com trauma em região [frontal/temporal/occipital/ ].
Perda de consciência: [não / sim, por __ min]. Amnésia: [não / retrógrada __ / anterógrada __]. Intervalo lúcido seguido de piora: [ ].
Sintomas: [cefaleia (intensidade __), vômitos (__ episódios), tontura, sonolência, confusão, irritabilidade, convulsão pós-trauma, alteração visual, déficit motor, saída de líquido claro pelo nariz/ouvido].
Uso de anticoagulante/antiagregante: [nega / __]. Coagulopatia: [ ]. Uso de álcool ou drogas: [ ]. Idade ≥ 65 anos: [ ]. Neurocirurgia prévia / derivação ventricular: [ ].`,
`${EF_CV}
${EF_AR}
${EF_ABD}
NEURO: Glasgow [ ] (AO [ ] RV [ ] RM [ ]), pupilas [isocóricas e fotorreagentes / anisocoria D>E __], força [ ], sensibilidade [ ], pares cranianos [ ], coordenação [ ], marcha [ ]. Rigidez de nuca [ ].
Cabeça: [ferimento corto-contuso de __ cm em __ / hematoma subgaleal / afundamento palpável].
Sinais de fratura de base: [Battle, olhos de guaxinim, hemotímpano, oto/rinorreia: ausentes].
Coluna cervical: [sem dor à palpação da linha média (NEXUS negativo)].
Canadian CT Head: [critérios presentes: __ / sem critérios].`,
`1. TCE [leve (Glasgow 13–15) / moderado (9–12) / grave (≤ 8)]
2. [Concussão / hematoma extradural / hematoma subdural agudo / HSA traumática / contusão / lesão axonal difusa / fratura de crânio __]`,
`- [Colar cervical até liberação]
- [TC de crânio sem contraste]
- Analgesia (evitar sedação que atrapalhe o exame), antiemético
- [Sutura do ferimento + profilaxia antitetânica]
- [Reversão de anticoagulação se sangramento]
- [Grave: IOT, PAS ≥ 100–110, SpO2 ≥ 94%, cabeceira 30°, neurocirurgia]
- [Leve com TC normal: alta com acompanhante e orientações de sinais de alarme por 24 h]`)},

an_aorta:{g:'cv',t:'Suspeita de dissecção de aorta',code:'I71.0',rel:[['addrs','ADD-RS'],['cd_aorta','Conduta dissecção'],['rx_has','Prescrição (dissecção)']],body:an('Dor no peito rasgando',
`Paciente refere dor [torácica anterior / interescapular / dorsal / abdominal] de início [súbito, intensidade máxima desde o início], há [ ] [min/h], tipo [rasgando / lancinante / facada], intensidade [ ]/10, com migração para [dorso / abdome / membros inferiores].
Associada a [síncope, déficit neurológico, dor/frialdade em membro, dor abdominal, oligúria, dispneia, sudorese].
Fatores de risco: [HAS (mal controlada), Marfan/Ehlers-Danlos, história familiar de doença aórtica, valva aórtica bicúspide, aneurisma de aorta conhecido, cirurgia/cateterismo aórtico recente, uso de cocaína, gestação, arterite].`,
`PA: MSD [ ]x[ ] mmHg | MSE [ ]x[ ] mmHg (diferença __ mmHg). [PA em MMII: __.]
ACV: [RCR 2T, BNF / sopro diastólico aórtico (insuficiência aórtica) / abafamento de bulhas], turgência jugular [ ].
Pulsos: radiais [simétricos / assimétricos], femorais [ ], pediosos [ ].
${EF_AR}
${EF_ABD} [Massa pulsátil: __.]
${EF_NEU}
ECG: [ ]. RX de tórax: [mediastino alargado __].
ADD-RS: [ ] pontos.`,
`1. Dissecção aguda de aorta [Stanford A / Stanford B / a esclarecer]
2. [Diagnóstico diferencial: SCA, TEP, pericardite, ruptura de aneurisma]`,
`- Monitorização, 2 acessos calibrosos, tipagem
- Analgesia com morfina
- Betabloqueador EV (meta FC < 60 bpm) e depois vasodilatador (meta PAS 100–120 mmHg)
- NÃO dar AAS, antiagregante ou anticoagulante até afastar dissecção
- Angio-TC de aorta total [ou ECO transesofágico se instável]
- Avaliação imediata da cirurgia cardiovascular / vascular
- Vaga em UTI`)},

an_sangvag:{g:'mulher',t:'Sangramento vaginal / 1º trimestre',code:'O00–O08 · N93',rel:[['cd_ectop','Gravidez ectópica'],['cd_abort','Abortamento'],['cd_sua','Sangramento uterino anormal'],['rx_obst','Prescrições obstétricas']],body:an('Sangramento',
`Paciente refere sangramento vaginal há [ ] [horas/dias], em [pequena / moderada / grande] quantidade ([__ absorventes/hora], [coágulos], [eliminação de restos/tecido]), associado a [cólica em baixo ventre / dor em fossa ilíaca __ / dor no ombro / tontura / síncope / febre / corrimento fétido].
DUM: [ ] (IG estimada [ ] semanas). Atraso menstrual: [ ]. Teste de gravidez: [ ]. USG prévia nesta gestação: [ ].
G[ ]P[ ]A[ ]. Gestação ectópica prévia: [ ]. DIU / laqueadura / reprodução assistida: [ ]. DIP prévia: [ ]. Manipulação uterina / uso de medicações abortivas: [ ]. Tipagem sanguínea / Rh: [ ].
[Não gestante: padrão menstrual habitual __, uso de anticoncepcional/anticoagulante __, sangramento pós-coito __, menopausa __.]`,
`${EF_CV} [Índice de choque (FC/PAS): __.]
${EF_AR}
ABD: [plano, flácido, doloroso em hipogástrio / FI __], [sinais de irritação peritoneal __], [útero palpável __].
Especular: [sangramento [ativo / em pequena quantidade] proveniente do orifício externo do colo], colo [fechado / pérvio], [restos ovulares no canal], [lesões de colo/vagina __].
Toque: colo [fechado / pérvio], útero [compatível com __ semanas], anexos [livres / massa / dor], dor à mobilização do colo [ ].`,
`1. [Ameaça de aborto / aborto [incompleto / completo / inevitável / retido / infectado] / gravidez ectópica [íntegra / rota] / gravidez de localização desconhecida / doença trofoblástica / sangramento uterino anormal]
2. [Rh __]`,
`- Acesso venoso, [estabilização se instável]
- Beta-hCG quantitativo, hemograma, tipagem ABO/Rh, [coagulograma]
- USG transvaginal
- [Imunoglobulina anti-D se Rh negativo]
- [Esvaziamento uterino (AMIU/curetagem) / misoprostol / conduta expectante]
- [Avaliação da ginecologia / obstetrícia]`)},

an_gest:{g:'mulher',t:'Gestante no PS',code:'O · Z33',rel:[['cd_pe','Pré-eclâmpsia'],['cd_sang2','Sangramento 2ª metade'],['cd_hpp','Hemorragia pós-parto'],['rx_obst','Prescrições obstétricas']],body:an('[ ]',
`Gestante, G[ ]P[ ]A[ ], IG [ ] semanas por [DUM __ / USG de __ semanas], com [ ] consultas de pré-natal, refere [ ] há [ ].
Movimentos fetais: [presentes / diminuídos / ausentes]. Perdas vaginais: [nega / sangue __ / líquido claro __ (horário __) / corrimento]. Contrações: [nega / __ em 10 min, duração __]. Dor abdominal: [ ].
Sintomas de pré-eclâmpsia: [nega cefaleia, escotomas, dor epigástrica/em hipocôndrio D, edema súbito]. Sintomas urinários: [ ]. Febre: [ ].
Comorbidades na gestação: [HAS crônica / DMG / pré-eclâmpsia anterior / anemia / ITU __]. Tipagem: [ ]. Sorologias: [ ]. Medicações: [ ].`,
`PA: [ ]x[ ] mmHg (sentada, após repouso) | 2ª medida [ ]x[ ]
${EF_CV}
${EF_AR}
Obstétrico: AU [ ] cm, dinâmica uterina [ ] contrações em 10 min, tônus uterino [normal / hipertonia], BCF [ ] bpm, apresentação [cefálica], [Especular: __]. [Toque (se sem sangramento ou placenta prévia afastada): colo __ cm, __% apagado, bolsa __.]
MMII: edema [ ]. Reflexos patelares: [ ].
${EF_NEU}`,
`1. Gestação de [ ] semanas
2. [Pré-eclâmpsia [com/sem] sinais de gravidade / trabalho de parto [prematuro] / rotura prematura de membranas / DPP / placenta prévia / ITU / pielonefrite / hiperêmese]`,
`- [Avaliação obstétrica / transferência para maternidade de referência]
- [Exames: hemograma, plaquetas, Cr, TGO, TGP, LDH, bilirrubinas, ácido úrico, EAS/relação proteína-creatinina, tipagem]
- [Cardiotocografia / USG obstétrica]
- [Sulfato de magnésio / anti-hipertensivo / corticoide para maturação pulmonar (24–34 semanas)]
- Decúbito lateral esquerdo`)}
});

/* ---------- Prescrições ---------- */
Object.assign(RX,{
rx_menin:{tipo:'h',g:'neuro',t:'Meningite',rec:RH,rel:[['cd_menin','Conduta meningite'],['an_menin','Anamnese']],items:[
 {t:'Meningite bacteriana: adulto',rx:`1. Precaução de gotículas por 24 h após o início do antibiótico
2. Dexametasona 10 mg — EV 15–20 min antes ou junto com a 1ª dose do antibiótico; manter de 6/6 h por 4 dias
3. Ceftriaxona 2 g — EV de 12/12 h
4. > 50 anos, imunossuprimido, etilista ou gestante: + Ampicilina 2 g EV de 4/4 h (Listeria)
5. Suspeita de pneumococo resistente / pós-neurocirurgia / TCE penetrante: + Vancomicina 15–20 mg/kg EV de 8/8–12/12 h
6. Dipirona 1 g EV de 6/6 h se febre ou dor; ondansetrona 8 mg EV se vômitos
7. Fenitoína ou levetiracetam se convulsão (ver crise convulsiva)`,n:'Duração: meningococo 7 dias; Haemophilus 7–10; pneumococo 10–14; Listeria ≥ 21. Suspender a dexametasona se não for pneumocócica. Notificação imediata.'},
 {t:'Meningite bacteriana: criança',rx:`> 1 mês:
1. Dexametasona 0,15 mg/kg — EV de 6/6 h por 4 dias (1ª dose antes ou junto do antibiótico)
2. Ceftriaxona 100 mg/kg/dia (máx. 4 g/dia) — EV dividido de 12/12 h (ou 1 vez ao dia)
< 1 mês:
1. Ampicilina 50 mg/kg/dose EV (6/6 h a 8/8 h conforme idade) + Cefotaxima 50 mg/kg/dose EV (ou gentamicina 4–5 mg/kg/dia)`,n:'Hidratação de manutenção sem restrição se sem choque. Não atrasar o antibiótico pela punção.'},
 {t:'Meningoencefalite herpética (suspeita)',rx:`1. Aciclovir 10 mg/kg — EV de 8/8 h, diluído em SF 0,9% 100–250 mL, em 1 h, por 14–21 dias
2. Hidratação adequada (risco de nefrotoxicidade)`,n:'Suspeitar: febre + alteração de comportamento, confusão, convulsão, sinais focais temporais. Ajustar pela função renal.'},
 {t:'Quimioprofilaxia de contatos (meningococo)',rx:`Adulto:
1. Rifampicina 300 mg ...... 4 cápsulas
   Tomar 2 cápsulas (600 mg) de 12 em 12 horas por 2 dias.
   ou Ciprofloxacino 500 mg: 1 comprimido dose única
   ou Ceftriaxona 250 mg IM dose única (gestante)
Criança:
   Rifampicina 10 mg/kg/dose (máx. 600 mg) de 12/12 h por 2 dias (< 1 mês: 5 mg/kg/dose)
   ou Ceftriaxona 125 mg IM dose única (< 12 anos)`,n:'Contatos íntimos (mesmo domicílio, creche, quem teve contato com secreções) idealmente em até 48 h. Haemophilus: rifampicina 20 mg/kg/dia (máx. 600 mg) 1 vez ao dia por 4 dias. Rifampicina deixa urina e lágrima alaranjadas e reduz o efeito do anticoncepcional.'}]},

rx_abdag:{tipo:'h',g:'dig',t:'Abdome agudo',rec:RH,rel:[['cd_abdag','Conduta abdome agudo'],['an_abdag','Anamnese']],items:[
 {t:'Prescrição inicial do abdome agudo',rx:`1. Dieta zero
2. Ringer lactato ou SF 0,9% 1.000 mL — EV aberto se hipovolemia; depois manutenção 30 mL/kg/dia
3. Dipirona 1 g + água destilada 8 mL — EV de 6/6 h
4. Morfina 2–4 mg EV se dor intensa (repetir conforme ver analgesia)
5. Ondansetrona 8 mg EV de 8/8 h se náusea
6. Omeprazol 40 mg EV 1 vez ao dia
7. Sonda nasogástrica aberta em frasco se obstrução ou vômitos incoercíveis
8. Sonda vesical de demora e diurese horária se instável
9. Avaliação da cirurgia geral`,n:'Analgesia adequada não mascara o diagnóstico. Corrigir K e Na antes de cirurgia.'},
 {t:'Apendicite, colecistite ou diverticulite complicada',rx:`1. Ceftriaxona 2 g — EV 1 vez ao dia
2. Metronidazol 500 mg — EV de 8/8 h
   ou Amoxicilina + clavulanato 1 g/200 mg EV de 8/8 h
   Grave, hospitalar ou imunossuprimido: Piperacilina-tazobactam 4,5 g EV de 6/6 h`,n:'Apendicite não complicada: antibiótico profilático na indução (cefazolina 2 g + metronidazol). Colecistite leve: pode dispensar metronidazol. Diverticulite não complicada em imunocompetente: antibiótico pode ser dispensado.'},
 {t:'Colangite aguda',rx:`1. Ceftriaxona 2 g EV 1 vez ao dia + Metronidazol 500 mg EV de 8/8 h
   Grave (Reynolds: choque, confusão): Piperacilina-tazobactam 4,5 g EV de 6/6 h
2. Hidratação, hemoculturas
3. CPRE (drenagem biliar) em 24–48 h; urgente se grave`,n:''},
 {t:'Suspeita de isquemia mesentérica',rx:`1. Dieta zero; ressuscitação volêmica
2. Heparina não fracionada 80 UI/kg EV em bolus + 18 UI/kg/h (se sem contraindicação)
3. Piperacilina-tazobactam 4,5 g EV de 6/6 h
4. Angio-TC de abdome; cirurgia vascular/geral imediata`,n:'Dor desproporcional ao exame físico em idoso com FA ou aterosclerose; lactato pode ser normal no início.'}]},

rx_alta_ivas:{tipo:'a',g:'resp',t:'IVAS e gripe (alta)',rec:RS,rel:[['cd_ivas','Conduta IVAS']],items:[
 {t:'Resfriado comum / IVAS viral (adulto)',rx:`Uso oral
1. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor ou febre.
   ou Paracetamol 750 mg: 1 comprimido de 6 em 6 horas, se dor ou febre.
Uso nasal
2. Soro fisiológico 0,9% ...... 1 frasco
   Aplicar 5 a 10 mL em cada narina, 4 a 6 vezes ao dia.
Orientações: hidratação, repouso, mel para tosse (exceto menores de 1 ano), máscara e higiene das mãos.`,n:'Antibiótico não é indicado. Descongestionante tópico no máximo 3–5 dias (efeito rebote). Evitar anti-histamínico de 1ª geração em idosos.'},
 {t:'Síndrome gripal em grupo de risco: oseltamivir (adulto)',rx:`Uso oral
1. Oseltamivir 75 mg ...... 10 cápsulas
   Tomar 1 cápsula de 12 em 12 horas por 5 dias.`,n:'Grupos de risco: ≥ 60 anos, gestantes e puérperas, < 5 anos, doença crônica, imunossupressão, obesidade grave, indígenas. Iniciar idealmente em 48 h, mas também depois. Ajustar se ClCr 30–60: 30 mg 12/12 h; 10–30: 30 mg 1 vez ao dia.'},
 {t:'Oseltamivir (criança)',rx:`Uso oral
1. Oseltamivir (cápsulas de 30, 45 ou 75 mg; ou suspensão preparada na farmácia) ...... 10 doses
   Dar __ mg de 12 em 12 horas por 5 dias:
   ≤ 15 kg: 30 mg | > 15 a 23 kg: 45 mg | > 23 a 40 kg: 60 mg | > 40 kg: 75 mg
   < 1 ano: 3 mg/kg de 12/12 h (9–11 meses: 3,5 mg/kg)`,n:'A cápsula pode ser aberta e misturada em alimento pastoso doce.'}]},

rx_farin:{tipo:'a',g:'inf',t:'Faringoamigdalite (alta)',rec:RA,rel:[['cd_farin','Conduta faringoamigdalite'],['mcisaac','McIsaac']],items:[
 {t:'Adulto',rx:`Uso oral
1. Amoxicilina 500 mg ...... 30 cápsulas
   Tomar 1 cápsula de 8 em 8 horas por 10 dias.
   ou Uso intramuscular: Benzilpenicilina benzatina 1.200.000 UI, dose única.
2. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor ou febre.`,n:'Alergia não anafilática: cefalexina 500 mg 12/12 h por 10 dias. Anafilática: azitromicina 500 mg/dia por 5 dias ou clindamicina 300 mg 8/8 h por 10 dias.'},
 {t:'Criança',rx:`Uso oral
1. Amoxicilina 250 mg/5 mL (ou 400 mg/5 mL) ...... __ frascos
   Dar __ mL de 12 em 12 horas por 10 dias. (50 mg/kg/dia, máx. 1 g/dose)
   ou Uso intramuscular: Benzilpenicilina benzatina — < 27 kg: 600.000 UI; ≥ 27 kg: 1.200.000 UI, dose única.
2. Paracetamol ou dipirona na dose por peso, se dor ou febre.`,n:'Alergia não anafilática: cefalexina 20 mg/kg/dose 12/12 h (máx. 500 mg) por 10 dias. Anafilática: azitromicina 12 mg/kg/dia (máx. 500 mg) por 5 dias. Use Doses pediátricas.'}]},

rx_bronq:{tipo:'h',g:'crianca',t:'Bronquiolite',rec:RH,rel:[['cd_bronq','Conduta bronquiolite'],['an_bronq','Anamnese']],items:[
 {t:'Bronquiolite internada',rx:`1. Cabeceira elevada a 30°; manipulação mínima
2. Lavagem nasal com SF 0,9% 1–2 mL em cada narina e aspiração de vias aéreas superiores antes das mamadas e se obstrução
3. O2 por cateter nasal ou máscara se SpO2 < 90–92% (alvo ≥ 92%); cateter nasal de alto fluxo se desconforto persistente
4. Dieta: seio materno/fórmula fracionada; se FR > 60–70 ou desconforto importante: SNG
   ou Hidratação EV com soro isotônico (SG 5% + NaCl 0,9%) em volume de manutenção (Holliday-Segar)
5. Antitérmico se febre: dipirona ou paracetamol na dose por peso
6. Monitorização de SpO2, FR e sinais de esforço; vigiar apneia em < 3 meses e prematuros
7. Opcional (internados): Nebulização com NaCl 3% 4 mL de 8/8 h (associar broncodilatador se broncoespasmo)`,n:'Não usar de rotina: salbutamol, adrenalina nebulizada, corticoide, antibiótico, fisioterapia respiratória, RX de tórax. Preparo de NaCl 3%: NaCl 20% 1,5 mL + água destilada 8,5 mL.'},
 {t:'Bronquiolite: alta',rx:`Uso nasal
1. Soro fisiológico 0,9% ...... 1 frasco
   Pingar 1 a 2 mL em cada narina e aspirar antes das mamadas e quando estiver com o nariz entupido.
Uso oral
2. Paracetamol 200 mg/mL ou Dipirona 500 mg/mL — dose por peso, se febre.
Orientações: oferecer mamadas menores e mais frequentes; retornar se cansaço, gemência, pausas na respiração, lábios roxos, recusa alimentar ou menos xixi.`,n:'Reavaliação em 24–48 h. A tosse pode durar até 3–4 semanas.'}]},

rx_crupe:{tipo:'h',g:'crianca',t:'Crupe (laringite viral)',rec:RH,rel:[['cd_crupe','Conduta crupe'],['westley','Westley']],items:[
 {t:'Crupe leve a moderado',rx:`1. Manter a criança calma, no colo do responsável (não agitar, não examinar a garganta à força)
2. Dexametasona 0,15–0,6 mg/kg (máx. 10 mg) — VO, IM ou EV, dose única
   (ex.: 12 kg: 1,8–7,2 mg = 0,45–1,8 mL da ampola de 4 mg/mL)
   ou Prednisolona 1–2 mg/kg VO se dexametasona indisponível
3. Se vômitos e sem acesso: Budesonida 2 mg nebulizada`,n:'Corticoide leva 1–2 h para agir. Alta após observação se sem estridor em repouso.'},
 {t:'Crupe moderado a grave: adrenalina nebulizada',rx:`1. Adrenalina 1 mg/mL (1:1000) — 0,5 mL/kg (máx. 5 mL), pura ou completando 3–5 mL com SF 0,9%, nebulizar com O2 6–8 L/min
   Pode repetir a cada 15–20 min se necessário
2. Dexametasona 0,6 mg/kg (máx. 10 mg) VO/IM/EV, se ainda não recebeu
3. O2 se SpO2 < 92%
4. Observar no mínimo 2–4 h após a última adrenalina (efeito rebote)`,n:'Internar se: necessidade de mais de 2 doses de adrenalina, estridor em repouso persistente, hipoxemia, toxemia, < 6 meses, retorno difícil. Insuficiência respiratória: IOT com tubo 0,5–1 número menor.'}]},

rx_tireo:{tipo:'h',g:'endo',t:'Tempestade tireoidiana',rec:RH,rel:[['cd_tireo','Conduta tempestade tireoidiana'],['burch','Burch-Wartofsky']],items:[
 {t:'Tempestade tireoidiana',rx:`1. Monitorização em UTI; O2; hidratação (SF 0,9% conforme volemia)
2. Propranolol 40 mg — 1,5 a 2 comprimidos (60–80 mg) VO/SNG de 4/4 h (meta FC < 100)
   ou Esmolol 250–500 mcg/kg EV em 1 min, depois 50–100 mcg/kg/min (IC, asma: usar com cautela)
3. Propiltiouracil (PTU) 100 mg — 5 a 10 comprimidos (500–1.000 mg) VO/SNG de ataque; depois 250 mg de 4/4 h
   ou Metimazol 10 mg — 2 comprimidos (20 mg) de 6/6 h
4. Solução de Lugol (iodo) — 8 gotas VO de 6/6 h, iniciar no mínimo 1 h APÓS o antitireoidiano
5. Hidrocortisona 300 mg EV de ataque; depois 100 mg EV de 8/8 h
6. Paracetamol 750 mg VO de 6/6 h + resfriamento externo (NÃO usar AAS)
7. Colestiramina 4 g VO de 6/6 h (opcional, reduz reabsorção hepática)
8. Tratar o desencadeante (infecção, CAD, etc.)`,n:'PTU preferido na tempestade (bloqueia conversão de T4 em T3) e no 1º trimestre da gestação; risco de hepatotoxicidade. Se FA: anticoagular conforme CHA2DS2-VASc. IC grave com baixo débito: evitar betabloqueador em dose alta.'}]},

rx_pecon:{tipo:'h',g:'mental',t:'Animais peçonhentos: soroterapia',rec:RH,rel:[['cd_ofid','Serpentes'],['cd_aracn','Escorpião, aranhas e outros'],['an_pecon','Anamnese']],items:[
 {t:'Administração do soro (qualquer acidente)',rx:`1. Acesso venoso calibroso; monitorização
2. Adrenalina 1 mg/mL, anti-histamínico, corticoide e material de via aérea à beira-leito
3. Soro antiveneno __ — __ ampolas EV, puras ou diluídas em SF 0,9% (1:2 a 1:5), em 20 a 60 min
   (a dose é a MESMA para criança e adulto)
4. Observar reações nas primeiras 2 h: se urticária, broncoespasmo ou hipotensão, suspender a infusão, tratar como anafilaxia e reiniciar mais devagar após melhora
5. Analgesia: dipirona 1 g EV de 6/6 h
6. Profilaxia antitetânica conforme esquema
7. Notificação (SINAN)`,n:'Pré-medicação de rotina não é recomendada. Não usar torniquete, incisão, sucção ou substâncias no local. Soros disponíveis nos polos de referência: consulte o CIATox (0800 722 6001).'},
 {t:'Serpentes: número de ampolas',rx:`Botrópico (jararaca) — SAB ou SABL/SABC:
   Leve: 3 | Moderado: 6 | Grave: 12 ampolas
Laquético (surucucu) — SABL:
   Moderado: 10 | Grave: 20 ampolas
Crotálico (cascavel) — SAC ou SABC:
   Leve: 5 | Moderado: 10 | Grave: 20 ampolas
Elapídico (coral verdadeira) — SAEl:
   10 ampolas (todos considerados potencialmente graves)`,n:'TC (tempo de coagulação) 24 h após o soro: se ainda alterado, dose adicional conforme protocolo. Crotálico: hidratação vigorosa (diurese 1–2 mL/kg/h) contra IRA por rabdomiólise.'},
 {t:'Escorpião, aranhas, lagarta e abelhas: número de ampolas',rx:`Escorpião (Tityus) — SAEsc ou SAAr:
   Leve: sem soro (analgesia) | Moderado: 2–3 | Grave: 4–6 ampolas
Armadeira (Phoneutria) — SAAr:
   Leve: sem soro | Moderado: 2–4 | Grave: 5–10 ampolas
Aranha-marrom (Loxosceles) — SAAr ou SALox:
   Leve: sem soro | Moderado: 5 ampolas e/ou prednisona | Grave (hemólise ou lesão extensa): 10 ampolas + prednisona
Taturana (Lonomia) — SALon:
   Leve: sem soro | Moderado: 5 | Grave: 10 ampolas
Abelhas (múltiplas picadas) — soro antiapílico, onde disponível:
   5–200 picadas: 2 | 201–600: 6 | > 600: 10 ampolas`,n:'Loxosceles: prednisona 40 mg/dia (criança 1 mg/kg/dia) por 5 dias. Escorpião em criança < 7 anos: maior risco, observar 6–12 h.'},
 {t:'Analgesia local (escorpião e armadeira)',rx:`1. Lidocaína 2% sem vasoconstritor — 3–4 mL no adulto (1–2 mL na criança) infiltrada no local da picada; pode repetir até 3 vezes com intervalo de 30–60 min
2. Dipirona 1 g EV (criança: 15–25 mg/kg)
3. Compressas mornas no local`,n:'Dor refratária após 3 infiltrações: considerar opioide (tramadol/morfina) e reavaliar a gravidade.'}]},

rx_obst:{tipo:'h',g:'mulher',t:'Emergências obstétricas e ginecológicas',rec:RH,rel:[['cd_hpp','Hemorragia pós-parto'],['cd_pe','Pré-eclâmpsia'],['cd_abort','Abortamento'],['cd_ectop','Ectópica'],['cd_gineco','Ginecologia']],items:[
 {t:'Hemorragia pós-parto',rx:`1. Chamar ajuda; 2 acessos calibrosos; O2; sonda vesical; massagem uterina bimanual
2. Ocitocina 5 UI EV lento (em 3 min) + Ocitocina 20 UI em SF 0,9% 500 mL — EV a 250 mL/h; manter 125 mL/h por 4 h
3. Ácido tranexâmico 1 g — EV em 10 min (até 3 h do parto); repetir 1 g após 30 min se persistir
4. Se persistir: Metilergometrina 0,2 mg IM, repetir em 20 min (NÃO usar se hipertensão / pré-eclâmpsia)
5. Misoprostol 800 mcg via retal (4 comprimidos de 200 mcg)
6. Ringer lactato aquecido; hemoderivados conforme perda e índice de choque (FC/PAS ≥ 0,9)
7. Refratária: balão de tamponamento intrauterino; traje antichoque; cirurgia`,n:'Lembrar dos 4 Ts: Tônus (70%), Trauma (lacerações), Tecido (restos placentários), Trombina (coagulopatia). Fibrinogênio < 200 mg/dL: crioprecipitado.'},
 {t:'Pré-eclâmpsia grave / eclâmpsia',rx:`1. Sulfato de magnésio (Zuspan): MgSO4 50% 8 mL (4 g) + água destilada 12 mL EV em 15–20 min; depois MgSO4 50% 10 mL + SG 5% 490 mL a 100 mL/h (1 g/h) por 24 h
2. Hidralazina 5 mg EV a cada 20 min se PA ≥ 160x110 (máx. 30 mg) ou Nifedipino 10 mg VO a cada 20–30 min (máx. 30 mg)
3. Gluconato de cálcio 10% 10 mL à beira-leito
4. Sonda vesical; diurese horária; reflexo patelar e FR de 1/1 h
5. Exames: hemograma, plaquetas, Cr, TGO, TGP, LDH, bilirrubinas, ácido úrico, proteinúria`,n:'Ver detalhes em Crise hipertensiva. Parto é o tratamento definitivo: avaliação obstétrica imediata.'},
 {t:'Abortamento infectado',rx:`1. Clindamicina 900 mg EV de 8/8 h + Gentamicina 5 mg/kg EV 1 vez ao dia
   ou Ceftriaxona 2 g EV 1 vez ao dia + Metronidazol 500 mg EV de 8/8 h (± ampicilina)
2. Hidratação; hemoculturas; protocolo de sepse se instável
3. Ocitocina 20 UI em SF 0,9% 500 mL EV
4. Esvaziamento uterino após início do antibiótico (não atrasar)`,n:'Manter antibiótico até 48 h afebril. Imunoglobulina anti-D se Rh negativo.'},
 {t:'Aborto retido / incompleto (preparo com misoprostol)',rx:`Aborto retido < 13 semanas:
1. Misoprostol 200 mcg — 4 comprimidos (800 mcg) via vaginal; pode repetir a cada 3 h (até 3 doses)
Aborto incompleto < 13 semanas:
1. Misoprostol 600 mcg VO ou 400 mcg sublingual, dose única
   ou AMIU / curetagem
2. Analgesia: ibuprofeno 600 mg VO ou dipirona
3. Imunoglobulina anti-D 300 mcg IM se Rh negativo e não sensibilizada`,n:'Uso hospitalar (misoprostol só em ambiente hospitalar no Brasil). ≥ 13 semanas: doses diferentes (FIGO 2023) e avaliação obstétrica.'},
 {t:'Hiperêmese gravídica',rx:`1. Dieta zero inicialmente; depois fracionada conforme tolerância
2. SF 0,9% 1.000 mL + Tiamina 100 mg — EV em 2–4 h (tiamina ANTES de soro glicosado)
3. Depois: SG 5% 500 mL + SF 0,9% 500 mL + KCl 19,1% 10 mL de 8/8 h, conforme eletrólitos
4. Metoclopramida 10 mg EV de 8/8 h ou Ondansetrona 4–8 mg EV de 8/8 h (evitar no 1º trimestre se houver alternativa) ou Dimenidrinato 50 mg EV de 6/6 h
5. Omeprazol 40 mg EV 1 vez ao dia`,n:'Pesquisar cetonúria, eletrólitos, função hepática e TSH. Afastar ITU, mola e gestação múltipla (USG).'},
 {t:'Sangramento uterino anormal agudo (não gestante, estável)',rx:`1. Ácido tranexâmico 250 mg — 4 comprimidos (1 g) VO de 8/8 h por até 5 dias
   ou Ácido tranexâmico 1 g EV de 8/8 h
2. Anticoncepcional combinado (etinilestradiol 30–35 mcg) — 1 comprimido de 8/8 h por 7 dias, depois 1 ao dia
   ou Medroxiprogesterona 10 mg — 2 comprimidos (20 mg) de 8/8 h por 7 dias (se contraindicação a estrogênio)
3. Sulfato ferroso conforme Hb`,n:'Beta-hCG antes. Instável ou refratária: curetagem / histeroscopia. Contraindicação ao estrogênio: trombose, enxaqueca com aura, tabagista > 35 anos, HAS grave.'},
 {t:'Doença inflamatória pélvica (ambulatorial)',rx:`1. Ceftriaxona 500 mg — IM dose única
2. Doxiciclina 100 mg ...... 28 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por 14 dias.
3. Metronidazol 400 mg ...... 28 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por 14 dias.`,n:'Retirar DIU não é obrigatório. Internar se: abscesso tubo-ovariano, gestante, sem melhora em 72 h, intolerância VO, quadro grave. Tratar parcerias. Reavaliar em 72 h.'},
 {t:'Violência sexual: profilaxias (até 72 h)',rx:`1. Levonorgestrel 1,5 mg — 1 comprimido VO dose única (até 5 dias, melhor nas primeiras 72 h)
2. PEP HIV (28 dias): Tenofovir 300 mg + Lamivudina 300 mg (1 comprimido) + Dolutegravir 50 mg (1 comprimido) — VO 1 vez ao dia
3. IST: Ceftriaxona 500 mg IM dose única + Azitromicina 500 mg — 2 comprimidos (1 g) VO dose única + Metronidazol 400 mg — 5 comprimidos (2 g) VO dose única (pode adiar o metronidazol)
4. Hepatite B: vacina se não vacinada (+ imunoglobulina se agressor sabidamente HBsAg+ ou de alto risco)
5. Testes rápidos: HIV, sífilis, hepatites B e C; beta-hCG`,n:'Notificação compulsória; acolhimento; não é necessário boletim de ocorrência para o atendimento. Menor de idade: comunicar Conselho Tutelar. Encaminhar ao serviço de referência.'}]}
});

/* ---------- Condutas ---------- */
Object.assign(CD,{
cd_menin:{g:'neuro',t:'Meningite',src:'MS · Guia de Vigilância em Saúde · IDSA',k:'meningite meningococo pneumococo liquor quimioprofilaxia dexametasona',rel:[['rx_menin','Prescrição'],['ex_lcr','Líquor'],['an_menin','Anamnese']],sec:[
 {h:'Suspeita',li:['Febre + cefaleia + rigidez de nuca + alteração do nível de consciência (a tríade clássica falta em muitos casos)','Petéquias/púrpura: pensar em meningococcemia (emergência, mesmo sem sinais meníngeos)','Lactente: febre, irritabilidade, recusa alimentar, fontanela abaulada, convulsão, hipotonia','Idoso e imunossuprimido: confusão e febre podem ser os únicos sinais']},
 {h:'Ordem das ações',li:['Hemoculturas → dexametasona → antibiótico (em até 1 h da chegada)','TC antes da punção só se: déficit focal, papiledema, convulsão nova, imunossupressão, Glasgow < 10, história de doença do SNC','Punção lombar assim que possível (o antibiótico iniciado há < 4 h pouco altera citologia e bioquímica)','Precaução de gotículas por 24 h','Notificação imediata (telefone) à vigilância epidemiológica']},
 {h:'Antibiótico empírico por idade',rows:[['< 1 mês','Ampicilina + cefotaxima (ou gentamicina)'],['1 mês a 50 anos','Ceftriaxona (± vancomicina se pneumococo resistente)'],['> 50 anos, imunossuprimido, etilista, gestante','Ceftriaxona + ampicilina (Listeria)'],['Pós-neurocirurgia, derivação, TCE penetrante','Vancomicina + cefepime ou meropeném']]},
 {h:'Meningite viral x encefalite',li:['Viral (enterovírus): bom estado geral, LCR linfocítico com glicose normal → suporte','Encefalite (alteração de comportamento, convulsão, déficit focal): aciclovir 10 mg/kg EV 8/8 h empírico até PCR para herpes']},
 {h:'Quimioprofilaxia (meningococo e Haemophilus)',li:['Contatos íntimos: moradores do domicílio, quem dormiu no mesmo ambiente, creche/escola (mesma sala), quem teve contato com secreções orais (beijo, IOT sem proteção)','Até 10 dias após o contato, idealmente em 48 h','O próprio paciente recebe na alta se tratado só com penicilina/ampicilina (ceftriaxona já erradica)','Profissional de saúde só se exposto a secreções sem máscara (IOT, aspiração)']}]},

cd_abdag:{g:'dig',t:'Abdome agudo',src:'SBCD · WSES · ACS',k:'abdome agudo apendicite colecistite colangite diverticulite obstrucao perfuracao isquemia mesenterica aneurisma',rel:[['rx_abdag','Prescrição'],['alvarado','Alvarado'],['an_abdag','Anamnese'],['cd_pancr','Pancreatite']],sec:[
 {h:'Síndromes',rows:[['Inflamatório','Dor progressiva, localizada, febre, leucocitose: apendicite, colecistite, diverticulite, pancreatite, DIP'],['Obstrutivo','Cólica, distensão, vômitos, parada de flatos e fezes, RHA metálicos: bridas, hérnia encarcerada, neoplasia, volvo, fecaloma'],['Perfurativo','Dor súbita e intensa, abdome em tábua, pneumoperitônio: úlcera perfurada, diverticulite perfurada'],['Vascular','Dor desproporcional ao exame, FA/aterosclerose, acidose: isquemia mesentérica; AAA roto (dor + hipotensão + massa pulsátil)'],['Hemorrágico','Dor + choque: gravidez ectópica rota, AAA roto, cisto ovariano hemorrágico, ruptura esplênica/hepática']]},
 {h:'Imagem',rows:[['RX de abdome agudo (deitado, em pé e tórax PA)','Pneumoperitônio, níveis hidroaéreos, distensão de alças'],['USG','Vesícula e vias biliares, gestação/anexos, apendicite em criança e gestante, aorta à beira-leito'],['TC com contraste','Padrão-ouro na maioria dos adultos (apendicite, diverticulite, obstrução, isquemia com angio-TC)']]},
 {h:'Quadros específicos',rows:[['Apendicite','Dor periumbilical que migra para FID, anorexia, febre baixa. Alvarado ≥ 7: cirurgia; 4–6: imagem'],['Colecistite','Dor em HCD > 6 h, Murphy positivo, febre; USG (parede > 4 mm, líquido perivesicular, Murphy ultrassonográfico). Colecistectomia precoce (< 72 h)'],['Colangite','Tríade de Charcot (febre, icterícia, dor em HCD); pêntade de Reynolds (+ confusão e choque). Antibiótico + drenagem biliar'],['Diverticulite','Dor em FIE, febre, idade > 40. TC: Hinchey. Abscesso > 4 cm: drenagem percutânea; peritonite: cirurgia'],['Obstrução','Sinais de estrangulamento (febre, taquicardia, dor contínua, peritonite, lactato alto): cirurgia urgente. Bridas sem sofrimento: SNG + contraste hidrossolúvel'],['Isquemia mesentérica','Dor desproporcional, FA, lactato e D-dímero altos; angio-TC; heparina e cirurgia/endovascular'],['AAA roto','> 60 anos, dor lombar/abdominal + hipotensão: USG à beira-leito, hipotensão permissiva, cirurgia vascular imediata']]},
 {h:'Atenção',li:['Idoso, imunossuprimido, diabético e gestante: quadro atípico, menos dor e febre','Mulher em idade fértil: beta-hCG sempre','Dor abdominal alta: ECG e troponina (IAM inferior)','Analgesia com opioide não atrapalha o diagnóstico']}]},

cd_ivas:{g:'resp',t:'IVAS, gripe e SRAG',src:'MS · Protocolo de tratamento de influenza 2023 · SBP',k:'ivas resfriado gripe influenza covid sindrome gripal srag oseltamivir',rel:[['rx_alta_ivas','Receitas'],['an_ivas','Anamnese'],['cd_farin','Faringoamigdalite']],sec:[
 {h:'Diferenciar',rows:[['Resfriado comum','Coriza, espirros, obstrução nasal, dor de garganta leve, febre baixa ou ausente; 7–10 dias'],['Síndrome gripal','Febre de início súbito + tosse ou dor de garganta + cefaleia, mialgia ou artralgia'],['SRAG','Síndrome gripal + dispneia/desconforto respiratório, SpO2 < 95% em ar ambiente, pressão no tórax ou cianose → internação, oseltamivir, notificação'],['Sinusite bacteriana','> 10 dias sem melhora, piora após melhora inicial, ou febre ≥ 39 °C com secreção purulenta ≥ 3 dias'],['OMA','Otalgia + abaulamento da membrana timpânica']]},
 {h:'Oseltamivir',li:['Indicado em toda SRAG e na síndrome gripal com fator de risco (≥ 60 anos, < 5 anos, gestante/puérpera, doença crônica, imunossupressão, obesidade grave, indígenas)','Iniciar sem esperar exame, idealmente em 48 h (benefício também depois em casos graves)','Duração 5 dias']},
 {h:'Sinais de alarme',li:['Dispneia, SpO2 < 95%, taquipneia, tiragem','Hipotensão, confusão, sonolência','Piora após melhora inicial','Desidratação, recusa alimentar (criança)','Febre persistente > 3–5 dias']},
 {h:'Sintomáticos',li:['Analgésico/antitérmico, lavagem nasal com SF, hidratação','Mel para tosse a partir de 1 ano','Evitar antitussígeno, descongestionante e anti-histamínico em < 2 anos (e de pouca utilidade em crianças maiores)','Antibiótico não indicado em IVAS viral']}]},

cd_farin:{g:'inf',t:'Faringoamigdalite',src:'SBP · IDSA 2012 · MS',k:'faringite amigdalite estreptococo centor mcisaac penicilina benzatina abscesso periamigdaliano',rel:[['mcisaac','McIsaac'],['rx_farin','Receitas'],['an_farin','Anamnese']],sec:[
 {h:'Viral x bacteriana',rows:[['Sugere vírus','Tosse, coriza, rouquidão, conjuntivite, aftas, diarreia; < 3 anos'],['Sugere estreptococo','Febre, exsudato amigdaliano, petéquias em palato, adenomegalia cervical anterior dolorosa, ausência de tosse, 5–15 anos, exantema escarlatiniforme'],['Mononucleose','Adolescente, exsudato, linfonodos cervicais posteriores, esplenomegalia, fadiga; exantema com amoxicilina']]},
 {h:'Decisão (McIsaac)',li:['0–1: sem teste nem antibiótico','2–3: teste rápido/cultura; tratar se positivo (sem teste disponível: decisão clínica)','≥ 4: teste ou antibiótico empírico','Antibiótico até 9 dias do início ainda previne febre reumática']},
 {h:'Tratamento',li:['Penicilina benzatina dose única ou amoxicilina por 10 dias','Alérgicos: cefalexina (não anafilática) ou azitromicina/clindamicina','Analgesia adequada; corticoide em dose única pode reduzir a dor em adultos com dor intensa']},
 {h:'Complicações',li:['Abscesso periamigdaliano: trismo, voz abafada, abaulamento do palato e desvio da úvula → punção/drenagem + amoxicilina-clavulanato ou clindamicina; otorrino','Abscesso retrofaríngeo (criança): rigidez cervical, febre alta → TC, internação','Lemierre: tromboflebite da jugular, êmbolos sépticos pulmonares','Febre reumática e glomerulonefrite pós-estreptocócica']}]},

cd_bronq:{g:'crianca',t:'Bronquiolite',src:'SBP 2017 · AAP 2014',k:'bronquiolite vsr virus sincicial lactente sibilancia',rel:[['rx_bronq','Prescrição'],['an_bronq','Anamnese']],sec:[
 {h:'Diagnóstico (clínico)',li:['Lactente < 2 anos (pico 2–6 meses) com 1º episódio de sibilância','Pródromos de IVAS, depois tosse, taquipneia, tiragem, sibilos e/ou crepitantes','Pico de gravidade entre o 3º e o 5º dia','Exames e RX não são necessários de rotina']},
 {h:'Fatores de risco para gravidade',li:['< 3 meses (apneia)','Prematuridade (< 35 semanas)','Cardiopatia congênita, doença pulmonar crônica, imunodeficiência, doença neuromuscular','Síndrome de Down']},
 {h:'Critérios de internação',li:['SpO2 persistentemente < 90–92%','Desconforto respiratório moderado/grave, FR > 60–70','Apneia, cianose','Ingestão < 50% do habitual ou desidratação','Letargia, toxemia','Fator de risco + piora, ou dificuldade de retorno']},
 {h:'O que funciona e o que não funciona',rows:[['Funciona','Lavagem e aspiração nasal, O2 se hipoxemia, hidratação (SNG ou EV), cateter nasal de alto fluxo nos casos moderados-graves'],['Pode considerar','NaCl 3% nebulizado em internados'],['Não usar de rotina','Salbutamol, adrenalina nebulizada, corticoide, antibiótico, fisioterapia respiratória, RX, hemograma']]}]},

cd_crupe:{g:'crianca',t:'Crupe (laringotraqueíte viral)',src:'SBP · CPS 2018',k:'crupe laringite estridor tosse de cachorro dexametasona adrenalina nebulizada westley epiglotite',rel:[['westley','Westley'],['rx_crupe','Prescrição'],['an_crupe','Anamnese']],sec:[
 {h:'Diagnóstico',li:['6 meses a 3 anos, outono/inverno','Tosse ladrante, rouquidão, estridor inspiratório, piora à noite','Febre baixa, pródromos de IVAS']},
 {h:'Gravidade (Westley)',rows:[['Leve (≤ 2)','Tosse ladrante, sem estridor em repouso → dexametasona VO, alta'],['Moderado (3–5)','Estridor em repouso, retrações leves → dexametasona + adrenalina nebulizada, observar 2–4 h'],['Grave (6–11)','Estridor importante, retrações marcadas, agitação → adrenalina + dexametasona, internação'],['Insuficiência respiratória iminente (≥ 12)','Letargia, cianose, entrada de ar muito diminuída → UTI, via aérea por profissional experiente']]},
 {h:'Diagnósticos diferenciais (não são crupe)',rows:[['Epiglotite','Toxemia, febre alta, sialorreia, disfagia, posição em tripé, sem tosse ladrante → não examinar a garganta, não deitar, via aérea em centro cirúrgico'],['Traqueíte bacteriana','Toxemia, secreção purulenta, sem resposta à adrenalina'],['Corpo estranho','Início súbito com engasgo, sem febre'],['Anafilaxia / angioedema','Urticária, exposição a alérgeno']]}]},

cd_tireo:{g:'endo',t:'Tempestade tireoidiana',src:'ATA 2016 · SBEM',k:'tempestade tireoidiana crise tireotoxica hipertireoidismo graves burch wartofsky propiltiouracil',rel:[['burch','Burch-Wartofsky'],['rx_tireo','Prescrição'],['an_tireo','Anamnese']],sec:[
 {h:'Diagnóstico (clínico)',li:['Tireotoxicose + disfunção orgânica: febre alta, taquicardia/FA, IC, agitação/delirium/coma, diarreia, vômitos, icterícia','Burch-Wartofsky ≥ 45: altamente sugestivo; 25–44: iminente','TSH suprimido com T4 livre/T3 altos (o nível não diferencia tempestade de tireotoxicose simples)','Mortalidade 10–30%: tratar sem esperar exames']},
 {h:'Ordem do tratamento',rows:[['1. Bloquear efeitos adrenérgicos','Propranolol (também reduz conversão T4→T3) ou esmolol'],['2. Bloquear a síntese','PTU (preferido) ou metimazol'],['3. Bloquear a liberação','Iodo (Lugol) 1 h DEPOIS do antitireoidiano'],['4. Reduzir conversão e tratar insuficiência adrenal relativa','Hidrocortisona'],['5. Suporte e desencadeante','Resfriamento, paracetamol, hidratação, tratar infecção/CAD/IAM, UTI']]},
 {h:'Atenção',li:['Evitar AAS (desloca hormônio da proteína carreadora)','Amiodarona e contraste iodado podem precipitar','Refratária: plasmaférese ou tireoidectomia de urgência','Lembrar do coma mixedematoso (o oposto): hipotermia, bradicardia, rebaixamento → levotiroxina EV + hidrocortisona']}]},

cd_ofid:{g:'mental',t:'Acidentes com serpentes',src:'MS · Guia de Animais Peçonhentos 2019 · Guia de Vigilância em Saúde',k:'serpente cobra jararaca cascavel surucucu coral botropico crotalico laquetico elapidico soro antiofidico peconhento',rel:[['rx_pecon','Soroterapia'],['an_pecon','Anamnese'],['cd_aracn','Escorpião e aranhas']],sec:[
 {h:'Primeiros cuidados',li:['Repouso, membro elevado e estendido; retirar anéis e adornos','NÃO: torniquete, incisão, sucção, gelo, querosene, "remédios caseiros"','Tempo de coagulação (TC) na chegada: 1 mL de sangue em tubo seco de vidro; normal até 10 min, prolongado 10–30, incoagulável > 30','Hidratação; analgesia; profilaxia antitetânica','Notificação compulsória; CIATox 0800 722 6001']},
 {h:'Botrópico (jararaca, jararacuçu, urutu) — 90% dos casos',rows:[['Clínica','Dor, edema, equimose e calor locais precoces; bolhas e necrose; sangramento local e sistêmico; TC alterado'],['Leve','Dor e edema local discretos (1–2 segmentos), sangramento discreto ou ausente → 3 ampolas'],['Moderado','Edema evidente (3–4 segmentos), sangramento sem comprometimento do estado geral → 6 ampolas'],['Grave','Edema extenso (5 segmentos), hemorragia grave, choque, IRA → 12 ampolas'],['Complicações','Síndrome compartimental, abscesso (antibiótico se infecção: amoxicilina-clavulanato / clindamicina + ciprofloxacino), necrose, IRA']]},
 {h:'Laquético (surucucu) — Amazônia e Mata Atlântica',rows:[['Clínica','Igual ao botrópico + síndrome vagal: bradicardia, hipotensão, diarreia, cólica, vômitos'],['Conduta','Moderado: 10; grave: 20 ampolas de SABL']]},
 {h:'Crotálico (cascavel)',rows:[['Clínica','Pouca dor e edema local, parestesia; fácies miastênica (ptose, oftalmoplegia, visão turva), mialgia, urina escura (mioglobinúria), IRA, TC alterado'],['Leve','Fácies miastênica discreta ou ausente, sem mialgia/urina escura → 5 ampolas'],['Moderado','Fácies miastênica evidente, mialgia discreta, sem urina escura → 10 ampolas'],['Grave','Mialgia intensa, urina escura, oligúria/anúria → 20 ampolas'],['Extra','Hidratação vigorosa (diurese 1–2 mL/kg/h); manitol/bicarbonato conforme protocolo; dosar CPK, Cr, K']]},
 {h:'Elapídico (coral verdadeira)',rows:[['Clínica','Pouca alteração local; neurotoxicidade: ptose, oftalmoplegia, disfagia, fraqueza, insuficiência respiratória'],['Conduta','10 ampolas de SAEl (sempre potencialmente grave); suporte ventilatório'],['Teste com anticolinesterásico','Atropina 0,6 mg EV (criança 0,05 mg/kg) + neostigmina 0,05 mg/kg EV (adulto 1 ampola de 0,5 mg); melhora da ptose em 10 min = manter neostigmina de 4/4 h']]}]},

cd_aracn:{g:'mental',t:'Escorpião, aranhas, lagartas e abelhas',src:'MS · Guia de Animais Peçonhentos 2019 · Nota técnica soro antiapílico',k:'escorpiao aranha armadeira aranha marrom loxosceles phoneutria taturana lonomia abelha picada peconhento soro',rel:[['rx_pecon','Soroterapia'],['an_pecon','Anamnese'],['cd_ofid','Serpentes']],sec:[
 {h:'Escorpião (Tityus)',rows:[['Leve','Dor, parestesia local → lidocaína no local + dipirona; observar 4–6 h (criança 6–12 h)'],['Moderado','Dor intensa + sudorese, náuseas, vômitos ocasionais, taquicardia, agitação, HAS leve → 2–3 ampolas (sobretudo < 7 anos)'],['Grave','Vômitos profusos, sialorreia, sudorese profusa, prostração, bradicardia, EAP, choque, convulsão → 4–6 ampolas + UTI'],['Atenção','Crianças < 7 anos e idosos: maior risco. Vômitos frequentes são sinal precoce de gravidade']]},
 {h:'Armadeira (Phoneutria)',rows:[['Leve (maioria)','Dor local intensa → anestesia local (lidocaína) + analgesia'],['Moderado','Sudorese, vômitos, agitação, taquicardia, HAS (mais em crianças) → 2–4 ampolas de SAAr'],['Grave','Priapismo, sialorreia, bradicardia, EAP, choque → 5–10 ampolas + UTI']]},
 {h:'Aranha-marrom (Loxosceles)',rows:[['Clínica','Picada pouco dolorosa; após 12–24 h: placa marmórea (palidez + equimose + eritema), bolha, necrose. Forma cutâneo-visceral: hemólise (anemia, icterícia, urina escura), IRA'],['Leve','Lesão incaracterística → sintomáticos, observação'],['Moderado','Lesão característica sem hemólise → 5 ampolas SALox/SAAr e/ou prednisona 40 mg/dia por 5 dias'],['Grave','Lesão extensa ou hemólise → 10 ampolas + prednisona; hidratação; transfusão se necessário'],['Extra','Soro mais eficaz até 72 h. Compressas frias; não desbridar precocemente. Dapsona não é recomendada pelo MS']]},
 {h:'Taturana (Lonomia)',rows:[['Clínica','Dor em queimação local; depois síndrome hemorrágica (gengivorragia, equimoses, hematúria), TC alterado, IRA'],['Leve','Só local, TC normal → sintomáticos, compressas frias, observar 24 h com TC'],['Moderado','TC alterado ou sangramento de pele/mucosas → 5 ampolas de SALon'],['Grave','Sangramento visceral, IRA, choque → 10 ampolas']]},
 {h:'Abelhas',li:['Retirar os ferrões raspando com lâmina (não pinçar)','Poucas picadas: reação local → gelo, anti-histamínico, analgesia','Anafilaxia: tratar como anafilaxia (adrenalina IM)','Múltiplas picadas (envenenamento): rabdomiólise, hemólise, IRA, arritmias → soro antiapílico onde disponível (5–200 picadas: 2; 201–600: 6; > 600: 10 ampolas), hidratação, dosar CPK, Cr, K, bilirrubinas']}]},

cd_tce:{g:'neuro',t:'TCE: avaliação e conduta',src:'ATLS 10ª ed. · Brain Trauma Foundation 2016 · Canadian CT Head · PECARN',k:'tce traumatismo cranioencefalico concussao glasgow tc cranio hipertensao intracraniana herniacao',rel:[['cd_tce_sub','Subtipos de TCE'],['ccthead','Canadian CT Head'],['glasgow','Glasgow'],['an_tce','Anamnese']],sec:[
 {h:'Classificação',rows:[['Leve','Glasgow 13–15'],['Moderado','Glasgow 9–12'],['Grave','Glasgow ≤ 8 → IOT']]},
 {h:'TCE leve',li:['TC de crânio pela Canadian CT Head (adulto) ou PECARN (criança)','TC sempre se: anticoagulado/coagulopatia, convulsão pós-trauma, déficit focal, suspeita de fratura, piora clínica','Anticoagulado com TC normal: considerar observação 24 h ou TC de controle conforme protocolo','Alta com TC normal (ou sem indicação) se Glasgow 15, acompanhante por 24 h e orientações por escrito','Retornar se: sonolência, vômitos repetidos, cefaleia progressiva, confusão, convulsão, fraqueza, alteração visual, saída de líquido do nariz/ouvido']},
 {h:'TCE moderado e grave: prevenir lesão secundária',li:['Evitar hipotensão: PAS ≥ 100 (50–69 anos) ou ≥ 110 mmHg (15–49 e > 70 anos)','Evitar hipóxia: SpO2 ≥ 94%','PaCO2 35–45 (hiperventilação só como ponte na herniação)','Cabeceira a 30°, colar cervical sem garrotear o pescoço','Normoglicemia, normotermia, Na 135–145','Anticonvulsivante profilático por 7 dias no TCE grave (fenitoína ou levetiracetam)','Ácido tranexâmico 1 g EV em 10 min + 1 g em 8 h nas primeiras 3 h (TCE leve a moderado com sangramento na TC — CRASH-3)','Reverter anticoagulação','Neurocirurgia']},
 {h:'Hipertensão intracraniana / herniação',li:['Sinais: anisocoria com midríase, hemiparesia contralateral, postura de decorticação/descerebração, queda do Glasgow ≥ 2 pontos','Tríade de Cushing: hipertensão + bradicardia + respiração irregular','Manitol 20% 0,25–1 g/kg EV em 15–20 min (se PAS adequada) ou NaCl 3% 250 mL / NaCl 20% 30 mL em veia central','Hiperventilação breve (PaCO2 30–35) até a cirurgia','Neurocirurgia imediata']},
 {h:'PECARN (criança): TC indicada se',li:['< 2 anos: Glasgow < 15, alteração do estado mental, fratura palpável → TC. Hematoma de couro cabeludo não frontal, perda de consciência ≥ 5 s, mecanismo grave ou comportamento anormal → observação ou TC','≥ 2 anos: Glasgow < 15, alteração do estado mental, sinais de fratura de base → TC. Perda de consciência, vômitos, mecanismo grave ou cefaleia intensa → observação ou TC']}]},

cd_tce_sub:{g:'neuro',t:'TCE: subtipos de lesão',src:'ATLS · Brain Trauma Foundation · Neurocirurgia',k:'hematoma epidural extradural subdural agudo cronico hemorragia subaracnoidea traumatica contusao lesao axonal difusa fratura afundamento base concussao',rel:[['cd_tce','Conduta TCE'],['an_tce','Anamnese']],sec:[
 {h:'Concussão',li:['Disfunção neurológica transitória sem lesão na TC: confusão, amnésia, cefaleia, tontura, náusea, perda de consciência breve (ou não)','Alta com repouso físico e cognitivo relativo por 24–48 h e retorno gradual às atividades','Não voltar ao esporte no mesmo dia; retorno escalonado após ficar sem sintomas','Síndrome pós-concussional pode durar semanas']},
 {h:'Hematoma extradural (epidural)',rows:[['Mecanismo','Fratura temporal com lesão da artéria meníngea média'],['Clínica','Clássico: perda de consciência → intervalo lúcido → deterioração rápida (só em 1/3)'],['TC','Lente biconvexa, hiperdensa, não cruza suturas'],['Conduta','Cirurgia se volume > 30 mL, ou desvio de linha média > 5 mm, ou Glasgow < 9 com anisocoria. Bom prognóstico se operado cedo']]},
 {h:'Hematoma subdural agudo',rows:[['Mecanismo','Ruptura de veias-ponte; idosos, etilistas, anticoagulados'],['TC','Crescente (côncavo-convexo) hiperdenso, cruza suturas, não cruza a foice'],['Conduta','Cirurgia se espessura > 10 mm ou desvio > 5 mm, ou queda do Glasgow ≥ 2 pontos / anisocoria. Pior prognóstico (lesão cerebral associada)']]},
 {h:'Hematoma subdural crônico',rows:[['Quem','Idosos, etilistas, anticoagulados; trauma leve ou esquecido semanas antes'],['Clínica','Cefaleia, declínio cognitivo, confusão, hemiparesia lenta, quedas'],['TC','Crescente hipodenso (ou densidades mistas se ressangramento)'],['Conduta','Sintomático ou volumoso: drenagem (trepanação). Suspender/reverter anticoagulação']]},
 {h:'Hemorragia subaracnoidea traumática',li:['Sangue nos sulcos e cisternas da convexidade (a aneurismática predomina nas cisternas da base)','Geralmente conservador; repetir TC se piora','Risco de vasoespasmo e hidrocefalia; nimodipino não tem benefício comprovado na traumática']},
 {h:'Contusão cerebral',li:['Lesão de golpe e contragolpe (frontal e temporal)','Pode aumentar ("florescer") em 24–72 h: TC de controle em 6–24 h','Conduta conforme efeito de massa; risco de convulsão']},
 {h:'Lesão axonal difusa',li:['Aceleração-desaceleração (alta energia)','Coma desproporcional à TC (TC normal ou pequenas hemorragias na substância branca, corpo caloso, tronco)','RM confirma; tratamento de suporte e controle da PIC; prognóstico reservado']},
 {h:'Fraturas de crânio',rows:[['Linear','Sem desvio: observação; atenção se cruza sulco da meníngea média ou seio venoso'],['Com afundamento','Afundamento maior que a espessura da díploe, exposta ou com lesão subjacente: cirurgia'],['Exposta','Antibiótico (cefazolina), tétano, cirurgia'],['Base do crânio','Sinal de Battle (mastoide), olhos de guaxinim, hemotímpano, oto/rinorreia liquórica, lesão de VII/VIII. NÃO passar sonda nasogástrica (usar orogástrica); antibiótico profilático não é rotina']]},
 {h:'Síndromes de herniação',rows:[['Uncal (transtentorial)','Midríase ipsilateral (III par) + hemiparesia contralateral + rebaixamento'],['Central','Rebaixamento progressivo, pupilas mióticas → médias fixas, Cheyne-Stokes'],['Tonsilar','Rigidez de nuca, bradicardia, apneia (fossa posterior)']]}]},

cd_aorta:{g:'cv',t:'Dissecção aguda de aorta',src:'ESC 2024 · AHA/ACC 2022',k:'disseccao aorta stanford debakey add-rs angiotomografia dor toracica rasgando',rel:[['addrs','ADD-RS'],['rx_has','Prescrição (dissecção)'],['an_aorta','Anamnese'],['cd_sca','SCA']],sec:[
 {h:'Quando pensar',li:['Dor torácica, dorsal ou abdominal súbita, intensa, "rasgando", migratória','Assimetria de pulsos ou de PA (> 20 mmHg entre braços), déficit neurológico com dor, síncope','Sopro de insuficiência aórtica novo, choque, tamponamento','Fatores: HAS, Marfan e outras doenças do colágeno, valva bicúspide, aneurisma, manipulação aórtica, cocaína, gestação']},
 {h:'Classificação',rows:[['Stanford A','Envolve a aorta ascendente (± arco) → CIRURGIA de emergência (mortalidade 1–2% por hora sem cirurgia)'],['Stanford B','Não envolve a ascendente → tratamento clínico; endovascular se complicada (má perfusão, ruptura, dor ou HAS refratárias, expansão)']]},
 {h:'Diagnóstico',li:['ADD-RS 0–1 + D-dímero < 500 ng/mL: dissecção improvável (estratégia ADvISED)','ADD-RS ≥ 2 ou D-dímero positivo: angio-TC de aorta total (tórax, abdome e pelve)','Instável: ECO transtorácico/transesofágico à beira-leito','RX de tórax (mediastino alargado) e ECG normais NÃO afastam','ECG com supra de ST pode ocorrer (dissecção da coronária direita): cuidado antes de trombolisar']},
 {h:'Tratamento inicial',li:['Analgesia com morfina (a dor eleva FC e PA)','Betabloqueador EV primeiro: metoprolol ou esmolol — meta FC < 60 bpm','Depois vasodilatador (nitroprussiato) se PAS > 120 — meta PAS 100–120 mmHg em 20 min','Hipotensão: pensar em tamponamento, ruptura ou insuficiência aórtica aguda → cirurgia; evitar pericardiocentese (salvo PCR iminente)','Sem AAS, heparina ou trombolítico','2 acessos calibrosos, tipagem e reserva de sangue, UTI, cirurgia cardiovascular']}]},

cd_ectop:{g:'mulher',t:'Gravidez ectópica',src:'FEBRASGO · ACOG 2018 · NICE',k:'gravidez ectopica tubaria beta hcg zona discriminatoria metotrexato salpingectomia',rel:[['an_sangvag','Anamnese'],['rx_obst','Prescrições']],sec:[
 {h:'Suspeitar',li:['Atraso menstrual + dor pélvica/abdominal ± sangramento vaginal','Fatores de risco: ectópica prévia, cirurgia tubária, DIP, DIU, reprodução assistida, tabagismo','Rota: dor intensa, dor no ombro (irritação diafragmática), síncope, choque, abdome com irritação peritoneal']},
 {h:'Diagnóstico',li:['Beta-hCG quantitativo + USG transvaginal','Beta-hCG acima da zona discriminatória (≈ 1.500–3.500 mUI/mL) sem saco gestacional intrauterino: ectópica provável','Gravidez de localização desconhecida estável: repetir beta-hCG em 48 h (gestação viável sobe ≥ 35–50%)','FAST com líquido livre + instabilidade: centro cirúrgico']},
 {h:'Tratamento',rows:[['Instável / rota','Ressuscitação + cirurgia de emergência (salpingectomia)'],['Metotrexato (50 mg/m² IM dose única)','Estável, sem rotura, massa < 3,5–4 cm, sem BCF, beta-hCG < 5.000, adesão ao seguimento (beta-hCG dias 4 e 7: queda ≥ 15%)'],['Expectante','Beta-hCG baixo (< 1.000–1.500) e em queda, assintomática'],['Cirurgia (laparoscopia)','Demais casos']]},
 {h:'Sempre',li:['Tipagem ABO/Rh: imunoglobulina anti-D se Rh negativo','Orientar sinais de alarme durante o seguimento']}]},

cd_abort:{g:'mulher',t:'Abortamento',src:'MS · FEBRASGO · FIGO 2023',k:'abortamento aborto ameaca inevitavel incompleto completo retido infectado amiu curetagem misoprostol',rel:[['rx_obst','Prescrições'],['an_sangvag','Anamnese']],sec:[
 {h:'Formas clínicas',rows:[['Ameaça','Sangramento leve, colo fechado, embrião vivo → repouso relativo, analgesia, USG de controle'],['Inevitável','Colo aberto, sangramento, dor → esvaziamento'],['Incompleto','Colo aberto, restos ovulares (eco endometrial > 15 mm) → misoprostol ou AMIU/curetagem'],['Completo','Colo fechado, útero vazio, sangramento diminuindo → orientação, controle de beta-hCG'],['Retido','Embrião sem BCF / saco vazio, colo fechado → expectante, misoprostol ou AMIU'],['Infectado','Febre, dor, secreção fétida, útero amolecido e doloroso → antibiótico + esvaziamento (sepse!)']]},
 {h:'Cuidados',li:['Imunoglobulina anti-D se Rh negativo (qualquer idade gestacional)','AMIU é preferível à curetagem até 12 semanas','Anticoncepção pós-abortamento pode ser iniciada no mesmo dia (inclusive DIU após esvaziamento)','Aborto legal (estupro, risco de vida, anencefalia): acolher e encaminhar ao serviço de referência','Acolhimento sem julgamento; sigilo profissional']}]},

cd_sang2:{g:'mulher',t:'Sangramento na 2ª metade da gestação',src:'FEBRASGO · MS Gestação de Alto Risco',k:'placenta previa descolamento prematuro de placenta dpp rotura uterina vasa previa sangramento gestacao',rel:[['an_gest','Anamnese gestante'],['cd_hpp','Hemorragia pós-parto']],sec:[
 {h:'Diferenciar',rows:[['Placenta prévia','Sangramento vermelho vivo, indolor, recorrente, útero relaxado, BCF geralmente normal. NÃO fazer toque vaginal até USG'],['Descolamento prematuro de placenta (DPP)','Dor abdominal súbita, hipertonia uterina ("útero lenhoso"), sangramento escuro (pode ser oculto), sofrimento fetal, HAS/pré-eclâmpsia, trauma, cocaína; risco de CIVD'],['Rotura uterina','Cesárea prévia, dor súbita intensa, parada das contrações, partes fetais palpáveis, choque'],['Vasa prévia','Sangramento na amniorrexe com sofrimento fetal agudo']]},
 {h:'Conduta',li:['2 acessos calibrosos, tipagem, hemograma, coagulograma, fibrinogênio','Monitorização materna e fetal (BCF/cardiotocografia)','DPP: parto pela via mais rápida (cesárea se feto vivo e parto não iminente); amniotomia; corrigir coagulopatia','Placenta prévia com sangramento importante ou ≥ 36–37 semanas: cesárea','Corticoide para maturação pulmonar se 24–34 semanas e houver tempo','Imunoglobulina anti-D se Rh negativo','Transferência para maternidade de referência']}]},

cd_pe:{g:'mulher',t:'Pré-eclâmpsia, eclâmpsia e HELLP',src:'FEBRASGO 2023 · MS · ISSHP',k:'pre-eclampsia eclampsia hellp sulfato de magnesio hidralazina gestante hipertensao',rel:[['rx_obst','Prescrições'],['rx_has','Crise hipertensiva'],['an_gest','Anamnese gestante']],sec:[
 {h:'Diagnóstico',li:['PA ≥ 140x90 mmHg após 20 semanas + proteinúria (relação proteína/creatinina ≥ 0,3 ou fita ≥ 2+) OU disfunção de órgão-alvo','Pode ocorrer até 6 semanas após o parto','Eclâmpsia: convulsão tônico-clônica em gestante/puérpera com pré-eclâmpsia (às vezes sem HAS prévia conhecida)']},
 {h:'Sinais de gravidade',li:['PA ≥ 160x110 mmHg','Cefaleia intensa, escotomas, alteração visual, confusão','Dor epigástrica ou em hipocôndrio direito','Plaquetas < 100 mil','Creatinina > 1,1 mg/dL (ou dobro do basal)','TGO/TGP ≥ 2 × o normal','EAP, oligúria','Restrição de crescimento fetal / Doppler alterado']},
 {h:'HELLP',rows:[['Hemólise','LDH ≥ 600 U/L, esquizócitos, bilirrubina ≥ 1,2 mg/dL'],['Enzimas hepáticas','TGO ≥ 70 U/L'],['Plaquetas baixas','< 100.000/mm³']]},
 {h:'Conduta',li:['Sulfato de magnésio em toda pré-eclâmpsia com sinais de gravidade, eclâmpsia e HELLP (Zuspan ou Pritchard)','Anti-hipertensivo se PA ≥ 160x110: hidralazina EV ou nifedipino VO (meta 140–150 x 90–100)','Toxicidade do magnésio: reflexo patelar abolido, FR < 16, diurese < 25 mL/h → suspender; gluconato de cálcio 10% 10 mL EV','Parto: ≥ 34 semanas com gravidade, eclâmpsia, HELLP, DPP, deterioração materna ou fetal (após estabilizar); < 34 semanas estável: corticoide e conduta em centro terciário','Puerpério: manter magnésio 24 h; atenção à HAS pós-parto']}]},

cd_hpp:{g:'mulher',t:'Hemorragia pós-parto',src:'MS 2022 · OPAS (Zero Morte Materna por Hemorragia) · FIGO',k:'hemorragia pos parto hpp atonia ocitocina acido tranexamico misoprostol metilergometrina indice de choque',rel:[['rx_obst','Prescrição'],['cd_sang2','Sangramento na gestação']],sec:[
 {h:'Definição',li:['Perda ≥ 500 mL após parto vaginal ou ≥ 1.000 mL após cesárea, ou qualquer perda com instabilidade','Índice de choque (FC/PAS) ≥ 0,9 indica perda importante; ≥ 1,4 → transfusão urgente','A perda visual subestima o sangramento']},
 {h:'4 Ts (causas)',rows:[['Tônus (70%)','Atonia: útero amolecido → massagem, uterotônicos'],['Trauma','Lacerações de canal, rotura, inversão uterina → revisão e sutura'],['Tecido','Restos placentários → revisão da cavidade'],['Trombina','Coagulopatia, HELLP, DPP, anticoagulante → hemoderivados, fibrinogênio']]},
 {h:'Hora de ouro: sequência',li:['Pedir ajuda, 2 acessos, O2, sonda vesical, aquecer, tipagem e exames','Massagem uterina bimanual','Ocitocina EV (1ª linha) + ácido tranexâmico em até 3 h','Metilergometrina (se sem HAS) e misoprostol','Hemoderivados: concentrado de hemácias, plasma, plaquetas, crioprecipitado (fibrinogênio < 200)','Refratária: balão intrauterino, traje antichoque não pneumático, suturas compressivas, ligaduras, histerectomia']}]},

cd_gineco:{g:'mulher',t:'Emergências ginecológicas',src:'FEBRASGO · MS PCDT IST 2022',k:'doenca inflamatoria pelvica dip torcao ovariana cisto ovariano hemorragico abscesso bartholin violencia sexual sangramento uterino',rel:[['rx_obst','Prescrições'],['cd_sua','Sangramento uterino anormal'],['an_sangvag','Anamnese']],sec:[
 {h:'Dor pélvica aguda: diagnósticos que não podem passar',li:['Gravidez ectópica (beta-hCG em toda mulher em idade fértil)','Torção anexial','Cisto ovariano hemorrágico roto','DIP / abscesso tubo-ovariano','Apendicite']},
 {h:'Torção anexial',li:['Dor súbita, intensa, unilateral, em cólica, com náuseas e vômitos; massa anexial (cisto, teratoma)','USG com Doppler: ovário aumentado e edemaciado (fluxo presente NÃO afasta)','Laparoscopia urgente (destorção, preservar o ovário sempre que possível)']},
 {h:'Doença inflamatória pélvica',li:['Dor pélvica + dor à mobilização do colo, anexos ou útero (critérios mínimos) ± febre, corrimento, leucocitose','Tratamento ambulatorial: ceftriaxona 500 mg IM + doxiciclina + metronidazol por 14 dias','Internar: abscesso tubo-ovariano, gestante, falha em 72 h, grave, intolerância oral, dúvida diagnóstica (apendicite)','Tratar parcerias; oferecer testes para IST']},
 {h:'Cisto ovariano hemorrágico roto',li:['Dor súbita, geralmente na 2ª fase do ciclo, após relação ou esforço','USG: líquido livre, cisto com conteúdo heterogêneo','Estável: analgesia e observação; instável ou hemoperitônio volumoso: cirurgia']},
 {h:'Abscesso da glândula de Bartholin',li:['Drenagem com sonda de Word ou marsupialização','Antibiótico só se celulite extensa, imunossupressão ou risco de IST']},
 {h:'Violência sexual',li:['Atendimento de urgência; não exige boletim de ocorrência','Profilaxias em até 72 h: contracepção de emergência, PEP HIV, IST, hepatite B','Coleta de vestígios conforme protocolo do serviço','Notificação compulsória; menor de idade → Conselho Tutelar','Seguimento em serviço de referência']}]},

cd_sua:{g:'mulher',t:'Sangramento uterino anormal agudo',src:'FEBRASGO · ACOG 2013/2020 · FIGO PALM-COEIN',k:'sangramento uterino anormal sua menorragia acido tranexamico anticoncepcional palm coein',rel:[['rx_obst','Prescrição'],['an_sangvag','Anamnese']],sec:[
 {h:'Avaliação',li:['Beta-hCG sempre (idade fértil)','Estabilidade hemodinâmica, Hb, coagulograma; tipagem se sangramento importante','Pensar em coagulopatia (von Willebrand) na adolescente com sangramento intenso desde a menarca','Causas (PALM-COEIN): pólipo, adenomiose, leiomioma, malignidade/hiperplasia; coagulopatia, ovulatória, endometrial, iatrogênica, não classificada']},
 {h:'Tratamento',rows:[['Instável','Ressuscitação, curetagem/histeroscopia, ácido tranexâmico EV'],['Estável','Ácido tranexâmico VO/EV; anticoncepcional combinado em dose alta (3x/dia por 7 dias) ou progestagênio isolado em dose alta'],['Seguimento','USG transvaginal; investigação ambulatorial (endométrio na pós-menopausa ou > 45 anos)']]}]}
});

/* ---------- Escores ---------- */
Object.assign(SC,{
westley:{g:'crianca',t:'Westley (crupe)',code:'Westley 1978',kind:'q',q:[
 {q:'Nível de consciência',o:[['Normal (inclui dormindo)',0],['Desorientado',5]]},
 {q:'Cianose',o:[['Nenhuma',0],['Com agitação',4],['Em repouso',5]]},
 {q:'Estridor',o:[['Nenhum',0],['Com agitação',1],['Em repouso',2]]},
 {q:'Entrada de ar',o:[['Normal',0],['Diminuída',1],['Muito diminuída',2]]},
 {q:'Retrações',o:[['Nenhuma',0],['Leves',1],['Moderadas',2],['Graves',3]]}],
 lv:t=>t<=2?['ok','Crupe leve (≤ 2)','Dexametasona VO e alta com orientações.']:t<=5?['warn','Moderado (3–5)','Dexametasona + adrenalina nebulizada; observar 2–4 h.']:t<=11?['bad','Grave (6–11)','Adrenalina nebulizada repetida + dexametasona; internação.']:['bad','Insuficiência respiratória iminente (≥ 12)','UTI; preparar via aérea com profissional experiente.']},
mcisaac:{g:'inf',t:'McIsaac (Centor modificado)',code:'faringoamigdalite',kind:'q',q:[
 {q:'Temperatura > 38 °C',o:[['Não',0],['Sim',1]]},
 {q:'Ausência de tosse',o:[['Tem tosse',0],['Sem tosse',1]]},
 {q:'Adenomegalia cervical anterior dolorosa',o:[['Não',0],['Sim',1]]},
 {q:'Edema ou exsudato amigdaliano',o:[['Não',0],['Sim',1]]},
 {q:'Idade',o:[['3–14 anos',1],['15–44 anos',0],['≥ 45 anos',-1]]}],
 lv:t=>t<=1?['ok','Baixo risco (≤ 1)','Estreptococo ~1–10%: sem teste nem antibiótico.']:t<=3?['warn','Intermediário (2–3)','Estreptococo ~11–35%: teste rápido/cultura e tratar se positivo.']:['bad','Alto (≥ 4)','Estreptococo ~51–53%: teste ou antibiótico empírico.']},
burch:{g:'endo',t:'Burch-Wartofsky (tempestade tireoidiana)',code:'Burch e Wartofsky 1993',kind:'q',q:[
 {q:'Temperatura',o:[['< 37,2 °C',0],['37,2–37,7 °C',5],['37,8–38,2 °C',10],['38,3–38,8 °C',15],['38,9–39,4 °C',20],['39,5–39,9 °C',25],['≥ 40 °C',30]]},
 {q:'Sistema nervoso central',o:[['Normal',0],['Agitação leve',10],['Delirium, psicose, letargia',20],['Convulsão ou coma',30]]},
 {q:'Gastrointestinal / hepático',o:[['Normal',0],['Diarreia, náusea, vômitos ou dor abdominal',10],['Icterícia sem outra causa',20]]},
 {q:'Frequência cardíaca',o:[['< 90 bpm',0],['90–109',5],['110–119',10],['120–129',15],['130–139',20],['≥ 140',25]]},
 {q:'Insuficiência cardíaca',o:[['Ausente',0],['Edema de membros inferiores',5],['Crepitantes em bases',10],['Edema agudo de pulmão',15]]},
 {q:'Fibrilação atrial',o:[['Ausente',0],['Presente',10]]},
 {q:'Fator precipitante identificado',o:[['Não',0],['Sim',10]]}],
 lv:t=>t<25?['ok','Tempestade improvável (< 25)','']:t<45?['warn','Tempestade iminente (25–44)','Tratar de forma agressiva conforme o julgamento clínico.']:['bad','Altamente sugestivo de tempestade (≥ 45)','Tratamento imediato em UTI.']},
addrs:{g:'cv',t:'ADD-RS (dissecção de aorta)',code:'Aortic Dissection Detection Risk Score',kind:'ck',ck:[
 ['CONDIÇÃO DE ALTO RISCO: Marfan/doença do colágeno, história familiar de doença aórtica, valvopatia aórtica conhecida, manipulação aórtica recente ou aneurisma de aorta torácica conhecido',1],
 ['DOR DE ALTO RISCO: torácica, dorsal ou abdominal de início abrupto, intensa, rasgando ou lancinante',1],
 ['EXAME DE ALTO RISCO: déficit de pulso ou diferença de PAS entre membros, déficit neurológico focal com dor, sopro de insuficiência aórtica novo com dor, hipotensão ou choque',1]],
 lv:t=>t===0?['ok','Baixo risco (0)','D-dímero < 500 ng/mL praticamente afasta dissecção; se positivo, angio-TC.']:t===1?['warn','Risco intermediário (1)','D-dímero: se < 500 ng/mL, dissecção improvável; se positivo, angio-TC.']:['bad','Alto risco (≥ 2)','Angio-TC de aorta (ou ECO transesofágico se instável) imediata.'],unit:' categoria(s)',note:'Cada categoria vale 1 ponto, independente de quantos itens nela estejam presentes.'}
});

/* Remove ligações "ver também" que apontam para itens que não existem no Kit PS (vindas do Kit APS). */
(()=>{const R=[AN,RX,CD,EX,SC,NC,FN],has=id=>R.some(o=>o[id]);for(const o of R)for(const v of Object.values(o))if(Array.isArray(v.rel))v.rel=v.rel.filter(x=>has(Array.isArray(x)?x[0]:x));})();
