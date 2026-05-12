# 🚀 My Expo App — Vibe Coding Workshop

## What is this?

This is a starter project for a student workshop where you learn to build mobile apps using AI. Clone this repo, run it on your phone with Expo Go, then replace the filler screens with your own AI-generated code!

---

## Before You Start

Make sure you have the following installed:

- **Node.js** — [nodejs.org](https://nodejs.org)
- **Expo Go** app on your phone — [expo.dev/go](https://expo.dev/go)
- **Git** — [git-scm.com](https://git-scm.com)

---

## Setup (3 Steps)

```bash
git clone [REPO_URL]
cd my-expo-app
npm install
npx expo start --tunnel
```

Then scan the QR code with Expo Go:
- **iOS**: Use the built-in Camera app
- **Android**: Open the Expo Go app and tap "Scan QR Code"

---

## How to Vibe Code Your Screens

1. **Open a screen file** — `app/screen2.tsx`, `app/screen3.tsx`, or `app/screen4.tsx`
2. **Read the comment at the top** — there's a ready-to-use Claude prompt waiting for you
3. **Paste the prompt into [claude.ai](https://claude.ai)** — fill in your own idea where it says `[DESCRIBE YOUR IDEA HERE 🎨]`
4. **Copy Claude's response** back into the file, replacing everything below the comment block
5. **Save the file** — it hot-reloads instantly on your phone! 🎉

---

## Project Structure

```
my-expo-app/
├── app/
│   ├── _layout.tsx    ← Tab navigation setup (rename your tabs here!)
│   ├── index.tsx      ← Home screen (pre-built, don't touch)
│   ├── screen2.tsx    ← Your screen — replace with AI-generated code
│   ├── screen3.tsx    ← Your screen — replace with AI-generated code
│   └── screen4.tsx    ← Your screen — replace with AI-generated code
├── assets/images/     ← Drop any images here
├── components/        ← Reusable components you create
├── constants/
│   └── Colors.ts      ← Dark neon color palette
├── app.json           ← Expo app config
└── package.json       ← Dependencies
```

---

## Tips

- 💾 **Save the file and it hot-reloads instantly!** No need to restart the app.
- 🐛 **Stuck? Ask Claude to fix the error!** Copy the error message and paste it into Claude with "fix this error:".
- 🏷️ **Rename the tabs** by editing the `title` and `name` values in `app/_layout.tsx`.
- 🎨 **The color palette** lives in `constants/Colors.ts` — tweak it to match your vibe.

---

## Made With

- **React Native** — cross-platform mobile framework
- **Expo** — the easiest way to build and run React Native apps
- **Claude AI** ✨ — your AI coding co-pilot
