import {useEffect} from 'react';
import {Switch, useParams} from 'react-router-dom';

const Category = () => {
    const {category_name} = useParams();

    const queCategoriaEs = (cat) => {
        switch(cat) {
            case 'camas': return <p className="hola">Estoy en camas</p>;
            case 'juguetes': return <p>Estoy en juguetes</p>;
            case 'ropa': return <p>Estoy en ropa</p>
            default: return <p>la categoría no existe</p>
        }
    }

    return (
        <>
            {
               queCategoriaEs(category_name) 
            }
        </>
    )
}

export default Category;