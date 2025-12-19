import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global'
import Footer from '@components/Footer'
import Routers from './routers'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routers />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
