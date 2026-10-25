/* Prescrições do PS. tipo 'h' = prescrição hospitalar (sala de medicação / observação); tipo 'a' = receita de alta.
   Doses para adulto com função renal e hepática normais, salvo indicação. */
const RS='Receita simples',RA='Receita simples em 2 vias (antibiótico: retenção na farmácia), validade 10 dias',RCE='Receita de Controle Especial em 2 vias',RH='Prescrição hospitalar';

Object.assign(RX,{
/* ---------- Prescrições hospitalares ---------- */
rx_sint:{tipo:'h',g:'geral',t:'Analgesia, antieméticos e sintomáticos',rec:RH,items:[
 {t:'Analgesia simples',rx:`1. Dipirona 1 g (2 mL) + água destilada 8 mL — EV lento, agora e de 6/6 h se dor ou febre
   ou Paracetamol 750 mg — VO, de 6/6 h se dor ou febre`,n:'Dipirona: cuidado com hipotensão se infundida rápido. Alergia à dipirona: paracetamol. Paracetamol máximo 4 g/dia (2 g/dia em hepatopata ou etilista).'},
 {t:'AINE injetável',rx:`1. Cetoprofeno 100 mg + SF 0,9% 100 mL — EV em 20 min, agora e de 12/12 h se dor
   ou Tenoxicam 20 mg + água destilada 2 mL — EV lento, 1 vez ao dia`,n:'Evitar em DRC, IRA, desidratação, úlcera péptica, sangramento, anticoagulação, IC descompensada, gestação (3º trimestre) e asma induzida por AINE. Máximo 200 mg/dia de cetoprofeno.'},
 {t:'Opioide fraco',rx:`1. Tramadol 100 mg (2 mL) + SF 0,9% 100 mL — EV em 30 min, de 8/8 h se dor intensa`,n:'Associar antiemético (náusea é comum). Dose máxima 400 mg/dia (300 mg/dia no idoso > 75 anos). Diminui o limiar convulsivo e soma risco serotoninérgico com ISRS.'},
 {t:'Morfina (dor intensa)',rx:`1. Morfina 10 mg/mL — diluir 1 ampola em 9 mL de água destilada (1 mg/mL)
   Fazer 2 a 4 mL (2–4 mg) EV lento; repetir 2 mg a cada 5–10 min até controle da dor (máx. 0,1 mg/kg por vez)
2. Naloxona 0,4 mg/mL — 1 ampola disponível à beira-leito`,n:'Monitorizar FR, SpO2 e sedação. Idoso, DRC e hepatopata: começar com 1 mg. Cuidado em hipotensão. Para infarto de VD e hipotensão, evitar.'},
 {t:'Antieméticos',rx:`1. Ondansetrona 8 mg (4 mL) + SF 0,9% 50 mL — EV em 15 min, agora e de 8/8 h se náusea ou vômito
   ou Metoclopramida 10 mg (2 mL) + SF 0,9% 50 mL — EV em 15 min, de 8/8 h se náusea ou vômito
   ou Bromoprida 10 mg (2 mL) + SF 0,9% 50 mL — EV em 15 min, de 8/8 h se náusea ou vômito`,n:'Ondansetrona prolonga o QT. Metoclopramida e bromoprida: risco de distonia e acatisia (tratar com biperideno 5 mg IM ou difenidramina); evitar em Parkinson e obstrução intestinal. Gestante: metoclopramida ou dimenidrinato.'},
 {t:'Cólica abdominal',rx:`1. Escopolamina 20 mg (1 mL) + SF 0,9% 100 mL — EV em 20 min, agora e de 8/8 h se cólica
   ou Escopolamina 20 mg + dipirona 2,5 g (1 ampola de 5 mL) + SF 0,9% 100 mL — EV em 20 min`,n:'Evitar em glaucoma de ângulo fechado, retenção urinária e taquiarritmias. Não usar para mascarar abdome agudo: examinar antes.'},
 {t:'Proteção gástrica e dispepsia',rx:`1. Omeprazol 40 mg + diluente próprio — EV lento, 1 vez ao dia
2. Hidróxido de alumínio + magnésio — 10 mL VO, se queimação`,n:'IBP profilático só se houver indicação (jejum prolongado com risco, ventilação mecânica, coagulopatia, AINE + corticoide).'},
 {t:'Febre alta refratária',rx:`1. Dipirona 1 g EV de 6/6 h (fixo)
2. Paracetamol 750 mg VO de 6/6 h, intercalado com a dipirona
3. Compressas mornas`,n:'Investigar foco. Febre com instabilidade: abrir protocolo de sepse.'},
 {t:'Hidratação venosa de manutenção (adulto)',rx:`1. SF 0,9% 500 mL + SG 5% 500 mL + KCl 19,1% 10 mL — EV em 12 h (manter 2 fases/dia)
   ou SG 5% 1.000 mL + NaCl 20% 20 mL + KCl 19,1% 10 mL — EV de 12/12 h`,n:'Manutenção: cerca de 25–30 mL/kg/dia de água, 1 mEq/kg/dia de Na e K. Não usar KCl se oligúria ou K > 5. Rever eletrólitos diariamente.'}]},

rx_sca:{tipo:'h',g:'cv',t:'Síndrome coronariana aguda',rec:RH,rel:[['cd_sca','Conduta SCA'],['heart','HEART'],['ecg_ps','ECG']],items:[
 {t:'SCA sem supra de ST (dupla antiagregação + anticoagulação)',rx:`1. Dieta zero até a avaliação, depois hipossódica e branda
2. AAS 100 mg — 3 comprimidos (300 mg) VO mastigados agora; depois 100 mg VO 1 vez ao dia no almoço
3. Clopidogrel 75 mg — 4 comprimidos (300 mg) VO agora; depois 75 mg VO 1 vez ao dia
   ou Ticagrelor 90 mg — 2 comprimidos (180 mg) VO agora; depois 90 mg VO de 12/12 h
4. Enoxaparina 1 mg/kg — SC de 12/12 h (≥ 75 anos: 0,75 mg/kg de 12/12 h; ClCr < 30: 1 mg/kg 1 vez ao dia)
5. Atorvastatina 80 mg — VO 1 vez ao dia à noite
6. Mononitrato/dinitrato de isossorbida 5 mg — SL se dor, até 3 vezes com intervalo de 5 min (se PAS > 90 mmHg)
7. Metoprolol (succinato) 25 mg — VO 1 vez ao dia, se FC > 60, PAS > 100 e sem sinais de IC ou choque
8. Monitorização cardíaca contínua; ECG seriado; troponina seriada
9. O2 se SpO2 < 90%`,n:'Nitrato contraindicado se uso de sildenafila/vardenafila nas últimas 24 h (tadalafila 48 h), infarto de VD ou PAS < 90. Ticagrelor: não associar a anticoagulante oral. Se estratégia invasiva precoce, discutir o 2º antiagregante com a hemodinâmica.'},
 {t:'IAM com supra de ST: preparo para angioplastia',rx:`1. AAS 100 mg — 3 comprimidos (300 mg) VO mastigados agora
2. Clopidogrel 75 mg — 8 comprimidos (600 mg) VO agora
   ou Ticagrelor 90 mg — 2 comprimidos (180 mg) VO agora
3. Heparina não fracionada 5.000 UI/mL — 70 a 100 UI/kg EV em bolus na sala de hemodinâmica (conforme protocolo do serviço)
4. Atorvastatina 80 mg — VO agora
5. Morfina 2 mg EV se dor refratária a nitrato
6. Acionar hemodinâmica: porta-balão < 90 min (< 120 min se transferência)`,n:'Se angioplastia não for possível em até 120 min do diagnóstico: fibrinólise (próximo item), idealmente em < 30 min da chegada.'},
 {t:'IAM com supra de ST: fibrinólise com tenecteplase',rx:`1. AAS 100 mg — 3 comprimidos (300 mg) VO mastigados agora
2. Clopidogrel 75 mg — 4 comprimidos (300 mg) VO agora (≥ 75 anos: 75 mg, sem ataque)
3. Tenecteplase — EV em bolus único em 5–10 s, conforme o peso:
   < 60 kg: 30 mg | 60–69 kg: 35 mg | 70–79 kg: 40 mg | 80–89 kg: 45 mg | ≥ 90 kg: 50 mg
   (≥ 75 anos: metade da dose)
4. Enoxaparina 30 mg EV em bolus + 1 mg/kg SC de 12/12 h (máx. 100 mg nas 2 primeiras doses SC)
   ≥ 75 anos: sem bolus; 0,75 mg/kg SC de 12/12 h (máx. 75 mg nas 2 primeiras)
5. Atorvastatina 80 mg — VO agora
6. ECG 60–90 min após: critérios de reperfusão (queda do supra ≥ 50%, alívio da dor, arritmia de reperfusão)`,n:'Sem reperfusão em 60–90 min: angioplastia de resgate. Com sucesso: cateterismo em 2–24 h. Alternativa: alteplase 15 mg EV em bolus + 0,75 mg/kg em 30 min (máx. 50 mg) + 0,5 mg/kg em 60 min (máx. 35 mg). Contraindicações absolutas: AVCh prévio, AVCi < 3 meses, neoplasia do SNC, sangramento ativo, suspeita de dissecção de aorta, TCE ou cirurgia intracraniana < 2 meses.'}]},

rx_has:{tipo:'h',g:'cv',t:'Crise hipertensiva',rec:RH,rel:[['cd_has','Conduta crise hipertensiva'],['drogas','Drogas vasoativas']],items:[
 {t:'PA elevada sem lesão de órgão-alvo (urgência)',rx:`1. Repouso em local calmo por 30 min e reaferir a PA
2. Tratar dor e ansiedade se presentes
3. Tomar agora a medicação anti-hipertensiva de uso habitual, se não tomou
4. Se mantiver PA ≥ 180x110 mmHg: Captopril 25 mg VO (repetir em 1 h se necessário)
   ou Clonidina 0,100 mg VO (repetir em 1 h, máx. 0,6 mg)
5. Reaferir PA em 1 h. Meta: reduzir gradualmente em 24–48 h, não normalizar no PS`,n:'Não usar nifedipino de ação rápida SL (risco de isquemia). Alta com ajuste do esquema e retorno à UBS em até 7 dias.'},
 {t:'Emergência hipertensiva: nitroprussiato',rx:`1. Nitroprussiato de sódio 50 mg (2 mL) + SG 5% 248 mL (200 mcg/mL) — EV em bomba de infusão, frasco e equipo fotoprotegidos
   Iniciar 0,3 mcg/kg/min (70 kg: ~6 mL/h) e titular a cada 5 min até a meta; máx. 10 mcg/kg/min
2. PAM: reduzir no máximo 20–25% na 1ª hora, depois 160x100 mmHg em 2–6 h
3. PA invasiva ou não invasiva de 5/5 min durante a titulação`,n:'Usar com cautela em IRA/DRC e por mais de 48 h (toxicidade por cianeto/tiocianato). Exceções de meta: dissecção de aorta (PAS < 120 em 20 min), AVC (ver conduta), pré-eclâmpsia.'},
 {t:'Emergência hipertensiva: nitroglicerina (SCA ou EAP)',rx:`1. Nitroglicerina 50 mg (10 mL) + SG 5% 240 mL (200 mcg/mL) — EV em bomba de infusão
   Iniciar 5–10 mcg/min (1,5–3 mL/h) e aumentar 10 mcg/min a cada 3–5 min até alívio dos sintomas ou PA alvo; máx. 200 mcg/min`,n:'Contraindicada com inibidor da PDE-5 recente, infarto de VD, PAS < 90. Cefaleia é comum. Usar frasco de vidro ou bolsa sem PVC.'},
 {t:'Dissecção de aorta',rx:`1. Metoprolol 5 mg (5 mL) — EV lento em 2 min; repetir a cada 5 min até FC < 60 bpm (máx. 15 mg)
   ou Esmolol: 500 mcg/kg EV em 1 min, depois 50–300 mcg/kg/min
2. Após betabloqueio, se PAS > 120 mmHg: Nitroprussiato (ver item acima)
3. Morfina para dor
4. Angio-TC de aorta e avaliação da cirurgia vascular/cardíaca imediata`,n:'Meta: FC < 60 bpm e PAS 100–120 mmHg em 20 min. Betabloqueio antes do vasodilatador (evita taquicardia reflexa).'},
 {t:'Pré-eclâmpsia grave / eclâmpsia',rx:`1. Sulfato de magnésio — esquema de Zuspan:
   Ataque: MgSO4 50% 8 mL (4 g) + água destilada 12 mL — EV em 15–20 min
   Manutenção: MgSO4 50% 10 mL (5 g) + SG 5% 490 mL — EV a 100 mL/h (1 g/h) em bomba, por 24 h após o parto ou a última crise
2. Hidralazina 20 mg/mL — diluir 1 ampola em 19 mL de água destilada (1 mg/mL)
   Fazer 5 mL (5 mg) EV se PA ≥ 160x110; repetir 5 mg a cada 20 min (máx. 30 mg)
   ou Nifedipino 10 mg VO, repetir a cada 20–30 min (máx. 30 mg)
3. Gluconato de cálcio 10% 10 mL à beira-leito (antídoto do magnésio)
4. Sonda vesical de demora; diurese horária; reflexo patelar e FR de 1/1 h`,n:'Suspender o magnésio se reflexo patelar abolido, FR < 16 irpm ou diurese < 25 mL/h. Insuficiência renal: manter só ataque ou reduzir manutenção. Avaliação obstétrica imediata.'}]},

rx_eap:{tipo:'h',g:'cv',t:'Edema agudo de pulmão / IC descompensada',rec:RH,rel:[['cd_eap','Conduta EAP']],items:[
 {t:'EAP hipertensivo / IC perfil quente e úmido',rx:`1. Cabeceira elevada a 45°, pernas pendentes
2. O2 para SpO2 ≥ 90%; VNI (CPAP 5–10 cmH2O ou BiPAP) se desconforto respiratório
3. Dinitrato de isossorbida 5 mg — SL, repetir a cada 5 min se PAS > 110 mmHg (até 3 doses)
4. Furosemida 20 mg (2 mL) — 40 mg EV (2 ampolas) em bolus; se já usa furosemida, dose EV de 1 a 2,5 vezes a dose oral diária
5. Nitroglicerina EV em bomba se PAS > 110 mmHg (ver crise hipertensiva)
6. Sonda vesical ou controle de diurese; meta > 100–150 mL/h nas primeiras 6 h
7. Balanço hídrico, peso diário, restrição hídrica 1–1,5 L/dia
8. Profilaxia de TEV: enoxaparina 40 mg SC 1 vez ao dia`,n:'Diurese < 100 mL/h em 2 h: dobrar a dose de furosemida. Hipotensão ou má perfusão (frio e úmido): inotrópico (dobutamina) e UTI; não usar nitrato. Morfina não é rotina.'}]},

rx_fa:{tipo:'h',g:'cv',t:'Fibrilação atrial e taquiarritmias',rec:RH,rel:[['cd_fa','Conduta FA'],['cha2ds2','CHA2DS2-VASc'],['acls','PCR e arritmias']],items:[
 {t:'FA com resposta ventricular alta, estável (controle de FC)',rx:`1. Metoprolol 5 mg (5 mL) — EV lento em 2 min; repetir a cada 5 min se necessário (máx. 15 mg)
   ou Diltiazem 25 mg — 0,25 mg/kg EV em 2 min (70 kg: ~17,5 mg); repetir 0,35 mg/kg após 15 min se necessário
2. Depois: metoprolol (tartarato) 25–50 mg VO de 12/12 h
3. Anticoagulação conforme CHA2DS2-VASc: enoxaparina 1 mg/kg SC de 12/12 h até definir anticoagulante oral`,n:'Evitar betabloqueador EV e diltiazem em IC com FE reduzida descompensada, hipotensão ou pré-excitação (WPW). Nesses casos: amiodarona ou digoxina (IC). Meta inicial FC < 110 bpm.'},
 {t:'FA com IC ou FE reduzida',rx:`1. Amiodarona 150 mg (3 mL) + SG 5% 100 mL — EV em 10–20 min
   Depois amiodarona 900 mg (6 ampolas) + SG 5% 500 mL — EV a 1 mg/min por 6 h (33 mL/h), depois 0,5 mg/min por 18 h (17 mL/h)
   ou Deslanosídeo 0,4 mg EV lento (digitálico), repetir 0,2 mg após 2–4 h se necessário`,n:'Amiodarona pode reverter a FA: se FA > 48 h e sem anticoagulação, há risco de embolia. Diluir só em SG 5%. Flebite em acesso periférico: preferir veia calibrosa.'},
 {t:'Cardioversão química da FA < 48 h (estável)',rx:`1. Amiodarona 300 mg + SG 5% 250 mL — EV em 1 h, depois 900 mg em 24 h
   ou Propafenona 600 mg VO dose única (sem cardiopatia estrutural, após betabloqueador ou bloqueador de canal de cálcio)
2. Enoxaparina 1 mg/kg SC antes da cardioversão`,n:'FA > 48 h ou tempo indeterminado: anticoagular 3 semanas antes ou ecocardiograma transesofágico. Instável (hipotensão, dor torácica isquêmica, EAP, rebaixamento): cardioversão elétrica sincronizada.'},
 {t:'Taquicardia supraventricular paroxística',rx:`1. Manobra vagal modificada (Valsalva em semirreclinado, depois deitar com pernas elevadas)
2. Adenosina 6 mg (2 mL) — EV rápido em veia calibrosa seguido de flush de 20 mL de SF; se não reverter: 12 mg; pode repetir 12 mg
3. Se refratária: metoprolol 5 mg EV ou diltiazem 0,25 mg/kg EV`,n:'Avisar o paciente sobre a sensação de mal-estar transitório da adenosina. Evitar em asma grave. Instável: cardioversão sincronizada 50–100 J.'}]},

rx_tev:{tipo:'h',g:'cv',t:'TEP e TVP',rec:RH,rel:[['cd_tep','Conduta TEP'],['wells_tep','Wells TEP'],['wells_tvp','Wells TVP']],items:[
 {t:'Anticoagulação plena (enoxaparina)',rx:`1. Enoxaparina 1 mg/kg — SC de 12/12 h
   (ClCr < 30: 1 mg/kg 1 vez ao dia; obesidade grave: ajustar com anti-Xa se disponível)
2. Hemograma e plaquetas a cada 2–3 dias`,n:'Contraindicações: sangramento ativo, plaquetas < 50 mil, cirurgia/AVC hemorrágico recente. Instável ou candidato a trombólise: preferir heparina não fracionada.'},
 {t:'Heparina não fracionada em bomba',rx:`1. Heparina 5.000 UI/mL — 80 UI/kg EV em bolus
2. Heparina 25.000 UI (5 mL) + SF 0,9% 245 mL (100 UI/mL) — EV em bomba a 18 UI/kg/h
3. TTPa 6 h após o início e a cada 6 h após cada ajuste; meta TTPa 1,5–2,5 vezes o controle`,n:'Preferir em DRC grave, alto risco de sangramento, possibilidade de procedimento ou trombólise. Antídoto: protamina 1 mg para cada 100 UI de heparina das últimas 2–3 h.'},
 {t:'TEP de alto risco (com choque): trombólise',rx:`1. Alteplase 100 mg — EV em 2 h (ou 0,6 mg/kg em 15 min, máx. 50 mg, na PCR/peri-PCR)
2. Suspender heparina durante a infusão; reiniciar quando TTPa < 2 vezes o controle
3. Noradrenalina se hipotensão; evitar expansão volêmica excessiva (> 500 mL)`,n:'Avaliar contraindicações (sangramento, AVC, cirurgia recente). Discutir com UTI.'},
 {t:'TVP/TEP de baixo risco: anticoagulante oral',rx:`1. Rivaroxabana 15 mg — VO de 12/12 h com alimento por 21 dias; depois 20 mg VO 1 vez ao dia
   ou Apixabana 10 mg VO de 12/12 h por 7 dias; depois 5 mg VO de 12/12 h`,n:'Não usar em gestante, SAF, ClCr < 30 (rivaroxabana < 15), hepatopatia grave. Duração mínima 3 meses. Ver também receitas de alta.'}]},

rx_avc:{tipo:'h',g:'neuro',t:'AVC isquêmico agudo',rec:RH,rel:[['cd_avc','Conduta AVC'],['nihss','NIHSS']],items:[
 {t:'Trombólise com alteplase',rx:`1. Alteplase 0,9 mg/kg (máx. 90 mg)
   10% da dose EV em bolus em 1 min; restante EV em bomba em 60 min
   (ex.: 70 kg = 63 mg: 6,3 mg em bolus + 56,7 mg em 1 h)
2. Manter PA < 180x105 mmHg por 24 h (antes da trombólise: < 185x110)
3. Sinais vitais e escala neurológica: 15/15 min nas 2 primeiras horas, 30/30 min até 6 h, 1/1 h até 24 h
4. Jejum; não puncionar artéria nem passar SNG ou sonda vesical nas primeiras 24 h, se possível
5. Sem antiagregante ou anticoagulante por 24 h; TC de controle em 24 h`,n:'Janela: até 4,5 h do último momento visto bem. Piora neurológica, cefaleia intensa, vômitos ou hipertensão aguda: parar a infusão e fazer TC urgente. Angioedema orolingual pode ocorrer (sobretudo com IECA).'},
 {t:'Trombólise com tenecteplase',rx:`1. Tenecteplase 0,25 mg/kg (máx. 25 mg) — EV em bolus único em 5 s
   (ex.: 70 kg = 17,5 mg)
2. Mesmos cuidados de PA, monitorização e restrições da alteplase`,n:'Atenção: a dose do AVC (0,25 mg/kg, máx. 25 mg) é diferente da dose do IAM.'},
 {t:'Controle de PA antes e após trombólise',rx:`1. Metoprolol 5 mg EV lento, repetir a cada 10 min se PA > 185x110 (máx. 15 mg)
   ou Nitroprussiato 0,3–3 mcg/kg/min em bomba (ver crise hipertensiva)
2. Sem trombólise: tratar só se PA > 220x120 mmHg, reduzindo 15% nas primeiras 24 h`,n:'Evitar hipotensão. Tratar febre (> 37,5 °C) e manter glicemia 140–180 mg/dL.'},
 {t:'AVC isquêmico sem trombólise',rx:`1. AAS 100 mg — 3 comprimidos (300 mg) VO agora (após TC sem sangramento e teste de deglutição), depois 100 mg/dia
2. AVC menor (NIHSS ≤ 3) ou AIT de alto risco: AAS + clopidogrel 300 mg de ataque, depois 75 mg/dia por 21 dias
3. Atorvastatina 40–80 mg VO à noite
4. Cabeceira a 0–30°, avaliação fonoaudiológica antes de dieta oral
5. Profilaxia de TEV: enoxaparina 40 mg SC 1 vez ao dia após 24 h`,n:'Se FA: anticoagulação após 1–14 dias, conforme o tamanho do infarto.'}]},

rx_asma:{tipo:'h',g:'resp',t:'Crise asmática',rec:RH,rel:[['cd_asma','Conduta asma'],['rx_alta_resp','Receitas de alta respiratórias']],items:[
 {t:'Crise leve a moderada',rx:`1. Salbutamol spray 100 mcg/jato — 4 a 10 jatos com espaçador a cada 20 min na 1ª hora
   ou Nebulização: fenoterol 10 gotas + ipratrópio 40 gotas + SF 0,9% 3–5 mL com O2 a 6–8 L/min — a cada 20 min, 3 vezes
2. Prednisona 20 mg — 2 comprimidos (40 mg) VO agora
3. O2 para SpO2 93–95%
4. Reavaliar após 1 h (FR, uso de musculatura, fala, SpO2, PFE)`,n:'Ipratrópio somado ao beta-2 na 1ª hora em crises moderadas a graves. Spray com espaçador é tão eficaz quanto nebulização e dá menos taquicardia.'},
 {t:'Crise grave',rx:`1. O2 para SpO2 93–95%
2. Salbutamol spray 100 mcg/jato 10 jatos com espaçador + ipratrópio spray 20 mcg/jato 4–8 jatos a cada 20 min na 1ª hora
   ou Nebulização: fenoterol 10 gotas + ipratrópio 40 gotas + SF 0,9% 3 mL a cada 20 min
3. Metilprednisolona 125 mg — EV agora
   ou Hidrocortisona 200 mg — EV agora
4. Sulfato de magnésio 50% 4 mL (2 g) + SF 0,9% 100 mL — EV em 20 min
5. Gasometria arterial; RX de tórax
6. Monitorização contínua; avaliar UTI`,n:'Sinais de iminência de parada (sonolência, confusão, tórax silencioso, bradicardia, pCO2 normal ou alta): preparar IOT (cetamina é a indução preferida).'}]},

rx_dpoc:{tipo:'h',g:'resp',t:'DPOC exacerbado',rec:RH,rel:[['cd_dpoc','Conduta DPOC']],items:[
 {t:'Exacerbação de DPOC',rx:`1. O2 por cateter nasal 1–2 L/min, alvo SpO2 88–92%
2. Nebulização: fenoterol 10 gotas + ipratrópio 40 gotas + SF 0,9% 3–5 mL com ar comprimido — a cada 20 min, 3 vezes, depois de 4/4 h
   ou Salbutamol spray 4–8 jatos + ipratrópio spray 4–8 jatos com espaçador
3. Prednisona 40 mg VO 1 vez ao dia por 5 dias
   ou Metilprednisolona 40 mg EV 1 vez ao dia (se não tolera VO)
4. Antibiótico se escarro purulento ou VNI/IOT:
   Amoxicilina + clavulanato 875/125 mg VO de 12/12 h por 5–7 dias
   ou Ceftriaxona 1 g EV 1 vez ao dia (internado) ± azitromicina 500 mg/dia
5. Gasometria arterial
6. VNI (BiPAP) se pH < 7,35 e pCO2 > 45 mmHg`,n:'Não usar O2 em alto fluxo sem necessidade (risco de hipercapnia). Nebulizar com ar comprimido em retentores de CO2.'}]},

rx_anaf:{tipo:'h',g:'osteo',t:'Anafilaxia e alergia',rec:RH,rel:[['cd_anaf','Conduta anafilaxia']],items:[
 {t:'Anafilaxia',rx:`1. Adrenalina 1 mg/mL — 0,5 mL (0,5 mg) IM na face anterolateral da coxa, agora
   Repetir a cada 5–15 min se não melhorar (criança: 0,01 mg/kg, máx. 0,3–0,5 mg)
2. Decúbito dorsal com MMII elevados (gestante: decúbito lateral esquerdo; dispneia: sentado)
3. O2 6–10 L/min por máscara
4. SF 0,9% 1.000 mL EV rápido se hipotensão (criança: 20 mL/kg); repetir conforme resposta
5. Adjuvantes (não substituem a adrenalina):
   Prometazina 25 mg/mL — 2 mL (50 mg) IM ou difenidramina 50 mg EV lento
   Hidrocortisona 200 mg EV ou metilprednisolona 125 mg EV
6. Broncoespasmo persistente: salbutamol spray 4–8 jatos ou fenoterol nebulizado
7. Refratária (após 2 doses IM e volume): adrenalina 1 mg + SF 0,9% 100 mL (10 mcg/mL) EV em bomba a 0,1 mcg/kg/min, titulando
8. Em uso de betabloqueador e refratária: glucagon 1–5 mg EV em 5 min`,n:'Observação mínima de 6 h (12–24 h se grave, bifásica prévia, asma ou precisou de mais de 1 dose de adrenalina). Alta com receita de anti-histamínico e encaminhamento ao alergista.'},
 {t:'Urticária aguda e angioedema sem anafilaxia',rx:`1. Prometazina 25 mg/mL — 2 mL (50 mg) IM
   ou Dexclorfeniramina 2 mg VO
2. Hidrocortisona 100–200 mg EV ou dexametasona 4–10 mg EV/IM se extenso
3. Observar 1–2 h`,n:'Angioedema sem urticária em usuário de IECA: bradicinina, não responde a anti-histamínico/corticoide/adrenalina como na alergia. Suspender o IECA e vigiar a via aérea; considerar plasma fresco ou icatibanto se grave.'}]},

rx_colica:{tipo:'h',g:'renal',t:'Cólica renal',rec:RH,rel:[['an_colrenal','Anamnese'],['rx_alta_uro','Receita de alta']],items:[
 {t:'Cólica renal',rx:`1. Dipirona 1 g (2 mL) + água destilada 8 mL — EV lento agora
2. Cetoprofeno 100 mg + SF 0,9% 100 mL — EV em 20 min agora (se função renal normal)
3. Ondansetrona 8 mg EV se náusea
4. Se dor persistente após 30–60 min: Tramadol 100 mg + SF 0,9% 100 mL EV em 30 min
   ou Morfina 2–4 mg EV (ver analgesia)
5. Hidratação apenas para corrigir desidratação (sem hiper-hidratação)`,n:'AINE é o analgésico de 1ª linha. Evitar AINE em DRC, gestante e se TFG desconhecida em idoso. Escopolamina não tem benefício comprovado na cólica renal.'}]},

rx_cef:{tipo:'h',g:'neuro',t:'Cefaleia e enxaqueca',rec:RH,rel:[['cd_cef','Conduta cefaleia']],items:[
 {t:'Crise de enxaqueca no PS',rx:`1. Dipirona 1 g (2 mL) + água destilada 8 mL — EV lento
2. Metoclopramida 10 mg (2 mL) + SF 0,9% 100 mL — EV em 15 min
3. Dexametasona 10 mg — EV (reduz recorrência em 72 h)
4. Se sem melhora em 1 h: Cetoprofeno 100 mg + SF 0,9% 100 mL EV em 20 min
   ou Sumatriptano 6 mg SC (sem doença coronariana/cerebrovascular, HAS não controlada, gestação)
5. Refratária: Clorpromazina 0,1 mg/kg (máx. 25 mg) + SF 0,9% 100 mL — EV em 30 min, após 500 mL de SF 0,9%`,n:'Evitar opioide na enxaqueca (piora resposta e cronifica). Clorpromazina: risco de hipotensão postural, deixar o paciente deitado. Enxaqueca > 72 h (estado de mal): dexametasona + bloqueio do nervo occipital maior.'},
 {t:'Cefaleia tensional',rx:`1. Dipirona 1 g EV ou VO
   ou Ibuprofeno 600 mg VO / Cetoprofeno 100 mg EV`,n:'Sem sinais de alarme não precisa de exame de imagem.'}]},

rx_vert:{tipo:'h',g:'neuro',t:'Vertigem',rec:RH,rel:[['cd_vert','Conduta vertigem']],items:[
 {t:'Crise de vertigem (síndrome vestibular aguda ou VPPB)',rx:`1. Dimenidrinato 30 mg + piridoxina 50 mg (1 ampola de 10 mL) + SF 0,9% 100 mL — EV em 20 min, de 6/6 h se necessário
   ou Dimenidrinato 50 mg + piridoxina 50 mg (1 ampola de 1 mL) — IM
2. Ondansetrona 8 mg EV se náusea persistente
3. Se refratária: Diazepam 5 mg EV lento ou VO
4. Hidratação se vômitos`,n:'Sintomáticos vestibulares só por até 3 dias (atrasam a compensação). VPPB: manobra de Epley. HINTS sugestivo de AVC (impulso cefálico normal, nistagmo que muda de direção, skew deviation) ou déficit neurológico: imagem e protocolo de AVC.'}]},

rx_gea:{tipo:'h',g:'dig',t:'Gastroenterite e desidratação',rec:RH,rel:[['an_gea','Anamnese'],['rx_alta_gea','Receita de alta']],items:[
 {t:'Desidratação leve a moderada',rx:`1. Terapia de reidratação oral: SRO 50–100 mL/kg em 4 h, em pequenos volumes
2. Ondansetrona 8 mg EV ou 8 mg VO (comprimido orodispersível)
3. Escopolamina 20 mg + SF 0,9% 100 mL EV se cólica
4. Dipirona 1 g EV se dor ou febre
5. Teste de aceitação oral após medicação`,n:'Tentar hidratação oral primeiro. Sinais de alarme: sangue nas fezes com febre alta, idoso, imunossuprimido, desidratação grave, abdome agudo.'},
 {t:'Desidratação grave (adulto)',rx:`1. SF 0,9% ou Ringer lactato 20–30 mL/kg (1.000–2.000 mL) — EV rápido; reavaliar após cada 500 mL
2. Depois: manutenção e reposição de perdas (SF 0,9% 500 mL + SG 5% 500 mL de 8/8 h)
3. Ondansetrona 8 mg EV de 8/8 h
4. Função renal, eletrólitos, gasometria venosa
5. Repor K conforme exame (não repor se oligúria)`,n:'Cuidado com hidratação rápida em IC, DRC e idosos frágeis: reavaliar ausculta e diurese a cada etapa.'}]},

rx_hda:{tipo:'h',g:'dig',t:'Hemorragia digestiva alta',rec:RH,rel:[['cd_hda','Conduta HDA'],['gbs','Glasgow-Blatchford']],items:[
 {t:'HDA não varicosa',rx:`1. Dieta zero; cabeceira elevada; 2 acessos venosos calibrosos
2. Ringer lactato ou SF 0,9% 500 mL EV rápido se instável; reavaliar
3. Omeprazol 80 mg EV em bolus; depois 40 mg EV de 12/12 h (ou 8 mg/h em bomba)
4. Concentrado de hemácias se Hb < 7 g/dL (< 8 se doença cardiovascular ou instabilidade)
5. Suspender AAS/AINE/anticoagulante; reverter anticoagulação se sangramento grave
6. EDA em até 24 h (até 12 h se instável após ressuscitação)`,n:'Metoclopramida 10 mg EV ou eritromicina 250 mg EV 30–120 min antes da EDA melhora a visualização.'},
 {t:'HDA varicosa (suspeita em hepatopata)',rx:`1. Dieta zero; 2 acessos calibrosos; proteção de via aérea se rebaixado ou hematêmese volumosa
2. Terlipressina 1 mg/5 mL — 2 mg EV de 4/4 h (1 mg se < 50 kg); após controle, 1 mg de 4/4 h, por 2–5 dias
   ou Octreotida 50 mcg EV em bolus + 50 mcg/h em bomba
3. Ceftriaxona 1 g EV 1 vez ao dia por 7 dias (profilaxia de PBE)
4. Omeprazol 80 mg EV até a EDA
5. Transfusão restritiva: Hb alvo 7–8 g/dL (evitar hipervolemia)
6. Lactulose 20 mL VO/SNG de 8/8 h (prevenção de encefalopatia)
7. EDA em até 12 h`,n:'Terlipressina: cuidado em coronariopatia e doença arterial periférica (isquemia). Sangramento incontrolável: balão de Sengstaken-Blakemore como ponte.'}]},

rx_panc:{tipo:'h',g:'dig',t:'Pancreatite aguda',rec:RH,rel:[['cd_pancr','Conduta pancreatite']],items:[
 {t:'Pancreatite aguda leve a moderada',rx:`1. Dieta oral com baixo teor de gordura assim que tolerar (não manter jejum prolongado)
2. Ringer lactato — 10 mL/kg EV em 1 h se hipovolemia; depois 1,5 mL/kg/h; reavaliar em 12 h (evitar hidratação agressiva)
3. Dipirona 1 g EV de 6/6 h fixo
4. Tramadol 100 mg EV de 8/8 h se dor ou Morfina 2–4 mg EV de 4/4 h se dor intensa
5. Ondansetrona 8 mg EV de 8/8 h se náusea
6. Enoxaparina 40 mg SC 1 vez ao dia
7. Exames: hemograma, Ur, Cr, eletrólitos, Ca, glicemia, TGO, TGP, bilirrubinas, triglicerídeos, PCR, gasometria; USG de abdome (litíase)`,n:'Antibiótico profilático não é indicado. Pancreatite biliar com colangite: CPRE em 24 h. Avaliar gravidade (falência orgânica > 48 h = grave).'}]},

rx_cad:{tipo:'h',g:'endo',t:'Cetoacidose e estado hiperosmolar',rec:RH,rel:[['cd_cad','Conduta CAD'],['angap','Ânion gap'],['nacorr','Sódio corrigido']],items:[
 {t:'Cetoacidose diabética (adulto)',rx:`1. Dieta zero inicialmente; monitorização; 2 acessos venosos
2. SF 0,9% 1.000–1.500 mL EV na 1ª hora (15–20 mL/kg)
   Depois 250–500 mL/h: SF 0,45% se Na corrigido normal ou alto; SF 0,9% se Na corrigido baixo
3. Quando glicemia < 200 mg/dL: SG 5% + SF 0,45% (ou SG 5% 500 mL + NaCl 20% 10 mL) a 150–250 mL/h
4. Potássio:
   K < 3,3: KCl 19,1% 10–20 mL (25–50 mEq) em SF 0,9% 500 mL — EV em 1–2 h ANTES da insulina
   K 3,3–5,2: KCl 19,1% 8–12 mL (20–30 mEq) em cada litro de soro
   K > 5,2: não repor; dosar de 2/2 h
5. Insulina regular 100 UI + SF 0,9% 100 mL (1 UI/mL) — EV em bomba a 0,1 UI/kg/h (ou 0,14 UI/kg/h sem bolus)
   Meta de queda da glicemia 50–75 mg/dL/h; se cair menos de 10% na 1ª h, dar bolus 0,14 UI/kg
   Quando glicemia < 200 mg/dL: reduzir para 0,02–0,05 UI/kg/h e manter glicemia 150–200 mg/dL
6. Bicarbonato apenas se pH < 6,9: NaHCO3 8,4% 100 mL + água destilada 400 mL + KCl 19,1% 8 mL — EV em 2 h
7. HGT de 1/1 h; Na, K, Cl, glicemia e gasometria venosa de 2/2 h a 4/4 h; fósforo e magnésio
8. Tratar fator precipitante`,n:'Resolução: glicemia < 200 + 2 de: HCO3 ≥ 15, pH venoso > 7,3, ânion gap ≤ 12. Transição: insulina SC (NPH + regular) e manter a bomba por mais 2 h. CAD euglicêmica com iSGLT2: usar soro glicosado desde o início.'},
 {t:'Estado hiperglicêmico hiperosmolar',rx:`1. SF 0,9% 1.000–1.500 mL EV na 1ª hora; depois conforme Na corrigido e diurese (geralmente 250–500 mL/h)
2. Potássio como na CAD
3. Insulina regular EV em bomba 0,05–0,1 UI/kg/h, iniciada após a hidratação inicial (a hidratação sozinha já reduz a glicemia)
4. Quando glicemia < 300 mg/dL: SG 5% + SF 0,45% e reduzir insulina para 0,02–0,05 UI/kg/h, manter glicemia 250–300 mg/dL
5. Osmolaridade: queda de no máximo 3–8 mOsm/kg/h; Na corrigido não cair mais que 10 mEq/L/24 h
6. Enoxaparina 40 mg SC (alto risco de trombose)`,n:'Cuidado com edema cerebral por queda rápida da osmolaridade. Idosos: buscar IAM, AVC e infecção.'}]},

rx_hipo:{tipo:'h',g:'endo',t:'Hipoglicemia',rec:RH,rel:[['cd_hipo','Conduta hipoglicemia']],items:[
 {t:'Hipoglicemia',rx:`Consciente: 15 g de carboidrato VO (1 copo de suco ou 1 colher de sopa de açúcar); repetir HGT em 15 min
Rebaixado ou sem via oral:
1. Tiamina 100 mg EV antes, se etilista ou desnutrido (não atrasar a glicose)
2. Glicose 50% — 40–60 mL (20–30 g) EV em veia calibrosa (criança: glicose 10% 2–5 mL/kg)
   Sem acesso venoso: glucagon 1 mg IM ou SC
3. HGT após 15 min; repetir se < 70 mg/dL
4. Manutenção: SG 10% 500 mL EV a 80–100 mL/h, se sulfonilureia ou insulina de longa ação
5. HGT de 1/1 h até estabilizar, depois de 2/2 h`,n:'Hipoglicemia por sulfonilureia: observação mínima de 24 h; refratária: octreotida 50 mcg SC de 6/6–8/8 h. Glucagon não funciona em etilista/desnutrido (sem glicogênio).'}]},

rx_ele:{tipo:'h',g:'renal',t:'Distúrbios do potássio e sódio',rec:RH,rel:[['cd_k','Conduta hipercalemia'],['cd_na','Conduta hiponatremia'],['nadef','Correção do sódio']],items:[
 {t:'Hipercalemia (K ≥ 6,0 ou alteração no ECG)',rx:`1. Monitorização cardíaca; ECG
2. Gluconato de cálcio 10% 10 mL (1 g) + SF 0,9% 100 mL — EV em 5–10 min se alteração no ECG; repetir em 5 min se persistir (até 3 vezes)
3. Insulina regular 10 UI + glicose 50% 50 mL (25 g) — EV em 15–30 min (se glicemia > 250 mg/dL, sem glicose); HGT de 1/1 h por 6 h
4. Beta-2 inalatório: salbutamol 10–20 mg nebulizado ou fenoterol 10 gotas em SF 0,9% 5 mL
5. Bicarbonato de sódio 8,4% 100 mL EV em 30 min, se acidose metabólica
6. Furosemida 40–80 mg EV, se não hipovolêmico e com diurese
7. Poliestirenossulfonato de cálcio 30 g VO de 8/8 h
8. Diálise se refratária, IRA oligúrica ou K > 7 com insuficiência renal
9. Repetir K em 2 h; suspender IECA, BRA, espironolactona, AINE, suplemento de K`,n:'O cálcio estabiliza a membrana mas não baixa o K (efeito de 30–60 min). Insulina e beta-2 baixam 0,5–1 mEq/L em 30–60 min.'},
 {t:'Hipocalemia',rx:`Leve (3,0–3,4) sem sintomas: KCl xarope 6% 15 mL VO de 8/8 h (ou KCl 600 mg 2 comprimidos de 8/8 h)
Moderada a grave (< 3,0) ou sintomática:
1. KCl 19,1% 10 mL (25 mEq) + SF 0,9% 500 mL — EV em 2–3 h (máx. 10 mEq/h em veia periférica; 20 mEq/h em central com monitor)
2. Sulfato de magnésio 10% 10 mL (1 g) + SF 0,9% 100 mL EV em 1 h, se Mg baixo
3. Repetir K em 4–6 h`,n:'Concentração máxima em veia periférica: 40 mEq/L (até 60 mEq/L em situações selecionadas). Evitar soro glicosado na diluição (a glicose baixa mais o K).'},
 {t:'Hiponatremia grave sintomática',rx:`1. Preparo de NaCl 3%: SF 0,9% 890 mL + NaCl 20% 110 mL (513 mEq/L)
2. NaCl 3% 150 mL — EV em 20 min (criança: 2 mL/kg); repetir até 2 vezes, dosando Na a cada bolus
3. Meta: subir 4–6 mEq/L nas primeiras horas ou até cessar os sintomas
4. Limite: não subir mais que 8–10 mEq/L em 24 h (8 se alcoolismo, desnutrição, hipocalemia, cirrose)
5. Na de 4/4 h; diurese horária`,n:'Sintomas graves: convulsão, rebaixamento, vômitos persistentes, sofrimento respiratório. Se correção exceder o limite: SG 5% 3–6 mL/kg ± desmopressina 2 mcg EV (relowering). Ver calculadora de correção de sódio.'}]},

rx_conv:{tipo:'h',g:'neuro',t:'Crise convulsiva e estado de mal',rec:RH,rel:[['cd_conv','Conduta crise convulsiva']],items:[
 {t:'Crise > 5 min ou crises repetidas',rx:`0–5 min: decúbito lateral, aspirar, O2, HGT, acesso venoso
1. Diazepam 10 mg (2 mL) — EV lento (2–5 mg/min), sem diluir; repetir 1 vez em 5 min se persistir
   Sem acesso venoso: Midazolam 10 mg IM (≥ 40 kg; 5 mg se 13–40 kg)
2. Se HGT < 70: tiamina 100 mg EV + glicose 50% 50 mL EV
3. Persistindo após 2 doses de benzodiazepínico (10–20 min), escolher um:
   Fenitoína 20 mg/kg (ampola 250 mg/5 mL) em SF 0,9% 250 mL — EV a no máximo 50 mg/min (idoso/cardiopata 25 mg/min), com monitorização; ex.: 70 kg = 1.400 mg em 30–40 min
   ou Levetiracetam 60 mg/kg (máx. 4.500 mg) em SF 0,9% 100 mL — EV em 15 min
   ou Ácido valproico 40 mg/kg (máx. 3.000 mg) — EV em 10 min (evitar em hepatopata e gestante)
   ou Fenobarbital 20 mg/kg — EV a 50–100 mg/min (causa depressão respiratória)
4. Manutenção: fenitoína 100 mg EV de 8/8 h após 8–12 h`,n:'Fenitoína: só em SF (precipita em glicose), não fazer IM, risco de hipotensão, bradicardia e flebite. Eclâmpsia: sulfato de magnésio. Estado de mal refratário (> 30–40 min): IOT e midazolam ou propofol contínuo na UTI.'}]},

rx_agit:{tipo:'h',g:'mental',t:'Agitação psicomotora',rec:RH,rel:[['cd_agit','Conduta agitação']],items:[
 {t:'Agitação psicótica ou maníaca',rx:`1. Abordagem verbal e oferta de medicação VO primeiro: Haloperidol 5 mg VO ou Risperidona 2 mg VO
2. Se recusar ou agitação grave:
   Haloperidol 5 mg (1 mL) + Prometazina 50 mg (2 mL) — IM na mesma seringa
   ou Haloperidol 5 mg + Midazolam 5 mg (1 mL) — IM
   ou Olanzapina 10 mg IM (não associar a benzodiazepínico parenteral)
3. Reavaliar em 30–60 min; pode repetir 1 vez
4. Sinais vitais de 15/15 min na 1ª hora; ECG assim que possível (QTc)`,n:'Distonia aguda por haloperidol: biperideno 5 mg IM. Evitar haloperidol em intoxicação por estimulantes, abstinência alcoólica, Parkinson e QT longo.'},
 {t:'Agitação por intoxicação por estimulantes ou abstinência',rx:`1. Midazolam 5–10 mg IM ou EV lento (repetir se necessário)
   ou Diazepam 10 mg EV lento, repetir a cada 10 min até sedação leve`,n:'Hipertermia, rigidez e rabdomiólise: resfriar, hidratar, dosar CPK.'},
 {t:'Delirium no idoso',rx:`1. Tratar a causa (infecção, retenção urinária, dor, fecaloma, medicação, hipóxia, distúrbio metabólico)
2. Medidas não farmacológicas: acompanhante, orientação, óculos e aparelho auditivo, luz e sono
3. Se agitação com risco: Haloperidol 0,5–1 mg VO ou IM; repetir em 30–60 min (máx. 5 mg/dia)
   ou Quetiapina 12,5–25 mg VO à noite (Parkinson/demência com corpos de Lewy)`,n:'Evitar benzodiazepínico no delirium (piora), exceto abstinência alcoólica.'},
 {t:'Abstinência alcoólica',rx:`1. Tiamina 100–300 mg EV ou IM 1 vez ao dia (antes de soro glicosado)
2. Diazepam 10–20 mg VO de 1/1 h se CIWA-Ar ≥ 10 (ou 10 mg EV lento se não tolera VO), até sedação leve
   Hepatopata grave ou idoso: Lorazepam 2 mg VO de 1/1 h
3. Hidratação; repor Mg, K, P
4. CIWA-Ar de 1/1 h até < 10 por 24 h`,n:'Wernicke (confusão, ataxia, oftalmoplegia): tiamina 500 mg EV de 8/8 h por 3 dias. Delirium tremens: doses altas de benzodiazepínico e UTI.'}]},

rx_sepse:{tipo:'h',g:'inf',t:'Sepse: antibiótico empírico por foco',rec:RH,rel:[['cd_sepse','Conduta sepse'],['qsofa','qSOFA']],items:[
 {t:'Pacote da 1ª hora',rx:`1. Lactato sérico (repetir em 2–4 h se > 2)
2. Hemoculturas: 2 amostras de sítios diferentes, antes do antibiótico (sem atrasá-lo)
3. Antibiótico de amplo espectro em até 1 h (ver foco)
4. Se hipotensão ou lactato ≥ 4: Ringer lactato ou SF 0,9% 30 mL/kg EV em até 3 h (70 kg: ~2.000 mL)
5. Se PAM < 65 mmHg durante ou após o volume: Noradrenalina (ver drogas vasoativas), meta PAM ≥ 65 mmHg
6. Sonda vesical; diurese horária (meta ≥ 0,5 mL/kg/h)`,n:'Reavaliar volemia após cada 500 mL (ausculta, SpO2, perfusão, USG). Hidrocortisona 50 mg EV de 6/6 h se choque com noradrenalina ≥ 0,25 mcg/kg/min.'},
 {t:'Pneumonia comunitária grave',rx:`1. Ceftriaxona 2 g — EV 1 vez ao dia (ou 1 g de 12/12 h)
2. Azitromicina 500 mg — EV 1 vez ao dia (ou claritromicina 500 mg EV de 12/12 h)
   Alternativa: Levofloxacino 750 mg EV 1 vez ao dia (monoterapia)`,n:'Fator de risco para Pseudomonas ou MRSA (colonização prévia, internação com antibiótico EV nos últimos 90 dias): piperacilina-tazobactam ± vancomicina.'},
 {t:'Foco urinário',rx:`1. Ceftriaxona 1–2 g — EV 1 vez ao dia
   Hospitalização recente, sonda ou ESBL prévio: Piperacilina-tazobactam 4,5 g EV de 6/6 h ou Ertapenem 1 g EV 1 vez ao dia`,n:'Obstrução (cálculo, hiperplasia prostática) com infecção: desobstrução urgente.'},
 {t:'Foco abdominal',rx:`1. Ceftriaxona 2 g EV 1 vez ao dia + Metronidazol 500 mg EV de 8/8 h
   Grave ou hospitalar: Piperacilina-tazobactam 4,5 g EV de 6/6 h
2. Avaliação cirúrgica para controle do foco`,n:''},
 {t:'Pele e partes moles grave / fasceíte necrosante',rx:`1. Oxacilina 2 g EV de 4/4 h (ou cefazolina 2 g EV de 8/8 h)
   Fasceíte: Piperacilina-tazobactam 4,5 g EV de 6/6 h + Clindamicina 600–900 mg EV de 8/8 h + Vancomicina se risco de MRSA
2. Cirurgia de urgência (desbridamento) se fasceíte`,n:''},
 {t:'Meningite bacteriana',rx:`1. Dexametasona 10 mg EV de 6/6 h por 4 dias — 1ª dose 15–20 min antes ou junto com o antibiótico
2. Ceftriaxona 2 g EV de 12/12 h
3. > 50 anos, imunossuprimido, etilista ou gestante: + Ampicilina 2 g EV de 4/4 h
4. Pós-neurocirurgia ou TCE penetrante: Vancomicina + Cefepime 2 g EV de 8/8 h
5. Isolamento respiratório (gotículas) por 24 h`,n:'Não atrasar o antibiótico pela TC ou punção. TC antes da punção se: déficit focal, papiledema, convulsão nova, imunossupressão, Glasgow < 10.'},
 {t:'Sem foco definido / hospitalar / neutropenia',rx:`1. Piperacilina-tazobactam 4,5 g EV de 6/6 h
   ou Meropeném 1 g EV de 8/8 h (ESBL conhecido ou choque com uso prévio de antibiótico)
2. + Vancomicina 25–30 mg/kg EV de ataque (máx. 3 g), depois 15–20 mg/kg de 12/12 h se risco de MRSA (cateter, pele, colonização)
3. Neutropenia febril: Cefepime 2 g EV de 8/8 h (alternativa)`,n:'Ajustar todas as doses pela função renal após a 1ª dose. Descalonar com culturas em 48–72 h.'}]},

rx_pac:{tipo:'h',g:'resp',t:'Pneumonia (internação em enfermaria)',rec:RH,rel:[['curb65','CURB-65'],['rx_alta_resp','Receitas de alta']],items:[
 {t:'PAC em enfermaria',rx:`1. Dieta livre conforme aceitação; cabeceira elevada
2. Ceftriaxona 1 g — EV de 12/12 h (ou 2 g 1 vez ao dia)
3. Azitromicina 500 mg — VO ou EV 1 vez ao dia por 3–5 dias
4. Dipirona 1 g EV de 6/6 h se febre ou dor
5. O2 se SpO2 < 92%
6. Enoxaparina 40 mg SC 1 vez ao dia
7. Fisioterapia respiratória`,n:'Duração total 5–7 dias. Trocar para VO (amoxicilina + clavulanato) após 48–72 h de estabilidade clínica. Aspiração: amoxicilina-clavulanato ou ceftriaxona (sem necessidade de cobrir anaeróbio de rotina).'}]},

rx_pielo:{tipo:'h',g:'renal',t:'Pielonefrite',rec:RH,rel:[['an_itu','Anamnese'],['rx_alta_itu','Receitas de alta']],items:[
 {t:'Pielonefrite com necessidade de antibiótico EV',rx:`1. Ceftriaxona 1 g — EV agora e 1 vez ao dia
2. Dipirona 1 g EV de 6/6 h se dor ou febre
3. Ondansetrona 8 mg EV de 8/8 h se náusea
4. Hidratação conforme aceitação
5. Urocultura e hemograma antes do antibiótico`,n:'Gestante: internar, ceftriaxona 1 g/dia. Trocar para VO após 48 h afebril, conforme antibiograma, completando 7 (quinolona) a 10–14 dias (betalactâmico).'}]},

rx_pele:{tipo:'h',g:'osteo',t:'Celulite, erisipela e abscesso',rec:RH,rel:[['an_pele','Anamnese'],['rx_alta_pele','Receitas de alta']],items:[
 {t:'Erisipela/celulite com antibiótico EV',rx:`1. Cefazolina 1–2 g — EV de 8/8 h
   ou Oxacilina 2 g — EV de 4/4 h (celulite purulenta)
   ou Penicilina G cristalina 2–4 milhões UI EV de 4/4 h (erisipela)
   Alergia grave a betalactâmico: Clindamicina 600 mg EV de 8/8 h
2. Elevação do membro; marcar limites da lesão
3. Analgesia com dipirona
4. Tratar porta de entrada (tínea interdigital: antifúngico tópico)`,n:'Critérios de EV: sinais sistêmicos, progressão rápida, imunossupressão, falha do antibiótico oral, face/órbita. Diabético com úlcera infectada: cobrir gram-negativos e anaeróbios (amoxicilina-clavulanato ou ceftriaxona + metronidazol / clindamicina).'},
 {t:'Drenagem de abscesso',rx:`1. Lidocaína 2% sem vasoelevador — infiltrar a pele sobre o abscesso
2. Incisão, drenagem, lavagem com SF 0,9%; dreno de Penrose ou gaze se cavidade grande
3. Antibiótico só se celulite extensa, sinais sistêmicos, imunossupressão ou área difícil de drenar:
   Sulfametoxazol + trimetoprima 800/160 mg — 1 a 2 comprimidos VO de 12/12 h por 5–7 dias`,n:'Retorno em 24–48 h para curativo.'}]},

rx_antid:{tipo:'h',g:'mental',t:'Intoxicações: antídotos',rec:RH,rel:[['cd_intox','Conduta intoxicações']],items:[
 {t:'Opioide',rx:`1. Naloxona 0,4 mg/mL — 0,4 mg EV (ou IM/SC/intranasal 2 mg); repetir a cada 2–3 min até FR ≥ 12 (máx. 10 mg)
   Dependente de opioide: começar com 0,04–0,1 mg EV
2. Se recorrência: infusão de 2/3 da dose eficaz por hora`,n:'A naloxona dura 30–90 min: observar no mínimo 4–6 h (mais com metadona ou liberação prolongada).'},
 {t:'Benzodiazepínico',rx:`1. Suporte ventilatório
2. Flumazenil 0,2 mg EV em 30 s; repetir 0,2 mg a cada 1 min (máx. 1 mg)`,n:'Evitar em usuário crônico de benzodiazepínico, coingestão de tricíclico ou pró-convulsivante e epilepsia (risco de convulsão).'},
 {t:'Paracetamol',rx:`N-acetilcisteína EV (esquema de 21 h):
1. 150 mg/kg em SG 5% 200 mL — EV em 1 h
2. 50 mg/kg em SG 5% 500 mL — EV em 4 h
3. 100 mg/kg em SG 5% 1.000 mL — EV em 16 h
Oral (se EV indisponível): 140 mg/kg de ataque, depois 70 mg/kg de 4/4 h por 17 doses`,n:'Indicar pelo nomograma de Rumack-Matthew (paracetamolemia ≥ 4 h). Ingestão > 150 mg/kg (ou > 7,5–10 g) sem nível disponível: iniciar NAC. Melhor benefício até 8 h.'},
 {t:'Organofosforado / carbamato (síndrome colinérgica)',rx:`1. Descontaminação da pele (retirar roupas, lavar com água e sabão); proteção da equipe
2. Atropina 0,25 mg/mL ou 0,5 mg/mL — 1–2 mg EV; dobrar a dose a cada 5 min até secar as secreções brônquicas (atropinização)
3. Manutenção: 10–20% da dose total de ataque por hora em bomba
4. Pralidoxima 30 mg/kg EV em 30 min, depois 8–10 mg/kg/h (se disponível; organofosforado)
5. Diazepam para convulsão`,n:'Alvo da atropinização: pulmões limpos, FC > 80, PAS > 80, pupilas sem miose, pele seca. Taquicardia não é contraindicação.'},
 {t:'Tricíclicos (QRS > 100 ms)',rx:`1. Bicarbonato de sódio 8,4% — 1–2 mEq/kg (1–2 mL/kg) EV em bolus; repetir até QRS < 100 ms
2. Manutenção: NaHCO3 8,4% 150 mL + SG 5% 850 mL a 150–250 mL/h, alvo pH 7,45–7,55
3. Benzodiazepínico para convulsão; evitar fenitoína e antiarrítmico classe IA/IC`,n:''},
 {t:'Betabloqueador / bloqueador de canal de cálcio',rx:`1. Atropina 1 mg EV (efeito limitado)
2. Gluconato de cálcio 10% 30 mL (3 g) EV em 10 min (ou cloreto de cálcio 10% 10 mL em veia central); repetir
3. Glucagon 3–5 mg EV em 2 min; repetir; manutenção 2–5 mg/h
4. Insulina em alta dose: 1 UI/kg EV em bolus + 0,5–1 UI/kg/h, com glicose 25–50 g/h e K monitorizado
5. Noradrenalina/adrenalina conforme PA`,n:'Emulsão lipídica 20% 1,5 mL/kg em bolus para casos refratários com drogas lipofílicas.'},
 {t:'Outros antídotos',rx:`Varfarina com sangramento grave: Vitamina K 10 mg EV lento + complexo protrombínico 25–50 UI/kg (ou plasma 15 mL/kg)
Heparina: Protamina 1 mg para cada 100 UI de heparina (máx. 50 mg)
Metanol / etilenoglicol: Etanol 10% EV (ataque 8 mL/kg, manutenção 1–2 mL/kg/h) ou fomepizol; hemodiálise
Cianeto (incêndio): Hidroxocobalamina 5 g EV em 15 min
Metemoglobinemia: Azul de metileno 1% 1–2 mg/kg EV em 5 min
Sulfonilureia: Glicose + Octreotida 50 mcg SC de 6/6 h
Anestésico local (toxicidade): Emulsão lipídica 20% 1,5 mL/kg em 1 min + 0,25 mL/kg/min
Isoniazida: Piridoxina 1 g para cada grama ingerido (máx. 5 g) EV`,n:'Dúvidas: CIATox 0800 722 6001 (24 h).'},
 {t:'Descontaminação',rx:`1. Carvão ativado 1 g/kg (máx. 50 g) diluído em 250 mL de água ou SF — VO ou por SNG, dose única
   Idealmente até 1 h da ingestão (até 2–4 h em liberação prolongada)
2. Múltiplas doses (0,5 g/kg de 4/4 h) para carbamazepina, fenobarbital, dapsona, quinino, teofilina`,n:'Não usar carvão em: via aérea desprotegida, cáusticos, hidrocarbonetos, ferro, lítio, álcoois, íleo/obstrução. Lavagem gástrica não é rotina.'}]},

rx_tetano:{tipo:'h',g:'osteo',t:'Profilaxia do tétano e raiva',rec:RH,rel:[['cd_trauma','Trauma']],items:[
 {t:'Profilaxia do tétano em ferimentos',rx:`Ferimento limpo e superficial:
- Vacina (dT) se esquema incompleto/desconhecido ou última dose há > 10 anos
Ferimento de risco (profundo, sujo, corpo estranho, queimadura, mordedura, esmagamento):
- Vacina (dT) se esquema incompleto/desconhecido ou última dose há > 5 anos
- + Imunoglobulina antitetânica 250 UI IM (ou soro antitetânico 5.000 UI IM) se esquema incompleto ou desconhecido
1. Vacina dupla adulto (dT) 0,5 mL — IM no deltoide
2. Limpeza do ferimento com SF 0,9% e desbridamento`,n:'Vacina e imunoglobulina em locais diferentes. Completar esquema de 3 doses na UBS.'},
 {t:'Mordedura de animal: cuidado local e antibiótico',rx:`1. Lavar abundantemente com água e sabão; não suturar se possível (exceto face, após limpeza)
2. Amoxicilina + clavulanato 875/125 mg VO de 12/12 h por 3–5 dias (profilaxia) ou 7–10 dias (infecção)
3. Profilaxia de raiva conforme o protocolo do MS (animal, tipo de exposição, observação do animal por 10 dias)
4. Notificação (SINAN)`,n:'Ver o fluxo de profilaxia antirrábica da secretaria. Soro/imunoglobulina antirrábica quando indicado deve ser infiltrado no ferimento.'}]},

/* ---------- Receitas de alta ---------- */
rx_alta_sint:{tipo:'a',g:'geral',t:'Sintomáticos (alta)',rec:RS,items:[
 {t:'Dor ou febre',rx:`Uso oral
1. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor ou febre.
2. Paracetamol 750 mg ...... 20 comprimidos
   Tomar 1 comprimido de 6 em 6 horas, se dor ou febre persistente (pode intercalar com a dipirona).`,n:'Paracetamol máximo 4 g/dia (2–3 g em hepatopata, etilista ou idoso frágil).'},
 {t:'Anti-inflamatório por curto período',rx:`Uso oral
1. Ibuprofeno 600 mg ...... 15 comprimidos
   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias.
   ou Naproxeno 500 mg: 1 comprimido de 12 em 12 horas por até 5 dias.`,n:'Evitar em DRC, úlcera, anticoagulados, IC, gestação, idoso frágil.'},
 {t:'Náusea e vômitos',rx:`Uso oral
1. Ondansetrona 8 mg (comprimido orodispersível) ...... 10 comprimidos
   Dissolver 1 comprimido na boca de 8 em 8 horas, se náusea ou vômito.
   ou Metoclopramida 10 mg: 1 comprimido de 8 em 8 horas, 30 min antes das refeições, se náusea.`,n:''},
 {t:'Cólica abdominal',rx:`Uso oral
1. Escopolamina 10 mg + dipirona 250 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 8 em 8 horas, se cólica.`,n:''},
 {t:'Dor moderada a forte (opioide fraco)',rx:`Uso oral
1. Tramadol 50 mg ...... 15 cápsulas
   Tomar 1 cápsula de 8 em 8 horas, se dor forte, por até 5 dias.`,rec:RCE,n:'Receita de Controle Especial em 2 vias. Associar laxativo se uso > 3 dias. Pode causar náusea e tontura.'}]},

rx_alta_itu:{tipo:'a',g:'renal',t:'Infecção urinária (alta)',rec:RA,items:[
 {t:'Cistite não complicada (mulher não gestante)',rx:`Uso oral
1. Nitrofurantoína 100 mg ...... 20 cápsulas
   Tomar 1 cápsula de 6 em 6 horas por 5 dias.
   ou Fosfomicina trometamol 3 g ...... 1 envelope
   Dissolver em meio copo de água e tomar em dose única, à noite, após esvaziar a bexiga.
2. Fenazopiridina 200 mg ...... 6 comprimidos
   Tomar 1 comprimido de 8 em 8 horas por até 2 dias, se ardência. (A urina fica alaranjada.)`,n:'Nitrofurantoína não é indicada se TFG < 30 ou pielonefrite.'},
 {t:'Pielonefrite sem gravidade (alta)',rx:`Uso oral
1. Ciprofloxacino 500 mg ...... 14 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por 7 dias.
2. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor ou febre.`,n:'Fazer ceftriaxona 1 g EV/IM antes da alta se resistência a quinolona > 10% na região. Retorno em 48–72 h se febre persistir. Alternativa: sulfametoxazol + trimetoprima 800/160 mg 12/12 h por 14 dias (se sensível).'},
 {t:'Cistite na gestação',rx:`Uso oral
1. Cefalexina 500 mg ...... 28 cápsulas
   Tomar 1 cápsula de 6 em 6 horas por 7 dias.`,n:'Alternativas: nitrofurantoína 100 mg 6/6 h por 7 dias (evitar no fim da gestação), fosfomicina dose única. Urocultura de controle.'}]},

rx_alta_resp:{tipo:'a',g:'resp',t:'Respiratório (alta)',rec:RA,items:[
 {t:'Pneumonia comunitária sem comorbidade',rx:`Uso oral
1. Amoxicilina 500 mg ...... 21 cápsulas
   Tomar 1 cápsula de 8 em 8 horas por 7 dias.
   ou Azitromicina 500 mg: 1 comprimido por dia por 5 dias (alergia à penicilina).`,n:'Retorno em 48–72 h para reavaliação.'},
 {t:'Pneumonia comunitária com comorbidade',rx:`Uso oral
1. Amoxicilina 875 mg + clavulanato de potássio 125 mg ...... 14 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por 7 dias.
2. Azitromicina 500 mg ...... 5 comprimidos
   Tomar 1 comprimido por dia por 5 dias.`,n:'Alternativa: levofloxacino 750 mg 1x/dia por 5 dias. Comorbidades: DPOC, DM, IC, DRC, hepatopatia, etilismo, imunossupressão.'},
 {t:'Faringoamigdalite bacteriana',rx:`Uso oral
1. Amoxicilina 500 mg ...... 30 cápsulas
   Tomar 1 cápsula de 8 em 8 horas por 10 dias.
   ou Uso intramuscular: Benzilpenicilina benzatina 1.200.000 UI, dose única.`,n:'Alergia não anafilática: cefalexina 500 mg 6/6 h por 10 dias; anafilática: azitromicina 500 mg/dia por 5 dias ou clindamicina.'},
 {t:'Sinusite bacteriana / otite média aguda',rx:`Uso oral
1. Amoxicilina 500 mg ...... 21 cápsulas
   Tomar 1 cápsula de 8 em 8 horas por 7 dias.
Uso nasal
2. Soro fisiológico 0,9% ...... 1 frasco
   Lavar as narinas com 10 mL em cada lado, 3 a 4 vezes ao dia.`,n:'Sinusite bacteriana só se > 10 dias, piora após melhora inicial ou febre alta com secreção purulenta ≥ 3 dias.'},
 {t:'Asma após crise',rx:`Uso oral
1. Prednisona 20 mg ...... 10 comprimidos
   Tomar 2 comprimidos pela manhã por 5 dias.
Uso inalatório
2. Salbutamol 100 mcg/jato (spray) ...... 1 frasco
   Fazer 2 a 4 jatos com espaçador de 4 em 4 horas, se falta de ar ou chiado.
3. Budesonida + formoterol 200/6 mcg ...... 1 frasco
   Fazer 1 inalação de 12 em 12 horas e enxaguar a boca após.`,n:'Toda alta de crise asmática deve sair com corticoide inalatório de manutenção e retorno à UBS em até 1 semana.'},
 {t:'DPOC após exacerbação',rx:`Uso oral
1. Prednisona 20 mg ...... 10 comprimidos
   Tomar 2 comprimidos pela manhã por 5 dias.
2. Amoxicilina 875 mg + clavulanato de potássio 125 mg ...... 14 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por 7 dias (se escarro purulento).
Uso inalatório
3. Salbutamol 100 mcg/jato + ipratrópio (ou fenoterol + ipratrópio spray) ...... 1 frasco
   Fazer 2 jatos com espaçador de 6 em 6 horas, se falta de ar.`,n:'Rever tratamento de manutenção (LAMA ± LABA) na UBS.'}]},

rx_alta_pele:{tipo:'a',g:'osteo',t:'Pele e partes moles (alta)',rec:RA,items:[
 {t:'Erisipela / celulite',rx:`Uso oral
1. Cefalexina 500 mg ...... 28 cápsulas
   Tomar 1 cápsula de 6 em 6 horas por 7 dias.
2. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor ou febre.
Orientação: manter a perna elevada; tratar frieira entre os dedos.`,n:'Erisipela: alternativa amoxicilina 500 mg 8/8 h. Alergia: clindamicina 300 mg 6/6 h. Reavaliar em 48–72 h.'},
 {t:'Abscesso drenado / suspeita de MRSA',rx:`Uso oral
1. Sulfametoxazol 800 mg + trimetoprima 160 mg ...... 14 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por 7 dias.`,n:'Associar cefalexina se celulite extensa ao redor (SMX-TMP cobre mal o estreptococo).'},
 {t:'Herpes-zóster',rx:`Uso oral
1. Aciclovir 400 mg ...... 70 comprimidos
   Tomar 2 comprimidos (800 mg) 5 vezes ao dia por 7 dias.
   ou Valaciclovir 500 mg: 2 comprimidos (1 g) de 8 em 8 horas por 7 dias.
2. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor.`,n:'Melhor benefício até 72 h do início das lesões. Zóster oftálmico: avaliação oftalmológica. Ajustar dose na DRC.'},
 {t:'Urticária aguda',rx:`Uso oral
1. Loratadina 10 mg ...... 10 comprimidos
   Tomar 1 comprimido por dia por 10 dias (pode tomar até 2 vezes ao dia se coceira intensa).
2. Prednisona 20 mg ...... 6 comprimidos
   Tomar 2 comprimidos pela manhã por 3 dias (se extensa).`,n:'Afastar o desencadeante. Após anafilaxia: encaminhar ao alergista e orientar sinais de alarme.'}]},

rx_alta_gea:{tipo:'a',g:'dig',t:'Gastroenterite (alta)',rec:RS,items:[
 {t:'Gastroenterite aguda',rx:`Uso oral
1. Sais para reidratação oral ...... 6 envelopes
   Dissolver 1 envelope em 1 litro de água filtrada e beber aos goles após cada evacuação ou vômito.
2. Ondansetrona 8 mg (orodispersível) ...... 10 comprimidos
   Dissolver 1 comprimido na boca de 8 em 8 horas, se vômito.
3. Escopolamina 10 mg ...... 10 comprimidos
   Tomar 1 comprimido de 8 em 8 horas, se cólica.
4. Racecadotrila 100 mg ...... 9 cápsulas
   Tomar 1 cápsula de 8 em 8 horas, se diarreia, por até 3 dias.`,n:'Evitar loperamida se febre ou sangue nas fezes. Disenteria com febre: ciprofloxacino 500 mg 12/12 h por 3 dias ou azitromicina 500 mg/dia por 3 dias.'}]},

rx_alta_uro:{tipo:'a',g:'renal',t:'Cólica renal (alta)',rec:RS,items:[
 {t:'Nefrolitíase com cálculo distal ≤ 10 mm',rx:`Uso oral
1. Tansulosina 0,4 mg ...... 30 cápsulas
   Tomar 1 cápsula por dia até a eliminação do cálculo (até 4 semanas).
2. Cetoprofeno 100 mg ...... 10 comprimidos
   Tomar 1 comprimido de 12 em 12 horas por até 5 dias, se dor.
3. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor.`,n:'Tansulosina pode causar tontura ao levantar. Retornar se febre, vômitos que impedem medicação, dor refratária ou redução da urina.'}]},

rx_alta_dor:{tipo:'a',g:'osteo',t:'Dor musculoesquelética e cefaleia (alta)',rec:RS,rel:[['an_lomb','Lombalgia']],items:[
 {t:'Lombalgia aguda',rx:`Uso oral
1. Ibuprofeno 600 mg ...... 15 comprimidos
   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por até 5 dias.
2. Ciclobenzaprina 5 mg ...... 10 comprimidos
   Tomar 1 a 2 comprimidos à noite, se contratura, por até 7 dias.
3. Dipirona 500 mg ...... 20 comprimidos
   Tomar 1 a 2 comprimidos de 6 em 6 horas, se dor.
Orientação: calor local 20 minutos 3 vezes ao dia; manter atividades conforme a dor permitir.`,n:'Ciclobenzaprina dá sono; evitar em idoso.'},
 {t:'Enxaqueca',rx:`Uso oral
1. Naproxeno 500 mg ...... 10 comprimidos
   Tomar 1 comprimido no início da crise; pode repetir em 12 horas.
2. Sumatriptano 50 mg ...... 4 comprimidos
   Tomar 1 comprimido no início da crise; pode repetir após 2 horas (máx. 200 mg/dia).
3. Metoclopramida 10 mg ...... 10 comprimidos
   Tomar 1 comprimido junto com o analgésico, se náusea.`,n:'Evitar analgésico > 10 dias/mês (cefaleia por uso excessivo). Se ≥ 4 crises/mês: profilaxia na UBS.'},
 {t:'Gota (crise aguda)',rx:`Uso oral
1. Colchicina 0,5 mg ...... 20 comprimidos
   Tomar 2 comprimidos agora e 1 comprimido após 1 hora; depois 1 comprimido de 12 em 12 horas até melhorar.
   ou Prednisona 20 mg: 2 comprimidos ao dia por 5 dias.
   ou Naproxeno 500 mg: 1 comprimido de 12 em 12 horas por 5–7 dias.`,n:'Não iniciar nem suspender alopurinol durante a crise. Colchicina: reduzir em DRC; diarreia é sinal de toxicidade.'},
 {t:'Vertigem (alta)',rx:`Uso oral
1. Dimenidrinato 50 mg + piridoxina 10 mg ...... 9 comprimidos
   Tomar 1 comprimido de 8 em 8 horas, se tontura, por até 3 dias.
   ou Meclizina 25 mg: 1 comprimido de 12 em 12 horas por até 3 dias.`,n:'Uso curto. VPPB: manobra de reposição e exercícios de Brandt-Daroff.'}]},

rx_alta_tev:{tipo:'a',g:'cv',t:'Anticoagulação (alta)',rec:RS,items:[
 {t:'TVP / TEP de baixo risco',rx:`Uso oral
1. Rivaroxabana 15 mg ...... 42 comprimidos
   Tomar 1 comprimido de 12 em 12 horas, com alimento, por 21 dias.
2. Rivaroxabana 20 mg ...... 30 comprimidos
   Após os 21 dias, tomar 1 comprimido por dia, com alimento.
   ou Apixabana 5 mg: 2 comprimidos de 12 em 12 horas por 7 dias, depois 1 comprimido de 12 em 12 horas.`,n:'Orientar sinais de sangramento. Duração mínima 3 meses. Rivaroxabana e apixabana estão no componente especializado conforme o protocolo; confira acesso antes da alta (alternativa: varfarina com ponte de enoxaparina).'}]},

rx_ped:{tipo:'a',g:'crianca',t:'Pediatria (alta)',rec:RS,rel:[['pedi','Doses pediátricas']],items:[
 {t:'Febre e dor (por peso)',rx:`Uso oral
1. Dipirona 500 mg/mL (gotas) ...... 1 frasco
   Dar __ gotas (1 gota/kg, máx. 40 gotas) de 6 em 6 horas, se febre ou dor.
2. Paracetamol 200 mg/mL (gotas) ...... 1 frasco
   Dar __ gotas (1 gota/kg, máx. 35 gotas) de 6 em 6 horas, se febre persistente.`,n:'Use a calculadora de doses pediátricas para dose em mg e mL. O número de gotas por mL varia entre fabricantes: confira a bula do produto.'},
 {t:'Amoxicilina (OMA, faringite, pneumonia)',rx:`Uso oral
1. Amoxicilina 250 mg/5 mL (suspensão) ...... __ frascos
   Dar __ mL de 8 em 8 horas por __ dias. (50 mg/kg/dia; OMA e pneumonia: até 80–90 mg/kg/dia)`,n:'Calcule em Doses pediátricas.'}]}
});
