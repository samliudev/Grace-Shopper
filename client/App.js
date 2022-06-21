import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import Routes from './Routes'
import {Link} from 'react-router-dom'
import {setCart} from './store/cart'
import {useDispatch} from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const oldCart = localStorage.getItem('cart');
    if (oldCart){
      const oldCartJSON = JSON.parse(oldCart)
      dispatch(setCart(oldCartJSON))
    }
  },[])

  return (
    <div>

      <Navbar />
      <Link to= "/checkout">Cart</Link>
      <Routes />

    </div>
  )
}

export default App


