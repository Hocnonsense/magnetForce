import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import MagnetSimulator from './control-panel';
import React from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MagnetSimulator />
  </StrictMode>,
)
