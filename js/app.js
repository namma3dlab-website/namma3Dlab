/**
 * Namma 3D Lab — Core Application Logic (StoreCraft System)
 * Hardware-Accelerated Video Hero, STL/OBJ Volume Engine, Live Personalization Studio,
 * Category Filters, Guest Checkout, Razorpay Simulation, and GST Bill of Supply Generator.
 */

import { parseSTL, parseOBJ, calculatePrintCost } from './stl-parser.js';

// Global Cart State
const Cart = {
  items: [],
  addItem(item) {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.qty += item.qty || 1;
    } else {
      this.items.push({
        id: item.id || `item-${Date.now()}`,
        name: item.name,
        price: item.price,
        qty: item.qty || 1,
        meta: item.meta || ''
      });
    }
    this.updateUI();
  },
  removeItem(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.updateUI();
  },
  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  },
  updateUI() {
    const cartNote = document.getElementById('shop-cart-note');
    const cartCount = document.getElementById('shop-cart-count');
    const totalCount = this.items.reduce((sum, i) => sum + i.qty, 0);

    if (cartNote && cartCount) {
      if (totalCount > 0) {
        cartNote.style.display = 'flex';
        cartCount.textContent = `${totalCount} item${totalCount > 1 ? 's' : ''}`;
      } else {
        cartNote.style.display = 'none';
      }
    }
  }
};

// Global App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  initHeroVideoControls();
  initWorkspaceTabs();
  initTabRouting();
  initInteractiveStorySteps();
  initQuoteCalculator();
  initCatalogFilters();
  initNameplateStudio();
  initCheckoutAndPaymentModals();
  initLucide();
});

/**
 * 1. Looping Video Hero Controls (Hardware-Accelerated Full HD Loop)
 */
function initHeroVideoControls() {
  const video = document.getElementById('hero-video-player');
  const toggleBtn = document.getElementById('video-play-pause-btn');
  const hoverBadge = document.querySelector('.video-hover-badge');
  const videoBox = document.getElementById('hero-video-box');

  if (!video) return;

  const updateUI = (isPlaying) => {
    if (toggleBtn) {
      toggleBtn.innerHTML = isPlaying
        ? '<i data-lucide="pause" style="width: 14px; height: 14px;"></i>'
        : '<i data-lucide="play" style="width: 14px; height: 14px;"></i>';
      initLucide();
    }
    if (hoverBadge) {
      hoverBadge.innerHTML = isPlaying
        ? '<span></span> 1080P Full HD &bull; 30 FPS Timelapse'
        : '<span style="background: #F59E0B;"></span> Paused &bull; Click to Play';
    }
  };

  const togglePlayback = (e) => {
    if (e) e.stopPropagation();
    if (video.paused) {
      video.play().then(() => updateUI(true)).catch(() => updateUI(false));
    } else {
      video.pause();
      updateUI(false);
    }
  };

  if (toggleBtn) toggleBtn.addEventListener('click', togglePlayback);
  if (videoBox) {
    videoBox.addEventListener('click', (e) => {
      if (e.target.closest('#video-play-pause-btn')) return;
      togglePlayback(e);
    });
  }

  video.addEventListener('play', () => updateUI(true));
  video.addEventListener('pause', () => updateUI(false));
  updateUI(!video.paused);
}

/**
 * 2. Mobile Navigation Menu Toggle
 */
function initMenuToggle() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-header nav');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }
}

/**
 * 3. Universal Workspace Tab Switcher
 */
export function switchWorkspaceTab(tabName) {
  const tabButtons = document.querySelectorAll('.workspace-tabs button');
  const panels = document.querySelectorAll('.workspace-panel');
  const targetBtn = document.querySelector(`.workspace-tabs button[data-view="${tabName}"]`);

  if (targetBtn) {
    tabButtons.forEach(b => b.classList.remove('active'));
    targetBtn.classList.add('active');
  }

  panels.forEach(panel => {
    if (panel.id === `view-${tabName}`) {
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
    }
  });

  initLucide();
}

function initWorkspaceTabs() {
  const tabButtons = document.querySelectorAll('.workspace-tabs button');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-view');
      switchWorkspaceTab(targetView);
    });
  });
}

/**
 * 4. Deep-Link CTA Routing
 */
function initTabRouting() {
  const heroQuoteBtn = document.getElementById('hero-quote-btn');
  const heroCatalogBtn = document.getElementById('hero-catalog-btn');

  if (heroQuoteBtn) {
    heroQuoteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchWorkspaceTab('estimator');
      document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (heroCatalogBtn) {
    heroCatalogBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchWorkspaceTab('catalog');
      document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const headerEstimateBtn = document.querySelector('.header-actions a.button-dark[href="#workspace"]');
  if (headerEstimateBtn) {
    headerEstimateBtn.addEventListener('click', () => switchWorkspaceTab('estimator'));
  }

  document.addEventListener('click', (e) => {
    const jumpEl = e.target.closest('[data-jump-tab]');
    if (jumpEl) {
      const tab = jumpEl.getAttribute('data-jump-tab');
      if (tab) {
        switchWorkspaceTab(tab);
        document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

/**
 * 5. Interactive Capabilities Story Steps
 */
function initInteractiveStorySteps() {
  const steps = document.querySelectorAll('.story-step');
  const panels = document.querySelectorAll('.story-panel');

  steps.forEach(step => {
    step.addEventListener('click', () => {
      const stepIndex = step.getAttribute('data-step');
      if (!stepIndex) return;

      steps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');

      panels.forEach(p => {
        if (p.id === `story-panel-${stepIndex}`) {
          p.classList.add('active');
          p.style.display = 'block';
        } else {
          p.classList.remove('active');
          p.style.display = 'none';
        }
      });
      initLucide();
    });
  });
}

/**
 * 6. Instant Quote Engine with STL/OBJ Drag-and-Drop Parser & CAD Fallback
 */
function initQuoteCalculator() {
  // Mode switcher
  const modeFileBtn = document.getElementById('mode-file-btn');
  const modeFallbackBtn = document.getElementById('mode-fallback-btn');
  const modeFileContainer = document.getElementById('mode-file-container');
  const fallbackForm = document.getElementById('cad-fallback-form');

  if (modeFileBtn && modeFallbackBtn) {
    modeFileBtn.addEventListener('click', () => {
      modeFileBtn.classList.add('active');
      modeFallbackBtn.classList.remove('active');
      if (modeFileContainer) modeFileContainer.style.display = 'block';
      if (fallbackForm) fallbackForm.classList.remove('active');
    });

    modeFallbackBtn.addEventListener('click', () => {
      modeFallbackBtn.classList.add('active');
      modeFileBtn.classList.remove('active');
      if (modeFileContainer) modeFileContainer.style.display = 'none';
      if (fallbackForm) fallbackForm.classList.add('active');
    });
  }

  // File Upload Elements
  const dropzone = document.getElementById('stl-dropzone');
  const fileInput = document.getElementById('stl-file-input');
  const dropzoneLabel = document.getElementById('dropzone-label');
  const dropzoneSub = document.getElementById('dropzone-sub');
  const meshBadge = document.getElementById('mesh-analysis-badge');
  const meshFilename = document.getElementById('mesh-filename');
  const meshDimensions = document.getElementById('mesh-dimensions');
  const meshTriangles = document.getElementById('mesh-triangles');
  const meshVolume = document.getElementById('mesh-volume');

  // Parameter Inputs
  const techSelect = document.getElementById('calc-tech');
  const materialSelect = document.getElementById('calc-material');
  const infillSlider = document.getElementById('calc-infill');
  const infillValue = document.getElementById('calc-infill-val');
  const weightInput = document.getElementById('calc-weight');
  const qtyInput = document.getElementById('calc-qty');

  // Outputs
  const rangeDisplay = document.getElementById('calc-price-range');
  const advanceDisplay = document.getElementById('calc-advance-val');
  const printTimeDisplay = document.getElementById('calc-print-time');
  const statusDot = document.getElementById('quote-status-dot');
  const whatsappQuoteBtn = document.getElementById('calc-whatsapp-btn');

  // Mesh state
  let currentMeshState = null;

  // Handle uploaded 3D file
  const process3DFile = async (file) => {
    if (!file) return;
    const fileName = file.name;
    const isStl = fileName.toLowerCase().endsWith('.stl');
    const isObj = fileName.toLowerCase().endsWith('.obj');

    if (!isStl && !isObj) {
      alert('Please upload a valid 3D file (.STL or .OBJ).');
      return;
    }

    if (dropzoneLabel) dropzoneLabel.textContent = `Analyzing ${fileName}...`;
    if (statusDot) statusDot.textContent = 'Computing Mesh';

    try {
      let analysisResult = null;
      if (isStl) {
        const buffer = await file.arrayBuffer();
        analysisResult = await parseSTL(buffer);
      } else {
        const text = await file.text();
        analysisResult = parseOBJ(text);
      }

      currentMeshState = {
        name: fileName,
        ...analysisResult
      };

      // Update UI Badge
      if (meshBadge) meshBadge.classList.add('visible');
      if (meshFilename) meshFilename.textContent = fileName;
      if (meshDimensions) {
        meshDimensions.textContent = `${analysisResult.dimensions.x} × ${analysisResult.dimensions.y} × ${analysisResult.dimensions.z} mm`;
      }
      if (meshTriangles) {
        meshTriangles.textContent = Number(analysisResult.triangles).toLocaleString();
      }
      if (meshVolume) {
        meshVolume.textContent = `${analysisResult.volumeCm3} cm³`;
      }

      if (dropzone) dropzone.classList.add('has-file');
      if (dropzoneLabel) dropzoneLabel.textContent = `✓ ${fileName} Loaded`;
      if (dropzoneSub) dropzoneSub.textContent = `Click or drop another file to replace`;

      // Recalculate
      calculateAndRender();
    } catch (err) {
      console.error('Error parsing 3D mesh:', err);
      if (dropzoneLabel) dropzoneLabel.textContent = 'Error parsing file';
      if (dropzoneSub) dropzoneSub.textContent = 'Please check if the STL/OBJ file is corrupted.';
    }
  };

  // Drag and Drop Events
  if (dropzone && fileInput) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const file = e.dataTransfer.files[0];
      if (file) process3DFile(file);
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) process3DFile(file);
    });
  }

  // Sample STL quick loader button
  const loadSampleBtn = document.getElementById('load-sample-stl-btn');
  if (loadSampleBtn) {
    loadSampleBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      try {
        const res = await fetch('assets/models/sample-bracket.stl');
        const blob = await res.blob();
        const file = new File([blob], 'drone_bracket_v2.stl', { type: 'model/stl' });
        process3DFile(file);
      } catch (err) {
        console.error('Failed to load sample STL:', err);
      }
    });
  }

  // Cost calculation function
  const calculateAndRender = () => {
    if (!materialSelect || !infillSlider || !rangeDisplay) return;

    const material = materialSelect.value;
    const technology = techSelect ? techSelect.value : 'fdm';
    const infill = parseInt(infillSlider.value, 10);
    const quantity = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;

    if (infillValue) {
      infillValue.textContent = `${infill}%`;
    }

    let grams = parseFloat(weightInput.value) || 50;

    // If mesh volume exists, auto-derive exact grams
    if (currentMeshState && currentMeshState.volumeCm3) {
      const derived = calculatePrintCost(currentMeshState.volumeCm3, material, infill, technology, quantity);
      grams = derived.singleWeightGrams;
      if (weightInput) weightInput.value = grams;

      if (rangeDisplay) rangeDisplay.textContent = `₹${derived.minPrice} – ₹${derived.maxPrice}`;
      if (advanceDisplay) advanceDisplay.textContent = `₹${derived.advance50Percent}`;
      if (printTimeDisplay) printTimeDisplay.textContent = `${derived.printHours} Hours`;
      if (statusDot) statusDot.textContent = 'Mesh Verified';

      // Update WhatsApp link with file specs
      if (whatsappQuoteBtn) {
        const matName = materialSelect.options[materialSelect.selectedIndex].text;
        const msg = `Hi Namma 3D Lab, I calculated an instant estimate from my 3D model:\n` +
          `• File: ${currentMeshState.name} (${currentMeshState.dimensions.x}x${currentMeshState.dimensions.y}x${currentMeshState.dimensions.z}mm)\n` +
          `• Volume: ${currentMeshState.volumeCm3} cm³\n` +
          `• Material: ${matName}\n` +
          `• Infill: ${infill}% | Qty: ${quantity}\n` +
          `• Weight: ~${derived.totalWeightGrams}g | Est. Print Time: ${derived.printHours}h\n` +
          `• Estimated Range: ₹${derived.minPrice} – ₹${derived.maxPrice} (50% Adv: ₹${derived.advance50Percent})\n` +
          `Please confirm file review and share 50% advance link.`;
        whatsappQuoteBtn.href = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
      }
    } else {
      // Manual weight fallback formula
      const derived = calculatePrintCost(grams / 1.2, material, infill, technology, quantity);
      if (rangeDisplay) rangeDisplay.textContent = `₹${derived.minPrice} – ₹${derived.maxPrice}`;
      if (advanceDisplay) advanceDisplay.textContent = `₹${derived.advance50Percent}`;
      if (printTimeDisplay) printTimeDisplay.textContent = `${derived.printHours} Hours`;

      if (whatsappQuoteBtn) {
        const matName = materialSelect.options[materialSelect.selectedIndex].text;
        const msg = `Hi Namma 3D Lab, I calculated an instant estimate on your website:\n` +
          `• Material: ${matName}\n` +
          `• Infill: ${infill}% | Qty: ${quantity}\n` +
          `• Approx Weight: ${grams}g\n` +
          `• Estimated Range: ₹${derived.minPrice} – ₹${derived.maxPrice}\n` +
          `Please confirm quotation and file upload.`;
        whatsappQuoteBtn.href = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
      }
    }
  };

  // Bind change listeners
  [techSelect, materialSelect, infillSlider, weightInput, qtyInput].forEach(el => {
    if (el) el.addEventListener('input', calculateAndRender);
  });

  // Fallback CAD Form Handler
  const fallbackSubmitBtn = document.getElementById('fallback-submit-btn');
  if (fallbackSubmitBtn) {
    fallbackSubmitBtn.addEventListener('click', () => {
      const desc = document.getElementById('fallback-desc')?.value.trim();
      const dims = document.getElementById('fallback-dims')?.value.trim() || 'Custom';
      const mat = document.getElementById('fallback-mat')?.value || 'Not Sure';
      const name = document.getElementById('fallback-name')?.value.trim();
      const phone = document.getElementById('fallback-phone')?.value.trim();

      if (!desc || !name || !phone) {
        alert('Please fill in your name, WhatsApp phone, and part description.');
        return;
      }

      const msg = `Hi Namma 3D Lab CAD Team,\nI need CAD Modeling & 3D Printing for a custom part:\n` +
        `• Name: ${name}\n` +
        `• WhatsApp: ${phone}\n` +
        `• Description: "${desc}"\n` +
        `• Target Dimensions: ${dims}\n` +
        `• Material Preference: ${mat}\n` +
        `I am attaching reference sketches/photos here. Please advise lead time & quote.`;

      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // Initial calculation
  calculateAndRender();
}

/**
 * 7. Catalog Category Filtering & Add to Cart
 */
function initCatalogFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const products = document.querySelectorAll('.storefront-product');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const selectedCat = pill.getAttribute('data-cat');
      products.forEach(prod => {
        const prodCat = prod.getAttribute('data-category');
        if (selectedCat === 'all' || prodCat === selectedCat) {
          prod.style.display = 'block';
        } else {
          prod.style.display = 'none';
        }
      });
    });
  });

  // Add to Cart buttons
  document.querySelectorAll('.storefront-product .add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const name = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price')) || 499;

      Cart.addItem({ id, name, price, qty: 1 });

      // Visual feedback
      const originalText = btn.textContent;
      btn.textContent = '✓ Added';
      btn.style.background = '#DCFCE7';
      btn.style.color = '#15803D';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
      }, 1400);
    });
  });
}

/**
 * 8. Enhanced Nameplate Studio with Dual-Colors, Typography & Add to Cart
 */
function initNameplateStudio() {
  const nameInput = document.getElementById('nameplate-input');
  const subInput = document.getElementById('nameplate-sub-input');
  const previewText = document.getElementById('preview-plate-text');
  const previewSub = document.getElementById('preview-plate-sub');
  const previewCard = document.getElementById('preview-plate-card');

  const baseSwatches = document.querySelectorAll('#base-color-swatches .color-swatch-btn');
  const textSwatches = document.querySelectorAll('#text-color-swatches .color-swatch-btn');
  const fontPills = document.querySelectorAll('.font-pill-btn');
  const nameplateCartBtn = document.getElementById('nameplate-cart-btn');
  const nameplateWhatsAppBtn = document.getElementById('nameplate-whatsapp-btn');

  let currentConfig = {
    text: 'AKSHAY KUMAR',
    sub: 'FOUNDER • LEAD ENGINEER',
    font: 'sans',
    baseColor: '#101828',
    baseName: 'Matte Obsidian',
    textColor: '#8DC63F',
    textName: 'Neon Lime'
  };

  const updatePreview = () => {
    if (!previewText || !previewCard) return;

    currentConfig.text = nameInput?.value.trim() || 'YOUR NAME';
    currentConfig.sub = subInput?.value.trim() || '';

    previewText.textContent = currentConfig.text;
    if (previewSub) {
      previewSub.textContent = currentConfig.sub;
      previewSub.style.display = currentConfig.sub ? 'block' : 'none';
    }

    // Colors
    previewCard.style.background = currentConfig.baseColor;
    previewCard.style.color = currentConfig.textColor;

    // Font styling
    if (currentConfig.font === 'mono') {
      previewText.style.fontFamily = 'var(--font-mono)';
      previewText.style.letterSpacing = '0.04em';
    } else if (currentConfig.font === 'serif') {
      previewText.style.fontFamily = 'var(--font-serif)';
      previewText.style.letterSpacing = '0.01em';
    } else {
      previewText.style.fontFamily = 'var(--font-sans)';
      previewText.style.letterSpacing = '-0.02em';
    }

    // Update WhatsApp link
    if (nameplateWhatsAppBtn) {
      const msg = `Hi Namma 3D Lab, I customized a Desk Nameplate on your 3D customizer:\n` +
        `• Name/Title: "${currentConfig.text}"\n` +
        `• Subtitle: "${currentConfig.sub}"\n` +
        `• Baseplate Color: ${currentConfig.baseName}\n` +
        `• Embossed Color: ${currentConfig.textName}\n` +
        `• Font Style: ${currentConfig.font.toUpperCase()}\n` +
        `Please confirm UPI payment link (₹599) and dispatch time.`;
      nameplateWhatsAppBtn.href = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    }
  };

  if (nameInput) nameInput.addEventListener('input', updatePreview);
  if (subInput) subInput.addEventListener('input', updatePreview);

  // Base Color Swatches
  baseSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      baseSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      currentConfig.baseColor = swatch.getAttribute('data-color');
      currentConfig.baseName = swatch.getAttribute('data-name');
      updatePreview();
    });
  });

  // Text Color Swatches
  textSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      textSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      currentConfig.textColor = swatch.getAttribute('data-color');
      currentConfig.textName = swatch.getAttribute('data-name');
      updatePreview();
    });
  });

  // Font Pills
  fontPills.forEach(pill => {
    pill.addEventListener('click', () => {
      fontPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentConfig.font = pill.getAttribute('data-font');
      updatePreview();
    });
  });

  // Add custom nameplate to cart
  if (nameplateCartBtn) {
    nameplateCartBtn.addEventListener('click', () => {
      Cart.addItem({
        id: `nameplate-${Date.now()}`,
        name: `Custom Nameplate: ${currentConfig.text}`,
        price: 599,
        qty: 1,
        meta: `Base: ${currentConfig.baseName} | Text: ${currentConfig.textName} | Font: ${currentConfig.font}`
      });

      const originalText = nameplateCartBtn.innerHTML;
      nameplateCartBtn.innerHTML = '✓ Added to Cart! <i data-lucide="check"></i>';
      nameplateCartBtn.style.background = '#059669';
      initLucide();
      setTimeout(() => {
        nameplateCartBtn.innerHTML = originalText;
        nameplateCartBtn.style.background = '';
        initLucide();
      }, 1500);
    });
  }

  updatePreview();
}

/**
 * 9. Guest Checkout Drawer, Razorpay Mock Simulator & GST Bill of Supply Generator
 */
function initCheckoutAndPaymentModals() {
  const checkoutModal = document.getElementById('modal-checkout');
  const checkoutCloseBtn = document.getElementById('checkout-close-btn');
  const cartTriggerBtn = document.getElementById('cart-checkout-btn');
  const checkoutItemsContainer = document.getElementById('checkout-cart-items');
  const checkoutTotalDisplay = document.getElementById('checkout-total-val');
  const checkoutForm = document.getElementById('guest-checkout-form');

  const payOptRazorpay = document.getElementById('pay-opt-razorpay');
  const payOptWhatsApp = document.getElementById('pay-opt-whatsapp');
  let selectedPaymentMethod = 'razorpay';

  // Open Checkout Modal
  const openCheckout = () => {
    if (Cart.items.length === 0) {
      alert('Your cart is empty! Add an item or custom nameplate first.');
      return;
    }

    if (checkoutItemsContainer) {
      checkoutItemsContainer.innerHTML = Cart.items.map(item => `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #E2E8F0; padding-bottom: 4px;">
          <div>
            <strong>${item.name}</strong>
            ${item.meta ? `<br><small style="color: var(--slate);">${item.meta}</small>` : ''}
            <div style="font-size: 11px; color: var(--slate);">Qty: ${item.qty} &bull; ₹${item.price} each</div>
          </div>
          <strong style="color: var(--navy);">₹${item.price * item.qty}</strong>
        </div>
      `).join('');
    }

    const total = Cart.getTotal();
    if (checkoutTotalDisplay) {
      checkoutTotalDisplay.textContent = `₹${total}`;
    }

    if (checkoutModal) checkoutModal.classList.add('open');
  };

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCheckout);
  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', () => checkoutModal?.classList.remove('open'));

  // Payment Options Toggle
  if (payOptRazorpay && payOptWhatsApp) {
    payOptRazorpay.addEventListener('click', () => {
      payOptRazorpay.classList.add('active');
      payOptWhatsApp.classList.remove('active');
      selectedPaymentMethod = 'razorpay';
    });

    payOptWhatsApp.addEventListener('click', () => {
      payOptWhatsApp.classList.add('active');
      payOptRazorpay.classList.remove('active');
      selectedPaymentMethod = 'whatsapp';
    });
  }

  // Payment Simulator Elements
  const paymentModal = document.getElementById('modal-payment');
  const paymentCloseBtn = document.getElementById('payment-close-btn');
  const paymentAmountDisplay = document.getElementById('payment-amount-display');
  const simulateSuccessBtn = document.getElementById('simulate-success-btn');

  if (paymentCloseBtn) {
    paymentCloseBtn.addEventListener('click', () => paymentModal?.classList.remove('open'));
  }

  // Invoice Modal Elements
  const invoiceModal = document.getElementById('modal-invoice');
  const invoiceCloseBtn = document.getElementById('invoice-close-btn');
  const invoicePrintBtn = document.getElementById('invoice-print-btn');

  if (invoiceCloseBtn) {
    invoiceCloseBtn.addEventListener('click', () => invoiceModal?.classList.remove('open'));
  }

  if (invoicePrintBtn) {
    invoicePrintBtn.addEventListener('click', () => window.print());
  }

  // Handle Checkout Submission
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const custName = document.getElementById('cust-name')?.value.trim();
      const custPhone = document.getElementById('cust-phone')?.value.trim();
      const custAddr = document.getElementById('cust-address')?.value.trim();
      const custCity = document.getElementById('cust-city')?.value.trim() || 'Bangalore';
      const custPin = document.getElementById('cust-pincode')?.value.trim();

      if (!custName || !custPhone || !custAddr || !custPin) {
        alert('Please complete all required shipping fields.');
        return;
      }

      const totalVal = Cart.getTotal();

      if (selectedPaymentMethod === 'razorpay') {
        // Open Razorpay Simulator Modal
        if (checkoutModal) checkoutModal.classList.remove('open');
        if (paymentAmountDisplay) paymentAmountDisplay.textContent = `₹${totalVal}`;
        if (paymentModal) paymentModal.classList.add('open');
      } else {
        // Direct WhatsApp Advance Handshake
        const itemsSummary = Cart.items.map(i => `• ${i.name} (Qty: ${i.qty}) - ₹${i.price * i.qty}`).join('\n');
        const advanceAmount = Math.round(totalVal * 0.5);
        const msg = `Hi Namma 3D Lab, I placed a guest order on your website:\n` +
          `Order Summary:\n${itemsSummary}\n` +
          `Total: ₹${totalVal} | 50% Advance: ₹${advanceAmount}\n\n` +
          `Delivery Details:\n` +
          `• Name: ${custName}\n` +
          `• Phone: ${custPhone}\n` +
          `• Address: ${custAddr}, ${custCity} - ${custPin}\n\n` +
          `Please share UPI QR code for 50% advance confirmation.`;

        if (checkoutModal) checkoutModal.classList.remove('open');
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
      }
    });
  }

  // Simulate Payment Success & Open GST Invoice
  if (simulateSuccessBtn) {
    simulateSuccessBtn.addEventListener('click', () => {
      const custName = document.getElementById('cust-name')?.value.trim() || 'Valued Customer';
      const custPhone = document.getElementById('cust-phone')?.value.trim() || '+91 98765 43210';
      const custAddr = document.getElementById('cust-address')?.value.trim() || 'Indiranagar, Bangalore';
      const custCity = document.getElementById('cust-city')?.value.trim() || 'Bangalore';
      const custPin = document.getElementById('cust-pincode')?.value.trim() || '560038';

      const totalVal = Cart.getTotal();
      const taxableVal = Number((totalVal / 1.18).toFixed(2));
      const cgstVal = Number(((totalVal - taxableVal) / 2).toFixed(2));
      const sgstVal = cgstVal;

      // Populate Bill of Supply
      const invNumEl = document.getElementById('invoice-num-text');
      const invDateEl = document.getElementById('invoice-date-text');
      const invCustName = document.getElementById('invoice-cust-name');
      const invCustAddr = document.getElementById('invoice-cust-addr');
      const invCustPhone = document.getElementById('invoice-cust-phone');
      const invItemsBody = document.getElementById('invoice-items-body');

      const invTaxableVal = document.getElementById('invoice-taxable-val');
      const invCgstVal = document.getElementById('invoice-cgst-val');
      const invSgstVal = document.getElementById('invoice-sgst-val');
      const invGrandVal = document.getElementById('invoice-grand-val');

      const randomInvoiceNum = Math.floor(1000 + Math.random() * 9000);
      const todayStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

      if (invNumEl) invNumEl.textContent = `INV-N3D-2026-${randomInvoiceNum}`;
      if (invDateEl) invDateEl.textContent = `Date: ${todayStr}`;
      if (invCustName) invCustName.textContent = custName;
      if (invCustAddr) invCustAddr.textContent = `${custAddr}, ${custCity} - ${custPin}`;
      if (invCustPhone) invCustPhone.textContent = `WhatsApp: +91 ${custPhone}`;

      if (invItemsBody) {
        invItemsBody.innerHTML = Cart.items.map((item, idx) => `
          <tr>
            <td>${idx + 1}</td>
            <td><strong>${item.name}</strong>${item.meta ? `<br><small style="color: #64748B;">${item.meta}</small>` : ''}</td>
            <td>39269099</td>
            <td class="num">${item.qty}</td>
            <td class="num">${item.price}</td>
            <td class="num">${item.price * item.qty}</td>
          </tr>
        `).join('');
      }

      if (invTaxableVal) invTaxableVal.textContent = `₹${taxableVal}`;
      if (invCgstVal) invCgstVal.textContent = `₹${cgstVal}`;
      if (invSgstVal) invSgstVal.textContent = `₹${sgstVal}`;
      if (invGrandVal) invGrandVal.textContent = `₹${totalVal}.00`;

      // Close payment modal and open invoice modal
      if (paymentModal) paymentModal.classList.remove('open');
      if (invoiceModal) invoiceModal.classList.add('open');

      // Clear cart
      Cart.items = [];
      Cart.updateUI();
    });
  }
}

/**
 * 10. Lucide Icons Re-render Helper
 */
function initLucide() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
