import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, nombre, img, category, detalle, precio, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const {addItem} = useContext(CartContext)
    const navigate = useNavigate();

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, nombre, precio
        };

        addItem(item, quantity);

    }
    
    return(
        <div className="itemDetail" key={id}>
            <div>
                <img src={img} alt={nombre} className="imgDetail"/>
            </div>
            <div className="containerDescrip">
                <h2 className="title">{nombre}</h2>
                <p className="description">{detalle}</p>
                <p className="precioDetail">${precio}</p>
            </div>
            <footer className="footerDetail">
                {
                    quantityAdded > 0 ? (
                        <button className="buttonProd" onClick={() => navigate(`/cart`)}>Terminar Compra</button>
                    ) : (
                        <ItemCount className="itemCount" initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>
        </div>
    )
}

export default ItemDetail