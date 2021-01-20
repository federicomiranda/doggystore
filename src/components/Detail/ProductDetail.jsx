import {useState, useContext, useEffect} from 'react';
import './ProductDetail.css';
import {Store} from '../../store';
import {useHistory} from 'react-router-dom';
import {getFirestore} from '../../db';

const ProductDetail = ({item}) => {
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);	
    const db = getFirestore();

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }	

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items: [...data.items, {item: item.data, cantidad: qty}],
            precioTotal: data.precioTotal + (item.data.price * qty)
        });

        history.push('/cart');
        // alert(`Agregaste ${qty} productos al carrito`);	
    }
    
    const handleUpdatePrice = () => {
        db.collection('productos').doc(item.id).update({
            price: 100,
        })
        .then(() => console.log('Se actualizó correctamente'))
        .catch(error => console.log(error));
    }

    return (
        <article className="product">
            <div className="foto">
                <img src={`/products/${item.data.img}`} alt=""/>
            </div>

            <div className="info">
                <h1 className="title">{item.data.title}</h1>
                {
                    !!item.data.description && <p className="description">{item.data.description}</p>
                }
                <p className="price">${item.data.price}</p>

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
                <button className="btn" onClick={handleUpdatePrice}>Actualizar precio</button>
            </div>
        </article>
    )
}

export default ProductDetail;