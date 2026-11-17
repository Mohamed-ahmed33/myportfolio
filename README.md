# Mohamed Ahmed Shaban - Personal Portfolio

A modern, responsive, and performance-optimized personal portfolio website engineered with **React**, **Vite**, and **Tailwind CSS**.

Designed for **Mohamed Ahmed Shaban**: Management Information Systems Graduate, Junior Web Developer, and Business & Product Analysis foundations based in Cairo, Egypt.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The site will be live at `http://localhost:3000` (or the port indicated in your terminal).

### 3. Production Build & Preview
To create an optimized production build:
```bash
npm run build
```
To preview the compiled build locally:
```bash
npm run preview
```

---

## 🛠️ How to Customize Your Portfolio

All data across the portfolio is centralized into a single configuration file for effortless maintenance:

### 1. Updating Contact Details & Social Links
Open [src/data/portfolioData.js](file:///c:/Users/mohamed%20ahmed/OneDrive/Desktop/MyPortfolio/src/data/portfolioData.js):
```javascript
export const personalInfo = {
  // ...
  contact: {
    email: "your.email@example.com",     // Enter your email here
    linkedin: "https://linkedin.com/in/...", // Enter your LinkedIn URL
    github: "https://github.com/...",    // Enter your GitHub URL
    phone: "+20 100 000 0000",           // Optional: Enter phone number
  },
  // ...
};
```
> **Note:** If any contact field is left as an empty string (`""`), its button will automatically and gracefully stay hidden on the site without broken links.

### 2. Updating Your CV / Resume
Your CV is located at:
```
public/Mohamed-Ahmed-Shaban-CV.pdf
```
To update your CV, simply replace this file with your new PDF using the same filename (`Mohamed-Ahmed-Shaban-CV.pdf`). The website automatically detects it and enables the **Resume / Download CV** button in the navigation bar.

---

## 📁 Project Architecture

```
MyPortfolio/
├── public/
│   └── Mohamed-Ahmed-Shaban-CV.pdf    # Downloadable CV
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Responsive navigation, theme toggle, CV download
│   │   ├── Hero.jsx                   # Hero section with systems architecture visual
│   │   ├── About.jsx                  # Narrative & complementary strengths
│   │   ├── Skills.jsx                 # Categorized skills matrix with filter pills
│   │   ├── FeaturedProject.jsx        # Blood Plasma Donation System & interactive workflow
│   │   ├── Experience.jsx             # El Araby Group customer service internship
│   │   ├── Education.jsx              # Degree & professional certifications timeline
│   │   ├── BeyondTech.jsx             # Chess analytical disciplines & constraints
│   │   ├── Contact.jsx                # Location, contact channels & interactive inquiry form
│   │   └── Footer.jsx                 # Semantic footer with navigation & top-scroll
│   ├── context/
│   │   └── ThemeContext.jsx           # Dark / Light mode provider with persistence
│   ├── data/
│   │   └── portfolioData.js           # Central configuration for all content & links
│   ├── App.jsx                        # Main application container
│   ├── index.css                      # Tailwind & custom typography rules
│   └── main.jsx                       # React DOM entry point
├── index.html                         # Semantic HTML & SEO meta tags
├── tailwind.config.js                 # Custom navy/slate design system
├── vite.config.js                     # Vite build configuration
└── package.json                       # Dependencies & build scripts
```

---

## 🎨 Design System Highlights
- **Palette**: Deep navy/slate dark background (`#050811` / `#090e1a`), clean slate light background (`#f8fafc`), with refined cyan/blue accent (`#0ea5e9` / `#0284c7`).
- **Typography**: Clean hierarchy with *Plus Jakarta Sans* and *JetBrains Mono* for technical accents.
- **Interactivity**: Accessible smooth scrolling, interactive 3-step workflow diagram for the Blood Plasma Donation graduation project, and instant theme switching.
