/* ===== AI READY CONFERENCE 2027 — content data =====
   status: 'confirmed'=出演承諾を確認済み / 'expected'=承諾未確認。※画面上の表示は全員「登壇予定」に統一（ご指示）。内部管理用に値は保持。
   承諾の根拠は進行管理表の記録のみ。他イベントへの出演実績・過去の発表は根拠にしない。
   photo: 'assets/speakers/xxx.jpg' を指定すると実写真に差し替わります（未指定は生成ポートレート）。
   verify: true の項目は肩書き・表記の最終確認が必要。 */
window.SPEAKERS = [
  { id:'ogata',   status:'expected' , name:'尾形 哲也', en:'Tetsuya Ogata', org:'早稲田大学', role:'', session:'closing', photo:'assets/speakers/ogata.jpg', verify:true },
  { id:'oda',     status:'confirmed', name:'小田 健太郎', en:'Kentaro Oda', org:'Google Cloud', role:'', session:'common', photo:'assets/speakers/oda.jpg', verify:true },
  { id:'koshikawa',status:'expected', name:'越川 滋代', en:'Shigeyo Koshikawa', org:'LINEヤフー', role:'', session:'e3', photo:'assets/speakers/koshikawa.jpg', verify:true },
  { id:'narita',  status:'expected',  name:'成田 敏博', en:'Toshihiro Narita', org:'日清食品ホールディングス', role:'執行役員 CIO', session:'e2', photo:'assets/speakers/narita.jpg', verify:true },
  { id:'ono',     status:'expected',  name:'小野 和俊', en:'Kazutoshi Ono', org:'クレディセゾン', role:'取締役 専務執行役員 CDO/CTO', session:'e1', photo:'assets/speakers/ono.jpg', verify:true },
  { id:'tachibana',status:'confirmed',name:'橘 大地', en:'Daichi Tachibana', org:'PeopleX', role:'代表取締役 CEO', session:'s1', photo:'assets/speakers/tachibana.jpg' },
  { id:'ozawa',   status:'confirmed', name:'小澤 健祐', en:'Kensuke Ozawa', alias:'おざけん', org:'AICX協会', role:'代表理事', session:'e2', sessions:['e2','solo'], photo:'assets/speakers/ozawa.jpg' },
  { id:'chaen',   status:'confirmed', name:'茶圓 将裕', en:'Masahiro Chaen', org:'デジライズ', role:'代表取締役 CEO', session:'s2', photo:'assets/speakers/chaen.jpg' },
  { id:'kamoi',   status:'confirmed', name:'鴨居 啓人', en:'Hiroto Kamoi', org:'Algomatic', role:'代表取締役 CEO', session:'k2', photo:'assets/speakers/kamoi.jpg', verify:true }
];

/* 経歴・実績（公開情報を要約。掲載前に本人・所属先の確認が必要） */
window.BIOS = {
  ogata:{ role:'基幹理工学部 教授／AIロボット研究所 所長', hl:'AIロボット協会 理事長／文部科学大臣表彰 科学技術賞',
    bio:['早稲田大学 理工学術院 基幹理工学部 教授。次世代ロボット研究機構 AIロボット研究所 所長（2020年〜）','一般社団法人AIロボット協会 理事長（2025年〜）。産業技術総合研究所 人工知能研究センター 特定フェロー','深層学習・生成AIとロボットを組み合わせた「認知ロボティクス」の第一人者。内閣府ムーンショット型研究開発のAIロボット「AIREC」の開発に関わる','2021年 IEEE ICRA Best Paper Award（認知科学部門）、2023年 文部科学大臣表彰 科学技術賞（研究部門）','JST CREST「実環境知能システム」領域 研究総括（2025年〜）。国立情報学研究所 大規模言語モデル研究開発センター 客員教授'] },
  kamoi:{ role:'代表取締役 CEO', hl:'元アクセンチュア AIグループ／IPAデジタル人材育成事業 専門委員',
    bio:['株式会社Algomatic 代表取締役CEO。生成AIで「企業のOS」をつくり替える構想を率いる','慶應義塾大学大学院修了後、データサイエンティスト／AIエンジニアとしてアクセンチュアに入社','2024年5月にAlgomaticへ参画。2026年6月にCEOへ就任','IPA（情報処理推進機構）のデジタル人材育成事業に、専門委員として参加'] },
  oda:{ role:'事業開発部長（アジア太平洋地域統括）', hl:'Google Cloud アジア太平洋地域の事業開発を統括',
    bio:['グーグル・クラウド・ジャパン所属。アジア太平洋地域統括 事業開発部 事業開発部長','生成AIを軸にした企業向けセミナー・イベントに登壇','企業のAI導入における、選定・発注・意思決定の判断軸を語る'] },
  tachibana:{ role:'代表取締役 CEO', hl:'元弁護士／「クラウドサイン」事業責任者を経て創業',
    bio:['弁護士として企業法務に従事','弁護士ドットコムで、電子契約サービス「クラウドサイン」の事業責任者を務める','PeopleXを創業。AI面接・AI面談・AIロープレなど、採用から育成までを支援するAIプロダクトを展開'] },
  ozawa:{ role:'代表理事', hl:'経産省 AX時代スキル検討WG委員／著書多数',
    bio:['一般社団法人AICX協会 代表理事。AIエージェント実装人材の育成・認定に取り組む','経済産業省「AX時代におけるスキルのあり方検討ワーキンググループ」委員','著書に『生成AI導入の教科書』『AIエージェントの教科書』','年間300回以上の登壇、AI関連記事1,000本以上を執筆。元AINOW編集長','大分県「DAIB」フェロー。複数のAI企業の取締役も務める'] },
  chaen:{ role:'代表取締役 CEO', hl:'Google Japan Official Geminiアドバイザー／SNS総フォロワー22万人超',
    bio:['2023年に株式会社デジライズを設立。法人向けAI研修・AIソリューションを提供','Google Japan Official Geminiアドバイザー','GMO AI & Web3株式会社 顧問。GMOインターネットグループがデジライズに出資','一般社団法人生成AI活用普及協会 評議員。SNS総フォロワー数22万人以上'] },
  ono:{ role:'取締役 専務執行役員 CDO/CTO', hl:'日本CTO協会 理事／東京都デジタルサービス会議 構成員',
    bio:['Sun Microsystems、アプレッソ創業（データ連携ミドルウェア「DataSpider」）を経て、セゾン情報システムズ（現セゾンテクノロジー）のCTOに就任','2019年にクレディセゾンへ。内製開発組織を、ゼロから約200人規模へ育てる','一般社団法人日本CTO協会 理事','東京都 デジタルサービス会議 構成員'] },
  narita:{ role:'執行役員 CIO（グループ情報責任者）', hl:'ChatGPTを早期導入し、社内利用率50%超へ',
    bio:['日清食品ホールディングス 執行役員 CIO。グループのテクノロジー戦略をリード','アクセンチュア、DeNA、メルカリを経て日清食品ホールディングスへ','ChatGPTを早期に導入し、社内の利用率は早々に50%を超える','2024年3月、IR説明会で「生成AI活用の取り組み」を発表'] },
  koshikawa:{ role:'AI推進ディビジョン', hl:'LINEヤフー全社の生成AI活用・人材育成を推進',
    bio:['LINEヤフー株式会社で、全社の生成AI活用推進を担当','社内向け生成AI教育プログラム「Generative AI Boot Camp」の構築に関与','生成AI推進担当者向けカンファレンス「Generative AI Business Day」に登壇'] }
};
/* kind: common | track ; time は開始-終了 */
window.PROGRAM = [
  { t:'10:00', e:'10:10', type:'break-less', id:'open', tag:'OPENING', title:'趣旨説明・本日の見どころ', who:[] },
  { t:'10:10', e:'10:50', id:'k1', tag:'KEYNOTE 1', title:'AI時代の企業経営・意思決定', who:['special'] },
  { t:'10:50', e:'11:00', type:'break', title:'Break' },
  { t:'11:00', e:'11:40', id:'k2', tag:'KEYNOTE 2', title:'AIを事業変革につなぐ、実装と発注の判断', who:['kamoi'] },
  { t:'11:40', e:'12:00', type:'break', title:'午前のまとめ' },
  { t:'12:00', e:'13:00', type:'break', title:'Lunch Break' },
  { t:'13:00', e:'13:40', id:'common', tag:'COMMON SESSION', title:'AIを選ぶ・任せるための判断軸', who:['oda'] },
  { t:'13:40', e:'13:50', type:'break', title:'トラック切替' },
  { t:'13:50', e:'14:30', type:'tracks',
    ent:{ id:'e1', tag:'ENTERPRISE 1', title:'AI導入の意思決定と、組織横断の推進', who:['ono'] },
    smb:{ id:'s1', tag:'GROWTH 1', title:'採用・人事領域のAI活用', who:['tachibana'] } },
  { t:'14:30', e:'14:40', type:'break', title:'Break' },
  { t:'14:40', e:'15:20', type:'tracks',
    ent:{ id:'e2', tag:'ENTERPRISE 2', title:'全社AI活用と組織変革', who:['narita','ozawa'], pair:true },
    smb:{ id:'s2', tag:'GROWTH 2', title:'成長企業がAI導入で成果を出す方法', who:['chaen'] } },
  { t:'15:20', e:'15:30', type:'break', title:'Break' },
  { t:'15:30', e:'16:10', type:'tracks',
    ent:{ id:'e3', tag:'ENTERPRISE 3', title:'Physical AIと、産業・現場の変革', who:['koshikawa','tbd:産業界ゲスト'], pair:true },
    smb:{ id:'s3', tag:'GROWTH 3', title:'AI人材育成と現場定着の実践', who:['tbd:登壇者未定'] } },
  { t:'16:10', e:'16:20', type:'break', title:'全体へ再集合' },
  { t:'16:20', e:'17:00', id:'closing', tag:'CLOSING SESSION', title:'AI投資・発注判断のリアル', who:['ogata','tbd:Enterprise登壇者'], pair:true },
  { t:'17:00', e:'17:10', id:'end', tag:'CLOSING', title:'総括・今後のご案内', who:[] },
  /* 追加枠: おざけん単身セッション。登壇は決定済みだが、テーマ・時間枠は調整中のため slotStatus で「登壇予定」と表示 */
  { t:'時間枠調整中', e:'', id:'solo', tag:'SPECIAL SESSION', title:'小澤 健祐（おざけん）単身セッション', who:['ozawa'], slotStatus:'登壇予定', note:'テーマ・時間枠は調整中' }
];
