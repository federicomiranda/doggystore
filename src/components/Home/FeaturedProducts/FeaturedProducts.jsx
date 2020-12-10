import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    return (
        <section className="featuredProducts">
            <div className="container">
                <h2>Productos destacados</h2>

                <ul>
                    <li><ProductCard titulo="Producto 1" precio="500" /></li>
                    <li><ProductCard titulo="Producto 2" precio="300" /></li>
                    <li><ProductCard titulo="Producto 3" precio="750" /></li>
                    <li><ProductCard titulo="Producto 4" precio="100" /></li>
                </ul>
            </div>
        </section>
    )
}

export default FeaturedProducts;