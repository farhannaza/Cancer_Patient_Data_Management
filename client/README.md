# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Environment Setup

Before running the application, you need to set up environment variables:

1. Copy the example environment file:
```sh
cp env.example .env.local
```

2. Fill in your actual values in `.env.local`:
   - **Firebase Configuration**: Get these from your Firebase project settings
   - **Clerk Authentication**: Get these from your Clerk dashboard
   - **Blockchain**: Optional for development (Truffle configuration)

### Required Environment Variables

- `FIREBASE_API_KEY`: Your Firebase API key
- `FIREBASE_AUTH_DOMAIN`: Your Firebase auth domain
- `FIREBASE_DATABASE_URL`: Your Firebase Realtime Database URL
- `FIREBASE_PROJECT_ID`: Your Firebase project ID
- `FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket
- `FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID
- `FIREBASE_APP_ID`: Your Firebase app ID
- `CLERK_SECRET_KEY`: Your Clerk secret key (server-side)
- `CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key (client-side)

### Optional Environment Variables (for development)

- `MNEMONIC`: Your 12-word mnemonic phrase for blockchain deployment
- `PROJECT_ID`: Your Alchemy project ID for Sepolia network

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
# remix-intro-yt-base-1
