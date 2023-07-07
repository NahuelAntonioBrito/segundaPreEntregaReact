import './ItemCount.css';

const { useState } = require("react")

const ItemCount = ({stock, initial, onAdd}) =>{
    const [quantity, setquantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setquantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setquantity(quantity - 1)
        }
    }
    
    return (
        <div >
            <div className='item-count'>
                <button className="ButtonDecrement" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="ButtonIncrement" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount