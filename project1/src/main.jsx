import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Ecommerceapp/Style.css'


import MainLayout from './Ecommerceapp/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout/>
  </StrictMode>,
)
