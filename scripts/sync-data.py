"""Regenera los datos para file:// a partir de los JSON fuente."""
import json
from pathlib import Path
root = Path(__file__).resolve().parent.parent
curriculum = json.loads((root/'data/curriculum.json').read_text())
modules = {str(p.relative_to(root)): json.loads(p.read_text()) for p in sorted((root/'data/modules').glob('*.json'))}
(root/'js/data-store.js').write_text('// Generado por scripts/sync-data.py; editar los JSON fuente.\nwindow.CURRICULUM_DATA = '+json.dumps(curriculum, ensure_ascii=False, indent=2)+';\nwindow.MODULES_DATA = '+json.dumps(modules, ensure_ascii=False, indent=2)+';\n')
