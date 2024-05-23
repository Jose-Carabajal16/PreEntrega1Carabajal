import Navbar from './components/navBar/navbar'
import ItemsListContainer from './containers/itemsListContainer/itemsListContainer'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <ItemsListContainer greeting={'Afrodita-Tienda de Joyas'} />

    </div>

  )
}

export default App
