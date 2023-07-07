import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { getTasksById } from "../../services";
import './ItemDetailContainer.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null);
    const [loading, setloading] = useState(true);

    const { id } = useParams()

    useEffect(() => {
        setloading(true);

        const docRef = doc(db, 'Items', id)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const itemAdapted = { id: response.id, ...data}
                setItem(itemAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setloading(false)
            })
    },[ id ]);

    if (!item) return <div>Cargandoo...</div>

    return(
        <div className="contenedor">
            <ItemDetail {...item}/>
        </div>
    )
}

export default ItemDetailContainer