
// ========== Basic navigation ==========
function showSection(id){
  document.querySelectorAll('.section').forEach(s=> s.classList.remove('active'));
  const el = document.getElementById(id);
  if(el) el.classList.add('active');

  // hide results when leaving find page
  if(id !== 'findWorker') document.getElementById('results').innerHTML = '';
}

// Start on home
showSection('home');

// ========== Categories list (single source) ==========
const CATEGORIES = ['Cook','Electrician','Plumber','Site Worker','House Help','Baby Care','Old Age Care','Carpenter','Driver','Farmer','Other'];

// Populate category selects (translations will update text later)
function populateCategorySelects(lang){
  // map of translation keys for categories - translator will replace names
  const aw = document.getElementById('aw_category');
  const fw = document.getElementById('fw_category');
  [aw, fw].forEach(sel=>{
    sel.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.setAttribute('data-cat', cat);
      opt.textContent = cat; // will be translated later
      sel.appendChild(opt);
    });
  });
}

// call initially
populateCategorySelects();

// ========== Translations dictionary ==========
const TRANSLATIONS = {
  en: {
    home: "Home", addWorker: "Add Worker", findWorker: "Find Worker", login: "Login", help: "Help",
    intro: "Choose a service, fill a few details and get workers nearby — easy for everyone.",
    addDesc: "Register yourself as a worker (Aadhaar photo allowed)", findDesc: "Tell us what you need and where — we show nearby workers",
    loginDesc: "Access your saved requests and profile", helpDesc: "Short videos and tips for registration",
    name: "Name", phone: "Phone", email: "Email (optional)", address: "Address", city: "City", pincode: "Pincode",
    category: "Category", gender: "Gender", experience: "Experience (years)", availability: "Availability (timings)",
    aadhaarNo: "Aadhaar Number", aadhaarPhoto: "Upload Aadhaar Photo", profilePhoto: "Profile Photo (optional)",
    submit: "Submit", back: "Back", any: "Any", male: "Male", female: "Female",
    locPl: "Enter city or pincode", namePl: "Enter full name", phonePl: "Enter 10-digit phone", emailPl: "Enter email",
    addressPl: "Enter address", cityPl: "Enter city", pinPl: "Enter pincode", aadhaarPl: "Enter Aadhaar number",
    availPl: "e.g. 9am-5pm", contactPl: "Enter your contact number", needTimePl: "e.g. Tomorrow morning",
    selectCategory: "Select Category", location: "Location", search: "Search",
    helpText: "Watch short tutorials to know how to register and find workers.",
    addedSuccess: "✅ Worker registered (demo).", addError: "⚠️ Please fill required fields correctly.",
    searchNoContact: "⚠️ Please enter your contact number so we can share results.",
    searchResultsTitle: "Search results",
    noResults: "No workers found matching your criteria.",
    loginSuccess: "✅ Login successful (demo).", loginError: "❌ Invalid login details."
  },

  hi: {
    home: "होम", addWorker: "मज़दूर जोड़ें", findWorker: "मज़दूर खोजें", login: "लॉगिन", help: "मदद",
    intro: "एक सेवा चुनें, कुछ विवरण भरें और पास के मजदूर देखें — सभी के लिए आसान।",
    addDesc: "एक मजदूर के रूप में रजिस्टर करें (आधार फोटो संभव है)", findDesc: "बताएं क्या चाहिए और कहाँ — हम पास के मजदूर दिखाते हैं",
    loginDesc: "अपने रिकॉर्ड और अनुरोध देखें", helpDesc: "रजिस्ट्रेशन के छोटे वीडियो और सलाह",
    name: "नाम", phone: "फोन", email: "ईमेल (वैकल्पिक)", address: "पता", city: "शहर", pincode: "पिनकोड",
    category: "श्रेणी", gender: "लिंग", experience: "अनुभव (साल)", availability: "उपलब्धता (समय)",
    aadhaarNo: "आधार नंबर", aadhaarPhoto: "आधार फोटो अपलोड करें", profilePhoto: "प्रोफ़ाइल फोटो (वैकल्पिक)",
    submit: "जमा करें", back: "वापस", any: "कोई भी", male: "पुरुष", female: "महिला",
    locPl: "शहर या पिनकोड डालें", namePl: "पूरा नाम डालें", phonePl: "10 अंकों का फोन", emailPl: "ईमेल डालें",
    addressPl: "पता डालें", cityPl: "शहर डालें", pinPl: "पिनकोड डालें", aadhaarPl: "आधार नंबर डालें",
    availPl: "जैसे 9am-5pm", contactPl: "अपना संपर्क नंबर डालें", needTimePl: "जैसे कल सुबह",
    selectCategory: "श्रेणी चुनें", location: "स्थान", search: "खोजें",
    helpText: "रजिस्टर और खोजना सीखने के लिए छोटे वीडियो देखें।",
    addedSuccess: "✅ मजदूर पंजीकृत (डेमो)।", addError: "⚠️ कृपया सभी आवश्यक फ़ील्ड सही भरें।",
    searchNoContact: "⚠️ कृपया संपर्क नंबर डालें ताकि परिणाम साझा कर सकें।",
    searchResultsTitle: "खोज परिणाम",
    noResults: "कोई मजदूर नहीं मिला।",
    loginSuccess: "✅ लॉगिन सफल (डेमो)।", loginError: "❌ गलत लॉगिन विवरण।"
  },

  mr: {
    home: "मुख्यपृष्ठ", addWorker: "कामगार जोडा", findWorker: "कामगार शोधा", login: "लॉगिन", help: "मदत",
    intro: "सेवा निवडा, तपशील भरा आणि जवळचे कामगार पाहा.",
    addDesc: "कामगार म्हणून नोंदणी करा (आधार फोटो चालेल)", findDesc: "आपल्याला काय आणि कोठे हवे ते सांगा — आम्ही जवळचे कामगार दाखवू",
    loginDesc: "आपले रेकॉर्ड आणि विनंत्या पाहा", helpDesc: "नोंदणीवर छोटे व्हिडिओ आणि टिप्स",
    name: "नाव", phone: "फोन", email: "ईमेल (ऐच्छिक)", address: "पत्ता", city: "शहर", pincode: "पिनकोड",
    category: "वर्ग", gender: "लिंग", experience: "अनुभव (वर्ष)", availability: "उपलब्धता (वेळ)",
    aadhaarNo: "आधार क्रमांक", aadhaarPhoto: "आधार फोटो अपलोड करा", profilePhoto: "प्रोफाइल फोटो (ऐच्छिक)",
    submit: "सबमिट करा", back: "परत", any: "कोणतेही", male: "पुरुष", female: "स्त्री",
    locPl: "शहर किंवा पिनकोड टाका", namePl: "पूर्ण नाव टाका", phonePl: "10 अंकाचा फोन", emailPl: "ईमेल टाका",
    addressPl: "पत्ता टाका", cityPl: "शहर टाका", pinPl: "पिनकोड टाका", aadhaarPl: "आधार नोंद करा",
    availPl: "उदा. 9am-5pm", contactPl: "आपला संपर्क क्रमांक टाका", needTimePl: "उदा. उद्या सकाळी",
    selectCategory: "वर्ग निवडा", location: "ठिकाण", search: "शोधा",
    helpText: "नोंदणी आणि शोध कसे करावे हे जाणून घेण्यासाठी व्हिडिओ पहा.",
    addedSuccess: "✅ कामगार नोंदवला (डेमो).", addError: "⚠️ कृपया आवश्यक माहिती पूर्ण करा.",
    searchNoContact: "⚠️ कृपया संपर्क क्रमांक द्या.",
    searchResultsTitle: "शोध परिणाम", noResults: "कोणतेही कामगार सापडले नाहीत.",
    loginSuccess: "✅ लॉगिन यशस्वी (डेमो).", loginError: "❌ चुकीचा तपशील."
  },

  bn: {
    home: "হোম", addWorker: "কর্মী যোগ করুন", findWorker: "কর্মী খুঁজুন", login: "লগইন", help: "সাহায্য",
    intro: "একটি সার্ভিস বেছে নিন, কয়েকটি তথ্য দিন এবং নিকটস্থ কর্মী দেখুন।",
    addDesc: "কর্মী হিসাবে রেজিস্টার করুন (আধার ছবি গ্রহণযোগ্য)", findDesc: "আপনি কি এবং কোথায় জানতে বলুন — আমরা নিকটস্থ কর্মী দেখাবো",
    loginDesc: "আপনার রেকর্ড ও অনুরোধ দেখুন", helpDesc: "রেজিস্ট্রেশন নিয়ে ছোট ভিডিও ও টিপস",
    name: "নাম", phone: "ফোন", email: "ইমেইল (ঐচ্ছিক)", address: "ঠিকানা", city: "শহর", pincode: "পিনকোড",
    category: "শ্রেণি", gender: "লিঙ্গ", experience: "অভিজ্ঞতা (বছর)", availability: "উপলব্ধ সময়",
    aadhaarNo: "আধার নম্বর", aadhaarPhoto: "আধার ছবি আপলোড করুন", profilePhoto: "প্রোফাইল ছবি (ঐচ্ছিক)",
    submit: "জমা দিন", back: "ফিরে যান", any: "যেকোনো", male: "পুরুষ", female: "মহিলা",
    locPl: "শহর বা পিনকোড দিন", namePl: "সম্পূর্ণ নাম দিন", phonePl: "10 সংখ্যার ফোন", emailPl: "ইমেইল দিন",
    addressPl: "ঠিকানা দিন", cityPl: "শহর দিন", pinPl: "পিনকোড দিন", aadhaarPl: "আধার নম্বর",
    availPl: "যেমন 9am-5pm", contactPl: "আপনার যোগাযোগ নম্বর দিন", needTimePl: "যেমন আগামীকাল সকাল",
    selectCategory: "শ্রেণি নির্বাচন করুন", location: "অবস্থান", search: "সার্চ",
    helpText: "রেজিস্ট্রেশন ও ব্যবহার শিখতে ভিডিও দেখুন।",
    addedSuccess: "✅ কর্মী রেজিস্টার হয়েছে (ডেমো)।", addError: "⚠️ অনুগ্রহ করে সমস্ত প্রয়োজনীয় তথ্য দিন।",
    searchNoContact: "⚠️ অনুগ্রহ করে যোগাযোগ নম্বর দিন।", searchResultsTitle: "অনুসন্ধান ফলাফল", noResults: "কোনো কর্মী পাওয়া যায়নি।",
    loginSuccess: "✅ লগইন সফল (ডেমো)।", loginError: "❌ ভুল বিবরণ।"
  },

  ur: {
    home: "اہم", addWorker: "مزدور شامل کریں", findWorker: "مزدور تلاش کریں", login: "لاگ ان", help: "مدد",
    intro: "ایک سروس منتخب کریں، کچھ تفصیلات دیں اور قریب کے مزدور دیکھیں۔",
    addDesc: "مزدور کے طور پر رجسٹر کریں (آدھار تصویر قابل قبول)", findDesc: "بتائیں کیا چاہیے اور کہاں — ہم قریب کے مزدور دکھائیں گے",
    loginDesc: "اپنے ریکارڈ دیکھیں", helpDesc: "رجسٹریشن کے چھوٹے ویڈیوز اور مشورے",
    name: "نام", phone: "فون", email: "ای میل (اختیاری)", address: "پتہ", city: "شہر", pincode: "پنکوڈ",
    category: "زم��ہ", gender: "جنس", experience: "تجربہ (سال)", availability: "دستیابی (اوقات)",
    aadhaarNo: "آدھار نمبر", aadhaarPhoto: "آدھار تصویر اپ لوڈ کریں", profilePhoto: "پروفائل تصویر (اختیاری)",
    submit: "جمع کریں", back: "واپس", any: "کوئی", male: "مرد", female: "عورت",
    locPl: "شہر یا پنکوڈ درج کریں", namePl: "پورا نام درج کریں", phonePl: "10 ہندسوں کا فون", emailPl: "ای میل درج کریں",
    addressPl: "پتہ درج کریں", cityPl: "شہر درج کریں", pinPl: "پنکوڈ درج کریں", aadhaarPl: "آدھار نمبر درج کریں",
    availPl: "مثلاً 9am-5pm", contactPl: "اپنا رابطہ نمبر درج کریں", needTimePl: "مثلاً کل صبح",
    selectCategory: "زمرہ منتخب کریں", location: "مقام", search: "تلاش",
    helpText: "رجسٹریشن سیکھنے کے لیے ویڈیوز دیکھیں۔",
    addedSuccess: "✅ مزدور رجسٹرڈ (ڈیمو)。", addError: "⚠️ براہ کرم ضروری فیلڈز بھریں۔",
    searchNoContact: "⚠️ براہ کرم رابطہ نمبر درج کریں۔", searchResultsTitle: "تلاش کے نتائج", noResults: "کوئی مزدور نہیں ملا۔",
    loginSuccess: "✅ لاگ ان کامیاب (ڈیمو)。", loginError: "❌ غلط تفصیل۔"
  },

  ta: {
    home: "முகப்பு", addWorker: "ஊழியரை சேர்க்கவும்", findWorker: "ஊழியரை கண்டறி", login: "உள்நுழைவு", help: "உதவி",
    intro: "ஒரு சேவையைத் தேர்ந்தெடுத்து சில விவரங்களை நிரப்பவும் மற்றும் அருகிலுள்ள ஊழியரை காணுங்கள்.",
    addDesc: "ஊழியராக பதிவு செய்யவும் (ஆதார் புகைப்படம் ஏற்றுக்கொள்ளப்படும்)", findDesc: "எங்கே மற்றும் என்ன தேவை என்பதைக் கூறுங்கள் — நாங்கள் அருகிலுள்ள ஊழியர்களை காண்பிப்போம்",
    loginDesc: "உங்கள் பதிவுகளைப் பார்க்கவும்", helpDesc: "பதிவு குறித்த சிறு வீடியோக்கள் மற்றும் குறிப்புகள்",
    name: "பெயர்", phone: "தொலைபேசி", email: "மின்னஞ்சல் (விருப்பம்)", address: "முகவரி", city: "நகரம்", pincode: "பின்கோடு",
    category: "வகை", gender: "பாலினம்", experience: "அனுபவம் (ஆண்டுகள்)", availability: "கிடைக்கும் நேரம்",
    aadhaarNo: "ஆதார் எண்", aadhaarPhoto: "ஆதார் புகைப்படம் பதிவேற்றவும்", profilePhoto: "சுயவிவர புகைப்படம் (விருப்பம்)",
    submit: "சமர்ப்பிக்கவும்", back: "பின்", any: "யாரும்", male: "ஆண்", female: "பெண்",
    locPl: "நகரம் அல்லது பின்கோடு", namePl: "முழு பெயர்", phonePl: "10 இலக்க தொலைபேசி", emailPl: "மின்னஞ்சல்", addressPl: "முகவரி",
    cityPl: "நகரம்", pinPl: "பின்கோடு", aadhaarPl: "ஆதார் எண்", availPl: "உதாரணம் 9am-5pm", contactPl: "உங்கள் தொடர்பு எண்",
    needTimePl: "எ.கா நாளை காலை",
    selectCategory: "வகையை தேர்ந்தெடுக்கவும்", location: "இடம்", search: "தேடு",
    helpText: "பதிவு மற்றும் பயன்பாடு எப்படி என்பது பற்றிய வீடியோக்கள்."
  },

  te: {
    home: "హోమ్", addWorker: "కార్మికుడిని జోడించండి", findWorker: "కార్మికుడిని కనుగొనండి", login: "లాగిన్", help: "సాయం",
    intro: "ఒక సేవను ఎంచుకోండి, కొన్ని వివరాలు ఇవ్వండి మరియు దగ్గరలో ఉన్న కార్మికులను చూడండి.",
    addDesc: "కార్మికుడి గా రిజిస్టర్ అవ్వండి (ఆధార్ ఫోటో స్వీకరించబడుతుంది)", findDesc: "మీకు ఏమి మరియు ఎక్కడ కావాలో చెప్పండి — మేము దగ్గరలోని కార్మికులను చూపిస్తాము",
    loginDesc: "మీ రికార్డులను చూడండి", helpDesc: "రెజిస్ట్రేషన్ గురించి చిన్న వీడియోలు మరియు సూచనలు",
    name: "పేరు", phone: "ఫోన్", email: "ఇమెయిల్ (ఐచ్ఛిక)", address: "చిరునామా", city: "నగరం", pincode: "పిన్ కోడ్",
    category: "శ్రేణి", gender: "లింగం", experience: "అనుభవం (సంవత్సరాలు)", availability: "లభ్యత (సమయాలు)",
    aadhaarNo: "ఆధార్ నెంబరు", aadhaarPhoto: "ఆధార్ ఫోటో అప్లోడ్ చేయండి", profilePhoto: "ప్రొఫైల్ ఫోటో (ఐచ్ఛిక)",
    submit: "సమర్పించండి", back: "బ్యాక్", any: "ఏదైనా", male: "పురు", female: "స్త్రీ",
    locPl: "నగరం లేదా పిన్ కోడ్", namePl: "పూర్తి పేరు", phonePl: "10 అంకెల ఫోన్", emailPl: "ఇమెయిల్", addressPl: "చిరునామా",
    cityPl: "నగరం", pinPl: "పిన్ కోడ్", aadhaarPl: "ఆధార్ నెంబరు", availPl: "ఉదాహరణ 9am-5pm", contactPl: "మీ సంప్రదింపు నెంబర్",
    needTimePl: "ఉదాహరణగా రేపు ఉదయం",
    selectCategory: "వర్గం ఎంచుకోండి", location: "అవుట్", search: "అన్వేషణ",
    helpText: "రెజిస్ట్రేషన్ మరియు వినియోగం గురించి వీడియోలు చూడండి."
  },

  kn: {
    home: "ಮುಖಪುಟ", addWorker: "ಕಾರ್ಮಿಕ ಸೇರಿಸಿ", findWorker: "ಕಾರ್ಮಿಕ ಹುಡುಕಿ", login: "ಲಾಗಿನ್", help: "ಸಹಾಯ",
    intro: "ಒಂದು ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ, ಕೆಲವು ವಿವರಗಳನ್ನು ತುಂಬಿ ಮತ್ತು ಹತ್ತಿರದ ಕಾರ್ಮಿಕರನ್ನು ನೋಡಿ.",
    addDesc: "ಕಾರ್ಮಿಕನಾಗಿ ನೋಂದಣಿ ಮಾಡಿಕೊಳ್ಳಿ (ಆಧಾರ್ ಫೋಟೋ ಸ್ವೀಕಾರಾರ್ಹ)", findDesc: "ನೀವು ಏನು ಮತ್ತು ಎಲ್ಲಿ ಎಂದು ಹೇಳಿ — ನಾವು ಹತ್ತಿರದ ಕಾರ್ಮಿಕರನ್ನು ತೋರಿಸುತ್ತೇವೆ",
    loginDesc: "ನಿಮ್ಮ ದಾಖಲೆಗಳನ್ನು ನೋಡಿ", helpDesc: "ನೋಂದಾವಣೆ ಕುರಿತು ಚಿಕ್ಕ ವಿಡಿಯೋಗಳು ಮತ್ತು ಸಲಹೆಗಳು",
    name: "ಹೆಸರು", phone: "ಫೋನ್", email: "ಇಮೇಲ್ (ಆಯ್ಕೆ)", address: "ವಿಳಾಸ", city: "ನಗರ", pincode: "ಪಿನ್ ಕೋಡ್",
    category: "ವರ್ಗ", gender: "ಲಿಂಗ", experience: "ಅನುಭವ (ವರ್ಷ)", availability: "ಲಭ್ಯತೆ (ಸಮಯ)",
    aadhaarNo: "ಆಧಾರ್ ಸಂಖ್ಯೆ", aadhaarPhoto: "ಆಧಾರ್ ಫೋಟೋ ಅಪ್ಲೋಡ್ ಮಾಡಿ", profilePhoto: "ಪ್ರೊಫೈಲ್ ಫೋಟೋ (ಐಚ್ಛಿಕ)",
    submit: "ಸಲ್ಲಿಸಿ", back: "ಹಿಂತಿರುಗಿ", any: "ಯಾವುದು ಬೇಕಾದರೂ", male: "ಪುರುಷ", female: "ಸ್ತ್ರೀ",
    locPl: "ನಗರ ಅಥವಾ ಪಿನ್ ಕೊಡ್", namePl: "ಪೂರ್ಣ ಹೆಸರು", phonePl: "10 ಅಂಕಿಯ ಫೋನ್", emailPl: "ಇಮೇಲ್", addressPl: "ವಿಳಾಸ",
    cityPl: "ನಗರ", pinPl: "ಪಿನ್ ಕೋಡ್", aadhaarPl: "ಆಧಾರ್ ಸಂಖ್ಯೆ", availPl: "ಉದಾ 9am-5pm", contactPl: "ನಿಮ್ಮ ಸಂಪರ್ಕ",
    needTimePl: "ಉದಾಹರಣೆಗೆ ನಾಳೆ ಮುಂಜಾನೆ",
    selectCategory: "ವರ್ಗ ಆಯ್ಕೆಮಾಡಿ", location: "ಸ್ಥಳ", search: "ಹುಡುಕು",
    helpText: "ನೋಂದಣಿ ಮತ್ತು ಬಳಸುವ ಬಗ್ಗೆ ವಿಡಿಯೋಗಳನ್ನು ನೋಡಿ."
  },

  pa: {
    home: "ਹੋਮ", addWorker: "ਮਜ਼ਦੂਰ ਜੋੜੋ", findWorker: "ਮਜ਼ਦੂਰ ਲੱਭੋ", login: "ਲੌਗਿਨ", help: "ਸਹਾਇਤਾ",
    intro: "ਇੱਕ ਸਰਵਿਸ ਚੁਣੋ, ਕੁਝ ਵੇਰਵੇ ਭਰੋ ਅਤੇ ਨੇੜੇ ਮਜ਼ਦੂਰ ਵੇਖੋ।",
    addDesc: "ਮਜ਼ਦੂਰ ਵਜੋਂ ਰਜਿਸਟਰ ਕਰੋ (ਆਧਾਰ ਫੋਟੋ ਚੱਲੂ)", findDesc: "ਦੱਸੋ ਕਿ ਤੁਹਾਨੂੰ ਕੀ ਅਤੇ ਕਿੱਥੇ ਚਾਹੀਦਾ ਹੈ—ਅਸੀਂ ਨੇੜੇ ਦੇ ਮਜ਼ਦੂਰ ਦਿਖਾਵਾਂਗੇ",
    loginDesc: "ਆਪਣੇ ਰਿਕਾਰਡ ਵੇਖੋ", helpDesc: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਵਾਰੇ ਛੋਟੇ ਵੀਡੀਓ ਅਤੇ ਸਲਾਹ",
    name: "ਨਾਮ", phone: "ਫ਼ੋਨ", email: "ਈਮੇਲ (ਇਛਿਕ)", address: "ਪਤਾ", city: "ਸ਼ਹਿਰ", pincode: "ਪਿਨਕੋਡ",
    category: "ਸ਼੍ਰੇਣੀ", gender: "ਲਿੰਗ", experience: "ਅਨੁਭਵ (ਸਾਲ)", availability: "ਉਪਲਬਧਤਾ (ਟਾਈਮ)",
    aadhaarNo: "ਆਧਾਰ ਨੰਬਰ", aadhaarPhoto: "ਆਧਾਰ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ", profilePhoto: "ਪ੍ਰੋਫਾਈਲ ਫੋਟੋ (ਵਿਕਲਪਿਕ)",
    submit: "ਜਮ੍ਹਾਂ ਕਰੋ", back: "ਵਾਪਸ", any: "ਕੋਈ ਵੀ", male: "ਮਰਦ", female: "ਔਰਤ",
    locPl: "ਸ਼ਹਿਰ ਜਾਂ ਪਿਨਕੋਡ ਦਰਜ ਕਰੋ", namePl: "ਪੂਰਾ ਨਾਮ", phonePl: "10 ਅੰਕ ਫ਼ੋਨ", emailPl: "ਈਮੇਲ", addressPl: "ਪਤਾ",
    cityPl: "ਸ਼ਹਿਰ", pinPl: "ਪਿਨਕੋਡ", aadhaarPl: "ਆਧਾਰ ਨੰਬਰ", availPl: "ਉਦਾਹਰਨ 9am-5pm", contactPl: "ਸੰਪਰਕ ਨੰਬਰ",
    needTimePl: "ਜਿਵੇਂ ਕੱਲ ਸਵੇਰ",
    selectCategory: "ਸ਼੍ਰੇਣੀ ਚੁਣੋ", location: "ਟਿਕਾਣਾ", search: "ਖੋਜ",
    helpText: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਵਰਤੋਂ ਸਿੱਖਣ ਲਈ ਵੀਡੀਓ ਵੇਖੋ।"
  },

  gu: {
    home: "હોમ", addWorker: "મઝુર ઉમેરો", findWorker: "મઝુર શોધો", login: "લૉગિન", help: "મદદ",
    intro: "એક સેવા પસંદ કરો, થોડું વિગતો ભરો અને નજીકના મઝુર જુઓ.",
    addDesc: "મઝુર તરીકે નોંધણી કરો (આધાર ફોટો માન્ય)", findDesc: "તમારે શું અને ક્યાં જરૂરી છે તે જણાવો — અમે નજીકના મઝુર બતાવશું",
    loginDesc: "તમારા રેકોર્ડ જુઓ", helpDesc: "નોંધણી વિશે ટૂંકા વિડિઓ અને ટીપ્સ",
    name: "નામ", phone: "ફોન", email: "ઇમેઇલ (વૈકલ્પિક)", address: "સરનામું", city: "શહેર", pincode: "પિનકોડ",
    category: "વર્ગ", gender: "લિંગ", experience: "અનુભવ (વર્ષ)", availability: "ઉપલબ્ધતા (સમય)",
    aadhaarNo: "આધાર નંબર", aadhaarPhoto: "આધાર ફોટો અપલોડ કરો", profilePhoto: "પ્રોફાઇલ ફોટો (વૈકલ્પિક)",
    submit: "સબમિટ કરો", back: "પાછા", any: "કોઈ", male: "પુરૂષ", female: "સ્ત્રી",
    locPl: "શહેર અથવા પિનકોડ દાખલ કરો", namePl: "પૂર્ણ નામ દાખલ કરો", phonePl: "10 અંક ફોન", emailPl: "ઇમેઇલ દાખલ કરો",
    addressPl: "સરનામું દાખલ કરો", cityPl: "શહેર દાખલ કરો", pinPl: "પિનકોડ", aadhaarPl: "આધાર નંબર", availPl: "જેમ કે 9am-5pm",
    contactPl: "તમારો સંપર્ક નંબર", needTimePl: "ઉદા. કાલ સવારે",
    selectCategory: "કેટેગરી પસંદ કરો", location: "સ્થાન", search: "શોધો",
    helpText: "રજીસ્ટ્રેશન અને ઉપયોગ વિશે વિડિઓ જુઓ."
  }
};

// ========== Apply translations ==========
// Elements with data-key: textContent replaced
// Elements with data-pl: placeholder replaced
function applyTranslations(lang){
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  // text keys
  document.querySelectorAll('[data-key]').forEach(el=>{
    const key = el.getAttribute('data-key');
    if(dict[key]) el.textContent = dict[key];
  });

  // placeholders
  document.querySelectorAll('[data-pl]').forEach(el=>{
    const key = el.getAttribute('data-pl');
    if(dict[key]) el.placeholder = dict[key];
  });

  // category options - translate options by value (CATEGORIES array)
  ['aw_category','fw_category'].forEach(id=>{
    const sel = document.getElementById(id);
    if(!sel) return;
    Array.from(sel.options).forEach(opt=>{
      const cat = opt.getAttribute('data-cat') || opt.value;
      // use dict mapping for category names if present (lowercase keys)
      const mapKey = cat.toLowerCase().replace(/\s+/g,'');
      // try several possible keys (cook -> cook, siteworker -> siteWorker etc.)
      if(dict[mapKey]) opt.textContent = dict[mapKey];
      else if(dict[cat]) opt.textContent = dict[cat]; // fallback
      else opt.textContent = cat;
    });
  });
}

// initialize language selector
const langSelect = document.getElementById('langSelect');
const LANGS = {en:'English', hi:'हिन्दी', mr:'मराठी', bn:'বাংলা', ur:'اردو', ta:'தமிழ்', te:'తెలుగు', kn:'ಕನ್ನಡ', pa:'ਪੰਜਾਬੀ', gu:'ગુજરાતી'};
Object.entries(LANGS).forEach(([code,label])=>{
  const o = document.createElement('option'); o.value = code; o.textContent = label; langSelect.appendChild(o);
});
const savedLang = localStorage.getItem('ak_lang') || 'en';
langSelect.value = savedLang;
applyTranslations(savedLang);

// when language changes
langSelect.addEventListener('change', (e)=>{
  const lang = e.target.value;
  localStorage.setItem('ak_lang', lang);
  applyTranslations(lang);
});

// ========== Form behavior (Add Worker) ==========
const addForm = document.getElementById('addForm');
addForm.addEventListener('submit', async function(e){
  e.preventDefault();

  const lang = localStorage.getItem('ak_lang') || 'en';
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  // collect values
  const name = document.getElementById('aw_name').value.trim();
  const phone = document.getElementById('aw_phone').value.trim();
  const email = document.getElementById('aw_email').value.trim();
  const address = document.getElementById('aw_address').value.trim();
  const city = document.getElementById('aw_city').value.trim();
  const pincode = document.getElementById('aw_pincode').value.trim();
  const category = document.getElementById('aw_category').value;
  const gender = document.getElementById('aw_gender').value;
  const experience = document.getElementById('aw_experience').value;
  const availability = document.getElementById('aw_availability').value.trim();
  const aadhaar = document.getElementById('aw_aadhaar').value.trim();
  const aadhaarFile = document.getElementById('aw_aadhaar_photo').files[0];
  const profileFile = document.getElementById('aw_profile_photo').files[0];

  // basic validation
  if(!name || !phone || !address || !city || !pincode || !category || !aadhaarFile){
    document.getElementById('addFormMsg').textContent = dict.addError || 'Please fill required fields';
    document.getElementById('addFormMsg').style.color = 'crimson';
    return;
  }
  if(!/^\d{10}$/.test(phone)){ document.getElementById('addFormMsg').textContent = dict.phonePl || 'Enter valid phone'; document.getElementById('addFormMsg').style.color='crimson'; return; }

  // read images as base64
  const readFileAsDataURL = (file)=> new Promise((res,rej)=>{
    if(!file) return res(null);
    const fr = new FileReader();
    fr.onload = ()=> res(fr.result);
    fr.onerror = rej;
    fr.readAsDataURL(file);
  });

  const aadhaarData = await readFileAsDataURL(aadhaarFile);
  const profileData = await readFileAsDataURL(profileFile);

  // store worker in localStorage (demo)
  const workers = JSON.parse(localStorage.getItem('ak_workers')||'[]');
  const worker = {
    id: Date.now(),
    name, phone, email, address, city, pincode, category, gender, experience, availability, aadhaar, aadhaarData, profileData,
    created: new Date().toISOString()
  };
  workers.push(worker);
  localStorage.setItem('ak_workers', JSON.stringify(workers));

  document.getElementById('addFormMsg').textContent = dict.addedSuccess || 'Added';
  document.getElementById('addFormMsg').style.color = 'green';
  addForm.reset();
  // reset file inputs visually (they are cleared by reset but keep safety)
  document.getElementById('aw_aadhaar_photo').value = '';
  document.getElementById('aw_profile_photo').value = '';
});

// ========== Find Worker logic ==========
const findForm = document.getElementById('findForm');
findForm.addEventListener('submit', function(e){
  e.preventDefault();
  const lang = localStorage.getItem('ak_lang') || 'en';
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  const loc = document.getElementById('fw_location').value.trim().toLowerCase();
  const category = document.getElementById('fw_category').value;
  const genderPref = document.getElementById('fw_gender').value;
  const minExp = parseInt(document.getElementById('fw_minexp').value || '0',10);
  const neededTime = document.getElementById('fw_needed_time').value.trim();
  const contact = document.getElementById('fw_contact').value.trim();

  if(!contact){ document.getElementById('findFormMsg').textContent = dict.searchNoContact || 'Please add contact'; document.getElementById('findFormMsg').style.color = 'crimson'; return; }

  const workers = JSON.parse(localStorage.getItem('ak_workers')||'[]');
  // filter
  const results = workers.filter(w=>{
    const matchLoc = !loc || (w.city && w.city.toLowerCase().includes(loc)) || (w.pincode && w.pincode.includes(loc));
    const matchCat = !category || category === '' || category === 'Any' || (w.category && w.category.toLowerCase().includes(category.toLowerCase()));
    const matchGender = (genderPref==='any') || (w.gender===genderPref) || (genderPref==='any');
    const matchExp = (!minExp) || (parseInt(w.experience||'0',10) >= minExp);
    return matchLoc && matchCat && matchGender && matchExp;
  });

  const resultsArea = document.getElementById('results');
  resultsArea.innerHTML = `<h3>${dict.searchResultsTitle || 'Results'} (${results.length})</h3>`;
  if(results.length === 0){
    resultsArea.innerHTML += `<p class="muted">${dict.noResults || 'No workers found'}</p>`;
  } else {
    results.forEach(w=>{
      const card = document.createElement('div'); card.className = 'result-card';
      const img = document.createElement('img'); img.src = w.profileData || w.aadhaarData || 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
      const meta = document.createElement('div'); meta.className = 'meta';
      meta.innerHTML = `<strong>${escapeHtml(w.name)}</strong><br>
        ${escapeHtml(w.category)} • ${escapeHtml(w.experience || '0')} yrs<br>
        📍 ${escapeHtml(w.city)} • 📞 ${escapeHtml(w.phone)}<br>
        ${w.availability ? '⏰ ' + escapeHtml(w.availability) : ''}`;
      card.appendChild(img); card.appendChild(meta);
      resultsArea.appendChild(card);
    });
  }

  // message to user (demo)
  document.getElementById('findFormMsg').textContent = (results.length>0 ? `${results.length} ${dict.searchResultsTitle || 'found'}` : dict.noResults );
  document.getElementById('findFormMsg').style.color = results.length? 'green':'crimson';
});

// ========== Login demo ==========
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e){
  e.preventDefault();
  const phone = document.getElementById('lg_phone').value.trim();
  const pwd = document.getElementById('lg_password').value;
  const lang = localStorage.getItem('ak_lang') || 'en';
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  if(!phone || !pwd){ document.getElementById('loginMsg').textContent = dict.loginError; document.getElementById('loginMsg').style.color = 'crimson'; return; }
  // demo success
  document.getElementById('loginMsg').textContent = dict.loginSuccess;
  document.getElementById('loginMsg').style.color = 'green';
  setTimeout(()=> showSection('home'), 800);
});

// escape helper
function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m])); }

// ========== On load: populate categories and apply translation for categories ==========
document.addEventListener('DOMContentLoaded', ()=>{
  populateCategorySelects();
  // apply translations to page initially
  applyTranslations(localStorage.getItem('ak_lang') || 'en');
});
