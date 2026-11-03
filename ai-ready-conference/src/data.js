/* ===== AI READY CONFERENCE 2027 — content data =====
   登壇者の掲載/非掲載は status と hidden で切り替え可能。
   photo: 'assets/speakers/xxx.jpg' を指定すると実写真に差し替わります（未指定は生成ポートレート）。
   verify: true の項目は肩書き・表記の最終確認が必要。 */
window.SPEAKERS = [
  { id:'oda',     status:'confirmed', name:'小田 健太郎', en:'Kentaro Oda', org:'Google Cloud', role:'', session:'common', photo:'assets/speakers/oda.jpg', verify:true },
  { id:'tachibana',status:'confirmed',name:'橘 大地', en:'Daichi Tachibana', org:'PeopleX', role:'代表取締役 CEO', session:'s1', photo:'assets/speakers/tachibana.jpg' },
  { id:'ozawa',   status:'confirmed', name:'小澤 健祐', en:'Kensuke Ozawa', alias:'おざけん', org:'AICX協会', role:'代表理事', session:'closing', photo:'assets/speakers/ozawa.jpg' },
  { id:'chaen',   status:'confirmed', name:'茶圓 将裕', en:'Masahiro Chaen', org:'デジライズ', role:'代表取締役 CEO', session:'s2', photo:'assets/speakers/chaen.jpg' },
  { id:'ono',     status:'expected',  name:'小野 和俊', en:'Kazutoshi Ono', org:'クレディセゾン', role:'取締役 専務執行役員 CDO/CTO', session:'e1', photo:'assets/speakers/ono.jpg', verify:true },
  { id:'narita',  status:'expected',  name:'成田 敏博', en:'Toshihiro Narita', org:'日清食品ホールディングス', role:'執行役員 CIO', session:'e2', photo:'assets/speakers/narita.jpg', verify:true },
  { id:'koshikawa',status:'expected', name:'越川 滋代', en:'Shigeyo Koshikawa', org:'LINEヤフー', role:'', session:null, photo:'assets/speakers/koshikawa.jpg', verify:true },
  { id:'kamoi',   status:'confirmed', name:'鴨居 啓人', en:'Hiroto Kamoi', org:'Algomatic', role:'代表取締役 CEO', session:'k2', photo:'assets/speakers/kamoi.jpg', verify:true }
];
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
    ent:{ id:'e3', tag:'ENTERPRISE 3', title:'Physical AIと、産業・現場の変革', who:['tbd:調整中'] },
    smb:{ id:'s3', tag:'GROWTH 3', title:'AI人材育成と現場定着の実践', who:['tbd:調整中'] } },
  { t:'16:10', e:'16:20', type:'break', title:'全体へ再集合' },
  { t:'16:20', e:'17:00', id:'closing', tag:'CLOSING SESSION', title:'AI投資・発注判断のリアル', who:['ozawa','tbd:Enterprise登壇者'], pair:true },
  { t:'17:00', e:'17:10', id:'end', tag:'CLOSING', title:'総括・今後のご案内', who:[] }
];
