# 🕌 Islamic Goods Store — Web Application Blueprint

> A full-stack e-commerce web application for a religious goods store selling items such as perfumes, miswak, jalabiyyas, sandals, and other Islamic essentials.

---

## 📋 Project Overview

A modern, fully Arabic web store where customers can browse products, add them to a cart, and submit orders — without needing to register or log in. The admin manages everything from a secure dashboard: products, orders, and customer communication via WhatsApp.

---

## 🧰 Recommended Tech Stack

### Frontend
| Layer | Technology | Reason |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG for speed + SEO, routing built-in |
| Language | **TypeScript** | Type safety, fewer bugs |
| Styling | **Tailwind CSS** | Rapid UI, RTL-friendly |
| State / Cart | **Zustand** | Lightweight global state for cart |
| Forms | **React Hook Form + Zod** | Validation for order & admin forms |

### Backend
> ✅ **Recommended: Next.js API Routes (same project)**
>
> Since the store is simple in logic, you don't need a separate backend server. Next.js API Routes (`/app/api/`) handle everything — products, orders, image uploads. This keeps the entire project in **one codebase**, easier to deploy and maintain.
>
> If the project scales later, you can migrate the API to a standalone **Express.js / Fastify / Hono** server.

### Database
> ✅ **Recommended: Supabase (PostgreSQL)**
>
> Supabase gives you three things in one free platform:
> - 🗄️ **PostgreSQL database** — structured, relational, perfect for products & orders
> - 🖼️ **Supabase Storage** — upload and serve product images instantly
> - 🔐 **Supabase Auth** — secure admin login, zero config
>
> **Why not others?**
> - Firebase: NoSQL, less suited for relational data like products/orders/categories
> - PlanetScale: MySQL-based, no built-in storage
> - MongoDB: Overkill and schema-less, not ideal here

### Image Uploads
> ✅ **Recommended: Supabase Storage** (not Cloudflare for this scale)
>
> - Admin uploads image → stored in Supabase bucket → **public URL returned instantly**
> - Image appears in the dashboard and on the store **immediately after upload**
> - No extra service or API key needed
>
> Cloudflare R2 is excellent for large-scale CDN needs, but adds unnecessary complexity for a small-to-medium store. You can always migrate later.

---

## 🏗️ Database Schema (Simplified)

```
products         → id, name_ar, description_ar, price, stock, category_id, image_url, created_at
categories       → id, name_ar
orders           → id, customer_name, customer_phone, customer_address, status, total, created_at
order_items      → id, order_id, product_id, quantity, price_at_order
admin_users      → id, email, password_hash (handled by Supabase Auth)
```

---

## 🗺️ Pages & Features

### 🛍️ Customer Side (Public — No Login Required)
- **Home Page** — Hero banner + featured products + categories
- **Products Page** — Browse all products with filters (category, price)
- **Product Detail Page** — Image, description, price, add to cart
- **Cart Drawer/Page** — View items, quantities, total
- **Order Confirmation Page** — Enter name + phone + address → submit order
- **Thank You Page** — Order summary shown after submission

### 🔐 Admin Dashboard (Protected — Login Required)
- **Login Page** — Secure admin-only access (Supabase Auth)
- **Dashboard Home** — Stats: total orders, pending orders, total products
- **Orders Management**
  - View all orders with status (pending / confirmed / rejected)
  - View order details and items
  - **Confirm** or **Reject/Delete** an order
  - **WhatsApp Button** → opens `wa.me/{phone}?text=...` with order summary pre-filled
- **Products Management (Full CRUD)**
  - Add new product with image upload (instant preview)
  - Edit product details
  - Delete product
  - Toggle product availability
- **Categories Management** — Add / Edit / Delete categories

---

## 📲 WhatsApp Integration

No need for the WhatsApp Business API (which requires approval). A simple link is enough:

```
https://wa.me/+201XXXXXXXXX?text=مرحبًا، بخصوص الطلب رقم #1023...
```

The admin clicks a button per order → WhatsApp opens with the customer's number and a pre-written message containing the order details. Simple, fast, free.

---

## 💡 Suggested Extra Features

| Feature | Value |
|---|---|
| 🔍 **Product Search** | Search by name in Arabic, real-time results |
| 🏷️ **Discount / Sale Badge** | Show original vs. sale price on product card |
| 📦 **Stock Management** | Auto-hide product when stock = 0 |
| 📊 **Order Status Timeline** | Customer sees status via order ID lookup (optional) |
| 🌙 **Dark Mode** | Easy with Tailwind, great UX |
| 📱 **PWA Support** | Users can "install" the store on their phone |
| 🖨️ **Print Order** | Admin prints a receipt/invoice per order |
| 📈 **Sales Analytics** | Simple chart: orders per day / revenue this month |
| 🔔 **Admin Notifications** | Browser push notification when new order arrives |
| 🗂️ **Product Sorting** | Sort by newest, price low-to-high, best sellers |

---

## 🚀 Deployment

| Service | Purpose | Cost |
|---|---|---|
| **Vercel** | Deploy Next.js frontend + API | Free tier |
| **Supabase** | Database + Storage + Auth | Free tier |

> Total cost to launch: **$0/month** on free tiers. Both scale affordably when needed.

---

## 🗂️ Project Structure (Next.js App Router)

```
/app
  /                    → Store home page
  /products            → All products
  /products/[id]       → Product detail
  /cart                → Cart page
  /checkout            → Order form
  /thank-you           → Post-order page
  /admin               → Admin dashboard
    /admin/login       → Admin login
    /admin/orders      → Orders list
    /admin/products    → Products CRUD
    /admin/categories  → Categories CRUD
/api
  /api/products        → GET / POST / PUT / DELETE
  /api/orders          → GET / POST / PATCH
  /api/upload          → Handle image upload to Supabase
/components
/lib
  /supabase.ts         → Supabase client
  /store.ts            → Zustand cart store
```

---

## ✅ Summary Answers to Your Questions

| Your Question | Answer |
|---|---|
| What backend to use? | **Next.js API Routes** — no separate server needed |
| What database to use? | **Supabase (PostgreSQL)** — best fit for your needs |
| How to handle image uploads with instant display? | **Supabase Storage** — upload → get URL → render immediately |
| Should I use Cloudflare? | **Not necessary now** — Supabase Storage is simpler and sufficient |
| Is the whole site in Arabic? | Yes — use `dir="rtl"` on `<html>` + Tailwind RTL plugin |

---

*Built with ❤️ — Modern, scalable, and zero-cost to start.*