#!/usr/bin/env python3
"""Build the site.

Public (publishable):  dist/index.html (standalone), dist/artifact.html (fragment for the Artifact tool), dist/assets/
Private (NOT published): private/sumitomo.html — 商談用ページ。ナビには載せず、公開物（dist/）にも含めない。
"""
import pathlib
import shutil

root = pathlib.Path(__file__).parent
src = root / "src"
dist = root / "dist"
private = root / "private"
dist.mkdir(exist_ok=True)
private.mkdir(exist_ok=True)

css = (src / "style.css").read_text(encoding="utf-8")
body = (src / "body.html").read_text(encoding="utf-8")
data = (src / "data.js").read_text(encoding="utf-8")
app = (src / "app.js").read_text(encoding="utf-8")

TITLE = "生成AI Ready Conference 2027"
FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
         'family=Archivo:wdth,wght@62..125,100..900&family=IBM+Plex+Mono:wght@400;500;600'
         '&family=Noto+Sans+JP:wght@400;500;700;900&display=swap">')

head = (f'<title>{TITLE}</title>\n'
        '<meta name="claude:viewport-fit-sides" content="cover">\n'
        '<meta name="robots" content="noindex,nofollow">\n'
        '<meta name="description" content="企業向け生成AIカンファレンス 生成AI Ready Conference 2027。運営主体：生成AI活用能力認定協会。2027年2月3日（水）オンライン開催。">\n'
        f'{FONTS}\n<style>\n{css}\n</style>\n')
tail = f'\n<script>\n{data}\n{app}\n</script>\n'

# ---- public site
(dist / "artifact.html").write_text(head + body + tail, encoding="utf-8")
(dist / "index.html").write_text(
    '<!doctype html>\n<html lang="ja">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
    + head + '</head>\n<body>\n' + body + tail + '</body>\n</html>\n', encoding="utf-8")
shutil.copytree(root / "assets", dist / "assets", dirs_exist_ok=True)

# ---- private page for the Sumitomo meeting (kept out of dist/)
pv_body = (src / "sumitomo.html").read_text(encoding="utf-8")
pv_css = css + "\n" + (src / "private.css").read_text(encoding="utf-8")
pv_js = r"""
(function(){
  var SP=window.SPEAKERS, esc=function(s){return s};
  function card(s){
    return '<div class="pv-s"><div class="ph'+(s.photo?' real':'')+'">'+(s.photo?'<img src="../'+s.photo+'" alt="'+s.name+'">':'')+'</div><div><span class="badge mono">登壇予定</span><b>'+s.name+'</b><span>'+s.org+'</span></div></div>';
  }
  document.getElementById('pvSp').innerHTML=SP.map(card).join('');
})();
"""
(private / "sumitomo.html").write_text(
    '<!doctype html>\n<html lang="ja">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
    '<meta name="robots" content="noindex,nofollow">\n'
    '<title>住友商事様へのご登壇のご相談｜生成AI Ready Conference 2027</title>\n'
    f'{FONTS}\n<style>\n{pv_css}\n</style>\n</head>\n<body>\n{pv_body}\n'
    f'<script>\n{data}\n{pv_js}\n</script>\n</body>\n</html>\n', encoding="utf-8")
print("built", (dist / "index.html").stat().st_size, "bytes; private page:", (private / "sumitomo.html").stat().st_size, "bytes")
