import {useState} from 'react';
import './ProductCard.css';

const ProductCard = ({titulo, precio}) => {
    const [qty, setQty] = useState(0);

    const handleClickResta = () => {
        if(qty) {
            setQty(qty - 1);
        }
    }

    return (
        <article className="productCard">
            <img src="https://placehold.it/300x300" alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <div className="qty">
                    <button 
                        disabled={!qty ? 'disabled' : null } 
                        onClick={handleClickResta}
                    >
                        -
                    </button>
                    <input type="text" value={qty} readOnly/>
                    <button onClick={() => setQty(qty + 1)}>+</button>
                </div>
                <p>${precio}</p>
            </div>
        </article>
    )
}

export default ProductCard;