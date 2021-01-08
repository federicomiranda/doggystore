import {useState} from 'react';
import './ProductDetail.css';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const ProductDetail = ({item}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [qty, setQty] = useState(1);	

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }	

    const onAdd = () => {
        dispatch({type: 'SUMAR_ITEMS_CONTADOR', payload: qty})
        dispatch({type: 'AGREGAR_ITEM', payload: {item, cantidad: qty}})
        history.push('/cart');
        // alert(`Agregaste ${qty} productos al carrito`);	
    }

    return (
        <article className="product">
            <div className="foto">
                <img src="http://placehold.it/400x400" alt=""/>
            </div>

            <div className="info">
                <h1 className="title">{item.title}</h1>
                {
                    !!item.description && <p className="description">{item.description}</p>
                }
                <p className="price">${item.price}</p>

                <div className="qty">	
                    <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>	
                </div>

                <button className="btn" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </article>
    )
}

export default ProductDetail;