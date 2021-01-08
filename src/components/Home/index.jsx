import {useState, useEffect} from 'react';
import FeaturedProducts from './FeaturedProducts'
import Slider from './Slider'
import CategoriesGrid from './CategoriesGrid'
import Newsletter from './Newsletter'

const Home = () => {
    const [width, setWidth] = useState(null);

    const resizeFn = (e) => {
        setWidth(e.target.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', resizeFn);

        return () => window.removeEventListener('resize', resizeFn);
    }, [])

    return (
        <>
            <Slider />
            <FeaturedProducts />
            <CategoriesGrid />
            <Newsletter />
        </>
    )
}

export default Home;