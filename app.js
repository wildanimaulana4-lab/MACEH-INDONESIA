/* ==========================================================================
   KALA SPICE CO. - APPLICATION LOGIC & INTERACTIVE SUITE
   ========================================================================== */

// 1. DATASET: MACEH INDONESIA PRODUCTS
const SPICE_PRODUCTS = [
  {
    id: 'cengkeh-01',
    name: 'Cengkeh Kering Utuh',
    category: 'single-origin',
    categoryLabel: 'Premium Whole Cloves',
    origin: 'South Sulawesi, Indonesia',
    price: 35.00,
    image: 'maceh_promo.jpg',
    description: 'Cengkeh kering utuh pilihan grade tertinggi dari Sulawesi Selatan. Memberikan aroma hangat, manis pedas yang tajam dan menggugah selera.',
    flavorProfile: { heat: 65, aroma: 98, earthy: 85, sweet: 70, citrus: 30, smoky: 40 },
    packagingSpec: 'Toples Kaca Kedap Udara (Netto 75g)',
    batchCode: 'MCH-CK-2026'
  },
  {
    id: 'merica-putih-02',
    name: 'Merica Putih Utuh',
    category: 'single-origin',
    categoryLabel: 'Premium White Peppercorns',
    origin: 'South Sulawesi, Indonesia',
    price: 32.00,
    image: 'maceh_promo.jpg',
    description: 'Biji merica putih utuh 100% alami tanpa bahan pemutih. Menghasilkan rasa pedas bersih (clean) dan aroma harum khas masakan Nusantara.',
    flavorProfile: { heat: 85, aroma: 90, earthy: 75, sweet: 20, citrus: 40, smoky: 10 },
    packagingSpec: 'Toples Kaca Kedap Udara (Netto 75g)',
    batchCode: 'MCH-MP-2026'
  },
  {
    id: 'merica-hitam-03',
    name: 'Merica Hitam Utuh',
    category: 'single-origin',
    categoryLabel: 'Premium Black Peppercorns',
    origin: 'South Sulawesi, Indonesia',
    price: 30.00,
    image: 'maceh_promo.jpg',
    description: 'Merica hitam utuh beraroma kuat (pungent) dan essensial. Dipetik pada kematangan optimal untuk menjamin kepedasan yang kaya dan otentik.',
    flavorProfile: { heat: 90, aroma: 95, earthy: 80, sweet: 15, citrus: 50, smoky: 30 },
    packagingSpec: 'Toples Kaca Kedap Udara (Netto 75g)',
    batchCode: 'MCH-MH-2026'
  },
  {
    id: 'trio-pack-04',
    name: 'MACEH Trio Trio Paket Rempah',
    category: 'gift-sets',
    categoryLabel: 'Trio Pack Special',
    origin: 'South Sulawesi, Indonesia',
    price: 90.00,
    image: 'maceh_promo.jpg',
    description: 'Paket spesial 3 toples lengkap: Cengkeh Kering Utuh, Merica Putih Utuh, dan Merica Hitam Utuh dalam satu kotak eksklusif MACEH INDONESIA.',
    flavorProfile: { heat: 80, aroma: 100, earthy: 85, sweet: 50, citrus: 40, smoky: 30 },
    packagingSpec: 'Eksklusif 3 Toples Kaca (Netto 3 x 75g)',
    batchCode: 'MCH-TRIO-2026'
  }
];

// STATE MANAGEMENT
let cartItems = [];
let currentFilter = 'all';
let currentSpiceRadar = SPICE_PRODUCTS[0];

// DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProducts();
  setupFilterListeners();
  initFlavorRadar();
  initBlendLab();
  setupCartDrawer();
  setupModalListeners();
});

// 2. THEME SWITCHER LOGIC
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('kala_theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('kala_theme', next);
    updateThemeIcon(next);
    showToast(`Switched to ${next.toUpperCase()} mode`);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// 2. LANGUAGE TRANSLATION SYSTEM (ID <-> EN)
let currentLang = 'id';

const TRANSLATIONS = {
  id: {
    flag: '🇮🇩',
    code: 'ID',
    toast: 'Bahasa diubah ke Bahasa Indonesia',
    navIdentity: 'Brand Identity',
    navSpecs: 'Spesifikasi Produk',
    navWhyUs: 'Mengapa Kami',
    navSustain: 'Keberlanjutan',
    heroBadge: 'MACEH INDONESIA — REMPAH NUSANTARA',
    heroDesc: 'Kualitas Rempah Nusantara Pilihan.',
    feat1: '100% Rempah Alami',
    feat2: 'Dipanen dari Sulawesi Selatan',
    feat3: 'Kualitas Terbaik untuk Rasa Lezat',
    ctaExplore: 'Jelajahi Produk',
    identitySubtitle: 'BRAND IDENTITY SYSTEM',
    identityTitle: 'Memasak, Penuh Makna, Rasa, & Kebaikan.',
    identityDesc: 'MACEH Indonesia menghadirkan rempah-rempah premium yang dipilih langsung dari kebun terbaik di Sulawesi.',
    card1Title: 'Filosofi Keaslian & Kebun Sulawesi',
    card1Desc: 'Dengan proses alami dan pengolahan yang teliti, kami memastikan setiap rempah menjaga keaslian rasa, aroma, dan manfaatnya untuk setiap masakan.',
    whyUsTitle: 'What sets us apart?',
    whyUsDesc: 'Komitmen keunggulan kualitas rempah murni langsung dari kebun Sulawesi Selatan.'
  },
  en: {
    flag: '🇬🇧',
    code: 'EN',
    toast: 'Language switched to English',
    navIdentity: 'Brand Identity',
    navSpecs: 'Product Specs',
    navWhyUs: 'Why Us',
    navSustain: 'Sustainability',
    heroBadge: 'MACEH INDONESIA — ARCHIPELAGO SPICES',
    heroDesc: 'Premium Choice of Archipelago Spices.',
    feat1: '100% Natural Spice',
    feat2: 'Sourced from South Sulawesi',
    feat3: 'Best Quality For Better Taste',
    ctaExplore: 'Explore Products',
    identitySubtitle: 'BRAND IDENTITY SYSTEM',
    identityTitle: 'Cooking, Full of Meaning, Flavor, & Goodness.',
    identityDesc: 'MACEH Indonesia delivers premium spices sourced directly from the finest plantations in Sulawesi.',
    card1Title: 'Philosophy of Authenticity & Sulawesi Harvest',
    card1Desc: 'Through natural processing and meticulous crafting, we ensure every spice retains its authentic flavor, aroma, and natural benefits for every dish.',
    whyUsTitle: 'What sets us apart?',
    whyUsDesc: 'Commitment to pure spice excellence sourced directly from South Sulawesi plantations.'
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  const t = TRANSLATIONS[currentLang];
  
  const flagEl = document.getElementById('lang-flag');
  const codeEl = document.getElementById('lang-code');
  if (flagEl) flagEl.textContent = t.flag;
  if (codeEl) codeEl.textContent = t.code;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  showToast(t.toast);
}

// Hamburger & Language Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }

  const hamburgerBtn = document.getElementById('hamburger-toggle');
  const mobileShortcuts = document.getElementById('mobile-shortcuts');
  if (hamburgerBtn && mobileShortcuts) {
    hamburgerBtn.addEventListener('click', () => {
      const isVisible = getComputedStyle(mobileShortcuts).display !== 'none';
      mobileShortcuts.style.display = isVisible ? 'none' : 'flex';
    });
  }
});

// 3. CATALOG RENDER & FILTERING
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = currentFilter === 'all' 
    ? SPICE_PRODUCTS 
    : SPICE_PRODUCTS.filter(p => p.category === currentFilter);

  grid.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image-wrap">
        <span class="product-origin-badge">📍 ${product.origin}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-details">
        <span class="product-category">${product.categoryLabel}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="btn-add-cart" onclick="addToCart('${product.id}')">
            <span>+ Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Add click to view details modal on card image/title
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.btn-add-cart')) {
        const id = card.getAttribute('data-id');
        openQuickViewModal(id);
      }
    });
  });
}

function setupFilterListeners() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderProducts();
    });
  });
}

// 4. SVG FLAVOR RADAR CHART GENERATOR
function initFlavorRadar() {
  const selectorContainer = document.getElementById('spice-selector-list');
  if (!selectorContainer) return;

  selectorContainer.innerHTML = SPICE_PRODUCTS.slice(0, 5).map((spice, idx) => `
    <button class="spice-item-btn ${idx === 0 ? 'active' : ''}" onclick="selectSpiceRadar('${spice.id}')">
      <div>
        <strong style="display:block; font-size:1rem;">${spice.name}</strong>
        <span style="font-size:0.8rem; color:var(--text-muted);">${spice.origin}</span>
      </div>
      <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--saffron);">SPEC &gt;</span>
    </button>
  `).join('');

  renderRadarChart(SPICE_PRODUCTS[0]);
}

function selectSpiceRadar(id) {
  const spice = SPICE_PRODUCTS.find(p => p.id === id);
  if (!spice) return;

  currentSpiceRadar = spice;
  document.querySelectorAll('.spice-item-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(id)) {
      btn.classList.add('active');
    }
  });

  renderRadarChart(spice);
}

function renderRadarChart(spice) {
  const svg = document.getElementById('radar-svg');
  const detailsBox = document.getElementById('radar-details-box');
  if (!svg) return;

  const profile = spice.flavorProfile;
  const metrics = [
    { key: 'heat', label: 'Heat' },
    { key: 'aroma', label: 'Aroma' },
    { key: 'earthy', label: 'Earthy' },
    { key: 'sweet', label: 'Sweet' },
    { key: 'citrus', label: 'Citrus' },
    { key: 'smoky', label: 'Smoky' }
  ];

  const center = 150;
  const radius = 100;

  // Calculate polygon points
  const points = metrics.map((m, i) => {
    const angle = (Math.PI * 2 / metrics.length) * i - Math.PI / 2;
    const valueRatio = (profile[m.key] || 50) / 100;
    const r = radius * valueRatio;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  // Background Web Concentric Rings
  const rings = [0.25, 0.5, 0.75, 1].map(r => {
    const rPts = metrics.map((_, i) => {
      const angle = (Math.PI * 2 / metrics.length) * i - Math.PI / 2;
      const x = center + (radius * r) * Math.cos(angle);
      const y = center + (radius * r) * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
    return `<polygon points="${rPts}" fill="none" stroke="var(--border-subtle)" stroke-width="1" />`;
  }).join('');

  // Axis Lines & Labels
  const axisLines = metrics.map((m, i) => {
    const angle = (Math.PI * 2 / metrics.length) * i - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    const lx = center + (radius + 22) * Math.cos(angle);
    const ly = center + (radius + 22) * Math.sin(angle);
    return `
      <line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="var(--border-subtle)" stroke-width="1" />
      <text x="${lx}" y="${ly}" fill="var(--text-muted)" font-size="11" font-family="var(--font-mono)" text-anchor="middle" dominant-baseline="middle">${m.label}</text>
    `;
  }).join('');

  svg.innerHTML = `
    ${rings}
    ${axisLines}
    <polygon points="${points}" fill="rgba(229, 147, 42, 0.35)" stroke="var(--saffron)" stroke-width="2.5" />
  `;

  if (detailsBox) {
    detailsBox.innerHTML = `
      <h4 class="font-serif" style="font-size:1.5rem; margin-bottom:0.5rem;">${spice.name}</h4>
      <p style="font-size:0.875rem; color:var(--text-muted); margin-bottom:1rem;">Packaging Batch Code: <code style="color:var(--saffron);">${spice.batchCode}</code></p>
      <p style="font-size:0.95rem;">${spice.packagingSpec}</p>
    `;
  }
}

// 5. CUSTOM BLEND LAB (LIVE LABEL PREVIEW)
function initBlendLab() {
  const inputs = ['paprika', 'cardamom', 'cinnamon', 'sumac'];
  inputs.forEach(id => {
    const el = document.getElementById(`slider-${id}`);
    if (el) {
      el.addEventListener('input', updateBlendLab);
    }
  });

  const blendNameInput = document.getElementById('custom-blend-name');
  if (blendNameInput) {
    blendNameInput.addEventListener('input', updateBlendLab);
  }

  updateBlendLab();
}

function updateBlendLab() {
  const pVal = parseInt(document.getElementById('slider-paprika')?.value || 40);
  const cVal = parseInt(document.getElementById('slider-cardamom')?.value || 20);
  const cnVal = parseInt(document.getElementById('slider-cinnamon')?.value || 25);
  const sVal = parseInt(document.getElementById('slider-sumac')?.value || 15);

  document.getElementById('val-paprika').textContent = `${pVal}%`;
  document.getElementById('val-cardamom').textContent = `${cVal}%`;
  document.getElementById('val-cinnamon').textContent = `${cnVal}%`;
  document.getElementById('val-sumac').textContent = `${sVal}%`;

  const titleEl = document.getElementById('live-label-title');
  const blendName = document.getElementById('custom-blend-name')?.value || 'ROYAL VAULT BLEND';
  if (titleEl) {
    titleEl.textContent = blendName.toUpperCase();
  }

  const batchCodeEl = document.getElementById('live-label-batch');
  if (batchCodeEl) {
    const hash = (pVal * 7 + cVal * 13 + cnVal * 17 + sVal * 23) % 999;
    batchCodeEl.textContent = `BATCH #KL-${hash}-CUSTOM`;
  }

  // Update ratio bar preview
  const ratioBar = document.getElementById('label-ratio-bar');
  if (ratioBar) {
    ratioBar.innerHTML = `
      <div style="width:${pVal}%; background:var(--terracotta);" title="Paprika"></div>
      <div style="width:${cVal}%; background:var(--emerald);" title="Cardamom"></div>
      <div style="width:${cnVal}%; background:var(--saffron);" title="Cinnamon"></div>
      <div style="width:${sVal}%; background:#7e223b;" title="Sumac"></div>
    `;
  }
}

function saveCustomBlend() {
  const blendName = document.getElementById('custom-blend-name')?.value || 'Custom Artisan Blend';
  const customItem = {
    id: 'custom-' + Date.now(),
    name: 'Custom: ' + blendName,
    category: 'custom-blend',
    categoryLabel: 'Custom Blend',
    origin: 'Personal Atelier',
    price: 26.00,
    image: 'assets/images/brand_mockup.png',
    description: 'Your personalized small-batch spice formulation sealed in a UV violet glass jar.',
    packagingSpec: 'Custom Label Amber Jar (100g)'
  };

  cartItems.push({ product: customItem, quantity: 1 });
  updateCartUI();
  openCart();
  showToast(`Created and added "${blendName}" to cart!`);
}

// 6. CART DRAWER & E-COMMERCE LOGIC
function setupCartDrawer() {
  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const overlay = document.getElementById('cart-overlay');

  cartBtn?.addEventListener('click', openCart);
  closeCartBtn?.addEventListener('click', closeCart);
  overlay?.addEventListener('click', closeCart);
}

function openCart() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
}

function addToCart(productId) {
  const product = SPICE_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cartItems.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({ product, quantity: 1 });
  }

  updateCartUI();
  openCart();
  showToast(`Added ${product.name} to cart`);
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-count');
  const body = document.getElementById('cart-body');
  const totalEl = document.getElementById('cart-total');

  const totalCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  if (countBadge) countBadge.textContent = totalCount;

  const totalPrice = cartItems.reduce((acc, i) => acc + (i.product.price * i.quantity), 0);
  if (totalEl) totalEl.textContent = `$${totalPrice.toFixed(2)}`;

  if (!body) return;

  if (cartItems.length === 0) {
    body.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <p style="font-size:2rem; margin-bottom:1rem;">🌶️</p>
        <p style="font-family:var(--font-serif); font-size:1.2rem;">Your Atelier Cart is Empty</p>
        <p style="font-size:0.85rem; margin-top:0.5rem;">Explore our packaging collection to add single-origin spices.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = cartItems.map(item => `
    <div class="cart-item">
      <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.product.name}</h4>
        <span class="cart-item-price">$${item.product.price.toFixed(2)}</span>
        <div style="display:flex; align-items:center; gap:0.5rem; margin-top:0.5rem;">
          <button onclick="changeQty('${item.product.id}', -1)" style="border:1px solid var(--border-subtle); padding:2px 8px; border-radius:4px;">-</button>
          <span style="font-size:0.9rem; font-weight:600;">${item.quantity}</span>
          <button onclick="changeQty('${item.product.id}', 1)" style="border:1px solid var(--border-subtle); padding:2px 8px; border-radius:4px;">+</button>
        </div>
      </div>
      <button onclick="removeItem('${item.product.id}')" style="color:var(--text-muted); font-size:1.2rem;">&times;</button>
    </div>
  `).join('');
}

function changeQty(id, delta) {
  const item = cartItems.find(i => i.product.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cartItems = cartItems.filter(i => i.product.id !== id);
  }
  updateCartUI();
}

function removeItem(id) {
  cartItems = cartItems.filter(i => i.product.id !== id);
  updateCartUI();
  showToast('Item removed');
}

function checkout() {
  if (cartItems.length === 0) {
    showToast('Your cart is empty');
    return;
  }
  alert('Thank you for sampling KALA SPICE CO.! This is a Behance exhibition checkout demonstration.');
  cartItems = [];
  updateCartUI();
  closeCart();
}

// 7. QUICK VIEW MODAL
function setupModalListeners() {
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('close-modal-btn');

  backdrop?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
}

function openQuickViewModal(productId) {
  const product = SPICE_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-modal');
  const body = document.getElementById('modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
    </div>
    <div style="display:flex; flex-direction:column; justify-content:center;">
      <span class="product-category" style="margin-bottom:0.5rem;">${product.categoryLabel}</span>
      <h2 class="font-serif" style="font-size:2.2rem; margin-bottom:1rem;">${product.name}</h2>
      <p style="color:var(--text-muted); font-size:1rem; margin-bottom:1.5rem;">${product.description}</p>
      
      <div style="background:var(--bg-card); padding:1.2rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle); margin-bottom:1.5rem;">
        <h5 style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--saffron); margin-bottom:0.4rem;">Packaging Architecture</h5>
        <p style="font-size:0.9rem; font-family:var(--font-mono);">${product.packagingSpec}</p>
      </div>

      <div style="display:flex; align-items:center; justify-content:space-between;">
        <span class="font-serif" style="font-size:2rem; font-weight:700;">$${product.price.toFixed(2)}</span>
        <button class="btn-primary" onclick="addToCart('${product.id}'); closeModal();">
          <span>Add to Atelier Cart</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('quick-modal')?.classList.remove('open');
}

// 8. TOAST SYSTEM
function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🌶️</span> <span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
