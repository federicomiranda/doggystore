import {useContext} from 'react';
import {Store} from '../../store';
import './Cart.css';
import {Link} from 'react-router-dom';

const Cart = () => {
    const [data, setData] = useContext(Store);

    console.log(data);

    return (
        <section className="cart">
            <h1>Cart</h1>

            <ul>
                {
                    data.items.map(item => (
                        <li>
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