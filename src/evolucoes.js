/* SOAP de sutura e evoluções de pacientes com drenos, sondas e tubos (out/2026). */
Object.assign(AN,{
an_sutsoap:{g:'osteo',t:'SOAP de sutura (registro do procedimento)',code:'T14.1 · S01 · S61 · S81',rel:[['an_ferida','Anamnese de ferimento'],['cd_sutura','Suturas e anestésicos'],['rx_tetano','Tétano'],['rx_alta_pele2','Mordedura (alta)']],body:`S: Paciente refere ferimento em [região: __] por [objeto cortante (faca, vidro, lata) / queda / batida / mordedura de __] há [ ] h. Sangramento [controlado com compressão / ativo]. Nega dormência, perda de força ou de movimento distal [ ]. Vacina antitetânica [completa, última dose há __ anos / incompleta / desconhecida]. Alergias: [nega / lidocaína / látex / __]. Uso de anticoagulante: [ ]. Comorbidades: [DM / imunossupressão / nega].

O: [BEG, corado, hidratado, anictérico, acianótico], PA [ ] mmHg, FC [ ] bpm.
Lesão: ferimento [corto-contuso / inciso / lacerante] de [ ] cm em [ ], [superficial / atinge subcutâneo / fáscia / músculo], bordas [regulares / irregulares], [limpo / contaminado], sem corpo estranho visível, sem exposição de tendão, osso ou articulação.
Distal: perfusão periférica [< 2 s], pulsos [presentes e simétricos], sensibilidade e motricidade [preservadas], tendões flexores e extensores [íntegros].

A: Ferimento [corto-contuso] em [ ] [sem lesão de estrutura nobre]. [Risco de tétano: ferimento limpo e superficial / outros ferimentos].

P: PROCEDIMENTO: sutura simples
- Após consentimento verbal, paciente em [decúbito dorsal / sentado]
- Antissepsia com [clorexidina / PVPI] e colocação de campo estéril
- Anestesia local [infiltrativa / bloqueio digital] com lidocaína [1% / 2%] [sem / com] vasoconstritor, [ ] mL
- Limpeza exaustiva com SF 0,9% [ ] mL sob pressão, exploração da ferida [sem achados de corpo estranho ou lesão profunda], [desbridamento de bordas desvitalizadas]
- Sutura com fio [nylon 3-0 / 4-0 / 5-0 / Vicryl 4-0 em subcutâneo], [ ] pontos [simples / Donati / contínuo]
- Hemostasia satisfatória, curativo [oclusivo com gaze / película]
- Procedimento sem intercorrências; paciente tolerou bem
- [Vacina dT / soro ou imunoglobulina antitetânica]; [antibiótico profilático: __]
- Orientado: manter curativo seco por 24–48 h, depois lavar com água e sabão 2x/dia; retirar pontos em [ ] dias na UBS (face 5; couro cabeludo 7–10; tronco e membros 10–14; mãos, pés e articulações 14); retornar se vermelhidão, calor, pus, febre ou abertura dos pontos.`},

an_retpontos:{g:'osteo',t:'Retirada de pontos e revisão de ferida',code:'Z48.0',rel:[['an_sutsoap','SOAP de sutura'],['rx_alta_pele','Pele (alta)']],body:`S: Paciente retorna para [retirada de pontos / revisão de ferida] em [região], suturada há [ ] dias. Refere [sem queixas / dor / vermelhidão / saída de secreção / febre]. Uso do antibiótico prescrito: [ ].

O: Ferida operatória / sutura em [ ] com [ ] pontos, [bem coaptada / deiscência parcial de __ cm], [sem / com] hiperemia [ ] cm ao redor, [sem / com] calor, edema, secreção [serosa / purulenta / sanguinolenta], [sem / com] flutuação. Sem sinais de [necrose / corpo estranho].

A: Ferida [em boa evolução / com sinais de infecção superficial / com deiscência / com abscesso].

P:
- [Retirados todos os pontos sem intercorrências / retirados pontos alternados; restante em __ dias]
- [Aplicadas fitas adesivas (Steri-Strip)]
- [Coletada secreção para cultura]; [drenagem / abertura de pontos e lavagem]; [antibiótico: __]
- Orientado: hidratar a cicatriz, fotoproteção por 6 meses, retornar se sinais de infecção.`},

an_evchk:{g:'geral',t:'Evolução diária: checklist de dispositivos',code:'evolução · SOAP',rel:[['an_evdrt','Dreno de tórax'],['an_evdabd','Drenos abdominais'],['an_evsondas','Sondas'],['an_evtot','Intubado']],body:`S: [Queixas / dor / sono / evacuação / diurese / aceitação da dieta].

O: [Estado geral], PA [ ] mmHg, FC [ ] bpm, FR [ ] irpm, Tax [ ] °C, SpO2 [ ]% em [ar ambiente / __ L/min].
Balanço hídrico 24 h: entrada [ ] mL, saída [ ] mL, BH [ ] mL. Diurese [ ] mL ([ ] mL/kg/h).
DISPOSITIVOS (data de inserção, D__ de uso, aspecto, débito, necessidade):
- Acesso venoso [periférico / CVC em __] inserido em [__/__] (D[ ]): sítio [sem flogose], curativo [íntegro]
- Sonda vesical [Foley __ Fr] em [__/__] (D[ ]): diurese [clara / hematúria / colúria]
- [SNG / SNE / GTT] em [__/__] (D[ ]): [aberta em frasco, débito __ mL / em dieta __ mL/h]
- Dreno [__] em [__]: débito [ ] mL/24 h, aspecto [ ]
- [TOT / TQT]: [parâmetros]
[Exame segmentar]

A: [Diagnósticos e problemas ativos]
Dispositivos: [todos ainda indicados / sonda vesical e acesso sem indicação].

P:
- Retirar dispositivos sem indicação hoje: [ ]
- Profilaxias: TEV [ ], úlcera de estresse [ ], cabeceira 30° [ ], mudança de decúbito [ ]
- Dieta [ ], glicemia [ ], analgesia [ ], sedação/delirium [ ], evacuação [ ]
- [Exames / pendências / plano de alta]`},

an_evdrt:{g:'resp',t:'Evolução com dreno de tórax',code:'J93 · J94.2 · J86 · S27',rel:[['cd_ttorax','Trauma de tórax'],['proc_toraco','Toracocentese']],body:`S: Paciente em D[ ] de drenagem torácica à [D/E] por [pneumotórax / hemotórax / derrame pleural / empiema / pós-operatório]. Refere [dor no local do dreno __/10 / dispneia / sem queixas]. Tosse [ ].

O: [Estado geral], PA [ ] mmHg, FC [ ] bpm, FR [ ] irpm, SpO2 [ ]% em [ ].
Tórax: MV [presente bilateralmente / diminuído em base __], [sem / com] enfisema subcutâneo [ ].
DRENO DE TÓRAX [__ Fr] em [__] EIC, linha axilar [média / anterior], inserido em [__/__]:
- Selo d'água [com / sem] oscilação respiratória da coluna
- Borbulhamento (fuga aérea): [ausente / presente à tosse / contínuo]
- Débito: [ ] mL nas últimas 24 h, aspecto [seroso / serossanguinolento / hemático / purulento / quiloso]
- [Em aspiração contínua a -20 cmH2O / em selo d'água simples]
- Sítio de inserção: [sem flogose, sem secreção], ponto de fixação [íntegro], curativo [limpo e seco]
RX de tórax [__/__]: pulmão [expandido / com pneumotórax residual __], [sem / com] derrame residual, dreno [bem posicionado / com orifícios fora do tórax].

A: [Diagnóstico] em drenagem torácica, D[ ], [com boa evolução / com fuga aérea persistente / com débito elevado].

P:
- Manter frasco abaixo do nível do tórax; NÃO clampar o dreno no transporte
- Fisioterapia respiratória, incentivador inspiratório, analgesia
- Critérios para retirada: pulmão expandido no RX, sem fuga aérea por 24 h e débito < [200–300] mL/24 h (não purulento, não hemático)
- [Retirada do dreno hoje com manobra de Valsalva + curativo oclusivo; RX de controle após]
- Sinais de alarme: débito > 1.500 mL inicial ou > 200 mL/h por 2–4 h (hemotórax: cirurgia), fuga aérea grande persistente, enfisema progressivo.`},

an_evdabd:{g:'dig',t:'Evolução com drenos abdominais',code:'Z48.8 · K65 · K91',rel:[['proc_paracent','Paracentese']],body:`S: Paciente em [ ]º PO de [cirurgia] / D[ ] de drenagem de [coleção / abscesso], com dreno(s) abdominal(is). Refere [dor __/10 / náuseas / sem queixas]. Aceitação da dieta [ ]. Flatos [ ], evacuação [ ]. Febre: [ ].

O: [Estado geral], PA [ ] mmHg, FC [ ] bpm, Tax [ ] °C.
Abdome: [plano / distendido], RHA [presentes], [flácido / doloroso em __], ferida operatória [limpa, seca, sem flogose / com hiperemia / secreção __].
DRENO(S):
- [Penrose / tubular de sucção (Blake, Jackson-Pratt, Portovac) / pigtail percutâneo] em [flanco D / flanco E / FID / __], inserido em [__/__]
- Débito: [ ] mL nas últimas 24 h (anterior [ ] mL), aspecto [seroso / serossanguinolento / hemático / purulento / bilioso / entérico / quiloso]
- [Sucção mantida / reservatório com vácuo perdido]; pigtail [lavado com SF 10 mL de 8/8 h]
- Sítio: [sem flogose], fixação [íntegra]
[Amilase / bilirrubina do líquido do dreno: __ (se suspeita de fístula pancreática ou biliar)]

A: [ ]º PO de [ ] / [abscesso] em drenagem, [com boa evolução / débito em queda / suspeita de fístula __ / suspeita de sangramento].

P:
- Medir e anotar o débito a cada [6 / 24] h; manter o reservatório abaixo do nível do sítio
- Retirada quando débito < [30–50] mL/24 h, seroso, e sem sinais de fístula; [tracionar Penrose 2 cm/dia]
- [Pigtail: USG/TC de controle antes de retirar]
- Sinais de alarme: débito hemático volumoso (sangramento: hemoglobina e cirurgião), conteúdo entérico ou bilioso (fístula), febre, peritonite.`},

an_evsondas:{g:'geral',t:'Evolução com sondas (vesical, nasogástrica e enteral)',code:'Z46.6 · Z43.5 · Z46.5',rel:[['proc_sondas','Sondagens']],body:`S: [Queixas]. Paciente com [sonda vesical de demora / SNG / SNE] desde [__/__] (D[ ]) por [retenção urinária / controle de diurese / obstrução intestinal / dieta / descompressão].

O: [Estado geral], sinais vitais [ ].
SONDA VESICAL [Foley __ Fr, __ vias]: diurese [ ] mL/24 h, aspecto [clara / concentrada / hematúria leve / hematúria com coágulos / turva], [sem / com] irrigação contínua [ ] mL/h, bolsa coletora [abaixo da bexiga, sistema fechado], meato [sem lesão].
SNG [__ Fr] em [narina D/E], fixada em [ ] cm: [aberta em frasco, débito [ ] mL/24 h, aspecto (gástrico / bilioso / fecaloide / borra de café)] / [fechada].
SNE [__ Fr], posição pós-pilórica confirmada por RX em [__/__], fixada em [ ] cm: dieta [ ] a [ ] mL/h, [tolerando / com distensão, vômitos, diarreia]. Resíduo gástrico: [ ].
Narina: [sem lesão por pressão].

A: [Diagnóstico]; [sonda vesical ainda indicada / sem indicação]; [SNG com débito em queda / SNE com boa tolerância à dieta].

P:
- Sonda vesical: retirar assim que possível (cada dia aumenta o risco de ITU); [teste de micção após retirada / sondagem de alívio se resíduo > 400 mL]
- Não colher urocultura de rotina em sondado assintomático
- SNG: retirar quando débito < [ ] mL/24 h, flatos/evacuação e sem distensão
- SNE: cabeceira 30–45°; lavar com 20–30 mL de água antes e após medicações; obstrução: água morna, não usar fio-guia com a sonda no paciente
- Fixação trocada diariamente, alternando a posição.`},

an_evtot:{g:'resp',t:'Evolução do paciente intubado (TOT e VM)',code:'J96 · Z99.1',rel:[['vm','Ventilação mecânica inicial'],['rx_sedacao','Sedação contínua'],['rass','RASS']],body:`S: Paciente em D[ ] de intubação orotraqueal por [insuficiência respiratória / rebaixamento de consciência / proteção de via aérea / choque] em [__/__]. Intercorrências nas últimas 24 h: [ ].

O: RASS [ ], sedação: [fentanil __ mcg/kg/h, midazolam / propofol __], [pupilas __].
PA [ ] mmHg, PAM [ ], FC [ ] bpm, Tax [ ] °C. DVA: [noradrenalina __ mcg/kg/min / sem DVA].
TOT [__ (diâmetro)] fixado em [ ] cm na rima labial, cuff [ ] cmH2O (alvo 20–30).
VM: modo [VCV / PCV / PSV], VC [ ] mL ([ ] mL/kg de peso predito), PEEP [ ], FiO2 [ ]%, FR [ ] (total [ ]), Pplatô [ ], driving pressure [ ] (alvo < 15), SpO2 [ ]%.
Gasometria: pH [ ], PaO2 [ ], PaCO2 [ ], HCO3 [ ], P/F [ ].
Secreção traqueal [pouca / moderada / abundante], aspecto [hialino / amarelado / purulento / hemático].
Ausculta: [ ]. Balanço hídrico [ ] mL. Diurese [ ] mL/24 h. Dieta [enteral __ mL/h].
RX de tórax: TOT [2–4 cm acima da carina], [infiltrados __].

A: [Diagnóstico] em VM, D[ ], [P/F __ (SDRA leve/moderada/grave)], [melhorando / estável / piorando].

P:
- Ventilação protetora: VC 6 mL/kg, Pplatô < 30, driving < 15, SpO2 92–96%
- Despertar diário + teste de respiração espontânea se: causa em resolução, FiO2 ≤ 40%, PEEP ≤ 8, sem DVA alta, com drive. TRE: PSV 5–7 / tubo T por 30–120 min
- Bundle de PAV: cabeceira 30–45°, higiene oral com clorexidina [conforme protocolo do serviço], cuff 20–30, aspirar só se necessário
- Profilaxias: TEV [ ], úlcera de estresse [ ], glicemia 140–180
- [Extubação hoje se TRE ok / traqueostomia se VM prevista > 10–14 dias]`},

an_evtqt:{g:'resp',t:'Evolução com traqueostomia',code:'Z93.0 · J95.0',rel:[['an_evtot','Paciente intubado']],body:`S: Paciente com traqueostomia [cirúrgica / percutânea] realizada em [__/__] (D[ ]) por [VM prolongada / obstrução de via aérea alta / proteção de via aérea]. [Em VM / em macronebulização / em ar ambiente]. Queixas: [ ].

O: [Estado geral], FR [ ] irpm, SpO2 [ ]% com [O2 por máscara de traqueostomia __ L/min / VM __].
Cânula [plástica com cuff / plástica sem cuff / metálica] nº [ ], cuff [insuflado __ cmH2O / desinsuflado], cadarço [fixo, 1 dedo de folga].
Estoma: [limpo / hiperemiado / com secreção __ / com sangramento / com tecido de granulação], [sem / com] enfisema subcutâneo.
Secreção traqueal [pouca / moderada / abundante], [hialina / purulenta / hemática]. Fonação: [ ]. Deglutição: [ ].

A: Paciente traqueostomizado D[ ], [em desmame de VM / fora de VM / em processo de decanulação].

P:
- Aspiração de secreção conforme necessidade, umidificação do O2
- Troca de curativo e limpeza do estoma 2x/dia; não trocar a cânula antes de 5–7 dias (trajeto imaturo)
- Ter à beira-leito: cânula reserva do mesmo número e um número menor, pinça, aspirador e bolsa-válvula
- Decanulação: [desinsuflar cuff → válvula de fala / oclusão progressiva por 24–48 h → retirada]
- Saída acidental antes de 7 dias: NÃO reintroduzir às cegas: O2 pelo estoma e pela boca, IOT por via oral se preciso; acionar cirurgia.`},

an_evgtt:{g:'dig',t:'Evolução com gastrostomia / jejunostomia',code:'Z93.1 · Z93.4 · K94.2',rel:[['an_evsondas','Sondas']],body:`S: Paciente com [gastrostomia endoscópica (PEG) / cirúrgica / jejunostomia] realizada em [__/__] por [disfagia pós-AVC / neoplasia de cabeça e pescoço / demência / __]. Motivo da avaliação: [rotina / saída acidental / vazamento / obstrução / dor / hiperemia]. Dieta: [ ] mL [__ vezes ao dia / contínua __ mL/h].

O: [Estado geral], sinais vitais [ ]. Abdome [flácido, indolor / doloroso / distendido].
Sonda [__ Fr], marca na pele em [ ] cm, anteparo externo [com 0,5–1 cm de folga / apertado], [gira livremente / não gira], balão [ ] mL de água destilada (conferido).
Estoma: [limpo / hiperemia __ cm / secreção __ / tecido de granulação / vazamento de dieta / dermatite].
Funcionamento: [infusão e lavagem sem resistência / obstruída].

A: [Gastrostomia funcionante sem complicações / infecção do estoma / tecido de granulação / obstrução / saída acidental].

P:
- Lavar com 30 mL de água antes e depois de cada dieta ou medicação; medicação líquida ou bem triturada, uma por vez
- Higiene do estoma com água e sabão, secar bem; girar a sonda diariamente (PEG)
- Obstrução: água morna com seringa de 50 mL, movimentos de aspirar e empurrar
- Saída acidental: trajeto fecha em horas: passar sonda Foley de mesmo calibre no estoma em até 2–4 h para manter o trajeto (se trajeto maduro, > 4–6 semanas); antes disso, chamar o cirurgião/endoscopista; confirmar posição antes de usar
- Infecção leve: cuidados locais [+ cefalexina]; granulação: nitrato de prata.`},

an_evnefro:{g:'renal',t:'Evolução com nefrostomia / cistostomia / duplo J',code:'Z93.6 · N13',rel:[['rx_uro','Urologia no PS'],['an_evsondas','Sondas']],body:`S: Paciente com [nefrostomia percutânea à D/E / cistostomia / cateter duplo J] desde [__/__] por [obstrução ureteral por cálculo / neoplasia / estenose de uretra / retenção]. Motivo: [rotina / redução do débito / saída do cateter / hematúria / febre / dor lombar].

O: [Estado geral], PA [ ] mmHg, FC [ ] bpm, Tax [ ] °C.
Nefrostomia [__ Fr]: débito [ ] mL/24 h (anterior [ ]), aspecto [claro / hematúrico / turvo / purulento], fixação [íntegra], sítio [sem flogose / com vazamento]. Diurese uretral [ ] mL.
Cistostomia: [funcionante], débito [ ] mL, sítio [ ].
Punho-percussão lombar: [ ]. Abdome: [ ].
Exames: creatinina [ ] (anterior [ ]), [EAS / urocultura do cateter], [USG: hidronefrose __].

A: [Nefrostomia funcionante / obstrução ou deslocamento do cateter / pielonefrite associada a cateter / hematúria].

P:
- Bolsa abaixo do nível do rim; anotar débito separado de cada cateter
- Redução súbita do débito: verificar dobras; lavar com 5–10 mL de SF 0,9% sem aspirar (só se protocolo/urologia permitir); USG
- Saída da nefrostomia: curativo, USG, contato com radiologia intervencionista/urologia em até 24 h (trajeto fecha rápido)
- Febre: urocultura colhida do cateter recém-trocado ou do novo dispositivo, hemoculturas e antibiótico
- Duplo J: lembrar a data de retirada/troca ([__/__], em geral até 3–6 meses) e anotar no resumo de alta.`}
});
