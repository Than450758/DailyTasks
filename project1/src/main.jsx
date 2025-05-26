import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Docu1 from './Docu1.jsx'
import Card1 from './Card1.jsx'
import Card from './Card.jsx'
import Under from './Under.jsx'
import CompoCard from './CompoCard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompoCard/>
  </StrictMode>,
)
