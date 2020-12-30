import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Comments from './Comments';

const Detail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id, 
                nombre: "Producto de prueba",
                foto: "http://placehold.it/150x100",
                descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam laboriosam deleniti neque! Explicabo aspernatur accusantium ex provident natus, nam neque nesciunt eaque iure dolore, architecto maiores corrupti deserunt totam. Veniam.",
                precio: 400
            })
        }, 500);
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);

    return (
        <>
            {
                product ?
                <div className="container">
                    <ProductDetail item={product} />
                    <Comments />
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default Detail;