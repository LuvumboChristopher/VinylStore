import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Routes } from 'react-router-dom'
import { StoreProvider } from './context/StoreProvider'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { AuthProvider } from './context/AuthProvider'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StoreProvider>
          <PayPalScriptProvider deferLoading={true}>
            <App />
          </PayPalScriptProvider>
        </StoreProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
