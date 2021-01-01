import {useState, useEffect} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {products} from '../../../products';

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        const outstandingProducts = products.filter(item => item.outstanding);
        resolve(outstandingProducts);
    })

    const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="featuredProducts">
            <div className="container">
                {
                    items.length ?
                    <>
                        <h2>Productos destacados</h2>

                        <ul>
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <ProductCard 
                                            id={item.id}
                                            img={item.img}
                                            titulo={item.title} 
                                            precio={item.price} 
                                            categoria={item.category}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Cargando items...</p>
                }
            </div>
        </section>
    )
}

export default FeaturedProducts;