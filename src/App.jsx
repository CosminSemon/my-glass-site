import React from 'react';
import { Button, Switch } from 'glisse';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className="glass-card">
        <h2>Liquid Glass Demo</h2>
        <p>Testing out the glisse components.</p>

        <div className="row">
          <span>Enable Feature</span>
          <Switch aria-label="Toggle setting" defaultChecked />
        </div>

        <div className="buttons">
          <Button variant="filled">Confirm</Button>
          <Button variant="ghost">Cancel</Button>
        </div>
      </div>
    </div>
  );
}