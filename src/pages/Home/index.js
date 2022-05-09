import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const pizzaProducts = useContext(CartContext);
  console.log("pici", pizzaProducts)
  return (
    <div className='pizzas-container'>
      {pizzaProducts.map(pizza => (
        <div className='pizza-item' key={pizza.id}>
          <Link to={pizza.name}>
            <img src={pizza.image} alt={pizza.name} />
          </Link>
          <div className='pizza-name'>
            {pizza.name}
          </div>
          <div className='pizza-ingredients'>
            {pizza.ingredients}
          </div>
          <div className='prices'>
            <div className='small-price'>{pizza.priceSmall} ден.</div>-
            <div className='big-price'>{pizza.priceBig} ден.</div>
          </div>
          <Link to={pizza.name}>
            <button className='buy-button'>Buy pizza</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home