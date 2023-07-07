import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, documentId, getDocs, query, writeBatch, where, addDoc } from "firebase/firestore";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { db } from "../../services/firebase/firebaseConfig";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productoctsRef = collection(db, 'Items')
            const proctsAddedFromFirestore = await getDocs(query(productoctsRef, where(documentId(), 'in', ids)))
            const { docs } = proctsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const ordererAdded = await addDoc(orderRef, objOrder)
                setOrderId(ordererAdded.id)
                console.log(ordererAdded)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de stock')
            }
        } catch (error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </>
    )
}

export { Checkout }