import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { StoreProvider } from './context/StoreProvider'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <AuthProvider>
          <StoreProvider>
            <PayPalScriptProvider deferLoading={true}>
              <App />
            </PayPalScriptProvider>     
          </StoreProvider>
        </AuthProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
