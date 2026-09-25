# Papo AI — Android APK Ready

## Requirements
- Node.js 18+
- Android Studio
- Android SDK + Android build tools
- A Gemini API key

## Setup
1. `npm install`
2. Copy `.env.example` to `.env.local`
3. Put your Gemini API key in `VITE_GEMINI_API_KEY`
4. `npm run cap:add:android`
5. `npm run cap:sync`
6. Open Android Studio:
   `npm run cap:open:android`
7. In Android Studio choose a device/emulator and Run.

## Build a debug APK
On macOS/Linux:
`npm run android:debug`

The APK will normally be under:
`android/app/build/outputs/apk/debug/app-debug.apk`

On Windows, use the Gradle wrapper from Android Studio/PowerShell:
`cd android`
`gradlew.bat assembleDebug`

## Important security note
The current browser-side Gemini integration is convenient for AI Studio/local builds, but a public APK should use a server-side proxy/backend so the Gemini API key is not exposed inside the APK. The UI and native packaging are ready for that migration.
