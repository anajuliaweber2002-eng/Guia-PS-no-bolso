# Kit PS de bolso

App web (PWA) para o pronto socorro: anamneses de admissão por queixa, prescrições hospitalares e receitas de alta, condutas padrão, interpretação de exames, calculadoras/escores, drogas em infusão, intubação e doses pediátricas. Funciona offline e pode ser instalado no celular ("Adicionar à tela inicial"). Feito no mesmo formato do Kit APS de bolso.

Material de apoio para profissionais de saúde: confira doses e o protocolo da sua instituição antes de prescrever.

## Onde está cada coisa
- `src/anamneses.js`: modelos de anamnese (`AN`)
- `src/prescricoes.js`: prescrições no PS (`tipo:'h'`) e receitas de alta (`tipo:'a'`)
- `src/condutas.js`: condutas padrão (`CD`)
- `src/exames.js`: interpretação de exames (`EX`)
- `src/calculadoras.js`: escores, cálculos, gasometria, drogas vasoativas, IOT e doses pediátricas
- `src/app.js`: menu, busca, favoritos, edição e impressão
- `src/style.css` e `src/shell.html`: visual e estrutura da página

## Publicar uma atualização
1. Edite os arquivos em `src/` e rode `python3 tools/build.py` (gera o `index.html`).
2. Aumente `VERSION` em `sw.js` (ex.: `2026-10-25.2`). Sem isso, quem já instalou continua vendo a versão antiga até ficar online e recarregar.
3. Faça commit na branch `main`; o GitHub Pages publica em ~1 min.

O que a pessoa edita dentro do app (anamneses, prescrições, dados da receita) fica salvo só naquele navegador/aparelho.
