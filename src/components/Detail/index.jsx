import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Comments from './Comments';
import './Detail.css';
import {getFirestore} from '../../db';

const Detail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const db = getFirestore();

    useEffect(() => {
        db.collection('productos').doc(id).get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data());
            }
        })
        .catch(e => console.log(e));

        // db.collection('productos').doc(id)
        // .onSnapshot(function(doc) {
        //     setProduct(doc.data());
        // });
    }, []);

    return (
        <>
            {
                product ?
                <div className="container">
                    <ol className="breadcrum">
                        <li>
                            <Link to={`/${product.category}`}>{product.category.split('-').join(' ')}</Link>
                        </li>
                        <li>
                            {product.title}
                        </li>
                    </ol>
                    
                    <ProductDetail item={product} />
                    <Comments />
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default Detail;