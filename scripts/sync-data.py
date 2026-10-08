"""Regenera los datos para file:// a partir de los JSON fuente."""
import json
import hashlib
import re
from pathlib import Path
root = Path(__file__).resolve().parent.parent
curriculum = json.loads((root/'data/curriculum.json').read_text())
modules = {str(p.relative_to(root)): json.loads(p.read_text()) for p in sorted((root/'data/modules').glob('*.json'))}
def validate_text(value, path):
    if isinstance(value, dict):
        for key, item in value.items():
            validate_text(item, f'{path}.{key}')
    elif isinstance(value, list):
        for index, item in enumerate(value):
            validate_text(item, f'{path}[{index}]')
    elif isinstance(value, str) and any(ord(c) < 32 and c != '\n' for c in value):
        raise ValueError(f'{path}: carácter de control inesperado; revisar escapes de LaTeX')

validate_text(curriculum, 'curriculum')
validate_text(modules, 'modules')
(root/'js/data-store.js').write_text('// Generado por scripts/sync-data.py; editar los JSON fuente.\nwindow.CURRICULUM_DATA = '+json.dumps(curriculum, ensure_ascii=False, indent=2)+';\nwindow.MODULES_DATA = '+json.dumps(modules, ensure_ascii=False, indent=2)+';\n')

# Cada cambio de contenido recibe una URL nueva para evitar versiones antiguas en caché.
index = root / 'index.html'
def version_asset(match):
    attribute, relative = match.group(1), match.group(2)
    digest = hashlib.sha256((root / relative).read_bytes()).hexdigest()[:12]
    return f'{attribute}="{relative}?v={digest}"'
html = re.sub(r'(src|href)="((?:js|css)/[^"?]+)(?:\?v=[^" ]+)?"', version_asset, index.read_text())
index.write_text(html)
