/* Mais prescrições do PS e receitas de alta (out/2026). */
Object.assign(RX,{
rx_intern:{tipo:'h',g:'geral',t:'Prescrição de internação (modelo)',rec:RH,rel:[['rx_sint','Sintomáticos']],items:[
 {t:'Modelo de enfermaria',rx:`1. Dieta oral livre (ou para diabético / hipossódica / zero, conforme o caso)
2. Cabeceira elevada 30°; sinais vitais e dor de 6/6 h; glicemia capilar se diabético
3. Acesso venoso salinizado
4. Dipirona 1 g + água destilada 8 mL — EV lento, de 6/6 h se dor ou febre
5. Ondansetrona 8 mg + SF 0,9% 50 mL — EV, de 8/8 h se náusea ou vômito
6. Enoxaparina 40 mg — SC, 1 vez ao dia (profilaxia de TEV)
7. Medicações de uso contínuo do paciente (revisar uma a uma)
8. Comunicar se PAS < 90, FC > 120, SpO2 < 92%, FR > 24, rebaixamento ou dor torácica`,n:'Profilaxia de TEV indicada se Padua ≥ 4 e sem sangramento ativo. IBP só com indicação (HDA, AINE + corticoide, coagulopatia, VM): não é rotina.'},
 {t:'Profilaxia de TEV',rx:`1. Enoxaparina 40 mg — SC, 1 vez ao dia
   ClCr < 30: Enoxaparina 20 mg SC 1 vez ao dia ou Heparina não fracionada 5.000 UI SC de 12/12 h (8/8 h se obeso)
   Peso > 120 kg: Enoxaparina 40 mg SC de 12/12 h`,n:'Contraindicações: sangramento ativo, plaquetas < 50 mil, coagulopatia, AVC hemorrágico recente. Nesses casos: compressão pneumática intermitente.'},
 {t:'Hidratação de manutenção (adulto)',rx:`1. SF 0,9% ou Ringer lactato 500 mL — EV, de 8/8 h (≈ 25–30 mL/kg/dia)
   + KCl 19,1% 10 mL em cada 500 mL se K normal e diurese presente`,n:'Reduzir em IC, DRC, cirrose e idoso. Glicose 50–100 g/dia se em jejum prolongado. Reavaliar diariamente: o soro de manutenção é droga.'}]},

rx_sedacao:{tipo:'h',g:'resp',t:'Sedação e analgesia contínua (pós-IOT)',rec:RH,rel:[['iot','Intubação'],['rass','RASS']],items:[
 {t:'Analgesia: fentanil contínuo',rx:`1. Fentanil 50 mcg/mL 20 mL (1.000 mcg) + SF 0,9% 80 mL — 10 mcg/mL
   EV em BIC: 0,5–2 mcg/kg/h (70 kg: 3,5–14 mL/h), titular pela dor`,n:'Analgesia primeiro (analgossedação). Pode causar rigidez torácica em bolus rápido, íleo e tolerância.'},
 {t:'Sedação: midazolam contínuo',rx:`1. Midazolam 5 mg/mL 30 mL (150 mg) + SF 0,9% 120 mL — 1 mg/mL
   EV em BIC: 0,02–0,1 mg/kg/h (70 kg: 1,5–7 mL/h)`,n:'Acumula em DRC, hepatopatia, obeso e idoso; mais delirium. Preferir propofol ou dexmedetomidina quando possível.'},
 {t:'Sedação: propofol',rx:`1. Propofol 1% (10 mg/mL) — puro
   EV em BIC: 0,3–3 mg/kg/h (5–50 mcg/kg/min) (70 kg: 2–20 mL/h)`,n:'Hipotensão (cuidado no choque), hipertrigliceridemia (dosar a cada 48–72 h), síndrome de infusão do propofol se > 4 mg/kg/h por > 48 h.'},
 {t:'Sedação leve: dexmedetomidina',rx:`1. Dexmedetomidina 100 mcg/mL 2 mL (200 mcg) + SF 0,9% 48 mL — 4 mcg/mL
   EV em BIC: 0,2–1,4 mcg/kg/h, sem bolus (70 kg: 3,5–24 mL/h)`,n:'Bradicardia e hipotensão. Boa para desmame e delirium agitado; não serve para sedação profunda.'},
 {t:'Cetamina contínua',rx:`1. Cetamina 50 mg/mL 10 mL (500 mg) + SF 0,9% 240 mL — 2 mg/mL
   EV em BIC: 0,1–0,5 mg/kg/h (analgesia) até 1–2 mg/kg/h (sedação) (70 kg: 3,5–17 mL/h na faixa de analgesia)`,n:'Mantém PA e drive respiratório; broncodilatadora (boa na asma). Cuidado em SCA e HAS grave.'}]},

rx_choque:{tipo:'h',g:'cv',t:'Choque: volume e vasopressores',rec:RH,rel:[['drogas','Drogas em infusão'],['cd_sepse','Sepse']],items:[
 {t:'Volume inicial',rx:`1. Ringer lactato 30 mL/kg — EV em até 3 h (em bolus de 500 mL, reavaliando após cada um)`,n:'Reavaliar perfusão, lactato, diurese e sinais de congestão (USG pulmonar, VCI). Menos volume em IC, DRC dialítica e cirrose.'},
 {t:'Noradrenalina',rx:`1. Noradrenalina 4 mg/4 mL — 4 ampolas (16 mg) + SG 5% 234 mL — 64 mcg/mL
   EV em BIC: iniciar 0,05–0,1 mcg/kg/min e titular para PAM ≥ 65 (70 kg: 0,1 mcg/kg/min ≈ 6,5 mL/h)`,n:'1ª escolha no choque séptico. Pode iniciar em acesso periférico calibroso (proximal) enquanto passa o CVC.'},
 {t:'Vasopressina (2ª droga)',rx:`1. Vasopressina 20 UI/mL 1 mL + SF 0,9% 100 mL — 0,2 UI/mL
   EV em BIC: 0,03 UI/min = 9 mL/h (dose fixa)`,n:'Associar quando noradrenalina ≥ 0,25–0,5 mcg/kg/min.'},
 {t:'Hidrocortisona (choque refratário)',rx:`1. Hidrocortisona 50 mg — EV, de 6/6 h (200 mg/dia)`,n:'Indicar se noradrenalina ≥ 0,25 mcg/kg/min por ≥ 4 h. Retirar quando suspender o vasopressor.'},
 {t:'Dobutamina (disfunção miocárdica)',rx:`1. Dobutamina 250 mg/20 mL + SF 0,9% 230 mL — 1.000 mcg/mL
   EV em BIC: 2,5–20 mcg/kg/min (70 kg: 2,5 mcg/kg/min ≈ 10,5 mL/h)`,n:'Se hipoperfusão persistente com débito baixo apesar de PAM adequada. Taquicardia e arritmia.'},
 {t:'Adrenalina',rx:`1. Adrenalina 1 mg/mL — 4 ampolas (4 mg) + SG 5% 246 mL — 16 mcg/mL
   EV em BIC: 0,05–0,5 mcg/kg/min (70 kg: 0,05 mcg/kg/min ≈ 13 mL/h)`,n:'Alternativa à noradrenalina ou associada. Eleva lactato. Na anafilaxia refratária: 0,05–0,1 mcg/kg/min.'}]},

rx_insul:{tipo:'h',g:'endo',t:'Hiperglicemia e insulina na internação',rec:RH,rel:[['rx_cad','CAD'],['rx_hipo','Hipoglicemia']],items:[
 {t:'Basal-bolus (paciente comendo)',rx:`1. Insulina NPH — SC, dose total 0,4–0,5 UI/kg/dia (idoso, DRC ou magro: 0,2–0,3), metade basal:
   2/3 antes do café e 1/3 às 22 h
2. Insulina regular — SC, 30 min antes das refeições: metade da dose total dividida em 3
3. Glicemia capilar antes das refeições e às 22 h
4. Correção com insulina regular SC conforme glicemia:
   150–200: 2 UI | 201–250: 4 UI | 251–300: 6 UI | 301–350: 8 UI | > 350: 10 UI e avisar
5. Glicemia < 70: protocolo de hipoglicemia`,n:'Alvo na enfermaria: 140–180 mg/dL. Só escala de correção (sliding scale) não é recomendada como esquema único. Suspender metformina se contraste, choque, IRA ou hipóxia.'},
 {t:'Paciente em dieta zero',rx:`1. Insulina NPH — SC, 50–80% da dose basal habitual (ou 0,1–0,2 UI/kg/dia)
2. SG 5% 500 mL — EV, de 8/8 h (ou 10% se hipoglicemia)
3. Glicemia capilar de 4/4 h + correção com insulina regular`,n:''},
 {t:'Hiperglicemia sem CAD/EHH no PS',rx:`1. SF 0,9% 1.000 mL — EV em 1 h, se desidratado
2. Insulina regular — SC, 0,1 UI/kg (ou conforme escala de correção)
3. Glicemia capilar em 2 h`,n:'Antes: afastar CAD/EHH (cetonemia, gasometria, osmolaridade) e procurar o fator desencadeante (infecção, abandono do tratamento, IAM, corticoide). Na alta: ajustar o esquema oral e retorno precoce.'}]},

rx_ele2:{tipo:'h',g:'renal',t:'Magnésio, cálcio e fósforo',rec:RH,rel:[['rx_ele','Potássio e sódio']],items:[
 {t:'Hipomagnesemia',rx:`1. Sulfato de magnésio 50% 4 mL (2 g) + SF 0,9% 100 mL — EV em 1 h
   Grave (< 1 mg/dL, arritmia, convulsão, torsades): 2 g EV em 10–15 min
   Leve e assintomática: Óxido / cloreto de magnésio VO`,n:'Repor magnésio antes ou junto do potássio (hipocalemia refratária). Cuidado e metade da dose na DRC.'},
 {t:'Hipocalcemia sintomática',rx:`1. Gluconato de cálcio 10% 20 mL (2 g) + SG 5% 100 mL — EV em 10–20 min
2. Manutenção: Gluconato de cálcio 10% 100 mL + SG 5% 900 mL — EV a 50 mL/h (0,5–1,5 mg/kg/h de cálcio elementar)
3. Repor magnésio se baixo`,n:'Tetania, convulsão, QT longo, laringoespasmo. Corrigir cálcio pela albumina ou dosar cálcio iônico. Monitorizar em uso de digoxina.'},
 {t:'Hipofosfatemia',rx:`1. Grave (< 1 mg/dL) ou sintomática: Fosfato de potássio EV 0,16–0,32 mmol/kg em 4–6 h, diluído em SF 0,9% 250 mL
   (conferir a apresentação: mmol de fosfato e mEq de potássio por mL)
2. Moderada (1–2,5 mg/dL) e via oral possível: fosfato oral (manipulado ou leite)`,n:'Comum na realimentação, CAD em tratamento e alcoolismo. Usar fosfato de sódio se K > 4. Dosar fósforo, cálcio e potássio após a reposição.'}]},

rx_digps:{tipo:'h',g:'dig',t:'Dispepsia, gastrite e cólica biliar no PS',rec:RH,rel:[['cd_colecist','Colecistite']],items:[
 {t:'Dispepsia / gastrite aguda',rx:`1. Omeprazol 40 mg + diluente — EV, agora
2. Hidróxido de alumínio + magnésio suspensão — 20 mL VO, agora
   (pode associar lidocaína gel viscosa 2% 10 mL VO)`,n:'Antes de “gastrite”: ECG e troponina se fator de risco (SCA inferior simula epigastralgia). Afastar pancreatite e úlcera perfurada.'},
 {t:'Cólica biliar',rx:`1. Dipirona 1 g + água destilada 8 mL — EV lento
2. Escopolamina 20 mg + SF 0,9% 100 mL — EV em 20 min
   ou Cetoprofeno 100 mg + SF 0,9% 100 mL — EV em 20 min (AINE é muito eficaz na cólica biliar)
3. Ondansetrona 8 mg + SF 0,9% 50 mL — EV, se vômitos`,n:'Dor > 6 h, febre, Murphy positivo ou leucocitose: pensar em colecistite (USG). Icterícia: coledocolitíase/colangite.'}]},

rx_alta_dig:{tipo:'a',g:'dig',t:'Digestivo (alta)',rec:RS,items:[
 {t:'Dispepsia / gastrite / refluxo',rx:`Uso oral
1. Omeprazol 20 mg ...... 30 cápsulas
   Tomar 1 cápsula em jejum, 30 minutos antes do café da manhã, por 30 dias.
2. Hidróxido de alumínio + magnésio suspensão ...... 1 frasco
   Tomar 10 mL 1 hora após as refeições e ao deitar, se azia.`,n:'Sinais de alarme para EDA: > 60 anos, perda de peso, disfagia, anemia, vômitos persistentes, sangramento. Pesquisar H. pylori se úlcera ou dispepsia persistente.'},
 {t:'Constipação',rx:`Uso oral
1. Lactulose 667 mg/mL ...... 1 frasco
   Tomar 15 a 30 mL 1 vez ao dia, à noite; ajustar para 1 a 2 evacuações pastosas por dia.
2. Bisacodil 5 mg ...... 10 comprimidos
   Tomar 1 a 2 comprimidos à noite, se não evacuar em 3 dias.`,n:'Orientar água, fibras e atividade física. Alarme: sangramento, perda de peso, anemia, início após 50 anos.'},
 {t:'Doença hemorroidária',rx:`Uso oral
1. Diosmina 450 mg + hesperidina 50 mg ...... 30 comprimidos
   Tomar 3 comprimidos de 12 em 12 horas por 4 dias, depois 2 comprimidos de 12 em 12 horas por 3 dias.

Uso tópico
2. Policresuleno + cinchocaína pomada ...... 1 bisnaga
   Aplicar na região anal de 12 em 12 horas e após evacuar, por 7 dias.`,n:'Banho de assento com água morna 3 vezes ao dia, fibras e evitar esforço. Trombose hemorroidária < 72 h com dor forte: encaminhar para excisão.'},
 {t:'Diverticulite não complicada',rx:`Uso oral
1. Amoxicilina 875 mg + clavulanato 125 mg ...... 14 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por 7 dias.
   ou Ciprofloxacino 500 mg de 12/12 h + Metronidazol 400 mg de 8/8 h por 7 dias (alergia).
2. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor.`,rec:RA,n:'Imunocompetente sem sinais sistêmicos pode até ficar sem antibiótico (DIABOLO, AVOD). Dieta líquida no início. Retorno se febre ou piora da dor. Colonoscopia após 6–8 semanas se não tiver recente.'}]},

rx_alta_gine:{tipo:'a',g:'mulher',t:'Ginecologia (alta)',rec:RS,rel:[['rx_ist','ISTs']],items:[
 {t:'Candidíase vulvovaginal',rx:`Uso oral
1. Fluconazol 150 mg ...... 1 cápsula
   Tomar 1 cápsula em dose única.

Uso vaginal
2. Miconazol 2% creme vaginal ...... 1 bisnaga
   Aplicar 1 aplicador cheio na vagina à noite, ao deitar, por 7 noites.`,rec:RA,n:'Gestante: só o creme (7 dias); fluconazol é contraindicado. Recorrente (≥ 4/ano): fluconazol 150 mg nos dias 1, 4 e 7 e depois semanal por 6 meses.'},
 {t:'Vaginose bacteriana',rx:`Uso oral
1. Metronidazol 400 mg ...... 14 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por 7 dias. Não beber álcool durante e até 1 dia depois.
   ou Metronidazol 100 mg/g gel vaginal: 1 aplicador à noite por 5 noites.`,rec:RA,n:'Não precisa tratar o parceiro. Gestante: pode usar metronidazol oral.'},
 {t:'Tricomoníase',rx:`Uso oral
1. Metronidazol 400 mg ...... 5 comprimidos
   Tomar 5 comprimidos juntos (2 g) em dose única.
   Mulher: Metronidazol 400 mg de 12/12 h por 7 dias (mais eficaz).`,rec:RA,n:'Tratar a parceria sexual. Abstinência até completar o tratamento. Oferecer testes para HIV, sífilis e hepatites.'},
 {t:'Dismenorreia',rx:`Uso oral
1. Ibuprofeno 600 mg ...... 15 comprimidos
   Tomar 1 comprimido de 8 em 8 horas, após as refeições, nos dias de cólica (iniciar no 1º dia).
2. Escopolamina 10 mg + dipirona 250 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 8 em 8 horas, se cólica.`,n:'Dismenorreia secundária (início após 25 anos, dor fora da menstruação, dispareunia): investigar endometriose, mioma, DIP.'},
 {t:'Sangramento uterino anormal (sem instabilidade)',rx:`Uso oral
1. Ácido tranexâmico 250 mg ...... 60 comprimidos
   Tomar 4 comprimidos (1 g) de 8 em 8 horas por até 5 dias, durante o sangramento.
2. Ibuprofeno 600 mg ...... 15 comprimidos
   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias.`,n:'Antes: beta-hCG, hemoglobina e estabilidade. Ácido tranexâmico é contraindicado com história de trombose. Encaminhar para ginecologia (USG transvaginal).'}]},

rx_alta_pele2:{tipo:'a',g:'osteo',t:'Micoses, parasitoses, herpes e mordeduras (alta)',rec:RS,items:[
 {t:'Escabiose',rx:`Uso tópico
1. Permetrina 5% loção ...... 1 frasco
   Aplicar em todo o corpo, do pescoço para baixo, à noite; enxaguar após 8 a 12 horas. Repetir em 7 dias.

Uso oral
2. Ivermectina 6 mg ...... 4 comprimidos
   Tomar 2 comprimidos (200 mcg/kg) em dose única, em jejum; repetir em 7 dias.
3. Dexclorfeniramina 2 mg ...... 20 comprimidos
   Tomar 1 comprimido de 8 em 8 horas, se coceira.`,n:'Tratar todos os contactantes ao mesmo tempo. Lavar roupas e lençóis em água quente. A coceira pode durar 2 a 4 semanas após a cura. Ivermectina: ajustar dose pelo peso e não usar < 15 kg nem na gestação.'},
 {t:'Pediculose',rx:`Uso tópico
1. Permetrina 1% loção ...... 1 frasco
   Aplicar no cabelo seco, deixar 10 minutos e enxaguar. Repetir em 7 a 10 dias.`,n:'Passar pente fino. Lavar pentes, bonés e roupas de cama.'},
 {t:'Micose de pele (tinea corporis/cruris)',rx:`Uso tópico
1. Cetoconazol 2% creme ...... 1 bisnaga
   Aplicar na lesão e 2 cm ao redor de 12 em 12 horas por 3 semanas (até 1 semana após sumir).`,n:'Lesões extensas, couro cabeludo ou unhas: tratamento oral (terbinafina, fluconazol). Não usar creme com corticoide.'},
 {t:'Pitiríase versicolor',rx:`Uso tópico
1. Cetoconazol 2% xampu ...... 1 frasco
   Aplicar nas manchas no banho, deixar 5 minutos e enxaguar, 1 vez ao dia por 5 dias.

Uso oral
2. Fluconazol 150 mg ...... 4 cápsulas
   Tomar 2 cápsulas (300 mg) 1 vez por semana, por 2 semanas (se extensa).`,n:'As manchas podem demorar meses para repigmentar.'},
 {t:'Herpes labial / genital',rx:`Uso oral
1. Aciclovir 400 mg ...... 21 comprimidos
   Tomar 1 comprimido de 8 em 8 horas por 7 dias (1º episódio de herpes genital: 7 a 10 dias; recorrência: 5 dias).
   ou Valaciclovir 1 g de 12 em 12 horas por 7 a 10 dias (1º episódio) / 500 mg de 12/12 h por 3 dias (recorrência).`,n:'Iniciar o quanto antes (ideal < 72 h). Herpes labial leve: aciclovir creme 5x/dia por 5 dias. Herpes genital: oferecer testes para ISTs.'},
 {t:'Varicela no adulto',rx:`Uso oral
1. Aciclovir 400 mg ...... 70 comprimidos
   Tomar 2 comprimidos (800 mg) 5 vezes ao dia por 7 dias.
2. Dexclorfeniramina 2 mg ...... 20 comprimidos
   Tomar 1 comprimido de 8 em 8 horas, se coceira.
3. Paracetamol 750 mg ...... 20 comprimidos
   Tomar 1 comprimido de 6 em 6 horas, se febre ou dor. Não usar AAS nem ibuprofeno.`,n:'Iniciar em até 24 h do exantema. Gestante, imunossuprimido, pneumonia ou encefalite: internar (aciclovir EV). Afastamento até todas as lesões virarem crosta.'},
 {t:'Mordedura de cão ou gato (profilaxia)',rx:`Uso oral
1. Amoxicilina 875 mg + clavulanato 125 mg ...... 10 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por 5 dias.
   Alergia: Doxiciclina 100 mg de 12/12 h + Metronidazol 400 mg de 8/8 h por 5 dias.`,rec:RA,n:'Profilaxia se: mordedura de gato, mão/face/genital, ferida profunda ou com esmagamento, imunossuprimido, asplenia, edema. Lavar bem, não suturar mão (exceto face). Avaliar raiva e tétano.'},
 {t:'Verminoses',rx:`Uso oral
1. Albendazol 400 mg ...... 1 comprimido
   Tomar 1 comprimido em dose única (repetir em 15 dias se necessário).
   Estrongiloidíase: Ivermectina 200 mcg/kg em dose única (repetir em 14 dias).
   Giardíase: Secnidazol 1 g, 2 comprimidos em dose única (ou Metronidazol 250 mg de 8/8 h por 5 dias).`,n:'Tratar a família se oxiuríase. Evitar albendazol e ivermectina na gestação.'}]},

rx_alta_cv:{tipo:'a',g:'cv',t:'Cardiovascular e diabetes (alta)',rec:RS,items:[
 {t:'Hipertensão sem tratamento (após urgência controlada)',rx:`Uso oral
1. Losartana 50 mg ...... 60 comprimidos
   Tomar 1 comprimido de 12 em 12 horas, uso contínuo.
2. Anlodipino 5 mg ...... 30 comprimidos
   Tomar 1 comprimido 1 vez ao dia, uso contínuo.`,n:'Pseudocrise (PA alta sem lesão de órgão-alvo): não baixar rápido no PS; iniciar/ajustar oral e retorno na UBS em 1 semana. Gestante ou idade fértil sem contracepção: não usar losartana/IECA.'},
 {t:'FA com controle de frequência',rx:`Uso oral
1. Metoprolol (succinato) 50 mg ...... 30 comprimidos
   Tomar 1 comprimido 1 vez ao dia, uso contínuo.
2. Apixabana 5 mg ...... 60 comprimidos
   Tomar 1 comprimido de 12 em 12 horas, uso contínuo.`,n:'Anticoagular se CHA2DS2-VA ≥ 2. Apixabana 2,5 mg 12/12 h se ≥ 2 de: idade ≥ 80, peso ≤ 60 kg, creatinina ≥ 1,5. Alternativa: rivaroxabana 20 mg 1x/dia no jantar (15 mg se ClCr 15–49).'},
 {t:'IC descompensada leve (alta)',rx:`Uso oral
1. Furosemida 40 mg ...... 30 comprimidos
   Tomar 1 comprimido pela manhã (pode tomar mais 1 às 14 h se inchaço ou falta de ar), uso contínuo.
2. Espironolactona 25 mg ...... 30 comprimidos
   Tomar 1 comprimido 1 vez ao dia, uso contínuo.`,n:'Pesar todo dia: se ganhar > 2 kg em 3 dias, retornar. Restrição de sal. Potássio e creatinina em 1 semana. Otimizar IECA/BRA/sacubitril-valsartana, betabloqueador e iSGLT2 no ambulatório.'},
 {t:'Diabetes tipo 2 recém-diagnosticado (sem descompensação)',rx:`Uso oral
1. Metformina 850 mg ...... 60 comprimidos
   Tomar 1 comprimido após o jantar por 1 semana; depois, 1 comprimido após o café e 1 após o jantar, uso contínuo.`,n:'Contraindicada se TFG < 30 (reduzir dose se 30–45). Glicemia > 300 ou HbA1c > 10% com sintomas: considerar insulina. Retorno na UBS.'}]}
});

/* Mais opções nas receitas de alta já existentes */
RX.rx_ped&&RX.rx_ped.items.push(
 {t:'Crise de asma (alta)',rx:`Uso oral
1. Prednisolona 3 mg/mL ...... 1 frasco
   Dar __ mL (1 a 2 mg/kg, máx. 40 mg) 1 vez ao dia, pela manhã, por 5 dias.

Uso inalatório
2. Salbutamol 100 mcg/jato aerossol ...... 1 frasco
   Fazer __ jatos (1 jato a cada 2 kg, máx. 10) com espaçador de 4 em 4 horas por 48 horas, depois de 6 em 6 horas, se falta de ar.`,n:'Use a calculadora de doses pediátricas para o volume. Retorno se piora, cansaço ou necessidade de salbutamol antes de 3 horas.'},
 {t:'Vômitos (gastroenterite)',rx:`Uso oral
1. Sais para reidratação oral ...... 5 envelopes
   Dissolver 1 envelope em 1 litro de água filtrada e oferecer aos poucos após cada evacuação ou vômito.
2. Ondansetrona 4 mg/5 mL solução oral ...... 1 frasco
   Dar __ mL (0,15 mg/kg) de 8 em 8 horas, se vômitos, por até 3 dias.`,n:'Acima de 6 meses. Sinais de alarme: sonolência, recusa hídrica, sem urina por 8 h, sangue nas fezes.'},
 {t:'Urticária / alergia',rx:`Uso oral
1. Loratadina 1 mg/mL xarope ...... 1 frasco
   Dar 5 mL (< 30 kg) ou 10 mL (≥ 30 kg) 1 vez ao dia por 5 a 7 dias.`,n:'Acima de 2 anos. Edema de lábios, língua, falta de ar ou vômitos: anafilaxia (adrenalina IM).'});
RX.rx_alta_sint&&RX.rx_alta_sint.items.push(
 {t:'Alergia / urticária (adulto)',rx:`Uso oral
1. Fexofenadina 180 mg ...... 7 comprimidos
   Tomar 1 comprimido 1 vez ao dia por 7 dias.
   ou Loratadina 10 mg 1 vez ao dia por 7 dias.`,n:'Urticária intensa: prednisona 40 mg/dia por 3–5 dias. Angioedema com via aérea ou anafilaxia: adrenalina.'},
 {t:'Dor muscular / contratura',rx:`Uso oral
1. Ciclobenzaprina 5 mg ...... 10 comprimidos
   Tomar 1 comprimido à noite por até 10 dias.
2. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor.`,n:'Ciclobenzaprina dá sono e boca seca; evitar no idoso (Beers) e com ISRS/tramadol.'});
