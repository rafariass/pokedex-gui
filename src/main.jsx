import './main.css'

import { createRoot } from 'react-dom/client'
import { enableMocking } from './config/environment'
import Pokedex from './Pokedex'

const renderApp = () => {
  const rootElement = document.getElementById('root')
  createRoot(rootElement).render(<Pokedex />)
}

enableMocking()
  .then(renderApp)
  .catch(console.error)
