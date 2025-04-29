
import './App.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/aos.css'
import '../src/assets/css/style.css'
import Home from './pages/home'
import About from './pages/about'
import Header from './component/header'
import Footer from './component/footer'

function App() {


  return (
    <>
      <main class="main-homepage">
        <Header/>
        <About/>
        <Footer/>
      </main>
    </>
  )
}

export default App
