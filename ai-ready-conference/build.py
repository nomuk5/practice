#!/usr/bin/env python3
"""Inline src/* into dist/index.html (standalone) and dist/artifact.html (fragment for the Artifact tool)."""
import pathlib

root = pathlib.Path(__file__).parent
src = root / "src"
dist = root / "dist"
dist.mkdir(exist_ok=True)

css = (src / "style.css").read_text(encoding="utf-8")
body = (src / "body.html").read_text(encoding="utf-8")
data = (src / "data.js").read_text(encoding="utf-8")
app = (src / "app.js").read_text(encoding="utf-8")

TITLE = "AI READY CONFERENCE 2027"
FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
         'family=Archivo:wdth,wght@62..125,100..900&family=IBM+Plex+Mono:wght@400;500;600'
         '&family=Noto+Sans+JP:wght@400;500;700;900&display=swap">')

head = (f'<title>{TITLE}</title>\n'
        '<meta name="claude:viewport-fit-sides" content="cover">\n'
        '<meta name="robots" content="noindex,nofollow">\n'
        '<meta name="description" content="企業向け生成AIカンファレンス AI READY CONFERENCE 2027。2027年2月3日（水）オンライン開催。">\n'
        f'{FONTS}\n<style>\n{css}\n</style>\n')
tail = f'\n<script>\n{data}\n{app}\n</script>\n'

(dist / "artifact.html").write_text(head + body + tail, encoding="utf-8")
(dist / "index.html").write_text(
    '<!doctype html>\n<html lang="ja">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
    + head + '</head>\n<body>\n' + body + tail + '</body>\n</html>\n', encoding="utf-8")
import shutil
shutil.copytree(root / "assets", dist / "assets", dirs_exist_ok=True)
print("built", (dist / "index.html").stat().st_size, "bytes")
