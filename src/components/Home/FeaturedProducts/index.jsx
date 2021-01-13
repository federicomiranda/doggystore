import {useState, useEffect, memo} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {getFirestore} from '../../../db';

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getProducstFromDB = () => {
        db.collection('productos').where("outstanding", "==", true).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })

            setItems(arr);
        })
        .catch(e => console.log(e));

        // db.collection('productos').where("outstanding", "==", true)
        // .onSnapshot(function(querySnapshot) {
        //     var arr = [];
        //     querySnapshot.forEach(function(doc) {
        //         arr.push({id: doc.id, data: doc.data()});
        //     });
        //     setItems(arr);
        // });
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
                                items.map((item) => (
                                    <li key={item.id}>
                                        <ProductCard 
                                            id={item.id}
                                            img={item.data.img}
                                            titulo={item.data.title} 
                                            precio={item.data.price} 
                                            categoria={item.data.category}
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

export default memo(FeaturedProducts);