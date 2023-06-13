import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({id, nombre, img, category, detalle, precio, stock}) => {
    <div className="card" key={id}>
        <div>
            <img src={img} alt={nombre} className="imgProd"/>
        </div>
        <div className="title">
            <h2 className="nombreProd">{nombre}</h2>
        </div>
        <div className="containerDescrip">
            <p className="precioProd">${precio}</p>
        </div>
        <footer>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada')}/>
        </footer>
    </div>
}

export default ItemDetail