# 🕌 Islamic Goods Store — Web Application Blueprint

> A full-stack e-commerce web application for a religious goods store selling items such as perfumes, miswak, jalabiyyas, sandals, and other Islamic essentials.

---

## 📋 Project Overview

A modern, fully Arabic web store where customers can browse products, add them to a cart, and submit orders — without needing to register or log in. The admin manages everything from a secure dashboard: products, orders, and customer communication via WhatsApp.

---

## 🧰 Recommended Tech Stack

### Frontend

| Layer        | Technology                   | Reason                                    |
| ------------ | ---------------------------- | ----------------------------------------- |
| Framework    | **Next.js 14+ (App Router)** | SSR/SSG for speed + SEO, routing built-in |
| Language     | **TypeScript**               | Type safety, fewer bugs                   |
| Styling      | **Tailwind CSS**             | Rapid UI, RTL-friendly                    |
| State / Cart | **Zustand**                  | Lightweight global state for cart         |
| Forms        | **React Hook Form + Zod**    | Validation for order & admin forms        |

### Backend

> ✅ **Recommended: Next.js API Routes (same project)**
>
> Since the store is simple in logic, you don't need a separate backend server. Next.js API Routes (`/app/api/`) handle everything — products, orders, image uploads. This keeps the entire project in **one codebase**, easier to deploy and maintain.
>
> If the project scales later, you can migrate the API to a standalone **Express.js / Fastify / Hono** server.

### Database

> ✅ **Implemented: MongoDB**
>
> Your project uses MongoDB with the following models:
>
> - 📦 **Product** — product details, pricing, stock, category reference
> - 🏷️ **Category** — product categories
> - 📋 **Order** — customer orders with items, status, and timestamps
>
> Connected via Mongoose ORM in `/lib/db.ts`

### Image Uploads

> ✅ **Implemented: Cloudinary**
>
> - Admin uploads image → processed by Cloudinary → **public URL returned instantly**
> - Images are served through Cloudinary CDN for fast delivery
> - Cloudinary integration configured in `/lib/cloudinary.ts`
> - Perfect for small-to-medium store with built-in image optimization

---

## 🏗️ Database Schema (MongoDB Collections)

```
products         → _id, name, description, price, stock, category, image_url, created_at
categories       → _id, name
orders           → _id, customer_name, customer_phone, customer_address, status, items, total, created_at
order_items      → embedded in orders as array of { product_id, quantity, price }
```

**Models Located In:**

- `/src/models/Product.ts` — Product schema and model
- `/src/models/Category.ts` — Category schema and model
- `/src/models/Order.ts` — Order schema and model

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

| Feature                      | Value                                               |
| ---------------------------- | --------------------------------------------------- |
| 🔍 **Product Search**        | Search by name in Arabic, real-time results         |
| 🏷️ **Discount / Sale Badge** | Show original vs. sale price on product card        |
| 📦 **Stock Management**      | Auto-hide product when stock = 0                    |
| 📊 **Order Status Timeline** | Customer sees status via order ID lookup (optional) |
| 🌙 **Dark Mode**             | Easy with Tailwind, great UX                        |
| 📱 **PWA Support**           | Users can "install" the store on their phone        |
| 🖨️ **Print Order**           | Admin prints a receipt/invoice per order            |
| 📈 **Sales Analytics**       | Simple chart: orders per day / revenue this month   |
| 🔔 **Admin Notifications**   | Browser push notification when new order arrives    |
| 🗂️ **Product Sorting**       | Sort by newest, price low-to-high, best sellers     |

---

## 🚀 Deployment

| Service           | Purpose                       | Cost                |
| ----------------- | ----------------------------- | ------------------- |
| **Vercel**        | Deploy Next.js frontend + API | Free tier available |
| **MongoDB Atlas** | Cloud database hosting        | Free tier (512MB)   |
| **Cloudinary**    | Image storage & CDN           | Free tier available |

> **Total cost to launch:** Free tier options available for all services. Scale affordably as needed.

---

## 🗂️ Project Structure (Next.js App Router)

```
/src
  /app
    /                         → Store home page
    /(store)
      /products               → All products
      /products/[slug]        → Product detail
      /cart                   → Cart page
      /checkout               → Order form
      /success                → Post-order page
    /admin                    → Admin dashboard
      /login                  → Admin login
      /dashboard              → Admin dashboard home
      /orders                 → Orders management
      /products               → Products CRUD
    /api
      /products               → GET products, POST product (POST /api/products/[id])
      /orders                 → GET/POST orders (PATCH /api/orders/[id])
      /upload                 → Handle image upload to Cloudinary
  /components
    /admin                    → Admin-specific components
    /layout
      /Header.tsx             → Navigation header
      /Footer.tsx             → Footer
    /store
      /ProductCard.tsx        → Product card component
      /CategoryCard.tsx       → Category card component
    /ui                       → Reusable UI components
  /lib
    /cloudinary.ts            → Cloudinary configuration & utilities
    /db.ts                    → MongoDB connection
  /models
    /Product.ts               → Product schema
    /Category.ts              → Category schema
    /Order.ts                 → Order schema
  /store
    /useCartStore.ts          → Zustand cart state management
```

---

## ✅ Summary — Your Implementation

| Component       | Technology                                            | Status         |
| --------------- | ----------------------------------------------------- | -------------- |
| Framework       | Next.js 14+ (App Router) + TypeScript                 | ✅ Implemented |
| Frontend State  | Zustand (Cart Store)                                  | ✅ Implemented |
| Database        | MongoDB + Mongoose                                    | ✅ Implemented |
| Image Uploads   | Cloudinary                                            | ✅ Implemented |
| Styling         | Tailwind CSS                                          | ✅ Implemented |
| API Routes      | Next.js `/api/` routes                                | ✅ Implemented |
| Store Structure | (`/store`) with cart, checkout, products, orders      | ✅ Implemented |
| Admin Dashboard | Protected routes with login/dashboard/orders/products | ✅ In Progress |

---

_Built with ❤️ — Modern, scalable, and zero-cost to start._
