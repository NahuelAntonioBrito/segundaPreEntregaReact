import React from "react";
import './Item.css';
import { useNavigate } from "react-router-dom";
const Item = ({id, nombre, img, category, detalle, precio, stock}) => {
    const navigate = useNavigate();
    return (
        <div className="card" key={id}>
            <div>
                <img src={img} alt={nombre} className="imgProd"/>
            </div>
            <div className="CartItemDetails">
                <div>
                    <h2 className="nombreProd">{nombre}</h2>
                </div>
                <div className="containerDescrip">
                    <p className="precioProd">${precio}</p>
                    <button className="buttonProd" onClick={() => navigate(`/item/${id}`)}>Ver Detalle</button>
                </div>
            </div>
        </div>
    )
}

export default Item