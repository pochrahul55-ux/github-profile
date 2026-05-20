# GitHub Profile Explorer

A React + TypeScript application that allows users to search for GitHub profiles and explore their repositories using the GitHub REST API.

## Live Demo
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
   git clone https://github.com/pochrahul55/github-profile.git
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
