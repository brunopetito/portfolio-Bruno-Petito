
import Header from './components/Header'
import Card from './components/First'
import Projetos from './components/Projetos'
import Footer from './components/Footer'
import Sobre from './components/Sobre'



function App() {
 
  return (
    <div className='flex flex-col min-h-screen justify-center align-middle sm:bg-zinc-800'>
      <div className='flex-1 '>
      <Header></Header>
      <Card></Card>
     
      <Projetos></Projetos>
      <Sobre/>
      </div>
   
        <Footer />
   
    </div>
  )
}

export default App
