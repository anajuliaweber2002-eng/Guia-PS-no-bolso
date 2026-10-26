/* Pediatria (out/2026): febre sem sinais localizatórios, desidratação/TRO, crise de asma, convulsão febril, CAD pediátrica,
   sepse neonatal, corpo estranho; PECARN. */

Object.assign(AN,{
an_fsf:{g:'crianca',t:'Febre sem sinais localizatórios (criança)',code:'R50.9',rel:[['cd_fsf','Conduta febre sem foco'],['rx_fsf','Prescrição']],body:`IDENTIFICAÇÃO: [nome], [ ] dias / meses de vida, [sexo], peso [ ] kg. Acompanhante/informante: [ ].

QP: "Febre"

HDA: Febre há [ ] h, máxima de [ ] °C (aferida [axilar/retal]), [ ] picos/dia, resposta ao antitérmico [ ]. Estado geral entre os picos: [ativo / hipoativo / irritado].
Aceitação alimentar e de líquidos: [ ]. Diurese: [ ] fraldas/dia. Vômitos, diarreia, tosse, coriza, exantema, choro à micção, urina com odor forte: [ ].
Contatos doentes: [ ]. Vacinas em dia (incluir pneumocócica e Hib, nº de doses): [ ]. Uso de antibiótico nos últimos 7 dias: [ ].
Neonato: idade gestacional [ ] sem, intercorrências no parto, bolsa rota [ ] h, febre materna, GBS materno [ ], herpes materno [ ].

ANTECEDENTES: [prematuridade, internações, ITU prévia, malformação urinária, doença crônica, imunodeficiência].

EXAME FÍSICO
Peso [ ] kg | T [ ] °C | FC [ ] bpm | FR [ ] irpm | SpO2 [ ]% | TEC [ ] s
Estado geral: [bom / regular / toxemiado (letargia, má perfusão, cianose, hipo/hiperventilação)]. Choro [forte / fraco], [consolável / inconsolável].
Fontanela: [normotensa / abaulada]. Oroscopia e otoscopia: [ ]. Pele: [sem exantema / petéquias __].
AR: [ ]. ACV: [ ]. ABD: [ ]. Rigidez de nuca / irritabilidade à manipulação: [ ].

HIPÓTESES DIAGNÓSTICAS
1. Febre sem sinais localizatórios em criança de [ ] [dias/meses]
2. [Risco de infecção bacteriana grave: alto / baixo]

CONDUTA
- [EAS + urocultura por sondagem/punção suprapúbica]
- [Hemograma, PCR, procalcitonina, hemocultura]
- [LCR]
- [Antibiótico: __]
- [Alta com reavaliação em 24 h / internação]
Responsável orientado sobre sinais de alarme, ciente e de acordo.`},

an_desid:{g:'crianca',t:'Diarreia e desidratação (criança)',code:'A09 · E86',rel:[['cd_desid','Conduta desidratação'],['rx_desid','Prescrição']],body:`IDENTIFICAÇÃO: [nome], [ ] anos e [ ] meses, [sexo], peso atual [ ] kg (peso anterior [ ] kg em [ ]). Acompanhante: [ ].

QP: "Diarreia e vômitos"

HDA: Diarreia há [ ] dias, [ ] episódios/dia, [líquida / pastosa], [com / sem] sangue ou muco. Vômitos: [ ] episódios/dia. Febre: [ ]. Dor abdominal: [ ].
Aceitação de líquidos e alimentos: [ ]. Diurese: [ ] (última micção há __ h). Sede: [ ]. Uso de SRO em casa: [ ].
Contatos com diarreia: [ ]. Água/alimento suspeito: [ ]. Viagem: [ ]. Antibiótico recente: [ ].

EXAME FÍSICO
Peso [ ] kg | T [ ] °C | FC [ ] bpm | FR [ ] irpm | TEC [ ] s | Glicemia capilar [ ]
Avaliação do estado de hidratação (MS):
- Estado geral: [bem, alerta / irritado, intranquilo / comatoso, hipotônico]
- Olhos: [normais / fundos / muito fundos]
- Lágrimas: [presentes / ausentes]
- Boca e língua: [úmidas / secas / muito secas]
- Sede: [bebe normal / sedento, bebe rápido / bebe mal ou não consegue]
- Sinal da prega: [desaparece rápido / lentamente / muito lentamente > 2 s]
- Pulso: [cheio / rápido, fraco / muito fraco ou ausente]
- Enchimento capilar: [< 3 s / 3–5 s / > 5 s]
ABD: [ ].

HIPÓTESES DIAGNÓSTICAS
1. Doença diarreica aguda [sem desidratação / com desidratação / desidratação grave]
2. [Disenteria / distúrbio eletrolítico / hipoglicemia]

CONDUTA
- [Plano A / B / C]
- [Ondansetrona se vômitos]
- [Zinco por 10–14 dias]
- [Eletrólitos, gasometria, glicemia, função renal se plano C]
Responsável orientado sobre sinais de alarme, ciente e de acordo.`}
});

Object.assign(RX,{
rx_fsf:{tipo:'h',g:'crianca',t:'Febre sem foco e sepse neonatal',rec:RH,rel:[['cd_fsf','Febre sem foco'],['cd_sepneo','Sepse neonatal']],items:[
 {t:'Neonato (≤ 28 dias) febril',rx:`1. Internação; hemograma, PCR, procalcitonina, hemocultura, EAS + urocultura (sondagem), LCR (celularidade, bioquímica, cultura)
2. Ampicilina 50 mg/kg/dose EV (100 mg/kg/dose se meningite)
   ≤ 7 dias de vida: de 8/8 h; > 7 dias: de 6/6 h
3. + Gentamicina 4 mg/kg/dose EV 1x/dia (≥ 35 semanas)
   ou Cefotaxima 50 mg/kg/dose EV de 8/8 h (6/6 h se meningite) se suspeita de meningite
4. Aciclovir 20 mg/kg/dose EV de 8/8 h se: vesículas, convulsão, LCR com pleocitose sem bactérias, TGO/TGP elevadas, herpes materno
5. Glicemia capilar; manter aquecido; aleitamento ou SG 10% conforme estado`,n:'Evitar ceftriaxona no neonato (desloca bilirrubina; precipita com cálcio EV). Doses para termo; prematuro: ajustar pela idade gestacional.'},
 {t:'Lactente 29–60 dias com marcadores alterados',rx:`1. Hemocultura, EAS + urocultura (sondagem), considerar LCR
2. Ceftriaxona 50 mg/kg EV/IM 1x/dia (100 mg/kg/dia se meningite, máx. 4 g)
3. Paracetamol 10–15 mg/kg/dose VO de 6/6 h se febre
4. Reavaliação em 24–36 h com culturas`,n:'Marcadores alterados (AAP 2021): procalcitonina > 0,5 ng/mL, PCR > 2 mg/dL, neutrófilos > 4.000/mm³, T > 38,5 °C. EAS alterado e marcadores normais: tratar como ITU (cefalexina/cefuroxima VO ou ceftriaxona).'}]},

rx_desid:{tipo:'h',g:'crianca',t:'Desidratação (planos A, B e C)',rec:RH,rel:[['cd_desid','Conduta desidratação']],items:[
 {t:'Plano B (com desidratação): TRO na unidade',rx:`1. Soro de reidratação oral (SRO) 50–100 mL/kg em 4–6 h, em pequenos volumes frequentes (colher/copinho)
   (ex.: 10 kg: 500–1.000 mL em 4–6 h)
2. Se vômitos: Ondansetrona 0,15 mg/kg VO (máx. 4 mg; 8–15 kg: 2 mg; 15–30 kg: 4 mg), dose única, > 6 meses
3. Manter aleitamento materno
4. Reavaliar a cada 1 h; quando hidratado → plano A e alta
5. Sem ganho de peso após 2 h ou vômitos persistentes: gastróclise 20–30 mL/kg/h por SNG`,n:'Falha do plano B ou desidratação grave → plano C.'},
 {t:'Plano C (desidratação grave): hidratação EV (MS 2023)',rx:`FASE RÁPIDA (expansão)
< 5 anos: SF 0,9% 20 mL/kg EV em 30 min; repetir até hidratar (reavaliar após cada etapa)
≥ 5 anos: SF 0,9% 30 mL/kg em 30 min + Ringer lactato 70 mL/kg em 2 h 30 min
RN e cardiopatas: 10 mL/kg por etapa

FASE DE MANUTENÇÃO + REPOSIÇÃO (após hidratada)
Manutenção (Holliday-Segar: até 10 kg 100 mL/kg; 10–20 kg 1.000 + 50 mL/kg acima de 10; > 20 kg 1.500 + 20 mL/kg acima de 20):
   SG 5% + SF 0,9% na proporção 4:1 + KCl 10% 2 mL para cada 100 mL
Reposição de perdas: SG 5% + SF 0,9% 1:1, 50 mL/kg/dia (aumentar se perdas maiores)
Iniciar SRO assim que possível`,n:'Glicemia capilar e eletrólitos na admissão. Só adicionar K após diurese. Hipernatremia (Na > 150): correção lenta (queda ≤ 10–12 mEq/L em 24 h).'},
 {t:'Plano A (alta): receita',rx:`USO ORAL
1. Sais para reidratação oral ———— 10 envelopes
   Diluir 1 envelope em 1 L de água filtrada ou fervida. Oferecer após cada evacuação:
   < 1 ano: 50–100 mL; 1–10 anos: 100–200 mL; > 10 anos: à vontade
2. Sulfato de zinco 4 mg/mL ———— 1 frasco
   < 6 meses: 2,5 mL (10 mg) 1 vez ao dia; ≥ 6 meses: 5 mL (20 mg) 1 vez ao dia, por 10 a 14 dias

ORIENTAÇÕES
- Manter a alimentação habitual e o aleitamento materno
- Retornar se: piora da diarreia, vômitos repetidos, muita sede, recusa de líquidos, sangue nas fezes, febre alta, sonolência, não urina há mais de 6 h`,n:'Antibiótico só se disenteria com comprometimento do estado geral (azitromicina 10 mg/kg/dia por 3 dias ou ceftriaxona), cólera ou giardíase/amebíase confirmadas.'}]},

rx_asmaped:{tipo:'h',g:'crianca',t:'Crise de asma na criança',rec:RH,rel:[['cd_asmaped','Conduta asma na criança'],['cd_asma','Asma no adulto']],items:[
 {t:'Crise leve a moderada',rx:`1. O2 se SpO2 < 94% (meta 94–98%)
2. Salbutamol 100 mcg/jato aerossol com espaçador (e máscara se < 4 anos)
   < 20 kg: 4–6 jatos; ≥ 20 kg: 6–10 jatos, a cada 20 min na 1ª hora (3 ciclos)
   (nebulização se grave: salbutamol 2,5 mg (< 20 kg) a 5 mg (≥ 20 kg) com O2)
3. Prednisolona 3 mg/mL — 1–2 mg/kg VO (máx. 40 mg) na 1ª hora; manter 1x/dia por 3–5 dias
   (vômitos: Metilprednisolona 1–2 mg/kg EV ou Dexametasona 0,3–0,6 mg/kg VO/IM, máx. 16 mg)
4. Reavaliar após cada ciclo (FR, esforço, ausculta, SpO2)`,n:'Alta se: SpO2 ≥ 94% em ar ambiente, sem esforço, estável 1 h após o último broncodilatador, com espaçador e técnica checada, corticoide oral e plano escrito.'},
 {t:'Crise grave',rx:`1. O2 por máscara para SpO2 ≥ 94%; monitorização
2. Salbutamol nebulizado 2,5–5 mg + Brometo de ipratrópio 250 mcg (20 gotas de 0,25 mg/mL; ≥ 6 anos 500 mcg) a cada 20 min por 3 doses
   ou spray: salbutamol 10 jatos + ipratrópio 20 mcg 4–8 jatos
3. Metilprednisolona 1–2 mg/kg EV (máx. 60 mg) ou Hidrocortisona 4–5 mg/kg EV
4. Sulfato de magnésio 50% — 25–50 mg/kg EV (máx. 2 g) diluído em SF 0,9% em 20 min
   (ex.: 20 kg: 1 g = 2 mL de MgSO4 50% em 50 mL de SF)
5. Sem resposta: UTI; salbutamol contínuo; considerar terbutalina EV, VNI; IOT por profissional experiente (cetamina)`,n:'Sinais de gravidade: não consegue falar/mamar, agitação ou sonolência, cianose, SpO2 < 90%, tórax silencioso, uso intenso de musculatura acessória.'}]},

rx_convped:{tipo:'h',g:'crianca',t:'Crise convulsiva na criança',rec:RH,rel:[['cd_convfeb','Convulsão febril'],['cd_conv','Estado de mal (adulto)']],items:[
 {t:'Crise > 5 min (inclui convulsão febril prolongada)',rx:`0–5 min: ABC, O2, decúbito lateral, glicemia capilar (se < 60: SG 10% 2–5 mL/kg EV)
5 min — benzodiazepínico (pode repetir 1 vez em 5–10 min):
   Sem acesso: Midazolam 0,2 mg/kg IM, intranasal ou bucal (máx. 10 mg)
              ou Diazepam 0,5 mg/kg retal (máx. 10–20 mg)
   Com acesso: Diazepam 0,3 mg/kg EV (máx. 10 mg) ou Midazolam 0,15 mg/kg EV
20 min — 2ª linha (se persiste após 2 doses):
   Levetiracetam 60 mg/kg EV em 10 min (máx. 4.500 mg)
   ou Fenitoína 20 mg/kg EV em SF 0,9% a 1 mg/kg/min (máx. 50 mg/min; máx. 1.500 mg)
   ou Fenobarbital 20 mg/kg EV em 20 min
40 min — estado de mal refratário: UTI, IOT, Midazolam 0,2 mg/kg + 0,1–0,4 mg/kg/h`,n:'Convulsão febril não precisa de anticonvulsivante contínuo. Antitérmico não previne recorrência.'}]},

rx_cadped:{tipo:'h',g:'crianca',t:'CAD na criança',rec:RH,rel:[['cd_cadped','Conduta CAD pediátrica']],items:[
 {t:'Cetoacidose diabética pediátrica (ISPAD 2022)',rx:`1. Monitorização; dieta zero; 2 acessos; pesar
2. Expansão: SF 0,9% ou Ringer lactato 10–20 mL/kg EV em 20–30 min (repetir só se choque)
3. Reposição: déficit (leve 5%, moderada 7%, grave 10% do peso) + manutenção, em 24–48 h, com SF 0,9% ou RL
4. Insulina regular 0,05–0,1 UI/kg/h EV em BIC, iniciada 1 h após o início do volume, SEM bolus
   (diluição: 50 UI em 50 mL de SF 0,9% = 1 UI/mL)
5. Potássio: se K < 5,5 e com diurese, 40 mEq/L no soro (KCl 19,1% 16 mL/L ou KCl 10% 30 mL/L)
   K < 3,5: 60 mEq/L e adiar a insulina até K ≥ 3,5
6. Glicemia < 250–300 mg/dL: acrescentar glicose (SG 5–10%) mantendo a insulina; meta glicemia 150–250
7. Glicemia capilar de 1/1 h; Na, K, gasometria de 2/2 a 4/4 h; avaliação neurológica de 1/1 h
8. Bicarbonato NÃO (só se pH < 6,9 com instabilidade ou hipercalemia grave)`,n:'Edema cerebral (cefaleia, bradicardia, HAS, rebaixamento, vômitos, pupilas): Manitol 0,5–1 g/kg EV em 10–15 min ou NaCl 3% 2,5–5 mL/kg em 10–15 min; reduzir o volume; cabeceira 30°; UTI.'}]}
});

Object.assign(CD,{
cd_fsf:{g:'crianca',t:'Febre sem sinais localizatórios',src:'AAP 2021 (lactente febril 8–60 dias) · SBP 2022',k:'febre sem foco febre sem sinais localizatorios lactente neonato procalcitonina infeccao bacteriana grave itu meningite bacteremia oculta',rel:[['rx_fsf','Prescrição'],['an_fsf','Anamnese'],['cd_sepneo','Sepse neonatal'],['cd_menin','Meningite']],sec:[
 {h:'Toxemiado em qualquer idade',li:['Letargia, má perfusão, hipo ou hiperventilação, cianose: hemocultura, urocultura, LCR (se estável), antibiótico EV imediato, internação']},
 {h:'Bem-aparentado: por idade',rows:[['≤ 28 dias','Internar sempre. Hemograma, PCR, procalcitonina, hemocultura, EAS/urocultura, LCR. Ampicilina + gentamicina (ou cefotaxima); aciclovir se risco de herpes'],['29–60 dias','EAS/urocultura, hemocultura, procalcitonina, PCR, neutrófilos. Marcadores normais e EAS normal: alta com reavaliação em 24–36 h (ou observação). Marcadores alterados: considerar LCR e ceftriaxona'],['61–90 dias','Investigar ITU; hemograma/PCR se febre alta ou vacinação incompleta; reavaliar em 24 h'],['3–36 meses','Vacinação completa (pneumo + Hib): risco de bacteremia oculta < 1%. Pesquisar ITU (EAS + urocultura por sondagem) em menina < 2 anos e menino < 1 ano (ou não circuncidado). Hemograma/hemocultura se vacinação incompleta ou T ≥ 39 °C com mau estado']]},
 {h:'Sinais de alarme para os pais',li:['Sonolência, choro fraco ou inconsolável, gemência','Recusa alimentar, vômitos persistentes, menos fraldas molhadas','Manchas roxas na pele, dificuldade para respirar','Febre que persiste > 48–72 h']}]},

cd_desid:{g:'crianca',t:'Diarreia e desidratação na criança',src:'MS Manejo do paciente com diarreia 2023 · OMS · ESPGHAN 2014',k:'diarreia desidratacao criança soro de reidratacao oral sro tro plano a b c ondansetrona zinco gastroclise holliday',rel:[['rx_desid','Prescrição'],['an_desid','Anamnese'],['pedi','Doses pediátricas']],sec:[
 {h:'Classificação (MS)',rows:[['Sem desidratação → plano A','Bem, alerta; olhos normais; lágrimas presentes; boca úmida; bebe normal; prega desaparece rápido; pulso cheio; TEC < 3 s'],['Com desidratação (≥ 2 sinais) → plano B','Irritado; olhos fundos; lágrimas ausentes; boca seca; sedento; prega desaparece lentamente; pulso rápido e fraco; TEC 3–5 s'],['Desidratação grave (≥ 2 sinais, incluindo ≥ 1 *) → plano C','*Comatoso/hipotônico; olhos muito fundos; boca muito seca; *bebe mal ou não consegue; *prega muito lenta (> 2 s); *pulso muito fraco/ausente; *TEC > 5 s']]},
 {h:'Pontos práticos',li:['TRO é o tratamento de escolha mesmo com vômitos (pequenos volumes)','Ondansetrona dose única VO em > 6 meses com vômitos facilita a TRO','Zinco 10–14 dias reduz duração e recorrência','Não usar antidiarreicos (loperamida) nem antieméticos como metoclopramida/bromoprida em criança','Antibiótico só em disenteria com comprometimento sistêmico, cólera, imunossuprimidos','Glicemia capilar em toda criança desidratada grave ou letárgica']}]},

cd_asmaped:{g:'crianca',t:'Crise de asma na criança',src:'GINA 2024 · SBP · PRACTALL',k:'asma crianca crise asmatica salbutamol espacador ipratropio prednisolona sulfato de magnesio bronquiolite sibilancia',rel:[['rx_asmaped','Prescrição'],['cd_bronq','Bronquiolite'],['pedi','Doses pediátricas']],sec:[
 {h:'Gravidade',rows:[['Leve/moderada','Fala frases, prefere sentar, sem agitação, FR aumentada, SpO2 ≥ 92% (≥ 94% ideal), FC aumentada'],['Grave','Fala palavras, sentado inclinado para frente, agitado, musculatura acessória, SpO2 < 92%, FC muito alta (> 140 em 2–5 anos; > 120 em > 5 anos)'],['Risco de vida','Sonolência, confusão, tórax silencioso, cianose, bradicardia, exaustão']]},
 {h:'Tratamento',li:['Salbutamol spray com espaçador = nebulização (ou melhor), 3 ciclos na 1ª hora','Ipratrópio associado nas crises graves (1ª hora)','Corticoide sistêmico precoce (VO tão eficaz quanto EV)','Sulfato de magnésio EV nas crises graves sem resposta','O2 para SpO2 94–98%','Não usar: antibiótico de rotina, mucolítico, sedativo, aminofilina como 1ª linha']},
 {h:'Em < 2 anos com 1º episódio de sibilância',li:['Pensar em bronquiolite (não responde a broncodilatador, não usar corticoide)']}]},

cd_convfeb:{g:'crianca',t:'Convulsão febril',src:'AAP 2011 · SBP · NICE',k:'convulsao febril crise febril crianca simples complexa midazolam diazepam retal puncao lombar',rel:[['rx_convped','Prescrição'],['cd_menin','Meningite'],['cd_conv','Crise convulsiva']],sec:[
 {h:'Definição',li:['Crise com febre (≥ 38 °C) entre 6 meses e 5 anos, sem infecção do SNC, distúrbio metabólico ou crise afebril prévia','Simples: generalizada, < 15 min, não recorre em 24 h (maioria)','Complexa: focal, ≥ 15 min ou recorre em 24 h']},
 {h:'Investigação na simples',li:['Procurar o foco da febre (o mesmo de qualquer criança febril)','Não precisa de EEG, TC/RM nem exames de sangue de rotina','Punção lombar se: sinais meníngeos ou suspeita de meningite; considerar em 6–12 meses com Hib/pneumo incompletos ou desconhecidos; uso prévio de antibiótico (pode mascarar meningite)']},
 {h:'Complexa ou atípica',li:['Observação mais prolongada; considerar LCR, eletrólitos, glicemia, neuroimagem se déficit focal ou rebaixamento persistente','Encaminhar à neuropediatria']},
 {h:'Orientar a família',li:['Recorrência ≈ 30% (maior se 1ª crise < 1 ano, história familiar, febre baixa na crise)','Risco de epilepsia pouco maior que na população geral (simples)','Durante a crise: deitar de lado, não colocar nada na boca, cronometrar; procurar atendimento se > 5 min','Antitérmico dá conforto, mas não previne crise']}]},

cd_cadped:{g:'crianca',t:'CAD na criança',src:'ISPAD 2022 · SBD 2024',k:'cad cetoacidose diabetica crianca pediatrica edema cerebral insulina regular potassio manitol salina hipertonica',rel:[['rx_cadped','Prescrição'],['cd_cad','CAD no adulto']],sec:[
 {h:'Diagnóstico e gravidade',rows:[['Critérios','Glicemia > 200 mg/dL + pH < 7,3 ou HCO3 < 18 + cetonemia ≥ 3 mmol/L ou cetonúria moderada/grande'],['Leve','pH < 7,3 ou HCO3 < 18'],['Moderada','pH < 7,2 ou HCO3 < 10'],['Grave','pH < 7,1 ou HCO3 < 5']]},
 {h:'Princípios',li:['Volume inicial 10–20 mL/kg; repor o déficit em 24–48 h (não precisa ser muito lento: estudo PECARN FLUID não mostrou mais edema cerebral com reposição mais rápida)','Insulina EV contínua sem bolus, 1 h após iniciar volume','Potássio desde o início (se K < 5,5 e diurese)','Glicose no soro quando glicemia < 250–300','Bicarbonato não']},
 {h:'Edema cerebral (0,5–1%, principal causa de morte)',li:['Sinais: cefaleia, vômitos recorrentes, irritabilidade, rebaixamento, bradicardia, HAS, incontinência, alteração pupilar, apneia','Fatores: < 5 anos, 1º diagnóstico, acidose grave, ureia alta, PaCO2 baixa, Na que não sobe com a queda da glicose, bicarbonato','Tratar antes da imagem: manitol 0,5–1 g/kg ou salina 3% 2,5–5 mL/kg; reduzir volume; cabeceira 30°; UTI']}]},

cd_sepneo:{g:'crianca',t:'Sepse neonatal',src:'MS Atenção à saúde do RN 2014 · AAP 2018/2021 · SBP',k:'sepse neonatal recem nascido rn estreptococo do grupo b gbs listeria ampicilina gentamicina cefotaxima precoce tardia',rel:[['rx_fsf','Prescrição'],['cd_fsf','Febre sem foco']],sec:[
 {h:'Classificação',rows:[['Precoce (< 72 h)','Transmissão vertical: GBS, E. coli, Listeria. Fatores: bolsa rota > 18 h, febre materna/corioamnionite, GBS materno sem profilaxia, prematuridade'],['Tardia (> 72 h)','Hospitalar (estafilococos, gram-negativos, fungos) ou comunitária (GBS, E. coli, pneumococo, meningococo)']]},
 {h:'Sinais (inespecíficos)',li:['Instabilidade térmica (febre ou hipotermia), hipoatividade, sucção débil, recusa alimentar','Desconforto respiratório, apneia, cianose','Má perfusão, taquicardia, hipotensão, palidez/pele marmórea','Distensão abdominal, vômitos, icterícia precoce/prolongada','Hipo ou hiperglicemia, acidose']},
 {h:'Conduta',li:['Hemograma, PCR seriada, hemocultura, LCR (se estável), urocultura na tardia','Precoce ou tardia comunitária: ampicilina + gentamicina (cefotaxima se meningite)','Tardia hospitalar: conforme CCIH (oxacilina/vancomicina + amicacina/cefepima)','Suporte: termorregulação, glicemia, oxigênio, volume 10 mL/kg, drogas vasoativas','Suspender antibiótico em 36–48 h se culturas negativas e clínica/PCR normais']}]},

cd_ce:{g:'crianca',t:'Corpo estranho (aspiração, ingestão, nariz e ouvido)',src:'AHA PALS 2020 · ESGE/NASPGHAN 2021 · Poison Control bateria de botão',k:'corpo estranho engasgo aspiracao heimlich ingestao bateria de botao pilha ima moeda nariz ouvido broncoscopia',rel:[['cd_crupe','Crupe'],['rxt_pad','RX de tórax']],sec:[
 {h:'Engasgo (obstrução de via aérea)',rows:[['Tosse eficaz','Encorajar a tossir; não fazer manobras; observar'],['< 1 ano, tosse ineficaz e consciente','5 golpes nas costas (entre as escápulas, de bruços, cabeça mais baixa) + 5 compressões torácicas; repetir'],['≥ 1 ano e adulto, consciente','Compressões abdominais (Heimlich) até sair ou perder a consciência'],['Inconsciente','Iniciar RCP; antes de ventilar, olhar a boca e retirar objeto visível (sem varredura às cegas); laringoscopia + pinça de Magill']]},
 {h:'Aspiração (brônquio)',li:['Engasgo testemunhado seguido de tosse, sibilância unilateral, MV diminuído, pneumonia de repetição no mesmo lobo','RX de tórax inspiração/expiração (aprisionamento aéreo) ou decúbito lateral; a maioria dos objetos é radiotransparente','Suspeita forte = broncoscopia rígida mesmo com RX normal']},
 {h:'Ingestão',rows:[['Bateria de botão no esôfago','EMERGÊNCIA: retirada endoscópica em até 2 h (necrose em 2 h). Enquanto aguarda (≥ 1 ano, < 12 h): mel 10 mL VO a cada 10 min até 6 doses'],['Bateria no estômago','Assintomático: RX seriado; endoscopia se ≥ 20 mm em < 5 anos, sintomas ou não progride'],['Ímãs (≥ 2 ou ímã + metal)','Risco de perfuração: endoscopia/cirurgia'],['Moeda no esôfago','Endoscopia em até 24 h (imediata se sintomas)'],['Objetos pontiagudos','Esôfago: retirada urgente; abaixo: RX seriado/cirurgia se sintomas']]},
 {h:'Nariz e ouvido',li:['Nariz: "beijo da mãe" (oclui a narina livre e sopra a boca), pinça, sonda de Foley; pilha no nariz = retirada urgente','Ouvido: pinça ou gancho com visão direta, irrigação (exceto pilha, semente/vegetal ou perfuração timpânica), inseto vivo: óleo mineral antes','Encaminhar ao ORL se difícil, múltiplas tentativas ou paciente não colabora']}]}
});

/* PECARN: itens de alto risco valem 10 e de risco intermediário 1, para o resultado indicar a faixa. */
Object.assign(SC,{
pecarn2:{g:'crianca',t:'PECARN TCE (< 2 anos)',code:'Kuppermann 2009',kind:'ck',np:true,ck:[
 ['ALTO: Glasgow 14 ou alteração do estado mental (agitação, sonolência, resposta lenta, perguntas repetitivas)',10],['ALTO: fratura de crânio palpável',10],
 ['Hematoma de couro cabeludo occipital, parietal ou temporal',1],['Perda de consciência ≥ 5 s',1],['Mecanismo grave (ejeção, capotamento, morte de passageiro, atropelamento, ciclista sem capacete, queda > 0,9 m, impacto de alta energia)',1],['Não está agindo normalmente segundo os pais',1]],
 lv:t=>t>=10?['bad','Alto risco (≈ 4,4% de lesão clinicamente importante)','TC de crânio indicada.']:t>=1?['warn','Risco intermediário (≈ 0,9%)','Observação ou TC conforme experiência, número de achados, piora ou preferência dos pais; idade < 3 meses favorece TC.']:['ok','Muito baixo risco (< 0,02%)','TC não recomendada.'],unit:'',note:'Para TCE leve (Glasgow 14–15) até 24 h do trauma.'},
pecarn18:{g:'crianca',t:'PECARN TCE (2 a 18 anos)',code:'Kuppermann 2009',kind:'ck',np:true,ck:[
 ['ALTO: Glasgow 14 ou alteração do estado mental',10],['ALTO: sinais de fratura de base de crânio (Battle, guaxinim, hemotímpano, oto/rinoliquorreia)',10],
 ['Perda de consciência',1],['Vômitos',1],['Mecanismo grave (ejeção, capotamento, morte de passageiro, atropelamento, ciclista sem capacete, queda > 1,5 m, impacto de alta energia)',1],['Cefaleia intensa',1]],
 lv:t=>t>=10?['bad','Alto risco (≈ 4,3%)','TC de crânio indicada.']:t>=1?['warn','Risco intermediário (≈ 0,9%)','Observação ou TC conforme número de achados, piora, experiência e preferência da família.']:['ok','Muito baixo risco (< 0,05%)','TC não recomendada.'],unit:'',note:'Para TCE leve (Glasgow 14–15) até 24 h do trauma.'}
});
