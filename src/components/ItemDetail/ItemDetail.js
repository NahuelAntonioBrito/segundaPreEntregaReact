import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, img, category, detalle, precio, stock}) => {
    <article>
        <div className="card">
            <div>
                <img src={img} alt={nombre} className="imgProd"/>
            </div>
            <div className="title">
                <h2 className="nombreProd">{nombre}</h2>
            </div>
            <div className="containerDescrip">
                <p className="precioProd">${precio}</p>

                <button className="buttonProd"> Ver Descripcion</button>
                
            </div>
        </div>
        <footer className="ItemFooter">
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
        </footer>
    </article>
}

export default ItemDetail