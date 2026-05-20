# GitHub Profile Explorer

A React + TypeScript application that allows users to search for GitHub profiles and explore their repositories using the GitHub REST API.

## 🚀 Live Demo
[github-profile-three-pink.vercel.app](https://github-profile-three-pink.vercel.app)

## Features

- Search any GitHub user by username
- View profile information including followers, following, and location
- Browse public repositories with fork count, star count, and last updated time
- Click any repository card to open it directly on GitHub
- Error handling for users that don't exist
- Loading state during API calls
- Responsive layout across all screen sizes

## Tech Stack

- React 19
- TypeScript
- Vite
- Axios
- Lucide React (icons)
- Day.js (relative timestamps)
- CSS (component-scoped)

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone the repository
```bash
   git clone [github.com/pochrahul55/github-profile](https://github.com/pochrahul55/github-profile)
   cd github-profile
```

2. Install dependencies
```bash
   npm install
```

3. Start the development server
```bash
   npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## API Reference

This project uses the public GitHub REST API — no API key required.

| Endpoint | Description |
|---|---|
| `GET /users/{username}` | Fetch user profile data |
| `GET /users/{username}/repos` | Fetch user repositories |

Full documentation: [docs.github.com/en/rest](https://docs.github.com/en/rest)

## Project Structure



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
