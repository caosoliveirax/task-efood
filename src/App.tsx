import { GlobalStyle } from './global'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routers'
import Footer from '@components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routers />
      <Footer />
    </BrowserRouter>
  )
}

export default App
