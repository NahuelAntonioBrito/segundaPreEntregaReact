import { useContext } from 'react';
import { Link } from "react-router-dom"
import cart from './assets/carrito-de-compras.png'
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';

const CarWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    console.log( totalQuantity())
    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity() > 0 ? 'block': 'none'}}>
            <img className="logo" src={cart} alt='cart-widget'/>
            <span className="cart-count">{totalQuantity()}</span>
        </Link>
    )
}

export default CarWidget
