import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, total, totalQuantity} = useContext(CartContext)
    const navigate = useNavigate();

    if(totalQuantity === 0){
        return (
            <>
                <h1>No hay productoss en el carrito</h1>
                <button className="buttonProd" onClick={() => navigate(`/`)}>Catalogo De Productos</button>
            </>
        )
    }   


    return(
        <>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <button className="buttonProd" onClick={() => navigate(`/checkout`)}>Checkouts</button>
        </>
    )
}

export default Cart;