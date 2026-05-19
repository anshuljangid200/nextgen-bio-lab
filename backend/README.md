# Micrylis Backend

Login & register API for the Micrylis Biotech website.

## Folder structure

```
backend/
├── server.js          # Express app entry
├── config/db.js       # MongoDB connection
├── models/User.js     # User schema
├── routes/auth.js     # POST /api/auth/login, /api/auth/signup
└── utils/             # Email + auth helpers
```

## Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env when you have keys
npm run dev
```

Server: `http://localhost:5000`

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/auth/login` | Login (email, mobile, or username) |
| POST | `/api/auth/signup` | Register new user |

## Environment variables

See `.env.example`. **MongoDB** (`MONGODB_URI`) — add later when Micrylis database is ready.

## With frontend

From project root:

```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
npm run dev
```

Vite proxies `/api/auth` → `localhost:5000`.

## Production

Deploy this folder (Railway, Render, etc.) and set frontend env:

`VITE_API_URL=https://your-backend-url.com`
