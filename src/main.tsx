import '@/lib/dayjs'
import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
