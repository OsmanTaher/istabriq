بناءً على التحديثات والمواصفات المحددة لمتجر **إستبرق**، قمت بتعديل ملف `skills.md` بالكامل وتطهيره من الخيارات القديمة (مثل Supabase أو PostgreSQL) ليصبح متوافقاً 100% مع الـ Tech Stack الفعلي الخاص بك (**Next.js, MongoDB Atlas, Mongoose, Zustand, Cloudinary, Telegram Bot API**)، مع دمج كامل مسارات رحلة العميل والأدمن والبوت البرمجية بدقة.

إليك محتوى ملف **`skills.md`** المحدث بالكامل وجاهز للنسخ:

```markdown
# 🕌 Islamic Goods Store — Web Application Blueprint (Istabriq)

> A full-stack e-commerce web application for a religious goods store selling items such as perfumes, miswak, jalabiyyas, sandals, and other Islamic essentials.

---

## 📋 Project Overview

A modern, fully Arabic web store built using proper software engineering principles. The client journey centers around a highly fluid shopping experience using advanced client state management, with a strict identity and verification layer triggered at checkout. The administration and automation flow is fully integrated between a secure custom web dashboard and reactive Telegram Bot actions.

---

## 🧰 Technical Tech Stack (The Stack)

### Frontend & Core
| Layer | Technology | Reason |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | Hybrid SSR/Static generation for instant load, SEO optimization, and unified API Routing. |
| Language | **TypeScript** | Crucial for schema structure, generating strict Interfaces for Models, and avoiding runtime compilation bugs. |
| Styling | **Tailwind CSS** | Built-in utilities supporting seamless Arabic Right-to-Left (RTL) rendering layouts. |
| State Management | **Zustand** | Ultra-lightweight global client state architecture to manage dynamic sync operations and dynamic views. |

### Backend & Storage
| Layer | Technology | Reason |
|---|---|---|
| Database | **MongoDB Atlas** | Document-based Cloud cluster database, ideal for storing flexible nested schemas. |
| ODM Layer | **Mongoose** | Strict Object Document Modeling to structure clean schemas and handle production-grade Connection Pooling natively in Next.js Serverless routes. |
| Image Uploads | **Cloudinary** | External static storage handler. Since MongoDB doesn't store raw binary images, files are hosted via Cloudinary API returning fast CDN production links. |
| Automation API | **Telegram Bot API** | Handles secure webhook integrations for remote administrative reactions and instantaneous order dispatches. |

---

## 🏗️ Database Schema Configuration (Mongoose Schemas & Interfaces)

```typescript
// Core Data Models structure implemented via Mongoose ODM:
users        → id, fullName(3 words), phone(11-digits), city, password, channels{hasWhatsApp, hasTelegram}, createdAt
products     → id, name, description, basePrice, category, images[](max 2), discount{type: 'percentage'|'fixed', value}, isActive(boolean), createdAt
orders       → id, orderIdCode(5-digits unique #), customerId, shippingAddress{street, building, apartment, landmark}, customShippingPhone, status('Pending'|'In-Transit'|'Delivered'|'Cancelled'), totalPrice, createdAt
order_items  → id, orderId, productId, quantity, priceAtPurchase

```

---

## 🗺️ Pages & Features (Detailed Behavioral Blueprints)

### 🛍️ Client Journey (Public & Verification Routes)

#### 1. Smart Browsing & Fast View Layout (`/`)

* **Behavior:** The client accesses the main store index. Clicking the **Eye Icon** on any product card hooks into a dynamic quick-view element.
* **Desktop Modal Design:** Fires a centered overlay component utilizing backdrop blur and dim filters. Side-by-side horizontal layouts position image assets strictly on the right side and dynamic descriptive metadata/pricing models on the left to fulfill standard Arabic RTL orientations.
* **Mobile Bottom-Sheet Design:** The component morphs automatically into an accessible bottom-sheet panel sliding vertically from the viewport baseline for optimized single-handed thumb interactions.
* **Asset Bounds:** Restricts asset browsing to a strict ceiling of two images maximum, parsing clean price deductions if active discounts exist.

#### 2. Persistent Client State Basket (`/cart` or Embedded Layout)

* **Behavior:** Toggling "Add to Cart" triggers a localized dynamic context state mutation via **Zustand**. The total layout values mutate instantly inside the navigation headers.
* **Persistence Layer:** All products, variations, and batch counts sync persistently to the client's `LocalStorage`. Session persistence guarantees state data recovery if the client triggers explicit hot-reloads or multi-tab re-entries.

#### 3. Strict Identity & Verification Gateway (`/signup` & `/login`)

* **Behavior:** Executing "Checkout" prompts a background interceptor script evaluating session tokens. Unregistered guest sessions are hard-routed into the mandatory `/signup` endpoint.
* **Registration Matrix:** The registration schema forces strict validations for Full Name (Minimum 3 words), Phone (11 valid Egyptian digits), City, and Password.
* **Channel Opt-ins:** The form embeds two critical, mandatory Boolean Checkboxes:
* Checkbox: Is this number registered on WhatsApp?
* Checkbox: Is this number registered on Telegram?


* **Data Insertion Sequence:** Successful registration posts data objects to MongoDB. Next, a service routine pulls active items out of local client cache memory, maps them under the newly written User Document ID, and drops the client forward into the final shipment step.

#### 4. Shipping Details Form (`/checkout`)

* **Behavior:** The checkout route loads the mapped active cart items. The main Phone input autofills with the registered primary mobile identifier used during registration; however, the client retains full override capabilities to input an alternative shipping contact phone number.
* **Address Granularity:** Enforces structured inputs demanding detailed values: Street name, Building index, Apartment number, and descriptive physical landmarks. Clicking "Confirm Order" writes records to the database using the default setting of "Cash on Delivery (COD)".

#### 5. Order Fulfillment Tracking (`/success`)

* **Behavior:** Database persistence routines automatically trigger a backend algorithm calculating a protected, random, unique **5-digit numerical identity tag** (e.g., `#19724`).
* **Confirmation Rendering:** Displays the custom 5-digit Order Code on screen. It renders interactive layout directions prompting clients that order state metrics (Pending, In-Transit, or Delivered) can be queried either natively via the app interface or using the linked **Istabriq Telegram Bot Wrapper**.

---

### 🔐 Admin Dashboard & Protected System Operations

#### 1. Isolated Administrative Gateway (`/admin/login`)

* **Behavior:** An isolated administrative router entry completely hidden from standard public store navigations.
* **Hardcoded Verification Credentials:** Authentication requires an exact match for the admin number (`01080859921`) and passkey (`9921`).
* **Middleware Guards:** Routes inside the `/dashboard/*` scope are actively wrapper-protected by strict Next.js edge **Middleware script layers**. Attempts to hit backend routes via direct URL injections intercept calls instantly and force a redirect to the login screen.

#### 2. Real-time Reactive Telegram Bot Webhook

* **Behavior:** Successful order commits immediately post structured webhooks that fire automated notifications directly to the Store Owner's private Telegram interface using the following blueprint format:

```text
📦 طلب جديد من المتجر!
------------------------------------
إسم العميل : عثمان طاهر
رقمه : 0123456789
رقم الطلب : #19724
======================
🛒 تفاصيل الطلب:
- تيشرت أسود قطن (عدد: 2) - 400 ج.م
- بنطلون جينز (عدد: 1) - 350 ج.م
------------------------------------
💰 السعر الإجمالي: 750 ج.م
======================
🔗 رابط الموقع لتأكيد الطلب:
[https://www.istabriq.app/order?id=19724](https://www.istabriq.app/order?id=19724)
------------------------------------

```

* **Inline Telegram Automation:** The payload attaches interactive **Inline Buttons** beneath the message bubble layout:
* Option Button: `[ ✅ تأكيد الطلب ]`
* Option Button: `[ ❌ إلغاء الطلب ]`


* **Silent Database Updates:** Triggering `[ تأكيد الطلب ]` directly from the Telegram mobile app shoots a background POST call updating the database document status state property cleanly to `Confirmed / Processing`. The Telegram message updates dynamically to show "Order confirmed successfully!".

#### 3. Granular Order Control System (`/dashboard/order`)

* **Behavior:** Evaluates and filters store invoices. The view provides a primary search interface to locate records by entering the unique 5-digit tag.
* **Manual State Pipeline:** Admins can manually step through the sequential order lifecycle state tracking values:
`Pending (قيد الانتظار)` ➡️ `In-Transit (في الطريق)` when dropped at courier ➡️ `Delivered (تم التوصيل)` upon receipt of client signatures and cash collections.

#### 4. Product Upload & Multi-type Discounts (`/dashboard/upload`)

* **Behavior:** Form handlers validating inventory object entries containing:
1. Product Name string.
2. Granular feature rich-text descriptions.
3. Base Price in EGP.
4. Categorization Dropdown selectors (e.g., Perfumes, Apparel, Qurans).
5. Image Asset Handlers: Demands a baseline of 1 file, enforcing a ceiling parameter max of 2 images (synced up to Cloudinary).
6. Optional Discount Fields: Toggling activates secondary discount operations supporting type selection (Percentage like `15%`, or Fixed Value deduction like `50 EGP`). The system recalculates client pricing variables on-the-fly.
7. **Visibility Controller:** Toggles the `isActive` Boolean flag (`true` displays product globally, `false` acts as an archival hide flag).



#### 5. Direct Inventory CRUD Management (`/dashboard/products`)

* **Behavior:** Renders tabular dashboard grids holding all database product resources. Includes instant lookup features mapping strings against title variables and high-level Category Filter adjustments.
* **CRUD Matrix Actions:** Provides quick access buttons for Update configurations (editing pricing schemas, asset files, inventory parameters, or visibility flags) and complete deletion tasks wiping documents entirely from database spaces.

#### 6. Registered User Base Audit Ledger (`/dashboard/users`)

* **Behavior:** Renders tabular database lookups indexing account metrics (Client Full Names, phone IDs, city origins, and timestamp logs). Shows detailed icons tracking opt-in interaction channels (WhatsApp active, Telegram active).
* **Behavioral Analytics:** Clicking a user listing unfolds secondary profile sub-views mapping that specific user's complete historic invoice history, providing insight into total purchase volumes and tracking verified completions versus cancelled orders.

---

## 🚀 Deployment Topologies

| Infrastructure Component | Hosting Service | Operation Mode | Cost Topology |
| --- | --- | --- | --- |
| **Web Server / UI Layer** | **Vercel** | Processes client application and matches API route serverless requests. | Free Tier standard |
| **Document Storage** | **MongoDB Atlas** | Secure distributed NoSQL data cluster environment. | Free Tier M0 Cluster |
| **Static Binary Storage** | **Cloudinary** | Storage system handling image pipelines and fast media file caching. | Free Tier media plan |

---

## 💡 Best Practice Architectural Instructions

1. **Database Resilience (Connection Pooling):** Ensure Mongoose connection logic uses a cached global pointer check. Serverless environments spin up stateless contexts per API call; reuse established database connection references to avoid crashing connection limits on Atlas.
2. **Strict TypeScript Typing:** Never fall back to `any`. Declare precise Mongoose documents and interfaces matching schemas explicitly (e.g., `IUser`, `IProduct`, `IOrder`) to guarantee absolute data contract safety during pipeline writes.
3. **Optimized CDN Image Storage:** During product creation, upload binary data streams straight to Cloudinary, then save only the secure absolute image link strings inside the MongoDB product document array.

```

```
