/* Guias de remédios (gestação/amamentação, idoso, antibiótico por germe) em EX guia_* e kits de pedidos de exame (FN.kitex). */
EX.guia_gest={g:'mulher',t:'Gestação e amamentação: o que pode no PS',src:'FDA/PLLR · LactMed (NIH) 2024 · e-lactancia · Briggs 12ª ed. · FEBRASGO',k:norm('gestacao gestante gravida amamentacao lactacao lactante pode usar remedio seguro contraindicado teratogenico'),rel:[['cd_itugest','ITU na gestante'],['rx_hiperem','Hiperêmese']],sec:[
 {h:'Como usar',li:['Na gestação, preferir remédios com longa experiência, na menor dose e pelo menor tempo','Doença materna não tratada (febre, hipoxemia, crise convulsiva, sepse) faz mais mal ao feto que a maioria dos remédios','Na amamentação, quase tudo é compatível: só suspender o aleitamento com motivo real']},
 {h:'Por classe',rows:[
  ['Analgésicos','Gestação: paracetamol é 1ª escolha; dipirona evitar no 1º e 3º trimestres (uso pontual aceito). Amamentação: paracetamol e dipirona (uso eventual) compatíveis'],
  ['AINE','Gestação: evitar; contraindicado ≥ 20 semanas (oligoâmnio, fechamento do canal arterial). Amamentação: ibuprofeno é o preferido'],
  ['Opioides','Gestação: uso curto aceito (morfina, tramadol com cautela); uso crônico → abstinência neonatal. Amamentação: dose mínima por pouco tempo; evitar codeína e tramadol em uso prolongado (sedação do bebê)'],
  ['Antieméticos','Gestação: piridoxina + doxilamina 1ª linha; dimenidrinato, metoclopramida e ondansetrona (após 10 semanas; dados de fenda palatina pequenos) aceitos. Amamentação: compatíveis'],
  ['Antiácidos e IBP','Gestação: antiácidos, omeprazol e pantoprazol seguros. Amamentação: compatíveis'],
  ['Antibióticos seguros','Penicilinas, cefalosporinas, azitromicina, clindamicina, fosfomicina, nitrofurantoína (evitar a termo e no 1º trimestre se houver alternativa), metronidazol. Amamentação: todos compatíveis'],
  ['Antibióticos a evitar','Gestação: quinolonas, tetraciclinas/doxiciclina (após 15 semanas), aminoglicosídeos (ototoxicidade), SMX-TMP no 1º trimestre (folato) e a termo (kernicterus). Amamentação: doxiciclina por ≤ 3 semanas e quinolona pontual são aceitas'],
  ['Antivirais e antifúngicos','Oseltamivir e aciclovir seguros. Fluconazol oral: evitar (doses altas teratogênicas); usar creme vaginal. Amamentação: compatíveis'],
  ['Corticoides','Prednisona/prednisolona seguras (pouca passagem placentária). Betametasona/dexametasona para maturação pulmonar. Amamentação: compatíveis (dose alta: esperar 4 h)'],
  ['Asma','Salbutamol, ipratrópio, budesonida e prednisona seguros: tratar a crise normalmente'],
  ['Anti-hipertensivos','Gestação: metildopa, nifedipino e labetalol/hidralazina na crise. Contraindicados: IECA, BRA (losartana), aliscireno, espironolactona. Amamentação: enalapril, captopril, nifedipino, metildopa, labetalol compatíveis'],
  ['Anticoagulantes','Gestação: heparina e enoxaparina. Contraindicados: varfarina (embriopatia) e DOACs. Amamentação: varfarina e enoxaparina compatíveis; evitar DOACs'],
  ['Anticonvulsivantes','Crise: benzodiazepínico e sulfato de magnésio (eclâmpsia). Evitar valproato (malformação e QI). Levetiracetam e lamotrigina são os mais seguros'],
  ['Psicofármacos','Sertralina é a preferida na gestação e amamentação. Benzodiazepínico pontual aceito. Haloperidol na agitação. Lítio: com especialista'],
  ['Anti-histamínicos','Loratadina, cetirizina e dexclorfeniramina aceitos. Amamentação: preferir loratadina (1ª geração dá sono no bebê)'],
  ['Antiparasitários','Gestação: evitar albendazol, mebendazol e ivermectina (1º trimestre sobretudo); permetrina é segura. Amamentação: compatíveis'],
  ['Contraste e exames','Contraste iodado e gadolínio: usar se necessário; não suspender a amamentação. TC e RX com proteção: dose fetal < 50 mGy não aumenta malformação'],
  ['Vacinas','Gestação: dTpa, influenza, COVID, hepatite B são seguras; evitar vacinas de vírus vivo (tríplice viral, varicela, febre amarela salvo risco alto)']]},
 {h:'Suspender a amamentação só se',li:['Quimioterápicos, radiofármacos (pelo tempo indicado), amiodarona, lítio sem monitorização','Uso de drogas ilícitas','Metronidazol em dose única de 2 g: esperar 12–24 h (o regime de 7 dias é compatível)']}]};

EX.guia_idoso={g:'geral',t:'Idoso no PS: remédios a evitar (Beers) e alternativas',src:'AGS Beers Criteria 2023 · STOPP/START v3 (2023)',k:norm('idoso geriatria beers stopp remedio inapropriado evitar alternativa delirium queda'),rel:[['cd_delir','Delirium'],['qat4','4AT']],sec:[
 {h:'Princípios',li:['Começar com dose baixa e subir devagar; calcular o ClCr (Cockcroft-Gault), não só a creatinina','Antes de prescrever: o sintoma pode ser efeito de remédio (cascata de prescrição)','Os maiores causadores de internação por remédio no idoso: anticoagulantes, antiagregantes, insulina e hipoglicemiantes, AINE e sedativos']},
 {h:'Evitar → usar no lugar',rows:[
  ['Anti-histamínicos de 1ª geração (prometazina, dexclorfeniramina, hidroxizina, dimenidrinato)','Anticolinérgicos: delirium, retenção urinária, queda. → Loratadina, fexofenadina; para náusea: ondansetrona'],
  ['Benzodiazepínicos (diazepam, clonazepam, alprazolam) e zolpidem','Delirium, queda, fratura, sedação prolongada (diazepam tem meia-vida longa). → Insônia: higiene do sono, trazodona ou melatonina; abstinência alcoólica é exceção'],
  ['Antipsicóticos para agitação de rotina','Mais AVC e morte na demência. → Tratar a causa, medidas não farmacológicas; se necessário, haloperidol ou quetiapina em dose baixa por pouco tempo'],
  ['AINE por uso prolongado (ibuprofeno, naproxeno, diclofenaco, cetorolaco)','Sangramento GI, lesão renal, piora de IC e HAS. → Paracetamol, tópicos (diclofenaco gel); se AINE, ≤ 5 dias + IBP'],
  ['Relaxantes musculares (ciclobenzaprina, carisoprodol, orfenadrina)','Anticolinérgicos e sedativos, pouca eficácia. → Calor local, paracetamol, fisioterapia'],
  ['Metoclopramida','Parkinsonismo e discinesia. → Ondansetrona (cuidado com QT); domperidona também prolonga QT'],
  ['Opioides: tramadol e meperidina','Tramadol: hiponatremia, hipoglicemia, convulsão, serotoninérgico; meperidina: neurotóxica. → Morfina ou oxicodona em dose baixa + laxativo'],
  ['Sulfonilureias (glibenclamida, glimepirida)','Hipoglicemia grave e prolongada. → Metformina, iDPP-4, iSGLT2; se precisar, gliclazida'],
  ['Insulina só em escala de correção (sliding scale)','Hiper e hipoglicemia. → Basal (± bolus) com metas menos rígidas (140–180)'],
  ['IBP por mais de 8 semanas sem indicação','C. difficile, fratura, hipomagnesemia. → Desprescrever se não há indicação'],
  ['Nitrofurantoína com ClCr < 30 ou uso prolongado','Ineficaz e tóxica (pulmão, fígado). → Fosfomicina ou cefalexina'],
  ['Digoxina > 0,125 mg/dia','Toxicidade. → Controle de FC com betabloqueador; se usar digoxina, dose baixa e nível sérico'],
  ['Amiodarona como 1ª linha na FA','Toxicidade de tireoide, pulmão e fígado. → Controle de frequência'],
  ['Varfarina iniciando agora','Mais sangramento que DOAC. → Apixabana (preferida) ou rivaroxabana/dabigatrana conforme ClCr'],
  ['Rivaroxabana/dabigatrana em ClCr baixo','Acúmulo. → Apixabana com ajuste de dose'],
  ['AAS para prevenção primária','Risco de sangramento maior que o benefício. → Não iniciar; manter só na prevenção secundária'],
  ['Antidepressivos tricíclicos (amitriptilina) e paroxetina','Anticolinérgicos, hipotensão, queda. → Sertralina, escitalopram (vigiar sódio), mirtazapina'],
  ['Alfa-bloqueadores para HAS (doxazosina) e anti-hipertensivos centrais (clonidina, metildopa)','Hipotensão ortostática, queda, bradicardia. → Outras classes'],
  ['Escopolamina e oxibutinina','Anticolinérgicos. → Para bexiga hiperativa: mirabegrona; para cólica, dose única e reavaliar']]},
 {h:'Cuidado especial (não evitar, mas vigiar)',li:['Diuréticos, ISRS, carbamazepina, tramadol, mirtazapina: hiponatremia (sódio em 1–2 semanas)','Combinações perigosas: opioide + benzodiazepínico; 3 ou mais sedativos (queda); IECA/BRA + espironolactona + SMX-TMP (hipercalemia); varfarina + antibiótico (INR)']}]};

EX.guia_germe={g:'inf',t:'Antibiótico por germe (cultura na mão)',src:'Sanford Guide 2024 · IDSA AMR Guidance 2024 · ANVISA · CLSI',k:norm('antibiotico germe cultura antibiograma bacteria mrsa esbl kpc pseudomonas acinetobacter enterococo vre estafilococo estreptococo gram negativo descalonamento'),rel:[['rx_sepse','Sepse: antibiótico por foco'],['cd_atbrenal','Antibióticos: ajuste renal']],sec:[
 {h:'Regras gerais',li:['Descalonar: com a cultura, trocar para o antibiótico de menor espectro ativo','Contaminante comum em 1 de 2 hemoculturas: estafilococo coagulase-negativo, Corynebacterium, Bacillus, Cutibacterium','S. aureus na hemocultura NUNCA é contaminante: repetir hemoculturas, ecocardiograma, tratar ≥ 14 dias','Seguir o antibiograma e a CCIH local: esta tabela é ponto de partida']},
 {h:'Gram-positivos',rows:[
  ['S. aureus sensível à oxacilina (MSSA)','Oxacilina ou cefazolina EV; VO: cefalexina. Melhor que vancomicina'],
  ['MRSA','Vancomicina (AUC 400–600) ou linezolida (pneumonia, pele); daptomicina na bacteremia (não no pulmão); VO: SMX-TMP, doxiciclina, linezolida'],
  ['Estafilococo coagulase-negativo','Só tratar se várias amostras positivas ou prótese/cateter. Geralmente resistente à oxacilina: vancomicina'],
  ['Streptococcus pyogenes (grupo A) e outros beta-hemolíticos','Penicilina ou amoxicilina; + clindamicina se fasciíte ou choque tóxico'],
  ['Streptococcus pneumoniae','Penicilina/amoxicilina se sensível; ceftriaxona; meningite: ceftriaxona + vancomicina até o antibiograma'],
  ['Streptococcus viridans / grupo bovis','Penicilina ou ceftriaxona (endocardite: com especialista). S. gallolyticus (bovis): colonoscopia'],
  ['Enterococcus faecalis','Ampicilina/amoxicilina (± ceftriaxona na endocardite); ITU: nitrofurantoína, fosfomicina. Cefalosporinas não pegam'],
  ['Enterococcus faecium / VRE','Linezolida ou daptomicina (dose alta)'],
  ['Listeria','Ampicilina (± gentamicina); alergia: SMX-TMP']]},
 {h:'Gram-negativos',rows:[
  ['E. coli / Klebsiella / Proteus sensíveis','Conforme o sítio: ceftriaxona, cefalexina/cefuroxima VO, SMX-TMP, ciprofloxacino, nitrofurantoína/fosfomicina (ITU baixa)'],
  ['Enterobactéria ESBL','Carbapenêmico (ertapenem se estável; meropeném se grave). ITU baixa: nitrofurantoína, fosfomicina; VO conforme antibiograma (SMX-TMP, ciprofloxacino). Evitar piperacilina-tazobactam e cefepima'],
  ['Enterobacter, Citrobacter freundii, Serratia (AmpC)','Cefepima (se CIM baixa) ou carbapenêmico; evitar ceftriaxona mesmo se “sensível” em infecção grave'],
  ['KPC (carbapenemase)','Ceftazidima-avibactam; meropeném-vaborbactam. Com infectologia'],
  ['Metalo-beta-lactamase (NDM)','Ceftazidima-avibactam + aztreonam; cefiderocol. Com infectologia'],
  ['Pseudomonas aeruginosa','Cefepima, piperacilina-tazobactam, ceftazidima, meropeném, ciprofloxacino/levofloxacino (única VO). Multirresistente: ceftolozano-tazobactam, ceftazidima-avibactam'],
  ['Acinetobacter baumannii','Ampicilina-sulbactam (dose alta) se sensível; carbapenêmico se sensível; resistente: polimixina B ± outros, cefiderocol. Com infectologia'],
  ['Stenotrophomonas maltophilia','SMX-TMP (dose alta); levofloxacino, minociclina'],
  ['Haemophilus influenzae','Amoxicilina-clavulanato, ceftriaxona, azitromicina'],
  ['Neisseria meningitidis','Ceftriaxona ou penicilina cristalina; quimioprofilaxia dos contactantes'],
  ['Neisseria gonorrhoeae','Ceftriaxona 1 g IM (+ azitromicina 1 g conforme o MS)']]},
 {h:'Anaeróbios e outros',rows:[
  ['Bacteroides e anaeróbios abdominais','Metronidazol, amoxicilina-clavulanato, piperacilina-tazobactam, carbapenêmico (clindamicina: muita resistência)'],
  ['Clostridioides difficile','Vancomicina VO 125 mg 6/6 h ou fidaxomicina por 10 dias; fulminante: vancomicina VO 500 mg 6/6 h + metronidazol EV'],
  ['Candida (hemocultura)','Equinocandina (micafungina, caspofungina); trocar para fluconazol se sensível e estável; retirar o cateter, fundo de olho, ecocardiograma'],
  ['Mycoplasma, Chlamydia, Legionella (atípicos)','Azitromicina, doxiciclina ou levofloxacino']]}]};

/* Kits de pedidos de exame por síndrome (FN) */
const KITEX=[
 ['Dor torácica',`ECG em até 10 min (repetir em 15–30 min e se mudar a dor)
Troponina de alta sensibilidade 0 h e 1–3 h (conforme o protocolo do serviço)
Hemograma, ureia, creatinina, sódio, potássio, magnésio
Glicemia, coagulograma (TP/INR, TTPa)
RX de tórax
[D-dímero se probabilidade baixa/intermediária de TEP (Wells/PERC)]
[Angio-TC de aorta se suspeita de dissecção; angio-TC de tórax se TEP]
[CK-MB se troponina convencional; BNP/NT-proBNP se dispneia]`],
 ['Sepse',`Lactato arterial ou venoso (repetir em 2–4 h se > 2)
Hemoculturas: 2 pares de sítios diferentes ANTES do antibiótico
Culturas do foco: urocultura, cultura de secreção / escarro / líquido
Hemograma, PCR, ureia, creatinina, sódio, potássio
Bilirrubinas, TGO, TGP, coagulograma (TP/INR, TTPa), plaquetas
Gasometria arterial
Glicemia
EAS (urina tipo 1)
RX de tórax
[Procalcitonina, se disponível]
[Imagem do foco: USG/TC de abdome, TC de crânio + punção lombar]`],
 ['AVC agudo',`Glicemia capilar IMEDIATA
TC de crânio sem contraste (porta-imagem ≤ 25 min) [+ angio-TC de crânio e cervical se candidato à trombectomia]
Hemograma com plaquetas
Coagulograma (TP/INR, TTPa)
Ureia, creatinina, sódio, potássio
Troponina
ECG
[Tempo de trombina / anti-Xa se uso de DOAC]
[Beta-hCG em mulher em idade fértil]
Obs.: não atrasar a trombólise esperando exames, exceto glicemia (e plaquetas/INR se suspeita de alteração)`],
 ['Abdome agudo',`Hemograma, PCR
Ureia, creatinina, sódio, potássio
Amilase e lipase
Bilirrubinas, TGO, TGP, fosfatase alcalina, GGT
Glicemia, gasometria venosa com lactato
EAS (urina tipo 1)
Beta-hCG (mulher em idade fértil)
Coagulograma (se possível cirurgia), tipagem sanguínea
ECG (> 50 anos ou dor epigástrica)
Imagem conforme a suspeita: USG de abdome (vesícula, apendicite em criança/gestante, ginecológico) / TC de abdome com contraste / RX de tórax em pé (pneumoperitônio)`],
 ['Intoxicação exógena',`Glicemia capilar
ECG (QRS, QTc)
Gasometria arterial com lactato, ânion gap
Sódio, potássio, cloro, ureia, creatinina
Osmolaridade sérica medida (gap osmolar: álcoois tóxicos)
Paracetamol sérico (4 h após a ingestão) e salicilato
Etanol sérico
CK, TGO, TGP, bilirrubinas
Coagulograma (TP/INR)
Beta-hCG (mulher em idade fértil)
Nível sérico se disponível: lítio, digoxina, fenobarbital, carbamazepina, valproato
[Colinesterase eritrocitária/plasmática se organofosforado/carbamato]
[Carboxi-hemoglobina e metemoglobina na gasometria]
Ligar para o CIATox: 0800 722 6001`],
 ['Dispneia aguda',`Gasometria arterial
Hemograma, ureia, creatinina, sódio, potássio
BNP ou NT-proBNP
Troponina
D-dímero [se probabilidade baixa/intermediária de TEP]
ECG
RX de tórax
[PCR, procalcitonina, hemoculturas se pneumonia; teste de influenza/COVID]
[POCUS pulmonar e cardíaco]`],
 ['Rebaixamento de consciência',`Glicemia capilar IMEDIATA
Gasometria arterial com lactato
Sódio, potássio, cálcio, magnésio, ureia, creatinina
Hemograma, TGO, TGP, bilirrubinas, amônia (se hepatopata)
Coagulograma
TSH / T4 livre
Etanol, toxicológico, paracetamol
Hemoculturas e EAS/urocultura se febre
ECG
TC de crânio sem contraste
[Punção lombar se febre/meningismo, após TC]
[EEG se suspeita de estado de mal não convulsivo]`]];
FN.kitex={g:'geral',t:'Kits de pedidos de exame',code:'por síndrome',k:'kit pedido de exames solicitar exames dor toracica sepse avc abdome agudo intoxicacao dispneia rebaixamento laboratorio',render(m){
  m.innerHTML=`<section class="panel"><div class="ph"><h2>Kits de pedidos de exame</h2><span class="code">por síndrome</span></div>
   <p class="note">Edite no campo antes de copiar (a edição não fica salva). Itens entre colchetes são condicionais: apague os que não se aplicam.</p>
   ${KITEX.map(([t,x],i)=>`<article class="card"><h3>${esc(t)}</h3><textarea class="soap" id="kx${i}" spellcheck="false" style="min-height:160px">${esc(x)}</textarea><div class="bar"><button class="btn primary small" type="button" data-kx="${i}">Copiar</button><button class="btn small" type="button" data-kxf="${i}">Copiar sem colchetes</button></div></article>`).join('')}</section>`;
  m.querySelectorAll('[data-kx]').forEach(b=>b.onclick=()=>copy($('#kx'+b.dataset.kx).value));
  m.querySelectorAll('[data-kxf]').forEach(b=>b.onclick=()=>copy($('#kx'+b.dataset.kxf).value.split('\n').filter(l=>!/^\[.*\]$/.test(l.trim())).join('\n')))}};
