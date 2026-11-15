/* IAM com BRE ou ritmo de marca-passo: critérios de Sgarbossa (1996), Sgarbossa modificado por Smith (2012),
   critérios de Barcelona (2020) e razão ST/S. Conduta CD.cd_bre_iam e links nas telas de SCA e ECG.
   Fontes: Sgarbossa NEJM 1996 e AJC 1996 (marca-passo); Smith Ann Emerg Med 2012 e Meyers 2015 (validação);
   Di Marco Eur Heart J 2020 (Barcelona); Dodd Ann Emerg Med 2021 (marca-passo); ESC 2023 (SCA). */

const SG_REL=[['cd_bre_iam','IAM com BRE / marca-passo'],['sgarbossa','Sgarbossa'],['sgarb_smith','Sgarbossa modificado (Smith)'],['smith_razao','Razão ST/S'],['barcelona','Barcelona'],['cd_sca','SCA']];
const SG_R=id=>SG_REL.filter(x=>x[0]!==id);

SC.sgarbossa={g:'cv',t:'Critérios de Sgarbossa (BRE / marca-passo)',code:'Sgarbossa 1996 · IAM com BRE',kind:'ck',
 k:'sgarbossa bre bloqueio de ramo esquerdo marca passo marcapasso iam infarto supra concordante discordante oclusao',
 ck:[['Supra de ST ≥ 1 mm concordante com o QRS (QRS positivo) em qualquer derivação',5],['Infra de ST ≥ 1 mm em V1, V2 ou V3 (concordante com QRS negativo)',3],['Supra de ST ≥ 5 mm discordante do QRS (QRS negativo)',2]],
 lv:t=>t>=3?['bad','Positivo (≥ 3)','IAM provável (especificidade ~ 98%): tratar como IAM com supra, acionar hemodinâmica / reperfusão.']
  :t===2?['warn','Indeterminado (2)','Só o supra discordante ≥ 5 mm: pouco específico. Aplicar o critério de Smith (razão ST/S ≥ 25%), ECG seriado, troponina, ECO.']
  :['warn','Negativo (0)','Não exclui IAM (sensibilidade ~ 20–35%). Use Smith ou Barcelona; se a clínica é de isquemia persistente, tratar como IAM com supra (ESC 2023).'],
 tbl:{h:'Pontuação',rows:[['0–1','Negativo: não exclui',0,1],['2','Indeterminado',2,2],['≥ 3','Positivo: IAM provável',3,10]]},
 rel:SG_R('sgarbossa'),
 note:'Concordante = ST desviado para o mesmo lado do QRS; no BRE o normal é o ST discordante (oposto ao QRS). Vale também para ritmo de marca-passo com estimulação no VD. Escore ≥ 3: especificidade ~ 98% e sensibilidade baixa, então um escore baixo não afasta oclusão coronariana.'};

SC.sgarb_smith={g:'cv',t:'Sgarbossa modificado (Smith)',code:'Smith 2012 · BRE / marca-passo',kind:'ck',np:true,unit:'',
 k:'sgarbossa modificado smith razao st s 25% bre bloqueio de ramo esquerdo marca passo marcapasso iam oclusao discordante proporcional',
 ck:[['Supra de ST ≥ 1 mm concordante com o QRS em pelo menos 1 derivação',1],['Infra de ST ≥ 1 mm concordante em pelo menos 1 derivação de V1 a V3',1],['Supra de ST discordante e desproporcional: ST ≥ 25% da profundidade da onda S (razão ST/S ≥ 0,25) em pelo menos 1 derivação com supra ≥ 1 mm',1]],
 lv:t=>t?['bad','Positivo','Oclusão coronariana aguda provável (sensibilidade ~ 80%, especificidade ~ 99%): tratar como IAM com supra, reperfusão imediata.']
  :['warn','Negativo','Não exclui SCA: ECG seriado a cada 15–30 min, comparar com ECG prévio, troponina e ECO à beira-leito. Dor persistente com instabilidade: cateterismo imediato mesmo assim.'],
 rel:SG_R('sgarb_smith'),
 note:'Basta 1 critério. Smith troca o corte fixo de 5 mm do Sgarbossa pela proporção ST/S, que acompanha a voltagem do QRS: melhor sensibilidade sem perder especificidade. Meça o ST no ponto J, contra o PR, e a S (ou R) do mesmo complexo. Validado também no ritmo de marca-passo (Dodd 2021).'};

NC.smith_razao={g:'cv',t:'Razão ST/S (Smith) no BRE',code:'Sgarbossa modificado · corte 25%',
 k:'razao st s smith sgarbossa modificado bre marca passo discordante proporcional 25%',
 f:[{k:'st',l:'Supra de ST discordante no ponto J (mm)',v:'3'},{k:'s',l:'Profundidade da onda S no mesmo complexo (mm)',v:'10'}],
 calc:v=>{if(!(v.st>0)||!(v.s>0))return null;const r=v.st/v.s,p=Math.round(r*100),pos=r>=0.25;
  return {cls:pos?'bad':'ok',big:p+'<small>%</small>',sub:[pos?'<b>Positivo</b> (≥ 25%): supra desproporcional, sugere oclusão coronariana aguda.':'<b>Negativo</b> nesta derivação (&lt; 25%). Repita nas outras derivações com supra discordante ≥ 1 mm e em ECGs seriados.',
   v.st<1?'Atenção: o critério só vale em derivação com supra ≥ 1 mm.':'Basta 1 derivação positiva.'],line:`Razão ST/S (Smith): ${fmt(v.st,1)} / ${fmt(v.s,1)} mm = ${p}% (${pos?'positivo':'negativo'}).`}},
 note:'Use a derivação com QRS predominantemente negativo e supra discordante (em geral V1–V3). Para infra discordante em QRS positivo (V5, V6, DI, aVL), a mesma proporção sobre a onda R sugere isquemia, com menos evidência.'};

SC.barcelona={g:'cv',t:'Critérios de Barcelona (BRE)',code:'Di Marco 2020 · BRE',kind:'ck',np:true,unit:'',
 k:'barcelona bre bloqueio de ramo esquerdo iam infarto oclusao baixa voltagem concordante discordante',
 ck:[['Desvio de ST ≥ 1 mm concordante com o QRS em qualquer derivação (supra ou infra)',1],['Desvio de ST ≥ 1 mm discordante em derivação com QRS de baixa voltagem (maior onda, R ou S, ≤ 6 mm)',1]],
 lv:t=>t?['bad','Positivo','IAM com oclusão provável (sensibilidade ~ 93%, especificidade ~ 94% no estudo original): reperfusão.']
  :['warn','Negativo','Não exclui: ECG seriado, troponina, ECO. Isquemia persistente ou instabilidade: cateterismo imediato.'],
 rel:SG_R('barcelona'),
 note:'Derivado só em BRE (não em marca-passo). Mais sensível que Sgarbossa e Smith, com especificidade um pouco menor; útil quando o QRS tem pouca voltagem e a razão ST/S fica difícil.'};

CD.cd_bre_iam={g:'cv',t:'IAM com BRE ou marca-passo (Sgarbossa)',src:'ESC 2023 · Sgarbossa 1996 · Smith 2012 · Barcelona 2020',
 k:'sgarbossa scarbossa smith barcelona bre bloqueio de ramo esquerdo marca passo marcapasso iam infarto supra equivalente concordante discordante oclusao',
 rel:[['sgarbossa','Sgarbossa (escore)'],['sgarb_smith','Sgarbossa modificado (Smith)'],['smith_razao','Razão ST/S'],['barcelona','Barcelona'],['cd_sca','SCA'],['ecg_bloq','ECG: bloqueios de ramo'],['ecg_isq','ECG: isquemia'],['ex_trop','Troponina']],
 sec:[
 {h:'Quando usar',li:['Dor torácica ou equivalente isquêmico com <b>BRE</b> (novo ou antigo) ou <b>ritmo de marca-passo</b> com estimulação ventricular (eletrodo no VD dá padrão de BRE)','No BRE o ST e a T normalmente são <b>discordantes</b> (opostos ao QRS): os critérios habituais de supra não servem','"BRE novo" sozinho não é mais equivalente de IAM com supra (AHA 2013): muitos BRE são antigos e sem registro. O que pesa é a clínica e os critérios abaixo','ESC 2023: BRE ou marca-passo com suspeita forte de isquemia em curso → conduzir como IAM com supra, <b>seja o bloqueio novo ou antigo</b>']},
 {h:'Sgarbossa (1996)',intro:'Escore: ≥ 3 pontos = IAM provável. Muito específico (~ 98%), pouco sensível (~ 20–35%).',rows:[
  ['Supra de ST ≥ 1 mm concordante com o QRS (qualquer derivação)','5 pontos'],
  ['Infra de ST ≥ 1 mm em V1, V2 ou V3','3 pontos'],
  ['Supra de ST ≥ 5 mm discordante do QRS','2 pontos']]},
 {h:'Sgarbossa modificado (Smith, 2012)',intro:'Positivo com 1 critério. Sensibilidade ~ 80%, especificidade ~ 99% para oclusão. É o preferido hoje.',rows:[
  ['1','Supra de ST ≥ 1 mm concordante em ≥ 1 derivação'],
  ['2','Infra de ST ≥ 1 mm concordante em ≥ 1 derivação de V1–V3'],
  ['3','Supra discordante com ST ≥ 25% da onda S (razão ST/S ≥ 0,25) em ≥ 1 derivação com supra ≥ 1 mm. Substitui o corte fixo de 5 mm']]},
 {h:'Barcelona (2020, só BRE)',intro:'Positivo com 1 critério. Sensibilidade ~ 93%, especificidade ~ 94%.',rows:[
  ['1','Desvio de ST ≥ 1 mm concordante com o QRS em qualquer derivação (supra ou infra)'],
  ['2','Desvio de ST ≥ 1 mm discordante em derivação com QRS ≤ 6 mm (maior onda R ou S)']]},
 {h:'Como medir',li:['ST no ponto J, comparado com a linha de base do PR (ou TP)','Concordante: ST para o mesmo lado da maior onda do QRS. Discordante: para o lado oposto','Razão ST/S: altura do supra no ponto J dividida pela profundidade da S no mesmo complexo; ≥ 25% é positivo','Compare com ECG antigo: mudança nova de ST tem muito mais valor','Repetir o ECG a cada 15–30 min enquanto houver dor']},
 {h:'Marca-passo',li:['Estimulação de VD gera QRS largo com padrão de BRE: aplicam-se os mesmos critérios','Sgarbossa original no marca-passo (1996): o supra discordante ≥ 5 mm foi o critério mais útil; concordantes são raros mas muito específicos','Smith modificado foi validado no marca-passo (Dodd 2021): especificidade ~ 96%, sensibilidade ~ 80%','Barcelona não foi validado em marca-passo','Não desligar nem reprogramar o marca-passo no PS só para ver o ritmo de base','Ressincronizador (biventricular) e estimulação do sistema de condução (His, ramo esquerdo) mudam a morfologia: critérios pouco estudados, decida pela clínica']},
 {h:'Conduta',rows:[
  ['Critério positivo','IAM com supra: AAS, anticoagulação, reperfusão (angioplastia primária; fibrinólise se porta-balão &gt; 120 min e sem contraindicação)'],
  ['Critério negativo + dor persistente, instabilidade, IC aguda ou arritmia','Cateterismo imediato (ESC 2023), como IAM com supra'],
  ['Critério negativo, estável, sem dor','SCA sem supra: ECG seriado, troponina 0/1–3 h, ECO (alteração segmentar), HEART'],
  ['BRD','Permite ler o ST. BRD com dor isquêmica tem prognóstico ruim: considerar cateterismo precoce (ESC 2023)']]},
 {h:'Armadilhas',li:['Escore de Sgarbossa baixo não exclui IAM: use Smith','Hipercalemia, SVE importante, cardiomiopatia e toxicidade por bloqueador de canal de sódio também alargam o QRS e distorcem o ST','Troponina pode subir no BRE por outras causas (IC, sepse, taquiarritmia): interpretar a curva','ECO à beira-leito com alteração segmentar nova reforça a suspeita','Sempre comparar com ECG anterior (prontuário, foto do paciente)']}]};

/* Links nas telas existentes */
[[CD.cd_sca,['cd_bre_iam','IAM com BRE (Sgarbossa)']],[RX.rx_sca,['cd_bre_iam','IAM com BRE (Sgarbossa)']],[EX.ecg_ps,['cd_bre_iam','Sgarbossa']],[EX.ecg_bloq,['sgarbossa','Escore de Sgarbossa']],[EX.ecg_isq,['sgarb_smith','Sgarbossa modificado']],[EX.ecg_bradi,['cd_bre_iam','IAM com marca-passo']]]
 .forEach(([o,r])=>{if(o&&o.rel&&!o.rel.some(x=>x[0]===r[0]))o.rel.unshift(r)});
if(EX.ecg_bloq)EX.ecg_bloq.rel=EX.ecg_bloq.rel.concat([['cd_bre_iam','IAM com BRE / marca-passo']]);
