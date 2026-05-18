# 🎯 Professional Countdown Timer

A stunning, feature-rich countdown timer built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Perfect for tracking important events, deadlines, and special occasions with style.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Beautiful UI/UX**
- Modern glassmorphism design with backdrop blur effects
- Smooth page transitions and micro-interactions
- Gradient backgrounds with animated color shifts
- Responsive design that works on all devices
- Professional typography and spacing

### 🌓 **Dark Mode Support**
- Automatic theme detection based on system preferences
- Manual toggle with smooth transitions
- Persistent theme selection using localStorage
- Optimized colors for both light and dark themes

### ⏱️ **Advanced Timer Features**
- Real-time countdown with days, hours, minutes, and seconds
- Circular progress indicator showing completion percentage
- Quick preset buttons (5 min, 30 min, 1 hour, 1 day, 1 week)
- Custom date and time picker
- Pause, resume, and reset functionality
- Automatic validation for future dates

### 🎉 **Celebration Effects**
- Confetti animation when countdown completes
- Optional sound notifications
- Animated completion screen
- Smooth state transitions

### 🎯 **User Experience**
- Multi-step guided interface
- Floating animations and hover effects
- Glass-style buttons with active states
- Icon-enhanced controls (Lucide React icons)
- Accessibility-friendly design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd countdowntimer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
countdowntimer/
├── app/
│   ├── components/
│   │   ├── CircularProgress.tsx    # Progress ring component
│   │   ├── Confetti.tsx            # Celebration animation
│   │   ├── CountdownDisplay.tsx    # Main timer display
│   │   ├── CountdownInputPage.tsx  # Date/time input page
│   │   ├── Footer.tsx              # Footer with social links
│   │   ├── Header.tsx              # Header with theme toggle
│   │   ├── PresetButtons.tsx       # Quick time presets
│   │   ├── StartPage.tsx           # Landing page
│   │   ├── TimerCard.tsx           # Individual time unit card
│   │   └── TimerControls.tsx       # Play/pause/reset controls
│   ├── hooks/
│   │   └── useTimer.ts             # Custom timer logic hook
│   ├── globals.css                 # Global styles & animations
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main page component
├── public/                         # Static assets
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Animations
Modify animations in `app/globals.css`:
```css
@keyframes your-animation {
  /* Your keyframes */
}
```

### Presets
Update preset times in `app/components/PresetButtons.tsx`:
```typescript
const presets = [
  { label: 'Your Label', minutes: 123, icon: YourIcon },
  // Add more presets
];
```

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Web Audio API** - Sound notifications

## 📱 Features Breakdown

### Timer Logic (`useTimer` hook)
- Calculates time difference in real-time
- Tracks total duration and elapsed time
- Provides progress percentage for visual indicators
- Handles pause/resume state management
- Automatic cleanup on unmount

### Circular Progress
- SVG-based progress ring
- Smooth transitions with CSS
- Percentage display in center
- Responsive sizing

### Sound Notifications
- Web Audio API for cross-browser compatibility
- Toggle on/off functionality
- Plays only once when timer completes
- No external audio files required

### Confetti Effect
- 50 animated particles
- Random colors and positions
- Automatic cleanup after animation
- Performance-optimized

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**KOMAL**

Built with ❤️ using Next.js and React

---

## 🚀 Future Enhancements

- [ ] Multiple simultaneous timers
- [ ] Timer templates and saved presets
- [ ] Export/share timer links
- [ ] Custom background images
- [ ] More celebration animations
- [ ] Timer history and analytics
- [ ] PWA support for offline use
- [ ] Custom sound uploads

---

**⭐ If you like this project, please give it a star!**
"# countdown-timer-app" 
