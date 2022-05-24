import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { StoreProvider } from './context/StoreProvider'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <AuthProvider>
          <StoreProvider>
            <App />
          </StoreProvider>
        </AuthProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
