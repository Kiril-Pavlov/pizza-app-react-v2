import React,{createContext} from 'react'
import { pizzaProducts } from '../fakeData/pizzas';

const CartContext = createContext();

const CartProvider = ({children}) => {


    const value={pizzaProducts}
  return (
    <CartContext.Provider value={pizzaProducts}>
        {children}
    </CartContext.Provider>
  )
}

export {CartContext,CartProvider}