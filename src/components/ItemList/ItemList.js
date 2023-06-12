import React from "react";
import Item from "../Item/Item";
import './ItemList.css';


const ItemList = ({prods}) => {
    
    return prods.map((prods) => (
        <div className="contenedor">
            <Item
                id={prods.id} 
                nombre={prods.nombre} 
                img={prods.img} 
                category={prods.category} 
                detalle={prods.detalle} 
                precio={prods.precio} 
                stock={prods.stock}
            />
        </div>
    ));
};

export default ItemList