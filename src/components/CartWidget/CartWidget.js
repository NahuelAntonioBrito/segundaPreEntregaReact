import cart from './assets/carrito-de-compras.png'
import './CartWidget.css';

const CarWidget = () => {
    return (
        <div>
            <img className="logo" src={cart} alt='cart-widget'/>
            0
        </div>
    )
}

export default CarWidget