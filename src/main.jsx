import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { router } from './routes/Router.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // <StrictMode>
  //   <RouterProvider router={router} />
  // </StrictMode>
)
