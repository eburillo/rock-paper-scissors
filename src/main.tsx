import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ScoreProvider } from './context/score.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>
)
