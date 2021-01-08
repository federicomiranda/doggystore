import {useSelector} from 'react-redux';

const Cart = () => {
    const items = useSelector(state => state.items);

    return (
        <>
            <h1>Estás en el cart</h1>

            {
                items.map(item => (
                    <>
                        <h2>{item.item.title}</h2>
                        <p>{item.cantidad}</p>
                    </>
                ))
            }
        </>
    )
}

export default Cart;