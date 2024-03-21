
import './App.css'
import Chart from './component/Chart/Chart'
// import Navbar from './component/Navbar/Navbar'
import PersonalNavbar from './component/PersonalNavbar/PersonalNavbar'
import PriceOptions from './component/PriceOptions/PriceOptions'


function App() {
  

  return (
    <>
    <PersonalNavbar></PersonalNavbar>
   {/* <Navbar></Navbar> */}
    <h1 className="text-7xl bg-slate-400 text-black text-center">Price Option</h1>
    <PriceOptions></PriceOptions>
<Chart></Chart>
    </>
  )
}

export default App
