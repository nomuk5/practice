# AI READY CONFERENCE 2027 — サンプルサイト

登壇打診用のサンプルLP（静的サイト）と、住友商事様向けの商談用ページ。

## 構成
- `src/data.js` … 登壇者（`status`: `confirmed`=登壇決定／`expected`=登壇調整中）、経歴（`BIOS`）、プログラム
- `src/body.html` / `src/style.css` / `src/app.js` … 一般向けサイト
- `src/sumitomo.html` / `src/private.css` … 商談用ページ（一般公開しない）
- `build.py` … ビルド
- `assets/speakers/` … 登壇者写真　`assets/key-visual.png` … メインビジュアル
- `CONFIRMATION.md` … **商談前に確認が必要な情報**

## ビルドと閲覧
```bash
python3 build.py
```
- 一般向けサイト: `dist/index.html`（ブラウザで開く）。`dist/artifact.html` は Artifact 公開用の断片
- 商談用ページ: `private/sumitomo.html`（ローカルで開く）。ナビには載せておらず、`dist/` や Artifact の公開物には含まれません
- 写真は `../assets/…` を相対参照するため、リポジトリのフォルダ構成のまま開いてください

## 登壇状況の更新方法
`src/data.js` の `status` を変更して `python3 build.py` を実行すると、登壇者一覧・特集・プロフィール・プログラム・所属企業欄の表示が一括で変わります。承諾を確認できた方のみ `confirmed` にしてください。

## 写真・経歴の出典（Web公開素材。使用前に各権利者へ確認してください）
| 登壇者 | 写真の出典 |
|---|---|
| 鴨居 啓人 | Algomatic 公式サイト「私たちについて」 |
| 橘 大地 | 日本の人事部 インタビュー記事 |
| 小澤 健祐 | AIsmiley ウェビナーページ |
| 小野 和俊 | エンジニアtype 記事画像（2020年） |
| 成田 敏博 | Salesforce 日本ブログ インタビュー |
| 茶圓 将裕 | デジライズ 公式サイト 役員紹介 |
| 尾形 哲也 | 講師紹介サイト（koushi-select.com） |
| 小田 健太郎・越川 滋代 | ご提供いただいた写真 |

経歴・実績（`BIOS`）は、各社公式サイト・PR TIMES・インタビュー記事・研究者データベース等の公開情報の要約です。
