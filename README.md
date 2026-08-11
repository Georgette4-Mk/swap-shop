# SWAP E-Commerce Platform 

SWAP is a modular, component-based multi-role e-commerce platform built using vanilla **HTML5, CSS3, and JavaScript (ES Modules)**. The platform features an organized `src/` and `public/` directory layout with built-in role guarding for Clients, Vendors, and Super Admins.

---

## 🏗️ Project Architecture

```text
ecommerce-platform/
│
├── public/                       # Static public assets (global resources)
│   ├── favicon.ico
│   ├── logo.svg
│   ├── icons/                    # General UI icons (cart, trash, user)
│   ├── images/                   # Banners and promotional graphics
│   └── products/                 # Product display images
│
└── src/                          # Dynamic source code
    │
    ├── index.html                # Platform landing page
    ├── shop.html                 # Customer product catalog
    ├── product-details.html      # Individual item view
    ├── cart.html                 # Customer shopping cart
    │
    ├── auth/                     # Authentication Module
    │   ├── login.html            # User sign-in page
    │   ├── register.html         # User sign-up page
    │   └── forgot-password.html  
    │
    ├── client/                   # Client / Buyer Dashboard
    │   ├── dashboard.html        # Order history and profile overview
    │   ├── orders.html           # Detailed order tracking
    │   └── wishlist.html         # Saved items
    │
    ├── vendor/                   # Vendor / Seller Dashboard
    │   ├── dashboard.html        # Sales analytics overview
    │   ├── products.html         # Product inventory management
    │   └── orders.html           # Customer orders to fulfill
    │
    ├── admin/                    # Super Admin Dashboard
    │   ├── dashboard.html        # Global platform metrics
    │   ├── users.html            # User management (approving vendors)
    │   └── categories.html       # Global category management
    │
    ├── components/               # Reusable UI Components (ES Modules)
    │   ├── Header.js
    │   ├── Sidebar.js            # Dashboard side navigation
    │   └── ProductCard.js
    │
    ├── css/                      # Stylesheets
    │   ├── style.css             # Core global styles
    │   ├── components.css        # Component layouts
    │   └── dashboards.css        # Shared panel layouts
    │
    └── js/                       # Core Application Logic
        ├── app.js                # Core platform initialization
        ├── auth.js               # Login, registration, & token handlers
        └── middleware.js         # Role guarding and access control
```

---

## 🌟 Key Features

* **Component-Based UI:** Built using reusable JavaScript templates (`Header`, `Sidebar`, `ProductCard`) avoiding code duplication.
* **Role-Based Access Control (RBAC):** Native frontend router guard middleware preventing cross-role dashboard access.
* **Separated Asset Delivery:** Optimized `public/` asset workflow for lightning-fast image and icon mapping.
* **State Persistence:** Local storage-driven active session and cart tracking systems.

---

## 🔐 User Roles Breakdown

1. **Client:** Standard buyer access to explore the catalog, build a cart, write reviews, and track order histories.
2. **Vendor:** Supplier access to add new products, track store inventory levels, and process individual buyer fulfillments.
3. **Admin:** Super-user oversight to review platform metrics, manage user bans, and authorize pending vendor accounts.

---

## 🚀 Getting Started

### Prerequisites
Because this project utilizes native **JavaScript ES Modules (`import/export`)**, running the project by double-clicking the HTML files directly in your browser will trigger a `CORS error`. You must run the project using a local development server.

### Running Locally

#### Option 1: VS Code Live Server (Recommended)
1. Open the project root folder in **VS Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `src/index.html` and select **"Open with Live Server"**.

#### Option 2: Node.js (NPX)
If you have Node.js installed, open your terminal in the root project folder and run:
```bash
npx serve .
```
Then navigate to `http://localhost:3000/src/index.html`.

---

## ⚙️ Core Technical Rules

### 1. Relative Script Loading
All custom scripts initialized in `.html` layouts must be flagged with `type="module"` to support nested imports:
```html
<script type="module" src="js/app.js"></script>
```

### 2. Absolute Asset Resolution
Always reference global media maps starting directly from the structural `/public/` root folder:
```javascript
// Correct implementation within components
img.src = "/public/products/item-01.jpg";
```

### 3. Protecting Routes
Dashboard views must explicitly validate active credentials using the access runtime check at the top of the header script:
```javascript
import { checkAccess } from '../js/middleware.js';
checkAccess(['vendor']); // Throws error and drops unauthorized sessions back to index
```
