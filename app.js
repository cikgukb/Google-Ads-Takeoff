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
        policy5: "❌ No gimmicky spelling (e.g. \"C l e a r a n c e\").",
        // Tab labels
        tabCopy: "Ad Copy Generator",
        tabBudget: "Budget Calculator",
        // Budget Calculator
        budgetHeading: "📊 Budget Calculator",
        budgetDesc: "Estimate your monthly and daily Google Ads budget based on your campaign goals.",
        lblCampaignType: "Campaign Type",
        hintCampaignType: "Search = high-intent clicks. Display = wider reach & branding.",
        optSearch: "🔍 Search Ads",
        optDisplay: "🖼️ Display Ads",
        lblCalcGoal: "Calculation Goal",
        hintCalcGoal: "Choose whether you want to calculate by traffic volume or conversions.",
        optClicks: "🎯 Target Clicks",
        optConversions: "💰 Target Conversions",
        lblTargetNumber: "Target Clicks / Month",
        lblTargetConv: "Target Conversions / Month",
        hintTargetNumber: "How many clicks (or conversions) you want per month.",
        lblEstCpc: "Estimated CPC (RM)",
        hintEstCpc: "Use Google Keyword Planner to estimate your CPC.",
        lblConvRate: "Conversion Rate (%)",
        hintConvRate: "Industry average: Search ~3-5%, Display ~0.5-1%.",
        btnCalculate: "📊 Calculate Budget",
        resultTitle: "💡 Estimated Budget",
        resLblMonthly: "Monthly Budget",
        resLblDaily: "Daily Budget",
        resLblClicks: "Est. Clicks / Month",
        resLblConv: "Est. Conversions / Month",
        lblProductPrice: "🏷️ Product Price (RM)",
        hintProductPrice: "Used to calculate your Marketing Margin ROI.",
        lblMargin: "Marketing Margin (ROI)",
        benchmarkTitle: "📌 Industry Benchmarks",
        formulaTitle: "📐 Formulas Used",
        formulaClicks: "Budget = Target Clicks × CPC",
        formulaConv: "Budget = (Target Conversions ÷ CVR) × CPC",
        formulaDaily: "Monthly Budget ÷ 30.4",
        explainTitle: "⚠️ Why is this budget so high?",
        explainDesc1: "Display Ads typically have a very low Conversion Rate (0.5% - 1.0%) compared to Search Ads.",
        explainDesc2: "This means you need a massive amount of clicks (traffic volume) just to hit your target, driving the total cost up.",
        // Industry guide
        lblIndustryType: "📋 Industry CPC Guide (Malaysia)",
        hintIndustryType: "Select your industry to auto-fill the estimated CPC.",
        optSelectIndustry: "— Select your industry —",
        optFood: "🍱 Ready-to-Eat Product / F&B",
        optRealEstate: "🏠 Real Estate Negotiator",
        optInsurance: "🛡️ Insurance Agent",
        optUnitTrust: "📈 Unit Trust Agent",
        optHomestay: "🏡 Homestay Operator",
        optCarWorkshop: "🔧 Car Workshop",
        optTailor: "🧵 Tailor",
        optBoutique: "👗 Fashion Boutique",
        optBarber: "💈 Barber Shop",
        optTuition: "📚 Tuition Centre",
        optTravel: "🧳 Travel Agent",
        optKindergarten: "🏫 Kindergarten",
        optOthers: "✨ Others / General",
        lblAdIndustry: "💡 Need Idea? Select Industry",
        hintAdIndustry: "Select your industry to reveal Path ideas.",
        // Feedback modal
        ftrFeedbackLink: "Complaints & Feedback",
        modalTitle: "📩 Complaints & Feedback",
        modalDesc: "Please fill in the form below to submit your complaint or suggestion for improvement.",
        lblFbName: "Name",
        plFbName: "Your full name",
        lblFbPhone: "Phone Number",
        plFbPhone: "012-3456789",
        lblFbEmail: "Email",
        plFbEmail: "example@email.com",
        lblFbDetails: "Complaint / Feedback Details",
        plFbDetails: "Please describe your complaint or suggestion here...",
        btnSubmitFeedback: "📨 Submit Feedback",
        feedbackSent: "Thank you! Your email client will open shortly."
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
        policy5: "❌ Tiada ejaan pelik / jarak tidak wajar (cth: \"M u r a h\").",
        // Tab labels
        tabCopy: "Penjana Teks Iklan",
        tabBudget: "Kalkulator Bajet",
        // Budget Calculator
        budgetHeading: "📊 Kalkulator Bajet",
        budgetDesc: "Anggarkan bajet bulanan dan harian Google Ads berdasarkan matlamat kempen anda.",
        lblCampaignType: "Jenis Kempen",
        hintCampaignType: "Search = klik niat tinggi. Display = jangkauan luas & penjenamaan.",
        optSearch: "🔍 Iklan Carian",
        optDisplay: "🖼️ Iklan Paparan",
        lblCalcGoal: "Matlamat Pengiraan",
        hintCalcGoal: "Pilih sama ada anda mahu mengira berdasarkan volum trafik atau penukaran.",
        optClicks: "🎯 Sasaran Klik",
        optConversions: "💰 Sasaran Penukaran",
        lblTargetNumber: "Sasaran Klik / Bulan",
        lblTargetConv: "Sasaran Penukaran / Bulan",
        hintTargetNumber: "Berapa banyak klik (atau penukaran) yang anda mahu setiap bulan.",
        lblEstCpc: "Anggaran CPC (RM)",
        hintEstCpc: "Gunakan Google Keyword Planner untuk menganggarkan CPC anda.",
        lblConvRate: "Kadar Penukaran (%)",
        hintConvRate: "Purata industri: Search ~3-5%, Display ~0.5-1%.",
        btnCalculate: "📊 Kira Bajet",
        resultTitle: "💡 Anggaran Bajet",
        resLblMonthly: "Bajet Bulanan",
        resLblDaily: "Bajet Harian",
        resLblClicks: "Angg. Klik / Bulan",
        resLblConv: "Angg. Penukaran / Bulan",
        lblProductPrice: "🏷️ Harga Produk (RM)",
        hintProductPrice: "Digunakan untuk kira Marketing Margin ROI anda.",
        lblMargin: "Marketing Margin (ROI)",
        benchmarkTitle: "📌 Penanda Aras Industri",
        formulaTitle: "📐 Formula Digunakan",
        formulaClicks: "Bajet = Sasaran Klik × CPC",
        formulaConv: "Bajet = (Sasaran Penukaran ÷ CVR) × CPC",
        formulaDaily: "Bajet Bulanan ÷ 30.4",
        explainTitle: "⚠️ Kenapa Anggaran Menjadi Tinggi?",
        explainDesc1: "Display Ads biasanya mempunyai Kadar Penukaran (CVR) yang sangat rendah (0.5% - 1.0%) berbanding Search Ads.",
        explainDesc2: "Ini bermakna anda perlukan jumlah klik yang sangat banyak untuk menyaring pembeli, menjadikan kos keseluruhan melambung.",
        // Industry guide
        lblIndustryType: "📋 Panduan CPC Mengikut Industri (Malaysia)",
        hintIndustryType: "Pilih industri anda untuk auto-isi anggaran CPC.",
        optSelectIndustry: "— Pilih industri anda —",
        optFood: "🍱 Produk Ready-to-Eat / F&B",
        optRealEstate: "🏠 Perunding Hartanah",
        optInsurance: "🛡️ Ejen Insurans",
        optUnitTrust: "📈 Ejen Unit Amanah",
        optHomestay: "🏡 Peniaga Homestay",
        optCarWorkshop: "🔧 Bengkel Kereta",
        optTailor: "🧵 Tukang Jahit",
        optBoutique: "👗 Butik Fesyen",
        optBarber: "💈 Kedai Barber",
        optTuition: "📚 Kelas Tuisyen",
        optTravel: "🧳 Ejen Pelancongan",
        optKindergarten: "🏫 Pengurus Tadika",
        optOthers: "✨ Lain-lain / Umum",
        lblAdIndustry: "💡 Kering Idea? Pilih Industri",
        hintAdIndustry: "Pilih industri anda untuk melihat cadangan Path.",
        // Feedback modal
        ftrFeedbackLink: "Aduan & Maklum Balas",
        modalTitle: "📩 Aduan & Maklum Balas",
        modalDesc: "Sila isi borang di bawah untuk menyampaikan aduan atau cadangan penambahbaikan.",
        lblFbName: "Nama",
        plFbName: "Nama penuh anda",
        lblFbPhone: "Nombor Telefon",
        plFbPhone: "012-3456789",
        lblFbEmail: "Emel",
        plFbEmail: "contoh@email.com",
        lblFbDetails: "Butiran Aduan / Maklum Balas",
        plFbDetails: "Sila nyatakan butiran aduan atau cadangan anda di sini...",
        btnSubmitFeedback: "📨 Hantar Maklum Balas",
        feedbackSent: "Terima kasih! Klien emel anda akan dibuka sebentar lagi."
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

    // update tab labels
    document.getElementById('tab-label-copy').textContent = dict[lang].tabCopy;
    document.getElementById('tab-label-budget').textContent = dict[lang].tabBudget;

    // update budget calculator
    document.getElementById('budget-heading').textContent = dict[lang].budgetHeading;
    document.getElementById('budget-desc').textContent = dict[lang].budgetDesc;
    document.getElementById('lbl-campaign-type').textContent = dict[lang].lblCampaignType;
    document.getElementById('hint-campaign-type').textContent = dict[lang].hintCampaignType;
    document.getElementById('lbl-calc-goal').textContent = dict[lang].lblCalcGoal;
    document.getElementById('hint-calc-goal').textContent = dict[lang].hintCalcGoal;
    document.getElementById('hint-target-number').textContent = dict[lang].hintTargetNumber;
    document.getElementById('lbl-est-cpc').textContent = dict[lang].lblEstCpc;
    document.getElementById('hint-est-cpc').textContent = dict[lang].hintEstCpc;
    document.getElementById('lbl-conv-rate').textContent = dict[lang].lblConvRate;
    document.getElementById('hint-conv-rate').textContent = dict[lang].hintConvRate;
    document.getElementById('btn-calculate').textContent = dict[lang].btnCalculate;
    document.getElementById('result-title').textContent = dict[lang].resultTitle;
    document.getElementById('res-lbl-monthly').textContent = dict[lang].resLblMonthly;
    document.getElementById('res-lbl-daily').textContent = dict[lang].resLblDaily;
    document.getElementById('res-lbl-clicks').textContent = dict[lang].resLblClicks;
    document.getElementById('res-lbl-conv').textContent = dict[lang].resLblConv;
    document.getElementById('lbl-product-price').textContent = dict[lang].lblProductPrice;
    document.getElementById('hint-product-price').textContent = dict[lang].hintProductPrice;
    document.getElementById('res-lbl-margin').textContent = dict[lang].lblMargin;
    document.getElementById('benchmark-title').textContent = dict[lang].benchmarkTitle;
    document.getElementById('formula-title').textContent = dict[lang].formulaTitle;

    document.getElementById('explain-title').textContent = dict[lang].explainTitle;
    document.getElementById('explain-desc1').textContent = dict[lang].explainDesc1;
    document.getElementById('explain-desc2').textContent = dict[lang].explainDesc2;

    // update select options
    const ctOpts = document.getElementById('campaign-type').options;
    ctOpts[0].text = dict[lang].optSearch;
    ctOpts[1].text = dict[lang].optDisplay;
    const cgOpts = document.getElementById('calc-goal').options;
    cgOpts[0].text = dict[lang].optClicks;
    cgOpts[1].text = dict[lang].optConversions;

    // update industry guides
    document.getElementById('lbl-industry-type').textContent = dict[lang].lblIndustryType;
    document.getElementById('hint-industry-type').textContent = dict[lang].hintIndustryType;
    document.getElementById('lbl-ad-industry').textContent = dict[lang].lblAdIndustry;
    document.getElementById('hint-ad-industry').textContent = dict[lang].hintAdIndustry;

    [document.getElementById('industry-type').options, document.getElementById('ad-industry-type').options].forEach(opts => {
        opts[0].text = dict[lang].optSelectIndustry;
        opts[1].text = dict[lang].optFood;
        opts[2].text = dict[lang].optRealEstate;
        opts[3].text = dict[lang].optInsurance;
        opts[4].text = dict[lang].optUnitTrust;
        opts[5].text = dict[lang].optHomestay;
        opts[6].text = dict[lang].optCarWorkshop;
        opts[7].text = dict[lang].optTailor;
        opts[8].text = dict[lang].optBoutique;
        opts[9].text = dict[lang].optBarber;
        opts[10].text = dict[lang].optTuition;
        opts[11].text = dict[lang].optTravel;
        opts[12].text = dict[lang].optKindergarten;
        opts[13].text = dict[lang].optOthers;
    });

    // update target label based on current goal
    updateTargetLabel();

    // update feedback link
    document.getElementById('ftr-feedback-link').textContent = dict[lang].ftrFeedbackLink;

    updatePreview();
    renderPathSuggestions(); // re-render pills if any
}

// ==================== TAB SWITCHING ====================
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all tabs and content
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Add active to clicked
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        document.getElementById(targetId).classList.add('active');
    });
});

// ==================== BUDGET CALCULATOR ====================
const calcGoalSelect = document.getElementById('calc-goal');
const campaignTypeSelect = document.getElementById('campaign-type');
const cvrGroup = document.getElementById('cvr-group');
const convRateInput = document.getElementById('conv-rate');
const targetNumberInput = document.getElementById('target-number');
const estCpcInput = document.getElementById('est-cpc');
const industrySelect = document.getElementById('industry-type');
const industryCpcInfo = document.getElementById('industry-cpc-info');
const industryCpcRange = document.getElementById('industry-cpc-range');

// Industry CPC data for Malaysia (based on market research)
const industryCpcData = {
    custom:       { cpc: null,  range: '' },
    food:         { cpc: 1.50,  range: 'RM 1.00 – 3.00 (avg RM 1.50)' },
    realestate:   { cpc: 8.00,  range: 'RM 5.00 – 25.00 (avg RM 8.00)' },
    insurance:    { cpc: 10.00, range: 'RM 8.00 – 25.00 (avg RM 10.00)' },
    unittrust:    { cpc: 8.00,  range: 'RM 5.00 – 20.00 (avg RM 8.00)' },
    homestay:     { cpc: 2.50,  range: 'RM 1.00 – 6.00 (avg RM 2.50)' },
    carworkshop:  { cpc: 2.00,  range: 'RM 1.00 – 5.00 (avg RM 2.00)' },
    tailor:       { cpc: 1.50,  range: 'RM 0.80 – 3.00 (avg RM 1.50)' },
    boutique:     { cpc: 2.00,  range: 'RM 1.00 – 5.00 (avg RM 2.00)' },
    barber:       { cpc: 1.50,  range: 'RM 0.80 – 3.00 (avg RM 1.50)' },
    tuition:      { cpc: 3.50,  range: 'RM 2.00 – 8.00 (avg RM 3.50)' },
    travel:       { cpc: 2.00,  range: 'RM 1.00 – 4.00 (avg RM 2.00)' },
    kindergarten: { cpc: 2.50,  range: 'RM 1.00 – 5.00 (avg RM 2.50)' },
    others:       { cpc: 1.50,  range: 'RM 1.00 – 3.00 (avg RM 1.50)' }
};

// Path Suggestions Data
const pathSuggestionsData = {
    EN: {
        food:         [['Promo', 'Combo'], ['Menu', 'Tasty'], ['Order', 'Now']],
        realestate:   [['House', 'New'], ['Project', 'Terrace'], ['Viewing', 'Free']],
        insurance:    [['Plan', 'Family'], ['Quote', 'Free'], ['Medical', 'Card']],
        unittrust:    [['Fund', 'Invest'], ['Save', 'Today'], ['Dividend', 'High']],
        homestay:     [['Book', 'Now'], ['Pool', 'Swim'], ['Package', 'Holiday']],
        carworkshop:  [['Service', 'Car'], ['Oil', 'Change'], ['Mechanic', 'Expert']],
        tailor:       [['Clothes', 'Raya'], ['Tailor', 'Early'], ['Stitch', 'Neat']],
        boutique:     [['Hijab', 'Bawal'], ['Collection', 'New'], ['Discount', '20Percent']],
        barber:       [['Cut', 'Hair'], ['Fade', 'Expert'], ['Slot', 'Limited']],
        tuition:      [['Register', 'Now'], ['Class', 'Online'], ['Subject', 'Core']],
        travel:       [['Package', 'Holiday'], ['Ticket', 'Cheap'], ['Tour', 'Best']],
        kindergarten: [['Pre', 'School'], ['Intake', '2024'], ['Kids', 'Smart']],
        others:       [['Promo', 'Special'], ['Offer', 'Limited'], ['Sale', 'Cheap']]
    },
    MS: {
        food:         [['Promo', 'Kombo'], ['Menu', 'Sedap'], ['Order', 'Sekarang']],
        realestate:   [['Rumah', 'Baru'], ['Projek', 'Teres'], ['Viewing', 'Percuma']],
        insurance:    [['Pelan', 'Keluarga'], ['Sebut', 'Harga'], ['Medikal', 'Kad']],
        unittrust:    [['Dana', 'Labur'], ['Simpan', 'HariIni'], ['Dividen', 'Tinggi']],
        homestay:     [['Tempah', 'Sekarang'], ['Kolam', 'Renang'], ['Pakej', 'Cuti']],
        carworkshop:  [['Servis', 'Kereta'], ['Tukar', 'Minyak'], ['Pomen', 'Pakar']],
        tailor:       [['Baju', 'Raya'], ['Tempah', 'Awal'], ['Jahitan', 'Kemas']],
        boutique:     [['Tudung', 'Bawal'], ['Koleksi', 'Terbaru'], ['Khas', '20Peratus']],
        barber:       [['Potong', 'Rambut'], ['Fade', 'Pakar'], ['Slot', 'Terhad']],
        tuition:      [['Daftar', 'Segera'], ['Kelas', 'Online'], ['Subjek', 'Teras']],
        travel:       [['Pakej', 'Cuti'], ['Tiket', 'Murah'], ['Travel', 'Selesa']],
        kindergarten: [['Pra', 'Sekolah'], ['Kemasukan', '2024'], ['Tadika', 'Islamik']],
        others:       [['Promo', 'Istimewa'], ['Tawaran', 'Terhad'], ['Jualan', 'Murah']]
    }
};

// Ad Copy Industry selector logic
const adIndustrySelect = document.getElementById('ad-industry-type');
const pathSuggestionsContainer = document.getElementById('path-suggestions');

adIndustrySelect.addEventListener('change', renderPathSuggestions);

function renderPathSuggestions() {
    pathSuggestionsContainer.innerHTML = '';
    const selected = adIndustrySelect.value;
    if (selected === 'custom') return;

    const suggestions = pathSuggestionsData[currentLang][selected];
    if (suggestions) {
        suggestions.forEach(pair => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'path-pill';
            btn.innerHTML = `📝 ${pair[0]} / ${pair[1]}`;
            btn.addEventListener('click', () => {
                inputs.path1.value = pair[0];
                inputs.path2.value = pair[1];
                updateCounts();
                updatePreview();
            });
            pathSuggestionsContainer.appendChild(btn);
        });
    }
}

// Industry selector logic
industrySelect.addEventListener('change', () => {
    const selected = industrySelect.value;
    const data = industryCpcData[selected];

    if (selected !== 'custom' && data) {
        estCpcInput.value = data.cpc;
        industryCpcRange.textContent = '💡 CPC range: ' + data.range;
        industryCpcInfo.style.display = 'block';
        calculateBudget();
    } else {
        industryCpcInfo.style.display = 'none';
    }
});

function updateTargetLabel() {
    const goal = calcGoalSelect.value;
    const lbl = document.getElementById('lbl-target-number');
    if (goal === 'clicks') {
        lbl.textContent = dict[currentLang].lblTargetNumber;
    } else {
        lbl.textContent = dict[currentLang].lblTargetConv;
    }
}

// Show/hide conversion rate based on goal
calcGoalSelect.addEventListener('change', () => {
    const priceGroup = document.getElementById('price-group');
    const resMarginRow = document.getElementById('res-margin-row');

    if (calcGoalSelect.value === 'conversions') {
        cvrGroup.style.display = 'block';
        priceGroup.style.display = 'block';
        document.getElementById('res-conv-row').style.display = 'flex';
        resMarginRow.style.display = 'flex';
    } else {
        cvrGroup.style.display = 'none';
        priceGroup.style.display = 'none';
        document.getElementById('res-conv-row').style.display = 'none';
        resMarginRow.style.display = 'none';
    }
    updateTargetLabel();
});

// Auto-fill CPC defaults when campaign type changes
campaignTypeSelect.addEventListener('change', () => {
    // Reset industry selector when type changes
    industrySelect.value = 'custom';
    industryCpcInfo.style.display = 'none';
    if (campaignTypeSelect.value === 'search') {
        estCpcInput.value = '1.50';
        convRateInput.value = '3';
    } else {
        estCpcInput.value = '0.50';
        convRateInput.value = '0.7';
    }
});

function calculateBudget() {
    const goal = calcGoalSelect.value;
    const target = parseFloat(targetNumberInput.value) || 0;
    const cpc = parseFloat(estCpcInput.value) || 0;
    const cvr = parseFloat(convRateInput.value) || 1;
    const productPriceInput = document.getElementById('product-price');
    const productPrice = parseFloat(productPriceInput.value) || 0;

    let monthlyBudget = 0;
    let clicks = 0;
    let conversions = 0;

    if (goal === 'clicks') {
        // Budget = Target Clicks × CPC
        clicks = target;
        monthlyBudget = target * cpc;
    } else {
        // Budget = (Target Conversions / CVR) × CPC
        conversions = target;
        clicks = Math.ceil(target / (cvr / 100));
        monthlyBudget = clicks * cpc;
    }

    const dailyBudget = monthlyBudget / 30.4;

    document.getElementById('res-monthly').textContent = 'RM ' + monthlyBudget.toFixed(2);
    document.getElementById('res-daily').textContent = 'RM ' + dailyBudget.toFixed(2);
    document.getElementById('res-clicks').textContent = clicks.toLocaleString();
    document.getElementById('res-conv').textContent = conversions > 0 ? conversions.toLocaleString() : '—';
    
    // Marketing Margin Calculation
    const resMargin = document.getElementById('res-margin');
    if (goal === 'conversions' && productPrice > 0) {
        const targetRevenue = conversions * productPrice;
        const margin = (monthlyBudget / targetRevenue) * 100;
        
        if (margin <= 15) {
            resMargin.style.color = '#22c55e'; // Green
            resMargin.innerHTML = `${margin.toFixed(1)}% <span style="font-size:0.8rem">🟢</span>`;
        } else if (margin <= 30) {
            resMargin.style.color = '#f59e0b'; // Amber
            resMargin.innerHTML = `${margin.toFixed(1)}% <span style="font-size:0.8rem">🟡</span>`;
        } else {
            resMargin.style.color = '#ef4444'; // Red
            resMargin.innerHTML = `${margin.toFixed(1)}% <span style="font-size:0.8rem">🔴</span>`;
        }
    } else {
        resMargin.textContent = '—';
        resMargin.style.color = 'inherit';
    }

    // Show explanation if display ads + conversions are chosen
    if (campaignTypeSelect.value === 'display' && goal === 'conversions') {
        document.getElementById('explanation-card').style.display = 'block';
    } else {
        document.getElementById('explanation-card').style.display = 'none';
    }
}

document.getElementById('btn-calculate').addEventListener('click', (e) => {
    e.preventDefault();
    calculateBudget();
});

// Also auto-calculate on input change for real-time feedback
[targetNumberInput, estCpcInput, convRateInput, document.getElementById('product-price')].forEach(el => {
    if (el) el.addEventListener('input', calculateBudget);
});

// ==================== AD COPY BUTTONS ====================
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
calculateBudget();

// ==================== FEEDBACK MODAL ====================
function openFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Update modal texts to current language
    document.getElementById('modal-title').textContent = dict[currentLang].modalTitle;
    document.getElementById('modal-desc').textContent = dict[currentLang].modalDesc;
    document.getElementById('lbl-fb-name').textContent = dict[currentLang].lblFbName;
    document.getElementById('fb-name').placeholder = dict[currentLang].plFbName;
    document.getElementById('lbl-fb-phone').textContent = dict[currentLang].lblFbPhone;
    document.getElementById('fb-phone').placeholder = dict[currentLang].plFbPhone;
    document.getElementById('lbl-fb-email').textContent = dict[currentLang].lblFbEmail;
    document.getElementById('fb-email').placeholder = dict[currentLang].plFbEmail;
    document.getElementById('lbl-fb-details').textContent = dict[currentLang].lblFbDetails;
    document.getElementById('fb-details').placeholder = dict[currentLang].plFbDetails;
    document.getElementById('btn-submit-feedback').textContent = dict[currentLang].btnSubmitFeedback;
}

function closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('feedback-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeFeedbackModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeFeedbackModal();
    }
});

// ===== GOOGLE SHEET WEB APP URL =====
// IMPORTANT: Replace this URL with your own Google Apps Script Web App URL
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzPiEOPCH7dwr293vi19zRi27JWO1hcKQiqnDIMzg3gserITHdDDh1BZSggJQS5oDnH/exec';

// Submit feedback form to Google Sheet
document.getElementById('feedback-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = document.getElementById('btn-submit-feedback');
    const origText = btn.textContent;

    const name = document.getElementById('fb-name').value.trim();
    const phone = document.getElementById('fb-phone').value.trim();
    const email = document.getElementById('fb-email').value.trim();
    const details = document.getElementById('fb-details').value.trim();

    // Show loading state
    btn.textContent = currentLang === 'EN' ? '⏳ Sending...' : '⏳ Menghantar...';
    btn.disabled = true;

    const formData = new FormData();
    formData.append('nama', name);
    formData.append('telefon', phone);
    formData.append('emel', email);
    formData.append('butiran', details);

    fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.result === 'success') {
            btn.textContent = currentLang === 'EN' ? '✅ Sent successfully!' : '✅ Berjaya dihantar!';
            document.getElementById('feedback-form').reset();
            setTimeout(() => {
                btn.textContent = origText;
                btn.disabled = false;
                closeFeedbackModal();
            }, 2500);
        } else {
            throw new Error('Submission failed');
        }
    })
    .catch(err => {
        console.error('Feedback error:', err);
        btn.textContent = currentLang === 'EN' ? '❌ Failed. Try again.' : '❌ Gagal. Cuba lagi.';
        setTimeout(() => {
            btn.textContent = origText;
            btn.disabled = false;
        }, 2500);
    });
});
