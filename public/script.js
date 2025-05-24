// Mock WebSocket for real-time arena scores
const mockWebSocket = {
  onmessage: null,
  send: () => {},
  addEventListener: (event, callback) => {
    if (event === 'message') mockWebSocket.onmessage = callback;
  }
};
setInterval(() => {
  if (mockWebSocket.onmessage) {
    mockWebSocket.onmessage({ data: JSON.stringify({ scores: Math.floor(Math.random() * 100) }) });
  }
}, 5000);

// Mock API for threat data, recommendations, and CTF challenges
const fetchThreatData = () => ({
  threat: Math.random() > 0.5 ? 'Phishing: +20% in 2025' : 'Ransomware: +15% in 2025'
});
const fetchRecommendation = () => Math.random() > 0.5 ? 'Zero-Trust Security' : 'Cloud Security';
const fetchCTFChallenge = () => Math.random() > 0.5 ? 'XSS Exploit' : 'SQL Injection';

// State Management
let state = {
  role: '',
  progress: { crypto: 0, network: 0 },
  guildPoints: 0,
  highContrast: false,
  petLevel: 1,
  forumPosts: [],
  resume: '',
  jobSuggestion: 'Start with basics'
};
const loadState = () => {
  const saved = localStorage.getItem('cyberlearn-state');
  if (saved) state = JSON.parse(saved);
};
const saveState = () => localStorage.setItem('cyberlearn-state', JSON.stringify(state));
loadState();

// Home Page Functions
function refreshThreats() {
  fetchThreatData().then(data => {
    document.getElementById('threat-data').textContent = data.threat;
  });
}
function updateRole() {
  state.role = document.getElementById('role-select').value;
  document.getElementById('role-display').textContent = `Role: ${state.role || 'None'}`;
  saveState();
}
function handleDrop() {
  alert('Registration unlocked!');
}
function toggleHighContrast() {
  state.highContrast = !state.highContrast;
  document.getElementById('hero').classList.toggle('high-contrast', state.highContrast);
  saveState();
}

// LMS Page Functions
function updateProgress(type) {
  state.progress[type] = Math.min(state.progress[type] + 10, 100);
  document.getElementById(`${type}-progress`).textContent = state.progress[type];
  updateMentorTip();
  updateOfflineStatus();
  updatePetLevel();
  updateNFTStatus();
  updateCareerPredictor();
  updateJobSuggestion();
  saveState();
}
function voiceCommand() {
  if ('webkitSpeechRecognition' in window) {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = event => {
      const command = event.results[0][0].transcript.toLowerCase();
      alert('Opening: ' + command);
    };
    recognition.start();
  } else {
    alert('Voice recognition not supported');
  }
}
function submitCourse() {
  const title = document.getElementById('micro-course').value;
  if (title) alert('Submitted: ' + title);
}
function updateOfflineStatus() {
  const status = state.progress.crypto > 0 || state.progress.network > 0 ? 'Badge Earned!' : 'Complete a course';
  document.getElementById('offline-status').textContent = status;
}

// CTF Page Functions
function startARScan() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      document.getElementById('ar-video').srcObject = stream;
      document.getElementById('ar-video').play();
      setTimeout(() => alert('Clue unlocked!'), 2000);
    })
    .catch(() => alert('Webcam access denied'));
}
function addPoints(points) {
  state.guildPoints += points;
  document.getElementById('arena-score').textContent = state.guildPoints;
  saveState();
}
function runCommand() {
  const command = document.getElementById('sandbox-input').value;
  if (command) alert('Command: ' + command);
}

// Gamified Page Functions
function joinGuild() {
  state.guildPoints += 10;
  document.getElementById('arena-score').textContent = state.guildPoints;
  saveState();
}
function rotateOrb() {
  state.guildPoints += 5;
  document.getElementById('arena-score').textContent = state.guildPoints;
  saveState();
}
function updatePetLevel() {
  state.petLevel = state.progress.crypto > 50 ? 2 : 1;
  document.getElementById('pet-level').textContent = state.petLevel;
  saveState();
}
function updateNFTStatus() {
  const status = state.progress.crypto > 50 ? 'Earned!' : 'Complete Cryptography';
  document.getElementById('nft-status').textContent = status;
}

// Progress Page Functions
function updateMentorTip() {
  const tip = state.progress.crypto > 50 ? 'Great job! Try XSS next.' : 'Keep practicing!';
  document.getElementById('mentor-tip').textContent = tip;
}
function updateCareerPredictor() {
  const predictor = state.progress.crypto > 50 ? 'Ready for SOC Analyst' : 'Keep learning';
  document.getElementById('career-predictor').textContent = predictor;
}
function updateHeatmap() {
  const heatmap = document.getElementById('heatmap');
  heatmap.className = `w-32 h-8 mx-auto rounded-lg ${state.progress.crypto > 50 ? 'bg-green-500' : 'bg-red-500'}`;
}
function updateWearableStatus() {
  const status = state.progress.crypto > 0 ? 'Notifications On' : 'Notifications Off';
  document.getElementById('wearable-status').textContent = status;
}

// Community Page Functions
function postMessage() {
  const message = document.getElementById('forum-input').value;
  if (message) {
    state.forumPosts.push(message);
    document.getElementById('forum-posts').innerHTML = state.forumPosts.map(p => `<p class="text-sm">${p}</p>`).join('');
    document.getElementById('forum-input').value = '';
    saveState();
  }
}

// Career Page Functions
function updateResume() {
  const skill = document.getElementById('resume-input').value;
  if (skill) {
    state.resume = `Skill: ${skill}`;
    document.getElementById('resume-display').textContent = state.resume;
    saveState();
  } else {
    state.resume = '';
    document.getElementById('resume-display').textContent = 'Resume: None';
    saveState();
  }
}
function updateJobSuggestion() {
  state.jobSuggestion = state.progress.crypto > 50 ? 'Penetration Tester' : 'Start with basics';
  document.getElementById('job-suggestion').textContent = state.jobSuggestion;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Home Page
  if (document.getElementById('threat-data')) {
    refreshThreats();
    setInterval(refreshThreats, 10000);
    document.getElementById('role-select').value = state.role;
    updateRole();
    document.getElementById('hero').classList.toggle('high-contrast', state.highContrast);
  }
  // LMS Page
  if (document.getElementById('recommendation')) {
    document.getElementById('recommendation').textContent = fetchRecommendation();
    setInterval(() => document.getElementById('recommendation').textContent = fetchRecommendation(), 10000);
    document.getElementById('crypto-progress').textContent = state.progress.crypto;
    document.getElementById('network-progress').textContent = state.progress.network;
    updateOfflineStatus();
  }
  // CTF Page
  if (document.getElementById('ctf-challenge')) {
    document.getElementById('ctf-challenge').textContent = fetchCTFChallenge();
    setInterval(() => document.getElementById('ctf-challenge').textContent = fetchCTFChallenge(), 10000);
    document.getElementById('arena-score').textContent = state.guildPoints;
    mockWebSocket.addEventListener('message', event => {
      state.guildPoints = JSON.parse(event.data).scores;
      document.getElementById('arena-score').textContent = state.guildPoints;
      saveState();
    });
  }
  // Gamified Page
  if (document.getElementById('guild-select')) {
    document.getElementById('arena-score').textContent = state.guildPoints;
    document.getElementById('pet-level').textContent = state.petLevel;
    updateNFTStatus();
    updateMentorTip();
  }
  // Progress Page
  if (document.getElementById('career-predictor')) {
    document.getElementById('crypto-progress').textContent = state.progress.crypto;
    document.getElementById('network-progress').textContent = state.progress.network;
    updateCareerPredictor();
    updateHeatmap();
    updateWearableStatus();
    updateMentorTip();
  }
  // Community Page
  if (document.getElementById('forum-posts')) {
    document.getElementById('forum-posts').innerHTML = state.forumPosts.map(p => `<p class="text-sm">${p}</p>`).join('');
  }
  // Career Page
  if (document.getElementById('resume-display')) {
    document.getElementById('resume-display').textContent = state.resume || 'Resume: None';
    document.getElementById('job-suggestion').textContent = state.jobSuggestion;
  }
});