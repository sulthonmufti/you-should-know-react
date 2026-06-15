import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ProgressProvider } from './context/ProgressContext.jsx'

// Import desain token & global styling
import './styles/variables.css'
import './styles/global.css'
import './styles/typography.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <ThemeProvider>
      <ProgressProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProgressProvider>
    </ThemeProvider>
  </React.StrictMode>,
)