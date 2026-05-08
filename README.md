# InterviewPro.AI

InterviewPro.AI is a full-stack MERN interview preparation platform built with React, Node.js, Express, MongoDB, and AI-powered services. It enables users to:

- Sign in with Google and keep session state with secure cookies
- Upload a resume and extract structured resume data using OCR + AI
- Generate realistic, role-based interview questions automatically
- Submit answers and receive feedback with AI-scored performance metrics
- Track interview history, review detailed reports, and purchase credits via Razorpay

---

## Tech Stack

- Frontend: React 19, Vite, Tailwind CSS, Redux Toolkit, Firebase Google Auth
- Backend: Node.js, Express 5, MongoDB (Mongoose), JWT auth, Razorpay payments
- AI: OpenRouter / `openai/gpt-4o-mini`
- File processing: `pdfjs-dist` for PDF resume parsing
- Deployment-ready: separate `Client` and `Server` apps for independent deployment

---

## Project Structure

- `Client/` — React frontend
  - `src/App.jsx` — main SPA router + user profile fetch
  - `src/pages/` — auth, home, interview flow, pricing, history, reports
  - `src/components/` — interview setup, timer, report flow
  - `src/utils/firebase.js` — Firebase Google provider setup
- `Server/` — Express API server
  - `routes/` — auth, user, interview, payment endpoints
  - `controllers/` — business logic for AI interview flow and payments
  - `models/` — MongoDB schemas for users, interviews, and payments
  - `services/` — OpenRouter AI client and Razorpay client
  - `middlewares/` — JWT auth and resume upload handling

---

## Key Features

- Google authentication with JWT stored in a cookie
- Resume upload and extraction with AI-powered parsing
- Adaptive interview question generation with difficulty progression
- Answer submission and AI scoring for confidence, communication, correctness
- Interview final score and question-wise feedback
- Interview history and detailed report pages
- Razorpay order creation and payment verification
- Credits-based usage model with top-up plans

---

## Local Development

### Prerequisites

- Node.js 20+ / npm
- MongoDB database or MongoDB Atlas cluster
- OpenRouter API key
- Razorpay API keys
- Firebase project API key

### Backend setup

```bash
cd Server
npm install
```

Create a `.env` file in `Server/` with:

```env
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the backend:

```bash
npm run dev
```

### Frontend setup

```bash
cd Client
npm install
```

Create a `.env` file in `Client/` with:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

> Note: `Client/src/App.jsx` currently sets `ServerUrl` to the deployed backend URL. For local development, update `ServerUrl` to `http://localhost:8000` or your backend URL.

Start the frontend:

```bash
npm run dev
```

Open the app at `http://localhost:5173`.

---

## Environment Variables

### Server

- `MONGO_DB_URI` — MongoDB connection string
- `JWT_SECRET` — secret for signing JWT tokens
- `OPENROUTER_API_KEY` — API key for OpenRouter AI requests
- `RAZORPAY_KEY_ID` — Razorpay public key for order creation
- `RAZORPAY_KEY_SECRET` — Razorpay secret key for signature verification

### Client

- `VITE_FIREBASE_APIKEY` — Firebase API key for Google sign-in
- `VITE_RAZORPAY_KEY_ID` — Razorpay key ID for checkout initialization

---

## API Endpoints

### Auth
- `POST /api/auth/google` — sign in or register with Google
- `GET /api/auth/logout` — clear session cookie

### User
- `GET /api/user/profile` — get current authenticated user

### Interview
- `POST /api/interview/resume` — upload resume PDF and extract structured data
- `POST /api/interview/generate-questions` — generate AI interview questions
- `POST /api/interview/submit-answer` — submit an answer for AI evaluation
- `POST /api/interview/finish` — finalize interview scores and compute totals
- `GET /api/interview/get-interview` — fetch interview history
- `GET /api/interview/report/:id` — fetch a completed interview report

### Payment
- `POST /api/payment/order` — create a Razorpay order
- `POST /api/payment/verify` — verify Razorpay payment signature and credit user

---

## Deployment Notes

- Configure CORS origin in `Server/index.js` for your frontend domain
- Enable `secure: true` for cookies in production and use HTTPS
- Deploy the backend and frontend independently for scalability
- Ensure `Client/src/App.jsx` uses the correct production backend URL
- Add a proper `NODE_ENV` handling path if using environment-specific configuration

---

## Production Readiness Checklist

- [ ] Use HTTPS and set `secure: true` for cookies
- [ ] Replace hardcoded `ServerUrl` in the frontend with runtime configuration
- [ ] Harden file uploads and validate allowed resume types explicitly
- [ ] Add request rate limiting and logging for security
- [ ] Add unit and integration tests for backend routes
- [ ] Add production build script and deployment automation for client and server

---

## Recommended Improvements

- Migrate `ServerUrl` to a runtime environment variable in `Client`
- Add stricter PDF upload validation and cleanup checks
- Add session expiration handling on the frontend
- Add retry/error boundaries around AI and payment calls

---

## License

This repository does not specify a license. Add a `LICENSE` file if needed.
