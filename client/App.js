import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import Routes from './Routes'
import {setCart} from './store/cart'
import {useDispatch,useSelector} from 'react-redux'



const App = () => {

  const dispatch = useDispatch()

  
  useEffect(async() => {
    const oldCart = await localStorage.getItem('cart');
    const oldCartJSON = await JSON.parse(oldCart)
    await dispatch(setCart(oldCartJSON))
  },[])

  return (
    <div>

      <Navbar />
      <Routes />

    </div>
  )
}

export default App


