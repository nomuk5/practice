# AI READY CONFERENCE 2027 — サンプルサイト

登壇打診用のサンプルLP（静的サイト）。

- `src/` … ソース（`data.js`: 登壇者・プログラム／`body.html`／`style.css`／`app.js`）
- `build.py` … `dist/index.html`（単体HTML）と `dist/artifact.html` を生成: `python3 build.py`
- `assets/key-visual.png` … メインビジュアル（1920px、資料・OGP用）
- `assets/speakers/` … 登壇者写真を置く場所。`src/data.js` の `photo: 'assets/speakers/xxx.jpg'` を指定すると、元の色のまま表示されます（未指定は仮の肖像）。

## 掲載内容の注意
- 登壇者の肩書きのうち `verify: true` のものは検索で確認した情報のため、本人・所属先に最終確認してください。
- 日清食品HDは告知協力「不可」、公表許諾は全員「未確認」。外部に見せる前に確認してください。
- 「松尾先生」など未内諾の有識者は実名を出さず、Special Keynote の Coming Soon 枠にしています。

## 写真の出典（Web公開素材。使用前に各権利者へ確認してください）
| 登壇者 | 出典 |
|---|---|
| 鴨居 啓人 | Algomatic 公式サイト「私たちについて」(algomatic.jp/about) |
| 橘 大地 | 日本の人事部 インタビュー記事 (jinjibu.jp/article/detl/topinterview/3625/) |
| 小澤 健祐 | AIsmiley ウェビナーページ (aismiley.co.jp/webinar/aihakusummer20252a-5/) |
| 小野 和俊 | type（エンジニアtype）記事 OG画像 (type.jp/et/feature/14193/)。2020年撮影 |
| 成田 敏博 | Salesforce 日本ブログ インタビュー (salesforce.com/jp/blog/jp-cio-interview-nisshin/) |
| 小田 健太郎・越川 滋代 | 本人と確認できる写真が見つからず、仮の肖像のまま |

## ロゴ・追加写真の出典
- ロゴは各社の公式サイトで公開されている画像（DMM.com／Algomatic／Google Cloud／セゾンカード／LINEヤフー／日清食品グループ／PeopleX／デジライズ／AICX協会）。掲載には各社の許諾が必要です。
- 茶圓 将裕: デジライズ公式サイトの役員紹介写真。小田 健太郎・越川 滋代: ご提供いただいた写真。

- 尾形 哲也: 写真は講師紹介サイト（koushi-select.com）、経歴は早稲田大学・researchmap・日経サイエンス等の公開情報。
