

const WHATSAPP_NUMBER = "966537991198";

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
function scrollToTopNow(){
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
(function(){
  const nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  const isReload = nav ? nav.type === "reload" : (performance.navigation && performance.navigation.type === 1);
 
  if (isReload && location.hash && history.replaceState){
    history.replaceState(null, "", location.pathname + location.search);
  }
})();
window.addEventListener("beforeunload", scrollToTopNow);
window.addEventListener("pagehide", scrollToTopNow);
window.addEventListener("pageshow", (e) => { if (e.persisted) scrollToTopNow(); });
scrollToTopNow();

/* No text / image selection or dragging (form fields stay editable) */
(function(){
  const isField = (t) => {
    const el = t && (t.nodeType === 1 ? t : t.parentElement);
    return !!(el && el.closest && el.closest("input, textarea, select"));
  };
  document.addEventListener("selectstart", (e) => { if (!isField(e.target)) e.preventDefault(); });
  document.addEventListener("dragstart", (e) => { if (!isField(e.target)) e.preventDefault(); });
})();

const LANG_KEY = "sahar-lang";
const rootEl = document.documentElement;
let currentLang = rootEl.lang === "ar" ? "ar" : "en";
let animationsStarted = false;
const isAr = () => currentLang === "ar";

try { localStorage.removeItem(LANG_KEY); } catch (e) { /* ignore */ }

const UI_AR = {
  "meta.title": "سحر بيوتي لاونج — خبيرة مكياج واستوديو تجميل",
  "meta.desc": "سحر بيوتي لاونج — خدمات الأظافر والشعر والشمع والحواجب. احجزي موعدك الآن.",
  "logo.alt": "سحر لفن المكياج — بيوتي لاونج",

  "n.about": "من نحن", "n.services": "الخدمات", "n.sig": "المميزات", "n.book": "الحجز", "n.visit": "موقعنا",
  "n.reserve": "احجزي زيارتك",
  "n.switch": "English", "n.switchLabel": "التبديل إلى الإنجليزية", "n.close": "إغلاق القائمة",

  "h.t1": "جمال", "h.t2": "مدروس", "h.t3": "<em>في أدق التفاصيل.</em>",
  "h.sub": "سحر بيوتي لاونج مساحة هادئة ومدروسة للعناية بالأظافر والشعر والشمع والحواجب — حيث يمرّ كل موعد بلا استعجال، ويُنجَز كل عمل بإتقان تام.",
  "h.cta2": "تصفحي القائمة",
  "h.tr1": "أكثر من 60 خدمة", "h.tr2": "أسعار واضحة", "h.tr3": "من السبت إلى الخميس، بموعد مسبق",
  "h.badge": "سحر بيوتي لاونج · أناقة بلا استعجال · ",   
  "h.c1l": "الحجز متاح الآن", "h.c1v": "مواعيد متاحة لنفس اليوم",
  "h.c2l": "ابتداءً من", "h.c2v": "45 ر.س",
  "h.scroll": "مرّري للأسفل",
  "m.nails": "الأظافر", "m.hair": "الشعر", "m.wax": "الشمع", "m.brows": "الحواجب والوجه",
  "m.k": "كيراستاس", "m.l": "لوريال بروفيشنال", "m.s": "شوارتزكوف",

  "a.eyebrow": "سحر لفن المكياج · بيوتي لاونج",
  "a.title": "استوديو بُني على حرفة <em>بلا استعجال</em>.",
  "a.p": "كل خدمة في قائمتنا بسعر واضح، وتُنجَز بإتقان — من تغيير طلاء الأظافر في خمس دقائق إلى جلسة تصفيف كاملة للعروس. تعمل مختصاتنا بمنتجات كيراستاس ولوريال بروفيشنال وشوارتزكوف، وجميع الأسعار المعروضة شاملة ضريبة القيمة المضافة.",
  "a.s1": "أقسام للعناية<br>أظافر · شعر · شمع · حواجب",
  "a.s2": "خدمة مدرجة<br>بأسعار شفافة",
  "a.s3u": "دقائق",
  "a.s3": "مساج ووسائد اللافندر<br>مع المانيكير الفاخر",

  "sv.badge": "قائمة الأسعار",
  "sv.sub": "كل خدمة مدرجة أدناه كما هي مطبوعة في قائمتنا داخل الصالون — الأسماء نفسها والأسعار نفسها، وجميعها شاملة ضريبة القيمة المضافة.",

  "sg.badge": "تجارب مميزة",
  "g1t": "مانيكير وباديكير روسي",
  "g1p": "عناية دقيقة بجلد الأظافر مع خيار المساج الفاخر ووسائد اللافندر الدافئة.",
  "g1c": "ابتداءً من 100 ر.س",
  "g2t": "بيبي لايتس وهايلايتس وبالياج",
  "g2p": "تدرجات ناعمة مرسومة يدويًا، تُختتم بسشوار كامل.",
  "g2c": "ابتداءً من 700 ر.س",
  "g3t": "تصفيف شعر العروس",
  "g3p": "يشمل غسل الشعر بالكامل ورذاذ الشعر، بتصفيف يدوم طوال اليوم.",
  "g3c": "ابتداءً من 550 ر.س",
  "g4t": "علاجات البوتوكس و Dr. AN",
  "g4p": "علاجات ترميمية لفروة الرأس وخصلات الشعر، بحسب تقييم المختصة.",
  "g4c": "ابتداءً من 220 ر.س",

  "b.eyebrow": "احجزي زيارتك",
  "b.title": "أخبرينا بما<br><em>تودّين إجراءه.</em>",
  "b.p": "املئي النموذج وسنفتح رسالة واتساب إلى صالوننا بتفاصيلك مكتوبة مسبقًا — ما عليك سوى الضغط على إرسال وسنؤكد لك الموعد.",
  "b.i1": "نعمل من السبت إلى الخميس، بموعد مسبق",
  "b.i2": "يُرجى الحضور قبل الموعد بعشر دقائق",
  "b.i3": "جميع الأسعار المعروضة شاملة ضريبة القيمة المضافة",
  "f.name": "الاسم الكامل", "f.name.ph": "اسمك", "f.name.err": "يرجى إدخال اسمك.",
  "f.phone": "رقم الجوال", "f.phone.err": "يرجى إدخال رقم جوال صحيح.",
  "f.service": "الخدمة", "f.choose": "اختاري الخدمة", "f.service.err": "يرجى اختيار الخدمة.",
  "f.date": "التاريخ", "f.date.err": "يرجى اختيار التاريخ.",
  "f.time": "الوقت", "f.time.err": "يرجى اختيار الوقت.",
  "f.notes": "ملاحظات", "f.opt": "(اختياري)", "f.notes.ph": "هل هناك ما ينبغي أن نعرفه قبل زيارتك؟",
  "f.send": "إرسال عبر واتساب",

  "l.eyebrow": "موقع الصالون",
  "l.title": "تفضّلي <em>بزيارتنا</em>.",
  "l.p": "اضغطي أدناه لفتح الاتجاهات في خرائط جوجل، أو استخدمي الخريطة المضمّنة لمعرفة موقعنا قبل زيارتك.",
  "l.btn": "احصلي على الاتجاهات",
  "l.call": "اتصلي بنا", "l.ig": "انستغرام",
  "l.map": "موقع سحر بيوتي لاونج",
  "ft.note": "جميع الأسعار شاملة ضريبة القيمة المضافة · عناصر القائمة معروضة كما هي في الصالون"
};

const SVC_AR = {
  // sizes & variants
  "Classic": "كلاسيكي", "Russian": "روسي",
  "Short": "قصير", "Middle": "متوسط", "Long": "طويل", "Very Long": "طويل جدًا",
  "Short/Middle": "قصير/متوسط", "Long/Very Long": "طويل/طويل جدًا",
  // groups
  "Manicure & Pedicure": "مانيكير وباديكير", "Color & Polish": "الألوان والطلاء", "Nail Art": "فن الأظافر",
  "French & Specialty": "الفرنش والخدمات الخاصة", "Extensions": "التطويل", "Removal": "الإزالة",
  "Wash & Cut": "الغسل والقص", "Styling": "التصفيف", "Color": "الصبغات", "Treatments": "العلاجات",
  "Advanced Treatments — Dr. AN": "علاجات متقدمة — Dr. AN",
  "Waxing": "إزالة الشعر بالشمع", "Eyebrows": "الحواجب", "Facial Shaving": "إزالة شعر الوجه",
  "Service time is from 30 – 180 minutes": "مدة الخدمة من 30 إلى 180 دقيقة",
  "Service time is from 20 – 40 minutes": "مدة الخدمة من 20 إلى 40 دقيقة",
  "Service time is from 20 minutes": "مدة الخدمة تبدأ من 20 دقيقة",
  // notes
  "trim / shape / buff": "تقليم / تشكيل / تلميع", "w/o color": "بدون طلاء",
  "5 min massage & lavender heated pads, w/o color": "مساج 5 دقائق ووسائد لافندر دافئة، بدون طلاء",
  "10 min massage & lavender heated pads, w/o color": "مساج 10 دقائق ووسائد لافندر دافئة، بدون طلاء",
  "10 min. of massage": "مساج لمدة 10 دقائق", "full set": "طقم كامل",
  "full set, w/o cleaning": "طقم كامل، بدون تنظيف", "per nail": "للظفر الواحد",
  "with Gel / Jelly Gel color": "مع طلاء جل / جيلي", "with cleaning": "مع التنظيف",
  "removal 50%, with cleaning": "إزالة 50%، مع التنظيف",
  "including blowdry — boys cut not available": "يشمل السشوار — قصّات الأولاد غير متوفرة",
  "wet hair": "للشعر المبلل", "price may vary depending on the specialist": "قد يختلف السعر بحسب المختصة",
  "with blow dry": "مع السشوار", "with hair wash and hair mist": "مع غسل الشعر ورذاذ الشعر",
  "on hair base color, with blow dry": "على لون الشعر الأساسي، مع السشوار",
  "with hair color, with blow dry": "مع صبغ الشعر، مع السشوار",
  "deep hair moisturizing": "ترطيب عميق للشعر", "for extremely damaged hair": "للشعر شديد التلف",
  "as per specialist assessment": "بحسب تقييم المختصة",
  "tweezing eyebrows is not available": "نتف الحواجب غير متوفر",
  // nails
  "Express Mani or Pedi": "مانيكير أو باديكير سريع",
  "Classic-Russian Manicure": "مانيكير كلاسيكي / روسي", "Classic-Russian Pedicure": "باديكير كلاسيكي / روسي",
  "Classic-Russian Mani & Pedi": "مانيكير وباديكير كلاسيكي / روسي",
  "Luxury Classic-Russian Manicure": "مانيكير فاخر كلاسيكي / روسي",
  "Luxury Classic-Russian Pedicure": "باديكير فاخر كلاسيكي / روسي",
  "Luxury Classic-Russian Mani & Pedi": "مانيكير وباديكير فاخر كلاسيكي / روسي",
  "Massage — Hands or Feet": "مساج — اليدين أو القدمين", "Callus Removal": "إزالة الجلد الخشن",
  "Nail Color": "طلاء الأظافر", "Nail Color (Gel Couture)": "طلاء الأظافر (جل كوتور)",
  "Gel Color / Jelly Polish": "طلاء جل / جيلي", "Nail Color with Chrome": "طلاء أظافر مع كروم",
  "Chrome": "كروم", "Cateyes": "عين القطة (كات آي)",
  "Simple Nail Art": "رسم أظافر بسيط", "Simple Gel Nail Art": "رسم أظافر جل بسيط",
  "Detailed Gel Nail Art": "رسم أظافر جل مفصّل",
  "French Regular Color": "فرنش بطلاء عادي", "French with Gel Color": "فرنش بطلاء جل",
  "French Cat Eyes Gel Polish": "فرنش عين القطة جل",
  "Plastic Extension with Regular Color": "تركيب أظافر بلاستيك بطلاء عادي",
  "Plastic Extension with Gel Color": "تركيب أظافر بلاستيك بطلاء جل",
  "Biab Extension": "تطويل بياب", "Polygel / Soft Gel": "بولي جل / سوفت جل", "Polygel Refill": "تعبئة بولي جل",
  "Biab": "بياب", "Biab Refill": "تعبئة بياب",
  "Gel Color / Fake Nails Removal": "إزالة طلاء الجل / الأظافر الصناعية",
  "Polygel / Biab Removal": "إزالة البولي جل / البياب",
  // hair
  "Hair Wash (with regular shampoo)": "غسل الشعر (بشامبو عادي)", "Hair Wash (with L'oreal shampoo)": "غسل الشعر (بشامبو لوريال)",
  "Hair Trim": "تقليم أطراف الشعر", "Bangs / Curtain Bangs Cut": "قص الغرة / الغرة الستارة",
  "Full Layers Cut": "قص طبقات كامل", "Hair Drying": "تجفيف الشعر",
  "Blow Dry": "سشوار", "Add Curler or Flat Iron": "إضافة مكواة تجعيد أو فرد", "French Braid": "ضفيرة فرنسية",
  "Simple Hair Style with Braids": "تسريحة بسيطة بالضفائر", "Hair Styles": "تسريحات الشعر",
  "Bride Hair Styling": "تصفيف شعر العروس",
  "One Hair Color w/o Ammonia": "صبغة لون واحد بدون أمونيا", "One Hair Color": "صبغة لون واحد",
  "Babylights | Highlights / Balayage / Ombre, Sombre": "بيبي لايتس | هايلايتس / بالياج / أومبريه، سومبريه",
  "Rinsage": "رينساج", "Hair Contouring": "كونتورينغ الشعر", "Roots w/o Ammonia": "صبغة الجذور بدون أمونيا",
  "Roots": "صبغة الجذور", "Hair Test": "اختبار الشعر",
  "Kerastase Scalp Scrub": "مقشّر فروة الرأس من كيراستاس", "L'oreal Metal Detox": "ميتال ديتوكس من لوريال",
  "L'oreal Absolut Repair": "أبسولوت ريبير من لوريال", "L'oreal Molecular Repair": "مولكيولار ريبير من لوريال",
  "L'oréal Vitamino Color Spectrum Treatment": "علاج فيتامينو كولور سبكتروم من لوريال",
  "Schwarzkoph R2": "شوارتزكوف R2", "Morfosis Hair Reconstruction Treatment": "علاج مورفوسيس لإعادة بناء الشعر",
  "Fusidios Kerastase Ampoules": "أمبولات فيوسيديوس من كيراستاس", "Kerastase Voz Urinals with Mask": "كيراستاس فوز يورينالز مع ماسك",
  "Amino Hair Cream": "كريم الأمينو للشعر", "BB Hair Cream": "كريم BB للشعر", "DR AN Hair Treatment": "علاج Dr. AN للشعر",
  "Mora Mora Hair Treatment": "علاج مورا مورا للشعر", "BPH Hair Treatment": "علاج BPH للشعر",
  "Scalp Detox – Dr. AN": "ديتوكس فروة الرأس – Dr. AN", "Gold / Silver Session – Dr. AN": "جلسة الذهب / الفضة – Dr. AN",
  "Botox Session – Dr. AN": "جلسة البوتوكس – Dr. AN",
  
  "Half Arms Wax": "شمع نصف اليدين", "Half Legs Wax": "شمع نصف الساقين", "Full Arms Wax": "شمع اليدين كاملة",
  "Full Legs Wax": "شمع الساقين كاملة", "Under Arms Wax": "شمع الإبطين", "Back Wax": "شمع الظهر",
  "Abdominal Area Wax": "شمع منطقة البطن",
  "Full Body without Back & Abdominal Wax": "شمع الجسم كاملًا بدون الظهر والبطن", "Full Body Wax": "شمع الجسم كاملًا",
 
  "Eyebrow Bleaching": "تفتيح الحواجب", "Eyebrow Tinting": "صبغ الحواجب", "Eyebrow Tinting & Bleaching": "صبغ وتفتيح الحواجب",
  "Full Face Wax": "شمع الوجه كاملًا", "Full Face Wax without Mustache": "شمع الوجه كاملًا بدون الشارب",
  "Mustache Wax": "شمع الشارب", "Full Face Shaving": "حلاقة الوجه كاملًا",
  "Full Face Shaving without Mustache": "حلاقة الوجه كاملًا بدون الشارب", "Mustache Shaving": "حلاقة الشارب",
  // booking select
  "Not sure yet / please advise": "لستُ متأكدة بعد / أرجو النصيحة"
};

const DYN = {
  en: {
    fillAll: "Please fill in every required field correctly.",
    opening: "Opening WhatsApp with your appointment details…",
    hello: "Hello Sahar Beauty Lounge, I'd like to book an appointment:",
    name: "Name", phone: "Phone", service: "Service", date: "Date", time: "Time", notes: "Notes",
    am: "AM", pm: "PM", money: n => "SAR " + n, locale: "en-GB"
  },
  ar: {
    fillAll: "يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح.",
    opening: "جارٍ فتح واتساب بتفاصيل موعدك…",
    hello: "مرحبًا سحر بيوتي لاونج، أرغب في حجز موعد:",
    name: "الاسم", phone: "رقم الجوال", service: "الخدمة", date: "التاريخ", time: "الوقت", notes: "ملاحظات",
    am: "ص", pm: "م", money: n => n + " ر.س",
    locale: "ar-SA-u-ca-gregory-nu-latn"   
  }
};
const dyn = key => DYN[currentLang][key];
const tr = text => (isAr() && SVC_AR[text]) || text;                  // translate a menu string
const catName = cat => (isAr() ? cat.ar : cat.label);                 // tab / optgroup label
const toLatinDigits = s => s
  .replace(/[٠-٩]/g, c => c.charCodeAt(0) - 0x660)
  .replace(/[۰-۹]/g, c => c.charCodeAt(0) - 0x6F0);                  // accept Arabic-Indic digits in the phone field


const enContent = new Map();
const enAttrs = new Map();

function translateStatic(){
  document.querySelectorAll("[data-i18n], [data-i18n-html]").forEach(el => {
    const asHtml = el.hasAttribute("data-i18n-html");
    const key = asHtml ? el.dataset.i18nHtml : el.dataset.i18n;
    if (!enContent.has(el)) enContent.set(el, asHtml ? el.innerHTML : el.textContent);
    const text = isAr() && UI_AR[key] !== undefined ? UI_AR[key] : enContent.get(el);
    if (asHtml) el.innerHTML = text; else el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    if (!enAttrs.has(el)) enAttrs.set(el, {});
    const saved = enAttrs.get(el);
    el.dataset.i18nAttr.split(";").forEach(pair => {
      const [attr, key] = pair.split("=");
      if (!(attr in saved)) saved[attr] = el.getAttribute(attr);
      el.setAttribute(attr, isAr() && UI_AR[key] !== undefined ? UI_AR[key] : saved[attr]);
    });
  });
}


function fitBadgeText(){
  const tp = document.querySelector(".hero-badge-ring textPath");
  if (!tp) return;
  tp.style.wordSpacing = "";
  if (!isAr()) return;                                   
  const ring = 2 * Math.PI * 78;                         
  const unit = UI_AR["h.badge"];
  tp.textContent = unit;
  const one = tp.getComputedTextLength();
  if (!one) return;                                     
  tp.textContent = unit.repeat(Math.max(1, Math.floor(ring / one)));
  const spaces = (tp.textContent.match(/ /g) || []).length;
  tp.style.wordSpacing = Math.max(0, (ring - tp.getComputedTextLength()) / spaces) + "px";
}
let badgeFrame = 0;
let badgeWidth = window.innerWidth;
window.addEventListener("resize", () => {
  if (window.innerWidth === badgeWidth) return;
  badgeWidth = window.innerWidth;
  cancelAnimationFrame(badgeFrame); badgeFrame = requestAnimationFrame(fitBadgeText);
});
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitBadgeText);  

const langSwitch = document.getElementById("langSwitch");
const langModal = document.getElementById("langModal");

function applyLanguage(lang){
  currentLang = lang;
  rootEl.lang = lang;
  rootEl.dir = lang === "ar" ? "rtl" : "ltr";
  translateStatic();
  fitBadgeText();
  renderServices();
  renderBookingSelect();
  langSwitch.lang = isAr() ? "en" : "ar";        
  const note = document.getElementById("formNote");
  note.textContent = "";
  note.className = "form-note";
}

function closeLangModal(){
  langModal.classList.add("is-closing");
  setTimeout(() => {
    rootEl.classList.remove("lang-pending");
    langModal.classList.remove("is-closing");
  }, 350);
}

langModal.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lang-choice]");
  if (!btn) return;
  applyLanguage(btn.dataset.langChoice);
  closeLangModal();
  scrollToTopNow();
  startAnimations();
});
langModal.addEventListener("keydown", (e) => {          
  if (e.key !== "Tab") return;
  const btns = Array.from(langModal.querySelectorAll("button"));
  const i = btns.indexOf(document.activeElement);
  e.preventDefault();
  btns[(i + (e.shiftKey ? btns.length - 1 : 1)) % btns.length].focus();
});

langSwitch.addEventListener("click", () => {
  const anchor = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
  const section = anchor && anchor.closest("section");
  const before = section ? section.getBoundingClientRect().top : 0;
  applyLanguage(isAr() ? "en" : "ar");
  if (section) window.scrollBy({ top: section.getBoundingClientRect().top - before, behavior: "instant" });
  buildDirectionalAnimations();
});

function initLanguage(){
  applyLanguage("en");                       
  rootEl.classList.remove("i18n-loading");
  langModal.querySelector("button").focus({ preventScroll: true });
}

const SERVICES = {
  nails: {
    label: "Nails", ar: "الأظافر",
    groups: [
      {
        name: "Manicure & Pedicure",
        items: [
          { name: "Express Mani or Pedi", note: "trim / shape / buff", price: 45 },
          { name: "Classic-Russian Manicure", note: "w/o color", variants: { Classic: 100, Russian: 120 } },
          { name: "Classic-Russian Pedicure", note: "w/o color", variants: { Classic: 120, Russian: 140 } },
          { name: "Classic-Russian Mani & Pedi", note: "w/o color", variants: { Classic: 200, Russian: 250 } },
          { name: "Luxury Classic-Russian Manicure", note: "5 min massage & lavender heated pads, w/o color", variants: { Classic: 150, Russian: 170 } },
          { name: "Luxury Classic-Russian Pedicure", note: "5 min massage & lavender heated pads, w/o color", variants: { Classic: 170, Russian: 190 } },
          { name: "Luxury Classic-Russian Mani & Pedi", note: "10 min massage & lavender heated pads, w/o color", variants: { Classic: 305, Russian: 345 } },
          { name: "Massage — Hands or Feet", note: "10 min. of massage", price: 50 },
          { name: "Callus Removal", price: 45 }
        ]
      },
      {
        name: "Color & Polish",
        items: [
          { name: "Nail Color", note: "full set", price: 30 },
          { name: "Nail Color (Gel Couture)", price: 35 },
          { name: "Gel Color / Jelly Polish", note: "full set", price: 75 },
          { name: "Nail Color with Chrome", price: 70 },
          { name: "Chrome", note: "full set, w/o cleaning", price: 180 },
          { name: "Cateyes", note: "full set, w/o cleaning", price: 130 }
        ]
      },
      {
        name: "Nail Art",
        items: [
          { name: "Simple Nail Art", note: "per nail", price: 15 },
          { name: "Simple Gel Nail Art", note: "per nail", price: 20 },
          { name: "Detailed Gel Nail Art", note: "per nail", price: 30 }
        ]
      },
      {
        name: "French & Specialty",
        items: [
          { name: "French Regular Color", note: "full set", price: 55 },
          { name: "French with Gel Color", note: "full set", price: 120 },
          { name: "French Cat Eyes Gel Polish", note: "with Gel / Jelly Gel color", price: 120 }
        ]
      },
      {
        name: "Extensions",
        items: [
          { name: "Plastic Extension with Regular Color", price: 100 },
          { name: "Plastic Extension with Gel Color", price: 130 },
          { name: "Biab Extension", note: "with cleaning", variants: { Classic: 420, Russian: 440 } },
          { name: "Polygel / Soft Gel", note: "with cleaning", variants: { Classic: 420, Russian: 440 } },
          { name: "Polygel Refill", note: "with cleaning", variants: { Classic: 295, Russian: 315 } },
          { name: "Biab", note: "with cleaning", variants: { Classic: 270, Russian: 290 } },
          { name: "Biab Refill", note: "removal 50%, with cleaning", variants: { Classic: 235, Russian: 255 } }
        ]
      },
      {
        name: "Removal",
        items: [
          { name: "Gel Color / Fake Nails Removal", note: "with cleaning", variants: { Classic: 150, Russian: 170 } },
          { name: "Polygel / Biab Removal", note: "with cleaning", variants: { Classic: 170, Russian: 190 } }
        ]
      }
    ]
  },

  hair: {
    label: "Hair", ar: "الشعر",
    groups: [
      {
        name: "Wash & Cut",
        items: [
          { name: "Hair Wash (with regular shampoo)", price: 30 },
          { name: "Hair Wash (with L'oreal shampoo)", price: 40 },
          { name: "Hair Trim", price: 80 },
          { name: "Bangs / Curtain Bangs Cut", price: 45 },
          { name: "Full Layers Cut", note: "including blowdry — boys cut not available", price: 250 },
          { name: "Hair Drying", note: "wet hair", price: 20 }
        ]
      },
      {
        name: "Styling",
        items: [
          { name: "Blow Dry", note: "price may vary depending on the specialist", sizes: { Short: 80, Middle: 115, Long: 145, "Very Long": 170 } },
          { name: "Add Curler or Flat Iron", note: "with blow dry", price: 50 },
          { name: "French Braid", price: 50 },
          { name: "Simple Hair Style with Braids", sizes: { Short: 150, Middle: 180, Long: 200, "Very Long": 240 } },
          { name: "Hair Styles", sizes: { Short: 250, Middle: 325, Long: 400, "Very Long": 450 } },
          { name: "Bride Hair Styling", note: "with hair wash and hair mist", sizes: { Short: 550, Middle: 700, Long: 850, "Very Long": 1000 } }
        ]
      },
      {
        name: "Color",
        items: [
          { name: "One Hair Color w/o Ammonia", note: "with blow dry", sizes: { Short: 450, Middle: 650, Long: 800 } },
          { name: "One Hair Color", note: "with blow dry", sizes: { Short: 350, Middle: 550, Long: 700 } },
          { name: "Babylights | Highlights / Balayage / Ombre, Sombre", note: "on hair base color, with blow dry", sizes: { Short: 700, Middle: 1100, Long: 1400 } },
          { name: "Babylights | Highlights / Balayage / Ombre, Sombre", note: "with hair color, with blow dry", sizes: { Short: 1000, Middle: 1600, Long: 2000 } },
          { name: "Rinsage", sizes: { Short: 230, Middle: 310, Long: 390 } },
          { name: "Hair Contouring", price: 345 },
          { name: "Roots w/o Ammonia", price: 250 },
          { name: "Roots", price: 195 },
          { name: "Hair Test", price: 50 }
        ]
      },
      {
        name: "Treatments",
        items: [
          { name: "Kerastase Scalp Scrub", price: 125 },
          { name: "L'oreal Metal Detox", note: "with blow dry", price: 250 },
          { name: "L'oreal Absolut Repair", note: "deep hair moisturizing", price: 150 },
          { name: "L'oreal Molecular Repair", price: 250 },
          { name: "L'oréal Vitamino Color Spectrum Treatment", price: 220 },
          { name: "Schwarzkoph R2", note: "for extremely damaged hair", price: 300 },
          { name: "Morfosis Hair Reconstruction Treatment", price: 220 },
          { name: "Fusidios Kerastase Ampoules", price: 130 },
          { name: "Kerastase Voz Urinals with Mask", price: 270 }
        ]
      },
      {
        name: "Advanced Treatments — Dr. AN",
        items: [
          { name: "Amino Hair Cream", note: "as per specialist assessment", sizes: { Short: 600, Middle: 900, Long: 1200, "Very Long": 1500 } },
          { name: "BB Hair Cream", note: "as per specialist assessment", sizes: { Short: 600, Middle: 900, Long: 1200, "Very Long": 1500 } },
          { name: "DR AN Hair Treatment", note: "as per specialist assessment", sizes: { Short: 600, Middle: 900, Long: 1200, "Very Long": 1500 } },
          { name: "Mora Mora Hair Treatment", note: "as per specialist assessment", sizes: { Short: 600, Middle: 900, Long: 1200, "Very Long": 1500 } },
          { name: "BPH Hair Treatment", note: "as per specialist assessment", sizes: { Short: 600, Middle: 900, Long: 1200, "Very Long": 1500 } },
          { name: "Scalp Detox – Dr. AN", price: 220 },
          { name: "Gold / Silver Session – Dr. AN", sizes: { "Short/Middle": 230, "Long/Very Long": 330 } },
          { name: "Botox Session – Dr. AN", sizes: { "Short/Middle": 300, "Long/Very Long": 400 } }
        ]
      }
    ]
  },

  wax: {
    label: "Wax", ar: "الشمع",
    groups: [
      {
        name: "Waxing", note: "Service time is from 30 – 180 minutes",
        items: [
          { name: "Half Arms Wax", price: 60 },
          { name: "Half Legs Wax", price: 80 },
          { name: "Full Arms Wax", price: 100 },
          { name: "Full Legs Wax", price: 150 },
          { name: "Under Arms Wax", price: 40 },
          { name: "Back Wax", price: 65 },
          { name: "Abdominal Area Wax", price: 50 },
          { name: "Full Body without Back & Abdominal Wax", price: 280 },
          { name: "Full Body Wax", price: 380 }
        ]
      }
    ]
  },

  face: {
    label: "Brows & Face", ar: "الحواجب والوجه",
    groups: [
      {
        name: "Eyebrows", note: "Service time is from 20 – 40 minutes",
        items: [
          { name: "Eyebrow Bleaching", price: 20 },
          { name: "Eyebrow Tinting", price: 40 },
          { name: "Eyebrow Tinting & Bleaching", note: "tweezing eyebrows is not available", price: 50 }
        ]
      },
      {
        name: "Facial Shaving", note: "Service time is from 20 minutes",
        items: [
          { name: "Full Face Wax", price: 40 },
          { name: "Full Face Wax without Mustache", price: 30 },
          { name: "Mustache Wax", price: 20 },
          { name: "Full Face Shaving", price: 35 },
          { name: "Full Face Shaving without Mustache", price: 25 },
          { name: "Mustache Shaving", price: 15 }
        ]
      }
    ]
  }
};

function money(n){ return DYN[currentLang].money(n); }

function buildPriceMarkup(item){
  if (item.variants){
    return `<div class="svc-variants">
      <div class="svc-variant"><span class="svc-variant-label">${tr("Classic")}</span><span class="svc-variant-price">${money(item.variants.Classic)}</span></div>
      <div class="svc-variant is-russian"><span class="svc-variant-label">${tr("Russian")}</span><span class="svc-variant-price">${money(item.variants.Russian)}</span></div>
    </div>`;
  }
  if (item.sizes){
    return `<div class="svc-size-table">${Object.entries(item.sizes).map(([label, val]) => `
      <div class="svc-size"><span class="svc-size-label">${tr(label)}</span><span class="svc-size-price">${money(val)}</span></div>
    `).join("")}</div>`;
  }
  return `<span class="svc-price">${money(item.price)}</span>`;
}

function renderServices(){
  const tabsEl = document.getElementById("serviceTabs");
  const panelsEl = document.getElementById("tabPanels");
  const keys = Object.keys(SERVICES);
  const activeBtn = tabsEl.querySelector(".tab-btn.is-active");
  const activeKey = activeBtn ? activeBtn.dataset.tab : keys[0];   // survive a language switch

  tabsEl.innerHTML = keys.map((key, i) => `
    <button class="tab-btn${key === activeKey ? " is-active" : ""}" data-tab="${key}" role="tab" aria-selected="${key === activeKey}">
      ${catName(SERVICES[key])}
    </button>
  `).join("");

  panelsEl.innerHTML = keys.map((key, i) => {
    const cat = SERVICES[key];
    const groupsHtml = cat.groups.map(group => `
      <div class="svc-group" data-group>
        <div class="svc-group-head">
          <h3>${tr(group.name)}</h3>
          ${group.note ? `<span class="svc-group-note">${tr(group.note)}</span>` : ""}
        </div>
        <div class="svc-group-body">
          ${group.items.map(item => `
            <div class="svc-row">
              <div class="svc-info">
                <span class="svc-name">${tr(item.name)}</span>
                ${item.note ? `<span class="svc-note">${tr(item.note)}</span>` : ""}
              </div>
              <span class="svc-leader" aria-hidden="true"></span>
              ${buildPriceMarkup(item)}
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");

    return `<div class="tab-panel${key === activeKey ? " is-active" : ""}" data-panel="${key}">${groupsHtml}</div>`;
  }).join("");
}

function renderBookingSelect(){
  const select = document.getElementById("fService");
  const previous = select.value;
  Array.from(select.children).slice(1).forEach(node => node.remove());   // keep the placeholder option
  Object.values(SERVICES).forEach(cat => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = catName(cat);
    cat.groups.forEach(group => {
      group.items.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.name;              
        opt.textContent = tr(item.name);
        optgroup.appendChild(opt);
      });
    });
    select.appendChild(optgroup);
  });
  const otherOpt = document.createElement("option");
  otherOpt.value = "Not sure yet / please advise";
  otherOpt.textContent = tr("Not sure yet / please advise");
  select.appendChild(otherOpt);
  if (previous) select.value = previous;
}


document.getElementById("fDate").min = new Date().toISOString().split("T")[0];

// Tabs interaction
document.getElementById("serviceTabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  const key = btn.dataset.tab;

  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("is-active", b === btn));
  document.querySelectorAll(".tab-panel").forEach(p => {
    const active = p.dataset.panel === key;
    if (active){
      p.classList.add("is-active");
      if (window.gsap) gsap.fromTo(p, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .5, ease: "power2.out" });
    } else {
      p.classList.remove("is-active");
    }
  });
  if (window.ScrollTrigger && animationsStarted) requestAnimationFrame(() => ScrollTrigger.refresh());
});


const siteNav = document.getElementById("siteNav");
let navScrolled = false;
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 30;
  if (scrolled === navScrolled) return;
  navScrolled = scrolled;
  siteNav.classList.toggle("is-scrolled", scrolled);
}, { passive: true });

/* pause the endless hero CSS animations while the hero is off-screen */
if ("IntersectionObserver" in window){
  const heroEl = document.querySelector(".hero");
  if (heroEl){
    new IntersectionObserver((entries) => {
      heroEl.classList.toggle("is-offscreen", !entries[0].isIntersecting);
    }, { rootMargin: "120px 0px" }).observe(heroEl);
  }
}

const navBurger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");
const navClose = document.getElementById("navClose");

function setMenu(open){
  navLinks.classList.toggle("is-open", open);
  navBurger.classList.toggle("is-open", open);
  navBurger.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
  if (open){
    if (window.gsap){
      gsap.fromTo("#navLinks a", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .5, stagger: .06, ease: "power2.out" });
    }
    setTimeout(() => navClose.focus({ preventScroll: true }), 60);
  } else if (navLinks.contains(document.activeElement)){
    navBurger.focus({ preventScroll: true });
  }
}
navBurger.addEventListener("click", () => setMenu(!navLinks.classList.contains("is-open")));
navClose.addEventListener("click", () => setMenu(false));
navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("is-open")) setMenu(false);
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 980 && navLinks.classList.contains("is-open")) setMenu(false);
});

if ("IntersectionObserver" in window){
  const navAnchors = document.querySelectorAll("[data-nav]");
  const sections = Array.from(navAnchors)
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach(a => a.classList.toggle("is-active-link", a.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(sec => spy.observe(sec));
}

if (!window.gsap || !window.ScrollTrigger){
  document.documentElement.classList.add("no-gsap");
}

function startAnimations(){
  if (animationsStarted) return;
  animationsStarted = true;
  if (!(window.gsap && window.ScrollTrigger)){
    document.querySelectorAll(".stat-num-val").forEach(el => { el.textContent = el.dataset.value || 0; });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  gsap.set(".eyebrow-ar, .hero-sub, .hero-cta, .hero-trust", { y: 14 });
  gsap.set(".hero-scroll", { opacity: 0 });

  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl
    .to(".eyebrow-ar", { opacity: 1, y: 0, duration: .8 }, 0.1)
    .to(".hero-title .reveal", { y: "0%", duration: 1, stagger: .12 }, 0.25)
    .to(".hero-sub", { opacity: 1, y: 0, duration: .9 }, 0.75)
    .to(".hero-cta", { opacity: 1, y: 0, duration: .9 }, 0.9)
    .to(".hero-trust", { opacity: 1, y: 0, duration: .8 }, 1.05)
    .fromTo(".hero-ring", { scale: .85, opacity: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, duration: 1.6 }, 0.1)
    .from(".hero-badge", { opacity: 0, scale: .8, duration: 1, ease: "back.out(1.6)" }, 0.5)
    .from(".hero-card--float", { opacity: 0, duration: .8 }, 0.85)
    .from(".hero-card--price", { opacity: 0, duration: .8 }, 1)
    .from(".hero-marquee-track", { opacity: 0, duration: .8 }, 1.15)
    .to(".hero-scroll", { opacity: 1, duration: .8 }, 1.3);

  gsap.to(".hero-ring--in", { y: -70, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .6 } });
  gsap.to(".hero-ring", { y: 40, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .6 } });
  gsap.to(".hero-orb--1", { y: -90, x: 30, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .8 } });
  gsap.to(".hero-orb--2", { y: 60, x: -20, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .8 } });
  gsap.to(".hero-visual", { y: -50, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .6 } });
  gsap.to(".hero-content", { y: -24, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .6 } });

  gsap.timeline({ scrollTrigger: { trigger: ".about", start: "top 70%" } })
    .to(".draw-path", { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut", stagger: .2 })
    .to(".draw-dot", { opacity: 1, scale: 1.2, duration: .4, stagger: .15 }, "-=0.6")
    .to(".petal", { opacity: 1, duration: .6, stagger: .1 }, "-=0.4");

  const statVals = gsap.utils.toArray(".stat-num-val").map(el => ({
    node: el.firstChild || el.appendChild(document.createTextNode("0")),
    target: Number(el.dataset.value || 0), val: 0, shown: 0
  }));
  if (statVals.length){
    ScrollTrigger.create({
      trigger: ".about-stats", start: "top 88%", once: true,
      onEnter: () => statVals.forEach(s => gsap.to(s, {
        val: s.target, duration: 2.2, ease: "power2.out", overwrite: true,
        onUpdate: () => {
          const n = Math.round(s.val);
          if (n !== s.shown){ s.shown = n; s.node.nodeValue = n; }   // touch the DOM only when the number changes
        },
        onComplete: () => { s.node.nodeValue = s.target; }
      }))
    });
  }

  gsap.utils.toArray(".section-head").forEach(head => {
    gsap.from(head.children, {
      opacity: 0, y: 24, duration: .9, stagger: .1, ease: "power2.out",
      scrollTrigger: { trigger: head, start: "top 82%" }
    });
  });

  gsap.from("#serviceTabs .tab-btn", {
    opacity: 0, y: 14, duration: .6, stagger: .06, ease: "power2.out",
    scrollTrigger: { trigger: "#serviceTabs", start: "top 85%" }
  });
 
  gsap.utils.toArray(".sig-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0, y: i % 2 === 0 ? 46 : 26, rotate: i % 2 === 0 ? -2 : 2,
      duration: .9, ease: "power2.out",
      scrollTrigger: { trigger: ".signature-grid", start: "top 82%" },
      delay: i * .1
    });
  });

  
  gsap.from(".booking-form", {
    opacity: 0, y: 34, scale: .98, duration: .9, ease: "power2.out",
    scrollTrigger: { trigger: ".booking-form", start: "top 82%" }
  });

 
  gsap.from(".location-map", {
    opacity: 0, scale: .96, duration: 1, ease: "power2.out",
    scrollTrigger: { trigger: ".location-map", start: "top 85%" }
  });

  buildDirectionalAnimations();

  gsap.from(".footer-inner > *, .footer-note", {
    opacity: 0, y: 16, duration: .8, stagger: .08, ease: "power2.out",
    scrollTrigger: { trigger: ".site-footer", start: "top 92%" }
  });

  if (document.fonts && document.fonts.addEventListener){
    let fontTimer;
    document.fonts.addEventListener("loadingdone", () => {
      clearTimeout(fontTimer);
      fontTimer = setTimeout(() => ScrollTrigger.refresh(), 150);
    });
  }
}

let directionalCtx = null;
function buildDirectionalAnimations(){
  if (!animationsStarted || !(window.gsap && window.ScrollTrigger)) return;
  if (directionalCtx) directionalCtx.revert();
  const flip = rootEl.dir === "rtl" ? -1 : 1;

  const slide = (px) => (i, el) => {
    if (Math.sign(px) !== flip) return px;   // unchanged
    const r = el.getBoundingClientRect();
    const room = flip > 0 ? rootEl.clientWidth - r.right : r.left;
    return flip * Math.min(Math.abs(px), Math.max(0, room));
  };

  directionalCtx = gsap.context(() => {
    // About — text and art slide from opposite sides
    gsap.from(".about-text > *", {
      opacity: 0, x: -36 * flip, duration: .9, stagger: .12, ease: "power2.out",
      scrollTrigger: { trigger: ".about-text", start: "top 78%" }
    });
    gsap.from(".about-art", {
      opacity: 0, x: slide(36 * flip), scale: .94, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: ".about-art", start: "top 78%" }
    });

    // Services — each menu group alternates in from either side
    gsap.utils.toArray(".tab-panel.is-active .svc-group").forEach((group, i) => {
      gsap.from(group, {
        opacity: 0, x: slide((i % 2 === 0 ? -28 : 28) * flip), duration: .8, ease: "power2.out",
        scrollTrigger: { trigger: group, start: "top 85%" }
      });
    });

    // Booking + Location text
    gsap.from(".booking-info > *", {
      opacity: 0, x: -28 * flip, duration: .8, stagger: .1, ease: "power2.out",
      scrollTrigger: { trigger: ".booking-info", start: "top 80%" }
    });
    gsap.from(".location-text > *", {
      opacity: 0, x: -28 * flip, duration: .8, stagger: .1, ease: "power2.out",
      scrollTrigger: { trigger: ".location-text", start: "top 82%" }
    });
  });

  ScrollTrigger.refresh();
}

// Booking form validation -> WhatsApp handoff
const bookingForm = document.getElementById("bookingForm");
const formNote = document.getElementById("formNote");

function setError(fieldId, hasError){
  const field = document.getElementById(fieldId).closest(".field");
  field.classList.toggle("has-error", hasError);
}

function isValidPhone(value){
  const digits = toLatinDigits(value).replace(/\D/g, "");
  return digits.length >= 8;
}

function formatDate(iso){
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  return date.toLocaleDateString(dyn("locale"), { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function formatTime(t){
  if (!t) return "";
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? dyn("pm") : dyn("am");
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("fName").value.trim();
  const phone = document.getElementById("fPhone").value.trim();
  const service = document.getElementById("fService").value;
  const date = document.getElementById("fDate").value;
  const time = document.getElementById("fTime").value;
  const notes = document.getElementById("fNotes").value.trim();

  const checks = [
    ["fName", name.length < 2],
    ["fPhone", !isValidPhone(phone)],
    ["fService", !service],
    ["fDate", !date],
    ["fTime", !time]
  ];

  let hasError = false;
  checks.forEach(([id, bad]) => {
    setError(id, bad);
    if (bad) hasError = true;
  });

  if (hasError){
    formNote.textContent = dyn("fillAll");
    formNote.className = "form-note is-error";
    if (window.gsap){
      gsap.fromTo(bookingForm, { x: -6 }, { x: 0, duration: .4, ease: "elastic.out(1, .4)" });
    }
    return;
  }

  formNote.textContent = "";
  formNote.className = "form-note";

  const lines = [
    dyn("hello"),
    "",
    `${dyn("name")}: ${name}`,
    `${dyn("phone")}: ${toLatinDigits(phone)}`,
    `${dyn("service")}: ${tr(service)}`,
    `${dyn("date")}: ${formatDate(date)}`,
    `${dyn("time")}: ${formatTime(time)}`
  ];
  if (notes) lines.push(`${dyn("notes")}: ${notes}`);

  const text = encodeURIComponent(lines.join("\n"));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

  formNote.textContent = dyn("opening");
  formNote.className = "form-note is-success";

  window.open(url, "_blank", "noopener");
});

/* clear a field's error state as the person types */
bookingForm.querySelectorAll("input, select, textarea").forEach(el => {
  el.addEventListener("input", () => setError(el.id, false));
});


initLanguage();
