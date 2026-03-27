# Dev Chetal Platform Portfolio

Design-forward portfolio platform built with **React + TypeScript + Vite**.

## Implemented platform architecture

### Public routes
- `/` — premium landing + featured work + contact capture.
- `/projects` — project index (featured + additional).
- `/projects/:slug` — project case-study detail pages.
- `/experience` — experience listing.
- `/experience/:slug` — professional profile detail pages.
- `/resume` — embedded resume viewer with fallback actions.

### Internal route
- `/admin` — internal dashboard for managing portfolio content.

## Admin capabilities
- Add / edit / delete projects.
- Add / edit / delete experiences.
- Reorder records (up/down controls).
- Toggle featured state.
- Manage resume URL + embed URL.
- Manage contact settings (`targetEmail`, store toggle, notification toggle).
- Manage hero/site settings.
- View high-level dashboard stats.

## Data model
Content is currently stored in localStorage via `src/lib/portfolio-content.ts` with seed data matching requested projects and experiences.

Model groups:
- `projects`
- `experiences`
- `resume`
- `contact`
- `site`
- `submissions`

## Environment variables
```bash
VITE_ADMIN_PASSCODE=your-strong-passcode
```

## Contact architecture
Current behavior:
- Public form stores submissions when `contact.storeSubmissions = true`.
- Data goes to `submissions` in the content store.
- `sendNotifications` is exposed as config for future integration.

Suggested production contract:
- `POST /api/contact`
- Body: `{ name, email, message }`
- Server writes to DB + conditionally sends email notification based on settings.

## Supabase migration path (recommended)
The current store is intentionally shaped for clean migration.

Suggested tables:
- `projects`
- `experiences`
- `resume_settings`
- `contact_settings`
- `site_settings`
- `contact_submissions`
- `admin_users`

Add RLS policies:
- Public read on portfolio content.
- Authenticated admin write/update/delete on content tables.
- Admin-only read on `contact_submissions`.

## Run locally
```bash
npm install
npm run dev
```

## Build check
```bash
npm run build
```
