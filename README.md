# random-generator

Small repo with a frontend (Vite + React + TypeScript) and a backend (Hono). This README explains how to run the project locally and lists required environment variables.

## Quick start

Prerequisites: Node 18+ and npm.

1. Install dependencies for both packages:

  ```bash
  cd front && npm install
  cd ../back && npm install
  ```

1. Run backend and frontend in separate terminals:

  ```bash
  # terminal A (backend)
  cd back
  npm run dev

  # terminal B (frontend)
  cd front
  npm run dev
  ```

1. Open `http://localhost:5173` (frontend). Backend is served on `http://localhost:3000` by default.

## Environment variables

Example files are provided in each package. Minimal vars:

- front/.env.example
  - `VITE_API_URL` — API base URL for the frontend (e.g. `http://localhost:3000`)
- back/.env.example
  - `CORS` — allowed origin for CORS (e.g. `http://localhost:5173` for local dev)

## Scripts

- Front:
  - `npm run dev` — start Vite dev server
  - `npm run build` — build production frontend
  - `npm run lint:check` / `npm run lint:fix` — linting
- Back:
  - `npm run dev` — start backend in watch mode (tsx)
  - `npm run build` — compile TypeScript

## Notes

- The frontend expects client env vars to use the `VITE_` prefix (Vite requirement).
- The backend uses the `CORS` env var to configure allowed origin; a sensible dev default is recommended.
