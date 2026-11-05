import React, { useState } from 'react';
import { Button, Switch } from 'glisse';
import './App.css';

const THEMES = [
  { name: 'Aurora', bg: 'radial-gradient(circle at 15% 20%, #6366f1 0%, transparent 45%), radial-gradient(circle at 85% 80%, #ec4899 0%, transparent 45%), #090d16' },
  { name: 'Cyberpunk', bg: 'radial-gradient(circle at 10% 30%, #06b6d4 0%, transparent 40%), radial-gradient(circle at 90% 70%, #f43f5e 0%, transparent 45%), #05050a' },
  { name: 'Midnight Emerald', bg: 'radial-gradient(circle at 20% 80%, #10b981 0%, transparent 45%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 45%), #061114' },
];

export default function App() {
  const [themeIdx, setThemeIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(65);
  const [stats, setStats] = useState({ wifi: true, bluetooth: true, lowPower: false });

  const toggleStat = (key) => setStats((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="viewport" style={{ background: THEMES[themeIdx].bg }}>
      {/* Dynamic Ambient Background Glow Elements */}
      <div className="ambient-sphere orb-1" />
      <div className="ambient-sphere orb-2" />

      <main className="dashboard-grid">
        {/* Header Capsule */}
        <header className="glass-panel header-panel">
          <div className="header-meta">
            <span className="live-badge">ONLINE</span>
            <h1>Glisse Studio</h1>
          </div>
          <button 
            className="theme-pill"
            onClick={() => setThemeIdx((prev) => (prev + 1) % THEMES.length)}
          >
            ✦ {THEMES[themeIdx].name}
          </button>
        </header>

        {/* Music Player Widget */}
        <section className="glass-panel music-panel">
          <div className="music-cover">
            <div className={`album-art ${isPlaying ? 'spinning' : ''}`}>💿</div>
          </div>
          <div className="music-details">
            <span className="track-tag">NOW PLAYING</span>
            <h3>Synthetic Drift</h3>
            <p>Future Waves • 2026</p>

            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: isPlaying ? '64%' : '25%' }} />
            </div>

            <div className="music-controls">
              <Button variant="ghost" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? '⏸ Pause' : '▶ Play'}
              </Button>
              <Button variant="filled">Next ⏭</Button>
            </div>
          </div>
        </section>

        {/* Hardware & Connectivity Toggles */}
        <section className="glass-panel toggles-panel">
          <h3>System Services</h3>
          
          <div className="toggle-row">
            <div className="label-with-sub">
              <span>Wi-Fi Network</span>
              <small>{stats.wifi ? '5GHz Connected' : 'Disconnected'}</small>
            </div>
            <Switch 
              aria-label="Wi-Fi" 
              checked={stats.wifi} 
              onCheckedChange={() => toggleStat('wifi')} 
            />
          </div>

          <div className="toggle-row">
            <div className="label-with-sub">
              <span>Bluetooth Audio</span>
              <small>{stats.bluetooth ? 'AirPods Pro Linked' : 'Off'}</small>
            </div>
            <Switch 
              aria-label="Bluetooth" 
              checked={stats.bluetooth} 
              onCheckedChange={() => toggleStat('bluetooth')} 
            />
          </div>

          <div className="toggle-row">
            <div className="label-with-sub">
              <span>Low Power Mode</span>
              <small>{stats.lowPower ? 'Enabled (Optimized)' : 'Disabled'}</small>
            </div>
            <Switch 
              aria-label="Low Power" 
              checked={stats.lowPower} 
              onCheckedChange={() => toggleStat('lowPower')} 
            />
          </div>
        </section>

        {/* Sliders & Output Level */}
        <section className="glass-panel slider-panel">
          <div className="slider-header">
            <span>Spatial Audio Volume</span>
            <span className="slider-value">{volume}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="custom-range"
          />
          <div className="button-actions">
            <Button variant="filled">Mute</Button>
            <Button variant="ghost">Audio Routing</Button>
          </div>
        </section>
      </main>
    </div>
  );
}