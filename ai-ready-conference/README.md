# AI READY CONFERENCE 2027 — サンプルサイト

登壇打診用のサンプルLP（静的サイト）。

- `src/` … ソース（`data.js`: 登壇者・プログラム／`body.html`／`style.css`／`app.js`）
- `build.py` … `dist/index.html`（単体HTML）と `dist/artifact.html` を生成: `python3 build.py`
- `assets/key-visual.png` … メインビジュアル（1920px、資料・OGP用）
- `assets/speakers/` … 登壇者写真を置く場所。`src/data.js` の `photo: 'assets/speakers/xxx.jpg'` を指定すると、青のデュオトーンで統一されて表示されます（未指定は仮の肖像）。

## 掲載内容の注意
- 登壇者の肩書きのうち `verify: true` のものは検索で確認した情報のため、本人・所属先に最終確認してください。
- 日清食品HDは告知協力「不可」、公表許諾は全員「未確認」。外部に見せる前に確認してください。
- 「松尾先生」など未内諾の有識者は実名を出さず、Special Keynote の Coming Soon 枠にしています。
