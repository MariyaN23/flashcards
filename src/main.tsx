import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line import/no-unresolved
import { App } from '@/App'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
