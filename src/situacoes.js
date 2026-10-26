/* Situações do plantão (out/2026): violência sexual, acidente com material biológico (PEP), risco de suicídio, crise de ansiedade/pânico,
   crise de gota, hiperêmese gravídica, ITU na gestante. */

/* ---------- Anamneses ---------- */
Object.assign(AN,{
an_violsex:{g:'mulher',t:'Violência sexual',code:'T74.2 · Y05 · Z04.4',rel:[['cd_violsex','Conduta violência sexual'],['rx_violsex','Prescrição']],body:an('Relata violência sexual',
`Paciente [acompanhada por __ / sozinha], relata violência sexual ocorrida em [data e hora: __] (há [ ] h), em [local], por [agressor desconhecido / conhecido (relação: __)], [um / mais de um] agressor(es).
Tipo de contato referido: [penetração vaginal / anal / oral / com ejaculação / uso de preservativo / desconhecido (perda de consciência, uso de substância)].
Agressão física associada: [ ]. Ameaça com arma: [ ]. Uso de álcool/drogas antes: [ ] (possível "boa noite, Cinderela").
Após o ocorrido: [tomou banho, trocou de roupa, urinou, evacuou, fez ducha]. Registro de boletim de ocorrência: [sim / não / deseja / não deseja] (não é obrigatório para o atendimento).
DUM: [ ]. Método contraceptivo: [ ]. Gestação possível: [ ]. Vacinação hepatite B e HPV: [ ]. Status HIV e PrEP: [ ].
Sintomas: [dor, sangramento, corrimento]. Ideação suicida: [ ].`,
`ESTADO EMOCIONAL: [ ].
${EF_CV}
${EF_AR}
${EF_ABD}
Lesões corporais (descrever local, tipo, tamanho; fotografar com consentimento): [ ].
Exame genital/anal (com consentimento, preferencialmente por quem fará a coleta de vestígios): [ ].`,
`1. Violência sexual há [ ] h
2. [Lesões corporais __]`,
`- Acolhimento em local reservado; respeitar a decisão sobre cada etapa
- Testes rápidos: HIV, sífilis, hepatites B e C; beta-hCG
- [PEP para HIV (até 72 h): tenofovir/lamivudina + dolutegravir por 28 dias]
- [Profilaxia de ISTs; vacina e/ou imunoglobulina de hepatite B]
- [Contracepção de emergência: levonorgestrel 1,5 mg]
- [Coleta de vestígios / encaminhamento ao IML (com consentimento)]
- Notificação compulsória (SINAN) em 24 h; [criança/adolescente: Conselho Tutelar; idoso/PcD: órgão de proteção]
- Encaminhamento ao serviço de referência e apoio psicológico; retorno para seguimento sorológico`)},

an_suic:{g:'mental',t:'Risco de suicídio / tentativa',code:'R45.8 · X60–X84 · T14.9',rel:[['cd_suic','Conduta risco de suicídio'],['cssrs','C-SSRS triagem']],body:an('Tentou se matar / quer morrer',
`Paciente [trazido por __ / veio por conta própria] após [tentativa de suicídio por __ (método), há __ h / ideação suicida]. Circunstâncias: [planejada / impulsiva], [sozinho / com outras pessoas por perto], [deixou bilhete / despediu-se], [tentou evitar ser encontrado]. Arrependimento: [ ]. Expectativa de morrer com o método: [ ].
Ideação atual: [ausente / presente], frequência [ ], plano [ ], intenção [ ], acesso a meios (armas, medicamentos, pesticidas): [ ].
Tentativas prévias: [ ] (número, métodos, gravidade). Autolesão sem intenção suicida: [ ].
Sintomas: [humor deprimido, desesperança, anedonia, insônia, sentimento de ser um peso, agitação, sintomas psicóticos (vozes de comando), uso de álcool/drogas].
Fatores de risco: [transtorno mental __, perda recente, conflito, violência, dívida, doença crônica/dor, isolamento, LGBTfobia, história familiar de suicídio]. Fatores de proteção: [filhos, religião, rede de apoio, projeto de vida, vínculo com serviço].
Acompanhamento em CAPS/psiquiatria: [ ]. Medicações em uso: [ ].`,
`${EF_CV}
${EF_AR}
${EF_ABD}
${EF_NEU}
Lesões: [ ]. Sinais de intoxicação: [ ].
EXAME PSÍQUICO: aparência [ ], atitude [colaborativa / hostil], consciência [ ], orientação [ ], atenção [ ], humor [deprimido / ansioso / irritado], afeto [ ], pensamento [desesperança, ideias de culpa/ruína, delírios], sensopercepção [alucinações __], juízo crítico [ ], insight [ ].
C-SSRS (triagem): [ ].`,
`1. [Tentativa de suicídio por __ / ideação suicida] — risco [baixo / moderado / alto]
2. [Transtorno depressivo / bipolar / uso de substâncias / psicose / __]
3. [Intoxicação por __ / lesão por __]`,
`- [Tratamento clínico da tentativa (intoxicação/lesão)]
- Observação contínua; remover objetos e meios potencialmente lesivos; acompanhante
- Avaliação psiquiátrica [hoje / internação psiquiátrica]
- Notificação compulsória imediata (tentativa de suicídio)
- Plano de segurança com o paciente e a família; restrição de acesso a meios
- Encaminhamento a CAPS/UBS com data; CVV 188 (24 h)`)}
});

/* ---------- Prescrições ---------- */
Object.assign(RX,{
rx_violsex:{tipo:'h',g:'mulher',t:'Violência sexual (profilaxias)',rec:RH,rel:[['cd_violsex','Conduta violência sexual'],['rx_pep','PEP (material biológico)']],items:[
 {t:'Profilaxias em até 72 h (adulto e adolescente ≥ 35 kg)',rx:`1. PEP para HIV (até 72 h, idealmente nas primeiras 2 h), por 28 dias:
   Tenofovir 300 mg + Lamivudina 300 mg (comprimido coformulado) — 1 comprimido VO 1x/dia
   + Dolutegravir 50 mg — 1 comprimido VO 1x/dia
2. Contracepção de emergência (se risco de gestação, até 5 dias; quanto antes melhor):
   Levonorgestrel 1,5 mg — 1 comprimido VO dose única
3. Profilaxia de ISTs bacterianas (pode ser adiada se náuseas; não é obrigatória em todas as situações):
   Ceftriaxona 500 mg IM dose única (gonorreia)
   + Azitromicina 500 mg — 2 comprimidos (1 g) VO dose única (clamídia)
   + Penicilina G benzatina 2,4 milhões UI IM dose única (sífilis)
   + Metronidazol 400 mg — 5 comprimidos (2 g) VO dose única (tricomoníase; pode ser em outro dia)
4. Hepatite B (vítima não vacinada ou esquema incompleto): vacina dose 1 IM hoje (completar 0, 1 e 6 meses)
   + Imunoglobulina humana anti-hepatite B 0,06 mL/kg IM conforme PCDT (até 14 dias)
5. Ondansetrona 8 mg VO antes das medicações se náuseas
6. Profilaxia antitetânica se lesões`,n:'Não indicar PEP se exposição crônica e repetida pelo mesmo agressor (avaliar caso a caso), > 72 h ou vítima sabidamente HIV positiva. Criança: doses por peso (ver PCDT PEP). ClCr < 50: substituir tenofovir por zidovudina 300 mg 12/12 h.'}]},

rx_pep:{tipo:'h',g:'inf',t:'PEP após acidente com material biológico',rec:RH,rel:[['cd_matbio','Conduta material biológico'],['rx_violsex','Violência sexual']],items:[
 {t:'PEP para HIV (exposição de risco, até 72 h)',rx:`1. Cuidados locais: lavar a pele com água e sabão; mucosa com SF 0,9% em abundância; NÃO espremer nem usar substâncias cáusticas
2. Teste rápido para HIV do acidentado (e da fonte, com consentimento) antes de iniciar
3. Tenofovir 300 mg + Lamivudina 300 mg — 1 comprimido VO 1x/dia por 28 dias
   + Dolutegravir 50 mg — 1 comprimido VO 1x/dia por 28 dias
   (iniciar o quanto antes, idealmente em até 2 h; até 72 h)
4. Hepatite B: conforme situação vacinal do acidentado e HBsAg da fonte
   Não vacinado + fonte HBsAg positiva ou desconhecida de alto risco: Imunoglobulina anti-HBs 0,06 mL/kg IM + iniciar vacina
   Vacinado com anti-HBs ≥ 10 conhecido: nada
5. Fonte com teste rápido HIV negativo (sem janela imunológica suspeita): PEP não indicada ou suspender
6. Notificação (SINAN e CAT se trabalhador); seguimento com HIV, sífilis, hepatites B e C em 30 e 90 dias`,n:'Fonte HCV positiva: não há profilaxia; seguimento com HCV-RNA em 4–6 semanas e anti-HCV em 3 e 6 meses. Gestante: o mesmo esquema (dolutegravir liberado). Efeitos adversos comuns: náuseas, cefaleia, diarreia leves.'}]},

rx_ansied:{tipo:'h',g:'mental',t:'Crise de ansiedade / pânico',rec:RH,rel:[['cd_ansied','Conduta ansiedade e pânico']],items:[
 {t:'Crise de pânico no PS',rx:`1. Ambiente calmo; explicar que os sintomas são reais, não são perigosos e vão passar
2. Respiração lenta guiada (inspirar 4 s, segurar 4 s, expirar 6 s) por 5 min; técnica de ancoragem (5 coisas que vê, 4 que toca...)
3. ECG e glicemia capilar; exames conforme suspeita clínica
4. Se sintomas intensos persistentes após medidas não farmacológicas:
   Clonazepam 0,5 mg — 1 comprimido VO ou SL (0,25 mg no idoso)
   ou Diazepam 5 mg VO
   ou Alprazolam 0,5 mg VO
5. Reavaliar em 30–60 min`,n:'Evitar benzodiazepínico EV/IM de rotina. Não prescrever benzodiazepínico para uso contínuo na alta; se necessário, no máximo poucos dias até a consulta (receita B).'},
 {t:'Alta: início de tratamento',rx:`USO ORAL
1. Sertralina 50 mg ———— 30 comprimidos
   Tomar 1/2 comprimido (25 mg) pela manhã por 7 dias; depois 1 comprimido (50 mg) pela manhã
   (Receita de Controle Especial em 2 vias)

ORIENTAÇÕES
- O efeito começa em 2 a 4 semanas; no início pode aumentar a ansiedade e dar náusea leve
- Evitar cafeína, álcool e energéticos
- Consulta na UBS/CAPS em até 2 semanas; psicoterapia (TCC)
- Retornar se ideação suicida ou piora importante`,n:'Iniciar ISRS no PS só se houver seguimento garantido; caso contrário, apenas orientar e encaminhar.'}]},

rx_gota:{tipo:'h',g:'osteo',t:'Crise de gota',rec:RH,rel:[['cd_gota','Conduta gota']],items:[
 {t:'Crise aguda de gota (escolher 1 opção, ou associar em crise intensa)',rx:`Opção 1 — Colchicina 0,5 mg: 2 comprimidos (1 mg) + 1 comprimido (0,5 mg) 1 h depois (total 1,5 mg nas primeiras 12 h)
   Depois 0,5 mg de 12/12 h até a resolução (em geral 5–7 dias)
   (evitar se ClCr < 30 ou uso de claritromicina, ciclosporina, verapamil, diltiazem)
Opção 2 — Naproxeno 500 mg: 1 comprimido VO de 12/12 h por 5–7 dias (ou Indometacina 50 mg 8/8 h)
   + Omeprazol 20 mg em jejum
Opção 3 — Prednisona 20 mg: 2 comprimidos (40 mg) VO 1x/dia por 5 dias (sem desmame) ou 30–40 mg com desmame em 7–10 dias
   (ou Triancinolona/metilprednisolona intra-articular em monoartrite de grande articulação)
Gelo local 20 min, 3–4 vezes ao dia; repouso da articulação`,n:'Não suspender o alopurinol se já usa. Alopurinol pode ser iniciado durante a crise, em dose baixa (100 mg/dia, 50 mg se DRC), com profilaxia anti-inflamatória.'}]},

rx_hiperem:{tipo:'h',g:'mulher',t:'Hiperêmese gravídica',rec:RH,rel:[['cd_hiperem','Conduta hiperêmese'],['puqe','PUQE']],items:[
 {t:'Náuseas e vômitos graves na gestação',rx:`1. Dieta zero por 6–12 h; depois líquidos e dieta fracionada, seca, fria
2. Tiamina 100 mg EV/IM ANTES de qualquer glicose (manter 100 mg/dia se vômitos > 3 semanas)
3. SF 0,9% ou Ringer lactato 1.000 mL EV em 1–2 h; depois 125 mL/h (+ KCl conforme K)
   Evitar SG isolado no início (Wernicke, hiponatremia)
4. Antiemético (escalonar):
   Dimenidrinato 50 mg + piridoxina — 1 ampola (30 mg/mL) EV em 100 mL de SF de 6/6 h
   + Metoclopramida 10 mg EV de 8/8 h
   ou Ondansetrona 4–8 mg EV de 8/8 h (preferir após 10 semanas; ECG se QT longo)
5. Omeprazol 40 mg EV 1x/dia (pirose)
6. Refratária: Metilprednisolona 16 mg EV de 8/8 h por 3 dias, depois desmame (após 10 semanas)
7. Eletrólitos (K, Na, Mg), ureia, creatinina, TGO/TGP, TSH, EAS (cetonúria), USG obstétrico (gemelar, mola)`,n:'Na alta: doxilamina + piridoxina VO à noite (ou dimenidrinato/piridoxina VO 6/6 h) e metoclopramida se necessário.'}]},

rx_itugest:{tipo:'h',g:'mulher',t:'ITU na gestante',rec:RH,rel:[['cd_itugest','Conduta ITU na gestante'],['rx_pielo','Pielonefrite']],items:[
 {t:'Cistite / bacteriúria assintomática (alta)',rx:`USO ORAL (escolher 1, ajustar ao antibiograma)
1. Cefalexina 500 mg ———— 28 cápsulas
   Tomar 1 cápsula de 6/6 h por 7 dias
   ou Nitrofurantoína 100 mg ———— 28 cápsulas
   Tomar 1 cápsula de 6/6 h por 7 dias (evitar no 1º trimestre se houver alternativa e após 37 semanas)
   ou Amoxicilina 500 mg + clavulanato 125 mg ———— 21 comprimidos
   Tomar 1 comprimido de 8/8 h por 7 dias
   ou Fosfomicina trometamol 3 g ———— 1 envelope
   Dissolver em água e tomar em dose única à noite
2. Paracetamol 750 mg ———— 20 comprimidos
   Tomar 1 comprimido de 6/6 h se dor

ORIENTAÇÕES
- Urocultura de controle 7–10 dias após terminar o antibiótico
- Retornar se febre, dor lombar, contrações ou sangramento`,n:'Evitar: quinolonas, tetraciclinas; sulfametoxazol-trimetoprima no 1º trimestre e próximo ao parto.'},
 {t:'Pielonefrite na gestante (internação)',rx:`1. Internação; hidratação SF 0,9% conforme volemia
2. Ceftriaxona 1 g — 1 a 2 g EV 1x/dia até 48 h afebril; completar 10–14 dias com cefalexina 500 mg VO 6/6 h (conforme antibiograma)
3. Paracetamol 750 mg VO de 6/6 h se febre/dor (evitar AINE)
4. Urocultura e hemocultura antes do antibiótico; hemograma, creatinina
5. Vitalidade fetal; vigiar trabalho de parto prematuro e SDRA
6. Após o tratamento: profilaxia até o parto — Nitrofurantoína 100 mg ou Cefalexina 500 mg à noite`,n:'Sem melhora em 48–72 h: USG de rins (obstrução, abscesso) e rever antibiótico.'}]}
});

/* ---------- Condutas ---------- */
Object.assign(CD,{
cd_violsex:{g:'mulher',t:'Violência sexual: atendimento',src:'MS Norma técnica Atenção humanizada às pessoas em situação de violência sexual 2015 · PCDT PEP 2021/2024 · Lei 12.845/2013',k:'violencia sexual estupro abuso sexual pep profilaxia hiv contracepcao de emergencia levonorgestrel ist notificacao vestigios',rel:[['rx_violsex','Prescrição'],['an_violsex','Anamnese'],['cd_ist','ISTs'],['cd_matbio','Material biológico']],sec:[
 {h:'Princípios',li:['Atendimento obrigatório, integral e imediato em todo hospital do SUS (Lei 12.845/2013), sem exigir boletim de ocorrência','Acolher em local reservado; registrar o relato com as palavras da pessoa; consentimento para cada etapa','Prioridade: tratar lesões e risco de vida; depois profilaxias (o tempo importa)','Preservar vestígios quando possível (roupas em saco de papel); coleta conforme fluxo local/IML']},
 {h:'Profilaxias por tempo',rows:[['PEP HIV','Até 72 h (melhor em 2 h): TDF/3TC + DTG por 28 dias'],['Contracepção de emergência','Até 5 dias (levonorgestrel 1,5 mg; mais eficaz quanto antes); DIU de cobre até 5 dias'],['ISTs bacterianas','Ceftriaxona + azitromicina + benzatina + metronidazol (pode ser em outro momento)'],['Hepatite B','Vacina se não imune; imunoglobulina conforme PCDT, até 14 dias'],['Tétano','Se lesões']]},
 {h:'Rede e direitos',li:['Notificação compulsória em até 24 h (SINAN); criança e adolescente: comunicar Conselho Tutelar; idoso e pessoa com deficiência: órgãos de proteção','Gestação decorrente de estupro: direito ao aborto legal (sem necessidade de BO); orientar e encaminhar ao serviço de referência','Apoio psicológico; serviço de referência para seguimento','Seguimento sorológico (HIV, sífilis, hepatites) em 30 e 90 dias']}]},

cd_matbio:{g:'inf',t:'Acidente com material biológico',src:'MS PCDT Profilaxia pós-exposição (PEP) 2021/2024',k:'acidente material biologico perfurocortante agulha pep hiv profilaxia hepatite b trabalhador da saude imunoglobulina notificacao',rel:[['rx_pep','Prescrição'],['cd_violsex','Violência sexual']],sec:[
 {h:'Exposição de risco para HIV',li:['Material: sangue, fluido com sangue, sêmen, secreção vaginal, líquor, sinovial, pleural, pericárdico, peritoneal, amniótico','Tipo: percutânea, mucosa, pele não íntegra, mordedura com sangue','Sem risco: urina, fezes, saliva, vômito, suor, lágrima (sem sangue); pele íntegra']},
 {h:'Avaliação',li:['Tempo desde a exposição (PEP até 72 h)','Testar a fonte (teste rápido HIV, HBsAg, anti-HCV, sífilis) com consentimento: fonte HIV negativa = PEP não indicada','Fonte desconhecida ou que recusa: decidir pela gravidade e probabilidade','Testar o acidentado: HIV positivo = não fazer PEP, encaminhar para tratamento']},
 {h:'Hepatite B',rows:[['Vacinado com anti-HBs ≥ 10 documentado','Nada'],['Não vacinado / incompleto','Iniciar/completar vacina + IGHAHB 0,06 mL/kg se fonte HBsAg positiva ou desconhecida de alto risco'],['Vacinado sem resposta (anti-HBs < 10 após 2 esquemas)','IGHAHB 2 doses com 1 mês de intervalo'],['Vacinado com resposta desconhecida','Dosar anti-HBs; se < 10, conduzir como não respondedor/conforme PCDT']]},
 {h:'Seguimento',li:['Notificação (SINAN) e CAT para trabalhador','Exames em 30 e 90 dias (HIV, sífilis, HBV, HCV)','Preservativo e evitar doar sangue até o fim do seguimento','Adesão aos 28 dias; manejo de efeitos adversos']}]},

cd_suic:{g:'mental',t:'Risco de suicídio e tentativa',src:'ABP 2014 · OMS LIVE LIFE 2021 · C-SSRS · Lei 10.216/2001',k:'suicidio ideacao suicida tentativa de suicidio autolesao risco plano de seguranca cvv 188 internacao psiquiatrica involuntaria notificacao',rel:[['an_suic','Anamnese'],['cssrs','C-SSRS triagem'],['cd_agit','Agitação'],['cd_intox','Intoxicações']],sec:[
 {h:'Como perguntar',li:['Perguntar diretamente não aumenta o risco: "Você tem pensado em se matar?"','Explorar: frequência e intensidade das ideias, plano (como, quando, onde), intenção, acesso a meios, preparativos, tentativas prévias','Ouvir sem julgar; não minimizar; não prometer sigilo absoluto quando há risco']},
 {h:'Fatores de risco',li:['Tentativa prévia (o maior preditor)','Transtorno mental (depressão, bipolar, esquizofrenia, uso de álcool/drogas, borderline)','Desesperança, impulsividade, agitação, insônia grave','Perdas recentes, violência, isolamento, doença crônica/dor, desemprego','Sexo masculino, idoso, população LGBTQIA+, indígenas','Acesso a meios letais (armas, pesticidas, medicamentos)']},
 {h:'Estratificação e conduta',rows:[['Alto risco','Plano estruturado, intenção, tentativa grave/planejada, psicose, agitação, sem suporte → observação contínua, remover meios, psiquiatria, internação (involuntária se necessário, com comunicação ao MP em 72 h)'],['Moderado','Ideação com plano sem intenção imediata, fatores de risco → avaliação psiquiátrica no mesmo dia/CAPS, plano de segurança, família envolvida'],['Baixo','Ideação passiva, sem plano, com fatores de proteção → plano de segurança, encaminhamento rápido (UBS/CAPS), retorno marcado']]},
 {h:'Plano de segurança (com o paciente)',li:['Sinais de alerta pessoais','Estratégias para se acalmar sozinho','Pessoas e lugares que ajudam a distrair','Pessoas para pedir ajuda (nomes e telefones)','Serviços: CAPS, UBS, SAMU 192, CVV 188 (24 h, gratuito)','Tornar o ambiente seguro: entregar armas, medicamentos e pesticidas a outra pessoa']},
 {h:'Lembretes',li:['Tentativa de suicídio é notificação compulsória IMEDIATA (SINAN)','Tratar a intoxicação/lesão sem julgamento','Prescrever quantidades pequenas de medicamentos na alta']}]},

cd_ansied:{g:'mental',t:'Crise de ansiedade e pânico',src:'NICE CG113 2019 · ABP · APA',k:'ansiedade crise de panico ataque de panico hiperventilacao benzodiazepinico clonazepam sertralina tcc',rel:[['rx_ansied','Prescrição'],['cd_suic','Risco de suicídio']],sec:[
 {h:'Primeiro: excluir causas orgânicas',li:['SCA, arritmia (TPSV), TEP, asma/DPOC, pneumotórax','Hipoglicemia, tireotoxicose, feocromocitoma, hipocalcemia','Intoxicação (cafeína, cocaína, anfetamina) e abstinência (álcool, benzodiazepínico)','Exames dirigidos: ECG e glicemia em quase todos; demais conforme quadro','Atenção a 1º episódio após 40 anos, sintomas atípicos ou fatores de risco cardiovascular']},
 {h:'Ataque de pânico',li:['Início súbito, pico em ~10 min: palpitação, sudorese, tremor, falta de ar, sufocação, dor torácica, náusea, tontura, parestesias, despersonalização, medo de morrer ou enlouquecer','Hiperventilação: parestesias periorais e carpopedal (alcalose respiratória); não usar saco de papel (risco de hipóxia em doença orgânica não reconhecida)']},
 {h:'Manejo',li:['Validar, explicar o mecanismo (adrenalina), respiração lenta, ancoragem','Benzodiazepínico de ação curta só se sintomas intensos persistentes','Na alta: psicoeducação, evitar cafeína/álcool, TCC, encaminhamento','ISRS é o tratamento de manutenção (sertralina, escitalopram); benzodiazepínico contínuo não','Rastrear depressão, uso de substâncias e risco de suicídio']}]},

cd_gota:{g:'osteo',t:'Crise de gota',src:'ACR 2020 · EULAR 2016 · SBR',k:'gota crise de gota podagra acido urico colchicina alopurinol artrite monoartrite artrite septica',rel:[['rx_gota','Prescrição'],['efp_osteo','Exame osteoarticular']],sec:[
 {h:'Diagnóstico',li:['Monoartrite aguda, intensa, com pico em 24 h; 1ª MTF (podagra), tornozelo, joelho, punho','Hiperemia, calor, edema; pode ter febre baixa','Ácido úrico pode estar NORMAL na crise','Padrão-ouro: cristais de urato (agulha, birrefringência negativa) no líquido sinovial','Febre alta, imunossupressão, prótese, dúvida diagnóstica: PUNCIONAR para afastar artrite séptica (cultura, Gram, celularidade)']},
 {h:'Tratamento da crise',li:['Iniciar o mais cedo possível (< 24 h): colchicina em dose baixa, AINE ou corticoide (eficácia semelhante)','Escolha pela comorbidade: DRC/IC/sangramento → corticoide; diabetes descompensado → colchicina ou intra-articular','Gelo e repouso','Manter alopurinol se já usa']},
 {h:'Após a crise',li:['Alopurinol (meta ácido úrico < 6 mg/dL) se ≥ 2 crises/ano, tofos, DRC ≥ 3, cálculo, erosões','Profilaxia com colchicina 0,5 mg/dia por 3–6 meses ao iniciar alopurinol','Rever diuréticos tiazídicos/de alça; perder peso; reduzir álcool (cerveja), carnes vermelhas, frutos do mar, frutose']}]},

cd_hiperem:{g:'mulher',t:'Náuseas, vômitos e hiperêmese na gestação',src:'ACOG 2018 · RCOG 2016/2024 · FEBRASGO',k:'hiperemese gravidica vomitos na gestacao nausea gravidez tiamina ondansetrona metoclopramida dimenidrinato puqe wernicke',rel:[['rx_hiperem','Prescrição'],['puqe','PUQE'],['an_gest','Gestante no PS']],sec:[
 {h:'Definição',li:['Hiperêmese: vômitos persistentes com perda de peso > 5%, desidratação, cetose e distúrbio eletrolítico','Início antes de 10 semanas; se começa após 10–12 semanas, procurar outra causa (ITU, pielonefrite, hepatite, pancreatite, apendicite, cetoacidose, tireotoxicose)','Fatores: gemelar, mola, hiperêmese prévia']},
 {h:'Avaliação',li:['PUQE para gravidade','Peso, sinais vitais, hidratação','Eletrólitos (K, Na, Mg), ureia, creatinina, TGO/TGP, TSH/T4L (tireotoxicose gestacional transitória), EAS (cetonúria, ITU), USG obstétrico']},
 {h:'Tratamento',li:['Hidratação com SF 0,9%/Ringer + KCl; tiamina antes de glicose','Antieméticos escalonados: doxilamina/piridoxina → anti-histamínicos (dimenidrinato) → metoclopramida/ondansetrona → corticoide (refratária, após 10 semanas)','Profilaxia de TEV se internada e imobilizada','Internar: intolerância VO apesar de antiemético, distúrbio eletrolítico, perda de peso importante, comorbidade']}]},

cd_itugest:{g:'mulher',t:'ITU na gestante',src:'FEBRASGO 2021 · MS Pré-natal · IDSA 2019',k:'itu gestante infeccao urinaria gravidez bacteriuria assintomatica cistite pielonefrite cefalexina nitrofurantoina fosfomicina',rel:[['rx_itugest','Prescrição'],['an_gest','Gestante no PS'],['cd_sepse','Sepse']],sec:[
 {h:'Pontos-chave',li:['Bacteriúria assintomática SEMPRE tratar na gestante (risco de pielonefrite e parto prematuro)','Cistite e bacteriúria: 7 dias (ou fosfomicina dose única); urocultura de controle após','Pielonefrite: internar, antibiótico EV, vigiar sepse, SDRA e trabalho de parto prematuro','Após pielonefrite ou ITU recorrente: profilaxia até o parto']},
 {h:'Antibióticos',rows:[['Podem','Cefalexina, cefuroxima, ceftriaxona, amoxicilina-clavulanato, fosfomicina, nitrofurantoína (evitar 1º tri se possível e ≥ 37 semanas)'],['Evitar','Quinolonas, tetraciclinas, aminoglicosídeos (exceto necessidade), SMX-TMP no 1º trimestre e no fim da gestação']]}]}
});

/* ---------- Escores ---------- */
/* C-SSRS e PUQE */
Object.assign(SC,{
cssrs:{g:'mental',t:'C-SSRS triagem (risco de suicídio)',code:'Columbia, versão de triagem',kind:'ck',np:true,ck:[
 ['1. No último mês, desejou estar morto(a) ou dormir e não acordar?',1],
 ['2. No último mês, teve pensamentos de se matar?',1],
 ['3. (se sim na 2) Pensou em como faria?',10],
 ['4. (se sim na 2) Teve alguma intenção de agir de acordo com esses pensamentos?',100],
 ['5. (se sim na 2) Começou a planejar ou decidiu os detalhes de como se matar? Pretende fazer isso?',100],
 ['6a. Fez, começou a fazer ou se preparou para fazer algo para acabar com a vida nos ÚLTIMOS 3 MESES?',100],
 ['6b. Fez, começou a fazer ou se preparou para fazer algo para acabar com a vida (alguma vez, há mais de 3 meses)?',10]],
 lv:t=>t>=100?['bad','Risco alto','Observação contínua, remover meios, avaliação psiquiátrica imediata/internação.']:t>=10?['warn','Risco moderado','Avaliação psiquiátrica no mesmo dia/CAPS, plano de segurança, envolver família.']:t>=1?['warn','Risco baixo','Plano de segurança e encaminhamento (UBS/CAPS) com retorno.']:['ok','Triagem negativa','Reavaliar se o quadro mudar.'],unit:''},
puqe:{g:'mulher',t:'PUQE (náuseas e vômitos na gestação)',code:'PUQE-24',kind:'q',q:[
 {q:'Nas últimas 24 h, por quanto tempo sentiu náusea?',o:[['Nada',1],['≤ 1 h',2],['2–3 h',3],['4–6 h',4],['> 6 h',5]]},
 {q:'Nas últimas 24 h, quantas vezes vomitou?',o:[['Nenhuma',1],['1–2',2],['3–4',3],['5–6',4],['≥ 7',5]]},
 {q:'Nas últimas 24 h, quantas vezes teve ânsia sem vomitar?',o:[['Nenhuma',1],['1–2',2],['3–4',3],['5–6',4],['≥ 7',5]]}],
 lv:t=>t<=6?['ok','Leve (≤ 6)','Medidas dietéticas e antiemético VO.']:t<=11?['warn','Moderada (7–11)','Antiemético VO regular; hidratação; reavaliar.']:['bad','Grave (≥ 12)','Hidratação EV, tiamina, antiemético EV; considerar internação.']}
});
