import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import { getCategories, getTasks } from "../../services";
import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const ItemListContainer = () => {
    const { catId } = useParams();
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getTasks(catId).then((data) => {
            setTasks(data);
        });
    },[catId]);

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    return (
        <>
            <Container>
                <nav>
                    <ul>
                        {categories.map((category) => {
                            return(
                                <li>
                                    <NavLink to={`/category/${category.id}`}>
                                        {`${category.name}`}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <ItemList prods={tasks}/>
            </Container>
        </>
    )
}

export default ItemListContainer