# Namma 3D Lab: Comprehensive Business Model & Technical Specifications

## 1. Business Model & Customer Funnels

The platform serves two distinct customer journeys based on buyer intent:

| Funnel | What It Is | Buyer Behavior | Website Flow |
| :--- | :--- | :--- | :--- |
| **1. Shop (Catalog & Personalized)** | Idols, keychains, personalized name plates, desk models, home decor | Impulse, low ticket, primarily from Instagram ads | Pick product → live personalization preview → guest checkout → UPI / Razorpay → ship |
| **2. Custom / B2B Prototyping** | Functional prototypes, engineering parts, student projects, bulk orders | Considered purchase, higher ticket | Upload STL/OBJ or describe idea → instant estimate range → admin confirms → 50% advance → print & ship |

### Revenue Streams
1. **Ready-made Catalog**: Fixed-price finished models, desk gadgets, cultural idols, and lithophanes.
2. **Personalized Products**: Custom nameplates, embossed keychains, and lithophane lamps with live interactive text/color preview.
3. **Custom On-Demand 3D Printing**: Print from customer-uploaded 3D model files (.STL, .OBJ, .STEP, .3MF).
4. **CAD Modeling & Design Service**: Custom modeling for clients with only a sketch, broken part, or concept.
5. **Bulk / Educational / B2B Manufacturing**: High-volume batch printing with tiered pricing and direct WhatsApp quotation.

### Order Lifecycle & Pipeline
```
Enquiry / Quote / Cart → Price Confirmation (Instant or Admin) → Payment (50% Advance for Custom, 100% for Catalog) → Printing → Post-Processing / Finishing → Shipped → Delivered → Automated Invoice
```

---

## 2. Hero Section: Cinematic Looping Video Showcase
- **Replacement for Heavy 3D Canvas**:
  - High-definition ambient looping video showcasing 3D printing in action (macro nozzle laying filament, mechanical toolhead movement, rapid layer stacking).
  - High performance, instant load (<1.5s), zero scroll-jacking, low battery consumption.
- **Playback & Visual Specs**:
  - HTML5 `<video>` configured with `autoplay`, `muted`, `loop`, `playsinline`.
  - Subtle dark gradient overlay for text readability.
  - High-res poster image fallback for low-bandwidth mobile connections.
- **Hero Messaging & Actions**:
  - Tagline: *"Precision 3D Printing, Prototyping & Custom Gifts — Crafted Locally, Delivered Fast"*.
  - Dual CTAs: **"Explore Catalog"** & **"Get Custom Print Estimate"**.
  - Quick badges: 24–48h express dispatch, ±0.1mm tolerance, instant WhatsApp support.

---

## 3. Instagram Ad Compatibility & Conversion Optimization
- **Guest Checkout First**:
  - Google Sign-In is frequently blocked in Instagram's in-app webview. Checkout requires only Name, Phone Number, and Delivery Address.
  - User login is strictly optional (for order history).
- **Fast Mobile Performance**:
  - Optimized for mobile webviews (sub-2.5s initial load, compressed WebP images).
  - Sticky bottom mobile bar with **"Instant Quote"** and **"WhatsApp Order"**.
- **WhatsApp Integration**:
  - Primary contact and fast inquiry mechanism.
  - Auto-generated `wa.me` links with structured prefilled messages (e.g., *"Hi Namma 3D Lab, I want a quote for [Material] with estimated weight [X]g"*).
- **Payments**:
  - Direct UPI, Google Pay, PhonePe, Paytm, and Cards via Razorpay.

---

## 4. Instant Quote Engine

### Estimation Formula
```
Estimated Price = (Material Grams × Rate/g) + (Print Hours × Machine Rate/hr) 
                  + Setup Fee + Finishing Fee + Design Fee (if applicable) 
                  → Apply Margin & Minimum Order Value
```

### Flow & Inputs
1. **File Upload**: Drag-and-drop `.stl` or `.obj` file.
2. **Client-Side Volume Calculation**: Computes model bounding box and approximate mesh volume directly in the browser.
3. **Parameter Selection**:
   - Technology: FDM (Rapid & functional) vs. SLA/Resin (Ultra-high detail & smooth finish).
   - Material: PLA, PLA+, Silk PLA, PETG, ABS, ASA, Flexible TPU, Tough Resin.
   - Infill Density: 10% to 100% slider.
   - Layer Height / Quality: 0.12mm (Fine), 0.20mm (Standard), 0.28mm (Draft).
   - Quantity.
4. **Estimated Price Range**:
   - Displays an honest estimated range (e.g. `₹450 – ₹600`) with *"Final price verified by lab engineer within 2 hours"*.
5. **No File Fallback**:
   - Quick inquiry form (description, dimensions, reference photos) routed directly to admin & WhatsApp.

---

## 5. Catalog & Live Personalization Preview
- **Catalog Categories**:
  - Customized Nameplates & Desk Signs (with real-time font, text, and dual-color preview).
  - Keychains & Typography Accessories.
  - Cultural & Deities Idols (intricate resin and silk finish).
  - Functional Desk Gadgets & Cable Organizers.
  - Lithophane Light Boxes.
- **Product Details**:
  - High-res photography, available colors, dimensions, material specs, and lead time.

---

## 6. Brand Identity & Design System
- **Color Palette**:
  - Background: Deep industrial charcoal & obsidian (`#0A0D14`, `#121620`)
  - Signature Brand Accent: Neon Lime Green (`#8DC63F` / `#84CC16`) — matches Namma 3D Lab flyers and branding
  - Secondary Accent: Cyber Cyan (`#00E5FF`) for metrics and highlights
  - Text: Clean high-contrast neutral whites and muted silvers (`#F8FAFC`, `#94A3B8`)
- **Typography**: Inter / Space Grotesk / Outfit
- **UI Style**: Premium dark glassmorphism, glowing accents, tactile micro-animations.

---

## 7. Technical Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | HTML5, Modern Vanilla CSS, Vanilla JavaScript (ES Modules) |
| **Media** | Hardware-accelerated HTML5 Video Loop (timelapse / extruder loop) + WebP assets |
| **Icons & Fonts** | Lucide Icons + Google Fonts |
| **Payments** | Razorpay Payment Gateway (UPI, Cards, Netbanking) |
| **Communication** | WhatsApp Business API (`wa.me`) Click-to-Chat with pre-filled message builder |
| **Invoicing** | Client-side / printable GST-compliant Bill of Supply invoice generator |

---

## 8. Implementation Milestones
1. **Milestone 1**: Brand Foundation, Design System Tokens, Sticky Navbar & Footer.
2. **Milestone 2**: Looping Video Hero Section with trust badges and CTA routing.
3. **Milestone 3**: Shop Catalog with product cards, category filters, and live personalization preview for name plates/keychains.
4. **Milestone 4**: Instant Quote Calculator with client-side mesh volume estimation and honest price range display.
5. **Milestone 5**: Guest Checkout & WhatsApp order dispatch with auto-formatted payloads.
6. **Milestone 6**: Mobile optimization, SEO meta tags, and Lighthouse performance audit.
