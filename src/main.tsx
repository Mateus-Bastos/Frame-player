import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FramePlayer } from './pages/home'
import "./global.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FramePlayer />
  </StrictMode>,
)
