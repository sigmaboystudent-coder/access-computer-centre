/* ===== Helpers ===== */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const store = { get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }, set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2600); }
const openModal = id => $('#' + id).classList.add('open');
const closeModal = id => $('#' + id).classList.remove('open');

/* ===== Language (Hindi / English) ===== */
let lang = store.get('acec_lang', 'en');
const L = {
  hi: { olcode: 'O-Level कोडिंग', x_rev: 'गलत जवाब देखें', x_retryW: 'गलत सवाल दोबारा', x_card: 'रिज़ल्ट कार्ड', x_share: 'WhatsApp पर शेयर', x_best: 'बेस्ट', x_yourA: 'आपका उत्तर', x_rightA: 'सही उत्तर', x_noWrong: 'वाह! एक भी जवाब गलत नहीं 🎉', x_trIng: '🌐 हिन्दी अनुवाद हो रहा है…', x_trFail: '⚠ अनुवाद नहीं हो सका (इंटरनेट जाँचें), मूल भाषा दिख रही है', x_skip: 'छोड़ा गया', home: 'होम', gallery: 'गैलरी', courses: 'कोर्सेस', faculty: 'फैकल्टी', ccc: 'CCC टेस्ट', ol: 'O-Level टेस्ट', typing: 'टाइपिंग', lb: 'लीडरबोर्ड', contact: 'संपर्क', cta1: 'CCC टेस्ट दें', cta2: 'कोर्स देखें', login: 'लॉगिन', satBtn: 'शनिवार टेस्ट शुरू करें', searchPh: 'टेस्ट, कोर्स या सवाल खोजें...', start: 'टेस्ट शुरू करें', nq: '{n} प्रश्न', soonS: 'जल्द आ रहा है', soon: 'इस चैप्टर के प्रश्न जल्द जोड़े जाएँगे', loginFirst: 'पहले लॉगिन करें', qOf: 'प्रश्न {i} / {n}', next: 'अगला प्रश्न ➔', result: 'परिणाम देखें', sat: 'शनिवार टेस्ट', back: 'वापस जाएँ', done: 'टेस्ट पूरा हुआ', sc: '{p}% स्कोर।', m1: 'शानदार प्रदर्शन! 🎉', m2: 'अच्छा प्रयास, थोड़ा और अभ्यास करें।', m3: 'कोई बात नहीं, दोबारा कोशिश करें।', exitT: 'टेस्ट छोड़ना चाहते हैं?', exitQ: 'क्या आप टेस्ट से बाहर आना चाहते हैं? आपकी प्रगति सेव रहेगी।', cancel: 'रद्द करें', yes: 'हाँ, बाहर जाएँ', resumeT: 'आपका टेस्ट अधूरा है', resumeQ: 'आपने {n} में से {i} प्रश्न हल किए हैं। वहीं से जारी रखें या शुरू से करें?', resume: '▶ Resume', restart: '↺ Starting से', noRes: 'कोई परिणाम नहीं मिला', sugg: 'लोकप्रिय टेस्ट', tTest: 'टेस्ट', tCourse: 'कोर्स', tSec: 'सेक्शन', tQ: 'प्रश्न', empty: 'अभी कोई एंट्री नहीं है। शनिवार टेस्ट देने वाले पहले बनें!', chap: 'चैप्टर', saved: 'सेव: {i}/{n}' },
  en: { olcode: 'O-Level Coding', x_rev: 'Review wrong answers', x_retryW: 'Retry wrong questions', x_card: 'Result card', x_share: 'Share on WhatsApp', x_best: 'Best', x_yourA: 'Your answer', x_rightA: 'Correct answer', x_noWrong: 'Wow! No wrong answers 🎉', x_trIng: '🌐 Translating to English…', x_trFail: '⚠ Could not translate (check internet), showing original', x_skip: 'Skipped', home: 'Home', gallery: 'Gallery', courses: 'Courses', faculty: 'Faculty', ccc: 'CCC Test', ol: 'O-Level Test', typing: 'Typing', lb: 'Leaderboard', contact: 'Contact', cta1: 'Take CCC Test', cta2: 'View Courses', login: 'Login', satBtn: 'Start Saturday Test', searchPh: 'Search tests, courses or questions...', start: 'Start Test', nq: '{n} Questions', soonS: 'Coming soon', soon: 'Questions for this chapter will be added soon', loginFirst: 'Please login first', qOf: 'Question {i} / {n}', next: 'Next Question ➔', result: 'See Result', sat: 'Saturday Test', back: 'Go Back', done: 'Test Complete', sc: '{p}% score.', m1: 'Outstanding performance! 🎉', m2: 'Good effort, practise a little more.', m3: 'No worries, try again and improve.', exitT: 'Leave the test?', exitQ: 'Do you want to leave the test? Your progress will be saved.', cancel: 'Cancel', yes: 'Yes, leave', resumeT: 'You have an unfinished test', resumeQ: 'You have completed {i} of {n} questions. Resume from there or start over?', resume: '▶ Resume', restart: '↺ Start Over', noRes: 'No results found', sugg: 'Popular tests', tTest: 'Test', tCourse: 'Course', tSec: 'Section', tQ: 'Question', empty: 'No entries yet. Be the first to take the Saturday Test!', chap: 'Chapter', saved: 'Saved: {i}/{n}' }
};
const t = (k, v) => { let s = (L[lang] && L[lang][k]) ?? L.en[k] ?? k; if (v) for (const x in v) s = s.replace('{' + x + '}', v[x]); return s; };

/* ===== Hindi / English: ek hi switch (app + Google Translate widget sync) ===== */
let _gtCur = null, _gtTry = 0;
function gtSync() {
  const sel = document.querySelector('.goog-te-combo');
  if (!sel) { if (_gtTry++ < 30) setTimeout(gtSync, 400); return; }
  if (_gtCur === null && lang === 'en' && !/googtrans=\/en\/hi/.test(document.cookie)) { _gtCur = 'en'; return; }
  if (_gtCur === lang) return;
  _gtCur = lang;
  sel.value = lang === 'hi' ? 'hi' : ([...sel.options].some(o => o.value === 'en') ? 'en' : '');
  sel.dispatchEvent(new Event('change'));
}
function changeLanguage(code) {
  lang = code === 'hi' ? 'hi' : 'en'; store.set('acec_lang', lang); applyLang();
  toast(lang === 'hi' ? 'भाषा: हिन्दी' : 'Language: English');
}

/* ===== Data ===== */
const COURSES = [
  ['🖥️', 'CCC', 'Course on Computer Concepts, government exams ke liye'],
  ['🎓', "O'LEVEL", 'NIELIT IT foundation course'],
  ['💼', 'ADCA', 'Advanced Diploma in Computer Applications'],
  ['📚', 'PGDCA', 'Post Graduate Diploma in Computer Applications'],
  ['🧾', 'Tally', 'Accounting aur GST ki practical training'],
  ['📊', 'MS Office / Excel', 'Word, Excel, PowerPoint aur advanced Excel'],
  ['🌐', 'HTML / CSS / JS', 'Website banana seekhein'],
  ['🐍', 'Python', 'Programming basics se projects tak'],
  ['📡', 'IoT', 'Internet of Things ki basics'],
  ['⌨️', 'English Typing', 'Speed aur accuracy ki practice']
];
const CCC = [
  ['c1', 'Introduction to Computer', 50], ['c2', 'Introduction to Operating System', 50],
  ['c3', 'LibreOffice Writer', 100], ['c4', 'LibreOffice Calc', 70], ['c5', 'LibreOffice Impress', 80],
  ['c6', 'Introduction to Internet and WWW', 100], ['c7', 'E-Governance & Digital Financial Services', 100],
  ['c8', 'Overview of Future Skills & Cyber Security', 100], ['c9', 'Indian Language Digital Services & Emerging Tech', 100]
];
const OL = [
  ['o1', 'IT Tools & Network Basics', 520], ['o2', 'Web Designing & Publishing', 558],
  ['o3', 'Python Programming Advance', 100], ['o4', 'Internet of Things - IoT', 100], ['o5', 'Advanced IT Systems & Security', 100]
];
const DAILY = [
  ['LibreOffice Writer me Save As ki shortcut key kya hai?', 'Ctrl + Shift + S'],
  ['HTML me sabse badi heading tag kaunsi hoti hai?', '<h1>']
];

/* Question bank: [question, [4 options], correctIndex]
   Apne purane questions yahan isi format me paste karein, chapter id (c1, c2, o1...) ke andar. */
const QB = {
  c1: [
    ['पहले से शुरू कंप्यूटर को दोबारा से शुरू करना कहलाता है?', ['वार्म बूटिंग', 'कोल्ड बूटिंग', 'लॉगइन ऑफ', 'शट डाउन'], 0],
    ['माउस में बटन की संख्या कितनी होती है?', ['2', '3', '4', 'a, b both'], 3],
    ['PNG का पूरा नाम क्या है?', ['Portable Network Group', 'Portable Net Graphics', 'Portable Network Graphics', 'Non of these'], 2],
    ['..........किलोबाइट से 1 मेगाबाइट बनता है?', ['256', '1024', '128', '512'], 1],
    ['Computer Monitor पर Blink होने वाला चिन्ह कहलाता है?', ['Pointer', 'Mouse', 'Track ball', 'Cursor'], 3],
    ['वर्चुअल मेमोरी का आकार ... पर निर्भर करता है?', ['डेटाबेस पर', 'ऐड्रेस लाइन पर', 'डिस्क स्पेस पर', 'उपरोक्त सभी'], 2],
    ['Computer CPU में Memory, Control और............. तीन यूनिट होते है?', ['अर्थमैटिक/लॉजिक', 'Input-Output', 'माइक्रोप्रोसेसर', 'None'], 0],
    ['ENIAC का पूरा नाम क्या है?', ['Electronic Numerical Integrator and Coder', 'Electronic Numerical Integrator and Computer', 'Electronic Numerical Interpreter and Computer', 'Electronic Numerical Isolator and Computer'], 1],
    ['फर्मवेयर का अर्थ है?', ['हार्डवेयर का सॉफ्टवेयर', 'एप्लीकेशन सॉफ्टवेयर', 'सिस्टम सॉफ्टवेयर', 'उपरोक्त सभी'], 0],
    ['कंप्यूटर की पांचवी पीढ़ी में किसका प्रयोग हुआ?', ['IC', 'Transistor', 'ULSI', 'None of these'], 2],
    ['माउस के माध्यम से किसी Object की properties देखने के लिए क्या करेंगे?', ['Shift Clicking', 'Right Clicking', 'Dropping', 'Dragging'], 1],
    ['USB Device किस सरंचना का अनुसरण करता है?', ['Halfman', 'Hash', 'List', 'Tree'], 3],
    ['स्पैम किससे संबंधित है?', ['Art', 'Song', 'Computer', 'Game'], 2],
    ['निम्न में से आउटपुट डिवाइस नहीं है?', ['डिजिटल कैमरा', 'CRT मॉनिटर', 'ईयर फोंस', 'प्लॉटर'], 0],
    ['निम्नलिखित में कौनसा पॉइंटिंग डिवाइस नहीं है?', ['Optical Pen', 'Mouse', 'Joy Stick', 'Scanner'], 3],
    ['Inkjet Printer में पाई जाने वाली रंगीन स्याही की बोतल में मूल रंगो की संख्या........... होती है?', ['3', '2', '10', '30'], 0],
    ['Data Processing से आशय है?', ['डाटा को व्यवस्थित करना', 'डाटा को उपयोगी बनाना', 'डेटा का संग्रह करना', 'उपरोक्त सभी'], 3],
    ['IBM का पूर्ण रूप है?', ['इंडियन बिजनेस मशीन', 'इंटरनेशनल बिजनेस मशीन', 'इटालियन बिजनेस मशीन', 'इंटीग्रल बिजनेस मशीन'], 1],
    ['Microprocessor के निर्माता कौन है?', ['Apple', 'Intel', 'IBM', 'HCL'], 1],
    ['MP3....... है?', ['माउस', 'प्रिंटर', 'साउंड फॉर्मेट', 'मोबाइल फोन'], 2],
    ['Computer का वह भाग जिसे हम छू नहीं सकते?', ['Hardware', 'Software', 'Monitor', 'CPU'], 1],
    ['इनपुट को आउटपुट में रूपांतरण कौन करता है?', ['सी.पी.यू.', 'मेमोरी', 'स्टोरेज', 'पेरीफेरल्स'], 0],
    ['Firewall है?', ['कंप्यूटर को नुक्सान पहुंचाता है', 'ऑपरेटिंग सिस्टम हैं', 'कंप्यूटर की सुरक्षा करता है', 'All of the above'], 2],
    ['पुनः प्रयोग की जा सकने वाली ऑप्टिकल स्टोरेज का संक्षिप्त नाम होगा।', ['CD', 'DVD', 'ROM', 'RW'], 3],
    ['निम्नलिखित में सबसे बड़ा कौन है?', ['PB', 'TB', 'ZB', 'EB'], 2],
    ['एक USB PenDrive किस प्रकार की स्टोरेज डिवाइस में अंतर्गत आती है?', ['Secondary', 'Primary', 'Both', 'None'], 0],
    ['Bit का समूह कहलाता है?', ['Nibble', 'Record', 'Word', 'Byte'], 3],
    ['निम्न से से कौनसी कुंजी, कर्सर के बाई तरफ के अक्षर को मिटाती है?', ['Space bar', 'Backspace', 'Delete', 'Non of these'], 1],
    ['CPU और I/O के बीच सिग्नलों के Movement को कौन नियंत्रित करता है?', ['CU', 'ALU', 'Memory unit', 'None'], 0],
    ['मॉनिटर है?', ['Storage device', 'Processing device', 'Output device', 'Input device'], 2],
    ['Recycle Bin स्वतः कॉन्फ़िगर हो जाता है ताकि यह आपके Computer की Hard Disk का डाटा को स्टोर करने के योग्य हो जाए?', ['10%', '1%', '5%', '15%'], 2],
    ['निम्नलिखित में कौन सा सिंबल हेक्साडेसिमल नंबर सिस्टम के द्वारा प्रयोग किया जाता है?', ['0-7', '0-9, A-F', '0-9', 'None'], 1],
    ['WORM का पूरा नाम क्या होगा?', ['Write On Random Memory', 'Write Once Read Many', 'Work On Real Memory', 'None'], 1],
    ['Bluetooth की खोज किसके द्वारा की गई?', ['Martin Cooper', 'Steve Jobs', 'Apple', 'Ericson (Jaap Haartsen)'], 3],
    ['Telephone नंबर जन्म-तिथि और ग्राहक का नाम किसका उदाहरण है?', ['एक फाइल', 'डाटा', 'एक डेटाबेस', 'एक रिकॉर्ड'], 3],
    ['कंप्यूटर की तीसरी पीढ़ी में किसका प्रयोग हुआ?', ['Integrated circuits', 'Transistor', 'Vacuum Tube', 'microprocessors'], 0],
    ['Printer की गुणवत्ता इस पर निर्भर करती है कि Image को Print करने में कितने प्रयुक्त होते हैं?', ['Pixel', 'DPI', 'Paper', 'PPM'], 1],
    ['निम्नलिखित में से परमानेंट मेमोरी है?', ['ROM', 'RAM', 'CD-ROM', 'CPU'], 0],
    ['नीचे दिए गए में हार्डवेयर का उदाहरण नहीं है?', ['Mouse', 'Monitor', 'Printer', 'Operating system'], 3],
    ['निम्नलिखित में कौन कौनसे कंप्यूटर CPU के मुख्य घटक कहलाते है?', ['CU', 'ALU', 'Memory', 'All of Above'], 3],
    ['UNIVAC का पूर्ण रूप क्या है?', ['Universal Automatics Company', 'Universal Automaticserial Computer', 'Universal Automatic Computer', 'None'], 2],
    ['Hierarchy क्या है?', ['स्टोरेज डिवाइस', 'एक नेटवर्क', 'कंप्यूटर के मेमोरी को क्रम में दर्शाता है', 'इनमें से कोई नहीं'], 2],
    ['सीपीयू ....... के नाम से भी जाना जाता है।', ['Execute', 'Microprocessor', 'Microchip', 'Mini Computer'], 1],
    ['MICR में R का क्या मतलब होता है?', ['Recognition', 'Recognize', 'Reader', 'Reading'], 0],
    ['सामान्य कुंजीपटल में कितने बटन पाए जाते है?', ['111', '123', '101', '134'], 2],
    ['Hybrid Computer में....... का प्रयोग किया जाता है?', ['एनालॉग संकेतों का', 'डिजिटल संकेतों का', 'उपरोक्त दोनों का', 'कोई नहीं'], 2],
    ['Computer का कार्य नहीं है?', ['Input', 'Understanding', 'Output', 'Controlling'], 1],
    ['DECIMAL Number System का आधार है?', ['10', '8', '3', 'None'], 0],
    ['निम्नलिखित स्टोरेज डिवाइस को एक स्थान से दूसरे स्थान पर आसानी से नहीं लेकर जा सकते है?', ['Pendrive', 'CD', 'DVD', 'Harddisk'], 3],
    ['निम्नलिखित में कौनसा इंटरनेट से संबंधित नहीं है?', ['Links', 'Browser', 'Search Engine', 'Printer'], 3]
  ],
  c2: [
    ['Linux ऑपरेटिंग सिस्टम में कर्नेल (Kernel) का मुख्य कार्य क्या है?', ['Hardware & Software Management', 'Web Browsing', 'Antivirus Scanning', 'Text Editing'], 0],
    ['Windows OS में किसी फाईल को हमेशा के लिए डिलीट करने की शॉर्टकट की क्या है?', ['Delete', 'Ctrl + Delete', 'Shift + Delete', 'Alt + Delete'], 2],
    ['Linux में डायरेक्टory बनाने के लिए कौन-सी कमांड प्रयुक्त होती है?', ['md', 'mkdir', 'create dir', 'newdir'], 1],
    ['निम्नलिखित में से कौन-सा ओपन सोर्स (Open-Source) ऑपरेटिंग सिस्टम है?', ['Windows 11', 'macOS', 'Windows Server', 'Ubuntu Linux'], 3],
    ['GUI का पूर्ण रूप क्या होता है?', ['Graphical User Interface', 'General User Interface', 'Guided Utility Interaction', 'Grand User Internet'], 0],
    ['Linux फाइल सिस्टम में रूट (Root) डायरेक्टरी को किस चिन्ह से दर्शाया जाता है?', ['\\', '#', '-', '/'], 3],
    ['Windows 10/11 में टास्क मैनेजर (Task Manager) खोलने की शॉर्टकट की क्या है?', ['Ctrl + Alt + Del', 'Ctrl + Shift + Esc', 'Alt + Tab', 'Win + X'], 1],
    ['Linux कमांड लाइन में वर्तमान वर्किंग डायरेक्टरी जानने के लिए क्या टाइप करते हैं?', ['dir', 'ldir', 'pwd', 'showpath'], 2],
    ['निम्नलिखित में से कौन-सा सिंगल-यूज़र ऑपरेटिंग सिस्टम का उदाहरण है?', ['MS-DOS', 'UNIX', 'Windows NT', 'Linux'], 0],
    ['ऑपरेटिंग सिस्टम किस प्रकार का सॉफ्टवेयर है?', ['Application Software', 'System Software', 'Utility Software', 'Programming Tool'], 1],
    ['Linux में किसी फाइल की अनुमति (Permissions) बदलने के लिए कौन-सी कमांड है?', ['change', 'perm', 'chown', 'chmod'], 3],
    ['एक्सटेंशन \'.exe\' सामान्यतः किस प्रकार की फाइलों के लिए होता है?', ['Audio File', 'Text File', 'Executable / Application File', 'Compressed File'], 2],
    ['Windows में खुले हुए सभी विंडोज को मिनिमाइज करके डेस्कटॉप देखने की शॉर्टकट क्या है?', ['Win + M', 'Win + D', 'Alt + D', 'Ctrl + M'], 1],
    ['Linux ऑपरेटिंग सिस्टम का जनक (Creator) कौन है?', ['Bill Gates', 'Dennis Ritchie', 'Linus Torvalds', 'Steve Jobs'], 2],
    ['बूटिंग प्रक्रिया के दौरान कंप्यूटर में कौन-सा प्रोग्राम सबसे पहले लोड होता है?', ['Device Driver', 'MS Word', 'Antivirus', 'BIOS/UEFI'], 3],
    ['Linux में सभी प्रोसेस की सूची देखने के लिए कौन-सी कमांड प्रयोग होती है?', ['ps', 'list', 'task', 'showproc'], 0],
    ['Windows ऑपरेटिंग सिस्टम किस कंपनी द्वारा विकसित किया गया है?', ['Microsoft', 'Apple', 'IBM', 'Google'], 0],
    ['Linux में फाईल सूची (List files) देखने के लिए कौन-सी कमांड है?', ['dir', 'ls', 'show', 'flist'], 1],
    ['निम्नलिखित में से कौन-सा मोबाइल ऑपरेटिंग सिस्टम नहीं है?', ['Android', 'iOS', 'Fedora', 'HarmonyOS'], 2],
    ['विंडोज में डिलीट की गई फाइलें डिफ़ॉल्ट रूप से कहाँ जाती हैं?', ['Temporary Folder', 'System 32', 'Root Folder', 'Recycle Bin'], 3],
    ['Linux ऑपरेटिंग सिस्टम किस भाषा में लिखा गया है?', ['Python', 'C Language', 'C++', 'Java'], 1],
    ['वर्चुअल मेमोरी (Virtual Memory) का प्रबंधन कौन करता है?', ['Operating System', 'CPU Register', 'Hard Disk Firmware', 'BIOS'], 0],
    ['Linux में किसी फाईल को हटाने (Delete) के लिए कौन-सी कमांड है?', ['del', 'erase', 'rm', 'clear'], 2],
    ['DOS प्रॉम्प्ट पर किसी डायरेक्टory को हटाने के लिए कौन-सी कमांड है?', ['rd', 'rmdir', 'a and b both', 'deletedir'], 2],
    ['मल्टीटास्किंग (Multitasking) का अर्थ क्या होता है?', ['एक समय में एक प्रोग्राम चलना', 'इंटरनेट चलाना', 'कई उपयोगकर्ता काम करना', 'एक साथ कई प्रोग्राम चलाना'], 3],
    ['Windows में नया फोल्डर बनाने की शॉर्टकट की क्या है?', ['Ctrl + N', 'Shift + N', 'Alt + N', 'Ctrl + Shift + N'], 3],
    ['Linux में सुपरयूज़र (Root User) बनने के लिए कौन-सी कमांड प्रयुक्त होती है?', ['admin', 'su (Switch User)', 'root', 'login'], 1],
    ['Windows में हेल्प विंडो (Help) खोलने की शॉर्टकट की क्या है?', ['F1', 'F2', 'F5', 'F10'], 0],
    ['निम्नलिखित में से कौन-सा रियल-टाइम ऑपरेटिंग सिस्टम (RTOS) है?', ['VxWorks', 'MS-DOS', 'Windows 10', 'Ubuntu'], 0],
    ['Linux में किसी टेक्स्ट फाइल की सामग्री देखने के लिए कौन-सी कमांड है?', ['read', 'view', 'showtext', 'cat'], 3],
    ['Windows में Rename करने के लिए शॉर्टकट की क्या है?', ['F1', 'F3', 'F2', 'F4'], 2],
    ['Linux फाइल सिस्टम में सुपरब्लॉक (Superblock) क्या स्टोर करता है?', ['यूजर पासवर्ड', 'फाइल सिस्टम की जानकारी', 'नेटवर्क एड्रेस', 'हार्डवेयर ड्राइवर'], 1],
    ['किसी प्रोसेस की वर्तमान स्थिति (State) को कहाँ स्टोर किया जाता है?', ['PCB (Process Control Block)', 'Stack Memory', 'Cache', 'Register File'], 0],
    ['Windows OS में Run Dialog Box खोलने की शॉर्टकट की क्या है?', ['Win + R', 'Win + R', 'Ctrl + R', 'Alt + R'], 1],
    ['Linux में पासवर्ड बदलने के लिए कौन-सी कमांड प्रयुक्त होती है?', ['changepass', 'setpass', 'passwd', 'password'], 2],
    ['निम्नलिखित में से कौन-सा एक ऑपरेटिंग सिस्टम नहीं है?', ['Linux', 'Oracle', 'Windows', 'MySQL'], 3],
    ['Linux में किसी शब्द को खोजने के लिए कौन-सी कमांड है?', ['grep', 'find', 'search', 'look'], 0],
    ['डेडलाक (Deadlock) की स्थिति ऑपरेटिंग सिस्टम में किससे संबंधित है?', ['Memory Leak', 'Virus Attack', 'Resource Allocation', 'Screen Freeze'], 2],
    ['Windows में एक्टिव विंडो बंद करने की शॉर्टकट की क्या है?', ['Win + F4', 'Ctrl + F4', 'Shift + F4', 'Alt + F4'], 3],
    ['Linux में सिस्टम को शटडाउन या रीबूट करने के लिए कौन-सी कमांड है?', ['stop', 'shutdown/reboot', 'off', 'powerdown'], 1],
    ['स्पूलिंग (Spooling) तकनीक मुख्य रूप से किसके साथ उपयोग की जाती है?', ['Monitor', 'Keyboard', 'Mouse', 'Printer / Output Devices'], 3],
    ['Windows 10 में Cortana क्या है?', ['Web Browser', 'Virtual Assistant', 'Antivirus', 'File Manager'], 1],
    ['Linux में किसी कमांड का मैनुअल (Help Page) देखने के लिए क्या टाइप करते हैं?', ['info [command]', 'help [command]', 'man [command]', 'doc [command]'], 2],
    ['बैच ऑपरेटिंग सिस्टम (Batch OS) की मुख्य विशेषता क्या थी?', ['Similar jobs grouped together', 'Real-time response', 'GUI Interface', 'Multi-user login'], 0],
    ['Linux फाइल परमिशन में \'rwx\' का अर्थ क्या होता है?', ['Run, Walk, Exit', 'Read, Write, Execute', 'Read, Watch, Edit', 'Remove, Write, X-ray'], 1],
    ['Windows में किसी फाइल या फोल्डर की प्रॉपर्टीज देखने के लिए शॉर्टकट क्या है?', ['F4', 'Ctrl + Enter', 'Shift + Enter', 'Alt + Enter'], 3],
    ['थ्रेड (Thread) को क्या कहा जाता है?', ['Sub Routine', 'Heavy Process', 'Lightweight Process', 'System Call'], 2],
    ['निम्नलिखित में से कौन-सा एक प्रोप्राइटरी (Proprietary) ऑपरेटिंग सिस्टम है?', ['Microsoft Windows', 'Ubuntu', 'Debian', 'Fedora'], 0],
    ['Linux में वर्तमान यूजर का नाम जानने के लिए कौन-सी कमांड है?', ['currentuser', 'myname', 'user', 'whoami'], 3],
    ['थ्रैशिंग (Thrashing) की समस्या किससे संबंधित है?', ['Excessive Paging / Virtual Memory', 'CPU Overheating', 'Hard Disk Failure', 'Network Congestion'], 0]
  ],
  c3: [
    ['LibreOffice Writer में बाय डिफ़ॉल्ट फ़ॉन्ट साइज़ (Font Size) कितना होता है?', ['10', '11', '12', '14'], 1],
    ['LibreOffice Writer किस प्रकार का सॉफ्टवेयर है?', ['वर्ड प्रोसेसिंग सॉफ्टवेयर', 'ऑपरेटिंग सिस्टम', 'स्प्रेडशीट सॉफ्टवेयर', 'प्रेजेंटेशन सॉफ्टवेयर'], 0],
    ['LibreOffice Writer डॉक्यूमेंट का डिफ़ॉल्ट एक्सटेंशन (Extension) क्या होता है?', ['.doc', '.docx', '.txt', '.odt'], 3],
    ['LibreOffice Writer में प्रिंट प्रीव्यू (Print Preview) की शॉर्टकट की क्या है?', ['Ctrl+F2', 'Ctrl+F12', 'Ctrl+Shift+O', 'Ctrl+P'], 2],
    ['LibreOffice Writer में न्यूनतम (Minimum) ज़ूम साइज़ कितना होता है?', ['10%', '20%', '50%', '100%'], 1],
    ['LibreOffice Writer में अधिकतम (Maximum) ज़ूम साइज़ कितना होता है?', ['200%', '400%', '500%', '600%'], 3],
    ['LibreOffice Writer में सेव एज़ (Save As) की शॉर्टकट की क्या है?', ['Ctrl+Shift+S', 'Ctrl+S', 'F12', 'Ctrl+Alt+S'], 0],
    ['LibreOffice Writer में नया डॉक्यूमेंट (New Document) खोलने की शॉर्टकट की क्या है?', ['Ctrl+Shift+N', 'Ctrl + O', 'Ctrl+N', 'Ctrl+W'], 2],
    ['LibreOffice Writer में स्पेलिंग चेक (Spelling Check) की शॉर्टकट की क्या है?', ['F7', 'F5', 'Shift+F7', 'Ctrl+F7'], 0],
    ['LibreOffice Writer में \'Find and Replace\' का विकल्प किस मेनू में होता है?', ['File', 'Edit', 'Insert', 'Format'], 1],
    ['LibreOffice Writer में \'Find and Replace\' की शॉर्टकट की क्या है?', ['Ctrl+F', 'Ctrl+Shift+F', 'Ctrl+R', 'Ctrl+H'], 3],
    ['LibreOffice Writer में \'Word Count\' का विकल्प किस मेनू में मिलता है?', ['Edit', 'View', 'Tools', 'Format'], 2],
    ['LibreOffice Writer में टेबल इन्सर्ट (Insert Table) करने की शॉर्टकट की क्या है?', ['Ctrl+T', 'Ctrl+F12', 'Alt+T', 'Ctrl+F10'], 1],
    ['LibreOffice Writer में सुपरस्क्रिप्ट (Superscript) की शॉर्टकट की क्या है?', ['Ctrl+Shift+P', 'Ctrl+Shift+B', 'Ctrl+P', 'Ctrl+B'], 0],
    ['LibreOffice Writer में सबस्क्रिप्ट (Subscript) की शॉर्टकट की क्या है?', ['Ctrl+Shift+P', 'Ctrl+B', 'Ctrl+Shift+V', 'Ctrl+Shift+B'], 3],
    ['LibreOffice Writer में बुलेटेड लिस्ट (Bulleted List) हटाने या लगाने की शॉर्टकट की क्या है?', ['F12', 'Ctrl+F12', 'Shift+F12', 'Alt + F12'], 2],
    ['LibreOffice Writer में नंबर लिस्ट (Numbered List) की शॉर्टकट की क्या है?', ['Shift + F12', 'F12', 'Ctrl+F12', 'Alt+1'], 1],
    ['LibreOffice Writer में फॉर्मेटिंग हटाने (Clear Direct Formatting) की शॉर्टकट की क्या है?', ['Alt+M', 'Ctrl+Shift+M', 'Ctrl + Delete', 'Ctrl+M'], 3],
    ['LibreOffice Writer में नया पेज ब्रेक (Page Break) डालने की शॉर्टकट की क्या है?', ['Ctrl + Enter', 'Shift + Enter', 'Alt + Enter', 'Ctrl+Shift+Enter'], 0],
    ['LibreOffice Writer में लाइन ब्रेक (Line Break) डालने की शॉर्टकट की क्या है?', ['Ctrl + Enter', 'Alt + Enter', 'Shift + Enter', 'Enter'], 2],
    ['LibreOffice Writer में किसी टेक्स्ट को सेंटर एलाइन (Center Align) करने की शॉर्टकट की क्या है?', ['Ctrl+L', 'Ctrl+E', 'Ctrl+R', 'Ctrl+J'], 1],
    ['LibreOffice Writer में जस्टिफाई एलाइनमेंट (Justify Alignment) की शॉर्टकट की क्या है?', ['Ctrl+L', 'Ctrl+E', 'Ctrl+R', 'Ctrl+J'], 3],
    ['LibreOffice Writer में राइट एलाइनमेंट (Right Alignment) की शॉर्टकट की क्या है?', ['Ctrl+E', 'Ctrl+L', 'Ctrl+R', 'Ctrl+J'], 2],
    ['LibreOffice Writer में लेफ्ट एलाइनमेंट (Left Alignment) की शॉर्टकट की क्या है?', ['Ctrl+L', 'Ctrl+R', 'Ctrl+E', 'Ctrl+J'], 0],
    ['LibreOffice Writer में डिफ़ॉल्ट फॉन्ट स्टाइल (Font Style) क्या होता है?', ['Liberation Sans', 'Liberation Serif', 'Times New Roman', 'Arial'], 1],
    ['LibreOffice Writer में न्यूनतम फॉन्ट साइज कितना होता है (ड्रॉपडाउन सूची में)?', ['2', '4', '6', '8'], 2],
    ['LibreOffice Writer में अधिकतम फॉन्ट साइज कितना होता है (ड्रॉपडाउन सूची में)?', ['72', '80', '96', '100'], 2],
    ['LibreOffice Writer में किसी शब्द के नीचे लाल लाइन (Red Line) क्या दर्शाती है?', ['स्पेलिंग की गलती', 'ग्रामर की गलती', 'फॉर्मेटिंग की गलती', 'लिंक की त्रुटि'], 0],
    ['LibreOffice Writer में किसी वाक्य के नीचे नीली या हरी लाइन क्या दर्शाती है?', ['स्पेलिंग की गलती', 'ग्रामर की गलती', 'शब्द की पुनरावृत्ति', 'कोई नहीं'], 1],
    ['LibreOffice Writer में हेल्प (Help) की शॉर्टकट की क्या है?', ['F4', 'F2', 'F3', 'F1'], 3],
    ['LibreOffice Writer में नेविगेटर (Navigator) खोलने की शॉर्टकट की क्या है?', ['F8', 'F6', 'F7', 'F5'], 3],
    ['LibreOffice Writer में स्टाइल विंडो (Styles Window) खोलने की शॉर्टकट की क्या है?', ['F11', 'F12', 'F10', 'F9'], 0],
    ['LibreOffice Writer में फुल स्क्रीन (Full Screen) करने की शॉर्टकट की क्या है?', ['Ctrl+F10', 'Ctrl+Shift+J', 'F11', 'Ctrl+J'], 1],
    ['LibreOffice Writer में नॉन-प्रिंटिंग कैरेक्टर्स (Non-printing characters) देखने की शॉर्टकट की क्या है?', ['Ctrl+F9', 'Ctrl+F12', 'Ctrl+F8', 'Ctrl+F10'], 3],
    ['LibreOffice Writer में कमेंट (Comment) जोड़ने की शॉर्टकट की क्या है?', ['Alt+C', 'Ctrl+Shift+C', 'Ctrl+Alt+C', 'Ctrl+C'], 2],
    ['LibreOffice Writer में हाइपरलिंक (Hyperlink) जोड़ने की शॉर्टकट की क्या है?', ['Ctrl+K', 'Ctrl+H', 'Ctrl+L', 'Ctrl+Shift+K'], 0],
    ['LibreOffice Writer में कितने मेनू (Menus) होते हैं?', ['8', '9', '10', '11'], 2],
    ['LibreOffice Writer में स्टैंडर्ड टूलबार पर ज़ूम का कौन सा विकल्प नहीं होता है?', ['Zoom Slider', 'Zoom Reset', 'Zoom In/Out', 'Zoom Dialog'], 1],
    ['LibreOffice Writer में टेम्पलेट (Template) की फाइल एक्सटेंशन क्या होती है?', ['.odt', '.odp', '.ods', '.ott'], 3],
    ['LibreOffice Writer में मेल मर्ज (Mail Merge) का विकल्प किस मेनू में होता है?', ['Tools', 'Edit', 'File', 'Format'], 0],
    ['LibreOffice Writer में किसी भी टेक्स्ट को बोल्ड (Bold) करने की शॉर्टकट की क्या है?', ['Ctrl+I', 'Ctrl + B', 'Ctrl+U', 'Ctrl+D'], 1],
    ['LibreOffice Writer में इटैलिक (Italic) करने की शॉर्टकट की क्या है?', ['Ctrl+B', 'Ctrl+U', 'Ctrl+I', 'Ctrl+Shift+I'], 2],
    ['LibreOffice Writer में अंडरलाइन (Underline) करने की शॉर्टकट की क्या है?', ['Ctrl+Shift+U', 'Ctrl+I', 'Ctrl+B', 'Ctrl+U'], 3],
    ['LibreOffice Writer में \'Cut\' करने की शॉर्टकट की क्या है?', ['Ctrl+X', 'Ctrl+C', 'Ctrl+V', 'Ctrl+z'], 0],
    ['LibreOffice Writer में \'Copy\' करने की शॉर्टकट की क्या है?', ['Ctrl+A', 'Ctrl+X', 'Ctrl+V', 'Ctrl+C'], 3],
    ['LibreOffice Writer में \'Paste\' करने की शॉर्टकट की क्या है?', ['Ctrl+P', 'Ctrl+V', 'Ctrl+C', 'Ctrl+Shift+V'], 1],
    ['LibreOffice Writer में \'Undo\' करने की शॉर्टकट की क्या है?', ['Ctrl+Z', 'Ctrl+Y', 'Ctrl+U', 'Ctrl+Shift+z'], 0],
    ['LibreOffice Writer में \'Redo\' करने की शॉर्टकट की क्या है?', ['Ctrl+R', 'Ctrl+Z', 'Ctrl+Y', 'Ctrl+Shift+Y'], 2],
    ['LibreOffice Writer में डॉक्यूमेंट को प्रिंट (Print) करने की शॉर्टकट की क्या है?', ['Alt+P', 'Ctrl+Shift+P', 'Ctrl+P', 'Ctrl+Shift+O'], 2],
    ['LibreOffice Writer में सिलेक्ट ऑल (Select All) की शॉर्टकट की क्या है?', ['Ctrl+A', 'Ctrl+S', 'Ctrl+Shift+A', 'Alt+A'], 0],
    ['LibreOffice Writer में पैराग्राफ को डबल लाइन स्पेसिंग देने की शॉर्टकट की क्या है?', ['Ctrl+1', 'Ctrl+2', 'Ctrl+5', 'Ctrl+0'], 1],
    ['LibreOffice Writer में सिंगल लाइन स्पेसिंग (Single Line Spacing) की शॉर्टकट की क्या है?', ['Ctrl+0', 'Ctrl+2', 'Ctrl+5', 'Ctrl+1'], 3],
    ['LibreOffice Writer में 1.5 लाइन स्पेसिंग (1.5 Line Spacing) की शॉर्टकट की क्या है?', ['Ctrl+5', 'Ctrl+2', 'Ctrl+1', 'Ctrl+1.5'], 0],
    ['LibreOffice Writer में ड्रॉप कैप (Drop Cap) का विकल्प किस मेनू में होता है?', ['Insert', 'Tools', 'Format', 'View'], 2],
    ['LibreOffice Writer में अधिकतम कितने ड्रॉप कैप (Drop Cap) लाइन्स सेट की जा सकती हैं?', ['5', '9', '10', '15'], 2],
    ['LibreOffice Writer में हेडर और फुटर (Header & Footer) का विकल्प किस मेनू में होता है?', ['File', 'Edit', 'Format', 'Insert'], 3],
    ['LibreOffice Writer में बाय डिफ़ॉल्ट ड्रॉप कैप लाइन्स कितनी होती हैं?', ['1', '2', '3', '4'], 2],
    ['LibreOffice Writer में पेज नंबर (Page Number) जोड़ने का विकल्प कहाँ मिलता है?', ['File', 'Insert', 'Format', 'Tools'], 1],
    ['LibreOffice Writer में डिजिटल सिग्नेचर (Digital Signature) का विकल्प किस मेनू में होता है?', ['Tools', 'File', 'Edit', 'Insert'], 1],
    ['LibreOffice Writer में किसी इमेज को इन्सर्ट करने की शॉर्टकट की क्या है?', ['कोई शॉर्टकट नहीं (Insert -> Image)', 'Ctrl+I', 'Ctrl+Alt+I', 'Ctrl+Shift+I'], 0],
    ['LibreOffice Writer में साइडबार (Sidebar) को टॉगल (Toggle/On-Off) करने की शॉर्टकट की क्या है?', ['Ctrl+F8', 'Ctrl+F6', 'Ctrl+F7', 'Ctrl+F5'], 3],
    ['LibreOffice Writer में \'Formatting Marks\' को ऑन/ऑफ करने की शॉर्टकट की क्या है?', ['Ctrl+F2', 'Ctrl+F8', 'Ctrl+F12', 'Ctrl+F10'], 3],
    ['LibreOffice Writer में टेबल की रो (Row) की ऊँचाई बढ़ाने या हटाने के लिए किस कुंजी का प्रयोग किया जाता है?', ['Ctrl + Arrow Keys', 'Alt + Arrow Keys', 'Shift + Arrow Keys', 'कोई नहीं'], 1],
    ['LibreOffice Writer में टेबल में एक सेल से दूसरे सेल में आगे जाने के लिए किस कुंजी का प्रयोग होता है?', ['Tab', 'Enter', 'Shift+Tab', 'Spacebar'], 0],
    ['LibreOffice Writer में टेबल में एक सेल से पीछे जाने के लिए किस कुंजी का प्रयोग होता है?', ['Tab', 'Ctrl+Tab', 'Shift+Tab', 'Alt+Tab'], 2],
    ['LibreOffice Writer में प्रोटेक्ट डॉक्यूमेंट (Protect Document) का विकल्प कहाँ होता है?', ['File', 'Edit', 'Tools', 'Window'], 0],
    ['LibreOffice Writer में कोई टेक्स्ट सेलेक्ट करके F3 दबाने से क्या होता है?', ['केस बदलता है', 'स्पेलिंग चेक होती है', 'फाइंड एंड रिप्लेस खुलता है', 'ऑटो टेक्स्ट (Auto Text) इन्सर्ट होता है'], 3],
    ['LibreOffice Writer में केस बदलने (Change Case) की शॉर्टकट की क्या है?', ['F3', 'Shift+F3', 'Alt+F3', 'Ctrl+F3'], 1],
    ['LibreOffice Writer में ज़ूम स्लाइडर (Zoom Slider) विंडो में कहाँ स्थित होता है?', ['टॉप राइट कॉर्नर', 'टॉप लेफ्ट कॉर्नर', 'बॉटम लेफ्ट कॉर्नर', 'बॉटम राइट कॉर्नर'], 3],
    ['LibreOffice Writer में \'Save\' करने की शॉर्टकट की क्या है?', ['Ctrl+Shift+S', 'Ctrl+S', 'Alt+S', 'F12'], 1],
    ['LibreOffice Writer में फोंट साइज बढ़ाने (Increase Font Size) की शॉर्टकट की क्या है?', ['Ctrl+]', 'Ctrl+[', 'Ctrl+Shift+>', 'Ctrl+Shift+<'], 0],
    ['LibreOffice Writer में फोंट साइज घटाने (Decrease Font Size) की शॉर्टकट की क्या है?', ['Ctrl+]', 'Ctrl+Shift+>', 'Ctrl+[', 'Ctrl+Shift+<'], 2],
    ['LibreOffice Writer में कमेंट बॉक्स हटाने या डिलीट करने का विकल्प कहाँ होता है?', ['व्यू मेनू', 'एडिट मेनू', 'फाइल मेनू', 'कमेंट मेनू'], 3],
    ['LibreOffice Writer में कुल कितने डिफ़ॉल्ट हेडिंग स्टाइल्स होते हैं?', ['3', '5', '6', '10'], 2],
    ['LibreOffice Writer में किसी भी फाइल को पासवर्ड प्रोटेक्टेड रूप में किस फॉर्मेट में सेव किया जाता है?', ['.odt', 'पासवर्ड विकल्प केवल odt सेव करते समय मिलता है', '.pdf', '.txt'], 1],
    ['LibreOffice Writer में ऑटो करेक्शन (Auto Correction) का फीचर किस मेनू में होता है?', ['Tools', 'Edit', 'Format', 'View'], 0],
    ['LibreOffice Writer में बाय डिफ़ॉल्ट मार्जिन (Margins) कितना होता है?', ['0.5 इंच', '0.75 इंच', '1 इंच', '1.5 इंच'], 2],
    ['LibreOffice Writer में पेज ओरिएंटेशन (Page Orientation) बाय डिफ़ॉल्ट क्या होता है?', ['Legal', 'Landscape', 'Square', 'Portrait'], 3],
    ['LibreOffice Writer में कौन सा व्यू (View) उपलब्ध नहीं होता है?', ['Slide Sorter', 'Print Layout', 'Web Layout', 'Normal View'], 0],
    ['LibreOffice Writer में फुटनोट (Footnote) और एंडनोट (Endnote) का विकल्प किस मेनू में होता है?', ['Edit', 'Insert', 'Tools', 'Format'], 1],
    ['LibreOffice Writer में फुटनोट डॉक्यूमेंट में कहाँ दिखाई देता है?', ['हर पेज के फुटर में', 'डॉक्यूमेंट के अंत में', 'हर पेज के हेडर में', 'पेज के अंत में (Bottom of Page)'], 3],
    ['LibreOffice Writer में एंडनोट (Endnote) डॉक्यूमेंट में कहाँ दिखाई देता है?', ['पेज के अंत में', 'डॉक्यूमेंट या चैप्टर के अंत में', 'हेडर में', 'फुटर में'], 1],
    ['LibreOffice Writer में थिसॉरस (Thesaurus) की शॉर्टकट की क्या होती है?', ['Alt+F7', 'Shift + F7', 'Ctrl+F7', 'F7'], 2],
    ['LibreOffice Writer में थिसॉरस का प्रयोग किसके लिए किया जाता है?', ['पर्यायवाची और विलोम शब्द (Synonyms & Antonyms)', 'स्पेलिंग चेक', 'ग्रामर चेक', 'वर्ड काउंट'], 0],
    ['LibreOffice Writer में नया फोल्डर बनाने का विकल्प किस डायलॉग बॉक्स में मिलता है?', ['Save As डायलॉग बॉक्स', 'Print डायलॉग बॉक्स', 'Open डायलॉग बॉक्स', 'दोनों Save As और Open'], 3],
    ['LibreOffice Writer में किसी टेक्स्ट के बीच से लाइन खींचना क्या कहलाता है?', ['Strikethrough', 'Underline', 'Superscript', 'Subscript'], 0],
    ['LibreOffice Writer में शैडो (Shadow) इफ़ेक्ट की शॉर्टकट की क्या है?', ['Ctrl+Shift+S', 'कोई सीधी शॉर्टकट की नहीं है', 'Alt+S', 'Ctrl+D'], 1],
    ['LibreOffice Writer में बोल्ड, इटैलिक, अंडरलाइन के अलावा टेक्स्ट इफ़ेक्ट में कौन सा विकल्प होता है?', ['Strikethrough', 'Overline', 'Both Strikethrough & Overline', 'कोई नहीं'], 2],
    ['LibreOffice Writer में \'Go to Page\' की शॉर्टकट की क्या है?', ['Ctrl+Shift+G', 'Ctrl+G', 'F5', 'Ctrt+F5'], 1],
    ['LibreOffice Writer में मैक्रो (Macro) रिकॉर्ड करने का विकल्प किस मेनू में होता है?', ['File', 'Edit', 'Tools', 'View'], 2],
    ['LibreOffice Writer में मैक्रो (Macro) की शॉर्टकट की क्या होती है?', ['Shift+F11', 'Alt+F11', 'Ctrl+F11', 'कोई डिफ़ॉल्ट शॉर्टकट की नहीं होती'], 3],
    ['LibreOffice Writer में किसी डॉक्यूमेंट को सीधे पीडीएफ (PDF) में एक्सपोर्ट करने का आइकॉन कहाँ होता है?', ['स्टैंडर्ड टूलबार', 'फॉर्मेटिंग टूलबार', 'मेनू बार', 'स्टेटस बार'], 0],
    ['LibreOffice Writer में सीधे PDF एक्सपोर्ट करने की शॉर्टकट की क्या होती है?', ['Ctrl+Shift+E', 'Ctrl+P', 'कोई डिफ़ॉल्ट शॉर्टकट की नहीं होती', 'F12'], 2],
    ['LibreOffice Writer में साइडबार में कुल कितने पेन (Panes) होते हैं?', ['केवल 1', 'केवल 2', 'केवल 4', 'लगभग 6 या अधिक'], 3],
    ['LibreOffice Writer में रूलर (Ruler) को ऑन या ऑफ करने की शॉर्टकट की क्या है?', ['Ctrl+Shift+R', 'Ctrl+R', 'Ctrl+F1', 'Alt+R'], 0],
    ['LibreOffice Writer में मैनेज टेम्पलेट्स (Manage Templates) की शॉर्टकट की क्या है?', ['Ctrl+N', 'Ctrl+Shift+N', 'Alt+N', 'Ctrl+M'], 1],
    ['LibreOffice Writer में किसी ऑब्जेक्ट को डिलीट करने के लिए किस कुंजी का प्रयोग होता है?', ['Delete', 'Backspace', 'Both Delete and Backspace', 'Ctrl+D'], 2],
    ['LibreOffice Writer में पैराग्राफ इंडेंट बढ़ाने की शॉर्टकट की क्या है?', ['Ctrl+M', 'Tab', 'Ctrl+Shift+M', 'Shift+Tab'], 1],
    ['LibreOffice Writer में बुलेट लिस्ट से बाहर आने के लिए या दो बार Enter दबाने से क्या होता है?', ['बुलेट लिस्ट समाप्त हो जाती है', 'नया पेज बन जाता है', 'टेक्स्ट बोल्ड हो जाता है', 'कुछ नहीं होता'], 0],
    ['LibreOffice Writer के संबंध में इनमें से कौन सा कथन असत्य है?', ['आप पासवर्ड से सुरक्षित डॉक्यूमेंट सेव कर सकते हैं', 'इसमें मेल मर्ज का विकल्प होता है', 'यह एक फ्री और ओपन सोर्स सॉफ्टवेयर है', 'इसमें स्प्रेडशीट जैसी फॉर्मूला बार होती है'], 3]
  ],
  c4: [
    ['In Calc, Rename Sheet option available in which menu?', ['File', 'Sheet', 'Data', 'Format'], 1],
    ['In LibreOffice the Formula which shows 16% of the value in A1 is', ['A1%16', 'A1%16', 'A1#16%', 'A1*16%'], 3],
    ['In Calc the default number of sheets is', ['2', '3', '1', '5'], 1],
    ['In LibreOffice Calc what is the default Title name?', ['Book1', 'Title1', 'Untitled 1', 'Sheet1'], 2],
    ['In Calc the default font size is', ['10', '11', '12', '15'], 1],
    ['In LibreOffice Calc which shortcut key is use to open the cell format dialog box?', ['Ctrl+1', 'Shift+1', 'Alt+1', 'Ctrl+Alt+1'], 0],
    ['In LibreOffice Calc, which shortcut key is use to insert the Time?', ['Ctrl+Shift+;', 'Ctrl+;', 'Ctrl + T', 'None of these'], 0],
    ['Which shortcut key is use to open a new Spreadsheet?', ['Ctrl+Shift+N', 'Shift+Alt+N', 'Shift+N', 'Ctrl+N'], 3],
    ['In Calc which shortcut key is use to save as a program?', ['Shift+Alt+S', 'Ctrl+S', 'Ctrl+Shift+S', 'None of these'], 2],
    ['In LibreOffice Calc, Merge Cells command available in which menu?', ['Edit', 'Style', 'Sheet', 'Format'], 3],
    ['Which shortcut key is use to delete a cell in LibreOffice Calc?', ['Ctrl++', 'Ctrl + D', 'Ctrl+-', 'Delete'], 2],
    ['In Calc, Freeze Rows and Columns option available in which menu?', ['View', 'File', 'Format', 'Data'], 0],
    ['In Calc, the last Column label is', ['ALZ', 'AMA', 'AMJ', 'ALX'], 2],
    ['The total number of Columns in Calc is', ['1024', '10241', '48523', 'None of these'], 0],
    ['In Calc, the name of the Cell made by the intersection of last column and last row is', ['AMJ65536', 'AMX1048576', 'AMJ1024', 'AMJ1048576'], 3],
    ['In Calc which shortcut key you press to change the number format as date ?', ['Ctrl+1', 'Ctrl+Shift+3', 'Ctrl+Shift+5', 'All of these'], 1],
    ['In Calc which shortcut key is used to insert a function?', ['F2', 'F3', 'Ctrl+F2', 'Ctrl+F3'], 2],
    ['What is the default height of a Row in Calc?', ['0.18', '0.23', '0.25', '0.21'], 2],
    ['What is the default width of a column in Calc?', ['0.79', '0.84', '0.89', 'None of these'], 1],
    ['In Calc the maximum zoom size is', ['200%', '400%', '500%', '600%'], 3],
    ['Which shortcut key is use to open the Format Cell?', ['Ctrl+1', 'Ctrl+3', 'Ctrl+4', 'Ctrl+2'], 0],
    ['Which is the last menu in Calc?', ['Help', 'Format', 'View', 'Sheet'], 0],
    ['Font Size, Font Face, Bold, Italic etc. options available in which Toolbar?', ['Standard', 'Formatting', 'Drawing', 'None of these'], 1],
    ['In Calc which shortcut key is use to select the whole worksheet?', ['Ctrl+A', 'Ctrl+Shift+Space', 'Ctrl+Space', 'Both A and B'], 3],
    ['You can change the user interface in Calc Program with....?', ['Single Toolbar', 'Tabbed', 'Tabbed Compact', 'All of these'], 3],
    ['The shortcut key to open a new Template in Calc program is', ['Ctrl+Alt+N', 'Ctrl+Shift+N', 'Ctrl+N', 'None of these'], 1],
    ['Protect Sheet option available in which menu?', ['Tools', 'View', 'File', 'Sheet'], 0],
    ['The shortcut key to hide the sidebar in Libre Office Calc is', ['Ctrl+F3', 'Ctrl+F7', 'Ctrl+F5', 'Shift+F5'], 2],
    ['In Libre Office Calc, the shortcut key to convert a number in a Cell into Date is?', ['Ctrl+Shift+F3', 'Ctrl+Shift+3', 'Ctrl+Alt+3', 'None of these'], 1],
    ['What you press to exit from LibreOffice Calc?', ['Ctrl+X', 'Ctrl+R', 'Ctrl+W', 'None of these'], 2],
    ['In LibreOffice Calc the maximum Cell in a worksheet is?', ['No Limit', '1,073,741,842', '1,073,824,741', '1,073,741,824'], 3],
    ['In LibreOffice Calc, you press which key with Ctrl to insert a new line or paragraph in a Cell?', ['Alt', 'Shift', 'Tab', 'Enter'], 0],
    ['What is the default file extension for a spreadsheet in LibreOffice Calc?', ['odp', '.odd', '.ods', '.odt'], 2],
    ['In LibreOffice Calc a formula start with a symbol', ['=', '$', '&', '%'], 0],
    ['What is the result of the formula =COUNT(B1:B3)? Where B1=5, B2=4, B3=6', ['15', '3', '4', '5'], 1],
    ['What is the result of the formula =MAX(B1:B3)+MIN(B1:B3)? Where B1=5, B2=2, B3=7', ['7,2', '7+2', '5,7', '9'], 3],
    ['In LibreOffice Calc if the value is large then the Cell, then what is the result?', ['#Name?', '%%%%', '&&&&', '####'], 3],
    ['In LibreOffice Calc the address of any Cell is shown in?', ['Formula Bar', 'Address Book', 'Name Box', 'None of these'], 2],
    ['What is the result of the Formula =Product(80,-5)?', ['-400', '400', 'Null', 'None of these'], 0],
    ['In LibreOffice Calc the Alignment of a Non numeric value is', ['Right', 'Left', 'Center', 'Justified'], 1],
    ['If the Cell address is changed when you copy a formula then the formula is known as', ['Absolute Address', 'Relative Address', 'Mixed Address', 'Dynamic Address'], 1],
    ['In LibreOffice Calc, the maximum number of Row and Column is', ['1048576 & 1024', '1048576 & 16384', '16384 & 1048576', '1024 & 1048576'], 0],
    ['In Calc which shortcut key is use for print preview?', ['Ctrl+F12', 'F12', 'Ctrl+Shift+O', 'Ctrl+O'], 2],
    ['In Calc, the toolbar which has the commands like save, open, print, cut, copy etc. is called?', ['Formatting Toolbar', 'Standard Toolbar', 'Drawing Toolbar', 'None of these'], 1],
    ['Which shortcut key is use to select the complete Row?', ['Ctrl+Space', 'Ctrl+Shift+End', 'Shift+Space', 'None of these'], 2],
    ['In LibreOffice which shortcut key is use for comment?', ['Ctrl+Shift+C', 'Ctrl+C', 'Ctrl+Shift+T', 'Ctrl+Alt+C'], 3],
    ['In LibreOffice Calc, the shortcut key to convert a number into currency format is?', ['Ctrl+Shift+1', 'Ctrl+Shift+5', 'Ctrl+Shift+3', 'Ctrl+Shift+4'], 3],
    ['How many maximum sheets you can insert in LibreOffice Calc?', ['1024', '1000', '10000', 'No Limit'], 0],
    ['In LibreOffice Calc you can write maximum characters in a Cell.', ['356547', '32654', '32767', 'None of these'], 2],
    ['In LibreOffice Calc which shortcut key is use to clear direct format?', ['Ctrl+V', 'Ctrl+1', 'Ctrl + Shift + F', 'Ctrl + M'], 3],
    ['Where is the name box in LibreOffice Calc?', ['Left side under the Menu bar', 'Left side over the Menu bar', 'On the Status bar', 'Right side under the Menu bar'], 0],
    ['Which shortcut key is use to move to the next sheet?', ['Tab', 'Ctrl+Tab', 'Ctrl + Shift + Tab', 'Shift + Tab'], 1],
    ['In LibreOffice Calc which shortcut key is use to highlight a value?', ['Ctrl+F6', 'Ctrl', 'Ctrl+F8', 'Ctrl+F1'], 2],
    ['In LibreOffice Calc the address of the last Cell is', ['$D$10', 'AMJ1048576', 'XFD1048576', '$AM$D1048576'], 1],
    ['In LibreOffice Calc, to split a merged cell click button after selecting the cell', ['Split', 'Center', 'Split and Merge', 'Merge and Center'], 0],
    ['In Spreadsheet which shortcut key is use to select the row of the selected cell.', ['Ctrl+Space Bar', 'Ctrl++', 'Shift++', 'Shift+Space Bar'], 3],
    ['In Calc the process to combine two cells in one, is called', ['Join Cells', 'Merge Table', 'Join Table', 'Merge Cells'], 3],
    ['In LibreOffice Calc which shortcut key is use to move to the left of a cell?', ['Alt+Tab', 'Shift+Tab', 'Alt', 'Tab'], 1],
    ['In LibreOffice Calc, the intersection of a Row and Column is called', ['Cell', 'Table', 'Sheet', 'Book'], 0],
    ['In LibreOffice Calc which Symbol shows after a Formula Error?', ['$', '@', '#', ''], 2],
    ['In Calc you can view the worksheet page wise with page break.', ['True', 'False'], 0],
    ['In Calc you can Hide/unhide the Formula bar.', ['True', 'False'], 0],
    ['In Calc you can use the sheet tab to protect a sheet.', ['True', 'False'], 1],
    ['In LibreOffice Calc, the Drawing Toolbar can also be placed somewhere other than its location.', ['True', 'False'], 0],
    ['Date and Time stored in LibreOffice Calc is internally treated as number format.', ['True', 'False'], 0],
    ['In LibreOffice Calc, spreadsheet can have only one sheet.', ['True', 'False'], 1],
    ['Spreadsheets allow us to organize, analyze, and store data in tabular form.', ['True', 'False'], 0],
    ['In LibreOffice Calc a number is in Left alignment and an alphabet is in Right alignment.', ['True', 'False'], 1],
    ['LibreOffice Calc by default provides an auto calculator feature that displays values in a selected range.', ['True', 'False'], 0],
    ['Ctrl + D have the same function in LibreOffice calc and Writer.', ['True', 'False'], 0]
  ],
  c5: [
    ['What is the maximum number of views you can add to a Slide?', ['2', '4', '6', '10'], 1],
    ['Which shortcut key in LibreOffice Impress is used for Paste Unformatted Text?', ['Ctrl+Alt+V', 'Ctrl+Shift+V', 'Ctrl+Alt+Shift+V', 'None of these'], 2],
    ['What is the slide transition in LibreOffice Impress?', ['Letter', 'A type of slide', 'Over head', 'A special effect used to show a slideshow'], 3],
    ['In LibreOffice Impress the shortcut key for print preview of a presentation is?', ['Ctrl+P', 'Ctrl+Shift+P', 'Ctrl+Shift+F12', 'None of these'], 3],
    ['In LibreOffice Impress the default Title name of a presentation is?', ['Untitled 1', 'Presentation 1', 'Untitle', 'Document 1'], 0],
    ['LibreOffice Impress presentation can be exported in which format?', ['BMP', 'PDF', 'GIF', 'All'], 3],
    ['In LibreOffice Impress the minimum zoom size is?', ['5%', '10%', '15%', '20%'], 1],
    ['The slide sorter option available in which menu of LibreOffice Impress?', ['Insert', 'Format', 'View', 'Slide show'], 2],
    ['Which transition effect is not available in LibreOffice Impress?', ['Diagonal', 'Dissolve', 'Fly in', 'Fade'], 0],
    ['Using which option do all the slides appear simultaneously?', ['Print preview', 'Slide sorter', 'Handouts', 'None of these'], 1],
    ['In LibreOffice Impress which shortcut key is used for duplicate slide?', ['Ctrl+S', 'Ctrl+D', 'Ctrl+Shift+D', 'None of these'], 2],
    ['Which shortcut key is used to add a new slide in Libreoffice Impress?', ['Ctrl+M', 'Ctrl+N', 'Ctrl+S', 'Ctrl+T'], 0],
    ['The default template in LibreOffice Impress Presentation is?', ['Image', 'Title and content', 'Content only', 'Title only'], 1],
    ['In LibreOffice Impress which shortcut key is used to repeat the slide show continuously?', ['Loop', 'Repeat', 'Move', 'None'], 3],
    ['Which of the following is used to organize or shorten the slides?', ['Slide Pan', 'Slide sorter view', 'Both A and B', 'None of these'], 2],
    ['Which shortcut key is used to move to the next slide?', ['Ctrl + Page Down', 'Ctrl + home', 'Ctrl + Page up', 'None of these'], 0],
    ['In LibreOffice Impress which view contains only Text?', ['Outline view', 'Normal view', 'Notes view', 'Slide shorter view'], 0],
    ['In LibreOffice Impress the maximum number of hand outs in a slide is?', ['3', '4', '6', '9'], 3],
    ['In LibreOffice Impress which option is used to remove the slide transition?', ['None Transition', 'Split Transition', 'Wipe Transition', 'Push Transition'], 0],
    ['Which shortcut key is used to perform a slide show in LibreOffice Impress?', ['Alt+F5', 'F5', 'Shift + F5', 'Ctrl+F5'], 1],
    ['In LibreOffice Impress the default page orientation is?', ['Portrait', 'Vertical', 'Landscape', 'Horizontal'], 2],
    ['Which slide is used as a starting point for other slides?', ['First slide', 'Master slide', 'Last slide', 'None of these'], 1],
    ['In LibreOffice Impress which key is used to go to the previous slide?', ['Page down', 'Home', 'Enter', 'Page up'], 3],
    ['How can we go directly to the menu while the slide is running?', ['By clicking on the Ribbon', 'By mouse click', 'By Right click on the slide', 'All of the above'], 2],
    ['How to create a text box in a slide?', ['Slide -> Textbox', 'Insert -> Textbox', 'Insert -> Table -> Textbox', 'None of these'], 1],
    ['Which shortcut key is used to navigate in LibreOffice Impress?', ['Ctrl+Shift+F5', 'Ctrl+F5', 'Alt+F5', 'None of these'], 0],
    ['Which type of sound file from the following can be added to LibreOffice Impress?', ['.dat', '.log', '.wav', '.drv'], 2],
    ['The macros command is available in which menu of LibreOffice Impress?', ['Slide menu', 'Insert menu', 'View menu', 'Tools menu'], 3],
    ['In LibreOffice Impress which shortcut key is used to go to the first slide of the presentation?', ['Ctrl + Home', 'Home', 'Shift + Home', 'Both A and B'], 3],
    ['Which of the following view is not available in LibreOffice Impress?', ['Slide sorter view', 'Slide show view', 'Sorter view', 'None of these'], 2],
    ['Which of the following option is used to set the time for each object in a slide?', ['Slide show -> Slide Transition', 'Slide show -> Custom Transition', 'Format -> Animation', 'View -> Animation'], 0],
    ['In LibreOffice Impress the shortcut key Ctrl + E is used for?', ['Right Align', 'Center Align', 'Left Align', 'None of these'], 1],
    ['Which menu has the option of master slide in LibreOffice Impress?', ['Format', 'View', 'Slide show', 'Slide'], 1],
    ['In LibreOffice Impress which file format is not added in a presentation?', ['HTML', 'GIF', 'JPEG', 'WAV'], 0],
    ['In LibreOffice Impress the slide transition option available in which menu?', ['View', 'Slide', 'Insert', 'Both A and B'], 1],
    ['The first slide of a presentation is known as?', ['Main Slide', 'Home Slide', 'Title Slide', 'None of these'], 2],
    ['Which alignment is not available in LibreOffice Impress?', ['Right Alignment', 'Justification', 'Left Alignment', 'Central Alignment'], 3],
    ['What is used to determine the timing on a slide in a presentation?', ['Slide Timer', 'Slide Timing Tool', 'Slide Tool', 'Rehearsal'], 3],
    ['We can add a table in LibreOffice Impress?', ['True', 'False'], 0],
    ['The first slide of a presentation in LibreOffice Impress is called Master Slide?', ['True', 'False'], 1],
    ['We cannot rename slides in LibreOffice Impress?', ['True', 'False'], 1],
    ['When we insert a new slide, it insets according to its previous slide layout?', ['True', 'False'], 0],
    ['We can create a photo Album in LibreOffice Impress?', ['True', 'False'], 0],
    ['In LibreOffice Impress the shortcut key to insert a text box is?', ['F4', 'F3', 'F2', 'F5'], 2],
    ['If you add a graphic in a Master Slide it will appear on every slide of your presentation?', ['True', 'False'], 0],
    ['In LibreOffice Impress there is no option of mail merge?', ['True', 'False'], 0],
    ['In LibreOffice Impress bullet and numbering option available in which menu?', ['File', 'Slide', 'Format', 'Insert'], 2],
    ['In Impress press the shortcut key for send to back any shape is?', ['Ctrl+Shift', 'Ctrl+Shift+-', 'Ctrl+Shift++', 'None of these'], 1],
    ['In Impress the shortcut key for subscript is?', ['Ctrl+B', 'Ctrl+Shift+P', 'Ctrl+Shift+B', 'None of these'], 2],
    ['In Impress the Clear Direct Formatting option available in which menu?', ['File', 'Window', 'Tools', 'Format'], 3],
    ['Shortcut key to insert a new slide is?', ['Ctrl+Shift+M', 'Shift+M', 'Ctrl+N', 'Ctrl+M'], 3],
    ['Export Direct as PDF option available at?', ['Drawing Toolbar', 'Presentation', 'Standard Toolbar', 'All of these'], 2],
    ['Shortcut key for Presentation Slide Show is?', ['F5', 'Shift+F5', 'Alt+F5', 'All of these'], 3],
    ['If you want to close the Impress Presentation Window then which shortcut key you press?', ['Ctrl+X', 'Ctrl+B', 'Ctrl+W', 'None of these'], 2],
    ['In Impress which menu you use to change the layout of a slide?', ['Slide Show', 'Format', 'Tools', 'Slide'], 3],
    ['Text Alignment option available in which menu?', ['View', 'Format', 'Tools', 'Insert'], 1],
    ['In Impress the Layout of a slide can be?', ['Title Only', 'Title, Content', 'Title, 4 Content', 'All of these'], 3],
    ['In Impress the minimum and maximum zoom size is?', ['5, 3000', '10, 500', '400', 'None of these'], 0],
    ['In Impress which shortcut key is use to insert a Template?', ['Ctrl+Shift+B', 'Ctrl+Shift+N', 'Ctrl+N', 'None of these'], 1],
    ['During a slide presentation, which key would you press to select one hyperlink after another?', ['Ctrl+H', 'Ctrl+K', 'Tab', 'All of the above'], 2],
    ['What is the extension name of a file saved in Impress?', ['.odt', '.odp', '.ods', '.odi'], 1],
    ['Which of the following can you use to organize or shorten a slide?', ['Slide Pane', 'Slide Shorter View', 'both a and b', 'None of these'], 2],
    ['It is a slide that is used as a starting point for other slides?', ['First Slide', 'Style', 'Template', 'Master Slide'], 3],
    ['In LibreOffice Impress Macros command available in which menu?', ['Tools', 'Slide', 'Insert', 'None of these'], 0],
    ['Which of the following file formats can be added to LibreOffice Impress?', ['jpeg', 'wmv', 'mpeg', 'All of above'], 3],
    ['Using which option do all slides appear simultaneously?', ['Handouts', 'Slide Shorter', 'Print Preview', 'None of these'], 1],
    ['To Remove Slide Transition we use the following ......', ['Split Transition', 'None Transition', 'Wipe Transition', 'Push Transition'], 1],
    ['In LibreOffice Impress which Alignment is not available?', ['Right Alignment', 'Left Alignment', 'Central Alignment', 'justification'], 2],
    ['In LibreOffice Impress which view is not available in following?', ['Normal', 'Outline', 'Notes', 'None of these'], 3],
    ['In LibreOffice Impress the Slide Shorter available in which Menu?', ['View', 'Insert', 'Slide Show', 'Format'], 0],
    ['In Impress, Line, Rectangle, Ellipse etc. Tools are found in drawing toolbar?', ['True', 'False'], 0],
    ['In Impress you can insert comments with Alt + Shift + C.', ['True', 'False'], 1],
    ['With the Custom Slide Show you can do your favorite slide show?', ['True', 'False'], 0],
    ['In Impress Presentation program the status bar can be hidden?', ['True', 'False'], 0],
    ['A presentation in LibreOffice Impress can have only one master slide?', ['True', 'False'], 1],
    ['If you add a graphic to a master slide it will appear on every slide in your presentation.', ['True', 'False'], 0],
    ['A hidden slide is a slide that cannot be shown to the audience while running a slide show?', ['True', 'False'], 0],
    ['You cannot create Custom Page Style in LibreOffice Impress?', ['True', 'False'], 1],
    ['Slide animations are similar to transitions, but they applicable to individual elements in a single slide?', ['True', 'False'], 0],
    ['In LibreOffice Impress you can create a photo album from a set of images, usually with one photo per Slide.', ['True', 'False'], 0]
  ],
  c6: [
    ['ARPANET ka poora naam kya hai?', ['Advanced Research Projects Agency Network', 'Advanced Research Project Authority Network', 'Automated Research Projects Agency Network', 'None of these'], 0],
    ['Internet ka janak (Father of Internet) kise kaha jata hai?', ['Tim Berners-Lee', 'Vint Cerf', 'Denis Ritchie', 'Alan Turing'], 1],
    ['World Wide Web (WWW) ke aavishkarak kaun hain?', ['Bill Gates', 'Charles Babbage', 'Steve Jobs', 'Tim Berners-Lee'], 3],
    ['Web pages ko dekhne ke liye kis software ka prayog kiya जाता hai?', ['Operating System', 'Compiler', 'Web Browser', 'Interpreter'], 2],
    ['URL ka poora naam kya hai?', ['Universal Record Link', 'Uniform Resource Locator', 'Unified Resource Linker', 'None of these'], 1],
    ['HTTP ka poora naam kya hai?', ['Hyperlink Transfer Protocol', 'HyperText Transmission Process', 'Hyper Text Transfer Protocol', 'Hyper Text Terminal Protocol'], 2],
    ['HTTPS me \'S\' ka kya arth hai?', ['Simple', 'Source', 'System', 'Secure'], 3],
    ['IP address ka kitna version hota hai?', ['1', '2', '4', '8'], 1],
    ['IPv4 address ki lambai (length) kitni hoti hai?', ['32 bits', '64 bits', '128 bits', '16 bits'], 0],
    ['IPv6 address ki lambai kitni hoti hai?', ['32 bits', '64 bits', '128 bits', '256 bits'], 2],
    ['Domain Name System (DNS) ka mukhya karya kya hai?', ['Internet speed badhana', 'Data encrypt karna', 'Virus block karna', 'Domain name ko IP address me badalna'], 3],
    ['Web browser par kisi page ko refresh karne ki shortcut key kya hai?', ['F5', 'F3', 'F7', 'F11'], 0],
    ['Full Screen mode me browser ko karne ki shortcut key kya hai?', ['F5', 'F10', 'F12', 'F11'], 3],
    ['Pehla web browser kaun sa tha?', ['WorldWideWeb', 'Internet Explorer', 'Netscape Navigator', 'Mosaic'], 0],
    ['Pehla graphical web browser kaun sa tha?', ['Safari', 'Chrome', 'Mosaic', 'Opera'], 2],
    ['Email ka aavishkar kisne kiya tha?', ['Tim Berners-Lee', 'Ray Tomlinson', 'Vint Cerf', 'Bill Gates'], 1],
    ['Email message ke do mukhya bhaag kaun se hote hain?', ['Header aur Body', 'To aur From', 'Subject aur Signature', 'Sender aur Receiver'], 0],
    ['CC ka email me poora naam kya hai?', ['Computer Copy', 'Carbon Copy', 'Common Copy', 'Copy Control'], 1],
    ['BCC ka email me poora naam kya hai?', ['Blind Computer Copy', 'Basic Carbon Copy', 'Blind Carbon Copy', 'None'], 2],
    ['BCC aur CC me kya antar hai?', ['Sirf size ka antar hai', 'CC recipients dusre recipients ko nahi dikhte', 'Koi antar nahi hai', 'BCC recipients dusre recipients ko nahi dikhte'], 3],
    ['Email me spam kya hota hai?', ['Draft email', 'Important email', 'Deleted email', 'Unsolicited / Junk commercial email'], 3],
    ['ISP ka poora naam kya hai?', ['Internal Service Provider', 'Internet Service Provider', 'Internet Source Protocol', 'Information Service Provider'], 1],
    ['Web browser ka udaharan kaun sa hai?', ['Google Chrome', 'Mozilla Firefox', 'Microsoft Edge', 'All of the above'], 3],
    ['Search Engine ka udaharan kaun sa hai?', ['Google', 'Yahoo', 'Bing', 'All of the above'], 3],
    ['HTML ka prayog kiske liye hota hai?', ['Web pages banane ke liye', 'Database manage karne ke liye', 'Calculations ke liye', 'Presentation के लिए'], 0],
    ['URL ka konsa bhaag protocol ko darsata hai?', ['.com', 'www.', 'http://', 'domain name'], 2],
    ['FTP ka poora naam kya hai?', ['Fast Transfer Protocol', 'File Transfer Protocol', 'File Transmission Process', 'File Text Protocol'], 1],
    ['TCP/IP ka mukhya upyog kahan hota hai?', ['Internet par data transmission ke liye', 'Printer chalane ke liye', 'Sound processing के लिए', 'RAM management के लिए'], 0],
    ['Modem kiska combination hai?', ['Monitor & Demodulator', 'Memory & Device', 'Modulator & Demodulator', 'None'], 2],
    ['MAC address kitने bit ka hota hai?', ['32 bit', '48 bit', '64 bit', '128 bit'], 1],
    ['Wi-Fi ka poora naam kya hai?', ['Wired Fidelity', 'Wireless Field', 'Wireless Fidelity', 'Wide Fidelity'], 2],
    ['Bluetooth kis technology par kaam karta hai?', ['Short-range Radio Frequency', 'Infrared waves', 'Satellite signals', 'Laser waves'], 0],
    ['Cloud Computing ka udaharan kaun sa hai?', ['Google Drive', 'Dropbox', 'OneDrive', 'All of the above'], 3],
    ['Intranet kya hota hai?', ['Public internet network', 'Private network jo kisi organization ke andar use hota hai', 'Global network', 'None'], 1],
    ['Extranet kya hota hai?', ['Private network jo authorized external users ke liye hota hai', 'Public internet', 'Local network', 'None'], 0],
    ['Browser history check karne ki shortcut key kya hai?', ['Ctrl + D', 'Ctrl + J', 'Ctrl + H', 'Ctrl + B'], 2],
    ['Browser me downloads window kholne ki shortcut key kya hai?', ['Ctrl + J', 'Ctrl + D', 'Ctrl + H', 'Ctrl + S'], 0],
    ['Bookmark add karne ki shortcut key browser me kya hoti hai?', ['Ctrl + D', 'Ctrl + B', 'Ctrl + Shift + B', 'All of these (browser ke anusar)'], 3],
    ['Incognito mode browser me kisliye use hota hai?', ['Virus hatane ke liye', 'Fast speed ke liye', 'Private browsing ke liye (history save nahi hoti)', 'Download ke liye'], 2],
    ['Incognito mode kholne ki shortcut key Chrome me kya hai?', ['Ctrl + Shift + P', 'Ctrl + Shift + N', 'Ctrl + N', 'Alt + N'], 1],
    ['Phishing kya hai?', ['Network speed badhana', 'Virus banana', 'Email bhejna', 'Fraudulent tarike se sensitive jankari (password/OTP) churana'], 3],
    ['Firewall ka mukhya karya kya hai?', ['Unauthorized access se network ki suraksha karna', 'Internet speed badhana', 'Computer ko garam hone se bachana', 'Files delete karna'], 0],
    ['E-commerce ka kya arth hai?', ['Email bhejna', 'Internet ke madhyam se kharid-bikri karna', 'Chat karna', 'Education dena'], 1],
    ['B2C ka poora naam kya hai?', ['Buyer-to-Consumer', 'Business-to-Client', 'Business-to-Consumer', 'Business-to-Company'], 2],
    ['B2B ka poora naam kya hai?', ['Buyer-to-Business', 'Business-to-Business', 'Business-to-Buyer', 'None'], 1],
    ['C2C ka udaharan kaun sa platform hai?', ['Flipkart', 'Amazon', 'OLX / Quikr', 'Myntra'], 2],
    ['Blog shabd kiska combination hai?', ['Data + Log', 'Web + Blog', 'Net + Log', 'Web + Log'], 3],
    ['Podcast kya hota hai?', ['Audio/Video digital media file jo internet par uplabdh hoti hai', 'Text document', 'Spreadsheet', 'Operating system'], 0],
    ['IoT ka poora naam kya hai?', ['Integrated Operating Tool', 'Internet of Technology', 'Internet of Things', 'None'], 2],
    ['Social Networking site ka udaharan kaun sa hai?', ['Facebook', 'Instagram', 'Twitter (X)', 'All of the above'], 3],
    ['LinkedIn kis prakar ki networking site hai?', ['Entertainment', 'Professional Networking', 'Video Sharing', 'E-commerce'], 1],
    ['Domain name ke ant me ".edu" kya darsata hai?', ['Educational institution', 'Government site', 'Network site', 'Commercial site'], 0],
    ['Domain name ke ant me ".gov" kya darsata hai?', ['Government website', 'General website', 'Gaming site', 'None'], 0],
    ['Domain name ke ant me ".mil" kya darsata hai?', ['Miscellaneous site', 'Medical site', 'Multimedia site', 'Military website'], 3],
    ['Top Level Domain (TLD) ka udaharan kaun sa hai?', ['.com', '.org', '.net', 'All of the above'], 3],
    ['Web page ka pehla page kya kahlata hai?', ['First page', 'Master page', 'Homepage', 'Index page'], 2],
    ['Hyperlink ko web page par kisse pehchana jata hai?', ['Red box', 'Blue and underlined text ya image', 'Blinking text', 'Bold text'], 1],
    ['Web hosting ka kya arth hai?', ['Web pages ko server par store karna taki internet par dikh sakein', 'Internet speed badhana', 'Domain kharidna', 'Code likhna'], 0],
    ['FTP server par files upload karne ki kriya ko kya kehte hain?', ['Downloading', 'Uploading', 'Browsing', 'Transferring'], 1],
    ['Server se apne computer par file lane ko kya kehte hain?', ['Copying', 'Uploading', 'Downloading', 'Pasting'], 2],
    ['Packet switching kisme use hoti hai?', ['Hard disk read me', 'Electricity supply me', 'Internet data transmission me', 'RAM storage me'], 2],
    ['Gateway का mukhya upyog kahan hota hai?', ['Alag-alag protocol wale networks ko aapas me jodne ke liye', 'Computer on karne ke liye', 'Mouse connect karne ke liye', 'None'], 0],
    ['Router ka mukhya karya kya hai?', ['Screen capture karna', 'Virus banana', 'Print nikalna', 'Data packets ko sabse behtar rasta (path) dena'], 3],
    ['Switch network me kya karta hai?', ['Internet band karta hai', 'Devices ko ek network ke andar aasapas jorta hai aur data direct bhejta hai', 'Password badalta hai', 'None'], 1],
    ['Hub aur Switch me kya antar hai?', ['Hub sabhi ports par data bhejta hai, Switch specific target port par bhejta hai', 'Dono ekdam same hain', 'Hub smart hota hai', 'None'], 0],
    ['Bandwidth ki unit kya hoti hai?', ['Watts', 'Hertz', 'Bytes', 'Bits per second (bps)'], 3],
    ['Baud rate kisse sambandhit hai?', ['Screen resolution', 'Computer weight', 'Modulation rate / transmission speed', 'RAM speed'], 2],
    ['SSL ka poora naam kya hai?', ['Secure System Link', 'Secure Sockets Layer', 'Simple Socket Layer', 'Safe Secure Link'], 1],
    ['TLS ka poora naam kya hai?', ['Transmission Layer Standard', 'Transfer Link System', 'Transport Layer Security', 'None'], 2],
    ['Phishing attack se bachne ke liye kya nahi karna chahiye?', ['Antivirus update rakhna chahiye', 'Kisi bhi anjaan link par click ya personal details share nahi karni chahiye', 'Strong password rakhna chahiye', 'HTTPS check karna chahiye'], 1],
    ['Ransomware kya hai?', ['Browser', 'Ek achha software', 'Antivirus', 'Ek malware jo computer ko lock ya encrypt karke firauti (ransom) maangta hai'], 3],
    ['Spyware ka mukhya uddeshya kya hota hai?', ['User ki gatividhiyon par chupchap najar rakhna aur data churana', 'Computer ki speed badhana', 'Game khelna', 'Wallpaper badlana'], 0],
    ['Adware kisse juda hota hai?', ['System ko secure karne se', 'Unwanted advertisements dikhane wale software se', 'Audio play karne se', 'None'], 1],
    ['Trojan Horse kya hai?', ['Ek harmful program jo useful software ki tarah dikhta hai', 'Ek horse game', 'Network cable', 'Browser'], 0],
    ['Worm aur Virus me mukhya antar kya hai?', ['Worm khud replicate ho sakta hai bina host file ke, virus ko host file chahiye hoti hai', 'Dono bilkul same hain', 'Virus nuksan nahi karta', 'None'], 0],
    ['CC aur BCC dono kahan hote hain email compose karte samay?', ['Subject me', 'Footer section me', 'Attachment me', 'Header section me'], 3],
    ['Email me attachment ki size limit aamtaur par kis par nirbhar karti hai?', ['Keyboard par', 'Computer ki RAM par', 'Email provider (jaise Gmail, Yahoo) ki policy par', 'Internet speed par'], 2],
    ['Gmail me ek bar me maximum kitni size ki file attach ki ja sakti hai (direct)?', ['25 MB', '10 MB', '50 MB', '100 MB'], 0],
    ['Agar 25 MB se badi file bhejni ho Gmail se, toh kiska prayog hota hai?', ['Direct bhej sakte hain', 'Bluetooth ka', 'Pendrive ka', 'Google Drive link ka'], 3],
    ['URL me kitne mukhya mukhya bhaag hote hain?', ['Paanch', 'Sirf ek', 'Protocol, Domain name, Path/File name', 'Das'], 2],
    ['Netiquettes ka kya arth hai?', ['Network speed ke niyam', 'Internet par use hone wale shishtachar (etiquette) ke niyam', 'Hardware cleaning ke niyam', 'None'], 1],
    ['Cyber Crime ki reporting ke liye Bharat sarkar ka portal kaun sa hai?', ['nielit.gov.in', 'cybercrime.gov.in', 'rbi.org.in', 'ccc.gov.in'], 1],
    ['Internet pe har ek device ka ek unique address hota hai, use kya kehte hain?', ['Text ID', 'Home Address', 'Mac ID ke alawa kuch nahi', 'IP Address'], 3],
    ['Static IP address kya hota hai?', ['Jo sirf offline chale', 'Jo har bar connect karne par badal jata hai', 'Aisa IP address jo badalta nahi hai (fixed rehta hai)', 'None'], 2],
    ['Dynamic IP address kya hota hai?', ['Jo kabhi nahi badalta', 'Jo internet se connect hone par har bar naya assign hota hai', 'Jo sirf printer ke liye ho', 'None'], 1],
    ['Telnet ka prayog kiske liye hota hai?', ['Remote computer ko text-based interface se access karne ke liye', 'File download ke liye', 'Video streaming ke liye', 'Printing के लिए'], 0],
    ['SSH ka poora naam kya hai?', ['Simple Shell', 'Secure System Host', 'Secure Shell', 'Safe Server Host'], 2],
    ['DNS kis port number par kaam karta hai?', ['Port 21', 'Port 80', 'Port 443', 'Port 53'], 3],
    ['HTTP default roop se kis port par kaam karta hai?', ['Port 21', 'Port 443', 'Port 25', 'Port 80'], 3],
    ['HTTPS default roop se kis port par kaam karta hai?', ['Port 443', 'Port 80', 'Port 21', 'Port 110'], 0],
    ['FTP default roop se kis port par kaam karta hai?', ['Port 80', 'Port 20 aur 21', 'Port 53', 'Port 443'], 1],
    ['SMTP (Simple Mail Transfer Protocol) kis port par kaam karta hai?', ['Port 110', 'Port 80', 'Port 25', 'Port 443'], 2],
    ['POP3 (Post Office Protocol v3) kis port par kaam karta hai?', ['Port 53', 'Port 25', 'Port 80', 'Port 110'], 3],
    ['IMAP (Internet Message Access Protocol) kis port par kaam karta hai?', ['Port 25', 'Port 143', 'Port 80', 'Port 443'], 1],
    ['Web page par move karne ke liye kis language ka use hota hai (structure ke alawa design ke liye)?', ['Python', 'C Language', 'CSS (Cascading Style Sheets)', 'Assembly'], 2],
    ['JavaScript का mukhya upyog web development me kiske liye hota hai?', ['Web pages me interactivity aur logic add karne ke liye', 'Database banane ke liye', 'Hardware design ke liye', 'Operating system ke liye'], 0],
    ['Cookies kya hoti hain?', ['Virus type', 'Chhoti text files jo website dwara user ke browser par store ki jati hain session track karne ke liye', 'Hardware part', 'Internet speed booster'], 1],
    ['Cache memory browser me kyu hoti hai?', ['Frequently visited web pages ko fast load karne ke liye', 'Virus rakhne ke liye', 'RAM badhane ke liye', 'None'], 0],
    ['Web scraping ka kya arth hai?', ['Website hack karna', 'Website delete karna', 'Websites se automatic tarike se data extract karna', 'None'], 2],
    ['Internet of Things (IoT) me devices aapas me kiske madhyam se judti hain?', ['Manual switch से', 'Sirf wires ke madhyam se', 'Bluetooth ke alawa kuch nahi', 'Internet aur sensors ke madhyam se'], 3]
  ],
  c7: [
    ['UMANG App ka poora naam kya hai?', ['Unified Mobile Application for New-age Governance', 'Universal Mobile Access Network Governance', 'Unified Master Application Network Guide', 'None of these'], 0],
    ['UMANG App ko kis mantralaya dwara launch kiya gaya hai?', ['Ministry of Home Affairs', 'Ministry of Finance', 'Ministry of Electronics and Information Technology (MeitY)', 'Ministry of Education'], 2],
    ['Digilocker me user ko kitna cloud storage space milta hai?', ['5 GB', '1 GB', '2 GB / 1 GB (Aamtaur par 1GB)', '10 GB'], 1],
    ['Digilocker account banane ke liye kiska hona anivarya hai?', ['Passport', 'PAN Card', 'Voter ID', '[Aadhaar Redacted] aur Mobile Number'], 3],
    ['UPI (Unified Payments Interface) ko kisne viksit (develop) kiya hai?', ['NPCI (National Payments Corporation of India)', 'RBI', 'SBI', 'Ministry of Finance'], 0],
    ['UPI kiske dwara launch kiya gaya tha?', ['Urjit Patel', 'Narendra Modi', 'Nirmala Sitharaman', 'Dr. Raghuram Rajan (RBI Governor ke samay)'], 3],
    ['USSD code (*99#) kisase sambandhit hai?', ['Internet speed check karne ke liye', 'Mobile banking bina internet ke karne ke liye', 'Balance transfer via Wi-Fi', 'None'], 1],
    ['USSD (*99#) service kis network par kaam karti hai?', ['Bluetooth', 'Internet / Wi-Fi', 'GSM / Cellular Network (USSD channels)', 'Satellite only'], 2],
    ['AEPS ka poora naam kya hai?', ['Aadhaar Electronic Payment Service', 'Automatic Enabled Payment System', 'Aadhaar Enabled Payment System', 'None'], 2],
    ['AEPS ke madhyam se transaction karne ke liye kya zaroori hai?', ['UPI PIN', '[Your Aadhaar] number aur Biometric (Fingerprint/Iris)', 'Debit Card Password', 'Credit Card'], 1],
    ['IMPS (Immediate Payment Service) ki mukhya visheshta kya hai?', ['24x7x365 instant fund transfer', 'Sirf banking hours me chalta hai', '2-3 din ka samay lagta hai', 'Sirf weekend par chalta hai'], 0],
    ['NEFT ka settlement kis adhar par hota hai?', ['Monthly basis', 'Real-time (ek-ek karke)', 'Weekly basis', 'Batches (Hourly batches)'], 3],
    ['RTGS ka poora naam kya hai?', ['Rapid Transfer Gross System', 'Real Time Gross Settlement', 'Real Transaction Global Service', 'None'], 1],
    ['RTGS से minimum kitni rashi transfer ki ja sakti hai?', ['2 Lakhs', '1 Lakh', '50,000', 'Koi limit nahi'], 0],
    ['NEFT ki koi minimum limit hai kya?', ['50,000', '10,000', 'Nahi, koi minimum limit nahi hai', '1 Lakh'], 2],
    ['BHIM App ka poora naam kya hai?', ['Banking Help in Mobile', 'Bharat India Money', 'Bharat Instant Money', 'Bharat Interface for Money'], 3],
    ['BHIM app ko kab launch kiya gaya tha?', ['30 December 2016', '15 August 2015', '26 January 2017', '1 January 2018'], 0],
    ['BHIM App me UPI PIN kitne digit ka hota hai?', ['8 digit', 'Sirf 4 digit', 'Sirf 6 digit', '4 ya 6 digit'], 3],
    ['Aadhaar number me kitne digits hote hain?', ['12', '16', '10', '14'], 0],
    ['PAN card me kitne alphanumeric characters hote hain?', ['10', '12', '9', '16'], 0],
    ['IFSC code ke shuru ke 4 characters kya darshate hain?', ['Branch code', 'Bank ka naam (Bank Code)', 'State code', 'Country code'], 1],
    ['IFSC code kitne characters ka hota hai?', ['11', '10', '12', '9'], 0],
    ['IFSC code ka 5th character hamesha kya hota hai?', ['\'A\'', '\'1\'', '\'0\' (Zero)', '\'9\''], 2],
    ['Credit Card par CVV (Card Verification Value) kitne digit ka hota hai?', ['3', '4', '2', '6'], 0],
    ['American Express (Amex) card par CVV/CID kitne digit ka hota hai?', ['4', '3', '5', '6'], 0],
    ['e-Governance ka mukhya uddeshya kya hai?', ['Sirf tax badhana', 'Sarkar ki sevaon ko nagrikon tak saral, transparent aur digital banana', 'Paper ka kharch badhana', 'None'], 1],
    ['G2C (Government to Citizen) e-Governance ka udaharan kya hai?', ['Internal employee mail', 'Government bidding', 'Passport seva, Online bill payment, [Aadhaar Redacted] services', 'None'], 2],
    ['G2B (Government to Business) ka udaharan kaun sa hai?', ['Voter ID card', 'E-Procurement, GST filing, Company registration', 'Ration card', 'None'], 1],
    ['G2G (Government to Government) ka arth kya hai?', ['Sarkar aur company ke beech', 'Sarkar aur janta ke beech', 'Do sarkari vibhago ke beech digital data exchange ya communication', 'None'], 2],
    ['G2E (Government to Employee) e-Governance me kya shamil hai?', ['Public grievance', 'Sarkari karmchariyon ke salary, pension aur service records ka digital management', 'Commercial tax', 'None'], 1],
    ['National Portal of India (india.gov.in) kiska udaharan hai?', ['Social media', 'Private blog', 'E-commerce site', 'Single-window access to Indian Government services (G2C/ Portal)'], 3],
    ['IRCTC kis kshetra se judi e-Governance seva hai?', ['Electricity', 'Flight booking only', 'Bus booking', 'Railway ticket booking aur tourism'], 3],
    ['Jeevan Pramaan Patra kiske liye hai?', ['Income certificate', 'Birth certificate', 'Pensioners ke liye digital life certificate', 'Driving license'], 2],
    ['GeM (Government e-Marketplace) kya hai?', ['Banking portal', 'Private shopping app', 'Social networking', 'Sarkari vibhago dwara samagri (goods/services) ki online kharid ke liye portal'], 3],
    ['mAadhaar app kis dwara jari kiya gaya hai?', ['Income Tax Dept', 'NPCI', 'RBI', 'UIDAI (Unique Identification Authority of India)'], 3],
    ['National Voter Service Portal (NVSP) kisliye upyogi hai?', ['PAN card ke liye', 'Voter ID card ke liye aavedan aur naam sudharne ke liye', 'Passport के लिए', 'Ration card ke liye'], 1],
    ['DigiLocker me documents kis format me verify hote hain?', ['Xerox copy', 'Manual stamp', 'Digital format (URI / Issuer verified XML/PDF)', 'None'], 2],
    ['UPI me VPA ka poora naam kya hai?', ['Verified Payment Account', 'Virtual Payment Address', 'Virtual Personal Access', 'None'], 1],
    ['UPI ID ka format kaisa hota hai?', ['16 digit number', 'ip address format', 'name@bankhandle (e.g., rahul@oksbi)', 'Mobile number only'], 2],
    ['AEPS transaction me customer ka authenticating factor kya hota hai?', ['Credit card number', 'ATM Pin', 'Net banking password', '[Aadhaar Redacted] Number + Biometric Data'], 3],
    ['Bharat Bill Payment System (BBPS) ka mukhya karya kya hai?', ['Share market trading', 'Money transfer', 'Sabhi utility bills (bijli, pani, gas, mobile) ka ek hi platform se online bhugtan', 'Insurance claim'], 2],
    ['RuPay debit card kis sanstha dwara launch kiya gaya hai?', ['NPCI (National Payments Corporation of India)', 'Visa', 'Mastercard', 'American Express'], 0],
    ['RuPay card kis prakar ka payment network hai?', ['US Payment network', 'Indian Domestic Card Payment Network', 'European network', 'Global network only'], 1],
    ['POS (Point of Sale) machine ka upyog kahan hota hai?', ['Computer on karne ke liye', 'Dukano par card se payment lene ya swipe karne ke liye', 'Print nikalne ke liye', 'None'], 1],
    ['Micro ATM kya hota hai?', ['Chhota portable device jo bank mitra ya CSP dwara AEPS/card transactions ke liye use hota hai', 'ATM machine jo choti ho', 'Coin machine', 'None'], 0],
    ['Kisan Credit Card (KCC) yojana kis varsh shuru ki gayi thi?', ['1995', '2005', '2010', '1998-99'], 3],
    ['Pradhan Mantri Jan Dhan Yojana (PMJDY) ki shuruat kab hui thi?', ['January 2014', 'August 2015', 'August 2014', 'May 2014'], 2],
    ['PMJDY ke antargat khulne wale account me kitna overdraft (OD) facility mil sakta hai?', ['Koi OD nahi', '1 Lakh', '50,000', 'Aamtaur par 10,000 tak (pahle 5,000 tha)'], 3],
    ['Atal Pension Yojana (APY) kis umra ke logo ke liye hai?', ['18 se 40 varsh', '21 se 60 varsh', '18 se 60 varsh', 'Koi bhi'], 0],
    ['Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) ke tahat annual premium kitna hai?', ['Rs. 12 per annum', 'Rs. 436 per annum', 'Rs. 330 per annum', 'Rs. 1000 per annum'], 1],
    ['Pradhan Mantri Suraksha Bima Yojana (PMSBY) ka annual premium kitna hai?', ['Rs. 100 per annum', 'Rs. 12 per annum', 'Rs. 330 per annum', 'Rs. 20 per annum'], 3],
    ['Pradhan Mantri Suraksha Bima Yojana (PMSBY) kis prakar ka bima deta hai?', ['Health Insurance', 'Life Insurance', 'Accidental Death and Disability Insurance', 'Crop Insurance'], 2],
    ['National Cyber Crime Reporting Portal kis mantralaya ke antargat ata hai?', ['Ministry of Finance', 'Ministry of IT', 'Ministry of Home Affairs (MHA)', 'RBI'], 2],
    ['National Scholarship Portal (NSP) kisliye upyogi hai?', ['School admission ke liye', 'Students ke liye various central aur state scholarships ke aavedan ke liye', 'Exam result ke liye', 'None'], 1],
    ['e-NAM (National Agriculture Market) kis kshhetra se juda hai?', ['Krishi mandi (Agricultural markets) ka pan-India electronic trading portal', 'Education market', 'E-commerce retail', 'None'], 0],
    ['Soil Health Card scheme ka mukhya uddeshya kya hai?', ['Tractor dena', 'Loan dena', 'Beej dena', 'Khet ki mitti ki urvarakta (fertility) ki janch karke kisan ko salah dena'], 3],
    ['National Identity Card ke roop me kise manyata prapt hai?', ['Voter ID', 'Pan Card', 'Driving License', '[Aadhaar Redacted] Card'], 3],
    ['[Aadhaar Redacted] biometrics me kya-kya shamil hota hai?', ['Sirf blood group', 'Sirf signature', 'Fingerprints aur Iris scan (aur face photograph)', 'None'], 2],
    ['UPI transaction me money transfer kitne samay me hota hai?', ['24 ghante me', 'Real-time (kuch hi seconds me)', '2 din me', '7 din me'], 1],
    ['UPI 123Pay kisliye launch ki gayi thi?', ['Feature phones (non-smartphone) par UPI payment karne ke liye', 'ATM ke liye', 'International payment ke liye', 'None'], 0],
    ['e-Rupee (e-Rupi) kya hai?', ['Cryptocurrency by RBI', 'Cashless aur contact-less digital payment instrument (Prepaid voucher based on QR/SMS code)', 'Normal UPI app', 'None'], 1],
    ['e-Rupi ko kisne launch kiya gaya tha?', ['Reserve Bank of India (RBI) / NPCI ke sahyog se', 'SBI', 'World Bank', 'Microsoft'], 0],
    ['Central Bank Digital Currency (CBDC) ya Digital Rupee kya hai?', ['Private token', 'Bitcoin jaisi cryptocurrency', 'RBI dwara jari ki gayi legal tender digital currency', 'None'], 2],
    ['DigiLocker me issued documents ka kya status hota hai?', ['Valueless hain', 'Sirf copy maane jate hain', 'IT Act 2000 ke tahat original physical documents ke barabar legal validity hoti hai', 'None'], 2],
    ['Passport seva project kiska udaharan hai?', ['Private project', 'Mission Mode Project (MMP) under e-Governance', 'Banking project', 'None'], 1],
    ['E-District project ka kya uddeshya hai?', ['Zila star par citizen services (jaise caste, income, domicile certificates) online dena', 'Zila me computer bechna', 'Road banana', 'None'], 0],
    ['CSC (Common Service Centre) ka kya karya hai?', ['Bank chalana', 'Sirf computer sikhana', 'Gramin aur shhari kshetro me digital sevaon (digital services) ko aam janta tak pahuchana', 'None'], 2],
    ['National e-Governance Plan (NeGP) kab approve hua tha?', ['March 2000', 'January 2010', 'August 2014', 'May 2006'], 3],
    ['Jeevan Pramaan portal ka labh kisko milta hai?', ['Businessmen ko', 'Students ko', 'Farmers ko', 'Pensioners ko (lifecertificate dene ke liye)'], 3],
    ['National Judicial Data Grid (NJDG) kis se juda hai?', ['Police database', 'Adalato (Courts) ke mukadmo aur unke status ka digital data grid', 'Land records', 'Bank loans'], 1],
    ['B2C e-Commerce ka udaharan kya hai?', ['Amazon, Flipkart se saman kharidna', 'Wholesaler se manufacturer ko bechna', 'OLX par bechna', 'None'], 0],
    ['C2B e-Commerce ka kya arth hai?', ['Business to consumer', 'Consumer apni services ya product business ko bechte hain (jaise freelance work)', 'Government to citizen', 'None'], 1],
    ['B2B e-Commerce me kya hota hai?', ['Ek business se dusre business ke beech len-den', 'Customer se customer', 'Sarkar se janta', 'None'], 0],
    ['E-Governance ki sabse pehli sthar ya paaydan (pillar) kise mana jata hai?', ['Online shopping', 'Direct voting', 'Information sharing / Connectivity aur infrastructure', 'None'], 2],
    ['UPI me maximum transaction limit per day aamtaur par kitni hoti hai?', ['Unlimited', 'Rs. 10,000', 'Rs. 50,000', 'Rs. 1 Lakh (kuch categories jaise IPO/hospital/education me jyada bhi hoti hai)'], 3],
    ['IMPS me fund transfer karne ke liye kya zaroori hota hai?', ['Sirf Aadhaar', 'Beneficiary ka Account Number aur IFSC Code (ya MMID)', 'Sirf Mobile number', 'None'], 1],
    ['MMID (Mobile Money Identifier) kitne digit ka hota hai?', ['12 digits', '4 digits', '11 digits', '7 digits'], 3],
    ['NEFT system kiske dwara operate kiya jata hai?', ['Ministry of Finance', 'SBI', 'NPCI', 'Reserve Bank of India (RBI)'], 3],
    ['RTGS system bhi kiske dwara operate hota hai?', ['NPCI', 'Commercial banks', 'Reserve Bank of India (RBI)', 'NABARD'], 2],
    ['Credit card aur Debit card me mukhya antar kya hai?', ['Debit card me apne khate ke paise use hote hain, Credit card me bank se loan/credit limit milti hai', 'Dono ekdam same hain', 'Debit card me udhar milta hai', 'None'], 0],
    ['Smart Card kya hota hai?', ['Aisa card jisme microchip embedded hoti hai data store karne ke liye', 'Sirf plastic card bina chip ke', 'Paper card', 'None'], 0],
    ['OTP (One Time Password) ka upyog kiska udaharan hai?', ['Storage ke liye', 'Speed badhane ke liye', 'Two-factor authentication (2FA) / Security ke liye', 'None'], 2],
    ['Biometric authentication kis par adharit hota hai?', ['ATM PIN par', 'Password par', 'OTP par', 'Unique physical characteristics (Fingerprint, Iris, Face) par'], 3],
    ['E-Sign service ka kya upyog hai?', ['Email bhejna', 'Electronic documents par [Aadhaar Redacted]-based e-KYC ke madhyam se digital signature karna', 'Scan karna', 'None'], 1],
    ['National Optical Fiber Network (NOFN) / BharatNet ka mukhya uddeshya kya hai?', ['Railway station par Wi-Fi', 'Mobile tower lagana', 'Desh ki sabhi gram panchayato ko high-speed broadband internet connectivity dena', 'None'], 2],
    ['e-Challan system kis kshetra me upyogi hai?', ['Court case ke liye', 'Traffic rules violation par digital fine/challan katne aur bharne ke liye', 'Electricity bill ke liye', 'None'], 1],
    ['Tele-Law service ka mukhya uddeshya kya hai?', ['Gramin kshetron ke logo ko video conferencing ke zariye kanooni salah (legal advice) dilwana', 'Online court trial', 'Police FIR online', 'None'], 0],
    ['DigiLocker kis ministry ke antargat ata hai?', ['Ministry of Education', 'Ministry of Finance', 'Ministry of Home Affairs', 'MeitY (Ministry of Electronics and Information Technology)'], 3],
    ['UPI Lite kisliye design kiya gaya hai?', ['International transfer', 'Bade loan ke liye', 'Chote value ke offline/instant transactions ke liye bina PIN ke (on-device wallet)', 'None'], 2],
    ['UPI AutoPay ka kya upyog hai?', ['Auto call karna', 'Recurring payments (jaise monthly subscription, bills, SIP) ke liye automatic debit set karna', 'Auto reply email', 'None'], 1],
    ['Cyber Swachhta Kendra (Botnet Cleaning and Malware Analysis Centre) kiska initiative hai?', ['UIDAI', 'RBI', 'NPCI', 'CERT-In (Indian Computer Emergency Response Team)'], 3],
    ['BHIM app kitni bhashao (languages) ko support karta hai?', ['20 se adhik regional languages ko', 'Sirf English', 'Sirf Hindi aur English', '5 languages'], 0],
    ['National Payment Corporation of India (NPCI) ki sthapna kis varsh hui thi?', ['2008', '2010', '2014', '2016'], 0],
    ['NPCI kiske margdarshan me sthapit ki gayi thi?', ['Ministry of Finance', 'SEBI', 'RBI aur Indian Banks\' Association (IBA)', 'SBI'], 2],
    ['Mobile Wallet (jaise Paytm, PhonePe wallet) kis prakar ke license ke antargat aate hain?', ['Banking license', 'PPI (Prepaid Payment Instruments) license by RBI', 'Telecom license', 'None'], 1],
    ['[Aadhaar Redacted] Biometric Locking ki suvidha kyon di jati hai?', ['Aadhaar card cancel karne ke liye', 'Security badhane ke liye taki bina permission ke koi biometric use na kar sake', 'Number badalne ke liye', 'None'], 1],
    ['Virtual ID (VID) [Aadhaar Redacted] me kitne digit ki hoti hai?', ['8 digits', '12 digits', '10 digits', '16 digits'], 3],
    ['[Aadhaar Redacted] Letter ya PVC card par diya gaya QR code kisliye hota hai?', ['Game khelne ke liye', 'Payment ke liye', 'Quick offline verification aur demographic details ke liye', 'None'], 2],
    ['e-Governance me "SMART" governance ka kya arth hai?', ['Simple, Moral, Accountable, Responsive, and Transparent', 'Speed, Mobile, Advanced, Reliable, Technical', 'System, Machine, Auto, Routine, Tool', 'None'], 0],
    ['National e-Governance Division (NeGD) ki sthapna kab ki gayi thi?', ['2009', '2006', '2012', '2015'], 0]
  ],
  c8: [
    ['Industry 4.0 (Fourth Industrial Revolution) ka mukhya adhar kya hai?', ['Sirf manual labor', 'Cyber-Physical Systems, AI, IoT, aur Cloud Computing', 'Steam engines aur electricity', 'Mainframe computers'], 1],
    ['Artificial Intelligence (AI) ke pita (Father) kise kaha jata hai?', ['Geoffrey Hinton', 'Alan Turing', 'Marvin Minsky', 'John McCarthy'], 3],
    ['Turing Test kiske liye design kiya gaya tha?', ['Internet speed check karne ke liye', 'Computer ki speed napne ke liye', 'Kisi machine ki intelligent behavior (human-like thinking) ko parakhne ke liye', 'Virus detect karne ke liye'], 2],
    ['Machine Learning (ML) kiska ek subfield hai?', ['Artificial Intelligence (AI)', 'Data Science', 'Computer Networking', 'Cyber Security'], 0],
    ['Cloud Computing me SaaS ka poora naam kya hai?', ['Security as a Service', 'System and Application Software', 'Storage as a Service', 'Software as a Service'], 3],
    ['Cloud Computing me PaaS ka poora naam kya hai?', ['Platform as a Service', 'Program as a Service', 'Public and Access System', 'None'], 0],
    ['Cloud Computing me IaaS ka poora naam kya hai?', ['Internet and Application Service', 'Infrastructure as a Service', 'Integrated Access System', 'None'], 1],
    ['Big Data ki \'3 Vs\' properties me kya-kya shamil hai?', ['Voice, Video, Visual', 'Value, Validity, Vision', 'Volume, Velocity, Variety', 'None'], 2],
    ['Internet of Things (IoT) me sabse mukhya bhumika kiski hoti hai?', ['Sensors aur Actuators ki', 'Sirf keyboards ki', 'Heavy printers ki', 'None'], 0],
    ['Blockchain technology mukhya roop se kiske liye famous hai?', ['Fast printing ke liye', 'Video streaming ke liye', 'Decentralized, secure, aur tamper-proof distributed ledger (jaise Cryptocurrency me)', 'Virus banane ke liye'], 2],
    ['Robotic Process Automation (RPA) ka kya upyog hai?', ['Factory me physical robot se saman uthwana', 'Repetitive aur rule-based digital tasks ko software bots ke zariye automate karna', 'Typing test lena', 'None'], 1],
    ['3D Printing ka dusra naam kya hai?', ['Manual crafting', 'Subtractive Manufacturing', 'Photocopying', 'Additive Manufacturing'], 3],
    ['Virtual Reality (VR) aur Augmented Reality (AR) me mukhya antar kya hai?', ['VR poori tarah se simulated digital environment banata hai, AR real world ke upar digital elements overlay karta hai', 'Dono ekdam same hain', 'AR me headset zaroori hai, VR me nahi', 'None'], 0],
    ['Big Data me \'Velocity\' shabd ka kya arth hai?', ['Data ke prakar (types)', 'Data ka aakar (size)', 'Data ke aane aur process hone ki raftar (speed)', 'Data ki cost'], 2],
    ['Big Data me \'Volume\' ka kya arth hai?', ['Sound volume', 'Extremely large amount of data (bada data size)', 'Storage speed', 'None'], 1],
    ['Big Data me \'Variety\' ka kya arth hai?', ['Color variety', 'Alag-alag tarike ka data (Structured, Semi-structured, Unstructured)', 'Network types', 'None'], 1],
    ['Cryptography kisse sambandhit hai?', ['Internet speed badhana', 'Data delete karna', 'Data ko secret code me badalkar surakshit rakhna (Encryption/Decryption)', 'None'], 2],
    ['Plaintext ko ciphertext me badalne ki kriya ko kya kehte hain?', ['Compression', 'Decryption', 'Hashing', 'Encryption'], 3],
    ['Ciphertext ko wapas readable plaintext me badalne ko kya kehte hain?', ['Decryption', 'Encryption', 'Formatting', 'Decoding'], 0],
    ['Symmetric Encryption me kya hota hai?', ['Encryption aur Decryption dono ke liye ek hi (same) secret key ka prayog hota hai', 'Alag-alag keys hoti hain', 'Koi key nahi hoti', 'None'], 0],
    ['Asymmetric Encryption me kitni keys use hoti hain?', ['Koi key nahi', 'Sirf ek key', 'Teen keys', 'Do keys (Public Key aur Private Key)'], 3],
    ['Firewall ka mukhya karya network security me kya hai?', ['Hard disk format karna', 'Virus clean karna', 'Incoming aur outgoing network traffic ko monitor karke rules ke adhar par allow ya block karna', 'None'], 2],
    ['Malware ka poora naam kya hai?', ['Manual Software', 'Malicious Software', 'Machineware', 'Multimedia Software'], 1],
    ['Ransomware kis prakar ka attack hai?', ['Jo user ki files ko lock/encrypt karke firauti (ransom) maangta hai', 'Sirf email spam karna', 'Password chori karna bina lock kiye', 'None'], 0],
    ['Phishing attack aamtaur par kis madhyam se kiya jata hai?', ['Bluetooth se', 'Direct physical attack', 'Fake emails aur fraudulent messages ke zariye', 'None'], 2],
    ['Vishing kya hoti hai?', ['Video phishing', 'Voice call ya phone ke zariye ki jane wali phishing (fraud)', 'SMS phishing', 'None'], 1],
    ['Smishing kya hoti hai?', ['Social media phishing', 'SMS (Text message) ke zariye ki jane wali phishing', 'Voice phishing', 'None'], 1],
    ['Spoofing ka kya arth hai?', ['File delete karna', 'Computer fast karna', 'Khud ko koi aur vishwasniya vyakti ya system dikhakar dhokha dena (Caller ID spoofing, IP spoofing)', 'None'], 2],
    ['Man-in-the-Middle (MitM) attack me kya hota hai?', ['Attacker do communicating parties ke beech ke connection ko secretly sunta ya badal deta hai', 'Computer physical tor par todna', 'Password bhul jana', 'None'], 0],
    ['DDoS (Distributed Denial of Service) attack ka mukhya uddeshya kya hota hai?', ['Server ya website par itna fake traffic bhejkar use down ya inaccessible kar dena', 'Data chori karna', 'Password badalna', 'None'], 0],
    ['Zero-Day Vulnerability kya hoti hai?', ['Free software', '0 din purana virus', 'Aisi software security flaw jiske baare me vendor ya developer ko pehle se pata nahi hota aur na hi patch hota hai', 'None'], 2],
    ['Antivirus software kis par kaam karta hai?', ['Internet speed badhane ke liye', 'Known signatures aur heuristics ke adhar par malware ko detect aur remove karne ke liye', 'Games chalane ke liye', 'None'], 1],
    ['Two-Factor Authentication (2FA) me kya hota hai?', ['Login ke liye do alag-alag verification factors (jaise Password + OTP) ki aavashyakta hoti hai', 'Do password dalne padte hain', 'Do computers use hote hain', 'None'], 0],
    ['Biometric security kiske antargat aati hai?', ['Something you have', 'Something you know', 'Something you are (apki sharirik visheshta)', 'None'], 2],
    ['Password kis security category me ata hai?', ['Something you have', 'Something you know', 'Something you are', 'None'], 1],
    ['ATM Card ya Smart Card kis security category me ata hai?', ['Something you are', 'Something you know', 'Something you have', 'None'], 2],
    ['Cyber Security me CIA triad ka poora naam kya hai?', ['Control Internet Authority', 'Computer Internet Access', 'Central Intelligence Agency', 'Confidentiality, Integrity, Availability'], 3],
    ['CIA triad me \'Confidentiality\' ka kya arth hai?', ['Data ko keval authorized logo tak hi simit rakhna (unauthorized access se bachana)', 'Data ko hamesha accessible rakhna', 'Data me badlav na hone dena', 'None'], 0],
    ['CIA triad me \'Integrity\' ka kya arth hai?', ['Data ko chupana', 'Data ki shuddhata aur satyata banaye rakhna taki usme bina anumasati ke koi badlav na kar sake', 'Fast network', 'None'], 1],
    ['CIA triad me \'Availability\' ka kya arth hai?', ['Encrypt karna', 'Data delete karna', 'Authorized users ke liye data aur systems hamesha samay par uplabdh (accessible) rehna', 'None'], 2],
    ['IoT devices me security sabse bada chinta ka vishay kyu hai?', ['Kyunki wo bohot bade hote hain', 'Kyunki unme resources (processing/memory) kam hote hain aur weak default passwords hote hain', 'Kyunki wo internet par nahi chalte', 'None'], 1],
    ['Edge Computing kya hoti hai?', ['Data ko cloud par bhejne ke bajaye source ya device ke nazdeek (edge par) process karna', 'Internet band karna', 'Screen ke kinare par kaam karna', 'None'], 0],
    ['Fog Computing kiske sabse kareeb hoti hai?', ['Printer', 'Hard disk', 'Keyboard', 'Edge computing aur cloud computing ke beech ki layer'], 3],
    ['Deep Learning kiska advanced roop hai?', ['Neural Networks (Artificial Neural Networks) / Machine Learning ka', 'Simple database ka', 'HTML coding ka', 'None'], 0],
    ['Natural Language Processing (NLP) kisse sambandhit hai?', ['Cable networking', 'Image processing', 'Computers ko manushya ki bhasha (boli ya likhi gayi bhasha) ko samajhne aur prsut karne me saksham banana', 'None'], 2],
    ['Computer Vision ka mukhya karya kya hai?', ['Text padhna', 'Computers ko digital images aur videos se visual information samajhne ki kshamta dena', 'Sound record karna', 'None'], 1],
    ['Augmented Reality (AR) ka ek prasiddh udaharan kaun sa hai?', ['Complete VR headset simulation', 'Pokémon GO game ya live filters', 'Normal text editor', 'None'], 1],
    ['Public Cloud ka udaharan kaun sa hai?', ['Office ka local server', 'Personal hard drive', 'Microsoft Azure, Amazon Web Services (AWS), Google Cloud', 'None'], 2],
    ['Private Cloud kya hota hai?', ['Aisa cloud infrastructure jo sirf ek hi organization ke liye dedicatedly use hota hai', 'Jo sabhi ke liye khula ho', 'Free internet storage', 'None'], 0],
    ['Hybrid Cloud me kya hota hai?', ['Public aur Private cloud ka combination (dono ka mishran)', 'Sirf offline storage', 'Sirf local network', 'None'], 0],
    ['Digital Signature kis par adharit hota hai?', ['Simple password par', 'Public Key Cryptography par', 'Manual signature scan par', 'None'], 1],
    ['Stuxnet kya tha?', ['Web browser', 'Ek achha antivirus', 'Ek operating system', 'Ek famous malicious worm jo industrial control systems (SCADA) ko target karne ke liye banaya gaya tha'], 3],
    ['Keylogger kya hai?', ['Password generator', 'Keyboard theek karne wala tool', 'Aisa software ya hardware jo keyboard par type kiye gaye har ek shabd ko record karta hai', 'None'], 2],
    ['Rootkit kya hota hai?', ['Plant root grow karne ka tool', 'Ek stealthy malware jo system me administrator (root) level ka access chupakar prapt karta hai', 'Antivirus', 'None'], 1],
    ['Botnet kya hota hai?', ['Chatting group', 'Robot network', 'Infected computers (bots) ka ek network jise hacker remote control se operate karta hai', 'None'], 2],
    ['Social Engineering in Cyber Security ka kya arth hai?', ['Logo ko manipulate karke ya unka vishwas jeetkar confidential jankari (password/OTP) nikalwana', 'Social media par post karna', 'Coding sikhana', 'None'], 0],
    ['Shoulder Surfing kya hoti hai?', ['Beach par ghumna', 'Surfing karna net par', 'Kisi vyakti ke peeche khade hokar uska password ya PIN dekhte rehna (chupkar)', 'None'], 2],
    ['Dumpster Diving ka kya arth hai?', ['Kisi ke kachre (dustbin) se purane documents, bills ya passwords ki slip dhoond kar jankari nikalna', 'Swimming pool me diving', 'Data recovery', 'None'], 0],
    ['Hackers me "White Hat" hackers kaun hote hain?', ['Cyber criminal jo nuksan pahuchate hain', 'Ethical hackers jo security test karne ke liye system me legally penetration karte hain', 'Jo computer nahi chalate', 'None'], 1],
    ['Hackers me "Black Hat" hackers kaun hote hain?', ['Cyber criminals jo galat uddeshya se system hack karte hain aur nuksan pahuchate hain', 'Security guards', 'Government officials', 'None'], 0],
    ['Hackers me "Grey Hat" hackers kaun hote hain?', ['Sirf official workers', 'Jo bina permission ke system hack karke kammiyan dhoondte hain par nuksan nahi pahuchate (bad me bata dete hain)', 'Beginners', 'None'], 1],
    ['IoT me RFID ka poora naam kya hai?', ['Radio Field Integration', 'Rapid Frequency Identification Data', 'Radio Frequency Identification', 'None'], 2],
    ['Smart Grid kisse juda hua hai?', ['Water supply', 'Electricity supply network jo digital communication aur IoT sensors ka upyog karta hai', 'Road traffic', 'None'], 1],
    ['AI me Expert Systems kis par adharit hote hain?', ['Simple text file par', 'Random guessing par', 'IF-THEN rules aur Knowledge Base par', 'None'], 2],
    ['Cloud storage me data backup ka sabse bada fayda kya hai?', ['Kisi bhi sthan se aur kisi bhi device se data ko access kiya ja sakta hai aur hardware kharab hone par bhi data safe rehta hai', 'Internet ki zaroorat nahi padti', 'Storage free hoti hai', 'None'], 0],
    ['SSL Certificate ka upyog website par kyu hota hai?', ['Design sundar banane ke liye', 'Website ki speed badhane ke liye', 'Browser aur web server ke beech secure, encrypted connection establish karne ke liye (HTTPS)', 'None'], 2],
    ['Cryptographic Hashing function ki mukhya visheshta kya hoti hai?', ['Yeh one-way process hoti hai (ciphertext/hash se original data wapas nahi banaya ja sakta)', 'Ye do-way hoti hai', 'Ye encryption jaisi hoti hai', 'None'], 0],
    ['MD5 aur SHA-256 kiske udaharan hain?', ['Operating systems ke', 'Antivirus ke', 'Web browsers ke', 'Cryptographic Hash Functions ke'], 3],
    ['Smart City concept me kiska prayog hota hai?', ['Sirf building banane ke liye', 'IoT, AI, Big Data aur sensors ka nagrikon ki suvidha aur management ke liye', 'Jungle lagane ke liye', 'None'], 1],
    ['Autonomous Vehicles (Driverless Cars) me kis technology ka mukhya upyog hota hai?', ['AI, Computer Vision, Sensors, aur Machine Learning ka', 'Sirf manual steering ka', 'Steam power ka', 'None'], 0],
    ['Data Analytics ka kya arth hai?', ['Data type karna', 'Data delete karna', 'Raw data ko analyze karke useful insights aur conclusions nikalna', 'None'], 2],
    ['IoT network me Gateway ka kya karya hai?', ['Electricity dena', 'IoT devices aur Cloud/Server ke beech bridge ya translator ka kaam karna', 'Battery charge karna', 'None'], 1],
    ['Cyber Bullying kya hoti hai?', ['Game khelna', 'Online shopping karna', 'Internet ya digital devices ke madhyam se kisi ko pareshan, threaten ya harass karna', 'None'], 2],
    ['Cyber Stalking ka kya arth hai?', ['Online walk karna', 'Internet par kisi vyakti ki online gatividhiyon par chupchap najar rakhna aur use harass karna', 'Shopping karna', 'None'], 1],
    ['Copyright infringement kya hai?', ['Kisi ki original creative work (jaise software, book, art) ko bina permission ke use ya copy karna', 'Computer virus banana', 'Internet band karna', 'None'], 0],
    ['Plagiarism ka kya arth hai?', ['Computer hack karna', 'Kisi aur ke likhe huye text ya vicharon ko apna bata kar pesh karna bina credit diye', 'File download karna', 'None'], 1],
    ['Open Source Software kya hota hai?', ['Jiska code chupaya gaya ho', 'Jo sirf paise dekar mile', 'Aisa software jiska source code sabhi ke liye free me uplabdh hota hai aur jisme badlav kiya ja sakta hai', 'None'], 2],
    ['Proprietary Software kya hota hai?', ['Aisa software jiska source code band hota hai aur copyright ke antargat surakshit hota hai (jaise MS Windows)', 'Free open source software', 'Virus', 'None'], 0],
    ['IoT me Actuator ka kya karya hota hai?', ['Sirf data read karna', 'Control signal ke adhar par physical action ya movement perform karna (jaise motor chalana, valve kholna)', 'Data store karna', 'None'], 1],
    ['IoT me Sensor ka kya karya hota hai?', ['Print nikalna', 'Action perform karna', 'Vatavaran (environment) se physical data (jaise temperature, light, motion) ko collect karna', 'None'], 2],
    ['Cloud Computing me elasticity ka kya arth hai?', ['Resource capacity ko zaroorat ke anusar automatically ghata ya badha sakne ki kshamta', 'Hardware ko kheech kar bada karna', 'Internet speed badhana', 'None'], 0],
    ['Deepfake technology kis par adharit hoti hai?', ['Simple audio recording par', 'Normal photo crop karne par', 'AI aur Deep Learning (Generative Adversarial Networks - GANs) par kisi ki bhi fake video/audio banane ke liye', 'None'], 2],
    ['AI ke vikas me Neural Network ki sanrachna kisase prerit hai?', ['Manushya ke dimaag ke biological neural system (neurons) se', 'Computer ke motherboard se', 'Telephone wire se', 'None'], 0],
    ['Supervised Learning (Machine Learning me) kya hoti hai?', ['Bina teacher ke sikhna', 'Jahan model ko labeled data (input ke sath correct output) ke madhyam se train kiya jata hai', 'Random data process karna', 'None'], 1],
    ['Unsupervised Learning me kya hota hai?', ['Manual coding karna', 'Labeled data dena', 'Jahan model ko unlabeled data diya jata hai aur wo khud patterns ya grouping dhoondta hai', 'None'], 2],
    ['Reinforcement Learning kisme upyogi hai?', ['Trial and error method ke dwara reward ya penalty ke adhar par sikhne me (jaise gaming ya robotics)', 'Sirf data entry me', 'Word processing me', 'None'], 0],
    ['Big Data me \'Veracity\' shabd ka kya arth hai?', ['Data ka aakar', 'Data ki quality, reliability aur trustworthiness (vishwasniyata)', 'Data ki speed', 'None'], 1],
    ['Big Data me \'Value\' ka kya arth hai?', ['Process kiye gaye data se kitni upyogi business value ya arth nikal raha hai', 'Data ki kimat (paisa)', 'File size', 'None'], 0],
    ['Cyber Security audit ka mukhya uddeshya kya hota hai?', ['Software install karna', 'Computer bechna', 'Organization ke IT systems aur security policies ka evaluation karke kammiyan dhoondna', 'None'], 2],
    ['Penetration Testing (Pen Test) kya hoti hai?', ['Real hack karke nuksan pahuchana', 'System ki security ko check karne ke liye authorized tarike se us par simulated cyber attack karna', 'Internet speed check karna', 'None'], 1],
    ['Honey Pot kya hota hai cyber security me?', ['Madhu makhi ka chhatta', 'Ek decoy (dhokha dene wala) system ya network resource jo hackers ko attract karne aur unke attack ko monitor karne ke liye banaya jata hai', 'Sweet software', 'None'], 1],
    ['Biometric system me False Acceptance Rate (FAR) ka kya arth hai?', ['Machine ki speed', 'Sahi vyakti ko reject karne ki rate', 'Galat vyakti (unauthorized person) ko authorized maan lene ki sambhavna', 'None'], 2],
    ['Biometric system me False Rejection Rate (FRR) ka kya arth hai?', ['Speed limit', 'Galat vyakti ko accept karna', 'None', 'Sahi vyakti (authorized person) ko system dwara galat tarike se reject kar dena'], 3],
    ['Secure Coding practices ka mukhya uddeshya kya hota hai?', ['Software me security vulnerabilities (bugs) ko shuru se hi rokna taki hacker uska fayda na utha sakein', 'Code lamba likhna', 'Sirf design sudharna', 'None'], 0],
    ['Cloud Computing me Multi-tenancy ka kya arth hai?', ['Network failure', 'Ek hi user ka kai computer use karna', 'None', 'Ek hi physical hardware/infrastructure par multiple independent customers (tenants) ka data securely share hona'], 3],
    ['Fog Computing term sabse pehle kis company ne introduce ki thi?', ['IBM ne', 'Microsoft ne', 'Google ne', 'Cisco Systems ne'], 3],
    ['AI me Chatbot ka udaharan kaun sa hai?', ['MS Paint', 'ChatGPT, Gemini, Alexa, Siri', 'Notepad', 'VLC Player'], 1],
    ['Blockchain me har ek block me kya hota hai?', ['Normal text', 'Sirf ek password', 'Transactions ka data, timestamp, aur pichle block ka cryptographic hash (pointer)', 'None'], 2],
    ['Cyber Security ke sandarbh me \'Patch\' kya hota hai?', ['Software ki kisi security vulnerability ya bug ko thik karne ke liye chhota update ya code fix', 'Kapde ka tukda', 'Virus', 'None'], 0],
    ['National Cyber Security Policy (India) kis varsh jari ki gayi thi?', ['2013', '2008', '2015', '2020'], 0]
  ],
  c9: [
    ['Bhashini (National Language Translation Mission) ka mukhya uddeshya kya hai?', ['Computer hardware banana', 'Bharat ki sabhi bhashao me digital content aur services ko aasan banana (AI-based translation)', 'Sirf English sikhana', 'None'], 1],
    ['Bhashini platform kis mantralaya ke antargat viksit kiya gaya hai?', ['Ministry of Culture', 'Ministry of Education', 'Ministry of Electronics and Information Technology (MeitY)', 'Ministry of Finance'], 2],
    ['Unicode standard ka mukhya upyog kiske liye hota hai?', ['Sound mixing ke liye', 'Sirf English text ke liye', 'Image processing ke liye', 'Duniya ki sabhi bhashao ke characters aur scripts ko digital roop me represent karne ke liye'], 3],
    ['ASCII code kitne bits ka hota hai standard roop me?', ['7 bits (Extended ASCII 8 bits)', '16 bits', '32 bits', '64 bits'], 0],
    ['Unicode me UTF-8 kitne bits/bytes ka variable-length encoding system hai?', ['1 to 4 bytes (8 to 32 bits)', 'Sirf 8 bits', 'Sirf 16 bits', '64 bits'], 0],
    ['Indic language fonts me kis encoding standard ka sabse adhik prayog hota hai modern systems me?', ['BCD', 'ASCII', 'EBCDIC', 'Unicode'], 3],
    ['Speech-to-Text (STT) technology ka kya arth hai?', ['Text ko aawaj me badalna', 'Boli gayi aawaj (speech) ko text me badalna', 'Video ko audio me badalna', 'None'], 1],
    ['Text-to-Speech (TTS) technology ka kya arth hai?', ['Print nikalna', 'Aawaj ko text me badalna', 'Likhe huye text ko computer ya device dwara aawaj me bolkar sunana', 'None'], 2],
    ['OCR (Optical Character Recognition) ka mukhya karya kya hai?', ['Printed ya handwritten text ki image ko editable machine-readable text me badalna', 'Image ko print karna', 'Barcode scan karna', 'None'], 0],
    ['OMR (Optical Mark Recognition) ka upyog kahan hota hai?', ['Text edit karne ke liye', 'Multiple choice questions ki answer sheets (jaise exams) ko automatic evaluate karne ke liye', 'Video record karne ke liye', 'None'], 1],
    ['MICR (Magnetic Ink Character Recognition) ka upyog mukhya roop se kahan hota hai?', ['School attendance me', 'Supermarket me billing ke liye', 'Banks me cheques ki processing aur verification ke liye', 'None'], 2],
    ['MICR code me kul kitne digits hote hain?', ['10 digits', '11 digits', '6 digits', '9 digits'], 3],
    ['MICR code ke shuru ke 3 digits kya darshate hain?', ['Branch code', 'Bank code', 'City (City code - India ke pin code ke pehle 3 digits)', 'None'], 2],
    ['MICR code ke beech ke 3 digits kya darshate hain?', ['Bank code', 'City code', 'Branch code', 'None'], 0],
    ['MICR code ke aakhri 3 digits kya darshate hain?', ['City code', 'Branch code', 'Bank code', 'None'], 1],
    ['Barcode reader kis technology par kaam karta hai?', ['Biometric par', 'Magnetic ink par', 'Radio waves par', 'Laser light reflection (Optical technology) par'], 3],
    ['QR Code (Quick Response Code) kisne invent kiya تھا?', ['IBM', 'Bill Gates', 'Apple', 'Denso Wave (Japan ki company ne 1994 me)'], 3],
    ['Barcode ke mukable QR Code me kya visheshta hoti hai?', ['QR code sirf ek line me hota hai', 'QR code me bohot adhik data (text/links) store kiya ja sakta hai aur ye kisi bhi angle se scan ho sakta hai', 'QR code me data store nahi hota', 'None'], 1],
    ['E-Commerce me B2C model ka udaharan kya hai?', ['OLX par do user ka vyapar', 'Do companiyon ka aapas me vyapar', 'Amazon ya Flipkart se grahak dwara saman kharidna', 'None'], 2],
    ['E-Commerce me C2C model ka udaharan kya hai?', ['OLX, Quikr ya eBay par ek grahak dwara dusre grahak ko saman bechna', 'Company se customer', 'Sarkar se janta', 'None'], 0],
    ['E-Commerce me B2B model ka udaharan kya hai?', ['Customer to Business', 'Customer to Customer', 'Ek manufacturer dwara wholesaler ya retailer ko bulk me saman bechna', 'None'], 2],
    ['E-Commerce me C2B model ka udaharan kya hai?', ['Ek freelancer designer dwara apni service kisi company ko dena', 'Amazon se saman lena', 'Retailer to customer', 'None'], 0],
    ['E-Commerce me M-Commerce (Mobile Commerce) ka kya arth hai?', ['Sirf computer se shopping', 'Mobile phones ya tablets ke madhyam se internet par kharid-bikri karna', 'Landline phone se order karna', 'None'], 1],
    ['Digital Marketplace ka udaharan kaun sa hai?', ['MS Paint', 'Notepad', 'VLC media player', 'Flipkart, Amazon, Snapdeal'], 3],
    ['Payment Gateway e-commerce me kya karta hai?', ['Saman deliver karta hai', 'Customer aur Bank ke beech secure payment transaction ko process aur authorize karta hai', 'Product pack karta hai', 'None'], 1],
    ['E-Commerce website par SSL/TLS certificate hona kyu anivarya hai?', ['Speed slow karne ke liye', 'Website ka rang badalne ke liye', 'Customer ki confidential financial details (jaise credit card/password) ko encrypt aur secure rakhne ke liye', 'None'], 2],
    ['Digital Wallet (E-Wallet) kya hota hai?', ['Ek software application jo user ki payment details ko securely store karta hai online transactions ke liye', 'Lohki ki tijori', 'Hard disk folder', 'None'], 0],
    ['Aadhaar Pay kya hai?', ['Merchant (dukan_dar) dwara customer ke Aadhaar number aur biometric se payment lene ki app', 'Aadhaar card print karne ki app', 'Loan app', 'None'], 0],
    ['Bharat Interface for Money (BHIM) kis par adharit hai?', ['SWIFT network', 'NEFT system', 'RTGS system', 'Unified Payments Interface (UPI)'], 3],
    ['UPI ID me \'@\' ke baad ka hissa kya darshate hain?', ['User ka personal naam', 'Bank ka handle / PSP (Payment Service Provider) handle', 'Country code', 'None'], 1],
    ['National Digital Literacy Mission (NDLM) ka mukhya uddeshya kya hai?', ['School banana', 'Sirf degree dena', 'Desh ke nagrikon ko digital roop se sakshar (literate) banana taki wo computer aur internet ka prayog kar sakein', 'None'], 2],
    ['PM Disha (Pradhan Mantri Gramin Digital Saksharta Abhiyan) kiske liye hai?', ['Shhari kshetron ke engineers ke liye', 'Gramin kshetron me logo ko digital literacy dene ke liye', 'Bank officers ke liye', 'None'], 1],
    ['National e-Governance Plan (NeGP) ke antargat kitne mission mode projects the (shuruat me)?', ['10', '5', '100', '27 (bad me badhakar 31 ya adhik kiye gaye)'], 3],
    ['DigiLocker me kisi bhi document ko upload karne ke liye max file size limit aamtaur par kya hoti hai (per file)?', ['100 MB', '1 GB', '500 KB', '10 MB (PDF/JPEG formats)'], 3],
    ['DigiLocker me "Issued Documents" aur "Uploaded Documents" me kya antar hai?', ['Issued documents sarkari sansthao se direct digital format me aate hain (legal valid), Uploaded documents user khud scan karke dalta hai', 'Dono ekdam same hain', 'Uploaded documents jyada valid hote hain', 'None'], 0],
    ['UMANG App par kitni se adhik sarkari sevaein ek sath uplabdh hain?', ['50', 'Sirf 5', '1000+ se adhik (Central aur State governments ki)', '100'], 2],
    ['National Portal of India (india.gov.in) ko kaun manage karta hai?', ['NPCI', 'RBI', 'National Informatics Centre (NIC)', 'UIDAI'], 2],
    ['NIC (National Informatics Centre) ki sthapna kis varsh hui thi?', ['1976', '1985', '1991', '2000'], 0],
    ['GeM (Government e-Marketplace) portal kis varsh launch kiya gaya tha?', ['2016', '2014', '2018', '2020'], 0],
    ['e-NAM portal kis mantralaya ki pehal hai?', ['Ministry of IT', 'Ministry of Agriculture and Farmers Welfare', 'Ministry of Finance', 'Ministry of Commerce'], 1],
    ['Direct Benefit Transfer (DBT) yojana ka mukhya labh kya hai?', ['Check se dena', 'Cash me dukan par dena', 'Sarkari yojanao ka paisa seedhe labharthi (beneficiary) ke bank khate me bhejna bina kisi bicholiye ke', 'None'], 2],
    ['Aadhaar-enabled DBT me sabse mukhya link kya hota hai?', ['PAN card link', 'Bank Account ka Aadhaar Seeding / Mapping (NPCI mapper)', 'Voter ID link', 'None'], 1],
    ['National Payments Corporation of India (NPCI) ke antargat kaun-kaun se major products aate hain?', ['UPI, RuPay, IMPS, AEPS, BBPS, NACH', 'Sirf NEFT', 'Sirf RTGS', 'None'], 0],
    ['NACH ka poora naam kya hai?', ['National Access Clearing House', 'National Automated Clearing House', 'New Automated Card Handler', 'None'], 1],
    ['IMPS ki shuruat kis sanstha ne ki thi?', ['World Bank ne', 'RBI ne', 'SBI ne', 'NPCI ne (2010 me)'], 3],
    ['UPI 123Pay ko kisne launch kiya tha?', ['Amazon', 'Microsoft', 'Google', 'RBI Governor (March 2022 me)'], 3],
    ['e-Rupi voucher ki kya visheshta hai?', ['Yeh loan hai', 'Yeh cryptocurrency hai', 'Yeh specific purpose (jaise vaccine ya education) aur specific person ke liye hota hai, bina bank account ke bhi use ho sakta hai (prepaid e-voucher)', 'None'], 2],
    ['CBDC (Central Bank Digital Currency) ka Bharat me kya naam rakha gaya hai?', ['Digital Token', 'Bitcoin India', 'Rupee Coin', 'Digital Rupee (e-Rupee)'], 3],
    ['Wholesale CBDC (CBDC-W) ka upyog kiske liye hota hai?', ['Financial institutions ke beech wholesale transactions aur interbank settlement ke liye', 'Aam janta ki daily shopping ke liye', 'International remittance only', 'None'], 0],
    ['Retail CBDC (CBDC-R) ka upyog kiske liye hota hai?', ['Sirf RBI ke liye', 'Aam nagrikon aur businesses dwara daily retail transactions ke liye', 'Foreign trade ke liye', 'None'], 1],
    ['Bhashini project ke antargat kis AI field par sabse jyada kaam ho raha hai?', ['Video gaming par', 'Hardware manufacturing par', 'Natural Language Processing (NLP) aur Machine Translation par', 'None'], 2],
    ['Indian languages ke liye digital keyboard standardization me kis layout ka sabse jyada use hota hai?', ['ABCDE layout', 'QWERTY layout (English ke liye)', 'InScript keyboard layout', 'None'], 2],
    ['InScript keyboard layout kis ministry/organization dwara standardize kiya gaya tha?', ['Apple', 'Microsoft', 'Google', 'Department of Electronics and Information Technology (DeitY/MeitY)'], 3],
    ['Cloud-based language translation APIs ka upyog kiske liye hota hai?', ['File delete karne ke liye', 'Real-time me ek bhasha ke text ko dusri bhasha me badalne ke liye', 'Virus scan karne ke liye', 'None'], 1],
    ['E-Commerce me B2G (Business to Government) ka udaharan kya hai?', ['Government e-Marketplace (GeM) par sarkari vibhago ko saman bechna ya e-Procurement', 'Amazon par shopping', 'OLX par bechna', 'None'], 0],
    ['E-Commerce me C2G (Consumer to Government) ka udaharan kya hai?', ['Online tax bharna, bill payment, ya penalty bharna sarkar ko', 'Government job aavedan', 'Railway ticket', 'None'], 0],
    ['Supply Chain Management (SCM) e-commerce me kiske liye zaroori hai?', ['Password banane ke liye', 'Sirf website design karne ke liye', 'Raw material se lekar final product ke customer tak pahuchne ki poori process ko track aur manage karne ke liye', 'None'], 2],
    ['CRM (Customer Relationship Management) software ka e-commerce me kya upyog hai?', ['Server hack karne ke liye', 'Customers ki queries, feedback, purchase history aur support ko manage karne ke liye', 'Database delete karne ke liye', 'None'], 1],
    ['E-Commerce me \'Dropshipping\' ka kya arth hai?', ['Direct factory banana', 'Saman paani me fekna', 'Aisa retail business jisme store apne paas inventory nahi rakhta, balki order aane par supplier seedha customer ko bhejta hai', 'None'], 2],
    ['Secure Electronic Transaction (SET) protocol kiske liye banaya gaya tha?', ['Email bhejne ke liye', 'Credit card transactions ko internet par secure banane ke liye (early protocol)', 'File download karne ke liye', 'None'], 1],
    ['Tokenization (Digital Payments me) ka kya arth hai?', ['Actual card number ko ek unique alternate code (token) se replace kar dena security ke liye', 'Token se coin nikalna', 'Password badlana', 'None'], 0],
    ['Two-Factor Authentication (2FA) me RBI dwara online card transactions ke liye kya anivarya kiya gaya hai?', ['Sirf expiry date', 'Sirf card number', 'OTP (One Time Password) ya 3D Secure verification', 'None'], 2],
    ['National Knowledge Network (NKN) ka mukhya uddeshya kya hai?', ['Desh ke sabhi uchh shiksha aur anusanthan (research/educational) sansthao ko ek high-speed gigabit network se jorna', 'Primary school children ke liye game network', 'Commercial shopping network', 'None'], 0],
    ['National Optical Fiber Network (NOFN) ka naya naam kya hai?', ['BSNL Net', 'RailTel', 'JioNet', 'BharatNet'], 3],
    ['Common Service Centre (CSC) scheme kis keval mission ke antargat aati hai?', ['Railway Ministry', 'Digital India Programme ke antargat (e-Governance pillar)', 'Defense Ministry', 'None'], 1],
    ['Jeevan Pramaan initiative kis dwara shuru kiya gaya tha?', ['Supreme Court dwara', 'RBI dwara', 'Department of Electronics and Information Technology (MeitY) ke dwara pensioners ke liye', 'None'], 2],
    ['National Judicial Data Grid (NJDG) par kis prakar ka data uplabdh hota hai?', ['Desh bhar ke district aur high courts ke cases, pending matters, aur orders ka data', 'Police FIR data', 'Land registry data', 'None'], 0],
    ['Bhuvan portal kis sanstha ka geo-portal hai?', ['NIC ka', 'Google ka', 'Microsoft ka', 'ISRO (Indian Space Research Organisation) ka'], 3],
    ['Bhuvan portal ka upyog kisliye hota hai?', ['Movie streaming ke liye', 'Indian region ke satellite imagery, 3D visualization aur geospatial applications ke liye', 'Railway booking ke liye', 'None'], 1],
    ['e-Bhasha (National Web Hosting Initiative for Indian Languages) ka mukhya uddeshya kya hai?', ['English khatam karna', 'Sarkari websites aur portals ko alag-alag bhartiy bhashao me uplabdh karana', 'Private blogging', 'None'], 1],
    ['E-Commerce me Affiliate Marketing ka kya arth hai?', ['Free saman batna', 'Khud ka product banana', 'Kisi dusre ke product ka link apne platform par share karke sale par commission kamana', 'None'], 2],
    ['E-Commerce me Drop shipping aur Retail me mukhya antar kya hai?', ['Drop shipping me inventory nahi rakhni padti, retail me stock rakhna padta hai', 'Dono same hain', 'Retail me internet nahi hota', 'None'], 0],
    ['Payment Aggregator (PA) kya hota hai?', ['Currency printer', 'Bank ka ATM', 'Aisi company jo merchants ko customers se online payments accept karne ke liye various payment options integrate karne me madad karti hai (jaise Razorpay, PayU)', 'None'], 2],
    ['UPI AutoPay ka upyog kiske liye kiya jata hai?', ['Manual payment ke liye', 'Fixed interval par hone wale automatic payments (jaise OTT subscription, SIP, loan EMI) ke liye', 'Cash withdrawal ke liye', 'None'], 1],
    ['BHIM app par maximum kitni bank accounts ko ek sath link kiya ja sakta hai (UPI standard ke anusar)?', ['10 accounts', 'Sirf 1 account', 'Sirf 2 accounts', 'Multiple bank accounts link kiye ja sakte hain, par ek primary select hota hai'], 3],
    ['National Cyber Coordination Centre (NCCC) ka mukhya karya kya hai?', ['Cyber security threats ki real-time situational awareness aur meta-data analysis karna', 'Antivirus bechna', 'Website design karna', 'None'], 0],
    ['CERT-In (Indian Computer Emergency Response Team) kis ministry ke antargat kaam karta hai?', ['Ministry of Defense', 'Ministry of Home Affairs', 'Ministry of Finance', 'Ministry of Electronics and Information Technology (MeitY)'], 3],
    ['Aadhaar Virtual ID (VID) kitne digits ki hoti hai aur kyon bani hai?', ['10 digits ki, mobile ke liye', '12 digits ki, password ke liye', '16 digits ki, privacy protect karne ke liye taki real Aadhaar number share na karna pade', 'None'], 2],
    ['National Identity Smart Card project me kiski jankari hoti hai?', ['Citizen ki demographic aur biometric details chip par', 'Sirf bank balance', 'Sirf vehicle number', 'None'], 0],
    ['e-Governance ke char mukhya models (interactions) kaun-kaun se hain?', ['A2Z, B2C, C2D, D2E', 'G2C, G2B, G2G, G2E', 'P2P, C2C, B2B, A2A', 'None'], 1],
    ['Digital India campaign ki shuruat kis varsh aur date ko ki gayi thi?', ['2 October 2015', '15 August 2014', '26 January 2016', '1 July 2015'], 3],
    ['Digital India ke 9 pillars me kya shamil hai?', ['Sirf mobile manufacturing', 'Broadband Highways, Public Internet Access Programme, e-Governance, e-Kranti, etc.', 'Sirf school education', 'None'], 1],
    ['e-Kranti (Digital India ka pillar) ka mukhya uddeshya kya hai?', ['Railway booking', 'Krishi vikas', 'Electronic delivery of e-governance services ko desh bhar me tej aur vyapak banana (Governance at doorstep)', 'None'], 2],
    ['MyGov.in portal kiske liye banaya gaya hai?', ['Citizen engagement aur participatory governance ke liye (sarkar ke sath vichar aur sujhav saza karne ke liye)', 'Online shopping ke liye', 'Private chat ke liye', 'None'], 0],
    ['Digilocker me issued documents ka storage kahan hota hai?', ['Cloud repository connected to issuer department (secure cloud storage)', 'Local computer ki C drive me', 'Pendrive me', 'None'], 0],
    ['National Scholarship Portal (NSP) par scholarship ka disburse kaise hota hai?', ['Cash me school me', 'Direct Benefit Transfer (DBT) ke madhyam se seedhe student ke bank khate me', 'Cheque dwara', 'None'], 1],
    ['Soil Health Card scheme ke antargat kisan ko kitne poshak tatwo (nutrients) ki jankari mitti ki janch ke baad di jati hai?', ['20', 'Sirf 2', '5', '12 mukhya poshak tatwo (nutrients) ki jankari'], 3],
    ['e-NAM portal ka mukhya labh kisanon ko kya milta hai?', ['Free beej', 'Sirf local mandi me', 'Desh ki kisi bhi mandi me online fasal bechne ki suvidha (pan-India electronic trading platform)', 'None'], 2],
    ['PM Kisan Samman Nidhi yojana ke tahat kisanon ko salana kitni rashi di jati hai?', ['Rs. 12,000', 'Rs. 10,000', 'Rs. 5,000', 'Rs. 6,000 (3 barabar kiisto me 2000-2000 karke)'], 3],
    ['Jeevan Pramaan Patra digital life certificate ki validity kitni hoti hai aamtaur par?', ['3 mahine', 'Lifetime', '6 mahine', 'Jari hone ki tithi se 1 varsh (annual submission required)'], 3],
    ['National Voters\' Service Portal (NVSP) par naye voter registration ke liye kaun sa Form bhara jata hai?', ['Form 7', 'Form 6', 'Form 8', 'Form 4'], 1],
    ['Voter ID me naam ya details me correction ke liye NVSP par kaun sa Form bhara jata hai?', ['Form 9', 'Form 6', 'Form 7', 'Form 8'], 3],
    ['Voter ID deletion ya objection ke liye NVSP par kaun sa Form bhara jata hai?', ['Form 10', 'Form 6', 'Form 8', 'Form 7'], 3],
    ['National Portal of India par kis bhasha me content sabse pehle uplabdh hota hai?', ['Hindi aur English dono mukhya bhashao me', 'Sirf English', 'Sirf Hindi', 'Regional only'], 0],
    ['Indian Language Digital Services me \'Localization\' ka kya arth hai?', ['Computer band karna', 'Foreign language me karna', 'Software, website ya content ko kisi vishesh kshetra ya bhasha ke anurup (local language aur culture ke hisab se) dhalna', 'None'], 2],
    ['Machine Translation me Neural Machine Translation (NMT) kiska upyog karti hai?', ['Simple dictionary matching ka', 'Deep Learning aur Neural Networks ka behtar aur natural translation ke liye', 'Manual typing ka', 'None'], 1],
    ['OCR software me Font aur Style ki pehchan kis par nirbhar karti hai?', ['Audio input par', 'Random guessing par', 'Pattern matching aur feature extraction algorithms par', 'None'], 2],
    ['MICR technology me paper par jo ink use hoti hai usme kiska powder hota hai?', ['Iron oxide (magnetic particles) ka', 'Carbon dust', 'Plastic powder', 'None'], 0],
    ['QR code me kitne direction finder patterns (corners par bade squares) hote hain?', ['Koi nahi', '4 corners par', 'Sirf 1 corner par', '3 corners par (alignment ke liye)'], 3],
    ['E-Commerce me COD (Cash on Delivery) ka kya arth hai?', ['Saman prapt hone par nagad (cash) ya digital payment delivery boy ko dena', 'Pehle payment karna', 'Udhar saman lena', 'None'], 0]
  ],
  o1: [
    ['Pehle se shuru computer ko dobara se shuru karna kehlata hai?', ['Log off', 'Cold booting', 'Warm booting', 'Shut down'], 2],
    ['Mouse me button ki sankhya kitni hoti hai?', ['2', '3', '4', 'a, b both'], 3],
    ['PNG ka poora naam kya hai?', ['Portable Network Graphics', 'Portable Net Graphics', 'Portable Network Group', 'None of these'], 0],
    ['........... kilobyte se 1 megabyte banta hai?', ['256', '1024', '128', '512'], 1],
    ['Computer Monitor par Blink hone wala chinh kehlata hai?', ['Cursor', 'Pointer', 'Track ball', 'Mouse'], 0],
    ['Virtual memory ka aakar ... par nirbhar karta hai?', ['Database par', 'Disk space par', 'Address line par', 'All of the above'], 1],
    ['Computer CPU me Memory, Control aur ............. teen unit hote hain?', ['Microprocessor', 'Input-Output', 'Arithmetic/Logic', 'None'], 2],
    ['ENIAC ka poora naam kya hai?', ['Electronic Numerical Integrator and Coder', 'Electronic Numerical Isolator and Computer', 'Electronic Numerical Interpreter and Computer', 'Electronic Numerical Integrator and Computer'], 3],
    ['Firmware ka arth hai?', ['System software', 'Application software', 'Hardware ka software', 'All of the above'], 2],
    ['Computer ki panchvi peedhi me kiska prayog hua?', ['ULSI', 'Transistor', 'IC', 'None of these'], 0],
    ['Mouse ke madhyam se kisi Object ki properties dekhne ke liye kya karenge?', ['Shift Clicking', 'Dragging', 'Dropping', 'Right Clicking'], 3],
    ['USB Device kis sanrachna ka anusaran karta hai?', ['Halfman', 'Tree', 'Hash', 'List'], 1],
    ['Spam kisse sambandhit hai?', ['Art', 'Computer', 'Game', 'Song'], 1],
    ['Nimn me se output device nahi hai?', ['Plotter', 'CRT Monitor', 'Earphones', 'Digital Camera'], 3],
    ['Nimnlikhit me se kaun sa pointing device nahi hai?', ['Scanner', 'Mouse', 'Joy Stick', 'Optical Pen'], 0],
    ['Inkjet Printer me pai jane wali rangeen syahi ki botal me mool rangon ki sankhya ........... hoti hai?', ['3', '2', '10', '30'], 0],
    ['\'Data Processing\' se aashay hai?', ['Data ko vyavasthit karna', 'Data ko upyogi banana', 'Data ka sangrah karna', 'All of the above'], 3],
    ['IBM ka poorn roop hai?', ['Italian Business Machines', 'Indian Business Machines', 'International Business Machines', 'Integral Business Machines'], 2],
    ['Microprocessor ke nirmata kaun hai?', ['IBM', 'Apple', 'Intel', 'HCL'], 2],
    ['MP3 ....... hai?', ['Mouse', 'Sound format', 'Printer', 'Mobile phone'], 1],
    ['Computer ka vah bhag jise hum chhoo nahi sakte?', ['Software', 'Monitor', 'Hardware', 'CPU'], 0],
    ['Input ko Output me roopantaran kaun karta hai?', ['Peripherals', 'Memory', 'CPU', 'Storage'], 2],
    ['Firewall ........ hai?', ['Computer ko nuksan pahunchata hai', 'Computer ki suraksha karta hai', 'Operating System hai', 'All of the above'], 1],
    ['Punah prayog ki ja sakne wali optical storage ka sankshipt naam hoga?', ['CD', 'DVD', 'ROM', 'RW'], 3],
    ['Nimnlikhit me sabse bada kaun hai?', ['PB', 'TB', 'ZB', 'EB'], 2],
    ['Ek USB PenDrive kis prakar ki storage device me aati hai?', ['Secondary', 'Primary', 'Both', 'None'], 0],
    ['Bit ka samooh kehlata hai?', ['Nibble', 'Byte', 'Record', 'Word'], 1],
    ['Nimn me se kaunsi key, cursor ke bai taraf ke akshar ko mitati hai?', ['Space bar', 'Delete', 'Backspace', 'None of these'], 2],
    ['CPU aur I/O ke beech signalon ke movement ko kaun niyantrit karta hai?', ['CU', 'ALU', 'Memory unit', 'None'], 0],
    ['Monitor hai?', ['Storage device', 'Input device', 'Processing device', 'Output device'], 3],
    ['Recycle Bin svatah configure ho jata hai taki yeh aapke computer ki Hard Disk ka ........ data store karne ke yogya ho jaye?', ['10%', '1%', '5%', '15%'], 2],
    ['Nimnlikhit me kaun sa symbol Hexadecimal Number System ke dwara prayog kiya jata hai?', ['0-7', '0-9, A-F', '0-9', 'None'], 1],
    ['WORM ka poora naam kya hoga?', ['Write On Random Memory', 'Write Once Read Many', 'Work On Real Memory', 'None'], 1],
    ['Bluetooth ki khoj kiske dwara ki gayi?', ['Martin Cooper', 'Steve Jobs', 'Apple', 'Ericsson (Jaap Haartsen)'], 3],
    ['Telephone number, janm-tithi aur grahak ka naam .......... ka udaharan hai?', ['Ek file', 'Data', 'Ek database', 'Ek record'], 3],
    ['Computer ki teesri peedhi me kiska prayog hua?', ['Integrated circuits', 'Transistor', 'Vacuum Tube', 'Microprocessors'], 0],
    ['Printer ki gunvatta is par nirbhar karti hai ki Image ko Print karne me kitne ........ prayukt hote hain?', ['Pixel', 'PPM', 'Paper', 'DPI'], 3],
    ['Nimnlikhit me se permanent memory hai?', ['RAM', 'ROM', 'CD-ROM', 'CPU'], 1],
    ['Niche diye gaye me hardware ka udaharan nahi hai?', ['Mouse', 'Printer', 'Operating System', 'Monitor'], 2],
    ['Nimnlikhit me se kaun kaun se computer CPU ke mukhya ghatak kehlate hain?', ['CU', 'ALU', 'Memory', 'All of the Above'], 3],
    ['UNIVAC ka poorn roop kya hai?', ['Universal Automatic Computer', 'Universal Automaticserial Computer', 'Universal Automatics Company', 'None'], 0],
    ['Hierarchy kya hai?', ['Storage device', 'Ek network', 'Computer ki memory ko kram me darshata hai', 'None of these'], 2],
    ['CPU ....... ke naam se bhi jana jata hai?', ['Microprocessor', 'Execute', 'Microchip', 'Mini Computer'], 0],
    ['MICR me R ka kya matlab hota hai?', ['Reader', 'Recognition', 'Recognize', 'Reading'], 1],
    ['Samanya keybaord me kitne button paye jate hain?', ['111', '123', '101', '134'], 2],
    ['Hybrid Computer me ....... ka prayog kiya jata hai?', ['Analog signalo ka', 'Digital signalo ka', 'Uprokt dono ka', 'Koi nahi'], 2],
    ['Computer ka karya nahi hai?', ['Understanding', 'Output', 'Input', 'Controlling'], 0],
    ['DECIMAL Number System ka aadhar hai?', ['8', '10', '3', 'None'], 1],
    ['Nimnlikhit storage device ko ek sthan se dusre sthan par aasani se nahi lekar ja sakte?', ['Pendrive', 'CD', 'DVD', 'Harddisk'], 3],
    ['Nimnlikhit me kaun sa Internet se sambandhit nahi hai?', ['Printer', 'Browser', 'Links', 'Search Engine'], 0],
    ['DSM ka poora naam kya hai?', ['Demoralized system memory', 'Direct system memory', 'Direct system module', 'Distributed shared memory'], 3],
    ['Computer ke poore sanchalan ko niyantrit karne wala program kaun sa hai?', ['Working system', 'Operating system', 'Peripheral system', 'Controlling system'], 1],
    ['Windows OS me Ctrl + Shift ke sath Arrow Key dabane se kya hoga?', ['Kuch paste hota hai', 'Text ka ek block highlight hota hai', 'Kuch delete hota hai', 'None of these'], 1],
    ['Windows ek Operating System hai?', ['True', 'False'], 0],
    ['ISO ka poora naam hai?', ['Internal Student Organization', 'International Student Organization', 'Integrated Service Organization', 'International Standard Organization'], 3],
    ['Desktop par samay aur dinank kahan par dikhai padte hain?', ['My computer', 'Title bar', 'Task bar', 'Status bar'], 2],
    ['Nimnlikhit me se kaun sa kathan Unix ke baare me galat hai?', ['Unix is a Multitasking Operating System', 'Unix is an open-source Software', 'Unix is a multi-user Operating system', 'Unix is a multiprogramming Operating System'], 1],
    ['Windows operating system me Start Menu ko kholne ke liye kaunsi shortcut key prayog me li jati hai?', ['Ctrl + Esc', 'Press Windows Key', 'a & b both', 'None'], 2],
    ['Kaun sa freeware hai?', ['Unix', 'LibreOffice', 'MS Office', 'None'], 0],
    ['Kernel kya hai?', ['Operating system ka graphics interface', 'Ek chip me store hota hai', 'Linux aur Unix ka ek mahatvapoorna kendra', 'All'], 3],
    ['Yadi Computer ka samay aur dinank galat hai, toh aap kiska upyog karke ise Reset kar sakte hain?', ['Control panel', 'Write file', 'Write', 'Calendar'], 0],
    ['Pratyek computer ke sabhi hisso ke theek se kaam karne aur dusre sabhi prakar ke programo ke chalne ke liye usme ek .......... hona aavashyak hai?', ['Utility software', 'Operating System', 'Interpreter', 'Compiler'], 1],
    ['Linux hai?', ['Multitasking', 'Multi-user', 'Both', 'None'], 2],
    ['Windows operating system me shut-down option pop-up karne ki shortcut key kya hoti hai?', ['Ctrl + F4', 'Ctrl + Shift + F4', 'Win + F4', 'Alt + F4'], 3],
    ['Windows operating system me Run command dialog box ko open karne ke liye kis shortcut key ka istemal kiya jata hai?', ['Ctrl + R', 'Shift + R', 'Window + R', 'Window + Shift + R'], 2],
    ['Pratham Operating System kab viksit kiya gaya tha?', ['1948', '1949', '1951', '1950'], 3],
    ['Windows ke dialog box me pichhle option par jane ke liye kaunsi shortcut key istemal ki jayegi?', ['Shift + Tab', 'Ctrl + Tab', 'Ctrl + Shift + Tab', 'Alt + Tab'], 0],
    ['Windows OS me sabhi windows ko Minimize karne ke liye hum kaunsi shortcut key ka istemal karenge?', ['Windows + D', 'Windows + M', 'Windows + Break', 'Windows Key'], 1],
    ['Nimnlikhit me se kaun sa Windows 64-bit ko support karta hai?', ['Windows 2000', 'Windows 98', 'Windows XP', 'Windows 95'], 2],
    ['Nimnlikhit me kaun ek operating system nahi hai?', ['Oracle', 'Linux', 'Windows', 'DOS'], 0],
    ['Windows ke desktop par jo image show hoti hai use kehte hain?', ['Main Image', 'Windows Image', 'Desktop Image', 'Wallpaper'], 3],
    ['Windows-10 Software ke swamitva (Owned) ka ekadhikar kiske paas hai?', ['IBM', 'Microsoft', 'Linux', 'Google'], 1],
    ['Aapke PDA computer par aapke dwara chalaye jane wale operating system ki shreni ek .......... operating system hai?', ['Single user, single task', 'Single user, multitask', 'Multiuser, multitask', 'Real time'], 0],
    ['Folder se aashay hai?', ['Filon ki ek table bana sakte hain', 'Yeh nirdharit karta hai ki computer sahi se kaam kar sake', 'Disk par filon ko vyavasthit rakhna', 'Filon ke naam dekh sakte hain'], 2],
    ['Latest Windows OS kaun sa hai?', ['Windows XP', 'Windows 10', 'Windows 8.1', 'Windows 7'], 1],
    ['System ko debug karne ka kya arth hai?', ['Sahi system ka pata lagana tatha install karna', 'Operating system install karna', 'Sahi system ka pata lagana', 'System me errors ka pata lagana aur use theek karna'], 3],
    ['Nimn me se kaun sa ek operating system ki shreni me nahi ata hai?', ['Windows', 'Android', 'Linux', 'Apache'], 3],
    ['Vah kaun sa operating system hai jo device me svatah poorn hai aur ROM me rehta hai?', ['Real Time Operating System', 'Embedded Operating System', 'Batch Operating System', 'Microprocessor Operating System'], 1],
    ['Nimnlikhit me se kaun sa sangathan computer evam software ke kshetra me lokpriya hai?', ['Rightman', 'Henley', 'Microsoft', 'Louis Vuitton'], 2],
    ['Ubuntu Operating System ko Lock karne ki shortcut key Ctrl + Alt + L hai?', ['True', 'False'], 0],
    ['Operating system se kya aashay hai?', ['Dainik software ka ek sangrah', 'Input aur output device ka ek sangrah', 'Hardware ghatakon ka ek sangrah', 'All of the above'], 0],
    ['Nimnlikhit me se kis Windows me Start Button nahi diya gaya hai?', ['Windows 7', 'Windows XP', 'Windows 8', 'None of these'], 2],
    ['Windows OS me Ctrl + F ka kya istemal hai?', ['Computer search karne ke liye', 'File ya folder ko search karne ke liye', 'My Computer open karne ke liye', 'Minimized windows ko restore karne ke liye'], 1],
    ['Linux .......... operating system hai?', ['Microsoft', 'Open source', 'Windows', 'None of these'], 1],
    ['System ke ........ hone par OS svatah boot nahi hota?', ['Reset', 'Power on', 'Restart', 'Shutdown'], 3],
    ['Unix me kisi file ko print karne ke liye kis command ka prayog kiya jata hai?', ['LPR', 'LP', 'PT', 'a & b both'], 3],
    ['Windows Control Panel se kya nahi kiya ja sakta hai?', ['Install application', 'Printer configuration', 'Application ko run karna', 'Fonts jodna'], 2],
    ['Screen par chamakti roshni (flashing or blinking light) ko kya kaha jata hai?', ['Ek cursor', 'Ek icon', 'Ek pixel', 'Koi bhi nahi'], 0],
    ['GUI par aadharit prachalan tantra ka naam batayein?', ['MS DOS', 'MS Windows', 'UNIX', 'All of these'], 1],
    ['Windows 10 ke sath maujood browser ka naam hai?', ['Internet Explorer', 'Mozilla', 'Microsoft Edge', 'Chrome'], 2],
    ['Nimnlikhit me se kaun si function key Windows-10 me boot vikalp menu launch karne ke liye prayukt hoti hai?', ['F8', 'F10', 'F5', 'F9'], 0],
    ['Ek program se dusre program par jane ke liye kaunsi shortcut key istemal ki jati hai?', ['Ctrl + Tab', 'Ctrl + Shift', 'Alt + Shift', 'Alt + Tab'], 3],
    ['Desktop par diye icon se kaise program shuru kar sakte hain?', ['Us par double click karke', 'Us par click karne ke baad keyboard se Enter key dabakar', 'Us par click karke', 'a aur b dono'], 3],
    ['Windows ko Shut-Down karne ki shortcut key hai?', ['Alt + F4', 'Ctrl + F4', 'Win + F4', 'Ctrl + Shift + F4'], 0],
    ['Windows OS me start button ka upyog kyo kiya jata hai?', ['Device setting', 'Turn off the system', 'Run applications', 'All of above'], 3],
    ['BIOS ka prayog kiske dwara kiya jata hai?', ['Compiler dwara', 'Interpreter dwara', 'Operating system dwara', 'Application software dwara'], 2],
    ['Windows ke dialog box me agle tab par jane ke liye ........ ka istemal kiya jata hai?', ['Alt + Tab', 'Ctrl + Tab', 'Shift + Tab', 'Ctrl + Shift + Tab'], 1],
    ['Ubuntu programmer ke liye sabse achha LINUX DISTROS hai?', ['True', 'False'], 0],
    ['Ubuntu ko Canonical Limited dwara launch kiya gaya tha?', ['True', 'False'], 0],
    ['Yeh operating system ek samay me ek se jyada program ko support nahi karta hai?', ['Linux', 'Windows', 'DOS', 'Unix'], 2],
    ['LibreOffice Writer me by default font size kitna hota hai?', ['10', '11', '12', '14'], 2],
    ['LibreOffice Writer kis prakar ka software hai?', ['Operating system', 'Word processing software', 'Spreadsheet software', 'Presentation software'], 1],
    ['LibreOffice Writer document ka default extension kya hota hai?', ['.doc', '.docx', '.txt', '.odt'], 3],
    ['LibreOffice Writer me Print Preview ki shortcut key kya hai?', ['Ctrl + F2', 'Ctrl + Shift + O', 'Ctrl + F12', 'Ctrl + P'], 1],
    ['LibreOffice Writer me minimum zoom size kitna hota hai?', ['10%', '20%', '50%', '100%'], 1],
    ['LibreOffice Writer me maximum zoom size kitna hota hai?', ['200%', '400%', '500%', '600%'], 3],
    ['LibreOffice Writer me Save As ki shortcut key kya hai?', ['Ctrl + Shift + S', 'Ctrl + S', 'F12', 'Ctrl + Alt + S'], 0],
    ['LibreOffice Writer me naya document kholne ki shortcut key kya hai?', ['Ctrl + Shift + N', 'Ctrl + O', 'Ctrl + N', 'Ctrl + W'], 2],
    ['LibreOffice Writer me Spelling Check ki shortcut key kya hai?', ['F5', 'Ctrl + F7', 'Shift + F7', 'F7'], 3],
    ['LibreOffice Writer me \'Find and Replace\' ka vikalp kis menu me hota hai?', ['File', 'Edit', 'Insert', 'Format'], 1],
    ['LibreOffice Writer me \'Find and Replace\' ki shortcut key kya hai?', ['Ctrl + H', 'Ctrl + F', 'Ctrl + R', 'Ctrl + Shift + F'], 0],
    ['LibreOffice Writer me \'Word Count\' ka vikalp kis menu me milta hai?', ['Edit', 'View', 'Tools', 'Format'], 2],
    ['LibreOffice Writer me Table Insert karne ki shortcut key kya hai?', ['Ctrl + F10', 'Ctrl + T', 'Alt + T', 'Ctrl + F12'], 3],
    ['LibreOffice Writer me Superscript ki shortcut key kya hai?', ['Ctrl + Shift + P', 'Ctrl + Shift + B', 'Ctrl + P', 'Ctrl + B'], 0],
    ['LibreOffice Writer me Subscript ki shortcut key kya hai?', ['Ctrl + Shift + P', 'Ctrl + Shift + B', 'Ctrl + Shift + V', 'Ctrl + B'], 1],
    ['LibreOffice Writer me Bulleted List hatane ya lagane ki shortcut key kya hai?', ['F12', 'Ctrl + F12', 'Shift + F12', 'Alt + F12'], 2],
    ['LibreOffice Writer me Numbered List ki shortcut key kya hai?', ['F12', 'Shift + F12', 'Ctrl + F12', 'Alt + 1'], 0],
    ['LibreOffice Writer me formatting hatane (Clear Direct Formatting) ki shortcut key kya hai?', ['Ctrl + Shift + M', 'Ctrl + M', 'Ctrl + Delete', 'Alt + M'], 1],
    ['LibreOffice Writer me naya Page Break dalne ki shortcut key kya hai?', ['Ctrl + Shift + Enter', 'Shift + Enter', 'Alt + Enter', 'Ctrl + Enter'], 3],
    ['LibreOffice Writer me Line Break dalne ki shortcut key kya hai?', ['Ctrl + Enter', 'Alt + Enter', 'Shift + Enter', 'Enter'], 2],
    ['LibreOffice Writer me kisi text ko Center Align karne ki shortcut key kya hai?', ['Ctrl + E', 'Ctrl + L', 'Ctrl + R', 'Ctrl + J'], 0],
    ['LibreOffice Writer me Justify Alignment ki shortcut key kya hai?', ['Ctrl + L', 'Ctrl + E', 'Ctrl + J', 'Ctrl + R'], 2],
    ['LibreOffice Writer me Right Alignment ki shortcut key kya hai?', ['Ctrl + J', 'Ctrl + L', 'Ctrl + E', 'Ctrl + R'], 3],
    ['LibreOffice Writer me Left Alignment ki shortcut key kya hai?', ['Ctrl + R', 'Ctrl + L', 'Ctrl + E', 'Ctrl + J'], 1],
    ['LibreOffice Writer me default font style kya hota hai?', ['Liberation Serif', 'Liberation Sans', 'Times New Roman', 'Arial'], 0],
    ['LibreOffice Writer me minimum font size kitna hota hai (dropdown list me)?', ['2', '4', '6', '8'], 2],
    ['LibreOffice Writer me maximum font size kitna hota hai (dropdown list me)?', ['72', '80', '96', '100'], 2],
    ['LibreOffice Writer me kisi shabd ke niche lal line (Red Line) kya darshati hai?', ['Grammar ki galti', 'Spelling ki galti', 'Formatting ki galti', 'Link ki truti'], 1],
    ['LibreOffice Writer me kisi vakya ke niche neeli ya hari line kya darshati hai?', ['Spelling ki galti', 'Koi nahi', 'Shabd ki punravrutti', 'Grammar ki galti'], 3],
    ['LibreOffice Writer me Help ki shortcut key kya hai?', ['F2', 'F1', 'F3', 'F4'], 1],
    ['LibreOffice Writer me Navigator kholne ki shortcut key kya hai?', ['F5', 'F6', 'F7', 'F8'], 0],
    ['LibreOffice Writer me Styles Window kholne ki shortcut key kya hai?', ['F9', 'F12', 'F10', 'F11'], 3],
    ['LibreOffice Writer me Full Screen karne ki shortcut key kya hai?', ['Ctrl + Shift + J', 'Ctrl + F10', 'F11', 'Ctrl + J'], 0],
    ['LibreOffice Writer me Non-printing characters dekhne ki shortcut key kya hai?', ['Ctrl + F8', 'Ctrl + F12', 'Ctrl + F10', 'Ctrl + F9'], 2],
    ['LibreOffice Writer me Comment jodna ki shortcut key kya hai?', ['Ctrl + Shift + C', 'Ctrl + Alt + C', 'Alt + C', 'Ctrl + C'], 1],
    ['LibreOffice Writer me Hyperlink jodna ki shortcut key kya hai?', ['Ctrl + H', 'Ctrl + Shift + K', 'Ctrl + L', 'Ctrl + K'], 3],
    ['LibreOffice Writer me kitne Menus hote hain?', ['8', '9', '10', '11'], 3],
    ['LibreOffice Writer me standard toolbar par zoom ka kaun sa vikalp nahi hota hai?', ['Zoom Reset', 'Zoom Dialog', 'Zoom In/Out', 'Zoom Slider'], 0],
    ['LibreOffice Writer me template ki file extension kya hoti hai?', ['.odt', '.ods', '.ott', '.odp'], 2],
    ['LibreOffice Writer me Mail Merge ka vikalp kis menu me hota hai?', ['File', 'Tools', 'Edit', 'Format'], 1],
    ['LibreOffice Writer me kisi bhi text ko Bold karne ki shortcut key kya hai?', ['Ctrl + D', 'Ctrl + I', 'Ctrl + U', 'Ctrl + B'], 3],
    ['LibreOffice Writer me Italic karne ki shortcut key kya hai?', ['Ctrl + B', 'Ctrl + I', 'Ctrl + U', 'Ctrl + Shift + I'], 1],
    ['LibreOffice Writer me Underline karne ki shortcut key kya hai?', ['Ctrl + U', 'Ctrl + I', 'Ctrl + B', 'Ctrl + Shift + U'], 0],
    ['LibreOffice Writer me \'Cut\' karne ki shortcut key kya hai?', ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + Z'], 2],
    ['LibreOffice Writer me \'Copy\' karne ki shortcut key kya hai?', ['Ctrl + V', 'Ctrl + X', 'Ctrl + C', 'Ctrl + A'], 2],
    ['LibreOffice Writer me \'Paste\' karne ki shortcut key kya hai?', ['Ctrl + P', 'Ctrl + Shift + V', 'Ctrl + C', 'Ctrl + V'], 3],
    ['LibreOffice Writer me \'Undo\' karne ki shortcut key kya hai?', ['Ctrl + Z', 'Ctrl + Y', 'Ctrl + U', 'Ctrl + Shift + Z'], 0],
    ['LibreOffice Writer me \'Redo\' karne ki shortcut key kya hai?', ['Ctrl + Z', 'Ctrl + Y', 'Ctrl + R', 'Ctrl + Shift + Y'], 1],
    ['LibreOffice Writer me document ko Print karne ki shortcut key kya hai?', ['Alt + P', 'Ctrl + Shift + P', 'Ctrl + P', 'Ctrl + Shift + O'], 2],
    ['LibreOffice Writer me Select All ki shortcut key kya hai?', ['Ctrl + S', 'Alt + A', 'Ctrl + Shift + A', 'Ctrl + A'], 3],
    ['LibreOffice Writer me paragraph ko Double Line Spacing dene ki shortcut key kya hai?', ['Ctrl + 1', 'Ctrl + 2', 'Ctrl + 5', 'Ctrl + 0'], 1],
    ['LibreOffice Writer me Single Line Spacing ki shortcut key kya hai?', ['Ctrl + 1', 'Ctrl + 2', 'Ctrl + 5', 'Ctrl + 0'], 0],
    ['LibreOffice Writer me 1.5 Line Spacing ki shortcut key kya hai?', ['Ctrl + 1', 'Ctrl + 5', 'Ctrl + 2', 'Ctrl + 1.5'], 1],
    ['LibreOffice Writer me Drop Cap ka vikalp kis menu me hota hai?', ['Insert', 'Tools', 'Format', 'View'], 2],
    ['LibreOffice Writer me adhiktam kitne Drop Cap lines set ki ja sakti hain?', ['5', '9', '10', '15'], 2],
    ['LibreOffice Writer me Header aur Footer ka vikalp kis menu me hota hai?', ['File', 'Edit', 'Format', 'Insert'], 3],
    ['LibreOffice Writer me by default Drop Cap lines kitni hoti hain?', ['1', '2', '3', '4'], 2],
    ['LibreOffice Writer me Page Number jodna ka vikalp kahan milta hai?', ['Insert', 'File', 'Format', 'Tools'], 0],
    ['LibreOffice Writer me Digital Signature ka vikalp kis menu me hota hai?', ['Tools', 'File', 'Edit', 'Insert'], 1],
    ['LibreOffice Writer me kisi image ko insert karne ki shortcut key kya hai?', ['Koi shortcut nahi (Insert -> Image)', 'Ctrl + I', 'Ctrl + Alt + I', 'Ctrl + Shift + I'], 0],
    ['LibreOffice Writer me Sidebar ko Toggle (On-Off) karne ki shortcut key kya hai?', ['Ctrl + F8', 'Ctrl + F6', 'Ctrl + F7', 'Ctrl + F5'], 3],
    ['LibreOffice Writer me \'Formatting Marks\' ko ON/OFF karne ki shortcut key kya hai?', ['Ctrl + F8', 'Ctrl + F10', 'Ctrl + F12', 'Ctrl + F2'], 1],
    ['LibreOffice Writer me table ki row ki unchai badhane ya hatane ke liye kis key ka prayog kiya jata hai?', ['Alt + Arrow Keys', 'Ctrl + Arrow Keys', 'Shift + Arrow Keys', 'None'], 0],
    ['LibreOffice Writer me table me ek cell se dusre cell me aage jane ke liye kis key ka prayog hota hai?', ['Spacebar', 'Enter', 'Shift + Tab', 'Tab'], 3],
    ['LibreOffice Writer me table me ek cell se pichhe jane ke liye kis key ka prayog hota hai?', ['Tab', 'Shift + Tab', 'Ctrl + Tab', 'Alt + Tab'], 1],
    ['LibreOffice Writer me Protect Document ka vikalp kahan hota hai?', ['Tools', 'Edit', 'File', 'Window'], 2],
    ['LibreOffice Writer me koi text select karke F3 dabane se kya hota hai?', ['AutoText insert hota hai', 'Spelling check hoti hai', 'Find and Replace khulta hai', 'Case badalta hai'], 0],
    ['LibreOffice Writer me Case badalne (Change Case) ki shortcut key kya hai?', ['F3', 'Ctrl + F3', 'Alt + F3', 'Shift + F3'], 3],
    ['LibreOffice Writer me Zoom Slider window me kahan sthit hota hai?', ['Top Right Corner', 'Top Left Corner', 'Bottom Left Corner', 'Bottom Right Corner'], 3],
    ['LibreOffice Writer me \'Save\' karne ki shortcut key kya hai?', ['Ctrl + S', 'Ctrl + Shift + S', 'Alt + S', 'F12'], 0],
    ['LibreOffice Writer me font size badhane (Increase Font Size) ki shortcut key kya hai?', ['Ctrl + [', 'Ctrl + ]', 'Ctrl + Shift + >', 'Ctrl + Shift + <'], 1],
    ['LibreOffice Writer me font size ghatane (Decrease Font Size) ki shortcut key kya hai?', ['Ctrl + ]', 'Ctrl + Shift + >', 'Ctrl + [', 'Ctrl + Shift + <'], 2],
    ['LibreOffice Writer me comment box hatane ya delete karne ka vikalp kahan hota hai?', ['File Menu', 'Edit Menu', 'Comment Menu', 'View Menu'], 2],
    ['LibreOffice Writer me kisi bhi file ko password protected roop me kis format me save kiya jata hai?', ['.odt', 'Password vikalp keval .odt save karte samay milta hai', '.pdf', '.txt'], 1],
    ['LibreOffice Writer me kul kitne default heading styles hote hain?', ['3', '5', '6', '10'], 2],
    ['LibreOffice Writer me Auto Correction ka feature kis menu me hota hai?', ['Tools', 'Edit', 'Format', 'View'], 0],
    ['LibreOffice Writer me by default margin kitna hota hai?', ['0.5 inch', '0.75 inch', '1 inch', '1.5 inch'], 2],
    ['LibreOffice Writer me Page Orientation by default kya hota hai?', ['Legal', 'Landscape', 'Square', 'Portrait'], 3],
    ['LibreOffice Writer me kaun sa View uplabdh nahi hota hai?', ['Normal View', 'Slide Sorter', 'Web Layout', 'Print Layout'], 1],
    ['LibreOffice Writer me Footnote aur Endnote ka vikalp kis menu me hota hai?', ['Format', 'Edit', 'Tools', 'Insert'], 3],
    ['LibreOffice Writer me Footnote document me kahan dikhai deta hai?', ['Page ke ant me (Bottom of Page)', 'Document ke ant me', 'Har page ke header me', 'Har page ke footer me'], 0],
    ['LibreOffice Writer me Endnote document me kahan dikhai deta hai?', ['Page ke ant me', 'Document ya chapter ke ant me', 'Header me', 'Footer me'], 1],
    ['LibreOffice Writer me Thesaurus ki shortcut key kya hoti hai?', ['F7', 'Shift + F7', 'Alt + F7', 'Ctrl + F7'], 3],
    ['LibreOffice Writer me Thesaurus ka prayog kiske liye kiya jata hai?', ['Paryayvachi aur Vilom shabd (Synonyms & Antonyms)', 'Spelling check', 'Grammar check', 'Word count'], 0],
    ['LibreOffice Writer me naya folder banane ka vikalp kis dialog box me milta hai?', ['Save As dialog box', 'Print dialog box', 'Open dialog box', 'Dono Save As aur Open'], 3],
    ['LibreOffice Writer me kisi text ke beech se line kheenchna kya kehlata hai?', ['Underline', 'Strikethrough', 'Superscript', 'Subscript'], 1],
    ['LibreOffice Writer me Shadow effect ki shortcut key kya hai?', ['Koi seedhi shortcut key nahi hai', 'Ctrl + Shift + S', 'Alt + S', 'Ctrl + D'], 0],
    ['LibreOffice Writer me Bold, Italic, Underline ke alawa text effect me kaun sa vikalp hota hai?', ['Strikethrough', 'Overline', 'Both Strikethrough & Overline', 'None'], 2],
    ['LibreOffice Writer me \'Go to Page\' ki shortcut key kya hai?', ['Ctrl + G', 'Ctrl + Shift + G', 'F5', 'Ctrl + F5'], 0],
    ['LibreOffice Writer me Macro record karne ka vikalp kis menu me hota hai?', ['File', 'Edit', 'Tools', 'View'], 2],
    ['LibreOffice Writer me Macro ki shortcut key kya hoti hai?', ['Shift + F11', 'Alt + F11', 'Ctrl + F11', 'Koi default shortcut key nahi hoti'], 3],
    ['LibreOffice Writer me kisi document ko seedhe PDF me export karne ka icon kahan hota hai?', ['Formatting Toolbar', 'Standard Toolbar', 'Menu Bar', 'Status Bar'], 1],
    ['LibreOffice Writer me seedhe PDF export karne ki shortcut key kya hoti hai?', ['Koi default shortcut key nahi hoti', 'Ctrl + P', 'F12', 'Ctrl + Shift + E'], 0],
    ['LibreOffice Writer me sidebar me kul kitne panes hote hain?', ['Keval 1', 'Keval 2', 'Keval 4', 'Lagbhag 6 ya adhik'], 3],
    ['LibreOffice Writer me Ruler ko ON/OFF karne ki shortcut key kya hai?', ['Ctrl + R', 'Ctrl + Shift + R', 'Ctrl + F1', 'Alt + R'], 1],
    ['LibreOffice Writer me Manage Templates ki shortcut key kya hai?', ['Alt + N', 'Ctrl + N', 'Ctrl + Shift + N', 'Ctrl + M'], 2],
    ['LibreOffice Writer me kisi object ko delete karne ke liye kis key ka prayog hota hai?', ['Delete', 'Backspace', 'Both Delete and Backspace', 'Ctrl + D'], 2],
    ['LibreOffice Writer me paragraph indent badhane ki shortcut key kya hai?', ['Shift + Tab', 'Ctrl + M', 'Ctrl + Shift + M', 'Tab'], 3],
    ['LibreOffice Writer me bullet list se bahar aane ke liye ya do bar Enter dabane se kya hota hai?', ['Naya page ban jata hai', 'Bullet list samapt ho jati hai', 'Text bold ho jata hai', 'Kuch nahi hota'], 1],
    ['LibreOffice Writer ke sambandh me inme se kaun sa kathan asatya hai?', ['Isme spreadsheet jaisi formula bar hoti hai', 'Isme mail merge ka vikalp hota hai', 'Aap password se surakshit document save kar sakte hain', 'Yeh ek free aur open source software hai'], 0],
    ['In Calc, Rename Sheet option available in which menu?', ['File', 'Sheet', 'Data', 'Format'], 1],
    ['In LibreOffice the Formula which shows 16% of the value in A1 is', ['A1%16', 'A1%16', 'A1#16%', 'A1*16%'], 3],
    ['In Calc the default number of sheets is', ['2', '3', '1', '5'], 2],
    ['In LibreOffice Calc what is the default Title name?', ['Untitled 1', 'Title1', 'Book1', 'Sheet1'], 0],
    ['In Calc the default font size is', ['10', '11', '12', '15'], 0],
    ['In LibreOffice Calc which shortcut key is use to open the cell format dialog box?', ['Shift + 1', 'Ctrl + Alt + 1', 'Alt + 1', 'Ctrl + 1'], 3],
    ['In LibreOffice Calc, which shortcut key is use to insert the Time?', ['Ctrl + ;', 'Ctrl + Shift + ;', 'Ctrl + T', 'None of these'], 1],
    ['Which shortcut key is use to open a new Spreadsheet?', ['Ctrl + Shift + N', 'Shift + N', 'Ctrl + N', 'Shift + Alt + N'], 2],
    ['In Calc which shortcut key is use to save as a program?', ['Ctrl + S', 'Ctrl + Shift + S', 'Shift + Alt + S', 'None of these'], 1],
    ['In LibreOffice Calc, Merge Cells command available in which menu?', ['Sheet', 'Style', 'Format', 'Edit'], 2],
    ['Which shortcut key is use to delete a cell in LibreOffice Calc?', ['Ctrl + +', 'Delete', 'Ctrl + D', 'Ctrl + -'], 3],
    ['In Calc, Freeze Rows and Columns option available in which menu?', ['View', 'File', 'Format', 'Data'], 0],
    ['In Calc, the last Column label is', ['ALZ', 'AMA', 'AMJ', 'ALX'], 2],
    ['The total number of Columns in Calc is', ['10241', '1024', '48523', 'None of these'], 1],
    ['In Calc, the name of the Cell made by the intersection of last column and last row is', ['AMJ65536', 'AMX1048576', 'AMJ1024', 'AMJ1048576'], 3],
    ['In Calc which shortcut key you press to change the number format as date?', ['Ctrl + Shift + 3', 'Ctrl + 1', 'Ctrl + Shift + 5', 'All of these'], 0],
    ['In Calc which shortcut key is used to insert a function?', ['F2', 'F3', 'Ctrl + F3', 'Ctrl + F2'], 3],
    ['What is the default height of a Row in Calc?', ['0.18', '0.23', '0.25', '0.21'], 0],
    ['What is the default width of a column in Calc?', ['0.84', '0.79', '0.89', 'None of these'], 1],
    ['In Calc the maximum zoom size is', ['200%', '400%', '500%', '600%'], 1],
    ['Which shortcut key is use to open the Format Cell?', ['Ctrl + 2', 'Ctrl + 3', 'Ctrl + 1', 'Ctrl + 4'], 2],
    ['Which is the last menu in Calc?', ['Help', 'Format', 'View', 'Sheet'], 0],
    ['Font Size, Font Face, Bold, Italic etc. options available in which Toolbar?', ['Standard', 'Drawing', 'Formatting', 'None of these'], 2],
    ['In Calc which shortcut key is use to select the whole worksheet?', ['Ctrl + A', 'Ctrl + Shift + Space', 'Ctrl + Space', 'Both A and B'], 3],
    ['You can change the user interface in Calc Program with....?', ['Single Toolbar', 'Tabbed', 'Tabbed Compact', 'All of these'], 3],
    ['The shortcut key to open a new Template in Calc program is', ['Ctrl + Shift + N', 'Ctrl + Alt + N', 'Ctrl + N', 'None of these'], 0],
    ['Protect Sheet option available in which menu?', ['View', 'File', 'Tools', 'Sheet'], 2],
    ['The shortcut key to hide the sidebar in Libre Office Calc is', ['Ctrl + F3', 'Ctrl + F5', 'Ctrl + F7', 'Shift + F5'], 1],
    ['In Libre Office Calc, the shortcut key to convert a number in a Cell into Date is?', ['Ctrl + Shift + F3', 'Ctrl + Alt + 3', 'Ctrl + Shift + 3', 'None of these'], 2],
    ['What you press to exit from LibreOffice Calc?', ['Ctrl + X', 'Ctrl + W', 'Ctrl + R', 'None of these'], 1],
    ['In LibreOffice Calc the maximum Cell in a worksheet is?', ['No Limit', '1,073,741,842', '1,073,824,741', '1,073,741,824'], 3],
    ['In LibreOffice Calc, you press which key with Ctrl to insert a new line or paragraph in a Cell?', ['Enter', 'Alt', 'Tab', 'Shift'], 0],
    ['What is the default file extension for a spreadsheet in LibreOffice Calc?', ['.odp', '.odd', '.ods', '.odt'], 2],
    ['In LibreOffice Calc a formula start with a symbol', ['=', '$', '&', '%'], 0],
    ['What is the result of the formula =COUNT(B1:B3)? Where B1=5, B2=4, B3=6', ['15', '3', '4', '5'], 1],
    ['What is the result of the formula =MAX(B1:B3)+MIN(B1:B3)? Where B1=5, B2=2, B3=7', ['7,2', '7+2', '5,7', '9'], 3],
    ['In LibreOffice Calc if the value is large then the Cell, then what is the result?', ['%%%%', '####', '&&&&', '#Name?'], 1],
    ['In LibreOffice Calc the address of any Cell is shown in?', ['Formula Bar', 'Address Book', 'Name Box', 'None of these'], 2],
    ['What is the result of the Formula =Product(80,-5)?', ['-400', '400', 'Null', 'None of these'], 0],
    ['In LibreOffice Calc the Alignment of a Non numeric value is', ['Right', 'Justified', 'Center', 'Left'], 3],
    ['If the Cell address is changed when you copy a formula then the formula is known as', ['Absolute Address', 'Relative Address', 'Mixed Address', 'Dynamic Address'], 1],
    ['In LibreOffice Calc, the maximum number of Row and Column is', ['1024 & 1048576', '1048576 & 16384', '16384 & 1048576', '1048576 & 1024'], 3],
    ['In Calc which shortcut key is use for print preview?', ['Ctrl + Shift + O', 'F12', 'Ctrl + F12', 'Ctrl + O'], 0],
    ['In Calc, the toolbar which has the commands like save, open, print, cut, copy etc. is called?', ['Formatting Toolbar', 'Drawing Toolbar', 'Standard Toolbar', 'None of these'], 2],
    ['Which shortcut key is use to select the complete Row?', ['Ctrl + Space', 'Ctrl + Shift + End', 'Shift + Space', 'None of these'], 2],
    ['In LibreOffice which shortcut key is use for comment?', ['Ctrl + Alt + C', 'Ctrl + C', 'Ctrl + Shift + T', 'Ctrl + Shift + C'], 0],
    ['In LibreOffice Calc, the shortcut key to convert a number into currency format is?', ['Ctrl + Shift + 1', 'Ctrl + Shift + 4', 'Ctrl + Shift + 5', 'Ctrl + Shift + 3'], 1],
    ['How many maximum sheets you can insert in LibreOffice Calc?', ['1000', '1024', 'No Limit', '10000'], 3],
    ['In LibreOffice Calc you can write maximum characters in a Cell.', ['32767', '32654', '356547', 'None of these'], 0],
    ['In LibreOffice Calc which shortcut key is use to clear direct format?', ['Ctrl + V', 'Ctrl + 1', 'Ctrl + Shift + F', 'Ctrl + M'], 3],
    ['Where is the name box in LibreOffice Calc?', ['On the Status bar', 'Left side over the Menu bar', 'Left side under the Menu bar', 'Right side under the Menu bar'], 2],
    ['Which shortcut key is use to move to the next sheet?', ['Tab', 'Ctrl + Tab', 'Ctrl + Shift + Tab', 'Shift + Tab'], 1],
    ['In LibreOffice Calc which shortcut key is use to highlight a value?', ['Ctrl + F6', 'Ctrl + F8', 'Ctrl', 'Ctrl + F1'], 1],
    ['In LibreOffice Calc the address of the last Cell is', ['$D$10', 'SAMD$1048576', 'XFD1048576', 'AMJ1048576'], 3],
    ['In LibreOffice Calc, to split a merged cell click button after selecting the cell', ['Center', 'Split', 'Merge and Center', 'Split and Merge'], 2],
    ['In Spreadsheet which shortcut key is use to select the row of the selected cell.', ['Shift + Space Bar', 'Ctrl + Space Bar', 'Shift + +', 'Ctrl + +'], 0],
    ['In Calc the process to combine two cells in one, is called', ['Join Cells', 'Merge Cells', 'Join Table', 'Merge Table'], 1],
    ['In LibreOffice Calc which shortcut key is use to move to the left of a cell?', ['Shift + Tab', 'Tab', 'Alt', 'Alt + Tab'], 0],
    ['In LibreOffice Calc, the intersection of a Row and Column is called', ['Book', 'Table', 'Sheet', 'Cell'], 3],
    ['In LibreOffice Calc which Symbol shows after a Formula Error?', ['$', '@', '#', '%'], 2],
    ['What is the maximum number of views you can add to a Slide?', ['2', '4', '6', '10'], 1],
    ['Which shortcut key in LibreOffice Impress is used for Paste Unformatted Text?', ['Ctrl + Alt + V', 'Ctrl + Shift + V', 'Ctrl + Alt + Shift + V', 'None of these'], 2],
    ['What is the slide transition in LibreOffice Impress?', ['Letter', 'A type of slide', 'Over head', 'A special effect used to show a slideshow'], 3],
    ['In LibreOffice Impress the shortcut key for print preview of a presentation is?', ['Ctrl + Shift + P', 'Ctrl + P', 'Ctrl + Shift + F12', 'None of these'], 0],
    ['LibreOffice Impress presentation can be exported in which format?', ['BMP', 'PDF', 'GIF', 'All'], 3],
    ['In LibreOffice Impress the default Title name of a presentation is?', ['Untitled 1', 'Presentation 1', 'Untitle', 'Document 1'], 0],
    ['In LibreOffice Impress the minimum zoom size is?', ['5%', '10%', '15%', '20%'], 0],
    ['The slide sorter option available in which menu of LibreOffice Impress?', ['Insert', 'View', 'Format', 'Slide show'], 1],
    ['Which transition effect is not available in LibreOffice Impress?', ['Fade', 'Dissolve', 'Fly in', 'Diagonal'], 2],
    ['Using which option do all the slides appear simultaneously?', ['Print preview', 'Slide sorter', 'Handouts', 'None of these'], 1],
    ['In LibreOffice Impress which shortcut key is used for duplicate slide?', ['Ctrl + S', 'Ctrl + D', 'Ctrl + Shift + D', 'None of these'], 2],
    ['Which shortcut key is used to add a new slide in LibreOffice Impress?', ['Ctrl + N', 'Ctrl + T', 'Ctrl + S', 'Ctrl + M'], 3],
    ['The default template in LibreOffice Impress Presentation is?', ['Image', 'Content only', 'Title and content', 'Title only'], 2],
    ['In LibreOffice Impress which shortcut key is used to repeat the slide show continuously?', ['Loop', 'Repeat', 'Move', 'None'], 0],
    ['Which of the following is used to organize or shorten the slides?', ['Slide Pane', 'Slide sorter view', 'Both A and B', 'None of these'], 2],
    ['Which shortcut key is used to move to the next slide?', ['Ctrl + Page up', 'Ctrl + Page Down', 'Ctrl + home', 'None of these'], 1],
    ['In LibreOffice Impress which view contains only Text?', ['Normal view', 'Slide sorter view', 'Notes view', 'Outline view'], 3],
    ['In LibreOffice Impress which option is used to remove the slide transition?', ['None Transition', 'Split Transition', 'Wipe Transition', 'Push Transition'], 0],
    ['In LibreOffice Impress the maximum number of handouts in a slide is?', ['3', '4', '6', '9'], 3],
    ['Which shortcut key is used to perform a slide show in LibreOffice Impress?', ['Alt + F5', 'F5', 'Shift + F5', 'Ctrl + F5'], 1],
    ['In LibreOffice Impress the default page orientation is?', ['Portrait', 'Vertical', 'Landscape', 'Horizontal'], 2],
    ['Which slide is used as a starting point for other slides?', ['First slide', 'Master slide', 'Last slide', 'None of these'], 1],
    ['In LibreOffice Impress which key is used to go to the previous slide?', ['Page down', 'Home', 'Enter', 'Page up'], 3],
    ['How can we go directly to the menu while the slide is running?', ['By Right click on the slide', 'By clicking on the Ribbon', 'By mouse click', 'All of the above'], 0],
    ['How to create a text box in a slide?', ['Slide -> Textbox', 'Insert -> Table -> Textbox', 'Insert -> Textbox', 'None of these'], 2],
    ['Which shortcut key is used to navigate in LibreOffice Impress?', ['Alt + F5', 'Ctrl + Shift + F5', 'Ctrl + F5', 'None of these'], 1],
    ['Which type of sound file from the following can be added to LibreOffice Impress?', ['.wav', '.log', '.dat', '.drv'], 0],
    ['The macros command is available in which menu of LibreOffice Impress?', ['Slide menu', 'Insert menu', 'View menu', 'Tools menu'], 3],
    ['In LibreOffice Impress which shortcut key is used to go to the first slide of the presentation?', ['Ctrl + Home', 'Home', 'Shift + Home', 'Both A and B'], 1],
    ['Which of the following view is not available in LibreOffice Impress?', ['Slide sorter view', 'Slide show view', 'Sorter view', 'None of these'], 2],
    ['Which of the following option is used to set the time for each object in a slide?', ['View -> Animation', 'Slide show -> Custom Transition', 'Format -> Animation', 'Slide show -> Slide Transition'], 0],
    ['In LibreOffice Impress the shortcut key Ctrl + E is used for?', ['Right Align', 'Center Align', 'Left Align', 'None of these'], 1],
    ['Which menu has the option of master slide in LibreOffice Impress?', ['Format', 'Slide show', 'Slide', 'View'], 3],
    ['In LibreOffice Impress the slide transition option available in which menu?', ['View', 'Slide', 'Insert', 'Both A and B'], 3],
    ['In LibreOffice Impress which file format is not added in a presentation?', ['GIF', 'JPEG', 'HTML', 'WAV'], 2],
    ['The first slide of a presentation is known as?', ['Title Slide', 'Home Slide', 'Main Slide', 'None of these'], 0],
    ['Which alignment is not available in LibreOffice Impress?', ['Right Alignment', 'Central Alignment', 'Justification', 'Left Alignment'], 2],
    ['What is used to determine the timing on a slide in a presentation?', ['Rehearsal', 'Slide Timer', 'Slide Tool', 'Slide Timing Tool'], 0],
    ['In LibreOffice Impress the shortcut key to insert a text box is?', ['F5', 'F3', 'F4', 'F2'], 3],
    ['In LibreOffice Impress bullet and numbering option available in which menu?', ['File', 'Format', 'Slide', 'Insert'], 1],
    ['In Impress press the shortcut key for send to back any shape is?', ['Ctrl + Shift + -', 'Ctrl + Shift + [', 'Ctrl + Shift + +', 'None of these'], 0],
    ['In Impress the shortcut key for subscript is?', ['Ctrl + Shift + P', 'Ctrl + Shift + B', 'Ctrl + B', 'None of these'], 1],
    ['In Impress the Clear Direct Formatting option available in which menu?', ['File', 'Window', 'Tools', 'Format'], 3],
    ['Shortcut key to insert a new slide is?', ['Ctrl + Shift + M', 'Shift + M', 'Ctrl + M', 'Ctrl + N'], 2],
    ['Export Direct as PDF option available at?', ['Drawing Toolbar', 'Presentation', 'Standard Toolbar', 'All of these'], 2],
    ['If you want to close the Impress Presentation Window then which shortcut key you press?', ['Ctrl + W', 'Ctrl + X', 'Ctrl + B', 'None of these'], 0],
    ['Shortcut key for Presentation Slide Show ?', ['F5', 'Shift + F5', 'Both a & b', 'ctrl + F5'], 2],
    ['In Impress which menu you use to change the layout of a slide?', ['Slide Show', 'Slide', 'Tools', 'Format'], 1],
    ['Text Alignment option available in which menu?', ['View', 'Insert', 'Tools', 'Format'], 3],
    ['In Impress the Layout of a slide can be?', ['Title Only', 'Title, Content', 'Title, 4 Content', 'All of these'], 3],
    ['In Impress the minimum and maximum zoom size is?', ['5, 3000', '10, 500', '5, 3000', 'None of these'], 0],
    ['In Impress which shortcut key is use to insert a Template?', ['Ctrl + Shift + B', 'Ctrl + Shift + N', 'Ctrl + N', 'None of these'], 1],
    ['During a slide presentation, which key would you press to select one hyperlink after another?', ['Tab', 'Ctrl + K', 'Ctrl + H', 'All of the above'], 0],
    ['What is the extension name of a file saved in Impress?', ['.odt', '.ods', '.odp', '.odi'], 2],
    ['Which of the following can you use to organize or shorten a slide?', ['Slide Pane', 'Slide Sorter View', 'Both a and b', 'None of these'], 2],
    ['..... is a slide that is used as a starting point for other slides?', ['First Slide', 'Master Slide', 'Template', 'Style'], 1],
    ['In LibreOffice Impress Macros command available in which menu?', ['Insert', 'Tools', 'Slide', 'None of these'], 1],
    ['Which of the following file formats can be added to LibreOffice Impress?', ['jpeg', 'wmv', 'mpeg', 'All of above'], 3],
    ['Using which option do all slides appear simultaneously?', ['Slide Sorter', 'Print Preview', 'Handouts', 'None of these'], 0],
    ['To Remove Slide Transition we use the following ......', ['Split Transition', 'None Transition', 'Wipe Transition', 'Push Transition'], 1],
    ['Nimnlikhit me se kaun sa Telecommunication device ka ek udaharan hai?', ['Keyboard', 'Printer', 'Mouse', 'Modem'], 3],
    ['Internet ...... ka sabse prasiddh udaharan hai?', ['LAN', 'MAN', 'WAN', 'All of these'], 2],
    ['Server ve Computer hote hain, jo ...... se jude dusre Computer ko resources pradan karte hain?', ['Super Computer', 'Mainframe', 'Client', 'Network'], 3],
    ['HTTP ka sahi vistrit kaun sa hai?', ['Hyper text transfer protocol', 'Hybrid text transfer protocol', 'Higher text transfer protocol', 'Higher transfer text protocol'], 0],
    ['Browser se kya aashay hai?', ['Web par website dikhane wala program hai', 'Internet connect karne wala program hai', 'Website banane wala program hai', 'All of the above'], 0],
    ['Website ko internet par uplabdh karane ke liye iska istemal kiya jata hai?', ['Surfing', 'Web hosting', 'Searching', 'None of these'], 1],
    ['Ek Webpage kis Format me Save hote hain?', ['Java', 'Doc', 'HTML', 'All of these'], 2],
    ['TCP/IP kisse connect hota hai?', ['Server', 'Client', 'Internet', 'a & b both'], 3],
    ['Internet se jude pratyek computer me ........ hona atiaavashyak hai?', ['Pentium Processor', 'Vishisht IP Address', 'Antivirus', 'Password Suraksha'], 1],
    ['Nimnlikhit me se internet kiska prayog karta hai?', ['Circuit Switching', 'Telephone Switching', 'Packet Switching', 'Telex Switching'], 2],
    ['Yahoo aur Google kiske udaharan hain?', ['Search Engine', 'Browser', 'Newsgroup', 'Antivirus'], 0],
    ['.......... ek \'Web Server\' hai?', ['Mozilla', 'Bind', 'Postfix', 'Apache'], 3],
    ['FAT ka poora roop hai?', ['File Allocation Table', 'Find Allocation Table', 'Fix Allocation Table', 'Free Allocation Table'], 0],
    ['Nimn me se kaun sa pehla search engine tha?', ['Google', 'Netscape', 'Archie', 'Safari'], 2],
    ['Walkie-Talkie me communication kis prakar se kiya jata hai?', ['Full-duplex', 'Half-duplex', 'Simplex', 'None'], 1],
    ['Sabse vyapak roop se istemal kiya gaya protocol kaun sa hai?', ['SMTP', 'FTP', 'ISP', 'HTTP'], 3],
    ['WAN ka poora naam hai?', ['Wide Area Network', 'Wireless Area Network', 'Both a and b', 'All of these'], 0],
    ['Pratham \'Search Engine\' kaun sa tha?', ['Google', 'Archie', 'Safari', 'Netscape'], 1],
    ['WWW ka poora naam kya hai?', ['World Web Wide', 'World Wide Web', 'Both', 'All of these'], 1],
    ['URL ka poora naam kya hota hai?', ['Unlimited Resource Locator', 'United Resource Locator', 'Uniform Resource Locator', 'Unlimited Result Long'], 2],
    ['Network me data packet bhejne ke liye is device ka istemal kiya jata hai?', ['Modem', 'Hub', 'Repeater', 'Router'], 3],
    ['Internet par dusre logon se judne ke liye aam taur par hum unke ........ ka prayog karte hain?', ['Email Address ka', 'Username ka', 'Password ka', 'Domain Name ka'], 0],
    ['Ek se dusre webpage par jana kya kehlata hai?', ['Moving', 'Transferring', 'Browsing', 'Switching'], 2],
    ['Inme se Bharat me internet ki shuruat me kiska yogdan hai?', ['BSNL', 'VSNL', 'MTNL', 'None of these'], 1],
    ['Pehla Search Engine kaun sa tha?', ['Archie', 'Google', 'Yahoo', 'None of these'], 0],
    ['HTML ka poora naam hai?', ['Hyper Text Makeout Language', 'Hyper Text Markup Link', 'Hyper Text Marked Language', 'Hyper Text Markup Language'], 3],
    ['Inme se kaun network ki security ka kaam karta hai?', ['DSL', 'Telnet', 'Hub', 'Firewall'], 3],
    ['Internet se jodakne ke liye nimnlikhit me se kis prakar ka connection telephone line prayog kiya jata hai?', ['Cable', 'Satellite', 'Dial-up', 'Wireless'], 2],
    ['User dwara computer se server me file transfer karna kehlata hai?', ['Downloading', 'Sequencing', 'Accessing', 'Uploading'], 3],
    ['Router ek ........ ke saman karya karta hai?', ['Hub', 'Bridge', 'Switch', 'Repeater'], 1],
    ['Kya Yahoo ek search engine hai?', ['True', 'False'], 0],
    ['Inme se kaun sa ek web browser ka udaharan nahi hai?', ['Safari', 'Netscape Navigator', 'Google', 'Opera'], 2],
    ['Nimnlikhit me se visham ko chunein?', ['POP', 'IMAP', 'SMTP', 'FTP'], 3],
    ['Nimnlikhit me internet ka standard protocol kaun sa hai?', ['JAVA', 'Flash', 'TCP/IP', 'HTML'], 2],
    ['Pehle web browser ka naam kya tha?', ['Mosaic', 'WorldWideWeb', 'Netscape', 'Mozilla Firefox'], 1],
    ['Kis desh me sarvadhik internet upyogkarta hain?', ['China', 'United States', 'India', 'Russia'], 0],
    ['Inme se kaun sa search engine nahi hai?', ['Google', 'Mozilla', 'Yahoo', 'All'], 1],
    ['Internet se jude pratyek computer me ........ hona zaroori hai?', ['Antivirus', 'Password Protection', 'Vishisht IP Address', 'Processor'], 2],
    ['VPN ka poora naam kya hai?', ['Virtual Print Network', 'Virtual Primary Network', 'Virtual Public Network', 'Virtual Private Network'], 3],
    ['Is prakar ki topology me yadi ek computer ka network cable toot jata hai toh sampurna computer network band ho jata hai?', ['Bus', 'Ring', 'Token Ring', 'Star'], 0],
    ['\'Indian Institute of Remote Sensing\' kahan par sthit hai?', ['Dehradun', 'Sriharikota', 'Ahmedabad', 'None of these'], 0],
    ['Vyavasayik uddeshya ke liye pratibandhit domain kaun sa hai?', ['.org', '.net', '.com', '.in'], 2],
    ['OSI reference model me pai jane wali kul layer ki sankhya kitni hoti hai?', ['5', '6', '7', '9'], 2],
    ['Niche diya gaya IP Address (IPv6 example) kiska udaharan hai?', ['IPv6', 'IPv4', 'Dono', 'Kisi ka nahi'], 0],
    ['Uniform Resource Locator (URL) se kya aashay hai?', ['A hardware', 'Address of the document or page on WWW', 'A software program', 'All of these'], 1],
    ['IPv4 kitne bits ka hota hai?', ['16 bits', '5 bits', '64 bits', '32 bits'], 3],
    ['Nimn me se kiski gati sabse tej hoti hai?', ['PAN', 'LAN', 'MAN', 'WAN'], 1],
    ['http://www.google.com kiska udaharan hai?', ['An access code', 'A protocol', 'Broadband', 'URL'], 3],
    ['DNS ka poora naam hota hai?', ['Domain Name System', 'Digital Name System', 'Domain Network System', 'All of these'], 0],
    ['DSL ek ........ connection hai?', ['Internet', 'Wireless', 'Slow', 'Broadband'], 3],
    ['UMANG App ko Bharat me kab shuru kiya gaya?', ['10 Dec 2017', '23 Nov 2017', '20 Nov 2017', '5 Nov 2017'], 1],
    ['Sample123@Yahoo.com me username kaun sa hai?', ['sample', '@', 'sample123', 'Yahoo.com'], 2],
    ['Blog ke liye content likhne wale ko bolte hain?', ['Blogger', 'Blogosphere', 'Blog', 'Blogging'], 0],
    ['Hum Gmail me adhiktam kitne size ki file ko attachment kar sakte hain?', ['15MB', '20MB', '25MB', '10MB'], 2],
    ['Nimnlikhit me kaunsi \'Social Site\' ka udaharan nahi hai?', ['Twitter', 'Instagram', 'LinkedIn', 'Amazon'], 3],
    ['POS ka poora naam kya hai?', ['Picture of Sale', 'Point of Sale', 'Position of Sale', 'None of these'], 1],
    ['Server se Mail Box me e-Mail ko Download karne wala protocol hai?', ['IMAP', 'SMTP', 'POP3', 'FTP'], 2],
    ['2FA ka poora naam hai?', ['Two factor Auditions', 'Two factor Verification', 'Two factor Authorised', 'Two factor Authentication'], 3],
    ['SMTP ka prayog kis tarah ka message bhejne ke liye kiya jata hai?', ['Users terminal se', 'Users mail box', 'a aur b dono', 'None of these'], 2],
    ['Nimnlikhit me se kiska istemal USSD seva ka labh uthane ke liye kiya jata hai?', ['*198#', '*99#', '*123#', 'Koi nahi'], 1],
    ['E-Mail me mukhya content kahan hota hai?', ['Body', 'Subject', 'CC', 'BCC'], 0],
    ['LIVE Video kiske sath Stream kar sakte hain?', ['Facebook', 'Twitter', 'Instagram', 'All'], 0],
    ['E-Mail address ke User ID aur Domain Name ko kya alag karta hai?', ['$', '#', '&', '@'], 3],
    ['Alibaba kis desh ka hai?', ['Bharat', 'China', 'Russia', 'America'], 1],
    ['B2B ka poorn roop hai?', ['Business to Business', 'Both of these', 'Basic to Business', 'None of these'], 0],
    ['Bina vishay (subject) likha hua message bheja ja sakta hai?', ['True', 'False'], 0],
    ['Inme se kaun sa email ka bhag nahi hai?', ['@', 'Space ( )', 'Underscore (_)', 'All of these'], 1],
    ['........ protocol vibhinn host ke beech e-mail ki suvidha pradan karta hai?', ['TELNET', 'FTP', 'HTTPS', 'SMTP'], 3],
    ['Nimn me se kaunsi site social site nahi hai?', ['LinkedIn', 'Twitter', 'Amazon', 'Instagram'], 2],
    ['E-Governance prakriya badlav karti hai?', ['Paradarshta', 'Dakshta', 'Sabhi', 'Jawabdehi'], 2],
    ['UMANG App ka uddeshya hai?', ['Fast gaming', 'Fasttrack Mobile Governance', 'Slow gaming', 'None of these'], 1],
    ['UMANG App kitni bhashao ko support karta hai?', ['10', '11', '12', '13'], 3],
    ['UMANG App nimn sevao ko sulabh karata hai?', ['Income Tax file karna', 'Aadhaar aur PF queries solve karna', 'Gas cylinder book karna', 'All of the above'], 3],
    ['E-Mail address ka pehla bhag ........ hai?', ['Username', 'Domain Name', 'ISP', 'Nivas ka pata'], 0],
    ['Nimn me se kaun sa nishulk web aadharit e-mail seva pradata hai?', ['www.yahoo.com', 'www.gmail.com', 'Dono', 'Koi nahi'], 2],
    ['Nimn me se kaun sa internet ka sabse viral section hai?', ['Chat messenger', 'Social networking sites', 'Tutorial sites', 'Chat room'], 1],
    ['Blog par sangrah ........ hai?', ['Feeds', 'Ek blog ke sabhi elements', 'Links', 'Aapki pichhli post ka sangrah'], 3],
    ['SMTP me \'M\' ka kya arth hai?', ['Mail', 'Mailing', 'Mobile', 'All of these'], 0],
    ['Shasan ke liye computer ke prayog ko kya kahenge?', ['Internet Governance', 'E-Mail Governance', 'E-Governance', 'Computer Governance'], 2],
    ['Electronic mail address me kitne bhag hote hain?', ['Ek bhag', 'Do bhag', 'Teen bhag', 'Sabhi'], 1],
    ['IRCTC se kya aashay hai?', ['Email Seva Pradata', 'Railway Seva Pradata', 'Plastic Money', 'E-Wallet'], 1],
    ['IMPS ka poora naam kya hai?', ['Immediate Payment Service', 'Internet payment system', 'Immediate payment system', 'All of these'], 0],
    ['RTGS ke madhyam se bhugtan karne ki nyunatam rashi seema kitni hai?', ['5 Lakh', '1 Lakh', '2 Lakh', '10 Lakh'], 2],
    ['Pradhan Mantri Suraksha Bima Yojana ek durghatna aur viklangta se sambandhit bima yojana hai?', ['True', 'False'], 0],
    ['Delete kiya gaya mail punah prapt karne ke liye kaun sa folder kholna hoga?', ['Bounce mail', 'Spam', 'Junk mail', 'Trash'], 3],
    ['WordPress, ExpressionEngine aur TypePad aadi ka istemal kiske liye kiya ja sakta hai?', ['P2P file sharing', 'Blogging', 'Word processing', 'Koi nahi'], 1],
    ['Aapke dwara bheji gayi mail \'Sent\' namak folder me dikhai jaati hai?', ['True', 'False'], 0],
    ['Upbhokta aapas me sevao ka aadan-pradan karta hai, kya kehlata hai?', ['B2B', 'B2C', 'G2C', 'C2C'], 3],
    ['CRW ka poorn roop hai?', ['Continuous Web Radar', 'Continuous Wave Reader', 'Continuous Wave Radar', 'None'], 2],
    ['Social networking site par kis prakar ke log aapko mil sakte hain?', ['Politician', 'Musician', 'Adhyapak', 'All of the above'], 3],
    ['Yadi aapke paas ek PowerPoint Show hai jo aap kisi anya vyakti ko e-mail ke madhyam se bhejna chahte hain toh aap apne email message me PowerPoint Show ko kis tarah jodenge?', ['Inclusion', 'Reply', 'Attachment', 'Forward'], 2],
    ['UMANG ka poora naam kya hai?', ['Unified Mobile Application for new governance', 'Unified Mobile Application for New Age Governance', 'Unique Mobile Application for new age governance', 'None'], 1],
    ['\'Vyakti Loan\' ko kisi vyakti ke paise ya vyapar ke aadhar par nahi diya jata?', ['True', 'False'], 1],
    ['Nimnlikhit file prakaron me se kise email ke dwara bheja nahi ja sakta hai?', ['.exe', '.pdf', '.7z', '.docx'], 0],
    ['Aapke dwara bheja gaya e-mail kahan par store hota hai?', ['Inbox', 'Trash', 'Draft', 'Outbox'], 3],
    ['Tweet me ek se adhik # tag ka prayog kar sakte hain?', ['True', 'False'], 0],
    ['Gmail ke Founder kaun hain?', ['Larry Page', 'Sergey Brin', 'Paul Buchheit', 'Sundar Pichai'], 2],
    ['Facebook me jahan aapke doston ki photo dikhai deti hai use kya kehte hain?', ['Timeline', 'Story', 'Newsfeed', 'Public'], 2],
    ['Twitter me Trending ka kya symbol hota hai?', ['$', '@', '&', '#'], 3],
    ['Freeware ke do udaharan hain?', ['MS Word aur Google Toolbar', 'Instant Messenger aur Google Toolbar', 'WinZip aur Remix', 'Shareware & File Sharing'], 1],
    ['KYC ka poora naam kya hai?', ['Know Your Cash', 'Know Your Customer', 'Knowledge of Your Customer', 'None of these'], 1],
    ['Banking kshetra me adhik sankhya me chequon ke tej nistarann me sahayata karta hai?', ['OMR', 'OCR', 'Bar Code Reader', 'MICR'], 3],
    ['MMID ka poora naam kya hai?', ['Mobile Money Identify', 'Mobile Money Identifier', 'Both', 'None'], 1],
    ['Mobile Banking se sambhav hai?', ['Khaton ki bachat rashi dekhna', 'Bijli bill bhugtan', 'Fund transfer', 'All of the above'], 3],
    ['Bank dwara ........ par byaj diya jata hai?', ['Loans', 'Transactions', 'Deposits', 'Withdraw'], 2],
    ['\'Internet Banking\' ka karya nahi hai?', ['Khate se nakad nikalna', 'Khate ka vivaran dekhna', 'Rinn ke liye aavedan karna', 'Hal hi ke karya ka vivaran dekhna'], 0],
    ['Isliye, humein bankon ki zaroorat hoti hai?', ['Rinn lene hetu', 'Byaj prapt karne hetu', 'Rupaye surakshit rakhne ke liye', 'All of the above'], 3],
    ['Nimn me se kaun sa pehchan ke satyapan se sambandhit dastavez hai?', ['Driving License', 'Passport', 'PAN Card', 'All of these'], 3],
    ['ATM Debit Card par mudrit sankhya me kitne ank hote hain?', ['12', '14', '16', '10'], 2],
    ['RTGS me \'T\' ka kya arth hai?', ['Time', 'Tea', 'Today', 'Transfer'], 0],
    ['Aadhaar se aashay hai?', ['UIDAI dwara jari pehchan patra', '12 ankon ka sankhya card hai', 'Ek bachat khata', 'a aur b dono'], 3],
    ['Bank me khata kholne ke liye KYC manadandon ki poorti ke liye nimnlikhit me kin dastavezon ko aadharik roop se vaidha mana gaya hai?', ['Aadhaar Number', 'Passport', 'PAN', 'All of the above'], 3],
    ['QR Code ka prayog pehli bar kab hua?', ['1990', '1993', '1994', '1995'], 2],
    ['DFT ka poora roop kya hai?', ['Digital Financial Tools', 'Digital Dynamic Tools', 'Dynamic Financial Tools', 'None'], 0],
    ['Credit karna kisse sambandhit hai?', ['Cash nikalna', 'Bank me paise jama karna', 'Debit', 'None of these'], 1],
    ['ITZ Cash kis bank dwara adhikrit mobile wallet hai?', ['RBI', 'SBI', 'Finance Ministry', 'GOI'], 0],
    ['Bank dwara ........ par byaj liya jata hai?', ['Jamao par', 'Rinn par', 'Dono par', 'None of these'], 1],
    ['Maestro Card Number kitne ank ke hote hain?', ['22', '20', '19', '18'], 2],
    ['IMEI ka poora naam kya hai?', ['International Mobile Equipment Identity', 'International Mobile Electronic Identity', 'Internet Mobile Equipment Identity', 'None'], 0],
    ['Credit Card ko aur kis naam se jaante hain?', ['Soft Money', 'Plastic Money', 'Hard Money', 'Easy Money'], 1],
    ['Chikitsalay me online panjeekaran kiske madhyam se hota hai?', ['Internet', 'Calc', 'HMIS', 'SMIS'], 2],
    ['Full form of UIDAI?', ['University Identification Authority of India', 'Unique Information Authority of India', 'Unique Identification Authority of India', 'None'], 2],
    ['Bank bachat jama par byaj diya jata hai?', ['Timahi', 'Pratimah', 'Ardhvarshik', 'Varshik'], 0],
    ['Kya dial karke USSD seva ka labh utha sakte hain?', ['*121#', '*99#', 'A And B', '#123*'], 2],
    ['BHIM ka poora naam kya hai?', ['Unified Payment Interface', 'Bharat Interface for Money', 'International Banking Payment', 'Bharatiya Interface Money'], 1],
    ['QR Code ko kab aur kisne viksit kiya?', ['Richard Denis, 1998', 'Mark Denis, 1995', 'Denso Mark, 1995', 'Denso Wave, 1994'], 3],
    ['QR Code me kitne number sangrahit kiye ja sakte hain?', ['7089', '5028', '1024', 'Koi seema nahi'], 0],
    ['QR Code me kitne alphanumeric word sangrahit kiye ja sakte hain?', ['4296', '5028', '7089', '10000'], 0],
    ['Pockets kis bank ke dwara shuru kiya gaya tha?', ['HDFC', 'ICICI', 'PNB', 'SBI'], 1],
    ['Nakad nikasi ke liye debit card aur credit card ka prayog kar sakte hain?', ['True', 'False'], 0],
    ['ATM se kya aashay hai?', ['Bina staff ke nakadi dena', 'Bankon me staff mukt yukta counter', 'Bankon ki shakhaein', 'None of these'], 2],
    ['PAN ka poora naam kya hai?', ['A kind of account', 'Primary Account Number', 'Position Account Number', 'Permanent Account Number'], 3],
    ['\'Vyaktigat Loan\' kisi vyakti ke paise ya vyapar ke aadhar par diya jata hai?', ['True', 'False'], 0],
    ['NABARD kisse sambandhit hai?', ['Bank', 'Rinn dene wali sanstha', 'Rinn lene wali sanstha', 'None of these'], 1],
    ['AEPS ka poora naam kya hai?', ['Annual Premium Equivalent System', 'Aadhaar Payment Enabled System', 'Aadhaar Premium Enabled System', 'Aadhaar Enabled Payment System'], 3],
    ['Bank dwara jari kiye jane wale OTP me kitni sankhyaein hoti hain?', ['4', '5', '6', '8'], 2],
    ['OTP ki samay seema kitni hoti hai?', ['5 Minute', '10 Minute', '30 Minute', 'None'], 1],
    ['OTP kahan bheja jata hai?', ['Panjeekrit mobile par', 'Panjeekrit email par', 'a tatha b dono par', 'Kisi bhi mobile par'], 2],
    ['Rupaye ko ek jagah se dusri jagah par bhejne ka surakshit madhyam hai?', ['Demand Draft', 'Cheque', 'Dono', 'Koi nahi'], 2],
    ['UPI se kya aashay hai?', ['Immediate Payment Interface', 'Unified Payments Interface', 'Unfind Pay Interface', 'None of these'], 1],
    ['Bharat me pratham ATM lagaya gaya tha?', ['1980', '1985', '1987', '1990'], 2],
    ['Nimnlikhit ka prayog bankon me cheque aur draft me kiya jata hai?', ['CPU', 'Bar Code', 'OMR', 'MICR'], 3],
    ['UPI ki shuruat kiske dwara ki gayi?', ['UIDAI', 'NPCI', 'Both', 'None'], 1],
    ['Vyapariyon dwara apne grahakon ka pushtikaran KYC kehlata hai?', ['True', 'False'], 0],
    ['Nimnlikhit me se kaun sa karya ATM nahi karta hai?', ['Shikayat', 'Mini Statement', 'Niyamit bill bhugtan', 'Nakad jama'], 3],
    ['Mobile Banking seva hai?', ['Bhugtan', 'Balance ki jaanch', 'Khata lenden', 'All of the above'], 3],
    ['ABRS stand for?', ['Aadhaar Based Reserve Service', 'Aadhaar Based Remittance Service', 'Aadhaar Based Reserve Software', 'None of these'], 1],
    ['QR Code ka kya arth hai?', ['Quick Response Code', 'Quick Register Code', 'Quick Random Code', 'None of these'], 0],
    ['IFSC Code me kitne ank hote hain?', ['11', '14', '16', '15'], 0],
    ['IDS ka poora naam kya hai?', ['Intrusion Detection System', 'International Detection System', 'Intrusion Detection Server', 'None'], 2],
    ['WPS ka poora naam kya hai?', ['Wi-Fi protected system', 'Wi-Fi protocol setup', 'Wireless protected setup', 'Wi-Fi Protected Setup'], 3],
    ['Aapko ek SMS bhejkar aapke mobile se paise kaat sakta hai?', ['IM Trojans', 'SMS Trojans', 'Backdoor Trojans', 'Ransom Trojans'], 1],
    ['Firewall ka prayog ...... se bachne ke liye kiya jata hai?', ['Data chalit hamle', 'Virus ke hamle', 'Aag ka hamla', 'Anadhikrit hamle'], 3],
    ['...... internet par upyogkarta gatividhi par nazar rakhta hai aur uski jankari ko kisi aur ko sanchalit karta hai?', ['Spyware', 'Adware', 'Malware', 'None of these'], 0],
    ['FSP (Future Skills Portal) ko kiske dwara launch kiya gaya?', ['WIPRO', 'NIELIT', 'NASSCOM', 'HCL'], 2],
    ['DES ka poora naam kya hai?', ['Data Evaluation System', 'Data Encryption Standard', 'Data Encryption Software', 'Department of Environmental'], 1],
    ['Nimnlikhit me se kaun-si soochana praudyogiki shabdavali nahi hai?', ['Upload', 'Cyberspace', 'Prakashiy bhandaran', 'Modem'], 2],
    ['Computer virus ko pehchanein?', ['Trojan horse', 'Malware', 'Ransomware', 'All of these'], 3],
    ['Miner hai?', ['Computer jo blockchain lenden ko manne aur sansadhit karne ka karya karta hai', 'Ek algorithm jo shrankhla ke agle bhag ki bhavishyavani karta hai', 'Lenden ko satyapit karne ke liye ganana karne wala vyakti', 'Ek prakar ka Blockchain'], 0],
    ['Password ka upyog kiske liye kiya jata hai?', ['Reliability', 'Suraksha', 'Lambi avadhi', 'Performance'], 1],
    ['RPA stand for...?', ['Robotic Process Automation', 'Robotic Program Automation', 'Robotic Professional Automation', 'Robotic Process Automobile'], 0],
    ['Trojan kya hai?', ['Application Software', 'Anti-virus', 'Computer Virus', 'High Level Program'], 2],
    ['Kisi data ko ek sthan se dusre sthan par sthanantarit karne ko kya kehte hain?', ['Data Manipulation', 'Data Communication', 'Data Abstraction', 'None'], 1],
    ['Internet-of-Things se sambandhit nahi hai?', ['Data Storage Standard', 'Nijikaran', 'Cyber Security', 'Kshamta'], 3],
    ['Machine ki manaviy buddhimatta ka parikshan kis kshetra me kiya jata hai?', ['Cognitive Science', 'Manovigyan', 'Itihas', 'Samajshastra'], 0],
    ['Blockchain me \'Block\' se kya aashay hai?', ['A Hash Point', 'A Timestamp', 'Transaction Data', 'All of these'], 3],
    ['CRW ka poora naam kya hai?', ['Continuous Wave Radar', 'Continuous Wave Reader', 'Continuous Web Radar', 'None of these'], 1],
    ['Inme se kaun MQTT protocol ko suparibhashit karta hai?', ['Request / Responses', 'Mesh Networking', 'Publish / Subscribe', 'Machine to Machine (M2M)'], 2],
    ['Virus ko kaun banata hai?', ['Manav', 'Prakriti', 'Machine', 'All of the above'], 0],
    ['Big Data Analytics ki visheshta hai?', ['Open Source', 'Scalability', 'Data Recovery', 'All of these'], 3],
    ['M2M ka poorn roop hai?', ['Money to Money', 'Machine to Machine', 'Mobile to Mobile', 'None of these'], 1],
    ['Machine ki manaviy buddhimatta ka parikshan kiya jane wala kshetra hai?', ['Manovigyan', 'Samajshastra', 'Cognitive Science', 'Itihas'], 2],
    ['Aisi praudyogiki jisme user ko aisa mehsus hota hai ki ve aabhasi vatavaran me hain?', ['IR', 'RA', 'ARX', 'VR'], 3],
    ['Proxy Server ka istemal kiya jata hai?', ['Anadhikrit upyogkartao ke khilaf suraksha pradan karne ke liye', 'TCP/IP dene ke liye', 'Web page ke client request process karne ke liye', 'Database access ke liye request'], 0],
    ['Ek computer me virus ke chhipne ki jagah kahan hoti hai?', ['Application Program', 'Operating System', 'a and b', 'Disk Driver'], 2],
    ['Key Logger ........ hai?', ['Firmware', 'Spyware', 'Antivirus', 'All of the above'], 1],
    ['Ek program ya hardware device, jo internet connection ke madhyam se aane wali soochanao ko kisi network ya computer system me filter karti hai?', ['Firewall', 'Antivirus', 'Cookies', 'Cyber Safety'], 0],
    ['FSP (Future Skills Portal) kab shuru hua?', ['9th Feb 2018', '29th Feb 2018', '19th Feb 2018', '19th Nov 2018'], 2],
    ['Ek computer virus hota hai?', ['Fafoond', 'Software Program', 'IC 7344', 'Bacteria'], 1],
    ['VR stand for...?', ['Versatile Reader', 'Virtual Right', 'Version Reading', 'Virtual Reality'], 3],
    ['Hacker kaun hota hai?', ['Internet virus', 'Ek machine hota hai', 'Ek insan hota hai', 'None'], 2],
    ['Cloud Computing ke dwara ........... se aap jankari tak pahunch sakte hain?', ['Your Desktop', 'Smart Phones', 'Video Game Systems', 'All of the above'], 3],
    ['AI ka prayog kis peedhi me hua?', ['Pratham Peedhi', 'Pancham Peedhi', 'Chaturth Peedhi', 'NOTA'], 1],
    ['Malware kya hai?', ['Software', 'Hacker iska istemal data chori karne ke liye karte hain', 'Yeh hamare computer ko nuksan pahunchata hai', 'All of the above'], 3],
    ['Cloud Computing me \'Cloud\' ka arth hai?', ['Internet', 'Lock', 'Hard Drive', 'Wireless'], 0],
    ['IIoT device ko sandarbhit karne ka anya tareeka kaun sa hai?', ['Connected', 'Smart', 'Uprokt Dono', 'Koi nahi'], 2],
    ['Sochne, tark karne aur sikhne me saksham computer pranali ki visheshta kaunsi hai?', ['Machine Intelligence', 'Artificial Intelligence', 'Virtual Intelligence', 'Human Intelligence'], 1],
    ['Bitcoin ........ blockchain par aadharit hai?', ['Public', 'Swikriti Public', 'Private', 'Swikriti'], 0],
    ['Blockchain se kya aashay hai?', ['Ek exchange', 'Peer to Peer network par vitrit ek ledger', 'Ek prakar ki Cryptocurrency', 'Ek kendriya ledger'], 1],
    ['Pratham swikrit IoT device ka naam ........ tha?', ['ATM', 'Video Game', 'Radio', 'Smart Watch'], 2],
    ['Antivirus program kaun kaun se hain?', ['K7', 'Quick Heal', 'Norton', 'All of these'], 3],
    ['Kya AI ka lakshya un pranalion ka nirman karna hai jo buddhiman vyavahar pradarsit karti hain?', ['True', 'False'], 0],
    ['Kaun sa kshetra Virtual Reality dwara prabhavit nahi hai?', ['Shiksha', 'Surgery', 'Dak Seva', 'Architecture'], 2],
    ['Cloud Computing ke baare me nimnlikhit me se kaun sa sahi hai?', ['Jab tak aapke paas internet connection hai, aap duniya ke kisi bhi computer se apne data tak pahunch sakte hain', 'Yeh hamse sthaniy computing ki tulna me kam kharchila aur surakshit hai', 'Keval kuch hi chhoti companiyan nivesh kar rahi hain, jisse yeh jokhim bhara ban gaya hai', 'All of the above'], 0],
    ['IoT me kin jokhimon aur chunautiyon par vichar kiya jana chahiye?', ['Privacy & Security', 'Energy Consumption', 'Network Congestion', 'All of the above'], 3],
    ['Artificial Intelligence kisse sambandhit hai?', ['Apni soch computer me rakhna', 'Machine ko buddhiman banana', 'Apni buddhimani se ki gayi programming', 'Game khelna'], 1],
    ['Firewall ka mukhya kaam hai?', ['Deleting', 'Monitoring', 'Copying', 'Moving'], 1],
    ['Data aur Password ki suraksha kaun karta hai?', ['Authentication', 'Authorization', 'Encryption', 'Non-repudiation'], 2],
    ['Cloud Computing system ke do mukhya khand kya hain?', ['Terminal aur Nodes', 'Koi nahi', 'Network aur Server', 'Front End aur Back End'], 3],
    ['Cloud Computing kya hai?', ['Computing ka ek model jisme aapka computer terminal ke roop me karya karta hai aur server ka ek network aap ke liye processing power aur storage ko sambhalta hai', 'Yeh ek jatil mausam-mapping pranali hai jo samay ki lambi seemao par jalvayu pattern ko project karti hai', 'Yeh keval ek Local Area Network (LAN) ke liye ek fancy naam hai', 'All of the above'], 0]
  ],
  o2: [
    ['सीएसएस पैडिंग प्रॉपर्टी का उपयोग किस उद्देश्य के लिए किया जाता है ?', ['बॉर्डर', 'स्पेस', 'पृष्ठभूमि रंग', 'मार्जिन'], 1],
    ['एंगुलरजेएस एक ................... है।', ['एचटीएमएल फ्रेमवर्क', '.Net फ्रेमवर्क', 'ओरेकल फ्रेमवर्क', 'जावास्क्रिप्ट फ्रेमवर्क'], 3],
    ['नोटपैड++ में चालू पंक्ति को डुप्लीकेट करने के लिए किस शॉर्टकट कुंजी का प्रयोग किया जाता है ?', ['Ctrl+Shift+D', 'Ctrl+Alt+D', 'Ctrl+D', 'Alt+D'], 2],
    ['कौन सी CSS प्रोपेर्टी यह तय करने में मदद करती है कि टेक्स्ट को क्लिप किया जाना चाहिए, कुछ बिंदु (इलिप्सिस) दिखाएं, या एक कस्टम स्ट्रिंग प्रदर्शित करें ?', ['टेक्स्ट-ओवरफ्लो', 'टेक्स्ट-स्ट्रोक', 'टेक्स्ट-शैडो', 'टेक्स्ट-डेकोरेशन'], 0],
    ['www (वर्ल्ड वाइड वेब) का आविष्कार किसने किया ?', ['बिल गेट्स', 'ली. एन. फेयोंग', 'टॉम बेर्नेर्स ली', 'टिम बेर्नेर्स ली'], 3],
    ['इंटरनेट से जुड़ने के लिए निम्न में से क्या आवश्यक है ?', ['इंटरनेट सेवा प्रदाता', 'इंटरनेट सोसायटी', 'इंटरनेट आर्किटेक्चर बोर्ड', 'अलग कंप्यूटर'], 0],
    ['दिए गए img टैग में, दोहरे उद्धरण चिह्न के अंदर "img.png" का क्या अर्थ है ?', ['एलिमेंट', 'एट्रिब्यूट', 'वैल्यू', 'ऑपरेटर'], 2],
    ['निम्नलिखित में से कौन-सा/से मार्कअप भाषा का उद्देश्य है/हैं ? I. हाइपरटेक्स्ट क्षमताएं जोड़ना II. दस्तावेज़ को बढ़ाना III. किसी दस्तावेज़ में तत्वों को परिभाषित करने के लिए', ['केवल I', 'I, II और III', 'केवल III', 'I और II'], 1],
    ['फॉण्ट का फेस सेट करने के लिए निम्न में से किस प्रॉपर्टी का प्रयोग किया जाता है ?', ['फॉण्ट-फॅमिली', 'फॉण्ट-स्टाइल', 'फॉण्ट-वैरिएंट', 'फॉण्ट-फेस'], 3],
    ['निम्नलिखित में से कौन एक माउस इवेंट नहीं है ?', ['ऑनमाउसस्क्रोलर', 'ऑनक्लिक', 'ऑनमाउसओवर', 'ऑनमाउसमूव'], 0],
    ['निम्न में से कौन सा सही है ?', ['सीएसएस एक ऑफ़लाइन कैश की मदद से वेब एप्लिकेशन को स्थानीय रूप से स्टोर कर सकता है।', 'स्टाइल शीट सामग्री को एक से अधिक प्रकार के डिवाइस के लिए अनुकूलित करने की अनुमति देती है।', 'सीएसएस का उपयोग करके हम ऑफलाइन वेबसाइट देख सकते हैं।', 'उपरोक्त सभी।'], 1],
    ['Ctrl + + F सबलाइम टेक्स्ट एडिटर में ................... के लिए शॉर्टकट कुंजी है।', ['प्राप्त करने', 'फोल्डर में प्राप्त करने', 'फाइलों में प्राप्त करने', 'उपरोक्त में से कोई नहीं'], 2],
    ['निम्नलिखित ट्रांजिसन में, 4s क्या वर्णन करता है? transition: color .4s linear;', ['वर्ड-स्पेसिंग', 'पैडिंग', 'प्रॉपर्टी', 'अवधि'], 3],
    ['निम्नलिखित में से कौन इंटरनेट पर सर्च इंजन का उदाहरण है ?', ['एमएस ऑफिस', 'जीमेल', 'गूगल', 'विंडोज'], 2],
    ['निम्नलिखित में से किसका उपयोग एक विशिष्ट नियम को लागू करने के लिए किया जाता है और इसे सीएसएस में कभी भी ओवरराइड नहीं किया जा सकता है ?', ['!important', '!important!', '@important', 'important!'], 0],
    ['निम्नलिखित में से किसे त्रुटि नहीं माना जाता है :', ['शून्य से विभाजन', 'अर्धविराम न होना', 'सिंटेक्स की गलती', 'ब्रैकेट न होना'], 1],
    ['................... इमेज पिक्सल के रंगों को बदलकर एक इमेज का रूप बदलता है।', ['क्रोप्पिंग', 'ब्ल्लरिंग', 'फ़िल्टरिंग', 'रोटेटिंग'], 2],
    ['दस्तावेज़ के ज़ूम स्तर को बढ़ाने के लिए कीबोर्ड शॉर्टकट क्या है ?', ['Alt + the plus key (+)', 'Ctrl + the plus key (+)', 'Alt + >', 'Ctrl + z'], 1],
    ['निम्नलिखित में से कौन सीएसएस का उपयोग करके एनिमेट करना संभव नहीं है ?', ['टेक्स्ट-ट्रांसफॉर्म', 'वर्ड-स्पेसिंग', 'पैडिंग', 'विड्थ'], 0],
    ['सामान्यीकृत रंग सुधार के लिए, कौन सा कमांड एक छवि में रंगों के समग्र संयोजन को समायोजित करता है ?', ['कर्ब्स', 'वेरिएशन्स', 'दि कलर बैलेंस', 'उपरोक्त में से कोई नहीं'], 2],
    ['नीचे दिए गए सीएसएस गुणों से, टेक्स्ट को बोल्ड बनाने के लिए निम्न में से किसका उपयोग किया जाता है ?', ['Text-align: bold', 'Font-style: bold', 'Text-decoration: bold', 'Font-weight: bold'], 3],
    ['किसी भी वेबपेज से कंप्यूटर सिस्टम में फाइल ट्रांसफर को ................... कहा जाता है।', ['अपलोडिंग', 'फोर्वार्डिंग', 'ट्रांस्फरिंग', 'डाउनलोडिंग'], 3],
    ['जब <iframe> टैग का उपयोग किया जाता है, तो निम्न में से कौन सी विशेषता एम्बेड करने के लिए पृष्ठ के URL को परिभाषित करती है ?', ['pref', 'src', 'स्टाइल', 'शीर्षक'], 1],
    ['सीएसएस में इमेज पुनरावृति को नियंत्रित करने के लिए सही विकल्प है :', ['h1 {background-loop: none; }', 'h1 {background-repeat: none; }', 'h1 {background-iterate: none; }', 'उपरोक्त में से कोई नहीं'], 1],
    ['निम्नलिखित में से कौन सा कथन जावास्क्रिप्ट में ऐरेज को परिभाषित करता है ?', ['यह वैल्यूज की एक क्रमबद्ध सूची है', 'यह वस्तुओं की एक क्रमबद्ध सूची है', 'यह स्ट्रिंग की एक क्रमबद्ध सूची है', 'यह कार्यों की एक आदेशित सूची है'], 0],
    ['निम्नलिखित में से कौन सा/से कथन सत्य है/हैं ? I. वेब डिज़ाइनर को केवल रूपरंग के बारे में ही नहीं बल्कि उपयोगकर्ता इंटरफ़ेस के बारे में भी चिंतित होना चाहिए II. वेब डिज़ाइन में उपयोगिता बहुत महत्वपूर्ण है', ['केवल I', 'केवल II', 'I और II दोनों', 'उपरोक्त में से कोई नहीं'], 2],
    ['सीएसएस सिंटैक्स को ................... भागों में बांटा गया है।', ['प्रॉपर्टी नाम और वैल्यू', 'सिलेक्टर और डिक्लेरेशन', 'कलर और स्टाइल', 'इनमें से कोई नहीं'], 0],
    ['एमवीसी में एक मॉडल क्या है ?', ['डेटा को बनाए रखने के लिए अपनाई जाने वाली पद्धति का निम्नतम स्तर', 'सर्वर-साइड डेटा का प्रतिनिधित्व करता है', 'डेटाबेस में संग्रहित डेटा का प्रतिनिधित्व करता है', 'उपरोक्त में से कोई नहीं'], 3],
    ['किसी छवि को टेक्स्ट के साथ घेरने के लिए किस सीएसएस प्रॉपर्टी का उपयोग करना चाहिए ?', ['रैप', 'पुश', 'अलाइन', 'फ्लोट'], 3],
    ['एक रंग प्रणाली के रंगों की श्रेणी जिन्हें वह प्रदर्शित या प्रिंट कर सकता है वह ................... है।', ['डिथरिंग', 'कलर मॉडल', 'दि गमुट', 'उपरोक्त में से कोई नहीं'], 2],
    ['निम्नलिखित में से किस उद्देश्य (उद्देश्यों) के लिए जावास्क्रिप्ट को डिज़ाइन किया गया है ?', ['एचटीएमएल पृष्ठों में अन्तर-क्रियाशीलता जोड़ने के लिए', 'सर्वर-साइड स्क्रिप्टिंग ऑपरेशन करने के लिए', 'सर्वर पर डीबी से संबंधित क्वेरी निष्पादित करने के लिए', 'एचटीएमएल पृष्ठों को स्टाइल करने के लिए'], 0],
    ['वेब क्लाइंट वेब पेज देखने के लिए किस प्रोग्राम का उपयोग करते हैं ?', ['प्रोटोकॉल', 'वेब ब्राउज़र', 'वेब सर्वर', 'सर्च इंजन'], 1],
    ['वर्तमान एचटीएमएल दस्तावेज़ में बाहरी जावास्क्रिप्ट फ़ाइल को कॉल करने के लिए सही सिंटैक्स कौन सा है ?', ['<script link="test.js"></script>', '<script href="test.js"></script>', '<import src="test.js"></import>', '<script src="test.js"></script>'], 3],
    ['नोटपैड ++ में खुली हुई सभी फाइलों को कैसे बंद करें?', ['फाइल मेनू -> क्लोज आल', '$Ctrl+w$', 'फाइल मेनू -> क्लोज विकल्प', 'सर्च मेनू -> क्लोज आल'], 0],
    ['................... एक एचटीएमएल 5 दस्तावेज़ के लिए एक डिक्लेरेशन है।', ['<DOCTYPE html>', '</DOCTYPE html>', '<!DOCTYPE html>', '<DOCTYPE html!>'], 2],
    ['फोटोशॉप फाइल के लिए फाइल एक्सटेंशन क्या है ?', ['.pds', '.psd', '.photo', '.phsd'], 1],
    ['नीचे दिए गए डिव टैग कंटेंट स्टेटमेंट पर विचार करें, "यूजरनेम" का मान कैसे प्रिंट करेंगे ?', ['{{UserName}}', 'UserName', '{UserName}', 'UserName}'], 0],
    ['निम्नलिखित में से किस फ़ाइल प्रकार में एनिमेटेड होने की क्षमता नहीं है ?', ['.GIF', '.PSD', '.PNG', 'उपरोक्त में से कोई नहीं'], 2],
    ['W3.CSS एक मानक CSS है जिसमेंः', ['jQuery लाइब्रेरी।', 'जावास्क्रिप्ट लाइब्रेरी।', '(A) और (B) दोनों सत्य हैं।', '(A) और (B) दोनों असत्य हैं।'], 3],
    ['एंगुलरजेएस एक्सप्रेशन के बारे में निम्नलिखित में से कौन सही है ?', ['अभिव्यक्ति उसी तरह व्यवहार करती है जैसे एनजी-बाइंड निर्देश', 'एक्सप्रेशन का उपयोग एप्लिकेशन डेटा को html से बांधने के लिए किया जाता है', 'एक्सप्रेशन दोहरे ब्रेसिज़ के अंदर लिखे जाते हैं जैसे {{expression}}', 'इनमें से सभी'], 3],
    ['निम्नलिखित में से किसका प्रयोग फोटोशॉप इमेज बनाने और उसमें हेर-फेर करने के लिए किया जाता है ?', ['पेनल्स', 'लेयर्स', 'टूल्स', 'इफेक्ट्स'], 1],
    ['वेब प्रकाशन की आवश्यकता के लिए निम्नलिखित में से कौन सा विकल्प सही है ?', ['इंटरनेट कनेक्शन', 'वेब डेवलपमेंट सॉफ्टवेयर', 'वेब सर्वर', 'उपरोक्त सभी'], 3],
    ['सीएसएस का उपयोग करके सफेद रंग निर्दिष्ट करने के लिए निम्नलिखित में से कौन से तरीके मान्य हैं? I. #FFFFFF II. rgb(255, 255, 255) III. rgb(FF, FF, FF)', ['केवल I', 'केवल III', 'I और III दोनों', 'I और II दोनों'], 3],
    ['कोई किसी तत्व का फॉन्ट कैसे बदल सकता है ?', ['f:', 'Font:', 'Font-family:', 'Font:b'], 2],
    ['यदि एक पैराग्राफ के लिए params एक DOM ऑब्जेक्ट है, तो पैराग्राफ में टेक्स्ट को बदलने के लिए निम्नलिखित में से कौन सा सही सिंटैक्स है ?', ['params.content="Updated Text"', 'params.value = "Updated Text";', 'params.nodeValue = "Updated Text";', 'params.firstChlid.nodeValue = "Updated Text";'], 1],
    ['निम्नलिखित जावास्क्रिप्ट कोड का आउटपुट क्या है ? <script> var a; document.getElementById("demo").innerHTML = a + 1; </script>', ['NaN', 'undefined', '1', '0'], 0],
    ['एचटीएमएल पेज को कैसे पढ़ें और रेंडर करें ?', ['वेब ब्राउज़र के माध्यम से', 'वेब नेटवर्क के माध्यम से', 'वेब सर्वर के माध्यम से', 'वेब मैट्रिक्स के माध्यम से'], 0],
    ['स्थिति कोड के संदर्भ में निम्नलिखित में से कौन सा विकल्प गलत है ?', ['200 OK', '400 बैड रिक्वेस्ट', '304 नॉट फाउंड', '301 मूव्ड परमानेंटली'], 2],
    ['सीएसएस स्टाइल या कोड का उपयोग करके, सभी हाइपरलिंक्स से अंडरलाइन को कैसे हटाया जा सकता है ?', ['a {text-decoration: no-underline;}', 'a {text: no-underline;}', 'a {text-decoration:none;}', 'a {text-style: no-underline;}'], 2],
    ['निम्नलिखित में से कौन एक सही सीएसएस सिंटैक्स है ?', ['{body; color:orange;}', 'body{color:orange;}', 'body:color=orange;', '{body: color=orange;}'], 1],
    ['एचटीएमएल टैग ................... में संलग्न हैं।', ['? And !', '< And >', '{And}', '# And #'], 1],
    ['फोटोशॉप का कौन सा फीचर इमेज में हाल ही में हुए बदलाव को ट्रैक करता है ?', ['हिस्ट्री पैनल', 'क्रिएटिव सुइट', 'हेल्प', 'फाइल'], 0],
    ['निम्न में से कौन एक ब्राउज़र नहीं है ?', ['माइक्रोसॉफ्ट एज', 'गूगल क्रोम', 'मोज़िला फायरफॉक्स', 'गूगल मीट'], 3],
    ['एचटीएमएल 5 में निम्न में से कौन सा वीडियो फॉर्मेट है ?', ['MP5', 'wbr', 'WebM', 'None'], 2],
    ['कौन सा चयनकर्ता एक निश्चित अवस्था के आधार पर तत्वों का चयन करता है ?', ['छद्म वर्ग चयनकर्ता', 'संयोजक चयनकर्ता', 'छद्म तत्व चयनकर्ता', 'विशेषता चयनकर्ता'], 0],
    ['सीएसएस में छद्म वर्ग के लिए निम्नलिखित में से कौन सा सही है ?', ['एक निर्दिष्ट तत्व का मिलान करें', 'किसी तत्व की विशेष स्थिति को परिभाषित करने के लिए उपयोग किया जाता है', 'सभी देखे गए लिंक का चयन करने के लिए उपयोग किया जाता है', 'सक्रिय लिंक का चयन करें'], 1],
    ['एंकर एलिमेंट के निम्नलिखित में से कौन सी प्रॉपर्टी यह दर्शाती है कि उपयोगकर्ता वर्तमान में किसी एलीमेंट पर क्लिक कर रहा है?', [':link', ':active', ':hover', ':visited'], 1],
    ['सीएसएस में "color:black" को ................... के रूप में जाना जाता है :', ['वैल्यू', 'सिलेक्टर', 'डिक्लेरेशन', 'नियम'], 2],
    ['................... कंप्यूटर हैं जो एक नेटवर्क से जुड़ते हैं और अन्य कंप्यूटरों को संसाधन प्रदान करते हैं।', ['सर्वर्स', 'मेनफ्रेम', 'नेटवर्क', 'क्लाइंट्स'], 0],
    ['कौन सी सीएसएस प्रॉपर्टी निर्दिष्ट करती है कि कैसे एक वीडियो, या एक छवि को उसके सामग्री बॉक्स में फिट करने के लिए आकार दिया जाता है ?', ['ऑब्जेक्ट-फिट', 'ऑब्जेक्ट-स्थिति', 'पोजीशन', 'इनमें से कोई नहीं'], 0],
    ['इंटरनेट की उत्पत्ति ................... की अवधारणा से हुई है।', ['माइक्रोसॉफ्ट', 'आइबीएम', 'वेब', 'अरपानेट'], 3],
    ['एंगुलरजेएस में एक मॉड्यूल क्या है ?', ['एप्लीकेशन', 'एक्सप्रेशन', 'एलिमेंट', 'उपरोक्त में से कोई नहीं'], 1],
    ['सीएसएस में, सेलेक्टर्स ................... का उपयोग उन तत्वों का चयन करने के लिए किया जाता है जिन्हें आप स्टाइल करना चाहते हैं।', ['प्रॉपर्टीज', 'पैटर्न्स', 'क्लासेस', 'फंक्शन्स'], 2],
    ['जावास्क्रिप्ट में "स्काई इज ब्लू" लिखने का सही सिंटैक्स है :', ['jscript.write("Sky is blue")', 'jscript.print("Sky is blue")', 'print("Sky is blue")', 'document.write("Sky is blue")'], 3],
    ['निम्न में से किस विकल्प का उपयोग किसी छवि के कुछ हिस्सों को हटाने के लिए किया जा सकता है ?', ['प्रिंट', 'क्रॉप', 'रोटेट', 'रिसाइज'], 1],
    ['मास्क लेयर के साथ काम करते समय, एक मिटाने वाले प्रभाव के लिए, चित्र में "हटाने" और "जोड़ने" के लिए किस उपकरण का उपयोग किया जाता है ?', ['सिलेक्शन टूल', 'पेंट ब्रश', 'पेंट बकेट', 'लासो टूल'], 0],
    ['एचटीएमएल मेटाडेटा निम्न में से किस टैग में मौजूद है ?', ['<p>', '<body>', '<title>', '<Head>'], 3],
    ['कौन सी सीएसएस प्रॉपर्टी छवि की स्पष्टता को निर्दिष्ट करती है ?', ['ओवरले', 'क्लेअरफिक्स', 'ओपसिटी', 'क्लैरिटी'], 2],
    ['बाहरी स्टाइल शीट को संदर्भित करने के लिए उचित एचटीएमएल सिंटैक्स क्या है ?', ['<link rel="stylesheet" type="text/css" href="demostyle.css">', '<stylesheet>demostyle.css</stylesheet/>', '<style src="demostyle.css">', 'इनमें से कोई नहीं'], 0],
    ['HTTP का पूर्ण रूप है :', ['हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल', 'हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल', 'हाइपर टेक्स्ट ट्रांसमिशन प्रोटोकॉल', 'हाइपर ट्रांसमिशन टेक्स्ट प्रोटोकॉल'], 1],
    ['मार्की टैग ................... के लिए प्रयोग किया जाता है।', ['टेक्स्ट छिपाने के लिए', 'वस्तुओं की सूची को चिह्नित करने', 'टेक्स्ट या इमेज के अंश को स्क्रॉल करने', 'उपरोक्त में से कोई नहीं'], 2],
    ['निम्नलिखित में से कौन सा/से कथन सही है/हैं ?', ['एक आईपी पते में चार बाइट्स (या 32 बिट्स) होते हैं, जिनमें से प्रत्येक 0 से 255 तक की संख्या हो सकती है।', 'ईमेल ब्राउज़ करने या भेजने के लिए, कंप्यूटर को निर्दिष्ट एक आईपी पता आवश्यक है', 'प्रत्येक कंप्यूटर के लिए आईपी पता हमेशा अनन्य होता है।', 'सभी सही हैं।'], 3],
    ['आप सभी पैराग्राफ एलेमेंट्स को \'ग्रे\' रंग में कैसे बनाएंगे ?', ['p.all {color: grey;}', 'p.all {color: #990000;}', 'all.p {color: #998877;}', 'p {color: grey;}'], 3],
    ['निम्नलिखित में से कौन सा कोड सबसे कार्यक्षम है ?', ['कोड 1', 'कोड 2', 'कोड 1 और कोड 2 दोनों', 'तुलना नहीं कर सकता'], 0],
    ['निम्नलिखित में से HTML में कौन सा टैग सबसे बड़ी हेडिंग डालने के लिए प्रयोग किया जाता है ?', ['<h3>', '<h6>', '<h1>', '<h2>'], 2],
    ['सीएसएस का स्थिति गुण डिफ़ॉल्ट मान ................... है।', ['रिलिटिव', 'स्टेटिक', 'फिक्स्ड', 'अब्सोल्युट'], 1],
    ['निम्नलिखित मामले में क्या होगा? h1 {color: red text-decoration: underline; font-style: italic;}', ['color: red, text-decoration: underline and font-style: italic all works', 'text-decoration: underline and font-style: italic works', 'color: red, text-decoration: underline works', 'only font-style: italic works'], 0],
    ['एक सीएसएस फ़ाइल में एकाधिक लाइन टिप्पणियां कैसे सम्मिलित करें ?', ['// statement', '\'statement', '/* statement */', '// statement //'], 2],
    ['निम्नलिखित में से कौन एक टेक्स्ट एडिटर नहीं है ?', ['सबलाइम', 'पेंट', 'नोटपैड++', 'विजुअल स्टूडियो कोड'], 1],
    ['नीचे दिए गए कोड में किस प्रकार के सीएसएस का प्रयोग किया गया है ? <p style="border:2px solid red;">', ['एक्सटर्नल सीएसएस', 'इंटरनल सीएसएस', 'इनलाइन सीएसएस', 'इनमें से कोई नहीं'], 2],
    ['निम्नलिखित में से कौन सी मार्कअप भाषा SGML पर आधारित है ?', ['VHML', 'SML', 'CFML', 'XML'], 3],
    ['निम्नलिखित जावास्क्रिप्ट कोड का आउटपुट क्या होगा ? <script> var $js=10; $js*=5; document.getElementById("demo").innerHTML = js; </script>', ['10', '15', '5', '50'], 3],
    ['बॉडी बैकग्राउंड रंग के लिए किस विशेषता का उपयोग किया जाता है ?', ['बैकग्राउंड', 'बीजीकलर', 'बैक कलर', 'उपरोक्त में से कोई नहीं'], 1],
    ['किसी छवि के चारों ओर गुलाबी डॉटेड बॉर्डर बनाने के लिए किस सीएसएस विशेषता (विशेषताओं) का उपयोग करना चाहिए ? I. बॉर्डर-लाइन II. बॉर्डर-स्टाइल III. बॉर्डर-कलर', ['I', 'II', 'III', 'II और III दोनों'], 3],
    ['निम्नलिखित में से कौन एक <style> टैग है/हैं?', ['<b>', '<tt>', '<i>', 'उपरोक्त सभी स्टाइल टैग हैं'], 3],
    ['सुपरस्क्रिप्ट टेक्स्ट के लिए उपयोग किया जाने वाला एचटीएमएल टैग ................... है।', ['<sup>', '<superscript>', '<s>', '<superscripted>'], 0],
    ['निम्न में से कौन सा सही है ?', ['डेटा सेल बनाने के लिए <TR> का उपयोग किया जाता है', 'तालिकाओं में, हेडर सेल डिफ़ॉल्ट रूप से केंद्रित होता है और डेटा सेल दाई ओर-संरेखित होते हैं', 'बीआर टैग का उपयोग ब्लैंक लाइन के लिए किया जाता है', 'इनपुट टैग में कम से कम 4 एट्रीब्यूट होनी चाहिए'], 2],
    ['यदि हम निम्नलिखित दो वेरिएबल्स को जोड़ते हैं तो किस प्रकार का मान मुद्रित होता है ? var $a="10"; var $b=50;', ['टेक्स्ट', 'लॉन्ग', 'इन्टिजर', 'संख्या'], 0],
    ['किसी एलिमंट के स्टाइल को परिभाषित करने के लिए किस सीएसएस सेलेक्टर का उपयोग किया जाएगा ?', ['क्लास', 'आईडी', 'टेक्स्ट', 'नाम'], 1],
    ['एंगुलर मॉड्यूल के लिए सही सिंटेक्स कौन सा है ?', ['var variable_name=angular.modules("app_name");', 'var variable_name = angular.module("app_name", []);', 'var variable_name = angular.module();', 'var variable_name = new module();'], 1],
    ['निम्नलिखित में से कौन वेबकिट के लिए CSS एक्सटेंशन प्रीफिक्स है ?', ['-web', '-0-', '-webkit', '-chrome'], 2],
    ['इमेज पर अपना नाम लिखने के लिए किस टूल का उपयोग किया जाता है ?', ['टेक्स्ट टूल', 'ड्रा टूल', 'ट्रांसफॉर्म टूल', 'स्केच टूल'], 0],
    ['एचटीएमएल में ऑर्डर की गई सूची बनाने के लिए निम्न में से किसका उपयोग किया जाता है ?', ['<ul>', '<pl>', '<ol>', '<hl>'], 2],
    ['W3.CSS निम्न में से कौन सी बोर्डर क्लास प्रोवाइड नहीं करता है।', ['w3-border-top', 'w3-border-gutter', 'w3-border-bottom', 'w3-border-right'], 1],
    ['कौन सा कथन जावास्क्रिप्ट में var और let कीवर्ड के बीच सही अंतर निर्दिष्ट करता है ?', ['var फ़ंक्शन स्कोप्ड वेरिएबल को परिभाषित करता है जबकि let ब्लॉक स्कोप्ड वेरिएबल को परिभाषित करते हैं।', 'उनके बीच कोई बड़ा अंतर नहीं है।', 'var के साथ घोषित वेरिएबल का मान बदला जा सकता है जबकि let के साथ घोषित वेरिएबल का मान बदला नहीं जा सकता है।', 'var एक वेरिएबल को परिभाषित करता है जबकि let एक स्थिरांक को परिभाषित करता है।'], 0],
    ['वेब पर छवियों का मानक रिज़ॉल्यूशन क्या है ?', ['172 PPI', '300 PPI', '256 PPI', '72 PPI'], 3],
    ['Ctrl + + P सबलाइम टेक्स्ट एडिटर में ................... को खोलने का शॉर्टकट कुंजी है।', ['वेब ब्राउज़र', 'कमांड प्रांप्ट', 'फाइल को नाम से शीघ्र-खोलना', 'टॉगल साइडबार'], 2],
    ['निम्नलिखित में से कौन एक नेटवर्क पर मौजूद प्रत्येक कंप्यूटर द्वारा अनुसरण किए जाने वाले नियमों के सेट को परिभाषित करता है ?', ['वेब', 'एचटीटीपी', 'डोमेन', 'प्रोटोकॉल'], 3],
    ['निम्न में से कौन सा निर्देश किसी को फॉर्म का उपयोग करने की अनुमति देता है ?', ['ng-form', 'ng-app', 'ng-controller', 'ng-bind'], 0],
    ['निम्नलिखित में से कौन सा एक्सप्रेशन सही है ?', ['{ expression }', '{{ expression }}', '_expression', '({ expression })'], 1],
    ['HTML ka full form kya hota hai?', ['High Text Markup Language', 'Hyper Text Markup Language', 'Hyper Tabular Markup Language', 'None of these'], 1],
    ['HTML ke latest standard version kaun sa hai?', ['HTML4', 'XHTML', 'HTML6', 'HTML5'], 3],
    ['HTML document me sabse bada heading tag kaun sa hai?', ['<h1>', '<h6>', '<head>', '<heading>'], 0],
    ['Page break ya line change karne ke liye kaun sa tag use hota hai?', ['<break>', '<lb>', '<br>', '<newline>'], 2],
    ['Hyperlink create karne ke liye kis tag ka upyog kiya jata hai?', ['<link>', '<a>', '<href>', '<url>'], 1],
    ['Image insert karne ke liye kis tag ka use hota hai?', ['<image>', '<pic>', '<img>', '<src>'], 2],
    ['Image ka path dene ke liye kis attribute ka use hota hai?', ['path', 'href', 'url', 'src'], 3],
    ['Unordered list (bullets) banane ke liye kis tag ka use hota hai?', ['<ul>', '<ol>', '<list>', '<dl>'], 0],
    ['Ordered list (numbers) banane ke liye kis tag ka use hota hai?', ['<nl>', '<ul>', '<ol>', '<li>'], 2],
    ['List me items add karne ke liye kis tag ka use karte hain?', ['<item>', '<ol-item>', '<list-item>', '<li>'], 3],
    ['HTML document ki shuruaat kis declaration se hoti hai?', ['<html>', '<!DOCTYPE html>', '<doctype>', '<head>'], 1],
    ['Web page ka metadata (title, meta tags) kahan hota hai?', ['<head>', '<footer>', '<body>', '<section>'], 0],
    ['User ko dikhne wala sabhi content kis tag me hota hai?', ['<head>', '<meta>', '<title>', '<body>'], 3],
    ['Text ko bold karne ke liye kis tag ka use hota hai?', ['<b>/<strong>', '<dark>', '<bold>', '<black>'], 0],
    ['Text ko italic karne ke liye kaun sa tag use hota hai?', ['<italic>', '<slant>', '<i> / <em>', '<style>'], 2],
    ['Text ke niche line (underline) khichne ke liye kis tag ka use hota hai?', ['<ul>', '<U>', '<line>', '<under>'], 1],
    ['Horizontal ruler (horizontal line) add karne ka tag kaun sa hai?', ['<line>', '<hr>', '<hl>', '<border>'], 1],
    ['Table banane ke liye main tag kaun sa hai?', ['<tb>', '<tab>', '<table>', '<grid>'], 2],
    ['Table me row banane ke liye kis tag ka upyog hota hai?', ['<td>', '<th>', '<row>', '<tr>'], 3],
    ['Table me data cell banane ke liye kis tag ka use karte hain?', ['<td>', '<tr>', '<th>', '<cell>'], 0],
    ['Table header cell banane ke liye kis tag ka use hota hai?', ['<head>', '<td>', '<th>', '<thead-cell>'], 2],
    ['Form create karne ke liye kis tag ka upyog hota hai?', ['<form>', '<input-form>', '<fields>', '<text-form>'], 0],
    ['Textbox, Radio button, Checkbox banane ke liye main tag kaun sa hai?', ['<field>', '<input>', '<entry>', '<box>'], 1],
    ['Drop-down menu / Select list banane ka tag kya hai?', ['<list>', '<dropdown>', '<menu>', '<select>'], 3],
    ['Drop-down list me options add karne ke liye tag?', ['<option>', '<item>', '<choices>', '<val>'], 0],
    ['Multiline text input lene ke liye kis tag ka use hota hai?', ['<input type="text">', '<multiline>', '<textbox>', '<textarea>'], 3],
    ['Multiple items select karne ke liye input type kya hoga?', ['radio', 'checkbox', 'select', 'button'], 1],
    ['Kisi ek option ko select karne (Gender) ke liye input type?', ['text', 'checkbox', 'radio', 'one-option'], 2],
    ['Form submit karne ke liye input type kya hoti hai?', ['button', 'send', 'submit', 'post'], 2],
    ['HTML document me Comments likhne ka sahi syntax kya hai?', ['<!-- Comment -->', '// Comment', '/* Comment */', '# Comment'], 0],
    ['HTML file ka extension kya hota hai?', ['.ht', '.html ya .htm', '.web', '.doc'], 1],
    ['Inline CSS add karne ke liye kis attribute ka use hota hai?', ['css', 'class', 'design', 'style'], 3],
    ['HTML me External CSS link karne ke liye tag kaun sa hai?', ['<script>', '<css>', '<link>', '<style>'], 2],
    ['HTML me JavaScript code include karne ka tag?', ['<code>', '<js>', '<javascript>', '<script>'], 3],
    ['HTML5 me Video play karne ke liye tag?', ['<video>', '<media>', '<movie>', '<mp4>'], 0],
    ['HTML5 me Audio play karne ke liye tag?', ['<sound>', '<audio>', '<mp3>', '<music>'], 1],
    ['Image na milne par text dikhane ke liye attribute?', ['title', 'alt', 'src', 'text'], 1],
    ['Hyperlink ko new tab me kholne ke liye target attribute value?', ['_self', '_new', '_blank', '_parent'], 2],
    ['Block-level element kaun sa hai?', ['<span>', '<b>', '<p>', '<div>'], 3],
    ['Inline element kaun sa hai?', ['<span>', '<p>', '<div>', '<h1>'], 0],
    ['HTML me Void Elements (Empty Tags) kya hote hain?', ['Jinka closing tag nahi hota', 'Jo hide rehte hain', 'Jo CSS support nahi karte', 'Jinme text hota hai'], 0],
    ['Inme se kaun sa Self-Closing / Void Tag hai?', ['<p>', '<br>', '<div>', '<span>'], 1],
    ['Table cells ko horizontally merge karne ke liye attribute?', ['rowspan', 'merge', 'colspan', 'cellspan'], 2],
    ['Table cells ko vertically merge karne ke liye attribute?', ['v-merge', 'colspan', 'grid-span', 'rowspan'], 3],
    ['Text Subscript (H2O me 2) ke liye tag?', ['<sup>', '<sub>', '<down>', '<under>'], 1],
    ['Text Superscript (X^2 me 2) ke liye tag?', ['<sup>', '<sub>', '<top>', '<up>'], 0],
    ['Web page me Title icon (Favicon) set karne ka tag kahan lagta hai?', ['<body>', '<footer>', '<head>', '<title>'], 2],
    ['HTML5 Semantic tag kaun sa hai?', ['<div>', '<span>', '<font>', '<article>'], 3],
    ['Page ke sabse upar ka section define karne ka Semantic tag?', ['<banner>', '<head>', '<top>', '<header>'], 3],
    ['Page ke sabse niche ka section define karne ka Semantic tag?', ['<bottom>', '<footer>', '<end>', '<base>'], 1],
    ['Navigation links group karne ka semantic tag?', ['<menu>', '<links>', '<nav>', '<navigate>'], 2],
    ['Sidebar content ke liye HTML5 Semantic tag?', ['<aside>', '<side>', '<sidebar>', '<panel>'], 0],
    ['Form me User Password hide karne ka attribute value?', ['type="secret"', 'type="hidden"', 'type="password"', 'type="private"'], 2],
    ['HTML form me Email validate karne ka default type?', ['type="text"', 'type="mail"', 'type="validate"', 'type="email"'], 3],
    ['Form field ko compulsory (zaroori) banane ka attribute?', ['important', 'required', 'must', 'validate'], 1],
    ['Input box me faint text (hint) dikhane ka attribute?', ['placeholder', 'value', 'hint', 'text'], 0],
    ['HTML Table ka title/caption dene ka tag?', ['<title>', '<head>', '<caption>', '<summary>'], 2],
    ['Pre-formatted text (as-it-is space aur line) ka tag?', ['<code>', '<pre>', '<text>', '<format>'], 1],
    ['Single Line break bina paragraph change kiye tag?', ['<br>', '<hr>', '<p>', '<space>'], 0],
    ['HTML Document me Character Encoding define karne ka meta tag?', ['<meta encode="UTF-8">', '<meta type="UTF-8">', '<charset>UTF-8</charset>', '<meta charset="UTF-8">'], 3],
    ['Non-breaking Space (&nbsp;) ka use kyu hota hai?', ['Line break rokne ke liye', 'Tab key ke liye', 'Extra Space dene ke liye', 'New line ke liye'], 0],
    ['HTML me Special Symbols (like < or >) ke liye kya use hota hai?', ['CSS Tags', 'Meta Tags', 'HTML Entities', 'Formatting Attributes'], 2],
    ['Copyright symbol (&copy;) ki HTML entity kya hai?', ['&copyright;', '&copy;', '&copy;', '&c;'], 1],
    ['HTML5 me 2D graphics draw karne ka container tag?', ['<svg>', '<graphics>', '<draw>', '<canvas>'], 3],
    ['Scalable Vector Graphics ke liye tag kaun sa hai?', ['<svg>', '<vector>', '<canvas>', '<image>'], 0],
    ['External Web Page ko apne page me embed karne ka tag?', ['<frame>', '<embed-page>', '<iframe>', '<window>'], 2],
    ['Form me Date Select karne ka input type?', ['type="calendar"', 'type="date"', 'type="day"', 'type="time"'], 1],
    ['Form me Color Picker kholne ka input type?', ['type="picker"', 'type="rgb"', 'type="palette"', 'type="color"'], 3],
    ['Form me Slider control dikhane ka input type?', ['type="slider"', 'type="meter"', 'type="scroll"', 'type="range"'], 3],
    ['File upload karne ka input type kya hai?', ['type="upload"', 'type="file"', 'type="attachment"', 'type="doc"'], 1],
    ['Form Elements ko group (border box) me rakhne ka tag?', ['<fieldset>', '<box>', '<group>', '<form-group>'], 0],
    ['Fieldset ki heading/title dene ka tag?', ['<title>', '<caption>', '<legend>', '<head>'], 2],
    ['Input Field me predefined options (autocomplete list) dene ka tag?', ['<datalist>', '<optionlist>', '<select>', '<list>'], 0],
    ['Progress bar dikhane ka HTML5 tag?', ['<bar>', '<loading>', '<progress>', '<status>'], 2],
    ['Disk Space ya Gauge Measurement dikhane ka tag?', ['<gauge>', '<meter>', '<progress>', '<level>'], 1],
    ['Expandable / Collapsible Details dikhane ka tag?', ['<expand>', '<accordion>', '<toggle>', '<details>'], 3],
    ['<details> tag ki heading banne wala tag?', ['<title>', '<head>', '<highlight>', '<summary>'], 3],
    ['Text ko highlight (yellow background) karne ka tag?', ['<mark>', '<yellow>', '<label>', '<bg>'], 0],
    ['Deleted / Strikethrough text dikhane ka tag?', ['<strike>', '<del>', '<remove>', '<cut>'], 1],
    ['Inserted/Newly added text dikhane ka tag?', ['<add>', '<new>', '<ins>', '<underline>'], 2],
    ['Short Quotation ke liye kaun sa tag use hota hai?', ['<quote>', '<q>', '<blockquote>', '<cite>'], 1],
    ['Long/Block Quotation ke liye tag?', ['<q>', '<quote-block>', '<blockquote>', '<indent>'], 2],
    ['Abbreviation (Acronym/Short Form) ke liye tag?', ['<summary>', '<acronym>', '<short>', '<abbr>'], 3],
    ['Contact information / Address dikhane ka tag?', ['<address>', '<contact>', '<mail>', '<info>'], 0],
    ['Work / Book Title refer karne ka tag?', ['<ref>', '<title>', '<cite>', '<book>'], 2],
    ['Text Direction badalne ka tag (Bi-Directional Override)?', ['<dir>', '<reverse>', '<flip>', '<bdo>'], 3],
    ['Form me Method attribute ki default value kya hoti hai?', ['GET', 'PUT', 'POST', 'REQUEST'], 0],
    ['Secure Data Send karne ke liye Form Method kaun si honi chahiye?', ['GET', 'POST', 'PUT', 'REQUEST'], 1],
    ['Form Action attribute me kya diya jata hai?', ['Form Title', 'Server Script URL jahan data jayega', 'Button Name', 'CSS file path'], 1],
    ['Image Map banane ka tag kaun sa hai?', ['<imgmap>', '<area-map>', '<hotspot>', '<map>'], 3],
    ['Image map me clickable area define karne ka tag?', ['<zone>', '<click>', '<area>', '<point>'], 2],
    ['Inme se kaun si Global Attribute hai jo sabhi tags par lag sakti hai?', ['id/class', 'href', 'src', 'alt'], 0],
    ['Page me CSS / JS external files ki base location set karne ka tag?', ['<base>', '<root>', '<url>', '<path>'], 0],
    ['HTML Markup Validation kaun karta hai?', ['Google', 'W3C (World Wide Web Consortium)', 'Microsoft', 'ISO'], 1],
    ['Radio / Checkbox ka label click karne par select karne ka tag?', ['<text>', '<name>', '<span>', '<label>'], 3],
    ['Computer Code text ko display karne ka tag?', ['<prog>', '<script>', '<code>', '<system>'], 2],
    ['Keyboard key press (e.g. Ctrl + C) dikhane ka tag?', ['<key>', '<press>', '<kbd>', '<input>'], 2],
    ['Form ko reset (clear all fields) karne ka button type?', ['type="reset"', 'type="clean"', 'type="clear"', 'type="cancel"'], 0],
    ['HTML5 me Naya Semantic Element kaun sa nahi hai?', ['<header>', '<font>', '<section>', '<footer>'], 1],
    ['Web Designing me HTML ka main role kya hai?', ['Styling dena', 'Database manage karna', 'Programming logic chalana', 'Web Page ka Structure (Dhanacha) banana'], 3],
    ['HTML5 ka standard DOCTYPE declaration kya hai?', ['<!DOCTYPE html PUBLIC>', '<!DOCTYPE HTML5>', '<!DOCTYPE html>', '<!DOCTYPE html5>'], 2],
    ['HTML5 me video clip embed karne ke liye kaun sa tag use hota hai?', ['<media>', '<movie>', '<embed-video>', '<video>'], 3],
    ['HTML5 me audio stream add karne ke liye tag kaun sa hai?', ['<audio>', '<sound>', '<music>', '<mp3>'], 0],
    ['HTML5 me JavaScript dwara 2D graphics draw karne ka canvas element?', ['<graphics>', '<canvas>', '<draw>', '<svg>'], 1],
    ['Vector-based graphics draw karne ke liye HTML5 me kya tag hai?', ['<svg>', '<vml>', '<canvas>', '<vector>'], 0],
    ['User ki geographical location track karne ke liye HTML5 API?', ['GPS API', 'Map API', 'Location API', 'Geolocation API'], 3],
    ['Browser me client-side data store karne ke liye HTML5 feature?', ['Cookies', 'LocalStorage & SessionStorage', 'WebSQL', 'Cache Storage'], 1],
    ['LocalStorage me data kab tak store rehta hai?', ['1 din tak', 'Browser close hone tak', 'Jab tak manually delete na kiya jaye', '1 ghante tak'], 2],
    ['SessionStorage ka data kab expire hota hai?', ['24 hours me', 'Never', 'Browser tab closed hone par', 'System restart par'], 2],
    ['Page ke header content ke liye HTML5 Semantic Tag?', ['<header>', '<head>', '<top>', '<masthead>'], 0],
    ['Page ke footer section ke liye HTML5 Semantic Tag?', ['<bottom>', '<footer>', '<end>', '<foot>'], 1],
    ['Main Navigation Links ke group ke liye Semantic Tag?', ['<menu>', '<links>', '<navigation>', '<nav>'], 3],
    ['Independent self-contained content (Blog Post/Article) ka tag?', ['<aside>', '<section>', '<article>', '<content>'], 2],
    ['Document me kisi ek Vishisht theme/topic ke section ke liye tag?', ['<div>', '<part>', '<group>', '<section>'], 3],
    ['Sidebar content ya Related links dikhane ka HTML5 tag?', ['<aside>', '<sidebar>', '<side>', '<panel>'], 0],
    ['Images, diagrams ya illustrations ko enclose karne ka HTML5 tag?', ['<picture>', '<figure>', '<img-box>', '<media-box>'], 1],
    ['<figure> tag ki caption/heading ke liye tag?', ['<figcaption>', '<caption>', '<title>', '<legend>'], 0],
    ['Text highlight (Yellow Background) karne ka naya HTML5 tag?', ['<yellow>', '<highlight>', '<mark>', '<bg>'], 2],
    ['Task progress (0% to 100%) dikhane ka HTML5 control tag?', ['<meter>', '<progress>', '<bar>', '<status>'], 1],
    ['Disk Space / Range Value (Gauge) dikhane ka HTML5 tag?', ['<range>', '<progress>', '<gauge>', '<meter>'], 3],
    ['Input Field me Dropdown Autocomplete suggestion list tag?', ['<select>', '<autocomplete>', '<list>', '<datalist>'], 3],
    ['Form me Color Picker Dialog box kholne ka input type?', ['type="palette"', 'type="color"', 'type="picker"', 'type="rgb"'], 1],
    ['Form me Date Picker control laane ka input type?', ['type="day"', 'type="calendar"', 'type="date"', 'type="dt"'], 2],
    ['Form me Slider Control (min-max range) ka input type?', ['type="range"', 'type="slider"', 'type="scroll"', 'type="meter"'], 0],
    ['Form me Mobile Number input aur validation type?', ['type="mobile"', 'type="phone"', 'type="tel"', 'type="number"'], 2],
    ['Web Address (URL) enter karne ka HTML5 input type?', ['type="link"', 'type="address"', 'type="web"', 'type="url"'], 3],
    ['Search Box dedicatedly banane ka HTML5 input type?', ['type="query"', 'type="search"', 'type="find"', 'type="text-search"'], 1],
    ['Date ke saath Time select karne ka input type?', ['type="datetime-local"', 'type="date-time"', 'type="time-date"', 'type="clock"'], 0],
    ['Only Time (Ghante/Minute) input lene ka type?', ['type="watch"', 'type="clock"', 'type="hour"', 'type="time"'], 3],
    ['Field ko submit hone se pehle compulsory check karne wala attribute?', ['required', 'validate', 'compulsory', 'mandatory'], 0],
    ['Page load hone par kisi Field me auto-cursor lane ka attribute?', ['auto-cursor', 'autofocus', 'focus', 'active'], 1],
    ['Input box me faint guidance/hint text dikhane ka attribute?', ['tooltip', 'hint', 'placeholder', 'value'], 2],
    ['Custom Regular Expression (Regex) pattern validation attribute?', ['regex', 'pattern', 'validate', 'rule'], 1],
    ['Multiple Files ek saath upload karne ka attribute?', ['file-list', 'multi', 'allow-many', 'multiple'], 3],
    ['HTML5 me Audio/Video autoplay karne ka attribute?', ['autoplay', 'auto', 'play', 'start'], 0],
    ['Audio/Video ko repeat mode me chalane ka attribute?', ['replay', 'repeat', 'loop', 'cycle'], 2],
    ['Media elements par Play/Pause/Volume controls dikhane ka attribute?', ['buttons', 'panel', 'controls', 'media-bar'], 2],
    ['Expandable / Collapsible widget ka HTML5 tag?', ['<details>', '<summary>', '<accordion>', '<toggle>'], 0],
    ['<details> tag ka visible heading section kaun sa hai?', ['<title>', '<summary>', '<label>', '<header>'], 1],
    ['Pop-up Dialog window / Modal box banane ka HTML5 tag?', ['<popup>', '<window>', '<modal>', '<dialog>'], 3],
    ['Calculation/Script Output result dikhane ka HTML5 tag?', ['<output>', '<result>', '<calc>', '<display>'], 0],
    ['HTML5 Drag and Drop API activate karne ka attribute?', ['drag="true"', 'dropzone', 'allow-drag', 'draggable="true"'], 3],
    ['Element ko user dwara directly edit karne dene ka attribute?', ['editable="true"', 'contenteditable="true"', 'user-edit', 'modify'], 1],
    ['Custom data storage attributes banane ka syntax?', ['attr-', 'custom-*', 'data-* (e.g. data-id)', 'store-*'], 2],
    ['Background JavaScript tasks chalane ke liye HTML5 API?', ['Web Workers', 'Web Threads', 'Background Sync', 'Service Async'], 0],
    ['Real-time bi-directional socket communication API HTML5 me?', ['Socket.IO', 'WebSockets API', 'HTTP/2', 'REST API'], 1],
    ['Server se continuous automatic updates pane ke liye API?', ['WebSockets', 'Fetch API', 'AJAX', 'Server-Sent Events (SSE)'], 3],
    ['HTML5 me kis purane formatting tag ko DEPRECATED kiya gaya hai?', ['<strong>', '<p>', '<font> / <center>', '<em>'], 2],
    ['Media elements me Multiple video sources/formats dene ka tag?', ['<media>', '<source>', '<track>', '<file>'], 1],
    ['Video me Subtitles / Captions track file include karne ka tag?', ['<subtitle>', '<vtt>', '<caption>', '<track>'], 3],
    ['What does CSS stand for?', ['Creative Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'], 2],
    ['Which HTML tag is used to define internal CSS?', ['<style>', '<CSS>', '<script>', '<link>'], 0],
    ['Which HTML attribute is used to define inline styles?', ['class', 'styles', 'font', 'style'], 3],
    ['Which is the correct CSS syntax?', ['{body:color=black;}', '{body;color:black;}', 'body {color: black;}', 'body:color=black;'], 2],
    ['How do you insert a comment in a CSS file?', ['\'this is comment', '/* this is comment */', '// this is comment', '<!-- comment -->'], 1],
    ['Which property is used to change background color?', ['background-color', 'color', 'bgcolor', 'bg-color'], 0],
    ['How do you apply a style to element with id="header"?', ['.header', '*header', '#header', 'header'], 2],
    ['How do you select elements with class name "test"?', ['.test', '*test', '#test', 'test'], 0],
    ['Which CSS property controls text size?', ['font-style', 'text-style', 'text-size', 'font-size'], 3],
    ['What is the default value of the position property?', ['relative', 'static', 'fixed', 'absolute'], 1],
    ['How to display hyperlinks without an underline?', ['a {text-decoration:none;}', 'a {underline:none;}', 'a {decoration:no-underline;}', 'a {text-style:none;}'], 0],
    ['Which property makes text bold?', ['font:bold;', 'font-weight: bold;', 'style:bold;', 'text-bold:true;'], 1],
    ['How do you make each word start with a capital letter?', ['text-style:capitalize', 'transform:capitalize', 'font-transform:capitalize', 'text-transform:capitalize'], 3],
    ['Which property changes font of an element?', ['font-style', 'font-name', 'font-family', 'font-type'], 2],
    ['Which property sets left padding of an element?', ['indent-left', 'padding-left', 'margin-left', 'padding-left-style'], 1],
    ['To change text color of an element, use:', ['color', 'fgcolor', 'text-color', 'font-color'], 0],
    ['Which property is used to change border color?', ['border-style', 'outline-color', 'border-bg', 'border-color'], 3],
    ['Which selector targets ALL elements on a page?', ['#', '.', 'all', '*'], 3],
    ['How to specify margin top: 10px, bottom: 20px, left/right: 5px?', ['margin: 10px 20px 5px;', 'margin: 5px 10px 20px;', 'margin: 10px 5px 20px;', 'margin: 10px 20px 5px 5px;'], 2],
    ['Does padding accept negative values?', ['Yes', 'No', 'Only in flexbox', 'Only in grid'], 1],
    ['Does margin accept negative values?', ['Yes', 'No', 'Only on top', 'Only on inline'], 0],
    ['How to link an external CSS file in HTML?', ['<style src="...">', '<stylesheet>...</stylesheet>', '<link rel="stylesheet" href="...">', '<css href="...">'], 2],
    ['Which CSS unit is relative to parent font size?', ['rem', 'px', 'em', 'pt'], 2],
    ['Which unit is relative to root font size?', ['em', 'rem', 'vh', 'px'], 1],
    ['What is 1vh equivalent to?', ['1% of body width', '10px height', '1% of container height', '1% of viewport height'], 3],
    ['Default value of box-sizing property is:', ['content-box', 'border-box', 'padding-box', 'inherit'], 0],
    ['How to make total width include padding & border?', ['box-sizing: content-box;', 'box-fit: cover;', 'box-sizing: border-box;', 'size: include-border;'], 2],
    ['Which property hides element but keeps space?', ['display: none;', 'opacity: 0;', 'overflow: hidden;', 'visibility: hidden;'], 3],
    ['Which property removes element completely from flow?', ['display: none;', 'clear: both;', 'visibility: hidden;', 'position: relative;'], 0],
    ['How to center a block element horizontally?', ['text-align: center;', 'margin: 0 auto;', 'align: center;', 'float: center;'], 1],
    ['What is default display value of <div>?', ['inline', 'inline-block', 'block', 'flex'], 2],
    ['What is default display value of <span>?', ['contents', 'inline-block', 'block', 'inline'], 3],
    ['Which property specifies stack order of elements?', ['z-index', 'order', 'stack-level', 'position-order'], 0],
    ['z-index only works on elements with position value:', ['static only', 'other than static', 'absolute only', 'fixed only'], 1],
    ['How to make a list without bullet points?', ['list-style: none;', 'list: no-bullet;', 'list-style-type: none;', 'text-decoration: none;'], 2],
    ['Which pseudo-class styles links on mouse hover?', ['active', ':hover', ':focus', ':visited'], 1],
    ['Order of pseudo-classes for links (LVHA):', ['hover, visited, link, active', 'link, hover, visited, active', 'active, hover, visited, link', 'link, visited, hover, active'], 3],
    ['How to round borders in CSS3?', ['border-radius', 'corner-radius', 'border-curve', 'box-radius'], 0],
    ['How to add shadow to text?', ['box-shadow', 'shadow-text', 'font-shadow', 'text-shadow'], 3],
    ['Correct syntax for box-shadow: horizontal vertical blur color?', ['box-shadow: 10px red 5px 2px;', 'box-shadow: red 5px 10px;', 'box-shadow: 5px 10px 4px #888;', 'box-shadow: blur 5px 10px;'], 2],
    ['What is flex-direction default value?', ['column', 'row', 'row-reverse', 'column-reverse'], 1],
    ['Which property aligns flex items along main axis?', ['justify-content', 'align-content', 'align-items', 'flex-pack'], 0],
    ['Which property aligns flex items along cross axis?', ['justify-content', 'text-align', 'align-items', 'float'], 2],
    ['How to allow flex items to wrap onto multiple lines?', ['flex-flow: nowrap;', 'flex-line: multi;', 'wrap: yes;', 'flex-wrap: wrap;'], 3],
    ['Shorthand for flex-direction and flex-wrap is:', ['flex-group', 'flex-flow', 'flex-grid', 'flex-inline'], 1],
    ['Which CSS Grid property defines column sizes?', ['grid-template-columns', 'grid-auto-columns', 'grid-columns', 'columns-template'], 0],
    ['What does fr unit stand for in Grid layout?', ['fractional unit', 'frame rate', 'fixed ratio', 'flex absolute'], 0],
    ['Property to set gap between rows and columns in Grid:', ['grid-space', 'gap', 'grid-margin', 'cell-padding'], 1],
    ['Which CSS rule is used for Media Queries?', ['@import', '@keyframes', '@font-face', '@media'], 3],
    ['Targeted width for mobile screen using media query:', ['@media (min-width: 1200px)', '@media (screen-device)', '@media (max-width: 768px)', '@media (orientation)'], 2],
    ['Which CSS rule customizes web fonts?', ['@font-face', '@font', '@include-font', '@web-font'], 0],
    ['Keyframes rule is used for creating:', ['Transforms', 'Transitions', 'Animations', 'Gradients'], 2],
    ['Which property smoothly changes property values over time?', ['transform', 'transition', 'translate', 'animation'], 1],
    ['Property used to rotate, scale, or skew elements:', ['convert', 'change', 'transition', 'transform'], 3],
    ['Value to rotate element 45 degrees clockwise:', ['turn(45deg)', 'rotate: 45;', 'transform: rotate(45deg);', 'transform: angle(45);'], 2],
    ['How to make background image fix on scroll?', ['background-repeat: fixed;', 'background-attachment: fixed;', 'background-position: fixed;', 'background-scroll: false;'], 1],
    ['Property to resize background image to cover entire div:', ['background-fit: cover;', 'background-clip: cover;', 'background-scale: 100%;', 'background-size: cover;'], 3],
    ['Correct value to prevent background image repetition:', ['background-repeat: no-repeat;', 'background-repeat: stop;', 'background-tile: none;', 'background-repeat: single;'], 0],
    ['What is the opacity value for completely transparent?', ['1', '0', '-1', '100%'], 1],
    ['In RGBA, what does \'A\' stand for?', ['Absolute', 'Attribute', 'Alpha', 'Array'], 2],
    ['Which pseudo-element styles first letter of element?', ['::first-line', '::initial', ':start-letter', '::first-letter'], 3],
    ['Pseudo-element used to insert content before element:', ['::before', ':prefix', '::after', ':front'], 0],
    ['What property is mandatory with ::before / ::after?', ['display', 'text', 'content', 'position'], 2],
    ['How to select direct child p elements inside div?', ['div p', 'div+p', 'div-p', 'div>p'], 3],
    ['Adjacent sibling combinator symbol in CSS:', ['>', '+', '~', '*'], 1],
    ['General sibling combinator symbol in CSS:', ['~', '+', '*', '>'], 0],
    ['Which CSS property controls image overflow in div?', ['fit-content', 'img-fit', 'image-style', 'object-fit'], 3],
    ['Property to clip element into specific shape (circle, polygon):', ['mask-shape', 'crop', 'clip-path', 'border-clip'], 2],
    ['How to define CSS variable name correctly?', ['$main-color', '--main-color', '@main-color', '#main-color'], 1],
    ['How to consume a CSS variable value?', ['var(--main-color)', 'use(--main-color)', 'get(--main-color)', 'val(--main-color)'], 0],
    ['Where are global CSS variables usually defined?', ['html', 'body', '*', ':root'], 3],
    ['Which selector has HIGHEST specificity?', ['Class (.btn)', 'ID (#btn)', 'Element (button)', 'Universal (*)'], 1],
    ['What overcomes all specificity rules in CSS?', ['!override', '!force', '!important', '!priority'], 2],
    ['Which property handles horizontal alignment of text?', ['text-align', 'text-position', 'vertical-align', 'align-content'], 0],
    ['Which value of text-align justifies paragraph lines?', ['justify', 'fill', 'center', 'spread'], 0],
    ['Property used to control space between letters:', ['word-spacing', 'line-height', 'text-indent', 'letter-spacing'], 3],
    ['Property used to control line height / line spacing:', ['line-spacing', 'text-height', 'line-height', 'row-gap'], 2],
    ['What is default value of float property?', ['left', 'right', 'none', 'inline'], 2],
    ['Which property cancels floating elements effect?', ['overflow', 'clear', 'reset', 'float-none'], 1],
    ['What filter property turns an image to black & white?', ['filter: sepia(100%);', 'filter: invert(100%);', 'filter: contrast(0%);', 'filter: grayscale(100%);'], 3],
    ['How to create blur effect on an element?', ['blur: 5px;', 'filter: blur(5px);', 'opacity-blur: 5px;', 'image-blur: 5px;'], 1],
    ['Backdrop-filter applies graphical effects to:', ['Area behind element', 'Border only', 'Foreground text', 'Parent element'], 0],
    ['Which CSS property controls mouse cursor appearance?', ['pointer', 'mouse-icon', 'cursor', 'hover-cursor'], 2],
    ['Value of cursor to show clicking finger hand icon:', ['hand', 'click', 'finger', 'pointer'], 3],
    ['How to disable pointer/click events on an element?', ['click: none;', 'cursor: disabled;', 'pointer-events: none;', 'events: false;'], 2],
    ['Which pseudo-class selects every 2nd child element?', [':nth-child(even) & :nth-child(2n)', ':nth-child(2n)', ':nth-child(even)', ':every(2)'], 0],
    ['Which pseudo-class targets checked checkboxes?', [':selected', ':checked', ':active', ':marked'], 1],
    ['Pseudo-class targeting an active input field being typed in:', [':active', ':hover', ':typing', ':focus'], 3],
    ['Property used to control list item marker position:', ['list-style-position', 'marker-align', 'list-position', 'bullet-place'], 0],
    ['Which attribute selector selects elements containing a word?', ['[attr^=val]', '[attr~=val]', '[attr*=val]', '[attr$=val]'], 1],
    ['Attribute selector matching attribute value starting with string:', ['[attr*=val]', '[attr^=val]', '[attr|=val]', '[attr~=val]'], 1],
    ['Attribute selector matching attribute value ending with string:', ['[attr^=val]', '[attr*=val]', '[attr~=val]', '[attr$=val]'], 3],
    ['Which property sets scroll behavior to smooth?', ['scroll-animation: smooth;', 'transition-scroll: smooth;', 'scroll-behavior: smooth;', 'smooth-scroll: true;'], 2],
    ['How to break words to prevent text overflow?', ['overflow-wrap: break-word;', 'text-break: all;', 'word-wrap: break-word;', 'line-break: force;'], 0],
    ['Which property truncates text with an ellipsis (...)?', ['text-overflow: clip;', 'overflow: ellipsis;', 'white-space: dot;', 'text-overflow: ellipsis;'], 3],
    ['What white-space value prevents text from wrapping?', ['white-space: nowrap;', 'white-space: normal;', 'white-space: pre;', 'white-space: no-break;'], 0],
    ['Default value of position attribute for flex items:', ['relative', 'static', 'flex', 'absolute'], 1],
    ['Which CSS property controls column layout in text body?', ['text-columns', 'multi-column', 'column-count', 'column-layout'], 2],
    ['What property sets background linear gradient?', ['background: gradient(...)', 'background: linear-gradient(...)', 'background-color: linear(...)', 'color-gradient: linear(...)'], 1],
    ['What is the default user-agent font size in most browsers?', ['12px', '16px', '14px', '18px'], 1],
    ['What is W3.CSS?', ['JavaScript library', 'Database tool', 'PHP framework', 'CSS framework'], 3],
    ['Does W3.CSS require jQuery or JavaScript to run?', ['No JS required', 'Requires jQuery', 'Requires React', 'Requires Angular'], 0],
    ['Which class adds a padded container with margins?', ['.w3-box', '.w3-wrapper', '.w3-container', '.w3-content'], 2],
    ['How do you set background color to red in W3.CSS?', ['.w3-color-red', '.w3-text-red', '.w3-bg-red', '.w3-red'], 3],
    ['Which class sets text color to blue in W3.CSS?', ['.w3-text-blue', '.w3-blue-text', '.w3-font-blue', '.w3-blue'], 0],
    ['Which class adds a 2px shadow card effect?', ['.w3-box', '.w3-shadow', '.w3-card', '.w3-card-shadow'], 2],
    ['Which class creates a deeper 4px shadow card?', ['.w3-card-3', '.w3-card-4', '.w3-card-large', '.w3-card-shadow'], 1],
    ['Which class creates a responsive grid row container?', ['.w3-row', '.w3-grid', '.w3-line', '.w3-flex'], 0],
    ['How many columns does W3.CSS grid system have?', ['10 columns', '8 columns', '16 columns', '12 columns'], 3],
    ['Which class defines a column for small screens (mobile)?', ['.w3-col-small', '.w3-mobile', '.w3-col.s1 to .s12', '.w3-small-grid'], 2],
    ['Which class defines a column for medium screens (tablets)?', ['.w3-medium', '.w3-col.m1 to .m12', '.w3-tab', '.w3-col-m'], 1],
    ['Which class defines a column for large screens (desktops)?', ['.w3-col.l1 to l12', '.w3-desk', '.w3-large-col', '.w3-wide'], 0],
    ['Which class creates a rectangular panel with top/bottom padding?', ['.w3-block', '.w3-card', '.w3-panel', '.w3-section'], 2],
    ['Which class styles a standard table in W3.CSS?', ['.w3-table-view', '.w3-tbl', '.w3-grid-table', '.w3-table'], 3],
    ['Which class adds striped rows to a W3.CSS table?', ['.w3-zebra', '.w3-table-striped', '.w3-striped', '.w3-alternate'], 2],
    ['Which class creates a bordered table?', ['.w3-table-grid', '.w3-table-lines', '.w3-border-table', '.w3-bordered'], 3],
    ['Which class creates a hoverable table row effect?', ['.w3-row-hover', '.w3-hoverable', '.w3-table-hover', '.w3-cursor-hover'], 1],
    ['Which class creates a basic button in W3.CSS?', ['.w3-btn', '.w3-btn-style', '.w3-button-card', '.w3-click'], 0],
    ['What is the main difference between .w3-btn and .w3-button?', ['.w3-btn has shadow by default', '.w3-btn has no shadow', '.w3-button is larger', 'No difference'], 0],
    ['Which class makes a button take full width of container?', ['.w3-full', '.w3-wide-btn', '.w3-block', '.w3-span'], 2],
    ['Which class turns a button into a circle?', ['.w3-round', '.w3-circle', '.w3-btn-round', '.w3-oval'], 1],
    ['Which class rounds the corners of an element?', ['.w3-radius', '.w3-corner', '.w3-curve', '.w3-round'], 3],
    ['Which class gives large rounded corners?', ['.w3-round-big', '.w3-round-4', '.w3-round-large', '.w3-corner-lg'], 2],
    ['Which class gives maximum rounded corners?', ['.w3-circle', '.w3-round-xxlarge', '.w3-round-max', '.w3-round-full'], 0],
    ['Which class creates a responsive image?', ['.w3-img-responsive', '.w3-image', '.w3-fluid-img', '.w3-responsive-picture'], 1],
    ['Which class displays an element as a top navigation bar?', ['.w3-header-bar', '.w3-navbar', '.w3-nav', '.w3-bar'], 3],
    ['Which class represents an item inside .w3-bar?', ['.w3-nav-item', '.w3-link', '.w3-menu-item', '.w3-bar-item'], 3],
    ['Which class creates a vertical navigation menu?', ['.w3-vbar', '.w3-sidebar-menu', '.w3-bar-block', '.w3-menu-vertical'], 2],
    ['Which class creates a collapsible sidebar?', ['.w3-sidebar', '.w3-drawer', '.w3-side-nav', '.w3-aside'], 0],
    ['Which class hides element on small screens (mobile)?', ['.w3-no-mobile', '.w3-hide-small', '.w3-hide-s', '.w3-hidden-mobile'], 1],
    ['Which class hides element on medium screens?', ['.w3-no-tab', '.w3-hide-medium', '.w3-hidden-tablet', '.w3-hide-m'], 3],
    ['Which class hides element on large screens?', ['.w3-hide-l', '.w3-hide-large', '.w3-no-desktop', '.w3-hidden-desk'], 0],
    ['Which class creates a modal popup overlay?', ['.w3-popup', '.w3-dialog', '.w3-modal', '.w3-overlay'], 2],
    ['Which class wraps the content inside a modal?', ['.w3-modal-box', '.w3-modal-content', '.w3-modal-body', '.w3-dialog-content'], 1],
    ['Which class creates a dropdown menu container?', ['.w3-dropdown-box', '.w3-dropdown-hover', '.w3-dropdown-content', '.w3-hover-drop'], 1],
    ['Which class displays dropdown content on click?', ['.w3-dropdown-open', '.w3-click-dropdown', '.w3-dropdown-click', '.w3-active-dropdown'], 2],
    ['Which class contains dropdown items?', ['.w3-dropdown-content', '.w3-dropdown-box', '.w3-drop-list', '.w3-menu-content'], 0],
    ['Which class creates a styled form container?', ['.w3-form-box', '.w3-form', '.w3-input-group', '.w3-container'], 3],
    ['Which class styles input text fields in W3.CSS?', ['.w3-textbox', '.w3-field', '.w3-input', '.w3-form-control'], 2],
    ['Which class styles radio buttons and checkboxes?', ['.w3-check-radio', '.w3-select-box', '.w3-option', '.w3-check/.w3-radio'], 3],
    ['Which class creates a badge/tag with rounded corners?', ['.w3-badge', '.w3-label', '.w3-pill', '.w3-tag'], 0],
    ['Which class creates a rectangular label/tag?', ['.w3-badge', '.w3-tag', '.w3-mark', '.w3-label'], 1],
    ['How do you animate an element fading in?', ['.w3-animate-opacity', '.w3-fade', '.w3-anim-fade', '.w3-show-fade'], 0],
    ['Which class animates element sliding in from top?', ['.w3-slide-down', '.w3-from-top', '.w3-animate-top', '.w3-anim-down'], 2],
    ['Which class animates element sliding from left?', ['.w3-slide-left', '.w3-animate-left', '.w3-from-left', '.w3-anim-left'], 1],
    ['Which class animates element sliding from right?', ['.w3-slide-right', '.w3-anim-right', '.w3-from-right', '.w3-animate-right'], 3],
    ['Which class animates element sliding from bottom?', ['.w3-slide-up', '.w3-animate-bottom', '.w3-from-bottom', '.w3-anim-up'], 1],
    ['Which class creates a zooming animation effect?', ['.w3-pop-zoom', '.w3-zoom-in', '.w3-scale-anim', '.w3-animate-zoom'], 3],
    ['Which class creates a spinning loader animation?', ['.w3-spin-loader', '.w3-rotate', '.w3-spin', '.w3-loading'], 2],
    ['Which class floats an element to the left?', ['.w3-left', '.w3-float-left', '.w3-align-left', '.w3-pull-left'], 0],
    ['Which class floats an element to the right?', ['.w3-align-right', '.w3-right', '.w3-float-right', '.w3-pull-right'], 1],
    ['Which class centers text inside an element?', ['.w3-center', '.w3-text-center', '.w3-align-center', '.w3-middle'], 0],
    ['Which class aligns text to left?', ['.w3-left-text', '.w3-align-left', '.w3-left-align', '.w3-text-left'], 2],
    ['Which class aligns text to right?', ['.w3-text-right', '.w3-right-text', '.w3-align-right', '.w3-right-align'], 3],
    ['Which class sets tiny font size (10px)?', ['.w3-micro', '.w3-extra-small', '.w3-tiny', '.w3-font-tiny'], 2],
    ['Which class sets small font size (12px)?', ['.w3-small', '.w3-sm', '.w3-font-small', '.w3-text-small'], 0],
    ['Which class sets large font size (18px)?', ['.w3-lg', '.w3-big', '.w3-font-lg', '.w3-large'], 3],
    ['Which class sets extra large font size (24px)?', ['.w3-huge', '.w3-xlarge', '.w3-extra-large', '.w3-font-xl'], 1],
    ['Which class sets jumbo font size (64px)?', ['.w3-mega', '.w3-jumbo', '.w3-xxxlarge', '.w3-hero'], 1],
    ['Which class adds a thin border around element?', ['.w3-box-border', '.w3-outline', '.w3-line', '.w3-border'], 3],
    ['Which class adds top border only?', ['.w3-border-top', '.w3-border-top', '.w3-top-line', '.w3-line-top'], 0],
    ['Which class changes border color to green?', ['.w3-border-green', '.w3-border-color-green', '.w3-green-border', '.w3-line-green'], 2],
    ['Which class removes all borders from element?', ['.w3-no-border', '.w3-clean-border', '.w3-border-none', '.w3-border-0'], 3],
    ['Which class adds hover effect with red background?', ['.w3-red-hover', '.w3-hover-bg-red', '.w3-hover-red', '.w3-onhover-red'], 2],
    ['Which class changes text color on hover to yellow?', ['.w3-hover-text-yellow', '.w3-text-hover-yellow', '.w3-hover-yellow-text', '.w3-yellow-hover-text'], 0],
    ['Which class adds hover shadow effect?', ['.w3-shadow-hover', '.w3-hover-shadow', '.w3-card-hover', '.w3-hoverable-card'], 1],
    ['Which class creates a translucent element opacity?', ['.w3-transparent', '.w3-translucent', '.w3-opacity', '.w3-alpha'], 2],
    ['Which class turns element transparent on hover?', ['.w3-opacity-hover', '.w3-hover-opacity', '.w3-hover-transparent', '.w3-trans-hover'], 1],
    ['Which class completely removes background color?', ['.w3-transparent', '.w3-no-bg', '.w3-clear-bg', '.w3-none'], 0],
    ['Which class creates a responsive video container?', ['.w3-video-box', '.w3-media', '.w3-embed', '.w3-responsive'], 3],
    ['Which class fixes element at top of page?', ['.w3-fixed-top', '.w3-top', '.w3-sticky-top', '.w3-header-fixed'], 1],
    ['Which class fixes element at bottom of page?', ['.w3-fixed-bottom', '.w3-footer-fixed', '.w3-bottom', '.w3-sticky-bottom'], 2],
    ['Which class adds tooltip on hover?', ['.w3-pop-tip', '.w3-hint', '.w3-hover-tip', '.w3-tooltip'], 3],
    ['Which class creates progress bar container?', ['.w3-progress', '.w3-light-grey (container)', '.w3-progress-bar', '.w3-meter'], 0],
    ['Which class sets width of progress bar inner fill?', ['Inline style width: X%', '.w3-progress-val', '.w3-fill-X', '.w3-meter-fill'], 0],
    ['Which class creates a close button (X)?', ['.w3-close', '.w3-button.w3-display-topright', '.w3-x-btn', '.w3-dismiss'], 1],
    ['Which class positions content to top-left of parent?', ['.w3-top-left', '.w3-pos-top-left', '.w3-align-top-left', '.w3-display-topleft'], 3],
    ['Which class centers element in exact middle of parent?', ['.w3-center-all', '.w3-exact-center', '.w3-display-middle', '.w3-middle-align'], 2],
    ['Which class positions content at bottom-right?', ['.w3-bottom-right', '.w3-align-bottom-right', '.w3-pos-bottom-right', '.w3-display-bottomright'], 3],
    ['Required parent class for .w3-display-X positioning:', ['.w3-container', '.w3-display-container', '.w3-relative', '.w3-parent'], 1],
    ['Which class sets top margin of 16px?', ['.w3-section', '.w3-margin-16', '.w3-gap-top', '.w3-space-16'], 0],
    ['Which class adds 16px margin on ALL sides?', ['.w3-margin', '.w3-space-all', '.w3-padding-all', '.w3-outer-space'], 0],
    ['Which class adds 16px padding on top and bottom?', ['.w3-pad-vertical', '.w3-vertical-padding', '.w3-padding-16', '.w3-section-pad'], 2],
    ['Which class adds 24px padding top & bottom?', ['.w3-padding-24', '.w3-padding-24', '.w3-padding-large', '.w3-pad-24'], 2],
    ['Which class adds 32px padding top & bottom?', ['.w3-padding-extra', '.w3-padding-32', '.w3-pad-32', '.w3-heavy-padding'], 1],
    ['Which class adds 64px padding top & bottom?', ['.w3-padding-huge', '.w3-pad-max', '.w3-hero-padding', '.w3-padding-64'], 3],
    ['How to hide an element dynamically in W3.CSS?', ['w3-invisible', '.w3-hide', 'w3-display-none', '.w3-close-item'], 1],
    ['How to display a hidden element in W3.CSS?', ['.w3-show', '.w3-visible', '.w3-display-block', '.w3-unhide'], 0],
    ['Which class displays an element as an inline block?', ['.w3-inline', '.w3-display-inline', '.w3-inline-box', '.w3-show-inline-block'], 3],
    ['Which class turns a list into a styled unbulleted box list?', ['.w3-unstyled-list', '.w3-list', '.w3-ul', '.w3-clean-ul'], 2],
    ['How to add avatar images in a W3.CSS list item?', ['.w3-avatar-img', '.w3-bar-item.w3-circle', '.w3-list-avatar', '.w3-icon-avatar'], 1],
    ['What default font family does W3.CSS use?', ['Verdana', 'Arial', 'Times New Roman', 'Roboto'], 0],
    ['Which class changes font to Segoe UI / sans-serif theme?', ['.w3-font-sans', '.w3-modern-font', 'Custom CSS/.w3-serif', '.w3-roboto'], 2],
    ['Which class turns font style to serif?', ['.w3-times', '.w3-font-serif', '.w3-text-serif', '.w3-serif'], 3],
    ['Which class changes text font to wide/monospace style?', ['.w3-mono', '.w3-letter-wide', '.w3-space-text', '.w3-wide'], 3],
    ['Which color library file expands standard W3.CSS colors?', ['w3-colors-all.css', 'w3-extra-colors.css', 'w3-colors-metro.css/w3-theme.css', 'w3-palettes.css'], 2],
    ['What is the correct way to include W3.CSS in HTML?', ['<script src="w3.css"></script>', '<link rel="stylesheet" href="w3.css">', '<style src="w3.css"></style>', '<w3-css href="w3.css">'], 1],
    ['What type of language is JavaScript?', ['Interpreted / JIT', 'Compiled language', 'Assembly language', 'Markup language'], 0],
    ['Which HTML tag is used to embed JavaScript?', ['<js>', '<javascript>', '<script>', '<code>'], 2],
    ['Which keyword declares a block-scoped variable?', ['var', 'define', 'global', 'let'], 3],
    ['Which keyword declares a constant variable?', ['const', 'static', 'final', 'immutable'], 0],
    ['What is the output of typeof null in JavaScript?', ['"null"', '"object"', '"undefined"', '"number"'], 1],
    ['What is the output of typeof NaN in JavaScript?', ['"NaN"', '"undefined"', '"number"', '"object"'], 2],
    ['Which operator performs strict equality check?', ['==', '!=', '=', '==='], 3],
    ['What is the result of \'5\'+3 in JavaScript?', ['"53"', '8', 'NaN', 'Error'], 0],
    ['What is the result of \'5\'-3 in JavaScript?', ['"53"', '2', '"2"', 'NaN'], 1],
    ['Which function displays a message box with OK button?', ['prompt()', 'alert()', 'confirm()', 'print()'], 1],
    ['Which method returns user text input in a dialog?', ['read()', 'input()', 'prompt()', 'confirm()'], 2],
    ['Which method prints messages to the browser console?', ['print.log()', 'system.out()', 'browser.write()', 'console.log()'], 3],
    ['What does DOM stand for?', ['Document Object Model', 'Data Object Model', 'Desktop Object Mode', 'Document Option Module'], 0],
    ['Which method selects an element by its ID?', ['getID()', 'queryID()', 'getElementById()', 'selectElement()'], 2],
    ['Which method selects the first CSS selector match?', ['querySelector()', 'selectFirst()', 'getQuery()', 'findElement()'], 0],
    ['Which method selects ALL elements matching CSS selector?', ['querySelector()', 'getElementsByCSS()', 'selectAll()', 'querySelectorAll()'], 3],
    ['Which property changes the HTML content of an element?', ['contentText', 'innerHTML', 'valueHTML', 'nodeContent'], 1],
    ['Which property changes plain text inside element safely?', ['innerHTML', 'setString', 'textContent', 'rawText'], 2],
    ['How do you write an inline comment in JavaScript?', ['# Comment', '<!-- Comment -->', '/* Comment', '// Comment'], 3],
    ['How do you write a multi-line comment in JavaScript?', ['/* line1 line2 */', '// line1 line2 //', '...', '#* line1 line2*#'], 0],
    ['Which array method adds elements to the END?', ['unshift()', 'push()', 'pop()', 'append()'], 1],
    ['Which array method removes the LAST element?', ['pop()', 'shift()', 'remove()', 'delete()'], 0],
    ['Which array method removes the FIRST element?', ['pop()', 'unshift()', 'shift()', 'slice()'], 2],
    ['Which array method adds elements to the START?', ['push()', 'unshift()', 'prepend()', 'shift()'], 1],
    ['Which method converts JSON string to JavaScript object?', ['JSON.stringify()', 'JSON.decode()', 'JSON.toObject()', 'JSON.parse()'], 3],
    ['Which method converts JS object to JSON string?', ['JSON.encode()', 'JSON.parse()', 'JSON.stringify()', 'Object.toJSON()'], 2],
    ['What is the index of the first element in an array?', ['0', '1', '-1', 'undefined'], 0],
    ['Which property returns the length of an array?', ['count', 'length', 'size', 'indexLength'], 1],
    ['Which syntax creates an Arrow Function?', ['def () { }', 'function=>()', '()() -> {}', '() => {}'], 3],
    ['Which event occurs when a user clicks an HTML element?', ['onclick', 'onhover', 'onpress', 'onchange'], 0],
    ['Which method attaches an event listener to an element?', ['attachEvent()', 'addEventListener()', 'bindEvent()', 'listenTo()'], 1],
    ['What does event.preventDefault() do?', ['Deletes event', 'Stops propagation', 'Stops default action', 'Reloads page'], 2],
    ['What does event.stopPropagation() do?', ['Cancels default', 'Removes listener', 'Stops execution', 'Stops event bubbling'], 3],
    ['What is the output of 1+"2"+3?', ['6', '"15"', '"123"', 'NaN'], 2],
    ['What is the output of 1+2+"3"?', ['"123"', '6', '"33"', '"15"'], 1],
    ['Which built-in function converts a string to an integer?', ['parseInt()', 'parseInteger()', 'toInt()', 'Number.int()'], 0],
    ['Which built-in function converts a string to float?', ['parseFloatVal()', 'Number.float()', 'toFloat()', 'parseFloat()'], 3],
    ['How do you check if a value is NaN?', ['val == NaN', 'val === NaN', 'val.isNaN()', 'isNaN(val)'], 3],
    ['What is the result of isNaN("Hello")?', ['false', 'true', 'NaN', 'TypeError'], 1],
    ['What is the result of isNaN(100)?', ['false', 'true', 'null', 'undefined'], 0],
    ['Which keyword refers to current object context?', ['self', 'parent', 'this', 'global'], 2],
    ['Which timer method runs code repeatedly at intervals?', ['setTimeout()', 'runRepeat()', 'setLoop()', 'setInterval()'], 3],
    ['Which timer method runs code ONCE after a delay?', ['setTimeout()', 'setInterval()', 'setDelay()', 'wait()'], 0],
    ['How do you stop a setInterval timer?', ['stopInterval()', 'clearInterval()', 'endInterval()', 'cancelInterval()'], 1],
    ['How do you stop a setTimeout timer?', ['cancelTimeout()', 'stopTimeout()', 'clearTimeout()', 'endTime()'], 2],
    ['Which keyword handles errors in JavaScript?', ['try...catch...finally', 'catch...throw', 'do...catch', 'try...catch'], 3],
    ['Which keyword manually creates/raises a custom error?', ['raise', 'throw', 'error', 'emit'], 1],
    ['Which code block ALWAYS executes after try/catch?', ['finally', 'then', 'always', 'end'], 0],
    ['Which ES6 feature unpacks values into variables?', ['Restructuring', 'Spreading', 'Destructuring', 'Parsing'], 2],
    ['Which operator expands array elements (...)?', ['Rest operator', 'Spread operator', 'Expansion operator', 'Triple dot operator'], 1],
    ['Which operator collects multiple arguments into an array?', ['Rest parameter', 'Spread parameter', 'Array collector', 'Group parameter'], 0],
    ['What is Template Literals syntax in ES6?', ['\'string ${var}\'', 'string ${var}', '[string {var}]', '"string ${var}"'], 3],
    ['Which ES6 feature handles asynchronous operations?', ['Callbacks only', 'Observables', 'Promises', 'Threading'], 2],
    ['What are 3 states of a Promise?', ['Pending, Fulfilled, Rejected', 'Start, Run, End', 'Active, Done, Failed', 'Init, True, False'], 0],
    ['Which method handles a resolved Promise value?', ['.catch()', '.done()', '.then()', '.resolve()'], 2],
    ['Which method handles a rejected Promise error?', ['.error()', '.then()', '.fail()', '.catch()'], 3],
    ['Which keyword pauses execution of async function?', ['wait', 'await', 'pause', 'yield'], 1],
    ['Where can the await keyword be used?', ['Inside any function', 'Inside async functions', 'Inside loops only', 'Inside class constructor'], 1],
    ['Which web API fetches resources asynchronously?', ['fetch()', 'getRequest()', 'http()', 'ajaxFetch()'], 0],
    ['Which array method creates a NEW array with modified items?', ['forEach()', 'filter()', 'map()', 'reduce()'], 2],
    ['Which array method filters elements passing a condition?', ['map()', 'select()', 'find()', 'filter()'], 3],
    ['Which array method reduces array to a single value?', ['join()', 'map()', 'reduce()', 'compress()'], 2],
    ['Which array method finds the FIRST element matching condition?', ['find()', 'filter()', 'search()', 'get()'], 0],
    ['Which method checks if AT LEAST ONE element passes condition?', ['includes()', 'every()', 'any()', 'some()'], 3],
    ['Which method checks if ALL elements pass condition?', ['some()', 'every()', 'all()', 'verify()'], 1],
    ['What is a closure in JavaScript?', ['Function without name', 'Closing tag in script', 'Inner function accessing outer scope', 'Block variable'], 2],
    ['What is Hoisting in JavaScript?', ['Async code execution', 'Deleting variables', 'Elevating function performance', 'Moving declarations to top'], 3],
    ['Are let and const hoisted?', ['No, not at all', 'Yes, in Temporal Dead Zone', 'Only const is hoisted', 'Only let is hoisted'], 1],
    ['Which storage stores data permanently in browser?', ['localStorage', 'sessionStorage', 'CookieSession', 'MemoryCache'], 0],
    ['Which storage clears data when tab is closed?', ['localStorage', 'sessionStorage', 'IndexDB', 'PermanentStorage'], 1],
    ['How to set item in localStorage?', ['localStorage.add()', 'localStorage.store()', 'localStorage.put()', 'localStorage.setItem()'], 3],
    ['How to get item from localStorage?', ['localStorage.getItem()', 'localStorage.read()', 'localStorage.fetch()', 'localStorage.find()'], 0],
    ['How to remove single item from localStorage?', ['localStorage.delete()', 'localStorage.flush()', 'localStorage.removeItem()', 'localStorage.reset()'], 2],
    ['How to clear ALL items from localStorage?', ['localStorage.clearKey()', 'localStorage.removeAll()', 'localStorage.clear()', 'localStorage.unset()'], 2],
    ['Which statement exits a loop prematurely?', ['continue', 'break', 'exit', 'stop'], 1],
    ['Which statement skips current iteration in a loop?', ['continue', 'break', 'skip', 'pass'], 0],
    ['Which object allows storing UNIQUE values only?', ['Map', 'ArraySet', 'WeakMap', 'Set'], 3],
    ['Which object allows Key-Value pairs with ANY data type key?', ['Set', 'Object', 'Map', 'Dictionary'], 2],
    ['Which keyword is used to create a Class in ES6?', ['class', 'prototype', 'struct', 'constructor'], 0],
    ['Which method initializes class object instances?', ['init()', 'constructor()', 'create()', 'main()'], 1],
    ['Which keyword allows class inheritance in ES6?', ['inherits', 'prototype', 'implements', 'extends'], 3],
    ['Which keyword calls parent class constructor?', ['base()', 'parent()', 'super()', 'root()'], 2],
    ['What is the output of Math.round(4.7)?', ['4', '5', '4.7', '4.5'], 1],
    ['What is the output of Math.floor(4.9)?', ['4', '5', '4.9', '0'], 0],
    ['What is the output of Math.ceil(4.1)?', ['4', '5', '4.1', '4.0'], 1],
    ['Which method returns random number between 0 and 1?', ['Math.rand()', 'random()', 'Number.random()', 'Math.random()'], 3],
    ['How to import module exports in ES6?', ['import {x} from \'./file\'', 'require(\'./file\')', 'include \'./file\'', 'load \'./file\''], 0],
    ['How to export a single default value in ES6 module?', ['export main', 'module.exports', 'export default', 'export primary'], 2],
    ['What is CommonJS export syntax (Node.js)?', ['export default', 'send.export = ...', 'export.all...', 'module.exports = ...'], 3],
    ['What is CommonJS import syntax (Node.js)?', ['include(\'mod\')', 'import x from \'mod\'', 'load(\'mod\')', 'const x = require(\'mod\')'], 3],
    ['What is Event Bubbling?', ['Event triggers top-down', 'Event is stopped', 'Event propagates bottom-up', 'Async event queue'], 2],
    ['What is Event Capturing?', ['Event triggers top-down', 'Event triggers bottom-up', 'Event triggers twice', 'Event default cancelled'], 0],
    ['Which operator performs Logical AND?', ['||', '&&', '!', '&'], 1],
    ['Which operator performs Logical OR?', ['|', '&&', '??', '||'], 3],
    ['Which operator is Nullish Coalescing?', ['??', '||', '?:', '&&'], 0],
    ['What is Optional Chaining operator?', ['.?', '?.', '??', '!!'], 1],
    ['What does Boolean("0") evaluate to?', ['undefined', 'false', 'true', 'NaN'], 2],
    ['What does Boolean(0) evaluate to?', ['true', 'null', 'false', 'TypeError'], 2],
    ['Which architectural pattern does AngularJS follow?', ['MVC (Model-View-Controller)', 'MVP (Model-View-Presenter)', 'Flux Architecture', 'Monolithic Architecture'], 0],
    ['Which directive is used to initialize an AngularJS application?', ['ng-init', 'ng-controller', 'ng-model', 'ng-app'], 3],
    ['How is Two-Way Data Binding implemented in AngularJS?', ['Using ng-bind', 'Using ng-model', 'Using {{ expression }}', 'Using ng-repeat'], 1],
    ['Which directive is used to iterate over a collection/array in HTML?', ['ng-for', 'ng-loop', 'ng-iterate', 'ng-repeat'], 3],
    ['What is the $scope in AngularJS?', ['A global JavaScript variable', 'An object that binds Controller and View', 'A CSS layout container', 'A database connector'], 1],
    ['Which symbol is used to pass expressions in AngularJS HTML code?', ['{{ expression }}', '{ expression }', '<% expression %>', '$(expression)'], 0],
    ['Which service is used to make HTTP requests in AngularJS?', ['$ajax', '$request', '$http', '$fetch'], 2],
    ['Which filter is used to format a date in AngularJS expressions?', ['dateFormat', 'date', 'time', 'uppercase'], 1],
    ['How do you create a custom directive in AngularJS?', ['module.directive()', 'module.createDirective()', 'module.newDirective()', '$compile.directive()'], 0],
    ['What is the purpose of $rootScope in AngularJS?', ['Scope local to a single directive', 'Parent scope of all $scope objects', 'Controller for route management', 'A private helper object'], 1],
    ['Which prefix is used for AngularJS built-in services and objects?', ['#', '@', '_', '$'], 3],
    ['What does the digest cycle ($digest) do in AngularJS?', ['Downloads JavaScript files', 'Clears browser cache', 'Checks watched variables for changes', 'Compiles HTML to CSS'], 2],
    ['Which directive is used to show or hide HTML elements based on expressions?', ['ng-visible', 'ng-display', 'ng-show/ng-hide', 'ng-if-else'], 2]
  ],
  o3: [
    ['Python me output dikhane ka function?', ['echo()', 'show()', 'print()', 'write()'], 2],
    ['Python me comment kis se shuru hota hai?', ['//', '#', '/*', '--'], 1]
  ]
};

/* ===== Adapter: aapke purane format ke questions bina badle chalte hain ===== */
/* Naya bilingual format bhi chalta hai:
   Q('English question', 'हिंदी प्रश्न', ['A','B','C','D'], sahi_number, ['अ','ब','स','द'])   (Hindi options optional) */
const Q = (en, hi, o, a, oh) => ({ q: { en, hi }, o: { en: o, hi: oh || o }, a, ol: 'en' });

/* Chapters ke Hindi naam (language Hindi hone par dikhte hain) */
const CH_HI = {
  c1: 'कंप्यूटर का परिचय', c2: 'ऑपरेटिंग सिस्टम का परिचय', c3: 'लिब्रे ऑफिस राइटर', c4: 'लिब्रे ऑफिस कैल्क', c5: 'लिब्रे ऑफिस इम्प्रेस',
  c6: 'इंटरनेट और WWW का परिचय', c7: 'ई-गवर्नेंस और डिजिटल वित्तीय सेवाएँ', c8: 'फ्यूचर स्किल्स और साइबर सुरक्षा', c9: 'भारतीय भाषा डिजिटल सेवाएँ और उभरती तकनीकें',
  o1: 'आईटी टूल्स और नेटवर्क बेसिक्स', o2: 'वेब डिज़ाइनिंग और पब्लिशिंग', o3: 'पायथन प्रोग्रामिंग', o4: 'इंटरनेट ऑफ थिंग्स (IoT)', o5: 'एडवांस आईटी सिस्टम और सुरक्षा'
};
const ttl = c => lang === 'hi' ? (CH_HI[c[0]] || c[1]) : c[1];

/* English version of a question (optional). Language English hone par yahi dikhega.
   Format: QB_EN = { c1: { 0: ['English question', ['A','B','C','D']] } }   (0 = us chapter ka pehla question, 1 = doosra ...)
   Jis question ka English yahan nahi hai, wo apni original bhasha me hi dikhega. */
const QB_EN = {};

/* Hindi me exact (apna) anuvaad dena ho to yahan daalein (auto-translate se pehle yahi dikhega):
   QB_HI = { c4: { 0: ['हिंदी प्रश्न', ['विकल्प A', 'विकल्प B', 'विकल्प C', 'विकल्प D']] } }   (0 = us chapter ka pehla question) */
const QB_HI = {};
const isDev = x => /[\u0900-\u097F]/.test(x || '');
Object.keys(QB).forEach(k => QB[k] = QB[k].map((r, i) => {
  if (!Array.isArray(r)) return r;
  const ol = isDev(r[0]) ? 'hi' : 'en', b = { q: { hi: null, en: null }, o: { hi: null, en: null }, a: r[2], ol };
  b.q[ol] = r[0]; b.o[ol] = r[1];
  const h = (QB_HI[k] || {})[i], e = (QB_EN[k] || {})[i];
  if (h) { b.q.hi = h[0]; b.o.hi = h[1]; }
  if (e) { b.q.en = e[0]; b.o.en = e[1]; }
  return b;
}));

/* ===== Auto translation (Hindi <-> English) : question + options, cache ke saath ===== */
const TRC = store.get('acec_tr2', {}); let _trT = 0;
const saveTR = () => { clearTimeout(_trT); _trT = setTimeout(() => { const k = Object.keys(TRC); if (k.length > 5000) k.slice(0, 1500).forEach(x => delete TRC[x]); store.set('acec_tr2', TRC); }, 1500); };
const needTr = (x, to) => !!x && /\s/.test(x.trim()) && (to === 'hi' ? (!isDev(x) && /[A-Za-z]{3,}/.test(x)) : isDev(x));
async function gtr(x, to) {
  if (!needTr(x, to)) return x;
  const key = to + '|' + x; if (TRC[key]) return TRC[key];
  const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), 7000);
  try {
    const r = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=' + to + '&q=' + encodeURIComponent(x), { signal: ctl.signal });
    const j = await r.json(), out = j[0].map(p => p[0]).join('').trim();
    if (!out) return null; TRC[key] = out; saveTR(); return out;
  } catch { return null; } finally { clearTimeout(tm); }
}
const _pend = new WeakMap();
function ensureLang(b, to) {
  const from = b.ol || 'en';
  if (to === from || (b.q[to] && b.o[to])) return Promise.resolve(true);
  const m = _pend.get(b) || {}; _pend.set(b, m);
  return m[to] || (m[to] = (async () => {
    const r = await Promise.all([gtr(b.q[from], to), ...b.o[from].map(x => gtr(x, to))]);
    delete m[to];
    if (r.some(x => x === null)) { (b._fail = b._fail || {})[to] = Date.now(); return false; }
    b.q[to] = r[0]; b.o[to] = r.slice(1); return true;
  })());
}
const qOf = b => b.q[lang] ?? b.q[b.ol || 'en'];
const oOf = b => b.o[lang] ?? b.o[b.ol || 'en'];

/* Ek hi sahi-option number (index) 3 baar lagatar na aaye: test ka order is rule se set hota hai */
const runsOf = (a, bank) => { let n = 0; for (let i = 2; i < a.length; i++) if (bank[a[i]].a === bank[a[i - 1]].a && bank[a[i]].a === bank[a[i - 2]].a) n++; return n; };
function fixRuns(order, bank) {
  const a = order.slice(); let r = runsOf(a, bank);
  for (let it = 0; it < 500 && r; it++) {
    let i = 2; for (; i < a.length; i++) if (bank[a[i]].a === bank[a[i - 1]].a && bank[a[i]].a === bank[a[i - 2]].a) break;
    let ok = false;
    for (let k = 0; k < 40 && !ok; k++) {
      const j = Math.random() * a.length | 0; if (j === i || bank[a[j]].a === bank[a[i]].a) continue;
      [a[i], a[j]] = [a[j], a[i]]; const r2 = runsOf(a, bank);
      if (r2 < r) { r = r2; ok = true; } else [a[i], a[j]] = [a[j], a[i]];
    }
    if (!ok) break;
  }
  return a;
}

/* Saturday test: sab chapters ke questions me se random 25. Sirf apna alag set chahiye to SAT_CUSTOM me Q(...) daalo. */
const SAT_CUSTOM = [];
const ALLQ = Object.keys(QB).flatMap(k => QB[k]);
const getBank = k => k === 'SAT' ? (SAT_CUSTOM.length ? SAT_CUSTOM : ALLQ) : (QB[k] || []);

/* ===== Static cards ===== */
$('#courseGrid').innerHTML = COURSES.map(c => `<div class="card"><div class="ic">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p><a class="btn sm" href="#contact">Enquire Now</a></div>`).join('');
$('#dailyList').innerHTML = DAILY.map((d, i) => `<details><summary>Q${i + 1}. ${d[0].replace(/</g, '&lt;')}</summary><p>Answer: ${d[1].replace(/</g, '&lt;')}</p></details>`).join('');

/* ===== Saved progress (Resume) ===== */
const prog = () => store.get('acec_prog', {});
function setProg(P) { store.set('acec_prog', P); paintResume(); renderTests(); }
function paintResume() {
  const P = prog(), ks = Object.keys(P), b = $('#resumeBtn');
  b.hidden = !ks.length;
  if (ks.length) b.dataset.k = ks.sort((a, c) => P[c].ts - P[a].ts)[0];
}
function renderTests() {
  const P = prog(), B = store.get('acec_best', {}), bb = k => B[k] ? `<div class="bbadge">🏅 ${t('x_best')}: ${B[k].s}/${B[k].n}</div>` : '';
  const mk = list => list.map((c, i) => {
    const n = getBank(c[0]).length, s = P[c[0]];
    return `<div class="card test"><span class="chip">${t('chap')} ${i + 1}</span><h3>${ttl(c)}</h3><div class="count">${n ? t('nq', { n }) : t('soonS')}</div>${s ? `<div class="rbadge">${t('saved', { i: s.i, n: s.order.length })}</div>` : ''}${bb(c[0])}<button class="btn sm" data-test="${c[0]}">${t('start')}</button></div>`;
  }).join('');
  $('#cccGrid').innerHTML = mk(CCC); $('#olGrid').innerHTML = mk(OL);
}

/* ===== Login ===== */
let user = store.get('acec_user', null);
function paintUser() { $('#loginBtn').textContent = user ? '👤 ' + user.name.split(' ')[0] : t('login'); }
$('#loginBtn').onclick = () => {
  if (user) { if (confirm('Logout karna chahte hain?')) { user = null; localStorage.removeItem('acec_user'); paintUser(); toast('Logout ho gaye'); } }
  else openModal('loginModal');
};
$('#loginForm').onsubmit = e => {
  e.preventDefault();
  const name = $('#lName').value.trim(), mob = $('#lMob').value.trim();
  if (!/^[0-9]{10}$/.test(mob)) return toast('10 digit ka sahi mobile number likhein');
  user = { name, mob }; store.set('acec_user', user); paintUser(); closeModal('loginModal');
  toast('Welcome, ' + name + '!');
};

/* ===== Popup dialog (Yes/Cancel, Resume/Starting) ===== */
let dlgRes = null;
function ask(title, text, btns) {
  return new Promise(res => {
    $('#dTitle').textContent = title; $('#dText').textContent = text;
    const box = $('#dBtns'); box.innerHTML = '';
    dlgRes = v => { dlgRes = null; closeModal('dlg'); res(v); };
    btns.forEach((b, i) => { const e = document.createElement('button'); e.className = 'btn sm ' + (b.c || ''); e.textContent = b.t; e.onclick = () => dlgRes(i); box.append(e); });
    openModal('dlg');
  });
}

/* ===== Test engine ===== */
let T = null, timer = null, testOpen = false, skipPop = false;
async function openTest(key) {
  const bank = getBank(key);
  if (!bank.length) return toast(t('soon'));
  if (key === 'SAT' && !user) { toast(t('loginFirst')); return openModal('loginModal'); }
  const sv = prog()[key];
  if (sv && sv.order.length && sv.order.every(i => bank[i]) && sv.i <= sv.order.length) {
    const c = await ask(t('resumeT'), t('resumeQ', { i: sv.i, n: sv.order.length }), [{ t: t('resume') }, { t: t('restart'), c: 'ghost' }]);
    if (c === -1) return;
    if (c === 0) return begin(key, sv);
    const P = prog(); delete P[key]; setProg(P);
  }
  begin(key, null);
}
function begin(key, sv, only) {
  const bank = getBank(key);
  let order = sv ? sv.order : only ? shuffle(only) : shuffle(bank.map((_, i) => i)).slice(0, key === 'SAT' ? 25 : bank.length);
  if (!sv) order = fixRuns(order, bank);
  T = { key, order, i: sv ? sv.i : 0, score: sv ? sv.score : 0, sec: sv ? sv.sec : order.length * 45, sel: null, finished: false, wrong: (sv && sv.wrong) || [], retry: !!only };
  openModal('testModal'); testOpen = true; history.pushState({ test: 1 }, '');
  clearInterval(timer); timer = setInterval(() => { T.sec--; paintTimer(); if (T.sec <= 0) finish(); }, 1000);
  paintTitle(); paintTimer();
  T.i >= order.length ? finish() : showQ();
}
function paintTitle() { $('#tTitle').textContent = T.key === 'SAT' ? t('sat') : ttl([...CCC, ...OL].find(c => c[0] === T.key)); }
function paintTimer() { const s = Math.max(T.sec, 0); $('#tTimer').textContent = '⏱ ' + Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
function showQ() {
  const b = getBank(T.key)[T.order[T.i]], body = $('#tBody'); body.innerHTML = '';
  $('#tCount').textContent = t('qOf', { i: T.i + 1, n: T.order.length });
  $('#tBar').style.width = (T.i / T.order.length * 100) + '%';
  const h = document.createElement('div'); h.className = 'q'; h.textContent = qOf(b); body.append(h);
  const need = !b.q[lang] && (b.ol || 'en') !== lang;
  if (need) {
    const failed = b._fail && b._fail[lang] && Date.now() - b._fail[lang] < 20000;
    const nt = document.createElement('div'); nt.className = 'trnote'; nt.textContent = failed ? t('x_trFail') : t('x_trIng'); h.after(nt);
    if (!failed) { const ti = T.i; ensureLang(b, lang).then(() => { if (T && !T.finished && T.i === ti && getBank(T.key)[T.order[T.i]] === b) showQ(); }); }
  }
  oOf(b).forEach((o, idx) => {
    const el = document.createElement('button'); el.className = 'opt';
    const n = document.createElement('span'); n.className = 'on'; n.textContent = 'ABCD'[idx] || (idx + 1);
    const tx = document.createElement('span'); tx.textContent = o; el.append(n, tx);
    if (T.sel !== null) { el.disabled = true; if (idx === b.a) el.classList.add('ok'); else if (idx === T.sel) el.classList.add('bad'); }
    el.onclick = () => pick(idx, b); body.append(el);
  });
  if (T.sel !== null) {
    const n = document.createElement('button'); n.className = 'btn sm'; n.style.marginTop = '8px';
    n.textContent = T.i + 1 < T.order.length ? t('next') : t('result');
    n.onclick = () => { T.i++; T.sel = null; T.i < T.order.length ? showQ() : finish(); };
    body.append(n);
  }
  [1, 2].forEach(d => { const nb = getBank(T.key)[T.order[T.i + d]]; if (nb && (nb.ol || 'en') !== lang && !nb.q[lang]) ensureLang(nb, lang); });
}
function pick(idx, b) { if (T.sel !== null) return; T.sel = idx; if (idx === b.a) T.score++; else T.wrong.push([T.order[T.i], idx]); saveP(T.i + 1); showQ(); }
function saveP(next) { const P = prog(); P[T.key] = { order: T.order, i: next, score: T.score, sec: T.sec, ts: Date.now(), wrong: T.wrong }; setProg(P); }
function saveOnExit() { if (!T || T.finished) return; const next = T.sel !== null ? T.i + 1 : T.i; if (next > 0) saveP(next); }
function finish() {
  clearInterval(timer); T.finished = true;
  const n = T.order.length, pct = Math.round(T.score / n * 100);
  const msg = pct >= 80 ? t('m1') : pct >= 50 ? t('m2') : t('m3');
  $('#tBar').style.width = '100%'; $('#tCount').textContent = t('done');
  $('#tBody').innerHTML = `<div class="result"><div class="big grad">${T.score} / ${n}</div><p>${t('sc', { p: pct })} ${msg}</p>
    <div class="racts"><button class="btn sm ghost" id="rvBtn">📋 ${t('x_rev')} (${T.wrong.length})</button>${T.wrong.length ? `<button class="btn sm ghost" id="rtBtn">🔁 ${t('x_retryW')}</button>` : ''}<button class="btn sm ghost" id="cdBtn">🖼️ ${t('x_card')}</button><button class="btn sm wa" id="waBtn">${t('x_share')}</button></div>
    <div class="review" id="rvBox" hidden></div><button class="btn" id="again">${t('back')}</button></div>`;
  $('#again').onclick = closeTest;
  $('#rvBtn').onclick = () => { const bx = $('#rvBox'); bx.hidden = !bx.hidden; if (!bx.hidden) paintReview(); };
  if ($('#rtBtn')) $('#rtBtn').onclick = () => { const key = T.key, only = T.wrong.map(w => w[0]); closeTest(); setTimeout(() => begin(key, null, only), 300); };
  $('#cdBtn').onclick = () => resultCard();
  $('#waBtn').onclick = () => {
    const ch = T.key === 'SAT' ? t('sat') : ttl([...CCC, ...OL].find(c => c[0] === T.key));
    const txt = `🎓 ${(user && user.name) || 'Student'} - ${ch}: ${T.score}/${n} (${pct}%)\nACCESS COMPUTER EDUCATION CENTRE\n${location.href.split('#')[0]}`;
    window.open('https://wa.me/?text=' + encodeURIComponent(txt), '_blank');
  };
  const P = prog(); delete P[T.key]; setProg(P);
  if (!T.retry) {
    const B = store.get('acec_best', {}); if (!B[T.key] || pct > B[T.key].p) { B[T.key] = { s: T.score, n, p: pct }; store.set('acec_best', B); renderTests(); }
    if (T.key === 'SAT') saveScore(T.score);
  }
  if (pct >= 80) confetti();
}
async function paintReview() {
  const box = $('#rvBox'), bank = getBank(T.key);
  if (!T.wrong.length) { box.textContent = t('x_noWrong'); return; }
  box.textContent = t('x_trIng');
  const items = T.wrong.map(([bi, sel]) => ({ b: bank[bi], sel }));
  if (items.some(x => (x.b.ol || 'en') !== lang && !x.b.q[lang])) await Promise.all(items.map(x => ensureLang(x.b, lang)));
  box.innerHTML = '';
  items.forEach((x, k) => {
    const d = document.createElement('div'), o = oOf(x.b); d.className = 'rv';
    const q = document.createElement('div'); q.className = 'rq'; q.textContent = (k + 1) + '. ' + qOf(x.b);
    const y = document.createElement('div'); y.className = 'ry'; y.textContent = '✗ ' + t('x_yourA') + ': ' + o[x.sel];
    const r = document.createElement('div'); r.className = 'rr'; r.textContent = '✓ ' + t('x_rightA') + ': ' + o[x.b.a];
    d.append(q, y, r); box.append(d);
  });
}
function confetti() {
  const cols = ['#ff9f1c', '#ff5f6d', '#8b5cf6', '#2ec4b6', '#fbbf24'], box = document.createElement('div'); box.className = 'confetti';
  for (let i = 0; i < 70; i++) { const p = document.createElement('i'); p.style.cssText = `left:${Math.random() * 100}%;background:${cols[i % 5]};animation-delay:${Math.random() * .8}s;animation-duration:${2 + Math.random() * 1.8}s`; box.append(p); }
  document.body.append(box); setTimeout(() => box.remove(), 4300);
}
async function resultCard() {
  try { await document.fonts.ready; } catch {}
  const n = T.order.length, pct = Math.round(T.score / n * 100), W = 1080, H = 1080, c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d'), g = x.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#0a0f1f'); g.addColorStop(.6, '#2a1a5e'); g.addColorStop(1, '#ff5f6d'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.strokeStyle = 'rgba(255,255,255,.28)'; x.lineWidth = 6; x.strokeRect(40, 40, W - 80, H - 80);
  x.textAlign = 'center';
  const F = (w, z) => { x.font = w + ' ' + z + 'px Poppins,"Noto Sans Devanagari",sans-serif'; };
  const fit = (txt, w, z, wt) => { do { F(wt, z); z -= 2; } while (x.measureText(txt).width > w && z > 18); };
  const ch = T.key === 'SAT' ? t('sat') : ttl([...CCC, ...OL].find(q => q[0] === T.key));
  x.fillStyle = '#fff'; fit('ACCESS COMPUTER EDUCATION CENTRE', W - 160, 46, 700); x.fillText('ACCESS COMPUTER EDUCATION CENTRE', W / 2, 150);
  x.fillStyle = '#ffb347'; F(600, 34); x.fillText(lang === 'hi' ? 'रिज़ल्ट कार्ड' : 'RESULT CARD', W / 2, 212);
  x.fillStyle = '#fff'; fit((user && user.name) || 'Student', W - 200, 64, 700); x.fillText((user && user.name) || 'Student', W / 2, 360);
  x.fillStyle = '#c9d2ff'; fit(ch, W - 200, 38, 500); x.fillText(ch, W / 2, 425);
  x.fillStyle = '#fff'; F(800, 230); x.fillText(T.score + '/' + n, W / 2, 690);
  x.fillStyle = '#2ec4b6'; F(700, 80); x.fillText(pct + '%', W / 2, 790);
  x.fillStyle = 'rgba(255,255,255,.15)'; x.fillRect(180, 830, W - 360, 22); x.fillStyle = '#ff9f1c'; x.fillRect(180, 830, (W - 360) * pct / 100, 22);
  x.fillStyle = '#fff'; F(500, 30); x.fillText(new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }), W / 2, 920);
  x.fillStyle = '#c9d2ff'; F(500, 26); x.fillText('Bachhrawan, Raebareli  |  6393512412', W / 2, 985);
  c.toBlob(async blob => {
    const file = new File([blob], 'result-card.png', { type: 'image/png' });
    try { if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Result' }); return; } } catch { return; }
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'result-card.png'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); toast('✅ Result card download ho gaya');
  });
}
function closeTest() {
  clearInterval(timer); closeModal('testModal'); testOpen = false;
  if (history.state && history.state.test) { skipPop = true; history.back(); }
}
async function tryExit() {
  if (!testOpen || dlgRes) return;
  if (T && T.finished) return closeTest();
  const c = await ask(t('exitT'), t('exitQ'), [{ t: t('cancel'), c: 'ghost' }, { t: t('yes'), c: 'danger' }]);
  if (c === 1) { saveOnExit(); closeTest(); }
}

/* ===== Saturday leaderboard ===== */
function saveScore(score) {
  const lb = store.get('acec_lb', []), i = lb.findIndex(x => x.mob === user.mob);
  if (i >= 0) { if (score > lb[i].score) lb[i].score = score; } else lb.push({ name: user.name, mob: user.mob, score });
  store.set('acec_lb', lb); paintLB();
}
function paintLB() {
  const lb = store.get('acec_lb', []).sort((a, b) => b.score - a.score).slice(0, 10), body = $('#lbBody');
  body.innerHTML = '';
  if (!lb.length) { body.innerHTML = `<tr><td colspan="3" class="empty">${t('empty')}</td></tr>`; return; }
  lb.forEach((r, i) => {
    const tr = document.createElement('tr'), c = [(i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1), r.name, r.score];
    c.forEach(v => { const td = document.createElement('td'); td.textContent = v; tr.append(td); }); body.append(tr);
  });
}

/* ===== Search ===== */
function jump(id) { const e = $('#' + id); if (e) e.scrollIntoView({ behavior: 'smooth' }); }
let _qi = [], _ql = null;
function buildIdx() {
  const items = [], chTitle = k => { const c = [...CCC, ...OL].find(x => x[0] === k); return c ? ttl(c) : ''; };
  [...CCC, ...OL].forEach(c => items.push({ k: 'tTest', ic: '📝', t: ttl(c), h: (c[1] + ' ' + (CH_HI[c[0]] || '') + ' test ccc o level olevel').toLowerCase(), go: () => openTest(c[0]) }));
  items.push({ k: 'tTest', ic: '🏆', t: t('sat'), h: 'saturday test weekly mock शनिवार टेस्ट', go: () => openTest('SAT') });
  COURSES.forEach(c => items.push({ k: 'tCourse', ic: c[0], t: c[1], sub: c[2], h: (c[1] + ' ' + c[2] + ' course').toLowerCase(), go: () => jump('courses') }));
  [['faculty', '👨‍🏫', 'faculty teacher mentor sir madam फैकल्टी शिक्षक', 'faculty'], ['typing', '⌨️', 'typing game speed टाइपिंग गेम', 'typing'], ['saturday', '🥇', 'leaderboard rank topper लीडरबोर्ड', 'lb'], ['gallery', '🖼️', 'gallery photos library फोटो गैलरी', 'gallery'], ['contact', '📞', 'contact phone whatsapp address संपर्क फोन', 'contact'], ['olcode', '💻', 'o level m2-r5 coding html css javascript कोडिंग', 'olcode']]
    .forEach(s => items.push({ k: 'tSec', ic: s[1], t: t(s[3]), h: s[2], go: () => jump(s[0]) }));
  if (_ql !== lang) { _ql = lang; _qi = []; Object.keys(QB).forEach(k => QB[k].forEach(q => _qi.push({ k: 'tQ', ic: '❓', t: qOf(q), sub: chTitle(k), h: ((q.q.en || '') + ' ' + (q.q.hi || '')).toLowerCase(), go: () => openTest(k) }))); }
  items.push(..._qi);
  return items;
}
function renderRes(q) {
  const box = $('#sRes'); box.innerHTML = ''; q = (q || '').trim().toLowerCase();
  const all = buildIdx(); let list;
  if (!q) { const d = document.createElement('div'); d.className = 'sh'; d.textContent = t('sugg'); box.append(d); list = all.filter(x => x.k === 'tTest').slice(0, 6); }
  else { const tk = q.split(/\s+/); let qc = 0; list = all.filter(x => tk.every(w => x.h.includes(w)) && (x.k !== 'tQ' || ++qc <= 5)).slice(0, 12); }
  if (!list.length) { box.innerHTML = `<div class="sno">${t('noRes')}</div>`; return; }
  list.forEach((x, n) => {
    const b = document.createElement('button'); b.className = 'sit' + (n ? '' : ' f');
    b.innerHTML = '<i></i><span><b></b><small></small></span><em></em>';
    b.querySelector('i').textContent = x.ic; b.querySelector('b').textContent = x.t; b.querySelector('small').textContent = x.sub || ''; b.querySelector('em').textContent = t(x.k);
    b.onclick = () => { closeModal('searchModal'); x.go(); }; box.append(b);
  });
}
function openSearch() { openModal('searchModal'); $('#sInp').value = ''; renderRes(''); setTimeout(() => $('#sInp').focus(), 60); }

/* ===== Apply language everywhere ===== */
function applyLang() {
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  $$('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n));
  $$('[data-i18n-ph]').forEach(e => e.placeholder = t(e.dataset.i18nPh));
  $$('[data-hi]').forEach(e => e.textContent = lang === 'hi' ? e.dataset.hi : e.dataset.en);
  $$('.btn-lang').forEach(b => b.classList.toggle('on', b.dataset.l === lang));
  $('#langLbl').textContent = lang === 'hi' ? 'हिं' : 'EN';
  $('#tLangL').textContent = lang === 'hi' ? 'English' : 'हिन्दी';
  $$('#langMenu button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
  renderTests(); paintUser(); paintResume(); paintLB();
  if (testOpen && T) { paintTitle(); if (!T.finished) showQ(); }
  if ($('#searchModal').classList.contains('open')) renderRes($('#sInp').value);
  gtSync();
}

/* ===== Typing game ===== */
const WORDS = ['computer', 'keyboard', 'internet', 'python', 'html', 'memory', 'monitor', 'windows', 'network', 'browser', 'storage', 'cursor', 'program', 'shortcut', 'database', 'router', 'server', 'mouse'];
let G = null;
function gameStart() {
  endGame(true);
  G = { score: 0, lives: 3, words: [], speed: 1.2 };
  $('#gOverlay').classList.add('hide'); $('#gInput').disabled = false; $('#gInput').value = ''; $('#gInput').focus();
  paintHud();
  G.spawn = setInterval(spawn, 1700);
  G.tick = setInterval(tick, 40);
}
function paintHud() { $('#gScore').textContent = G.score; $('#gLives').textContent = '❤'.repeat(Math.max(G.lives, 0)) || '💔'; }
function spawn() {
  const el = document.createElement('div'); el.className = 'fw'; el.textContent = WORDS[Math.random() * WORDS.length | 0];
  $('#arena').append(el);
  el.style.left = Math.random() * (($('#arena').clientWidth) - el.offsetWidth - 10) + 'px';
  G.words.push({ el, y: -30, w: el.textContent });
}
function tick() {
  const h = $('#arena').clientHeight;
  G.words.slice().forEach(o => {
    o.y += G.speed; o.el.style.top = o.y + 'px';
    if (o.y > h - 30) { o.el.remove(); G.words.splice(G.words.indexOf(o), 1); G.lives--; paintHud(); if (G.lives <= 0) endGame(); }
  });
}
function endGame(silent) {
  if (!G) return;
  clearInterval(G.spawn); clearInterval(G.tick); G.words.forEach(o => o.el.remove());
  $('#gInput').disabled = true;
  if (!silent) {
    const o = $('#gOverlay'); o.classList.remove('hide');
    o.querySelector('h3').textContent = 'Game Over! Score: ' + G.score; o.querySelector('p').textContent = 'Phir se khelkar score badhayein.';
    $('#gStart').textContent = 'Play Again';
  }
  G = silent ? null : G;
}
$('#gStart').onclick = gameStart;
$('#gInput').oninput = e => {
  if (!G) return;
  const v = e.target.value.trim().toLowerCase(), hit = G.words.find(o => o.w === v);
  if (hit) { hit.el.remove(); G.words.splice(G.words.indexOf(hit), 1); G.score++; if (G.score % 5 === 0) G.speed += .25; e.target.value = ''; paintHud(); }
};

/* ===== UI misc ===== */
function dismiss(m) {
  if (m.id === 'dlg') { if (dlgRes) dlgRes(-1); return; }
  if (m.id === 'testModal') { tryExit(); return; }
  m.classList.remove('open');
}
$$('[data-close]').forEach(b => b.onclick = () => dismiss(b.closest('.modal')));
$$('.modal').forEach(m => m.onclick = e => { if (e.target === m) dismiss(m); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const o = ['dlg', 'searchModal', 'loginModal', 'testModal'].map(id => $('#' + id)).find(m => m.classList.contains('open'));
    if (o) dismiss(o);
    $('#langMenu').classList.remove('open');
  }
  const typing = /INPUT|TEXTAREA/.test((e.target.tagName || ''));
  if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && !typing)) { e.preventDefault(); openSearch(); }
});

/* Test: back button / refresh / tab close par bhi confirm */
addEventListener('popstate', () => {
  if (skipPop) { skipPop = false; return; }
  if (testOpen) { history.pushState({ test: 1 }, ''); tryExit(); }
});
addEventListener('beforeunload', e => { if (testOpen && T && !T.finished) { saveOnExit(); e.preventDefault(); e.returnValue = ''; } });

/* Buttons */
$('#cccGrid').onclick = $('#olGrid').onclick = e => { const b = e.target.closest('[data-test]'); if (b) openTest(b.dataset.test); };
$('#satBtn').onclick = () => openTest('SAT');
$('#resumeBtn').onclick = () => openTest($('#resumeBtn').dataset.k);
$('#searchBtn').onclick = openSearch;
$('#sInp').oninput = e => renderRes(e.target.value);
$('#sInp').onkeydown = e => { if (e.key === 'Enter') { const f = $('#sRes .sit'); if (f) f.click(); } };

/* Language menu */
$('#langBtn').onclick = e => { e.stopPropagation(); $('#langMenu').classList.toggle('open'); };
$$('#langMenu button').forEach(b => b.onclick = () => { lang = b.dataset.lang; store.set('acec_lang', lang); $('#langMenu').classList.remove('open'); applyLang(); toast(lang === 'hi' ? 'भाषा: हिन्दी' : 'Language: English'); });
document.addEventListener('click', () => $('#langMenu').classList.remove('open'));

$('#tLang').onclick = () => { lang = lang === 'hi' ? 'en' : 'hi'; store.set('acec_lang', lang); applyLang(); };

/* Theme */
let theme = store.get('acec_theme', 'dark');
function setTheme(m) { theme = m; document.documentElement.dataset.theme = m; store.set('acec_theme', m); $$('#themeBtn,#themeBtn2').forEach(b => b.textContent = m === 'dark' ? '☀️' : '🌙'); }
$$('#themeBtn,#themeBtn2').forEach(b => b.onclick = () => setTheme(theme === 'dark' ? 'light' : 'dark'));
setTheme(theme);

/* Menu, year, reveal */
$('#burger').onclick = () => $('#menu').classList.toggle('open');
$$('#menu a').forEach(a => a.onclick = () => $('#menu').classList.remove('open'));
$('#yr').textContent = new Date().getFullYear();
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
$$('.reveal').forEach(el => io.observe(el));

applyLang();

/* ===== SLIDER ===== */
/* Photos change/add karne ke liye yahan list badlein (image file same folder me rakhein) */
const SLIDES = [
  { img: 'slide4.jpeg', tag: 'lets,seen Bachhrawan', title: 'Saaf-suthra apna bachhrawan', pos: 'center' },
  { img: 'slide6.jpeg', tag: 'Coaching side ', title: 'Special look', pos: 'center 30%' },
  { img: 'slide1.jpeg', tag: 'Coaching Centre', title: 'welcome to my coaching', pos: 'center' },
  { img: 'slide2.jpeg', tag: 'Library', title: 'Books ka Bada Collection', pos: 'center' },
  { img: 'slide5.jpeg', tag: 'Sigma boy', title: 'Practicle + theory expert teacher', pos: 'center' },
  { img: 'slide3.jpeg', tag: 'Railway station', title: 'Welcome to railway station', pos: 'center side' },
  { img: 'sigma.jpeg', tag: 'Website creator', title: 'crush is not important in my life but cash is very important', pos: 'center side' },
  { img: 'slide8.jpeg', tag: 'Bachhrawan', title: 'welcome to bachhrawan', pos: 'center side' },
  { img: 'slide9.jpeg', tag: 'Bachhrawan', title: 'Best look in railway station side ', pos: 'center side' }
  
];
(function () {
  const wrap = $('#hSlides'), cap = $('#hCap'), dots = $('#sDots'), prog = $('#sProg'), hero = $('#home');
  let i = 0, t, x0 = null;
  wrap.innerHTML = SLIDES.map(s => `<div class="hs" style="background-image:url('${s.img}');background-position:${s.pos}"></div>`).join('');
  dots.innerHTML = SLIDES.map((_, k) => `<button aria-label="Slide ${k + 1}"></button>`).join('');
  const S = [...wrap.children], D = [...dots.children];
  function restart() {
    clearInterval(t); prog.style.animation = 'none'; void prog.offsetWidth; prog.style.animation = '';
    t = setInterval(() => go(i + 1), 5500);
  }
  function go(n) {
    i = (n + S.length) % S.length;
    S.forEach((s, k) => s.classList.toggle('on', k === i));
    D.forEach((d, k) => d.classList.toggle('on', k === i));
    cap.innerHTML = `<span>${SLIDES[i].tag}</span><b>${SLIDES[i].title}</b>`;
    restart();
  }
  $('#sPrev').onclick = () => go(i - 1);
  $('#sNext').onclick = () => go(i + 1);
  D.forEach((d, k) => d.onclick = () => go(k));
  hero.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  hero.addEventListener('touchend', e => { if (x0 === null) return; const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) go(d < 0 ? i + 1 : i - 1); x0 = null; });
  go(0);
})();

/* ===== Typing text ===== */
(function () {
  const w = ['CCC', 'O-Level', 'ADCA & PGDCA', 'Tally & MS Office', 'Python & Web Design'], el = $('#typed');
  let a = 0, b = 0, del = false;
  (function loop() {
    const s = w[a]; el.textContent = s.slice(0, b);
    if (!del && b === s.length) { del = true; return setTimeout(loop, 1400); }
    if (del && b === 0) { del = false; a = (a + 1) % w.length; }
    b += del ? -1 : 1; setTimeout(loop, del ? 45 : 90);
  })();
})();

/* ===== Particles (hero) ===== */
(function () {
  const c = $('#fx'), x = c.getContext('2d'); let W, H, P = [];
  function size() {
    W = c.width = c.offsetWidth; H = c.height = c.offsetHeight;
    P = Array.from({ length: W < 700 ? 28 : 60 }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .6, vy: (Math.random() - .5) * .6 }));
  }
  size(); addEventListener('resize', size);
  (function draw() {
    x.clearRect(0, 0, W, H);
    P.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
      x.fillStyle = 'rgba(255,159,28,.85)'; x.beginPath(); x.arc(p.x, p.y, 2, 0, 6.283); x.fill();
      for (let j = i + 1; j < P.length; j++) {
        const q = P[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 120) { x.strokeStyle = `rgba(46,196,182,${.35 * (1 - d / 120)})`; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke(); }
      }
    });
    requestAnimationFrame(draw);
  })();
})();

/* ===== Counters, marquee, gallery ===== */
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const el = e.target, n = +el.dataset.n, s = el.dataset.s || ''; let k = 0; const st = n / 60;
  (function f() { k = Math.min(k + st, n); el.textContent = Math.floor(k) + s; if (k < n) requestAnimationFrame(f); })();
}), { threshold: .6 });
$$('[data-n]').forEach(e => cio.observe(e));

$('#mq').innerHTML = [...COURSES, ...COURSES].map(c => `<span>${c[1]}</span>`).join('');

$('#gal').innerHTML = SLIDES.map((s, k) => `<figure data-k="${k}"><img src="${s.img}" alt="${s.title}" loading="lazy" style="object-position:${s.pos}"><figcaption>${s.title}</figcaption></figure>`).join('');
$$('#gal figure').forEach(f => f.onclick = () => { $('#lbImg').src = SLIDES[f.dataset.k].img; $('#lb').classList.add('open'); });
$('#lb').onclick = () => $('#lb').classList.remove('open');
document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#lb').classList.remove('open'); });

/* ===== Scroll progress, top button, preloader, 3D tilt ===== */
addEventListener('scroll', () => {
  const h = document.documentElement;
  $('#sp').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  $('#toTop').classList.toggle('show', h.scrollTop > 600);
}, { passive: true });
$('#toTop').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
addEventListener('load', () => $('#pre').classList.add('hide'));
setTimeout(() => $('#pre').classList.add('hide'), 3000);

/* ===== 3D tilt on cards (re-render ke baad bhi chalta hai) ===== */
if (matchMedia('(hover:hover)').matches) {
  let tc = null;
  document.addEventListener('mousemove', e => {
    const c = e.target.closest ? e.target.closest('.card') : null;
    if (tc && tc !== c) { tc.style.transition = ''; tc.style.transform = ''; }
    tc = c; if (!c) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transition = 'transform .1s'; c.style.transform = `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateY(-6px)`;
  });// ===== Student Review & Bad Word Filter System =====
document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const errorBox = document.getElementById('expanded-error' || 'badWordError');

    // List of Bad Words to filter out (Aap isme aur bhi words add kar sakte hain)
    const badWords = ['gali', 'faltu', 'bekar', 'badtameez', 'chutiya', 'harami', 'kamine', 'madarchod', 'bhenchod'];

    function containsBadWord(text) {
        const lowerText = text.toLowerCase();
        return badWords.some(word => lowerText.includes(word));
    }

    // Load saved reviews from localStorage on startup
    loadReviews();

    function loadReviews() {
        const savedReviews = JSON.parse(localStorage.getItem('access_centre_reviews')) || [];
        reviewsContainer.innerHTML = '';
        
        // Agar koi review nahi hai toh default sample dikhayein
        if(savedReviews.length === 0) {
            reviewsContainer.innerHTML = `
                <div class="review-card">
                    <h4>Ajay Kumar</h4>
                    <span class="course-tag">O-Level / Web Developer & Computer Instructor</span>
                    <p>किस्मत की लकीरों पर नहीं, मैं तो अपनी मेहनत और कोडिंग पर विश्वास रखता हूँ,

कंप्यूटर की स्क्रीन पर जो आज मेरा नाम चमकता है, उसके पीछे मैं अपने Family और Mentor's का हाथ रखता हूँ!

Manoj sir और Praveen sir के मार्गदर्शन ने मुझे बनाया है एक असली डेवलपर,

Sudha ma'am और परिवार के आशीर्वाद से ही आज 'Sigmaboy' आईटी की दुनिया पर राज करता है </p>
                </div>
            `;
            return;
        }

        savedReviews.forEach(rev => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <h4>${escapeHtml(rev.name)}</h4>
                <span class="course-tag">${escapeHtml(rev.course)}</span>
                <p>${escapeHtml(rev.text)}</p>
            `;
            reviewsContainer.prepend(card);
        });
    }

    // Handle Form Submit (Website par save karne ke liye)
    if(reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('revName').value.trim();
            const course = document.getElementById('revCourse').value.trim();
            const text = document.getElementById('revText').value.trim();

            const fullTextCheck = name + " " + course + " " + text;

            if(containsBadWord(fullTextCheck)) {
                showError("⚠️ Error: Aapke message me kuch anuchit (abusive) shabd paye gaye hain. Kripya sudhar karein!");
                return;
            }

            hideError();

            const newReview = { name, course, text };
            let savedReviews = JSON.parse(localStorage.getItem('access_centre_reviews')) || [];
            savedReviews.push(newReview);
            localStorage.setItem('access_centre_reviews', JSON.stringify(savedReviews));

            loadReviews();
            reviewForm.reset();
            alert("Dhanyawad! Aapka review successfully website par live kar diya gaya hai.");
        });
    }

    // Handle WhatsApp Direct Send Button (Number: 7800703908)
    if(whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const name = document.getElementById('revName').value.trim();
            const course = document.getElementById('revCourse').value.trim();
            const text = document.getElementById('revText').value.trim();

            if(!name || !course || !text) {
                alert("Kripya pehle Naam, Course aur Review box bhar dein!");
                return;
            }

            const fullTextCheck = name + " " + course + " " + text;
            if(containsBadWord(fullTextCheck)) {
                alert("⚠️ Error: Aapke message me galat shabd hain, WhatsApp par nahi bheja ja sakta.");
                return;
            }

            const waMessage = `*New Student Review*%0A*Naam:* ${encodeURIComponent(name)}%0A*Course:* ${encodeURIComponent(course)}%0A*Review:* ${encodeURIComponent(text)}`;
            const waUrl = `https://wa.me/917800703908?text=${waMessage}`;
            window.open(waUrl, '_blank');
        });
    }

    function showError(msg) {
        let errEl = document.getElementById('badWordError');
        if(errEl) {
            errEl.style.display = 'block';
            errEl.textContent = msg;
        }
    }

    function hideError() {
        let errEl = document.getElementById('badWordError');
        if(errEl) {
            errEl.style.display = 'none';
        }
    }

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
});
}
// ==================== TRAFFIC & ACTIVE USER TRACKER ====================
(function trackWebsiteVisitors() {
    const todayStr = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const todayDay = new Date().toLocaleDateString('hi-IN', { weekday: 'long' });

    let analyticsData = JSON.parse(localStorage.getItem('access_analytics')) || {
        totalVisits: 0,
        dailyVisits: {}
    };

    // Total visits badhao
    analyticsData.totalVisits += 1;

    // Aaj ki date ke visits count karo
    if (analyticsData.dailyVisits[todayStr]) {
        analyticsData.dailyVisits[todayStr].count += 1;
    } else {
        analyticsData.dailyVisits[todayStr] = {
            day: todayDay,
            count: 1
        };
    }

    // Storage me save karo
    localStorage.setItem('access_analytics', JSON.stringify(analyticsData));

    // UI render function for Admin
    window.renderAdminAnalytics = function() {
        document.getElementById('today-visitors').innerText = analyticsData.dailyVisits[todayStr] ? analyticsData.dailyVisits[todayStr].count : 0;
        document.getElementById('total-visitors').innerText = analyticsData.totalVisits;

        const historyContainer = document.getElementById('analytics-history');
        historyContainer.innerHTML = '';

        const dates = Object.keys(analyticsData.dailyVisits).reverse();
        dates.forEach(date => {
            const item = analyticsData.dailyVisits[date];
            const p = document.createElement('p');
            p.style.margin = "5px 0";
            p.style.borderBottom = "1px solid #333";
            p.style.paddingBottom = "4px";
            p.innerHTML = `<span style="color:#00ff88;">📅 ${date} (${item.day}):</span> <strong>${item.count} Active Users</strong>`;
            historyContainer.appendChild(p);
        });
    };
})();
// ==================== SECURE SECRET KEYWORD UNLOCK ====================
let secretKeyBuffer = "";
document.addEventListener('keydown', (e) => {
    secretKeyBuffer += e.key.toLowerCase();
    if (secretKeyBuffer.length > 15) secretKeyBuffer.slice(-15);

    // Agar keyboard par 'sigma' ya 'anshika' type kiya jaye
    if (secretKeyBuffer.includes("sigma") || secretKeyBuffer.includes("anshika")) {
        secretKeyBuffer = ""; // Buffer reset kar do
        
        const adminSec = document.getElementById('admin-analytics');
        if (adminSec) {
            adminSec.style.display = 'block';
            window.renderAdminAnalytics(); // Data load karega
            alert("🔥 Welcome! Traffic Analytics Panel Unlocked Successfully.");
        }
    }
});
// ================= MS Office & Python tabs (ab dono alag-alag chalte hain) =================
function _tabs(secId, evt, name) {
  const sec = document.getElementById(secId);
  sec.querySelectorAll('.mso-tab-content').forEach(x => x.classList.remove('active'));
  sec.querySelectorAll('.mso-tab-btn').forEach(x => x.classList.remove('active'));
  if (name !== 'none') {
    const el = document.getElementById(name); if (el) el.classList.add('active');
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
  }
}
function openMsoTab(evt, name) { _tabs('msoffice', evt, name); }
function openPythonTab(evt, name) { _tabs('python-section', evt, name); }

// ================= O-Level (M2-R5) Coding: HTML / CSS / JavaScript tab =================
$$('.olc-head').forEach(h => h.onclick = () => {
  const it = h.closest('.olc-item'), open = !it.classList.contains('open');
  it.classList.toggle('open', open); h.setAttribute('aria-expanded', open); it.querySelector('.olc-body').hidden = !open;
});
$$('.olc-fig img').forEach(i => i.onclick = () => { $('#lbImg').src = i.currentSrc || i.src; $('#lb').classList.add('open'); });

// ================= Test keyboard shortcuts: 1-4 / A-D option, Enter = next =================
document.addEventListener('keydown', e => {
  if (!testOpen || !T || T.finished || dlgRes || e.ctrlKey || e.altKey || e.metaKey) return;
  if (T.sel === null) {
    let j = '1234'.indexOf(e.key); if (j < 0) j = 'abcd'.indexOf(e.key.toLowerCase());
    const bs = $$('#tBody .opt'); if (j >= 0 && bs[j]) bs[j].click();
  } else if (e.key === 'Enter' || e.key === 'ArrowRight') { const nb = $('#tBody .btn.sm'); if (nb) nb.click(); }
});
