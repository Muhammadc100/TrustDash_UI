import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css';

const i18n = {
  Polaris: {
    Common: {
      close: "Close",
      cancel: "Cancel",
      submit: "Submit"
    },
  },
};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider i18n={i18n}>
    <App />
    </AppProvider>
  </StrictMode>
)
