import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { getTasksById } from "../../services";

const ItemDetailContainer = () =>{
    const { id } = useParams();
    const [task, setTask] = useState();

    useEffect(() => {
        getTasksById(id)
            .then((data) => {
                setTask(data);
            })
    },[])

    if (!task) return <div>Cargandoo...</div>

    return(
        <div>
            {id}
            {task.id}
            <ItemDetail
                id={task.id} 
                nombre={task.nombre} 
                img={task.img} 
                category={task.category} 
                detalle={task.detalle} 
                precio={task.precio} 
                stock={task.stock}
            />
            
        </div>
    )
}

export default ItemDetailContainer