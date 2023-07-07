import { useState } from "react"
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="ContainerForm">
            <h4>Formulario Orden de Compra</h4>
            <form onSubmit={handleConfirm} className="Form">
                <input
                    className="Input"
                    type="text"
                    value={name}
                    onChange={({ target}) => setName(target.value)}
                    placeholder="Ingrese su Nombre"
                />

                <input
                    className="Input"
                    type="text"
                    value={phone}
                    onChange={({ target}) => setPhone(target.value)}
                    placeholder="Ingrese su Telefono"
                />
                
                <input
                    className="Input"
                    type="text"
                    value={email}
                    onChange={({ target}) => setEmail(target.value)}
                    placeholder="Ingrese su Email"
                />
                <div className="buttom">
                    <button type="submit" className="ButtonForm">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export { CheckoutForm }