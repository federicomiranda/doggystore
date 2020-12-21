import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';

const Detail = () => {
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1, 
                nombre: "Producto de prueba",
                foto: "http://placehold.it/350x400",
                descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam laboriosam deleniti neque! Explicabo aspernatur accusantium ex provident natus, nam neque nesciunt eaque iure dolore, architecto maiores corrupti deserunt totam. Veniam.",
                precio: 400
            })
        }, 2000);
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

                    <section>
                        acá van a ir otros productos recomendados
                    </section>
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}

export default Detail;