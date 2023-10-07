import { Router } from './Router'
import { CoffeeContextProvider } from './context/CoffeeContext'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <CoffeeContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CoffeeContextProvider>

  )
}

export default App