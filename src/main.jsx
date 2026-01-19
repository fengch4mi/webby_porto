import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './utils/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import './utils/i18n'
import './styles/theme.css'
import './styles/micro-interactions.css'
import './styles/optimized-image.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
)
