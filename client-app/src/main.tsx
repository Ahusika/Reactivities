import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/layout/App'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import { StoreContex, store } from './app/stores/store'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContex.Provider value={store}>
      <App />
    </StoreContex.Provider>
  </React.StrictMode>,
)
