import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { getTasksById } from "../../services";

const ItemDetailContainer = () =>{
    const [task, setTask] = useState();

    const { id } = useParams()

    useEffect(() => {
        getTasksById(id)
            .then((response) => {
                setTask(response);
            });
    },[]);

    if (!task) return <div>Cargandoo...</div>

    return(
        <div>
            <ItemDetail {...task}/>
        </div>
    )
}

export default ItemDetailContainer