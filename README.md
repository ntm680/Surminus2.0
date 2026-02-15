# SurMinus v5.3

**SurMinus** is an advanced cheat client for **Survev.io**, completely rewritten and optimized for performance, stealth, and stability.
This version (v5.3) introduces Flashlight ESP, Bullet Trajectories, and major Launcher stability improvements.

---

## 🌟 Key Features

### 🔦 Visuals (New in v5.3)
- **Flashlight ESP**: Visualizes enemy aim direction and cones.
- **Bullet Trajectory**: Predicts bullet path including wall bounces.
- **Grenade Timer**: Shows explosion countdown and lethal range.

### ⚔️ Advanced Auto Melee
- **Predictive Lock**: Analyzes enemy velocity history to predict movement and land melee hits accurately.
- **IOG Hybrid System**: Evasion, Strafe, and Body Center Targeting.
- **Auto-Fire Integration**: Automatically attacks when a valid melee lock is acquired.

### 🎯 Aimbot "Savannah"
- **Linear Prediction**: Optimized for high-velocity targets and bullet drop.
- **High Velocity Support**: Automatically adjusts prediction for perks like "High Velocity" or "9mm Bonus".
- **Dynamic Smoothing**: Reduces jitter for a more "legit" look while maintaining accuracy.

### 📊 Visuals & HUD
- **Real Ping Display**: Hooks into the game's WebSocket to calculate and display **Real Round Trip Time (RTT)** (displayed as `Lat: XX ms` in green).
- **Armor HUD**: Displays exact Helmet and Vest protection percentages on the local player.
- **Clean ESP**: Optimized ESP lines, tracers, and skeletal rendering for better clarity.

### 🛠️ Stability & Quality of Life
- **Launcher v1.0.3**: Single Instance Lock, Memory Optimization, GPU Fixes.
- **Gun Overclock**: Configurable fire rate enhancements (Dual, Burst, etc.).
- **Infinite Zoom**: Unlocked view distance (with scroll wheel support).
- **Pan Hero**: Fixed logic for auto-blocking bullets with the Pan/Shield.
- **Menu**: Draggable, resizable, and styled with a modern "Glassmorphism" look.

---

## 🚀 Installation

### Option 1: Userscript (Recommended)
1. Install a userscript manager like **Tampermonkey** or **Violentmonkey**.
2. Drag and drop the `SurMinus.user.js` file into your browser extensions tab (or create a new script and paste the content).
3. Navigate to [survev.io](https://survev.io) and play!

### Option 2: Chrome Extension
1. Go to `chrome://extensions`.
2. Enable **Developer Mode** (top right).
3. Click **Load unpacked**.
4. Select the `dist/extension` folder.
5. Navigate to [survev.io](https://survev.io).

---

## ⚠️ Disclaimer
This software is for educational purposes only. Use at your own risk. The developers are not responsible for any bans or account suspensions.
