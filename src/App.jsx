import {Navbar} from './components/Navbar/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemCount } from './components/ItemCount/ItemCount.jsx'

const App = () => {
const ItemListContainerProps = {
  greeting:"Welcome to Villara Shop",
  bgBlue : true



}

  return(
<>
<Navbar/>
<ItemListContainer 

{ ...ItemListContainerProps}
//greeting="Hello, welcome to our store perra" 
//bgBlue = {true}
/>
<ItemCount/>


</>

  )
  }

export default App
