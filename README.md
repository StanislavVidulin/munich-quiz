# 🧠 QuizTime

**QuizTime** is an interactive quiz web application built with **React**, **TypeScript**, and **Vite**.  
Users can take quizzes with animated transitions, track progress, switch languages (EN/DE), and view detailed results.

---

## ⚙️ Tech Stack

- 🚀 **Vite + ⚛️ React + TypeScript** — fast, modern development setup  
- 💫 **Framer Motion** — for animations and transitions  
- 🛣️ **React Router** — for routing between pages  
- 🌐 **i18next (React i18next)** — multilingual support (English / German)  
- 🎨 **CSS Modules (`*.module.css`)** — scoped component styling  
- 📦 **Material UI (MUI)** — for select UI elements (e.g., progress bar text)  
- ⚡ **React Hooks** — managing state and interactivity (`useState`, `useRef`, etc.)

---

## 🔍 Main Features

### 🧩 Quiz System
- Sequential display of questions with answer options  
- Score tracking and detailed result display  
- Animated progress bar and smooth transitions between questions  

### 📊 Progress Tracking
- Animated **progress bar** built with Framer Motion  
- Displays the current question number and total count  

### 🌐 Multilingual Interface
- English 🇬🇧 and German 🇩🇪 language support  
- Language switcher with flags in the header  
- All text content is localized with i18next  

### 🎨 Animations
- Smooth transitions for text, cards, and layout elements  
- Motion effects for quiz results and progress updates  

### 🧱 Components
- `Header` — navigation bar with language switcher  
- `Button` — reusable link button component  
- `HomeContent` — welcome section with intro text and quiz start button  
- `AboutContent` — information about the app with animations  
- `QuizCard` — main quiz logic and question display  
- `ResultCard` — displays final score and correct/incorrect answers  
- `ProgressBar` — animated progress indicator  
- `AnimatedLayout` — page-level motion wrapper  

---

## ✅ Code Principles & Best Practices

- 💡 **DRY** — reusable logic and components  
- 📱 **Responsive Design** — works on all screen sizes  
- 🧩 **SOLID** — modular and maintainable component structure  
- 📂 **Separation of Concerns** — each module has a clear purpose  
- 🚀 **YAGNI** — no unnecessary features or code  

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── data/             # Quiz question data
├── i18n/             # Localization setup and translation JSON files
├── pages/            # Page components (Home, About, Quiz)
├── styles/           # Shared animation and style TS files 
├── main.tsx          # Application entry point
└── index.css         # Global styles
public/
├── images/           # Flags and quiz images

---

## 🌍 Deployment
Deployed on Vercel and accessible at https://munich-quiz.vercel.app/