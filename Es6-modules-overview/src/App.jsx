import './App.css'
import Watch from './Components/Watch/Watch'
function App() {
  const Watches=[
    {id:1,name:'seiko',price:1200},    
    {id:2,name:'apple',price:3200},
    {id:3,name:'casio',price:7200},

  ]
 return (
    <>
          <h1>Vite + React</h1>
        {
          Watches.map(Watche=> <Watch key={Watche.id} Watche={Watche}></Watch> )
        } 
    </>
  )
}

export default App
