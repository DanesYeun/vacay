import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/Global.css'
import './assets/icons/leaflet.icons.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      	<App />
    </StrictMode>,
)
