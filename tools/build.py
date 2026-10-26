"""Gera index.html juntando src/shell.html + src/style.css + os scripts de src/.
Uso: python3 tools/build.py
Depois, aumente VERSION em sw.js."""
import pathlib
root = pathlib.Path(__file__).resolve().parent.parent
src = root / 'src'
JS = ['core.js', 'anamneses.js', 'prescricoes.js', 'condutas.js', 'exames.js', 'calculadoras.js', 'aps_import.js', 'ambientais.js', 'acrescimos.js', 'app.js']
shell = (src / 'shell.html').read_text(encoding='utf8')
css = (src / 'style.css').read_text(encoding='utf8')
js = '\n'.join((src / f).read_text(encoding='utf8') for f in JS)
out = shell.replace('/*CSS*/', css, 1).replace('/*JS*/', js, 1)
(root / 'index.html').write_text(out, encoding='utf8')
print('index.html:', len(out), 'bytes')
