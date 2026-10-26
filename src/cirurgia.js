/* Trauma, cirurgia, urologia, olho e ouvido (out/2026): trauma de tórax e abdome/FAST, fraturas e luxações, suturas e anestésicos locais,
   epistaxe, colecistite/colangite, diverticulite, obstrução intestinal, hérnia encarcerada, retenção urinária, escroto agudo,
   parafimose, priapismo, olho vermelho/trauma ocular, otites. Escores: Ottawa tornozelo/joelho, TWIST. */

/* ---------- Anamneses ---------- */
Object.assign(AN,{
an_ferida:{g:'osteo',t:'Ferimento / sutura',code:'T14.1 · S01 · S61',rel:[['cd_sutura','Suturas e anestésicos'],['rx_tetano','Tétano']],body:an('Se cortou',
`Paciente com ferimento em [região: __] por [objeto cortante (faca, vidro, lata) / contuso (queda, batida) / perfurante / mordedura] há [ ] h. Local do acidente: [casa / trabalho / rua]; ferimento [limpo / sujo (terra, ferrugem, fezes)].
Sangramento: [controlado com compressão / ativo / pulsátil]. Dormência, perda de força ou de movimento distal: [ ]. Corpo estranho possível (vidro): [ ].
Vacina antitetânica: [completa, última dose há __ anos / incompleta / desconhecida]. Alergias (lidocaína, látex): [ ]. Anticoagulante: [ ]. Diabetes, imunossupressão: [ ]. Mão dominante: [ ].`,
`${EF_CV}
LESÃO: ferimento [corto-contuso / inciso / lacerante / puntiforme / abrasão] de [ ] cm em [ ], [superficial / atinge subcutâneo / fáscia / músculo], bordas [regulares / irregulares], [limpo / contaminado], [sem / com] corpo estranho visível. Sangramento [ ].
Distal: perfusão [TEC < 2 s], pulsos [ ], sensibilidade [preservada (discriminação de 2 pontos nos dedos)], motricidade e tendões (flexão/extensão contra resistência de cada dedo/articulação): [íntegros].
[RX se suspeita de fratura ou corpo estranho radiopaco (vidro, metal)].`,
`1. Ferimento [ ] em [ ] [sem / com] lesão de estrutura nobre`,
`- Analgesia; anestesia local com lidocaína [1%/2%] [com/sem vasoconstritor], __ mL
- Limpeza exaustiva com SF 0,9% sob pressão; exploração; desbridamento
- Sutura com [nylon __-0], [ ] pontos [simples / Donati]; curativo
- [Profilaxia antitetânica]
- [Antibiótico se mordedura, contaminação grosseira, mão/pé, imunossuprimido]
- Retirada dos pontos em [ ] dias na UBS; orientado sobre sinais de infecção`)},

an_escroto:{g:'renal',t:'Dor escrotal aguda',code:'N44 · N45',rel:[['cd_escroto','Escroto agudo'],['twist','TWIST']],body:an('Dor no testículo',
`Paciente com dor em testículo [D/E] de início [súbito / gradual] há [ ] h, intensidade [ ]/10, [durante o sono / após esforço ou trauma / espontânea], irradiada para [região inguinal / abdome inferior].
Náuseas/vômitos: [ ]. Febre: [ ]. Disúria, secreção uretral, polaciúria: [ ]. Episódios prévios de dor que melhoraram sozinhos: [ ] (torção intermitente).
Relação sexual desprotegida, parceria com IST: [ ]. Caxumba recente: [ ]. Procedimento urológico/sondagem: [ ].`,
`${EF_ABD}
Genitália: testículo [D/E] [elevado / horizontalizado / em posição normal], [edemaciado, endurecido, doloroso à palpação], epidídimo [ ]. Reflexo cremastérico: [presente / ausente]. Sinal de Prehn (alívio ao elevar): [ ]. "Blue dot": [ ]. Transiluminação: [ ]. Hiperemia escrotal: [ ].
Hérnia inguinal: [ ]. Secreção uretral: [ ].
TWIST: [ ] pontos.`,
`1. Escroto agudo: [torção testicular / torção de apêndice testicular / orquiepididimite / hérnia encarcerada / trauma]`,
`- [Avaliação imediata da urologia / exploração cirúrgica sem esperar exame]
- [USG Doppler de bolsa escrotal]
- Analgesia; dieta zero se suspeita de torção
- [EAS, urocultura, pesquisa de gonorreia/clamídia; tratamento de epididimite]`)},

an_olho:{g:'geral',t:'Olho vermelho / trauma ocular',code:'H10 · H57.1 · S05',rel:[['cd_olho','Olho vermelho e trauma ocular'],['rx_olho','Prescrição']],body:an('Olho vermelho',
`Paciente com [olho vermelho / dor ocular / trauma ocular / corpo estranho / baixa visual / secreção] em olho [D/E/ambos] há [ ] h/dias.
Dor: [ausente / sensação de areia / intensa e profunda]. Visão: [normal / embaçada / perda súbita]. Fotofobia: [ ]. Halos ao redor das luzes: [ ]. Cefaleia, náuseas, vômitos: [ ]. Secreção: [aquosa / mucoide / purulenta]. Prurido: [ ].
Trauma: [mecanismo: martelando metal, esmerilhando, galho, soco, produto químico (ácido/álcali: __)], uso de óculos de proteção: [ ].
Lentes de contato: [ ]. Contato com pessoa com conjuntivite: [ ]. Episódios prévios, glaucoma, cirurgia ocular: [ ].`,
`Acuidade visual (tabela de Snellen, com correção): OD [ ] / OE [ ].
Pálpebras: [ ]. Conjuntiva: hiperemia [difusa / periceratocística (ao redor da córnea)], [quemose, folículos, papilas, hemorragia subconjuntival].
Córnea: [transparente / opacidade / lesão corada pela fluoresceína __ / corpo estranho em __ h]. Câmara anterior: [hifema / hipópio / rasa].
Pupilas: [isocóricas e fotorreagentes / pupila médio-midriática fixa / irregular (em gota)]. Eversão da pálpebra superior: [ ].
Movimentação ocular: [ ]. Tonometria digital: [olho endurecido / normal]. Seidel: [ ].`,
`1. [Conjuntivite viral / bacteriana / alérgica / abrasão corneana / corpo estranho / queimadura química / glaucoma agudo / uveíte / ceratite / trauma perfurante / hifema]`,
`- [Irrigação com SF 0,9% __ L até pH 7 (queimadura química)]
- [Remoção do corpo estranho com cotonete/agulha sob anestésico tópico]
- [Colírio/pomada antibiótica]
- [Avaliação oftalmológica de urgência]`)}
});

/* ---------- Prescrições ---------- */
Object.assign(RX,{
rx_trauma2:{tipo:'h',g:'osteo',t:'Fraturas, luxações e analgesia do trauma',rec:RH,rel:[['cd_fratura','Fraturas e luxações'],['cd_sutura','Suturas e anestésicos']],items:[
 {t:'Fratura exposta',rx:`1. Controle do sangramento com compressão; cobrir com gaze estéril úmida em SF 0,9%; imobilizar; NÃO reduzir osso exposto no PS (exceto se comprometimento vascular)
2. Cefazolina 1 g — 2 g EV (3 g se > 120 kg) em até 1 h, depois 2 g de 8/8 h por 24 h após o fechamento da ferida
   Gustilo III (grande lesão de partes moles/contaminação): Ceftriaxona 2 g EV 1x/dia (ou cefazolina + gentamicina 5 mg/kg/dia)
   Contaminação com terra/fezes (ambiente rural): + Metronidazol 500 mg EV de 8/8 h ou Penicilina G cristalina
   Alergia grave a beta-lactâmico: Clindamicina 900 mg EV de 8/8 h
3. Profilaxia antitetânica conforme esquema (ferimento de risco)
4. Morfina 2–4 mg EV a cada 5–10 min até controle da dor (1 mg/mL)
5. RX da articulação acima e abaixo; checar pulsos e sensibilidade antes e depois de imobilizar
6. Ortopedia: lavagem e desbridamento cirúrgico em até 24 h`,n:'Classificação de Gustilo: I ferida < 1 cm limpa; II 1–10 cm sem grande lesão de partes moles; III > 10 cm, esmagamento, contaminação grosseira, lesão vascular (IIIC).'},
 {t:'Analgesia no trauma de membros',rx:`1. Imobilização + gelo + elevação
2. Dipirona 1 g EV de 6/6 h
3. Cetoprofeno 100 mg EV em 100 mL de SF 0,9% de 12/12 h (se sem contraindicação: idoso, renal, sangramento)
4. Dor intensa: Morfina 0,05–0,1 mg/kg EV (2–4 mg) a cada 5–10 min; ou Tramadol 100 mg EV em 100 mL de SF
5. Fratura de fêmur: bloqueio do nervo femoral/fáscia ilíaca guiado por USG (bupivacaína 0,25% 20–30 mL, máx. 2,5 mg/kg)
6. Analgesia/sedação para redução: Cetamina 1 mg/kg EV (ou 0,3 mg/kg para analgesia subdissociativa) ou Propofol 0,5–1 mg/kg + Fentanil 1 mcg/kg; monitorização e material de via aérea`,n:'Checar síndrome compartimental (dor desproporcional, dor à extensão passiva) em fraturas de tíbia, antebraço e esmagamentos.'}]},

rx_cir:{tipo:'h',g:'dig',t:'Cirurgia geral no PS',rec:RH,rel:[['cd_colecist','Colecistite'],['cd_divert','Diverticulite'],['cd_obstr','Obstrução intestinal'],['cd_abdag','Abdome agudo']],items:[
 {t:'Colecistite aguda / colangite',rx:`1. Dieta zero; SNG se vômitos incoercíveis
2. Ringer lactato 1.000 mL EV em 1 h; depois 100–150 mL/h
3. Ceftriaxona 1 g — 2 g EV 1x/dia + Metronidazol 500 mg EV de 8/8 h
   Grave (grau III), colangite grave, hospitalar: Piperacilina-tazobactam 4,5 g EV de 6/6 h
4. Dipirona 1 g EV de 6/6 h + Cetoprofeno 100 mg EV de 12/12 h (se sem contraindicação) ± Morfina 2–4 mg EV se dor intensa
5. Ondansetrona 8 mg EV de 8/8 h se náusea
6. Omeprazol 40 mg EV 1x/dia
7. Hemograma, PCR, bilirrubinas, FA, GGT, TGO/TGP, amilase/lipase, ureia, creatinina, coagulograma, hemocultura se febre
8. Cirurgia: colecistectomia precoce (até 72 h, idealmente na mesma internação). Colangite: CPRE em 24–48 h (urgente se grave)`,n:'Colecistite leve com colecistectomia precoce: suspender antibiótico em até 24 h após a cirurgia.'},
 {t:'Diverticulite aguda',rx:`Não complicada, imunocompetente, sem sinais sistêmicos (pode tratar sem antibiótico):
1. Dieta líquida, progredir conforme tolerância
2. Dipirona 1 g VO de 6/6 h ± Paracetamol
3. Reavaliar em 48–72 h

Com indicação de antibiótico (imunossupressão, comorbidade grave, febre/sinais sistêmicos, PCR > 150, não melhora):
Ambulatorial: Amoxicilina 875 mg + clavulanato 125 mg VO de 12/12 h por 7 dias
   (alergia: Ciprofloxacino 500 mg 12/12 h + Metronidazol 400 mg 8/8 h)
Internação: Ceftriaxona 2 g EV 1x/dia + Metronidazol 500 mg EV de 8/8 h
Abscesso > 3–4 cm: drenagem percutânea guiada por TC`,n:'TC de abdome com contraste confirma e classifica. Peritonite purulenta ou fecal: cirurgia de urgência.'},
 {t:'Obstrução intestinal',rx:`1. Dieta zero
2. SNG calibrosa aberta em frasco (medir débito)
3. Ringer lactato 1.000 mL EV rápido e depois 125–150 mL/h conforme diurese; repor K
4. Sonda vesical se desidratação importante; diurese horária
5. Dipirona 1 g EV de 6/6 h + Morfina 2–4 mg EV se necessário
6. Ondansetrona 8 mg EV de 8/8 h
7. Suspeita de bridas sem sinais de estrangulamento: contraste hidrossolúvel (diatrizoato/gastrografina) 100 mL pela SNG e RX em 8–24 h (diagnóstico e terapêutico)
8. Hemograma, eletrólitos, ureia, creatinina, gasometria com lactato, TC de abdome com contraste
9. Avaliação da cirurgia geral`,n:'Cirurgia de urgência se: peritonite, sinais de estrangulamento (dor contínua, febre, taquicardia, leucocitose, lactato alto, sofrimento de alça na TC), alça fechada, volvo, hérnia encarcerada.'},
 {t:'Retenção urinária aguda',rx:`1. Sondagem vesical de demora (Foley 16–18 Fr; ponta Coudé se HPB difícil), com lidocaína gel 2%
   Esvaziar todo o volume (não é necessário clampear)
   Hematúria com coágulos: sonda de 3 vias 20–22 Fr + irrigação contínua com SF 0,9%
2. Tansulosina 0,4 mg VO 1x/dia (iniciar no PS e manter)
3. Suspender anticolinérgicos, opioides, descongestionantes, antidepressivos tricíclicos se possível
4. Tratar constipação; EAS e urocultura; ureia e creatinina
5. Alta com sonda e retirada (teste sem sonda) em 2–3 dias com uso da tansulosina; encaminhar à urologia`,n:'Procurar síndrome da cauda equina (dor lombar, anestesia em sela, déficit motor) e compressão medular. Diurese pós-obstrutiva (> 200 mL/h): monitorar volume e eletrólitos.'}]},

rx_uro:{tipo:'h',g:'renal',t:'Urologia no PS',rec:RH,rel:[['cd_escroto','Escroto agudo'],['cd_parafim','Parafimose e priapismo']],items:[
 {t:'Orquiepididimite',rx:`< 35 anos ou risco de IST:
1. Ceftriaxona 500 mg IM dose única (1 g se ≥ 150 kg)
2. Doxiciclina 100 mg VO de 12/12 h por 10 dias
≥ 35 anos, após procedimento urológico ou sem risco de IST (entéricos):
1. Levofloxacino 500 mg VO 1x/dia por 10 dias (ou Ciprofloxacino 500 mg 12/12 h)
Prática anal insertiva: Ceftriaxona + Levofloxacino
Medidas: suspensório escrotal, gelo, repouso; Ibuprofeno 600 mg VO de 8/8 h por 5 dias`,n:'Tratar parcerias (IST). Testes rápidos para HIV, sífilis, hepatites. Reavaliar em 72 h; abscesso ou piora: USG e urologia.'},
 {t:'Priapismo isquêmico (> 4 h)',rx:`1. Analgesia; bloqueio peniano dorsal com lidocaína 1% sem vasoconstritor 10 mL
2. Gasometria do corpo cavernoso (isquêmico: pO2 < 30, pCO2 > 60, pH < 7,25; sangue escuro)
3. Aspiração com agulha 19–21G na lateral do corpo cavernoso (posição 2 ou 10 h), retirando sangue até sair sangue vermelho vivo; irrigar com SF 0,9%
4. Fenilefrina: diluir 1 mL (10 mg/mL) em 99 mL de SF 0,9% (100 mcg/mL); injetar 1–2 mL (100–200 mcg) intracavernoso a cada 3–5 min, até 1 h (máx. 1 mg)
   Monitorizar PA e FC (cuidado em cardiopatas e HAS)
5. Doença falciforme: hidratação, analgesia, O2 + mesmo tratamento local (não atrasar)
6. Urologia: shunt cirúrgico se falha`,n:'Priapismo não isquêmico (pós-trauma perineal, pouco doloroso, gasometria arterial): não é emergência; observação e urologia ambulatorial.'}]},

rx_epist:{tipo:'h',g:'geral',t:'Epistaxe',rec:RH,rel:[['cd_epist','Conduta epistaxe']],items:[
 {t:'Epistaxe anterior',rx:`1. Paciente sentado, inclinado para frente; assoar para retirar coágulos
2. Compressão contínua da asa nasal contra o septo por 10–15 min (sem soltar para olhar)
3. Algodão embebido em Oximetazolina 0,05% (ou adrenalina 1:10.000) + Lidocaína 2% por 10 min
   ou Ácido tranexâmico 500 mg (5 mL da ampola) em algodão/gaze por 10 min
4. Ponto visível: cauterização com bastão de nitrato de prata por 5–10 s (só um lado do septo)
5. Persistindo: tamponamento anterior (esponja expansível ou gaze com vaselina/pomada) por 48 h
6. Controle da dor e ansiedade; tratar PA muito elevada após controle local (sem quedas bruscas)`,n:'Anticoagulado: em geral manter o anticoagulante se o sangramento for controlado localmente; checar INR se varfarina.'},
 {t:'Epistaxe posterior',rx:`1. Sonda de Foley 12–14 Fr pela narina até a orofaringe; insuflar o balão com 5–10 mL de água destilada; tracionar até ancorar na coana; fixar sem pressionar a asa nasal
   + tamponamento anterior
   (ou balão de duplo lúmen próprio)
2. Internação; monitorização (reflexo nasovagal, hipóxia)
3. Amoxicilina + clavulanato 875/125 mg VO de 12/12 h enquanto tamponado (opcional; considerar se > 48 h)
4. Hemograma, coagulograma, tipagem
5. ORL: ligadura/embolização da artéria esfenopalatina se refratária`,n:'Sangramento por ambas as narinas ou para a orofaringe apesar da compressão anterior sugere origem posterior.'}]},

rx_olho:{tipo:'a',g:'geral',t:'Olho (alta)',rec:RS,rel:[['cd_olho','Olho vermelho']],items:[
 {t:'Conjuntivite bacteriana',rx:`USO OFTÁLMICO
1. Tobramicina 0,3% colírio ———— 1 frasco
   Pingar 1 gota no(s) olho(s) afetado(s) de 4/4 h por 7 dias
   (usuário de lente de contato: Ciprofloxacino 0,3% colírio, mesma posologia)

ORIENTAÇÕES
- Lavar as mãos; não compartilhar toalhas; limpar a secreção com soro fisiológico
- Suspender lentes de contato até a cura
- Retornar se dor, piora da visão ou sensibilidade à luz`,n:'Criança pequena: pomada de tobramicina 3x/dia. Recém-nascido com secreção purulenta: urgência (gonococo).'},
 {t:'Conjuntivite viral',rx:`USO OFTÁLMICO
1. Lubrificante ocular (carmelose 0,5%) colírio ———— 1 frasco
   Pingar 1 gota em cada olho até de 2/2 h se desconforto

ORIENTAÇÕES
- Compressas frias com soro fisiológico gelado 3–4 vezes ao dia
- Muito contagiosa por 7 a 14 dias: lavar as mãos, toalha individual, evitar coçar
- Retornar se dor intensa, piora da visão ou se não melhorar em 7 a 10 dias`,n:'Antibiótico e corticoide tópico não são indicados.'},
 {t:'Conjuntivite alérgica',rx:`USO OFTÁLMICO
1. Olopatadina 0,1% colírio ———— 1 frasco
   Pingar 1 gota em cada olho de 12/12 h por 14 dias
2. Lubrificante ocular gelado se desconforto

USO ORAL
3. Loratadina 10 mg ———— 10 comprimidos
   Tomar 1 comprimido por dia se coceira intensa`,n:'Evitar corticoide tópico sem avaliação oftalmológica (glaucoma, catarata, herpes).'},
 {t:'Abrasão corneana / após retirada de corpo estranho',rx:`USO OFTÁLMICO
1. Ciprofloxacino 0,3% pomada (ou Tobramicina 0,3% pomada) ———— 1 bisnaga
   Aplicar no olho afetado de 6/6 h por 5 dias

USO ORAL
2. Dipirona 500 mg ———— 20 comprimidos
   Tomar 1 a 2 comprimidos de 6/6 h se dor

ORIENTAÇÕES
- Não usar colírio anestésico em casa (atrasa a cicatrização e mascara complicações)
- Usuário de lente de contato: não ocluir; suspender a lente
- Retornar em 24–48 h ou antes se piora da dor ou da visão`,n:'Corpo estranho metálico com anel de ferrugem ou que não sai com cotonete: oftalmologia em 24 h.'}]},

rx_ouvido:{tipo:'a',g:'geral',t:'Ouvido (alta)',rec:RS,rel:[['cd_ouvido','Otites']],items:[
 {t:'Otite média aguda (criança)',rx:`USO ORAL
1. Amoxicilina 400 mg/5 mL suspensão ———— __ frasco(s)
   Dar __ mL (= 80–90 mg/kg/dia ÷ 2) de 12/12 h por 10 dias (< 2 anos ou grave) ou 5–7 dias (≥ 2 anos)
   Falha em 48–72 h ou amoxicilina nos últimos 30 dias: Amoxicilina + clavulanato (90 mg/kg/dia de amoxicilina) de 12/12 h
2. Paracetamol 200 mg/mL gotas ———— 1 frasco
   Dar 1 gota/kg (máx. 35 gotas) de 6/6 h se dor ou febre
   ou Ibuprofeno 50 mg/mL gotas: 1 gota/kg (máx. 40) de 8/8 h

ORIENTAÇÕES
- Retornar se febre por mais de 48–72 h, secreção no ouvido, inchaço atrás da orelha ou sonolência`,n:'Observação sem antibiótico (só analgesia, reavaliar em 48–72 h) é opção em ≥ 2 anos (ou 6–23 meses unilateral) com quadro leve, sem otorreia e com retorno garantido. Alergia a penicilina não grave: cefuroxima; grave: azitromicina.'},
 {t:'Otite média aguda (adulto)',rx:`USO ORAL
1. Amoxicilina 500 mg ———— 21 cápsulas
   Tomar 1 cápsula de 8/8 h por 7 dias
   (ou Amoxicilina 875 mg + clavulanato 125 mg de 12/12 h por 7 dias se falha/uso recente de antibiótico)
2. Dipirona 500 mg ———— 20 comprimidos
   Tomar 1 a 2 comprimidos de 6/6 h se dor`,n:'OMA recorrente no adulto ou unilateral persistente com efusão: nasofibroscopia (excluir tumor de rinofaringe).'},
 {t:'Otite externa',rx:`USO OTOLÓGICO
1. Ciprofloxacino 0,2% + hidrocortisona 1% solução otológica ———— 1 frasco
   Pingar 3 gotas no ouvido afetado de 12/12 h por 7 dias (deitado de lado por 3–5 min)

USO ORAL
2. Ibuprofeno 600 mg ———— 15 comprimidos
   Tomar 1 comprimido de 8/8 h por 5 dias, após as refeições

ORIENTAÇÕES
- Manter o ouvido seco (algodão com vaselina no banho); não usar cotonete; não nadar por 7–10 dias`,n:'Membrana timpânica perfurada ou não visualizada: usar só quinolona (sem aminoglicosídeo). Diabético/imunossuprimido com dor intensa e tecido de granulação: suspeitar de otite externa necrotizante (internar).'}]}
});

/* ---------- Condutas ---------- */
Object.assign(CD,{
cd_ttorax:{g:'osteo',t:'Trauma de tórax',src:'ATLS 10ª ed. · EAST',k:'trauma toracico pneumotorax hipertensivo hemotorax macico torax instavel tamponamento cardiaco drenagem toracica descompressao toracotomia contusao pulmonar',rel:[['cd_trauma','Trauma: avaliação inicial'],['cd_tabd','Trauma de abdome e FAST'],['cd_peric','Tamponamento']],sec:[
 {h:'Ameaças imediatas à vida (tratar no exame primário)',rows:[['Pneumotórax hipertensivo','Dispneia, hipotensão, MV abolido, hipertimpanismo, turgência jugular, desvio de traqueia (tardio). Diagnóstico CLÍNICO → descompressão imediata (agulha/cateter 8 cm no 4º–5º EIC linha axilar média anterior no adulto; 2º EIC linha hemiclavicular na criança) ou toracostomia digital → dreno'],['Pneumotórax aberto','Ferida > 2/3 do diâmetro da traqueia: curativo de 3 pontas → dreno longe da ferida'],['Hemotórax maciço','> 1.500 mL na drenagem inicial ou > 200 mL/h por 2–4 h → toracotomia; dreno 28–32 Fr; transfusão maciça'],['Tamponamento cardíaco','Beck + FAST com derrame → pericardiocentese/janela/toracotomia'],['Tórax instável + contusão','≥ 2 fraturas em ≥ 2 costelas consecutivas: analgesia agressiva (bloqueio), O2, VNI; IOT se hipoxemia'],['Obstrução de via aérea','Via aérea definitiva']]},
 {h:'Drenagem torácica (passo a passo)',li:['Posição: braço acima da cabeça; 4º–5º EIC entre linhas axilares anterior e média (triângulo de segurança)','Antissepsia, lidocaína 1% (pele, periósteo, pleura)','Incisão de 2–3 cm sobre a costela inferior; dissecção romba pela borda SUPERIOR da costela','Perfurar a pleura com pinça, explorar com o dedo','Dreno 28–32 Fr (hemotórax) ou 14–28 Fr (pneumotórax) direcionado posterior e superior','Selo d\'água; fixar; RX de controle','Cefazolina 1–2 g EV dose única no trauma penetrante (opcional)']},
 {h:'Toracotomia de reanimação',li:['Indicação principal: trauma PENETRANTE de tórax em PCR testemunhada (< 15 min de RCP) ou choque refratário','Trauma contuso em PCR: prognóstico muito ruim (< 10 min de RCP, se equipe treinada)']}]},

cd_tabd:{g:'osteo',t:'Trauma de abdome e FAST',src:'ATLS 10ª ed. · ACEP · WSES',k:'trauma abdominal fast efast ultrassom laparotomia lesao esplenica hepatica tc abdome lavado peritoneal',rel:[['cd_trauma','Trauma: avaliação inicial'],['cd_ttorax','Trauma de tórax']],sec:[
 {h:'eFAST (janelas)',rows:[['Hepatorrenal (Morison)','Líquido livre entre fígado e rim D (a mais sensível; olhar também o polo inferior do rim)'],['Esplenorrenal','Líquido entre baço e rim E e subdiafragmático'],['Pélvica (suprapúbica)','Líquido ao redor/atrás da bexiga (útero na mulher)'],['Subxifoide','Derrame pericárdico / tamponamento'],['Pleural (eFAST)','Ausência de deslizamento pleural e de linhas B = pneumotórax; ponto pulmonar confirma; líquido acima do diafragma = hemotórax']]},
 {h:'Decisão',li:['Instável + FAST positivo → laparotomia (centro cirúrgico)','Instável + FAST negativo → procurar outras fontes: tórax, pelve (RX), ossos longos, retroperitônio, externa; repetir FAST','Estável → TC de abdome e pelve com contraste','Indicações de laparotomia: peritonite, evisceração, arma de fogo com trajeto peritoneal, pneumoperitônio, ruptura diafragmática, instabilidade com FAST+','FAST negativo NÃO afasta lesão de víscera oca, retroperitônio, diafragma']},
 {h:'Lembretes',li:['Tratamento não operatório de baço e fígado em estáveis (com observação e cirurgião disponível)','Fratura de pelve instável: amarrar lençol/cinta pélvica no nível dos trocânteres','Cinto de segurança com equimose ("sinal do cinto"): risco de lesão de alça e de coluna lombar (Chance)']}]},

cd_fratura:{g:'osteo',t:'Fraturas e luxações',src:'ATLS 10ª ed. · AAOS · Regras de Ottawa',k:'fratura luxacao ombro reducao cunningham fares kocher pronacao dolorosa imobilizacao tala gesso fratura exposta gustilo sindrome compartimental ottawa',rel:[['rx_trauma2','Prescrição'],['ottawatz','Ottawa tornozelo'],['ottawajo','Ottawa joelho'],['efp_ombro','Exame do ombro']],sec:[
 {h:'Princípios',li:['Exame neurovascular distal ANTES e DEPOIS de qualquer manipulação ou imobilização','RX em 2 incidências, incluindo a articulação acima e abaixo','Fratura com comprometimento vascular: realinhar com tração e reavaliar pulso','Imobilizar na posição de função; elevar; gelo; analgesia','Síndrome compartimental: dor desproporcional, dor à extensão passiva, compartimento tenso → retirar gesso/tala, medir pressão, fasciotomia']},
 {h:'Luxação anterior de ombro',li:['RX antes (fratura associada) se > 40 anos, trauma de alta energia ou primeira luxação','Técnicas sem sedação (tentar primeiro): Cunningham (massagem de bíceps/trapézio com o paciente sentado), rotação externa lenta com cotovelo junto ao corpo (Hennepin), FARES (tração com oscilação vertical e abdução lenta), Milch','Com analgesia/sedação: tração-contratração (lençol na axila)','Evitar Hipócrates com o pé na axila (lesão de plexo) e Kocher forçado','Após: RX de controle, testar nervo axilar (sensibilidade do deltoide), tipoia por 1–3 semanas']},
 {h:'Outras luxações frequentes',rows:[['Pronação dolorosa (criança 1–5 anos)','Puxão pelo braço; criança não move o braço, sem edema. Redução: hiperpronação (mais eficaz) ou supinação + flexão do cotovelo; dispensa RX se história típica'],['Dedos (interfalângica)','Bloqueio digital; tração + pressão na base da falange; RX pós; tala/esparadrapo com dedo vizinho'],['Patela (lateral)','Estender o joelho lentamente empurrando a patela medialmente; imobilizador'],['ATM (mandíbula)','Polegares protegidos sobre os molares inferiores, pressionar para baixo e para trás'],['Quadril, joelho (tibiofemoral), cotovelo','Emergência ortopédica (lesão vascular/nervosa): redução precoce sob sedação; joelho luxado = angioTC/índice tornozelo-braquial']]},
 {h:'Imobilizações comuns',rows:[['Punho (Colles, escafoide)','Tala antebraquiopalmar (escafoide: com polegar, mesmo com RX normal se dor na tabaqueira; repetir RX em 10–14 dias)'],['Antebraço / cotovelo','Tala axilopalmar com cotovelo a 90°'],['Clavícula','Tipoia'],['Tornozelo','Tala suropodálica com tornozelo a 90°; entorse: imobilização funcional'],['Metacarpo (boxer)','Tala ulnar com MCF a 70–90°']]}]},

cd_sutura:{g:'osteo',t:'Suturas e anestésicos locais',src:'ACEP · Roberts & Hedges · UpToDate',k:'sutura ferimento laceracao lidocaina anestesico local dose maxima bupivacaina fio nylon retirada de pontos cola bloqueio digital',rel:[['an_ferida','Anamnese'],['rx_tetano','Tétano'],['rx_alta_pele','Pele (alta)']],sec:[
 {h:'Dose máxima de anestésico local',rows:[['Lidocaína sem vasoconstritor','4,5 mg/kg (máx. 300 mg). 1% = 10 mg/mL → 0,45 mL/kg (70 kg: 31 mL). 2% = 20 mg/mL → 0,22 mL/kg (70 kg: 15 mL)'],['Lidocaína com adrenalina','7 mg/kg (máx. 500 mg). 1% → 0,7 mL/kg; 2% → 0,35 mL/kg'],['Bupivacaína 0,5% (sem vaso)','2–2,5 mg/kg (máx. 175 mg). 0,5% = 5 mg/mL → 0,4–0,5 mL/kg; duração 4–8 h'],['Toxicidade (LAST)','Zumbido, gosto metálico, parestesia perioral → convulsão → arritmia/PCR. Tratar: parar, benzodiazepínico, emulsão lipídica 20% 1,5 mL/kg em 1 min + 0,25 mL/kg/min']]},
 {h:'Técnica',li:['Menos dor: aquecer, tamponar (lidocaína 9 mL + bicarbonato 8,4% 1 mL), agulha fina 27–30G, injetar devagar pelas bordas da ferida','Adrenalina em dedos, nariz e orelha: segura em pacientes sem doença vascular (estudos atuais); evitar em doença vascular periférica','Bloqueio digital: 1–2 mL na base de cada lado do dedo','Irrigar com SF 0,9% sob pressão (seringa 20 mL + agulha 18G) — o mais importante para prevenir infecção','Fechamento primário: até 12–24 h na maioria (face até 24 h ou mais); feridas muito contaminadas/mordeduras (exceto face): fechamento tardio']},
 {h:'Fio e retirada dos pontos',rows:[['Face','Nylon 5-0 ou 6-0 → 5 dias'],['Couro cabeludo','Nylon 3-0/4-0 ou grampos → 7–10 dias'],['Tronco e membros','Nylon 4-0 → 10–14 dias'],['Mãos e dedos','Nylon 4-0/5-0 → 10–14 dias'],['Articulações (face extensora)','Nylon 4-0 → 14 dias'],['Planta do pé','Nylon 3-0/4-0 → 14–21 dias'],['Mucosa oral, plano profundo','Absorvível (poliglactina/categute) 4-0']]},
 {h:'Encaminhar',li:['Lesão de tendão, nervo, artéria, ducto parotídeo/lacrimal','Borda livre de pálpebra, cartilagem da orelha com perda, lábio com vermelhão desalinhado (alinhar a linha cutâneo-mucosa primeiro)','Ferida articular, fratura exposta, grande perda de substância']}]},

cd_epist:{g:'geral',t:'Epistaxe',src:'AAO-HNS 2020 · ABORL-CCF',k:'epistaxe sangramento nasal tamponamento nasal cauterizacao nitrato de prata acido tranexamico sonda de foley posterior',rel:[['rx_epist','Prescrição']],sec:[
 {h:'Abordagem',li:['Proteção da equipe (respingos); avaliar estabilidade, sangramento para a orofaringe','Compressão bidigital contínua por 10–15 min, inclinado para frente (resolve a maioria das anteriores)','Vasoconstritor tópico e anestesia; localizar o ponto (área de Kiesselbach)','Cauterização química se ponto visível; tamponamento se persistir','Ácido tranexâmico tópico é alternativa eficaz','Hemograma e coagulograma só se sangramento importante, recorrente ou anticoagulado']},
 {h:'Posterior ou grave',li:['Sangramento pelas duas narinas ou pela orofaringe apesar de compressão anterior','Sonda de Foley/balão + tamponamento anterior; internar; ORL','Refratária: ligadura ou embolização da esfenopalatina']},
 {h:'Na alta',li:['Evitar assoar, esforço e AINE por 7 dias','Umidificar mucosa (SF 0,9% nasal, vaselina)','Retirar tamponamento em 48 h (ORL/UBS)','Recorrente em adolescente masculino: pensar em nasoangiofibroma']}]},

cd_colecist:{g:'dig',t:'Colecistite e colangite',src:'Tokyo Guidelines 2018 · WSES 2020',k:'colecistite colangite colelitiase murphy charcot reynolds tokyo colecistectomia cpre via biliar ictericia',rel:[['rx_cir','Prescrição'],['cd_abdag','Abdome agudo'],['cd_pancr','Pancreatite']],sec:[
 {h:'Colecistite (Tokyo 2018)',rows:[['Diagnóstico','A: inflamação local (Murphy, dor/massa em HCD) + B: sistêmica (febre, PCR, leucocitose) + C: imagem (USG: parede > 4 mm, líquido perivesicular, Murphy ultrassonográfico, cálculo impactado)'],['Grau I (leve)','Sem critérios de II ou III'],['Grau II (moderada)','Leucócitos > 18.000, massa palpável, > 72 h de sintomas, inflamação local importante (gangrena, abscesso, enfisema)'],['Grau III (grave)','Disfunção orgânica (cardiovascular, neurológica, respiratória, renal, hepática, hematológica)']]},
 {h:'Tratamento',li:['Grau I e II: colecistectomia laparoscópica precoce (até 72 h, idealmente na mesma internação)','Grau III ou alto risco cirúrgico: antibiótico + suporte; drenagem percutânea (colecistostomia) se não melhora','Antibiótico: ceftriaxona + metronidazol (comunitária), piperacilina-tazobactam (grave/hospitalar)']},
 {h:'Colangite',li:['Tríade de Charcot: febre + icterícia + dor em HCD; pêntade de Reynolds: + confusão + hipotensão','Exames: bilirrubina direta, FA, GGT elevadas; USG com dilatação de vias biliares','Antibiótico + drenagem biliar (CPRE) em 24–48 h; urgente (< 12–24 h) se grave','Coledocolitíase sem colangite: CPRE ou exploração conforme risco']}]},

cd_divert:{g:'dig',t:'Diverticulite aguda',src:'AGA 2021 · WSES 2020 · ASCRS 2020',k:'diverticulite diverticulo colon sigmoide fossa iliaca esquerda abscesso hinchey peritonite tc antibiotico',rel:[['rx_cir','Prescrição'],['cd_abdag','Abdome agudo']],sec:[
 {h:'Diagnóstico',li:['Dor em fossa ilíaca esquerda, febre, leucocitose, PCR elevada','TC de abdome com contraste confirma e classifica (afasta perfuração, abscesso, neoplasia)']},
 {h:'Classificação (Hinchey modificada)',rows:[['0 / Ia','Não complicada / flegmão pericólico'],['Ib / II','Abscesso pericólico / pélvico ou à distância'],['III','Peritonite purulenta'],['IV','Peritonite fecal']]},
 {h:'Tratamento',li:['Não complicada, imunocompetente, sem sinais sistêmicos: tratamento ambulatorial; antibiótico pode ser dispensado (reavaliar em 48–72 h)','Antibiótico se: imunossupressão, comorbidade grave, sinais sistêmicos, PCR > 150, falha','Internar: dor intensa, intolerância VO, idoso frágil, imunossuprimido, complicada','Abscesso < 3–4 cm: antibiótico; > 4 cm: drenagem percutânea','Hinchey III–IV: cirurgia de urgência (lavagem, Hartmann ou ressecção com anastomose)','Colonoscopia 6–8 semanas após (excluir câncer), principalmente se complicada ou sem colonoscopia recente']}]},

cd_obstr:{g:'dig',t:'Obstrução intestinal',src:'WSES Bologna 2017 · ASCRS',k:'obstrucao intestinal suboclusao brida aderencia volvo hernia vomitos distensao parada de eliminacao sng gastrografina estrangulamento',rel:[['rx_cir','Prescrição'],['cd_hernia','Hérnia encarcerada'],['cd_abdag','Abdome agudo']],sec:[
 {h:'Quadro',li:['Dor em cólica, vômitos (fecaloides na obstrução baixa), distensão, parada de eliminação de gases e fezes','Delgado: bridas (cirurgia prévia) > hérnias > tumores; cólon: neoplasia > volvo > diverticulite','RX: níveis hidroaéreos, distensão; TC com contraste define local, causa e sofrimento de alça']},
 {h:'Sinais de estrangulamento / sofrimento (cirurgia)',li:['Dor contínua e desproporcional, peritonite','Febre, taquicardia, hipotensão','Leucocitose, lactato e acidose','TC: alça fechada, espessamento com baixa captação, pneumatose, líquido livre, gás portal','Hérnia irredutível']},
 {h:'Tratamento',li:['Dieta zero, SNG aberta, hidratação vigorosa, correção de K, analgesia','Bridas sem sinais de sofrimento: tratamento conservador por até 72 h + contraste hidrossolúvel (se contraste no cólon em 24 h = resolução provável)','Volvo de sigmoide sem sofrimento: descompressão endoscópica, depois cirurgia eletiva','Obstrução de cólon com ceco > 10–12 cm: risco de perfuração → descompressão/cirurgia']}]},

cd_hernia:{g:'dig',t:'Hérnia encarcerada e estrangulada',src:'HerniaSurge 2018 · WSES 2017',k:'hernia inguinal umbilical femoral encarcerada estrangulada taxis reducao cirurgia urgencia',rel:[['cd_obstr','Obstrução intestinal'],['cd_escroto','Escroto agudo']],sec:[
 {h:'Distinguir',rows:[['Encarcerada','Irredutível, dolorosa, sem sinais de isquemia; pode ter obstrução'],['Estrangulada','Isquemia: dor intensa e contínua, pele hiperemiada/violácea, febre, taquicardia, leucocitose, lactato, peritonite → CIRURGIA de urgência, NÃO reduzir']]},
 {h:'Redução manual (táxis)',li:['Indicada se encarcerada sem sinais de estrangulamento (em geral < 6–8 h)','Analgesia (opioide) ± sedação leve; Trendelenburg; gelo local','Pressão suave e contínua no colo da hérnia, guiando o conteúdo pelo orifício (não empurrar o fundo)','Após redução: observar 6–12 h (risco de reduzir alça necrosada); cirurgia eletiva precoce','Falha na redução: cirurgia de urgência','Hérnia femoral: alto risco de estrangulamento, cirurgia mais precoce']}]},

cd_escroto:{g:'renal',t:'Escroto agudo',src:'AUA · EAU 2023 · TWIST (Barbosa 2013)',k:'escroto agudo torcao testicular torcao do apendice testicular epididimite orquite dor testicular reflexo cremasterico twist doppler',rel:[['an_escroto','Anamnese'],['twist','TWIST'],['rx_uro','Prescrição']],sec:[
 {h:'Diferencial',rows:[['Torção testicular','Adolescente (também neonato), início súbito, dor intensa, náuseas/vômitos, testículo elevado e horizontal, reflexo cremastérico ausente. Viabilidade cai muito após 6 h'],['Torção do apêndice testicular','Criança 7–12 anos, dor localizada no polo superior, "blue dot", reflexo presente. Analgesia, repouso, AINE'],['Orquiepididimite','Início gradual, febre, disúria, secreção, Prehn positivo (alívio ao elevar), reflexo presente. Antibiótico conforme idade/IST'],['Outros','Hérnia encarcerada, trauma, Fournier (necrose perineal: urgência cirúrgica), vasculite (púrpura de Henoch-Schönlein), tumor']]},
 {h:'Suspeita de torção',li:['É emergência cirúrgica: TWIST ≥ 5 → exploração cirúrgica direto (não atrasar com USG)','TWIST 3–4 (intermediário) → USG Doppler imediato','Distorção manual enquanto aguarda: rodar o testículo para FORA (lateralmente, "abrir o livro"), 1,5–2 voltas; alívio da dor sugere sucesso (ainda precisa cirurgia)','Orquidopexia bilateral']}]},

cd_parafim:{g:'renal',t:'Parafimose e priapismo',src:'AUA 2022 (priapismo) · EAU',k:'parafimose fimose prepucio reducao manual priapismo isquemico fenilefrina aspiracao corpo cavernoso falciforme',rel:[['rx_uro','Prescrição'],['cd_falc','Doença falciforme']],sec:[
 {h:'Parafimose',li:['Prepúcio retraído atrás da glande que não volta, com edema: risco de isquemia da glande','Analgesia: bloqueio peniano dorsal (lidocaína sem vasoconstritor) ou gel anestésico','Reduzir o edema: compressão manual firme por 5–10 min (luva/gaze), gelo, açúcar granulado (osmótico) por 30–60 min ou múltiplas punções com agulha fina','Redução: polegares empurram a glande enquanto os indicadores puxam o prepúcio para frente','Falha: incisão dorsal (urologia). Postectomia eletiva depois','Na alta: higiene, não retrair o prepúcio forçado']},
 {h:'Priapismo',rows:[['Isquêmico (low-flow)','Ereção rígida e dolorosa > 4 h; gasometria do corpo cavernoso isquêmica. Causas: falciforme, trazodona, antipsicóticos, injeção intracavernosa, cocaína, leucemia. EMERGÊNCIA: aspiração + irrigação + fenilefrina intracavernosa'],['Não isquêmico (high-flow)','Pós-trauma perineal, pouco doloroso, parcialmente rígido; gasometria arterial. Não é emergência'],['Stuttering','Episódios repetidos e curtos (falciforme): urologia/hematologia']]}]},

cd_olho:{g:'geral',t:'Olho vermelho e trauma ocular',src:'AAO Preferred Practice Patterns · CBO',k:'olho vermelho conjuntivite glaucoma agudo uveite ceratite abrasao corneana corpo estranho queimadura quimica ocular hifema perfuracao ocular fluoresceina',rel:[['rx_olho','Prescrição (alta)'],['an_olho','Anamnese']],sec:[
 {h:'Sinais de alarme (oftalmologia urgente)',li:['Baixa da acuidade visual','Dor intensa e profunda (não "areia")','Fotofobia importante','Hiperemia periceratocística (ao redor da córnea)','Pupila médio-midriática fixa ou irregular','Opacidade ou úlcera de córnea, hipópio, hifema','Trauma penetrante, queimadura química','Usuário de lente de contato com dor (ceratite por Pseudomonas/Acanthamoeba)']},
 {h:'Diagnóstico diferencial',rows:[['Conjuntivite viral','Secreção aquosa, folículos, linfonodo pré-auricular, começa em um olho e passa para o outro'],['Conjuntivite bacteriana','Secreção purulenta, pálpebras coladas ao acordar'],['Conjuntivite alérgica','Prurido intenso, bilateral, papilas, atopia'],['Glaucoma agudo','Dor intensa, BAV, halos, cefaleia, náuseas/vômitos, olho endurecido, pupila médio-midriática, córnea turva'],['Uveíte anterior','Dor, fotofobia, BAV, hiperemia periceratocística, pupila miótica'],['Hemorragia subconjuntival','Indolor, visão normal: benigna (checar PA e anticoagulação)']]},
 {h:'Glaucoma agudo de ângulo fechado',li:['Acetazolamida 500 mg EV ou VO','Timolol 0,5% 1 gota + Brimonidina 0,2% 1 gota','Pilocarpina 2% 1 gota a cada 15 min por 2 doses (após baixar a pressão), depois de 6/6 h','Manitol 20% 1–2 g/kg EV em 30–45 min se refratário','Analgesia e antiemético; oftalmologia imediata (iridotomia a laser)']},
 {h:'Trauma',rows:[['Queimadura química','IRRIGAÇÃO imediata com SF 0,9% ou Ringer (mínimo 2 L, por 30 min) até pH 7–7,5, antes de qualquer exame; eversão palpebral; oftalmologia'],['Corpo estranho/abrasão','Anestésico tópico, fluoresceína, eversão da pálpebra superior, remoção com cotonete úmido ou agulha 25G tangencial; antibiótico tópico'],['Trauma perfurante','Pupila em gota, Seidel positivo, perda de conteúdo: NÃO pressionar, protetor rígido, cabeceira 30°, jejum, antiemético, antibiótico EV (ceftazidima + vancomicina ou quinolona), tétano, oftalmologia urgente'],['Hifema','Cabeceira 30°, repouso, protetor, evitar AINE/antiagregante; pesquisar falciforme; oftalmologia'],['Fratura de órbita (blow-out)','Diplopia ao olhar para cima, enoftalmia, hipoestesia infraorbitária: TC; não assoar o nariz; vômitos/bradicardia (aprisionamento muscular) = cirurgia urgente']]}]},

cd_ouvido:{g:'geral',t:'Otites e emergências de ouvido',src:'AAP 2013 (OMA) · SBP 2021 · AAO-HNS 2014 (otite externa)',k:'otite media aguda otite externa otalgia perfuracao timpanica mastoidite otite necrotizante amoxicilina gotas otologicas',rel:[['rx_ouvido','Prescrição (alta)'],['cd_ce','Corpo estranho']],sec:[
 {h:'Otite média aguda',li:['Diagnóstico: abaulamento da membrana timpânica (principal), otorreia recente, ou hiperemia intensa com otalgia','Antibiótico: < 6 meses; 6–23 meses bilateral; otorreia; quadro grave (febre ≥ 39 °C, otalgia intensa, > 48 h)','Observação 48–72 h com analgesia: ≥ 2 anos (ou 6–23 meses unilateral) leve, com retorno garantido','Amoxicilina dose alta 80–90 mg/kg/dia (SBP aceita 50 mg/kg/dia em baixo risco de resistência); amoxicilina-clavulanato se falha, uso recente ou conjuntivite purulenta associada','Analgesia sempre']},
 {h:'Otite externa',li:['Dor à tração do pavilhão/pressão do trago, conduto edemaciado e com secreção','Gotas de quinolona ± corticoide 7 dias; limpeza do conduto; analgesia; manter seco','Antibiótico oral só se celulite além do conduto, diabetes/imunossupressão','Necrotizante (diabético/idoso, dor intensa noturna, granulação no assoalho do conduto, paralisia facial): internar, TC, antipseudomonas EV']},
 {h:'Complicações e outros',rows:[['Mastoidite','Dor, edema e hiperemia retroauricular com pavilhão deslocado para frente: internar, ceftriaxona EV, TC, ORL'],['Perfuração traumática','Manter seco, sem gotas ototóxicas; a maioria fecha em 6–8 semanas; ORL se vertigem ou perda auditiva importante'],['Surdez súbita neurossensorial','Perda auditiva em < 72 h sem causa (Weber lateraliza para o ouvido bom): prednisona 1 mg/kg (máx. 60 mg) por 7–14 dias e ORL em 24–48 h'],['Paralisia facial periférica (Bell)','Prednisona 60 mg/dia por 5 dias + desmame 5 dias (até 72 h do início); proteção ocular; valaciclovir se grave ou Ramsay Hunt']]}]}
});

/* ---------- Escores ---------- */
Object.assign(SC,{
ottawatz:{g:'osteo',t:'Ottawa tornozelo e pé',code:'Stiell 1992',kind:'ck',np:true,ck:[
 ['Dor na região maleolar + dor à palpação da borda posterior ou ponta do maléolo LATERAL (6 cm distais)',1],['Dor na região maleolar + dor à palpação da borda posterior ou ponta do maléolo MEDIAL (6 cm distais)',1],['Dor na região maleolar + incapacidade de dar 4 passos (no trauma e no PS)',1],['Dor no mediopé + dor à palpação da base do 5º metatarso',1],['Dor no mediopé + dor à palpação do navicular',1]],
 lv:t=>t?['warn','Regra positiva','RX indicado (tornozelo se critérios maleolares; pé se critérios do mediopé).']:['ok','Regra negativa','RX dispensável (sensibilidade ≈ 98–100%). Tratar como entorse.'],unit:'',note:'Não se aplica: < 18 anos (usar com cautela em crianças), intoxicação, gestante, múltiplas lesões, alteração de sensibilidade, > 10 dias do trauma.'},
ottawajo:{g:'osteo',t:'Ottawa joelho',code:'Stiell 1996',kind:'ck',np:true,ck:[
 ['Idade ≥ 55 anos',1],['Dor isolada à palpação da patela',1],['Dor à palpação da cabeça da fíbula',1],['Incapaz de fletir o joelho a 90°',1],['Incapaz de dar 4 passos (no trauma e no PS)',1]],
 lv:t=>t?['warn','Regra positiva','RX de joelho indicado.']:['ok','Regra negativa','RX dispensável.'],unit:''},
twist:{g:'renal',t:'TWIST (torção testicular)',code:'Barbosa 2013',kind:'ck',ck:[
 ['Edema testicular',2],['Testículo endurecido',2],['Reflexo cremastérico ausente',1],['Náuseas ou vômitos',1],['Testículo elevado (alto na bolsa)',1]],
 lv:t=>t>=5?['bad','Alto risco (≥ 5)','Exploração cirúrgica imediata, sem esperar USG.']:t>=3?['warn','Risco intermediário (3–4)','USG Doppler de urgência.']:['ok','Baixo risco (0–2)','Torção improvável; considerar outros diagnósticos (USG se dúvida).'],unit:' pontos'}
});
