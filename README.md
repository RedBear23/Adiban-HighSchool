# Adiban High School

وب‌سایت دبیرستان ادیبان با هدف معرفی مدرسه، مدیر، معلمان، دانش‌آموزان برتر و سایر بخش‌های مدرسه.

این پروژه با **Next.js** و **TypeScript** توسعه داده شده و رابط کاربری آن با **Tailwind CSS** و در بخش‌هایی با **shadcn/ui** ساخته شده است.

---

## 🛠 تکنولوژی‌های استفاده‌شده

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/)
- Git

---

## 📋 پیش‌نیازها

برای اجرای پروژه، موارد زیر باید روی سیستم شما نصب باشند:

- **Node.js** نسخه `18` یا بالاتر
- **npm** یا یکی از Package Managerهای سازگار با Node.js
- **Git**

برای بررسی نصب بودن Node.js و npm:

```bash
node -v
npm -v
```

برای بررسی Git:

```bash
git --version
```

---

## 🚀 نصب و اجرای پروژه

### 1. Clone کردن Repository

ابتدا Repository را Clone کنید:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

سپس وارد پوشه پروژه شوید:

```bash
cd Adiban_HighSchool
```

> نام پوشه را در صورت متفاوت بودن با نام Repository خود تغییر دهید.

---

### 2. نصب وابستگی‌ها

در پوشه اصلی پروژه دستور زیر را اجرا کنید:

```bash
npm install
```

این دستور تمام Packageهای مورد نیاز پروژه را طبق `package.json` نصب می‌کند.

---

### 3. اجرای پروژه در محیط Development

برای اجرای پروژه:

```bash
npm run dev
```

پس از اجرای موفقیت‌آمیز، پروژه معمولاً روی آدرس زیر در دسترس خواهد بود:

```text
http://localhost:3000
```

آدرس را در مرورگر باز کنید:

```text
http://localhost:3000
```

---

## 🏗 ساخت نسخه Production

برای ساخت نسخه Production:

```bash
npm run build
```

پس از Build موفق، برای اجرای نسخه Production:

```bash
npm start
```

سپس پروژه را در آدرس زیر باز کنید:

```text
http://localhost:3000
```

---

## 📁 ساختار کلی پروژه

ساختار پروژه به صورت کلی به شکل زیر است:

```text
Adiban_HighSchool/
│
├── app/
│   ├── gallery/
│   ├── teachers/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── navbar/
│   ├── hero/
│   ├── statistics/
│   ├── principal_section/
│   ├── teachers_section/
│   ├── students_section/
│   ├── gallery/
│   └── footer/
│
├── public/
│   └── images/
│
├── styles/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

> ساختار بالا ممکن است با توجه به نسخه نهایی پروژه تغییر کند.

---

## 🎨 ویژگی‌های پروژه

بخش‌های اصلی وب‌سایت شامل موارد زیر هستند:

- صفحه اصلی مدرسه
- Navbar و Navigation
- Hero Section
- معرفی مدرسه
- آمار مدرسه
- معرفی مدیر
- معرفی معلمان
- دانش‌آموزان برتر
- گالری تصاویر مدرسه
- Footer
- طراحی Responsive برای اندازه‌های مختلف صفحه

---

## 📱 Responsive Design

رابط کاربری پروژه برای نمایش در اندازه‌های مختلف صفحه طراحی شده است و از:

- Desktop
- Tablet
- Mobile

پشتیبانی می‌کند.

---

## 🧑‍💻 توسعه‌دهنده

Developed by **RedBear**

---

## 📄 License

این پروژه برای استفاده آموزشی و پروژه مدرسه‌ای توسعه داده شده است.
