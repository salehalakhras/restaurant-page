import './App.css'
import Description from './component/Description'
import Footer from './component/Footer'
import Header from './component/Header'
import Hero from './component/Hero'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-slate-800">
      <Header page={0}></Header>
      <Hero></Hero>
      <Description></Description>
      <Footer></Footer>
    </div>
  )
}

export default App
