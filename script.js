const MENU = [
  {
    id: "nescafe",
    name: "نسكافيه وشوكولاتة",
    e: "☕",
    items: [
      {
        id: "ns1",
        name: "نسكافية",
        d: "نسكافيه كلاسيك حار",
        e: "☕",
        img: "",
        sizes: [
          { lbl: "S", p: 25 },
          { lbl: "D", p: 35 },
        ],
      },
      {
        id: "ns2",
        name: "نسكافية بلاك",
        d: "نسكافيه أسود بدون حليب",
        e: "☕",
        img: "",
        p: 30,
      },
      {
        id: "ns3",
        name: "هوت شوكلت",
        d: "شوكولاتة ساخنة كريمية",
        e: "🍫",
        img: "",
        sizes: [
          { lbl: "S", p: 30 },
          { lbl: "D", p: 40 },
        ],
      },
      {
        id: "ns4",
        name: "كاكاو",
        d: "كاكاو بالحليب الساخن",
        e: "🍫",
        img: "",
        sizes: [
          { lbl: "S", p: 20 },
          { lbl: "D", p: 30 },
        ],
      },
      {
        id: "ns5",
        name: "وافل",
        d: "وافل طازج بالشوكولاتة",
        e: "🧇",
        img: "",
        p: null,
      },
      {
        id: "ns6",
        name: "بان كيك",
        d: "بان كيك هش بالعسل",
        e: "🥞",
        img: "",
        p: null,
      },
    ],
  },
  {
    id: "specialty",
    name: "قهوة تخصص",
    e: "☕",
    items: [
      {
        id: "sp1",
        name: "اسبريسو",
        d: "شوت إسبريسو مركّز",
        e: "⚡",
        img: "",
        sizes: [
          { lbl: "S", p: 30 },
          { lbl: "D", p: 40 },
        ],
      },
      {
        id: "sp2",
        name: "كابتشينو",
        d: "إسبريسو مع رغوة الحليب",
        e: "🫖",
        img: "",
        sizes: [
          { lbl: "S", p: 30 },
          { lbl: "D", p: 40 },
        ],
      },
      {
        id: "sp3",
        name: "ميكاتو",
        d: "إسبريسو وحليب مكثّف",
        e: "🍵",
        img: "",
        sizes: [
          { lbl: "S", p: 40 },
          { lbl: "D", p: 50 },
        ],
      },
      {
        id: "sp4",
        name: "كورتادو",
        d: "إسبريسو مع حليب مبخّر",
        e: "☕",
        img: "",
        sizes: [
          { lbl: "S", p: 40 },
          { lbl: "D", p: 50 },
        ],
      },
      {
        id: "sp5",
        name: "فلات وايت",
        d: "إسبريسو دبل مع حليب مخوض",
        e: "🥛",
        img: "",
        sizes: [
          { lbl: "S", p: 40 },
          { lbl: "D", p: 50 },
        ],
      },
      {
        id: "sp6",
        name: "لاتيه",
        d: "إسبريسو وحليب مخوض ناعم",
        e: "🍵",
        img: "",
        sizes: [
          { lbl: "S", p: 40 },
          { lbl: "D", p: 50 },
        ],
      },
      {
        id: "sp7",
        name: "سحلب مكسرات",
        d: "سحلب بالمكسرات الطازجة",
        e: "🥛",
        img: "",
        sizes: [
          { lbl: "S", p: 30 },
          { lbl: "D", p: 40 },
        ],
      },
      {
        id: "sp8",
        name: "وايت موكا",
        d: "موكا بيضاء بالشوكولاتة البيضاء",
        e: "🍫",
        img: "",
        p: 55,
      },
      {
        id: "sp9",
        name: "جراميل ميكاتو",
        d: "ميكاتو بصوص الكراميل",
        e: "🍮",
        img: "",
        p: 55,
      },
      {
        id: "sp10",
        name: "أمريكان كوفي",
        d: "قهوة أمريكية تخصص",
        e: "☕",
        img: "",
        p: 50,
      },
      {
        id: "sp11",
        name: "كورتو بلاك",
        d: "إسبريسو مركّز قصير",
        e: "⚡",
        img: "",
        p: 35,
      },
      {
        id: "sp12",
        name: "بنسون فتلة",
        d: "قهوة بنسون طازجة",
        e: "☕",
        img: "",
        p: 12,
      },
      { id: "sp13", name: "شاي", d: "شاي مصري أصيل", e: "🫖", img: "", p: 10 },
      {
        id: "sp14",
        name: "شاي فتلة",
        d: "شاي بالحليب الكريمي",
        e: "🫖",
        img: "",
        p: 12,
      },
      {
        id: "sp15",
        name: "شاي نعناع",
        d: "شاي بالنعناع الطازج",
        e: "🌿",
        img: "",
        p: 20,
      },
    ],
  },
  {
    id: "turkish",
    name: "قهوة تركي",
    e: "🇹🇷",
    items: [
      {
        id: "tk1",
        name: "قهوة تركي",
        d: "قهوة تركية أصيلة",
        e: "☕",
        img: "",
        sizes: [
          { lbl: "S", p: 20 },
          { lbl: "D", p: 30 },
        ],
      },
      {
        id: "tk2",
        name: "قهوة تركي العزاج",
        d: "قهوة تركية بمزيج العزاج",
        e: "☕",
        img: "",
        sizes: [
          { lbl: "S", p: 25 },
          { lbl: "D", p: 40 },
        ],
      },
      {
        id: "tk3",
        name: "قهوة تركي محوج",
        d: "قهوة تركية بالهيل",
        e: "☕",
        img: "",
        sizes: [
          { lbl: "S", p: 20 },
          { lbl: "D", p: 30 },
        ],
      },
      {
        id: "tk4",
        name: "قهوة العزاج محوج",
        d: "مزيج العزاج بالهيل",
        e: "☕",
        img: "",
        sizes: [
          { lbl: "S", p: 25 },
          { lbl: "D", p: 40 },
        ],
      },
    ],
  },
  {
    id: "flavored",
    name: "قهوة فليفرد",
    e: "🍯",
    items: [
      {
        id: "fl1",
        name: "قهوة فرنساوي",
        d: "قهوة بالنكهة الفرنسية",
        e: "🫖",
        img: "",
        sizes: [
          { lbl: "S", p: 30 },
          { lbl: "D", p: 40 },
        ],
      },
      {
        id: "fl2",
        name: "قهوة بندق",
        d: "قهوة بنكهة البندق",
        e: "🌰",
        img: "",
        sizes: [
          { lbl: "S", p: 30 },
          { lbl: "D", p: 40 },
        ],
      },
      {
        id: "fl3",
        name: "قهوة جراميل",
        d: "قهوة بصوص الكراميل",
        e: "🍮",
        img: "",
        sizes: [
          { lbl: "S", p: 30 },
          { lbl: "D", p: 40 },
        ],
      },
      {
        id: "fl4",
        name: "قهوة نوتيلا",
        d: "قهوة بالنوتيلا الكريمي",
        e: "🍫",
        img: "",
        sizes: [
          { lbl: "S", p: 45 },
          { lbl: "D", p: 55 },
        ],
      },
      {
        id: "fl5",
        name: "قهوة لوتس",
        d: "قهوة بكريمة اللوتس",
        e: "🍪",
        img: "",
        sizes: [
          { lbl: "S", p: 45 },
          { lbl: "D", p: 55 },
        ],
      },
      {
        id: "fl6",
        name: "قهوة جيندر",
        d: "قهوة بالزنجبيل",
        e: "🌶️",
        img: "",
        sizes: [
          { lbl: "S", p: 45 },
          { lbl: "D", p: 55 },
        ],
      },
      {
        id: "fl7",
        name: "قهوة بستاشيو",
        d: "قهوة بالفستق الحلبي",
        e: "🫛",
        img: "",
        sizes: [
          { lbl: "S", p: 45 },
          { lbl: "D", p: 55 },
        ],
      },
    ],
  },
  {
    id: "milkshake",
    name: "ميلك شيك",
    e: "🥤",
    items: [
      {
        id: "mk1",
        name: "ميلك شيك شوكلاتة",
        d: "شيك الشوكولاتة الكريمي",
        e: "🍫",
        img: "",
        p: 40,
      },
      {
        id: "mk2",
        name: "ميلك شيك فانيليا",
        d: "شيك الفانيليا الناعم",
        e: "🍦",
        img: "",
        p: 40,
      },
      {
        id: "mk3",
        name: "ميلك شيك نوتيلا",
        d: "شيك بالنوتيلا",
        e: "🍫",
        img: "",
        p: 40,
      },
      {
        id: "mk4",
        name: "ميلك شيك جيندر",
        d: "شيك بالزنجبيل",
        e: "🌶️",
        img: "",
        p: 40,
      },
      {
        id: "mk5",
        name: "ميلك شيك أوريو",
        d: "شيك بكوكيز الأوريو",
        e: "🍪",
        img: "",
        p: 40,
      },
      {
        id: "mk6",
        name: "ميلك شيك لوتس",
        d: "شيك بكريمة اللوتس",
        e: "🍪",
        img: "",
        p: 40,
      },
      {
        id: "mk7",
        name: "ميلك شيك جراميل",
        d: "شيك بصوص الكراميل",
        e: "🍮",
        img: "",
        p: 40,
      },
      {
        id: "mk8",
        name: "ميلك شيك بستاشيو",
        d: "شيك بالفستق الحلبي",
        e: "🫛",
        img: "",
        p: 40,
      },
      {
        id: "mk9",
        name: "ميلك شيك مانجو",
        d: "شيك المانجو الطازج",
        e: "🥭",
        img: "",
        p: 40,
      },
      {
        id: "mk10",
        name: "ميلك شيك فراولة",
        d: "شيك الفراولة الطازجة",
        e: "🍓",
        img: "",
        p: 40,
      },
      {
        id: "mk11",
        name: "ميلك شيك بلوبيري",
        d: "شيك البلوبيري اللذيذ",
        e: "🫐",
        img: "",
        p: 40,
      },
    ],
  },
  {
    id: "coldmix",
    name: "كولد مكس",
    e: "🧊",
    items: [
      {
        id: "cm1",
        name: "فريبتشينو",
        d: "كلاسيك / فانيليا / شوكولاتة / جراميل / نوتيلا / بستاشيو / لوتس",
        e: "🥤",
        img: "",
        p: 55,
      },
      {
        id: "cm2",
        name: "مان رايز",
        d: "مشروب المانجو المنعش",
        e: "🥭",
        img: "",
        p: 35,
      },
      {
        id: "cm3",
        name: "آيس موكا",
        d: "موكا مثلجة كريمية",
        e: "🍫",
        img: "",
        p: 50,
      },
      {
        id: "cm4",
        name: "آيس كوفي",
        d: "قهوة باردة مثلجة",
        e: "☕",
        img: "",
        p: 50,
      },
      {
        id: "cm5",
        name: "شيلي كريز",
        d: "كريز بارد منعش",
        e: "🍒",
        img: "",
        p: 40,
      },
      {
        id: "cm6",
        name: "شيري كولا",
        d: "كولا بنكهة الكرز",
        e: "🥤",
        img: "",
        p: 40,
      },
      {
        id: "cm7",
        name: "من شاين",
        d: "مشروب منعش بالليمون",
        e: "🍋",
        img: "",
        p: 35,
      },
      {
        id: "cm8",
        name: "الكتريك ليمون",
        d: "ليمون كهربائي مثلج",
        e: "⚡",
        img: "",
        p: 35,
      },
      {
        id: "cm9",
        name: "موهيتو",
        d: "بلوبيري / باشون فروت / فراولة / مانجو / خوخ / أناناس / كريز / بطيخ",
        e: "🍹",
        img: "",
        p: 35,
      },
      {
        id: "cm10",
        name: "زبادي",
        d: "بلوبيري / باشون فروت / فراولة / مانجو / أناناس / كريز / بطيخ",
        e: "🥛",
        img: "",
        p: 40,
      },
    ],
  },
  {
    id: "softdrinks",
    name: "مشروبات غازية",
    e: "🥤",
    items: [
      { id: "sd1", name: "مياه", d: "مياه معدنية", e: "💧", img: "", p: 7 },
      { id: "sd2", name: "كانز", d: "مشروب غازي", e: "🥤", img: "", p: 20 },
      { id: "sd3", name: "ريدبول", d: "مشروب طاقة", e: "⚡", img: "", p: 65 },
    ],
  },
  {
    id: "turkishblends",
    name: "توليفات البن التركي",
    e: "🫘",
    items: [
      {
        id: "tb1",
        name: "العزاج",
        d: "توليفة العزاج المميزة",
        e: "🫘",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 160 },
          { lbl: "½كجم", p: 320 },
          { lbl: "١كجم", p: 640 },
        ],
      },
      {
        id: "tb2",
        name: "شيخ العرب فاتح",
        d: "خلطة شيخ العرب الفاتحة",
        e: "🫘",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 130 },
          { lbl: "½كجم", p: 260 },
          { lbl: "١كجم", p: 520 },
        ],
      },
      {
        id: "tb3",
        name: "شيخ العرب وسط",
        d: "خلطة شيخ العرب المتوسطة",
        e: "🫘",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 135 },
          { lbl: "½كجم", p: 270 },
          { lbl: "١كجم", p: 540 },
        ],
      },
      {
        id: "tb4",
        name: "سوبر",
        d: "خلطة سوبر الفاخرة",
        e: "🫘",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 120 },
          { lbl: "½كجم", p: 240 },
          { lbl: "١كجم", p: 480 },
        ],
      },
      {
        id: "tb5",
        name: "سوبر غامق",
        d: "خلطة سوبر غامق",
        e: "🫘",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 125 },
          { lbl: "½كجم", p: 250 },
          { lbl: "١كجم", p: 500 },
        ],
      },
      {
        id: "tb6",
        name: "العزاج جولد",
        d: "خلطة العزاج الذهبية الفاخرة",
        e: "🌟",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 205 },
          { lbl: "½كجم", p: 410 },
          { lbl: "١كجم", p: 820 },
        ],
      },
    ],
  },
  {
    id: "singleorigin",
    name: "قهوة أحادية المصدر",
    e: "🌍",
    items: [
      {
        id: "so1",
        name: "بن برازيلي",
        d: "قهوة برازيلية أحادية المصدر",
        e: "🌿",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 140 },
          { lbl: "½كجم", p: 280 },
          { lbl: "١كجم", p: 560 },
        ],
      },
      {
        id: "so2",
        name: "بن كولومبي",
        d: "قهوة كولومبية أحادية المصدر",
        e: "🌿",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 240 },
          { lbl: "½كجم", p: 475 },
          { lbl: "١كجم", p: 930 },
        ],
      },
      {
        id: "so3",
        name: "بن يمني",
        d: "قهوة يمنية أصيلة فاخرة",
        e: "🌿",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 300 },
          { lbl: "½كجم", p: 600 },
          { lbl: "١كجم", p: 1200 },
        ],
      },
      {
        id: "so4",
        name: "بن حبشي",
        d: "قهوة حبشية إثيوبية أصيلة",
        e: "🌿",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 140 },
          { lbl: "½كجم", p: 280 },
          { lbl: "١كجم", p: 560 },
        ],
      },
    ],
  },
  {
    id: "instantmix",
    name: "مكسات سريعة التحفير",
    e: "⚡",
    items: [
      {
        id: "im1",
        name: "إسبريسو مكس",
        d: "مكس إسبريسو سريع التحفير",
        e: "⚡",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 160 },
          { lbl: "½كجم", p: 320 },
          { lbl: "١كجم", p: 640 },
        ],
      },
      {
        id: "im2",
        name: "بن فرنساوي",
        d: "مكس فرنساوي سريع",
        e: "🫖",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 120 },
          { lbl: "½كجم", p: 240 },
          { lbl: "١كجم", p: 480 },
        ],
      },
      {
        id: "im3",
        name: "بن بندق",
        d: "مكس بالبندق سريع",
        e: "🌰",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 120 },
          { lbl: "½كجم", p: 240 },
          { lbl: "١كجم", p: 480 },
        ],
      },
      {
        id: "im4",
        name: "نسكافية مكس",
        d: "نسكافيه سريع التحفير",
        e: "☕",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 120 },
          { lbl: "½كجم", p: 240 },
          { lbl: "١كجم", p: 480 },
        ],
      },
      {
        id: "im5",
        name: "سحلب مكس",
        d: "سحلب سريع التحضير",
        e: "🥛",
        img: "",
        sizes: [
          { lbl: "¼كجم", p: 45 },
          { lbl: "½كجم", p: 90 },
          { lbl: "١كجم", p: 180 },
        ],
      },
    ],
  },
];

/* ════════════════════════════════════
   CART ENGINE
   key = "itemId__sizeIndex"  or  "itemId__solo"
   كل حجم = entry منفصلة في الكارت تماماً
════════════════════════════════════ */
const cart = {};
const fi = (id) => {
  for (const c of MENU) {
    const f = c.items.find((i) => i.id === id);
    if (f) return f;
  }
  return null;
};
const makeKey = (id, si) =>
  id + "__" + (si !== null && si !== undefined ? si : "solo");
const getP = (item, si) =>
  item.sizes && item.sizes.length ? item.sizes[si ?? 0].p : item.p || 0;
const getLbl = (item, si) =>
  item.sizes && item.sizes.length ? item.sizes[si ?? 0].lbl : "";
const cc = () => Object.values(cart).reduce((s, q) => s + q, 0);
const ct = () =>
  Object.entries(cart).reduce((s, [k, q]) => {
    const [id, ss] = k.split("__");
    const si = ss === "solo" ? null : +ss;
    const it = fi(id);
    return s + (it ? getP(it, si) * q : 0);
  }, 0);

/* selected size displayed per card */
const selSize = {};

function setQ(key, v) {
  if (v <= 0) delete cart[key];
  else cart[key] = v;
  refreshCard(key.split("__")[0]);
  refreshFloat();
}

function refreshCard(id) {
  const card = document.getElementById("c-" + id);
  if (!card) return;
  const item = fi(id);
  if (!item) return;
  const si = item.sizes ? (selSize[id] ?? 0) : null;
  const key = makeKey(id, si);
  const q = cart[key] || 0;

  /* card active border: any size in cart */
  const anyIn = item.sizes
    ? item.sizes.some((_, i) => (cart[makeKey(id, i)] || 0) > 0)
    : (cart[makeKey(id, null)] || 0) > 0;
  card.className = "card" + (anyIn ? " on" : "");

  /* badge = total qty all sizes */
  const tot = item.sizes
    ? item.sizes.reduce((s, _, i) => s + (cart[makeKey(id, i)] || 0), 0)
    : cart[makeKey(id, null)] || 0;
  const badge = card.querySelector(".card-badge");
  if (badge) badge.textContent = tot || 0;

  /* qty control for current selected size */
  const qn = card.querySelector(".qn");
  if (qn) qn.textContent = q;
  const mb = card.querySelector(".qb:not(.p)");
  if (mb) mb.disabled = q === 0;

  /* size buttons: highlight + per-size badge */
  if (item.sizes) {
    card.querySelectorAll(".sz").forEach((el, i) => {
      el.classList.toggle("sel", i === (selSize[id] ?? 0));
      const qb = el.querySelector(".sz-q");
      if (qb) {
        const qq = cart[makeKey(id, i)] || 0;
        qb.textContent = qq;
        qb.classList.toggle("vis", qq > 0);
      }
    });
  }

  /* price */
  const pe = card.querySelector(".card-price");
  if (pe) {
    const p = getP(item, si);
    if (p) {
      pe.className = "card-price";
      pe.innerHTML = p + "<sup> ج</sup>";
    } else {
      pe.className = "card-price na";
      pe.textContent = "اسأل عن السعر";
    }
  }
}

function selectSize(itemId, si) {
  selSize[itemId] = si;
  refreshCard(itemId);
}

function refreshFloat() {
  const n = cc(),
    t = ct();
  document.getElementById("cpCount").textContent = n;
  document.getElementById("cpTotal").textContent =
    t.toLocaleString("ar-EG") + " جنيه";
  n > 0
    ? document.getElementById("cf").classList.add("show")
    : document.getElementById("cf").classList.remove("show");
}

/* ════════════════════════════════════
   BUILD CARD
════════════════════════════════════ */
function buildCard(item) {
  const si = item.sizes ? (selSize[item.id] ?? 0) : null;
  const key = makeKey(item.id, si);
  const q = cart[key] || 0;
  const p = getP(item, si);

  const d = document.createElement("div");
  d.className = "card";
  d.id = "c-" + item.id;

  let sizesHtml = "";
  if (item.sizes && item.sizes.length > 1) {
    sizesHtml = '<div class="card-sizes">';
    item.sizes.forEach((s, i) => {
      sizesHtml += `<div class="sz${i === (selSize[item.id] ?? 0) ? " sel" : ""}" onclick="event.stopPropagation();selectSize('${item.id}',${i})">
        <span class="sz-q"></span>
        <span class="sz-lbl">${s.lbl}</span>
        <span class="sz-p">${s.p}</span>
      </div>`;
    });
    sizesHtml += "</div>";
  }

  const priceHtml = p
    ? `<div class="card-price">${p}<sup> ج</sup></div>`
    : `<div class="card-price na">اسأل عن السعر</div>`;

  const imgHtml = item.img
    ? `<img class="card-img-photo" src="${item.img}" alt="${item.name}">`
    : "";

  d.innerHTML = `
    <div class="card-img">
      ${imgHtml}
      <span class="card-emoji">${item.e}</span>
      <div class="card-badge">0</div>
      <div class="card-img-ph">
        <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
        <span>صورة المنتج</span>
      </div>
    </div>
    <div class="card-body">
      <div class="card-name">${item.name}</div>
      <div class="card-desc">${item.d}</div>
      ${sizesHtml}
      <div class="card-ft">
        ${priceHtml}
        <div class="qc">
          <button class="qb" disabled>−</button>
          <span class="qn">0</span>
          <button class="qb p">+</button>
        </div>
      </div>
    </div>`;

  /* wire +/- buttons dynamically so they always use current selected size */
  const plusBtn = d.querySelector(".qb.p");
  const minusBtn = d.querySelector(".qb:not(.p)");
  const qnSpan = d.querySelector(".qn");

  const curKey = () =>
    makeKey(item.id, item.sizes ? (selSize[item.id] ?? 0) : null);

  plusBtn.onclick = (e) => {
    e.stopPropagation();
    const k = curKey();
    setQ(k, (cart[k] || 0) + 1);
  };
  minusBtn.onclick = (e) => {
    e.stopPropagation();
    const k = curKey();
    setQ(k, (cart[k] || 0) - 1);
  };

  return d;
}

/* ════════════════════════════════════
   RENDER MENU
════════════════════════════════════ */
function renderMenu(filter = "all") {
  const wrap = document.getElementById("menuWrap");
  wrap.innerHTML = "";
  let total = 0;
  MENU.forEach((cat) => {
    total += cat.items.length;
    if (filter !== "all" && filter !== cat.id) return;
    const sec = document.createElement("div");
    sec.className = "cat-sec";
    sec.id = "sec-" + cat.id;
    sec.innerHTML = `
      <div class="cat-hd">
        <div class="cat-ico">${cat.e}</div>
        <div><div class="cat-name">${cat.name}</div><div class="cat-cnt">${cat.items.length} أصناف متاحة</div></div>
        <div class="cat-line"></div>
      </div>
      <div class="grid" id="g-${cat.id}"></div>`;
    wrap.appendChild(sec);
    const grid = sec.querySelector("#g-" + cat.id);
    cat.items.forEach((it) => grid.appendChild(buildCard(it)));
  });
  document.getElementById("statItems").textContent = total;
  document.getElementById("statCats").textContent = MENU.length;
}

function buildNav() {
  const tabs = document.getElementById("navTabs");
  const all = document.createElement("button");
  all.className = "nav-tab active";
  all.textContent = "🫘 الكل";
  all.onclick = () => {
    actTab(all);
    renderMenu("all");
  };
  tabs.appendChild(all);
  MENU.forEach((cat) => {
    const b = document.createElement("button");
    b.className = "nav-tab";
    b.textContent = cat.e + " " + cat.name;
    b.onclick = () => {
      actTab(b);
      renderMenu(cat.id);
      document
        .getElementById("menu")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    };
    tabs.appendChild(b);
  });
}
function actTab(el) {
  document
    .querySelectorAll(".nav-tab")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
}

/* ════════════════════════════════════
   ORDER SHEET
════════════════════════════════════ */
function openSh() {
  renderSh();
  document.getElementById("sh").classList.add("open");
  document.getElementById("bd").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeSh() {
  document.getElementById("sh").classList.remove("open");
  document.getElementById("bd").classList.remove("open");
  document.body.style.overflow = "";
}

function renderSh() {
  const list = document.getElementById("shList"),
    tots = document.getElementById("shTots");
  list.innerHTML = "";
  tots.innerHTML = "";
  const entries = Object.entries(cart).filter(([, q]) => q > 0);
  if (!entries.length) {
    list.innerHTML =
      '<div class="empty-sh"><span>🛒</span>العربية فاضية!<br><small>ارجع واختار من المنيو</small></div>';
    return;
  }
  let sub = 0;
  entries.forEach(([key, qty]) => {
    const [id, ss] = key.split("__");
    const si = ss === "solo" ? null : +ss;
    const it = fi(id);
    if (!it) return;
    const p = getP(it, si);
    const lbl = getLbl(it, si);
    sub += p * qty;
    const d = document.createElement("div");
    d.className = "oi";
    d.innerHTML = `
      <span class="oi-ico">${it.e}</span>
      <div class="oi-inf">
        <div class="oi-nm">${it.name}</div>
        ${lbl ? `<span class="oi-sz">${lbl}</span>` : ""}
        <div class="oi-un">${p} ج × ${qty}</div>
      </div>
      <div class="oi-ctrl">
        <button class="oi-b" onclick="shQ('${key}',-1)">−</button>
        <span class="oi-q">${qty}</span>
        <button class="oi-b" onclick="shQ('${key}',1)">+</button>
      </div>
      <div class="oi-pr">${p * qty} ج</div>`;
    list.appendChild(d);
  });
  tots.innerHTML = `<div class="tots">
    <div class="tr"><span>المجموع</span><span>${sub} ج</span></div>
    <div class="tr"><span>التوصيل</span><span>🛵 يُحدد عند التأكيد</span></div>
    <div class="tr gr"><span>الإجمالي</span><span>${sub} ج</span></div>
  </div>`;
}

function shQ(key, delta) {
  setQ(key, (cart[key] || 0) + delta);
  renderSh();
  if (cc() === 0) closeSh();
}

/* ════════════════════════════════════
   WHATSAPP — كل حجم سطر منفصل
════════════════════════════════════ */
function sendWA() {
  const n = document.getElementById("iN").value.trim();
  const a = document.getElementById("iA").value.trim();
  const nt = document.getElementById("iNt").value.trim();
  if (!n) {
    alert("من فضلك اكتب اسمك ☕");
    document.getElementById("iN").focus();
    return;
  }
  if (!a) {
    alert("من فضلك اكتب العنوان أو رقم الطاولة 📍");
    document.getElementById("iA").focus();
    return;
  }
  if (cc() === 0) {
    alert("العربية فاضية!");
    return;
  }

  let msg = `☕ *طلب جديد — بن المزاج*\n━━━━━━━━━━━━━━━━━━━━\n👤 *الاسم:* ${n}\n📍 *الموقع / الطاولة:* ${a}\n━━━━━━━━━━━━━━━━━━━━\n📋 *الطلبات:*\n`;

  Object.entries(cart)
    .filter(([, q]) => q > 0)
    .forEach(([key, qty]) => {
      const [id, ss] = key.split("__");
      const si = ss === "solo" ? null : +ss;
      const it = fi(id);
      if (!it) return;
      const p = getP(it, si);
      const lbl = getLbl(it, si);
      msg += `  • ${it.e} ${it.name}`;
      if (lbl) msg += ` [${lbl}]`;
      msg += `  ×${qty}  ◄  ${p * qty} العدد\n`;
    });

  msg += `━━━━━━━━━━━━━━━━━━━━\n💰 *الإجمالي: ${ct()} جنيه*\n`;
  if (nt) msg += `📝 *ملاحظات:* ${nt}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n🕐 ${new Date().toLocaleString("ar-EG")}`;
  window.open(
    `https://wa.me/201150782006?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}

/* floating beans */
[
  { w: 50, t: 10, l: 5, d: 18, dl: -3 },
  { w: 36, t: 22, l: 88, d: 23, dl: -8 },
  { w: 60, t: 62, l: 12, d: 27, dl: -1 },
  { w: 28, t: 78, l: 72, d: 20, dl: -5 },
  { w: 46, t: 42, l: 52, d: 30, dl: -13 },
  { w: 34, t: 68, l: 38, d: 24, dl: -7 },
  { w: 54, t: 18, l: 62, d: 29, dl: -2 },
  { w: 40, t: 52, l: 80, d: 19, dl: -9 },
].forEach((p) => {
  const b = document.createElement("div");
  b.className = "fb";
  b.style.cssText = `--w:${p.w}px;top:${p.t}%;left:${p.l}%;--d:${p.d}s;--dl:${p.dl}s;`;
  document.getElementById("beansWrap").appendChild(b);
});

buildNav();
renderMenu();
