import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store/store.js"
import './index.css'
import App from './App.jsx'

import { theme } from "./hooks/theme.js"
// import materialUi components
import { ThemeProvider } from "@mui/material/styles"

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store} defaultMode="dark">
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
)
