import {useContext, useEffect, useState} from 'react';
import {Store} from '../../store';
import './Cart.css';
import {Link} from 'react-router-dom';

const Cart = () => {
    const [data, setData] = useContext(Store);
    const [prods, setProds] = useState([]);

    useEffect(() => {
        if(data.items.length) {
            const productos = JSON.stringify(data.items);
            localStorage.setItem('productos', productos);
        }

        if(localStorage.getItem('productos')) {
            setProds(JSON.parse(localStorage.getItem('productos')));
        } else {
            setProds(data.items);   
        }

    }, [data.items])

    return (
        <section className="cart">
            <h1>Cart</h1>

            <ul>
                {
                    prods.map(item => (
                        <li key={item.id}>
                            <img src={`/products/${item.item.img}`} alt=""/>
                            <div>
                                <h2>{item.item.title}</h2>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio por unidad: <strong>${item.item.price}</strong></p>
                                <p>Precio total: <strong>${item.item.price * item.cantidad}</strong></p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <div className="final">
                <p>Precio total: {data.precioTotal}</p>

                <Link to="/checkout">Finalizar compra</Link>
            </div>
        </section>
    )
}

export default Cart;