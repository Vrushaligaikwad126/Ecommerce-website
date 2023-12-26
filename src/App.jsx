import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Ecommerce/Home'
import Navbar from './Ecommerce/Navbar'
import Interf from "./Ecommerce/Interf"
import Cart from './Ecommerce/Cart'
import About  from "./Ecommerce/About"
import Data from "./Ecommerce/Data"
import Footer from "./Ecommerce/Footer"
import Card from "./Ecommerce/Card"
import { useState } from "react"

const App = () => {
  const[data,setData]=useState(Data)
  const[search,setSearch]=useState("")
  const[cart,setCart]=useState([])

  function handleClick(item){
  setCart([...cart,item])
   }


  return (
    <div>
      <BrowserRouter>
      <Navbar setSearch={setSearch} data={data} setData={setData} size={cart.length}/>

      <Routes>
       <Route path='/'element={<Interf  data={data} search={search} handleClick={handleClick}/>}></Route>
        <Route path='/home'element={<Home  data={data} search={search} handleClick={handleClick}/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
        <Route path="/card" element={<Card  data={data} search={search} handleClick={handleClick} />}></Route>
        <Route path='/about/:aboutId'element={<About Data={Data} handleClick={handleClick}/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App


