import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Category = () => {
    const {category_name} = useParams();

    useEffect(() => {
        console.log(category_name);
    }, [category_name])

    return (
        <>
            <h1>{category_name}</h1>
        </>
    )
}

export default Category;