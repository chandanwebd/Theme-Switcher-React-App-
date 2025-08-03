
# Bzayna Themed React App

A responsive, multi-theme React + TypeScript application that demonstrates a modern front-end architecture with theme persistence, context-based state management, API integration, and subtle UI animations.

## 🌟 Features

- 🌞 **Three Unique Themes**:
  - **Theme 1 (Default)**: Minimalist light layout with sans-serif fonts.
  - **Theme 2**: Dark mode with sidebar layout and bold serif fonts.
  - **Theme 3**: Colorful grid-based layout with playful Google Fonts.
- 🌍 **Multi-page Routing** (Home, About, Contact) with consistent theming.
- 🧠 **Theme Persistence** using `localStorage`.
- 🧩 **Theme Management** via React Context API.
- 📱 **Responsive Design** across mobile, tablet, and desktop.
- ⚡ **Live Product Data** from `https://fakestoreapi.com/products`.
- 🎨 **Styled using Tailwind CSS** for utility-first development.
- 🌀 **Animated Theme Transitions**.
- 🔐 **Secure & Compatible** with all modern browsers/devices.

---

## 📂 Folder Structure

```bash
src/
├── components/        # Shared components
├── pages/             # Home, About, Contact
├── themes/            # Theme-specific classes and logic
├── assets/            # Images, fonts
├── api/               # External API services
├── router/            # React Router config
├── theme/             # ThemeContext (Context API)
├── styles/            # Tailwind and custom styles
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bzayna-themed-app.git
cd bzayna-themed-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the App in Dev Mode

```bash
npm run dev
# or
yarn dev
```

App should now be live on: `http://localhost:5173`

---

## 🛠 Build for Production

```bash
npm run build
npm run preview
```

---

## 🧪 Tech Stack

- ⚛️ React + TypeScript
- 📦 Vite for fast builds
- 🎨 Tailwind CSS
- 🔁 React Router
- ☁️ Fetch API (`fakestoreapi.com`)
- 💡 Context API
- 🔒 Best practices for secure frontend architecture

---

## ⚙️ Configuration & Customization

### Add New Themes
- Extend the `ThemeContext.tsx` with a new `ThemeName`.
- Create corresponding utility classes and structure in `themes/`.

### Change Fonts
- Fonts are loaded dynamically via Google Fonts.
- Update `<head>` in `index.html` and corresponding `tailwind.config.ts`.

### API Integration
- Modify or add more services inside `src/api/`.

---

## 👨‍💻 Authors & Contact

- Developed by: [Your Name]
- Contact: [hr@hipster-inc.com](mailto:hr@hipster-inc.com)

---

## 📜 License

This project is licensed under the MIT License. Feel free to use and modify.

---

## 🧭 Live Demo (optional)

[https://www.bzayna.com/](https://www.bzayna.com/)
