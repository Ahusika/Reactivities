import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css'
import 'react-calendar/dist/Calendar.css';
import  'react-toastify/dist/ReactToastify.css'
import './app/layout/styles.css'
import { StoreContex, store } from './app/stores/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContex.Provider value={store}>
      <RouterProvider router={router}/>
    </StoreContex.Provider>
  </React.StrictMode>,
)
