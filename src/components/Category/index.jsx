import {useState, useEffect} from 'react';
import {products} from '../../products'
import {useParams} from 'react-router-dom';
import ProductsList from './ProductsList';
import './Category.css';
import {getFirestore} from '../../db';

const Category = () => {
    const {category_name} = useParams();
    const [prods, setProds] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        if(category_name) {
            db.collection('productos').where('category', '==', category_name).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })

                setProds(arr);
            })
        }
    }, [category_name])

    return (
        <section className="category">
            <h2>{category_name.split('-').join(' ')}</h2>
            <ProductsList products={prods} />
        </section>
    )
}

export default Category;