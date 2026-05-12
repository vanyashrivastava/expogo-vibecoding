# 🚀 My Expo App — Vibe Coding Workshop

## What is this?
This is a starter Expo Go project for a hands-on student vibe-coding workshop. You’ll run it on your phone, then swap filler screens with AI-generated ideas and watch them update live.

## Before you start
- Node.js installed
- Expo Go app on your phone: https://expo.dev/go
- Git installed

## Setup (3 steps)
```bash
git clone [REPO_URL]
cd my-expo-app
npm install
npx expo start --tunnel
```
Then scan the QR code with Expo Go (iOS: Camera app / Android: Expo Go app).

## How to vibe code your screens
1. Open a screen file (`app/screen2.tsx`, `app/screen3.tsx`, or `app/screen4.tsx`).
2. Read the Claude prompt in the top comment block.
3. Paste that prompt into claude.ai and describe your idea.
4. Copy Claude’s generated code back into the same file.
5. Save and see it update live in Expo Go.

## Project structure
```text
my-expo-app/
├── app/
│   ├── _layout.tsx      # Tab navigation config
│   ├── index.tsx        # Home screen
│   ├── screen2.tsx      # Filler screen + Claude prompt
│   ├── screen3.tsx      # Filler screen + Claude prompt
│   └── screen4.tsx      # Filler screen + Claude prompt
├── assets/images/       # Image assets
├── components/          # Shared components (empty starter)
├── constants/Colors.ts  # Dark neon theme tokens
├── app.json             # Expo app config
├── package.json         # Dependencies + scripts
├── tsconfig.json        # TypeScript config
└── README.md            # Workshop guide
```

## Tips
- Save the file and it hot-reloads instantly.
- If you get an error, paste it into Claude and ask for a fix.
- Rename tab titles in `app/_layout.tsx` to match your app idea.
- Keep your color palette consistent for a polished look.

## Made with
React Native, Expo, Claude AI ✨
