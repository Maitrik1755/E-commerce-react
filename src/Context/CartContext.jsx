
import { createContext , useContext } from 'react'


const CartContext = createContext()
import { initialProducts } from '../Data/Product'
export const CartProvider = (props) => {
 
const products = initialProducts

  return (
    <CartContext.Provider value={{products}}>
        {props.children}
    </CartContext.Provider>
  )
}

export const  useCart = () => useContext(CartContext)
