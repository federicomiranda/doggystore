import FeaturedProducts from './FeaturedProducts'
import Slider from './Slider'
import CategoriesGrid from './CategoriesGrid'
import Newsletter from './Newsletter'

const Home = () => {
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