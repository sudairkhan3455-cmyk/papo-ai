# Papo AI

A mobile-first React + TypeScript question-answer app with an original animated 3D-style cartoon character.

## Run locally

1. Install Node.js 18+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Add your Gemini API key to `VITE_GEMINI_API_KEY`.
5. Run `npm run dev`.

## Build

`npm run build`

## Gemini security note

This starter calls Gemini directly from the browser because it is easy to run in Google AI Studio-style environments. For a public production deployment, move the Gemini call to a server/serverless endpoint and keep the API key in a server-side secret.

## Features

- Gemini-powered answers
- Text input + Enter to send
- Browser speech recognition when available
- Text-to-speech playback
- Conversation history and Clear Chat
- Suggested questions
- Loading/thinking state
- Friendly error handling
- Responsive mobile/desktop UI
- Original CSS-built Papo character; no copyrighted character assets

## Android
This project is prepared for Capacitor Android packaging. See `APK-SETUP.md`.
