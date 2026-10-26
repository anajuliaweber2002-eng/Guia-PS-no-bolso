/* Infecto (out/2026): COVID-19, malária, leptospirose, neutropenia febril, endocardite, mordedura e raiva, ISTs. */

/* ---------- Anamneses ---------- */
Object.assign(AN,{
an_febviaj:{g:'inf',t:'Febre com exposição (malária, leptospirose)',code:'B50–B54 · A27',rel:[['cd_malaria','Malária'],['cd_lepto','Leptospirose'],['cd_dengue','Dengue']],body:an('Febre',
`Paciente com febre há [ ] dias, [contínua / intermitente com calafrios a cada __ h], associada a [cefaleia, mialgia intensa (panturrilhas), artralgia, dor retro-orbitária, náuseas, vômitos, diarreia, icterícia, sufusão conjuntival, tosse, hemoptise, oligúria, sangramentos, exantema].
Exposições nos últimos 30 dias: viagem para [região amazônica / área endêmica de malária: __, data de retorno __]; contato com enchente, lama, esgoto, água parada, roedores, trabalho rural/limpeza de fossas: [ ]; dengue/arbovirose na região: [ ].
Malária prévia: [ ], tratamento: [ ]. Profilaxia: [ ]. Gestação: [ ].`,
`${EF_CV}
${EF_AR}
ABD: [ ]. Hepatomegalia [ ]. Esplenomegalia [ ]. Dor à palpação de panturrilhas [ ].
Pele e mucosas: [icterícia (rubínica?), sufusão conjuntival, petéquias, palidez].
NEURO: Glasgow [ ], [rigidez de nuca].
Prova do laço (dengue): [ ].`,
`1. Síndrome febril aguda a esclarecer: [malária / leptospirose / dengue / outras]
2. [Sinais de gravidade: __]`,
`- [Gota espessa / teste rápido para malária (resultado em até 2 h)]
- [Hemograma, plaquetas, ureia, creatinina, K, bilirrubinas, TGO/TGP, CPK, coagulograma, gasometria, EAS, RX de tórax]
- [Sorologia/PCR para leptospirose; NS1/sorologia dengue]
- Notificação compulsória
- [Antimicrobiano: __]`)},

an_neutro:{g:'inf',t:'Febre no paciente oncológico',code:'D70 · R50.8',rel:[['cd_neutro','Neutropenia febril'],['rx_neutro','Prescrição'],['mascc','MASCC']],body:an('Febre durante a quimioterapia',
`Paciente com [neoplasia: __], em [quimioterapia: protocolo __, último ciclo em __ (D__ do ciclo)], com febre aferida de [ ] °C há [ ] h. Calafrios relacionados à infusão no cateter: [ ].
Foco: [tosse, dispneia, disúria, diarreia, dor abdominal, mucosite, lesões de pele, dor perianal, cefaleia, dor ou hiperemia no cateter (tipo __)].
Profilaxias em uso: [quinolona, aciclovir, SMX-TMP, fluconazol]. G-CSF: [ ]. Internações e antibióticos nos últimos 3 meses: [ ]. Colonização por multirresistente: [ ].
Neutrófilos do último hemograma: [ ].`,
`ESTADO GERAL: [ ]. ${EF_CV}
${EF_AR}
${EF_ABD}
Cavidade oral: [mucosite grau __]. Pele e local do cateter: [ ]. Região perianal (inspeção, SEM toque retal): [ ].
${EF_NEU}`,
`1. Neutropenia febril [alto / baixo risco, MASCC __]
2. Foco: [ / sem foco definido]`,
`- Antibiótico em até 60 min da chegada
- 2 pares de hemoculturas (1 periférico + 1 de cada lúmen do cateter), urocultura, culturas de foco
- [Hemograma, ureia, creatinina, eletrólitos, função hepática, lactato, PCR, RX de tórax]
- [Cefepima 2 g EV 8/8 h ± vancomicina]
- Isolamento protetor; contato com a oncologia`)},

an_mord:{g:'inf',t:'Mordedura / acidente com animal (raiva)',code:'W54 · W55 · Z20.3',rel:[['cd_raiva','Profilaxia da raiva'],['rx_tetano','Tétano e mordedura']],body:an('Foi mordido',
`Paciente vítima de [mordedura / arranhadura / lambedura] por [cão / gato / morcego / macaco / outro animal silvestre / animal de produção (boi, cavalo, porco) / roedor] há [ ] h, em [local: __], de forma [provocada / não provocada].
Animal: [domiciliado / de rua], [vacinado contra raiva: sim/não/desconhecido], [sadio / com comportamento alterado], [observável por 10 dias / morto / desaparecido]. Outros acidentes com o mesmo animal: [ ].
Lavagem com água e sabão: [ ]. Profilaxia antirrábica prévia: [não / sim, __ doses em __]. Vacina antitetânica: [ ]. Imunossupressão: [ ].`,
`Lesão: [ ] em [região: __], [superficial / profunda], [única / múltipla], [puntiforme / lacerante], [pouco / muito extensa], [acomete mucosa / face / cabeça / pescoço / mãos / pés / polpas digitais].
Sinais de infecção: [ ]. Lesão de tendão, nervo, articulação ou osso: [ ].
Classificação MS: [contato indireto / acidente leve / acidente grave].`,
`1. Acidente por [animal] [leve / grave]
2. [Indicação de profilaxia antirrábica: __]`,
`- Lavar abundantemente com água e sabão; antisséptico
- [Observação do animal por 10 dias / vacina antirrábica D0, D3, D7, D14 / + soro ou imunoglobulina antirrábica infiltrados na lesão]
- [Profilaxia antitetânica]
- [Amoxicilina + clavulanato por 3–5 dias]
- Notificação (SINAN); orientar retorno nas datas da vacina`)},

an_ist:{g:'inf',t:'IST (corrimento, úlcera genital)',code:'A54 · A51 · A60 · N76',rel:[['cd_ist','Conduta ISTs'],['rx_ist','Prescrição']],body:an('Corrimento / ferida nas partes íntimas',
`Paciente com [corrimento uretral / corrimento vaginal / úlcera genital / dor pélvica / disúria / verrugas / prurido] há [ ] dias. Características: [ ].
Úlcera: [única / múltipla], [dolorosa / indolor], [vesículas prévias], [base limpa / purulenta], linfonodos inguinais [ ].
Parcerias sexuais nos últimos 60 dias: [ ]; uso de preservativo: [ ]; relação sem preservativo há [ ] dias; sexo [oral / vaginal / anal]. Parceria com sintomas: [ ].
DUM: [ ]; gestação: [ ]; método contraceptivo: [ ]. Febre, dor abdominal, dispareunia: [ ].
ISTs prévias e tratamentos: [ ]. Status HIV, sífilis, hepatites: [ ]. PrEP: [ ].`,
`${EF_ABD}
Genitália: [corrimento __ (cor, aspecto), úlcera __ cm em __, verrugas, vesículas]. Linfonodos inguinais: [ ].
[Exame especular: colo __, corrimento __; toque: dor à mobilização do colo / anexos __]
Pele e mucosas (sífilis secundária: roséola, lesões palmoplantares, condiloma plano): [ ].`,
`1. [Síndrome do corrimento uretral / vaginal / úlcera genital / DIP]
2. [ ]`,
`- Tratamento sindrômico (PCDT IST)
- Testes rápidos: HIV, sífilis, hepatite B e C
- [Avaliar PEP se exposição < 72 h]
- Convocar e tratar parcerias; preservativo; notificação (sífilis, HIV, hepatites)`)}
});

/* ---------- Prescrições ---------- */
Object.assign(RX,{
rx_covid:{tipo:'h',g:'resp',t:'COVID-19',rec:RH,rel:[['cd_covid','Conduta COVID-19'],['cd_ivas','IVAS, gripe e SRAG']],items:[
 {t:'COVID-19 com hipoxemia (internação)',rx:`1. Dieta conforme aceitação; cabeceira elevada; prona acordado se tolerado
2. O2 para SpO2 92–96%: cateter nasal até 6 L/min → máscara com reservatório → CNAF/VNI → IOT
3. Dexametasona 6 mg EV ou VO 1x/dia por até 10 dias (só se em uso de O2)
4. Enoxaparina 40 mg SC 1x/dia (ajustar peso e função renal)
5. Dipirona 1 g EV de 6/6 h se febre ou dor
6. Glicemia capilar de 6/6 h (corticoide)
7. Precaução respiratória (aerossol para procedimentos)
8. Hemograma, PCR, D-dímero, ureia, creatinina, eletrólitos, TGO/TGP, gasometria, RX ou TC de tórax`,n:'Antibiótico só se suspeita de coinfecção bacteriana. Hipoxemia progressiva com PCR elevada: considerar tocilizumabe ou baricitinibe (protocolo institucional).'},
 {t:'COVID-19 leve com risco de progressão (alta)',rx:`USO ORAL
1. Nirmatrelvir 150 mg + ritonavir 100 mg ———— 1 caixa
   Tomar 2 comprimidos de nirmatrelvir + 1 de ritonavir juntos de 12/12 h por 5 dias (iniciar em até 5 dias dos sintomas)
   ClCr 30–59: 1 comprimido de nirmatrelvir + 1 de ritonavir de 12/12 h
2. Dipirona 500 mg ———— 20 comprimidos
   Tomar 1 a 2 comprimidos de 6/6 h se febre ou dor

ORIENTAÇÕES
- Isolamento conforme orientação vigente; máscara em ambientes compartilhados
- Retornar se falta de ar, SpO2 < 94%, confusão ou piora após o 5º dia`,n:'Indicação (MS): ≥ 65 anos ou imunossuprimidos com sintomas há ≤ 5 dias. Checar interações (ritonavir): estatinas, amiodarona, anticoagulantes, antiarrítmicos, tacrolimo, alguns anticonvulsivantes. Contraindicado se ClCr < 30 ou Child C.'}]},

rx_malaria:{tipo:'h',g:'inf',t:'Malária',rec:RH,rel:[['cd_malaria','Conduta malária']],items:[
 {t:'P. vivax ou P. ovale (adulto ≥ 50 kg)',rx:`1. Cloroquina 150 mg — 4 comprimidos no D1, 3 no D2 e 3 no D3 (10 mg/kg no D1, 7,5 mg/kg no D2 e D3)
2. Primaquina 15 mg — 0,5 mg/kg/dia por 7 dias (ex.: 60 kg = 30 mg = 2 comprimidos/dia; acima de 70 kg, ver tabela do MS)
   ou Tafenoquina 300 mg dose única (≥ 16 anos, G6PD normal), conforme disponibilidade do MS
3. Tomar com alimentos; repetir a dose se vomitar em 30 min
4. Lâmina de verificação de cura (LVC) nos dias 3, 7, 14, 28, 42 e 63`,n:'Dosar G6PD antes da primaquina/tafenoquina quando disponível. Primaquina contraindicada em gestante e < 6 meses: na gestante, cloroquina 300 mg/semana para prevenir recaída até o fim da amamentação, conforme o Guia do MS.'},
 {t:'P. falciparum não complicada',rx:`1. Artemeter 20 mg + lumefantrina 120 mg — 4 comprimidos de 12/12 h por 3 dias (adulto ≥ 35 kg), com alimento gorduroso
   (1ª dose e 2ª dose com 8 h de intervalo no D1)
2. Primaquina 15 mg — dose única no D1 (0,25 mg/kg ≈ 1 comprimido no adulto), efeito gametocitocida
3. LVC nos dias 3, 7, 14, 21, 28 e 42`,n:'Gestante no 1º trimestre: quinina + clindamicina (ver Guia do MS). Notificação compulsória. Esquemas por peso e idade na tabela do MS.'},
 {t:'Malária grave (qualquer espécie)',rx:`1. UTI; glicemia capilar de 2/2 h (hipoglicemia é comum)
2. Artesunato 60 mg — 2,4 mg/kg EV nas horas 0, 12 e 24; depois 1x/dia
   (criança < 20 kg: 3 mg/kg/dose)
   Após 24 h e tolerando VO: completar com artemeter + lumefantrina por 3 dias
3. Hidratação cuidadosa (risco de edema pulmonar); evitar sobrecarga
4. Paracetamol para febre
5. Tratar convulsões (benzodiazepínico), anemia grave (transfusão se Hb < 7), LRA (diálise), acidose
6. Ceftriaxona se suspeita de sepse bacteriana associada`,n:'Gravidade: rebaixamento/convulsão, prostração, hipoglicemia, acidose, anemia grave, LRA, icterícia, hemorragia, choque, edema pulmonar, hiperparasitemia (> 10%).'}]},

rx_lepto:{tipo:'h',g:'inf',t:'Leptospirose',rec:RH,rel:[['cd_lepto','Conduta leptospirose']],items:[
 {t:'Fase precoce (sem sinais de alerta, alta)',rx:`USO ORAL
1. Doxiciclina 100 mg ———— 14 comprimidos
   Tomar 1 comprimido de 12/12 h por 7 dias
   ou Amoxicilina 500 mg ———— 21 cápsulas
   Tomar 1 cápsula de 8/8 h por 7 dias (gestante e criança)
2. Dipirona 500 mg ———— 20 comprimidos
   Tomar 1 a 2 comprimidos de 6/6 h se febre ou dor

ORIENTAÇÕES
- Hidratação oral abundante
- Não usar AAS nem anti-inflamatórios
- Retornar imediatamente se falta de ar, tosse com sangue, urinar pouco, pele/olhos amarelos, sangramentos, tontura`,n:'Criança: amoxicilina 50 mg/kg/dia de 8/8 h por 7 dias. Doxiciclina contraindicada em gestante e < 9 anos.'},
 {t:'Fase tardia / grave (internação)',rx:`1. Penicilina G cristalina 1,5 milhão UI EV de 6/6 h por 7 dias
   ou Ceftriaxona 1–2 g EV 1x/dia por 7 dias
   ou Ampicilina 1 g EV de 6/6 h
2. Hidratação EV cuidadosa (SF 0,9%), guiada por volemia e pulmão (risco de hemorragia pulmonar)
3. Repor K (LRA da leptospirose é não oligúrica e com hipocalemia no início)
4. Diálise precoce se LRA oligúrica, hipercalemia, acidose, uremia
5. Hemograma, plaquetas, ureia, creatinina, K, bilirrubinas, CPK, coagulograma, gasometria, RX de tórax diários`,n:'Hemorragia pulmonar (tosse com sangue, dispneia, infiltrado alveolar, queda de Hb): UTI, VM protetora com PEEP alta.'}]},

rx_neutro:{tipo:'h',g:'inf',t:'Neutropenia febril',rec:RH,rel:[['cd_neutro','Conduta neutropenia febril'],['mascc','MASCC']],items:[
 {t:'Alto risco (internação)',rx:`1. Isolamento protetor; dieta cozida
2. Hemoculturas: 2 pares (periférico + cada lúmen do cateter) ANTES do antibiótico, sem atrasar > 60 min
3. Cefepima 2 g EV de 8/8 h (em até 60 min)
   ou Piperacilina-tazobactam 4,5 g EV de 6/6 h (foco abdominal/perianal)
   ou Meropeném 1 g EV de 8/8 h (choque, colonização por ESBL, uso recente de cefalosporina)
4. + Vancomicina 15–20 mg/kg EV de 12/12 h (ataque 25–30 mg/kg se grave) SE: instabilidade, infecção de cateter ou pele, pneumonia, MRSA, mucosite grave com profilaxia com quinolona
5. Choque: + Amicacina 15 mg/kg EV 1x/dia
6. Dipirona 1 g EV de 6/6 h se febre
7. Hemograma diário; ureia, creatinina, eletrólitos`,n:'Não fazer toque retal nem supositório. Antifúngico empírico se febre persistente por 4–7 dias. Doses para ClCr normal.'},
 {t:'Baixo risco (MASCC ≥ 21), tratamento oral',rx:`1. Primeira dose EV no PS e observação por 4–24 h
2. Amoxicilina 875 mg + clavulanato 125 mg — 1 comprimido VO de 12/12 h
   + Ciprofloxacino 500–750 mg — 1 comprimido VO de 12/12 h
   (alergia a penicilina: ciprofloxacino + clindamicina 300 mg 6/6 h)
3. Retorno ou contato em 24 h; voltar se febre persistente, piora ou intolerância`,n:'Só se: estável, VO possível, sem foco grave, acesso fácil ao hospital, cuidador e concordância da oncologia. Não usar se já em profilaxia com quinolona.'}]},

rx_endoc:{tipo:'h',g:'cv',t:'Endocardite infecciosa',rec:RH,rel:[['cd_endoc','Conduta endocardite']],items:[
 {t:'Tratamento empírico',rx:`1. 3 pares de hemoculturas de punções diferentes (com 30–60 min entre elas se estável) ANTES do antibiótico
2. Valva nativa, comunitária:
   Ampicilina 2 g EV de 4/4 h
   + Oxacilina 2 g EV de 4/4 h
   + Gentamicina 3 mg/kg EV 1x/dia
   (alergia a penicilina ou suspeita de MRSA: Vancomicina 15–20 mg/kg EV de 8/8 a 12/12 h + Gentamicina)
3. Prótese valvar, dispositivo intracardíaco ou nosocomial:
   Vancomicina 15–20 mg/kg EV de 8/8 a 12/12 h + Gentamicina 3 mg/kg/dia + Rifampicina 300 mg VO de 8/8 h (prótese)
4. Ecocardiograma transtorácico (transesofágico se prótese ou TT negativo com alta suspeita)
5. Ureia, creatinina diários (gentamicina/vancomicina); nível sérico de vancomicina`,n:'Ajustar ao agente isolado. Duração em geral 4–6 semanas. Avaliar cirurgia: IC, infecção não controlada (abscesso, febre persistente), vegetação > 10 mm com embolia.'}]},

rx_raiva:{tipo:'h',g:'inf',t:'Profilaxia da raiva',rec:RH,rel:[['cd_raiva','Conduta profilaxia da raiva'],['rx_tetano','Tétano e mordedura']],items:[
 {t:'Vacina e soro antirrábico',rx:`1. Lavar a lesão com água corrente e sabão por 10–15 min; antisséptico (iodopovidona/clorexidina)
2. Vacina antirrábica (Vero) 0,5 mL IM no deltoide (vasto lateral da coxa em < 2 anos)
   Esquema de 4 doses: D0, D3, D7 e D14
   (via intradérmica 0,1 mL em 2 sítios nos mesmos dias, conforme rede)
3. Quando indicado (acidente grave com animal suspeito, morcego, silvestre):
   Soro antirrábico (SAR) 40 UI/kg ou Imunoglobulina humana antirrábica (IGHAR) 20 UI/kg
   Infiltrar a maior quantidade possível ao redor e dentro das lesões; o restante IM em local diferente da vacina
   Até 7 dias após a 1ª dose de vacina
4. Profilaxia antitetânica conforme esquema
5. Evitar sutura; se necessário (face, sangramento), aproximar após infiltrar o soro`,n:'Quem já recebeu esquema completo de pré ou pós-exposição: 2 doses (D0 e D3), sem soro. Imunossuprimido: sempre soro + vacina 5 doses e sorologia.'}]},

rx_ist:{tipo:'h',g:'inf',t:'ISTs (tratamento sindrômico)',rec:RH,rel:[['cd_ist','Conduta ISTs']],items:[
 {t:'Uretrite / cervicite (gonorreia + clamídia)',rx:`1. Ceftriaxona 500 mg IM dose única
2. Azitromicina 500 mg — 2 comprimidos (1 g) VO dose única
3. Tratar parcerias dos últimos 60 dias com o mesmo esquema`,n:'Alternativa à azitromicina: doxiciclina 100 mg 12/12 h por 7 dias (não gestante). Abstinência até 7 dias após o tratamento de ambos.'},
 {t:'Sífilis',rx:`Primária, secundária, latente recente (< 1 ano):
1. Penicilina G benzatina 2,4 milhões UI IM (1,2 milhão em cada glúteo), dose única

Latente tardia (> 1 ano), indeterminada ou terciária:
1. Penicilina G benzatina 2,4 milhões UI IM 1x/semana por 3 semanas (total 7,2 milhões)

Alergia (não gestante): Doxiciclina 100 mg VO de 12/12 h por 15 dias (recente) ou 30 dias (tardia)`,n:'Gestante alérgica: dessensibilização e penicilina. Neurossífilis: penicilina cristalina 18–24 milhões UI/dia por 14 dias. VDRL de controle trimestral.'},
 {t:'Úlcera genital (sem diagnóstico etiológico)',rx:`1. Penicilina G benzatina 2,4 milhões UI IM dose única (sífilis)
2. Azitromicina 500 mg — 2 comprimidos VO dose única (cancroide)
3. Se vesículas/úlceras dolorosas sugestivas de herpes:
   Aciclovir 400 mg — 1 comprimido VO de 8/8 h por 7–10 dias (1º episódio) ou 5 dias (recorrência)`,n:'Úlcera > 4 semanas: investigar donovanose, linfogranuloma, neoplasia.'},
 {t:'Corrimento vaginal',rx:`Vaginose bacteriana: Metronidazol 250 mg — 2 comprimidos VO de 12/12 h por 7 dias
   (ou Metronidazol gel 100 mg/g, 1 aplicador vaginal à noite por 5 dias)
Tricomoníase: Metronidazol 400 mg — 5 comprimidos (2 g) VO dose única (tratar parceria)
Candidíase: Fluconazol 150 mg VO dose única ou Miconazol 2% creme vaginal à noite por 7 dias`,n:'Gestante: metronidazol VO é permitido (inclusive 1º trimestre, conforme PCDT); candidíase na gestante só tópico.'},
 {t:'Doença inflamatória pélvica (ambulatorial)',rx:`1. Ceftriaxona 500 mg IM dose única
2. Doxiciclina 100 mg — 1 comprimido VO de 12/12 h por 14 dias
3. Metronidazol 250 mg — 2 comprimidos VO de 12/12 h por 14 dias
4. Reavaliar em 72 h; tratar parceria (gonorreia + clamídia)`,n:'Internar: gestante, abscesso tubo-ovariano, sem melhora em 72 h, intolerância VO, quadro grave, dúvida diagnóstica com abdome agudo cirúrgico. Retirar DIU não é obrigatório.'}]}
});

/* ---------- Condutas ---------- */
Object.assign(CD,{
cd_covid:{g:'resp',t:'COVID-19 no PS',src:'MS Guia de manejo 2024 · OMS 2023 · IDSA',k:'covid coronavirus sars cov 2 dexametasona nirmatrelvir ritonavir paxlovid oxigenio prona tocilizumabe srag',rel:[['rx_covid','Prescrição'],['cd_ivas','IVAS, gripe e SRAG']],sec:[
 {h:'Gravidade',rows:[['Leve','Sem hipoxemia (SpO2 ≥ 94% em ar ambiente), sem pneumonia grave'],['Moderada','Pneumonia sem hipoxemia'],['Grave','SpO2 < 94%, FR > 30, desconforto, infiltrado > 50%'],['Crítica','SDRA, choque, disfunção orgânica']]},
 {h:'Tratamento por gravidade',rows:[['Leve sem risco','Sintomáticos, isolamento, sinais de alerta'],['Leve com risco (≥ 65 anos, imunossuprimido)','Nirmatrelvir/ritonavir em até 5 dias dos sintomas (checar interações e função renal)'],['Com O2','Dexametasona 6 mg/dia por até 10 dias + profilaxia de TEV'],['O2 em alto fluxo/VNI/VM com inflamação alta','+ Tocilizumabe ou baricitinibe (protocolo)']]},
 {h:'Pontos práticos',li:['Corticoide em paciente SEM O2 piora o desfecho','Antibiótico só se suspeita de coinfecção bacteriana','Prona acordado pode evitar IOT em hipoxêmicos','Testar influenza junto (tratar com oseltamivir se SRAG)','Notificar SRAG']}]},

cd_malaria:{g:'inf',t:'Malária',src:'MS Guia de tratamento da malária no Brasil 2021',k:'malaria plasmodium vivax falciparum gota espessa cloroquina primaquina artemeter lumefantrina artesunato amazonia',rel:[['rx_malaria','Prescrição'],['an_febviaj','Anamnese']],sec:[
 {h:'Suspeitar',li:['Febre em quem esteve em área endêmica (Amazônia Legal, África, Ásia) nos últimos 30 dias (P. vivax pode recair meses depois)','Febre com calafrios, sudorese, cefaleia, mialgia; anemia, plaquetopenia, icterícia, esplenomegalia','Gota espessa ou teste rápido: resultado em até 2 h; repetir se negativo e suspeita persiste']},
 {h:'Sinais de gravidade (internar, artesunato EV)',li:['Prostração, rebaixamento, convulsão','Hipoglicemia, acidose metabólica, lactato alto','Anemia grave (Hb < 7), icterícia, hemorragias','LRA, edema pulmonar/SDRA, choque','Hiperparasitemia (> 10% ou > 100.000/mm³ para falciparum)','Gestante, criança pequena e não imune: maior risco']},
 {h:'Tratamento',rows:[['P. vivax/ovale','Cloroquina 3 dias + primaquina 7 dias (ou tafenoquina dose única)'],['P. falciparum','Artemeter + lumefantrina 3 dias + primaquina dose única'],['Mista','Artemeter + lumefantrina + primaquina 7 dias'],['Grave','Artesunato EV, depois completar com ACT oral']]},
 {h:'Lembretes',li:['Notificação compulsória imediata em área não endêmica','Medicamentos distribuídos pelo MS (rede de referência)','Primaquina: contraindicada em gestante e < 6 meses; risco de hemólise na deficiência de G6PD']}]},

cd_lepto:{g:'inf',t:'Leptospirose',src:'MS Leptospirose: diagnóstico e manejo clínico 2014 · Guia de Vigilância 2023',k:'leptospirose enchente rato weil ictericia rubinica hemorragia pulmonar panturrilha doxiciclina penicilina',rel:[['rx_lepto','Prescrição'],['an_febviaj','Anamnese'],['cd_dengue','Dengue']],sec:[
 {h:'Suspeitar',li:['Febre, cefaleia e mialgia (principalmente panturrilhas) até 30 dias após exposição a enchente, lama, esgoto, roedores, fossas','Sufusão conjuntival é muito sugestiva','Fase tardia (síndrome de Weil): icterícia rubínica + LRA + hemorragias; ou síndrome de hemorragia pulmonar']},
 {h:'Sinais de alerta (internar)',li:['Dispneia, tosse, taquipneia, hemoptise','Oligúria, alteração urinária','Fenômenos hemorrágicos','Hipotensão, alteração do nível de consciência','Vômitos frequentes, arritmias, icterícia']},
 {h:'Exames',li:['Plaquetopenia, leucocitose com desvio, CPK elevada','Bilirrubina direta alta com TGO/TGP pouco elevadas (< 200)','LRA com K normal ou BAIXO (não oligúrica no início)','Sorologia (ELISA IgM) após 7 dias; PCR na 1ª semana']},
 {h:'Tratamento',li:['Iniciar antibiótico na suspeita, sem esperar exame','Precoce: doxiciclina ou amoxicilina 5–7 dias','Grave: penicilina cristalina, ceftriaxona ou ampicilina 7 dias','Diálise precoce; cuidado com volume (hemorragia pulmonar)','Notificação compulsória']}]},

cd_neutro:{g:'inf',t:'Neutropenia febril',src:'IDSA/ASCO 2018 · ESMO 2016 · NCCN',k:'neutropenia febril oncologico quimioterapia febre neutrofilos cefepima piperacilina meropenem vancomicina mascc',rel:[['rx_neutro','Prescrição'],['an_neutro','Anamnese'],['mascc','MASCC'],['cd_sepse','Sepse']],sec:[
 {h:'Definição',li:['Febre: T oral ≥ 38,3 °C uma vez ou ≥ 38 °C por 1 h','Neutropenia: neutrófilos < 500/mm³ ou < 1.000 com queda prevista para < 500 em 48 h','Paciente em QT com febre: tratar como neutropênico até o hemograma chegar']},
 {h:'Conduta',li:['Antibiótico em até 60 min: beta-lactâmico antipseudomonas (cefepima, piperacilina-tazobactam ou meropeném)','Vancomicina não é rotina: só instabilidade, cateter, pele, pneumonia, MRSA, mucosite grave','Classificar risco (MASCC ≥ 21 = baixo risco; candidato a tratamento oral)','Não fazer toque retal','Febre persistente 4–7 dias: pesquisa de fungo (TC de tórax, galactomanana) e antifúngico']}]},

cd_endoc:{g:'cv',t:'Endocardite infecciosa',src:'ESC 2023 · Critérios de Duke-ISCVID 2023 · AHA 2015',k:'endocardite vegetacao sopro hemocultura duke valva protese usuario de drogas embolia ampicilina oxacilina gentamicina',rel:[['rx_endoc','Prescrição'],['cd_sepse','Sepse']],sec:[
 {h:'Suspeitar',li:['Febre + sopro novo, ou febre em quem tem prótese valvar, cardiopatia, endocardite prévia, usuário de drogas EV, hemodiálise, cateter de longa permanência','Fenômenos embólicos: AVC, infarto esplênico/renal, embolia pulmonar séptica (usuário de drogas)','Fenômenos vasculares/imunológicos: petéquias, Janeway, Osler, Roth, glomerulonefrite','Febre sem foco com hemoculturas positivas para S. aureus, estreptococos viridans, enterococo, HACEK']},
 {h:'Critérios de Duke (resumo)',rows:[['Maior 1','Hemoculturas positivas para microrganismo típico (2 amostras separadas) ou persistentemente positivas'],['Maior 2','Imagem: vegetação, abscesso, nova deiscência de prótese (ECO, TC cardíaca, PET)'],['Menores','Predisposição, febre ≥ 38 °C, fenômenos vasculares, fenômenos imunológicos, hemocultura que não preenche critério maior'],['Definitiva','2 maiores, ou 1 maior + 3 menores, ou 5 menores']]},
 {h:'Conduta',li:['3 pares de hemoculturas antes do antibiótico','ECO transtorácico; transesofágico se prótese, TT normal com alta suspeita ou complicação','Empírico conforme valva nativa ou prótese; ajustar pelo agente','Cirurgia: IC por disfunção valvar, infecção não controlada (abscesso, bacteremia persistente), prevenção de embolia (vegetação > 10 mm)','Anticoagulação e AAS não previnem embolia']}]},

cd_raiva:{g:'inf',t:'Profilaxia da raiva (pós-exposição)',src:'MS Nota Técnica 8/2022 · Protocolo de profilaxia antirrábica humana',k:'raiva antirrabica mordedura cao gato morcego vacina soro imunoglobulina profilaxia pos exposicao observacao 10 dias',rel:[['rx_raiva','Prescrição'],['an_mord','Anamnese'],['rx_tetano','Tétano e mordedura']],sec:[
 {h:'Tipo de exposição',rows:[['Contato indireto','Tocar ou dar de comer, lambedura em pele íntegra: não há indicação'],['Leve','Ferimento superficial, pouco extenso, em geral único, em tronco e membros (exceto mãos, pés e polpas digitais); lambedura de pele com lesão superficial'],['Grave','Ferimento em mucosa, cabeça, face, pescoço, mãos, polpas digitais ou planta dos pés; profundo, múltiplo ou extenso; lambedura de mucosa ou de lesão profunda; QUALQUER ferimento por morcego']]},
 {h:'Cão ou gato',rows:[['Sadio e observável por 10 dias','Leve: lavar e observar o animal; sem vacina. Grave: observar e iniciar vacina (D0 e D3); se o animal ficar sadio por 10 dias, encerrar'],['Animal morre, desaparece ou fica doente','Completar vacina (4 doses); se grave, + soro/imunoglobulina'],['Suspeito, raivoso, desaparecido ou morto','Leve: vacina 4 doses. Grave: soro/imunoglobulina + vacina 4 doses']]},
 {h:'Outros animais',rows:[['Morcego e silvestres (macaco, raposa, quati, sagui)','Sempre soro/imunoglobulina + vacina 4 doses, inclusive acidente leve'],['Animais de produção (boi, cavalo, porco, cabra)','Leve: vacina 4 doses. Grave: soro + vacina 4 doses'],['Roedores urbanos, coelhos','Em geral não há indicação']]},
 {h:'Pontos práticos',li:['Lavagem imediata com água e sabão é a medida mais importante','Soro até 7 dias da 1ª dose de vacina, infiltrado na lesão','Esquema prévio completo: só 2 doses (D0 e D3), sem soro','Não suturar se possível; antibiótico profilático (amoxicilina-clavulanato) em mordeduras de risco','Confirmar com o protocolo vigente da secretaria de saúde; notificar no SINAN']}]},

cd_ist:{g:'inf',t:'ISTs: abordagem sindrômica',src:'MS PCDT Atenção integral às pessoas com IST 2022',k:'ist dst corrimento uretral gonorreia clamidia sifilis ulcera genital herpes cancroide vaginose tricomonas candidiase dip doenca inflamatoria pelvica',rel:[['rx_ist','Prescrição'],['an_ist','Anamnese'],['cd_violsex','Violência sexual e PEP']],sec:[
 {h:'Síndromes e tratamento',rows:[['Corrimento uretral / cervicite','Ceftriaxona 500 mg IM + azitromicina 1 g VO dose única'],['Úlcera genital','Benzatina 2,4 milhões UI + azitromicina 1 g; + aciclovir se herpes'],['Corrimento vaginal','Vaginose e tricomoníase: metronidazol; candidíase: fluconazol ou tópico'],['DIP leve/moderada','Ceftriaxona 500 mg IM + doxiciclina + metronidazol 14 dias']]},
 {h:'Em toda consulta de IST',li:['Testes rápidos: HIV, sífilis, hepatites B e C','Avaliar PEP (exposição < 72 h) e indicar PrEP','Vacinar hepatite B e HPV conforme idade','Tratar e convocar parcerias (60 dias); preservativo','Notificação: sífilis (adquirida, gestante, congênita), HIV, hepatites, corrimento uretral (algumas UFs)']},
 {h:'DIP: internar se',li:['Gestante; abscesso tubo-ovariano','Não melhora em 72 h ou intolerância VO','Quadro grave (náuseas, vômitos, febre alta)','Abdome agudo cirúrgico não afastado','Esquema hospitalar: ceftriaxona 1 g EV/dia + doxiciclina + metronidazol, ou clindamicina + gentamicina']}]}
});

/* ---------- Escore ---------- */
Object.assign(SC,{
mascc:{g:'inf',t:'MASCC (neutropenia febril)',code:'Klastersky 2000',kind:'ck',ck:[
 ['Carga de sintomas: nenhum ou leve (5) — marque só uma das duas',5],['Carga de sintomas: moderada (3)',3],['Sem hipotensão (PAS > 90 mmHg)',5],['Sem DPOC ativa',4],['Tumor sólido ou neoplasia hematológica sem infecção fúngica prévia',4],['Sem desidratação com necessidade de fluido EV',3],['Ambulatorial no início da febre',3],['Idade < 60 anos',2]],
 lv:t=>t>=21?['ok',`MASCC ${t}: baixo risco (≥ 21)`,'Candidato a tratamento oral/ambulatorial se demais critérios permitirem.']:['bad',`MASCC ${t}: alto risco (< 21)`,'Internação e antibiótico EV.'],unit:' pontos',note:'Máximo 26 pontos.'}
});
