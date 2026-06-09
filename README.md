<div align="center">

# Version X

### Digital Innovation Studio — Websites · Mobile Apps · Software Systems · AI Solutions
### استوديو الابتكار الرقمي — مواقع · تطبيقات · أنظمة · حلول ذكاء اصطناعي

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**[English](#-english)** · **[العربية](#-العربية)**

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

<a id="english"></a>

## 🇬🇧 English

### 📋 Overview

**Version X** is a full-featured corporate website for a digital innovation studio specializing in high-performance websites, mobile applications, enterprise software systems, and AI-powered solutions.

The project demonstrates **clean architecture**, **type-safe internationalization**, and **premium UI/UX** patterns inspired by leading SaaS brands — with smooth animations, dark mode, and full RTL/LTR support.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌐 **Bilingual (EN / AR)** | Full English & Arabic dictionaries with instant locale switching |
| ↔️ **RTL / LTR Ready** | Automatic `dir` and `lang` attributes via `LocaleProvider` |
| 🎨 **Design System** | CSS variables, gradients, glassmorphism, and semantic tokens |
| 🌙 **Dark Mode** | System-aware theme with persistent `localStorage` preference |
| 🎬 **Animations** | Framer Motion — scroll reveals, counters, mobile menu transitions |
| 📱 **Responsive** | Mobile-first layout with adaptive navigation |
| 🔍 **SEO Ready** | Per-page `metadata` exports (App Router) |
| ⚡ **Performance** | Next.js 16 App Router, `next/image`, static generation |

### 🗂️ Pages

| Route | Description |
|-------|-------------|
| `/home` | Hero, services overview, stats, call-to-action |
| `/about` | Story, vision & mission, values, team preview |
| `/services` | Service grid, process, tech stack, why choose us |
| `/projects` | Filterable portfolio with category browsing |
| `/team` | Team members, skills, social links, stats |
| `/contact` | Contact form, info cards, map, FAQ |

### 🛠️ Tech Stack

```
Next.js 16        App Router · Server & Client Components
React 19          Latest concurrent features
TypeScript 5      Strict typing across data, i18n & UI
Tailwind CSS v4   @theme inline · CSS variables · utilities
Framer Motion     Page animations & interactive UI
Lucide React      Consistent icon system
```

### 🏗️ Project Structure

```
src/
├── app/                    # App Router pages & global styles
├── components/             # home · about · services · projects · team · contact · layout
├── data/                   # Structural data (ids, icons, hrefs)
├── types/                  # Shared TypeScript interfaces
├── i18n/                   # dictionaries · config · translate
├── providers/              # LocaleProvider
└── hooks/                  # useTranslation
```

### 🌍 Internationalization

```tsx
const { t, dictionary, locale, toggleLocale, isRTL } = useTranslation();

t('nav.home');
t('projects.items.neura-platform.title');
dictionary.services.items.webDevelopment.features.map(...);
```

- **Locales:** `en` (LTR) · `ar` (RTL)
- **Persistence:** `localStorage`
- **Pattern:** Structural data in `src/data/` + translated strings in dictionaries

### 🎨 Design System

| Token | Usage |
|-------|-------|
| `--primary-*` | Royal Blue → Deep Navy scale |
| `--secondary-*` | Electric Purple → Violet scale |
| `--accent` | Bright Cyan highlights |
| `--background` / `--foreground` | Semantic surfaces |
| `--gradient-hero` | Brand gradient (cyan → blue → purple) |

**Utilities:** `.gradient-text` · `.gradient-bg` · `.glass` · `.card-glow` · `.hover-lift` · `.section-padding` · `.container-custom`

### 🚀 Getting Started

```bash
git clone https://github.com/your-username/version-x.git
cd version-x/my-app
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — redirects to `/home`.

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

**Requirements:** Node.js 18.18+ · npm 9+

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes
4. Push and open a Pull Request

### 📄 License

Private and proprietary to **Version X**. All rights reserved.

---

<a id="العربية"></a>

<div dir="rtl" align="right">

## 🇸🇦 العربية

### 📋 نظرة عامة

**Version X** موقع شركات متكامل لاستوديو ابتكار رقمي متخصص في بناء مواقع عالية الأداء، تطبيقات الجوال، أنظمة البرمجيات المؤسسية، وحلول مدعومة بالذكاء الاصطناعي.

يُظهر المشروع **بنية نظيفة**، **ترجمة آمنة النوع (Type-safe)**، وتجربة مستخدم احترافية مستوحاة من أفضل مواقع SaaS — مع حركات سلسة، وضع داكن، ودعم كامل لـ RTL و LTR.

### ✨ الميزات الرئيسية

| الميزة | الوصف |
|--------|--------|
| 🌐 **ثنائي اللغة (عربي / إنجليزي)** | قواميس كاملة مع تبديل فوري للغة من النافبار |
| ↔️ **جاهز لـ RTL / LTR** | تحديث تلقائي لـ `dir` و `lang` عبر `LocaleProvider` |
| 🎨 **نظام تصميم** | متغيرات CSS، تدرجات، زجاجية (Glassmorphism)، ورموز دلالية |
| 🌙 **الوضع الداكن** | يتبع إعدادات النظام مع حفظ التفضيل في `localStorage` |
| 🎬 **الحركات** | Framer Motion — ظهور عند التمرير، عدادات، قائمة جوال |
| 📱 **متجاوب** | تصميم Mobile-first مع نافبار تكيفي |
| 🔍 **جاهز لـ SEO** | `metadata` لكل صفحة عبر App Router |
| ⚡ **الأداء** | Next.js 16 · `next/image` · توليد ثابت |

### 🗂️ الصفحات

| المسار | الوصف |
|--------|--------|
| `/home` | قسم البطل، نظرة على الخدمات، إحصائيات، دعوة للإجراء |
| `/about` | قصتنا، الرؤية والرسالة، القيم، معاينة الفريق |
| `/services` | شبكة الخدمات، آلية العمل، التقنيات، لماذا نحن |
| `/projects` | معرض أعمال قابل للتصفية حسب الفئة |
| `/team` | أعضاء الفريق، المهارات، روابط التواصل، إحصائيات |
| `/contact` | نموذج تواصل، بطاقات معلومات، خريطة، أسئلة شائعة |

### 🛠️ التقنيات المستخدمة

```
Next.js 16        App Router · مكوّنات Server و Client
React 19          أحدث ميزات React
TypeScript 5      أنواع صارمة للبيانات والترجمة والواجهة
Tailwind CSS v4   @theme inline · متغيرات CSS · فئات مساعدة
Framer Motion     حركات الصفحات والتفاعلات
Lucide React      نظام أيقونات موحّد
```

### 🏗️ هيكل المشروع

```
src/
├── app/                    # صفحات App Router والأنماط العامة
├── components/             # home · about · services · projects · team · contact · layout
├── data/                   # بيانات هيكلية (معرّفات، أيقونات، روابط)
├── types/                  # واجهات TypeScript المشتركة
├── i18n/                   # قواميس · إعدادات · مترجم
├── providers/              # LocaleProvider
└── hooks/                  # useTranslation
```

### 🌍 نظام الترجمة (i18n)

```tsx
const { t, dictionary, locale, toggleLocale, isRTL } = useTranslation();

t('nav.home');
t('projects.items.neura-platform.title');
dictionary.services.items.webDevelopment.features.map(...);
```

- **اللغات:** `en` (من اليسار لليمين) · `ar` (من اليمين لليسار)
- **الحفظ:** `localStorage`
- **النمط:** بيانات هيكلية في `src/data/` + نصوص مترجمة في القواميس

### 🎨 نظام التصميم

| الرمز | الاستخدام |
|-------|-----------|
| `--primary-*` | تدرج الأزرق الملكي → الكحلي الداكن |
| `--secondary-*` | تدرج البنفسجي الكهربائي → البنفسجي |
| `--accent` | لمسات السماوي الفاتح |
| `--background` / `--foreground` | الأسطح الدلالية |
| `--gradient-hero` | تدرج العلامة (سماوي → أزرق → بنفسجي) |

**فئات مساعدة:** `.gradient-text` · `.gradient-bg` · `.glass` · `.card-glow` · `.hover-lift` · `.section-padding` · `.container-custom`

### 🚀 البدء

```bash
git clone https://github.com/your-username/version-x.git
cd version-x/my-app
npm install
npm run dev
```

افتح **[http://localhost:3000](http://localhost:3000)** — يُحوّل تلقائياً إلى `/home`.

```bash
npm run build    # بناء الإنتاج
npm run start    # تشغيل خادم الإنتاج
npm run lint     # فحص ESLint
```

**المتطلبات:** Node.js 18.18+ · npm 9+

### 📸 لقطات الشاشة

> أضف لقطات لصفحات الرئيسية، الخدمات، المشاريع، والتواصل هنا.

```
public/
├── photo_5846002750095822271_y.jpg   # شعار العلامة
├── projects/                          # صور المشاريع
└── team/                              # صور الفريق
```

### 🤝 المساهمة

1. انسخ المستودع (Fork)
2. أنشئ فرعاً للميزة (`git checkout -b feature/amazing-feature`)
3. أضف التعديلات واعمل Commit
4. ادفع الفرع وافتح Pull Request

### 📄 الترخيص

مشروع خاص ومملوك لـ **Version X**. جميع الحقوق محفوظة.

</div>

---

<div align="center">

**Built with ❤️ by Version X** · **صُنع بـ ❤️ بواسطة Version X**

*Apps · Websites · Systems · AI Solutions*

*تطبيقات · مواقع · أنظمة · حلول ذكاء اصطناعي*

</div>
