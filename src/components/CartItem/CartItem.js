import { CartContext } from "../../context/CartContext";
import { useContext } from "react"
import './CartItem.css';

const CartItem = ({ id, nombre, img, quantity, precio}) => {

    return (
        <div className="CartItem">
            <img src={img} alt={nombre} className="CartImg"/>
            <h4 className="CartNombre">{nombre}</h4>
            <p className="CartQuantity">Cantidad: {quantity}</p>
            <p className="CartPrecio">Precio: ${precio}</p>
        </div>
    );
};

export default CartItem;