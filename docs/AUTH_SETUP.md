# Login / Register setup

## Project layout

| Part | Folder | Role |
|------|--------|------|
| **Website UI** | `src/` | Login modal, forms |
| **Backend API** | `backend/` | Express — login, register, database |
| **Contact email** | `api/contact.ts` | Vercel only (Resend) |

Auth logic lives only in **`backend/`** — not in `api/auth/`.

## Run locally

```bash
# Terminal 1 — backend
cd backend
npm install
npm run dev

# Terminal 2 — frontend
npm install
npm run dev
```

## Database (later)

When you have **Micrylis** MongoDB Atlas (not the old website DB), add to `backend/.env`:

```
MONGODB_URI=mongodb+srv://...
```

Also set `RESEND_API_KEY` and `ADMIN_EMAIL` for login/register emails.

## Production

1. Deploy `backend/` to Railway / Render / etc.
2. On Vercel (frontend), set `VITE_API_URL=https://your-backend-url.com`
