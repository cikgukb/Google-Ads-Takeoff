const dict = {
    EN: {
        appTitle: "Google Ads Copy Generator",
        appSubtitle: "Draft high-converting ads effortlessly.",
        formHeading: "Ad Components",
        previewHeading: "Live Preview",
        lblFinalUrl: "Final URL",
        hintFinalUrl: "Where people go after clicking your ad.",
        lblPath1: "Path 1",
        lblPath2: "Path 2",
        lblHeadline1: "Headline 1",
        hintHeadline1: "Tip: Include exact numbers or your main keyword.",
        lblHeadline2: "Headline 2",
        hintHeadline2: "Tip: Trigger FOMO or highlight a specific promotion.",
        lblHeadline3: "Headline 3",
        hintHeadline3: "Tip: Guide with a Call-To-Action (CTA) or unique benefit.",
        lblDesc1: "Description 1",
        hintDesc1: "Tip: Be customer-focused and address their main objections.",
        lblDesc2: "Description 2",
        hintDesc2: "Tip: Use strong verbs and proper punctuation (Title Case) to stand out.",
        btnCopy: "Copy Ad Text",
        btnClear: "Clear All",
        plFinalUrl: "https://www.example.com",
        plPath1: "Sale",
        plPath2: "Promo",
        plHeadline1: "Premium Shoes Online",
        plHeadline2: "Save 20% Today",
        plHeadline3: "Free Shipping",
        plDesc1: "Discover the best premium shoes. Shop our exclusive collection and elevate your style.",
        plDesc2: "Limited time offer. Get 20% off your first order plus free shipping on all items.",
        ftrBuilt: "This system is exclusively built by",
        ftrDesc: "If you are interested in collaborating or would like to make a donation to support this project, please do so below:",
        ftrDonate: "💰 CikguKB Project Development Fund",
        policyTitle: "⚠️ Google Ads Policy Guidelines",
        policy1: "❌ No excessive capitalization (e.g. \"FREE\", \"BUY\").",
        policy2: "❌ No excessive punctuation (e.g. \"Buy here!!!\", \"Promo???\").",
        policy3: "❌ No unsupported claims (e.g. \"#1\", \"Best\") without proof.",
        policy4: "❌ No phone numbers in ad text (use Call Assets instead).",
        policy5: "❌ No gimmicky spelling (e.g. \"C l e a r a n c e\")."
    },
    MS: {
        appTitle: "Penjana Teks Iklan Google",
        appSubtitle: "Hasilkan iklan berkonversi tinggi dengan mudah.",
        formHeading: "Komponen Iklan",
        previewHeading: "Pratonton Maya",
        lblFinalUrl: "URL Akhir",
        hintFinalUrl: "Pautan destinasi selepas iklan diklik.",
        lblPath1: "Laluan 1",
        lblPath2: "Laluan 2",
        lblHeadline1: "Tajuk 1",
        hintHeadline1: "Tip: Gunakan nombor tepat atau kata kunci utama anda.",
        lblHeadline2: "Tajuk 2",
        hintHeadline2: "Tip: Cetuskan FOMO atau serlahkan promosi spesifik.",
        lblHeadline3: "Tajuk 3",
        hintHeadline3: "Tip: Gunakan Seruan Bertindak (CTA) atau manfaat unik.",
        lblDesc1: "Penerangan 1",
        hintDesc1: "Tip: Fokus pada pelanggan dan selesaikan keraguan mereka.",
        lblDesc2: "Penerangan 2",
        hintDesc2: "Tip: Guna ayat aktif dan format yang menonjol (Huruf Besar).",
        btnCopy: "Salin Teks Iklan",
        btnClear: "Padam Semua",
        plFinalUrl: "https://www.contoh.com.my",
        plPath1: "Jualan",
        plPath2: "Promo",
        plHeadline1: "Kasut Premium Dalam Talian",
        plHeadline2: "Jimat 20% Hari Ini",
        plHeadline3: "Penghantaran Percuma",
        plDesc1: "Temui kasut premium terbaik. Beli koleksi eksklusif kami dan tingkatkan gaya anda.",
        plDesc2: "Tawaran masa terhad. Dapatkan diskaun 20% untuk pesanan pertama & penghantaran percuma.",
        ftrBuilt: "Sistem ini dibina secara eksklusif oleh",
        ftrDesc: "Sekiranya berminat untuk kerjasama mahupun ingin menyalurkan sumbangan (donation) tanda sokongan terhadap projek ini, sila berbuat demikian di bawah:",
        ftrDonate: "💰 Tabung Pembangunan Projek CikguKB",
        policyTitle: "⚠️ Garis Panduan Polisi Google Ads",
        policy1: "❌ Dilarang huruf besar berlebihan (cth: \"PERCUMA\", \"BELI\").",
        policy2: "❌ Dilarang tanda baca berlebihan (cth: \"Beli di sini!!!\").",
        policy3: "❌ Tiada dakwaan tidak berasas (cth: \"#1\", \"Terbaik\") tanpa pengesahan pihak ketiga.",
        policy4: "❌ Jangan letak nombor telefon dalam teks (guna Aset Panggilan).",
        policy5: "❌ Tiada ejaan pelik / jarak tidak wajar (cth: \"M u r a h\")."
    }
};

let currentLang = 'EN';

// DOM Elements
const inputs = {
    finalUrl: document.getElementById('final-url'),
    path1: document.getElementById('path-1'),
    path2: document.getElementById('path-2'),
    headline1: document.getElementById('headline-1'),
    headline2: document.getElementById('headline-2'),
    headline3: document.getElementById('headline-3'),
    desc1: document.getElementById('desc-1'),
    desc2: document.getElementById('desc-2')
};

const counts = {
    path1: document.getElementById('count-path-1'),
    path2: document.getElementById('count-path-2'),
    headline1: document.getElementById('count-headline-1'),
    headline2: document.getElementById('count-headline-2'),
    headline3: document.getElementById('count-headline-3'),
    desc1: document.getElementById('count-desc-1'),
    desc2: document.getElementById('count-desc-2')
};

const preview = {
    url: document.getElementById('prev-url'),
    path: document.getElementById('prev-path'),
    headlines: document.getElementById('prev-headlines'),
    descriptions: document.getElementById('prev-descriptions')
};

// Event Listeners for auto-update
Object.keys(inputs).forEach(key => {
    inputs[key].addEventListener('input', () => {
        updateCounts();
        updatePreview();
    });
});

function updateCounts() {
    const limits = {
        path1: 15, path2: 15,
        headline1: 30, headline2: 30, headline3: 30,
        desc1: 90, desc2: 90
    };

    Object.keys(limits).forEach(key => {
        const val = inputs[key].value.length;
        const max = limits[key];
        counts[key].textContent = `${val}/${max}`;
        if (val > max) {
            counts[key].classList.add('error');
        } else {
            counts[key].classList.remove('error');
        }
    });
}

function updatePreview() {
    // URL and Paths
    let base = inputs.finalUrl.value.replace(/^https?:\/\//, '').replace(/\/$/, '') || 'www.example.com';
    base = base.split('/')[0]; // only get domain
    preview.url.textContent = base;

    let pathStr = '';
    if (inputs.path1.value) pathStr += ' › ' + inputs.path1.value;
    if (inputs.path2.value) pathStr += ' › ' + inputs.path2.value;
    preview.path.textContent = pathStr;

    // Headlines
    let hList = [];
    if (inputs.headline1.value) hList.push(inputs.headline1.value);
    if (inputs.headline2.value) hList.push(inputs.headline2.value);
    if (inputs.headline3.value) hList.push(inputs.headline3.value);
    
    // Default placeholders
    if (hList.length === 0) {
        hList = [dict[currentLang].plHeadline1, dict[currentLang].plHeadline2, dict[currentLang].plHeadline3];
    }
    preview.headlines.textContent = hList.join(' | ');

    // Descriptions
    let dList = [];
    if (inputs.desc1.value) dList.push(inputs.desc1.value);
    if (inputs.desc2.value) dList.push(inputs.desc2.value);

    if (dList.length === 0) {
        dList = [dict[currentLang].plDesc1, dict[currentLang].plDesc2];
    }
    preview.descriptions.textContent = dList.join(' ');
}

// Language Toggle
document.getElementById('btn-en').addEventListener('click', () => switchLang('EN'));
document.getElementById('btn-ms').addEventListener('click', () => switchLang('MS'));

function switchLang(lang) {
    currentLang = lang;
    
    // update buttons
    if(lang === 'EN') {
        document.getElementById('btn-en').classList.add('active');
        document.getElementById('btn-ms').classList.remove('active');
    } else {
        document.getElementById('btn-en').classList.remove('active');
        document.getElementById('btn-ms').classList.add('active');
    }

    // update static texts
    document.getElementById('app-title').textContent = dict[lang].appTitle;
    document.getElementById('app-subtitle').textContent = dict[lang].appSubtitle;
    document.getElementById('form-heading').textContent = dict[lang].formHeading;
    document.getElementById('preview-heading').textContent = dict[lang].previewHeading;
    
    // update labels (avoid overriding character count spans)
    document.getElementById('lbl-final-url').textContent = dict[lang].lblFinalUrl;
    document.getElementById('lbl-path-1').childNodes[0].textContent = dict[lang].lblPath1 + " ";
    document.getElementById('lbl-path-2').childNodes[0].textContent = dict[lang].lblPath2 + " ";
    document.getElementById('lbl-headline-1').childNodes[0].textContent = dict[lang].lblHeadline1 + " ";
    document.getElementById('lbl-headline-2').childNodes[0].textContent = dict[lang].lblHeadline2 + " ";
    document.getElementById('lbl-headline-3').childNodes[0].textContent = dict[lang].lblHeadline3 + " ";
    document.getElementById('lbl-desc-1').childNodes[0].textContent = dict[lang].lblDesc1 + " ";
    document.getElementById('lbl-desc-2').childNodes[0].textContent = dict[lang].lblDesc2 + " ";

    // update hints
    document.getElementById('hint-final-url').textContent = dict[lang].hintFinalUrl;
    document.getElementById('hint-headline-1').textContent = dict[lang].hintHeadline1;
    document.getElementById('hint-headline-2').textContent = dict[lang].hintHeadline2;
    document.getElementById('hint-headline-3').textContent = dict[lang].hintHeadline3;
    document.getElementById('hint-desc-1').textContent = dict[lang].hintDesc1;
    document.getElementById('hint-desc-2').textContent = dict[lang].hintDesc2;

    // update placeholders
    inputs.finalUrl.placeholder = dict[lang].plFinalUrl;
    inputs.path1.placeholder = dict[lang].plPath1;
    inputs.path2.placeholder = dict[lang].plPath2;
    inputs.headline1.placeholder = dict[lang].plHeadline1;
    inputs.headline2.placeholder = dict[lang].plHeadline2;
    inputs.headline3.placeholder = dict[lang].plHeadline3;
    inputs.desc1.placeholder = dict[lang].plDesc1;
    inputs.desc2.placeholder = dict[lang].plDesc2;

    // update buttons
    document.getElementById('btn-copy').textContent = dict[lang].btnCopy;
    document.getElementById('btn-clear').textContent = dict[lang].btnClear;

    // update footer
    document.getElementById('ftr-built').textContent = dict[lang].ftrBuilt;
    document.getElementById('ftr-desc').textContent = dict[lang].ftrDesc;
    document.getElementById('ftr-donate').textContent = dict[lang].ftrDonate;

    // update policies
    document.getElementById('policy-title').textContent = dict[lang].policyTitle;
    document.getElementById('policy-1').textContent = dict[lang].policy1;
    document.getElementById('policy-2').textContent = dict[lang].policy2;
    document.getElementById('policy-3').textContent = dict[lang].policy3;
    document.getElementById('policy-4').textContent = dict[lang].policy4;
    document.getElementById('policy-5').textContent = dict[lang].policy5;

    updatePreview();
}

// Buttons
document.getElementById('btn-clear').addEventListener('click', (e) => {
    e.preventDefault();
    Object.keys(inputs).forEach(key => inputs[key].value = '');
    updateCounts();
    updatePreview();
});

document.getElementById('btn-copy').addEventListener('click', (e) => {
    e.preventDefault();
    const adText = `
Final URL: ${inputs.finalUrl.value}
Display Path: ${inputs.path1.value} / ${inputs.path2.value}
Headlines:
1. ${inputs.headline1.value}
2. ${inputs.headline2.value}
3. ${inputs.headline3.value}
Descriptions:
1. ${inputs.desc1.value}
2. ${inputs.desc2.value}
    `.trim();

    navigator.clipboard.writeText(adText).then(() => {
        const btn = document.getElementById('btn-copy');
        const origText = btn.textContent;
        btn.textContent = currentLang === 'EN' ? "Copied!" : "Tersalin!";
        setTimeout(() => {
            btn.textContent = origText;
        }, 2000);
    });
});

// Init
updateCounts();
updatePreview();
