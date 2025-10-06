# BSCTUBE - Meme Coin Site

A modern meme coin website built with Vite, React, and TypeScript, featuring a dark theme with handwritten font styling.

## Features

- 🎨 Dark theme with handwritten font styling
- 📱 Responsive design
- 🔍 Search functionality
- 📊 Trending topics sidebar
- 🎯 Social media integration
- 💰 "Buy now" buttons for meme coin

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 19** - UI library
- **TypeScript** - Type safety
- **CSS3** - Styling with custom handwritten fonts

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/     # Reusable components
├── assets/        # Images and static assets
├── App.tsx        # Main application component
├── App.css        # Application-specific styles
├── index.css      # Global styles
└── main.tsx       # Application entry point
```

## Design Features

- **Header**: Logo, search bar, and user actions
- **Left Sidebar**: Navigation, social links, and subscriptions
- **Main Content**: "Coming soon" message
- **Right Sidebar**: Trending topics with video counts
- **Responsive**: Mobile-friendly design

## Customization

The site uses the Kalam font family for the handwritten aesthetic. You can customize colors, fonts, and layout by modifying the CSS variables in `src/index.css`.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.
