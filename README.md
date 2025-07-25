# 🎮 FlirtOrFib – A Game-Based Social App

**FlirtOrFib** is a React-based social mini-game where users play "Two Truths and a Lie"-style rounds to spark conversations, build trust, and connect in a fun and interactive way. The app is built for experimenting with matchmaking through games instead of traditional swiping.

---

## 🚀 Features

- 🎭 **Flirt or Fib Game** – Guess which statement is a lie!
- 💬 Match with people based on how well they know you
- 🧠 Engaging icebreakers for dating or social interaction
- 🔄 Real-time question cycling
- 🎨 Beautiful gradient background and responsive UI
- 🧩 Modular React components

---

## 📸 Screenshots

| Game Room UI | Game Screen |
|--------------|-------------|
| ![Game Room](./screenshots/gameroom.png) | ![Flirt or Fib](./screenshots/flirtorfib.png) |

---

## ⚙️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Build Tool**: Vite
- **State Management**: useState, useContext
- **Routing**: React Router DOM
- **Authentication (Optional)**: Firebase

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/flirtorfib.git
cd flirtorfib
npm install
npm run dev

Folder Structure :


love-games/
├── node_modules/               # Installed packages
├── public/
│   ├── res/                    # Public images like icons, logos
│   └── favicon.ico            # App icon
├── src/
│   ├── assets/                # Static assets like SVGs, styles
│   │   ├── react.svg
│   │   └── styles.css         # Main app CSS
│   ├── components/            # Modular UI components
│   │   ├── CategoryScreen.jsx
│   │   ├── Footer.jsx
│   │   └── StatementScreen.jsx
│   ├── App.jsx                # Root app logic
│   ├── main.jsx               # React DOM renderer
│   ├── nhie.json              # Data file (Never Have I Ever statements)
│   ├── script.js              # Game or logic-related JS (optional)
│   └── style.css              # Additional or global CSS
├── index.html                 # Root HTML file
├── package.json               # Project metadata & dependencies
├── vite.config.js             # Vite build configuration
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint rules (if used)
└── README.md                  # Project description

