import { Footer } from './components/layouts/Footer';
import Header from './components/layouts/Header'
import Provider from './context/Provider'
import Home from './home/Home';

function App() {

  return (
    <div>
 
      <Provider>
        <Header />
        <Home />
        <Footer />
      </Provider> 
    </div>
  )
}

export default App
