import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import MagnetSimulator from './magnet-simulator';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MagnetSimulator />
  </StrictMode>,
)
