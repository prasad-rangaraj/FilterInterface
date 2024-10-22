import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FilterInterface from './FilterInterface/FilterInterface.jsx'
import './index.css'
import "./FilterInterface/FilterInterface.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterInterface />
  </StrictMode>
)
