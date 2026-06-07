(function(){
'use strict';

/* ── Knowledge base ── */
var kb = [
  { keys:['hello','hi','hey','howdy','good morning','good afternoon','good evening','greetings','sup'],
    answer:'Hello! 👋 Welcome to Confeanza Tech!\n\nI\'m here to help you with our services, products, pricing, careers, and more.\n\nWhat can I help you with today?' },
  { keys:['service','services','what do you do','what you offer','capabilities','offering'],
    answer:'We provide end-to-end enterprise software services:\n\n• ERP Development & Implementation\n• CRM Platforms\n• AI & Data Analytics\n• Cloud Infrastructure (Azure, AWS, GCP)\n• Mobile App Development\n• Custom Software & Integrations\n• Managed Support\n\nWhich area interests you most?' },
  { keys:['erp','unierp','university erp','campus','admission','student management'],
    answer:'UniERP is our flagship University ERP — a complete campus management platform.\n\nModules include:\n• Admissions & Enrolment\n• Academic Management\n• Finance & HR\n• Student Lifecycle\n• Student Mobile App\n\nUsed by 50+ universities across Asia & the Middle East.' },
  { keys:['medicore','hospital','healthcare','clinic','patient','medical','health system'],
    answer:'MediCore is our Healthcare Information System.\n\nModules include:\n• Patient Management (OPD/IPD)\n• Pharmacy & Laboratory\n• Radiology\n• Billing & Insurance\n• HL7 FHIR compliant\n\nDeployed in hospitals across India and the Middle East.' },
  { keys:['pulse','pulseanalytics','analytics','bi','business intelligence','dashboard','reporting'],
    answer:'PulseAnalytics is our AI-powered Business Intelligence platform.\n\n• Real-time dashboards\n• Predictive analytics\n• Custom reports\n• Integrates with UniERP, MediCore & FlowCRM\n\nPowered by OpenAI, Azure AI, and custom ML models.' },
  { keys:['flowcrm','crm','customer relationship','sales','pipeline','lead'],
    answer:'FlowCRM is our B2B Customer Relationship Management platform.\n\n• Lead & pipeline management\n• Workflow automation\n• Deep ERP integration\n• Mobile CRM app\n\nDesigned for enterprise sales teams.' },
  { keys:['price','pricing','cost','how much','fee','quote','budget','charge','rate'],
    answer:'Our pricing is customized based on:\n\n• Modules & number of users\n• Deployment type (cloud / on-premise)\n• Customization scope\n• Support tier\n\nWe provide a transparent, detailed quote within 2 business days — no hidden fees.\n\nContact us to get a free quote! 👉' },
  { keys:['contact','reach','email','phone','call','get in touch','talk','speak'],
    answer:'You can reach us at:\n\n📧 info@confeanzatech.com\n📞 India: +91 9528686839\n📞 US: +1 (505) 507-0885\n\nOr use our Contact form — we respond within 1 business day.' },
  { keys:['location','office','address','where','noida','india','headquarter'],
    answer:'Our HQ is in:\n\n📍 Noida Sector-62\nUttar Pradesh 201309, India\n\nWe deliver projects globally — US, UK, Middle East, Southeast Asia, and Europe.' },
  { keys:['demo','trial','demonstration','see product','see platform','show me'],
    answer:'We\'d love to give you a live demo! 🎯\n\nVisit our Contact page and select "Product Demo" as your Service Interest.\n\nWe\'ll schedule a personalized demo within 2 business days — no commitment required.' },
  { keys:['career','job','hiring','vacancy','opening','join','fresher','trainee','internship','work with us'],
    answer:'We\'re currently hiring! 🚀\n\nOpen positions:\n• Graduate Trainee — Software Engineer\n• Fresher — Frontend Developer (Angular)\n• Fresher — Backend Developer (.NET / Java)\n• Trainee — QA & Software Testing\n• Trainee — Business Analyst\n• QA Engineer (Manual, 1–2 yrs)\n\nVisit our Open Positions page to apply!' },
  { keys:['support','technical support','issue','problem','bug','maintenance'],
    answer:'For technical support:\n\n📧 info@confeanzatech.com\n\nSupport tiers:\n• Standard — Business hours\n• Professional — 16/5\n• Enterprise — 24/7\n\nAll plans include a dedicated account manager and SLA-backed response times.' },
  { keys:['about','company','who are you','confeanza','history','founded','background'],
    answer:'Confeanza Tech is a global enterprise software company.\n\n• Specializing in ERP, CRM, AI & Cloud\n• Serving universities, hospitals & corporations\n• HQ: Noida, India\n\nWe build software for organizations that cannot afford to fail. 💪' },
  { keys:['cloud','azure','aws','google cloud','devops','docker','kubernetes','infrastructure'],
    answer:'Our Cloud & DevOps services:\n\n☁️ Microsoft Azure\n☁️ Amazon AWS\n☁️ Google Cloud\n\nWe handle:\n• Architecture & cloud migration\n• CI/CD pipelines\n• Docker & Kubernetes\n• 99.9% uptime SLA\n• Hybrid & on-premise options' },
  { keys:['ai','artificial intelligence','machine learning','ml','openai','automation','chatgpt','gemini','claude'],
    answer:'Our AI & Data capabilities:\n\n🤖 OpenAI & Azure OpenAI integrations\n🤖 Claude & Gemini AI\n🤖 Custom ML model development\n🤖 Intelligent process automation\n🤖 AI-powered analytics & dashboards\n\nWe build practical AI that solves real business problems.' },
  { keys:['mobile','app','android','ios','application','react native'],
    answer:'We build cross-platform enterprise mobile apps using React Native.\n\n• iOS & Android\n• Integrated with your ERP/CRM\n• Offline-capable\n• Role-based access control\n• Push notifications\n\nDeployable to App Store & Google Play.' },
  { keys:['thank','thanks','thank you','great','awesome','perfect','bye','goodbye','see you'],
    answer:'Thank you for chatting with us! 😊\n\nFeel free to come back anytime. Have a wonderful day!\n\n— Confeanza Tech Team' }
];

function getReply(input){
  var t = input.toLowerCase().trim();
  for(var i=0;i<kb.length;i++){
    for(var j=0;j<kb[i].keys.length;j++){
      if(t.indexOf(kb[i].keys[j])!==-1) return kb[i].answer;
    }
  }
  return "I'm not sure about that, but our team would love to help! 😊\n\nYou can reach us at:\n📧 info@confeanzatech.com\n📞 +91 9528686839\n\nOr visit our Contact page to send a message.";
}

/* ── Inject CSS ── */
var s=document.createElement('style');
s.textContent=[
  '#ct-wrap *{box-sizing:border-box}',
  '#ct-btn{position:fixed;bottom:28px;right:28px;z-index:9999;width:56px;height:56px;border-radius:50%;background:#4f46e5;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(79,70,229,0.45);transition:transform .2s,box-shadow .2s}',
  '#ct-btn:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(79,70,229,0.55)}',
  '#ct-btn svg{width:26px;height:26px;stroke:#fff;stroke-width:1.8;fill:none;position:absolute;transition:opacity .2s,transform .2s}',
  '#ct-btn .ico-chat{opacity:1;transform:scale(1)}',
  '#ct-btn .ico-x{opacity:0;transform:scale(0.6)}',
  '#ct-btn.open .ico-chat{opacity:0;transform:scale(0.6)}',
  '#ct-btn.open .ico-x{opacity:1;transform:scale(1)}',
  '#ct-badge{position:absolute;top:-3px;right:-3px;width:18px;height:18px;border-radius:50%;background:#ef4444;color:#fff;font-size:10px;font-weight:700;font-family:Inter,sans-serif;display:flex;align-items:center;justify-content:center;border:2px solid #fff;animation:ct-pulse 2s infinite}',
  '#ct-badge.hide{display:none}',
  '@keyframes ct-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}',
  '#ct-panel{position:fixed;bottom:96px;right:28px;z-index:9998;width:360px;max-width:calc(100vw - 32px);max-height:calc(100vh - 120px);background:#fff;border-radius:20px;box-shadow:0 12px 48px rgba(0,0,0,0.15),0 4px 16px rgba(0,0,0,0.08);overflow:hidden;display:flex;flex-direction:column;opacity:0;transform:translateY(16px) scale(0.97);pointer-events:none;transition:opacity .25s ease,transform .25s ease}',
  '#ct-panel.open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}',
  '#ct-head{background:linear-gradient(135deg,#4f46e5 0%,#6366f1 100%);padding:16px 20px;display:flex;align-items:center;gap:12px}',
  '#ct-av{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0}',
  '#ct-av svg{width:22px;height:22px;stroke:#fff;stroke-width:1.5;fill:none}',
  '#ct-hinfo{flex:1}',
  '#ct-hinfo strong{display:block;color:#fff;font-size:14px;font-weight:700;font-family:"Space Grotesk",sans-serif;letter-spacing:-0.01em}',
  '#ct-hinfo span{font-size:11px;color:rgba(255,255,255,0.75);display:flex;align-items:center;gap:5px}',
  '#ct-dot{width:7px;height:7px;border-radius:50%;background:#4ade80;flex-shrink:0}',
  '#ct-msgs{flex:1;min-height:120px;max-height:290px;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;background:#f8f9fb;scroll-behavior:smooth}',
  '#ct-msgs::-webkit-scrollbar{width:4px}',
  '#ct-msgs::-webkit-scrollbar-thumb{background:#e2e8f0;border-radius:4px}',
  '.ctm{max-width:84%;display:flex;flex-direction:column;gap:3px;animation:ctfade .2s ease}',
  '@keyframes ctfade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}',
  '.ctm.bot{align-self:flex-start}',
  '.ctm.usr{align-self:flex-end}',
  '.ctb{padding:10px 14px;border-radius:14px;font-size:13px;line-height:1.65;white-space:pre-line;word-break:break-word;font-family:Inter,sans-serif}',
  '.ctm.bot .ctb{background:#fff;color:#0f172a;border:1px solid #e2e8f0;border-bottom-left-radius:4px}',
  '.ctm.usr .ctb{background:#4f46e5;color:#fff;border-bottom-right-radius:4px}',
  '.ctt{font-size:10px;color:#94a3b8;padding:0 4px;font-family:Inter,sans-serif}',
  '.ctm.usr .ctt{text-align:right}',
  '#ct-typing{align-self:flex-start;background:#fff;border:1px solid #e2e8f0;border-radius:14px;border-bottom-left-radius:4px;padding:10px 14px;display:none;align-items:center;gap:4px}',
  '#ct-typing.show{display:flex}',
  '.ctd{width:7px;height:7px;background:#94a3b8;border-radius:50%;animation:ctbounce 1s infinite}',
  '.ctd:nth-child(2){animation-delay:.18s}',
  '.ctd:nth-child(3){animation-delay:.36s}',
  '@keyframes ctbounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}',
  '#ct-quick{display:flex;flex-wrap:wrap;gap:6px;padding:10px 14px;background:#f8f9fb;border-top:1px solid #e8ecf0}',
  '.ctq{padding:5px 12px;border-radius:100px;font-size:11px;font-weight:600;color:#4f46e5;background:#eef2ff;border:1px solid #c7d2fe;cursor:pointer;transition:all .15s;white-space:nowrap;font-family:Inter,sans-serif}',
  '.ctq:hover{background:#4f46e5;color:#fff;border-color:#4f46e5}',
  '#ct-foot{display:flex;align-items:center;gap:8px;padding:12px 14px;border-top:1px solid #e2e8f0;background:#fff}',
  '#ct-inp{flex:1;border:1px solid #e2e8f0;border-radius:10px;padding:9px 12px;font-size:13px;color:#0f172a;outline:none;transition:border-color .15s,box-shadow .15s;font-family:Inter,sans-serif;background:#fff}',
  '#ct-inp:focus{border-color:#4f46e5;box-shadow:0 0 0 3px rgba(79,70,229,0.1)}',
  '#ct-inp::placeholder{color:#94a3b8}',
  '#ct-send{width:36px;height:36px;border-radius:9px;background:#4f46e5;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s}',
  '#ct-send:hover{background:#4338ca}',
  '#ct-send svg{width:15px;height:15px;stroke:#fff;stroke-width:2;fill:none}',
  '@media(max-width:520px){#ct-panel{left:12px;right:12px;bottom:80px;width:auto;max-width:none;max-height:calc(100dvh - 100px);border-radius:16px}#ct-btn{right:16px;bottom:16px}#ct-msgs{max-height:none}#ct-quick{gap:5px;padding:8px 12px}}'
].join('');
document.head.appendChild(s);

/* ── Inject HTML ── */
var qList=['Our Services','Pricing','Book a Demo','Contact Us','Careers'];
var wrap=document.createElement('div');
wrap.id='ct-wrap';
wrap.innerHTML=
  '<button id="ct-btn" aria-label="Chat with us">'
    +'<span id="ct-badge">1</span>'
    +'<svg class="ico-chat" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>'
    +'<svg class="ico-x" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'
  +'</button>'
  +'<div id="ct-panel">'
    +'<div id="ct-head">'
      +'<div id="ct-av"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>'
      +'<div id="ct-hinfo"><strong>Confeanza Tech</strong><span><span id="ct-dot"></span>Online — replies instantly</span></div>'
    +'</div>'
    +'<div id="ct-msgs"><div id="ct-typing"><span class="ctd"></span><span class="ctd"></span><span class="ctd"></span></div></div>'
    +'<div id="ct-quick">'+qList.map(function(q){return'<button class="ctq">'+q+'</button>';}).join('')+'</div>'
    +'<div id="ct-foot">'
      +'<input id="ct-inp" placeholder="Type your message..." autocomplete="off" maxlength="300">'
      +'<button id="ct-send"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>'
    +'</div>'
  +'</div>';
document.body.appendChild(wrap);

/* ── Logic ── */
var btn=document.getElementById('ct-btn');
var panel=document.getElementById('ct-panel');
var msgs=document.getElementById('ct-msgs');
var inp=document.getElementById('ct-inp');
var badge=document.getElementById('ct-badge');
var typing=document.getElementById('ct-typing');
var isOpen=false, greeted=false;

function timeNow(){
  var d=new Date(),h=d.getHours(),m=d.getMinutes(),a=h>=12?'PM':'AM';
  h=h%12||12;
  return h+':'+(m<10?'0'+m:m)+' '+a;
}

function addMsg(text,from){
  var el=document.createElement('div');
  el.className='ctm '+from;
  el.innerHTML='<div class="ctb">'+text+'</div><span class="ctt">'+timeNow()+'</span>';
  msgs.insertBefore(el,typing);
  msgs.scrollTop=msgs.scrollHeight;
}

function botReply(text){
  typing.classList.add('show');
  msgs.scrollTop=msgs.scrollHeight;
  setTimeout(function(){
    typing.classList.remove('show');
    addMsg(text,'bot');
  }, 800+Math.min(text.length*6,1200));
}

function send(text){
  text=(text||inp.value).trim();
  if(!text) return;
  inp.value='';
  addMsg(text,'usr');
  botReply(getReply(text));
}

btn.addEventListener('click',function(){
  isOpen=!isOpen;
  btn.classList.toggle('open',isOpen);
  panel.classList.toggle('open',isOpen);
  badge.classList.add('hide');
  if(isOpen && !greeted){
    greeted=true;
    botReply('Hello! 👋 Welcome to Confeanza Tech!\n\nI\'m here to help you with our services, products, pricing, and more.\n\nWhat can I help you with today?');
  }
  if(isOpen) setTimeout(function(){inp.focus();},300);
});

document.getElementById('ct-send').addEventListener('click',function(){send();});
inp.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}});

document.querySelectorAll('.ctq').forEach(function(q){
  q.addEventListener('click',function(){send(q.textContent);});
});

/* Quick reply keyword map */
var qMap={
  'Our Services':'services',
  'Pricing':'pricing',
  'Book a Demo':'demo',
  'Contact Us':'contact',
  'Careers':'careers'
};
document.querySelectorAll('.ctq').forEach(function(q){
  q.addEventListener('click',function(){
    var key=qMap[q.textContent]||q.textContent;
    send(key);
  });
});

})();
