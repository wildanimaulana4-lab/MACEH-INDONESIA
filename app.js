/**
 * MACEH INDONESIA — JAVASCRIPT APP LOGIC
 * Includes i18n Translation Engine, Sticky Header, Image Lightbox, and Interactive Form Validation
 */

// I18N TRANSLATION DICTIONARY
const i18n = {
  id: {
    navIdentity: "Brand Identity",
    navSpecs: "Spesifikasi Mutu",
    navProcess: "Proses Kami",
    navWhyUs: "Keunggulan",
    navSustain: "Kemasan Ramah Lingkungan",
    navContact: "Hubungi Kami",
    btnInquire: "Diskusi Proyek",

    heroBadge: "100% Rempah Alami Asli Sulawesi Selatan",
    heroTitleLine1: "A Pinch of Spice,",
    heroTitleLine2: "Flavor.",
    heroDesc: "Kualitas Rempah Nusantara Pilihan. Dipetik dari sulur terbaik kebun Sulawesi Selatan, diolah secara alami tanpa bahan kimia untuk rasa dan aroma terbaik.",
    feat1: "100% Natural Spice (Tanpa Pemutih & Kimia)",
    feat2: "Sourced Directly from South Sulawesi",
    feat3: "Best Quality For Better Taste (Mutu Ekspor)",
    ctaExplore: "Jelajahi Produk & Spesifikasi",
    ctaContact: "Hubungi Tim Maceh",

    stat1: "Natural Spice",
    stat2: "South Sulawesi Origin",
    stat3: "Whole Grain Quality",
    stat4: "Preserves Aroma & Flavor",

    identityTitle: "Identitas MACEH Indonesia",
    identityDesc: "Komitmen kami menghadirkan identitas visual rempah mewah Sulawesi dengan standar kualitas tertinggi.",

    whitePepperTitle: "Sulawesi White Pepper (Piper Nigrum)",
    whitePepperDesc: "Sulawesi white pepper is derived from raw pepper berries (Piper nigrum) that are hulled and sun-dried naturally.",
    specSize: "Ukuran Biji (Size)",
    specDensity: "Bulk Density",
    specDefect: "Defect Value",
    specMoisture: "Moisture Content",

    blackPepperTitle: "Whole Black Pepper (Piper Nigrum)",
    blackPepperDesc: "Spesifikasi mutu dan standar kualitas lada hitam murni Sulawesi MACEH INDONESIA. Dikeringkan secara alami, setiap butir diseleksi dengan ukuran yang sama untuk mutu premium.",
    blackPepperText: "dikeringkan secara alami\nsetiap butir diseleksi dengan\nukuran yang sama\nmutu premium",
    jarLabel: "MACEH Jar 100g Glass Seal",

    processTitle: "From Farm to Premium Pepper",
    processQuote: '"Kami mengolah merica dengan hati-hati, mulai dari proses pemetikan hingga pengeringan, dengan menjaga kualitas pada setiap tahap."',
    step1Title: "Masak",
    step1Sub: "Selected at the right maturity",
    step1Desc: "Biji merica dipetik saat berada pada tingkat kematangan paling presisi untuk menjamin kadar minyak atsiri dan aroma yang maksimal.",
    step2Title: "Petik",
    step2Sub: "Harvested from selected vines",
    step2Desc: "Dipetik secara manual oleh petani berpengalaman Sulawesi Selatan dari tanaman sulur lada pilihan berkualitas terbaik.",
    step3Title: "Rendam & Jemur",
    step3Sub: "Naturally soaked and sun-dried",
    step3Desc: "Proses perendaman alami menggunakan air pegunungan murni serta pengeringan di bawah sinar matahari langsung secara higienis.",
    step4Title: "Pemisahan",
    step4Sub: "Carefully separated and cleaned",
    step4Desc: "Pembersihan dan sortasi kerapatan (density grading) untuk memisahkan biji lada utuh 5-6mm bermutu tinggi dari cacat.",

    whyUsTitle: "What sets us apart?",
    whyUsDesc: "Komitmen keunggulan kualitas rempah murni langsung dari kebun Sulawesi Selatan.",
    whyUsRow1: "Bibit unggul menciptakan hasil yang terbaik.",
    whyUsRow2: "Premium quality, dari tangan pertama, harga terjaga.",
    whyUsRow3: "Proses, sampai pengemasan dilakukan sendiri untuk menjaga kualitas.",

    sustainTitle: "Zero Waste Packaging Architecture",
    sustainDesc: "Dirancang untuk dapat diisi ulang secara berkelanjutan. Melindungi kesegaran rempah sekaligus menjaga kelestarian alam.",
    card1Title: "Miron Violet Glass",
    card1Desc: "Botol kaca biophotonic khusus yang menyaring radiasi cahaya merusak, mempertahankan kesegaran dan aroma hingga 3 tahun tanpa bahan pengawet.",
    card2Title: "Plant-Based Refill Pouches",
    card2Desc: "Kantong isi ulang ramah lingkungan yang 100% dapat terurai secara hayati (compostable) berbasis serat pati jagung alam.",
    card3Title: "FSC Beech Wood Caps",
    card3Desc: "Tutup kayu beech tersertifikasi FSC yang dilengkapi cincin silikon alami kedap udara untuk menyegel kelembapan dan keharuman lada.",

    contactHeading: "Start a conversation",
    contactSubtext: "Tell us a bit about your project, timeline, and what you're looking to achieve.",
    labelName: "Nama Lengkap",
    labelEmail: "Email Address",
    labelMessage: "Leave a message",
    btnSubmit: "Submit Message",

    footerDesc: "Produsen rempah murni Sulawesi Selatan pilihan mutu ekspor. Lada Putih & Lada Hitam utuh berkualitas tinggi langsung dari petani lokal.",
    toastSuccess: "Pesan berhasil dikirim! Tim MACEH Indonesia akan segera menghubungi Anda."
  },
  en: {
    navIdentity: "Brand Identity",
    navSpecs: "Specifications",
    navProcess: "Our Process",
    navWhyUs: "Why Choose Us",
    navSustain: "Eco Packaging",
    navContact: "Contact Us",
    btnInquire: "Start Project",

    heroBadge: "100% Natural Spice Sourced From South Sulawesi",
    heroTitleLine1: "A Pinch of Spice,",
    heroTitleLine2: "Flavor.",
    heroDesc: "The Finest Nusantara Spice Selection. Harvested from the finest vines in South Sulawesi, processed naturally without chemicals for rich aroma & flavor.",
    feat1: "100% Natural Spice (Chemical-Free & Unbleached)",
    feat2: "Sourced Directly from South Sulawesi",
    feat3: "Best Quality For Better Taste (Export Grade)",
    ctaExplore: "Explore Products & Specs",
    ctaContact: "Contact Maceh Team",

    stat1: "Natural Spice",
    stat2: "South Sulawesi Origin",
    stat3: "Whole Grain Quality",
    stat4: "Preserves Aroma & Flavor",

    identityTitle: "MACEH Indonesia Brand Identity",
    identityDesc: "Our commitment to showcasing Sulawesi's luxury spice visual identity crafted to the highest quality standards.",

    whitePepperTitle: "Sulawesi White Pepper (Piper Nigrum)",
    whitePepperDesc: "Sulawesi white pepper is derived from raw pepper berries (Piper nigrum) that are hulled and sun-dried naturally.",
    specSize: "Grain Size",
    specDensity: "Bulk Density",
    specDefect: "Defect Value",
    specMoisture: "Moisture Content",

    blackPepperTitle: "Whole Black Pepper (Piper Nigrum)",
    blackPepperDesc: "Quality specifications and technical standards of MACEH INDONESIA pure Sulawesi black pepper. Naturally sun-dried, meticulously density-selected for uniform premium grade.",
    blackPepperText: "Naturally sun-dried\neach grain selected to\nuniform size\npremium quality",
    jarLabel: "MACEH Jar 100g Glass Seal",

    processTitle: "From Farm to Premium Pepper",
    processQuote: '"We carefully process our pepper, from harvesting to drying, maintaining uncompromising quality at every single stage."',
    step1Title: "Harvest Ripeness",
    step1Sub: "Selected at the right maturity",
    step1Desc: "Berries are harvested at peak ripeness to ensure optimal essential oil yield and vibrant aroma profile.",
    step2Title: "Hand-Picked",
    step2Sub: "Harvested from selected vines",
    step2Desc: "Handpicked carefully by experienced South Sulawesi farmers from top-grade pepper vine cultivars.",
    step3Title: "Soak & Sun-Dry",
    step3Sub: "Naturally soaked and sun-dried",
    step3Desc: "Naturally soaked in pristine mountain spring water and sun-dried under clean, controlled outdoor conditions.",
    step4Title: "Density Sorting",
    step4Sub: "Carefully separated and cleaned",
    step4Desc: "Cleaned and density-graded to separate premium 5-6mm whole pepper grains from defects.",

    whyUsTitle: "What sets us apart?",
    whyUsDesc: "Our unwavering commitment to pure spice excellence directly from South Sulawesi plantations.",
    whyUsRow1: "Superior seed cultivars produce the finest harvest.",
    whyUsRow2: "Premium quality sourced direct from first hands at fair value.",
    whyUsRow3: "Fully in-house managed from cultivation to final packaging.",

    sustainTitle: "Zero Waste Packaging Architecture",
    sustainDesc: "Engineered for infinite refill loops. Preserving spice potency while protecting our planet.",
    card1Title: "Miron Violet Glass",
    card1Desc: "Biophotonic glass bottles filtering harmful light rays to prolong freshness and aroma up to 3 years without chemical additives.",
    card2Title: "Plant-Based Refill Pouches",
    card2Desc: "100% home-compostable refill pouches crafted from natural plant-based cornstarch barrier film.",
    card3Title: "FSC Beech Wood Caps",
    card3Desc: "FSC-certified sustainable beech wood toppers fitted with natural airtight silicone seals to preserve essential oils.",

    contactHeading: "Start a conversation",
    contactSubtext: "Tell us a bit about your project, timeline, and what you're looking to achieve.",
    labelName: "Full Name",
    labelEmail: "Email Address",
    labelMessage: "Leave a message",
    btnSubmit: "Submit Message",

    footerDesc: "Exporter of pure South Sulawesi spices. Premium whole White Pepper & Black Pepper sourced directly from local Indonesian farming communities.",
    toastSuccess: "Message submitted successfully! MACEH Indonesia team will get back to you shortly."
  }
};

let currentLang = 'id';

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initLanguageToggle();
  initSmoothScroll();
  initLightbox();
  initContactForm();
});

// STICKY HEADER OBSERVER
function initStickyHeader() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// SVG FLAG DEFINITIONS
const flagID = `<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="border-radius: 3px; overflow: hidden; display: inline-block; vertical-align: middle; box-shadow: 0 0 0 1px rgba(255,255,255,0.2);"><rect width="20" height="7" fill="#E70011"/><rect y="7" width="20" height="7" fill="#FFFFFF"/></svg>`;
const flagEN = `<svg width="20" height="14" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style="border-radius: 3px; overflow: hidden; display: inline-block; vertical-align: middle; box-shadow: 0 0 0 1px rgba(255,255,255,0.2);"><clipPath id="uk-flag-clip"><rect width="60" height="40" rx="3"/></clipPath><g clip-path="url(#uk-flag-clip)"><path d="M0,0 v40 h60 v-40 z" fill="#012169"/><path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" stroke-width="8"/><path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" stroke-width="4.5"/><path d="M30,0 v40 M0,20 h60" stroke="#fff" stroke-width="12"/><path d="M30,0 v40 M0,20 h60" stroke="#C8102E" stroke-width="7"/></g></svg>`;

// LANGUAGE TOGGLE ENGINE
function initLanguageToggle() {
  const langBtn = document.getElementById('lang-toggle-btn');
  const langFlag = document.getElementById('lang-flag');
  const langCode = document.getElementById('lang-code');

  if (!langBtn) return;

  // Set initial SVG flag
  langFlag.innerHTML = currentLang === 'id' ? flagID : flagEN;
  langCode.textContent = currentLang.toUpperCase();

  langBtn.addEventListener('click', () => {
    currentLang = (currentLang === 'id') ? 'en' : 'id';
    
    // Update button flag and code
    if (currentLang === 'id') {
      langFlag.innerHTML = flagID;
      langCode.textContent = 'ID';
    } else {
      langFlag.innerHTML = flagEN;
      langCode.textContent = 'EN';
    }

    // Apply translations
    applyTranslations(currentLang);
  });
}

function applyTranslations(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        // Handle newlines
        if (dict[key].includes('\n')) {
          el.innerHTML = dict[key].replace(/\n/g, '<br>');
        } else {
          el.textContent = dict[key];
        }
      }
    }
  });
}

// SMOOTH SCROLL & ACTIVE LINK OBSERVER
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// IMAGE LIGHTBOX MODAL
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');

  if (!modal) return;

  document.querySelectorAll('.image-lightbox-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const imgSrc = trigger.getAttribute('data-img-src') || trigger.querySelector('img')?.src;
      const caption = trigger.getAttribute('data-caption') || trigger.querySelector('img')?.alt || '';
      
      if (imgSrc) {
        imgEl.src = imgSrc;
        captionEl.textContent = caption;
        modal.classList.add('active');
      }
    });
  });

  const closeModal = () => modal.classList.remove('active');

  backdrop?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// CONTACT FORM SUBMISSION
function initContactForm() {
  const form = document.getElementById('maceh-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');

    if (nameInput.value && emailInput.value && messageInput.value) {
      showToast(i18n[currentLang].toastSuccess);
      form.reset();
    }
  });
}

// TOAST NOTIFICATION SCRIPT
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✅</span> <div>${message}</div>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
