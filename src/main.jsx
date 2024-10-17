import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FilterInterface from './FilterInterface.jsx'
import './index.css'
import "./FilterInterface.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterInterface />
  </StrictMode>,
)
