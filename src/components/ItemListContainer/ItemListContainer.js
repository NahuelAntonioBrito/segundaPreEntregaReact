import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
    const { catId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(true);

        const collectionRef = catId
            ? query(collection(db, 'Items'), where('categoryId', '==', catId))
            : collection(db, 'Items');
        
        getDocs(collectionRef)
            .then(response => {
                const itemsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setItems(itemsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setloading(false)
            })
    },[catId]);
    console.log(db)
    console.log(items)
    return (
        <>
            <h1>Catalogo de Productos</h1>
            <Container className="contenedor">
                <ItemList prods={items}/>
            </Container>
        </>
    )
}

export default ItemListContainer