/* Insuficiência respiratória aguda (out/2026): anamnese, conduta, prescrição e índice ROX. */
Object.assign(AN,{
an_irpa:{g:'resp',t:'Insuficiência respiratória aguda',code:'J96.0 · J96.00 · J96.01',rel:[['cd_irpa','Conduta IRpA'],['rx_irpa','Prescrição'],['proc_o2','Oxigenoterapia'],['proc_vni','VNI'],['rox','Índice ROX']],body:an('Falta de ar',
`Paciente com dispneia de início [súbito / progressivo] há [ ] [horas / dias], [em repouso / aos mínimos esforços], com [tosse (seca / produtiva, escarro __) / febre / dor torácica (pleurítica / opressiva) / hemoptise / sibilância / ortopneia / edema de MMII / dor em panturrilha].
Fatores: [infecção / má adesão / excesso de sal-líquido / imobilização, cirurgia ou viagem recente / uso de opioide ou sedativo / aspiração / trauma / exposição a fumaça].
Antecedentes: [DPOC (O2 domiciliar __ L/min) / asma / IC (FE __) / doença neuromuscular / obesidade / apneia do sono / TEP prévio / neoplasia / imunossupressão]. Tabagismo [ ] maços-ano. IOT prévia: [ ].
Medicações: [ ]. Vacinas (influenza, pneumococo, COVID): [ ].`,
`Sinais vitais: PA [ ] mmHg, FC [ ] bpm, FR [ ] irpm, SpO2 [ ]% em [ar ambiente / __ L/min], Tax [ ] °C, glicemia [ ].
Esforço: [uso de musculatura acessória / tiragem / batimento de asa nasal / respiração paradoxal / fala entrecortada (frases / palavras)]. Consciência: [alerta / sonolento / agitado], Glasgow [ ]. Cianose: [ ].
${EF_AR}
${EF_CV}
Turgência jugular: [ ]. ${EF_MMII}
POCUS: [linhas A / linhas B bilaterais / consolidação / derrame / ausência de deslizamento]; VD [ ]; VCI [ ].
Gasometria (FiO2 __): pH [ ], PaO2 [ ], PaCO2 [ ], HCO3 [ ], lactato [ ]. P/F [ ]. Gradiente A-a [ ].`,
`1. Insuficiência respiratória aguda [tipo 1 (hipoxêmica) / tipo 2 (hipercápnica) / mista]
2. Provável causa: [pneumonia / EAP / DPOC exacerbado / asma / TEP / SDRA / pneumotórax / derrame / hipoventilação (sedativo, neuromuscular)]`,
`- Monitorização, cabeceira elevada, O2 para SpO2 [92–96% / 88–92% se risco de hipercapnia]
- [Cateter nasal / Venturi __% / máscara com reservatório / cateter de alto fluxo __ L/min, FiO2 __ / VNI IPAP __ EPAP __]
- Tratamento da causa: [ ]
- Reavaliar em 30–60 min (FR, esforço, SpO2, consciência, gasometria / ROX); critérios de IOT
- [Vaga de UTI / regulação]`)}
});

Object.assign(CD,{
cd_irpa:{g:'resp',t:'Insuficiência respiratória aguda',src:'ERS/ATS 2017 (VNI) · ERS 2022 (IRpA hipoxêmica) · ESICM 2023 (SDRA) · BTS 2017 (O2) · Lichtenstein (BLUE)',k:'insuficiencia respiratoria aguda irpa hipoxemia hipercapnia tipo 1 tipo 2 alto fluxo vni iot rox sdra berlim p/f',rel:[['rx_irpa','Prescrição'],['an_irpa','Anamnese'],['proc_o2','Oxigenoterapia'],['proc_vni','VNI'],['proc_pocus','POCUS'],['rox','Índice ROX'],['vm','Ventilação mecânica'],['iot','Intubação']],sec:[
 {h:'Definição e tipos',rows:[['Tipo 1 (hipoxêmica)','PaO2 < 60 mmHg (SpO2 < 90%) com PaCO2 normal ou baixa. Pneumonia, EAP, SDRA, TEP, atelectasia, derrame'],['Tipo 2 (hipercápnica)','PaCO2 > 45 mmHg com pH < 7,35. DPOC, asma grave, obesidade-hipoventilação, neuromuscular (GBS, miastenia), sedativos/opioides, rebaixamento'],['Mista','Ex.: DPOC com pneumonia, EAP grave com fadiga'],['Gradiente A-a','PAO2 = FiO2 × 713 − PaCO2/0,8; A-a = PAO2 − PaO2. Normal ≈ idade/4 + 4. Normal na hipoventilação pura; aumentado em doença pulmonar']]},
 {h:'Primeiros minutos',li:['ABC, monitorização, acesso, cabeceira elevada','O2 já: alvo SpO2 92–96% (88–92% se risco de hipercapnia)','Gasometria arterial, lactato, ECG, RX de tórax, POCUS pulmonar e cardíaco (BLUE)','Sinais de IOT imediata (abaixo) → não atrasar','Procurar causas reversíveis rápidas: pneumotórax hipertensivo (punção), broncoespasmo (salbutamol + ipratrópio), EAP (nitrato + VNI), opioide (naloxona), obstrução alta / anafilaxia (adrenalina), tamponamento']},
 {h:'Pistas da causa',rows:[['Linhas B bilaterais + VCI pletórica + B3/estertores','EAP cardiogênico'],['Febre, consolidação, linhas B focais','Pneumonia'],['Sibilância, tórax silencioso, hipercapnia','Asma / DPOC'],['Perfil A + TVP, VD dilatado, taquicardia sem outra causa','TEP'],['Ausência de deslizamento + ponto pulmonar','Pneumotórax'],['Fator de risco (sepse, pancreatite, aspiração, trauma) + infiltrado bilateral + P/F ≤ 300','SDRA'],['Hipercapnia com pulmão normal','Hipoventilação central ou neuromuscular (medir CVF / Pimáx; sedativo?)']]},
 {h:'Escalonamento do suporte',rows:[['SpO2 baixa, sem esforço importante','Cateter nasal 1–5 L/min'],['DPOC/hipercapnia','Venturi 24–28% e gasometria em 30–60 min; VNI se pH < 7,35 e PaCO2 > 45'],['Hipoxêmica com esforço (pneumonia, COVID, SDRA leve)','Cateter de alto fluxo 40–60 L/min, FiO2 para alvo; ROX em 2, 6 e 12 h'],['EAP cardiogênico','CPAP 8–10 ou BiPAP + nitrato'],['Imunossuprimido','Alto fluxo ou VNI precoce'],['Falha ou critérios de IOT','Intubação e ventilação protetora']]},
 {h:'Indicações de IOT',li:['PCR ou parada respiratória iminente, gasping','Rebaixamento (Glasgow ≤ 8) ou incapaz de proteger a via aérea (vômitos, secreção)','Instabilidade hemodinâmica grave, choque','Hipoxemia refratária (SpO2 < 88–90% com FiO2 alta / alto fluxo / VNI)','Fadiga: FR > 35, respiração paradoxal, uso intenso de musculatura','Falha da VNI em 1–2 h (pH e PaCO2 sem melhora) ou do alto fluxo (ROX < 3,85)','Não atrasar a intubação: a IOT tardia aumenta a mortalidade']},
 {h:'Intubação no paciente hipoxêmico',li:['Pré-oxigenar 3–5 min com VNI ou alto fluxo (mantido durante a laringoscopia: oxigenação apneica)','Cabeceira a 30° (rampa), drogas que preservam a PA (cetamina ou etomidato) + rocurônio','Volume e noradrenalina prontos: hipotensão pós-IOT é comum','Ventilação protetora após IOT: VC 6 mL/kg de peso predito, Pplatô < 30, driving < 15']},
 {h:'SDRA (Berlim / ESICM 2023)',li:['Até 1 semana do insulto, infiltrado bilateral não explicado por IC ou sobrecarga','P/F ≤ 300 com PEEP ≥ 5 (leve 200–300; moderada 100–200; grave ≤ 100). Em alto fluxo ≥ 30 L/min também vale (definição global 2023); SpO2/FiO2 ≤ 315 se sem gasometria','Moderada/grave: PEEP mais alta, prona ≥ 16 h/dia se P/F < 150, bloqueador neuromuscular se assincronia; balanço hídrico conservador']},
 {h:'Destino',li:['UTI: em VNI ou alto fluxo, IOT, hipercapnia com acidose, instabilidade','Enfermaria: O2 baixo fluxo estável, causa tratável, sem sinais de fadiga','Paciente com diretivas de não IOT: VNI como teto, conforto e cuidados paliativos']}]}
});

Object.assign(RX,{
rx_irpa:{tipo:'h',g:'resp',t:'Insuficiência respiratória aguda (suporte inicial)',rec:RH,rel:[['cd_irpa','Conduta'],['rx_sedacao','Sedação pós-IOT'],['rx_asma','Asma'],['rx_dpoc','DPOC'],['rx_eap','EAP'],['rx_pac','Pneumonia']],items:[
 {t:'Suporte inicial',rx:`1. Monitorização cardíaca, PNI e oximetria contínua; cabeceira elevada 30–45°
2. Oxigênio: [cateter nasal __ L/min / Venturi __% / máscara com reservatório 15 L/min] para SpO2 [92–96% / 88–92% se DPOC ou risco de hipercapnia]
3. Acesso venoso periférico; SF 0,9% para manter acesso
4. Gasometria arterial com lactato agora e em 1 h após ajuste do suporte
5. Comunicar: SpO2 abaixo do alvo, FR > 30, rebaixamento, PAS < 90`,n:'Tratar a causa junto (broncodilatador, nitrato e diurético, antibiótico, anticoagulação, drenagem). Ver as prescrições específicas.'},
 {t:'Cateter nasal de alto fluxo',rx:`1. Cateter nasal de alto fluxo aquecido e umidificado: fluxo 50–60 L/min, FiO2 [ ]% para SpO2 92–96%, temperatura 37 °C
2. Índice ROX = (SpO2/FiO2) ÷ FR em 2, 6 e 12 h
3. Desmame: reduzir FiO2 até ≤ 40%, depois fluxo em 5–10 L/min a cada etapa`,n:'ROX ≥ 4,88 prediz sucesso; < 3,85 → discutir IOT. Não usar se pneumotórax não drenado, epistaxe grave ou fratura de base de crânio.'},
 {t:'VNI',rx:`1. VNI com máscara oronasal: modo [BiPAP / CPAP]
   DPOC / hipercapnia: IPAP 10–12, EPAP 4–5 cmH2O; subir IPAP de 2 em 2 até VC 6–8 mL/kg e FR < 25
   EAP: CPAP 8–10 cmH2O ou IPAP 10–15, EPAP 5–8 cmH2O
   FiO2 para SpO2 alvo
2. Reavaliar à beira-leito em 15–30 min; gasometria em 1–2 h`,n:'Contraindicações: rebaixamento importante, vômitos/HDA, instabilidade grave, secreção abundante, trauma facial. Falhou em 1–2 h → intubar.'},
 {t:'Intubação (sequência rápida) no hipoxêmico',rx:`1. Pré-oxigenação: VNI ou alto fluxo com FiO2 100% por 3–5 min (manter o alto fluxo na laringoscopia)
2. Cetamina 1–2 mg/kg EV ou Etomidato 0,3 mg/kg EV
3. Rocurônio 1,2 mg/kg EV
4. Noradrenalina pronta / em curso se PAS < 100; SF 0,9% 500 mL disponível
5. Após IOT: VC 6 mL/kg de peso predito, PEEP 8–10, FiO2 100% e reduzir para SpO2 92–96%, FR 18–22; gasometria em 30 min`,n:'Ver Intubação e Sedação contínua (pós-IOT). Confirmar com capnografia.'}]}
});

NC.rox={g:'resp',t:'Índice ROX (alto fluxo)',code:'Roca 2019',f:[{k:'spo2',l:'SpO2 (%)'},{k:'fio2',l:'FiO2 (%)'},{k:'fr',l:'FR (irpm)'},{k:'h',l:'Horas de alto fluxo',o:[['2','2 h'],['6','6 h'],['12','12 h']]}],
 calc:v=>{if(!(v.spo2>0&&v.fio2>=21&&v.fr>0))return null;const f=v.fio2>1?v.fio2/100:v.fio2,r=(v.spo2/f)/v.fr,lim={'2':2.85,'6':3.47,'12':3.85}[v.h||'12'];
  const cls=r>=4.88?'ok':r<lim?'alert':'',txt=r>=4.88?'Baixo risco de falha do alto fluxo: manter e reavaliar.':r<lim?`Abaixo de ${String(lim).replace('.',',')} em ${v.h||12} h: alto risco de falha, discutir IOT.`:'Zona intermediária: reavaliar em 1–2 h.';
  return {cls,big:fmt(r,2),sub:[txt,'ROX = (SpO2/FiO2) ÷ FR. ≥ 4,88 em 2, 6 ou 12 h prediz sucesso.'],line:`ROX ${fmt(r,2)} (${v.h||12} h de alto fluxo).`}}};
