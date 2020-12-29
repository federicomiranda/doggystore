import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({id, titulo, precio}) => {
    return (
        <article className="productCard">
            <img src="http://placehold.it/300x300" alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
                <Link to={`/detail/${id}`}>Ver detalle</Link>
            </div>
        </article>
    )
}

export default ProductCard;