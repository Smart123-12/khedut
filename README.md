# 🌱 Khedut Mart - ખેડૂત માર્ટ

> **ગામડાનું તાજું સીધું તમારા ઘર સુધી!**  
> *Gujarat's premier farmer-to-customer marketplace bringing fresh, organic, and locally harvested farm products directly from the farms to your doorstep.*

🚀 **[Live Demo Website](https://Smart123-12.github.io/khedut/)**

---

## 🌾 Features

- **Direct Farmer-to-Consumer Connection:** Enables farmers to bypass middle-men and list their fresh produce directly.
- **Rich Product Catalog:** Browse diverse categories like organic vegetables, fresh fruits (such as authentic Gir Kesar Mangoes), grains, and dairy.
- **Interactive Dashboards:**
  - **👨‍🌾 Farmer Dashboard:** Allows farmers to manage their listings, monitor sales, and track pending orders.
  - **💼 Admin Dashboard:** Overall system analytics, order tracking management, and user control.
- **E-Commerce Funnel:** Fully functional Cart system, elegant Checkout flow, and item Wishlisting.
- **Order Tracking:** Track your deliveries from harvest to door with real-time status updates.
- **High-Fidelity UI/UX:** Responsive, modern design featuring smooth animations driven by `Framer Motion` and clean layout patterns styled in Vanilla CSS.
- **Gujarati Typography Support:** Native integration of `Noto Sans Gujarati` and Google Fonts for a localized experience.

---

## 🛠️ Technology Stack

- **Frontend Core:** React 19 & Vite
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Styling:** Vanilla CSS (curated HSL palettes, responsive flexbox/grid layouts)

---

## 💻 Local Setup & Installation

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Smart123-12/khedut.git
   cd khedut
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 🚀 Deployment

The project is configured for automated deployment to **GitHub Pages** using GitHub Actions:

- Every push to the `main` branch triggers the action workflow specified in `.github/workflows/deploy.yml`.
- The workflow compiles the build using `npm run build` and automatically uploads the output directory (`./dist`) directly to your live GitHub Pages site.
