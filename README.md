CyberLearn
CyberLearn is an interactive, gamified cybersecurity learning platform designed with a cyberpunk aesthetic, featuring neon-blue (#00D4FF) and neon-pink (#FF2E63) colors. Built with HTML, Tailwind CSS, and JavaScript, it offers hands-on challenges, real-world attack simulations, and career planning tools for cybersecurity enthusiasts.
Features

Threat Simulator (index.html): Displays mock real-time cybersecurity threats (e.g., phishing, ransomware) with a refresh button to update data.
Drag-and-Drop Challenge (index.html): Users drag a puzzle element to a drop zone to unlock registration, simulating interactive learning.
AI Onboarding Quiz (index.html): Users select a role (hacker/defender) to personalize their learning path.
Neural Galaxy LMS (lms.html): Tracks progress in courses (e.g., Cryptography, Networking) with a voice command feature and VR lab preview.
Cyber Campaign CTF (ctf.html): Offers capture-the-flag challenges, including AR scans (webcam-based), team arena scores, and a hacking sandbox.
Gamified Learning (gamified.html): Users join guilds, earn points, interact with a 3D mini-game orb, nurture a virtual pet, and participate in AR treasure hunts.
Quantum Constellation (progress.html): Visualizes learning progress with a skill heatmap, career predictor, and wearable sync notifications.
Community Hub (community.html): Features a forum for posting messages and mock live coding/resources sections.
AI Career Coach (career.html): Allows users to build a resume by adding skills and receive job suggestions based on progress.
Cyberpunk Aesthetic: Uses a 12-column Tailwind grid (max-w-6xl mx-auto), Orbitron/Inter fonts, and neon gradients.
Accessibility: High-contrast mode for better visibility.
Local Storage: Persists user progress, roles, and forum posts.

Screenshots
Below are screenshots of the CyberLearn platform:
Threat simulator, drag-and-drop challenge, and AI quiz on the home page.
Course progress tracking and VR lab preview.
Capture-the-flag challenges with AR scan and team arena.
Guilds, 3D orb mini-game, and virtual pet.
Skill heatmap and career predictor.
Forum and live coding sections.
Resume builder and job suggestions.
File Structure
CTF-2025/
├── images/                  # Screenshots of the platform
│   ├── index.png
│   ├── lms.png
│   ├── ctf.png
│   ├── gamified.png
│   ├── progress.png
│   ├── community.png
│   ├── career.png
├── public/                  # Static assets
│   ├── index.html           # Home page
│   ├── lms.html             # Learning Management System
│   ├── ctf.html             # Capture The Flag portal
│   ├── gamified.html        # Gamified learning
│   ├── progress.html        # Progress tracking
│   ├── community.html       # Community hub
│   ├── career.html          # Career planning
│   ├── style.css            # Compiled Tailwind CSS
│   ├── script.js            # JavaScript for interactivity
├── src/
│   ├── style.css            # Source CSS for Tailwind
├── package.json             # Node.js dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation

Prerequisites

Node.js (v16 or higher): Install from https://nodejs.org.
Git: Install from https://git-scm.com/download/win.
A modern browser (e.g., Chrome, Firefox).

Setup Instructions

Clone the Repository:
git clone https://github.com/your-username/CTF-2025.git
cd CTF-2025


Install Dependencies:
npm install

This installs Tailwind CSS, PostCSS, Autoprefixer, and live-server.

Build CSS:Compile src/style.css to public/style.css:
npm run build


Run Locally:Start a local server:
npm start

Open http://127.0.0.1:8080 in your browser.

Development Mode:Watch for CSS changes:
npm run watch


Technologies Used

HTML5: Structure for all pages.
Tailwind CSS: Styling with a 12-column grid and custom neon colors.
JavaScript: Interactivity (drag-and-drop, WebSocket mocks, local storage).
Node.js: Build tools for Tailwind CSS.
Fonts: Orbitron (headings), Inter (body) via Google Fonts.
Web APIs: WebRTC for AR scans, SpeechRecognition for voice commands.

Contributing

Fork the repository.
Create a branch:git checkout -b feature/your-feature


Commit changes:git commit -m "Add your feature"


Push:git push origin feature/your-feature


Open a pull request on GitHub.

License
MIT License. See LICENSE for details.
© 2025 CyberLearn. All rights reserved.
