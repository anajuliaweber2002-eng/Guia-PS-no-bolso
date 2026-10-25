/* Anamneses de admissão no PS: modelo editável por queixa. Campos entre colchetes para preencher. */
const AN_ID=`IDENTIFICAÇÃO: [nome], [ ] anos, [sexo], natural e procedente de [ ]. Acompanhante: [ ]. Chegada: [demanda espontânea / SAMU / transferência de __].
CLASSIFICAÇÃO DE RISCO: [vermelho / laranja / amarelo / verde / azul]`;
const AN_ANT=`ANTECEDENTES
Comorbidades: [nega / ]
Medicações de uso contínuo: [ ]
Alergias: [nega alergias medicamentosas]
Cirurgias / internações prévias: [nega / ]
Hábitos: tabagismo [nega / __ anos-maço], etilismo [nega / ], outras drogas [nega / ]
[Mulher em idade fértil: DUM __ | possibilidade de gestação: __]
Última refeição: [ ]`;
const AN_SV=`Sinais vitais: PA [ ]x[ ] mmHg | FC [ ] bpm | FR [ ] irpm | SpO2 [ ]% em [ar ambiente] | Tax [ ] °C | HGT [ ] mg/dL | Dor [ ]/10
Geral: [BEG], [corado, hidratado, acianótico, anictérico, afebril], [lúcido e orientado], Glasgow [15].`;
const AN_FIM=`Paciente e acompanhante orientados sobre a conduta, cientes e de acordo.`;
const an=(qp,hda,ef,hd,cd)=>`${AN_ID}

QP: "${qp}"

HDA: ${hda}

${AN_ANT}

EXAME FÍSICO
${AN_SV}
${ef}

HIPÓTESES DIAGNÓSTICAS
${hd}

CONDUTA
${cd}
${AN_FIM}`;
const EF_CV='ACV: RCR 2T, BNF, sem sopros. Pulsos periféricos [presentes e simétricos]. TEC [< 3 s]. Sem turgência jugular.';
const EF_AR='AR: MV+ bilateralmente, sem RA. Sem esforço respiratório.';
const EF_ABD='ABD: plano, RHA+, flácido, indolor à palpação, sem massas ou visceromegalias, sem sinais de irritação peritoneal.';
const EF_MMII='MMII: sem edema, panturrilhas livres.';
const EF_NEU='NEURO: lúcido, orientado em tempo e espaço, pupilas isocóricas e fotorreagentes, sem déficits focais, sem rigidez de nuca.';

Object.assign(AN,{
an_geral:{g:'geral',t:'Admissão geral',code:'modelo base',body:an('[ ]',
`Paciente refere [sintoma] há [ ] [horas/dias], de início [súbito/progressivo], [características]. Fatores de melhora: [ ]. Fatores de piora: [ ]. Sintomas associados: [ ]. Nega [ ]. Uso de medicações para o quadro: [ ].`,
`${EF_CV}\n${EF_AR}\n${EF_ABD}\n${EF_MMII}\n${EF_NEU}`,
'1. [ ]',
`- [Medicação sintomática]
- Exames: [ ]
- Reavaliação após medicação / resultados`)},

an_dtor:{g:'cv',t:'Dor torácica',code:'R07 · I20–I21',rel:[['heart','HEART'],['ecg_ps','ECG na emergência'],['cd_sca','Conduta SCA'],['rx_sca','Prescrição SCA'],['ex_trop','Troponina'],['wells_tep','Wells TEP']],body:an('Dor no peito',
`Paciente refere dor torácica há [ ] [minutos/horas], de início [súbito/progressivo] [em repouso/aos esforços], localizada em [região retroesternal/precordial/ ], tipo [aperto/queimação/pontada/rasgando], intensidade [ ]/10, com irradiação para [MSE/mandíbula/dorso/não irradia], duração [contínua/intermitente, episódios de __ min]. Fatores de piora: [esforço/respiração/movimento/palpação]. Melhora com [repouso/nitrato/posição/não melhora]. Sintomas associados: [dispneia/sudorese/náuseas/vômitos/síncope/palpitações]. [Episódios prévios semelhantes: __.]
Nega febre, tosse, trauma torácico. Nega dor em panturrilha, imobilização, cirurgia recente ou viagem longa.
Fatores de risco CV: [HAS / DM / dislipidemia / tabagismo / obesidade / DAC prévia / história familiar de DAC precoce]. Uso de cocaína: [nega].`,
`${EF_CV}
PA em ambos os membros superiores: MSD [ ]x[ ] / MSE [ ]x[ ] mmHg.
${EF_AR}
${EF_ABD}
${EF_MMII}
ECG (realizado em [ ] min da chegada): [ritmo sinusal, FC __ bpm, sem alterações isquêmicas agudas / supra de ST em __ / infra de ST em __ / BRE novo].`,
`1. Dor torácica a esclarecer: [SCA sem supra de ST / IAM com supra de ST / dor torácica de baixo risco / TEP / dissecção de aorta / pericardite / musculoesquelética / DRGE]
HEART: [ ] pontos ([baixo/moderado/alto] risco)`,
`- Monitorização cardíaca contínua, oximetria, acesso venoso periférico
- ECG seriado (repetir em 15–30 min ou se nova dor)
- Troponina [na chegada e com __ h]
- [AAS 300 mg mastigado] [se SCA provável e sem contraindicação]
- [Nitrato SL se dor e PAS > 90 mmHg, sem uso de iPDE5]
- Exames: hemograma, função renal, eletrólitos, coagulograma, RX de tórax
- Reavaliação com resultados`)},

an_disp:{g:'resp',t:'Dispneia',code:'R06',rel:[['cd_asma','Asma'],['cd_dpoc','DPOC'],['cd_eap','EAP'],['cd_tep','TEP'],['ex_gaso','Gasometria'],['curb65','CURB-65']],body:an('Falta de ar',
`Paciente refere dispneia há [ ] [horas/dias], de início [súbito/progressivo], [aos grandes/médios/pequenos esforços/em repouso], [com ortopneia (__ travesseiros) / dispneia paroxística noturna]. Associada a [tosse seca/produtiva com expectoração __/sibilância/dor torácica pleurítica/febre/edema de MMII/palpitações]. [Hemoptise: nega.]
Fatores desencadeantes: [infecção respiratória / exposição a alérgenos / má adesão / excesso de sal ou líquidos / ]. Uso de broncodilatador de resgate: [__ jatos nas últimas 24 h, sem melhora].
[Asma/DPOC: crises prévias, internações __, IOT prévia __, uso de corticoide oral recente __.]
Nega dor em panturrilha, imobilização, cirurgia recente.`,
`ACV: [RCR 2T, BNF, sem sopros / B3 / ritmo irregular]. Turgência jugular [ausente/presente a 45°].
AR: [MV+ bilateralmente, sem RA / sibilos difusos / crepitantes em bases / MV abolido em __]. Esforço respiratório: [ausente / uso de musculatura acessória / tiragem / fala entrecortada].
${EF_ABD}
MMII: [sem edema / edema __+/4+ até __], panturrilhas [livres].`,
`1. Dispneia aguda: [asma exacerbada / DPOC exacerbado / IC descompensada (EAP) / pneumonia / TEP / pneumotórax / ansiedade]`,
`- Cabeceira elevada, oximetria, monitorização
- O2 [cateter nasal __ L/min / máscara] para SpO2 [92–96% (88–92% se DPOC)]
- [Medicação conforme causa]
- Exames: gasometria arterial, hemograma, PCR, função renal, eletrólitos, [BNP], [D-dímero], [troponina], RX de tórax, ECG
- Reavaliação em 1 h`)},

an_abd:{g:'dig',t:'Dor abdominal',code:'R10',rel:[['alvarado','Alvarado'],['cd_pancr','Pancreatite'],['ex_hep','Enzimas hepáticas e pancreáticas'],['rx_sint','Sintomáticos']],body:an('Dor na barriga',
`Paciente refere dor abdominal há [ ] [horas/dias], de início [súbito/insidioso], localizada em [epigástrio/hipocôndrio D/mesogástrio/FID/FIE/hipogástrio/difusa], [com migração de __ para __], tipo [cólica/queimação/contínua], intensidade [ ]/10, irradiação para [dorso/em faixa/região lombar/genitais/não irradia].
Associada a [náuseas/vômitos (__ episódios, aspecto __)/febre/hiporexia/diarreia/parada de eliminação de flatos e fezes/icterícia/colúria/acolia/disúria/hematúria]. Último hábito intestinal: [ ]. Relação com alimentação: [ ].
[Mulher: DUM __, atraso menstrual __, corrimento __, sangramento vaginal __.]
Cirurgias abdominais prévias: [ ]. Uso de AINE/álcool: [ ].`,
`${EF_CV}
${EF_AR}
ABD: [plano/distendido], RHA [presentes/diminuídos/aumentados/metálicos], [flácido/tenso], doloroso à palpação [superficial/profunda] em [ ], [sem/com] defesa, DB [negativo/positivo], Murphy [ ], Rovsing [ ], psoas [ ], Giordano [negativo] bilateralmente. [Massas/hérnias: ].
[Toque retal / exame ginecológico: ]`,
`1. Dor abdominal a esclarecer: [apendicite / colecistite / pancreatite / cólica biliar / cólica renal / obstrução intestinal / úlcera perfurada / diverticulite / gastroenterite / gravidez ectópica / DIP]
Alvarado: [ ] pontos`,
`- Jejum [até definição diagnóstica]
- Acesso venoso, analgesia, antiemético
- Exames: hemograma, PCR, função renal, eletrólitos, TGO, TGP, FA, GGT, bilirrubinas, amilase, lipase, EAS, [beta-hCG], [lactato]
- Imagem: [USG de abdome / TC de abdome com contraste / RX de abdome agudo]
- [Avaliação da cirurgia geral]
- Reavaliação após analgesia`)},

an_cef:{g:'neuro',t:'Cefaleia',code:'R51 · G43',rel:[['cd_cef','Conduta cefaleia'],['rx_cef','Prescrição cefaleia'],['ex_lcr','Líquor']],body:an('Dor de cabeça',
`Paciente refere cefaleia há [ ] [horas/dias], de início [súbito, intensidade máxima em < 1 min / gradual], localização [holocraniana/frontal/temporal/occipital/unilateral __], tipo [pulsátil/em peso/pressão/pontada], intensidade [ ]/10. Associada a [náuseas/vômitos/fotofobia/fonofobia/aura visual/febre/rigidez de nuca/alteração visual/déficit neurológico/convulsão/alteração de consciência].
[Cefaleia prévia semelhante: sim, diagnóstico de __ / nunca teve dor assim (pior dor da vida).] Uso de analgésicos: [__, __ dias por mês].
Sinais de alarme: [nega início súbito, febre, rigidez de nuca, déficit focal, papiledema, piora com Valsalva, início após 50 anos, imunossupressão, câncer, gestação/puerpério, trauma, uso de anticoagulante].`,
`${EF_CV}
${EF_AR}
NEURO: Glasgow [15], pupilas [isocóricas e fotorreagentes], força [preservada e simétrica], sensibilidade [preservada], marcha [normal], coordenação [preservada], pares cranianos [sem alterações], sinais meníngeos [ausentes (rigidez de nuca, Kernig, Brudzinski)]. Fundo de olho: [ ].`,
`1. Cefaleia [primária: enxaqueca sem aura / tensional / em salvas] [secundária a investigar: HSA / meningite / AVC / crise hipertensiva / abuso de analgésico]`,
`- Analgesia: [dipirona + metoclopramida EV]
- [TC de crânio sem contraste se sinal de alarme]
- [Punção lombar se suspeita de HSA com TC normal após 6 h ou de meningite]
- Reavaliação após medicação`)},

an_avc:{g:'neuro',t:'Déficit neurológico agudo (AVC)',code:'I63 · I61 · G45',rel:[['nihss','NIHSS'],['cd_avc','Conduta AVC'],['rx_avc','Trombólise'],['abcd2','ABCD2'],['glasgow','Glasgow']],body:an('[Fraqueza em um lado do corpo / boca torta / dificuldade para falar]',
`Paciente [trazido por __] com [hemiparesia __ / desvio de rima / disartria / afasia / alteração visual / ataxia / vertigem / rebaixamento] de início [súbito].
ÚLTIMA VEZ VISTO BEM: [hora __:__] (ictus [presenciado/ao acordar]). Tempo até a chegada: [ ] min.
Evolução: [estável / melhorando / piorando / flutuante]. Convulsão no início: [nega]. Cefaleia: [nega]. Trauma: [nega]. Vômitos: [ ].
Uso de anticoagulante: [nega / __, última dose __]. AVC, cirurgia, sangramento ou trauma nos últimos 3 meses: [nega].
Fatores de risco: [HAS / DM / FA / tabagismo / AVC prévio / dislipidemia]. Funcionalidade prévia (mRS): [ ].`,
`${EF_CV} Ritmo [regular/irregular].
${EF_AR}
NEURO: Glasgow [ ]. NIHSS: [ ] pontos. Pupilas [ ]. [Descrição do déficit: força MSD __/5, MSE __/5, MID __/5, MIE __/5; paralisia facial __; linguagem __; campo visual __; desvio do olhar __; ataxia __; sensibilidade __; negligência __.]
HGT: [ ] mg/dL (afastar hipoglicemia).`,
`1. AVC isquêmico agudo [território __] / AVC hemorrágico / AIT
2. [Fonte provável: FA / aterosclerose de grandes artérias / pequenos vasos]`,
`- Ativado protocolo de AVC às [ ]
- TC de crânio sem contraste [+ angio-TC] imediata
- Glicemia, hemograma, coagulograma (TP/INR, TTPa), função renal, eletrólitos, troponina, ECG
- PA: [< 185x110 mmHg se candidato a trombólise / < 220x120 se não]
- [Trombólise: alteplase 0,9 mg/kg (máx. 90 mg) / tenecteplase 0,25 mg/kg] ou [contraindicada por __]
- [Trombectomia: avaliar se oclusão de grande vaso]
- Jejum, cabeceira 0–30°, avaliação de deglutição antes de dieta
- Vaga em unidade de AVC / UTI`)},

an_sinc:{g:'cv',t:'Síncope',code:'R55',rel:[['cd_sinc','Conduta síncope'],['ecg_ps','ECG na emergência']],body:an('Desmaiou',
`Paciente refere perda transitória da consciência há [ ], com duração de [ ] [segundos/minutos], com recuperação [espontânea e completa / lenta, com confusão pós-evento].
Antes do evento: [em pé por tempo prolongado / ambiente quente / dor / emoção / micção-tosse / ao levantar / durante esforço / deitado / sem pródromos]. Pródromos: [escurecimento visual, sudorese, náuseas, calor / palpitações / dor torácica / nenhum].
Durante: [palidez / abalos breves / liberação esfincteriana / mordedura de língua lateral] (relato de [testemunha]). Trauma associado: [ ].
Episódios prévios: [ ]. História familiar de morte súbita < 40 anos: [nega]. Medicações: [anti-hipertensivos, diuréticos, antiarrítmicos, drogas que alargam QT].`,
`${EF_CV}
PA deitado [ ]x[ ] / em pé após 3 min [ ]x[ ] mmHg, FC [ ] / [ ] bpm.
${EF_AR}
${EF_ABD}
${EF_NEU}
ECG: [ritmo sinusal, PR __ ms, QRS __ ms, QTc __ ms, sem pré-excitação, sem padrão de Brugada, sem BAV].`,
`1. Síncope [reflexa (vasovagal) / ortostática / cardiogênica (arritmia / estrutural) / a esclarecer]
Risco: [baixo / alto (sinais de alto risco: __)]`,
`- Monitorização, ECG
- Exames: hemograma, eletrólitos, glicemia, função renal, [troponina], [beta-hCG]
- [Alta com orientações se baixo risco / observação e investigação se alto risco]`)},

an_febre:{g:'inf',t:'Febre e suspeita de sepse',code:'R50 · A41',rel:[['qsofa','qSOFA'],['cd_sepse','Conduta sepse'],['rx_sepse','Antibióticos na sepse'],['ex_lact','Lactato']],body:an('Febre',
`Paciente refere febre há [ ] dias, aferida em [ ] °C, [com/sem] calafrios. Foco provável: [tosse produtiva/dispneia (respiratório) / disúria, polaciúria, dor lombar (urinário) / dor abdominal, diarreia (abdominal) / lesão de pele, celulite / cefaleia, rigidez de nuca / ferida operatória / cateter / sem foco aparente].
Associada a [mal-estar, mialgia, hiporexia, rebaixamento, oligúria, tontura].
Imunossupressão: [nega / quimioterapia, corticoide, HIV, transplante]. Internação ou antibiótico nos últimos 90 dias: [nega]. Dispositivos: [ ]. Viagem / exposição: [ ]. [Dengue/arboviroses no território: __.]`,
`${EF_CV} TEC [ ] s. Pele [quente/fria, rendilhado __].
${EF_AR}
${EF_ABD}
${EF_NEU}
Pele e partes moles: [sem lesões / ]. Diurese: [ ].
qSOFA: [ ] (FR ≥ 22 / PAS ≤ 100 / alteração do nível de consciência).`,
`1. [Sepse / choque séptico / infecção sem disfunção orgânica] de foco [ ]
2. [Disfunções: __]`,
`- Protocolo de sepse aberto às [ ]
- Lactato, hemoculturas (2 pares), culturas do foco, gasometria, hemograma, PCR, função renal, eletrólitos, bilirrubinas, coagulograma, EAS/urocultura, RX de tórax
- Antibiótico em até 1 hora: [ ]
- Cristaloide 30 mL/kg se hipotensão ou lactato ≥ 4 mmol/L
- [Noradrenalina se PAM < 65 mmHg após volume]
- Reavaliar volemia, perfusão e lactato`)},

an_conv:{g:'neuro',t:'Crise convulsiva',code:'R56 · G40 · G41',rel:[['cd_conv','Conduta crise e estado de mal'],['rx_conv','Prescrição crise convulsiva'],['glasgow','Glasgow']],body:an('Teve uma convulsão',
`Paciente [trazido por __] após episódio de [abalos tônico-clônicos generalizados / crise focal __ / ausência] há [ ], com duração de [ ] min, [com/sem] liberação esfincteriana e mordedura de língua, seguido de [confusão pós-ictal por __ min]. Número de crises: [ ]. Recuperou a consciência entre as crises: [sim/não].
[Epilepsia conhecida em uso de __, adesão __, última crise __ / primeira crise.]
Possíveis desencadeantes: [privação de sono / álcool ou abstinência / febre / suspensão de medicação / drogas / trauma / hipoglicemia / gestação].
Nega cefaleia intensa, febre, trauma craniano. [Gestante: __ semanas (pensar em eclâmpsia).]`,
`${EF_CV}
${EF_AR}
NEURO: Glasgow [ ], [pós-ictal / recuperado], pupilas [ ], déficit focal [ausente / paresia de Todd __], sinais meníngeos [ausentes]. Língua: [ ]. Sinais de trauma: [ ].
HGT: [ ] mg/dL.`,
`1. [Crise epiléptica provocada / não provocada / estado de mal epiléptico]
2. [Epilepsia com baixo nível sérico / má adesão / 1ª crise a esclarecer]`,
`- Decúbito lateral, aspirar vias aéreas, O2, monitorização, acesso venoso
- HGT; se < 70: glicose 50% 50 mL EV + tiamina
- [Diazepam 10 mg EV se crise > 5 min]
- Exames: glicemia, eletrólitos (Na, Ca, Mg), função renal, hemograma, CPK, [nível sérico de anticonvulsivante], [toxicológico], [beta-hCG]
- [TC de crânio se 1ª crise, déficit focal, trauma, anticoagulação, febre, imunossupressão]
- Observação até recuperação completa`)},

an_trauma:{g:'osteo',t:'Trauma (ATLS)',code:'T07 · V89',rel:[['cd_trauma','Conduta trauma'],['glasgow','Glasgow'],['ccthead','Canadian CT Head'],['parkland','Parkland']],body:`${AN_ID}

QP: "[ ]"

MECANISMO DO TRAUMA: [colisão carro x __ / motocicleta / atropelamento / queda de __ m / agressão / FAB / FAF] há [ ]. [Uso de capacete/cinto: __. Ejeção: __. Óbito no local: __. Velocidade estimada: __.] Atendimento pré-hospitalar: [ ].
AMPLE: Alergias [ ] | Medicações [ ] (anticoagulante: [ ]) | Passado médico/gestação [ ] | Última refeição [ ] | Eventos/ambiente [ ].

AVALIAÇÃO PRIMÁRIA (XABCDE)
X: hemorragia exsanguinante [ausente / controlada com __]
A: via aérea [pérvia, fala normal], coluna cervical [protegida com colar]
B: FR [ ] irpm, SpO2 [ ]%, MV [+ bilateralmente sem RA], expansibilidade [simétrica], traqueia [centrada], [sem enfisema subcutâneo]
C: PA [ ]x[ ] mmHg, FC [ ] bpm, TEC [ ] s, pele [ ], sangramento externo [ ], pelve [estável], FAST [negativo / positivo em __]
D: Glasgow [ ] (AO [ ] RV [ ] RM [ ]), pupilas [isocóricas e fotorreagentes], movimenta os 4 membros [sim], HGT [ ]
E: [despido, aquecido], lesões: [ ]

AVALIAÇÃO SECUNDÁRIA
Cabeça e face: [ ]
Pescoço: [sem dor à palpação da linha média, sem crepitação]
Tórax: [ ]
Abdome: [ ]
Pelve e períneo: [ ]
Dorso (rolamento em bloco): [ ]
Extremidades: [deformidades, pulsos distais, perfusão]
Neurológico: [ ]

HIPÓTESES DIAGNÓSTICAS
1. Politrauma / trauma [ ] por [ ]
2. [TCE leve/moderado/grave] [fratura de __] [ ]

CONDUTA
- Monitorização, O2, 2 acessos venosos calibrosos, aquecimento
- [Ácido tranexâmico 1 g EV em 10 min se sangramento importante em até 3 h]
- Exames: tipagem e prova cruzada, hemograma, coagulograma, gasometria, lactato, função renal, [beta-hCG], [álcool]
- Imagem: [RX de tórax e pelve na sala / TC de crânio / TC de coluna cervical / TC de tórax e abdome]
- Analgesia: [ ]
- Profilaxia antitetânica: [ ]
- Avaliação de [cirurgia geral / ortopedia / neurocirurgia]
${AN_FIM}`},

an_intox:{g:'mental',t:'Intoxicação exógena',code:'T36–T65 · X60–X69',rel:[['cd_intox','Conduta intoxicações'],['rx_antid','Antídotos']],body:an('[Tomou remédios / ingeriu __]',
`Paciente [trazido por __] após [ingestão / exposição] de [substância(s), apresentação e quantidade estimada: __] há [ ] horas, [intencional (tentativa de suicídio) / acidental / uso recreativo]. Embalagens trazidas: [sim/não].
Sintomas desde então: [sonolência/agitação/vômitos/sudorese/salivação/tremores/convulsão/palpitações/ ].
Coingestão de álcool: [ ]. Tentativas prévias: [ ]. Acompanhamento psiquiátrico: [ ]. Ideação suicida atual: [ ]. CIATox contatado: [sim, protocolo __ / não].`,
`${EF_CV}
${EF_AR}
${EF_ABD}
NEURO: Glasgow [ ], pupilas [mióticas/midriáticas/isocóricas], [agitação/sedação], [mioclonias/hiperreflexia/clônus].
Toxíndrome: [colinérgica (miose, sialorreia, broncorreia, bradicardia) / anticolinérgica (midríase, pele seca e quente, retenção urinária, delírio) / simpaticomimética (midríase, sudorese, taquicardia, hipertensão) / opioide (miose, bradipneia, rebaixamento) / sedativo-hipnótica / serotoninérgica / nenhuma].
Pele: [ ]. Temperatura: [ ].`,
`1. Intoxicação exógena por [ ] [intencional]
2. [Tentativa de suicídio]`,
`- Monitorização, ECG (QRS, QTc), HGT
- Contato com CIATox: 0800 722 6001
- [Carvão ativado 1 g/kg VO/SNG se até 1–2 h da ingestão, via aérea protegida e substância adsorvível]
- [Antídoto: __]
- Exames: gasometria, eletrólitos, função renal e hepática, CPK, [paracetamolemia 4 h], [nível sérico de __], [beta-hCG]
- Notificação compulsória (SINAN)
- Avaliação da psiquiatria após estabilização; vigilância contínua (risco de suicídio)`)},

an_has:{g:'cv',t:'Pressão alta (crise hipertensiva)',code:'I10 · I16',rel:[['cd_has','Conduta crise hipertensiva'],['rx_has','Prescrição crise hipertensiva']],body:an('Pressão alta',
`Paciente refere [PA elevada aferida em __ / cefaleia / tontura / dor torácica / dispneia / alteração visual / déficit neurológico] há [ ]. PA de [ ]x[ ] mmHg.
HAS conhecida há [ ] anos, em uso de [ ], adesão [boa/irregular, última dose __]. Uso de AINE, descongestionante, corticoide, cocaína/anfetamina: [nega]. Suspensão abrupta de clonidina/betabloqueador: [nega].
Lesão aguda de órgão-alvo: nega dor torácica, dispneia, déficit neurológico, confusão, convulsão, alteração visual importante, oligúria. [Gestante/puérpera: __.]`,
`PA: [ ]x[ ] mmHg (MSD) | [ ]x[ ] mmHg (MSE) — 2ª medida após repouso: [ ]x[ ]
${EF_CV}
${EF_AR}
${EF_ABD}
${EF_MMII}
${EF_NEU}
Fundo de olho: [ ].`,
`1. [PA elevada sem lesão aguda de órgão-alvo (urgência hipertensiva) / emergência hipertensiva: __ / pseudocrise (dor, ansiedade)]
2. HAS [não controlada]`,
`- Repouso em ambiente calmo, tratar dor e ansiedade, reaferir em 30 min
- [Sem lesão de órgão-alvo: reintroduzir/ajustar anti-hipertensivo oral, sem meta de queda rápida]
- [Emergência: anti-hipertensivo EV conforme o órgão-alvo, UTI]
- Exames: [ECG, função renal, eletrólitos, EAS, troponina, TC de crânio conforme quadro]
- Retorno à UBS em até 7 dias para ajuste`)},

an_dm:{g:'endo',t:'Hiperglicemia (CAD e EHH)',code:'E10.1 · E11.0',rel:[['cd_cad','Conduta CAD e EHH'],['rx_cad','Prescrição CAD'],['angap','Ânion gap'],['nacorr','Sódio corrigido'],['ex_gaso','Gasometria']],body:an('Glicose alta',
`Paciente com DM [tipo 1/tipo 2] há [ ] anos, em uso de [insulina NPH __ UI / regular __ / ADO __], refere há [ ] dias [poliúria, polidipsia, perda de peso, náuseas, vômitos, dor abdominal, astenia, sonolência, confusão]. HGT na chegada: [ ] mg/dL [HI].
Desencadeante provável: [infecção (__) / suspensão de insulina / abertura do quadro / IAM / AVC / pancreatite / uso de corticoide / iSGLT2 (CAD euglicêmica)].`,
`${EF_CV}
Hidratação: [desidratado __+/4+], mucosas [secas], TEC [ ] s.
AR: [MV+, sem RA], respiração [normal / Kussmaul], hálito [cetônico].
${EF_ABD}
${EF_NEU}`,
`1. [Cetoacidose diabética leve/moderada/grave / estado hiperglicêmico hiperosmolar / hiperglicemia sem crise]
2. Fator precipitante: [ ]`,
`- Monitorização, 2 acessos venosos, HGT de 1/1 h
- Exames: gasometria venosa, Na, K, Cl, Mg, P, ureia, creatinina, glicemia, cetonemia/cetonúria, hemograma, EAS, osmolaridade, [lipase], [troponina], ECG, culturas se febre
- SF 0,9% 1.000–1.500 mL na 1ª hora
- Insulina regular EV contínua 0,1 UI/kg/h após K ≥ 3,3
- Reposição de K conforme o nível
- Tratar fator precipitante; vaga em UTI se CAD grave`)},

an_hipo:{g:'endo',t:'Hipoglicemia',code:'E16.2',rel:[['cd_hipo','Conduta hipoglicemia']],body:an('Mal-estar / desmaio',
`Paciente [trazido por __] com [sudorese, tremores, palpitações, fome, confusão, rebaixamento, convulsão] há [ ]. HGT na chegada: [ ] mg/dL.
Em uso de [insulina __ / sulfonilureia __]. Causa provável: [jejum / erro de dose / exercício / álcool / piora da função renal / infecção]. Episódios prévios: [ ].`,
`${EF_CV}
${EF_AR}
${EF_ABD}
NEURO: Glasgow [ ], [sem déficits focais após correção].`,
`1. Hipoglicemia [leve/grave] por [ ]`,
`- Consciente e deglutindo: 15 g de carboidrato VO, repetir HGT em 15 min
- Rebaixado: glicose 50% 40–60 mL EV (ou glicose 25%/10%) + [tiamina 100 mg EV se etilista/desnutrido]
- Após correção: alimentação e manutenção com SG 10% se sulfonilureia ou insulina de longa ação
- HGT de 1/1 h por [ ] h
- Ajuste do esquema antes da alta`)},

an_resp:{g:'resp',t:'Crise asmática / DPOC exacerbado',code:'J45 · J44.1',rel:[['cd_asma','Conduta asma'],['cd_dpoc','Conduta DPOC'],['rx_asma','Prescrição asma'],['rx_dpoc','Prescrição DPOC']],body:an('Falta de ar e chiado',
`Paciente com [asma / DPOC] refere piora da dispneia há [ ] [horas/dias], com [sibilância, tosse, aumento da expectoração, mudança da cor do escarro para __, febre]. Fala [frases completas / frases curtas / palavras].
Uso de broncodilatador de resgate: [__ jatos nas últimas 24 h, sem melhora]. Tratamento de manutenção: [ ], adesão [ ]. Desencadeante: [IVAS / exposição / má adesão / ].
Exacerbações no último ano: [ ]. Internações / UTI / IOT prévias: [ ]. Corticoide oral recente: [ ]. Tabagismo: [ ].`,
`${EF_CV}
AR: [sibilos difusos / tórax silencioso], MV [ ], uso de musculatura acessória [ ], tiragem [ ], FR [ ] irpm. [PFE: __ L/min (__% do previsto).]
${EF_ABD}
${EF_MMII}
NEURO: [lúcido / sonolento / agitado].`,
`1. [Exacerbação de asma leve-moderada / grave / ameaçadora à vida] / [DPOC exacerbado [com/sem] insuficiência respiratória]
2. [Desencadeante: __]`,
`- O2 para SpO2 [93–95% asma / 88–92% DPOC]
- Broncodilatador: salbutamol [+ ipratrópio]
- Corticoide sistêmico
- [Sulfato de magnésio se grave]
- [Gasometria se grave ou DPOC]
- [RX de tórax se suspeita de pneumonia, pneumotórax ou sem melhora]
- Reavaliar após cada ciclo e em 1 h`)},

an_icc:{g:'cv',t:'Insuficiência cardíaca descompensada',code:'I50',rel:[['cd_eap','Conduta EAP e IC aguda'],['rx_eap','Prescrição EAP'],['ex_bnp','BNP']],body:an('Falta de ar e inchaço',
`Paciente com IC [FE reduzida / preservada] (última FE __% em __), refere piora da dispneia há [ ] dias, [ortopneia (__ travesseiros), DPN, edema de MMII, ganho de __ kg, oligúria, tosse noturna].
Fator de descompensação: [má adesão a medicação / excesso de sal ou líquidos / infecção / FA / isquemia / HAS não controlada / AINE / piora renal].
Medicações: [ ].`,
`ACV: [RCR / ritmo irregular], [B3], sopro [ ], turgência jugular [a 45°], refluxo hepatojugular [ ].
AR: [crepitantes em bases até __ / derrame pleural __].
${EF_ABD} [Hepatomegalia: __. Ascite: __.]
MMII: edema [ ]+/4+ até [ ], [frios / quentes].
Perfil hemodinâmico: [quente e úmido / frio e úmido / quente e seco / frio e seco].`,
`1. IC descompensada perfil [B — quente e úmido / C — frio e úmido / L / A]
2. Fator de descompensação: [ ]`,
`- Cabeceira elevada, O2 se SpO2 < 90%, [VNI se desconforto]
- Furosemida [ ] mg EV
- [Nitroglicerina EV se PAS > 110 mmHg]
- Balanço hídrico, peso diário, restrição hídrica [ ]
- Exames: ECG, troponina, BNP/NT-proBNP, função renal, eletrólitos, hemograma, RX de tórax
- [Ecocardiograma]`)},

an_aler:{g:'osteo',t:'Alergia e anafilaxia',code:'T78.2 · T78.3 · L50',rel:[['cd_anaf','Conduta anafilaxia'],['rx_anaf','Prescrição anafilaxia']],body:an('Alergia',
`Paciente refere [placas avermelhadas pruriginosas / inchaço em __ / falta de ar / chiado / rouquidão / dor abdominal / vômitos / tontura / desmaio] iniciado há [ ] min/h, após [medicamento __ / alimento __ / picada de inseto / látex / sem desencadeante identificado].
Episódios prévios: [ ]. Uso de IECA: [ ] (angioedema por bradicinina). Medicações já usadas: [ ].`,
`${EF_CV}
Pele: [urticas difusas / angioedema de lábios, língua, pálpebras / eritema]. Voz: [normal / rouca], estridor [ausente].
AR: [MV+ sem RA / sibilos].
${EF_ABD}
${EF_NEU}`,
`1. [Anafilaxia (critérios: __) / urticária aguda / angioedema [histaminérgico / por IECA]]
2. Desencadeante: [ ]`,
`- [Anafilaxia: adrenalina 0,5 mg IM na face anterolateral da coxa, repetir a cada 5–15 min se necessário]
- Decúbito com MMII elevados, O2, monitorização, acesso venoso, [SF 0,9% 1.000 mL rápido se hipotensão]
- Anti-histamínico e corticoide como adjuvantes
- Observação por no mínimo [6–12] h após anafilaxia
- Alta com orientação sobre o alérgeno, prescrição de anti-histamínico e encaminhamento ao alergista`)},

an_colrenal:{g:'renal',t:'Cólica renal',code:'N23 · N20',rel:[['rx_colica','Prescrição cólica renal'],['ex_eas','EAS']],body:an('Dor nas costas',
`Paciente refere dor em [flanco/região lombar D/E] há [ ] horas, de início súbito, tipo cólica, intensidade [ ]/10, com irradiação para [flanco anterior / FID / FIE / região inguinal / testículo / grande lábio]. Associada a [náuseas, vômitos, hematúria, disúria, polaciúria, inquietação].
Nega febre e calafrios. Episódios prévios de litíase: [ ]. Rim único / transplante: [nega].`,
`${EF_CV}
${EF_AR}
ABD: [flácido, sem sinais de irritação peritoneal], Giordano [positivo à D/E]. [Sem massa pulsátil abdominal.]`,
`1. Cólica renal [D/E] provável por nefrolitíase
2. [Afastar: pielonefrite obstrutiva / aneurisma de aorta (> 60 anos) / apendicite / gravidez ectópica]`,
`- Analgesia: [dipirona + cetoprofeno EV], [opioide se refratário]
- Antiemético se necessário
- Exames: EAS, hemograma, função renal, [beta-hCG], [urocultura]
- Imagem: [TC de abdome sem contraste / USG de vias urinárias]
- [Alta com analgesia + tansulosina se cálculo distal ≤ 10 mm, sem infecção e dor controlada]
- Urgência urológica se febre com obstrução, rim único obstruído, IRA ou dor refratária`)},

an_hd:{g:'dig',t:'Hemorragia digestiva',code:'K92',rel:[['gbs','Glasgow-Blatchford'],['cd_hda','Conduta HDA'],['rx_hda','Prescrição HDA']],body:an('[Vômito com sangue / fezes pretas]',
`Paciente refere [hematêmese (__ episódios, volume estimado __) / vômitos em borra de café / melena / hematoquezia] há [ ]. Associado a [tontura, síncope, dispneia, dor epigástrica, fraqueza].
Uso de AINE / AAS / anticoagulante / antiagregante: [ ]. Etilismo: [ ]. Hepatopatia conhecida: [ ]. Varizes ou HDA prévia: [ ]. Úlcera prévia: [ ].`,
`${EF_CV} TEC [ ] s. Mucosas [hipocoradas __+/4+].
${EF_AR}
ABD: [flácido, doloroso em epigástrio], [estigmas de hepatopatia: ascite, circulação colateral, aranhas vasculares, ginecomastia, eritema palmar].
Toque retal: [melena / sangue vivo / fezes normais].
${EF_NEU}`,
`1. Hemorragia digestiva [alta / baixa] [varicosa / não varicosa], [com/sem] instabilidade hemodinâmica
Glasgow-Blatchford: [ ]`,
`- Monitorização, 2 acessos calibrosos, jejum
- Cristaloide guiado por perfusão; transfusão se Hb < 7 g/dL (< 8 se coronariopata)
- Omeprazol 80 mg EV
- [Suspeita de varizes: terlipressina + ceftriaxona]
- Exames: tipagem, hemograma, coagulograma, função renal, ureia, eletrólitos, função hepática
- EDA em até 24 h (até 12 h se varicosa ou instável)`)},

an_gea:{g:'dig',t:'Diarreia, vômitos e desidratação',code:'A09 · E86',rel:[['rx_gea','Prescrição GEA'],['rx_alta_gea','Receita de alta GEA']],body:an('Diarreia e vômitos',
`Paciente refere [diarreia (__ episódios/dia, [líquida/pastosa], [com/sem] sangue ou muco) / vômitos (__ episódios)] há [ ] dias, associada a [dor abdominal em cólica, febre, náuseas, hiporexia].
Aceitação de líquidos: [ ]. Diurese: [ ]. Contactantes com quadro semelhante: [ ]. Alimento suspeito: [ ]. Viagem: [ ]. Uso recente de antibiótico: [ ].`,
`${EF_CV} TEC [ ] s.
Hidratação: [hidratado / desidratado __+/4+ (mucosas secas, olhos fundos, sinal da prega)].
${EF_AR}
ABD: [plano, RHA aumentados, flácido, levemente doloroso difusamente, sem sinais de irritação peritoneal].
${EF_NEU}`,
`1. Gastroenterite aguda [viral provável / bacteriana / disentérica]
2. [Desidratação leve/moderada/grave]`,
`- Hidratação [oral com SRO / venosa: SF 0,9% __ mL]
- Antiemético [ondansetrona]
- [Exames se desidratação grave, idoso, comorbidade: função renal, eletrólitos, hemograma]
- Reavaliação após hidratação e teste de aceitação oral`)},

an_itu:{g:'renal',t:'Infecção urinária e pielonefrite',code:'N39.0 · N10',rel:[['rx_pielo','Prescrição pielonefrite'],['rx_alta_itu','Receitas de alta ITU'],['ex_eas','EAS']],body:an('Ardência para urinar',
`Paciente refere [disúria, polaciúria, urgência, dor suprapúbica, hematúria] há [ ] dias, [com/sem] febre (até __ °C), calafrios, dor lombar [D/E], náuseas e vômitos.
Corrimento vaginal: [nega]. ITU de repetição: [ ]. Antibiótico recente: [ ]. Sonda / cálculo / alteração anatômica: [ ]. [Gestante: __.]`,
`${EF_CV}
${EF_AR}
ABD: [flácido, doloroso em hipogástrio], Giordano [positivo à D/E / negativo].
${EF_NEU}`,
`1. [Cistite não complicada / pielonefrite aguda [sem/com] critérios de gravidade / ITU complicada]`,
`- EAS e urocultura com antibiograma [antes do antibiótico]
- [Hemograma, PCR, função renal]
- Antibiótico: [ ]
- Analgesia e antiemético
- [USG de vias urinárias se sem melhora em 48–72 h, suspeita de obstrução ou sepse]`)},

an_pele:{g:'osteo',t:'Celulite, erisipela e abscesso',code:'L03 · L02 · A46',rel:[['rx_pele','Prescrição pele'],['rx_alta_pele','Receitas de alta pele']],body:an('Perna vermelha e inchada',
`Paciente refere [vermelhidão, calor, edema e dor] em [ ] há [ ] dias, com progressão [ ], [com/sem] febre e calafrios. Porta de entrada: [intertrigo/tínea interdigital / ferida / picada / úlcera / não identificada]. [Ponto de flutuação / drenagem de pus: __.]
DM: [ ]. Insuficiência venosa / linfedema: [ ]. Episódios prévios: [ ].`,
`${EF_CV}
${EF_AR}
Lesão: placa eritematosa [de bordas bem delimitadas e elevadas (erisipela) / mal delimitada (celulite)] em [ ], medindo [ ] cm, [quente, edemaciada, dolorosa], [flutuação __], [bolhas __], [necrose __], [crepitação __]. Limites marcados com caneta às [ ].
Linfangite / linfonodomegalia: [ ]. Tínea interdigital: [ ].
Sinais de fasceíte necrosante (dor desproporcional, bolhas hemorrágicas, crepitação, anestesia da pele, toxemia): [ausentes].`,
`1. [Erisipela / celulite / abscesso cutâneo] em [ ] [com/sem] critérios de gravidade`,
`- [Abscesso: drenagem]
- Antibiótico [oral / EV]: [ ]
- Elevação do membro, analgesia, tratar a porta de entrada
- Reavaliação em 48–72 h`)},

an_lomb:{g:'osteo',t:'Lombalgia',code:'M54.5',rel:[['rx_lomb','Prescrição lombalgia']],body:an('Dor nas costas',
`Paciente refere dor lombar há [ ] dias, de início [após esforço/súbito/insidioso], [com/sem] irradiação para [MID/MIE abaixo do joelho], intensidade [ ]/10, piora com [movimento/tosse], melhora com [repouso].
Sinais de alarme: nega febre, perda de peso, câncer prévio, trauma importante, uso de corticoide, imunossupressão, uso de droga EV, dor noturna que não melhora com repouso, anestesia em sela, retenção ou incontinência urinária/fecal, déficit motor progressivo, idade > 50 anos com 1º episódio.`,
`${EF_CV}
${EF_ABD} [Sem massa pulsátil.]
Coluna: [dor à palpação da musculatura paravertebral lombar, sem dor à percussão das apófises espinhosas]. Lasègue [negativo/positivo a __°]. Força, sensibilidade e reflexos de MMII [preservados / alterados em __]. Sensibilidade em sela [preservada].`,
`1. Lombalgia aguda [mecânica inespecífica / com radiculopatia L__–S__]
2. [Sem sinais de alarme]`,
`- Analgesia: [ ]
- [Alta com AINE por curto período + relaxante muscular + calor local, manter atividade conforme tolerância]
- Retorno se sinais de alarme
- Exames de imagem [não indicados na ausência de sinais de alarme]`)},

an_psiq:{g:'mental',t:'Agitação psicomotora',code:'R45.1 · F',rel:[['cd_agit','Conduta agitação'],['rx_agit','Prescrição agitação'],['ciwa','CIWA-Ar']],body:an('[Agitado / agressivo]',
`Paciente [trazido por __] com [agitação, agressividade, heteroagressividade, alucinações, delírio persecutório, fala desorganizada, insônia] há [ ].
Diagnóstico psiquiátrico prévio: [ ], em uso de [ ], adesão [ ]. Uso de álcool / drogas (última dose __): [ ]. Ideação suicida / homicida: [ ].
Causas orgânicas a afastar: [febre, trauma craniano, hipoglicemia, abstinência alcoólica, intoxicação, infecção, distúrbio metabólico, delirium em idoso].`,
`${AN_SV.replace('Geral: [BEG], [corado, hidratado, acianótico, anictérico, afebril], [lúcido e orientado], Glasgow [15].','')}
EXAME PSÍQUICO: aparência [ ], atitude [hostil/colaborativa], consciência [vígil], orientação [ ], atenção [ ], humor/afeto [ ], pensamento (curso/forma/conteúdo) [ ], sensopercepção [alucinações __], juízo crítico [ ], psicomotricidade [agitada].
Risco: [baixo/moderado/alto] para auto e heteroagressão.
${EF_NEU}`,
`1. Agitação psicomotora por [surto psicótico / mania / intoxicação / abstinência / delirium / transtorno de personalidade]`,
`- Abordagem verbal, ambiente calmo, equipe de segurança
- [Contenção química: __]
- [Contenção mecânica com prescrição e reavaliação a cada 15–30 min, se indispensável]
- HGT, sinais vitais, [exames para causa orgânica]
- Avaliação da psiquiatria`)},

an_ped:{g:'crianca',t:'Febre na criança',code:'R50 · pediatria',rel:[['pedi','Doses pediátricas'],['rx_ped','Prescrição pediátrica']],body:`IDENTIFICAÇÃO: [nome], [ ] anos e [ ] meses, [sexo], peso [ ] kg. Acompanhante: [mãe / pai / ]. Informante: [ ].

QP: "Febre"

HDA: Mãe refere febre há [ ] dias, máxima de [ ] °C, [com/sem] calafrios, que [cede/não cede] com antitérmico ([__] a cada __ h). Associada a [coriza, tosse, dor de garganta, otalgia, vômitos (__ x/dia), diarreia (__ x/dia), exantema, irritabilidade, sonolência, recusa alimentar, dificuldade para respirar]. Diurese [preservada / diminuída]. Aceitação alimentar e de líquidos: [ ].
Sinais de alarme: [nega convulsão, letargia, gemência, petéquias, rigidez de nuca, fontanela abaulada, desidratação].

ANTECEDENTES
Gestação e parto: [ ]. Doenças prévias e internações: [ ]. Alergias: [nega]. Medicações: [ ]. Vacinas: [em dia conforme caderneta]. Creche / escola: [ ]. Contatos doentes: [ ].

EXAME FÍSICO
Peso [ ] kg | FC [ ] bpm | FR [ ] irpm | SpO2 [ ]% | Tax [ ] °C | TEC [ ] s
Geral: [BEG, ativo e reativo, corado, hidratado, acianótico, anictérico, eupneico].
Oroscopia: [ ]. Otoscopia: [ ]. Rinoscopia: [ ].
AR: [MV+ sem RA, sem tiragens].
ACV: [RCR 2T, BNF, sem sopros].
ABD: [plano, flácido, indolor, sem visceromegalias].
Pele: [sem exantema, sem petéquias].
Neuro: [ativo, sem sinais meníngeos, fontanela normotensa].

HIPÓTESES DIAGNÓSTICAS
1. [IVAS / faringoamigdalite / OMA / pneumonia / ITU / GEA / arbovirose / febre sem sinais localizatórios]

CONDUTA
- Antitérmico: [dipirona / paracetamol / ibuprofeno] na dose por peso
- [Exames: hemograma, PCR, EAS e urocultura (sonda/jato médio), RX de tórax conforme quadro]
- [Antibiótico: __]
- Orientações de sinais de alarme e retorno em [48 h / se piora]
${AN_FIM}`},

an_evol:{g:'geral',t:'Evolução e reavaliação',code:'evolução no PS',body:`EVOLUÇÃO — [data] [hora]

S: Paciente refere [melhora/piora/manutenção] de [sintoma] após [medicação/conduta]. [Aceitando dieta. Diurese presente. Evacuações __.] Nega [ ].

O: PA [ ]x[ ] mmHg | FC [ ] bpm | FR [ ] irpm | SpO2 [ ]% em [ ] | Tax [ ] °C | HGT [ ] | Dor [ ]/10
[BEG, lúcido, orientado, corado, hidratado, eupneico.]
[Exame dirigido: ]
Exames: [Hb __ | Leuco __ | Plaq __ | PCR __ | Ur __ | Cr __ | Na __ | K __ | Trop __ | Lactato __ | Gaso: pH __ pCO2 __ HCO3 __ BE __]
Imagem: [ ]

A: [Diagnóstico] — [estável / em melhora / sem melhora / piora].

P:
- [Manter / ajustar conduta]
- [Alta com orientações / observação / internação em __ / vaga solicitada na CERCON às __ / avaliação de __]`},

an_alta:{g:'geral',t:'Nota de alta do PS',code:'sumário de alta',body:`NOTA DE ALTA — [data] [hora]

Paciente [nome], [ ] anos, admitido(a) às [ ] com quadro de [ ].
Durante a permanência: [medicações realizadas, exames e resultados relevantes].
Evoluiu com [melhora clínica], sinais vitais estáveis (PA [ ]x[ ] | FC [ ] | SpO2 [ ]% | Tax [ ]), [aceitando dieta via oral, deambulando, dor controlada].

Diagnóstico: [ ] (CID-10 [ ])

Conduta na alta:
- Receita: [ ]
- Orientações sobre sinais de alarme: [ ]
- Retorno ao PS se [ ]
- Acompanhamento na UBS em [ ] dias [com exames __]
- [Encaminhamento para __]
- [Atestado de __ dias]

Paciente e acompanhante orientados, compreenderam e concordaram com a conduta.`}
});
